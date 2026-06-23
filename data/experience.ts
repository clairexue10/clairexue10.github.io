export interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Research Assistant',
    company: 'Credibility Lab, Wellesley College',
    location: 'Wellesley, MA',
    period: 'June 2024 – August 2024',
    bullets: [
      'Built a GPT API-powered pipeline to detect bias across 4,000+ news articles scraped with Selenium and BeautifulSoup.',
      'Applied prompt-based classification on content across technology and ethics dimensions; presented at Tanner Conference.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Learning Engineering and Practice Group, MIT',
    location: 'Cambridge, MA',
    period: 'June 2025 – December 2025',
    bullets: [
      'Adapted a Learning Behavior-based Knowledge Tracing ML model for psychomotor training performance in VR.',
      'Built a Python–C# communication pipeline for real-time updates between simulation in Unity and the model in Python.',
      'Implemented a task tracker to monitor training simulations for feedback-driven updates; integrated into the lab\'s codebase.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Programming Systems Lab, Wellesley Computer Science Department',
    location: 'Wellesley, MA',
    period: 'January 2026 – Present',
    bullets: [
      'Extending instruction-selection verifier Arrival for the production Wasm-to-native compiler Cranelift on x86-64.',
      'Building a lowering pipeline for converting instruction bitpatterns to the verifier\'s domain specific language (DSL).',
    ],
  },
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
