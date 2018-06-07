import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "贵州茅台",600, 5.0, "酒类龙头，贵州",["龙头","酒类", "价值投资"]),
      new Stock(2, "五粮液",82, 4.0, "四川名酒，行业领先",["龙头","酒类", "价值投资"]),
      new Stock(3, "长城汽车",11.2, 3.0, "民营汽车，SUV领导者",["重资产","汽车"]),
      new Stock(4, "中国平安",63, 4.5, "保险龙头，大金融",["大金融","保险", "价值投资"]),
      new Stock(5, "兴业银行", 17, 3.9, "银行,低估",["银行","高分红", "价值投资"]),
    ];
  }

}

export class Stock {
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<String>) {

    }
}