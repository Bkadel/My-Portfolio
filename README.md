# Bivek Kadel - Personal Portfolio

A minimal, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, modern design with dark theme
- Fully responsive (mobile-first)
- Four main pages: Home, About, Resume, Contact
- Static profile photo display
- Contact form with EmailJS integration
- Downloadable resume (PDF)
- Print-friendly resume page
- Smooth animations and transitions
- Accessible (WCAG compliant)
- SEO optimized

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### EmailJS Setup

To enable the contact form, you need to configure EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (bivekvai.k123@gmail.com)
4. Update `.env` file with your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note:** If EmailJS is not configured, the contact form will show an error message, and users can still use the mailto fallback link.

### Customizing Your Content

#### 1. Personal Information & Resume Data

Edit `src/data/resume.ts` to update:

- **Bio information** - name, role, email, location, about text, social links
- **Experience** - job positions, companies, dates, responsibilities
- **Education** - degrees, schools, dates, details
- **Skills** - list of your technical skills
- **Projects** - your portfolio projects with descriptions and technologies

```typescript
// Example: Adding a new experience
export const experience: Experience[] = [
  {
    role: "Your Job Title",
    company: "Company Name",
    start: "Jan 2024",
    end: "Present",
    bullets: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2"
    ]
  },
  // ... more experiences
];
```

#### 2. Profile Photo

- **Option 1 (Recommended):** Use the Upload Photo button on the Home or About pages to upload your photo. It will be saved to localStorage.
- **Option 2:** Replace the default avatar by uploading through the UI.

The photo will persist across browser sessions via localStorage.

#### 3. Resume PDF

Replace the placeholder resume file with your actual resume:

1. Export your resume as a PDF
2. Name it `Bivek_Kadel_Resume.pdf` (or update the filename in `src/components/DownloadButton.tsx`)
3. Place it in `public/assets/`

**Current file location:** `public/assets/Bivek_Kadel_Resume.pdf`

#### 4. Social Links

Update your GitHub and LinkedIn URLs in `src/data/resume.ts`:

```typescript
export const bio = {
  // ...
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};
```

The same links are also used in the Footer component.

#### 5. Contact Email

Update the contact email in:
- `src/data/resume.ts` - bio.email
- `src/components/ContactForm.tsx` - to_email parameter (line 68)
- `src/components/Footer.tsx` - mailto link
- `src/pages/Contact.tsx` - mailto fallback link

#### 6. SEO & Meta Tags

Update `index.html` to customize:
- Page title
- Meta description
- Keywords
- Open Graph tags

#### 7. Favicon

The current favicon shows "BK" initials. To customize:
- Update the SVG data in `index.html` (line 5)
- Or replace with a traditional favicon.ico file

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer with links
│   ├── Layout.tsx       # Page layout wrapper
│   ├── Toast.tsx        # Notification component
│   ├── AvatarUploader.tsx     # Profile photo uploader
│   ├── SectionHeader.tsx      # Section title component
│   ├── ExperienceItem.tsx     # Experience card
│   ├── DownloadButton.tsx     # Resume download button
│   └── ContactForm.tsx        # Contact form with validation
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── About.tsx        # About page
│   ├── Resume.tsx       # Resume page
│   └── Contact.tsx      # Contact page
├── data/
│   └── resume.ts        # Resume data and content
├── App.tsx              # Main app with routing
├── main.tsx             # App entry point
└── index.css            # Global styles

public/
└── assets/
    └── Bivek_Kadel_Resume.pdf   # Resume PDF (REPLACE THIS!)
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **EmailJS** - Contact form email service
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This portfolio follows WCAG 2.1 AA standards:
- Semantic HTML
- Keyboard navigation support
- Focus indicators
- ARIA labels where appropriate
- Sufficient color contrast
- Skip-to-content link
- Screen reader friendly

## License

This project is open source and available for personal use.

## Contact

**Bivek Kadel**
- Email: bivekvai.k123@gmail.com
- GitHub: https://github.com/bivekkadel
- LinkedIn: www.linkedin.com/in/bivek-kadel



---

**Note:** Remember to replace all placeholder content with your actual information before deploying to production!
