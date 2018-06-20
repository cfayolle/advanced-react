import express from 'express'
import config from './config'
import serverRender from './serverRender'


const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  const initialContent = serverRender()
  res.render('index.ejs', { initialContent })
})

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`)
})
