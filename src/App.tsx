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

const IconMapPin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
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

const IconEdit = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconTrash = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6" strokeWidth="2" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" />
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
  const [naps, setNaps] = useState(INITIAL_NAPS);
  const [clients, setClients] = useState(INITIAL_CLIENTS);

  const [selectedNap, setSelectedNap] = useState<any>(null);
  const [isNapModalOpen, setIsNapModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [newLogText, setNewLogText] = useState('');

  const emptyNapForm = {
    id: '', name: '', address: '', lat: '-9.5298', lng: '-77.5289', capacity: 16, powerDbm: -18.0
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
      if (supabase && supabase.from) {
        const { data: napsData } = await supabase.from('naps').select('*');
        const { data: clientsData } = await supabase.from('clients').select('*');

        if (napsData && napsData.length > 0) setNaps(napsData);
        if (clientsData && clientsData.length > 0) setClients(clientsData);
      }
    } catch (err) {
      console.log('Modo local activo');
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (selectedNap) {
      const updated = naps.find(n => n.id === selectedNap.id);
      if (updated) setSelectedNap(updated);
    }
  }, [naps]);

  const handleLogin = (e: React.FormEvent) => {
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

  const handleSaveNap = async (e: React.FormEvent) => {
    e.preventDefault();
    const newNap = {
      ...napFormData,
      id: napFormData.id || `NAP-${Date.now().toString().slice(-4)}`,
      capacity: parseInt(String(napFormData.capacity || 16)),
      ports: Array.from({ length: parseInt(String(napFormData.capacity || 16)) }, (_, i) => ({
        portNumber: i + 1,
        status: 'free',
        clientId: null
      })),
      logs: [{ id: Date.now(), date: new Date().toISOString().slice(0, 10), text: 'Caja NAP registrada', author: 'Admin' }]
    };

    try {
      if (supabase && supabase.from) {
        await supabase.from('naps').upsert([newNap]);
      }
    } catch (err) {
      console.log('Guardando localmente...');
    }

    setNaps(prev => [...prev.filter(n => n.id !== newNap.id), newNap]);
    setIsNapModalOpen(false);
    setNapFormData(emptyNapForm);
  };

  const handleOpenNewClientModal = () => {
    setEditingClientId(null);
    setClientFormData(emptyClientForm);
    setIsClientModalOpen(true);
  };

  const handleEditClient = (client: any) => {
    setEditingClientId(client.id);
    setClientFormData({ ...client });
    setIsClientModalOpen(true);
  };

  const handleDeleteClient = async (clientId: string, napId: string, portNumber: number) => {
    if (confirm('¿Deseas eliminar este cliente y liberar su puerto NAP?')) {
      setNaps(prevNaps => prevNaps.map(nap => {
        if (nap.id === napId) {
          const updatedPorts = nap.ports.map((p: any) => {
            if (p.portNumber === portNumber) {
              return { ...p, status: 'free', clientId: null };
            }
            return p;
          });
          return { ...nap, ports: updatedPorts };
        }
        return nap;
      }));

      setClients(clients.filter(c => c.id !== clientId));

      try {
        if (supabase && supabase.from) {
          await supabase.from('clients').delete().eq('id', clientId);
        }
      } catch (err) {
        console.log('Eliminado localmente');
      }
    }
  };

  const handleSaveClient = async (e: React.FormEvent) => {
    e.preventDefault();
    const clientToSave = editingClientId
      ? { ...clientFormData, id: editingClientId }
      : { ...clientFormData, id: `CLI-${Date.now().toString().slice(-4)}` };

    setNaps(prevNaps => prevNaps.map(nap => {
      if (nap.id === clientToSave.napId) {
        const updatedPorts = nap.ports.map((p: any) => {
          if (p.portNumber === Number(clientToSave.portNumber)) {
            return { ...p, status: 'occupied', clientId: clientToSave.id };
          }
          return p;
        });
        return { ...nap, ports: updatedPorts };
      }
      return nap;
    }));

    try {
      if (supabase && supabase.from) {
        await supabase.from('clients').upsert([clientToSave]);
      }
    } catch (err) {
      console.log('Guardando localmente...');
    }

    setClients(prev => [...prev.filter(c => c.id !== clientToSave.id), clientToSave]);
    setIsClientModalOpen(false);
    setEditingClientId(null);
    setClientFormData(emptyClientForm);
  };

  const handlePortStatusChange = (napId: string, portNum: number, newStatus: string) => {
    setNaps(naps.map(nap => {
      if (nap.id === napId) {
        const updatedPorts = nap.ports.map((p: any) => {
          if (p.portNumber === portNum) {
            return { ...p, status: newStatus };
          }
          return p;
        });
        return { ...nap, ports: updatedPorts };
      }
      return nap;
    }));
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogText.trim() || !selectedNap) return;

    const newLog = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      text: newLogText,
      author: 'Técnico'
    };

    setNaps(naps.map(nap => {
      if (nap.id === selectedNap.id) {
        return {
          ...nap,
          logs: [newLog, ...(nap.logs || [])]
        };
      }
      return nap;
    }));
    setNewLogText('');
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
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Usuario</label>
              <input
                type="text"
                required
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Contraseña</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-2.5 rounded-lg transition"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalPorts = naps.reduce((acc, n) => acc + (n.capacity || 16), 0);
  const occupiedPorts = naps.reduce((acc, n) => acc + (n.ports ? n.ports.filter((p: any) => p.status === 'occupied').length : 0), 0);
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
              <p className="text-xs text-slate-400">Gestor de Cajas NAP y Puertos</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsNapModalOpen(true)}
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <IconPlus size={16} />
              <span>Nueva NAP</span>
            </button>
            <button
              onClick={handleOpenNewClientModal}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <IconPlus size={16} />
              <span>Nuevo Cliente</span>
            </button>
            <button
              onClick={handleLogout}
              title="Cerrar Sesión"
              className="p-2 text-slate-400 hover:text-rose-400 bg-slate-700/50 rounded-lg transition"
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
              activeTab === 'dashboard' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400'
            }`}
          >
            <IconActivity size={18} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('naps')}
            className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'naps' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400'
            }`}
          >
            <IconServer size={18} />
            <span>Cajas NAP ({naps.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'clients' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400'
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
                  const cap = nap.capacity || 16;
                  const occupied = nap.ports ? nap.ports.filter((p: any) => p.status === 'occupied').length : 0;
                  const percent = Math.round((occupied / cap) * 100);
                  return (
                    <div 
                      key={nap.id} 
                      onClick={() => { setSelectedNap(nap); setActiveTab('naps'); }}
                      className="bg-slate-900/60 p-4 rounded-lg border border-slate-700 cursor-pointer hover:border-cyan-500 transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-cyan-400">{nap.id}</span>
                        <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">{occupied}/{cap} ({percent}%)</span>
                      </div>
                      <p className="text-xs text-slate-300 truncate mb-3">{nap.name}</p>
                      <div className="grid grid-cols-8 gap-1">
                      {nap.ports && nap.ports.map((p: any, portIndex: number) => (
  <div
    key={p.portNumber || portIndex}
    onClick={async (e) => {
      e.stopPropagation();
      console.log("1. Clic detectado en puerto:", portIndex, "de la NAP:", nap.id);
      
      const updatedPorts = nap.ports.map((port: any, idx: number) => {
        if (idx === portIndex) {
          const newStatus = port.status === 'occupied' ? 'available' : 'occupied';
          return { ...port, status: newStatus };
        }
        return port;
      });

      console.log("2. Enviando a Supabase los nuevos puertos:", updatedPorts);

      const { data, error } = await supabase
        .from('naps')
        .update({ ports: updatedPorts })
        .eq('id', nap.id)
        .select();

      if (error) {
        console.error('❌ ERROR de Supabase al actualizar:', error.message, error.details, error.hint);
      } else {
        console.log('✅ ÉXITO al actualizar en Supabase:', data);
        window.location.reload();
      }
    }}
    className={`h-2.5 rounded-sm cursor-pointer ${
      p.status === 'occupied' ? 'bg-cyan-500' :
      p.status === 'damaged' ? 'bg-rose-500' :
      p.status === 'reserved' ? 'bg-amber-500' : 'bg-slate-700'
    }`}
    title={`Puerto ${p.portNumber}: ${p.status}`}
  />
))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'naps' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-lg font-bold text-slate-100">Cajas NAP</h2>
              {naps.map(nap => (
                <div 
                  key={nap.id}
                  onClick={() => setSelectedNap(nap)}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    selectedNap?.id === nap.id ? 'bg-cyan-950/30 border-cyan-500' : 'bg-slate-800 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-cyan-400">{nap.id}</span>
                    <span className="text-xs text-emerald-400 font-mono">{nap.powerDbm || -18.5} dBm</span>
                  </div>
                  <p className="text-sm font-semibold text-white mt-1">{nap.name}</p>
                  <p className="text-xs text-slate-400 flex items-center mt-1"><IconMapPin size={12} className="mr-1" />{nap.address}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 space-y-6">
              {selectedNap ? (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-cyan-400">{selectedNap.name}</h2>
                      <p className="text-xs text-slate-400">{selectedNap.id} • {selectedNap.address}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20 font-mono">
                      Potencia: {selectedNap.powerDbm || -18.5} dBm
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Estado de Puertos (Haz clic para cambiar)</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {selectedNap.ports && selectedNap.ports.map((p: any) => (
                        <div 
                          key={p.portNumber}
                          onClick={() => {
                            const next = p.status === 'free' ? 'occupied' : p.status === 'occupied' ? 'damaged' : 'free';
                            handlePortStatusChange(selectedNap.id, p.portNumber, next);
                          }}
                          className={`p-3 rounded-lg border text-center cursor-pointer transition ${
                            p.status === 'occupied' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' :
                            p.status === 'damaged' ? 'bg-rose-500/10 border-rose-500 text-rose-300' :
                            p.status === 'reserved' ? 'bg-amber-500/10 border-amber-500 text-amber-300' :
                            'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
                          }`}
                        >
                          <div className="text-xs font-bold">Pto {p.portNumber}</div>
                          <div className="text-[10px] uppercase mt-1 opacity-80">{p.status}</div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        const { error } = await supabase
                        .from('naps')
                        .update({ ports: selectedNap.ports })
                        .eq('id', selectedNap.id);

                     if (error) {
                        console.error('Error al guardar:', error.message);
                         alert('Hubo un error al guardar los cambios.');
                     } else {
                      alert('¡Estado de puertos guardado correctamente!');
                     window.location.reload();
                    }
                    }}
                     className="mt-4 mb-4 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2.5 px-4 rounded-lg transition shadow-lg flex items-center justify-center gap-2"
>
  Guardar Cambios de Puertos
</button>
                  </div>

                  <div className="border-t border-slate-700 pt-4 space-y-3">
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Historial y Bitácora</h3>
                    <form onSubmit={handleAddLog} className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Agregar nota de mantenimiento..."
                        value={newLogText}
                        onChange={e => setNewLogText(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                      <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                        Registrar
                      </button>
                    </form>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {selectedNap.logs && selectedNap.logs.map((log: any) => (
                        <div key={log.id} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs flex justify-between">
                          <span className="text-slate-300">{log.text}</span>
                          <span className="text-slate-500 font-mono">{log.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-12 text-center text-slate-400">
                  Selecciona una Caja NAP de la izquierda para ver y gestionar sus puertos detalladamente.
                </div>
              )}
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
                    <th className="p-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {clients.map(c => (
                    <tr key={c.id} className="hover:bg-slate-750">
                      <td className="p-3 font-medium">{c.name} <div className="text-xs text-slate-400">DNI: {c.dni}</div></td>
                      <td className="p-3">{c.napId} (Pto {c.portNumber})</td>
                      <td className="p-3 font-mono text-xs text-cyan-300">{c.ontModel} <br/>{c.ipAddress}</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-emerald-500/10 text-emerald-400">{c.status}</span></td>
                      <td className="p-3 text-right space-x-2">
                        <button onClick={() => handleEditClient(c)} className="p-1.5 bg-slate-700 hover:bg-cyan-600 rounded text-slate-300 hover:text-white transition" title="Editar">
                          <IconEdit size={16} />
                        </button>
                        <button onClick={() => handleDeleteClient(c.id, c.napId, c.portNumber)} className="p-1.5 bg-slate-700 hover:bg-rose-600 rounded text-slate-300 hover:text-white transition" title="Eliminar">
                          <IconTrash size={16} />
                        </button>
                      </td>
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
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-400">Latitud</label>
                  <input type="text" value={napFormData.lat} onChange={e => setNapFormData({...napFormData, lat: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Longitud</label>
                  <input type="text" value={napFormData.lng} onChange={e => setNapFormData({...napFormData, lng: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400">Capacidad de Puertos</label>
                <select value={napFormData.capacity} onChange={e => setNapFormData({...napFormData, capacity: parseInt(e.target.value)})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white">
                  <option value={8}>8 Puertos</option>
                  <option value={16}>16 Puertos</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setIsNapModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded text-sm">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded text-sm font-medium">Guardar NAP</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL NUEVO / EDITAR CLIENTE */}
      {isClientModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold text-white">{editingClientId ? 'Editar Cliente' : 'Registrar Nuevo Cliente'}</h3>
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
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-400">Puerto Nº</label>
                  <input type="number" min={1} max={16} value={clientFormData.portNumber} onChange={e => setClientFormData({...clientFormData, portNumber: parseInt(e.target.value)})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Modelo ONT</label>
                  <input type="text" value={clientFormData.ontModel} onChange={e => setClientFormData({...clientFormData, ontModel: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-white" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setIsClientModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded text-sm">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">{editingClientId ? 'Actualizar' : 'Guardar Cliente'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}