import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {IPerson, IProduct} from "../interfaces/interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  iPerson_Seller: IPerson = {
    name: '',
    address_of_province: '',
    small_province: '',
    city: '',
    address: '',
    economy_num: '',
    post_code: '',
    national_num: '',
    registration_num: '',
    tel: '',
    fax: '',
  };





  constructor(private fb : FormBuilder,  private client: HttpClient) {
  }

  public http$: Observable<IPerson>;


  personForm= this.fb.group({
    name: [''],
    address_of_province: [''],
    small_province: [''],
    city: [''],
    address: [''],
    economy_num: [],
    post_code: [],
    national_num: [],
    registration_num: [],
    tel: [],
    fax: [],
  });


  Ipers! : IPerson;
  @Input() titel1:string ="";
  tmp_ids: string[] =[];

  ngOnInit(): void {
    console.log(this.tmp_ids);

    if(this.titel1.includes("خریدار")){
      this.http$ = this.client.get<IPerson>("..\\assets\\mocbuyer.json");
    }else{
      this.http$ = this.client.get<IPerson>("..\\assets\\mocseller.json");
    }

    this.http$.subscribe(r => this.Ipers = r );
    for (let i = 0; i < 11; i++) {
      this.tmp_ids[i] = (String(i) + this.titel1);
    }


  }



  public regis(
  ){
    this.iPerson_Seller = this.personForm.value as IPerson;
    console.table(this.iPerson_Seller );
  }

  public test(): void {

    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

  }


}



