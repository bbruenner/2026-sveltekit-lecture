// Start im Terminal:  node excel.js   (oder: npm run excel)
import { readFileSync } from 'node:fs';
import ExcelJS from 'exceljs';

const stimmen = JSON.parse(readFileSync('stimmen.json', 'utf-8'));

const mappe = new ExcelJS.Workbook();
const blatt = mappe.addWorksheet('Feedback');

// key = Name der Eigenschaft in unseren Stimmen-Objekten
blatt.columns = [
	{ header: 'Zeit', key: 'zeit', width: 22 },
	{ header: 'Sterne', key: 'sterne', width: 8 },
	{ header: 'Text', key: 'text', width: 60 }
];
blatt.addRows(stimmen);

await mappe.xlsx.writeFile('feedback.xlsx');

console.log(`feedback.xlsx mit ${stimmen.length} Zeilen geschrieben.`);
