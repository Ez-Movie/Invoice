import {Validators} from "@angular/forms";

export interface IPerson {
  name: string;
  address_of_province: string;
  small_province: string;
  city: string;
  address: string;
  economy_num: string;
  post_code: string;
  national_num: string;
  registration_num: string;
  tel: string;
  fax: string;
}

export interface IProduct{
  sku: string;
  title: string;
  quantity: string;
  base: string;
  base_price: string;
  total_price: string;
  discount: string;
  total_price_after_discount: string;
  tax: string;
  totalPrice_p_totalTax_p_toll: string;
}

export interface ITotal{
  total_for_pay: string;
  total_price: string;
  total_discount: string;
  total_price_after_discount: string;
  total_tax_p_toll: string;
  totalPrice_p_totalTax_p_toll: string;
}

export interface IInf{
  str: string;
  is_Cash: boolean;
}
