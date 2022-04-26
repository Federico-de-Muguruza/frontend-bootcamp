import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { User } from '../api-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://lamansys-tasks-fake-api.herokuapp.com/api/users';
  user: User;

  constructor(private readonly http: HttpClient,
              private localStorageSvc: LocalStorageService) {
    // this.localStorageSvc.getItem('user').subscribe((u: User) => this.user = u);
    this.localStorageSvc.key
		.subscribe(
			(response: any) => {
				if (response) {
					this.user = JSON.parse(response);
				}
			}
		)
  }

  getUser(_id: string): Observable<any> {
		const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
		return this.http.get(`${this.url}/${_id}`, {'headers': headers});
  }

}
