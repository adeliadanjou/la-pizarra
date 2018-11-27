const mongoose = require("mongoose");
const Subject = require("../models/Subject");

mongoose
  .connect('mongodb://localhost/la-pizarra', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let subjects = [
  {
    title: 'Física',
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
       scelerisque praesent purus fringilla facilisis dictumst vehicula ac consequat,
        suspendisse odio mattis pretium quam in phasellus. `,
    imgPath: '/images/fisica.svg'
  },
  {
    title: 'Geografía',
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
         scelerisque praesent purus fringilla facilisis dictumst vehicula ac consequat,
          suspendisse odio mattis pretium quam in phasellus. `,
    imgPath: '/images/geografia.svg'
  },
  {
    title: 'Literatura',
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
           scelerisque praesent purus fringilla facilisis dictumst vehicula ac consequat,
            suspendisse odio mattis pretium quam in phasellus. `,
    imgPath: '/images/literatura.svg'
  },
  {
    title: 'Guitarra',
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
             scelerisque praesent purus fringilla facilisis dictumst vehicula ac consequat,
              suspendisse odio mattis pretium quam in phasellus. `,
    imgPath: '/images/gitarra.svg'
  },

];

Subject.create(subjects, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${subjects.length} subjects`)
  mongoose.connection.close()
});
