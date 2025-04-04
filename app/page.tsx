"use client"

import Gallery from '@/components/Gallery';
import { catProps } from '@/types';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [catPropsData, setCatPropsData] = useState([] as catProps);
  const API_ENDPOINT = `/api?limit=10&has_breeds=1`;

  useEffect(() => {
    async function fetchCats() {
      const data = await fetch(`${API_ENDPOINT}`);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      data.json().then((data: catProps) => setCatPropsData(data));
    }
    fetchCats();
  }, [API_ENDPOINT]);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1 className="text-4xl font-semibold">Welcome to the Cat Gallery</h1>
      <p className="text-lg">Explore a variety of cat images and information.</p>
      <Gallery props={catPropsData} />
    </main>
  );
}