import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  postId!: string;
  postData!: Post;
  postDataLoading = true;
  similarPosts$!: Observable<{ id: string; data: Post }[]>;
  similarPostsLoading = true;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.postsService.countViews(this.postId);
      this.postsService.getPostById(this.postId).subscribe((post) => {
        this.postData = post;
        this.postDataLoading = false;
        this.similarPosts$ = this.postsService
          .getPostsByCategory(this.postData.category.categoryId)
          .pipe(
            map((postsArray) => {
              return postsArray.filter(
                (post) => post.data.title != this.postData.title
              );
            })
          );
        this.similarPosts$.subscribe((res) => {
          this.similarPostsLoading = false;
        });
      });
    });
  }
}
