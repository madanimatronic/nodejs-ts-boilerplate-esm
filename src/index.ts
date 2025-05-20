import path from 'path';
import { fileURLToPath } from 'url';
import { bong } from './cloud.js';
import { anbc } from './game/test.js';
// Импорты с расширениями используются в чистом ESM!

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, 12345, anbc);
bong();

// const abc: number = 'Error yee yee';
// console.log(abc);
