'use client';

import Header from '../components/header';
import JobTitle from '../components/ui/jobTitle';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

import { aboutMe, techStack } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import ScrollProgress from '@/components/ui/scrollProgress';
import IconMotion from '@/components/ui/iconMotion';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-center h-[calc(100vh-100px)]">  
          <motion.div
            className="flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar 
              alt="Paul Sztwiertnia animated" 
              src="/hero3.png" 
              className="shadow-lg" 
              sx={{ 
                width: { xs: 200, sm: 250, md: 350, lg: 450 }, 
                height: { xs: 200, sm: 250, md: 350, lg: 450 } 
              }} 
            />
          </motion.div>
          <div className="flex flex-col items-center pl-10 mt-5">
            <p className="text-xl md:text-2xl font-light mb-2">Hi, I'm</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Paul Sztwiertnia.</h1>
            <JobTitle />
            <SocialLinks />
          </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-row justify-center items-center px-4 mt-10">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full mt-15 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-light">About Me</h3>
            <p className="text-3xl md:text-4xl font-light mb-2">Introduction.</p>
            <p className="text-md font-light leading-loose">{aboutMe.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center px-4 mt-10">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full mt-15 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-light">Tech Stack</h3>
            <p className="text-3xl md:text-4xl font-light mb-3">Technologies.</p>      
            <p className="text-md font-light leading-relaxed">{techStack.intro}</p>
          <h3 className="text-xl font-light mb-3">Languages</h3>
          <div className="flex flex-row justify-start items-start py-2 mb-5 space-x-4">
            <IconMotion src="/typescript.png" alt="Typescript" width={100} height={100} toolTip="Typescript" />
            <IconMotion src="/javascript.png" alt="Javascript" width={100} height={100} toolTip="Javascript" />
            <IconMotion src="/c-programming.svg" alt="C" width={100} height={100} toolTip="C" />
            <IconMotion src="/python-logo.png" alt="Python" width={100} height={100} toolTip="Python" />
          </div>
          <h3 className="text-xl font-light">Libraries</h3>
          <IconMotion src="/react.png" alt="React" width={100} height={100} toolTip="React" />
          
          <h3 className="text-xl font-light">Frameworks</h3>
          <IconMotion src="/nextJs.png" alt="Next.js" width={125} height={125} toolTip="Next.js" />
          <h3 className="text-xl font-light">Content Management Systems</h3>
          <h3 className="text-xl font-light">Databases</h3>     
          </motion.div>
        </div>
      </div>


      <div className="pt-2">
        <ScrollProgress />  
      </div>
    </>
  );
}
