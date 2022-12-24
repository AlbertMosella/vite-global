import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfig from './tsconfig.json';
import { join } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: Object.keys(tsconfig.compilerOptions.paths).reduce((p, c) => {
      p[c] = join(__dirname, tsconfig.compilerOptions.paths[c][0]);
      return p;
    }, {}),
  },
});
