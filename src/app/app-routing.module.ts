import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietfixContactusComponent } from './dietfix-contactus/dietfix-contactus.component';
import { DietfixHomeComponent } from './dietfix-home/dietfix-home.component';
import { DietfixRecipesComponent } from './dietfix-recipes/dietfix-recipes.component';

const routes: Routes = [
  {path:'home',component:DietfixHomeComponent},
  {path:'recipes',component:DietfixRecipesComponent},
  {path:'contactus',component:DietfixContactusComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
