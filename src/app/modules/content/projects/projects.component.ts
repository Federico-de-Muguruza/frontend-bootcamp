import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../api-rest/services/project.service';
import { HeaderService } from '../../core/services/header.service';
import { MockService } from '../../api-rest/services/mock.service';
import { Router } from '@angular/router';
import { Project } from '../../api-rest/api-model';
import { UserService } from '../../api-rest/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects!: Project[];
  loading: boolean = true;
  members!: string[];

  constructor(private projectService: ProjectService,
              private headerSvc: HeaderService,
              private router: Router,
              private userSvc: UserService,
              private mockSvc: MockService) {
    this.setHeader();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  setHeader() {
    // Necesario porque en home.component se utiliza el project.component
    if (this.router.url != '/my-projects')
      this.headerSvc.setHeader('Home', 'menu');
    else
      this.headerSvc.setHeader('My Projects', 'menu');
  }

  getUser(data) {
    this.userSvc.getUser(data._id)
      .subscribe(
        response => {
          if (response) {
            data.project.members +=  response.username + ', ';
          }
          this.loading = false;
        },
        error => {
          console.log('La API no está funcionando.');
        }
      )
  }

  getProjects() {
    this.projectService.getProjects()
    .subscribe(
      response => {
        if (response.data.length > 0) {
          this.projects = response.data;
          this.projects.forEach(project => {
            let projectsMembers: string[] = [...project.members];
            project.members.splice(0, project.members.length);
            projectsMembers.forEach(_id => {
              const data = {
                project,
                _id
              }
              this.getUser(data);
            })
          })
        }
        this.loading = false;
      },
      error => {
        this.projects = this.mockSvc.getProjectsMock();
        this.loading = false;
      }
    );
  }

}