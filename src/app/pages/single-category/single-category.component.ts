import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss'],
})
export class SingleCategoryComponent implements OnInit {
  categoryId!: string;
  categoryPosts$!: Observable<{ id: string; data: Post }[]>;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.categoryPosts$ = this.postsService.getPostsByCategory(
        this.categoryId
      );
      this.postsService
        .getPostsByCategory(this.categoryId)
        .subscribe((data) => {
          this.isLoading = false;
        });
    });
  }
}
