import style from "./Kategorier.module.scss";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useState, useEffect } from "react";
import { kategorier } from "../../queries/kategorier";

export const Kategorier = () => {

    const [artikler, setArtikler] = useState([])
    const { kategori } =useParams()
    // console.log("kategorier: ", kategori);

    const alleKategorier = useQuery({
        queryKey: ['hentKategoriArtikel', kategori],
        queryFn: async () => request(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbdeq138a3801uk3zh7fmbl/master`, 
        kategorier, { kategori : kategori })
    })

    useEffect(() => {
        if (alleKategorier.isSuccess) {
            const dates = [...alleKategorier.data.andebyArticles]
            dates.sort((a, b) => new Date(b.dato) - new Date(a.dato));
            setArtikler(dates);
        }
    },[alleKategorier.isSuccess, kategori])

    if (alleKategorier.isLoading) return (<div><p>Loading...</p> </div>)

    if (alleKategorier.error) return <p>Der skete en fejl: {error.message}</p>


    return(
        <section className={style.kategori}>
            {artikler?.map((item, index) => {
                return(
                    <article key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>D.{item.dato} - af {item.forfatter}</p>
                        <Link to={`/details/${item.id}`}>Læs mere</Link>
                        <img src={item.image.url} alt={item.title} />
                    </article>
                    )
                })
            }
        </section>
    )
}