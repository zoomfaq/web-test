import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(111,17,17,0.35),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(212,175,55,0.2),transparent_40%),linear-gradient(145deg,#0e1018_0%,#090a0f_50%,#11121a_100%)] text-smoke">
      <div className="pointer-events-none fixed inset-0 opacity-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.28)_0.4px,transparent_0.7px)] [background-size:2.5px_2.5px]" />

      <Link to="/" className="fixed left-4 top-0 z-20 inline-flex h-24 w-24 items-center justify-center" aria-label="На главную">
        <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-gold bg-black/50 text-lg font-bold text-gold">⚔</div>
      </Link>

      <nav className="fixed right-4 top-4 z-20 rounded-md border border-gold/70 bg-black/70 p-2 shadow-lg shadow-gold/20 backdrop-blur">
        <ul className="flex gap-2">
          {[
            { to: '/', label: 'Домой' },
            { to: '/imperium', label: 'Империум' },
            { to: '/order', label: 'Орден' }
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-sm transition ${isActive ? 'bg-gold/20 text-amber-100' : 'text-smoke hover:bg-gold/10 hover:text-amber-100'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="grid min-h-screen place-items-center p-6">{children}</main>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl border border-goldSoft bg-gradient-to-b from-[#11121ae0] to-[#090a0ff2] p-8 text-center shadow-panel"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Adeptus Terra Broadcast</p>
        <motion.h1
          animate={{ textShadow: ['0 0 12px rgba(212,175,55,0.25)', '0 0 28px rgba(212,175,55,0.35)', '0 0 12px rgba(212,175,55,0.25)'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="text-4xl uppercase leading-tight tracking-wider text-amber-200 md:text-6xl"
        >
          Warhammer 40,000
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
          Империум в опасности. Выберите раздел и получите приказ, брифинг и сведения о службе.
        </p>
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="mx-auto mt-7 grid h-16 w-16 place-items-center rounded-full border-2 border-gold text-xs font-bold tracking-[0.15em] text-gold"
        >
          IX
        </motion.div>
      </motion.section>

      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-4 right-4 h-36 w-52 rounded-md border border-gold/40 bg-gradient-to-br from-blood/30 via-gold/10 to-transparent shadow-lg shadow-black/40"
      />
    </Layout>
  );
}

function ImperiumPage() {
  return (
    <Layout>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl border border-gold bg-black/70 p-8 text-center shadow-lg shadow-gold/20">
        <h1 className="text-3xl uppercase tracking-wider text-amber-100">Империум Человечества</h1>
        <p className="mt-4 text-slate-300">Служите Императору и храните рубежи человечества.</p>
        <Link className="mt-6 inline-block text-gold hover:text-amber-200" to="/">
          Вернуться на главную
        </Link>
      </motion.section>
    </Layout>
  );
}

function OrderPage() {
  return (
    <Layout>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-4xl border border-gold bg-black/70 p-8 text-center shadow-lg shadow-gold/20">
        <h1 className="text-3xl uppercase tracking-wider text-amber-100">Орден</h1>
        <div className="mt-6 aspect-video overflow-hidden border border-goldSoft">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/sbgYaeerXhg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </motion.section>
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imperium" element={<ImperiumPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
