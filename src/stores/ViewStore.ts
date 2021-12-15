import { action, makeObservable, observable } from "mobx";
import {Event} from '../models/Event';
import { AppStore } from "./AppStore";

export class ViewStore {
  @observable
  appStore: AppStore;

  @observable
  currentViewType: string;

  constructor(appStore: AppStore) {
    makeObservable(this)
    this.appStore = appStore;
    this.currentViewType = "agenda";
  }

  @action.bound
  changeViewType(newViewType: string) {
    this.currentViewType = newViewType;
  }

  @action.bound
  addEvent(event: Event) {
    this.appStore.eventStore.addEvent(event);
  }
}