import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  public Chekk_Prime: any;
  public Chekk_Capital: any;

  constructor(private obj: NumberService, private obj1: StringService) {
    this.Chekk_Prime = this.obj.chkPrime(5);
    this.Chekk_Capital = this.obj1.CountCapital('SaMse');
  }
}
