import { useState } from 'react';
import { CA, CATS, NK, PR, WK, slug } from '../data/projects';
import { Head, Panel, Stub } from '../components/ui';
import { nav } from '../lib/nav';

export function WorkPage(){
  const [f,setF]=useState('ALL');const list=PR.map((p,i)=>({p,i})).filter(({p})=>f==='ALL'||p[1]===f);
  const S=[[7,'16/10'],[5,'1/1'],[4,'4/3'],[4,'1/1'],[4,'4/3'],[6,'16/10'],[6,'4/3']];
  return (<section className="s2 dark pg"><div className="w2"><p className="lbl">Portfolio</p><Head lines={[['Selected',0],['Works.',1]]}/>
    <p className="sub">An evolving collection of visual concepts, creative explorations and stories shaped through editing.</p>
    <div className="chips2">{['ALL',...CATS].map(c=>(<button key={c} className={f===c?'on':''} onClick={()=>setF(c)} data-h>{c.toUpperCase()}<sup>{c==='ALL'?18:PR.filter(p=>p[1]===c).length}</sup></button>))}</div>
    <div className="wg" key={f}>{list.map(({p,i},n)=>{const[sp,ar]=S[n%7];return (<a key={p[0]} href={'#work-'+slug(p[0])} className="wc" style={{'--sp':sp,'--d':n*70+'ms'}} data-h onClick={e=>{e.preventDefault();nav.go('work-'+slug(p[0]))}}><div style={{aspectRatio:ar}}><Panel i={i} k={WK[i]}/><span className="tg">CONCEPT</span></div><div className="mt"><h3>{p[0]}</h3><em>{p[1]}</em></div><p>{p[2]}</p><b>VIEW PROJECT →</b></a>)})}</div>
    <p className="lbl" style={{marginTop:70}}>All 18 projects are fictional demonstration concepts, not commissioned client work.</p></div></section>);
}

export function Detail({s}){
  const i=PR.findIndex(p=>slug(p[0])===s);if(i<0)return (<Stub t="Project not found." n="404"/>);
  const p=PR[i],c=CA[p[1]],pv=PR[(i+17)%18],nx=PR[(i+1)%18];
  const all=PR.map((q,j)=>[q,j]).filter(([q,j])=>j!==i),rel=[...all.filter(([q])=>q[1]===p[1]),...all.filter(([q])=>q[1]!==p[1])].slice(0,3);
  return (<article>
    <section className="s2 dark pg"><div className="w2"><p className="lbl">{p[1]} · Demonstration concept</p><Head lines={[[p[0],1]]}/><div className="cov"><Panel i={i} k={WK[i]}/></div></div></section>
    <section className="s2 light"><div className="w2 dg"><div><p className="lbl">01 · Overview</p><p className="bp">{p[2]}</p></div><div><p className="lbl">02 · Creative direction</p><p className="bp">{p[3]}</p></div><div><p className="lbl">03 · Visual storytelling</p><p className="bp">{c[0]}</p></div><div><p className="lbl">04 · Editing approach</p><p className="bp">{c[1]} Particular attention goes to {p[4]}.</p></div></div></section>
    <section className="s2 dark"><div className="w2"><p className="lbl">Gallery</p><div className="gal">{[1,2,3].map(n=>(<div key={n} className="cmpn"><Panel i={i+n*4} k={NK[(i+n*4)%11]}/></div>))}</div>
      <p className="lbl" style={{marginTop:60}}>Video preview</p><div className="vid"><button aria-label="Play preview" data-h>▶</button><span>VIDEO PREVIEW PLACEHOLDER · CONCEPT ONLY</span></div></div></section>
    <section className="s2 light"><div className="w2"><p className="lbl">Related projects</p><div className="rel">{rel.map(([q,j])=>(<a key={q[0]} href={'#work-'+slug(q[0])} data-h onClick={e=>{e.preventDefault();nav.go('work-'+slug(q[0]))}}><div className="cmpn"><Panel i={j} k={WK[j]}/></div><h4>{q[0]}</h4><em>{q[1]}</em></a>))}</div></div></section>
    <div className="pnx"><a href={'#work-'+slug(pv[0])} data-h onClick={e=>{e.preventDefault();nav.go('work-'+slug(pv[0]))}}><p className="lbl">← Previous</p><h3>{pv[0]}</h3></a><a href={'#work-'+slug(nx[0])} data-h onClick={e=>{e.preventDefault();nav.go('work-'+slug(nx[0]))}}><p className="lbl">Next →</p><h3>{nx[0]}</h3></a></div></article>);
}
