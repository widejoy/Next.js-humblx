import { Button } from "./ui/button";

export function ActionTile({
  action,
  removeAction,
}: {
  action: { id: string; label: string };
  removeAction: (id: string) => void;
}) {
  return (
    <div className="flex justify-between items-center p-2 border rounded-lg bg-gray-100">
      <span>{action.label}</span>
      <Button
        variant="destructive"
        size="icon"
        onClick={() => removeAction(action.id)}
      >
        ✕
      </Button>
    </div>
  );
}
