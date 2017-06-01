import { BreweryBeer } from './../brewerymodel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import { BeersService } from './../beers.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbeer',
  templateUrl: './searchbeer.component.html',
  styleUrls: ['./searchbeer.component.css']
})
export class SearchbeerComponent implements OnInit {

  beers$: Observable<BreweryBeer[]>;
  visible = false;

  @Output()
  onBeerAdded = new EventEmitter<BreweryBeer>();

  constructor(private beersservice: BeersService) { }

  ngOnInit() {
  }

  search(beer: string) {
    this.beers$ = this.beersservice.searchBeer(beer).merge(this.onBeerAdded.map(() => null));
    this.visible = true;
  }

  addBeer(beer: BreweryBeer) {
    this.onBeerAdded.emit(beer);
    this.visible = false;
  }

}