import Link from "next/link"
import React from "react";
import clsx from 'clsx'

type NavLinkProps = {
    href: string
    isActive?: boolean
    children: React.ReactNode
}

export default function NavLink({ href, isActive = false, children }: NavLinkProps) {
  return (
      <Link
        href={href}
        className={clsx(
            isActive ? 'underline text-orange-accent' : '',
            'font-mono uppercase text-sm text-[#606060] font-semibold'
        )}
      >{children}</Link>
  )
}