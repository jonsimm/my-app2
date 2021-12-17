using System.Collections.Generic;

public class EventSpecification
{
  public EventSpecification() {}

  public EventSpecification(Event eventIn)
  {
    id = eventIn.id;
    startDateTime = eventIn.startDateTime;
    endDateTime = eventIn.endDateTime;
    number = eventIn.number;
    dayOfWeek = eventIn.dayOfWeek;
    description = eventIn.description;
    student = eventIn.student;
  }

  public Event ToEvent()
  {
    Event eventOut = new Event();

    eventOut.id = id;
    eventOut.startDateTime = startDateTime;
    eventOut.endDateTime = endDateTime;
    eventOut.number = number;
    eventOut.dayOfWeek = dayOfWeek;
    eventOut.description = description;
    eventOut.student = student;

    return eventOut;
  }
  public uint id { get; set; }

  public string startDateTime { get; set; }

  public string endDateTime { get; set; }

  public uint number { get; set; }

  public uint dayOfWeek { get; set; }

  public string description { get; set; }

  public string student { get; set; }
}

public class EventCollection
{
  [Newtonsoft.Json.JsonProperty(PropertyName = "events")]
  List<EventSpecification> eventList;

  // static, create blank
  public static EventCollection CreateEmpty()
  {
    EventCollection events =  new EventCollection();
    events.eventList = new List<EventSpecification>();

    return events;
  }

  // static, load from cloud block block (or load from json)
  public static EventCollection CreateFromEvents(List<EventSpecification> inputEvents)
  {
    EventCollection events = CreateEmpty();

    foreach (var item in inputEvents)
    {    
      events.eventList.Add(item);
    }

    return events;
  }
  public List<EventSpecification> GetAllEventSpecs()
  {
    return eventList;
  }

  // get all events
  public List<Event> GetAllEvents()
  {
    List<Event> outputEvents = new List<Event>();

    foreach (var eventSpec in eventList)
    {
      outputEvents.Add(eventSpec.ToEvent());
    }

    return outputEvents;
  }

  // add 
  public void AddOrUpdateEvent(Event myEvent)
  {
    int existingIndex = eventList.FindIndex(e => e.id == myEvent.id);
    EventSpecification eventSpec = new EventSpecification(myEvent);

    if (existingIndex == -1)
    {
      eventList.Add(eventSpec);
    }
    else
    {
      eventList[existingIndex] = eventSpec;
    }
  }

  // delete event
  public void DeleteEvent(int id)
  {
    eventList.RemoveAll(e => e.id == id);
  }
}