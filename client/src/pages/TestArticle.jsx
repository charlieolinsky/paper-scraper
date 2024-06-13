import { useState } from "react"
import getArticles from "../api/article"

export default function TestArticle() {

    const [articles, setArticles] = useState([])

    const onButtonClick = async () => {
        let {data, error}= await getArticles()
        if (error != null) {
            console.log(error)
        }
        console.log("Articles retrieved")
        console.log(data)
    }


    return (



        <input type="button" onClick={onButtonClick} value={'Get Articles'} />
    )
}
