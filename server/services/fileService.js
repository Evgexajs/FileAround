const fs = require('fs')
const File = require('../modules/File')
const config = require('config')

class fileService {
    createDir(file) {
        const filePath = `${config.get('filePath')}//${file.user}//${file.path}`
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

    deleteFile(file) {
        if(file.type === 'dir') {
            const path = config.get('filePath') + '/' + file.user + '/' + file.path
            fs.rmdirSync(path)
        } else {
            const path = config.get('filePath') + '/' + file.user + '/' + file.path + '/' + file.name
            fs.unlinkSync(path)
        }
    }
}

module.exports = new fileService()