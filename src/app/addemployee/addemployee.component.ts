import { Component } from '@angular/core';
import { userModel } from '../users.model';
import { AllAPIService } from '../services/all-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  user:userModel = {}

  constructor(private api:AllAPIService,private router:Router){}
  
  cancel(){
    this.user = {}
  }
  addUser(){
      this.api.saveUserAPI(this.user).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfullt added to our DB`)
          this.router.navigateByUrl('')
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    

  }
  }

