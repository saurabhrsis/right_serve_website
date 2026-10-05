#!/usr/bin/env node
/**
 * One-time asset pipeline.
 *
 * Reads the source assets (the legacy site's `public/` folder by default) and writes
 * optimised, correctly-named derivatives into `public/images/**`:
 *   - resize to sensible maximum widths
 *   - convert to JPEG (photos) or PNG (logos / icons with transparency)
 *   - generate favicons, an app icon set and a 1200x630 social preview image
 *
 * Usage:  node scripts/optimize-assets.mjs [--src=/path/to/legacy/public]
 */
import { mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = 'true'] = arg.replace(/^--/, '').split('=')
    return [key, value]
  }),
)

const SRC = args.src || process.env.LEGACY_ASSETS_DIR || '/tmp/old_website/public'
const OUT = path.resolve('public/images')

const log = (...args_) => console.log('[assets]', ...args_)

/**
 * [sourceFile (relative to SRC), outputFile (relative to public/images), options]
 * `format` defaults to jpeg, or png when the output ends in .png
 */
const MANIFEST = [
  // ---------------------------------------------------------------- Heroes
  ['image.png', 'home-hero.jpg', { width: 1600 }],
  ['about-us.png', 'about-us.jpg', { width: 1200 }],
  ['team.jpg', 'about-team.jpg', { width: 1200 }],
  ['home/team-hero.png', 'team-hero.jpg', { width: 1400 }],
  ['career1.jpg', 'career-hero.jpg', { width: 1600 }],
  ['software-image/software-hero.jpg', 'software-hero.jpg', { width: 1600 }],
  ['hardware-mage/hardware-hero.jpg', 'hardware-hero.jpg', { width: 1600 }],
  ['marketing-image/heros.jpg', 'marketing-hero.jpg', { width: 1600 }],
  ['portfolio-image/heros.png', 'portfolio-hero.jpg', { width: 1600 }],
  ['product-image/product-hero.jpg', 'products-hero.jpg', { width: 1600 }],
  ['CRM-image (1) (1) (1).png', 'products-dashboard.jpg', { width: 1200 }],

  // -------------------------------------------------------- Software services
  ['software-image/Custom Software Development.png', 'services/custom-software-development.jpg', { width: 900 }],
  ['software-image/Web Development Services.png', 'services/web-development.jpg', { width: 900 }],
  ['software-image/Mobile App Development.png', 'services/mobile-app-development.jpg', { width: 900 }],
  ['software-image/E-Commerce Development.png', 'services/ecommerce-development.jpg', { width: 900 }],
  ['software-image/CRM & ERP Solutions.png', 'services/erp-crm.jpg', { width: 900 }],
  ['software-image/Cloud Computing Services.png', 'services/cloud-devops.jpg', { width: 900 }],
  ['software-image/AI & Intelligent Automation.png', 'services/ai-automation.jpg', { width: 900 }],
  ['software-image/UIUX Design Service.png', 'services/ui-ux-design.jpg', { width: 900 }],
  ['software-image/testing.png', 'services/qa-testing.jpg', { width: 900 }],

  // -------------------------------------------------------- Hardware services
  ['Server-image.jpeg', 'hardware/server.jpg', { width: 1200 }],
  ['Network-image.jpeg', 'hardware/networking.jpg', { width: 1200 }],
  ['security-hardware.jpeg', 'hardware/security.jpg', { width: 1200 }],
  ['maintainance & support image.jpeg', 'hardware/amc.jpg', { width: 1200 }],
  ['hardware4.png', 'hardware/iot.jpg', { width: 1200 }],
  ['storage.jpeg', 'hardware/storage.jpg', { width: 1200 }],

  // ------------------------------------------------------- Marketing services
  ['SEO.jpg', 'marketing/seo.jpg', { width: 1200 }],
  ['google-adds.png', 'marketing/google-ads.jpg', { width: 1200 }],
  ['Meta-Ads-Mastroke-Banner.webp', 'marketing/meta-ads.jpg', { width: 1200 }],
  ['Social-media-manage.png', 'marketing/social-media.jpg', { width: 1200 }],
  ['Teal and Yellow Modern Content Writer Portfolio Presentation.png', 'marketing/content-design.jpg', { width: 1200 }],
  ['Email.jpeg', 'marketing/email-sms.jpg', { width: 1200 }],
  ['election.webp', 'marketing/election.jpg', { width: 1200 }],
  ['influencer-marketing.png', 'marketing/influencer.jpg', { width: 1200 }],

  // ---------------------------------------------------------------- Products
  ['secure-build.png', 'products/secure-build.jpg', { width: 1000 }],
  ['logo-trajectoryfy.jpg', 'products/trajectoryfy.jpg', { width: 1000 }],
  ['dosecare-software.png', 'products/dosecare.jpg', { width: 1000 }],
  ['product1.jpg', 'products/tubemonitize.jpg', { width: 1000 }],
  ['shiksha3.png', 'products/shiksha-sutra.jpg', { width: 1000 }],
  ['email-system.jpeg', 'products/email-system.jpg', { width: 1000 }],

  // --------------------------------------------------------------- Portfolio
  ['software-porfolio.png', 'portfolio/mdr-management.jpg', { width: 900 }],
  ['grivance.png', 'portfolio/grievance-portal.jpg', { width: 900 }],
  ['DGS-login.png', 'portfolio/document-generating-system.jpg', { width: 900 }],
  ['Inventory.png', 'portfolio/inventory-management.jpg', { width: 900 }],
  ['nsm3.png', 'portfolio/nsm-crm.jpg', { width: 900 }],
  ['nsm3 (1)app.png', 'portfolio/lead-crm.jpg', { width: 900 }],
  ['sbm3 (1)seanable.png', 'portfolio/seasonal-billing.jpg', { width: 900 }],
  ['Construction-billing-logo.jpg', 'portfolio/construction-billing.jpg', { width: 900 }],
  ['Virtual-pointer-system.png', 'portfolio/virtual-pointer.jpg', { width: 900 }],
  ['shikshasutr.png', 'portfolio/shiksha-sutra.jpg', { width: 900 }],
  ['secure-build.png', 'portfolio/secure-build.jpg', { width: 900 }],
  ['email-system.jpeg', 'portfolio/email-system.jpg', { width: 900 }],
  ['Kashish-Enterprises.png', 'portfolio/kashish-enterprises.jpg', { width: 900 }],
  ['my-naai-app.jpeg', 'portfolio/my-naai-app.jpg', { width: 900 }],
  ['my-naai-admin.jpeg', 'portfolio/my-naai-admin.jpg', { width: 900 }],
  ['citrichub-logo.jpg', 'portfolio/citri-hub.jpg', { width: 900 }],
  ['dosecare-logo.jpg', 'portfolio/dosecare-app.jpg', { width: 900 }],
  ['mnymkt-removebg-preview.png', 'portfolio/mnymkt-app.jpg', { width: 900 }],
  ['nsmapp.jpg', 'portfolio/nsm-app.jpg', { width: 900 }],
  ['product2.jpg', 'portfolio/tubemonitize-app.jpg', { width: 900 }],
  ['Iron_horse_logo.png', 'portfolio/iron-horse.jpg', { width: 900 }],
  ['Ashish-Construction.png', 'portfolio/ashish-construction.jpg', { width: 900 }],
  ['pocho.jpg', 'portfolio/pocho.jpg', { width: 900 }],
  ['MNYMKT-website.png', 'portfolio/mnymkt-website.jpg', { width: 900 }],
  ['Gaurav-Infra.jpg', 'portfolio/gaurav-infra.jpg', { width: 900 }],
  ['Madhuprabha-logo.jpg', 'portfolio/madhuprabha.jpg', { width: 900 }],
  ['caliber-Interprises.jpg', 'portfolio/caliber-enterprises.jpg', { width: 900 }],
  ['shree-sai-services.jpg', 'portfolio/shree-sai-services.jpg', { width: 900 }],
  ['electrical.jpeg', 'portfolio/electrical.jpg', { width: 900 }],
  ['Playzone_logo.webp', 'portfolio/playzone.jpg', { width: 900 }],
  ['social-media.png', 'portfolio/social-media-marketing.jpg', { width: 900 }],
  ['election.webp', 'portfolio/election-campaign.jpg', { width: 900 }],
  ['google-adds.png', 'portfolio/lead-generation.jpg', { width: 900 }],
  ['SEO.jpg', 'portfolio/seo-management.jpg', { width: 900 }],

  // ---------------------------------------------------------------- Insights
  ['Web-development-Marketing-500x500.webp', 'insights/website-cost.jpg', { width: 1200 }],
  ['software-development-services-500x500.webp', 'insights/custom-software.jpg', { width: 1200 }],
  ['SEO.jpg', 'insights/local-seo.jpg', { width: 1200 }],
  ['security-hardware.jpeg', 'insights/cctv-networking.jpg', { width: 1200 }],
  ['Meta-Ads-Mastroke-Banner.webp', 'insights/ads-vs-seo.jpg', { width: 1200 }],

  // -------------------------------------------------------------- Industries
  ['lowfirm.jpg', 'industry-legal.jpg', { width: 700 }],
  ['construction.jpg', 'industry-construction.jpg', { width: 700 }],
  ['IT .jpg', 'industry-it.jpg', { width: 700 }],
  ['library.jpg', 'industry-library.jpg', { width: 700 }],
  ['Manufacturing.jpg', 'industry-manufacturing.jpg', { width: 700 }],
  ['pathology-lab.png', 'industry-healthcare.jpg', { width: 700 }],
  ['ecommerce-web-designing-services-500x500.webp', 'industry-retail.jpg', { width: 700 }],
  ['Secure Business.jpg', 'industry-finance.jpg', { width: 700 }],

  // -------------------------------------------------------------------- Team
  ['piyush_pandey.jpg', 'team/piyush-pandey.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['saurabh_jagthap.jpg', 'team/saurabh-jagthap.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['abhishek_tijare.jpeg', 'team/abhishek-tijare.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['jayshree-Bawankar.jpg', 'team/jayshree-bawankar.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['qadir.jpg', 'team/kadir.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['rajwal_jambhule.jpg', 'team/rajwal-jambhule.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['sakshi_wankhede.jpg', 'team/sakshi-wankhede.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['sharvarimalve.jpg', 'team/sharvari-malve.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['mrunali-vaidya.jpeg', 'team/mrunali-vaidya.jpg', { width: 400, height: 400, fit: 'cover' }],
  ['aarya_pandey.jpg', 'team/aarya-pandey.jpg', { width: 400, height: 400, fit: 'cover' }],

  // ----------------------------------------------------------- Client logos
  ['introis.png', 'clients/introis.png', { width: 220, format: 'png' }],
  ['anand computers.png', 'clients/anand-computers.png', { width: 220, format: 'png' }],
  ['Blue-Ladder.webp', 'clients/blue-ladder.png', { width: 220, format: 'png' }],
  ['harish zade.png', 'clients/vidyacure.png', { width: 220, format: 'png' }],
  ['kashish.png', 'clients/kashish.png', { width: 220, format: 'png' }],
  ['Ashish construction.png', 'clients/ashish-construction.png', { width: 220, format: 'png' }],
  ['demo.jpg', 'clients/sky-enterprises.jpg', { width: 220 }],
  ['giri.png', 'clients/gaurav-infra.png', { width: 220, format: 'png' }],
  ['livepro.png', 'clients/livepro.png', { width: 220, format: 'png' }],

  // ------------------------------------------------------ Technology logos
  ['react.png', 'tech/react.png', { width: 160, format: 'png' }],
  ['nodejs.png', 'tech/nodejs.png', { width: 160, format: 'png' }],
  ['express.png', 'tech/express.png', { width: 160, format: 'png' }],
  ['mongodb.png', 'tech/mongodb.png', { width: 160, format: 'png' }],
  ['postgress.png', 'tech/postgresql.png', { width: 160, format: 'png' }],
  ['aws.png', 'tech/aws.png', { width: 160, format: 'png' }],
  ['technology-icon/flutter-removebg.png', 'tech/flutter.png', { width: 160, format: 'png' }],
  ['technology-icon/React-Native.jpg', 'tech/react-native.png', { width: 160, format: 'png' }],
  ['electron js.png', 'tech/electron.png', { width: 160, format: 'png' }],
  ['html.png', 'tech/html.png', { width: 160, format: 'png' }],
  ['css.png', 'tech/css.png', { width: 160, format: 'png' }],
  ['JavaScript-Symbol.png', 'tech/javascript.png', { width: 160, format: 'png' }],
  ['technology-icon/Bootstrap_logo.svg-removebg.png', 'tech/bootstrap.png', { width: 160, format: 'png' }],
  ['technology-icon/git-removebg.png', 'tech/git.png', { width: 160, format: 'png' }],
  ['sql.png', 'tech/sql.png', { width: 160, format: 'png' }],
]

async function exists(file) {
  try {
    await stat(file)
    return true
  } catch {
    return false
  }
}

async function processOne(source, target, options) {
  const input = path.join(SRC, source)
  if (!(await exists(input))) {
    log(`skip (missing): ${source}`)
    return false
  }

  const outPath = path.join(OUT, target)
  await mkdir(path.dirname(outPath), { recursive: true })

  const pipeline = sharp(input, { failOn: 'none' }).resize({
    width: options.width,
    height: options.height,
    fit: options.fit ?? 'inside',
    withoutEnlargement: true,
  })

  const format = options.format ?? (target.endsWith('.png') ? 'png' : 'jpeg')
  if (format === 'png') {
    await pipeline.png({ quality: 88, compressionLevel: 9, palette: true }).toFile(outPath)
  } else {
    await pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(outPath)
  }
  return true
}

/** Builds a 1200x630 Open Graph image (brand gradient + logo + headline). */
async function buildOgImage() {
  const logoPath = path.join(SRC, 'new_logo_RSIS-removebg-preview.png')
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#061833"/>
        <stop offset="55%" stop-color="#0b2545"/>
        <stop offset="100%" stop-color="#0891b2"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <g fill="#22d3ee" opacity="0.18">
      ${Array.from({ length: 14 }, (_, i) => `<rect x="${i * 90}" y="0" width="1" height="630"/>`).join('')}
      ${Array.from({ length: 8 }, (_, i) => `<rect x="0" y="${i * 80}" width="1200" height="1"/>`).join('')}
    </g>
    <text x="80" y="250" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="54" font-weight="700" fill="#ffffff">Right Serve Infotech System</text>
    <text x="80" y="320" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="#a5f3fc">Software · Hardware · Digital Marketing</text>
    <text x="80" y="400" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="26" fill="#cbd5e1">Best IT company in Nagpur &amp; India — since 2019</text>
    <text x="80" y="470" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#94a3b8">rightserveinfotechsystem.com · +91 86693 08288</text>
    <rect x="80" y="520" width="240" height="6" rx="3" fill="#22d3ee"/>
  </svg>`

  const composites = []
  if (await exists(logoPath)) {
    const logo = await sharp(logoPath).resize({ width: 150, withoutEnlargement: true }).png().toBuffer()
    composites.push({ input: logo, top: 80, left: 970 })
  }

  await sharp(Buffer.from(svg)).composite(composites).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(OUT, 'og-rsis.jpg'))
  log('generated og-rsis.jpg')
}

/** Favicons + PWA icons, derived from the brand logo. */
async function buildIcons() {
  const logoPath = path.join(SRC, 'new_logo_RSIS-removebg-preview.png')
  if (!(await exists(logoPath))) {
    log('skip icons (logo missing)')
    return
  }

  await sharp(logoPath)
    .resize({ width: 512, height: 512, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, 'rsis-logo-mark.png'))
  await sharp(logoPath).resize({ width: 900, withoutEnlargement: true }).png().toFile(path.join(OUT, 'rsis-logo.png'))

  const sizes = [
    [512, 'icon-512.png'],
    [192, 'icon-192.png'],
    [180, 'apple-touch-icon.png'],
    [32, 'favicon-32.png'],
  ]
  for (const [size, name] of sizes) {
    await sharp(logoPath)
      .resize({ width: size, height: size, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(OUT, name))
  }

  // Minimal single-image ICO wrapper around a 48px PNG (supported by all modern browsers).
  const png = await sharp(logoPath)
    .resize({ width: 48, height: 48, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer()
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  const entry = Buffer.alloc(16)
  entry.writeUInt8(48, 0)
  entry.writeUInt8(48, 1)
  entry.writeUInt8(0, 2)
  entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(22, 12)
  await writeFile(path.resolve('public/favicon.ico'), Buffer.concat([header, entry, png]))
  log('generated favicon.ico')
}

async function main() {
  if (!(await exists(SRC))) {
    console.error(`[assets] source folder not found: ${SRC}\n  Pass --src=/path/to/legacy/public`)
    process.exit(1)
  }

  await mkdir(OUT, { recursive: true })
  let done = 0
  let skipped = 0

  for (const [source, target, options] of MANIFEST) {
    const ok = await processOne(source, target, options)
    if (ok) done += 1
    else skipped += 1
  }

  await buildIcons()
  await buildOgImage()

  log(`done — ${done} images optimised, ${skipped} skipped`)
}

main().catch((error) => {
  console.error('[assets] failed:', error)
  process.exit(1)
})
