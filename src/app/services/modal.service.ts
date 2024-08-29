import { Injectable } from '@angular/core';

interface IModel {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModel[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  isModelOpen() {
    return true;
  }

  toggleModal() {
    //this.visible = !this.visible;
  }
}
