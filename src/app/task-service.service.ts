import { Injectable } from '@angular/core';
import {WebReqService} from '../app/web-req.service'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webReqService :WebReqService) { }
 createList(title: string){
return this.webReqService.post('list', { title});
 }
getList(){
  return this.webReqService.get('list');
}
getTask(listId: string){
  return this.webReqService.get(`list/${listId}/task`);
}
}
