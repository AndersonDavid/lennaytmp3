const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

const dlFromYt = async (ytid, res) => {

    const audioFileName = 'audio_' + Date.now() + '.mp3';
    const pathAudioFile = __dirname + '/../../temp/mp3/' + audioFileName;

    console.log('id recebido');

    const stream = ytdl(ytid, {
        quality: 'highestaudio',
        //filter: 'audioonly',
    });

    console.log('Baixando audio...');


    let timeStart = Date.now();

    ffmpeg(stream)
        .output(pathAudioFile)
        .audioBitrate(192)
        .format('mp3')

        .on('start', () => {
            console.log('Conversão iniciada!');

        })

        .on('end', () => {
            console.log('Conversão do audio concluido!');
            let dltime = (Date.now() - timeStart) / 1000;

            res.json(
                {
                    "downloaded": true,
                    "dltime": dltime,
                    "audiofilename": audioFileName
                }
            )

        }).on('error', (err) => {
            console.log('error: ', err.code, err.msg);
            console.log(err);

        }).run();

}

module.exports = dlFromYt;
