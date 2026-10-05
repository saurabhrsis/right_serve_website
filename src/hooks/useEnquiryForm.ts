import { useCallback, useState } from 'react';
import { submitEnquiry, type EnquiryPayload } from '../services/api';
import { trackEvent } from '../services/analytics';

export type EnquiryValues = Record<string, string>;

export type EnquiryErrors = Record<string, string>;

export const serviceOptions = [
  'Website development',
  'Mobile app development',
  'Custom software development',
  'ERP development',
  'Billing software / business software',
  'AI development & automation',
  'SEO & digital marketing',
  'Hardware & IT infrastructure',
  'Other',
];

export const budgetOptions = [
  'Not decided yet',
  'Under ₹50,000',
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000 – ₹15,00,000',
  'Above ₹15,00,000',
];

export const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1 – 3 months',
  '3 – 6 months',
  'Just exploring',
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[6-9]\d{9}$/;

interface UseEnquiryFormOptions {
  /** Field names that must be filled. */
  required?: string[];
  /** Field names validated as email addresses. */
  emails?: string[];
  /** Field names validated as 10-digit Indian mobile numbers. */
  phones?: string[];
  /** Analytics event name reported on a successful submission. */
  conversionEvent: string;
}

/**
 * Shared enquiry form behaviour for the contact page and the quote page:
 * validation, submission to the existing backend endpoint, and conversion
 * tracking. Keeping it in one hook means both forms stay consistent.
 */
export function useEnquiryForm({
  required = ['name', 'phone', 'email', 'message'],
  emails = ['email'],
  phones = ['phone'],
  conversionEvent,
}: UseEnquiryFormOptions) {
  const [values, setValues] = useState<EnquiryValues>({});
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const validate = useCallback(
    (input: EnquiryValues): EnquiryErrors => {
      const next: EnquiryErrors = {};

      required.forEach((field) => {
        if (!input[field]?.trim()) next[field] = 'This field is required.';
      });

      emails.forEach((field) => {
        const value = input[field]?.trim();
        if (value && !emailPattern.test(value)) next[field] = 'Enter a valid email address.';
      });

      phones.forEach((field) => {
        const digits = input[field]?.replace(/[^\d]/g, '') ?? '';
        const normalised = digits.length > 10 ? digits.slice(-10) : digits;
        if (normalised && !phonePattern.test(normalised)) {
          next[field] = 'Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.';
        }
      });

      if (input.message && input.message.trim().length < 10) {
        next.message = 'Please add a little more detail (at least 10 characters).';
      }

      return next;
    },
    [required, emails, phones],
  );

  const setField = useCallback((field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: '' } : current));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.currentTarget;
      const honeypot = (form.elements.namedItem('company_website') as HTMLInputElement | null)?.value;
      if (honeypot) {
        // Silently ignore bot submissions.
        setStatus('success');
        setFeedback('Thank you — your enquiry has been received.');
        return;
      }

      const validation = validate(values);
      setErrors(validation);
      if (Object.keys(validation).length) {
        setStatus('error');
        setFeedback('Please correct the highlighted fields and submit again.');
        const firstError = form.querySelector<HTMLElement>('[aria-invalid="true"]');
        firstError?.focus();
        return;
      }

      setStatus('submitting');
      setFeedback('');

      const payload: EnquiryPayload = {
        name: values.name ?? '',
        email: values.email ?? '',
        mobile: values.phone ?? values.mobile ?? '',
        message: values.message ?? '',
      };

      const extras: Record<string, string | undefined> = {};
      for (const [key, value] of Object.entries(values)) {
        if (['name', 'email', 'phone', 'mobile', 'message'].includes(key)) continue;
        if (value?.trim()) extras[key] = value;
      }

      const result = await submitEnquiry(payload, extras);
      setStatus(result.ok ? 'success' : 'error');
      setFeedback(result.message);

      if (result.ok) {
        trackEvent(conversionEvent, {
          service: values.service,
          budget: values.budget,
          timeline: values.timeline,
        });
        setValues({});
      } else {
        trackEvent('form_submission_failed', { conversion: conversionEvent });
      }
    },
    [values, validate, conversionEvent],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setFeedback('');
  }, []);

  return { values, errors, status, feedback, setField, handleSubmit, reset };
}
