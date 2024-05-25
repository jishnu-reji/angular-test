import { Component,OnInit } from '@angular/core';
import { userModel } from '../users.model';
import { AllAPIService } from '../services/all-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allUsers:userModel[]=[]

  constructor(private api:AllAPIService){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllUserAPI().subscribe((result:any)=>{
      this.allUsers = result
      console.log(result);
    })
  }

  deleteUser(id:any){
    this.api.removeUserAPI(id).subscribe((result:any)=>{
      this.getAllUsers()
    })
  }
}
