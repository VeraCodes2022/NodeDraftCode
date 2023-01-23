const path=require('path');
console.log(path)
const filepath=path.join('test.txt')
console.log(filepath)
const base=path.basename(filepath);
console.log(base)

const absolute=path.resolve(__dirname,'test.txt')
console.log(absolute)
