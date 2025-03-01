
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUserEmail(user.email);
      } else {
        // User is not logged in, redirect to login
        navigate("/login");
      }
    });
    
    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);
  
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI File Converter
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {userEmail}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="mb-8">Welcome to your dashboard. You can convert files here.</p>
        
        <div className="bg-white/50 dark:bg-gray-900/50 shadow-lg backdrop-blur-lg rounded-xl p-8">
          <p className="text-center text-lg mb-6">
            This is a placeholder for the file conversion dashboard.
            Future implementation will include file upload and conversion functionality.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
