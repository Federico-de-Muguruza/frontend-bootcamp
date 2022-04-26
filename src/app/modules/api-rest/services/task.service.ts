import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Story, User } from '../api-model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  tasks$: any = new BehaviorSubject([]);
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

  addTask(story: Story, name: string, description: string): Observable<any> {
    const task: Task = {
      name,
      description,
      story,
    }
    const headers = { 'content-type': 'application/json', 'auth': this.user.token}   
    const body = JSON.stringify(task);
    return this.http.post(`${this.url}/tasks`, body, {'headers': headers});
  }
  
  setTasks(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  deleteTask(data): Observable<any> {
    const headers = { 'content-type': 'application/json', 'auth': this.user.token}   
    return this.http.delete(`${this.url}/tasks/${data.taskId}`, {'headers': headers});
  }

  getTasks(storyId: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'auth': this.user.token} 
    return this.http.get(`${this.url}/stories/${storyId}/tasks`, {'headers': headers});
  }
}

interface Task {
  name: string,
  description: string,
  story: Story
}