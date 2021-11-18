import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';

import {ToastrModule} from "ngx-toastr";


import {AppComponent} from './app.component';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {ColorComponent} from './components/color/color.component';
import {TwoComponent} from './components/two/two.component';
import {CardComponent} from './components/card/card.component';
import {FilsComponent} from './components/fils/fils.component';
import {PereComponent} from './components/pere/pere.component';
import {ListComponent} from './cv/list/list.component';
import {ItemComponent} from './cv/item/item.component';
import {DetailComponent} from './cv/detail/detail.component';
import {CvComponent} from './cv/cv/cv.component';
import {NgStyleComponent} from './directives/ng-style/ng-style.component';
import {WordComponent} from './directives/word/word.component';
import {NgClassComponent} from './directives/ng-class/ng-class.component';
import {TodoComponent} from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { AdminComponent } from './components/admin/admin.component';
import { PortailComponent } from './components/portail/portail.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './components/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';


import {HighlightDirective} from './directives/highlight.directive';
import {RainbowDirective} from './directives/rainbow.directive';

import {UsdBtcPipe} from './pipes/usd-btc.pipe';
import {DefaultImagePipe} from './cv/pipes/default-image.pipe';
import { TestHttpComponent } from './components/test-http/test-http.component';
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    CvComponent,
    NgStyleComponent,
    WordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    UsdBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    AddPersonneComponent,
    DetailsCvComponent,
    AdminComponent,
    PortailComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
