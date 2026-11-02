import { supabase } from './supabase';
import React, { useState, useEffect } from 'react';

// Iconos SVG Nativos
const IconNetwork = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" />
  </svg>
);

const IconUsers = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconPlus = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconSearch = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconMapPin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const IconRadio = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="2" /><path d="M16.2 7.8a6 6 0 0 1 0 8.4" /><path d="M7.8 16.2a6 6 0 0 1 0-8.4" /><path d="M19.1 4.9a10 10 0 0 1 0 14.2" /><path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
  </svg>
);

const IconCpu = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const IconActivity = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 14 20 10 4 6 12 2 12" />
  </svg>
);

const IconServer = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconCheckCircle = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconAlertTriangle = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconLogOut = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const IconLock = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const INITIAL_NAPS = [
  {
    id: 'NAP-CENTRO-01',
    name: 'NAP Centro Plaza',
    address: 'Av. Luzuriaga 450, Huaraz',
    lat: -9.5298,
    lng: -77.5289,
    capacity: 16,
    powerDbm: -18.5,
    logs: [
      { id: 1, date: '2026-04-10', text: 'Instalación y certificación inicial de la caja NAP.', author: 'Soporte Tarscom' }
    ],
    ports: Array.from({ length: 16 }, (_, i) => ({
      portNumber: i + 1,
      status: i < 2 ? 'occupied' : i === 8 ? 'damaged' : i === 12 ? 'reserved' : 'free',
      clientId: i < 2 ? `CLI-10${i + 1}` : null
    }))
  },
  {
    id: 'NAP-NORTE-02',
    name: 'NAP San Martín',
    address: 'Jr. San Martín 120, Huaraz',
    lat: -9.5240,
    lng: -77.5265,
    capacity: 8,
    powerDbm: -19.2,
    logs: [
      { id: 1, date: '2026-04-12', text: 'Limpieza conector SC/APC por atenuación leve.', author: 'Técnico Campo' }
    ],
    ports: Array.from({ length: 8 }, (_, i) => ({
      portNumber: i + 1,
      status: 'free',
      clientId: null
    }))
  }
];

const INITIAL_CLIENTS = [
  {
    id: 'CLI-101',
    name: 'Juan Pérez',
    dni: '45892011',
    phone: '943123456',
    address: 'Av. Luzuriaga 452, Dpto 2',
    napId: 'NAP-CENTRO-01',
    portNumber: 1,
    fiberColor: 'Azul',
    ontModel: 'Huawei HG8145V5',
    ontSn: '4857544301A4B921',
    ipAddress: '192.168.10.15',
    vlan: '100',
    rxPower: -19.8,
    status: 'active'
  },
  {
    id: 'CLI-102',
    name: 'María Rodríguez',
    dni: '70213944',
    phone: '952876543',
    address: 'Av. Luzuriaga 458',
    napId: 'NAP-CENTRO-01',
    portNumber: 2,
    fiberColor: 'Naranja',
    ontModel: 'ZTE F670L',
    ontSn: 'ZTEGC89A12FF',
    ipAddress: '192.168.10.16',
    vlan: '100',
    rxPower: -20.1,
    status: 'active'
  }
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('ftth_authenticated') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  const [naps, setNaps] = useState(() => {
    const saved = localStorage.getItem('ftth_naps');
    return saved ? JSON.parse(saved) : INITIAL_NAPS;
  });
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem('ftth_clients');
    return saved ? JSON.parse(saved) : INITIAL_CLIENTS;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNap, setSelectedNap] = useState(null);
  const [isNapModalOpen, setIsNapModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [editingClientId, setEditingClientId] = useState(null);
  const [editingNapId, setEditingNapId] = useState(null);
  const [newLogText, setNewLogText] = useState('');

  const emptyNapForm = {
    id: '', name: '', address: '', lat: '-9.5298', lng: '-77.5289', totalPorts: 16, powerDbm: -18.0
  };
  const [napFormData, setNapFormData] = useState(emptyNapForm);

  const emptyClientForm = {
    id: '', name: '', dni: '', phone: '', address: '', napId: '',
    portNumber: 1, fiberColor: 'Azul', ontModel: 'ZTE / Huawei',
    ontSn: '', ipAddress: '', vlan: '100', rxPower: -19.5, status: 'active'
  };
  const [clientFormData, setClientFormData] = useState(emptyClientForm);

  const loadInitialData = async () => {
    try {
      const { data: napsData, error: napError } = await supabase.from('naps').select('*');
      const { data: clientsData, error: clientError } = await supabase.from('clients').select('*');

      if (napsData && napsData.length > 0 && !napError) setNaps(napsData);
      if (clientsData && clientsData.length > 0 && !clientError) setClients(clientsData);
    } catch (err) {
      console.log('Usando almacenamiento local de respaldo:', err);
    }
  };

  useEffect(() => {
    loadInitialData();

    const channel = supabase
      .channel('db-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, () => {
        loadInitialData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (selectedNap) {
      const updated = naps.find(n => n.id === selectedNap.id);
      if (updated) setSelectedNap(updated);
    }
  }, [naps]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'tarscom2026') {
      setIsAuthenticated(true);
      localStorage.setItem('ftth_authenticated', 'true');
      setLoginError('');
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ftth_authenticated');
  };

  const handleResetData = () => {
    if (confirm('¿Deseas restaurar los datos iniciales?')) {
      setNaps(INITIAL_NAPS);
      setClients(INITIAL_CLIENTS);
      localStorage.removeItem('ftth_naps');
      localStorage.removeItem('ftth_clients');
    }
  };

  const handleSaveNap = async (e) => {
    e.preventDefault();
    const napToSave = editingNapId
      ? { ...napFormData, id: editingNapId }
      : {
          ...napFormData,
          id: napFormData.id || `NAP-${Date.now().toString().slice(-4)}`,
          logs: [{ id: Date.now(), date: new Date().toISOString().slice(0, 10), text: 'Creación de caja NAP', author: 'Admin' }],
          ports: Array.from({ length: parseInt(napFormData.totalPorts || 16) }, (_, i) => ({
            portNumber: i + 1,
            status: 'free',
            clientId: null
          }))
        };

    const { error } = await supabase.from('naps').upsert([napToSave]);
    if (error) {
      setNaps(prev => [...prev.filter(n => n.id !== napToSave.id), napToSave]);
    }

    setIsNapModalOpen(false);
    setEditingNapId(null);
    setNapFormData(emptyNapForm);
    loadInitialData();
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    const clientToSave = editingClientId
      ? { ...clientFormData, id: editingClientId }
      : { ...clientFormData, id: `CLI-${Date.now().toString().slice(-4)}` };

    const { error } = await supabase.from('clients').upsert([clientToSave]);
    if (error) {
      setClients(prev => [...prev.filter(c => c.id !== clientToSave.id), clientToSave]);
    }

    setIsClientModalOpen(false);
    setEditingClientId(null);
    setClientFormData(emptyClientForm);
    loadInitialData();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-xl inline-block border border-cyan-500/20">
              <IconLock size={32} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TARSCOM FTTH
            </h1>
            <p className="text-xs text-slate-400">Acceso al Sistema de Gestión de Red</p>
          </div>

          {loginError && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3 rounded-lg text-xs text-center font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Usuario</label>
              <input
                type="text"
                required
                placeholder="ej. admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Contraseña</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-2.5 rounded-lg transition shadow-lg"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalPorts = naps.reduce((acc, n) => acc + (n.capacity || n.totalPorts || 16), 0);
  const occupiedPorts = naps.reduce((acc, n) => acc + (n.ports ? n.ports.filter(p => p.status === 'occupied').length : 0), 0);
  const freePorts = totalPorts - occupiedPorts;
  const occupancyRate = totalPorts > 0 ? ((occupiedPorts / totalPorts) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-500 p-2 rounded-lg text-slate-950">
              <IconNetwork size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TARSCOM FTTH
              </h1>
              <p className="text-xs text-slate-400">Gestor de Cajas NAP y Clientes</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleResetData}
              title="Restaurar Datos"
              className="p-2 text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-lg transition"
            >
              🔄
            </button>
            <button
              onClick={() => { setEditingNapId(null); setNapFormData(emptyNapForm); setIsNapModalOpen(true); }}
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <IconPlus size={16} />
              <span>Nueva NAP</span>
            </button>
            <button
              onClick={() => { setEditingClientId(null); setClientFormData(emptyClientForm); setIsClientModalOpen(true); }}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <IconPlus size={16} />
              <span>Nuevo Cliente</span>
            </button>
            <button
              onClick={handleLogout}
              title="Cerrar Sesión"
              className="p-2 text-slate-400 hover:text-rose-400 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition"
            >
              <IconLogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-800/50 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'dashboard' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <IconActivity size={18} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('naps')}
            className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'naps' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <IconServer size={18} />
            <span>Cajas NAP ({naps.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'clients' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <IconUsers size={18} />
            <span>Clientes ({clients.length})</span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-400 uppercase font-semibold">Total Puertos</p>
                <h3 className="text-3xl font-bold mt-1 text-white">{totalPorts}</h3>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-400 uppercase font-semibold">Ocupación de Red</p>
                <h3 className="text-3xl font-bold mt-1 text-cyan-400">{occupancyRate}%</h3>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-400 uppercase font-semibold">Puertos Libres</p>
                <h3 className="text-3xl font-bold mt-1 text-emerald-400">{freePorts}</h3>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-lg font-bold text-slate-100 mb-4">Estado General de NAPs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {naps.map(nap => {
                  const cap = nap.capacity || nap.totalPorts || 16;
                  const occupied = nap.ports ? nap.ports.filter(p => p.status === 'occupied').length : 0;
                  const percent = Math.round((occupied / cap) * 100);
                  return (
                    <div 
                      key={nap.id} 
                      onClick={() => { setSelectedNap(nap); setActiveTab('naps'); }}
                      className="bg-slate-900/60 p-4 rounded-lg border border-slate-700/80 hover:border-cyan-500 cursor-pointer transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-cyan-400">{nap.id}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                          {occupied}/{cap} ({percent}%)
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 truncate mb-3">{nap.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'naps' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Gestión de Cajas NAP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {naps.map(nap => (
                <div key={nap.id} className="bg-slate-800 border border-slate-700 p-5 rounded-xl space-y-3">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-cyan-400">{nap.name} ({nap.id})</h3>
                    <span className="text-xs text-slate-400"><IconMapPin size={14} className="inline"/> {nap.address}</span>
                  </div>
                  <p className="text-sm text-slate-300">Potencia Óptica: <span className="font-mono text-emerald-400">{nap.powerDbm || -18.5} dBm</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Listado de Clientes FTTH</h2>
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-3">Cliente</th>
                    <th className="p-3">NAP / Puerto</th>
                    <th className="p-3">ONT / IP</th>
                    <th className="p-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {clients.map(c => (
                    <tr key={c.id} className="hover:bg-slate-750">
                      <td className="p-3 font-medium">{c.name} <div className="text-xs text-slate-400">DNI: {c.dni}</div></td>
                      <td className="p-3">{c.napId} (Pto {c.portNumber})</td>
                      <td className="p-3 font-mono text-xs text-cyan-300">{c.ontModel} <br/>{c.ipAddress}</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{c.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* MODAL NUEVA NAP */}
      {isNapModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold text-white">Registrar Caja NAP</h3>
            <form onSubmit={handleSaveNap} className="space-y-3">
              <div>
                <label className="text-xs text-slate-400">Código ID</label>
                <input type="text" placeholder="NAP-EST-01" required value={napFormData.id} onChange={e => setNapFormData({...napFormData, id: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400">Nombre / Ubicación</label>
                <input type="text" placeholder="Parque Principal" required value={napFormData.name} onChange={e => setNapFormData({...napFormData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400">Dirección</label>
                <input type="text" placeholder="Av. Principal 123" required value={napFormData.address} onChange={e => setNapFormData({...napFormData, address: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setIsNapModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded text-sm">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded text-sm font-medium">Guardar NAP</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL NUEVO CLIENTE */}
      {isClientModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold text-white">Registrar Nuevo Cliente</h3>
            <form onSubmit={handleSaveClient} className="space-y-3">
              <div>
                <label className="text-xs text-slate-400">Nombre Completo</label>
                <input type="text" placeholder="Juan Pérez" required value={clientFormData.name} onChange={e => setClientFormData({...clientFormData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400">DNI</label>
                <input type="text" placeholder="45892011" required value={clientFormData.dni} onChange={e => setClientFormData({...clientFormData, dni: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400">Caja NAP Asignada</label>
                <select value={clientFormData.napId} onChange={e => setClientFormData({...clientFormData, napId: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white">
                  <option value="">Seleccione una NAP</option>
                  {naps.map(n => <option key={n.id} value={n.id}>{n.name} ({n.id})</option>)}
                </select>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setIsClientModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded text-sm">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">Guardar Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}