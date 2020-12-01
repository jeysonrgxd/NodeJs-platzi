const os = require("os")

// console.log("CPI info", os.cpus()) //imprime los cpu que tienen nuestra maquina para conocer la potencia de nuestra maquina

// console.log("IP address", os.networkInterfaces()['Wi-Fi'].map(i=>i.address)) // para ver las interfaces de red

// console.log("Free memory",os.freemem()) //cuanta memoria tiene nuestra maquina en bytes

// console.log("Type", os.type()) // tipo de sistema operativo tenemos

// console.log("SO version",os.release())  // version del sistma operativo

console.log("User info", os.userInfo()) // imprimir la informacion del usuario, que usuario somos y todo lo demas