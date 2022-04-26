import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Story, User } from '../../api-rest/api-model';
import { MockService } from '../../api-rest/services/mock.service';
import { TaskService } from '../../api-rest/services/task.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  myForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              public taskService: TaskService,
              public mockSvc: MockService,
              private _snackBar: MatSnackBar,
              private localStorageSvc: LocalStorageService,
              public dialogRef: MatDialogRef<AddTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                story: Story
              }) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
         Validators.minLength(10)
      ]),
    })
  }
  
  addTask() {
    const name = this.myForm.get('name').value;
    const description = this.myForm.get('description').value;
    this.loading = true;
  
    this.taskService.addTask(this.data.story, name, description)
    .subscribe(
      response => {
        if ( ! response.success) 
          this.openSnackBar('Ha habido un error, inténtelo de nuevo', 'Cerrar');
        else {
          this.taskService.setTasks(response.data);
          this.openSnackBar('Se ha agregado la tarea', 'Cerrar');
        }
        this.loading = false;
      },
      error => {
        console.log("La API está fuera de servicio.");
        this.loading = false;
      }
    )
  }

  tokenCheck() {
    this.localStorageSvc.getItem('user')
    .subscribe(
      (response: User) => {
        if (response) this.addTask();
        else this.openSnackBar('No tienes permisos para agregar una tarea', 'Cerrar');
      }
    )
  }

  openSnackBar(msg: string, action: string) {
    this._snackBar.open(msg, action);
  }
}
