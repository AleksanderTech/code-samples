import path from "path";
import { fileURLToPath } from "url";

// console.log(import.meta.url);
// console.log(fileURLToPath(import.meta.url));
// console.log(path.dirname(fileURLToPath(import.meta.url)));

export const RootDir = path.dirname(fileURLToPath(import.meta.url));
