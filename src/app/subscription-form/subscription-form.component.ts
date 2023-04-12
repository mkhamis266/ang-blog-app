import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  constructor(private subService: SubscriberService) {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    const subData: Sub = form.value;
    this.subService.addSub(subData);
  }
}
