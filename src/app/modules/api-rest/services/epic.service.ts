import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../api-model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  	url: string = 'https://lamansys-tasks-fake-api.herokuapp.com/api';
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

	getEpics(projectId: number): Observable<any> {
		const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
		return this.http.get(`${this.url}/projects/${projectId}/epics`, {'headers': headers});
	}

	getEpic(epicId: number): Observable<any> {
		const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
		return this.http.get(`${this.url}/epics/${epicId}`, {'headers': headers});
	}
}
