import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/hyperreal/',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [react()],
});
