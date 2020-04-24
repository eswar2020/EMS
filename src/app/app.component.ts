import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
// import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   apiCallResponse;
   employees;

   ngOnInit(){
    this.emp.getAllEmployees().subscribe(
      (response) => {
        //  this.employees=response;
      // return response;
      //  return response;
      },
      (error) => {
        alert("Something went wrong! Please try again!!" + error.message);
      }
      )
    //this.emp.getAllEmployees().toPromise();
   }

  constructor(private emp:EmployeeService){

// this.employees;
  }

  
  
  addEmployee(formData){

    this.emp.addAnEmployee(formData.value).subscribe(
      (response) => {
          this.apiCallResponse=response;
          if(this.apiCallResponse.status == "200"){

            this.emp.getAllEmployees().subscribe(
              (response) => {
                 this.employees=response;
              }
            )

          }
      }
    )
  
  }
   

  deleteEmployee(employee){
    this.emp.deleteEmployee(employee.employeeId).subscribe(
      (response) => {
        this.apiCallResponse=response;
        if(this.apiCallResponse.status == "200"){

          this.emp.getAllEmployees().subscribe(
            (response) => {
               this.employees=response;
            }
          )

        } }
    )
  }

}

/*

* Implement Edit feature

* Incorporate EMS application in SPA

* handle errors for each API


* Differences between Observables and promises?

 ->  Observables are lazy loading

 -> Promises are early loading


*/