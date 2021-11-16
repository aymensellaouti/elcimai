import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  color = 'lightblue';
  font = 'garamond';
  size = 65;

  constructor() { }

  ngOnInit(): void {
  }

}
