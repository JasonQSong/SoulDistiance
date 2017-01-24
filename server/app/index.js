import express from 'express'
// import Datastore from '@google-cloud/datastore'
import config from '../config'

console.log(config)

console.log(config.GCLOUD_PROJECT)
// const ds = Datastore({
//   projectId: config.get('GCLOUD_PROJECT')
// });


const app = express()

app.get('/', (req, res) => {
  console.info(req.method + ' ' + req.originalUrl)
  res.status(200).send('Soul Distance Server')
})
app.get('/UTC', (req, res) => {
  console.info(`${req.method} ${req.originalUrl}`)
  res.status(200).send(new Date().getTime())
})

app.post('/location/:deviceId', (req, res) => {
  console.info(`${req.method} ${req.originalUrl}`)
  console.info(`latitude:${req.body.latitude} longitude:${req.body.longitude}`)
  res.status(200).end()
})

app.get('/distance', (req, res) => {
  console.info(`${req.method} ${req.originalUrl}`)
  console.info(`local:${req.query.local} remote:${req.query.remote}`)
  res.status(200).json({
    localUpdateUTC: 0,
    remoteUpdateUTC: 0,
    distance: 'Todo'
  })
})

app.listen(80, () => {
  console.info('Soul Distance Server listening on port 80!')
})