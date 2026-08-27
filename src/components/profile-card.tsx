import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileCard() {
	const { t } = useTranslation();

	return (
		<Card className="w-full overflow-hidden border-border/50 shadow-2xl">
			<div className="h-40 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

			<div className="relative px-6 -mt-16">
				<div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-5xl shadow-xl">
					<img
						src={new URL("../assets/avatar.png", import.meta.url).href}
						alt="Avatar"
						className="w-full h-full rounded-full object-cover"
					/>
				</div>
			</div>

			<CardContent className="pt-4 px-6 pb-6">
				<div className="mb-6">
					<h1
						className="text-3xl font-bold text-primary mb-1"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						Maxim François
					</h1>
					<p
						className="text-muted-foreground"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						{t("profile.handle")}
					</p>
				</div>

				<div className="flex flex-col gap-3 mb-6">
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">🎂</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>
							{t("profile.age")}
						</span>
					</div>
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">📍</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>
							{t("profile.location")}
						</span>
					</div>
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">🗣️</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>
							{t("profile.languages")}
						</span>
					</div>
				</div>

				<div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-accent mb-6">
					<p
						className="text-xs uppercase tracking-wider text-muted-foreground mb-2"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						{t("profile.aboutLabel")}
					</p>
					<p
						className="text-sm leading-relaxed"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						{t("profile.about")}
					</p>
				</div>

				<div className="flex flex-wrap gap-2">
					<Button variant="outline" size="sm" asChild>
						<a
							href="https://github.com/D4rkL4s3r"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<Github className="w-4 h-4 mr-2" />
							{t("profile.buttons.github")}
						</a>
					</Button>
					<Button variant="outline" size="sm" asChild>
						<a
							href="https://linkedin.com/in/maxim-françois-44a4802a1"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<Linkedin className="w-4 h-4 mr-2" />
							{t("profile.buttons.linkedin")}
						</a>
					</Button>
					<Button variant="outline" size="sm" asChild>
						<a
							href="mailto:maximusfr444@gmail.com"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<Mail className="w-4 h-4 mr-2" />
							{t("profile.buttons.email")}
						</a>
					</Button>
					{/* <Button variant="outline" size="sm" asChild>
						<a
							href="https://discord.com/users/votreID"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<MessageCircle className="w-4 h-4 mr-2" />
							Discord
						</a>
					</Button> */}
				</div>
			</CardContent>
		</Card>
	);
}
