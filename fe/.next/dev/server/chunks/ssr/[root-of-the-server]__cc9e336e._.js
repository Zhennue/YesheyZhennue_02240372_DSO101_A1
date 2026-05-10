module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "page-module__U8zQIa__badge",
  "card": "page-module__U8zQIa__card",
  "checkboxCustom": "page-module__U8zQIa__checkboxCustom",
  "checkboxLabel": "page-module__U8zQIa__checkboxLabel",
  "code": "page-module__U8zQIa__code",
  "completed": "page-module__U8zQIa__completed",
  "deleteButton": "page-module__U8zQIa__deleteButton",
  "editInput": "page-module__U8zQIa__editInput",
  "emptyState": "page-module__U8zQIa__emptyState",
  "error": "page-module__U8zQIa__error",
  "form": "page-module__U8zQIa__form",
  "header": "page-module__U8zQIa__header",
  "item": "page-module__U8zQIa__item",
  "list": "page-module__U8zQIa__list",
  "main": "page-module__U8zQIa__main",
  "metaRow": "page-module__U8zQIa__metaRow",
  "metaText": "page-module__U8zQIa__metaText",
  "page": "page-module__U8zQIa__page",
  "refreshButton": "page-module__U8zQIa__refreshButton",
  "statsRow": "page-module__U8zQIa__statsRow",
  "subtitle": "page-module__U8zQIa__subtitle",
  "taskText": "page-module__U8zQIa__taskText",
  "title": "page-module__U8zQIa__title",
});
}),
"[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.module.css [app-ssr] (css module)");
"use client";
;
;
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000") ?? "http://localhost:5000";
function Home() {
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function fetchTasks() {
        try {
            setError(null);
            const res = await fetch(`${API_URL}/tasks`);
            if (!res.ok) throw new Error("Failed to load tasks");
            const data = await res.json();
            setTasks(data);
        } catch (err) {
            setError("Could not load tasks from the server.");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTasks();
    }, []);
    async function handleAdd(e) {
        e.preventDefault();
        if (!newTitle.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newTitle.trim()
                })
            });
            if (!res.ok) throw new Error("Failed to create");
            const created = await res.json();
            setTasks((prev)=>[
                    ...prev,
                    created
                ]);
            setNewTitle("");
        } catch  {
            setError("Could not create task.");
        } finally{
            setLoading(false);
        }
    }
    async function handleToggleComplete(task) {
        try {
            const res = await fetch(`${API_URL}/tasks/${task.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    completed: !task.completed
                })
            });
            if (!res.ok) throw new Error("Failed to update");
            const updated = await res.json();
            setTasks((prev)=>prev.map((t)=>t.id === task.id ? updated : t));
        } catch  {
            setError("Could not update task.");
        }
    }
    async function handleSaveEdit(taskId) {
        if (!editingTitle.trim()) {
            setEditingId(null);
            return;
        }
        try {
            const res = await fetch(`${API_URL}/tasks/${taskId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: editingTitle.trim()
                })
            });
            if (!res.ok) throw new Error("Failed to update");
            const updated = await res.json();
            setTasks((prev)=>prev.map((t)=>t.id === taskId ? updated : t));
            setEditingId(null);
            setEditingTitle("");
        } catch  {
            setError("Could not update task.");
        }
    }
    async function handleDelete(taskId) {
        try {
            const res = await fetch(`${API_URL}/tasks/${taskId}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Failed to delete");
            setTasks((prev)=>prev.filter((t)=>t.id !== taskId));
        } catch  {
            setError("Could not delete task.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                            children: "Task Board"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Plan your day with style"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Add, complete, and edit tasks in a clean, minimal UI."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaText,
                                    children: [
                                        "Backend:",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].code,
                                            children: API_URL
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].refreshButton,
                                    onClick: fetchTasks,
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleAdd,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "What do you want to get done?",
                                    value: newTitle,
                                    onChange: (e)=>setNewTitle(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    children: loading ? "Adding..." : "Add task"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        tasks.length,
                                        " total"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        tasks.filter((t)=>t.completed).length,
                                        " completed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No tasks yet."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Add your first task to get started."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                            children: tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: task.completed,
                                                    onChange: ()=>handleToggleComplete(task)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxCustom
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        editingId === task.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editInput,
                                            value: editingTitle,
                                            onChange: (e)=>setEditingTitle(e.target.value),
                                            onBlur: ()=>handleSaveEdit(task.id),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleSaveEdit(task.id);
                                                }
                                            },
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskText} ${task.completed ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].completed : ""}`,
                                            onDoubleClick: ()=>{
                                                setEditingId(task.id);
                                                setEditingTitle(task.title);
                                            },
                                            children: task.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$YesheyZhennue_02240372_DSO101_A1$2f$fe$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                            onClick: ()=>handleDelete(task.id),
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, task.id, true, {
                                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/src/app/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/YesheyZhennue_02240372_DSO101_A1/fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cc9e336e._.js.map