"use client";
import { ActionTile } from "@/components/ActionTile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { actionTypes } from "@/utils/actionTypes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [buttonLabel, setButtonLabel] = useState("");
  const [actions, setActions] = useState<
    { id: string; type: string; label: string; value: string }[]
  >([]);

  useEffect(() => {
    const savedData = localStorage.getItem("configData");
    if (savedData) {
      const { buttonLabel, actions } = JSON.parse(savedData);
      setButtonLabel(buttonLabel);
      setActions(actions);
    }
  }, []);

  const addAction = (type: string) => {
    const action = actionTypes.find((a) => a.id === type);
    if (!action) return;
    setActions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type: action.id,
        label: action.label,
        value: "",
      },
    ]);
  };

  const removeAction = (id: string) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
  };

  const updateActionValue = (id: string, value: string) => {
    setActions((prev) =>
      prev.map((action) => (action.id === id ? { ...action, value } : action))
    );
  };

  const saveData = () => {
    localStorage.setItem(
      "configData",
      JSON.stringify({ buttonLabel, actions })
    );
    alert("Configuration saved!");
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

      <div className="w-[250px] space-y-2">
        {actions.map((action) => (
          <ActionTile
            key={action.id}
            action={action}
            removeAction={removeAction}
            updateActionValue={updateActionValue}
          />
        ))}
      </div>

      <Button className="mt-5" onClick={saveData}>
        Save Data
      </Button>
      <Link
        href={"/output"}
        className="p-2 mt-5 bg-black text-white rounded-4xl"
      >
        Navigate to output page
      </Link>
    </div>
  );
}
