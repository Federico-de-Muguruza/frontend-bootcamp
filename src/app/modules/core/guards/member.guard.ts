import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../../api-rest/services/project.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {

  _id: string;

  constructor(private router: Router,
              private localStorageSvc: LocalStorageService,
              private projectSvc: ProjectService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const projectId = route.paramMap.get('projectId');
    this.getUser();
    return new Promise((resolve) => {
      this.projectSvc.getProject(Number(projectId))
      .subscribe(
        response => {
          if (response && response.data[0].members.includes(this._id)) {
            resolve(true);
          } else {
            this.router.navigateByUrl('**');
            resolve(false);
          }
        }
      )
    })
  }

  getUser(): void {
    this.localStorageSvc.getItem('user')
    .subscribe(
      (response: any) => {
        if (response)
          this._id = response._id;
      }
    )
  }
  

  
}
