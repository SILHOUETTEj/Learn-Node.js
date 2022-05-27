// Readable - чтение
// Writable - запись
// Duplex - для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменять данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve('data.txt'), (err, data) => {
//     if(err) {
//         throw err
//     }
//     console.log(data);
// })

const stream = fs.createReadStream(path.resolve('data.txt'));

stream.on('data', (chunk) => {
    console.log(chunk);
})

const writableStream = fs.createWriteStream(path.resolve('data.txt'))

for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n');

}
writableStream.end()