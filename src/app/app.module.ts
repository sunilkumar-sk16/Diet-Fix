import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietfixHomeComponent } from './dietfix-home/dietfix-home.component';
import { DietfixRecipesComponent } from './dietfix-recipes/dietfix-recipes.component';
import { DietfixContactusComponent } from './dietfix-contactus/dietfix-contactus.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DietfixHomeComponent,
    DietfixRecipesComponent,
    DietfixContactusComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
