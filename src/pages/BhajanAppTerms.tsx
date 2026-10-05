import LegalPage from './LegalPage';
import { bhajanAppTerms } from '../data/legal';

export default function BhajanAppTerms() {
  return <LegalPage document={bhajanAppTerms} />;
}
