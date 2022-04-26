import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService } from './modules/core/services/header.service';
import { LocalStorageService } from './modules/core/services/local-storage.service';
import { User } from './modules/api-rest/api-model';
import { Router } from '@angular/router';

const DEFAULT_LANG = 'es-AR';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title: string = '';
	icon: string = '';
	user: User;

	constructor(private _location: Location,
				private localStorageSvc: LocalStorageService,
				private router: Router,
				private headerSvc: HeaderService) {}

	ngOnInit() {
		this.headerSvc.title.subscribe(newTitle => this.title = newTitle);
		this.headerSvc.icon.subscribe(newIcon => this.icon = newIcon);
		this.localStorageSvc.key
		.subscribe(
			(response: any) => {
				if (response) {
					this.user = JSON.parse(response);
				}
			}
		)
	}

	exit(): void {
		this.localStorageSvc.removeItem('user');
		this.router.navigateByUrl('/login');
		this.user = undefined;
	}

	back(): void {
		this._location.back();
	}
}