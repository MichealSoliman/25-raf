// "use client"

// import { useState, useEffect } from "react"
// import { MapPin, School, Building2, TreePine, Stethoscope, Calendar } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { BookingModal } from "@/components/booking-modal"
// import apiService from "@/lib/api-service"
// import { StrategicFeature } from "@/lib/website-data"

// // Icon mapping
// const iconMap: { [key: string]: any } = {
//   MapPin,
//   School,
//   Building2,
//   TreePine,
//   Stethoscope,
//   Calendar
// }

// export function StrategicFeatures() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [features, setFeatures] = useState<StrategicFeature[]>([])

//   useEffect(() => {
//     // Load features from API
//     const loadFeaturesData = async () => {
//       try {
//         const featuresData = await apiService.getStrategicFeaturesData()
//         setFeatures(featuresData)
//       } catch (error) {
//         console.error('Error loading strategic features data:', error)
//         // Fallback to default features
//         setFeatures([
//           {
//             icon: "MapPin",
//             title: "موقع إستراتيجي وسط 3 شوارع رئيسية",
//             details: ["شارع حلمي كتبي", "طريق الأمير سلطان", "شارع عبد الله كاظم"],
//             isMain: true,
//           },
//           {
//             icon: "Building2",
//             title: "قريب من المسجد",
//             isMain: false,
//           }
//         ])
//       }
//     }

//     loadFeaturesData()
//   }, [])

//   if (!features || features.length === 0) {
//     return null // Loading state
//   }

//   return (
//     <section className="py-16 md:py-24 bg-[#efedea]">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16">
       
//         </div>

//         {/* Main Feature Card - Mobile First */}
//         <div className="mb-8 md:mb-12">
//           {features.filter(f => f.isMain).map((feature, index) => {
//             const IconComponent = iconMap[feature.icon]
//             return (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5e1dc] hover:border-[#c48765] transition-all duration-300 shadow-elegant hover:shadow-elegant-lg">
//                 {/* Icon and Title */}
//                 <div className="flex items-center space-x-4 space-x-reverse mb-6">
//                   <div className="bg-[#f5f3f0] mx-2 rounded-xl p-4 group-hover:bg-[#c48765] group-hover:text-white transition-colors duration-300 flex-shrink-0">
//                     {IconComponent && <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-[#540f6b] group-hover:text-white " />}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-bold text-xl md:text-2xl text-[#2c2c2c] mb-2">موقع إستراتيجي وسط 3 شوارع رئيسية</h3>

//                   </div>
//                 </div>

//                 {/* Details List */}
//                 <div className="space-y-3">
//                   <h4 className="font-semibold text-[#540f6b] text-lg mb-3">الشوارع الرئيسية:</h4>
//                   {feature.details?.map((detail: string, detailIndex: number) => {
//                     return (
//                     <div key={detailIndex} className="flex items-center space-x-3 space-x-reverse bg-[#f5f3f0] rounded-lg p-3">
//                       <div className="w-2 h-2 bg-[#540f6b] rounded-full flex-shrink-0"></div>
//                       <span className="text-[#2c2c2c] text-base font-medium mx-2">{detail}</span>
//                     </div>
//                   )})}
//                 </div>
//               </div>
//             </div>
//           )})}
//         </div>

//         {/* Secondary Features Grid - Mobile First */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12">
//           {features.filter(f => !f.isMain).map((feature, index) => {
//             const IconComponent = iconMap[feature.icon]
//             return (
//             <div key={index} className="group">
//               <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border flex flex-row items-center justify-center border-[#e5e1dc] hover:border-[#c48765] transition-all duration-300 shadow-sm hover:shadow-md h-full">
//                 {/* Icon */}
//                 <div className="bg-[#f5f3f0] mx-2 rounded-lg p-3 group-hover:bg-[#c48765] group-hover:text-white transition-colors duration-300 w-fit mb-4">
//                   {IconComponent && <IconComponent className="w-5 md:w-6 h-5 md:h-6 text-[#540f6b] group-hover:text-white" />}
//                 </div>
                
//                 {/* Content */}
//                 <div>
//                   <h3 className="font-bold text-sm md:text-base text-[#2c2c2c] mb-2 leading-tight">{feature.title}</h3>
//                 </div>
//               </div>
//             </div>
//           )})}
//         </div>

//         {/* Call to Action Button */}
//         <div className="text-center">
//           <Button
//             onClick={() => {
//               const formElement = document.getElementById('booking-form')
//               if (formElement) {
//                 formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
//               }
//             }}
//             className="bg-[#540f6b] hover:bg-[#31203a] text-white px-8 py-4 rounded-[18px] text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 flex items-center space-x-2 space-x-reverse mx-auto p-6"
//           >
//             <Calendar className="w-5 h-5" />
//             <span>احجز وتملك الآن شقة العمر</span>
//           </Button>
//         </div>
//       </div>

//       {/* Booking Modal */}
//       <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </section>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { MapPin, School, Building2, TreePine, Stethoscope, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import apiService from "@/lib/api-service"
import { StrategicFeature } from "@/lib/website-data"

// Icon mapping لكل ميزة أو شارع
const iconMap: { [key: string]: any } = {
  "MapPin": MapPin,           
  "School": School,           
  "Building2": Building2,     
  "TreePine": TreePine,       
  "Stethoscope": Stethoscope, 
  "Calendar": Calendar,       
  "شارع حلمي كتبي": MapPin,
  "طريق الأمير سلطان": MapPin,
  "شارع عبد الله كاظم": MapPin
}

export function StrategicFeatures() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [features, setFeatures] = useState<StrategicFeature[]>([])

  useEffect(() => {
    // Load features from API
    const loadFeaturesData = async () => {
      try {
        const featuresData = await apiService.getStrategicFeaturesData()
        setFeatures(featuresData)
      } catch (error) {
        console.error('Error loading strategic features data:', error)
        // Fallback to default features
        setFeatures([
          {
            icon: "MapPin",
            title: "موقع إستراتيجي وسط 3 شوارع رئيسية",
            details: ["شارع حلمي كتبي", "طريق الأمير سلطان", "شارع عبد الله كاظم","شارع عبد الله جاسر"],
            isMain: true,
          },
          {
            icon: "Building2",
            title: "قريب من المسجد",
            isMain: false,
          }
        ])
      }
    }

    loadFeaturesData()
  }, [])

  if (!features || features.length === 0) {
    return null // Loading state
  }

  return (
    <section className="py-16 md:py-24 bg-[#efedea]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-4">
            المزايا الإستراتيجية
          </h2> */}
        </div>

{/* Main Feature Card - Mobile First */}
<div className="mb-8 md:mb-12">
  {features.filter(f => f.isMain).map((feature, index) => {
    const IconComponent = iconMap[feature.icon]
    return (
      <div key={index} className="group">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5e1dc] hover:border-[#c48765] transition-all duration-300 shadow-elegant hover:shadow-elegant-lg">
          {/* Icon and Title */}
          <div className="flex items-center space-x-4 space-x-reverse mb-6">
            <div className="bg-[#f5f3f0] mx-2 rounded-xl p-4 group-hover:bg-[#c48765] group-hover:text-white transition-colors duration-300 flex-shrink-0">
              {IconComponent && <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-[#540f6b] group-hover:text-white " />}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl md:text-2xl text-[#2c2c2c] mb-2"> موقع إستراتيجي وسط 3 شوارع رئيسية</h3>
            </div>
          </div>

          {/* Map + Streets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left: Streets */}
            <div className="grid grid-cols-1 gap-3 order-last md:order-first">
              <h3 className="font-bold text-[#540f6b] text-lg mb-3">الشوارع الرئيسية:</h3>
              {feature.details?.map((detail: string, detailIndex: number) => {
                const IconDetail = iconMap[detail] || MapPin
                return (
                  <div key={detailIndex} className="flex items-center space-x-3 space-x-reverse bg-[#f5f3f0] rounded-lg p-3">
                    {IconDetail && <IconDetail className="w-5 h-5 text-[#540f6b]" />}
                    <span className="text-[#2c2c2c] text-base font-medium mx-2">{detail}</span>
                  </div>
                 
                )
              })}
            </div>

            {/* Right: Map */}
            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden order-first md:order-last">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.123456789!2d31.2345678!3d30.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583abcd1234567%3A0xabcdef1234567890!2sYour%20Location!5e0!3m2!1sen!2seg!4v1699999999999!5m2!1sen!2seg"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  })}
</div>



        {/* Secondary Features Grid - Mobile First */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12">
          
          {features.filter(f => !f.isMain).map((feature, index) => {
            
            const IconComponent = iconMap[feature.icon]
            return (
              
              <div key={index} className="group">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border flex flex-row items-center justify-center border-[#e5e1dc] hover:border-[#c48765] transition-all duration-300 shadow-sm hover:shadow-md h-full">
                  {/* Icon */}
                  <div className="bg-[#f5f3f0] mx-2 rounded-lg p-3 group-hover:bg-[#c48765] group-hover:text-white transition-colors duration-300 w-fit mb-4">
                    {IconComponent && <IconComponent className="w-5 md:w-6 h-5 md:h-6 text-[#540f6b] group-hover:text-white" />}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-[#2c2c2c] mb-2 leading-tight">{feature.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Button
            onClick={() => {
              const formElement = document.getElementById('booking-form')
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="bg-[#540f6b] hover:bg-[#31203a] text-white px-8 py-4 rounded-[18px] text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 flex items-center space-x-2 space-x-reverse mx-auto p-6"
          >
            <Calendar className="w-5 h-5" />
            <span>احجز وتملك الآن شقة العمر</span>
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
