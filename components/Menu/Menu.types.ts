import type { CategoryType, MenuDataType, PromotionType } from "../Navbar/data";
export type MenuProps = MenuDataType;

export interface MenuListProps {
  category: CategoryType;
}

export interface PromotionItemProps {
  promotion: PromotionType;
}
