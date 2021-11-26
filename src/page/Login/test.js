(window.webpackJsonp = window.webpackJsonp || []).push([
  [15], {
    0: function (t, e, n) {
      "use strict";
      n.d(e, "k", (function () {
        return d
      })), n.d(e, "m", (function () {
        return h
      })), n.d(e, "l", (function () {
        return p
      })), n.d(e, "e", (function () {
        return m
      })), n.d(e, "b", (function () {
        return b
      })), n.d(e, "s", (function () {
        return v
      })), n.d(e, "g", (function () {
        return g
      })), n.d(e, "h", (function () {
        return y
      })), n.d(e, "d", (function () {
        return w
      })), n.d(e, "r", (function () {
        return x
      })), n.d(e, "j", (function () {
        return _
      })), n.d(e, "t", (function () {
        return O
      })), n.d(e, "o", (function () {
        return k
      })), n.d(e, "q", (function () {
        return $
      })), n.d(e, "f", (function () {
        return U
      })), n.d(e, "c", (function () {
        return C
      })), n.d(e, "i", (function () {
        return q
      })), n.d(e, "p", (function () {
        return P
      })), n.d(e, "a", (function () {
        return z
      })), n.d(e, "n", (function () {
        return N
      })), n.d(e, "u", (function () {
        return M
      }));
      n(45), n(97), n(96), n(79), n(124), n(51), n(273), n(52), n(38), n(427), n(98), n(11), n(182), n(37), n(39), n(125), n(42), n(429), n(62), n(410), n(63), n(431), n(70);
      var r = n(16),
        o = (n(99), n(18)),
        a = n(23),
        i = n(78),
        u = n(1);

      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? s(Object(n), !0).forEach((function (e) {
            Object(a.a)(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function l(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return f(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[r++]
                }
              },
              e: function (t) {
                throw t
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next();
            return i = t.done, t
          },
          e: function (t) {
            u = !0, a = t
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }

      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }

      function d(t) {
        u.default.config.errorHandler && u.default.config.errorHandler(t)
      }

      function h(t) {
        return t.then((function (t) {
          return t.default || t
        }))
      }

      function p(t) {
        return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
      }

      function m(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = l(r);
        try {
          for (o.s(); !(e = o.n()).done;) {
            var a = e.value;
            a.$fetch ? n.push(a) : a.$children && m(a, n)
          }
        } catch (t) {
          o.e(t)
        } finally {
          o.f()
        }
        return n
      }

      function b(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n = t.options._originDataFn || t.options.data || function () {
            return {}
          };
          t.options._originDataFn = n, t.options.data = function () {
            var r = n.call(this, this);
            return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), c(c({}, r), e)
          }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
        }
      }

      function v(t) {
        return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = u.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
      }

      function g(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
        return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
          return Object.keys(t[n]).map((function (o) {
            return e && e.push(r), t[n][o]
          }))
        })))
      }

      function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return g(t, e, "instances")
      }

      function w(t, e) {
        return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
          return Object.keys(t.components).reduce((function (r, o) {
            return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
          }), [])
        })))
      }

      function x(t, e) {
        return Promise.all(w(t, function () {
          var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, a) {
            return regeneratorRuntime.wrap((function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if ("function" != typeof n || n.options) {
                    t.next = 4;
                    break
                  }
                  return t.next = 3, n();
                case 3:
                  n = t.sent;
                case 4:
                  return o.components[a] = n = v(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, a) : n);
                case 6:
                case "end":
                  return t.stop()
              }
            }), t)
          })));
          return function (e, n, r, o) {
            return t.apply(this, arguments)
          }
        }()))
      }

      function _(t) {
        return R.apply(this, arguments)
      }

      function R() {
        return (R = Object(o.a)(regeneratorRuntime.mark((function t(e) {
          return regeneratorRuntime.wrap((function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return");
              case 2:
                return t.next = 4, x(e);
              case 4:
                return t.abrupt("return", c(c({}, e), {}, {
                  meta: g(e).map((function (t, n) {
                    return c(c({}, t.options.meta), (e.matched[n] || {}).meta)
                  }))
                }));
              case 5:
              case "end":
                return t.stop()
            }
          }), t)
        })))).apply(this, arguments)
      }

      function O(t, e) {
        return j.apply(this, arguments)
      }

      function j() {
        return (j = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
          var o, a, u, s;
          return regeneratorRuntime.wrap((function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return e.context || (e.context = {
                  isStatic: !1,
                  isDev: !1,
                  isHMR: !1,
                  app: e,
                  store: e.store,
                  payload: n.payload,
                  error: n.error,
                  base: "/",
                  env: {
                    NODE_ENV: "production",
                    SERVER_LOG_OPEN: "1",
                    VUE_APP_BASE_API: "https://api.iyingdi.com",
                    VUE_APP_BASE_OLD_API: "https://api2.iyingdi.com",
                    VUE_APP_SECRET_KEY: "b8d5b38577b8bb382b0c783b474b95f9",
                    VUE_APP_TOOL_API: "https://tool.iyingdi.com",
                    VUE_TOOL_SECRET_KEY: "9a1603fcbf889305df7b59c5561dd926",
                    VUE_APP_BASE_HOST: "https://www.iyingdi.com",
                    VUE_APP_BASE_M_HOST: "https://mob.iyingdi.com",
                    VUE_APP_CREATOR_HOST: "https://creator.iyingdi.com",
                    VUE_APP_GAME_CHIDUN_URL: "https://dun.iyingdi.com/eatdun/index.html",
                    VUE_APP_CDN_URL: "https://pic.iyingdi.com"
                  }
                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, n, o) {
                  if (t) {
                    e.context._redirected = !0;
                    var a = Object(r.a)(n);
                    if ("number" == typeof t || "undefined" !== a && "object" !== a || (o = n || {}, n = t, a = Object(r.a)(n), t = 302), "object" === a && (n = e.router.resolve(n).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)) throw n = D(n, o), window.location.replace(n), new Error("ERR_REDIRECT");
                    e.context.next({
                      path: n,
                      query: o,
                      status: t
                    })
                  }
                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([_(n.route), _(n.from)]);
              case 3:
                o = t.sent, a = Object(i.a)(o, 2), u = a[0], s = a[1], n.route && (e.context.route = u), n.from && (e.context.from = s), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
              case 15:
              case "end":
                return t.stop()
            }
          }), t)
        })))).apply(this, arguments)
      }

      function k(t, e) {
        return !t.length || e._redirected || e._errored ? Promise.resolve() : $(t[0], e).then((function () {
          return k(t.slice(1), e)
        }))
      }

      function $(t, e) {
        var n;
        return (n = 2 === t.length ? new Promise((function (n) {
          t(e, (function (t, r) {
            t && e.error(t), n(r = r || {})
          }))
        })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
      }

      function U(t, e) {
        if ("hash" === e) return window.location.hash.replace(/^#\//, "");
        t = decodeURI(t).slice(0, -1);
        var n = decodeURI(window.location.pathname);
        t && n.startsWith(t) && (n = n.slice(t.length));
        var r = (n || "/") + window.location.search + window.location.hash;
        return encodeURI(r)
      }

      function C(t, e) {
        return function (t, e) {
          for (var n = new Array(t.length), o = 0; o < t.length; o++) "object" === Object(r.a)(t[o]) && (n[o] = new RegExp("^(?:" + t[o].pattern + ")$", L(e)));
          return function (e, r) {
            for (var o = "", a = e || {}, i = (r || {}).pretty ? E : encodeURIComponent, u = 0; u < t.length; u++) {
              var s = t[u];
              if ("string" != typeof s) {
                var c = a[s.name || "pathMatch"],
                  l = void 0;
                if (null == c) {
                  if (s.optional) {
                    s.partial && (o += s.prefix);
                    continue
                  }
                  throw new TypeError('Expected "' + s.name + '" to be defined')
                }
                if (Array.isArray(c)) {
                  if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                  if (0 === c.length) {
                    if (s.optional) continue;
                    throw new TypeError('Expected "' + s.name + '" to not be empty')
                  }
                  for (var f = 0; f < c.length; f++) {
                    if (l = i(c[f]), !n[u].test(l)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(l) + "`");
                    o += (0 === f ? s.prefix : s.delimiter) + l
                  }
                } else {
                  if (l = s.asterisk ? E(c, !0) : i(c), !n[u].test(l)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + l + '"');
                  o += s.prefix + l
                }
              } else o += s
            }
            return o
          }
        }(function (t, e) {
          var n, r = [],
            o = 0,
            a = 0,
            i = "",
            u = e && e.delimiter || "/";
          for (; null != (n = S.exec(t));) {
            var s = n[0],
              c = n[1],
              l = n.index;
            if (i += t.slice(a, l), a = l + s.length, c) i += c[1];
            else {
              var f = t[a],
                d = n[2],
                h = n[3],
                p = n[4],
                m = n[5],
                b = n[6],
                v = n[7];
              i && (r.push(i), i = "");
              var g = null != d && null != f && f !== d,
                y = "+" === b || "*" === b,
                w = "?" === b || "*" === b,
                x = n[2] || u,
                _ = p || m;
              r.push({
                name: h || o++,
                prefix: d || "",
                delimiter: x,
                optional: w,
                repeat: y,
                partial: g,
                asterisk: Boolean(v),
                pattern: _ ? T(_) : v ? ".*" : "[^" + A(x) + "]+?"
              })
            }
          }
          a < t.length && (i += t.substr(a));
          i && r.push(i);
          return r
        }(t, e), e)
      }

      function q(t, e) {
        var n = {},
          r = c(c({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n
      }

      function P(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else try {
          e = JSON.stringify(t, null, 2)
        } catch (n) {
          e = "[".concat(t.constructor.name, "]")
        }
        return c(c({}, t), {}, {
          message: e,
          statusCode: t.statusCode || t.status || t.response && t.response.status || 500
        })
      }
      window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
        window.onNuxtReadyCbs.push(t)
      };
      var S = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

      function E(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, (function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        }))
      }

      function A(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }

      function T(t) {
        return t.replace(/([=!:$/()])/g, "\\$1")
      }

      function L(t) {
        return t && t.sensitive ? "" : "i"
      }

      function D(t, e) {
        var n, r = t.indexOf("://"); - 1 !== r ? (n = t.substring(0, r), t = t.substring(r + 3)) : t.startsWith("//") && (t = t.substring(2));
        var o, a = t.split("/"),
          u = (n ? n + "://" : "//") + a.shift(),
          s = a.join("/");
        if ("" === s && 1 === a.length && (u += "/"), 2 === (a = s.split("#")).length) {
          var c = a,
            l = Object(i.a)(c, 2);
          s = l[0], o = l[1]
        }
        return u += s ? "/" + s : "", e && "{}" !== JSON.stringify(e) && (u += (2 === t.split("?").length ? "&" : "?") + function (t) {
          return Object.keys(t).sort().map((function (e) {
            var n = t[e];
            return null == n ? "" : Array.isArray(n) ? n.slice().map((function (t) {
              return [e, "=", t].join("")
            })).join("&") : e + "=" + n
          })).filter(Boolean).join("&")
        }(e)), u += o ? "#" + o : ""
      }

      function z(t, e, n) {
        t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
      }

      function I(t) {
        return t.replace(/\/+$/, "") || "/"
      }

      function N(t, e) {
        return I(t) === I(e)
      }

      function M(t) {
        try {
          window.history.scrollRestoration = t
        } catch (t) {}
      }
    },
    160: function (t, e, n) {
      "use strict";
      n(97), n(64), n(126), n(96), n(51), n(52), n(38), n(11), n(39), n(125), n(42), n(65), n(46);
      var r = n(1);

      function o(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return a(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[r++]
                }
              },
              e: function (t) {
                throw t
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, u = !0,
          s = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next();
            return u = t.done, t
          },
          e: function (t) {
            s = !0, i = t
          },
          f: function () {
            try {
              u || null == n.return || n.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }
      var i = window.requestIdleCallback || function (t) {
          var e = Date.now();
          return setTimeout((function () {
            t({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - e))
              }
            })
          }), 1)
        },
        u = window.cancelIdleCallback || function (t) {
          clearTimeout(t)
        },
        s = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
          t.forEach((function (t) {
            var e = t.intersectionRatio,
              n = t.target;
            e <= 0 || n.__prefetch()
          }))
        }));
      e.a = {
        name: "NuxtLink",
        extends: r.default.component("RouterLink"),
        props: {
          prefetch: {
            type: Boolean,
            default: !0
          },
          noPrefetch: {
            type: Boolean,
            default: !1
          }
        },
        mounted: function () {
          this.prefetch && !this.noPrefetch && (this.handleId = i(this.observe, {
            timeout: 2e3
          }))
        },
        beforeDestroy: function () {
          u(this.handleId), this.__observed && (s.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function () {
            s && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), s.observe(this.$el), this.__observed = !0)
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
          },
          getPrefetchComponents: function () {
            return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
              return t.components.default
            })).filter((function (t) {
              return "function" == typeof t && !t.options && !t.__prefetched
            }))
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              s.unobserve(this.$el);
              var t, e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done;) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch((function () {})), n.__prefetched = !0
                }
              } catch (t) {
                e.e(t)
              } finally {
                e.f()
              }
            }
          }
        }
      }
    },
    235: function (t, e, n) {
      "use strict";
      var r = {};
      r.auth = n(426), r.auth = r.auth.default || r.auth, e.a = r
    },
    276: function (t, e, n) {},
    381: function (t, e) {},
    382: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getModuleInfo: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/module-info");
            return t.post(o, r)
          },
          postUpdate: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/update-post");
            return t.post(o, r)
          },
          postDelete: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/delete");
            return t.post(o, r)
          },
          postTop: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/top");
            return t.post(o, r)
          },
          postRecommend: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/to-recommend");
            return t.post(o, r)
          },
          postToFeed: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/to-feed");
            return t.post(o, r)
          },
          modifyComment: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/update-comment");
            return t.post(o, r)
          },
          deleteComment: function (r) {
            var o = {
                comment_id: r
              },
              a = e.handleRequestUrl(n, "/web/post/delete-comment");
            return t.post(a, o)
          }
        }
      }
    },
    383: function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return {
          getHearthstoneCard: function (e) {
            return t.get("hearthstone/card/".concat(e))
          },
          getMagicCard: function (e) {
            return t.get("magic/card/".concat(e))
          },
          getVerseCard: function (e) {
            return t.get("verse/card/".concat(e))
          },
          getGwentCard: function (e) {
            return t.get("gwent/card/".concat(e))
          }
        }
      }
    },
    384: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getNavTagList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/tag/main-tag-bar");
            return t.post(o, r)
          },
          getIndexRecommendList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/feed/recommend-content-list");
            return t.post(o, r)
          },
          getCommunityRecommendList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/recommend-list");
            return t.post(o, r)
          },
          getTopInTag: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/feed/top-content");
            return t.post(o, r)
          },
          getFeedInTag: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/feed/tag-content-list");
            return t.post(o, r)
          },
          getTopPostsInTag: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/top-post-list");
            return t.post(o, r)
          },
          getPostsInTag: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/post-list");
            return t.post(o, r)
          },
          getTagSideModule: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/tag/side-module-list");
            return t.post(o, r)
          },
          getPopularList: function () {
            var r = e.handleRequestUrl(n, "/web/bbs/hot-top");
            return t.post(r, {})
          }
        }
      }
    },
    385: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          postCreate: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/create-post");
            return t.post(o, r)
          },
          getExpressionList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/expression-list");
            return t.post(o, r)
          },
          getTagsList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/tag-clazz-list");
            return t.post(o, r)
          },
          getPostInfo: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/info");
            return t.post(o, r)
          },
          getBallotInfo: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-info");
            return t.post(o, r)
          },
          postBallot: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot");
            return t.post(o, r)
          },
          postBallotSetOpt: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-set-option");
            return t.post(o, r)
          },
          getBallotRank: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-rank");
            return t.post(o, r)
          },
          postLike: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/like");
            return t.post(o, r)
          },
          postCollect: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/collect");
            return t.post(o, r)
          },
          postVote: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/vote");
            return t.post(o, r)
          },
          postAward: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/award");
            return t.post(o, r)
          },
          getPostRewardRank: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/reward-rank");
            return t.post(o, r)
          },
          getRichPostRecommendPosts: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/recommended-posts");
            return t.post(o, r)
          },
          getPostSideModuleList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/side-module-list");
            return t.post(o, r)
          }
        }
      }
    },
    386: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          postCreate: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/create-post");
            return t.post(o, r)
          },
          getExpressionList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/expression-list");
            return t.post(o, r)
          },
          getTagsList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/tag-clazz-list");
            return t.post(o, r)
          },
          getPostInfo: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/info-tmp-xxxx");
            return t.post(o, r)
          },
          getBallotInfo: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-info");
            return t.post(o, r)
          },
          postBallot: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot");
            return t.post(o, r)
          },
          postBallotSetOpt: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-set-option");
            return t.post(o, r)
          },
          getBallotRank: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/ballot-rank");
            return t.post(o, r)
          },
          postLike: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/like");
            return t.post(o, r)
          },
          postCollect: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/collect");
            return t.post(o, r)
          },
          postVote: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/vote");
            return t.post(o, r)
          },
          postAward: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/award");
            return t.post(o, r)
          },
          getPostRewardRank: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/reward-rank");
            return t.post(o, r)
          },
          getPostSideModuleList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/side-module-list");
            return t.post(o, r)
          }
        }
      }
    },
    387: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getArticle: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/article-info");
            return t.post(o, r)
          }
        }
      }
    },
    388: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getSendCode: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/send-token");
            return t.post(o, r)
          },
          checkSendCode: function (r) {
            var o = e.handleRequestUrl(n, "/web/user/check-send-token");
            return t.post(o, r || {})
          },
          loginAction: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/login");
            return t.post(o, r)
          },
          refreshLoginToken: function (r) {
            var o = e.handleRequestUrl(n, "/web/user/refresh-login");
            return t.post(o, {
              refresh_token: r
            })
          },
          getUserDetail: function () {
            var r = e.handleRequestUrl(n, "/web/user/user-detail");
            return t.post(r, {})
          },
          getQrCodeStr: function () {
            var r = e.handleRequestUrl(n, "/web/user/code");
            return t.post(r, {})
          },
          qrLogin: function (r) {
            var o = {
                qr_code: r
              },
              a = e.handleRequestUrl(n, "/web/user/qr-login");
            return t.post(a, o)
          },
          caseAvatar: function () {
            var r = e.handleRequestUrl(n, "/web/user/check-avatar-update");
            return t.post(r, {})
          },
          modifyDetail: function (r) {
            var o = {
                field_json: r
              },
              a = e.handleRequestUrl(n, "/web/user/update-user-info");
            return t.post(a, o)
          },
          nicknameCost: function () {
            var r = e.handleRequestUrl(n, "/web/user/nickname-info");
            return t.post(r, {})
          },
          nicknameModify: function (r) {
            var o = {
                nickname: r
              },
              a = e.handleRequestUrl(n, "/web/user/update-nickname");
            return t.post(a, o)
          },
          modifyPassword: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/reset-password");
            return t.post(o, r)
          },
          modifyBindPhone: function (r) {
            var o = e.handleRequestUrl(n, "/web/user/bind-mobile");
            return t.post(o, r)
          },
          modifyEmail: function (r) {
            var o = {
                email: r
              },
              a = e.handleRequestUrl(n, "/web/user/update-email");
            return t.post(a, o)
          }
        }
      }
    },
    389: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getFollowList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/follow-list");
            return t.post(o, r)
          },
          operateRelationship: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/operate-relationship");
            return t.post(o, r)
          },
          getUserDetail: function (r) {
            var o = e.handleRequestUrl(n, "/web/user/user-info");
            return t.post(o, {
              user_id: r
            })
          },
          getUserCenterInfo: function () {
            var r = e.handleRequestUrl(n, "/web/user/center-info");
            return t.post(r, {})
          },
          getCollectedList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/collect-list");
            return t.post(o, r)
          },
          getHistoryList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/read-record-list");
            return t.post(o, r)
          },
          getFireList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/like-list");
            return t.post(o, r)
          },
          getEventList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/event-list");
            return t.post(o, r)
          },
          getFollowEventList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/follow-event-list");
            return t.post(o, r)
          },
          getPostList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/post-list");
            return t.post(o, r)
          },
          getNoticeList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/notification-list");
            return t.post(o, r)
          },
          getChatList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/chat-channel-list");
            return t.post(o, r)
          },
          deleteChatItem: function (r) {
            var o = {
                target_user_id: r
              },
              a = e.handleRequestUrl(n, "/web/user/delete-chat-channel");
            return t.post(a, o)
          },
          getSystemChatDetail: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/kefu-content-list");
            return t.post(o, r)
          },
          getChatDetail: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/chat-content-list");
            return t.post(o, r)
          },
          sendSystemChat: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/send-kefu-msg");
            return t.post(o, r)
          },
          sendChat: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/user/send-chat-msg");
            return t.post(o, r)
          }
        }
      }
    },
    390: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getHotWord: function (r) {
            var o = {
                search_type: r
              },
              a = e.handleRequestUrl(n, "/web/search/hot-word-list");
            return t.post(a, o)
          },
          getList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/search/list");
            return t.post(o, r)
          }
        }
      }
    },
    391: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getCommentList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/comment-list");
            return t.post(o, r)
          },
          getChildCommentList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/comment-more");
            return t.post(o, r)
          },
          createComment: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/post/create-comment");
            return t.post(o, r)
          },
          likeComment: function (r) {
            var o = e.handleRequestUrl(n, "/web/post/like-comment");
            return t.post(o, r)
          },
          contentReport: function (r) {
            var o = e.handleRequestUrl(n, "/web/post/report");
            return t.post(o, r)
          }
        }
      }
    },
    392: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getNotifyNumList: function () {
            var r = e.handleRequestUrl(n, "/web/user/notify-number");
            return t.post(r, {})
          }
        }
      }
    },
    393: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return {
          getCompilationList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/web/bbs/featured");
            return t.post(o, r)
          },
          getAlbumPost: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r.order = "desc";
            var o = e.handleRequestUrl(n, "/web/bbs/featured-posts");
            return t.post(o, r)
          }
        }
      }
    },
    394: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        var n = t.defaults.baseURL;
        return t.defaults.headers.common["Tool-Id"] = "marvel", {
          configData: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/config");
            return t.post(o, r)
          },
          cardsList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/card-list");
            return t.post(o, r)
          },
          heroCardsList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/hero-card-list");
            return t.post(o, r)
          },
          cardDetail: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/card-detail");
            return t.post(o, r)
          },
          herosList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/hero-list");
            return t.post(o, r)
          },
          heroDetail: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/hero-detail");
            return t.post(o, r)
          },
          createDeck: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-create");
            return t.post(o, r)
          },
          updateDeck: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-update");
            return t.post(o, r)
          },
          updateDeckName: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-update-name");
            return t.post(o, r)
          },
          userDeckDelete: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-delete");
            return t.post(o, r)
          },
          userDeckList: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-list");
            return t.post(o, r)
          },
          userDeckDetail: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-detail");
            return t.post(o, r)
          },
          deckDetailByCode: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/get-deck-info");
            return t.post(o, r)
          },
          deckExport: function () {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = e.handleRequestUrl(n, "/marvel/battle-web/deck-export");
            return t.post(o, r)
          }
        }
      }
    },
    398: function (t, e, n) {
      "use strict";
      n(11), n(46), n(99);
      var r = n(18),
        o = n(1),
        a = n(0),
        i = window.__NUXT__;

      function u() {
        if (!this._hydrated) return this.$fetch()
      }

      function s() {
        if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
          var t;
          this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
          var e = i.fetch[this._fetchKey];
          if (e && e._error) this.$fetchState.error = e._error;
          else
            for (var n in e) o.default.set(this.$data, n, e[n])
        }
      }

      function c() {
        var t = this;
        return this._fetchPromise || (this._fetchPromise = l.call(this).then((function () {
          delete t._fetchPromise
        }))), this._fetchPromise
      }

      function l() {
        return f.apply(this, arguments)
      }

      function f() {
        return (f = Object(r.a)(regeneratorRuntime.mark((function t() {
          var e, n, r, o = this;
          return regeneratorRuntime.wrap((function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
              case 9:
                t.next = 15;
                break;
              case 11:
                t.prev = 11, t.t0 = t.catch(6), e = Object(a.p)(t.t0);
              case 15:
                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                  t.next = 19;
                  break
                }
                return t.next = 19, new Promise((function (t) {
                  return setTimeout(t, r)
                }));
              case 19:
                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                  return o.$nuxt.nbFetching--
                }));
              case 23:
              case "end":
                return t.stop()
            }
          }), t, this, [
            [6, 11]
          ])
        })))).apply(this, arguments)
      }
      e.a = {
        beforeCreate: function () {
          Object(a.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
            pending: !1,
            error: null,
            timestamp: Date.now()
          }), this.$fetch = c.bind(this), Object(a.a)(this, "created", s), Object(a.a)(this, "beforeMount", u))
        }
      }
    },
    413: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(45), n(97), n(64), n(96), n(51), n(171), n(38), n(98), n(11), n(37), n(125), n(42), n(136), n(65), n(70), n(46);
          var e = n(16),
            r = (n(99), n(18)),
            o = (n(139), n(419), n(424), n(425), n(1)),
            a = n(375),
            i = n(235),
            u = n(0),
            s = n(50),
            c = n(398),
            l = n(160);

          function f(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
              if (Array.isArray(t) || (n = function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return d(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return r >= t.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: t[r++]
                    }
                  },
                  e: function (t) {
                    throw t
                  },
                  f: o
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
              u = !1;
            return {
              s: function () {
                n = t[Symbol.iterator]()
              },
              n: function () {
                var t = n.next();
                return i = t.done, t
              },
              e: function (t) {
                u = !0, a = t
              },
              f: function () {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (u) throw a
                }
              }
            }
          }

          function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
          }
          o.default.__nuxt__fetch__mixin__ || (o.default.mixin(c.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(l.a.name, l.a), o.default.component("NLink", l.a), t.fetch || (t.fetch = a.a);
          var h, p, m = [],
            b = window.__NUXT__ || {};
          Object.assign(o.default.config, {
            productionTip: !1,
            devtools: !1,
            silent: !0,
            performance: !1
          });
          var v = o.default.config.errorHandler || console.error;

          function g(t, e, n) {
            for (var r = function (t) {
                var r = function (t, e) {
                  if (!t || !t.options || !t.options[e]) return {};
                  var n = t.options[e];
                  if ("function" == typeof n) {
                    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) o[a - 2] = arguments[a];
                    return n.apply(void 0, o)
                  }
                  return n
                }(t, "transition", e, n) || {};
                return "string" == typeof r ? {
                  name: r
                } : r
              }, o = n ? Object(u.g)(n) : [], a = Math.max(t.length, o.length), i = [], s = function (e) {
                var n = Object.assign({}, r(t[e])),
                  a = Object.assign({}, r(o[e]));
                Object.keys(n).filter((function (t) {
                  return void 0 !== n[t] && !t.toLowerCase().includes("leave")
                })).forEach((function (t) {
                  a[t] = n[t]
                })), i.push(a)
              }, c = 0; c < a; c++) s(c);
            return i
          }

          function y(t, e, n) {
            return w.apply(this, arguments)
          }

          function w() {
            return (w = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
              var o, a, i, s, c = this;
              return regeneratorRuntime.wrap((function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this._routeChanged = Boolean(h.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(u.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                      t.next = 12;
                      break
                    }
                    return t.next = 9, Object(u.r)(e, (function (t, e) {
                      return {
                        Component: t,
                        instance: e
                      }
                    }));
                  case 9:
                    o = t.sent, o.some((function (t) {
                      var r = t.Component,
                        o = t.instance,
                        a = r.options.watchQuery;
                      return !0 === a || (Array.isArray(a) ? a.some((function (t) {
                        return c._diffQuery[t]
                      })) : "function" == typeof a && a.apply(o, [e.query, n.query]))
                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                  case 12:
                    r(), t.next = 26;
                    break;
                  case 15:
                    if (t.prev = 15, t.t0 = t.catch(5), a = t.t0 || {}, i = a.statusCode || a.status || a.response && a.response.status || 500, s = a.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(s)) {
                      t.next = 23;
                      break
                    }
                    return window.location.reload(!0), t.abrupt("return");
                  case 23:
                    this.error({
                      statusCode: i,
                      message: s
                    }), this.$nuxt.$emit("routeChanged", e, n, a), r();
                  case 26:
                  case "end":
                    return t.stop()
                }
              }), t, this, [
                [5, 15]
              ])
            })))).apply(this, arguments)
          }

          function x(t, e) {
            return b.serverRendered && e && Object(u.b)(t, e), t._Ctor = t, t
          }

          function _(t) {
            var e = Object(u.f)(t.options.base, t.options.mode);
            return Object(u.d)(t.match(e), function () {
              var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, a) {
                var i;
                return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if ("function" != typeof e || e.options) {
                        t.next = 4;
                        break
                      }
                      return t.next = 3, e();
                    case 3:
                      e = t.sent;
                    case 4:
                      return i = x(Object(u.s)(e), b.data ? b.data[a] : null), r.components[o] = i, t.abrupt("return", i);
                    case 7:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })));
              return function (e, n, r, o, a) {
                return t.apply(this, arguments)
              }
            }())
          }

          function R(t, e, n) {
            var r = this,
              o = ["auth"],
              a = !1;
            if (void 0 !== n && (o = [], (n = Object(u.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function (t) {
                t.options.middleware && (o = o.concat(t.options.middleware))
              }))), o = o.map((function (t) {
                return "function" == typeof t ? t : ("function" != typeof i.a[t] && (a = !0, r.error({
                  statusCode: 500,
                  message: "Unknown middleware " + t
                })), i.a[t])
              })), !a) return Object(u.o)(o, e)
          }

          function O(t, e, n) {
            return j.apply(this, arguments)
          }

          function j() {
            return (j = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
              var a, i, c, l, d, p, b, v, y, w, x, _, O, j, k, $ = this;
              return regeneratorRuntime.wrap((function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return", o());
                  case 2:
                    return !1, e === n ? (m = [], !0) : (a = [], m = Object(u.g)(n, a).map((function (t, e) {
                      return Object(u.c)(n.matched[a[e]].path)(n.params)
                    }))), i = !1, c = function (t) {
                      n.path === t.path && $.$loading.finish && $.$loading.finish(), n.path !== t.path && $.$loading.pause && $.$loading.pause(), i || (i = !0, o(t))
                    }, t.next = 8, Object(u.t)(h, {
                      route: e,
                      from: n,
                      next: c.bind(this)
                    });
                  case 8:
                    if (this._dateLastError = h.nuxt.dateErr, this._hadError = Boolean(h.nuxt.err), l = [], (d = Object(u.g)(e, l)).length) {
                      t.next = 27;
                      break
                    }
                    return t.next = 15, R.call(this, d, h.context);
                  case 15:
                    if (!i) {
                      t.next = 17;
                      break
                    }
                    return t.abrupt("return");
                  case 17:
                    return p = (s.a.options || s.a).layout, t.next = 20, this.loadLayout("function" == typeof p ? p.call(s.a, h.context) : p);
                  case 20:
                    return b = t.sent, t.next = 23, R.call(this, d, h.context, b);
                  case 23:
                    if (!i) {
                      t.next = 25;
                      break
                    }
                    return t.abrupt("return");
                  case 25:
                    return h.context.error({
                      statusCode: 404,
                      message: "This page could not be found"
                    }), t.abrupt("return", o());
                  case 27:
                    return d.forEach((function (t) {
                      t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                    })), this.setTransitions(g(d, e, n)), t.prev = 29, t.next = 32, R.call(this, d, h.context);
                  case 32:
                    if (!i) {
                      t.next = 34;
                      break
                    }
                    return t.abrupt("return");
                  case 34:
                    if (!h.context._errored) {
                      t.next = 36;
                      break
                    }
                    return t.abrupt("return", o());
                  case 36:
                    return "function" == typeof (v = d[0].options.layout) && (v = v(h.context)), t.next = 40, this.loadLayout(v);
                  case 40:
                    return v = t.sent, t.next = 43, R.call(this, d, h.context, v);
                  case 43:
                    if (!i) {
                      t.next = 45;
                      break
                    }
                    return t.abrupt("return");
                  case 45:
                    if (!h.context._errored) {
                      t.next = 47;
                      break
                    }
                    return t.abrupt("return", o());
                  case 47:
                    y = !0, t.prev = 48, w = f(d), t.prev = 50, w.s();
                  case 52:
                    if ((x = w.n()).done) {
                      t.next = 63;
                      break
                    }
                    if ("function" == typeof (_ = x.value).options.validate) {
                      t.next = 56;
                      break
                    }
                    return t.abrupt("continue", 61);
                  case 56:
                    return t.next = 58, _.options.validate(h.context);
                  case 58:
                    if (y = t.sent) {
                      t.next = 61;
                      break
                    }
                    return t.abrupt("break", 63);
                  case 61:
                    t.next = 52;
                    break;
                  case 63:
                    t.next = 68;
                    break;
                  case 65:
                    t.prev = 65, t.t0 = t.catch(50), w.e(t.t0);
                  case 68:
                    return t.prev = 68, w.f(), t.finish(68);
                  case 71:
                    t.next = 77;
                    break;
                  case 73:
                    return t.prev = 73, t.t1 = t.catch(48), this.error({
                      statusCode: t.t1.statusCode || "500",
                      message: t.t1.message
                    }), t.abrupt("return", o());
                  case 77:
                    if (y) {
                      t.next = 80;
                      break
                    }
                    return this.error({
                      statusCode: 404,
                      message: "This page could not be found"
                    }), t.abrupt("return", o());
                  case 80:
                    return t.next = 82, Promise.all(d.map(function () {
                      var t = Object(r.a)(regeneratorRuntime.mark((function t(r, o) {
                        var a, i, s, c, f, d, p, b, v;
                        return regeneratorRuntime.wrap((function (t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              if (r._path = Object(u.c)(e.matched[l[o]].path)(e.params), r._dataRefresh = !1, a = r._path !== m[o], $._routeChanged && a ? r._dataRefresh = !0 : $._paramChanged && a ? (i = r.options.watchParam, r._dataRefresh = !1 !== i) : $._queryChanged && (!0 === (s = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(s) ? r._dataRefresh = s.some((function (t) {
                                  return $._diffQuery[t]
                                })) : "function" == typeof s && (O || (O = Object(u.h)(e)), r._dataRefresh = s.apply(O[o], [e.query, n.query]))), $._hadError || !$._isMounted || r._dataRefresh) {
                                t.next = 6;
                                break
                              }
                              return t.abrupt("return");
                            case 6:
                              return c = [], f = r.options.asyncData && "function" == typeof r.options.asyncData, d = Boolean(r.options.fetch) && r.options.fetch.length, p = f && d ? 30 : 45, f && ((b = Object(u.q)(r.options.asyncData, h.context)).then((function (t) {
                                Object(u.b)(r, t), $.$loading.increase && $.$loading.increase(p)
                              })), c.push(b)), $.$loading.manual = !1 === r.options.loading, d && ((v = r.options.fetch(h.context)) && (v instanceof Promise || "function" == typeof v.then) || (v = Promise.resolve(v)), v.then((function (t) {
                                $.$loading.increase && $.$loading.increase(p)
                              })), c.push(v)), t.abrupt("return", Promise.all(c));
                            case 14:
                            case "end":
                              return t.stop()
                          }
                        }), t)
                      })));
                      return function (e, n) {
                        return t.apply(this, arguments)
                      }
                    }()));
                  case 82:
                    i || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                    break;
                  case 85:
                    if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (j = t.t2 || {}).message) {
                      t.next = 90;
                      break
                    }
                    return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, j));
                  case 90:
                    return m = [], Object(u.k)(j), "function" == typeof (k = (s.a.options || s.a).layout) && (k = k(h.context)), t.next = 96, this.loadLayout(k);
                  case 96:
                    this.error(j), this.$nuxt.$emit("routeChanged", e, n, j), o();
                  case 99:
                  case "end":
                    return t.stop()
                }
              }), t, this, [
                [29, 85],
                [48, 73],
                [50, 65, 68, 71]
              ])
            })))).apply(this, arguments)
          }

          function k(t, n) {
            Object(u.d)(t, (function (t, n, r, a) {
              return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[a] = t), t
            }))
          }

          function $(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
            var n = e ? (s.a.options || s.a).layout : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(h.context)), this.setLayout(n)
          }

          function U(t) {
            t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
          }

          function C(t, e) {
            var n = this;
            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
              var r = Object(u.h)(t),
                a = Object(u.g)(t),
                i = !1;
              o.default.nextTick((function () {
                r.forEach((function (t, e) {
                  if (t && !t._isDestroyed && t.constructor._dataRefresh && a[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                    var n = t.constructor.options.data.call(t);
                    for (var r in n) o.default.set(t.$data, r, n[r]);
                    i = !0
                  }
                })), i && window.$nuxt.$nextTick((function () {
                  window.$nuxt.$emit("triggerScroll")
                })), U(n)
              }))
            }
          }

          function q(t) {
            window.onNuxtReadyCbs.forEach((function (e) {
              "function" == typeof e && e(t)
            })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), p.afterEach((function (e, n) {
              o.default.nextTick((function () {
                return t.$nuxt.$emit("routeChanged", e, n)
              }))
            }))
          }

          function P() {
            return (P = Object(r.a)(regeneratorRuntime.mark((function t(e) {
              var n, r, a, i, s;
              return regeneratorRuntime.wrap((function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return h = e.app, p = e.router, e.store, n = new o.default(h), r = b.layout || "default", t.next = 7, n.loadLayout(r);
                  case 7:
                    return n.setLayout(r), a = function () {
                      n.$mount("#__nuxt"), p.afterEach(k), p.afterEach($.bind(n)), p.afterEach(C.bind(n)), o.default.nextTick((function () {
                        q(n)
                      }))
                    }, t.next = 11, Promise.all(_(p));
                  case 11:
                    if (i = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), i.length && (n.setTransitions(g(i, p.currentRoute)), m = p.currentRoute.matched.map((function (t) {
                        return Object(u.c)(t.path)(p.currentRoute.params)
                      }))), n.$loading = {}, b.error && n.error(b.error), p.beforeEach(y.bind(n)), p.beforeEach(O.bind(n)), !b.serverRendered || !Object(u.n)(b.routePath, n.context.route.path)) {
                      t.next = 20;
                      break
                    }
                    return t.abrupt("return", a());
                  case 20:
                    return s = function () {
                      k(p.currentRoute, p.currentRoute), $.call(n, p.currentRoute), U(n), a()
                    }, t.next = 23, new Promise((function (t) {
                      return setTimeout(t, 0)
                    }));
                  case 23:
                    O.call(n, p.currentRoute, p.currentRoute, (function (t) {
                      if (t) {
                        var e = p.afterEach((function (t, n) {
                          e(), s()
                        }));
                        p.push(t, void 0, (function (t) {
                          t && v(t)
                        }))
                      } else s()
                    }));
                  case 24:
                  case "end":
                    return t.stop()
                }
              }), t)
            })))).apply(this, arguments)
          }
          Object(s.b)(null, b.config).then((function (t) {
            return P.apply(this, arguments)
          })).catch(v)
        }.call(this, n(14))
    },
    435: function (t, e, n) {
      "use strict";
      n(276)
    },
    50: function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return jt
      })), n.d(e, "a", (function () {
        return x.a
      }));
      n(51), n(38), n(11), n(99);
      var r = n(18),
        o = n(23),
        a = n(1),
        i = n(26),
        u = n(376),
        s = n(236),
        c = n.n(s),
        l = n(94),
        f = n.n(l),
        d = n(123),
        h = n(0);
      n(274), n(171);
      "scrollRestoration" in window.history && (Object(h.u)("manual"), window.addEventListener("beforeunload", (function () {
        Object(h.u)("auto")
      })), window.addEventListener("load", (function () {
        Object(h.u)("manual")
      })));
      var p = function () {},
        m = d.a.prototype.push;
      d.a.prototype.push = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return m.call(this, t, e, n)
      }, a.default.use(d.a);
      var b = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = Object(h.g)(t);
          (o.some((function (t) {
            return t.options.scrollToTop
          })) || o.length < 2 && o.every((function (t) {
            return !1 !== t.options.scrollToTop
          }))) && (r = {
            x: 0,
            y: 0
          }), n && (r = n);
          var a = window.$nuxt;
          return (t.path === e.path && t.hash !== e.hash || t === e) && a.$nextTick((function () {
            return a.$emit("triggerScroll")
          })), new Promise((function (e) {
            a.$once("triggerScroll", (function () {
              if (t.hash) {
                var n = t.hash;
                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                try {
                  document.querySelector(n) && (r = {
                    selector: n
                  })
                } catch (t) {}
              }
              e(r)
            }))
          }))
        },
        routes: [{
          path: "/tz/acount",
          component: function () {
            return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(6), n.e(11), n.e(34)]).then(n.bind(null, 997)))
          },
          children: [{
            path: "",
            component: function () {
              return Object(h.m)(n.e(38).then(n.bind(null, 998)))
            },
            name: "tz-acount"
          }, {
            path: "collected",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(33)]).then(n.bind(null, 999)))
            },
            name: "tz-acount-collected"
          }, {
            path: "fire",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(35)]).then(n.bind(null, 1e3)))
            },
            name: "tz-acount-fire"
          }, {
            path: "friendnews",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(36)]).then(n.bind(null, 1001)))
            },
            name: "tz-acount-friendnews"
          }, {
            path: "history",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(37)]).then(n.bind(null, 1002)))
            },
            name: "tz-acount-history"
          }, {
            path: "notify",
            component: function () {
              return Object(h.m)(n.e(39).then(n.bind(null, 1003)))
            },
            children: [{
              path: "",
              component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(40)]).then(n.bind(null, 1004)))
              },
              name: "tz-acount-notify"
            }, {
              path: "notice",
              component: function () {
                return Object(h.m)(n.e(41).then(n.bind(null, 1005)))
              },
              name: "tz-acount-notify-notice"
            }, {
              path: "private",
              component: function () {
                return Object(h.m)(n.e(42).then(n.bind(null, 1006)))
              },
              name: "tz-acount-notify-private"
            }]
          }, {
            path: "yingdi",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(43)]).then(n.bind(null, 1007)))
            },
            name: "tz-acount-yingdi"
          }]
        }, {
          path: "/tz/community",
          component: function () {
            return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(44)]).then(n.bind(null, 1008)))
          },
          name: "tz-community"
        }, {
          path: "/tz/examine",
          component: function () {
            return Object(h.m)(Promise.all([n.e(4), n.e(0), n.e(7), n.e(6), n.e(48), n.e(47)]).then(n.bind(null, 1009)))
          },
          name: "tz-examine"
        }, {
          path: "/tz/gamelogin",
          component: function () {
            return Object(h.m)(Promise.all([n.e(5), n.e(49)]).then(n.bind(null, 1010)))
          },
          name: "tz-gamelogin"
        }, {
          path: "/tz/login",
          component: function () {
            return Object(h.m)(Promise.all([n.e(5), n.e(50)]).then(n.bind(null, 1011)))
          },
          name: "tz-login"
        }, {
          path: "/tz/popular",
          component: function () {
            return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(56)]).then(n.bind(null, 1012)))
          },
          name: "tz-popular"
        }, {
          path: "/tz/search",
          component: function () {
            return Object(h.m)(n.e(60).then(n.bind(null, 1013)))
          },
          name: "tz-search"
        }, {
          path: "/tz/setting",
          component: function () {
            return Object(h.m)(n.e(61).then(n.bind(null, 1014)))
          },
          children: [{
            path: "",
            component: function () {
              return Object(h.m)(Promise.all([n.e(98), n.e(5), n.e(8), n.e(9), n.e(62)]).then(n.bind(null, 1015)))
            },
            name: "tz-setting"
          }, {
            path: "vip",
            component: function () {
              return Object(h.m)(n.e(63).then(n.bind(null, 1016)))
            },
            name: "tz-setting-vip"
          }]
        }, {
          path: "/tz/version",
          component: function () {
            return Object(h.m)(n.e(73).then(n.bind(null, 1017)))
          },
          name: "tz-version"
        }, {
          path: "/tz/tool/marvel/card",
          component: function () {
            return Object(h.m)(n.e(66).then(n.bind(null, 1018)))
          },
          name: "tz-tool-marvel-card"
        }, {
          path: "/tz/tool/marvel/deck",
          component: function () {
            return Object(h.m)(n.e(70).then(n.bind(null, 1019)))
          },
          name: "tz-tool-marvel-deck"
        }, {
          path: "/tz/tool/marvel/hero",
          component: function () {
            return Object(h.m)(n.e(72).then(n.bind(null, 1020)))
          },
          name: "tz-tool-marvel-hero"
        }, {
          path: "/tz/tool/marvel/deck/create",
          component: function () {
            return Object(h.m)(Promise.all([n.e(12), n.e(67)]).then(n.bind(null, 1021)))
          },
          name: "tz-tool-marvel-deck-create"
        }, {
          path: "/tz/tool/marvel/card/detail/:id?",
          component: function () {
            return Object(h.m)(n.e(65).then(n.bind(null, 1022)))
          },
          name: "tz-tool-marvel-card-detail-id"
        }, {
          path: "/tz/tool/marvel/deck/detail/:id?",
          component: function () {
            return Object(h.m)(n.e(68).then(n.bind(null, 1023)))
          },
          name: "tz-tool-marvel-deck-detail-id"
        }, {
          path: "/tz/tool/marvel/deck/edit/:id?",
          component: function () {
            return Object(h.m)(Promise.all([n.e(12), n.e(69)]).then(n.bind(null, 1024)))
          },
          name: "tz-tool-marvel-deck-edit-id"
        }, {
          path: "/tz/tool/marvel/hero/detail/:id?",
          component: function () {
            return Object(h.m)(n.e(71).then(n.bind(null, 1025)))
          },
          name: "tz-tool-marvel-hero-detail-id"
        }, {
          path: "/tz/compilation/album/:id?",
          component: function () {
            return Object(h.m)(Promise.all([n.e(4), n.e(46)]).then(n.bind(null, 1026)))
          },
          name: "tz-compilation-album-id"
        }, {
          path: "/tz/compilation/:id?",
          component: function () {
            return Object(h.m)(n.e(45).then(n.bind(null, 1027)))
          },
          name: "tz-compilation-id"
        }, {
          path: "/tz/people/:id?",
          component: function () {
            return Object(h.m)(Promise.all([n.e(6), n.e(11), n.e(51)]).then(n.bind(null, 1028)))
          },
          children: [{
            path: "",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(54)]).then(n.bind(null, 1029)))
            },
            name: "tz-people-id"
          }, {
            path: "commentList",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(52)]).then(n.bind(null, 1030)))
            },
            name: "tz-people-id-commentList"
          }, {
            path: "fire",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(53)]).then(n.bind(null, 1031)))
            },
            name: "tz-people-id-fire"
          }, {
            path: "postList",
            component: function () {
              return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(55)]).then(n.bind(null, 1032)))
            },
            name: "tz-people-id-postList"
          }]
        }, {
          path: "/tz/post/:id?",
          component: function () {
            return Object(h.m)(Promise.all([n.e(4), n.e(0), n.e(7), n.e(6), n.e(59), n.e(57), n.e(58)]).then(n.bind(null, 1033)))
          },
          name: "tz-post-id"
        }, {
          path: "/tz/tag/:id?",
          component: function () {
            return Object(h.m)(Promise.all([n.e(4), n.e(0), n.e(1), n.e(7), n.e(64)]).then(n.bind(null, 1034)))
          },
          name: "tz-tag-id"
        }, {
          path: "/",
          component: function () {
            return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(10), n.e(32)]).then(n.bind(null, 1035)))
          },
          name: "index"
        }],
        fallback: !1
      };

      function v() {
        var t = new d.a(b),
          e = t.resolve.bind(t);
        return t.resolve = function (t, n, r) {
          return "string" == typeof t && (t = encodeURI(decodeURI(t))), e(t, n, r)
        }, t
      }
      n(64), n(65);
      var g = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: {
              type: String,
              default: ""
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            }
          },
          render: function (t, e) {
            var n = e.parent,
              r = e.data,
              o = e.props,
              a = n.$createElement;
            r.nuxtChild = !0;
            for (var i = n, u = n.$nuxt.nuxt.transitions, s = n.$nuxt.nuxt.defaultTransition, c = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && c++, n = n.$parent;
            r.nuxtChildDepth = c;
            var l = u[c] || s,
              f = {};
            y.forEach((function (t) {
              void 0 !== l[t] && (f[t] = l[t])
            }));
            var d = {};
            w.forEach((function (t) {
              "function" == typeof l[t] && (d[t] = l[t].bind(i))
            }));
            var h = d.beforeEnter;
            if (d.beforeEnter = function (t) {
                if (window.$nuxt.$nextTick((function () {
                    window.$nuxt.$emit("triggerScroll")
                  })), h) return h.call(i, t)
              }, !1 === l.css) {
              var p = d.leave;
              (!p || p.length < 2) && (d.leave = function (t, e) {
                p && p.call(i, t), i.$nextTick(e)
              })
            }
            var m = a("routerView", r);
            return o.keepAlive && (m = a("keep-alive", {
              props: o.keepAliveProps
            }, [m])), a("transition", {
              props: f,
              on: d
            }, [m])
          }
        },
        y = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
        w = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
        x = n(59),
        _ = (n(37), n(39), n(62), n(78)),
        R = {
          name: "Nuxt",
          components: {
            NuxtChild: g,
            NuxtError: x.a
          },
          props: {
            nuxtChildKey: {
              type: String,
              default: void 0
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            },
            name: {
              type: String,
              default: "default"
            }
          },
          errorCaptured: function (t) {
            this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
          },
          computed: {
            routerViewKey: function () {
              if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(h.c)(this.$route.matched[0].path)(this.$route.params);
              var t = Object(_.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
            }
          },
          beforeCreate: function () {
            a.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
          },
          render: function (t) {
            var e = this;
            return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
              return e.errorFromNuxtError = !1
            })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
              props: {
                to: "/"
              }
            }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
              return e.displayingNuxtError = !1
            })), t(x.a, {
              props: {
                error: this.nuxt.err
              }
            })) : t("NuxtChild", {
              key: this.routerViewKey,
              props: this.$props
            })
          }
        },
        O = (n(42), n(70), n(46), {
          name: "NuxtLoading",
          data: function () {
            return {
              percent: 0,
              show: !1,
              canSucceed: !0,
              reversed: !1,
              skipTimerCount: 0,
              rtl: !1,
              throttle: 200,
              duration: 5e3,
              continuous: !0
            }
          },
          computed: {
            left: function () {
              return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
            }
          },
          beforeDestroy: function () {
            this.clear()
          },
          methods: {
            clear: function () {
              clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
            },
            start: function () {
              var t = this;
              return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
                return t.startTimer()
              }), this.throttle) : this.startTimer(), this
            },
            set: function (t) {
              return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
            },
            get: function () {
              return this.percent
            },
            increase: function (t) {
              return this.percent = Math.min(100, Math.floor(this.percent + t)), this
            },
            decrease: function (t) {
              return this.percent = Math.max(0, Math.floor(this.percent - t)), this
            },
            pause: function () {
              return clearInterval(this._timer), this
            },
            resume: function () {
              return this.startTimer(), this
            },
            finish: function () {
              return this.percent = this.reversed ? 0 : 100, this.hide(), this
            },
            hide: function () {
              var t = this;
              return this.clear(), setTimeout((function () {
                t.show = !1, t.$nextTick((function () {
                  t.percent = 0, t.reversed = !1
                }))
              }), 500), this
            },
            fail: function (t) {
              return this.canSucceed = !1, this
            },
            startTimer: function () {
              var t = this;
              this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
              }), 100)
            }
          },
          render: function (t) {
            var e = t(!1);
            return this.show && (e = t("div", {
              staticClass: "nuxt-progress",
              class: {
                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
              },
              style: {
                width: this.percent + "%",
                left: this.left
              }
            })), e
          }
        }),
        j = (n(435), n(13)),
        k = Object(j.a)(O, void 0, void 0, !1, null, null, null).exports,
        $ = (n(436), n(437), n(438), n(439), n(400)),
        U = n(402),
        C = n(401);

      function q(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return P(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[r++]
                }
              },
              e: function (t) {
                throw t
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next();
            return i = t.done, t
          },
          e: function (t) {
            u = !0, a = t
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }

      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }
      var S = {
          _default: Object(h.s)($.a),
          _nonavbar: Object(h.s)(U.a),
          _onlyheader: Object(h.s)(C.a)
        },
        E = {
          render: function (t, e) {
            var n = t("NuxtLoading", {
                ref: "loading"
              }),
              r = t(this.layout || "nuxt"),
              o = t("div", {
                domProps: {
                  id: "__layout"
                },
                key: this.layoutName
              }, [r]),
              a = t("transition", {
                props: {
                  name: "layout",
                  mode: "out-in"
                },
                on: {
                  beforeEnter: function (t) {
                    window.$nuxt.$nextTick((function () {
                      window.$nuxt.$emit("triggerScroll")
                    }))
                  }
                }
              }, [o]);
            return t("div", {
              domProps: {
                id: "__nuxt"
              }
            }, [n, a])
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0
            }
          },
          beforeCreate: function () {
            a.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
          },
          created: function () {
            this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(regeneratorRuntime.mark((function e() {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t.$loading = t.$refs.loading;
                  case 1:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          watch: {
            "nuxt.err": "errorChanged"
          },
          computed: {
            isOffline: function () {
              return !this.isOnline
            },
            isFetching: function () {
              return this.nbFetching > 0
            }
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
            },
            refresh: function () {
              var t = this;
              return Object(r.a)(regeneratorRuntime.mark((function e() {
                var n, r;
                return regeneratorRuntime.wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if ((n = Object(h.h)(t.$route)).length) {
                        e.next = 3;
                        break
                      }
                      return e.abrupt("return");
                    case 3:
                      return t.$loading.start(), r = n.map((function (e) {
                        var n = [];
                        if (e.$options.fetch && e.$options.fetch.length && n.push(Object(h.q)(e.$options.fetch, t.context)), e.$fetch) n.push(e.$fetch());
                        else {
                          var r, o = q(Object(h.e)(e.$vnode.componentInstance));
                          try {
                            for (o.s(); !(r = o.n()).done;) {
                              var i = r.value;
                              n.push(i.$fetch())
                            }
                          } catch (t) {
                            o.e(t)
                          } finally {
                            o.f()
                          }
                        }
                        return e.$options.asyncData && n.push(Object(h.q)(e.$options.asyncData, t.context).then((function (t) {
                          for (var n in t) a.default.set(e.$data, n, t[n])
                        }))), Promise.all(n)
                      })), e.prev = 5, e.next = 8, Promise.all(r);
                    case 8:
                      e.next = 15;
                      break;
                    case 10:
                      e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(h.k)(e.t0), t.error(e.t0);
                    case 15:
                      t.$loading.finish();
                    case 16:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [5, 10]
                ])
              })))()
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                var t = (x.a.options || x.a).layout;
                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
              }
            },
            setLayout: function (t) {
              return t && S["_" + t] || (t = "default"), this.layoutName = t, this.layout = S["_" + t], this.layout
            },
            loadLayout: function (t) {
              return t && S["_" + t] || (t = "default"), Promise.resolve(S["_" + t])
            }
          },
          components: {
            NuxtLoading: k
          }
        };
      n(126), n(96), n(52), n(63);

      function A(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return T(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[r++]
                }
              },
              e: function (t) {
                throw t
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next();
            return i = t.done, t
          },
          e: function (t) {
            u = !0, a = t
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }

      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }
      a.default.use(i.b);
      var L = ["state", "getters", "actions", "mutations"],
        D = {};
      (D = function (t, e) {
        if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
        return "function" != typeof t && (t = Object.assign({}, t)), I(t, e)
      }(n(446), "store/index.js")).modules = D.modules || {}, N(n(447), "common.js"), N(n(448), "gameCard.js"), N(n(449), "notice.js"), N(n(450), "sideBar.js"), N(n(451), "tag.js"), N(n(452), "user.js");
      var z = D instanceof Function ? D : function () {
        return new i.b.Store(Object.assign({
          strict: !1
        }, D))
      };

      function I(t, e) {
        if (t.state && "function" != typeof t.state) {
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function () {
              return n
            }
          })
        }
        return t
      }

      function N(t, e) {
        t = t.default || t;
        var n = e.replace(/\.(js|mjs)$/, "").split("/"),
          r = n[n.length - 1];
        "store/".concat(e);
        if (t = "state" === r ? function (t, e) {
            if ("function" != typeof t) {
              var n = Object.assign({}, t);
              return function () {
                return n
              }
            }
            return I(t)
          }(t) : I(t), L.includes(r)) {
          var o = r;
          B(M(D, n, {
            isProperty: !0
          }), t, o)
        } else {
          "index" === r && (n.pop(), r = n[n.length - 1]);
          var a, i = M(D, n),
            u = A(L);
          try {
            for (u.s(); !(a = u.n()).done;) {
              var s = a.value;
              B(i, t[s], s)
            }
          } catch (t) {
            u.e(t)
          } finally {
            u.f()
          }!1 === t.namespaced && delete i.namespaced
        }
      }

      function M(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || o && 1 === e.length) return t;
        var a = e.shift();
        return t.modules[a] = t.modules[a] || {}, t.modules[a].namespaced = !0, t.modules[a].modules = t.modules[a].modules || {}, M(t.modules[a], e, {
          isProperty: o
        })
      }

      function B(t, e, n) {
        e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
      }
      var F = {
        SearchItemByDeck: function () {
          return n.e(27).then(n.bind(null, 1036)).then((function (t) {
            return t.default || t
          }))
        },
        SearchItemByFeed: function () {
          return n.e(28).then(n.bind(null, 1037)).then((function (t) {
            return t.default || t
          }))
        },
        SearchItemByUser: function () {
          return n.e(29).then(n.bind(null, 1038)).then((function (t) {
            return t.default || t
          }))
        },
        SetNickname: function () {
          return n.e(30).then(n.bind(null, 880)).then((function (t) {
            return t.default || t
          }))
        },
        SetPassword: function () {
          return n.e(8).then(n.bind(null, 975)).then((function (t) {
            return t.default || t
          }))
        },
        SetPhone: function () {
          return Promise.all([n.e(5), n.e(9)]).then(n.bind(null, 976)).then((function (t) {
            return t.default || t
          }))
        },
        SetSocial: function () {
          return n.e(31).then(n.bind(null, 881)).then((function (t) {
            return t.default || t
          }))
        }
      };
      for (var V in F) a.default.component(V, F[V]);
      var H = n(379),
        K = n.n(H),
        Q = function (t, e) {
          var n = t.req,
            r = t.res,
            o = !0;
          e("cookiz", K()(n, r, o))
        },
        J = (n(98), {
          render: function (t) {
            return t("ins", {
              class: ["adsbygoogle"],
              style: this.adStyle,
              attrs: {
                "data-ad-client": this.adClient,
                "data-ad-slot": this.adSlot || null,
                "data-ad-format": this.adFormat,
                "data-ad-region": this.show ? this.adRegion() : null,
                "data-ad-layout": this.adLayout || null,
                "data-ad-layout-key": this.adLayoutKey || null,
                "data-page-url": this.pageUrl ? this.pageUrl : null,
                "data-analytics-uacct": this.analyticsUacct ? this.analyticsUacct : null,
                "data-analytics-domain-name": this.analyticsDomainName ? this.analyticsDomainName : null,
                "data-adtest": null,
                "data-adsbygoogle-status": this.show ? null : "",
                "data-full-width-responsive": this.adFullWidthResponsive || null
              },
              domProps: {
                innerHTML: this.show ? "" : " "
              },
              key: Math.random()
            })
          },
          props: {
            adClient: {
              type: String,
              default: "ca-pub-4893660676896657"
            },
            adSlot: {
              type: String
            },
            adFormat: {
              type: String,
              default: "auto"
            },
            adLayout: {
              type: String
            },
            adLayoutKey: {
              type: String
            },
            adStyle: {
              type: Object,
              default: function () {
                return {
                  display: "block"
                }
              }
            },
            adFullWidthResponsive: {
              type: Boolean,
              default: !1
            },
            pageUrl: {
              type: String
            },
            analyticsUacct: {
              type: String,
              default: ""
            },
            analyticsDomainName: {
              type: String,
              default: ""
            },
            includeQuery: {
              type: Boolean,
              default: !1
            }
          },
          data: function () {
            return {
              show: !0
            }
          },
          mounted: function () {
            this.showAd()
          },
          watch: {
            $route: function (t, e) {
              if (t.fullPath !== e.fullPath) {
                var n = Object.keys,
                  r = t.query,
                  o = e.query,
                  a = !1;
                t.path !== e.path ? a = !0 : this.includeQuery && (a = n(r).length !== n(o).length || !n(r).every((function (t) {
                  return r[t] === o[t]
                }))), a && this.updateAd()
              }
            }
          },
          methods: {
            adRegion: function () {
              return "page-" + Math.random()
            },
            updateAd: function () {
              this.isServer || (this.show = !1, this.$nextTick(this.showAd))
            },
            showAd: function () {
              this.show = !0, this.$nextTick((function () {
                try {
                  (window.adsbygoogle = window.adsbygoogle || []).push({})
                } catch (t) {}
              }))
            }
          }
        });
      a.default.component("adsbygoogle", J);
      var X = n(60),
        W = n.n(X),
        G = n(380),
        Y = n.n(G);

      function Z(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return tt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tt(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[r++]
                }
              },
              e: function (t) {
                throw t
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next();
            return i = t.done, t
          },
          e: function (t) {
            u = !0, a = t
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }

      function tt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }
      for (var et = {
          setBaseURL: function (t) {
            this.defaults.baseURL = t
          },
          setHeader: function (t, e) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              o = Z(Array.isArray(r) ? r : [r]);
            try {
              for (o.s(); !(n = o.n()).done;) {
                var a = n.value;
                if (!e) return void delete this.defaults.headers[a][t];
                this.defaults.headers[a][t] = e
              }
            } catch (t) {
              o.e(t)
            } finally {
              o.f()
            }
          },
          setToken: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              r = t ? (e ? e + " " : "") + t : null;
            this.setHeader("Authorization", r, n)
          },
          onRequest: function (t) {
            this.interceptors.request.use((function (e) {
              return t(e) || e
            }))
          },
          onResponse: function (t) {
            this.interceptors.response.use((function (e) {
              return t(e) || e
            }))
          },
          onRequestError: function (t) {
            this.interceptors.request.use(void 0, (function (e) {
              return t(e) || Promise.reject(e)
            }))
          },
          onResponseError: function (t) {
            this.interceptors.response.use(void 0, (function (e) {
              return t(e) || Promise.reject(e)
            }))
          },
          onError: function (t) {
            this.onRequestError(t), this.onResponseError(t)
          },
          create: function (t) {
            return at(Y()(t, this.defaults))
          }
        }, nt = function () {
          var t = ot[rt];
          et["$" + t] = function () {
            return this[t].apply(this, arguments).then((function (t) {
              return t && t.data
            }))
          }
        }, rt = 0, ot = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; rt < ot.length; rt++) nt();
      var at = function (t) {
          var e = W.a.create(t);
          return e.CancelToken = W.a.CancelToken, e.isCancel = W.a.isCancel,
            function (t) {
              for (var e in et) t[e] = et[e].bind(t)
            }(e), it(e), e
        },
        it = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {}
            },
            n = function () {
              var t = "undefined" != typeof window && window.$nuxt;
              return t && t.$loading && t.$loading.set ? t.$loading : e
            },
            r = 0;
          t.onRequest((function (t) {
            t && !1 === t.progress || r++
          })), t.onResponse((function (t) {
            t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
          })), t.onError((function (t) {
            t && t.config && !1 === t.config.progress || (r--, W.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
          }));
          var o = function (t) {
            if (r && t.total) {
              var e = 100 * t.loaded / (t.total * r);
              n().set(Math.min(100, e))
            }
          };
          t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
        },
        ut = function (t, e) {
          var n = t.$config && t.$config.axios || {},
            r = n.browserBaseURL || n.baseURL || "/";
          var o = at({
            baseURL: r,
            headers: {
              common: {
                Accept: "application/json, text/plain, */*"
              },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {}
            }
          });
          t.$axios = o, e("axios", o)
        },
        st = n(237),
        ct = (n(381), n(238)),
        lt = n(239),
        ft = n(240),
        dt = n(241),
        ht = n(242),
        pt = n(243),
        mt = n(244),
        bt = n(245),
        vt = n(246),
        gt = n(247);

      function yt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function wt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? yt(Object(n), !0).forEach((function (e) {
            Object(o.a)(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }
      a.default.component(c.a.name, c.a), a.default.component(f.a.name, wt(wt({}, f.a), {}, {
        render: function (t, e) {
          return f.a._warned || (f.a._warned = !0), f.a.render(t, e)
        }
      })), a.default.component(g.name, g), a.default.component("NChild", g), a.default.component(R.name, R), Object.defineProperty(a.default.prototype, "$nuxt", {
        get: function () {
          return this.$root.$options.$nuxt
        },
        configurable: !0
      }), a.default.use(u.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
      });
      var xt = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to"
        },
        _t = i.b.Store.prototype.registerModule,
        Rt = {
          preserveState: !0
        };

      function Ot(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return _t.call(this, t, e, wt(wt({}, Rt), n))
      }

      function jt(t) {
        return kt.apply(this, arguments)
      }

      function kt() {
        return (kt = Object(r.a)(regeneratorRuntime.mark((function t(e) {
          var n, r, o, i, u, s, c, l, f = arguments;
          return regeneratorRuntime.wrap((function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return l = function (t, e) {
                  if (!t) throw new Error("inject(key, value) has no key provided");
                  if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                  i[t = "$" + t] = e, i.context[t] || (i.context[t] = e), o[t] = i[t];
                  var n = "__nuxt_" + t + "_installed__";
                  a.default[n] || (a.default[n] = !0, a.default.use((function () {
                    Object.prototype.hasOwnProperty.call(a.default.prototype, t) || Object.defineProperty(a.default.prototype, t, {
                      get: function () {
                        return this.$root.$options[t]
                      }
                    })
                  })))
                }, n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, t.next = 4, v();
              case 4:
                return r = t.sent, (o = z(e)).$router = r, o.registerModule = Ot, i = wt({
                  head: {
                    title: "",
                    titleTemplate: "%s旅法师营地",
                    meta: [{
                      charset: "utf-8"
                    }, {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1"
                    }, {
                      hid: "description",
                      name: "description",
                      content: "旅法师营地是有温度的玩家聚集地。在这里你可以看到炉石传说、万智牌、百闻牌、影之诗、昆特牌等游戏的超及时的资讯，超专业的攻略，超有趣的故事，超好用的工具。"
                    }, {
                      hid: "keywords",
                      name: "keywords",
                      content: "金铲铲之战,炉石传说,昆特牌,影之诗,万智牌,游戏王,百闻牌,云顶之弈,暗黑2重制版,暴雪,战网,桌游,卡牌游戏,ccg,tcg,皇室战争,符文之地,斗福,大吃1墩,植物大战僵尸,英雄联盟,lol,守望先锋,卡组,套牌,攻略,酒馆战棋,手游,单机游戏"
                    }, {
                      hid: "Author",
                      name: "Author",
                      content: "旅法师营地"
                    }],
                    link: [{
                      rel: "icon",
                      type: "image/x-icon",
                      href: "https://pic.iyingdi.com/yingdi_pc/logo.png"
                    }],
                    script: [{
                      src: "https://hm.baidu.com/hm.js?d8df04a6febf13b5f9ff26531fece72c",
                      async: "true"
                    }, {
                      hid: "adsbygoogle-script",
                      async: !0,
                      src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    }, {
                      hid: "adsbygoogle",
                      innerHTML: 'if (!window.__abg_called){ (window.adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: "ca-pub-4893660676896657",\n    enable_page_level_ads: false,\n    overlays: {bottom: false}\n  }); window.__abg_called = true;}'
                    }],
                    __dangerouslyDisableSanitizers: ["script"],
                    style: [],
                    __dangerouslyDisableSanitizersByTagID: {
                      adsbygoogle: ["innerHTML"]
                    }
                  },
                  store: o,
                  router: r,
                  nuxt: {
                    defaultTransition: xt,
                    transitions: [xt],
                    setTransitions: function (t) {
                      return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
                        return t = t ? "string" == typeof t ? Object.assign({}, xt, {
                          name: t
                        }) : Object.assign({}, xt, t) : xt
                      })), this.$options.nuxt.transitions = t, t
                    },
                    err: null,
                    dateErr: null,
                    error: function (t) {
                      t = t || null, i.context._errored = Boolean(t), t = t ? Object(h.p)(t) : null;
                      var n = i.nuxt;
                      return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                    }
                  }
                }, E), o.app = i, u = e ? e.next : function (t) {
                  return i.router.push(t)
                }, e ? s = r.resolve(e.url).route : (c = Object(h.f)(r.options.base, r.options.mode), s = r.resolve(c).route), t.next = 14, Object(h.t)(i, {
                  store: o,
                  route: s,
                  next: u,
                  error: i.nuxt.error.bind(i),
                  payload: e ? e.payload : void 0,
                  req: e ? e.req : void 0,
                  res: e ? e.res : void 0,
                  beforeRenderFns: e ? e.beforeRenderFns : void 0,
                  ssrContext: e
                });
              case 14:
                l("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), t.next = 20;
                break;
              case 20:
                return t.next = 23, Q(i.context, l);
              case 23:
                t.next = 26;
                break;
              case 26:
                return t.next = 29, ut(i.context, l);
              case 29:
                if ("function" != typeof st.a) {
                  t.next = 32;
                  break
                }
                return t.next = 32, Object(st.a)(i.context, l);
              case 32:
                t.next = 35;
                break;
              case 35:
                if ("function" != typeof ct.a) {
                  t.next = 38;
                  break
                }
                return t.next = 38, Object(ct.a)(i.context, l);
              case 38:
                if ("function" != typeof lt.a) {
                  t.next = 41;
                  break
                }
                return t.next = 41, Object(lt.a)(i.context, l);
              case 41:
                if ("function" != typeof ft.a) {
                  t.next = 44;
                  break
                }
                return t.next = 44, Object(ft.a)(i.context, l);
              case 44:
                if ("function" != typeof dt.a) {
                  t.next = 47;
                  break
                }
                return t.next = 47, Object(dt.a)(i.context, l);
              case 47:
                if ("function" != typeof ht.default) {
                  t.next = 50;
                  break
                }
                return t.next = 50, Object(ht.default)(i.context, l);
              case 50:
                if ("function" != typeof pt.a) {
                  t.next = 53;
                  break
                }
                return t.next = 53, Object(pt.a)(i.context, l);
              case 53:
                if ("function" != typeof mt.a) {
                  t.next = 56;
                  break
                }
                return t.next = 56, Object(mt.a)(i.context, l);
              case 56:
                if ("function" != typeof bt.default) {
                  t.next = 59;
                  break
                }
                return t.next = 59, Object(bt.default)(i.context, l);
              case 59:
                if ("function" != typeof vt.a) {
                  t.next = 62;
                  break
                }
                return t.next = 62, Object(vt.a)(i.context, l);
              case 62:
                if ("function" != typeof gt.a) {
                  t.next = 65;
                  break
                }
                return t.next = 65, Object(gt.a)(i.context, l);
              case 65:
                0, t.next = 69;
                break;
              case 69:
                return t.abrupt("return", {
                  store: o,
                  app: i,
                  router: r
                });
              case 70:
              case "end":
                return t.stop()
            }
          }), t)
        })))).apply(this, arguments)
      }
    }
  }
]);