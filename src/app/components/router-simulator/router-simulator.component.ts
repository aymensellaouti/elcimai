import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent {
  route: string = '';
  constructor(
    private router: Router
  ) { }
  navigate() {
    this.router.navigate([this.route]);
  }
}
