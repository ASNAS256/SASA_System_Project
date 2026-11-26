"use client";
import {useEffect,useState} from "react";
const API=process.env.NEXT_PUBLIC_API_URL||"http://127.0.0.1:8000";
type Grade={code:string;name:string;level:string};
type Subject={name:string;catalogue_status:string};
type Topic={id:string;name:string;entry_type:string;description:string;source_url:string;source_page:string;source_version:string;verification_status:string;source_title:string;strand_name:string;learning_outcomes:{id:string;outcome_text:string;competency:string;page_reference:string}[]};
type Q={id:string;grade_code:string;subject_name:string;topic_name:string|null;question_text:string;question_type:string;difficulty:string;marks:number;expected_answer:string;marking_guide:string;curriculum_reference:string;source:string;approval_status:string;moderation_category:string;bloom_level:string;learning_outcome:string;options:string[];explanation:string};
type Doc={id:string;title:string;original_filename:string;extraction_status:string;source_type:string;characters:number;created_at:string};
type Exam={id:string;title:string;grade_code:string;subject_name:string;duration_minutes:number;total_marks:number;paper_type?:string;question_count:number;status:string};

export default function Home(){
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{setHydrated(true)},[]);
 const [grades,setGrades]=useState<Grade[]>([]);
 const [subjects,setSubjects]=useState<Subject[]>([]);
 const [topics,setTopics]=useState<Topic[]>([]);
 const [grade,setGrade]=useState("S3");
 const [subject,setSubject]=useState("Biology");
 const [topic,setTopic]=useState("");
 const [outcome,setOutcome]=useState("");
 const [count,setCount]=useState(5);
 const [difficulty,setDifficulty]=useState("moderate");
 const [kind,setKind]=useState("mixed");
 const [bloom,setBloom]=useState("mixed");
 const [questions,setQuestions]=useState<Q[]>([]);
 const [exams,setExams]=useState<Exam[]>([]);
 const [examTitle,setExamTitle]=useState("End of Topic Assessment");
 const [examMarks,setExamMarks]=useState(20);
 const [duration,setDuration]=useState(60);
 const [busy,setBusy]=useState(false);
 const [notice,setNotice]=useState("");
 const [error,setError]=useState("");
 const [questionStatusFilter,setQuestionStatusFilter]=useState("All");
 const [questionCategoryFilter,setQuestionCategoryFilter]=useState("All");
 const [moderationHidden,setModerationHidden]=useState(false);
 const [hiddenCategories,setHiddenCategories]=useState<string[]>([]);
 const [selectedQuestionIds,setSelectedQuestionIds]=useState<string[]>([]);
 const [paperQuestionIds,setPaperQuestionIds]=useState<string[]>([]);
 const [selectedAssessmentType,setSelectedAssessmentType]=useState<"activity"|"examination">("activity");
 const [selectedPaperTitle,setSelectedPaperTitle]=useState("Class Activity");
 const [selectedPaperDuration,setSelectedPaperDuration]=useState(45);
 const [documents,setDocuments]=useState<Doc[]>([]);
 const [docFile,setDocFile]=useState<File|null>(null);
 const [docTitle,setDocTitle]=useState("");
 const [docType,setDocType]=useState("lesson_note");
 const [useDocuments,setUseDocuments]=useState(true);
 const [genContext,setGenContext]=useState("Use age-appropriate Ugandan contexts where appropriate.");
 const [selectedExamIds,setSelectedExamIds]=useState<string[]>([]);
 const [scopeMatching,setScopeMatching]=useState(false);
 const RECENT_DOCS=3;
 const questionCategories=["Curriculum","Demo/Test","Supplementary","Archived"];

 async function loadGrades(){const r=await fetch(`${API}/api/v1/curriculum/grades`);if(!r.ok)throw Error("Could not load classes");setGrades(await r.json())}
 async function loadSubjects(){const r=await fetch(`${API}/api/v1/curriculum/subjects`);if(!r.ok)throw Error("Could not load subjects");setSubjects(await r.json())}
 async function loadTopics(g:string,s:string){try{setOutcome("");const r=await fetch(`${API}/api/v1/curriculum/topics?grade_code=${encodeURIComponent(g)}&subject_name=${encodeURIComponent(s)}`);if(!r.ok)throw Error("Could not load verified curriculum topics");const d=await r.json();setTopics(d);setTopic(d[0]?.id||"")}catch{setTopics([]);setTopic("");setOutcome("")}}
 async function loadQuestions(){try{const r=await fetch(`${API}/api/v1/questions`);if(r.ok)setQuestions(await r.json())}catch{}}
 async function loadDocuments(){try{const r=await fetch(`${API}/api/v1/prompt-studio/documents`);if(r.ok)setDocuments(await r.json())}catch{}}
 async function uploadDocument(){
  if(!docFile){setError("Choose a lesson note or document first.");return}
  setBusy(true);setError("");setNotice("");
  try{
   const form=new FormData();form.append("file",docFile);form.append("title",docTitle);form.append("source_type",docType);
   const r=await fetch(`${API}/api/v1/prompt-studio/documents/upload`,{method:"POST",body:form});
   const d=await r.json();if(!r.ok)throw Error(typeof d.detail==="string"?d.detail:"Upload failed");
   setNotice(`${d.message} It is now available to both SASA AI and the question generator here.`);setDocFile(null);setDocTitle("");await loadDocuments();
  }catch(e){setError(e instanceof Error?e.message:"Could not upload document")}finally{setBusy(false)}
 }
 async function loadExams(){try{const r=await fetch(`${API}/api/v1/examinations`);if(r.ok)setExams(await r.json())}catch{}}
 useEffect(()=>{Promise.all([loadGrades(),loadSubjects(),loadQuestions(),loadExams(),loadDocuments()]).catch(e=>setError(e.message||"Backend unavailable."))},[]);
 // Questions approved in SASA AI (another tab/page) appear here as soon as the teacher comes back.
 useEffect(()=>{const refresh=()=>{if(document.visibilityState==="visible"){loadQuestions();loadExams();loadDocuments()}};document.addEventListener("visibilitychange",refresh);window.addEventListener("focus",refresh);return()=>{document.removeEventListener("visibilitychange",refresh);window.removeEventListener("focus",refresh)}},[]);
 useEffect(()=>{if(grade&&subject)loadTopics(grade,subject)},[grade,subject]);
 const selectedTopic=topics.find(t=>t.id===topic);
 const selectedOutcome=selectedTopic?.learning_outcomes.find(o=>o.id===outcome);
 function canAddQuestionToPaper(q:Q){
  const qSubject=q.subject_name.trim().toLowerCase();
  const currentSubject=subject.trim().toLowerCase();
  const englishAliases=["english","english language"];
  const sameSubject=qSubject===currentSubject||(englishAliases.includes(qSubject)&&englishAliases.includes(currentSubject));
  return q.approval_status==="approved"&&q.grade_code===grade&&sameSubject;
 }

 async function generate(){
  if(!selectedTopic){setError(`No verified ${subject} curriculum entry is selected for ${grade}. Register the relevant NCDC source, import its entries, and verify the curriculum unit and any required learning outcomes first.`);return}
  setBusy(true);setError("");setNotice("Generating draft questions...");
  try{
   const r=await fetch(`${API}/api/v1/questions/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    grade_code:grade,subject_name:subject,topic_name:selectedTopic.name,curriculum_node_id:selectedTopic.id,
    learning_outcome_id:outcome,learning_outcome:selectedOutcome?.outcome_text||"",
    number_of_questions:count,difficulty,question_type:kind,bloom_level:bloom,
    include_answers:true,use_documents:useDocuments,context:genContext.trim()||"Use age-appropriate Ugandan contexts where appropriate."
   })});
   const d=await r.json();if(!r.ok)throw Error(d.detail||"Generation failed");
   const used:string[]=Array.from(new Set((d.sources||[]).map((s:{title:string})=>s.title)));setNotice(`${d.count} draft questions saved. Source: ${d.source}. ${used.length?`Grounded in your documents: ${used.slice(0,3).join("; ")}${used.length>3?` and ${used.length-3} more`:""}. `:""}Teacher review required.`);await loadQuestions();
  }catch(e){setError(e instanceof Error?e.message:"Unexpected error")}finally{setBusy(false)}
 }
 async function review(id:string,decision:"approved"|"rejected"){
  const r=await fetch(`${API}/api/v1/questions/${id}/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reviewer_name:"Teacher",decision,comments:"Reviewed in SASA teacher workspace"})});
  if(r.ok){setNotice(`Question ${decision}.`);loadQuestions()}else setError("Review action failed.")
 }
 async function categorizeQuestion(id:string,category:string){
  try{const r=await fetch(`${API}/api/v1/questions/${id}/category`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({category})});const d=await r.json();if(!r.ok)throw Error(typeof d.detail==="string"?d.detail:"Category update failed");setNotice(`Question moved to ${category}.`);await loadQuestions()}
  catch(e){setError(e instanceof Error?e.message:"Category update failed")}
 }
 async function deleteQuestion(id:string){
  if(!window.confirm("Delete this question? This works for any question, approved or not. If it is already in a saved activity or paper, that paper keeps its own copy."))return;
  try{const r=await fetch(`${API}/api/v1/questions/${id}`,{method:"DELETE"});const d=await r.json();if(!r.ok)throw Error(typeof d.detail==="string"?d.detail:(d.detail?.message||"Delete failed"));setSelectedQuestionIds(old=>old.filter(x=>x!==id));setPaperQuestionIds(old=>old.filter(x=>x!==id));setNotice(d.retained_in_papers_count?"Question deleted. The saved paper that uses it keeps its copy.":"Question deleted.");await loadQuestions();await loadExams()}
  catch(e){setError(e instanceof Error?e.message:"Delete failed")}
 }
 async function deleteSelectedQuestions(){
  if(!selectedQuestionIds.length)return;
  const ids=[...selectedQuestionIds];
  if(!window.confirm(`Delete ${ids.length} selected question(s)? This works for approved and used questions too. Saved papers that already use them keep their own copy.`))return;
  try{const r=await fetch(`${API}/api/v1/questions/bulk-delete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids})});const d=await r.json();if(!r.ok)throw Error(typeof d.detail==="string"?d.detail:(d.detail?.message||"Bulk deletion failed"));setSelectedQuestionIds([]);setPaperQuestionIds(old=>old.filter(x=>!ids.includes(x)));setNotice(`${d.deleted_count} selected question(s) deleted.${d.retained_in_papers_count?` ${d.retained_in_papers_count} remain printed in saved papers.`:""}`);await loadQuestions();await loadExams()}
  catch(e){setError(e instanceof Error?e.message:"Bulk deletion failed");await loadQuestions()}
 }
 async function deleteExams(ids:string[]){
  if(!ids.length)return;
  if(!window.confirm(ids.length===1?"Delete this saved paper? The questions in your question bank are not affected.":`Delete ${ids.length} saved papers? The questions in your question bank are not affected.`))return;
  setError("");
  try{const r=await fetch(`${API}/api/v1/examinations/bulk-delete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids})});const d=await r.json();if(!r.ok)throw Error(typeof d.detail==="string"?d.detail:"Could not delete saved papers");setSelectedExamIds(old=>old.filter(x=>!ids.includes(x)));setNotice(`${d.deleted_count} saved paper(s) deleted.`);await loadExams()}
  catch(e){setError(e instanceof Error?e.message:"Could not delete saved papers");await loadExams()}
 }
 function toggleCategory(category:string){setHiddenCategories(old=>old.includes(category)?old.filter(x=>x!==category):[...old,category])}
 async function buildSelectedAssessment(){
  if(!paperQuestionIds.length){setError("Select at least one approved question from the question bank first.");return}
  setBusy(true);setError("");setNotice(`Creating ${selectedAssessmentType} from your selected questions...`);
  try{
   const r=await fetch(`${API}/api/v1/assessments/build-selected`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    title:selectedPaperTitle,grade_code:grade,subject_name:subject,duration_minutes:selectedPaperDuration,
    assessment_type:selectedAssessmentType,question_ids:paperQuestionIds
   })});
   const d=await r.json();
   if(!r.ok){const detail=d.detail;throw Error(typeof detail==="string"?detail:(detail?.message||"Could not create the selected assessment"))}
   const created=d.examination;
   setNotice(`${selectedAssessmentType==="activity"?"Activity":"Examination"} created with ${created.question_count} questions and ${created.total_marks} marks. Download the student or teacher PDF below.`);
   setPaperQuestionIds([]);await loadExams();
  }catch(e){setError(e instanceof Error?e.message:"Could not create selected assessment")}finally{setBusy(false)}
 }
 async function buildExam(){
  setBusy(true);setError("");setNotice("Assembling paper from approved questions...");
  try{
   const r=await fetch(`${API}/api/v1/examinations/build`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    title:examTitle,grade_code:grade,subject_name:subject,total_marks:examMarks,duration_minutes:duration,
    topic_names:[],difficulty:"any",bloom_levels:[]
   })});
   const d=await r.json();if(!r.ok)throw Error(d.detail||"Paper assembly failed");
   setNotice(`Draft examination assembled with ${d.examination.question_count} approved questions.`);await loadExams();
  }catch(e){setError(e instanceof Error?e.message:"Could not build examination")}finally{setBusy(false)}
 }
 const approvedCount=questions.filter(q=>q.approval_status==="approved").length;
 const availableForPaper=questions.filter(canAddQuestionToPaper);
 const aiQuestionCount=questions.filter(q=>q.source==="ai_rag").length;
 const filteredQuestions=questions.filter(q=>
  (!scopeMatching||(q.grade_code===grade&&canAddQuestionToPaper({...q,approval_status:"approved"})))&&
  (questionStatusFilter==="All"||q.approval_status===questionStatusFilter)&&
  (questionCategoryFilter==="All"||(q.moderation_category||"Curriculum")===questionCategoryFilter)
 );
 const visibleQuestions=filteredQuestions.filter(q=>!hiddenCategories.includes(q.moderation_category||"Curriculum"));
 if(!hydrated) return <main className="app-shell" aria-busy="true"><p>Loading SASA...</p></main>;
 return <>
  <main className="wrap">
   <section className="hero"><h1>Curriculum Intelligence & Assessment Engine</h1>
    <p>Generate teacher-reviewed assessment items and assemble complete examination papers from your approved question bank.</p>
    <b>Primary P1–P7 · Secondary S1–S6 · Multi-subject foundation</b>
   </section>
   {error&&<div className="alert error">{error}</div>}{notice&&<div className="alert">{notice}</div>}
   <div className="grid">
    <section className="panel">
     <h2>✦ AI Question Generator</h2><p className="muted">Questions are saved as drafts and require teacher moderation.</p>
     <label>Class</label><select value={grade} onChange={e=>{setGrade(e.target.value);setPaperQuestionIds([])}}>{grades.map(g=><option key={g.code} value={g.code}>{g.name} — {g.level}</option>)}</select>
     <label>Subject catalogue</label><select value={subject} onChange={e=>{setSubject(e.target.value);setPaperQuestionIds([])}}>{subjects.map(s=><option key={s.name} value={s.name}>{s.name}{s.catalogue_status==="unverified"?" · verify availability":""}</option>)}</select>
     <label>{grade==="P1"||grade==="P2"||grade==="P3"?"Verified thematic learning unit":"Verified curriculum topic"}</label><select value={topic} onChange={e=>{setTopic(e.target.value);setOutcome("")}}><option value="">Select curriculum entry</option>{topics.map(t=><option key={t.id} value={t.id}>{t.name}{t.strand_name?` · ${t.strand_name}`:""}</option>)}</select>
     {selectedTopic&&<p className="muted">{selectedTopic.entry_type.toUpperCase()} · Verified source: {selectedTopic.source_title}{selectedTopic.source_page?` · ${selectedTopic.source_page}`:""}</p>}
     <label>Verified learning outcome</label><select value={outcome} onChange={e=>setOutcome(e.target.value)}><option value="">No specific outcome selected</option>{(selectedTopic?.learning_outcomes||[]).map(o=><option key={o.id} value={o.id}>{o.outcome_text}</option>)}</select>
     <p className="muted">Only verified outcomes attached to the selected curriculum entry or its verified subtopics are available. Selecting an outcome is optional.</p>
     <div className="grid two">
      <div><label>Number of questions</label><input type="number" min="1" max="20" value={count} onChange={e=>setCount(Math.max(1,Math.min(20,Number(e.target.value))))}/></div>
      <div><label>Difficulty</label><select value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option value="easy">Easy</option><option value="moderate">Moderate</option><option value="challenging">Challenging</option><option value="mixed">Mixed</option></select></div>
     </div>
     <div className="grid two">
      <div><label>Question format</label><select value={kind} onChange={e=>setKind(e.target.value)}><option value="mixed">Mixed</option><option value="multiple_choice">Multiple choice</option><option value="short_answer">Short answer</option><option value="structured">Structured</option><option value="essay">Essay</option><option value="practical">Practical</option><option value="scenario">Scenario-based</option></select></div>
      <div><label>Bloom cognitive level</label><select value={bloom} onChange={e=>setBloom(e.target.value)}><option value="mixed">Mixed</option><option value="remember">Remember</option><option value="understand">Understand</option><option value="apply">Apply</option><option value="analyse">Analyse</option><option value="evaluate">Evaluate</option><option value="create">Create</option></select></div>
     </div>
     <label>Extra instructions for the AI (optional)</label><input value={genContext} onChange={e=>setGenContext(e.target.value)} placeholder="e.g. Use local market examples; focus on the experiment in my notes"/>
     <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" style={{width:"auto"}} checked={useDocuments} onChange={e=>setUseDocuments(e.target.checked)}/> Ground questions in my uploaded lesson notes and documents ({documents.length} available)</label>
     {topics.length===0&&<div className="alert warning">No verified {subject} curriculum entries are currently available for {grade}. Register the correct NCDC source document, import its curriculum CSV, then verify the topics and learning outcomes in the Curriculum Manager.</div>}
     <button className="primary" disabled={busy||!selectedTopic} onClick={generate}>{busy?"Working...":"Generate draft questions"}</button>
    </section>
    <section className="panel">
     <h2>Curriculum directory</h2><div className="statrow"><div className="stat"><b>{grades.length}</b><span>Classes</span></div><div className="stat"><b>{subjects.length}</b><span>Subject entries</span></div></div>
     <p className="muted">P1–S6 class directory and broad subject catalogue are seeded. Subject availability by class, official strands, topics and learning outcomes still require validation against current NCDC documents.</p>
     {selectedTopic&&<div><b>{grade} · {subject} · {selectedTopic.name}</b><p className="muted">{selectedTopic.description}</p>{selectedTopic.source_url&&<a href={selectedTopic.source_url} target="_blank" rel="noreferrer">Open curriculum source ↗</a>}</div>}
     <div className="muted">The selector shows verified records currently imported into SASA. It does not claim that the full NCDC syllabus has been imported.</div>
     <h3>Question bank</h3><p className="muted">{questions.length} saved · {approvedCount} approved · {questions.length-approvedCount} awaiting review or rejected</p>
     <button className="secondary" onClick={loadQuestions}>Refresh question bank</button>
    </section>
   </div>
   <section className="panel workspace-docs"><div className="actions" style={{justifyContent:"space-between",alignItems:"center",marginTop:0}}><div><h2>Lesson notes & documents</h2><p className="muted">The same knowledge base as SASA AI: anything uploaded here or there is used to ground generated questions. PDF, Word, text or Markdown, up to 20 MB.</p></div><span className="count-pill">{documents.length}</span></div>
    <div className="grid two">
     <div><label>Document</label><input type="file" accept=".pdf,.docx,.txt,.md" onChange={e=>setDocFile(e.target.files?.[0]||null)}/></div>
     <div><label>Document title (optional)</label><input value={docTitle} onChange={e=>setDocTitle(e.target.value)} placeholder="e.g. S3 Photosynthesis lesson notes"/></div>
     <div><label>Document type</label><select value={docType} onChange={e=>setDocType(e.target.value)}><option value="lesson_note">Lesson notes</option><option value="scheme_of_work">Scheme of work</option><option value="past_paper">Past paper / sample paper</option><option value="reference_material">Reference material</option><option value="other">Other document</option></select></div>
     <div style={{display:"flex",alignItems:"end"}}><button className="primary" style={{marginTop:0}} disabled={busy||!docFile} onClick={uploadDocument}>{busy?"Working...":"Upload and index"}</button></div>
    </div>
    <div className="document-list">{documents.slice(0,RECENT_DOCS).map(d=><div className="document-row" key={d.id}><span className="file-icon">▤</span><div><b>{d.title}</b><small>{d.source_type.replaceAll("_"," ")} · {d.extraction_status==="extracted"?`${d.characters.toLocaleString()} characters · ready for RAG`:`Extraction: ${d.extraction_status}`}</small></div><span className={d.extraction_status==="extracted"?"status-dot ready":"status-dot"}/></div>)}
     {documents.length===0&&<p className="empty-note">No documents uploaded yet. Verified NCDC documents are still used where relevant.</p>}
     {documents.length>RECENT_DOCS&&<p className="empty-note">Showing the {RECENT_DOCS} most recent uploads. {documents.length-RECENT_DOCS} older document{documents.length-RECENT_DOCS===1?"":"s"} hidden here but still indexed and used for retrieval.</p>}</div>
   </section>
   <section className="panel"><h2>Activity & Examination Builder</h2>
    <p className="muted">Select the exact approved questions you want to use in an activity or examination. The selection is independent of the delete-selection controls in the question bank. SASA calculates the total marks from your selection and prepares both a student copy and a teacher copy with expected working and marking guidance. Questions must belong to the class and subject selected above.</p>
    <div className="question" style={{background:"#f6fafb"}}>
     <h3>Create from selected questions</h3>
     <div className="grid two">
      <div><label>Assessment type</label><select value={selectedAssessmentType} onChange={e=>setSelectedAssessmentType(e.target.value as "activity"|"examination")}><option value="activity">Class activity</option><option value="examination">Examination paper</option></select></div>
      <div><label>Assessment title</label><input value={selectedPaperTitle} onChange={e=>setSelectedPaperTitle(e.target.value)}/></div>
      <div><label>Duration (minutes)</label><input type="number" min="5" max="600" value={selectedPaperDuration} onChange={e=>setSelectedPaperDuration(Math.max(5,Math.min(600,Number(e.target.value))))}/></div>
      <div><label>Class and subject</label><input value={`${grade} · ${subject}`} readOnly/></div>
     </div>
     <p className="muted"><b>{paperQuestionIds.length}</b> question(s) selected · <b>{questions.filter(q=>paperQuestionIds.includes(q.id)).reduce((sum,q)=>sum+Number(q.marks||0),0)}</b> total marks. Select approved questions below in the question bank. Questions from a different class or subject cannot be combined.</p>
     <div className="actions" style={{marginTop:0}}><span className="muted"><b>{availableForPaper.length}</b> approved question(s) available for {grade} · {subject}{aiQuestionCount>0?` (including ${availableForPaper.filter(q=>q.source==="ai_rag").length} approved from SASA AI)`:""}.</span><button className="secondary" disabled={!availableForPaper.length} onClick={()=>setPaperQuestionIds(availableForPaper.map(q=>q.id))}>Select all available</button><button className="secondary" disabled={!paperQuestionIds.length} onClick={()=>setPaperQuestionIds([])}>Clear paper selection</button></div>
     <button className="primary" disabled={busy||!paperQuestionIds.length||!selectedPaperTitle.trim()} onClick={buildSelectedAssessment}>Create {selectedAssessmentType==="activity"?"Activity":"Examination"} from selected questions</button>
    </div>
    <h3>Automatic examination builder</h3>
    <p className="muted">Alternatively, build a draft examination automatically from the approved question bank using an exact marks total.</p>
    <div className="grid two">
     <div><label>Paper title</label><input value={examTitle} onChange={e=>setExamTitle(e.target.value)}/></div>
     <div><label>Total marks</label><input type="number" min="1" max="500" value={examMarks} onChange={e=>setExamMarks(Math.max(1,Number(e.target.value)))}/></div>
     <div><label>Duration (minutes)</label><input type="number" min="10" max="600" value={duration} onChange={e=>setDuration(Math.max(10,Number(e.target.value)))}/></div>
     <div><label>Selected class and subject</label><input value={`${grade} · ${subject}`} readOnly/></div>
    </div>
    <button className="primary" disabled={busy||availableForPaper.length===0} onClick={buildExam}>Build draft examination</button>
    <div className="actions" style={{justifyContent:"space-between",alignItems:"center"}}><h3>Saved examination papers</h3>
     {exams.length>0&&<div className="actions" style={{marginTop:0}}><button className="secondary" onClick={()=>setSelectedExamIds(selectedExamIds.length===exams.length?[]:exams.map(e=>e.id))}>{selectedExamIds.length===exams.length?"Clear selection":"Select all"}</button><button className="danger" disabled={!selectedExamIds.length} onClick={()=>deleteExams(selectedExamIds)}>Delete selected ({selectedExamIds.length})</button></div>}</div>
    {exams.length===0&&<p className="muted">No examination papers built yet.</p>}
    {exams.map(e=><article className="question" key={e.id}><div className="paper-row-head"><label><input type="checkbox" style={{width:"auto"}} checked={selectedExamIds.includes(e.id)} onChange={ev=>setSelectedExamIds(old=>ev.target.checked?[...old.filter(x=>x!==e.id),e.id]:old.filter(x=>x!==e.id))}/> <b>{e.title}</b></label></div><p className="muted">{(e.paper_type||"examination")==="activity"?"Activity":"Examination"} · {e.grade_code} · {e.subject_name} · {e.question_count} questions · {e.total_marks} marks · {e.duration_minutes} minutes · {e.status}</p>
      <div className="actions"><a href={`${API}/api/v1/examinations/${e.id}/paper.pdf?teacher_copy=false`} target="_blank" rel="noreferrer">Download student PDF</a><a href={`${API}/api/v1/examinations/${e.id}/paper.pdf?teacher_copy=true`} target="_blank" rel="noreferrer">Download teacher working & marking guide</a><button className="danger" onClick={()=>deleteExams([e.id])}>Delete paper</button></div>
      <small className="muted">Print the downloaded PDF using your PDF reader or browser.</small>
    </article>)}
   </section>
   <section className="panel">
    <div className="actions" style={{justifyContent:"space-between",alignItems:"center"}}>
     <div><h2>Teacher moderation & question bank</h2><p className="muted">{questions.length} total · {questions.filter(q=>q.approval_status==="pending").length} pending review · {approvedCount} approved · {questions.filter(q=>q.approval_status==="rejected").length} rejected</p></div>
     <button className="secondary" onClick={()=>setModerationHidden(v=>!v)}>{moderationHidden?"Show question bank":"Hide question bank"}</button>
    </div>
    {!moderationHidden&&<>
     <div className="grid two">
      <div><label>Review status</label><select value={questionStatusFilter} onChange={e=>setQuestionStatusFilter(e.target.value)}><option value="All">All statuses</option><option value="pending">Pending review</option><option value="approved">Approved</option><option value="rejected">Rejected</option></select></div>
      <div><label>Question category</label><select value={questionCategoryFilter} onChange={e=>setQuestionCategoryFilter(e.target.value)}><option value="All">All categories</option>{questionCategories.map(c=><option key={c} value={c}>{c}</option>)}</select></div>
     </div>
     <div className="actions" style={{marginTop:12,flexWrap:"wrap"}}>
      <button className="secondary" onClick={loadQuestions}>Refresh question bank</button>
      <button className="secondary" onClick={()=>setSelectedQuestionIds(visibleQuestions.map(q=>q.id))} disabled={!visibleQuestions.length}>Select visible ({visibleQuestions.length})</button>
      <button className="secondary" onClick={()=>setSelectedQuestionIds([])} disabled={!selectedQuestionIds.length}>Clear selection</button>
      <button className="danger" onClick={deleteSelectedQuestions} disabled={!selectedQuestionIds.length}>Delete selected ({selectedQuestionIds.length})</button>
      <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" style={{width:"auto"}} checked={scopeMatching} onChange={e=>setScopeMatching(e.target.checked)}/> Only questions usable for {grade} · {subject}</label>
     </div>
     <div style={{marginTop:16}}>
      <b>Category visibility</b>
      <div className="actions" style={{marginTop:8,flexWrap:"wrap"}}>
       {questionCategories.map(c=><button key={c} className="secondary" onClick={()=>toggleCategory(c)}>{hiddenCategories.includes(c)?`Show ${c}`:`Hide ${c}`}</button>)}
      </div>
     </div>
     {questions.length===0&&<p className="muted">No questions generated yet.</p>}
     {filteredQuestions.length===0&&questions.length>0&&<p className="muted">No questions match the selected review status and category.</p>}
     {questionCategories.filter(c=>questionCategoryFilter==="All"||questionCategoryFilter===c).map(category=>{
      const categoryQuestions=filteredQuestions.filter(q=>(q.moderation_category||"Curriculum")===category);
      const isHidden=hiddenCategories.includes(category);
      return <div key={category} style={{marginTop:18}}>
       <div className="actions" style={{justifyContent:"space-between",alignItems:"center"}}>
        <h3>{category} ({categoryQuestions.length})</h3>
        <button className="secondary" onClick={()=>toggleCategory(category)}>{isHidden?"Show category":"Hide category"}</button>
       </div>
       {!isHidden&&categoryQuestions.map((q,i)=><article className="question" key={q.id}>
        <div className="actions" style={{justifyContent:"space-between",alignItems:"center"}}>
         <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" checked={selectedQuestionIds.includes(q.id)} onChange={e=>setSelectedQuestionIds(old=>e.target.checked?[...old.filter(x=>x!==q.id),q.id]:old.filter(x=>x!==q.id))}/> Select for deletion</label>
         <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" disabled={!canAddQuestionToPaper(q)} checked={paperQuestionIds.includes(q.id)} onChange={e=>setPaperQuestionIds(old=>e.target.checked?[...old.filter(x=>x!==q.id),q.id]:old.filter(x=>x!==q.id))}/> Add to activity / paper {!canAddQuestionToPaper(q)?(q.approval_status!=="approved"?"(approve first)":"(select matching class / subject)"):""}</label>
         <small>{q.source==="ai_rag"?"SASA AI · ":""}{q.grade_code} · {q.subject_name} · {q.topic_name||"No topic"} · {q.difficulty} · {q.bloom_level} · {q.marks} marks · {q.approval_status}</small>
        </div>
        <p><b>{i+1}. {q.question_text}</b></p>
        {q.options?.length>0&&<ol type="A">{q.options.map((o,j)=><li key={j}>{o}</li>)}</ol>}
        <details><summary>Suggested answer, explanation and marking guide</summary><p><b>Answer:</b> {q.expected_answer}</p><p><b>Explanation:</b> {q.explanation}</p><p><b>Marking guide:</b> {q.marking_guide}</p><small>{q.curriculum_reference}</small></details>
        <div className="actions" style={{flexWrap:"wrap"}}>
         <label>Category <select value={q.moderation_category||"Curriculum"} onChange={e=>categorizeQuestion(q.id,e.target.value)}>{questionCategories.map(c=><option key={c} value={c}>{c}</option>)}</select></label>
         {q.moderation_category!=="Demo/Test"&&<button className="secondary" onClick={()=>categorizeQuestion(q.id,"Demo/Test")}>Mark as Demo/Test</button>}
         {q.approval_status==="pending"&&<><button className="secondary" onClick={()=>review(q.id,"approved")}>Approve</button><button className="danger" onClick={()=>review(q.id,"rejected")}>Reject</button></>}
         <button className="danger" onClick={()=>deleteQuestion(q.id)}>Delete</button>
         <a href={`${API}/api/v1/questions/${q.id}/paper.pdf?teacher_copy=true`} target="_blank" rel="noreferrer">Teacher PDF</a>
         <a href={`${API}/api/v1/questions/${q.id}/paper.pdf?teacher_copy=false`} target="_blank" rel="noreferrer">Question only PDF</a>
        </div>
       </article>)}
       {!isHidden&&categoryQuestions.length===0&&<p className="muted">No questions in this category for the selected status.</p>}
      </div>
     })}
    </>}
   </section>
   <p className="muted">SASA· AI output is draft material; teacher verification is required.</p>
  </main>
 </>;
}
