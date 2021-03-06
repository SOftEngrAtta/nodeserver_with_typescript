import * as express from 'express'

// routes 
import  from './routes/route'

class App {
  public express = express()

  constructor () {
    this.mountRoutes()
  }

  private mountRoutes (): void {

    const router = express.Router();
    
    router.get('/', (req, res) => {
      res.json({   message: 'Hello World!' })
    })
    this.express.use('/', router)
  }
}

export default new App().express
