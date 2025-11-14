import { useEffect, useState } from "react";

export default function CursorGlow() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
			setIsVisible(true);
		};

		const handleMouseLeave = () => {
			setIsVisible(false);
		};

		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div
			className="fixed pointer-events-none -z-10"
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				width: "200px",
				height: "200px",
				background:
					"radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
				transform: "translate(-50%, -50%)",
				opacity: isVisible ? 1 : 0,
				filter: "blur(40px)",
				transition: "opacity 0.3s ease",
			}}
		/>
	);
}
