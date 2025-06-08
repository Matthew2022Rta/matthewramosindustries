// myportfolio.mjs
import express from 'express';
import { appendRow } from './google-sheets.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-idea', async (req, res) => {
    const { name, email, idea } = req.body;
    console.log('Received form data:', req.body);

    try {
        await appendRow({ name, email, idea });
        res.send('Google Sheet updated successfully!');
    } catch (error) {
        console.error('Error updating Google Sheet:', error);
        res.status(500).send('Error updating Google Sheet');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});