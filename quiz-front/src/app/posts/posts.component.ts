import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  user: any;
  posts = [];

  constructor(private api: MainService) { 
    this.user = {
      username: 'dmark',
      password: 'Savanna1'
    };
    // this.getPosts();
  }

  ngOnInit() {
  }

  // getPosts = () => {
  //   this.api.getPosts().subscribe(
  //     data =>{
  //       this.posts = data;
  //       console.log("a");
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

}
