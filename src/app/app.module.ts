import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ObservablesComponent } from './observables/observables.component';
import { PipeComponent } from './pipe/pipe.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { ReversePipe } from './pipe/reverse.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModuleComponent } from './http-module/http-module.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CovidResultComponent } from './covid-result/covid-result.component';

const appRoutes: Routes = [
  { path: '', component: HttpModuleComponent },
  { path: 'result/:country', component: CovidResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    ObservablesComponent,
    PipeComponent,
    ShortenPipe,
    ReversePipe,
    HttpModuleComponent,
    CovidResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
