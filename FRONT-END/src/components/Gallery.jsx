import { useState } from "react";

export default function Gallery() {

    const [current, setCurrent] = useState(0);

    let css = {
        transform: `translateX(-${current}%)`
    }

    let imgs = [
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" },
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-8.jpeg" },
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" }
    ];

    
    function handlerSlide(direction) {
       

        if (direction === 'next') {
            let position = current + 100;
            setCurrent(position > (imgs.length-1) * 100 ? 0 : position);
        }

        if (direction === 'prev') {
            let position = current - 100;
            setCurrent(position < 0 ? (imgs.length-1) * 100 : position);
        }
    }

    let tagsImg = imgs.map(function (img) {
        return <div class="slide min-w-full">
                <img class="w-full h-full" src={img.src} />
               </div>
    });

    return (
        <>
            <div className="max-w-[1440px] max-h-[681px]">
                <div className="slider relative overflow-hidden">

                    <div className="slides flex ease-in-out duration-500" style={css}>
                        {tagsImg}
                    </div>

                    <span id="prev" className="absolute top-1/2 cursor-pointer" onClick={event => handlerSlide('prev')}>
                        <img src="src/assets/icons/prev.svg" />
                    </span>
                    <span id="next" className="right-0 absolute top-1/2 cursor-pointer" onClick={event => handlerSlide('next')}>
                        <img src="src/assets/icons/next.svg" />
                    </span>
                </div>
            </div>
        </>
    );
}