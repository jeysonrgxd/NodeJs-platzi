// importamos la libreia para trabajar con imagenes
const sharp =  require('sharp')

sharp('./JavaScript-logo.png')
      .resize(80)
      .grayscale()
      .toFile('javascript-logox80-gray.png')