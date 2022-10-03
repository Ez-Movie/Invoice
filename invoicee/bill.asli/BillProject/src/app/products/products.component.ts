import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IInf, IPerson, IProduct, ITotal} from "../interfaces/interface";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ITot! : ITotal;
  IInf : IInf;

  constructor(private fb: FormBuilder, private client: HttpClient) { }

  public http$: Observable<IProduct[]>;
  public httpTotal$: Observable<ITotal>;
  public httpInf$: Observable<IInf>;

  ngOnInit(): void {
    this.http$ = this.client.get<IProduct[]>("..\\assets\\mockdata.json");
    this.httpTotal$ = this.client.get<ITotal>("..\\assets\\mocTotal.json");
    this.httpInf$ = this.client.get<IInf>("..\\assets\\mocInfo.json");

    this.httpTotal$.subscribe(r => this.ITot = r );
    this.httpInf$.subscribe(r => this.IInf = r );

 console.log(this.IInf.is_Cash)


  }

  jobForm = this.fb.group({
    skills: this.fb.array([]),
  });
  index: number = 0;

  get skillsForms() {

    return this.jobForm.get('skills') as FormArray;
  }


  addASkillFormGroup() {
    this.index++;

    this.skillsForms.push(
      this.fb.group({
        sku: ['', [Validators.required]],
        title: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        base: ['', [Validators.required]],
        base_price: ['', [Validators.required]],
        total_price: ['', [Validators.required]],
        discount: ['', [Validators.required]],
        total_price_after_discount: ['', [Validators.required]],
        tax: ['123'],
        totalPrice_p_totalTax_p_toll: ['', [Validators.required]],
      })
    );
  }

  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

}
