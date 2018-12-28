// routes 
import router from './routes/route'

class App {
  public express = express()

  constructor () {
    this.mountRoutes()
  }

  private mountRoutes (): void {

    this.express.use('/', router)
  }
}

export default new App().express
