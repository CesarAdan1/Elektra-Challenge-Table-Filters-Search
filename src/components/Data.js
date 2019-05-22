const data = [
    {
        "key": 1,
        "nombre": "Super Mario Maker 2",
        "descripcion": "Video Juego para consola Nintendo",
        "onStack": true
    },
    {
        "key": 2,
        "nombre": "Fire TV Stick" ,
        "descripcion": "Contorl Remoto para TV Básico",
        "onStack": true
    },
    {
        "key": 3,
        "nombre": "Echo Dot(3ª generación)",
        "descripcion": "Alexa, tela de color antracita",
        "onStack": false
    },
    {
        "key": 4,
        "nombre": "Samsung Galaxy Tab A",
        "descripcion": "Tablet de 10.1 pg FullHD (WiFi, Procesador Octa-core, 2 GB",
        "onStack": true
    },
    {
        "key": 5,
        "nombre": "Xiaomi Mi A2",
        "descripcion": "Smartphone DE 5.9\"(Qualcomm Snapdragon 660 a 2.2 GHz",
        "onStack": true
    },
    {
        "key": 6,
        "nombre": "Xiaomi Mi 8 Lite",
        "descripcion": "Smartphone(15.9 cm), 2280 x 1080 Pixeles",
        "onStack": true
    },
    {
        "key": 7,
        "nombre": "Fujifilm iNSTAX mINI 9",
        "descripcion": "Cámara instantanea, solo cámara, Rosa",
        "onStack": true
    },
    {
        "key": 8,
        "nombre": "Redmi Note 7",
        "descripcion": "Black Smartphone",
        "onStack": true
    },
    {
        "key": 9,
        "nombre": "Aerolite ABS",
        "descripcion": "Maleta Equipaje de Mano Cabina rigida con 4 ruedas",
        "onStack": true
    },
    {
        "key": 10,
        "nombre": "Cartera Pequeña para hombre",
        "descripcion": "Billetera de piel con Tarjetero RFID",
        "onStack": false
    },
    {
        "key": 11,
        "nombre": "Tranjis Games TRG-01 VIR",
        "descripcion": "Juego de Cartas",
        "onStack": true
    },
    {
        "key": 12,
        "nombre": "Funko Pop!",
        "descripcion": "Marvel: Avengers Infinity War Figura de Vinilo",
        "onStack": true
    },
    {
        "key": 13,
        "nombre": "JACK & JONES",
        "descripcion": "Cre Neck Noos Camiseta para Hombre",
        "onStack": true
    },
    {
        "key": 14,
        "nombre": "DELIMIRA",
        "descripcion": "Pantalones Moldeadores Reductores Adelgazantes",
        "onStack": true
    },
    {
        "key": 15,
        "nombre": "Orbegozo MI 2015",
        "descripcion": "Microondas sin grill, 700 W",
        "onStack": true
    },
    {
        "key": 16,
        "nombre": "Princess 162819 Stone Grill Party",
        "descripcion": "Raclette y parrilla para 4 personas",
        "onStack": false
    },
    {
        "key": 17,
        "nombre": "Batidora amasadora con movimiento orbital",
        "descripcion": "Bol de acero de 3 litros, 5 funciones y 6 velocidads",
        "onStack": true
    },
    {
        "key": 18,
        "nombre": "HOTPOINT-ARISTON E4D AAA X",
        "descripcion": "Frigorífico Combi Hotpoint E4Daaxc",
        "onStack": false
    },
    {
        "key": 19,
        "nombre": "Bosch Serie 2",
        "descripcion": "Blanco nevera y congelador - Frigorifico (279 L)",
        "onStack": false
    },
    {
        "key": 20,
        "nombre": "Bosch TDA5028010 Sensixxx'x",
        "descripcion": "Plancha de vapor, 2800 W, 180g",
        "onStack": true
    },
    {
        "key": 21,
        "nombre": "Td Systems K40DLM7F",
        "descripcion": "Televisor Led FullHD, Resolucion 1920 x 1080",
        "onStack": true
    },
    {
        "key": 22,
        "nombre": "LG 32LK6100PLB",
        "descripcion": "Smart TV de 32pg( LED, Full HD, Inteligencia Artificial",
        "onStack": true
    },
    {
        "key": 23,
        "nombre": "Samsung 50NU7405",
        "descripcion": "Smart TV de 50pg 4K UHD HDR, Color Negro",
        "onStack": true
    },
    {
        "key": 24,
        "nombre": "HP 255 G6",
        "descripcion": "Laptop Ordenador portátil 15.6pg HD, Windows 10",
        "onStack": false
    },
    {
        "key": 25,
        "nombre": "Microsoft Surface Laptop",
        "descripcion": "Laptop ultrafino táctil, (Intel Core i5, 8GB RAM, 256GB SSD)",
        "onStack": true
    },
    {
        "key": 26,
        "nombre": "MOSISO",
        "descripcion": "Funda Protectora Compatible 11-11.6 pulgadas Macbook Air, Ultrabook Netbook",
        "onStack": true
    },
    {
        "key": 27,
        "nombre": "BIOZOYG Set",
        "descripcion": "Vajilla Infantil de bambú sin bpa 5 Piezas",
        "onStack": true
    },
    {
        "key": 28,
        "nombre": "Mobelcenter",
        "descripcion": "Mueble de Comedor Moderno, Color Blanco Brillo",
        "onStack": true
    },
    {
        "key": 29,
        "nombre": "SoBuy",
        "descripcion": "Mueble Columna de baño, Armario para baño",
        "onStack": true
    },
    {
        "key": 30,
        "nombre": "TecTake",
        "descripcion": "Banco de Jardín",
        "onStack": true
    },
    {
        "key": 31,
        "nombre": "SONGMICS GCB23BK",
        "descripcion": "Tumbona, Mecedora con Almohada y Bolsillo Lateral",
        "onStack": false
    },
    {
        "key": 32,
        "nombre": "TOOGOO",
        "descripcion": "Regalos para las mujeres Artesanias de Metal de Pavo Real Vintage",
        "onStack": false
    },
    {
        "key": 33,
        "nombre": "Keter",
        "descripcion": "Mesa nevera para jardín Pacific Rattan Cool Bar",
        "onStack": false
    },
    {
        "key": 34,
        "nombre": "SEBSON",
        "descripcion": "Led bajo mueble 120cm, tira de iluminación, Calido Blanca, 20W",
        "onStack": true
    },
    {
        "key": 35,
        "nombre": "Wonderlamp W-E000045",
        "descripcion": "Juego 2 Downlight LED Extranplano Redondo, Iluminación 18W",
        "onStack": true
    }
  ]

export default data;