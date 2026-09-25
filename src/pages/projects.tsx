import { useTranslation } from "react-i18next";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";

type ProjectMeta = {
	key: string;
	icon: string;
	tags: string[];
	link: string;
};

const projectsMeta: ProjectMeta[] = [
	{
		key: "portfolio",
		icon: "💼",
		tags: ["web", "portfolio", "react", "tailwind"],
		link: "https://github.com/D4rkL4s3r/portfolio",
	},
	{
		key: "mvp",
		icon: "📦",
		tags: ["bash", "cli", "linux", "tool"],
		link: "https://github.com/D4rkL4s3r/mvp",
	},
	{
		key: "aurora",
		icon: "🗂️",
		tags: ["rust", "egui", "windows", "desktop"],
		link: "https://github.com/D4rkL4s3r/Aurora",
	},
];

export default function ProjectsPage() {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen flex flex-col dark">
			{/* <CursorGlow /> */}
			<Navigation />

			<div className="text-center py-12 px-6">
				<h1
					className="text-4xl font-bold mb-3"
					style={{ fontFamily: "Courier New, monospace" }}
				>
					{t("projects.heading")}
				</h1>
			</div>

			<main className="flex-1 max-w-6xl w-full mx-auto px-6 pb-12">
				{projectsMeta.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projectsMeta.map((project) => (
							<ProjectCard
								key={project.key}
								icon={project.icon}
								title={t(`projects.items.${project.key}.title`)}
								description={t(`projects.items.${project.key}.description`)}
								tags={project.tags}
								link={project.link}
							/>
						))}
					</div>
				) : (
					<div className="text-center text-muted-foreground py-16">
						{t("projects.empty")}
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}
