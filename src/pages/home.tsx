import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProfileCard from "@/components/profile-card";
import SkillsSection from "@/components/skills-section";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col dark">
			{/* <CursorGlow /> */}
			<Navigation />

			<main className="flex-1 max-w-3xl w-full mx-auto px-6 py-10 flex flex-col items-center gap-10">
				<ProfileCard />
				<div className="w-full flex flex-col gap-10">
					<ExperienceSection />
					<EducationSection />
					<SkillsSection />
				</div>
			</main>

			<Footer />
		</div>
	);
}
