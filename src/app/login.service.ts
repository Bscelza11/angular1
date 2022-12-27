import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private nameUser$ = new Subject<string>();

constructor(){ }

sendName(name: string) {
  this.nameUser$.next(name)
}

getNameUser(): Observable<string> {
  return this.nameUser$.asObservable()
}


}
