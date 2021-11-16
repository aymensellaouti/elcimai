import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(
    private loggerService: LoggerService
  ) { }
  sayCc() {
    this.loggerService.logger('CC');
  }
}
