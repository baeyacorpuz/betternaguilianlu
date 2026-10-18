import { AtAGlance } from "@/components/home/at-a-glance"
import { ClimateMap } from "@/components/home/climate-map"
import { Contact } from "@/components/home/contact"
import { Hero } from "@/components/home/hero"
import { History } from "@/components/home/history"
import { LatestUpdates } from "@/components/home/latest-updates"
import { Leadership } from "@/components/home/leadership"
import { PopularServices } from "@/components/home/popular-services"
import { Quiz } from "@/components/home/quiz"
import { VisitPlan } from "@/components/home/visit-plan"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <VisitPlan />
      <PopularServices />
      <AtAGlance />
      <ClimateMap />
      <History />
      <LatestUpdates />
      <Leadership />
      <Contact />
      <Quiz />
    </>
  )
}
