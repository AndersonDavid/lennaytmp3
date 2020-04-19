const NodeID3 = require('node-id3');
const getAlbumCover = require('./getAlbumCover');
const fs = require("fs")

const setInfoOnAudio = async (file, data, res) => {
    const coverImage = await getAlbumCover(data.image);

    const pathToCover = __dirname + '/../../temp/imgs/' + coverImage;

    const tagsForMp3 = Object.assign({}, data, { image: pathToCover });

    const file1 = __dirname + '/../../temp/mp3/' + file

    const fileNewName = __dirname + '/../../temp/mp3/' + data.title + ' - ' + data.artist + '.mp3';

    NodeID3.write(tagsForMp3, file1, function (err, buffer) {
        if (err) throw err
        console.log('Tags definidas');

        fs.rename(file1, fileNewName, () => {
            console.log('Arquivo Renomeiado.');
        })

        res.status(200).send('status ok ' + fileNewName);
        return fileNewName

    })


}

module.exports = setInfoOnAudio
