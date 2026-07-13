'use client';

import { Linkedin, Github } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <Linkedin
        className="h-8 w-8 cursor-pointer text-white hover:text-neutral-300 transition-colors"
        onClick={() => window.open('https://www.linkedin.com/in/paul-sztwiertnia/', '_blank')}
      />
      <Github
        className="h-8 w-8 cursor-pointer text-white hover:text-neutral-300 transition-colors"
        onClick={() => window.open('https://github.com/paulsztwiertnia', '_blank')}
      />
    </div>
  );
};

export default SocialLinks;
