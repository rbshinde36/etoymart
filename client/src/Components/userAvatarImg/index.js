
const UserAvatarImgComponent = (props) => {
    
    return (
        <div className={`userImg ${props.lg===true && 'lg'}`}>
    
            <span className="rounded-circle">{
                props.img!==undefined  && props.img.length!==0 ?   <img src={`${process.env.REACT_APP_API_URL}/download/${props.img}`} /> : 


                <span>{props?.userName!=="" && props?.userName?.charAt(0)}</span>
            }
               
            </span>
        </div>
    )
}

export default UserAvatarImgComponent;