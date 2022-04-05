import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerBodyComponent } from './server-body/server-body.component';
import { ServerLoopComponent } from './server-loop/server-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerBodyComponent,
    ServerLoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
