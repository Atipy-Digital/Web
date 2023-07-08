import { Page } from '@/components/layout/Page';
import { Banner, Intro } from '@/components/sections/home';

import { getHomeData } from '@/services/home.service';

export default function Home() {
  const homeData = getHomeData();

  return (
    <Page>
      <Banner data={homeData.bannerData} />
      <Intro data={homeData.introData} />
    </Page>
  );
}
