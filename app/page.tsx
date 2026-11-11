import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<>
			<ScrollProgress />
			<Navbar />
			<main id="main" className="min-h-screen overflow-x-clip">
				<HeroSection />
				<Marquee />
				<ProjectsSection />
				<SkillsSection />
				<ServicesSection />
				<ContactSection />
			</main>
		</>
	);
}
