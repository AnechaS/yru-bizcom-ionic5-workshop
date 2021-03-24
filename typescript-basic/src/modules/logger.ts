export default function logger(message: string): void {
  console.log({
    message,
    timestam: (new Date()).toISOString()
  });
}

export function info(param: any): void {
  console.info('info:', param);
}

export function debug(param: any): void {
  console.debug('debug:', param);
}

export const logs = ["info", "debug"];