import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors:Color[] = [];
  apiUrl="https://localhost:44352/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
 return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
