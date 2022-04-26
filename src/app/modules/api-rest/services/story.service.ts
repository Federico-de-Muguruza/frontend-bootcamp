import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { User } from '../api-model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

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

  getStories(epicId: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'auth': this.user.token}   
    return this.http.get(`${this.url}/epics/${epicId}/stories`, {'headers': headers});
  }

  getUserStories(): Observable<any> {
    const headers = { 'content-type': 'application/json', 'auth': this.user.token}  
    return this.http.get(`${this.url}/stories`, {'headers': headers});
  }

  getStory(storyId: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'auth': this.user.token}    
    return this.http.get(`${this.url}/stories/${storyId}`, {'headers': headers});
  }

}
