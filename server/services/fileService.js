const fs = require('fs')
const File = require('../modules/File')
const config = require('config')

class fileService {
    createDir(req, file) {
        const filePath = `${req.filePath}//${file.user}//${file.path}`
        return new Promise(((resolve, reject) => {
            try {
                    if(!fs.existsSync(filePath)) {
                        fs.mkdirSync(filePath)
                        return resolve({message: 'Folder was created'})
                    } else {
                        return reject({message: "Folder already exist"})
                    }
            } catch(e) {
                return reject({message: "Folder error"})
            }
        }))
    }

    deleteFile(req, file) {
        if(file.type === 'dir') {
            const path = req.filePath + '/' + file.user + '/' + file.path
            fs.rmdirSync(path)
        } else {
            const path = req.filePath + '/' + file.user + '/' + file.path + '/' + file.name
            fs.unlinkSync(path)
        }
    }
}

module.exports = new fileService()