# Next Level Gaming & Esports Arena

## Project title

**Next Level Gaming & Esports Arena: Cross-Platform Mobile and Web Application**

This university group project is an Expo/React Native application with a web build.

## Project team

| Student name | Student number |
|---|---|
| Mulenga Noam | ST10517736 |
| Cain Joseph | ST10541995 |
| Neo Sipho | ST10535603 |
| Umile Mbombela | ST10524342 |


## Project overview

The application presents a project scenario for Next Level Gaming & Esports Arena, a fictional gaming venue in Johannesburg, South Africa. It lets visitors browse gaming packages and activities, review membership prices, estimate booking costs, and send booking requests or general enquiries.

The app is designed for mobile use and can also run on the web. It provides an estimate and collects requests; it does not check live availability, create a confirmed reservation, or take payment.

## Website goals and objectives

- Present the arena scenario and its gaming, esports, training, and group-event offerings.
- Help visitors compare packages and individual activities before making an enquiry.
- Provide an itemized price estimate with clear booking discounts.
- Let visitors send preferred booking details to the arena for follow-up.
- Provide a separate contact-enquiry path and links to the listed contact channels.
- Keep the experience accessible and usable across mobile devices and the web.

## Key features and functionality

- Four-tab navigation: Home, Explore, Bookings, and More.
- Four gaming packages and three individual experiences, each with a detail screen.
- A shared booking selection with add, remove, and clear actions.
- Live subtotal, discount, and estimated-total calculations in South African Rand.
- Booking-request form that sends selected experiences, estimate, contact details, and preferred date/time through Formspree.
- Contact-enquiry form that sends a message through Formspree with a separate email subject.
- Membership pricing, arena information, tap-to-call and email links, and a Johannesburg map.
- Accessible labels and touch targets, safe-area-aware layouts, and loading/error states for remote images.

## Application parts

| Part | Route | Details |
|---|---|---|
| Home | `/home` | Introduces the arena scenario, highlights packages and activities, and links to Explore and the fee calculator. |
| Explore | `/explore` | Lists all four packages and three individual experiences. |
| Package details | `/package/[id]` | Shows Ultimate Gamer Pass, VIP Gaming Experience, Esports Training Package, or Birthday Party Package with price, description, suitability, and booking actions. |
| Experience details | `/experience/[id]` | Shows Virtual Reality Experience, Racing Simulator Challenge, or Escape Room Challenge with details and booking actions. |
| Fee calculator | `/calculate-fees` | Linked from Home and experience details; lets visitors select bookable items and see the itemized subtotal, discount, and estimated total. Memberships are excluded. |
| Booking summary | `/bookings` | Reviews selected items, removes items, clears the selection, and continues to the booking-request form. |
| Booking request | `/confirmation` | Collects contact details and a preferred date/time, then sends a request through Formspree. A success message means the request was submitted, not that a reservation is confirmed. |
| More | `/more` | Links to About, Arena overview, Memberships, and Contact. |
| About | `/about` | Describes the fictional venue scenario, mission, values, and image gallery. |
| Arena overview | `/overview` | Summarizes tournaments, coaching, group events, and the request-based booking process. |
| Memberships | `/memberships` | Lists Casual Pass, Elite Member, and Pro Academy prices and billing periods, and links to Contact for questions. |
| Contact | `/contact` | Shows available contact details, a general Johannesburg map, and an enquiry form submitted through Formspree. |

## Sitemap

The root route redirects to `/home`. The diagram groups routes by how visitors reach them; these are file-based routes, not nested URL paths.

```text
/ (redirects to /home)
├── /home
├── /explore
│   ├── /package/[id]
│   └── /experience/[id]
├── /bookings
│   └── /confirmation
├── /calculate-fees
└── /more
    ├── /about
    ├── /overview
    ├── /memberships
    └── /contact
```

The diagram shows navigation links; indentation does not indicate nested URL paths.

## Prices and booking discounts

All amounts are shown in South African Rand (ZAR). These are project-scenario prices, not a live venue quote.

| Offer | Listed price |
|---|---:|
| Gaming packages | R1,500 each |
| Individual experiences | R750 each |
| Casual Pass | R150 / 3 hours |
| Elite Member | R1,200 / month |
| Pro Academy | R3,500 / month |

Discounts apply to selected packages and individual experiences, not memberships:

| Number of selected items | Discount |
|---:|---:|
| 1 | 0% |
| 2 | 5% |
| 3 | 10% |
| More than 3 | 15% |

For example, one R1,500 package and two R750 experiences total R3,000 before discount and R2,700 after the 10% discount.

## Technology and external services

- Expo SDK 58, React Native 0.88, React 19, and TypeScript.
- Expo Router for file-based navigation across native and web routes (Expo, 2026a; Expo, 2026b).
- React Native for the cross-platform application interface (React Native, n.d.).
- Formspree for booking-request and contact-enquiry submissions (Formspree, 2026).
- Google Maps for an approximate Johannesburg map; it is not the venue's verified location (Google, n.d.).
- Unsplash-hosted remote images, which require an internet connection (Unsplash, n.d.).
- Node.js built-in test runner for booking reducer and fee-calculation tests.

## Limitations and content notes

- Formspree receives booking requests for the arena to review. The arena must confirm availability; no reservation or payment is created by the app.
- Booking requests and general enquiries use the same Formspree form, with separate email subjects. Confirm the recipient and notification settings in the Formspree dashboard before launch.
- The venue is a fictional project scenario. The street address and opening hours have not been verified or supplied.
- The map is centered on Johannesburg generally and must not be treated as the arena's exact location.
- Specific membership benefits and player-development progression criteria have not been supplied.
- Gaming images are loaded remotely and are unavailable without an internet connection.

## Getting started

Install dependencies and start the Expo development server:

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `w` to open the web version.

Run the project checks:

```bash
npm run lint
npx tsc --noEmit
npm test
```

## Project structure

```text
src/app/          Expo Router screens and tab navigation
src/components/   Shared UI components
src/constants/    Theme, offers, prices, and configurable contact details
src/services/     Shared external-service submission logic
src/state/        Shared booking state and reducer
tests/            Booking reducer and fee-calculation tests
```

## Brand colours

| Colour | Hex | Usage |
|---|---|---|
| Primary purple | `#170398` | Headings, navigation, and key totals |
| Cyan | `#0499B1` | Accents and secondary actions |
| Action green | `#5ACF29` | Primary actions and highlights |
| Pale blue | `#F5FAFD` | Informational surfaces |
| Border | `#D9D9D9` | Card outlines and dividers |
| White | `#FFFFFF` | Main surfaces |

## Changelog

### 2026-11-12

- Connected booking requests and contact enquiries to Formspree, with separate email subjects and submission feedback.
- Updated the booking flow to collect contact details and preferred session date/time while clearly stating that the venue must confirm availability.
- Expanded this README with project, functionality, sitemap, and reference information.

## References (Harvard Anglia)

The following references cover the external technologies and services used by the app. Project-scenario information and student details were supplied for the project and are not represented as independently researched facts.

Expo (2026a) *Expo Router*. Available at: https://docs.expo.dev/versions/v58.0.0/sdk/router/ (Accessed: 12 November 2026).

Expo (2026b) *Expo SDK 58.0.0 documentation*. Available at: https://docs.expo.dev/versions/v58.0.0/ (Accessed: 12 November 2026).

Formspree (2026) *Submit forms with JavaScript (AJAX)*. Updated 23 March 2026. Available at: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax (Accessed: 12 November 2026).

Google (n.d.) *Google Maps*. Available at: https://www.google.com/maps (Accessed: 12 November 2026).

React Native (n.d.) *Introduction*. Available at: https://reactnative.dev/docs/getting-started (Accessed: 12 November 2026).

Unsplash (n.d.) *License*. Available at: https://unsplash.com/license (Accessed: 12 November 2026).