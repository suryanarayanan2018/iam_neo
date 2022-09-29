import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }


foodDetails = [
{

    id:1,
    foodName:"PIZZA",
    foodDetails:"YUMMYY .",
    foodPrice:200,
    foodImg:"https://media.istockphoto.com/photos/whole-italian-pizza-on-wooden-table-with-ingredients-picture-id1048400936?k=20&m=1048400936&s=612x612&w=0&h=fPRKreYthnwvfa1x9WT6e13PtTSvK9ClhxkKOM6zhSk="
},
{

  id:2,
  foodName:"BURGER",
  foodDetails:"TASTY .",
  foodPrice:300,
  foodImg:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:3,
  foodName:"BROWNIE",
  foodDetails:"SWEETY .",
  foodPrice:250,
  foodImg:"https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJvd25pZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:4,
  foodName:"ICECREAM",
  foodDetails:"MELTING .",
  foodPrice:400,
  foodImg:"https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{

  id:5,
  foodName:"OREO SHAKE",
  foodDetails:"CRUNCHY OREO .",
  foodPrice:100,
  foodImg:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:6,
  foodName:"APPLE JUCIE",
  foodDetails:"APPLE .",
  foodPrice:150,
  foodImg:"https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{

  id:7,
  foodName:"MILK SHAKE",
  foodDetails:"MILK .",
  foodPrice:180,
  foodImg:"https://media.istockphoto.com/photos/berries-milkshake-with-cream-decorated-with-fruit-on-table-isolated-picture-id1321518391?k=20&m=1321518391&s=612x612&w=0&h=VP9DaH_EIdKpEnOxByOyD0Bp_8N3zrKEVzAE0uhRC_I="
},
{

  id:8,
  foodName:"CHICKEN",
  foodDetails:"NON-VEG  .",
  foodPrice:280,
  foodImg:"https://media.istockphoto.com/photos/smoked-and-spicy-tandoori-chicken-grilling-with-smoke-picture-id995903748?k=20&m=995903748&s=612x612&w=0&h=km1d5HjrFbezaZttak_Ex9TZ70qH_Mht0EOLNJlH_Jg="
},
{

  id:9,
  foodName:"MUTTON",
  foodDetails:"NON-VEG.",
  foodPrice:380,
  foodImg:"https://media.istockphoto.com/photos/curry-and-rooti-picture-id540119192?k=20&m=540119192&s=612x612&w=0&h=K90wJwA0pcZEaXnmTtz6kuB-nfCWb1b3FwustVoR6OA="
},
{

  id:10,
  foodName:"FISH FRY",
  foodDetails:"NON-VEG .",
  foodPrice:300,
  foodImg:"https://media.istockphoto.com/photos/delicious-crispy-king-fish-fry-also-known-as-indian-surmai-served-picture-id1292615420?k=20&m=1292615420&s=612x612&w=0&h=Lc4WR-GU06Ke4DvDCZ80OIasS2RX_Ajw6w2nnqpFi-w="
},
{

  id:11,
  foodName:"MEALS",
  foodDetails:"PURE-VEG .",
  foodPrice:160,
  foodImg:"https://media.istockphoto.com/photos/south-indian-food-picture-id481149282?k=20&m=481149282&s=612x612&w=0&h=GIQNHyiT8h6iBvPtAEnb61R8xVIpXvSmKbFsssFGryU="
},
{

  id:12,
  foodName:"DOSA-IDLY",
  foodDetails:"PURE-VEG .",
  foodPrice:80,
  foodImg:"https://media.istockphoto.com/photos/ghee-roast-dosa-and-idlii-picture-id1306134869?k=20&m=1306134869&s=612x612&w=0&h=yD5ILJGeGrgpN5smtWG7AEPjU2ylMqP2EqT9I7_fkHc="
},

]

}
