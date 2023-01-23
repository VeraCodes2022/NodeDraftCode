const {readFileSync,writeFileSync}=require('fs');// 同步
console.log('start')
const first=readFileSync('./test.txt','utf8')
const second=readFileSync('./todayreport.txt', 'utf8')

writeFileSync('./result-sync.txt',`here is the result ${first} and ${second}`, {flag:'a'});

console.log('done with this task');
console.log('starting with the next one')

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log('hello people')
