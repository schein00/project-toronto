'use client';

import { Box, Typography, Container, Paper, Grid, Avatar, Divider, Chip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Cabeçalho da página */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
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
          About Project Toronto
        </Typography>
        <Divider sx={{ my: 2 }}>
          <Chip icon={<InfoIcon />} label="Our Story" color="primary" />
        </Divider>
      </Box>

      {/* Seção principal */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Grid container spacing={6}>
          {/* Texto de introdução */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Our Mission
            </Typography>
            <Typography paragraph>
              Project Toronto was established with a vision to create innovative solutions that address real-world challenges.
              We combine cutting-edge technology with thoughtful design to deliver experiences that matter.
            </Typography>
            <Typography paragraph>
              Our team is passionate about pushing boundaries and exploring new possibilities in the digital landscape.
              We believe in the power of collaboration, continuous learning, and user-centered design.
            </Typography>
            
            <Divider sx={{ my: 3 }}>
              <Chip icon={<CodeIcon />} label="Technologies" size="small" color="secondary" />
            </Divider>
            
            <Typography variant="h6" gutterBottom>
              Core Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {['React', 'Next.js', 'TypeScript', 'Material UI', 'Node.js'].map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" color="primary" size="small" />
              ))}
            </Box>
          </Grid>
          
          {/* Informações complementares */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Imagem ou ilustração */}
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 200, 
                  backgroundColor: 'rgba(93, 46, 140, 0.1)', 
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <Typography variant="h4" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                  Toronto Project
                </Typography>
              </Box>
              
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                Learning Journey
              </Typography>
              <Typography paragraph>
                This project serves as a learning platform for exploring modern web development practices. 
                It demonstrates a variety of techniques and best practices for building scalable, responsive, 
                and accessible web applications.
              </Typography>
              
              <Divider sx={{ my: 3 }}>
                <Chip icon={<SchoolIcon />} label="Skills" size="small" color="secondary" />
              </Divider>
              
              <Typography variant="h6" gutterBottom>
                Key Learnings
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {[
                  'Component Design', 
                  'Responsive Layouts', 
                  'State Management', 
                  'Theme Customization', 
                  'API Integration'
                ].map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" color="secondary" size="small" />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Seção da Equipe */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mt: 4, 
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Our Team
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {/* Membros da equipe */}
          {[
            { name: 'Jefer Schein', role: 'Lead Developer', avatar: '/team1.jpg' },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto',
                    mb: 2,
                    bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                    fontSize: '3rem'
                  }}
                >
                  {member.name.charAt(0)}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}