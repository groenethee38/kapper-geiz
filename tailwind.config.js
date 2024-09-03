// tailwind.config.js
import { join } from 'path';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(__dirname, 'node_modules', 'daisyui', '**', '*.{js,ts,jsx,tsx}')
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#e3e1e1',
        accent: '#2e221b',
        footer: '#303030',
        'primary-content': '#000',
        'secondary-content': '#555555',
        'accent-content': '#FFFFFF',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#008080',
          secondary: '#FF6F61',
          accent: '#FFA07A',
          neutral: '#333333',
          'base-100': '#fff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};