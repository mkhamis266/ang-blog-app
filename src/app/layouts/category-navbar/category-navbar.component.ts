import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss'],
})
export class CategoryNavbarComponent implements OnInit {
  categories$!: Observable<{ id: string; data: Category }[]>;
  isLoading = true;
  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getCategories();
    this.categories$.subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}
}
