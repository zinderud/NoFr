import { Middleware } from '../../core/core';

export class ConsoleLogger implements Middleware {
    constructor() { }
    use(req, res, next) {
        console.log(" ilk  middlewares. ");
        next();
    }
}