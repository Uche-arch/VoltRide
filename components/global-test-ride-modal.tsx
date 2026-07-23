// "use client"

// import { useState } from "react"
// import { Calendar } from "lucide-react"
// import * as Dialog from "@radix-ui/react-dialog"
// import { Button } from "@/components/ui/button"
// import { sendToWhatsApp } from "@/lib/whatsapp"

// interface GlobalTestRideModalProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export function GlobalTestRideModal({ open, onOpenChange }: GlobalTestRideModalProps) {
//   const [formData, setFormData] = useState({ name: "", phone: "", date: "" })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     sendToWhatsApp({
//       type: "GENERAL_VISIT",
//       data: {
//         name: formData.name,
//         phone: formData.phone,
//         date: formData.date,
//       },
//     })
//     onOpenChange(false)
//   }

//   return (
//     <Dialog.Root open={open} onOpenChange={onOpenChange}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
//         <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
//           <Dialog.Title className="text-2xl font-extrabold text-slate-900">
//             Schedule a Test Ride
//           </Dialog.Title>
//           <Dialog.Description className="mt-1 text-sm text-slate-500">
//             Book a visit to our office! You can try out any of our e-bike models when you arrive.
//           </Dialog.Description>

//           <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Full Name</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="John Doe"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <div>
//               <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Phone Number</label>
//               <input
//                 required
//                 type="tel"
//                 placeholder="+1 (555) 000-0000"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <div>
//               <label className="mb-1 block text-xs font-bold uppercase text-slate-700">Preferred Visit Date</label>
//               <input
//                 required
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                 className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
//                 Cancel
//               </Button>
//               <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
//                 <Calendar className="mr-2 h-4 w-4" />
//                 Schedule Visit
//               </Button>
//             </div>
//           </form>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   )
// }

"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendToWhatsApp } from "@/lib/whatsapp"

interface GlobalTestRideModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GlobalTestRideModal({ open, onOpenChange }: GlobalTestRideModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendToWhatsApp({
      type: "GENERAL_VISIT",
      data: {
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
      },
    })
    onOpenChange(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl text-card-foreground">
          <Dialog.Title className="text-2xl font-extrabold text-foreground">
            Schedule a Test Ride
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Book a visit to our office! You can try out any of our e-bike models when you arrive.
          </Dialog.Description>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-foreground">Full Name</label>
              <Input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 w-full rounded-xl"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-foreground">Phone Number</label>
              <Input
                required
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11 w-full rounded-xl"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-foreground">Preferred Visit Date</label>
              <Input
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="h-11 w-full rounded-xl"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button size="lg" type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button size="lg"  type="submit" className="flex-1">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Visit
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}