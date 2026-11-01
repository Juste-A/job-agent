import { fetchHimalayas } from './collectors/himalayas.js'

const jobs = await fetchHimalayas('vue')

console.log(`Found ${jobs.length} jobs\n`)

for (const job of jobs) {
  const where = job.locationRestrictions.join(', ') || 'Worldwide'
  console.log(`${job.title} | ${job.company} | ${where}`)
}