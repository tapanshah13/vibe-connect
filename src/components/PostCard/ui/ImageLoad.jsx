
"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {useState} from "react";


const ImageLoad = ({disabled, imageSet, imageURL}) => {

    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const imageFile = event.target.files[0];

        // Display image preview
        if (imageFile) {
            imageSet(imageFile)
            setImagePreview(URL.createObjectURL(imageFile));
        } else {
            setImagePreview(null);
        }
    };


    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="post-image">Upload Image</Label>
                <Input disabled={disabled} type="file" id="post-image" accept="image/*" onChange={handleFileChange}/>
            </div>

            {
                imagePreview ? (
                        <div className="mt-2">
                            <Image
                                src={imagePreview}
                                alt="Image Preview"
                                className="w-full h-48 object-cover rounded border"
                                width={200} // Set a fixed width
                                height={200}
                            />
                        </div>
                    ) :
                    (
                        <div className="mt-2">
                            <Image
                                src={imageURL || 'placeholder.svg'}
                                alt="Image Preview"
                                className="w-full h-48 object-cover rounded border"
                                width={200} // Set a fixed width
                                height={200}
                            />
                        </div>
                    )

            }
        </>
    )

}

export default ImageLoad;