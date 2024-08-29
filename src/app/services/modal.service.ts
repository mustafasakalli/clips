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

  isModelOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
