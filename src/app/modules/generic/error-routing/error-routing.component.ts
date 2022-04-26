import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-error-routing',
  templateUrl: './error-routing.component.html',
  styleUrls: ['./error-routing.component.scss']
})
export class ErrorRoutingComponent implements OnInit {

  constructor(public headerSvc: HeaderService) {
    this.headerSvc.setHeader('Error 404', 'menu');
  }

  ngOnInit(): void {}
}
