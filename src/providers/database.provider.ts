import { Injectable } from '../../core/core';

@Injectable()
export class DatabaseProvider {
    constructor() { }
    connect() {
        return true;
    }
}