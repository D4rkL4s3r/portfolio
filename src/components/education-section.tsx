import { useTranslation } from "react-i18next";

type Education = {
	degree: string;
	school: string;
	period: string;
	bullets?: string[];
};

export default function EducationSection() {
	const { t } = useTranslation();
	const educations = t("education.items", {
		returnObjects: true,
	}) as Education[];

	return (
		<section>
			<h2
				className="text-sm text-accent mb-4"
				style={{ fontFamily: "Courier New, monospace" }}
			>
				{t("education.heading")}
			</h2>
			<div className="flex flex-col gap-4">
				{educations.map((edu) => (
					<div
						key={edu.degree}
						className="bg-card rounded-xl border border-border/50 p-5 border-l-4 border-l-accent"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
							<h3
								className="font-bold text-foreground"
								style={{ fontFamily: "Courier New, monospace" }}
							>
								{edu.degree}{" "}
								<span className="font-normal text-muted-foreground">
									@ {edu.school}
								</span>
							</h3>
							<span
								className="text-xs text-muted-foreground whitespace-nowrap"
								style={{ fontFamily: "Courier New, monospace" }}
							>
								{edu.period}
							</span>
						</div>
						{edu.bullets && (
							<ul className="flex flex-col gap-1">
								{edu.bullets.map((bullet) => (
									<li
										key={bullet}
										className="text-sm text-muted-foreground leading-relaxed"
										style={{ fontFamily: "Courier New, monospace" }}
									>
										– {bullet}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
