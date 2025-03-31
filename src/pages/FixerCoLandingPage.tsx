
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Header from "@/components/Header";

export default function FixerCoLandingPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-black dark:bg-black dark:text-white font-poppins">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold">Need to get a job done? Join The Fixer Co.</h1>
          <p className="mt-4 max-w-xl text-lg">The marketplace for Service Providers to level up and Clients to book you instantly.</p>
          <Button className="mt-6 px-6 py-6 bg-yellow-400 hover:bg-yellow-500 text-black rounded-2xl font-bold">
            Book a Fixer
          </Button>
        </section>

        {/* What is The Fixer Co */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-zinc-900">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">What is The Fixer Co?</h2>
            <p className="max-w-2xl">We're your shortcut to getting sh*t sorted — from strategy to setup.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <li>🚀 Take your business to the next level</li>
              <li>🎨 Grow your Branding & Content</li>
              <li>🤖 Automate with Admin & Virtual Ass's</li>
              <li>🎭 Creative Services</li>
            </ul>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-6">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">How it Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="glass-card p-6 rounded-lg">
                <p className="font-bold">1. Browse or get matched</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <p className="font-bold">2. Book securely</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <p className="font-bold">3. Fixers deliver</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <p className="font-bold">4. Rate & rebook</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why The Fixer Co Works */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-zinc-900">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Why The Fixer Co Works</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="glass-card p-6 rounded-lg">Curated Talent</li>
              <li className="glass-card p-6 rounded-lg">No-fuss Booking</li>
              <li className="glass-card p-6 rounded-lg">Built-in Accountability</li>
            </ul>
          </div>
        </section>

        {/* Solutions for Different Needs */}
        <section className="py-20 px-6">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">What do you need?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="glass-card p-6 rounded-lg">Founder needing to level up</li>
              <li className="glass-card p-6 rounded-lg">Small Biz needing to scale</li>
              <li className="glass-card p-6 rounded-lg">Agency needing to automate</li>
              <li className="glass-card p-6 rounded-lg">Creative needing to get booked</li>
              <li className="glass-card p-6 rounded-lg">Just curious and want to join the community</li>
            </ul>
          </div>
        </section>

        {/* Phase 2 Teaser */}
        <section className="py-20 px-6 bg-yellow-50 dark:bg-yellow-900">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Launching in May – Phase 2</h2>
            <p className="mb-4">We're building the future of Africa's Creative Industry through AI.</p>
            <ul className="list-disc pl-6">
              <li>Public Fixer profiles</li>
              <li>Fixer Academy & Training</li>
              <li>Ratings & recurring clients</li>
              <li>Fixer Dashboard (earn, manage, grow)</li>
              <li>Join the Community and grow together</li>
            </ul>
            <Button variant="outline" className="mt-6 px-6 py-6 bg-black text-white hover:bg-black/80 rounded-2xl font-bold">
              Join the Waitlist
            </Button>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-black text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Let's Get Sh*t Fixed.</h2>
            <p className="mb-8 max-w-2xl">Need a fixer, want to collaborate, or just curious? Drop us a note and let's connect.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="First Name*" className="p-3 rounded-lg bg-white text-black" required />
              <Input type="text" placeholder="Last Name*" className="p-3 rounded-lg bg-white text-black" required />
              <Input type="email" placeholder="Email Address*" className="p-3 rounded-lg bg-white text-black md:col-span-2" required />
              <Input type="text" placeholder="Job Title" className="p-3 rounded-lg bg-white text-black" />
              <Input type="text" placeholder="Company / Brand" className="p-3 rounded-lg bg-white text-black" />
              <select className="p-3 rounded-lg bg-white text-black border border-input h-10" required>
                <option value="">Select Country*</option>
                <option value="South Africa">South Africa</option>
                <option value="Kenya">Kenya</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Other">Other</option>
              </select>
              <select className="p-3 rounded-lg bg-white text-black border border-input h-10" required>
                <option value="">I'm reaching out as a…*</option>
                <option>💼 Founder / Entrepreneur</option>
                <option>🎨 Creative / Freelancer</option>
                <option>🏢 Agency</option>
                <option>🧑‍💻 Brand / Business</option>
                <option>📢 Media / Press</option>
                <option>🤝 Potential Partner</option>
                <option>❓Just Curious</option>
              </select>
              <Textarea placeholder="How can we help you?*" className="p-3 rounded-lg bg-white text-black md:col-span-2" required />
              <div className="md:col-span-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I want to list my services as a Fixer
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I want early access to Phase 2
                </label>
              </div>
              <Button type="submit" className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-2xl font-bold md:col-span-2">
                Send Request
              </Button>
            </form>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-20 px-6">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="mb-4">Sign up for updates and early access.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input className="px-4 py-2 border rounded-md" type="email" placeholder="Email address" />
              <Button className="px-6 py-2 bg-purple-custom hover:bg-purple-accent text-white rounded-md">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-purple-custom hover:text-purple-accent"><Linkedin size={24} /></a>
              <a href="#" className="text-purple-custom hover:text-purple-accent"><Facebook size={24} /></a>
              <a href="#" className="text-purple-custom hover:text-purple-accent"><Instagram size={24} /></a>
              <a href="#" className="text-purple-custom hover:text-purple-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0"></path>
                  <path d="M12 19c-4.3 0 -7.75 -2.6 -9 -6c1.25 -3.4 4.7 -6 9 -6s7.75 2.6 9 6c-1.25 3.4 -4.7 6 -9 6Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 text-sm text-center text-gray-500">
          <p>© 2025 The Fixer Co. Built for bold solutions.</p>
          <div className="mt-2">
            <a href="#" className="underline mr-4 hover:text-purple-custom">Terms</a>
            <a href="#" className="underline hover:text-purple-custom">Privacy</a>
          </div>
        </footer>
      </div>
    </>
  );
}
