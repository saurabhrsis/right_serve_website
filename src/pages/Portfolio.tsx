import { useMemo, useState } from 'react';
import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CtaBand from '../components/common/CtaBand';
import { ProjectCard } from '../components/common/Cards';
import { clientLogos, projects, projectTypes, type ProjectType } from '../data/portfolio';
import { breadcrumbSchema, itemListSchema } from '../seo/schema';

type Filter = 'All' | ProjectType;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All');

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['All', projects.length]]);
    projectTypes.forEach((type) => map.set(type, projects.filter((project) => project.type === type).length));
    return map;
  }, []);

  const visible = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  const filters: Filter[] = ['All', ...projectTypes];

  return (
    <>
      <Seo
        path="/portfolio"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]),
          itemListSchema(
            projects.map((project) => ({ name: project.title, path: '/portfolio' })),
            'Portfolio projects',
          ),
        ]}
      />

      <PageHero
        eyebrow="Portfolio"
        title="Software, websites and applications we have delivered"
        lead="Projects delivered for clients across construction, retail, education, financial services, agri-business and public administration. Each entry lists the industry, platform and technology actually used."
        badges={['Client projects', 'Business software', 'Websites & mobile apps']}
        primaryCta={{ label: 'Build something similar', to: '/request-quote' }}
        secondaryCta={{ label: 'Read case studies', to: '/case-studies' }}
      />

      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Filter"
            title="Browse by project type"
            lead="Use the filters to narrow the list. Case study links appear where a detailed write-up of the project is available."
          />

          <ul className="chip-tabs" role="list">
            {filters.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="chip-tab"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item} ({counts.get(item) ?? 0})
                </button>
              </li>
            ))}
          </ul>

          <p className="text-muted" aria-live="polite" style={{ fontSize: 'var(--fs-sm)' }}>
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            {filter !== 'All' ? ` in ${filter}` : ''}.
          </p>

          <div className="portfolio-grid mt-5">
            {visible.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Clients"
            title="Businesses we have built for"
            lead="A selection of the clients whose projects appear in the portfolio above."
            align="center"
          />
          <ul className="logo-strip">
            {clientLogos.map((client) => (
              <li key={client.name}>
                <img src={client.logo} alt={`${client.name} — ${client.industry}`} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
          <p className="text-muted mt-6" style={{ fontSize: 'var(--fs-xs)' }}>
            Client names and logos are shown only for projects the company has delivered and may reference publicly.
          </p>
        </div>
      </section>

      <CtaBand
        title="Have a project similar to one of these?"
        text="Tell us which project interests you and what needs to change. We will explain how that system was built, what it would take to adapt, and a realistic timeline."
        primaryLabel="Discuss your requirement"
        primaryPath="/request-quote"
        secondaryLabel="See our solutions"
        secondaryPath="/solutions"
      />
    </>
  );
}
