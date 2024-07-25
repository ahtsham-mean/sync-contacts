import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {

  decryptToken() {
    const token = sessionStorage.getItem('fuse') || '';
    return jwtDecode(token)
  }

}
