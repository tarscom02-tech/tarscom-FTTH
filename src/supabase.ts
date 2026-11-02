// Solución temporal robusta sin dependencias externas
export const supabase = {
    from: (table: string) => ({
      select: async () => {
        const localData = localStorage.getItem(`ftth_${table}`);
        return { data: localData ? JSON.parse(localData) : [], error: null };
      },
      upsert: async (values: any) => {
        const key = `ftth_${table}`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        const updated = [...existing, ...(Array.isArray(values) ? values : [values])];
        localStorage.setItem(key, JSON.stringify(updated));
        return { data: values, error: null };
      },
      delete: async () => ({ error: null })
    }),
    channel: () => ({
      on: () => ({
        subscribe: () => {}
      })
    }),
    removeChannel: () => {}
  };