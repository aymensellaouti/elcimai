import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  sliderObservable: Observable<string> | null = null;
  path = 'as.jpg';
  @Input() timer = 1000;
  paths: string[] = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    '404.png',
    'tim_logo.png',
    'cv.png',
    'as.jpg',
  ]
  size = 150;
  slideSubscription: Subscription | null = null;
  constructor() {
    this.sliderObservable = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            if (i == this.paths.length) {
              i = 0;
            }
            observer.next(this.paths[i++]);
          },
          this.timer
        )
      }
    );
    this.slideSubscription = this.sliderObservable.subscribe(
      (newPath) => {this.path = newPath;}
    )
  }

  ngOnDestroy(): void {
        this.slideSubscription?.unsubscribe();
    }

  ngOnInit(): void {
  }

}
