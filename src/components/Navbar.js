import {Link} from 'react-router-dom';
import './App.css';

function NavBar() {
    return (
      <nav class="navigationWrapper">
  <div class="logoWrapper">
    <span class="stylish">Tech</span>
    <span class="logo">Blog</span>
  </div>
  <ul class="navigation">
    <li class="parent"><Link className={'link'} to={'/'}>Home</Link></li>
    <li class="parent"><Link className={'link'} to={'/create-post'}>Create Post</Link></li>
  </ul>
</nav>
    );
  }
  
  export default NavBar;