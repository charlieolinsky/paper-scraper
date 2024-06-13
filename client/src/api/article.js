import supabase from "../utils/supabase"

const getArticles= async () => {
    const {data, error } = await supabase
    .from("articles")
    .select()

    return {data, error}
}

export default getArticles

