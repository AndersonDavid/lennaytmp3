const download = require('image-downloader')

const getAlbumCover = async (uri) => {

    const nameImage = 'cover_' + Date.now() + '.jpg';
    const pathImage = __dirname + '/../../temp/imgs/' + nameImage;

    const options = {
        url: uri,
        dest: pathImage
    }
    
    console.log('Baixando imagem da capa.');
    
    try {
        await download.image(options)
        console.log('Imagem baixada.');
        return nameImage;

    } catch (e) {
        console.error(e)
    }

}

module.exports = getAlbumCover;