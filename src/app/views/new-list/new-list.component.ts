import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from 'src/app/task-service.service';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
  }
  createList(title: string){
    this.taskService.createList(title).subscribe((response) => {
      console.log(response)
    })
  }
  //to route back to the home pages

}
