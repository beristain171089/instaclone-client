import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useCTX = () => useContext(AuthContext);

export default useCTX;