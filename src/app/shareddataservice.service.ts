import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataserviceService {

  private dataSource = new BehaviorSubject<string>('');
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(value){
    this.dataSource.next(value);
  }
}
