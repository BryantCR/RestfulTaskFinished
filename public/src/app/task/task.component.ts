import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from './../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() task:any = {};

  constructor(private _HttpService: TasksService) { }

  ngOnInit(): void {
  }

}
