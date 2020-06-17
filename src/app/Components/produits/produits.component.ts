import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {Post} from '../posts';
import {PostService} from '../admin/post.service';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  email: string;

  password: string;

  user: firebase.User;
  posts: Observable<Post[]>;
  constructor(private postService: PostService, private auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      console.log(this);
    });
  }

}
