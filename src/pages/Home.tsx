
import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground mb-6">
          This is the new home page. All previous pages have been deleted.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Home;
