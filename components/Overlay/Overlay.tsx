import { Dispatch, SetStateAction } from "react";
import s from "./Overlay.module.scss";
interface OverlayProps {
  flyoutActive: boolean;
  setFlyoutActive: Dispatch<SetStateAction<boolean>>;
  basketActive: boolean;
  setBasketActive: Dispatch<SetStateAction<boolean>>;
}

export default function Overlay({
  flyoutActive,
  setFlyoutActive,
  basketActive,
  setBasketActive,
}: OverlayProps) {
  return (
    <button
      className={`${s.overlay} ${flyoutActive || basketActive ? s.active : ""}`}
      onClick={() => {
        setFlyoutActive(false);
        setBasketActive(false);
      }}
    />
  );
}
