require('dotenv').config();
const mongoose = require("mongoose");
const Subject = require("../models/Subject");

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let subjects = [
  {
    title: 'Física',
    description: `Ciencia que estudia las propiedades de la materia y de la energía
    y establece las leyes que explican los fenómenos naturales.
    Clases de física de todos los niveles, desde 2º ESO hasta preparación para EVAU`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329894/Subjects/fisica.svg'
  },
  {
    title: 'Geografía',
    description: `Ciencia que estudia y describe la superficie de la Tierra en su aspecto físico,
    actual y natural, o como lugar habitado por la humanidad.
    Se imparten clases de geografía tanto físicas como políticas, para todos los niveles. `,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/geografia.svg'
  },
  {
    title: 'Literatura',
    description: `Estudio de autores, generos literarios ,lírica y prosa. clases enfocadas a distintos niveles, incluida preparación para EVAU.`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/literatura.svg'
  },
  {
    title: 'Guitarra',
    description: `Clases de guitarra por niveles. Desde principiante hasta avanzado`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/guitarra.svg',
  },
  {
    title: 'Historia',  
    description:`Estudio de acotencimientos pasados. Se imparten clases tanto de historia de España como de historia mundial, clases por niveles, incluida preparación para EVAU.`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543492295/Subjects/library.svg`
  },
  {
    title: 'Ajedrez',
    description:`Clases de ajedrez para todos los niveles, conviertete en un autentico Capablanca!`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543492584/Subjects/chess.svg`
  },
    
  {
    title:`Química`,
    description:`Ciencia que estudia la composición y las propiedades de la materia  y de las transformaciones que esta experimentasin que se alteren los elementos que la forman. Clases enfocadas a formulación orgánica e inorgánica`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/quimica.svg`
  },
    
  {
    title: `Economía`,
    description:`Estudio de distintos modelos económicos
     y aplicacion de forumlas finacieras. Clases para todos los niveles `,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/economia.svg`
  },
  {
    title: `Inglés`,
    description:`Clases de vocabulario, verbos regurales e irregulares, redacción y conversacion `,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543338204/Subjects/language.svg`
  },{
    title: `Lengua`,
    description:`Clases enfocadas a todos los cursos de la ESO y Bachillerato. Analisis morfológico y sintáctico.`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/lengua.svg`
  },
  {
    title: `Dibujo técnico`,
    description:`Práctica y relosución de ejercicios, especialmente preparacion para EVAU`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329894/Subjects/dibujoTecnico.svg`
  },

  {
    title: `Biología`,
    description:`Ciencia que estudia la estructura de los seres vivos y de sus procesos vitales. Clases enfocadas para todos los cursos y para la EVAU`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543507748/Subjects/dna-structure.svg`

  },
    
];

Subject.create(subjects, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${subjects.length} subjects`)
  mongoose.connection.close()
});
