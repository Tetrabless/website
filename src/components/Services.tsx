import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { FaLaptopCode, FaRocket, FaBookOpen, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    icon: () => <FaLaptopCode size={48} />,
    title: 'Mini Projects',
    description:
      '✔️ 25+ ready-to-use projects for 2nd & 3rd year students. Includes code, docs, and demo support.',
    color: '#1976d2',
  },
  {
    icon: () => <FaRocket size={48} />,
    title: 'Major Projects',
    description:
      '🚀 40+ full-stack projects with React, Spring Boot, MySQL. Viva-ready with full guidance.',
    color: '#9c27b0',
  },
  {
    icon: () => <FaBookOpen size={48} />,
    title: 'Doubt Clearing & Coaching',
    description:
      '📘 1-on-1 mentorship, live coding sessions, Java, React, DB prep, and interview readiness.',
    color: '#2e7d32',
  },
  {
    icon: () => <FaBriefcase size={48} />,
    title: 'Internship & Job Support',
    description:
      '💼 Internships, experience letters, resume building, mock interviews & freelance support.',
    color: '#ff5722',
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        py: 10,
        px: 3,
        background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',
      }}
    >
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        🚀 Our Services at TETRABLESS
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
      >
        We empower students and job seekers with project training, coaching, internships, and career-ready support.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                borderRadius: 4,
                background: '#ffffff',
                boxShadow: `0 6px 20px ${service.color}33`,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 8px 25px ${service.color}55`,
                },
              }}
            >
              <Box
                mb={2}
                sx={{
                  color: service.color,
                }}
              >
                {service.icon()}
              </Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
