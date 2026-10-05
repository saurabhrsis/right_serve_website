import { useState } from 'react';
import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import CtaBand from '../components/common/CtaBand';
import { useEnquiryForm } from '../hooks/useEnquiryForm';
import { site, HONEYPOT_FIELD } from '../data/site';
import { breadcrumbSchema } from '../seo/schema';

const openRoles = [
  {
    title: 'Full Stack Developer',
    type: 'Full time · Nagpur',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
    summary: 'Work across frontend and backend on client projects and our own products.',
  },
  {
    title: 'Frontend Developer',
    type: 'Full time · Nagpur',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'API integration', 'Responsive design'],
    summary: 'Build interfaces for business systems where clarity and speed matter more than visual effects.',
  },
  {
    title: 'Backend Developer',
    type: 'Full time · Nagpur',
    skills: ['Node.js', 'Express.js', 'Database design', 'API development', 'Server management'],
    summary: 'Design data models, APIs and background jobs for systems handling real transactions.',
  },
  {
    title: 'Application Developer (Mobile)',
    type: 'Full time · Nagpur',
    skills: ['JavaScript (ES6+)', 'React Native', 'Navigation', 'State management', 'API integration'],
    summary: 'Build mobile applications for field teams, customers and counter staff.',
  },
  {
    title: 'UI/UX Developer',
    type: 'Full time · Nagpur',
    skills: ['Core design', 'UX design', 'Design tools', 'Responsive web design', 'Interaction design'],
    summary: 'Design interfaces for data-heavy operations and review them with the client before development.',
  },
  {
    title: 'Graphics Designer',
    type: 'Full time · Nagpur',
    skills: ['Design fundamentals', 'Design software', 'Branding', 'Print design', 'Digital creatives'],
    summary: 'Support product and client work with brand assets, presentations and campaign creatives.',
  },
  {
    title: 'Quality Assurance Tester',
    type: 'Full time · Nagpur',
    skills: ['Manual testing', 'Test case writing', 'QA tools', 'Regression testing', 'Bug reporting'],
    summary: 'Test software against real business scenarios before it reaches the client.',
  },
  {
    title: 'Sales & Marketing Executive',
    type: 'Full time · Nagpur',
    skills: ['Client communication', 'Product demonstrations', 'Lead follow-up', 'Reporting'],
    summary: 'Work with prospective clients on product demonstrations and requirement gathering.',
  },
];

const hiringSteps = [
  { title: 'Apply online', text: 'Send your details and the role you are applying for. A CV link or portfolio helps.' },
  { title: 'Initial screening', text: 'A short call about your experience, what you have worked on and your availability.' },
  { title: 'Practical discussion', text: 'For technical roles, a discussion or small practical exercise based on real project work.' },
  { title: 'Final discussion', text: 'Meet the team, understand the project you would join and ask your own questions.' },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState('');
  const { values, errors, status, feedback, setField, handleSubmit } = useEnquiryForm({
    required: ['name', 'email', 'phone', 'role', 'message'],
    conversionEvent: 'job_application_submitted',
  });

  return (
    <>
      <Seo
        path="/careers"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }]),
        ]}
      />

      <PageHero
        eyebrow="Careers"
        title="Build software that businesses actually run on"
        lead="We are a software team in Nagpur working on client systems and our own business software products. If you want work where the users are real businesses with real deadlines, you will find it here."
        badges={['Based in Nagpur', 'Client projects and own products', 'Learning through real work']}
        meta={[
          { icon: 'Users', text: 'Engineering, design and QA roles' },
          { icon: 'Briefcase', text: 'Full-time positions' },
        ]}
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Working here"
            title="What the work is like"
            lead="Honest description rather than perks list — this is what the day-to-day looks like."
          />
          <div className="grid grid--3">
            <div className="value-tile">
              <h3>You see the users</h3>
              <p>
                Our projects are business systems used by counter staff, site teams, teachers and accountants. You will
                understand what the software is for, not just which ticket is open.
              </p>
            </div>
            <div className="value-tile">
              <h3>Range of work</h3>
              <p>
                Custom client development across web, desktop and mobile, plus four live product lines that need
                maintenance, new features and support. There is room to specialise over time.
              </p>
            </div>
            <div className="value-tile">
              <h3>Direct responsibility</h3>
              <p>
                Small teams mean your work reaches production and clients quickly. You will be expected to think about
                how a feature behaves under real business conditions.
              </p>
            </div>
            <div className="value-tile">
              <h3>Practical standards</h3>
              <p>
                Code review, clear naming, documentation and testing on real scenarios. We maintain what we build, so
                shortcuts come back to us.
              </p>
            </div>
            <div className="value-tile">
              <h3>Mentorship in both directions</h3>
              <p>
                Senior engineers review work and explain decisions; junior engineers bring current tooling and question
                old habits.
              </p>
            </div>
            <div className="value-tile">
              <h3>Growth with the company</h3>
              <p>
                As the products and client base grow, responsibilities grow with them. Several of our current team
                members started with smaller scopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title="Positions we are hiring for"
            lead="If you are strong in a role not listed here, send your details anyway — we review every application."
          />
          <div className="grid grid--2">
            {openRoles.map((role, index) => (
              <Reveal key={role.title} delay={(index % 2) * 50}>
                <article className="role-card" style={{ height: '100%' }}>
                  <div>
                    <h3>{role.title}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: 'var(--fs-sm)' }}>
                      {role.summary}
                    </p>
                    <div className="role-card__skills">
                      {role.skills.map((skill) => (
                        <span className="badge" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="role-card__aside">
                    <span>
                      <Icon name="Briefcase" size={15} /> {role.type}
                    </span>
                    <span>
                      <Icon name="MapPin" size={15} /> Nagpur office
                    </span>
                    <a
                      className="btn btn--ghost btn--sm"
                      href="#apply"
                      onClick={() => setSelectedRole(role.title)}
                    >
                      Apply for this role
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Hiring process"
            title="How applications are handled"
            lead="Four steps, usually completed within a couple of weeks."
          />
          <ol className="steps">
            {hiringSteps.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--soft" id="apply">
        <div className="container">
          <div className="contact-layout">
            <div>
              <SectionHeading
                eyebrow="Apply"
                title="Send your application"
                lead="Fill in the form and attach or mention a link to your CV or portfolio. Applications are reviewed by the team that would work with you."
              />
              <div className="callout">
                <h3>Prefer email?</h3>
                <p className="mb-0">
                  Send your CV to{' '}
                  <a href={site.emailHref} data-track="career_email">
                    {site.email}
                  </a>{' '}
                  with the role in the subject line. You can also call{' '}
                  <a href={site.phones[0].href} data-track="career_phone">
                    {site.phones[0].display}
                  </a>{' '}
                  during working hours.
                </p>
              </div>
              <div className="callout callout--muted mt-5">
                <h3>What we look for</h3>
                <ul className="tick-list">
                  <li>Evidence of work you have built and can explain</li>
                  <li>Comfort with reading existing code rather than only starting fresh</li>
                  <li>Willingness to ask the client's users what they actually do</li>
                  <li>Reliability on timelines — communicating early when something slips</li>
                </ul>
              </div>
            </div>

            <div className="form-panel">
              <div className="form-panel__head">
                <h2>Job application</h2>
                <p>All fields marked * are required. Your details are used only for recruitment.</p>
              </div>

              {status === 'success' ? (
                <div className="form__status form__status--success" role="status">
                  <strong>Application received.</strong> {feedback}
                </div>
              ) : null}

              {status === 'error' && feedback ? (
                <div className="form__status form__status--error" role="alert" style={{ marginBottom: 'var(--space-5)' }}>
                  {feedback}
                </div>
              ) : null}

              <form className="form mt-5" onSubmit={handleSubmit} noValidate>
                <div className="form__grid form__grid--2">
                  <div className="field">
                    <label className="field__label" htmlFor="name">
                      Full name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={values.name ?? ''}
                      autoComplete="name"
                      aria-invalid={errors.name ? 'true' : undefined}
                      onChange={(event) => setField('name', event.target.value)}
                    />
                    {errors.name ? <span className="field__error">{errors.name}</span> : null}
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email ?? ''}
                      autoComplete="email"
                      aria-invalid={errors.email ? 'true' : undefined}
                      onChange={(event) => setField('email', event.target.value)}
                    />
                    {errors.email ? <span className="field__error">{errors.email}</span> : null}
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="phone">
                      Mobile number <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone ?? ''}
                      autoComplete="tel"
                      aria-invalid={errors.phone ? 'true' : undefined}
                      onChange={(event) => setField('phone', event.target.value)}
                    />
                    {errors.phone ? <span className="field__error">{errors.phone}</span> : null}
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="role">
                      Role applying for <span className="req">*</span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      value={values.role ?? selectedRole}
                      placeholder="e.g. Frontend Developer"
                      aria-invalid={errors.role ? 'true' : undefined}
                      onChange={(event) => setField('role', event.target.value)}
                    />
                    {errors.role ? <span className="field__error">{errors.role}</span> : null}
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="experience">
                      Years of experience
                    </label>
                    <input
                      id="experience"
                      name="experience"
                      value={values.experience ?? ''}
                      placeholder="e.g. 2 years"
                      onChange={(event) => setField('experience', event.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="portfolio">
                      Portfolio / CV link
                    </label>
                    <input
                      id="portfolio"
                      name="portfolio"
                      value={values.portfolio ?? ''}
                      placeholder="Link to GitHub, portfolio or Drive file"
                      onChange={(event) => setField('portfolio', event.target.value)}
                    />
                  </div>

                  <div className="field" style={{ gridColumn: '1 / -1' }}>
                    <label className="field__label" htmlFor="message">
                      Why this role? <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message ?? ''}
                      aria-invalid={errors.message ? 'true' : undefined}
                      placeholder="Briefly describe your experience and what you have built."
                      onChange={(event) => setField('message', event.target.value)}
                    />
                    {errors.message ? <span className="field__error">{errors.message}</span> : null}
                  </div>
                </div>

                <div className="form__honeypot" aria-hidden="true">
                  <label htmlFor={`${HONEYPOT_FIELD}-careers`}>Company website</label>
                  <input
                    id={`${HONEYPOT_FIELD}-careers`}
                    name={HONEYPOT_FIELD}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="btn-row">
                  <button className="btn btn--primary btn--lg" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Submit application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not seeing your role?"
        text="Send your details anyway. We keep applications on file and get in touch when a matching position opens."
        primaryLabel="Contact us"
        primaryPath="/contact"
        secondaryLabel="About the company"
        secondaryPath="/about"
      />
    </>
  );
}
