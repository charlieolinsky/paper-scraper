import { useState } from "react"
import { getArticles, addArticle, updateArticle, deleteArticle } from "../api/article"

export default function TestArticle() {
    const [articles, setArticles] = useState([])

    const onButtonClick = async () => {
        let {data, error}= await getArticles()
        if (error != null) {
            console.log(error)
        }
        console.log(data)
        error = await addArticle("title is title", "article is article", "size is size")   
        console.log(error)
        error = await updateArticle("updated", "article is article", "size is size","16709def-e972-4851-a526-921938016a6c")
        console.log(error)
        console.log("deleting")
        let response = await deleteArticle("b27ea2da-e142-4c20-96ad-dcf47ee95bd3")
        console.log(response)
    }

    return (
        <input type="button" onClick={onButtonClick} value={'Test Articles'} />
    )
}
