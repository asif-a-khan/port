import React, {useState, useEffect} from "react";
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Socialicons(props){
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/CodedKhan'>
          <LineIcon name="twitter"/>
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/codedkhan/'>
          <LineIcon name="linkedin"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href='https://github.com/asif-a-khan'>
          <LineIcon name="github"/>
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
