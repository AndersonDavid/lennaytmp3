const fs = require('fs');
const path = require('path');


const clearServerDB = (res) => {

    try {
        const clearDir = (directory) => {
            fs.readdir(directory, (err, files) => {
                if (err) throw err;
    
                for (const file of files) {
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            });
        }

        clearDir(__dirname + '/../../temp/mp3/');
        clearDir(__dirname + '/../../temp/imgs/');

        console.log('limpo');
        res.status(200).send('limpo patrão')

        //file removed
    } catch (err) {
        console.error(err)
    }
}

module.exports = clearServerDB;