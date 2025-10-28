import SectionHeader from '../components/SectionHeader';
import DownloadButton from '../components/DownloadButton';
import { bio, skills } from '../data/resume';
import {
  Code2,
  Database,
  Layout,
  Terminal,
  GitBranch,
  Server
} from 'lucide-react';

const skillIcons: Record<string, any> = {
  'Python': Code2,
  'JavaScript': Code2,
  'React': Layout,
  'TypeScript': Code2,
  'Node.js': Server,
  'SQL': Database,
  'MongoDB': Database,
  'Pandas': Database,
  'Data Visualization': Layout,
  'Git': GitBranch,
  'HTML/CSS': Layout,
  'REST APIs': Server
};

export default function About() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="section">
        <div className="container">
          <SectionHeader
            title="About Me"
            subtitle="Get to know me better"
            align="center"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-1 flex flex-col items-center">
              <img
                src="/assets/profile-picture.jpg" 
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover" // Increased size from w-32 h-32 to w-48 h-48
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl mb-2">{bio.name}</h3>
                <p className="text-sky-400 mb-4">{bio.role}</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>{bio.location}</p>
                  <a
                    href={`mailto:${bio.email}`}
                    className="link block"
                  >
                    {bio.email}
                  </a>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="https://www.linkedin.com/in/bivek-kadel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Bkadel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="card">
                <h3 className="text-2xl mb-4">My Story</h3>
                <div className="space-y-4 text-slate-300">
                  {bio.about.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-800/50">
        <div className="container">
          <SectionHeader
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with"
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {skills.map((skill) => {
              const Icon = skillIcons[skill] || Terminal;
              return (
                <div
                  key={skill}
                  className="card hover:border-sky-400/50 transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-3 py-6"
                >
                  <Icon className="w-8 h-8 text-sky-400" />
                  <span className="text-sm font-medium text-center">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-300 mb-8">
              I'm always interested in hearing about new opportunities, projects,
              or just having a chat about technology. Feel free to reach out!
            </p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
