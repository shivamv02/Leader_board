import {useState} from "react";
import { useHistory } from "react-router-dom";

function CreateComponent(props){
  const {members,setMembers}=props;

    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [img, setImg] = useState('');
    const history=useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const temp=[...members,{
      name:name,
      score: score,
      img: img,
    }]
    temp.sort(function(a,b){
         return b.score-a.score;
    });
    setMembers(temp)
    history.push('/')
    console.log(members);
  }
    return ( 
     <div className="create">
            <h2>Add Member</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
             <input 
               type="text" 
               required 
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
           <label>Score:</label>
           <input
              required
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          <label>Image Url:</label>
          <input 
               type="text" 
               required 
               value={img}
               onChange={(e) => setImg(e.target.value)}
             />
        <button
        onClick={(e) => {
          handleSubmit(e);
          
        }}
        >Add Member</button>
        
      </form>
    </div>
        
     );
}
 
export default CreateComponent;