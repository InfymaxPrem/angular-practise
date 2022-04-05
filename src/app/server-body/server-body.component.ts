import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-body',
  templateUrl: './server-body.component.html',
  styleUrls: ['./server-body.component.css']
})
export class ServerBodyComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
