import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddnewsService {
  private apiUrl = 'https://bpilmobile.bergerindia.com/CUSAPI/New/Registration/NewsMasterInsertUpdate';

  constructor(private http: HttpClient) {}
  AddNews(
    id:any,
    phn:string,
    cat:any,
    headline:string,
    desc:string,
    image:string,
    captured:string,


 ): Observable<any> {
   const headers = new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded',
   });

   const params = {
     nm_id:id,
     User_Id: phn,
     nm_category:cat,
     nm_heading:headline,
     nm_description:desc,
     nm_image:image,
     nm_captured_by:captured
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
