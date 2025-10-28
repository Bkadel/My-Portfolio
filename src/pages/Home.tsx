import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { bio } from '../data/resume';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <section id="main-content" className="section min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-balance animate-fade-in">
                Hi, I'm <span className="text-sky-400">Bivek Kadel</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-delay-1">
                {bio.role}
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl animate-fade-in-delay-2">
                Passionate about technology, problem-solving, and building innovative solutions
                that make a difference. Currently helping students and faculty at Caldwell University 
                with technical support needs while developing my skills in full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
                <Link to="/resume" className="btn btn-primary">
                  <FileText className="w-5 h-5" />
                  View Resume
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-delay-2">
              <img
                src="/assets/profile-picture.jpg" // Replace with the correct path to your profile picture
                alt="Profile"
                className="w-80 h-80 rounded-full object-cover" // Increased size from w-64 h-64 to w-80 h-80
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-800/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Building Solutions, One Line at a Time</h2>
            <p className="text-lg text-slate-300 mb-8">
              From troubleshooting technical issues to developing full-stack applications,
              I bring a unique blend of IT expertise and software development skills.
              Explore my work, learn about my journey, and let's connect!
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link
                to="/about"
                className="card hover:border-sky-400/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl mb-2">About Me</h3>
                <p className="text-slate-400 text-sm">
                  Learn about my background, skills, and what drives me
                </p>
              </Link>
              <Link
                to="/resume"
                className="card hover:border-sky-400/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl mb-2">Experience</h3>
                <p className="text-slate-400 text-sm">
                  Explore my professional journey and projects
                </p>
              </Link>
              <Link
                to="/contact"
                className="card hover:border-sky-400/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl mb-2">Get in Touch</h3>
                <p className="text-slate-400 text-sm">
                  Let's discuss opportunities and collaborations
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
