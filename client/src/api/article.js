import supabase from "../utils/supabase"

const articles = "articles"
const getArticles = async () => {
    const {data, error } = await supabase
        .from(articles)
        .select()

    return {data, error}
}

const addArticle = async (title, article, size) => {
    console.log(localStorage.getItem("user_id")) 
    const {error} = await supabase
        .from(articles)
        .insert([
            {
                title: title,
                article: article,
                size: size,
                user_id: localStorage.getItem("user_id")
            }
        ])


    return error
} 

const updateArticle = async(title, article, size, id) => {
    const {error} = await supabase 
        .from(articles)
        .update({
            title: title,
            article: article,
            size: size,
            user_id: localStorage.getItem("user_id")
        })
        .eq('id', id)
    return error
}

export { getArticles, addArticle, updateArticle }

