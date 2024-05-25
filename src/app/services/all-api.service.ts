import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class AllAPIService {

  server_url="https://angular-test-server.onrender.com"
  constructor(private http:HttpClient) { }

  saveUserAPI(user:userModel){
    return this.http.post(`${this.server_url}/employees`,user)
  }

  getAllUserAPI(){
    return this.http.get(`${this.server_url}/employees`)
  }

  removeUserAPI(id:any){
    return this.http.delete(`${this.server_url}/employees/${id}`)
  }

  getAUserAPI(id:any){
    return this.http.get(`${this.server_url}/employees/${id}`)
  }

  updateUserAPI(user:userModel){
    return this.http.put(`${this.server_url}/employees/${user.id}`,user)
  }
}
