import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarSystemListComponent } from './Page/StarSystemList/StarSystemList.component';
import { StarSystemFormComponent } from './Page/StarSystemForm/StarSystemForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceObjectListComponent } from './Page/SpaceObjectList/SpaceObjectList.component';
import { SpaceObjectFormComponent } from './Page/SpaceObjectForm/SpaceObjectForm.component';
import { NavigationComponent } from './Page/Navigation/Navigation.component';
import { StarSystemDetailComponent } from './Page/StarSystemDetail/StarSystemDetail.component';
import { SpaceObjectDetailComponent } from './Page/SpaceObjectDetail/SpaceObjectDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarSystemListComponent,
    StarSystemFormComponent,
    SpaceObjectListComponent,
    SpaceObjectFormComponent,
    NavigationComponent,
    StarSystemDetailComponent,
    SpaceObjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:'Base_Url', useFactory:()=>"https://localhost:7220/api/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
