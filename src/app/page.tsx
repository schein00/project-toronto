'use client';

import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            background: 'linear-gradient(45deg, #FF6600 30%, #5D2E8C 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome to Project Toronto
        </Typography>
        <Typography variant="body1" paragraph>
          This is the main content area of your application.
        </Typography>
        <Typography variant="body1" paragraph>
          Project Toronto is a modern web application built with Next.js and Material UI.
          It features a responsive design, custom theming, and component-based architecture.
        </Typography>
        <Typography variant="body1">
          Navigate through the menu to explore different sections of the application.
        </Typography>
      </Box>
    </Container>
  );
}