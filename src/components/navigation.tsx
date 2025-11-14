import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
	const location = useLocation();

	return (
		<nav className="border-b border-border/50">
			<div className="max-w-6xl mx-auto px-6 py-6">
				<div className="flex justify-center items-center gap-8 md:gap-12">
					<Link
						to="/"
						className={`relative pb-2 transition-colors ${
							location.pathname === "/"
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground"
						}`}
						style={{ fontFamily: "Courier New, monospace" }}
					>
						/home/me
						{location.pathname === "/" && (
							<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
						)}
					</Link>
					<Link
						to="/projects"
						className={`relative pb-2 transition-colors ${
							location.pathname === "/projects"
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground"
						}`}
						style={{ fontFamily: "Courier New, monospace" }}
					>
						/bin/projects
						{location.pathname === "/projects" && (
							<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
}
