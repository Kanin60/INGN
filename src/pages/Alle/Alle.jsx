import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { alleArtikler } from "../../queries/alleArtikler";
import style from "./Alle.module.scss"

export const Alle = () => {
    const [allArticles, setAllArticles] = useState([])

    const alleArtiklerFetchet = useQuery({
        queryKey: ['hentAlleArtikler'],
        queryFn: async () => request(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbdeq138a3801uk3zh7fmbl/master`,
        alleArtikler)
    })
    
    useEffect(() => {
        if (alleArtiklerFetchet.isSuccess) {
            const dates = [...alleArtiklerFetchet.data.andebyArticles]
            dates.sort((a, b) => new Date(b.dato) - new Date(a.dato));
            console.log("Er datoerne sorteret? ", dates);
            setAllArticles(dates);
        }
    },[alleArtiklerFetchet.isSuccess])

    console.log("allArtikcles", allArticles);

    if (alleArtiklerFetchet.isLoading) return (<p>Loading...</p>)

    return(
        <section className={style.sectionAlle}>
            {allArticles?.map((item, index) => {
                return(
                    <article key={index} style={{gridArea: "a" + (index + 1)}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>D.{item.dato} - af {item.forfatter}</p>
                        <Link to={`/details/${item.id}`}>Læs mere</Link>
                        <img src={item.smallImage.url} alt={item.title} />
                    </article>
                )
            })}
        </section>
    )
}
