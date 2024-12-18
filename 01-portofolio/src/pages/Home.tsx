import Hero from "../components/03-Hero";
import Skills from "../components/04-Skills";

interface HomeProps {
  toggleSidebar: () => void;
}

export default function Home({ toggleSidebar }: HomeProps) {
  return (
    <>
      <Hero toggleSidebar={toggleSidebar} />
      <Skills />
    </>
  );
}
