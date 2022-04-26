import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockService } from '../../api-rest/services/mock.service';
import { TaskService } from '../../api-rest/services/task.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  loading: boolean = false;

  constructor(public taskService: TaskService,
              public mockSvc: MockService, 
              public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                taskId: string
              }) {}

  ngOnInit(): void {
  }

  deleteTask() {
    this.loading = true;
    this.taskService.deleteTask(this.data)
    .subscribe(
      response => {
        console.log("Anduvo");
        this.loading = false;
      },
      error => {
        console.log("La API está fuera de servicio.");
        this.loading = false;
      }
    )
  }

}
