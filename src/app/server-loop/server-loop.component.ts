import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-loop',
  templateUrl: './server-loop.component.html',
  styleUrls: ['./server-loop.component.css']
})
export class ServerLoopComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string }

  constructor() { }

  ngOnInit(): void {
  }

}
