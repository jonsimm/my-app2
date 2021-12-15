import { observer } from 'mobx-react';
import React, { FC } from 'react';
import {Event} from '../models/Event';
import './AgendaEventLayout.css';

export interface AgendaEventLayoutProps {
  event: Event;
  onDeleteEvent: (eventId: number) => void;
}

export const AgendaEventLayout: FC<AgendaEventLayoutProps> = observer(({event, onDeleteEvent}) => {
  const formatDateTime = (dateTime: string) => {
    return (new Date(dateTime).toTimeString())
  }

  const deleteEvent = () => {
    onDeleteEvent(event.id!);
  }

  return (
    <div className="AgendaEvent-frame" key={event.id}>
      <div className="AgendaEvent-description">{event.description}</div>
      <div className="AgendaEvent-student">{event.student}</div>
      <button className="AgendaEvent-button" onClick={deleteEvent}>X</button>
      <div className="AgendaEvent-label">Start:</div>
      <div className="AgendaEvent-time">{formatDateTime(event.startDateTime)}</div>
      <div className="AgendaEvent-label">End:</div>
      <div className="AgendaEvent-time">{formatDateTime(event.endDateTime)}</div>
    </div>
  );
})