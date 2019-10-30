import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  imageArray: any[];

  constructor(public modalController: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }

  slides = [
    {
      img: 'https://i.ytimg.com/vi/aI4oC5VDaU0/maxresdefault.jpg',
    },
    {
      img: 'https://ed.files-media.com/ud/review/1/153/458592/3-850x567.jpg',
    },
    {
      img: 'https://www.photoschoolthailand.com/wp-content/uploads/2019/05/lensflare_2.jpg',
    }
  ];



}
