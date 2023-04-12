import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  constructor(private subService: SubscriptionService) {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    const subData: Sub = form.value;
    this.subService.addSub(subData);
  }
}
