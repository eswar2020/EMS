import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

   addAnEmployee(employee){

     return this.http.post('http://localhost:9120/addEmployee',employee);

   }

   getAllEmployees(){
     return this.http.get('http://localhost:9120/getAllEmployees');
   }

   deleteEmployee(eid){
     console.log("eid",eid)
     return this.http.delete("http://localhost:9120/deleteEmployee/"+eid);
   }
}
