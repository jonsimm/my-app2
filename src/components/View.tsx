import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';

import { AppStore } from '../stores/AppStore';

import { ViewHeader } from './ViewHeader';
import { DayView } from './DayView';
import { EventForm } from './EventForm';
import { AgendaView } from './AgendaView';

export interface ViewProps {
  store: AppStore;
}

export const View : FC<ViewProps> = observer((props) => {

  useEffect(() => {
    props.store.eventStore.refreshEvents();
  }, [props.store]);

  return(
    <>
      <ViewHeader
        store={props.store}
      />
        <>
          {props.store.viewStore.currentViewType === "agenda" ?
              <AgendaView store={props.store} />
            : <DayView store={props.store} />
          }
        </>
      <EventForm onSubmitEvent={props.store.viewStore.addEvent} />
    </>
  );
})
