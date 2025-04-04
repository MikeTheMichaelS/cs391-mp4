"use client";
import BreedDetail from "@/components/BreedDetail";
import { breedInfo } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const API_ENDPOINT = "https://api.thecatapi.com/v1/breeds/";
    let p = useParams();
    let breedId = p.breed as string;
    const API_URL = API_ENDPOINT + breedId;
    // console.log(API_URL);

    let [breedInfo, setBreedInfo] = useState({} as breedInfo);

    useEffect(() => {
        async function fetchBreed() {
            const response = await fetch(API_URL);
            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json() as breedInfo;
            console.log("page.useeffect.fetchBreed" + String(data));
            setBreedInfo(data);
        }
        fetchBreed();
    }, []);

    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
            <h1 className="text-4xl font-semibold">Welcome to the Cat Gallery</h1>
            <p className="text-base">Explore a variety of cat images and information.</p>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-2xl font-semibold">Breed Details</h2>
                <BreedDetail breedInfoData={breedInfo} />
            </div>
        </main>
    )
}