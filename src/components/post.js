import './post.css';


function Post(props){
    const {shop, onBgClick} = props;
    return(
        <div className="post">
            <div className="post-bg" onClick={onBgClick}/>
            <div className="post-content">
                <img src={shop.imageUrl} />
            </div>
        </div>
    )
}

export default Post;