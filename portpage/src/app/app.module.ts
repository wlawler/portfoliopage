import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PiclinkComponent } from './piclink/piclink.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    NavBarComponent,
    ContactmeComponent,
    PiclinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
