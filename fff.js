! function() {
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }
    var t = ["prize"];
    
    function n(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || r(e) || v(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    
    function r(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }
    
    function a(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
    
    function o() {
        "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        o = function() {
            return t
        };
        var t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            l = a.asyncIterator || "@@asyncIterator",
            c = a.toStringTag || "@@toStringTag";
        
        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            s({}, "")
        } catch (O) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }
        
        function u(e, t, n, r) {
            var a = t && t.prototype instanceof m ? t : m,
                o = Object.create(a.prototype),
                i = new E(r || []);
            return o._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(a, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === a) throw o;
                        return M()
                    }
                    for (n.method = a, n.arg = o;;) {
                        var i = n.delegate;
                        if (i) {
                            var l = x(i, n);
                            if (l) {
                                if (l === f) continue;
                                return l
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = d(e, t, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                    }
                }
            }(e, n, i), o
        }
        
        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (O) {
                return {
                    type: "throw",
                    arg: O
                }
            }
        }
        t.wrap = u;
        var f = {};
        
        function m() {}
        
        function p() {}
        
        function v() {}
        var h = {};
        s(h, i, (function() {
            return this
        }));
        var g = Object.getPrototypeOf,
            b = g && g(g(C([])));
        b && b !== n && r.call(b, i) && (h = b);
        var y = v.prototype = m.prototype = Object.create(h);
        
        function w(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }
        
        function k(t, n) {
            function a(o, i, l, c) {
                var s = d(t[o], t, i);
                if ("throw" !== s.type) {
                    var u = s.arg,
                        f = u.value;
                    return f && "object" == e(f) && r.call(f, "__await") ? n.resolve(f.__await)
                        .then((function(e) {
                            a("next", e, l, c)
                        }), (function(e) {
                            a("throw", e, l, c)
                        })) : n.resolve(f)
                        .then((function(e) {
                            u.value = e, l(u)
                        }), (function(e) {
                            return a("throw", e, l, c)
                        }))
                }
                c(s.arg)
            }
            var o;
            this._invoke = function(e, t) {
                function r() {
                    return new n((function(n, r) {
                        a(e, t, n, r)
                    }))
                }
                return o = o ? o.then(r, r) : r()
            }
        }
        
        function x(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return f;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var r = d(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
            var a = r.arg;
            return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
        }
        
        function _(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }
        
        function I(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }
        
        function E(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(_, this), this.reset(!0)
        }
        
        function C(e) {
            if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        a = function t() {
                            for (; ++n < e.length;)
                                if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return a.next = a
                }
            }
            return {
                next: M
            }
        }
        
        function M() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = v, s(y, "constructor", v), s(v, "constructor", p), p.displayName = s(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s(e, c, "GeneratorFunction")), e.prototype = Object.create(y), e
        }, t.awrap = function(e) {
            return {
                __await: e
            }
        }, w(k.prototype), s(k.prototype, l, (function() {
            return this
        })), t.AsyncIterator = k, t.async = function(e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new k(u(e, n, r, a), o);
            return t.isGeneratorFunction(n) ? i : i.next()
                .then((function(e) {
                    return e.done ? e.value : i.next()
                }))
        }, w(y), s(y, c, "Generator"), s(y, i, (function() {
            return this
        })), s(y, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = C, E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
                    for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                
                function n(n, r) {
                    return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                        i = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var l = r.call(o, "catchLoc"),
                            c = r.call(o, "finallyLoc");
                        if (l && c) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        } else if (l) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var o = a;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), f
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var a = r.arg;
                            I(n)
                        }
                        return a
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: C(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), f
            }
        }, t
    }
    
    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t)
                    .enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    
    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0)
                .forEach((function(t) {
                    c(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n))
                .forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
        }
        return e
    }
    
    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    
    function s(e, t, n, r, a, o, i) {
        try {
            var l = e[o](i),
                c = l.value
        } catch (s) {
            return void n(s)
        }
        l.done ? t(c) : Promise.resolve(c)
            .then(r, a)
    }
    
    function u(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise((function(r, a) {
                var o = e.apply(t, n);
                
                function i(e) {
                    s(o, r, a, i, l, "next", e)
                }
                
                function l(e) {
                    s(o, r, a, i, l, "throw", e)
                }
                i(void 0)
            }))
        }
    }
    
    function d(e, t) {
        return m(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, o = [],
                i = !0,
                l = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next())
                        .done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (c) {
                l = !0, a = c
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
            return o
        }(e, t) || v(e, t) || f()
    }
    
    function f() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    
    function m(e) {
        if (Array.isArray(e)) return e
    }
    
    function p(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = v(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function() {};
                return {
                    s: a,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            l = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return i = e.done, e
            },
            e: function(e) {
                l = !0, o = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (l) throw o
                }
            }
        }
    }
    
    function v(e, t) {
        if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e)
                .slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
        }
    }
    
    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var g = document.createElement("style");
    g.innerHTML = '@import"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap";@import"https://gst-static.garenanow.com/gs/games/ff/fonts/fonts.css";@keyframes rotate-7ee47045{0%{transform:rotate(0) scaleX(-1)}to{transform:rotate(360deg) scaleX(-1)}}.base-loading[data-v-7ee47045]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:3;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.8)}.base-loading[data-v-7ee47045]:before{width:.44rem;height:.44rem;background:var(--IMG_LOADING) center/contain no-repeat;content:"";animation:rotate-7ee47045 1s linear infinite}.congrats[data-v-7ee47045]{position:fixed;top:50%;right:0;bottom:0;left:2.71rem;z-index:3;height:7.5rem;background:var(--IMG_CONGRATS_SPLASH) center/cover no-repeat;transform:translateY(-50%)}@keyframes rotate-0fcb9588{80%,to{transform:rotate(90deg)}}.orientation-guide[data-v-0fcb9588]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:5;display:flex;justify-content:center;align-items:center;flex-direction:column;background:#000;color:#fff}.orientation-guide .phone[data-v-0fcb9588]{width:.67rem;height:1.09rem;background:var(--IMG_PHONE) center/contain no-repeat;display:inline-block;animation:rotate-0fcb9588 infinite 1s ease-in-out alternate}.orientation-guide .message[data-v-0fcb9588]{margin-top:.4rem;font-size:.25rem;font-weight:700}.base-carousel[data-v-27f5b79a]{position:relative;width:9.9rem;height:5.33rem}.list[data-v-27f5b79a]{width:100%;height:100%;display:flex;overflow:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory}.list[data-v-27f5b79a]::-webkit-scrollbar{width:0;display:none;background:transparent;visibility:hidden}.item[data-v-27f5b79a]{width:100%;height:100%;flex:1 0 auto;scroll-snap-align:center;transform:translateZ(0)}.item img[data-v-27f5b79a]{width:100%;height:100%;display:block;-o-object-fit:contain;object-fit:contain}.arrow[data-v-27f5b79a]{position:absolute;top:50%;z-index:1;width:.7rem;height:.7rem;display:inline-block;border:solid #fe0151;border-width:0 .1rem .1rem 0}.arrow.left[data-v-27f5b79a]{left:.2rem;transform:translate3d(0,-50%,0) scaleX(-1) rotate(-45deg)}.arrow.right[data-v-27f5b79a]{right:.2rem;transform:translate3d(0,-50%,0) rotate(-45deg)}.arrow.first[data-v-27f5b79a],.arrow.last[data-v-27f5b79a]{display:none}.indicator[data-v-27f5b79a]{position:absolute;bottom:-.35rem;left:50%;display:flex;justify-content:center;align-items:center;transform:translate3d(-50%,0,0)}.dot[data-v-27f5b79a]{width:.2rem;height:.2rem;background:#fe0151;border-radius:50%;opacity:.3;transition:opacity .3s}.dot.active[data-v-27f5b79a]{opacity:1}.dot+.dot[data-v-27f5b79a]{margin-left:.2rem}.base-scrollable[data-v-0fcef76d]{position:relative;display:flex;flex-direction:column;overflow:hidden;-webkit-overflow-scrolling:touch}.scrollbar[data-v-0fcef76d]{position:absolute;top:0;right:0;bottom:0;width:.1rem;background:#aeaeae}.scrollbar-thumb[data-v-0fcef76d]{position:absolute;top:0;right:0;width:.1rem;background:#ff0151}.content[data-v-0fcef76d]{width:100%;flex-grow:1;overflow-y:auto}.content[data-v-0fcef76d]::-webkit-scrollbar{width:0;display:none;background:transparent;visibility:hidden}.tab[data-v-1c51db6e]{color:#fff;font-size:.24rem;font-weight:500;text-transform:uppercase;text-align:center;width:2.21rem;height:.53rem;margin-top:.15rem;margin-left:.1rem;line-height:.49rem;background:#fe0151;filter:grayscale(1);cursor:pointer}.active[data-v-1c51db6e]{width:2.21rem;height:.5rem;transition:background-color .2s,color .2s;filter:none}.modal[data-v-d8bece60]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.8);-webkit-backdrop-filter:blur(.08rem);backdrop-filter:blur(.08rem)}.dialog[data-v-d8bece60]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:9.52rem;height:5.3rem;position:relative;background:#e4e4e4}.xl .dialog[data-v-d8bece60]{width:11.37rem;height:6.87rem}.lg .dialog[data-v-d8bece60]{width:11.8rem;height:5.3rem}.md .dialog[data-v-d8bece60]{width:9.52rem;height:5.3rem}.sm .dialog[data-v-d8bece60]{width:6.5rem;height:4rem}.close[data-v-d8bece60]{position:absolute;top:-.02rem;right:0;width:.57rem;height:.59rem;background:var(--IMG_X) center/contain no-repeat}.modal-enter-from[data-v-d8bece60],.modal-leave-to[data-v-d8bece60]{opacity:0}.modal-enter-from .dialog[data-v-d8bece60],.modal-leave-to .dialog[data-v-d8bece60]{transform:scaleY(0)}.modal-enter-active[data-v-d8bece60],.modal-leave-active[data-v-d8bece60]{transition:opacity .3s;will-change:opacity}.modal-enter-active .dialog[data-v-d8bece60],.modal-leave-active .dialog[data-v-d8bece60]{transition:transform .2s;will-change:transform}.btn-rules[data-v-3a7daeb7]{position:absolute;top:.23rem;left:3rem;z-index:1;width:.34rem;height:.33rem;background:var(--IMG_RULES_BTN) center/contain no-repeat}.header[data-v-3a7daeb7]{width:9.85rem;display:flex;color:#2b2b2b;font-size:.28rem;font-weight:800;text-align:left;margin-top:.1rem}.body[data-v-3a7daeb7]{display:flex;padding:.32rem .32rem .52rem .56rem;flex-grow:1;align-items:center;flex-direction:column}.rules[data-v-3a7daeb7]{height:5.33rem;padding-top:.2rem;padding-right:.3rem;font-size:.27rem;text-align:left;color:#474747}.rules[data-v-3a7daeb7] p{margin-top:.1rem}.rules[data-v-3a7daeb7] li{margin-left:.3rem;line-height:.35rem;list-style-position:outside}.rules[data-v-3a7daeb7] ol{padding:.1rem .1rem 0 0;text-align:justify}.rules[data-v-3a7daeb7] ol>li{list-style:decimal}.rules[data-v-3a7daeb7] ul>li{list-style-type:circle}.rules[data-v-3a7daeb7] .highlight{color:#fe0151;font-size:.36rem;font-weight:700}.message[data-v-7a6b1920]{margin-bottom:.3rem;color:#000;font-size:.4rem;font-weight:700}.platform[data-v-7a6b1920]{display:flex;margin-bottom:.3rem}.icon[data-v-7a6b1920]{width:1.2rem;height:1.2rem}.icon+.icon[data-v-7a6b1920]{margin-left:.3rem}.icon.icon-fb[data-v-7a6b1920]{background:var(--IMG_POPUP_ICON_FB) center/contain no-repeat}.icon.icon-vk[data-v-7a6b1920]{background:var(--IMG_POPUP_ICON_VK) center/contain no-repeat}.icon.icon-google[data-v-7a6b1920]{background:var(--IMG_POPUP_ICON_GOOGLE) center/contain no-repeat}.icon.icon-apple[data-v-7a6b1920]{background:var(--IMG_POPUP_ICON_APPLE) center/contain no-repeat}.icon.icon-twitter[data-v-7a6b1920]{background:var(--IMG_POPUP_ICON_TWITTER) center/contain no-repeat}.message[data-v-260ae48c]{margin-bottom:.3rem;font-size:.4rem;font-weight:700;color:#000}.platform[data-v-260ae48c]{display:flex;margin-bottom:.3rem}.icon[data-v-260ae48c]{width:.96rem;height:.96rem}.icon+.icon[data-v-260ae48c]{margin-left:.5rem}.icon.icon-appstore[data-v-260ae48c]{background:var(--IMG_POPUP_ICON_APPSTORE) center/contain no-repeat}.icon.icon-playstore[data-v-260ae48c]{background:var(--IMG_POPUP_ICON_PLAYSTORE) center/contain no-repeat}.base-toast[data-v-48cacb1f]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:3;display:flex;justify-content:center;align-items:center}.message[data-v-48cacb1f]{position:relative;width:9rem;padding:.1rem .5rem;background:linear-gradient(to right,transparent,#777 20%,#000 50%,#777 80%,transparent);color:#b1ff2f;font-size:.25rem;font-weight:700;text-align:center;text-transform:uppercase}.message[data-v-48cacb1f]:before,.message[data-v-48cacb1f]:after{position:absolute;right:0;left:0;content:"";height:2px;background:linear-gradient(to right,transparent 10%,#b1ff2f,transparent 90%)}.message[data-v-48cacb1f]:before{top:0}.message[data-v-48cacb1f]:after{bottom:0}.toast-enter-active[data-v-48cacb1f],.toast-leave-active[data-v-48cacb1f]{transition:opacity .15s}.toast-enter-from[data-v-48cacb1f],.toast-leave-to[data-v-48cacb1f]{opacity:0}.base-prize[data-v-586f48a5]{display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative}.base-prize+.base-prize[data-v-586f48a5]{margin-left:.1rem}.image[data-v-586f48a5]{display:flex;justify-content:center;align-items:center;width:var(--6ac437a5);height:var(--581879b0);position:relative;pointer-events:auto}.image img[data-v-586f48a5]{width:80%;height:80%;display:block;-o-object-fit:contain;object-fit:contain;pointer-events:none}.glow[data-v-586f48a5]{box-shadow:0 0 .3rem .18rem #ffec46}.quality-2[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_2) center/contain no-repeat}.quality-3[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_3) center/contain no-repeat}.quality-4[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_4) center/contain no-repeat}.quality-5[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_5) center/contain no-repeat}.quality-7[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_7) center/contain no-repeat}.quality-8[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_8) center/contain no-repeat}.quality-9[data-v-586f48a5]{background:var(--IMG_QUALITY_PRIZE_QUALITY_9) center/contain no-repeat}.name[data-v-586f48a5]{margin-top:.1rem;color:#000;font-size:.24rem;font-weight:700;text-transform:uppercase}.popover-text[data-v-586f48a5]{position:absolute;width:100%;font-size:.25rem;color:#fff;background:rgba(0,0,0,.641)}.owned[data-v-586f48a5]{filter:grayscale(100%)}.owned-text[data-v-586f48a5]{position:absolute;top:.8rem;width:98%;font-size:.35rem;color:#fff;background:rgba(0,0,0,.641)}.quantity[data-v-586f48a5]{position:absolute;top:77%;right:3%;color:#fff;font-size:.25rem;font-weight:500}.grand[data-v-586f48a5]{width:100%;height:100%;background:var(--IMG_PRIZE_SQUARE_LIGHT_SWIPE) center/contain no-repeat;position:absolute;opacity:.7}.btn-history[data-v-aed4f946]{position:absolute;top:.23rem;left:3.5rem;z-index:1;width:.34rem;height:.33rem;background:var(--IMG_HISTORY_BTN) center/contain no-repeat}.header[data-v-aed4f946]{color:#282828;font-size:.46rem;font-weight:700;text-transform:uppercase;display:flex;width:9.85rem;margin:.2rem 0}.header button[data-v-aed4f946]{width:2.4rem;background:#646464;color:#fff;font-size:.24rem;font-weight:500;line-height:.49rem;text-transform:uppercase}.header button+button[data-v-aed4f946]{margin-left:.1rem}.header button.active[data-v-aed4f946]{background:#ff0051}.body[data-v-aed4f946]{width:9.85rem;flex-grow:1}.table-container[data-v-aed4f946]{width:100%}.base-scrollable[data-v-aed4f946]{width:calc(100% + .2rem);height:5.3rem}.row[data-v-aed4f946]{display:flex;width:100%}.row+.row[data-v-aed4f946]{margin-top:.04rem}.row.head[data-v-aed4f946]{margin-bottom:.04rem}.col[data-v-aed4f946]{flex-shrink:0;padding:.1rem;background:#b9b9b9;font-size:.22rem;font-weight:500;line-height:1;letter-spacing:-.05em;text-transform:uppercase}.col+.col[data-v-aed4f946]{margin-left:.04rem}.head .col[data-v-aed4f946]{color:#fff;background:#ff0051;font-size:.24rem;font-weight:700;text-align:center}.col[data-v-aed4f946]:nth-child(1){width:1.8rem}.col[data-v-aed4f946]:nth-child(2){width:1.7rem}.col[data-v-aed4f946]:nth-child(3){width:1.2rem}.col[data-v-aed4f946]:nth-child(4),.col[data-v-aed4f946]:nth-child(5){width:2.5rem}.cost[data-v-aed4f946]{display:flex;justify-content:center;align-items:center}.cost i[data-v-aed4f946]{margin-right:.04rem}.gem0[data-v-aed4f946]{width:.26rem;height:.29rem;background:var(--IMG_DIAMOND_ICON) center/contain no-repeat}.gem1[data-v-aed4f946]{width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat}.prize[data-v-aed4f946],.timestamp[data-v-aed4f946],.cost[data-v-aed4f946],.remarks[data-v-aed4f946]{display:flex;justify-content:center;align-items:center;height:1rem}.prize+.prize[data-v-aed4f946]{margin-top:.2rem}.prize .name[data-v-aed4f946]{margin-left:.1rem}.remarks[data-v-aed4f946] i{width:.36rem;height:.36rem;background:var(--IMG_TOKEN) center/contain no-repeat;display:inline-block;transform:translateY(.08rem)}.remarks+.remarks[data-v-aed4f946]{margin-top:.2rem}.bgm[data-v-55221558]{position:absolute;top:.5rem;right:1.4rem}.btn-mute[data-v-55221558],.btn-unmute[data-v-55221558]{width:.34rem;height:.33rem;position:absolute;top:.23rem;right:5.2rem;z-index:1;padding:0;display:block;border:none}.btn-mute[data-v-55221558]{background:var(--IMG_UNMUTE) center/contain no-repeat}.btn-unmute[data-v-55221558]{background:var(--IMG_MUTE) center/contain no-repeat}.banner[data-v-052e169e]{position:absolute;top:0;right:0;left:0;width:100%;height:1rem}.profile[data-v-052e169e]{position:absolute;top:.17rem;right:.2rem;display:flex;justify-content:center;align-items:center;flex-direction:row}.profile .uid[data-v-052e169e]{color:#fff;font-size:.23rem;width:2.22rem;height:.39rem;background:var(--IMG_UID) center/contain no-repeat;padding-top:.03rem;padding-left:.4rem;margin-right:.2rem}.profile .balance[data-v-052e169e]{width:2.22rem;height:.39rem;background:var(--IMG_DIAMOND) center/contain no-repeat;color:#fff;font-size:.23rem;padding-top:.03rem;padding-left:.4rem;margin-right:.2rem}.countdown[data-v-052e169e]{position:absolute;top:.1rem;right:7rem}.countdown .title[data-v-052e169e]{color:#fff;font-size:.22rem;font-weight:700;text-transform:uppercase;position:relative;left:0;width:100%;text-align:left}.countdown .subtitle[data-v-052e169e]{color:#fff;font-size:.25rem;font-weight:700;text-transform:uppercase;text-align:left;position:relative;width:100%}.top-divider[data-v-052e169e]{position:absolute;top:.65rem;right:.2rem;left:2.91rem;height:.16rem;background:var(--IMG_DIVIDER_DIAMOND) left center/contain no-repeat,var(--IMG_DIVIDER_DIAMOND) right center/contain no-repeat,var(--IMG_DIVIDER) center/.02rem repeat-x}.btn-share[data-v-052e169e]{width:2.17rem;height:.5rem;background:var(--IMG_BTN_SHARE) center/contain no-repeat;position:absolute;top:2.2rem;right:.5rem;color:#000;font-size:.3rem;font-weight:700;text-transform:uppercase}.header[data-v-f20aab22]{display:flex;height:.62rem;margin-top:.35rem;color:#000;font-size:.45rem;font-weight:700;text-align:left}.body[data-v-f20aab22]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:-.5rem;flex-grow:1}.message[data-v-f20aab22]{font-size:.33rem;margin-bottom:.3rem;color:#000;font-weight:700}.prize-section[data-v-f20aab22]{display:flex;justify-content:center;align-items:center;flex-direction:row}.actions[data-v-f20aab22]{display:flex;justify-content:center;align-items:center;flex-direction:row;position:relative;margin-top:.2rem}.kick-again[data-v-f20aab22]{width:2.31rem;height:.62rem;background:var(--IMG_CONFIRM_BTN) center/contain no-repeat;position:relative;margin-right:.3rem;font-size:.3rem;font-weight:700}.select-gp[data-v-f20aab22]{width:3.84rem;height:.71rem;background:var(--IMG_SELECT_GRANDPRIZE_BTN) center/contain no-repeat;margin-top:.4rem;font-size:.3rem;font-weight:700}.confirm[data-v-f20aab22]{width:2.31rem;height:.62rem;background:var(--IMG_OK_BTN) center/contain no-repeat;margin-top:.2rem;font-size:.3rem;font-weight:700}.ok[data-v-f20aab22]{width:2.31rem;height:.62rem;background:var(--IMG_OK_BTN) center/contain no-repeat;font-size:.3rem;font-weight:700}.gem[data-v-f20aab22]{width:.3rem;height:.3rem;background:var(--IMG_DIAMOND_ICON) center/contain no-repeat;position:absolute;top:.7rem;right:1.2rem}.cost[data-v-f20aab22]{position:absolute;top:.68rem;left:1.15rem;font-size:.28rem}.base-checkbox[data-v-09dbaa3c]{display:inline-flex;align-items:center;font-size:.23rem;text-transform:uppercase;color:#000}.base-checkbox .checkmark[data-v-09dbaa3c]{width:.27rem;height:.24rem;background:var(--IMG_CHECK_BOX) center/contain no-repeat;margin-right:.04rem;transition:background-image .2s}.base-checkbox input[data-v-09dbaa3c]{display:none}.base-checkbox input:checked+.checkmark[data-v-09dbaa3c]{background-image:var(--IMG_CHECKBOX_TICKED)}.body[data-v-d34b6a28]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem .6rem .2rem;flex-grow:1}.message[data-v-d34b6a28]{color:#000;font-size:.3rem;font-weight:700;line-height:1}.confirm[data-v-d34b6a28]{display:flex;justify-content:center;align-items:center;flex-direction:row;background:var(--IMG_KICK_BTN) center/contain no-repeat;margin-top:.3rem;margin-bottom:.2rem;width:2.89rem;height:.72rem;font-size:.24rem;font-weight:700;line-height:.52rem}.soccer-token[data-v-d34b6a28]{width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat}.cost[data-v-d34b6a28]{font-size:.4rem}.confirmation-text[data-v-d34b6a28]{margin-bottom:.2rem;font-weight:700;font-size:.4rem;line-height:1;text-transform:uppercase}.actions[data-v-d34b6a28]{display:flex;justify-content:center;align-items:center;flex-direction:row;width:4.5rem;height:.4rem;justify-content:space-between;margin:.1rem 0 .05rem}.minus-one[data-v-d34b6a28],.plus-one[data-v-d34b6a28]{width:.4rem;height:.4rem;background:var(--IMG_QUANTITY_BOX) center/contain no-repeat;font-size:.28rem;color:#fff}.minus-ten[data-v-d34b6a28],.plus-ten[data-v-d34b6a28]{width:.69rem;height:.4rem;background:var(--IMG_QUANTITY_BOX_BIG) center/contain no-repeat;font-size:.28rem;color:#fff}.invalid[data-v-d34b6a28]{filter:grayscale(100);pointer-events:none}.current-qty[data-v-d34b6a28]{width:1.9rem;height:.4rem;font-size:.33rem;color:#fff;background-color:#545454}.header[data-v-bfbdc574]{position:relative;top:0;left:-3.5rem;display:flex;justify-content:center;align-items:center;flex-direction:row;height:1.3rem;padding:.12rem 0 .14rem .1rem;margin-top:.05rem;color:#000;font-size:.45rem;font-weight:700}.header .header-text[data-v-bfbdc574]{position:absolute;left:-1.3rem;white-space:nowrap}.header .token-wallet[data-v-bfbdc574]{position:absolute;left:6.84rem;font-size:.33rem}.header .token-img[data-v-bfbdc574]{position:absolute;right:-6.4rem;width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat}.body[data-v-bfbdc574]{display:flex;align-items:center;justify-content:left;flex-wrap:wrap;flex-grow:1;padding:.07rem .12rem .52rem .56rem}.prize[data-v-bfbdc574]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.body>*[data-v-bfbdc574]{margin-right:.24rem;margin-bottom:.3rem}.owned[data-v-bfbdc574]{filter:grayscale(100%);pointer-events:none}.amount[data-v-bfbdc574]{position:absolute;top:1.55rem;right:.05rem;color:#fff;font-size:.25rem;font-weight:500}.claim-btn[data-v-bfbdc574]{width:100%;height:.5rem;display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:.04rem;background-color:#ff0151}.soccer-token[data-v-bfbdc574]{width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat}.cost[data-v-bfbdc574]{color:#fff;font-size:.3rem;font-weight:600}.message[data-v-bfbdc574]{font-size:.33rem;margin-bottom:.4rem;color:#000;font-weight:700}.exchange-store[data-v-17eaef88]{position:absolute;top:4.9rem;left:.4rem}.exchange-store .btn-exchange-store[data-v-17eaef88]{width:1.89rem;height:1.21rem;background:var(--IMG_EXCHANGE_BTN) center/contain no-repeat;font-weight:800;font-size:.3rem;margin-right:-.01rem;padding-bottom:.02rem}.exchange-store .ending[data-v-17eaef88]{animation:glowing-17eaef88 .8s infinite alternate}@keyframes glowing-17eaef88{to{filter:brightness(1.4)}}.exchange-store .minimal[data-v-17eaef88]{width:1.89rem;height:2.71rem;background:var(--IMG_MIN_EXCHANGE_BTN) center/contain no-repeat;position:relative;top:-3.1rem}.ending-soon[data-v-17eaef88]{position:absolute;top:-.37rem;right:.03rem;color:#fec201;font-size:.25rem;font-weight:700;text-transform:uppercase;animation:zooming-17eaef88 .8s infinite alternate;text-shadow:#000 .01rem 0 .1rem;width:1.8rem}.ind[data-v-17eaef88]{white-space:nowrap;margin-right:.1rem}.min[data-v-17eaef88]{position:relative;top:-3.2rem;right:-.05rem}@keyframes zooming-17eaef88{to{transform:scale(1.1);filter:brightness(1.3)}}.tokens[data-v-17eaef88]{width:1.3rem;height:.25rem;position:relative;top:.03rem;left:.3rem;display:flex;justify-content:center;align-items:center;flex-direction:row;background-color:#262626;border-radius:.1rem}.soccer-token[data-v-17eaef88]{width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat;margin-right:.05rem}.token-ctr[data-v-17eaef88]{font-weight:400;font-size:.24rem;color:#fff}.sidebar[data-v-0848a261]{position:absolute;top:0;left:0;width:3.17rem;height:7.5rem;padding-right:.46rem;background:var(--IMG_LOGO) .2rem .28rem/2.4rem no-repeat,var(--IMG_SIDEBAR) center/contain no-repeat}.sidebar.minimal[data-v-0848a261]{background-image:var(--IMG_LOGO),var(--IMG_SIDEBAR_MIN)}.header[data-v-a3e30182]{position:relative;top:0;left:-4.3rem;display:flex;justify-content:center;align-items:center;flex-direction:row;padding:.12rem 0 .14rem .1rem;margin-top:.05rem;color:#000;font-size:.45rem;font-weight:700}.body[data-v-a3e30182]{display:flex;align-items:center;justify-content:left;flex-wrap:wrap;flex-grow:1;padding:.07rem .12rem .52rem .56rem}.prize[data-v-a3e30182]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.body>*[data-v-a3e30182]{margin-right:.24rem;margin-bottom:.3rem}.message[data-v-a3e30182]{font-size:.33rem;margin-bottom:.4rem;color:#000;font-weight:700}.body[data-v-c5be676a]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem .45rem .2rem;flex-grow:1}.message[data-v-c5be676a]{color:#000;font-size:.3rem;font-weight:700;line-height:1}.message i[data-v-c5be676a]{width:.31rem;height:.31rem;background:var(--IMG_ICON_DIAMOND) center/contain no-repeat;position:relative;top:.03rem;display:inline-block}.actions[data-v-c5be676a]{margin-top:1rem;margin-bottom:.2rem;display:flex;justify-content:center}.confirm[data-v-c5be676a]{display:flex;justify-content:center;align-items:center;flex-direction:row;width:2.89rem;height:.72rem;background:var(--IMG_KICK_BTN) center/contain no-repeat;font-size:.24rem;font-weight:700;line-height:.52rem}.gem[data-v-c5be676a]{width:.3rem;height:.3rem;background:var(--IMG_DIAMOND_ICON) center/contain no-repeat;margin-right:.05rem}.cost[data-v-c5be676a]{font-size:.4rem}.confirmation-text[data-v-c5be676a]{margin-top:.8rem;font-weight:700;font-size:.6rem}.minimal-view[data-v-24050c42]{width:100%;min-height:6.5rem;display:flex;flex-direction:column;color:#212121;padding-left:2.71rem}.kick-note[data-v-24050c42]{position:absolute;top:1.88rem;right:.57rem;width:1.44rem;color:#fff;font-size:.19rem;font-weight:500;line-height:.875;text-align:right}.btn-draw[data-v-24050c42]{display:flex;justify-content:center;align-items:center;width:2.35rem;height:1.35rem;background:var(--IMG_MIN_1_KICK) center/contain no-repeat;position:relative;font-size:.33rem;font-weight:800;line-height:.875;padding-bottom:.25rem}.btn-draw.batch[data-v-24050c42]{background-image:var(--IMG_MIN_5_KICK)}.gem-cost[data-v-24050c42]{position:absolute;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center;line-height:.25rem;height:.25rem}.gem[data-v-24050c42]{width:.23rem;height:.19rem;background:var(--IMG_DIAMOND_WHITE) center/contain no-repeat;margin-right:.02rem}.cost-text[data-v-24050c42]{color:#fff;font-weight:700;font-size:.22rem}.base-checkbox[data-v-24050c42]{position:absolute;top:6.82rem;left:3.18rem;color:#fff;text-transform:none}.reselectGP[data-v-24050c42]{width:1.89rem;height:.51rem;background:var(--IMG_RESELECT_BTN) center/contain no-repeat;position:absolute;top:6.62rem;right:.6rem}.reselect-text[data-v-24050c42]{text-align:left;line-height:.17rem;padding-left:.57rem;font-weight:600;font-size:.18rem}.selection-logo[data-v-24050c42]{position:absolute;top:.16rem;left:.09rem;width:2.8rem;height:1.41rem;background:var(--IMG_LOGO) center/contain no-repeat}.goalkick[data-v-24050c42]{width:80%;position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;flex-direction:column}.goalpost[data-v-24050c42]{width:11.63rem;height:6.72rem;background:var(--IMG_MIN_GOALPOST) center/contain no-repeat;display:flex;align-items:flex-start;justify-content:center;margin:auto;margin-bottom:-.93rem;pointer-events:none}.goalpost .gp[data-v-24050c42]{position:relative;top:1rem;right:.7rem}.goalpost .gp img[data-v-24050c42]{width:4rem;height:4rem;-o-object-fit:contain;object-fit:contain}.goalpost .gp .name[data-v-24050c42]{color:#fff;font-size:.24rem;font-weight:500;text-transform:uppercase}.goalpost .gp .qty[data-v-24050c42]{position:absolute;right:.3rem;bottom:.6rem;color:#fff;font-size:.5rem;font-weight:700}.goalpost .msg[data-v-24050c42]{margin-top:2.6rem;padding-left:2.5rem;padding-right:3.3rem;color:#fff;font-size:.4rem;font-weight:700;line-height:1}.actions[data-v-24050c42]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin:auto;justify-content:space-between;width:5rem}.prize-list-btn[data-v-24050c42]{width:1.89rem;height:2.71rem;background:var(--IMG_MIN_PRIZELIST_BTN) center/contain no-repeat;position:absolute;top:5.15rem;left:.4rem;padding-top:.48rem;line-height:.22rem;font-size:.25rem;font-weight:600}.anim[data-v-24050c42]{position:absolute;top:2rem;right:0;width:100%;height:2.78rem;-o-object-fit:cover;object-fit:cover}.grey[data-v-24050c42]{filter:grayscale(1);pointer-events:none}.game-board[data-v-5190ac04]{width:9.9rem;height:6.34rem;background:var(--IMG_BOARD) center/contain no-repeat;position:relative;padding-left:.16rem;background-position-x:right;overflow:hidden}.arrows[data-v-5190ac04]{position:absolute;top:.7rem;left:0}@keyframes arrow-5190ac04{to{transform:translate(.1rem)}}.arrow[data-v-5190ac04]{width:1.04rem;height:.74rem;background:var(--IMG_TRIANGLE) left center/.24rem no-repeat;animation:arrow-5190ac04 .5s infinite linear}.arrow+.arrow[data-v-5190ac04]{margin-top:.31rem}.balls[data-v-5190ac04]{position:absolute;top:.7rem;left:1.04rem;transform:translate(-100%)}.balls-rows[data-v-5190ac04]{display:flex;flex-direction:row-reverse}.balls-rows+.balls-rows[data-v-5190ac04]{margin-top:.31rem}.soccer-ball[data-v-5190ac04]{width:.74rem;height:.74rem;background:var(--IMG_BALL_PATTERN) center/contain}.soccer-ball+.soccer-ball[data-v-5190ac04]{margin-right:.36rem}.token[data-v-5190ac04]{width:.72rem;height:.36rem;display:flex;justify-content:center;align-items:center;position:relative;padding-left:.36rem;font-size:.34rem;font-weight:700}.token[data-v-5190ac04]:before{position:absolute;top:.03rem;left:.03rem;width:.31rem;height:.29rem;background:var(--IMG_SOCCER_TOKEN) center/contain no-repeat;content:"";display:block}.bronze .token[data-v-5190ac04]{background:var(--IMG_GOALTOKEN_BRONZE) center/contain no-repeat}.silver .token[data-v-5190ac04]{background:var(--IMG_GOALTOKEN_SILVER) center/contain no-repeat}.gold .token[data-v-5190ac04]{background:var(--IMG_GOALTOKEN_GOLD) center/contain no-repeat;font-size:.27rem}.goalpost[data-v-5190ac04]{width:1rem;height:1rem;display:flex;justify-content:center;align-items:center;padding:.05rem}.goalpost .name[data-v-5190ac04]{position:absolute;padding:.02rem .05rem;background:rgba(0,0,0,.5);color:#fff;font-size:.2rem;font-weight:500;text-transform:uppercase}.goalpost img[data-v-5190ac04]{width:100%;height:100%;display:block;-o-object-fit:contain;object-fit:contain}.bronze .goalpost[data-v-5190ac04]:nth-child(1){position:absolute;top:1.59rem;left:2.96rem}.bronze .goalpost[data-v-5190ac04]:nth-child(2){position:absolute;top:3.75rem;left:2.96rem}.bronze .goalpost[data-v-5190ac04]:nth-child(3){position:absolute;top:.51rem;left:5.82rem}.bronze .goalpost[data-v-5190ac04]:nth-child(4){position:absolute;top:4.84rem;left:5.82rem}.silver .goalpost[data-v-5190ac04]:nth-child(1){position:absolute;top:2.68rem;left:5.82rem}.silver .goalpost[data-v-5190ac04]:nth-child(2){position:absolute;top:.51rem;right:.23rem}.silver .goalpost[data-v-5190ac04]:nth-child(3){position:absolute;top:4.84rem;right:.23rem}.gold .goalpost[data-v-5190ac04]:nth-child(1){position:absolute;top:2.68rem;right:.23rem}.engaging-view[data-v-13aa7638]{width:100%;min-height:6.5rem;display:flex;flex-direction:column;color:#212121;padding-left:2.71rem}.kick-note[data-v-13aa7638]{position:absolute;top:1.88rem;right:.57rem;width:1.44rem;color:#fff;font-size:.19rem;font-weight:500;line-height:.875;text-align:right}.toggle-draw[data-v-13aa7638]{position:absolute;top:2.44rem;left:.4rem;display:flex}.btn-draw[data-v-13aa7638]{display:flex;justify-content:center;align-items:center;width:.95rem;height:1.35rem;background:var(--IMG_1_DESELECTED) center/contain no-repeat;position:relative;font-size:.28rem;letter-spacing:-.013rem;font-weight:800;line-height:.875;padding-bottom:.25rem;filter:brightness(70%)}.btn-draw.batch[data-v-13aa7638]{background-image:var(--IMG_5_DESELECTED)}.selected[data-v-13aa7638]{background-image:var(--IMG_1_SELECTED);filter:none}.selected.batch[data-v-13aa7638]{background-image:var(--IMG_5_SELECTED)}.prize-list-btn[data-v-13aa7638]{width:1.89rem;height:1.11rem;background:var(--IMG_MIN_PRIZELIST_BTN) center/contain no-repeat;position:absolute;top:6.23rem;left:.4rem;padding-top:.48rem;line-height:.22rem;font-size:.25rem;font-weight:600}.gem-cost[data-v-13aa7638]{position:absolute;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center;line-height:.25rem;height:.25rem}.gem[data-v-13aa7638]{width:.23rem;height:.19rem;background:var(--IMG_DIAMOND_WHITE) center/contain no-repeat;margin-right:.02rem}.cost-text[data-v-13aa7638]{color:#fff;font-weight:700;font-size:.22rem}.game-board[data-v-13aa7638]{margin:auto}.base-checkbox[data-v-13aa7638]{position:absolute;top:4.12rem;left:.48rem;color:#fff;text-transform:none}.reselectGP[data-v-13aa7638]{width:1.89rem;height:.51rem;background:var(--IMG_RESELECT_BTN) center/contain no-repeat;position:absolute;bottom:.3rem;left:.4rem}.reselect-text[data-v-13aa7638]{text-align:left;line-height:.17rem;padding-left:.57rem;font-weight:600;font-size:.18rem}.selection-logo[data-v-13aa7638]{position:absolute;top:.16rem;left:.09rem;width:2.8rem;height:1.41rem;background:var(--IMG_LOGO) center/contain no-repeat}.grey[data-v-13aa7638]{filter:grayscale(1);pointer-events:none}.gp-selection[data-v-fae49006]{position:absolute;top:1rem;right:calc(50% - 5.53rem);display:flex;justify-content:center;align-items:center;flex-direction:column}.header[data-v-fae49006]{margin-bottom:.3rem;color:#fff;font-weight:800;font-size:.41rem}.body[data-v-fae49006]{width:11.06rem;height:4.95rem;padding:.2rem;background-color:#d6d6d6}.base-scrollable[data-v-fae49006]{height:3.84rem}.confirm[data-v-fae49006]{width:1.89rem;height:.51rem;background:var(--IMG_CONFIRM_BTN) center/contain no-repeat;margin-top:.2rem;font-size:.3rem;font-weight:700}.prizes[data-v-fae49006]{display:flex;align-items:center;justify-content:left;flex-wrap:wrap;flex-grow:1;padding:.1rem .3rem}.base-prize+.base-prize[data-v-fae49006]{margin-left:.54rem}.base-prize[data-v-fae49006]:nth-child(4n+1){margin-left:0}.base-prize[data-v-fae49006]:nth-child(n+5){margin-top:.4rem}html{box-sizing:border-box;font-size:16px;line-height:1.15;-webkit-text-size-adjust:none}*,*:before,*:after{box-sizing:inherit}body,h1,h2,h3,h4,h5,h6,p,ol,ul{margin:0;padding:0;font-weight:400}ol,ul{list-style:none}img{max-width:100%;height:auto}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;outline:none}*{-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:pan-x pan-y;-webkit-tap-highlight-color:transparent}html{width:100vmax;height:100vmin;background:#000;overflow:hidden}@media only screen and (orientation: portrait){html{transform:rotate(90deg);transform-origin:50vmin 50vmin}}body{width:100%;height:100%;font-size:.36rem;font-family:GFF,Roboto,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-touch-callout:none!important;text-align:center}#app{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;color:#fff;overflow:auto}img{pointer-events:none}textarea,input{-moz-user-select:auto;user-select:auto;-webkit-user-select:auto}textarea:focus,input:focus{outline:none}button{padding:0;border:none;cursor:pointer;transition:all .13s;color:#000}button:hover{filter:brightness(1.2)}button:active{transition:all 0s;transform:scale(1.07)}button:focus{outline:none}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2;background:rgba(0,0,0,.8)}.modal-enter-from,.modal-leave-to{opacity:0}.modal-enter-from .dialog,.modal-leave-to .dialog{transform:scaleY(0)}.modal-enter-active,.modal-leave-active{transition:opacity .3s;will-change:opacity}.modal-enter-active .dialog,.modal-leave-active .dialog{transition:transform .2s;will-change:transform}::-webkit-scrollbar{width:0;background:transparent}.container[data-v-5f9d6476]{display:flex;justify-content:center;align-items:center;min-width:13.34rem;min-height:100%;background:black;background:var(--IMG_LOGO) .2rem .28rem/2.4rem no-repeat,var(--IMG_BG) top center/cover no-repeat}.container.minimal[data-v-5f9d6476]{background-image:var(--IMG_LOGO),var(--IMG_BG_MIN)}.container[data-v-5f9d6476]:before{position:absolute;top:0;right:0;bottom:0;left:0;content:"";-webkit-backdrop-filter:blur(.08rem) brightness(.8);backdrop-filter:blur(.08rem) brightness(.8)}.main[data-v-5f9d6476]{position:relative;width:100%;min-width:13.34rem;min-height:7.5rem;padding-top:1rem;background:inherit;overflow:hidden}.v-enter-active[data-v-5f9d6476],.v-leave-active[data-v-5f9d6476]{transition:all .5s ease}.v-enter-from[data-v-5f9d6476],.v-leave-to[data-v-5f9d6476]{opacity:0}.v-enter-from.gp-selection[data-v-5f9d6476],.v-leave-to.gp-selection[data-v-5f9d6476]{transform:translateY(100%)}\n', document.head.appendChild(g), System.register(["./vendor-legacy.09e34a6b.js"], (function() {
        "use strict";
        var e, i, c, s, h, g, b, y, w, k, x, _, I, E, C, M, O, z, P, G, T, N, L, S, A, R, B, D, j, $, H, K, U, V, Y, F, q, Z, X, W, Q, J, ee, te, ne, re;
        return {
            setters: [function(t) {
                e = t.c, i = t.a, c = t.b, s = t.d, h = t.r, g = t.e, b = t.w, y = t.u, w = t.m, k = t.o, x = t.f, _ = t.k, I = t.g, E = t.h, C = t.i, M = t.j, O = t.l, z = t.T, P = t.n, G = t.p, T = t.q, N = t.s, L = t.t, S = t.v, A = t.x, R = t.y, B = t.z, D = t.F, j = t.A, $ = t.B, H = t.C, K = t.D, U = t.E, V = t.G, Y = t.H, F = t.I, q = t.J, Z = t.K, X = t.L, W = t.M, Q = t.N, J = t.O, ee = t.P, te = t.Q, ne = t.R, re = t.S
            }],
            execute: function() {
                var ae = {
                        orientationMessage: "For a better experience, please use landscape mode",
                        popupErrorTitle: "ERROR",
                        errTycheToken: "Please login to continue",
                        errAccessToken: "Please login to continue",
                        errInvalidRegion: "Event is not available in your region",
                        errLogin: "Please login to continue",
                        errNoAccount: "Account not found",
                        errParams: "Illegal parameter substitution",
                        errBusy: "Requests are too frequent, please try again later",
                        errNoEvent: "Event hasn't begun/Event is over",
                        errOops: "Unknown error, please try again later",
                        errAlreadyOwned: "You already owned this reward!",
                        errCostMismatch: "Invalid gem cost, please refresh",
                        errLowBalance: "You don't have enough gems to play! Please top-up!",
                        errTokenCostMismatch: "Invalid token cost, please refresh",
                        errLowTokenBalance: "You don't have enough tokens to play! Please top-up!",
                        errGpNotChosen: "Please select the grand prize",
                        errExceedLimit: "Can't purchase anymore!",
                        popupDownloadAppMessage: "DOWNLOAD AND PLAY FREE FIRE TO JOIN THE EVENT",
                        popupLoginMessage: "PLEASE LOG IN",
                        popupResultTitle: "CONGRATULATIONS!",
                        popupResultMessage: "YOU RECEIVED",
                        popupResultGoal: "GOAL!!!",
                        popupResultBetterLuckNextTime: "BETTER LUCK NEXT TIME",
                        "popupRulesContent1.0": "<div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol><div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol>",
                        "popupRulesContent1.1": "<div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol><div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol>",
                        "popupRulesContent2.0": "<div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol><div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol>",
                        "popupRulesContent2.1": "<div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol><div class='highlight'>Event Period</div><p>2021-06-07 to 2021-06-13</p><div class='highlight'><br>Event Description</div><ol><li>Complete daily missions and burst balloons to win prizes!</li><li>Completing each daily mission will give you chance to burst a balloon.</li><li>Each balloon will contain a random prize from the prize list.</li><li>Missions and balloons will reset at 4AM daily.</li><li>Prizes will be sent to Vault directly. Please allow up to 10 minutes for item crediting.</ol>",
                        popupHistoryHeader: "HISTORY",
                        popupHistoryCols: "TIME,PRICE,PREVIEW,PRIZE WON,REMARKS",
                        popupHistoryEmptyMessage: "No items available !!",
                        popupHistoryToken: "Converted into {qty} <i></i>!",
                        popupConfirmationTitle: "CONFIRMATION",
                        popupConfirmationMessage: "Confirm to spend {cost} {icon} to draw?",
                        popupExchangeStore: "EXCHANGE STORE",
                        skipConfirmationMessage: "DON'T REMIND ME AGAIN",
                        "tutorialBanners1.0": "https://via.placeholder.com/990x533,https://via.placeholder.com/990x533,https://via.placeholder.com/990x533",
                        "tutorialBanners1.1": "https://via.placeholder.com/990x533,https://via.placeholder.com/990x533,https://via.placeholder.com/990x533",
                        "tutorialBanners2.0": "https://via.placeholder.com/990x533,https://via.placeholder.com/990x533,https://via.placeholder.com/990x533",
                        "tutorialBanners2.1": "https://via.placeholder.com/990x533,https://via.placeholder.com/990x533,https://via.placeholder.com/990x533",
                        btnCancel: "CANCEL",
                        btnConfirm: "CONFIRM",
                        btnShare: "SHARE",
                        btnDraw: "{n} SHOOT",
                        btnOk: "OK",
                        btnKickAgain: "KICK {num}X",
                        btnExchangeStore: "EXCHANGE STORE",
                        btnSelectGP: "SELECT GRAND PRIZE",
                        textClaimed: "Claimed",
                        textHowToPlay: "How to play",
                        textEventRules: "Rules",
                        textHistoryDraw: "Kick History",
                        textHistoryStore: "Exchange History",
                        textCountdownTitle: "Event ends in: ",
                        textCountdownDesc: "{d}:{h}:{m}:{s}",
                        textUID: "UID: {uid}",
                        textBalance: "Balance: ",
                        textBatchConfirmation: "KICK {n} TIMES?",
                        textConfirmation: "KICK {n} TIME?",
                        textExchangeConfirmation: "EXCHANGE FOR {name}?",
                        textReselectGP: "RESELECT GRAND PRIZE",
                        textChoosePrize: "CHOOSE YOUR PRIZE",
                        textKickNote: "Tap the arrow to kick the ball!",
                        textSkipAnim: "Skip animation",
                        textMinusCtr: "-{num}",
                        textPlusCtr: "+{num}",
                        textOwned: "OWNED",
                        textEndingSoon: "ENDING SOON",
                        textPrizeList: "PRIZE LIST",
                        textViewPrizes: "VIEW ALL PRIZES",
                        textWonAllGP: "YOU HAVE WON ALL THE GRAND PRIZES",
                        eventLogo: "https://via.placeholder.com/470x168?text=logo",
                        endedMessage: "THE END"
                    },
                    oe = e({
                        legacy: !1,
                        globalInjection: !0,
                        locale: "en",
                        fallbackLocale: "en",
                        messages: {
                            en: ae
                        },
                        datetimeFormats: {},
                        numberFormats: {}
                    }),
                    ie = new URL(window.location.href),
                    le = ie.searchParams.get("access_token");
                le && localStorage.setItem("TOKEN", le);
                var ce = ie.searchParams.get("tyche_token");
                ce && sessionStorage.setItem("TYCHE_TOKEN", ce);
                var se = ie.searchParams.get("region") || "SG";
                se && sessionStorage.setItem("REGION", se);
                var ue = d(navigator.language.split("-"), 1)[0],
                    de = ie.searchParams.get("lang") || ie.searchParams.get("language") || ue;
                de && sessionStorage.setItem("LANGUAGE", de), ie.searchParams.delete("access_token"), ie.searchParams.delete("tyche_token"), window.history.replaceState(null, "", ie);
                var fe = i({
                    history: c(),
                    routes: []
                });
                
                function me(e) {
                    return new Promise((function(t) {
                        return window.setTimeout(t, e)
                    }))
                }
                
                function pe(e, t) {
                    return ve.apply(this, arguments)
                }
                
                function ve() {
                    return ve = u(o()
                        .mark((function e(t, n) {
                            var r, a, i, c, u = arguments;
                            return o()
                                .wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = u.length > 2 && void 0 !== u[2] ? u[2] : {}, a = u.length > 3 && void 0 !== u[3] ? u[3] : {}, i = l(l({}, a), {}, {
                                                method: t,
                                                url: n,
                                                timeout: 6e4,
                                                data: r,
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            }), e.next = 5, s(i);
                                        case 5:
                                            return c = e.sent, e.abrupt("return", c.data);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                        }))), ve.apply(this, arguments)
                }
                
                function he(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = new window.URL("/api/".concat(e), window.location.href);
                    return Object.entries(l({
                            region: sessionStorage.getItem("REGION"),
                            lang: sessionStorage.getItem("LANGUAGE")
                        }, t))
                        .forEach((function(e) {
                            var t = d(e, 2),
                                r = t[0],
                                a = t[1];
                            a && n.searchParams.set(r, a)
                        })), n.href
                }
                
                function ge(e, t) {
                    return be.apply(this, arguments)
                }
                
                function be() {
                    return be = u(o()
                        .mark((function e(t, n) {
                            var r, a, i, l = arguments;
                            return o()
                                .wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = l.length > 2 && void 0 !== l[2] ? l[2] : {}, a = l.length > 3 && void 0 !== l[3] ? l[3] : {}, i = he(n, {
                                                tyche_token: sessionStorage.getItem("TYCHE_TOKEN")
                                            }), e.abrupt("return", pe(t, i, r, a));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                        }))), be.apply(this, arguments)
                }
                
                function ye(e, t, n) {
                    return u(o()
                        .mark((function e() {
                            var r, a, i, l, c = arguments;
                            return o()
                                .wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            for (a = c.length, i = new Array(a), l = 0; l < a; l++) i[l] = c[l];
                                            return e.next = 3, t.apply(void 0, i);
                                        case 3:
                                            if (r = e.sent, !n) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", n.apply(void 0, [r].concat(i)));
                                        case 6:
                                            return e.abrupt("return", r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                        })))
                }
                var we = h(),
                    ke = g((function() {
                        return w(we.value, window.encodeURI)
                    }));
                b(ke, (function(e) {
                    Object.entries(e)
                        .forEach((function(e) {
                            var t = d(e, 2),
                                n = t[0],
                                r = t[1];
                            document.documentElement.style.setProperty("--".concat(n), 'url("'.concat(r, '")'))
                        }))
                }), {
                    immediate: !0
                });
                var xe = ye(0, (function() {
                    return pe("get", he("assets"))
                }), (function(e) {
                    we.value = e
                }));
                
                function _e(e) {
                    try {
                        var t = k(e)
                            .exp,
                            n = Math.floor(Date.now() / 1e3);
                        return Math.max(0, t - n)
                    } catch (r) {
                        throw new Error("tycheToken")
                    }
                }
                var Ie = ye(0, (function() {
                        var e = sessionStorage.getItem("TYCHE_TOKEN");
                        return e && _e(e) > 0 ? Promise.resolve({
                            tycheToken: e
                        }) : pe("get", he("login", {
                            access_token: localStorage.getItem("TOKEN")
                        }))
                    }), (function(e) {
                        var t = e.tycheToken;
                        sessionStorage.setItem("TYCHE_TOKEN", t);
                        var n = 500 * _e(t);
                        n > 0 && window.setTimeout(Ie, n)
                    })),
                    Ee = x({
                        start: 0,
                        end: 0,
                        region: "SG",
                        lang: "en"
                    });
                var Ce = ye(0, (function() {
                        return pe("get", he("event"))
                    }), (function(e) {
                        Ee.start = e.start, Ee.end = e.end, Ee.region = e.region, Ee.lang = e.lang, sessionStorage.setItem("REGION", e.region), sessionStorage.setItem("LANGUAGE", e.lang)
                    })),
                    Me = x({
                        prizes: [],
                        store: [],
                        defaultGPId: 0,
                        drawCosts: []
                    }),
                    Oe = g((function() {
                        return _(Me.prizes, "id")
                    })),
                    ze = g((function() {
                        return _(Me.store, "prizeId")
                    })),
                    Pe = g((function() {
                        return Me.drawCosts[0]
                    })),
                    Ge = g((function() {
                        return Me.drawCosts[1]
                    }));
                var Te = ye(0, (function() {
                        return ge("get", "prizes")
                    }), (function(e) {
                        Me.prizes = e.prizes, Me.store = e.store, Me.defaultGPId = e.defaultGPId, Me.drawCosts = e.drawCosts
                    })),
                    Ne = function(e) {
                        return e[e.GOLD = 0] = "GOLD", e[e.SILVER = 1] = "SILVER", e[e.BRONZE = 2] = "BRONZE", e[e.NONE = 3] = "NONE", e[e.STORE = 4] = "STORE", e
                    }(Ne || {}),
                    Le = x({
                        wallet: 0,
                        chosenGP: 0,
                        ownedPrizes: [],
                        exchanges: [],
                        uid: "0",
                        tokens: 0,
                        now: 0,
                        templateType: ""
                    }),
                    Se = g((function() {
                        return _(Le.exchanges, "storeId")
                    })),
                    Ae = g((function() {
                        return Oe.value[Le.chosenGP]
                    })),
                    Re = g((function() {
                        return Me.prizes.filter((function(e) {
                                return e.goal === Ne.GOLD && e.isChoosable && !Le.ownedPrizes.includes(e.id)
                            }))
                            .length
                    })),
                    Be = function(e) {
                        return e.isChoosable && Le.ownedPrizes.includes(e.id)
                    };
                var De = ye(0, (function() {
                    return ge("get", "state")
                }), (function(e) {
                    Le.wallet = e.wallet, Le.chosenGP = e.chosenGP, Le.ownedPrizes = e.ownedPrizes, Le.exchanges = e.exchanges, Le.uid = e.uid, Le.tokens = e.tokens, Le.now = e.now, Le.templateType = e.version
                }));
                var je = ye(0, (function(e, t, n) {
                    return ge("post", "draw", {
                        type: e,
                        cost: t,
                        skipAnim: n
                    })
                }), (function(e) {
                    return Le.wallet -= e.cost, Le.ownedPrizes = e.ownedPrizes, Le.tokens = e.tokens, {
                        prizes: e.draws.map((function(e) {
                            return Oe.value[e.id]
                        })),
                        chosenGP: e.chosenGP
                    }
                }));
                var $e = ye(0, (function(e, t, n) {
                    return ge("post", "exchange", {
                        storeId: e,
                        tokenCost: t,
                        amount: n
                    })
                }), (function(e) {
                    return Le.chosenGP = e.chosenGP, Le.ownedPrizes = e.ownedPrizes, Le.tokens = e.tokens, Le.exchanges = e.exchanges, [Oe.value[e.id]]
                }));
                var He = ye(0, (function(e) {
                    return ge("post", "choosegp", {
                        id: e
                    })
                }), (function(e) {
                    Le.chosenGP = e.chosenGP
                }));
                var Ke = ye(0, (function() {
                        return pe("get", he("translation"))
                    }), (function(e) {
                        oe.global.setLocaleMessage(Ee.lang, e), oe.global.locale.value = Ee.lang, document.documentElement.lang = Ee.lang
                    })),
                    Ue = x({
                        txns: [],
                        exchanges: []
                    });
                var Ve = ye(0, (function() {
                    return ge("get", "txns")
                }), (function(e) {
                    Ue.txns = e.txns, Ue.exchanges = e.exchanges
                }));
                
                function Ye() {
                    return Fe.apply(this, arguments)
                }
                
                function Fe() {
                    return (Fe = u(o()
                            .mark((function e() {
                                return o()
                                    .wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Promise.all([Ce(), xe(), Ke(), Ie()]);
                                            case 2:
                                                return e.next = 4, Promise.all([Te(), De()]);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                            }))))
                        .apply(this, arguments)
                }
                var qe = function(e, t) {
                        var n, r = e.__vccOpts || e,
                            a = p(t);
                        try {
                            for (a.s(); !(n = a.n())
                                .done;) {
                                var o = d(n.value, 2),
                                    i = o[0],
                                    l = o[1];
                                r[i] = l
                            }
                        } catch (c) {
                            a.e(c)
                        } finally {
                            a.f()
                        }
                        return r
                    },
                    Ze = {
                        key: 0,
                        class: "base-loading"
                    },
                    Xe = {
                        key: 1,
                        class: "congrats"
                    },
                    We = qe(I({
                        __name: "BaseLoading",
                        props: {
                            loading: null,
                            showCongrats: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        setup: function(e) {
                            return function(t, n) {
                                return E(), C(z, {
                                    to: "body"
                                }, [1 !== e.loading || e.showCongrats ? 2 === e.loading ? (E(), M("div", Xe)) : O("", !0) : (E(), M("div", Ze))])
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-7ee47045"]
                    ]);
                
                function Qe() {
                    var e = h();
                    return {
                        error: e,
                        clearError: function() {
                            e.value = void 0
                        },
                        catchError: function(t) {
                            return u(o()
                                .mark((function n() {
                                    var r, a, i, l = arguments;
                                    return o()
                                        .wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.prev = 0, n.next = 3, t.apply(void 0, l);
                                                case 3:
                                                    return n.abrupt("return", n.sent);
                                                case 6:
                                                    return n.prev = 6, n.t0 = n.catch(0), s.isAxiosError(n.t0) ? (i = n.t0, r = null === (a = i.response) || void 0 === a ? void 0 : a.data.msg) : r = n.t0.message, e.value = P("err_".concat(r || "oops")), n.abrupt("return", Promise.resolve());
                                                case 11:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n, null, [
                                            [0, 6]
                                        ])
                                })))
                        }
                    }
                }
                
                function Je(e) {
                    var t = window.matchMedia(e),
                        n = h(t.matches);
                    
                    function r(e) {
                        n.value = e.matches
                    }
                    return G(u(o()
                        .mark((function e() {
                            return o()
                                .wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.addEventListener ? t.addEventListener("change", r) : t.addListener(r);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                        })))), T((function() {
                        t.removeEventListener ? t.removeEventListener("change", r) : t.removeListener(r)
                    })), n
                }
                
                function et() {
                    var e = h(0);
                    
                    function t(t) {
                        e.value = t
                    }
                    
                    function n() {
                        t(0)
                    }
                    return {
                        loading: e,
                        resetLoading: n,
                        setLoading: t,
                        withLoading: function(r) {
                            return u(o()
                                .mark((function a() {
                                    var i, l = arguments;
                                    return o()
                                        .wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    if (0 === e.value) {
                                                        a.next = 2;
                                                        break
                                                    }
                                                    return a.abrupt("return", Promise.resolve());
                                                case 2:
                                                    return t(1), a.next = 5, r.apply(void 0, l);
                                                case 5:
                                                    return i = a.sent, n(), a.abrupt("return", i);
                                                case 8:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a)
                                })))
                        }
                    }
                }
                
                function tt(e, t) {
                    var n = localStorage.getItem(e),
                        r = t;
                    null !== n && (r = function(e, t) {
                        try {
                            return JSON.parse(e)
                        } catch (n) {
                            return t
                        }
                    }(n, t));
                    var a = h(r);
                    return g({
                        get: function() {
                            return a.value
                        },
                        set: function(t) {
                            var n = JSON.stringify(t);
                            localStorage.setItem(e, n), a.value = t
                        }
                    })
                }
                var nt = {
                        key: 0,
                        class: "orientation-guide"
                    },
                    rt = function(e) {
                        return R("data-v-0fcb9588"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "phone"
                        }, null, -1)
                    })),
                    at = {
                        class: "message"
                    },
                    ot = I({
                        __name: "OrientationGuide",
                        setup: function(e) {
                            var t = h(!1),
                                n = 0;
                            
                            function r() {
                                window.clearTimeout(n), n = 0, t.value = !1
                            }
                            var a = Je("(orientation: portrait)");
                            return b(a, (function(e) {
                                    e ? (t.value = !0, n || (n = window.setTimeout((function() {
                                        t.value = !1
                                    }), 3e3))) : r()
                                }), {
                                    immediate: !0
                                }), T((function() {
                                    r()
                                })),
                                function(e, n) {
                                    return E(), C(z, {
                                        to: "body"
                                    }, [t.value ? (E(), M("div", nt, [rt, S("div", at, A(e.$t("orientationMessage")), 1)])) : O("", !0)])
                                }
                        }
                    }),
                    it = qe(ot, [
                        ["__scopeId", "data-v-0fcb9588"]
                    ]),
                    lt = ["id"],
                    ct = ["src"],
                    st = ["href"],
                    ut = ["href"],
                    dt = {
                        class: "indicator"
                    },
                    ft = ["href"],
                    mt = qe(I({
                        __name: "BaseCarousel",
                        props: {
                            slides: {
                                default: function() {
                                    return []
                                }
                            }
                        },
                        setup: function(e) {
                            var t = e,
                                n = h(0),
                                r = function(e) {
                                    return e === t.slides.length - 1 ? "#slide0" : "#slide".concat(e + 1)
                                },
                                a = g((function() {
                                    for (var e = [], n = 0; n < t.slides.length; n++) e.push("slide".concat(n));
                                    return e
                                })),
                                o = function(e) {
                                    var t = e.target;
                                    n.value = Math.round(t.scrollLeft / t.clientWidth)
                                };
                            return function(i, l) {
                                return E(), M("div", {
                                    class: $(["base-carousel", {
                                        first: 0 === n.value,
                                        last: n.value === e.slides.length - 1
                                    }])
                                }, [S("div", {
                                    class: "list",
                                    onScroll: o
                                }, [(E(!0), M(D, null, j(e.slides, (function(e, t) {
                                    return E(), M("div", {
                                        id: "slide".concat(t),
                                        key: t,
                                        ref_for: !0,
                                        ref: "items",
                                        class: "item"
                                    }, [S("img", {
                                        src: e
                                    }, null, 8, ct)], 8, lt)
                                })), 128))], 32), n.value > 0 ? (E(), M("a", {
                                    key: 0,
                                    href: (c = n.value, "#slide".concat(0 === c ? t.slides.length - 1 : c - 1)),
                                    class: "arrow left"
                                }, null, 8, st)) : O("", !0), n.value < e.slides.length - 1 ? (E(), M("a", {
                                    key: 1,
                                    href: r(n.value),
                                    class: "arrow right"
                                }, null, 8, ut)) : O("", !0), S("div", dt, [(E(!0), M(D, null, j(y(a), (function(e, t) {
                                    return E(), M("a", {
                                        key: e,
                                        class: $(["dot", [{
                                            active: n.value === t
                                        }]]),
                                        href: "#".concat(e)
                                    }, null, 10, ft)
                                })), 128))])], 2);
                                var c
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-27f5b79a"]
                    ]),
                    pt = {
                        class: "base-scrollable"
                    },
                    vt = {
                        key: 0,
                        class: "scrollbar"
                    },
                    ht = qe(I({
                        __name: "BaseScrollable",
                        setup: function(e) {
                            var t = h(0),
                                n = h(0),
                                r = h();
                            
                            function a() {
                                if (r.value) {
                                    var e = r.value,
                                        a = e.offsetHeight,
                                        o = e.scrollHeight,
                                        i = e.scrollTop;
                                    a < o ? (t.value = i / (o / a), n.value = a * a / o) : (t.value = 0, n.value = 0)
                                }
                            }
                            return H(a), G(a),
                                function(e, o) {
                                    return E(), M("div", pt, [n.value > 0 ? (E(), M("div", vt, [S("div", {
                                        class: "scrollbar-thumb",
                                        style: K({
                                            top: "".concat(t.value, "px"),
                                            height: "".concat(n.value, "px")
                                        })
                                    }, null, 4)])) : O("", !0), S("div", {
                                        ref_key: "content",
                                        ref: r,
                                        class: "content",
                                        onScroll: a
                                    }, [U(e.$slots, "default", {}, void 0, !0)], 544)])
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-0fcef76d"]
                    ]),
                    gt = qe(I({
                        __name: "RulesTab",
                        props: {
                            name: null,
                            active: {
                                type: Boolean
                            }
                        },
                        setup: function(e) {
                            return function(t, n) {
                                return E(), M("div", {
                                    class: $(["tab", {
                                        active: e.active
                                    }])
                                }, [S("span", null, A(e.name), 1)], 2)
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-1c51db6e"]
                    ]),
                    bt = {
                        class: "dialog"
                    },
                    yt = qe(I(l(l({}, {
                        inheritAttrs: !1
                    }), {}, {
                        __name: "BaseModal",
                        props: {
                            opened: {
                                type: Boolean
                            },
                            closeable: {
                                type: Boolean,
                                default: !0
                            },
                            size: {
                                default: "md"
                            }
                        },
                        emits: ["close"],
                        setup: function(e) {
                            return function(t, n) {
                                return E(), C(z, {
                                    to: "body"
                                }, [V(q, {
                                    name: "modal"
                                }, {
                                    default: Y((function() {
                                        return [e.opened ? (E(), M("div", F({
                                            key: 0,
                                            class: ["modal", e.size]
                                        }, t.$attrs), [U(t.$slots, "dialog", {}, (function() {
                                            return [S("div", bt, [e.closeable ? (E(), M("button", {
                                                key: 0,
                                                class: "close",
                                                onClick: n[0] || (n[0] = function(e) {
                                                    return t.$emit("close")
                                                })
                                            })) : O("", !0), U(t.$slots, "default", {}, void 0, !0)])]
                                        }), !0)], 16)) : O("", !0)]
                                    })),
                                    _: 3
                                })])
                            }
                        }
                    })), [
                        ["__scopeId", "data-v-d8bece60"]
                    ]),
                    wt = {
                        class: "rules-modal"
                    },
                    kt = {
                        class: "header"
                    },
                    xt = {
                        class: "body"
                    },
                    _t = {
                        key: "how-to-play",
                        class: "how-to-play"
                    },
                    It = {
                        class: "container"
                    },
                    Et = ["innerHTML"],
                    Ct = qe(I({
                        __name: "RulesModal",
                        setup: function(e) {
                            var t = Z()
                                .t,
                                n = h(!1),
                                r = h(0),
                                a = g((function() {
                                    return t("tutorialBanners".concat(Le.templateType))
                                        .split(",")
                                })),
                                o = [t("textHowToPlay"), t("textEventRules")];
                            
                            function i() {
                                n.value = !1
                            }
                            return function(e, t) {
                                return E(), M(D, null, [S("div", wt, [S("button", {
                                    class: "btn-rules",
                                    onClick: t[0] || (t[0] = function(e) {
                                        return n.value = !0
                                    })
                                })]), V(yt, {
                                    id: "rules-modal",
                                    size: "xl",
                                    opened: n.value,
                                    onClose: t[1] || (t[1] = function(e) {
                                        return n.value = !1
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", kt, [(E(), M(D, null, j(o, (function(e, t) {
                                            return V(gt, {
                                                key: t,
                                                name: e,
                                                active: r.value === t,
                                                onClick: function(e) {
                                                    return r.value = t
                                                }
                                            }, null, 8, ["name", "active", "onClick"])
                                        })), 64)), S("button", {
                                            class: "btn-close",
                                            onClick: i
                                        })]), S("div", xt, [0 === r.value ? (E(), M("div", _t, [V(mt, {
                                            slides: y(a)
                                        }, null, 8, ["slides"])])) : 1 === r.value ? (E(), C(ht, {
                                            key: "rules",
                                            noscroll: ""
                                        }, {
                                            default: Y((function() {
                                                return [S("div", It, [S("div", {
                                                    class: "rules",
                                                    innerHTML: e.$t("popupRulesContent".concat(y(Le)
                                                        .templateType))
                                                }, null, 8, Et)])]
                                            })),
                                            _: 1
                                        })) : O("", !0)])]
                                    })),
                                    _: 1
                                }, 8, ["opened"])], 64)
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-3a7daeb7"]
                    ]),
                    Mt = {
                        class: "message"
                    },
                    Ot = {
                        class: "platform"
                    },
                    zt = ["href"],
                    Pt = ["href"],
                    Gt = ["href"],
                    Tt = ["href"],
                    Nt = ["href"],
                    Lt = I({
                        __name: "LoginModal",
                        props: {
                            opened: {
                                type: Boolean
                            }
                        },
                        setup: function(e) {
                            var t = Z()
                                .locale,
                                n = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                            
                            function r(e) {
                                var n = d(t.value.split("_"), 1)[0],
                                    r = encodeURIComponent("".concat(window.location.origin, "/")
                                        .concat(n, "/event/"));
                                return "https://auth.garena.com/oauth/login?client_id=100067&response_type=token&platform=".concat(e, "&redirect_uri=")
                                    .concat(r)
                            }
                            return function(t, a) {
                                return E(), C(yt, {
                                    id: "login-modal",
                                    closeable: !1,
                                    opened: e.opened
                                }, {
                                    default: Y((function() {
                                        return [S("div", Mt, A(t.$t("popupLoginMessage")), 1), S("div", Ot, [S("a", {
                                            class: "icon icon-fb",
                                            href: r(3)
                                        }, null, 8, zt), S("a", {
                                            class: "icon icon-vk",
                                            href: r(5)
                                        }, null, 8, Pt), S("a", {
                                            class: "icon icon-google",
                                            href: r(8)
                                        }, null, 8, Gt), y(n) ? (E(), M("a", {
                                            key: 0,
                                            class: "icon icon-apple",
                                            href: r(10)
                                        }, null, 8, Tt)) : O("", !0), S("a", {
                                            class: "icon icon-twitter",
                                            href: r(11)
                                        }, null, 8, Nt)])]
                                    })),
                                    _: 1
                                }, 8, ["opened"])
                            }
                        }
                    }),
                    St = qe(Lt, [
                        ["__scopeId", "data-v-7a6b1920"]
                    ]),
                    At = {
                        class: "message"
                    },
                    Rt = function(e) {
                        return R("data-v-260ae48c"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "platform"
                        }, [S("a", {
                            class: "icon icon-appstore",
                            href: "https://itunes.apple.com/app/id1300146617"
                        }), S("a", {
                            class: "icon icon-playstore",
                            href: "https://play.google.com/store/apps/details?id=com.dts.freefireth"
                        })], -1)
                    })),
                    Bt = qe(I({
                        __name: "DownloadAppModal",
                        props: {
                            opened: {
                                type: Boolean
                            }
                        },
                        setup: function(e) {
                            var t = e;
                            return b((function() {
                                    return t.opened
                                }), (function(e) {
                                    e && localStorage.removeItem("TOKEN")
                                })),
                                function(t, n) {
                                    return E(), C(yt, {
                                        id: "download-app-modal",
                                        closeable: !1,
                                        opened: e.opened
                                    }, {
                                        default: Y((function() {
                                            return [S("div", At, A(t.$t("popupDownloadAppMessage")), 1), Rt]
                                        })),
                                        _: 1
                                    }, 8, ["opened"])
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-260ae48c"]
                    ]),
                    Dt = ["innerHTML"],
                    jt = qe(I({
                        __name: "BaseToast",
                        props: {
                            message: {
                                default: ""
                            },
                            duration: {
                                default: 3e3
                            }
                        },
                        emits: ["close"],
                        setup: function(e, t) {
                            var n = t.emit,
                                r = e,
                                a = N((function() {
                                    return n("close")
                                }), r.duration);
                            return b((function() {
                                    return r.message
                                }), (function(e) {
                                    e && a()
                                })), T((function() {
                                    a.cancel()
                                })),
                                function(t, n) {
                                    return E(), C(z, {
                                        to: "body"
                                    }, [V(q, {
                                        name: "toast"
                                    }, {
                                        default: Y((function() {
                                            return [e.message ? (E(), M("div", {
                                                key: 0,
                                                class: "base-toast",
                                                onClick: n[0] || (n[0] = function(e) {
                                                    return t.$emit("close")
                                                })
                                            }, [S("div", {
                                                class: "message",
                                                innerHTML: e.message
                                            }, null, 8, Dt)])) : O("", !0)]
                                        })),
                                        _: 1
                                    })])
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-48cacb1f"]
                    ]),
                    $t = I({
                        __name: "BaseError",
                        props: {
                            error: null
                        },
                        emits: ["clear"],
                        setup: function(e) {
                            var t = e,
                                n = g((function() {
                                    return "errForbidden" === t.error ? 3 : 2
                                })),
                                r = Z()
                                .t,
                                a = g((function() {
                                    return t.error && 2 === n.value ? r(t.error) : t.error && 3 === n.value ? "Event is under maintenance, please try again later" : ""
                                }));
                            return function(e, t) {
                                return E(), M(D, null, [V(St, {
                                    opened: 0 === y(n),
                                    onClose: t[0] || (t[0] = function(t) {
                                        return e.$emit("clear")
                                    })
                                }, null, 8, ["opened"]), V(Bt, {
                                    opened: 1 === y(n),
                                    onClose: t[1] || (t[1] = function(t) {
                                        return e.$emit("clear")
                                    })
                                }, null, 8, ["opened"]), V(jt, {
                                    message: y(a),
                                    onClose: t[2] || (t[2] = function(t) {
                                        return e.$emit("clear")
                                    })
                                }, null, 8, ["message"])], 64)
                            }
                        }
                    }),
                    Ht = ["src"],
                    Kt = {
                        key: 0,
                        class: "grand"
                    },
                    Ut = {
                        key: 1,
                        class: "quantity"
                    },
                    Vt = {
                        key: 2,
                        class: "popover-text"
                    },
                    Yt = {
                        key: 0,
                        class: "owned-text"
                    },
                    Ft = {
                        key: 1,
                        class: "name"
                    },
                    qt = I({
                        __name: "BasePrize",
                        props: {
                            image: null,
                            quality: null,
                            goal: null,
                            frameInRem: {
                                default: 1.08
                            },
                            name: {
                                default: void 0
                            },
                            isSelected: {
                                type: Boolean,
                                default: !1
                            },
                            isChoosable: {
                                type: Boolean
                            },
                            popover: {
                                type: Boolean,
                                default: !1
                            },
                            owned: {
                                type: Boolean,
                                default: !1
                            },
                            qty: {
                                default: 1
                            },
                            selectionPage: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        setup: function(e) {
                            var t = e;
                            X((function(e) {
                                return {
                                    "6ac437a5": y(n),
                                    "581879b0": y(r)
                                }
                            }));
                            var n = g((function() {
                                    return "".concat(t.frameInRem, "rem")
                                })),
                                r = g((function() {
                                    return "".concat(t.frameInRem, "rem")
                                })),
                                a = h(!1),
                                o = g((function() {
                                    return t.goal === Ne.GOLD
                                })),
                                i = N((function(e) {
                                    e.target.blur()
                                }), 3e3),
                                l = function() {
                                    t.popover && (a.value = !0)
                                },
                                c = function() {
                                    i.cancel(), a.value = !1
                                };
                            return function(t, n) {
                                return E(), M("div", {
                                    class: $(["base-prize", {
                                        owned: e.owned
                                    }])
                                }, [S("div", {
                                    class: $(["image", ["quality-".concat(e.quality), {
                                        glow: e.isSelected
                                    }]]),
                                    tabindex: "-1",
                                    onClick: n[0] || (n[0] = function() {
                                        return y(i) && y(i)
                                            .apply(void 0, arguments)
                                    }),
                                    onFocus: l,
                                    onBlur: c
                                }, [S("img", {
                                    src: e.image
                                }, null, 8, Ht), y(o) && !e.selectionPage ? (E(), M("div", Kt)) : O("", !0), e.qty > 1 ? (E(), M("div", Ut, "x" + A(e.qty), 1)) : O("", !0), e.name && a.value ? (E(), M("div", Vt, A(e.name), 1)) : O("", !0)], 34), e.owned ? (E(), M("div", Yt, A(t.$t("textOwned")), 1)) : O("", !0), e.name && !e.popover ? (E(), M("div", Ft, A(e.name), 1)) : O("", !0)], 2)
                            }
                        }
                    }),
                    Zt = qe(qt, [
                        ["__scopeId", "data-v-586f48a5"]
                    ]),
                    Xt = {
                        class: "history-modal"
                    },
                    Wt = {
                        class: "header"
                    },
                    Qt = {
                        class: "body"
                    },
                    Jt = {
                        class: "table-container"
                    },
                    en = {
                        class: "row head"
                    },
                    tn = {
                        class: "rows-container"
                    },
                    nn = {
                        class: "col"
                    },
                    rn = {
                        class: "timestamp"
                    },
                    an = {
                        class: "col"
                    },
                    on = {
                        class: "cost"
                    },
                    ln = {
                        class: "col"
                    },
                    cn = {
                        class: "col"
                    },
                    sn = {
                        class: "name"
                    },
                    un = {
                        class: "col"
                    },
                    dn = ["innerHTML"],
                    fn = {
                        key: 1,
                        class: "message"
                    },
                    mn = I({
                        __name: "HistoryModal",
                        setup: function(e) {
                            var t = h(!1),
                                n = et(),
                                r = n.loading,
                                a = n.withLoading,
                                i = Qe(),
                                c = i.error,
                                s = i.catchError,
                                d = i.clearError,
                                f = Z()
                                .t,
                                m = g((function() {
                                    return f("popupHistoryCols")
                                        .split(",")
                                })),
                                p = h(0),
                                v = g((function() {
                                    var e = [];
                                    return Ue.txns.forEach((function(t) {
                                        e.push({
                                            ts: t.ts,
                                            cost: t.cost,
                                            amount: 1,
                                            prizes: t.draws.map((function(e) {
                                                return l(l({}, Oe.value[e.id]), {}, {
                                                    isFallback: e.isFallback
                                                })
                                            }))
                                        })
                                    })), e
                                })),
                                b = g((function() {
                                    var e = [];
                                    return Ue.exchanges.forEach((function(t) {
                                        e.push({
                                            ts: t.ts,
                                            cost: t.tokenCost,
                                            amount: t.amount,
                                            prizes: [Oe.value[t.id]]
                                        })
                                    })), e
                                })),
                                w = g((function() {
                                    return p.value ? b.value : v.value
                                })),
                                k = a(s(u(o()
                                    .mark((function e() {
                                        return o()
                                            .wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Ve();
                                                    case 2:
                                                        t.value = !0;
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                    })))));
                            return function(e, n) {
                                return E(), M(D, null, [S("div", Xt, [S("button", {
                                    class: "btn-history",
                                    onClick: n[0] || (n[0] = function() {
                                        return y(k) && y(k)
                                            .apply(void 0, arguments)
                                    })
                                })]), V($t, {
                                    error: y(c),
                                    onClear: y(d)
                                }, null, 8, ["error", "onClear"]), V(yt, {
                                    id: "history-modal",
                                    opened: t.value,
                                    size: "xl",
                                    onClose: n[3] || (n[3] = function(e) {
                                        return t.value = !1
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", Wt, [S("button", {
                                                class: $({
                                                    active: 0 === p.value
                                                }),
                                                onClick: n[1] || (n[1] = function(e) {
                                                    return p.value = 0
                                                })
                                            }, A(e.$t("textHistoryDraw")), 3), "2.1" !== y(Le)
                                            .templateType ? (E(), M("button", {
                                                key: 0,
                                                class: $({
                                                    active: 1 === p.value
                                                }),
                                                onClick: n[2] || (n[2] = function(e) {
                                                    return p.value = 1
                                                })
                                            }, A(e.$t("textHistoryStore")), 3)) : O("", !0)
                                        ]), S("div", Qt, [S("div", Jt, [S("div", en, [(E(!0), M(D, null, j(y(m), (function(e, t) {
                                                return E(), M("div", {
                                                    key: t,
                                                    class: "col"
                                                }, A(e), 1)
                                            })), 128))]), y(w)
                                            .length ? (E(), C(ht, {
                                                key: 0
                                            }, {
                                                default: Y((function() {
                                                    return [S("div", tn, [(E(!0), M(D, null, j(y(w), (function(t, n) {
                                                        return E(), M("div", {
                                                            key: n,
                                                            class: "row"
                                                        }, [S("div", nn, [S("div", rn, A(new Date(1e3 * t.ts)
                                                            .toLocaleString(e.$i18n.locale, {
                                                                day: "2-digit",
                                                                month: "short",
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                                hour12: !1
                                                            })), 1)]), S("div", an, [S("div", on, [S("i", {
                                                            class: $("gem".concat(p.value))
                                                        }, null, 2), W(" " + A(t.cost), 1)])]), S("div", ln, [(E(!0), M(D, null, j(t.prizes, (function(e, t) {
                                                            return E(), M("div", {
                                                                key: t,
                                                                class: "prize"
                                                            }, [V(Zt, F(e, {
                                                                name: void 0,
                                                                "frame-in-rem": 1
                                                            }), null, 16)])
                                                        })), 128))]), S("div", cn, [(E(!0), M(D, null, j(t.prizes, (function(e, n) {
                                                            return E(), M("div", {
                                                                key: n,
                                                                class: "prize"
                                                            }, [S("div", sn, [W(A(e.name) + " ", 1), t.amount > 1 ? (E(), M(D, {
                                                                key: 0
                                                            }, [W(" X" + A(t.amount), 1)], 64)) : O("", !0)])])
                                                        })), 128))]), S("div", un, [(E(!0), M(D, null, j(t.prizes, (function(t, n) {
                                                            return E(), M("div", {
                                                                key: n,
                                                                class: "remarks"
                                                            }, [S("span", {
                                                                innerHTML: t.isFallback ? e.$t("popupHistoryToken", {
                                                                    qty: t.fallbackTokens
                                                                }) : "-"
                                                            }, null, 8, dn)])
                                                        })), 128))])])
                                                    })), 128))])]
                                                })),
                                                _: 1
                                            })) : (E(), M("div", fn, A(e.$t("popupHistoryEmptyMessage")), 1))
                                        ])])]
                                    })),
                                    _: 1
                                }, 8, ["opened"]), V(We, {
                                    loading: y(r)
                                }, null, 8, ["loading"])], 64)
                            }
                        }
                    }),
                    pn = qe(mn, [
                        ["__scopeId", "data-v-aed4f946"]
                    ]),
                    vn = qe(I({
                        __name: "AudioControls",
                        setup: function(e) {
                            var t = tt("MUTED", !1);
                            
                            function n() {
                                "visible" !== document.visibilityState || t.value ? Q.Howler.mute(!0) : Q.Howler.mute(!1)
                            }
                            return b(t, (function(e) {
                                    return Q.Howler.mute(e)
                                }), {
                                    immediate: !0
                                }), G((function() {
                                    document.addEventListener("visibilitychange", n), new Q.Howl({
                                        src: [ke.value.AUD_BGM],
                                        autoplay: !0,
                                        loop: !0,
                                        volume: .5
                                    })
                                })), T((function() {
                                    document.removeEventListener("visibilitychange", n), Q.Howler.unload()
                                })),
                                function(e, n) {
                                    return y(t) ? (E(), M("button", {
                                        key: 0,
                                        class: "bgm btn-unmute",
                                        onClick: n[0] || (n[0] = function(e) {
                                            return t.value = !1
                                        })
                                    })) : (E(), M("button", {
                                        key: 1,
                                        class: "bgm btn-mute",
                                        onClick: n[1] || (n[1] = function(e) {
                                            return t.value = !0
                                        })
                                    }))
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-55221558"]
                    ]),
                    hn = {
                        class: "banner"
                    },
                    gn = {
                        class: "profile"
                    },
                    bn = {
                        class: "uid"
                    },
                    yn = {
                        class: "balance"
                    },
                    wn = function(e) {
                        return R("data-v-052e169e"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "top-divider"
                        }, null, -1)
                    })),
                    kn = qe(I({
                        __name: "Banner",
                        setup: function(e) {
                            return function(e, t) {
                                return E(), M("div", hn, [S("div", gn, [S("div", bn, A(y(Le)
                                    .uid), 1), S("div", yn, A(y(Le)
                                    .wallet), 1)]), wn])
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-052e169e"]
                    ]),
                    xn = {
                        class: "header"
                    },
                    _n = {
                        class: "body"
                    },
                    In = {
                        class: "message"
                    },
                    En = {
                        class: "prize-section"
                    },
                    Cn = {
                        key: 1
                    },
                    Mn = {
                        key: 2,
                        class: "actions"
                    },
                    On = {
                        class: "gem-cost"
                    },
                    zn = function(e) {
                        return R("data-v-f20aab22"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    Pn = {
                        class: "cost"
                    },
                    Gn = I({
                        __name: "ResultModal",
                        props: {
                            items: null,
                            isBatch: {
                                type: Boolean,
                                default: !1
                            },
                            exchangeAmount: {
                                default: 0
                            },
                            title: {
                                default: void 0
                            }
                        },
                        emits: ["kickAgain", "close"],
                        setup: function(e) {
                            var t = e,
                                n = g((function() {
                                    return t.exchangeAmount > 1 ? " X".concat(t.exchangeAmount) : ""
                                })),
                                r = g((function() {
                                    return Me.drawCosts[0]
                                })),
                                a = g((function() {
                                    return Me.drawCosts[1]
                                }));
                            return function(t, o) {
                                return E(), C(yt, {
                                    id: "result-modal",
                                    opened: e.items.length > 0,
                                    onClose: o[4] || (o[4] = function(e) {
                                        return t.$emit("close")
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", xn, A(e.title || t.$t("popupResultTitle")), 1), S("div", _n, [S("div", In, A(t.$t("popupResultMessage")), 1), S("div", En, [(E(!0), M(D, null, j(e.items, (function(t, r) {
                                                return E(), C(Zt, F({
                                                    key: r,
                                                    frameInRem: 1.7,
                                                    popover: e.items.length > 1
                                                }, t, {
                                                    name: "".concat(t.name)
                                                        .concat(y(n))
                                                }), null, 16, ["frameInRem", "popover", "name"])
                                            })), 128))]), y(Le)
                                            .chosenGP ? e.exchangeAmount > 0 ? (E(), M("div", Cn, [S("button", {
                                                class: "confirm",
                                                onClick: o[1] || (o[1] = function(e) {
                                                    return t.$emit("close")
                                                })
                                            }, A(t.$t("btnConfirm")), 1)])) : (E(), M("div", Mn, [S("button", {
                                                class: "kick-again",
                                                onClick: o[2] || (o[2] = function(e) {
                                                    return t.$emit("kickAgain")
                                                })
                                            }, [W(A(t.$t("btnKickAgain", {
                                                num: e.isBatch ? 5 : 1
                                            })) + " ", 1), S("div", On, [zn, S("div", Pn, A(e.isBatch ? y(a) : y(r)), 1)])]), S("button", {
                                                class: "ok",
                                                onClick: o[3] || (o[3] = function(e) {
                                                    return t.$emit("close")
                                                })
                                            }, A(t.$t("btnOk")), 1)])) : (E(), M("button", {
                                                key: 0,
                                                class: "select-gp",
                                                onClick: o[0] || (o[0] = function(e) {
                                                    return t.$emit("close")
                                                })
                                            }, A(t.$t("btnSelectGP")), 1))
                                        ])]
                                    })),
                                    _: 1
                                }, 8, ["opened"])
                            }
                        }
                    }),
                    Tn = qe(Gn, [
                        ["__scopeId", "data-v-f20aab22"]
                    ]),
                    Nn = {
                        class: "base-checkbox"
                    },
                    Ln = ["checked"],
                    Sn = function(e) {
                        return R("data-v-09dbaa3c"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "checkmark"
                        }, null, -1)
                    })),
                    An = I({
                        __name: "BaseCheckbox",
                        props: {
                            modelValue: {
                                type: Boolean
                            },
                            label: {
                                default: ""
                            }
                        },
                        emits: ["update:modelValue"],
                        setup: function(e, t) {
                            var n = t.emit;
                            
                            function r(e) {
                                var t = e.target;
                                n("update:modelValue", t.checked)
                            }
                            return function(t, n) {
                                return E(), M("label", Nn, [S("input", {
                                    type: "checkbox",
                                    checked: e.modelValue,
                                    onChange: r
                                }, null, 40, Ln), Sn, U(t.$slots, "default", {}, (function() {
                                    return [W(A(e.label), 1)]
                                }), !0)])
                            }
                        }
                    }),
                    Rn = qe(An, [
                        ["__scopeId", "data-v-09dbaa3c"]
                    ]),
                    Bn = {
                        class: "body"
                    },
                    Dn = {
                        class: "confirmation-text"
                    },
                    jn = {
                        key: 0,
                        class: "actions"
                    },
                    $n = {
                        class: "current-qty"
                    },
                    Hn = function(e) {
                        return R("data-v-d34b6a28"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "soccer-token"
                        }, null, -1)
                    })),
                    Kn = {
                        class: "cost"
                    },
                    Un = qe(I({
                        __name: "ExchangeConfirmModal",
                        props: {
                            cost: null,
                            prize: null,
                            storePrize: null,
                            opened: {
                                type: Boolean
                            }
                        },
                        emits: ["close", "confirm"],
                        setup: function(e) {
                            var t = e,
                                n = h(!1),
                                r = h(1),
                                a = g((function() {
                                    var e;
                                    return (null === (e = Se.value[t.storePrize.id]) || void 0 === e ? void 0 : e.amount) || 0
                                })),
                                o = g((function() {
                                    var e = Math.floor(Le.tokens / t.cost),
                                        n = t.storePrize.limit;
                                    return n > 0 ? Math.min(e, n - a.value) : e
                                })),
                                i = function(e) {
                                    r.value = Math.max(1, r.value - e)
                                },
                                l = function(e) {
                                    r.value = Math.min(o.value, r.value + e)
                                };
                            return b((function() {
                                    return t.opened
                                }), (function(e) {
                                    e || (r.value = 1)
                                })),
                                function(t, a) {
                                    return E(), C(yt, {
                                        id: "exchange-confirmation-modal",
                                        opened: e.opened,
                                        size: "md",
                                        onClose: a[6] || (a[6] = function(e) {
                                            return t.$emit("close")
                                        })
                                    }, {
                                        default: Y((function() {
                                            return [S("div", Bn, [S("div", Dn, A(t.$t("textExchangeConfirmation", {
                                                name: e.prize.name
                                            })), 1), V(Zt, F({
                                                frameInRem: 1.9,
                                                popover: !0
                                            }, e.prize), null, 16, ["frameInRem"]), 1 !== e.storePrize.limit ? (E(), M("div", jn, [S("button", {
                                                class: $(["minus-ten", {
                                                    invalid: r.value < 2
                                                }]),
                                                onClick: a[0] || (a[0] = function(e) {
                                                    return i(10)
                                                })
                                            }, A(t.$t("textMinusCtr", {
                                                num: 10
                                            })), 3), S("button", {
                                                class: $(["minus-one", {
                                                    invalid: r.value < 2
                                                }]),
                                                onClick: a[1] || (a[1] = function(e) {
                                                    return i(1)
                                                })
                                            }, A(t.$t("textMinusCtr", {
                                                num: 1
                                            })), 3), S("div", $n, A(r.value), 1), S("button", {
                                                class: $(["plus-one", {
                                                    invalid: r.value >= y(o)
                                                }]),
                                                onClick: a[2] || (a[2] = function(e) {
                                                    return l(1)
                                                })
                                            }, A(t.$t("textPlusCtr", {
                                                num: 1
                                            })), 3), S("button", {
                                                class: $(["plus-ten", {
                                                    invalid: r.value >= y(o)
                                                }]),
                                                onClick: a[3] || (a[3] = function(e) {
                                                    return l(10)
                                                })
                                            }, A(t.$t("textPlusCtr", {
                                                num: 10
                                            })), 3)])) : O("", !0), S("button", {
                                                class: "confirm",
                                                onClick: a[4] || (a[4] = function(e) {
                                                    return t.$emit("confirm", n.value, r.value)
                                                })
                                            }, [Hn, S("div", Kn, A(e.cost * r.value), 1)]), 1 === e.storePrize.limit ? (E(), C(Rn, {
                                                key: 1,
                                                modelValue: n.value,
                                                "onUpdate:modelValue": a[5] || (a[5] = function(e) {
                                                    return n.value = e
                                                }),
                                                label: t.$t("skipConfirmationMessage")
                                            }, null, 8, ["modelValue", "label"])) : O("", !0)])]
                                        })),
                                        _: 1
                                    }, 8, ["opened"])
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-d34b6a28"]
                    ]),
                    Vn = function(e) {
                        return R("data-v-bfbdc574"), e = e(), B(), e
                    },
                    Yn = {
                        class: "header"
                    },
                    Fn = {
                        class: "header-text"
                    },
                    qn = {
                        class: "token-wallet"
                    },
                    Zn = Vn((function() {
                        return S("div", {
                            class: "token-img"
                        }, null, -1)
                    })),
                    Xn = {
                        class: "body"
                    },
                    Wn = {
                        key: 0,
                        class: "amount"
                    },
                    Qn = ["onClick"],
                    Jn = Vn((function() {
                        return S("div", {
                            class: "soccer-token"
                        }, null, -1)
                    })),
                    er = {
                        class: "cost"
                    },
                    tr = I({
                        __name: "ExchangeStoreModal",
                        props: {
                            isOpened: {
                                type: Boolean
                            }
                        },
                        emits: ["close", "selectgp"],
                        setup: function(e) {
                            var n = h(!1),
                                r = h(0),
                                i = h(0),
                                c = h(0),
                                s = h(0),
                                d = h([]),
                                f = tt("SKIP_EXCHANGE_CONFIRMATION", !1),
                                m = et(),
                                p = m.loading,
                                v = m.withLoading,
                                b = Qe(),
                                w = b.error,
                                k = b.catchError,
                                x = b.clearError,
                                _ = g((function() {
                                    return Me.store.map((function(e) {
                                        var t = Oe.value[e.prizeId];
                                        return l(l({}, e), {}, {
                                            prize: t
                                        })
                                    }))
                                })),
                                I = function(e) {
                                    var t, n = (null === (t = Se.value[e.id]) || void 0 === t ? void 0 : t.amount) || 0;
                                    return e.limit - n
                                },
                                z = function(e) {
                                    return 1 === e.limit && (Le.ownedPrizes.includes(e.prizeId) || 0 === I(e))
                                },
                                P = v(k(function() {
                                    var e = u(o()
                                        .mark((function e(t, a) {
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (f.value = t, n.value = !1, !(Le.tokens < s.value * a)) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            throw new Error("lowTokenBalance");
                                                        case 4:
                                                            return e.next = 6, $e(c.value, s.value * a, a);
                                                        case 6:
                                                            d.value = e.sent, r.value = a;
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                G = k(function() {
                                    var e = u(o()
                                        .mark((function e(t) {
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (i.value = t, c.value = ze.value[t].id, s.value = ze.value[t].tokenCost, !f.value || 1 !== ze.value[t].limit) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return e.next = 6, P(!0, 1);
                                                        case 6:
                                                            e.next = 11;
                                                            break;
                                                        case 8:
                                                            if (!(Le.tokens < s.value)) {
                                                                e.next = 10;
                                                                break
                                                            }
                                                            throw new Error("lowTokenBalance");
                                                        case 10:
                                                            n.value = !0;
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            
                            function T() {
                                r.value = 0, d.value = [], Ae.value || So("selection")
                            }
                            return function(o, l) {
                                return E(), C(yt, {
                                    id: "exchange-store-modal",
                                    opened: e.isOpened,
                                    size: "lg",
                                    onClose: l[1] || (l[1] = function(e) {
                                        return o.$emit("close")
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", Yn, [S("div", Fn, A(o.$t("popupExchangeStore")), 1), S("div", qn, A(y(Le)
                                            .tokens), 1), Zn]), V(ht, null, {
                                            default: Y((function() {
                                                return [S("div", Xn, [(E(!0), M(D, null, j(y(_), (function(e, n) {
                                                    var r = e.prize,
                                                        o = a(e, t);
                                                    return E(), M("div", {
                                                        key: n,
                                                        class: $(["prize", {
                                                            owned: z(o) || 0 === I(o)
                                                        }])
                                                    }, [V(Zt, F({
                                                        frameInRem: 1.95,
                                                        popover: !0
                                                    }, r, {
                                                        owned: z(o)
                                                    }), null, 16, ["frameInRem", "owned"]), o.limit > 1 ? (E(), M("div", Wn, A(I(o)) + "/" + A(o.limit), 1)) : O("", !0), S("button", {
                                                        class: "claim-btn",
                                                        onClick: function(e) {
                                                            return y(G)(r.id)
                                                        }
                                                    }, [Jn, S("div", er, A(o.tokenCost), 1)], 8, Qn)], 2)
                                                })), 128))])]
                                            })),
                                            _: 1
                                        }), V(Un, {
                                            opened: n.value,
                                            prize: y(Oe)[i.value],
                                            cost: s.value,
                                            storePrize: y(ze)[i.value],
                                            onConfirm: y(P),
                                            onClose: l[0] || (l[0] = function(e) {
                                                return n.value = !1
                                            })
                                        }, null, 8, ["opened", "prize", "cost", "storePrize", "onConfirm"]), V($t, {
                                            error: y(w),
                                            onClear: y(x)
                                        }, null, 8, ["error", "onClear"]), V(Tn, {
                                            items: d.value,
                                            "exchange-amount": r.value,
                                            onClose: T
                                        }, null, 8, ["items", "exchange-amount"]), V(We, {
                                            loading: y(p)
                                        }, null, 8, ["loading"])]
                                    })),
                                    _: 1
                                }, 8, ["opened"])
                            }
                        }
                    }),
                    nr = qe(tr, [
                        ["__scopeId", "data-v-bfbdc574"]
                    ]),
                    rr = {
                        class: "exchange-store"
                    },
                    ar = {
                        class: "tokens"
                    },
                    or = function(e) {
                        return R("data-v-17eaef88"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "soccer-token"
                        }, null, -1)
                    })),
                    ir = {
                        class: "token-ctr"
                    },
                    lr = I({
                        __name: "ExchangeStore",
                        setup: function(e) {
                            var t = h(!1),
                                n = g((function() {
                                    return "1.0" === Le.templateType || "1.1" === Le.templateType ? "engaging" : "minimal"
                                })),
                                r = g((function() {
                                    return Math.max(0, Ee.end - Le.now)
                                })),
                                a = function() {
                                    Le.now += 1
                                },
                                o = g((function() {
                                    return r.value < 86400
                                }));
                            return G((function() {
                                    return function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                                            n = 0;
                                        
                                        function r() {
                                            window.clearInterval(n), n = 0
                                        }
                                        
                                        function a() {
                                            n = window.setInterval(e, t)
                                        }
                                        return L((function(e) {
                                            e(r), a()
                                        }))
                                    }(a)
                                })),
                                function(e, r) {
                                    return E(), M("div", rr, [S("button", {
                                        class: $(["btn-exchange-store", {
                                            minimal: "minimal" === y(n),
                                            ending: y(o)
                                        }]),
                                        onClick: r[0] || (r[0] = function(e) {
                                            return t.value = !0
                                        })
                                    }, [W(A(e.$t("btnExchangeStore")) + " ", 1), S("div", ar, [or, S("div", ir, A(y(Le)
                                        .tokens), 1)])], 2), V(nr, {
                                        isOpened: t.value,
                                        onClose: r[1] || (r[1] = function(e) {
                                            return t.value = !1
                                        })
                                    }, null, 8, ["isOpened"])])
                                }
                        }
                    }),
                    cr = qe(lr, [
                        ["__scopeId", "data-v-17eaef88"]
                    ]),
                    sr = qe(I({
                        __name: "Sidebar",
                        props: {
                            minimal: {
                                type: Boolean
                            }
                        },
                        setup: function(e) {
                            return function(t, n) {
                                return E(), M("div", {
                                    class: $(["sidebar", {
                                        minimal: e.minimal
                                    }])
                                }, [U(t.$slots, "default", {}, void 0, !0)], 2)
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-0848a261"]
                    ]),
                    ur = {
                        class: "header"
                    },
                    dr = {
                        class: "body"
                    },
                    fr = I({
                        __name: "PrizeListModal",
                        props: {
                            isOpened: {
                                type: Boolean
                            }
                        },
                        emits: ["close"],
                        setup: function(e) {
                            var t = g((function() {
                                return Me.prizes.filter((function(e) {
                                    return !(e.goal === Ne.GOLD && !e.isChoosable) && e.goal !== Ne.STORE
                                }))
                            }));
                            return function(n, r) {
                                return E(), C(yt, {
                                    id: "prizelist-modal",
                                    opened: e.isOpened,
                                    size: "lg",
                                    onClose: r[0] || (r[0] = function(e) {
                                        return n.$emit("close")
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", ur, A(n.$t("textPrizeList")), 1), V(ht, null, {
                                            default: Y((function() {
                                                return [S("div", dr, [(E(!0), M(D, null, j(y(t), (function(e, t) {
                                                    return E(), M("div", {
                                                        key: t,
                                                        class: "prize"
                                                    }, [V(Zt, F({
                                                        frameInRem: 1.95,
                                                        popover: !0
                                                    }, e, {
                                                        owned: y(Be)(e)
                                                    }), null, 16, ["frameInRem", "owned"])])
                                                })), 128))])]
                                            })),
                                            _: 1
                                        })]
                                    })),
                                    _: 1
                                }, 8, ["opened"])
                            }
                        }
                    }),
                    mr = qe(fr, [
                        ["__scopeId", "data-v-a3e30182"]
                    ]),
                    pr = {
                        class: "body"
                    },
                    vr = {
                        key: 0,
                        class: "confirmation-text"
                    },
                    hr = {
                        key: 1,
                        class: "confirmation-text"
                    },
                    gr = {
                        class: "actions"
                    },
                    br = function(e) {
                        return R("data-v-c5be676a"), e = e(), B(), e
                    }((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    yr = {
                        class: "cost"
                    },
                    wr = qe(I({
                        __name: "ConfirmModal",
                        props: {
                            cost: null,
                            opened: {
                                type: Boolean
                            },
                            isBatch: {
                                type: Boolean
                            }
                        },
                        emits: ["close", "confirm"],
                        setup: function(e) {
                            var t = h(!1);
                            return function(n, r) {
                                return E(), C(yt, {
                                    id: "confirm-modal",
                                    opened: e.opened,
                                    size: "md",
                                    onClose: r[2] || (r[2] = function(e) {
                                        return n.$emit("close")
                                    })
                                }, {
                                    default: Y((function() {
                                        return [S("div", pr, [e.isBatch ? (E(), M("div", vr, A(n.$t("textBatchConfirmation", {
                                            n: 5
                                        })), 1)) : (E(), M("div", hr, A(n.$t("textConfirmation", {
                                            n: 1
                                        })), 1)), S("div", gr, [S("button", {
                                            class: "confirm",
                                            onClick: r[0] || (r[0] = function(e) {
                                                return n.$emit("confirm", t.value)
                                            })
                                        }, [br, S("div", yr, A(e.cost), 1)])]), V(Rn, {
                                            modelValue: t.value,
                                            "onUpdate:modelValue": r[1] || (r[1] = function(e) {
                                                return t.value = e
                                            }),
                                            label: n.$t("skipConfirmationMessage")
                                        }, null, 8, ["modelValue", "label"])])]
                                    })),
                                    _: 1
                                }, 8, ["opened"])
                            }
                        }
                    }), [
                        ["__scopeId", "data-v-c5be676a"]
                    ]),
                    kr = function(e) {
                        return R("data-v-24050c42"), e = e(), B(), e
                    },
                    xr = {
                        class: "minimal-view"
                    },
                    _r = {
                        class: "goalkick"
                    },
                    Ir = {
                        class: "goalpost"
                    },
                    Er = {
                        key: 0,
                        class: "msg"
                    },
                    Cr = {
                        key: 1,
                        class: "gp"
                    },
                    Mr = ["src"],
                    Or = {
                        class: "name"
                    },
                    zr = {
                        key: 0,
                        class: "qty"
                    },
                    Pr = {
                        class: "actions"
                    },
                    Gr = {
                        class: "gem-cost"
                    },
                    Tr = kr((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    Nr = {
                        class: "cost-text"
                    },
                    Lr = {
                        class: "gem-cost"
                    },
                    Sr = kr((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    Ar = {
                        class: "cost-text"
                    },
                    Rr = {
                        class: "reselect-text"
                    },
                    Br = ["poster"],
                    Dr = ["src"],
                    jr = ["src"],
                    $r = I({
                        __name: "MinimalView",
                        emits: ["selectgp"],
                        setup: function(e, t) {
                            var n = t.emit,
                                r = tt("DRAW_TYPE", 0),
                                a = h(!1),
                                i = h(!1),
                                l = tt("SKIP_CONFIRM", !1),
                                c = tt("SKIP_ANIM", !1),
                                s = h(!1),
                                d = h([]),
                                f = g((function() {
                                    return 1 === r.value ? Ge.value : Pe.value
                                })),
                                m = Qe(),
                                p = m.error,
                                v = m.catchError,
                                b = m.clearError,
                                w = et(),
                                k = w.loading,
                                x = (0, w.withLoading)(v(function() {
                                    var e = u(o()
                                        .mark((function e(t) {
                                            var n;
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!(Le.wallet < f.value)) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            throw new Error("lowBalance");
                                                        case 2:
                                                            return e.next = 4, je(r.value, f.value, c.value);
                                                        case 4:
                                                            if (n = e.sent, a.value = !1, l.value = t, k.value = 3, c.value) {
                                                                e.next = 13;
                                                                break
                                                            }
                                                            return s.value = !0, e.next = 12, me(1600);
                                                        case 12:
                                                            s.value = !1;
                                                        case 13:
                                                            if (!n.prizes.some((function(e) {
                                                                    return e.goal === Ne.GOLD
                                                                }))) {
                                                                e.next = 17;
                                                                break
                                                            }
                                                            return k.value = 2, e.next = 17, me(1500);
                                                        case 17:
                                                            Le.chosenGP = n.chosenGP, d.value = n.prizes;
                                                        case 19:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                _ = function() {
                                    var e = u(o()
                                        .mark((function e(t) {
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (d.value = [], r.value = t, l.value) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return a.value = !0, e.abrupt("return");
                                                        case 5:
                                                            return e.next = 7, x(!0);
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                I = function() {
                                    d.value = [], Ae.value || n("selectgp")
                                };
                            return function(e, t) {
                                return E(), M("div", xr, [V(sr, {
                                        minimal: ""
                                    }), S("div", _r, [S("div", Ir, [0 === y(Re) && "2.1" === y(Le)
                                        .templateType ? (E(), M("div", Er, A(e.$t("textWonAllGP")), 1)) : y(Ae) ? (E(), M("div", Cr, [S("img", {
                                                src: y(Ae)
                                                    .gpImage || y(Ae)
                                                    .image
                                            }, null, 8, Mr), S("div", Or, A(y(Ae)
                                                .name), 1), y(Ae)
                                            .qty > 1 ? (E(), M("div", zr, "X" + A(y(Ae)
                                                .qty), 1)) : O("", !0)
                                        ])) : O("", !0)
                                    ]), S("div", Pr, [S("button", {
                                        class: "btn-draw",
                                        onClick: t[0] || (t[0] = function(e) {
                                            return _(y(0))
                                        })
                                    }, [W(A(e.$t("btnDraw", {
                                        n: 1
                                    })) + " ", 1), S("div", Gr, [Tr, S("div", Nr, A(y(Pe)), 1)])]), S("button", {
                                        class: "btn-draw batch",
                                        onClick: t[1] || (t[1] = function(e) {
                                            return _(y(1))
                                        })
                                    }, [W(A(e.$t("btnDraw", {
                                        n: 5
                                    })) + " ", 1), S("div", Lr, [Sr, S("div", Ar, A(y(Ge)), 1)])])])]), V(Rn, {
                                        modelValue: y(c),
                                        "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                                            return J(c) ? c.value = e : null
                                        }),
                                        label: e.$t("textSkipAnim")
                                    }, null, 8, ["modelValue", "label"]), "2.1" !== y(Le)
                                    .templateType ? (E(), C(cr, {
                                        key: 0
                                    })) : O("", !0), S("button", {
                                        class: "prize-list-btn",
                                        onClick: t[3] || (t[3] = function(e) {
                                            return i.value = !0
                                        })
                                    }, A(e.$t("textViewPrizes")), 1), V(mr, {
                                        isOpened: i.value,
                                        onClose: t[4] || (t[4] = function(e) {
                                            return i.value = !1
                                        })
                                    }, null, 8, ["isOpened"]), "1.1" !== y(Le)
                                    .templateType ? (E(), M("button", {
                                        key: 1,
                                        class: $(["reselectGP", {
                                            grey: 0 === y(Re)
                                        }]),
                                        onClick: t[5] || (t[5] = function(t) {
                                            return e.$emit("selectgp")
                                        })
                                    }, [S("div", Rr, A(e.$t("textReselectGP")), 1)], 2)) : O("", !0), ee(S("video", {
                                        class: "anim",
                                        autoplay: "",
                                        playsinline: "",
                                        loop: "",
                                        muted: "",
                                        poster: e.$assets.VID_SUPER_KICK_ANIMATION
                                    }, [S("source", {
                                        type: "video/webm",
                                        src: e.$assets.VID_SUPER_KICK_ANIMATION_WEBM
                                    }, null, 8, Dr), S("source", {
                                        type: "video/mp4",
                                        src: e.$assets.VID_SUPER_KICK_ANIMATION_MP4
                                    }, null, 8, jr)], 8, Br), [
                                        [te, s.value]
                                    ]), V($t, {
                                        error: y(p),
                                        onClear: y(b)
                                    }, null, 8, ["error", "onClear"]), V(Tn, {
                                        items: d.value,
                                        isBatch: y(r) === y(1),
                                        onClose: I,
                                        onKickAgain: t[6] || (t[6] = function(e) {
                                            return _(y(r))
                                        })
                                    }, null, 8, ["items", "isBatch"]), V(wr, {
                                        cost: y(f),
                                        opened: a.value,
                                        isBatch: y(r) === y(1),
                                        onClose: t[7] || (t[7] = function(e) {
                                            return a.value = !1
                                        }),
                                        onConfirm: y(x)
                                    }, null, 8, ["cost", "opened", "isBatch", "onConfirm"]), V(We, {
                                        loading: y(k)
                                    }, null, 8, ["loading"])
                                ])
                            }
                        }
                    }),
                    Hr = qe($r, [
                        ["__scopeId", "data-v-24050c42"]
                    ]),
                    Kr = {
                        update: null,
                        begin: null,
                        loopBegin: null,
                        changeBegin: null,
                        change: null,
                        changeComplete: null,
                        loopComplete: null,
                        complete: null,
                        loop: 1,
                        direction: "normal",
                        autoplay: !0,
                        timelineOffset: 0
                    },
                    Ur = {
                        duration: 1e3,
                        delay: 0,
                        endDelay: 0,
                        easing: "easeOutElastic(1, .5)",
                        round: 0
                    },
                    Vr = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
                    Yr = {
                        CSS: {},
                        springs: {}
                    };
                
                function Fr(e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }
                
                function qr(e, t) {
                    return e.indexOf(t) > -1
                }
                
                function Zr(e, t) {
                    return e.apply(null, t)
                }
                var Xr = {
                    arr: function(e) {
                        return Array.isArray(e)
                    },
                    obj: function(e) {
                        return qr(Object.prototype.toString.call(e), "Object")
                    },
                    pth: function(e) {
                        return Xr.obj(e) && e.hasOwnProperty("totalLength")
                    },
                    svg: function(e) {
                        return e instanceof SVGElement
                    },
                    inp: function(e) {
                        return e instanceof HTMLInputElement
                    },
                    dom: function(e) {
                        return e.nodeType || Xr.svg(e)
                    },
                    str: function(e) {
                        return "string" == typeof e
                    },
                    fnc: function(e) {
                        return "function" == typeof e
                    },
                    und: function(e) {
                        return void 0 === e
                    },
                    nil: function(e) {
                        return Xr.und(e) || null === e
                    },
                    hex: function(e) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                    },
                    rgb: function(e) {
                        return /^rgb/.test(e)
                    },
                    hsl: function(e) {
                        return /^hsl/.test(e)
                    },
                    col: function(e) {
                        return Xr.hex(e) || Xr.rgb(e) || Xr.hsl(e)
                    },
                    key: function(e) {
                        return !Kr.hasOwnProperty(e) && !Ur.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
                    }
                };
                
                function Wr(e) {
                    var t = /\(([^)]+)\)/.exec(e);
                    return t ? t[1].split(",")
                        .map((function(e) {
                            return parseFloat(e)
                        })) : []
                }
                
                function Qr(e, t) {
                    var n = Wr(e),
                        r = Fr(Xr.und(n[0]) ? 1 : n[0], .1, 100),
                        a = Fr(Xr.und(n[1]) ? 100 : n[1], .1, 100),
                        o = Fr(Xr.und(n[2]) ? 10 : n[2], .1, 100),
                        i = Fr(Xr.und(n[3]) ? 0 : n[3], .1, 100),
                        l = Math.sqrt(a / r),
                        c = o / (2 * Math.sqrt(a * r)),
                        s = c < 1 ? l * Math.sqrt(1 - c * c) : 0,
                        u = c < 1 ? (c * l - i) / s : -i + l;
                    
                    function d(e) {
                        var n = t ? t * e / 1e3 : e;
                        return n = c < 1 ? Math.exp(-n * c * l) * (1 * Math.cos(s * n) + u * Math.sin(s * n)) : (1 + u * n) * Math.exp(-n * l), 0 === e || 1 === e ? e : 1 - n
                    }
                    return t ? d : function() {
                        var t = Yr.springs[e];
                        if (t) return t;
                        for (var n = 1 / 6, r = 0, a = 0;;)
                            if (1 === d(r += n)) {
                                if (++a >= 16) break
                            } else a = 0;
                        var o = r * n * 1e3;
                        return Yr.springs[e] = o, o
                    }
                }
                
                function Jr(e) {
                    return void 0 === e && (e = 10),
                        function(t) {
                            return Math.ceil(Fr(t, 1e-6, 1) * e) * (1 / e)
                        }
                }
                var ea, ta, na = function() {
                        var e = .1;
                        
                        function t(e, t) {
                            return 1 - 3 * t + 3 * e
                        }
                        
                        function n(e, t) {
                            return 3 * t - 6 * e
                        }
                        
                        function r(e) {
                            return 3 * e
                        }
                        
                        function a(e, a, o) {
                            return ((t(a, o) * e + n(a, o)) * e + r(a)) * e
                        }
                        
                        function o(e, a, o) {
                            return 3 * t(a, o) * e * e + 2 * n(a, o) * e + r(a)
                        }
                        return function(t, n, r, i) {
                            if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
                                var l = new Float32Array(11);
                                if (t !== n || r !== i)
                                    for (var c = 0; c < 11; ++c) l[c] = a(c * e, t, r);
                                return function(e) {
                                    return t === n && r === i || 0 === e || 1 === e ? e : a(s(e), n, i)
                                }
                            }
                            
                            function s(n) {
                                for (var i = 0, c = 1; 10 !== c && l[c] <= n; ++c) i += e;
                                --c;
                                var s = i + (n - l[c]) / (l[c + 1] - l[c]) * e,
                                    u = o(s, t, r);
                                return u >= .001 ? function(e, t, n, r) {
                                    for (var i = 0; i < 4; ++i) {
                                        var l = o(t, n, r);
                                        if (0 === l) return t;
                                        t -= (a(t, n, r) - e) / l
                                    }
                                    return t
                                }(n, s, t, r) : 0 === u ? s : function(e, t, n, r, o) {
                                    var i, l, c = 0;
                                    do {
                                        (i = a(l = t + (n - t) / 2, r, o) - e) > 0 ? n = l : t = l
                                    } while (Math.abs(i) > 1e-7 && ++c < 10);
                                    return l
                                }(n, i, i + e, t, r)
                            }
                        }
                    }(),
                    ra = (ea = {
                            linear: function() {
                                return function(e) {
                                    return e
                                }
                            }
                        }, ta = {
                            Sine: function() {
                                return function(e) {
                                    return 1 - Math.cos(e * Math.PI / 2)
                                }
                            },
                            Circ: function() {
                                return function(e) {
                                    return 1 - Math.sqrt(1 - e * e)
                                }
                            },
                            Back: function() {
                                return function(e) {
                                    return e * e * (3 * e - 2)
                                }
                            },
                            Bounce: function() {
                                return function(e) {
                                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                                }
                            },
                            Elastic: function(e, t) {
                                void 0 === e && (e = 1), void 0 === t && (t = .5);
                                var n = Fr(e, 1, 10),
                                    r = Fr(t, .1, 2);
                                return function(e) {
                                    return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - r / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / r)
                                }
                            }
                        }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(e, t) {
                            ta[e] = function() {
                                return function(e) {
                                    return Math.pow(e, t + 2)
                                }
                            }
                        })), Object.keys(ta)
                        .forEach((function(e) {
                            var t = ta[e];
                            ea["easeIn" + e] = t, ea["easeOut" + e] = function(e, n) {
                                return function(r) {
                                    return 1 - t(e, n)(1 - r)
                                }
                            }, ea["easeInOut" + e] = function(e, n) {
                                return function(r) {
                                    return r < .5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2
                                }
                            }, ea["easeOutIn" + e] = function(e, n) {
                                return function(r) {
                                    return r < .5 ? (1 - t(e, n)(1 - 2 * r)) / 2 : (t(e, n)(2 * r - 1) + 1) / 2
                                }
                            }
                        })), ea);
                
                function aa(e, t) {
                    if (Xr.fnc(e)) return e;
                    var n = e.split("(")[0],
                        r = ra[n],
                        a = Wr(e);
                    switch (n) {
                        case "spring":
                            return Qr(e, t);
                        case "cubicBezier":
                            return Zr(na, a);
                        case "steps":
                            return Zr(Jr, a);
                        default:
                            return Zr(r, a)
                    }
                }
                
                function oa(e) {
                    try {
                        return document.querySelectorAll(e)
                    } catch (t) {
                        return
                    }
                }
                
                function ia(e, t) {
                    for (var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < n; o++)
                        if (o in e) {
                            var i = e[o];
                            t.call(r, i, o, e) && a.push(i)
                        } return a
                }
                
                function la(e) {
                    return e.reduce((function(e, t) {
                        return e.concat(Xr.arr(t) ? la(t) : t)
                    }), [])
                }
                
                function ca(e) {
                    return Xr.arr(e) ? e : (Xr.str(e) && (e = oa(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
                }
                
                function sa(e, t) {
                    return e.some((function(e) {
                        return e === t
                    }))
                }
                
                function ua(e) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    return t
                }
                
                function da(e, t) {
                    var n = ua(e);
                    for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
                    return n
                }
                
                function fa(e, t) {
                    var n = ua(e);
                    for (var r in t) n[r] = Xr.und(e[r]) ? t[r] : e[r];
                    return n
                }
                
                function ma(e) {
                    return Xr.rgb(e) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t = e)) ? "rgba(" + n[1] + ",1)" : t : Xr.hex(e) ? function(e) {
                        var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, r) {
                                return t + t + n + n + r + r
                            })),
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
                    }(e) : Xr.hsl(e) ? function(e) {
                        var t, n, r, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                            o = parseInt(a[1], 10) / 360,
                            i = parseInt(a[2], 10) / 100,
                            l = parseInt(a[3], 10) / 100,
                            c = a[4] || 1;
                        
                        function s(e, t, n) {
                            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                        }
                        if (0 == i) t = n = r = l;
                        else {
                            var u = l < .5 ? l * (1 + i) : l + i - l * i,
                                d = 2 * l - u;
                            t = s(d, u, o + 1 / 3), n = s(d, u, o), r = s(d, u, o - 1 / 3)
                        }
                        return "rgba(" + 255 * t + "," + 255 * n + "," + 255 * r + "," + c + ")"
                    }(e) : void 0;
                    var t, n
                }
                
                function pa(e) {
                    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
                    if (t) return t[1]
                }
                
                function va(e, t) {
                    return Xr.fnc(e) ? e(t.target, t.id, t.total) : e
                }
                
                function ha(e, t) {
                    return e.getAttribute(t)
                }
                
                function ga(e, t, n) {
                    if (sa([n, "deg", "rad", "turn"], pa(t))) return t;
                    var r = Yr.CSS[t + n];
                    if (!Xr.und(r)) return r;
                    var a = document.createElement(e.tagName),
                        o = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
                    o.appendChild(a), a.style.position = "absolute", a.style.width = 100 + n;
                    var i = 100 / a.offsetWidth;
                    o.removeChild(a);
                    var l = i * parseFloat(t);
                    return Yr.CSS[t + n] = l, l
                }
                
                function ba(e, t, n) {
                    if (t in e.style) {
                        var r = t.replace(/([a-z])([A-Z])/g, "$1-$2")
                            .toLowerCase(),
                            a = e.style[t] || getComputedStyle(e)
                            .getPropertyValue(r) || "0";
                        return n ? ga(e, a, n) : a
                    }
                }
                
                function ya(e, t) {
                    return Xr.dom(e) && !Xr.inp(e) && (!Xr.nil(ha(e, t)) || Xr.svg(e) && e[t]) ? "attribute" : Xr.dom(e) && sa(Vr, t) ? "transform" : Xr.dom(e) && "transform" !== t && ba(e, t) ? "css" : null != e[t] ? "object" : void 0
                }
                
                function wa(e) {
                    if (Xr.dom(e)) {
                        for (var t, n = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map; t = r.exec(n);) a.set(t[1], t[2]);
                        return a
                    }
                }
                
                function ka(e, t, n, r) {
                    var a = qr(t, "scale") ? 1 : 0 + function(e) {
                            return qr(e, "translate") || "perspective" === e ? "px" : qr(e, "rotate") || qr(e, "skew") ? "deg" : void 0
                        }(t),
                        o = wa(e)
                        .get(t) || a;
                    return n && (n.transforms.list.set(t, o), n.transforms.last = t), r ? ga(e, o, r) : o
                }
                
                function xa(e, t, n, r) {
                    switch (ya(e, t)) {
                        case "transform":
                            return ka(e, t, r, n);
                        case "css":
                            return ba(e, t, n);
                        case "attribute":
                            return ha(e, t);
                        default:
                            return e[t] || 0
                    }
                }
                
                function _a(e, t) {
                    var n = /^(\*=|\+=|-=)/.exec(e);
                    if (!n) return e;
                    var r = pa(e) || 0,
                        a = parseFloat(t),
                        o = parseFloat(e.replace(n[0], ""));
                    switch (n[0][0]) {
                        case "+":
                            return a + o + r;
                        case "-":
                            return a - o + r;
                        case "*":
                            return a * o + r
                    }
                }
                
                function Ia(e, t) {
                    if (Xr.col(e)) return ma(e);
                    if (/\s/g.test(e)) return e;
                    var n = pa(e),
                        r = n ? e.substr(0, e.length - n.length) : e;
                    return t ? r + t : r
                }
                
                function Ea(e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }
                
                function Ca(e) {
                    for (var t, n = e.points, r = 0, a = 0; a < n.numberOfItems; a++) {
                        var o = n.getItem(a);
                        a > 0 && (r += Ea(t, o)), t = o
                    }
                    return r
                }
                
                function Ma(e) {
                    if (e.getTotalLength) return e.getTotalLength();
                    switch (e.tagName.toLowerCase()) {
                        case "circle":
                            return function(e) {
                                return 2 * Math.PI * ha(e, "r")
                            }(e);
                        case "rect":
                            return function(e) {
                                return 2 * ha(e, "width") + 2 * ha(e, "height")
                            }(e);
                        case "line":
                            return function(e) {
                                return Ea({
                                    x: ha(e, "x1"),
                                    y: ha(e, "y1")
                                }, {
                                    x: ha(e, "x2"),
                                    y: ha(e, "y2")
                                })
                            }(e);
                        case "polyline":
                            return Ca(e);
                        case "polygon":
                            return function(e) {
                                var t = e.points;
                                return Ca(e) + Ea(t.getItem(t.numberOfItems - 1), t.getItem(0))
                            }(e)
                    }
                }
                
                function Oa(e, t) {
                    var n = t || {},
                        r = n.el || function(e) {
                            for (var t = e.parentNode; Xr.svg(t) && Xr.svg(t.parentNode);) t = t.parentNode;
                            return t
                        }(e),
                        a = r.getBoundingClientRect(),
                        o = ha(r, "viewBox"),
                        i = a.width,
                        l = a.height,
                        c = n.viewBox || (o ? o.split(" ") : [0, 0, i, l]);
                    return {
                        el: r,
                        viewBox: c,
                        x: c[0] / 1,
                        y: c[1] / 1,
                        w: i,
                        h: l,
                        vW: c[2],
                        vH: c[3]
                    }
                }
                
                function za(e, t, n) {
                    function r(n) {
                        void 0 === n && (n = 0);
                        var r = t + n >= 1 ? t + n : 0;
                        return e.el.getPointAtLength(r)
                    }
                    var a = Oa(e.el, e.svg),
                        o = r(),
                        i = r(-1),
                        l = r(1),
                        c = n ? 1 : a.w / a.vW,
                        s = n ? 1 : a.h / a.vH;
                    switch (e.property) {
                        case "x":
                            return (o.x - a.x) * c;
                        case "y":
                            return (o.y - a.y) * s;
                        case "angle":
                            return 180 * Math.atan2(l.y - i.y, l.x - i.x) / Math.PI
                    }
                }
                
                function Pa(e, t) {
                    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                        r = Ia(Xr.pth(e) ? e.totalLength : e, t) + "";
                    return {
                        original: r,
                        numbers: r.match(n) ? r.match(n)
                            .map(Number) : [0],
                        strings: Xr.str(e) || t ? r.split(n) : []
                    }
                }
                
                function Ga(e) {
                    return ia(e ? la(Xr.arr(e) ? e.map(ca) : ca(e)) : [], (function(e, t, n) {
                        return n.indexOf(e) === t
                    }))
                }
                
                function Ta(e) {
                    var t = Ga(e);
                    return t.map((function(e, n) {
                        return {
                            target: e,
                            id: n,
                            total: t.length,
                            transforms: {
                                list: wa(e)
                            }
                        }
                    }))
                }
                
                function Na(e, t) {
                    var n = ua(t);
                    if (/^spring/.test(n.easing) && (n.duration = Qr(n.easing)), Xr.arr(e)) {
                        var r = e.length;
                        2 === r && !Xr.obj(e[0]) ? e = {
                            value: e
                        } : Xr.fnc(t.duration) || (n.duration = t.duration / r)
                    }
                    var a = Xr.arr(e) ? e : [e];
                    return a.map((function(e, n) {
                            var r = Xr.obj(e) && !Xr.pth(e) ? e : {
                                value: e
                            };
                            return Xr.und(r.delay) && (r.delay = n ? 0 : t.delay), Xr.und(r.endDelay) && (r.endDelay = n === a.length - 1 ? t.endDelay : 0), r
                        }))
                        .map((function(e) {
                            return fa(e, n)
                        }))
                }
                
                function La(e, t) {
                    var n = [],
                        r = t.keyframes;
                    for (var a in r && (t = fa(function(e) {
                            for (var t = ia(la(e.map((function(e) {
                                        return Object.keys(e)
                                    }))), (function(e) {
                                        return Xr.key(e)
                                    }))
                                    .reduce((function(e, t) {
                                        return e.indexOf(t) < 0 && e.push(t), e
                                    }), []), n = {}, r = function(r) {
                                        var a = t[r];
                                        n[a] = e.map((function(e) {
                                            var t = {};
                                            for (var n in e) Xr.key(n) ? n == a && (t.value = e[n]) : t[n] = e[n];
                                            return t
                                        }))
                                    }, a = 0; a < t.length; a++) r(a);
                            return n
                        }(r), t)), t) Xr.key(a) && n.push({
                        name: a,
                        tweens: Na(t[a], e)
                    });
                    return n
                }
                
                function Sa(e, t) {
                    var n;
                    return e.tweens.map((function(r) {
                        var a = function(e, t) {
                                var n = {};
                                for (var r in e) {
                                    var a = va(e[r], t);
                                    Xr.arr(a) && 1 === (a = a.map((function(e) {
                                            return va(e, t)
                                        })))
                                        .length && (a = a[0]), n[r] = a
                                }
                                return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                            }(r, t),
                            o = a.value,
                            i = Xr.arr(o) ? o[1] : o,
                            l = pa(i),
                            c = xa(t.target, e.name, l, t),
                            s = n ? n.to.original : c,
                            u = Xr.arr(o) ? o[0] : s,
                            d = pa(u) || pa(c),
                            f = l || d;
                        return Xr.und(i) && (i = s), a.from = Pa(u, f), a.to = Pa(_a(i, u), f), a.start = n ? n.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = aa(a.easing, a.duration), a.isPath = Xr.pth(o), a.isPathTargetInsideSVG = a.isPath && Xr.svg(t.target), a.isColor = Xr.col(a.from.original), a.isColor && (a.round = 1), n = a, a
                    }))
                }
                var Aa = {
                    css: function(e, t, n) {
                        return e.style[t] = n
                    },
                    attribute: function(e, t, n) {
                        return e.setAttribute(t, n)
                    },
                    object: function(e, t, n) {
                        return e[t] = n
                    },
                    transform: function(e, t, n, r, a) {
                        if (r.list.set(t, n), t === r.last || a) {
                            var o = "";
                            r.list.forEach((function(e, t) {
                                o += t + "(" + e + ") "
                            })), e.style.transform = o
                        }
                    }
                };
                
                function Ra(e, t) {
                    Ta(e)
                        .forEach((function(e) {
                            for (var n in t) {
                                var r = va(t[n], e),
                                    a = e.target,
                                    o = pa(r),
                                    i = xa(a, n, o, e),
                                    l = _a(Ia(r, o || pa(i)), i),
                                    c = ya(a, n);
                                Aa[c](a, n, l, e.transforms, !0)
                            }
                        }))
                }
                
                function Ba(e, t) {
                    return ia(la(e.map((function(e) {
                        return t.map((function(t) {
                            return function(e, t) {
                                var n = ya(e.target, t.name);
                                if (n) {
                                    var r = Sa(t, e),
                                        a = r[r.length - 1];
                                    return {
                                        type: n,
                                        property: t.name,
                                        animatable: e,
                                        tweens: r,
                                        duration: a.end,
                                        delay: r[0].delay,
                                        endDelay: a.endDelay
                                    }
                                }
                            }(e, t)
                        }))
                    }))), (function(e) {
                        return !Xr.und(e)
                    }))
                }
                
                function Da(e, t) {
                    var n = e.length,
                        r = function(e) {
                            return e.timelineOffset ? e.timelineOffset : 0
                        },
                        a = {};
                    return a.duration = n ? Math.max.apply(Math, e.map((function(e) {
                        return r(e) + e.duration
                    }))) : t.duration, a.delay = n ? Math.min.apply(Math, e.map((function(e) {
                        return r(e) + e.delay
                    }))) : t.delay, a.endDelay = n ? a.duration - Math.max.apply(Math, e.map((function(e) {
                        return r(e) + e.duration - e.endDelay
                    }))) : t.endDelay, a
                }
                var ja = 0;
                var $a = [],
                    Ha = function() {
                        var e;
                        
                        function t(n) {
                            for (var r = $a.length, a = 0; a < r;) {
                                var o = $a[a];
                                o.paused ? ($a.splice(a, 1), r--) : (o.tick(n), a++)
                            }
                            e = a > 0 ? requestAnimationFrame(t) : void 0
                        }
                        return "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
                                Ua.suspendWhenDocumentHidden && (Ka() ? e = cancelAnimationFrame(e) : ($a.forEach((function(e) {
                                    return e._onDocumentVisibility()
                                })), Ha()))
                            })),
                            function() {
                                e || Ka() && Ua.suspendWhenDocumentHidden || !($a.length > 0) || (e = requestAnimationFrame(t))
                            }
                    }();
                
                function Ka() {
                    return !!document && document.hidden
                }
                
                function Ua(e) {
                    void 0 === e && (e = {});
                    var t, n = 0,
                        r = 0,
                        a = 0,
                        o = 0,
                        i = null;
                    
                    function l(e) {
                        var t = window.Promise && new Promise((function(e) {
                            return i = e
                        }));
                        return e.finished = t, t
                    }
                    var c = function(e) {
                        var t = da(Kr, e),
                            n = da(Ur, e),
                            r = La(n, e),
                            a = Ta(e.targets),
                            o = Ba(a, r),
                            i = Da(o, n),
                            l = ja;
                        return ja++, fa(t, {
                            id: l,
                            children: [],
                            animatables: a,
                            animations: o,
                            duration: i.duration,
                            delay: i.delay,
                            endDelay: i.endDelay
                        })
                    }(e);
                    
                    function s() {
                        var e = c.direction;
                        "alternate" !== e && (c.direction = "normal" !== e ? "normal" : "reverse"), c.reversed = !c.reversed, t.forEach((function(e) {
                            return e.reversed = c.reversed
                        }))
                    }
                    
                    function u(e) {
                        return c.reversed ? c.duration - e : e
                    }
                    
                    function d() {
                        n = 0, r = u(c.currentTime) * (1 / Ua.speed)
                    }
                    
                    function f(e, t) {
                        t && t.seek(e - t.timelineOffset)
                    }
                    
                    function m(e) {
                        for (var t = 0, n = c.animations, r = n.length; t < r;) {
                            var a = n[t],
                                o = a.animatable,
                                i = a.tweens,
                                l = i.length - 1,
                                s = i[l];
                            l && (s = ia(i, (function(t) {
                                return e < t.end
                            }))[0] || s);
                            for (var u = Fr(e - s.start - s.delay, 0, s.duration) / s.duration, d = isNaN(u) ? 1 : s.easing(u), f = s.to.strings, m = s.round, p = [], v = s.to.numbers.length, h = void 0, g = 0; g < v; g++) {
                                var b = void 0,
                                    y = s.to.numbers[g],
                                    w = s.from.numbers[g] || 0;
                                b = s.isPath ? za(s.value, d * y, s.isPathTargetInsideSVG) : w + d * (y - w), m && (s.isColor && g > 2 || (b = Math.round(b * m) / m)), p.push(b)
                            }
                            var k = f.length;
                            if (k) {
                                h = f[0];
                                for (var x = 0; x < k; x++) {
                                    f[x];
                                    var _ = f[x + 1],
                                        I = p[x];
                                    isNaN(I) || (h += _ ? I + _ : I + " ")
                                }
                            } else h = p[0];
                            Aa[a.type](o.target, a.property, h, o.transforms), a.currentValue = h, t++
                        }
                    }
                    
                    function p(e) {
                        c[e] && !c.passThrough && c[e](c)
                    }
                    
                    function v(e) {
                        var d = c.duration,
                            v = c.delay,
                            h = d - c.endDelay,
                            g = u(e);
                        c.progress = Fr(g / d * 100, 0, 100), c.reversePlayback = g < c.currentTime, t && function(e) {
                            if (c.reversePlayback)
                                for (var n = o; n--;) f(e, t[n]);
                            else
                                for (var r = 0; r < o; r++) f(e, t[r])
                        }(g), !c.began && c.currentTime > 0 && (c.began = !0, p("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, p("loopBegin")), g <= v && 0 !== c.currentTime && m(0), (g >= h && c.currentTime !== d || !d) && m(d), g > v && g < h ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, p("changeBegin")), p("change"), m(g)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, p("changeComplete")), c.currentTime = Fr(g, 0, d), c.began && p("update"), e >= d && (r = 0, c.remaining && !0 !== c.remaining && c.remaining--, c.remaining ? (n = a, p("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && s()) : (c.paused = !0, c.completed || (c.completed = !0, p("loopComplete"), p("complete"), !c.passThrough && "Promise" in window && (i(), l(c)))))
                    }
                    return l(c), c.reset = function() {
                        var e = c.direction;
                        c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === e, c.remaining = c.loop, t = c.children;
                        for (var n = o = t.length; n--;) c.children[n].reset();
                        (c.reversed && !0 !== c.loop || "alternate" === e && 1 === c.loop) && c.remaining++, m(c.reversed ? c.duration : 0)
                    }, c._onDocumentVisibility = d, c.set = function(e, t) {
                        return Ra(e, t), c
                    }, c.tick = function(e) {
                        a = e, n || (n = a), v((a + (r - n)) * Ua.speed)
                    }, c.seek = function(e) {
                        v(u(e))
                    }, c.pause = function() {
                        c.paused = !0, d()
                    }, c.play = function() {
                        c.paused && (c.completed && c.reset(), c.paused = !1, $a.push(c), d(), Ha())
                    }, c.reverse = function() {
                        s(), c.completed = !c.reversed, d()
                    }, c.restart = function() {
                        c.reset(), c.play()
                    }, c.remove = function(e) {
                        Ya(Ga(e), c)
                    }, c.reset(), c.autoplay && c.play(), c
                }
                
                function Va(e, t) {
                    for (var n = t.length; n--;) sa(e, t[n].animatable.target) && t.splice(n, 1)
                }
                
                function Ya(e, t) {
                    var n = t.animations,
                        r = t.children;
                    Va(e, n);
                    for (var a = r.length; a--;) {
                        var o = r[a],
                            i = o.animations;
                        Va(e, i), i.length || o.children.length || r.splice(a, 1)
                    }
                    n.length || r.length || t.pause()
                }
                Ua.version = "3.2.1", Ua.speed = 1, Ua.suspendWhenDocumentHidden = !0, Ua.running = $a, Ua.remove = function(e) {
                    for (var t = Ga(e), n = $a.length; n--;) {
                        Ya(t, $a[n])
                    }
                }, Ua.get = xa, Ua.set = Ra, Ua.convertPx = ga, Ua.path = function(e, t) {
                    var n = Xr.str(e) ? oa(e)[0] : e,
                        r = t || 100;
                    return function(e) {
                        return {
                            property: e,
                            el: n,
                            svg: Oa(n),
                            totalLength: Ma(n) * (r / 100)
                        }
                    }
                }, Ua.setDashoffset = function(e) {
                    var t = Ma(e);
                    return e.setAttribute("stroke-dasharray", t), t
                }, Ua.stagger = function(e, t) {
                    void 0 === t && (t = {});
                    var n = t.direction || "normal",
                        r = t.easing ? aa(t.easing) : null,
                        a = t.grid,
                        o = t.axis,
                        i = t.from || 0,
                        l = "first" === i,
                        c = "center" === i,
                        s = "last" === i,
                        u = Xr.arr(e),
                        d = u ? parseFloat(e[0]) : parseFloat(e),
                        f = u ? parseFloat(e[1]) : 0,
                        m = pa(u ? e[1] : e) || 0,
                        p = t.start || 0 + (u ? d : 0),
                        v = [],
                        h = 0;
                    return function(e, t, g) {
                        if (l && (i = 0), c && (i = (g - 1) / 2), s && (i = g - 1), !v.length) {
                            for (var b = 0; b < g; b++) {
                                if (a) {
                                    var y = c ? (a[0] - 1) / 2 : i % a[0],
                                        w = c ? (a[1] - 1) / 2 : Math.floor(i / a[0]),
                                        k = y - b % a[0],
                                        x = w - Math.floor(b / a[0]),
                                        _ = Math.sqrt(k * k + x * x);
                                    "x" === o && (_ = -k), "y" === o && (_ = -x), v.push(_)
                                } else v.push(Math.abs(i - b));
                                h = Math.max.apply(Math, v)
                            }
                            r && (v = v.map((function(e) {
                                return r(e / h) * h
                            }))), "reverse" === n && (v = v.map((function(e) {
                                return o ? e < 0 ? -1 * e : -e : Math.abs(h - e)
                            })))
                        }
                        return p + (u ? (f - d) / h : d) * (Math.round(100 * v[t]) / 100) + m
                    }
                }, Ua.timeline = function(e) {
                    void 0 === e && (e = {});
                    var t = Ua(e);
                    return t.duration = 0, t.add = function(n, r) {
                        var a = $a.indexOf(t),
                            o = t.children;
                        
                        function i(e) {
                            e.passThrough = !0
                        }
                        a > -1 && $a.splice(a, 1);
                        for (var l = 0; l < o.length; l++) i(o[l]);
                        var c = fa(n, da(Ur, e));
                        c.targets = c.targets || e.targets;
                        var s = t.duration;
                        c.autoplay = !1, c.direction = t.direction, c.timelineOffset = Xr.und(r) ? s : _a(r, s), i(t), t.seek(c.timelineOffset);
                        var u = Ua(c);
                        i(u), o.push(u);
                        var d = Da(o, e);
                        return t.delay = d.delay, t.endDelay = d.endDelay, t.duration = d.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
                    }, t
                }, Ua.easing = aa, Ua.penner = ra, Ua.random = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                };
                var Fa = {
                        class: "game-board"
                    },
                    qa = {
                        class: "rewards bronze"
                    },
                    Za = ["onClick"],
                    Xa = {
                        class: "token"
                    },
                    Wa = {
                        key: 0,
                        class: "name"
                    },
                    Qa = {
                        class: "rewards silver"
                    },
                    Ja = ["onClick"],
                    eo = {
                        class: "token"
                    },
                    to = {
                        key: 0,
                        class: "name"
                    },
                    no = {
                        key: 0,
                        class: "rewards gold"
                    },
                    ro = ["src"],
                    ao = {
                        key: 0,
                        class: "name"
                    },
                    oo = ["onClick"],
                    io = {
                        class: "token"
                    },
                    lo = {
                        key: 0,
                        class: "name"
                    },
                    co = {
                        class: "balls"
                    },
                    so = {
                        class: "arrows"
                    },
                    uo = ["onClick"],
                    fo = I({
                        __name: "GameBoard",
                        props: {
                            chosenGp: null
                        },
                        emits: ["draw"],
                        setup: function(e, t) {
                            for (var a = t.expose, i = h(), l = N((function() {
                                    i.value = void 0
                                }), 3e3), c = function(e) {
                                    if (i.value === e) return l.cancel(), void(i.value = void 0);
                                    i.value = e, l()
                                }, s = [], p = 0; p < 7; p++) {
                                s[p] = [];
                                for (var b = 0; b < 5 - p % 2; b++) s[p][b] = {
                                    x: p,
                                    y: b,
                                    type: Ne.NONE,
                                    atop: void 0,
                                    bbot: void 0
                                }
                            }
                            var w = g((function() {
                                var e = Me.prizes.find((function(e) {
                                    return e.goal === Ne.BRONZE
                                }));
                                return [
                                    [2, 1, e],
                                    [2, 3, e],
                                    [4, 0, e],
                                    [4, 4, e]
                                ]
                            }));
                            w.value.forEach((function(e) {
                                var t = d(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s[n][r].type = Ne.BRONZE
                            }));
                            var k = g((function() {
                                var e = Me.prizes.find((function(e) {
                                    return e.goal === Ne.SILVER
                                }));
                                return [
                                    [6, 0, e],
                                    [4, 2, e],
                                    [6, 4, e]
                                ]
                            }));
                            k.value.forEach((function(e) {
                                var t = d(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s[n][r].type = Ne.SILVER
                            }));
                            var x = g((function() {
                                var e = Me.prizes.find((function(e) {
                                    return e.goal === Ne.GOLD && !e.isChoosable
                                }));
                                return [
                                    [6, 2, e]
                                ]
                            }));
                            x.value.forEach((function(e) {
                                var t = d(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s[n][r].type = Ne.GOLD
                            }));
                            for (var _ = 0; _ < s.length - 1; _++)
                                for (var I = 0; I < s[_].length; I++) {
                                    var C, z, P = s[_][I],
                                        G = null === (C = s[_ + 1]) || void 0 === C ? void 0 : C[I - (_ + 1) % 2],
                                        T = null === (z = s[_ + 1]) || void 0 === z ? void 0 : z[I + _ % 2];
                                    s[_][I].atop = P.type === Ne.NONE ? G : void 0, s[_][I].bbot = P.type === Ne.NONE ? T : void 0
                                }
                            var L = function e(t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                    return r.push(t), t.bbot && e(t.bbot, n(r), a), t.atop && e(t.atop, n(r), a), t.atop || t.bbot || a.push(r), a
                                },
                                R = s[0].map((function(e) {
                                    return L(e)
                                })),
                                B = h(0),
                                H = 1.1,
                                K = 400;
                            
                            function U(e, t, n) {
                                var a = R[e - 1];
                                a = a.filter((function(e) {
                                    return e[e.length - 1].type === t
                                }));
                                var o, i = Math.floor(Math.random() * a.length),
                                    l = m(o = a[i]) || r(o) || v(o) || f(),
                                    c = l[0],
                                    s = l.slice(1),
                                    u = Ua({
                                        targets: ".ball".concat(e, ":nth-child(")
                                            .concat(n + 1, ")"),
                                        backgroundPosition: "-=100% 0%",
                                        duration: 250,
                                        easing: "linear",
                                        loop: !0,
                                        autoplay: !1
                                    }),
                                    d = Ua.timeline({
                                        targets: ".ball".concat(e, ":nth-child(")
                                            .concat(n + 1, ")"),
                                        duration: K,
                                        easing: "linear",
                                        complete: function(e) {
                                            B.value -= 1, u.pause(), u.seek(0), e.seek(0)
                                        }
                                    }),
                                    p = 1.2 + n * H;
                                d.add({
                                    translateX: "+=".concat(p, "rem"),
                                    duration: p / 1.43 * K,
                                    begin: function() {
                                        B.value += 1
                                    }
                                }, 200 * n);
                                var h = c;
                                return s.forEach((function(e) {
                                    var t = "+=";
                                    e.x % 2 ? e.y < h.y && (t = "-=") : e.y <= h.y && (t = "-="), h = e, d.add({
                                        translateX: {
                                            value: e.type === Ne.NONE ? "+=".concat(1.43, "rem") : "+=0.4rem",
                                            easing: "easeInCubic"
                                        },
                                        translateY: {
                                            value: "".concat(t)
                                                .concat(.52, "rem"),
                                            easing: "easeOutCubic"
                                        }
                                    })
                                })), d.add({
                                    scale: 0,
                                    easing: "easeOutCubic"
                                }), d
                            }
                            
                            function V() {
                                return (V = u(o()
                                        .mark((function e(t, n) {
                                            var r, a;
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return r = n.map((function(e, n) {
                                                                return U(t, e, n)
                                                            })), a = r.reduce((function(e, t) {
                                                                return t.duration > e.duration ? t : e
                                                            })), r[0].add({
                                                                duration: 0,
                                                                scale: 1,
                                                                translateY: 0,
                                                                translateX: {
                                                                    value: ["-".concat(H, "rem"), 0],
                                                                    duration: 307.69230769230774,
                                                                    easing: "easeOutCubic"
                                                                }
                                                            }, a.duration), e.next = 5, Promise.all(r.map((function(e) {
                                                                return e.finished
                                                            })));
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        }))))
                                    .apply(this, arguments)
                            }
                            return a({
                                    kick: function(e, t) {
                                        return V.apply(this, arguments)
                                    }
                                }),
                                function(t, n) {
                                    return E(), M("div", Fa, [S("div", qa, [(E(!0), M(D, null, j(y(w), (function(e, t) {
                                        var n = d(e, 3)[2];
                                        return E(), M("div", {
                                            key: t,
                                            class: "goalpost",
                                            onClick: function(e) {
                                                return c("b".concat(t))
                                            }
                                        }, [S("div", Xa, A((null == n ? void 0 : n.qty) || 0), 1), i.value === "b".concat(t) ? (E(), M("div", Wa, A(n.name), 1)) : O("", !0)], 8, Za)
                                    })), 128))]), S("div", Qa, [(E(!0), M(D, null, j(y(k), (function(e, t) {
                                        var n = d(e, 3)[2];
                                        return E(), M("div", {
                                            key: t,
                                            class: "goalpost",
                                            onClick: function(e) {
                                                return c("s".concat(t))
                                            }
                                        }, [S("div", eo, A((null == n ? void 0 : n.qty) || 0), 1), i.value === "s".concat(t) ? (E(), M("div", to, A(n.name), 1)) : O("", !0)], 8, Ja)
                                    })), 128))]), e.chosenGp ? (E(), M("div", no, [e.chosenGp.isChoosable ? (E(), M("div", {
                                        key: 0,
                                        class: "goalpost",
                                        onClick: n[0] || (n[0] = function(e) {
                                            return c("g0")
                                        })
                                    }, [S("img", {
                                        src: e.chosenGp.image
                                    }, null, 8, ro), "g0" === i.value ? (E(), M("div", ao, A(e.chosenGp.name), 1)) : O("", !0)])) : (E(!0), M(D, {
                                        key: 1
                                    }, j(y(x), (function(e, t) {
                                        var n = d(e, 3)[2];
                                        return E(), M("div", {
                                            key: t,
                                            class: "goalpost",
                                            onClick: function(e) {
                                                return i.value = "g".concat(t)
                                            }
                                        }, [S("div", io, A((null == n ? void 0 : n.qty) || 0), 1), i.value === "g".concat(t) ? (E(), M("div", lo, A(n.name), 1)) : O("", !0)], 8, oo)
                                    })), 128))])) : O("", !0), S("div", co, [(E(), M(D, null, j(5, (function(e) {
                                        return S("div", {
                                            key: e,
                                            class: "balls-rows"
                                        }, [(E(), M(D, null, j(5, (function(t) {
                                            return S("div", {
                                                key: t,
                                                class: $(["soccer-ball", "ball".concat(e)])
                                            }, null, 2)
                                        })), 64))])
                                    })), 64))]), ee(S("div", so, [(E(), M(D, null, j(5, (function(e) {
                                        return S("div", {
                                            key: e,
                                            class: "arrow",
                                            onClick: function(n) {
                                                return t.$emit("draw", e)
                                            }
                                        }, null, 8, uo)
                                    })), 64))], 512), [
                                        [te, !B.value]
                                    ])])
                                }
                        }
                    }),
                    mo = qe(fo, [
                        ["__scopeId", "data-v-5190ac04"]
                    ]),
                    po = function(e) {
                        return R("data-v-13aa7638"), e = e(), B(), e
                    },
                    vo = {
                        class: "engaging-view"
                    },
                    ho = {
                        class: "kick-note"
                    },
                    go = {
                        class: "toggle-draw"
                    },
                    bo = {
                        class: "gem-cost"
                    },
                    yo = po((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    wo = {
                        class: "cost-text"
                    },
                    ko = {
                        class: "gem-cost"
                    },
                    xo = po((function() {
                        return S("div", {
                            class: "gem"
                        }, null, -1)
                    })),
                    _o = {
                        class: "cost-text"
                    },
                    Io = I({
                        __name: "EngagingView",
                        emits: ["selectgp"],
                        setup: function(e, t) {
                            var n = t.emit,
                                r = tt("DRAW_TYPE", 0),
                                a = h(0),
                                i = h(!1),
                                l = tt("SKIP_CONFIRM", !1),
                                c = tt("SKIP_ANIM", !1),
                                s = h(!1),
                                d = h(),
                                f = h([]),
                                m = g((function() {
                                    var e = f.value.some((function(e) {
                                        return e.goal !== Ne.NONE
                                    }));
                                    return e ? "popupResultGoal" : "popupResultBetterLuckNextTime"
                                })),
                                p = g((function() {
                                    return 1 === r.value ? Ge.value : Pe.value
                                })),
                                v = function(e) {
                                    r.value = e
                                },
                                b = Qe(),
                                w = b.error,
                                k = b.catchError,
                                x = b.clearError,
                                _ = et(),
                                I = _.loading,
                                C = (0, _.withLoading)(k(function() {
                                    var e = u(o()
                                        .mark((function e(t) {
                                            var n, s, u;
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!(Le.wallet < p.value)) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            throw new Error("lowBalance");
                                                        case 2:
                                                            return e.next = 4, je(r.value, p.value, c.value);
                                                        case 4:
                                                            if (n = e.sent, i.value = !1, l.value = t, I.value = 3, s = a.value, c.value) {
                                                                e.next = 12;
                                                                break
                                                            }
                                                            return e.next = 12, null === (u = d.value) || void 0 === u ? void 0 : u.kick(s, n.prizes.map((function(e) {
                                                                return e.goal
                                                            })));
                                                        case 12:
                                                            if (!n.prizes.some((function(e) {
                                                                    return e.goal === Ne.GOLD
                                                                }))) {
                                                                e.next = 16;
                                                                break
                                                            }
                                                            return I.value = 2, e.next = 16, me(1500);
                                                        case 16:
                                                            Le.chosenGP = n.chosenGP, f.value = n.prizes;
                                                        case 18:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }())),
                                O = function() {
                                    var e = u(o()
                                        .mark((function e(t) {
                                            return o()
                                                .wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (f.value = [], a.value = t, l.value) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return i.value = !0, e.abrupt("return");
                                                        case 5:
                                                            return e.next = 7, C(!0);
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                        })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                z = function() {
                                    f.value = [], Ae.value || n("selectgp")
                                };
                            return function(e, t) {
                                return E(), M("div", vo, [V(sr, null, {
                                    default: Y((function() {
                                        return [S("div", ho, A(e.$t("textKickNote")), 1), S("div", go, [S("div", {
                                            class: $(["btn-draw", {
                                                selected: y(r) == y(0)
                                            }]),
                                            onClick: t[0] || (t[0] = function(e) {
                                                return v(y(0))
                                            })
                                        }, [W(A(e.$t("btnDraw", {
                                            n: 1
                                        })) + " ", 1), S("div", bo, [yo, S("div", wo, A(y(Pe)), 1)])], 2), S("div", {
                                            class: $(["btn-draw batch", {
                                                selected: y(r) == y(1)
                                            }]),
                                            onClick: t[1] || (t[1] = function(e) {
                                                return v(y(1))
                                            })
                                        }, [W(A(e.$t("btnDraw", {
                                            n: 5
                                        })) + " ", 1), S("div", ko, [xo, S("div", _o, A(y(Ge)), 1)])], 2)]), V(Rn, {
                                            modelValue: y(c),
                                            "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                                                return J(c) ? c.value = e : null
                                            }),
                                            label: e.$t("textSkipAnim")
                                        }, null, 8, ["modelValue", "label"])]
                                    })),
                                    _: 1
                                }), V(mo, {
                                    ref_key: "board",
                                    ref: d,
                                    "chosen-gp": y(Ae),
                                    onDraw: O
                                }, null, 8, ["chosen-gp"]), V(cr), S("button", {
                                    class: "prize-list-btn",
                                    onClick: t[3] || (t[3] = function(e) {
                                        return s.value = !0
                                    })
                                }, A(e.$t("textViewPrizes")), 1), V(mr, {
                                    isOpened: s.value,
                                    onClose: t[4] || (t[4] = function(e) {
                                        return s.value = !1
                                    })
                                }, null, 8, ["isOpened"]), V($t, {
                                    error: y(w),
                                    onClear: y(x)
                                }, null, 8, ["error", "onClear"]), V(Tn, {
                                    items: f.value,
                                    isBatch: y(r) === y(1),
                                    title: e.$t(y(m)),
                                    onClose: z,
                                    onKickAgain: t[5] || (t[5] = function(e) {
                                        return O(a.value)
                                    })
                                }, null, 8, ["items", "isBatch", "title"]), V(wr, {
                                    cost: y(p),
                                    opened: i.value,
                                    isBatch: y(r) === y(1),
                                    onClose: t[6] || (t[6] = function(e) {
                                        return i.value = !1
                                    }),
                                    onConfirm: y(C)
                                }, null, 8, ["cost", "opened", "isBatch", "onConfirm"]), V(We, {
                                    loading: y(I)
                                }, null, 8, ["loading"])])
                            }
                        }
                    }),
                    Eo = qe(Io, [
                        ["__scopeId", "data-v-13aa7638"]
                    ]),
                    Co = {
                        class: "gp-selection"
                    },
                    Mo = {
                        class: "header"
                    },
                    Oo = {
                        class: "body"
                    },
                    zo = {
                        class: "prizes"
                    },
                    Po = I({
                        __name: "GrandPrizeSelection",
                        emits: ["confirmgp"],
                        setup: function(e, t) {
                            var n = t.emit,
                                r = et(),
                                a = r.loading,
                                i = r.withLoading,
                                l = Qe(),
                                c = l.error,
                                s = l.catchError,
                                d = l.clearError,
                                f = h(-1),
                                m = g((function() {
                                    return Me.prizes.filter((function(e) {
                                        return 0 === e.goal && e.isChoosable
                                    }))
                                })),
                                p = i(s(u(o()
                                    .mark((function e() {
                                        return o()
                                            .wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (0 !== f.value) {
                                                            e.next = 2;
                                                            break
                                                        }
                                                        throw new Error("gpNotChosen");
                                                    case 2:
                                                        if (f.value === Le.chosenGP) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.next = 5, He(f.value);
                                                    case 5:
                                                        n("confirmgp");
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                    })))));
                            return G((function() {
                                    f.value = Le.chosenGP
                                })),
                                function(e, t) {
                                    return E(), M("div", Co, [S("div", Mo, A(e.$t("textChoosePrize")), 1), S("div", Oo, [V(ht, null, {
                                        default: Y((function() {
                                            return [S("div", zo, [(E(!0), M(D, null, j(y(m), (function(e, t) {
                                                return E(), C(Zt, F({
                                                    key: t,
                                                    frameInRem: 2.07,
                                                    isSelected: e.id === f.value
                                                }, e, {
                                                    selectionPage: !0,
                                                    owned: y(Be)(e),
                                                    onClick: function(t) {
                                                        return function(e) {
                                                            Be(e) || (f.value = e.id)
                                                        }(e)
                                                    }
                                                }), null, 16, ["frameInRem", "isSelected", "owned", "onClick"])
                                            })), 128))])]
                                        })),
                                        _: 1
                                    }), S("button", {
                                        class: "confirm",
                                        onClick: t[0] || (t[0] = function() {
                                            return y(p) && y(p)
                                                .apply(void 0, arguments)
                                        })
                                    }, A(e.$t("btnConfirm")), 1)]), y(c) ? (E(), C(jt, {
                                        key: 0,
                                        message: e.$t(y(c)),
                                        onClose: y(d)
                                    }, null, 8, ["message", "onClose"])) : O("", !0), V(We, {
                                        loading: y(a),
                                        showCongrats: !1
                                    }, null, 8, ["loading"])])
                                }
                        }
                    }),
                    Go = qe(Po, [
                        ["__scopeId", "data-v-fae49006"]
                    ]),
                    To = {
                        key: 0,
                        class: "main"
                    },
                    No = h("main"),
                    Lo = g((function() {
                        if ("selection" === No.value) return Go;
                        switch (Le.templateType) {
                            case "1.0":
                            case "1.1":
                                return Eo;
                            case "2.0":
                            case "2.1":
                                return Hr;
                            default:
                                return
                        }
                    })),
                    So = function(e) {
                        No.value = e
                    },
                    Ao = qe(I({
                        __name: "App",
                        setup: function(e) {
                            ! function() {
                                function e() {
                                    var e, t = Math.max(window.innerHeight, window.innerWidth),
                                        n = Math.min(window.innerHeight, window.innerWidth);
                                    e = t / n > 1.7786666666666666 ? n / 750 * 100 : t / 1334 * 100, document.documentElement.style.fontSize = "".concat(e.toFixed(2), "px"), document.documentElement.style.width = "".concat(t, "px"), document.documentElement.style.height = "".concat(n, "px")
                                }
                                var t = N(e);
                                e();
                                var n = Je("(orientation: portrait)");
                                b(n, t), G((function() {
                                    window.addEventListener("resize", t)
                                })), T((function() {
                                    window.removeEventListener("resize", t)
                                }))
                            }();
                            var t = et(),
                                n = t.loading,
                                r = t.withLoading,
                                a = Qe(),
                                i = a.error,
                                l = a.catchError,
                                c = a.clearError,
                                s = h(!1),
                                d = r(l(u(o()
                                    .mark((function e() {
                                        return o()
                                            .wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Ye();
                                                    case 2:
                                                        No.value = Le.chosenGP ? "main" : "selection", s.value = !0;
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                    })))));
                            return G(u(o()
                                    .mark((function e() {
                                        return o()
                                            .wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return document.body.addEventListener("click", (function() {})), e.next = 3, d();
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                    })))),
                                function(e, t) {
                                    return E(), M(D, null, [S("div", {
                                        class: $(["container", {
                                            minimal: y(Lo) === Hr
                                        }])
                                    }, [s.value ? (E(), M("div", To, [V(kn), V(vn), V(Ct), V(pn), V(q, null, {
                                        default: Y((function() {
                                            return [(E(), C(ne(y(Lo)), {
                                                onConfirmgp: t[0] || (t[0] = function(e) {
                                                    return No.value = "main"
                                                }),
                                                onSelectgp: t[1] || (t[1] = function(e) {
                                                    return No.value = "selection"
                                                })
                                            }, null, 32))]
                                        })),
                                        _: 1
                                    })])) : O("", !0)], 2), V($t, {
                                        error: y(i),
                                        onClear: y(c)
                                    }, null, 8, ["error", "onClear"]), V(We, {
                                        loading: y(n)
                                    }, null, 8, ["loading"]), V(it)], 64)
                                }
                        }
                    }), [
                        ["__scopeId", "data-v-5f9d6476"]
                    ]);
                [].forEach((function(e) {
                    (new Image)
                    .src = e
                }));
                var Ro = re(Ao);
                Ro.use(oe), Ro.use((function(e) {
                    Object.defineProperty(e.config.globalProperties, "$assets", {
                        enumerable: !0,
                        get: function() {
                            return y(ke)
                        }
                    })
                })), Ro.use(fe), Ro.mount("#app")
            }
        }
    }))
}();
