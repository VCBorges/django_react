import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: '/static/src/sometemplateindex.js',
    output: {
      filename: 'index-bundle.js',  // output bundle file name
      path: path.resolve(__dirname, './static'),  // path to our Django static directory
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