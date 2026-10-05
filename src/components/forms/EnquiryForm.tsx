import type { ReactNode } from 'react';
import Icon from '../common/Icon';
import { site, whatsappLink } from '../../data/site';
import { budgetOptions, serviceOptions, timelineOptions, useEnquiryForm } from '../../hooks/useEnquiryForm';
import { HONEYPOT_FIELD } from '../../data/site';

interface FieldConfig {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  hint?: string;
  options?: string[];
  autoComplete?: string;
  full?: boolean;
}

interface EnquiryFormProps {
  variant: 'contact' | 'quote';
  title?: string;
  description?: ReactNode;
  submitLabel?: string;
}

const contactFields: FieldConfig[] = [
  { name: 'name', label: 'Full name', required: true, autoComplete: 'name', placeholder: 'Your name' },
  { name: 'company', label: 'Company', autoComplete: 'organization', placeholder: 'Company name' },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    placeholder: '10-digit mobile number',
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'name@company.com',
  },
  { name: 'service', label: 'What do you need?', type: 'select', required: true, options: serviceOptions },
  { name: 'budget', label: 'Indicative budget', type: 'select', options: budgetOptions },
  {
    name: 'message',
    label: 'Your requirement',
    type: 'textarea',
    required: true,
    full: true,
    hint: 'A short description of the process, system or problem you want to solve is enough to start.',
    placeholder: 'Tell us about your business, the problem you want solved, or the software you need built.',
  },
];

const quoteFields: FieldConfig[] = [
  { name: 'name', label: 'Full name', required: true, autoComplete: 'name', placeholder: 'Your name' },
  { name: 'company', label: 'Company / organisation', autoComplete: 'organization', placeholder: 'Company name' },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    placeholder: '10-digit mobile number',
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'name@company.com',
  },
  { name: 'service', label: 'Project type', type: 'select', required: true, options: serviceOptions },
  { name: 'industry', label: 'Business / industry', placeholder: 'e.g. FMCG distribution, education, construction' },
  { name: 'budget', label: 'Estimated budget', type: 'select', options: budgetOptions },
  { name: 'timeline', label: 'Expected timeline', type: 'select', options: timelineOptions },
  {
    name: 'message',
    label: 'Requirements',
    type: 'textarea',
    required: true,
    full: true,
    hint: 'Modules, users, reports and any system it must connect to — anything you already know.',
    placeholder: 'Describe what the software should do, who will use it and what it should replace.',
  },
];

/** Contact and quote forms share one implementation so behaviour stays identical. */
export default function EnquiryForm({ variant, title, description, submitLabel }: EnquiryFormProps) {
  const fields = variant === 'quote' ? quoteFields : contactFields;
  const { values, errors, status, feedback, setField, handleSubmit } = useEnquiryForm({
    required: ['name', 'phone', 'email', 'service', 'message'],
    conversionEvent: variant === 'quote' ? 'quote_request_submitted' : 'contact_form_submitted',
  });

  const heading = title ?? (variant === 'quote' ? 'Request a quote' : 'Send us an enquiry');

  return (
    <div className="form-panel">
      <div className="form-panel__head">
        <h2>{heading}</h2>
        <p>
          {description ??
            'Share your requirement and our team will respond with questions, a practical approach and next steps. Fields marked * are required.'}
        </p>
      </div>

      {status === 'success' ? (
        <div className="form__status form__status--success" role="status">
          <strong>Enquiry sent.</strong> {feedback} If it is urgent, call us on{' '}
          <a href={site.phones[0].href}>{site.phones[0].display}</a>.
        </div>
      ) : null}

      {status === 'error' && feedback ? (
        <div className="form__status form__status--error" role="alert" style={{ marginBottom: 'var(--space-5)' }}>
          {feedback}
        </div>
      ) : null}

      <form className="form mt-5" onSubmit={handleSubmit} noValidate>
        <div className="form__grid form__grid--2">
          {fields.map((field) => {
            const value = values[field.name] ?? '';
            const error = errors[field.name];
            const describedBy = [field.hint ? `${field.name}-hint` : '', error ? `${field.name}-error` : '']
              .filter(Boolean)
              .join(' ');

            return (
              <div
                className="field"
                key={field.name}
                style={field.full ? { gridColumn: '1 / -1' } : undefined}
              >
                <label className="field__label" htmlFor={field.name}>
                  {field.label} {field.required ? <span className="req">*</span> : null}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={value}
                    placeholder={field.placeholder}
                    required={field.required}
                    aria-invalid={error ? 'true' : undefined}
                    aria-describedby={describedBy || undefined}
                    onChange={(event) => setField(field.name, event.target.value)}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={value}
                    required={field.required}
                    aria-invalid={error ? 'true' : undefined}
                    aria-describedby={describedBy || undefined}
                    onChange={(event) => setField(field.name, event.target.value)}
                  >
                    <option value="">Please select…</option>
                    {field.options?.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? 'text'}
                    value={value}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    aria-invalid={error ? 'true' : undefined}
                    aria-describedby={describedBy || undefined}
                    onChange={(event) => setField(field.name, event.target.value)}
                  />
                )}

                {field.hint ? (
                  <span className="field__hint" id={`${field.name}-hint`}>
                    {field.hint}
                  </span>
                ) : null}

                {error ? (
                  <span className="field__error" id={`${field.name}-error`}>
                    <Icon name="AlertTriangle" size={14} />
                    {error}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Spam trap: hidden from visitors, ignored by the backend. */}
        <div className="form__honeypot" aria-hidden="true">
          <label htmlFor={HONEYPOT_FIELD}>Company website</label>
          <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="btn-row">
          <button className="btn btn--primary btn--lg" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : (submitLabel ?? (variant === 'quote' ? 'Send quote request' : 'Send enquiry'))}
            {status === 'submitting' ? null : <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />}
          </button>
          <a
            className="btn btn--ghost"
            href={whatsappLink('Hello Right Serve Infotech System, I would like to discuss a software requirement.')}
            target="_blank"
            rel="noopener noreferrer"
            data-track="form_whatsapp"
          >
            <Icon name="MessageCircle" size={17} />
            Chat on WhatsApp
          </a>
        </div>

        <p className="form__footnote">
          Your details are used only to respond to this enquiry. We do not sell or share enquiry information. See our{' '}
          <a href="/privacy-policy">privacy policy</a>.
        </p>
      </form>
    </div>
  );
}
