import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    const subData: Sub = form.value;
  }
}
