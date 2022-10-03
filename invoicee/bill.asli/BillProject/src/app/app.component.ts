import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SpecificationComponent } from './specification/specification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BillProject';

  @ViewChildren(SpecificationComponent ,{read:SpecificationComponent }) aSpecificationComponents! : QueryList<SpecificationComponent>;

  public ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.aSpecificationComponents.forEach((comp) => {
      console.log(comp.iPerson_Seller);
    })
  }
}
