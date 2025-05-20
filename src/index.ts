import path from 'path';
import { fileURLToPath } from 'url';
import { bong } from './cloud';
import { anbc } from './game/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, 12345, anbc);
bong();
