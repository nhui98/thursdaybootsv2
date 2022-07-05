import { Dispatch, SetStateAction } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import s from "./DropdownLink.module.scss";

interface DropdownLinkProps {
  title: string;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  bgWhite?: boolean;
}

export default function DropdownLink({
  title,
  active,
  setActive,
  bgWhite,
}: DropdownLinkProps) {
  return (
    <button
      className={`${s.dropdownlink} ${bgWhite && s.white}`}
      onClick={() => setActive((active) => !active)}
    >
      <span>{title}</span>
      <span>{active ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
    </button>
  );
}
