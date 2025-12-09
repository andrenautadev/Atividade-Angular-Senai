import { Component, NgModule, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
})
export class AppModule { }

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // atenção: é "styleUrls" no plural
})
export class App {
  protected readonly title = signal('loja-jogos');
}
