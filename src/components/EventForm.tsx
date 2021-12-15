import {FC, useState, ChangeEvent} from 'react';
import {Event} from '../models/Event';

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export interface EventFormProps {
  onSubmitEvent: (event: Event) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
  const [ eventForm, setForm ] = useState ({
    startDateTime: "",
    endDateTime: "",
    timeOfDay: 0,
    dayOfWeek: 0,
    description: "",
    student: "",
  });

  // called when the HTML changes this updates the state
  const change = (e: ChangeEvent<HTMLFormControls>) => {
      setForm({
      ...eventForm,
      [ e.target.name ] : e.target.type === "number" ? 
                                  Number(e.target.value) 
                                : e.target.value,
      })
  };

  const submitEvent = () => {
    props.onSubmitEvent({...eventForm});
  }

  return (
    <form>
      <div>
        <label>Description</label>
        <input type="text" name="description" value={eventForm.description} onChange={change}></input>
      </div>
      <div>
        <label>Start Time</label>
        <input type="datetime-local" name="startDateTime" value={eventForm.startDateTime} onChange={change}></input>
      </div>
      <div>
        <label>End Time</label>
        <input type="datetime-local" name="endDateTime" value={eventForm.endDateTime} onChange={change}></input>
      </div>
      <div>
        <label>Student</label>
        <input type="text" name="student" value={eventForm.student} onChange={change}></input>
      </div>
      <button type="button" onClick={submitEvent}>Add Event</button>
    </form>
  );
};