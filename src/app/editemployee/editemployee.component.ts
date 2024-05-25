import { Component,OnInit } from '@angular/core';
import { userModel } from '../users.model';
import { AllAPIService } from '../services/all-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit{
  user:userModel = {}

  constructor(private route:ActivatedRoute,private api:AllAPIService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      const {id}= result
      console.log(id);
      this.getUserDetails(id)
    })
  }

  getUserDetails(id:any){
    this.api.getAUserAPI(id).subscribe((result:any)=>{
      this.user = result
      console.log(this.user);      
    })
  }

  cancel(id:any){
    this.getUserDetails(id)
  }

  updateUser(){
    this.api.updateUserAPI(this.user).subscribe((result:any)=>{
      alert("User updated successfully")
      this.router.navigateByUrl('')      
    })
  }
}
