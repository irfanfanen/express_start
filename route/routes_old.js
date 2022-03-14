import express from "express";

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World');
});
router.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});

export default router;