import { ToastrModule } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Sub } from '../models/sub';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  addSub(subscriptionData: Sub) {
    this.afs
      .collection('subscriptions')
      .add(subscriptionData)
      .then(() => {
        this.toastr.success('Subscription added successfully');
      });
  }
}
