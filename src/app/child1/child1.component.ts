import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  public Checking: any;
  constructor(private obj: NumberService) {
    this.Checking = obj.chkPrime(5);
  }
}
