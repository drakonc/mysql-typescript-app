import express, { Application } from "express";
import morgan from "morgan";

//Routers
import IndexRauters from "./routers/index.routers";
import PostRouters from "./routers/post.routers";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
    this.routers();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middleware() {
    this.app.use(morgan("dev"));
    //this.app.use(express.urlencoded({extended: false})); Para Recibir datos de Formulario
    this.app.use(express.json());
  }

  routers() {
    this.app.use(IndexRauters);
    this.app.use("/posts", PostRouters);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on Port", this.app.get("port"));
  }
}
