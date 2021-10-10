import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading: HTMLIonLoadingElement;

  constructor(
    public loadingController: LoadingController
  ) {
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    //   duration: 2000
    });
    return true;
  }

  async open() {
    await this.presentLoading();
    await this.loading.present();
  }

  async close() {
    await this.loading.dismiss();
  }
}
