
// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import { mediaDown } from './responsive';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  
  html {
    font-size: 16px;
    
    ${({ theme }) => mediaDown.sm(theme)} {
      font-size: 14px;
    }
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    
    ${({ theme }) => mediaDown.md(theme)} {
      flex-direction: column;
    }
  }
  
  .content {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.lg};
    overflow-y: auto;
    
    ${({ theme }) => mediaDown.md(theme)} {
      padding: ${({ theme }) => theme.spacing.md};
    }
    
    ${({ theme }) => mediaDown.sm(theme)} {
      padding: ${({ theme }) => theme.spacing.sm};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    ${({ theme }) => mediaDown.sm(theme)} {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    
    ${({ theme }) => mediaDown.md(theme)} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    
    ${({ theme }) => mediaDown.sm(theme)} {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    
    ${({ theme }) => mediaDown.md(theme)} {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
    
    ${({ theme }) => mediaDown.sm(theme)} {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    min-height: 44px; /* Minimum touch target size */
    min-width: 44px; /* Minimum touch target size */
  }
  
  input, select, textarea {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  /* Improve touch targets for mobile */
  input[type="checkbox"], input[type="radio"] {
    min-height: 24px;
    min-width: 24px;
  }
  
  /* Add spacing between touch targets */
  button + button, 
  a + a, 
  input + input, 
  select + select {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
  
  /* Ensure images are responsive */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export default GlobalStyle;
