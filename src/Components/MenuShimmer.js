const MenuShimmer = ()=>{

    const arr = new Array(20).fill(0) ; 
    return (

        <div id = "menu" className="d-flex flex-column col-12 col-xl-10 align-items-center align-self-center gap-5">
        
                    <div className="light-grey-background col-11 col-lg-8 shimmer-menu-label">
                    </div>
        
                    <div className="d-flex flex-column col-11 col-lg-8 gap-5">
    
                        {
                            arr.map((item , index)=>{
                                return(
                                        <div key = {index} className="shimmer-menu-item d-flex col-12 box-shadow-effect light-grey-background p-2 "></div>
                                    )
                            })
                        }
        
                    </div>
        
        
                </div>

    )
}

export default MenuShimmer ; 
