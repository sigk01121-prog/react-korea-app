import React from 'react'
import { useNavigate } from 'react-router-dom'

function CultureCard({ item }) {
    const navigate = useNavigate();

    function moveDetail() {
        navigate(`/detail/${item.id}`)
    }
    return (
        <article className="card" onClick={moveDetail}>
            <figure className="card-thumb">
                <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.shortDesc}</p>
                <button type='button' className="detail-btn">자세히보기</button>
            </div>
        </article>
    )
}

export default CultureCard