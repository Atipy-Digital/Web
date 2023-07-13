import { Page } from '@/components/layout/Page';
import { Agency } from '@/components/sections/home/Agency';
import { Banner } from '@/components/sections/home/Banner';
import { Contact } from '@/components/sections/home/Contact';
import { Intro } from '@/components/sections/home/Intro';
import { Newsletter } from '@/components/sections/home/Newsletter';
import { Offers } from '@/components/sections/home/Offers';
import { Projects } from '@/components/sections/home/Projects';

import { getHomeData } from '@/services/home.service';

export default function Home() {
  const homeData = getHomeData();

  return (
    <Page>
      <Banner data={homeData.bannerData} />
      <Intro data={homeData.introData} />
      <Offers data={homeData.offersData} />
      <Agency data={homeData.agencyData} />
      <Projects data={homeData.projectData} />
      <Newsletter data={homeData.newsletterData} />
      <Contact data={homeData.contactData} />
    </Page>
  );
}
