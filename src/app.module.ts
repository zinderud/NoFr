import { Module } from '../core/core';
 import { ConsoleLogger} from './middlewares/console-logger.middleware';
import { DatabaseProvider } from './providers/database.provider';
import { HelloWorldRoute } from './routes/hello-world/hello-world.routes';

@Module({
/*     imports: [HelloWorldModule], */
    routes: [HelloWorldRoute],
    providers: [DatabaseProvider],
    config: {
        port: process.env.PORT || 8080,
        path: '/hi'
    }
})
export class AppModule { }