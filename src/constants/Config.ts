export const APP_CONFIG = {
  VERSION: '1.0.0-beta',
  TERMINAL_MAX_LOGS: 50, // Prevents memory leaks
  STORAGE_KEYS: {
    TERMINAL_POS: '@ScriptFlow_terminal_pos',
    USER_SCRIPTS: '@ScriptFlow_scripts',
    ENV_VARS: '@ScriptFlow_env_vars',
  },
  THEME: {
    BACKGROUND: '#121212',
    ACCENT: '#00FF00', // Classic "Terminal Green"
    ERROR: '#FF5555',
  }
};
