"use client";
import {useEffect,useMemo,useState} from "react";

const API=process.env.NEXT_PUBLIC_API_URL||"http://127.0.0.1:8000";
type Grade={code:string;name:string;level:string};
type Subject={name:string;catalogue_status:string};
type Topic={id:string;name:string;entry_type:string;source_title:string;source_page:string;learning_outcomes:{id:string;outcome_text:string}[]};
type Doc={id:string;title:string;original_filename:string;extraction_status:string;source_type:string;characters:number;created_at:string};
type Message={id:string;role:"user"|"assistant";content:string;sources:{document_id:string;title:string;page_reference:string;source_type:string}[]};
type Draft={id:string;question_text:string;question_type:string;difficulty:string;marks:number;expected_answer:string;marking_guide:string;bloom_level:string;learning_outcome:string;options:string[];status:string;sources:{title:string;page_reference:string}[]};
type Session={id:string;title:string;grade_code:string;subject_name:string;topic_name:string;curriculum_node_id?:string|null;messages?:Message[];drafts?:Draft[]};
export default function PromptStudio(){
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{setHydrated(true)},[]);
 const [grades,setGrades]=useState<Grade[]>([]),[subjects,setSubjects]=useState<Subject[]>([]);
 const [topics,setTopics]=useState<Topic[]>([]),[documents,setDocuments]=useState<Doc[]>([]);
 const [sessions,setSessions]=useState<Session[]>([]);
 const [session,setSession]=useState<Session|null>(null);
 const [grade,setGrade]=useState("P6"),[subject,setSubject]=useState("Mathematics"),[topic,setTopic]=useState("");
 const [prompt,setPrompt]=useState("Create a lesson activity and assessment questions based on the lesson notes I upload. Use clear instructions and age-appropriate Ugandan examples.");
 const [mode,setMode]=useState<"ask"|"questions">("questions");
 const [count,setCount]=useState(5),[difficulty,setDifficulty]=useState("moderate"),[kind,setKind]=useState("mixed"),[bloom,setBloom]=useState("mixed");
 const [file,setFile]=useState<File|null>(null),[fileTitle,setFileTitle]=useState("");
 const [selectedDrafts,setSelectedDrafts]=useState<string[]>([]);
 const [busy,setBusy]=useState(false),[notice,setNotice]=useState(""),[error,setError]=useState("");
 const selectedTopic=topics.find(t=>t.id===topic);
 const drafts=session?.drafts||[];
 const pendingDrafts=drafts.filter(d=>d.status==="draft");
 const addedCount=drafts.filter(d=>d.status==="added_to_bank").length;

 async function refreshDocuments(){const r=await fetch(`${API}/api/v1/prompt-studio/documents`);if(r.ok)setDocuments(await r.json())}
 async function refreshSessions(){const r=await fetch(`${API}/api/v1/prompt-studio/sessions`);if(r.ok)setSessions(await r.json())}
 useEffect(()=>{Promise.all([
   fetch(`${API}/api/v1/curriculum/grades`).then(r=>r.json()).then(setGrades),
   fetch(`${API}/api/v1/curriculum/subjects`).then(r=>r.json()).then(setSubjects),
   refreshDocuments(),refreshSessions()
 ]).catch(()=>setError("Could not connect to SASA backend. Start the backend and refresh this page."))},[]);
 useEffect(()=>{if(!grade||!subject){setTopics([]);return}
   fetch(`${API}/api/v1/curriculum/topics?grade_code=${encodeURIComponent(grade)}&subject_name=${encodeURIComponent(subject)}`)
    .then(r=>r.ok?r.json():[]).then((rows:Topic[])=>{setTopics(rows);if(topic&&!rows.some(t=>t.id===topic))setTopic("")})
    .catch(()=>setTopics([]));
 },[grade,subject]);
 async function upload(){
  if(!file){setError("Choose a lesson note first.");return}
  setBusy(true);setError("");setNotice("");
  try{
   const form=new FormData();form.append("file",file);form.append("title",fileTitle);
   const r=await fetch(`${API}/api/v1/prompt-studio/documents/upload`,{method:"POST",body:form});
   const d=await r.json();if(!r.ok)throw Error(d.detail||"Upload failed");
   setNotice(d.message);setFile(null);setFileTitle("");await refreshDocuments();
  }catch(e){setError(e instanceof Error?e.message:"Could not upload lesson note")}finally{setBusy(false)}
 }
 async function openSession(id:string){
  setBusy(true);setError("");
  try{const r=await fetch(`${API}/api/v1/prompt-studio/sessions/${id}`);const d=await r.json();if(!r.ok)throw Error(d.detail||"Could not open session");
   setSession(d);setGrade(d.grade_code||"P6");setSubject(d.subject_name||"Mathematics");
   setTopic(d.curriculum_node_id||"");setSelectedDrafts([]);
  }catch(e){setError(e instanceof Error?e.message:"Could not open session")}finally{setBusy(false)}
 }
 async function deleteSession(id:string,title:string){
  if(!window.confirm(`Delete the conversation "${title}"? Its chat history and unapproved drafts will be permanently deleted. Questions already approved into the question bank will remain there.`))return;
  setBusy(true);setError("");setNotice("");
  try{
   const r=await fetch(`${API}/api/v1/prompt-studio/sessions/${id}`,{method:"DELETE"});
   const d=await r.json().catch(()=>({}));
   if(!r.ok)throw Error(d.detail||"Could not delete conversation");
   if(session?.id===id){setSession(null);setSelectedDrafts([]);}
   await refreshSessions();
   setNotice("Conversation deleted. Questions already approved into the question bank were preserved.");
  }catch(e){setError(e instanceof Error?e.message:"Could not delete conversation")}finally{setBusy(false)}
 }
 async function ensureSession(){
  if(session)return session;
  const r=await fetch(`${API}/api/v1/prompt-studio/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify({title:"New prompt session",grade_code:grade,subject_name:subject,topic_name:selectedTopic?.name||"",curriculum_node_id:topic||null})});
  const d=await r.json();if(!r.ok)throw Error(d.detail||"Could not start session");
  setSession(d);await refreshSessions();return d as Session;
 }
 async function send(){
  if(prompt.trim().length<2)return;
  setBusy(true);setError("");setNotice("");
  try{
   const active=await ensureSession();
   const r=await fetch(`${API}/api/v1/prompt-studio/sessions/${active.id}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({prompt:prompt.trim(),mode,number_of_questions:count,difficulty,question_type:kind,bloom_level:bloom})});
   const d=await r.json();if(!r.ok)throw Error(d.detail||"Prompt request failed");
   const latest=await fetch(`${API}/api/v1/prompt-studio/sessions/${active.id}`).then(x=>x.json());
   setSession(latest);setPrompt("");setSelectedDrafts([]);
   setNotice(mode==="questions"?`${d.drafts?.length||0} question draft(s) created. Review and select the items you want to add to your question bank.`:"Response generated. You can send a follow-up prompt to refine or extend it.");
   await refreshSessions();
  }catch(e){setError(e instanceof Error?e.message:"Prompt request failed")}finally{setBusy(false)}
 }
 async function sendToBank(){
  if(!session||!selectedDrafts.length)return;
  setBusy(true);setError("");
  try{
   const r=await fetch(`${API}/api/v1/prompt-studio/sessions/${session.id}/send-to-bank`,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({draft_ids:selectedDrafts,reviewer_name:"Teacher"})});
   const d=await r.json();if(!r.ok)throw Error(d.detail||"Could not add selected drafts");
   const latest=await fetch(`${API}/api/v1/prompt-studio/sessions/${session.id}`).then(x=>x.json());
   setSession(latest);setSelectedDrafts([]);setNotice(`${d.added_count} teacher-approved question(s) sent to the existing question bank.`);
  }catch(e){setError(e instanceof Error?e.message:"Could not send drafts")}finally{setBusy(false)}
 }
 function toggleDraft(id:string){setSelectedDrafts(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id])}
 const activeMessages=session?.messages||[];
 if(!hydrated) return <main className="studio-shell" aria-busy="true"><p>Loading SASA Prompt Studio...</p></main>;
 return <div className="studio-shell">
  <header className="studio-header">
   <div className="brand"><span className="brand-mark">S</span><div><b>SASA</b><small>AI teaching & assessment studio</small></div></div>
   <nav><a href="/">Assessment engine</a><a href="/curriculum">Curriculum manager</a></nav>
  </header>
  <main className="studio-main">
   <div className="studio-intro"><div><span className="eyebrow">TEACHER WORKSPACE · V0.1.0</span><h1>AI Prompt Studio</h1>
    <p>Bring your lesson notes, describe what you need, and work with SASA to create or refine teaching and assessment materials. You decide what enters the question bank.</p></div>
    <div className="human-control"><span>✓</span><div><b>Teacher in control</b><small>AI outputs remain drafts until you approve them.</small></div></div>
   </div>
   {error&&<div className="studio-alert error">{error}</div>}{notice&&<div className="studio-alert">{notice}</div>}
   <div className="studio-layout">
    <aside className="studio-sidebar">
     <section className="studio-card"><div className="section-heading"><div><span className="eyebrow">KNOWLEDGE BASE</span><h2>Lesson notes</h2></div><span className="count-pill">{documents.length}</span></div>
      <p className="help-text">Upload PDF, Word, text or Markdown notes. SASA extracts and indexes their text for retrieval during your prompt session.</p>
      <label className="upload-drop"><input type="file" accept=".pdf,.docx,.txt,.md" onChange={e=>setFile(e.target.files?.[0]||null)}/><span className="upload-icon">＋</span><b>{file?file.name:"Choose a lesson note"}</b><small>PDF · DOCX · TXT · MD · up to 20 MB</small></label>
      <label>Document title</label><input value={fileTitle} onChange={e=>setFileTitle(e.target.value)} placeholder="e.g. P6 Fractions lesson notes"/>
      <button className="studio-button primary full" disabled={busy||!file} onClick={upload}>{busy?"Processing…":"Upload and index notes"}</button>
      <div className="document-list">{documents.map(d=><div className="document-row" key={d.id}><span className="file-icon">▤</span><div><b>{d.title}</b><small>{d.extraction_status==="extracted"?`${d.characters.toLocaleString()} characters · ready for RAG`:`Extraction: ${d.extraction_status}`}</small></div><span className={d.extraction_status==="extracted"?"status-dot ready":"status-dot"} /></div>)}
       {!documents.length&&<p className="empty-note">No lesson notes uploaded yet. You can still retrieve from verified NCDC documents.</p>}</div>
     </section>
     <section className="studio-card"><div className="section-heading"><div><span className="eyebrow">CONVERSATIONS</span><h2>Recent sessions</h2></div><button className="icon-button" title="Start a new session" onClick={()=>{setSession(null);setSelectedDrafts([]);setNotice("New session ready. Set the class and subject, then enter your prompt.");}}>＋</button></div>
      <div className="session-list">{sessions.map(s=><div key={s.id} className={`session-row ${session?.id===s.id?"active":""}`}>
        <button type="button" className="session-item session-open" onClick={()=>openSession(s.id)} disabled={busy}>
         <b>{s.title}</b><small>{s.grade_code||"Class not set"} · {s.subject_name||"Subject not set"}</small>
        </button>
        <button type="button" className="session-delete" title={`Delete ${s.title}`} aria-label={`Delete conversation ${s.title}`} disabled={busy} onClick={()=>deleteSession(s.id,s.title)}>
         <span aria-hidden="true">×</span>
        </button>
       </div>)}
       {!sessions.length&&<p className="empty-note">Your prompt sessions will appear here.</p>}</div>
     </section>
    </aside>
    <section className="studio-workspace">
     <section className="studio-card context-card"><div className="section-heading"><div><span className="eyebrow">ASSESSMENT CONTEXT</span><h2>What are you working on?</h2></div><span className="optional-label">Optional, but recommended</span></div>
      <div className="context-grid">
       <div><label>Class</label><select value={grade} onChange={e=>{setGrade(e.target.value);setTopic("")}}>{grades.map(g=><option key={g.code} value={g.code}>{g.name}</option>)}</select></div>
       <div><label>Subject</label><select value={subject} onChange={e=>{setSubject(e.target.value);setTopic("")}}>{subjects.map(s=><option key={s.name} value={s.name}>{s.name}</option>)}</select></div>
       <div className="wide"><label>Verified curriculum topic (optional)</label><select value={topic} onChange={e=>setTopic(e.target.value)}><option value="">Use uploaded notes / general teacher prompt</option>{topics.map(t=><option key={t.id} value={t.id}>{t.name} · {t.entry_type}</option>)}</select>
        {selectedTopic&&<small className="context-source">Verified source: {selectedTopic.source_title}{selectedTopic.source_page?` · ${selectedTopic.source_page}`:""}</small>}
       </div>
      </div>
     </section>
     <section className="studio-card chat-card"><div className="chat-top"><div><span className="eyebrow">PROMPT WORKSPACE</span><h2>{session?.title||"Start with a prompt"}</h2></div><span className="rag-indicator"><i/> RAG enabled</span></div>
      <div className="chat-history">
       {!activeMessages.length&&<div className="welcome-prompt"><div className="sparkle">✦</div><h3>What would you like to prepare?</h3><p>Ask a question about your notes, create assessment items, or refine material over several turns.</p>
        <div className="prompt-examples"><button onClick={()=>{setMode("questions");setPrompt("Create five varied assessment questions from my uploaded notes. Include suggested answers and marking guides.");}}>Generate five questions</button><button onClick={()=>{setMode("ask");setPrompt("Summarise the key concepts in my uploaded lesson notes and identify any points learners may find difficult.");}}>Summarise lesson notes</button><button onClick={()=>{setMode("ask");setPrompt("Create a clear lesson activity using the uploaded material, then suggest how I can assess learners' understanding.");}}>Plan a lesson activity</button></div>
       </div>}
       {activeMessages.map(m=><article className={`chat-message ${m.role}`} key={m.id}><div className="message-role">{m.role==="user"?"YOU":"SASA AI"}</div><div className="message-content">{m.content}</div>
        {m.sources?.length>0&&<div className="source-chips"><b>Retrieved sources:</b>{m.sources.map((s,i)=><span key={`${s.document_id}-${i}`}>{s.title}{s.page_reference?` · ${s.page_reference}`:""}</span>)}</div>}
       </article>)}
      </div>
      <div className="composer">
       <div className="composer-mode"><button className={mode==="ask"?"selected":""} onClick={()=>setMode("ask")}>Ask & refine</button><button className={mode==="questions"?"selected":""} onClick={()=>setMode("questions")}>Generate questions</button></div>
       {mode==="questions"&&<div className="generation-options">
        <div><label>Number</label><select value={count} onChange={e=>setCount(Number(e.target.value))}>{[3,5,10,15,20].map(n=><option key={n}>{n}</option>)}</select></div>
        <div><label>Difficulty</label><select value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option value="easy">Easy</option><option value="moderate">Moderate</option><option value="challenging">Challenging</option><option value="mixed">Mixed</option></select></div>
        <div><label>Format</label><select value={kind} onChange={e=>setKind(e.target.value)}><option value="mixed">Mixed</option><option value="multiple_choice">Multiple choice</option><option value="short_answer">Short answer</option><option value="structured">Structured</option><option value="essay">Essay</option><option value="practical">Practical</option><option value="scenario">Scenario</option></select></div>
        <div><label>Bloom level</label><select value={bloom} onChange={e=>setBloom(e.target.value)}><option value="mixed">Mixed</option><option value="remember">Remember</option><option value="understand">Understand</option><option value="apply">Apply</option><option value="analyse">Analyse</option><option value="evaluate">Evaluate</option><option value="create">Create</option></select></div>
       </div>}
       <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Write your prompt… (Enter to send, Shift+Enter for a new line)" rows={4}/>
       <div className="composer-footer"><small>Use follow-up prompts to revise tone, difficulty, format or content. Retrieved extracts are shown with responses.</small><button className="studio-button primary" disabled={busy||prompt.trim().length<2} onClick={send}>{busy?"Working…":mode==="questions"?"Generate drafts →":"Send prompt →"}</button></div>
      </div>
     </section>
     {drafts.length>0&&<section className="studio-card draft-review"><div className="section-heading"><div><span className="eyebrow">TEACHER REVIEW</span><h2>Generated question drafts</h2><p className="help-text">{pendingDrafts.length} awaiting your decision · {addedCount} added to the question bank</p></div><span className="count-pill">{drafts.length}</span></div>
      <div className="draft-toolbar"><label className="select-all"><input type="checkbox" checked={pendingDrafts.length>0&&pendingDrafts.every(d=>selectedDrafts.includes(d.id))} onChange={e=>setSelectedDrafts(e.target.checked?pendingDrafts.map(d=>d.id):[])} /> Select all pending</label><button className="studio-button primary" disabled={busy||!selectedDrafts.length} onClick={sendToBank}>Approve & add selected ({selectedDrafts.length})</button></div>
      {drafts.map((d,i)=><article className={`draft-item ${d.status==="added_to_bank"?"added":""}`} key={d.id}>
       <div className="draft-head"><label><input type="checkbox" checked={selectedDrafts.includes(d.id)} disabled={d.status!=="draft"} onChange={()=>toggleDraft(d.id)}/><b>Question {i+1}</b></label><span className={d.status==="added_to_bank"?"draft-status added-status":"draft-status"}>{d.status==="added_to_bank"?"In question bank":"Draft · awaiting approval"}</span></div>
       <p className="draft-question">{d.question_text}</p>
       {d.options?.length>0&&<ol type="A">{d.options.map((o,j)=><li key={j}>{o}</li>)}</ol>}
       <div className="draft-meta"><span>{d.question_type.replaceAll("_"," ")}</span><span>{d.difficulty}</span><span>{d.marks} marks</span><span>{d.bloom_level}</span></div>
       {d.expected_answer&&<details><summary>Suggested answer & marking guide</summary><p><b>Answer:</b> {d.expected_answer}</p><p><b>Marking guide:</b> {d.marking_guide}</p></details>}
       {d.sources?.length>0&&<div className="source-chips">{d.sources.map((s,j)=><span key={j}>{s.title}{s.page_reference?` · ${s.page_reference}`:""}</span>)}</div>}
      </article>)}
      <p className="review-footnote">Only selected drafts are approved and transferred. Approved items become available in the existing SASA question bank and examination builder.</p>
     </section>}
    </section>
   </div>
   <footer className="studio-footer">SASA · AI-assisted teaching and assessment · Teacher review remains essential.</footer>
  </main>
 </div>
}
