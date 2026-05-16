import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/users/login', { email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/myblogs');
    }catch(err){
      alert(err?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="input" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="input" />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Login</button>
      </form>
    </div>
  )
}
