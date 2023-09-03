
import { GifGridItem } from "./gifGridItem"
import { useGetGif } from "../hooks/useGetGif"


export const GifGrid = ({ category }) => {

    const { data, isLoading } = useGetGif(category)

    return (
        <>
            <h3>{category}</h3>

            {isLoading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__fadeIn animate__slow">
                {data.map(val => (<GifGridItem key={val.id} {...val}></GifGridItem>))}
            </div>
        </>
    )

}
