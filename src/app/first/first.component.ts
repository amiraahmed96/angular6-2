import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  x = false;
  servername = 'testserver';
  serverStatus = false;

  servers = ['testserver1', 'testserver2'];
  constructor() { }

  ngOnInit() {
  }

  oncreateServer() {
    this.servers.push(this.servername);
    this.serverStatus = true;
  }

}
