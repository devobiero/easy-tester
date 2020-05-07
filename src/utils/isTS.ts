export const isTS = (args: any[]): boolean => {
  let ts = false;
  args.forEach((arg) => {
    const parts = arg.split('=');
    if (/.ts/.test(parts[1])) {
      ts = true;
    }
  });

  return ts;
};
