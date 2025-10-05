import { SupabaseClient } from '@supabase/supabase-js';
export type RealtimeSupabaseClient = SupabaseClient<never, 'public', never>;
