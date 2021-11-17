import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  @Input() isRounded = true;
  @Input() isCol = false;

  @Output() selectCvItem = new EventEmitter<Cv | null>();
  constructor() {}
  ngOnInit(): void {
  }
  selectCv() {
    this.selectCvItem.emit(this.cv);
  }
}
