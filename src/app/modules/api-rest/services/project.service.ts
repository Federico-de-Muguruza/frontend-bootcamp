import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../api-model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

	url: string = 'https://lamansys-tasks-fake-api.herokuapp.com/api/projects';
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

	getProjects(): Observable<any> {
		// console.log(this.user);
		const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
		return this.http.get(this.url, {headers});
	}

	getProject(id: number): Observable<any> {
		const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
		return this.http.get(`${this.url}/${id}`, {'headers': headers});
	}
}
