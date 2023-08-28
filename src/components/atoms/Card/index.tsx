import React, {
  CSSProperties,
  ReactNode,
} from 'react';

import { classNames } from '@/utils';

const Card = ({ borderType, styles, onClick, children }: { borderType: "gradient" | "simple", styles?: CSSProperties, onClick?: () => void, children: ReactNode }) => {
  const border = borderType === "simple" ? "border-[2px] border-neutral-700 bg-[#27292D]" : "bg-gradient-to-br from-neutral-400 to-neutral-700"
  return (
    <div style={{
      ...styles
    }} onClick={onClick} className={classNames(border, 'rounded-lg relative z-10 w-full')}>
      {
        borderType === "gradient" && <div className='rounded-lg bg-[#27292D] absolute inset-[2px] -z-10'></div>
      }
      {children}
    </div>
  )
}
export default Card