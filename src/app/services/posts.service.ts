import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private afs: AngularFirestore) {}

  getPosts() {
    return this.afs
      .collection('posts')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data: Post = action.payload.doc.data() as Post;
            const id: string = action.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  getFeaturedPosts() {
    return this.afs
      .collection('posts', (ref) =>
        ref.where('isFeatured', '==', true).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data: Post = action.payload.doc.data() as Post;
            const id: string = action.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  getLatestPosts() {
    return this.afs
      .collection('posts', (ref) => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data: Post = action.payload.doc.data() as Post;
            const id: string = action.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  getPostsByCategory(categoryId: string) {
    return this.afs
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', categoryId)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data: Post = action.payload.doc.data() as Post;
            const id: string = action.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
