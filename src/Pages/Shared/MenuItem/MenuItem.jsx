

const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="flex space-x-4">
            <img className="w-[120px] rounded-tl-none rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="text-[#151515] text-base mb-2">{name} ------------------</h3>
                <p className="text-[#737373] text-base">{recipe}</p>
            </div>
            <p className="text-base text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;