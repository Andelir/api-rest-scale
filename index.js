const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000


app.use(session({ 
  secret: 'keyboardcat', 
  resave: false, 
  saveUninitialized: true, 
  name: 'OtherCookie2',
  /* cookie: { secure: true }  */
})) 

app.get('/', (req, res) => {
  console.log({req});
  req.session.foo = 'foo'
  console.log({req});
  console.log(req.session)
  res.send('<h1>I´m Terminator!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})