import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button className="bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs hover:bg-primary-dark transition-colors">My Resume</button>
      <LinkedIn fontSize="medium" className="cursor-pointer hover:text-primary transition-colors" />
      <GitHub fontSize="medium" className="cursor-pointer hover:text-primary transition-colors" />
    </div>
  )
}

export default SocialLinks;