import { useState, useEffect } from 'react';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { Detail, WorkPage } from './pages/Work';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { Stub } from './components/ui';
import { useHash } from './lib/nav';
import { nav } from './lib/nav';

export const Lk=({to,children,cls})=>(<a href={'#'+to} className={cls} data-h onClick={e=>{e.preventDefault();nav.go(to)}}>{children}</a>);

export const NAVL=[['home','HOME'],['work','WORK'],['about','ABOUT'],['services','SERVICES'],['contact','CONTACT']];

export default function App(){
  const h=useHash(),page=h.split('-')[0];
  const [ld,setLd]=useState(0),[cv,setCv]=useState(false),[sc,setSc]=useState(false),[tp,setTp]=useState(false),[mo,setMo]=useState(false);
  nav.go=to=>{setMo(false);setCv(true);setTimeout(()=>{location.hash=to;scrollTo(0,0);setTimeout(()=>setCv(false),150)},620)};
  useEffect(()=>{let n=0;const id=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*9)+3);setLd(n);if(n>=100){clearInterval(id);setTimeout(()=>document.getElementById('pre').classList.add('off'),250)}},60);return()=>clearInterval(id)},[]);
  useEffect(()=>{scrollTo(0,0)},[h]);
  useEffect(()=>{
    const bar=document.getElementById('bar'),cur=document.getElementById('cur');
    const so=()=>{bar.style.width=scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100+'%';setSc(scrollY>40);setTp(scrollY>700)};
    const mm=e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';cur.classList.toggle('big',!!e.target.closest('[data-h],a,button'))};
    addEventListener('scroll',so);addEventListener('mousemove',mm);
    let raf;const loop=()=>{document.querySelectorAll('[data-p]').forEach(el=>{const b=el.parentElement.getBoundingClientRect();el.style.translate='0 '+(b.top+b.height/2-innerHeight/2)*parseFloat(el.dataset.p)+'px'});raf=requestAnimationFrame(loop)};loop();
    return()=>{removeEventListener('scroll',so);removeEventListener('mousemove',mm);cancelAnimationFrame(raf)}},[]);
  let body;
  if(page==='home')body=(<Home/>);
  else if(page==='work')body=h==='work'?(<WorkPage/>):(<Detail s={h.slice(5)}/>);
  else if(page==='about')body=(<AboutPage/>);
  else if(page==='services')body=(<ServicesPage/>);
  else if(page==='contact')body=(<ContactPage/>);
  else body=(<Stub n="404" t="Page not found."/>);
  return (<main>
    <div id="pre"><b>{ld}%</b><i style={{width:ld+'%'}}/></div><div className={'shut'+(cv?' on':'')}><i/><i/></div>
    <nav className={sc?'sc':''}><Lk to="home" cls="logo"><div>SAKTHIVEL A.<small>VIDEO EDITOR & VISUAL STORYTELLER</small></div></Lk>
      <ul>{NAVL.map(([k,t])=>(<li key={k}><Lk to={k} cls={page===k?'on':''}>{t}</Lk></li>))}</ul>
      <button className={'burger'+(mo?' x':'')} aria-label="Menu" onClick={()=>setMo(!mo)}><i/><i/></button></nav>
    <div className={'mm'+(mo?' on':'')}>{NAVL.map(([k,t])=>(<Lk key={k} to={k}>{t}</Lk>))}</div>
    <div key={h}>{body}</div>
    <footer className="ft"><h2 className="display">The next frame<br/>starts with an idea.</h2><div className="fg"><div><p style={{maxWidth:280,color:'#92969B',lineHeight:1.6}}>Have something worth creating? Let’s talk.</p></div>
      <div><h6>NAVIGATE</h6>{NAVL.map(([k,t])=>(<Lk key={k} to={k}>{t[0]+t.slice(1).toLowerCase()}</Lk>))}</div>
      <div><h6>CONTACT</h6><a href="tel:9944735841">9944735841</a><a href="mailto:skyeditor23@gmail.com">skyeditor23@gmail.com</a><a>Coimbatore, Tamil Nadu, India</a></div>
      <div><h6>SOCIAL</h6><a href="https://github.com/SkyValut" target="_blank" rel="noopener">GitHub ↗</a><a href="https://www.linkedin.com/in/sakthivel-a-308562236/" target="_blank" rel="noopener">LinkedIn ↗</a></div></div>
      <div className="cp"><span>© 2026 Sakthivel A. All rights reserved.</span><span>Video Editor & Visual Storyteller</span></div></footer>
    <button id="top" className={tp?'on':''} aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} data-h>↑</button>
  </main>);
}
