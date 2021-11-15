import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  // L'état de la couleur de la DIV
  color = this.defaultColor;
  constructor() { }
  ngOnInit(): void {
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }

}
