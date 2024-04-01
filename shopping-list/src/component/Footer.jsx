const Footer = ({items})=>{
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    return(
        <div className="footerWrapper">
            <div className="footerTotalDetails">Total Items: {numItems}</div>
            <div className="footerCompletedDetails"> Completed Items: {numPacked}</div>
        </div>
    );
};

export default Footer;