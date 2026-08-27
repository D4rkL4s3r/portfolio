import { useTranslation } from "react-i18next";

type Experience = {
	role: string;
	company: string;
	period: string;
	location: string;
	bullets: string[];
};

export default function ExperienceSection() {
	const { t } = useTranslation();
	const experiences = t("experience.items", {
		returnObjects: true,
	}) as Experience[];

	return (
		<section>
			<h2
				className="text-sm text-accent mb-4"
				style={{ fontFamily: "Courier New, monospace" }}
			>
				{t("experience.heading")}
			</h2>
			<div className="flex flex-col gap-4">
				{experiences.map((exp) => (
					<div
						key={`${exp.role}-${exp.company}-${exp.period}`}
						className="bg-card rounded-xl border border-border/50 p-5 border-l-4 border-l-accent"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
							<h3
								className="font-bold text-foreground"
								style={{ fontFamily: "Courier New, monospace" }}
							>
								{exp.role}{" "}
								<span className="font-normal text-muted-foreground">
									@ {exp.company}
								</span>
							</h3>
							<span
								className="text-xs text-muted-foreground whitespace-nowrap"
								style={{ fontFamily: "Courier New, monospace" }}
							>
								{exp.period} · {exp.location}
							</span>
						</div>
						<ul className="flex flex-col gap-1">
							{exp.bullets.map((bullet) => (
								<li
									key={bullet}
									className="text-sm text-muted-foreground leading-relaxed"
									style={{ fontFamily: "Courier New, monospace" }}
								>
									– {bullet}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
