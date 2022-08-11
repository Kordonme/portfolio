import { useCallback, useEffect, useRef } from "react";
import avatarUrl from "../../assets/avatar.svg";

export const Avatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLObjectElement>(null);

  const handleAvatarMouseEnter = useCallback(() => {
    toggleEyes("closed");
  }, []);

  const handleAvatarMouseLeave = useCallback(() => {
    toggleEyes("opened");
  }, []);

  const toggleEyes = useCallback((state: "opened" | "closed") => {
    const isEyesOpened = state === "opened";
    const doc = avatarRef.current?.contentDocument;

    if (!doc) {
      return;
    }

    const closed = doc?.getElementById("eyes_closed");
    const open = doc?.getElementById("eyes_open");

    if (closed && open) {
      closed.style.display = isEyesOpened ? "none" : "block";
      open.style.display = isEyesOpened ? "block" : "none";
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toggleEyes("closed");
      setTimeout(() => toggleEyes("opened"), 120);
    }, 1500);
  }, []);

  return (
    <div
      onMouseEnter={handleAvatarMouseEnter}
      onMouseLeave={handleAvatarMouseLeave}
      ref={containerRef}
      className="select-none flex flex-shrink-0 rounded-full w-48 h-48 overflow-hidden bg-red-600 items-end justify-center"
    >
      <object
        ref={avatarRef}
        id="avatar"
        data={avatarUrl}
        className="h-[90%]"
        title="Mark Jan Bonne Kordon"
      />
    </div>
  );
};
