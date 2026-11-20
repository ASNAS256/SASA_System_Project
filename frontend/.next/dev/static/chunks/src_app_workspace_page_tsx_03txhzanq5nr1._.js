(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/workspace/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const API = ("TURBOPACK compile-time value", "http://127.0.0.1:8000") || "http://127.0.0.1:8000";
function Home() {
    _s();
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setHydrated(true);
        }
    }["Home.useEffect"], []);
    const [grades, setGrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topics, setTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("S3");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Biology");
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [outcome, setOutcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("moderate");
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mixed");
    const [bloom, setBloom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mixed");
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [exams, setExams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [examTitle, setExamTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("End of Topic Assessment");
    const [examMarks, setExamMarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [questionStatusFilter, setQuestionStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [questionCategoryFilter, setQuestionCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [moderationHidden, setModerationHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hiddenCategories, setHiddenCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedQuestionIds, setSelectedQuestionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [paperQuestionIds, setPaperQuestionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAssessmentType, setSelectedAssessmentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("activity");
    const [selectedPaperTitle, setSelectedPaperTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Class Activity");
    const [selectedPaperDuration, setSelectedPaperDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(45);
    const questionCategories = [
        "Curriculum",
        "Demo/Test",
        "Supplementary",
        "Archived"
    ];
    async function loadGrades() {
        const r = await fetch(`${API}/api/v1/curriculum/grades`);
        if (!r.ok) throw Error("Could not load classes");
        setGrades(await r.json());
    }
    async function loadSubjects() {
        const r = await fetch(`${API}/api/v1/curriculum/subjects`);
        if (!r.ok) throw Error("Could not load subjects");
        setSubjects(await r.json());
    }
    async function loadTopics(g, s) {
        try {
            setOutcome("");
            const r = await fetch(`${API}/api/v1/curriculum/topics?grade_code=${encodeURIComponent(g)}&subject_name=${encodeURIComponent(s)}`);
            if (!r.ok) throw Error("Could not load verified curriculum topics");
            const d = await r.json();
            setTopics(d);
            setTopic(d[0]?.id || "");
        } catch  {
            setTopics([]);
            setTopic("");
            setOutcome("");
        }
    }
    async function loadQuestions() {
        try {
            const r = await fetch(`${API}/api/v1/questions`);
            if (r.ok) setQuestions(await r.json());
        } catch  {}
    }
    async function loadExams() {
        try {
            const r = await fetch(`${API}/api/v1/examinations`);
            if (r.ok) setExams(await r.json());
        } catch  {}
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            Promise.all([
                loadGrades(),
                loadSubjects(),
                loadQuestions(),
                loadExams()
            ]).catch({
                "Home.useEffect": (e)=>setError(e.message || "Backend unavailable.")
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (grade && subject) loadTopics(grade, subject);
        }
    }["Home.useEffect"], [
        grade,
        subject
    ]);
    const selectedTopic = topics.find((t)=>t.id === topic);
    const selectedOutcome = selectedTopic?.learning_outcomes.find((o)=>o.id === outcome);
    function canAddQuestionToPaper(q) {
        const qSubject = q.subject_name.trim().toLowerCase();
        const currentSubject = subject.trim().toLowerCase();
        const englishAliases = [
            "english",
            "english language"
        ];
        const sameSubject = qSubject === currentSubject || englishAliases.includes(qSubject) && englishAliases.includes(currentSubject);
        return q.approval_status === "approved" && q.grade_code === grade && sameSubject;
    }
    async function generate() {
        if (!selectedTopic) {
            setError(`No verified ${subject} curriculum entry is selected for ${grade}. Register the relevant NCDC source, import its entries, and verify the curriculum unit and any required learning outcomes first.`);
            return;
        }
        setBusy(true);
        setError("");
        setNotice("Generating draft questions...");
        try {
            const r = await fetch(`${API}/api/v1/questions/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    grade_code: grade,
                    subject_name: subject,
                    topic_name: selectedTopic.name,
                    curriculum_node_id: selectedTopic.id,
                    learning_outcome_id: outcome,
                    learning_outcome: selectedOutcome?.outcome_text || "",
                    number_of_questions: count,
                    difficulty,
                    question_type: kind,
                    bloom_level: bloom,
                    include_answers: true,
                    context: "Use age-appropriate Ugandan contexts where appropriate."
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Generation failed");
            setNotice(`${d.count} draft questions saved. Source: ${d.source}. Teacher review required.`);
            await loadQuestions();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Unexpected error");
        } finally{
            setBusy(false);
        }
    }
    async function review(id, decision) {
        const r = await fetch(`${API}/api/v1/questions/${id}/approve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reviewer_name: "Teacher",
                decision,
                comments: "Reviewed in SASA teacher workspace"
            })
        });
        if (r.ok) {
            setNotice(`Question ${decision}.`);
            loadQuestions();
        } else setError("Review action failed.");
    }
    async function categorizeQuestion(id, category) {
        try {
            const r = await fetch(`${API}/api/v1/questions/${id}/category`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(typeof d.detail === "string" ? d.detail : "Category update failed");
            setNotice(`Question moved to ${category}.`);
            await loadQuestions();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Category update failed");
        }
    }
    async function deleteQuestion(id) {
        if (!window.confirm("Permanently delete this question and its moderation history? Questions already used in examination papers are protected.")) return;
        try {
            const r = await fetch(`${API}/api/v1/questions/${id}`, {
                method: "DELETE"
            });
            const d = await r.json();
            if (!r.ok) throw Error(typeof d.detail === "string" ? d.detail : d.detail?.message || "Delete failed");
            setSelectedQuestionIds((old)=>old.filter((x)=>x !== id));
            setPaperQuestionIds((old)=>old.filter((x)=>x !== id));
            setNotice("Question deleted.");
            await loadQuestions();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Delete failed");
        }
    }
    async function deleteSelectedQuestions() {
        if (!selectedQuestionIds.length) return;
        const ids = [
            ...selectedQuestionIds
        ];
        if (!window.confirm(`Permanently delete ${ids.length} selected question(s) and their moderation history? Questions already used in examination papers will block the whole operation.`)) return;
        try {
            const r = await fetch(`${API}/api/v1/questions/bulk-delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ids
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(typeof d.detail === "string" ? d.detail : d.detail?.message || "Bulk deletion failed");
            setSelectedQuestionIds([]);
            setPaperQuestionIds((old)=>old.filter((x)=>!ids.includes(x)));
            setNotice(`${d.deleted_count} selected question(s) deleted.`);
            await loadQuestions();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Bulk deletion failed");
            await loadQuestions();
        }
    }
    function toggleCategory(category) {
        setHiddenCategories((old)=>old.includes(category) ? old.filter((x)=>x !== category) : [
                ...old,
                category
            ]);
    }
    async function buildSelectedAssessment() {
        if (!paperQuestionIds.length) {
            setError("Select at least one approved question from the question bank first.");
            return;
        }
        setBusy(true);
        setError("");
        setNotice(`Creating ${selectedAssessmentType} from your selected questions...`);
        try {
            const r = await fetch(`${API}/api/v1/assessments/build-selected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: selectedPaperTitle,
                    grade_code: grade,
                    subject_name: subject,
                    duration_minutes: selectedPaperDuration,
                    assessment_type: selectedAssessmentType,
                    question_ids: paperQuestionIds
                })
            });
            const d = await r.json();
            if (!r.ok) {
                const detail = d.detail;
                throw Error(typeof detail === "string" ? detail : detail?.message || "Could not create the selected assessment");
            }
            const created = d.examination;
            setNotice(`${selectedAssessmentType === "activity" ? "Activity" : "Examination"} created with ${created.question_count} questions and ${created.total_marks} marks. Download the student or teacher PDF below.`);
            setPaperQuestionIds([]);
            await loadExams();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not create selected assessment");
        } finally{
            setBusy(false);
        }
    }
    async function buildExam() {
        setBusy(true);
        setError("");
        setNotice("Assembling paper from approved questions...");
        try {
            const r = await fetch(`${API}/api/v1/examinations/build`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: examTitle,
                    grade_code: grade,
                    subject_name: subject,
                    total_marks: examMarks,
                    duration_minutes: duration,
                    topic_names: [],
                    difficulty: "any",
                    bloom_levels: []
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Paper assembly failed");
            setNotice(`Draft examination assembled with ${d.examination.question_count} approved questions.`);
            await loadExams();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Could not build examination");
        } finally{
            setBusy(false);
        }
    }
    const approvedCount = questions.filter((q)=>q.approval_status === "approved").length;
    const filteredQuestions = questions.filter((q)=>(questionStatusFilter === "All" || q.approval_status === questionStatusFilter) && (questionCategoryFilter === "All" || (q.moderation_category || "Curriculum") === questionCategoryFilter));
    const visibleQuestions = filteredQuestions.filter((q)=>!hiddenCategories.includes(q.moderation_category || "Curriculum"));
    if (!hydrated) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app-shell",
        "aria-busy": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading SASA..."
        }, void 0, false, {
            fileName: "[project]/src/app/workspace/page.tsx",
            lineNumber: 127,
            columnNumber: 68
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/workspace/page.tsx",
        lineNumber: 127,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Curriculum Intelligence & Assessment Engine"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 130,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Generate teacher-reviewed assessment items and assemble complete examination papers from your approved question bank."
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 131,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Primary P1–P7 · Secondary S1–S6 · Multi-subject foundation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 132,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 130,
                    columnNumber: 4
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "alert error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 134,
                    columnNumber: 12
                }, this),
                notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "alert",
                    children: notice
                }, void 0, false, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 134,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "✦ AI Question Generator"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "Questions are saved as drafts and require teacher moderation."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Class"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: grade,
                                    onChange: (e)=>{
                                        setGrade(e.target.value);
                                        setPaperQuestionIds([]);
                                    },
                                    children: grades.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: g.code,
                                            children: [
                                                g.name,
                                                " — ",
                                                g.level
                                            ]
                                        }, g.code, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 128
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Subject catalogue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: subject,
                                    onChange: (e)=>{
                                        setSubject(e.target.value);
                                        setPaperQuestionIds([]);
                                    },
                                    children: subjects.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s.name,
                                            children: [
                                                s.name,
                                                s.catalogue_status === "unverified" ? " · verify availability" : ""
                                            ]
                                        }, s.name, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 146
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: grade === "P1" || grade === "P2" || grade === "P3" ? "Verified thematic learning unit" : "Verified curriculum topic"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: topic,
                                    onChange: (e)=>{
                                        setTopic(e.target.value);
                                        setOutcome("");
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select curriculum entry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 203
                                        }, this),
                                        topics.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: t.id,
                                                children: [
                                                    t.name,
                                                    t.strand_name ? ` · ${t.strand_name}` : ""
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 267
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 125
                                }, this),
                                selectedTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        selectedTopic.entry_type.toUpperCase(),
                                        " · Verified source: ",
                                        selectedTopic.source_title,
                                        selectedTopic.source_page ? ` · ${selectedTopic.source_page}` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Verified learning outcome"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: outcome,
                                    onChange: (e)=>setOutcome(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "No specific outcome selected"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 111
                                        }, this),
                                        (selectedTopic?.learning_outcomes || []).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: o.id,
                                                children: o.outcome_text
                                            }, o.id, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 212
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "Only verified outcomes attached to the selected curriculum entry or its verified subtopics are available. Selecting an outcome is optional."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Number of questions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "20",
                                                    value: count,
                                                    onChange: (e)=>setCount(Math.max(1, Math.min(20, Number(e.target.value))))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Difficulty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: difficulty,
                                                    onChange: (e)=>setDifficulty(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "easy",
                                                            children: "Easy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 108
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "moderate",
                                                            children: "Moderate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 142
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "challenging",
                                                            children: "Challenging"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 184
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "mixed",
                                                            children: "Mixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 232
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Question format"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: kind,
                                                    onChange: (e)=>setKind(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "mixed",
                                                            children: "Mixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 101
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "multiple_choice",
                                                            children: "Multiple choice"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "short_answer",
                                                            children: "Short answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 193
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "structured",
                                                            children: "Structured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 243
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "essay",
                                                            children: "Essay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 289
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "practical",
                                                            children: "Practical"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 325
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "scenario",
                                                            children: "Scenario-based"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 369
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Bloom cognitive level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: bloom,
                                                    onChange: (e)=>setBloom(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "mixed",
                                                            children: "Mixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 109
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "remember",
                                                            children: "Remember"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 145
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "understand",
                                                            children: "Understand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 187
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "apply",
                                                            children: "Apply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 233
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "analyse",
                                                            children: "Analyse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 269
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "evaluate",
                                                            children: "Evaluate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 309
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "create",
                                                            children: "Create"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 351
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 6
                                }, this),
                                topics.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert warning",
                                    children: [
                                        "No verified ",
                                        subject,
                                        " curriculum entries are currently available for ",
                                        grade,
                                        ". Register the correct NCDC source document, import its curriculum CSV, then verify the topics and learning outcomes in the Curriculum Manager."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "primary",
                                    disabled: busy || !selectedTopic,
                                    onClick: generate,
                                    children: busy ? "Working..." : "Generate draft questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 136,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Curriculum directory"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "statrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: grades.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 82
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Classes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 104
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: subjects.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 152
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Subject entries"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 176
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 130
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 35
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "P1–S6 class directory and broad subject catalogue are seeded. Subject availability by class, official strands, topics and learning outcomes still require validation against current NCDC documents."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 6
                                }, this),
                                selectedTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                grade,
                                                " · ",
                                                subject,
                                                " · ",
                                                selectedTopic.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "muted",
                                            children: selectedTopic.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 76
                                        }, this),
                                        selectedTopic.source_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedTopic.source_url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Open curriculum source ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: "The selector shows verified records currently imported into SASA. It does not claim that the full NCDC syllabus has been imported."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Question bank"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        questions.length,
                                        " saved · ",
                                        approvedCount,
                                        " approved · ",
                                        questions.length - approvedCount,
                                        " awaiting review or rejected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "secondary",
                                    onClick: loadQuestions,
                                    children: "Refresh question bank"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 155,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 135,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Activity & Examination Builder"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 164,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Select the exact approved questions you want to use in an activity or examination. The selection is independent of the delete-selection controls in the question bank. SASA calculates the total marks from your selection and prepares both a student copy and a teacher copy with expected working and marking guidance. Questions must belong to the class and subject selected above."
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 165,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question",
                            style: {
                                background: "#f6fafb"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Create from selected questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Assessment type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedAssessmentType,
                                                    onChange: (e)=>setSelectedAssessmentType(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "activity",
                                                            children: "Class activity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 165
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "examination",
                                                            children: "Examination paper"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 213
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Assessment title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: selectedPaperTitle,
                                                    onChange: (e)=>setSelectedPaperTitle(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Duration (minutes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "5",
                                                    max: "600",
                                                    value: selectedPaperDuration,
                                                    onChange: (e)=>setSelectedPaperDuration(Math.max(5, Math.min(600, Number(e.target.value))))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Class and subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: `${grade} · ${subject}`,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: paperQuestionIds.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 27
                                        }, this),
                                        " question(s) selected · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: questions.filter((q)=>paperQuestionIds.includes(q.id)).reduce((sum, q)=>sum + Number(q.marks || 0), 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 83
                                        }, this),
                                        " total marks. Select approved questions below in the question bank. Questions from a different class or subject cannot be combined."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "primary",
                                    disabled: busy || !paperQuestionIds.length || !selectedPaperTitle.trim(),
                                    onClick: buildSelectedAssessment,
                                    children: [
                                        "Create ",
                                        selectedAssessmentType === "activity" ? "Activity" : "Examination",
                                        " from selected questions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 166,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Automatic examination builder"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 177,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Alternatively, build a draft examination automatically from the approved question bank using an exact marks total."
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 178,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid two",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Paper title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: examTitle,
                                            onChange: (e)=>setExamTitle(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Total marks"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            max: "500",
                                            value: examMarks,
                                            onChange: (e)=>setExamMarks(Math.max(1, Number(e.target.value)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Duration (minutes)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "10",
                                            max: "600",
                                            value: duration,
                                            onChange: (e)=>setDuration(Math.max(10, Number(e.target.value)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Selected class and subject"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: `${grade} · ${subject}`,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 179,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "primary",
                            disabled: busy || approvedCount === 0,
                            onClick: buildExam,
                            children: "Build draft examination"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 185,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Saved examination papers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 186,
                            columnNumber: 5
                        }, this),
                        exams.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "No examination papers built yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 186,
                            columnNumber: 57
                        }, this),
                        exams.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "question",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: e.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 60
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: [
                                            (e.paper_type || "examination") === "activity" ? "Activity" : "Examination",
                                            " · ",
                                            e.grade_code,
                                            " · ",
                                            e.subject_name,
                                            " · ",
                                            e.question_count,
                                            " questions · ",
                                            e.total_marks,
                                            " marks · ",
                                            e.duration_minutes,
                                            " minutes · ",
                                            e.status
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 76
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `${API}/api/v1/examinations/${e.id}/paper.pdf?teacher_copy=false`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Download student PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `${API}/api/v1/examinations/${e.id}/paper.pdf?teacher_copy=true`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Download teacher working & marking guide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 165
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "muted",
                                        children: "Print the downloaded PDF using your PDF reader or browser."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 187,
                                columnNumber: 19
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 164,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "actions",
                            style: {
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Teacher moderation & question bank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "muted",
                                            children: [
                                                questions.length,
                                                " total · ",
                                                questions.filter((q)=>q.approval_status === "pending").length,
                                                " pending review · ",
                                                approvedCount,
                                                " approved · ",
                                                questions.filter((q)=>q.approval_status === "rejected").length,
                                                " rejected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "secondary",
                                    onClick: ()=>setModerationHidden((v)=>!v),
                                    children: moderationHidden ? "Show question bank" : "Hide question bank"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 193,
                            columnNumber: 5
                        }, this),
                        !moderationHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Review status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: questionStatusFilter,
                                                    onChange: (e)=>setQuestionStatusFilter(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "All",
                                                            children: "All statuses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 131
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "pending",
                                                            children: "Pending review"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 172
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "approved",
                                                            children: "Approved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 219
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "rejected",
                                                            children: "Rejected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 261
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Question category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: questionCategoryFilter,
                                                    onChange: (e)=>setQuestionCategoryFilter(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "All",
                                                            children: "All categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 139
                                                        }, this),
                                                        questionCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 209
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    style: {
                                        marginTop: 12,
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: loadQuestions,
                                            children: "Refresh question bank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: ()=>setSelectedQuestionIds(visibleQuestions.map((q)=>q.id)),
                                            disabled: !visibleQuestions.length,
                                            children: [
                                                "Select visible (",
                                                visibleQuestions.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: ()=>setSelectedQuestionIds([]),
                                            disabled: !selectedQuestionIds.length,
                                            children: "Clear selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "danger",
                                            onClick: deleteSelectedQuestions,
                                            disabled: !selectedQuestionIds.length,
                                            children: [
                                                "Delete selected (",
                                                selectedQuestionIds.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Category visibility"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "actions",
                                            style: {
                                                marginTop: 8,
                                                flexWrap: "wrap"
                                            },
                                            children: questionCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "secondary",
                                                    onClick: ()=>toggleCategory(c),
                                                    children: hiddenCategories.includes(c) ? `Show ${c}` : `Hide ${c}`
                                                }, c, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 35
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 6
                                }, this),
                                questions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "No questions generated yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 29
                                }, this),
                                filteredQuestions.length === 0 && questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "No questions match the selected review status and category."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 57
                                }, this),
                                questionCategories.filter((c)=>questionCategoryFilter === "All" || questionCategoryFilter === c).map((category)=>{
                                    const categoryQuestions = filteredQuestions.filter((q)=>(q.moderation_category || "Curriculum") === category);
                                    const isHidden = hiddenCategories.includes(category);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "actions",
                                                style: {
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: [
                                                            category,
                                                            " (",
                                                            categoryQuestions.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "secondary",
                                                        onClick: ()=>toggleCategory(category),
                                                        children: isHidden ? "Show category" : "Hide category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 8
                                            }, this),
                                            !isHidden && categoryQuestions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "question",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "actions",
                                                            style: {
                                                                justifyContent: "space-between",
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 8
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedQuestionIds.includes(q.id),
                                                                            onChange: (e)=>setSelectedQuestionIds((old)=>e.target.checked ? [
                                                                                        ...old.filter((x)=>x !== q.id),
                                                                                        q.id
                                                                                    ] : old.filter((x)=>x !== q.id))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 68
                                                                        }, this),
                                                                        " Select for deletion"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 10
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 8
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            disabled: !canAddQuestionToPaper(q),
                                                                            checked: paperQuestionIds.includes(q.id),
                                                                            onChange: (e)=>setPaperQuestionIds((old)=>e.target.checked ? [
                                                                                        ...old.filter((x)=>x !== q.id),
                                                                                        q.id
                                                                                    ] : old.filter((x)=>x !== q.id))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 68
                                                                        }, this),
                                                                        " Add to activity / paper ",
                                                                        !canAddQuestionToPaper(q) ? q.approval_status !== "approved" ? "(approve first)" : "(select matching class / subject)" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 10
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: [
                                                                        q.grade_code,
                                                                        " · ",
                                                                        q.subject_name,
                                                                        " · ",
                                                                        q.topic_name || "No topic",
                                                                        " · ",
                                                                        q.difficulty,
                                                                        " · ",
                                                                        q.bloom_level,
                                                                        " · ",
                                                                        q.marks,
                                                                        " marks · ",
                                                                        q.approval_status
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 10
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: [
                                                                    i + 1,
                                                                    ". ",
                                                                    q.question_text
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 9
                                                        }, this),
                                                        q.options?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            type: "A",
                                                            children: q.options.map((o, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: o
                                                                }, j, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 66
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    children: "Suggested answer, explanation and marking guide"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 18
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Answer:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 87
                                                                        }, this),
                                                                        " ",
                                                                        q.expected_answer
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 84
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Explanation:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 128
                                                                        }, this),
                                                                        " ",
                                                                        q.explanation
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 125
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Marking guide:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 170
                                                                        }, this),
                                                                        " ",
                                                                        q.marking_guide
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 167
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: q.curriculum_reference
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 213
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "actions",
                                                            style: {
                                                                flexWrap: "wrap"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    children: [
                                                                        "Category ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: q.moderation_category || "Curriculum",
                                                                            onChange: (e)=>categorizeQuestion(q.id, e.target.value),
                                                                            children: questionCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: c,
                                                                                    children: c
                                                                                }, c, false, {
                                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                                    lineNumber: 234,
                                                                                    columnNumber: 159
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 26
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 10
                                                                }, this),
                                                                q.moderation_category !== "Demo/Test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "secondary",
                                                                    onClick: ()=>categorizeQuestion(q.id, "Demo/Test"),
                                                                    children: "Mark as Demo/Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 48
                                                                }, this),
                                                                q.approval_status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "secondary",
                                                                            onClick: ()=>review(q.id, "approved"),
                                                                            children: "Approve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 44
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "danger",
                                                                            onClick: ()=>review(q.id, "rejected"),
                                                                            children: "Reject"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 128
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "danger",
                                                                    onClick: ()=>deleteQuestion(q.id),
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 10
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `${API}/api/v1/questions/${q.id}/paper.pdf?teacher_copy=true`,
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Teacher PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 10
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `${API}/api/v1/questions/${q.id}/paper.pdf?teacher_copy=false`,
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Question only PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 10
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, q.id, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 49
                                                }, this)),
                                            !isHidden && categoryQuestions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: "No questions in this category for the selected status."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 14
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 197,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 192,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "SASA· AI output is draft material; teacher verification is required."
                }, void 0, false, {
                    fileName: "[project]/src/app/workspace/page.tsx",
                    lineNumber: 247,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/workspace/page.tsx",
            lineNumber: 129,
            columnNumber: 3
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/workspace/page.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
_s(Home, "QEpX3qgin9huci0gMaFJ+a8bYQo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_workspace_page_tsx_03txhzanq5nr1._.js.map