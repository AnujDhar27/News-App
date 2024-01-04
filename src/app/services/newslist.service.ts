import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewslistService {
  private apiUrl = 'https://bpilmobile.bergerindia.com/CUSAPI/New/Registration/GetNewsList';
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient) {}
  newsList(
    phoneNumber: string,
    nmcategory:string,
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const params = {
      User_Id: phoneNumber,
      nm_category:nmcategory,
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
