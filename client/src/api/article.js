import supabase from "../utils/supabase"

const articles = "articles"
const getArticles = async () => {
    const {data, error } = await supabase
    .from(articles)
    .select()

    return {data, error}
}

const addArticle = async () => {
    console.log(localStorage.getItem("user_id")) 
    const {error} = await supabase
    .from(articles)
    .insert([
        {title: 'testing', article:'I love testing articles', size:'normal', user_id: localStorage.getItem("user_id")}
        ])


    return error
} 

export { getArticles, addArticle }

