import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'; //interval is an observable

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // for clearing observable:
  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // interval(1000) => every sec a new event would be emitted
    // this. firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log("COUNT => ", count);
    // });

    // wanna new observable made by myself, not coming from angular:
    const customIntervalObservable = Observable.create((observer) => { //observer interested being inform about data,errors,completion of observable
      let count = 0;
      setInterval(() => {//repeat every sec
        // observer.error() //error => to throw an err
        // observer.complete() //complete => completion of observable
        observer.next(count); //next => to emit a new value
        count ++;
      }, 1000);
    });
    // now subscribe to our custom observable:
    this.firstObservableSubscription = customIntervalObservable.subscribe(data => {
      console.log("DATA => ", data)
    })
  }

  // lifecycle hook
  ngOnDestroy(): void {
    //whenever we leave component(route) to go to another component(route), clear that subscribtion
    this.firstObservableSubscription.unsubscribe();
  }

}
