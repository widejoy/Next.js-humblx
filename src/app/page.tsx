"use client";
import { ActionTile } from "@/components/ActionTile";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

const actionTypes = [
  { id: "alert", label: "Alert" },
  { id: "showText", label: "Show Text" },
  { id: "showImage", label: "Show Image" },
  { id: "refreshPage", label: "Refresh Page" },
];

export default function Home() {
  const [buttonLabel, setButtonLabel] = useState("");
  const [actions, setActions] = useState<
    { id: string; type: string; label: string }[]
  >([]);

  const addAction = (type: string) => {
    const action = actionTypes.find((a) => a.id === type);
    if (!action) return;
    setActions([
      ...actions,
      { id: crypto.randomUUID(), type: action.id, label: action.label },
    ]);
  };

  const removeAction = (id: string) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-6">
      <Input
        className="w-[200px] mt-10"
        placeholder="Enter Button Label"
        value={buttonLabel}
        onChange={(e) => setButtonLabel(e.target.value)}
      />

      <Select onValueChange={addAction}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Add Action" />
        </SelectTrigger>
        <SelectContent>
          {actionTypes.map((action) => (
            <SelectItem key={action.id} value={action.id}>
              {action.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Actions List */}
      <div className="w-[250px] space-y-2">
        {actions.map((action) => (
          <ActionTile
            key={action.id}
            action={action}
            removeAction={removeAction}
          />
        ))}
      </div>
    </div>
  );
}
