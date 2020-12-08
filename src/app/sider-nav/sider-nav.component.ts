import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})
export class SiderNavComponent implements OnInit {

  public isOpened = false;

  public toggleMenu(): void {
    this.isOpened = !this.isOpened;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
