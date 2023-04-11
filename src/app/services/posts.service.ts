import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post';
import * as firebase from 'firebase/compat/app';

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

  getPostById(id: string): Observable<Post> {
    return this.afs
      .collection('posts')
      .doc(id)
      .valueChanges() as Observable<Post>;
  }

  countViews(postId: string) {
    const viewCount = {
      views: firebase.default.firestore.FieldValue.increment(1),
    };
    this.afs
      .doc(`posts/${postId}`)
      .update(viewCount)
      .then(() => {
        console.log('view count updated');
      });
  }
}
