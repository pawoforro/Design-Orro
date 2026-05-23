export default function PortfolioPage() {
  const projects = [
    {
      title: 'Minimal Branding Kit',
      category: 'Brand Identity',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mobile App UI Concept',
      category: 'UI / UX Design',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Creative Poster Series',
      category: 'Graphic Design',
      image:
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Modern Landing Page',
      category: 'Web Design',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-transparent to-cyan-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6">
              Creative Portfolio Showcase
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Share Your
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}
                Designs
              </span>
              <br />
              With Style.
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              A modern portfolio website concept for designers to showcase
              projects, case studies, creative ideas, and personal branding.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition-transform">
                View Projects
              </button>

              <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop"
                alt="Portfolio preview"
                className="rounded-3xl object-cover h-[500px] w-full"
              />

              <div className="absolute bottom-10 left-10 rounded-2xl bg-black/70 backdrop-blur-md px-5 py-4 border border-white/10">
                <p className="text-sm text-white/60">Featured Project</p>
                <h3 className="text-xl font-bold mt-1">Creative Identity</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-fuchsia-400 mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected Projects
            </h2>
          </div>

          <p className="text-white/60 max-w-lg">
            Display your best work with elegant layouts, immersive visuals, and
            smooth interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-[28px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-cyan-300 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <button className="mt-5 text-sm font-medium text-white/70 hover:text-white transition-colors">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I create digital experiences that feel modern and memorable.
            </h2>
          </div>

          <div>
            <p className="text-lg text-white/70 leading-relaxed">
              This portfolio template is designed for graphic designers, UI/UX
              creators, freelancers, and creative studios. Add your projects,
              social links, testimonials, and contact information to build your
              online presence.
            </p>

            <div className="mt-8 flex gap-4">
              {['Dribbble', 'Behance', 'Instagram'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 px-5 py-3 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/50 text-sm">
        © 2026 Creative Portfolio — Designed for showcasing your work.
      </footer>
    </div>
  );
}
