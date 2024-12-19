import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'
import { cloneElement, ReactElement, ReactNode } from 'react'
import React from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addClassToChildren(child: ReactNode, className: string) {
  if (React.isValidElement(child)) {
    return cloneElement(child as ReactElement, {
      className: cn(child.props.className, className)
    })
  }
  return child
}
