const fs = require('fs');   // fs : file system       path: chemain    flag?

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err)
        return
    }
    console.log(data)
})

