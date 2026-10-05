import LegalPage from './LegalPage';
import { termsAndConditions } from '../data/legal';

export default function TermsAndConditions() {
  return <LegalPage document={termsAndConditions} />;
}
