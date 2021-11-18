import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo/todo.component";
import {CvComponent} from "./cv/cv/cv.component";
import {WordComponent} from "./directives/word/word.component";
import {FirstComponent} from "./components/first/first.component";
import {ColorComponent} from "./components/color/color.component";
import {SecondComponent} from "./components/second/second.component";
import {AddPersonneComponent} from "./cv/add-personne/add-personne.component";
import {DetailsCvComponent} from "./cv/details-cv/details-cv.component";
import {AdminComponent} from "./components/admin/admin.component";
import {PortailComponent} from "./components/portail/portail.component";
import {NF404Component} from "./components/nf404/nf404.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'color/:couleur', component: ColorComponent},
  // { path: ':qqchose', component: SecondComponent},
  { path: '', component: FirstComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent, children: [
      { path: 'second', component: SecondComponent},
      { path: 'word', component: WordComponent},
  ]},
  { path: '', component: PortailComponent, children: [
      { path: 'todo', component: TodoComponent},
      { path: 'cv', children: [
          {path: '', component: CvComponent},
          {path: 'add', component: AddPersonneComponent, canActivate: [AuthGuard]},
          {path: ':id', component: DetailsCvComponent},
        ]
      },
  ]},
  { path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
