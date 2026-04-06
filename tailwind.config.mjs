export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: '#1f2937',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#1e40af',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
