import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, CopyrightComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
