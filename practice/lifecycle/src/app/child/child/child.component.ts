import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, DoCheck {

  counter = 0;
  interval : any;


  constructor() { 
    console.log("Child Constructor is called")
  }

  ngOnInit(): void {
    console.log("Child ngoninit is called")

    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter)
    },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("Child ngondestroy is called")
  }
  ngDoCheck(): void {
    console.log("Child docheck is called")
  }

}
