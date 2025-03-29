"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [buttonLabel, setButtonLabel] = useState("Configured Button");
  const [actions, setActions] = useState<{ type: string; value?: string }[]>(
    []
  );
  const [buttonClass, setButtonClass] = useState("px-6 py-2");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("configData");
    if (savedData) {
      const { buttonLabel, actions } = JSON.parse(savedData);
      setButtonLabel(buttonLabel || "Configured Button");
      setActions(actions || []);
    }
  }, []);

  const executeActions = () => {
    let newClasses = "px-6 py-2";
    let isDisabled = false;
    let newImageSrc: string | null = null;

    actions.forEach(({ type, value }) => {
      switch (type) {
        case "alert":
          alert(value || "No alert message");
          break;
        case "showText":
          alert(value || "No text provided");
          break;
        case "showImage":
          alert("Image URL: " + value + "is displayed");
          newImageSrc = value || null;
          break;
        case "refreshPage":
          alert("Page is refreshing");
          window.location.reload();
          break;
        case "setLocalStorage":
          if (value) {
            const [key, val] = value.split(":");
            if (key && val) {
              localStorage.setItem(key.trim(), val.trim());
              alert(`Key: ${key.trim()}, Value: ${val.trim()} has been set`);
            }
          }
          break;
        case "getLocalStorage":
          if (value) {
            alert(localStorage.getItem(value.trim()) || "No value found");
          }
          break;
        case "increaseButtonSize":
          alert("Button size is increased");
          newClasses += " text-xl p-4";
          break;
        case "changeButtonColor":
          alert("Button color is changed");
          newClasses += " bg-blue-500";
          break;
        case "disableButton":
          alert("Button is disabled");
          isDisabled = true;
          break;
        case "promptAndShow":
          const userInput = prompt(value || "Enter input");
          if (userInput) alert(userInput);
          break;
        case "closeWindow":
          window.close();
          break;
        default:
          console.warn("Unknown action type", type);
      }
    });

    setButtonClass(newClasses);
    setIsButtonDisabled(isDisabled);
    setImageSrc(newImageSrc);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Button
        id="actionButton"
        className={buttonClass}
        onClick={executeActions}
        disabled={isButtonDisabled}
      >
        {buttonLabel}
      </Button>
      {imageSrc && (
        <img src={imageSrc} alt="Displayed" className="mt-4 w-48 h-48" />
      )}
    </div>
  );
}
