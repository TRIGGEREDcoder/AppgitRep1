import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GitAppSharedModule } from 'app/shared/shared.module';
import { GitAppCoreModule } from 'app/core/core.module';
import { GitAppAppRoutingModule } from './app-routing.module';
import { GitAppHomeModule } from './home/home.module';
import { GitAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GitAppSharedModule,
    GitAppCoreModule,
    GitAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GitAppEntityModule,
    GitAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class GitAppAppModule {}
