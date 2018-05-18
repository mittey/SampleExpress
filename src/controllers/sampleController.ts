import { Request, Response, NextFunction } from "express";

export default class SampleController {
    constructor() {

    }

    public hello(req: Request, res: Response, next: NextFunction): void {
        res.json({ response: "hello world UPDATED 123 !!!!!!" });
    }
}