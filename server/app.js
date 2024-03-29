import express from 'express';
import router from './routes/routes.js';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(join(__dirname, "../client/dist")));
app.use(router)

