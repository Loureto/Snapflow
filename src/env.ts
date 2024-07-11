import { z } from 'zod'

const envSchem = z.object({
  VITE_BASE_URL: z.string().url()
})

export const env = envSchem.parse(import.meta.env)
