import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredPosts$!: Observable<{ id: string; data: Post }[]>;
  isFeaturedLoading: boolean = true;
  constructor(private postsService: PostsService) {
    this.featuredPosts$ = postsService.getFeaturedPosts();
    this.postsService.getFeaturedPosts().subscribe((data) => {
      this.isFeaturedLoading = false;
    });
  }

  ngOnInit(): void {}
}
