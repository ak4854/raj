(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(n, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return t(2373)
            }])
        },
        2373: function(n, r, t) {
            "use strict";

            function e(n, r, t) {
                return r in n ? Object.defineProperty(n, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = t, n
            }
            t.r(r), t.d(r, {
                default: function() {
                    return o
                }
            });
            var u = t(5893);
            t(906);
            var o = function(n) {
                var r = n.Component,
                    t = n.pageProps;
                return (0, u.jsx)(r, function(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            u = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (u = u.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        }))), u.forEach(function(r) {
                            e(n, r, t[r])
                        })
                    }
                    return n
                }({}, t))
            }
        },
        906: function() {}
    },
    function(n) {
        var r = function(r) {
            return n(n.s = r)
        };
        n.O(0, [774, 179], function() {
            return r(1118), r(387)
        }), _N_E = n.O()
    }
]);