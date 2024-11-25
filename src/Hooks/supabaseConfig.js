import {createClient} from '@supabase/supabase-js'
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseApi = process.env.EXPO_PUBLIC_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseApi);

export default supabase;
