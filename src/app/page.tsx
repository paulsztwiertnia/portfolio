'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { aboutMe, projects } from './content';
import SocialLinks from '@/components/ui/socialLinks';
import ExperienceTimeline from '@/components/ui/experienceTimeline';
import ProjectPin from '@/components/ui/card';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BrandButton } from '@/components/ui/brand-button';

const sectionClassName = 'pt-24 md:pt-32 scroll-mt-[72px]';

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen overflow-hidden">
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
            <TextGenerateEffect
              words="Hi, I'm"
              className="text-lg md:text-xl font-light mb-2"
              duration={0.25}
            />
            <TextGenerateEffect
              as="h1"
              words="Paul Sztwiertnia."
              className="text-2xl md:text-3xl font-bold mb-2"
              duration={0.25}
              delay={0.35}
            />
            <EncryptedText
              text="Software Engineer."
              className="max-w-md text-sm md:text-base font-light"
              revealDelayMs={75}
              flipDelayMs={50}
              encryptedClassName="text-neutral-300"
              revealedClassName="text-white"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>

        <div
          id="about"
          className={`${sectionClassName} flex flex-col justify-start items-start text-white`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="max-w-4xl">
                <h3 className="text-lg md:text-xl font-light text-white/70">About Me</h3>
                <p className="text-2xl md:text-3xl font-light mb-2">Introduction.</p>
                <p className="text-base md:text-lg font-light leading-loose font-open-sans mb-12 text-neutral-300 pt-10">
                  {aboutMe.description}
                </p>
                <BrandButton href={aboutMe.link}>{aboutMe.cta}</BrandButton>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="experience"
          className={sectionClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ExperienceTimeline />
        </motion.div>

        <motion.div
          id="projects"
          className={sectionClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="pb-4 text-white">
            <h3 className="text-lg md:text-xl font-light text-white/70">
              Projects
            </h3>
            <p className="text-2xl md:text-3xl font-light mb-2">
              Explore my work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 place-items-center">
            {projects.map((project) => (
              <ProjectPin
                key={project.title}
                title={project.title}
                description={project.description}
                src={project.image}
                url={project.link || ""}
                color={project.color || "#111111"}
              />
            ))}
          </div>
        </motion.div>

        <div
          id="contact"
          className={`${sectionClassName} pb-24 md:pb-32 text-center text-white`}
        >
          <h2 className="text-lg md:text-xl font-light mb-3 text-white/70">
            Have an idea?
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-8">Get in touch.</p>
          <BrandButton
            href="https://calendly.com/consulation-novellsoftwaresolutions/software-solutions-consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </BrandButton>
        </div>
      </main>
    </>
  );
}
