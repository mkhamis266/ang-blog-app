import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss'],
})
export class CategoryNavbarComponent implements OnInit {
  categories$!: Observable<{ id: string; data: Category }[]>;
  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getCategories();
  }

  ngOnInit(): void {}
}
