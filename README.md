# Job Agent

A personal job search agent that collects frontend developer job listings
from job board APIs, filters out roles that don't fit, and (soon) uses
Claude to score and shortlist the best matches.

> 🚧 Work in progress. I'm building this to automate my own job search
> and to learn AI agent development with TypeScript.

## Why

Searching job boards for Vue/Nuxt roles in Spain and remote Europe takes
hours, and most listings turn out to be irrelevant (wrong location,
wrong stack, contract-only). This agent does the searching and filtering,
and gives me a short daily list to review.

## Current status

- [x] TypeScript project setup (strict mode, NodeNext modules)
- [x] Shared `Job` model that every source maps into
- [x] Himalayas collector with pagination and rate-limit friendly delays
- [ ] Location filter (Spain / worldwide)
- [ ] More sources (Remotive, InfoJobs)
- [ ] Deduplication across sources
- [ ] Claude-powered scoring against my CV and preferences
- [ ] Daily digest and Nuxt dashboard

## How it works

Each job source has its own **collector** in `src/collectors/` that
fetches listings and maps them into a common `Job` type
(`src/types.ts`). New sources plug in without changing the rest of
the pipeline.

## Run it

Requires Node 18+.

    npm install
    npx tsx src/index.ts

## Data sources

Job listings from [Himalayas](https://himalayas.app).
