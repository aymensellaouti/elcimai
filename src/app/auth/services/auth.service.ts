import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialsDto} from "../dto/credentials.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "../dto/login-response.dto";
import {API} from "../../constatntes/api.url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.auth, credentials);
  }

}
