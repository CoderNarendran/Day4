import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  districts:any =[

    {
      id:1,
      title: "Thiruvananthapuram",
      image:"../../../assets/trivandrum.jpeg",
      description:"Thiruvananthapuram District is the southernmost district in the Indian state of Kerala. The district was created in 1949, with its headquarters in the city of Thiruvananthapuram, which is also Kerala's administrative centre. The present district was created in 1956 by separating the four southernmost Taluks of the erstwhile district to form Kanyakumari district. The city of Thiruvananthapuram is also known as the Information technology capital of the State, since it is home to the first and largest IT park in India, Technopark, established in 1990. The district is home to more than 9% of total population of the state.",
      wiki:"https://en.wikipedia.org/wiki/Thiruvananthapuram_district"
    },
  
    {
      id:2,
      title:"Kollam",
      image:"../../../assets/kollam.jpeg",
      description:"Kollam district (formerly Quilon district) is one of 14 districts of the state of Kerala, India. The district has a cross-section of Kerala's natural attributes; it is endowed with a long coastline, a major Laccadive Sea seaport and an inland lake (Ashtamudi Lake). The district has many water bodies. Kallada River is one among them, and the east side land of river is East Kallada and the west side land is West Kallada.",
      wiki:"https://en.wikipedia.org/wiki/Kollam_district"
    },
    {
      id:3,
      title:"Pathanamthitta",
      image:"../../../assets/pathanamthitta.jpeg",
      description:"Pathanamthitta is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km2. It is the administrative capital of Pathanamthitta district. The town has a population of 37,538. The Hindu pilgrim centre Sabarimala is situated in the Pathanamthitta district; as the main transport hub to Sabarimala, the town is known as the 'Pilgrim Capital of Kerala'.Pathanamthitta District, the thirteenth revenue district of the State of Kerala, was formed with effect from 1 November 1982, with headquarters at Pathanamthitta. Forest covers more than half of the total area of the District. Pathanamthitta District ranks the 7th in area in the State. The district has its borders with Allepey, Kottayam, Kollam and Idukki districts of Kerala and Tamil Nadu.Nearest City Is Thiruvalla,Located At A Distance Of 30 km .Thiruvalla Railway Station Is 30 km via Thiruvalla-Kumbazha Highway.Buses Ply Every 30 Minutes From Thiruvalla To Pathanamthitta & Vice Versa.",
      wiki:"https://en.wikipedia.org/wiki/Pathanamthitta"
  },
  
  {
    id:4,
    title:"Alappuzha",
    image:"../../../assets/alappuzha.jpeg",
    description:"Alappuzha or Alleppey is the administrative headquarters of Alappuzha district in state of Kerala, India. The Backwaters of Alappuzha are one of the most popular tourist attractions in India which attracts millions of domestic and international tourists.",
    wiki:"https://en.wikipedia.org/wiki/Alappuzha"
  },
  
  {
    id:5,
    title:"Kottayam",
    image:"../../../assets/kottayam.jpeg",
    description:"Kottayam is one of 14 districts in the Indian state of Kerala. Kottayam district comprises six municipal towns: Kottayam, Changanassery, Pala, Erattupetta, Ettumanoor, and Vaikom. It is the only district in Kerala that neither borders the Arabian Sea nor any other states.",
    wiki:"https://en.wikipedia.org/wiki/Kottayam_district"
  
  },
  
  {
    id:6,
    title:"Idukki",
    image:"../../../assets/idukki.jpeg",
    description:"Idukki is one of the 14 districts in the Indian state of Kerala.It is the largest district in Kerala and lies amid the Cardamom Hills of Western Ghats in Kerala. Idukki district contains two municipal towns - Kattappana and Thodupuzha, and five taluks.",
    wiki:"https://en.wikipedia.org/wiki/Idukki_district"
  
  },
  
  {
    id:7,
    title:"Ernakulam",
    image:"../../../assets/eranakulam.jpeg",
    description:"Ernakulam is the central business district of the city of Kochi, Kerala, India. It is the namesake of Ernakulam district. The eastern part of Kochi city is mainly known as Ernakulam, while the western part of it after the Venduruthy Bridge is called as Western Kochi.Many major establishments, including the Kerala High Court, the office of the Kochi Municipal Corporation and the Cochin Shipyard are situated in Ernakulam. It is also the most urbanized area in the city of Kochi.",
    wiki:"https://en.wikipedia.org/wiki/Ernakulam"
  }


]
  
  
  
constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.getDetails();
  }
  id:any;
  data:any;

  getDetails(){
    this.id = this.route.snapshot.params["id"];
    this.data = this.districts.filter((d:any) => d.id == this.id)
  }

}