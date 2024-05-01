import { classNames } from "primereact/utils";
import { StyleFunctionParams } from "./types";

export const CardStyles = {
  card: {
    root: {
      className: classNames(
        "bg-white text-gray-700 shadow-md rounded-md m-2",
        "dark:bg-gray-900 dark:text-white ",
        "cursor-pointer"
      ),
    },
    body: "p-5",
    title: "text-2xl font-bold mb-2",
    subtitle: {
      className: classNames(
        "font-normal mb-2 text-gray-600",
        "dark:text-white/60 "
      ),
    },
    content: "flex justify-center items-center text-5xl font-bold",
    footer: "pt-5",
  },
};

export const DialogStyles = {
  dialog: {
    root: ({ state }: StyleFunctionParams) => ({
      className: classNames(
        "rounded-lg shadow-lg border-0",
        "max-h-[90%] transform scale-100",
        "m-0 w-[50vw]",
        "dark:border dark:border-blue-900/40",
        {
          "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
            state.maximized,
        }
      ),
    }),
    header: {
      className: classNames(
        "flex items-center justify-between shrink-0",
        "bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6",
        "dark:bg-gray-900  dark:text-white/80"
      ),
    },
    headerTitle: "font-bold text-lg",
    headerIcons: "flex items-center ",
    closeButton: {
      className: classNames(
        "flex items-center justify-center overflow-hidden relative",
        "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0",
        "hover:text-gray-700 hover:border-transparent hover:bg-gray-200",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]" // focus
      ),
    },
    closeButtonIcon: "w-4 h-4 inline-block",
    content: ({ state }: StyleFunctionParams) => ({
      className: classNames(
        "overflow-y-auto",
        "bg-white text-gray-700 px-6 pb-8 pt-0",
        "rounded-bl-lg rounded-br-lg",
        "dark:bg-gray-900  dark:text-white/80 ",
        {
          grow: state.maximized,
        }
      ),
    }),
    footer: {
      className: classNames(
        "shrink-0 ",
        "border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg",
        "dark:bg-gray-900  dark:text-white/80"
      ),
    },
    mask: ({ state }: StyleFunctionParams) => ({
      className: classNames("transition duration-200", {
        "backdrop-blur-sm": state.containerVisible,
      }),
    }),
    transition: ({ props }: StyleFunctionParams) => {
      return props.position === "top"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
          }
        : props.position === "bottom"
        ? {
            enterFromClass: "opacity-0 scale-75 translate-y-full",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0",
          }
        : props.position === "left" ||
          props.position === "top-left" ||
          props.position === "bottom-left"
        ? {
            enterFromClass:
              "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0",
          }
        : props.position === "right" ||
          props.position === "top-right" ||
          props.position === "bottom-right"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
          }
        : {
            enterFromClass: "opacity-0 scale-75",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass: "opacity-0 scale-75",
          };
    },
  },
};
