import { Application } from "express";
import SampleController from "./controllers/sampleController";
// import MusicController from "./controllers/MusicController"

export default class Routes {

    // _musicController: MusicController = new MusicController();
    _sampleController: SampleController = new SampleController();

    constructor(app: Application) {
        // app.route("/api/music/play").post(this._musicController.play);
        // app.route("/api/music/stop").post(this._musicController.stop);
        app.route("/api/sample").get(this._sampleController.hello);
    }
}