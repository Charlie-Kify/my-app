import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { FormsModule } from '@angular/forms';
import { MySecondCardComponent } from './my-second-card/my-second-card.component';
import { HoverBackgroundElementDirective } from './directives/hover-background-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MySecondCardComponent,
    HoverBackgroundElementDirective
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
