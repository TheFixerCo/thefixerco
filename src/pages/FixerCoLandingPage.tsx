
import { Calendar, Linkedin, Instagram, Facebook, Aperture } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FixerCoLandingPage() {
  return (
    <div className="bg-white text-black dark:bg-fixer-dark dark:text-white font-poppins">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold">Need to get a job done? Join The Fixer Co.</h1>
        <p className="mt-4 max-w-xl text-lg">The marketplace for Service Providers to level up and Clients to book you instantly.</p>
        <Button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-2xl font-bold">
          Book a Fixer
        </Button>
      </section>

      {/* What is The Fixer Co */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-4">What is The Fixer Co?</h2>
          <p className="max-w-2xl text-lg">We're your shortcut to getting sh*t sorted — from strategy to setup.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <li className="flex items-center gap-2 text-lg">🚀 Take your business to the next level</li>
            <li className="flex items-center gap-2 text-lg">🎨 Grow your Branding & Content</li>
            <li className="flex items-center gap-2 text-lg">🤖 Automate with Admin & Virtual Ass's</li>
            <li className="flex items-center gap-2 text-lg">🎭 Creative Services</li>
          </ul>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-custom text-white flex items-center justify-center mx-auto mb-4">1</div>
              <p className="font-bold text-xl">Browse or get matched</p>
            </div>
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-custom text-white flex items-center justify-center mx-auto mb-4">2</div>
              <p className="font-bold text-xl">Book securely</p>
            </div>
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-custom text-white flex items-center justify-center mx-auto mb-4">3</div>
              <p className="font-bold text-xl">Fixers deliver</p>
            </div>
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-custom text-white flex items-center justify-center mx-auto mb-4">4</div>
              <p className="font-bold text-xl">Rate & rebook</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Fixer Co Works */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">Why The Fixer Co Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Curated Talent</h3>
              <p>Only the best fixers make it into our network</p>
            </div>
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">No-fuss Booking</h3>
              <p>Book and pay securely, hassle-free</p>
            </div>
            <div className="p-6 bg-white dark:bg-fixer-dark shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Built-in Accountability</h3>
              <p>Ratings ensure reliable service every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for Different Needs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">What do you need?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">Founder needing to level up</h3>
              <p>Access expert help for your growing business</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">Small Biz needing to scale</h3>
              <p>Get specialized support to reach the next level</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">Agency needing to automate</h3>
              <p>Streamline processes and boost efficiency</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">Creative needing to get booked</h3>
              <p>Showcase your skills and find clients easily</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all md:col-span-2">
              <h3 className="text-xl font-bold mb-2">Just curious and want to join the community</h3>
              <p>Connect with like-minded professionals in our network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 Teaser */}
      <section className="py-20 px-6 bg-yellow-50 dark:bg-yellow-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-4">Launching in May – Phase 2</h2>
          <p className="mb-4 text-lg">We're building the future of Africa's Creative Industry through AI.</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Public Fixer profiles</li>
            <li>Fixer Academy & Training</li>
            <li>Ratings & recurring clients</li>
            <li>Fixer Dashboard (earn, manage, grow)</li>
            <li>Join the Community and grow together</li>
          </ul>
          <Button className="mt-6 px-6 py-3 bg-black hover:bg-gray-800 text-white dark:bg-purple-custom dark:hover:bg-purple-accent rounded-2xl font-bold">
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold mb-4 text-center">Join the Movement</h2>
          <p className="mb-6 text-center text-lg">Sign up for updates and early access.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input className="px-4 py-2 border rounded-md flex-grow" type="email" placeholder="Email address" />
            <Button className="px-6 py-2 bg-purple-custom hover:bg-purple-accent text-white rounded-md">
              Subscribe
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/biancasibiya/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-custom transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-custom transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/bianca_sibiya/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-custom transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-custom transition-colors">
              <Aperture size={24} />
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-sm text-center text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} The Fixer Co. Built for bold solutions.</p>
        <div className="mt-2">
          <a href="#" className="underline mr-4 hover:text-purple-custom transition-colors">Terms</a>
          <a href="#" className="underline hover:text-purple-custom transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
