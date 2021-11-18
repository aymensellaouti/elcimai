import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    // 5 4 3 2 1
    // 15 12 9 6 3
    // 12 6
    observable.pipe(
      map( data => data * 3),
      filter( element => element % 2 == 0)
    ).subscribe({
      next: (monParam) => {
        this.toastr.info("" + monParam);
      },
      complete: () => {this.toastr.warning('Fin du flux')}
    }

    )
  }

  ngOnInit(): void {
  }

}
