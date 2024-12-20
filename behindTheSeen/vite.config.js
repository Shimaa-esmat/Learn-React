import MillionLint from '@million/lint';
import million from 'million/compiler'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const _plugins = [react()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: [million.vite({auto: true}),react()],
});  