import { DoneLoadingService } from './../shared/doneLoading.service';
import { SearchbeerComponent } from './../beers/searchbeer/searchbeer.component';
import { BeercontainerComponent } from './../beers/beercontainer/beercontainer.component';
import { BeersService } from './../beers/beers.service';
import { MyBeersComponent } from './../beers/my-beers/my-beers.component';
import { AuthGuard } from 'shared/auth.guard';
import { AuthService } from './../shared/auth.service';
import { LoginComponent } from './../users/login/login.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './../overview/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, FirebaseAppProvider } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../secrets/secrets';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, MyBeersComponent, BeercontainerComponent, SearchbeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [BeersService, AuthService, AuthGuard, DoneLoadingService],
  bootstrap: [AppComponent],


})
export class AppModule { }
