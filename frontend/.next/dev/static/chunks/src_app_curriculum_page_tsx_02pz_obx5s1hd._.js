(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/curriculum/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurriculumPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const API = ("TURBOPACK compile-time value", "http://127.0.0.1:8000") || "http://127.0.0.1:8000";
function CurriculumPage() {
    _s();
    const [docs, setDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sourceFile, setSourceFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [csvFile, setCsvFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importErrors, setImportErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [entriesHidden, setEntriesHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [selectedEntryIds, setSelectedEntryIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [entrySearch, setEntrySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [gradeFilter, setGradeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [subjectFilter, setSubjectFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [documentFilter, setDocumentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recent"), [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function load() {
        try {
            const [d, e, s] = await Promise.all([
                fetch(`${API}/api/v1/curriculum/documents`),
                fetch(`${API}/api/v1/curriculum/entries`),
                fetch(`${API}/api/v1/curriculum/summary`)
            ]);
            if (!d.ok || !e.ok || !s.ok) throw Error("Could not load curriculum workspace");
            const docsData = await d.json();
            setDocs(docsData);
            setEntries(await e.json());
            setSummary(await s.json());
            if (!selected && docsData.length) setSelected(docsData[0].id);
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Backend unavailable");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurriculumPage.useEffect": ()=>{
            load();
        }
    }["CurriculumPage.useEffect"], []);
    const selectedDoc = docs.find((d)=>d.id === selected);
    const isNcdc = (d)=>/ncdc|national curriculum development centre/i.test(d.issuing_authority || "");
    const recentVerifiedNcdcDocs = docs.filter((d)=>d.verification_status === "verified" && isNcdc(d)).sort((a, b)=>Date.parse(b.created_at || "") - Date.parse(a.created_at || "")).slice(0, 2);
    const recentDocIds = new Set(recentVerifiedNcdcDocs.map((d)=>d.id));
    const grades = Array.from(new Set(entries.map((e)=>e.grade_code))).sort((a, b)=>a.localeCompare(b, undefined, {
            numeric: true
        }));
    const subjects = Array.from(new Set(entries.filter((e)=>!gradeFilter || e.grade_code === gradeFilter).map((e)=>e.subject_name))).sort();
    const filteredEntries = entries.filter((e)=>{
        if (documentFilter === "recent" && !recentDocIds.has(e.document_id) && !(entrySearch.trim() || gradeFilter || subjectFilter || statusFilter)) return false;
        if (documentFilter !== "recent" && documentFilter !== "all" && e.document_id !== documentFilter) return false;
        if (gradeFilter && e.grade_code !== gradeFilter) return false;
        if (subjectFilter && e.subject_name !== subjectFilter) return false;
        if (statusFilter && e.verification_status !== statusFilter) return false;
        const q = entrySearch.trim().toLocaleLowerCase();
        if (q && ![
            e.title,
            e.description,
            e.parent_title || "",
            e.page_reference,
            e.document_title,
            e.grade_code,
            e.subject_name,
            e.entry_type
        ].join(" ").toLocaleLowerCase().includes(q)) return false;
        return true;
    });
    const visibleSelectedIds = filteredEntries.filter((e)=>selectedEntryIds.includes(e.id)).map((e)=>e.id);
    const formatDate = (value)=>value ? new Date(value).toLocaleDateString() : "Date unavailable";
    async function uploadDocument() {
        if (!sourceFile) {
            setError("Choose a curriculum source file first.");
            return;
        }
        setBusy(true);
        setError("");
        setNotice("");
        try {
            const f = new FormData();
            f.append("file", sourceFile);
            f.append("title", title);
            f.append("curriculum_version", version);
            f.append("publication_year", year);
            f.append("education_level", level);
            f.append("source_url", url);
            f.append("document_type", "syllabus");
            const r = await fetch(`${API}/api/v1/curriculum/documents/upload`, {
                method: "POST",
                body: f
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Upload failed");
            setNotice(`Source uploaded. Text extraction: ${d.document.extraction_status}. Review the original NCDC document before marking it verified.`);
            setSourceFile(null);
            await load();
            setSelected(d.document.id);
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Upload failed");
        } finally{
            setBusy(false);
        }
    }
    async function reviewDocument(decision) {
        if (!selected) return;
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/documents/${selected}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    decision,
                    reviewer_name: "Curriculum Reviewer",
                    notes: "Reviewed against the original source document."
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Review failed");
            setNotice(`Source document status: ${d.verification_status}.`);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Review failed");
        } finally{
            setBusy(false);
        }
    }
    async function retryExtraction() {
        if (!selected) return;
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/documents/${selected}/re-extract`, {
                method: "POST"
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Text extraction retry failed");
            setNotice(`Extraction status: ${d.document.extraction_status}. ${d.document.extracted_characters.toLocaleString()} characters extracted.`);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Text extraction retry failed");
        } finally{
            setBusy(false);
        }
    }
    async function deleteDocument(doc) {
        if (doc.linked_entries > 0 || doc.linked_topics > 0 || doc.linked_questions > 0) {
            setError(`Cannot delete “${doc.title}”: it is still referenced by ${doc.linked_entries} curriculum entr${doc.linked_entries === 1 ? "y" : "ies"}, ${doc.linked_topics} topic record${doc.linked_topics === 1 ? "" : "s"}, and ${doc.linked_questions} generated question record${doc.linked_questions === 1 ? "" : "s"}. Remove or reassign those references first.`);
            return;
        }
        if (!window.confirm(`Permanently delete the registered source document “${doc.title}” and its stored file? This action cannot be undone. No curriculum entries are linked to this document.`)) return;
        setBusy(true);
        setError("");
        setNotice("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/documents/${doc.id}`, {
                method: "DELETE"
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Document deletion failed");
            if (selected === doc.id) setSelected("");
            setNotice(`Deleted source document “${doc.title}”.`);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Document deletion failed");
        } finally{
            setBusy(false);
        }
    }
    async function deleteSelectedEntries() {
        const ids = visibleSelectedIds;
        if (!ids.length) return;
        if (!window.confirm(`Permanently delete ${ids.length} selected curriculum entries currently shown by these filters? Child entries and associated learning outcomes will also be deleted.`)) return;
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/entries/delete-bulk`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ids
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Delete failed");
            setNotice(`Deleted ${d.deleted_entries} curriculum entries. Related topic records used by questions were retained but returned to unverified status.`);
            setSelectedEntryIds([]);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Delete failed");
        } finally{
            setBusy(false);
        }
    }
    async function importCsv() {
        if (!selected || !csvFile) {
            setError("Select a verified source document and a CSV file.");
            return;
        }
        setBusy(true);
        setError("");
        setImportErrors([]);
        try {
            const f = new FormData();
            f.append("file", csvFile);
            const r = await fetch(`${API}/api/v1/curriculum/documents/${selected}/import-csv`, {
                method: "POST",
                body: f
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Import failed");
            setImportErrors(Array.isArray(d.errors) ? d.errors : []);
            setNotice(`Imported ${d.nodes_created} curriculum entries and ${d.learning_outcomes_created} learning outcomes. ${d.rows_with_errors} row errors. ${d.nodes_created === 0 && d.rows_with_errors > 0 ? "No entries were imported; inspect the row errors below." : ""}`);
            setCsvFile(null);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Import failed");
        } finally{
            setBusy(false);
        }
    }
    async function reviewEntry(id, decision) {
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/entries/${id}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    decision,
                    reviewer_name: "Curriculum Reviewer",
                    notes: "Checked against source document and page reference."
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Review failed");
            setNotice(`Entry '${d.title}' marked ${d.verification_status}. Verified topics become available to the question generator.`);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Review failed");
        } finally{
            setBusy(false);
        }
    }
    async function reviewOutcome(id, decision) {
        setBusy(true);
        setError("");
        try {
            const r = await fetch(`${API}/api/v1/curriculum/outcomes/${id}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    decision,
                    reviewer_name: "Curriculum Reviewer",
                    notes: "Checked against source wording and page reference."
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(d.detail || "Review failed");
            setNotice(`Learning outcome marked ${d.verification_status}.`);
            await load();
        } catch (ex) {
            setError(ex instanceof Error ? ex.message : "Review failed");
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Ugandan Curriculum Content Manager"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 59,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Register official curriculum sources, extract readable text, import structured curriculum entries and review each item before it becomes available to question generation."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 59,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Source → Import → Verify → Use"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 59,
                            columnNumber: 248
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 59,
                    columnNumber: 2
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "alert error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 60,
                    columnNumber: 10
                }, this),
                notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "alert",
                    children: notice
                }, void 0, false, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 60,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Curriculum coverage register"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 61,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "statrow",
                            children: [
                                [
                                    summary?.documents ?? 0,
                                    "Documents"
                                ],
                                [
                                    summary?.documents_verified ?? 0,
                                    "Verified sources"
                                ],
                                [
                                    summary?.entries ?? 0,
                                    "Entries"
                                ],
                                [
                                    summary?.entries_verified ?? 0,
                                    "Verified entries"
                                ],
                                [
                                    summary?.learning_outcomes ?? 0,
                                    "Outcomes"
                                ],
                                [
                                    summary?.learning_outcomes_verified ?? 0,
                                    "Verified outcomes"
                                ]
                            ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 419
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 429
                                        }, this)
                                    ]
                                }, String(l), true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 381
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 61,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "These are database record counts, not a percentage or claim of complete NCDC coverage."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 61,
                            columnNumber: 459
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 61,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "1. Register an NCDC source document"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 62,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Upload a source you are authorised to use. PDF, DOCX, TXT and Markdown are supported; maximum 25 MB. Scanned PDFs may need OCR before text extraction works."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 62,
                            columnNumber: 73
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Source file"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 63,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".pdf,.docx,.txt,.md",
                            onChange: (e)=>setSourceFile(e.target.files?.[0] || null)
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 63,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid two",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Document title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: title,
                                            onChange: (e)=>setTitle(e.target.value),
                                            placeholder: "e.g. Lower Secondary Mathematics Syllabus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 62
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Curriculum version / edition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 190
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: version,
                                            onChange: (e)=>setVersion(e.target.value),
                                            placeholder: "Edition or version as printed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 233
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 185
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Publication year"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 353
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: year,
                                            onChange: (e)=>setYear(e.target.value),
                                            placeholder: "e.g. 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 384
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 348
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Education level"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 478
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: level,
                                            onChange: (e)=>setLevel(e.target.value),
                                            placeholder: "e.g. Lower Secondary S1–S4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 508
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 473
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 64,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Official source URL (optional)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 65,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: url,
                            onChange: (e)=>setUrl(e.target.value),
                            placeholder: "https://..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 65,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "primary",
                            disabled: busy || !sourceFile,
                            onClick: uploadDocument,
                            children: busy ? "Working..." : "Upload and extract text"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 65,
                            columnNumber: 130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 62,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Registered curriculum documents"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 67,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Remove unnecessary source files here. For safety, SASA allows deletion only when a document has no curriculum entries, topic records or generated questions referencing it. Existing curriculum entries, learning outcomes, topics and questions are never automatically deleted by this action."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 68,
                            columnNumber: 3
                        }, this),
                        docs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "No source documents have been registered yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 69,
                            columnNumber: 20
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "document-management-list",
                            children: docs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "document-management-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "document-management-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: d.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 47
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        d.original_filename,
                                                        " · ",
                                                        d.verification_status,
                                                        " · ",
                                                        d.linked_entries,
                                                        " linked entr",
                                                        d.linked_entries === 1 ? "y" : "ies",
                                                        " · ",
                                                        d.linked_topics,
                                                        " topic record",
                                                        d.linked_topics === 1 ? "" : "s",
                                                        " · ",
                                                        d.linked_questions,
                                                        " question record",
                                                        d.linked_questions === 1 ? "" : "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 63
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "danger document-delete-button",
                                            disabled: busy || d.linked_entries > 0 || d.linked_topics > 0 || d.linked_questions > 0,
                                            title: d.linked_entries > 0 || d.linked_topics > 0 || d.linked_questions > 0 ? "Remove linked curriculum references first" : "Delete this unused source document",
                                            onClick: ()=>deleteDocument(d),
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 69,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 66,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "2. Verify the source and import curriculum rows"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 76,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Registered source document"
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 76,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selected,
                            onChange: (e)=>setSelected(e.target.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select source document"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 193
                                }, this),
                                docs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: d.id,
                                        children: [
                                            d.title,
                                            " · ",
                                            d.verification_status
                                        ]
                                    }, d.id, true, {
                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 254
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 76,
                            columnNumber: 126
                        }, this),
                        selectedDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: selectedDoc.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        selectedDoc.original_filename,
                                        " · ",
                                        selectedDoc.curriculum_version || "Version not recorded",
                                        " · ",
                                        selectedDoc.extraction_status,
                                        " · ",
                                        selectedDoc.extracted_characters.toLocaleString(),
                                        " extracted characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 51
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        "SHA-256: ",
                                        selectedDoc.sha256 || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 275
                                }, this),
                                selectedDoc.extraction_status !== "extracted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            disabled: busy,
                                            onClick: retryExtraction,
                                            children: "Retry text extraction"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 405
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "muted",
                                            children: "This retries the already registered file; it does not upload a duplicate."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 507
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 380
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            disabled: busy,
                                            onClick: ()=>reviewDocument("verified"),
                                            children: "Mark source verified"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 643
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "danger",
                                            disabled: busy,
                                            onClick: ()=>reviewDocument("rejected"),
                                            children: "Reject source"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 759
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            disabled: busy,
                                            onClick: ()=>reviewDocument("unverified"),
                                            children: "Return to unverified"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 865
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 618
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "Only mark verified after checking the issuing authority, edition, applicable classes and source document itself. This action unlocks CSV import; it does not mean SASA independently certified the document."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 989
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `${API}/api/v1/curriculum/csv-template`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Download CSV import template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `${API}/api/v1/curriculum/documents/${selected}/text`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "View extracted text"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 142
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 2
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Upload completed curriculum CSV"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 2
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".csv,text/csv",
                                    onChange: (e)=>setCsvFile(e.target.files?.[0] || null)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 48
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "primary",
                                    disabled: busy || selectedDoc.verification_status !== "verified" || !csvFile,
                                    onClick: importCsv,
                                    children: "Import curriculum CSV"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 143
                                }, this),
                                selectedDoc.verification_status !== "verified" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "Verify the source document before importing rows."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 340
                                }, this),
                                importErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert warning",
                                    style: {
                                        marginTop: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                "CSV rows that were not imported (",
                                                importErrors.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 493
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "muted",
                                            children: "Check the class code, subject catalogue name and parent_title. For English, both “English” and “English Language” are now accepted and saved under the canonical English Language catalogue entry."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 555
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: importErrors.slice(0, 30).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Row ",
                                                        item.row,
                                                        ": ",
                                                        item.error
                                                    ]
                                                }, `${item.row}-${i}`, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 818
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 774
                                        }, this),
                                        importErrors.length > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Showing first 30 errors."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 912
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 439
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 77,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 76,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "actions",
                            style: {
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "3. Review imported curriculum entries"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 131
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: ()=>setEntriesHidden((v)=>!v),
                                            children: entriesHidden ? "Show entries" : "Hide entries"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 202
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: ()=>setSelectedEntryIds(filteredEntries.map((e)=>e.id)),
                                            disabled: filteredEntries.length === 0,
                                            children: "Select All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 324
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary",
                                            onClick: ()=>setSelectedEntryIds([]),
                                            children: "Clear Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 475
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "danger",
                                            disabled: busy || visibleSelectedIds.length === 0,
                                            onClick: deleteSelectedEntries,
                                            children: [
                                                "Delete Selected (",
                                                visibleSelectedIds.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 567
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 81,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Newest imported entries appear first. By default, this view shows entries linked to the two most recently registered and verified NCDC documents. Searching by text, class, subject or review status automatically searches the full imported collection; you can also choose a specific document or all documents. Selection and bulk deletion apply to the entries currently displayed."
                        }, void 0, false, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 82,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#f5f8fb",
                                border: "1px solid #dbe4ee",
                                borderRadius: 10,
                                padding: 14,
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Most recently registered and verified NCDC documents"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 108
                                }, this),
                                recentVerifiedNcdcDocs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "No verified NCDC documents are registered yet. Verify an NCDC source document to have it appear here."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    style: {
                                        marginTop: 10
                                    },
                                    children: recentVerifiedNcdcDocs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "white",
                                                border: "1px solid #dbe4ee",
                                                borderRadius: 8,
                                                padding: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: d.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 342
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "muted",
                                                    children: [
                                                        d.education_level || "Education level not specified",
                                                        " · ",
                                                        d.publication_year || d.curriculum_version || "Edition not specified"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 358
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        "Verified · Registered ",
                                                        formatDate(d.created_at)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 505
                                                }, this)
                                            ]
                                        }, d.id, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 244
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 164
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 83,
                            columnNumber: 2
                        }, this),
                        !entriesHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid two",
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "entry-search",
                                                    children: "Search imported entries"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 78
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "entry-search",
                                                    value: entrySearch,
                                                    onChange: (e)=>setEntrySearch(e.target.value),
                                                    placeholder: "Search title, topic, page, source, class or subject..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 139
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Source document"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 310
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: documentFilter,
                                                    onChange: (e)=>setDocumentFilter(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "recent",
                                                            children: "Latest 2 verified NCDC documents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 419
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All registered documents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 483
                                                        }, this),
                                                        docs.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: d.id,
                                                                children: [
                                                                    d.title,
                                                                    " · ",
                                                                    d.verification_status
                                                                ]
                                                            }, d.id, true, {
                                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 549
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 340
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 305
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Class"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 647
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: gradeFilter,
                                                    onChange: (e)=>{
                                                        setGradeFilter(e.target.value);
                                                        setSubjectFilter("");
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "All classes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 763
                                                        }, this),
                                                        grades.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: g,
                                                                children: g
                                                            }, g, false, {
                                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 815
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 667
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 642
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 875
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: subjectFilter,
                                                    onChange: (e)=>setSubjectFilter(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "All subjects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 974
                                                        }, this),
                                                        subjects.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: x,
                                                                children: x
                                                            }, x, false, {
                                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 1029
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 897
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 870
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Review status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 1089
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: statusFilter,
                                                    onChange: (e)=>setStatusFilter(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "All statuses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 1192
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "draft",
                                                            children: "Draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 1230
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "verified",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 1266
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "rejected",
                                                            children: "Rejected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 1308
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 1117
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1084
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "end",
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "secondary",
                                                    onClick: ()=>{
                                                        setEntrySearch("");
                                                        setGradeFilter("");
                                                        setSubjectFilter("");
                                                        setDocumentFilter("recent");
                                                        setStatusFilter("");
                                                        setSelectedEntryIds([]);
                                                    },
                                                    children: "Reset filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 1418
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "muted",
                                                    children: [
                                                        "Showing ",
                                                        filteredEntries.length,
                                                        " of ",
                                                        entries.length,
                                                        " entries"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 1617
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1365
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 21
                                }, this),
                                filteredEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: "No entries match the current filters. Choose “All registered documents”, change the class or subject, or adjust your search."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 30
                                }, this) : filteredEntries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "question",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    gap: 8,
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedEntryIds.includes(e.id),
                                                        onChange: (ev)=>setSelectedEntryIds((old)=>ev.target.checked ? [
                                                                    ...old,
                                                                    e.id
                                                                ] : old.filter((id)=>id !== e.id))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 302
                                                    }, this),
                                                    "Select entry"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 244
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    e.grade_code,
                                                    " · ",
                                                    e.subject_name,
                                                    " · ",
                                                    e.entry_type,
                                                    " · ",
                                                    e.verification_status,
                                                    " · Page ",
                                                    e.page_reference || "not specified",
                                                    " · Imported ",
                                                    formatDate(e.created_at)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 487
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: e.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 662
                                                    }, this),
                                                    e.parent_title ? ` · under ${e.parent_title}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 659
                                            }, this),
                                            e.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: e.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 746
                                            }, this),
                                            e.source_excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                children: e.source_excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 806
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    "Source: ",
                                                    e.document_title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 850
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "actions",
                                                children: [
                                                    e.verification_status !== "verified" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "secondary",
                                                        disabled: busy,
                                                        onClick: ()=>reviewEntry(e.id, "verified"),
                                                        children: "Verify entry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 953
                                                    }, this),
                                                    e.verification_status !== "rejected" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "danger",
                                                        disabled: busy,
                                                        onClick: ()=>reviewEntry(e.id, "rejected"),
                                                        children: "Reject entry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1101
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/curriculum/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 891
                                            }, this),
                                            e.learning_outcomes.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "#f5f8fb",
                                                        padding: 12,
                                                        borderRadius: 8,
                                                        marginTop: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                "Learning outcome · ",
                                                                o.verification_status,
                                                                " · Page ",
                                                                o.page_reference || "not specified"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 116
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: o.outcome_text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 216
                                                        }, this),
                                                        o.competency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "muted",
                                                            children: [
                                                                "Competency: ",
                                                                o.competency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 254
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "actions",
                                                            children: [
                                                                o.verification_status !== "verified" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "secondary",
                                                                    disabled: busy || e.verification_status !== "verified",
                                                                    onClick: ()=>reviewOutcome(o.id, "verified"),
                                                                    children: "Verify outcome"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 368
                                                                }, this),
                                                                o.verification_status !== "rejected" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "danger",
                                                                    disabled: busy,
                                                                    onClick: ()=>reviewOutcome(o.id, "rejected"),
                                                                    children: "Reject outcome"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 556
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/curriculum/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 306
                                                        }, this)
                                                    ]
                                                }, o.id, true, {
                                                    fileName: "[project]/src/app/curriculum/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 30
                                                }, this))
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/src/app/curriculum/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 203
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/curriculum/page.tsx",
                            lineNumber: 86,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 81,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "SASA· Imported content is not official until reviewed. Confirm permissions and current NCDC editions before commercial reuse."
                }, void 0, false, {
                    fileName: "[project]/src/app/curriculum/page.tsx",
                    lineNumber: 90,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/curriculum/page.tsx",
            lineNumber: 58,
            columnNumber: 2
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/curriculum/page.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(CurriculumPage, "lECVzJECIrezkkIz9vksx/TT8is=");
_c = CurriculumPage;
var _c;
__turbopack_context__.k.register(_c, "CurriculumPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_curriculum_page_tsx_02pz_obx5s1hd._.js.map