
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground mb-6">
          This is the home page. Check out our new Fixer Co landing page.
        </p>
        <div className="space-y-4">
          <Button asChild>
            <Link to="/fixer-landing">View Fixer Co Landing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
