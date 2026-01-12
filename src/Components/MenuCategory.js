import MenuItem from "./MenuItem";

const MenuCategory = ({category , index ,  showCategoryIndex })=>{

    const categoryItems = category?.card?.card?.itemCards ;
    return (
        index == showCategoryIndex ? <div>
            {categoryItems.map((item)=>{

                return (<MenuItem key = {item.card.info.id} id = {item.card.info.id} name = {item.card.info.name} description = {item.card.info.description} imageId = {item.card.info.imageId} price = {item?.card?.info?.price || item?.card?.info?.defaultPrice}/>)
            })}
        </div> : <></>
    )
}

export default MenuCategory ; 
