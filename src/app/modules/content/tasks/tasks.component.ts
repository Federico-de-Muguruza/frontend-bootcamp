import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ConfirmDeleteComponent } from '../../generic/confirm-delete/confirm-delete.component';
import { HeaderService } from '../../core/services/header.service';
import { ProjectService } from '../../api-rest/services/project.service';
import { MockService } from '../../api-rest/services/mock.service';
import { Epic, Project, Story, Task } from '../../api-rest/api-model';
import { EpicService } from '../../api-rest/services/epic.service';
import { StoryService } from '../../api-rest/services/story.service';
import { TaskService } from '../../api-rest/services/task.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  project!: Project;
  epic!: Epic;
  story!: Story;
  tasks: Task[] = [];
  projectId: string = this.route.snapshot.paramMap.get('projectId');
  epicId: string = this.route.snapshot.paramMap.get('epicId');
  storyId: string = this.route.snapshot.paramMap.get('storyId');
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private headerSvc: HeaderService,
              private projectSvc: ProjectService,
              private mockSvc: MockService,
              private epicSvc: EpicService,
              private storySvc: StoryService,
              private router: Router,
              private taskSvc: TaskService) {}
              
  ngOnInit(): void {
    this.getProject();
    this.taskSvc.tasks$.subscribe(
      tasks => {
        this.tasks.push(...tasks);
      }
    );
  }

  setHeader() {
    this.headerSvc.setHeader(`${this.project.name} > ${this.epic.name} > ${this.story.name}`, 'keyboard_arrow_left');
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent,
      {
        data: {
          story: this.story,
        }
      })
  }

  openDeleteDialog(taskId: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent,
      {
        data: {
          taskId
        }
      });
  }

  getProject() {
    this.projectSvc.getProject(Number(this.projectId))
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.project = response.data[0];
          this.getEpic();
        } else {
          this.router.navigateByUrl('**');
        }
      },
      error => {
        this.project = this.mockSvc.getProjectMock();
        this.getEpic();
      }
    );
  }

  getEpic() {
    this.epicSvc.getEpic(Number(this.epicId))
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.epic = response.data[0];
          this.getStory();
        } else {
          this.router.navigateByUrl('**');
        }
      },
      error => {
        this.epic = this.mockSvc.getEpicMock();
        this.getStory();
      }
    );
  }

  getStory() {
    this.storySvc.getStory(Number(this.storyId))
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.story = response.data[0];
          this.getTasks();
          this.setHeader();
        } else {
          this.router.navigateByUrl('**');
        }
      },
      error => {
        this.story = this.mockSvc.getStoryMock();
        this.getTasks();
        this.setHeader();
      }
    );
  }
  
  getTasks() {
   this.taskSvc.getTasks(Number(this.storyId))
    .subscribe(
      response => {
        if (response.data.length > 0) 
          this.tasks = response.data;
        this.loading = false;
      },
      error => {
        this.tasks = this.mockSvc.getTasksMock();
        this.loading = false;
      }
    );
  }

}