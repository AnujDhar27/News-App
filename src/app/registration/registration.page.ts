import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  phoneNumber: string = "";
  firstName: string = "";
  lastName: string = "";
  email:string="";
  birthDate: string = "";
  address: string = "";
  selectedGender: string="";
  isFutureDate: boolean = false;
  
  constructor(private apiService: SignupService,private router: Router) {}
  ngOnInit() {
    console.log('test')
   
  }
  getDate():string {
    const currentDate = new Date();
    const mm=currentDate.getMonth()+1;//january gives 0 and december gives 11
    const dd=currentDate.getDate();
    const yyyy=currentDate.getFullYear();
  //   console.log(currentDate);
  //   console.log(dd);
  //  console.log(mm);
  //   console.log(yyyy);
    return yyyy+'-'+mm+'-'+dd;
  }
  
  signIn(){
    this.router.navigate(['/login']);
  }
  signUp() {
    if (
      this.phoneNumber &&
      this.firstName &&
      this.lastName &&
      this.email &&
      this.birthDate &&
      this.address &&
      this.selectedGender
    ) {
      console.log(this.phoneNumber,this.firstName,this.lastName,this.birthDate,this.address,this.selectedGender,this.email);
      // this.birthDate
      this.apiService
        .registerUser(
          this.phoneNumber,
          this.firstName,
          this.lastName,
          this.email,
          this.birthDate,
          this.selectedGender.toUpperCase(),
          this.address,
        )
        .subscribe(
          (response) => {
            console.log('Registration response:', response);
            console.log(response.NoOfRecord);

          },
          (error) => {
            console.error('Registration error:', error);

          }
        );
    } else {

      console.log('Please fill in all required fields.');
    }
  }


}
