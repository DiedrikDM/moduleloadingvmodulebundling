import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/skip';


@Injectable()
export class AuthService {
    private _user: firebase.User;
    public get user(): firebase.User {
        return this._user;
    }

    constructor(private auth: AngularFireAuth) { }
    login(name, password): Observable<any> {
        if (!this._user) {
            return Observable.fromPromise(
                <Promise<any>>this.auth.auth.signInWithEmailAndPassword(name, password))
                .do(user => this._user = user);
        }
        return Observable.create(() => this._user);
    }
    register(name, password): Observable<any> {
        return Observable.fromPromise(<Promise<any>>this.auth.auth.createUserWithEmailAndPassword(name, password))
            .do(user => this._user = user);
    }
    sendEmail() {
        return Observable.fromPromise(<Promise<any>>this._user.sendEmailVerification());
    }
    logout(): void {
        this.auth.auth.signOut();
        this._user = null;
    }
}
