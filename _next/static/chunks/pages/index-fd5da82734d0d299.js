(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(3678)
            }])
        },
        3678: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return l
                }
            });
            var i = t(5893),
                s = t(7294),
                u = t(1163),
                a = t(9008),
                c = t.n(a),
                r = t(5675),
                $ = t.n(r);

            function l() {
                var n = (0, u.useRouter)();
                return (0, s.useEffect)(function() {
                    setTimeout(function() {
                        n.push("/a")
                    }, 200)
                }, [n]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c(), {
                        children: [(0, i.jsx)("title", {
                            children: "Please wait"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "please wait. free online service"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "text-center loading-fast",
                        children: [(0, i.jsx)($(), {
                            src: "/loading.gif",
                            alt: "loading",
                            quality: 100,
                            layout: "fixed",
                            width: 100,
                            height: 100
                        }), (0, i.jsx)("h1", {
                            children: "Please wait..."
                        })]
                    })]
                })
            }
        }
    },
    function(n) {
        n.O(0, [345, 774, 888, 179], function() {
            return n(n.s = 5557)
        }), _N_E = n.O()
    }
]);