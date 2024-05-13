# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## tips
```
environments variables
https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
baseURL: process.env.BACKEND_URL,
import { defineConfig, loadEnv } from 'vite'

tutorial
https://www.youtube.com/watch?v=X3qyxo_UTR4

list
https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd


```
## .env file
- edit vite.config.js

```
VITE_BACKEND_URL=http://localhost:8000

```

## start
- default http://localhost:5173/

```
npm i
npm run dev

```