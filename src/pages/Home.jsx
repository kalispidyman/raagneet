import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { title: 'Web Development', desc: 'Blazing fast, scalable applications built with modern frameworks.' },
    { title: 'UI/UX Design', desc: 'Intuitive, visually stunning interfaces tailored for user engagement.' },
    { title: 'Digital Strategy', desc: 'Data-driven marketing and growth strategies for maximum ROI.' },
  ];

  return (
    <>
      <HeroSection />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl group cursor-default">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{f.title}</h3>
                <p className="text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-primary inline-block px-8 py-3">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;