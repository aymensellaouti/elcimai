import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";
import {Cv} from "../model/cv";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
  cv: Cv| null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cv = this.cvService.getCvById(+params['id']) ?? null;
        if (!this.cv) {
          this.router.navigate(['cv']);
        }
      }
    )
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
    }
    this.toastr.success(`Cv supprimé avec succès :)`)
    this.router.navigate(['cv']);
  }
}
