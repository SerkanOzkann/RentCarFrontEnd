import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars:Car[] = [];
  apiUrl="https://localhost:44352/api/"
   constructor(private httpClient:HttpClient) { }

   getCars():Observable<ListResponseModel<Car>>{
     let newPath = this.apiUrl + "cars/getall"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarByColorAndBrand(colorId:number,brandId:number) : Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getcardetailsbycolorandbrand?colorId=" + colorId + "&brandId=" + brandId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
}