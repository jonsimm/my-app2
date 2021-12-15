import React, { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react';

import { AppStore } from '../stores/AppStore';

export interface ViewHeaderProps {
  store: AppStore;
}

export const ViewHeader : FC<ViewHeaderProps> = observer((props) => {
      return(
        <div>
          <h1>View Header - {props.store.viewStore.currentViewType}</h1>
          <div onChange={(e: ChangeEvent<HTMLInputElement>) => props.store.viewStore.changeViewType(e.target.value)}>
            <input 
              type="radio"
              name="viewType"
              checked={props.store.viewStore.currentViewType === "agenda"}
              value="agenda" />Agenda
            <input
              type="radio"
              name="viewType"
              checked={props.store.viewStore.currentViewType === "day"}
              value="day"/>Day
          </div>
        </div>
      );
})