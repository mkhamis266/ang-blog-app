import { Injectable } from '@angular/core';
import { Sub } from '../models/sub';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private afs: AngularFirestore) {}

  addSub(subscriptionData: Sub) {
    this.afs
      .collection('subscriptions')
      .add(subscriptionData)
      .then(() => {
        console.log('data added to subscription');
      });
  }
}
