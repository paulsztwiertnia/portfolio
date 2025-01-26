import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button className="bg-primary text-white px-4 py-2 rounded-md text-xs hover:bg-primary-dark transition-colors">My Resume</button>
      <LinkedIn fontSize="large" className="cursor-pointer hover:text-primary transition-colors" />
      <GitHub fontSize="large" className="cursor-pointer hover:text-primary transition-colors" />
    </div>
  )
}

export default SocialLinks;