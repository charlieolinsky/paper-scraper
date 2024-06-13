import { SupabaseClient, createClient } from "@supabase/supabase-js"

import supabase from "../utils/supabase"
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);
const getArticles= async () => {
    const {data, error } = await supabase
    .from("articles")
    .select()

    return {data, error}
}

export default getArticles

