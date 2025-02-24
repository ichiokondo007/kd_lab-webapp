
// components/Hero.jsx
export default function Hero() {
	return (
		<section className="relative h-screen overflow-hidden parallax-container">
			<div
				id="parallax-bg"
				className="absolute top-0 left-0 w-full h-[120%] bg-cover bg-center filter brightness-125"
				style={{ backgroundImage: "url('/contact-hero-1920x0-c-default.jpg')" }}
			></div>
			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
				<h1 className="text-5xl md:text-7xl text-white font-bold">Welcome KD Lab</h1>
			</div>
		</section>
	)
}
