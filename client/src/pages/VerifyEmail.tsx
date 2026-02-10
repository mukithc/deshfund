import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import api from "@/lib/api";

/* Bangladesh Heritage Fusion Design - Email Verification Page */

export default function VerifyEmail() {
  const [, setLocation] = useLocation();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get verification token from URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link. Please check your email for the correct link.");
      return;
    }

    // Call backend API to verify email
    const verifyEmail = async () => {
      try {
        const response = await api.post("/auth/verify-email", { token });
        setStatus("success");
        setMessage(response.data.message || "Your email has been verified successfully!");
        toast.success("Email verified! You can now log in.");
      } catch (error: any) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage(
          error.response?.data?.message || 
          "Verification failed. The link may have expired or is invalid."
        );
        toast.error("Verification failed");
      }
    };

    verifyEmail();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <button 
          onClick={() => setLocation("/")} 
          className="flex items-center space-x-2 mb-8 mx-auto hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-accent font-semibold text-xl">DF</span>
          </div>
          <span className="text-2xl font-display font-bold text-foreground">DeshFund</span>
        </button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-display text-center">
              Email Verification
            </CardTitle>
            <CardDescription className="text-center">
              {status === "loading" && "Verifying your email address..."}
              {status === "success" && "Your account is now active"}
              {status === "error" && "Verification unsuccessful"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Status Icon */}
              <div className="flex justify-center">
                {status === "loading" && (
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  </div>
                )}
                {status === "success" && (
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                )}
                {status === "error" && (
                  <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  {message}
                </p>
              </div>

              {/* Actions */}
              {status === "success" && (
                <Button 
                  onClick={() => setLocation("/login")} 
                  className="w-full font-accent"
                >
                  Continue to Login
                </Button>
              )}

              {status === "error" && (
                <div className="space-y-3">
                  <Button 
                    onClick={() => setLocation("/register")} 
                    className="w-full font-accent"
                  >
                    Register Again
                  </Button>
                  <Button 
                    onClick={() => setLocation("/login")} 
                    variant="outline"
                    className="w-full font-accent"
                  >
                    Back to Login
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need help?{" "}
          <button 
            onClick={() => setLocation("/contact")} 
            className="text-primary hover:underline"
          >
            Contact Support
          </button>
        </p>
      </div>
    </div>
  );
}
