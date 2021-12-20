(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    825: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return c;
        },
      });
      var n = t(1717),
        a = t(3049),
        i = t(4246);
      function o(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? o(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function c(e) {
        var r = e.props,
          t = e.label,
          n = e.onClick,
          o = e.isDisabled,
          c = e.isLoading;
        return (0, i.jsx)(
          a.z,
          s(
            s(
              {
                isDisabled: o,
                onClick: n,
                bg: "brand.greenRYB",
                textColor: "brand.cultured",
                _hover: {
                  bg: "brand.teaGreen",
                  textColor: "brand.blueCrayola",
                },
                boxShadow: "0 0 10px #3D7BFA",
                isLoading: c,
              },
              r
            ),
            {},
            { children: t }
          )
        );
      }
    },
    5612: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return x;
        },
      });
      var n = t(2429),
        a = t(5774),
        i = t(5623),
        o = t(4246);
      function s() {
        return (0, o.jsx)(a.M, {
          bg: "brand.teaGreen",
          py: "1rem",
          children: (0, o.jsx)(i.x, {
            fontFamily: "Nunito",
            fontWeight: "500",
            textColor: "brand.sonicSilver",
            textAlign: "center",
            children: "Copyright \xa9 2021 RaiD",
          }),
        });
      }
      var c = t(1717),
        l = t(7830),
        u = t(5075),
        d = t(9894),
        f = t(8539);
      function p(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                (0, c.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function b(e) {
        var r = e.text,
          t = e.props,
          n = e.uri;
        return (0, o.jsx)(d.default, {
          href: n,
          passHref: !0,
          children: (0, o.jsx)("a", {
            children: (0, o.jsx)(
              i.x,
              m(
                m(
                  {
                    mx: "2rem",
                    cursor: "pointer",
                    _hover: { textColor: "brand.maximumBlue" },
                  },
                  t
                ),
                {},
                { children: r }
              )
            ),
          }),
        });
      }
      function h(e) {
        var r = e.props;
        return (0, o.jsx)(
          l.xu,
          m(
            m({}, r),
            {},
            {
              children: (0, o.jsx)(u.UQ, {
                allowToggle: !0,
                children: (0, o.jsxs)(u.Qd, {
                  borderBottom: "0",
                  borderTopColor: "brand.raisinBlack",
                  children: [
                    (0, o.jsxs)(n.k, {
                      h: { base: "5rem", sm: "7rem" },
                      px: {
                        base: "1rem",
                        md: "2rem",
                        lg: "4rem",
                        xl: "7.5rem",
                      },
                      justify: "space-between",
                      align: "center",
                      children: [
                        (0, o.jsx)(i.x, {
                          textColor: "white",
                          fontWeight: "600",
                          fontSize: "1.7rem",
                          align: "center",
                          cursor: "pointer",
                          _hover: { textColor: "brand.maximumBlue" },
                          bg: "brand.spaceCadet",
                          px: "1rem",
                          py: "0.5rem",
                          borderRadius: "1rem",
                          onClick: function () {
                            return (
                              (e = "/"),
                              void (
                                window.location.pathname !== e &&
                                (window.location.href = e)
                              )
                            );
                            var e;
                          },
                          children: "RaiD",
                        }),
                        (0, o.jsxs)(n.k, {
                          align: "center",
                          fontWeight: "400",
                          fontSize: "1.1rem",
                          display: { base: "none", md: "flex" },
                          children: [
                            (0, o.jsx)(b, { text: "Help", uri: "/help" }),
                            (0, o.jsx)(b, {
                              text: "Contact Us",
                              uri: "mailto:vibenjamin6@gmail.com",
                            }),
                          ],
                        }),
                        (0, o.jsx)(l.xu, {
                          transition: "background-color 500ms linear",
                          bg: "brand.jet",
                          borderRadius: "10",
                          _hover: { bg: "none" },
                          cursor: "pointer",
                          display: { base: "block", md: "none" },
                          children: (0, o.jsx)(u.KF, {
                            p: "1",
                            children: (0, o.jsx)(f.fdF, { size: "40" }),
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)(u.Hk, {
                      pb: 4,
                      display: { base: "block", md: "none" },
                      children: [
                        (0, o.jsx)(b, {
                          text: "Help",
                          uri: "/help",
                          props: { my: "0.5rem" },
                        }),
                        (0, o.jsx)(b, {
                          text: "Contact Us",
                          uri: "mailto:vibenjamin6@gmail.com?suject=RaidHelp Needed",
                          props: { my: "0.5rem" },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }
          )
        );
      }
      function x(e) {
        var r = e.children,
          t = e.headerProps;
        return (0, o.jsxs)(n.k, {
          bg: "brand.raisinBlack",
          height: "100%",
          minH: "100vh",
          textColor: "brand.cultured",
          fontFamily: "Nunito",
          flexDir: "column",
          children: [(0, o.jsx)(h, { props: t }), r, (0, o.jsx)(s, {})],
        });
      }
    },
    5951: function (e, r, t) {
      "use strict";
      var n = t(1717),
        a = t(8566),
        i = t(2416),
        o = t(7830),
        s = t(5623),
        c = t(3675),
        l = t(4368),
        u = t(5984),
        d = t(4566),
        f = t(4246);
      function p(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
        var r = e.label,
          t = e.LeftIcon,
          n = e.isPassword,
          p = e.type,
          b = e.onChange,
          h = e.isInvalid,
          x = e.invalidText,
          v = (e.placeholder, e.value),
          y = (0, i.k)(),
          g = (0, a.Z)(y, 2),
          j = g[0],
          k = g[1];
        return (0, f.jsxs)(o.xu, {
          mb: { lg: "0.5rem", xl: "1rem" },
          children: [
            (0, f.jsx)(s.x, { mb: "0.5rem", children: r }),
            (0, f.jsxs)(c.B, {
              children: [
                t &&
                  (0, f.jsx)(l.Ui, {
                    bg: "brand.spaceCadet",
                    children: (0, f.jsx)(t, { size: 24 }),
                  }),
                (0, f.jsx)(
                  u.I,
                  m(
                    m({}, v && { value: v }),
                    {},
                    {
                      type: n && !j ? "password" : p,
                      onChange: b,
                      isInvalid: h,
                    }
                  )
                ),
                n &&
                  (0, f.jsxs)(l.xW, {
                    bg: "brand.spaceCadet",
                    children: [
                      j &&
                        (0, f.jsx)(o.xu, {
                          onClick: k.off,
                          children: (0, f.jsx)(d.t2l, { size: 24 }),
                        }),
                      !j &&
                        (0, f.jsx)(o.xu, {
                          onClick: k.on,
                          children: (0, f.jsx)(d.wqE, { size: 24 }),
                        }),
                    ],
                  }),
              ],
            }),
            h &&
              (0, f.jsx)(s.x, {
                color: "red.500",
                fontSize: "sm",
                isTruncated: !0,
                maxW: "460px",
                children: x,
              }),
          ],
        });
      };
    },
    535: function (e, r, t) {
      "use strict";
      t.d(r, {
        o: function () {
          return d;
        },
      });
      var n = t(6772),
        a = t(2414),
        i = t(5944),
        o = t(7511),
        s = t(6933),
        c = t(8264),
        l = t(1717);
      function u(e) {
        var r = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            n = (0, s.Z)(e);
          if (r) {
            var a = (0, s.Z)(this).constructor;
            t = Reflect.construct(n, arguments, a);
          } else t = n.apply(this, arguments);
          return (0, o.Z)(this, t);
        };
      }
      var d = (function (e) {
        (0, i.Z)(t, e);
        var r = u(t);
        function t(e) {
          var i,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return (
            (0, n.Z)(this, t),
            (i = r.call(this)),
            (0, l.Z)((0, a.Z)(i), "status", void 0),
            (0, l.Z)((0, a.Z)(i), "statusText", ""),
            (0, l.Z)((0, a.Z)(i), "message", void 0),
            (i.name = "HTTP Error"),
            (i.status = o),
            (i.statusText = s),
            (i.message = e),
            Object.setPrototypeOf((0, a.Z)(i), t.prototype),
            i
          );
        }
        return t;
      })((0, c.Z)(Error));
    },
    8486: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return ue;
          },
        });
      var n = t(6677),
        a = t(7378),
        i = t(2429),
        o = t(5612),
        s = t(6952),
        c = t(1717),
        l = t(8566),
        u = t(8742),
        d = t.n(u),
        f = t(2416),
        p = t(3928),
        m = t(9957),
        b = t(7830),
        h = t(5623),
        x = t(6563),
        v = t(3768),
        y = t(6254),
        g = t(4160),
        j = t(9798),
        k = t(1330),
        O = t(1697),
        w = t(5811),
        P = t(2935),
        C = t(3900);
      t(8315);
      var [E, D] = (0, w.k)({ name: "CheckboxGroupContext", strict: !1 });
      O.Ts;
      var I = t(5124),
        S = t(6452);
      function Z() {
        return (Z =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var B = "custom" in I.E ? I.E.custom(x.m$.svg) : (0, I.E)(x.m$.svg),
        _ = (e) =>
          a.createElement(
            B,
            Z(
              {
                width: "1.2em",
                viewBox: "0 0 12 10",
                variants: {
                  unchecked: { opacity: 0, strokeDashoffset: 16 },
                  checked: {
                    opacity: 1,
                    strokeDashoffset: 0,
                    transition: { duration: 0.2 },
                  },
                },
                style: {
                  fill: "none",
                  strokeWidth: 2,
                  stroke: "currentColor",
                  strokeDasharray: 16,
                },
              },
              e
            ),
            a.createElement("polyline", { points: "1.5 6 4.5 9 10.5 1" })
          ),
        R = (e) =>
          a.createElement(
            B,
            Z(
              {
                width: "1.2em",
                viewBox: "0 0 24 24",
                variants: {
                  unchecked: { scaleX: 0.65, opacity: 0 },
                  checked: {
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      scaleX: { duration: 0 },
                      opacity: { duration: 0.02 },
                    },
                  },
                },
                style: { stroke: "currentColor", strokeWidth: 4 },
              },
              e
            ),
            a.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
          ),
        T = (e) => {
          var { open: r, children: t } = e;
          return a.createElement(
            S.M,
            { initial: !1 },
            r &&
              a.createElement(
                I.E.div,
                {
                  variants: {
                    unchecked: { scale: 0.5 },
                    checked: { scale: 1 },
                  },
                  initial: "unchecked",
                  animate: "checked",
                  exit: "unchecked",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  },
                },
                t
              )
          );
        },
        N = (e) => {
          var { isIndeterminate: r, isChecked: t } = e,
            n = (function (e, r) {
              if (null == e) return {};
              var t,
                n,
                a = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++)
                (t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
              return a;
            })(e, ["isIndeterminate", "isChecked"]),
            i = r ? R : _;
          return a.createElement(T, { open: t || r }, a.createElement(i, n));
        },
        L = t(8820),
        z = t(5102),
        F = t(106),
        W = t(8673);
      function M() {
        return (M =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function A(e) {
        void 0 === e && (e = {});
        var {
            defaultIsChecked: r,
            defaultChecked: t = r,
            isChecked: n,
            isFocusable: i,
            isDisabled: o,
            isReadOnly: s,
            isRequired: c,
            onChange: l,
            isIndeterminate: u,
            isInvalid: d,
            name: p,
            value: m,
            id: b,
            onBlur: h,
            onFocus: x,
            tabIndex: v,
            "aria-label": y,
            "aria-labelledby": g,
            "aria-invalid": O,
            "aria-describedby": w,
          } = e,
          E = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, [
            "defaultIsChecked",
            "defaultChecked",
            "isChecked",
            "isFocusable",
            "isDisabled",
            "isReadOnly",
            "isRequired",
            "onChange",
            "isIndeterminate",
            "isInvalid",
            "name",
            "value",
            "id",
            "onBlur",
            "onFocus",
            "tabIndex",
            "aria-label",
            "aria-labelledby",
            "aria-invalid",
            "aria-describedby",
          ]),
          D = (0, P.W)(l),
          I = (0, P.W)(h),
          S = (0, P.W)(x),
          [Z, B] = (0, f.k)(),
          [_, R] = (0, f.k)(),
          [T, N] = (0, f.k)(),
          A = (0, a.useRef)(null),
          [V, U] = (0, a.useState)(!0),
          [$, q] = (0, a.useState)(!!t),
          [H, K] = (0, C.p)(n, $);
        (0, j.ZK)({
          condition: !!r,
          message:
            'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.',
        });
        var X = (0, a.useCallback)(
          (e) => {
            s || o
              ? e.preventDefault()
              : (H || q(K ? e.target.checked : !!u || e.target.checked),
                null == D || D(e));
          },
          [s, o, K, H, u, D]
        );
        (0, L.G)(() => {
          A.current && (A.current.indeterminate = Boolean(u));
        }, [u]);
        var J = o && !i,
          Q = (0, a.useCallback)(
            (e) => {
              " " === e.key && N.on();
            },
            [N]
          ),
          Y = (0, a.useCallback)(
            (e) => {
              " " === e.key && N.off();
            },
            [N]
          );
        (0, L.G)(() => {
          A.current && A.current.checked !== K && q(A.current.checked);
        }, [A.current]);
        var ee = (0, a.useCallback)(
            function (e, r) {
              void 0 === e && (e = {}), void 0 === r && (r = null);
              return M({}, e, {
                ref: r,
                "data-active": (0, k.PB)(T),
                "data-hover": (0, k.PB)(_),
                "data-checked": (0, k.PB)(K),
                "data-focus": (0, k.PB)(Z),
                "data-indeterminate": (0, k.PB)(u),
                "data-disabled": (0, k.PB)(o),
                "data-invalid": (0, k.PB)(d),
                "data-readonly": (0, k.PB)(s),
                "aria-hidden": !0,
                onMouseDown: (0, j.v0)(e.onMouseDown, (e) => {
                  e.preventDefault(), N.on();
                }),
                onMouseUp: (0, j.v0)(e.onMouseUp, N.off),
                onMouseEnter: (0, j.v0)(e.onMouseEnter, R.on),
                onMouseLeave: (0, j.v0)(e.onMouseLeave, R.off),
              });
            },
            [T, K, o, Z, _, u, d, s, N, R.off, R.on]
          ),
          re = (0, a.useCallback)(
            function (e, r) {
              return (
                void 0 === e && (e = {}),
                void 0 === r && (r = null),
                M({}, E, e, {
                  ref: (0, z.l)(r, (e) => {
                    e && U("LABEL" === e.tagName);
                  }),
                  onClick: (0, j.v0)(e.onClick, () => {
                    var e;
                    V ||
                      (null == (e = A.current) || e.click(),
                      (0, F.T)(A.current, { nextTick: !0 }));
                  }),
                  "data-disabled": (0, k.PB)(o),
                  "data-checked": (0, k.PB)(K),
                  "data-invalid": (0, k.PB)(d),
                })
              );
            },
            [E, o, K, d, V]
          ),
          te = (0, a.useCallback)(
            function (e, r) {
              return (
                void 0 === e && (e = {}),
                void 0 === r && (r = null),
                M({}, e, {
                  ref: (0, z.l)(A, r),
                  type: "checkbox",
                  name: p,
                  value: m,
                  id: b,
                  tabIndex: v,
                  onChange: (0, j.v0)(e.onChange, X),
                  onBlur: (0, j.v0)(e.onBlur, I, B.off),
                  onFocus: (0, j.v0)(e.onFocus, S, B.on),
                  onKeyDown: (0, j.v0)(e.onKeyDown, Q),
                  onKeyUp: (0, j.v0)(e.onKeyUp, Y),
                  required: c,
                  checked: K,
                  disabled: J,
                  readOnly: s,
                  "aria-label": y,
                  "aria-labelledby": g,
                  "aria-invalid": O ? Boolean(O) : d,
                  "aria-describedby": w,
                  "aria-disabled": o,
                  style: W.NL,
                })
              );
            },
            [
              p,
              m,
              b,
              X,
              B.off,
              B.on,
              I,
              S,
              Q,
              Y,
              c,
              K,
              J,
              s,
              y,
              g,
              O,
              d,
              w,
              o,
              v,
            ]
          ),
          ne = (0, a.useCallback)(
            function (e, r) {
              return (
                void 0 === e && (e = {}),
                void 0 === r && (r = null),
                M({}, e, {
                  ref: r,
                  onMouseDown: (0, j.v0)(e.onMouseDown, G),
                  onTouchStart: (0, j.v0)(e.onTouchStart, G),
                  "data-disabled": (0, k.PB)(o),
                  "data-checked": (0, k.PB)(K),
                  "data-invalid": (0, k.PB)(d),
                })
              );
            },
            [K, o, d]
          );
        return {
          state: {
            isInvalid: d,
            isFocused: Z,
            isChecked: K,
            isActive: T,
            isHovered: _,
            isIndeterminate: u,
            isDisabled: o,
            isReadOnly: s,
            isRequired: c,
          },
          getRootProps: re,
          getCheckboxProps: ee,
          getInputProps: te,
          getLabelProps: ne,
          htmlProps: E,
        };
      }
      function G(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function V() {
        return (V =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var U = (0, x.m$)("span", {
          baseStyle: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "top",
            userSelect: "none",
            flexShrink: 0,
          },
        }),
        $ = (0, x.m$)("label", {
          baseStyle: {
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            verticalAlign: "top",
            position: "relative",
            _disabled: { cursor: "not-allowed" },
          },
        }),
        q = (0, v.G)((e, r) => {
          var t = D(),
            n = V({}, t, e),
            i = (0, y.j)("Checkbox", n),
            o = (0, g.Lr)(e),
            {
              spacing: s = "0.5rem",
              className: c,
              children: l,
              iconColor: u,
              iconSize: d,
              icon: f = a.createElement(N, null),
              isChecked: p,
              isDisabled: m = null == t ? void 0 : t.isDisabled,
              onChange: b,
            } = o,
            h = (function (e, r) {
              if (null == e) return {};
              var t,
                n,
                a = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++)
                (t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
              return a;
            })(o, [
              "spacing",
              "className",
              "children",
              "iconColor",
              "iconSize",
              "icon",
              "isChecked",
              "isDisabled",
              "onChange",
            ]),
            v = p;
          null != t && t.value && o.value && (v = t.value.includes(o.value));
          var O = b;
          null != t && t.onChange && o.value && (O = (0, j.PP)(t.onChange, b));
          var {
              state: w,
              getInputProps: P,
              getCheckboxProps: C,
              getLabelProps: E,
              getRootProps: I,
            } = A(V({}, h, { isDisabled: m, isChecked: v, onChange: O })),
            S = a.useMemo(
              () =>
                V(
                  {
                    opacity: w.isChecked || w.isIndeterminate ? 1 : 0,
                    transform:
                      w.isChecked || w.isIndeterminate
                        ? "scale(1)"
                        : "scale(0.95)",
                    fontSize: d,
                    color: u,
                  },
                  i.icon
                ),
              [u, d, w.isChecked, w.isIndeterminate, i.icon]
            ),
            Z = a.cloneElement(f, {
              __css: S,
              isIndeterminate: w.isIndeterminate,
              isChecked: w.isChecked,
            });
          return a.createElement(
            $,
            V(
              {
                __css: i.container,
                className: (0, k.cx)("chakra-checkbox", c),
              },
              I()
            ),
            a.createElement(
              "input",
              V({ className: "chakra-checkbox__input" }, P({}, r))
            ),
            a.createElement(
              U,
              V(
                { __css: i.control, className: "chakra-checkbox__control" },
                C()
              ),
              Z
            ),
            l &&
              a.createElement(
                x.m$.span,
                V({ className: "chakra-checkbox__label" }, E(), {
                  __css: V({ marginStart: s }, i.label),
                }),
                l
              )
          );
        });
      O.Ts && (q.displayName = "Checkbox");
      var H = t(4566),
        K = t(825),
        X = t(4246);
      function J(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Q(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? J(Object(t), !0).forEach(function (r) {
                (0, c.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var Y = function (e) {
          var r = e.label,
            t = e.props,
            n = e.onClick;
          return (0, X.jsx)(
            h.x,
            Q(
              Q(
                {
                  textColor: "brand.blueCrayola",
                  cursor: "pointer",
                  _hover: { textDecoration: "underline" },
                  onClick: n,
                },
                t
              ),
              {},
              { children: r }
            )
          );
        },
        ee = t(5951),
        re = t(7228),
        te = t(535),
        ne = t(4582),
        ae = t(4518);
      function ie(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function oe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ie(Object(t), !0).forEach(function (r) {
                (0, c.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ie(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var se = function () {
          var e = (0, f.k)(),
            r = (0, l.Z)(e, 2),
            t = r[0],
            n = r[1],
            o = (0, f.k)(),
            u = (0, l.Z)(o, 2),
            x = u[0],
            v = u[1],
            y = (0, f.k)(),
            g = (0, l.Z)(y, 2),
            j = g[0],
            k = g[1],
            O = (0, a.useReducer)(
              function (e, r) {
                return oe(oe({}, e), r);
              },
              {
                email: "",
                password: "",
                name: "",
                isValidEmail: !1,
                isValidPassword: !1,
                isValidFullName: !1,
                error: "",
              }
            ),
            w = O[0],
            P = O[1],
            C = (0, ne.LI)(),
            E = function (e) {
              return function (r) {
                P((0, c.Z)({}, e, r.target.value));
              };
            };
          (0, a.useEffect)(
            function () {
              var e;
              P({
                isValidEmail:
                  !w.email ||
                  ((e = w.email),
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(e).toLowerCase()
                  )),
              });
            },
            [w.email]
          ),
            (0, a.useEffect)(
              function () {
                var e;
                P({
                  isValidPassword:
                    !w.password ||
                    ((e = w.password),
                    /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(
                      String(e)
                    )),
                });
              },
              [w.password]
            ),
            (0, a.useEffect)(
              function () {
                var e;
                P({
                  isValidFullName:
                    !w.name ||
                    ((e = w.name), /^[a-zA-Z ]{2,30}$/.test(String(e))),
                });
              },
              [w.name]
            );
          var D = (function () {
            var e = (0, s.Z)(
              d().mark(function e() {
                var r, n, a, i, o, s;
                return d().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (k.on(),
                            P({ error: "" }),
                            (r = { "Content-Type": "application/json" }),
                            (e.prev = 3),
                            w.email)
                          ) {
                            e.next = 6;
                            break;
                          }
                          throw new Error("Please enter an email");
                        case 6:
                          if (w.password) {
                            e.next = 8;
                            break;
                          }
                          throw new Error("Please enter a password");
                        case 8:
                          if (!t) {
                            e.next = 26;
                            break;
                          }
                          return (
                            (n = JSON.stringify({
                              email: w.email,
                              password: w.password,
                            })),
                            (e.next = 12),
                            fetch("/api/sign-in", {
                              body: n,
                              method: "POST",
                              headers: r,
                            })
                          );
                        case 12:
                          if (((a = e.sent), ![400, 500].includes(a.status))) {
                            e.next = 20;
                            break;
                          }
                          return (e.t0 = te.o), (e.next = 17), a.text();
                        case 17:
                          throw (
                            ((e.t1 = e.sent),
                            (e.t2 = a.status),
                            new e.t0(e.t1, e.t2))
                          );
                        case 20:
                          return (e.next = 22), a.json();
                        case 22:
                          C({
                            content: {
                              type: ae.k.success,
                              title: "Successfully logged in \ud83d\ude80",
                              summary: "Welcome back",
                            },
                          }),
                            (window.location.href = "/manage"),
                            (e.next = 43);
                          break;
                        case 26:
                          if (w.name) {
                            e.next = 28;
                            break;
                          }
                          throw new Error("Please enter your full name");
                        case 28:
                          return (
                            (i = JSON.stringify({
                              email: w.email,
                              password: w.password,
                              firstName: w.name.split(" ")[0],
                              lastName: w.name.split(" ")[1],
                            })),
                            (e.next = 31),
                            fetch("/api/register", {
                              body: i,
                              method: "POST",
                              headers: r,
                            })
                          );
                        case 31:
                          if (((o = e.sent), ![400, 500].includes(o.status))) {
                            e.next = 39;
                            break;
                          }
                          return (e.t3 = te.o), (e.next = 36), o.text();
                        case 36:
                          throw (
                            ((e.t4 = e.sent),
                            (e.t5 = o.status),
                            new e.t3(e.t4, e.t5))
                          );
                        case 39:
                          return (e.next = 41), o.json();
                        case 41:
                          C({
                            content: {
                              type: ae.k.success,
                              title: "Successfully registered \ud83d\ude80",
                              summary: "Your RaiD account is ready",
                            },
                          }),
                            (window.location.href = "/manage");
                        case 43:
                          e.next = 55;
                          break;
                        case 45:
                          (e.prev = 45),
                            (e.t6 = e.catch(3)),
                            (s = e.t6.message).includes(
                              "lastName is a required field"
                            ) && (s = "Please enter your last name"),
                            s.includes("user with this email already exists") &&
                              (s = "User with this email already exists"),
                            s.includes("Invalid credentials") &&
                              (s = "Invalid username or password"),
                            s.includes("email is a required field") &&
                              (s = "Email address cannot be left blank"),
                            s.includes(
                              "password must be at least 8 characters"
                            ) &&
                              (s =
                                "password must be at least 8 characters, containg a lowercase letter, an uppercase letter and a symbol"),
                            s.includes("email must be a valid email") &&
                              (s = "Please enter a valid email address"),
                            C({
                              content: {
                                type: ae.k.error,
                                title: "Validation error",
                                summary: s,
                              },
                            });
                        case 55:
                          return (e.prev = 55), k.off(), e.finish(55);
                        case 58:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 45, 55, 58]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, X.jsxs)(p.r, {
            templateColumns: { lg: "repeat(2, 1fr)" },
            gap: "0",
            bg: "brand.spaceCadet",
            borderRadius: { base: "1rem", md: "2rem", lg: "4rem" },
            children: [
              (0, X.jsx)(m.E, {
                src: "/20211107_170648.jpg",
                h: "full",
                borderTopLeftRadius: { base: "1rem", md: "2rem", lg: "4rem" },
                borderBottomLeftRadius: { lg: "4rem" },
                borderTopRightRadius: { base: "1rem", md: "2rem", lg: "0" },
              }),
              (0, X.jsx)(i.k, {
                px: { base: "1rem", md: "2rem", xl: "4rem" },
                py: { base: "1rem", md: "2rem", xl: "4rem" },
                flexDir: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xl: "1.2rem" },
                children: (0, X.jsxs)(b.xu, {
                  minW: { lg: "29.343rem" },
                  children: [
                    (0, X.jsx)(h.x, {
                      fontWeight: "bold",
                      fontSize: { base: "1.5rem", md: "2rem", xl: "3rem" },
                      children: t ? "Welcome back" : "Get started",
                    }),
                    (0, X.jsxs)(b.xu, {
                      my: { base: "0.5rem", xl: "1rem" },
                      children: [
                        (0, X.jsxs)(h.x, {
                          display: "inline",
                          textColor: "brand.coolGrey",
                          children: [
                            t ? "Don't" : "Already",
                            " have an account?",
                            " ",
                          ],
                        }),
                        (0, X.jsx)(Y, {
                          label: t ? "Register" : "Log In",
                          props: { display: "inline" },
                          onClick: n[t ? "off" : "on"],
                        }),
                      ],
                    }),
                    w.error &&
                      (0, X.jsx)(h.x, {
                        color: "red.500",
                        fontSize: "sm",
                        maxW: "460px",
                        children: w.error,
                      }),
                    (0, X.jsxs)(b.xu, {
                      children: [
                        (0, X.jsx)(ee.Z, {
                          label: "Email address",
                          LeftIcon: H.ixJ,
                          onChange: E("email"),
                          isInvalid: !w.isValidEmail,
                          invalidText: "Please enter a valid email address",
                          type: "email",
                        }),
                        !t &&
                          (0, X.jsx)(ee.Z, {
                            label: "Full name",
                            LeftIcon: re.m3W,
                            onChange: E("name"),
                            isInvalid: !w.isValidFullName,
                            invalidText: "Please enter a valid full name",
                            type: "text",
                          }),
                        (0, X.jsx)(ee.Z, {
                          label: "Password",
                          LeftIcon: H.Tmq,
                          isPassword: !0,
                          onChange: E("password"),
                          isInvalid: !w.isValidPassword,
                          invalidText:
                            "Password must be at least 8 characters long, contain at least one number, one uppercase letter and one special character",
                        }),
                        !t &&
                          (0, X.jsx)(b.xu, {
                            children: (0, X.jsx)(q, {
                              mb: "1.5rem",
                              isChecked: x,
                              onChange: function () {
                                return v.toggle();
                              },
                              children: (0, X.jsxs)(b.xu, {
                                fontSize: { xl: "1.2rem" },
                                children: [
                                  (0, X.jsx)(h.x, {
                                    display: "inline",
                                    textColor: "brand.coolGrey",
                                    children: "I agree to Raid's",
                                  }),
                                  (0, X.jsx)(Y, {
                                    label: " Terms of Service",
                                    props: { display: "inline" },
                                  }),
                                  (0, X.jsxs)(h.x, {
                                    display: "inline",
                                    textColor: "brand.coolGrey",
                                    children: [" ", "and"],
                                  }),
                                  (0, X.jsx)(Y, {
                                    label: " Privacy Policy",
                                    props: { display: "inline" },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        (0, X.jsx)(K.Z, {
                          onClick: D,
                          isDisabled: !x && !t,
                          label: t ? "Login" : "Register",
                          props: { width: "100%" },
                          isLoading: j,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ce = function () {
          return (0, X.jsx)(o.Z, {
            children: (0, X.jsx)(i.k, {
              px: {
                base: "1rem",
                sm: "3rem",
                md: "3rem",
                lg: "4rem",
                xl: "7.5rem",
              },
              fontFamily: "Nunito",
              mb: "2rem",
              flexDir: "column",
              height: "100%",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              children: (0, X.jsx)(se, {}),
            }),
          });
        },
        le = t(1966),
        ue = function () {
          var e = (0, n.useRouter)(),
            r = (0, le.kP)().data;
          return (
            (0, a.useEffect)(
              function () {
                r && e && e.push("/manage");
              },
              [e, r]
            ),
            (0, X.jsx)(ce, {})
          );
        };
    },
    4518: function (e, r, t) {
      "use strict";
      var n;
      t.d(r, {
        k: function () {
          return n;
        },
      }),
        (function (e) {
          (e.error = "error"),
            (e.warning = "warning"),
            (e.success = "success"),
            (e.info = "info");
        })(n || (n = {}));
    },
    4423: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(8486);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [794, 997, 969, 552, 230, 774, 888, 179], function () {
      return (r = 4423), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
