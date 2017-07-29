import { Injectable } from './core';
import * as _ from 'lodash';
import * as request from 'request';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class httpModule {

    constructor() { }

    get(url: string, options: request.Options): Observable<request.RequestResponse> {
        return Observable.create((observer: Observer<request.RequestResponse>) => {
            request.get(url, options, (err, response: request.RequestResponse, body) => {
                observer.next(response);
                observer.complete();
            });
        });
    }
}