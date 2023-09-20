// const data = 'I am data from file.ts';
// await Bun.write('output.txt', data);

const file =  Bun.file('output.txt');
console.log(file.size);
// console.log( file.stream());
const arrayBuffer = await file.arrayBuffer();
console.log(arrayBuffer);
const textContent = await file.text();
console.log(textContent);
// {
//     name: 'output.txt',
//     path: '/home/runner/work/bun/bun/output.txt',
//     data: 'I am data from file.ts'
// }
