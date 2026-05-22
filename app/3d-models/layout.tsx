import React, { JSX } from "react";
import Link from 'next/link'
import { getAllCategories } from '@/app/lib/categories'
import type { Category } from '@/app/types/index'
import ModelsNavBar from '@/components/ModelsNavBar'

type ModelsLayout = {
    children: React.ReactNode
}

export default function ModelsLayout({ children }: ModelsLayout) {
    const categoriesList = getAllCategories().map((category: Category): JSX.Element => (
        <li key={category.slug} className="font-mono font-medium mb-5">
            <Link href={"/3d-models/categories/"+category.slug}>{category.displayName}</Link>
        </li>
    ))

    return (
        <main className="flex flex-row items-start px-20">
            <ModelsNavBar />
            {children}
        </main>
    )
}