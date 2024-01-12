import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const webpackFile = fileURLToPath(import.meta.url);
const basedir = dirname(webpackFile);
const entrysDir = path.resolve(basedir, './static/entrys/');
const entryFiles = fs.readdirSync(entrysDir);

const entry = entryFiles.reduce((entries, filename) => {
  if (path.extname(filename) === '.js') {
    const entryName = path.basename(filename, '.js');
    entries[entryName] = path.join(entrysDir, filename);
  }
  return entries;
}, {});

// console.log(`__dirname: ${__basedir}`);
// console.log(`__filename: ${__webpackFile}`);
// console.log(`entrysDir: ${entrysDir}`);
// console.log(`entryFiles: ${entryFiles}`);
// console.log(entry);

export default {
  entry: entry,
  output: {
    filename: '[name]-bundle.js',  // output bundle file name
    path: path.resolve(basedir, './static/bundles/'),  // path to our Django static directory
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
        },
    ]
  }
}