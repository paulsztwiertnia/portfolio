'use client';

import Header from '../components/header';
import JobTitle from '../components/ui/jobTitle';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

import { aboutMe, projects } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import ScrollProgress from '@/components/ui/scrollProgress';
import IconMotion from '@/components/ui/iconMotion';
import Project from '@/components/ui/project';
import Card from '@/components/ui/card';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* Above the fold */}
      <div className="flex flex-row justify-center items-center h-[calc(100vh-100px)]">  
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
                width: { xs: 200, sm: 250, md: 350, lg: 550 }, 
                height: { xs: 200, sm: 250, md: 350, lg: 550 } 
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
      <div className="flex flex-row justify-center items-center min-h-screen mt-8">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
        >
        <div className="flex flex-row ">
            <div className="max-w-xl">
              <h3 className="text-xl font-light">About Me</h3>
              <p className="text-3xl md:text-4xl font-light mb-2">Introduction.</p>
              <p className="text-lg font-light leading-loose font-open-sans">{aboutMe.description}</p>
            </div>
          <div className="max-w-xl pl-10">
            <div className="flex justify-start items-start py-2 mb-5 space-x-4">
              <div className="flex flex-col items-center">
                <IconMotion src="/icons/typescript.png" alt="Typescript" width={100} height={100} toolTip="Typescript" className="mb-8" yCord={[0, -20, 0]} />
                <IconMotion src="/icons/javascript.png" alt="Javascript" width={100} height={100} toolTip="Javascript" className="mb-8"  yCord={[0, -18, 0]} />
                <IconMotion src="/icons/c-programming.svg" alt="C" width={100} height={100} toolTip="C" className="mb-8" yCord={[0, -22, 0]} />
                <IconMotion src="/icons/python-logo.png" alt="Python" width={100} height={100} toolTip="Python" className="mb-8" yCord={[0, -19, 0]} />
                <IconMotion src="/icons/php.png" alt="PHP" width={100} height={100} toolTip="PHP" className="mb-8" yCord={[0, -21, 0]} />
                <IconMotion src="/icons/buddy-works.png" alt="Buddy Works" width={100} height={100} toolTip="Buddy Works" className="mb-8" yCord={[0, -18, 0]} />
                
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
                <IconMotion src="/icons/tailwind.png" alt="Tailwind" width={100} height={100} toolTip="Tailwind" className="mb-8" yCord={[0, -22, 0]} />
                <IconMotion src="/icons/bootstrap.png" alt="Bootstrap" width={100} height={100} toolTip="Bootstrap" className="mb-8" yCord={[0, -19, 0]} />
                <IconMotion src="/icons/git.png" alt="Git" width={100} height={100} toolTip="Git" className="mb-8" yCord={[0, -21, 0]} />

              </div>
              <div className="flex flex-col items-center">
              <IconMotion src="/icons/shopify.png" alt="Shopify" width={100} height={100} toolTip="Shopify" className="mb-8" yCord={[0, -20, 0]} />
              <IconMotion src="/icons/craftCms.png" alt="Craft CMS" width={100} height={100} toolTip="Craft CMS" className="mb-8" yCord={[0, -18, 0]} />
              <IconMotion src="/icons/wordpress.png" alt="Wordpress" width={100} height={100} toolTip="Wordpress" className="mb-8" yCord={[0, -22, 0]} />
              <IconMotion src="/icons/firebase.png" alt="Firebase" width={100} height={100} toolTip="Firebase" className="mb-8" yCord={[0, -19, 0]} />
              <IconMotion src="/icons/mySql.png" alt="MySQL" width={100} height={100} toolTip="MySQL" className="mb-8" yCord={[0, -21, 0]} />
              
              </div>
            </div>
            </div>
          </div>
        </motion.div> 
      </div>

        {/* Projects Section */}
        <div className="min-h-[100vh]">
          <div className="flex flex-col">
            <Card title={projects[0].title} description={projects[0].description} src={projects[0].image} url={projects[0].link || ''} color={projects[0].color || '#000000'} i={0} />
            <Card title={projects[1].title} description={projects[1].description} src={projects[1].image} url={projects[1].link || ''} color={projects[1].color || '#000000'} i={1} />
            <Card title={projects[2].title} description={projects[2].description} src={projects[2].image} url={projects[2].link || ''} color={projects[2].color || '#000000'} i={2} />
            <Card title={projects[3].title} description={projects[3].description} src={projects[3].image} url={projects[3].link || ''} color={projects[3].color || '#000000'} i={3} />
            <Card title={projects[4].title} description={projects[4].description} src={projects[4].image} url={projects[4].link || ''} color={projects[4].color || '#000000'} i={4} />
            <Card title={projects[5].title} description={projects[5].description} src={projects[5].image} url={projects[5].link || ''} color={projects[5].color || '#000000'} i={5} />
            <Card title={projects[6].title} description={projects[6].description} src={projects[6].image} url={projects[6].link || ''} color={projects[6].color || '#000000'} i={6} />
          </div>
        </div>

      <div className="pt-2">
        <ScrollProgress />  
      </div>
    </>
  );
}
