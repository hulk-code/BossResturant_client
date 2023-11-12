

const Sectiontitle = ({heading , subHeading}) => {
    return (
        <div className=" mx-auto text-center w-3/12" >
            <h1 className="text-yellow-600 mb-2">{heading}</h1>
            <p className="text-3xl border-y-4 py-3 uppercase ">{subHeading}</p>
        </div>
    );
};

export default Sectiontitle;