'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Title } from '@/components/ui/typography/typography'
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
import { useEffect, useState } from 'react'

const ACCOMMODATIONS = [
  {
    name: 'Hotel',
    value: 'hotel',
  },
  {
    name: 'Hostal',
    value: 'hostal',
  },
  {
    name: 'Apartamento',
    value: 'apartamento',
  },
  {
    name: 'Casa',
    value: 'casa',
  },
  {
    name: 'Ecolodge',
    value: 'ecolodge',
  },
]

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

export default function PersonalizaExperiencia() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')
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
    accommodation: string
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
    accommodation: '',
  })

  const toggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    )
  }

  useEffect(() => {
    setMessage(`Hello, I want more information about a personalized tour, these are my data:
      Name: ${data?.name}
      Email: ${data?.email}
      Phone: ${data?.phone}
      Destination: ${data?.destination}
      Number of people: ${data?.people}
      Start date: ${data?.startDate}
      End date: ${data?.endDate}
      Budget: ${data?.budget}
      Accommodation: ${data?.accommodation}
      Comments: ${data?.comments}
      Activities: ${selectedActivities.join(', ')}
      `)
  }, [data, selectedActivities])

  return (
    <section className="mx-auto my-14 flex w-11/12 flex-col items-center justify-center gap-4 md:w-6/12">
      <Title>Personalized tour</Title>
      <p className="text-muted-foreground">
        Don&apos;t find what you&apos;re looking for? Tell us what type of
        experience you want and we will design a itinerary to your measure.{' '}
      </p>
      <Card className="w-full p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Personal information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                placeholder="tu@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>
          <Label>Phone</Label>
          <Input
            placeholder="Enter your phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
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
          <Label>What type of accommodation do you prefer?</Label>
          <Select
            value={data.accommodation}
            onValueChange={(value) =>
              setData({ ...data, accommodation: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {ACCOMMODATIONS.map((accommodation) => (
                <SelectItem
                  key={accommodation.value}
                  value={accommodation.value}
                >
                  {accommodation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

          <Link
            href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
          >
            <Button className="w-full">Send request</Button>
          </Link>
        </div>
      </Card>
    </section>
  )
}
