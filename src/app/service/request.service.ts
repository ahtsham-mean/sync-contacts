import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  /**
   * login.
   * @param {string} url API url
   * @param {any} obj Data to be added
   * @returns {Observable<any>}
   */
  login(url: string, obj: any): Observable<any> {
    return this.http.post(url, obj);
  }

  /**
   * sync contact.
   * @param {string} url API url
   * @param {any} payload = Data to be added
   * @param {string} token = Data to be added
   * @returns {Observable<any>}
   */
  syncContact(url: string, payload: any) {
    const token = sessionStorage.getItem('fuse') || '';

    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post(url, payload, httpOptions);
  }

  /**
   * get sync contact status .
   * @param {string} url API url
   * @returns {Observable<any>}
   */
  getContactStatus(url:string){
   return this.http.get(url).pipe(res=>res)
  }
}
