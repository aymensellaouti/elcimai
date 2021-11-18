import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {API} from "../../constatntes/api.url";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvSelectSubject = new Subject<Cv>();
  private cvs: Cv[] = [];
  constructor(
    private http : HttpClient
  ) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'rotating_card_profile.png','teacher', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'rotating_card_profile2.png','teacher', '1234', 39),
      new Cv(3, 'sellaouti', 'aymen', '                 ','teacher', '1234', 39),
      new Cv(4, 'sellaouti', 'aymen', '','teacher', '1234', 39),
    ];
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  getFakeCvById(id: number): Cv | undefined {
    return this.cvs.find((actualCv) => actualCv.id === id);
  }
  deleteCv(cv: Cv):Observable<any> {
    // const params = new HttpParams().set('access_token', localStorage.getItem('token')?? '');
    return this.http.delete<Cv>(API.cv + cv.id);
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  addCv(cv: Cv):Observable<Cv> {
    return this.http.post<Cv>(API.cv, cv);
  }
  addFakeCv(cv: Cv):void {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }
  selectCv(cv: Cv) {
    this.cvSelectSubject.next(cv);
  }
}
