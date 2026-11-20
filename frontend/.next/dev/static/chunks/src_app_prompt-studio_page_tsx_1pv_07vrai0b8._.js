(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/prompt-studio/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const API = ("TURBOPACK compile-time value", "http://127.0.0.1:8000") || "http://127.0.0.1:8000";
function PromptStudio() {
    _s();
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptStudio.useEffect": ()=>{
            setHydrated(true);
        }
    }["PromptStudio.useEffect"], []);
    const [grades, setGrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topics, setTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("S3"), [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Biology"), [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Create a lesson activity and assessment questions based on the lesson notes I upload. Use clear instructions and age-appropriate Ugandan examples.");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("questions");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5), [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("moderate"), [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mixed"), [bloom, setBloom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mixed");
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [fileTitle, setFileTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDrafts, setSelectedDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const selectedTopic = topics.find((t)=>t.id === topic);
    const drafts = session?.drafts || [];
    const pendingDrafts = drafts.filter((d)=>d.status === "draft");
    const addedCount = drafts.filter((d)=>d.status === "added_to_bank").length;
    async function refreshDocuments() {
        const r = await fetch(`${API}/api/v1/prompt-studio/documents`);
        if (r.ok) setDocuments(await r.json());
    }
    async function refreshSessions() {
        const r = await fetch(`${API}/api/v1/prompt-studio/sessions`);
        if (r.ok) setSessions(await r.json());
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptStudio.useEffect": ()=>{
            Promise.all([
                fetch(`${API}/api/v1/curriculum/grades`).then({
                    "PromptStudio.useEffect": (r)=>r.json()
                }["PromptStudio.useEffect"]).then(setGrades),
                fetch(`${API}/api/v1/curriculum/subjects`).then({
                    "PromptStudio.useEffect": (r)=>r.json()
                }["PromptStudio.useEffect"]).then(setSubjects),
                refreshDocuments(),
                refreshSessions()
            ]).catch({
                "PromptStudio.useEffect": ()=>setError("Could not connect to SASA backend. Start the backend and refresh this page.")
            }["PromptStudio.useEffect"]);
        }
    }["PromptStudio.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptStudio.useEffect": ()=>{
            if (!grade || !subject) {
                setTopics([]);
                return;
            }
            fetch(`${API}/api/v1/curriculum/topics?grade_code=${encodeURIComponent(grade)}&subject_name=${encodeURIComponent(subject)}`).then({
                "PromptStudio.useEffect": (r)=>r.ok ? r.json() : []
            }["PromptStudio.useEffect"]).then({
                "PromptStudio.useEffect": (rows)=>{
                    setTopics(rows);
                    if (topic && !rows.some({
                        "PromptStudio.useEffect": (t)=>t.id === topic
                    }["PromptStudio.useEffect"])) setTopic("");
                }
            }["PromptStudio.useEffect"]).catch({
                "PromptStudio.useEffect": ()=>setTopics([])
            }["PromptStudio.useEffect"]);
        }
    }["PromptStudio.useEffect"], [
        grade,
        subject
    ]);
    async function upload() {
        if (!file) {
            setError("Choose a lesson note first.");
            return;
        }
        setBusy(true);
        setError("");
        setNotice("");
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("title", fileTitle);
            const r = await fetch(`${API}/api/v1/prompt-studio/documents/upload`, {
                method: "POST",
                body: form
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Upload failed");
            setNotice(d.message);
            setFile(null);
            setFileTitle("");
            await refreshDocuments();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not upload lesson note");
        } finally{
            setBusy(false);
        }
    }
    async function openSession(id) {
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/prompt-studio/sessions/${id}`);
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Could not open session");
            setSession(d);
            setGrade(d.grade_code || "P6");
            setSubject(d.subject_name || "Mathematics");
            setTopic(d.curriculum_node_id || "");
            setSelectedDrafts([]);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not open session");
        } finally{
            setBusy(false);
        }
    }
    async function deleteSession(id, title) {
        if (!window.confirm(`Delete the conversation "${title}"? Its chat history and unapproved drafts will be permanently deleted. Questions already approved into the question bank will remain there.`)) return;
        setBusy(true);
        setError("");
        setNotice("");
        try {
            const r = await fetch(`${API}/api/v1/prompt-studio/sessions/${id}`, {
                method: "DELETE"
            });
            const d = await r.json().catch(()=>({}));
            if (!r.ok) throw Error(d.detail || "Could not delete conversation");
            if (session?.id === id) {
                setSession(null);
                setSelectedDrafts([]);
            }
            await refreshSessions();
            setNotice("Conversation deleted. Questions already approved into the question bank were preserved.");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not delete conversation");
        } finally{
            setBusy(false);
        }
    }
    async function ensureSession() {
        if (session) return session;
        const r = await fetch(`${API}/api/v1/prompt-studio/sessions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "New prompt session",
                grade_code: grade,
                subject_name: subject,
                topic_name: selectedTopic?.name || "",
                curriculum_node_id: topic || null
            })
        });
        const d = await r.json();
        if (!r.ok) throw Error(d.detail || "Could not start session");
        setSession(d);
        await refreshSessions();
        return d;
    }
    async function send() {
        if (prompt.trim().length < 2) return;
        setBusy(true);
        setError("");
        setNotice("");
        try {
            const active = await ensureSession();
            const r = await fetch(`${API}/api/v1/prompt-studio/sessions/${active.id}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt.trim(),
                    mode,
                    number_of_questions: count,
                    difficulty,
                    question_type: kind,
                    bloom_level: bloom
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Prompt request failed");
            const latest = await fetch(`${API}/api/v1/prompt-studio/sessions/${active.id}`).then((x)=>x.json());
            setSession(latest);
            setPrompt("");
            setSelectedDrafts([]);
            setNotice(mode === "questions" ? `${d.drafts?.length || 0} question draft(s) created. Review and select the items you want to add to your question bank.` : "Response generated. You can send a follow-up prompt to refine or extend it.");
            await refreshSessions();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Prompt request failed");
        } finally{
            setBusy(false);
        }
    }
    async function sendToBank() {
        if (!session || !selectedDrafts.length) return;
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/prompt-studio/sessions/${session.id}/send-to-bank`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    draft_ids: selectedDrafts,
                    reviewer_name: "Teacher"
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Could not add selected drafts");
            const latest = await fetch(`${API}/api/v1/prompt-studio/sessions/${session.id}`).then((x)=>x.json());
            setSession(latest);
            setSelectedDrafts([]);
            setNotice(`${d.added_count} teacher-approved question(s) sent to the existing question bank.`);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not send drafts");
        } finally{
            setBusy(false);
        }
    }
    function toggleDraft(id) {
        setSelectedDrafts((old)=>old.includes(id) ? old.filter((x)=>x !== id) : [
                ...old,
                id
            ]);
    }
    const activeMessages = session?.messages || [];
    if (!hydrated) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "studio-shell",
        "aria-busy": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading SASA Prompt Studio..."
        }, void 0, false, {
            fileName: "[project]/src/app/prompt-studio/page.tsx",
            lineNumber: 106,
            columnNumber: 71
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/prompt-studio/page.tsx",
        lineNumber: 106,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "studio-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "studio-main",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "studio-intro",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "TEACHER WORKSPACE · V0.1.0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 39
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "AI Prompt Studio"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Bring your lesson notes, describe what you need, and work with SASA to create or refine teaching and assessment materials. You decide what enters the question bank."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                            lineNumber: 109,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "human-control",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 36
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Teacher in control"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 55
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "AI outputs remain drafts until you approve them."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 80
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 50
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                            lineNumber: 111,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                    lineNumber: 109,
                    columnNumber: 4
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "studio-alert error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                    lineNumber: 113,
                    columnNumber: 12
                }, this),
                notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "studio-alert",
                    children: notice
                }, void 0, false, {
                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                    lineNumber: 113,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "studio-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "studio-sidebar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "studio-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "KNOWLEDGE BASE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Lesson notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 124
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 72
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "count-pill",
                                                    children: documents.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 151
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 39
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "help-text",
                                            children: "Upload PDF, Word, text or Markdown notes. SASA extracts and indexes their text for retrieval during your prompt session."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "upload-drop",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".pdf,.docx,.txt,.md",
                                                    onChange: (e)=>setFile(e.target.files?.[0] || null)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "upload-icon",
                                                    children: "＋"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 136
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: file ? file.name : "Choose a lesson note"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 174
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "PDF · DOCX · TXT · MD · up to 20 MB"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 220
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Document title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: fileTitle,
                                            onChange: (e)=>setFileTitle(e.target.value),
                                            placeholder: "e.g. P6 Fractions lesson notes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "studio-button primary full",
                                            disabled: busy || !file,
                                            onClick: upload,
                                            children: busy ? "Processing…" : "Upload and index notes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "document-list",
                                            children: [
                                                documents.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "document-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "file-icon",
                                                                children: "▤"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 97
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: d.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 138
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: d.extraction_status === "extracted" ? `${d.characters.toLocaleString()} characters · ready for RAG` : `Extraction: ${d.extraction_status}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 154
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 133
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: d.extraction_status === "extracted" ? "status-dot ready" : "status-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 309
                                                            }, this)
                                                        ]
                                                    }, d.id, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 56
                                                    }, this)),
                                                !documents.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "empty-note",
                                                    children: "No lesson notes uploaded yet. You can still retrieve from verified NCDC documents."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "studio-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "CONVERSATIONS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Recent sessions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 123
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 72
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "icon-button",
                                                    title: "Start a new session",
                                                    onClick: ()=>{
                                                        setSession(null);
                                                        setSelectedDrafts([]);
                                                        setNotice("New session ready. Set the class and subject, then enter your prompt.");
                                                    },
                                                    children: "＋"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 39
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "session-list",
                                            children: [
                                                sessions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `session-row ${session?.id === s.id ? "active" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "session-item session-open",
                                                                onClick: ()=>openSession(s.id),
                                                                disabled: busy,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: s.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 10
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: [
                                                                            s.grade_code || "Class not set",
                                                                            " · ",
                                                                            s.subject_name || "Subject not set"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "session-delete",
                                                                title: `Delete ${s.title}`,
                                                                "aria-label": `Delete conversation ${s.title}`,
                                                                disabled: busy,
                                                                onClick: ()=>deleteSession(s.id, s.title),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": "true",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 10
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 54
                                                    }, this)),
                                                !sessions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "empty-note",
                                                    children: "Your prompt sessions will appear here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                            lineNumber: 115,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "studio-workspace",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "studio-card context-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "ASSESSMENT CONTEXT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 90
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "What are you working on?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 141
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 85
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "optional-label",
                                                    children: "Optional, but recommended"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 180
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "context-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Class"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: grade,
                                                            onChange: (e)=>{
                                                                setGrade(e.target.value);
                                                                setTopic("");
                                                            },
                                                            children: grades.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: g.code,
                                                                    children: g.name
                                                                }, g.code, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 124
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Subject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: subject,
                                                            onChange: (e)=>{
                                                                setSubject(e.target.value);
                                                                setTopic("");
                                                            },
                                                            children: subjects.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s.name,
                                                                    children: s.name
                                                                }, s.name, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 132
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wide",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Verified curriculum topic (optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: topic,
                                                            onChange: (e)=>setTopic(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Use uploaded notes / general teacher prompt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 142
                                                                }, this),
                                                                topics.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: t.id,
                                                                        children: [
                                                                            t.name,
                                                                            " · ",
                                                                            t.entry_type
                                                                        ]
                                                                    }, t.id, true, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 226
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 81
                                                        }, this),
                                                        selectedTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "context-source",
                                                            children: [
                                                                "Verified source: ",
                                                                selectedTopic.source_title,
                                                                selectedTopic.source_page ? ` · ${selectedTopic.source_page}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 8
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "studio-card chat-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chat-top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "PROMPT WORKSPACE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 80
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: session?.title || "Start with a prompt"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 129
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rag-indicator",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 215
                                                        }, this),
                                                        " RAG enabled"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 183
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chat-history",
                                            children: [
                                                !activeMessages.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "welcome-prompt",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sparkle",
                                                            children: "✦"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 65
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "What would you like to prepare?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 97
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Ask a question about your notes, create assessment items, or refine material over several turns."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "prompt-examples",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setMode("questions");
                                                                        setPrompt("Create five varied assessment questions from my uploaded notes. Include suggested answers and marking guides.");
                                                                    },
                                                                    children: "Generate five questions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setMode("ask");
                                                                        setPrompt("Summarise the key concepts in my uploaded lesson notes and identify any points learners may find difficult.");
                                                                    },
                                                                    children: "Summarise lesson notes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 243
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setMode("ask");
                                                                        setPrompt("Create a clear lesson activity using the uploaded material, then suggest how I can assess learners' understanding.");
                                                                    },
                                                                    children: "Plan a lesson activity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 435
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this),
                                                activeMessages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        className: `chat-message ${m.role}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "message-role",
                                                                children: m.role === "user" ? "YOU" : "SASA AI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 88
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "message-content",
                                                                children: m.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 157
                                                            }, this),
                                                            m.sources?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "source-chips",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: "Retrieved sources:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    m.sources.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                s.title,
                                                                                s.page_reference ? ` · ${s.page_reference}` : ""
                                                                            ]
                                                                        }, `${s.document_id}-${i}`, true, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 152,
                                                                            columnNumber: 108
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, m.id, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 31
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "composer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "composer-mode",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: mode === "ask" ? "selected" : "",
                                                            onClick: ()=>setMode("ask"),
                                                            children: "Ask & refine"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 39
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: mode === "questions" ? "selected" : "",
                                                            onClick: ()=>setMode("questions"),
                                                            children: "Generate questions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 136
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 8
                                                }, this),
                                                mode === "questions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "generation-options",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    children: "Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: count,
                                                                    onChange: (e)=>setCount(Number(e.target.value)),
                                                                    children: [
                                                                        3,
                                                                        5,
                                                                        10,
                                                                        15,
                                                                        20
                                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: n
                                                                        }, n, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 158,
                                                                            columnNumber: 127
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    children: "Difficulty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: difficulty,
                                                                    onChange: (e)=>setDifficulty(e.target.value),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "easy",
                                                                            children: "Easy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 110
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "moderate",
                                                                            children: "Moderate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 144
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "challenging",
                                                                            children: "Challenging"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 186
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "mixed",
                                                                            children: "Mixed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 234
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    children: "Format"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: kind,
                                                                    onChange: (e)=>setKind(e.target.value),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "mixed",
                                                                            children: "Mixed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 94
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "multiple_choice",
                                                                            children: "Multiple choice"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 130
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "short_answer",
                                                                            children: "Short answer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 186
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "structured",
                                                                            children: "Structured"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 236
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "essay",
                                                                            children: "Essay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 282
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "practical",
                                                                            children: "Practical"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 318
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "scenario",
                                                                            children: "Scenario"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 362
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    children: "Bloom level"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: bloom,
                                                                    onChange: (e)=>setBloom(e.target.value),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "mixed",
                                                                            children: "Mixed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 101
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "remember",
                                                                            children: "Remember"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 137
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "understand",
                                                                            children: "Understand"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 179
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "apply",
                                                                            children: "Apply"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 225
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "analyse",
                                                                            children: "Analyse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 261
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "evaluate",
                                                                            children: "Evaluate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 301
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "create",
                                                                            children: "Create"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 343
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: prompt,
                                                    onChange: (e)=>setPrompt(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" && !e.shiftKey) {
                                                            e.preventDefault();
                                                            send();
                                                        }
                                                    },
                                                    placeholder: "Write your prompt… (Enter to send, Shift+Enter for a new line)",
                                                    rows: 4
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "composer-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "Use follow-up prompts to revise tone, difficulty, format or content. Retrieved extracts are shown with responses."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "studio-button primary",
                                                            disabled: busy || prompt.trim().length < 2,
                                                            onClick: send,
                                                            children: busy ? "Working…" : mode === "questions" ? "Generate drafts →" : "Send prompt →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 169
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 8
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 6
                                }, this),
                                drafts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "studio-card draft-review",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "TEACHER REVIEW"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 108
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Generated question drafts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "help-text",
                                                            children: [
                                                                pendingDrafts.length,
                                                                " awaiting your decision · ",
                                                                addedCount,
                                                                " added to the question bank"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 189
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 103
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "count-pill",
                                                    children: drafts.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 311
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 70
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "draft-toolbar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "select-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: pendingDrafts.length > 0 && pendingDrafts.every((d)=>selectedDrafts.includes(d.id)),
                                                            onChange: (e)=>setSelectedDrafts(e.target.checked ? pendingDrafts.map((d)=>d.id) : [])
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 68
                                                        }, this),
                                                        " Select all pending"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "studio-button primary",
                                                    disabled: busy || !selectedDrafts.length,
                                                    onClick: sendToBank,
                                                    children: [
                                                        "Approve & add selected (",
                                                        selectedDrafts.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 288
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 7
                                        }, this),
                                        drafts.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: `draft-item ${d.status === "added_to_bank" ? "added" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "draft-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: selectedDrafts.includes(d.id),
                                                                        disabled: d.status !== "draft",
                                                                        onChange: ()=>toggleDraft(d.id)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 43
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: [
                                                                            "Question ",
                                                                            i + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 170
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: d.status === "added_to_bank" ? "draft-status added-status" : "draft-status",
                                                                children: d.status === "added_to_bank" ? "In question bank" : "Draft · awaiting approval"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 199
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 8
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "draft-question",
                                                        children: d.question_text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 8
                                                    }, this),
                                                    d.options?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        type: "A",
                                                        children: d.options.map((o, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: o
                                                            }, j, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 65
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 30
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "draft-meta",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: d.question_type.replaceAll("_", " ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: d.difficulty
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 86
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    d.marks,
                                                                    " marks"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 113
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: d.bloom_level
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 141
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 8
                                                    }, this),
                                                    d.expected_answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                children: "Suggested answer & marking guide"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: "Answer:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 91
                                                                    }, this),
                                                                    " ",
                                                                    d.expected_answer
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 88
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: "Marking guide:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 132
                                                                    }, this),
                                                                    " ",
                                                                    d.marking_guide
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 129
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 28
                                                    }, this),
                                                    d.sources?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "source-chips",
                                                        children: d.sources.map((s, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    s.title,
                                                                    s.page_reference ? ` · ${s.page_reference}` : ""
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 82
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, d.id, true, {
                                                fileName: "[project]/src/app/prompt-studio/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 26
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "review-footnote",
                                            children: "Only selected drafts are approved and transferred. Approved items become available in the existing SASA question bank and examination builder."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prompt-studio/page.tsx",
                            lineNumber: 136,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                    lineNumber: 114,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "studio-footer",
                    children: "SASA · AI-assisted teaching and assessment · Teacher review remains essential."
                }, void 0, false, {
                    fileName: "[project]/src/app/prompt-studio/page.tsx",
                    lineNumber: 181,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/prompt-studio/page.tsx",
            lineNumber: 108,
            columnNumber: 3
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/prompt-studio/page.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(PromptStudio, "47BLjxpT0kKPUqMec9wP0BsPNqg=");
_c = PromptStudio;
var _c;
__turbopack_context__.k.register(_c, "PromptStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_prompt-studio_page_tsx_1pv_07vrai0b8._.js.map