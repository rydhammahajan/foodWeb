const Accordian = ({question , index , indexOpen , setIndexOpen})=>{

    const {title , description } = question ; 
    return(

        <div className="d-flex flex-column  box-shadow-effect gap-2 px-4 py-4 gap-3 pointer" onClick = {()=>{
            indexOpen == index ? setIndexOpen(-1) : setIndexOpen(index) ; 
        }}>
            <div className="d-flex justify-content-between align-items-baseline ">
                <div className="fw-bold">{title}</div>
                {indexOpen == index?(<i className="fa-solid fa-angle-down"></i>):(<i className="fa-solid fa-angle-up"></i>)}   
            </div>
            {indexOpen == index ? <div className={"py-2 text-justify"}>{description}</div> : <></>}
        </div>
    )
}

export default Accordian ;
