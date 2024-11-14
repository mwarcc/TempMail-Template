import React from 'react';
import { Copy, RefreshCw, Clock, Inbox, Crown, Lock, Loader2 } from 'lucide-react';

interface Email {
  from: string;
  subject: string;
  timestamp: string;
  preview: string;
  isRead: boolean;
}

interface Domain {
  name: string;
  value: string;
  isPremium: boolean;
}

function generateRandomEmail() {
  const adjectives = ['swift', 'bright', 'cool', 'smart', 'quick', 'clever'];
  const nouns = ['fox', 'bird', 'wolf', 'bear', 'deer', 'lion'];
  const numbers = Math.floor(Math.random() * 1000);
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${randomAdjective}-${randomNoun}-${numbers}`;
}

export default function EmailBox() {
  const domains: Domain[] = [
    { name: 'temporary.com', value: '@temporary.com', isPremium: false },
    { name: 'tempmail.org', value: '@tempmail.org', isPremium: false },
    { name: 'disposable.com', value: '@disposable.com', isPremium: false },
    { name: 'secure.temp', value: '@secure.temp', isPremium: true },
    { name: 'premium.mail', value: '@premium.mail', isPremium: true },
    { name: 'business.temp', value: '@business.temp', isPremium: true },
  ];

  const [selectedDomain, setSelectedDomain] = React.useState(domains[0]);
  const [username, setUsername] = React.useState(generateRandomEmail());
  const [showDomains, setShowDomains] = React.useState(false);
  const [emails] = React.useState<Email[]>([]);
  const [copied, setCopied] = React.useState(false);
  const tempEmail = `${username}${selectedDomain.value}`;
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDomains(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(tempEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
  };

  const handleRefresh = () => {
    setUsername(generateRandomEmail());
  };

  return (
    <div className="glass-effect rounded-xl p-6 w-full max-w-2xl shadow-[0_8px_32px_-4px_rgba(76,111,255,0.12)] border border-white/20 dark:bg-gray-800/50 dark:border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg shadow-[0_4px_12px_-2px_rgba(76,111,255,0.12)]">
              <Inbox className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Your Temporary Inbox</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-2">
            <div className="flex-1 flex items-center space-x-1">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full text-primary-600 dark:text-primary-400 font-medium bg-primary-50/80 dark:bg-primary-900/30 px-3 py-1.5 rounded-xl border border-primary-200 dark:border-primary-700/50 focus:outline-none focus:border-primary-300 dark:focus:border-primary-600 focus:ring-1 focus:ring-primary-300 dark:focus:ring-primary-600 input-shadow transition-shadow"
                placeholder="username"
              />
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDomains(!showDomains)}
                  className="text-primary-600 dark:text-primary-400 font-medium bg-primary-50/80 dark:bg-primary-900/30 px-3 py-1.5 rounded-xl border border-primary-200 dark:border-primary-700/50 hover:bg-primary-100/80 dark:hover:bg-primary-900/50 transition-all flex items-center space-x-1 min-w-[160px] justify-between input-shadow"
                >
                  <span>{selectedDomain.value}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDomains && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-[0_8px_32px_-4px_rgba(76,111,255,0.15)] bg-white dark:bg-gray-800 border border-primary-100/50 dark:border-gray-700 py-2 z-10">
                    <div className="px-3 py-2 border-b border-primary-100/50 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Free Domains</p>
                    </div>
                    {domains.filter(d => !d.isPremium).map((domain) => (
                      <button
                        key={domain.value}
                        onClick={() => {
                          setSelectedDomain(domain);
                          setShowDomains(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-primary-900/50 text-gray-700 dark:text-gray-300 flex items-center space-x-2"
                      >
                        <span>{domain.value}</span>
                      </button>
                    ))}
                    <div className="px-3 py-2 border-b border-t border-primary-100/50 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center">
                        Premium Domains
                        <Crown className="w-4 h-4 ml-2 text-amber-500" />
                      </p>
                    </div>
                    {domains.filter(d => d.isPremium).map((domain) => (
                      <button
                        key={domain.value}
                        className="w-full text-left px-4 py-2 text-sm text-gray-400 dark:text-gray-500 flex items-center justify-between group"
                        disabled
                      >
                        <span>{domain.value}</span>
                        <Lock className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-lg transition-all group relative shadow-[0_4px_12px_-2px_rgba(76,111,255,0.12)] hover:shadow-[0_4px_16px_-2px_rgba(76,111,255,0.2)]"
                title="Copy email address"
              >
                <Copy size={18} className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-primary-600 dark:text-primary-400 animate-fade-in font-medium whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-[0_4px_12px_-2px_rgba(76,111,255,0.12)]">
                    Copied!
                  </span>
                )}
              </button>
              <button
                onClick={handleRefresh}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-2xl hover:bg-primary-600 dark:hover:bg-primary-700 transition-all shadow-[0_4px_12px_-2px_rgba(76,111,255,0.2)] hover:shadow-[0_4px_16px_-2px_rgba(76,111,255,0.3)] group"
              >
                <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-medium hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {emails.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
            <Loader2 className="h-8 w-8 animate-spin mb-3 text-primary-500 dark:text-primary-400" />
            <p className="text-sm">Waiting for new emails...</p>
          </div>
        ) : (
          emails.map((email, index) => (
            <div
              key={index}
              className="p-4 rounded-xl hover:shadow-[0_8px_32px_-4px_rgba(76,111,255,0.12)] transition-all cursor-pointer bg-white dark:bg-gray-800 border border-primary-100/50 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{email.from}</p>
                  {!email.isRead && (
                    <span className="bg-primary-500 w-2 h-2 rounded-full"></span>
                  )}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  <Clock size={14} className="mr-1" />
                  <span className="text-sm">{email.timestamp}</span>
                </div>
              </div>
              <p className="font-medium text-gray-700 dark:text-gray-300 mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {email.subject}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{email.preview}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}