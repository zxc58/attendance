const fs = require('fs')
const path = require('path')
const originalFile = require('./2023.json')
// console.log(c.length) // 確定是不是正確365天
const holidays = originalFile.filter(e => e.isHoliday)
const workingDays = originalFile.filter(e => !e.isHoliday)
console.log(`holidays: ${holidays.length}\nworking days: ${workingDays.length}`)
// fs.writeFileSync(path.join(__dirname, 'holidays.json'), JSON.stringify(holidays))
// fs.writeFileSync(path.join(__dirname, 'working-days.json'), JSON.stringify(workingDays))
const h = require('./holidays.json')
const w = require('./working-days.json')
console.log(`h: ${h.length},w: ${w.length}`)