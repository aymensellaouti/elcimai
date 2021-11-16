import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv | null>();
  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'rotating_card_profile.png','teacher', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'rotating_card_profile2.png','teacher', '1234', 39),
    ];
  }
  forwardSelectedCv(cv: Cv | null) {
    this.forwardCv.emit(cv);
  }
}
