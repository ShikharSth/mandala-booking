import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Kandata from '../assets/Play Poster/Kandata & Shakuntala.jpg';
import mochau from '../assets/Play Poster/Mo Chau MO Chau.jpg';
import Aboriginal from '../assets/Play Poster/Aborigianal Cry.jpg';
import asch from '../assets/Play Poster/ASCH.jpg';
import antigone from '../assets/Play Poster/Antigone.jpg';
import jinju from '../assets/Play Poster/Charming Jinju Opera Episodes.jpg';
import tamasha from '../assets/Play Poster/Tamasha.jpg';
import wisdom from '../assets/Play Poster/Wishdom of Life (Playback theatre).jpg';
import jhoda from '../assets/Play Poster/Jhoda.jpg';
import new_normal from '../assets/Play Poster/New Normal.jpg';
import sama_chako from '../assets/Play Poster/Sam Chako Sam Chako Abiha Hey.jpg';
import lem_lemma from '../assets/Play Poster/Umlindo Kharani ra Lemlemma.jpg';
import master_shoko from '../assets/bg/bg-13.jpg';

// Event Data List
const events = [
    { id: 1, image: Kandata },
    { id: 2, image: mochau },
    { id: 3, image: Aboriginal },
    { id: 4, image: asch },
    { id: 5, image: antigone },
    { id: 6, image: jinju },
    { id: 7, image: tamasha },
    { id: 8, image: wisdom },
    { id: 9, image: jhoda },
    { id: 10, image: new_normal },
    { id: 11, image: sama_chako },
    { id: 12, image: lem_lemma },
    { id: 13, image: master_shoko },
];

function MainBody() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/event/${id}`); // Navigate to event details page
    };

    return (
        <div className="w-dvw min-h-dvh max-h-dvh">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                touchRatio={2} 
                grabCursor={true} 
                speed={800} 
            >
                {events.map((event) => (
                    <SwiperSlide key={event.id} onClick={() => handleClick(event.id)}>
                        <img 
                            src={event.image} 
                            alt={`Event ${event.id}`} 
                            className="w-full h-full object-cover cursor-pointer"
                            cover
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MainBody;
