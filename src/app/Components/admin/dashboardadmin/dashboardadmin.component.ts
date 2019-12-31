import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  createPost() {
    const data = {
      content: this.content,
      image: this.image,
      title: this.title,
      published: new Date(),
    };
    this.postService.create(data);
  }

}
