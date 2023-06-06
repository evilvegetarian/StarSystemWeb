import { SpaceObjectListComponent } from './Page/SpaceObjectList/SpaceObjectList.component';
import { SpaceObjectFormComponent } from './Page/SpaceObjectForm/SpaceObjectForm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarSystemListComponent } from './Page/StarSystemList/StarSystemList.component';
import { StarSystemFormComponent } from './Page/StarSystemForm/StarSystemForm.component';
import { StarSystemDetailComponent } from './Page/StarSystemDetail/StarSystemDetail.component';
import { SpaceObjectDetailComponent } from './Page/SpaceObjectDetail/SpaceObjectDetail.component';

const routes: Routes = [
{path:'liststar',component:StarSystemListComponent},
{path:'formstar',component:StarSystemFormComponent},
{path:'formspace',component:SpaceObjectFormComponent},
{path:'listspace',component:SpaceObjectListComponent},
{path:'formstar/:id',component:StarSystemFormComponent},
{path:'formspace/:id',component:SpaceObjectFormComponent},
{path:'stardetail/:id', component:StarSystemDetailComponent},
{path:'spacedetail/:id', component:SpaceObjectDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
