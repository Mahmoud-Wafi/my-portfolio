import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<>
			<ScrollProgress />
			<Navbar />
			<main id="main" className="min-h-screen overflow-x-clip">
				<HeroSection />
				<Marquee />
				<ServicesSection />
				<ProjectsSection />
				<SkillsSection />
				<ProcessSection />
				<ContactSection />
			</main>
		</>
	);
}
