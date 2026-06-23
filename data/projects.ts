export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  course: string
  year: string
  cardDescription: string
  coverImage?: string
  paragraphs?: string[]
  links?: ProjectLink[]
  codePrivate?: boolean
}

export const projects: Project[] = [
  {
    slug: 'comp-sys',
    title: 'Custom Memory Allocator in C',
    course: 'CS 240 Foundations of Computer Systems',
    year: 'Fall 2025',
    cardDescription:
      'My recap on taking Foundations of Computer Systems and its final project: a custom dynamic memory allocator in C.',
    coverImage: '/images/comp-sys-cover.jpg',
    codePrivate: true,
    paragraphs: [
      'In Fall 2025, I took CS 240: Foundations of Computer Systems at Wellesley. The one-sentence summary I often give for the course is simple: it was truly a rewarding experience.',
      'Let me expand on that a bit. Over the span of one semester, the course walked through the core building blocks of computation—from digital logic, data representation, and arithmetic circuits, to sequential logic and the design of a simple processor. It then moved into the hardware–software interface, covering programming with memory, x86 control flow and procedures, the call stack, data structure representation, and buffer overflows. Finally, the course introduced abstractions for practical systems, including the process model, shells, signals, threads, dynamic memory allocation, caching, and virtual memory. Many of these concepts were entirely unfamiliar to me at the start of the semester. At times, it felt like being an ancestor from a distant era, trying to produce fire—except the fire was code, and the friction was low-level programming.',
      'One of the culminating projects of the course was the implementation of a custom dynamic memory allocator in C, designed to expose how memory management works beneath standard library functions like malloc and free. The allocator manages heap memory using an explicit doubly linked free list, enabling efficient traversal and constant-time insertion and removal of free blocks. Each heap block maintains metadata in headers and footers, encoding size information and allocation status bits to support accurate block navigation, alignment guarantees, and safe backward traversal during coalescing. Payload addresses are carefully aligned to meet architectural constraints, and all pointer arithmetic is performed explicitly to ensure correctness at the word level.',
      'The allocator supports first-fit allocation, block splitting, and immediate boundary-tag coalescing to reduce external fragmentation. When memory requests cannot be satisfied by existing free blocks, the heap is extended in page-sized increments using sbrk, and newly acquired space is merged with adjacent free regions when possible. Correctness is enforced through a heap consistency checker that validates block sizes, predecessor status bits, footer integrity, and heap boundaries. Together, these mechanisms highlight the systems-level tradeoffs involved in allocator design, illustrating how performance, safety, and memory layout constraints interact in real-world memory management.',
      "Due to course policy, the full implementation code cannot be shared publicly. However, this write-up documents the design decisions, system structure, and conceptual understanding developed throughout the project. I'm always happy to discuss the architecture, tradeoffs, and lessons learned in more detail.",
    ],
  },
  {
    slug: 'prog-lang',
    title: 'MiniJava Compiler & Bytecode VM',
    course: 'CS 251 Principles of Programming Languages',
    year: 'Fall 2025',
    cardDescription:
      'A statically-typed object-oriented language compiler and bytecode virtual machine for a subset of Java, implemented in Rust.',
    coverImage: '/images/prog-lang-cover.jpg',
    links: [{ label: 'GitHub', href: 'https://github.com/clairexue10/miniJava' }],
    paragraphs: [
      'MiniJava is a statically-typed object-oriented language compiler and bytecode virtual machine, implemented in Rust. It covers the full pipeline: recursive-descent parsing, static type checking with nominal subtyping, vtable-based virtual dispatch, and execution on a custom stack-machine VM.',
      'The pipeline proceeds in several stages. Source code is parsed into a source AST, validated for duplicate names and inheritance cycles, then compiled by the type checker into a typed core IR. The type checker infers types, enforces subtype relationships, constructs vtables, and ensures all expressions are used consistently. Only well-typed programs proceed to the next stage.',
      'The bytecode compiler lowers the typed IR into a flat sequence of stack-based instructions, which are then executed by a stack-machine VM with an operand stack and call frame stack. The VM supports the full language including virtual dispatch, field access, null-pointer exceptions, and method calls with single arguments.',
      'MiniJava supports classes with single inheritance, access modifiers (public/private/protected), covariant return types in method overrides, field shadowing, this and super references, and null values. The implementation includes 34 tests covering arithmetic, inheritance, virtual dispatch, object aliasing, access violation enforcement, and all static and runtime error cases.',
    ],
  },
  {
    slug: 'mini-raft',
    title: 'miniRaft: Distributed Consensus in Go',
    course: 'CS 343 Distributed Systems',
    year: 'Spring 2026',
    cardDescription:
      'Implements the Raft consensus algorithm in Go, covering leader election, log replication, heartbeat, and simulated fault tolerance.',
    links: [{ label: 'GitHub', href: 'https://github.com/clairexue10/miniRaft' }],
    paragraphs: [
      'miniRaft is an implementation of the Raft Distributed Consensus Algorithm in Go, built as a class project for CS 343: Distributed Systems at Wellesley College.',
      'The implementation covers the core Raft protocol: leader election with randomized election timeouts, log replication from leader to followers, commit index advancement once a majority acknowledges an entry, a heartbeat mechanism to suppress spurious elections, and simulated node failure and recovery.',
      'Key components include RequestVote and AppendEntry RPC handlers, a LeaderElection driver that manages the candidate vote-gathering process, a Heartbeat routine that sends periodic AppendEntry RPCs to maintain leadership, and a replicateToFollowers function with retry/backoff on failure. An applyEntries background goroutine applies committed entries to the state machine, and simulateFailure randomly takes nodes offline and brings them back to test fault tolerance.',
      'The cluster is configured via a port configuration file and can be run with any number of nodes, each started as a separate process. The implementation demonstrates core distributed systems concepts including split-vote handling, log consistency guarantees, and safe leader transitions.',
    ],
  },
  {
    slug: 'tiktok-college-admissions',
    title: 'College and Representation',
    subtitle: 'Analyzing Bias in TikTok College Admission Consultant Influencers',
    course: 'CS 315 Data Science for the Web',
    year: '2025',
    cardDescription:
      'Analyzed 4,000+ TikTok influencer videos with an end-to-end NLP pipeline — speech transcription, zero-shot classification, topic modeling (NMF), and rhetorical analysis.',
    coverImage: '/images/tiktok-cover.jpg',
    paragraphs: [
      'We developed an end-to-end NLP pipeline combining automated speech transcription, zero-shot classification, topic modeling (NMF), and multi-label rhetorical analysis to examine large-scale TikTok college admissions content. Analyzing 4,000+ influencer videos, the project evaluates how computational methods can infer audience intent and characterize persuasive structures in short-form social media text. The work highlights the strengths and limitations of scalable machine learning approaches for studying platform-mediated educational content.',
    ],
    links: [{ label: 'Paper', href: '/files/tiktok-college-paper.pdf' }],
  },
  {
    slug: 'zara-sales',
    title: 'Zara Sales Volume Prediction',
    course: 'STAT 318 Regression Analysis',
    year: '2025',
    cardDescription:
      'Identified key factors influencing Zara sales volume using multiple linear regression with BIC-based model selection across a 20,000+ product dataset.',
    coverImage: '/images/zara-cover.jpg',
    paragraphs: [
      'This project analyzes a 20,000+ product Zara sales dataset to identify the key factors influencing sales volume in the fast-fashion industry. Using multiple linear regression with BIC-based model selection and a Box–Cox transformation, we found that promotion, price, product section, and season are statistically significant predictors of sales. The results offer data-driven insights into pricing strategy, promotional effectiveness, and seasonal inventory planning.',
    ],
    links: [{ label: 'Report', href: '/files/zara-final-report.pdf' }],
  },
  {
    slug: 'ethics-of-tech',
    title: 'Ethics of Technology',
    course: 'Wellesley Science Center Summer Research',
    year: '2024',
    cardDescription:
      'Examined Shannon Vallor\'s technomoral virtues across Wellesley course catalogs, campus news, and Sidechat posts using human annotation and GPT-based text labeling.',
    coverImage: '/images/ethics-cover.jpg',
    paragraphs: [
      "This project examines the presence of Shannon Vallor's technomoral virtues across three large textual datasets—Wellesley's course catalog, campus news articles, and anonymous Sidechat posts—using a combination of human annotation and GPT-based text labeling. Analyzing thousands of texts, we found that virtues such as perspective, justice, empathy, and civility are meaningfully present across institutional and student-generated content, challenging assumptions about the ethical quality of online discourse. The study demonstrates how computational methods can be used to scale ethical analysis while validating AI-generated labels against human judgment.",
    ],
    links: [
      { label: 'Methodology Poster', href: '/files/ethics-methods-poster.pdf' },
      { label: 'Results Poster', href: '/files/ethics-results-poster.pdf' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
