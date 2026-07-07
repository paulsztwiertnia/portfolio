'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const highlightSx = {
  mt: 1,
  display: { xs: 'none', sm: 'flex' },
  flexDirection: 'column',
  gap: 0.75,
  fontWeight: 'light',
  fontFamily: "'Open Sans', sans-serif",
  lineHeight: 1.8,
};

function JobHighlights({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ ...highlightSx, listStyle: 'none', pl: 0, m: 0 }}>
      {items.map((item) => (
        <Box
          key={item}
          component="li"
          sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
        >
          <Box
            component="span"
            aria-hidden
            sx={{
              mt: '0.65em',
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'text.primary',
              opacity: 0.6,
              flexShrink: 0,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function CustomizedTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >  
      <Timeline 
        position="right"
        sx={{
          '& .MuiTimelineItem-root:before': {
            flex: 0.2,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
            <TimelineDot 
              sx={{ 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'text.primary',
                color: 'text.primary'
              }}
            >
              <WorkIcon 
                sx={{ 
                  fontSize: {
                    xs: '0.9rem', 
                    sm: '1.5rem' 
                  }
                }} 
              />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
          </TimelineSeparator>
          <TimelineContent 
            sx={{ 
              py: '24px', 
              px: 2,
              transition: 'all 0.3s',
              '&:hover': { 
                transform: 'translateY(-3px)',
              }
            }}
          >
            <Typography variant="body1" component="span" fontWeight="bold" color="text.primary" fontFamily="'Open Sans', sans-serif">
              Bold Internet Solutions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              Full Stack Software Engineer
            </Typography>
            <JobHighlights items={[
              'Built accessible web apps compliant with Ontario AODA and WCAG 2.1 Level AA standards.',
              'Developed a Node.js/Express REST API and bilingual Next.js app for Ontario heritage data — with Mapbox clustering, multilingual search, and Craft CMS GraphQL integration.',
              'Built an ETL microservice syncing 1,600+ heritage sites via zero-downtime table-swap with versioned backups.',
              'Architected Craft CMS powering 4 bilingual sites and gov portals serving 15,000+ users, including a Passport funding planner with 92% positive feedback.',
            ]} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2023 - 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
            <TimelineDot 
              sx={{ 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'text.primary',
                color: 'text.primary'
              }}
            >
              <WorkIcon 
                sx={{ 
                  fontSize: {
                    xs: '0.9rem', 
                    sm: '1.5rem' 
                  }
                }} 
              />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
          </TimelineSeparator>
          <TimelineContent 
            sx={{ 
              py: '24px', 
              px: 2,
              transition: 'all 0.3s',
              '&:hover': { 
                transform: 'translateY(-3px)',
              }
            }}
          >
            <Typography variant="body1" component="span" fontWeight="bold" color="text.primary" fontFamily="'Open Sans', sans-serif">
              MYC Graphics
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              Full Stack Software Engineer
            </Typography>
            <JobHighlights items={[
              'Built performant AWS web apps with Next.js, React, and TypeScript for enterprise clients including Home Depot, Flynn Group, Circle K, and Ellis Don — with Auth0 auth and MySQL-backed project tracking.',
              'Developed a React app for VistaPrint to program NFC business cards, optimizing the production pipeline for Android/iOS tap-to-share contact cards.',
            ]} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2021 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
            <TimelineDot 
              sx={{ 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'text.primary',
                color: 'text.primary'
              }}
            >
              <WorkIcon 
                sx={{ 
                  fontSize: {
                    xs: '0.9rem', 
                    sm: '1.5rem' 
                  }
                }} 
              />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
          </TimelineSeparator>
          <TimelineContent 
            sx={{ 
              py: '24px', 
              px: 2,
              transition: 'all 0.3s',
              '&:hover': { 
                transform: 'translateY(-3px)',
              }
            }}
          >
            <Typography variant="body1" component="span" fontWeight="bold" color="text.primary" fontFamily="'Open Sans', sans-serif">
              Novell Software Solutions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              Full Stack Software Engineer
            </Typography>
            <JobHighlights items={[
              'Delivered responsive Next.js and React web applications that improved online visibility, engagement, and revenue for client projects.',
              'Built and deployed RESTful backend services with Python/FastAPI and Go/Gin on AWS, configured behind Nginx reverse proxy.',
            ]} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2019 - 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
            <TimelineDot 
              sx={{ 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'text.primary',
                color: 'text.primary'
              }}
            >
              <SchoolIcon sx={{ 
                fontSize: {
                  xs: '0.9rem', 
                  sm: '1.5rem' 
                }
              }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'text.primary', opacity: 0.3 }} />
          </TimelineSeparator>
          <TimelineContent 
            sx={{ 
              py: '24px', 
              px: 2,
              transition: 'all 0.3s',
              '&:hover': { 
                transform: 'translateY(-3px)',
              }
            }}
          >
            <Typography variant="body1" component="span" fontWeight="bold" color="text.primary" fontFamily="'Open Sans', sans-serif">
              Ryerson University
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              BSc. Computer Science
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              With a focus on software development, operating systems, networking and databases.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}
