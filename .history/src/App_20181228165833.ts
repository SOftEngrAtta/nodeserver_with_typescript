// routes 
import router from './routes/route'

class App {

  constructor () {
    this.mountRoutes()
  }

  private mountRoutes (): void {

    this.express.use('/', router)
  }
}

export default new App().express
