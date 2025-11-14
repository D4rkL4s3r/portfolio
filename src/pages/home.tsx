import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProfileCard from "@/components/profile-card";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col dark">
			{/* <CursorGlow /> */}
			<Navigation />

			<main className="flex-1 flex items-center justify-center p-6">
				<ProfileCard />
			</main>

			<Footer />
		</div>
	);
}
