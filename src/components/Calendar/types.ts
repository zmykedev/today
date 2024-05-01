export interface DialogState {
  maximized?: boolean;
  containerVisible?: boolean;
}

export interface DialogProps {
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}

export interface StyleFunctionParams {
  state: DialogState;
  props: DialogProps;
}
