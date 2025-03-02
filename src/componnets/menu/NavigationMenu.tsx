import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Componente para o menu de navegação
export default function NavigationMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMenuAnchorEl(event.currentTarget);
    };
    
    const handleMobileMenuClose = () => {
      setMobileMenuAnchorEl(null);
    };
  
    return (
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* Logo ou título */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project Toronto
          </Typography>
          
          {/* Menu para desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} href="/">Home</Button>
            <Button color="inherit" component={Link} href="/about">About</Button>
            
            {/* Botão do menu suspenso */}
            <Button 
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleMenuOpen}
            >
              Services
            </Button>
            {/* Menu suspenso */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Service 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Service 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Service 3</MenuItem>
            </Menu>
            
            <Button color="inherit">Contact</Button>
          </Box>
          
          {/* Menu para dispositivos móveis */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Menu móvel suspenso */}
            <Menu
              anchorEl={mobileMenuAnchorEl}
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={handleMobileMenuClose} component={Link} href="/">Home</MenuItem>
              <MenuItem onClick={handleMobileMenuClose} component={Link} href="/about">About</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Services</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }