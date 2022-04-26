import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	url: string = 'https://lamansys-tasks-fake-api.herokuapp.com/api';

	constructor(
		private readonly http: HttpClient,
		public router: Router,
		public localStorageSvc: LocalStorageService
	) { }

	isLogged() {
		// if (this.user.value) return true;
		// return false;
		let isLogged = false;
		this.localStorageSvc.getItem('user')
		.subscribe(
			response => {
				if (response) isLogged = true;	
			},
		)
		return isLogged;
	}

	login(username: string, password: string): Observable<any> {
		const headers = { 'content-type': 'application/json'}  
		const body = JSON.stringify({username, password});
		return this.http.post(`${this.url}/login`, body, {'headers': headers});
	}
}