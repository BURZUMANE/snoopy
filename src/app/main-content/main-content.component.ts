import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public gridNum = 1;

  public girdChanger(): void {
    if (this.gridNum === 3) {
      this.gridNum = 1;
      return;
    }
    ++this.gridNum;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
