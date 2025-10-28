import React from 'react';

interface DownloadButtonProps {
  href: string;
  variant?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, variant = 'primary' }) => {
  return (
    <a
      href={href}
      download // Ensures the file is downloaded instead of opened in the browser
      className={`btn btn-${variant}`}
    >
      Download Resume
    </a>
  );
};

export default DownloadButton;
