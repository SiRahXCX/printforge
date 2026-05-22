'use client'

import { JSX } from 'react'
import { getAllCategories } from '@/app/lib/categories'
import type { Category } from '@/app/types/index'
import NavLink from '@/components/NavLink'
import { usePathname } from 'next/navigation'

export default function ModelsNavBar() {
    const pathname: string = usePathname()
    const slug: string = pathname.split('/').pop() || ''
    const categoriesList = getAllCategories().map((category: Category): JSX.Element => (
        <li key={category.slug} className="mb-5">
            <NavLink 
                href={"/3d-models/categories/"+category.slug}
                isActive={category.slug === slug}
            >
                {category.displayName}
            </NavLink>
        </li>
    ))

    return (
        <nav className="pt-[232.5px] mr-20">
            <ul>
                <li className="mb-5">
                    <NavLink 
                        href="/3d-models"
                        isActive={slug === '3d-models'}
                    >
                        All
                    </NavLink>
                </li>
                {categoriesList}
            </ul>               
        </nav>
    )
}