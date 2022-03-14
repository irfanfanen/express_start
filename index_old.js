import express from "express";
 
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});
app.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});
 
app.listen(3000, () => console.log('Running at :3000'));