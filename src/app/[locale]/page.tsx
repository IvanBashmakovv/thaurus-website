import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ExploreMarkets } from "@/components/home/ExploreMarkets";
import { TradingTools } from "@/components/home/TradingTools";
import { MetaTrader } from "@/components/home/MetaTrader";
import { PeopleBand } from "@/components/home/PeopleBand";
import { Press } from "@/components/home/Press";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCta } from "@/components/home/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      {/* light band */}
      <Press />
      <WhyChoose />
      {/* blue band */}
      <ExploreMarkets />
      <TradingTools />
      {/* light */}
      <MetaTrader />
      {/* blue band (PeopleBand = photo background) */}
      <PeopleBand />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
