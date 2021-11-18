import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cv/cv.component";
import {AddPersonneComponent} from "./add-personne/add-personne.component";
import {AuthGuard} from "../guards/auth.guard";
import {DetailsCvComponent} from "./details-cv/details-cv.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
          {path: '', component: CvComponent},
          {path: 'add', component: AddPersonneComponent, canActivate: [AuthGuard]},
          {path: ':id', component: DetailsCvComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
