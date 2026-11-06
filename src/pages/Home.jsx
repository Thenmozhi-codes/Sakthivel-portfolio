import { useState, useEffect, useRef } from 'react';
import { Head, Panel, Pic, Rv, tilt, untilt } from '../components/ui';
import { PR, WK, slug } from '../data/projects';
import { nav } from '../lib/nav';
import { IMG } from '../assets/index';

export function Hero(){
  const [p,setP]=useState({x:0,y:0});const ref=useRef();
  const mv=e=>{const b=ref.current.getBoundingClientRect();ref.current.style.setProperty('--x',e.clientX-b.left+'px');ref.current.style.setProperty('--y',e.clientY-b.top+'px');setP({x:(e.clientX/innerWidth-.5)*2,y:(e.clientY/innerHeight-.5)*2})};
  return (<section className="dark" ref={ref} onMouseMove={mv}>
    <div className="hgrid"></div><div className="glow"></div><div className="curve"></div>
    <div className="wrap">
      <div>
        <Head late={1} lines={[['Build',0],['Brands.',0],['Tell',1],['Stories.',1]]}/>
        <Rv d={200}><p className="sub">Corporate Films, Brand Videos, Photography & Creative Campaigns.</p>
        <button className="btn" data-h onClick={()=>nav.go('work')}><i>→</i>Explore Work</button></Rv>
      </div>
      <div className="vf" data-p="-.06" style={{transform:'perspective(900px) rotateY('+p.x*8+'deg) rotateX('+(-p.y*6)+'deg)'}}><div className="vf-glow"/><div className="vf-card"><Pic k="me"/><div className="vf-rec"><b/>REC</div><div className="vf-4k">4K</div><div className="vf-meta"><span>24 FPS</span><span>ISO 800</span><span>f/1.8</span></div></div><span className="k k1"/><span className="k k2"/><span className="k k3"/><span className="k k4"/><div className="vf-tag">Sakthivel A.</div>{[['drone','-2%','-26%',0,'44%',24,0],['clap',0,0,'-30%','46%',-22,1],['led',0,0,'-26%','30%',16,2]].map(([k,r,t,l,w,d,i])=>(<div key={k} className="vf-f" style={{right:k==='drone'||k==='gimbal'?r:'auto',top:k==='drone'?t:'auto',bottom:k==='clap'?'2%':k==='gimbal'?'-8%':'auto',left:k==='clap'||k==='led'?l:'auto',...(k==='led'?{top:'-6%'}:{}),width:w,transform:'translate('+p.x*d+'px,'+p.y*d+'px)'}}><img className="pic fl" src={IMG[k]} style={{animationDelay:-i*1.4+'s'}} alt=""/></div>))}</div>
    </div>
    <div className="scrollh"><i/>Scroll</div>
    <a className="badge" href="#work" onClick={e=>{e.preventDefault();nav.go('work')}} data-h><svg viewBox="0 0 120 120"><defs><path id="cp" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"/></defs><text fill="#fff" fontSize="11.5" fontWeight="600" letterSpacing="3"><textPath href="#cp">EXPLORE WORK • SCROLL DOWN • SEE MORE •</textPath></text></svg><b>↓</b></a>
  </section>);
}

export function Films(){
  const [t,setT]=useState(0);
  useEffect(()=>{const i=setInterval(()=>setT(x=>x+1),1000);return()=>clearInterval(i)},[]);
  const pad=n=>String(n).padStart(2,'0');
  return (<section className="light"><div className="wrap">
    <div><Head lines={[['Corporate',0],['Films that',0],['Connect.',1]]}/>
      <Rv d={150}><div className="tags"><span data-h>Brand Films</span><span data-h>Company Profiles</span><span data-h>Corporate Stories</span></div></Rv></div>
    <Rv><div data-p=".06"><div className="fr" onMouseMove={tilt} onMouseLeave={untilt}><div className="fa"><Panel i={1} k="n1"/></div><div className="tcbar"><b/>REC 00:{pad(Math.floor(t/60)%60)}:{pad(t%60)}</div></div></div></Rv>
  </div></section>);
}

export function Count({to}){
  const r=useRef();const [n,setN]=useState(0);
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;let s=0;const id=setInterval(()=>{s+=Math.ceil(to/40);if(s>=to){s=to;clearInterval(id)}setN(s)},30);io.disconnect()});io.observe(r.current);return()=>io.disconnect()},[]);
  return (<span ref={r}>+{n}%</span>);
}

export function Campaigns(){
  return (<section className="dark"><div className="curve" style={{right:'auto',left:'-20%',opacity:.35}}></div><div className="wrap">
    <div>
      <Head lines={[['Campaigns',0],['That',0],['Perform.',1]]}/>
      <Rv d={150}><p className="sub">Creative campaigns for real business growth.</p></Rv>
    </div>
    <div>
      <div className="camp2" onMouseMove={tilt} onMouseLeave={untilt}><div className="fa"><Panel i={5} k="n12"/></div></div><div className="chips">{['in','▶','◎','↗'].map(c=>(<span key={c} data-h>{c}</span>))}</div>
      <div className="dash" onMouseMove={tilt} onMouseLeave={untilt}>
        <svg className="mega" viewBox="0 0 100 80"><path d="M14 30 L70 6 V68 L14 46Z" fill="#1d1d1d" stroke="#BFC3C7" strokeWidth="3"/><ellipse cx="70" cy="37" rx="9" ry="31" fill="#0a0a0a" stroke="#BFC3C7" strokeWidth="3"/><rect x="4" y="28" width="12" height="20" rx="4" fill="#BFC3C7"/><path d="M26 46 L30 74 H42 L38 52" fill="#222"/></svg><div style={{fontSize:13,opacity:.7}}>Campaign Performance</div>
        <div className="num"><Count to={218}/> <small style={{fontSize:14,fontFamily:'Inter',color:'#fff',fontWeight:400}}>Engagement</small></div>
        <svg viewBox="0 0 300 110"><defs><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#BFC3C7" stopOpacity=".5"/><stop offset="1" stopColor="#BFC3C7" stopOpacity="0"/></linearGradient></defs>
          <path d="M0 100 L40 80 L80 90 L130 50 L180 62 L230 24 L300 8 L300 110 L0 110Z" fill="url(#gr)"/>
          <path d="M0 100 L40 80 L80 90 L130 50 L180 62 L230 24 L300 8" fill="none" stroke="#BFC3C7" strokeWidth="3" strokeDasharray="500" strokeDashoffset="500"><animate attributeName="stroke-dashoffset" from="500" to="0" dur="2s" fill="freeze"/></path></svg>
      </div>
    </div>
  </div></section>);
}

export function Photo(){
  const items=['Product','Corporate','Lifestyle','Events'];
  return (<section className="light"><div className="wrap">
    <div><Head lines={[['Photography',0],['With',0],['Purpose.',1]]}/>
      <Rv d={150}><div className="list">{items.map(i=>(<div key={i} data-h>{i}<span>↗</span></div>))}</div></Rv></div>
    <div data-p="-.05"><div className="duo"><div className="d1" onMouseMove={tilt} onMouseLeave={untilt}><Panel i={2} k="n5"/></div><div className="d2" onMouseMove={tilt} onMouseLeave={untilt}><Panel i={4} k="n6"/></div></div></div>
  </div></section>);
}

export function Create(){
  const T=[['Create','Concepts, scripts and lighting set up around your brand story.','n3'],['Capture','Cinema cameras, gimbals and drone shots on location or in studio.','n4'],['Convert','Edits, grades and cut-downs made to turn views into customers.','n10']];
  const [a,setA]=useState(0);
  return (<section className="dark"><div className="curve"></div><div className="wrap">
    <div><div className="tabs">{T.map((t,i)=>(<div key={i} className={'tab'+(a===i?' on':'')} onMouseEnter={()=>setA(i)} onClick={()=>setA(i)} data-h style={{fontSize:'clamp(54px,6vw,128px)',lineHeight:.95}}>{t[0]}.</div>))}</div>
      <p className="sub">End-to-end visual production for modern brands.</p></div>
    <div className="rig2" onMouseMove={tilt} onMouseLeave={untilt}><div className="rg" key={a}><Panel i={a+1} k={T[a][2]}/></div><p key={'p'+a} style={{animation:'pop .6s both'}}>{T[a][1]}</p></div>
  </div></section>);
}

export function Strategy(){
  const [m,setM]=useState(0);
  return (<section className="light" onMouseMove={e=>setM((e.clientX/innerWidth-.5)*40)}>
    <div className="drone2" data-p="-.12" style={{transform:'translateX('+m+'px) rotate('+m/14+'deg)'}}><div className="sc2"><Panel i={3} k="n8"/></div></div>
    <div className="wrap" style={{gridTemplateColumns:'1fr'}}><div>
      <Head lines={[['Strategy',0],['Meets',0],['Storytelling.',1]]}/>
      <Rv d={150}><p className="sub">Visual content that builds visibility, trust and business impact.</p></Rv>
    </div></div></section>);
}

export function Behind(){
  const r=useRef();
  const mv=e=>{const b=r.current.getBoundingClientRect();r.current.style.setProperty('--x',e.clientX-b.left+'px');r.current.style.setProperty('--y',e.clientY-b.top+'px')};
  return (<section className="dark"><div className="wrap">
    <div>
      <Head lines={[['Behind',0],['Every',0],['Great',0],['Brand.',1]]}/>
      <Rv d={150}><p className="sub">A creative team that plans, shoots, edits and delivers with impact.</p>
      <div className="steps">{['Plan','Shoot','Edit','Deliver'].map(s=>(<span key={s} data-h>{s}</span>))}</div></Rv>
    </div>
    <div className="spot" ref={r} onMouseMove={mv} data-h><Pic k="crew"/></div>
  </div></section>);
}

export function Impact(){
  return (<section className="light"><div className="wrap">
    <div>
      <Head lines={[['Less noise.',0],['More',0],['Impact.',1]]}/>
      <Rv d={150}><p className="sub">High-quality visuals that get your brand noticed, remembered and chosen.</p></Rv>
    </div>
    <div data-p=".06"><div className="clapi" data-h><Pic k="clap"/></div></div>
  </div></section>);
}

export function HomeContact(){
  const r=useRef();
  const mag=e=>{const b=r.current.getBoundingClientRect();r.current.style.transform='translate('+(e.clientX-b.left-b.width/2)*.35+'px,'+(e.clientY-b.top-b.height/2)*.35+'px)'};
  return (<section className="dark"><div className="curve"></div><div className="wrap" style={{gridTemplateColumns:'1fr'}}>
    <div>
      <Head lines={[['Let’s',0],['Create',0],['Something',0],['Iconic.',1]]}/>
      <Rv d={150}><p className="sub">Let’s turn your brand story into a powerful visual experience.</p>
      <button ref={r} className="pill" data-h onClick={()=>nav.go('contact')} onMouseMove={mag} onMouseLeave={()=>r.current.style.transform=''}>Let’s Talk →</button></Rv>
    </div>
    <div className="orbs"><div className="gi"><Pic k="gimbal" cls="fl"/></div><span className="orb" style={{top:'4%',left:'10%'}} data-h>Films</span><span className="orb" style={{top:'30%',right:'4%',animationDelay:'-1s'}} data-h>Photography</span><span className="orb" style={{bottom:'30%',left:'0',animationDelay:'-2s'}} data-h>Drone</span><span className="orb" style={{bottom:'4%',right:'14%',animationDelay:'-3s'}} data-h>Campaigns</span></div>
  </div></section>);
}

export function HSel(){
  const [h,setH]=useState(-1),pv=useRef();
  const mv=e=>{if(pv.current){pv.current.style.left=e.clientX+'px';pv.current.style.top=e.clientY+'px'}};
  return (<section className="s2 dark" onMouseMove={mv}><div className="w2"><p className="lbl">Selected work</p><Head lines={[['Visuals',0],['that speak.',1]]}/>
    <p className="sub" style={{maxWidth:460}}>A collection of creative explorations across brands, products, people and stories.</p>
    <div className="rwl" onMouseLeave={()=>setH(-1)}>{[0,3,6,9,12,15].map((j,n)=>(<a key={j} href={'#work-'+slug(PR[j][0])} className="rw" data-h onMouseEnter={()=>setH(j)} onClick={e=>{e.preventDefault();nav.go('work-'+slug(PR[j][0]))}}><span>0{n+1}</span><h3>{PR[j][0]}</h3><em>{PR[j][1]}</em></a>))}</div>
    <a href="#work" className="pill" style={{marginTop:0}} data-h onClick={e=>{e.preventDefault();nav.go('work')}}>VIEW ALL PROJECTS →</a>
    <p className="lbl" style={{marginTop:26}}>Fictional demonstration concepts, not client work.</p></div>
    <div ref={pv} className={'pvw'+(h>=0?' on':'')}>{h>=0&&(<Panel i={h} k={WK[h]}/>)}</div></section>);
}

export function HPhil(){
  const r=useRef(),[a,setA]=useState(-1);
  useEffect(()=>{const f=()=>{const b=r.current.getBoundingClientRect(),p=-b.top/(b.height-innerHeight);setA(p<.02?-1:Math.min(3,Math.floor(p*3.2)))};f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
  return (<section className={'pp'+(a===2?' shake':'')} ref={r}><div className="pin">{['Idea.','Rhythm.','Impact.'].map((w,i)=>(<div key={i} className={'pw'+(a===i?' on':a>i?' past':'')}>{w}</div>))}<div className={'sl'+(a>=2?' on':'')}>Every creative decision should serve the story.</div></div></section>);
}

export function HQuote(){return (<section className="s2 dark hq"><div className="w2"><Rv><q>“I don’t just edit videos. I look for the feeling hidden between every frame.”</q><p className="lbl">Sakthivel A. — Video Editor & Visual Storyteller</p></Rv></div></section>)}

export function Home(){
  return (<>
    <Hero/><Films/><Campaigns/><Photo/><Create/><Strategy/><Behind/><Impact/><HSel/><HPhil/><HQuote/>
    <div className="mq display"><div>{'Corporate Films ✦ Photography ✦ Campaigns ✦ Drone ✦ Brand Stories ✦ '.repeat(6)}</div></div>
    <HomeContact/>
  </>);
}

