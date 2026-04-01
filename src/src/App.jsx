import React, { useState, useEffect } from 'react';
// Pastikan Anda menginstall: npm install lucide-react
import { 
  Ship, Droplets, Fish, AlertTriangle, BookOpen, Building2, 
  Home, Scale, TrendingUp, Globe, Clock, CheckCircle, 
  Settings, TestTube, Microscope, ArrowRight, X, Play,
  Cpu, FileText, Zap, Award
} from 'lucide-react';

// --- KOMPONEN UI GLOBAL ---
const Modal = ({ isOpen, onClose, title, children, color }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-lg p-8 rounded-2xl shadow-2xl transform scale-100 animate-wipe"
        style={{ background: `linear-gradient(135deg, #111 0%, ${color}40 100%)`, border: `1px solid ${color}` }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold mb-4" style={{ color: color }}>{title}</h3>
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Narrator = ({ name, role }) => (
  <div className="absolute top-8 left-8 narrator-tag p-4 rounded-r-xl z-40 animate-float">
    <p className="text-xs text-gray-400 uppercase tracking-wider">{role}</p>
    <p className="text-xl font-bold text-white">{name}</p>
  </div>
);

// --- SCENE 1: Potensi & Tantangan ---
const Scene1 = ({ onNext }) => {
  const [waveDone, setWaveDone] = useState(false);
  const [shrimpJumped, setShrimpJumped] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setWaveDone(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleShrimpClick = () => {
    setShrimpJumped(true);
    setTimeout(() => setShrimpJumped(false), 2000);
  };

  return (
    <div className="relative w-full h-screen cinematic-lighting flex flex-col items-center justify-center overflow-hidden">
      <Narrator name="Nabil, Balya & Juan" role="Opening Presenters" />
      
      {!waveDone && (
        <div className="absolute inset-0 bg-[#0077be] z-50 animate-wave flex items-center justify-center">
          <div className="w-full h-32 bg-white/20 blur-xl"></div>
        </div>
      )}

      <div className={`transition-opacity duration-1000 ${waveDone ? 'opacity-100' : 'opacity-0'}`}>
        <div className="isometric-container w-[600px] h-[600px] relative">
          <div className="absolute inset-0 bg-blue-500/20 border border-blue-400/30 rounded-full animate-pollute shadow-[0_0_50px_rgba(0,119,190,0.5)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-gradient-to-br from-green-500/40 to-emerald-800/60 rounded-3xl blur-[2px] isometric-item"></div>

          <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: '0s' }}>
            <Ship className="text-[#f1c40f] w-12 h-12" />
            <span className="text-xs font-bold text-[#f1c40f] block mt-2">To USA</span>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <Ship className="text-[#f1c40f] w-12 h-12" />
            <span className="text-xs font-bold text-[#f1c40f] block mt-2">To EU</span>
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <Ship className="text-[#f1c40f] w-12 h-12" />
            <span className="text-xs font-bold text-[#f1c40f] block mt-2">To JPN</span>
          </div>

          <div className="absolute bottom-1/3 left-1/3 isometric-item cursor-pointer group" onClick={handleShrimpClick}>
            <div className={`w-24 h-24 bg-teal-900/80 rounded-full border-4 border-teal-500 flex items-center justify-center transition-all ${shrimpJumped ? 'bg-red-900/80 border-red-500' : ''}`}>
               <Fish className={`text-[#ff7f50] w-12 h-12 transition-all ${shrimpJumped ? 'animate-shrimp' : ''}`} />
            </div>
            
            <div className="absolute -top-16 -left-16 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={(e) => { e.stopPropagation(); setModalData('amonia'); }} className="p-3 bg-yellow-500/20 border border-yellow-500 rounded-full hover:bg-yellow-500/40">
                <AlertTriangle className="text-yellow-500 w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setModalData('cangkang'); }} className="p-3 bg-orange-500/20 border border-orange-500 rounded-full hover:bg-orange-500/40">
                <Settings className="text-orange-500 w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setModalData('limbah'); }} className="p-3 bg-green-500/20 border border-green-500 rounded-full hover:bg-green-500/40">
                <Droplets className="text-green-500 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="text-lg text-gray-300 mb-4 text-center max-w-2xl px-4">
          Indonesia adalah raksasa eksportir udang global. Namun di balik kilau emasnya, terdapat tanggung jawab lingkungan. <br/> <span className="text-[#ff7f50] font-bold">Klik kolam udang & ikon peringatan.</span>
        </p>
        <button onClick={onNext} className="flex items-center gap-2 px-8 py-3 bg-[#0077be] hover:bg-[#005a8f] rounded-full font-bold transition-all animate-pulse">
          Lanjut ke Scene 2 <ArrowRight size={20} />
        </button>
      </div>

      <Modal isOpen={modalData === 'amonia'} onClose={() => setModalData(null)} title="Bahaya Amonia" color="#f1c40f">
        <p className="text-lg">Dampak akumulasi sisa pakan udang yang tidak termakan akan berubah menjadi Amonia beracun, merusak insang udang.</p>
      </Modal>
      <Modal isOpen={modalData === 'cangkang'} onClose={() => setModalData(null)} title="Penumpukan Cangkang" color="#ff7f50">
        <p className="text-lg">Penumpukan kitin dari molting udang memicu pertumbuhan bakteri patogen berbahaya di tanah.</p>
      </Modal>
      <Modal isOpen={modalData === 'limbah'} onClose={() => setModalData(null)} title="Limbah Cair (Eutrofikasi)" color="#2ecc71">
        <p className="text-lg">Kandungan organik tinggi yang dibuang ke laut memicu Eutrofikasi (ledakan alga), mematikan ekosistem pesisir.</p>
      </Modal>
    </div>
  );
};

// --- SCENE 2: Apa itu ISO 14001? ---
const Scene2 = ({ onNext }) => {
  const [showBook, setShowBook] = useState(false);
  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center animate-wipe">
      <Narrator name="Risky & Iqbalgn" role="Concept Explainers" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-64 h-64 border-4 border-[#2ecc71] rounded-full flex items-center justify-center animate-hologram bg-[#2ecc71]/10 backdrop-blur-md">
          <Globe className="w-32 h-32 text-[#2ecc71]" />
        </div>
        <h1 className="mt-8 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#0077be] text-glow uppercase tracking-widest text-center">
          ISO 14001
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-white tracking-wide">
          Sistem Manajemen Lingkungan
        </h2>
      </div>

      <div className="mt-16 flex items-center justify-center gap-12 z-10 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#0077be] transition-colors">
          <Cpu className="w-12 h-12 text-[#0077be] mb-4" />
          <p className="font-semibold text-lg">Bukan Sekadar Hijau</p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#0077be] to-[#2ecc71] w-24"></div>
        <button 
          onClick={() => setShowBook(true)}
          className="relative group flex flex-col items-center text-center p-8 bg-[#2ecc71]/20 rounded-2xl border-2 border-[#2ecc71] hover:bg-[#2ecc71]/40 transition-all transform hover:scale-105"
        >
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#f1c40f] rounded-full flex items-center justify-center text-black font-black text-xl animate-bounce">1</div>
          <BookOpen className="w-16 h-16 text-[#2ecc71] mb-4" />
          <p className="font-bold text-xl text-white">WHAT</p>
          <p className="text-sm text-gray-200 mt-2">Klik Panduan</p>
        </button>
        <div className="h-1 bg-gradient-to-r from-[#2ecc71] to-[#ff7f50] w-24"></div>
        <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#ff7f50] transition-colors">
          <Settings className="w-12 h-12 text-[#ff7f50] mb-4" />
          <p className="font-semibold text-lg">Pencapaian Target</p>
        </div>
      </div>

      <div className="absolute bottom-10 z-10">
        <button onClick={onNext} className="flex items-center gap-2 px-8 py-3 bg-[#2ecc71] hover:bg-[#27ae60] text-black rounded-full font-bold transition-all">
          Lanjut ke Scene 3 <ArrowRight size={20} />
        </button>
      </div>

      <Modal isOpen={showBook} onClose={() => setShowBook(false)} title="Panduan Digital ISO 14001:2015" color="#2ecc71">
        <div className="flex gap-6 items-start">
          <FileText className="w-24 h-24 text-[#2ecc71] flex-shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Klausul Identifikasi Isu Lingkungan</h4>
            <p className="text-gray-300">
              Standar ini <strong>tidak</strong> memberikan kriteria absolut (batas emisi 0%). Sebaliknya, ini membangun framework untuk mencapai target lingkungan mandiri secara sistematis.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// --- SCENE 3: Who, Why & When ---
const Scene3 = ({ onNext }) => {
  const [showDiscount, setShowDiscount] = useState(false);
  const [clockStopped, setClockStopped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setClockStopped(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 overflow-hidden">
      <Narrator name="Luqman, Iqbalgn & Balya" role="The Strategists" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        
        <div className="bg-gradient-to-b from-blue-900/50 to-black/80 p-8 rounded-3xl border border-blue-500/30 flex flex-col items-center">
          <h3 className="text-3xl font-black text-[#0077be] mb-8">WHO</h3>
          <div className="flex gap-8 items-end justify-center w-full">
            <div className="flex flex-col items-center">
              <Building2 className="w-20 h-20 text-gray-400 mb-4" />
              <p className="font-bold">Multinasional</p>
            </div>
            <div className="flex flex-col items-center">
              <Home className="w-12 h-12 text-green-400 mb-4" />
              <p className="font-bold text-sm">UMKM Tambak</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-yellow-900/50 to-black/80 p-8 rounded-3xl border border-yellow-500/30 flex flex-col items-center">
          <h3 className="text-3xl font-black text-[#f1c40f] mb-8">WHY</h3>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10"><Scale className="w-8 h-8 text-[#f1c40f]" /><span className="font-bold text-lg">Hukum & Kepatuhan</span></div>
            <button onClick={() => setShowDiscount(true)} className="flex items-center gap-4 bg-[#2ecc71]/20 p-4 rounded-xl border border-[#2ecc71] hover:bg-[#2ecc71]/40 group"><TrendingUp className="w-8 h-8 text-[#2ecc71]" /><span className="font-bold text-lg text-white">Efisiensi Biaya (Klik!)</span></button>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10"><Globe className="w-8 h-8 text-[#0077be]" /><span className="font-bold text-lg">Pasar Global Terbuka</span></div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-900/50 to-black/80 p-8 rounded-3xl border border-red-500/30 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-black text-[#ff7f50] mb-8">WHEN</h3>
          <div className="relative w-40 h-40 flex items-center justify-center mb-6">
            <Clock className={`w-full h-full text-white/20 absolute ${clockStopped ? '' : 'animate-spin'}`} style={{ animationDuration: '0.5s' }} />
            <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff7f50] to-red-600 transition-all duration-1000 ${clockStopped ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}>SEKARANG</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 z-10">
        <button onClick={onNext} className="flex items-center gap-2 px-8 py-3 bg-[#f1c40f] hover:bg-[#d4ac0d] text-black rounded-full font-bold transition-all">Lanjut ke Scene 4 <ArrowRight size={20} /></button>
      </div>

      <Modal isOpen={showDiscount} onClose={() => setShowDiscount(false)} title="Simulasi Efisiensi" color="#2ecc71">
        <div className="text-center">
          <Zap className="w-20 h-20 text-[#2ecc71] mx-auto mb-4 animate-pulse" />
          <h2 className="text-6xl font-black text-white">-15%</h2>
          <p className="text-xl text-gray-300 mt-2 font-bold">Biaya Listrik Bulanan</p>
        </div>
      </Modal>
    </div>
  );
};

// --- SCENE 4: Where & How - Siklus PDCA ---
const Scene4 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('PLAN');
  const content = {
    PLAN: { icon: <FileText className="w-16 h-16 text-[#0077be]" />, title: "PLAN", desc: "Menandai titik kritis: Air cucian udang, limbah plastik kemasan.", color: "#0077be" },
    DO: { icon: <Settings className="w-16 h-16 text-[#f1c40f]" />, title: "DO", desc: "Instalasi IPAL dan inovasi sirkular ekonomi (cangkang jadi Kitosan).", color: "#f1c40f" },
    CHECK: { icon: <Microscope className="w-16 h-16 text-[#ff7f50]" />, title: "CHECK", desc: "Pemeriksaan lab harian pada air buangan untuk standar pemerintah.", color: "#ff7f50" },
    ACT: { icon: <CheckCircle className="w-16 h-16 text-[#2ecc71]" />, title: "ACT", desc: "Sertifikat rilis (berlaku 3 tahun). Evaluasi & perbaikan terus-menerus.", color: "#2ecc71" }
  };

  return (
    <div className="relative w-full h-screen bg-slate-900 flex flex-col md:flex-row items-center justify-center p-8 overflow-hidden">
      <Narrator name="Naufal" role="Operations Lead" />
      <div className="w-full md:w-1/2 flex items-center justify-center mb-12 md:mb-0">
         <div className="scene3d">
          <div className="cube">
            <div className={`cube__face cube__face--front ${activeTab === 'PLAN' ? 'bg-[#0077be]' : ''}`}>PLAN</div>
            <div className={`cube__face cube__face--right ${activeTab === 'DO' ? 'bg-[#f1c40f] text-black' : ''}`}>DO</div>
            <div className={`cube__face cube__face--back ${activeTab === 'CHECK' ? 'bg-[#ff7f50]' : ''}`}>CHECK</div>
            <div className={`cube__face cube__face--left ${activeTab === 'ACT' ? 'bg-[#2ecc71] text-black' : ''}`}>ACT</div>
            <div className="cube__face cube__face--top bg-gray-800">ISO</div>
            <div className="cube__face cube__face--bottom bg-gray-800">14001</div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col z-10">
        <h2 className="text-4xl font-black mb-8 text-white uppercase tracking-wider text-center md:text-left">Siklus P-D-C-A</h2>
        <div className="flex gap-4 mb-8 justify-center md:justify-start">
          {Object.keys(content).map((key) => (
            <button
              key={key} onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === key ? 'scale-110 shadow-lg' : 'opacity-50 hover:opacity-100'}`}
              style={{ backgroundColor: activeTab === key ? content[key].color : '#333', color: (activeTab === key && (key==='DO' || key==='ACT')) ? '#000' : '#fff' }}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 min-h-[250px]" style={{ borderColor: content[activeTab].color, backgroundColor: `${content[activeTab].color}20` }}>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-white/10 rounded-2xl animate-pulse">{content[activeTab].icon}</div>
            <h3 className="text-3xl font-bold" style={{ color: content[activeTab].color }}>{content[activeTab].title}</h3>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">{content[activeTab].desc}</p>
        </div>
      </div>
      <div className="absolute bottom-10 z-10 w-full flex justify-center">
        <button onClick={onNext} className="flex items-center gap-2 px-8 py-3 bg-[#ff7f50] text-white rounded-full font-bold">Lanjut ke Scene Terakhir <ArrowRight size={20} /></button>
      </div>
    </div>
  );
};

// --- SCENE 5: Manfaat & Penutup ---
const Scene5 = ({ onReset }) => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen sunset-lighting flex flex-col items-center justify-center p-8 overflow-hidden">
      <Narrator name="Juan & Nafis" role="Visionaries" />
      <div className="absolute top-1/4 flex gap-8 z-10 w-full justify-center px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center animate-float"><CheckCircle className="text-[#2ecc71] w-12 h-12 mb-2" /><span className="font-bold text-white">Efisiensi Biaya</span></div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}><Globe className="text-[#0077be] w-12 h-12 mb-2" /><span className="font-bold text-white">Akses Pasar Global</span></div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center animate-float" style={{ animationDelay: '2s' }}><Award className="text-[#f1c40f] w-12 h-12 mb-2" /><span className="font-bold text-white">Citra Positif</span></div>
      </div>
      {showText && (
        <div className="z-20 mt-32 text-center animate-kinetic">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 max-w-4xl mx-auto leading-tight">
            "Karena laut yang sehat,<br/> adalah masa depan kita semua."
          </h1>
          <div className="mt-16 flex flex-col items-center animate-pulseGlow">
             <div className="text-[#ff7f50] font-black text-5xl uppercase tracking-widest text-glow">Siap Eksekusi!</div>
          </div>
        </div>
      )}
      <div className="absolute bottom-10 z-30">
        <button onClick={onReset} className="flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-black text-lg transition-all transform hover:scale-105">
          <Play size={24} className="fill-current" /> Putar Ulang Animasi
        </button>
      </div>
    </div>
  );
};

// --- APP RENDERER UTAMA ---
export default function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const nextScene = () => { if (currentScene < 5) setCurrentScene(prev => prev + 1); };
  const resetAnimation = () => { setCurrentScene(1); };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div className="h-full bg-gradient-to-r from-[#0077be] via-[#2ecc71] to-[#ff7f50] transition-all duration-700 ease-out" style={{ width: `${(currentScene / 5) * 100}%` }}></div>
      </div>
      <div className="w-full h-full relative transition-opacity duration-500">
        {currentScene === 1 && <Scene1 onNext={nextScene} />}
        {currentScene === 2 && <Scene2 onNext={nextScene} />}
        {currentScene === 3 && <Scene3 onNext={nextScene} />}
        {currentScene === 4 && <Scene4 onNext={nextScene} />}
        {currentScene === 5 && <Scene5 onReset={resetAnimation} />}
      </div>
      <div className="absolute bottom-4 right-8 z-50 text-white/30 font-bold text-sm uppercase tracking-widest pointer-events-none">
        ISO 14001: Shrimp Industry Interactive
      </div>
    </div>
  );
}
