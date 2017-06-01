import { BeersService } from './../beers.service';
import { BreweryBeer } from './../brewerymodel';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { Beer } from '../beer';

@Component({
  selector: 'app-beercontainer',
  templateUrl: './beercontainer.component.html',
  styleUrls: ['./beercontainer.component.css']
})
export class BeercontainerComponent implements OnInit {

  beers$: Observable<Beer[]>;

  constructor(private beersService: BeersService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  addBeer(beer: BreweryBeer) {
    let url = "https://beerdb.azurewebsites.net/api/beer" + beer.id;
    let image = '/assets/beerunknown.jpg';
    if(beer.labels && beer.labels.medium){
      image = beer.labels.medium;
    }
    let mappedBeer = new Beer(beer.id, beer.name, url, image);
    this.beersService.addBeer(mappedBeer);

  }

  ngOnInit() {
    this.beers$ = this.beersService.getBeers();
  }
}
