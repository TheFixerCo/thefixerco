
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquareText, Sparkles, Share2, Send, BarChart3, Users, Calendar } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardShell } from "@/components/DashboardShell";
import { FeatureCard } from "@/components/FeatureCard";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardShell>
        <div className="flex flex-col gap-8">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-open-sans font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
                    Welcome to The Fixer Connect
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300 font-poppins">
                    Your done-for-you social selling & sales automation system
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/help">Need Help?</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-fixer-dark dark:border-t dark:border-b dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-open-sans font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
                    Powerful Features for Service Providers
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300 font-poppins">
                    More than just listing services - a complete solution to grow your business
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <FeatureCard
                  icon={<Sparkles className="h-10 w-10 text-purple-custom" />}
                  title="AI-Generated Content"
                  description="Auto-generates marketing content tailored to your services using AI and templates"
                  href="/content-generator"
                />
                <FeatureCard
                  icon={<Share2 className="h-10 w-10 text-purple-custom" />}
                  title="Social Selling Strategies"
                  description="Get customized social selling strategies tailored to your specific niche"
                  href="/strategies"
                />
                <FeatureCard
                  icon={<MessageSquareText className="h-10 w-10 text-purple-custom" />}
                  title="WhatsApp Automation"
                  description="Automate follow-ups and engagement with clients through WhatsApp"
                  href="/automation"
                />
                <FeatureCard
                  icon={<BarChart3 className="h-10 w-10 text-purple-custom" />}
                  title="Performance Analytics"
                  description="Track your engagement, conversions, and growth with detailed analytics"
                  href="/analytics"
                />
                <FeatureCard
                  icon={<Users className="h-10 w-10 text-purple-custom" />}
                  title="Client Management"
                  description="Manage your client relationships and communications in one place"
                  href="/clients"
                />
                <FeatureCard
                  icon={<Calendar className="h-10 w-10 text-purple-custom" />}
                  title="Appointment Scheduling"
                  description="Let clients book appointments directly through your profile"
                  href="/scheduling"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-poppins">
                    Why Choose The Fixer Connect
                  </div>
                  <h2 className="text-3xl font-open-sans font-bold tracking-tighter md:text-4xl text-black dark:text-white">
                    Stop Just Listing Services. Start Selling Them.
                  </h2>
                  <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl font-poppins">
                    The Fixer Connect transforms how service providers connect with clients. Our platform doesn't just
                    list your services - it actively helps you market and sell them.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="flex-1">Get Started</Button>
                    <Button variant="outline" className="flex-1">
                      Book a Demo
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-custom to-purple-accent rounded-full opacity-20 blur-3xl"></div>
                    <div className="relative h-full w-full rounded-xl border bg-white dark:bg-fixer-dark p-4 shadow-xl">
                      <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                        <div className="flex flex-col items-center gap-2 p-4 text-center">
                          <Send className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                          <div className="space-y-2">
                            <h3 className="font-semibold text-black dark:text-white">Preview Your Dashboard</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-poppins">
                              Sign up to access your personalized service provider dashboard
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DashboardShell>
    </>
  );
};

export default Dashboard;
