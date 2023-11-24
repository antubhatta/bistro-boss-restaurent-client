const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mt-20 w-[424px] mx-auto mb-10">
            <h3 className="text-[#D99904] text-base pb-4 text-center ">{heading}</h3>
            <p className="text-[#151515] text-4xl py-4 text-center border-y-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;