import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay:true
  };

  slides = [
    {
      img: 'http://www.นิคมเครื่องใช้ไฟฟ้า.com/uploads/1517216961946528.jpg',
    },
    {
      img: 'https://i1.wp.com/th-test-11.slatic.net/p/ba57ea6d857faed81d90650a0c67f0c2.jpg_300x300.jpg',
    },
    {
      img: 'https://www.thaihometown.com/article/photo/s5668/b2017062214981109935668.jpg',
    },
    {
      img: 'https://www.whereonsale.com/wp-content/uploads/2018/10/43738844_2149919055026780_3965705817369346048_n-e1539651442226.jpg',
    },
    {
      img: 'https://s3.ap-southeast-1.amazonaws.com/media-prod-tmgapp02.themall.co.th/media/items/20ea92b1874d5e1029c9ed6bba1c031a27744b7e.jpeg',
    },
    {
      img: 'https://www.checkraka.com/uploaded/gadget/19/19130bd38ba3463e4741114196151d5e.jpg',
    }
  ];

}
