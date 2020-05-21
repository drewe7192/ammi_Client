import React, { FC } from "react"
import styles from "./../../views/dashboardGrid/DashBoardGrid.module.scss"

interface IMappingProps {
  menuItems?: Array<string>
}

export const Mapping:FC<IMappingProps> = (props: IMappingProps) => {
  const { menuItems } = props
  if(!Array.isArray(menuItems) || menuItems.length === 0)
    return null
  return <>{menuItems.map((mappingItem) => <div key={mappingItem} className={`${styles.NavbargridItem} animeFont`}>{mappingItem}</div>)}</>
};