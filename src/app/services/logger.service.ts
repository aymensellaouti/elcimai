import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message: any) {
    console.log('Logged from Logger Service ');
    console.log(message);
  }
}
