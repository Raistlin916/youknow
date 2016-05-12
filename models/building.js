import fs from 'fs'
import path from 'path'

async function fetch() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, './buildings.json'), (error, data) => {
      if (error) {
        return reject(error)
      }
      return resolve(JSON.parse(data.toString()))
    })
  })
}

export default { fetch }
