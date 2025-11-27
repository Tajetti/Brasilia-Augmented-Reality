import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  server: {
    host: true,  
    port: 5173,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '187.10.67.203+1-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '187.10.67.203+1.pem'))
    }
  }
})