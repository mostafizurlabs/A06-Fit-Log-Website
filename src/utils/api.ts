import { json } from "stream/consumers";


export const getLibrarySection = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout library");
  }

  return res.json();
};

export const getSingleSection = async (id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
};
