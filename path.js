// Работа с модулем path
const path = require('path');
const { fileURLToPath } = require('url');

// Склеивание участков пути
console.log(path.join(__dirname,'first','second')); 

// Получение абсолютного пути
console.log(path.resolve('one','two','three'));


// Парсинг пути
const fullPath = path.resolve('one','two','three.txt')
console.log(path.parse(fullPath));

// Разделитель в ОС
console.log('separator',path.sep);

// Проверка абсолютного пути
console.log(path.isAbsolute('folder/file.js'));

// Название файла
console.log(path.basename(fullPath));

// Расширение файла
console.log(path.extname(fullPath));


// Работа с URL

const siteUrl = 'http://localhost:8000/users?id=1234'

const url = new URL(siteUrl)

console.log(url);
