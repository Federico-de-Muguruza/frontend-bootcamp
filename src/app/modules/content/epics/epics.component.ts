import { Component, OnInit } from '@angular/core';
import { EpicService } from '../../api-rest/services/epic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../api-rest/services/project.service';
import { HeaderService } from '../../core/services/header.service';
import { Epic, Project } from '../../api-rest/api-model';
import { MockService } from '../../api-rest/services/mock.service';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.scss']
})
export class EpicsComponent implements OnInit {

  project!: Project;
  epics!: Epic[];
  projectId: string = this.route.snapshot.paramMap.get('projectId');
  loading: boolean = true;

  constructor(private epicService: EpicService,
              private route: ActivatedRoute, 
              private projectService: ProjectService,
              private router: Router,
              private headerSvc: HeaderService,
              private mockSvc: MockService) {}

  ngOnInit(): void {
    this.getProject();
  }

  setHeader() {
    this.headerSvc.setHeader(this.project.name, 'keyboard_arrow_left');
  }

  getProject() {
    this.projectService.getProject(Number(this.projectId))
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.project = response.data[0];
          this.getEpics();
          this.setHeader();
        } else {
           this.router.navigateByUrl('**');
        }
      },
      error => {
        this.project = this.mockSvc.getProjectMock();
        this.getEpics();
        this.setHeader();
      }
    );
  }

  getEpics() {
    this.epicService.getEpics(Number(this.projectId))
    .subscribe(
      response => {
        if (response.data.length > 0) 
          this.epics = response.data;
        this.loading = false;
      },
      error => {
        this.epics = this.mockSvc.getEpicsMock();
        this.loading = false;
      }
    );
  }
}