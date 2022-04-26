import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderModule } from './modules/header/header.module';
import { ContentModule } from './modules/content/content.module';
import { FormsModule } from '@angular/forms';
import { GenericModule } from './modules/generic/generic.module';
import { LoginModule } from './modules/login/login.module';

registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		HeaderModule,
		ContentModule,
		FormsModule,
		GenericModule,
		LoginModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		}),
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-AR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
