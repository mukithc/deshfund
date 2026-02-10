import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

/* Bangladesh Heritage Fusion Design - Login Page */

export default function Login() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);
      toast.success("Login successful!");
      setLocation("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials.");
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
          <button 
            onClick={() => setLocation("/")} 
            className="flex items-center space-x-2 mb-8 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-accent font-semibold text-xl">DF</span>
            </div>
            <span className="text-2xl font-display font-bold text-foreground">DeshFund</span>
          </button>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to continue investing in Bangladesh's future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button 
                      type="button"
                      onClick={() => setLocation("/forgot-password")} 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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

                <Button type="submit" className="w-full font-accent" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setLocation("/register")} 
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </button>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <button 
              type="button"
              onClick={() => setLocation("/terms")} 
              className="text-primary hover:underline"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button 
              type="button"
              onClick={() => setLocation("/privacy")} 
              className="text-primary hover:underline"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        className="hidden lg:block lg:flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-1_1770704723000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTFfMTc3MDcwNDcyMzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bdGT-RbnZE3CQsR1iuxK3g3b5ebl-dUFIvR4-WUtJwHFmFFCz6GugeQ76Yn9WUEYrP3lO~-TexGpyUPIxVPe7pNqGKZIRRtHy~1QsyVNKEi9odxNRSIhJCOj811bTB5h0AbdQF8vsunqzgtWj-kQeQmhw-OsT9HxnWcaRkbiYuo5o~6tYLOJhY4QnA1ekWirK7kK-imGixYNrciSYOq1DelyezV-xnzT8JWunZBM2TiuQTz2s5LgcfaUHNqlDPmPEADIisp-24Nnt2GKXHAC2Cr10r4GoX9clE~vRAT1TIbCmdNPaJH4oFO4AERJEf9QMaRxajBrjVXOjmDLxT6ruA__')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
        <div className="absolute bottom-12 left-12 right-12 text-foreground">
          <h2 className="text-3xl font-display font-bold mb-4">
            Invest in Bangladesh's Future
          </h2>
          <p className="text-lg opacity-90">
            Join thousands of investors supporting innovative startups and businesses across Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}
