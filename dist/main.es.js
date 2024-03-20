(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-tab-complete-wrapper{position:relative}.vue-tab-complete-wrapper input{z-index:10;padding:.5rem;padding-left:14px;width:100%;height:100%;color:#fff;border-color:#ced7d0;caret-color:#63666c}.vue-tab-complete-wrapper .input-overlay{position:absolute;left:.75rem;top:50%;transform:translateY(-50%)}.vue-tab-complete-wrapper .input-overlay .result-query{padding-top:.25rem;padding-bottom:.25rem;margin-left:.125rem;color:#000}.vue-tab-complete-wrapper .input-overlay .result-suggest{color:#9ca3af}.vue-tab-complete-wrapper .input-overlay .result-suggest .swiper{position:relative;margin-left:.8rem;font-size:.8rem;color:#cfd0d1}.vue-tab-complete-wrapper .input-overlay .result-suggest .swiper svg{position:absolute;top:-2px;right:-60%;width:18px;height:18px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { onMounted as D, nextTick as Q, getCurrentScope as X, onScopeDispose as z, unref as V, getCurrentInstance as j, reactive as W, computed as y, ref as g, watch as b, watchEffect as F, defineComponent as G, openBlock as O, createElementBlock as R, withDirectives as K, createElementVNode as _, vModelText as U, toDisplayString as H, createTextVNode as A, createCommentVNode as $ } from "vue";
function B(e) {
  return X() ? (z(e), !0) : !1;
}
function C(e) {
  return typeof e == "function" ? e() : V(e);
}
const J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Z = Object.prototype.toString, ee = (e) => Z.call(e) === "[object Object]", M = () => {
};
function te(e) {
  return e || j();
}
function ne(e, t = !0, n) {
  te() ? D(e, n) : t ? e() : Q(e);
}
function oe(e) {
  var t;
  const n = C(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const k = J ? window : void 0;
function S(...e) {
  let t, n, c, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, c, o] = e, t = k) : [t, n, c, o] = e, !t)
    return M;
  Array.isArray(n) || (n = [n]), Array.isArray(c) || (c = [c]);
  const d = [], l = () => {
    d.forEach((p) => p()), d.length = 0;
  }, s = (p, i, f, v) => (p.addEventListener(i, f, v), () => p.removeEventListener(i, f, v)), r = b(
    () => [oe(t), C(o)],
    ([p, i]) => {
      if (l(), !p)
        return;
      const f = ee(i) ? { ...i } : i;
      d.push(
        ...n.flatMap((v) => c.map((x) => s(p, v, x, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    r(), l();
  };
  return B(a), a;
}
function se() {
  const e = g(!1), t = j();
  return t && D(() => {
    e.value = !0;
  }, t), e;
}
function re(e) {
  const t = se();
  return y(() => (t.value, !!e()));
}
function ie(e, t = {}) {
  const { window: n = k } = t, c = re(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const d = g(!1), l = (a) => {
    d.value = a.matches;
  }, s = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", l) : o.removeListener(l));
  }, r = F(() => {
    c.value && (s(), o = n.matchMedia(C(e)), "addEventListener" in o ? o.addEventListener("change", l) : o.addListener(l), d.value = o.matches);
  });
  return B(() => {
    r(), s(), o = void 0;
  }), d;
}
function ue(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: c,
    onSwipeEnd: o,
    onSwipeStart: d,
    passive: l = !0,
    window: s = k
  } = t, r = W({ x: 0, y: 0 }), a = W({ x: 0, y: 0 }), p = y(() => r.x - a.x), i = y(() => r.y - a.y), { max: f, abs: v } = Math, x = y(() => f(v(p.value), v(i.value)) >= n), w = g(!1), N = y(() => x.value ? v(p.value) > v(i.value) ? p.value > 0 ? "left" : "right" : i.value > 0 ? "up" : "down" : "none"), T = (u) => [u.touches[0].clientX, u.touches[0].clientY], P = (u, h) => {
    r.x = u, r.y = h;
  }, I = (u, h) => {
    a.x = u, a.y = h;
  };
  let m;
  const L = ce(s == null ? void 0 : s.document);
  l ? m = L ? { passive: !0 } : { capture: !1 } : m = L ? { passive: !1, capture: !0 } : { capture: !0 };
  const Y = (u) => {
    w.value && (o == null || o(u, N.value)), w.value = !1;
  }, q = [
    S(e, "touchstart", (u) => {
      if (u.touches.length !== 1)
        return;
      m.capture && !m.passive && u.preventDefault();
      const [h, E] = T(u);
      P(h, E), I(h, E), d == null || d(u);
    }, m),
    S(e, "touchmove", (u) => {
      if (u.touches.length !== 1)
        return;
      const [h, E] = T(u);
      I(h, E), !w.value && x.value && (w.value = !0), w.value && (c == null || c(u));
    }, m),
    S(e, ["touchend", "touchcancel"], Y, m)
  ];
  return {
    isPassiveEventSupported: L,
    isSwiping: w,
    direction: N,
    coordsStart: r,
    coordsEnd: a,
    lengthX: p,
    lengthY: i,
    stop: () => q.forEach((u) => u())
  };
}
function ce(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", M, n), e.removeEventListener("x", M), t;
}
function le(e = {}) {
  const {
    window: t = k,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: c = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: d = !0
  } = e, l = g(n), s = g(c), r = () => {
    t && (d ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight));
  };
  if (r(), ne(r), S("resize", r, { passive: !0 }), o) {
    const a = ie("(orientation: portrait)");
    b(a, () => r());
  }
  return { width: l, height: s };
}
const ae = ["placeholder"], de = { class: "input-overlay" }, pe = { class: "result-query" }, fe = { class: "result-suggest" }, ve = {
  key: 0,
  class: "swiper"
}, he = /* @__PURE__ */ _(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  },
  [
    /* @__PURE__ */ _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    })
  ],
  -1
  /* HOISTED */
), me = /* @__PURE__ */ G({
  __name: "NextHint",
  props: {
    suggestions: { type: Array, required: !0, default: () => [] },
    placeholder: { type: String, required: !0, default: "" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, c = t, o = g(null), { width: d } = le(), { direction: l } = ue(o), s = g(""), r = y(() => s.value === "" ? null : n.suggestions.find((f) => f.toLowerCase().startsWith(s.value.toLowerCase()))), a = y(() => {
      var i;
      return s.value === "" || r.value === null ? null : (i = r.value) == null ? void 0 : i.substring(s.value.length);
    }), p = (i) => {
      i.key === "Tab" && (i.preventDefault(), r.value && (s.value = r.value));
    };
    return b(s, () => {
      c("change", s.value);
    }), b(l, (i) => {
      i === "right" && r.value && (s.value = r.value);
    }), (i, f) => (O(), R(
      "div",
      {
        ref_key: "nexthintRef",
        ref: o,
        class: "vue-tab-complete-wrapper"
      },
      [
        K(_("input", {
          "onUpdate:modelValue": f[0] || (f[0] = (v) => s.value = v),
          type: "text",
          class: "vue-tab-complete-input",
          onKeydown: p,
          placeholder: n.placeholder
        }, null, 40, ae), [
          [U, s.value]
        ]),
        _("div", de, [
          _(
            "span",
            pe,
            H(s.value),
            1
            /* TEXT */
          ),
          _("span", fe, [
            A(
              H(a.value) + " ",
              1
              /* TEXT */
            ),
            a.value && V(d) < 768 ? (O(), R("span", ve, [
              A(" swipe "),
              he
            ])) : $("v-if", !0)
          ])
        ])
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
const ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, o] of t)
    n[c] = o;
  return n;
}, _e = /* @__PURE__ */ ye(me, [["__file", "/opt/lampp/htdocs/phuc/vue-nexthint/src/NextHint.vue"]]);
export {
  _e as NextHint
};
