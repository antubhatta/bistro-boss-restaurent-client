import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems= data.filter(items=>items.category==='popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
            <div>
                <SectionTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-7 mb-20">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;