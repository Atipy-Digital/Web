import { Page } from '@/components/layout/Page';
import { Banner } from '@/components/sections/home/Banner';
import { Intro } from '@/components/sections/home/Intro';
import { Offers } from '@/components/sections/home/Offers';

import { getHomeData } from '@/services/home.service';

export default function Home() {
  const homeData = getHomeData();

  return (
    <Page>
      <Banner data={homeData.bannerData} />
      <Intro data={homeData.introData} />
      <Offers data={homeData.offersData} />
    </Page>
  );
}
