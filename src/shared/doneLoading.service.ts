import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DoneLoadingService {

    constructor(private http: Http) { }

    done() {
        // this.http.get('/stop').subscribe();
    }
}
