const Shimmer = ()=>{
    
    const arr = new Array(20).fill(0) ; 
    return (
        <div className="container col-12  px-3 d-flex flex-wrap gap-3 my-5 ">
        {arr.map((item , index)=>{
            return (
                <div className = "shimmer-container container col-xs-11 col-md-5 col-xl-3  d-flex flex-column gap-3" key = {index}>
                    <div className = "img-shimmer light-grey-background  col-12"></div>
                    <div className = "shimmer-component-height light-grey-background  col-3"></div>
                    <div className = "shimmer-component-height light-grey-background  col-6"></div>
                    <div className="d-flex col-12 justify-content-between">
                    <div className = "shimmer-component-height light-grey-background  col-3"></div>
                    <div className = "shimmer-component-height light-grey-background  col-3"></div>
                    <div className = "shimmer-component-height light-grey-background  col-3"></div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Shimmer ; 
