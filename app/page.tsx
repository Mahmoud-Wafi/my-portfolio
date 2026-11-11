import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0A0D12] text-white">
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<WebCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
