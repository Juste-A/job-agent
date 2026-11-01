export interface Job {
  id: string            // e.g. "himalayas:12345", source prefix avoids clashes
  source: 'himalayas' | 'remotive' | 'infojobs' | 'arbeitnow'
  title: string
  company: string
  url: string
  description: string
  locationRestrictions: string[]   // e.g. ["Spain"], ["Europe"], [] = worldwide
  timezoneRestrictions: number[]  // UTC offsets; Spain is +1/+2
  remote: boolean
  salaryMin?: number | undefined
  salaryMax?: number | undefined
  salaryCurrency?: string | undefined
  salaryPeriod?: string | undefined        // "hourly" vs "annual": 80 hourly ≠ 80 annual!
  employmentType?: string | undefined      // "Contractor" vs "Full Time": you avoid contract roles
  seniority: string[]          // ["Director", "Executive"] = not for you
  postedAt?: string | undefined     // ISO date
  tags: string[]
}