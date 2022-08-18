import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,  FormGroup} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserserviceService } from './service/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  
  @ViewChild('container') marker:any = ElementRef
  subject = new BehaviorSubject<any>([]);
  subject2 = this.subject.asObservable()

  fucn(){
    this.subject2.subscribe(
      (e) =>  console.log(e)
    )
  }

  
  title = 'Input Values';
  display = ""
  disable = false
  name= "jay"
  show = "Jay".toLowerCase()
  color = "green"
  colors = ""
  users= ['Jay','Bhavesh','Suraj','Raj','Abhi']
  userData = [
    {name:'suraj', email:'suraj@gmail.com', id : 3}
  ]
  empData = [
    {name:'Jay', email:'jay@gmail.com', id : 2, socialaccounts:['facebook','gmail']},
    {name:'raj', email:'raj@gmail.com', id : 3, socialaccounts:['instagram','Youtube']},
    {name:'suraj', email:'suraj@gmail.com', id : 4, socialaccounts:['facebook','orkut']},
    {name:'bhavesh', email:'bhavresh@gmail.com', id : 5, socialaccounts:['facebook','pinterest']},
  ]

  formData:any = {};

  Newdisplay = false;

  binding:any;

  data:any="Jay";
  filee:any="Bhavesh";

  file:any;

  colorss = ["yellow" , "red", "blue", "orange"]

  getData(num:any){
    console.log(num)
  }

  getVal(val:any){
    console.warn(val)
    this.display = val
  }

  getForm(data:NgForm){
    console.warn(data)
    this.formData=data
  }

  toggle(){
    this.Newdisplay=!this.Newdisplay
  }

  update(){
    this.data = Math.random()
    this.filee = Math.random()
  }

  userLogin(item:string){
    console.warn(item)
  }
 
// view child
  ngAfterViewInit(): void {
    console.log(this.marker)
    this.marker.nativeElement.style.color="red"
    this.fucn()
  }

  // service 

  constructor(private userData1:UserserviceService){
    console.log(userData1.users());
    this.file= userData1.users();
  }
}



