// Работа с ОС

const os = require('os');
const cluster = require('cluster');


// ОС
console.log(os.platform());

// Архитектура процессора
console.log(os.arch());

// Описание ядер процессора
console.log(os.cpus());
console.log(os.cpus().length);


if(cluster.isMaster) {
    for( let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
} else {
    console.log('Воркер с pid' + process.pid + 'запущен');
    setInterval(() => {
        console.log(`Процесс с pid ${process.pid} продолжает свою работу`);
    },5000)
}
// const cpus = os.cpus();

// for( let i = 0; i < cpus.length - 2; i++) {
//     const CPUcore = cpus[i];
//     console.log('Запустить еще один node js процесс');
// }