# Next Level Gaming & Esports Arena

A light-themed Expo/React Native app for exploring gaming packages, individual experiences, memberships, and a demo booking flow. The project is built as a university group project.

## Features

- Home screen with featured packages and popular experiences
- Explore catalogue for four gaming packages and three individual experiences, with reusable detail screens
- About, arena overview, and solo membership screens
- Four-tab navigation: Home, Explore, Bookings, and More
- Shared booking selection across screens, with add/remove/clear actions and an itemized fee summary
- Contact form with client-side validation
- Inter typography, accessible touch targets, safe-area-aware layouts, and loading/error states for remote images

## Prices and booking discounts

All amounts are in South African Rand (ZAR).

| Offer | Listed price |
|---|---:|
| Gaming packages | R1,500 each |
| Individual experiences | R750 each |
| Casual Pass | R150 / 3 hours |
| Elite Member | R1,200 / month |
| Pro Academy | R3,500 / month |

Booking discounts apply to selected packages and individual experiences, not memberships:

| Number of selected items | Discount |
|---:|---:|
| 1 | 0% |
| 2 | 5% |
| 3 | 10% |
| More than 3 | 15% |

For example, one R1,500 package and two R750 experiences total R3,000 before discount and R2,700 after the 10% discount. The calculator updates as items are added or removed.

## Demo limitations and content

- Confirmation is a demo estimate only. It does not reserve a session or process payment.
- The contact form validates entered details locally; it does not send or store a message.
- A city-level location is shown, but verified address, phone, email, opening hours, and directions were not provided. These values are kept configurable in `src/constants/contact.ts`.
- Membership benefits and player-development progression criteria were not provided and are not invented.
- Gaming photography is loaded from Unsplash and requires an internet connection.

## Tech stack

- Expo SDK 58, React Native, and TypeScript
- Expo Router
- Inter via `@expo-google-fonts/inter`
- Node's built-in test runner for booking and pricing logic

## Getting started

Install dependencies and start Expo:

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `w` to open the web version.

Run checks:

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
src/state/        Shared booking state and reducer
tests/            Pricing and booking reducer tests
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

## Team

| Member | Student number |
|---|---|
| Mulenga Noam | ST10517736 |
| Cain Joseph | ST10541995 |
| Neo Sipho | ST10535603 |
| Umile Mbombela | ST10524342 |

