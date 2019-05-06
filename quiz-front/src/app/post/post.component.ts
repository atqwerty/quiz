import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any;
  post_id: number;

  constructor(private api: MainService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.post_id = params['post_id'];
    });
    this.getPost(this.post_id);
  }

  getPost = (post_id) =>{
    this.api.getPost(post_id).subscribe(
      data => {
        this.post = data
      },
      error => {
        console.log(error);
      }
    )
  }

}
