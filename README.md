# Assured Cleaning Services — Website

Production marketing website for **Assured Cleaning Services**, a commercial cleaning company in Tauranga, Bay of Plenty.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, **Resend** (contact form), and **Cal.com** (booking).

## Getting started

```bash
cd assured-cleaning
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (contact) | Resend API key for contact form emails |
| `CONTACT_TO_EMAIL` | No | Recipient (defaults to `holly@assuredcleaning.co.nz`) |
| `CONTACT_FROM_EMAIL` | No | Verified sender in Resend (defaults to Resend onboarding address) |
| `NEXT_PUBLIC_CAL_LINK` | Yes (booking) | Cal.com event link, e.g. `assured-cleaning/free-site-visit` |

### Resend domain verification

1. Add your domain (`assuredcleaning.co.nz`) in the [Resend dashboard](https://resend.com/domains).
2. Add the DNS records at **myhost.co.nz** (where the domain is registered).
3. Set `CONTACT_FROM_EMAIL` to a verified address, e.g. `Assured Cleaning <hello@assuredcleaning.co.nz>`.

## Cal.com setup (dashboard — not in code)

Create an event type in Cal.com with these settings:

- **Name:** Free Site Visit & Quote
- **Duration:** 45 minutes
- **Location:** Client's premises (collect address via Cal.com location/address field or a custom question)

**Availability (NZT):**
- Monday: 10:00am, 11:30am, 1:00pm
- Wednesday: 1:00pm, 3:00pm, 5:00pm

**Custom booking questions:**
1. What type of commercial business do you operate? (short text, required)
2. What are your operating hours? (short text, required)
3. Do you currently use a cleaning service? (Yes/No, required)
4. How many days/nights per week is your premises currently being cleaned? (number 1–7, required)
5. Additional comments (long text, optional)

**Notifications:** holly@assuredcleaning.co.nz

Set `NEXT_PUBLIC_CAL_LINK` to your Cal.com username/event slug.

Calendar sync can be connected later in Cal.com — no code change required.

## Typography & branding

- **Headings & body:** Poppins (Google Fonts)
- **Script accent:** Caveat — used sparingly (one per page max)
- **Logo typeface:** **Pacaembu** (commercial font from Naipe Foundry)

The site uses logo PNGs for header/footer branding. To use Pacaembu for custom text treatments (e.g. footer tagline), add licensed font files to `public/fonts/`:

```
public/fonts/Pacaembu-Regular.woff2
public/fonts/Pacaembu-Bold.woff2
```

Then enable `localFont` loading in `src/app/layout.tsx` (instructions in that file's comments).

## Editing content

All copy lives in typed files under `src/content/`:

| File | Contents |
|------|----------|
| `site.ts` | Contact details, nav, service areas, social URLs |
| `services.ts` | Premises types, expectations, before/after images |
| `reviews.ts` | Google reviews (append-only as new ones arrive) |
| `difference.ts` | The six Assured Difference points |
| `about.ts` | Founder letter, mission, vision, values |
| `over-and-above.ts` | Sample report content |

Update `facebook` and `googleReviewsUrl` in `site.ts` with your real URLs.

## Deployment (Vercel)

1. Push the `assured-cleaning` folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Add environment variables.
4. Deploy.

### DNS cutover from myhost.co.nz

1. In Vercel, add the custom domain `www.assuredcleaning.co.nz` (and optionally the apex).
2. Update DNS at myhost.co.nz with the records Vercel provides (A/CNAME).
3. Add the website URL to your **Google Business Profile**.
4. Ensure NAP (name, address, phone) matches exactly between the website and Google Business Profile.

## Local SEO checklist

- [ ] Update Facebook & Google Reviews URLs in `src/content/site.ts`
- [ ] Add new Google reviews to `src/content/reviews.ts` (updates schema + homepage)
- [ ] Verify NAP matches Google Business Profile
- [ ] Add website URL to Google Business Profile once live
- [ ] Generate a proper OG image at `public/og/default.png` (currently using inverted logo)

## Project structure

```
src/
  app/           # Pages, API routes, sitemap, robots
  components/    # Layout, sections, forms, booking
  content/       # Editable copy & data
  lib/           # Schema, validation, metadata helpers
public/
  logos/         # Brand logo suite
  images/        # Team & before/after photography
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```
