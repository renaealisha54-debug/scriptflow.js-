export const DEFAULT_GLOBALS = {
  // Mock data for users to play with immediately
  SAMPLE_USER: { id: 1, name: 'Logic Developer', role: 'Admin' },
  
  // Handy utility functions available globally in their scripts
  utils: {
    now: () => new Date().toISOString(),
    randomId: () => Math.random().toString(36).substr(2, 9),
  },
  
  // Placeholder for API keys
  ENV: {
    BASE_URL: 'https://api.scriptflow.dev',
    TIMEOUT: 5000,
  }
};
