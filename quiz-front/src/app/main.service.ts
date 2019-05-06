import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../app/login.service';

// const httpOptions = {
//   headers: this.httpHeaders
// };

@Injectable({
  providedIn: 'root'
})

export class MainService {

  // token: string;
  baseurl = "http://localhost:8000/api";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  errors: any = [];
  username: string;
  token_expires: Date;

  private httpOptions: any;

  constructor(private http: HttpClient, private logger: LoginService) { 
  }

  // createPost(title: string, Authorization: string, created_at: string): Observable<any>{
  //   return this.http.post(this.baseurl + "/posts/", JSON.stringify([title, Authorization, created_at]), httpOptions);
  // }

  getPosts(token: string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    };
    // console.log(this.logger.token);
    return this.http.get(this.baseurl + '/posts', httpOptions);
  }

  getPost(id: number): Observable<any>{
    return this.http.get(this.baseurl + "/posts/" + id, this.httpOptions);
  }
}