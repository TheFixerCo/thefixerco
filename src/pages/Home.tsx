
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FixerLogo from "@/components/FixerLogo";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-6">
        <div className="flex justify-center mb-6">
          <FixerLogo size={80} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to The Fixer Co</h1>
        <p className="text-muted-foreground mb-6">
          Africa's first curated marketplace for getting things done. Book expert help in just a few clicks.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link to="/fixer-landing">View Our Landing Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
