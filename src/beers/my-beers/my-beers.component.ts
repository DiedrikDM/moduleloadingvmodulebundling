import { Beer } from '../beer';
import { BeersService } from '../beers.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.component.html',
  styleUrls: ['./my-beers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyBeersComponent {

  @Input()
  public beers: Beer[];
}
