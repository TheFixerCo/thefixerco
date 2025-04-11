import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquareText, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

export const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white dark:bg-fixer-dark">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex h-full flex-col justify-between">
                <div className="px-2 py-6">
                  <Link to="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                    <img 
                      src="/lovable-uploads/8505d01f-5506-497c-bb06-5e81085e9a9f.png" 
                      alt="The Fixer Co" 
                      className="h-6 w-6" 
                    />
                    <span>The Fixer Connect</span>
                  </Link>
                  <nav className="mt-6 flex flex-col gap-4">
                    <Link
                      to="/dashboard"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="#content-generator"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Content Generator
                    </Link>
                    <Link
                      to="#strategies"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Selling Strategies
                    </Link>
                    <Link
                      to="#automation"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      WhatsApp Automation
                    </Link>
                    <Link
                      to="#analytics"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Analytics
                    </Link>
                    <Link
                      to="#settings"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Settings
                    </Link>
                  </nav>
                </div>
                <div className="border-t p-4">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    <X className="mr-2 h-4 w-4" />
                    Close Menu
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="hidden items-center gap-2 font-bold md:flex">
            <img 
              src="/lovable-uploads/8505d01f-5506-497c-bb06-5e81085e9a9f.png" 
              alt="The Fixer Co" 
              className="h-6 w-6" 
            />
            <span>The Fixer Connect</span>
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="#content-generator"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Content Generator
          </Link>
          <Link
            to="#strategies"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Selling Strategies
          </Link>
          <Link
            to="#automation"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            WhatsApp Automation
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <ModeToggle />
          <Button size="sm" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
