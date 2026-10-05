import LegalPage from './LegalPage';
import { privacyPolicy } from '../data/legal';

export default function PrivacyPolicy() {
  return <LegalPage document={privacyPolicy} />;
}
