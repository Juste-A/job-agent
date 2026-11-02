import { fetchAllHimalayas } from './collectors/himalayas.js'

const jobs = await fetchAllHimalayas('vue')

console.log(`Found ${jobs.length} jobs\n`)

for (const job of jobs) {
  const where = job.locationRestrictions.join(', ') || 'Worldwide'
  console.log(`${job.title} | ${job.company} | ${where}`)
}