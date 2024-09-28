import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { FacultyComponent } from './faculty/faculty.component';


const routes: Routes = [
  {path:"login",
    component:LoginComponent
  },
  {path:"User",
    component:UserComponent
  },
  {
    path:"Administrator",
    component:AdministratorComponent
  },
  {
    path:"faculty",
    component:FacultyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
