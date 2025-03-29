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
