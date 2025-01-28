import { name, version } from "package";

function print(name: string, type: "ERROR" | "DEBUG" | "WARN", fn: string, ...args: any[]): Promise<void> {
  return new Promise((resolve) => {
    const now = new Date().toLocaleTimeString();

    let typeColor = "cyan";

    switch (type) {
      case "ERROR": {
        typeColor = "red";
        break;
      }
      case "WARN": {
        typeColor = "orange";
        break;
      }
    }

    console.debug(
      `%c[${name} - ${version}] %s`,
      `color: ${typeColor}; font-weight: bold;`,
      `%c${now} %s`,
      "color: gray; font-weight: bold;",
      `%c${type} %s`,
      `color: ${typeColor}; font-weight: bold;`,
      `%c${fn}%s`,
      "color: gray; font-style: italic;",
      "%c",
      "color: initial;",
      ...args,
    );

    resolve();
  });
}

export const log = {
  info: (fn: string, ...args: any[]) => print(name, "DEBUG", fn, ...args),
  error: (fn: string, ...args: any[]) => print(name, "ERROR", fn, ...args),
  warn: (fn: string, ...args: any[]) => print(name, "WARN", fn, ...args),
};
