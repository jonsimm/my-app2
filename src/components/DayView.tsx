import { observer } from 'mobx-react';
import React, {FC} from 'react';
import { AppStore } from '../stores/AppStore';
import { EventLayout } from './EventLayout';

export interface DayViewProps {
  store: AppStore;
}

export const DayView: FC<DayViewProps> = observer(({store}) => {
  return (
    <EventLayout
      events={store.eventStore.events.slice()}
      keyFn={e => e.id}
      contentFn={e => e.description}
    />
  );
})