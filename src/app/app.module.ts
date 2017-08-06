import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { MaterializeModule } from 'angular2-materialize';

import { MySelfComponent } from './my-self/my-self.component';
import { AcademicFormationComponent } from './academic-formation/academic-formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalWorksComponent } from './personal-works/personal-works.component';
import { ExpAllComponent } from './exp-all/exp-all.component';
import { MyCodeComponent } from './my-code/my-code.component';
import { ActualStateComponent } from './actual-state/actual-state.component';
import { GoalsComponent } from './goals/goals.component';
import { FooterEndComponent } from './footer-end/footer-end.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelfComponent,
    AcademicFormationComponent,
    ExperienceComponent,
    PersonalWorksComponent,
    ExpAllComponent,
    MyCodeComponent,
    ActualStateComponent,
    GoalsComponent,
    FooterEndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
