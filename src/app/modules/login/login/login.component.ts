import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../api-rest/services/auth.service';
import { HeaderService } from '../../core/services/header.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  wrongData: boolean = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public headerSvc: HeaderService,
              public localStorageSvc: LocalStorageService,
              public router: Router) {
    this.headerSvc.setHeader('Iniciar sesión', '');
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    })
  }

  login() {
    this.authService.login(this.myForm.get('username').value, this.myForm.get('password').value)
    .subscribe(
      response => {
        if (response.success) {
          response.user.token = response.token
          this.localStorageSvc.updateItem('user', response.user);
          this.router.navigateByUrl('/');
        } else {
          this.wrongData = true;
        }
      },
      error => {
        console.log("La API no está funcionando.");
      }
    )
  }

}
