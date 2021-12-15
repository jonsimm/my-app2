import { Event } from '../models/Event'

export interface IEventService {
  allEvents: () => Promise<Event[]>;
  appendEvent: (event: Event) => Promise<void>;
  removeEvent: (eventId: number) => Promise<void>;
}

export class EventService implements IEventService {
  constructor(private baseUrl: string) {}

  private getCollectionUrl() 
  {
      return this.baseUrl + '/events';
  }
  
  private getElementUrl(eventId: number) 
  {
      return this.baseUrl + '/events/' + encodeURIComponent(eventId);
  }
  
  private getOptions(method = 'GET', body: object | null = null) 
  {
      const options: RequestInit = 
      {
          // method: method,
          method,
      };

      const headers: { [ x: string ]: string } = {};

      if (method === 'PUT' || method ==='POST') 
      {
          headers['Content-Type'] = 'application/json';
      }

      if (Object.getOwnPropertyNames(headers).length > 0) 
      {
          options.headers = headers;
      }

      if (body !== null) 
      {
          options.body = JSON.stringify(body);
      }

      return options;
  }
    
  async allEvents() {
      const res = await fetch(this.getCollectionUrl());
      const responseBody = await res.json();

      // Note the new service returns an object with a key named events which is the array. The mock was/is different, it will return the array directly.
      return responseBody.events;
  }

  async appendEvent(event: Event) {
    const res = await fetch(this.getCollectionUrl(), this.getOptions('POST', event));
    return res.json();
  }

  async removeEvent(eventId: number)
  {
    const res = await fetch(this.getElementUrl(eventId), this.getOptions("DELETE"));
    return res.json();
  }
}