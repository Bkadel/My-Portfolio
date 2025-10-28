import { useState, useEffect, useRef } from 'react';
import { Upload, User } from 'lucide-react';

export default function AvatarUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profilePhoto');
    if (savedImage) {
      setImageUrl(savedImage);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageUrl(base64String);
        localStorage.setItem('profilePhoto', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
              <User className="w-16 h-16 md:w-20 md:h-20 text-slate-900" />
            </div>
          )}
        </div>
        <button
          onClick={handleClick}
          className="absolute inset-0 rounded-full bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Upload profile photo"
        >
          <Upload className="w-8 h-8 text-white" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Choose profile photo"
      />

      <button
        onClick={handleClick}
        className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
      >
        {imageUrl ? 'Change Photo' : 'Upload Photo'}
      </button>
    </div>
  );
}
