import supabase from "../utils/supabase"

//TODO: make these all authenticated with sessions

const articles = "articles"
//get all articles, regardless of user
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

//update with article id 
const updateArticle = async (title, article, size, id) => {
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

const deleteArticle = async (id) => {
    const response = await supabase
    .from(articles)
    .delete()
    .eq('id', id)
}


export { getArticles, addArticle, updateArticle, deleteArticle }

