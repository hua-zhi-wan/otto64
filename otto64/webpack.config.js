import { resolve } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    entry: './index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'otto64.min.js',
        library: {
            name: 'otto64',
            type: 'umd',
            umdNamedDefine: true
        }
    },
    mode: 'none'
}