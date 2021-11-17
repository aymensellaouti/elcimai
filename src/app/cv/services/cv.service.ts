import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'rotating_card_profile.png','teacher', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'rotating_card_profile2.png','teacher', '1234', 39),
      new Cv(3, 'sellaouti', 'aymen', '                 ','teacher', '1234', 39),
      new Cv(4, 'sellaouti', 'aymen', '','teacher', '1234', 39),
    ];
  }
  getCv(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | undefined {
    return this.cvs.find((actualCv) => actualCv.id === id);
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}