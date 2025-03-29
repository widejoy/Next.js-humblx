import { actionTypes } from "@/utils/actionTypes";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ActionTile({
  action,
  removeAction,
  updateActionValue,
}: {
  action: { id: string; type: string; label: string; value: string };
  removeAction: (id: string) => void;
  updateActionValue: (id: string, value: string) => void;
}) {
  const actionType = actionTypes.find((a) => a.id === action.type);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="font-medium">{action.label}</div>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => removeAction(action.id)}
        >
          ✕
        </Button>
      </div>

      {actionType?.inputLabel && (
        <div className="flex flex-col space-y-1 mt-2">
          <Input
            className="w-full"
            placeholder={actionType.inputLabel}
            value={action.value}
            onChange={(e) => updateActionValue(action.id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
