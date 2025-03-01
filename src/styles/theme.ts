// src/styles/theme.ts
const theme = {
    colors: {
      primary: '#4361ee',
      secondary: '#3f37c9',
      accent: '#4895ef',
      background: '#f8f9fa',
      sidebar: '#ffffff',
      card: '#ffffff',
      text: '#333333',
      textLight: '#666666',
      border: '#e9ecef',
      success: '#4bb543',
      warning: '#ffcc00',
      danger: '#ff3333',
      info: '#0099cc',
    },
    fonts: {
      body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      monospace: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      xxxl: '1.875rem',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.1)',
      xl: '0 20px 25px rgba(0,0,0,0.1)',
    },
    transitions: {
      fast: '0.15s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
    breakpoints: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    zIndices: {
      base: 0,
      overlay: 10,
      modal: 20,
      tooltip: 30,
    },
  };
  
  export default theme;
