import { Injectable } from "@angular/core";

@Injectable()

export class CommonStorageService {
    root: string = 'http://localhost:5555/';
    api: string = 'http://localhost:5555/api/';
    app: string = 'http://localhost:4200';
    socket: any = null;
    
    constructor(){}
}