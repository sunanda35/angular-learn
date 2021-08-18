import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements OnInit {
  title = 'fucker bitch';
  public name: String = '';
  // public value: String = 'fuck';
  constructor() {}
  // onClick(value: String) {
  //   // this.name++;
  //   console.log(value);
  // }
  ngOnInit(): void {}
}
