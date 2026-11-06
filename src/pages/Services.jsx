import { useState } from 'react';
import { Head, Panel, Rv, tilt, untilt } from '../components/ui';
import { SV } from '../data/projects';
import { nav } from '../lib/nav';

export function Svc({i,d}){
  const [o,setO]=useState(false);
  return (<section className={'s2 sv v'+(i%4)+(i%2?' dark':' light')}><div className="w2 svg">
    <Rv cls="svn">0{i+1}</Rv>
    <div className="svt"><Rv><p className="lbl">Service 0{i+1}</p><h3>{d[0]}</h3><p>{d[1]}</p><p className="ap">{d[2]}</p>
      <button className={'xb'+(o?' on':'')} aria-expanded={o} onClick={()=>setO(!o)} data-h>DELIVERABLES<span>+</span></button>
      <ul className={'dl'+(o?' on':'')}>{d[3].map((x,j)=>(<li key={j} style={{'--i':j}}>{x}</li>))}</ul>
      <a href="#contact" className="pill" data-h onClick={e=>{e.preventDefault();nav.go('contact')}}>DISCUSS THIS SERVICE →</a></Rv></div>
    <div className="svi" onMouseMove={tilt} onMouseLeave={untilt}><Panel i={i+6} k={d[4]}/></div></div></section>);
}

export function ServicesPage(){
  return (<div><section className="s2 dark pg"><div className="w2"><p className="lbl">Services</p><Head lines={[['Visual storytelling,',0],['from idea to',0],['final frame.',1]]}/>
    <p className="sub" style={{maxWidth:560}}>Different stories need different approaches. Explore the creative services focused on making visual communication engaging, memorable and purposeful.</p></div></section>
    {SV.map((d,i)=>(<Svc key={i} i={i} d={d}/>))}</div>);
}
