import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Student} from '../student';

import{ShareddataserviceService} from '../shareddataservice.service'

@Component({
  selector: 'app-reactiveformgetset',
  templateUrl: './reactiveformgetset.component.html',
  styleUrls: ['./reactiveformgetset.component.css']
})
export class ReactiveformgetsetComponent implements OnInit {

  constructor(
 private  sharedata:ShareddataserviceService

  ) { }

  ngOnInit() {
  }


  @Input() 
	ctMsg : string; 
	
	@Input('ctArray')
	myctArray : Array<string>;

    @Input('studentAddMsg') 
	addMsg : string; 	
	
  	@Output('addStudentEvent') 
	addStdEvent = new EventEmitter<Student>();

  	@Output() 
	sendMsgEvent = new EventEmitter<string>();	
	
	student = new Student();
	childTitle = '---Child One---';
	message = 'Send Message'
	msg : string;
	
	addStudent() {
      this.sharedata.updatedDataSelection('hai')
	      this.addStdEvent.emit(this.student);
    }	
	sendMsg() {
	      this.sendMsgEvent.emit(this.msg);
    }	

}
