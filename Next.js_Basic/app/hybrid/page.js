import { getCatFacts } from "@/apis/apis";
import { Suspense } from "react";
import CatFacts from "../components/cat-facts";

export default async function Hybrid() {
    const catFact = await getCatFacts();

    return (
        <div>
            <h1>Hybrid Page - Pre-rendered at Run time</h1>
            <div className="mt-4">{catFact.fact}</div>
            <div className="mt-6">
                <Suspense
                    fallback={<div className="loading">Loading cats...</div>}
                >
                    <CatFacts />
                </Suspense>
            </div>
        </div>
    );
}
