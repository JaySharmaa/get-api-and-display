import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  public name = "Jay"
  public message = "Hello welcome to pipe"
  public person = {
    "firstName":"Jay",
    "lastName":"Sharma"
  }
  public date = new Date()
}
