import { Dispatch, SetStateAction } from "react";
import s from "./Overlay.module.scss";
interface OverlayProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function Overlay({ active, setActive }: OverlayProps) {
  return (
    <button
      className={`${s.overlay} ${active ? s.active : ""}`}
      onClick={() => setActive(false)}
    />
  );
}
