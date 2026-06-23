export interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Research Intern',
    company: 'Programming Languages and Verification Group, MIT Computer Science & Artificial Intelligence Laboratory',
    location: 'Cambridge, MA',
    period: 'June 2026 – Present',
    bullets: [
      'Extending A Tensor Language (ATL) framework towards formally verifying Transformer\'s FlashAttention algorithm.',
    ],
  },
]
