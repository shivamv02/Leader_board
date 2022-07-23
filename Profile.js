
const Profile = (props) => {
  const {name,score,img}=props.member;
    return (  
        <div className="profile">
            <div className="left-block">
               <img src={img} alt=":-)" style={styles} />
           </div>
         <div className="right-block">
           <div style={ { fontSize: 25 } }>{name}</div>
           <div style={ { color: '#777' } }>{score}</div>
         </div>
         
        
        </div>
    );
}
const styles = {
    image: {
      height: 90,
      width:  90,
      borderRadius: 50,
      background: '#ccc'
    }
  }
export default Profile;