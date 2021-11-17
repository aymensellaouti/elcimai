import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  // L'état de la couleur de la DIV
  color : string = '';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.color = this.defaultColor;
    this.activatedRoute.params.subscribe(
      (params) => {this.color = params['couleur'];}
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => {
        console.log(qp);}
    )
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }

}
