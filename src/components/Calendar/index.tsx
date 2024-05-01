import React from "react";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import { es } from "date-fns/locale";
import { CardStyles } from "./tailwind";
import { calendarReducer, initialState, CalendarAction } from "./state";

export const CalendarMonth: React.FC = () => {
  const [state, dispatch] = React.useReducer(calendarReducer, initialState);

  const currentDate = new Date();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const getFormattedWeekday = React.useCallback((date: Date) => {
    const day = format(date, "EEEE", { locale: es });
    return day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
  }, []);

  const getFormattedMonth = React.useCallback((date: Date) => {
    const month = format(date, "MMMM", { locale: es });
    return month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  }, []);

  const handleSetDay = (day: Date) => {
    dispatch({
      type: CalendarAction.SET_DAY,
      payload: { date: day, visible: true },
    });
  };

  const handleCloseDay = () => {
    if (state.selectedDate) {
      dispatch({
        type: CalendarAction.SET_DAY,
        payload: { date: state.selectedDate, visible: false },
      });
    }
  };

  const handleNewTask = () => {
    dispatch({
      type: CalendarAction.SEE_INPUT,
    });
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {daysInMonth.map((day) => (
        <React.Fragment key={day.toISOString()}>
          <Card
            role="button"
            aria-label={`Detalles para ${getFormattedWeekday(day)}`}
            className={CardStyles.card.root.className}
            title={
              <span className="underline">{getFormattedWeekday(day)}</span>
            }
            onClick={() => handleSetDay(day)}
            footer={<span className="text-2xl">{getFormattedMonth(day)}</span>}
          >
            {" "}
            <div className={CardStyles.card.content}>{format(day, "d")} </div>
          </Card>
        </React.Fragment>
      ))}

      {state.visible && (
        <Dialog
          className="bg-white rounded-lg w-1/2 h-full "
          header={`Organiza tu día: ${format(
            state.selectedDate as Date,
            "EEEE d 'de' MMMM",
            {
              locale: es,
            }
          )}`}
          visible={state.visible}
          modal
          draggable={false}
          onHide={() => handleCloseDay()}
          position="top"
        >
          <div className="flex flex-row space-x-4 items-center mt-2">
            <Button
              severity={state.seeInput ? "danger" : "success"}
              onClick={() => handleNewTask()}
            >
              {state.seeInput ? "-" : "+"}
            </Button>
            {state.seeInput && <InputText></InputText>}
          </div>
        </Dialog>
      )}
    </div>
  );
};
