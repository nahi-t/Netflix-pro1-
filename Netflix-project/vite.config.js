const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Netflix-pro1/' : '/',
  build: {
    outDir: 'dist',
  },
});

