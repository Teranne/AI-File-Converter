
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      
      toast({
        title: "Reset email sent",
        description: "Check your inbox for password reset instructions",
      });
      
      setSuccess(true);
    } catch (err: any) {
      console.error("Password reset error:", err);
      setError(err.message || "Failed to send reset instructions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-4"
          onClick={() => navigate("/login")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                AI File Converter
              </span>
            </Link>
            
            <h1 className="mt-6 text-3xl font-bold tracking-tight">
              Reset your password
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Enter your email address and we'll send you instructions to reset your password
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-900/50 shadow-lg backdrop-blur-lg sm:rounded-xl p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}
            
            {success ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Check your email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've sent password reset instructions to {email}
                </p>
                <div className="mt-6">
                  <Button 
                    onClick={() => navigate("/login")} 
                    className="w-full"
                  >
                    Back to Sign in
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Sending instructions..." : "Send reset instructions"}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Remember your password?{" "}
                <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
