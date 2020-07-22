//puppeteer trabaja con funciones asyncrinas
const puppeteer = require("puppeteer");

// funcion asyncrona auto ejecutada
(async ()=>{
   console.log("Lanzamos navegador")
   // const browser = await puppeteer.launch()

   // lanzate peor no te lanzes sin ver
   const browser = await puppeteer.launch({headless:false})

   //  abrimos una pagina
   const page = await browser.newPage();

   // en la pagina creado desidimos adonde queremos ir
   await page.goto("https://es.wikipedia.org/wiki/Node.js")

   // ejecuta un script lo que nosotros queramos en la pagina que creamos atravez de cromiun
   var titulo1 = await page.evaluate(()=>{
      // este codigo recordar que se ejecuta en la web que levantamos y por ende el console.log aqui dentro lo veras abriendo la consola del navegador de la pagina que creamos
      const h1 = document.querySelector("h1")
      console.log(h1.textContent);

      return h1.textContent
   })

   console.log("titulo 1", titulo1)

   console.log("Cerramos navegador..");
   // con esto podemos cerra el navegador de romiun que nos abre con l apgina ni bien carga podemos comentarlo para que se quede abierto el chromiun
   // browser.close()
   console.log("Cerramos navegador..");
})();