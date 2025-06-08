import { GoogleSpreadsheet } from 'google-spreadsheet';
import fs from 'fs';

// Load service account credentials
const creds = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

// Your Google Sheet ID
const SHEET_ID = '1QE07CMQYZj-NhNlCw1fAVnue57nBwLPOvCrFF2XzPdQ';

const doc = new GoogleSpreadsheet(SHEET_ID);

export async function appendRow({ name, email, idea }) {
    // Authenticate with service account (VERSION 4.1.4 SYNTAX)
    await doc.useServiceAccountAuth(creds);

    // Load sheet info
    await doc.loadInfo();
    console.log(`Sheet loaded: ${doc.title}`);

    // Use first sheet
    const sheet = doc.sheetsByIndex[0];

    // Append row
    await sheet.addRow({
        Name: name,
        Email: email,
        Idea: idea,
        Timestamp: new Date().toISOString(),
    });

    console.log('Row appended!');
}