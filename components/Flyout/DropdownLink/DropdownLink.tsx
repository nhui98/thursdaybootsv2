import { Dispatch, SetStateAction } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import s from "./DropdownLink.module.scss";

interface DropdownLinkProps {
  title: string;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  bgGrey?: boolean;
}

export default function DropdownLink({
  title,
  active,
  setActive,
  bgGrey,
}: DropdownLinkProps) {
  return (
    <button
      className={`${s.dropdownlink} ${bgGrey && s.grey}`}
      onClick={() => setActive((active) => !active)}
    >
      <span>{title}</span>
      <span>{active ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
    </button>
  );
}
