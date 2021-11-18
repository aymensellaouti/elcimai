import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv | null>();
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCv();
  }
  // forwardSelectedCv(cv: Cv | null) {
  //   this.forwardCv.emit(cv);
  // }
}
