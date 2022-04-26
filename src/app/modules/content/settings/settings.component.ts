import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public headerSvc: HeaderService) {
    this.headerSvc.setHeader('Settings', 'menu');
  }

  ngOnInit(): void {}

}
