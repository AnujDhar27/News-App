import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'https://bpilmobile.bergerindia.com/CUSAPI/New/Registration/NewsUserLogin';

  constructor(private http: HttpClient) {}
  loginUser(
   phoneNumber: string,
   password: string,
 ): Observable<any> {
   const headers = new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded',
   });

   const params = {
     User_Id: phoneNumber,
     Password:password,
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
