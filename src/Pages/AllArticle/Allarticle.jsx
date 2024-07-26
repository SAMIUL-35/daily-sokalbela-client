import { useContext } from "react";
import { MyContext } from "../../Provider/ContextApi.jsx/ContexApi";
import Card from "./Card";


const Allarticle = () => {
    const { data } = useContext(MyContext);

    // Check if data is available and then map through it to display article titles
    if (!data || data.length === 0) {
        return <div>No articles found.</div>;
    }

    return (
        <div className="grid lg:grid-cols-3">
            {data.map((article) => (
                    <Card key={article._id} data={article} />
                ))}
            
        </div>
    );
};

export default Allarticle;
