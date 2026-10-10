import { AtAGlance } from "@/components/home/at-a-glance"
import { ClimateMap } from "@/components/home/climate-map"
import { Contact } from "@/components/home/contact"
import { Hero } from "@/components/home/hero"
import { History } from "@/components/home/history"
import { LatestUpdates } from "@/components/home/latest-updates"
import { Leadership } from "@/components/home/leadership"
import { PopularServices } from "@/components/home/popular-services"
import { Quiz } from "@/components/home/quiz"
import { SunTimes } from "@/components/home/sun-times"
import { VisitPlan } from "@/components/home/visit-plan"

export function HomePage() {
  return (
    <>
      <Hero />
      <VisitPlan />
      <PopularServices />
      <AtAGlance />
      <ClimateMap />
      <SunTimes />
      <History />
      <LatestUpdates />
      <Leadership />
      <Contact />
      <Quiz />
    </>
  )
}
