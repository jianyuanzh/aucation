import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 需要括号，方法的方式
  @Input()
  rating:number = 0;

  stars:boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let i=1; i<=5; i++) {
      this.stars.push(i <= this.rating)
    }
    // this.stars = [true, true, true, false, false]
  }
}
