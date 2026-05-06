export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Engineering Managers &amp; SREs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Blame-Free Incident Postmortems{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Ingest incident data from Slack, PagerDuty, or Jira. Our AI analyzes the timeline and generates structured postmortems focused on system improvements — never individuals.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $59/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant Analysis", desc: "AI parses your incident timeline and extracts contributing factors in seconds." },
            { icon: "🔗", title: "Native Integrations", desc: "Connect Slack, PagerDuty, and Jira to pull incident data automatically." },
            { icon: "📋", title: "Structured Reports", desc: "Get consistent postmortems with impact, timeline, root causes, and action items." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="text-5xl font-bold text-white mb-1">$59<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for reliable postmortems</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited postmortem generation",
              "Slack, PagerDuty & Jira integrations",
              "AI-powered root cause analysis",
              "Exportable PDF & Markdown reports",
              "Team collaboration (up to 10 seats)",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does 'blame-free' actually mean?",
              a: "Our AI is trained to focus on systemic and process failures rather than attributing fault to individuals. Reports highlight what broke and how to fix it — not who was on-call."
            },
            {
              q: "Which integrations are supported?",
              a: "We support Slack (incident channels), PagerDuty (incident timelines), and Jira (linked tickets). You can also paste raw incident data manually."
            },
            {
              q: "Can I export the postmortems?",
              a: "Yes. Every generated postmortem can be exported as a formatted PDF or Markdown file, ready to share with your team or store in your wiki."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PostmortemAI. All rights reserved.
      </footer>
    </main>
  );
}
