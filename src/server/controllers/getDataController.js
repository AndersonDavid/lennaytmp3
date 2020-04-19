const dlFromYt = require('../../handleAudio/dlFromYt');
const setInfoOnAudio = require('../../handleAudio/setInfoOnAudio')
const clearServerBD = require('../../handleAudio/clearServerBD')

const getDataController = {
    async handleID(req, res) {

        const { ytid } = req.body;

        dlFromYt(ytid, res)
        
    },

    getInfoId3(req, res) {

        const data = req.body;
        
        setInfoOnAudio(data.file, data.tags, res)
        

    },

    dlFileMp3(req, res){

        const file = req.params.file;

        res.download(__dirname + '/../../../temp/mp3/' + file)
    },

    delFromServer(req, res){
        clearServerBD(res)
    }
}

module.exports = getDataController;
