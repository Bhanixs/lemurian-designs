import type { KeyboardEvent } from "react";

/**
 * Lets a clickable image wrapper be reached and opened from the keyboard. The button's accessible
 * name comes from the alt text of the image inside it.
 */
export const imageTriggerProps = {
  role: "button",
  tabIndex: 0,
  onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  },
} as const;
