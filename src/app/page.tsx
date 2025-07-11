'use client';

import Header from '../components/ui/header';
import JobTitle from '../components/ui/jobTitle';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import { aboutMe, projects } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import IconMotion from '@/components/ui/iconMotion';
import Timeline from '@/components/ui/timeline';
import Card from '@/components/ui/card';


export default function Home() {

  return (
    <>
      <Header /> 
      {/* Above the fold */}
      <div className="flex flex-col md:flex-row justify-center items-center h-[calc(100vh-100px)] px-4">  
          <motion.div
            className="flex justify-center items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar 
              alt="Paul Sztwiertnia animated" 
              src="/icons/hero3.png" 
              className="shadow-lg" 
              sx={{ 
                width: { xs: 250, sm: 300, md: 350, lg: 550 }, 
                height: { xs: 250, sm: 300, md: 350, lg: 550 } 
              }} 
            />
          </motion.div>
          <div className="flex flex-col items-center md:pl-10 mt-5 text-center md:text-left">
            <p className="text-lg md:text-xl font-light mb-2">Hi, I'm</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Paul Sztwiertnia.</h1>
            <JobTitle />
            <SocialLinks />
          </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="flex flex-col justify-center items-center min-h-screen mt-8 px-4 scroll-mt-[72px]">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl mb-8">
              <h3 className="text-lg md:text-xl font-light">About Me</h3>
              <p className="text-2xl md:text-3xl font-light mb-2">Introduction.</p>
              <p className="text-base md:text-lg font-light leading-loose font-open-sans mb-12">{aboutMe.description}</p>
            </div>
            <div className="max-w-xl mt-8 lg:pl-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <IconMotion src="/icons/typescript.png" alt="Typescript" width={100} height={100} toolTip="Typescript" className="mb-8" yCord={[0, -20, 0]} />
                  <IconMotion src="/icons/javascript.png" alt="Javascript" width={100} height={100} toolTip="Javascript" className="mb-8"  yCord={[0, -18, 0]} />
                  <IconMotion src="/icons/python-logo.png" alt="Python" width={100} height={100} toolTip="Python" className="mb-8" yCord={[0, -19, 0]} />
                  <IconMotion src="/icons/php.png" alt="PHP" width={100} height={100} toolTip="PHP" className="mb-8" yCord={[0, -21, 0]} />
                  <IconMotion src="/icons/graphQL.png" alt="graphQL" width={100} height={100} toolTip="Graph QL" className="mb-8" yCord={[0, -22, 0]} />
                </div>
                <div className="flex flex-col items-center">
                  <IconMotion src="/icons/react.png" alt="React" width={100} height={100} toolTip="React" className="mb-8" yCord={[0, -18, 0]} />
                  <IconMotion src="/icons/nextJs.png" alt="Next.js" width={125} height={125} toolTip="Next.js" className="mb-8" yCord={[0, -20, 0]} />
                  <IconMotion src="/icons/expressJs.png" alt="Express.js" width={100} height={100} toolTip="Express.js" className="mb-8" yCord={[0, -19, 0]} />
                  <IconMotion src="/icons/nodeJs.png" alt="Node.js" width={100} height={100} toolTip="Node.js" className="mb-8" yCord={[0, -22, 0]} />
                  <IconMotion src="/icons/nginx.svg" alt="Nginx" width={100} height={100} toolTip="Nginx" className="mb-8" yCord={[0, -21, 0]} />
                </div>
                <div className="flex flex-col items-center">
                  <IconMotion src="/icons/html.png" alt="HTML" width={100} height={100} toolTip="HTML" className="mb-8" yCord={[0, -20, 0]} />
                  <IconMotion src="/icons/css.png" alt="CSS" width={100} height={100} toolTip="CSS" className="mb-8" yCord={[0, -18, 0]} />
                  <IconMotion src="/icons/tailwind.png" alt="Tailwind" width={100} height={100} toolTip="Tailwind CSS" className="mb-8" yCord={[0, -22, 0]} />
                  <IconMotion src="/icons/bootstrap.png" alt="Bootstrap" width={100} height={100} toolTip="Bootstrap" className="mb-8" yCord={[0, -19, 0]} />
                  <IconMotion src="/icons/git.png" alt="Git" width={100} height={100} toolTip="Git" className="mb-8" yCord={[0, -21, 0]} />
                </div>
                <div className="flex flex-col items-center">
                  <IconMotion src="/icons/craftCms.png" alt="Craft CMS" width={100} height={100} toolTip="Craft CMS" className="mb-8" yCord={[0, -18, 0]} />
                  <IconMotion src="/icons/wordpress.png" alt="Wordpress" width={100} height={100} toolTip="Wordpress" className="mb-8" yCord={[0, -22, 0]} />
                  <IconMotion src="/icons/supabase.png" alt="Supabase" width={100} height={100} toolTip="Supabase" className="mb-8" yCord={[0, -20, 0]} />
                  <IconMotion src="/icons/firebase.png" alt="Firebase" width={100} height={100} toolTip="Firebase" className="mb-8" yCord={[0, -19, 0]} />
                  <IconMotion src="/icons/mySql.png" alt="MySQL" width={100} height={100} toolTip="MySQL" className="mb-8" yCord={[0, -21, 0]} />
                </div>
              </div>
            </div>
          </div>
        </motion.div> 
      </div>
      {/* Timeline Section */}
      <motion.div
        id="experience"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:mt-64 md:mb-32 mb-8 scroll-mt-[72px]"
      >
        <div className="text-center mt-4 sm:mt-32 md:mt-12 lg:mt-16">
          <h3 className="text-lg md:text-xl font-light">Experience</h3>
          <p className="text-2xl md:text-3xl font-light mb-6">My Journey.</p>
        </div>
        <Timeline />
      </motion.div>

      {/* Projects Section */}
      <div className="sticky top-12 pb-4 mt-4 sm:mt-32 md:mt-12 lg:mt-16">
        <div className="text-center">
            <h3 className="text-lg md:text-xl font-light">Projects</h3>
            <p className="text-2xl md:text-3xl font-light mb-2">Explore my work.</p>
        </div>
      </div>
      <div id="projects" className="px-4 relative scroll-mt-[72px]">
        <div className="flex flex-col mt-4">
          {projects.map((project, i) => (
            <Card key={i} title={project.title} description={project.description} src={project.image} url={project.link || ''} color={project.color || '#000000'} i={i} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mb-32 mt-32">
        <h2 className="text-lg md:text-xl font-light mb-3">Have an idea?</h2>
        <p className="text-2xl md:text-3xl font-light mb-8">Get in touch.</p>
        <motion.button 
          className="contact-button px-4 py-2 rounded-md"          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            window.open('https://calendly.com/consulation-novellsoftwaresolutions/software-solutions-consultation', '_blank');
          }}
        >
          Contact Me
        </motion.button>
        
      </div>
    </>
  );
}
