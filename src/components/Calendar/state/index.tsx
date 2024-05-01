import { produce } from "immer";
import { Action } from "./types";

export type State = {
  visible: boolean;
  selectedDate: Date | null;
  tasks: Record<string, string[]>;
  seeInput: boolean;
};

export enum CalendarAction {
  SET_DAY = "SET_DAY",
  ADD_TASK = "ADD_TASK",
  CLOSE_DIALOG = "CLOSE_DIALOG",
  SEE_INPUT = "SEE_INPUT",
}

export const initialState: State = {
  visible: false,
  selectedDate: null,
  tasks: {},
  seeInput: false,
};

interface SetDayPayload {
  date: Date;
  visible: boolean;
}

const reducer = (state: State = initialState, action: Action<unknown>) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case CalendarAction.SET_DAY:
        if (typeof action.payload === "object" && action.payload !== null) {
          const { date, visible } = action.payload as SetDayPayload;
          draftState.selectedDate = date;
          draftState.visible = visible;
        }
        break;

      case CalendarAction.SEE_INPUT:
        draftState.seeInput = !draftState.seeInput;
        break;

      default:
        break;
    }
  });

export const calendarReducer = reducer;
