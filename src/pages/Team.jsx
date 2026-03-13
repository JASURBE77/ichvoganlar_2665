import React from 'react'

const members = [
  { name: 'Giovanni Rosaria', role: 'Founder', instagram: 'giovanni_organics', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80' },
  { name: 'Marianne Lane', role: 'Garden Expert', instagram: 'marianne_green', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Riga Pelton', role: 'Plant Scientist', instagram: 'riga_plants', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Reiko Knightley', role: 'Ecologist', instagram: 'reiko.eco', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Zuri Lawrence', role: 'Soil Specialist', instagram: 'zuri_soil', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80' },
  { name: 'Karen Allen', role: 'Community Lead', instagram: 'karen_organic', avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80' }
]

const Team = () => {
  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-green-600">Team</p>
          <h2 className="text-4xl font-bold mt-2">Our Organic Experts</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Expertly driven and sustainably rooted — our team combines experience and passion for organic farming.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="card bg-base-100 shadow-xl border border-green-200 hover:shadow-2xl transition-shadow duration-300">
              <figure className="h-72 overflow-hidden rounded-t-xl border-b-2 border-green-100 bg-white">
                <img src={member.avatar} alt={member.name} className="h-full w-full object-contain transition duration-300 hover:scale-105" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-xs text-green-600 mt-1">
                  <a
                    href={`https://www.instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700"
                  >
                    @{member.instagram}
                  </a>
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  <a href={`https://www.instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative text-white py-14"
        style={{
          backgroundImage: "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL1wgTGW_pjG_hugdnglcQ63NDoLk91zCwRyHPA8FzQ2xiPKyh')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white">Subscribe to our Newsletter</h3>
            <p className="mt-2 text-white/90 max-w-xl">Get the latest updates on organic farming, events, and green living tips.</p>
          </div>
          <form className="flex w-full max-w-lg gap-2 items-center">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="input input-bordered w-full pl-10"
              />
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="bg-base-100 py-10">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-bold text-lg">Contact Us</h4>
            <p className="mt-2 text-sm">info@organick.com</p>
            <p className="text-sm">+123 456 7890</p>
            <p className="text-sm">Global Market, 8th Floor</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Organick</h4>
            <p className="mt-2 text-sm">Caring for nature and people with sustainable farming solutions.</p>
            <div className="mt-3 flex gap-2">
              <span className="badge badge-outline">Facebook</span>
              <span className="badge badge-outline">Twitter</span>
              <span className="badge badge-outline">Instagram</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">Utility Pages</h4>
            <ul className="mt-2 text-sm space-y-1">
              <li>About Us</li>
              <li>Help Center</li>
              <li>Deliveries</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <p className="text-center text-xs text-gray-500">© 2026 Organick. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default Team
