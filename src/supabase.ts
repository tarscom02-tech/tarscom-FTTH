import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://axwmrplrxbkdpxfjucqo.supabase.co';
const SUPABASE_ANON_KEY =  sb_publishable_c1L5zNeF2qc6irTiFk6eIw_NWDUYD2e

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

