// This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

// Currently, two official plugins are available:
// - @vitejs/plugin-react uses Babel for Fast Refresh
// - @vitejs/plugin-react-swc uses SWC for Fast Refresh

// Recommended plugin for optimal performance
// import react from '@vitejs/plugin-react';
// import reactSwc from '@vitejs/plugin-react-swc';

// For optimal performance, use the SWC plugin
import reactSwc from '@vitejs/plugin-react-swc';

// Configure the plugin for Fast Refresh
export default {
  plugins: [reactSwc()],
};CCCCCCCCCCCCCCCCC

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
