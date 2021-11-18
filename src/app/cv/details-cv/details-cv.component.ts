import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";
import {Cv} from "../model/cv";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../auth/services/auth.service";

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
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      {
        next: (params) => {
          this.cvService.getCvById(+params['id']).subscribe(
            (cv) => {this.cv = cv;}
          );
        },
        error: () => {
          this.router.navigate(['cv']);
        }
      }
    );
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv).subscribe({
        next: () => {
          this.toastr.success(`Cv supprimé avec succès :)`);
          this.router.navigate(['cv']);
        },
        error: () => {
          this.toastr.error(`Problème au niveau du serveur veuillez l'admin :)`);
        }
        }
      );
    }


  }
}
