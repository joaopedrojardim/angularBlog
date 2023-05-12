import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  photoCover:string = 'https://criticalhits.com.br/wp-content/uploads/2022/05/Rengoku-vs-Akaza.webp'
  contentTitle:string = ''
  contentDescription:string = ''

  private id:string | null= '0'

  constructor (private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)

    this.photoCover = result[0].photo
    this.contentTitle = result[0].title
    this.contentDescription = result[0].description
  }
}
