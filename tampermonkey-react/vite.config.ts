import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

import monkey from 'vite-plugin-monkey';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    monkey({
      entry: 'src/main.jsx',
      userscript: {
        name: 'My React Tampermonkey Script',
        namespace: 'npm/my-react-tm-app',
        version: '0.0.1',
        match: ['https://example.com/*'], // Change to your target website
        grant: 'none',
      },
    }),
  ],
});