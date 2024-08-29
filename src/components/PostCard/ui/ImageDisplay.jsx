
"use client"
import {useEffect, useState} from "react";
import Image from "next/image";


export default function ImageDisplay({imgURL, caption}){

    const [imageURL, setImageURL] = useState(imgURL)

    useEffect(() => {
        setImageURL(imgURL)
    }, [imgURL, caption])

    return (
        <div className={"flex gap-5"}>
            <div className={'lg:w-[700px] w-full'}>
                <Image
                    alt={caption}
                    className="rounded-lg object-cover w-full aspect-[4/3]  group-hover:opacity-50 transition-opacity mt-4"
                    src={imageURL}
                    height={500}
                    width={500}
                />
            </div>

        </div>
    )

}