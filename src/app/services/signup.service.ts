import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'https://bpilmobile.bergerindia.com/CUSAPI/New/Registration/NewUserRegistration';

   constructor(private http: HttpClient) {}
   registerUser(
    phoneNumber: string,
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string,
    selectedGender: string,
    address: string,
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const params = {
      Mobile_Number: phoneNumber,
      First_Name: firstName,
      Last_Name: lastName,
      Email_Id: email,
      Date_of_Birth: birthDate,
      Gender_Val: selectedGender,
      Address_Val: address,
    };

    const body = this.serializeParams(params);

    return this.http.post(this.apiUrl, body, { headers });
  }
  private serializeParams(params: any): string {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
