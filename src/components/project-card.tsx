import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
	icon: string;
	title: string;
	description: string;
	tags: string[];
	link: string;
}

export default function ProjectCard({
	icon,
	title,
	description,
	tags,
	link,
}: ProjectCardProps) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Card className="h-full border-border/50 hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer">
				<CardHeader className="text-center pb-3">
					<div className="text-5xl mb-3 opacity-70">{icon}</div>
					<CardTitle
						className="text-xl"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="text-center">
					<CardDescription
						className="mb-4 text-sm leading-relaxed"
						style={{ fontFamily: "Courier New, monospace" }}
					>
						{description}
					</CardDescription>

					{/* Tags avec shadcn Badge */}
					<div className="flex flex-wrap gap-2 justify-center mb-4">
						{tags.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								style={{ fontFamily: "Courier New, monospace" }}
							>
								{tag}
							</Badge>
						))}
					</div>

					<div className="flex items-center justify-center gap-1 text-accent text-sm hover:opacity-70 transition-opacity">
						<span style={{ fontFamily: "Courier New, monospace" }}>
							→ Voir le projet
						</span>
					</div>
				</CardContent>
			</Card>
		</a>
	);
}
