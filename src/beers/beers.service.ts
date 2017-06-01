import { BreweryBeer } from './brewerymodel';
import { Beer } from './beer';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeersService {
    constructor(private db: AngularFireDatabase, private auth: AuthService, private http: Http) {

    }
    getBeers(): Observable<Beer[]> {
        const u = this.auth.user;
        return this.db.list('beers/' + u.uid ).map(value => <Beer[]>value);
    }
    addBeer(beer: Beer) : void {
        const u = this.auth.user;
        this.db.list('beers/' + u.uid ).push(beer);
    }
    searchBeer(beer: string): Observable<BreweryBeer[]> {
        const url = 'https://beerdb.azurewebsites.net/api/beer';
        return this.http.get(url + '?name=' + beer)
            .map(
                resp => resp.json() as BreweryBeer[]
                );

    }
}