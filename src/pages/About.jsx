import { useState, useEffect, useRef } from 'react';
import { Head, Panel, Rv, tilt, untilt } from '../components/ui';
import { INT, PQ, PRIN, TL } from '../data/projects';
import { nav } from '../lib/nav';
import { IMG } from '../assets/index';

export function Compare(){
  const r=useRef();const [x,setX]=useState(50);
  const mv=e=>{const b=r.current.getBoundingClientRect();setX(Math.min(100,Math.max(0,(e.clientX-b.left)/b.width*100)))};
  const dn=e=>{mv(e);const u=()=>{removeEventListener('pointermove',mv);removeEventListener('pointerup',u)};addEventListener('pointermove',mv);addEventListener('pointerup',u)};
  return (<div className="cmp" ref={r} onPointerDown={dn} data-h><img src={IMG.me} alt="" style={{filter:'grayscale(1) contrast(1.25) brightness(.92)'}}/><img src={IMG.me} alt="" style={{filter:'grayscale(.7) contrast(.6) brightness(1.3)',clipPath:'inset(0 '+(100-x)+'% 0 0)'}}/><div className="hd2" style={{left:x+'%'}}/><span style={{left:14}}>RAW</span><span style={{right:14}}>GRADED</span></div>);
}

export function Principles(){
  const r=useRef();
  useEffect(()=>{const f=()=>{const b=r.current.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.6-b.top)/b.height));r.current.style.setProperty('--tp',p);[...r.current.querySelectorAll('.pi')].forEach((el,i)=>el.classList.toggle('on',p>i/4+.03))};f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
  return (<div className="tlv" ref={r}><div className="ln"><i/></div>{PRIN.map(([n,t,d])=>(<div className="pi" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>))}</div>);
}

export function GWords({t}){
  const r=useRef(),w=t.split(' ');
  useEffect(()=>{const f=()=>{const b=r.current.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.85-b.top)/(b.height+innerHeight*.3)));[...r.current.children].forEach((s,i)=>s.classList.toggle('on',i<p*w.length*1.15))};f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
  return (<p className="gw" ref={r}>{w.map((x,i)=>(<span key={i}>{x} </span>))}</p>);
}

export function Inspire(){
  const [a,setA]=useState(0);const it=INT[a];
  return (<div className="ins"><ul>{INT.map((x,i)=>(<li key={i} className={a===i?'on':''} onMouseEnter={()=>setA(i)} onClick={()=>setA(i)} data-h>{x[0]}</li>))}</ul>
    <div className="ip" key={a}><div style={{animation:'rise .7s both'}}><Panel i={a+2} k={it[2]}/></div><p style={{animation:'rise .7s .1s both'}}>{it[1]}</p><div className="wv">{[...Array(28)].map((_,i)=>(<i key={i} style={{animationDelay:(i*-.13)+'s',animationDuration:(.5+(i*7%10)/10)+'s'}}/>))}</div></div></div>);
}

export function Quotes(){
  const [a,setA]=useState(0);
  return (<div><div className="fq"><q key={a}>“{PQ[a]}”</q></div><div className="sq">{PQ.map((q,i)=>(<button key={i} className={a===i?'on':''} onClick={()=>setA(i)} data-h><b>0{i+1>9?'':''}{i+1}</b>{q}</button>))}</div></div>);
}

export function AboutPage(){
  return (<div>
  <section className="s2 dark pg"><div className="w2 ab2"><div><p className="lbl">Get to know me.</p><Head lines={[['The person',0],['behind the',0],['frames.',1]]}/>
    <Rv d={100}><p className="bp" style={{marginTop:34}}>I’m Sakthivel A., a video editor and visual storyteller based in Coimbatore, India.</p><p className="bp">I am interested in the art of transforming ordinary footage into meaningful visual experiences. For me, video editing is not simply about arranging clips or adding transitions. It is about understanding a story, discovering its rhythm and presenting it in a way that connects with people.</p><p className="bp">I enjoy exploring different creative approaches, experimenting with visual composition and finding new ways to communicate ideas through moving images.</p><p className="bp">Every frame, sound, transition and visual detail has a role to play in the final experience.</p></Rv></div>
    <div className="abm" onMouseMove={tilt} onMouseLeave={untilt}><div className="fa"><Panel i={0} k="n11"/></div><span className="k k1"/><span className="k k2"/><span className="k k3"/><span className="k k4"/></div></div></section>

  <section className="s2 light"><div className="w2"><p className="lbl">My creative mindset</p><Head lines={[['It’s never just',0],['about the cut.',1]]}/>
    <div className="mind"><Rv><p className="bp">I believe the difference between an ordinary video and an engaging visual experience often comes down to the decisions made during editing.</p><p className="bp">The timing of a cut, the atmosphere created through colour, the relationship between music and visuals, and even a moment of silence can influence how a story feels.</p><p className="bp">My interest is in understanding these details and bringing them together into a cohesive visual narrative. I approach editing as a creative process where every decision should have a purpose.</p></Rv><div><Compare/><p className="lbl" style={{marginTop:14}}>Drag to compare raw and graded</p></div></div>
    <div className="strip">{['desk','monitor','crew'].map((k,i)=>(<div key={k} className="cmpn"><Panel i={i+1} k={k}/></div>))}</div></div></section>

  <section className="s2 dark"><div className="w2"><p className="lbl">My approach to storytelling</p><Head lines={[['How I see',0],['every frame.',1]]}/><Principles/></div></section>

  <section className="s2 light"><div className="w2"><p className="lbl">My creative interests</p><Head lines={[['What inspires',0],['my work.',1]]}/><Inspire/></div></section>

  <section className="s2 dark"><div className="w2"><p className="lbl">Educational background</p><Head lines={[['My learning',0],['foundation.',1]]}/><div className="ed"><p className="lbl">Education</p><div><h3>Computer Applications</h3><p style={{marginTop:18}}>Bharathiar University</p></div></div></div></section>

  <section className="s2 light"><div className="w2"><p className="lbl">My creative toolkit</p><Head lines={[['Tools are my medium.',0],['Storytelling is my focus.',1]]}/><div className="tl4">{TL.map(([m,n,d])=>(<div key={m} data-h><b>{m}</b><span><h5>{n}</h5><p>{d}</p></span></div>))}</div></div></section>

  <section className="s2 dark"><div className="w2"><p className="lbl">My continuous growth</p><Head lines={[['Always learning.',0],['Always creating.',1]]}/><div style={{marginTop:60}}><GWords t="Creative work is an ongoing journey. I believe there is always something new to explore, understand and improve. I continue to experiment with editing techniques, explore visual references and develop a better understanding of how different creative elements work together. Every project, experiment and learning experience contributes to the way I approach the next frame."/></div></div></section>

  <section className="s2 light"><div className="w2"><p className="lbl">Creative philosophy</p><Head lines={[['Thoughts behind',0],['the frames.',1]]}/><Quotes/><p className="lbl" style={{marginTop:30}}>Original portfolio copy expressing creative philosophy. These are not testimonials.</p></div></section>

  <section className="s2 dark"><div className="w2" style={{textAlign:'center'}}><Head lines={[['I see stories in frames.',0],['I create feelings through motion.',1]]}/><Rv><p className="sub" style={{margin:'34px auto 0'}}>Every project is an opportunity to explore, experiment and create something meaningful.</p></Rv></div></section>

  <section className="s2 light" style={{textAlign:'center'}}><div className="w2"><Head lines={[['Let’s create',0],['something meaningful.',1]]}/><p className="sub" style={{margin:'30px auto 0'}}>Have a story, an idea or a creative vision? Let’s bring it to life through thoughtful visual storytelling.</p><a href="#contact" className="pill" data-h onClick={e=>{e.preventDefault();nav.go('contact')}}>GET IN TOUCH →</a></div></section></div>);
}
