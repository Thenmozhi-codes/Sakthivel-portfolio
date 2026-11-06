import { useState, useEffect } from 'react';

export const nav={go:()=>{}};

export function useHash(){const g=()=>location.hash.slice(1)||'home';const[h,setH]=useState(g);useEffect(()=>{const f=()=>setH(g());addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return h}
