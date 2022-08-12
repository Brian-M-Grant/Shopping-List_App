import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../task-service.service';
import {ActivatedRoute, Params} from '@angular/router'
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
lists: any;
task: any;

  constructor(private taskService: TaskServiceService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
      console.log(params);
      this.taskService.getTask(params['listId']).subscribe((task:any)=>{
this.task = task;
      })
    })
   
    this.taskService.getList().subscribe((lists:any)=>{
  this.lists = lists
    })
  }

  
}
