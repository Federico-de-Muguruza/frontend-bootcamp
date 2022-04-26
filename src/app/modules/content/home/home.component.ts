import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../api-rest/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(private localStorageSvc: LocalStorageService) {}

   ngOnInit(): void {
    this.localStorageSvc.key
		.subscribe(
			(response: any) => {
				if (response) {
					this.name = JSON.parse(response).name.first;
				}
			}
		)
  }
}
