import './globals.css'
import { Albert_Sans, Montserrat_Alternates } from 'next/font/google'
import NavBar from '@/components/NavBar'
import type { LayoutProps } from '@/app/types/index.ts'

const albertSansFont = Albert_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-albert-sans',
})

const montserratAlternatesFont = Montserrat_Alternates({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat-alternates', 
})

export default function RootLayout({
    children,
}: LayoutProps) {
    return (
        <html lang="en">
            <body className={`${albertSansFont.variable} ${montserratAlternatesFont.variable}`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
