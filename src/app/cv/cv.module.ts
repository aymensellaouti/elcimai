import {NgModule} from "@angular/core";
import {ItemComponent} from "./item/item.component";
import {DetailComponent} from "./detail/detail.component";
import {CvComponent} from "./cv/cv.component";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {EmbaucheComponent} from "./embauche/embauche.component";
import {AddPersonneComponent} from "./add-personne/add-personne.component";
import {DetailsCvComponent} from "./details-cv/details-cv.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CvRoutingModule} from "./cv-routing.module";
import {ListComponent} from "./list/list.component";


@NgModule({
  declarations: [
    ItemComponent,
    DetailComponent,
    CvComponent,
    ListComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    AddPersonneComponent,
    DetailsCvComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule {}
