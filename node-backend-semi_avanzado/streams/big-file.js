const fs = require('fs')
const file = fs.createWriteStream('./big.txt')

for(let i = 0; i<1000; i++){
   file.write("HOla como estas todo bien")
}

file.end()
