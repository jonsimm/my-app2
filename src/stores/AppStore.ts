
import { makeObservable, observable } from "mobx";
import { EventService } from "../services/EventService";
import { EventStore } from "./EventStore";
import { ViewStore } from "./ViewStore";

export class AppStore {
  @observable
  eventStore: EventStore;

  @observable
  viewStore: ViewStore;

  constructor() {
    makeObservable(this)
    // this.eventStore = new EventStore(this, new EventService("/api"));
    this.eventStore = new EventStore(this, new EventService("https://myappapi-jonsimm.azurewebsites.net/api"));
    this.viewStore = new ViewStore(this);
  }
}