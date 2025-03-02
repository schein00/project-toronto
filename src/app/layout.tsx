'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem, IconButton } from "@mui/material";

import { useState } from "react";
import Link from "next/link";
import NavigationMenu from "@/componnets/menu/NavigationMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Crie o tema MUI personalizado com suas cores
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6600', // Laranja vibrante
      light: '#FF8533', // Versão mais clara do laranja
      dark: '#CC5200', // Versão mais escura do laranja
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5D2E8C', // Roxo profundo
      light: '#7D56A4', // Versão mais clara do roxo
      dark: '#401F61', // Versão mais escura do roxo
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#333', // Fundo escuro
      paper: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF', // Texto branco para contraste com fundo escuro
      secondary: '#CCCCCC',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Gradiente roxo na base e preto no topo
          background: 'linear-gradient(to top, #5D2E8C 0%, #2B1641 25%, #1A0D27 50%, #121212 75%, #000000 100%)',
          minHeight: '100vh',
        }
      }
    }
  },
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavigationMenu />
            <Box sx={{ flexGrow: 1 }}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}