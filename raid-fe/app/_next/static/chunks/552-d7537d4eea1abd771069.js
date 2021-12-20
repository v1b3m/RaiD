(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    5075: function (t, e, n) {
      "use strict";
      n.d(e, {
        UQ: function () {
          return q;
        },
        KF: function () {
          return tt;
        },
        XE: function () {
          return nt;
        },
        Qd: function () {
          return Q;
        },
        Hk: function () {
          return et;
        },
      });
      var r = n(4767),
        i = n(3768),
        o = n(6254),
        a = n(4160),
        u = n(2468),
        s = n(6563),
        c = n(9798),
        l = n(5282),
        f = n.n(l),
        d = n(1330),
        v = n(1697),
        p = n(6452),
        m = n(5124),
        h = n(7378),
        g = n(948);
      function y() {
        return (y =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var x = {
          exit: {
            height: { duration: 0.2, ease: g.YI.ease },
            opacity: { duration: 0.3, ease: g.YI.ease },
          },
          enter: {
            height: { duration: 0.3, ease: g.YI.ease },
            opacity: { duration: 0.4, ease: g.YI.ease },
          },
        },
        b = {
          exit: (t) => {
            var e,
              n,
              {
                animateOpacity: r,
                startingHeight: i,
                transition: o,
                transitionEnd: a,
                delay: u,
              } = t;
            return y(
              {},
              r && {
                opacity:
                  ((n = i),
                  null != n && parseInt(n.toString(), 10) > 0 ? 1 : 0),
              },
              {
                overflow: "hidden",
                height: i,
                transitionEnd: null == a ? void 0 : a.exit,
                transition:
                  null != (e = null == o ? void 0 : o.exit)
                    ? e
                    : g.p$.exit(x.exit, u),
              }
            );
          },
          enter: (t) => {
            var e,
              {
                animateOpacity: n,
                endingHeight: r,
                transition: i,
                transitionEnd: o,
                delay: a,
              } = t;
            return y({}, n && { opacity: 1 }, {
              height: r,
              transitionEnd: null == o ? void 0 : o.enter,
              transition:
                null != (e = null == i ? void 0 : i.enter)
                  ? e
                  : g.p$.enter(x.enter, a),
            });
          },
        },
        E = h.forwardRef((t, e) => {
          var {
              in: n,
              unmountOnExit: r,
              animateOpacity: i = !0,
              startingHeight: o = 0,
              endingHeight: a = "auto",
              style: u,
              className: s,
              transition: l,
              transitionEnd: v,
            } = t,
            g = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = {},
                o = Object.keys(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
              return i;
            })(t, [
              "in",
              "unmountOnExit",
              "animateOpacity",
              "startingHeight",
              "endingHeight",
              "style",
              "className",
              "transition",
              "transitionEnd",
            ]),
            [x, E] = h.useState(!1);
          h.useEffect(() => {
            var t = setTimeout(() => {
              E(!0);
            });
            return () => clearTimeout(t);
          }, []),
            (0, c.ZK)({
              condition: Boolean(o > 0 && r),
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together",
            });
          var w = parseFloat(o.toString()) > 0,
            P = {
              startingHeight: o,
              endingHeight: a,
              animateOpacity: i,
              transition: x ? l : { enter: { duration: 0 } },
              transitionEnd: f()(v, {
                enter: { overflow: "initial" },
                exit: r ? void 0 : { display: w ? "block" : "none" },
              }),
            },
            T = !r || n,
            A = n || r ? "enter" : "exit";
          return h.createElement(
            p.M,
            { initial: !1, custom: P },
            T &&
              h.createElement(
                m.E.div,
                y({ ref: e }, g, {
                  className: (0, d.cx)("chakra-collapse", s),
                  style: y({ overflow: "hidden", display: "block" }, u),
                  custom: P,
                  variants: b,
                  initial: !!r && "exit",
                  animate: A,
                  exit: "exit",
                })
              )
          );
        });
      v.Ts && (E.displayName = "Collapse");
      var w = n(5811),
        P = n(5102);
      function T(t) {
        return t.sort((t, e) => {
          var n = t.compareDocumentPosition(e);
          if (
            n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return -1;
          if (
            n & Node.DOCUMENT_POSITION_PRECEDING ||
            n & Node.DOCUMENT_POSITION_CONTAINS
          )
            return 1;
          if (
            n & Node.DOCUMENT_POSITION_DISCONNECTED ||
            n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
          )
            throw Error("Cannot sort the given nodes.");
          return 0;
        });
      }
      function A(t, e, n) {
        var r = t + 1;
        return n && r >= e && (r = 0), r;
      }
      function C(t, e, n) {
        var r = t - 1;
        return n && r < 0 && (r = e), r;
      }
      var S = "undefined" !== typeof window ? h.useLayoutEffect : h.useEffect;
      function k() {
        return (k =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function M(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class O {
        constructor() {
          var t = this;
          M(this, "descendants", new Map()),
            M(this, "register", (t) => {
              var e;
              if (null != t)
                return "object" == typeof (e = t) &&
                  "nodeType" in e &&
                  e.nodeType === Node.ELEMENT_NODE
                  ? this.registerNode(t)
                  : (e) => {
                      this.registerNode(e, t);
                    };
            }),
            M(this, "unregister", (t) => {
              this.descendants.delete(t);
              var e = T(Array.from(this.descendants.keys()));
              this.assignIndex(e);
            }),
            M(this, "destroy", () => {
              this.descendants.clear();
            }),
            M(this, "assignIndex", (t) => {
              this.descendants.forEach((e) => {
                var n = t.indexOf(e.node);
                (e.index = n), (e.node.dataset.index = e.index.toString());
              });
            }),
            M(this, "count", () => this.descendants.size),
            M(this, "enabledCount", () => this.enabledValues().length),
            M(this, "values", () =>
              Array.from(this.descendants.values()).sort(
                (t, e) => t.index - e.index
              )
            ),
            M(this, "enabledValues", () =>
              this.values().filter((t) => !t.disabled)
            ),
            M(this, "item", (t) => {
              if (0 !== this.count()) return this.values()[t];
            }),
            M(this, "enabledItem", (t) => {
              if (0 !== this.enabledCount()) return this.enabledValues()[t];
            }),
            M(this, "first", () => this.item(0)),
            M(this, "firstEnabled", () => this.enabledItem(0)),
            M(this, "last", () => this.item(this.descendants.size - 1)),
            M(this, "lastEnabled", () => {
              var t = this.enabledValues().length - 1;
              return this.enabledItem(t);
            }),
            M(this, "indexOf", (t) => {
              var e, n;
              return t &&
                null !=
                  (e = null == (n = this.descendants.get(t)) ? void 0 : n.index)
                ? e
                : -1;
            }),
            M(this, "enabledIndexOf", (t) =>
              null == t
                ? -1
                : this.enabledValues().findIndex((e) => e.node.isSameNode(t))
            ),
            M(this, "next", function (e, n) {
              void 0 === n && (n = !0);
              var r = A(e, t.count(), n);
              return t.item(r);
            }),
            M(this, "nextEnabled", function (e, n) {
              void 0 === n && (n = !0);
              var r = t.item(e);
              if (r) {
                var i = A(t.enabledIndexOf(r.node), t.enabledCount(), n);
                return t.enabledItem(i);
              }
            }),
            M(this, "prev", function (e, n) {
              void 0 === n && (n = !0);
              var r = C(e, t.count() - 1, n);
              return t.item(r);
            }),
            M(this, "prevEnabled", function (e, n) {
              void 0 === n && (n = !0);
              var r = t.item(e);
              if (r) {
                var i = C(t.enabledIndexOf(r.node), t.enabledCount() - 1, n);
                return t.enabledItem(i);
              }
            }),
            M(this, "registerNode", (t, e) => {
              if (t && !this.descendants.has(t)) {
                var n = T(Array.from(this.descendants.keys()).concat(t));
                null != e && e.disabled && (e.disabled = !!e.disabled);
                var r = k({ node: t, index: -1 }, e);
                this.descendants.set(t, r), this.assignIndex(n);
              }
            });
        }
      }
      var [R, L] = (0, w.k)({
        name: "DescendantsProvider",
        errorMessage:
          "useDescendantsContext must be used within DescendantsProvider",
      });
      var V = n(8412),
        D = n(3900),
        I = n(2086),
        j = n(8315),
        N = n(106);
      function B() {
        return (B =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var [F, U, H, z] = [
        R,
        () => L(),
        () =>
          (function () {
            var [t] = (0, h.useState)(() => new O());
            return S(() => () => t.destroy()), t;
          })(),
        (t) =>
          (function (t) {
            var e = L(),
              [n, r] = (0, h.useState)(-1),
              i = (0, h.useRef)(null);
            S(
              () => () => {
                i.current && e.unregister(i.current);
              },
              []
            ),
              S(() => {
                if (i.current) {
                  var t = Number(i.current.dataset.index);
                  n == t || Number.isNaN(t) || r(t);
                }
              });
            var o = t ? e.register(t) : e.register;
            return {
              descendants: e,
              index: n,
              enabledIndex: e.enabledIndexOf(i.current),
              register: (0, P.l)(o, i),
            };
          })(t),
      ];
      function Y(t) {
        var {
            onChange: e,
            defaultIndex: n,
            index: r,
            allowMultiple: i,
            allowToggle: o,
          } = t,
          a = _(t, [
            "onChange",
            "defaultIndex",
            "index",
            "allowMultiple",
            "allowToggle",
          ]);
        !(function (t) {
          var e = t.index || t.defaultIndex,
            n = !(0, v.o8)(e) && !(0, v.kJ)(e) && t.allowMultiple;
          (0, c.ZK)({
            condition: !!n,
            message:
              "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " +
              typeof e +
              ",",
          });
        })(t),
          (function (t) {
            (0, c.ZK)({
              condition: !(!t.allowMultiple || !t.allowToggle),
              message:
                "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not",
            });
          })(t);
        var u = H(),
          [s, l] = (0, h.useState)(-1);
        (0, V.z)(() => {
          l(-1);
        });
        var [f, d] = (0, D.T)({
          value: r,
          defaultValue: () => (i ? (null != n ? n : []) : null != n ? n : -1),
          onChange: e,
        });
        return {
          index: f,
          setIndex: d,
          htmlProps: a,
          getAccordionItemProps: (t) => {
            var e = !1;
            null !== t && (e = (0, v.kJ)(f) ? f.includes(t) : f === t);
            return {
              isOpen: e,
              onChange: (e) => {
                if (null !== t)
                  if (i && (0, v.kJ)(f)) {
                    var n = e ? (0, j.jX)(f, t) : (0, j.cl)(f, t);
                    d(n);
                  } else e ? d(t) : o && d(-1);
              },
            };
          },
          focusedIndex: s,
          setFocusedIndex: l,
          descendants: u,
        };
      }
      var [Z, W] = (0, w.k)({
        name: "AccordionContext",
        errorMessage:
          "useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`",
      });
      function X(t) {
        var { isDisabled: e, isFocusable: n, id: r } = t,
          i = _(t, ["isDisabled", "isFocusable", "id"]),
          { getAccordionItemProps: o, setFocusedIndex: a } = W(),
          u = (0, h.useRef)(null),
          [s, l] = (0, I.ZS)(r, "accordion-button", "accordion-panel");
        !(function (t) {
          (0, c.ZK)({
            condition: !(!t.isFocusable || t.isDisabled),
            message:
              "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    ",
          });
        })(t);
        var {
            register: f,
            index: v,
            descendants: p,
          } = z({ disabled: e && !n }),
          { isOpen: m, onChange: g } = o(-1 === v ? null : v);
        !(function (t) {
          (0, c.ZK)({
            condition: t.isOpen && !!t.isDisabled,
            message: "Cannot open a disabled accordion item",
          });
        })({ isOpen: m, isDisabled: e });
        var y = (0, h.useCallback)(() => {
            null == g || g(!m), a(v);
          }, [v, a, m, g]),
          x = (0, h.useCallback)(
            (t) => {
              var e = {
                ArrowDown: () => {
                  var t = p.nextEnabled(v);
                  t && (0, N.T)(t.node);
                },
                ArrowUp: () => {
                  var t = p.prevEnabled(v);
                  t && (0, N.T)(t.node);
                },
                Home: () => {
                  var t = p.firstEnabled();
                  t && (0, N.T)(t.node);
                },
                End: () => {
                  var t = p.lastEnabled();
                  t && (0, N.T)(t.node);
                },
              }[(0, d.uh)(t)];
              e && (t.preventDefault(), e(t));
            },
            [p, v]
          ),
          b = (0, h.useCallback)(() => {
            a(v);
          }, [a, v]),
          E = (0, h.useCallback)(
            function (t, n) {
              return (
                void 0 === t && (t = {}),
                void 0 === n && (n = null),
                B({}, t, {
                  type: "button",
                  ref: (0, P.l)(f, u, n),
                  id: s,
                  disabled: !!e,
                  "aria-expanded": !!m,
                  "aria-controls": l,
                  onClick: (0, c.v0)(t.onClick, y),
                  onFocus: (0, c.v0)(t.onFocus, b),
                  onKeyDown: (0, c.v0)(t.onKeyDown, x),
                })
              );
            },
            [s, e, m, y, b, x, l, f]
          ),
          w = (0, h.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                B({}, t, {
                  ref: e,
                  role: "region",
                  id: l,
                  "aria-labelledby": s,
                  hidden: !m,
                })
              );
            },
            [s, m, l]
          );
        return {
          isOpen: m,
          isDisabled: e,
          isFocusable: n,
          onOpen: () => {
            null == g || g(!0);
          },
          onClose: () => {
            null == g || g(!1);
          },
          getButtonProps: E,
          getPanelProps: w,
          htmlProps: i,
        };
      }
      function G() {
        return (G =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function K(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var q = (0, i.G)((t, e) => {
        var { children: n, reduceMotion: r } = t,
          i = K(t, ["children", "reduceMotion"]),
          c = (0, o.j)("Accordion", i),
          l = Y((0, a.Lr)(i)),
          { htmlProps: f, descendants: v } = l,
          p = K(l, ["htmlProps", "descendants"]),
          m = h.useMemo(() => G({}, p, { reduceMotion: !!r }), [p, r]);
        return h.createElement(
          F,
          { value: v },
          h.createElement(
            Z,
            { value: m },
            h.createElement(
              u.Fo,
              { value: c },
              h.createElement(
                s.m$.div,
                G({ ref: e }, f, {
                  className: (0, d.cx)("chakra-accordion", i.className),
                }),
                n
              )
            )
          )
        );
      });
      v.Ts && (q.displayName = "Accordion");
      var [$, J] = (0, w.k)({
          name: "AccordionItemContext",
          errorMessage:
            "useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` ",
        }),
        Q = (0, i.G)((t, e) => {
          var { children: n, className: r } = t,
            i = X(t),
            { htmlProps: o } = i,
            a = K(i, ["htmlProps"]),
            l = G({}, (0, u.yK)().container, { overflowAnchor: "none" }),
            f = h.useMemo(() => a, [a]);
          return h.createElement(
            $,
            { value: f },
            h.createElement(
              s.m$.div,
              G({ ref: e }, o, {
                className: (0, d.cx)("chakra-accordion__item", r),
                __css: l,
              }),
              (0, c.Pu)(n, {
                isExpanded: !!a.isOpen,
                isDisabled: !!a.isDisabled,
              })
            )
          );
        });
      v.Ts && (Q.displayName = "AccordionItem");
      var tt = (0, i.G)((t, e) => {
        var { getButtonProps: n } = J(),
          r = n(t, e),
          i = G(
            {
              display: "flex",
              alignItems: "center",
              width: "100%",
              outline: 0,
            },
            (0, u.yK)().button
          );
        return h.createElement(
          s.m$.button,
          G({}, r, {
            className: (0, d.cx)("chakra-accordion__button", t.className),
            __css: i,
          })
        );
      });
      v.Ts && (tt.displayName = "AccordionButton");
      var et = (0, i.G)((t, e) => {
        var { reduceMotion: n } = W(),
          { getPanelProps: r, isOpen: i } = J(),
          o = r(t, e),
          a = (0, d.cx)("chakra-accordion__panel", t.className),
          c = (0, u.yK)();
        n || delete o.hidden;
        var l = h.createElement(
          s.m$.div,
          G({}, o, { __css: c.panel, className: a })
        );
        return n ? l : h.createElement(E, { in: i }, l);
      });
      v.Ts && (et.displayName = "AccordionPanel");
      var nt = (t) => {
        var { isOpen: e, isDisabled: n } = J(),
          { reduceMotion: i } = W(),
          o = (0, d.cx)("chakra-accordion__icon", t.className),
          a = G(
            {
              opacity: n ? 0.4 : 1,
              transform: e ? "rotate(-180deg)" : void 0,
              transition: i ? void 0 : "transform 0.2s",
              transformOrigin: "center",
            },
            (0, u.yK)().icon
          );
        return h.createElement(
          r.J,
          G(
            { viewBox: "0 0 24 24", "aria-hidden": !0, className: o, __css: a },
            t
          ),
          h.createElement("path", {
            fill: "currentColor",
            d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
          })
        );
      };
      v.Ts && (nt.displayName = "AccordionIcon");
    },
    2935: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return o;
        },
      });
      var r = n(7378),
        i = n(8820);
      function o(t, e) {
        void 0 === e && (e = []);
        var n = r.useRef(t);
        return (
          (0, i.G)(() => {
            n.current = t;
          }),
          r.useCallback(function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...e);
          }, e)
        );
      }
    },
    3900: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return a;
        },
        T: function () {
          return u;
        },
      });
      var r = n(9798),
        i = n(7378),
        o = n(2935);
      function a(t, e) {
        var n = void 0 !== t;
        return [n, n && "undefined" !== typeof t ? t : e];
      }
      function u(t) {
        var {
            value: e,
            defaultValue: n,
            onChange: a,
            shouldUpdate: u = (t, e) => t !== e,
          } = t,
          s = (0, o.W)(a),
          c = (0, o.W)(u),
          [l, f] = i.useState(n),
          d = void 0 !== e,
          v = d ? e : l,
          p = i.useCallback(
            (t) => {
              var e = (0, r.Pu)(t, v);
              c(v, e) && (d || f(e), s(e));
            },
            [d, s, v, c]
          );
        return [v, p];
      }
    },
    8820: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return i;
        },
      });
      var r = n(7378),
        i = n(1330).jU ? r.useLayoutEffect : r.useEffect;
    },
    8412: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(7378);
      function i(t, e) {
        return void 0 === e && (e = []), r.useEffect(() => () => t(), e);
      }
    },
    4767: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return l;
        },
      });
      var r = n(3768),
        i = n(6563),
        o = n(1330),
        a = n(1697),
        u = n(7378);
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var c = {
          path: u.createElement(
            "g",
            { stroke: "currentColor", strokeWidth: "1.5" },
            u.createElement("path", {
              strokeLinecap: "round",
              fill: "none",
              d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
            }),
            u.createElement("path", {
              fill: "currentColor",
              strokeLinecap: "round",
              d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
            }),
            u.createElement("circle", {
              fill: "none",
              strokeMiterlimit: "10",
              cx: "12",
              cy: "12",
              r: "11.25",
            })
          ),
          viewBox: "0 0 24 24",
        },
        l = (0, r.G)((t, e) => {
          var {
              as: n,
              viewBox: r,
              color: a = "currentColor",
              focusable: l = !1,
              children: f,
              className: d,
              __css: v,
            } = t,
            p = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = {},
                o = Object.keys(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
              return i;
            })(t, [
              "as",
              "viewBox",
              "color",
              "focusable",
              "children",
              "className",
              "__css",
            ]),
            m = {
              ref: e,
              focusable: l,
              className: (0, o.cx)("chakra-icon", d),
              __css: s(
                {
                  w: "1em",
                  h: "1em",
                  display: "inline-block",
                  lineHeight: "1em",
                  flexShrink: 0,
                  color: a,
                },
                v
              ),
            },
            h = null != r ? r : c.viewBox;
          if (n && "string" !== typeof n)
            return u.createElement(i.m$.svg, s({ as: n }, m, p));
          var g = null != f ? f : c.path;
          return u.createElement(
            i.m$.svg,
            s({ verticalAlign: "middle", viewBox: h }, m, p),
            g
          );
        });
      a.Ts && (l.displayName = "Icon");
    },
    7830: function (t, e, n) {
      "use strict";
      n.d(e, {
        xu: function () {
          return c;
        },
      });
      var r = n(6563),
        i = n(3768),
        o = n(1697),
        a = n(7378);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var c = (0, r.m$)("div");
      o.Ts && (c.displayName = "Box");
      var l = (0, i.G)((t, e) => {
        var { size: n, centerContent: r = !0 } = t,
          i = s(t, ["size", "centerContent"]),
          o = r
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {};
        return a.createElement(
          c,
          u(
            {
              ref: e,
              boxSize: n,
              __css: u({}, o, { flexShrink: 0, flexGrow: 0 }),
            },
            i
          )
        );
      });
      o.Ts && (l.displayName = "Square");
      var f = (0, i.G)((t, e) => {
        var { size: n } = t,
          r = s(t, ["size"]);
        return a.createElement(
          l,
          u({ size: n, ref: e, borderRadius: "9999px" }, r)
        );
      });
      o.Ts && (f.displayName = "Circle");
    },
    5774: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return o;
        },
      });
      var r = n(6563),
        i = n(1697);
      n(7378);
      var o = (0, r.m$)("div", {
        baseStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
      i.Ts && (o.displayName = "Center");
    },
    2429: function (t, e, n) {
      "use strict";
      n.d(e, {
        k: function () {
          return s;
        },
      });
      var r = n(3768),
        i = n(6563),
        o = n(1697),
        a = n(7378);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var s = (0, r.G)((t, e) => {
        var {
            direction: n,
            align: r,
            justify: o,
            wrap: s,
            basis: c,
            grow: l,
            shrink: f,
          } = t,
          d = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, [
            "direction",
            "align",
            "justify",
            "wrap",
            "basis",
            "grow",
            "shrink",
          ]),
          v = {
            display: "flex",
            flexDirection: n,
            alignItems: r,
            justifyContent: o,
            flexWrap: s,
            flexBasis: c,
            flexGrow: l,
            flexShrink: f,
          };
        return a.createElement(i.m$.div, u({ ref: e, __css: v }, d));
      });
      o.Ts && (s.displayName = "Flex");
    },
    3928: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return c;
        },
      });
      var r = n(3768),
        i = n(6563),
        o = n(1697),
        a = n(7378);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var c = (0, r.G)((t, e) => {
        var {
            area: n,
            templateAreas: r,
            gap: o,
            rowGap: c,
            columnGap: l,
            column: f,
            row: d,
            autoFlow: v,
            autoRows: p,
            templateRows: m,
            autoColumns: h,
            templateColumns: g,
          } = t,
          y = s(t, [
            "area",
            "templateAreas",
            "gap",
            "rowGap",
            "columnGap",
            "column",
            "row",
            "autoFlow",
            "autoRows",
            "templateRows",
            "autoColumns",
            "templateColumns",
          ]),
          x = {
            display: "grid",
            gridArea: n,
            gridTemplateAreas: r,
            gridGap: o,
            gridRowGap: c,
            gridColumnGap: l,
            gridAutoColumns: h,
            gridColumn: f,
            gridRow: d,
            gridAutoFlow: v,
            gridAutoRows: p,
            gridTemplateRows: m,
            gridTemplateColumns: g,
          };
        return a.createElement(i.m$.div, u({ ref: e, __css: x }, y));
      });
      o.Ts && (c.displayName = "Grid");
    },
    5102: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return o;
        },
      });
      var r = n(1697);
      function i(t, e) {
        if (null != t)
          if ((0, r.mf)(t)) t(e);
          else
            try {
              t.current = e;
            } catch (n) {
              throw new Error(
                "Cannot assign value '" + e + "' to ref '" + t + "'"
              );
            }
      }
      function o() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return (t) => {
          e.forEach((e) => i(e, t));
        };
      }
    },
    948: function (t, e, n) {
      "use strict";
      n.d(e, {
        YI: function () {
          return o;
        },
        R: function () {
          return a;
        },
        p$: function () {
          return u;
        },
      });
      var r = n(1697);
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = {
        ease: [0.25, 0.1, 0.25, 1],
        easeIn: [0.4, 0, 1, 1],
        easeOut: [0, 0, 0.2, 1],
        easeInOut: [0.4, 0, 0.2, 1],
      };
      var a = {
          enter: { duration: 0.2, ease: o.easeOut },
          exit: { duration: 0.1, ease: o.easeIn },
        },
        u = {
          enter: (t, e) =>
            i({}, t, {
              delay: (0, r.hj)(e) ? e : null == e ? void 0 : e.enter,
            }),
          exit: (t, e) =>
            i({}, t, { delay: (0, r.hj)(e) ? e : null == e ? void 0 : e.exit }),
        };
    },
    106: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var r = n(1330),
        i = n(9798),
        o = n(9978);
      function a(t, e) {
        void 0 === e && (e = {});
        var {
          isActive: n = o.H9,
          nextTick: a,
          preventScroll: s = !0,
          selectTextIfInput: c = !0,
        } = e;
        if (!t || n(t)) return -1;
        function l() {
          if (t) {
            if (
              (function () {
                if (null == u) {
                  u = !1;
                  try {
                    document.createElement("div").focus({
                      get preventScroll() {
                        return (u = !0), !0;
                      },
                    });
                  } catch (t) {}
                }
                return u;
              })()
            )
              t.focus({ preventScroll: s });
            else if ((t.focus(), s))
              !(function (t) {
                for (var { element: e, scrollTop: n, scrollLeft: r } of t)
                  (e.scrollTop = n), (e.scrollLeft = r);
              })(
                (function (t) {
                  var e,
                    n = (0, r.lZ)(t),
                    i = null != (e = n.defaultView) ? e : window,
                    o = t.parentNode,
                    a = [],
                    u = n.scrollingElement || n.documentElement;
                  for (; o instanceof i.HTMLElement && o !== u; )
                    (o.offsetHeight < o.scrollHeight ||
                      o.offsetWidth < o.scrollWidth) &&
                      a.push({
                        element: o,
                        scrollTop: o.scrollTop,
                        scrollLeft: o.scrollLeft,
                      }),
                      (o = o.parentNode);
                  u instanceof i.HTMLElement &&
                    a.push({
                      element: u,
                      scrollTop: u.scrollTop,
                      scrollLeft: u.scrollLeft,
                    });
                  return a;
                })(t)
              );
            (0, o.cK)(t) && c && t.select();
          } else
            (0, i.ZK)({
              condition: !0,
              message:
                "[chakra-ui]: can't call focus() on `null` or `undefined` element",
            });
        }
        return a ? requestAnimationFrame(l) : (l(), -1);
      }
      var u = null;
    },
    9978: function (t, e, n) {
      "use strict";
      n.d(e, {
        cK: function () {
          return o;
        },
        H9: function () {
          return a;
        },
        EB: function () {
          return s;
        },
      });
      var r = n(1330),
        i = (t) => t.hasAttribute("tabindex");
      function o(t) {
        return (
          (0, r.Re)(t) && "input" === t.tagName.toLowerCase() && "select" in t
        );
      }
      function a(t) {
        return ((0, r.Re)(t) ? (0, r.lZ)(t) : document).activeElement === t;
      }
      function u(t) {
        return !(!t.parentElement || !u(t.parentElement)) || t.hidden;
      }
      function s(t) {
        if (
          !(0, r.Re)(t) ||
          u(t) ||
          (function (t) {
            return (
              !0 === Boolean(t.getAttribute("disabled")) ||
              !0 === Boolean(t.getAttribute("aria-disabled"))
            );
          })(t)
        )
          return !1;
        var { localName: e } = t;
        if (["input", "select", "textarea", "button"].indexOf(e) >= 0)
          return !0;
        var n = {
          a: () => t.hasAttribute("href"),
          audio: () => t.hasAttribute("controls"),
          video: () => t.hasAttribute("controls"),
        };
        return e in n
          ? n[e]()
          : !!(function (t) {
              var e = t.getAttribute("contenteditable");
              return "false" !== e && null != e;
            })(t) || i(t);
      }
    },
    9293: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        });
    },
    6452: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return p;
        },
      });
      var r = n(9312),
        i = n(7378),
        o = n(3463);
      var a = n(4912),
        u = n(5113),
        s = 0;
      function c() {
        var t = s;
        return s++, t;
      }
      var l = function (t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          o = t.onExitComplete,
          s = t.custom,
          l = t.presenceAffectsLayout,
          d = (0, u.h)(f),
          v = (0, u.h)(c),
          p = (0, i.useMemo)(
            function () {
              return {
                id: v,
                initial: n,
                isPresent: r,
                custom: s,
                onExitComplete: function (t) {
                  d.set(t, !0);
                  var e = !0;
                  d.forEach(function (t) {
                    t || (e = !1);
                  }),
                    e && (null === o || void 0 === o || o());
                },
                register: function (t) {
                  return (
                    d.set(t, !1),
                    function () {
                      return d.delete(t);
                    }
                  );
                },
              };
            },
            l ? void 0 : [r]
          );
        return (
          (0, i.useMemo)(
            function () {
              d.forEach(function (t, e) {
                return d.set(e, !1);
              });
            },
            [r]
          ),
          i.useEffect(
            function () {
              !r && !d.size && (null === o || void 0 === o || o());
            },
            [r]
          ),
          i.createElement(a.O.Provider, { value: p }, e)
        );
      };
      function f() {
        return new Map();
      }
      var d = n(7764);
      function v(t) {
        return t.key || "";
      }
      var p = function (t) {
        var e = t.children,
          n = t.custom,
          a = t.initial,
          u = void 0 === a || a,
          s = t.onExitComplete,
          c = t.exitBeforeEnter,
          f = t.presenceAffectsLayout,
          p = void 0 === f || f,
          m = (function () {
            var t = (0, i.useRef)(!1),
              e = (0, r.CR)((0, i.useState)(0), 2),
              n = e[0],
              a = e[1];
            return (
              (0, o.z)(function () {
                return (t.current = !0);
              }),
              (0, i.useCallback)(
                function () {
                  !t.current && a(n + 1);
                },
                [n]
              )
            );
          })(),
          h = (0, i.useContext)(d.WH);
        (0, d.Md)(h) && (m = h.forceUpdate);
        var g = (0, i.useRef)(!0),
          y = (function (t) {
            var e = [];
            return (
              i.Children.forEach(t, function (t) {
                (0, i.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          x = (0, i.useRef)(y),
          b = (0, i.useRef)(new Map()).current,
          E = (0, i.useRef)(new Set()).current;
        if (
          ((function (t, e) {
            t.forEach(function (t) {
              var n = v(t);
              e.set(n, t);
            });
          })(y, b),
          g.current)
        )
          return (
            (g.current = !1),
            i.createElement(
              i.Fragment,
              null,
              y.map(function (t) {
                return i.createElement(
                  l,
                  {
                    key: v(t),
                    isPresent: !0,
                    initial: !!u && void 0,
                    presenceAffectsLayout: p,
                  },
                  t
                );
              })
            )
          );
        for (
          var w = (0, r.ev)([], (0, r.CR)(y)),
            P = x.current.map(v),
            T = y.map(v),
            A = P.length,
            C = 0;
          C < A;
          C++
        ) {
          var S = P[C];
          -1 === T.indexOf(S) ? E.add(S) : E.delete(S);
        }
        return (
          c && E.size && (w = []),
          E.forEach(function (t) {
            if (-1 === T.indexOf(t)) {
              var e = b.get(t);
              if (e) {
                var r = P.indexOf(t);
                w.splice(
                  r,
                  0,
                  i.createElement(
                    l,
                    {
                      key: v(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        b.delete(t), E.delete(t);
                        var e = x.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        x.current.splice(e, 1),
                          E.size || ((x.current = y), m(), s && s());
                      },
                      custom: n,
                      presenceAffectsLayout: p,
                    },
                    e
                  )
                );
              }
            }
          }),
          (w = w.map(function (t) {
            var e = t.key;
            return E.has(e)
              ? t
              : i.createElement(
                  l,
                  { key: v(t), isPresent: !0, presenceAffectsLayout: p },
                  t
                );
          })),
          (x.current = w),
          i.createElement(
            i.Fragment,
            null,
            E.size
              ? w
              : w.map(function (t) {
                  return (0, i.cloneElement)(t);
                })
          )
        );
      };
    },
    7077: function (t, e, n) {
      "use strict";
      n.d(e, {
        EN: function () {
          return u;
        },
        oO: function () {
          return a;
        },
      });
      var r = n(7378),
        i = n(4912),
        o = n(5113);
      function a() {
        var t = (0, r.useContext)(i.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          o = t.register,
          a = l();
        (0, r.useEffect)(function () {
          return o(a);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(a);
              },
            ]
          : [!0];
      }
      function u(t) {
        return null === t || t.isPresent;
      }
      var s = 0,
        c = function () {
          return s++;
        },
        l = function () {
          return (0, o.h)(c);
        };
    },
    8689: function (t, e, n) {
      "use strict";
      var r, i;
      n.d(e, {
        z: function () {
          return r;
        },
        c: function () {
          return i;
        },
      }),
        (function (t) {
          (t[(t.Entering = 0)] = "Entering"),
            (t[(t.Present = 1)] = "Present"),
            (t[(t.Exiting = 2)] = "Exiting");
        })(r || (r = {})),
        (function (t) {
          (t[(t.Hide = 0)] = "Hide"), (t[(t.Show = 1)] = "Show");
        })(i || (i = {}));
    },
    4912: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(7378).createContext)(null);
    },
    7764: function (t, e, n) {
      "use strict";
      n.d(e, {
        bg: function () {
          return p;
        },
        WH: function () {
          return v;
        },
        Md: function () {
          return m;
        },
      });
      var r = n(7378),
        i = n(9312),
        o = n(3031),
        a = n(2971),
        u = n(1148),
        s = n(3813),
        c = n(8689),
        l = {
          layoutReady: function (t) {
            return t.notifyLayoutReady();
          },
        };
      function f() {
        var t = new Set();
        return {
          add: function (e) {
            return t.add(e);
          },
          flush: function (e) {
            var n = void 0 === e ? l : e,
              r = n.layoutReady,
              f = n.parent;
            (0, u.U)(function (e, n) {
              var u = Array.from(t).sort(s._),
                l = f ? (0, a.kv)(f) : [];
              n(function () {
                (0, i.ev)((0, i.ev)([], (0, i.CR)(l)), (0, i.CR)(u)).forEach(
                  function (t) {
                    return t.resetTransform();
                  }
                );
              }),
                e(function () {
                  u.forEach(a.de);
                }),
                n(function () {
                  l.forEach(function (t) {
                    return t.restoreTransform();
                  }),
                    u.forEach(r);
                }),
                e(function () {
                  u.forEach(function (t) {
                    t.isPresent && (t.presence = c.z.Present);
                  });
                }),
                n(function () {
                  o.iW.preRender(), o.iW.render();
                }),
                e(function () {
                  o.ZP.postRender(function () {
                    return u.forEach(d);
                  }),
                    t.clear();
                });
            }),
              (0, u.R)();
          },
        };
      }
      function d(t) {
        t.prevViewportBox = t.projection.target;
      }
      var v = (0, r.createContext)(f()),
        p = (0, r.createContext)(f());
      function m(t) {
        return !!t.forceUpdate;
      }
    },
    5124: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return xo;
        },
      });
      var r = n(9312),
        i = n(7378),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        a = {
          measureLayout: o([
            "layout",
            "layoutId",
            "drag",
            "_layoutResetTransform",
          ]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          layoutAnimation: o(["layout", "layoutId"]),
        };
      var u = (0, i.createContext)({ strict: !1 }),
        s = Object.keys(a),
        c = s.length;
      var l = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        f = (0, i.createContext)({});
      var d = n(4912),
        v = n(7077),
        p = (0, i.createContext)(null),
        m = "undefined" !== typeof window,
        h = m ? i.useLayoutEffect : i.useEffect;
      function g(t, e, n, o) {
        var a = (0, i.useContext)(l),
          s = (0, i.useContext)(u),
          c = (0, i.useContext)(f).visualElement,
          m = (0, i.useContext)(d.O),
          g = (function (t) {
            var e = t.layoutId,
              n = (0, i.useContext)(p);
            return n && void 0 !== e ? n + "-" + e : e;
          })(n),
          y = (0, i.useRef)(void 0);
        o || (o = s.renderer),
          !y.current &&
            o &&
            (y.current = o(t, {
              visualState: e,
              parent: c,
              props: (0, r.pi)((0, r.pi)({}, n), { layoutId: g }),
              presenceId: null === m || void 0 === m ? void 0 : m.id,
              blockInitialAnimation:
                !1 === (null === m || void 0 === m ? void 0 : m.initial),
            }));
        var x = y.current;
        return (
          h(function () {
            x &&
              (x.setProps(
                (0, r.pi)((0, r.pi)((0, r.pi)({}, a), n), { layoutId: g })
              ),
              (x.isPresent = (0, v.EN)(m)),
              (x.isPresenceRoot =
                !c ||
                c.presenceId !== (null === m || void 0 === m ? void 0 : m.id)),
              x.syncRender());
          }),
          (0, i.useEffect)(function () {
            var t;
            x &&
              (null === (t = x.animationState) ||
                void 0 === t ||
                t.animateChanges());
          }),
          h(function () {
            return function () {
              return null === x || void 0 === x ? void 0 : x.notifyUnmount();
            };
          }, []),
          x
        );
      }
      function y(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function x(t) {
        return Array.isArray(t);
      }
      function b(t) {
        return "string" === typeof t || x(t);
      }
      function E(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e
            ? e(null !== n && void 0 !== n ? n : t.custom, r, i)
            : e
        );
      }
      function w(t, e, n) {
        var r = t.getProps();
        return E(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function P(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          b(t.initial) ||
          b(t.animate) ||
          b(t.whileHover) ||
          b(t.whileDrag) ||
          b(t.whileTap) ||
          b(t.whileFocus) ||
          b(t.exit)
        );
      }
      function T(t) {
        return Boolean(P(t) || t.variants);
      }
      function A(t, e) {
        var n = (function (t, e) {
            if (P(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || b(n) ? n : void 0,
                animate: b(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(f)),
          r = n.initial,
          o = n.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: r, animate: o };
          },
          e ? [C(r), C(o)] : []
        );
      }
      function C(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function S(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.useRender,
          d = t.useVisualState,
          v = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t) {
                var n = t[e];
                null !== n && (a[e].Component = n);
              }
            })(e),
          (0, i.forwardRef)(function (t, e) {
            var p = (0, i.useContext)(l).isStatic,
              h = null,
              x = A(t, p),
              b = d(t, p);
            return (
              !p &&
                m &&
                ((x.visualElement = g(v, b, t, n)),
                (h = (function (t, e, n) {
                  var o = [];
                  if (((0, i.useContext)(u), !e)) return null;
                  for (var l = 0; l < c; l++) {
                    var f = s[l],
                      d = a[f],
                      v = d.isEnabled,
                      p = d.Component;
                    v(t) &&
                      p &&
                      o.push(
                        i.createElement(
                          p,
                          (0, r.pi)({ key: f }, t, { visualElement: e })
                        )
                      );
                  }
                  return o;
                })(t, x.visualElement))),
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  f.Provider,
                  { value: x },
                  o(
                    v,
                    t,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : y(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(b, x.visualElement, e),
                    b,
                    p
                  )
                ),
                h
              )
            );
          })
        );
      }
      function k(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), S(t(e, n));
        }
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var M = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function O(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(M.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var R = {};
      var L = ["", "X", "Y", "Z"],
        V = ["transformPerspective", "x", "y", "z"];
      function D(t, e) {
        return V.indexOf(t) - V.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return L.forEach(function (e) {
          return V.push(t + e);
        });
      });
      var I = new Set(V);
      function j(t) {
        return I.has(t);
      }
      var N = new Set(["originX", "originY", "originZ"]);
      function B(t) {
        return N.has(t);
      }
      function _(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          j(t) || B(t) || ((n || void 0 !== r) && (!!R[t] || "opacity" === t))
        );
      }
      var F = function (t) {
          return null !== t && "object" === typeof t && t.getVelocity;
        },
        U = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function H(t) {
        return t.startsWith("--");
      }
      var z = function (t, e) {
          return e && "number" === typeof t ? e.transform(t) : t;
        },
        Y = function (t, e) {
          return function (n) {
            return Math.max(Math.min(n, e), t);
          };
        },
        Z = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t;
        },
        W = /(-)?([\d]*\.?[\d])+/g,
        X =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        G =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function K(t) {
        return "string" === typeof t;
      }
      var q = function (t) {
          return {
            test: function (e) {
              return K(e) && e.endsWith(t) && 1 === e.split(" ").length;
            },
            parse: parseFloat,
            transform: function (e) {
              return "" + e + t;
            },
          };
        },
        $ = q("deg"),
        J = q("%"),
        Q = q("px"),
        tt = q("vh"),
        et = q("vw"),
        nt = (0, r.pi)((0, r.pi)({}, J), {
          parse: function (t) {
            return J.parse(t) / 100;
          },
          transform: function (t) {
            return J.transform(100 * t);
          },
        }),
        rt = {
          test: function (t) {
            return "number" === typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          },
        },
        it = (0, r.pi)((0, r.pi)({}, rt), { transform: Y(0, 1) }),
        ot = (0, r.pi)((0, r.pi)({}, rt), { default: 1 }),
        at = (0, r.pi)((0, r.pi)({}, rt), { transform: Math.round }),
        ut = {
          borderWidth: Q,
          borderTopWidth: Q,
          borderRightWidth: Q,
          borderBottomWidth: Q,
          borderLeftWidth: Q,
          borderRadius: Q,
          radius: Q,
          borderTopLeftRadius: Q,
          borderTopRightRadius: Q,
          borderBottomRightRadius: Q,
          borderBottomLeftRadius: Q,
          width: Q,
          maxWidth: Q,
          height: Q,
          maxHeight: Q,
          size: Q,
          top: Q,
          right: Q,
          bottom: Q,
          left: Q,
          padding: Q,
          paddingTop: Q,
          paddingRight: Q,
          paddingBottom: Q,
          paddingLeft: Q,
          margin: Q,
          marginTop: Q,
          marginRight: Q,
          marginBottom: Q,
          marginLeft: Q,
          rotate: $,
          rotateX: $,
          rotateY: $,
          rotateZ: $,
          scale: ot,
          scaleX: ot,
          scaleY: ot,
          scaleZ: ot,
          skew: $,
          skewX: $,
          skewY: $,
          distance: Q,
          translateX: Q,
          translateY: Q,
          translateZ: Q,
          x: Q,
          y: Q,
          z: Q,
          perspective: Q,
          transformPerspective: Q,
          opacity: it,
          originX: nt,
          originY: nt,
          originZ: Q,
          zIndex: at,
          fillOpacity: it,
          strokeOpacity: it,
          numOctaves: at,
        };
      function st(t, e, n, r, i, o, a, u) {
        var s,
          c = t.style,
          l = t.vars,
          f = t.transform,
          d = t.transformKeys,
          v = t.transformOrigin;
        d.length = 0;
        var p = !1,
          m = !1,
          h = !0;
        for (var g in e) {
          var y = e[g];
          if (H(g)) l[g] = y;
          else {
            var x = ut[g],
              b = z(y, x);
            if (j(g)) {
              if (((p = !0), (f[g] = b), d.push(g), !h)) continue;
              y !== (null !== (s = x.default) && void 0 !== s ? s : 0) &&
                (h = !1);
            } else if (B(g)) (v[g] = b), (m = !0);
            else if (
              (null === n || void 0 === n ? void 0 : n.isHydrated) &&
              (null === r || void 0 === r ? void 0 : r.isHydrated) &&
              R[g]
            ) {
              var E = R[g].process(y, r, n),
                w = R[g].applyTo;
              if (w) for (var P = w.length, T = 0; T < P; T++) c[w[T]] = E;
              else c[g] = E;
            } else c[g] = b;
          }
        }
        r && n && a && u
          ? ((c.transform = a(r.deltaFinal, r.treeScale, p ? f : void 0)),
            o && (c.transform = o(f, c.transform)),
            (c.transformOrigin = u(r)))
          : (p &&
              (c.transform = (function (t, e, n, r) {
                var i = t.transform,
                  o = t.transformKeys,
                  a = e.enableHardwareAcceleration,
                  u = void 0 === a || a,
                  s = e.allowTransformNone,
                  c = void 0 === s || s,
                  l = "";
                o.sort(D);
                for (var f = !1, d = o.length, v = 0; v < d; v++) {
                  var p = o[v];
                  (l += (U[p] || p) + "(" + i[p] + ") "), "z" === p && (f = !0);
                }
                return (
                  !f && u ? (l += "translateZ(0)") : (l = l.trim()),
                  r ? (l = r(i, n ? "" : l)) : c && n && (l = "none"),
                  l
                );
              })(t, i, h, o)),
            m &&
              (c.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? "50%" : e,
                  r = t.originY,
                  i = void 0 === r ? "50%" : r,
                  o = t.originZ;
                return n + " " + i + " " + (void 0 === o ? 0 : o);
              })(v)));
      }
      var ct = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function lt(t, e, n) {
        for (var r in e) F(e[r]) || _(r, n) || (t[r] = e[r]);
      }
      function ft(t, e, n) {
        var o = {};
        return (
          lt(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  st(
                    t,
                    e,
                    void 0,
                    void 0,
                    { enableHardwareAcceleration: !n },
                    o
                  );
                  var i = t.vars,
                    a = t.style;
                  return (0, r.pi)((0, r.pi)({}, i), a);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function dt(t, e, n) {
        var r = {},
          i = ft(t, e, n);
        return (
          Boolean(t.drag) &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var vt = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "_layoutResetTransform",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
      ]);
      function pt(t) {
        return vt.has(t);
      }
      var mt = function (t) {
        return !pt(t);
      };
      try {
        var ht = n(9293).Z;
        mt = function (t) {
          return t.startsWith("on") ? !pt(t) : ht(t);
        };
      } catch (bo) {}
      function gt(t, e, n) {
        return "string" === typeof t ? t : Q.transform(e + n * t);
      }
      var yt = function (t, e) {
          return Q.transform(t * e);
        },
        xt = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        bt = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Et(t, e, n, i, o, a, u, s) {
        var c = e.attrX,
          l = e.attrY,
          f = e.originX,
          d = e.originY,
          v = e.pathLength,
          p = e.pathSpacing,
          m = void 0 === p ? 1 : p,
          h = e.pathOffset,
          g = void 0 === h ? 0 : h;
        st(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          i,
          o,
          a,
          u,
          s
        ),
          (t.attrs = t.style),
          (t.style = {});
        var y = t.attrs,
          x = t.style,
          b = t.dimensions,
          E = t.totalPathLength;
        y.transform && (b && (x.transform = y.transform), delete y.transform),
          b &&
            (void 0 !== f || void 0 !== d || x.transform) &&
            (x.transformOrigin = (function (t, e, n) {
              return gt(e, t.x, t.width) + " " + gt(n, t.y, t.height);
            })(b, void 0 !== f ? f : 0.5, void 0 !== d ? d : 0.5)),
          void 0 !== c && (y.x = c),
          void 0 !== l && (y.y = l),
          void 0 !== E &&
            void 0 !== v &&
            (function (t, e, n, r, i, o) {
              void 0 === r && (r = 1),
                void 0 === i && (i = 0),
                void 0 === o && (o = !0);
              var a = o ? xt : bt;
              t[a.offset] = yt(-i, e);
              var u = yt(n, e),
                s = yt(r, e);
              t[a.array] = u + " " + s;
            })(y, E, v, m, g, !1);
      }
      var wt = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Pt(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = wt();
            return (
              Et(
                n,
                e,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          lt(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style));
        }
        return n;
      }
      function Tt(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, a, u) {
          var s = a.latestValues,
            c = (O(e) ? Pt : dt)(n, s, u),
            l = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (mt(i) || (!0 === n && pt(i)) || (!e && !pt(i))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            f = (0, r.pi)((0, r.pi)((0, r.pi)({}, l), c), { ref: o });
          return (0, i.createElement)(e, f);
        };
      }
      var At = /([a-z])([A-Z])/g,
        Ct = function (t) {
          return t.replace(At, "$1-$2").toLowerCase();
        };
      function St(t, e) {
        var n = e.style,
          r = e.vars;
        for (var i in (Object.assign(t.style, n), r))
          t.style.setProperty(i, r[i]);
      }
      var kt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
      ]);
      function Mt(t, e) {
        for (var n in (St(t, e), e.attrs))
          t.setAttribute(kt.has(n) ? n : Ct(n), e.attrs[n]);
      }
      function Ot(t) {
        var e = t.style,
          n = {};
        for (var r in e) (F(e[r]) || _(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Rt(t) {
        var e = Ot(t);
        for (var n in t) {
          if (F(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Lt(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var Vt = n(5113),
        Dt = function (t) {
          return Array.isArray(t);
        };
      function It(t) {
        var e,
          n = F(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      function jt(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          u = { latestValues: Bt(e, n, r, i), renderState: o() };
        return (
          a &&
            (u.mount = function (t) {
              return a(e, t, u);
            }),
          u
        );
      }
      var Nt = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(f),
            o = (0, i.useContext)(d.O);
          return n
            ? jt(t, e, r, o)
            : (0, Vt.h)(function () {
                return jt(t, e, r, o);
              });
        };
      };
      function Bt(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          u = i(t);
        for (var s in u) o[s] = It(u[s]);
        var c = t.initial,
          l = t.animate,
          f = P(t),
          d = T(t);
        e &&
          d &&
          !f &&
          !1 !== t.inherit &&
          ((null !== c && void 0 !== c) || (c = e.initial),
          (null !== l && void 0 !== l) || (l = e.animate));
        var v = a || !1 === c ? l : c;
        v &&
          "boolean" !== typeof v &&
          !Lt(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = E(t, e);
            if (n) {
              var i = n.transitionEnd;
              n.transition;
              var a = (0, r._T)(n, ["transitionEnd", "transition"]);
              for (var u in a) o[u] = a[u];
              for (var u in i) o[u] = i[u];
            }
          });
        return o;
      }
      var _t = {
        useVisualState: Nt({
          scrapeMotionValuesFromProps: Rt,
          createRenderState: wt,
          onMount: function (t, e, n) {
            var r = n.renderState,
              i = n.latestValues;
            try {
              r.dimensions =
                "function" === typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch (o) {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            "path" === e.tagName && (r.totalPathLength = e.getTotalLength()),
              Et(
                r,
                i,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              Mt(e, r);
          },
        }),
      };
      var Ft,
        Ut = {
          useVisualState: Nt({
            scrapeMotionValuesFromProps: Ot,
            createRenderState: ct,
          }),
        };
      function Ht(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function zt(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return Ht(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function Yt(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Zt(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.Exit = "exit");
      })(Ft || (Ft = {}));
      var Wt = { pageX: 0, pageY: 0 };
      function Xt(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || Wt;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Gt(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function Kt(t, e) {
        return (
          void 0 === e && (e = "page"), { point: Zt(t) ? Xt(t, e) : Gt(t, e) }
        );
      }
      var qt = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, Kt(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        $t = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Jt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Qt(t) {
        return m && null === window.onpointerdown
          ? t
          : m && null === window.ontouchstart
          ? Jt[t]
          : m && null === window.onmousedown
          ? $t[t]
          : t;
      }
      function te(t, e, n, r) {
        return Ht(t, Qt(e), qt(n, "pointerdown" === e), r);
      }
      function ee(t, e, n, r) {
        return zt(t, Qt(e), n && qt(n, "pointerdown" === e), r);
      }
      function ne(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var re = ne("dragHorizontal"),
        ie = ne("dragVertical");
      function oe(t) {
        var e = !1;
        if ("y" === t) e = ie();
        else if ("x" === t) e = re();
        else {
          var n = re(),
            r = ie();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function ae() {
        var t = oe(!0);
        return !t || (t(), !1);
      }
      function ue(t, e, n) {
        return function (r, i) {
          var o;
          Yt(r) &&
            !ae() &&
            (null === n || void 0 === n || n(r, i),
            null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(Ft.Hover, e));
        };
      }
      var se = function (t, e) {
          return !!e && (t === e || se(t, e.parentElement));
        },
        ce = n(3463),
        le = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        fe = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t.reduce(le);
        };
      var de = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ve = {
          tap: de(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              u = e || n || r || o,
              s = (0, i.useRef)(!1),
              c = (0, i.useRef)(null);
            function l() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function f() {
              var t;
              return (
                l(),
                (s.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(Ft.Tap, !1),
                !ae()
              );
            }
            function d(t, n) {
              f() &&
                (se(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              f() && (null === r || void 0 === r || r(t, e));
            }
            ee(
              a,
              "pointerdown",
              u
                ? function (t, e) {
                    var r;
                    l(),
                      s.current ||
                        ((s.current = !0),
                        (c.current = fe(
                          te(window, "pointerup", d),
                          te(window, "pointercancel", v)
                        )),
                        null === n || void 0 === n || n(t, e),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(Ft.Tap, !0));
                  }
                : void 0
            ),
              (0, ce.z)(l);
          }),
          focus: de(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            zt(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(Ft.Focus, !0);
                  }
                : void 0
            ),
              zt(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(Ft.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: de(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            ee(i, "pointerenter", e || r ? ue(i, !0, e) : void 0),
              ee(i, "pointerleave", n || r ? ue(i, !1, n) : void 0);
          }),
        };
      function pe(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var me = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        },
        he = 0.001;
      function ge(t) {
        var e,
          n,
          r = t.duration,
          i = void 0 === r ? 800 : r,
          o = t.bounce,
          a = void 0 === o ? 0.25 : o,
          u = t.velocity,
          s = void 0 === u ? 0 : u,
          c = t.mass,
          l = void 0 === c ? 1 : c,
          f = 1 - a;
        (f = me(0.05, 1, f)),
          (i = me(0.01, 10, i / 1e3)),
          f < 1
            ? ((e = function (t) {
                var e = t * f,
                  n = e * i,
                  r = e - s,
                  o = ye(t, f),
                  a = Math.exp(-n);
                return he - (r / o) * a;
              }),
              (n = function (t) {
                var n = t * f * i,
                  r = n * s + s,
                  o = Math.pow(f, 2) * Math.pow(t, 2) * i,
                  a = Math.exp(-n),
                  u = ye(Math.pow(t, 2), f);
                return ((-e(t) + he > 0 ? -1 : 1) * ((r - o) * a)) / u;
              }))
            : ((e = function (t) {
                return Math.exp(-t * i) * ((t - s) * i + 1) - 0.001;
              }),
              (n = function (t) {
                return Math.exp(-t * i) * (i * i * (s - t));
              }));
        var d = (function (t, e, n) {
          for (var r = n, i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(e, n, 5 / i);
        if (((i *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: i };
        var v = Math.pow(d, 2) * l;
        return { stiffness: v, damping: 2 * f * Math.sqrt(l * v), duration: i };
      }
      function ye(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var xe = ["duration", "bounce"],
        be = ["stiffness", "damping", "mass"];
      function Ee(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function we(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          i = t.to,
          o = void 0 === i ? 1 : i,
          a = t.restSpeed,
          u = void 0 === a ? 2 : a,
          s = t.restDelta,
          c = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]),
          l = { done: !1, value: n },
          f = (function (t) {
            var e = (0, r.pi)(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Ee(t, be) && Ee(t, xe)) {
              var n = ge(t);
              (e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(c),
          d = f.stiffness,
          v = f.damping,
          p = f.mass,
          m = f.velocity,
          h = f.duration,
          g = f.isResolvedFromDuration,
          y = Pe,
          x = Pe;
        function b() {
          var t = m ? -m / 1e3 : 0,
            e = o - n,
            r = v / (2 * Math.sqrt(d * p)),
            i = Math.sqrt(d / p) / 1e3;
          if (
            ((null !== s && void 0 !== s) ||
              (s = Math.abs(o - n) <= 1 ? 0.01 : 0.4),
            r < 1)
          ) {
            var a = ye(i, r);
            (y = function (n) {
              var u = Math.exp(-r * i * n);
              return (
                o -
                u *
                  (((t + r * i * e) / a) * Math.sin(a * n) +
                    e * Math.cos(a * n))
              );
            }),
              (x = function (n) {
                var o = Math.exp(-r * i * n);
                return (
                  r *
                    i *
                    o *
                    ((Math.sin(a * n) * (t + r * i * e)) / a +
                      e * Math.cos(a * n)) -
                  o *
                    (Math.cos(a * n) * (t + r * i * e) -
                      a * e * Math.sin(a * n))
                );
              });
          } else if (1 === r)
            y = function (n) {
              return o - Math.exp(-i * n) * (e + (t + i * e) * n);
            };
          else {
            var u = i * Math.sqrt(r * r - 1);
            y = function (n) {
              var a = Math.exp(-r * i * n),
                s = Math.min(u * n, 300);
              return (
                o -
                (a * ((t + r * i * e) * Math.sinh(s) + u * e * Math.cosh(s))) /
                  u
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (t) {
              var e = y(t);
              if (g) l.done = t >= h;
              else {
                var n = 1e3 * x(t),
                  r = Math.abs(n) <= u,
                  i = Math.abs(o - e) <= s;
                l.done = r && i;
              }
              return (l.value = l.done ? o : e), l;
            },
            flipTarget: function () {
              var t;
              (m = -m), (n = (t = [o, n])[0]), (o = t[1]), b();
            },
          }
        );
      }
      we.needsInterpolation = function (t, e) {
        return "string" === typeof t || "string" === typeof e;
      };
      var Pe = function (t) {
          return 0;
        },
        Te = function (t, e, n) {
          var r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        Ae = function (t, e, n) {
          return -n * t + n * e + t;
        },
        Ce = function (t, e) {
          return function (n) {
            return Boolean(
              (K(n) && G.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            );
          };
        },
        Se = function (t, e, n) {
          return function (r) {
            var i;
            if (!K(r)) return r;
            var o = r.match(W),
              a = o[0],
              u = o[1],
              s = o[2],
              c = o[3];
            return (
              ((i = {})[t] = parseFloat(a)),
              (i[e] = parseFloat(u)),
              (i[n] = parseFloat(s)),
              (i.alpha = void 0 !== c ? parseFloat(c) : 1),
              i
            );
          };
        },
        ke = Y(0, 255),
        Me = (0, r.pi)((0, r.pi)({}, rt), {
          transform: function (t) {
            return Math.round(ke(t));
          },
        }),
        Oe = {
          test: Ce("rgb", "red"),
          parse: Se("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              r = t.blue,
              i = t.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "rgba(" +
              Me.transform(e) +
              ", " +
              Me.transform(n) +
              ", " +
              Me.transform(r) +
              ", " +
              Z(it.transform(o)) +
              ")"
            );
          },
        };
      var Re = {
          test: Ce("#"),
          parse: function (t) {
            var e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: Oe.transform,
        },
        Le = {
          test: Ce("hsl", "hue"),
          parse: Se("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              r = t.lightness,
              i = t.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              J.transform(Z(n)) +
              ", " +
              J.transform(Z(r)) +
              ", " +
              Z(it.transform(o)) +
              ")"
            );
          },
        },
        Ve = function (t, e, n) {
          var r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        De = [Re, Oe, Le],
        Ie = function (t) {
          return De.find(function (e) {
            return e.test(t);
          });
        },
        je = function (t) {
          return (
            "'" +
            t +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Ne = function (t, e) {
          var n = Ie(t),
            i = Ie(e);
          je(t), je(e), n.transform, i.transform;
          var o = n.parse(t),
            a = i.parse(e),
            u = (0, r.pi)({}, o),
            s = n === Le ? Ae : Ve;
          return function (t) {
            for (var e in u) "alpha" !== e && (u[e] = s(o[e], a[e], t));
            return (u.alpha = Ae(o.alpha, a.alpha, t)), n.transform(u);
          };
        },
        Be = {
          test: function (t) {
            return Oe.test(t) || Re.test(t) || Le.test(t);
          },
          parse: function (t) {
            return Oe.test(t)
              ? Oe.parse(t)
              : Le.test(t)
              ? Le.parse(t)
              : Re.parse(t);
          },
          transform: function (t) {
            return K(t)
              ? t
              : t.hasOwnProperty("red")
              ? Oe.transform(t)
              : Le.transform(t);
          },
        },
        _e = "${c}",
        Fe = "${n}";
      function Ue(t) {
        var e = [],
          n = 0,
          r = t.match(X);
        r &&
          ((n = r.length),
          (t = t.replace(X, _e)),
          e.push.apply(e, r.map(Be.parse)));
        var i = t.match(W);
        return (
          i && ((t = t.replace(W, Fe)), e.push.apply(e, i.map(rt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function He(t) {
        return Ue(t).values;
      }
      function ze(t) {
        var e = Ue(t),
          n = e.values,
          r = e.numColors,
          i = e.tokenised,
          o = n.length;
        return function (t) {
          for (var e = i, n = 0; n < o; n++)
            e = e.replace(
              n < r ? _e : Fe,
              n < r ? Be.transform(t[n]) : Z(t[n])
            );
          return e;
        };
      }
      var Ye = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var Ze = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              K(t) &&
              (null !==
                (n =
                  null === (e = t.match(W)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(X)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: He,
          createTransformer: ze,
          getAnimatableNone: function (t) {
            var e = He(t);
            return ze(t)(e.map(Ye));
          },
        },
        We = function (t) {
          return "number" === typeof t;
        };
      function Xe(t, e) {
        return We(t)
          ? function (n) {
              return Ae(t, e, n);
            }
          : Be.test(t)
          ? Ne(t, e)
          : $e(t, e);
      }
      var Ge = function (t, e) {
          var n = (0, r.ev)([], t),
            i = n.length,
            o = t.map(function (t, n) {
              return Xe(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < i; e++) n[e] = o[e](t);
            return n;
          };
        },
        Ke = function (t, e) {
          var n = (0, r.pi)((0, r.pi)({}, t), e),
            i = {};
          for (var o in n)
            void 0 !== t[o] && void 0 !== e[o] && (i[o] = Xe(t[o], e[o]));
          return function (t) {
            for (var e in i) n[e] = i[e](t);
            return n;
          };
        };
      function qe(t) {
        for (
          var e = Ze.parse(t), n = e.length, r = 0, i = 0, o = 0, a = 0;
          a < n;
          a++
        )
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      var $e = function (t, e) {
          var n = Ze.createTransformer(e),
            r = qe(t),
            i = qe(e);
          return (
            r.numHSL === i.numHSL &&
              r.numRGB === i.numRGB &&
              (r.numNumbers, i.numNumbers),
            fe(Ge(r.parsed, i.parsed), n)
          );
        },
        Je = function (t, e) {
          return function (n) {
            return Ae(t, e, n);
          };
        };
      function Qe(t, e, n) {
        for (
          var r,
            i = [],
            o =
              n ||
              ("number" === typeof (r = t[0])
                ? Je
                : "string" === typeof r
                ? Be.test(r)
                  ? Ne
                  : $e
                : Array.isArray(r)
                ? Ge
                : "object" === typeof r
                ? Ke
                : void 0),
            a = t.length - 1,
            u = 0;
          u < a;
          u++
        ) {
          var s = o(t[u], t[u + 1]);
          if (e) {
            var c = Array.isArray(e) ? e[u] : e;
            s = fe(c, s);
          }
          i.push(s);
        }
        return i;
      }
      function tn(t, e, n) {
        var r = void 0 === n ? {} : n,
          i = r.clamp,
          o = void 0 === i || i,
          a = r.ease,
          u = r.mixer,
          s = t.length;
        e.length,
          !a || !Array.isArray(a) || a.length,
          t[0] > t[s - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        var c = Qe(e, a, u),
          l =
            2 === s
              ? (function (t, e) {
                  var n = t[0],
                    r = t[1],
                    i = e[0];
                  return function (t) {
                    return i(Te(n, r, t));
                  };
                })(t, c)
              : (function (t, e) {
                  var n = t.length,
                    r = n - 1;
                  return function (i) {
                    var o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      for (var u = 1; u < n && !(t[u] > i || u === r); u++);
                      o = u - 1;
                    }
                    var s = Te(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, c);
        return o
          ? function (e) {
              return l(me(t[0], t[s - 1], e));
            }
          : l;
      }
      var en,
        nn = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        rn = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        on = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t);
          };
        },
        an = function (t) {
          return t;
        },
        un =
          ((en = 2),
          function (t) {
            return Math.pow(t, en);
          }),
        sn = nn(un),
        cn = rn(un),
        ln = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        fn = nn(ln),
        dn = rn(fn),
        vn = on(1.525),
        pn = nn(vn),
        mn = rn(vn),
        hn = (function (t) {
          var e = on(t);
          return function (t) {
            return (t *= 2) < 1
              ? 0.5 * e(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          };
        })(1.525),
        gn = function (t) {
          if (1 === t || 0 === t) return t;
          var e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        yn = nn(gn);
      function xn(t, e) {
        return t
          .map(function () {
            return e || cn;
          })
          .splice(0, t.length - 1);
      }
      function bn(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          i = void 0 === r ? 1 : r,
          o = t.ease,
          a = t.offset,
          u = t.duration,
          s = void 0 === u ? 300 : u,
          c = { done: !1, value: n },
          l = Array.isArray(i) ? i : [n, i],
          f = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(
            a && a.length === l.length
              ? a
              : (function (t) {
                  var e = t.length;
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0;
                  });
                })(l),
            s
          );
        function d() {
          return tn(f, l, { ease: Array.isArray(o) ? o : xn(l, o) });
        }
        var v = d();
        return {
          next: function (t) {
            return (c.value = v(t)), (c.done = t >= s), c;
          },
          flipTarget: function () {
            l.reverse(), (v = d());
          },
        };
      }
      var En = {
        keyframes: bn,
        spring: we,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            r = t.from,
            i = void 0 === r ? 0 : r,
            o = t.power,
            a = void 0 === o ? 0.8 : o,
            u = t.timeConstant,
            s = void 0 === u ? 350 : u,
            c = t.restDelta,
            l = void 0 === c ? 0.5 : c,
            f = t.modifyTarget,
            d = { done: !1, value: i },
            v = a * n,
            p = i + v,
            m = void 0 === f ? p : f(p);
          return (
            m !== p && (v = m - i),
            {
              next: function (t) {
                var e = -v * Math.exp(-t / s);
                return (
                  (d.done = !(e > l || e < -l)),
                  (d.value = d.done ? m : m + e),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      var wn = n(3031);
      function Pn(t, e, n) {
        return void 0 === n && (n = 0), t - e - n;
      }
      var Tn = function (t) {
        var e = function (e) {
          var n = e.delta;
          return t(n);
        };
        return {
          start: function () {
            return wn.ZP.update(e, !0);
          },
          stop: function () {
            return wn.qY.update(e);
          },
        };
      };
      function An(t) {
        var e,
          n,
          i,
          o,
          a,
          u = t.from,
          s = t.autoplay,
          c = void 0 === s || s,
          l = t.driver,
          f = void 0 === l ? Tn : l,
          d = t.elapsed,
          v = void 0 === d ? 0 : d,
          p = t.repeat,
          m = void 0 === p ? 0 : p,
          h = t.repeatType,
          g = void 0 === h ? "loop" : h,
          y = t.repeatDelay,
          x = void 0 === y ? 0 : y,
          b = t.onPlay,
          E = t.onStop,
          w = t.onComplete,
          P = t.onRepeat,
          T = t.onUpdate,
          A = (0, r._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          C = A.to,
          S = 0,
          k = A.duration,
          M = !1,
          O = !0,
          R = (function (t) {
            if (Array.isArray(t.to)) return bn;
            if (En[t.type]) return En[t.type];
            var e = new Set(Object.keys(t));
            return e.has("ease") ||
              (e.has("duration") && !e.has("dampingRatio"))
              ? bn
              : e.has("dampingRatio") ||
                e.has("stiffness") ||
                e.has("mass") ||
                e.has("damping") ||
                e.has("restSpeed") ||
                e.has("restDelta")
              ? we
              : bn;
          })(A);
        (null === (n = (e = R).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, u, C)) &&
          ((a = tn([0, 100], [u, C], { clamp: !1 })), (u = 0), (C = 100));
        var L = R((0, r.pi)((0, r.pi)({}, A), { from: u, to: C }));
        function V() {
          S++,
            "reverse" === g
              ? (v = (function (t, e, n, r) {
                  return (
                    void 0 === n && (n = 0),
                    void 0 === r && (r = !0),
                    r ? Pn(e + -t, e, n) : e - (t - e) + n
                  );
                })(v, k, x, (O = S % 2 === 0)))
              : ((v = Pn(v, k, x)), "mirror" === g && L.flipTarget()),
            (M = !1),
            P && P();
        }
        function D(t) {
          if ((O || (t = -t), (v += t), !M)) {
            var e = L.next(Math.max(0, v));
            (o = e.value), a && (o = a(o)), (M = O ? e.done : v <= 0);
          }
          null === T || void 0 === T || T(o),
            M &&
              (0 === S && ((null !== k && void 0 !== k) || (k = v)),
              S < m
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(v, k, x, O) && V()
                : (i.stop(), w && w()));
        }
        return (
          c && (null === b || void 0 === b || b(), (i = f(D)).start()),
          {
            stop: function () {
              null === E || void 0 === E || E(), i.stop();
            },
          }
        );
      }
      function Cn(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var Sn = function (t) {
          return 1e3 * t;
        },
        kn = function (t, e) {
          return 1 - 3 * e + 3 * t;
        },
        Mn = function (t, e) {
          return 3 * e - 6 * t;
        },
        On = function (t) {
          return 3 * t;
        },
        Rn = function (t, e, n) {
          return ((kn(e, n) * t + Mn(e, n)) * t + On(e)) * t;
        },
        Ln = function (t, e, n) {
          return 3 * kn(e, n) * t * t + 2 * Mn(e, n) * t + On(e);
        };
      var Vn = 0.1;
      function Dn(t, e, n, r) {
        if (t === e && n === r) return an;
        for (var i = new Float32Array(11), o = 0; o < 11; ++o)
          i[o] = Rn(o * Vn, t, n);
        function a(e) {
          for (var r = 0, o = 1; 10 !== o && i[o] <= e; ++o) r += Vn;
          --o;
          var a = r + ((e - i[o]) / (i[o + 1] - i[o])) * Vn,
            u = Ln(a, t, n);
          return u >= 0.001
            ? (function (t, e, n, r) {
                for (var i = 0; i < 8; ++i) {
                  var o = Ln(e, n, r);
                  if (0 === o) return e;
                  e -= (Rn(e, n, r) - t) / o;
                }
                return e;
              })(e, a, t, n)
            : 0 === u
            ? a
            : (function (t, e, n, r, i) {
                var o,
                  a,
                  u = 0;
                do {
                  (o = Rn((a = e + (n - e) / 2), r, i) - t) > 0
                    ? (n = a)
                    : (e = a);
                } while (Math.abs(o) > 1e-7 && ++u < 10);
                return a;
              })(e, r, r + Vn, t, n);
        }
        return function (t) {
          return 0 === t || 1 === t ? t : Rn(a(t), e, r);
        };
      }
      var In = {
          linear: an,
          easeIn: un,
          easeInOut: cn,
          easeOut: sn,
          circIn: ln,
          circInOut: dn,
          circOut: fn,
          backIn: vn,
          backInOut: mn,
          backOut: pn,
          anticipate: hn,
          bounceIn: yn,
          bounceInOut: function (t) {
            return t < 0.5
              ? 0.5 * (1 - gn(1 - 2 * t))
              : 0.5 * gn(2 * t - 1) + 0.5;
          },
          bounceOut: gn,
        },
        jn = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, r.CR)(t, 4);
            return Dn(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t ? In[t] : t;
        },
        Nn = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Ze.test(e) || e.startsWith("url(")))
          );
        },
        Bn = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        _n = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        Fn = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Un = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        Hn = {
          x: Bn,
          y: Bn,
          z: Bn,
          rotate: Bn,
          rotateX: Bn,
          rotateY: Bn,
          rotateZ: Bn,
          scaleX: _n,
          scaleY: _n,
          scale: _n,
          opacity: Fn,
          backgroundColor: Fn,
          color: Fn,
          default: _n,
        },
        zn = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Yn(t) {
        var e = t.slice(0, -1).split("("),
          n = e[0],
          r = e[1];
        if ("drop-shadow" === n) return t;
        var i = (r.match(W) || [])[0];
        if (!i) return t;
        var o = r.replace(i, ""),
          a = zn.has(n) ? 1 : 0;
        return i !== r && (a *= 100), n + "(" + a + o + ")";
      }
      var Zn = /([a-z-]*)\(.*?\)/g,
        Wn = (0, r.pi)((0, r.pi)({}, Ze), {
          getAnimatableNone: function (t) {
            var e = t.match(Zn);
            return e ? e.map(Yn).join(" ") : t;
          },
        }),
        Xn = (0, r.pi)((0, r.pi)({}, ut), {
          color: Be,
          backgroundColor: Be,
          outlineColor: Be,
          fill: Be,
          stroke: Be,
          borderColor: Be,
          borderTopColor: Be,
          borderRightColor: Be,
          borderBottomColor: Be,
          borderLeftColor: Be,
          filter: Wn,
          WebkitFilter: Wn,
        }),
        Gn = function (t) {
          return Xn[t];
        };
      function Kn(t, e) {
        var n,
          r = Gn(t);
        return (
          r !== Wn && (r = Ze),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      function qn(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          u = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          s = (0, r.pi)({}, u);
        return (
          n && (s.offset = n),
          u.duration && (s.duration = Sn(u.duration)),
          u.repeatDelay && (s.repeatDelay = Sn(u.repeatDelay)),
          e &&
            (s.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(jn)
              : jn(e)),
          "tween" === u.type && (s.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (s.repeatType = "reverse")
              : a
              ? (s.repeatType = "loop")
              : o && (s.repeatType = "mirror"),
            (s.repeat = a || i || o || u.repeat)),
          "spring" !== u.type && (s.type = "keyframes"),
          s
        );
      }
      function $n(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to))), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Dt(e) ? Un : Hn[t] || Hn.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), qn(t))
        );
      }
      function Jn(t, e, n, i, o) {
        var a,
          u = er(i, t),
          s = null !== (a = u.from) && void 0 !== a ? a : e.get(),
          c = Nn(t, n);
        "none" === s && c && "string" === typeof n
          ? (s = Kn(t, n))
          : Qn(s) && "string" === typeof n
          ? (s = tr(n))
          : !Array.isArray(n) && Qn(n) && "string" === typeof s && (n = tr(s));
        var l = Nn(t, s);
        return l && c && !1 !== u.type
          ? function () {
              var i = {
                from: s,
                to: n,
                velocity: e.getVelocity(),
                onComplete: o,
                onUpdate: function (t) {
                  return e.set(t);
                },
              };
              return "inertia" === u.type || "decay" === u.type
                ? (function (t) {
                    var e,
                      n = t.from,
                      i = void 0 === n ? 0 : n,
                      o = t.velocity,
                      a = void 0 === o ? 0 : o,
                      u = t.min,
                      s = t.max,
                      c = t.power,
                      l = void 0 === c ? 0.8 : c,
                      f = t.timeConstant,
                      d = void 0 === f ? 750 : f,
                      v = t.bounceStiffness,
                      p = void 0 === v ? 500 : v,
                      m = t.bounceDamping,
                      h = void 0 === m ? 10 : m,
                      g = t.restDelta,
                      y = void 0 === g ? 1 : g,
                      x = t.modifyTarget,
                      b = t.driver,
                      E = t.onUpdate,
                      w = t.onComplete;
                    function P(t) {
                      return (void 0 !== u && t < u) || (void 0 !== s && t > s);
                    }
                    function T(t) {
                      return void 0 === u
                        ? s
                        : void 0 === s || Math.abs(u - t) < Math.abs(s - t)
                        ? u
                        : s;
                    }
                    function A(t) {
                      null === e || void 0 === e || e.stop(),
                        (e = An(
                          (0, r.pi)((0, r.pi)({}, t), {
                            driver: b,
                            onUpdate: function (e) {
                              var n;
                              null === E || void 0 === E || E(e),
                                null === (n = t.onUpdate) ||
                                  void 0 === n ||
                                  n.call(t, e);
                            },
                            onComplete: w,
                          })
                        ));
                    }
                    function C(t) {
                      A(
                        (0, r.pi)(
                          {
                            type: "spring",
                            stiffness: p,
                            damping: h,
                            restDelta: y,
                          },
                          t
                        )
                      );
                    }
                    if (P(i)) C({ from: i, velocity: a, to: T(i) });
                    else {
                      var S = l * a + i;
                      "undefined" !== typeof x && (S = x(S));
                      var k,
                        M,
                        O = T(S),
                        R = O === u ? -1 : 1;
                      A({
                        type: "decay",
                        from: i,
                        velocity: a,
                        timeConstant: d,
                        power: l,
                        restDelta: y,
                        modifyTarget: x,
                        onUpdate: P(S)
                          ? function (t) {
                              (k = M),
                                (M = t),
                                (a = Cn(t - k, (0, wn.$B)().delta)),
                                ((1 === R && t > O) || (-1 === R && t < O)) &&
                                  C({ from: t, to: O, velocity: a });
                            }
                          : void 0,
                      });
                    }
                    return {
                      stop: function () {
                        return null === e || void 0 === e ? void 0 : e.stop();
                      },
                    };
                  })((0, r.pi)((0, r.pi)({}, i), u))
                : An(
                    (0, r.pi)((0, r.pi)({}, $n(u, i, t)), {
                      onUpdate: function (t) {
                        var e;
                        i.onUpdate(t),
                          null === (e = u.onUpdate) ||
                            void 0 === e ||
                            e.call(u, t);
                      },
                      onComplete: function () {
                        var t;
                        i.onComplete(),
                          null === (t = u.onComplete) ||
                            void 0 === t ||
                            t.call(u);
                      },
                    })
                  );
            }
          : function () {
              var t;
              return (
                e.set(n),
                o(),
                null ===
                  (t = null === u || void 0 === u ? void 0 : u.onComplete) ||
                  void 0 === t ||
                  t.call(u),
                { stop: function () {} }
              );
            };
      }
      function Qn(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function tr(t) {
        return "number" === typeof t ? 0 : Kn("", t);
      }
      function er(t, e) {
        return t[e] || t.default || t;
      }
      function nr(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          e.start(function (i) {
            var o,
              a,
              u = Jn(t, e, n, r, i),
              s = (function (t, e) {
                var n;
                return null !== (n = (er(t, e) || {}).delay) && void 0 !== n
                  ? n
                  : 0;
              })(r, t),
              c = function () {
                return (a = u());
              };
            return (
              s ? (o = setTimeout(c, Sn(s))) : c(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      function rr(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function ir(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var or = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                rr(this.subscriptions, t),
                function () {
                  return ir(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        ar = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new or()),
              (this.velocityUpdateSubscribers = new or()),
              (this.renderSubscribers = new or()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = (0, wn.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  wn.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return wn.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Cn(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function ur(t) {
        return new ar(t);
      }
      var sr = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        cr = [
          rt,
          Q,
          J,
          $,
          et,
          tt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        lr = function (t) {
          return cr.find(sr(t));
        },
        fr = (0, r.ev)((0, r.ev)([], (0, r.CR)(cr)), [Be, Ze]),
        dr = function (t) {
          return fr.find(sr(t));
        };
      function vr(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ur(n));
      }
      function pr(t, e) {
        var n = w(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o;
        i.transition;
        var u,
          s = (0, r._T)(i, ["transitionEnd", "transition"]);
        for (var c in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          vr(t, c, ((u = s[c]), Dt(u) ? u[u.length - 1] || 0 : u));
        }
      }
      function mr(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function hr(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = w(t, e, n.custom),
          a = (o || {}).transition,
          u = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (u = n.transitionOverride);
        var s = o
            ? function () {
                return gr(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0);
                var o = u.delayChildren,
                  a = void 0 === o ? 0 : o,
                  s = u.staggerChildren,
                  c = u.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var u = [],
                    s = (t.variantChildren.size - 1) * i,
                    c =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * i;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(yr)
                      .forEach(function (t, i) {
                        u.push(
                          hr(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + c(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(u)
                  );
                })(t, e, a + i, s, c, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = u.when;
        if (l) {
          var f = (0, r.CR)("beforeChildren" === l ? [s, c] : [c, s], 2),
            d = f[0],
            v = f[1];
          return d().then(v);
        }
        return Promise.all([s(), c(n.delay)]);
      }
      function gr(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          u = void 0 === a ? 0 : a,
          s = o.transitionOverride,
          c = o.type,
          l = t.makeTargetAnimatable(e),
          f = l.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          v = l.transitionEnd,
          p = (0, r._T)(l, ["transition", "transitionEnd"]);
        s && (d = s);
        var m = [],
          h =
            c &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[c]);
        for (var g in p) {
          var y = t.getValue(g),
            x = p[g];
          if (!(!y || void 0 === x || (h && xr(h, g)))) {
            var b = nr(g, y, x, (0, r.pi)({ delay: u }, d));
            m.push(b);
          }
        }
        return Promise.all(m).then(function () {
          v && pr(t, v);
        });
      }
      function yr(t, e) {
        return t.sortNodePosition(e);
      }
      function xr(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var br = [Ft.Animate, Ft.Hover, Ft.Tap, Ft.Drag, Ft.Focus, Ft.Exit],
        Er = (0, r.ev)([], (0, r.CR)(br)).reverse(),
        wr = br.length;
      function Pr(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return hr(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = hr(t, e, n);
                else {
                  var o = "function" === typeof e ? w(t, e, n.custom) : e;
                  r = gr(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Tr(t) {
        var e = Pr(t),
          n = (function () {
            var t;
            return (
              ((t = {})[Ft.Animate] = Ar(!0)),
              (t[Ft.Hover] = Ar()),
              (t[Ft.Tap] = Ar()),
              (t[Ft.Drag] = Ar()),
              (t[Ft.Focus] = Ar()),
              (t[Ft.Exit] = Ar()),
              t
            );
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = w(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"]);
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o);
            }
            return e;
          };
        function u(u, s) {
          for (
            var c,
              l = t.getProps(),
              f = t.getVariantContext(!0) || {},
              d = [],
              v = new Set(),
              p = {},
              m = 1 / 0,
              h = function (e) {
                var i = Er[e],
                  h = n[i],
                  g = null !== (c = l[i]) && void 0 !== c ? c : f[i],
                  y = b(g),
                  E = i === s ? h.isActive : null;
                !1 === E && (m = e);
                var w = g === f[i] && g !== l[i] && y;
                if (
                  (w && o && t.manuallyAnimateOnMount && (w = !1),
                  (h.protectedKeys = (0, r.pi)({}, p)),
                  (!h.isActive && null === E) ||
                    (!g && !h.prevProp) ||
                    Lt(g) ||
                    "boolean" === typeof g)
                )
                  return "continue";
                var P =
                    (function (t, e) {
                      if ("string" === typeof e) return e !== t;
                      if (x(e)) return !pe(e, t);
                      return !1;
                    })(h.prevProp, g) ||
                    (i === s && h.isActive && !w && y) ||
                    (e > m && y),
                  T = Array.isArray(g) ? g : [g],
                  A = T.reduce(a, {});
                !1 === E && (A = {});
                var C = h.prevResolvedValues,
                  S = void 0 === C ? {} : C,
                  k = (0, r.pi)((0, r.pi)({}, S), A),
                  M = function (t) {
                    (P = !0), v.delete(t), (h.needsAnimating[t] = !0);
                  };
                for (var O in k) {
                  var R = A[O],
                    L = S[O];
                  p.hasOwnProperty(O) ||
                    (R !== L
                      ? Dt(R) && Dt(L)
                        ? pe(R, L)
                          ? (h.protectedKeys[O] = !0)
                          : M(O)
                        : void 0 !== R
                        ? M(O)
                        : v.add(O)
                      : void 0 !== R && v.has(O)
                      ? M(O)
                      : (h.protectedKeys[O] = !0));
                }
                (h.prevProp = g),
                  (h.prevResolvedValues = A),
                  h.isActive && (p = (0, r.pi)((0, r.pi)({}, p), A)),
                  o && t.blockInitialAnimation && (P = !1),
                  P &&
                    !w &&
                    d.push.apply(
                      d,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          T.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, u),
                            };
                          })
                        )
                      )
                    );
              },
              g = 0;
            g < wr;
            g++
          )
            h(g);
          if (((i = (0, r.pi)({}, p)), v.size)) {
            var y = {};
            v.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (y[e] = n);
            }),
              d.push({ animation: y });
          }
          var E = Boolean(d.length);
          return (
            o && !1 === l.initial && !t.manuallyAnimateOnMount && (E = !1),
            (o = !1),
            E ? e(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t];
          },
          animateChanges: u,
          setActive: function (e, r, i) {
            var o;
            return n[e].isActive === r
              ? Promise.resolve()
              : (null === (o = t.variantChildren) ||
                  void 0 === o ||
                  o.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, r);
                  }),
                (n[e].isActive = r),
                u(i, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Ar(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Cr = {
          animation: de(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Tr(e)),
              Lt(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: de(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, r.CR)((0, v.oO)(), 2),
              a = o[0],
              u = o[1],
              s = (0, i.useContext)(d.O);
            (0, i.useEffect)(
              function () {
                var t,
                  r,
                  i =
                    null === (t = n.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(Ft.Exit, !a, {
                          custom:
                            null !==
                              (r =
                                null === s || void 0 === s
                                  ? void 0
                                  : s.custom) && void 0 !== r
                              ? r
                              : e,
                        });
                !a && (null === i || void 0 === i || i.then(u));
              },
              [a]
            );
          }),
        },
        Sr = function (t) {
          return t.hasOwnProperty("x") && t.hasOwnProperty("y");
        },
        kr = function (t) {
          return Sr(t) && t.hasOwnProperty("z");
        },
        Mr = function (t, e) {
          return Math.abs(t - e);
        };
      function Or(t, e) {
        if (We(t) && We(e)) return Mr(t, e);
        if (Sr(t) && Sr(e)) {
          var n = Mr(t.x, e.x),
            r = Mr(t.y, e.y),
            i = kr(t) && kr(e) ? Mr(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      var Rr = (function () {
        function t(t, e, n) {
          var i = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (i.lastMoveEvent && i.lastMoveEventInfo) {
                var t = Dr(i.lastMoveEventInfo, i.history),
                  e = null !== i.startEvent,
                  n = Or(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var o = t.point,
                    a = (0, wn.$B)().timestamp;
                  i.history.push((0, r.pi)((0, r.pi)({}, o), { timestamp: a }));
                  var u = i.handlers,
                    s = u.onStart,
                    c = u.onMove;
                  e ||
                    (s && s(i.lastMoveEvent, t),
                    (i.startEvent = i.lastMoveEvent)),
                    c && c(i.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (i.lastMoveEvent = t),
                (i.lastMoveEventInfo = Lr(e, i.transformPagePoint)),
                Yt(t) && 0 === t.buttons
                  ? i.handlePointerUp(t, e)
                  : wn.ZP.update(i.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              i.end();
              var n = i.handlers,
                r = n.onEnd,
                o = n.onSessionEnd,
                a = Dr(Lr(e, i.transformPagePoint), i.history);
              i.startEvent && r && r(t, a), o && o(t, a);
            }),
            !(Zt(t) && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var a = Lr(Kt(t), this.transformPagePoint),
              u = a.point,
              s = (0, wn.$B)().timestamp;
            this.history = [(0, r.pi)((0, r.pi)({}, u), { timestamp: s })];
            var c = e.onSessionStart;
            c && c(t, Dr(a, this.history)),
              (this.removeListeners = fe(
                te(window, "pointermove", this.handlePointerMove),
                te(window, "pointerup", this.handlePointerUp),
                te(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              wn.qY.update(this.updatePoint);
          }),
          t
        );
      })();
      function Lr(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function Vr(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Dr(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: Vr(n, jr(e)),
          offset: Vr(n, Ir(e)),
          velocity: Nr(e, 0.1),
        };
      }
      function Ir(t) {
        return t[0];
      }
      function jr(t) {
        return t[t.length - 1];
      }
      function Nr(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = jr(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Sn(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      var Br = n(5275);
      function _r(t) {
        return [t("x"), t("y")];
      }
      function Fr(t, e, n) {
        var r = e.min,
          i = e.max;
        return (
          void 0 !== r && t < r
            ? (t = n ? Ae(r, t, n.min) : Math.max(t, r))
            : void 0 !== i &&
              t > i &&
              (t = n ? Ae(i, t, n.max) : Math.min(t, i)),
          t
        );
      }
      function Ur(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function Hr(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: t.min + i, max: t.min + o }
        );
      }
      function zr(t, e, n) {
        return { min: Yr(t, e), max: Yr(t, n) };
      }
      function Yr(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function Zr(t, e) {
        var n = t.getBoundingClientRect();
        return (0, Br.RX)((0, Br.dV)(n, e));
      }
      function Wr(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), Or(t, e) < n
        );
      }
      function Xr(t) {
        return t.max - t.min;
      }
      function Gr(t, e) {
        var n = 0.5,
          r = Xr(t),
          i = Xr(e);
        return (
          i > r
            ? (n = Te(e.min, e.max - r, t.min))
            : r > i && (n = Te(t.min, t.max - i, e.min)),
          me(0, 1, n)
        );
      }
      function Kr(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = Ae(e.min, e.max, t.origin)),
          (t.scale = Xr(n) / Xr(e)),
          Wr(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = Ae(n.min, n.max, t.origin) - t.originPoint),
          Wr(t.translate) && (t.translate = 0);
      }
      function qr(t, e, n, r) {
        Kr(t.x, e.x, n.x, $r(r.originX)), Kr(t.y, e.y, n.y, $r(r.originY));
      }
      function $r(t) {
        return "number" === typeof t ? t : 0.5;
      }
      function Jr(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Xr(e));
      }
      var Qr = n(2971);
      function ti(t, e) {
        return { min: e.min - t.min, max: e.max - t.min };
      }
      function ei(t, e) {
        return { x: ti(t.x, e.x), y: ti(t.y, e.y) };
      }
      function ni(t, e) {
        var n = t.getLayoutId(),
          r = e.getLayoutId();
        return n !== r || (void 0 === r && t !== e);
      }
      function ri(t) {
        var e = t.getProps(),
          n = e.drag,
          r = e._dragX;
        return n && !r;
      }
      function ii(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function oi(t, e, n) {
        return n + e * (t - n);
      }
      function ai(t, e, n, r, i) {
        return void 0 !== i && (t = oi(t, i, r)), oi(t, n, r) + e;
      }
      function ui(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = ai(t.min, e, n, r, i)),
          (t.max = ai(t.max, e, n, r, i));
      }
      function si(t, e) {
        var n = e.x,
          r = e.y;
        ui(t.x, n.translate, n.scale, n.originPoint),
          ui(t.y, r.translate, r.scale, r.originPoint);
      }
      function ci(t, e, n, i) {
        var o = (0, r.CR)(i, 3),
          a = o[0],
          u = o[1],
          s = o[2];
        (t.min = e.min), (t.max = e.max);
        var c = void 0 !== n[s] ? n[s] : 0.5,
          l = Ae(e.min, e.max, c);
        ui(t, n[a], n[u], l, n.scale);
      }
      var li = ["x", "scaleX", "originX"],
        fi = ["y", "scaleY", "originY"];
      function di(t, e, n) {
        ci(t.x, e.x, n, li), ci(t.y, e.y, n, fi);
      }
      function vi(t, e, n, r, i) {
        return (
          (t = oi((t -= e), 1 / n, r)), void 0 !== i && (t = oi(t, 1 / i, r)), t
        );
      }
      function pi(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          u = i[2];
        !(function (t, e, n, r, i) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5);
          var o = Ae(t.min, t.max, r) - e;
          (t.min = vi(t.min, e, n, o, i)), (t.max = vi(t.max, e, n, o, i));
        })(t, e[o], e[a], e[u], e.scale);
      }
      function mi(t, e) {
        pi(t.x, e, li), pi(t.y, e, fi);
      }
      var hi,
        gi = n(1148),
        yi = new WeakMap(),
        xi = (function () {
          function t(t) {
            var e = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = (0, Br.VZ)()),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              yi.set(e, this);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                i = void 0 === e ? {} : e,
                o = i.snapToCursor,
                a = void 0 !== o && o,
                u = i.cursorProgress,
                s = this.props.transformPagePoint;
              this.panSession = new Rr(
                t,
                {
                  onSessionStart: function (t) {
                    var e;
                    n.stopMotion();
                    var i = (function (t) {
                      return Kt(t, "client");
                    })(t).point;
                    null === (e = n.cancelLayout) || void 0 === e || e.call(n),
                      (n.cancelLayout = (0, gi.U)(function (t, e) {
                        var o = (0, Qr.kv)(n.visualElement),
                          s = (0, Qr.e3)(n.visualElement),
                          c = (0, r.ev)(
                            (0, r.ev)([], (0, r.CR)(o)),
                            (0, r.CR)(s)
                          ),
                          l = !1;
                        n.isLayoutDrag() &&
                          n.visualElement.lockProjectionTarget(),
                          e(function () {
                            c.forEach(function (t) {
                              return t.resetTransform();
                            });
                          }),
                          t(function () {
                            (0, Qr.de)(n.visualElement), s.forEach(Qr.de);
                          }),
                          e(function () {
                            c.forEach(function (t) {
                              return t.restoreTransform();
                            }),
                              a && (l = n.snapToCursor(i));
                          }),
                          t(function () {
                            Boolean(
                              n.getAxisMotionValue("x") && !n.isExternalDrag()
                            ) ||
                              n.visualElement.rebaseProjectionTarget(
                                !0,
                                n.visualElement.measureViewportBox(!1)
                              ),
                              n.visualElement.scheduleUpdateLayoutProjection();
                            var t = n.visualElement.projection;
                            _r(function (e) {
                              if (!l) {
                                var r = t.target[e],
                                  o = r.min,
                                  a = r.max;
                                n.cursorProgress[e] = u ? u[e] : Te(o, a, i[e]);
                              }
                              var s = n.getAxisMotionValue(e);
                              s && (n.originPoint[e] = s.get());
                            });
                          }),
                          e(function () {
                            wn.iW.update(),
                              wn.iW.preRender(),
                              wn.iW.render(),
                              wn.iW.postRender();
                          }),
                          t(function () {
                            return n.resolveDragConstraints();
                          });
                      }));
                  },
                  onStart: function (t, e) {
                    var r,
                      i,
                      o,
                      a = n.props,
                      u = a.drag,
                      s = a.dragPropagation;
                    (!u ||
                      s ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = oe(u)),
                      n.openGlobalLock)) &&
                      ((0, gi.R)(),
                      (n.isDragging = !0),
                      (n.currentDirection = null),
                      null === (i = (r = n.props).onDragStart) ||
                        void 0 === i ||
                        i.call(r, t, e),
                      null === (o = n.visualElement.animationState) ||
                        void 0 === o ||
                        o.setActive(Ft.Drag, !0));
                  },
                  onMove: function (t, e) {
                    var r,
                      i,
                      o,
                      a,
                      u = n.props,
                      s = u.dragPropagation,
                      c = u.dragDirectionLock;
                    if (s || n.openGlobalLock) {
                      var l = e.offset;
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10);
                            var n = null;
                            Math.abs(t.y) > e
                              ? (n = "y")
                              : Math.abs(t.x) > e && (n = "x");
                            return n;
                          })(l)),
                          void (
                            null !== n.currentDirection &&
                            (null === (i = (r = n.props).onDirectionLock) ||
                              void 0 === i ||
                              i.call(r, n.currentDirection))
                          )
                        );
                      n.updateAxis("x", e.point, l),
                        n.updateAxis("y", e.point, l),
                        null === (a = (o = n.props).onDrag) ||
                          void 0 === a ||
                          a.call(o, t, e),
                        (hi = t);
                    }
                  },
                  onSessionEnd: function (t, e) {
                    return n.stop(t, e);
                  },
                },
                { transformPagePoint: s }
              );
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props,
                n = e.dragConstraints,
                r = e.dragElastic,
                i = this.visualElement.getLayoutState().layoutCorrected;
              (this.constraints =
                !!n &&
                (y(n)
                  ? this.resolveRefConstraints(i, n)
                  : (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: Ur(t.x, r, o), y: Ur(t.y, n, i) };
                    })(i, n))),
                (this.elastic = (function (t) {
                  return (
                    !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                    { x: zr(t, "left", "right"), y: zr(t, "top", "bottom") }
                  );
                })(r)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  _r(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                i = n.transformPagePoint,
                o = e.current;
              this.constraintsBox = Zr(o, i);
              var a = (function (t, e) {
                return { x: Hr(t.x, e.x), y: Hr(t.y, e.y) };
              })(t, this.constraintsBox);
              if (r) {
                var u = r((0, Br._6)(a));
                (this.hasMutatedConstraints = !!u), u && (a = (0, Br.RX)(u));
              }
              return a;
            }),
            (t.prototype.cancelDrag = function () {
              var t, e;
              this.visualElement.unlockProjectionTarget(),
                null === (t = this.cancelLayout) ||
                  void 0 === t ||
                  t.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(Ft.Drag, !1);
            }),
            (t.prototype.stop = function (t, e) {
              var n, r, i;
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var o = this.isDragging;
              if ((this.cancelDrag(), o)) {
                var a = e.velocity;
                this.animateDragEnd(a),
                  null === (i = (r = this.props).onDragEnd) ||
                    void 0 === i ||
                    i.call(r, t, e);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              return _r(function (n) {
                if (bi(n, e.props.drag, e.currentDirection)) {
                  var r = e.getAxisMotionValue(n);
                  if (!r) return (e.cursorProgress[n] = 0.5), !0;
                  var i = e.visualElement.getLayoutState().layout,
                    o = i[n].max - i[n].min,
                    a = i[n].min + o / 2,
                    u = t[n] - a;
                  (e.originPoint[n] = t[n]), r.set(u);
                }
              }).includes(!0);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (bi(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e);
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (e && n) {
                var r = this.originPoint[t] + e[t],
                  i = this.constraints
                    ? Fr(r, this.constraints[t], this.elastic[t])
                    : r;
                n.set(i);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.visualElement.getLayoutState().layout[t],
                i = r.max - r.min,
                o = this.cursorProgress[t],
                a = (function (t, e, n, r, i) {
                  var o = t - e * n;
                  return r ? Fr(o, r, i) : o;
                })(
                  e[t],
                  i,
                  o,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[t],
                  this.elastic[t]
                );
              this.visualElement.setProjectionTargetAxis(t, a, a + i);
            }),
            (t.prototype.setProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                u = void 0 !== a && a,
                s = t.dragConstraints,
                c = void 0 !== s && s,
                l = t.dragElastic,
                f = void 0 === l ? 0.35 : l,
                d = t.dragMomentum,
                v = void 0 === d || d,
                p = (0, r._T)(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = (0, r.pi)(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: u,
                  dragConstraints: c,
                  dragElastic: f,
                  dragMomentum: v,
                },
                p
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                i = "_drag" + t.toUpperCase();
              return this.props[i]
                ? this.props[i]
                : n || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue("x");
            }),
            (t.prototype.isExternalDrag = function () {
              var t = this.props,
                e = t._dragX,
                n = t._dragY;
              return e || n;
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                u = n.dragTransition,
                s = (function (t, e) {
                  void 0 === e && (e = !0);
                  var n,
                    r = t.getProjectionParent();
                  return (
                    !!r &&
                    (e
                      ? mi(
                          (n = ei(r.projection.target, t.projection.target)),
                          r.getLatestValues()
                        )
                      : (n = ei(
                          r.getLayoutState().layout,
                          t.getLayoutState().layout
                        )),
                    _r(function (e) {
                      return t.setProjectionTargetAxis(
                        e,
                        n[e].min,
                        n[e].max,
                        !0
                      );
                    }),
                    !0)
                  );
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                c = this.constraints || {};
              if (s && Object.keys(c).length && this.isLayoutDrag()) {
                var l = this.visualElement.getProjectionParent();
                if (l) {
                  var f = ei(l.projection.targetFinal, c);
                  _r(function (t) {
                    var e = f[t],
                      n = e.min,
                      r = e.max;
                    c[t] = {
                      min: isNaN(n) ? void 0 : n,
                      max: isNaN(r) ? void 0 : r,
                    };
                  });
                }
              }
              var d = _r(function (n) {
                var l;
                if (bi(n, i, e.currentDirection)) {
                  var f =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {},
                    d = a ? 200 : 1e6,
                    v = a ? 40 : 1e7,
                    p = (0, r.pi)(
                      (0, r.pi)(
                        {
                          type: "inertia",
                          velocity: o ? t[n] : 0,
                          bounceStiffness: d,
                          bounceDamping: v,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        u
                      ),
                      f
                    );
                  return e.getAxisMotionValue(n)
                    ? e.startAxisValueAnimation(n, p)
                    : e.visualElement.startLayoutAnimation(n, p, s);
                }
              });
              return Promise.all(d).then(function () {
                var t, n;
                null === (n = (t = e.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              _r(function (e) {
                var n = t.getAxisMotionValue(e);
                n ? n.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (n) {
                var r = n.get();
                return n.set(r), n.set(r), nr(t, n, 0, e);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag;
              if (y(e.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var r = { x: 0, y: 0 };
                _r(function (e) {
                  r[e] = Gr(
                    t.visualElement.projection.target[e],
                    t.constraintsBox[e]
                  );
                }),
                  this.updateConstraints(function () {
                    _r(function (e) {
                      if (bi(e, n, null)) {
                        var i = (function (t, e, n) {
                            var r = t.max - t.min,
                              i = Ae(e.min, e.max - r, n);
                            return { min: i, max: i + r };
                          })(
                            t.visualElement.projection.target[e],
                            t.constraintsBox[e],
                            r[e]
                          ),
                          o = i.min,
                          a = i.max;
                        t.visualElement.setProjectionTargetAxis(e, o, a);
                      }
                    });
                  }),
                  setTimeout(gi.R, 1);
              }
            }),
            (t.prototype.updateConstraints = function (t) {
              var e = this;
              this.cancelLayout = (0, gi.U)(function (n, r) {
                var i = (0, Qr.kv)(e.visualElement);
                r(function () {
                  return i.forEach(function (t) {
                    return t.resetTransform();
                  });
                }),
                  n(function () {
                    return (0, Qr.de)(e.visualElement);
                  }),
                  r(function () {
                    return i.forEach(function (t) {
                      return t.restoreTransform();
                    });
                  }),
                  n(function () {
                    e.resolveDragConstraints();
                  }),
                  t && r(t);
              });
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = te(t.getInstance(), "pointerdown", function (t) {
                  var n = e.props,
                    r = n.drag,
                    i = n.dragListener;
                  r && (void 0 === i || i) && e.start(t);
                }),
                r = Ht(window, "resize", function () {
                  e.scalePoint();
                }),
                i = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints();
                }),
                o = t.prevDragCursor;
              return (
                o && this.start(hi, { cursorProgress: o }),
                function () {
                  null === n || void 0 === n || n(),
                    null === r || void 0 === r || r(),
                    null === i || void 0 === i || i(),
                    e.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function bi(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Ei = {
          pan: de(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              u = e || n || r || o,
              s = (0, i.useRef)(null),
              c = (0, i.useContext)(l).transformPagePoint,
              f = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (s.current = null), r && r(t, e);
                },
              };
            (0, i.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(f);
            }),
              ee(
                a,
                "pointerdown",
                u &&
                  function (t) {
                    s.current = new Rr(t, f, { transformPagePoint: c });
                  }
              ),
              (0, ce.z)(function () {
                return s.current && s.current.end();
              });
          }),
          drag: de(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              o = (0, i.useContext)(l).transformPagePoint,
              a = (0, Vt.h)(function () {
                return new xi({ visualElement: n });
              });
            a.setProps((0, r.pi)((0, r.pi)({}, t), { transformPagePoint: o })),
              (0, i.useEffect)(
                function () {
                  return e && e.subscribe(a);
                },
                [a]
              ),
              (0, i.useEffect)(function () {
                return a.mount(n);
              }, []);
          }),
        },
        wi = n(8689);
      function Pi(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Ti = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Ai(t, e, n) {
        void 0 === n && (n = 1);
        var i = (0, r.CR)(
            (function (t) {
              var e = Ti.exec(t);
              if (!e) return [,];
              var n = (0, r.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          a = i[1];
        if (o) {
          var u = window.getComputedStyle(e).getPropertyValue(o);
          return u ? u.trim() : Pi(a) ? Ai(a, e, n + 1) : a;
        }
      }
      function Ci(t, e) {
        return (t / (e.max - e.min)) * 100;
      }
      var Si = "_$css";
      var ki = {
          process: function (t, e, n) {
            var r = n.target;
            if ("string" === typeof t) {
              if (!Q.test(t)) return t;
              t = parseFloat(t);
            }
            return Ci(t, r.x) + "% " + Ci(t, r.y) + "%";
          },
        },
        Mi = {
          borderRadius: (0, r.pi)((0, r.pi)({}, ki), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: ki,
          borderTopRightRadius: ki,
          borderBottomLeftRadius: ki,
          borderBottomRightRadius: ki,
          boxShadow: {
            process: function (t, e) {
              var n = e.delta,
                r = e.treeScale,
                i = t,
                o = t.includes("var("),
                a = [];
              o &&
                (t = t.replace(Ti, function (t) {
                  return a.push(t), Si;
                }));
              var u = Ze.parse(t);
              if (u.length > 5) return i;
              var s = Ze.createTransformer(t),
                c = "number" !== typeof u[0] ? 1 : 0,
                l = n.x.scale * r.x,
                f = n.y.scale * r.y;
              (u[0 + c] /= l), (u[1 + c] /= f);
              var d = Ae(l, f, 0.5);
              "number" === typeof u[2 + c] && (u[2 + c] /= d),
                "number" === typeof u[3 + c] && (u[3 + c] /= d);
              var v = s(u);
              if (o) {
                var p = 0;
                v = v.replace(Si, function () {
                  var t = a[p];
                  return p++, t;
                });
              }
              return v;
            },
          },
        },
        Oi = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.frameTarget = (0, Br.VZ)()),
              (e.currentAnimationTarget = (0, Br.VZ)()),
              (e.isAnimating = { x: !1, y: !1 }),
              (e.stopAxisAnimation = { x: void 0, y: void 0 }),
              (e.isAnimatingTree = !1),
              (e.animate = function (t, n, i) {
                void 0 === i && (i = {});
                var o = i.originBox,
                  a = i.targetBox,
                  u = i.visibilityAction,
                  s = i.shouldStackAnimate,
                  c = i.onComplete,
                  l = i.prevParent,
                  f = (0, r._T)(i, [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                    "onComplete",
                    "prevParent",
                  ]),
                  d = e.props,
                  v = d.visualElement,
                  p = d.layout;
                if (!1 === s) return (e.isAnimatingTree = !1), e.safeToRemove();
                if (!e.isAnimatingTree || !0 === s) {
                  s && (e.isAnimatingTree = !0), (n = o || n), (t = a || t);
                  var m = !1,
                    h = v.getProjectionParent();
                  if (h) {
                    var g = h.prevViewportBox,
                      y = h.getLayoutState().layout;
                    l &&
                      (a && (y = l.getLayoutState().layout),
                      o &&
                        !ni(l, h) &&
                        l.prevViewportBox &&
                        (g = l.prevViewportBox)),
                      g &&
                        ji(l, o, a) &&
                        ((m = !0), (n = ei(g, n)), (t = ei(y, t)));
                  }
                  var x = Ri(n, t),
                    b = _r(function (i) {
                      var o, a;
                      if ("position" === p) {
                        var s = t[i].max - t[i].min;
                        n[i].max = n[i].min + s;
                      }
                      if (!v.projection.isTargetLocked)
                        return void 0 === u
                          ? x
                            ? e.animateAxis(
                                i,
                                t[i],
                                n[i],
                                (0, r.pi)((0, r.pi)({}, f), { isRelative: m })
                              )
                            : (null === (a = (o = e.stopAxisAnimation)[i]) ||
                                void 0 === a ||
                                a.call(o),
                              v.setProjectionTargetAxis(
                                i,
                                t[i].min,
                                t[i].max,
                                m
                              ))
                          : void v.setVisibility(u === wi.c.Show);
                    });
                  return (
                    v.syncRender(),
                    Promise.all(b).then(function () {
                      (e.isAnimatingTree = !1),
                        c && c(),
                        v.notifyLayoutAnimationComplete();
                    })
                  );
                }
              }),
              e
            );
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props.visualElement;
              (e.animateMotionValue = nr),
                e.enableLayoutProjection(),
                (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
                (e.layoutSafeToRemove = function () {
                  return t.safeToRemove();
                }),
                (function (t) {
                  for (var e in t) R[e] = t[e];
                })(Mi);
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this;
              this.unsubLayoutReady(),
                _r(function (e) {
                  var n, r;
                  return null === (r = (n = t.stopAxisAnimation)[e]) ||
                    void 0 === r
                    ? void 0
                    : r.call(n);
                });
            }),
            (e.prototype.animateAxis = function (t, e, n, r) {
              var i,
                o,
                a = this,
                u = void 0 === r ? {} : r,
                s = u.transition,
                c = u.isRelative;
              if (
                !this.isAnimating[t] ||
                !Di(e, this.currentAnimationTarget[t])
              ) {
                null === (o = (i = this.stopAxisAnimation)[t]) ||
                  void 0 === o ||
                  o.call(i),
                  (this.isAnimating[t] = !0);
                var l = this.props.visualElement,
                  f = this.frameTarget[t],
                  d = l.getProjectionAnimationProgress()[t];
                d.clearListeners(), d.set(0), d.set(0);
                var v = function () {
                  var r = d.get() / 1e3;
                  !(function (t, e, n, r) {
                    (t.min = Ae(e.min, n.min, r)),
                      (t.max = Ae(e.max, n.max, r));
                  })(f, n, e, r),
                    l.setProjectionTargetAxis(t, f.min, f.max, c);
                };
                v();
                var p = d.onChange(v);
                (this.stopAxisAnimation[t] = function () {
                  (a.isAnimating[t] = !1), d.stop(), p();
                }),
                  (this.currentAnimationTarget[t] = e);
                var m = s || l.getDefaultTransition() || Ii;
                return nr(
                  "x" === t ? "layoutX" : "layoutY",
                  d,
                  1e3,
                  m && er(m, "layout")
                ).then(this.stopAxisAnimation[t]);
              }
            }),
            (e.prototype.safeToRemove = function () {
              var t, e;
              null === (e = (t = this.props).safeToRemove) ||
                void 0 === e ||
                e.call(t);
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      function Ri(t, e) {
        return !Vi(t) && !Vi(e) && (!Di(t.x, e.x) || !Di(t.y, e.y));
      }
      var Li = { min: 0, max: 0 };
      function Vi(t) {
        return Di(t.x, Li) && Di(t.y, Li);
      }
      function Di(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      var Ii = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ji(t, e, n) {
        return t || (!t && !(e || n));
      }
      var Ni = n(7764),
        Bi = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.framerSyncLayout,
                r = t.visualElement;
              (0, Ni.Md)(e) && e.register(r),
                (0, Ni.Md)(n) && n.register(r),
                r.onUnmount(function () {
                  (0, Ni.Md)(e) && e.remove(r), (0, Ni.Md)(n) && n.remove(r);
                });
            }),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement;
              return (
                (0, Ni.Md)(e) ? e.syncUpdate() : ((0, Qr.x7)(n), e.add(n)), null
              );
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.syncLayout;
              (0, Ni.Md)(t) || t.flush();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      var _i = {
        measureLayout: function (t) {
          var e = (0, i.useContext)(Ni.WH),
            n = (0, i.useContext)(Ni.bg);
          return i.createElement(
            Bi,
            (0, r.pi)({}, t, { syncLayout: e, framerSyncLayout: n })
          );
        },
        layoutAnimation: function (t) {
          var e = (0, r.CR)((0, v.oO)(), 2)[1];
          return i.createElement(Oi, (0, r.pi)({}, t, { safeToRemove: e }));
        },
      };
      function Fi() {
        return {
          isHydrated: !1,
          layout: (0, Br.VZ)(),
          layoutCorrected: (0, Br.VZ)(),
          treeScale: { x: 1, y: 1 },
          delta: (0, Br.pY)(),
          deltaFinal: (0, Br.pY)(),
          deltaTransform: "",
        };
      }
      var Ui = Fi();
      function Hi(t, e, n) {
        var r = t.x,
          i = t.y,
          o =
            "translate3d(" +
            r.translate / e.x +
            "px, " +
            i.translate / e.y +
            "px, 0) ";
        if (n) {
          var a = n.rotate,
            u = n.rotateX,
            s = n.rotateY;
          a && (o += "rotate(" + a + ") "),
            u && (o += "rotateX(" + u + ") "),
            s && (o += "rotateY(" + s + ") ");
        }
        return (
          (o += "scale(" + r.scale + ", " + i.scale + ")"),
          n || o !== Yi ? o : ""
        );
      }
      function zi(t) {
        var e = t.deltaFinal;
        return 100 * e.x.origin + "% " + 100 * e.y.origin + "% 0";
      }
      var Yi = Hi(Ui.delta, Ui.treeScale, { x: 1, y: 1 }),
        Zi = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      function Wi(t, e, n, r) {
        var i,
          o,
          a = t.delta,
          u = t.layout,
          s = t.layoutCorrected,
          c = t.treeScale,
          l = e.target;
        (o = u),
          ii((i = s).x, o.x),
          ii(i.y, o.y),
          (function (t, e, n) {
            var r = n.length;
            if (r) {
              var i, o;
              e.x = e.y = 1;
              for (var a = 0; a < r; a++)
                (o = (i = n[a]).getLayoutState().delta),
                  (e.x *= o.x.scale),
                  (e.y *= o.y.scale),
                  si(t, o),
                  ri(i) && di(t, t, i.getLatestValues());
            }
          })(s, c, n),
          qr(a, s, l, r);
      }
      var Xi = n(3813),
        Gi = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              rr(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              ir(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(Xi._),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      var Ki = function (t) {
        var e = t.treeType,
          n = void 0 === e ? "" : e,
          i = t.build,
          o = t.getBaseTarget,
          a = t.makeTargetAnimatable,
          u = t.measureViewportBox,
          s = t.render,
          c = t.readValueFromInstance,
          l = t.resetTransform,
          f = t.restoreTransform,
          d = t.removeValueFromRenderState,
          v = t.sortNodePosition,
          p = t.scrapeMotionValuesFromProps;
        return function (t, e) {
          var m = t.parent,
            h = t.props,
            g = t.presenceId,
            y = t.blockInitialAnimation,
            x = t.visualState;
          void 0 === e && (e = {});
          var E,
            w,
            A,
            C,
            S,
            k,
            M = x.latestValues,
            O = x.renderState,
            R = (function () {
              var t = Zi.map(function () {
                  return new or();
                }),
                e = {},
                n = {
                  clearAllListeners: function () {
                    return t.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    return Zi.forEach(function (r) {
                      var i;
                      null === (i = e[r]) || void 0 === i || i.call(e);
                      var o = "on" + r,
                        a = t[o];
                      a && (e[r] = n[o](a));
                    });
                  },
                };
              return (
                t.forEach(function (t, e) {
                  (n["on" + Zi[e]] = function (e) {
                    return t.add(e);
                  }),
                    (n["notify" + Zi[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(t, (0, r.ev)([], (0, r.CR)(e)));
                    });
                }),
                n
              );
            })(),
            L = {
              isEnabled: !1,
              isHydrated: !1,
              isTargetLocked: !1,
              target: (0, Br.VZ)(),
              targetFinal: (0, Br.VZ)(),
            },
            V = L,
            D = M,
            I = Fi(),
            j = !1,
            N = new Map(),
            B = new Map(),
            _ = {},
            U = (0, r.pi)({}, M);
          function H() {
            E &&
              ($.isProjectionReady() &&
                (di(V.targetFinal, V.target, D),
                qr(I.deltaFinal, I.layoutCorrected, V.targetFinal, M)),
              z(),
              s(E, O));
          }
          function z() {
            var t = M;
            if (C && C.isActive()) {
              var n = C.getCrossfadeState($);
              n && (t = n);
            }
            i($, O, t, V, I, e, h);
          }
          function Y() {
            R.notifyUpdate(M);
          }
          function Z() {
            $.layoutTree.forEach($i);
          }
          var W = p(h);
          for (var X in W) {
            var G = W[X];
            void 0 !== M[X] && F(G) && G.set(M[X], !1);
          }
          var K = P(h),
            q = T(h),
            $ = (0, r.pi)(
              (0, r.pi)(
                {
                  treeType: n,
                  current: null,
                  depth: m ? m.depth + 1 : 0,
                  parent: m,
                  children: new Set(),
                  path: m
                    ? (0, r.ev)((0, r.ev)([], (0, r.CR)(m.path)), [m])
                    : [],
                  layoutTree: m ? m.layoutTree : new Gi(),
                  presenceId: g,
                  projection: L,
                  variantChildren: q ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === m || void 0 === m ? void 0 : m.isMounted()
                  ),
                  blockInitialAnimation: y,
                  isMounted: function () {
                    return Boolean(E);
                  },
                  mount: function (t) {
                    (E = $.current = t),
                      $.pointTo($),
                      q &&
                        m &&
                        !K &&
                        (k =
                          null === m || void 0 === m
                            ? void 0
                            : m.addVariantChild($)),
                      null === m || void 0 === m || m.children.add($);
                  },
                  unmount: function () {
                    wn.qY.update(Y),
                      wn.qY.render(H),
                      wn.qY.preRender($.updateLayoutProjection),
                      B.forEach(function (t) {
                        return t();
                      }),
                      $.stopLayoutAnimation(),
                      $.layoutTree.remove($),
                      null === k || void 0 === k || k(),
                      null === m || void 0 === m || m.children.delete($),
                      null === A || void 0 === A || A(),
                      R.clearAllListeners();
                  },
                  addVariantChild: function (t) {
                    var e,
                      n = $.getClosestVariantNode();
                    if (n)
                      return (
                        null === (e = n.variantChildren) ||
                          void 0 === e ||
                          e.add(t),
                        function () {
                          return n.variantChildren.delete(t);
                        }
                      );
                  },
                  sortNodePosition: function (t) {
                    return v && n === t.treeType
                      ? v($.getInstance(), t.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return q
                      ? $
                      : null === m || void 0 === m
                      ? void 0
                      : m.getClosestVariantNode();
                  },
                  scheduleUpdateLayoutProjection: m
                    ? m.scheduleUpdateLayoutProjection
                    : function () {
                        return wn.ZP.preRender(
                          $.updateTreeLayoutProjection,
                          !1,
                          !0
                        );
                      },
                  getLayoutId: function () {
                    return h.layoutId;
                  },
                  getInstance: function () {
                    return E;
                  },
                  getStaticValue: function (t) {
                    return M[t];
                  },
                  setStaticValue: function (t, e) {
                    return (M[t] = e);
                  },
                  getLatestValues: function () {
                    return M;
                  },
                  setVisibility: function (t) {
                    $.isVisible !== t &&
                      (($.isVisible = t), $.scheduleRender());
                  },
                  makeTargetAnimatable: function (t, e) {
                    return void 0 === e && (e = !0), a($, t, h, e);
                  },
                  addValue: function (t, e) {
                    $.hasValue(t) && $.removeValue(t),
                      N.set(t, e),
                      (M[t] = e.get()),
                      (function (t, e) {
                        var n = e.onChange(function (e) {
                            (M[t] = e), h.onUpdate && wn.ZP.update(Y, !1, !0);
                          }),
                          r = e.onRenderRequest($.scheduleRender);
                        B.set(t, function () {
                          n(), r();
                        });
                      })(t, e);
                  },
                  removeValue: function (t) {
                    var e;
                    N.delete(t),
                      null === (e = B.get(t)) || void 0 === e || e(),
                      B.delete(t),
                      delete M[t],
                      d(t, O);
                  },
                  hasValue: function (t) {
                    return N.has(t);
                  },
                  getValue: function (t, e) {
                    var n = N.get(t);
                    return (
                      void 0 === n &&
                        void 0 !== e &&
                        ((n = ur(e)), $.addValue(t, n)),
                      n
                    );
                  },
                  forEachValue: function (t) {
                    return N.forEach(t);
                  },
                  readValue: function (t) {
                    var n;
                    return null !== (n = M[t]) && void 0 !== n ? n : c(E, t, e);
                  },
                  setBaseTarget: function (t, e) {
                    U[t] = e;
                  },
                  getBaseTarget: function (t) {
                    if (o) {
                      var e = o(h, t);
                      if (void 0 !== e && !F(e)) return e;
                    }
                    return U[t];
                  },
                },
                R
              ),
              {
                build: function () {
                  return z(), O;
                },
                scheduleRender: function () {
                  wn.ZP.render(H, !1, !0);
                },
                syncRender: H,
                setProps: function (t) {
                  (h = t),
                    R.updatePropListeners(t),
                    (_ = (function (t, e, n) {
                      var r;
                      for (var i in e) {
                        var o = e[i],
                          a = n[i];
                        if (F(o)) t.addValue(i, o);
                        else if (F(a)) t.addValue(i, ur(o));
                        else if (a !== o)
                          if (t.hasValue(i)) {
                            var u = t.getValue(i);
                            !u.hasAnimated && u.set(o);
                          } else
                            t.addValue(
                              i,
                              ur(
                                null !== (r = t.getStaticValue(i)) &&
                                  void 0 !== r
                                  ? r
                                  : o
                              )
                            );
                      }
                      for (var i in n) void 0 === e[i] && t.removeValue(i);
                      return e;
                    })($, p(h), _));
                },
                getProps: function () {
                  return h;
                },
                getVariant: function (t) {
                  var e;
                  return null === (e = h.variants) || void 0 === e
                    ? void 0
                    : e[t];
                },
                getDefaultTransition: function () {
                  return h.transition;
                },
                getVariantContext: function (t) {
                  if ((void 0 === t && (t = !1), t))
                    return null === m || void 0 === m
                      ? void 0
                      : m.getVariantContext();
                  if (!K) {
                    var e =
                      (null === m || void 0 === m
                        ? void 0
                        : m.getVariantContext()) || {};
                    return void 0 !== h.initial && (e.initial = h.initial), e;
                  }
                  for (var n = {}, r = 0; r < to; r++) {
                    var i = Qi[r],
                      o = h[i];
                    (b(o) || !1 === o) && (n[i] = o);
                  }
                  return n;
                },
                enableLayoutProjection: function () {
                  (L.isEnabled = !0), $.layoutTree.add($);
                },
                lockProjectionTarget: function () {
                  L.isTargetLocked = !0;
                },
                unlockProjectionTarget: function () {
                  $.stopLayoutAnimation(), (L.isTargetLocked = !1);
                },
                getLayoutState: function () {
                  return I;
                },
                setCrossfader: function (t) {
                  C = t;
                },
                isProjectionReady: function () {
                  return L.isEnabled && L.isHydrated && I.isHydrated;
                },
                startLayoutAnimation: function (t, e, n) {
                  void 0 === n && (n = !1);
                  var r = $.getProjectionAnimationProgress()[t],
                    i = n ? L.relativeTarget[t] : L.target[t],
                    o = i.min,
                    a = i.max - o;
                  return (
                    r.clearListeners(),
                    r.set(o),
                    r.set(o),
                    r.onChange(function (e) {
                      $.setProjectionTargetAxis(t, e, e + a, n);
                    }),
                    $.animateMotionValue(t, r, 0, e)
                  );
                },
                stopLayoutAnimation: function () {
                  _r(function (t) {
                    return $.getProjectionAnimationProgress()[t].stop();
                  });
                },
                measureViewportBox: function (t) {
                  void 0 === t && (t = !0);
                  var n = u(E, e);
                  return t || mi(n, M), n;
                },
                getProjectionAnimationProgress: function () {
                  return S || (S = { x: ur(0), y: ur(0) }), S;
                },
                setProjectionTargetAxis: function (t, e, n, r) {
                  var i;
                  void 0 === r && (r = !1),
                    r
                      ? (L.relativeTarget || (L.relativeTarget = (0, Br.VZ)()),
                        (i = L.relativeTarget[t]))
                      : ((L.relativeTarget = void 0), (i = L.target[t])),
                    (L.isHydrated = !0),
                    (i.min = e),
                    (i.max = n),
                    (j = !0),
                    R.notifySetAxisTarget();
                },
                rebaseProjectionTarget: function (t, e) {
                  void 0 === e && (e = I.layout);
                  var n = $.getProjectionAnimationProgress(),
                    r = n.x,
                    i = n.y,
                    o =
                      !L.relativeTarget &&
                      !L.isTargetLocked &&
                      !r.isAnimating() &&
                      !i.isAnimating();
                  (t || o) &&
                    _r(function (t) {
                      var n = e[t],
                        r = n.min,
                        i = n.max;
                      $.setProjectionTargetAxis(t, r, i);
                    });
                },
                notifyLayoutReady: function (t) {
                  !(function (t) {
                    var e = t.getProjectionParent();
                    if (e) {
                      var n = ei(
                        e.getLayoutState().layout,
                        t.getLayoutState().layout
                      );
                      _r(function (e) {
                        t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0);
                      });
                    } else t.rebaseProjectionTarget();
                  })($),
                    $.notifyLayoutUpdate(
                      I.layout,
                      $.prevViewportBox || I.layout,
                      t
                    );
                },
                resetTransform: function () {
                  return l($, E, h);
                },
                restoreTransform: function () {
                  return f(E, O);
                },
                updateLayoutProjection: function () {
                  if ($.isProjectionReady()) {
                    var t = I.delta,
                      e = I.treeScale,
                      n = e.x,
                      r = e.y,
                      i = I.deltaTransform;
                    Wi(I, V, $.path, M),
                      j && $.notifyViewportBoxUpdate(V.target, t),
                      (j = !1);
                    var o = Hi(t, e);
                    (o === i && n === e.x && r === e.y) || $.scheduleRender(),
                      (I.deltaTransform = o);
                  }
                },
                updateTreeLayoutProjection: function () {
                  $.layoutTree.forEach(qi), wn.ZP.preRender(Z, !1, !0);
                },
                getProjectionParent: function () {
                  if (void 0 === w) {
                    for (var t = !1, e = $.path.length - 1; e >= 0; e--) {
                      var n = $.path[e];
                      if (n.projection.isEnabled) {
                        t = n;
                        break;
                      }
                    }
                    w = t;
                  }
                  return w;
                },
                resolveRelativeTargetBox: function () {
                  var t = $.getProjectionParent();
                  if (
                    L.relativeTarget &&
                    t &&
                    ((function (t, e) {
                      Jr(t.target.x, t.relativeTarget.x, e.target.x),
                        Jr(t.target.y, t.relativeTarget.y, e.target.y);
                    })(L, t.projection),
                    ri(t))
                  ) {
                    var e = L.target;
                    di(e, e, t.getLatestValues());
                  }
                },
                shouldResetTransform: function () {
                  return Boolean(h._layoutResetTransform);
                },
                pointTo: function (t) {
                  (V = t.projection),
                    (D = t.getLatestValues()),
                    null === A || void 0 === A || A(),
                    (A = fe(
                      t.onSetAxisTarget($.scheduleUpdateLayoutProjection),
                      t.onLayoutAnimationComplete(function () {
                        var t;
                        $.isPresent
                          ? ($.presence = wi.z.Present)
                          : null === (t = $.layoutSafeToRemove) ||
                            void 0 === t ||
                            t.call($);
                      })
                    ));
                },
                isPresent: !0,
                presence: wi.z.Entering,
              }
            );
          return $;
        };
      };
      function qi(t) {
        t.resolveRelativeTargetBox();
      }
      function $i(t) {
        t.updateLayoutProjection();
      }
      var Ji,
        Qi = (0, r.ev)(["initial"], (0, r.CR)(br)),
        to = Qi.length,
        eo = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        no = function (t) {
          return eo.has(t);
        },
        ro = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        io = function (t) {
          return t === rt || t === Q;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Ji || (Ji = {}));
      var oo = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        ao = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return oo(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? oo(a[1], t) : 0;
          };
        },
        uo = new Set(["x", "y", "z"]),
        so = V.filter(function (t) {
          return !uo.has(t);
        });
      var co = {
          width: function (t) {
            var e = t.x;
            return e.max - e.min;
          },
          height: function (t) {
            var e = t.y;
            return e.max - e.min;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: ao(4, 13),
          y: ao(5, 14),
        },
        lo = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(e).filter(no),
            a = [],
            u = !1,
            s = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var c,
                  l = n[r],
                  f = e[r],
                  d = lr(l);
                if (Dt(f))
                  for (var v = f.length, p = null === f[0] ? 1 : 0; p < v; p++)
                    c ? lr(f[p]) : (c = lr(f[p])) === d || (io(d) && io(c));
                else c = lr(f);
                if (d !== c)
                  if (io(d) && io(c)) {
                    var m = o.get();
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof f
                        ? (e[r] = parseFloat(f))
                        : Array.isArray(f) &&
                          c === Q &&
                          (e[r] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === c || void 0 === c ? void 0 : c.transform) &&
                    (0 === l || 0 === f)
                      ? 0 === l
                        ? o.set(c.transform(l))
                        : (e[r] = d.transform(f))
                      : (u ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              so.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (u = !0)),
                        s.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        ro(o, f));
              }
            }),
            s.length)
          ) {
            var c = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                u = {
                  top: o.top,
                  left: o.left,
                  bottom: o.bottom,
                  right: o.right,
                  transform: o.transform,
                };
              "none" === a && e.setStaticValue("display", t.display || "block"),
                e.syncRender();
              var s = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var i = e.getValue(n);
                  ro(i, co[n](r, u)), (t[n] = co[n](s, o));
                }),
                t
              );
            })(e, t, s);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.syncRender(),
              { target: c, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function fo(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(no);
        })(e)
          ? lo(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var vo = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance();
          if (!(a instanceof HTMLElement))
            return { target: o, transitionEnd: n };
          for (var u in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Pi(e)) {
              var n = Ai(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var s = o[u];
            if (Pi(s)) {
              var c = Ai(s, a);
              c &&
                ((o[u] = c),
                n && ((null !== (i = n[u]) && void 0 !== i) || (n[u] = s)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return fo(t, (e = o.target), n, (i = o.transitionEnd));
      };
      var po = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (j(e)) {
              var n = Gn(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return (H(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Zr(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues;
            void 0 === i && (i = !0);
            var a = e.transition,
              u = e.transitionEnd,
              s = (0, r._T)(e, ["transition", "transitionEnd"]),
              c = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = mr(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(s, a || {}, t);
            if ((o && (u && (u = o(u)), s && (s = o(s)), c && (c = o(c))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  u = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  s = u.length;
                if (s)
                  for (var c = 0; c < s; c++) {
                    var l = u[c],
                      f = e[l],
                      d = null;
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d =
                          null !==
                            (i =
                              null !== (r = n[l]) && void 0 !== r
                                ? r
                                : t.readValue(l)) && void 0 !== i
                            ? i
                            : e[l]),
                      void 0 !== d &&
                        null !== d &&
                        ("string" === typeof d && /^\-?\d*\.?\d+$/.test(d)
                          ? (d = parseFloat(d))
                          : !dr(d) && Ze.test(f) && (d = Kn(l, f)),
                        t.addValue(l, ur(d)),
                        (null !== (o = (a = n)[l]) && void 0 !== o) ||
                          (a[l] = d),
                        t.setBaseTarget(l, d));
                  }
              })(t, s, c);
              var l = vo(t, s, c, u);
              (u = l.transitionEnd), (s = l.target);
            }
            return (0, r.pi)({ transition: a, transitionEnd: u }, s);
          },
          scrapeMotionValuesFromProps: Ot,
          build: function (t, e, n, r, i, o, a) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden");
            var u = r.isEnabled && i.isHydrated;
            st(
              e,
              n,
              r,
              i,
              o,
              a.transformTemplate,
              u ? Hi : void 0,
              u ? zi : void 0
            );
          },
          render: St,
        },
        mo = Ki(po),
        ho = Ki(
          (0, r.pi)((0, r.pi)({}, po), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return j(e)
                ? (null === (n = Gn(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = kt.has(e) ? e : Ct(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Rt,
            build: function (t, e, n, r, i, o, a) {
              var u = r.isEnabled && i.isHydrated;
              Et(
                e,
                n,
                r,
                i,
                o,
                a.transformTemplate,
                u ? Hi : void 0,
                u ? zi : void 0
              );
            },
            render: Mt,
          })
        ),
        go = function (t, e) {
          return O(t)
            ? ho(e, { enableHardwareAcceleration: !1 })
            : mo(e, { enableHardwareAcceleration: !0 });
        },
        yo = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, Cr), ve), Ei), _i),
        xo = k(function (t, e) {
          return (function (t, e, n, i) {
            var o = e.forwardMotionProps,
              a = void 0 !== o && o,
              u = O(t) ? _t : Ut;
            return (0,
            r.pi)((0, r.pi)({}, u), { preloadedFeatures: n, useRender: Tt(a), createVisualElement: i, Component: t });
          })(t, e, yo, go);
        });
    },
    2971: function (t, e, n) {
      "use strict";
      n.d(e, {
        kv: function () {
          return u;
        },
        e3: function () {
          return s;
        },
        x7: function () {
          return l;
        },
        de: function () {
          return c;
        },
      });
      var r = n(3031),
        i = n(5275),
        o = n(3813);
      function a(t) {
        return t.projection.isEnabled || t.shouldResetTransform();
      }
      function u(t, e) {
        void 0 === e && (e = []);
        var n = t.parent;
        return n && u(n, e), a(t) && e.push(t), e;
      }
      function s(t) {
        var e = [],
          n = function (t) {
            a(t) && e.push(t), t.children.forEach(n);
          };
        return t.children.forEach(n), e.sort(o._);
      }
      function c(t) {
        if (!t.shouldResetTransform()) {
          var e = t.getLayoutState();
          t.notifyBeforeLayoutMeasure(e.layout),
            (e.isHydrated = !0),
            (e.layout = t.measureViewportBox()),
            (e.layoutCorrected = (0, i.nP)(e.layout)),
            t.notifyLayoutMeasure(e.layout, t.prevViewportBox || e.layout),
            r.ZP.update(function () {
              return t.rebaseProjectionTarget();
            });
        }
      }
      function l(t) {
        t.shouldResetTransform() ||
          ((t.prevViewportBox = t.measureViewportBox(!1)),
          t.rebaseProjectionTarget(!1, t.prevViewportBox));
      }
    },
    1148: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
        R: function () {
          return a;
        },
      });
      var r = new Set();
      function i(t, e, n) {
        t[n] || (t[n] = []), t[n].push(e);
      }
      function o(t) {
        return (
          r.add(t),
          function () {
            return r.delete(t);
          }
        );
      }
      function a() {
        if (r.size) {
          var t = 0,
            e = [[]],
            n = [],
            o = function (n) {
              return i(e, n, t);
            },
            a = function (e) {
              i(n, e, t), t++;
            };
          r.forEach(function (e) {
            e(o, a), (t = 0);
          }),
            r.clear();
          for (var s = n.length, c = 0; c <= s; c++)
            e[c] && e[c].forEach(u), n[c] && n[c].forEach(u);
        }
      }
      var u = function (t) {
        return t();
      };
    },
    3813: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      var r = function (t, e) {
        return t.depth - e.depth;
      };
    },
    5275: function (t, e, n) {
      "use strict";
      n.d(e, {
        VZ: function () {
          return s;
        },
        _6: function () {
          return a;
        },
        RX: function () {
          return o;
        },
        nP: function () {
          return c;
        },
        pY: function () {
          return f;
        },
        dV: function () {
          return u;
        },
      });
      var r = n(9312);
      function i(t) {
        return t;
      }
      function o(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function a(t) {
        var e = t.x,
          n = t.y;
        return { top: n.min, bottom: n.max, left: e.min, right: e.max };
      }
      function u(t, e) {
        var n = t.top,
          r = t.left,
          o = t.bottom,
          a = t.right;
        void 0 === e && (e = i);
        var u = e({ x: r, y: n }),
          s = e({ x: a, y: o });
        return { top: u.y, left: u.x, bottom: s.y, right: s.x };
      }
      function s() {
        return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
      }
      function c(t) {
        return { x: (0, r.pi)({}, t.x), y: (0, r.pi)({}, t.y) };
      }
      var l = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function f() {
        return { x: (0, r.pi)({}, l), y: (0, r.pi)({}, l) };
      }
    },
    5113: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(7378);
      function i(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    3463: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(7378);
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    3031: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return v;
        },
        ZP: function () {
          return x;
        },
        iW: function () {
          return p;
        },
        $B: function () {
          return y;
        },
      });
      var r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        o =
          "undefined" !== typeof window
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                return setTimeout(function () {
                  return t(i());
                }, r);
              };
      var a = !0,
        u = !1,
        s = !1,
        c = { delta: 0, timestamp: 0 },
        l = ["read", "update", "preRender", "render", "postRender"],
        f = l.reduce(function (t, e) {
          return (
            (t[e] = (function (t) {
              var e = [],
                n = [],
                r = 0,
                i = !1,
                o = new WeakSet(),
                a = {
                  schedule: function (t, a, u) {
                    void 0 === a && (a = !1), void 0 === u && (u = !1);
                    var s = u && i,
                      c = s ? e : n;
                    return (
                      a && o.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), s && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: function (t) {
                    var e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), o.delete(t);
                  },
                  process: function (u) {
                    var s;
                    if (
                      ((i = !0),
                      (e = (s = [n, e])[0]),
                      ((n = s[1]).length = 0),
                      (r = e.length))
                    )
                      for (var c = 0; c < r; c++) {
                        var l = e[c];
                        l(u), o.has(l) && (a.schedule(l), t());
                      }
                    i = !1;
                  },
                };
              return a;
            })(function () {
              return (u = !0);
            })),
            t
          );
        }, {}),
        d = l.reduce(function (t, e) {
          var n = f[e];
          return (
            (t[e] = function (t, e, r) {
              return (
                void 0 === e && (e = !1),
                void 0 === r && (r = !1),
                u || g(),
                n.schedule(t, e, r)
              );
            }),
            t
          );
        }, {}),
        v = l.reduce(function (t, e) {
          return (t[e] = f[e].cancel), t;
        }, {}),
        p = l.reduce(function (t, e) {
          return (
            (t[e] = function () {
              return f[e].process(c);
            }),
            t
          );
        }, {}),
        m = function (t) {
          return f[t].process(c);
        },
        h = function (t) {
          (u = !1),
            (c.delta = a ? r : Math.max(Math.min(t - c.timestamp, 40), 1)),
            (c.timestamp = t),
            (s = !0),
            l.forEach(m),
            (s = !1),
            u && ((a = !1), o(h));
        },
        g = function () {
          (u = !0), (a = !0), s || o(h);
        },
        y = function () {
          return c;
        },
        x = d;
    },
    4618: function (t, e, n) {
      "use strict";
      var r = n(3823);
      e.default = void 0;
      var i,
        o = (i = n(7378)) && i.__esModule ? i : { default: i },
        a = n(5732),
        u = n(9826),
        s = n(8780);
      var c = {};
      function l(t, e, n, r) {
        if (t && a.isLocalURL(e)) {
          t.prefetch(e, n, r).catch(function (t) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
          c[e + "%" + n + (i ? "%" + i : "")] = !0;
        }
      }
      var f = function (t) {
        var e,
          n = !1 !== t.prefetch,
          i = u.useRouter(),
          f = o.default.useMemo(
            function () {
              var e = a.resolveHref(i, t.href, !0),
                n = r(e, 2),
                o = n[0],
                u = n[1];
              return { href: o, as: t.as ? a.resolveHref(i, t.as) : u || o };
            },
            [i, t.href, t.as]
          ),
          d = f.href,
          v = f.as,
          p = t.children,
          m = t.replace,
          h = t.shallow,
          g = t.scroll,
          y = t.locale;
        "string" === typeof p && (p = o.default.createElement("a", null, p));
        var x =
            (e = o.default.Children.only(p)) && "object" === typeof e && e.ref,
          b = s.useIntersection({ rootMargin: "200px" }),
          E = r(b, 2),
          w = E[0],
          P = E[1],
          T = o.default.useCallback(
            function (t) {
              w(t),
                x &&
                  ("function" === typeof x
                    ? x(t)
                    : "object" === typeof x && (x.current = t));
            },
            [x, w]
          );
        o.default.useEffect(
          function () {
            var t = P && n && a.isLocalURL(d),
              e = "undefined" !== typeof y ? y : i && i.locale,
              r = c[d + "%" + v + (e ? "%" + e : "")];
            t && !r && l(i, d, v, { locale: e });
          },
          [v, d, P, y, n, i]
        );
        var A = {
          ref: T,
          onClick: function (t) {
            e.props &&
              "function" === typeof e.props.onClick &&
              e.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, n, r, i, o, u, s) {
                  ("A" !== t.currentTarget.nodeName ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      a.isLocalURL(n))) &&
                    (t.preventDefault(),
                    null == u && r.indexOf("#") >= 0 && (u = !1),
                    e[i ? "replace" : "push"](n, r, {
                      shallow: o,
                      locale: s,
                      scroll: u,
                    }));
                })(t, i, d, v, m, h, g, y);
          },
          onMouseEnter: function (t) {
            a.isLocalURL(d) &&
              (e.props &&
                "function" === typeof e.props.onMouseEnter &&
                e.props.onMouseEnter(t),
              l(i, d, v, { priority: !0 }));
          },
        };
        if (t.passHref || ("a" === e.type && !("href" in e.props))) {
          var C = "undefined" !== typeof y ? y : i && i.locale,
            S =
              i &&
              i.isLocaleDomain &&
              a.getDomainLocale(v, C, i && i.locales, i && i.domainLocales);
          A.href = S || a.addBasePath(a.addLocale(v, C, i && i.defaultLocale));
        }
        return o.default.cloneElement(e, A);
      };
      e.default = f;
    },
    8780: function (t, e, n) {
      "use strict";
      var r = n(3823);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootMargin,
            n = t.disabled || !a,
            s = i.useRef(),
            c = i.useState(!1),
            l = r(c, 2),
            f = l[0],
            d = l[1],
            v = i.useCallback(
              function (t) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                    f ||
                    (t &&
                      t.tagName &&
                      (s.current = (function (t, e, n) {
                        var r = (function (t) {
                            var e = t.rootMargin || "",
                              n = u.get(e);
                            if (n) return n;
                            var r = new Map(),
                              i = new IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                  var e = r.get(t.target),
                                    n =
                                      t.isIntersecting ||
                                      t.intersectionRatio > 0;
                                  e && n && e(n);
                                });
                              }, t);
                            return (
                              u.set(
                                e,
                                (n = { id: e, observer: i, elements: r })
                              ),
                              n
                            );
                          })(n),
                          i = r.id,
                          o = r.observer,
                          a = r.elements;
                        return (
                          a.set(t, e),
                          o.observe(t),
                          function () {
                            a.delete(t),
                              o.unobserve(t),
                              0 === a.size && (o.disconnect(), u.delete(i));
                          }
                        );
                      })(
                        t,
                        function (t) {
                          return t && d(t);
                        },
                        { rootMargin: e }
                      )));
              },
              [n, e, f]
            );
          return (
            i.useEffect(
              function () {
                if (!a && !f) {
                  var t = o.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(t);
                  };
                }
              },
              [f]
            ),
            [v, f]
          );
        });
      var i = n(7378),
        o = n(6277),
        a = "undefined" !== typeof IntersectionObserver;
      var u = new Map();
    },
    9894: function (t, e, n) {
      t.exports = n(4618);
    },
    5898: function (t, e, n) {
      "use strict";
      n.d(e, {
        w_: function () {
          return c;
        },
      });
      var r = n(7378),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = r.createContext && r.createContext(i),
        a = function () {
          return (a =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        u = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        };
      function s(t) {
        return (
          t &&
          t.map(function (t, e) {
            return r.createElement(t.tag, a({ key: e }, t.attr), s(t.child));
          })
        );
      }
      function c(t) {
        return function (e) {
          return r.createElement(l, a({ attr: a({}, t.attr) }, e), s(t.child));
        };
      }
      function l(t) {
        var e = function (e) {
          var n,
            i = t.attr,
            o = t.size,
            s = t.title,
            c = u(t, ["attr", "size", "title"]),
            l = o || e.size || "1em";
          return (
            e.className && (n = e.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                i,
                c,
                {
                  className: n,
                  style: a(a({ color: t.color || e.color }, e.style), t.style),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && r.createElement("title", null, s),
              t.children
            )
          );
        };
        return void 0 !== o
          ? r.createElement(o.Consumer, null, function (t) {
              return e(t);
            })
          : e(i);
      }
    },
    9312: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZT: function () {
          return i;
        },
        pi: function () {
          return o;
        },
        _T: function () {
          return a;
        },
        mG: function () {
          return u;
        },
        Jh: function () {
          return s;
        },
        CR: function () {
          return c;
        },
        fl: function () {
          return l;
        },
        ev: function () {
          return f;
        },
      });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function u(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              s(r.next(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            try {
              s(r.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function s(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, u);
          }
          s((r = r.apply(t, e || [])).next());
        });
      }
      function s(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (u) {
                  (o = [6, u]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      }
      Object.create;
      function c(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function l() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(c(arguments[e]));
        return t;
      }
      function f(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
  },
]);
