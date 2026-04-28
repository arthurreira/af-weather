import { Button } from "@arthurreira/ui/components/button"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Button Test</h1>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}