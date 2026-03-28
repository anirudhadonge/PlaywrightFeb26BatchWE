/**
 * API url : Base URL
 * End Point
 * headers
 * body 
 * method : Get, Put , Post, Delet 
 * reponse 
 *  status
 *  description
 *  responseBody
 * 
 */

import {test,expect} from '@playwright/test'
import ApiEndPoint from './../APIEndPoints/ApiEndPoints.json'
let bookingDetails = {
    "firstname" : "Anirudha",
    "lastname" : "Donge",
    "totalprice" : 150,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-04-01",
        "checkout" : "2025-04-02"
    },
    "additionalneeds" : "Breakfast"
}

let header ={
    "Content-Type": "application/json"
}
test("API Test",async({request})=>{
   const url = process.env.APIBase+ApiEndPoint.CreateBooking;
   console.log(url);
   const response =  await request.post(url,{
    data:bookingDetails,
    headers:header
   })
   expect(response.status()).toEqual(200);
   const body = await response.json();
   console.log(body);

   const getBookingDetails = await request.get(process.env.APIBase+ApiEndPoint.GetBooking+body.bookingid)

   console.log(await getBookingDetails.json())
})