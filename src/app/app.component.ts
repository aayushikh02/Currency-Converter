import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  base="INR";
  case="USD";
  amount=1;
  answer=0.014606643;
  ans
  url="https://api.exchangeratesapi.io/latest?base=";

  constructor(public http:HttpClient){
  }

    conversion(){
      this.http.get(this.url+this.base).subscribe((data)=>{
        console.log(data);
        console.log(this.base);
        console.log(this.case);
        this.ans=data;
        this.answer=this.amount*this.ans.rates[this.case];
      })

    }
  }

