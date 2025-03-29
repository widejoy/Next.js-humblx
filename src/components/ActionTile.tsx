import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ActionTile({
  action,
  removeAction,
}: {
  action: { id: string; type: string; label: string };
  removeAction: (id: string) => void;
}) {
  const actionTypes: { id: string; label: string; inputLabel?: string }[] = [
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
      inputLabel: "Enter Color (optional)",
    },
    { id: "disableButton", label: "Disable Button" },
  ];
  const actionType = actionTypes.find((a) => a.id === action.type);

  return (
    <div className="flex flex-col space-y-2 p-4 border rounded-lg bg-gray-100 w-[250px]">
      <div className="flex justify-between items-center">
        <span className="font-medium">{action.label}</span>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => removeAction(action.id)}
        >
          ✕
        </Button>
      </div>

      {actionType?.inputLabel && (
        <div className="flex flex-col space-y-1">
          <Input className="w-full" placeholder={actionType.inputLabel} />
        </div>
      )}
    </div>
  );
}
