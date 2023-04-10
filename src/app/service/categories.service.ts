import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private afs: AngularFirestore) {}

  getCategories() {
    return this.afs
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data: Category = action.payload.doc.data() as Category;
            const id: string = action.payload.doc.id;
            return { data, id };
          });
        })
      );
  }
}
