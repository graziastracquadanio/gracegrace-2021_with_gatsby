import { makeAutoObservable } from 'mobx';

export class UiStore {
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }
}
