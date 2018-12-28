import app from './App';
import route from './routes/route'

const port = process.env.PORT || 3000

route.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})
