import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { logging } from 'protractor';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  token: string;
  posts = [];

  constructor(private api: MainService, private logger: LoginService) { }

  ngOnInit() {
    this.user = {
      username: 'dmark',
      password: 'Savanna1'
    };
    this.login();
  }

  login(){
    this.logger.login({'username': this.user.username, 'password': this.user.password}).subscribe(
      data => {
        this.token = data['token'];
        console.log(data['token']);
        this.getPosts();
      },
      error => {
        console.log(error);
      }
    )
  }

  getPosts = () => {
    console.log(this.token);
    this.api.getPosts(this.token).subscribe(
      data =>{
        this.posts = data;
        console.log("a");
      },
      error => {
        console.log(error);
      }
    )
  }

}
