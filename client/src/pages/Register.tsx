import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

/* Bangladesh Heritage Fusion Design - Register Page */

export default function Register() {
  const { register } = useAuth();
  const [, setLocation] = useLocation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, fullName);
      toast.success("Account created successfully!");
      setLocation("/dashboard");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-accent font-semibold text-xl">DF</span>
              </div>
              <span className="text-2xl font-display font-bold text-foreground">DeshFund</span>
            </a>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">Create Account</CardTitle>
              <CardDescription>
                Join DeshFund and start investing in Bangladesh's most promising businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password (min. 6 characters)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full font-accent" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-primary font-medium hover:underline">
                    Sign in
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="/terms">
              <a className="text-primary hover:underline">Terms of Service</a>
            </Link>{" "}
            and{" "}
            <Link href="/privacy">
              <a className="text-primary hover:underline">Privacy Policy</a>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        className="hidden lg:block lg:flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-5_1770704720000_na1fn_aW52ZXN0bWVudC1zdWNjZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTVfMTc3MDcwNDcyMDAwMF9uYTFmbl9hVzUyWlhOMGJXVnVkQzF6ZFdOalpYTnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nZToFMjrjnYd6988rzHwX0kY9CgrV8k3mHT85~0nX3i77hchidVqmlkL397hTz-~sZ~nAux7dVqRLzKsHVwywruIe~QqCsBuuWtl4BMCyuBAOf5usatEbjuYUA3L3mT26zyXvWUxVXbGaQ8HTNUxceTaLrtR5mCCLlBJ3KbkzumOlUAo7i7oKj~d~4OR1mrTvMf2-RaU7MqmxTj1V6Be5Dh6z7AbUN11CUQ~uCMcChVJ3p2JtOX~XOoJEiArqGbjbYiQJTK66i3W6ZUvHDPA~0f8s~mf-6JB6~cmUj617e9zpv7GX49SNd3VlPkryXg1~L~s168OGLCPnY9dqmeSFA__')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
        <div className="absolute bottom-12 left-12 right-12 text-foreground">
          <h2 className="text-3xl font-display font-bold mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-lg opacity-90">
            Discover opportunities to support innovative entrepreneurs and grow your wealth
          </p>
        </div>
      </div>
    </div>
  );
}
