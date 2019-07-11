import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DatalistComponent} from './datalist/datalist.component';
import{ReactiveformsampleComponent} from './reactiveformsample/reactiveformsample.component';
import{ReactiveforminnerComponent} from './reactiveforminner/reactiveforminner.component';
import{ReactiveformgetsetComponent} from './reactiveformgetset/reactiveformgetset.component';
import{ReactiveformvalidComponent} from './reactiveformvalid/reactiveformvalid.component'

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'datalist'},
{path:'datalist',component:DatalistComponent},
{path:'reactiveformsample',component:ReactiveformsampleComponent},
{path:'reactiveforminner',component:ReactiveforminnerComponent},
{path:'reactiveformgetset',component:ReactiveformgetsetComponent},
{path:'reactiveformvalid',component:ReactiveformvalidComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
