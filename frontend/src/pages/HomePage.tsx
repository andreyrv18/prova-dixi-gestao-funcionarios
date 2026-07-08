import { useLoaderData } from "react-router-dom";

function HomePage() {
    const { records } = useLoaderData();

    return (
        <>
            <h1>{records}</h1>
        </>
    );
}

export default HomePage;
