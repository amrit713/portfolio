import { AboutMe } from "@/components/about-me";
import { ContactMe } from "@/components/contact-me";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Intro } from "@/components/intro";
import { RecentProject } from "@/components/recent-projects";
import { Technology } from "@/components/technology";

export default function Home() {
  return (
    <MaxWidthWrapper className="mt-18 pb-12 flex flex-col gap-12">
      <Intro />
      <AboutMe />
      <RecentProject />
      <Technology />
      <ContactMe />
    </MaxWidthWrapper>
  );
}
