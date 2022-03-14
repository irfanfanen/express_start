import express from "express";
import { Home, About, Contact } from "../controllers/page.js"

const router = express.Router();
router.get('/', Home);
router.get('/about', About);
router.get('/contact', Contact);

export default router;