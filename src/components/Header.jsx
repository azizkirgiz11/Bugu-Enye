import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  Box, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobil yan menü içeriği
  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Главная" sx={{ color: '#1b3320' }} />
        </ListItem>
        <ListItem component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="О нас" sx={{ color: '#1b3320' }} />
        </ListItem>
        <ListItem component={Link} to="/tickets" onClick={handleDrawerToggle}>
          <div className={styles.ticketButton} style={{ textAlign: 'center', width: '100%' }}>
             Билеты
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className={styles.mainHeader}>
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
      >
        <div className={styles.headerContainer}>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%', padding: '0 !important' }}>
            
            {/* Logo Alanı (Senin Stilin) */}
            <Link to="/" className={styles.logoWrapper}>
              <img src={logo} alt="Bugu Ene Logo" className={styles.headerLogo} />
              <div className={styles.logoText}>
                <h1 className={styles.brandName}>БУГУ ЭНЕ</h1>
                <span className={styles.brandSub}>общественный фонд</span>
              </div>
            </Link>

            {/* Masaüstü Navigasyon (Sadece geniş ekranlarda görünür) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <div className={styles.navMenu}>
                <Link 
                  to="/" 
                  className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}
                >
                  Главная
                </Link>
                <Link 
                  to="/about" 
                  className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}
                >
                  О нас
                </Link>
              </div>
              <Link to="/tickets" className={styles.ticketButton}>
                Билеты
              </Link>
            </Box>

            {/* Mobil Menü Butonu (Sadece mobilde görünür) */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: '#1b3320', fontSize: '30px' }} />
              </IconButton>
            </Box>

          </Toolbar>
        </div>
      </AppBar>

      {/* MUI Drawer - Mobil Yan Menü */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header;