const exp = require('express');
const bp = require('body-parser');
const app = exp();

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json())

// app.set('port',9000);
// console.log(__dirname);
app.use('/',exp.static(__dirname+'/public'));

app.route('/login')
  .get( (req,res)=> {
    console.log(req.query);
    const user = req.query.u;
    console.log(user);
    const pass = req.query.p;
    const data = {
      message: 'Welcome',
      user
    }
    console.log(data);
    res.send(data)
  })
  .post( (req,res) => {
    console.log(req.body);
    let user = req.body.username;
    let pass = req.body.password;
    const data = {
      message: 'Welcome',
      user
    }
    console.log('POST',data);
    res.send(data)
  })

app.get('/login',(req,res)=>{
  console.log(req.params);
  res.send('bla bla')
})

app.listen(3000);
// app.listen(app.get('port'), ()=>{
  // console.log('listen on port 9000');
// })