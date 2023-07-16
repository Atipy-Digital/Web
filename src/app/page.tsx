import { Page } from '@/components/layout/Page';
import { Agency } from '@/components/sections/home/Agency';
import { Banner } from '@/components/sections/home/Banner';
import { Contact } from '@/components/sections/home/Contact';
import { Intro } from '@/components/sections/home/Intro';
import { LastPosts } from '@/components/sections/home/LastPosts';
import { Newsletter } from '@/components/sections/home/Newsletter';
import { Offers } from '@/components/sections/home/Offers';
import { Projects } from '@/components/sections/home/Projects';

import { getHomeData } from '@/services/home.service';
import { getLastPosts } from '@/services/post.service';

export default function Home() {
  const homeData = getHomeData();
  const lastPosts = getLastPosts(4);

  return (
    <Page>
      {homeData && (
        <>
          <Banner data={homeData.bannerData} />
          <Intro data={homeData.introData} />
          <Offers data={homeData.offersData} />
          <Agency data={homeData.agencyData} />
          <Projects data={homeData.projectData} />
          <LastPosts data={lastPosts} />
          <Newsletter data={homeData.newsletterData} />
          <Contact data={homeData.contactData} />
        </>
      )}
    </Page>
  );
}
