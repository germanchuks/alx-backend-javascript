// Utility functions for full_server
import fs from 'fs';

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const lines = data.trim().split('\n');
            if (lines.length === 0) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const headers = lines[0].split(',');
            if (headers.length < 4) {
                reject(new Error());
                return;
            }

            const studentsByField = lines.slice(1)
                .map(line => line.split(','))
                .filter(parts => parts.length === headers.length)
                .reduce((acc, student) => {
                    const field = student[3];
                    if (!acc[field]) {
                        acc[field] = [];
                    }
                    acc[field].push(student[0]);
                    return acc;
                }, {});

            resolve(studentsByField);
        });
    });
}

export default readDatabase;