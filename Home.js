import Profile from "./Profile";
const Home = (props) => {
      const {members,setMembers}=props;
    return ( 
        <div className="Home">
            <h1>members</h1>
            {members.map((member) => {
        return (
          <Profile
            member={member}
            key={member.id}
            
          />
        )
      })}
        </div>
     );
}
 
export default Home;