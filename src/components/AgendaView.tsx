import { observer } from 'mobx-react';
import React, {FC} from 'react';
import { AppStore } from '../stores/AppStore';
import { AgendaEventLayout } from './AgendaEventLayout';

export interface AgendaViewProps {
  store: AppStore;
}

export const AgendaView: FC<AgendaViewProps> = observer(({store}) => {

  return (
    <div>
      {store.eventStore.events.map(event =>
          <AgendaEventLayout event={event} onDeleteEvent={store.eventStore.deleteEvent} />
      )}
    </div>
  );
})
