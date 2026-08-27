import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
	const location = useLocation();
	const { t, i18n } = useTranslation();

	return (
		<nav className="border-b border-border/50">
			<div className="max-w-6xl mx-auto px-6 py-6 relative flex items-center justify-center">
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
						{t("nav.home")}
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
						{t("nav.projects")}
						{location.pathname === "/projects" && (
							<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
						)}
					</Link>
				</div>

				<div
					className="absolute right-6 flex items-center gap-1 text-sm"
					style={{ fontFamily: "Courier New, monospace" }}
				>
					<button
						type="button"
						onClick={() => i18n.changeLanguage("fr")}
						className={
							i18n.resolvedLanguage === "fr"
								? "text-accent"
								: "text-muted-foreground hover:text-foreground"
						}
					>
						FR
					</button>
					<span className="text-muted-foreground">/</span>
					<button
						type="button"
						onClick={() => i18n.changeLanguage("en")}
						className={
							i18n.resolvedLanguage === "en"
								? "text-accent"
								: "text-muted-foreground hover:text-foreground"
						}
					>
						EN
					</button>
				</div>
			</div>
		</nav>
	);
}
