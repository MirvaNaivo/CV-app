import express, { Request, Response } from "express";
import ViteExpress from "vite-express";
import fs from 'fs-extra';
import path from 'path';

const app = express();
ViteExpress.config({ mode: "production" });
app.use(express.json());

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const DB_FILE = path.join(__dirname, 'db.json');

async function loadData() {
  try {
    const data = await fs.readJson(DB_FILE)
    return data
  } catch (error) {
    console.error('Error reading JSON file:', error);
    throw error;
  }
}

app.get('/api/education', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    const educationData = data.education
    res.json(educationData)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

app.get('/api/work_experience', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    res.send(data.work_experience)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

app.get('/api/skills', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    res.send(data.skills)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

app.get('/api/soft_skills', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    res.send(data.soft_skills)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

app.get('/api/languages', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    res.send(data.languages)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

app.get('/api/personal_info', async (_req: Request, res: Response) => {
  try {
    const data = await loadData()
    res.json(data.personal_info)
  } catch (error) {
    res.status(500).send({ message: "Failed to read data." })
  }
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
