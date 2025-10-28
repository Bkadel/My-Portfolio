import ExperienceItem from '../components/ExperienceItem';
import DownloadButton from '../components/DownloadButton';
import { experience, education, skills, projects } from '../data/resume';
import { GraduationCap, Code2, FolderGit2, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="section">
        <div className="container max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h1 className="mb-2">Resume</h1>
              <p className="text-slate-400">Professional experience and qualifications</p>
            </div>
            <div className="flex gap-3 no-print">
              <DownloadButton
                variant="primary"
                href="/assets/Bivek_Kadel_ITSupport_Resume.pdf" // Ensure this matches the file path in the public folder
              />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-sky-400" />
                </div>
                <h2>Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <h2>Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card hover:border-sky-400/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-sky-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-1">{edu.degree}</h3>
                        <p className="text-sky-400 font-medium mb-2">{edu.school}</p>
                        <p className="text-sm text-slate-400 mb-4">
                          {edu.start} - {edu.end}
                        </p>
                        {edu.details && (
                          <ul className="space-y-2">
                            {edu.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-300">
                                <span className="text-sky-400 mt-1.5 flex-shrink-0">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-sky-400" />
                </div>
                <h2>Skills</h2>
              </div>
              <div className="card">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-lg text-sm font-medium border border-sky-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6 text-sky-400" />
                </div>
                <h2>Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="card hover:border-sky-400/50 transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl">{project.name}</h3>
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 transition-colors no-print"
                          aria-label={`View ${project.name} project`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
