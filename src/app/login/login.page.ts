import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { registerLocaleData } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phoneNumber: string = "";
  password: string = "";
  isToastOpen = false;
  constructor(private router: Router,private apiService:SigninService) { }

  ngOnInit() {
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  NavToSignUp() {
    this.router.navigate(['/registration']);
    console.log('hi');
  }
  signIn(){
    console.log('sign in is pressed');
    if (
      this.phoneNumber &&
      this.password 
    ) {
      const params ={
         queryParams:{phn:this.phoneNumber}
        // queryParams:{phn:'08017123981'}
      }
      console.log(this.phoneNumber,this.password);
      this.apiService
        .loginUser(
          this.phoneNumber,
          this.password,
        )
        
        .subscribe(
          (response) => {
            console.log('Registration response:', response);
            console.log(response.Msg.en);
            console.log(response.NoOfRecord);
            if(response.NoOfRecord!=0)
            this.router.navigate(['/dashboard'],params);
          else
          this.setOpen(true);
            },
          (error) => {
            console.error('Login error:', error);
            this.setOpen(true)
          }
        );
    } else {
      console.log('Please fill in all required fields.');
      this.setOpen(true)
    }
  }
}
