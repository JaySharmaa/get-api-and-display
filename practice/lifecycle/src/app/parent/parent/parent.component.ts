import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , OnDestroy, DoCheck {
  showChild = false;
  

  constructor() {
    console.log("Parent Constructor is called")
   }

  ngOnInit(): void {
    console.log("Parent ngoninit is called")
  }

  ClickMe(){
    this.showChild = !this.showChild;
  }

  ngOnDestroy(): void {
    console.log("Parent ngondestroy is called")
  }

  ngDoCheck(): void {
    console.log("Parent docheck is called")
  }
}
