import {createClient} from '@supabase/supabase-js'
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseApi = process.env.EXPO_PUBLIC_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseApi);

