import { Component, OnInit } from '@angular/core';
import { Epic, Project, Story } from '../../api-rest/api-model';
import { EpicService } from '../../api-rest/services/epic.service';
import { MockService } from '../../api-rest/services/mock.service';
import { ProjectService } from '../../api-rest/services/project.service';
import { StoryService } from '../../api-rest/services/story.service';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {

  stories!: Story[];
  loading: boolean = true;

  constructor(private headerSvc: HeaderService,
              private storySvc: StoryService,
              private mockSvc: MockService) {
    this.setHeader();
  }

  ngOnInit(): void {
    this.getUserStories();
  }

  setHeader() {
    this.headerSvc.setHeader('My Stories', 'menu');
  }

  getUserStories() {
    this.storySvc.getUserStories()
    .subscribe(
      response => {
        if (response.data.length > 0) 
          this.stories = response.data;
        this.loading = false;
      },
      error => {
        this.stories = this.mockSvc.getUserStoriesMock();
        this.loading = false;
      }
    );
  }
}
