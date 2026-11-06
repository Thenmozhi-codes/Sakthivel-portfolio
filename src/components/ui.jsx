import { useEffect, useRef } from 'react';
import { BG, K, OPS } from '../data/projects';
import { IMG } from '../assets/index';

export function useReveal(){
  const r=useRef();
  useEffect(()=>{const el=r.current;if(!el)return;
    const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&el.classList.add('in')),{threshold:.15});
    io.observe(el);return()=>io.disconnect()},[]);
  return r;
}

export const Rv=({children,d=0,cls=''})=>{const r=useReveal();return (<div ref={r} className={'rv '+cls} style={{transitionDelay:d+'ms'}}>{children}</div>)};

/* big headline: each letter reacts on hover */

export const Head=({lines,late})=>{const r=useRef();useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){r.current.classList.add('in');io.disconnect()}},{threshold:.2});io.observe(r.current);return()=>io.disconnect()},[]);let n=0;
  return (<h2 ref={r} className="display hd" style={{'--d':late?'1.2s':'0s'}}>{lines.map(([t,g],i)=>(<div key={i} className={g?'g':''}>{[...t].map((c,j)=>c===' '?' ':(<span className="ch" key={j} style={{'--i':n++}}>{c}</span>))}</div>))}</h2>)};

export const Pic=({k,cls=''})=>(<img className={'pic '+cls} src={IMG[k]} alt="" draggable="false"/>);

export const tilt=e=>{const b=e.currentTarget.getBoundingClientRect();const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
  e.currentTarget.style.transform='perspective(800px) rotateY('+x*16+'deg) rotateX('+(-y*16)+'deg)'};

export const untilt=e=>e.currentTarget.style.transform='';

export function Panel({i,k}){
  const key=k||K[(i*5)%11],nn=/^n\d+$/.test(key),v=i+(k?3:0),r=useRef();
  useEffect(()=>{if(!nn)return;const el=r.current,io=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('in');io.disconnect()}},{threshold:.12});io.observe(el);return()=>io.disconnect()},[]);
  if(nn){
    const mv=e=>{const b=r.current.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5,t=r.current.style;t.setProperty('--mx2',-x*30+'px');t.setProperty('--my2',-y*22+'px');t.setProperty('--px',(x+.5)*100+'%');t.setProperty('--py',(y+.5)*100+'%')};
    const lv=()=>{const t=r.current.style;t.setProperty('--mx2','0px');t.setProperty('--my2','0px')};
    return (<div ref={r} className="pn nn" style={{'--op':OPS[v%6],'--sc':1.1+(v%3)*.04}} onMouseMove={mv} onMouseLeave={lv}><div className="kb" style={{animationDelay:-(v%5)*4+'s'}}><img src={IMG[key]} alt="" draggable="false"/></div><i className="sh"/></div>)}
  const op=key==='cine'||key==='camp';
  return (<div className="pn" style={{background:op?'#0b0c0d':BG[v%6],'--s':op?1:1+(v%3)*.1,'--tx':((v%4)-1.5)*3+'%','--ty':((v%3)-1)*3+'%','--r':((v%5)-2)*1.5+'deg'}}><img src={IMG[key]} alt="" draggable="false" style={op?{objectFit:'cover'}:null}/></div>)}

export const Stub=({t,n})=>(<section className="s2 dark stub"><div className="w2"><p className="lbl">{n||'Page'}</p><Head lines={[[t,1]]}/><p className="bp" style={{marginTop:30}}>This page is built in the next phase. Navigation, transitions and footer are already live.</p></div></section>);
