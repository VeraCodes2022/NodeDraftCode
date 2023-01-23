const fs=require('fs');

fs.open('readstreamfile.txt','w',
    function (err){
    if(err)throw err;
})

const readStream=fs.createReadStream('./readstreamfile.txt');
readStream.on('open',function (){console.log('the file is open.')});

//events modules imported.
const events=require('events');
const eventEmitter=new events.EventEmitter();
const myeventHandler=function (){
    console.log('i hear a scream')
}
eventEmitter.on('scream',myeventHandler);
eventEmitter.emit('scream');