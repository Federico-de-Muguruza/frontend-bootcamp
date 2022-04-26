import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Epic, Project, Story, Task } from '../api-model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private tasks: Task[] = [];
	private tasks$ = new Subject<Task[]>();

  constructor() {}

  getProjectsMock(): Project[] {
    const projects: Project[] = [
      {
        "members": [],
        "name": "Project 1",
        "description": "This is my first project",
        "icon": null,
        "id": 1
      },
      {
        "members": [],
        "name": "Project 2",
        "description": "This is my second project",
        "icon": null,
        "id": 2
      }
    ]
    return projects;
  }

  getProjectMock() {
    const project = {
      "members": [],
      "name": "Project 1",
      "description": "This is my first project",
      "icon": null,
      "id": 1
    }
    return project;
  }

  getEpicsMock() {
    const epics: Epic[] = [
      {
        "id": 3,
        "project": "62014bdae564ba4f507afcd1",
        "name": "Epic 1",
        "description": "This is the first Epic for Project 1",
        "icon": "🥁"
      },
      {
        "id": 3,
        "project": "62014bdae564ba4f507afcd1",
        "name": "Epic 2",
        "description": "This is the second Epic for Project 1",
        "icon": "🥁"
      }
    ]
    return epics;
  }

  getEpicMock() {
    const epic: Epic = 
      {
        "id": 3,
        "project": "62014bdae564ba4f507afcd1",
        "name": "Epic 1",
        "description": "This is the first Epic for Project 1",
        "icon": "🥁"
      }
    return epic;
  }

  getStoriesMock() {
     const stories: Story[] = [
       {
        "assignedTo": [],
        "points": 5,
        "status": "todo",
        "id": 2,
        "name": "US #1",
        "description": "Lorem ipsum",
        "epic": '',
        "created": "2022-02-07T21:44:26.346Z",
      },
       {
        "assignedTo": [],
        "points": 5,
        "status": "todo",
        "id": 2,
        "name": "US #2",
        "description": "Lorem ipsum",
        "epic": '',
        "created": "2022-02-07T21:44:26.346Z",
      },
    ]
    return stories;
  }

  getUserStoriesMock() {
    const stories: Story[] = [
       {
        "assignedTo": [],
        "points": 5,
        "status": "todo",
        "id": 2,
        "name": "US #1",
        "description": "Lorem ipsum",
        "epic": '',
        "created": "2022-02-07T21:44:26.346Z",
      },
       {
        "assignedTo": [],
        "points": 5,
        "status": "todo",
        "id": 2,
        "name": "US #2",
        "description": "Lorem ipsum",
        "epic": '',
        "created": "2022-02-07T21:44:26.346Z",
      },
    ]
    return stories;
  }

  getStoryMock() {
    const story: Story = {
      "assignedTo": [],
      "points": 5,
      "status": "todo",
      "id": 2,
      "name": "US #10",
      "description": "Lorem ipsum",
      "epic": '',
      "created": "2022-02-07T21:44:26.346Z",
    }
    return story;
  }

  getTasksMock() {
    const tasks: Task[] = [
      {
        "done": false,
        "id": 1000,
        "name": "Task 1",
        "description": "This is task #1",
        "story": "620192ba5d34515ecc3adafa",
        "created": "2022-04-10T21:59:24.063Z",
        "due": "2022-02-07T21:44:50.568Z",
      },
       {
        "done": false,
        "id": 2000,
        "name": "Task 2",
        "description": "This is task #2",
        "story": "620192ba5d34515ecc3adafa",
        "created": "2022-04-10T21:59:24.063Z",
        "due": "2022-02-07T21:44:50.568Z",
      },
       {
        "done": false,
        "id": 3000,
        "name": "Task 3",
        "description": "This is task #3",
        "story": "620192ba5d34515ecc3adafa",
        "created": "2022-04-10T21:59:24.063Z",
        "due": "2022-02-07T21:44:50.568Z",
      },
    ]
    return tasks;
  }
}
