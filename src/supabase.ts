// Declaración para TypeScript (si usas .ts/.tsx)
declare global {
    interface Window {
      supabase: any;
    }
  }
  
  const SUPABASE_URL = "https://axwmrplrxbkdpxfjucqo.supabase.co"; // Reemplaza con tu URL de Supabase
  const SUPABASE_ANON_KEY = "sb_publishable_c1L5zNeF2qc6irTiFk6eIw_NWDUYD2e"; // Reemplaza con tu Anon Key de Supabase
  
  // Inicializa el cliente globalmente desde el navegador
  export const supabase = window.supabase 
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : {
        from: () => ({ select: async () => ({ data: [] }), upsert: async () => ({}) }),
        channel: () => ({ on: () => ({ subscribe: () => {} }) }),
        removeChannel: () => {}
      };