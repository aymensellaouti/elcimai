import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  addCv(formumaire: NgForm) {
    this.cvService.addCv(formumaire.value);
    this.toastr.success(`Le cv de ${formumaire.value.name} a été ajouté avec succès`);
    this.router.navigate(['cv']);
  }
}
