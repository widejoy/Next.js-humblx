export const actionTypes: { id: string; label: string; inputLabel?: string }[] =
  [
    { id: "alert", label: "Alert", inputLabel: "Enter Your Alert" },
    { id: "showText", label: "Show Text", inputLabel: "Enter Text" },
    { id: "showImage", label: "Show Image", inputLabel: "Enter Image URL" },
    { id: "refreshPage", label: "Refresh Page" },
    {
      id: "setLocalStorage",
      label: "Set LocalStorage",
      inputLabel: "Enter Key:Value",
    },
    {
      id: "getLocalStorage",
      label: "Get LocalStorage",
      inputLabel: "Enter Key",
    },
    { id: "increaseButtonSize", label: "Increase Button Size" },
    { id: "closeWindow", label: "Close Window" },
    {
      id: "promptAndShow",
      label: "Prompt and Show",
      inputLabel: "Enter Prompt Message",
    },
    {
      id: "changeButtonColor",
      label: "Change Button Color",
    },
    { id: "disableButton", label: "Disable Button" },
  ];
