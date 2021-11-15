import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isHidden = false;
  message = '';
  constructor() { }

  // attributs : état classe
  // méthodes: Fonctionnalités
  ngOnInit(): void {
  }
  alerter() {
    alert('cc');
  }
  showHide() {
    this.isHidden = ! this.isHidden;
  }
  changeMessage(msg: string) {
    this.message = msg;
  }

}
