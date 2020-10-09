const fs = require('fs');
const path = require('path');

const dir = require('logs');

// removes log files
fs.readdir(dir, (err, files) => {
    if (err) throw err;
    
    for(const file of files){
        console.log('removing files... ' + file)
        fs.unlink(path.join(dir, files), err => {
            if (err) throw err;
        });
    }
});

// adds log files (wasnt able to complete in time)