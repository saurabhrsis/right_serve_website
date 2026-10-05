import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEPARTMENTS, TEAM, TEAM_STATS } from '@/data/team'
import { TeamCard } from '@/components/cards'
import { PageHero, CTASection } from '@/components/sections'
import { Reveal, SectionHeading, StatCounter } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Team() {
  const [filter, setFilter] = useState<(typeof DEPARTMENTS)[number] | 'All'>('All')
  const members = filter === 'All' ? TEAM : TEAM.filter((member) => member.department === filter)

  return (
    <>


      <PageHero
        eyebrow="Our people"
        title="Meet the team behind your project"
        subtitle="No outsourcing chains and no anonymous freelancers. The developers, designers and marketers you meet are the ones who do the work."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/our-team' },
        ]}
        image="/images/team-hero.jpg"
        imageAlt="Right Serve Infotech System team members in Nagpur"
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-rsis grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Departments"
            title="Engineering, design and support under one roof"
            subtitle="Cross-functional teams mean fewer handovers, faster decisions and better products."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(['All', ...DEPARTMENTS] as const).map((department) => (
              <button
                key={department}
                type="button"
                onClick={() => setFilter(department)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                  filter === department
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-slate-200 bg-white text-ink-600 hover:border-accent-300 hover:text-brand-800',
                )}
                aria-pressed={filter === department}
              >
                {department}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <Reveal key={member.name} delay={index * 40} className="h-full">
                <TeamCard member={member} className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h2 className="heading-3">Want to work with this team?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-600">
              We are usually hiring developers, designers, QA testers, digital marketers and sales executives. Freshers and
              interns are welcome.
            </p>
            <Link to="/career" className="btn-primary mt-6">
              View open roles
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Work directly with our team"
        subtitle="Tell us what you need — we will put the right specialists on the call, not a salesperson reading a script."
        source="Team page CTA"
      />
    </>
  )
}
