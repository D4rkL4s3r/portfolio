import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileCard() {
	return (
		<Card className="w-full max-w-2xl overflow-hidden border-border/50 shadow-2xl">
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
						D4rkL4s3r
					</h1>
					<p
						className="text-muted-foreground"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						@d4rkl4s3r • he/him
					</p>
				</div>

				<div className="flex flex-col gap-3 mb-6">
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">🎂</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>Adulte</span>
					</div>
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">📍</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>
							Belgium, Europe
						</span>
					</div>
					<div className="flex items-center gap-3 text-muted-foreground">
						<span className="text-xl">🗣️</span>
						<span style={{ fontFamily: "Courier New, monospace" }}>FR/EN</span>
					</div>
				</div>

				<div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-accent mb-6">
					<p
						className="text-xs uppercase tracking-wider text-muted-foreground mb-2"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						ABOUT
					</p>
					<p
						className="text-sm leading-relaxed"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						Full-stack web developer passionate about modern technologies. I
						create high-performance and intuitive web applications. Always
						learning continuously and open to new challenges.
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
							GitHub
						</a>
					</Button>
					{/* <Button variant="outline" size="sm" asChild>
						<a
							href="https://linkedin.com/in/votre-profil"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<Linkedin className="w-4 h-4 mr-2" />
							LinkedIn
						</a>
					</Button> */}
					{/* <Button variant="outline" size="sm" asChild>
						<a
							href="mailto:votre.email@example.com"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							<Mail className="w-4 h-4 mr-2" />
							Email
						</a>
					</Button>
					<Button variant="outline" size="sm" asChild>
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
