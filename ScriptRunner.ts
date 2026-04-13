export const runLogic = (code: string, setLogs: (logs: string[]) => void) => {
  const output: string[] = [];
  
  // Custom console.log hijack
  const customConsole = {
    log: (...args: any[]) => {
      output.push(args.map(a => String(a)).join(' '));
    },
    error: (msg: string) => {
      output.push(`ERROR: ${msg}`);
    }
  };

  try {
    // Wrapping in a function to provide our custom console
    const execute = new Function('console', 'storage', code);
    execute(customConsole, {}); 
    setLogs(output);
  } catch (err: any) {
    setLogs([...output, `RUNTIME ERROR: ${err.message}`]);
  }
};
