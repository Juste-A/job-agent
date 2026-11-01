import type { Job } from '../types.js'

interface HimalayasJob {
  guid: string
  title: string
  companyName: string
  applicationLink: string
  description: string
  locationRestrictions: string[]
  timezoneRestrictions: number[]
  minSalary: number | null
  maxSalary: number | null
  currency: string | null
  salaryPeriod: string
  pubDate: number
  categories: string[]
  seniority: string[]
  employmentType: string
}

function toJob(raw: HimalayasJob): Job {
  return {
    id: `himalayas:${raw.guid}`,
    source: 'himalayas',
    title: raw.title,
    company: raw.companyName,
    url: raw.applicationLink,
    description: raw.description,
    locationRestrictions: raw.locationRestrictions,
    timezoneRestrictions: raw.timezoneRestrictions,
    remote: true,
    salaryMin: raw.minSalary ?? undefined,
    salaryMax: raw.maxSalary ?? undefined,
    salaryCurrency: raw.currency ?? undefined,
    salaryPeriod: raw.salaryPeriod ?? undefined,
    employmentType: raw.employmentType ?? undefined,
    seniority: raw.seniority,
    postedAt: new Date(raw.pubDate * 1000).toISOString() ?? undefined,
    tags: raw.categories
  }
}
// The shape of the whole response
interface HimalayasSearchResponse {
  totalCount: number
  jobs: HimalayasJob[]
}
// The collector
export async function fetchHimalayas(keyword: string, page = 1): Promise<Job[]> {
  // Build the URL
  const params = new URLSearchParams({
    q: keyword,
    page: String(page),
  })
  const url = `https://himalayas.app/jobs/api/search?${params}`
  // Make the request
  const response = await fetch(url)
  // Fail loudly on HTTP errors
  if (!response.ok) {
    throw new Error(`Himalayas request failed: ${response.status} ${response.statusText}`)
  }
  // Parse and type the body
  const data = (await response.json()) as HimalayasSearchResponse
  // Convert every raw job into Job shape
  return data.jobs.map(toJob)
}