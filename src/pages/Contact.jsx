import { useState } from 'react';
import { Head, Rv } from '../components/ui';
import { IMG } from '../assets/index';

export function Field({k,label,opt,v,er,set,type='text',children,cls=''}){
  const p={id:'f-'+k,value:v[k],onChange:set(k),'aria-invalid':!!er[k],'aria-describedby':'e-'+k,className:er[k]?'bad':''};
  return (<div className={'fd '+cls}><label htmlFor={'f-'+k}>{label}{opt&&(<i>(optional)</i>)}</label>
    {children?(<select {...p}>{children}</select>):k==='msg'?(<textarea {...p} rows="5"/>):(<input {...p} type={type} autoComplete={k==='name'?'name':k==='email'?'email':k==='phone'?'tel':'off'}/>)}
    <span className="er" id={'e-'+k} role="alert">{er[k]||''}</span></div>);
}

export function ContactPage(){
  const E='skyeditor23@gmail.com';
  const [v,setV]=useState({name:'',email:'',phone:'',type:'',budget:'',time:'',msg:''}),[er,setEr]=useState({}),[st,setSt]=useState('idle');
  const set=k=>e=>{setV({...v,[k]:e.target.value});if(er[k])setEr({...er,[k]:''})};
  const check=()=>{const e={};if(!v.name.trim())e.name='Please enter your name.';
    if(!v.email.trim())e.email='Please enter your email address.';else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))e.email='Please enter a valid email address.';
    if(v.phone.trim()&&!/^[+\d][\d\s\-()]{6,}$/.test(v.phone.trim()))e.phone='Please enter a valid phone number, or leave it empty.';
    if(!v.type)e.type='Please choose a project type.';if(v.msg.trim().length<10)e.msg='Please share a few details (at least 10 characters).';return e};
  const mail=()=>'mailto:'+E+'?subject='+encodeURIComponent('Project enquiry: '+(v.type||'General')+' – '+v.name)+'&body='+encodeURIComponent('Name: '+v.name+'\nEmail: '+v.email+'\nPhone: '+(v.phone||'-')+'\nProject type: '+v.type+'\nApproximate budget: '+(v.budget||'-')+'\nTimeline: '+(v.time||'-')+'\n\nAbout the project:\n'+v.msg);
  const send=()=>{const e=check();setEr(e);const f=Object.keys(e)[0];if(f){const el=document.getElementById('f-'+f);el&&el.focus();return}
    setSt('loading');setTimeout(()=>{setSt('done');const a=document.createElement('a');a.href=mail();a.click()},900)};
  const T=['Brand Film','Commercial Video','Corporate Video','Product Video','Social Media Content','Motion Graphics','Promotional Video','Other'];
  return (<div>
  <section className="s2 dark pg"><div className="w2 cint"><div><p className="lbl">Let’s start a conversation.</p><Head lines={[['Have an idea?',0],['Let’s make it',0],['visual.',1]]}/>
    <p className="sub" style={{maxWidth:520}}>Whether you have a project in mind, need creative video editing or simply want to discuss an idea, I’d be happy to hear from you.</p></div>
    <img className="pic fl" src={IMG.clap} alt="" data-p="-.06"/></div></section>

  <section className="s2 light"><div className="w2"><p className="lbl">Contact details</p><Head lines={[['Say hello.',1]]}/>
    <div className="ctd"><div><b>NAME</b><span>Sakthivel A.</span></div><a href="tel:9944735841" data-h><b>PHONE</b><span>9944735841</span></a><a href="mailto:skyeditor23@gmail.com" data-h><b>EMAIL</b><span>skyeditor23@gmail.com</span></a><div><b>LOCATION</b><span>Coimbatore, Tamil Nadu, India</span></div></div>
    <div className="soc"><a href="https://github.com/SkyValut" target="_blank" rel="noopener" data-h><svg viewBox="0 0 24 24"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>GITHUB</a>
      <a href="https://www.linkedin.com/in/sakthivel-a-308562236/" target="_blank" rel="noopener" data-h><svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.6V9h3.5v11.5z"/></svg>LINKEDIN</a></div></div></section>

  <section className="s2 dark"><div className="w2 fmw"><div><p className="lbl">Project enquiry</p><Head lines={[['Tell me about',0],['your project.',1]]}/><p className="sub">Share a few details about what you’re planning. Let’s explore how we can bring your idea to life.</p></div>
    <div>{st==='done'?(<div className="ok" role="status"><h3>Your email is ready.</h3><p>Your email app should now open with this enquiry prefilled. Nothing has been sent yet. Please review it and press send in your email app.</p><p>If nothing opened, use the options below.</p><a href={mail()} data-h>Open email app</a><button onClick={()=>setSt('idle')} data-h>Edit enquiry</button><a href={'mailto:'+E} data-h>{E}</a></div>):
      (<div role="form" aria-label="Project enquiry" className="fm" onKeyDown={e=>{if(e.key==='Enter'&&e.target.tagName==='INPUT')send()}}>
        <Field k="name" label="Your name" v={v} er={er} set={set}/><Field k="email" label="Email address" type="email" v={v} er={er} set={set}/>
        <Field k="phone" label="Phone number" opt={1} type="tel" v={v} er={er} set={set}/>
        <Field k="type" label="Project type" v={v} er={er} set={set}><option value="">Select a project type</option>{T.map(t=>(<option key={t} value={t}>{t}</option>))}</Field>
        <Field k="budget" label="Approximate budget" opt={1} v={v} er={er} set={set}/><Field k="time" label="Project timeline" opt={1} v={v} er={er} set={set}/>
        <Field k="msg" label="Tell me about your project" cls="fl2" v={v} er={er} set={set}/>
        <div className="fl2"><button className="sb2" onClick={send} disabled={st==='loading'} data-h>{st==='loading'?(<><i className="sp2"/>PREPARING EMAIL…</>):'SEND PROJECT ENQUIRY →'}</button>
        <p className="lbl" style={{marginTop:18,textTransform:'none',letterSpacing:'.04em'}}>This opens your email app with the details prefilled. There is no server, so nothing is sent until you press send.</p></div></div>)}</div></div></section>

  <section className="s2 light cq"><div className="w2"><Rv><q>Good stories start with a conversation.</q><p className="sub" style={{margin:'0 auto'}}>Every meaningful creative project begins with a simple idea. Let’s talk about yours.</p></Rv></div></section>

  <section className="s2 dark" style={{textAlign:'center'}}><div className="w2"><Head lines={[['The next frame',0],['starts with you.',1]]}/><button className="pill" data-h onClick={()=>{const el=document.getElementById('f-name');el&&(el.scrollIntoView({behavior:'smooth',block:'center'}),setTimeout(()=>el.focus(),600))}}>LET’S TALK →</button></div></section></div>);
}
