'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT } from '@/lib/data'
import { cn } from '@/lib/utils'
import {
  Camera,
  History,
  Landmark,
  Leaf,
  Mountain,
  Sparkles,
  Trees,
  Utensils,
  Waves,
} from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const activities = [
  { id: 'aventura', label: 'Adventure', icon: Mountain },
  { id: 'cultura', label: 'Culture', icon: Landmark },
  { id: 'naturaleza', label: 'Nature', icon: Trees },
  { id: 'gastronomia', label: 'Gastronomy', icon: Utensils },
  { id: 'playa', label: 'Beach', icon: Waves },
  { id: 'historia', label: 'History', icon: History },
  { id: 'fotografia', label: 'Photography', icon: Camera },
  { id: 'fauna', label: 'Fauna and Flora', icon: Leaf },
  { id: 'relajacion', label: 'Relaxation', icon: Sparkles },
]

export default function PersonalizeClient() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [data, setData] = useState<{
    name: string
    email: string
    phone: string
    destination: string
    startDate: string
    people: number
    endDate: string
    budget: number
    comments: string
  }>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    people: 0,
    endDate: '',
    budget: 0,
    comments: '',
  })

  const toggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    )
  }

  const selectedActivityLabels = useMemo(
    () =>
      selectedActivities
        .map((id) => activities.find((activity) => activity.id === id)?.label)
        .filter((label): label is string => Boolean(label)),
    [selectedActivities]
  )

  const message = useMemo(
    () => `Hello, I want more information about a personalized tour, these are my data:
      Name: ${data?.name}
      Email: ${data?.email}
      Phone: ${data?.phone}
      Destination: ${data?.destination}
      Number of people: ${data?.people}
      Start date: ${data?.startDate}
      End date: ${data?.endDate}
      Budget: ${data?.budget}
      Comments: ${data?.comments}
      Activities: ${selectedActivityLabels.join(', ')}
      `,
    [data, selectedActivityLabels]
  )

  const isValid =
    Boolean(data.name.trim()) && Boolean(data.email.trim() || data.phone.trim())

  return (
    <>
      <Card className="w-full p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Personal information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Name *</Label>
              <Input
                required
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email *</Label>
              <Input
                placeholder="tu@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>
          <Label>Phone *</Label>
          <Input
            placeholder="Enter your phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <p className="text-muted-foreground text-xs">
            * Name and at least one of email or phone are required.
          </p>
          <hr className="my-4" />
          <h2 className="text-lg font-bold">Trip details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Main destination</Label>
              <Input
                placeholder="City or place"
                value={data.destination}
                onChange={(e) =>
                  setData({ ...data, destination: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Number of people</Label>
              <Input
                type="number"
                value={data.people}
                onChange={(e) =>
                  setData({ ...data, people: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Start date</Label>
              <Input
                type="date"
                value={data.startDate}
                onChange={(e) =>
                  setData({ ...data, startDate: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>End date</Label>
              <Input
                type="date"
                value={data.endDate}
                onChange={(e) => setData({ ...data, endDate: e.target.value })}
              />
            </div>
          </div>
          <Label>Approximate budget</Label>
          <Input
            type="number"
            value={data.budget}
            onChange={(e) =>
              setData({ ...data, budget: Number(e.target.value) })
            }
          />
          <Label>Interests</Label>
          <div className="mt-2 grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <button
                  key={activity.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleActivity(activity.id)
                  }}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 transition-all duration-200',
                    selectedActivities.includes(activity.id)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{activity.label}</span>
                </button>
              )
            })}
          </div>
          <Label>Additional comments</Label>
          <Textarea
            placeholder="Enter your additional comments"
            value={data.comments}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
          />

          {!isValid && (
            <p role="alert" className="text-destructive text-sm">
              Please enter your name and at least an email or phone number
              before sending your request.
            </p>
          )}
          {isValid ? (
            <Link
              href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Send request</Button>
            </Link>
          ) : (
            <Button className="w-full" disabled type="button">
              Send request
            </Button>
          )}
        </div>
      </Card>
    </>
  )
}
