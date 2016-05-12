import fs from 'fs'
import path from 'path'
import { markdown } from 'markdown'

async function getById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, './wifi.md'), (error, data) => {
      if (error) {
        return reject(error)
      }
      return resolve({ title: 'WIFI连接指南-黄龙国际中心', content: markdown.toHTML(data.toString()) })
    })
  })
}

export default { getById }
