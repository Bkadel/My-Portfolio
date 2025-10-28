import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import Toast from '../components/Toast';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { bio } from '../data/resume';

export default function Contact() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSuccess = (message: string) => {
    setToast({ message, type: 'success' });
  };

  const handleError = (message: string) => {
    setToast({ message, type: 'error' });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="section">
        <div className="container max-w-5xl">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have a question or want to work together? I'd love to hear from you!"
            align="center"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a
                      href={`mailto:${bio.email}`}
                      className="link text-slate-300"
                    >
                      {bio.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-slate-300">{bio.location}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Bkadel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors"
                  >
                    <Github className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-300 text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bivek-kadel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-300 text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-sky-400/5 border border-sky-400/20 rounded-xl">
                <h4 className="text-lg font-medium mb-2 text-sky-400">Response Time</h4>
                <p className="text-slate-300 text-sm">
                  I typically respond within 24-48 hours. If you need immediate assistance,
                  please mention it in your message.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl mb-6">Send Me a Message</h3>
              <ContactForm onSuccess={handleSuccess} onError={handleError} />
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
}
