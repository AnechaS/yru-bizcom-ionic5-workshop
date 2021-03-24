export default function logger(param: any) {
  console.log(param);
}

export function log(t: string, param: any) {
 (<any>console)[t](param);
}

export const logs: string[] = [
  'info',
  'error',
  'dir',
  'debug'
]

console.debug();
