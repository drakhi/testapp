import { AfterViewInit, Component, OnInit, ViewChild ,ViewChildren,QueryList} from '@angular/core';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit,AfterViewInit {
 // @ViewChild(DataTableDirective)

  @ViewChildren(DataTableDirective)
  datatableElement:QueryList< DataTableDirective>;

  dtOptions: any = {
    columnDefs: [ { orderable: false, targets: [0] } ]
  };
  dtOptions1: any = {};
  dtOptions2: any = {};

  data:any=[
   {'Name':'Tiger Nixon',
   'Position':'System Architect',
    'Office':'Tokyo',
    'Age':'63',
    'Startdate':'2011/04/26',
    'Salary':'$320,8330'
  },
  {'Name':'Tiger Nixon',
  'Position':'Accountant',
   'Office':'Edinburgh',
   'Age':'61',
   'Startdate':'2011/04/25',
   'Salary':'$320,800'
 },
 {'Name':'Ashton Cox',
 'Position':'Junior Technical Author',
  'Office':'Edinburgh',
  'Age':'66',
  'Startdate':'2011/04/29',
  'Salary':'$320,344'
}
  ]
  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(){
   console.log(this.datatableElement)
    this.datatableElement.forEach((dtElement: DataTableDirective,i) => {
 
     if(i==0){
      dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        $('table.tableone tfoot tr').insertAfter($('table.tableone thead tr'));
          dtInstance.columns().every(function () {
            const that = this;
            $('input', this.footer()).on('keyup change', function () {
              if (that.search() !== this['value']) {
                that
                  .search(this['value'])
                  .draw();
              }
            });
          });
      
      
      });
     }
else if(i==1){
  dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  $('table.tabletwo tfoot tr').insertAfter($('table.tabletwo thead tr'));
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
}
else if(i==2){

  dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    $('table.tablethree tfoot tr').insertAfter($('table.tablethree thead tr'));
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });

}

     
    });

    // this.datatableElement._results[0].dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('table.tableone tfoot tr').insertAfter($('table.tableone thead tr'));
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (that.search() !== this['value']) {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });

    // this.datatableElement._results[1].dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('table.tabletwo tfoot tr').insertAfter($('table.tabletwo thead tr'));
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (that.search() !== this['value']) {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });
    // this.datatableElement._results[2].dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('table.tablethree tfoot tr').insertAfter($('table.tablethree thead tr'));
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (that.search() !== this['value']) {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });


  }
}
