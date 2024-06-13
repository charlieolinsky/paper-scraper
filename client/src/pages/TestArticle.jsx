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
        error = await updateArticle("updated", "article is article", "size is size","a8f2b9b8-c73b-44a3-8332-ead4ecdbb836")
        console.log(error)

        response = await deleteArticle("4f8c2593-fadd-4780-9d45-57bd250c8da6")
        console.log(response)

    }

    return (



        <input type="button" onClick={onButtonClick} value={'Test Articles'} />
    )
}
