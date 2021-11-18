import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {HelloService} from "../../services/hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  constructor(
    private hello: HelloService,
    private todoService: TodoService,
    private toaster: ToastrService,
    private cvService: CvService
  ) { }
  nbclick = 0;
  ngOnInit(): void {
    this.toaster.info('Bienvenu dans notre CvTech');
    this.cvService.cvSelectSubject
    .pipe(distinctUntilChanged())
    .subscribe(
      () => { this.nbclick++; }
    );
  }

  // getSelecetdCv(cv: Cv | null) {
  //   this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }
}
