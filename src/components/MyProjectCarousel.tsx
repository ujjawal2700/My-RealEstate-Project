"use client";
import React, {useState, useEffect} from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { sql } from "@vercel/postgres";

function MyProjectCarousel(): JSX.Element {
  const [projects, setProjects] = useState([{}]); // State to store fetched projects
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState<string | null>(null); // State to manage error

  useEffect(() => {
    const getProjects = async () => {
      try {
        const {rows} = await sql`SELECT * FROM projects`; // Fetch project data
        console.log(rows)
        setProjects(rows); // Update state with fetched projects
      } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        setError(errorMessage); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (!projects) {
        getProjects();
    } else {
        setLoading(false);
    }

  }, ); // Empty dependency array to run once on mount

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error message

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

//   console.log(projects)

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-600 dark:text-neutral-200 font-sans">
        Our Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Planning",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1542744174-a35e40ade835?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content1",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1726594692111-7939325c616d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content2",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content3",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1721989518149-ecf1d8e086aa?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content4",
  },
  {
    category: "Investment Planning",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1639754391037-98dd3cb74e09?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content5",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1689467915092-8ce0d84d4f76?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "content6",
  },
];

export default MyProjectCarousel;
