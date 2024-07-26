

const Card = ({ data }) => {
    const { title, image, publisher, description, tags } = data;

    return (
        <li className="bg-white  rounded-lg shadow-md p-4 mb-4 ">
           <div> <h3 className="text-xl font-bold mb-2">{title}</h3>
            <img src={image} alt={title} className="rounded-lg mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
            <p className="text-gray-700 mb-2"><strong>Publisher:</strong> {publisher}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
            <p className="text-gray-700 mb-2"><strong>Tags:</strong> {tags}</p></div>
        </li>
    );
};

export default Card;
