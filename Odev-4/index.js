import { writeFile, readFile, unlink, appendFile } from 'node:fs';

const write = () => {
        writeFile('employees.json', '{"name": "Selim", "salary": 20000}', (err) => {
                if (err) console.log(err);
                console.log('Dosyanız yazıldı.');
        })
}

const read = () => {
        readFile('employees.json', 'utf8', (err, data) => {
                if (err) console.log(err);
                console.log(data);
                console.log('Dosyanız Okundu.');
        })
}

const update = () => {

        appendFile('employees.json', '\n{"name": "Kerem", "salary": 3000}', (err) => {
                if (err) console.log('Error')
                console.log('Dosya güncellendi.')
        })
}

const del = () => {
        unlink('employees.json', (err) => {
                if (err) console.log('Error')
                console.log('Dosya Silindi.')
        })

}