import { observer } from 'mobx-react';
import React, { FC } from 'react';
import {Event} from '../models/Event';

export interface EventLayoutProps {
  events: Event[];
  keyFn: (event: any) => string | number;
  contentFn: (event: any) => string | number;
}

export const EventLayout: FC<EventLayoutProps> = observer(({events, keyFn, contentFn}) => {
  return (
    <ul>
      {events.map(event =>
          <li key={keyFn(event)}>
            {contentFn(event)}
          </li>
      )}
    </ul>
  );
})