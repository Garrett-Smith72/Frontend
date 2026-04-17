import Hero from '../components/Hero';
import ProjectsArchitecture from '../components/ProjectsArchitecture';
import Uses from '../components/Uses';

export default function Home({ status }) {
  return (
    <div className="flex-1 p-8 md:p-16 max-w-6xl mx-auto w-full flex flex-col gap-24">
      <Hero />
      <ProjectsArchitecture status={status} />
      <Uses />
    </div>
  );
}
