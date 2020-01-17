webpackJsonp([0], [, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = (t.getViewport = function () {
        return {width: document.body.offsetWidth || window.innerWidth, height: window.innerHeight}
    }, t.buildGetImageSource = function (e, t) {
        return t.urlPrefix + "getimage/" + e.state + "/" + e.zsp + "/" + t.groupId + "/" + e.index
    }, t.buildImageSource = function (e, t) {
        return t.urlPrefix + "image/" + e.state + "/" + e.zsp
    }, t.insertAfter = function (e, t) {
        var n = t.parentNode;
        n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling)
    }, t.offset = function (e) {
        for (var t = e.offsetParent, n = e.offsetLeft, r = e.offsetTop; null !== t;) n += t.offsetLeft + t.clientLeft, r += t.offsetTop + t.clientTop, t = t.offsetParent;
        return {left: n, top: r}
    }, t.getDomArr = function (e, t) {
        var n = e.querySelectorAll(t);
        return n = Array.prototype.slice.call(n)
    });
    t.urlAddQueryParams = function (e, t) {
        var n, r = [], a = "?";
        for (n in t) t.hasOwnProperty(n) && r.push(n + "=" + encodeURIComponent(t[n]));
        return -1 !== e.indexOf("?") && (a = "&"), [e, a, r.join("&")].join("")
    }, t.slice = Array.prototype.slice, t.closest = function (e, t) {
        for (var n = r(document, t), a = document.body, o = 0; o < n.length; o++) for (var i = e, s = n[o]; i && i !== a;) {
            if (s === i) return s;
            i = i.parentNode
        }
        return !1
    }, t.nz_closest = function (e, t, n) {
        for (var r = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e;) {
            if (r.call(e, t)) return e;
            if (n) return null;
            e = e.parentElement
        }
        return null
    }
}, function (e, t, n) {
    "use strict";
    var r = n(69), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r);
    t.pgcEvent = new a.default("pgc"), t.cardEvent = new a.default("card"), t.pageEvent = new a.default("page")
}, , function (e, t, n) {
    "use strict";

    function r(e) {
        var t = {};
        if (Array.isArray(e.type_config)) for (var n = 0; n < e.type_config.length; n++) {
            var r = e.type_config[n];
            t[r.type] = r
        }
        return t
    }

    function a(e) {
        var t = e.h5_extra;
        return {
            font_size: t.font_size || "m",
            image_type: t.image_type || "thumb",
            is_daymode: !!t.is_daymode,
            use_lazyload: !!t.use_lazyload,
            url_prefix: t.url_prefix || "content://io.github.yuweiguocn.toutiaoh5.provider.ImageProvider/"
        }
    }

    function o() {
        return {
            font_size: (0, _.getMeta)("font_size") || "m",
            image_type: (0, _.getMeta)("load_image") || "thumb",
            is_daymode: !(0, _.getMeta)("night_mode"),
            use_lazyload: void 0 === window.close_lazyload,
            url_prefix: void 0 === window.url_prefix ? "content://io.github.yuweiguocn.toutiaoh5.provider.ImageProvider/" : window.url_prefix
        }
    }

    function i() {
        return {
            font_size: (0, _.hash)("tt_font") || "m",
            image_type: (0, _.hash)("tt_image") || "thumb",
            is_daymode: "1" == (0, _.hash)("tt_daymode"),
            use_lazyload: !!parseInt((0, _.getMeta)("lazy_load")),
            url_prefix: ""
        }
    }

    function s(e) {
        var t = "zhuanma";
        if ("object" === p(e.wenda_extra)) t = "wenda"; else if ("object" === p(e.h5_extra)) {
            var n = e.h5_extra.media;
            "object" === (void 0 === n ? "undefined" : p(n)) && null !== n && 0 !== n.id && (t = "pgc")
        }
        return t
    }

    function c(e, t) {
        var n = {}, a = e.h5_extra;
        try {
            "object" === p(a.h5_settings) ? n.h5_settings = a.h5_settings : n.h5_settings = JSON.parse(a.h5_settings)
        } catch (e) {
            n.h5_settings = {}
        }
        if (n.h5_settings.is_liteapp = !!a.is_lite, n.h5_settings.user_verify_info_conf) {
            if ("string" == typeof n.h5_settings.user_verify_info_conf) try {
                n.h5_settings.user_verify_info_conf = JSON.parse(n.h5_settings.user_verify_info_conf)
            } catch (e) {
                n.h5_settings.user_verify_info_conf = {}
            }
            n.h5_settings.user_verify_info_conf = r(n.h5_settings.user_verify_info_conf), n.h5_settings.useServerV = !0, n.useServerV = !0
        } else n.h5_settings.useServerV = !1, n.useServerV = !1;
        try {
            n.isRedFocusButton = "red" === n.h5_settings.tt_follow_button_template.color_style, n.h5_settings.isRedFocusButton = n.isRedFocusButton
        } catch (e) {
            n.isRedFocusButton = !1, n.h5_settings.isRedFocusButton = !1
        }
        n.hasExtraSpace = !n.h5_settings.is_liteapp && _.client.isSeniorAndroid, n.hideFollowButton = !!a.hideFollowButton, n.statistics = {
            group_id: a.str_group_id || a.group_id || "",
            item_id: a.str_item_id || a.item_id || "",
            category_name: a.category_name || "",
            enter_from: a.enter_from || "",
            log_pb: a.log_pb || "",
            g_source: a.g_source || "",
            g_composition: a.g_composition || ""
        };
        try {
            n.pageSettings = y[window.APP_VERSION].android(e)
        } catch (e) {
            G.cacheInfo(Object({
                SYSTEM: "android",
                VERSION: "728",
                MONITOR_SERVICE: "fe_article_detail_error",
                USE_INFOMATION: !0,
                NODE_ENV: "production"
            }))
        }
        return n.titleBarHeight = a.title_bar_height || 0, n.foldArticle = a.article_fold || !1, n
    }

    function l(e) {
        void 0 === e ? (e = window, g = window, console.info("build,page,undefined")) : "object" === p(e.h5_extra) || "object" === p(e.wenda_extra) ? (g = e, console.info("build,page,object")) : (console.info("build,page,2cd"), _.client.isIOS ? e.wenda_extra || e.h5_extra ? (e.wenda_extra && (g.wenda_extra = e.wenda_extra), e.h5_extra && (g.h5_extra = e.h5_extra)) : g.h5_extra = e : _.client.isAndroid && (e.wenda_extra || e.h5_extra ? (e.wenda_extra && (g.wenda_extra = (0, _.extend)(!0, g.wenda_extra, e.wenda_extra)), e.h5_extra && (g.h5_extra = (0, _.extend)(!0, g.h5_extra, e.h5_extra))) : g.h5_extra = (0, _.extend)(!0, g.h5_extra, e))), console.info("page", g);
        var t = {article: {}, author: {}, tags: ""}, n = s(g);
        t.article.type = n, t = "pageSettings" in v ? (0, h.default)(v, t) : (0, h.default)(c(g, t), t), b[n](g, t), t.article.type = n, v = t, G.page = t
    }

    function u(e, t) {
        if ("string" != typeof e) return v;
        try {
            e = e.split(".");
            var n = v;
            return e.forEach(function (e) {
                n = n[e]
            }), n || t || n
        } catch (e) {
            return t
        }
    }

    function d(e, t) {
        if ("string" != typeof e) return !1;
        try {
            e = e.split(".");
            var n = v, r = e.length;
            return e.forEach(function (e, a) {
                void 0 === n[e] && (n[e] = null), a === r - 1 && (n[e] = t), n = n[e]
            }), !0
        } catch (e) {
            return !1
        }
    }

    function f() {
        v = {}, g = {}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.empty = t.build = t.set = t.get = void 0;
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _ = n(1), m = n(15), h = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(m), v = {}, g = {}, y = {v55: {android: o, iphone: i}, v60: {iphone: a, android: a}}, b = {
        wenda: function (e, t) {
            var n = e.wenda_extra, r = n.user || {};
            e.wenda_extra.title = (0, _.escape)(e.wenda_extra.title), t.article = {
                title: n.title,
                publishTime: n.publish_stamp ? _.fmt.formatTime(1e3 * n.publish_stamp) : ""
            }, t.author = {
                userId: r.user_id,
                name: r.user_name,
                link: t.h5_settings.is_liteapp ? "javascript:;" : r.schema + "&from_page=answer_detail_top_card",
                intro: r.user_intro,
                avatar: r.user_profile_image_url,
                isAuthorSelf: !1,
                verifiedContent: r.is_verify ? "PLACE_HOLDER" : "",
                medals: r.medals,
                show: !0
            };
            var a = {auth_type: "", auth_info: ""};
            try {
                a = JSON.parse(r.user_auth_info)
            } catch (e) {
            }
            if (t.author.auth_type = r.user_auth_info ? a.auth_type || 0 : "", t.author.auth_info = a.auth_info, r.user_decoration) {
                var o = {};
                try {
                    o = JSON.parse(r.user_decoration)
                } catch (e) {
                }
                t.author.user_decoration = o
            }
            "is_following" in n && (t.author.followState = n.is_following ? "following" : ""), t.hideFollowButton = !!n.hidden_follow_button, t.wenda_extra = n, t.wenda_extra.aniok = _.client.isSeniorAndroid, t.statistics.group_id = n.ansid
        }, pgc: function (e, t) {
            var n = e.h5_extra, r = n.media || {};
            t.article = {
                title: n.title,
                publishTime: n.publish_stamp ? _.fmt.formatTime(1e3 * n.publish_stamp) : n.publish_time,
                highQuality: n.high_quality_flag && !n.is_lite
            }, t.author = {
                userId: n.media_user_id,
                mediaId: r.id,
                name: r.name,
                link: "sslocal://profile?refer=all&source=article_top_author&uid=" + n.media_user_id + "&group_id=" + t.statistics.group_id + "&from_page=detail_article" + (n.category_name ? "&category_name=" + n.category_name : ""),
                intro: r.description,
                avatar: r.avatar_url,
                isAuthorSelf: !!n.is_author,
                show: !0
            }, !t.h5_settings.is_liteapp && n.media_user_id || (t.author.link = "bytedance://media_account?refer=all&media_id=" + r.id + "&loc=0&entry_id=" + r.id + "&group_id=" + t.statistics.group_id + "&from_page=detail_article" + (n.category_name ? "&category_name=" + n.category_name : ""));
            var a = {auth_type: "", auth_info: ""};
            try {
                a = JSON.parse(r.user_auth_info)
            } catch (e) {
            }
            if (t.author.auth_type = r.user_auth_info ? a.auth_type || 0 : "", t.author.auth_info = a.auth_info, t.author.verifiedContent = r.user_verified && t.author.auth_info || "", r.user_decoration) {
                var o = {};
                try {
                    o = JSON.parse(r.user_decoration)
                } catch (e) {
                }
                t.author.user_decoration = o
            }
            if ("is_subscribed" in n && (t.author.followState = n.is_subscribed ? "following" : ""), t.hideFollowButton = !!n.hideFollowButton, n.is_original && (t.article.isOriginal = n.is_original), "pay_status" in n && (t.pay_status = v && v.pay_status && -1 != v.pay_status && -1 == n.pay_status.status ? v.pay_status : n.pay_status.status, t.auto_pay_status = n.pay_status.auto_pay_status), "novel_data" in n) {
                if ("object" === p(n.novel_data)) t.novel_data = n.novel_data; else if ("string" == typeof n.novel_data) try {
                    t.novel_data = JSON.parse(n.novel_data)
                } catch (e) {
                }
                "pay_status" in n && (t.novel_data.pay_status = v && v.pay_status && -1 != v.pay_status && -1 == n.pay_status.status ? v.pay_status : n.pay_status.status, t.novel_data.auto_pay_status = n.pay_status.auto_pay_status), t.author.show = 0 == n.novel_data.book_free_status || 0 == n.novel_data.need_pay || 1 == t.novel_data.pay_status || 3 == t.novel_data.pay_status || 1 == n.novel_data.recommend_limited_free && ("__all__" == n.category_name || "fake" == n.category_name), t.novel_data.can_read = t.h5_settings.is_liteapp || 0 == n.novel_data.book_free_status || 0 == n.novel_data.need_pay || 1 == t.novel_data.pay_status || 3 == t.novel_data.pay_status || 1 == n.novel_data.recommend_limited_free && ("__all__" == n.category_name || "fake" == n.category_name)
            }
            n.category_name && (t.category_name = n.category_name), n.log_pb && (t.log_pb = n.log_pb), n.enter_from && (t.enter_from = n.enter_from)
        }, zhuanma: function (e, t) {
            var n = e.h5_extra;
            t.article = {
                title: n.title,
                publishTime: n.publish_time || "0000-00-00 00:00"
            }, t.author.name = n.source, t.author.show = !0
        }
    };
    t.get = u, t.set = d, t.build = l, t.empty = f
}, function (e, t, n) {
    (function (t) {
        var r = n(43),
            a = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            o = a.Raven, i = new r;
        i.noConflict = function () {
            return a.Raven = o, i
        }, i.afterLoad(), e.exports = i, e.exports.Client = r
    }).call(t, n(9))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, a = n(3), o = n(1), i = n(2), s = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(i), c = n(25), l = {show: [], header: []};
    G.scrollStore = l;
    var u = (0, a.getViewport)(), d = function (e, t) {
        var n = u.height || window.innerHeight;
        try {
            var r = e.getBoundingClientRect();
            return r.bottom > 0 && r.top < n
        } catch (e) {
            return console.info(e, t, "判断DOM是否在屏幕之内出错, 并将这个展示埋点去除"), !0
        }
    }, f = function (e, t) {
        try {
            var n = u.height || window.innerHeight, r = e.getBoundingClientRect();
            return r.height < n ? r.top >= 0 && r.top <= n && r.bottom >= 0 && r.bottom <= n : r.top <= 0 && r.bottom >= n
        } catch (e) {
            return console.info(e, t, "判断DOM是否在屏幕之内出错, 并将这个展示埋点去除"), !0
        }
    }, p = function (e) {
        var t = void 0, n = e.dom ? e.dom : document.querySelector(e.domSelector);
        if (!n) return null;
        t = n.getBoundingClientRect().bottom, t < 0 && !e.NativeShowHeader ? (s.default.invoke(e.JsBridge, {show: !0}), e.NativeShowHeader = !0) : t > 0 && e.NativeShowHeader && (s.default.invoke(e.JsBridge, {show: !1}), e.NativeShowHeader = !1)
    }, _ = function () {
        try {
            (0, c.checkPosition)()
        } catch (e) {
        }
    }, m = function (e) {
        var t = e.dom ? e.dom : document.querySelector(e.domSelector), n = e.isTotallyShown ? f : d, r = n(t, e);
        return r && (e.label ? o.statistics.sendUmengEvent(e.tag, e.label, e.params) : o.statistics.sendUmengEventV3(e.value, e.obj)), r
    }, h = function () {
        for (var e in l) !function (e) {
            var t = l[e];
            t.length > 0 && (t = t.filter(function (t) {
                switch (e) {
                    case"show":
                        return !m(t);
                    case"header":
                        return p(t), !0;
                    default:
                        return !0
                }
            })), l[e] = t
        }(e);
        _()
    }, v = function (e, t) {
        if ("object" !== (void 0 === t ? "undefined" : r(t))) return void console.error("data 不是一个对象");
        if (!l[e]) return void console.error("scrollStore 不存在 " + e + " 这个属性");
        switch (e) {
            case"show":
                l.show.push(t);
                break;
            case"header":
                l.header.push(t);
                break;
            default:
                return
        }
    }, g = function () {
        l = {show: [], header: []}, G.scrollStore = l
    };
    t.default = {onceShow: h, add: v, empty: g}
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t, n = {originalEvent: e}, r = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/;
        for (t in e) r.test(t) || void 0 === e[t] || (n[t] = e[t]);
        return a(n, e)
    }

    function a(e, t) {
        if (t || !e.isDefaultPrevented) {
            t || (t = e);
            for (var n in d) !function (n) {
                var r = d[n], a = t[n];
                e[n] = function () {
                    return this[r] = l, a && a.apply(t, arguments)
                }, e[r] = u
            }(n);
            e.timeStamp || (e.timeStamp = Date.now()), (void 0 !== t.defaultPrevented ? t.defaultPrevented : "returnValue" in t ? !1 === t.returnValue : t.getPreventDefault && t.getPreventDefault()) && (e.isDefaultPrevented = l)
        }
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(3), i = {}, s = {}, c = document && document.body, l = function () {
        return !0
    }, u = function () {
        return !1
    }, d = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    }, f = function (e, t) {
        var n = i[t], a = e.target, s = void 0;
        n.forEach(function (t) {
            var n = t.selector, i = t.callback, l = (0, o.closest)(a, n);
            l && a !== c && (s = r(e), s.currentTarget = l, s.liveFired = c, i.call(a, s))
        })
    }, p = function (e, t, n) {
        c = c || document && document.body, e.split(/\s/).forEach(function (e) {
            i[e] ? i[e].push({selector: t, callback: n}) : (i[e] = [{selector: t, callback: n}], s[e] = function (t) {
                f(t, e)
            }, c.addEventListener(e, s[e]))
        })
    }, _ = function () {
        for (var e in i) c.removeEventListener(e, s[e]);
        i = {}, s = {}
    };
    t.default = {on: p, removeAll: _}
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, a = n(2), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a), i = function () {
        function e(e) {
            o.default.invoke("TTNetwork.commonParams", {}, function (t) {
                r = t.data || t, "function" == typeof e && e(r)
            })
        }

        return e(), function (t) {
            r ? "function" == typeof t && t(r) : t && e(t)
        }
    }();
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, a;
    t.ImageProcessor = r = n(28).AndriodImageProcessor, t.NativePlayGif = a = n(28).NativePlayGif, t.ImageProcessor = r, t.NativePlayGif = a
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            switch (Object.prototype.toString.call(e)) {
                case"[object Error]":
                case"[object Exception]":
                case"[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error
            }
        }

        function o(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e)
        }

        function c(e) {
            return void 0 === e
        }

        function l(e) {
            return "function" == typeof e
        }

        function u(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function d(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }

        function f(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function p(e) {
            if (!u(e)) return !1;
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }

        function _() {
            try {
                return new ErrorEvent(""), !0
            } catch (e) {
                return !1
            }
        }

        function m() {
            try {
                return new DOMError(""), !0
            } catch (e) {
                return !1
            }
        }

        function h() {
            try {
                return new DOMException(""), !0
            } catch (e) {
                return !1
            }
        }

        function v() {
            if (!("fetch" in z)) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (e) {
                return !1
            }
        }

        function g() {
            if (!v()) return !1;
            try {
                return new Request("pickleRick", {referrerPolicy: "origin"}), !0
            } catch (e) {
                return !1
            }
        }

        function y() {
            return "function" == typeof PromiseRejectionEvent
        }

        function b(e) {
            function t(t, n) {
                var r = e(t) || t;
                return n ? n(r) || r : r
            }

            return t
        }

        function w(e, t) {
            var n, r;
            if (c(e.length)) for (n in e) S(e, n) && t.call(null, n, e[n]); else if (r = e.length) for (n = 0; n < r; n++) t.call(null, n, e[n])
        }

        function E(e, t) {
            return t ? (w(t, function (t, n) {
                e[t] = n
            }), e) : e
        }

        function k(e) {
            return !!Object.isFrozen && Object.isFrozen(e)
        }

        function x(e, t) {
            if ("number" != typeof t) throw new Error("2nd argument to `truncate` function should be a number");
            return "string" != typeof e || 0 === t ? e : e.length <= t ? e : e.substr(0, t) + "…"
        }

        function S(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function O(e) {
            for (var t, n = [], r = 0, a = e.length; r < a; r++) t = e[r], d(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
            return new RegExp(n.join("|"), "i")
        }

        function j(e) {
            var t = [];
            return w(e, function (e, n) {
                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }), t.join("&")
        }

        function C(e) {
            if ("string" != typeof e) return {};
            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/), n = t[6] || "",
                r = t[8] || "";
            return {protocol: t[2], host: t[4], path: t[5], relative: t[5] + n + r}
        }

        function N() {
            var e = z.crypto || z.msCrypto;
            if (!c(e) && e.getRandomValues) {
                var t = new Uint16Array(8);
                e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                var n = function (e) {
                    for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                    return t
                };
                return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function P(e) {
            for (var t, n = [], r = 0, a = 0, o = " > ".length; e && r++ < 5 && !("html" === (t = T(e)) || r > 1 && a + n.length * o + t.length >= 80);) n.push(t), a += t.length, e = e.parentNode;
            return n.reverse().join(" > ")
        }

        function T(e) {
            var t, n, r, a, o, i = [];
            if (!e || !e.tagName) return "";
            if (i.push(e.tagName.toLowerCase()), e.id && i.push("#" + e.id), (t = e.className) && d(t)) for (n = t.split(/\s+/), o = 0; o < n.length; o++) i.push("." + n[o]);
            var s = ["type", "name", "title", "alt"];
            for (o = 0; o < s.length; o++) r = s[o], (a = e.getAttribute(r)) && i.push("[" + r + '="' + a + '"]');
            return i.join("")
        }

        function A(e, t) {
            return !!(!!e ^ !!t)
        }

        function U(e, t) {
            return c(e) && c(t)
        }

        function I(e, t) {
            return !A(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && (!U(e.stacktrace, t.stacktrace) && D(e.stacktrace, t.stacktrace)))
        }

        function D(e, t) {
            if (A(e, t)) return !1;
            var n = e.frames, r = t.frames;
            if (void 0 === n || void 0 === r) return !1;
            if (n.length !== r.length) return !1;
            for (var a, o, i = 0; i < n.length; i++) if (a = n[i], o = r[i], a.filename !== o.filename || a.lineno !== o.lineno || a.colno !== o.colno || a.function !== o.function) return !1;
            return !0
        }

        function M(e, t, n, r) {
            if (null != e) {
                var a = e[t];
                e[t] = n(a), e[t].__raven__ = !0, e[t].__orig__ = a, r && r.push([e, t, a])
            }
        }

        function R(e, t) {
            if (!f(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) try {
                n.push(String(e[r]))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
            return n.join(t)
        }

        function L(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }

        function F(e) {
            return L(JSON.stringify(e))
        }

        function V(e) {
            if ("string" == typeof e) {
                return x(e, 40)
            }
            if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
            var t = Object.prototype.toString.call(e);
            return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e
        }

        function B(e, t) {
            return 0 === t ? V(e) : u(e) ? Object.keys(e).reduce(function (n, r) {
                return n[r] = B(e[r], t - 1), n
            }, {}) : Array.isArray(e) ? e.map(function (e) {
                return B(e, t - 1)
            }) : V(e)
        }

        function W(e, t, n) {
            if (!u(e)) return e;
            t = "number" != typeof t ? $ : t, n = "number" != typeof t ? Q : n;
            var r = B(e, t);
            return F(J(r)) > n ? W(e, t - 1) : r
        }

        function H(e, t) {
            if ("number" == typeof e || "string" == typeof e) return e.toString();
            if (!Array.isArray(e)) return "";
            if (e = e.filter(function (e) {
                    return "string" == typeof e
                }), 0 === e.length) return "[object has no keys]";
            if (t = "number" != typeof t ? G : t, e[0].length >= t) return e[0];
            for (var n = e.length; n > 0; n--) {
                var r = e.slice(0, n).join(", ");
                if (!(r.length > t)) return n === e.length ? r : r + "…"
            }
            return ""
        }

        function q(e, t) {
            function n(e) {
                return f(e) ? e.map(function (e) {
                    return n(e)
                }) : u(e) ? Object.keys(e).reduce(function (t, r) {
                    return a.test(r) ? t[r] = o : t[r] = n(e[r]), t
                }, {}) : e
            }

            if (!f(t) || f(t) && 0 === t.length) return e;
            var r, a = O(t), o = "********";
            try {
                r = JSON.parse(J(e))
            } catch (t) {
                return e
            }
            return n(r)
        }

        var J = n(23),
            z = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            $ = 3, Q = 51200, G = 40;
        e.exports = {
            isObject: r,
            isError: a,
            isErrorEvent: o,
            isDOMError: i,
            isDOMException: s,
            isUndefined: c,
            isFunction: l,
            isPlainObject: u,
            isString: d,
            isArray: f,
            isEmptyObject: p,
            supportsErrorEvent: _,
            supportsDOMError: m,
            supportsDOMException: h,
            supportsFetch: v,
            supportsReferrerPolicy: g,
            supportsPromiseRejectionEvent: y,
            wrappedCallback: b,
            each: w,
            objectMerge: E,
            truncate: x,
            objectFrozen: k,
            hasKey: S,
            joinRegExp: O,
            urlencode: j,
            uuid4: N,
            htmlTreeAsString: P,
            htmlElementAsString: T,
            isSameException: I,
            isSameStacktrace: D,
            parseUrl: C,
            fill: M,
            safeJoin: R,
            serializeException: W,
            serializeKeysForMessage: H,
            sanitize: q
        }
    }).call(t, n(9))
}, , function (e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var a = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, s, c = r(e), l = 1; l < arguments.length; l++) {
            n = Object(arguments[l]);
            for (var u in n) o.call(n, u) && (c[u] = n[u]);
            if (a) {
                s = a(n);
                for (var d = 0; d < s.length; d++) i.call(n, s[d]) && (c[s[d]] = n[s[d]])
            }
        }
        return c
    }
}, , function (e, t, n) {
    "use strict";

    function r() {
        return null
    }

    function a(e) {
        if (!e) return "";
        var t = [];
        for (var n in e) if (e.hasOwnProperty(n) && "function" != typeof e[n]) {
            var r = e[n];
            "[object Object]" == Object.prototype.toString.call(r) && (r = JSON.stringify(r)), n = encodeURIComponent(n), r = encodeURIComponent(r), t.push(n + "=" + r)
        }
        return t.join("&")
    }

    function o(e, t, n, o) {
        function s() {
            l.parentNode && l.parentNode.removeChild(l), window[f] = r, u && clearTimeout(u)
        }

        function c() {
            window[f] && s()
        }

        "function" == typeof t && (n = t, t = {}), t || (t = {});
        var l, u, d = t.prefix || "__jp", f = t.name || d + i++, p = t.param, _ = t.timeout, m = encodeURIComponent,
            h = document.getElementsByTagName("script")[0] || document.head;
        return _ && (u = setTimeout(function () {
            s(), o && o({error: "TIMEOUT"})
        }, _)), window[f] = function (e) {
            s(), n && n(null, e)
        }, e += (~e.indexOf("?") ? "&" : "?") + a(p) + "&callback=" + m(f), e = e.replace("?&", "?"), l = document.createElement("script"), l.src = e, h.parentNode.insertBefore(l, h), c
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = 0;
    t.default = o
}, , , , , , function (e, t) {
    function n(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
        return -1
    }

    function r(e, t, n, r) {
        return JSON.stringify(e, o(t, r), n)
    }

    function a(e) {
        var t = {stack: e.stack, message: e.message, name: e.name};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }

    function o(e, t) {
        var r = [], o = [];
        return null == t && (t = function (e, t) {
            return r[0] === t ? "[Circular ~]" : "[Circular ~." + o.slice(0, n(r, t)).join(".") + "]"
        }), function (i, s) {
            if (r.length > 0) {
                var c = n(r, this);
                ~c ? r.splice(c + 1) : r.push(this), ~c ? o.splice(c, 1 / 0, i) : o.push(i), ~n(r, s) && (s = t.call(this, i, s))
            } else r.push(s);
            return null == e ? s instanceof Error ? a(s) : s : e.call(this, i, s)
        }
    }

    t = e.exports = r, t.getSerialize = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = {};
    r.empty = function () {
        r = {}
    }, r.appVersion = window.APP_VERSION, r.system = "android";
    var a = [], o = "v55" === window.APP_VERSION && !1, i = console.info;
    o && (console.info = function () {
        a.push(arguments), i.apply(console, arguments)
    }, r.init = !0), r.showConsoleInfo = function () {
        console.info = i, a.forEach(function (e, t) {
            console.info.apply(console, e)
        }), a = []
    }, window.G = r, t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return !!h[e]
    }

    function a() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = [], r = !1, a = 0; a < t.length; a++) {
            r = !1;
            for (var o = 0; o < e.length; o++) if (t[a].imp_item_id === e[o].imp_item_id) {
                r = !0;
                break
            }
            r || n.push(t[a])
        }
        return n
    }

    function o() {
        if (0 !== m.length) {
            for (var e = m.length - 1; e >= 0; e--) {
                var t = m[e], n = t.el.getBoundingClientRect();
                n.bottom <= v && !t.hasShow && (r(t.id) || (t.hasShow = !0, h[t.id] = 1, "function" == typeof t.callback && t.callback()));
                for (var o = n.bottom <= v && n.top >= 0, i = !1, s = 0; s < _.length; s++) if (_[s].imp_item_id === t.impressItemInfo.imp_item_id) {
                    i = !0;
                    break
                }
                o && !i && _.push(t.impressItemInfo)
            }
            var c = a(p, _), u = a(_, p);
            (c.length || u.length) && (d.default.invoke("impression", l({}, f, {
                impressions_in: c,
                impressions_out: u
            })), p = _, _ = [])
        }
    }

    function i() {
        m = [], f = {}, p = [], _ = []
    }

    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.hasShow = !1, m.push(e), o()
    }

    function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        f = e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    t.checkPosition = o, t.resetJudgeShowList = i, t.addToJudgeShowList = s, t.registeImpressInfo = c;
    var u = n(2), d = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(u), f = {}, p = [], _ = [], m = [], h = {},
        v = "undefined" != typeof document && (document.documentElement.clientHeight || document.body.clientHeight)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(7), d = r(u), f = function (e) {
        return function (t) {
            function n(e) {
                a(this, n);
                var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.state = {hasError: !1, error: null, errorInfo: null}, t
            }

            return i(n, t), s(n, [{
                key: "componentDidCatch", value: function (e, t) {
                    this.setState({
                        hasError: !0,
                        error: e,
                        errorInfo: t
                    }), d.default.captureException(e, {extra: t}), console.error(e, t, this.props)
                }
            }, {
                key: "render", value: function () {
                    return this.state.hasError ? null : l.default.createElement(e, this.props)
                }
            }]), n
        }(l.default.Component)
    };
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s), l = n(1);
    n(67);
    var u = function (e) {
        function t(e) {
            return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return o(t, e), i(t, [{
            key: "clickAvaterAction", value: function () {
                "pgc" === this.props.articleType && l.statistics.sendUmengEvent("detail", "click_pgc_header", {
                    value: this.props.authorInfo.mediaId,
                    extra: {item_id: this.props.statistic.item_id}
                })
            }
        }, {
            key: "renderVIcon", value: function () {
                if (this.props.useServerV && this.props.authorInfo.auth_info && this.props.authorInfo.auth_type) {
                    var e = (0, l.buildServerVIcon)(this.props.authorInfo.auth_type, "avatar_icon", this.props.setting.user_verify_info_conf);
                    if (e) return c.default.createElement("div", {dangerouslySetInnerHTML: {__html: e}})
                }
                return ""
            }
        }, {
            key: "render", value: function () {
                var e = this.props;
                return c.default.createElement("div", {className: "avatar"}, c.default.createElement("a", {
                    className: "author-avatar-link",
                    href: e.authorInfo.link,
                    onClick: this.clickAvaterAction.bind(this),
                    "aria-label": "个人主页"
                }, c.default.createElement("div", {className: "author-avatar"}, e.authorInfo.avatar ? c.default.createElement("img", {
                    className: "author-avatar-img",
                    src: e.authorInfo.avatar,
                    alt: ""
                }) : null), this.renderVIcon()), e.authorInfo.user_decoration && e.authorInfo.user_decoration.url ? c.default.createElement("div", {
                    className: "avatar-decoration",
                    "aria-hidden": "true",
                    style: {backgroundImage: "url(" + e.authorInfo.user_decoration.url + ")"}
                }) : null, c.default.createElement("a", {
                    className: "avatar-decoration avatar-night-mask pgc-link",
                    "aria-hidden": "true",
                    href: e.authorInfo.link,
                    onClick: this.clickAvaterAction.bind(this)
                }))
            }
        }]), t
    }(c.default.Component);
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function o(e) {
        this.params = e
    }

    function i(e) {
        this.params = e, this.fragmentAppendCarTipDOM = function (e) {
            var t = document.createElement("i");
            t.setAttribute("class", "image-subscript gif-subscript"), t.textContent = "GIF", e && e.appendChild(t)
        }
    }

    function s(e) {
        this.params = e
    }

    function c() {
        this.setting = {}, this.allImage = 0;
        var e = 0;
        this.setSetting = function (e) {
            this.setting = e
        }, this.setLoadedImageNum = function (t) {
            e = t
        }, this.getLoadedImageNum = function () {
            return e
        }, this.addLoadedImageNum = function () {
            var e = this.getLoadedImageNum();
            e++, this.setLoadedImageNum(e), e === this.allImage && E.removeShowAllBtn()
        }, this.reshapeImageWrapNodes = function () {
            var e = this.params, t = e.holder, n = e.index, r = t.parentNode, a = void 0, o = function (e, t, n) {
                var r = document.createElement(n);
                return e.insertBefore(r, t), r && r.appendChild(t), r
            };
            a = function (e, t) {
                var r = void 0;
                return "P" === e.tagName ? "" !== e.textContent ? (console.info("[" + n + "]所在段落有文本，应当分割"), r = o(e, t, "span")) : e.querySelectorAll(".image").length > 1 ? (console.info("[" + n + "]所在段落有其他图片，应当分割"), r = o(e, t, "span")) : (console.info("[" + n + "]正确"), r = e) : (console.info("[" + n + "]直接加包裹"), r = o(e, t, "p")), r
            }(r, t), a.className = "image-wrap", function (t) {
                t.setAttribute("index", e.index), t.removeAttribute("href")
            }(t)
        }, this.correctImgHolder = function () {
            var e = this.params, t = this.setting, n = e.holder,
                r = E.adjustOriginImageScale(e.width, e.height, "none" === e.state, t), a = r.width, o = r.height;
            n.style.width = a + "px", n.style.height = o + "px", n.setAttribute("bg", a > 140 && o > 44), n.setAttribute("state", e.state)
        }, this.appendImageRelatedNodes = function () {
            var e = this, t = this.params, n = document.createDocumentFragment(), r = t.holder,
                a = document.createElement("img");
            !function (t, n) {
                n.classList.add("opacity-zero"), n.onload = e.onLoad.bind(e), n.onerror = e.onError, t && t.appendChild(n)
            }(n, a), function (e, t) {
                if ("origin" !== e) {
                    var n = document.createElement("i");
                    n.classList.add("spinner"), t && t.appendChild(n)
                }
            }(t.state, n), this.fragmentAppendCarTipDOM(n), this.fragmentAppendStockTipDOM(n), r && r.appendChild(n), t.imgDOM = a, function (t, n) {
                n.isLazyLoad ? _.add({
                    index: t.index, successFn: function () {
                        e.addImageResource()
                    }
                }) : e.addImageResource()
            }(t, this.setting)
        }, this.addImageResource = function (e) {
            var t = this.params, n = this.setting, r = E.getLoadUrl(t, n, e);
            !r || t.lastUrl && t.lastUrl === r ? this.params.url = r : (console.info("URL_NOT_EQUAL", t.lastUrl, r), this.params.url = this.params.lastUrl = r), this.params.imgDOM.src = r
        }, this.onLoad = function () {
            console.info("[this.onLoad]", this);
            var e = this.params, t = e.imgDOM, n = e.holder, r = t.naturalWidth * t.naturalHeight,
                a = Math.abs(e.bigArea - r), o = Math.abs(e.smallArea - r);
            e.width = t.naturalWidth, e.height = t.naturalHeight, a > o ? e.state = "thumb" : (e.state = "origin", t.onload = null, this.addLoadedImageNum()), this.correctImgHolder(), t.classList.remove("opacity-zero"), n.classList.remove("animation")
        }, this.onError = function (e) {
            e.target.classList.add("opacity-zero"), console.info("[onError]", this)
        }, this.fragmentAppendCarTipDOM = function () {
            var e = this.params, t = e.holder, n = e.index;
            if ("object" === l(e.carTipData) && e.carTipData) {
                var r = "autoscript" + n, a = d.get("statistics").group_id, o = document.createElement("i");
                o.setAttribute("class", "image-subscript autoscript"), o.id = r;
                var i = e.carTipData.extra_tips || "查看详情";
                o.innerHTML = '<span class="ovf">' + e.carTipData.series_name + "</span><span>" + e.carTipData.price + '</span><span class="sx">&#xe60a;</span><span>' + i + "</span>", o.dataset.href = e.carTipData.open_url, o.dataset.smallapp_abtest = e.carTipData.smallapp_abtest ? "1" : "0", o.dataset.sapp_sdk_enable = e.carTipData.sapp_sdk_enable ? "1" : "0", t && t.appendChild(o), h.default.add("show", {
                    domSelector: "#" + r,
                    tag: "detail",
                    label: "pic_card_show",
                    params: {value: a}
                }), h.default.add("show", {
                    domSelector: "#" + r,
                    value: "web_show_event",
                    obj: {
                        obj_id: "page_detail_pic_tag",
                        group_id: a,
                        smallapp_abtest: o.dataset.smallapp_abtest,
                        sapp_sdk_enable: o.dataset.sapp_sdk_enable
                    }
                }), h.default.add("show", {
                    domSelector: "#" + r,
                    value: "show_content_go_purchase",
                    obj: {
                        obj_id: "detail_scard_n_consultation",
                        group_id: a,
                        item_id: d.get("statistics").item_id || "",
                        enter_from: d.get("statistics").enter_from || "",
                        category_name: d.get("statistics").category_name || "",
                        log_pb: d.get("statistics").log_pb || "",
                        bookshelf_type: "motor"
                    }
                })
            }
        }, this.fragmentAppendStockTipDOM = function () {
            var e = this.params, t = e.holder;
            e.index;
            if (e.stockTipData && "object" === l(e.stockTipData)) {
                var n = this.setting.groupId, r = document.createElement("a");
                r.setAttribute("class", "pgc-img-stock-caption"), r.setAttribute("data-gid", n), r.setAttribute("data-stock-id", e.stockTipData.stockId);
                r.innerHTML = '<span class="ovf">' + e.stockTipData.desc + '</span><span>查看详情</span><span class="sx">&#xe6d8;</span>', r.href = e.stockTipData.schema;
                try {
                    t.parentNode.appendChild(r)
                } catch (e) {
                    console.info(e, this)
                }
                y.statistics.sendUmengWhenTargetShown(t, "news_kline_chart_show", "", {
                    group_id: n,
                    code: e.stockTipData.stockId
                }, !0, {version: 3})
            }
        }, this.init = function () {
            this.reshapeImageWrapNodes(), this.appendImageRelatedNodes(), this.correctImgHolder()
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.NativePlayGif = t.AndriodImageProcessor = void 0;
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, u = n(6), d = a(u), f = n(3), p = n(29), _ = a(p), m = n(8), h = r(m), v = n(24), g = r(v), y = n(1), b = n(10),
        w = r(b), E = {
            adjustOriginImageScale: function (e, t, n, r) {
                var a = r.aW / 2, o = e / t, i = void 0, s = void 0;
                return i = e ? e > a ? r.aW : e : 200, s = o ? parseInt(i / o) : 200, n && (s = Math.min(s, parseInt(.8 * r.iH))), console.info("[adjustOriginImageScale]", arguments, "outputWidth height: ", i, s), {
                    width: i,
                    height: s
                }
            }, extendParams: function (e, t) {
                for (var n in t) e[n] = t[n];
                return t
            }, removeShowAllBtn: function () {
                var e = document.getElementById("toggle-img");
                e && (e.style.visibility = "hidden")
            }, nz_closest: function (e, t) {
                for (var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e;) {
                    if (n.call(e, t)) return e;
                    e = e.parentElement
                }
                return null
            }, buildGetImageSource: function (e, t) {console.info("url="+t.urlPrefix + "getimage/" + e.state + "/" + e.zsp + "/" + t.groupId + "/" + e.index);
                return t.urlPrefix + "getimage/" + e.state + "/" + e.zsp + "/" + t.groupId + "/" + e.index
            }, buildImageSource: function (e, t) {console.info("url="+t.urlPrefix + "image/" + e.state + "/" + e.zsp);
                return t.urlPrefix + "image/" + e.state + "/" + e.zsp
            }, getLoadUrl: function (e, t, n) {
                return n ? this.buildImageSource(e, t) : this.buildGetImageSource(e, t)
            }
        }, k = t.AndriodImageProcessor = function () {
            function e(e) {
                var t = (0, f.getViewport)(), n = d.get("pageSettings") || {}, r = d.get("statistics") || {};
                return {
                    aW: t.width - 30,
                    iH: t.height,
                    urlPrefix: n.url_prefix || "",
                    state: n.image_type || "",
                    isLazyLoad: n.use_lazyload || e.length > 10,
                    groupId: r.group_id
                }
            }

            function t(e) {
                var t = new c, n = {};
                return t.setSetting(O), t.allImage = e.length, o.prototype = t, i.prototype = t, s.prototype = t, e.map(function (e, t) {
                    var r = e.getAttribute("type") || "", a = +e.getAttribute("width") || 0,
                        c = +e.getAttribute("height") || 0, l = +e.getAttribute("thumb_width") || 0,
                        u = +e.getAttribute("thumb_height") || 0, d = e.getAttribute("zip_src_path") || "";
                    return n = {
                        index: t,
                        holder: e,
                        url: "",
                        state: O.state,
                        lastUrl: "",
                        zsp: d,
                        href: e.getAttribute("href") || "",
                        link: e.getAttribute("redirect-link") || "",
                        isGIF: "gif" === r || "2" === r,
                        isLONG: a > 3 * c || c > 3 * a,
                        bigArea: a * c,
                        smallArea: l * u,
                        carTipData: null
                    }, /origin|none/.test(n.state) ? (n.width = a, n.height = c) : (n.width = l, n.height = u), "gif" === r || "2" === r ? new i(n) : a > 3 * c || c > 3 * a ? new s(n) : new o(n)
                })
            }

            function n(e, t, n) {
                console.info("[onNativeImageLoaded]", arguments);
                var r = j[e];
                r && t && (r.params.state = n ? "origin" : "thumb", r.addImageResource(!0))
            }

            function r(e) {
                for (var t = 0; t < e.length; t++) e[t].init()
            }

            function a(e) {
                var t = "";
                if ("[object String]" === Object.prototype.toString.call(e)) try {
                    t = JSON.parse(e).impr_id
                } catch (e) {
                } else "[object Object]" === Object.prototype.toString.call(e) && (t = e.impr_id || "");
                return t
            }

            function u(e) {
                y.statistics.sendUmengEvent("detail", "pic_card_click", {value: O.groupId}), y.statistics.sendUmengEventV3("web_clk_event", {
                    obj_id: "page_detail_pic_tag",
                    group_id: d.get("statistics").group_id || "",
                    smallapp_abtest: e.dataset.smallapp_abtest,
                    sapp_sdk_enable: e.dataset.sapp_sdk_enable
                });
                var t = encodeURIComponent(JSON.stringify({
                    media_id: d.get("author").mediaId || "",
                    item_id: d.get("statistics").item_id || "",
                    category_name: d.get("statistics").category_name || "",
                    log_pb: d.get("statistics").log_pb || "",
                    present_start: Date.now(),
                    group_id: d.get("statistics").group_id || ""
                })), n = {
                    is_motor: 1,
                    enter_from: "click_motor_series",
                    parent_enterfrom: "click_motor_series",
                    parent_imprid: a(d.get("statistics").log_pb),
                    parent_gid: d.get("statistics").group_id || ""
                };
                y.statistics.sendUmengEventV3("click_nextgroup_detail", {
                    obj_id: "detail_scard_n_consultation_gotoCar",
                    item_id: d.get("statistics").item_id || "",
                    enter_from: d.get("statistics").enter_from || "",
                    category_name: d.get("statistics").category_name || "",
                    log_pb: d.get("statistics").log_pb || "",
                    bookshelf_type: "motor",
                    group_id: d.get("statistics").group_id || ""
                });
                var r = e.dataset.href;
                /sslocal:\/\/webview/.test(r) ? (r = r.replace("log_extra_placeholder%3D", "log_extra%3D" + t), r += "&gd_ext_json=" + encodeURIComponent(JSON.stringify(n))) : /sslocal:\/\/[acimopr]{8}/.test(r) && (r = r.replace("log_extra_placeholder%3D", "log_extra%3D" + t), r += "&extra=" + encodeURIComponent(JSON.stringify({event_extra: n}))), location.href = r
            }

            function p(e) {
                console.info("[tapEventHandler]", e);
                var t = e.params, n = t.holder, r = t.state;
                if (t.stockTipData && y.statistics.sendUmengEventV3("news_kline_chart_click", {
                        group_id: O.groupID,
                        code: t.stockTipData.stockId
                    }), "origin" === r) {
                    if (t.link && t.link.indexOf("sslocal") > -1) location.href = t.link; else if (t.href.indexOf("bytedance://large_image") > -1) {
                        var a = n.getBoundingClientRect(),
                            o = "&left=" + (a.left + window.pageXOffset) + "&top=" + (a.top + window.pageYOffset) + "&width=" + Math.floor(a.width) + "&height=" + Math.floor(a.height);
                        location.href = t.href + o
                    }
                } else e.params.state = "origin", e.addImageResource(), t.holder.classList.add("animation")
            }

            function _(e) {
                w.default.on("click", "a.image", function (t) {
                    var n = t.target, r = t.currentTarget, a = E.nz_closest(n, ".autoscript");
                    if (a) u(a); else {
                        var o = parseInt(r.getAttribute("index"));
                        p(e[o])
                    }
                }), w.default.on("click", "a.pgc-img-stock-caption", function (e) {
                    var t = e.currentTarget;
                    y.statistics.sendUmengEventV3("news_kline_charact_click", {
                        group_id: t.dataset.gid,
                        code: t.dataset.stockId
                    })
                })
            }

            function m(e) {
                O.aW = e;
                for (var t = 0; t < j.length; t++) j[t].correctImgHolder()
            }

            function h(e) {
                if ("object" === (void 0 === e ? "undefined" : l(e)) && Array.isArray(j)) for (var t in e) {
                    var n = +t;
                    j[n] && (j[n].params.carTipData = e[t], j[n].fragmentAppendCarTipDOM())
                }
            }

            function v(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                    console.info(e)
                }
                "object" === (void 0 === e ? "undefined" : l(e)) && Array.isArray(j) && j.forEach(function (t, n) {
                    var r = t.params, a = E.nz_closest(r.holder, ".stock");
                    if (a) {
                        var o = a.dataset, i = o.content;
                        try {
                            i = JSON.parse(i)
                        } catch (e) {
                            i = {}
                        }
                        if (i.stock_id) for (var s in e) s == i.stock_id && (j[n].params.stockTipData = e[s] || {}, j[n].params.stockTipData.stockId = s, j[n].fragmentAppendStockTipDOM())
                    }
                })
            }

            function b(e) {
                e.forEach(function (e) {
                    "origin" !== e.params.state && (e.params.state = "origin", e.addImageResource())
                })
            }

            function k(e, t) {
                if (!(t.length < 1)) {
                    var n = t[0].params.holder;
                    if ("origin" !== e && n) {
                        var r = document.createElement("div");
                        r.innerHTML = '<div class="toggle-img" id="toggle-img">显示所有大图</div>', w.default.on("click", ".toggle-img", function () {
                            b(t), y.statistics.sendBytedanceRequest("toggle_image?action=show"), this.style.visibility = "hidden"
                        }), n.parentNode.insertBefore(r, n)
                    }
                }
            }

            function x(e) {
                console.info("onCarouselImageSwitch", e);
                var t = j[e];
                if (t) {
                    var n = t.params;
                    n.url && "origin" !== n.state && (n.state = "origin", t.addImageResource())
                }
            }

            function S(n) {
                console.info("[AndriodImage init]");
                var a = document.querySelectorAll("a.image");
                if (a = Array.prototype.slice.call(a), 0 === a.length) return null;
                O = e(a), j = t(a), g.default.imgArr = j, r(j), k(O.state, j), _(j), n()
            }

            var O = {}, j = [];
            return {
                initImageProcess: S,
                onNativeImageLoaded: n,
                addCarTipDOM: h,
                addStockTipDOM: v,
                resizeImage: m,
                fetchOneImage: x
            }
        }();
    window.image_load_cb = k.onNativeImageLoaded;
    t.NativePlayGif = {
        clean: function () {
            return null
        }, willStart: function (e) {
            "function" == typeof e && e()
        }, ended: function () {
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.empty = t.add = t.lazyLoad = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, a = n(3), o = (n(1), []);
    G.imageStore = o;
    var i = (0, a.getViewport)(), s = function (e, t) {
        i.height || (i.height = (0, a.getViewport)().height);
        try {
            var n = e.getBoundingClientRect(), r = n.top;
            return r < 0 || r < 2 * i.height
        } catch (e) {
            return console.error("在函数名为belowNextScreen", e, t), !1
        }
    }, c = function (e) {
        var t = e.dom ? e.dom : document.querySelectorAll(".image-wrap")[e.index], n = s(t, e);
        return n && (console.info("第" + e.index + "个图片加载成功", "imageLoad"), e.successFn()), n
    }, l = function () {
        var e = 0, t = o.length, n = t;
        if (o.length > 0) for (; e < t; e++) c(o[e]) || (n = e, e = t);
        o = o.slice(n)
    }, u = function (e) {
        if ("object" !== (void 0 === e ? "undefined" : r(e))) return void console.error("data 不是一个对象");
        o.push(e)
    }, d = function () {
        o = []
    };
    t.lazyLoad = l, t.add = u, t.empty = d
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s), l = (n(5), n(1)), u = n(6), d = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(u);
    n(89);
    var f = function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.wrapDOM = null, n.clickHandler = n.clickHandler.bind(n), n
        }

        return o(t, e), i(t, [{
            key: "setCompVal", value: function () {
                var e = document.querySelector("article");
                e && (this.wrapDOM = document.createElement("p"), e.appendChild(this.wrapDOM))
            }
        }, {
            key: "componentDidMount", value: function () {
                l.statistics.sendUmengWhenTargetShown(this.dom, "bottom_banner_show", "", {
                    media_id: d.get("author.mediaId") || "",
                    group_id: d.get("statistics.group_id") || "",
                    banner_id: this.props.data.context.highQualityArticle.banner_id || 0,
                    banner_category: "boutique"
                }, !0, {version: 3})
            }
        }, {
            key: "clickHandler", value: function () {
                l.statistics.sendUmengEventV3("bottom_banner_click", {
                    media_id: d.get("author.mediaId") || "",
                    group_id: d.get("statistics.group_id") || "",
                    banner_id: this.props.data.context.highQualityArticle.banner_id || 0,
                    banner_category: "boutique"
                })
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.data, n = t.context, r = n.new_infor_action,
                    a = 2 != r && r ? "category-guide-b" : "category-guide";
                return c.default.createElement("a", {
                    className: a,
                    href: n.highQualityArticle.schema,
                    onClick: this.clickHandler,
                    ref: function (t) {
                        e.dom = t
                    }
                }, n.highQualityArticle.title, c.default.createElement("i", {className: "iconfont icon-rarrow"}))
            }
        }]), t
    }(s.Component);
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.split("_")[0];
        if (u.indexOf(t) > -1) {
            var n = document.body.classList;
            u.forEach(function (e) {
                n.remove("font_" + e)
            }), n.add("font_" + t)
        }
    }

    function a(e) {
        if ([0, 1, "0", "1"].indexOf(e) > -1) {
            e = parseInt(e), document.body.classList[e ? "remove" : "add"]("night");
            try {
                $(document).trigger("dayModeChange", e)
            } catch (e) {
                console.error(e)
            }
        }
    }

    function o(e) {
        a(s.get("pageSettings.is_daymode") ? 1 : 0), r(s.get("pageSettings.font_size", "m"));
        var t = s.get("article.type"), n = s.get("h5_settings.is_liteapp");
        e.classList.add(t), e.classList.add("android"), e.classList.add(window.APP_VERSION), n && l.default.invoke("appInfo", {}, function (t) {
            1261 != t.aid && 1221 != t.aid || e.classList.add("lite")
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.initGlobalUi = t.changeDayNightMode = t.changeFontsize = void 0;
    var i = n(6), s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(i), c = n(2), l = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(c);
    console.info("[business/ui]");
    var u = ["s", "m", "l", "xl"];
    t.changeFontsize = r, t.changeDayNightMode = a, t.initGlobalUi = o
}, , function (e, t, n) {
    e.exports = n(34)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), l = n(18), u = a(l), d = n(0), f = a(d), p = n(5), _ = a(p), m = n(7), h = a(m);
    n(48);
    var v = n(24), g = a(v), y = n(49), b = a(y), w = n(8), E = a(w), k = n(6), x = r(k), S = n(10), O = a(S),
        j = n(59), C = a(j), N = n(16), P = a(N), T = n(1), A = n(26), U = a(A);
    n(60);
    var I = n(61), D = a(I), M = n(80), R = a(M), L = n(92), F = a(L), V = n(106), B = a(V), W = n(107), H = r(W),
        q = n(118), J = a(q), z = n(12), Q = n(126), G = a(Q), K = n(31), X = r(K), Y = n(128);
    n(129), n(32);
    var Z = n(130), ee = (a(Z), n(4)), te = n(2), ne = a(te), re = (0, U.default)(D.default),
        ae = (0, U.default)(R.default), oe = (0, U.default)(J.default), ie = (0, U.default)(F.default),
        se = function (e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    data: {},
                    articleFold: !1
                }, n.lastSetH5ExtraFlag = !1, n.setArticle = n.setArticle.bind(n), n.article = null, n.intervalTime = null, n.tellClientContentSize = n.tellClientContentSize.bind(n), n
            }

            return s(t, e), c(t, [{
                key: "tellClientContentSize", value: function () {
                    var e = 0;
                    this.intervalTime && clearInterval(this.intervalTime), this.intervalTime = setInterval(function () {
                        var t = document.querySelector("footer").getBoundingClientRect(), n = t.top + t.height;
                        n !== e && (e = n, ne.default.invoke("webviewContentResize", {height: n}))
                    }, 200)
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this, t = function () {
                        var t = b.default.getState();
                        e.setState({data: t})
                    };
                    this._unSubscribe = b.default.subscribe(t), T.client.isAndroid && this.tellClientContentSize(), window.addEventListener("scroll", E.default.onceShow), ee.pageEvent.on("showArticleFoldWrap", function (t) {
                        return e.setState({articleFold: t})
                    })
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    t.setH5ExtraFlag && !this.lastSetH5ExtraFlag && u.default.sendCustomTimeLog("end_process_article", "android_" + window.APP_VERSION, +new Date - window.startTimestamp), this.lastSetH5ExtraFlag = t.setH5ExtraFlag
                }
            }, {
                key: "setArticle", value: function (e, n) {
                    if (e && "v55" !== e && t.setArticleFlag) {
                        var r = this.state.data.h5Extra && this.state.data.h5Extra.novel_data;
                        if (!n || r) {
                            var a = e.indexOf("<article>"), o = e.indexOf("</article>");
                            return e = e.substring(a + 9, o), $("article").html(e), t.setArticleFlag = !1, e
                        }
                    }
                    return n && e && "v55" !== e ? n : null
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this._unSubscribe(), window.removeEventListener("scroll", E.default.onceShow), this.intervalTime && clearInterval(this.intervalTime)
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.articleFold, t = this.state.data, n = t.context, r = t.h5Extra, a = t.content,
                        o = void 0, i = void 0, s = void 0, c = void 0, l = void 0;
                    return this.article = this.setArticle(a, this.article), o = (0, Y.FilteredHeader)(r, n, a), i = (0, Y.FilteredFooter)(r, n, a), l = (0, Y.FilteredWenda)(r, n, a), s = n && n.car_image_info ? n.car_image_info : null, c = n && n.stock_dingpan_desc ? n.stock_dingpan_desc : null, f.default.createElement(d.Fragment, null, f.default.createElement(B.default, {
                        parentDom: document.querySelector("header"),
                        replaceFlag: "1",
                        tag: "header"
                    }, o ? f.default.createElement(re, {data: o}) : null), o ? f.default.createElement(ae, {
                        carImage: s,
                        stockImage: c,
                        context: n
                    }) : null, l || i ? f.default.createElement(B.default, {
                        parentDom: document.querySelector("footer"),
                        replaceFlag: "1",
                        tag: "footer"
                    }, l ? f.default.createElement(oe, {data: l}) : f.default.createElement(ie, {data: i})) : null, e ? f.default.createElement(G.default, null) : null)
                }
            }], [{
                key: "updateState", value: function (e) {
                    return function (n) {
                        "content" === e ? t.setArticleFlag = !0 : "h5Extra" === e && (n ? (t.setH5ExtraFlag = !0, n.titleBarHeight && (document.body.style.paddingTop = n.titleBarHeight + "px"), n.foldArticle && (document.documentElement.classList.contains("noscroll") || document.documentElement.classList.add("noscroll"), ee.pageEvent.broadcast("showArticleFoldWrap", null, !0)), ee.pageEvent.broadcast("checkContent", null, null), console.info("checkContent")) : t.setH5ExtraFlag = !1), g.default[e] = n, b.default.dispatch({
                            type: e,
                            data: n
                        })
                    }
                }
            }]), t
        }(d.Component);
    se.setArticleFlag = !1, se.setH5ExtraFlag = !1, _.default.render(f.default.createElement(se, null), document.querySelector("#empty")), function () {
        window.startTimestamp = Date.now(), H.default(), u.default.install({
            sampleRate: .01,
            bid: "article_app",
            pid: "article_new",
            ignoreAjax: [],
            ignoreStatic: []
        }), ne.default.on("page_state_change", function (e) {
            ee.pageEvent.broadcast("pageStateChange", null, e)
        }), window.setExtra = function (e) {
            console.info("[setExtra]");
            var t = x.get("article.type");
            t || (u.default.sendCustomTimeLog("start_process_article", "android_" + window.APP_VERSION, +new Date - window.startTimestamp), _.default.render(f.default.createElement(se, null), document.querySelector("#empty"))), x.build(e), window.Page = x.get();
            var n = x.get();
            return se.updateState("h5Extra")(n), !t && (X.initGlobalUi(document.body), P.default.config("728", "fe_article_detail_error", x.get("statistics.group_id")), C.default.config("728", "fe_article_detail_error", "android", x.get("statistics.group_id")), u.default.sendCustomCountLog("fe_article_version", "728"), u.default.sendCustomCountLog("article_type", t || "unknow"), T.statistics.sendBytedanceRequest("domReady"), T.statistics.sendUmengEventV3("article_web_extra_info", {
                jsversion: "728",
                gid: x.get("statistics.group_id")
            }), !0)
        }, window.setContent = function (e) {
            window.startTimestamp = Date.now(), se.updateState("content")(e)
        }, window.insertDiv = function (e) {
            if (e.miniprogs && e.miniprogs.Visibilities) {
                var t = [];
                for (var n in e.miniprogs.Visibilities) e.miniprogs.Visibilities[n] || t.push(n);
                window.pgcEvent && window.pgcEvent.broadcast("card-destroy", document.querySelector("body"), {applet: t})
            }
            if (se.updateState("context")(e), "wenda" === x.get("article.type") && e.wenda_context && e.wenda_context.gd_ext_json) {
                var r = e.wenda_context.gd_ext_json || {};
                if ("string" == typeof e.wenda_context.gd_ext_json) try {
                    r = JSON.parse(e.wenda_context.gd_ext_json)
                } catch (e) {
                    console.info("gdExtJson_error", e), r = {}
                }
                x.set("wenda_extra.gd_ext_json", r || {});
                try {
                    var a = x.get("author.link");
                    a += "&category_name=" + r.category_name, x.set("author.link", a)
                } catch (e) {
                    console.info("insertDiv", e)
                }
                se.updateState("h5Extra")(x.get())
            }
        }, window.onQuit = function () {
            console.info("onQuit"), x.empty(), E.default.empty(), z.NativePlayGif.clean(), g.default.empty(), O.default.removeAll(), P.default.flush(!0);
            try {
                _.default.unmountComponentAtNode(document.getElementById("empty"))
            } catch (e) {
                console.error("销毁Main组件报错", e), h.default.captureException(e)
            }
            $("article").empty(), $("footer").empty(), window.needCleanDoms.forEach(function (e) {
                e.off()
            }), window.needCleanDoms = [], T.statistics.checkandCleanImpr(), window.disabledBroadcastCardsEvent = !1
        }
    }(), function () {
        window.APP_VERSION = window.h5_extra ? "v55" : "v60", document.body.getAttribute("inited") || (document.body.setAttribute("inited", !0), "v55" === window.APP_VERSION && (window.setContent("v55"), window.setExtra()))
    }()
}, , , , , , , , , function (e, t, n) {
    (function (t) {
        function r() {
            return +new Date
        }

        function a(e, t) {
            return g(t) ? function (n) {
                return t(n, e)
            } : t
        }

        function o() {
            this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !v(q), this._hasNavigator = !v(J), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
                release: H.SENTRY_RELEASE && H.SENTRY_RELEASE.id,
                logger: "javascript",
                ignoreErrors: [],
                ignoreUrls: [],
                whitelistUrls: [],
                includePaths: [],
                headers: null,
                collectWindowErrors: !0,
                captureUnhandledRejections: !0,
                maxMessageLength: 0,
                maxUrlLength: 250,
                stackTraceLimit: 50,
                autoBreadcrumbs: !0,
                instrument: !0,
                sampleRate: 1,
                sanitizeKeys: []
            }, this._fetchDefaults = {
                method: "POST",
                keepalive: !0,
                referrerPolicy: M() ? "origin" : ""
            }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = H.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = r(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = H.location, this._lastHref = this._location && this._location.href, this._resetBackoff();
            for (var e in this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e]
        }

        var i = n(44), s = n(23), c = n(45), l = n(46), u = n(13), d = u.isErrorEvent, f = u.isDOMError,
            p = u.isDOMException, _ = u.isError, m = u.isObject, h = u.isPlainObject, v = u.isUndefined,
            g = u.isFunction, y = u.isString, b = u.isArray, w = u.isEmptyObject, E = u.each, k = u.objectMerge,
            x = u.truncate, S = u.objectFrozen, O = u.hasKey, j = u.joinRegExp, C = u.urlencode, N = u.uuid4,
            P = u.htmlTreeAsString, T = u.isSameException, A = u.isSameStacktrace, U = u.parseUrl, I = u.fill,
            D = u.supportsFetch, M = u.supportsReferrerPolicy, R = u.serializeKeysForMessage, L = u.serializeException,
            F = u.sanitize, V = n(47).wrapMethod, B = "source protocol user pass host port path".split(" "),
            W = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
            H = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            q = H.document, J = H.navigator;
        o.prototype = {
            VERSION: "3.26.3", debug: !1, TraceKit: i, config: function (e, t) {
                var n = this;
                if (n._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), n;
                if (!e) return n;
                var r = n._globalOptions;
                t && E(t, function (e, t) {
                    "tags" === e || "extra" === e || "user" === e ? n._globalContext[e] = t : r[e] = t
                }), n.setDSN(e), r.ignoreErrors.push(/^Script error\.?$/), r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), r.ignoreErrors = j(r.ignoreErrors), r.ignoreUrls = !!r.ignoreUrls.length && j(r.ignoreUrls), r.whitelistUrls = !!r.whitelistUrls.length && j(r.whitelistUrls), r.includePaths = j(r.includePaths), r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
                var a = {xhr: !0, console: !0, dom: !0, location: !0, sentry: !0}, o = r.autoBreadcrumbs;
                "[object Object]" === {}.toString.call(o) ? o = k(a, o) : !1 !== o && (o = a), r.autoBreadcrumbs = o;
                var s = {tryCatch: !0}, c = r.instrument;
                return "[object Object]" === {}.toString.call(c) ? c = k(s, c) : !1 !== c && (c = s), r.instrument = c, i.collectWindowErrors = !!r.collectWindowErrors, n
            }, install: function () {
                var e = this;
                return e.isSetup() && !e._isRavenInstalled && (i.report.subscribe(function () {
                    e._handleOnErrorStackInfo.apply(e, arguments)
                }), e._globalOptions.captureUnhandledRejections && e._attachPromiseRejectionHandler(), e._patchFunctionToString(), e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = !0), Error.stackTraceLimit = e._globalOptions.stackTraceLimit, this
            }, setDSN: function (e) {
                var t = this, n = t._parseDSN(e), r = n.path.lastIndexOf("/"), a = n.path.substr(1, r);
                t._dsn = e, t._globalKey = n.user, t._globalSecret = n.pass && n.pass.substr(1), t._globalProject = n.path.substr(r + 1), t._globalServer = t._getGlobalServer(n), t._globalEndpoint = t._globalServer + "/" + a + "api/" + t._globalProject + "/store/", this._resetBackoff()
            }, context: function (e, t, n) {
                return g(e) && (n = t || [], t = e, e = {}), this.wrap(e, t).apply(this, n)
            }, wrap: function (e, t, n) {
                function r() {
                    var r = [], o = arguments.length, i = !e || e && !1 !== e.deep;
                    for (n && g(n) && n.apply(this, arguments); o--;) r[o] = i ? a.wrap(e, arguments[o]) : arguments[o];
                    try {
                        return t.apply(this, r)
                    } catch (t) {
                        throw a._ignoreNextOnError(), a.captureException(t, e), t
                    }
                }

                var a = this;
                if (v(t) && !g(e)) return e;
                if (g(e) && (t = e, e = void 0), !g(t)) return t;
                try {
                    if (t.__raven__) return t;
                    if (t.__raven_wrapper__) return t.__raven_wrapper__
                } catch (e) {
                    return t
                }
                for (var o in t) O(t, o) && (r[o] = t[o]);
                return r.prototype = t.prototype, t.__raven_wrapper__ = r, r.__raven__ = !0, r.__orig__ = t, r
            }, uninstall: function () {
                return i.report.uninstall(), this._detachPromiseRejectionHandler(), this._unpatchFunctionToString(), this._restoreBuiltIns(), this._restoreConsole(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
            }, _promiseRejectionHandler: function (e) {
                this._logDebug("debug", "Raven caught unhandled promise rejection:", e), this.captureException(e.reason, {
                    mechanism: {
                        type: "onunhandledrejection",
                        handled: !1
                    }
                })
            }, _attachPromiseRejectionHandler: function () {
                return this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this), H.addEventListener && H.addEventListener("unhandledrejection", this._promiseRejectionHandler), this
            }, _detachPromiseRejectionHandler: function () {
                return H.removeEventListener && H.removeEventListener("unhandledrejection", this._promiseRejectionHandler), this
            }, captureException: function (e, t) {
                if (t = k({trimHeadFrames: 0}, t || {}), d(e) && e.error) e = e.error; else {
                    if (f(e) || p(e)) {
                        var n = e.name || (f(e) ? "DOMError" : "DOMException"),
                            r = e.message ? n + ": " + e.message : n;
                        return this.captureMessage(r, k(t, {stacktrace: !0, trimHeadFrames: t.trimHeadFrames + 1}))
                    }
                    if (_(e)) e = e; else {
                        if (!h(e)) return this.captureMessage(e, k(t, {
                            stacktrace: !0,
                            trimHeadFrames: t.trimHeadFrames + 1
                        }));
                        t = this._getCaptureExceptionOptionsFromPlainObject(t, e), e = new Error(t.message)
                    }
                }
                this._lastCapturedException = e;
                try {
                    var a = i.computeStackTrace(e);
                    this._handleStackInfo(a, t)
                } catch (t) {
                    if (e !== t) throw t
                }
                return this
            }, _getCaptureExceptionOptionsFromPlainObject: function (e, t) {
                var n = Object.keys(t).sort(), r = k(e, {
                    message: "Non-Error exception captured with keys: " + R(n),
                    fingerprint: [c(n)],
                    extra: e.extra || {}
                });
                return r.extra.__serialized__ = L(t), r
            }, captureMessage: function (e, t) {
                if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                    t = t || {}, e += "";
                    var n, r = k({message: e}, t);
                    try {
                        throw new Error(e)
                    } catch (e) {
                        n = e
                    }
                    n.name = null;
                    var a = i.computeStackTrace(n), o = b(a.stack) && a.stack[1];
                    o && "Raven.captureException" === o.func && (o = a.stack[2]);
                    var s = o && o.url || "";
                    if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(s)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(s))) {
                        if (this._globalOptions.stacktrace || t.stacktrace || "" === r.message) {
                            r.fingerprint = null == r.fingerprint ? e : r.fingerprint, t = k({trimHeadFrames: 0}, t), t.trimHeadFrames += 1;
                            var c = this._prepareFrames(a, t);
                            r.stacktrace = {frames: c.reverse()}
                        }
                        return r.fingerprint && (r.fingerprint = b(r.fingerprint) ? r.fingerprint : [r.fingerprint]), this._send(r), this
                    }
                }
            }, captureBreadcrumb: function (e) {
                var t = k({timestamp: r() / 1e3}, e);
                if (g(this._globalOptions.breadcrumbCallback)) {
                    var n = this._globalOptions.breadcrumbCallback(t);
                    if (m(n) && !w(n)) t = n; else if (!1 === n) return this
                }
                return this._breadcrumbs.push(t), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this
            }, addPlugin: function (e) {
                var t = [].slice.call(arguments, 1);
                return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this
            }, setUserContext: function (e) {
                return this._globalContext.user = e, this
            }, setExtraContext: function (e) {
                return this._mergeContext("extra", e), this
            }, setTagsContext: function (e) {
                return this._mergeContext("tags", e), this
            }, clearContext: function () {
                return this._globalContext = {}, this
            }, getContext: function () {
                return JSON.parse(s(this._globalContext))
            }, setEnvironment: function (e) {
                return this._globalOptions.environment = e, this
            }, setRelease: function (e) {
                return this._globalOptions.release = e, this
            }, setDataCallback: function (e) {
                var t = this._globalOptions.dataCallback;
                return this._globalOptions.dataCallback = a(t, e), this
            }, setBreadcrumbCallback: function (e) {
                var t = this._globalOptions.breadcrumbCallback;
                return this._globalOptions.breadcrumbCallback = a(t, e), this
            }, setShouldSendCallback: function (e) {
                var t = this._globalOptions.shouldSendCallback;
                return this._globalOptions.shouldSendCallback = a(t, e), this
            }, setTransport: function (e) {
                return this._globalOptions.transport = e, this
            }, lastException: function () {
                return this._lastCapturedException
            }, lastEventId: function () {
                return this._lastEventId
            }, isSetup: function () {
                return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
            }, afterLoad: function () {
                var e = H.RavenConfig;
                e && this.config(e.dsn, e.config).install()
            }, showReportDialog: function (e) {
                if (q) {
                    e = e || {};
                    var t = e.eventId || this.lastEventId();
                    if (!t) throw new l("Missing eventId");
                    var n = e.dsn || this._dsn;
                    if (!n) throw new l("Missing DSN");
                    var r = encodeURIComponent, a = "";
                    a += "?eventId=" + r(t), a += "&dsn=" + r(n);
                    var o = e.user || this._globalContext.user;
                    o && (o.name && (a += "&name=" + r(o.name)), o.email && (a += "&email=" + r(o.email)));
                    var i = this._getGlobalServer(this._parseDSN(n)), s = q.createElement("script");
                    s.async = !0, s.src = i + "/api/embed/error-page/" + a, (q.head || q.body).appendChild(s)
                }
            }, _ignoreNextOnError: function () {
                var e = this;
                this._ignoreOnError += 1, setTimeout(function () {
                    e._ignoreOnError -= 1
                })
            }, _triggerEvent: function (e, t) {
                var n, r;
                if (this._hasDocument) {
                    t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), q.createEvent ? (n = q.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = q.createEventObject(), n.eventType = e);
                    for (r in t) O(t, r) && (n[r] = t[r]);
                    if (q.createEvent) q.dispatchEvent(n); else try {
                        q.fireEvent("on" + n.eventType.toLowerCase(), n)
                    } catch (e) {
                    }
                }
            }, _breadcrumbEventHandler: function (e) {
                var t = this;
                return function (n) {
                    if (t._keypressTimeout = null, t._lastCapturedEvent !== n) {
                        t._lastCapturedEvent = n;
                        var r;
                        try {
                            r = P(n.target)
                        } catch (e) {
                            r = "<unknown>"
                        }
                        t.captureBreadcrumb({category: "ui." + e, message: r})
                    }
                }
            }, _keypressEventHandler: function () {
                var e = this;
                return function (t) {
                    var n;
                    try {
                        n = t.target
                    } catch (e) {
                        return
                    }
                    var r = n && n.tagName;
                    if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                        var a = e._keypressTimeout;
                        a || e._breadcrumbEventHandler("input")(t), clearTimeout(a), e._keypressTimeout = setTimeout(function () {
                            e._keypressTimeout = null
                        }, 1e3)
                    }
                }
            }, _captureUrlChange: function (e, t) {
                var n = U(this._location.href), r = U(t), a = U(e);
                this._lastHref = t, n.protocol === r.protocol && n.host === r.host && (t = r.relative), n.protocol === a.protocol && n.host === a.host && (e = a.relative), this.captureBreadcrumb({
                    category: "navigation",
                    data: {to: t, from: e}
                })
            }, _patchFunctionToString: function () {
                var e = this;
                e._originalFunctionToString = Function.prototype.toString, Function.prototype.toString = function () {
                    return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments)
                }
            }, _unpatchFunctionToString: function () {
                this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
            }, _instrumentTryCatch: function () {
                function e(e) {
                    return function (n, r) {
                        for (var a = new Array(arguments.length), o = 0; o < a.length; ++o) a[o] = arguments[o];
                        var i = a[0];
                        return g(i) && (a[0] = t.wrap({
                            mechanism: {
                                type: "instrument",
                                data: {function: e.name || "<anonymous>"}
                            }
                        }, i)), e.apply ? e.apply(this, a) : e(a[0], a[1])
                    }
                }

                var t = this, n = t._wrappedBuiltIns, r = this._globalOptions.autoBreadcrumbs;
                I(H, "setTimeout", e, n), I(H, "setInterval", e, n), H.requestAnimationFrame && I(H, "requestAnimationFrame", function (e) {
                    return function (n) {
                        return e(t.wrap({
                            mechanism: {
                                type: "instrument",
                                data: {function: "requestAnimationFrame", handler: e && e.name || "<anonymous>"}
                            }
                        }, n))
                    }
                }, n);
                for (var a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], o = 0; o < a.length; o++) !function (e) {
                    var a = H[e] && H[e].prototype;
                    a && a.hasOwnProperty && a.hasOwnProperty("addEventListener") && (I(a, "addEventListener", function (n) {
                        return function (a, o, i, s) {
                            try {
                                o && o.handleEvent && (o.handleEvent = t.wrap({
                                    mechanism: {
                                        type: "instrument",
                                        data: {
                                            target: e,
                                            function: "handleEvent",
                                            handler: o && o.name || "<anonymous>"
                                        }
                                    }
                                }, o.handleEvent))
                            } catch (e) {
                            }
                            var c, l, u;
                            return r && r.dom && ("EventTarget" === e || "Node" === e) && (l = t._breadcrumbEventHandler("click"), u = t._keypressEventHandler(), c = function (e) {
                                if (e) {
                                    var t;
                                    try {
                                        t = e.type
                                    } catch (e) {
                                        return
                                    }
                                    return "click" === t ? l(e) : "keypress" === t ? u(e) : void 0
                                }
                            }), n.call(this, a, t.wrap({
                                mechanism: {
                                    type: "instrument",
                                    data: {
                                        target: e,
                                        function: "addEventListener",
                                        handler: o && o.name || "<anonymous>"
                                    }
                                }
                            }, o, c), i, s)
                        }
                    }, n), I(a, "removeEventListener", function (e) {
                        return function (t, n, r, a) {
                            try {
                                n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
                            } catch (e) {
                            }
                            return e.call(this, t, n, r, a)
                        }
                    }, n))
                }(a[o])
            }, _instrumentBreadcrumbs: function () {
                function e(e, n) {
                    e in n && g(n[e]) && I(n, e, function (n) {
                        return t.wrap({
                            mechanism: {
                                type: "instrument",
                                data: {function: e, handler: n && n.name || "<anonymous>"}
                            }
                        }, n)
                    })
                }

                var t = this, n = this._globalOptions.autoBreadcrumbs, r = t._wrappedBuiltIns;
                if (n.xhr && "XMLHttpRequest" in H) {
                    var a = H.XMLHttpRequest && H.XMLHttpRequest.prototype;
                    I(a, "open", function (e) {
                        return function (n, r) {
                            return y(r) && -1 === r.indexOf(t._globalKey) && (this.__raven_xhr = {
                                method: n,
                                url: r,
                                status_code: null
                            }), e.apply(this, arguments)
                        }
                    }, r), I(a, "send", function (n) {
                        return function () {
                            function r() {
                                if (a.__raven_xhr && 4 === a.readyState) {
                                    try {
                                        a.__raven_xhr.status_code = a.status
                                    } catch (e) {
                                    }
                                    t.captureBreadcrumb({type: "http", category: "xhr", data: a.__raven_xhr})
                                }
                            }

                            for (var a = this, o = ["onload", "onerror", "onprogress"], i = 0; i < o.length; i++) e(o[i], a);
                            return "onreadystatechange" in a && g(a.onreadystatechange) ? I(a, "onreadystatechange", function (e) {
                                return t.wrap({
                                    mechanism: {
                                        type: "instrument",
                                        data: {function: "onreadystatechange", handler: e && e.name || "<anonymous>"}
                                    }
                                }, e, r)
                            }) : a.onreadystatechange = r, n.apply(this, arguments)
                        }
                    }, r)
                }
                n.xhr && D() && I(H, "fetch", function (e) {
                    return function () {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; ++r) n[r] = arguments[r];
                        var a, o = n[0], i = "GET";
                        if ("string" == typeof o ? a = o : "Request" in H && o instanceof H.Request ? (a = o.url, o.method && (i = o.method)) : a = "" + o, -1 !== a.indexOf(t._globalKey)) return e.apply(this, n);
                        n[1] && n[1].method && (i = n[1].method);
                        var s = {method: i, url: a, status_code: null};
                        return e.apply(this, n).then(function (e) {
                            return s.status_code = e.status, t.captureBreadcrumb({
                                type: "http",
                                category: "fetch",
                                data: s
                            }), e
                        }).catch(function (e) {
                            throw t.captureBreadcrumb({type: "http", category: "fetch", data: s, level: "error"}), e
                        })
                    }
                }, r), n.dom && this._hasDocument && (q.addEventListener ? (q.addEventListener("click", t._breadcrumbEventHandler("click"), !1), q.addEventListener("keypress", t._keypressEventHandler(), !1)) : q.attachEvent && (q.attachEvent("onclick", t._breadcrumbEventHandler("click")), q.attachEvent("onkeypress", t._keypressEventHandler())));
                var o = H.chrome, i = o && o.app && o.app.runtime,
                    s = !i && H.history && H.history.pushState && H.history.replaceState;
                if (n.location && s) {
                    var c = H.onpopstate;
                    H.onpopstate = function () {
                        var e = t._location.href;
                        if (t._captureUrlChange(t._lastHref, e), c) return c.apply(this, arguments)
                    };
                    var l = function (e) {
                        return function () {
                            var n = arguments.length > 2 ? arguments[2] : void 0;
                            return n && t._captureUrlChange(t._lastHref, n + ""), e.apply(this, arguments)
                        }
                    };
                    I(H.history, "pushState", l, r), I(H.history, "replaceState", l, r)
                }
                if (n.console && "console" in H && console.log) {
                    var u = function (e, n) {
                        t.captureBreadcrumb({message: e, level: n.level, category: "console"})
                    };
                    E(["debug", "info", "warn", "error", "log"], function (e, t) {
                        V(console, t, u)
                    })
                }
            }, _restoreBuiltIns: function () {
                for (var e; this._wrappedBuiltIns.length;) {
                    e = this._wrappedBuiltIns.shift();
                    var t = e[0], n = e[1], r = e[2];
                    t[n] = r
                }
            }, _restoreConsole: function () {
                for (var e in this._originalConsoleMethods) this._originalConsole[e] = this._originalConsoleMethods[e]
            }, _drainPlugins: function () {
                var e = this;
                E(this._plugins, function (t, n) {
                    var r = n[0], a = n[1];
                    r.apply(e, [e].concat(a))
                })
            }, _parseDSN: function (e) {
                var t = W.exec(e), n = {}, r = 7;
                try {
                    for (; r--;) n[B[r]] = t[r] || ""
                } catch (t) {
                    throw new l("Invalid DSN: " + e)
                }
                if (n.pass && !this._globalOptions.allowSecretKey) throw new l("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                return n
            }, _getGlobalServer: function (e) {
                var t = "//" + e.host + (e.port ? ":" + e.port : "");
                return e.protocol && (t = e.protocol + ":" + t), t
            }, _handleOnErrorStackInfo: function (e, t) {
                t = t || {}, t.mechanism = t.mechanism || {
                    type: "onerror",
                    handled: !1
                }, this._ignoreOnError || this._handleStackInfo(e, t)
            }, _handleStackInfo: function (e, t) {
                var n = this._prepareFrames(e, t);
                this._triggerEvent("handle", {
                    stackInfo: e,
                    options: t
                }), this._processException(e.name, e.message, e.url, e.lineno, n, t)
            }, _prepareFrames: function (e, t) {
                var n = this, r = [];
                if (e.stack && e.stack.length && (E(e.stack, function (t, a) {
                        var o = n._normalizeFrame(a, e.url);
                        o && r.push(o)
                    }), t && t.trimHeadFrames)) for (var a = 0; a < t.trimHeadFrames && a < r.length; a++) r[a].in_app = !1;
                return r = r.slice(0, this._globalOptions.stackTraceLimit)
            }, _normalizeFrame: function (e, t) {
                var n = {filename: e.url, lineno: e.line, colno: e.column, function: e.func || "?"};
                return e.url || (n.filename = t), n.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n.function) || /raven\.(min\.)?js$/.test(n.filename)), n
            }, _processException: function (e, t, n, r, a, o) {
                var i = (e ? e + ": " : "") + (t || "");
                if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t) && !this._globalOptions.ignoreErrors.test(i)) {
                    var s;
                    if (a && a.length ? (n = a[0].filename || n, a.reverse(), s = {frames: a}) : n && (s = {
                            frames: [{
                                filename: n,
                                lineno: r,
                                in_app: !0
                            }]
                        }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n))) {
                        var c = k({exception: {values: [{type: e, value: t, stacktrace: s}]}, transaction: n}, o),
                            l = c.exception.values[0];
                        null == l.type && "" === l.value && (l.value = "Unrecoverable error caught"), !c.exception.mechanism && c.mechanism && (c.exception.mechanism = c.mechanism, delete c.mechanism), c.exception.mechanism = k({
                            type: "generic",
                            handled: !0
                        }, c.exception.mechanism || {}), this._send(c)
                    }
                }
            }, _trimPacket: function (e) {
                var t = this._globalOptions.maxMessageLength;
                if (e.message && (e.message = x(e.message, t)), e.exception) {
                    var n = e.exception.values[0];
                    n.value = x(n.value, t)
                }
                var r = e.request;
                return r && (r.url && (r.url = x(r.url, this._globalOptions.maxUrlLength)), r.Referer && (r.Referer = x(r.Referer, this._globalOptions.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs), e
            }, _trimBreadcrumbs: function (e) {
                for (var t, n, r, a = ["to", "from", "url"], o = 0; o < e.values.length; ++o) if (n = e.values[o], n.hasOwnProperty("data") && m(n.data) && !S(n.data)) {
                    r = k({}, n.data);
                    for (var i = 0; i < a.length; ++i) t = a[i], r.hasOwnProperty(t) && r[t] && (r[t] = x(r[t], this._globalOptions.maxUrlLength));
                    e.values[o].data = r
                }
            }, _getHttpData: function () {
                if (this._hasNavigator || this._hasDocument) {
                    var e = {};
                    return this._hasNavigator && J.userAgent && (e.headers = {"User-Agent": J.userAgent}), H.location && H.location.href && (e.url = H.location.href), this._hasDocument && q.referrer && (e.headers || (e.headers = {}), e.headers.Referer = q.referrer), e
                }
            }, _resetBackoff: function () {
                this._backoffDuration = 0, this._backoffStart = null
            }, _shouldBackoff: function () {
                return this._backoffDuration && r() - this._backoffStart < this._backoffDuration
            }, _isRepeatData: function (e) {
                var t = this._lastData;
                return !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? A(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || T(e.exception, t.exception))
            }, _setBackoffState: function (e) {
                if (!this._shouldBackoff()) {
                    var t = e.status;
                    if (400 === t || 401 === t || 429 === t) {
                        var n;
                        try {
                            n = D() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10)
                        } catch (e) {
                        }
                        this._backoffDuration = n || (2 * this._backoffDuration || 1e3), this._backoffStart = r()
                    }
                }
            }, _send: function (e) {
                var t = this._globalOptions,
                    n = {project: this._globalProject, logger: t.logger, platform: "javascript"},
                    a = this._getHttpData();
                if (a && (n.request = a), e.trimHeadFrames && delete e.trimHeadFrames, e = k(n, e), e.tags = k(k({}, this._globalContext.tags), e.tags), e.extra = k(k({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = r() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {values: [].slice.call(this._breadcrumbs, 0)}), this._globalContext.user && (e.user = this._globalContext.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), e = this._sanitizeData(e), Object.keys(e).forEach(function (t) {
                        (null == e[t] || "" === e[t] || w(e[t])) && delete e[t]
                    }), g(t.dataCallback) && (e = t.dataCallback(e) || e), e && !w(e) && (!g(t.shouldSendCallback) || t.shouldSendCallback(e))) return this._shouldBackoff() ? void this._logDebug("warn", "Raven dropped error due to backoff: ", e) : void("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e))
            }, _sanitizeData: function (e) {
                return F(e, this._globalOptions.sanitizeKeys)
            }, _getUuid: function () {
                return N()
            }, _sendProcessedPayload: function (e, t) {
                var n = this, r = this._globalOptions;
                if (this.isSetup()) {
                    if (e = this._trimPacket(e), !this._globalOptions.allowDuplicates && this._isRepeatData(e)) return void this._logDebug("warn", "Raven dropped repeat event: ", e);
                    this._lastEventId = e.event_id || (e.event_id = this._getUuid()), this._lastData = e, this._logDebug("debug", "Raven about to send:", e);
                    var a = {
                        sentry_version: "7",
                        sentry_client: "raven-js/" + this.VERSION,
                        sentry_key: this._globalKey
                    };
                    this._globalSecret && (a.sentry_secret = this._globalSecret);
                    var o = e.exception && e.exception.values[0];
                    this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                        category: "sentry",
                        message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                        event_id: e.event_id,
                        level: e.level || "error"
                    });
                    var i = this._globalEndpoint;
                    (r.transport || this._makeRequest).call(this, {
                        url: i,
                        auth: a,
                        data: e,
                        options: r,
                        onSuccess: function () {
                            n._resetBackoff(), n._triggerEvent("success", {data: e, src: i}), t && t()
                        },
                        onError: function (r) {
                            n._logDebug("error", "Raven transport failed to send: ", r), r.request && n._setBackoffState(r.request), n._triggerEvent("failure", {
                                data: e,
                                src: i
                            }), r = r || new Error("Raven send failed (no additional details provided)"), t && t(r)
                        }
                    })
                }
            }, _makeRequest: function (e) {
                var t = e.url + "?" + C(e.auth), n = null, r = {};
                if (e.options.headers && (n = this._evaluateHash(e.options.headers)), e.options.fetchParameters && (r = this._evaluateHash(e.options.fetchParameters)), D()) {
                    r.body = s(e.data);
                    var a = k({}, this._fetchDefaults), o = k(a, r);
                    return n && (o.headers = n), H.fetch(t, o).then(function (t) {
                        if (t.ok) e.onSuccess && e.onSuccess(); else {
                            var n = new Error("Sentry error code: " + t.status);
                            n.request = t, e.onError && e.onError(n)
                        }
                    }).catch(function () {
                        e.onError && e.onError(new Error("Sentry error code: network unavailable"))
                    })
                }
                var i = H.XMLHttpRequest && new H.XMLHttpRequest;
                if (i) {
                    ("withCredentials" in i || "undefined" != typeof XDomainRequest) && ("withCredentials" in i ? i.onreadystatechange = function () {
                        if (4 === i.readyState) if (200 === i.status) e.onSuccess && e.onSuccess(); else if (e.onError) {
                            var t = new Error("Sentry error code: " + i.status);
                            t.request = i, e.onError(t)
                        }
                    } : (i = new XDomainRequest, t = t.replace(/^https?:/, ""), e.onSuccess && (i.onload = e.onSuccess), e.onError && (i.onerror = function () {
                        var t = new Error("Sentry error code: XDomainRequest");
                        t.request = i, e.onError(t)
                    })), i.open("POST", t), n && E(n, function (e, t) {
                        i.setRequestHeader(e, t)
                    }), i.send(s(e.data)))
                }
            }, _evaluateHash: function (e) {
                var t = {};
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    t[n] = "function" == typeof r ? r() : r
                }
                return t
            }, _logDebug: function (e) {
                this._originalConsoleMethods[e] && (this.debug || this._globalOptions.debug) && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
            }, _mergeContext: function (e, t) {
                v(t) ? delete this._globalContext[e] : this._globalContext[e] = k(this._globalContext[e] || {}, t)
            }
        }, o.prototype.setUser = o.prototype.setUserContext, o.prototype.setReleaseContext = o.prototype.setRelease, e.exports = o
    }).call(t, n(9))
}, function (e, t, n) {
    (function (t) {
        function r() {
            return "undefined" == typeof document || null == document.location ? "" : document.location.href
        }

        function a() {
            return "undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")
        }

        var o = n(13), i = {collectWindowErrors: !0, debug: !1},
            s = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            c = [].slice, l = "?",
            u = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        i.report = function () {
            function e(e) {
                f(), g.push(e)
            }

            function t(e) {
                for (var t = g.length - 1; t >= 0; --t) g[t] === e && g.splice(t, 1)
            }

            function n() {
                p(), g = []
            }

            function a(e, t) {
                var n = null;
                if (!t || i.collectWindowErrors) {
                    for (var r in g) if (g.hasOwnProperty(r)) try {
                        g[r].apply(null, [e].concat(c.call(arguments, 2)))
                    } catch (e) {
                        n = e
                    }
                    if (n) throw n
                }
            }

            function d(e, t, n, s, c) {
                var d = null, f = o.isErrorEvent(c) ? c.error : c, p = o.isErrorEvent(e) ? e.message : e;
                if (w) i.computeStackTrace.augmentStackTraceWithInitialElement(w, t, n, p), _(); else if (f && o.isError(f)) d = i.computeStackTrace(f), a(d, !0); else {
                    var m, v = {url: t, line: n, column: s}, g = void 0;
                    if ("[object String]" === {}.toString.call(p)) {
                        var m = p.match(u);
                        m && (g = m[1], p = m[2])
                    }
                    v.func = l, d = {name: g, message: p, url: r(), stack: [v]}, a(d, !0)
                }
                return !!h && h.apply(this, arguments)
            }

            function f() {
                v || (h = s.onerror, s.onerror = d, v = !0)
            }

            function p() {
                v && (s.onerror = h, v = !1, h = void 0)
            }

            function _() {
                var e = w, t = y;
                y = null, w = null, b = null, a.apply(null, [e, !1].concat(t))
            }

            function m(e, t) {
                var n = c.call(arguments, 1);
                if (w) {
                    if (b === e) return;
                    _()
                }
                var r = i.computeStackTrace(e);
                if (w = r, b = e, y = n, setTimeout(function () {
                        b === e && _()
                    }, r.incomplete ? 2e3 : 0), !1 !== t) throw e
            }

            var h, v, g = [], y = null, b = null, w = null;
            return m.subscribe = e, m.unsubscribe = t, m.uninstall = n, m
        }(), i.computeStackTrace = function () {
            function e(e) {
                if (void 0 !== e.stack && e.stack) {
                    for (var t, n, o, i = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = /\((\S*)(?::(\d+))(?::(\d+))\)/, f = e.stack.split("\n"), p = [], _ = (/^(.*) is undefined$/.exec(e.message), 0), m = f.length; _ < m; ++_) {
                        if (n = i.exec(f[_])) {
                            var h = n[2] && 0 === n[2].indexOf("native"), v = n[2] && 0 === n[2].indexOf("eval");
                            v && (t = d.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), o = {
                                url: h ? null : n[2],
                                func: n[1] || l,
                                args: h ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = s.exec(f[_])) o = {
                            url: n[2],
                            func: n[1] || l,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        }; else {
                            if (!(n = c.exec(f[_]))) continue;
                            var v = n[3] && n[3].indexOf(" > eval") > -1;
                            v && (t = u.exec(n[3])) ? (n[3] = t[1], n[4] = t[2], n[5] = null) : 0 !== _ || n[5] || void 0 === e.columnNumber || (p[0].column = e.columnNumber + 1), o = {
                                url: n[3],
                                func: n[1] || l,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }
                        if (!o.func && o.line && (o.func = l), o.url && "blob:" === o.url.substr(0, 5)) {
                            var g = new XMLHttpRequest;
                            if (g.open("GET", o.url, !1), g.send(null), 200 === g.status) {
                                var y = g.responseText || "";
                                y = y.slice(-300);
                                var b = y.match(/\/\/# sourceMappingURL=(.*)$/);
                                if (b) {
                                    var w = b[1];
                                    "~" === w.charAt(0) && (w = a() + w.slice(1)), o.url = w.slice(0, -4)
                                }
                            }
                        }
                        p.push(o)
                    }
                    return p.length ? {name: e.name, message: e.message, url: r(), stack: p} : null
                }
            }

            function t(e, t, n, r) {
                var a = {url: t, line: n};
                if (a.url && a.line) {
                    if (e.incomplete = !1, a.func || (a.func = l), e.stack.length > 0 && e.stack[0].url === a.url) {
                        if (e.stack[0].line === a.line) return !1;
                        if (!e.stack[0].line && e.stack[0].func === a.func) return e.stack[0].line = a.line, !1
                    }
                    return e.stack.unshift(a), e.partial = !0, !0
                }
                return e.incomplete = !0, !1
            }

            function n(e, a) {
                for (var s, c, u = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], f = {}, p = !1, _ = n.caller; _ && !p; _ = _.caller) if (_ !== o && _ !== i.report) {
                    if (c = {
                            url: null,
                            func: l,
                            line: null,
                            column: null
                        }, _.name ? c.func = _.name : (s = u.exec(_.toString())) && (c.func = s[1]), void 0 === c.func) try {
                        c.func = s.input.substring(0, s.input.indexOf("{"))
                    } catch (e) {
                    }
                    f["" + _] ? p = !0 : f["" + _] = !0, d.push(c)
                }
                a && d.splice(0, a);
                var m = {name: e.name, message: e.message, url: r(), stack: d};
                return t(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), m
            }

            function o(t, a) {
                var o = null;
                a = null == a ? 0 : +a;
                try {
                    if (o = e(t)) return o
                } catch (e) {
                    if (i.debug) throw e
                }
                try {
                    if (o = n(t, a + 1)) return o
                } catch (e) {
                    if (i.debug) throw e
                }
                return {name: t.name, message: t.message, url: r()}
            }

            return o.augmentStackTraceWithInitialElement = t, o.computeStackTraceFromStackProp = e, o
        }(), e.exports = i
    }).call(t, n(9))
}, function (e, t) {
    function n(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function r(e, t) {
        return e << t | e >>> 32 - t
    }

    function a(e, t, a, o, i, s) {
        return n(r(n(n(t, e), n(o, s)), i), a)
    }

    function o(e, t, n, r, o, i, s) {
        return a(t & n | ~t & r, e, t, o, i, s)
    }

    function i(e, t, n, r, o, i, s) {
        return a(t & r | n & ~r, e, t, o, i, s)
    }

    function s(e, t, n, r, o, i, s) {
        return a(t ^ n ^ r, e, t, o, i, s)
    }

    function c(e, t, n, r, o, i, s) {
        return a(n ^ (t | ~r), e, t, o, i, s)
    }

    function l(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        var r, a, l, u, d, f = 1732584193, p = -271733879, _ = -1732584194, m = 271733878;
        for (r = 0; r < e.length; r += 16) a = f, l = p, u = _, d = m, f = o(f, p, _, m, e[r], 7, -680876936), m = o(m, f, p, _, e[r + 1], 12, -389564586), _ = o(_, m, f, p, e[r + 2], 17, 606105819), p = o(p, _, m, f, e[r + 3], 22, -1044525330), f = o(f, p, _, m, e[r + 4], 7, -176418897), m = o(m, f, p, _, e[r + 5], 12, 1200080426), _ = o(_, m, f, p, e[r + 6], 17, -1473231341), p = o(p, _, m, f, e[r + 7], 22, -45705983), f = o(f, p, _, m, e[r + 8], 7, 1770035416), m = o(m, f, p, _, e[r + 9], 12, -1958414417), _ = o(_, m, f, p, e[r + 10], 17, -42063), p = o(p, _, m, f, e[r + 11], 22, -1990404162), f = o(f, p, _, m, e[r + 12], 7, 1804603682), m = o(m, f, p, _, e[r + 13], 12, -40341101), _ = o(_, m, f, p, e[r + 14], 17, -1502002290), p = o(p, _, m, f, e[r + 15], 22, 1236535329), f = i(f, p, _, m, e[r + 1], 5, -165796510), m = i(m, f, p, _, e[r + 6], 9, -1069501632), _ = i(_, m, f, p, e[r + 11], 14, 643717713), p = i(p, _, m, f, e[r], 20, -373897302), f = i(f, p, _, m, e[r + 5], 5, -701558691), m = i(m, f, p, _, e[r + 10], 9, 38016083), _ = i(_, m, f, p, e[r + 15], 14, -660478335), p = i(p, _, m, f, e[r + 4], 20, -405537848), f = i(f, p, _, m, e[r + 9], 5, 568446438), m = i(m, f, p, _, e[r + 14], 9, -1019803690), _ = i(_, m, f, p, e[r + 3], 14, -187363961), p = i(p, _, m, f, e[r + 8], 20, 1163531501), f = i(f, p, _, m, e[r + 13], 5, -1444681467), m = i(m, f, p, _, e[r + 2], 9, -51403784), _ = i(_, m, f, p, e[r + 7], 14, 1735328473), p = i(p, _, m, f, e[r + 12], 20, -1926607734), f = s(f, p, _, m, e[r + 5], 4, -378558), m = s(m, f, p, _, e[r + 8], 11, -2022574463), _ = s(_, m, f, p, e[r + 11], 16, 1839030562), p = s(p, _, m, f, e[r + 14], 23, -35309556), f = s(f, p, _, m, e[r + 1], 4, -1530992060), m = s(m, f, p, _, e[r + 4], 11, 1272893353), _ = s(_, m, f, p, e[r + 7], 16, -155497632), p = s(p, _, m, f, e[r + 10], 23, -1094730640), f = s(f, p, _, m, e[r + 13], 4, 681279174), m = s(m, f, p, _, e[r], 11, -358537222), _ = s(_, m, f, p, e[r + 3], 16, -722521979), p = s(p, _, m, f, e[r + 6], 23, 76029189), f = s(f, p, _, m, e[r + 9], 4, -640364487), m = s(m, f, p, _, e[r + 12], 11, -421815835), _ = s(_, m, f, p, e[r + 15], 16, 530742520), p = s(p, _, m, f, e[r + 2], 23, -995338651), f = c(f, p, _, m, e[r], 6, -198630844), m = c(m, f, p, _, e[r + 7], 10, 1126891415), _ = c(_, m, f, p, e[r + 14], 15, -1416354905), p = c(p, _, m, f, e[r + 5], 21, -57434055), f = c(f, p, _, m, e[r + 12], 6, 1700485571), m = c(m, f, p, _, e[r + 3], 10, -1894986606), _ = c(_, m, f, p, e[r + 10], 15, -1051523), p = c(p, _, m, f, e[r + 1], 21, -2054922799), f = c(f, p, _, m, e[r + 8], 6, 1873313359), m = c(m, f, p, _, e[r + 15], 10, -30611744), _ = c(_, m, f, p, e[r + 6], 15, -1560198380), p = c(p, _, m, f, e[r + 13], 21, 1309151649), f = c(f, p, _, m, e[r + 4], 6, -145523070), m = c(m, f, p, _, e[r + 11], 10, -1120210379), _ = c(_, m, f, p, e[r + 2], 15, 718787259), p = c(p, _, m, f, e[r + 9], 21, -343485551), f = n(f, a), p = n(p, l), _ = n(_, u), m = n(m, d);
        return [f, p, _, m]
    }

    function u(e) {
        var t, n = "", r = 32 * e.length;
        for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }

    function d(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        var r = 8 * e.length;
        for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }

    function f(e) {
        return u(l(d(e), 8 * e.length))
    }

    function p(e, t) {
        var n, r, a = d(e), o = [], i = [];
        for (o[15] = i[15] = void 0, a.length > 16 && (a = l(a, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ a[n], i[n] = 1549556828 ^ a[n];
        return r = l(o.concat(d(t)), 512 + 8 * t.length), u(l(i.concat(r), 640))
    }

    function _(e) {
        var t, n, r = "0123456789abcdef", a = "";
        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), a += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return a
    }

    function m(e) {
        return unescape(encodeURIComponent(e))
    }

    function h(e) {
        return f(m(e))
    }

    function v(e) {
        return _(h(e))
    }

    function g(e, t) {
        return p(m(e), m(t))
    }

    function y(e, t) {
        return _(g(e, t))
    }

    function b(e, t, n) {
        return t ? n ? g(t, e) : y(t, e) : n ? h(e) : v(e)
    }

    e.exports = b
}, function (e, t) {
    function n(e) {
        this.name = "RavenConfigError", this.message = e
    }

    n.prototype = new Error, n.prototype.constructor = n, e.exports = n
}, function (e, t, n) {
    var r = n(13), a = function (e, t, n) {
        var a = e[t], o = e;
        if (t in e) {
            var i = "warn" === t ? "warning" : t;
            e[t] = function () {
                var e = [].slice.call(arguments), s = r.safeJoin(e, " "),
                    c = {level: i, logger: "console", extra: {arguments: e}};
                "assert" === t ? !1 === e[0] && (s = "Assertion failed: " + (r.safeJoin(e.slice(1), " ") || "console.assert"), c.extra.arguments = e.slice(1), n && n(s, c)) : n && n(s, c), a && Function.prototype.apply.call(a, o, e)
            }
        }
    };
    e.exports = {wrapMethod: a}
}, function (e, t, n) {
    "use strict";
    var r = document.body, a = document.createElement("div");
    a.id = "empty", r.appendChild(a)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    console.info("[business/store]");
    var a = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
        if ("object" === (void 0 === t ? "undefined" : r(t))) {
            var n = t.type, a = t.data;
            e[n] = a
        }
        return e
    };
    t.default = function (e) {
        var t = {}, n = [];
        return {
            getState: function () {
                return t
            }, dispatch: function (r) {
                t = e(t, r), n.forEach(function (e) {
                    return e()
                })
            }, subscribe: function (e) {
                return n.push(e), function () {
                    n = [], t = {}
                }
            }
        }
    }(a)
}, , , , , , , , , , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n, r) {
        u.default.config(e, t, r), c.default.invoke("TTNetwork.commonParams", {}, function (a) {
            var o = a.data || a;
            o && o.device_id && i.default.config("http://key@m.toutiao.com/log/sentry/v2/183", {
                tags: {
                    bid: "article_app",
                    pid: "article_new",
                    ac: o.ac,
                    aid: o.aid,
                    channel: o.channel,
                    device_brand: o.device_brand,
                    device_id: o.device_id,
                    device_platform: o.device_platform,
                    device_type: o.device_type,
                    os_version: o.os_version,
                    resolution: o.resolution,
                    uuid: o.uuid,
                    version_name: o.version_name || o.version_code,
                    js_version: e,
                    gid: "",
                    service: t
                },
                ignoreErrors: ["ReferenceError: Can't find variable: getElementPosition", "Unexpected token ')'", "Can't find variable: performance", "null is not an object (evaluating 'el.tagName')"],
                dataCallback: function (t) {
                    window.globalErrors || (window.globalErrors = []), window.globalErrors.push(t);
                    var a = ["lib.js", "iphone.js", "android.js"], o = ["js"], i = ["v55", "v60", "shared"],
                        s = "http://s3.pstatp.com/toutiao/app_web_article_online_updates/";
                    return t && t.exception && Array.isArray(t.exception.values) && t.exception.values.forEach(function (t) {
                        t && t.stacktrace && Array.isArray(t.stacktrace.frames) && t.stacktrace.frames.forEach(function (t) {
                            var r = t.filename, c = r.split("/"), l = c.length;
                            a.indexOf(c[l - 1]) >= 0 && o.indexOf(c[l - 2]) >= 0 && i.indexOf(c[l - 3]) >= 0 ? t.filename = s + e + "/" + n + "/" + c[l - 3] + "/" + c[l - 2] + "/" + c[l - 1] : a.indexOf(c[l - 1]) >= 0 && o.indexOf(c[l - 2]) >= 0 && (t.filename = s + e + "/" + n + "/" + c[l - 2] + "/" + c[l - 1])
                        })
                    }), t.tags.gid = r || "", t
                }
            }).install()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(7), i = r(o), s = n(2), c = r(s), l = n(16), u = r(l);
    t.default = {config: a}
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), l = n(0), u = r(l), d = n(5), f = n(2), p = r(f), _ = n(1), m = n(62), h = r(m), v = n(66), g = r(v), y = n(8),
        b = r(y), w = function (e) {
            function t(e) {
                return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }

            return i(t, e), c(t, [{
                key: "tellNativeHeaderMess", value: function () {
                    [{domSelector: "#profile", JsBridge: "showTitleBarPgcLayout"}, {
                        domSelector: ".wenda-title",
                        JsBridge: "showWendaABHeaderLayout"
                    }].forEach(function (e, t) {
                        b.default.add("header", e)
                    })
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this.props.data;
                    if (e && e.article && "wenda" === e.article.type) {
                        var t = 0, n = 0, r = (0, d.findDOMNode)(this._title), a = (0, d.findDOMNode)(this._author);
                        r && (t = r.getBoundingClientRect().height), a && (n = a.getBoundingClientRect().height + 20 + t), p.default.invoke("onGetHeaderAndProfilePosition", {
                            header_position: t,
                            profile_position: n
                        })
                    }
                    _.client.isAndroid && this.tellNativeHeaderMess()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.data;
                    return t && t.article && t.article.type ? u.default.createElement("div", {id: "header"}, u.default.createElement(h.default, s({}, t, {
                        ref: function (t) {
                            e._title = t
                        }
                    })), t.author.show ? u.default.createElement(g.default, s({}, t, {
                        ref: function (t) {
                            e._author = t
                        }
                    })) : u.default.createElement("div", {style: {height: "20px"}})) : null
                }
            }]), t
        }(u.default.Component);
    t.default = w
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(63), d = r(u), f = n(1);
    n(65);
    var p = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.highQualityClickHandler = n.highQualityClickHandler.bind(n), n
        }

        return i(t, e), s(t, [{
            key: "highQualityClickHandler", value: function () {
                var e = this.props, t = e.statistic;
                e.author;
                f.statistics.sendUmengEventV3("click_icon", {
                    group_id: t.group_id,
                    icon_name: "boutique",
                    position: "detail"
                })
            }
        }, {
            key: "renderHighQuality", value: function () {
                return l.default.createElement("a", {
                    className: "high-quality",
                    href: "sslocal://webview?url=https%3A%2F%2Fhotsoon.snssdk.com%2Fmagic%2Fslider%2F%3Fid%3D2024&title=%E9%9D%92%E4%BA%91%E8%AE%A1%E5%88%92",
                    onClick: this.highQualityClickHandler
                }, l.default.createElement("i", {className: "icon"}), l.default.createElement("span", null, "青云计划"), l.default.createElement("i", {className: "split"}), l.default.createElement("span", {className: "sub-desc"}, "头条精选文章"))
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.article;
                e.settings, e.wendaExtra, e.wendaContext;
                switch (t.type) {
                    case"pgc":
                        return l.default.createElement(c.Fragment, null, t.highQuality ? this.renderHighQuality() : null, l.default.createElement("div", {
                            className: "tt-title",
                            dangerouslySetInnerHTML: {__html: t.title}
                        }));
                    case"wenda":
                        return l.default.createElement(d.default, this.props);
                    case"zhuanma":
                        return l.default.createElement("div", {
                            className: "tt-title",
                            dangerouslySetInnerHTML: {__html: t.title}
                        });
                    default:
                        return null
                }
            }
        }]), t
    }(l.default.Component);
    t.default = p
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(2), d = r(u), f = n(1);
    n(64), console.log("[business/Header/wd-Title]");
    var p = function (e) {
        function t(e) {
            a(this, t), console.info("wdtitle", e);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                totalAnswerCount: "",
                displayTotalAnswerCount: !1
            }, n.wendaStatisticsParams = {
                value: e.wendaExtra.qid,
                ext_value: e.wendaExtra.nice_ans_count,
                extra: {
                    enter_from: e.wendaExtra.enter_from,
                    ansid: e.wendaExtra.ansid,
                    parent_enterfrom: e.wendaExtra.parent_enterfrom || "",
                    group_id: e.wendaExtra.ansid
                }
            }, n
        }

        return i(t, e), s(t, [{
            key: "updateWendaInfoAction", value: function (e, t) {
                "ans_count" in t && this.setState({
                    totalAnswerCount: t.ans_count + "个回答",
                    displayTotalAnswerCount: !0
                }), "nice_ans_count" in t && (this.wendaStatisticsParams.ext_value = t.nice_ans_count)
            }
        }, {
            key: "goToAnswerAction", value: function (e) {
                f.statistics.sendUmengEvent("answer_detail", e, this.wendaStatisticsParams)
            }
        }, {
            key: "ruleTipClickAction", value: function () {
                var e = this.props, t = (e.statistic, e.author), n = e.wendaContext;
                f.statistics.sendUmengEventV3("answer_detail_guide_click", {
                    group_id: f.statistics.group_id,
                    user_id: t.userId,
                    tips_from: n.tips_data.tips_from || "",
                    tips_type: n.tips_data.tips_type || ""
                })
            }
        }, {
            key: "urlAddQueryParams", value: function (e, t) {
                var n, r = [], a = "?";
                for (n in t) t.hasOwnProperty(n) && r.push(n + "=" + encodeURIComponent(t[n]));
                return -1 !== e.indexOf("?") && (a = "&"), [e, a, r.join("&")].join("")
            }
        }, {
            key: "renderAnswer", value: function () {
                var e = this.props, t = e.wendaExtra, n = e.wendaContext, r = e.isLiteApp,
                    a = t.show_post_answer_strategy || {}, o = "show_top" in a && !r, i = "show_default" in a && !r,
                    s = this.state, c = s.totalAnswerCount, u = s.displayTotalAnswerCount,
                    d = (t.wd_version, "ft " + (n && n.tips_data && n.tips_data.show_tips && n.tips_data.text && n.tips_data.schema ? "hide-border" : ""));
                return o ? (f.statistics.sendUmengEvent("answer_detail", "top_write_answer_show", this.wendaStatisticsParams), l.default.createElement("div", null, l.default.createElement("div", {className: d}, u ? l.default.createElement("span", {
                    className: "see-all-answers",
                    id: "total-answer-count"
                }, c) : null, l.default.createElement("span", {className: "hide-placeholder"}, " ")), l.default.createElement("a", {
                    className: "big-answer-buttoon go-to-answer",
                    href: this.urlAddQueryParams(a.show_top.schema, {source: "answer_detail_top_write_answer"}),
                    onClick: this.goToAnswerAction.bind(this, "top_write_answer")
                }, a.show_top.text), l.default.createElement("div", {className: "big-answer-buttoon-gap"}))) : i ? l.default.createElement("div", {className: d}, l.default.createElement("a", {
                    className: "go-to-answer go-to-answer-small",
                    href: this.urlAddQueryParams(a.show_default.schema, {source: "answer_detail_top_write_answer"}),
                    onClick: this.goToAnswerAction.bind(this, "wirte_answer")
                }, "回答"), u ? l.default.createElement("span", {
                    className: "see-all-answers",
                    id: "total-answer-count"
                }, c) : null) : l.default.createElement("div", {className: d}, u ? l.default.createElement("span", {
                    className: "see-all-answers",
                    id: "total-answer-count"
                }, c) : null, l.default.createElement("span", {className: "hide-placeholder"}, " "), "s")
            }
        }, {
            key: "renderRuleTip", value: function () {
                var e = this.props, t = e.wendaContext, n = e.wendaExtra, r = e.statistic, a = e.author,
                    o = t && t.tips_data;
                return console.log("fhuh", t), o && o.show_tips && o.text && o.schema ? (f.statistics.sendUmengEventV3("answer_detail_guide_show", (0, f.extend)(!0, {
                    group_id: r.group_id,
                    user_id: a.userId,
                    tips_from: t.tips_data.tips_from || "",
                    tips_type: t.tips_data.tips_type || ""
                }, n.gd_ext_json)), l.default.createElement("div", {className: "answer-tips"}, l.default.createElement("div", {className: "line-gap"}), l.default.createElement("p", {className: "tip-text"}, l.default.createElement("a", {
                    className: "tip-link",
                    href: o.schema,
                    onClick: this.ruleTipClickAction.bind(this)
                }, o.text)), l.default.createElement("div", {className: "line-border"}))) : null
            }
        }, {
            key: "titleClickAction", value: function (e) {
                if (!(e.target.className.indexOf("go-to-answer") > -1)) {
                    var t = this.props.wendaExtra;
                    if ("wenda_title_handle" in t && t.wenda_title_handle) return void d.default.invoke("clickWendaDetailHeader");
                    "need_return" in t ? t.need_return ? d.default.invoke("close") : t.list_schema && (window.location.href = t.list_schema) : ["click_answer", "click_answer_fold"].indexOf(t.enter_from) > -1 ? d.default.invoke("close") : t.list_schema && (window.location.href = t.list_schema)
                }
            }
        }, {
            key: "render", value: function () {
                var e = (this.props, this.props), t = e.wendaExtra, n = (e.wendaContext, e.isLiteApp),
                    r = t.wd_version || 0, a = t.show_post_answer_strategy || {}, o = "show_top" in a && !n,
                    i = "show_default" in a && !n, s = o ? "bigans" : i ? "smlans" : "noans";
                return r < 1 || r >= 3 && 1 == t.showMode ? null : l.default.createElement(c.Fragment, null, l.default.createElement("div", {
                    className: "wenda-title " + s + " title-type" + (t.answer_detail_type || 0),
                    onClick: this.titleClickAction.bind(this)
                }, l.default.createElement("div", {className: r >= 13 ? "wt no-icon" : "wt"}, t.title), this.renderAnswer()), this.renderRuleTip())
            }
        }]), t
    }(l.default.Component);
    t.default = p
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), l = n(0), u = r(l), d = n(27), f = r(d), p = n(68), _ = r(p), m = n(71), h = r(m), v = n(73), g = r(v),
        y = n(75), b = r(y), w = n(12);
    n(79);
    var E = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                followState: e.author.followState,
                mediasugInit: !1,
                sugstate: "no",
                followDisabled: !1
            }, n.mediasugState = null, n.executing_target_state = null, n.follow_async_timer = null, n.followSource = {
                pgc: 30,
                pgc_sug: 34,
                pgc_sug_supplement: 133,
                wenda: 28,
                wenda_sug: 71,
                wenda_sug_supplement: 138
            }, n.followSyncFunc = n.followSyncFunc.bind(n), n.shouldShowMediasug = !document.querySelector(".custom-video"), n
        }

        return i(t, e), c(t, [{
            key: "followSyncFunc", value: function (e) {
                console.info("followSyncFunc", e), this.executing_target_state = void 0;
                var t = this;
                "following" == e ? "ready" == this.state.sugstate ? w.NativePlayGif.willStart(function () {
                    t.setState({followState: e, sugstate: "open", followDisabled: !1})
                }) : this.setState({
                    followState: e,
                    followDisabled: !1
                }) : "open" == this.state.sugstate ? w.NativePlayGif.willStart(function () {
                    t.setState({followState: e, sugstate: "no", followDisabled: !1})
                }) : this.setState({followState: e, sugstate: "no", followDisabled: !1})
            }
        }, {
            key: "updateFollowState", value: function (e, t) {
                this.setState({updateFollowStateFromUserAction: !0}), e != this.executing_target_state && (clearTimeout(this.follow_async_timer), this.executing_target_state = e, this.async_timer = setTimeout(this.followSyncFunc, 450, e)), console.info("updateFollowState", e, t)
            }
        }, {
            key: "initMediasugState", value: function () {
                this.props.hasExtraSpace && this.shouldShowMediasug && "ready" == this.mediasugState ? this.setState({
                    mediasugInit: !0,
                    sugstate: "ready"
                }) : this.props.hasExtraSpace && this.shouldShowMediasug && this.setState({mediasugInit: !0})
            }
        }, {
            key: "updateSugstate", value: function (e) {
                var t = this;
                "ready" == e ? (this.mediasugState = "ready", "following" === t.state.followState ? w.NativePlayGif.willStart(function () {
                    t.setState({sugstate: "open"})
                }) : t.setState({sugstate: e})) : "close" !== t.state.sugstate && "open" !== t.state.sugstate || w.NativePlayGif.willStart(function () {
                    t.setState({sugstate: "close" === t.state.sugstate ? "open" : "close"})
                })
            }
        }, {
            key: "updateButtonDisabledState", value: function (e) {
                this.setState({followDisabled: e, updateFollowStateFromUserAction: !0})
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.author, n = e.useServerV, r = e.article, a = e.setting, o = e.statistic,
                    i = e.hasExtraSpace, c = e.wendaContext, d = i && this.shouldShowMediasug,
                    p = "wenda" === e.article.type;
                return "zhuanma" === e.article.type ? u.default.createElement("div", {className: "zhuanma-wrapper"}, u.default.createElement("span", {className: "zm-time"}, e.article.publishTime), u.default.createElement("span", {className: "zm-author"}, e.author.name)) : u.default.createElement(l.Fragment, null, u.default.createElement("div", {
                    className: p ? "authorbar wenda" : "authorbar",
                    id: "profile",
                    sugstate: this.state.sugstate
                }, u.default.createElement(f.default, {
                    authorInfo: t,
                    useServerV: n,
                    articleType: r.type,
                    setting: a,
                    statistic: o
                }), t.isAuthorSelf || "wenda" === e.article.type && e.setting.is_liteapp || e.hideFollowButton ? "" : u.default.createElement(_.default, s({}, e, {
                    followState: this.state.followState,
                    sugState: this.state.sugstate,
                    followDisabled: this.state.followDisabled,
                    updateFollowState: this.updateFollowState.bind(this),
                    updateSugstate: this.updateSugstate.bind(this),
                    updateFollowDisabledState: this.updateButtonDisabledState.bind(this),
                    initMediasugState: this.initMediasugState.bind(this)
                })), c && c.is_author && "wenda" === r.type ? u.default.createElement(h.default, e) : "", u.default.createElement(g.default, {
                    authorInfo: t,
                    article: r,
                    setting: a
                })), d ? u.default.createElement(b.default, s({}, e, {
                    followState: this.state.followState,
                    init: this.state.mediasugInit,
                    sugState: this.state.sugstate,
                    updateSugstate: this.updateSugstate.bind(this)
                })) : u.default.createElement("div", {style: {paddingTop: "20px"}}))
            }
        }], [{
            key: "getDerivedStateFromProps", value: function (e, t) {
                if (e.wendaContext && (void 0 !== e.wendaContext.is_following || void 0 != e.wendaContext.is_concern_user) && !t.followStateFromWendaContext) {
                    var n = void 0;
                    return void 0 != e.wendaContext.is_concern_user && (n = e.wendaContext.is_concern_user ? "following" : ""), void 0 != e.wendaContext.is_following && (n = e.wendaContext.is_following ? "following" : ""), {
                        followState: n,
                        followStateFromWendaContext: !0
                    }
                }
                return t.updateFollowStateFromUserAction ? {followState: t.followState} : {followState: e.author.followState}
            }
        }]), t
    }(u.default.Component);
    t.default = E
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(2), d = r(u), f = n(4), p = n(1);
    n(70);
    var _ = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.followDisabled = !1, n.followSource = {pgc: 30, wenda: 28}, n.followFrom = {
                pgc: "article_detail",
                wenda: "answer_detail_top_card"
            }, n
        }

        return i(t, e), s(t, [{
            key: "followActionHandler", value: function (e) {
                if (!this.followDisabled) {
                    this.props.updateFollowDisabledState(!0), this.followDisabled = !0;
                    var t = this, n = this.props, r = n.author, a = n.article, o = n.followState, i = n.statistic,
                        s = n.wendaExtra, c = o, l = {
                            id: r.userId,
                            action: c ? "unfollow" : "dofollow",
                            source: this.followSource[a.type],
                            from: this.followFrom[a.type]
                        }, u = {
                            to_user_id: r.userId,
                            media_id: r.mediaId,
                            follow_type: "from_group",
                            group_id: i.group_id,
                            item_id: i.item_id,
                            category_name: i.category_name,
                            log_pb: i.log_pb,
                            source: "pgc" === a.type ? "article_detail" : "answer_detail_top_card",
                            server_source: this.followSource[a.type],
                            position: "pgc" === a.type ? "title_below" : "detail"
                        };
                    if (document.querySelector(".article-fold-wrap") && !c) {
                        f.pageEvent.broadcast("showArticleFoldWrap", null, !1), document.documentElement.classList.contains("noscroll") && document.documentElement.classList.remove("noscroll");
                        var _ = document.documentElement.offsetHeight || document.body.offsetHeight || document.documentElement.scrollHeight;
                        d.default.invoke("article_open", {height: _})
                    }
                    "wenda" == a.type && (u = (0, p.extend)(!0, u, s.gd_ext_json || {})), d.default.invoke("user_follow_action", l, function (e) {
                        t.followDisabled = !1, console.info("user_follow_action", c, e), e && 1 == +e.code ? t.props.updateFollowState(c ? "" : "following", !0) : t.props.updateFollowState(c ? "following" : "", !0)
                    }), p.statistics.sendUmengEventV3(c ? "rt_unfollow" : "rt_follow", u), c || t.props.initMediasugState && t.props.initMediasugState()
                }
            }
        }, {
            key: "sugstateChangeAction", value: function () {
                p.statistics.sendUmengEvent("detail", "click_arrow_down", {extra: {source: "article_detail"}}), this.props.updateSugstate && this.props.updateSugstate()
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this;
                f.pageEvent.on("pageStateChange", function (t) {
                    switch (t.type) {
                        case"user_action":
                            t.id == e.props.author.userId && "status" in t && (e.props.updateFollowState(t.status ? "following" : "", e.followDisabled), e.followDisabled = !1);
                            break;
                        case"pgc_action":
                            t.id == e.props.author.mediaId && "status" in t && (e.props.updateFollowState(t.status ? "following" : "", e.followDisabled), e.followDisabled = !1)
                    }
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                f.pageEvent.off("pageStateChange")
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.author.isAuthorSelf || e.wendaContext && e.wendaContext.is_author,
                    n = e.redPack && e.redPack.token && e.redPack.redpack_id > 0,
                    r = e.setting.tt_follow_button_template && "red" === e.setting.tt_follow_button_template.color_style,
                    a = "subscribe-button follow-button " + (r ? " red-follow-button " : "") + e.followState + (this.props.followDisabled ? " disabled" : ""),
                    o = "open" !== e.sugState && "close" !== e.sugState;
                return t || "wenda" === e.article.type && e.setting.is_liteapp || e.hideFollowButton ? null : l.default.createElement("div", {
                    className: n ? "author-function-buttons redpack-button-just-word follow-button-large" : "author-function-buttons",
                    "extra-space": e.hasExtraSpace ? "" : "no"
                }, l.default.createElement("button", {
                    className: "mediasug-arrow-button iconfont",
                    "aria-hidden": o,
                    onClick: this.sugstateChangeAction.bind(this)
                }), l.default.createElement("button", {
                    className: a,
                    id: "subscribe",
                    onClick: this.followActionHandler.bind(this)
                }, l.default.createElement("i", {className: "iconfont focusicon"}, " ")))
            }
        }]), t
    }(l.default.Component);
    t.default = _
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.id = e, this.eventMap = {}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(7), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a);
    r.prototype.on = function (e, t) {
        e && "string" == typeof e && "function" == typeof t && (Array.isArray(this.eventMap[e]) ? -1 === this.eventMap[e].indexOf(t) && this.eventMap[e].push(t) : this.eventMap[e] = [t])
    }, r.prototype.off = function (e, t) {
        if (e && "string" == typeof e) if (t) {
            if ("function" == typeof t && Array.isArray(this.eventMap[e])) {
                var n = this.eventMap[e].indexOf(t);
                n > -1 && this.eventMap[e].splice(n, 1)
            }
        } else delete this.eventMap[e]
    }, r.prototype.broadcast = function (e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        e && "string" == typeof e && Array.isArray(this.eventMap[e]) && this.eventMap[e].forEach(function (e) {
            try {
                e.call.apply(e, [t].concat(r))
            } catch (e) {
                console.error("event广播错误", e), o.default.captureException(e)
            }
        })
    }, t.default = r
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(2), d = (r(u), n(4)), f = n(1);
    n(72);
    var p = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {browCount: e.wendaContext.brow_count, diggCount: e.wendaContext.digg_count}, n
        }

        return i(t, e), s(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props, t = (e.wendaContext, e.wendaExtra), n = this;
                d.pageEvent.on("pageStateChange", function (e) {
                    "wenda_digg" === e.type && t && e.id == t.ansid && "status" in e && (1 == e.status ? n.setState({diggCount: f.fmt.formatCount(parseInt(n.state.diggCount) + 1, "0")}) : n.state.diggCount > 0 && n.setState({diggCount: f.fmt.formatCount(parseInt(n.state.diggCount) - 1, "0")}))
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                d.pageEvent.off("pageStateChange")
            }
        }, {
            key: "render", value: function () {
                var e = f.fmt.formatCount(this.state.browCount, "0"), t = f.fmt.formatCount(this.state.diggCount, "0");
                return l.default.createElement("div", {className: "wenda-info"}, l.default.createElement("span", {className: "read-info brow-count"}, e), l.default.createElement("span", {className: "like-info digg-count-special"}, t))
            }
        }]), t
    }(l.default.Component);
    t.default = p
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s);
    n(1);
    n(74);
    var l = function (e) {
        function t(e) {
            return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return o(t, e), i(t, [{
            key: "renderMedals", value: function () {
                var e = this.props.authorInfo.medals, t = this.props.setting.ugc_user_medal;
                return e && t ? c.default.createElement("div", {className: "article-medal"}, e.map(function (e) {
                    if (t[e]) return c.default.createElement("img", {src: t[e]})
                })) : null
            }
        }, {
            key: "renderTags", value: function () {
                return this.props.article.isOriginal ? c.default.createElement("div", {className: "article-tags"}, c.default.createElement("div", {className: "article-tag-original"})) : null
            }
        }, {
            key: "renderSubTitle", value: function () {
                var e = this.props, t = e.article, n = e.authorInfo;
                switch (t.type) {
                    case"pgc":
                    case"wenda":
                        return c.default.createElement("span", {className: "sub-title"}, t.publishTime, t.publishTime && n.auth_info ? " · " : "", n.auth_info);
                    default:
                        return c.default.createElement("span", {className: "sub-title"}, n.intro)
                }
            }
        }, {
            key: "render", value: function () {
                var e = this.props;
                return c.default.createElement("div", {className: "author-bar"}, c.default.createElement("div", {className: "name-link-wrap"}, c.default.createElement("div", {className: "wenda" !== e.article.type || e.authorInfo.intro || e.article.publishTime || e.article.isOriginal ? "name-link-w" : "name-link-w no-intro"}, this.renderMedals(), c.default.createElement("a", {
                    className: "author-name-link pgc-link",
                    href: e.authorInfo.link
                }, e.authorInfo.name))), c.default.createElement("a", {
                    className: "sub-title-w",
                    href: e.authorInfo.link
                }, c.default.createElement("div", {className: "article-tags"}, this.renderTags()), this.renderSubTitle()))
            }
        }]), t
    }(c.default.Component);
    t.default = l
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), u = n(0), d = r(u), f = n(2), p = r(f), _ = n(4), m = n(1), h = n(17), v = r(h), g = n(11), y = r(g),
        b = n(76), w = r(b), E = n(77), k = r(E), x = n(12);
    n(78);
    var S = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {list: [], more: null, scrolling: !0}, n.followSource = {
                pgc_sug: 34,
                pgc_sug_supplement: 133,
                wenda_sug: 71,
                wenda_sug_supplement: 138
            }, n.followFrom = {
                pgc: "article_detail",
                wenda: "answer_detail_top_card"
            }, n.baseWidth = 150, n.cardsCount = 0, n.totalNums = 0, n.containerWidth = window.innerWidth, n.listWidth = 0, n.imprcache = {}, n.imprlog = [], n.lastIndex = [], n.lastPos = "in", n.lastMoreCellPos = "out", n.source = "pgc" === e.article.type ? "article" : "wenda", n.sendResult = {
                imp_group_list_type: 19,
                imp_group_key_name: "u11_recommend_user_" + n.source + "_detail_" + e.author.userId,
                imp_group_key: e.author.userId,
                imp_group_extra: {source: n.source, profile_user_id: e.author.userId},
                impressions_in: [],
                impressions_out: []
            }, n._pagescroll = n._pagescroll.bind(n), n
        }

        return i(t, e), l(t, [{
            key: "on", value: function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function (t) {
                    n.call(e, t || window.event)
                })
            }
        }, {
            key: "off", value: function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
        }, {
            key: "_updateList", value: function (e, t) {
                var n = this.state.list;
                if (t) this._dealimpr([parseInt(e)], []), n[e] = t, this.setState({list: n}), this._dealimpr([], [parseInt(e)]); else {
                    this._dealimpr([parseInt(e)], []), this.lastIndex.indexOf(e) > -1 && this.lastIndex.splice(this.lastIndex.length - 1, 1), n.splice(parseInt(e), 1);
                    var r = this.state.list.length, a = 150 * r + 10 + 15 + 150;
                    e == r && a - 150 > window.innerWidth ? $("#mediasug-list-html").css({
                        textAlign: "right",
                        width: a
                    }) : $("#mediasug-list-html").css({
                        textAlign: "left",
                        width: a
                    }), this.setState({list: n}), this._handler()
                }
            }
        }, {
            key: "_range", value: function (e) {
                var t = Math.floor(e / this.baseWidth);
                t = Math.max(t, 0), e += this.containerWidth;
                var n = Math.ceil(e / this.baseWidth);
                n = Math.min(n, this.state.list.length) - 1;
                for (var r = []; t <= n;) r[r.length] = t++;
                return r
            }
        }, {
            key: "_pushimpr", value: function (e) {
                this.sendResult.impressions_in = [];
                var t = this.props.profileId;
                if (Object.keys(this.imprcache).length > 0) {
                    this.sendResult.impressions_out = [];
                    for (var n in this.imprcache) {
                        var r = this.imprcache[n];
                        this.imprlog.push({
                            uid: n,
                            time: r,
                            duration: (new Date).getTime() - r
                        }), console.info("leave", n), this.sendResult.impressions_out.push({
                            imp_item_type: 51,
                            imp_item_id: n,
                            imp_item_extra: {}
                        })
                    }
                    this.imprcache = {}, e && p.default.invoke("impression", this.sendResult)
                }
                console.info("pushimpr", this.imprlog), this.imprlog.length > 0 && (m.statistics.sendUmengEvent("detail", "sub_reco_impression_v2", {
                    value: t,
                    extra: {
                        group_id: this.props.groupId,
                        impression: m.client.isIOS ? encodeURIComponent(JSON.stringify(this.imprlog)) : this.imprlog,
                        need_decode: m.client.isIOS ? 1 : 0,
                        source: this.source
                    }
                }), this.imprlog = [])
            }
        }, {
            key: "_dealimpr", value: function (e, t) {
                var n = this, r = [], a = this.state.list;
                if (e.forEach(function (e) {
                        var t = a[e].user_id;
                        if (t in n.imprcache) {
                            var o = n.imprcache[t];
                            n.imprlog.push({
                                uid: t,
                                time: o,
                                duration: (new Date).getTime() - o
                            }), delete n.imprcache[t], n.sendResult.impressions_in = n.sendResult.impressions_in.filter(function (e) {
                                return e.imp_item_id !== t
                            }), r.push({
                                imp_item_type: 51,
                                imp_item_id: t,
                                imp_item_extra: {}
                            }), console.info("leave", t)
                        }
                    }), t.forEach(function (e) {
                        var t = a[e].user_id;
                        n.imprcache[t] = (new Date).getTime(), n.sendResult.impressions_in.push({
                            imp_item_type: 51,
                            imp_item_id: t,
                            imp_item_extra: {}
                        }), console.info("enter", t)
                    }), e.length > 0 || t.length > 0) {
                    n.sendResult.impressions_out = r;
                    var o = {};
                    Object.assign(o, n.sendResult), p.default.invoke("impression", o)
                }
            }
        }, {
            key: "_moreCellShowHandler", value: function (e, t) {
                if (t > this.listWidth - this.containerWidth - this.baseWidth || !t) {
                    var n = this.props, r = n.statistic, a = n.wendaExtra;
                    (t && "out" === this.lastMoreCellPos || e && e.reopen && "in" === this.lastMoreCellPos) && (m.statistics.sendUmengEventV3("followcard_more_button", {
                        action_type: "show",
                        category_name: "article" == this.source ? r.category_name : a && a.gd_ext_json ? a.gd_ext_json.category_name : "",
                        source: "detail_follow_card",
                        server_extra: this.state.more.server_extra
                    }), this.lastMoreCellPos = "in")
                } else this.lastMoreCellPos = "out"
            }
        }, {
            key: "_handler", value: function (e) {
                for (var t = this._range(this.listDom.scrollLeft || 0), n = [], r = {}, a = 0; a < this.lastIndex.length; a++) r[this.lastIndex[a]] = !0;
                for (a = 0; a < t.length; a++) t[a] in r ? delete r[t[a]] : n.push(t[a]);
                var o = Object.keys(r);
                this._dealimpr.bind(this)(o, n), this.lastIndex = t, this.state.more && this._moreCellShowHandler({reopen: !1}, this.listDom.scrollLeft)
            }
        }, {
            key: "_pagescroll", value: function (e) {
                var t = this.listDom, n = "in", r = t.getBoundingClientRect();
                (r.bottom <= 0 || r.top > (window.innerHeight || document.body.clientHeight)) && (n = "out"), "in" === n && "out" === this.lastPos ? this._dealimpr([], this.lastIndex) : "out" === n && "in" === this.lastPos && this._pushimpr(!0), this.lastPos = n
            }
        }, {
            key: "_webviewScroll", value: function (e) {
                if ("open" === this.props.sugstate && e.rect && !(document.querySelector("body").clientHeight > innerHeight + 232)) {
                    var t = void 0, n = void 0, r = document.querySelector("body").clientHeight,
                        a = document.querySelector("header").clientHeight, o = void 0;
                    if (n = e.rect.substring(1, e.rect.length - 1).split(","), n[0], t = Math.abs(n[1]), n[2], n[3], r === innerHeight) o = t >= a ? "out" : "in"; else {
                        o = t >= a - (r - innerHeight) ? "out" : "in"
                    }
                    "out" === this.lastPos && "in" === o ? this._dealimpr([], this.lastIndex) : "in" === this.lastPos && "out" === o && this._pushimpr(!0), this.lastPos = o
                }
            }
        }, {
            key: "enableSwipeState", value: function (e) {
                console.log("bytedance://enable_swipe")
            }
        }, {
            key: "disableSwipeState", value: function () {
                console.log("bytedance://disable_swipe")
            }
        }, {
            key: "handleSupplement", value: function (e, t) {
                var n = this;
                (0, y.default)(function (r) {
                    var a = {
                        count: 1,
                        source: "wenda" === n.props.article.type ? "wenda_detail_refresh" : "article_detail_refresh",
                        follow_user_id: e.user_id
                    };
                    a = (0, m.extend)(!0, a, r), (0, v.default)("https://api.snssdk.com/user/relation/user_recommend/v1/supplement_cards/", {param: a}, function (r, a) {
                        if ("success" === a.message && "object" === c(a.data) && Array.isArray(a.data.user_cards)) {
                            var o = a.data.user_cards[0], i = o.user.info;
                            if (i = (0, m.extend)(!0, i, o.user.relation), i.reason_description = o.recommend_reason, i.profile_user_id = o.profile_user_id, i.server_extra = o.stats_place_holder, i.user_verified = !0, i.user_auth_info && "string" == typeof i.user_auth_info) try {
                                i.user_auth_info = JSON.parse(i.user_auth_info)
                            } catch (e) {
                                i.user_auth_info = {}
                            }
                            if (i.user_decoration && "string" == typeof i.user_decoration) try {
                                i.user_decoration = JSON.parse(i.user_decoration)
                            } catch (e) {
                                i.user_decoration = {}
                            }
                            i.is_supplement = !0, n._updateList(t, i), m.statistics.sendUmengEventV3("follow_card", {
                                action_type: "show",
                                category_name: n.props.statistic.category_name,
                                is_direct: 0,
                                source: "detail_follow_card_related",
                                to_user_id: e.user_id,
                                order: t,
                                style_type: 2,
                                server_extra: o.stats_place_holder
                            })
                        }
                    }, function (e) {
                    })
                })
            }
        }, {
            key: "followActionHandler", value: function (e, t) {
                var n = this, r = n.state.list;
                r.forEach(function (e) {
                    t.user_id === e.user_id && (e.followDisabled = 1)
                }), n.setState({list: r});
                var a = this.props, o = a.article, i = a.statistic, s = a.author, c = t.is_following,
                    l = t.is_supplement, u = {
                        id: t.user_id,
                        action: c ? "unfollow" : "dofollow",
                        source: this.followSource[o.type + "sug"],
                        from: this.followFrom[o.type]
                    }, d = {
                        source: l ? "detail_follow_card_related" : "detail_follow_card",
                        to_user_id: t.user_id,
                        order: e,
                        profile_user_id: t.profile_user_id,
                        follow_type: "from_recommend",
                        category_name: i.category_name,
                        server_source: this.followSource[o.type + "_sug" + (l ? "_supplement" : "")],
                        server_extra: t.server_extra,
                        enter_from: i.enter_from
                    };
                "pgc" == o.type && s.mediaId && (d.media_id = s.mediaId), p.default.invoke("user_follow_action", u, function (e) {
                    if (1 == e.code) {
                        var r = n.state.list;
                        r.forEach(function (e) {
                            t.user_id === e.user_id && (e.is_following = c ? 0 : 1, e.followDisabled = 0)
                        }), n.setState({list: r})
                    }
                });
                var f = n.state.list;
                f[e].need_supplement = !0, n.setState({list: f}), m.statistics.sendUmengEventV3(c ? "rt_unfollow" : "rt_follow", d)
            }
        }, {
            key: "deleteItem", value: function (e) {
                this._updateList(e)
            }
        }, {
            key: "domPrepare", value: function () {
                var e = this, t = document.querySelector(".mediasug-outer-container"),
                    n = document.querySelector(".mediasug-inner-container");
                t && n && t.addEventListener("transitionend", function (t) {
                    x.NativePlayGif.ended(), e.setState({scrolling: "open" === e.props.sugState}), e._handler()
                }, !1)
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this;
                e.on(document.querySelector("#mediasug-list"), "touchstart", e.disableSwipeState), e.on(document.querySelector("#mediasug-list"), "touchmove", e.disableSwipeState), e.on(document.querySelector("#mediasug-list"), "touchend", e.enableSwipeState), e.on(document.querySelector("#mediasug-list"), "touchcancel", e.enableSwipeState), e.on(document.querySelector("#mediasug-list"), "scroll", (0, m.throttle)(e._handler.bind(e), 150)), _.pageEvent.on("pageStateChange", function (t) {
                    if ("user_action" === t.type) {
                        var n = e.state.list;
                        n.forEach(function (n, r) {
                            n.user_id == t.id && (n.is_following = !!t.status, n.followDisabled = 0, n.is_following && n.need_supplement && (n.need_supplement = !1, n.from_supplement = !1, e.handleSupplement(n, r)))
                        }), e.setState({list: n})
                    }
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.off(document, "scroll", this._pagescroll), this._pushimpr(!0), _.pageEvent.off("pageStateChange"), this.off(document.querySelector("#mediasug-list"), "touchstart", this.disableSwipeState), this.off(document.querySelector("#mediasug-list"), "touchmove", this.disableSwipeState), this.off(document.querySelector("#mediasug-list"), "touchend", this.enableSwipeState), this.off(document.querySelector("#mediasug-list"), "touchcancel", this.enableSwipeState), this.off(document.querySelector("#mediasug-list"), "scroll", (0, m.throttle)(this._handler.bind(this), 150))
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                this.listWidth = this.baseWidth * this.state.list.length + 25;
                var t = this.props.sugState;
                "open" === t && "open" !== e.sugState ? (this.lastIndex = [], this._handler(), this.on(document, "scroll", this._pagescroll), p.default.on("webviewScrollEvent", this._webviewScroll.bind(this))) : "no" !== t && "close" !== t || (console.info("SUG-HIDE"), this.off(document, "scroll", this._pagescroll), this._pushimpr(!0))
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                if (e.init && !this.props.init && 0 === this.state.list.length) {
                    var t = this;
                    (0, y.default)(function (e) {
                        var n = (0, m.extend)(!0, {
                            to_user_id: t.props.author.userId,
                            page: 34,
                            source: "wenda" === t.props.article.type ? "wenda_detail" : "article_detail",
                            group_id: t.props.statistic.group_id
                        }, e);
                        (0, v.default)("http://ic.snssdk.com/api/2/relation/follow_recommends/", {
                            param: n,
                            timeout: 1e4
                        }, function (e, n) {
                            "success" === n.message && "object" === c(n.data) && Array.isArray(n.data.recommend_users) && n.data.recommend_users.length >= 3 && (n.data.add_more.server_extra = n.data.recommend_users[0].stats_place_holder, n.data.recommend_users.forEach(function (e) {
                                if (e.user_auth_info && "string" == typeof e.user_auth_info) try {
                                    e.user_auth_info = JSON.parse(e.user_auth_info)
                                } catch (t) {
                                    e.user_auth_info = {}
                                }
                                if (e.user_decoration && "string" == typeof e.user_decoration) try {
                                    e.user_decoration = JSON.parse(e.user_decoration)
                                } catch (t) {
                                    e.user_decoration = {}
                                }
                                e.profile_user_id = t.props.author.userId, e.server_extra = e.stats_place_holder
                            }), t.domPrepare(), t.setState({
                                list: n.data.recommend_users,
                                more: n.data.add_more
                            }), t.props.updateSugstate("ready"))
                        }, function (e) {
                            console.warn("mediasug", e)
                        })
                    })
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state, n = t.list, r = t.more, a = 150 * n.length + 10 + 15 + (r ? 150 : 0),
                    o = n.length > 0 || r ? "ms-open" : "",
                    i = "open" !== this.props.sugState && "close" !== this.props.sugState;
                return d.default.createElement("div", {className: "mediasug-outer-container " + this.props.sugState + " " + o}, d.default.createElement("div", {className: "mediasug-inner-container"}, d.default.createElement("div", {className: "ms-pointer"}), d.default.createElement("div", {
                    className: "ms-title",
                    "aria-hidden": i
                }, "相关推荐"), d.default.createElement("div", {
                    className: "ms-list" + (this.state.scrolling ? "" : " no-scrolling"),
                    id: "mediasug-list",
                    ref: function (t) {
                        e.listDom = t
                    }
                }, d.default.createElement("div", {
                    className: "ms-list-scroller",
                    id: "mediasug-list-html",
                    style: {width: a}
                }, n.map(function (t, n) {
                    return d.default.createElement(w.default, {
                        item: t,
                        key: n,
                        index: n,
                        followAction: e.followActionHandler.bind(e, n),
                        articleType: e.props.articleType,
                        profileId: e.props.profileId,
                        useServerV: e.props.useServerV,
                        setting: e.props.setting,
                        statistic: e.props.statistic,
                        deleteItem: e.deleteItem.bind(e)
                    })
                }), r ? d.default.createElement(k.default, s({}, r, {statistic: this.props.statistic})) : null))))
            }
        }]), t
    }(d.default.Component);
    t.default = S
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), l = n(0), u = r(l), d = n(1), f = n(2), p = r(f), _ = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.followSource = {
                pgc_sug: 34,
                pgc_sug_supplement: 133,
                wenda_sug: 71,
                wenda_sug_supplement: 138
            }, n.state = {followDisabled: !1}, n
        }

        return i(t, e), c(t, [{
            key: "handleFollowAction", value: function (e) {
                e.stopPropagation(), this.state.followDisabled || this.props.followAction(this.props.item, this.followActionCallback.bind(this))
            }
        }, {
            key: "followActionCallback", value: function (e) {
                var t = this.props, n = t.item, r = t.profileId, a = n.is_following;
                "pgc" === this.props.articleType && "object" === (void 0 === e ? "undefined" : s(e)) && 1 === e.code && d.statistics.sendUmengEvent("detail", a ? "sub_rec_unsubscribe" : "sub_rec_subscribe", {
                    value: n.user_id,
                    extra: {source: "article_detail", profile_user_id: r}
                })
            }
        }, {
            key: "cardClickAction", value: function (e) {
                if ("ms-subs" !== e.target.className) {
                    var t = this.props, n = t.item, r = t.statistic, a = t.articleType, o = t.profileId,
                        i = n.is_following;
                    d.statistics.sendUmengEventV3("follow_card", {
                        action_type: "click_avatar",
                        category_name: r.category_name,
                        is_direct: 0,
                        is_follow: i,
                        source: n.is_supplement ? "detail_follow_card_related" : "detail_follow_card",
                        to_user_id: n.user_id,
                        order: this.props.index,
                        server_extra: n.server_extra
                    }), window.location.href = "sslocal://profile?uid=" + n.user_id + ("wenda" === a ? "&refer=wenda" : "") + "&group_id=" + r.group_id + "&from_page=" + r.from_page + "&profile_user_id=" + o + (r.category_name ? "&category_name=" + r.category_name : "")
                }
            }
        }, {
            key: "dislikeItem", value: function (e) {
                e.stopPropagation();
                var t = this.props, n = t.item, r = t.statistic, a = n.is_following;
                p.default.invoke("fetch", {
                    url: "https://api.snssdk.com/user/relation/user_recommend/v1/dislike_user/",
                    method: "POST",
                    data: {dislike_user_id: n.user_id},
                    needCommonParams: !0
                }, function (e) {
                    if (e.code && e.response) {
                        try {
                            JSON.parse(e.response)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }), d.statistics.sendUmengEventV3("follow_card", {
                    action_type: "delete",
                    category_name: r.category_name,
                    is_direct: 0,
                    is_follow: a,
                    source: n.is_supplement ? "detail_follow_card_related" : "detail_follow_card",
                    to_user_id: n.userId,
                    order: this.props.index,
                    server_extra: n.server_extra
                }), this.props.deleteItem(this.props.index)
            }
        }, {
            key: "renderVIcon", value: function () {
                var e = this.props, t = e.item, n = e.useServerV, r = e.setting;
                if (n && t.user_verified && t.user_auth_info && t.user_auth_info.auth_type) {
                    return {__html: (0, d.buildServerVIcon)(t.user_auth_info.auth_type, "avatar_icon", r.user_verify_info_conf)}
                }
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.item, n = e.setting, r = "ms-subs ";
                r += n.tt_follow_button_template && "red" === n.tt_follow_button_template.color_style ? " ms-red-btn " : "", r += t.is_following ? " isfollowing" : "", r += t.followDisabled ? " disabled" : "";
                var a = "ms-item" + (t.is_supplement ? " supplement" : "");
                return u.default.createElement("div", {
                    className: a,
                    onClick: this.cardClickAction.bind(this)
                }, u.default.createElement("div", {className: "ms-item-wrapper"}, u.default.createElement("div", {
                    className: "ms-close",
                    onClick: this.dislikeItem.bind(this)
                }), u.default.createElement("div", {className: "ms-avatar"}, u.default.createElement("div", {className: "ms-avatar-wrap"}, u.default.createElement("img", {
                    className: "ms-avatar-image",
                    src: t.avatar_url,
                    alt: "头像"
                })), u.default.createElement("div", {dangerouslySetInnerHTML: this.renderVIcon()})), t.user_decoration && t.user_decoration.url ? u.default.createElement("div", {
                    className: "avatar-decoration",
                    "aria-hidden": "true",
                    style: {backgroundImage: "url(" + t.user_decoration.url + ")"}
                }) : null, u.default.createElement("div", {
                    className: "avatar-decoration avatar-night-mask",
                    "aria-hidden": "true"
                }), u.default.createElement("div", {className: "ms-name-wrap"}, u.default.createElement("div", {className: "ms-name"}, t.name)), u.default.createElement("div", {className: "ms-desc"}, t.reason_description), u.default.createElement("button", {
                    className: r,
                    onClick: this.handleFollowAction.bind(this)
                }, u.default.createElement("span", {className: "focus-icon"}, " "))))
            }
        }]), t
    }(u.default.Component);
    t.default = _
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(1), d = n(2), f = (r(d), function (e) {
        function t(e) {
            return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return i(t, e), s(t, [{
            key: "cardClickAction", value: function (e) {
                u.statistics.sendUmengEventV3("followcard_more_button", {
                    action_type: "click",
                    category_name: this.props.statistic.category_name,
                    source: "detail_follow_card",
                    server_extra: this.props.server_extra
                }), window.location.href = this.props.action_schema
            }
        }, {
            key: "render", value: function () {
                return l.default.createElement("div", {
                    className: "ms-more",
                    onClick: this.cardClickAction.bind(this)
                }, l.default.createElement("div", {className: "ms-more-icon"}), l.default.createElement("div", {className: "ms-more-title"}, this.props.action_card_title))
            }
        }]), t
    }(l.default.Component));
    t.default = f
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), l = n(0), u = a(l), d = n(81), f = a(d), p = n(83), _ = a(p), m = n(12), h = n(85), v = a(h), g = n(87),
        y = a(g), b = n(30), w = a(b), E = n(29), k = r(E), x = n(8), S = a(x), O = n(6), j = r(O), C = n(10), N = a(C),
        P = n(4), T = n(3), A = n(1);
    n(90), n(91);
    var U = n(2), I = a(U), D = n(7), M = a(D), R = function (e) {
        function t(e) {
            o(this, t), console.info("[Article]");
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                carImage: [],
                stockImage: [],
                render: !1
            }, n.setCompVal(), n.wukongImageHtml = n.wukongImageHtml.bind(n), n.checkWindowSize = n.checkWindowSize.bind(n), n.fixNovelArticle = n.fixNovelArticle.bind(n), n.fixArticle = n.fixArticle.bind(n), n.onCarouselImageSwitch = n.onCarouselImageSwitch.bind(n), n
        }

        return s(t, e), c(t, [{
            key: "setCompVal", value: function () {
                this.imageSizeInitTimer = null, this.articleType = j.get("article.type") || "pgc", this.wenda = j.get("wenda_extra") || {}, this.statisticsData = j.get("statistics") || {}
            }
        }, {
            key: "checkWindowSize", value: function () {
                var e = this, t = window.innerWidth - 30, n = window.innerHeight;
                this.statisticsData = j.get("statistics"), t <= 0 || n <= 0 ? this.imageSizeInitTimer = setTimeout(function () {
                    e.checkWindowSize()
                }, 250) : (this.state.carImage && m.ImageProcessor.addCarTipDOM(this.state.carImage), this.state.stockImage && m.ImageProcessor.addStockTipDOM(this.state.stockImage), window.addEventListener("scroll", k.lazyLoad), this.setState({render: !0}, function () {
                    S.default.onceShow()
                }), this.novelData && !this.novelData.can_read || m.ImageProcessor.initImageProcess(k.lazyLoad), (0, f.default)())
            }
        }, {
            key: "fixNovelArticle", value: function () {
                try {
                    if (this.novelData = j.get("novel_data"), !this.novelData || this.novelData.can_read) return void console.info("fixNovelArticle", "can_read");
                    for (var e = document.querySelectorAll("a.image"), t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.parentNode.removeChild(n)
                    }
                    var r = document.querySelector("article").innerHTML;
                    if (console.info("currentHTML", r), !r) return;
                    $("article").html(r.substring(0, 200))
                } catch (e) {
                    console.error(e), M.default.captureException(e)
                }
            }
        }, {
            key: "fixArticle", value: function () {
                var e = this, t = j.get("h5_settings") || {};
                !function () {
                    if (!t.is_liteapp) {
                        var n = e.statisticsData;
                        (0, T.getDomArr)(document, ".tteditor-mention").forEach(function (e) {
                            var t = e.dataset.uid;
                            if (t) {
                                var n = "sslocal://profile?uid=" + t;
                                e.setAttribute("href", n)
                            }
                        }), N.default.on("click", ".tteditor-mention", function (e) {
                            var t = e.target, r = t.dataset.uid;
                            r && A.statistics.sendUmengEventV3("click_article_at", {user_id: r, group_id: n.group_id})
                        });
                        var r = document.querySelectorAll(".tteditor-forum");
                        r = Array.prototype.slice.call(r), r.forEach(function (e) {
                            var t = e.dataset.concernId;
                            if (t) {
                                var n = "sslocal://concern?cid=" + t;
                                e.setAttribute("href", n)
                            }
                        }), N.default.on("click", ".tteditor-forum", function (e) {
                            var t = e.currentTarget, r = t.innerText.replace(/#/g, "");
                            A.statistics.sendUmengEventV3("click_article_hashtag", {hashtag_name: r, gid: n.group_id})
                        }), N.default.on("click", "a.out-link", function (e) {
                            e.preventDefault();
                            var t = e.currentTarget;
                            location.href = "sslocal://webview?nightbackground_disable=1&url=" + encodeURIComponent(t.getAttribute("href")) + "&title=" + encodeURIComponent(t.innerText)
                        }), N.default.on("click", "a.link-at", function (e) {
                            e.preventDefault();
                            var t = e.currentTarget, n = t.dataset.uid;
                            n && (location.href = "sslocal://profile?uid=" + n + "&source=wenda_detail&refer=wenda")
                        }), N.default.on("click", ".toutiaopage", function () {
                            A.statistics.sendUmengEventV3("article_toutiaopage_click", {gid: n.group_id})
                        });
                        (0, T.getDomArr)(document, "a[starhref]").forEach(function (e) {
                            var t = e.getAttribute("starhref"), r = e.dataset.uid;
                            t && (t = t + "&from_page=star_words&group_id=" + n.group_id + "&category_name=" + n.category_name, e.setAttribute("href", t), A.statistics.sendUmengWhenTargetShown(e, "show_star_words", "", {
                                enter_from: n.enter_from,
                                category_name: n.category_name,
                                group_id: n.group_id,
                                to_user_id: r,
                                log_pb: n.log_pb
                            }, 1, {version: 3}))
                        }), N.default.on("click", "a[starhref]", function (e) {
                            var t = e.currentTarget, r = t.dataset.uid;
                            A.statistics.sendUmengEventV3("click_star_words", {
                                enter_from: n.enter_from,
                                category_name: n.category_name,
                                group_id: n.group_id,
                                to_user_id: r,
                                log_pb: n.log_pb
                            })
                        });
                        (0, T.getDomArr)(document, "article a").forEach(function (e) {
                            try {
                                if (-1 === e.className.indexOf("pgc-commodity-link") && -1 === e.className.indexOf("out-link")) {
                                    var t = e.getAttribute("href");
                                    if (t && 0 === t.indexOf("http")) {
                                        var n = "sslocal://webview?url=" + encodeURIComponent(t);
                                        e.setAttribute("data-origin-href", t), e.setAttribute("href", n)
                                    }
                                }
                            } catch (e) {
                                console.error(e)
                            }
                        })
                    }
                }(), function () {
                    var e = /[\u2e80-\u2eff\u3000-\u303f\u3200-\u9fff\uf900-\ufaff\ufe30-\ufe4f]/,
                        t = /[a-z0-9_:\-\/.%]{26,}/gi, n = document.querySelectorAll("article p");
                    n = Array.prototype.slice.call(n), n.forEach(function (n, r) {
                        var a = (0, T.getDomArr)(n, ".image");
                        if (!(n.classList.contains("pgc-img-caption") || !n.textContent || a.length > 0)) if (e.test(n.textContent)) {
                            if (t.test(n.textContent)) {
                                var o = n.textContent.match(t);
                                o.forEach(function (e) {
                                    n.innerHTML = n.innerHTML.replace(e, function (e) {
                                        return '<br class="sysbr">' + e
                                    })
                                })
                            }
                        } else n.style.textAlign = "left"
                    })
                }(), function () {
                    var t = document.querySelectorAll("a.pgc-commodity-link"), n = e.statisticsData;
                    t = Array.prototype.slice.call(t), t.forEach(function (e, t) {
                        var r = e.dataset.productid, a = e.dataset.price, o = e.href, i = "other";
                        o.indexOf("taobao.com") >= 0 || o.indexOf("tmall.com") >= 0 || o.indexOf("tmall.hk") >= 0 ? i = "taobao" : o.indexOf("jd.com") >= 0 || o.indexOf("jd.hk") >= 0 || o.indexOf("360buy.com") >= 0 || o.indexOf("jd360.hk") >= 0 ? i = "jingdong" : (o.indexOf("haohuo.snssdk.com") > -1 || o.indexOf("haohuo.jinritemai.com") > -1) && (i = "fangxingou");
                        var s = {
                            enter_from: n.enter_from,
                            group_id: n.group_id,
                            item_id: n.item_id,
                            category_name: n.category_name,
                            bookshelf_type: i,
                            log_pb: n.log_pb,
                            product_id: r,
                            price: a
                        };
                        A.statistics.sendUmengWhenTargetShown(e, "show_nextgroup_detail", "", s, 1, {version: 3})
                    })
                }()
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this;
                this.fixNovelArticle(), this.checkWindowSize(), this.fixArticle();
                try {
                    window.pgcEvent && window.pgcEvent.broadcast("card-render", document.querySelector("body"))
                } catch (e) {
                    console.error(e)
                }
                setTimeout(function () {
                    document.body.classList.remove("opacity"), I.default.invoke("getDocumentHeight", {height: document.documentElement.offsetHeight})
                }, 0), P.pageEvent.on("pageStateChange", function (t) {
                    "carousel_image_switch" === t.type && ("wenda" == e.articleType && e.wenda && !e.wenda.is_light && e.wenda.ansid == t.id ? e.onCarouselImageSwitch(t.status) : "wenda" != e.articleType && e.statisticsData.group_id == t.id && e.onCarouselImageSwitch(t.status)), "article_fold" === t.type && (t.status ? (document.documentElement.classList.contains("noscroll") || document.documentElement.classList.add("noscroll"), P.pageEvent.broadcast("showArticleFoldWrap", null, !0)) : (document.documentElement.classList.contains("noscroll") && document.documentElement.classList.remove("noscroll"), P.pageEvent.broadcast("showArticleFoldWrap", null, !1)))
                }), P.pageEvent.on("checkContent", function () {
                    return e.fixNovelArticle()
                })
            }
        }, {
            key: "onCarouselImageSwitch", value: function (e) {
                m.ImageProcessor.fetchOneImage(e)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                clearTimeout(this.imageSizeInitTimer), k.empty(), window.removeEventListener("scroll", k.lazyLoad), P.pageEvent.off("pageStateChange"), P.pageEvent.off("checkContent")
            }
        }, {
            key: "wukongImageHtml", value: function () {
                var e = this.wenda, t = e.image_list || [];
                return t.length > 0 && e.is_light ? u.default.createElement(v.default, {imageList: t}) : null
            }
        }, {
            key: "knowMoreHtml", value: function () {
                if (this.props.context && this.props.context.know_more_url) {
                    var e = {context: this.props.context, statisticsData: this.statisticsData};
                    return u.default.createElement(y.default, {data: e})
                }
                return null
            }
        }, {
            key: "categoryGuideHtml", value: function () {
                if (this.props.context && this.props.context.highQualityArticle) {
                    var e = {context: this.props.context, statisticsData: this.statisticsData};
                    return u.default.createElement(w.default, {data: e})
                }
                return null
            }
        }, {
            key: "render", value: function () {
                return this.state.render ? u.default.createElement(l.Fragment, null, u.default.createElement(_.default, null), this.wukongImageHtml(), this.knowMoreHtml()) : null
            }
        }], [{
            key: "getDerivedStateFromProps", value: function (e, t) {
                var n = null, r = null;
                return t.render && e.carImage ? (m.ImageProcessor.addCarTipDOM(e.carImage), n = null) : n = e.carImage, t.render && e.stockImage ? (m.ImageProcessor.addStockTipDOM(e.stockImage), r = null) : r = e.stockImage, {
                    carImage: n,
                    stockImage: r
                }
            }
        }]), t
    }(l.Component);
    t.default = R
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    n(3);
    n(82);
    var r = function (e) {
        var t = e.parentNode, n = document.createElement("div");
        return t.insertBefore(n, e), n.appendChild(e), n
    }, a = function () {
        var e = document.querySelectorAll("table");
        e = Array.prototype.slice.call(e), e.forEach(function (e) {
            e.classList.add("border"), r(e).className = "table-wrap horizontal_scroll_android"
        })
    };
    t.default = a
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, c = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), d = r(u), f = n(5), p = n(6), _ = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(p), m = n(8), h = r(m), v = n(2), g = r(v), y = n(1), b = n(3), w = n(15), E = r(w), k = n(10), x = r(k);
    n(84);
    var S = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {showImage: !0}, n.imgError = n.imgError.bind(n), n
        }

        return i(t, e), l(t, [{
            key: "imgError", value: function () {
                this.setState({showImage: !1})
            }
        }, {
            key: "render", value: function () {
                var e = this.props.data || {}, t = e.duration, n = e.dataset, r = e.index;
                return d.default.createElement(u.Fragment, null, this.state.showImage ? d.default.createElement("img", {
                    "data-index": r,
                    onLoad: e.imgLoad,
                    onError: this.imgError,
                    style: e.style,
                    src: n.poster,
                    alt: ""
                }) : null, d.default.createElement("i", {className: "custom-video-trigger"}), t ? d.default.createElement("i", {className: "custom-video-duration"}, t) : null)
            }
        }]), t
    }(u.Component), O = function (e) {
        var t = e.data, n = t.dataset;
        return d.default.createElement("a", {
            onClick: t.enterLink,
            href: n.openUrl,
            className: "cv-wd-info-wrapper"
        }, d.default.createElement("span", {className: "cv-wd-info-name " + (Number(n.isVerify) ? "is-verify" : "")}, n.mediaName), d.default.createElement("span", {className: "cv-wd-info-pc"}, n.playCount, "次播放"))
    }, j = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {videoPropsArr: []}, n.setCompVal(), n.enterLink = n.enterLink.bind(n), n.imgLoad = n.imgLoad.bind(n), n.playCallback = n.playCallback.bind(n), n.playVideo = n.playVideo.bind(n), n.renderHtml = n.renderHtml.bind(n), n
        }

        return i(t, e), l(t, [{
            key: "setCompVal", value: function () {
                function e(e) {
                    var t = a.gd_ext_json || {}, n = {
                        value: a.ansid,
                        extra: c({
                            position: "detail",
                            video_id: e.vid,
                            enter_from: a.enter_from || "",
                            value: a.ansid,
                            ansid: a.ansid,
                            qid: a.qid,
                            parent_enterfrom: a.parent_enterfrom || ""
                        }, t)
                    };
                    return delete n.extra.log_pb, n.extra = (0, E.default)({}, n.extra, t.log_pb), n
                }

                function t(e, t, n) {
                    var r = e.clientWidth;
                    e.style.height = r * t + "px"
                }

                function n(t, n, r) {
                    if (n.wendaSource && "object" === (void 0 === a ? "undefined" : s(a))) {
                        t.duration = y.fmt.formatDuration(n.duration), t.pgc = "pgc" === n.wendaSource;
                        var o = a.gd_ext_json || {}, i = e(n);
                        h.default.add("show", {
                            domSelector: "#video" + r,
                            tag: "video_show",
                            label: "click_" + o.category_name,
                            params: i,
                            isTotallyShown: !0
                        })
                    }
                    return t
                }

                var r = (0, b.getDomArr)(document, ".custom-video");
                if (this.videoPropsArr = [], !(r.length < 1)) {
                    this._wd = _.get("wenda_extra", {}), this.statisticsData = _.get("statistics", {});
                    var a = this._wd;
                    this.videoPropsArr = r.map(function (e, r) {
                        var a = {}, o = e.dataset || {}, i = o.width, s = o.height, c = i && s ? s / i : 0, l = .75;
                        return a.videoWrap = e, a.dataset = o, i && s && (c <= .75 ? l = c : a.style = {
                            height: "100%",
                            width: "auto"
                        }), t(e, l, r), a = n(a, o, r)
                    })
                }
            }
        }, {
            key: "componentDidMount", value: function () {
                x.default.on("click", ".custom-video", this.playVideo)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                window.appCloseVideoNoticeWeb()
            }
        }, {
            key: "playVideo", value: function (e) {
                var t = e.currentTarget;
                if (!t) return null;
                var n = t.getBoundingClientRect() || {}, r = void 0, a = t.dataset || {}, o = a.vid,
                    i = this.playCallback;
                r = [n.left, t.offsetTop, 640, 435];
                var s = {sp: a.sp, vid: o, frame: r, status: 0}, c = a.videoSize;
                if (c) try {
                    var l = JSON.parse(c);
                    l && l.normal && l.normal.h && l.normal.w && (r[2] = l.normal.w, r[3] = l.normal.h, s.frame = r)
                } catch (e) {
                }
                g.default.invoke("playNativeVideo", s, i)
            }
        }, {
            key: "playCallback", value: function (e) {
                var t = this;
                this.videoPropsArr.forEach(function (n) {
                    var r = n.videoWrap, a = t._wd;
                    if (r.style.display = "block", n._nes && (n._nes.style.display = "block"), 1 === e.code) {
                        var o = document.querySelector('[data-vid="' + e.vid + '"]');
                        if (o) {
                            var i = o.nextElementSibling;
                            if (i) {
                                var s = i.firstChild;
                                s && (0, b.nz_closest)(s, ".cv-wd-info-wrapper", !0) && (i.style.display = "none", n._nes = i)
                            }
                            o.style.display = "none", a && a.wd_version && (e.height += 15), a && 1 == a.use_native_header || (document.body.style.marginTop = e.height + "px")
                        }
                    }
                })
            }
        }, {
            key: "enterLink", value: function (e) {
                g.default.invoke("pauseVideo");
                var t = void 0, n = void 0;
                try {
                    t = e.currentTarget.parentNode.previousSibling, n = t.dataset
                } catch (e) {
                    console.error(e)
                }
                if (t && void 0 !== n.vid) {
                    var r = this._wd;
                    y.statistics.sendUmengEvent("answer_detail", "click_video_detail", {
                        value: r.ansid,
                        extra: {
                            video_id: t.dataset.vid,
                            enter_from: r.enter_from || "",
                            ansid: r.ansid,
                            qid: r.qid,
                            parent_enterfrom: r.parent_enterfrom || ""
                        }
                    })
                }
            }
        }, {
            key: "imgLoad", value: function (e) {
                var t = e.target, n = t.parentNode, r = n.dataset;
                n.style.background = "black";
                var a = 0, o = t.clientWidth, i = t.clientHeight, s = i / o, c = "", l = t.naturalWidth,
                    u = t.naturalHeight;
                l && u && (a = u / l, c = a < s ? "width: 100%; height: auto;" : "height: 100%; width: auto", t.setAttribute("style", c), r.width || r.height || n.setAttribute("data-video-size", JSON.stringify({
                    normal: {
                        h: u,
                        w: l
                    }
                })))
            }
        }, {
            key: "renderHtml", value: function () {
                var e = this, t = this.videoPropsArr;
                return t.length < 1 ? null : t.map(function (t, n) {
                    var r = {
                        imgLoad: e.imgLoad,
                        enterLink: e.enterLink,
                        dataset: t.dataset,
                        duration: t.duration,
                        style: t.style,
                        index: n
                    }, a = t.videoWrap, o = t.pgc, i = void 0;
                    return o && (i = document.createElement("div"), (0, b.insertAfter)(i, a)), d.default.createElement(u.Fragment, {key: "video" + n}, (0, f.createPortal)(d.default.createElement(S, {data: r}), a), o ? (0, f.createPortal)(d.default.createElement(O, {data: r}), i) : null)
                })
            }
        }, {
            key: "render", value: function () {
                return this.renderHtml()
            }
        }]), t
    }(u.Component);
    t.default = j
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s), l = n(5), u = n(3);
    n(86);
    var d = function (e) {
        function t() {
            return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return o(t, e), i(t, [{
            key: "enlargeImg", value: function (e, t) {
                console.info("enlargeImg", t, e);
                var n = this.props.imageList, r = t.target, a = n[e],
                    o = "https://p1.pstatp.com/list/400x400/" + a.web_uri,
                    i = /^https:\/\/p1.pstatp.com\/list\/400x400\//;
                if (o) {
                    var s = (0, u.offset)(r), c = r.getBoundingClientRect();
                    i.test(o) && o.replace(i, "https://p1.pstatp.com/large"), location.href = "bytedance://large_image?index=" + e + "&url=" + o + "&left=" + s.left + "&top=" + s.top + "&width=" + Math.round(c.width) + "&height=" + Math.round(c.height)
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.imageList, n = t.length, r = "";
                return r = 1 === n ? " col-1" : 2 === n || 4 === n ? " col-2" : " col-3", c.default.createElement("div", {className: "pic-cell-wenda col-3 " + r}, t.map(function (t, r) {
                    return c.default.createElement("div", {
                        className: "pic-cell-pic",
                        key: "image" + r,
                        onClick: e.enlargeImg.bind(e, r)
                    }, c.default.createElement("div", {className: "pic-cell-pic-inner"}, c.default.createElement("div", {className: "pic-cell-pic-c"}, 1 === n ? c.default.createElement("img", {
                        "data-index": r,
                        src: "https://p1.pstatp.com/large/" + t.web_uri
                    }) : c.default.createElement("img", {
                        "data-index": r,
                        width: "400",
                        height: "400",
                        src: "https://p1.pstatp.com/list/400x400/" + t.web_uri
                    }))))
                }))
            }
        }]), t
    }(s.Component), f = function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {videoPropsArr: []}, console.info("[component/WuKongImage]"), n.setCompVal(), n
        }

        return o(t, e), i(t, [{
            key: "setCompVal", value: function () {
                var e = document.querySelector("article");
                this.wrapDOM = document.createElement("div"), e.appendChild(this.wrapDOM), this.wrapDOM.classList.add("has-wenda-pic-cell")
            }
        }, {
            key: "render", value: function () {
                return (0, l.createPortal)(c.default.createElement(d, {imageList: this.props.imageList}), this.wrapDOM)
            }
        }]), t
    }(s.Component);
    t.default = f
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s), l = n(5), u = n(1), d = n(6), f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(d);
    n(88);
    var p = function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.wrapDOM = null, n.readMore = n.readMore.bind(n), n.setCompVal(), n
        }

        return o(t, e), i(t, [{
            key: "setCompVal", value: function () {
                var e = document.querySelector("article");
                e && (this.wrapDOM = document.createElement("p"), e.appendChild(this.wrapDOM))
            }
        }, {
            key: "readMore", value: function () {
                var e = this.props.data, t = e.statisticsData, n = +f.get("author").mediaId;
                u.statistics.sendUmengEvent("detail", "click_landingpage", {
                    value: n,
                    extra: {item_id: +t.item_id}
                }), u.statistics.sendUmengEventV3("detail_click_landingpage", {
                    enter_from: "click_landingpage",
                    media_id: n,
                    item_id: +t.item_id
                })
            }
        }, {
            key: "render", value: function () {
                var e = this.props.data, t = e.context,
                    n = "sslocal://webview?url=" + encodeURIComponent(t.know_more_url);
                return this.wrapDOM ? (0, l.createPortal)(c.default.createElement("a", {
                    id: "know-more-url",
                    onClick: this.readMore,
                    href: n
                }, "了解更多", c.default.createElement("i", {className: "icon-link"})), this.wrapDOM) : null
            }
        }]), t
    }(s.Component);
    t.default = p
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), l = n(0), u = r(l);
    n(93);
    var d = n(94), f = r(d), p = n(96), _ = r(p), m = n(98), h = r(m), v = n(100), g = r(v), y = n(102), b = r(y),
        w = n(30), E = r(w), k = n(26), x = r(k), S = n(8), O = r(S), j = n(6), C = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(j), N = n(1), P = n(7), T = r(P), A = (0, x.default)(E.default), U = (0, x.default)(g.default),
        I = (0, x.default)(b.default), D = function (e) {
            function t(e) {
                a(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {data: {}}, console.info("[component/Footer]"), n._addShowEvt = n._addShowEvt.bind(n), n._getCards = n._getCards.bind(n), n._getBeforeFooterDom = n._getBeforeFooterDom.bind(n), n._getAfterFooterDom = n._getAfterFooterDom.bind(n), n.statisticsData = C.get("statistics") || {}, n.canBroadcastCardsEvent = !0, n
            }

            return i(t, e), c(t, [{
                key: "_addShowEvt", value: function (e) {
                    O.default.add("show", e)
                }
            }, {
                key: "_getCards", value: function (e) {
                    var t = e.context || {}, n = t.cards || [], r = n.length;
                    if (this.canBroadcastCardsEvent) {
                        try {
                            window.cardEvent && window.cardEvent.broadcast("cards", document.querySelector(".footer-cards-container"), t)
                        } catch (e) {
                            T.default.captureException(e)
                        }
                        this.canBroadcastCardsEvent = !1
                    }
                    var a = {score: _.default};
                    return r > 0 ? n.map(function (t, n) {
                        var r = a[t.type];
                        if (r) {
                            var o = (0, x.default)(r);
                            return u.default.createElement(o, {key: r + "-comp" + n, card: t, data: e})
                        }
                        return null
                    }) : null
                }
            }, {
                key: "_getBeforeFooterDom", value: function (e) {
                    if (e.context) {
                        var t = {
                                likeAndRewards: e.context.like_and_rewards || {},
                                statisticsData: e.statisticsData,
                                setting: e.setting,
                                userData: C.get("author") || {}
                            }, n = {context: e.context, statisticsData: this.statisticsData, setting: e.setting}, r = {
                                context: e.context,
                                statisticsData: this.statisticsData,
                                setting: e.setting,
                                userData: C.get("author") || {}
                            }, a = e.context.new_infor_action,
                            o = 6 == a && N.client.isAndroid && t.likeAndRewards.rewards_open_url;
                        return u.default.createElement(l.Fragment, null, 5 != a && 6 != a || !e.context.highQualityArticle ? null : u.default.createElement(A, {data: n}), 5 == a || 6 == a || 2 == a ? u.default.createElement(U, {data: r}) : null, a && 2 != a || !e.context.highQualityArticle ? null : u.default.createElement(A, {data: n}), o ? u.default.createElement(I, {data: t}) : null)
                    }
                    return null
                }
            }, {
                key: "_getAfterFooterDom", value: function (e) {
                    var t = void 0;
                    try {
                        t = e.context.labels.labels_words.length
                    } catch (e) {
                        return null
                    }
                    return t < 1 ? null : u.default.createElement(f.default, {data: e})
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.data || {},
                        t = s({}, e, {addShowEvt: this._addShowEvt, statisticsData: this.statisticsData});
                    return u.default.createElement(l.Fragment, null, e.context ? this._getBeforeFooterDom(t) : null, u.default.createElement("div", {className: "footer-cards-container"}, e.context ? this._getCards(t) : null), e.novelData ? u.default.createElement(h.default, e) : null, e.context ? this._getAfterFooterDom(t) : null)
                }
            }]), t
        }(l.Component);
    t.default = D
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s);
    n(95);
    var l = n(1), u = function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {data: {}}, n._setCompVal(e), n._renderHtml = n._renderHtml.bind(n), n._getSearchTag = n._getSearchTag.bind(n), n._clickSearchTag = n._clickSearchTag.bind(n), n
        }

        return o(t, e), i(t, [{
            key: "_setCompVal", value: function (e) {
                var t = e.data, n = t.context, r = t.setting, a = t.statisticsData, o = t.addShowEvt;
                r = r || {};
                var i = n && n.labels || {}, s = i.labels_words;
                this.query = i.query_word, this.search_id = i.search_id, this.query_id = i.query_id;
                var c = r.search_card_style || {}, l = c.uiStyle, u = c.title;
                this.uiStyle = l || 1, this.title = u || 1, this.statisticsData = a, this.addShowEvt = o, this.labels_words = s || [], this.labels_words = this.labels_words.slice(0, 6)
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this;
                !function () {
                    var t = e.statisticsData, n = e.labels_words, r = e.addShowEvt, a = n.length;
                    if (a < 1) return null;
                    var o = 0, i = [];
                    o = a;
                    for (var s = 0; s < o; s++) {
                        var c = n[s].word;
                        i.push(c), r({
                            domSelector: "#search-tag" + s + " .label-content",
                            tag: "search_card",
                            label: "show_search_card_word",
                            isTotallyShown: !0,
                            params: {
                                extra: {
                                    source: "article_tag_wap",
                                    labelsIndex: s + 1,
                                    labelKey: c,
                                    gid: t.group_id,
                                    item_id: t.item_id
                                }
                            }
                        })
                    }
                    var l = {
                        source: "article_tag_wap",
                        gid: t.group_id,
                        item_id: t.item_id,
                        labelsNum: o,
                        labelKey: i.toString()
                    };
                    r({
                        domSelector: "#search-show",
                        tag: "search_card",
                        label: "show_search_card",
                        params: {extra: l},
                        isTotallyShown: !0
                    }), r({
                        domSelector: "#search-tag0",
                        tag: "search_card",
                        label: "show_search_card_untotally_shown",
                        params: {extra: l},
                        isTotallyShown: !0
                    })
                }(), function () {
                    var t = e.statisticsData, n = e.labels_words, r = e.addShowEvt, a = n.length;
                    r({
                        domSelector: "#search-tag0 .label-content",
                        value: "trending_show",
                        isTotallyShown: !0,
                        obj: {
                            words_num: a,
                            trending_position: "article_tag",
                            search_id: e.search_id,
                            query: e.query,
                            query_id: e.query_id,
                            enter_group_id: t.group_id,
                            article_tag_type: "wap"
                        }
                    });
                    for (var o = 0; o < a; o++) {
                        var i = n[o], s = i.word;
                        r({
                            domSelector: "#search-tag" + o + " .label-content",
                            value: "trending_words_show",
                            isTotallyShown: !0,
                            obj: {
                                group_id: i.group_id,
                                words_source: "article_tag",
                                words_position: o,
                                words_type: 0,
                                words_content: s,
                                search_id: e.search_id,
                                query: e.query,
                                query_id: e.query_id,
                                enter_group_id: t.group_id,
                                article_tag_type: "wap"
                            }
                        })
                    }
                }()
            }
        }, {
            key: "_clickSearchTag", value: function (e) {
                e.preventDefault();
                var t = this.statisticsData, n = e.target, r = n.dataset, a = r.href;
                a && (l.statistics.sendUmengEvent("search_card", "click_search_card", {
                    extra: {
                        index: parseInt(r.index) + 1,
                        enter_from: "article_tag_wap",
                        card_type: "search",
                        keyword: r.keyword,
                        gid: t.group_id,
                        item_id: t.item_id
                    }
                }), l.statistics.sendUmengEventV3("trending_words_click", {
                    group_id: r.gid,
                    words_source: "article_tag",
                    words_position: parseInt(r.index),
                    words_type: 0,
                    words_content: r.keyword,
                    search_id: this.search_id,
                    query: this.query,
                    query_id: this.query_id,
                    enter_group_id: t.group_id,
                    article_tag_type: "wap"
                }), location.href = a)
            }
        }, {
            key: "_getSearchTag", value: function (e) {
                return e.map(function (e, t) {
                    return c.default.createElement("a", {
                        key: "search-tag" + t,
                        id: "search-tag" + t,
                        className: "lable ",
                        "data-href": e.link,
                        "data-index": t,
                        "data-gid": e.group_id,
                        "data-keyword": e.word
                    }, c.default.createElement("div", {className: "label-content"}, e.word))
                })
            }
        }, {
            key: "_renderHtml", value: function () {
                var e = this.labels_words, t = this.uiStyle, n = this.title;
                return e.length < 1 ? null : c.default.createElement("div", {
                    id: "search-show",
                    className: "pcard search line2 line-style" + (5 === t ? " largeSearch" : "")
                }, c.default.createElement("div", {className: "title"}, 1 === n ? "相关搜索" : 2 === n ? "大家都在搜" : 3 === n ? "大家还在搜" : "相关搜索"), c.default.createElement("div", {
                    className: "search-tag",
                    onClick: this._clickSearchTag,
                    id: "search-card"
                }, this._getSearchTag(e)))
            }
        }, {
            key: "render", value: function () {
                return this._renderHtml()
            }
        }]), t
    }(s.Component);
    t.default = u
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(17), d = r(u), f = n(15), p = r(f), _ = n(11), m = r(_), h = n(1);
    n(97);
    var v = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                score: 0,
                scoreState: "toScore"
            }, n._setCompVal(e), n._scoreArticle = n._scoreArticle.bind(n), n._unDoScore = n._unDoScore.bind(n), n._renderHtml = n._renderHtml.bind(n), n._sendAjax = n._sendAjax.bind(n), n._sendTrueAjax = n._sendTrueAjax.bind(n), n
        }

        return i(t, e), s(t, [{
            key: "_setCompVal", value: function (e) {
                var t = e.data, n = e.card || {}, r = t.context || {}, a = void 0, o = t.statisticsData || {},
                    i = ["轻触打分", "完全不符合", "比较不符合", "一般", "较符合", "完全符合"];
                try {
                    a = localStorage.getItem("article_detail_score")
                } catch (e) {
                    console.error(e)
                }
                this.scoredArticle = a, this.scoreCardInfoString = n.question, this.starInfo = i, this.showBottomLine = !0, (r && r.labels && r.labels.labels_words || []).length > 0 && (this.showBottomLine = !1), this.domID = "score-card-wrap", this.hasScore = !1, this.gid = o.group_id, this.card = n, this.startTime = null, this.lastTimeOutThx = null, this.lastTimeOutDone = null
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this.props.addShowEvt;
                this.startTime = Date.now(), e && e({
                    domSelector: "#" + this.domID,
                    value: "show_score_card",
                    obj: {question_string: this.scoreCardInfoString, group_id: this.gid, style_type: "star"}
                })
            }
        }, {
            key: "_scoreArticle", value: function (e) {
                var t = this, n = e.target, r = n && n.dataset || {}, a = parseInt(r.index) + 1;
                console.info("_scoreArticle", r.index), a && (clearTimeout(this.lastTimeOutDone), this.setState({
                    scoreState: "scoring",
                    score: a
                }, function () {
                    t.lastTimeOutDone = setTimeout(function () {
                        t._sendAjax(a), t.setState({scoreState: "undo"})
                    }, 1500)
                }))
            }
        }, {
            key: "_sendTrueAjax", value: function (e, t) {
                console.info(arguments);
                var n = this.gid, r = this.scoreCardInfoString, a = this.scoredArticle, o = this.hasScore,
                    i = this.startTime, s = {
                        evaluate_id: JSON.stringify({gid: n, style: "star", string_id: r, interval: Date.now() - i}),
                        survey_type: "point",
                        prefer_id: e
                    };
                if (t && (s = (0, p.default)({}, s, t)), (0, d.default)("https://eva.snssdk.com/eva/survey.json", {param: s}), !o) {
                    a = a ? a + "," + n : n;
                    try {
                        localStorage.setItem("article_detail_score", a)
                    } catch (e) {
                        console.error(e)
                    }
                    this.hasScore = !0
                }
                h.statistics.sendUmengEventV3("click_score_card", {
                    score: e,
                    question_string: r,
                    group_id: n,
                    click_interval: Date.now() - i,
                    style_type: "star"
                })
            }
        }, {
            key: "_sendAjax", value: function (e) {
                h.client.isAndroid && h.client.isNewsArticleVersionNoLessThan("6.2.5") || h.client.isIOS && h.client.isNewsArticleVersionNoLessThan("6.2.6") ? (0, m.default)(this._sendTrueAjax.bind(this, e)) : this._sendTrueAjax(e)
            }
        }, {
            key: "_unDoScore", value: function () {
                this.setState({scoreState: "toScore", score: 0})
            }
        }, {
            key: "_renderHtml", value: function () {
                var e = this.showBottomLine, t = this._scoreArticle, n = this._unDoScore, r = this.domID,
                    a = this.scoredArticle, o = this.gid, i = this.card, s = this.starInfo, c = this.state,
                    u = c.scoreState, d = c.score;
                if (!h.client.isSeniorAndroid) return null;
                if (a) {
                    if (a.split(",").indexOf(o) > -1) return null
                }
                return l.default.createElement("div", {
                    id: r,
                    className: "pcard score-star " + (e ? "" : "mtn30"),
                    style: {marginTop: "15px"}
                }, l.default.createElement("div", {className: "p-scorecard pcard-container " + (e ? "pcard-vertical-border" : "pcard-vertical-top-border") + ("undo" === u ? " moveUp" : "")}, l.default.createElement("div", {className: "pcard-clearfix score-wrapper"}, l.default.createElement("div", {className: "info-wrapper " + ("scoring" === u ? "move" : "")}, l.default.createElement("div", {
                    className: "title question pcard-h16 pcard-w1",
                    style: {marginTop: "3px"}
                }, i.question), l.default.createElement("div", {
                    className: "title thx-letter pcard-h16 pcard-w1",
                    style: {marginTop: "2px"}
                }, s[d])), l.default.createElement("div", {
                    onClick: t,
                    className: "star-wrap"
                }, l.default.createElement("span", {
                    className: "star",
                    "data-index": "0",
                    "data-selected": d > 0 ? "true" : "false"
                }), l.default.createElement("span", {
                    className: "star",
                    "data-index": "1",
                    "data-selected": d > 1 ? "true" : "false"
                }), l.default.createElement("span", {
                    className: "star",
                    "data-index": "2",
                    "data-selected": d > 2 ? "true" : "false"
                }), l.default.createElement("span", {
                    className: "star",
                    "data-index": "3",
                    "data-selected": d > 3 ? "true" : "false"
                }), l.default.createElement("span", {
                    className: "star",
                    "data-index": "4",
                    "data-selected": d > 4 ? "true" : "false"
                }))), l.default.createElement("div", {className: "pcard-clearfix result-wrapper"}, l.default.createElement("div", {className: "pcard-h16 pcard-w1 mt8"}, "感谢你的反馈"), l.default.createElement("a", {
                    onClick: n,
                    className: "rescore-button pcard-h12 pcard-w1"
                }, "重新打分"))))
            }
        }, {
            key: "render", value: function () {
                return this._renderHtml()
            }
        }]), t
    }(c.Component);
    t.default = v
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), l = n(0), u = r(l), d = n(2), f = r(d), p = n(1), _ = n(11), m = r(_);
    n(99);
    var h = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.onGetSeriesLinkPositionTimer = null, n
        }

        return i(t, e), c(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props, t = e.novelData, n = e.statistic;
                t && (1 == t.pay_status && 1 == t.auto_pay_status && 1 == t.book_free_status && $.ajax({
                    url: "https://ic.snssdk.com/novel/trade/purchase/v1/auto_pay/",
                    dataType: "jsonp",
                    data: {book_id: t.book_id, item_id: n.item_id, device_platform: p.client.isIOS ? 1 : 2},
                    error: function (e, t, n) {
                        console.info(e, t, n)
                    },
                    success: function (e, t, n) {
                        console.info("fhru", e)
                    }
                }), 255 == t.pay_status && 1 == t.novel_data.book_free_status && f.default.invoke("toast", {
                    text: "系统异常 请稍后再试",
                    icon_type: "icon_error"
                }), p.client.isAndroid && (this.onGetSeriesLinkPositionTimer = setInterval(function () {
                    if (!document.querySelector(".serial")) return void clearInterval(this.onGetSeriesLinkPositionTimer);
                    var e = document.querySelector(".serial").offsetTop;
                    e > 0 && (clearInterval(this.onGetSeriesLinkPositionTimer), f.default.invoke("onGetSeriesLinkPosition", {value: document.body.scrollHeight - e}))
                }, 500)))
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.onGetSeriesLinkPositionTimer && clearInterval(this.onGetSeriesLinkPositionTimer)
            }
        }, {
            key: "novelSerialClickHandler", value: function (e, t) {
                var n = this.props, r = n.novelData, a = n.statistic, o = void 0, i = void 0, c = void 0, l = void 0,
                    u = a.category_name || "", d = a.group_id || "", _ = a.item_id || "", m = a.log_pb || "",
                    h = a.enter_from || "";
                if (o = r.pre_deep_reader_web_url, i = r.next_deep_reader_web_url, c = r.book_page_url, "object" === (void 0 === m ? "undefined" : s(m))) try {
                    m = encodeURIComponent(JSON.stringify(m))
                } catch (e) {
                    m = ""
                }
                l = "&category_name=" + u + "&group_id=" + d + "&log_pb=" + m + "&rec_enter=" + h + "&detail_item_id=" + _, /^\s*http/.test(o) && (o = "sslocal://novel?url=" + encodeURIComponent(o + l) + "&style_canvas=1&hide_more=1&bounce_disable=1&hide_back_buttonView=1"), /^\s*http/.test(i) && (i = "sslocal://novel?url=" + encodeURIComponent(i + l) + "&style_canvas=1&hide_more=1&bounce_disable=1&hide_back_buttonView=1"), /^\s*http/.test(c) && (c = "sslocal://webview?url=" + encodeURIComponent(c + l) + "&hide_more=1&bounce_disable=1&should_append_common_param=1&hide_bar=1");
                var v = "pre" === e ? "click_pre_group" : "click_next_group";
                "ser" !== e && p.statistics.sendUmengEventV3(v, {
                    novel_id: r.book_id,
                    group_id: a.group_id,
                    item_id: a.item_id,
                    is_novel: "1"
                }), p.statistics.sendUmengEventV3("click_nextgroup_detail", {
                    is_novel: "1",
                    enter_from: a.enter_from,
                    group_id: a.group_id,
                    item_id: a.item_id,
                    bookshelf_type: r.bookshelf_type,
                    novel_id: r.book_id,
                    column_id: "",
                    category_name: a.category_name,
                    log_pb: a.log_pb
                }), "next" === e ? (t.preventDefault(), f.default.invoke("getSubScribedChannelList", {}, function (e) {
                    (e.list || []).slice(0, 6).indexOf("novel_channel") < 1 && (f.default.invoke.call("addChannel", {
                        category: "novel_channel",
                        web_url: "https://ic.snssdk.com/novel_channel/",
                        name: "小说",
                        type: 5,
                        flags: 1
                    }), p.statistics.sendUmengEventV3("read_add_novelchannel", {is_novel: 1})), location.href = i || r.next_group_url
                })) : "pre" === e ? location.href = o || r.pre_group_url : "ser" === e && (location.href = c || r.url)
            }
        }, {
            key: "novelUpdateHandler", value: function () {
                var e = this.props, t = e.novelData, n = e.statistic;
                if (p.client.isAndroid) location.href = "http://app.toutiao.com/news_article/"; else {
                    var r = "";
                    (0, m.default)(function (e) {
                        switch (e.app_name) {
                            case"news_article_social":
                                r = "itms-apps://itunes.apple.com/cn/app/id582528844";
                                break;
                            case"explore_article":
                                r = "itms-apps://itunes.apple.com/cn/app/id672151725";
                                break;
                            default:
                                r = "itms-apps://itunes.apple.com/cn/app/id529092160"
                        }
                        f.default.invoke("openApp", {url: r}, null)
                    })
                }
                p.statistics.sendUmengEventV3("click_version_update", {
                    group_id: n.group_id,
                    item_id: n.item_id,
                    enter_from: "detail",
                    category_name: "novel_channel",
                    novel_id: t.book_id,
                    concern_id: t.concern_id,
                    log_pb: ""
                })
            }
        }, {
            key: "novelBuyHandler", value: function () {
                var e = this.props, t = e.novelData, n = e.statistic;
                p.statistics.sendUmengEventV3("click_purchase_read", {
                    group_id: n.group_id,
                    item_id: n.item_id,
                    enter_from: "purchase_reminder",
                    category_name: "novel_channel",
                    novel_id: t.book_id,
                    concern_id: t.concern_id,
                    log_pb: ""
                }), f.default.invoke("is_login", {}, function (e) {
                    if (e && (e.is_login || 1 == e.code)) {
                        var r = "https://ic.snssdk.com/novel/book/purchase/v1/novel_pay/page/single-chapter?pull_close=1&book_id=" + t.book_id + "&item_id=" + n.item_id + "&group_id=" + n.group_id;
                        r = "sslocal://popup_browser?url=" + encodeURIComponent(r) + "&should_append_common_param=1", p.client.isAndroid ? r += "&back_button_icon=close" : r += "&popup_back_button_icon=close", location.href = r
                    } else f.default.invoke("login", {platform: ""})
                })
            }
        }, {
            key: "renderNovelSerial", value: function () {
                var e = this.props.novelData;
                return e.show_new_keep_reading && e.next_group_url ? u.default.createElement("div", {className: "serial special-serial"}, u.default.createElement("a", {
                    className: "next special-next",
                    onClick: this.novelSerialClickHandler.bind(this, "next")
                }, "点击继续阅读 ", u.default.createElement("i", {className: "iconfont icon-next"}))) : u.default.createElement("div", {className: "serial"}, e.pre_group_url || e.pre_deep_reader_web_url ? u.default.createElement("a", {
                    className: "prev",
                    onClick: this.novelSerialClickHandler.bind(this, "pre")
                }, "上一章") : u.default.createElement("span", {className: "prev disabled"}, "上一章"), e.next_group_url || e.next_deep_reader_web_url ? u.default.createElement("a", {
                    className: "next",
                    onClick: this.novelSerialClickHandler.bind(this, "next")
                }, "下一章") : u.default.createElement("span", {className: "next disabled"}, "下一章"), u.default.createElement("div", {className: "index-wrap"}, u.default.createElement("a", {
                    className: "index",
                    onClick: this.novelSerialClickHandler.bind(this, "ser")
                }, "目录（共", e.serial_count, "章）")))
            }
        }, {
            key: "renderNovelPay", value: function () {
                var e = this.props, t = e.novelData, n = e.statistic;
                return void 0 == t.pay_status ? (p.statistics.sendUmengEventV3("go_version_update", {
                    group_id: n.group_id,
                    item_id: n.item_id,
                    enter_from: "version_update",
                    category_name: "novel_channel",
                    novel_id: t.book_id,
                    concern_id: t.concern_id,
                    type: 0,
                    log_pb: ""
                }), u.default.createElement("div", {className: "pay"}, u.default.createElement("div", {className: "split"}), u.default.createElement("div", {className: "content"}, "当前版本不支持阅读付费章节，请升级到最新版本继续阅读"), u.default.createElement("div", {className: "button"}, u.default.createElement("button", {
                    className: "update",
                    onClick: this.novelUpdateHandler.bind(this)
                })))) : 2 == t.pay_status || -1 == t.pay_status ? (p.statistics.sendUmengEventV3("go_purchase_reminder", {
                    group_id: n.group_id,
                    item_id: n.item_id,
                    enter_from: "version_update",
                    category_name: "novel_channel",
                    novel_id: t.book_id,
                    concern_id: t.concern_id,
                    type: 0,
                    log_pb: ""
                }), u.default.createElement("div", {className: "pay"}, u.default.createElement("div", {className: "split"}), u.default.createElement("div", {className: "button"}, u.default.createElement("button", {
                    className: "buy",
                    onClick: this.novelBuyHandler.bind(this)
                })))) : null
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.novelData;
                e.statistic, e.setting;
                if (t) {
                    return t.can_read ? this.renderNovelSerial() : this.renderNovelPay()
                }
                return null
            }
        }]), t
    }(u.default.Component);
    t.default = h
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(4);
    n(101);
    var d = n(1), f = n(2), p = r(f), _ = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.showDislikePanel = function () {
                p.default.invoke("dislike", {options: 17}, null)
            }, n.showRewards = function () {
                var e = n.props.data || {}, t = e.context, r = e.statisticsData, a = e.userData, o = t.like_and_rewards;
                d.statistics.sendUmengEventV3("rt_reward", {
                    media_id: a.mediaId,
                    item_id: r.item_id,
                    group_id: r.group_id,
                    enter_from: r.enter_from,
                    category_name: r.category_name,
                    log_pb: r.log_pb,
                    position: "detail",
                    is_column: 1
                }), location.href = o.rewards_open_url
            }, n.enterRewardsList = function () {
                var e = n.props.data || {}, t = e.statisticsData, r = e.userData;
                d.statistics.sendUmengEventV3("reward_user_view", {
                    media_id: r.mediaId,
                    item_id: t.item_id,
                    group_id: t.group_id,
                    enter_from: t.enter_from,
                    category_name: t.category_name,
                    log_pb: t.log_pb,
                    is_column: 1
                })
            }, n.renderPlanA = function (e) {
                var t = d.fmt.formatCount(n.state.browCount, "0"), r = d.fmt.formatCount(n.state.diggCount, "0");
                return l.default.createElement("div", {className: "info"}, l.default.createElement("div", {className: "article-info left"}, l.default.createElement("span", {className: "brow-count"}, t, "阅读"), l.default.createElement("span", {className: "digg-count"}, r, "赞")), l.default.createElement("div", {
                    className: "dislike right",
                    onClick: n.showDislikePanel
                }, l.default.createElement("i", {className: "icon-dislike"}), "不喜欢"))
            }, n.renderPlanB = function (e) {
                var t = e.like_and_rewards, r = d.fmt.formatCount(n.state.browCount, "0");
                return l.default.createElement("div", {className: "info planb"}, d.client.isAndroid && t && t.rewards_open_url ? l.default.createElement("span", {
                    className: "rewards",
                    onClick: n.showRewards
                }, l.default.createElement("i", {className: "icon-rewards"}), "赞赏") : null, d.client.isAndroid && t && t.rewards_open_url ? l.default.createElement("span", {className: "split"}) : null, l.default.createElement("span", {
                    className: "dislike",
                    onClick: n.showDislikePanel
                }, l.default.createElement("i", {className: "icon-dislike"}), "不喜欢"), l.default.createElement("div", {className: "article-info right"}, l.default.createElement("span", {className: "brow-count"}, r, "阅读")), d.client.isAndroid && n.state.rewardsNum > 0 ? n.renderRewardList() : null)
            }, n.state = {
                browCount: e.data.context.read_count || 0,
                diggCount: e.data.context.like_and_rewards && e.data.context.like_and_rewards.like_num || 0,
                showCurrentUserInRewardsList: !1,
                rewardsNum: e.data.context && e.data.context.like_and_rewards && e.data.context.like_and_rewards.rewards_num || 0
            }, n
        }

        return i(t, e), s(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props.data || {}, t = e.statisticsData.group_id, n = this;
                u.pageEvent.on("pageStateChange", function (e) {
                    try {
                        "detail_digg" === e.type && e.id == t && "status" in e && (1 == e.status ? n.setState({diggCount: n.state.diggCount + 1}) : n.state.diggCount > 0 && n.setState({diggCount: n.state.diggCount - 1})), "donate_action" == e.type && e.id == t && "status" in e && e.status && p.default.invoke("getCurrentUserAvatar", {}, function (e) {
                            var t = n.state.currentUserAvatarList;
                            e && e.avatar_url && t.push(e.avatar_url), n.setState({
                                showCurrentUserInRewardsList: !0,
                                rewardsNum: this.state.rewardsNum + 1,
                                currentUserAvatarList: t
                            })
                        })
                    } catch (e) {
                        console.error(e)
                    }
                })
            }
        }, {
            key: "renderRewardList", value: function () {
                var e = this.props.data || {}, t = e.context, n = t.like_and_rewards,
                    r = (this.state.rewardsNum > 3 ? "等" : "") + this.state.rewardsNum + "个人赞赏过", a = n.rewards_list,
                    o = a && Array.isArray(a) ? a.length : 0, i = o < 3 ? 3 - o : 0;
                return l.default.createElement("a", {
                    className: "reward-list",
                    href: n.rewards_list_url,
                    onClick: this.enterRewardsList
                }, l.default.createElement("div", {className: "avatar-list"}, a && a.map(function (e, t) {
                    if (t < 3) return l.default.createElement("div", {
                        className: "avater-wrap",
                        key: t
                    }, l.default.createElement("img", {className: "avater", src: e.avatar_url, alt: ""}))
                }), i && this.state.showCurrentUserInRewardsList ? this.state.currentUserAvatarList.map(function (e, t) {
                    if (t < i) return l.default.createElement("div", {
                        className: "avater-wrap",
                        key: "current" + t
                    }, l.default.createElement("img", {className: "avater", src: e, alt: ""}))
                }) : null), l.default.createElement("div", {className: "info"}, r))
            }
        }, {
            key: "render", value: function () {
                var e = this.props.data || {}, t = e.context, n = t.new_infor_action;
                return 5 == n || 6 == n ? this.renderPlanA(t) : this.renderPlanB(t)
            }
        }]), t
    }(c.Component);
    t.default = _
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(2), d = r(u), f = n(1), p = n(4), _ = n(103), m = (r(_), n(17));
    r(m);
    n(105);
    var h = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.showRewards = function (e) {
                var t = n.props.data || {}, r = t.statisticsData, a = t.userData;
                f.statistics.sendUmengEventV3("rt_reward", {
                    media_id: a.mediaId,
                    item_id: r.item_id,
                    group_id: r.group_id,
                    enter_from: r.enter_from,
                    category_name: r.category_name,
                    log_pb: r.log_pb,
                    position: "detail",
                    is_column: 1
                }), location.href = n.props.data.likeAndRewards.rewards_open_url
            }, n.followHandler = function () {
                var e = n.props.data || {}, t = e.userData, r = n.state.followState;
                t.userId
            }, n.profileClickHandler = function () {
                n.props.data
            }, n.enterRewardsList = function () {
                var e = n.props.data || {}, t = e.statisticsData, r = e.userData;
                f.statistics.sendUmengEventV3("reward_user_view", {
                    media_id: r.mediaId,
                    item_id: t.item_id,
                    group_id: t.group_id,
                    enter_from: t.enter_from,
                    category_name: t.category_name,
                    log_pb: t.log_pb,
                    is_column: 1
                })
            }, n.state = {
                showCurrentUserInRewardsList: !1,
                rewardsNum: e.data.likeAndRewards && e.data.likeAndRewards.rewards_num || 0
            }, n
        }

        return i(t, e), s(t, [{
            key: "renderVIcon", value: function () {
                var e = this.props.data || {}, t = e.setting, n = e.userData;
                if (t.useServerV && n.auth_type) {
                    var r = (0, f.buildServerVIcon)(n.auth_type, "avatar_icon", t.user_verify_info_conf);
                    if (r) return l.default.createElement("div", {dangerouslySetInnerHTML: {__html: r}})
                }
                return ""
            }
        }, {
            key: "renderRewardList", value: function (e) {
                var t = e.rewards_list, n = e.rewards_list_url,
                    r = (this.state.rewardsNum > 3 ? "等" : "") + this.state.rewardsNum + "个人赞赏过",
                    a = t && Array.isArray(t) ? t.length : 0, o = a < 3 ? 3 - a : 0;
                return l.default.createElement("a", {
                    className: "reward-list",
                    href: n,
                    onClick: this.enterRewardsList
                }, l.default.createElement("div", {className: "avatar-list"}, t && t.map(function (e, t) {
                    if (t < 3) return l.default.createElement("div", {
                        className: "avater-wrap",
                        key: t
                    }, l.default.createElement("img", {className: "avater", src: e.avatar_url, alt: ""}))
                }), o && this.state.showCurrentUserInRewardsList ? this.state.currentUserAvatarList.map(function (e, t) {
                    if (t < o) return l.default.createElement("div", {
                        className: "avater-wrap",
                        key: "current" + t
                    }, l.default.createElement("img", {className: "avater", src: e, alt: ""}))
                }) : null), l.default.createElement("div", {className: "info"}, r))
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this.props.data || {}, t = e.statisticsData, n = e.userData, r = this;
                f.statistics.sendUmengWhenTargetShown(this.dom, "show_reward", "", {
                    media_id: n.mediaId,
                    item_id: t.item_id,
                    group_id: t.group_id,
                    enter_from: t.enter_from,
                    category_name: t.category_name,
                    log_pb: t.log_pb,
                    is_column: 1
                }, !0, {version: 3}), p.pageEvent.on("pageStateChange", function (e) {
                    "donate_action" == e.type && e.id == t.group_id && "status" in e && e.status && d.default.invoke("getCurrentUserAvatar", {}, function (e) {
                        var t = r.state.currentUserAvatarList;
                        e && e.avatar_url && t.push(e.avatar_url), r.setState({
                            showCurrentUserInRewardsList: !0,
                            rewardsNum: this.state.rewardsNum + 1,
                            currentUserAvatarList: t
                        })
                    })
                })
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.data || {}, n = t.likeAndRewards, r = t.userData;
                return l.default.createElement("div", {
                    className: "article-bottom-user", ref: function (t) {
                        e.dom = t
                    }
                }, l.default.createElement("a", {
                    href: r.link,
                    onClick: this.profileClickHandler
                }, l.default.createElement("div", {className: r.user_decoration && r.user_decoration.url ? "avatar avatar-width-decoration" : "avatar"}, l.default.createElement("div", {className: "avatar-wrap"}, l.default.createElement("img", {
                    className: "avatar-image",
                    src: r.avatar,
                    alt: "头像"
                })), this.renderVIcon()), r.user_decoration && r.user_decoration.url ? l.default.createElement("div", {
                    className: "avatar-decoration",
                    "aria-hidden": "true",
                    style: {backgroundImage: "url(" + r.user_decoration.url + ")"}
                }) : null, l.default.createElement("div", {
                    className: "avatar-decoration avatar-night-mask",
                    "aria-hidden": "true"
                }), l.default.createElement("div", {className: "name-wrap"}, l.default.createElement("div", {className: "name"}, r.name)), r.intro ? l.default.createElement("div", {className: "desc"}, r.intro) : null), l.default.createElement("div", {className: "buttons"}, f.client.isAndroid && n && n.rewards_open_url ? l.default.createElement("button", {
                    className: "reward",
                    onClick: this.showRewards
                }, "赞赏") : null), f.client.isAndroid && this.state.rewardsNum > 0 ? this.renderRewardList(n) : null)
            }
        }]), t
    }(l.default.Component);
    t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(4), d = n(2), f = r(d);
    n(104);
    var p = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.followActionHandler = function () {
                n.setState({updateFollowStateFromUserAction: !0, followDisabled: !0});
                var e = n.props.userInfo, t = n.state.followState,
                    r = {id: e.userId, action: t ? "unfollow" : "dofollow", source: "30", from: "article_detail"},
                    a = n;
                f.default.invoke("user_follow_action", r, function (e) {
                    a.followDisabled = !1, e && 1 == +e.code ? a.setState({
                        followState: t ? "" : "following",
                        followDisabled: !1
                    }) : a.setState({followState: t ? "following" : "", followDisabled: !1})
                }), n.props.clickActionHandler()
            }, n.followDisabled = !1, n.followSource = {pgc: 30, wenda: 28}, n.followFrom = {
                pgc: "article_detail",
                wenda: "answer_detail_top_card"
            }, n.state = {
                followState: e.userInfo && e.userInfo.followState,
                followDisabled: !1,
                updateFollowStateFromUserAction: !1
            }, n
        }

        return i(t, e), s(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props.userInfo, t = this;
                u.pageEvent.on("pageStateChange", function (n) {
                    switch (n.type) {
                        case"user_action":
                        case"pgc_action":
                            n.id == e.userId && "status" in n && (t.setState({
                                followState: n.status ? "following" : "",
                                followDisabled: !1,
                                updateFollowStateFromUserAction: !0
                            }), t.followDisabled = !1)
                    }
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                u.pageEvent.off("pageStateChange")
            }
        }, {
            key: "render", value: function () {
                var e = this.props.setting,
                    t = "subscribe-button follow-button" + (e.isRedFocusButton ? " red-follow-button " : "") + this.state.followState + (this.state.followDisabled ? " disabled" : "");
                return l.default.createElement("button", {
                    className: t,
                    id: "subscribe",
                    onClick: this.followActionHandler
                }, l.default.createElement("i", {className: "iconfont focusicon"}, " "))
            }
        }], [{
            key: "getDerivedStateFromProps", value: function (e, t) {
                return t.updateFollowStateFromUserAction ? {followState: t.followState} : {followState: e.userInfo.followState}
            }
        }]), t
    }(l.default.Component);
    t.default = p
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = (r(c), n(5)), u = r(l), d = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            if (n.ele = document.createElement(e.tag || "div"), "footer" === e.tag && (e.parentDom ? e.parentDom.parentNode != document.body && document.body.appendChild(e.parentDom) : (n.parentDom = document.createElement("footer"), document.body.appendChild(n.parentDom))), "header" === e.tag) if (e.parentDom) {
                if (e.parentDom.parentNode != document.body) {
                    var r = document.body.children[0];
                    document.body.insertBefore(e.parentDom, r)
                }
            } else {
                n.parentDom = document.createElement("header");
                var i = document.body.children[0];
                document.body.insertBefore(n.parentDom, i)
            }
            return n.parentDom = n.parentDom || e.parentDom || document.body, n
        }

        return i(t, e), s(t, [{
            key: "componentDidMount", value: function () {
                this.props.replaceFlag ? this.parentDom.parentNode.replaceChild(this.ele, this.parentDom) : this.parentDom.appendChild(this.ele)
            }
        }, {
            key: "componentWillUnmount", value: function () {
            }
        }, {
            key: "render", value: function () {
                return u.default.createPortal(this.props.children, this.ele)
            }
        }]), t
    }(c.Component);
    t.default = d
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a() {
        window.pgcEvent = o.pgcEvent, window.cardEvent = o.cardEvent, window._ = {}, window._.escape = i.escape, window.needCleanDoms = [], window.send_umeng_event = i.statistics.sendUmengEvent, window.sendUmengEventV3 = i.statistics.sendUmengEventV3, window.sendUmengWhenTargetShown = i.statistics.sendUmengWhenTargetShown, window.client = i.client, window.ToutiaoJSBridge.call = u.default.invoke, window.ToutiaoJSBridge.on = u.default.on, window.getCommonParams = c.default, window.Raven = f.default, n(109), window.$ = $, n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(4), i = n(1), s = n(11), c = r(s), l = n(2), u = r(l), d = n(7), f = r(d);
    n(108), t.default = a
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    var r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (a, o) {
        void 0 !== (r = function () {
            return o(a)
        }.call(t, n, t, e)) && (e.exports = r)
    }(window, function (e) {
        var t = function () {
            function t(e) {
                return null == e ? String(e) : K[X.call(e)] || "object"
            }

            function n(e) {
                return "function" == t(e)
            }

            function r(e) {
                return null != e && e == e.window
            }

            function o(e) {
                return null != e && e.nodeType == e.DOCUMENT_NODE
            }

            function i(e) {
                return "object" == t(e)
            }

            function s(e) {
                return i(e) && !r(e) && Object.getPrototypeOf(e) == Object.prototype
            }

            function c(e) {
                var t = !!e && "length" in e && e.length, n = O.type(e);
                return "function" != n && !r(e) && ("array" == n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function l(e) {
                return A.call(e, function (e) {
                    return null != e
                })
            }

            function u(e) {
                return e.length > 0 ? O.fn.concat.apply([], e) : e
            }

            function d(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function f(e) {
                return e in M ? M[e] : M[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
            }

            function p(e, t) {
                return "number" != typeof t || R[d(e)] ? t : t + "px"
            }

            function _(e) {
                var t, n;
                return D[e] || (t = I.createElement(e), I.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), D[e] = n), D[e]
            }

            function m(e) {
                return "children" in e ? U.call(e.children) : O.map(e.childNodes, function (e) {
                    if (1 == e.nodeType) return e
                })
            }

            function h(e, t) {
                var n, r = e ? e.length : 0;
                for (n = 0; n < r; n++) this[n] = e[n];
                this.length = r, this.selector = t || ""
            }

            function v(e, t, n) {
                for (S in t) n && (s(t[S]) || te(t[S])) ? (s(t[S]) && !s(e[S]) && (e[S] = {}), te(t[S]) && !te(e[S]) && (e[S] = []), v(e[S], t[S], n)) : t[S] !== x && (e[S] = t[S])
            }

            function g(e, t) {
                return null == t ? O(e) : O(e).filter(t)
            }

            function y(e, t, r, a) {
                return n(t) ? t.call(e, r, a) : t
            }

            function b(e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
            }

            function w(e, t) {
                var n = e.className || "", r = n && n.baseVal !== x;
                if (t === x) return r ? n.baseVal : n;
                r ? n.baseVal = t : e.className = t
            }

            function E(e) {
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? O.parseJSON(e) : e) : e
                } catch (t) {
                    return e
                }
            }

            function k(e, t) {
                t(e);
                for (var n = 0, r = e.childNodes.length; n < r; n++) k(e.childNodes[n], t)
            }

            var x, S, O, j, C, N, P = [], T = P.concat, A = P.filter, U = P.slice, I = e.document, D = {}, M = {}, R = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, L = /^\s*<(\w+|!)[^>]*>/, F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                V = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, B = /^(?:body|html)$/i,
                W = /([A-Z])/g, H = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                q = ["after", "prepend", "before", "append"], J = I.createElement("table"), z = I.createElement("tr"),
                $ = {
                    tr: I.createElement("tbody"),
                    tbody: J,
                    thead: J,
                    tfoot: J,
                    td: z,
                    th: z,
                    "*": I.createElement("div")
                }, Q = /complete|loaded|interactive/, G = /^[\w-]*$/, K = {}, X = K.toString, Y = {},
                Z = I.createElement("div"), ee = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, te = Array.isArray || function (e) {
                    return e instanceof Array
                };
            return Y.matches = function (e, t) {
                if (!t || !e || 1 !== e.nodeType) return !1;
                var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                if (n) return n.call(e, t);
                var r, a = e.parentNode, o = !a;
                return o && (a = Z).appendChild(e), r = ~Y.qsa(a, t).indexOf(e), o && Z.removeChild(e), r
            }, C = function (e) {
                return e.replace(/-+(.)?/g, function (e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }, N = function (e) {
                return A.call(e, function (t, n) {
                    return e.indexOf(t) == n
                })
            }, Y.fragment = function (e, t, n) {
                var r, a, o;
                return F.test(e) && (r = O(I.createElement(RegExp.$1))), r || (e.replace && (e = e.replace(V, "<$1></$2>")), t === x && (t = L.test(e) && RegExp.$1), t in $ || (t = "*"), o = $[t], o.innerHTML = "" + e, r = O.each(U.call(o.childNodes), function () {
                    o.removeChild(this)
                })), s(n) && (a = O(r), O.each(n, function (e, t) {
                    H.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
                })), r
            }, Y.Z = function (e, t) {
                return new h(e, t)
            }, Y.isZ = function (e) {
                return e instanceof Y.Z
            }, Y.init = function (e, t) {
                var r;
                if (!e) return Y.Z();
                if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && L.test(e)) r = Y.fragment(e, RegExp.$1, t), e = null; else {
                    if (t !== x) return O(t).find(e);
                    r = Y.qsa(I, e)
                } else {
                    if (n(e)) return O(I).ready(e);
                    if (Y.isZ(e)) return e;
                    if (te(e)) r = l(e); else if (i(e)) r = [e], e = null; else if (L.test(e)) r = Y.fragment(e.trim(), RegExp.$1, t), e = null; else {
                        if (t !== x) return O(t).find(e);
                        r = Y.qsa(I, e)
                    }
                }
                return Y.Z(r, e)
            }, O = function (e, t) {
                return Y.init(e, t)
            }, O.extend = function (e) {
                var t, n = U.call(arguments, 1);
                return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function (n) {
                    v(e, n, t)
                }), e
            }, Y.qsa = function (e, t) {
                var n, r = "#" == t[0], a = !r && "." == t[0], o = r || a ? t.slice(1) : t, i = G.test(o);
                return e.getElementById && i && r ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : U.call(i && !r && e.getElementsByClassName ? a ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
            }, O.contains = I.documentElement.contains ? function (e, t) {
                return e !== t && e.contains(t)
            } : function (e, t) {
                for (; t && (t = t.parentNode);) if (t === e) return !0;
                return !1
            }, O.type = t, O.isFunction = n, O.isWindow = r, O.isArray = te, O.isPlainObject = s, O.isEmptyObject = function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, O.isNumeric = function (e) {
                var t = Number(e), n = void 0 === e ? "undefined" : a(e);
                return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
            }, O.inArray = function (e, t, n) {
                return P.indexOf.call(t, e, n)
            }, O.camelCase = C, O.trim = function (e) {
                return null == e ? "" : String.prototype.trim.call(e)
            }, O.uuid = 0, O.support = {}, O.expr = {}, O.noop = function () {
            }, O.map = function (e, t) {
                var n, r, a, o = [];
                if (c(e)) for (r = 0; r < e.length; r++) null != (n = t(e[r], r)) && o.push(n); else for (a in e) null != (n = t(e[a], a)) && o.push(n);
                return u(o)
            }, O.each = function (e, t) {
                var n, r;
                if (c(e)) {
                    for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) return e;
                return e
            }, O.grep = function (e, t) {
                return A.call(e, t)
            }, e.JSON && (O.parseJSON = JSON.parse), O.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                K["[object " + t + "]"] = t.toLowerCase()
            }), O.fn = {
                constructor: Y.Z,
                length: 0,
                forEach: P.forEach,
                reduce: P.reduce,
                push: P.push,
                sort: P.sort,
                splice: P.splice,
                indexOf: P.indexOf,
                concat: function () {
                    var e, t, n = [];
                    for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = Y.isZ(t) ? t.toArray() : t;
                    return T.apply(Y.isZ(this) ? this.toArray() : this, n)
                },
                map: function (e) {
                    return O(O.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return O(U.apply(this, arguments))
                },
                ready: function (e) {
                    return Q.test(I.readyState) && I.body ? e(O) : I.addEventListener("DOMContentLoaded", function () {
                        e(O)
                    }, !1), this
                },
                get: function (e) {
                    return e === x ? U.call(this) : this[e >= 0 ? e : e + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (e) {
                    return P.every.call(this, function (t, n) {
                        return !1 !== e.call(t, n, t)
                    }), this
                },
                filter: function (e) {
                    return n(e) ? this.not(this.not(e)) : O(A.call(this, function (t) {
                        return Y.matches(t, e)
                    }))
                },
                add: function (e, t) {
                    return O(N(this.concat(O(e, t))))
                },
                is: function (e) {
                    return this.length > 0 && Y.matches(this[0], e)
                },
                not: function (e) {
                    var t = [];
                    if (n(e) && e.call !== x) this.each(function (n) {
                        e.call(this, n) || t.push(this)
                    }); else {
                        var r = "string" == typeof e ? this.filter(e) : c(e) && n(e.item) ? U.call(e) : O(e);
                        this.forEach(function (e) {
                            r.indexOf(e) < 0 && t.push(e)
                        })
                    }
                    return O(t)
                },
                has: function (e) {
                    return this.filter(function () {
                        return i(e) ? O.contains(this, e) : O(this).find(e).size()
                    })
                },
                eq: function (e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function () {
                    var e = this[0];
                    return e && !i(e) ? e : O(e)
                },
                last: function () {
                    var e = this[this.length - 1];
                    return e && !i(e) ? e : O(e)
                },
                find: function (e) {
                    var t = this;
                    return e ? "object" == (void 0 === e ? "undefined" : a(e)) ? O(e).filter(function () {
                        var e = this;
                        return P.some.call(t, function (t) {
                            return O.contains(t, e)
                        })
                    }) : 1 == this.length ? O(Y.qsa(this[0], e)) : this.map(function () {
                        return Y.qsa(this, e)
                    }) : O()
                },
                closest: function (e, t) {
                    var n = [], r = "object" == (void 0 === e ? "undefined" : a(e)) && O(e);
                    return this.each(function (a, i) {
                        for (; i && !(r ? r.indexOf(i) >= 0 : Y.matches(i, e));) i = i !== t && !o(i) && i.parentNode;
                        i && n.indexOf(i) < 0 && n.push(i)
                    }), O(n)
                },
                parents: function (e) {
                    for (var t = [], n = this; n.length > 0;) n = O.map(n, function (e) {
                        if ((e = e.parentNode) && !o(e) && t.indexOf(e) < 0) return t.push(e), e
                    });
                    return g(t, e)
                },
                parent: function (e) {
                    return g(N(this.pluck("parentNode")), e)
                },
                children: function (e) {
                    return g(this.map(function () {
                        return m(this)
                    }), e)
                },
                contents: function () {
                    return this.map(function () {
                        return this.contentDocument || U.call(this.childNodes)
                    })
                },
                siblings: function (e) {
                    return g(this.map(function (e, t) {
                        return A.call(m(t.parentNode), function (e) {
                            return e !== t
                        })
                    }), e)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (e) {
                    return O.map(this, function (t) {
                        return t[e]
                    })
                },
                show: function () {
                    return this.each(function () {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = _(this.nodeName))
                    })
                },
                replaceWith: function (e) {
                    return this.before(e).remove()
                },
                wrap: function (e) {
                    var t = n(e);
                    if (this[0] && !t) var r = O(e).get(0), a = r.parentNode || this.length > 1;
                    return this.each(function (n) {
                        O(this).wrapAll(t ? e.call(this, n) : a ? r.cloneNode(!0) : r)
                    })
                },
                wrapAll: function (e) {
                    if (this[0]) {
                        O(this[0]).before(e = O(e));
                        for (var t; (t = e.children()).length;) e = t.first();
                        O(e).append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    var t = n(e);
                    return this.each(function (n) {
                        var r = O(this), a = r.contents(), o = t ? e.call(this, n) : e;
                        a.length ? a.wrapAll(o) : r.append(o)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        O(this).replaceWith(O(this).children())
                    }), this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (e) {
                    return this.each(function () {
                        var t = O(this);
                        (e === x ? "none" == t.css("display") : e) ? t.show() : t.hide()
                    })
                },
                prev: function (e) {
                    return O(this.pluck("previousElementSibling")).filter(e || "*")
                },
                next: function (e) {
                    return O(this.pluck("nextElementSibling")).filter(e || "*")
                },
                html: function (e) {
                    return 0 in arguments ? this.each(function (t) {
                        var n = this.innerHTML;
                        O(this).empty().append(y(this, e, t, n))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function (e) {
                    return 0 in arguments ? this.each(function (t) {
                        var n = y(this, e, t, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function (e, t) {
                    var n;
                    return "string" != typeof e || 1 in arguments ? this.each(function (n) {
                        if (1 === this.nodeType) if (i(e)) for (S in e) b(this, S, e[S]); else b(this, e, y(this, t, n, this.getAttribute(e)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(e)) ? n : x
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        1 === this.nodeType && e.split(" ").forEach(function (e) {
                            b(this, e)
                        }, this)
                    })
                },
                prop: function (e, t) {
                    return e = ee[e] || e, 1 in arguments ? this.each(function (n) {
                        this[e] = y(this, t, n, this[e])
                    }) : this[0] && this[0][e]
                },
                removeProp: function (e) {
                    return e = ee[e] || e, this.each(function () {
                        delete this[e]
                    })
                },
                data: function (e, t) {
                    var n = "data-" + e.replace(W, "-$1").toLowerCase(),
                        r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                    return null !== r ? E(r) : x
                },
                val: function (e) {
                    return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
                        this.value = y(this, e, t, this.value)
                    })) : this[0] && (this[0].multiple ? O(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function (t) {
                    if (t) return this.each(function (e) {
                        var n = O(this), r = y(this, t, e, n.offset()), a = n.offsetParent().offset(),
                            o = {top: r.top - a.top, left: r.left - a.left};
                        "static" == n.css("position") && (o.position = "relative"), n.css(o)
                    });
                    if (!this.length) return null;
                    if (I.documentElement !== this[0] && !O.contains(I.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var n = this[0].getBoundingClientRect();
                    return {
                        left: n.left + e.pageXOffset,
                        top: n.top + e.pageYOffset,
                        width: Math.round(n.width),
                        height: Math.round(n.height)
                    }
                },
                css: function (e, n) {
                    if (arguments.length < 2) {
                        var r = this[0];
                        if ("string" == typeof e) {
                            if (!r) return;
                            return r.style[C(e)] || getComputedStyle(r, "").getPropertyValue(e)
                        }
                        if (te(e)) {
                            if (!r) return;
                            var a = {}, o = getComputedStyle(r, "");
                            return O.each(e, function (e, t) {
                                a[t] = r.style[C(t)] || o.getPropertyValue(t)
                            }), a
                        }
                    }
                    var i = "";
                    if ("string" == t(e)) n || 0 === n ? i = d(e) + ":" + p(e, n) : this.each(function () {
                        this.style.removeProperty(d(e))
                    }); else for (S in e) e[S] || 0 === e[S] ? i += d(S) + ":" + p(S, e[S]) + ";" : this.each(function () {
                        this.style.removeProperty(d(S))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + i
                    })
                },
                index: function (e) {
                    return e ? this.indexOf(O(e)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (e) {
                    return !!e && P.some.call(this, function (e) {
                        return this.test(w(e))
                    }, f(e))
                },
                addClass: function (e) {
                    return e ? this.each(function (t) {
                        if ("className" in this) {
                            j = [];
                            var n = w(this);
                            y(this, e, t, n).split(/\s+/g).forEach(function (e) {
                                O(this).hasClass(e) || j.push(e)
                            }, this), j.length && w(this, n + (n ? " " : "") + j.join(" "))
                        }
                    }) : this
                },
                removeClass: function (e) {
                    return this.each(function (t) {
                        if ("className" in this) {
                            if (e === x) return w(this, "");
                            j = w(this), y(this, e, t, j).split(/\s+/g).forEach(function (e) {
                                j = j.replace(f(e), " ")
                            }), w(this, j.trim())
                        }
                    })
                },
                toggleClass: function (e, t) {
                    return e ? this.each(function (n) {
                        var r = O(this);
                        y(this, e, n, w(this)).split(/\s+/g).forEach(function (e) {
                            (t === x ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                        })
                    }) : this
                },
                scrollTop: function (e) {
                    if (this.length) {
                        var t = "scrollTop" in this[0];
                        return e === x ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                            this.scrollTop = e
                        } : function () {
                            this.scrollTo(this.scrollX, e)
                        })
                    }
                },
                scrollLeft: function (e) {
                    if (this.length) {
                        var t = "scrollLeft" in this[0];
                        return e === x ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                            this.scrollLeft = e
                        } : function () {
                            this.scrollTo(e, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var e = this[0], t = this.offsetParent(), n = this.offset(),
                            r = B.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                        return n.top -= parseFloat(O(e).css("margin-top")) || 0, n.left -= parseFloat(O(e).css("margin-left")) || 0, r.top += parseFloat(O(t[0]).css("border-top-width")) || 0, r.left += parseFloat(O(t[0]).css("border-left-width")) || 0, {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || I.body; e && !B.test(e.nodeName) && "static" == O(e).css("position");) e = e.offsetParent;
                        return e
                    })
                }
            }, O.fn.detach = O.fn.remove, ["width", "height"].forEach(function (e) {
                var t = e.replace(/./, function (e) {
                    return e[0].toUpperCase()
                });
                O.fn[e] = function (n) {
                    var a, i = this[0];
                    return n === x ? r(i) ? i["inner" + t] : o(i) ? i.documentElement["scroll" + t] : (a = this.offset()) && a[e] : this.each(function (t) {
                        i = O(this), i.css(e, y(this, n, t, i[e]()))
                    })
                }
            }), q.forEach(function (n, r) {
                var a = r % 2;
                O.fn[n] = function () {
                    var n, o, i = O.map(arguments, function (e) {
                        var r = [];
                        return n = t(e), "array" == n ? (e.forEach(function (e) {
                            return e.nodeType !== x ? r.push(e) : O.zepto.isZ(e) ? r = r.concat(e.get()) : void(r = r.concat(Y.fragment(e)))
                        }), r) : "object" == n || null == e ? e : Y.fragment(e)
                    }), s = this.length > 1;
                    return i.length < 1 ? this : this.each(function (t, n) {
                        o = a ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                        var c = O.contains(I.documentElement, o);
                        i.forEach(function (t) {
                            if (s) t = t.cloneNode(!0); else if (!o) return O(t).remove();
                            o.insertBefore(t, n), c && k(t, function (t) {
                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                    var n = t.ownerDocument ? t.ownerDocument.defaultView : e;
                                    n.eval.call(n, t.innerHTML)
                                }
                            })
                        })
                    })
                }, O.fn[a ? n + "To" : "insert" + (r ? "Before" : "After")] = function (e) {
                    return O(e)[n](this), this
                }
            }), Y.Z.prototype = h.prototype = O.fn, Y.uniq = N, Y.deserializeValue = E, O.zepto = Y, O
        }();
        return e.Zepto = t, void 0 === e.$ && (e.$ = t), function (t) {
            function n(e) {
                return e._zid || (e._zid = p++)
            }

            function r(e, t, r, i) {
                if (t = a(t), t.ns) var s = o(t.ns);
                return (v[n(e)] || []).filter(function (e) {
                    return e && (!t.e || e.e == t.e) && (!t.ns || s.test(e.ns)) && (!r || n(e.fn) === n(r)) && (!i || e.sel == i)
                })
            }

            function a(e) {
                var t = ("" + e).split(".");
                return {e: t[0], ns: t.slice(1).sort().join(" ")}
            }

            function o(e) {
                return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
            }

            function i(e, t) {
                return e.del && !y && e.e in b || !!t
            }

            function s(e) {
                return w[e] || y && b[e] || e
            }

            function c(e, r, o, c, l, d, p) {
                var _ = n(e), m = v[_] || (v[_] = []);
                r.split(/\s/).forEach(function (n) {
                    if ("ready" == n) return t(document).ready(o);
                    var r = a(n);
                    r.fn = o, r.sel = l, r.e in w && (o = function (e) {
                        var n = e.relatedTarget;
                        if (!n || n !== this && !t.contains(this, n)) return r.fn.apply(this, arguments)
                    }), r.del = d;
                    var _ = d || o;
                    r.proxy = function (t) {
                        if (t = u(t), !t.isImmediatePropagationStopped()) {
                            t.data = c;
                            var n = _.apply(e, t._args == f ? [t] : [t].concat(t._args));
                            return !1 === n && (t.preventDefault(), t.stopPropagation()), n
                        }
                    }, r.i = m.length, m.push(r), "addEventListener" in e && e.addEventListener(s(r.e), r.proxy, i(r, p))
                })
            }

            function l(e, t, a, o, c) {
                var l = n(e);
                (t || "").split(/\s/).forEach(function (t) {
                    r(e, t, a, o).forEach(function (t) {
                        delete v[l][t.i], "removeEventListener" in e && e.removeEventListener(s(t.e), t.proxy, i(t, c))
                    })
                })
            }

            function u(e, n) {
                return !n && e.isDefaultPrevented || (n || (n = e), t.each(S, function (t, r) {
                    var a = n[t];
                    e[t] = function () {
                        return this[r] = E, a && a.apply(n, arguments)
                    }, e[r] = k
                }), e.timeStamp || (e.timeStamp = Date.now()), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = E)), e
            }

            function d(e) {
                var t, n = {originalEvent: e};
                for (t in e) x.test(t) || e[t] === f || (n[t] = e[t]);
                return u(n, e)
            }

            var f, p = 1, _ = Array.prototype.slice, m = t.isFunction, h = function (e) {
                    return "string" == typeof e
                }, v = {}, g = {}, y = "onfocusin" in e, b = {focus: "focusin", blur: "focusout"},
                w = {mouseenter: "mouseover", mouseleave: "mouseout"};
            g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
                add: c,
                remove: l
            }, t.proxy = function (e, r) {
                var a = 2 in arguments && _.call(arguments, 2);
                if (m(e)) {
                    var o = function () {
                        return e.apply(r, a ? a.concat(_.call(arguments)) : arguments)
                    };
                    return o._zid = n(e), o
                }
                if (h(r)) return a ? (a.unshift(e[r], e), t.proxy.apply(null, a)) : t.proxy(e[r], e);
                throw new TypeError("expected function")
            }, t.fn.bind = function (e, t, n) {
                return this.on(e, t, n)
            }, t.fn.unbind = function (e, t) {
                return this.off(e, t)
            }, t.fn.one = function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            };
            var E = function () {
                return !0
            }, k = function () {
                return !1
            }, x = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            t.fn.delegate = function (e, t, n) {
                return this.on(t, e, n)
            }, t.fn.undelegate = function (e, t, n) {
                return this.off(t, e, n)
            }, t.fn.live = function (e, n) {
                return t(document.body).delegate(this.selector, e, n), this
            }, t.fn.die = function (e, n) {
                return t(document.body).undelegate(this.selector, e, n), this
            }, t.fn.on = function (e, n, r, a, o) {
                var i, s, u = this;
                return e && !h(e) ? (t.each(e, function (e, t) {
                    u.on(e, n, r, t, o)
                }), u) : (h(n) || m(a) || !1 === a || (a = r, r = n, n = f), a !== f && !1 !== r || (a = r, r = f), !1 === a && (a = k), u.each(function (u, f) {
                    o && (i = function (e) {
                        return l(f, e.type, a), a.apply(this, arguments)
                    }), n && (s = function (e) {
                        var r, o = t(e.target).closest(n, f).get(0);
                        if (o && o !== f) return r = t.extend(d(e), {
                            currentTarget: o,
                            liveFired: f
                        }), (i || a).apply(o, [r].concat(_.call(arguments, 1)))
                    }), c(f, e, a, r, n, s || i)
                }))
            }, t.fn.off = function (e, n, r) {
                var a = this;
                return e && !h(e) ? (t.each(e, function (e, t) {
                    a.off(e, n, t)
                }), a) : (h(n) || m(r) || !1 === r || (r = n, n = f), !1 === r && (r = k), a.each(function () {
                    l(this, e, r, n)
                }))
            }, t.fn.trigger = function (e, n) {
                return e = h(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function () {
                    e.type in b && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                })
            }, t.fn.triggerHandler = function (e, n) {
                var a, o;
                return this.each(function (i, s) {
                    a = d(h(e) ? t.Event(e) : e), a._args = n, a.target = s, t.each(r(s, e.type || e), function (e, t) {
                        if (o = t.proxy(a), a.isImmediatePropagationStopped()) return !1
                    })
                }), o
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
                t.fn[e] = function (t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                }
            }), t.Event = function (e, t) {
                h(e) || (t = e, e = t.type);
                var n = document.createEvent(g[e] || "Events"), r = !0;
                if (t) for (var a in t) "bubbles" == a ? r = !!t[a] : n[a] = t[a];
                return n.initEvent(e, r, !0), u(n)
            }
        }(t), function (t) {
            function n(e, n, r) {
                var a = t.Event(n);
                return t(e).trigger(a, r), !a.isDefaultPrevented()
            }

            function r(e, t, r, a) {
                if (e.global) return n(t || b, r, a)
            }

            function a(e) {
                e.global && 0 == t.active++ && r(e, null, "ajaxStart")
            }

            function o(e) {
                e.global && !--t.active && r(e, null, "ajaxStop")
            }

            function i(e, t) {
                var n = t.context;
                if (!1 === t.beforeSend.call(n, e, t) || !1 === r(t, n, "ajaxBeforeSend", [e, t])) return !1;
                r(t, n, "ajaxSend", [e, t])
            }

            function s(e, t, n, a) {
                var o = n.context;
                n.success.call(o, e, "success", t), a && a.resolveWith(o, [e, "success", t]), r(n, o, "ajaxSuccess", [t, n, e]), l("success", t, n)
            }

            function c(e, t, n, a, o) {
                var i = a.context;
                a.error.call(i, n, t, e), o && o.rejectWith(i, [n, t, e]), r(a, i, "ajaxError", [n, a, e || t]), l(t, n, a)
            }

            function l(e, t, n) {
                var a = n.context;
                n.complete.call(a, t, e), r(n, a, "ajaxComplete", [t, n]), o(n)
            }

            function u(e, t, n) {
                if (n.dataFilter == d) return e;
                var r = n.context;
                return n.dataFilter.call(r, e, t)
            }

            function d() {
            }

            function f(e) {
                return e && (e = e.split(";", 2)[0]), e && (e == S ? "html" : e == x ? "json" : E.test(e) ? "script" : k.test(e) && "xml") || "text"
            }

            function p(e, t) {
                return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
            }

            function _(e) {
                e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = p(e.url, e.data), e.data = void 0)
            }

            function m(e, n, r, a) {
                return t.isFunction(n) && (a = r, r = n, n = void 0), t.isFunction(r) || (a = r, r = void 0), {
                    url: e,
                    data: n,
                    success: r,
                    dataType: a
                }
            }

            function h(e, n, r, a) {
                var o, i = t.isArray(n), s = t.isPlainObject(n);
                t.each(n, function (n, c) {
                    o = t.type(c), a && (n = r ? a : a + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !a && i ? e.add(c.name, c.value) : "array" == o || !r && "object" == o ? h(e, c, r, n) : e.add(n, c)
                })
            }

            var v, g, y = +new Date, b = e.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                E = /^(?:text|application)\/javascript/i, k = /^(?:text|application)\/xml/i, x = "application/json",
                S = "text/html", O = /^\s*$/, j = b.createElement("a");
            j.href = e.location.href, t.active = 0, t.ajaxJSONP = function (n, r) {
                if (!("type" in n)) return t.ajax(n);
                var a, o, l = n.jsonpCallback, u = (t.isFunction(l) ? l() : l) || "Zepto" + y++,
                    d = b.createElement("script"), f = e[u], p = function (e) {
                        t(d).triggerHandler("error", e || "abort")
                    }, _ = {abort: p};
                return r && r.promise(_), t(d).on("load error", function (i, l) {
                    clearTimeout(o), t(d).off().remove(), "error" != i.type && a ? s(a[0], _, n, r) : c(null, l || "error", _, n, r), e[u] = f, a && t.isFunction(f) && f(a[0]), f = a = void 0
                }), !1 === i(_, n) ? (p("abort"), _) : (e[u] = function () {
                    a = arguments
                }, d.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u), b.head.appendChild(d), n.timeout > 0 && (o = setTimeout(function () {
                    p("timeout")
                }, n.timeout)), _)
            }, t.ajaxSettings = {
                type: "GET",
                beforeSend: d,
                success: d,
                error: d,
                complete: d,
                context: null,
                global: !0,
                xhr: function () {
                    return new e.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: x,
                    xml: "application/xml, text/xml",
                    html: S,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: d
            }, t.ajax = function (n) {
                var r, o, l = t.extend({}, n || {}), m = t.Deferred && t.Deferred();
                for (v in t.ajaxSettings) void 0 === l[v] && (l[v] = t.ajaxSettings[v]);
                a(l), l.crossDomain || (r = b.createElement("a"), r.href = l.url, r.href = r.href, l.crossDomain = j.protocol + "//" + j.host != r.protocol + "//" + r.host), l.url || (l.url = e.location.toString()), (o = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, o)), _(l);
                var h = l.dataType, y = /\?.+=\?/.test(l.url);
                if (y && (h = "jsonp"), !1 !== l.cache && (n && !0 === n.cache || "script" != h && "jsonp" != h) || (l.url = p(l.url, "_=" + Date.now())), "jsonp" == h) return y || (l.url = p(l.url, l.jsonp ? l.jsonp + "=?" : !1 === l.jsonp ? "" : "callback=?")), t.ajaxJSONP(l, m);
                var w, E = l.accepts[h], k = {}, x = function (e, t) {
                        k[e.toLowerCase()] = [e, t]
                    }, S = /^([\w-]+:)\/\//.test(l.url) ? RegExp.$1 : e.location.protocol, C = l.xhr(),
                    N = C.setRequestHeader;
                if (m && m.promise(C), l.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", E || "*/*"), (E = l.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(E)), (l.contentType || !1 !== l.contentType && l.data && "GET" != l.type.toUpperCase()) && x("Content-Type", l.contentType || "application/x-www-form-urlencoded"), l.headers) for (g in l.headers) x(g, l.headers[g]);
                if (C.setRequestHeader = x, C.onreadystatechange = function () {
                        if (4 == C.readyState) {
                            C.onreadystatechange = d, clearTimeout(w);
                            var e, n = !1;
                            if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == S) {
                                if (h = h || f(l.mimeType || C.getResponseHeader("content-type")), "arraybuffer" == C.responseType || "blob" == C.responseType) e = C.response; else {
                                    e = C.responseText;
                                    try {
                                        e = u(e, h, l), "script" == h ? (0, eval)(e) : "xml" == h ? e = C.responseXML : "json" == h && (e = O.test(e) ? null : t.parseJSON(e))
                                    } catch (e) {
                                        n = e
                                    }
                                    if (n) return c(n, "parsererror", C, l, m)
                                }
                                s(e, C, l, m)
                            } else c(C.statusText || null, C.status ? "error" : "abort", C, l, m)
                        }
                    }, !1 === i(C, l)) return C.abort(), c(null, "abort", C, l, m), C;
                var P = !("async" in l) || l.async;
                if (C.open(l.type, l.url, P, l.username, l.password), l.xhrFields) for (g in l.xhrFields) C[g] = l.xhrFields[g];
                for (g in k) N.apply(C, k[g]);
                return l.timeout > 0 && (w = setTimeout(function () {
                    C.onreadystatechange = d, C.abort(), c(null, "timeout", C, l, m)
                }, l.timeout)), C.send(l.data ? l.data : null), C
            }, t.get = function () {
                return t.ajax(m.apply(null, arguments))
            }, t.post = function () {
                var e = m.apply(null, arguments);
                return e.type = "POST", t.ajax(e)
            }, t.getJSON = function () {
                var e = m.apply(null, arguments);
                return e.dataType = "json", t.ajax(e)
            }, t.fn.load = function (e, n, r) {
                if (!this.length) return this;
                var a, o = this, i = e.split(/\s/), s = m(e, n, r), c = s.success;
                return i.length > 1 && (s.url = i[0], a = i[1]), s.success = function (e) {
                    o.html(a ? t("<div>").html(e.replace(w, "")).find(a) : e), c && c.apply(o, arguments)
                }, t.ajax(s), this
            };
            var C = encodeURIComponent;
            t.param = function (e, n) {
                var r = [];
                return r.add = function (e, n) {
                    t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
                }, h(r, e, n), r.join("&").replace(/%20/g, "+")
            }
        }(t), function (e) {
            e.fn.serializeArray = function () {
                var t, n, r = [], a = function e(n) {
                    if (n.forEach) return n.forEach(e);
                    r.push({name: t, value: n})
                };
                return this[0] && e.each(this[0].elements, function (r, o) {
                    n = o.type, t = o.name, t && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && a(e(o).val())
                }), r
            }, e.fn.serialize = function () {
                var e = [];
                return this.serializeArray().forEach(function (t) {
                    e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
                }), e.join("&")
            }, e.fn.submit = function (t) {
                if (0 in arguments) this.bind("submit", t); else if (this.length) {
                    var n = e.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        }(t), function () {
            try {
                getComputedStyle(void 0)
            } catch (n) {
                var t = getComputedStyle;
                e.getComputedStyle = function (e, n) {
                    try {
                        return t(e, n)
                    } catch (e) {
                        return null
                    }
                }
            }
        }(), t
    })
}, function (e, t) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s2.pstatp.com/pgc/v2/resource/card/", t(t.s = 31)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            function r() {
                return null
            }

            function a(e) {
                var t = e.nodeName, n = e.attributes;
                e.attributes = {}, t.defaultProps && w(e.attributes, t.defaultProps), n && w(e.attributes, n)
            }

            function o(e, t) {
                var n, r, a;
                if (t) {
                    for (a in t) if (n = J.test(a)) break;
                    if (n) {
                        r = e.attributes = {};
                        for (a in t) t.hasOwnProperty(a) && (r[J.test(a) ? a.replace(/([A-Z0-9])/, "-$1").toLowerCase() : a] = t[a])
                    }
                }
            }

            function i(e, t, r) {
                var a = t && t._preactCompatRendered && t._preactCompatRendered.base;
                a && a.parentNode !== t && (a = null), !a && t && (a = t.firstElementChild);
                for (var o = t.childNodes.length; o--;) t.childNodes[o] !== a && t.removeChild(t.childNodes[o]);
                var i = n.i(F.c)(e, t, a);
                return t && (t._preactCompatRendered = i && (i._component || {base: i})), "function" == typeof r && r(), i && i._component || i
            }

            function s(e, t, r, a) {
                var o = n.i(F.a)(X, {context: e.context}, t), s = i(o, r), c = s._component || s.base;
                return a && a.call(c, s), c
            }

            function c(e) {
                var t = e._preactCompatRendered && e._preactCompatRendered.base;
                return !(!t || t.parentNode !== e) && (n.i(F.c)(n.i(F.a)(r), e, t), !0)
            }

            function l(e) {
                return _.bind(null, e)
            }

            function u(e, t) {
                for (var n = t || 0; n < e.length; n++) {
                    var r = e[n];
                    Array.isArray(r) ? u(r) : r && "object" == typeof r && !v(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = _(r.type || r.nodeName, r.props || r.attributes, r.children))
                }
            }

            function d(e) {
                return "function" == typeof e && !(e.prototype && e.prototype.render)
            }

            function f(e) {
                return S({
                    displayName: e.displayName || e.name, render: function () {
                        return e(this.props, this.context)
                    }
                })
            }

            function p(e) {
                var t = e[H];
                return t ? !0 === t ? e : t : (t = f(e), Object.defineProperty(t, H, {
                    configurable: !0,
                    value: !0
                }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, Object.defineProperty(e, H, {
                    configurable: !0,
                    value: t
                }), t)
            }

            function _() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                return u(e, 2), m(F.a.apply(void 0, e))
            }

            function m(e) {
                e.preactCompatNormalized = !0, b(e), d(e.nodeName) && (e.nodeName = p(e.nodeName));
                var t = e.attributes.ref, n = t && typeof t;
                return !Y || "string" !== n && "number" !== n || (e.attributes.ref = g(t, Y)), y(e), e
            }

            function h(e, t) {
                for (var r = [], a = arguments.length - 2; a-- > 0;) r[a] = arguments[a + 2];
                if (!v(e)) return e;
                var o = e.attributes || e.props,
                    i = n.i(F.a)(e.nodeName || e.type, w({}, o), e.children || o && o.children), s = [i, t];
                return r && r.length ? s.push(r) : t && t.children && s.push(t.children), m(F.d.apply(void 0, s))
            }

            function v(e) {
                return e && (e instanceof Q || e.$$typeof === W)
            }

            function g(e, t) {
                return t._refProxies[e] || (t._refProxies[e] = function (n) {
                    t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
                })
            }

            function y(e) {
                var t = e.nodeName, n = e.attributes;
                if (n && "string" == typeof t) {
                    var r = {};
                    for (var a in n) r[a.toLowerCase()] = a;
                    if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                        var o = r.oninput || "oninput";
                        n[o] || (n[o] = P([n[o], n[r.onchange]]), delete n[r.onchange])
                    }
                }
            }

            function b(e) {
                var t = e.attributes || (e.attributes = {});
                re.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", re)
            }

            function w(e, t) {
                for (var n = arguments, r = 1, a = void 0; r < arguments.length; r++) if (a = n[r]) for (var o in a) a.hasOwnProperty(o) && (e[o] = a[o]);
                return e
            }

            function E(e, t) {
                for (var n in e) if (!(n in t)) return !0;
                for (var r in t) if (e[r] !== t[r]) return !0;
                return !1
            }

            function k(e) {
                return e && e.base || e
            }

            function x() {
            }

            function S(e) {
                function t(e, t) {
                    C(this), D.call(this, e, t, z), T.call(this, e, t)
                }

                return e = w({constructor: t}, e), e.mixins && j(e, O(e.mixins)), e.statics && w(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)), x.prototype = D.prototype, t.prototype = w(new x, e), t.displayName = e.displayName || "Component", t
            }

            function O(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var r = e[n];
                    for (var a in r) r.hasOwnProperty(a) && "function" == typeof r[a] && (t[a] || (t[a] = [])).push(r[a])
                }
                return t
            }

            function j(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = P(t[n].concat(e[n] || Z), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
            }

            function C(e) {
                for (var t in e) {
                    var n = e[t];
                    "function" != typeof n || n.__bound || q.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
                }
            }

            function N(e, t, n) {
                if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(e, n)
            }

            function P(e, t) {
                return function () {
                    for (var n, r = arguments, a = this, o = 0; o < e.length; o++) {
                        var i = N(a, e[o], r);
                        if (t && null != i) {
                            n || (n = {});
                            for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s])
                        } else void 0 !== i && (n = i)
                    }
                    return n
                }
            }

            function T(e, t) {
                A.call(this, e, t), this.componentWillReceiveProps = P([A, this.componentWillReceiveProps || "componentWillReceiveProps"]), this.render = P([A, U, this.render || "render", I])
            }

            function A(e, t) {
                if (e) {
                    var n = e.children;
                    if (n && Array.isArray(n) && 1 === n.length && ("string" == typeof n[0] || "function" == typeof n[0] || n[0] instanceof Q) && (e.children = n[0], e.children && "object" == typeof e.children && (e.children.length = 1, e.children[0] = e.children)), $) {
                        var r = "function" == typeof this ? this : this.constructor, a = this.propTypes || r.propTypes,
                            o = this.displayName || r.name;
                        a && L.a.checkPropTypes(a, e, "prop", o)
                    }
                }
            }

            function U(e) {
                Y = this
            }

            function I() {
                Y === this && (Y = null)
            }

            function D(e, t, n) {
                F.e.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {}, this._refProxies = {}, n !== z && T.call(this, e, t)
            }

            function M(e, t) {
                D.call(this, e, t)
            }

            n.d(t, "version", function () {
                return V
            }), n.d(t, "DOM", function () {
                return te
            }), n.d(t, "Children", function () {
                return ee
            }), n.d(t, "render", function () {
                return i
            }), n.d(t, "createClass", function () {
                return S
            }), n.d(t, "createFactory", function () {
                return l
            }), n.d(t, "createElement", function () {
                return _
            }), n.d(t, "cloneElement", function () {
                return h
            }), n.d(t, "isValidElement", function () {
                return v
            }), n.d(t, "findDOMNode", function () {
                return k
            }), n.d(t, "unmountComponentAtNode", function () {
                return c
            }), n.d(t, "Component", function () {
                return D
            }), n.d(t, "PureComponent", function () {
                return M
            }), n.d(t, "unstable_renderSubtreeIntoContainer", function () {
                return s
            }), n.d(t, "__spread", function () {
                return w
            });
            var R = n(27), L = n.n(R), F = n(24);
            n.d(t, "PropTypes", function () {
                return L.a
            });
            var V = "15.1.0",
                B = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
                W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                H = "undefined" != typeof Symbol && Symbol.for ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
                q = {
                    constructor: 1,
                    render: 1,
                    shouldComponentUpdate: 1,
                    componentWillReceiveProps: 1,
                    componentWillUpdate: 1,
                    componentDidUpdate: 1,
                    componentWillMount: 1,
                    componentDidMount: 1,
                    componentWillUnmount: 1,
                    componentDidUnmount: 1
                },
                J = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
                z = {}, $ = void 0 === e || !n.i({NODE_ENV: "production"}) || !1, Q = n.i(F.a)("a", null).constructor;
            Q.prototype.$$typeof = W, Q.prototype.preactCompatUpgraded = !1, Q.prototype.preactCompatNormalized = !1, Object.defineProperty(Q.prototype, "type", {
                get: function () {
                    return this.nodeName
                }, set: function (e) {
                    this.nodeName = e
                }, configurable: !0
            }), Object.defineProperty(Q.prototype, "props", {
                get: function () {
                    return this.attributes
                }, set: function (e) {
                    this.attributes = e
                }, configurable: !0
            });
            var G = F.b.event;
            F.b.event = function (e) {
                return G && (e = G(e)), e.persist = Object, e.nativeEvent = e, e
            };
            var K = F.b.vnode;
            F.b.vnode = function (e) {
                if (!e.preactCompatUpgraded) {
                    e.preactCompatUpgraded = !0;
                    var t = e.nodeName, n = e.attributes = w({}, e.attributes);
                    "function" == typeof t ? (!0 === t[H] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || m(e), a(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), o(e, n))
                }
                K && K(e)
            };
            var X = function () {
            };
            X.prototype.getChildContext = function () {
                return this.props.context
            }, X.prototype.render = function (e) {
                return e.children[0]
            };
            for (var Y, Z = [], ee = {
                map: function (e, t, n) {
                    return null == e ? null : (e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
                }, forEach: function (e, t, n) {
                    if (null == e) return null;
                    e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
                }, count: function (e) {
                    return e && e.length || 0
                }, only: function (e) {
                    if (e = ee.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
                    return e[0]
                }, toArray: function (e) {
                    return null == e ? [] : Z.concat(e)
                }
            }, te = {}, ne = B.length; ne--;) te[B[ne]] = l(B[ne]);
            var re = {
                configurable: !0, get: function () {
                    return this.class
                }, set: function (e) {
                    this.class = e
                }
            };
            w(D.prototype = new F.e, {
                constructor: D, isReactComponent: {}, replaceState: function (e, t) {
                    var n = this;
                    this.setState(e, t);
                    for (var r in n.state) r in e || delete n.state[r]
                }, getDOMNode: function () {
                    return this.base
                }, isMounted: function () {
                    return !!this.base
                }
            }), x.prototype = D.prototype, M.prototype = new x, M.prototype.isPureReactComponent = !0, M.prototype.shouldComponentUpdate = function (e, t) {
                return E(this.props, e) || E(this.state, t)
            };
            var ae = {
                version: V,
                DOM: te,
                PropTypes: L.a,
                Children: ee,
                render: i,
                createClass: S,
                createFactory: l,
                createElement: _,
                cloneElement: h,
                isValidElement: v,
                findDOMNode: k,
                unmountComponentAtNode: c,
                Component: D,
                PureComponent: M,
                unstable_renderSubtreeIntoContainer: s,
                __spread: w
            };
            t.default = ae
        }.call(t, n(5))
    }, function (e, t) {
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (t(e), e.firstChild) {
                var n = e.firstChild;
                if (n) do {
                    r(n, t)
                } while (n = n.nextSibling)
            }
        }

        function a(e) {
            for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
            return t
        }

        function o(e) {
            for (var t = {}, n = e.attributes, r = e.dataset, a = 0, o = n.length; a < o; a++) "class" !== n[a].name && (t[n[a].name] = n[a].value);
            for (var a in r) t[a] = r[a];
            return t
        }

        function i(e) {
            e = e.toLowerCase();
            var t = /\b(\w)|\s(\w)/g;
            return e.replace(t, function (e) {
                return e.toUpperCase()
            })
        }

        function s(e) {
            var t = parseInt(e % 60);
            return parseInt(e / 60) + ":" + (t < 10 ? "0" + t : t)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            map: r,
            attr: a,
            buildAttrs: o,
            firstUpper: i,
            formatTime: s
        }
    }, function (e, t) {
        var n = {
            utf8: {
                stringToBytes: function (e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                }, bytesToString: function (e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            }, bin: {
                stringToBytes: function (e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                }, bytesToString: function (e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function (e, t, n) {
        var r, a, o;
        !function (n, i) {
            a = [t, e], r = i, void 0 !== (o = "function" == typeof r ? r.apply(t, a) : r) && (e.exports = o)
        }(0, function (e, t) {
            "use strict";

            function n() {
                return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
            }

            function r(e) {
                try {
                    delete window[e]
                } catch (t) {
                    window[e] = void 0
                }
            }

            function a(e) {
                var t = document.getElementById(e);
                t && document.getElementsByTagName("head")[0].removeChild(t)
            }

            function o(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = e,
                    s = t.timeout || i.timeout, c = t.jsonpCallback || i.jsonpCallback, l = void 0;
                return new Promise(function (i, u) {
                    var d = t.jsonpCallbackFunction || n(), f = c + "_" + d;
                    window[d] = function (e) {
                        i({
                            ok: !0, json: function () {
                                return Promise.resolve(e)
                            }
                        }), l && clearTimeout(l), a(f), r(d)
                    }, o += -1 === o.indexOf("?") ? "?" : "&";
                    var p = document.createElement("script");
                    p.setAttribute("src", "" + o + c + "=" + d), t.charset && p.setAttribute("charset", t.charset), p.id = f, document.getElementsByTagName("head")[0].appendChild(p), l = setTimeout(function () {
                        u(new Error("JSONP request to " + e + " timed out")), r(d), a(f), window[d] = function () {
                            r(d)
                        }
                    }, s), p.onerror = function () {
                        u(new Error("JSONP request to " + e + " failed")), r(d), a(f), l && clearTimeout(l)
                    }
                })
            }

            var i = {timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null};
            t.exports = o
        })
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }

        function i() {
            m && p && (m = !1, p.length ? _ = p.concat(_) : h = -1, _.length && s())
        }

        function s() {
            if (!m) {
                var e = a(i);
                m = !0;
                for (var t = _.length; t;) {
                    for (p = _, _ = []; ++h < t;) p && p[h].run();
                    h = -1, t = _.length
                }
                p = null, m = !1, o(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function l() {
        }

        var u, d, f = e.exports = {};
        !function () {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                u = n
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                d = r
            }
        }();
        var p, _ = [], m = !1, h = -1;
        f.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            _.push(new c(e, t)), 1 !== _.length || m || a(s)
        }, c.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function (e) {
            return []
        }, f.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function () {
            return "/"
        }, f.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function () {
            return 0
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = n(20), o = r(a), i = n(25), s = r(i);
        !function () {
            window.Promise || (window.Promise = s.default), pgcEvent.on("card-render", function () {
                var e = {};
                document.querySelector("body");
                o.default.init({match: /^(tt-|pre)/i, text: /^{!--.*--}/, context: e}).render(this)
            }), pgcEvent.on("card-destroy", function (e) {
                function t(e) {
                    var t = document.querySelectorAll(e);
                    [].slice.call(t).forEach(function (e) {
                        e.classList.add("card-hidden")
                    })
                }

                function n(e) {
                    e.forEach(function (e) {
                        var t = document.querySelector("#" + e);
                        t && t.classList.add("card-hidden")
                    })
                }

                if (e) {
                    Object.keys(e).forEach(function (r) {
                        "boolean" == typeof e[r] && e[r] && t(".tt-" + r + "-card"), Array.isArray(e[r]) && n(e[r])
                    })
                }
            })
        }(), window.ttCard = o.default || {}
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s), l = function (e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {show: !0}, n.show = function () {
                    n.setState({show: !0})
                }, n.cancel = function (e) {
                    e.preventDefault(), (0, n.props.onCancel)(), n.setState({show: !1})
                }, n
            }

            return o(t, e), i(t, [{
                key: "render", value: function () {
                    var e = this, t = this.state.show, n = this.props.phone;
                    return t ? c.default.createElement("div", {className: "phone-confirm"}, c.default.createElement("div", {className: "main"}, c.default.createElement("div", null, "联系电话"), c.default.createElement("div", null, n)), c.default.createElement("div", {className: "footer"}, c.default.createElement("div", {className: "btn-group"}, c.default.createElement("a", {
                        className: "btn",
                        onClick: function (t) {
                            return e.cancel(t)
                        }
                    }, "取消"), c.default.createElement("a", {className: "btn", href: "tel:" + n}, "呼叫")))) : null
                }
            }]), t
        }(s.Component);
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s), l = function (e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.play.bind(n), n.pause.bind(n), n
            }

            return o(t, e), i(t, [{
                key: "play", value: function () {
                    this.audio.play()
                }
            }, {
                key: "pause", value: function () {
                    this.audio.pause()
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return c.default.createElement("audio", {
                        autoPlay: this.props.autoPlay,
                        className: "audio-player " + this.props.className,
                        controls: this.props.controls,
                        loop: this.props.loop,
                        muted: this.props.muted,
                        onPlay: this.props.onPlay,
                        preload: this.props.preload,
                        ref: function (t) {
                            e.audio = t
                        },
                        src: this.props.src,
                        style: this.props.style
                    })
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this, t = this.audio;
                    t.addEventListener("error", function (t) {
                        e.props.onError(t)
                    }), t.addEventListener("canplay", function (t) {
                        e.props.onCanPlay(t)
                    }), t.addEventListener("canplaythrough", function (t) {
                        e.props.onCanPlayThrough(t)
                    }), t.addEventListener("play", function (t) {
                        e.setListenTrack(), e.props.onPlay(t)
                    }), t.addEventListener("abort", function (t) {
                        e.clearListenTrack(), e.props.onAbort(t)
                    }), t.addEventListener("ended", function (t) {
                        e.clearListenTrack(), e.props.onEnded(t)
                    }), t.addEventListener("pause", function (t) {
                        e.clearListenTrack(), e.props.onPause(t)
                    }), t.addEventListener("seeked", function (t) {
                        e.clearListenTrack(), e.props.onSeeked(t)
                    })
                }
            }, {
                key: "setListenTrack", value: function () {
                    var e = this;
                    if (!this.listenTracker) {
                        var t = this.props.listenInterval;
                        this.listenTracker = setInterval(function () {
                            e.props.onListen(e.audio.currentTime)
                        }, t)
                    }
                }
            }, {
                key: "clearListenTrack", value: function () {
                    this.listenTracker && (clearInterval(this.listenTracker), this.listenTracker = null)
                }
            }]), t
        }(s.Component);
        l.defaultProps = {
            autoPlay: !1,
            children: null,
            className: "",
            controls: !1,
            listenInterval: 3e3,
            loop: !1,
            muted: !1,
            onAbort: function () {
            },
            onCanPlay: function () {
            },
            onCanPlayThrough: function () {
            },
            onEnded: function () {
            },
            onError: function () {
            },
            onListen: function () {
            },
            onPause: function () {
            },
            onPlay: function () {
            },
            onSeeked: function () {
            },
            preload: "auto",
            src: null
        }, t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s);
        n(1);
        var l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAANklEQVRIS2P88vXbfwYaAsZRCwiF7mgQEQohhtEgGg0igiFAUMFoKhoNIoIhQFDBaCoaAUEEAEIFXOkvlipRAAAAAElFTkSuQmCC",
            u = function (e) {
                function t(e) {
                    r(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.summaryRef = null, n.setTextContentTimer = null, n.state = {
                        styleType: window.Page.h5_settings.pgc_card_info.tma_style,
                        styleExperiment: n.ifInStyleExperiment()
                    }, n
                }

                return o(t, e), i(t, [{
                    key: "ifInStyleExperiment", value: function () {
                        var e = {};
                        try {
                            e = JSON.parse(this.props.content) || {}
                        } catch (e) {
                            return !1
                        }
                        return !(!e || !e.styleExperiment) || !(!e || !e.styleexperiment)
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        this.checkWindowSize()
                    }
                }, {
                    key: "checkWindowSize", value: function () {
                        var e = this;
                        window.iH = window.innerHeight, window.aW = window.innerWidth - 30, window.aw <= 0 || window.iH <= 0 ? this.setTextContentTimer = setTimeout(function () {
                            e.checkWindowSize()
                        }, 250) : this.setTextContent()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        clearTimeout(this.setTextContentTimer), this.setTextContentTimer = null
                    }
                }, {
                    key: "setTextContent", value: function () {
                        var e = this.summaryRef;
                        if (e && e.offsetHeight > 20) {
                            var t = e.offsetWidth, n = Math.floor(t / 16);
                            Math.ceil(e.textContent.replace(/[^\x00-\xff]/g, "**").length / 2) > 2 * n - 4 && (e.innerText = e.textContent.substr(0, 2 * n - 5) + "...")
                        }
                        var r = {};
                        try {
                            r = JSON.parse(this.props.content) || {}
                        } catch (e) {
                            console.error(e)
                        }
                        var a = this.cardRef;
                        setTimeout(function () {
                            a && a.className && !/card-hidden/.test(a.className) && window.sendUmengWhenTargetShown(a, "mp_show", "", {
                                group_id: window.Page.statistics.group_id,
                                mp_id: r.app_id,
                                mp_gid: r.app_group_id,
                                position: "article_detail",
                                _param_for_special: 1 == r.type ? ["m", "i", "c", "r", "o", "_", "a", "p", "p"].join("") : ["m", "i", "c", "r", "o", "_", "g", "a", "m", "e"].join("")
                            }, !0, {version: 3})
                        }, 1e3)
                    }
                }, {
                    key: "sendEventParams", value: function (e) {
                        return {
                            group_id: window.Page.statistics.group_id,
                            mp_id: e.app_id,
                            mp_gid: e.app_group_id,
                            position: "article_detail",
                            _param_for_special: 1 == e.type ? ["m", "i", "c", "r", "o", "_", "a", "p", "p"].join("") : ["m", "i", "c", "r", "o", "_", "g", "a", "m", "e"].join("")
                        }
                    }
                }, {
                    key: "renderStyleCard", value: function (e, t) {
                        switch (e) {
                            case 1:
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "cover-test"}, c.default.createElement("div", {className: "cover-test-img-container"})), c.default.createElement("div", {className: "introduce"}, c.default.createElement("div", {className: "text"}, "周星驰携手王宝强回归，邀你观看新喜剧之王！"), c.default.createElement("div", {className: "btn"}, c.default.createElement("button", null, "点击购票"))));
                            case 2:
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "cover-test"}, c.default.createElement("div", {className: "cover-test-img-container"})), c.default.createElement("div", {className: "introduce"}, c.default.createElement("div", {className: "text"}, "周星驰携手王宝强回归，邀你观看新喜剧之王！"), c.default.createElement("div", {className: "btn"}, c.default.createElement("button", null, "去看看"))));
                            case 3:
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "cover-test"}, c.default.createElement("div", {className: "cover-test-img-container"})), c.default.createElement("div", {className: "introduce-multiple"}, c.default.createElement("div", {className: "text"}, c.default.createElement("div", {className: "movie-name"}, "新喜剧之王"), c.default.createElement("div", {className: "movie-actor"}, "主演：王宝强/鄂靖文/张全蛋"), c.default.createElement("div", {className: "movie-intro"}, "周星驰导演作品，不一样的喜剧")), c.default.createElement("div", {className: "btn"}, c.default.createElement("button", {className: "btn-2"}, "购票"))));
                            case 4:
                                var n = (new Date).getTime(), r = new Date("2019-02-05T08:00:00").getTime();
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "cover-test"}, c.default.createElement("div", {className: "cover-test-img-container"})), c.default.createElement("div", {className: "introduce-multiple"}, c.default.createElement("div", {className: "text"}, c.default.createElement("div", {className: "movie-name"}, "新喜剧之王"), n < r ? c.default.createElement("div", {className: "movie-book"}, c.default.createElement("img", {src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/booking.png"})) : c.default.createElement("div", {className: "movie-show"}, c.default.createElement("img", {src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/show.png"})), c.default.createElement("div", {className: "movie-intro"}, "主演：王宝强/鄂靖文/张全蛋")), c.default.createElement("div", {className: "btn"}, c.default.createElement("button", {className: "btn-2"}, "购票"))));
                            case 5:
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "introduce-pic"}, c.default.createElement("div", {className: "introduce-pic-container-2"}, c.default.createElement("img", {src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/move2.jpg"})), c.default.createElement("div", {className: "more"}, "点击查看更多新喜剧之王相关信息")));
                            case 6:
                                return c.default.createElement("div", {className: "content-test"}, c.default.createElement("div", {className: "introduce-pic"}, c.default.createElement("div", {className: "introduce-pic-container-3"}, c.default.createElement("img", {src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/move3.png"})), c.default.createElement("div", {className: "more"}, "点击查看更多新喜剧之王相关信息")));
                            default:
                                return null
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = navigator.userAgent, n = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                            r = {};
                        try {
                            r = JSON.parse(this.props.content) || {}
                        } catch (e) {
                            return null
                        }
                        var a = this.state, o = a.styleType, i = a.styleExperiment;
                        if (o && i) {
                            var s = r.schema;
                            return 6 === o && (s = s.replace("%2Fmovie%3F", "%2Fpreview%3F")), c.default.createElement("div", {
                                id: "" + r.app_id,
                                className: "applet-card surface-4 applet-card-test",
                                onClick: function () {
                                    window.location.href = s + "&launch_from=article_detail", window.sendUmengEventV3("mp_click", e.sendEventParams(r))
                                },
                                ref: function (t) {
                                    return e.cardRef = t
                                }
                            }, c.default.createElement("div", {className: "container container-test"}, c.default.createElement("div", {className: "header"}, c.default.createElement("span", {className: "check-box"}, c.default.createElement("img", {
                                src: r.icon,
                                onError: function (e) {
                                    e.target.src = "" + l
                                }
                            })), c.default.createElement("span", {className: "applet-name"}, r.name), c.default.createElement("span", {className: "divider"}), c.default.createElement("span", {className: "applet-title"}, "小程序")), this.renderStyleCard(o, r)))
                        }
                        return c.default.createElement("div", {
                            id: "" + r.app_id,
                            className: "applet-card surface-4 line-1 " + (r.cover_img ? "multiple" : "single"),
                            onClick: function () {
                                window.location.href = r.schema + "&launch_from=article_detail", window.sendUmengEventV3("mp_click", e.sendEventParams(r))
                            },
                            ref: function (t) {
                                return e.cardRef = t
                            }
                        }, r.cover_img ? c.default.createElement("div", {className: "container"}, c.default.createElement("div", {className: "cover surface-3 line-1"}, c.default.createElement("img", {
                            src: r.cover_img,
                            alt: "",
                            onError: function (e) {
                                e.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAABM0lEQVR4Xu3UwQnAMAwEQbv/dp18E3AP2teogYXh0D7P+y03LrBBjxvfAOjGGXTkDBp0JRB1/GjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCU+QErR1x29UyRGwAAAABJRU5ErkJggg=="
                            }
                        })), c.default.createElement("div", {className: "content"}, c.default.createElement("div", {className: "title font-1"}, c.default.createElement("img", {
                            src: r.icon,
                            onError: function (e) {
                                e.target.src = "" + l
                            }
                        }), c.default.createElement("span", {className: n ? "androidName" : "name"}, r.name), c.default.createElement("span", {className: "divider"}), c.default.createElement("span", {className: "applet"}, ["小", "程", "序"].join(""))), c.default.createElement("div", {
                            className: (n ? "authorName" : "author") + " font-2",
                            ref: function (t) {
                                return e.summaryRef = t
                            }
                        }, r.summary))) : c.default.createElement("div", {className: "container containerWithIcon"}, c.default.createElement("div", {className: "coverWithIcon"}, c.default.createElement("img", {
                            src: r.icon,
                            onError: function (e) {
                                e.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAlklEQVRoQ+3SQQrAIBTEUL3/da1bvUMgICXd/wHzOte3z/jBN3vIY4qJPAYyEklEKtCvJYXFs4ngdNJhIlJYPJsITicdJiKFxbOJ4HTSYSJSWDybCE4nHSYihcWzieB00mEiUlg8mwhOJx0mIoXFs4ngdNJhIlJYPJsITicdJiKFxbOJ4HTSYSJSWDybCE4nHSYihcWzF2QVwY8BPOpxAAAAAElFTkSuQmCC"
                            }
                        })), c.default.createElement("div", {className: "contentWithIcon"}, c.default.createElement("div", {className: "title"}, c.default.createElement("span", {className: n ? "androidName" : "name"}, r.name), c.default.createElement("span", {className: "divider"}), c.default.createElement("span", {className: "applet"}, ["小", "程", "序"].join(""))), c.default.createElement("div", {className: "captionWithIcon"}, r.summary)), c.default.createElement("div", {className: "btn-container"}, c.default.createElement("button", null, "进入"))))
                    }
                }]), t
            }(s.Component);
        t.default = u
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(0), l = r(c), u = n(9), d = r(u), f = n(4), p = r(f);
        n(1);
        var _ = n(2), m = r(_), h = function (e) {
            function t(e) {
                a(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {playing: !1, progress: 0, audioSrc: "", duration: 0}, n
            }

            return i(t, e), s(t, [{
                key: "control", value: function () {
                    this.state.playing ? this.refs.player.pause() : this.refs.player.play()
                }
            }, {
                key: "progress", value: function (e) {
                    var t = this.props.time;
                    0 == parseInt(t) && (t = this.state.duration);
                    var n = Math.ceil(100 * e / t) + "%";
                    this.setState({progress: n})
                }
            }, {
                key: "onPlay", value: function () {
                    this.setState({playing: !0, duration: this.refs.player.audio.duration});
                    for (var e in t.audioList) e !== this.props.id && t.audioList[e].pause();
                    send_umeng_event && send_umeng_event("sound", "detail_play", {
                        value: Page.statistics.item_id,
                        extra: {sound_id: this.props.id}
                    })
                }
            }, {
                key: "onPause", value: function () {
                    this.setState({playing: !1})
                }
            }, {
                key: "onEnded", value: function () {
                    this.setState({playing: !1, progress: 0}), this.refs.player.audio.currentTime = 0
                }
            }, {
                key: "onError", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props, n = t.title, r = t.time, a = t.content, o = (t.id, this.state),
                        i = o.playing, s = o.progress, c = o.audioSrc;
                    return l.default.createElement("div", {
                        className: i ? "musicplayer playing" : "musicplayer not-playing",
                        onClick: function () {
                            return e.control()
                        }
                    }, l.default.createElement("div", {className: "music-state"}, l.default.createElement("div", {className: "music-info"}, l.default.createElement("span", {className: "music-name"}, n), l.default.createElement("span", {className: "music-time"}, m.default.formatTime(r))), l.default.createElement("div", {className: "music-musician"}, a)), l.default.createElement("div", {
                        className: "progressbar",
                        style: {width: s}
                    }), l.default.createElement(d.default, {
                        ref: "player", src: c, onError: function (t) {
                            return e.onError()
                        }, onListen: function (t) {
                            return e.progress(t)
                        }, onPause: function () {
                            return e.onPause()
                        }, onPlay: function (t) {
                            return e.onPlay(t)
                        }, onEnded: function (t) {
                            return e.onEnded(t)
                        }
                    }))
                }
            }, {
                key: "getAudioSourceById", value: function (e) {
                    var t = this;
                    (0, p.default)("http://i.snssdk.com/audio/play/1/toutiao/mp4/" + e).then(function (e) {
                        return e.status >= 400 && ToutiaoJSBridge.call("toast", {
                            text: "音频获取失败，请重试",
                            icon_type: "icon_error"
                        }), e.json()
                    }).then(function (e) {
                        return e.data && e.data.audio_list && e.data.audio_list.audio_1 ? atob(e.data.audio_list.audio_1.main_url.replace(/\n/gi, "")) : ""
                    }).then(function (e) {
                        t.setState({audioSrc: e})
                    })
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.getAudioSourceById(this.props.id), t.audioList[this.props.id] = this.refs.player
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    t.audioList = null
                }
            }]), t
        }(c.Component);
        h.audioList = {}, t.default = h
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s);
        n(1);
        var l = function (e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)), o = navigator.userAgent;
                return n.android = o.indexOf("Android") > -1 || o.indexOf("Linux") > -1, n.isToutiao = "http://nativeapp.toutiao.com" === document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(o), n
            }

            return o(t, e), i(t, [{
                key: "componentDidMount", value: function () {
                    if (this.isToutiao) {
                        var e = {};
                        try {
                            e = JSON.parse(this.props.content) || {}
                        } catch (e) {
                            console.error(e)
                        }
                        window.sendUmengEventV3("show_column_card", {
                            group_id: window.Page.statistics.group_id,
                            column_id: e && e.column_id,
                            fee: 100 * e.price,
                            bookshelf_type: "column",
                            is_column: 1
                        }), window.__columnStatistic || (window.__columnStatistic = !0, window.sendUmengEventV3("enter_column_link", {
                            group_id: window.Page.statistics.group_id,
                            is_column: 1
                        }))
                    }
                }
            }, {
                key: "toQuery", value: function (e) {
                    return Object.keys(e).map(function (t) {
                        return [t, e[t]].join("=")
                    }).join("&")
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = {};
                    try {
                        t = JSON.parse(this.props.content) || {}
                    } catch (e) {
                        console.error(e)
                    }
                    var n = t, r = (n.prefixCls, n.title), a = n.author_description, o = n.thumb_url, i = n.sold,
                        s = n.column_id, l = n.price, u = n.share_price, d = n.distribution_user_id;
                    if (l) return null;
                    var f = {
                            column_id: s,
                            share_price: u,
                            enter_from: "click_article_recommend",
                            distribution_source: window.Page.statistics.group_id,
                            distribution_user_id: d
                        }, p = a.replace(/-.*$/, ""),
                        _ = "https://ic.snssdk.com/feoffline/column/v3/page/column.html?" + this.toQuery(f), m = {
                            title: " ",
                            url: encodeURIComponent(_),
                            hide_more: 1,
                            hide_bar: 1,
                            hide_status_bar: 1,
                            status_bar_color: "white",
                            back_button_color: "white",
                            disable_web_progressView: 1,
                            should_append_common_param: 1
                        };
                    return c.default.createElement("div", {
                        id: "column-card",
                        className: "surface-4 line-1",
                        onClick: function () {
                            if (e.isToutiao && window.ToutiaoJSBridge) {
                                window.sendUmengEventV3("click_column_link", {
                                    group_id: window.Page.statistics.group_id,
                                    column_id: t && t.column_id,
                                    fee: 100 * t.price,
                                    bookshelf_type: "column",
                                    is_column: 1
                                });
                                var n = "sslocal://webview?" + e.toQuery(m);
                                setTimeout(function () {
                                    window.location.href = n
                                }, 200)
                            } else window.location.href = "https://ic.snssdk.com/column/v2/index/column/landing/?column_id=" + s
                        }
                    }, c.default.createElement("div", {className: "container"}, c.default.createElement("div", {className: "cover surface-3 line-1"}, c.default.createElement("img", {
                        src: o,
                        alt: ""
                    }), c.default.createElement("i", {className: "column"})), c.default.createElement("div", {className: "content"}, c.default.createElement("div", {className: "title font-1"}, r), c.default.createElement("div", {className: "author font-2"}, "作者：", p), c.default.createElement("div", {className: "info " + (this.android ? "android" : "")}, c.default.createElement("span", {className: "price font-4"}, l ? l + "元" : "免费"), c.default.createElement("span", {className: "count font-3 line-1"}, i, "人已购")), c.default.createElement("div", {className: "button font-12 surface-7 " + (this.android ? "android" : "")}, "免费试读"))))
                }
            }]), t
        }(s.Component);
        l.defaultProps = {
            prefixCls: "pgc-column-card",
            url: "",
            title: "",
            author_description: "",
            price: 0,
            sold: 0,
            column_id: ""
        }, t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s);
        n(1);
        var l = function (e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)), o = navigator.userAgent;
                return n.android = o.indexOf("Android") > -1 || o.indexOf("Linux") > -1, n.isToutiao = "http://nativeapp.toutiao.com" === document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(o), n
            }

            return o(t, e), i(t, [{
                key: "componentDidMount", value: function () {
                    if (this.isToutiao) {
                        var e = {};
                        try {
                            e = JSON.parse(this.props.content) || {}
                        } catch (e) {
                            console.error(e)
                        }
                        window.sendUmengEventV3("show_community_card", {
                            group_id: window.Page.statistics.group_id,
                            community_id: e && e.community_id,
                            fee: 100 * e.price,
                            bookshelf_type: "community",
                            is_community: 1
                        }), window.__communityStatistic || (window.__communityStatistic = !0, window.sendUmengEventV3("enter_community_link", {
                            group_id: window.Page.statistics.group_id,
                            is_community: 1
                        }))
                    }
                }
            }, {
                key: "toQuery", value: function (e) {
                    return Object.keys(e).map(function (t) {
                        return [t, e[t]].join("=")
                    }).join("&")
                }
            }, {
                key: "parseNumber", value: function (e) {
                    return e > 1e4 ? (e / 1e4).toFixed(1) + "万" : e
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = {};
                    try {
                        t = JSON.parse(this.props.content) || {}
                    } catch (e) {
                        console.error(e)
                    }
                    var n = t, r = n.title, a = n.community_id, o = n.square_cover, i = n.member_count, s = n.price,
                        l = n.media_name, u = {community_id: a, enter_from: "click_article_recommend"},
                        d = "https://ic.snssdk.com/feoffline/market/v1/tpl/community/community.html?" + this.toQuery(u),
                        f = {
                            url: encodeURIComponent(d),
                            title: " ",
                            hide_more: 1,
                            hide_bar: 1,
                            hide_status_bar: 1,
                            show_load_anim: 1,
                            waiting_hide_anim: 1,
                            bounce_disable: 1,
                            use_offline: 1,
                            status_bar_color: "white",
                            back_button_color: "white",
                            disable_web_progressView: 1,
                            should_append_common_param: 1
                        };
                    return c.default.createElement("div", {
                        id: "community-card",
                        className: "surface-4 line-1",
                        onClick: function () {
                            if (e.isToutiao && window.ToutiaoJSBridge) {
                                window.sendUmengEventV3("click_community_link", {
                                    group_id: window.Page.statistics.group_id,
                                    community_id: t && t.community_id,
                                    fee: 100 * s,
                                    bookshelf_type: "community",
                                    is_community: 1
                                });
                                var n = "sslocal://webview?" + e.toQuery(f);
                                setTimeout(function () {
                                    window.location.href = n
                                }, 200)
                            } else window.location.href = "https://ic.snssdk.com/market/v1/tpl/landing/community/community.html?community_id=" + val.community_id
                        }
                    }, c.default.createElement("div", {className: "container"}, c.default.createElement("div", {className: "cover surface-3 line-1"}, c.default.createElement("img", {
                        src: "https://p3.pstatp.com/large/" + o,
                        alt: "圈子封面"
                    }), c.default.createElement("i", {className: "community"})), c.default.createElement("div", {className: "content"}, c.default.createElement("div", {className: "title font-1"}, r), c.default.createElement("div", {className: "author font-2"}, "圈主：", l), c.default.createElement("div", {className: "info " + (this.android ? "android" : "")}, c.default.createElement("span", {className: "count font-3 line-1"}, this.parseNumber(i), "成员")), c.default.createElement("div", {className: "button font-12 surface-7 " + (this.android ? "android" : "")}, "进入圈子"))))
                }
            }]), t
        }(s.Component);
        l.defaultProps = {prefixCls: "pgc-community-card", content: {}}, t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(0), l = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(c);
        n(1);
        var u = {
            BOOK_PAGE: "https://ic.snssdk.com/feoffline/novel/book/page/v1/index.html",
            CHANNEL_PAGE: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
            READER_V2: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v2/page/index.html",
            READER_V3: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v3/page/index.html"
        }, d = function (e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.enterChannel = function () {
                    location.href = n.card.channelUrl
                }, n.enterPage = function () {
                    location.href = n.card.pageUrl
                }, n.enterReader = function () {
                    location.href = n.card.readerUrl
                };
                var o = {};
                try {
                    o = JSON.parse(n.props.content) || {}
                } catch (e) {
                    console.error(e)
                }
                return n.recUrlParams = {}, n.card = {}, n.navigateFrom = "distribution_card", n.state = {content: o}, n
            }

            return o(t, e), s(t, [{
                key: "componentDidMount", value: function () {
                    this.item_id = window.Page.statistics.item_id, this.initRecParams(), this.initUrl()
                }
            }, {
                key: "initRecParams", value: function () {
                    var e = window.Page, t = e.category_name, n = void 0 === t ? "" : t, r = e.enter_from,
                        a = void 0 === r ? "" : r, o = e.statistics, s = void 0 === o ? {} : o, c = e.log_pb,
                        l = void 0 === c ? "" : c;
                    this.recUrlParams = i({}, this.recUrlParams, {
                        category_name: n,
                        rec_enter: a,
                        group_id: s.group_id,
                        log_pb: "string" != typeof l ? JSON.stringify(l) : l
                    })
                }
            }, {
                key: "initUrl", value: function () {
                    var e = this, t = this.state.content, n = t.book_id, r = t.item_id, a = t.group_id,
                        o = window.Page || {}, s = o.statistics, c = void 0 === s ? {} : s, l = {};
                    Object.keys(this.recUrlParams).forEach(function (t) {
                        l.e = encodeURIComponent(e.recUrlParams[t])
                    });
                    var d = u.BOOK_PAGE + "?" + this.toQuery(i({
                        book_id: n,
                        enter_from: this.navigateFrom,
                        from_item_id: c.group_id
                    }, l));
                    this.card.pageUrl = this.getWebviewUrl(d);
                    var f = window.client.isAndroid && window.client.isNewsArticleVersionNoLessThan("6.9.5"),
                        p = f ? u.READER_V3 : u.READER_V2;
                    this.card.readerUrl = this.getNovelReaderUrl(f, p + "?" + this.toQuery(i({
                        groupid: a,
                        item_id: r,
                        book_id: n,
                        detail_item_id: c.group_id,
                        group_id: c.item_id,
                        from_type: 3,
                        enter_from: this.navigateFrom,
                        parent_enterfrom: "novel_sale_card"
                    }, l)));
                    var _ = u.CHANNEL_PAGE + "?" + this.toQuery(i({
                        enter_from: this.navigateFrom,
                        from_item_id: c.group_id
                    }, l));
                    this.card.channelUrl = this.getWebviewUrl(_, {title: "小说频道", hide_bar: 0})
                }
            }, {
                key: "toQuery", value: function (e) {
                    return Object.keys(e).map(function (t) {
                        return [t, e[t]].join("=")
                    }).join("&")
                }
            }, {
                key: "getWebviewUrl", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = i({
                        url: encodeURIComponent(e),
                        hide_more: 1,
                        hide_bar: 1,
                        disable_web_progressView: 1,
                        should_append_common_param: 1,
                        bounce_disable: 1,
                        use_offline: 1
                    }, t);
                    return "sslocal://webview?" + this.toQuery(n)
                }
            }, {
                key: "getNovelReaderUrl", value: function (e, t) {
                    var n = e ? "sslocal://novel_reader" : "sslocal://novel", r = {
                        url: encodeURIComponent(t),
                        should_append_common_param: 1,
                        bounce_disable: 1,
                        hide_more: 1,
                        hide_bar: 1,
                        style_canvas: 1,
                        hide_back_buttonView: 1,
                        use_offline: 1
                    };
                    return n + "?" + this.toQuery(r)
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.content, t = e.thumb_url, n = e.title, r = e.author,
                        a = (e.price, e.novel_id, e.read_count, e.word_count), o = e.category, i = e.creation_status;
                    return l.default.createElement("div", {
                        class: "distribution-card",
                        onClick: this.enterReader
                    }, l.default.createElement("div", {class: "pcard-clearfix"}, l.default.createElement("div", {class: "fiction-left"}, l.default.createElement("img", {
                        class: "fiction-image",
                        src: t
                    })), l.default.createElement("div", {class: "fiction-right"}, l.default.createElement("div", {class: "pcard-button"}, "免费试读"), l.default.createElement("div", {class: "right-info"}, l.default.createElement("div", {class: "pcard-title"}, n), l.default.createElement("div", {class: "pcard-author"}, r), l.default.createElement("div", {class: "pcard-other"}, o, " ", 0 == i ? "已完结" : "连载中", " ", a, "字")))))
                }
            }]), t
        }(c.Component);
        t.default = d
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(0), l = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(c);
        n(1);
        var u = function (e) {
            function t(e) {
                a(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {status: "idle", installed: 0, progress: 0}, n
            }

            return i(t, e), s(t, [{
                key: "hasDownloader", value: function () {
                    return client.isNewsArticleVersionNoLessThan("6.1.4")
                }
            }, {
                key: "setInstalledState", value: function (e) {
                    this.setState({installed: e})
                }
            }, {
                key: "isInstalled", value: function () {
                    var e = this;
                    ToutiaoJSBridge.call("isAppInstalled", {pkg_name: this.props.pkg_name}, function (t) {
                        e.setInstalledState(1 == t.installed ? 1 : 0)
                    })
                }
            }, {
                key: "renderProgress", value: function () {
                    var e = void 0, t = this.state.progress;
                    return t <= 50 ? (e = "rotate(" + (180 + 3.6 * t) + "deg)", l.default.createElement("div", {className: "progress-ring"}, l.default.createElement("i", {className: "left"}, l.default.createElement("i", {
                        style: {
                            WebkitTransform: e,
                            transform: e
                        }
                    })))) : (e = "rotate(" + (3.6 * t - 360) + "deg)", l.default.createElement("div", {className: "progress-ring"}, l.default.createElement("i", {className: "left"}, l.default.createElement("i", null)), l.default.createElement("i", {className: "right"}, l.default.createElement("i", {
                        style: {
                            WebkitTransform: e,
                            transform: e
                        }
                    }))))
                }
            }, {
                key: "renderIcon", value: function (e) {
                    return "download_active" === e ? l.default.Children.only(l.default.createElement("div", null, this.renderProgress(), "暂停")) : "download_paused" === e ? l.default.Children.only(l.default.createElement("div", null, this.renderProgress(), "继续")) : "download_finished" === e ? l.default.Children.only(l.default.createElement("div", null, "安装")) : l.default.Children.only(l.default.createElement("div", null, l.default.createElement("i", null, ""), "下载"))
                }
            }, {
                key: "renderButton", value: function (e, t) {
                    var n = this, r = 1 == e ? "gd-button gd1-btn iconfont" : "gd-button gd2-btn iconfont";
                    return 1 == this.state.installed ? l.default.createElement("div", {
                        className: r,
                        onClick: function (e) {
                            return n.handleButton(e)
                        }
                    }, l.default.createElement("i", null, ""), "打开") : l.default.createElement("div", {
                        className: r,
                        onClick: function (e) {
                            return n.handleButton(e)
                        }
                    }, this.renderIcon(t))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props, n = t.logo, r = t.banner, a = t.name, o = t.game_type, i = t.size,
                        s = t.desc, c = t.detail, u = t.download_url_for_ios,
                        d = (t.pkg_name, t.download_url_for_android), f = this.state.status, p = void 0;
                    if (n && (p = 1), r && (p = 2), client.isIOS && u) c = u, setTimeout(function () {
                        return e.setInstalledState(0)
                    }, 0); else {
                        if (!client.isAndroid || !d) return null;
                        c = c ? "sslocal://webview?url=" + encodeURIComponent(c) : d
                    }
                    return 1 == p ? l.default.createElement("a", {
                        className: "game-downloader gd1",
                        onClick: function () {
                            return e.log("detail")
                        },
                        href: c
                    }, l.default.createElement("img", {
                        className: "gd-icon",
                        src: n
                    }), " ", this.renderButton(p, f), l.default.createElement("div", {className: "gd1-cont"}, l.default.createElement("div", {className: "gd1-cont-name"}, a), l.default.createElement("div", {className: "gd1-cont-text"}, o, " ", o ? l.default.createElement("span", {className: "gd1-cont-split"}) : "", i), l.default.createElement("div", {className: "gd1-cont-text"}, s))) : 2 == p ? l.default.createElement("a", {
                        className: "game-downloader gd2",
                        onClick: function () {
                            return e.log("detail")
                        },
                        href: c
                    }, l.default.createElement("img", {
                        className: "gd2-cover",
                        src: r
                    }), l.default.createElement("div", {className: "gd2-info"}, this.renderButton(p, f), l.default.createElement("div", {className: "gd2-cont"}, l.default.createElement("div", {className: "gd2-cont-name"}, a), l.default.createElement("div", {className: "gd2-cont-text"}, o, " ", o ? l.default.createElement("span", {className: "gd2-cont-split"}) : "", i)))) : null
                }
            }, {
                key: "subscribe", value: function () {
                    t.eventList[this.appad.id] = this.handler.bind(this), ToutiaoJSBridge.call("subscribe_app_ad", {data: this.state.appad})
                }
            }, {
                key: "unsubscribe", value: function () {
                    delete t.eventList[this.appad.id], ToutiaoJSBridge.call("unsubscribe_app_ad", {data: this.appad})
                }
            }, {
                key: "handler", value: function (e) {
                    e.current_bytes = e.current_bytes >= 0 ? e.current_bytes : 0;
                    var t = e.current_bytes / e.total_bytes;
                    t = isNaN(t) ? 0 : Math.floor(100 * t), "download_failed" === e.status && ToutiaoJSBridge.call("toast", {text: "应用下载失败"}), this.setState({
                        status: e.status,
                        progress: t
                    })
                }
            }, {
                key: "log", value: function (e) {
                    send_umeng_event(this.appad.tag, e, this.statisticsData)
                }
            }, {
                key: "handleButton", value: function (e) {
                    1 == this.state.installed ? (e.stopPropagation(), e.preventDefault(), this.log("click_open"), ToutiaoJSBridge.call("openThirdApp", {pkg_name: this.props.pkg_name}, function (e) {
                        0 == e.code && ToutiaoJSBridge.call("toast", {text: "打开应用失败，请稍后尝试"})
                    })) : client.isAndroid && this.hasDownloader() ? (e.stopPropagation(), e.preventDefault(), ToutiaoJSBridge.call("download_app_ad", {data: this.appad})) : client.isAndroid && (e.stopPropagation(), e.preventDefault(), location.href = this.appad.download_url_for_android, this.log("click_download"))
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = r(this.props, []);
                    e.type = "app", e.source = "pgc", e.tag = "article_card_app_ad", e.item_id = Page.statistics.item_id, e.media_id = Page.author.mediaId, e.log_extra = '{"rit":3,"item_id":0,"convert_id":0}', client.isIOS && e.download_url_for_ios ? e.detail = e.download_url_for_ios : client.isAndroid && e.download_url_for_android && (e.detail ? e.detail = "sslocal://webview?url=" + encodeURIComponent(e.detail) : e.detail = e.download_url_for_android, e.download_url = e.download_url_for_android), e.download_url = e.download_url_for_android, this.appad = e, this.hasDownloader() && this.subscribe(), this.isInstalled(), t.startListen || (ToutiaoJSBridge.on("app_ad_event", function (e) {
                        e = e || {};
                        var n = e.appad || {}, r = n.id;
                        t.eventList[r](e)
                    }), t.startListen = !0), this.statisticsData = {
                        value: Page.statistics.item_id,
                        extra: {
                            card_type: e.card_type,
                            app_name: encodeURIComponent(e.name),
                            pkg_name: e.pkg_name,
                            app_id: e.app_id,
                            app_category: encodeURIComponent(e.game_type),
                            media_id: Page.author.mediaId,
                            item_id: Page.statistics.item_id
                        }
                    }, this.log("show"), ToutiaoJSBridge.call("subscribe_app_ad", {data: this.appad})
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    ToutiaoJSBridge.call("unsubscribe_app_ad", {data: this.appad}), t.eventList = null
                }
            }]), t
        }(c.Component);
        u.defaultProps = {
            card_type: 0,
            card_id: 0,
            type: "game",
            logo: "http://p3.pstatp.com/large/22d30005ec3a6f01ff6a",
            banner: "http://p3.pstatp.com/large/22d30005ec3a6f01ff6a",
            name: "游戏",
            game_type: "游戏类型",
            size: "0",
            desc: "游戏描述",
            detail: "",
            pkg_name: "",
            download_url_for_android: "",
            download_url_for_ios: ""
        }, u.startListen = !1, u.eventList = {}, t.default = u
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(11), o = r(a), i = n(15), s = r(i), c = n(17), l = r(c), u = n(19), d = r(u), f = n(18), p = r(f),
            _ = n(12), m = r(_), h = n(13), v = r(h), g = n(14), y = r(g), b = n(10), w = r(b);
        t.default = {
            Audio: o.default,
            Game: s.default,
            Novel: l.default,
            Temai: d.default,
            PhoneGroup: p.default,
            ColumnCard: m.default,
            CommunityCard: v.default,
            DistributionCard: y.default,
            AppletCard: w.default
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s);
        n(1);
        var l = function (e) {
            function t() {
                return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return o(t, e), i(t, [{
                key: "render", value: function () {
                    var e = this.props, t = e.thumb_url, n = e.book_name, r = e.schema_url, a = e.abstract,
                        o = e.author, i = e.category;
                    return c.default.createElement("div", {className: "novel-card"}, c.default.createElement("a", {
                        href: r,
                        target: "_blank",
                        className: "novel-card-link"
                    }, c.default.createElement("div", {className: "novel-card-cover"}, c.default.createElement("img", {
                        className: "movie-image",
                        src: t,
                        alt: n
                    })), c.default.createElement("div", {className: "novel-card-content"}, c.default.createElement("p", {className: "novel-card-title"}, n), c.default.createElement("p", {className: "novel-card-abstract"}, a), c.default.createElement("div", {className: "novel-card-detail"}, c.default.createElement("span", {className: "novel-card-detail-item novel-card-author"}, o), c.default.createElement("span", {className: "novel-card-detail-item novel-card-category"}, i), c.default.createElement("i", {className: "novel-card-icon"}), c.default.createElement("span", {className: "novel-card-more"}, "查看更多")))))
                }
            }]), t
        }(s.Component);
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            return e ? e.replace(/&amp;/g, "&") : ""
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), l = n(0), u = r(l);
        n(1);
        var d = n(8), f = r(d), p = n(4), _ = r(p), m = n(23), h = r(m), v = function (e) {
            function t(e) {
                a(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {phone: null}, n.setConfirm = function (e) {
                    n.confirm = e
                }, n.contactDial = function (e) {
                    var t = n.props["contact-phone"], r = n.props.ai_type, a = n.props.is_smart || 0,
                        o = n.props.custom_data;
                    n.log("call", "click", t, {actualPhone: t, ai_type: r, is_smart: a, custom_data: o})
                }, n.dial = function (e) {
                    e.preventDefault();
                    var t = n.props["contact-phone"], r = n.props.ai_type, a = n.props.is_smart || 0,
                        o = n.props.custom_data;
                    n.getPhone(function (e, i) {
                        n.log("call", "click", t, {actualPhone: i, ai_type: r, is_smart: a, custom_data: o})
                    }), n.confirm && n.confirm.show()
                }, n.smartDial = function (e) {
                    e.preventDefault();
                    var t = n.props["contact-phone"], r = n.props.ai_type, a = n.props.is_smart || 0,
                        o = n.props.custom_data;
                    n.getVirtualPhone(function (e, i) {
                        n.log("call", "click", t, {
                            actualPhone: i,
                            ai_type: r,
                            is_smart: a,
                            custom_data: o
                        }), location.href = "tel:" + i
                    })
                }, n.log = function (e, t, n, r) {
                    t = t || "click";
                    var a = {
                        value: Page.statistics.item_id,
                        extra: {action_type: e, button_value: n, action_time: (new Date).getTime()}
                    };
                    "call" === e && (a.extra.button_value_show = r.actualPhone, a.extra.ai_type = r.ai_type, a.extra.is_smart = r.is_smart, a.extra.custom_data = r.custom_data), send_umeng_event("embeded_button_ad", t, a)
                }, n.logWhenShow = function (e, t) {
                    var r = n.props.ai_type, a = n.props.is_smart || 0, o = n.props.custom_data;
                    sendUmengWhenTargetShown(e, "embeded_button_ad", "show", $.extend({}, {
                        value: Page.statistics.item_id,
                        extra: {
                            action_type: "show",
                            button_value: t,
                            ai_type: r,
                            is_smart: a,
                            custom_data: o,
                            action_time: (new Date).getTime()
                        }
                    }, !0))
                }, n.getVirtualPhone = function (e) {
                    var t = n.props["contact-phone"], r = n.props.custom_data, a = n.props.call_back_url,
                        o = n.props.ai_type;
                    ToutiaoJSBridge && ToutiaoJSBridge.call("TTNetwork.commonParams", {}, function (n) {
                        var i = n.data || n;
                        i && i.device_id && $.ajax({
                            url: "http://i.snssdk.com/pgcui/get_smart_phone_dynamic_number/",
                            data: {
                                item_id: Page.statistics.item_id,
                                device_id: i.device_id,
                                user_uid: Page.author.userId,
                                ai_type: o,
                                custom_data: r,
                                callback_url: a,
                                phone_number: t
                            },
                            success: function (n) {
                                if ("success" === n.message && n.data.virtual_number) return void e(1, n.data.virtual_number);
                                e(0, t)
                            },
                            error: function (n) {
                                e(0, t)
                            }
                        })
                    })
                }, n.getPhone = function (e) {
                    var t = n, r = n.props, a = r.hid, o = r.city, i = n.props["contact-phone"];
                    if (i) {
                        var s = i.split(",");
                        if (s.length <= 1) return void n.setState({phone: i});
                        var c = s[0], l = s[1],
                            u = {hid: a, fzz: c, ext: l, city: o, cstr: (0, h.default)("" + o + a + "callcenter")},
                            d = [];
                        for (var f in u) d.push(f + "=" + u[f]);
                        var p = d.join("&");
                        (0, _.default)("http://m.leju.com/?site=api&ctl=callcenter&act=calling&" + p).then(function (e) {
                            return e.status >= 400 && ToutiaoJSBridge.call("toast", {
                                text: "电话拨打失败",
                                icon_type: "icon_error"
                            }), e.json()
                        }).then(function (e) {
                            return 1 == e.status ? e.info.fzz : null
                        }).then(function (t) {
                            e(1, t), n.setState({phone: t})
                        }).catch(function (n) {
                            e(0, t.props["contact-phone"])
                        })
                    }
                }, n.cancelPhone = function () {
                    var e = n.state.phone, t = {fzz: e, cstr: (0, h.default)(e + "callcenter")}, r = [];
                    for (var a in t) r.push(a + "=" + t[a]);
                    var o = r.join("&");
                    (0, _.default)("http://m.leju.com/?site=api&ctl=callcenter&act=cancel&" + o).then(function (e) {
                        return e.json()
                    }).then(function (e) {
                        return 1 == e.status && this.setState({phone: null}), null
                    })
                }, n
            }

            return i(t, e), c(t, [{
                key: "render", value: function () {
                    var e = this, t = this.props["contact-phone"], n = this.props["contact-name"],
                        r = this.props["book-url"], a = this.props["book-name"], o = this.props.city,
                        i = this.props.hid,
                        c = (this.props.house_type, this.props.agent_phone, this.props.is_smart || 0),
                        l = (this.props.ai_type, this.props.context), d = this.state.phone, p = 0, _ = 0, m = 0;
                    return n && t && (p++, _ = 1), r && a && (p++, m = 1), "pc" == l.platform ? null : 2 == c || o && i ? /iPhone|XiaoMi/.test(window.navigator.userAgent) || /MI/.test(window.navigator.userAgent.split("/")[1]) ? u.default.createElement("div", {
                        className: "cpg-container",
                        "button-count": p
                    }, _ ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.phoneRef = t
                        }, className: "cpg-button cpg-call", onClick: this.contactDial, href: "tel:" + t
                    }, n) : null, m ? u.default.createElement("a", {
                        className: "cpg-button cpg-link",
                        onClick: function () {
                            return e.log("url", "click", r)
                        },
                        href: "sslocal://webview?url=" + encodeURIComponent(s(r))
                    }, a) : null) : u.default.createElement("div", {
                        className: "cpg-container",
                        "button-count": p
                    }, _ ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.phoneRef = t
                        }, className: "cpg-button cpg-call", onClick: this.dial, href: "tel:" + t
                    }, n) : null, m ? u.default.createElement("a", {
                        className: "cpg-button cpg-link",
                        onClick: function () {
                            return e.log("url", "click", r)
                        },
                        href: "sslocal://webview?url=" + encodeURIComponent(s(r))
                    }, a) : null, d ? u.default.createElement(f.default, {
                        phone: d,
                        onCancel: this.cancelPhone,
                        city: o,
                        hid: i,
                        ref: this.setConfirm
                    }) : null) : 1 == c ? u.default.createElement("div", {
                        className: "cpg-container",
                        "button-count": p
                    }, _ ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.phoneRef = t
                        }, className: "cpg-button cpg-call", onClick: this.smartDial, href: "tel:" + t
                    }, n) : null, m ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.urlRef = t
                        }, className: "cpg-button cpg-link", onClick: function () {
                            return e.log("url", "click", r)
                        }, href: "sslocal://webview?url=" + encodeURIComponent(s(r))
                    }, a) : null) : u.default.createElement("div", {
                        className: "cpg-container",
                        "button-count": p
                    }, _ ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.phoneRef = t
                        }, className: "cpg-button cpg-call", onClick: this.contactDial, href: "tel:" + t
                    }, n) : null, m ? u.default.createElement("a", {
                        ref: function (t) {
                            return e.urlRef = t
                        }, className: "cpg-button cpg-link", onClick: function () {
                            return e.log("url", "click", r)
                        }, href: "sslocal://webview?url=" + encodeURIComponent(s(r))
                    }, a) : null)
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this.props["contact-phone"];
                    this.phoneRef && this.logWhenShow(this.phoneRef, e)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.state.phone && this.cancelPhone()
                }
            }]), t
        }(l.Component);
        t.default = v
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s);
        n(1);
        var l = function (e) {
            function t() {
                return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return o(t, e), i(t, [{
                key: "render", value: function () {
                    var e = this.props, t = e.charge_url, n = (e.commodity_id, e.img_url), r = e.price,
                        a = (e.slave_commodity_id, e.source), o = e.title;
                    return c.default.createElement("div", {className: "pgc-commodity"}, c.default.createElement("a", {
                        className: "pgc-commodity-link",
                        href: t
                    }, c.default.createElement("div", {className: "pgc-commodity-box"}, c.default.createElement("div", {className: "pgc-commodity-img-box"}, c.default.createElement("div", {className: "pgc-commodity-img-square"}, c.default.createElement("img", {
                        src: n,
                        alt: "特卖"
                    }))), c.default.createElement("div", {className: "pgc-commodity-info"}, c.default.createElement("h3", {className: "pgc-commodity-title"}, o), c.default.createElement("div", {className: "pgc-commodity-bar"}, c.default.createElement("span", {className: "pgc-commodity-price"}, "￥", r), c.default.createElement("span", {className: "pgc-commodity-from"}, a), c.default.createElement("span", {className: "pgc-commodity-buy"}, "购买"))))))
                }
            }]), t
        }(s.Component);
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = r(s), l = n(0), u = r(l), d = n(2), f = r(d), p = n(16), _ = r(p), m = {}, h = function () {
            function e() {
                a(this, e), this.init({
                    match: /^(tt-|pre)/i,
                    selector: ["tt-column-card", "tt-applet-card", "tt-distribution-card", "tt-community-card"],
                    context: {platform: "client"}
                })
            }

            return i(e, null, [{
                key: "getInstance", value: function () {
                    return e.instance || (e.instance = new e), e.instance
                }
            }]), i(e, [{
                key: "init", value: function (e) {
                    return this.config = o({}, this.config, e), this
                }
            }, {
                key: "registerCard", value: function (e) {
                    var t = e.tag, n = e.selector, r = e.component;
                    return t && (m[t] = r), n && (m[n] = r), this
                }
            }, {
                key: "getComponent", value: function (e) {
                    return e = e.toLowerCase(), m[e]
                }
            }, {
                key: "isCard", value: function (e) {
                    return void 0 !== m[e]
                }
            }, {
                key: "checkCardTag", value: function (e) {
                    if (e && e.nodeName) {
                        var t = this.config, n = t.match, r = t.selector;
                        if (n.test(e.nodeName)) return !0;
                        if (-1 !== r.indexOf(e.className)) return !0
                    }
                    return !1
                }
            }, {
                key: "resolveTagToComponent", value: function (e) {
                    if (e) {
                        var t = e.toLowerCase().split("-");
                        t.length > 1 && t.shift();
                        for (var n = "", r = 0, a = t.length; r < a; r++) n += f.default.firstUpper(t[r]);
                        return n
                    }
                }
            }, {
                key: "render", value: function (e) {
                    var t = this, n = void 0;
                    f.default.map(e, function (e) {
                        if (t.checkCardTag(e)) {
                            var r = f.default.buildAttrs(e), a = o({}, t.config, r);
                            t.getComponent(e.nodeName) ? (n = u.default.createElement(t.getComponent(e.nodeName), a), c.default.render(n, e)) : t.getComponent(e.className) && (n = u.default.createElement(t.getComponent(e.className), a), c.default.render(n, e))
                        }
                    })
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.config = null
                }
            }]), e
        }(), v = h.getInstance(), g = navigator.userAgent;
        ("http://nativeapp.toutiao.com" === document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(g)) && v.registerCard({
            tag: "tt-audio",
            component: _.default.Audio
        }), v.registerCard({tag: "tt-game", component: _.default.Game}), v.registerCard({
            tag: "tt-novel",
            component: _.default.Novel
        }), v.registerCard({
            tag: "tt-temai",
            component: _.default.Temai
        }), ("http://nativeapp.toutiao.com" === document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(g)) && v.registerCard({
            tag: "tt-phone-group",
            component: _.default.PhoneGroup
        }), v.registerCard({
            selector: "tt-column-card",
            component: _.default.ColumnCard
        }), v.registerCard({
            selector: "tt-community-card",
            component: _.default.CommunityCard
        }), v.registerCard({
            selector: "tt-applet-card",
            component: _.default.AppletCard
        }), v.registerCard({selector: "tt-distribution-card", component: _.default.DistributionCard}), t.default = v
    }, function (e, t) {
        !function () {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function (e, t) {
                    return e << t | e >>> 32 - t
                }, rotr: function (e, t) {
                    return e << 32 - t | e >>> t
                }, endian: function (e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                }, randomBytes: function (e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                }, bytesToWords: function (e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                }, wordsToBytes: function (e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                }, bytesToHex: function (e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("")
                }, hexToBytes: function (e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t
                }, bytesToBase64: function (e) {
                    for (var n = [], r = 0; r < e.length; r += 3) for (var a = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(a >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                }, base64ToBytes: function (e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, a = 0; r < e.length; a = ++r % 4) 0 != a && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | t.indexOf(e.charAt(r)) >>> 6 - 2 * a);
                    return n
                }
            };
            e.exports = n
        }()
    }, function (e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }

        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        e.exports = function (e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer)
        }
    }, function (e, t, n) {
        !function () {
            var t = n(21), r = n(3).utf8, a = n(22), o = n(3).bin, i = function (e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var s = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
                s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
                for (var _ = i._ff, m = i._gg, h = i._hh, v = i._ii, p = 0; p < s.length; p += 16) {
                    var g = l, y = u, b = d, w = f;
                    l = _(l, u, d, f, s[p + 0], 7, -680876936), f = _(f, l, u, d, s[p + 1], 12, -389564586), d = _(d, f, l, u, s[p + 2], 17, 606105819), u = _(u, d, f, l, s[p + 3], 22, -1044525330), l = _(l, u, d, f, s[p + 4], 7, -176418897), f = _(f, l, u, d, s[p + 5], 12, 1200080426), d = _(d, f, l, u, s[p + 6], 17, -1473231341), u = _(u, d, f, l, s[p + 7], 22, -45705983), l = _(l, u, d, f, s[p + 8], 7, 1770035416), f = _(f, l, u, d, s[p + 9], 12, -1958414417), d = _(d, f, l, u, s[p + 10], 17, -42063), u = _(u, d, f, l, s[p + 11], 22, -1990404162), l = _(l, u, d, f, s[p + 12], 7, 1804603682), f = _(f, l, u, d, s[p + 13], 12, -40341101), d = _(d, f, l, u, s[p + 14], 17, -1502002290), u = _(u, d, f, l, s[p + 15], 22, 1236535329), l = m(l, u, d, f, s[p + 1], 5, -165796510), f = m(f, l, u, d, s[p + 6], 9, -1069501632), d = m(d, f, l, u, s[p + 11], 14, 643717713), u = m(u, d, f, l, s[p + 0], 20, -373897302), l = m(l, u, d, f, s[p + 5], 5, -701558691), f = m(f, l, u, d, s[p + 10], 9, 38016083), d = m(d, f, l, u, s[p + 15], 14, -660478335), u = m(u, d, f, l, s[p + 4], 20, -405537848), l = m(l, u, d, f, s[p + 9], 5, 568446438), f = m(f, l, u, d, s[p + 14], 9, -1019803690), d = m(d, f, l, u, s[p + 3], 14, -187363961), u = m(u, d, f, l, s[p + 8], 20, 1163531501), l = m(l, u, d, f, s[p + 13], 5, -1444681467), f = m(f, l, u, d, s[p + 2], 9, -51403784), d = m(d, f, l, u, s[p + 7], 14, 1735328473), u = m(u, d, f, l, s[p + 12], 20, -1926607734), l = h(l, u, d, f, s[p + 5], 4, -378558), f = h(f, l, u, d, s[p + 8], 11, -2022574463), d = h(d, f, l, u, s[p + 11], 16, 1839030562), u = h(u, d, f, l, s[p + 14], 23, -35309556), l = h(l, u, d, f, s[p + 1], 4, -1530992060), f = h(f, l, u, d, s[p + 4], 11, 1272893353), d = h(d, f, l, u, s[p + 7], 16, -155497632), u = h(u, d, f, l, s[p + 10], 23, -1094730640), l = h(l, u, d, f, s[p + 13], 4, 681279174), f = h(f, l, u, d, s[p + 0], 11, -358537222), d = h(d, f, l, u, s[p + 3], 16, -722521979), u = h(u, d, f, l, s[p + 6], 23, 76029189), l = h(l, u, d, f, s[p + 9], 4, -640364487), f = h(f, l, u, d, s[p + 12], 11, -421815835), d = h(d, f, l, u, s[p + 15], 16, 530742520), u = h(u, d, f, l, s[p + 2], 23, -995338651), l = v(l, u, d, f, s[p + 0], 6, -198630844), f = v(f, l, u, d, s[p + 7], 10, 1126891415), d = v(d, f, l, u, s[p + 14], 15, -1416354905), u = v(u, d, f, l, s[p + 5], 21, -57434055), l = v(l, u, d, f, s[p + 12], 6, 1700485571), f = v(f, l, u, d, s[p + 3], 10, -1894986606), d = v(d, f, l, u, s[p + 10], 15, -1051523), u = v(u, d, f, l, s[p + 1], 21, -2054922799), l = v(l, u, d, f, s[p + 8], 6, 1873313359), f = v(f, l, u, d, s[p + 15], 10, -30611744), d = v(d, f, l, u, s[p + 6], 15, -1560198380), u = v(u, d, f, l, s[p + 13], 21, 1309151649), l = v(l, u, d, f, s[p + 4], 6, -145523070), f = v(f, l, u, d, s[p + 11], 10, -1120210379), d = v(d, f, l, u, s[p + 2], 15, 718787259), u = v(u, d, f, l, s[p + 9], 21, -343485551), l = l + g >>> 0, u = u + y >>> 0, d = d + b >>> 0, f = f + w >>> 0
                }
                return t.endian([l, u, d, f])
            };
            i._ff = function (e, t, n, r, a, o, i) {
                var s = e + (t & n | ~t & r) + (a >>> 0) + i;
                return (s << o | s >>> 32 - o) + t
            }, i._gg = function (e, t, n, r, a, o, i) {
                var s = e + (t & r | n & ~r) + (a >>> 0) + i;
                return (s << o | s >>> 32 - o) + t
            }, i._hh = function (e, t, n, r, a, o, i) {
                var s = e + (t ^ n ^ r) + (a >>> 0) + i;
                return (s << o | s >>> 32 - o) + t
            }, i._ii = function (e, t, n, r, a, o, i) {
                var s = e + (n ^ (t | ~r)) + (a >>> 0) + i;
                return (s << o | s >>> 32 - o) + t
            }, i._blocksize = 16, i._digestsize = 16, e.exports = function (e, n) {
                if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(i(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
            }
        }()
    }, function (e, t, n) {
        "use strict";

        function r() {
        }

        function a(e, t) {
            var n, a, o, i, s = D;
            for (i = arguments.length; i-- > 2;) I.push(arguments[i]);
            for (t && null != t.children && (I.length || I.push(t.children), delete t.children); I.length;) if ((a = I.pop()) && void 0 !== a.pop) for (i = a.length; i--;) I.push(a[i]); else "boolean" == typeof a && (a = null), (o = "function" != typeof e) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (o = !1)), o && n ? s[s.length - 1] += a : s === D ? s = [a] : s.push(a), n = o;
            var c = new r;
            return c.nodeName = e, c.children = s, c.attributes = null == t ? void 0 : t, c.key = null == t ? void 0 : t.key, void 0 !== U.vnode && U.vnode(c), c
        }

        function o(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function i(e, t) {
            return a(e.nodeName, o(o({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }

        function s(e) {
            !e._dirty && (e._dirty = !0) && 1 == L.push(e) && (U.debounceRendering || M)(c)
        }

        function c() {
            var e, t = L;
            for (L = []; e = t.pop();) e._dirty && C(e)
        }

        function l(e, t, n) {
            return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && u(e, t.nodeName) : n || e._componentConstructor === t.nodeName
        }

        function u(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function d(e) {
            var t = o({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
            return t
        }

        function f(e, t) {
            var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
            return n.normalizedNodeName = e, n
        }

        function p(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function _(e, t, n, r, a) {
            if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) n && n(null), r && r(e); else if ("class" !== t || a) if ("style" === t) {
                if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                    if ("string" != typeof n) for (var o in n) o in r || (e.style[o] = "");
                    for (var o in r) e.style[o] = "number" == typeof r[o] && !1 === R.test(o) ? r[o] + "px" : r[o]
                }
            } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
                var i = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, h, i) : e.removeEventListener(t, h, i), (e._listeners || (e._listeners = {}))[t] = r
            } else if ("list" !== t && "type" !== t && !a && t in e) m(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t); else {
                var s = a && t !== (t = t.replace(/^xlink:?/, ""));
                null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
            } else e.className = r || ""
        }

        function m(e, t, n) {
            try {
                e[t] = n
            } catch (e) {
            }
        }

        function h(e) {
            return this._listeners[e.type](U.event && U.event(e) || e)
        }

        function v() {
            for (var e; e = F.pop();) U.afterMount && U.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function g(e, t, n, r, a, o) {
            V++ || (B = null != a && void 0 !== a.ownerSVGElement, W = null != e && !("__preactattr_" in e));
            var i = y(e, t, n, r, o);
            return a && i.parentNode !== a && a.appendChild(i), --V || (W = !1, o || v()), i
        }

        function y(e, t, n, r, a) {
            var o = e, i = B;
            if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || a) ? e.nodeValue != t && (e.nodeValue = t) : (o = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(o, e), w(e, !0))), o.__preactattr_ = !0, o;
            var s = t.nodeName;
            if ("function" == typeof s) return N(e, t, n, r);
            if (B = "svg" === s || "foreignObject" !== s && B, s = String(s), (!e || !u(e, s)) && (o = f(s, B), e)) {
                for (; e.firstChild;) o.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(o, e), w(e, !0)
            }
            var c = o.firstChild, l = o.__preactattr_, d = t.children;
            if (null == l) {
                l = o.__preactattr_ = {};
                for (var p = o.attributes, _ = p.length; _--;) l[p[_].name] = p[_].value
            }
            return !W && d && 1 === d.length && "string" == typeof d[0] && null != c && void 0 !== c.splitText && null == c.nextSibling ? c.nodeValue != d[0] && (c.nodeValue = d[0]) : (d && d.length || null != c) && b(o, d, n, r, W || null != l.dangerouslySetInnerHTML), k(o, t.attributes, l), B = i, o
        }

        function b(e, t, n, r, a) {
            var o, i, s, c, u, d = e.childNodes, f = [], _ = {}, m = 0, h = 0, v = d.length, g = 0,
                b = t ? t.length : 0;
            if (0 !== v) for (var E = 0; E < v; E++) {
                var k = d[E], x = k.__preactattr_, S = b && x ? k._component ? k._component.__key : x.key : null;
                null != S ? (m++, _[S] = k) : (x || (void 0 !== k.splitText ? !a || k.nodeValue.trim() : a)) && (f[g++] = k)
            }
            if (0 !== b) for (var E = 0; E < b; E++) {
                c = t[E], u = null;
                var S = c.key;
                if (null != S) m && void 0 !== _[S] && (u = _[S], _[S] = void 0, m--); else if (!u && h < g) for (o = h; o < g; o++) if (void 0 !== f[o] && l(i = f[o], c, a)) {
                    u = i, f[o] = void 0, o === g - 1 && g--, o === h && h++;
                    break
                }
                u = y(u, c, n, r), s = d[E], u && u !== e && u !== s && (null == s ? e.appendChild(u) : u === s.nextSibling ? p(s) : e.insertBefore(u, s))
            }
            if (m) for (var E in _) void 0 !== _[E] && w(_[E], !1);
            for (; h <= g;) void 0 !== (u = f[g--]) && w(u, !1)
        }

        function w(e, t) {
            var n = e._component;
            n ? P(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), E(e))
        }

        function E(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                w(e, !0), e = t
            }
        }

        function k(e, t, n) {
            var r;
            for (r in n) t && null != t[r] || null == n[r] || _(e, r, n[r], n[r] = void 0, B);
            for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || _(e, r, n[r], n[r] = t[r], B)
        }

        function x(e) {
            var t = e.constructor.name;
            (H[t] || (H[t] = [])).push(e)
        }

        function S(e, t, n) {
            var r, a = H[e.name];
            if (e.prototype && e.prototype.render ? (r = new e(t, n), T.call(r, t, n)) : (r = new T(t, n), r.constructor = e, r.render = O), a) for (var o = a.length; o--;) if (a[o].constructor === e) {
                r.nextBase = a[o].nextBase, a.splice(o, 1);
                break
            }
            return r
        }

        function O(e, t, n) {
            return this.constructor(e, n)
        }

        function j(e, t, n, r, a) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === U.syncComponentUpdates && e.base ? s(e) : C(e, 1, a)), e.__ref && e.__ref(e))
        }

        function C(e, t, n, r) {
            if (!e._disable) {
                var a, i, s, c = e.props, l = e.state, u = e.context, f = e.prevProps || c, p = e.prevState || l,
                    _ = e.prevContext || u, m = e.base, h = e.nextBase, y = m || h, b = e._component, E = !1;
                if (m && (e.props = f, e.state = p, e.context = _, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, l, u) ? E = !0 : e.componentWillUpdate && e.componentWillUpdate(c, l, u), e.props = c, e.state = l, e.context = u), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !E) {
                    a = e.render(c, l, u), e.getChildContext && (u = o(o({}, u), e.getChildContext()));
                    var k, x, O = a && a.nodeName;
                    if ("function" == typeof O) {
                        var N = d(a);
                        i = b, i && i.constructor === O && N.key == i.__key ? j(i, N, 1, u, !1) : (k = i, e._component = i = S(O, N, u), i.nextBase = i.nextBase || h, i._parentComponent = e, j(i, N, 0, u, !1), C(i, 1, n, !0)), x = i.base
                    } else s = y, k = b, k && (s = e._component = null), (y || 1 === t) && (s && (s._component = null), x = g(s, a, u, n || !m, y && y.parentNode, !0));
                    if (y && x !== y && i !== b) {
                        var T = y.parentNode;
                        T && x !== T && (T.replaceChild(x, y), k || (y._component = null, w(y, !1)))
                    }
                    if (k && P(k), e.base = x, x && !r) {
                        for (var A = e, I = e; I = I._parentComponent;) (A = I).base = x;
                        x._component = A, x._componentConstructor = A.constructor
                    }
                }
                if (!m || n ? F.unshift(e) : E || (e.componentDidUpdate && e.componentDidUpdate(f, p, _), U.afterUpdate && U.afterUpdate(e)), null != e._renderCallbacks) for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                V || r || v()
            }
        }

        function N(e, t, n, r) {
            for (var a = e && e._component, o = a, i = e, s = a && e._componentConstructor === t.nodeName, c = s, l = d(t); a && !c && (a = a._parentComponent);) c = a.constructor === t.nodeName;
            return a && c && (!r || a._component) ? (j(a, l, 3, n, r), e = a.base) : (o && !s && (P(o), e = i = null), a = S(t.nodeName, l, n), e && !a.nextBase && (a.nextBase = e, i = null), j(a, l, 1, n, r), e = a.base, i && e !== i && (i._component = null, w(i, !1))), e
        }

        function P(e) {
            U.beforeUnmount && U.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? P(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, p(t), x(e), E(t)), e.__ref && e.__ref(null)
        }

        function T(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
        }

        function A(e, t, n) {
            return g(n, e, {}, !1, t, !1)
        }

        n.d(t, "a", function () {
            return a
        }), n.d(t, "d", function () {
            return i
        }), n.d(t, "e", function () {
            return T
        }), n.d(t, "c", function () {
            return A
        }), n.d(t, "b", function () {
            return U
        });
        var U = {}, I = [], D = [],
            M = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
            R = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, L = [], F = [], V = 0, B = !1, W = !1, H = {};
        o(T.prototype, {
            setState: function (e, t) {
                var n = this.state;
                this.prevState || (this.prevState = o({}, n)), o(n, "function" == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), s(this)
            }, forceUpdate: function (e) {
                e && (this._renderCallbacks = this._renderCallbacks || []).push(e), C(this, 2)
            }, render: function () {
            }
        })
    }, function (e, t, n) {
        (function (t) {
            !function (n) {
                function r() {
                }

                function a(e, t) {
                    return function () {
                        e.apply(t, arguments)
                    }
                }

                function o(e) {
                    if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
                }

                function i(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    if (0 === e._state) return void e._deferreds.push(t);
                    e._handled = !0, o._immediateFn(function () {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null === n) return void(1 === e._state ? s : c)(t.promise, e._value);
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void c(t.promise, e)
                        }
                        s(t.promise, r)
                    })
                }

                function s(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof o) return e._state = 3, e._value = t, void l(e);
                            if ("function" == typeof n) return void d(a(n, t), e)
                        }
                        e._state = 1, e._value = t, l(e)
                    } catch (t) {
                        c(e, t)
                    }
                }

                function c(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
                        e._handled || o._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function d(e, t) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, s(t, e))
                        }, function (e) {
                            n || (n = !0, c(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, c(t, e)
                    }
                }

                var f = setTimeout;
                o.prototype.catch = function (e) {
                    return this.then(null, e)
                }, o.prototype.then = function (e, t) {
                    var n = new this.constructor(r);
                    return i(this, new u(e, t, n)), n
                }, o.all = function (e) {
                    return new o(function (t, n) {
                        function r(e, i) {
                            try {
                                if (i && ("object" == typeof i || "function" == typeof i)) {
                                    var s = i.then;
                                    if ("function" == typeof s) return void s.call(i, function (t) {
                                        r(e, t)
                                    }, n)
                                }
                                a[e] = i, 0 == --o && t(a)
                            } catch (e) {
                                n(e)
                            }
                        }

                        if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                        var a = Array.prototype.slice.call(e);
                        if (0 === a.length) return t([]);
                        for (var o = a.length, i = 0; i < a.length; i++) r(i, a[i])
                    })
                }, o.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) {
                        t(e)
                    })
                }, o.reject = function (e) {
                    return new o(function (t, n) {
                        n(e)
                    })
                }, o.race = function (e) {
                    return new o(function (t, n) {
                        for (var r = 0, a = e.length; r < a; r++) e[r].then(t, n)
                    })
                }, o._immediateFn = "function" == typeof t && function (e) {
                    t(e)
                } || function (e) {
                    f(e, 0)
                }, o._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, o._setImmediateFn = function (e) {
                    o._immediateFn = e
                }, o._setUnhandledRejectionFn = function (e) {
                    o._unhandledRejectionFn = e
                }, void 0 !== e && e.exports ? e.exports = o : n.Promise || (n.Promise = o)
            }(this)
        }).call(t, n(30).setImmediate)
    }, function (e, t, n) {
        "use strict";

        function r() {
        }

        var a = n(28);
        e.exports = function () {
            function e(e, t, n, r, o, i) {
                if (i !== a) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }

            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function (e, t, n) {
        e.exports = n(26)()
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        (function (e, t) {
            !function (e, n) {
                "use strict";

                function r(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {callback: e, args: t};
                    return l[c] = r, s(c), c++
                }

                function a(e) {
                    delete l[e]
                }

                function o(e) {
                    var t = e.callback, r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }

                function i(e) {
                    if (u) setTimeout(i, 0, e); else {
                        var t = l[e];
                        if (t) {
                            u = !0;
                            try {
                                o(t)
                            } finally {
                                a(e), u = !1
                            }
                        }
                    }
                }

                if (!e.setImmediate) {
                    var s, c = 1, l = {}, u = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? function () {
                        s = function (e) {
                            t.nextTick(function () {
                                i(e)
                            })
                        }
                    }() : function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0, n = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? function () {
                        var t = "setImmediate$" + Math.random() + "$", n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && i(+n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function (n) {
                            e.postMessage(t + n, "*")
                        }
                    }() : e.MessageChannel ? function () {
                        var e = new MessageChannel;
                        e.port1.onmessage = function (e) {
                            i(e.data)
                        }, s = function (t) {
                            e.port2.postMessage(t)
                        }
                    }() : d && "onreadystatechange" in d.createElement("script") ? function () {
                        var e = d.documentElement;
                        s = function (t) {
                            var n = d.createElement("script");
                            n.onreadystatechange = function () {
                                i(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }() : function () {
                        s = function (e) {
                            setTimeout(i, 0, e)
                        }
                    }(), f.setImmediate = r, f.clearImmediate = a
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(t, n(6), n(5))
    }, function (e, t, n) {
        (function (e) {
            function r(e, t) {
                this._id = e, this._clearFn = t
            }

            var a = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;
            t.setTimeout = function () {
                return new r(o.call(setTimeout, a, arguments), clearTimeout)
            }, t.setInterval = function () {
                return new r(o.call(setInterval, a, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function (e) {
                e && e.close()
            }, r.prototype.unref = r.prototype.ref = function () {
            }, r.prototype.close = function () {
                this._clearFn.call(a, this._id)
            }, t.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(29), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(t, n(6))
    }, function (e, t, n) {
        e.exports = n(7)
    }])
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        JI5I: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("qzSU"),
                    r = (Page.statistics.group_id, Page.statistics.item_id, e.type, e.card_order_id, e.card_product_id, e.log_extra, JSON.parse(e.log_extra || "{}"));
                r.lianchi_order_id = e.card_order_id, r.lianchi_product_id = e.card_product_id;
                var a = {
                    value: JSON.parse(e.log_extra || "{}").cid,
                    extra: {is_ad_event: 1, refer: "card", log_extra: JSON.stringify(r) || ""}
                };
                e.grade && 1 === e.grade.length && (e.grade += ".0"), e.renderLabel = function () {
                    return e.label
                }, e.getLevelText = function () {
                    return e.level ? '<span class="level half-pixel-border-base">' + e.level + "</span>" : ""
                }, e.getPriceText = function () {
                    var t = parseInt(e.price, 10);
                    return t > 0 ? '<span class="price">￥' + t + '</span><span class="price-from">起</span>' : 0 === t ? '<span class="price price-free">免费</span>' : '<span class="price-from">更多旅游产品</span>'
                };
                var o = $(t({data: e}));
                o.on("click", ".button", function (t) {
                    var n = JSON.parse(JSON.stringify(a));
                    t.stopPropagation(), t.target.className.indexOf("card__btn") > -1 ? n.extra.refer = "more_button" : n.extra.refer = "card_other", send_umeng_event("textdetail_ad", "click", n), e.open_url ? window.location.href = e.open_url : window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.web_url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(o), $("footer").append(o), sendUmengWhenTargetShown(o.get(0), "textdetail_ad", "show", a, !0)
            }

            e.exports = r
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("JI5I");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "3c_jd_card" === e.type && r(e)
                    })
                })
            }()
        }, qzSU: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div>\n    <div class="pcard button pcard-clearfix site">\n        <div class="top pcard-vertical-bottom-border">\n            <span class="trigger half-pixel-border-base">' + (null == (__t = data.trigger) ? "" : __t) + '</span><span class="source">' + (null == (__t = data.source) ? "" : __t) + '</span>\n        </div>\n        <div class="main">\n            <img class="card-pic" src="' + (null == (__t = data.image_url) ? "" : __t) + '"/>\n            <div class="content">\n                <div class="name">\n                    <span>' + (null == (__t = data.title) ? "" : __t) + '</span>\n                </div>\n                <div class="grade">\n                    ' + (null == (__t = data.renderLabel()) ? "" : __t) + '\n                </div>\n                <div class="cost">\n                    ' + (null == (__t = data.getPriceText()) ? "" : __t) + '\n                    <button class="card__btn red-pcard-button"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
                return __p
            }
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        EFki: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("J37Y"), r = JSON.parse(e.log_extra || "{}");
                r.lianchi_order_id = e.card_order_id, r.lianchi_product_id = e.card_product_id;
                var a = {
                    value: JSON.parse(e.log_extra || "{}").cid,
                    extra: {is_ad_event: 1, refer: "card", log_extra: JSON.stringify(r) || ""}
                }, o = function () {
                    for (var t = e.grade, n = "", r = 1; r <= 5; r++) n += t >= r ? '<div class="star full"></div>' : t - r + 1 > 0 ? '<div class="star empty">\n          <div class="full" style="width: ' + 12 * (t - r + 1) + 'px"></div>\n        </div>' : '<div class="star empty"></div>';
                    return n
                }, c = function () {
                    var t = o();
                    return t += '<div class="level right">' + e.level + "</div>"
                };
                e.renderSecondLine = function () {
                    return e.grade && e.level ? c() : e.grade ? o() : e.level && e.label ? '<div class="level left">' + e.level + '</div><div class="label">' + e.label + "</div>" : e.label ? '<div class="label">' + e.label + "</div>" : '<div class="label">系统推荐</div>'
                }, e.renderThirdLine = function () {
                    return s ? e.price ? '<div class="price-left">\n          <div class="price">￥' + e.price + '</div><div class="label-qi">起</div>\n        </div>' : e.description ? '<div class="description">' + e.description + "</div>" : void 0 : e.price && e.value ? '<div class="price-left">\n          <div class="price">￥' + e.price + '</div>\n          <div class="label-qi">起</div>\n          <div class="value">原价￥' + e.value + "</div>\n        </div>" : e.price && e.discount ? '<div class="price-left">\n          <div class="price">￥' + e.price + '</div>\n          <div class="label-qi">起</div>\n          <div class="discount">' + e.discount + "折</div>\n        </div>" : e.price && e.saving ? '<div class="price-left">\n          <div class="price">￥' + e.price + '</div>\n          <div class="label-qi">起</div>\n          <div class="saving">已减￥' + e.saving + "</div>\n        </div>" : e.description ? '<div class="description">' + e.description + "</div>" : '<div class="description">更多该产品信息</div>'
                }, e.renderBtn = function () {
                    return i ? '<button class="card__btn red-pcard-button">' + e.btn_text + "</button>" : '<button class="card__btn red-pcard-button andr">' + e.btn_text + "</button>"
                };
                var l = $(t({data: e}));
                l.on("click", ".button", function (t) {
                    var n = JSON.parse(JSON.stringify(a));
                    t.stopPropagation(), -1 === t.target.className.indexOf("card__btn") ? n.extra.refer = "card_other" : n.extra.refer = "card_button", send_umeng_event("textdetail_ad", "click", n), e.open_url ? window.location.href = e.open_url : window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.web_url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(l), $("footer").append(l), sendUmengWhenTargetShown(l.get(0), "textdetail_ad", "show", a, !0)
            }

            var a = navigator.userAgent, o = window.screen, i = /(iPhone|iOS)/i.test(a);
            window.isIos = i;
            var s = i && 568 == o.height && 320 == o.width;
            e.exports = r
        }, J37Y: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div>\n    <div class="pcard button pcard-clearfix article-common">\n        <div class="top pcard-vertical-bottom-border">\n            <span class="trigger half-pixel-border-base">' + (null == (__t = data.trigger) ? "" : __t) + '</span><span class="source">' + (null == (__t = data.source) ? "" : __t) + '</span>\n        </div>\n        <div class="main">\n            <img class="card-pic" src="' + (null == (__t = data.image_url) ? "" : __t) + '"/>\n            <div class="content">\n                <div class="name">\n                    <span>' + (null == (__t = data.title) ? "" : __t) + '</span>\n                </div>\n                <div class="grade">\n                    ' + (null == (__t = data.renderSecondLine()) ? "" : __t) + '\n                </div>\n                <div class="cost">\n                    ' + (null == (__t = data.renderThirdLine()) ? "" : __t) + "\n                    " + (null == (__t = data.renderBtn()) ? "" : __t) + "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("EFki");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "article_card_common" === e.type && r(e)
                    })
                })
            }()
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        idzm: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard auto-dealer auto-dealer-' + (null == (__t = data.card_pos) ? "" : __t) + '">\n    <div class="pcard-caption">\n        <span class="pcard-h14 pcard-w1">相关车型</span>\n        <span class="pcard-h14 pcard-w3 pcard-vr icon-vr width16"></span>\n        <span class="pcard-h14 pcard-w3">数据来源于懂车帝App</span>\n    </div>\n    <div class="pcard-container pcard-vertical-top-border">\n        <div class="series-wrap j-motor-form-head">\n            <img src="' + (null == (__t = data.cover) ? "" : __t) + '" class="auto-image no-bg" alt="' + (null == (__t = data.series_name) ? "" : __t) + '的图片" />\n            <div class="series-info">\n                <h4 class="name-wrap">\n                    <span class="pcard-h16 pcard-w1 pcard-o1 pcard-bold">' + (null == (__t = data.series_name) ? "" : __t) + "</span>\n                    ", data.dealer_tag && (__p += '\n                    <span class="dealer-tag dealer-tag-' + (null == (__t = data.dealer_tag) ? "" : __t) + '">' + (null == (__t = data.dealerTagText) ? "" : __t) + "</span>\n                    "), __p += '\n                </h4>\n                <div>\n                    <p class="pcard-w1 n-discounts">\n                        ', data.discount_tag ? __p += "" + (null == (__t = data.discount_tag.text) ? "" : __t) : __p += "" + (null == (__t = data.price) ? "" : __t), __p += '\n                    </p>\n                </div>\n            </div>\n            <button type="button" style="display: none;" class="pcard-button j-series-info-btn red-pcard-button">' + (null == (__t = data.text1 || "查看更多") ? "" : __t) + '</button>\n        </div>\n        <div class="form-wrap j-motor-form-body">\n            <div class="input-wrap">\n                <input type="tel" class="phone-input pcard-w2 pcard-h14 j-motor-form-mobile" name="userMobile" maxlength="11" placeholder="输入您的手机号" />\n                <button class="submit-btn pcard-button red-pcard-button j-motor-form-btn">' + (null == (__t = data.text2 || "询底价") ? "" : __t) + '</button>\n            </div>\n            <span style="display: none;" class="phone-tip pcard-w4 pcard-h12 j-motor-phone-tip">请输入正确的手机号</span>\n            <label class="agree-wrap" for="motor-form-agree-' + (null == (__t = data.pos) ? "" : __t) + '">\n                <input class="form-checkbox" type="checkbox" id="motor-form-agree-' + (null == (__t = data.pos) ? "" : __t) + '" name="userAgree" checked="checked" />\n                <i class="pcard-icon icon-cb"></i>\n                <span class="pcard-w1 pcard-h12">同意<a class="pcard-w1 pcard-h12" href="sslocal://webview?url=http%3A%2F%2Fi.snssdk.com%2Fmotor%2Fugc%2Fstatement.html&hide_bar=1">《个人信息保护声明》</a></span>\n            </label>\n        </div>\n    </div>\n</div>\n';
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("wQjv");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        var t = e.type;
                        "auto_dealer" === t || "new_auto_dealer" === t ? r(e) : console.log(e)
                    })
                })
            }()
        }, tW6Z: function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = Object.assign({}, {extra: e}), o = null, i = null;
                if (t.log_extra) {
                    try {
                        i = JSON.parse(t.log_extra || "{}")
                    } catch (e) {
                        console.error(e), i = {}
                    }
                    o = Object.assign({}, r, {
                        value: i.cid || "",
                        extra: a({
                            is_ad_event: 1,
                            refer: "card",
                            log_extra: t.log_extra,
                            item_id: e.statistics.item_id,
                            card_type: t.type,
                            card_id: t.id
                        }, n)
                    })
                }
                return {
                    adLogClick: function (e) {
                        o && (o.extra = Object.assign({}, o.extra, e), send_umeng_event("textdetail_ad", "click", o), console.log("send ad click statistics", o))
                    }, adLogShow: function (e, t) {
                        e && o && (o.extra = Object.assign({}, o.extra, t), sendUmengWhenTargetShown(e, "textdetail_ad", "show", o, !0), console.log("send ad show statistics", o))
                    }, update: function (t) {
                        if (t.log_extra) {
                            try {
                                i = JSON.parse(t.log_extra || "{}")
                            } catch (e) {
                                console.error(e), i = {}
                            }
                            o = Object.assign({}, r, {
                                value: i.cid || "",
                                extra: a({
                                    is_ad_event: 1,
                                    refer: "card",
                                    log_extra: t.log_extra,
                                    item_id: e.statistics.item_id,
                                    card_type: t.type,
                                    card_id: t.id
                                }, n)
                            })
                        }
                    }
                }
            }

            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            e.exports = r
        }, wQjv: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = $("article > div > p"), r = t.length, i = n("idzm");
                window._auto_dealer_start_render = Date.now();
                var s = new l(Page, {}, {}), u = {
                    page_id: "page_detail",
                    data_from: "motor_media",
                    group_id: Page.statistics.group_id || "",
                    media_id: Page.author.mediaId || "",
                    media_name: Page.author.name || "",
                    article_type: Page.article.type || "",
                    card_type: e.type || "",
                    city_type: e.city_type || "",
                    device_id: 0,
                    extra_params: JSON.stringify({})
                };
                switch (getCommonParams(function (e) {
                    u.device_id = e.device_id
                }), e.type) {
                    case"auto_dealer":
                        var d = a(e.data, i);
                        d ? (s && s.update(e.data), o(d, e.data, "bottom", u, s), $("footer .footer-cards-container").length > 0 ? $("footer .footer-cards-container").prepend(d) : $("footer").prepend(d), needCleanDoms.push(d), c(d, e.data, "bottom", u, s)) : console.error("motor: template is not render", JSON.stringify(e.data));
                        break;
                    case"new_auto_dealer":
                        e.data.footer && e.data.footer.length && e.data.footer.map(function (t, n) {
                            var r = a(t, i);
                            r ? (e && e.data && !e.data.log_extra && (e.data.log_extra = e.log_extra), s && s.update(e.data), o(r, t, "bottom", u, s), $("footer .footer-cards-container").length > 0 ? $("footer .footer-cards-container").prepend(r) : $("footer").prepend(r), needCleanDoms.push(r), c(r, t, "bottom", u, s)) : console.error("motor: template is not render", JSON.stringify(t))
                        }), e.data.article && e.data.article.length && e.data.article.map(function (n, l) {
                            var d = n.pos;
                            n.pos > r && (d = Math.ceil(r / 2));
                            var f = $(t[d - 1]);
                            if (1 !== d && d !== r && !f.hasClass("pgc-img-caption")) {
                                var p = a(n, i);
                                p ? (e && e.data && !e.data.log_extra && (e.data.log_extra = e.log_extra), s && s.update(e.data), o(p, n, "middle", u, s), f.after(p), needCleanDoms.push(p), c(p, n, "middle", u, s)) : console.error("motor: template is not render", JSON.stringify(n))
                            }
                        })
                }
            }

            function a(e, t) {
                var n = ["", "降价", "热门", "新上市"];
                return e.dealerTagText = n[e.dealer_tag] || "", e.ab_test = e.ab_test || [], e.price_status = 1, /暂无优惠/.test(e.price) ? e.price_status = 3 : /暂无报价/.test(e.price) ? e.price_status = 0 : /报价优惠/.test(e.price) && (e.price_status = 2), $(t({data: e}))
            }

            function o(e, t, n, r, a) {
                var o = $.extend({
                    series_id: t.series_id || 0,
                    series_name: t.series_name || "",
                    req_id: t.req_id || "",
                    card_id: t.card_id || 0,
                    card_style_type: t.card_type || 0,
                    card_source: t.card_source || 1,
                    card_pos: n || "",
                    item_pos: t.pos || "",
                    smallapp_abtest: t.ab_test && t.ab_test.indexOf("b1") > -1 ? 1 : 0,
                    sapp_sdk_enable: t.sapp_sdk_enable ? 1 : 0
                }, r), s = "_b";
                Page.h5_settings.is_liteapp && (s += "_lite"), o.price_status = t.price_status, e.data("series_id", t.series_id), e.data("series_name", t.series_name), e.on("focus", ".j-motor-form-mobile", function (e) {
                    var t = $(this);
                    t.removeClass("error"), t.closest(".j-motor-form-body").find(".j-motor-phone-tip").hide(), sendUmengEventV3("web_clk_event", $.extend({
                        obj_id: "detail_scard_n_consultation_focus",
                        focus_dom: "phone"
                    }, o), !1), a && a.adLogClick(o)
                }).on("click", ".j-motor-form-btn", function (c) {
                    sendUmengEventV3("web_clk_event", $.extend({obj_id: "detail_scard_n_consultation"}, o), !1), a && a.adLogClick(o);
                    var l = $(this), u = l.closest(".j-motor-form-body"), d = u.find(".j-motor-form-mobile"),
                        f = u.find("[name=userAgree]"), p = d.val(), _ = f.is(":checked");
                    if ("" === p || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(p)) return d.addClass("error"), u.find(".j-motor-phone-tip").show(), i(!1, o), !1;
                    if (d.removeClass("error"), u.find(".j-motor-phone-tip").hide(), !_) return ToutiaoJSBridge.call("alert", {
                        title: "温馨提醒",
                        message: "请勾选《个人信息保护声明》后进行询价，我们将保护您的个人信息安全",
                        confirm_text: "确认",
                        cancel_text: "取消"
                    }), i(!1, o), !1;
                    $(".j-motor-form-mobile").val(p), sendUmengEventV3("web_clk_event", $.extend({obj_id: "detail_scard_n_consultation_sure"}, o), !1), a && a.adLogClick(o), l.attr("disabled", "disabled").text("提交中...");
                    var m = {
                        card_type: r.card_type,
                        card_style_type: "tt_auto_dealer_" + t.card_type,
                        city_type: r.city_type,
                        sys_location: t.city_name,
                        user_location: t.city_name,
                        gid: Page.statistics.group_id || "",
                        zt: "tt_article_" + n + "_dealer" + s,
                        from: "article_bottom",
                        smallapp_abtest: t.ab_test && t.ab_test.indexOf("b1") > -1 ? 1 : 0,
                        sapp_sdk_enable: t.sapp_sdk_enable ? 1 : 0
                    };
                    2 === t.card_source && (m.zt = "tt_article_" + n + "_dealer_bd" + s, m.group_type = t.group_type), $.ajax({
                        url: "https://i.snssdk.com/motor/dealer/m/v1/commit_inquiry_info/",
                        data: {
                            device_id: r.device_id,
                            user_name: "",
                            phone: p,
                            city_name: t.city_name,
                            dealer_ids: t.dealer_ids.join(","),
                            car_id: t.car_id,
                            data_from: "m_station",
                            extra: JSON.stringify(m)
                        },
                        dataType: "jsonp",
                        success: function (t) {
                            t.data && "true" === t.data.result ? (ToutiaoJSBridge.call("toast", {
                                text: "提交成功\n经销商会为您回电",
                                icon_type: ""
                            }), e.find(".j-motor-form-body").hide(), e.find(".j-series-info-btn").show(), i(!0, o)) : (ToutiaoJSBridge.call("toast", {
                                text: "提交失败，请稍后重试",
                                icon_type: "icon_error"
                            }), i(!1, o))
                        },
                        error: function (e, t) {
                            console.warn(e, t), i(!1, o)
                        }
                    })
                });
                var c = encodeURIComponent(JSON.stringify({
                        series_id: t.series_id,
                        pre_gid: Page.statistics.group_id || "",
                        device_id: r.device_id || 0,
                        media_id: Page.author.mediaId || "",
                        item_id: Page.statistics.item_id || "",
                        category_name: Page.statistics.category_name || "",
                        log_pb: Page.statistics.log_pb || "",
                        present_start: window._auto_dealer_start_render || Date.now(),
                        group_id: Page.statistics.group_id || ""
                    })), l = {
                        is_motor: 1,
                        enter_from: "click_motor_series",
                        parent_enterfrom: "click_motor_series",
                        parent_imprid: function (e) {
                            var t = "";
                            if ("[object String]" === Object.prototype.toString.call(e)) try {
                                t = JSON.parse(e).impr_id
                            } catch (e) {
                            } else "[object Object]" === Object.prototype.toString.call(e) && (t = e.impr_id || "");
                            return t
                        }(Page.statistics.log_pb),
                        parent_gid: Page.statistics.group_id || ""
                    },
                    u = "https://m.dcdapp.com/motor/m/car_series/index?origin_from=tt&series_id=" + t.series_id + "&pre_gid=" + (Page.statistics.group_id || "") + "&city_name=" + t.city_name + "&log_extra=" + c,
                    d = encodeURIComponent("pages/seriesIndex?origin_from=tt&series_id=" + t.series_id + "&series_name=" + t.series_name + "&zt=ztplaceholder&log_extra=" + c),
                    f = "sslocal://" + ["m", "i", "c", "r", "o", "a", "p", "p"].join("") + "?app_id=tt3ed7486aa1fd80c3&launch_from=article_detail_related&start_page=" + d;
                e.find(".j-motor-form-head").on("click", function (e) {
                    if (2 === t.card_source) return !1;
                    e.preventDefault(), sendUmengEventV3("web_clk_event", $.extend({obj_id: "detail_scard_n_consultation_gotoCar"}, o), !1), sendUmengEventV3("click_nextgroup_detail", $.extend({
                        obj_id: "detail_scard_n_consultation_gotoCar",
                        item_id: Page.statistics.item_id || "",
                        category_name: Page.statistics.category_name || "",
                        log_pb: Page.statistics.log_pb || "",
                        bookshelf_type: "motor"
                    }, o), !1), a && a.adLogClick(o);
                    var r = "tt_article_" + n + "_dealer_series" + s,
                        i = "sslocal://webview?url=" + encodeURIComponent(u + "&zt=" + r) + "&title=" + t.series_name + "&use_wk=1&should_append_common_param=1&gd_ext_json=" + encodeURIComponent(JSON.stringify(l));
                    t.ab_test && t.ab_test.indexOf("b1") > -1 && t.sapp_sdk_enable && (i = f.replace("ztplaceholder", r), i += "&extra=" + encodeURIComponent(JSON.stringify({event_extra: l}))), location.href = i
                }), e.find(".j-series-info-btn").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), sendUmengEventV3("web_clk_event", $.extend({obj_id: "detail_scard_n_consultation_gotoCar_btn"}, o), !1), a && a.adLogClick(o);
                    var r = "tt_article_" + n + "_dealer_btn" + s,
                        i = "sslocal://webview?url=" + encodeURIComponent(u + "&zt=" + r) + "&title=" + t.series_name + "&use_wk=1&should_append_common_param=1&gd_ext_json=" + encodeURIComponent(JSON.stringify(l));
                    t.ab_test && t.ab_test.indexOf("b1") > -1 && t.sapp_sdk_enable && (i = f.replace("ztplaceholder", r), i += "&extra=" + encodeURIComponent(JSON.stringify({event_extra: l}))), location.href = i
                })
            }

            function i(e, t) {
                sendUmengEventV3("content_purchase_result", $.extend({
                    obj_id: "detail_scard_n_consultation_sure",
                    category_name: Page.statistics.category_name || "",
                    result: e ? "success" : "fail",
                    fee: 3e3,
                    present_time: (Date.now() - window._auto_dealer_start_render) / 1e3,
                    log_pb: Page.statistics.log_pb || "",
                    bookshelf_type: "motor",
                    item_id: Page.statistics.item_id || ""
                }, t), !1)
            }

            function s(e) {
                sendUmengEventV3("show_content_go_purchase", $.extend({
                    obj_id: "detail_scard_n_consultation",
                    item_id: Page.statistics.item_id || "",
                    enter_from: Page.statistics.enter_from || "",
                    category_name: Page.statistics.category_name || "",
                    log_pb: Page.statistics.log_pb || "",
                    bookshelf_type: "motor"
                }, e), !1)
            }

            function c(e, t, n, r, a) {
                var o = $.extend({
                    obj_id: "detail_scard_n_consultation",
                    series_id: t.series_id || 0,
                    series_name: t.series_name || "",
                    req_id: t.req_id || "",
                    card_id: t.card_id || 0,
                    card_style_type: t.card_type || 0,
                    card_source: t.card_source || 1,
                    card_pos: n || "",
                    item_pos: t.pos || "",
                    smallapp_abtest: t.ab_test && t.ab_test.indexOf("b1") > -1 ? 1 : 0,
                    sapp_sdk_enable: t.sapp_sdk_enable ? 1 : 0
                }, r);
                o.price_status = t.price_status, sendUmengWhenTargetShown(e.get(0), "web_show_event", "", o, !0, {
                    version: 3,
                    isDoubleSend: !1
                }), s(o), a && a.adLogShow(e.get(0), o)
            }

            var l = n("tW6Z");
            e.exports = r
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "E/gS": function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard auto">\n    <div class="pcard-caption">\n        <span class="pcard-h14 pcard-w1">相关车型</span>\n        <span class="pcard-h14 pcard-w3 pcard-vr icon-vr width16"></span>\n        <span class="pcard-h14 pcard-w3">数据来源于' + (null == (__t = data.data_source_show) ? "" : __t) + '</span>\n    </div>\n    <div class="p-autocard pcard-container pcard-vertical-top-border" data-href="' + (null == (__t = data.open_url) ? "" : __t) + '" data-content="content">\n        <div class="series-wrap">\n            <img src="' + (null == (__t = data.cover_url) ? "" : __t) + '" class="auto-image no-bg" alt="' + (null == (__t = data.car_series) ? "" : __t) + '的图片" />\n            <div class="series-info">\n                <h4 class="name-wrap">\n                    <span class="pcard-h16 pcard-w1 pcard-o1 pcard-bold">' + (null == (__t = data.car_series) ? "" : __t) + "</span>\n                    ", data.dealer_tag && (__p += '\n                    <span class="dealer-tag dealer-tag-' + (null == (__t = data.dealer_tag) ? "" : __t) + '">' + (null == (__t = data.dealerTagText) ? "" : __t) + "</span>\n                    "), __p += '\n                </h4>\n\n                <div>\n                    <p class="pcard-w1 n-discounts">' + (null == (__t = data.price) ? "" : __t) + '</p>\n                </div>\n            </div>\n            <button type="button" class="pcard-button auto-button red-pcard-button" data-href="' + (null == (__t = data.button_jump_url) ? "" : __t) + '">' + (null == (__t = data.button_text) ? "" : __t) + "</button>\n        </div>\n    </div>\n</div>\n";
                return __p
            }
        }, "aG/g": function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = Object.assign({}, {extra: e}), o = null, i = null;
                if (t.log_extra) {
                    try {
                        i = JSON.parse(t.log_extra || "{}")
                    } catch (e) {
                        console.error(e), i = {}
                    }
                    o = Object.assign({}, r, {
                        value: i.cid || "",
                        extra: a({
                            is_ad_event: 1,
                            refer: "card",
                            log_extra: t.log_extra,
                            item_id: e.statistics.item_id,
                            card_type: t.type,
                            card_id: t.id
                        }, n)
                    })
                }
                return {
                    adLogClick: function (e) {
                        o && (o.extra = Object.assign({}, o.extra, e), send_umeng_event("textdetail_ad", "click", o), console.log("send ad click statistics", o))
                    }, adLogShow: function (e, t) {
                        e && o && (o.extra = Object.assign({}, o.extra, t), sendUmengWhenTargetShown(e, "textdetail_ad", "show", o, !0), console.log("send ad show statistics", o))
                    }, update: function (t) {
                        if (t.log_extra) {
                            try {
                                i = JSON.parse(t.log_extra || "{}")
                            } catch (e) {
                                console.error(e), i = {}
                            }
                            o = Object.assign({}, r, {
                                value: i.cid || "",
                                extra: a({
                                    is_ad_event: 1,
                                    refer: "card",
                                    log_extra: t.log_extra,
                                    item_id: e.statistics.item_id,
                                    card_type: t.type,
                                    card_id: t.id
                                }, n)
                            })
                        }
                    }
                }
            }

            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            e.exports = r
        }, gY5b: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("E/gS"), r = new a(Page, e, {});
                window._auto_dealer_start_render = Date.now();
                var o = e.type, i = {
                    value: Page.statistics.group_id,
                    extra: {
                        item_id: Page.statistics.item_id,
                        card_type: e.type,
                        card_id: e.id,
                        origin_type: e.origin_type || 0
                    }
                };
                e.data_source_show = {dongchedi: "懂车帝App", yiche: "易车"}[e.data_source];
                var s = ["", "降价", "热门", "新上市"];
                e.dealerTagText = s[e.dealer_tag] || "", e.dealer_text = e.dealer_text || "询底价", e.ab_test = e.ab_test || [];
                var c = "tt_article_card_content", l = "tt_article_card_button", u = "_b";
                Page.h5_settings.is_liteapp && (u += "_lite"), e.price_status = 1, /暂无优惠/.test(e.price) ? e.price_status = 3 : /暂无报价/.test(e.price) ? e.price_status = 0 : /报价优惠/.test(e.price) && (e.price_status = 2);
                var d = 0 === e.price_status;
                c = "" + c + u, l = "" + l + u;
                var f = {
                    page_id: "page_detail",
                    group_id: Page.statistics.group_id || "",
                    media_id: Page.author.mediaId || "",
                    media_name: Page.author.name || "",
                    card_type: o,
                    series_name: e.car_series || "",
                    series_id: e.series_id || 0,
                    price_status: e.price_status,
                    article_type: Page.article.type || "",
                    origin_type: e.origin_type || 0,
                    smallapp_abtest: e.ab_test && e.ab_test.indexOf("b1") > -1 ? 1 : 0,
                    sapp_sdk_enable: e.sapp_sdk_enable ? 1 : 0,
                    extra_params: JSON.stringify({})
                };
                getCommonParams(function (e) {
                    f.device_id = e.device_id
                });
                var p = encodeURIComponent(JSON.stringify({
                    series_id: e.series_id,
                    pre_gid: Page.statistics.group_id || "",
                    device_id: f.device_id || 0,
                    media_id: Page.author.mediaId || "",
                    item_id: Page.statistics.item_id || "",
                    category_name: Page.statistics.category_name || "",
                    log_pb: Page.statistics.log_pb || "",
                    present_start: window._auto_dealer_start_render || Date.now(),
                    group_id: Page.statistics.group_id || ""
                })), _ = {
                    is_motor: 1,
                    enter_from: "click_motor_series",
                    parent_enterfrom: "click_motor_series",
                    parent_imprid: function (e) {
                        var t = "";
                        if ("[object String]" === Object.prototype.toString.call(e)) try {
                            t = JSON.parse(e).impr_id
                        } catch (e) {
                        } else "[object Object]" === Object.prototype.toString.call(e) && (t = e.impr_id || "");
                        return t
                    }(Page.statistics.log_pb),
                    parent_gid: Page.statistics.group_id || ""
                };
                if (e.open_web_url) {
                    var m = encodeURIComponent(e.open_web_url + "&pre_gid=" + (Page.statistics.group_id || "") + "&log_extra=" + p + "&zt=" + c);
                    e.open_url = "sslocal://webview?should_append_common_param=1&url=" + m + "&title=" + encodeURIComponent(e.car_series) + "&gd_ext_json=" + encodeURIComponent(JSON.stringify(_)) + "&use_wk=1"
                }
                if (!/log_extra%3D/.test(e.open_url) && /log_extra_placeholder%3D/.test(e.open_url) && (e.open_url = e.open_url.replace("log_extra_placeholder%3D", "log_extra%3D" + p), e.open_url += "&gd_ext_json=" + encodeURIComponent(JSON.stringify(_))), /^http/.test(e.xunjia_web_url)) {
                    var h = encodeURIComponent(e.xunjia_web_url + "&pre_gid=" + (Page.statistics.group_id || "") + "&log_extra=" + p + "&zt=" + l);
                    e.xunjia_web_url = "sslocal://webview?should_append_common_param=1&url=" + h + "&title=" + encodeURIComponent(e.dealer_text) + "&gd_ext_json=" + encodeURIComponent(JSON.stringify(_)) + "&use_wk=1"
                }
                e.ab_test.indexOf("b1") > -1 && e.sapp_sdk_enable && (e.open_smallapp_url && (e.open_url = e.open_smallapp_url.replace("tt_article_card_content", c), e.open_url = e.open_url.replace("log_extra_placeholder%3D", "log_extra%3D" + p), e.open_url += "&extra=" + encodeURIComponent(JSON.stringify({event_extra: _}))), e.xunjia_smallapp_url && (e.xunjia_web_url = e.xunjia_smallapp_url.replace("series_name", encodeURIComponent("zt=" + l + "&series_name")), e.xunjia_web_url = e.xunjia_web_url.replace("log_extra_placeholder%3D", "log_extra%3D" + p), e.xunjia_web_url += "&extra=" + encodeURIComponent(JSON.stringify({event_extra: _})))), d ? (e.button_text = "查看", e.button_jump_url = e.open_url) : (e.button_text = e.dealer_text, e.button_jump_url = e.xunjia_web_url), "wenda_extra" in Page ? i.extra.data_source = e.data_source + "_wenda" : i.extra.data_source = e.data_source;
                var v = $(t({data: e}));
                v.find("[data-label]").on("click", function (e) {
                    e.stopPropagation(), send_umeng_event("detail", "click_" + this.dataset.label, i), r && r.adLogClick(f)
                }), v.find('[type="button"]').on("click", function (e) {
                    e.stopPropagation(), location.href = this.dataset.href, sendUmengEventV3("web_clk_event", $.extend({obj_id: "auto_dealer_click"}, f), !1), sendUmengEventV3("click_nextgroup_detail", $.extend({
                        obj_id: "detail_scard_n_consultation_gotoCar",
                        item_id: Page.statistics.item_id || "",
                        category_name: Page.statistics.category_name || "",
                        log_pb: Page.statistics.log_pb || "",
                        bookshelf_type: "motor"
                    }, f), !1), r && r.adLogClick(f)
                }), v.on("click", "[data-content]", function (e) {
                    location.href = this.dataset.href, sendUmengEventV3("web_clk_event", $.extend({obj_id: "auto_series_click"}, f), !1), sendUmengEventV3("click_nextgroup_detail", $.extend({
                        obj_id: "detail_scard_n_consultation_gotoCar",
                        item_id: Page.statistics.item_id || "",
                        category_name: Page.statistics.category_name || "",
                        log_pb: Page.statistics.log_pb || "",
                        bookshelf_type: "motor"
                    }, f), !1), r && r.adLogClick(f)
                }), $("footer .footer-cards-container").length > 0 ? $("footer .footer-cards-container").prepend(v) : $("footer").prepend(v), sendUmengWhenTargetShown(v.get(0), "web_show_event", "", $.extend({obj_id: "tt_auto_card_show"}, f), !0, {
                    version: 3,
                    isDoubleSend: !1
                }), sendUmengWhenTargetShown(v.get(0), "show_content_go_purchase", "", $.extend({
                    obj_id: "detail_scard_n_consultation",
                    item_id: Page.statistics.item_id || "",
                    enter_from: Page.statistics.enter_from || "",
                    category_name: Page.statistics.category_name || "",
                    log_pb: Page.statistics.log_pb || "",
                    bookshelf_type: "motor"
                }, f), !0, {version: 3, isDoubleSend: !1}), r && r.adLogShow(v.get(0), f)
            }

            var a = n("aG/g");
            e.exports = r
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("gY5b");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "auto" === e.type ? r(e) : console.log(e)
                    })
                })
            }()
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "6li8": function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("iseg"),
                    r = (Page.statistics.group_id, Page.statistics.item_id, e.type, e.card_order_id, e.card_product_id, e.log_extra, JSON.parse(e.log_extra || "{}"));
                r.lianchi_order_id = e.card_order_id, r.lianchi_product_id = e.card_product_id;
                var a = {
                    value: JSON.parse(e.log_extra || "{}").cid,
                    extra: {is_ad_event: 1, refer: "card", log_extra: JSON.stringify(r) || ""}
                };
                e.label || (e.label = "目的地相关的旅游信息");
                var o = $(t({data: e}));
                o.on("click", ".button", function (t) {
                    console.log(a);
                    var n = JSON.parse(JSON.stringify(a));
                    t.stopPropagation(), t.target.className.indexOf("card__btn") ? n.extra.refer = "card_other" : n.extra.refer = "card_button", console.log(n), send_umeng_event("textdetail_ad", "click", n), window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.web_url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(o), $("footer").append(o), sendUmengWhenTargetShown(o.get(0), "textdetail_ad", "show", a, !0)
            }

            e.exports = r
        }, iseg: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div>\n    <div class="pcard button pcard-clearfix destination">\n        <div class="top pcard-vertical-bottom-border">\n            <span class="trigger half-pixel-border-base">' + (null == (__t = data.trigger) ? "" : __t) + '</span><span class="source">' + (null == (__t = data.source) ? "" : __t) + '</span>\n        </div>\n        <div class="main">\n            <img class="card-pic" src="' + (null == (__t = data.image_url) ? "" : __t) + '"/>\n            <button class="card__btn red-pcard-button"></button>\n            <div class="content">\n                <div class="name">\n                    ' + (null == (__t = data.title) ? "" : __t) + '\n                </div>\n                <div class="comment">\n                    <span>' + (null == (__t = data.label) ? "" : __t) + '</span>\n                </div>\n                <div class="list">\n                    <span class="half-pixel-border-base">景点</span><span class="half-pixel-border-base">酒店</span><span class="half-pixel-border-base">机票</span><span class="half-pixel-border-base">线路</span><span class="half-pixel-border-base">游记</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("6li8");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "destination_tour_card" === e.type && r(e)
                    })
                })
            }()
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "3wbA": function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e.statistics && e.statistics.item_id || "", r = e.statistics && e.statistics.group_id || "",
                    o = t.id, i = t.card_order_id, s = void 0 === i ? "" : i, c = t.card_product_id,
                    l = void 0 === c ? "" : c, u = t.style_id, d = void 0 === u ? "" : u, f = t.log_extra,
                    p = void 0 === f ? "" : f, _ = {};
                try {
                    _ = JSON.parse(p) || {}
                } catch (e) {
                    _ = {}
                }
                var m = _, h = m.cid, v = void 0 === h ? 0 : h;
                return {
                    sendShowEvent: function (e) {
                        var t = e.get(0);
                        sendUmengWhenTargetShown(t, "textdetail", "show", {
                            value: v,
                            extra: {
                                refer: "card",
                                is_ad_event: 1,
                                lianchi_order_id: s,
                                lianchi_product_id: l,
                                style_id: d,
                                log_extra: p
                            }
                        }, !0), sendUmengWhenTargetShown(t, "show_novel_card", "", {
                            item_id: n,
                            group_id: r,
                            novel_id: o,
                            is_novel: 1,
                            card_type: "pool"
                        }, !0, {version: 3})
                    }, sendEventV1: function (e, t) {
                        send_umeng_event("textdetail", e, {
                            value: v,
                            extra: {
                                refer: t,
                                is_ad_event: 1,
                                lianchi_order_id: s,
                                lianchi_product_id: l,
                                style_id: d,
                                log_extra: p
                            }
                        })
                    }, sendEventV3: function (e, t) {
                        sendUmengEventV3(e, a({
                            group_id: r,
                            item_id: n,
                            novel_id: o,
                            is_novel: 1,
                            card_type: "pool"
                        }, t))
                    }
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = r
        }, "6RpQ": function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard novel-ad">\n    <div class="pcard-container pcard-vertical-top-border pcard-bottom-0">\n        <div class="pcard-clearfix">\n            <div class="pcard-pull-left" style="position: relative">\n                <img class="fiction-image" src="' + (null == (__t = image.url) ? "" : _.escape(__t)) + '"/>\n                <span class="tag ' + (null == (__t = "改编" === category ? "original" : "") ? "" : __t) + '"></span>\n            </div>\n            <div class="fiction-right-wrap">\n                <div class="fiction-right">\n                    <button class="button reader-button pcard-button fiction-button pcard-pull-right red-pcard-button">免费阅读</button>\n                    <div class="pcard-h16 pcard-w1 pcard-o1" style="margin-top: 2px">' + (null == (__t = name) ? "" : _.escape(__t)) + '</div>\n                    <div class="pcard-h12 pcard-w1 pcard-o1" style="margin-top: 6px">' + (null == (__t = profession.authorName) ? "" : _.escape(__t)) + '</div>\n                    <div class="pcard-h12 pcard-w3" style="margin-top: 6px">' + (null == (__t = profession.novel_category) ? "" : _.escape(__t)) + " " + (null == (__t = 0 == profession.creation_status ? "已完结" : "连载中") ? "" : __t) + " " + (null == (__t = profession.word_number) ? "" : _.escape(__t)) + '</div>\n                </div>\n            </div>\n        </div>\n        <p class="fiction-link">\n            <span class="fiction-link-text">点击查看更多小说</span>\n            <i class="pcard-icon icon-right"></i>\n        </p>\n    </div>\n</div>\n';
                return __p
            }
        }, "6yL2": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var r = {
                BOOK_PAGE: "https://ic.snssdk.com/feoffline/novel/book/page/v1/index.html",
                CHANNEL_PAGE: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
                READER_V2: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v2/page/index.html",
                READER_V3: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v3/page/index.html"
            };
            t.default = r
        }, XwVQ: function (e, t, n) {
            "use strict";

            function r(e) {
                return Object.keys(e).map(function (t) {
                    return [t, e[t]].join("=")
                }).join("&")
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "sslocal://webview?" + r(u({
                    url: encodeURIComponent(e),
                    hide_more: 1,
                    hide_bar: 1,
                    disable_web_progressView: 1,
                    should_append_common_param: 1,
                    bounce_disable: 1,
                    use_offline: 1
                }, t))
            }

            function o(e, t) {
                return (e ? "sslocal://novel_reader" : "sslocal://novel") + "?" + r({
                    url: encodeURIComponent(t),
                    should_append_common_param: 1,
                    bounce_disable: 1,
                    hide_more: 1,
                    hide_bar: 1,
                    style_canvas: 1,
                    hide_back_buttonView: 1,
                    use_offline: 1
                })
            }

            function i(e) {
                ToutiaoJSBridge.call("getSubScribedChannelList", {}, function (t) {
                    (t.list || []).slice(0, 6).indexOf("novel_channel") < 0 ? e && "function" == typeof e && e(!1) : e && "function" == typeof e && e(!0)
                })
            }

            function s() {
                i(function (e) {
                    e || ToutiaoJSBridge.call("addChannel", {
                        category: "novel_channel",
                        web_url: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
                        name: "小说",
                        type: 5,
                        flags: 1
                    })
                })
            }

            function c(e) {
                window.location.href = e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.Raven && window.Raven.captureException(new Error("novel card_lianchi error: " + e, t))
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.toQuery = r, t.getWebviewUrl = a, t.getNovelReaderUrl = o, t.isOnHomePage = i, t.addChannel = s, t.navigateTo = c, t.reportSentry = l
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("sOtQ");
            !function () {
                window.cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        console.log("----card", e), "novel_lianchi" === e.type && r(e)
                    })
                })
            }()
        }, sOtQ: function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e) {
                var t = Page, n = t.category_name, r = void 0 === n ? "" : n, a = t.enter_from,
                    o = void 0 === a ? "" : a, i = t.log_pb, s = void 0 === i ? {} : i;
                e.sendEventV3("click_nextgroup_detail", {
                    bookshelf_type: "novel",
                    category_name: r,
                    enter_from: o,
                    log_pb: "string" == typeof s ? s : JSON.stringify(s) || ""
                })
            }

            function o(e, t, n) {
                e.on("click", function (e) {
                    var r = $(e.target);
                    return r.hasClass("reader-button") ? (e.stopPropagation(), (0, f.addChannel)(), a(n), n.sendEventV1("click", "read_button"), n.sendEventV3("click_novel_card_readfree"), void(0, f.navigateTo)(t.readerUrl)) : r.hasClass("fiction-link-text") ? (e.stopPropagation(), (0, f.addChannel)(), a(n), n.sendEventV1("click", "more_tips"), n.sendEventV3("click_novel_card_channel"), void(0, f.navigateTo)(t.channelUrl)) : (a(n), n.sendEventV1("click", "card_other"), n.sendEventV3("click_novel_card"), void(0, f.navigateTo)(t.pageUrl))
                })
            }

            function i(e) {
                var t = _.default.BOOK_PAGE + "?" + (0, f.toQuery)(d({
                    book_id: e.id,
                    enter_from: "item_card_related"
                }, v));
                e.pageUrl = (0, f.getWebviewUrl)(t);
                var n = e.profession, r = void 0 === n ? {} : n, a = r.item_id, o = r.group_id,
                    i = client.isAndroid && client.isNewsArticleVersionNoLessThan("6.9.5"),
                    s = i ? _.default.READER_V3 : _.default.READER_V2;
                e.readerUrl = (0, f.getNovelReaderUrl)(i, s + "?" + (0, f.toQuery)(d({
                    groupid: o,
                    item_id: a,
                    book_id: e.id,
                    detail_item_id: Page.statistics.group_id,
                    group_id: Page.statistics.item_id,
                    from_type: 3,
                    enter_from: "item_card_related"
                }, v)));
                var c = _.default.CHANNEL_PAGE + "?" + (0, f.toQuery)(d({enter_from: "item_card_related"}, v));
                e.channelUrl = (0, f.getWebviewUrl)(c, {title: "小说频道", hide_bar: 0})
            }

            function s() {
                var e = Page, t = e.category_name, n = void 0 === t ? "" : t, r = e.enter_from,
                    a = void 0 === r ? "" : r, o = e.statistics, i = void 0 === o ? {} : o, s = Page, c = s.log_pb,
                    l = void 0 === c ? "" : c;
                "string" != typeof l && (l = JSON.stringify(l) || ""), v.category_name = n, v.rec_enter = a, v.group_id = i.group_id, v.log_pb = encodeURIComponent(l)
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.errmsg,
                    n = void 0 === t ? "" : t, r = window.Page.statistics, a = void 0 === r ? {} : r;
                (0, f.reportSentry)(a.group_id + ", " + n, {
                    tags: {type: "server"},
                    extra: d({article_group_id: a.group_id, article_item_id: a.item_id}, e),
                    level: "fatal"
                })
            }

            function l(e) {
                var t = e.card_order_id, n = e.id, r = e.name, a = e.profession, o = void 0 === a ? {} : a, i = e.image,
                    s = void 0 === i ? {} : i,
                    l = {id: n, name: r, item_id: o.item_id, group_id: o.group_id, image: s.url}, u = !1;
                return Object.keys(l).forEach(function (e) {
                    var n = l[e];
                    n && 0 !== Number(n) || (u = !0, c({errmsg: "no " + e, card_order_id: t}))
                }), u
            }

            function u(e) {
                if (!l(e)) {
                    var t = n("6RpQ"), r = $(t(e)), a = new h.default(Page, e);
                    s(), i(e), o(r, e, a), needCleanDoms.push(r), "pgc" == Page.article.type && Page.novel_data && Page.novel_data.show_new_keep_reading ? $("footer").append(r) : $("footer").prepend(r), a.sendShowEvent(r)
                }
            }

            var d = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, f = n("XwVQ"), p = n("6yL2"), _ = r(p), m = n("3wbA"), h = r(m), v = {};
            e.exports = u
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        lVK7: function (e, t, n) {
            "use strict";
            var r = n("vsMh");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "hotel_tour_card" === e.type && r(e)
                    })
                })
            }()
        }, vsMh: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("zDDT"), r = JSON.parse(e.log_extra || "{}");
                r.lianchi_order_id = e.card_order_id, r.lianchi_product_id = e.card_product_id;
                var a = {
                    value: JSON.parse(e.log_extra || "{}").cid,
                    extra: {is_ad_event: 1, refer: "card", log_extra: JSON.stringify(r) || ""}
                }, o = function (e) {
                    return e > 0 && e < 1 ? '<div class="star empty"><div class="full" style="width: ' + 12 * e + 'px;"></div></div>' : 1 === e ? '<div class="star full"></div>' : '<div class="star empty"></div>'
                };
                e.grade && 1 === e.grade.length && (e.grade += ".0"), e.renderStars = function () {
                    for (var t = +e.grade, n = "", r = 1; r <= 5; r++) n += o(t > r ? 1 : t - r + 1);
                    return n
                }, e.getLevelText = function () {
                    return e.level ? '<span class="level half-pixel-border-base">' + e.level + "</span>" : ""
                }, e.getPriceText = function () {
                    var t = parseInt(e.price, 10);
                    return t > 0 ? '<span class="price">￥' + t + '</span><span class="price-from">起</span>' : 0 === t ? '<span class="price price-free">免费</span>' : '<span class="price-from">更多旅游产品</span>'
                };
                var i = $(t({data: e}));
                i.on("click", ".button", function (t) {
                    var n = JSON.parse(JSON.stringify(a));
                    t.stopPropagation(), t.target.className.indexOf("card__btn") ? n.extra.refer = "card_other" : n.extra.refer = "card_button", send_umeng_event("textdetail_ad", "click", n), window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.web_url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengWhenTargetShown(i.get(0), "textdetail_ad", "show", a, !0)
            }

            e.exports = r
        }, zDDT: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div>\n    <div class="pcard button pcard-clearfix hotel">\n        <div class="top pcard-vertical-bottom-border">\n            <span class="trigger half-pixel-border-base">' + (null == (__t = data.trigger) ? "" : __t) + '</span><span class="source">' + (null == (__t = data.source) ? "" : __t) + '</span>\n        </div>\n        <div class="main">\n            <img class="card-pic" src="' + (null == (__t = data.image_url) ? "" : __t) + '"/>\n            <div class="content">    \n                <div class="name">\n                    <span>' + (null == (__t = data.title) ? "" : __t) + '</span>\n                </div>\n                <div class="grade">\n                    ' + (null == (__t = data.renderStars()) ? "" : __t) + '\n                    <span class="score"><span>' + (null == (__t = data.grade) ? "" : __t) + "</span><span>分</span></span>" + (null == (__t = data.getLevelText()) ? "" : __t) + '\n                </div>\n                <div class="cost">\n                    ' + (null == (__t = data.getPriceText()) ? "" : __t) + '\n                    <button class="card__btn red-pcard-button"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
                return __p
            }
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        d1iv: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div>\n    <div class="pcard button pcard-clearfix site">\n        <div class="top pcard-vertical-bottom-border">\n            <span class="trigger half-pixel-border-base">' + (null == (__t = data.trigger) ? "" : __t) + '</span><span class="source">' + (null == (__t = data.source) ? "" : __t) + '</span>\n        </div>\n        <div class="main">\n            <img class="card-pic" src="' + (null == (__t = data.image_url) ? "" : __t) + '"/>\n            <div class="content">    \n                <div class="name">\n                    <span>' + (null == (__t = data.title) ? "" : __t) + '</span>\n                </div>\n                <div class="grade">\n                    ' + (null == (__t = data.renderStars()) ? "" : __t) + '\n                    <span class="score"><span>' + (null == (__t = data.grade) ? "" : __t) + "</span><span>分</span></span>" + (null == (__t = data.getLevelText()) ? "" : __t) + '\n                </div>\n                <div class="cost">\n                    ' + (null == (__t = data.getPriceText()) ? "" : __t) + '\n                    <button class="card__btn red-pcard-button"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("qcpU");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "site_tour_card" === e.type && r(e)
                    })
                })
            }()
        }, qcpU: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("d1iv"),
                    r = (Page.statistics.group_id, Page.statistics.item_id, e.type, e.card_order_id, e.card_product_id, e.log_extra, JSON.parse(e.log_extra || "{}"));
                r.lianchi_order_id = e.card_order_id, r.lianchi_product_id = e.card_product_id;
                var a = {
                    value: JSON.parse(e.log_extra || "{}").cid,
                    extra: {is_ad_event: 1, refer: "card", log_extra: JSON.stringify(r) || ""}
                }, o = function (e) {
                    return e > 0 && e < 1 ? '<div class="star empty"><div class="full" style="width: ' + 12 * e + 'px;"></div></div>' : 1 === e ? '<div class="star full"></div>' : '<div class="star empty"></div>'
                };
                e.grade && 1 === e.grade.length && (e.grade += ".0"), e.renderStars = function () {
                    for (var t = +e.grade, n = "", r = 1; r <= 5; r++) n += o(t > r ? 1 : t - r + 1);
                    return n
                }, e.getLevelText = function () {
                    return e.level ? '<span class="level half-pixel-border-base">' + e.level + "</span>" : ""
                }, e.getPriceText = function () {
                    var t = parseInt(e.price, 10);
                    return t > 0 ? '<span class="price">￥' + t + '</span><span class="price-from">起</span>' : 0 === t ? '<span class="price price-free">免费</span>' : '<span class="price-from">更多旅游产品</span>'
                };
                var i = $(t({data: e}));
                i.on("click", ".button", function (t) {
                    var n = JSON.parse(JSON.stringify(a));
                    t.stopPropagation(), t.target.className.indexOf("card__btn") ? n.extra.refer = "card_other" : n.extra.refer = "card_button", send_umeng_event("textdetail_ad", "click", n), window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.web_url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengWhenTargetShown(i.get(0), "textdetail_ad", "show", a, !0)
            }

            e.exports = r
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "1hka": function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            var a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            e.exports = function () {
                function e(t, n) {
                    r(this, e), this.statisticsObject = Object.assign({}, {
                        group_id: t.statistics.group_id,
                        card_type: "channel_card",
                        game_category_id: n.game_category_id,
                        log_pb: t.log_pb,
                        position: "article_detail_bottom",
                        launch_from: n.launch_from
                    })
                }

                return a(e, [{
                    key: "logClick", value: function (e, t) {
                        sendUmengEventV3(e, Object.assign(this.statisticsObject, t))
                    }
                }, {
                    key: "registryShowEvent", value: function (e, t, n) {
                        sendUmengWhenTargetShown(e, t, "", Object.assign(this.statisticsObject, n), !0, {version: 3})
                    }
                }]), e
            }()
        }, "5has": function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("RzNo"), r = new o(Page, e), i = e.type, s = $(t({card: e, className: i}));
                s.on("touchend", function (t) {
                    t.stopPropagation(), r.logClick("card_click"), a.goto(e.url)
                }), needCleanDoms.push(s), $("footer").append(s), r.registryShowEvent(s.get(0), "card_show")
            }

            var a = n("tG3c"), o = n("1hka");
            e.exports = r
        }, RzNo: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="game_card_container">\n  <div class="game-card-zone">\n    <span class="game-card-zone__title">' + (null == (__t = card.up_title) ? "" : __t) + '</span>\n    <div class="game-card-zone__hr"></div>\n    <span class="game-card-zone__subtitle">' + (null == (__t = card.up_sub_title) ? "" : __t) + '</span>\n  </div>\n  <div class="game-card-hr"></div>\n  <div class="game_card">\n    <div class="card__body">\n      <img class="card__icon" src="' + (null == (__t = card.icon) ? "" : __t) + '" alt="">\n\n      <div class="card__forum">\n        <a class="card__forum-name">' + (null == (__t = card.forum_name) ? "" : __t) + '</a>\n        <a class="card__forum-comment-count">' + (null == (__t = card.subtitle) ? "" : __t) + '</a>\n      </div>\n      <button class="card__btn">' + (null == (__t = card.button_text) ? "" : __t) + "</button>\n    </div>\n  </div>\n</div>";
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("5has");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "game_card" === e.type && r(e)
                    })
                })
            }()
        }, tG3c: function (e, t, n) {
            "use strict";
            var r = {
                goto: function (e, t) {
                    var n = "";
                    t && Object.keys(t).forEach(function (e) {
                        n += "&" + e + "=" + t[e]
                    }), console.log("" + e + n), window.location.href = "" + e + n
                }
            };
            e.exports = r
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "501Q": function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard shimo">\n    <div class="pcard-caption"> <span class="pcard-h14 pcard-w1">相关专题</span>\n <span class="pcard-h14 pcard-w3 pcard-vr icon-vr width16"></span>\n <span class="pcard-h14 pcard-w3">数据来源于生活始末App</span>\n\t\t</div>\n    <div data-label="pcard" class="p-autocard pcard-container pcard-vertical-top-border" data-href="sslocal://webview?bounce_disable=1&url=' + (null == (__t = data.redirect_url) ? "" : __t) + '"\n    data-content="content">\n        <div class="series-wrap">\n            <img src="' + (null == (__t = data.image_url) ? "" : __t) + '" class="auto-image no-bg" alt="' + (null == (__t = data.title) ? "" : __t) + '的图片">\n            <div class="series-info">\n                 <h4 class="name-wrap">\n                    <p class="pcard-h16 pcard-w1 pcard-bold"\n                        style="display:-webkit-box;-webkit-box-orient: vertical;"\n                    >' + (null == (__t = data.title) ? "" : __t) + '</p>\n                 </h4>\n                <div>\n                    <p class="pcard-w1 n-discounts">' + (null == (__t = data.sub_title) ? "" : __t) + '</p>\n                </div>\n            </div>\n            <button data-label="pcard-button" type="button" class="pcard-button auto-button red-pcard-button" data-href="sslocal://webview?bounce_disable=1&url=' + (null == (__t = data.redirect_url) ? "" : __t) + '">去看图</button>\n        </div>\n    </div>\n</div>\n';
                return __p
            }
        }, JMwQ: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("501Q"), r = {
                    value: Page.statistics.group_id,
                    extra: {
                        item_id: Page.statistics.item_id,
                        card_type: e.type,
                        log_extra: e.log_extra,
                        card_id: e.id || "",
                        pre_page: "be_null",
                        cur_page: "page_toutiao_card_reflux_web",
                        controls_id: 0
                    }
                }, a = JSON.parse(e.log_extra || "{}"), o = {
                    value: a.cid,
                    extra: {
                        is_ad_event: 1,
                        refer: "card",
                        item_id: Page.statistics.item_id,
                        card_type: e.type,
                        card_id: e.id || "",
                        vid: e.vid,
                        log_extra: e.log_extra
                    }
                }, i = $(t({data: e, isRedButton: Page.isRedFocusButton}));
                sendUmengWhenTargetShown(i.get(0), "textdetail_ad", "show", o, !0), i.find('[data-label="pcard"]').on("click", function (e) {
                    e.stopPropagation(), o.extra.refer = "card_other", r.extra.controls_name = "region_remove_btn", send_umeng_event("textdetail_ad", "click", o), send_umeng_event("homed", "click_toutiao_card_reflux_web", r), location.href = this.dataset.href
                }), i.find('[data-label="pcard-button"]').on("click", function (e) {
                    e.stopPropagation(), o.extra.refer = "card_button", r.extra.controls_name = "btn_see_picture", send_umeng_event("textdetail_ad", "click", o), send_umeng_event("homed", "click_toutiao_card_reflux_web", r), location.href = this.dataset.href
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengWhenTargetShown(i.get(0), "detail", "card_show", r, !0)
            }

            e.exports = r
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("JMwQ");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "shimo" === e.type && r(e)
                    })
                })
            }()
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        KJis: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("gFiM"), r = (Page.statistics.group_id, Page.statistics.item_id, e.type, e.id, "");
                if (e.log_extra) {
                    var a = JSON.parse(e.log_extra || "{}");
                    r = {
                        value: a.cid,
                        extra: {
                            is_ad_event: 1,
                            refer: "card",
                            item_id: Page.statistics.item_id,
                            card_type: e.type,
                            card_id: e.id,
                            log_extra: e.log_extra
                        }
                    }
                }
                if (e.total_price && (e.total_price_pure = e.total_price.replace(/^(\d+)(.*)$/, "$1"), e.price_unit = e.total_price.replace(/^(\d+)(.*)$/, "$2")), e.detail_url) {
                    var o = e.house_title ? e.house_title : "";
                    e.detail_url_schema = "sslocal://webview?url=" + encodeURIComponent(e.detail_url) + "&title=" + o + "&use_wk=1&bounce_disable=1&disable_web_progressView=1"
                }
                e.price_url && (e.price_url_schema = "sslocal://webview?url=" + encodeURIComponent(e.price_url) + "&title=询底价&use_wk=1&bounce_disable=1&disable_web_progressView=1");
                var i = $(t({data: e})), s = {event_type: "house_h5v2", location: "detail_bottom"};
                getCommonParams(function (e) {
                    s.device_id = e.device_id, s.user_id = e.user_id
                }), i.find(".house-queryprice").on("click", function (t) {
                    if (t.stopPropagation(), sendUmengEventV3("fcell_detail", $.extend({
                            click_type: "button",
                            group_id: e.house_id
                        }, s)), r) {
                        var n = JSON.parse(JSON.stringify(r));
                        n.refer = "card_button", send_umeng_event("textdetail_ad", "click", n)
                    }
                    setTimeout(function () {
                        location.href = e.price_url_schema
                    }, 20)
                }), i.on("click", ".house-wrapper", function (t) {
                    if (sendUmengEventV3("fcell_detail", $.extend({click_type: "house", group_id: e.house_id}, s)), r) {
                        var n = JSON.parse(JSON.stringify(r));
                        n.refer = "card_other", send_umeng_event("textdetail_ad", "click", n)
                    }
                    setTimeout(function () {
                        location.href = e.detail_url_schema
                    }, 20)
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengWhenTargetShown(i.get(0), "fcell_show", "", $.extend({group_array: [e.house_id]}, s), !0, {
                    version: 3,
                    isDoubleSend: !1
                }), r && sendUmengWhenTargetShown(i.get(0), "textdetail_ad", "show", r, !0)
            }

            e.exports = r
        }, gFiM: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard house">\n    <div class="house-head half-paxel-border-bottom">\n        <span class="pcard-h14 pcard-w1">' + (null == (__t = data.title) ? "" : __t) + '</span>\n    </div>\n    <div class="house-content" >\n        <div class="house-wrapper">\n            <img class="house-image half-paxel-border-around" src=' + (null == (__t = data.img_url) ? "" : __t) + ' />\n            <div class="house-info">\n                <div class="house-title">' + (null == (__t = data.house_title) ? "" : __t) + '</div>\n                <div class="house-price">\n                    <span class="house-totalprice">' + (null == (__t = data.total_price_pure) ? "" : __t) + '</span><span class="house-priceunit">' + (null == (__t = data.price_unit) ? "" : __t) + '</span>\n                    <span class="house-avgprice">' + (null == (__t = data.avg_price) ? "" : __t) + '</span>\n                </div>\n            </div>\n            <button class="house-queryprice">\n                询底价\n            </button>\n        </div>\n    </div>\n</div>';
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("KJis");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "house" === e.type && r(e)
                    })
                })
            }()
        }
    }), function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "76LW": function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="game_forum_card pcard card">\n  <div class="card__head">\n    <div class="card__tag">热门</div>\n    ' + (null == (__t = card.hot_post_title) ? "" : __t) + '\n  </div>\n\n  <div class="card__body">\n    <img class="card__icon" src="' + (null == (__t = card.icon) ? "" : __t) + '" alt="">\n\n    <div class="card__forum">\n      <div class="card__forum-name">' + (null == (__t = card.forum_name) ? "" : __t) + '</div>\n      <div class="card__forum-comment-count">' + (null == (__t = card.comment_count) ? "" : __t) + '跟帖</div>\n    </div>\n    <div class="card__btn">' + (null == (__t = card.button_text) ? "" : __t) + "</div>\n  </div>\n</div>\n";
                return __p
            }
        }, Yq1O: function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                return Object.getOwnPropertyNames(t).forEach(function (n) {
                    e[n] = t
                }), e
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), i = function () {
                function e(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (r(this, e), this.statisticsObject = a({
                            value: t.statistics.group_id,
                            extra: {
                                item_id: t.statistics.item_id,
                                card_type: n.type,
                                card_id: n.id,
                                vid: n.vid,
                                game_id: n.game_id,
                                log_extra: n.log_extra
                            }
                        }, o), n.log_extra) {
                        var i = JSON.parse(n.log_extra || "{}");
                        this.adEventObject = a({
                            value: i.cid,
                            extra: {
                                is_ad_event: 1,
                                refer: "card",
                                item_id: t.statistics.item_id,
                                card_type: n.type,
                                card_id: n.id,
                                vid: n.vid,
                                game_id: n.game_id,
                                log_extra: n.log_extra
                            }
                        }, o)
                    }
                }

                return o(e, [{
                    key: "logClick", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "card_button";
                        if (send_umeng_event("detail", "click_card_button", this.statisticsObject), send_umeng_event("ad_game_wapchannel", "click_card_button", this.statisticsObject), this.adEventObject) {
                            var t = JSON.parse(JSON.stringify(this.adEventObject));
                            t.refer = e, send_umeng_event("textdetail_ad", "click", t)
                        }
                    }
                }, {
                    key: "registryShowEvent", value: function (e) {
                        sendUmengWhenTargetShown(e, "detail", "card_show", this.statisticsObject, !0), sendUmengWhenTargetShown(e, "ad_game_wapchannel", "card_show", this.statisticsObject, !0), this.adEventObject && sendUmengWhenTargetShown(e, "textdetail_ad", "show", this.adEventObject, !0)
                    }
                }]), e
            }();
            t.default = i
        }, lVK7: function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e) {
                var t = n("76LW"), r = new i.default(Page, e), a = e.type, o = $(t({card: e, className: a}));
                o.on("click", function (t) {
                    t.stopPropagation(), t.target.className.indexOf("card__btn") ? r.logClick("card_button") : r.logClick("card_other"), c.default.goto(e.url, e.title)
                }), needCleanDoms.push(o), $("footer").append(o), r.registryShowEvent(o.get(0))
            }

            var o = n("Yq1O"), i = r(o), s = n("omCv"), c = r(s);
            cardEvent.on("cards", function (e) {
                e && e.cards && e.cards.forEach(function (e) {
                    "game_forum_card" === e.type && a(e)
                })
            })
        }, omCv: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var r = document, a = {
                completeUri: function (e) {
                    var t = r.createElement("a");
                    return t.href = e, t.href
                }, goto: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = a.completeUri(e);
                    window.location.href = "sslocal://webview?url=" + encodeURIComponent(n) + "&title=" + t + "&use_webview_title=true"
                }
            };
            t.default = a
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "16qv": function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function a(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e) {
                var t = window.Page || {}, n = t.article, r = void 0 === n ? {} : n, a = t.novel_data;
                if ("pgc" !== r.type || !a || a.can_read) {
                    if (!document.querySelector(".tt-distribution-card")) {
                        var o = new m(e);
                        o.initInfo(), o.isCardInfoError() || o.render()
                    }
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            t.default = i;
            var l = n("Xy35"), u = r(l), d = n("bqnp"), f = r(d), p = n("AESC"), _ = n("mb6z"), m = function () {
                function e(t) {
                    o(this, e), this.card = t || {}, this.recUrlParams = {}, this.logger = null, this.clickTarget = null
                }

                return c(e, [{
                    key: "initInfo", value: function () {
                        this.initRecParams(), this.initCard(), this.initUrl(), this.logger = new f.default(window.Page, this.card)
                    }
                }, {
                    key: "initCard", value: function () {
                        var e = {1: 0, 2: 1, 3: 3, 4: 2, 5: 5}, t = e[Number(this.card.card_type)], n = [0, 1, 2, 5];
                        this.card = s({
                            category: "",
                            concern_id: "",
                            creation_status: 0,
                            forum_id: "",
                            free_status: 2,
                            is_concerned: 0,
                            name: "",
                            poster: "",
                            word_number: "",
                            author: "",
                            chapter_count: 0
                        }, this.card, {
                            card_type: t,
                            isAudio: 5 === t
                        }), -1 === n.indexOf(this.card.card_type) && this.sendCardError({
                            errmsg: "卡片类型错误",
                            card_type: this.card.card_type
                        })
                    }
                }, {
                    key: "initUrl", value: function () {
                        var e = this, t = this.card, n = t.book_id, r = t.item_id, a = t.group_id, o = t.isAudio,
                            i = window.Page || {}, c = i.statistics, l = void 0 === c ? {} : c, u = i.novel_data,
                            d = "item_card";
                        u || (d = "item_card_related");
                        var f = {};
                        Object.keys(this.recUrlParams).forEach(function (t) {
                            f[t] = encodeURIComponent(e.recUrlParams[t])
                        });
                        var p = s({book_id: n, enter_from: d, parent_enterfrom: "novel_card"}, f);
                        this.initPageUrl(p), this.initBookshelfUrl(s({from: 4}, p)), o ? (this.initAudioPlayUrl({
                            groupid: a,
                            item_id: r,
                            enter_from: d,
                            feed_group_id: f.group_id,
                            feed_category_name: f.category_name,
                            feed_enter_from: f.rec_enter,
                            feed_log_pb: f.log_pb
                        }), this.initAudioCategoryUrl(s({}, p, {select: 3}))) : (this.initReaderUrl(s({}, p, {
                            groupid: a,
                            item_id: r,
                            detail_item_id: l.group_id,
                            group_id: l.item_id,
                            from_type: 3
                        })), this.initChannelUrl(p))
                    }
                }, {
                    key: "initPageUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this.card.isAudio, n = t ? p.Urls.AUDIO_BOOK_PAGE : p.Urls.BOOK_PAGE,
                            r = n + "?" + (0, _.toQuery)(e);
                        this.card.pageUrl = (0, _.getWebviewUrl)(r)
                    }
                }, {
                    key: "initBookshelfUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = p.Urls.BOOKSHELF_PAGE + "?" + (0, _.toQuery)(e);
                        this.card.bookshelfUrl = (0, _.getWebviewUrl)(t)
                    }
                }, {
                    key: "initReaderUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = window.client.isAndroid && window.client.isNewsArticleVersionNoLessThan("6.9.5"),
                            n = t ? p.Urls.READER_V3 : p.Urls.READER_V2;
                        this.card.readerUrl = (0, _.getNovelReaderUrl)(t, n + "?" + (0, _.toQuery)(e))
                    }
                }, {
                    key: "initAudioPlayUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.enter_from,
                            n = void 0 === t ? "" : t, r = e.item_id, o = void 0 === r ? "" : r,
                            i = a(e, ["enter_from", "item_id"]),
                            c = {content_type: "album", content_id: o, from_album_list: 1, enter_from: n};
                        this.card.audioPlayUrl = (0, _.getAudioPlayUrl)(s({item_id: o}, i, {audio_extra: JSON.stringify(c)}))
                    }
                }, {
                    key: "initChannelUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = p.Urls.CHANNEL_PAGE + "?" + (0, _.toQuery)(e);
                        this.card.channelUrl = (0, _.getWebviewUrl)(t, {title: "小说频道", hide_bar: 0})
                    }
                }, {
                    key: "initAudioCategoryUrl", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = p.Urls.CATEGORY_PAGE + "?" + (0, _.toQuery)(e);
                        this.card.audioCategoryUrl = (0, _.getWebviewUrl)(t)
                    }
                }, {
                    key: "initRecParams", value: function () {
                        var e = window.Page, t = e.category_name, n = void 0 === t ? "" : t, r = e.enter_from,
                            a = void 0 === r ? "" : r, o = e.statistics, i = void 0 === o ? {} : o, c = e.log_pb,
                            l = void 0 === c ? "" : c;
                        this.recUrlParams = s({}, this.recUrlParams, {
                            category_name: n,
                            rec_enter: a,
                            group_id: i.group_id,
                            log_pb: "string" != typeof l ? JSON.stringify(l) : l
                        })
                    }
                }, {
                    key: "sendCardError", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.errmsg,
                            n = void 0 === t ? "" : t, r = window.Page.statistics, a = void 0 === r ? {} : r;
                        (0, _.reportSentry)(a.group_id + ", " + n, {
                            tags: {type: "server"},
                            extra: s({
                                article_group_id: a.group_id,
                                article_item_id: a.item_id,
                                card_id: this.card.id,
                                book_id: this.card.book_id
                            }, e),
                            level: "fatal"
                        })
                    }
                }, {
                    key: "sendNextGourpLog", value: function () {
                        this.logger.sendFeedEvent("click_nextgroup_detail", {bookshelf_type: "novel"})
                    }
                }, {
                    key: "addBookshelf", value: function () {
                        (0, _.addChannel)(), this.logger.sendEventV3("click_fictioncard_care");
                        var e = this;
                        $.ajax({
                            url: p.Urls.ADD_BOOKSHELF,
                            dataType: "jsonp",
                            data: {book_id: e.card.book_id},
                            beforeSend: function () {
                                if (e.card.isclicking) return !1;
                                e.card.isclicking = !0
                            },
                            complete: function () {
                                e.card.isclicking = !1
                            },
                            error: function () {
                                (0, _.toast)("操作失败，请重试", "icon_error")
                            },
                            success: function (t) {
                                if (0 != t.code) return (0, _.toast)("操作失败，请重试", "icon_error"), e.sendCardError({
                                    errmsg: "加入书架失败",
                                    url: p.Urls.ADD_BOOKSHELF
                                }), !1;
                                e.card.is_concerned = 1, e.clickTarget.attr("is-concerned", !0).html("查看书架"), e.logger.sendFeedEvent("add_bookshelf", {
                                    button_name: "concern",
                                    bookshelf_type: "novel"
                                })
                            }
                        })
                    }
                }, {
                    key: "clickBookshelf", value: function () {
                        "true" === this.clickTarget.attr("is-concerned") ? (this.logger.sendEventV3("click_enter_bookshelf"), (0, _.navigateTo)(this.card.bookshelfUrl)) : this.addBookshelf()
                    }
                }, {
                    key: "clickReader", value: function () {
                        if ((0, _.addChannel)(), this.card.isAudio) return void((0, _.supportAuido)() ? (this.logger.sendEventV3("click_novel_card_playfree"), (0, _.navigateTo)(this.card.audioPlayUrl)) : (0, _.navigateTo)(this.card.pageUrl));
                        this.logger.sendEventV3("click_novel_card_readfree"), (0, _.navigateTo)(this.card.readerUrl)
                    }
                }, {
                    key: "clickMore", value: function () {
                        if ((0, _.addChannel)(), this.card.isAudio) return this.logger.sendEventV3("click_novel_card_more"), void(0, _.navigateTo)(this.card.audioCategoryUrl);
                        this.logger.sendEventV3("click_novel_card_channel"), (0, _.navigateTo)(this.card.channelUrl)
                    }
                }, {
                    key: "isCardInfoError", value: function () {
                        var e = this, t = this.card, n = t.book_id, r = t.poster, a = t.item_id, o = t.group_id,
                            i = t.card_type, s = t.name, c = {book_id: n, name: s, image: r};
                        i && (c.item_id = a, c.group_id = o);
                        var l = !1;
                        return Object.keys(c).forEach(function (t) {
                            var n = c[t];
                            n && 0 !== Number(n) || (l = !0, e.sendCardError({errmsg: "no " + t}))
                        }), l
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = $((0, u.default)(this.card));
                        t.on("click", function (t) {
                            e.sendNextGourpLog(), e.logger.sendEventV3("click_novel_card");
                            var n = $(t.target);
                            e.clickTarget = n;
                            return n.hasClass("bookshelf-button") ? (t.stopPropagation(), void e.clickBookshelf()) : n.hasClass("reader-button") ? (t.stopPropagation(), void e.clickReader()) : n.hasClass("fiction-link-text") ? (t.stopPropagation(), void e.clickMore()) : void(0, _.navigateTo)(e.card.pageUrl)
                        }), window.needCleanDoms.push(t);
                        var n = window.Page || {}, r = n.article, a = void 0 === r ? {} : r, o = n.novel_data,
                            i = void 0 === o ? {} : o;
                        "pgc" == a.type && i.show_new_keep_reading ? $("footer").append(t) : $("footer").prepend(t), this.logger.sendShowEventV3(t.get(0), "show_novel_card")
                    }
                }]), e
            }()
        }, AESC: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            t.Urls = {
                BOOK_PAGE: "https://ic.snssdk.com/feoffline/novel/book/page/v1/index.html",
                CHANNEL_PAGE: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
                BOOKSHELF_PAGE: "https://ic.snssdk.com/feoffline/novel/book/bookshelf/v2/page/index.html",
                READER_V2: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v2/page/index.html",
                READER_V3: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v3/page/index.html",
                ADD_BOOKSHELF: "https://ic.snssdk.com/novel/book/bookshelf/v1/add/",
                AUDIO_BOOK_PAGE: "https://ic.snssdk.com/novel/audio_book/view/v1/",
                CATEGORY_PAGE: "https://ic.snssdk.com/novel/channel/v4/category/page/"
            }
        }, Xy35: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard fiction">\n    <div class="pcard-container ' + (null == (__t = card_type ? "pcard-vertical-top-border pcard-bottom-0" : "pcard-vertical-border pcard-bottom-1") ? "" : __t) + '">\n        <div class="pcard-clearfix">\n            <div class="pcard-pull-left" style="position: relative">\n                <img class="fiction-image" src="' + (null == (__t = poster) ? "" : _.escape(__t)) + '"/>\n                <span class="tag ' + (null == (__t = 2 == card_type ? "original" : "") ? "" : __t) + '"></span>\n                <i class="' + (null == (__t = isAudio ? "audio" : "") ? "" : __t) + '" ></i>\n            </div>\n            <div class="fiction-right-wrap">\n                <div class="fiction-right-content">\n                    ', card_type ? __p += '\n                        <button class="button reader-button pcard-button fiction-button pcard-pull-right red-pcard-button">\n                            ' + (null == (__t = isAudio ? "免费试听" : "免费试读") ? "" : __t) + "\n                        </button>\n                    " : __p += '\n                        <button\n                            class="button bookshelf-button pcard-button fiction-button pcard-pull-right red-pcard-button"\n                            action="concern"\n                            is-concerned="' + (null == (__t = Boolean(is_concerned)) ? "" : _.escape(__t)) + '"\n                            concern-id="' + (null == (__t = concern_id) ? "" : _.escape(__t)) + '"\n                            forum-id="' + (null == (__t = forum_id) ? "" : _.escape(__t)) + '"\n                            book-id="' + (null == (__t = book_id) ? "" : _.escape(__t)) + '"\n                        >' + (null == (__t = is_concerned ? "查看书架" : "加入书架") ? "" : _.escape(__t)) + "</button>\n                    ", __p += '\n                    <div class="pcard-h16 pcard-w1 pcard-o1" style="margin-top: 2px">' + (null == (__t = name) ? "" : _.escape(__t)) + '</div>\n                    <div class="pcard-h12 pcard-w1 pcard-o1" style="margin-top: 6px">' + (null == (__t = author) ? "" : _.escape(__t)) + '</div>\n                    <div class="pcard-h12 pcard-w3" style="margin-top: 6px">\n                        ', isAudio ? __p += "\n                            " + (null == (__t = category) ? "" : _.escape(__t)) + " " + (null == (__t = 0 == creation_status ? "已完结" : "已更新" + chapter_count + "集") ? "" : __t) + "\n                        " : __p += "\n                            " + (null == (__t = category) ? "" : _.escape(__t)) + " " + (null == (__t = 0 == creation_status ? "已完结" : "连载中") ? "" : __t) + " " + (null == (__t = word_number) ? "" : _.escape(__t)) + "\n                        ", __p += "\n                    </div>\n                </div>\n            </div>\n        </div>\n        ", card_type && (__p += '\n            <p class="fiction-link">\n                <span class="fiction-link-text">点击查看更多小说</span>\n                <i class="pcard-icon icon-right"></i>\n            </p>\n        '), __p += "\n    </div>\n</div>\n";
                return __p
            }
        }, bqnp: function (e, t, n) {
            "use strict";

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.category_name,
                    r = void 0 === n ? "" : n, o = e.enter_from, i = void 0 === o ? "" : o, s = e.statistics,
                    c = void 0 === s ? {} : s, l = e.log_pb, u = void 0 === l ? "" : l, d = c.item_id,
                    f = void 0 === d ? "" : d, p = c.group_id, _ = void 0 === p ? "" : p, m = t.book_id,
                    h = void 0 === m ? "" : m, v = t.id, g = void 0 === v ? "" : v, y = t.card_type,
                    b = void 0 === y ? "" : y, w = t.isAudio, E = void 0 !== w && w,
                    k = {item_id: f, group_id: _, novel_id: h, is_novel: 1};
                return E && (k.novel_type = "audiobook"), {
                    sendShowEventV1: function (e, t, n, r) {
                        window.sendUmengWhenTargetShown(e, t, n, r, !0)
                    }, sendEventV1: function (e, t, n) {
                        window.send_umeng_event(e, t, n)
                    }, sendShowEventV3: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        window.sendUmengWhenTargetShown(e, t, "", a({card_id: g, type: b}, k, n), !0, {version: 3})
                    }, sendEventV3: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        window.sendUmengEventV3(e, a({card_id: g, type: b}, k, t))
                    }, sendFeedEvent: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        window.sendUmengEventV3(e, a({
                            category_name: r,
                            enter_from: i,
                            log_pb: "string" != typeof u ? JSON.stringify(u) : u
                        }, k, t))
                    }
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = r
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("16qv"), a = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(r);
            !function () {
                window.cardEvent && window.cardEvent.on("cards", function (e) {
                    console.info("cards info", e), e.cards && e.cards.forEach(function (e) {
                        "fiction" === e.type && (0, a.default)(e)
                    })
                })
            }(), function () {
                window.ToutiaoJSBridge && window.ToutiaoJSBridge.on("page_state_change", function (e) {
                    console.log("page_state_change", e);
                    var t = e || {}, n = t.type, r = void 0 === n ? "" : n, a = t.id, o = void 0 === a ? "" : a,
                        i = t.status, s = void 0 === i ? 0 : i;
                    if ("concern_action" === r) {
                        var c = $($(".fiction .bookshelf-button")[0]);
                        if (c) {
                            var l = c.attr("book-id");
                            if (0 !== String(o).indexOf(l)) {
                                var u = !!s, d = u ? "查看书架" : "加入书架";
                                c.attr("is-concerned", u).html(d)
                            }
                        }
                    }
                })
            }()
        }, mb6z: function (e, t, n) {
            "use strict";

            function r(e) {
                return Object.keys(e).map(function (t) {
                    return [t, e[t]].join("=")
                }).join("&")
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "sslocal://webview?" + r(p({
                    url: encodeURIComponent(e),
                    hide_more: 1,
                    hide_bar: 1,
                    disable_web_progressView: 1,
                    should_append_common_param: 1,
                    bounce_disable: 1,
                    use_offline: 1
                }, t))
            }

            function o(e, t) {
                return (e ? "sslocal://novel_reader" : "sslocal://novel") + "?" + r({
                    url: encodeURIComponent(t),
                    should_append_common_param: 1,
                    bounce_disable: 1,
                    hide_more: 1,
                    hide_bar: 1,
                    style_canvas: 1,
                    hide_back_buttonView: 1,
                    use_offline: 1
                })
            }

            function i(e) {
                return "sslocal://detail/audio?" + r(e)
            }

            function s(e) {
                window.ToutiaoJSBridge.call("getSubScribedChannelList", {}, function (t) {
                    (t.list || []).slice(0, 6).indexOf("novel_channel") < 0 ? e && "function" == typeof e && e(!1) : e && "function" == typeof e && e(!0)
                })
            }

            function c() {
                s(function (e) {
                    e || window.ToutiaoJSBridge.call("addChannel", {
                        category: "novel_channel",
                        web_url: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
                        name: "小说",
                        type: 5,
                        flags: 1
                    })
                })
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                window.ToutiaoJSBridge.call("toast", {text: e, icon_type: t})
            }

            function u(e) {
                window.location.href = e
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.Raven && window.Raven.captureException(new Error("novel card error: " + e, t))
            }

            function f() {
                var e = {android: "6.8.0", ios: "6.8.1"}, t = window.client.isAndroid ? "android" : "ios";
                return window.client.isNewsArticleVersionNoLessThan(e[t])
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.toQuery = r, t.getWebviewUrl = a, t.getNovelReaderUrl = o, t.getAudioPlayUrl = i, t.isOnHomePage = s, t.addChannel = c, t.toast = l, t.navigateTo = u, t.reportSentry = d, t.supportAuido = f
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        "7udq": function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("JUSK"), r = {
                    value: Page.statistics.group_id,
                    extra: {
                        item_id: Page.statistics.item_id,
                        card_type: e.type,
                        card_id: e.id,
                        vid: e.vid,
                        game_id: e.game_id
                    }
                }, a = e.type, o = $(t({card: e, className: a}));
                o.on("click", ".card", function (t) {
                    t.stopPropagation(), send_umeng_event("detail", "click_card_button", r), send_umeng_event("ad_game_wapchannel", "click_card_button", r), window.location.href = "sslocal://webview?url=" + encodeURIComponent(e.url) + "&title=" + (e.web_title || e.title) + "&use_webview_title=true"
                }), needCleanDoms.push(o), $("footer").append(o), sendUmengWhenTargetShown(o.get(0), "detail", "card_show", r, !0), sendUmengWhenTargetShown(o.get(0), "ad_game_wapchannel", "card_show", r, !0)
            }

            e.exports = r
        }, JUSK: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += "", "game_reserving_card" === className ? (__p += '\n  <div class="game_reserving_card pcard">\n    <div class="pcard-container pcard-clearfix card ">\n      <img class="card__icon" src="' + (null == (__t = card.icon) ? "" : __t) + '" alt="">\n\n      <div class="card__info">\n        <div class="card__title">' + (null == (__t = card.title) ? "" : __t) + '</div>\n        <div class="card__subtitle">' + (null == (__t = card.subtitle) ? "" : __t) + "</div>\n        ", card.reserve_count && (__p += '\n        <div class="card__reserve_count">\n          <span class="card__red">' + (null == (__t = card.reserve_count) ? "" : __t) + "</span>人已预约\n        </div>\n        "), __p += '\n      </div>\n\n      <div class="card__btn button pcard-button">' + (null == (__t = card.button_text || "立即预约") ? "" : __t) + "</div>\n    </div>\n  </div>\n") : (__p += '\n  <div class="game_reserving_big_card pcard">\n    <div class="pcard-container pcard-clearfix card ">\n      <img class="card__icon pcard-pull-left" src="' + (null == (__t = card.icon) ? "" : __t) + '" alt="">\n\n      <div class="card__info">\n        <div class="card__title">' + (null == (__t = card.title) ? "" : __t) + "</div>\n\n        ", card.reserve_count && (__p += '\n        <div class="card__reserve_count">\n          <span class="card__red">' + (null == (__t = card.reserve_count) ? "" : __t) + "</span>人已预约\n        </div>\n        "), __p += '\n\n        <div class="card__btn button pcard-button">' + (null == (__t = card.button_text || "立即预约") ? "" : __t) + "</div>\n      </div>\n    </div>\n  </div>\n"), __p += "\n";
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("7udq");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        var t = e.type;
                        "game_reserving_big_card" !== t && "game_reserving_card" !== t || r(e)
                    })
                })
            }()
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        AzxD: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard health-quiz">\n    <div class="pcard-container pcard-border" click-pos="2">\n        <div class="health-quiz-title ' + (null == (__t = data.multi) ? "" : __t) + '">\n            <i class="health-quiz-title-icon-left"></i>\n            <div class="health-quiz-title-text-wrap">\n                <p class="health-quiz-title-text">' + (null == (__t = data.title) ? "" : __t) + '</p>\n                <div class="health-quiz-title-text-placeholder"></div>\n                <div class="health-quiz-title-icon-right-shadow"></div>\n            </div>\n            <i class="health-quiz-title-icon-right"></i>\n        </div>\n        <div class="health-quiz-button" click-pos="1">\n            <span class="health-quiz-button-text">' + (null == (__t = data.buttonLabel) ? "" : __t) + "</span>\n        </div>\n    </div>\n</div>";
                return __p
            }
        }, gUxQ: function (e, t, n) {
            function r(e) {
                function t() {
                    var t = "sslocal://webview?url=" + encodeURIComponent("https://insurance.snssdk.com/web/health-quiz/articleCard/quiz?device_id=" + e.did + "&quiz_id=" + e.tid + "&entry_from=8") + "&title=" + encodeURIComponent("健康答题") + "&hide_bar=1&hide_status_bar=1&hide_more=1&back_button_color=white&disable_web_progressView=1&hide_close_btn=1&should_append_common_param=1&hide_back_buttonView=1";
                    setTimeout(function () {
                        location.href = t
                    }, 200)
                }

                function r(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }

                var a = n("AzxD"), o = {
                    gid: Page.statistics.group_id,
                    gid_title: Page.article.title,
                    keyword: e.keyword,
                    gid_type: e.gid_type,
                    keyword_score: "" + e.keyword_score,
                    question_id: e.qid ? "" + e.qid : "",
                    quiz_id: "" + e.tid
                };
                e.buttonLabel = 132 == e.tid ? "答题赢健康保障金" : "答题赢抗癌保障金";
                var i = $(a({data: e})), s = !1;
                i.on("click", "[click-pos]", function (n) {
                    n.stopPropagation(), s || (s = !0, setTimeout(function () {
                        s = !1
                    }, 1e3), sendUmengEventV3("article_card_click", r({
                        click_position: this.getAttribute("click-pos"),
                        type: e.is_insured ? "2" : "1"
                    }, o)), t())
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengEventV3("article_show", o), sendUmengWhenTargetShown(i.get(0), "article_card_show", "", o, !0, {version: 3})
            }

            e.exports = r
        }, lVK7: function (e, t, n) {
            const r = n("gUxQ");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "health-quiz-cancer" === e.type && r(e)
                    })
                })
            }()
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        ZWQL: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) {
                    if (__p += '<div class="pcard op-stock">\n    ', data.length >= 3) {
                        __p += '\n    <div class="pcard-container pcard-vertical-border opstock-body">\n        ';
                        for (var i in data) {
                            var _tempStock = data[i];
                            __p += '\n        <div class="pcard-h16-large opstock-item">\n            <a href="' + (null == (__t = _tempStock.url) ? "" : __t) + '" data-label = "card_detail" class="opstock-item-info">\n                <span class="pcard-w1 opstock-item-name">' + (null == (__t = _tempStock.name) ? "" : __t) + "</span>\n                ", 2 == _tempStock.rise ? __p += '\n                <span class="opstock-txt-up ml15">' + (null == (__t = _tempStock.price) ? "" : __t) + '</span>\n                <span class="opstock-txt-up ml15">' + (null == (__t = _tempStock.rate) ? "" : __t) + "</span>\n                " : 3 == _tempStock.rise ? __p += '\n                <span class="opstock-txt-down ml15">' + (null == (__t = _tempStock.price) ? "" : __t) + '</span>\n                <span class="opstock-txt-down ml15">' + (null == (__t = _tempStock.rate) ? "" : __t) + "</span>\n                " : __p += '\n                <span class="opstock-txt-stop ml15">' + (null == (__t = _tempStock.price) ? "" : __t) + '</span>\n                <span class="opstock-txt-stop ml15">' + (null == (__t = _tempStock.rate) ? "" : __t) + "</span>\n                ", __p += "\n            </a>\n\n            ", 0 == _tempStock.selected ? __p += '\n            <a class="button pcard-w1 opstock-button" data-stock="' + (null == (__t = _tempStock.code) ? "" : __t) + '" action="addStock">\n                <span><i class="pcard-icon opstock-iconfont icon-plus"></i></span>自选股\n            </a>\n            ' : __p += '\n            <a class="opstock-button pcard-w3"><span><i class="pcard-icon opstock-iconfont icon-done"></i></span>已添加</a>\n            ', __p += "\n        </div>\n        "
                        }
                        __p += '\n    </div>\n    <a class="pcard-w1 pcard-h14 pcard-footer" href="sslocal://webview?hide_bar=1&bounce_disable=1&url=http%3A%2F%2Fic.snssdk.com%2Fstock%2Fget_quota%2F%23tab%3Dportfolio" data-label="card_selected">\n        进入我的自选股<span><i class="pcard-icon opstock-iconfont icon-rarrow opstock-rarrow"></i></span>\n    </a>\n    '
                    } else __p += '\n    <div class="pcard-caption">\n        <span class="pcard-h14 pcard-w1">相关股票</span>\n    </div>\n    <div class="pcard-container pcard-border opstock-body-single" >\n        <div class="pcard-clearfix">\n            <div class="pcard-pull-left opstock-block ' + (null == (__t = 2 === data[0].rise ? "opstock-upblock" : 3 === data[0].rise ? "opstock-downblock" : "opstock-stopblock") ? "" : __t) + '" data-label="card_content" data-href="' + (null == (__t = data[0].url) ? "" : __t) + '">\n                <div class="opstock-price">' + (null == (__t = 0 === data[0].rise ? "停牌" : data[0].price) ? "" : __t) + '</div>\n                <div class="opstock-change">' + (null == (__t = 0 === data[0].rise ? 0 : data[0].change) ? "" : __t) + "(" + (null == (__t = 0 === data[0].rise ? "0.00%" : data[0].rate) ? "" : __t) + ')</div>\n            </div>\n            <div class="opstock-right opstock-info">\n                <button class="button pcard-button pcard-pull-right opstock-button-single ml8 mt16 ' + (null == (__t = isRedButton ? "red-pcard-button" : "") ? "" : __t) + '" ' + (null == (__t = data[0].selected ? "selected" : "") ? "" : __t) + ' data-stock="' + (null == (__t = data[0].code) ? "" : __t) + '" action="addStock" type=\'single\'>\n                    <i class="pcard-icon opstock-iconfont icon-plus"></i>\n                </button>\n                <div class="pcard-h16 pcard-w1 pcard-o1" style="font-weight: bold; margin-top: 8px;" data-label="card_content" data-href="' + (null == (__t = data[0].url) ? "" : __t) + '">' + (null == (__t = data[0].name) ? "" : _.escape(__t)) + '</div>\n                <div class="pcard-h14 pcard-w3" style="margin-top: 4px;" data-label="card_content" data-href="' + (null == (__t = data[0].url) ? "" : __t) + '">\n                    ', "HK" != data[0].market && "US" != data[0].market || (__p += '\n                    <i class="pcard-icon opstock-iconfont ' + (null == (__t = "HK" == data[0].market ? "icon-hk" : "icon-us") ? "" : __t) + '"></i>\n                    '), __p += "\n                    " + (null == (__t = data[0].code) ? "" : _.escape(__t)) + '\n                </div>\n            </div>\n        </div>\n        <a class="pcard-w1 pcard-h14 pcard-footer" href="sslocal://webview?hide_bar=1&bounce_disable=1&url=http%3A%2F%2Fic.snssdk.com%2Fstock%2Fget_quota%2F%23tab%3Dportfolio" data-label="card_selected">\n            进入我的自选股<span><i class="pcard-icon opstock-iconfont icon-rarrow opstock-rarrow"></i></span>\n        </a>\n    </div>\n\n    ';
                    __p += "\n</div>\n"
                }
                return __p
            }
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("pglA");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "stock" === e.type && r(e)
                    })
                })
            }()
        }, pglA: function (e, t, n) {
            "use strict";

            function r(e, t, n, r, a) {
                e.stopPropagation(), send_umeng_event("stock", "article_add_stock", a);
                var o, i = 0, s = t.attr("data-stock"), c = 0;
                if (r.forEach(function (e, t) {
                        e.code == s && (c = t, o = e.market), 0 == e.selected && i++
                    }), 1 != r[c].selected) {
                    $.ajax({
                        url: "http://ic.snssdk.com/stock/like/",
                        dataType: "jsonp",
                        data: {code: s, market: o},
                        beforeSend: function (e, t) {
                            if (r[c].isclicking || 1 == r[c].selected) return !1;
                            r[c].isclicking = !0
                        },
                        complete: function (e, t) {
                            r[c].isclicking = !1
                        },
                        error: function (e, t, n) {
                            ToutiaoJSBridge.call("toast", {text: "操作失败，请重试", icon_type: "icon_error"})
                        },
                        success: function (e, a, o) {
                            if (1 != e.code) return ToutiaoJSBridge.call("toast", {
                                text: 0 == e.code && e.data.msg ? e.data.msg : "操作失败，请重试",
                                con_type: "icon_error"
                            }), !1;
                            if (n.stocks.click_mount++, "single" === t.attr("type")) t.attr("selected", ""); else if (t.removeClass("pcard-w1").addClass("pcard-w3").html('<i class="pcard-icon opstock-iconfont icon-done"></i>已添加'), i > 3) {
                                t.css("height", 0);
                                var s = t.parent();
                                s.on("webkitAnimationEnd", function () {
                                    s.remove()
                                }), s.on("animationend", function () {
                                    s.remove()
                                }), s.addClass("ant-notification-fade-leave")
                            }
                            r[c].selected = !0
                        }
                    })
                }
            }

            function a(e) {
                var t = n("ZWQL"), a = {
                    value: Page.statistics.group_id,
                    extra: {item_id: Page.statistics.item_id, card_type: e.type, card_id: e.id}
                }, o = [], i = [];
                try {
                    i = JSON.parse(e.keyphrase_stock)
                } catch (e) {
                    console.error("stock json parse error", e)
                }
                if (i.forEach(function (t) {
                        if (e.stocks[t]) try {
                            o.push(JSON.parse(e.stocks[t]))
                        } catch (e) {
                            console.error("stock json parse error", e)
                        }
                    }), 0 !== o.length) {
                    send_umeng_event("stock", "article_with_card", a);
                    var s = [];
                    if (s = o.filter(function (e, t) {
                            return 0 == e.selected
                        }), 0 != s.length) {
                        o.map(function (e, t) {
                            var n = ["us", "oq", "ny", "am", "ar", "ex"].indexOf("us") > -1,
                                r = "https://financal-stock-web.snssdk.com/mc/" + (n ? "stockUS" : "stock") + "?code=" + e.market + e.code + "&from=article";
                            e.url = "sslocal://webview?hide_bar=1&bounce_disable=1&url=" + encodeURIComponent(r), 1 == e.selected && s.push(e)
                        });
                        var c = $(t({data: s, isRedButton: Page.isRedFocusButton}));
                        c.on("click", ".button", function (t) {
                            t.stopPropagation(), send_umeng_event("detail", "click_card_button", a);
                            var n = $(this);
                            "addStock" == n.attr("action") && r(t, n, e, s, a)
                        }), c.find('[data-label="card_selected"]').on("click", function (e) {
                            e.stopPropagation(), send_umeng_event("stock", "article_into_mystock", a)
                        }), c.find('[data-label="card_detail"]').on("click", function (e) {
                            e.stopPropagation(), send_umeng_event("stock", "article_into_stock", a)
                        }), c.find('[data-label="card_content"]').on("click", function (e) {
                            e.stopPropagation(), location.href = this.dataset.href, send_umeng_event("stock", "article_into_stock", a)
                        }), needCleanDoms.push(c), $("footer").append(c), sendUmengWhenTargetShown(c.get(0), "detail", "card_show", a, !0)
                    }
                }
            }

            e.exports = a
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        lVK7: function (e, t, n) {
            "use strict";
            var r = n("x+yT");
            !function () {
                cardEvent.on("cards", function (e) {
                    e && e.cards && e.cards.forEach(function (e) {
                        "recommend_column_card" === e.type && r(e)
                    })
                })
            }()
        }, "x+yT": function (e, t, n) {
            "use strict";

            function r(e) {
                return Object.keys(e).map(function (t) {
                    return [t, e[t]].join("=")
                }).join("&")
            }

            function a(e) {
                var t = n("x3W8"), a = {
                    value: Page.statistics.group_id,
                    extra: {item_id: Page.statistics.item_id, card_type: e.type, card_id: e.id}
                };
                e.android = o(), e.author = e.author_desc && e.author_desc.replace(/-.*$/, "");
                var i = $(t(e));
                i.on("click", ".container", function (t) {
                    t.stopPropagation(), send_umeng_event("click_column_link", {
                        group_id: window.Page.statistics.group_id,
                        column_id: e && e.column_id,
                        fee: 100 * e.price,
                        bookshelf_type: "column",
                        is_column: 1,
                        is_autocard: 1
                    });
                    var n = {column_id: e && e.column_id, enter_from: "click_article_recommend"},
                        a = "https://ic.snssdk.com/column/v2/index/column/?" + r(n), o = {
                            title: " ",
                            url: encodeURIComponent(a),
                            hide_more: 1,
                            hide_bar: 1,
                            hide_status_bar: 1,
                            status_bar_color: "white",
                            back_button_color: "white",
                            disable_web_progressView: 1,
                            should_append_common_param: 1
                        }, i = "sslocal://webview?" + r(o);
                    console.log(i), setTimeout(function () {
                        window.location.href = i
                    }, 200)
                }), i.on("click", ".read-more", function (e) {
                    var t = {enter_from: "click_article_recommend", parent_enterfrom: "click_article_recommend"},
                        n = "https://ic.snssdk.com/column/v2/index/column/channel/?" + r(t), a = {
                            title: encodeURIComponent("专栏"),
                            url: encodeURIComponent(n),
                            hide_more: 1,
                            show_load_anim: 1,
                            waiting_hide_anim: 1,
                            disable_web_progressView: 1,
                            should_append_common_param: 1
                        }, o = "sslocal://webview?" + r(a);
                    setTimeout(function () {
                        window.location.href = o
                    }, 200)
                }), needCleanDoms.push(i), $("footer").append(i), sendUmengWhenTargetShown(i.get(0), "detail", "card_show", a, !0)
            }

            function o() {
                var e = navigator.userAgent;
                return e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
            }

            e.exports = a
        }, x3W8: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div\n    id="auto-column-card"\n    class="surface-4 line-1"\n> \n    <div class="column-tips font-1">\n        相关专栏推荐\n    </div>\n    <div class="container">\n        <div class="cover surface-3 line-1">\n            <img\n                src="' + (null == (__t = thumb_url) ? "" : _.escape(__t)) + '"\n                alt=""\n            />\n            <i class="column" />\n        </div>\n        <div class="content">\n            <div class="title font-1">' + (null == (__t = title) ? "" : _.escape(__t)) + '</div>\n            <div\n                class="author font-2"\n            >\n                作者：' + (null == (__t = author) ? "" : _.escape(__t)) + '\n            </div>\n            <div class="info  ' + (null == (__t = android ? "android" : "") ? "" : __t) + '">\n                <span\n                    class="price font-4"\n                >\n                    ' + (null == (__t = price ? price / 100 + "元" : "免费") ? "" : _.escape(__t)) + '\n                </span>\n                <span\n                    class="count font-3 line-1"\n                >\n                    ' + (null == (__t = sold) ? "" : _.escape(__t)) + '人已购\n                </span>\n            </div>\n            <div class="button font-12 surface-7 ' + (null == (__t = android ? "android" : "") ? "" : __t) + '">\n                进入专栏\n            </div>\n        </div>\n    </div>\n    <div class="read-more surface-3 font-1">查看更多优质专栏</div>\n</div>';
                return __p
            }
        }
    })
}, function (module, exports) {
    !function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = "lVK7")
    }({
        DbSY: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = void 0;
                return "number" != typeof e && (e = parseFloat(e) ? parseFloat(e) : 0), e < 1e4 ? e + "" : e < 1e5 ? (t = (e / 1e4).toFixed(1), "0" === t.split(".")[1] ? t.split(".")[0] + "万" : t + "万") : e < 1e8 ? Math.floor(e / 1e4) + "万" : e < 1e9 ? (t = (e / 1e8).toFixed(1), "0" === t.split(".")[1] ? t.split(".")[0] + "亿" : t + "亿") : Math.floor(e / 1e8) + "亿"
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
        }, GdXA: function (module, exports) {
            module.exports = function (obj) {
                var __t, __p = "", __j = Array.prototype.join, print = function () {
                    __p += __j.call(arguments, "")
                };
                with (obj || {}) __p += '<div class="pcard topic">\n    <p class="pcard-title">相关专题</p>\n    <div class="pcard-container pcard-border topic-content" >\n        <div class="pcard-clearfix">\n            <div class="topic-cover-image" style="background-image: url(' + (null == (__t = data.topic_card.cover_image.url) ? "" : __t) + ')">\n                <p class="image-shadow"></p>\n                <div class="topic-text">\n                    ', data.topic_card && data.topic_card.hotsearch_logo && data.topic_card.hotsearch_logo.url && (__p += '\n                    <p class="topic-logo" style="background-image: url(' + (null == (__t = data.topic_card.hotsearch_logo.url) ? "" : __t) + ')"></p>\n                    '), __p += '\n                    <div class="topic-title">' + (null == (__t = data.topic_card.title) ? "" : __t) + '</div>\n                </div>\n            </div>\n            <div class="topic-description">\n                <span class="looker">' + (null == (__t = data.topic_card.read_count) ? "" : __t) + '人讨论</span>\n                <span class="go-detail-btn">参与讨论</span>\n            </div>\n        </div>\n    </div>\n</div>\n';
                return __p
            }
        }, dC9T: function (e, t, n) {
            "use strict";

            function r(e) {
                var t = n("GdXA"), r = n("DbSY").default, a = Object.assign({}, Page.statistics, {
                    from_gid: Page.statistics.group_id,
                    group_id: e.topic_card.topic_id,
                    hot_topic_type: "big_picture"
                }), o = e && e.topic_card.read_count;
                e.topic_card.read_count = r(o);
                var i = $(t({data: e}));
                i.on("click", ".topic-content", function (t) {
                    t.stopPropagation(), sendUmengEventV3("go_detail", a), location.href = e.topic_card.schema
                }), needCleanDoms.push(i), $("footer .footer-cards-container").append(i), sendUmengWhenTargetShown(i.get(0), "hot_topic_show", "", a, !0, {version: 3})
            }

            e.exports = r
        }, lVK7: function (e, t, n) {
            "use strict";
            var r = n("dC9T");
            !function () {
                cardEvent.on("cards", function (e) {
                    console.info("cards info", e), e && e.cards && e.cards.forEach(function (e) {
                        "hotspot_topic" === e.type && r(e)
                    })
                })
            }()
        }
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(0), o = r(a), i = (n(5), n(119)), s = r(i), c = n(120), l = r(c), u = n(121), d = r(u), f = n(3),
        p = n(122), _ = r(p), m = n(123), h = r(m), v = n(124), g = r(v), y = n(1);
    n(125);
    var b = function (e) {
        console.info("WendaFooter", e);
        var t = e.data || {}, n = t.wendaExtra || {}, r = t.wendaContext || {}, i = t.author || {}, c = t.setting || {},
            u = t.statistic || {}, p = t.useServerV, m = t.context || {}, v = m.cards || [], b = t.article || {},
            w = n.mis_coop_user || {}, E = w.link || "";
        i.cooperate_text = w.profile, i.cooperate_link = -1 !== E.indexOf("http") ? "sslocal://webview?url=" + encodeURIComponent(E) + "&title=%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88" : E;
        var k = {
                wendaContext: r,
                wendaExtra: n,
                setting: c,
                author: i,
                showUserDecoration: y.client.isNewsArticleVersionNoLessThan("6.5.6"),
                osVersion: y.client.osVersion,
                useServerV: p
            }, x = parseInt(t.wendaExtra.wd_version), S = n.show_post_answer_strategy || {}, O = c.is_liteapp,
            j = document.querySelector("article").clientHeight, C = (0, f.getViewport)().height;
        return o.default.createElement(a.Fragment, null, function (e) {
            return x >= 3 ? o.default.createElement(s.default, {data: e}) : null
        }(t), o.default.createElement("div", {className: "footer-cards-container"}, function (e) {
            if (!window.disabledBroadcastCardsEvent && m && m.cards && j > C && (window.cardEvent && window.cardEvent.broadcast("cards", document.querySelector(".footer-cards-container"), m), window.disabledBroadcastCardsEvent = !0), "wenda" === b.type && n && w.uid === i.userId) return o.default.createElement(l.default, {data: k});
            if (x < 1 || x >= 3 && 1 == n.showMode) return null;
            var t = 1, a = 0, s = {};
            if (v && Array.isArray(v) && v.find(function (e) {
                    var n = e.type || "";
                    return "auto" === n || "auto_show" === n || "auto_dealer" === n || "new_auto_dealer" === n ? (t = 0, !0) : ("author" === n && (t = 0, a = 1, s = (0, y.extend)(!0, {}, e)), !1)
                }), a && !r.is_author && "following" !== i.followState && j > 1.5 * C && !O) {
                var f = n && n.gd_ext_json ? n.gd_ext_json.category_name : "";
                if (s.link = "sslocal://profile?uid=" + s.user_id + "&refer=wenda&from_page=detail_answer_wenda_centre_button&category_name=" + f, s.user_auth_info) try {
                    s.user_auth_info = JSON.parse(s.user_auth_info)
                } catch (e) {
                    s.user_auth_info = {}
                }
                var h = [];
                h.push(y.fmt.formatCount(s.fans_count, "0") + "粉丝"), h.push(y.fmt.formatCount(s.user_digg_count, "0") + "赞"), s.userIntroStr = h.join(" · ");
                var g = {data: s, statistic: u, setting: c, useServerV: p, wendaExtra: n};
                return o.default.createElement(_.default, {data: g})
            }
            return "show_bottom" in S && t && !O && j > 2 * C ? o.default.createElement(d.default, {
                data: e,
                ansStrategy: S
            }) : null
        }(t)), function () {
            return m.activity_info ? o.default.createElement(g.default, {
                info: m.activity_info,
                wendaExtra: n
            }) : j > 1.5 * C && !O ? o.default.createElement(h.default, {
                questions: m.related_questions,
                originalQid: n.qid
            }) : void 0
        }())
    };
    t.default = b
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(0), o = r(a), i = n(2), s = r(i), c = function (e) {
        function t() {
            s.default.invoke("report")
        }

        function n() {
            s.default.invoke("dislike", {options: 17})
        }

        function r(e) {
            var t = e.target;
            s.default.invoke("dislike", {options: 17}, function (e) {
                e.err_no || (window.wendaOppose ? u >= 8 && (t.classList.remove("is-buryed"), t.innerHTML = "反对", window.wendaOppose = !window.wendaOppose) : (t.classList.add("is-buryed"), t.innerHTML = "已反对", window.wendaOppose = !window.wendaOppose))
            })
        }

        console.info("WendaFooterComp", e);
        var i = e.data, c = (i.article, i.wendaExtra || {}), l = i.wendaContext || {}, u = parseInt(c.wd_version),
            d = l.is_buryed, f = c.detail_related_report_style;
        window.wendaOppose = d;
        return l.linkurl || l.is_author || u >= 6 && (u < 13 || 2 != f && 3 != f) || 0 == f && u < 6 ? o.default.createElement("div", {className: "wd-footer"}, l.linkurl ? o.default.createElement("a", {
            href: "sslocal://webview?url=" + encodeURIComponent(l.linkurl) + "&title=%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88",
            className: "link-more",
            id: "wd-link-more"
        }, "了解更多") : null, function () {
            if (l.is_author) return void 0 !== l.can_edit_answer ? o.default.createElement("a", {
                className: "editor-edit-answer no-icon",
                href: l.edit_answer_schema
            }, "编辑") : null;
            if (u >= 6 && (u < 13 || 2 != f && 3 != f)) {
                var e = l.is_buryed ? "已反对" : "反对";
                return o.default.createElement(a.Fragment, null, o.default.createElement("a", {
                    className: "report " + (f ? "" : "no-icon"),
                    onClick: t
                }, "举报"), f ? null : o.default.createElement("span", {
                    style: {fontSize: "12px"},
                    className: "sep for-report"
                }, "|"), f ? null : o.default.createElement("div", {
                    item: "dislike-and-report",
                    className: "dislike-and-report no-icon",
                    style: {},
                    onClick: r
                }, e))
            }
            return 0 == f && u < 6 ? o.default.createElement("div", {
                className: "dislike-and-report",
                onClick: n
            }, "不喜欢") : null
        }()) : null
    };
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function (e) {
        console.info("WendaCooperate", e);
        var t = e.data, n = t.setting || {}, r = t.author || {};
        return a.default.createElement("div", {className: "wenda-panel-co"}, a.default.createElement("div", {className: "wenda-cooperate"}, a.default.createElement("div", {className: "authorbar wenda clearfix"}, a.default.createElement("a", {
            className: "author-avatar-link pgc-link",
            href: r.link
        }, a.default.createElement("div", {className: "author-avatar"}, a.default.createElement("img", {
            className: "author-avatar-img",
            src: r.avatar
        })), t.useServerV && r.auth_info ? function (e, r) {
            var o = n.user_verify_info_conf["" + e];
            return o && (o = o[r]) ? (r = o.icon, r = parseFloat(t.osVersion) > 4.4 ? o.web_icon_android : o.icon_png, a.default.createElement("div", {className: "server-v-icon-wrap"}, a.default.createElement("i", {
                className: "server-v-icon",
                style: {backgroundImage: "url(" + r + ")"}
            }, " "))) : null
        }(r.auth_type, "avatar_icon") : null), t.showUserDecoration && r.user_decoration && r.user_decoration.url ? a.default.createElement("div", {
            className: "avatar-decoration",
            style: {backgroundImage: "url(" + r.user_decoration.url + ")"}
        }) : null, a.default.createElement("div", {className: "avatar-decoration avatar-night-mask"}), a.default.createElement("div", {className: "author-bar"}, a.default.createElement("div", {className: "name-link-wrap"}, a.default.createElement("div", {className: "name-link-w"}, a.default.createElement("a", {
            className: "author-name-link pgc-link",
            href: r.link
        }, r.name, a.default.createElement("span", {className: "cooper-tag"}, "问答战略合作伙伴")))), a.default.createElement("a", {
            className: "sub-title-w",
            href: r.link
        }, a.default.createElement("span", {className: "sub-title"}, r.cooperate_text)))), a.default.createElement("a", {
            className: "cooperate-link",
            href: r.cooperate_link
        }, a.default.createElement("span", {className: "txt"}, "查看官方网站", a.default.createElement("em", {className: "iconfont"}, "")))))
    };
    t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(0), o = r(a), i = n(1), s = n(3), c = n(8), l = r(c), u = function (e) {
        var t = e.data, n = e.ansStrategy || {}, r = n.show_bottom || {}, a = t.wendaExtra, c = {
            value: a.qid,
            ext_value: a.nice_ans_count,
            extra: {
                enter_from: a.enter_from,
                ansid: a.ansid,
                parent_enterfrom: a.parent_enterfrom || "",
                group_id: a.ansid
            }
        }, u = function () {
            i.statistics.sendUmengEventV3("answer_detail_bottom_write_answer", c)
        };
        return function () {
            l.default.add("show", {
                domSelector: "#wenda-answer",
                value: "answer_detail_bottom_write_answer_show",
                obj: c
            })
        }(), o.default.createElement("a", {
            style: {overflow: "initial"},
            onClick: u,
            href: (0, s.urlAddQueryParams)(r.schema || "", {source: "answer_detail_bottom_write_answer"}),
            className: "bottom-big-answer-button",
            id: "wenda-answer"
        }, o.default.createElement("div", {className: "pr"}, o.default.createElement("div", {className: "wdq"}, o.default.createElement("span", null, a.title)), o.default.createElement("div", {className: "bottom-answer-btn"}, o.default.createElement("div", {className: "btn-text"}, o.default.createElement("i", null, ""), r.text)), o.default.createElement("i", {className: "left-quote"}, ""), o.default.createElement("i", {className: "right-quote"}, "")))
    };
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(1), d = n(2), f = r(d), p = n(4), _ = n(27), m = r(_), h = function (e) {
        function t(e) {
            a(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.followDisabled = !1, n.serverSource = 80, n.state = {
                followState: "",
                followDisabled: !1
            }, n.useNewBottomCardStyle = u.client.isIOS && u.client.isNewsArticleVersionNoLessThan("6.9.4") || u.client.isAndroid && u.client.isNewsArticleVersionNoLessThan("6.9.3"), n
        }

        return i(t, e), s(t, [{
            key: "followActionHandler", value: function (e) {
                if (!this.followDisabled) {
                    this.followDisabled = !0, this.setState({followDisabled: !0});
                    var t = this.props.data, n = t.data, r = t.statistic, a = t.wendaExtra, o = this,
                        i = this.state.followState, s = {
                            id: n.user_id,
                            action: i ? "unfollow" : "dofollow",
                            source: this.serverSource,
                            from: "answer_detail_bottom_card"
                        }, c = {
                            to_user_id: n.user_id,
                            media_id: n.media_id,
                            follow_type: "from_group",
                            group_id: r.group_id,
                            item_id: r.item_id,
                            source: "detail_centre_button",
                            server_source: this.serverSource,
                            position: "detail"
                        };
                    c = (0, u.extend)(!0, c, a.gd_ext_json || {}), f.default.invoke("user_follow_action", s, function (e) {
                        o.followDisabled = !1, console.info("user_follow_action", i, e, s), e && 1 == +e.code ? o.setState({
                            followState: i ? "" : "following",
                            followDisabled: !1
                        }) : o.setState({followState: i ? "following" : "", followDisabled: !1})
                    }), u.statistics.sendUmengEventV3(i ? "rt_unfollow" : "rt_follow", c)
                }
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this;
                u.statistics.sendUmengWhenTargetShown(this.listDom, "user_card_show", "", {section: "detail_centre_button"}, !0, {version: 3}), p.pageEvent.on("pageStateChange", function (t) {
                    switch (t.type) {
                        case"user_action":
                            console.info("wendabottomuser", t, e.props.data.data.user_id), t.id == e.props.data.data.user_id && "status" in t && (e.setState({
                                followState: t.status ? "following" : "",
                                followDisabled: !1
                            }), e.followDisabled = !1);
                            break;
                        case"pgc_action":
                            t.id == e.props.data.data.media_id && "status" in t && (e.setState({
                                followState: t.status ? "following" : "",
                                followDisabled: !1
                            }), e.followDisabled = !1)
                    }
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                p.pageEvent.off("pageStateChange")
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.data, n = t.data, r = t.setting, a = t.statistic, o = t.useServerV,
                    i = "subscribe-button follow-button red-follow-button " + this.state.followState + (this.state.followDisabled ? " disabled" : ""),
                    s = "wenda-bt-user";
                return s += this.useNewBottomCardStyle ? n.show_bottom ? "" : " no-bottom" : n.show_bottom ? " no-bottom" : "", l.default.createElement("div", {
                    className: "wenda-bt-panel",
                    ref: function (t) {
                        e.listDom = t
                    }
                }, l.default.createElement("div", {className: n.show_bottom ? "wenda-bt-user no-bottom" : "wenda-bt-user"}, l.default.createElement("div", {className: "authorbar wenda"}, l.default.createElement(m.default, {
                    authorInfo: n,
                    useServerV: o,
                    setting: r,
                    statistic: a,
                    article: {type: "wenda"}
                }), l.default.createElement("div", {
                    className: "author-function-buttons",
                    onClick: this.followActionHandler.bind(this)
                }, l.default.createElement("button", {
                    className: i,
                    style: {display: "block"},
                    id: "subscribe"
                }, l.default.createElement("i", {className: "iconfont focusicon"}, " "), l.default.createElement("i", {className: "redpack"}))), l.default.createElement("div", {className: "" !== n.user_intro ? "author-bar auth-intro" : "author-bar"}, l.default.createElement("div", {className: "name-link-wrap"}, l.default.createElement("div", {className: "name-link-w"}, l.default.createElement("a", {
                    className: "author-name-link pgc-link",
                    href: n.link
                }, " ", n.user_name, " "))), "" !== n.user_intro ? l.default.createElement("a", {
                    className: "sub-title-w",
                    href: n.link
                }, " ", l.default.createElement("span", {className: "sub-title"}, n.user_intro), " ") : null, l.default.createElement("a", {
                    className: "sub-title-w",
                    href: n.link
                }, l.default.createElement("span", {className: "sub-title"}, n.userIntroStr))))))
            }
        }]), t
    }(l.default.Component);
    t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(s), l = n(25), u = function (e) {
        function t() {
            return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return o(t, e), i(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props.question;
                (0, l.addToJudgeShowList)({
                    el: this.itemRef,
                    id: e.qid,
                    impressItemInfo: {imp_item_type: 37, imp_item_id: e.qid + "_" + e.qid, imp_item_extra: {}}
                })
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.question;
                return c.default.createElement("a", {href: t.schema}, c.default.createElement("div", {
                    className: "question-item",
                    ref: function (t) {
                        e.itemRef = t
                    }
                }, c.default.createElement("p", {className: "text"}, t.title)))
            }
        }]), t
    }(s.Component), d = function (e) {
        function t() {
            return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return o(t, e), i(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props.originalQid;
                (0, l.registeImpressInfo)({
                    imp_group_list_type: 9,
                    imp_group_key_name: e + "_" + e,
                    imp_group_key: "wenda_detail",
                    imp_group_extra: {}
                })
            }
        }, {
            key: "render", value: function () {
                var e = this.props.questions;
                return e && 0 !== e.length ? c.default.createElement("div", {className: "related-question-list"}, c.default.createElement("h3", {className: "title"}, "相关问题"), e.map(function (e) {
                    return c.default.createElement(u, {key: e.qid, question: e})
                })) : null
            }
        }]), t
    }(s.Component);
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = n(1), i = function (e) {
        var t = e.wendaExtra || {}, n = e.info || {}, r = null,
            i = {qid: t.qid, ansid: t.ansid, position: "answer_detail"}, s = function () {
                o.statistics.sendUmengEventV3("spring_festival_card_click", i)
            };
        return function () {
            o.statistics.sendUmengWhenTargetShown(r, "spring_festival_card_show", "", i, !0, {version: 3})
        }(), a.default.createElement("div", {className: "activity-card"}, a.default.createElement("div", {className: "card-title"}, "问答活动"), a.default.createElement("a", {
            onClick: s,
            href: n.open_url,
            className: "card-content",
            ref: function (e) {
                r = e
            }
        }, a.default.createElement("div", null, a.default.createElement("div", {className: "avatar-wrap"}, a.default.createElement("img", {
            className: "avatar-image",
            src: n.img,
            alt: ""
        }))), a.default.createElement("div", {className: "text-wrap"}, a.default.createElement("div", {className: "desc"}, n.desc), a.default.createElement("div", {className: "sub-desc"}, a.default.createElement("span", {className: "text"}, n.sub_desc)))))
    };
    t.default = i
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), l = r(c), u = n(4), d = n(2), f = r(d);
    n(127);
    var p = function (e) {
        function t(e) {
            return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return i(t, e), s(t, [{
            key: "foldArticle", value: function (e) {
                u.pageEvent.broadcast("showArticleFoldWrap", null, !1), document.documentElement.classList.contains("noscroll") && document.documentElement.classList.remove("noscroll");
                var t = document.documentElement.offsetHeight || document.body.offsetHeight || document.documentElement.scrollHeight;
                f.default.invoke("article_open", {height: t}), e.preventDefault(), e.stopPropagation()
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return l.default.createElement(c.Fragment, null, l.default.createElement("div", {className: "article-fold-wrap"}, l.default.createElement("div", {className: "article-fold-content"}, l.default.createElement("span", {
                    onTouchEnd: function (t) {
                        return e.foldArticle(t)
                    }
                }, "点击展开全文"))))
            }
        }]), t
    }(l.default.Component);
    t.default = p
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.FilteredWenda = t.FileteredCard = t.FilteredFooter = t.FilteredHeader = void 0;
    var r = n(6), a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(r);
    t.FilteredHeader = function (e, t, n) {
        return e && n ? {
            article: e.article,
            author: e.author,
            setting: e.h5_settings,
            useServerV: e.useServerV,
            hasExtraSpace: e.hasExtraSpace,
            hideFollowButton: e.hideFollowButton,
            redPack: t ? t.red_pack : null,
            statistic: e.statistics,
            wendaExtra: a.get("wenda_extra"),
            wendaContext: t ? t.wenda_context : null
        } : null
    }, t.FilteredFooter = function (e, t, n) {
        return e && n ? {
            novelData: e.novel_data,
            setting: e.h5_settings,
            statistic: e.statistics,
            wendaExtra: a.get("wenda_extra"),
            wendaContext: t ? t.wenda_context : null,
            context: t
        } : null
    }, t.FileteredCard = function (e, t) {
        return e && t ? {setting: e.h5_settings, statistic: e.statistics, context: t} : null
    }, t.FilteredWenda = function (e, t, n) {
        return e && e.wenda_extra && n ? {
            wendaExtra: e.wenda_extra,
            article: e.article,
            wendaContext: t ? t.wenda_context : void 0,
            setting: e.h5_settings,
            useServerV: a.get("useServerV"),
            author: e.author,
            context: t,
            statistic: e.statistics
        } : null
    }
}, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, a = n(3), o = n(31);
    window.on_page_disappear = function () {
        "object" === r(window.mediasugScroll) && null !== window.mediasugScroll && "function" == typeof window.mediasugScroll.pushimpr && window.mediasugScroll.pushimpr(!1)
    }, window.getElementPosition = function (e) {
        var t = /^.image:nth-child\((\d+)\)$/, n = e.match(t);
        n && (e = ".image-container:nth-child(" + n[1] + ")>.image");
        var r = "{{0,0},{0,0}}", a = document.querySelector(e);
        if (a) {
            var o = a.getBoundingClientRect();
            r = "{{" + (o.left + window.pageXOffset) + "," + (o.top + window.pageYOffset) + "},{" + o.width + "," + o.height + "}}"
        }
        return r
    }, window.TouTiao = {
        setFontSize: o.changeFontsize,
        setDayMode: o.changeDayNightMode
    }, window.appCloseVideoNoticeWeb = function (e) {
        var t = document.querySelector('[data-vid="' + e + '"]');
        if (!t) return null;
        t.style.display = "block";
        var n = t.nextElementSibling;
        if (n) {
            var r = n.firstChild;
            r && (0, a.nz_closest)(r, ".cv-wd-info-wrapper", !0) && (n.style.display = "block")
        }
        document.body.style.marginTop = 0
    }, window.getVideoFrame = function (e) {
        var t = document.querySelector('[data-vid="' + e + '"]'), n = "{{0,0},{0,0}}";
        if (t) {
            var r = t.getBoundingClientRect();
            n = "{{" + r.left + "," + t.offsetTop + "},{" + r.width + "," + r.height + "}}"
        }
        return n
    }, window.webviewScrollEvent = function (e) {
    }
}, function (e, t, n) {
    "use strict";

    function r() {
        i.default.invoke("typos", {strings: a()})
    }

    function a() {
        var e = "", t = "", n = "", r = document.getSelection();
        if ("Range" !== r.type) return [e, t, n];
        var a = r.getRangeAt(0);
        if (!a) return [e, t, n];
        try {
            e = a.startContainer.textContent.substring(0, a.startOffset).substr(-20), t = a.toString(), n = a.endContainer.textContent.substring(a.endOffset).substring(0, 20)
        } catch (e) {
        }
        return a.detach(), a = null, [e, t, n]
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(2), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(o);
    t.default = r
}], [33]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kcm9pZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hbmRyb2lkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUE4c0RBOzs7Ozs7QUErOWlCQSIsInNvdXJjZVJvb3QiOiIifQ==
