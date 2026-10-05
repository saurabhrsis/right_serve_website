import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import { REDIRECTS } from '@/seo/meta'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Team from '@/pages/Team'
import Career from '@/pages/Career'
import ServicesHub from '@/pages/ServicesHub'
import ServiceDetail from '@/pages/ServiceDetail'
import Portfolio from '@/pages/Portfolio'
import Products from '@/pages/Products'
import Contact from '@/pages/Contact'
import Insights from '@/pages/Insights'
import InsightPost from '@/pages/InsightPost'
import HtmlSitemap from '@/pages/HtmlSitemap'
import ThankYou from '@/pages/ThankYou'
import NotFound from '@/pages/NotFound'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsAndConditions from '@/pages/TermsAndConditions'
import BhajnarthiPrivacy from '@/pages/BhajnarthiPrivacy'
import BhajnarthiTerms from '@/pages/BhajnarthiTerms'

/**
 * Route table.
 *
 * Every page is addressable by its own URL (required for SEO) and the same list
 * is reused by scripts/prerender.mjs to generate static HTML per route.
 */
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/career" element={<Career />} />

        <Route path="/services/:pillar" element={<ServicesHub />} />
        <Route path="/services/:pillar/:sub" element={<ServiceDetail />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightPost />} />
        <Route path="/sitemap" element={<HtmlSitemap />} />
        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy-bhajnarthi-app" element={<BhajnarthiPrivacy />} />
        <Route path="/terms-and-conditions-bhajnarthi-app" element={<BhajnarthiTerms />} />

        {/* Legacy and alternate URLs - preserved so old links and rankings keep working */}
        {REDIRECTS.map((rule) => (
          <Route key={rule.from} path={rule.from} element={<Navigate to={rule.to} replace />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
