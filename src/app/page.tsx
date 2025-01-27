'use client';

import Header from '../components/header';
import JobTitle from '../components/ui/jobTitle';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

import { aboutMe } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import ScrollProgress from '@/components/ui/scrollProgress';
import IconMotion from '@/components/ui/iconMotion';

export default function Home() {
  return (
    <>
      <Header />
      {/* Above the fold */}
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
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-row ">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
          >
            <div className="max-w-xl">
              <h3 className="text-xl font-light">About Me</h3>
              <p className="text-3xl md:text-4xl font-light mb-2">Introduction.</p>
              <p className="text-md font-light leading-loose">{aboutMe.description}</p>
            </div>
          </motion.div>
          <div className="max-w-xl pl-10">
            <div className="flex justify-start items-start py-2 mb-5 space-x-4">
              <div className="flex flex-col items-center">
                <IconMotion src="/typescript.png" alt="Typescript" width={100} height={100} toolTip="Typescript" className="mb-8" yCord={[0, -13, 0]} />
                <IconMotion src="/javascript.png" alt="Javascript" width={100} height={100} toolTip="Javascript" className="mb-8"  yCord={[0, -10, 0]} />
                <IconMotion src="/c-programming.svg" alt="C" width={100} height={100} toolTip="C" className="mb-8" yCord={[0, -11, 0]} />
                <IconMotion src="/python-logo.png" alt="Python" width={100} height={100} toolTip="Python" className="mb-8" yCord={[0, -13, 0]} />
                <IconMotion src="/php.png" alt="PHP" width={100} height={100} toolTip="PHP" className="mb-8" yCord={[0, -10, 0]} />
                
              </div>
              <div className="flex flex-col items-center">
                <IconMotion src="/react.png" alt="React" width={100} height={100} toolTip="React" className="mb-8" yCord={[0, -14, 0]} />
                <IconMotion src="/nextJs.png" alt="Next.js" width={125} height={125} toolTip="Next.js" className="mb-8" yCord={[0, -12, 0]} />
                <IconMotion src="/expressJs.png" alt="Express.js" width={100} height={100} toolTip="Express.js" className="mb-8" yCord={[0, -10, 0]} />
                <IconMotion src="/nodeJs.png" alt="Node.js" width={100} height={100} toolTip="Node.js" className="mb-8" yCord={[0, -11, 0]} />
                <IconMotion src="/nginx.svg" alt="Nginx" width={100} height={100} toolTip="Nginx" className="mb-8" yCord={[0, -10, 0]} />

              </div>
              <div className="flex flex-col items-center">
                <IconMotion src="/html.png" alt="HTML" width={100} height={100} toolTip="HTML" className="mb-8" yCord={[0, -14, 0]} />
                <IconMotion src="/css.png" alt="CSS" width={100} height={100} toolTip="CSS" className="mb-8" yCord={[0, -12, 0]} />
                <IconMotion src="/tailwind.png" alt="Tailwind" width={100} height={100} toolTip="Tailwind" className="mb-8" yCord={[0, -13, 0]} />
                <IconMotion src="/bootstrap.png" alt="Bootstrap" width={100} height={100} toolTip="Bootstrap" className="mb-8" yCord={[0, -10, 0]} />
                <IconMotion src="/git.png" alt="Git" width={100} height={100} toolTip="Git" className="mb-8" yCord={[0, -10, 0]} />

              </div>
              <div className="flex flex-col items-center">
              <IconMotion src="/shopify.png" alt="Shopify" width={100} height={100} toolTip="Shopify" className="mb-8" yCord={[0, -14, 0]} />
              <IconMotion src="/craftCms.png" alt="Craft CMS" width={100} height={100} toolTip="Craft CMS" className="mb-8" yCord={[0, -11, 0]} />
              <IconMotion src="/wordpress.png" alt="Wordpress" width={100} height={100} toolTip="Wordpress" className="mb-8" yCord={[0, -13, 0]} />
              <IconMotion src="/firebase.png" alt="Firebase" width={100} height={100} toolTip="Firebase" className="mb-8" yCord={[0, -10, 0]} />
              <IconMotion src="/mySql.png" alt="MySQL" width={100} height={100} toolTip="MySQL" className="mb-8" yCord={[0, -11, 0]} />
              
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* About Me Section */}
            <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-row ">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
          >
            <div className="max-w-xl">
              <h3 className="text-xl font-light">Projects</h3>
              <p className="text-3xl md:text-4xl font-light mb-2">What I'm Working On.</p>
              
            </div>
          </motion.div>
          <div className="max-w-xl pl-10">
            <div className="flex justify-start items-start py-2 mb-5 space-x-4">

            </div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <ScrollProgress />  
      </div>
    </>
  );
}
