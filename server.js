const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      title: 'D - ',
      message: 'Desenvolver aplicações de forma fácil'
    },
    {
      title: 'E - ',
      message: 'EJS usa Javascript'
    },
    {
      title: 'M - ',
      message: 'Manuseio com facilidade'
    },
    {
      title: 'A - ',
      message: 'Desenvolver aplicações de forma fácil'
    },
    {
      title: 'I - ',
      message: 'Desenvolver aplicações de forma fácil'
    },
    {
      title: 'S - ',
      message: 'Desenvolver aplicações de forma fácil'
    }
  ]
  const subtitle =
    'Uma linguagem de modelagem de forma fácil, que renderiza HTML em javascript'
  res.render('index', {
    qualitys: items,
    subtitle: subtitle
  })
})

app.get('/sobre', function (req, res) {
  res.render('about')
})

app.listen(8080)
console.log('Servidor Ligado!')
