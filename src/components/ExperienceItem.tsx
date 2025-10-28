import { Briefcase } from 'lucide-react';
import type { Experience } from '../data/resume';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="card hover:border-sky-400/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-sky-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl mb-1">{experience.role}</h3>
          <p className="text-sky-400 font-medium mb-2">{experience.company}</p>
          <p className="text-sm text-slate-400 mb-4">
            {experience.start} - {experience.end}
          </p>
          <ul className="space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-300">
                <span className="text-sky-400 mt-1.5 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
