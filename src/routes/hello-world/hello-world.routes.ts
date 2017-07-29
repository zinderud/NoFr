import { Delete, Get, Inject, Injectable, Post, Route } from '../../../core/core';
import { DatabaseProvider } from '../../providers/database.provider';

@Route({
    path: '/'
})
export class HelloWorldRoute implements Get {
    constructor(
        public db: DatabaseProvider
    ) { }

    get(req, res) {
        res.status(200).json({ success: true, yourmom: false });
    }
}