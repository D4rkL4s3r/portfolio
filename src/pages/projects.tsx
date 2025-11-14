import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";

type Project = {
	icon: string;
	title: string;
	description: string;
	tags: string[];
	link: string;
};

const projects: Project[] = [];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen flex flex-col dark">
			{/* <CursorGlow /> */}
			<Navigation />

			<div className="text-center py-12 px-6">
				<h1
					className="text-4xl font-bold mb-3"
					style={{ fontFamily: "Courier New, monospace" }}
				>
					My projects
				</h1>
			</div>

			<main className="flex-1 max-w-6xl w-full mx-auto px-6 pb-12">
				{Array.isArray(projects) && projects.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>
				) : (
					<div className="text-center text-muted-foreground py-16">
						Available soon
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}
