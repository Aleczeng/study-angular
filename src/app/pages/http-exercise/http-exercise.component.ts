import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../interface/post';
import {FollowersService} from '../../service/followers.service';

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {
  followers: any;

  constructor(private followersService: FollowersService) {
  }

  ngOnInit(): void {
    this.followersService.getAll().subscribe(resp => {
      this.followers = resp;
      console.log(this.followers);
    });
  }
}
