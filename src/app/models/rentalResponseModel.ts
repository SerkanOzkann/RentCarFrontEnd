import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalPresponseModel extends ResponseModel{
    data:Rental[],
    
}