import { Component, OnInit } from '@angular/core';
import{ReactiveformgetsetComponent} from '../reactiveformgetset/reactiveformgetset.component'
import {Student} from '../student';
import{ShareddataserviceService} from '../shareddataservice.service'
@Component({
  selector: 'app-reactiveformvalid',
  templateUrl: './reactiveformvalid.component.html',
  styleUrls: ['./reactiveformvalid.component.css']
})
export class ReactiveformvalidComponent implements OnInit {

  constructor(

		private  sharedata:ShareddataserviceService
	) { }

  ngOnInit() {

		this.sharedata.data.subscribe(data => {
			//do what ever needs doing when data changes
			this.msg=data
		})
  }


  parentTitle = 'Parent Component';

	//Property for child component one
	cityMsg = 'Indian City Names';
	cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
    stdAddMsg = 'Add Student';	
	
	//Property for child component two
	stdMsg = 'Student Leader Detail';
	stdLeaderObj = new Student('Narendra', 'Modi');
	
	//Property used in parent
	stdFullName = '';
	sum = '';
	msg = '';
	
	saveData(std) {
	    this.stdFullName = std.fname + ' ' + std.lname ;
    }		
	printSum(res) {
	    this.sum = res;
    }			
	printMsg(msg) {
	    this.msg = msg;
    }	

}
