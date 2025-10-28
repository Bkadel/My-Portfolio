export interface Experience {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  start: string;
  end: string;
  details?: string[];
}

export interface Project {
  name: string;
  link: string;
  description: string;
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    role: "AV / IT Support Specialist",
    company: "Collegis Education (On-site at Caldwell University)",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Provide on-premise support for classrooms and conference spaces, ensuring reliable performance of AV and IT systems.",
      "Set up, configure, and troubleshoot AV equipment including projectors, microphones, and networked devices.",
      "Collaborate with Collegis and university IT teams to resolve technical issues and maintain safety and operational standards.",
      "Deliver end-user training and documentation for faculty and staff on system usage and maintenance."
    ]
  },
  {
    role: "IT Support Specialist / Help Desk Technician",
    company: "Caldwell University",
    start: "Sep 2022",
    end: "May 2025",
    bullets: [
      "Provided in-person and remote support for 20–30 daily service requests, ensuring a 99% resolution rate using Kaseya BMS.",
      "Installed, maintained, and upgraded computers, printers, and AV systems across campus facilities.",
      "Troubleshot software, network, and hardware issues for students, faculty, and administrative staff.",
      "Performed preventive maintenance on over 100 computers and 70 projectors to ensure system reliability."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Caldwell University – Institutional Research Department",
    start: "Jan 2025",
    end: "May 2025",
    bullets: [
      "Analyzed institutional data to support university reporting, decision-making, and performance dashboards.",
      "Used Python, Excel, and Power BI to clean, visualize, and interpret data trends.",
      "Collaborated with the data analytics team to streamline data workflows and ensure data accuracy."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science, Minor in Business Analytics",
    school: "Caldwell University",
    start: "2022",
    end: "2025",
    details: [
      "Expected Graduation: December 2025",
      "Relevant Coursework: Networking & Communication, Operating Systems, Data Structures, Full-Stack Development, Data Analysis"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "IT Project Request Form Automation",
    link: "#",
    description:
      "Automated project scheduling and tracking system using Google Apps Script, Sheets, and Calendar to streamline IT project requests and scheduling conflicts.",
    technologies: ["Google Apps Script", "Google Sheets", "Google Calendar"]
  },
  {
    name: "Mindful Motion",
    link: "#",
    description:
      "Full-stack wellness web app featuring journaling, meditation tracking, and a user community built to promote mindfulness.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"]
  }
];

export const skills: string[] = [
  "IT Support & Troubleshooting",
  "AV System Setup & Maintenance",
  "Python",
  "JavaScript",
  "React",
  "MongoDB",
  "Express.js",
  "HTML/CSS",
  "Power BI",
  "SQL",
  "Networking (TCP/IP, DNS, Wi-Fi)",
  "Microsoft 365",
  "Active Directory",
  "Ticketing Systems (Kaseya BMS, Cherwell)",
  "Google Workspace Automation"
];

export const bio = {
  name: "Bivek Kadel",
  role: "IT & AV Support Specialist | Data Analyst | Computer Science Student",
  email: "bivekvai.k123@gmail.com",
  location: "New Jersey, USA",
  about: `I'm a senior Computer Science student with over three years of experience in IT support and one year of experience in data analytics. I currently work at Caldwell University as an IT Support Specialist, where I troubleshoot systems, and help improve technology efficiency across departments. I enjoy combining analytical problem-solving with hands-on technical work, and I'm passionate about creating reliable systems and data-driven solutions. I'm now seeking full-time opportunities in IT support, technical operations, or data analytics.
When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
working on personal projects that push my skills further.`,
  social: {
    github: "https://github.com/Bkadel",
    linkedin: "www.linkedin.com/in/bivek-kadel"
  }
};
