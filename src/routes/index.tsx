import SkillCard from '#/components/SkillCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        <ul>
          <li>
            <SkillCard name='Tanstack Start'/>
            <SkillCard name='TypeScript'/>
            <SkillCard name='MongoDB'/>
            <SkillCard name='Express'/>
          </li>
        </ul>
      </p>
    </div>
  )
}
