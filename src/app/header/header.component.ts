import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("parent") private parentRef: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit() {
   console.log(this.parentRef.nativeElement.children)
let links:any=this.parentRef.nativeElement.children
for (let el of links){
el.className=""
}

  }

}
