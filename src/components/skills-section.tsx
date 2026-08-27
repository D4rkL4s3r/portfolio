import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

type SkillGroup = {
	label: string;
	skills: string[];
};

export default function SkillsSection() {
	const { t } = useTranslation();
	const skillGroups = t("skills.groups", {
		returnObjects: true,
	}) as SkillGroup[];

	return (
		<section>
			<h2
				className="text-sm text-accent mb-4"
				style={{ fontFamily: "Courier New, monospace" }}
			>
				{t("skills.heading")}
			</h2>
			<div className="bg-card rounded-xl border border-border/50 p-5 border-l-4 border-l-accent flex flex-col gap-4">
				{skillGroups.map((group) => (
					<div key={group.label}>
						<p
							className="text-xs uppercase tracking-wider text-muted-foreground mb-2"
							style={{ fontFamily: "Courier New, monospace" }}
						>
							{group.label}
						</p>
						<div className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<Badge
									key={skill}
									variant="secondary"
									style={{ fontFamily: "Courier New, monospace" }}
								>
									{skill}
								</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
