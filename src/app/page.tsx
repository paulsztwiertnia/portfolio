'use client';

import Header from '../components/ui/header';
import JobTitle from '../components/ui/jobTitle';
import Image from 'next/image';
import { motion } from 'motion/react';
import { aboutMe, projects } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import IconMotion from '@/components/ui/iconMotion';
import ExperienceTimeline from '@/components/ui/experienceTimeline';
import Card from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col md:flex-row justify-center items-center h-[calc(100vh-100px)] px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <motion.div
          className="relative z-10 flex justify-center items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            alt="Paul Sztwiertnia"
            src="/icons/hero3.png"
            width={550}
            height={550}
            priority
            className="rounded-full shadow-lg object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[550px] lg:h-[550px]"
          />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center md:pl-10 mt-5 text-center md:text-left text-white">
          <p className="text-lg md:text-xl font-light mb-2">Hi, I&apos;m</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Paul Sztwiertnia.</h1>
          <JobTitle />
          <TextGenerateEffect
            words="Building modern web apps with Next.js and TypeScript."
            className="max-w-md text-sm md:text-base font-light"
            duration={0.4}
          />
          <SocialLinks />
        </div>
      </div>

      <div id="about" className="flex flex-col justify-center items-center min-h-screen mt-8 px-4 scroll-mt-[72px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl mb-8">
              <h3 className="text-lg md:text-xl font-light text-white/70">About Me</h3>
              <p className="text-2xl md:text-3xl font-light mb-2">Introduction.</p>
              <p className="text-base md:text-lg font-light leading-loose font-open-sans mb-12 text-neutral-300">
                {aboutMe.description}
              </p>
            </div>
            <div className="max-w-xl mt-8 lg:pl-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <IconMotion src="/icons/typescript.png" alt="Typescript" width={100} height={100} toolTip="Typescript" className="mb-8" yCord={[0, -20, 0]} />
                  <IconMotion src="/icons/javascript.png" alt="Javascript" width={100} height={100} toolTip="Javascript" className="mb-8" yCord={[0, -18, 0]} />
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

      <div id="experience" className="scroll-mt-[72px]">
        <ExperienceTimeline />
      </div>

      <div className="sticky top-12 pb-4 mt-4 sm:mt-32 md:mt-12 lg:mt-16 text-white">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-light text-white/70">Projects</h3>
          <p className="text-2xl md:text-3xl font-light mb-2">Explore my work.</p>
        </div>
      </div>
      <div id="projects" className="px-4 relative scroll-mt-[72px]">
        <div className="flex flex-col mt-4">
          {projects.map((project, i) => (
            <Card
              key={i}
              title={project.title}
              description={project.description}
              src={project.image}
              url={project.link || ''}
              color={project.color || '#111111'}
              i={i}
            />
          ))}
        </div>
      </div>

      <div id="contact" className="text-center mb-32 mt-32 text-white">
        <h2 className="text-lg md:text-xl font-light mb-3 text-white/70">Have an idea?</h2>
        <p className="text-2xl md:text-3xl font-light mb-8">Get in touch.</p>
        <motion.button
          className="contact-button px-4 py-2 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            window.open(
              'https://calendly.com/consulation-novellsoftwaresolutions/software-solutions-consultation',
              '_blank'
            );
          }}
        >
          Contact Me
        </motion.button>
      </div>
    </>
  );
}
