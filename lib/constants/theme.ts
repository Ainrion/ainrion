// src/lib/constants/theme.ts

export const theme = {
    colors: {
      primary: '#d64206',
      accent: '#1f1f1f',
      neutral: '#dcdcdc',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    },
    fonts: {
      heading: 'MARS, Helvetica, sans-serif',
      body: 'Helvetica, sans-serif',
    },
    spacing: {
      container: {
        padding: '2rem',
        maxWidth: '1280px',
      },
      section: {
        padding: {
          desktop: '6rem',
          mobile: '3rem',
        }
      }
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  };
  
  // Animation variants
  export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  
  export const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  export const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };