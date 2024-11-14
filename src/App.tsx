import React from 'react';
import { Shield, Clock, Trash2 } from 'lucide-react';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import EmailBox from './components/EmailBox';
import Feature from './components/Feature';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-primary-500 from-5% via-primary-50 to-white dark:from-primary-900 dark:via-gray-900 dark:to-gray-950">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
              Temporary Email Service
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg font-medium drop-shadow-sm">
              Get an instant temporary email address. No registration required.
              Protect your personal email from spam and unwanted subscriptions.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <EmailBox />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Feature
              icon={Shield}
              title="Secure & Private"
              description="Your temporary emails are encrypted and automatically deleted for maximum privacy"
            />
            <Feature
              icon={Clock}
              title="Instant Access"
              description="No registration or personal information required. Start using it right away"
            />
            <Feature
              icon={Trash2}
              title="Auto-Cleanup"
              description="Emails are automatically deleted after 1 hour for your security"
            />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;