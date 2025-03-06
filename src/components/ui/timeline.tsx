import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

export default function CustomizedTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >  
      <Timeline 
        position="alternate"
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
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              Developing modern web applications with React, Next.js and TypeScript.
            </Typography>
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
              Full Stack Developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              Developed websites using Wordpress, React, Mysql, TailwindCSS.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2022 - Present
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
              Founder & Web Developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              Developing websites using Wordpress. Advertising using Google Ads, implementing SEO strategies.
            </Typography>
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
              Audi
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              Pre Owned Sales Coordinator
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              Inspecting, Preparing vehicles for sale. Managing dealership database.
            </Typography>
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
              Toronto Metropolitan University
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

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2017 - 2020
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
                    xs: '1rem', 
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
              The Boulevard Club
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, fontWeight: 'light', fontFamily: "'Open Sans', sans-serif" }}>
              Sailing Instructor & Dock Master
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mt: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'light',
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: 1.8
            }}>
              Instructed students from ages 8 to 16. Providing docking services and dock repairs to club members.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}
