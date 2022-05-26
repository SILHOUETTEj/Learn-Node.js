// Работа с файловой системой

const fs = require('fs');
const path = require('path')

// Создание папки
fs.mkdirSync(path.resolve('dir'))
// Рекурсивное создание папок
fs.mkdirSync(path.resolve('fold1','fold2','fold3'),{recursive:true})

// Асинхронное создание папок

fs.mkdir(path.resolve('async dir'), (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Folder is created!');
})


// Удаление папок

fs.rmdir(path.resolve('async dir'), () => {
    console.log('Folder is deleted!');
})
fs.rmdir(path.resolve('fold1'),{recursive:true}, () => {
    console.log('Folder is deleted!');
})
fs.rmdir(path.resolve('dir'), () => {
    console.log('Folder is deleted!');
})

// Создание файла
// Создание + запись/перезапись
fs.writeFile(path.resolve('test.txt'), 'Hello again!',() => {
    console.log('File is created');
})
//Запись в конец файла
fs.appendFile(path.resolve('test.txt'), 'Append',() => {
    console.log('File is created');
})

// Операции с файлами на промисах

const writeFileAsync = async (path, data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(path, data, (err) => {
            if(err) {
                return reject(err.message);
            }
            resolve()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve,reject) => {
        fs.appendFile(path, data, (err) => {
            if(err) {
                return reject(err.message);
            }
            resolve()
        })
    })
}

writeFileAsync(path.resolve('test2.txt'),'Create')
    .then(() => {

        appendFileAsync(path.resolve('test2.txt'),'Append1')
        
    })
    .then(() => {

        appendFileAsync(path.resolve('test2.txt'),'Append2')
        
    })
    .then(() => {
        fs.unlinkSync(path.resolve('test2.txt'))
    })
    .catch(err => console.log(err))


// Удаление файлов

fs.unlinkSync(path.resolve('test.txt'))


// Чтение данных из файла

const readFileAsync = async (path) => {
    return new Promise((resolve,reject) => {
        fs.readFile(path,{encoding: 'utf-8'}, (err,data) => {
            if(err) {
                return reject(err.message);
            }
            resolve(data)
        })
    })
}

writeFileAsync(path.resolve('testWrite.txt'),'Create')
    .then(() => {

        appendFileAsync(path.resolve('testWrite.txt'),'Append1')
        
    })
    .then(() => {

        appendFileAsync(path.resolve('testWrite.txt'),'Append2')
        
    })
    .then(() => {
        readFileAsync(path.resolve('testWrite.txt'))
        .then(data => console.log(data))
    })
    .then(() => {
        fs.unlinkSync(path.resolve('testWrite.txt'))
    })
    .catch(err => console.log(err))


