import { j as jsxRuntimeExports, N as Navbar, C as Container, a as Nav, b as NavLink, r as reactExports, S as Spinner, O as Outlet, c as createBrowserRouter, R as RouterProvider, d as axios, e as Recoil_index_8, f as Recoil_index_22, g as client, h as React, i as Recoil_index_5, k as RecoilizeDebugger, T as ThemeProvider } from "./vendor-X32a2jhr.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/my-expense/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const TopHeader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { bg: "light", expand: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { fluid: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar.Brand, { href: "/", children: "My Home Expense" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "me-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/", className: "nav-link", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/summary", className: "nav-link", children: "Year End Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/manage", className: "nav-link", children: "Transactions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/settings", className: "nav-link", children: "Settings" })
    ] }) })
  ] }) });
};
const Header = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TopHeader, {});
};
const Body = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "p-4 h-100", fluid: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { animation: "border" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
};
const Footer = () => /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "page-footer font-small blue fixed-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-copyright text-center py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
  "Created by ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/nishant-labs", children: "Nishant Labs" })
] }) }) });
function Layout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Body, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Home = reactExports.lazy(() => __vitePreload(() => import("./index-WSu1sJlK.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const Summary = reactExports.lazy(() => __vitePreload(() => import("./index-ZZUpGCAw.js"), true ? __vite__mapDeps([5,1]) : void 0));
const Transactions = reactExports.lazy(() => __vitePreload(() => import("./index-bY_nws7E.js"), true ? __vite__mapDeps([6,1,2,3,7,8]) : void 0));
const Settings = reactExports.lazy(() => __vitePreload(() => import("./index-gyW3sCPX.js"), true ? __vite__mapDeps([9,1,4,3,7,8,10]) : void 0));
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}),
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        path: "/",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {})
      },
      {
        path: "/summary",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, {})
      },
      {
        path: "/manage",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Transactions, {})
      },
      {
        path: "/settings",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, {})
      }
    ]
  }
]);
const AppRouter = () => /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router });
const basePath = () => window.EXPENSE_API_HOST ?? "http://localhost:7800";
const commonConfig = {
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
};
async function handlePostCall(path, payload) {
  var _a;
  try {
    const response2 = await axios.post(`${basePath()}${path}`, payload, commonConfig);
    return (_a = response2.data) == null ? void 0 : _a.data;
  } catch (error) {
    return { error };
  }
}
async function handleGetCall(path) {
  var _a;
  try {
    const response2 = await axios.get(`${basePath()}${path}`, commonConfig);
    return (_a = response2.data) == null ? void 0 : _a.data;
  } catch (error) {
    return { error };
  }
}
async function handleDeleteCall(path) {
  var _a;
  try {
    const response2 = await axios.delete(`${basePath()}${path}`, commonConfig);
    return (_a = response2.data) == null ? void 0 : _a.data;
  } catch (error) {
    return { error };
  }
}
async function handlePutCall(path, payload) {
  var _a;
  try {
    const response2 = await axios.put(`${basePath()}${path}`, payload, commonConfig);
    return (_a = response2.data) == null ? void 0 : _a.data;
  } catch (error) {
    return { error };
  }
}
const fetchAllSources = async () => {
  return await handleGetCall("/api/settings/sources");
};
const insertNewSource = async (payload) => {
  return await handlePostCall("/api/settings/sources", payload);
};
const deleteSourceById = async (id) => {
  return await handleDeleteCall(`/api/settings/sources/${id}`);
};
const updateSourceById = async (id, payload) => {
  return await handlePutCall(`/api/settings/sources/${id}`, payload);
};
const transactionSourceState = Recoil_index_8({
  key: "transactionSource",
  default: {
    sourceList: [],
    fetchAgain: false
  }
});
const SourceSettingsLoader = reactExports.memo(() => {
  const [{ fetchAgain }, setSourceState] = Recoil_index_22(transactionSourceState);
  reactExports.useEffect(() => {
    fetchAllSources().then((res) => {
      if (!res.error) {
        setSourceState({
          fetchAgain: false,
          sourceList: res
        });
      }
    });
  }, []);
  reactExports.useEffect(() => {
    if (fetchAgain) {
      fetchAllSources().then((res) => {
        if (!res.error) {
          setSourceState({
            fetchAgain: false,
            sourceList: res
          });
        }
      });
    }
  }, [fetchAgain, setSourceState]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
});
const fetchAllGroups = async () => {
  return await handleGetCall("/api/settings/groups");
};
const insertNewGroup = async (payload) => {
  return await handlePostCall("/api/settings/groups", payload);
};
const deleteGroupById = async (id) => {
  return await handleDeleteCall(`/api/settings/groups/${id}`);
};
const updateGroupById = async (id, payload) => {
  return await handlePutCall(`/api/settings/groups/${id}`, payload);
};
const transactionGroupState = Recoil_index_8({
  key: "transactionGroup",
  default: {
    groupList: [],
    fetchAgain: false
  }
});
const GroupSettingsLoader = reactExports.memo(() => {
  const [{ fetchAgain }, setGroupState] = Recoil_index_22(transactionGroupState);
  reactExports.useEffect(() => {
    fetchAllGroups().then((res) => {
      if (!res.error) {
        setGroupState({
          fetchAgain: false,
          groupList: res
        });
      }
    });
  }, []);
  reactExports.useEffect(() => {
    if (fetchAgain) {
      fetchAllGroups().then((res) => {
        if (!res.error) {
          setGroupState({
            fetchAgain: false,
            groupList: res
          });
        }
      });
    }
  }, [fetchAgain, setGroupState]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
});
const response = prompt("Set API base url, defaults to http://localhost:7800");
if (response && response.startsWith("https")) {
  window.EXPENSE_API_HOST = response;
}
const root = client.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Recoil_index_5, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecoilizeDebugger, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SourceSettingsLoader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GroupSettingsLoader, {})
    ] })
  ] }) })
);
export {
  handleGetCall as a,
  insertNewSource as b,
  updateSourceById as c,
  deleteGroupById as d,
  deleteSourceById as e,
  transactionSourceState as f,
  handlePostCall as h,
  insertNewGroup as i,
  transactionGroupState as t,
  updateGroupById as u
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-WSu1sJlK.js","assets/vendor-X32a2jhr.js","assets/TransactionUtils-is_LkwWB.js","assets/defineProperty-h3pYhLyT.js","assets/useSourceSettings-45Zoo1-g.js","assets/index-ZZUpGCAw.js","assets/index-bY_nws7E.js","assets/index-9qzwaZf_.js","assets/index-IJb5hFQ_.css","assets/index-gyW3sCPX.js","assets/index-30OGQLav.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}