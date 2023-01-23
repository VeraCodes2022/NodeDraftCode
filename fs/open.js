const fs=require('fs');
// create a new empty file using fs.open
fs.open('mynewfile1.txt','w',function (err,file){
    if(err)throw err;
})

// fs.writeFile() method replaces the specified file and content if it exists, if the file doesnt exist,
// a new file containing the
// specified content will be created.

fs.writeFile('mynewfile1.txt','hello content! i changed the existed file!!',function (err){
    if(err)throw err;
})


fs.writeFile('persimmon.txt','I love persimmon!',function (err){
    if(err)throw err;
});
// fs.appendFile() is able to update files' content.

fs.appendFile('persimmon.txt','this is the text i added with fs appendFile.',function (err){
    if(err)throw err;
})

fs.rename('persimmon.txt', 'fruits.txt',function (err){
    if(err)throw err;
})
fs.readFile('../demo.doc','utf8', function (err,result){
    if(err)throw err;

})

const {readFile, writeFile}=require('fs');
readFile('../demo.doc','utf8',function (err,result){
    if(err){console.log(err)
    return }
    const first=result;
    readFile('../test.txt','utf8',function (err,result){
        if(err){console.log(err)
            return }
        const second=result;
        writeFile('./async.txt',`here is the results', ${first} ${second}`, 'utf-8' , function (err,result){
            if(err){console.log(err)
                return}
        })

    })
})


