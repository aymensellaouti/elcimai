import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauches: Cv[] = [];
  constructor() {}
  getEmbauches(): Cv[] {
    return this.embauches;
  }
  embaucher(cv: Cv | null): boolean {
  //  on vérifie si le cv n'est pas déjà présent
    //si oui je retourne false
    //si non je l'embauche et je retourne true
    if (cv && this.embauches.indexOf(cv) === -1) {
      this.embauches.push(cv);
      return true;
    }
    return false;
  }
}
