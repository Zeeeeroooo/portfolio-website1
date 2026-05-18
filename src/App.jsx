const profile = {
  name: 'Raffy Jay Dinero',
  role: 'Customer Service Representative | Virtual Assistant',
  intro:
    'Customer service professional with 6 years of experience supporting international accounts through chat, email, and phone. Skilled in resolving account, payment, onboarding, and technical issues with a calm, detail-oriented approach.',
  email: 'raffyjay.dinero@gmail.com',
  location: 'Pasig City, Philippines',
  availability: 'Available for customer support and virtual assistant roles',
  photo: './raffy-jay-dinero.jpg'
}

const strengths = [
  {
    title: 'Customer Support',
    description:
      'Handles customer concerns across chat, email, phone, and community tickets with clear and timely communication.'
  },
  {
    title: 'Account & Payment Assistance',
    description:
      'Supports account setup, updates, deposits, withdrawals, payment concerns, onboarding, and documentation review.'
  },
  {
    title: 'Team Coordination',
    description:
      'Experienced in supervising support staff, monitoring performance, preparing reports, and coordinating issue resolution.'
  }
]

const skills = [
  'Chat, Email, and Phone Support',
  'Technical Troubleshooting',
  'Account Management',
  'Payment Support',
  'Customer Retention',
  'Team Leadership',
  'Onboarding Support',
  'Fraud Documentation Review',
  'Zendesk',
  'Jira',
  'Microsoft Office',
  'E-commerce Support'
]

const experience = [
  {
    role: 'VA / Customer Service Representative',
    company: 'Meta Assets',
    period: 'Jun 2025 - Mar 2026',
    details: [
      'Assisted clients through chat and community tickets with asset setup, account needs, and basic troubleshooting.',
      'Helped set up Business Managers, pages, and profiles for smoother dropshipping and e-commerce transitions.',
      'Recommended suitable asset setups and coordinated with other teams to support client satisfaction.'
    ]
  },
  {
    role: 'VA / Customer Service Team Leader',
    company: 'Online Casino',
    period: 'Oct 2025 - Feb 2026',
    details: [
      'Supported customer service operations for account loading, deposits, withdrawals, and payment-related concerns.',
      'Assisted customers with account setup, updates, and general account maintenance.',
      'Handled customer inquiries professionally while helping keep support responses timely and organized.'
    ]
  },
  {
    role: 'VA / Customer Service Representative',
    company: 'Online Casino',
    period: 'Mar 2025 - Oct 2025',
    details: [
      'Processed cash, card, and digital payment concerns accurately and efficiently.',
      'Assisted customers with deposits, withdrawals, account loading, account setup, and account updates.',
      'Collaborated with other departments to help provide a smooth customer experience.'
    ]
  },
  {
    role: 'Customer Service Supervisor',
    company: 'RAC Phil Corp Online Casino',
    period: 'Aug 2024 - Mar 2025',
    details: [
      'Supervised daily customer service operations, team coordination, scheduling, and reporting.',
      'Monitored team performance and worked with managers and developers to resolve customer issues promptly.',
      'Supported training and development for customer service representatives.'
    ]
  },
  {
    role: 'Customer Service Representative',
    company: 'Concentrix',
    period: 'Sep 2020 - Mar 2024',
    details: [
      'Managed email, chat, and phone support for delivery partners with onboarding, payment, and account concerns.',
      'Handled technical troubleshooting, account management, documentation checks, and onboarding support.'
    ]
  },
  {
    role: 'IR Engineer Technician',
    company: 'NCR Corp',
    period: 'Jun 2017 - Feb 2019',
    details: [
      'Provided technical support for ATM repair, software updates, machine testing, and field engineer assistance.'
    ]
  }
]

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold text-slate-950">
            {profile.name}
          </a>
          <div className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-teal-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="animate-floatIn">
            <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm">
              {profile.availability}
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Reliable customer support for fast-moving teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="rounded-full bg-slate-950 px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-teal-600"
              >
                View Experience
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="animate-floatIn rounded-[2rem] border border-slate-100 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/80">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-36 w-36 rounded-2xl border border-white/10 bg-white object-cover shadow-2xl shadow-slate-950/40"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                  {profile.role}
                </p>
                <h2 className="mt-5 text-3xl font-bold leading-tight">
                  6 years in customer support, account assistance, and technical troubleshooting.
                </h2>
              </div>
            </div>
            <dl className="mt-8 grid gap-5">
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-slate-400">Location</dt>
                <dd className="mt-1 font-semibold">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-slate-400">Support Channels</dt>
                <dd className="mt-1 font-semibold">Chat, email, phone, and community tickets</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-slate-400">Tools</dt>
                <dd className="mt-1 font-semibold">Zendesk, Jira, Microsoft Office</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="About"
            title="Support that is clear, patient, and organized"
            description="I help customers move from confusion to resolution, while keeping records, teams, and follow-ups organized behind the scenes."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Skills"
            title="Core service capabilities"
            description="Focused on practical support skills that are useful for customer service, virtual assistant, and operations support roles."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Experience"
            title="Relevant work history"
            description="A concise view of the roles most relevant to customer support, virtual assistance, team coordination, and technical problem-solving."
          />
          <div className="grid gap-5">
            {experience.map((job) => (
              <article
                key={`${job.role}-${job.company}`}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{job.role}</h3>
                    <p className="mt-1 font-semibold text-teal-700">{job.company}</p>
                  </div>
                  <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-slate-600">
                  {job.details.map((detail) => (
                    <li key={detail} className="leading-7">
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-300 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let's work together</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Looking for dependable customer support, virtual assistance, or team coordination help? Send me a message and I will get back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-teal-200"
            >
              Email Me
            </a>
            <span className="text-slate-400">{profile.email}</span>
            <span className="hidden text-slate-600 sm:inline">/</span>
            <span className="text-slate-400">{profile.location}</span>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  )
}

export default App
