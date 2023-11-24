import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 mb-24">
            <div className="">
            <SectionTitle heading={'---Check it out---'} subHeading={'FEATURED ITEM'}> </SectionTitle>
            </div>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center py-20 px-36 items-center gap-14">
               <div>
               <img className="" src={img1} alt="" />
               </div>
                <div>
                    <p className="text-2xl mb-2">March 20, 2023</p>
                    <p className="text-2xl mb-2">WHERE CAN I GET SOME?</p>
                    <p className="text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn text-white btn-outline border-0 border-b-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;