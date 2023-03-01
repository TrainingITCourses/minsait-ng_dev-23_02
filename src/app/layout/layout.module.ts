import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, CopyrightComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
