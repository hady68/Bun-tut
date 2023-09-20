import path from 'path';

const file = Bun.file('output.txt');
const filepath = path.join('foo','bar','image.png');
const filename = path.basename(filepath);
console.log(filename); // image.png

console.log(file.size);

console.log(await file.text());
console.log(file.stream());
console.log(await file.arrayBuffer());