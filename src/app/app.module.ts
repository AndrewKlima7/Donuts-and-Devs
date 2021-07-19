import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DonutComponent} from './donut/donut.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
      {path: 'donut', component: DonutComponent}
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
