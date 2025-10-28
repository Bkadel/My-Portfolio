import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Bkadel',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bivek-kadel',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:bivekvai.k123@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 no-print">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Bivek Kadel</h3>
            <p className="text-slate-400 text-sm">
            IT & AV Support Specialist | Data Analyst | Computer Science Student
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Bivek Kadel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
