import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { AdministratorComponent } from './administrator/administrator.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FacultyComponent } from './faculty/faculty.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdministratorComponent,
    FacultyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
