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

const IconXCircle = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const IconClock = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconRefreshCw = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
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

const IconDownload = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconExternalLink = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconFileText = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
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
  // Autenticación
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
  const [newLogText, setNewLogText] = useState('');

  const [napFormData, setNapFormData] = useState({
    id: '', name: '', address: '', lat: '-9.5298', lng: '-77.5289', capacity: 16, powerDbm: -18.0
  });

  const emptyClientForm = {
    id: '', name: '', dni: '', phone: '', address: '', napId: '',
    portNumber: 1, fiberColor: 'Azul', ontModel: 'ZTE / Huawei',
    ontSn: '', ipAddress: '', vlan: '100', rxPower: -19.5, status: 'active'
  };

  const [clientFormData, setClientFormData] = useState(emptyClientForm);

  useEffect(() => {
    const loadInitialData = async () => {
      const { data: napsData } = await supabase.from('naps').select('*');
      const { data: clientsData } = await supabase.from('clients').select('*');

      if (napsData) setNaps(napsData);
      if (clientsData) setClients(clientsData);
    };

    loadInitialData();

    // Canal unificado para escuchar cambios en tiempo real en la base de datos
    const channel = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public' },
        (payload) => {
          console.log('Cambio detectado en la base de datos:', payload);
          loadInitialData();
        }
      )
      .subscribe((status) => {
        console.log('Estado de conexión del canal:', status);
      });

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
    if (confirm('¿Deseas restaurar los datos de prueba iniciales?')) {
      setNaps(INITIAL_NAPS);
      setClients(INITIAL_CLIENTS);
      localStorage.removeItem('ftth_naps');
      localStorage.removeItem('ftth_clients');
    }
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID Cliente,Nombre,DNI,Telefono,Direccion,Caja NAP,Puerto,Hilo Fibra,ONT Modelo,ONT SN,IP,VLAN,Potencia RX (dBm),Estado\n";

    clients.forEach(c => {
      const row = `"${c.id}","${c.name}","${c.dni}","${c.phone}","${c.address}","${c.napId}","${c.portNumber}","${c.fiberColor}","${c.ontModel}","${c.ontSn}","${c.ipAddress}","${c.vlan}","${c.rxPower}","${c.status}"`;
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Reporte_Clientes_FTTH_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddLog = (e) => {
    e.preventDefault();
    if (!newLogText.trim() || !selectedNap) return;

    const newLog = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      text: newLogText,
      author: 'Técnico de Turno'
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

  const handleOpenGoogleMaps = (lat, lng, name) => {
    if (!lat || !lng) {
      alert('Coordenadas GPS no especificadas.');
      return;
    }
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
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
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"
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
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-2.5 rounded-lg transition shadow-lg shadow-cyan-950"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="pt-2 text-center text-[11px] text-slate-500 border-t border-slate-800/60">
          TARSCOM FTTH v1.0 • Acceso Privado
          </div>
        </div>
      </div>
    );
  }

  const totalPorts = naps.reduce((acc, n) => acc + n.capacity, 0);
  const occupiedPorts = naps.reduce(
    (acc, n) => acc + n.ports.filter(p => p.status === 'occupied').length, 0
  );
  const freePorts = naps.reduce(
    (acc, n) => acc + n.ports.filter(p => p.status === 'free').length, 0
  );
  const damagedPorts = naps.reduce(
    (acc, n) => acc + n.ports.filter(p => p.status === 'damaged').length, 0
  );
  const occupancyRate = totalPorts > 0 ? ((occupiedPorts / totalPorts) * 100).toFixed(1) : 0;

  const handleSaveNap = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const napToSave = editingNapId
      ? { ...napFormData, id: editingNapId }
      : {
          ...napFormData,
          id: `NAP-${Date.now().toString().slice(-4)}`,
          ports: Array.from({ length: parseInt(napFormData.totalPorts) }, (_, i) => ({
            portNumber: i + 1,
            status: 'free',
            clientId: null
          }))
        };
  
    // 1. Guardar en Supabase
    const { error } = await supabase.from('naps').upsert([napToSave]);
    if (error) {
      console.error('Error al guardar NAP en Supabase:', error);
      return;
    }
  
    // 2. Limpiar modal
    setIsNapModalOpen(false);
    setEditingNapId(null);
    setNapFormData(emptyNapForm);
  
    // 3. Recargar datos locales
    await loadInitialData();
  };

    setNaps([...naps, newNap]);
    setIsNapModalOpen(false);
    setNapFormData({ id: '', name: '', address: '', lat: '-9.5298', lng: '-77.5289', capacity: 16, powerDbm: -18.0 });
  };

  const handleOpenNewClientModal = () => {
    setEditingClientId(null);
    setClientFormData(emptyClientForm);
    setIsClientModalOpen(true);
  };

  const handleEditClient = (client) => {
    setEditingClientId(client.id);
    setClientFormData({ ...client });
    setIsClientModalOpen(true);
  };

  const handleDeleteClient = (clientId, napId, portNumber) => {
    if (confirm('¿Deseas eliminar este cliente y liberar su puerto NAP?')) {
      setNaps(prevNaps => prevNaps.map(nap => {
        if (nap.id === napId) {
          const updatedPorts = nap.ports.map(p => {
            if (p.portNumber === portNumber && p.clientId === clientId) {
              return { ...p, status: 'free', clientId: null };
            }
            return p;
          });
          return { ...nap, ports: updatedPorts };
        }
        return nap;
      }));
      setClients(clients.filter(c => c.id !== clientId));
    }
  };

  const handleSaveClient = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetNapId = clientFormData.napId;
    const targetPort = parseInt(clientFormData.portNumber);
  
    // Liberar puerto anterior si el cliente fue movido de NAP o puerto al editar
    if (editingClientId) {
      const oldClient = clients.find(c => c.id === editingClientId);
      if (oldClient && (oldClient.napId !== targetNapId || oldClient.portNumber !== targetPort)) {
        setNaps(prevNaps => prevNaps.map(nap => {
          if (nap.id === oldClient.napId) {
            const ports = nap.ports.map(p => {
              if (p.portNumber === oldClient.portNumber && p.clientId === editingClientId) {
                return { ...p, status: 'free', clientId: null };
              }
              return p;
            });
            return { ...nap, ports };
          }
          return nap;
        }));
      }
    }
  
    // Definir datos del cliente (nuevo o editado)
    const clientToSave = editingClientId
      ? { ...clientFormData, id: editingClientId }
      : {
          ...clientFormData,
          id: `CLI-${Date.now().toString().slice(-4)}`,
          registrationDate: new Date().toISOString().slice(0, 10)
        };
  
    // Asignar/Actualizar nuevo puerto en la NAP destino
    setNaps(prevNaps => prevNaps.map(nap => {
      if (nap.id === targetNapId) {
        const updatedPorts = nap.ports.map(p => {
          if (p.portNumber === targetPort) {
            return { ...p, status: 'occupied', clientId: clientToSave.id };
          }
          return p;
        });
        return { ...nap, ports: updatedPorts };
      }
      return nap;
    }));
  
    // Guardar en la base de datos de Supabase y sincronizar
    const { error } = await supabase.from('clients').upsert([clientToSave]);
    if (error) {
      console.error('Error al guardar cliente en Supabase:', error);
      return;
    }
  
    // Limpiar formulario y cerrar modal
    setIsClientModalOpen(false);
    setEditingClientId(null);
    setClientFormData(emptyClientForm);
  
    // Recargar datos para reflejar los cambios en tiempo real
    await loadInitialData();
  };

  const handlePortStatusChange = (napId: string, portNum: number, newStatus: string) => {
    setNaps(naps.map(nap => {
      if (nap.id === napId) {
        const updatedPorts = nap.ports.map(p => {
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
              <IconRefreshCw size={18} />
            </button>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Puertos</p>
                    <h3 className="text-3xl font-bold mt-1 text-white">{totalPorts}</h3>
                  </div>
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                    <IconCpu size={22} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3">En {naps.length} Cajas NAP activas</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Ocupación Red</p>
                    <h3 className="text-3xl font-bold mt-1 text-cyan-400">{occupancyRate}%</h3>
                  </div>
                  <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    <IconRadio size={22} />
                  </div>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5 mt-3">
                  <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: `${occupancyRate}%` }}></div>
                </div>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Puertos Libres</p>
                    <h3 className="text-3xl font-bold mt-1 text-emerald-400">{freePorts}</h3>
                  </div>
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <IconCheckCircle size={22} />
                  </div>
                </div>
                <p className="text-xs text-emerald-400/80 mt-3">Disponibles para alta</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Puertos Dañados</p>
                    <h3 className="text-3xl font-bold mt-1 text-rose-400">{damagedPorts}</h3>
                  </div>
                  <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg">
                    <IconAlertTriangle size={22} />
                  </div>
                </div>
                <p className="text-xs text-rose-400/80 mt-3">Requiere mantenimiento</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-lg font-bold text-slate-100 mb-4">Estado General de NAPs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {naps.map(nap => {
                  const occupied = nap.ports.filter(p => p.status === 'occupied').length;
                  const percent = Math.round((occupied / nap.capacity) * 100);
                  return (
                    <div 
                      key={nap.id} 
                      onClick={() => { setSelectedNap(nap); setActiveTab('naps'); }}
                      className="bg-slate-900/60 p-4 rounded-lg border border-slate-700/80 hover:border-cyan-500 cursor-pointer transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-cyan-400">{nap.id}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                          {occupied}/{nap.capacity} ({percent}%)
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 truncate mb-3">{nap.name}</p>
                      <div className="grid grid-cols-8 gap-1">
                        {nap.ports.map(p => (
                          <div 
                            key={p.portNumber} 
                            className={`h-3 rounded-sm ${
                              p.status === 'occupied' ? 'bg-cyan-500' :
                              p.status === 'damaged' ? 'bg-rose-500' :
                              p.status === 'reserved' ? 'bg-amber-500' : 'bg-slate-700'
                            }`}
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
              <h2 className="text-lg font-bold text-slate-100">Cajas NAP Registradas</h2>
              {naps.map(nap => (
                <div 
                  key={nap.id}
                  onClick={() => setSelectedNap(nap)}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    selectedNap?.id === nap.id 
                      ? 'bg-slate-800 border-cyan-400 shadow-lg shadow-cyan-950/50' 
                      : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-cyan-400">{nap.id}</h3>
                      <p className="text-sm text-slate-200 font-medium">{nap.name}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-slate-700 text-slate-300">
                      Capacidad: {nap.capacity}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-slate-400 mb-3 space-x-1">
                    <IconMapPin size={14} className="text-slate-500 shrink-0" />
                    <span className="truncate">{nap.address}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-700/50">
                    <span className="text-slate-400">Potencia Salida: <strong className="text-slate-200">{nap.powerDbm} dBm</strong></span>
                    <span className="text-emerald-400 font-medium">
                      {nap.ports.filter(p => p.status === 'free').length} Libres
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedNap ? (
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-4 gap-4">
                    <div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                        {selectedNap.id}
                      </span>
                      <h2 className="text-xl font-bold text-white mt-2">{selectedNap.name}</h2>
                      <p className="text-xs text-slate-400 flex items-center mt-1">
                        <IconMapPin size={14} className="mr-1 text-slate-500" />
                        {selectedNap.address}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end space-y-2">
                      <button
                        onClick={() => handleOpenGoogleMaps(selectedNap.lat, selectedNap.lng, selectedNap.name)}
                        className="flex items-center space-x-2 bg-slate-700 hover:bg-cyan-600 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs transition border border-slate-600"
                      >
                        <IconMapPin size={14} />
                        <span>Abrir GPS en Google Maps</span>
                        <IconExternalLink size={12} />
                      </button>
                      <span className="text-xs text-slate-400">Potencia: <strong className="text-cyan-400">{selectedNap.powerDbm} dBm</strong></span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs bg-slate-900/40 p-3 rounded-lg border border-slate-700/50">
                    <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded-full bg-slate-700"></div><span className="text-slate-300">Libre</span></div>
                    <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded-full bg-cyan-500"></div><span className="text-slate-300">Ocupado</span></div>
                    <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded-full bg-amber-500"></div><span className="text-slate-300">Reservado</span></div>
                    <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded-full bg-rose-500"></div><span className="text-slate-300">Dañado</span></div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">Diagrama de Puertos (Splitter)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                      {selectedNap.ports.map(port => {
                        const client = clients.find(c => c.id === port.clientId);
                        return (
                          <div
                            key={port.portNumber}
                            className={`p-3 rounded-lg border flex flex-col items-center justify-between transition ${
                              port.status === 'occupied' ? 'bg-cyan-950/40 border-cyan-600/80 text-cyan-300' :
                              port.status === 'damaged' ? 'bg-rose-950/40 border-rose-600/80 text-rose-300' :
                              port.status === 'reserved' ? 'bg-amber-950/40 border-amber-600/80 text-amber-300' :
                              'bg-slate-900/80 border-slate-700 text-slate-400'
                            }`}
                          >
                            <span className="text-xs font-bold mb-1">P-{port.portNumber}</span>
                            <div className="my-2 text-center">
                              {port.status === 'occupied' && <IconRadio size={20} className="mx-auto text-cyan-400 animate-pulse" />}
                              {port.status === 'free' && <IconCheckCircle size={20} className="mx-auto text-slate-600" />}
                              {port.status === 'damaged' && <IconXCircle size={20} className="mx-auto text-rose-500" />}
                              {port.status === 'reserved' && <IconClock size={20} className="mx-auto text-amber-500" />}
                            </div>
                            <span className="text-[10px] truncate max-w-full font-medium">
                              {client ? client.name.split(' ')[0] : port.status}
                            </span>
                            <select
                              value={port.status}
                              onChange={(e) => handlePortStatusChange(selectedNap.id, port.portNumber, e.target.value)}
                              className="mt-2 w-full text-[9px] bg-slate-800 text-slate-300 border border-slate-700 rounded px-1 py-0.5 focus:outline-none"
                            >
                              <option value="free">Libre</option>
                              <option value="occupied">Ocupado</option>
                              <option value="reserved">Reservado</option>
                              <option value="damaged">Dañado</option>
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center space-x-2">
                      <IconFileText size={16} className="text-cyan-400" />
                      <span>Bitácora de Mantenimiento e Incidencias</span>
                    </h3>

                    <form onSubmit={handleAddLog} className="flex gap-2 mb-4">
                      <input
                        type="text"
                        placeholder="Escribe un reporte técnico de campo (ej. Cambio de conector P-3)..."
                        value={newLogText}
                        onChange={(e) => setNewLogText(e.target.value)}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                      <button
                        type="submit"
                        className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition shrink-0"
                      >
                        Añadir Nota
                      </button>
                    </form>

                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {(selectedNap.logs && selectedNap.logs.length > 0) ? (
                        selectedNap.logs.map(log => (
                          <div key={log.id} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/60 text-xs">
                            <div className="flex justify-between text-slate-400 mb-1 text-[11px]">
                              <span className="font-semibold text-cyan-400">{log.author}</span>
                              <span>{log.date}</span>
                            </div>
                            <p className="text-slate-300">{log.text}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-500 italic">No hay notas registradas para esta NAP.</p>
                      )}
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-slate-800/40 rounded-xl p-12 border border-slate-700 border-dashed text-center">
                  <IconServer size={48} className="mx-auto text-slate-600 mb-3" />
                  <p className="text-slate-400">Selecciona una Caja NAP de la lista para inspeccionar sus puertos, incidencias y coordenadas.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-800 p-4 rounded-xl border border-slate-700 gap-3">
              <div className="relative flex-1 w-full max-w-md">
                <IconSearch size={18} className="absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por Nombre, DNI, ONT, IP o NAP..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                onClick={handleExportCSV}
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-lg text-xs font-medium transition shrink-0"
              >
                <IconDownload size={16} />
                <span>Exportar Reporte (CSV/Excel)</span>
              </button>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-900/80 text-xs text-slate-400 uppercase border-b border-slate-700">
                    <tr>
                      <th className="px-4 py-3">Cliente / DNI</th>
                      <th className="px-4 py-3">Ubicación / NAP</th>
                      <th className="px-4 py-3">Puerto / Hilo</th>
                      <th className="px-4 py-3">ONT / SN</th>
                      <th className="px-4 py-3">IP / VLAN</th>
                      <th className="px-4 py-3">Potencia RX</th>
                      <th className="px-4 py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {clients
                      .filter(c => 
                        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        c.dni.includes(searchTerm) ||
                        c.napId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        c.ontSn.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map(client => (
                        <tr key={client.id} className="hover:bg-slate-700/30 transition">
                          <td className="px-4 py-3">
                            <div className="font-bold text-white">{client.name}</div>
                            <div className="text-xs text-slate-400">DNI: {client.dni} • Tel: {client.phone}</div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-semibold text-cyan-400">{client.napId}</span>
                            <div className="text-xs text-slate-400 truncate max-w-xs">{client.address}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-semibold text-slate-200">Puerto {client.portNumber}</div>
                            <div className="text-xs text-slate-400">Hilo: {client.fiberColor}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-xs font-mono text-slate-200">{client.ontSn}</div>
                            <div className="text-[11px] text-slate-400">{client.ontModel}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-xs font-mono text-slate-200">{client.ipAddress || 'DHCP'}</div>
                            <div className="text-[11px] text-slate-400">VLAN: {client.vlan}</div>
                          </td>
                          <td className="px-4 py-3 font-semibold">
                            <span className={client.rxPower < -25 ? 'text-rose-400' : 'text-emerald-400'}>
                              {client.rxPower} dBm
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleEditClient(client)}
                                className="p-1.5 bg-slate-700 hover:bg-cyan-600 text-slate-300 hover:text-white rounded transition"
                                title="Editar Cliente"
                              >
                                <IconEdit size={16} />
                              </button>
                              <button
                                onClick={() => handleDeleteClient(client.id, client.napId, client.portNumber)}
                                className="p-1.5 bg-slate-700 hover:bg-rose-600 text-slate-300 hover:text-white rounded transition"
                                title="Eliminar Cliente"
                              >
                                <IconTrash size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL NUEVA NAP */}
      {isNapModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-md p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Registrar Nueva Caja NAP</h3>
            <form onSubmit={handleSaveNap} className="space-y-3 text-sm">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Código ID de NAP</label>
                <input
                  type="text"
                  placeholder="ej. NAP-CENTRO-03"
                  required
                  value={napFormData.id}
                  onChange={e => setNapFormData({...napFormData, id: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Nombre / Referencia</label>
                <input
                  type="text"
                  placeholder="ej. NAP Poste 14"
                  required
                  value={napFormData.name}
                  onChange={e => setNapFormData({...napFormData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Dirección Física</label>
                <input
                  type="text"
                  required
                  value={napFormData.address}
                  onChange={e => setNapFormData({...napFormData, address: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Latitud GPS</label>
                  <input
                    type="text"
                    placeholder="-9.5298"
                    value={napFormData.lat}
                    onChange={e => setNapFormData({...napFormData, lat: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Longitud GPS</label>
                  <input
                    type="text"
                    placeholder="-77.5289"
                    value={napFormData.lng}
                    onChange={e => setNapFormData({...napFormData, lng: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Capacidad Puertos</label>
                  <select
                    value={napFormData.capacity}
                    onChange={e => setNapFormData({...napFormData, capacity: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  >
                    <option value={8}>8 Puertos (1:8)</option>
                    <option value={16}>16 Puertos (1:16)</option>
                    <option value={32}>32 Puertos (1:32)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Potencia (dBm)</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={napFormData.powerDbm}
                    onChange={e => setNapFormData({...napFormData, powerDbm: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsNapModalOpen(false)}
                  className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  Guardar NAP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CLIENTE */}
      {isClientModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white">
              {editingClientId ? `Editar Cliente (${editingClientId})` : 'Registrar Nuevo Cliente FTTH'}
            </h3>
            <form onSubmit={handleSaveClient} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={clientFormData.name}
                    onChange={e => setClientFormData({...clientFormData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">DNI / RUC</label>
                  <input
                    type="text"
                    required
                    value={clientFormData.dni}
                    onChange={e => setClientFormData({...clientFormData, dni: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Caja NAP Asignada</label>
                  <select
                    required
                    value={clientFormData.napId}
                    onChange={e => setClientFormData({...clientFormData, napId: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  >
                    <option value="">-- Seleccionar NAP --</option>
                    {naps.map(n => (
                      <option key={n.id} value={n.id}>{n.id} - {n.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Número de Puerto</label>
                  <input
                    type="number"
                    min="1"
                    max="32"
                    required
                    value={clientFormData.portNumber}
                    onChange={e => setClientFormData({...clientFormData, portNumber: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Modelo ONT</label>
                  <input
                    type="text"
                    placeholder="ej. Huawei HG8145V5"
                    value={clientFormData.ontModel}
                    onChange={e => setClientFormData({...clientFormData, ontModel: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Número de Serie (SN / MAC)</label>
                  <input
                    type="text"
                    required
                    placeholder="ej. 4857544301A4"
                    value={clientFormData.ontSn}
                    onChange={e => setClientFormData({...clientFormData, ontSn: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Color Hilo Fibra</label>
                  <input
                    type="text"
                    placeholder="ej. Azul"
                    value={clientFormData.fiberColor}
                    onChange={e => setClientFormData({...clientFormData, fiberColor: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">IP Asignada</label>
                  <input
                    type="text"
                    placeholder="192.168.10.X"
                    value={clientFormData.ipAddress}
                    onChange={e => setClientFormData({...clientFormData, ipAddress: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Potencia RX (dBm)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={clientFormData.rxPower}
                    onChange={e => setClientFormData({...clientFormData, rxPower: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Dirección de Instalación</label>
                <input
                  type="text"
                  required
                  value={clientFormData.address}
                  onChange={e => setClientFormData({...clientFormData, address: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsClientModalOpen(false)}
                  className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  {editingClientId ? 'Actualizar Cliente' : 'Guardar Cliente'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );


