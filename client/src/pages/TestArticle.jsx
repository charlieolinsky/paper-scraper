import { useState } from "react"
import { getArticles, addArticle } from "../api/article"

export default function TestArticle() {

    const [articles, setArticles] = useState([])

    const onButtonClick = async () => {
        let {data, error}= await getArticles()
        if (error != null) {
            console.log(error)
        }
        console.log("Articles retrieved")
        console.log(data)

        let err = await addArticle()   
    }


    return (



        <input type="button" onClick={onButtonClick} value={'Test Articles'} />
    )
}
