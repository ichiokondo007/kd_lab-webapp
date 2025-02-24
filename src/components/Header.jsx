// components/Header.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev)
	}

	return (
		<header
			id="header"
			className={`fixed w-full z-10 left-0 transition-all duration-300 py-4 ${scrolled ? 'bg-white text-black top-0' : 'bg-transparent text-white top-6'
				}`}
		>
			<div className="container mx-auto flex justify-between items-center px-6">
				{/* ロゴ */}
				<div className="text-2xl font-bold">
					<Link href="/"><a>KD Lab</a></Link>
				</div>
				{/* ハンバーガーメニュー（モバイルのみ表示） */}
				<button
					id="hamburger-btn"
					className="md:hidden focus:outline-none"
					onClick={toggleMobileMenu}
					aria-label="Toggle Menu"
				>
					<Image
						id="hamburger-icon"
						src={scrolled ? "/hamburger-black.svg" : "/hamburger-white.svg"}
						alt="Menu"
						width={40}
						height={40}
					/>
				</button>
				{/* PC用ナビゲーション */}
				<nav className="hidden md:flex space-x-6">
					<Link href="/"><a className="hover:underline">Top</a></Link>
					<Link href="/canvas"><a className="hover:underline">CANVAS</a></Link>
					<Link href="/crdt"><a className="hover:underline">CRDT</a></Link>
					<Link href="/memo"><a className="hover:underline">MEMO</a></Link>
					<Link href="/login"><a className="hover:underline">LOGIN</a></Link>
				</nav>
			</div>
			{/* モバイルメニュー */}
			{mobileMenuOpen && (
				<nav
					id="mobile-menu"
					className="md:hidden flex flex-col space-y-2 p-4 bg-white text-black absolute top-16 left-0 w-full shadow-md"
				>
					<Link href="/"><a className="hover:underline">Top</a></Link>
					<Link href="/canvas"><a className="hover:underline">CANVAS</a></Link>
					<Link href="/crdt"><a className="hover:underline">CRDT</a></Link>
					<Link href="/memo"><a className="hover:underline">MEMO</a></Link>
					<Link href="/login"><a className="hover:underline">LOGIN</a></Link>
				</nav>
			)}
		</header>
	)
}
