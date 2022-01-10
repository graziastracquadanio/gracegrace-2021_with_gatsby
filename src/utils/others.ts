export const printError = (error: any) => {
  // eslint-disable-next-line no-console
  console.log(`%c${error}`, 'color: white; background: deeppink;');
};

export const copyToClipboard = (value: string, callback?: (v: string) => void) => {
  navigator.clipboard.writeText(value);
  if (callback) callback(value);
};
