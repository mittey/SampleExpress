import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Routes from './routes';


// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;


  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    // this.routes();

    let routes: Routes = new Routes(this.express);
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().express;