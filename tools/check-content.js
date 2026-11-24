#!/usr/bin/env node
// usage: node check.js file.js [...]
const fs=require("fs"),vm=require("vm");
for(const f of process.argv.slice(2)){
  const mods=[],tests=[];
  const sb={CFA:{registerModule:(s,m)=>mods.push([s,m]),registerTest:(s,t)=>tests.push([s,t])}};
  try{vm.runInNewContext(fs.readFileSync(f,"utf8"),sb,{filename:f});}catch(e){console.log("SYNTAX",f,e.message);continue;}
  const err=[];const dist=[0,0,0];
  const chk=(q,where)=>{ if(!q.q||!Array.isArray(q.opts)||q.opts.length!==3) err.push(where+" bad opts"); if(![0,1,2].includes(q.ans)) err.push(where+" bad ans"); else dist[q.ans]++; if(!q.hint||!q.why) err.push(where+" missing hint/why"); if(new Set(q.opts).size!==3) err.push(where+" dup opts"); };
  for(const [s,m] of mods){
    let lq=0; const ld=[0,0,0];
    m.lessons.forEach((l,i)=>{ if(l.id!=="l"+(i+1)) err.push("lesson id "+l.id); if(!l.sections||!l.sections.length) err.push(l.id+" no sections"); (l.quiz||[]).forEach((q,j)=>{chk(q,l.id+" q"+(j+1)); ld[q.ans]++;}); lq+=l.quiz.length; (l.los||[]).forEach(x=>{if(x>=m.los.length) err.push(l.id+" los idx")}); });
    const md=[0,0,0]; const per={};
    (m.moduleQuiz||[]).forEach((q,j)=>{chk(q,"MQ"+(j+1)); md[q.ans]++; if(!(q.lesson>=1&&q.lesson<=m.lessons.length)) err.push("MQ"+(j+1)+" lesson ref"); per[q.lesson]=(per[q.lesson]||0)+1;});
    const allq=[...m.lessons.flatMap(l=>l.quiz),...(m.moduleQuiz||[])].map(q=>q.q.toLowerCase().replace(/<[^>]+>/g,"").replace(/[^a-z0-9]+/g," ").trim());
    const seen={}; allq.forEach(x=>{ if(seen[x]) err.push("duplicate stem: "+x.slice(0,60)); seen[x]=1;});
    console.log(`${f.split("/").pop()}: ${s}/${m.num} "${m.title}" lessons=${m.lessons.length} lessonQ=${lq} (A${ld[0]} B${ld[1]} C${ld[2]}) MQ=${(m.moduleQuiz||[]).length} (A${md[0]} B${md[1]} C${md[2]}) perLesson=${JSON.stringify(per)} los=${m.los.length}`);
  }
  for(const [s,t] of tests){ t.questions.forEach((q,j)=>chk(q,"T"+(j+1))); console.log(`${f}: test ${s} n=${t.questions.length} free=${t.freeCount} A${dist[0]} B${dist[1]} C${dist[2]}`); }
  if(err.length) console.log("  ERRORS:\n  "+err.join("\n  "));
}
