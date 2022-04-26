import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  title = new BehaviorSubject('Home');
  icon = new BehaviorSubject('');

  setHeader(title: string, icon: string) {
    this.title.next(title);
    this.icon.next(icon);
  }
}
