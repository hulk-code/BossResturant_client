

const Sectiontitle = ({heading , subHeading}) => {
    return (
        <div className="text-center" >
            <h1 className="text-yellow-600">{heading}</h1>
            <p className="text-3xl ">{subHeading}</p>
        </div>
    );
};

export default Sectiontitle;