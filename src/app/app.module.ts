import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
