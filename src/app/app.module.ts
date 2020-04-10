import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidemenuComponent } from './shared/components/side-menu/sidemenu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MobileHeaderComponent } from './shared/components/header/components/mobile-header/mobile-header.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';

import { ParticlesModule } from 'angular-particle';
import { AngularMaterialModule } from './pages/modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    HeaderComponent,
    MobileHeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ParticlesModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqsU950_ZJ9AaMIy0tl0SrSOw3YnurMh0'
    })

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
