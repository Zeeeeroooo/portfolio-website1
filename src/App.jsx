const profile = {
  name: 'Raffy Jay Dinero',
  role: 'Customer Service Representative | Virtual Assistant',
  intro:
    'Customer service professional with 6 years of experience supporting international accounts through chat, email, and phone. Skilled in resolving account, payment, onboarding, and technical issues with a calm, detail-oriented approach.',
  email: 'raffyjay.dinero@gmail.com',
  whatsapp: '+639396136673',
  discord: '@primoisalwayshere',
  telegram: '@primoishere',
  linkedin: 'linkedin.com/in/raffyjaydinero',
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

const impactStats = [
  {
    value: '6+',
    label: 'Years of customer support experience'
  },
  {
    value: '6',
    label: 'Employers and client accounts supported'
  },
  {
    value: '999+',
    label: 'Customers assisted across chat, email, and phone'
  },
  {
    value: '90%+',
    label: 'Service quality target for every customer interaction'
  }
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

const contactMethods = [
  {
    name: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: 'bg-slate-100 text-slate-900',
    icon: 'email'
  },
  {
    name: 'WhatsApp',
    value: profile.whatsapp,
    href: 'https://wa.me/639396136673',
    color: 'bg-emerald-100 text-emerald-700',
    icon: 'whatsapp'
  },
  {
    name: 'Telegram',
    value: profile.telegram,
    href: 'https://t.me/primoishere',
    color: 'bg-sky-100 text-sky-700',
    icon: 'telegram'
  },
  {
    name: 'Discord',
    value: profile.discord,
    href: 'https://discord.com/app',
    color: 'bg-indigo-100 text-indigo-700',
    icon: 'discord'
  },
  {
    name: 'LinkedIn',
    value: profile.linkedin,
    href: 'https://www.linkedin.com/in/raffyjaydinero/',
    color: 'bg-blue-100 text-blue-700',
    icon: 'linkedin'
  }
]

function PlatformIcon({ type }) {
  const commonProps = {
    className: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }

  if (type === 'whatsapp') {
    return (
      <svg {...commonProps}>
        <path d="M12.04 2a9.86 9.86 0 0 0-8.48 14.88L2.4 22l5.25-1.38A9.95 9.95 0 0 0 12.04 22a10 10 0 0 0 0-20Zm0 18.26a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.1 8.1 0 1 1 6.94 3.84Zm4.47-6.1c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    )
  }

  if (type === 'telegram') {
    return (
      <svg {...commonProps}>
        <path d="M21.94 4.16a1.43 1.43 0 0 0-1.58-.24L3.3 10.5c-.7.27-1.13.73-1.09 1.2.04.47.53.86 1.29 1.08l4.27 1.3 1.64 5.2c.18.57.5.92.91.97.41.05.82-.2 1.17-.7l2.25-3.16 4.36 3.22c.48.35.94.48 1.33.36.39-.12.67-.49.8-1.06l2.22-13.27c.11-.65-.07-1.16-.51-1.48Zm-3.07 3.05-8.08 7.31-.32 3.17-1.05-3.35 9.45-7.13Z" />
      </svg>
    )
  }

  if (type === 'discord') {
    return (
      <svg {...commonProps}>
        <path d="M19.54 5.23A16.78 16.78 0 0 0 15.4 4c-.18.33-.39.77-.53 1.12a15.64 15.64 0 0 0-4.74 0A8.5 8.5 0 0 0 9.59 4c-1.45.25-2.84.67-4.14 1.24C2.82 9.1 2.1 12.86 2.45 16.57A16.6 16.6 0 0 0 7.52 19.1c.41-.55.77-1.14 1.08-1.76-.59-.22-1.14-.49-1.66-.8.14-.1.27-.21.4-.32a11.9 11.9 0 0 0 9.32 0l.39.32c-.52.31-1.08.58-1.66.8.31.62.67 1.21 1.08 1.76a16.54 16.54 0 0 0 5.08-2.53c.42-4.3-.71-8.03-2.01-11.34ZM8.68 14.28c-.99 0-1.8-.9-1.8-2s.79-2 1.8-2c1 0 1.82.9 1.8 2 0 1.1-.8 2-1.8 2Zm6.64 0c-.99 0-1.8-.9-1.8-2s.79-2 1.8-2c1 0 1.82.9 1.8 2 0 1.1-.8 2-1.8 2Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M5.34 8.9H2.67V21h2.67V8.9ZM4 3a1.55 1.55 0 1 0 0 3.1A1.55 1.55 0 0 0 4 3Zm17.33 11.06c0-3.24-1.73-4.74-4.04-4.74a3.49 3.49 0 0 0-3.15 1.73V8.9h-2.66V21h2.66v-6.7c0-1.76.33-3.46 2.51-3.46 2.15 0 2.18 2.01 2.18 3.57V21h2.5v-6.94ZM9.44 8.9H6.78V21h2.66V8.9Z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.4L4.67 7H4v.57l8 5.9 8-5.9V7h-.67L12 12.4Z" />
    </svg>
  )
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2f6f8f]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#17232c] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#5d6d73]">{description}</p>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8f9] text-[#24313a]">
      <nav className="sticky top-0 z-50 border-b border-[#dce5e8]/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold text-[#17232c]">
            {profile.name}
          </a>
          <div className="hidden gap-6 text-sm font-medium text-[#5d6d73] sm:flex">
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-[#2f6f8f]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="bg-gradient-to-br from-white via-[#f2f7f8] to-[#e8f1f4] px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="animate-floatIn">
            <p className="mb-4 inline-flex rounded-full border border-[#b9d7df] bg-white px-4 py-2 text-sm font-medium text-[#2f6f8f] shadow-sm">
              {profile.availability}
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-[#17232c] sm:text-6xl lg:text-7xl">
              Reliable customer support for fast-moving teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6d73]">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="rounded-full bg-[#17232c] px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#17232c]/10 transition hover:-translate-y-1 hover:bg-[#2f6f8f]"
              >
                View Experience
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-[#dce5e8] bg-white px-7 py-3 text-center text-sm font-semibold text-[#24313a] shadow-sm transition hover:-translate-y-1 hover:border-[#9ac2cd] hover:text-[#2f6f8f]"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="animate-floatIn rounded-[2rem] border border-[#20323a] bg-[#17232c] p-8 text-white shadow-2xl shadow-[#c9d8dd]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-36 w-36 rounded-2xl border border-white/15 bg-white object-cover shadow-2xl shadow-[#0d151b]/40"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9bd4df]">
                  {profile.role}
                </p>
                <h2 className="mt-5 text-3xl font-bold leading-tight">
                  6 years in customer support, account assistance, and technical troubleshooting.
                </h2>
              </div>
            </div>
            <dl className="mt-8 grid gap-5">
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-[#a9bbc0]">Location</dt>
                <dd className="mt-1 font-semibold">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-[#a9bbc0]">Support Channels</dt>
                <dd className="mt-1 font-semibold">Chat, email, phone, and community tickets</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-[#a9bbc0]">Tools</dt>
                <dd className="mt-1 font-semibold">Zendesk, Jira, Microsoft Office</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-[#dce5e8] bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.25rem] border border-[#dce5e8] bg-[#f6f8f9] p-6 text-center"
            >
              <p className="text-4xl font-black tracking-tight text-[#2f6f8f]">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#24313a]">{stat.label}</p>
            </div>
          ))}
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
                className="rounded-[1.5rem] border border-[#dce5e8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#9ac2cd] hover:shadow-xl hover:shadow-[#dbe8ec]"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f1f4] font-bold text-[#2f6f8f]">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-[#17232c]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5d6d73]">{item.description}</p>
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
                className="rounded-2xl border border-[#dce5e8] bg-[#f6f8f9] p-5 font-semibold text-[#24313a] transition hover:-translate-y-1 hover:border-[#9ac2cd] hover:bg-[#e8f1f4]"
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
                className="rounded-[1.5rem] border border-[#dce5e8] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#17232c]">{job.role}</h3>
                    <p className="mt-1 font-semibold text-[#2f6f8f]">{job.company}</p>
                  </div>
                  <p className="rounded-full bg-[#e8f1f4] px-4 py-2 text-sm font-semibold text-[#45616a]">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-[#5d6d73]">
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
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#17232c] p-8 text-white shadow-2xl shadow-[#c9d8dd] sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9bd4df]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let's work together</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#c4d1d4]">
              Looking for dependable customer support, virtual assistance, or team coordination help? Reach me through the platform that works best for you.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const content = (
                <>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${method.color}`}>
                    <PlatformIcon type={method.icon} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#a9bbc0]">
                      {method.name}
                    </span>
                    <span className="mt-1 block break-words text-base font-bold text-white">
                      {method.value}
                    </span>
                  </span>
                </>
              )

              return method.href ? (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:-translate-y-1 hover:border-[#9bd4df]/70 hover:bg-white/10"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={method.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left"
                >
                  {content}
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center text-sm text-[#a9bbc0] sm:flex-row">
            <span>{profile.location}</span>
            <span className="hidden text-[#647b82] sm:inline">/</span>
            <span>Available for remote support roles and VA work</span>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-[#6d7f84]">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  )
}

export default App
