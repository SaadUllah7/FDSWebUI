import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageListService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44360/api/package/'

  packagesList(){
    return  this.http.get(this.baseURL + 'GetPackageList');
  }
}
