import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch()
  const logourHandler = ()=>{
    dispatch(authActions.logout())
  }
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logourHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
