import { useEffect, useContext } from 'react';

import user from '../apis/user';
import AuthContext from '../contexts/AuthContext';

export default () => {
  const { isAuth, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      fetchCurrentUser();
    }
  }, [isAuth]);

  const fetchCurrentUser = async () => {
    const response = await user.get('/me');
    setUser(response.data);
  }
}