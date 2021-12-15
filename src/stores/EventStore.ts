import { action, makeObservable, observable, runInAction } from 'mobx';
import { Event } from '../models/Event';
import { IEventService } from '../services/EventService';
import { AppStore } from './AppStore';

export class EventStore {
  @observable
  appStore: AppStore;
  
  @observable
  events: Event[] = [];

  constructor(appStore: AppStore, private eventSvc: IEventService)
  {
    makeObservable(this)
    this.appStore = appStore;
  }

  @action.bound
  async refreshEvents()
  {
    const events = await this.eventSvc.allEvents();

    runInAction(() => {
      this.events = events;
    });
  }

  @action.bound
  addEvent(event: Event)
  {
    this.events.push({
      ...event,
      id: Math.max(...this.events.map(e => e.id!), 0) + 1,
    });
    this.eventSvc.appendEvent(event);
  }

  @action.bound
  deleteEvent(eventId: number)
  {
    this.events.splice(this.events.findIndex(e => e.id === eventId),1);
    this.eventSvc.removeEvent(eventId);
  }
}