import React, { useState } from 'react'
import cultureData from '../data/cultureData';
import SectionTitle from '../components/SectionTitle';
import CultureCard from '../components/CultureCard';

function Home() {
    const [selectCategory, setSelectCategory] = useState('전체');

    //console.log('cultureData', cultureData)
    //카테고리 필터링
    const filteredData = selectCategory === '전체'
        ? cultureData
        : cultureData.filter(item => item.category === selectCategory);
    return (
        <>
            <section className="hero">
                <div className="inner">
                    <h2>한국의 맛, 멋 , 문화를 소개합니다.</h2>
                    <p>음식, 전통의상, 건축, 문화 공연까지 <br />한국의 다양한 매력을 만나보세요.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="inner">
                    <SectionTitle
                        title='문화콘텐츠 10선'
                        desc='카테고리 버튼을 눌러 원하는 콘텐츠만 골라볼 수 있습니다.' />

                    {/* 카테고리 버튼 */}
                    <div className="filter-buttons">
                        <button className={selectCategory === '전체' ? 'active' : ''} onClick={() => setSelectCategory('전체')}>전체</button>

                        <button className={selectCategory === '맛' ? 'active' : ''} onClick={() => setSelectCategory('맛')}>맛</button>

                        <button className={selectCategory === '멋' ? 'active' : ''} onClick={() => setSelectCategory('멋')}>멋</button>

                        <button className={selectCategory === '문화' ? 'active' : ''} onClick={() => setSelectCategory('문화')}>문화</button>
                    </div>
                    <ul className="card-list">
                        {
                            filteredData.map((item) => {
                                console.log('현재item', item)
                                return (
                                    <li key={item.id}>
                                        <CultureCard item={item} />
                                    </li>
                                )
                            })
                        }
                    </ul>


                </div>
            </section>
        </>
    )
}

export default Home