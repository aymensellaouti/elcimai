import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  //Créer un event
  @Output() sendDataToDad = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  sayCc() {
    //emettre l'event avec les données à l'interieur
    this.sendDataToDad.emit('cc papa');
  }
}
