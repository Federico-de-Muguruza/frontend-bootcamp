import { Component, OnInit } from '@angular/core';
import { User } from '../../api-rest/api-model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.scss']
})
export class SidenavUserComponent implements OnInit {

  name: string;

  constructor(private localStorageSvc: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageSvc.key
    .subscribe(
      (response: any) => {
        if (response) {
          this.name = JSON.parse(response).name.first;
        };
      }
    )
  }
}
