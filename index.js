const express = require('express')
const session = require('express-session')
const cors = require('cors')
const sequelize = require('./database/database')
const personRoute = require('./routes/person.route')
const app = express()
const port = 3000

/***
 * Configuración variables de entorno.
 */
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/***
 * Comprobar conexión a la base de datos.
 */
    (async () => {
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    })();

app.use(session({ 
  secret: 'keyboardcat', 
  resave: false,
  saveUninitialized: true, 
  name: 'OtherCookie2',
  /* cookie: { secure: true }  */
}))


app.use('/api/v1/people',personRoute);


app.get('/', (req, res) => {
  //console.log({req});
  req.session.foo = 'foo'
  //console.log({req});
  //console.log(req.session)
  console.log(process.env)
  res.send('<h1>I´m Terminator!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})