import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		MatSnackBarModule,
		MatToolbarModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule {
}
