import { ServiceHeader } from "@/components/service-header"
import { ServiceProcess } from "@/components/service-process"
import { ServicesGrid } from "@/components/services-grid"
import { WarrantyService } from "@/components/warranty-service"
import { WhatWeService } from "@/components/what-we-service"

export default function ServicesPage() {
  return (
    <main>
      <ServiceHeader />
      <ServicesGrid></ServicesGrid>
      <ServiceProcess></ServiceProcess>
      <WhatWeService></WhatWeService>
      <WarrantyService></WarrantyService>
      {/* Rest of your page content */}
    </main>
  )
}