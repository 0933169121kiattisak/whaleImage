

function Shopping(props){
   const { shop, showShop} = props;
    return(
        
         <div>
            <img src={shop.imageUrl} onClick={() => {showShop(shop)}}/>
         </div>
        
     
    )
}

export default Shopping;