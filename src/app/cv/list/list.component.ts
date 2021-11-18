import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv | null>();
  constructor(
    private cvService: CvService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {this.cvs = cvs;},
      error: (error) => {
        this.cvs = this.cvService.getFakeCvs();
        this.tostr.warning("Problèem d'accès au serveur, attention les données sont fake" );
      }
    });
  }
  // forwardSelectedCv(cv: Cv | null) {
  //   this.forwardCv.emit(cv);
  // }
}
