import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo/todo.component";
import {CvComponent} from "./cv/cv/cv.component";
import {WordComponent} from "./directives/word/word.component";
import {FirstComponent} from "./components/first/first.component";
import {ColorComponent} from "./components/color/color.component";

const routes: Routes = [
  { path: 'todo', component: TodoComponent},
  { path: 'cv', component: CvComponent},
  { path: 'word', component: WordComponent},
  { path: 'color', component: ColorComponent},
  { path: '', component: FirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
