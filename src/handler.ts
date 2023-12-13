import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function useRoutes(app: express.Application) {
  const folderPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    './routes',
  );
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const relativePath = path.join(folderPath, file);
    const route = await import(relativePath);
    const routePath = `/${path.basename(file, path.extname(file))}`;
    app.use(routePath, route.default);
  }
}

export default useRoutes;
