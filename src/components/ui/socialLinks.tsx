'use client';

import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      {/* <button className="bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs hover:bg-primary-dark transition-colors">My Resume</button> */}
      <LinkedIn fontSize="large" className="cursor-pointer hover:text-primary transition-colors" 
        onClick={() => window.open('https://www.linkedin.com/in/paul-sztwiertnia/', '_blank')}
      />
      <GitHub fontSize="large" className="cursor-pointer hover:text-primary transition-colors" 
        onClick={() => window.open('https://github.com/paulsztwiertnia', '_blank')}
      />
    </div>
  )
}

export default SocialLinks;