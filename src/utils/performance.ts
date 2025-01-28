import { log } from "./logger.ts";

export function perfStart(): number {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }

  return new Date().getTime();
}

export function perfEnd(name: string, start: number): void {
  const value = perfStart() - start;

  // format value to munites, seconds, milliseconds
  const minutes = Math.floor(value / 60000);
  const seconds = Math.floor((value % 60000) / 1000);
  const milliseconds = Number(value % 1000).toFixed(3);

  if (minutes > 0) {
    log.info(name, `Executed in ${minutes}min ${seconds}sec ${milliseconds}ms`);
  }
  else if (seconds > 0) {
    log.info(name, `Executed in ${seconds}sec ${milliseconds}ms`);
  }
  else {
    log.info(name, `Executed in ${milliseconds}ms`);
  }
}
