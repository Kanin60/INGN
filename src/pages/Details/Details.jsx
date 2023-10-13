import style from "./Details.module.scss";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { enArtikel } from "../../queries/enArtikel";
import DOMPurify from 'dompurify';


export const Details = () => {
    
    const { id } = useParams()
    console.log("id: ", id);

    const { data, isLoading, error } = useQuery({
        queryKey: ['hentEnEnkeltAtrikel'],
        queryFn: async () => request(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbdeq138a3801uk3zh7fmbl/master`, enArtikel, { artikelId: id })
    })

    console.log("Data: ", data);

    if (isLoading) return (<div><p>Loading...</p> </div>)

    if (error) return <p>Der skete en fejl: {error.message}</p>

    return(
        <section className={style.details}>
            <img src={data.andebyArticle.image.url} alt={data.andebyArticle.title} />
            <h2>{data.andebyArticle.title}</h2>
            <p className={style.dato}>{data.andebyArticle.dato} - af {data.andebyArticle.forfatter}</p>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.andebyArticle.text.html) }}></div>
            <button><Link to="/">Tilbage</Link></button>
        </section>
    )
}