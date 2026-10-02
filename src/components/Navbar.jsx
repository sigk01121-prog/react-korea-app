import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('한국의 맛, 멋, 문화를 만나보세요')

    function showMessage(type) {
        if (type === '맛') setMessage('맛있는 한국 음식을 만나보세요.')
        if (type === '멋') setMessage('한국의 전통 의상과 건축의 아름다움을 만나보세요.')
        if (type === '문화') setMessage('한국의 문화를 경험해보세요.')
        if (type === '여행') setMessage('한국의 아름다운 여행지를 소개합니다.')
        if (type === '전통') setMessage('한국의 오랜 전통과 역사를 알아보세요.')
    }

    const menu = [
        { name: '맛', id: 1 },
        { name: '멋', id: 2 },
        { name: '문화', id: 3 },
        { name: '여행', id: 4 },
        { name: '전통', id: 5 }
    ]
    return (
        <nav className="nav">
            <ul className="nav-list">
                {
                    menu.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => {
                                showMessage(item.name)
                                navigate(`/detail/${item.id}`)
                            }}>{item.name}</button>
                        </li>
                    ))
                }
            </ul>
            <p className='nav-message'>{message}</p>
        </nav>
    )
}

export default Navbar