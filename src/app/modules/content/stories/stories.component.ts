import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';
import { ProjectService } from '../../api-rest/services/project.service';
import { MockService } from '../../api-rest/services/mock.service';
import { EpicService } from '../../api-rest/services/epic.service';
import { Epic, Project, Story } from '../../api-rest/api-model';
import { StoryService } from '../../api-rest/services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  project!: Project; 
  epic!: Epic;
  stories!: Story[];
  projectId: string = this.route.snapshot.paramMap.get('projectId');
  epicId: string = this.route.snapshot.paramMap.get('epicId');
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private headerSvc: HeaderService,
              private projectSvc: ProjectService,
              private router: Router,
              private mockSvc: MockService,
              private epicSvc: EpicService,
              private storySvc: StoryService) {}
              
  ngOnInit(): void {
    this.getProject();
  }

  setHeader() {
    this.headerSvc.setHeader(`${this.project.name} > ${this.epic.name}`, 'keyboard_arrow_left');
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
          this.setHeader();
          this.getStories();
        } else {
           this.router.navigateByUrl('**');
        }
      },
      error => {
        this.epic = this.mockSvc.getEpicMock();
        this.setHeader();
        this.getStories();
      }
    );
  }

  getStories() {
    this.storySvc.getStories(Number(this.epicId))
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.stories = response.data;
        }
        this.loading = false;
      },
      error => {
        this.stories = this.mockSvc.getStoriesMock();
        this.loading = false;
      }
    );
  }
}