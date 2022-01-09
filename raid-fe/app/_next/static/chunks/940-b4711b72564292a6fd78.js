(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [940],
  {
    3049: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return k;
        },
      });
      var n = r(7378);
      function i(t, e) {
        if (null != t)
          if ("function" !== typeof t)
            try {
              t.current = e;
            } catch (r) {
              throw new Error(
                "Cannot assign value '" + e + "' to ref '" + t + "'"
              );
            }
          else t(e);
      }
      function o() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return n.useMemo(
          () =>
            e.every((t) => null == t)
              ? null
              : (t) => {
                  e.forEach((e) => {
                    e && i(e, t);
                  });
                },
          e
        );
      }
      var a = r(3768),
        s = r(6254),
        f = r(4160),
        u = r(6563),
        c = r(5282),
        h = r.n(c),
        d = r(1330),
        l = r(1697),
        p = r(5811);
      function b() {
        return (b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var [m, y] = (0, p.k)({ strict: !1, name: "ButtonGroupContext" }),
        g = (0, a.G)((t, e) => {
          var {
              size: r,
              colorScheme: i,
              variant: o,
              className: a,
              spacing: s = "0.5rem",
              isAttached: f,
              isDisabled: c,
            } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = {},
                o = Object.keys(t);
              for (n = 0; n < o.length; n++)
                (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i;
            })(t, [
              "size",
              "colorScheme",
              "variant",
              "className",
              "spacing",
              "isAttached",
              "isDisabled",
            ]),
            l = (0, d.cx)("chakra-button__group", a),
            p = n.useMemo(
              () => ({ size: r, colorScheme: i, variant: o, isDisabled: c }),
              [r, i, o, c]
            ),
            y = { display: "inline-flex" };
          return (
            (y = b(
              {},
              y,
              f
                ? {
                    "> *:first-of-type:not(:last-of-type)": {
                      borderEndRadius: 0,
                    },
                    "> *:not(:first-of-type):not(:last-of-type)": {
                      borderRadius: 0,
                    },
                    "> *:not(:first-of-type):last-of-type": {
                      borderStartRadius: 0,
                    },
                  }
                : { "& > *:not(style) ~ *:not(style)": { marginStart: s } }
            )),
            n.createElement(
              m,
              { value: p },
              n.createElement(
                u.m$.div,
                b({ ref: e, role: "group", __css: y, className: l }, h)
              )
            )
          );
        });
      l.Ts && (g.displayName = "ButtonGroup");
      var v = r(1532);
      function w() {
        return (w =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var _ = (t) => {
        var {
            label: e,
            placement: r,
            children: i = n.createElement(v.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: o,
            __css: a,
          } = t,
          s = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, [
            "label",
            "placement",
            "spacing",
            "children",
            "className",
            "__css",
          ]),
          f = (0, d.cx)("chakra-button__spinner", o),
          c = "start" === r ? "marginEnd" : "marginStart",
          h = n.useMemo(
            () =>
              w(
                {
                  display: "flex",
                  alignItems: "center",
                  position: e ? "relative" : "absolute",
                  [c]: e ? "0.5rem" : 0,
                  fontSize: "1em",
                  lineHeight: "normal",
                },
                a
              ),
            [a, e, c]
          );
        return n.createElement(
          u.m$.div,
          w({ className: f }, s, { __css: h }),
          i
        );
      };
      function M() {
        return (M =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      l.Ts && (_.displayName = "ButtonSpinner");
      var S = (t) => {
        var { children: e, className: r } = t,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, ["children", "className"]),
          o = n.isValidElement(e)
            ? n.cloneElement(e, { "aria-hidden": !0, focusable: !1 })
            : e,
          a = (0, d.cx)("chakra-button__icon", r);
        return n.createElement(
          u.m$.span,
          M({ display: "inline-flex", alignSelf: "center", flexShrink: 0 }, i, {
            className: a,
          }),
          o
        );
      };
      function E() {
        return (E =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      l.Ts && (S.displayName = "ButtonIcon");
      var k = (0, a.G)((t, e) => {
        var r = y(),
          i = (0, s.m)("Button", E({}, r, t)),
          a = (0, f.Lr)(t),
          {
            isDisabled: c = null == r ? void 0 : r.isDisabled,
            isLoading: l,
            isActive: p,
            isFullWidth: b,
            children: m,
            leftIcon: g,
            rightIcon: v,
            loadingText: w,
            iconSpacing: M = "0.5rem",
            type: S,
            spinner: k,
            spinnerPlacement: x = "start",
            className: I,
            as: O,
          } = a,
          R = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(a, [
            "isDisabled",
            "isLoading",
            "isActive",
            "isFullWidth",
            "children",
            "leftIcon",
            "rightIcon",
            "loadingText",
            "iconSpacing",
            "type",
            "spinner",
            "spinnerPlacement",
            "className",
            "as",
          ]),
          B = n.useMemo(() => {
            var t,
              e = h()(
                {},
                null != (t = null == i ? void 0 : i._focus) ? t : {},
                { zIndex: 1 }
              );
            return E(
              {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none",
                width: b ? "100%" : "auto",
              },
              i,
              !!r && { _focus: e }
            );
          }, [i, r, b]),
          { ref: j, type: P } = (function (t) {
            var [e, r] = n.useState(!t);
            return {
              ref: n.useCallback((t) => {
                t && r("BUTTON" === t.tagName);
              }, []),
              type: e ? "button" : void 0,
            };
          })(O),
          T = { rightIcon: v, leftIcon: g, iconSpacing: M, children: m };
        return n.createElement(
          u.m$.button,
          E(
            {
              disabled: c || l,
              ref: o(e, j),
              as: O,
              type: null != S ? S : P,
              "data-active": (0, d.PB)(p),
              "data-loading": (0, d.PB)(l),
              __css: B,
              className: (0, d.cx)("chakra-button", I),
            },
            R
          ),
          l &&
            "start" === x &&
            n.createElement(
              _,
              {
                className: "chakra-button__spinner--start",
                label: w,
                placement: "start",
              },
              k
            ),
          l
            ? w ||
                n.createElement(
                  u.m$.span,
                  { opacity: 0 },
                  n.createElement(A, T)
                )
            : n.createElement(A, T),
          l &&
            "end" === x &&
            n.createElement(
              _,
              {
                className: "chakra-button__spinner--end",
                label: w,
                placement: "end",
              },
              k
            )
        );
      });
      function A(t) {
        var { leftIcon: e, rightIcon: r, children: i, iconSpacing: o } = t;
        return n.createElement(
          n.Fragment,
          null,
          e && n.createElement(S, { marginEnd: o }, e),
          i,
          r && n.createElement(S, { marginStart: o }, r)
        );
      }
      l.Ts && (k.displayName = "Button");
    },
    2007: function (t, e, r) {
      "use strict";
      r.d(e, {
        X: function () {
          return C;
        },
      });
      var n = r(6563),
        i = r(3768),
        o = r(6254),
        a = r(4160),
        s = r(9798),
        f = r(1330),
        u = r(1697),
        c = r(7378),
        h = r(5811),
        d = r(2935),
        l = r(3900);
      r(8315);
      var [p, b] = (0, h.k)({ name: "CheckboxGroupContext", strict: !1 });
      u.Ts;
      var m = r(5124),
        y = r(6452);
      function g() {
        return (g =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var v = "custom" in m.E ? m.E.custom(n.m$.svg) : (0, m.E)(n.m$.svg),
        w = (t) =>
          c.createElement(
            v,
            g(
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
              t
            ),
            c.createElement("polyline", { points: "1.5 6 4.5 9 10.5 1" })
          ),
        _ = (t) =>
          c.createElement(
            v,
            g(
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
              t
            ),
            c.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
          ),
        M = (t) => {
          var { open: e, children: r } = t;
          return c.createElement(
            y.M,
            { initial: !1 },
            e &&
              c.createElement(
                m.E.div,
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
                r
              )
          );
        },
        S = (t) => {
          var { isIndeterminate: e, isChecked: r } = t,
            n = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = {},
                o = Object.keys(t);
              for (n = 0; n < o.length; n++)
                (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i;
            })(t, ["isIndeterminate", "isChecked"]),
            i = e ? _ : w;
          return c.createElement(M, { open: r || e }, c.createElement(i, n));
        },
        E = r(2416),
        k = r(8820),
        A = r(5102),
        x = r(106),
        I = r(8673);
      function O() {
        return (O =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function R(t) {
        void 0 === t && (t = {});
        var {
            defaultIsChecked: e,
            defaultChecked: r = e,
            isChecked: n,
            isFocusable: i,
            isDisabled: o,
            isReadOnly: a,
            isRequired: u,
            onChange: h,
            isIndeterminate: p,
            isInvalid: b,
            name: m,
            value: y,
            id: g,
            onBlur: v,
            onFocus: w,
            tabIndex: _,
            "aria-label": M,
            "aria-labelledby": S,
            "aria-invalid": R,
            "aria-describedby": j,
          } = t,
          P = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, [
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
          T = (0, d.W)(h),
          C = (0, d.W)(v),
          N = (0, d.W)(w),
          [L, D] = (0, E.k)(),
          [q, U] = (0, E.k)(),
          [z, F] = (0, E.k)(),
          H = (0, c.useRef)(null),
          [K, W] = (0, c.useState)(!0),
          [V, G] = (0, c.useState)(!!r),
          [Z, $] = (0, l.p)(n, V);
        (0, s.ZK)({
          condition: !!e,
          message:
            'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.',
        });
        var X = (0, c.useCallback)(
          (t) => {
            a || o
              ? t.preventDefault()
              : (Z || G($ ? t.target.checked : !!p || t.target.checked),
                null == T || T(t));
          },
          [a, o, $, Z, p, T]
        );
        (0, k.G)(() => {
          H.current && (H.current.indeterminate = Boolean(p));
        }, [p]);
        var J = o && !i,
          Y = (0, c.useCallback)(
            (t) => {
              " " === t.key && F.on();
            },
            [F]
          ),
          Q = (0, c.useCallback)(
            (t) => {
              " " === t.key && F.off();
            },
            [F]
          );
        (0, k.G)(() => {
          H.current && H.current.checked !== $ && G(H.current.checked);
        }, [H.current]);
        var tt = (0, c.useCallback)(
            function (t, e) {
              void 0 === t && (t = {}), void 0 === e && (e = null);
              return O({}, t, {
                ref: e,
                "data-active": (0, f.PB)(z),
                "data-hover": (0, f.PB)(q),
                "data-checked": (0, f.PB)($),
                "data-focus": (0, f.PB)(L),
                "data-indeterminate": (0, f.PB)(p),
                "data-disabled": (0, f.PB)(o),
                "data-invalid": (0, f.PB)(b),
                "data-readonly": (0, f.PB)(a),
                "aria-hidden": !0,
                onMouseDown: (0, s.v0)(t.onMouseDown, (t) => {
                  t.preventDefault(), F.on();
                }),
                onMouseUp: (0, s.v0)(t.onMouseUp, F.off),
                onMouseEnter: (0, s.v0)(t.onMouseEnter, U.on),
                onMouseLeave: (0, s.v0)(t.onMouseLeave, U.off),
              });
            },
            [z, $, o, L, q, p, b, a, F, U.off, U.on]
          ),
          et = (0, c.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                O({}, P, t, {
                  ref: (0, A.l)(e, (t) => {
                    t && W("LABEL" === t.tagName);
                  }),
                  onClick: (0, s.v0)(t.onClick, () => {
                    var t;
                    K ||
                      (null == (t = H.current) || t.click(),
                      (0, x.T)(H.current, { nextTick: !0 }));
                  }),
                  "data-disabled": (0, f.PB)(o),
                  "data-checked": (0, f.PB)($),
                  "data-invalid": (0, f.PB)(b),
                })
              );
            },
            [P, o, $, b, K]
          ),
          rt = (0, c.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                O({}, t, {
                  ref: (0, A.l)(H, e),
                  type: "checkbox",
                  name: m,
                  value: y,
                  id: g,
                  tabIndex: _,
                  onChange: (0, s.v0)(t.onChange, X),
                  onBlur: (0, s.v0)(t.onBlur, C, D.off),
                  onFocus: (0, s.v0)(t.onFocus, N, D.on),
                  onKeyDown: (0, s.v0)(t.onKeyDown, Y),
                  onKeyUp: (0, s.v0)(t.onKeyUp, Q),
                  required: u,
                  checked: $,
                  disabled: J,
                  readOnly: a,
                  "aria-label": M,
                  "aria-labelledby": S,
                  "aria-invalid": R ? Boolean(R) : b,
                  "aria-describedby": j,
                  "aria-disabled": o,
                  style: I.NL,
                })
              );
            },
            [
              m,
              y,
              g,
              X,
              D.off,
              D.on,
              C,
              N,
              Y,
              Q,
              u,
              $,
              J,
              a,
              M,
              S,
              R,
              b,
              j,
              o,
              _,
            ]
          ),
          nt = (0, c.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                O({}, t, {
                  ref: e,
                  onMouseDown: (0, s.v0)(t.onMouseDown, B),
                  onTouchStart: (0, s.v0)(t.onTouchStart, B),
                  "data-disabled": (0, f.PB)(o),
                  "data-checked": (0, f.PB)($),
                  "data-invalid": (0, f.PB)(b),
                })
              );
            },
            [$, o, b]
          );
        return {
          state: {
            isInvalid: b,
            isFocused: L,
            isChecked: $,
            isActive: z,
            isHovered: q,
            isIndeterminate: p,
            isDisabled: o,
            isReadOnly: a,
            isRequired: u,
          },
          getRootProps: et,
          getCheckboxProps: tt,
          getInputProps: rt,
          getLabelProps: nt,
          htmlProps: P,
        };
      }
      function B(t) {
        t.preventDefault(), t.stopPropagation();
      }
      function j() {
        return (j =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var P = (0, n.m$)("span", {
          baseStyle: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "top",
            userSelect: "none",
            flexShrink: 0,
          },
        }),
        T = (0, n.m$)("label", {
          baseStyle: {
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            verticalAlign: "top",
            position: "relative",
            _disabled: { cursor: "not-allowed" },
          },
        }),
        C = (0, i.G)((t, e) => {
          var r = b(),
            i = j({}, r, t),
            u = (0, o.j)("Checkbox", i),
            h = (0, a.Lr)(t),
            {
              spacing: d = "0.5rem",
              className: l,
              children: p,
              iconColor: m,
              iconSize: y,
              icon: g = c.createElement(S, null),
              isChecked: v,
              isDisabled: w = null == r ? void 0 : r.isDisabled,
              onChange: _,
            } = h,
            M = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = {},
                o = Object.keys(t);
              for (n = 0; n < o.length; n++)
                (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i;
            })(h, [
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
            E = v;
          null != r && r.value && h.value && (E = r.value.includes(h.value));
          var k = _;
          null != r && r.onChange && h.value && (k = (0, s.PP)(r.onChange, _));
          var {
              state: A,
              getInputProps: x,
              getCheckboxProps: I,
              getLabelProps: O,
              getRootProps: B,
            } = R(j({}, M, { isDisabled: w, isChecked: E, onChange: k })),
            C = c.useMemo(
              () =>
                j(
                  {
                    opacity: A.isChecked || A.isIndeterminate ? 1 : 0,
                    transform:
                      A.isChecked || A.isIndeterminate
                        ? "scale(1)"
                        : "scale(0.95)",
                    fontSize: y,
                    color: m,
                  },
                  u.icon
                ),
              [m, y, A.isChecked, A.isIndeterminate, u.icon]
            ),
            N = c.cloneElement(g, {
              __css: C,
              isIndeterminate: A.isIndeterminate,
              isChecked: A.isChecked,
            });
          return c.createElement(
            T,
            j(
              {
                __css: u.container,
                className: (0, f.cx)("chakra-checkbox", l),
              },
              B()
            ),
            c.createElement(
              "input",
              j({ className: "chakra-checkbox__input" }, x({}, e))
            ),
            c.createElement(
              P,
              j(
                { __css: u.control, className: "chakra-checkbox__control" },
                I()
              ),
              N
            ),
            p &&
              c.createElement(
                n.m$.span,
                j({ className: "chakra-checkbox__label" }, O(), {
                  __css: j({ marginStart: d }, u.label),
                }),
                p
              )
          );
        });
      u.Ts && (C.displayName = "Checkbox");
    },
    3906: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return E;
        },
      });
      var n = r(1330),
        i = r(9798),
        o = r(2086),
        a = r(2416),
        s = r(3768),
        f = r(6254),
        u = r(4160),
        c = r(2468),
        h = r(6563),
        d = r(1697),
        l = r(5811),
        p = r(5102),
        b = r(7378);
      function m() {
        return (m =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function y(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i;
      }
      var [g, v] = (0, l.k)({ strict: !1, name: "FormControlContext" });
      var w = (0, s.G)((t, e) => {
        var r = (0, f.j)("Form", t),
          i = (function (t) {
            var {
                id: e,
                isRequired: r,
                isInvalid: i,
                isDisabled: s,
                isReadOnly: f,
              } = t,
              u = y(t, [
                "id",
                "isRequired",
                "isInvalid",
                "isDisabled",
                "isReadOnly",
              ]),
              c = (0, o.Me)(),
              h = e || "field-" + c,
              d = h + "-label",
              l = h + "-feedback",
              g = h + "-helptext",
              [v, w] = b.useState(!1),
              [_, M] = b.useState(!1),
              [S, E] = (0, a.k)(),
              k = b.useCallback(
                function (t, e) {
                  return (
                    void 0 === t && (t = {}),
                    void 0 === e && (e = null),
                    m({ id: g }, t, {
                      ref: (0, p.l)(e, (t) => {
                        t && M(!0);
                      }),
                    })
                  );
                },
                [g]
              ),
              A = b.useCallback(
                function (t, e) {
                  var r, o;
                  return (
                    void 0 === t && (t = {}),
                    void 0 === e && (e = null),
                    m({}, t, {
                      ref: e,
                      "data-focus": (0, n.PB)(S),
                      "data-disabled": (0, n.PB)(s),
                      "data-invalid": (0, n.PB)(i),
                      "data-readonly": (0, n.PB)(f),
                      id: null != (r = t.id) ? r : d,
                      htmlFor: null != (o = t.htmlFor) ? o : h,
                    })
                  );
                },
                [h, s, S, i, f, d]
              ),
              x = b.useCallback(
                function (t, e) {
                  return (
                    void 0 === t && (t = {}),
                    void 0 === e && (e = null),
                    m({ id: l }, t, {
                      ref: (0, p.l)(e, (t) => {
                        t && w(!0);
                      }),
                      "aria-live": "polite",
                    })
                  );
                },
                [l]
              ),
              I = b.useCallback(
                function (t, e) {
                  return (
                    void 0 === t && (t = {}),
                    void 0 === e && (e = null),
                    m({}, t, u, { ref: e, role: "group" })
                  );
                },
                [u]
              ),
              O = b.useCallback(function (t, e) {
                return (
                  void 0 === t && (t = {}),
                  void 0 === e && (e = null),
                  m({}, t, {
                    ref: e,
                    role: "presentation",
                    "aria-hidden": !0,
                    children: t.children || "*",
                  })
                );
              }, []);
            return {
              isRequired: !!r,
              isInvalid: !!i,
              isReadOnly: !!f,
              isDisabled: !!s,
              isFocused: !!S,
              onFocus: E.on,
              onBlur: E.off,
              hasFeedbackText: v,
              setHasFeedbackText: w,
              hasHelpText: _,
              setHasHelpText: M,
              id: h,
              labelId: d,
              feedbackId: l,
              helpTextId: g,
              htmlProps: u,
              getHelpTextProps: k,
              getErrorMessageProps: x,
              getRootProps: I,
              getLabelProps: A,
              getRequiredIndicatorProps: O,
            };
          })((0, u.Lr)(t)),
          { getRootProps: s } = i,
          d = y(i, ["getRootProps", "htmlProps"]),
          l = (0, n.cx)("chakra-form-control", t.className),
          v = b.useMemo(() => d, [d]);
        return b.createElement(
          g,
          { value: v },
          b.createElement(
            c.Fo,
            { value: r },
            b.createElement(
              h.m$.div,
              m({}, s({}, e), { className: l, __css: r.container })
            )
          )
        );
      });
      d.Ts && (w.displayName = "FormControl");
      var _ = (0, s.G)((t, e) => {
        var r = v(),
          i = (0, c.yK)(),
          o = (0, n.cx)("chakra-form__helper-text", t.className);
        return b.createElement(
          h.m$.div,
          m({}, null == r ? void 0 : r.getHelpTextProps(t, e), {
            __css: i.helperText,
            className: o,
          })
        );
      });
      function M() {
        return (M =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function S(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i;
      }
      function E(t) {
        var e = (function (t) {
            var e,
              r,
              n,
              o = v(),
              {
                id: a,
                disabled: s,
                readOnly: f,
                required: u,
                isRequired: c,
                isInvalid: h,
                isReadOnly: d,
                isDisabled: l,
                onFocus: p,
                onBlur: b,
              } = t,
              m = S(t, [
                "id",
                "disabled",
                "readOnly",
                "required",
                "isRequired",
                "isInvalid",
                "isReadOnly",
                "isDisabled",
                "onFocus",
                "onBlur",
              ]),
              y = t["aria-describedby"] ? [t["aria-describedby"]] : [];
            null != o &&
              o.hasFeedbackText &&
              null != o &&
              o.isInvalid &&
              y.push(o.feedbackId);
            null != o && o.hasHelpText && y.push(o.helpTextId);
            return M({}, m, {
              "aria-describedby": y.join(" ") || void 0,
              id: null != a ? a : null == o ? void 0 : o.id,
              isDisabled:
                null != (e = null != s ? s : l)
                  ? e
                  : null == o
                  ? void 0
                  : o.isDisabled,
              isReadOnly:
                null != (r = null != f ? f : d)
                  ? r
                  : null == o
                  ? void 0
                  : o.isReadOnly,
              isRequired:
                null != (n = null != u ? u : c)
                  ? n
                  : null == o
                  ? void 0
                  : o.isRequired,
              isInvalid: null != h ? h : null == o ? void 0 : o.isInvalid,
              onFocus: (0, i.v0)(null == o ? void 0 : o.onFocus, p),
              onBlur: (0, i.v0)(null == o ? void 0 : o.onBlur, b),
            });
          })(t),
          { isDisabled: r, isInvalid: o, isReadOnly: a, isRequired: s } = e;
        return M(
          {},
          S(e, ["isDisabled", "isInvalid", "isReadOnly", "isRequired"]),
          {
            disabled: r,
            readOnly: a,
            required: s,
            "aria-invalid": (0, n.Qm)(o),
            "aria-required": (0, n.Qm)(s),
            "aria-readonly": (0, n.Qm)(a),
          }
        );
      }
      d.Ts && (_.displayName = "FormHelperText");
    },
    2416: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return i;
        },
      });
      var n = r(7378);
      function i(t) {
        void 0 === t && (t = !1);
        var [e, r] = (0, n.useState)(t);
        return [
          e,
          {
            on: (0, n.useCallback)(() => {
              r(!0);
            }, []),
            off: (0, n.useCallback)(() => {
              r(!1);
            }, []),
            toggle: (0, n.useCallback)(() => {
              r((t) => !t);
            }, []),
          },
        ];
      }
    },
    9957: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return d;
        },
      });
      var n = r(3768),
        i = r(6563),
        o = r(7790),
        a = r(1697),
        s = r(7378),
        f = r(6067);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i;
      }
      var h = s.forwardRef((t, e) => {
          var { htmlWidth: r, htmlHeight: n, alt: i } = t,
            o = c(t, ["htmlWidth", "htmlHeight", "alt"]);
          return s.createElement(
            "img",
            u({ width: r, height: n, ref: e, alt: i }, o)
          );
        }),
        d = (0, n.G)((t, e) => {
          var {
              fallbackSrc: r,
              fallback: n,
              src: a,
              srcSet: d,
              align: l,
              fit: p,
              loading: b,
              ignoreFallback: m,
              crossOrigin: y,
            } = t,
            g = c(t, [
              "fallbackSrc",
              "fallback",
              "src",
              "srcSet",
              "align",
              "fit",
              "loading",
              "ignoreFallback",
              "crossOrigin",
            ]),
            v = null != b || m || (void 0 === r && void 0 === n),
            w = (0, f.d)(u({}, t, { ignoreFallback: v })),
            _ = u(
              { ref: e, objectFit: p, objectPosition: l },
              v ? g : (0, o.CE)(g, ["onError", "onLoad"])
            );
          return "loaded" !== w
            ? n ||
                s.createElement(
                  i.m$.img,
                  u(
                    { as: h, className: "chakra-image__placeholder", src: r },
                    _
                  )
                )
            : s.createElement(
                i.m$.img,
                u(
                  {
                    as: h,
                    src: a,
                    srcSet: d,
                    crossOrigin: y,
                    loading: b,
                    className: "chakra-image",
                  },
                  _
                )
              );
        });
      a.Ts && (d.displayName = "Image");
    },
    6067: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return o;
        },
      });
      var n = r(8820),
        i = r(7378);
      function o(t) {
        var {
            loading: e,
            src: r,
            srcSet: o,
            onLoad: a,
            onError: s,
            crossOrigin: f,
            sizes: u,
            ignoreFallback: c,
          } = t,
          [h, d] = (0, i.useState)("pending");
        (0, i.useEffect)(() => {
          d(r ? "loading" : "pending");
        }, [r]);
        var l = (0, i.useRef)(),
          p = (0, i.useCallback)(() => {
            if (r) {
              b();
              var t = new Image();
              (t.src = r),
                f && (t.crossOrigin = f),
                o && (t.srcset = o),
                u && (t.sizes = u),
                e && (t.loading = e),
                (t.onload = (t) => {
                  b(), d("loaded"), null == a || a(t);
                }),
                (t.onerror = (t) => {
                  b(), d("failed"), null == s || s(t);
                }),
                (l.current = t);
            }
          }, [r, f, o, u, a, s, e]),
          b = () => {
            l.current &&
              ((l.current.onload = null),
              (l.current.onerror = null),
              (l.current = null));
          };
        return (
          (0, n.G)(() => {
            if (!c)
              return (
                "loading" === h && p(),
                () => {
                  b();
                }
              );
          }, [h, p, c]),
          c ? "loaded" : h
        );
      }
    },
    4368: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ui: function () {
          return l;
        },
        xW: function () {
          return p;
        },
      });
      var n = r(6563),
        i = r(3768),
        o = r(2468),
        a = r(1697),
        s = r(1330),
        f = r(7378);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var c = {
          left: {
            marginEnd: "-1px",
            borderEndRadius: 0,
            borderEndColor: "transparent",
          },
          right: {
            marginStart: "-1px",
            borderStartRadius: 0,
            borderStartColor: "transparent",
          },
        },
        h = (0, n.m$)("div", {
          baseStyle: {
            flex: "0 0 auto",
            width: "auto",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          },
        }),
        d = (0, i.G)((t, e) => {
          var r,
            { placement: n = "left" } = t,
            i = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = {},
                o = Object.keys(t);
              for (n = 0; n < o.length; n++)
                (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i;
            })(t, ["placement"]),
            a = null != (r = c[n]) ? r : {},
            s = (0, o.yK)();
          return f.createElement(
            h,
            u({ ref: e }, i, { __css: u({}, s.addon, a) })
          );
        });
      a.Ts && (d.displayName = "InputAddon");
      var l = (0, i.G)((t, e) =>
        f.createElement(
          d,
          u({ ref: e, placement: "left" }, t, {
            className: (0, s.cx)("chakra-input__left-addon", t.className),
          })
        )
      );
      a.Ts && (l.displayName = "InputLeftAddon"), (l.id = "InputLeftAddon");
      var p = (0, i.G)((t, e) =>
        f.createElement(
          d,
          u({ ref: e, placement: "right" }, t, {
            className: (0, s.cx)("chakra-input__right-addon", t.className),
          })
        )
      );
      a.Ts && (p.displayName = "InputRightAddon"), (p.id = "InputRightAddon");
    },
    3675: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return l;
        },
      });
      var n = r(3768),
        i = r(6254),
        o = r(4160),
        a = r(6563),
        s = r(2468),
        f = r(1330),
        u = r(1697),
        c = r(7434),
        h = r(7378);
      function d() {
        return (d =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var l = (0, n.G)((t, e) => {
        var r = (0, i.j)("Input", t),
          n = (0, o.Lr)(t),
          { children: u, className: l } = n,
          p = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(n, ["children", "className"]),
          b = (0, f.cx)("chakra-input__group", l),
          m = {},
          y = (0, c.W)(u),
          g = r.field;
        y.forEach((t) => {
          if (r) {
            var e, n;
            if (g && "InputLeftElement" === t.type.id)
              m.paddingStart = null != (e = g.height) ? e : g.h;
            if (g && "InputRightElement" === t.type.id)
              m.paddingEnd = null != (n = g.height) ? n : g.h;
            "InputRightAddon" === t.type.id && (m.borderEndRadius = 0),
              "InputLeftAddon" === t.type.id && (m.borderStartRadius = 0);
          }
        });
        var v = y.map((e) => {
          var r,
            n,
            i = {
              size: (null == (r = e.props) ? void 0 : r.size) || t.size,
              variant:
                (null == (n = e.props) ? void 0 : n.variant) || t.variant,
            };
          return "Input" !== e.type.id
            ? h.cloneElement(e, i)
            : h.cloneElement(e, Object.assign(i, m, e.props));
        });
        return h.createElement(
          a.m$.div,
          d(
            {
              className: b,
              ref: e,
              __css: { width: "100%", display: "flex", position: "relative" },
            },
            p
          ),
          h.createElement(s.Fo, { value: r }, v)
        );
      });
      u.Ts && (l.displayName = "InputGroup");
    },
    5984: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return d;
        },
      });
      var n = r(3906),
        i = r(3768),
        o = r(6254),
        a = r(4160),
        s = r(6563),
        f = r(1330),
        u = r(1697),
        c = r(7378);
      function h() {
        return (h =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var d = (0, i.G)((t, e) => {
        var r = (0, o.j)("Input", t),
          i = (0, a.Lr)(t),
          u = (0, n.Y)(i),
          d = (0, f.cx)("chakra-input", t.className);
        return c.createElement(
          s.m$.input,
          h({}, u, { __css: r.field, ref: e, className: d })
        );
      });
      u.Ts && (d.displayName = "Input"), (d.id = "Input");
    },
    1532: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return p;
        },
      });
      var n = r(43),
        i = r(3768),
        o = r(6254),
        a = r(4160),
        s = r(6563),
        f = r(1330),
        u = r(1697),
        c = r(8673),
        h = r(7378);
      function d() {
        return (d =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var l = (0, n.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        p = (0, i.G)((t, e) => {
          var r = (0, o.m)("Spinner", t),
            n = (0, a.Lr)(t),
            {
              label: i = "Loading...",
              thickness: u = "2px",
              speed: p = "0.45s",
              emptyColor: b = "transparent",
              className: m,
            } = n,
            y = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = {},
                o = Object.keys(t);
              for (n = 0; n < o.length; n++)
                (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i;
            })(n, ["label", "thickness", "speed", "emptyColor", "className"]),
            g = (0, f.cx)("chakra-spinner", m),
            v = d(
              {
                display: "inline-block",
                borderColor: "currentColor",
                borderStyle: "solid",
                borderRadius: "99999px",
                borderWidth: u,
                borderBottomColor: b,
                borderLeftColor: b,
                animation: l + " " + p + " linear infinite",
              },
              r
            );
          return h.createElement(
            s.m$.div,
            d({ ref: e, __css: v, className: g }, y),
            i && h.createElement(c.TX, null, i)
          );
        });
      u.Ts && (p.displayName = "Spinner");
    },
    8673: function (t, e, r) {
      "use strict";
      r.d(e, {
        NL: function () {
          return o;
        },
        TX: function () {
          return a;
        },
      });
      var n = r(6563),
        i = r(1697),
        o = {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        a = (0, n.m$)("span", { baseStyle: o });
      i.Ts && (a.displayName = "VisuallyHidden");
      var s = (0, n.m$)("input", { baseStyle: o });
      i.Ts && (s.displayName = "VisuallyHiddenInput");
    },
    9840: function (t, e, r) {
      "use strict";
      const n = e;
      (n.bignum = r(3785)),
        (n.define = r(9234).define),
        (n.base = r(9913)),
        (n.constants = r(9036)),
        (n.decoders = r(4823)),
        (n.encoders = r(3886));
    },
    9234: function (t, e, r) {
      "use strict";
      const n = r(3886),
        i = r(4823),
        o = r(87);
      function a(t, e) {
        (this.name = t),
          (this.body = e),
          (this.decoders = {}),
          (this.encoders = {});
      }
      (e.define = function (t, e) {
        return new a(t, e);
      }),
        (a.prototype._createNamed = function (t) {
          const e = this.name;
          function r(t) {
            this._initNamed(t, e);
          }
          return (
            o(r, t),
            (r.prototype._initNamed = function (e, r) {
              t.call(this, e, r);
            }),
            new r(this)
          );
        }),
        (a.prototype._getDecoder = function (t) {
          return (
            (t = t || "der"),
            this.decoders.hasOwnProperty(t) ||
              (this.decoders[t] = this._createNamed(i[t])),
            this.decoders[t]
          );
        }),
        (a.prototype.decode = function (t, e, r) {
          return this._getDecoder(e).decode(t, r);
        }),
        (a.prototype._getEncoder = function (t) {
          return (
            (t = t || "der"),
            this.encoders.hasOwnProperty(t) ||
              (this.encoders[t] = this._createNamed(n[t])),
            this.encoders[t]
          );
        }),
        (a.prototype.encode = function (t, e, r) {
          return this._getEncoder(e).encode(t, r);
        });
    },
    3370: function (t, e, r) {
      "use strict";
      const n = r(87),
        i = r(7298).b,
        o = r(1788).Buffer;
      function a(t, e) {
        i.call(this, e),
          o.isBuffer(t)
            ? ((this.base = t), (this.offset = 0), (this.length = t.length))
            : this.error("Input not Buffer");
      }
      function s(t, e) {
        if (Array.isArray(t))
          (this.length = 0),
            (this.value = t.map(function (t) {
              return (
                s.isEncoderBuffer(t) || (t = new s(t, e)),
                (this.length += t.length),
                t
              );
            }, this));
        else if ("number" === typeof t) {
          if (!(0 <= t && t <= 255))
            return e.error("non-byte EncoderBuffer value");
          (this.value = t), (this.length = 1);
        } else if ("string" === typeof t)
          (this.value = t), (this.length = o.byteLength(t));
        else {
          if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
          (this.value = t), (this.length = t.length);
        }
      }
      n(a, i),
        (e.C = a),
        (a.isDecoderBuffer = function (t) {
          if (t instanceof a) return !0;
          return (
            "object" === typeof t &&
            o.isBuffer(t.base) &&
            "DecoderBuffer" === t.constructor.name &&
            "number" === typeof t.offset &&
            "number" === typeof t.length &&
            "function" === typeof t.save &&
            "function" === typeof t.restore &&
            "function" === typeof t.isEmpty &&
            "function" === typeof t.readUInt8 &&
            "function" === typeof t.skip &&
            "function" === typeof t.raw
          );
        }),
        (a.prototype.save = function () {
          return { offset: this.offset, reporter: i.prototype.save.call(this) };
        }),
        (a.prototype.restore = function (t) {
          const e = new a(this.base);
          return (
            (e.offset = t.offset),
            (e.length = this.offset),
            (this.offset = t.offset),
            i.prototype.restore.call(this, t.reporter),
            e
          );
        }),
        (a.prototype.isEmpty = function () {
          return this.offset === this.length;
        }),
        (a.prototype.readUInt8 = function (t) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(t || "DecoderBuffer overrun");
        }),
        (a.prototype.skip = function (t, e) {
          if (!(this.offset + t <= this.length))
            return this.error(e || "DecoderBuffer overrun");
          const r = new a(this.base);
          return (
            (r._reporterState = this._reporterState),
            (r.offset = this.offset),
            (r.length = this.offset + t),
            (this.offset += t),
            r
          );
        }),
        (a.prototype.raw = function (t) {
          return this.base.slice(t ? t.offset : this.offset, this.length);
        }),
        (e.R = s),
        (s.isEncoderBuffer = function (t) {
          if (t instanceof s) return !0;
          return (
            "object" === typeof t &&
            "EncoderBuffer" === t.constructor.name &&
            "number" === typeof t.length &&
            "function" === typeof t.join
          );
        }),
        (s.prototype.join = function (t, e) {
          return (
            t || (t = o.alloc(this.length)),
            e || (e = 0),
            0 === this.length ||
              (Array.isArray(this.value)
                ? this.value.forEach(function (r) {
                    r.join(t, e), (e += r.length);
                  })
                : ("number" === typeof this.value
                    ? (t[e] = this.value)
                    : "string" === typeof this.value
                    ? t.write(this.value, e)
                    : o.isBuffer(this.value) && this.value.copy(t, e),
                  (e += this.length))),
            t
          );
        });
    },
    9913: function (t, e, r) {
      "use strict";
      const n = e;
      (n.Reporter = r(7298).b),
        (n.DecoderBuffer = r(3370).C),
        (n.EncoderBuffer = r(3370).R),
        (n.Node = r(8718));
    },
    8718: function (t, e, r) {
      "use strict";
      const n = r(7298).b,
        i = r(3370).R,
        o = r(3370).C,
        a = r(7859),
        s = [
          "seq",
          "seqof",
          "set",
          "setof",
          "objid",
          "bool",
          "gentime",
          "utctime",
          "null_",
          "enum",
          "int",
          "objDesc",
          "bitstr",
          "bmpstr",
          "charstr",
          "genstr",
          "graphstr",
          "ia5str",
          "iso646str",
          "numstr",
          "octstr",
          "printstr",
          "t61str",
          "unistr",
          "utf8str",
          "videostr",
        ],
        f = [
          "key",
          "obj",
          "use",
          "optional",
          "explicit",
          "implicit",
          "def",
          "choice",
          "any",
          "contains",
        ].concat(s);
      function u(t, e, r) {
        const n = {};
        (this._baseState = n),
          (n.name = r),
          (n.enc = t),
          (n.parent = e || null),
          (n.children = null),
          (n.tag = null),
          (n.args = null),
          (n.reverseArgs = null),
          (n.choice = null),
          (n.optional = !1),
          (n.any = !1),
          (n.obj = !1),
          (n.use = null),
          (n.useDecoder = null),
          (n.key = null),
          (n.default = null),
          (n.explicit = null),
          (n.implicit = null),
          (n.contains = null),
          n.parent || ((n.children = []), this._wrap());
      }
      t.exports = u;
      const c = [
        "enc",
        "parent",
        "children",
        "tag",
        "args",
        "reverseArgs",
        "choice",
        "optional",
        "any",
        "obj",
        "use",
        "alteredUse",
        "key",
        "default",
        "explicit",
        "implicit",
        "contains",
      ];
      (u.prototype.clone = function () {
        const t = this._baseState,
          e = {};
        c.forEach(function (r) {
          e[r] = t[r];
        });
        const r = new this.constructor(e.parent);
        return (r._baseState = e), r;
      }),
        (u.prototype._wrap = function () {
          const t = this._baseState;
          f.forEach(function (e) {
            this[e] = function () {
              const r = new this.constructor(this);
              return t.children.push(r), r[e].apply(r, arguments);
            };
          }, this);
        }),
        (u.prototype._init = function (t) {
          const e = this._baseState;
          a(null === e.parent),
            t.call(this),
            (e.children = e.children.filter(function (t) {
              return t._baseState.parent === this;
            }, this)),
            a.equal(e.children.length, 1, "Root node can have only one child");
        }),
        (u.prototype._useArgs = function (t) {
          const e = this._baseState,
            r = t.filter(function (t) {
              return t instanceof this.constructor;
            }, this);
          (t = t.filter(function (t) {
            return !(t instanceof this.constructor);
          }, this)),
            0 !== r.length &&
              (a(null === e.children),
              (e.children = r),
              r.forEach(function (t) {
                t._baseState.parent = this;
              }, this)),
            0 !== t.length &&
              (a(null === e.args),
              (e.args = t),
              (e.reverseArgs = t.map(function (t) {
                if ("object" !== typeof t || t.constructor !== Object) return t;
                const e = {};
                return (
                  Object.keys(t).forEach(function (r) {
                    r == (0 | r) && (r |= 0);
                    const n = t[r];
                    e[n] = r;
                  }),
                  e
                );
              })));
        }),
        [
          "_peekTag",
          "_decodeTag",
          "_use",
          "_decodeStr",
          "_decodeObjid",
          "_decodeTime",
          "_decodeNull",
          "_decodeInt",
          "_decodeBool",
          "_decodeList",
          "_encodeComposite",
          "_encodeStr",
          "_encodeObjid",
          "_encodeTime",
          "_encodeNull",
          "_encodeInt",
          "_encodeBool",
        ].forEach(function (t) {
          u.prototype[t] = function () {
            const e = this._baseState;
            throw new Error(t + " not implemented for encoding: " + e.enc);
          };
        }),
        s.forEach(function (t) {
          u.prototype[t] = function () {
            const e = this._baseState,
              r = Array.prototype.slice.call(arguments);
            return a(null === e.tag), (e.tag = t), this._useArgs(r), this;
          };
        }),
        (u.prototype.use = function (t) {
          a(t);
          const e = this._baseState;
          return a(null === e.use), (e.use = t), this;
        }),
        (u.prototype.optional = function () {
          return (this._baseState.optional = !0), this;
        }),
        (u.prototype.def = function (t) {
          const e = this._baseState;
          return (
            a(null === e.default), (e.default = t), (e.optional = !0), this
          );
        }),
        (u.prototype.explicit = function (t) {
          const e = this._baseState;
          return (
            a(null === e.explicit && null === e.implicit),
            (e.explicit = t),
            this
          );
        }),
        (u.prototype.implicit = function (t) {
          const e = this._baseState;
          return (
            a(null === e.explicit && null === e.implicit),
            (e.implicit = t),
            this
          );
        }),
        (u.prototype.obj = function () {
          const t = this._baseState,
            e = Array.prototype.slice.call(arguments);
          return (t.obj = !0), 0 !== e.length && this._useArgs(e), this;
        }),
        (u.prototype.key = function (t) {
          const e = this._baseState;
          return a(null === e.key), (e.key = t), this;
        }),
        (u.prototype.any = function () {
          return (this._baseState.any = !0), this;
        }),
        (u.prototype.choice = function (t) {
          const e = this._baseState;
          return (
            a(null === e.choice),
            (e.choice = t),
            this._useArgs(
              Object.keys(t).map(function (e) {
                return t[e];
              })
            ),
            this
          );
        }),
        (u.prototype.contains = function (t) {
          const e = this._baseState;
          return a(null === e.use), (e.contains = t), this;
        }),
        (u.prototype._decode = function (t, e) {
          const r = this._baseState;
          if (null === r.parent)
            return t.wrapResult(r.children[0]._decode(t, e));
          let n,
            i = r.default,
            a = !0,
            s = null;
          if ((null !== r.key && (s = t.enterKey(r.key)), r.optional)) {
            let n = null;
            if (
              (null !== r.explicit
                ? (n = r.explicit)
                : null !== r.implicit
                ? (n = r.implicit)
                : null !== r.tag && (n = r.tag),
              null !== n || r.any)
            ) {
              if (((a = this._peekTag(t, n, r.any)), t.isError(a))) return a;
            } else {
              const n = t.save();
              try {
                null === r.choice
                  ? this._decodeGeneric(r.tag, t, e)
                  : this._decodeChoice(t, e),
                  (a = !0);
              } catch (f) {
                a = !1;
              }
              t.restore(n);
            }
          }
          if ((r.obj && a && (n = t.enterObject()), a)) {
            if (null !== r.explicit) {
              const e = this._decodeTag(t, r.explicit);
              if (t.isError(e)) return e;
              t = e;
            }
            const n = t.offset;
            if (null === r.use && null === r.choice) {
              let e;
              r.any && (e = t.save());
              const n = this._decodeTag(
                t,
                null !== r.implicit ? r.implicit : r.tag,
                r.any
              );
              if (t.isError(n)) return n;
              r.any ? (i = t.raw(e)) : (t = n);
            }
            if (
              (e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), n, t.length, "tagged"),
              e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), t.offset, t.length, "content"),
              r.any ||
                (i =
                  null === r.choice
                    ? this._decodeGeneric(r.tag, t, e)
                    : this._decodeChoice(t, e)),
              t.isError(i))
            )
              return i;
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function (r) {
                  r._decode(t, e);
                }),
              r.contains && ("octstr" === r.tag || "bitstr" === r.tag))
            ) {
              const n = new o(i);
              i = this._getUse(r.contains, t._reporterState.obj)._decode(n, e);
            }
          }
          return (
            r.obj && a && (i = t.leaveObject(n)),
            null === r.key || (null === i && !0 !== a)
              ? null !== s && t.exitKey(s)
              : t.leaveKey(s, r.key, i),
            i
          );
        }),
        (u.prototype._decodeGeneric = function (t, e, r) {
          const n = this._baseState;
          return "seq" === t || "set" === t
            ? null
            : "seqof" === t || "setof" === t
            ? this._decodeList(e, t, n.args[0], r)
            : /str$/.test(t)
            ? this._decodeStr(e, t, r)
            : "objid" === t && n.args
            ? this._decodeObjid(e, n.args[0], n.args[1], r)
            : "objid" === t
            ? this._decodeObjid(e, null, null, r)
            : "gentime" === t || "utctime" === t
            ? this._decodeTime(e, t, r)
            : "null_" === t
            ? this._decodeNull(e, r)
            : "bool" === t
            ? this._decodeBool(e, r)
            : "objDesc" === t
            ? this._decodeStr(e, t, r)
            : "int" === t || "enum" === t
            ? this._decodeInt(e, n.args && n.args[0], r)
            : null !== n.use
            ? this._getUse(n.use, e._reporterState.obj)._decode(e, r)
            : e.error("unknown tag: " + t);
        }),
        (u.prototype._getUse = function (t, e) {
          const r = this._baseState;
          return (
            (r.useDecoder = this._use(t, e)),
            a(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()),
              (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          );
        }),
        (u.prototype._decodeChoice = function (t, e) {
          const r = this._baseState;
          let n = null,
            i = !1;
          return (
            Object.keys(r.choice).some(function (o) {
              const a = t.save(),
                s = r.choice[o];
              try {
                const r = s._decode(t, e);
                if (t.isError(r)) return !1;
                (n = { type: o, value: r }), (i = !0);
              } catch (f) {
                return t.restore(a), !1;
              }
              return !0;
            }, this),
            i ? n : t.error("Choice not matched")
          );
        }),
        (u.prototype._createEncoderBuffer = function (t) {
          return new i(t, this.reporter);
        }),
        (u.prototype._encode = function (t, e, r) {
          const n = this._baseState;
          if (null !== n.default && n.default === t) return;
          const i = this._encodeValue(t, e, r);
          return void 0 === i || this._skipDefault(i, e, r) ? void 0 : i;
        }),
        (u.prototype._encodeValue = function (t, e, r) {
          const i = this._baseState;
          if (null === i.parent) return i.children[0]._encode(t, e || new n());
          let o = null;
          if (((this.reporter = e), i.optional && void 0 === t)) {
            if (null === i.default) return;
            t = i.default;
          }
          let a = null,
            s = !1;
          if (i.any) o = this._createEncoderBuffer(t);
          else if (i.choice) o = this._encodeChoice(t, e);
          else if (i.contains)
            (a = this._getUse(i.contains, r)._encode(t, e)), (s = !0);
          else if (i.children)
            (a = i.children
              .map(function (r) {
                if ("null_" === r._baseState.tag) return r._encode(null, e, t);
                if (null === r._baseState.key)
                  return e.error("Child should have a key");
                const n = e.enterKey(r._baseState.key);
                if ("object" !== typeof t)
                  return e.error("Child expected, but input is not object");
                const i = r._encode(t[r._baseState.key], e, t);
                return e.leaveKey(n), i;
              }, this)
              .filter(function (t) {
                return t;
              })),
              (a = this._createEncoderBuffer(a));
          else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!i.args || 1 !== i.args.length)
              return e.error("Too many args for : " + i.tag);
            if (!Array.isArray(t))
              return e.error("seqof/setof, but data is not Array");
            const r = this.clone();
            (r._baseState.implicit = null),
              (a = this._createEncoderBuffer(
                t.map(function (r) {
                  const n = this._baseState;
                  return this._getUse(n.args[0], t)._encode(r, e);
                }, r)
              ));
          } else
            null !== i.use
              ? (o = this._getUse(i.use, r)._encode(t, e))
              : ((a = this._encodePrimitive(i.tag, t)), (s = !0));
          if (!i.any && null === i.choice) {
            const t = null !== i.implicit ? i.implicit : i.tag,
              r = null === i.implicit ? "universal" : "context";
            null === t
              ? null === i.use &&
                e.error("Tag could be omitted only for .use()")
              : null === i.use && (o = this._encodeComposite(t, s, r, a));
          }
          return (
            null !== i.explicit &&
              (o = this._encodeComposite(i.explicit, !1, "context", o)),
            o
          );
        }),
        (u.prototype._encodeChoice = function (t, e) {
          const r = this._baseState,
            n = r.choice[t.type];
          return (
            n ||
              a(
                !1,
                t.type +
                  " not found in " +
                  JSON.stringify(Object.keys(r.choice))
              ),
            n._encode(t.value, e)
          );
        }),
        (u.prototype._encodePrimitive = function (t, e) {
          const r = this._baseState;
          if (/str$/.test(t)) return this._encodeStr(e, t);
          if ("objid" === t && r.args)
            return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
          if ("objid" === t) return this._encodeObjid(e, null, null);
          if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
          if ("null_" === t) return this._encodeNull();
          if ("int" === t || "enum" === t)
            return this._encodeInt(e, r.args && r.reverseArgs[0]);
          if ("bool" === t) return this._encodeBool(e);
          if ("objDesc" === t) return this._encodeStr(e, t);
          throw new Error("Unsupported tag: " + t);
        }),
        (u.prototype._isNumstr = function (t) {
          return /^[0-9 ]*$/.test(t);
        }),
        (u.prototype._isPrintstr = function (t) {
          return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t);
        });
    },
    7298: function (t, e, r) {
      "use strict";
      const n = r(87);
      function i(t) {
        this._reporterState = {
          obj: null,
          path: [],
          options: t || {},
          errors: [],
        };
      }
      function o(t, e) {
        (this.path = t), this.rethrow(e);
      }
      (e.b = i),
        (i.prototype.isError = function (t) {
          return t instanceof o;
        }),
        (i.prototype.save = function () {
          const t = this._reporterState;
          return { obj: t.obj, pathLen: t.path.length };
        }),
        (i.prototype.restore = function (t) {
          const e = this._reporterState;
          (e.obj = t.obj), (e.path = e.path.slice(0, t.pathLen));
        }),
        (i.prototype.enterKey = function (t) {
          return this._reporterState.path.push(t);
        }),
        (i.prototype.exitKey = function (t) {
          const e = this._reporterState;
          e.path = e.path.slice(0, t - 1);
        }),
        (i.prototype.leaveKey = function (t, e, r) {
          const n = this._reporterState;
          this.exitKey(t), null !== n.obj && (n.obj[e] = r);
        }),
        (i.prototype.path = function () {
          return this._reporterState.path.join("/");
        }),
        (i.prototype.enterObject = function () {
          const t = this._reporterState,
            e = t.obj;
          return (t.obj = {}), e;
        }),
        (i.prototype.leaveObject = function (t) {
          const e = this._reporterState,
            r = e.obj;
          return (e.obj = t), r;
        }),
        (i.prototype.error = function (t) {
          let e;
          const r = this._reporterState,
            n = t instanceof o;
          if (
            ((e = n
              ? t
              : new o(
                  r.path
                    .map(function (t) {
                      return "[" + JSON.stringify(t) + "]";
                    })
                    .join(""),
                  t.message || t,
                  t.stack
                )),
            !r.options.partial)
          )
            throw e;
          return n || r.errors.push(e), e;
        }),
        (i.prototype.wrapResult = function (t) {
          const e = this._reporterState;
          return e.options.partial
            ? { result: this.isError(t) ? null : t, errors: e.errors }
            : t;
        }),
        n(o, Error),
        (o.prototype.rethrow = function (t) {
          if (
            ((this.message = t + " at: " + (this.path || "(shallow)")),
            Error.captureStackTrace && Error.captureStackTrace(this, o),
            !this.stack)
          )
            try {
              throw new Error(this.message);
            } catch (e) {
              this.stack = e.stack;
            }
          return this;
        });
    },
    643: function (t, e) {
      "use strict";
      function r(t) {
        const e = {};
        return (
          Object.keys(t).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const n = t[r];
            e[n] = r;
          }),
          e
        );
      }
      (e.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private",
      }),
        (e.tagClassByName = r(e.tagClass)),
        (e.tag = {
          0: "end",
          1: "bool",
          2: "int",
          3: "bitstr",
          4: "octstr",
          5: "null_",
          6: "objid",
          7: "objDesc",
          8: "external",
          9: "real",
          10: "enum",
          11: "embed",
          12: "utf8str",
          13: "relativeOid",
          16: "seq",
          17: "set",
          18: "numstr",
          19: "printstr",
          20: "t61str",
          21: "videostr",
          22: "ia5str",
          23: "utctime",
          24: "gentime",
          25: "graphstr",
          26: "iso646str",
          27: "genstr",
          28: "unistr",
          29: "charstr",
          30: "bmpstr",
        }),
        (e.tagByName = r(e.tag));
    },
    9036: function (t, e, r) {
      "use strict";
      const n = e;
      (n._reverse = function (t) {
        const e = {};
        return (
          Object.keys(t).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const n = t[r];
            e[n] = r;
          }),
          e
        );
      }),
        (n.der = r(643));
    },
    8306: function (t, e, r) {
      "use strict";
      const n = r(87),
        i = r(3785),
        o = r(3370).C,
        a = r(8718),
        s = r(643);
      function f(t) {
        (this.enc = "der"),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new u()),
          this.tree._init(t.body);
      }
      function u(t) {
        a.call(this, "der", t);
      }
      function c(t, e) {
        let r = t.readUInt8(e);
        if (t.isError(r)) return r;
        const n = s.tagClass[r >> 6],
          i = 0 === (32 & r);
        if (31 === (31 & r)) {
          let n = r;
          for (r = 0; 128 === (128 & n); ) {
            if (((n = t.readUInt8(e)), t.isError(n))) return n;
            (r <<= 7), (r |= 127 & n);
          }
        } else r &= 31;
        return { cls: n, primitive: i, tag: r, tagStr: s.tag[r] };
      }
      function h(t, e, r) {
        let n = t.readUInt8(r);
        if (t.isError(n)) return n;
        if (!e && 128 === n) return null;
        if (0 === (128 & n)) return n;
        const i = 127 & n;
        if (i > 4) return t.error("length octect is too long");
        n = 0;
        for (let o = 0; o < i; o++) {
          n <<= 8;
          const e = t.readUInt8(r);
          if (t.isError(e)) return e;
          n |= e;
        }
        return n;
      }
      (t.exports = f),
        (f.prototype.decode = function (t, e) {
          return (
            o.isDecoderBuffer(t) || (t = new o(t, e)), this.tree._decode(t, e)
          );
        }),
        n(u, a),
        (u.prototype._peekTag = function (t, e, r) {
          if (t.isEmpty()) return !1;
          const n = t.save(),
            i = c(t, 'Failed to peek tag: "' + e + '"');
          return t.isError(i)
            ? i
            : (t.restore(n),
              i.tag === e || i.tagStr === e || i.tagStr + "of" === e || r);
        }),
        (u.prototype._decodeTag = function (t, e, r) {
          const n = c(t, 'Failed to decode tag of "' + e + '"');
          if (t.isError(n)) return n;
          let i = h(t, n.primitive, 'Failed to get length of "' + e + '"');
          if (t.isError(i)) return i;
          if (!r && n.tag !== e && n.tagStr !== e && n.tagStr + "of" !== e)
            return t.error('Failed to match tag: "' + e + '"');
          if (n.primitive || null !== i)
            return t.skip(i, 'Failed to match body of: "' + e + '"');
          const o = t.save(),
            a = this._skipUntilEnd(
              t,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            );
          return t.isError(a)
            ? a
            : ((i = t.offset - o.offset),
              t.restore(o),
              t.skip(i, 'Failed to match body of: "' + e + '"'));
        }),
        (u.prototype._skipUntilEnd = function (t, e) {
          for (;;) {
            const r = c(t, e);
            if (t.isError(r)) return r;
            const n = h(t, r.primitive, e);
            if (t.isError(n)) return n;
            let i;
            if (
              ((i =
                r.primitive || null !== n
                  ? t.skip(n)
                  : this._skipUntilEnd(t, e)),
              t.isError(i))
            )
              return i;
            if ("end" === r.tagStr) break;
          }
        }),
        (u.prototype._decodeList = function (t, e, r, n) {
          const i = [];
          for (; !t.isEmpty(); ) {
            const e = this._peekTag(t, "end");
            if (t.isError(e)) return e;
            const o = r.decode(t, "der", n);
            if (t.isError(o) && e) break;
            i.push(o);
          }
          return i;
        }),
        (u.prototype._decodeStr = function (t, e) {
          if ("bitstr" === e) {
            const e = t.readUInt8();
            return t.isError(e) ? e : { unused: e, data: t.raw() };
          }
          if ("bmpstr" === e) {
            const e = t.raw();
            if (e.length % 2 === 1)
              return t.error("Decoding of string type: bmpstr length mismatch");
            let r = "";
            for (let t = 0; t < e.length / 2; t++)
              r += String.fromCharCode(e.readUInt16BE(2 * t));
            return r;
          }
          if ("numstr" === e) {
            const e = t.raw().toString("ascii");
            return this._isNumstr(e)
              ? e
              : t.error(
                  "Decoding of string type: numstr unsupported characters"
                );
          }
          if ("octstr" === e) return t.raw();
          if ("objDesc" === e) return t.raw();
          if ("printstr" === e) {
            const e = t.raw().toString("ascii");
            return this._isPrintstr(e)
              ? e
              : t.error(
                  "Decoding of string type: printstr unsupported characters"
                );
          }
          return /str$/.test(e)
            ? t.raw().toString()
            : t.error("Decoding of string type: " + e + " unsupported");
        }),
        (u.prototype._decodeObjid = function (t, e, r) {
          let n;
          const i = [];
          let o = 0,
            a = 0;
          for (; !t.isEmpty(); )
            (a = t.readUInt8()),
              (o <<= 7),
              (o |= 127 & a),
              0 === (128 & a) && (i.push(o), (o = 0));
          128 & a && i.push(o);
          const s = (i[0] / 40) | 0,
            f = i[0] % 40;
          if (((n = r ? i : [s, f].concat(i.slice(1))), e)) {
            let t = e[n.join(" ")];
            void 0 === t && (t = e[n.join(".")]), void 0 !== t && (n = t);
          }
          return n;
        }),
        (u.prototype._decodeTime = function (t, e) {
          const r = t.raw().toString();
          let n, i, o, a, s, f;
          if ("gentime" === e)
            (n = 0 | r.slice(0, 4)),
              (i = 0 | r.slice(4, 6)),
              (o = 0 | r.slice(6, 8)),
              (a = 0 | r.slice(8, 10)),
              (s = 0 | r.slice(10, 12)),
              (f = 0 | r.slice(12, 14));
          else {
            if ("utctime" !== e)
              return t.error("Decoding " + e + " time is not supported yet");
            (n = 0 | r.slice(0, 2)),
              (i = 0 | r.slice(2, 4)),
              (o = 0 | r.slice(4, 6)),
              (a = 0 | r.slice(6, 8)),
              (s = 0 | r.slice(8, 10)),
              (f = 0 | r.slice(10, 12)),
              (n = n < 70 ? 2e3 + n : 1900 + n);
          }
          return Date.UTC(n, i - 1, o, a, s, f, 0);
        }),
        (u.prototype._decodeNull = function () {
          return null;
        }),
        (u.prototype._decodeBool = function (t) {
          const e = t.readUInt8();
          return t.isError(e) ? e : 0 !== e;
        }),
        (u.prototype._decodeInt = function (t, e) {
          const r = t.raw();
          let n = new i(r);
          return e && (n = e[n.toString(10)] || n), n;
        }),
        (u.prototype._use = function (t, e) {
          return (
            "function" === typeof t && (t = t(e)), t._getDecoder("der").tree
          );
        });
    },
    4823: function (t, e, r) {
      "use strict";
      const n = e;
      (n.der = r(8306)), (n.pem = r(8033));
    },
    8033: function (t, e, r) {
      "use strict";
      const n = r(87),
        i = r(1788).Buffer,
        o = r(8306);
      function a(t) {
        o.call(this, t), (this.enc = "pem");
      }
      n(a, o),
        (t.exports = a),
        (a.prototype.decode = function (t, e) {
          const r = t.toString().split(/[\r\n]+/g),
            n = e.label.toUpperCase(),
            a = /^-----(BEGIN|END) ([^-]+)-----$/;
          let s = -1,
            f = -1;
          for (let i = 0; i < r.length; i++) {
            const t = r[i].match(a);
            if (null !== t && t[2] === n) {
              if (-1 !== s) {
                if ("END" !== t[1]) break;
                f = i;
                break;
              }
              if ("BEGIN" !== t[1]) break;
              s = i;
            }
          }
          if (-1 === s || -1 === f)
            throw new Error("PEM section not found for: " + n);
          const u = r.slice(s + 1, f).join("");
          u.replace(/[^a-z0-9+/=]+/gi, "");
          const c = i.from(u, "base64");
          return o.prototype.decode.call(this, c, e);
        });
    },
    1584: function (t, e, r) {
      "use strict";
      const n = r(87),
        i = r(1788).Buffer,
        o = r(8718),
        a = r(643);
      function s(t) {
        (this.enc = "der"),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new f()),
          this.tree._init(t.body);
      }
      function f(t) {
        o.call(this, "der", t);
      }
      function u(t) {
        return t < 10 ? "0" + t : t;
      }
      (t.exports = s),
        (s.prototype.encode = function (t, e) {
          return this.tree._encode(t, e).join();
        }),
        n(f, o),
        (f.prototype._encodeComposite = function (t, e, r, n) {
          const o = (function (t, e, r, n) {
            let i;
            "seqof" === t ? (t = "seq") : "setof" === t && (t = "set");
            if (a.tagByName.hasOwnProperty(t)) i = a.tagByName[t];
            else {
              if ("number" !== typeof t || (0 | t) !== t)
                return n.error("Unknown tag: " + t);
              i = t;
            }
            if (i >= 31) return n.error("Multi-octet tag encoding unsupported");
            e || (i |= 32);
            return (i |= a.tagClassByName[r || "universal"] << 6), i;
          })(t, e, r, this.reporter);
          if (n.length < 128) {
            const t = i.alloc(2);
            return (
              (t[0] = o), (t[1] = n.length), this._createEncoderBuffer([t, n])
            );
          }
          let s = 1;
          for (let i = n.length; i >= 256; i >>= 8) s++;
          const f = i.alloc(2 + s);
          (f[0] = o), (f[1] = 128 | s);
          for (let i = 1 + s, a = n.length; a > 0; i--, a >>= 8) f[i] = 255 & a;
          return this._createEncoderBuffer([f, n]);
        }),
        (f.prototype._encodeStr = function (t, e) {
          if ("bitstr" === e)
            return this._createEncoderBuffer([0 | t.unused, t.data]);
          if ("bmpstr" === e) {
            const e = i.alloc(2 * t.length);
            for (let r = 0; r < t.length; r++)
              e.writeUInt16BE(t.charCodeAt(r), 2 * r);
            return this._createEncoderBuffer(e);
          }
          return "numstr" === e
            ? this._isNumstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  "Encoding of string type: numstr supports only digits and space"
                )
            : "printstr" === e
            ? this._isPrintstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
                )
            : /str$/.test(e) || "objDesc" === e
            ? this._createEncoderBuffer(t)
            : this.reporter.error(
                "Encoding of string type: " + e + " unsupported"
              );
        }),
        (f.prototype._encodeObjid = function (t, e, r) {
          if ("string" === typeof t) {
            if (!e)
              return this.reporter.error(
                "string objid given, but no values map found"
              );
            if (!e.hasOwnProperty(t))
              return this.reporter.error("objid not found in values map");
            t = e[t].split(/[\s.]+/g);
            for (let e = 0; e < t.length; e++) t[e] |= 0;
          } else if (Array.isArray(t)) {
            t = t.slice();
            for (let e = 0; e < t.length; e++) t[e] |= 0;
          }
          if (!Array.isArray(t))
            return this.reporter.error(
              "objid() should be either array or string, got: " +
                JSON.stringify(t)
            );
          if (!r) {
            if (t[1] >= 40)
              return this.reporter.error("Second objid identifier OOB");
            t.splice(0, 2, 40 * t[0] + t[1]);
          }
          let n = 0;
          for (let i = 0; i < t.length; i++) {
            let e = t[i];
            for (n++; e >= 128; e >>= 7) n++;
          }
          const o = i.alloc(n);
          let a = o.length - 1;
          for (let i = t.length - 1; i >= 0; i--) {
            let e = t[i];
            for (o[a--] = 127 & e; (e >>= 7) > 0; ) o[a--] = 128 | (127 & e);
          }
          return this._createEncoderBuffer(o);
        }),
        (f.prototype._encodeTime = function (t, e) {
          let r;
          const n = new Date(t);
          return (
            "gentime" === e
              ? (r = [
                  u(n.getUTCFullYear()),
                  u(n.getUTCMonth() + 1),
                  u(n.getUTCDate()),
                  u(n.getUTCHours()),
                  u(n.getUTCMinutes()),
                  u(n.getUTCSeconds()),
                  "Z",
                ].join(""))
              : "utctime" === e
              ? (r = [
                  u(n.getUTCFullYear() % 100),
                  u(n.getUTCMonth() + 1),
                  u(n.getUTCDate()),
                  u(n.getUTCHours()),
                  u(n.getUTCMinutes()),
                  u(n.getUTCSeconds()),
                  "Z",
                ].join(""))
              : this.reporter.error(
                  "Encoding " + e + " time is not supported yet"
                ),
            this._encodeStr(r, "octstr")
          );
        }),
        (f.prototype._encodeNull = function () {
          return this._createEncoderBuffer("");
        }),
        (f.prototype._encodeInt = function (t, e) {
          if ("string" === typeof t) {
            if (!e)
              return this.reporter.error(
                "String int or enum given, but no values map"
              );
            if (!e.hasOwnProperty(t))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(t)
              );
            t = e[t];
          }
          if ("number" !== typeof t && !i.isBuffer(t)) {
            const e = t.toArray();
            !t.sign && 128 & e[0] && e.unshift(0), (t = i.from(e));
          }
          if (i.isBuffer(t)) {
            let e = t.length;
            0 === t.length && e++;
            const r = i.alloc(e);
            return (
              t.copy(r),
              0 === t.length && (r[0] = 0),
              this._createEncoderBuffer(r)
            );
          }
          if (t < 128) return this._createEncoderBuffer(t);
          if (t < 256) return this._createEncoderBuffer([0, t]);
          let r = 1;
          for (let i = t; i >= 256; i >>= 8) r++;
          const n = new Array(r);
          for (let i = n.length - 1; i >= 0; i--) (n[i] = 255 & t), (t >>= 8);
          return (
            128 & n[0] && n.unshift(0), this._createEncoderBuffer(i.from(n))
          );
        }),
        (f.prototype._encodeBool = function (t) {
          return this._createEncoderBuffer(t ? 255 : 0);
        }),
        (f.prototype._use = function (t, e) {
          return (
            "function" === typeof t && (t = t(e)), t._getEncoder("der").tree
          );
        }),
        (f.prototype._skipDefault = function (t, e, r) {
          const n = this._baseState;
          let i;
          if (null === n.default) return !1;
          const o = t.join();
          if (
            (void 0 === n.defaultBuffer &&
              (n.defaultBuffer = this._encodeValue(n.default, e, r).join()),
            o.length !== n.defaultBuffer.length)
          )
            return !1;
          for (i = 0; i < o.length; i++)
            if (o[i] !== n.defaultBuffer[i]) return !1;
          return !0;
        });
    },
    3886: function (t, e, r) {
      "use strict";
      const n = e;
      (n.der = r(1584)), (n.pem = r(6927));
    },
    6927: function (t, e, r) {
      "use strict";
      const n = r(87),
        i = r(1584);
      function o(t) {
        i.call(this, t), (this.enc = "pem");
      }
      n(o, i),
        (t.exports = o),
        (o.prototype.encode = function (t, e) {
          const r = i.prototype.encode.call(this, t).toString("base64"),
            n = ["-----BEGIN " + e.label + "-----"];
          for (let i = 0; i < r.length; i += 64) n.push(r.slice(i, i + 64));
          return n.push("-----END " + e.label + "-----"), n.join("\n");
        });
    },
    9619: function (t, e, r) {
      "use strict";
      var n = r(7061);
      function i(t) {
        return (i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o,
        a,
        s = r(1404).codes,
        f = s.ERR_AMBIGUOUS_ARGUMENT,
        u = s.ERR_INVALID_ARG_TYPE,
        c = s.ERR_INVALID_ARG_VALUE,
        h = s.ERR_INVALID_RETURN_VALUE,
        d = s.ERR_MISSING_ARGS,
        l = r(7366),
        p = r(1323).inspect,
        b = r(1323).types,
        m = b.isPromise,
        y = b.isRegExp,
        g = Object.assign ? Object.assign : r(2098).assign,
        v = Object.is ? Object.is : r(3822);
      new Map();
      function w() {
        var t = r(118);
        (o = t.isDeepEqual), (a = t.isDeepStrictEqual);
      }
      var _ = !1,
        M = (t.exports = A),
        S = {};
      function E(t) {
        if (t.message instanceof Error) throw t.message;
        throw new l(t);
      }
      function k(t, e, r, n) {
        if (!r) {
          var i = !1;
          if (0 === e)
            (i = !0), (n = "No value argument passed to `assert.ok()`");
          else if (n instanceof Error) throw n;
          var o = new l({
            actual: r,
            expected: !0,
            message: n,
            operator: "==",
            stackStartFn: t,
          });
          throw ((o.generatedMessage = i), o);
        }
      }
      function A() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        k.apply(void 0, [A, e.length].concat(e));
      }
      (M.fail = function t(e, r, i, o, a) {
        var s,
          f = arguments.length;
        if (0 === f) s = "Failed";
        else if (1 === f) (i = e), (e = void 0);
        else {
          if (!1 === _) {
            _ = !0;
            var u = n.emitWarning ? n.emitWarning : console.warn.bind(console);
            u(
              "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
              "DeprecationWarning",
              "DEP0094"
            );
          }
          2 === f && (o = "!=");
        }
        if (i instanceof Error) throw i;
        var c = {
          actual: e,
          expected: r,
          operator: void 0 === o ? "fail" : o,
          stackStartFn: a || t,
        };
        void 0 !== i && (c.message = i);
        var h = new l(c);
        throw (s && ((h.message = s), (h.generatedMessage = !0)), h);
      }),
        (M.AssertionError = l),
        (M.ok = A),
        (M.equal = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          e != r &&
            E({
              actual: e,
              expected: r,
              message: n,
              operator: "==",
              stackStartFn: t,
            });
        }),
        (M.notEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          e == r &&
            E({
              actual: e,
              expected: r,
              message: n,
              operator: "!=",
              stackStartFn: t,
            });
        }),
        (M.deepEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          void 0 === o && w(),
            o(e, r) ||
              E({
                actual: e,
                expected: r,
                message: n,
                operator: "deepEqual",
                stackStartFn: t,
              });
        }),
        (M.notDeepEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          void 0 === o && w(),
            o(e, r) &&
              E({
                actual: e,
                expected: r,
                message: n,
                operator: "notDeepEqual",
                stackStartFn: t,
              });
        }),
        (M.deepStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          void 0 === o && w(),
            a(e, r) ||
              E({
                actual: e,
                expected: r,
                message: n,
                operator: "deepStrictEqual",
                stackStartFn: t,
              });
        }),
        (M.notDeepStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          void 0 === o && w();
          a(e, r) &&
            E({
              actual: e,
              expected: r,
              message: n,
              operator: "notDeepStrictEqual",
              stackStartFn: t,
            });
        }),
        (M.strictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          v(e, r) ||
            E({
              actual: e,
              expected: r,
              message: n,
              operator: "strictEqual",
              stackStartFn: t,
            });
        }),
        (M.notStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new d("actual", "expected");
          v(e, r) &&
            E({
              actual: e,
              expected: r,
              message: n,
              operator: "notStrictEqual",
              stackStartFn: t,
            });
        });
      var x = function t(e, r, n) {
        var i = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          r.forEach(function (t) {
            t in e &&
              (void 0 !== n &&
              "string" === typeof n[t] &&
              y(e[t]) &&
              e[t].test(n[t])
                ? (i[t] = n[t])
                : (i[t] = e[t]));
          });
      };
      function I(t, e, r, n, i, o) {
        if (!(r in t) || !a(t[r], e[r])) {
          if (!n) {
            var s = new x(t, i),
              f = new x(e, i, t),
              u = new l({
                actual: s,
                expected: f,
                operator: "deepStrictEqual",
                stackStartFn: o,
              });
            throw ((u.actual = t), (u.expected = e), (u.operator = o.name), u);
          }
          E({
            actual: t,
            expected: e,
            message: n,
            operator: o.name,
            stackStartFn: o,
          });
        }
      }
      function O(t, e, r, n) {
        if ("function" !== typeof e) {
          if (y(e)) return e.test(t);
          if (2 === arguments.length)
            throw new u("expected", ["Function", "RegExp"], e);
          if ("object" !== i(t) || null === t) {
            var a = new l({
              actual: t,
              expected: e,
              message: r,
              operator: "deepStrictEqual",
              stackStartFn: n,
            });
            throw ((a.operator = n.name), a);
          }
          var s = Object.keys(e);
          if (e instanceof Error) s.push("name", "message");
          else if (0 === s.length)
            throw new c("error", e, "may not be an empty object");
          return (
            void 0 === o && w(),
            s.forEach(function (i) {
              ("string" === typeof t[i] && y(e[i]) && e[i].test(t[i])) ||
                I(t, e, i, r, s, n);
            }),
            !0
          );
        }
        return (
          (void 0 !== e.prototype && t instanceof e) ||
          (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
        );
      }
      function R(t) {
        if ("function" !== typeof t) throw new u("fn", "Function", t);
        try {
          t();
        } catch (e) {
          return e;
        }
        return S;
      }
      function B(t) {
        return (
          m(t) ||
          (null !== t &&
            "object" === i(t) &&
            "function" === typeof t.then &&
            "function" === typeof t.catch)
        );
      }
      function j(t) {
        return Promise.resolve().then(function () {
          var e;
          if ("function" === typeof t) {
            if (!B((e = t())))
              throw new h("instance of Promise", "promiseFn", e);
          } else {
            if (!B(t)) throw new u("promiseFn", ["Function", "Promise"], t);
            e = t;
          }
          return Promise.resolve()
            .then(function () {
              return e;
            })
            .then(function () {
              return S;
            })
            .catch(function (t) {
              return t;
            });
        });
      }
      function P(t, e, r, n) {
        if ("string" === typeof r) {
          if (4 === arguments.length)
            throw new u("error", ["Object", "Error", "Function", "RegExp"], r);
          if ("object" === i(e) && null !== e) {
            if (e.message === r)
              throw new f(
                "error/message",
                'The error message "'.concat(
                  e.message,
                  '" is identical to the message.'
                )
              );
          } else if (e === r)
            throw new f(
              "error/message",
              'The error "'.concat(e, '" is identical to the message.')
            );
          (n = r), (r = void 0);
        } else if (null != r && "object" !== i(r) && "function" !== typeof r)
          throw new u("error", ["Object", "Error", "Function", "RegExp"], r);
        if (e === S) {
          var o = "";
          r && r.name && (o += " (".concat(r.name, ")")),
            (o += n ? ": ".concat(n) : ".");
          var a = "rejects" === t.name ? "rejection" : "exception";
          E({
            actual: void 0,
            expected: r,
            operator: t.name,
            message: "Missing expected ".concat(a).concat(o),
            stackStartFn: t,
          });
        }
        if (r && !O(e, r, n, t)) throw e;
      }
      function T(t, e, r, n) {
        if (e !== S) {
          if (
            ("string" === typeof r && ((n = r), (r = void 0)), !r || O(e, r))
          ) {
            var i = n ? ": ".concat(n) : ".",
              o = "doesNotReject" === t.name ? "rejection" : "exception";
            E({
              actual: e,
              expected: r,
              operator: t.name,
              message:
                "Got unwanted ".concat(o).concat(i, "\n") +
                'Actual message: "'.concat(e && e.message, '"'),
              stackStartFn: t,
            });
          }
          throw e;
        }
      }
      function C() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        k.apply(void 0, [C, e.length].concat(e));
      }
      (M.throws = function t(e) {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          n[i - 1] = arguments[i];
        P.apply(void 0, [t, R(e)].concat(n));
      }),
        (M.rejects = function t(e) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          return j(e).then(function (e) {
            return P.apply(void 0, [t, e].concat(n));
          });
        }),
        (M.doesNotThrow = function t(e) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          T.apply(void 0, [t, R(e)].concat(n));
        }),
        (M.doesNotReject = function t(e) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          return j(e).then(function (e) {
            return T.apply(void 0, [t, e].concat(n));
          });
        }),
        (M.ifError = function t(e) {
          if (null !== e && void 0 !== e) {
            var r = "ifError got unwanted exception: ";
            "object" === i(e) && "string" === typeof e.message
              ? 0 === e.message.length && e.constructor
                ? (r += e.constructor.name)
                : (r += e.message)
              : (r += p(e));
            var n = new l({
                actual: e,
                expected: null,
                operator: "ifError",
                message: r,
                stackStartFn: t,
              }),
              o = e.stack;
            if ("string" === typeof o) {
              var a = o.split("\n");
              a.shift();
              for (var s = n.stack.split("\n"), f = 0; f < a.length; f++) {
                var u = s.indexOf(a[f]);
                if (-1 !== u) {
                  s = s.slice(0, u);
                  break;
                }
              }
              n.stack = "".concat(s.join("\n"), "\n").concat(a.join("\n"));
            }
            throw n;
          }
        }),
        (M.strict = g(C, M, {
          equal: M.strictEqual,
          deepEqual: M.deepStrictEqual,
          notEqual: M.notStrictEqual,
          notDeepEqual: M.notDeepStrictEqual,
        })),
        (M.strict.strict = M.strict);
    },
    7366: function (t, e, r) {
      "use strict";
      var n = r(7061);
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function a(t, e) {
        return !e || ("object" !== l(e) && "function" !== typeof e) ? s(t) : e;
      }
      function s(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function f(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (f = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return c(t, arguments, d(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            h(n, t)
          );
        })(t);
      }
      function u() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function c(t, e, r) {
        return (c = u()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var i = new (Function.bind.apply(t, n))();
              return r && h(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(t) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t) {
        return (l =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var p = r(1323).inspect,
        b = r(1404).codes.ERR_INVALID_ARG_TYPE;
      function m(t, e, r) {
        return (
          (void 0 === r || r > t.length) && (r = t.length),
          t.substring(r - e.length, r) === e
        );
      }
      var y = "",
        g = "",
        v = "",
        w = "",
        _ = {
          deepStrictEqual: "Expected values to be strictly deep-equal:",
          strictEqual: "Expected values to be strictly equal:",
          strictEqualObject:
            'Expected "actual" to be reference-equal to "expected":',
          deepEqual: "Expected values to be loosely deep-equal:",
          equal: "Expected values to be loosely equal:",
          notDeepStrictEqual:
            'Expected "actual" not to be strictly deep-equal to:',
          notStrictEqual: 'Expected "actual" to be strictly unequal to:',
          notStrictEqualObject:
            'Expected "actual" not to be reference-equal to "expected":',
          notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
          notEqual: 'Expected "actual" to be loosely unequal to:',
          notIdentical: "Values identical but not reference-equal:",
        };
      function M(t) {
        var e = Object.keys(t),
          r = Object.create(Object.getPrototypeOf(t));
        return (
          e.forEach(function (e) {
            r[e] = t[e];
          }),
          Object.defineProperty(r, "message", { value: t.message }),
          r
        );
      }
      function S(t) {
        return p(t, {
          compact: !1,
          customInspect: !1,
          depth: 1e3,
          maxArrayLength: 1 / 0,
          showHidden: !1,
          breakLength: 1 / 0,
          showProxy: !1,
          sorted: !0,
          getters: !0,
        });
      }
      function E(t, e, r) {
        var i = "",
          o = "",
          a = 0,
          s = "",
          f = !1,
          u = S(t),
          c = u.split("\n"),
          h = S(e).split("\n"),
          d = 0,
          p = "";
        if (
          ("strictEqual" === r &&
            "object" === l(t) &&
            "object" === l(e) &&
            null !== t &&
            null !== e &&
            (r = "strictEqualObject"),
          1 === c.length && 1 === h.length && c[0] !== h[0])
        ) {
          var b = c[0].length + h[0].length;
          if (b <= 10) {
            if (
              ("object" !== l(t) || null === t) &&
              ("object" !== l(e) || null === e) &&
              (0 !== t || 0 !== e)
            )
              return (
                "".concat(_[r], "\n\n") +
                "".concat(c[0], " !== ").concat(h[0], "\n")
              );
          } else if ("strictEqualObject" !== r) {
            if (b < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
              for (; c[0][d] === h[0][d]; ) d++;
              d > 2 &&
                ((p = "\n  ".concat(
                  (function (t, e) {
                    if (((e = Math.floor(e)), 0 == t.length || 0 == e))
                      return "";
                    var r = t.length * e;
                    for (e = Math.floor(Math.log(e) / Math.log(2)); e; )
                      (t += t), e--;
                    return t + t.substring(0, r - t.length);
                  })(" ", d),
                  "^"
                )),
                (d = 0));
            }
          }
        }
        for (
          var M = c[c.length - 1], E = h[h.length - 1];
          M === E &&
          (d++ < 2 ? (s = "\n  ".concat(M).concat(s)) : (i = M),
          c.pop(),
          h.pop(),
          0 !== c.length && 0 !== h.length);

        )
          (M = c[c.length - 1]), (E = h[h.length - 1]);
        var k = Math.max(c.length, h.length);
        if (0 === k) {
          var A = u.split("\n");
          if (A.length > 30)
            for (A[26] = "".concat(y, "...").concat(w); A.length > 27; )
              A.pop();
          return "".concat(_.notIdentical, "\n\n").concat(A.join("\n"), "\n");
        }
        d > 3 && ((s = "\n".concat(y, "...").concat(w).concat(s)), (f = !0)),
          "" !== i && ((s = "\n  ".concat(i).concat(s)), (i = ""));
        var x = 0,
          I =
            _[r] +
            "\n"
              .concat(g, "+ actual")
              .concat(w, " ")
              .concat(v, "- expected")
              .concat(w),
          O = " ".concat(y, "...").concat(w, " Lines skipped");
        for (d = 0; d < k; d++) {
          var R = d - a;
          if (c.length < d + 1)
            R > 1 &&
              d > 2 &&
              (R > 4
                ? ((o += "\n".concat(y, "...").concat(w)), (f = !0))
                : R > 3 && ((o += "\n  ".concat(h[d - 2])), x++),
              (o += "\n  ".concat(h[d - 1])),
              x++),
              (a = d),
              (i += "\n".concat(v, "-").concat(w, " ").concat(h[d])),
              x++;
          else if (h.length < d + 1)
            R > 1 &&
              d > 2 &&
              (R > 4
                ? ((o += "\n".concat(y, "...").concat(w)), (f = !0))
                : R > 3 && ((o += "\n  ".concat(c[d - 2])), x++),
              (o += "\n  ".concat(c[d - 1])),
              x++),
              (a = d),
              (o += "\n".concat(g, "+").concat(w, " ").concat(c[d])),
              x++;
          else {
            var B = h[d],
              j = c[d],
              P = j !== B && (!m(j, ",") || j.slice(0, -1) !== B);
            P && m(B, ",") && B.slice(0, -1) === j && ((P = !1), (j += ",")),
              P
                ? (R > 1 &&
                    d > 2 &&
                    (R > 4
                      ? ((o += "\n".concat(y, "...").concat(w)), (f = !0))
                      : R > 3 && ((o += "\n  ".concat(c[d - 2])), x++),
                    (o += "\n  ".concat(c[d - 1])),
                    x++),
                  (a = d),
                  (o += "\n".concat(g, "+").concat(w, " ").concat(j)),
                  (i += "\n".concat(v, "-").concat(w, " ").concat(B)),
                  (x += 2))
                : ((o += i),
                  (i = ""),
                  (1 !== R && 0 !== d) || ((o += "\n  ".concat(j)), x++));
          }
          if (x > 20 && d < k - 2)
            return (
              ""
                .concat(I)
                .concat(O, "\n")
                .concat(o, "\n")
                .concat(y, "...")
                .concat(w)
                .concat(i, "\n") + "".concat(y, "...").concat(w)
            );
        }
        return ""
          .concat(I)
          .concat(f ? O : "", "\n")
          .concat(o)
          .concat(i)
          .concat(s)
          .concat(p);
      }
      var k = (function (t) {
        function e(t) {
          var r;
          if (
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            "object" !== l(t) || null === t)
          )
            throw new b("options", "Object", t);
          var i = t.message,
            o = t.operator,
            f = t.stackStartFn,
            u = t.actual,
            c = t.expected,
            h = Error.stackTraceLimit;
          if (((Error.stackTraceLimit = 0), null != i))
            r = a(this, d(e).call(this, String(i)));
          else if (
            (n.stderr &&
              n.stderr.isTTY &&
              (n.stderr &&
              n.stderr.getColorDepth &&
              1 !== n.stderr.getColorDepth()
                ? ((y = "\x1b[34m"),
                  (g = "\x1b[32m"),
                  (w = "\x1b[39m"),
                  (v = "\x1b[31m"))
                : ((y = ""), (g = ""), (w = ""), (v = ""))),
            "object" === l(u) &&
              null !== u &&
              "object" === l(c) &&
              null !== c &&
              "stack" in u &&
              u instanceof Error &&
              "stack" in c &&
              c instanceof Error &&
              ((u = M(u)), (c = M(c))),
            "deepStrictEqual" === o || "strictEqual" === o)
          )
            r = a(this, d(e).call(this, E(u, c, o)));
          else if ("notDeepStrictEqual" === o || "notStrictEqual" === o) {
            var p = _[o],
              m = S(u).split("\n");
            if (
              ("notStrictEqual" === o &&
                "object" === l(u) &&
                null !== u &&
                (p = _.notStrictEqualObject),
              m.length > 30)
            )
              for (m[26] = "".concat(y, "...").concat(w); m.length > 27; )
                m.pop();
            r =
              1 === m.length
                ? a(this, d(e).call(this, "".concat(p, " ").concat(m[0])))
                : a(
                    this,
                    d(e).call(
                      this,
                      "".concat(p, "\n\n").concat(m.join("\n"), "\n")
                    )
                  );
          } else {
            var k = S(u),
              A = "",
              x = _[o];
            "notDeepEqual" === o || "notEqual" === o
              ? (k = "".concat(_[o], "\n\n").concat(k)).length > 1024 &&
                (k = "".concat(k.slice(0, 1021), "..."))
              : ((A = "".concat(S(c))),
                k.length > 512 && (k = "".concat(k.slice(0, 509), "...")),
                A.length > 512 && (A = "".concat(A.slice(0, 509), "...")),
                "deepEqual" === o || "equal" === o
                  ? (k = "".concat(x, "\n\n").concat(k, "\n\nshould equal\n\n"))
                  : (A = " ".concat(o, " ").concat(A))),
              (r = a(this, d(e).call(this, "".concat(k).concat(A))));
          }
          return (
            (Error.stackTraceLimit = h),
            (r.generatedMessage = !i),
            Object.defineProperty(s(r), "name", {
              value: "AssertionError [ERR_ASSERTION]",
              enumerable: !1,
              writable: !0,
              configurable: !0,
            }),
            (r.code = "ERR_ASSERTION"),
            (r.actual = u),
            (r.expected = c),
            (r.operator = o),
            Error.captureStackTrace && Error.captureStackTrace(s(r), f),
            r.stack,
            (r.name = "AssertionError"),
            a(r)
          );
        }
        var r, f, u;
        return (
          (function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && h(t, e);
          })(e, t),
          (r = e),
          (f = [
            {
              key: "toString",
              value: function () {
                return ""
                  .concat(this.name, " [")
                  .concat(this.code, "]: ")
                  .concat(this.message);
              },
            },
            {
              key: p.custom,
              value: function (t, e) {
                return p(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              t
                            ).enumerable;
                          })
                        )),
                        n.forEach(function (e) {
                          i(t, e, r[e]);
                        });
                    }
                    return t;
                  })({}, e, { customInspect: !1, depth: 0 })
                );
              },
            },
          ]) && o(r.prototype, f),
          u && o(r, u),
          e
        );
      })(f(Error));
      t.exports = k;
    },
    1404: function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        return !e || ("object" !== n(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function o(t) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function a(t, e) {
        return (a =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var s,
        f,
        u = {};
      function c(t, e, r) {
        r || (r = Error);
        var n = (function (r) {
          function n(r, a, s) {
            var f;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((f = i(
                this,
                o(n).call(
                  this,
                  (function (t, r, n) {
                    return "string" === typeof e ? e : e(t, r, n);
                  })(r, a, s)
                )
              )).code = t),
              f
            );
          }
          return (
            (function (t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && a(t, e);
            })(n, r),
            n
          );
        })(r);
        u[t] = n;
      }
      function h(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      c(
        "ERR_AMBIGUOUS_ARGUMENT",
        'The "%s" argument is ambiguous. %s',
        TypeError
      ),
        c(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, i) {
            var o, a, f, u;
            if (
              (void 0 === s && (s = r(9619)),
              s("string" === typeof t, "'name' must be a string"),
              "string" === typeof e &&
              ((a = "not "), e.substr(!f || f < 0 ? 0 : +f, a.length) === a)
                ? ((o = "must not be"), (e = e.replace(/^not /, "")))
                : (o = "must be"),
              (function (t, e, r) {
                return (
                  (void 0 === r || r > t.length) && (r = t.length),
                  t.substring(r - e.length, r) === e
                );
              })(t, " argument"))
            )
              u = "The ".concat(t, " ").concat(o, " ").concat(h(e, "type"));
            else {
              var c = (function (t, e, r) {
                return (
                  "number" !== typeof r && (r = 0),
                  !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                );
              })(t, ".")
                ? "property"
                : "argument";
              u = 'The "'
                .concat(t, '" ')
                .concat(c, " ")
                .concat(o, " ")
                .concat(h(e, "type"));
            }
            return (u += ". Received type ".concat(n(i)));
          },
          TypeError
        ),
        c(
          "ERR_INVALID_ARG_VALUE",
          function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "is invalid";
            void 0 === f && (f = r(1323));
            var i = f.inspect(e);
            return (
              i.length > 128 && (i = "".concat(i.slice(0, 128), "...")),
              "The argument '"
                .concat(t, "' ")
                .concat(n, ". Received ")
                .concat(i)
            );
          },
          TypeError,
          RangeError
        ),
        c(
          "ERR_INVALID_RETURN_VALUE",
          function (t, e, r) {
            var i;
            return (
              (i =
                r && r.constructor && r.constructor.name
                  ? "instance of ".concat(r.constructor.name)
                  : "type ".concat(n(r))),
              "Expected "
                .concat(t, ' to be returned from the "')
                .concat(e, '"') + " function but got ".concat(i, ".")
            );
          },
          TypeError
        ),
        c(
          "ERR_MISSING_ARGS",
          function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            void 0 === s && (s = r(9619)),
              s(e.length > 0, "At least one arg needs to be specified");
            var i = "The ",
              o = e.length;
            switch (
              ((e = e.map(function (t) {
                return '"'.concat(t, '"');
              })),
              o)
            ) {
              case 1:
                i += "".concat(e[0], " argument");
                break;
              case 2:
                i += "".concat(e[0], " and ").concat(e[1], " arguments");
                break;
              default:
                (i += e.slice(0, o - 1).join(", ")),
                  (i += ", and ".concat(e[o - 1], " arguments"));
            }
            return "".concat(i, " must be specified");
          },
          TypeError
        ),
        (t.exports.codes = u);
    },
    118: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (f) {
              (i = !0), (o = f);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function i(t) {
        return (i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = void 0 !== /a/g.flags,
        a = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              return e.push(t);
            }),
            e
          );
        },
        s = function (t) {
          var e = [];
          return (
            t.forEach(function (t, r) {
              return e.push([r, t]);
            }),
            e
          );
        },
        f = Object.is ? Object.is : r(3822),
        u = Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols
          : function () {
              return [];
            },
        c = Number.isNaN ? Number.isNaN : r(4866);
      function h(t) {
        return t.call.bind(t);
      }
      var d = h(Object.prototype.hasOwnProperty),
        l = h(Object.prototype.propertyIsEnumerable),
        p = h(Object.prototype.toString),
        b = r(1323).types,
        m = b.isAnyArrayBuffer,
        y = b.isArrayBufferView,
        g = b.isDate,
        v = b.isMap,
        w = b.isRegExp,
        _ = b.isSet,
        M = b.isNativeError,
        S = b.isBoxedPrimitive,
        E = b.isNumberObject,
        k = b.isStringObject,
        A = b.isBooleanObject,
        x = b.isBigIntObject,
        I = b.isSymbolObject,
        O = b.isFloat32Array,
        R = b.isFloat64Array;
      function B(t) {
        if (0 === t.length || t.length > 10) return !0;
        for (var e = 0; e < t.length; e++) {
          var r = t.charCodeAt(e);
          if (r < 48 || r > 57) return !0;
        }
        return 10 === t.length && t >= Math.pow(2, 32);
      }
      function j(t) {
        return Object.keys(t)
          .filter(B)
          .concat(u(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
      }
      function P(t, e) {
        if (t === e) return 0;
        for (
          var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
          i < o;
          ++i
        )
          if (t[i] !== e[i]) {
            (r = t[i]), (n = e[i]);
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      }
      function T(t, e, r, n) {
        if (t === e) return 0 !== t || !r || f(t, e);
        if (r) {
          if ("object" !== i(t)) return "number" === typeof t && c(t) && c(e);
          if ("object" !== i(e) || null === t || null === e) return !1;
          if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
        } else {
          if (null === t || "object" !== i(t))
            return (null === e || "object" !== i(e)) && t == e;
          if (null === e || "object" !== i(e)) return !1;
        }
        var a,
          s,
          u,
          h,
          d = p(t);
        if (d !== p(e)) return !1;
        if (Array.isArray(t)) {
          if (t.length !== e.length) return !1;
          var l = j(t),
            b = j(e);
          return l.length === b.length && N(t, e, r, n, 1, l);
        }
        if ("[object Object]" === d && ((!v(t) && v(e)) || (!_(t) && _(e))))
          return !1;
        if (g(t)) {
          if (
            !g(e) ||
            Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)
          )
            return !1;
        } else if (w(t)) {
          if (
            !w(e) ||
            ((u = t),
            (h = e),
            !(o
              ? u.source === h.source && u.flags === h.flags
              : RegExp.prototype.toString.call(u) ===
                RegExp.prototype.toString.call(h)))
          )
            return !1;
        } else if (M(t) || t instanceof Error) {
          if (t.message !== e.message || t.name !== e.name) return !1;
        } else {
          if (y(t)) {
            if (r || (!O(t) && !R(t))) {
              if (
                !(function (t, e) {
                  return (
                    t.byteLength === e.byteLength &&
                    0 ===
                      P(
                        new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                        new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                      )
                  );
                })(t, e)
              )
                return !1;
            } else if (
              !(function (t, e) {
                if (t.byteLength !== e.byteLength) return !1;
                for (var r = 0; r < t.byteLength; r++)
                  if (t[r] !== e[r]) return !1;
                return !0;
              })(t, e)
            )
              return !1;
            var B = j(t),
              T = j(e);
            return B.length === T.length && N(t, e, r, n, 0, B);
          }
          if (_(t)) return !(!_(e) || t.size !== e.size) && N(t, e, r, n, 2);
          if (v(t)) return !(!v(e) || t.size !== e.size) && N(t, e, r, n, 3);
          if (m(t)) {
            if (
              ((s = e),
              (a = t).byteLength !== s.byteLength ||
                0 !== P(new Uint8Array(a), new Uint8Array(s)))
            )
              return !1;
          } else if (
            S(t) &&
            !(function (t, e) {
              return E(t)
                ? E(e) &&
                    f(
                      Number.prototype.valueOf.call(t),
                      Number.prototype.valueOf.call(e)
                    )
                : k(t)
                ? k(e) &&
                  String.prototype.valueOf.call(t) ===
                    String.prototype.valueOf.call(e)
                : A(t)
                ? A(e) &&
                  Boolean.prototype.valueOf.call(t) ===
                    Boolean.prototype.valueOf.call(e)
                : x(t)
                ? x(e) &&
                  BigInt.prototype.valueOf.call(t) ===
                    BigInt.prototype.valueOf.call(e)
                : I(e) &&
                  Symbol.prototype.valueOf.call(t) ===
                    Symbol.prototype.valueOf.call(e);
            })(t, e)
          )
            return !1;
        }
        return N(t, e, r, n, 0);
      }
      function C(t, e) {
        return e.filter(function (e) {
          return l(t, e);
        });
      }
      function N(t, e, r, n, i, o) {
        if (5 === arguments.length) {
          o = Object.keys(t);
          var a = Object.keys(e);
          if (o.length !== a.length) return !1;
        }
        for (var s = 0; s < o.length; s++) if (!d(e, o[s])) return !1;
        if (r && 5 === arguments.length) {
          var f = u(t);
          if (0 !== f.length) {
            var c = 0;
            for (s = 0; s < f.length; s++) {
              var h = f[s];
              if (l(t, h)) {
                if (!l(e, h)) return !1;
                o.push(h), c++;
              } else if (l(e, h)) return !1;
            }
            var p = u(e);
            if (f.length !== p.length && C(e, p).length !== c) return !1;
          } else {
            var b = u(e);
            if (0 !== b.length && 0 !== C(e, b).length) return !1;
          }
        }
        if (
          0 === o.length &&
          (0 === i || (1 === i && 0 === t.length) || 0 === t.size)
        )
          return !0;
        if (void 0 === n) n = { val1: new Map(), val2: new Map(), position: 0 };
        else {
          var m = n.val1.get(t);
          if (void 0 !== m) {
            var y = n.val2.get(e);
            if (void 0 !== y) return m === y;
          }
          n.position++;
        }
        n.val1.set(t, n.position), n.val2.set(e, n.position);
        var g = F(t, e, r, o, n, i);
        return n.val1.delete(t), n.val2.delete(e), g;
      }
      function L(t, e, r, n) {
        for (var i = a(t), o = 0; o < i.length; o++) {
          var s = i[o];
          if (T(e, s, r, n)) return t.delete(s), !0;
        }
        return !1;
      }
      function D(t) {
        switch (i(t)) {
          case "undefined":
            return null;
          case "object":
            return;
          case "symbol":
            return !1;
          case "string":
            t = +t;
          case "number":
            if (c(t)) return !1;
        }
        return !0;
      }
      function q(t, e, r) {
        var n = D(r);
        return null != n ? n : e.has(n) && !t.has(n);
      }
      function U(t, e, r, n, i) {
        var o = D(r);
        if (null != o) return o;
        var a = e.get(o);
        return (
          !((void 0 === a && !e.has(o)) || !T(n, a, !1, i)) &&
          !t.has(o) &&
          T(n, a, !1, i)
        );
      }
      function z(t, e, r, n, i, o) {
        for (var s = a(t), f = 0; f < s.length; f++) {
          var u = s[f];
          if (T(r, u, i, o) && T(n, e.get(u), i, o)) return t.delete(u), !0;
        }
        return !1;
      }
      function F(t, e, r, o, f, u) {
        var c = 0;
        if (2 === u) {
          if (
            !(function (t, e, r, n) {
              for (var o = null, s = a(t), f = 0; f < s.length; f++) {
                var u = s[f];
                if ("object" === i(u) && null !== u)
                  null === o && (o = new Set()), o.add(u);
                else if (!e.has(u)) {
                  if (r) return !1;
                  if (!q(t, e, u)) return !1;
                  null === o && (o = new Set()), o.add(u);
                }
              }
              if (null !== o) {
                for (var c = a(e), h = 0; h < c.length; h++) {
                  var d = c[h];
                  if ("object" === i(d) && null !== d) {
                    if (!L(o, d, r, n)) return !1;
                  } else if (!r && !t.has(d) && !L(o, d, r, n)) return !1;
                }
                return 0 === o.size;
              }
              return !0;
            })(t, e, r, f)
          )
            return !1;
        } else if (3 === u) {
          if (
            !(function (t, e, r, o) {
              for (var a = null, f = s(t), u = 0; u < f.length; u++) {
                var c = n(f[u], 2),
                  h = c[0],
                  d = c[1];
                if ("object" === i(h) && null !== h)
                  null === a && (a = new Set()), a.add(h);
                else {
                  var l = e.get(h);
                  if ((void 0 === l && !e.has(h)) || !T(d, l, r, o)) {
                    if (r) return !1;
                    if (!U(t, e, h, d, o)) return !1;
                    null === a && (a = new Set()), a.add(h);
                  }
                }
              }
              if (null !== a) {
                for (var p = s(e), b = 0; b < p.length; b++) {
                  var m = n(p[b], 2),
                    y = ((h = m[0]), m[1]);
                  if ("object" === i(h) && null !== h) {
                    if (!z(a, t, h, y, r, o)) return !1;
                  } else if (
                    !r &&
                    (!t.has(h) || !T(t.get(h), y, !1, o)) &&
                    !z(a, t, h, y, !1, o)
                  )
                    return !1;
                }
                return 0 === a.size;
              }
              return !0;
            })(t, e, r, f)
          )
            return !1;
        } else if (1 === u)
          for (; c < t.length; c++) {
            if (!d(t, c)) {
              if (d(e, c)) return !1;
              for (var h = Object.keys(t); c < h.length; c++) {
                var l = h[c];
                if (!d(e, l) || !T(t[l], e[l], r, f)) return !1;
              }
              return h.length === Object.keys(e).length;
            }
            if (!d(e, c) || !T(t[c], e[c], r, f)) return !1;
          }
        for (c = 0; c < o.length; c++) {
          var p = o[c];
          if (!T(t[p], e[p], r, f)) return !1;
        }
        return !0;
      }
      t.exports = {
        isDeepEqual: function (t, e) {
          return T(t, e, false);
        },
        isDeepStrictEqual: function (t, e) {
          return T(t, e, true);
        },
      };
    },
    4782: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = f(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = f(t),
            a = o[0],
            s = o[1],
            u = new i(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r;
              })(0, a, s)
            ),
            c = 0,
            h = s > 0 ? a - 4 : a;
          for (r = 0; r < h; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (u[c++] = (e >> 16) & 255),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e);
          2 === s &&
            ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
            (u[c++] = 255 & e));
          1 === s &&
            ((e =
              (n[t.charCodeAt(r)] << 10) |
              (n[t.charCodeAt(r + 1)] << 4) |
              (n[t.charCodeAt(r + 2)] >> 2)),
            (u[c++] = (e >> 8) & 255),
            (u[c++] = 255 & e));
          return u;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], a = 16383, s = 0, f = n - i;
            s < f;
            s += a
          )
            o.push(u(t, s, s + a > f ? f : s + a));
          1 === i
            ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          n = [],
          i = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          s = o.length;
        a < s;
        ++a
      )
        (r[a] = o[a]), (n[o.charCodeAt(a)] = a);
      function f(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function u(t, e, n) {
        for (var i, o, a = [], s = e; s < n; s += 3)
          (i =
            ((t[s] << 16) & 16711680) +
            ((t[s + 1] << 8) & 65280) +
            (255 & t[s + 2])),
            a.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return a.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    3785: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(5545).Buffer;
        } catch (k) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15;
        }
        function f(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
            var s = t.charCodeAt(a) - 48;
            (i *= n), (i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return i;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" === typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (a = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (a = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              a = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                s = Math.min(o, o - a) + r,
                f = 0,
                c = r;
              c < s;
              c += n
            )
              (f = u(t, c, c + n, e)),
                this.imuln(i),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var h = 1;
              for (f = u(t, c, t.length, e), c = 0; c < a; c++) h *= e;
              this.imuln(h),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this.strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          h = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          d = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var c = f >>> 26,
                h = 67108863 & f,
                d = Math.min(u, e.length - 1),
                l = Math.max(0, u - t.length + 1);
              l <= d;
              l++
            ) {
              var p = (u - l) | 0;
              (c +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) /
                  67108864) |
                0),
                (h = 67108863 & a);
            }
            (r.words[u] = 0 | h), (f = 0 | c);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << i) | o)).toString(16);
              (r =
                0 !== (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? c[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = h[t],
              l = d[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(l).toString(t);
              r = (p = p.idivn(l)).isZero() ? b + r : c[u - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return n("undefined" !== typeof a), this.toArrayLike(a, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"),
              this.strip();
            var a,
              s,
              f = "le" === e,
              u = new t(o),
              c = this.clone();
            if (f) {
              for (s = 0; !c.isZero(); s++)
                (a = c.andln(255)), c.iushrn(8), (u[s] = a);
              for (; s < o; s++) u[s] = 0;
            } else {
              for (s = 0; s < o - i; s++) u[s] = 0;
              for (s = 0; !c.isZero(); s++)
                (a = c.andln(255)), c.iushrn(8), (u[o - s - 1] = a);
            }
            return u;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              n,
              i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, a = 0; a < n.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            c = 0 | a[0],
            h = 8191 & c,
            d = c >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            y = 8191 & m,
            g = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            x = k >>> 13,
            I = 0 | a[6],
            O = 8191 & I,
            R = I >>> 13,
            B = 0 | a[7],
            j = 8191 & B,
            P = B >>> 13,
            T = 0 | a[8],
            C = 8191 & T,
            N = T >>> 13,
            L = 0 | a[9],
            D = 8191 & L,
            q = L >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            F = U >>> 13,
            H = 0 | s[1],
            K = 8191 & H,
            W = H >>> 13,
            V = 0 | s[2],
            G = 8191 & V,
            Z = V >>> 13,
            $ = 0 | s[3],
            X = 8191 & $,
            J = $ >>> 13,
            Y = 0 | s[4],
            Q = 8191 & Y,
            tt = Y >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | s[6],
            ot = 8191 & it,
            at = it >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ut = st >>> 13,
            ct = 0 | s[8],
            ht = 8191 & ct,
            dt = ct >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((u + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, F)) + Math.imul(d, z)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(d, F)) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, F)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, F));
          var yt =
            (((u + (n = (n + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, W)) | 0) + Math.imul(d, K)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, W)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(y, z)),
            (i = ((i = Math.imul(y, F)) + Math.imul(g, z)) | 0),
            (o = Math.imul(g, F)),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(b, K)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var gt =
            (((u + (n = (n + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(d, G)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, Z)) | 0) + (i >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, F)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, F)),
            (n = (n + Math.imul(y, K)) | 0),
            (i = ((i = (i + Math.imul(y, W)) | 0) + Math.imul(g, K)) | 0),
            (o = (o + Math.imul(g, W)) | 0),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, Z)) | 0);
          var vt =
            (((u + (n = (n + Math.imul(h, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(d, X)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(S, z)),
            (i = ((i = Math.imul(S, F)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, F)),
            (n = (n + Math.imul(w, K)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (n = (n + Math.imul(y, G)) | 0),
            (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, Z)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(d, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(A, z)),
            (i = ((i = Math.imul(A, F)) + Math.imul(x, z)) | 0),
            (o = Math.imul(x, F)),
            (n = (n + Math.imul(S, K)) | 0),
            (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(E, K)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(_, G)) | 0),
            (o = (o + Math.imul(_, Z)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(g, X)) | 0),
            (o = (o + Math.imul(g, J)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((u + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(d, rt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(O, z)),
            (i = ((i = Math.imul(O, F)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, F)),
            (n = (n + Math.imul(A, K)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(x, K)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(S, G)) | 0),
            (i = ((i = (i + Math.imul(S, Z)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, Z)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(_, X)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0);
          var Mt =
            (((u + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, at)) | 0) + Math.imul(d, ot)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, at)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(j, z)),
            (i = ((i = Math.imul(j, F)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, F)),
            (n = (n + Math.imul(O, K)) | 0),
            (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Z)) | 0) + Math.imul(x, G)) | 0),
            (o = (o + Math.imul(x, Z)) | 0),
            (n = (n + Math.imul(S, X)) | 0),
            (i = ((i = (i + Math.imul(S, J)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(y, rt)) | 0),
            (i = ((i = (i + Math.imul(y, nt)) | 0) + Math.imul(g, rt)) | 0),
            (o = (o + Math.imul(g, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((u + (n = (n + Math.imul(h, ft)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ut)) | 0) + Math.imul(d, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, ut)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, F)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, F)),
            (n = (n + Math.imul(j, K)) | 0),
            (i = ((i = (i + Math.imul(j, W)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(O, G)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(y, ot)) | 0),
            (i = ((i = (i + Math.imul(y, at)) | 0) + Math.imul(g, ot)) | 0),
            (o = (o + Math.imul(g, at)) | 0),
            (n = (n + Math.imul(p, ft)) | 0),
            (i = ((i = (i + Math.imul(p, ut)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ut)) | 0);
          var Et =
            (((u + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, dt)) | 0) + Math.imul(d, ht)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(D, z)),
            (i = ((i = Math.imul(D, F)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, F)),
            (n = (n + Math.imul(C, K)) | 0),
            (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (n = (n + Math.imul(j, G)) | 0),
            (i = ((i = (i + Math.imul(j, Z)) | 0) + Math.imul(P, G)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(O, X)) | 0),
            (i = ((i = (i + Math.imul(O, J)) | 0) + Math.imul(R, X)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (i = ((i = (i + Math.imul(S, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (n = (n + Math.imul(y, ft)) | 0),
            (i = ((i = (i + Math.imul(y, ut)) | 0) + Math.imul(g, ft)) | 0),
            (o = (o + Math.imul(g, ut)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ht)) | 0),
            (o = (o + Math.imul(b, dt)) | 0);
          var kt =
            (((u + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, bt)) | 0) + Math.imul(d, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(D, K)),
            (i = ((i = Math.imul(D, W)) + Math.imul(q, K)) | 0),
            (o = Math.imul(q, W)),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Z)) | 0),
            (n = (n + Math.imul(j, X)) | 0),
            (i = ((i = (i + Math.imul(j, J)) | 0) + Math.imul(P, X)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(O, Q)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(x, rt)) | 0),
            (o = (o + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(S, ot)) | 0),
            (i = ((i = (i + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (n = (n + Math.imul(w, ft)) | 0),
            (i = ((i = (i + Math.imul(w, ut)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ut)) | 0),
            (n = (n + Math.imul(y, ht)) | 0),
            (i = ((i = (i + Math.imul(y, dt)) | 0) + Math.imul(g, ht)) | 0),
            (o = (o + Math.imul(g, dt)) | 0);
          var At =
            (((u + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(D, G)),
            (i = ((i = Math.imul(D, Z)) + Math.imul(q, G)) | 0),
            (o = Math.imul(q, Z)),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(N, X)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(j, Q)) | 0),
            (i = ((i = (i + Math.imul(j, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, at)) | 0) + Math.imul(x, ot)) | 0),
            (o = (o + Math.imul(x, at)) | 0),
            (n = (n + Math.imul(S, ft)) | 0),
            (i = ((i = (i + Math.imul(S, ut)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ut)) | 0),
            (n = (n + Math.imul(w, ht)) | 0),
            (i = ((i = (i + Math.imul(w, dt)) | 0) + Math.imul(_, ht)) | 0),
            (o = (o + Math.imul(_, dt)) | 0);
          var xt =
            (((u + (n = (n + Math.imul(y, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, bt)) | 0) + Math.imul(g, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(D, X)),
            (i = ((i = Math.imul(D, J)) + Math.imul(q, X)) | 0),
            (o = Math.imul(q, J)),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(N, Q)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(j, rt)) | 0),
            (i = ((i = (i + Math.imul(j, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (n = (n + Math.imul(A, ft)) | 0),
            (i = ((i = (i + Math.imul(A, ut)) | 0) + Math.imul(x, ft)) | 0),
            (o = (o + Math.imul(x, ut)) | 0),
            (n = (n + Math.imul(S, ht)) | 0),
            (i = ((i = (i + Math.imul(S, dt)) | 0) + Math.imul(E, ht)) | 0),
            (o = (o + Math.imul(E, dt)) | 0);
          var It =
            (((u + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, bt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(D, Q)),
            (i = ((i = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(j, ot)) | 0),
            (i = ((i = (i + Math.imul(j, at)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, at)) | 0),
            (n = (n + Math.imul(O, ft)) | 0),
            (i = ((i = (i + Math.imul(O, ut)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ut)) | 0),
            (n = (n + Math.imul(A, ht)) | 0),
            (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(x, ht)) | 0),
            (o = (o + Math.imul(x, dt)) | 0);
          var Ot =
            (((u + (n = (n + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(E, bt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(D, rt)),
            (i = ((i = Math.imul(D, nt)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, nt)),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, at)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, at)) | 0),
            (n = (n + Math.imul(j, ft)) | 0),
            (i = ((i = (i + Math.imul(j, ut)) | 0) + Math.imul(P, ft)) | 0),
            (o = (o + Math.imul(P, ut)) | 0),
            (n = (n + Math.imul(O, ht)) | 0),
            (i = ((i = (i + Math.imul(O, dt)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, dt)) | 0);
          var Rt =
            (((u + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(x, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(x, bt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (n = Math.imul(D, ot)),
            (i = ((i = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (n = (n + Math.imul(C, ft)) | 0),
            (i = ((i = (i + Math.imul(C, ut)) | 0) + Math.imul(N, ft)) | 0),
            (o = (o + Math.imul(N, ut)) | 0),
            (n = (n + Math.imul(j, ht)) | 0),
            (i = ((i = (i + Math.imul(j, dt)) | 0) + Math.imul(P, ht)) | 0),
            (o = (o + Math.imul(P, dt)) | 0);
          var Bt =
            (((u + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(R, bt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(D, ft)),
            (i = ((i = Math.imul(D, ut)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ut)),
            (n = (n + Math.imul(C, ht)) | 0),
            (i = ((i = (i + Math.imul(C, dt)) | 0) + Math.imul(N, ht)) | 0),
            (o = (o + Math.imul(N, dt)) | 0);
          var jt =
            (((u + (n = (n + Math.imul(j, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(j, bt)) | 0) + Math.imul(P, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863),
            (n = Math.imul(D, ht)),
            (i = ((i = Math.imul(D, dt)) + Math.imul(q, ht)) | 0),
            (o = Math.imul(q, dt));
          var Pt =
            (((u + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, bt)) | 0) + Math.imul(N, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(N, bt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863);
          var Tt =
            (((u + (n = Math.imul(D, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(q, bt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (f[0] = mt),
            (f[1] = yt),
            (f[2] = gt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = xt),
            (f[12] = It),
            (f[13] = Ot),
            (f[14] = Rt),
            (f[15] = Bt),
            (f[16] = jt),
            (f[17] = Pt),
            (f[18] = Tt),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function b(t, e, r) {
          return new m().mulp(t, e, r);
        }
        function m(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = l),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? p(this, t, e)
              : r < 63
              ? l(this, t, e)
              : r < 1024
              ? (function (t, e, r) {
                  (r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length);
                  for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (
                      var s = 67108863 & n,
                        f = Math.min(o, e.length - 1),
                        u = Math.max(0, o - t.length + 1);
                      u <= f;
                      u++
                    ) {
                      var c = o - u,
                        h = (0 | t.words[c]) * (0 | e.words[u]),
                        d = 67108863 & h;
                      (s = 67108863 & (d = (d + s) | 0)),
                        (i +=
                          (a =
                            ((a = (a + ((h / 67108864) | 0)) | 0) +
                              (d >>> 26)) |
                            0) >>> 26),
                        (a &= 67108863);
                    }
                    (r.words[o] = s), (n = a), (a = i);
                  }
                  return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                })(this, t, e)
              : b(this, t, e);
          }),
          (m.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (m.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (m.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (m.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  c = 0;
                c < i;
                c += s
              )
                for (var h = f, d = u, l = 0; l < a; l++) {
                  var p = r[c + l],
                    b = n[c + l],
                    m = r[c + l + a],
                    y = n[c + l + a],
                    g = h * m - d * y;
                  (y = h * y + d * m),
                    (m = g),
                    (r[c + l] = p + m),
                    (n[c + l] = b + y),
                    (r[c + l + a] = p - m),
                    (n[c + l + a] = b - y),
                    l !== s &&
                      ((g = f * h - u * d), (d = f * d + u * h), (h = g));
                }
          }),
          (m.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (m.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (m.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (m.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (m.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (m.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = new Array(n),
              s = new Array(n),
              f = new Array(n),
              u = new Array(n),
              c = new Array(n),
              h = new Array(n),
              d = r.words;
            (d.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, c, h, n, i);
            for (var l = 0; l < n; l++) {
              var p = s[l] * c[l] - f[l] * h[l];
              (f[l] = s[l] * h[l] + f[l] * c[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, d, o, n, i),
              this.conjugate(d, o, n),
              this.normalize13b(d, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), b(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            n("number" === typeof t), n(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
              (e >>= 26),
                (e += (i / 67108864) | 0),
                (e += o >>> 26),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] & (1 << i)) >>> i;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (c << (26 - o)) | (h >>> o)), (c = h & s);
            }
            return (
              f && 0 !== c && (f.words[f.length++] = c),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (n(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this.strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              a = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((i = i.ushln(r)), n.iushln(r), (a = 0 | i.words[i.length - 1]));
            var s,
              f = n.length - i.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var u = 0; u < s.length; u++) s.words[u] = 0;
            }
            var c = n.clone()._ishlnsubmul(i, 1, f);
            0 === c.negative && ((n = c), s && (s.words[f] = 1));
            for (var h = f - 1; h >= 0; h--) {
              var d =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1]);
              for (
                d = Math.min((d / a) | 0, 67108863), n._ishlnsubmul(i, d, h);
                0 !== n.negative;

              )
                d--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1);
              s && (s.words[h] = d);
            }
            return (
              s && s.strip(),
              n.strip(),
              "div" !== e && 0 !== r && n.iushrn(r),
              { div: s || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (i = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: i, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (i = s.div.neg()),
                  { div: i, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var i, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            n(t <= 67108863);
            for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--)
              r = (e * r + (0 | this.words[i])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            n(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (i / t) | 0), (e = i % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var d = 0, l = 1;
                0 === (e.words[0] & l) && d < 26;
                ++d, l <<= 1
              );
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(c), a.isub(h)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(h)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var u = 0, c = 1;
                0 === (e.words[0] & c) && u < 26;
                ++u, c <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var h = 0, d = 1;
                0 === (r.words[0] & d) && h < 26;
                ++h, d <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new S(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var y = { k256: null, p224: null, p192: null, p25519: null };
        function g(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          g.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function w() {
          g.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function _() {
          g.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function M() {
          g.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function E(t) {
          S.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (g.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (g.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (g.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (g.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(v, g),
          (v.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var a = 0 | t.words[i];
              (t.words[i - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (v.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(w, g),
          i(_, g),
          i(M, g),
          (M.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (y[t]) return y[t];
            var e;
            if ("k256" === t) e = new v();
            else if ("p224" === t) e = new w();
            else if ("p192" === t) e = new _();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new M();
            }
            return (y[t] = e), e;
          }),
          (S.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (S.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (S.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (S.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (S.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (S.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (S.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (S.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (S.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (S.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (S.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (S.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new o(2 * c * c).toRed(this);
              0 !== this.pow(c, u).cmp(f);

            )
              c.redIAdd(f);
            for (
              var h = this.pow(c, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                l = this.pow(t, i),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              n(m < p);
              var y = this.pow(h, new o(1).iushln(p - m - 1));
              (d = d.redMul(y)), (h = y.redSqr()), (l = l.redMul(h)), (p = m);
            }
            return d;
          }),
          (S.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (S.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], c = f - 1; c >= 0; c--) {
                var h = (u >> c) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== a
                    ? ((a <<= 1),
                      (a |= h),
                      (4 === ++s || (0 === n && 0 === c)) &&
                        ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return i;
          }),
          (S.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (S.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new E(t);
          }),
          i(E, S),
          (E.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (E.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (E.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (E.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (E.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    9154: function (t, e, r) {
      var n;
      function i(t) {
        this.rand = t;
      }
      if (
        ((t.exports = function (t) {
          return n || (n = new i(null)), n.generate(t);
        }),
        (t.exports.Rand = i),
        (i.prototype.generate = function (t) {
          return this._rand(t);
        }),
        (i.prototype._rand = function (t) {
          if (this.rand.getBytes) return this.rand.getBytes(t);
          for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
            e[r] = this.rand.getByte();
          return e;
        }),
        "object" === typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (i.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.crypto.getRandomValues(e), e;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (i.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.msCrypto.getRandomValues(e), e;
            })
          : "object" === typeof window &&
            (i.prototype._rand = function () {
              throw new Error("Not implemented yet");
            });
      else
        try {
          var o = r(6047);
          if ("function" !== typeof o.randomBytes)
            throw new Error("Not supported");
          i.prototype._rand = function (t) {
            return o.randomBytes(t);
          };
        } catch (a) {}
    },
    238: function (t, e, r) {
      var n = r(7172).Buffer;
      function i(t) {
        n.isBuffer(t) || (t = n.from(t));
        for (var e = (t.length / 4) | 0, r = new Array(e), i = 0; i < e; i++)
          r[i] = t.readUInt32BE(4 * i);
        return r;
      }
      function o(t) {
        for (; 0 < t.length; t++) t[0] = 0;
      }
      function a(t, e, r, n, i) {
        for (
          var o,
            a,
            s,
            f,
            u = r[0],
            c = r[1],
            h = r[2],
            d = r[3],
            l = t[0] ^ e[0],
            p = t[1] ^ e[1],
            b = t[2] ^ e[2],
            m = t[3] ^ e[3],
            y = 4,
            g = 1;
          g < i;
          g++
        )
          (o =
            u[l >>> 24] ^
            c[(p >>> 16) & 255] ^
            h[(b >>> 8) & 255] ^
            d[255 & m] ^
            e[y++]),
            (a =
              u[p >>> 24] ^
              c[(b >>> 16) & 255] ^
              h[(m >>> 8) & 255] ^
              d[255 & l] ^
              e[y++]),
            (s =
              u[b >>> 24] ^
              c[(m >>> 16) & 255] ^
              h[(l >>> 8) & 255] ^
              d[255 & p] ^
              e[y++]),
            (f =
              u[m >>> 24] ^
              c[(l >>> 16) & 255] ^
              h[(p >>> 8) & 255] ^
              d[255 & b] ^
              e[y++]),
            (l = o),
            (p = a),
            (b = s),
            (m = f);
        return (
          (o =
            ((n[l >>> 24] << 24) |
              (n[(p >>> 16) & 255] << 16) |
              (n[(b >>> 8) & 255] << 8) |
              n[255 & m]) ^
            e[y++]),
          (a =
            ((n[p >>> 24] << 24) |
              (n[(b >>> 16) & 255] << 16) |
              (n[(m >>> 8) & 255] << 8) |
              n[255 & l]) ^
            e[y++]),
          (s =
            ((n[b >>> 24] << 24) |
              (n[(m >>> 16) & 255] << 16) |
              (n[(l >>> 8) & 255] << 8) |
              n[255 & p]) ^
            e[y++]),
          (f =
            ((n[m >>> 24] << 24) |
              (n[(l >>> 16) & 255] << 16) |
              (n[(p >>> 8) & 255] << 8) |
              n[255 & b]) ^
            e[y++]),
          [(o >>>= 0), (a >>>= 0), (s >>>= 0), (f >>>= 0)]
        );
      }
      var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        f = (function () {
          for (var t = new Array(256), e = 0; e < 256; e++)
            t[e] = e < 128 ? e << 1 : (e << 1) ^ 283;
          for (
            var r = [],
              n = [],
              i = [[], [], [], []],
              o = [[], [], [], []],
              a = 0,
              s = 0,
              f = 0;
            f < 256;
            ++f
          ) {
            var u = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
            (u = (u >>> 8) ^ (255 & u) ^ 99), (r[a] = u), (n[u] = a);
            var c = t[a],
              h = t[c],
              d = t[h],
              l = (257 * t[u]) ^ (16843008 * u);
            (i[0][a] = (l << 24) | (l >>> 8)),
              (i[1][a] = (l << 16) | (l >>> 16)),
              (i[2][a] = (l << 8) | (l >>> 24)),
              (i[3][a] = l),
              (l = (16843009 * d) ^ (65537 * h) ^ (257 * c) ^ (16843008 * a)),
              (o[0][u] = (l << 24) | (l >>> 8)),
              (o[1][u] = (l << 16) | (l >>> 16)),
              (o[2][u] = (l << 8) | (l >>> 24)),
              (o[3][u] = l),
              0 === a
                ? (a = s = 1)
                : ((a = c ^ t[t[t[d ^ c]]]), (s ^= t[t[s]]));
          }
          return { SBOX: r, INV_SBOX: n, SUB_MIX: i, INV_SUB_MIX: o };
        })();
      function u(t) {
        (this._key = i(t)), this._reset();
      }
      (u.blockSize = 16),
        (u.keySize = 32),
        (u.prototype.blockSize = u.blockSize),
        (u.prototype.keySize = u.keySize),
        (u.prototype._reset = function () {
          for (
            var t = this._key,
              e = t.length,
              r = e + 6,
              n = 4 * (r + 1),
              i = [],
              o = 0;
            o < e;
            o++
          )
            i[o] = t[o];
          for (o = e; o < n; o++) {
            var a = i[o - 1];
            o % e === 0
              ? ((a = (a << 8) | (a >>> 24)),
                (a =
                  (f.SBOX[a >>> 24] << 24) |
                  (f.SBOX[(a >>> 16) & 255] << 16) |
                  (f.SBOX[(a >>> 8) & 255] << 8) |
                  f.SBOX[255 & a]),
                (a ^= s[(o / e) | 0] << 24))
              : e > 6 &&
                o % e === 4 &&
                (a =
                  (f.SBOX[a >>> 24] << 24) |
                  (f.SBOX[(a >>> 16) & 255] << 16) |
                  (f.SBOX[(a >>> 8) & 255] << 8) |
                  f.SBOX[255 & a]),
              (i[o] = i[o - e] ^ a);
          }
          for (var u = [], c = 0; c < n; c++) {
            var h = n - c,
              d = i[h - (c % 4 ? 0 : 4)];
            u[c] =
              c < 4 || h <= 4
                ? d
                : f.INV_SUB_MIX[0][f.SBOX[d >>> 24]] ^
                  f.INV_SUB_MIX[1][f.SBOX[(d >>> 16) & 255]] ^
                  f.INV_SUB_MIX[2][f.SBOX[(d >>> 8) & 255]] ^
                  f.INV_SUB_MIX[3][f.SBOX[255 & d]];
          }
          (this._nRounds = r),
            (this._keySchedule = i),
            (this._invKeySchedule = u);
        }),
        (u.prototype.encryptBlockRaw = function (t) {
          return a(
            (t = i(t)),
            this._keySchedule,
            f.SUB_MIX,
            f.SBOX,
            this._nRounds
          );
        }),
        (u.prototype.encryptBlock = function (t) {
          var e = this.encryptBlockRaw(t),
            r = n.allocUnsafe(16);
          return (
            r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
          );
        }),
        (u.prototype.decryptBlock = function (t) {
          var e = (t = i(t))[1];
          (t[1] = t[3]), (t[3] = e);
          var r = a(
              t,
              this._invKeySchedule,
              f.INV_SUB_MIX,
              f.INV_SBOX,
              this._nRounds
            ),
            o = n.allocUnsafe(16);
          return (
            o.writeUInt32BE(r[0], 0),
            o.writeUInt32BE(r[3], 4),
            o.writeUInt32BE(r[2], 8),
            o.writeUInt32BE(r[1], 12),
            o
          );
        }),
        (u.prototype.scrub = function () {
          o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }),
        (t.exports.AES = u);
    },
    8587: function (t, e, r) {
      var n = r(238),
        i = r(7172).Buffer,
        o = r(3081),
        a = r(87),
        s = r(1219),
        f = r(7752),
        u = r(3480);
      function c(t, e, r, a) {
        o.call(this);
        var f = i.alloc(4, 0);
        this._cipher = new n.AES(e);
        var c = this._cipher.encryptBlock(f);
        (this._ghash = new s(c)),
          (r = (function (t, e, r) {
            if (12 === e.length)
              return (
                (t._finID = i.concat([e, i.from([0, 0, 0, 1])])),
                i.concat([e, i.from([0, 0, 0, 2])])
              );
            var n = new s(r),
              o = e.length,
              a = o % 16;
            n.update(e),
              a && ((a = 16 - a), n.update(i.alloc(a, 0))),
              n.update(i.alloc(8, 0));
            var f = 8 * o,
              c = i.alloc(8);
            c.writeUIntBE(f, 0, 8), n.update(c), (t._finID = n.state);
            var h = i.from(t._finID);
            return u(h), h;
          })(this, r, c)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = a),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = t),
          (this._authTag = null),
          (this._called = !1);
      }
      a(c, o),
        (c.prototype._update = function (t) {
          if (!this._called && this._alen) {
            var e = 16 - (this._alen % 16);
            e < 16 && ((e = i.alloc(e, 0)), this._ghash.update(e));
          }
          this._called = !0;
          var r = this._mode.encrypt(this, t);
          return (
            this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            (this._len += t.length),
            r
          );
        }),
        (c.prototype._final = function () {
          if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
          var t = f(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          );
          if (
            this._decrypt &&
            (function (t, e) {
              var r = 0;
              t.length !== e.length && r++;
              for (var n = Math.min(t.length, e.length), i = 0; i < n; ++i)
                r += t[i] ^ e[i];
              return r;
            })(t, this._authTag)
          )
            throw new Error("Unsupported state or unable to authenticate data");
          (this._authTag = t), this._cipher.scrub();
        }),
        (c.prototype.getAuthTag = function () {
          if (this._decrypt || !i.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
          return this._authTag;
        }),
        (c.prototype.setAuthTag = function (t) {
          if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
          this._authTag = t;
        }),
        (c.prototype.setAAD = function (t) {
          if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
          this._ghash.update(t), (this._alen += t.length);
        }),
        (t.exports = c);
    },
    8901: function (t, e, r) {
      var n = r(5074),
        i = r(2576),
        o = r(4636);
      (e.createCipher = e.Cipher = n.createCipher),
        (e.createCipheriv = e.Cipheriv = n.createCipheriv),
        (e.createDecipher = e.Decipher = i.createDecipher),
        (e.createDecipheriv = e.Decipheriv = i.createDecipheriv),
        (e.listCiphers = e.getCiphers =
          function () {
            return Object.keys(o);
          });
    },
    2576: function (t, e, r) {
      var n = r(8587),
        i = r(7172).Buffer,
        o = r(3834),
        a = r(2385),
        s = r(3081),
        f = r(238),
        u = r(5883);
      function c(t, e, r) {
        s.call(this),
          (this._cache = new h()),
          (this._last = void 0),
          (this._cipher = new f.AES(e)),
          (this._prev = i.from(r)),
          (this._mode = t),
          (this._autopadding = !0);
      }
      function h() {
        this.cache = i.allocUnsafe(0);
      }
      function d(t, e, r) {
        var s = o[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if (
          ("string" === typeof r && (r = i.from(r)),
          "GCM" !== s.mode && r.length !== s.iv)
        )
          throw new TypeError("invalid iv length " + r.length);
        if (("string" === typeof e && (e = i.from(e)), e.length !== s.key / 8))
          throw new TypeError("invalid key length " + e.length);
        return "stream" === s.type
          ? new a(s.module, e, r, !0)
          : "auth" === s.type
          ? new n(s.module, e, r, !0)
          : new c(s.module, e, r);
      }
      r(87)(c, s),
        (c.prototype._update = function (t) {
          var e, r;
          this._cache.add(t);
          for (var n = []; (e = this._cache.get(this._autopadding)); )
            (r = this._mode.decrypt(this, e)), n.push(r);
          return i.concat(n);
        }),
        (c.prototype._final = function () {
          var t = this._cache.flush();
          if (this._autopadding)
            return (function (t) {
              var e = t[15];
              if (e < 1 || e > 16) throw new Error("unable to decrypt data");
              var r = -1;
              for (; ++r < e; )
                if (t[r + (16 - e)] !== e)
                  throw new Error("unable to decrypt data");
              if (16 === e) return;
              return t.slice(0, 16 - e);
            })(this._mode.decrypt(this, t));
          if (t) throw new Error("data not multiple of block length");
        }),
        (c.prototype.setAutoPadding = function (t) {
          return (this._autopadding = !!t), this;
        }),
        (h.prototype.add = function (t) {
          this.cache = i.concat([this.cache, t]);
        }),
        (h.prototype.get = function (t) {
          var e;
          if (t) {
            if (this.cache.length > 16)
              return (
                (e = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                e
              );
          } else if (this.cache.length >= 16)
            return (
              (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              e
            );
          return null;
        }),
        (h.prototype.flush = function () {
          if (this.cache.length) return this.cache;
        }),
        (e.createDecipher = function (t, e) {
          var r = o[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var n = u(e, !1, r.key, r.iv);
          return d(t, n.key, n.iv);
        }),
        (e.createDecipheriv = d);
    },
    5074: function (t, e, r) {
      var n = r(3834),
        i = r(8587),
        o = r(7172).Buffer,
        a = r(2385),
        s = r(3081),
        f = r(238),
        u = r(5883);
      function c(t, e, r) {
        s.call(this),
          (this._cache = new d()),
          (this._cipher = new f.AES(e)),
          (this._prev = o.from(r)),
          (this._mode = t),
          (this._autopadding = !0);
      }
      r(87)(c, s),
        (c.prototype._update = function (t) {
          var e, r;
          this._cache.add(t);
          for (var n = []; (e = this._cache.get()); )
            (r = this._mode.encrypt(this, e)), n.push(r);
          return o.concat(n);
        });
      var h = o.alloc(16, 16);
      function d() {
        this.cache = o.allocUnsafe(0);
      }
      function l(t, e, r) {
        var s = n[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if (("string" === typeof e && (e = o.from(e)), e.length !== s.key / 8))
          throw new TypeError("invalid key length " + e.length);
        if (
          ("string" === typeof r && (r = o.from(r)),
          "GCM" !== s.mode && r.length !== s.iv)
        )
          throw new TypeError("invalid iv length " + r.length);
        return "stream" === s.type
          ? new a(s.module, e, r)
          : "auth" === s.type
          ? new i(s.module, e, r)
          : new c(s.module, e, r);
      }
      (c.prototype._final = function () {
        var t = this._cache.flush();
        if (this._autopadding)
          return (t = this._mode.encrypt(this, t)), this._cipher.scrub(), t;
        if (!t.equals(h))
          throw (
            (this._cipher.scrub(),
            new Error("data not multiple of block length"))
          );
      }),
        (c.prototype.setAutoPadding = function (t) {
          return (this._autopadding = !!t), this;
        }),
        (d.prototype.add = function (t) {
          this.cache = o.concat([this.cache, t]);
        }),
        (d.prototype.get = function () {
          if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), t;
          }
          return null;
        }),
        (d.prototype.flush = function () {
          for (
            var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1;
            ++r < t;

          )
            e.writeUInt8(t, r);
          return o.concat([this.cache, e]);
        }),
        (e.createCipheriv = l),
        (e.createCipher = function (t, e) {
          var r = n[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var i = u(e, !1, r.key, r.iv);
          return l(t, i.key, i.iv);
        });
    },
    1219: function (t, e, r) {
      var n = r(7172).Buffer,
        i = n.alloc(16, 0);
      function o(t) {
        var e = n.allocUnsafe(16);
        return (
          e.writeUInt32BE(t[0] >>> 0, 0),
          e.writeUInt32BE(t[1] >>> 0, 4),
          e.writeUInt32BE(t[2] >>> 0, 8),
          e.writeUInt32BE(t[3] >>> 0, 12),
          e
        );
      }
      function a(t) {
        (this.h = t),
          (this.state = n.alloc(16, 0)),
          (this.cache = n.allocUnsafe(0));
      }
      (a.prototype.ghash = function (t) {
        for (var e = -1; ++e < t.length; ) this.state[e] ^= t[e];
        this._multiply();
      }),
        (a.prototype._multiply = function () {
          for (
            var t,
              e,
              r,
              n = [
                (t = this.h).readUInt32BE(0),
                t.readUInt32BE(4),
                t.readUInt32BE(8),
                t.readUInt32BE(12),
              ],
              i = [0, 0, 0, 0],
              a = -1;
            ++a < 128;

          ) {
            for (
              0 !== (this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) &&
                ((i[0] ^= n[0]),
                (i[1] ^= n[1]),
                (i[2] ^= n[2]),
                (i[3] ^= n[3])),
                r = 0 !== (1 & n[3]),
                e = 3;
              e > 0;
              e--
            )
              n[e] = (n[e] >>> 1) | ((1 & n[e - 1]) << 31);
            (n[0] = n[0] >>> 1), r && (n[0] = n[0] ^ (225 << 24));
          }
          this.state = o(i);
        }),
        (a.prototype.update = function (t) {
          var e;
          for (
            this.cache = n.concat([this.cache, t]);
            this.cache.length >= 16;

          )
            (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(e);
        }),
        (a.prototype.final = function (t, e) {
          return (
            this.cache.length && this.ghash(n.concat([this.cache, i], 16)),
            this.ghash(o([0, t, 0, e])),
            this.state
          );
        }),
        (t.exports = a);
    },
    3480: function (t) {
      t.exports = function (t) {
        for (var e, r = t.length; r--; ) {
          if (255 !== (e = t.readUInt8(r))) {
            e++, t.writeUInt8(e, r);
            break;
          }
          t.writeUInt8(0, r);
        }
      };
    },
    6280: function (t, e, r) {
      var n = r(7752);
      (e.encrypt = function (t, e) {
        var r = n(e, t._prev);
        return (t._prev = t._cipher.encryptBlock(r)), t._prev;
      }),
        (e.decrypt = function (t, e) {
          var r = t._prev;
          t._prev = e;
          var i = t._cipher.decryptBlock(e);
          return n(i, r);
        });
    },
    392: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(7752);
      function o(t, e, r) {
        var o = e.length,
          a = i(e, t._cache);
        return (
          (t._cache = t._cache.slice(o)),
          (t._prev = n.concat([t._prev, r ? e : a])),
          a
        );
      }
      e.encrypt = function (t, e, r) {
        for (var i, a = n.allocUnsafe(0); e.length; ) {
          if (
            (0 === t._cache.length &&
              ((t._cache = t._cipher.encryptBlock(t._prev)),
              (t._prev = n.allocUnsafe(0))),
            !(t._cache.length <= e.length))
          ) {
            a = n.concat([a, o(t, e, r)]);
            break;
          }
          (i = t._cache.length),
            (a = n.concat([a, o(t, e.slice(0, i), r)])),
            (e = e.slice(i));
        }
        return a;
      };
    },
    5739: function (t, e, r) {
      var n = r(7172).Buffer;
      function i(t, e, r) {
        for (var n, i, a = -1, s = 0; ++a < 8; )
          (n = e & (1 << (7 - a)) ? 128 : 0),
            (s +=
              (128 & (i = t._cipher.encryptBlock(t._prev)[0] ^ n)) >> a % 8),
            (t._prev = o(t._prev, r ? n : i));
        return s;
      }
      function o(t, e) {
        var r = t.length,
          i = -1,
          o = n.allocUnsafe(t.length);
        for (t = n.concat([t, n.from([e])]); ++i < r; )
          o[i] = (t[i] << 1) | (t[i + 1] >> 7);
        return o;
      }
      e.encrypt = function (t, e, r) {
        for (var o = e.length, a = n.allocUnsafe(o), s = -1; ++s < o; )
          a[s] = i(t, e[s], r);
        return a;
      };
    },
    2228: function (t, e, r) {
      var n = r(7172).Buffer;
      function i(t, e, r) {
        var i = t._cipher.encryptBlock(t._prev)[0] ^ e;
        return (t._prev = n.concat([t._prev.slice(1), n.from([r ? e : i])])), i;
      }
      e.encrypt = function (t, e, r) {
        for (var o = e.length, a = n.allocUnsafe(o), s = -1; ++s < o; )
          a[s] = i(t, e[s], r);
        return a;
      };
    },
    2751: function (t, e, r) {
      var n = r(7752),
        i = r(7172).Buffer,
        o = r(3480);
      function a(t) {
        var e = t._cipher.encryptBlockRaw(t._prev);
        return o(t._prev), e;
      }
      e.encrypt = function (t, e) {
        var r = Math.ceil(e.length / 16),
          o = t._cache.length;
        t._cache = i.concat([t._cache, i.allocUnsafe(16 * r)]);
        for (var s = 0; s < r; s++) {
          var f = a(t),
            u = o + 16 * s;
          t._cache.writeUInt32BE(f[0], u + 0),
            t._cache.writeUInt32BE(f[1], u + 4),
            t._cache.writeUInt32BE(f[2], u + 8),
            t._cache.writeUInt32BE(f[3], u + 12);
        }
        var c = t._cache.slice(0, e.length);
        return (t._cache = t._cache.slice(e.length)), n(e, c);
      };
    },
    2437: function (t, e) {
      (e.encrypt = function (t, e) {
        return t._cipher.encryptBlock(e);
      }),
        (e.decrypt = function (t, e) {
          return t._cipher.decryptBlock(e);
        });
    },
    3834: function (t, e, r) {
      var n = {
          ECB: r(2437),
          CBC: r(6280),
          CFB: r(392),
          CFB8: r(2228),
          CFB1: r(5739),
          OFB: r(8494),
          CTR: r(2751),
          GCM: r(2751),
        },
        i = r(4636);
      for (var o in i) i[o].module = n[i[o].mode];
      t.exports = i;
    },
    8494: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(7752);
      function o(t) {
        return (t._prev = t._cipher.encryptBlock(t._prev)), t._prev;
      }
      e.encrypt = function (t, e) {
        for (; t._cache.length < e.length; )
          t._cache = n.concat([t._cache, o(t)]);
        var r = t._cache.slice(0, e.length);
        return (t._cache = t._cache.slice(e.length)), i(e, r);
      };
    },
    2385: function (t, e, r) {
      var n = r(238),
        i = r(7172).Buffer,
        o = r(3081);
      function a(t, e, r, a) {
        o.call(this),
          (this._cipher = new n.AES(e)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = a),
          (this._mode = t);
      }
      r(87)(a, o),
        (a.prototype._update = function (t) {
          return this._mode.encrypt(this, t, this._decrypt);
        }),
        (a.prototype._final = function () {
          this._cipher.scrub();
        }),
        (t.exports = a);
    },
    1240: function (t, e, r) {
      var n = r(5681),
        i = r(8901),
        o = r(3834),
        a = r(1035),
        s = r(5883);
      function f(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createCipheriv(t, e, r);
        if (a[t]) return new n({ key: e, iv: r, mode: t });
        throw new TypeError("invalid suite type");
      }
      function u(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createDecipheriv(t, e, r);
        if (a[t]) return new n({ key: e, iv: r, mode: t, decrypt: !0 });
        throw new TypeError("invalid suite type");
      }
      (e.createCipher = e.Cipher =
        function (t, e) {
          var r, n;
          if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv);
          else {
            if (!a[t]) throw new TypeError("invalid suite type");
            (r = 8 * a[t].key), (n = a[t].iv);
          }
          var i = s(e, !1, r, n);
          return f(t, i.key, i.iv);
        }),
        (e.createCipheriv = e.Cipheriv = f),
        (e.createDecipher = e.Decipher =
          function (t, e) {
            var r, n;
            if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv);
            else {
              if (!a[t]) throw new TypeError("invalid suite type");
              (r = 8 * a[t].key), (n = a[t].iv);
            }
            var i = s(e, !1, r, n);
            return u(t, i.key, i.iv);
          }),
        (e.createDecipheriv = e.Decipheriv = u),
        (e.listCiphers = e.getCiphers =
          function () {
            return Object.keys(a).concat(i.getCiphers());
          });
    },
    5681: function (t, e, r) {
      var n = r(3081),
        i = r(7191),
        o = r(87),
        a = r(7172).Buffer,
        s = {
          "des-ede3-cbc": i.CBC.instantiate(i.EDE),
          "des-ede3": i.EDE,
          "des-ede-cbc": i.CBC.instantiate(i.EDE),
          "des-ede": i.EDE,
          "des-cbc": i.CBC.instantiate(i.DES),
          "des-ecb": i.DES,
        };
      function f(t) {
        n.call(this);
        var e,
          r = t.mode.toLowerCase(),
          i = s[r];
        e = t.decrypt ? "decrypt" : "encrypt";
        var o = t.key;
        a.isBuffer(o) || (o = a.from(o)),
          ("des-ede" !== r && "des-ede-cbc" !== r) ||
            (o = a.concat([o, o.slice(0, 8)]));
        var f = t.iv;
        a.isBuffer(f) || (f = a.from(f)),
          (this._des = i.create({ key: o, iv: f, type: e }));
      }
      (s.des = s["des-cbc"]),
        (s.des3 = s["des-ede3-cbc"]),
        (t.exports = f),
        o(f, n),
        (f.prototype._update = function (t) {
          return a.from(this._des.update(t));
        }),
        (f.prototype._final = function () {
          return a.from(this._des.final());
        });
    },
    1035: function (t, e) {
      (e["des-ecb"] = { key: 8, iv: 0 }),
        (e["des-cbc"] = e.des = { key: 8, iv: 8 }),
        (e["des-ede3-cbc"] = e.des3 = { key: 24, iv: 8 }),
        (e["des-ede3"] = { key: 24, iv: 0 }),
        (e["des-ede-cbc"] = { key: 16, iv: 8 }),
        (e["des-ede"] = { key: 16, iv: 0 });
    },
    7354: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(5647),
        o = r(2830);
      function a(t) {
        var e,
          r = t.modulus.byteLength();
        do {
          e = new i(o(r));
        } while (
          e.cmp(t.modulus) >= 0 ||
          !e.umod(t.prime1) ||
          !e.umod(t.prime2)
        );
        return e;
      }
      function s(t, e) {
        var r = (function (t) {
            var e = a(t);
            return {
              blinder: e
                .toRed(i.mont(t.modulus))
                .redPow(new i(t.publicExponent))
                .fromRed(),
              unblinder: e.invm(t.modulus),
            };
          })(e),
          o = e.modulus.byteLength(),
          s = new i(t).mul(r.blinder).umod(e.modulus),
          f = s.toRed(i.mont(e.prime1)),
          u = s.toRed(i.mont(e.prime2)),
          c = e.coefficient,
          h = e.prime1,
          d = e.prime2,
          l = f.redPow(e.exponent1).fromRed(),
          p = u.redPow(e.exponent2).fromRed(),
          b = l.isub(p).imul(c).umod(h).imul(d);
        return p
          .iadd(b)
          .imul(r.unblinder)
          .umod(e.modulus)
          .toArrayLike(n, "be", o);
      }
      (s.getr = a), (t.exports = s);
    },
    5647: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(8028).Buffer;
        } catch (I) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function f(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, a = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
            var u = t.charCodeAt(f) - 48;
            (o *= i),
              (a = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              n(u >= 0 && a < i, "Invalid character"),
              (o += a);
          }
          return o;
        }
        function c(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (a = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (a = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              a = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                s = Math.min(o, o - a) + r,
                f = 0,
                c = r;
              c < s;
              c += n
            )
              (f = u(t, c, c + n, e)),
                this.imuln(i),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var h = 1;
              for (f = u(t, c, t.length, e), c = 0; c < a; c++) h *= e;
              this.imuln(h),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            c(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
          } catch (I) {
            o.prototype.inspect = h;
          }
        else o.prototype.inspect = h;
        function h() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var d = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          l = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << i) | o)).toString(16);
              (r =
                0 !== (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? d[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = l[t],
              c = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var b = h.modrn(c).toString(t);
              r = (h = h.idivn(c)).isZero() ? b + r : d[u - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(a, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function b(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var c = f >>> 26,
                h = 67108863 & f,
                d = Math.min(u, e.length - 1),
                l = Math.max(0, u - t.length + 1);
              l <= d;
              l++
            ) {
              var p = (u - l) | 0;
              (c +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) /
                  67108864) |
                0),
                (h = 67108863 & a);
            }
            (r.words[u] = 0 | h), (f = 0 | c);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var i = this.byteLength(),
            o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"),
            n(o > 0, "Requested array length <= 0");
          var a = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, i), a;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var a = (this.words[i] << o) | n;
              (t[r++] = 255 & a),
                r < t.length && (t[r++] = (a >> 8) & 255),
                r < t.length && (t[r++] = (a >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (a >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = a >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var a = (this.words[i] << o) | n;
              (t[r--] = 255 & a),
                r >= 0 && (t[r--] = (a >> 8) & 255),
                r >= 0 && (t[r--] = (a >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (a >> 24) & 255), (n = 0), (o = 0))
                  : ((n = a >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              n,
              i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, a = 0; a < n.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            c = 0 | a[0],
            h = 8191 & c,
            d = c >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            y = 8191 & m,
            g = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            x = k >>> 13,
            I = 0 | a[6],
            O = 8191 & I,
            R = I >>> 13,
            B = 0 | a[7],
            j = 8191 & B,
            P = B >>> 13,
            T = 0 | a[8],
            C = 8191 & T,
            N = T >>> 13,
            L = 0 | a[9],
            D = 8191 & L,
            q = L >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            F = U >>> 13,
            H = 0 | s[1],
            K = 8191 & H,
            W = H >>> 13,
            V = 0 | s[2],
            G = 8191 & V,
            Z = V >>> 13,
            $ = 0 | s[3],
            X = 8191 & $,
            J = $ >>> 13,
            Y = 0 | s[4],
            Q = 8191 & Y,
            tt = Y >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | s[6],
            ot = 8191 & it,
            at = it >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ut = st >>> 13,
            ct = 0 | s[8],
            ht = 8191 & ct,
            dt = ct >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((u + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, F)) + Math.imul(d, z)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(d, F)) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, F)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, F));
          var yt =
            (((u + (n = (n + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, W)) | 0) + Math.imul(d, K)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, W)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(y, z)),
            (i = ((i = Math.imul(y, F)) + Math.imul(g, z)) | 0),
            (o = Math.imul(g, F)),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(b, K)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var gt =
            (((u + (n = (n + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(d, G)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, Z)) | 0) + (i >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, F)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, F)),
            (n = (n + Math.imul(y, K)) | 0),
            (i = ((i = (i + Math.imul(y, W)) | 0) + Math.imul(g, K)) | 0),
            (o = (o + Math.imul(g, W)) | 0),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, Z)) | 0);
          var vt =
            (((u + (n = (n + Math.imul(h, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(d, X)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(S, z)),
            (i = ((i = Math.imul(S, F)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, F)),
            (n = (n + Math.imul(w, K)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (n = (n + Math.imul(y, G)) | 0),
            (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, Z)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(d, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(A, z)),
            (i = ((i = Math.imul(A, F)) + Math.imul(x, z)) | 0),
            (o = Math.imul(x, F)),
            (n = (n + Math.imul(S, K)) | 0),
            (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(E, K)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(_, G)) | 0),
            (o = (o + Math.imul(_, Z)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(g, X)) | 0),
            (o = (o + Math.imul(g, J)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((u + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(d, rt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(O, z)),
            (i = ((i = Math.imul(O, F)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, F)),
            (n = (n + Math.imul(A, K)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(x, K)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(S, G)) | 0),
            (i = ((i = (i + Math.imul(S, Z)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, Z)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(_, X)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0);
          var Mt =
            (((u + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, at)) | 0) + Math.imul(d, ot)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, at)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(j, z)),
            (i = ((i = Math.imul(j, F)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, F)),
            (n = (n + Math.imul(O, K)) | 0),
            (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Z)) | 0) + Math.imul(x, G)) | 0),
            (o = (o + Math.imul(x, Z)) | 0),
            (n = (n + Math.imul(S, X)) | 0),
            (i = ((i = (i + Math.imul(S, J)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(y, rt)) | 0),
            (i = ((i = (i + Math.imul(y, nt)) | 0) + Math.imul(g, rt)) | 0),
            (o = (o + Math.imul(g, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((u + (n = (n + Math.imul(h, ft)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ut)) | 0) + Math.imul(d, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, ut)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, F)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, F)),
            (n = (n + Math.imul(j, K)) | 0),
            (i = ((i = (i + Math.imul(j, W)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(O, G)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(y, ot)) | 0),
            (i = ((i = (i + Math.imul(y, at)) | 0) + Math.imul(g, ot)) | 0),
            (o = (o + Math.imul(g, at)) | 0),
            (n = (n + Math.imul(p, ft)) | 0),
            (i = ((i = (i + Math.imul(p, ut)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ut)) | 0);
          var Et =
            (((u + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, dt)) | 0) + Math.imul(d, ht)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(D, z)),
            (i = ((i = Math.imul(D, F)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, F)),
            (n = (n + Math.imul(C, K)) | 0),
            (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (n = (n + Math.imul(j, G)) | 0),
            (i = ((i = (i + Math.imul(j, Z)) | 0) + Math.imul(P, G)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(O, X)) | 0),
            (i = ((i = (i + Math.imul(O, J)) | 0) + Math.imul(R, X)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (i = ((i = (i + Math.imul(S, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (n = (n + Math.imul(y, ft)) | 0),
            (i = ((i = (i + Math.imul(y, ut)) | 0) + Math.imul(g, ft)) | 0),
            (o = (o + Math.imul(g, ut)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ht)) | 0),
            (o = (o + Math.imul(b, dt)) | 0);
          var kt =
            (((u + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, bt)) | 0) + Math.imul(d, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(D, K)),
            (i = ((i = Math.imul(D, W)) + Math.imul(q, K)) | 0),
            (o = Math.imul(q, W)),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Z)) | 0),
            (n = (n + Math.imul(j, X)) | 0),
            (i = ((i = (i + Math.imul(j, J)) | 0) + Math.imul(P, X)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(O, Q)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(x, rt)) | 0),
            (o = (o + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(S, ot)) | 0),
            (i = ((i = (i + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (n = (n + Math.imul(w, ft)) | 0),
            (i = ((i = (i + Math.imul(w, ut)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ut)) | 0),
            (n = (n + Math.imul(y, ht)) | 0),
            (i = ((i = (i + Math.imul(y, dt)) | 0) + Math.imul(g, ht)) | 0),
            (o = (o + Math.imul(g, dt)) | 0);
          var At =
            (((u + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(D, G)),
            (i = ((i = Math.imul(D, Z)) + Math.imul(q, G)) | 0),
            (o = Math.imul(q, Z)),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(N, X)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(j, Q)) | 0),
            (i = ((i = (i + Math.imul(j, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, at)) | 0) + Math.imul(x, ot)) | 0),
            (o = (o + Math.imul(x, at)) | 0),
            (n = (n + Math.imul(S, ft)) | 0),
            (i = ((i = (i + Math.imul(S, ut)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ut)) | 0),
            (n = (n + Math.imul(w, ht)) | 0),
            (i = ((i = (i + Math.imul(w, dt)) | 0) + Math.imul(_, ht)) | 0),
            (o = (o + Math.imul(_, dt)) | 0);
          var xt =
            (((u + (n = (n + Math.imul(y, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, bt)) | 0) + Math.imul(g, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(D, X)),
            (i = ((i = Math.imul(D, J)) + Math.imul(q, X)) | 0),
            (o = Math.imul(q, J)),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(N, Q)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(j, rt)) | 0),
            (i = ((i = (i + Math.imul(j, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (n = (n + Math.imul(A, ft)) | 0),
            (i = ((i = (i + Math.imul(A, ut)) | 0) + Math.imul(x, ft)) | 0),
            (o = (o + Math.imul(x, ut)) | 0),
            (n = (n + Math.imul(S, ht)) | 0),
            (i = ((i = (i + Math.imul(S, dt)) | 0) + Math.imul(E, ht)) | 0),
            (o = (o + Math.imul(E, dt)) | 0);
          var It =
            (((u + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, bt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(D, Q)),
            (i = ((i = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(j, ot)) | 0),
            (i = ((i = (i + Math.imul(j, at)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, at)) | 0),
            (n = (n + Math.imul(O, ft)) | 0),
            (i = ((i = (i + Math.imul(O, ut)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ut)) | 0),
            (n = (n + Math.imul(A, ht)) | 0),
            (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(x, ht)) | 0),
            (o = (o + Math.imul(x, dt)) | 0);
          var Ot =
            (((u + (n = (n + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(E, bt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(D, rt)),
            (i = ((i = Math.imul(D, nt)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, nt)),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, at)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, at)) | 0),
            (n = (n + Math.imul(j, ft)) | 0),
            (i = ((i = (i + Math.imul(j, ut)) | 0) + Math.imul(P, ft)) | 0),
            (o = (o + Math.imul(P, ut)) | 0),
            (n = (n + Math.imul(O, ht)) | 0),
            (i = ((i = (i + Math.imul(O, dt)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, dt)) | 0);
          var Rt =
            (((u + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(x, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(x, bt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (n = Math.imul(D, ot)),
            (i = ((i = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (n = (n + Math.imul(C, ft)) | 0),
            (i = ((i = (i + Math.imul(C, ut)) | 0) + Math.imul(N, ft)) | 0),
            (o = (o + Math.imul(N, ut)) | 0),
            (n = (n + Math.imul(j, ht)) | 0),
            (i = ((i = (i + Math.imul(j, dt)) | 0) + Math.imul(P, ht)) | 0),
            (o = (o + Math.imul(P, dt)) | 0);
          var Bt =
            (((u + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(R, bt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(D, ft)),
            (i = ((i = Math.imul(D, ut)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ut)),
            (n = (n + Math.imul(C, ht)) | 0),
            (i = ((i = (i + Math.imul(C, dt)) | 0) + Math.imul(N, ht)) | 0),
            (o = (o + Math.imul(N, dt)) | 0);
          var jt =
            (((u + (n = (n + Math.imul(j, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(j, bt)) | 0) + Math.imul(P, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863),
            (n = Math.imul(D, ht)),
            (i = ((i = Math.imul(D, dt)) + Math.imul(q, ht)) | 0),
            (o = Math.imul(q, dt));
          var Pt =
            (((u + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, bt)) | 0) + Math.imul(N, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(N, bt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863);
          var Tt =
            (((u + (n = Math.imul(D, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(q, bt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (f[0] = mt),
            (f[1] = yt),
            (f[2] = gt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = xt),
            (f[12] = It),
            (f[13] = Ot),
            (f[14] = Rt),
            (f[15] = Bt),
            (f[16] = jt),
            (f[17] = Pt),
            (f[18] = Tt),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            for (
              var s = 67108863 & n,
                f = Math.min(o, e.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= f;
              u++
            ) {
              var c = o - u,
                h = (0 | t.words[c]) * (0 | e.words[u]),
                d = 67108863 & h;
              (s = 67108863 & (d = (d + s) | 0)),
                (i +=
                  (a =
                    ((a = (a + ((h / 67108864) | 0)) | 0) + (d >>> 26)) | 0) >>>
                  26),
                (a &= 67108863);
            }
            (r.words[o] = s), (n = a), (a = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function g(t, e, r) {
          return y(t, e, r);
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = b),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : r < 63
              ? b(this, t, e)
              : r < 1024
              ? y(this, t, e)
              : g(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (v.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (v.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  c = 0;
                c < i;
                c += s
              )
                for (var h = f, d = u, l = 0; l < a; l++) {
                  var p = r[c + l],
                    b = n[c + l],
                    m = r[c + l + a],
                    y = n[c + l + a],
                    g = h * m - d * y;
                  (y = h * y + d * m),
                    (m = g),
                    (r[c + l] = p + m),
                    (n[c + l] = b + y),
                    (r[c + l + a] = p - m),
                    (n[c + l + a] = b - y),
                    l !== s &&
                      ((g = f * h - u * d), (d = f * d + u * h), (h = g));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (v.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = new Array(n),
              s = new Array(n),
              f = new Array(n),
              u = new Array(n),
              c = new Array(n),
              h = new Array(n),
              d = r.words;
            (d.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, c, h, n, i);
            for (var l = 0; l < n; l++) {
              var p = s[l] * c[l] - f[l] * h[l];
              (f[l] = s[l] * h[l] + f[l] * c[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, d, o, n, i),
              this.conjugate(d, o, n),
              this.normalize13b(d, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), g(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" === typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                a = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += a >>> 26),
                (this.words[i] = 67108863 & a);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (c << (26 - o)) | (h >>> o)), (c = h & s);
            }
            return (
              f && 0 !== c && (f.words[f.length++] = c),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (n(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              a = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((i = i.ushln(r)), n.iushln(r), (a = 0 | i.words[i.length - 1]));
            var s,
              f = n.length - i.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var u = 0; u < s.length; u++) s.words[u] = 0;
            }
            var c = n.clone()._ishlnsubmul(i, 1, f);
            0 === c.negative && ((n = c), s && (s.words[f] = 1));
            for (var h = f - 1; h >= 0; h--) {
              var d =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1]);
              for (
                d = Math.min((d / a) | 0, 67108863), n._ishlnsubmul(i, d, h);
                0 !== n.negative;

              )
                d--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1);
              s && (s.words[h] = d);
            }
            return (
              s && s._strip(),
              n._strip(),
              "div" !== e && 0 !== r && n.iushrn(r),
              { div: s || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (i = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: i, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (i = s.div.neg()),
                  { div: i, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var i, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var d = 0, l = 1;
                0 === (e.words[0] & l) && d < 26;
                ++d, l <<= 1
              );
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(c), a.isub(h)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(h)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var u = 0, c = 1;
                0 === (e.words[0] & c) && u < 26;
                ++u, c <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var h = 0, d = 1;
                0 === (r.words[0] & d) && h < 26;
                ++h, d <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function _(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          _.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function S() {
          _.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          _.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function k() {
          _.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function x(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (_.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (_.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (_.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (_.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(M, _),
          (M.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var a = 0 | t.words[i];
              (t.words[i - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(S, _),
          i(E, _),
          i(k, _),
          (k.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (w[t]) return w[t];
            var e;
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new S();
            else if ("p192" === t) e = new E();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new k();
            }
            return (w[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (c(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new o(2 * c * c).toRed(this);
              0 !== this.pow(c, u).cmp(f);

            )
              c.redIAdd(f);
            for (
              var h = this.pow(c, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                l = this.pow(t, i),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              n(m < p);
              var y = this.pow(h, new o(1).iushln(p - m - 1));
              (d = d.redMul(y)), (h = y.redSqr()), (l = l.redMul(h)), (p = m);
            }
            return d;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], c = f - 1; c >= 0; c--) {
                var h = (u >> c) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== a
                    ? ((a <<= 1),
                      (a |= h),
                      (4 === ++s || (0 === n && 0 === c)) &&
                        ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return i;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new x(t);
          }),
          i(x, A),
          (x.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (x.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (x.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (x.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (x.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    4905: function (t, e, r) {
      t.exports = r(7536);
    },
    7545: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(7266),
        o = r(8310),
        a = r(87),
        s = r(1528),
        f = r(1566),
        u = r(7536);
      function c(t) {
        o.Writable.call(this);
        var e = u[t];
        if (!e) throw new Error("Unknown message digest");
        (this._hashType = e.hash),
          (this._hash = i(e.hash)),
          (this._tag = e.id),
          (this._signType = e.sign);
      }
      function h(t) {
        o.Writable.call(this);
        var e = u[t];
        if (!e) throw new Error("Unknown message digest");
        (this._hash = i(e.hash)), (this._tag = e.id), (this._signType = e.sign);
      }
      function d(t) {
        return new c(t);
      }
      function l(t) {
        return new h(t);
      }
      Object.keys(u).forEach(function (t) {
        (u[t].id = n.from(u[t].id, "hex")), (u[t.toLowerCase()] = u[t]);
      }),
        a(c, o.Writable),
        (c.prototype._write = function (t, e, r) {
          this._hash.update(t), r();
        }),
        (c.prototype.update = function (t, e) {
          return (
            "string" === typeof t && (t = n.from(t, e)),
            this._hash.update(t),
            this
          );
        }),
        (c.prototype.sign = function (t, e) {
          this.end();
          var r = this._hash.digest(),
            n = s(r, t, this._hashType, this._signType, this._tag);
          return e ? n.toString(e) : n;
        }),
        a(h, o.Writable),
        (h.prototype._write = function (t, e, r) {
          this._hash.update(t), r();
        }),
        (h.prototype.update = function (t, e) {
          return (
            "string" === typeof t && (t = n.from(t, e)),
            this._hash.update(t),
            this
          );
        }),
        (h.prototype.verify = function (t, e, r) {
          "string" === typeof e && (e = n.from(e, r)), this.end();
          var i = this._hash.digest();
          return f(e, i, t, this._signType, this._tag);
        }),
        (t.exports = { Sign: d, Verify: l, createSign: d, createVerify: l });
    },
    1528: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(2873),
        o = r(7354),
        a = r(9749).ec,
        s = r(660),
        f = r(1463),
        u = r(7330);
      function c(t, e, r, o) {
        if ((t = n.from(t.toArray())).length < e.byteLength()) {
          var a = n.alloc(e.byteLength() - t.length);
          t = n.concat([a, t]);
        }
        var s = r.length,
          f = (function (t, e) {
            t = (t = h(t, e)).mod(e);
            var r = n.from(t.toArray());
            if (r.length < e.byteLength()) {
              var i = n.alloc(e.byteLength() - r.length);
              r = n.concat([i, r]);
            }
            return r;
          })(r, e),
          u = n.alloc(s);
        u.fill(1);
        var c = n.alloc(s);
        return (
          (c = i(o, c)
            .update(u)
            .update(n.from([0]))
            .update(t)
            .update(f)
            .digest()),
          (u = i(o, c).update(u).digest()),
          {
            k: (c = i(o, c)
              .update(u)
              .update(n.from([1]))
              .update(t)
              .update(f)
              .digest()),
            v: (u = i(o, c).update(u).digest()),
          }
        );
      }
      function h(t, e) {
        var r = new s(t),
          n = (t.length << 3) - e.bitLength();
        return n > 0 && r.ishrn(n), r;
      }
      function d(t, e, r) {
        var o, a;
        do {
          for (o = n.alloc(0); 8 * o.length < t.bitLength(); )
            (e.v = i(r, e.k).update(e.v).digest()), (o = n.concat([o, e.v]));
          (a = h(o, t)),
            (e.k = i(r, e.k)
              .update(e.v)
              .update(n.from([0]))
              .digest()),
            (e.v = i(r, e.k).update(e.v).digest());
        } while (-1 !== a.cmp(t));
        return a;
      }
      function l(t, e, r, n) {
        return t.toRed(s.mont(r)).redPow(e).fromRed().mod(n);
      }
      (t.exports = function (t, e, r, i, p) {
        var b = f(e);
        if (b.curve) {
          if ("ecdsa" !== i && "ecdsa/rsa" !== i)
            throw new Error("wrong private key type");
          return (function (t, e) {
            var r = u[e.curve.join(".")];
            if (!r) throw new Error("unknown curve " + e.curve.join("."));
            var i = new a(r).keyFromPrivate(e.privateKey).sign(t);
            return n.from(i.toDER());
          })(t, b);
        }
        if ("dsa" === b.type) {
          if ("dsa" !== i) throw new Error("wrong private key type");
          return (function (t, e, r) {
            var i,
              o = e.params.priv_key,
              a = e.params.p,
              f = e.params.q,
              u = e.params.g,
              p = new s(0),
              b = h(t, f).mod(f),
              m = !1,
              y = c(o, f, t, r);
            for (; !1 === m; )
              (p = l(u, (i = d(f, y, r)), a, f)),
                0 ===
                  (m = i
                    .invm(f)
                    .imul(b.add(o.mul(p)))
                    .mod(f)).cmpn(0) && ((m = !1), (p = new s(0)));
            return (function (t, e) {
              (t = t.toArray()),
                (e = e.toArray()),
                128 & t[0] && (t = [0].concat(t));
              128 & e[0] && (e = [0].concat(e));
              var r = [48, t.length + e.length + 4, 2, t.length];
              return (r = r.concat(t, [2, e.length], e)), n.from(r);
            })(p, m);
          })(t, b, r);
        }
        if ("rsa" !== i && "ecdsa/rsa" !== i)
          throw new Error("wrong private key type");
        t = n.concat([p, t]);
        for (
          var m = b.modulus.byteLength(), y = [0, 1];
          t.length + y.length + 1 < m;

        )
          y.push(255);
        y.push(0);
        for (var g = -1; ++g < t.length; ) y.push(t[g]);
        return o(y, b);
      }),
        (t.exports.getKey = c),
        (t.exports.makeKey = d);
    },
    1566: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(660),
        o = r(9749).ec,
        a = r(1463),
        s = r(7330);
      function f(t, e) {
        if (t.cmpn(0) <= 0) throw new Error("invalid sig");
        if (t.cmp(e) >= e) throw new Error("invalid sig");
      }
      t.exports = function (t, e, r, u, c) {
        var h = a(r);
        if ("ec" === h.type) {
          if ("ecdsa" !== u && "ecdsa/rsa" !== u)
            throw new Error("wrong public key type");
          return (function (t, e, r) {
            var n = s[r.data.algorithm.curve.join(".")];
            if (!n)
              throw new Error(
                "unknown curve " + r.data.algorithm.curve.join(".")
              );
            var i = new o(n),
              a = r.data.subjectPrivateKey.data;
            return i.verify(e, t, a);
          })(t, e, h);
        }
        if ("dsa" === h.type) {
          if ("dsa" !== u) throw new Error("wrong public key type");
          return (function (t, e, r) {
            var n = r.data.p,
              o = r.data.q,
              s = r.data.g,
              u = r.data.pub_key,
              c = a.signature.decode(t, "der"),
              h = c.s,
              d = c.r;
            f(h, o), f(d, o);
            var l = i.mont(n),
              p = h.invm(o);
            return (
              0 ===
              s
                .toRed(l)
                .redPow(new i(e).mul(p).mod(o))
                .fromRed()
                .mul(u.toRed(l).redPow(d.mul(p).mod(o)).fromRed())
                .mod(n)
                .mod(o)
                .cmp(d)
            );
          })(t, e, h);
        }
        if ("rsa" !== u && "ecdsa/rsa" !== u)
          throw new Error("wrong public key type");
        e = n.concat([c, e]);
        for (
          var d = h.modulus.byteLength(), l = [1], p = 0;
          e.length + l.length + 2 < d;

        )
          l.push(255), p++;
        l.push(0);
        for (var b = -1; ++b < e.length; ) l.push(e[b]);
        l = n.from(l);
        var m = i.mont(h.modulus);
        (t = (t = new i(t).toRed(m)).redPow(new i(h.publicExponent))),
          (t = n.from(t.fromRed().toArray()));
        var y = p < 8 ? 1 : 0;
        for (
          d = Math.min(t.length, l.length),
            t.length !== l.length && (y = 1),
            b = -1;
          ++b < d;

        )
          y |= t[b] ^ l[b];
        return 0 === y;
      };
    },
    660: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(695).Buffer;
        } catch (I) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function f(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, a = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
            var u = t.charCodeAt(f) - 48;
            (o *= i),
              (a = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              n(u >= 0 && a < i, "Invalid character"),
              (o += a);
          }
          return o;
        }
        function c(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (a = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (a = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              a = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = f(t, e, n) << o),
                  (this.words[a] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                s = Math.min(o, o - a) + r,
                f = 0,
                c = r;
              c < s;
              c += n
            )
              (f = u(t, c, c + n, e)),
                this.imuln(i),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var h = 1;
              for (f = u(t, c, t.length, e), c = 0; c < a; c++) h *= e;
              this.imuln(h),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            c(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
          } catch (I) {
            o.prototype.inspect = h;
          }
        else o.prototype.inspect = h;
        function h() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var d = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          l = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << i) | o)).toString(16);
              (r =
                0 !== (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? d[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = l[t],
              c = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var b = h.modrn(c).toString(t);
              r = (h = h.idivn(c)).isZero() ? b + r : d[u - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(a, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function b(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var c = f >>> 26,
                h = 67108863 & f,
                d = Math.min(u, e.length - 1),
                l = Math.max(0, u - t.length + 1);
              l <= d;
              l++
            ) {
              var p = (u - l) | 0;
              (c +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) /
                  67108864) |
                0),
                (h = 67108863 & a);
            }
            (r.words[u] = 0 | h), (f = 0 | c);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var i = this.byteLength(),
            o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"),
            n(o > 0, "Requested array length <= 0");
          var a = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, i), a;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var a = (this.words[i] << o) | n;
              (t[r++] = 255 & a),
                r < t.length && (t[r++] = (a >> 8) & 255),
                r < t.length && (t[r++] = (a >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (a >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = a >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var a = (this.words[i] << o) | n;
              (t[r--] = 255 & a),
                r >= 0 && (t[r--] = (a >> 8) & 255),
                r >= 0 && (t[r--] = (a >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (a >> 24) & 255), (n = 0), (o = 0))
                  : ((n = a >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              n,
              i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, a = 0; a < n.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            c = 0 | a[0],
            h = 8191 & c,
            d = c >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            y = 8191 & m,
            g = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            x = k >>> 13,
            I = 0 | a[6],
            O = 8191 & I,
            R = I >>> 13,
            B = 0 | a[7],
            j = 8191 & B,
            P = B >>> 13,
            T = 0 | a[8],
            C = 8191 & T,
            N = T >>> 13,
            L = 0 | a[9],
            D = 8191 & L,
            q = L >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            F = U >>> 13,
            H = 0 | s[1],
            K = 8191 & H,
            W = H >>> 13,
            V = 0 | s[2],
            G = 8191 & V,
            Z = V >>> 13,
            $ = 0 | s[3],
            X = 8191 & $,
            J = $ >>> 13,
            Y = 0 | s[4],
            Q = 8191 & Y,
            tt = Y >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | s[6],
            ot = 8191 & it,
            at = it >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ut = st >>> 13,
            ct = 0 | s[8],
            ht = 8191 & ct,
            dt = ct >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((u + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, F)) + Math.imul(d, z)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(d, F)) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, F)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, F));
          var yt =
            (((u + (n = (n + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, W)) | 0) + Math.imul(d, K)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, W)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(y, z)),
            (i = ((i = Math.imul(y, F)) + Math.imul(g, z)) | 0),
            (o = Math.imul(g, F)),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(b, K)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var gt =
            (((u + (n = (n + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(d, G)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, Z)) | 0) + (i >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, F)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, F)),
            (n = (n + Math.imul(y, K)) | 0),
            (i = ((i = (i + Math.imul(y, W)) | 0) + Math.imul(g, K)) | 0),
            (o = (o + Math.imul(g, W)) | 0),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, Z)) | 0);
          var vt =
            (((u + (n = (n + Math.imul(h, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(d, X)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(S, z)),
            (i = ((i = Math.imul(S, F)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, F)),
            (n = (n + Math.imul(w, K)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (n = (n + Math.imul(y, G)) | 0),
            (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, Z)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(d, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(A, z)),
            (i = ((i = Math.imul(A, F)) + Math.imul(x, z)) | 0),
            (o = Math.imul(x, F)),
            (n = (n + Math.imul(S, K)) | 0),
            (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(E, K)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(_, G)) | 0),
            (o = (o + Math.imul(_, Z)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(g, X)) | 0),
            (o = (o + Math.imul(g, J)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((u + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(d, rt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(O, z)),
            (i = ((i = Math.imul(O, F)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, F)),
            (n = (n + Math.imul(A, K)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(x, K)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(S, G)) | 0),
            (i = ((i = (i + Math.imul(S, Z)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, Z)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(_, X)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0);
          var Mt =
            (((u + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, at)) | 0) + Math.imul(d, ot)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, at)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(j, z)),
            (i = ((i = Math.imul(j, F)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, F)),
            (n = (n + Math.imul(O, K)) | 0),
            (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Z)) | 0) + Math.imul(x, G)) | 0),
            (o = (o + Math.imul(x, Z)) | 0),
            (n = (n + Math.imul(S, X)) | 0),
            (i = ((i = (i + Math.imul(S, J)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(y, rt)) | 0),
            (i = ((i = (i + Math.imul(y, nt)) | 0) + Math.imul(g, rt)) | 0),
            (o = (o + Math.imul(g, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((u + (n = (n + Math.imul(h, ft)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ut)) | 0) + Math.imul(d, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, ut)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, F)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, F)),
            (n = (n + Math.imul(j, K)) | 0),
            (i = ((i = (i + Math.imul(j, W)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(O, G)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(y, ot)) | 0),
            (i = ((i = (i + Math.imul(y, at)) | 0) + Math.imul(g, ot)) | 0),
            (o = (o + Math.imul(g, at)) | 0),
            (n = (n + Math.imul(p, ft)) | 0),
            (i = ((i = (i + Math.imul(p, ut)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ut)) | 0);
          var Et =
            (((u + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, dt)) | 0) + Math.imul(d, ht)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(D, z)),
            (i = ((i = Math.imul(D, F)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, F)),
            (n = (n + Math.imul(C, K)) | 0),
            (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (n = (n + Math.imul(j, G)) | 0),
            (i = ((i = (i + Math.imul(j, Z)) | 0) + Math.imul(P, G)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(O, X)) | 0),
            (i = ((i = (i + Math.imul(O, J)) | 0) + Math.imul(R, X)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (i = ((i = (i + Math.imul(S, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (n = (n + Math.imul(y, ft)) | 0),
            (i = ((i = (i + Math.imul(y, ut)) | 0) + Math.imul(g, ft)) | 0),
            (o = (o + Math.imul(g, ut)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ht)) | 0),
            (o = (o + Math.imul(b, dt)) | 0);
          var kt =
            (((u + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, bt)) | 0) + Math.imul(d, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(D, K)),
            (i = ((i = Math.imul(D, W)) + Math.imul(q, K)) | 0),
            (o = Math.imul(q, W)),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Z)) | 0),
            (n = (n + Math.imul(j, X)) | 0),
            (i = ((i = (i + Math.imul(j, J)) | 0) + Math.imul(P, X)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(O, Q)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(x, rt)) | 0),
            (o = (o + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(S, ot)) | 0),
            (i = ((i = (i + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (n = (n + Math.imul(w, ft)) | 0),
            (i = ((i = (i + Math.imul(w, ut)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ut)) | 0),
            (n = (n + Math.imul(y, ht)) | 0),
            (i = ((i = (i + Math.imul(y, dt)) | 0) + Math.imul(g, ht)) | 0),
            (o = (o + Math.imul(g, dt)) | 0);
          var At =
            (((u + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(D, G)),
            (i = ((i = Math.imul(D, Z)) + Math.imul(q, G)) | 0),
            (o = Math.imul(q, Z)),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(N, X)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(j, Q)) | 0),
            (i = ((i = (i + Math.imul(j, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, at)) | 0) + Math.imul(x, ot)) | 0),
            (o = (o + Math.imul(x, at)) | 0),
            (n = (n + Math.imul(S, ft)) | 0),
            (i = ((i = (i + Math.imul(S, ut)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ut)) | 0),
            (n = (n + Math.imul(w, ht)) | 0),
            (i = ((i = (i + Math.imul(w, dt)) | 0) + Math.imul(_, ht)) | 0),
            (o = (o + Math.imul(_, dt)) | 0);
          var xt =
            (((u + (n = (n + Math.imul(y, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, bt)) | 0) + Math.imul(g, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(D, X)),
            (i = ((i = Math.imul(D, J)) + Math.imul(q, X)) | 0),
            (o = Math.imul(q, J)),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(N, Q)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(j, rt)) | 0),
            (i = ((i = (i + Math.imul(j, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (n = (n + Math.imul(A, ft)) | 0),
            (i = ((i = (i + Math.imul(A, ut)) | 0) + Math.imul(x, ft)) | 0),
            (o = (o + Math.imul(x, ut)) | 0),
            (n = (n + Math.imul(S, ht)) | 0),
            (i = ((i = (i + Math.imul(S, dt)) | 0) + Math.imul(E, ht)) | 0),
            (o = (o + Math.imul(E, dt)) | 0);
          var It =
            (((u + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, bt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(D, Q)),
            (i = ((i = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(j, ot)) | 0),
            (i = ((i = (i + Math.imul(j, at)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, at)) | 0),
            (n = (n + Math.imul(O, ft)) | 0),
            (i = ((i = (i + Math.imul(O, ut)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ut)) | 0),
            (n = (n + Math.imul(A, ht)) | 0),
            (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(x, ht)) | 0),
            (o = (o + Math.imul(x, dt)) | 0);
          var Ot =
            (((u + (n = (n + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(E, bt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(D, rt)),
            (i = ((i = Math.imul(D, nt)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, nt)),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, at)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, at)) | 0),
            (n = (n + Math.imul(j, ft)) | 0),
            (i = ((i = (i + Math.imul(j, ut)) | 0) + Math.imul(P, ft)) | 0),
            (o = (o + Math.imul(P, ut)) | 0),
            (n = (n + Math.imul(O, ht)) | 0),
            (i = ((i = (i + Math.imul(O, dt)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, dt)) | 0);
          var Rt =
            (((u + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(x, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(x, bt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (n = Math.imul(D, ot)),
            (i = ((i = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (n = (n + Math.imul(C, ft)) | 0),
            (i = ((i = (i + Math.imul(C, ut)) | 0) + Math.imul(N, ft)) | 0),
            (o = (o + Math.imul(N, ut)) | 0),
            (n = (n + Math.imul(j, ht)) | 0),
            (i = ((i = (i + Math.imul(j, dt)) | 0) + Math.imul(P, ht)) | 0),
            (o = (o + Math.imul(P, dt)) | 0);
          var Bt =
            (((u + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(R, bt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(D, ft)),
            (i = ((i = Math.imul(D, ut)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ut)),
            (n = (n + Math.imul(C, ht)) | 0),
            (i = ((i = (i + Math.imul(C, dt)) | 0) + Math.imul(N, ht)) | 0),
            (o = (o + Math.imul(N, dt)) | 0);
          var jt =
            (((u + (n = (n + Math.imul(j, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(j, bt)) | 0) + Math.imul(P, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863),
            (n = Math.imul(D, ht)),
            (i = ((i = Math.imul(D, dt)) + Math.imul(q, ht)) | 0),
            (o = Math.imul(q, dt));
          var Pt =
            (((u + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, bt)) | 0) + Math.imul(N, pt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(N, bt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863);
          var Tt =
            (((u + (n = Math.imul(D, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(q, bt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (f[0] = mt),
            (f[1] = yt),
            (f[2] = gt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = xt),
            (f[12] = It),
            (f[13] = Ot),
            (f[14] = Rt),
            (f[15] = Bt),
            (f[16] = jt),
            (f[17] = Pt),
            (f[18] = Tt),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            for (
              var s = 67108863 & n,
                f = Math.min(o, e.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= f;
              u++
            ) {
              var c = o - u,
                h = (0 | t.words[c]) * (0 | e.words[u]),
                d = 67108863 & h;
              (s = 67108863 & (d = (d + s) | 0)),
                (i +=
                  (a =
                    ((a = (a + ((h / 67108864) | 0)) | 0) + (d >>> 26)) | 0) >>>
                  26),
                (a &= 67108863);
            }
            (r.words[o] = s), (n = a), (a = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function g(t, e, r) {
          return y(t, e, r);
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = b),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : r < 63
              ? b(this, t, e)
              : r < 1024
              ? y(this, t, e)
              : g(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (v.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (v.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  c = 0;
                c < i;
                c += s
              )
                for (var h = f, d = u, l = 0; l < a; l++) {
                  var p = r[c + l],
                    b = n[c + l],
                    m = r[c + l + a],
                    y = n[c + l + a],
                    g = h * m - d * y;
                  (y = h * y + d * m),
                    (m = g),
                    (r[c + l] = p + m),
                    (n[c + l] = b + y),
                    (r[c + l + a] = p - m),
                    (n[c + l + a] = b - y),
                    l !== s &&
                      ((g = f * h - u * d), (d = f * d + u * h), (h = g));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (v.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = new Array(n),
              s = new Array(n),
              f = new Array(n),
              u = new Array(n),
              c = new Array(n),
              h = new Array(n),
              d = r.words;
            (d.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, c, h, n, i);
            for (var l = 0; l < n; l++) {
              var p = s[l] * c[l] - f[l] * h[l];
              (f[l] = s[l] * h[l] + f[l] * c[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, d, o, n, i),
              this.conjugate(d, o, n),
              this.normalize13b(d, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), g(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" === typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                a = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += a >>> 26),
                (this.words[i] = 67108863 & a);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (c << (26 - o)) | (h >>> o)), (c = h & s);
            }
            return (
              f && 0 !== c && (f.words[f.length++] = c),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (n(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              a = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((i = i.ushln(r)), n.iushln(r), (a = 0 | i.words[i.length - 1]));
            var s,
              f = n.length - i.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var u = 0; u < s.length; u++) s.words[u] = 0;
            }
            var c = n.clone()._ishlnsubmul(i, 1, f);
            0 === c.negative && ((n = c), s && (s.words[f] = 1));
            for (var h = f - 1; h >= 0; h--) {
              var d =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1]);
              for (
                d = Math.min((d / a) | 0, 67108863), n._ishlnsubmul(i, d, h);
                0 !== n.negative;

              )
                d--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1);
              s && (s.words[h] = d);
            }
            return (
              s && s._strip(),
              n._strip(),
              "div" !== e && 0 !== r && n.iushrn(r),
              { div: s || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (i = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: i, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (i = s.div.neg()),
                  { div: i, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var i, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var d = 0, l = 1;
                0 === (e.words[0] & l) && d < 26;
                ++d, l <<= 1
              );
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(c), a.isub(h)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(h)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var u = 0, c = 1;
                0 === (e.words[0] & c) && u < 26;
                ++u, c <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var h = 0, d = 1;
                0 === (r.words[0] & d) && h < 26;
                ++h, d <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function _(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          _.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function S() {
          _.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          _.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function k() {
          _.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function x(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (_.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (_.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (_.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (_.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(M, _),
          (M.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var a = 0 | t.words[i];
              (t.words[i - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(S, _),
          i(E, _),
          i(k, _),
          (k.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (w[t]) return w[t];
            var e;
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new S();
            else if ("p192" === t) e = new E();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new k();
            }
            return (w[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (c(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new o(2 * c * c).toRed(this);
              0 !== this.pow(c, u).cmp(f);

            )
              c.redIAdd(f);
            for (
              var h = this.pow(c, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                l = this.pow(t, i),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              n(m < p);
              var y = this.pow(h, new o(1).iushln(p - m - 1));
              (d = d.redMul(y)), (h = y.redSqr()), (l = l.redMul(h)), (p = m);
            }
            return d;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], c = f - 1; c >= 0; c--) {
                var h = (u >> c) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== a
                    ? ((a <<= 1),
                      (a |= h),
                      (4 === ++s || (0 === n && 0 === c)) &&
                        ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return i;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new x(t);
          }),
          i(x, A),
          (x.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (x.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (x.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (x.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (x.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    7752: function (t, e, r) {
      var n = r(816).Buffer;
      t.exports = function (t, e) {
        for (
          var r = Math.min(t.length, e.length), i = new n(r), o = 0;
          o < r;
          ++o
        )
          i[o] = t[o] ^ e[o];
        return i;
      };
    },
    816: function (t, e, r) {
      "use strict";
      var n = r(4782),
        i = r(8898),
        o =
          "function" === typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (e.Buffer = f),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return f.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50);
      var a = 2147483647;
      function s(t) {
        if (t > a)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, f.prototype), e;
      }
      function f(t, e, r) {
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return h(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ("string" === typeof t)
          return (function (t, e) {
            ("string" === typeof e && "" !== e) || (e = "utf8");
            if (!f.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            var r = 0 | b(t, e),
              n = s(r),
              i = n.write(t, e);
            i !== r && (n = n.slice(0, i));
            return n;
          })(t, e);
        if (ArrayBuffer.isView(t)) return d(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
          return l(t, e, r);
        if (
          "undefined" !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return l(t, e, r);
        if ("number" === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return f.from(n, e, r);
        var i = (function (t) {
          if (f.isBuffer(t)) {
            var e = 0 | p(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          if (void 0 !== t.length)
            return "number" !== typeof t.length || H(t.length) ? s(0) : d(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return d(t.data);
        })(t);
        if (i) return i;
        if (
          "undefined" !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" === typeof t[Symbol.toPrimitive]
        )
          return f.from(t[Symbol.toPrimitive]("string"), e, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function c(t) {
        if ("number" !== typeof t)
          throw new TypeError('"size" argument must be of type number');
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function h(t) {
        return c(t), s(t < 0 ? 0 : 0 | p(t));
      }
      function d(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | p(t.length), r = s(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n];
        return r;
      }
      function l(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, f.prototype),
          n
        );
      }
      function p(t) {
        if (t >= a)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function b(t, e) {
        if (f.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength;
        if ("string" !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var i = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return U(t).length;
            default:
              if (i) return n ? -1 : q(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return B(this, e, r);
            case "utf8":
            case "utf-8":
              return x(this, e, r);
            case "ascii":
              return O(this, e, r);
            case "latin1":
            case "binary":
              return R(this, e, r);
            case "base64":
              return A(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return j(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function y(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function g(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          H((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" === typeof e && (e = f.from(e, n)), f.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i);
        if ("number" === typeof e)
          return (
            (e &= 255),
            "function" === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(t, e, r, n, i) {
        var o,
          a = 1,
          s = t.length,
          f = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (a = 2), (s /= 2), (f /= 2), (r /= 2);
        }
        function u(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (i) {
          var c = -1;
          for (o = r; o < s; o++)
            if (u(t, o) === u(e, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === f)) return c * a;
            } else -1 !== c && (o -= o - c), (c = -1);
        } else
          for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
            for (var h = !0, d = 0; d < f; d++)
              if (u(t, o + d) !== u(e, d)) {
                h = !1;
                break;
              }
            if (h) return o;
          }
        return -1;
      }
      function w(t, e, r, n) {
        r = Number(r) || 0;
        var i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        var o = e.length;
        n > o / 2 && (n = o / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(e.substr(2 * a, 2), 16);
          if (H(s)) return a;
          t[r + a] = s;
        }
        return a;
      }
      function _(t, e, r, n) {
        return z(q(e, t.length - r), t, r, n);
      }
      function M(t, e, r, n) {
        return z(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function S(t, e, r, n) {
        return M(t, e, r, n);
      }
      function E(t, e, r, n) {
        return z(U(e), t, r, n);
      }
      function k(t, e, r, n) {
        return z(
          (function (t, e) {
            for (
              var r, n, i, o = [], a = 0;
              a < t.length && !((e -= 2) < 0);
              ++a
            )
              (n = (r = t.charCodeAt(a)) >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n);
            return o;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function A(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function x(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], i = e; i < r; ) {
          var o,
            a,
            s,
            f,
            u = t[i],
            c = null,
            h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + h <= r)
            switch (h) {
              case 1:
                u < 128 && (c = u);
                break;
              case 2:
                128 === (192 & (o = t[i + 1])) &&
                  (f = ((31 & u) << 6) | (63 & o)) > 127 &&
                  (c = f);
                break;
              case 3:
                (o = t[i + 1]),
                  (a = t[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & a) &&
                    (f = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (f < 55296 || f > 57343) &&
                    (c = f);
                break;
              case 4:
                (o = t[i + 1]),
                  (a = t[i + 2]),
                  (s = t[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & a) &&
                    128 === (192 & s) &&
                    (f =
                      ((15 & u) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    f < 1114112 &&
                    (c = f);
            }
          null === c
            ? ((c = 65533), (h = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += h);
        }
        return (function (t) {
          var e = t.length;
          if (e <= I) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += I)));
          return r;
        })(n);
      }
      (e.kMaxLength = a),
        (f.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (r) {
            return !1;
          }
        })()),
        f.TYPED_ARRAY_SUPPORT ||
          "undefined" === typeof console ||
          "function" !== typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(f.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (f.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(f.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (f.isBuffer(this)) return this.byteOffset;
          },
        }),
        (f.poolSize = 8192),
        (f.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(f, Uint8Array),
        (f.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return (
              c(t),
              t <= 0
                ? s(t)
                : void 0 !== e
                ? "string" === typeof r
                  ? s(t).fill(e, r)
                  : s(t).fill(e)
                : s(t)
            );
          })(t, e, r);
        }),
        (f.allocUnsafe = function (t) {
          return h(t);
        }),
        (f.allocUnsafeSlow = function (t) {
          return h(t);
        }),
        (f.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== f.prototype;
        }),
        (f.compare = function (t, e) {
          if (
            (F(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
            !f.isBuffer(t) || !f.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (f.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (f.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return f.alloc(0);
          var r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = f.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            var o = t[r];
            if ((F(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o)))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            o.copy(n, i), (i += o.length);
          }
          return n;
        }),
        (f.byteLength = b),
        (f.prototype._isBuffer = !0),
        (f.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) y(this, e, e + 1);
          return this;
        }),
        (f.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            y(this, e, e + 3), y(this, e + 1, e + 2);
          return this;
        }),
        (f.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            y(this, e, e + 7),
              y(this, e + 1, e + 6),
              y(this, e + 2, e + 5),
              y(this, e + 3, e + 4);
          return this;
        }),
        (f.prototype.toString = function () {
          var t = this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? x(this, 0, t)
            : m.apply(this, arguments);
        }),
        (f.prototype.toLocaleString = f.prototype.toString),
        (f.prototype.equals = function (t) {
          if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === f.compare(this, t);
        }),
        (f.prototype.inspect = function () {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (f.prototype[o] = f.prototype.inspect),
        (f.prototype.compare = function (t, e, r, n, i) {
          if (
            (F(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
            !f.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0),
              s = Math.min(o, a),
              u = this.slice(n, i),
              c = t.slice(e, r),
              h = 0;
            h < s;
            ++h
          )
            if (u[h] !== c[h]) {
              (o = u[h]), (a = c[h]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (f.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (f.prototype.indexOf = function (t, e, r) {
          return g(this, t, e, r, !0);
        }),
        (f.prototype.lastIndexOf = function (t, e, r) {
          return g(this, t, e, r, !1);
        }),
        (f.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" === typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var i = this.length - e;
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var o = !1; ; )
            switch (n) {
              case "hex":
                return w(this, t, e, r);
              case "utf8":
              case "utf-8":
                return _(this, t, e, r);
              case "ascii":
                return M(this, t, e, r);
              case "latin1":
              case "binary":
                return S(this, t, e, r);
              case "base64":
                return E(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, t, e, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (f.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var I = 4096;
      function O(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function R(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function B(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", o = e; o < r; ++o) i += K[t[o]];
        return i;
      }
      function j(t, e, r) {
        for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function P(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function T(t, e, r, n, i, o) {
        if (!f.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function C(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || C(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function L(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || C(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (f.prototype.slice = function (t, e) {
        var r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t);
        var n = this.subarray(t, e);
        return Object.setPrototypeOf(n, f.prototype), n;
      }),
        (f.prototype.readUIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i;
          return n;
        }),
        (f.prototype.readUIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i;
          return n;
        }),
        (f.prototype.readUInt8 = function (t, e) {
          return (t >>>= 0), e || P(t, 1, this.length), this[t];
        }),
        (f.prototype.readUInt16LE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 2, this.length), this[t] | (this[t + 1] << 8)
          );
        }),
        (f.prototype.readUInt16BE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 2, this.length), (this[t] << 8) | this[t + 1]
          );
        }),
        (f.prototype.readUInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || P(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (f.prototype.readUInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || P(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (f.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (f.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (f.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || P(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (f.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || P(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (f.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || P(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (f.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || P(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (f.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || P(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (f.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (f.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (f.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (f.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || P(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (f.prototype.writeUIntLE = function (t, e, r, n) {
          ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
            o = 0;
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255;
          return e + r;
        }),
        (f.prototype.writeUIntBE = function (t, e, r, n) {
          ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
            o = 1;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255;
          return e + r;
        }),
        (f.prototype.writeUInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 1, 255, 0),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (f.prototype.writeUInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (f.prototype.writeUInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (f.prototype.writeUInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          );
        }),
        (f.prototype.writeUInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (f.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            T(this, t, e, r, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[e] = 255 & t; ++o < r && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
              (this[e + o] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (f.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            T(this, t, e, r, i - 1, -i);
          }
          var o = r - 1,
            a = 1,
            s = 0;
          for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
              (this[e + o] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (f.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (f.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (f.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (f.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (f.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || T(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (f.prototype.writeFloatLE = function (t, e, r) {
          return N(this, t, e, !0, r);
        }),
        (f.prototype.writeFloatBE = function (t, e, r) {
          return N(this, t, e, !1, r);
        }),
        (f.prototype.writeDoubleLE = function (t, e, r) {
          return L(this, t, e, !0, r);
        }),
        (f.prototype.writeDoubleBE = function (t, e, r) {
          return L(this, t, e, !1, r);
        }),
        (f.prototype.copy = function (t, e, r, n) {
          if (!f.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          var i = n - r;
          if (
            this === t &&
            "function" === typeof Uint8Array.prototype.copyWithin
          )
            this.copyWithin(e, r, n);
          else if (this === t && r < e && e < n)
            for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
          else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
          return i;
        }),
        (f.prototype.fill = function (t, e, r, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" !== typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" === typeof n && !f.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              var i = t.charCodeAt(0);
              (("utf8" === n && i < 128) || "latin1" === n) && (t = i);
            }
          } else
            "number" === typeof t
              ? (t &= 255)
              : "boolean" === typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          var o;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t;
          else {
            var a = f.isBuffer(t) ? t : f.from(t, n),
              s = a.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
          }
          return this;
        });
      var D = /[^+/0-9A-Za-z-_]/g;
      function q(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function U(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(D, "")).length < 2)
              return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function z(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      function H(t) {
        return t !== t;
      }
      var K = (function () {
        for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        return e;
      })();
    },
    2737: function (t, e, r) {
      "use strict";
      var n = r(8750),
        i = r(4573),
        o = i(n("String.prototype.indexOf"));
      t.exports = function (t, e) {
        var r = n(t, !!e);
        return "function" === typeof r && o(t, ".prototype.") > -1 ? i(r) : r;
      };
    },
    4573: function (t, e, r) {
      "use strict";
      var n = r(132),
        i = r(8750),
        o = i("%Function.prototype.apply%"),
        a = i("%Function.prototype.call%"),
        s = i("%Reflect.apply%", !0) || n.call(a, o),
        f = i("%Object.getOwnPropertyDescriptor%", !0),
        u = i("%Object.defineProperty%", !0),
        c = i("%Math.max%");
      if (u)
        try {
          u({}, "a", { value: 1 });
        } catch (d) {
          u = null;
        }
      t.exports = function (t) {
        var e = s(n, a, arguments);
        if (f && u) {
          var r = f(e, "length");
          r.configurable &&
            u(e, "length", {
              value: 1 + c(0, t.length - (arguments.length - 1)),
            });
        }
        return e;
      };
      var h = function () {
        return s(n, o, arguments);
      };
      u ? u(t.exports, "apply", { value: h }) : (t.exports.apply = h);
    },
    3081: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(3424).Transform,
        o = r(4361).s;
      function a(t) {
        i.call(this),
          (this.hashMode = "string" === typeof t),
          this.hashMode
            ? (this[t] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(87)(a, i),
        (a.prototype.update = function (t, e, r) {
          "string" === typeof t && (t = n.from(t, e));
          var i = this._update(t);
          return this.hashMode ? this : (r && (i = this._toString(i, r)), i);
        }),
        (a.prototype.setAutoPadding = function () {}),
        (a.prototype.getAuthTag = function () {
          throw new Error("trying to get auth tag in unsupported state");
        }),
        (a.prototype.setAuthTag = function () {
          throw new Error("trying to set auth tag in unsupported state");
        }),
        (a.prototype.setAAD = function () {
          throw new Error("trying to set aad in unsupported state");
        }),
        (a.prototype._transform = function (t, e, r) {
          var n;
          try {
            this.hashMode ? this._update(t) : this.push(this._update(t));
          } catch (i) {
            n = i;
          } finally {
            r(n);
          }
        }),
        (a.prototype._flush = function (t) {
          var e;
          try {
            this.push(this.__final());
          } catch (r) {
            e = r;
          }
          t(e);
        }),
        (a.prototype._finalOrDigest = function (t) {
          var e = this.__final() || n.alloc(0);
          return t && (e = this._toString(e, t, !0)), e;
        }),
        (a.prototype._toString = function (t, e, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(e)), (this._encoding = e)),
            this._encoding !== e)
          )
            throw new Error("can't switch encodings");
          var n = this._decoder.write(t);
          return r && (n += this._decoder.end()), n;
        }),
        (t.exports = a);
    },
    5081: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(9749),
        o = r(3785);
      t.exports = function (t) {
        return new s(t);
      };
      var a = {
        secp256k1: { name: "secp256k1", byteLength: 32 },
        secp224r1: { name: "p224", byteLength: 28 },
        prime256v1: { name: "p256", byteLength: 32 },
        prime192v1: { name: "p192", byteLength: 24 },
        ed25519: { name: "ed25519", byteLength: 32 },
        secp384r1: { name: "p384", byteLength: 48 },
        secp521r1: { name: "p521", byteLength: 66 },
      };
      function s(t) {
        (this.curveType = a[t]),
          this.curveType || (this.curveType = { name: t }),
          (this.curve = new i.ec(this.curveType.name)),
          (this.keys = void 0);
      }
      function f(t, e, r) {
        Array.isArray(t) || (t = t.toArray());
        var i = new n(t);
        if (r && i.length < r) {
          var o = new n(r - i.length);
          o.fill(0), (i = n.concat([o, i]));
        }
        return e ? i.toString(e) : i;
      }
      (a.p224 = a.secp224r1),
        (a.p256 = a.secp256r1 = a.prime256v1),
        (a.p192 = a.secp192r1 = a.prime192v1),
        (a.p384 = a.secp384r1),
        (a.p521 = a.secp521r1),
        (s.prototype.generateKeys = function (t, e) {
          return (this.keys = this.curve.genKeyPair()), this.getPublicKey(t, e);
        }),
        (s.prototype.computeSecret = function (t, e, r) {
          return (
            (e = e || "utf8"),
            n.isBuffer(t) || (t = new n(t, e)),
            f(
              this.curve
                .keyFromPublic(t)
                .getPublic()
                .mul(this.keys.getPrivate())
                .getX(),
              r,
              this.curveType.byteLength
            )
          );
        }),
        (s.prototype.getPublicKey = function (t, e) {
          var r = this.keys.getPublic("compressed" === e, !0);
          return (
            "hybrid" === e && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
            f(r, t)
          );
        }),
        (s.prototype.getPrivateKey = function (t) {
          return f(this.keys.getPrivate(), t);
        }),
        (s.prototype.setPublicKey = function (t, e) {
          return (
            (e = e || "utf8"),
            n.isBuffer(t) || (t = new n(t, e)),
            this.keys._importPublic(t),
            this
          );
        }),
        (s.prototype.setPrivateKey = function (t, e) {
          (e = e || "utf8"), n.isBuffer(t) || (t = new n(t, e));
          var r = new o(t);
          return (
            (r = r.toString(16)),
            (this.keys = this.curve.genKeyPair()),
            this.keys._importPrivate(r),
            this
          );
        });
    },
    7266: function (t, e, r) {
      "use strict";
      var n = r(87),
        i = r(9500),
        o = r(6558),
        a = r(4458),
        s = r(3081);
      function f(t) {
        s.call(this, "digest"), (this._hash = t);
      }
      n(f, s),
        (f.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (f.prototype._final = function () {
          return this._hash.digest();
        }),
        (t.exports = function (t) {
          return "md5" === (t = t.toLowerCase())
            ? new i()
            : "rmd160" === t || "ripemd160" === t
            ? new o()
            : new f(a(t));
        });
    },
    7401: function (t, e, r) {
      var n = r(9500);
      t.exports = function (t) {
        return new n().update(t).digest();
      };
    },
    2873: function (t, e, r) {
      "use strict";
      var n = r(87),
        i = r(3042),
        o = r(3081),
        a = r(7172).Buffer,
        s = r(7401),
        f = r(6558),
        u = r(4458),
        c = a.alloc(128);
      function h(t, e) {
        o.call(this, "digest"), "string" === typeof e && (e = a.from(e));
        var r = "sha512" === t || "sha384" === t ? 128 : 64;
        ((this._alg = t), (this._key = e), e.length > r)
          ? (e = ("rmd160" === t ? new f() : u(t)).update(e).digest())
          : e.length < r && (e = a.concat([e, c], r));
        for (
          var n = (this._ipad = a.allocUnsafe(r)),
            i = (this._opad = a.allocUnsafe(r)),
            s = 0;
          s < r;
          s++
        )
          (n[s] = 54 ^ e[s]), (i[s] = 92 ^ e[s]);
        (this._hash = "rmd160" === t ? new f() : u(t)), this._hash.update(n);
      }
      n(h, o),
        (h.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (h.prototype._final = function () {
          var t = this._hash.digest();
          return ("rmd160" === this._alg ? new f() : u(this._alg))
            .update(this._opad)
            .update(t)
            .digest();
        }),
        (t.exports = function (t, e) {
          return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t
            ? new h("rmd160", e)
            : "md5" === t
            ? new i(s, e)
            : new h(t, e);
        });
    },
    3042: function (t, e, r) {
      "use strict";
      var n = r(87),
        i = r(7172).Buffer,
        o = r(3081),
        a = i.alloc(128),
        s = 64;
      function f(t, e) {
        o.call(this, "digest"),
          "string" === typeof e && (e = i.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > s ? (e = t(e)) : e.length < s && (e = i.concat([e, a], s));
        for (
          var r = (this._ipad = i.allocUnsafe(s)),
            n = (this._opad = i.allocUnsafe(s)),
            f = 0;
          f < s;
          f++
        )
          (r[f] = 54 ^ e[f]), (n[f] = 92 ^ e[f]);
        this._hash = [r];
      }
      n(f, o),
        (f.prototype._update = function (t) {
          this._hash.push(t);
        }),
        (f.prototype._final = function () {
          var t = this._alg(i.concat(this._hash));
          return this._alg(i.concat([this._opad, t]));
        }),
        (t.exports = f);
    },
    2337: function (t, e, r) {
      "use strict";
      (e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r(2830)),
        (e.createHash = e.Hash = r(7266)),
        (e.createHmac = e.Hmac = r(2873));
      var n = r(4905),
        i = Object.keys(n),
        o = [
          "sha1",
          "sha224",
          "sha256",
          "sha384",
          "sha512",
          "md5",
          "rmd160",
        ].concat(i);
      e.getHashes = function () {
        return o;
      };
      var a = r(41);
      (e.pbkdf2 = a.pbkdf2), (e.pbkdf2Sync = a.pbkdf2Sync);
      var s = r(1240);
      (e.Cipher = s.Cipher),
        (e.createCipher = s.createCipher),
        (e.Cipheriv = s.Cipheriv),
        (e.createCipheriv = s.createCipheriv),
        (e.Decipher = s.Decipher),
        (e.createDecipher = s.createDecipher),
        (e.Decipheriv = s.Decipheriv),
        (e.createDecipheriv = s.createDecipheriv),
        (e.getCiphers = s.getCiphers),
        (e.listCiphers = s.listCiphers);
      var f = r(2834);
      (e.DiffieHellmanGroup = f.DiffieHellmanGroup),
        (e.createDiffieHellmanGroup = f.createDiffieHellmanGroup),
        (e.getDiffieHellman = f.getDiffieHellman),
        (e.createDiffieHellman = f.createDiffieHellman),
        (e.DiffieHellman = f.DiffieHellman);
      var u = r(7545);
      (e.createSign = u.createSign),
        (e.Sign = u.Sign),
        (e.createVerify = u.createVerify),
        (e.Verify = u.Verify),
        (e.createECDH = r(5081));
      var c = r(9639);
      (e.publicEncrypt = c.publicEncrypt),
        (e.privateEncrypt = c.privateEncrypt),
        (e.publicDecrypt = c.publicDecrypt),
        (e.privateDecrypt = c.privateDecrypt);
      var h = r(8519);
      (e.randomFill = h.randomFill),
        (e.randomFillSync = h.randomFillSync),
        (e.createCredentials = function () {
          throw new Error(
            [
              "sorry, createCredentials is not implemented yet",
              "we accept pull requests",
              "https://github.com/crypto-browserify/crypto-browserify",
            ].join("\n")
          );
        }),
        (e.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6,
        });
    },
    8112: function (t, e, r) {
      t.exports = (function () {
        var t =
          t ||
          (function (t, e) {
            var n;
            if (
              ("undefined" !== typeof window &&
                window.crypto &&
                (n = window.crypto),
              "undefined" !== typeof self && self.crypto && (n = self.crypto),
              "undefined" !== typeof globalThis &&
                globalThis.crypto &&
                (n = globalThis.crypto),
              !n &&
                "undefined" !== typeof window &&
                window.msCrypto &&
                (n = window.msCrypto),
              !n &&
                "undefined" !== typeof r.g &&
                r.g.crypto &&
                (n = r.g.crypto),
              !n)
            )
              try {
                n = r(429);
              } catch (m) {}
            var i = function () {
                if (n) {
                  if ("function" === typeof n.getRandomValues)
                    try {
                      return n.getRandomValues(new Uint32Array(1))[0];
                    } catch (m) {}
                  if ("function" === typeof n.randomBytes)
                    try {
                      return n.randomBytes(4).readInt32LE();
                    } catch (m) {}
                }
                throw new Error(
                  "Native crypto module could not be used to get secure random number."
                );
              },
              o =
                Object.create ||
                (function () {
                  function t() {}
                  return function (e) {
                    var r;
                    return (
                      (t.prototype = e), (r = new t()), (t.prototype = null), r
                    );
                  };
                })(),
              a = {},
              s = (a.lib = {}),
              f = (s.Base = {
                extend: function (t) {
                  var e = o(this);
                  return (
                    t && e.mixIn(t),
                    (e.hasOwnProperty("init") && this.init !== e.init) ||
                      (e.init = function () {
                        e.$super.init.apply(this, arguments);
                      }),
                    (e.init.prototype = e),
                    (e.$super = this),
                    e
                  );
                },
                create: function () {
                  var t = this.extend();
                  return t.init.apply(t, arguments), t;
                },
                init: function () {},
                mixIn: function (t) {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                  t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              u = (s.WordArray = f.extend({
                init: function (t, r) {
                  (t = this.words = t || []),
                    (this.sigBytes = r != e ? r : 4 * t.length);
                },
                toString: function (t) {
                  return (t || h).stringify(this);
                },
                concat: function (t) {
                  var e = this.words,
                    r = t.words,
                    n = this.sigBytes,
                    i = t.sigBytes;
                  if ((this.clamp(), n % 4))
                    for (var o = 0; o < i; o++) {
                      var a = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                      e[(n + o) >>> 2] |= a << (24 - ((n + o) % 4) * 8);
                    }
                  else
                    for (var s = 0; s < i; s += 4)
                      e[(n + s) >>> 2] = r[s >>> 2];
                  return (this.sigBytes += i), this;
                },
                clamp: function () {
                  var e = this.words,
                    r = this.sigBytes;
                  (e[r >>> 2] &= 4294967295 << (32 - (r % 4) * 8)),
                    (e.length = t.ceil(r / 4));
                },
                clone: function () {
                  var t = f.clone.call(this);
                  return (t.words = this.words.slice(0)), t;
                },
                random: function (t) {
                  for (var e = [], r = 0; r < t; r += 4) e.push(i());
                  return new u.init(e, t);
                },
              })),
              c = (a.enc = {}),
              h = (c.Hex = {
                stringify: function (t) {
                  for (
                    var e = t.words, r = t.sigBytes, n = [], i = 0;
                    i < r;
                    i++
                  ) {
                    var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                    n.push((o >>> 4).toString(16)),
                      n.push((15 & o).toString(16));
                  }
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, r = [], n = 0; n < e; n += 2)
                    r[n >>> 3] |=
                      parseInt(t.substr(n, 2), 16) << (24 - (n % 8) * 4);
                  return new u.init(r, e / 2);
                },
              }),
              d = (c.Latin1 = {
                stringify: function (t) {
                  for (
                    var e = t.words, r = t.sigBytes, n = [], i = 0;
                    i < r;
                    i++
                  ) {
                    var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                    n.push(String.fromCharCode(o));
                  }
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, r = [], n = 0; n < e; n++)
                    r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
                  return new u.init(r, e);
                },
              }),
              l = (c.Utf8 = {
                stringify: function (t) {
                  try {
                    return decodeURIComponent(escape(d.stringify(t)));
                  } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (t) {
                  return d.parse(unescape(encodeURIComponent(t)));
                },
              }),
              p = (s.BufferedBlockAlgorithm = f.extend({
                reset: function () {
                  (this._data = new u.init()), (this._nDataBytes = 0);
                },
                _append: function (t) {
                  "string" == typeof t && (t = l.parse(t)),
                    this._data.concat(t),
                    (this._nDataBytes += t.sigBytes);
                },
                _process: function (e) {
                  var r,
                    n = this._data,
                    i = n.words,
                    o = n.sigBytes,
                    a = this.blockSize,
                    s = o / (4 * a),
                    f =
                      (s = e
                        ? t.ceil(s)
                        : t.max((0 | s) - this._minBufferSize, 0)) * a,
                    c = t.min(4 * f, o);
                  if (f) {
                    for (var h = 0; h < f; h += a) this._doProcessBlock(i, h);
                    (r = i.splice(0, f)), (n.sigBytes -= c);
                  }
                  return new u.init(r, c);
                },
                clone: function () {
                  var t = f.clone.call(this);
                  return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0,
              })),
              b =
                ((s.Hasher = p.extend({
                  cfg: f.extend(),
                  init: function (t) {
                    (this.cfg = this.cfg.extend(t)), this.reset();
                  },
                  reset: function () {
                    p.reset.call(this), this._doReset();
                  },
                  update: function (t) {
                    return this._append(t), this._process(), this;
                  },
                  finalize: function (t) {
                    return t && this._append(t), this._doFinalize();
                  },
                  blockSize: 16,
                  _createHelper: function (t) {
                    return function (e, r) {
                      return new t.init(r).finalize(e);
                    };
                  },
                  _createHmacHelper: function (t) {
                    return function (e, r) {
                      return new b.HMAC.init(t, r).finalize(e);
                    };
                  },
                })),
                (a.algo = {}));
            return a;
          })(Math);
        return t;
      })();
    },
    4678: function (t, e, r) {
      !(function (e, n) {
        var i;
        t.exports =
          ((i = r(8112)),
          (function (t) {
            var e = i,
              r = e.lib,
              n = r.WordArray,
              o = r.Hasher,
              a = e.algo,
              s = [];
            !(function () {
              for (var e = 0; e < 64; e++)
                s[e] = (4294967296 * t.abs(t.sin(e + 1))) | 0;
            })();
            var f = (a.MD5 = o.extend({
              _doReset: function () {
                this._hash = new n.init([
                  1732584193, 4023233417, 2562383102, 271733878,
                ]);
              },
              _doProcessBlock: function (t, e) {
                for (var r = 0; r < 16; r++) {
                  var n = e + r,
                    i = t[n];
                  t[n] =
                    (16711935 & ((i << 8) | (i >>> 24))) |
                    (4278255360 & ((i << 24) | (i >>> 8)));
                }
                var o = this._hash.words,
                  a = t[e + 0],
                  f = t[e + 1],
                  l = t[e + 2],
                  p = t[e + 3],
                  b = t[e + 4],
                  m = t[e + 5],
                  y = t[e + 6],
                  g = t[e + 7],
                  v = t[e + 8],
                  w = t[e + 9],
                  _ = t[e + 10],
                  M = t[e + 11],
                  S = t[e + 12],
                  E = t[e + 13],
                  k = t[e + 14],
                  A = t[e + 15],
                  x = o[0],
                  I = o[1],
                  O = o[2],
                  R = o[3];
                (x = u(x, I, O, R, a, 7, s[0])),
                  (R = u(R, x, I, O, f, 12, s[1])),
                  (O = u(O, R, x, I, l, 17, s[2])),
                  (I = u(I, O, R, x, p, 22, s[3])),
                  (x = u(x, I, O, R, b, 7, s[4])),
                  (R = u(R, x, I, O, m, 12, s[5])),
                  (O = u(O, R, x, I, y, 17, s[6])),
                  (I = u(I, O, R, x, g, 22, s[7])),
                  (x = u(x, I, O, R, v, 7, s[8])),
                  (R = u(R, x, I, O, w, 12, s[9])),
                  (O = u(O, R, x, I, _, 17, s[10])),
                  (I = u(I, O, R, x, M, 22, s[11])),
                  (x = u(x, I, O, R, S, 7, s[12])),
                  (R = u(R, x, I, O, E, 12, s[13])),
                  (O = u(O, R, x, I, k, 17, s[14])),
                  (x = c(
                    x,
                    (I = u(I, O, R, x, A, 22, s[15])),
                    O,
                    R,
                    f,
                    5,
                    s[16]
                  )),
                  (R = c(R, x, I, O, y, 9, s[17])),
                  (O = c(O, R, x, I, M, 14, s[18])),
                  (I = c(I, O, R, x, a, 20, s[19])),
                  (x = c(x, I, O, R, m, 5, s[20])),
                  (R = c(R, x, I, O, _, 9, s[21])),
                  (O = c(O, R, x, I, A, 14, s[22])),
                  (I = c(I, O, R, x, b, 20, s[23])),
                  (x = c(x, I, O, R, w, 5, s[24])),
                  (R = c(R, x, I, O, k, 9, s[25])),
                  (O = c(O, R, x, I, p, 14, s[26])),
                  (I = c(I, O, R, x, v, 20, s[27])),
                  (x = c(x, I, O, R, E, 5, s[28])),
                  (R = c(R, x, I, O, l, 9, s[29])),
                  (O = c(O, R, x, I, g, 14, s[30])),
                  (x = h(
                    x,
                    (I = c(I, O, R, x, S, 20, s[31])),
                    O,
                    R,
                    m,
                    4,
                    s[32]
                  )),
                  (R = h(R, x, I, O, v, 11, s[33])),
                  (O = h(O, R, x, I, M, 16, s[34])),
                  (I = h(I, O, R, x, k, 23, s[35])),
                  (x = h(x, I, O, R, f, 4, s[36])),
                  (R = h(R, x, I, O, b, 11, s[37])),
                  (O = h(O, R, x, I, g, 16, s[38])),
                  (I = h(I, O, R, x, _, 23, s[39])),
                  (x = h(x, I, O, R, E, 4, s[40])),
                  (R = h(R, x, I, O, a, 11, s[41])),
                  (O = h(O, R, x, I, p, 16, s[42])),
                  (I = h(I, O, R, x, y, 23, s[43])),
                  (x = h(x, I, O, R, w, 4, s[44])),
                  (R = h(R, x, I, O, S, 11, s[45])),
                  (O = h(O, R, x, I, A, 16, s[46])),
                  (x = d(
                    x,
                    (I = h(I, O, R, x, l, 23, s[47])),
                    O,
                    R,
                    a,
                    6,
                    s[48]
                  )),
                  (R = d(R, x, I, O, g, 10, s[49])),
                  (O = d(O, R, x, I, k, 15, s[50])),
                  (I = d(I, O, R, x, m, 21, s[51])),
                  (x = d(x, I, O, R, S, 6, s[52])),
                  (R = d(R, x, I, O, p, 10, s[53])),
                  (O = d(O, R, x, I, _, 15, s[54])),
                  (I = d(I, O, R, x, f, 21, s[55])),
                  (x = d(x, I, O, R, v, 6, s[56])),
                  (R = d(R, x, I, O, A, 10, s[57])),
                  (O = d(O, R, x, I, y, 15, s[58])),
                  (I = d(I, O, R, x, E, 21, s[59])),
                  (x = d(x, I, O, R, b, 6, s[60])),
                  (R = d(R, x, I, O, M, 10, s[61])),
                  (O = d(O, R, x, I, l, 15, s[62])),
                  (I = d(I, O, R, x, w, 21, s[63])),
                  (o[0] = (o[0] + x) | 0),
                  (o[1] = (o[1] + I) | 0),
                  (o[2] = (o[2] + O) | 0),
                  (o[3] = (o[3] + R) | 0);
              },
              _doFinalize: function () {
                var e = this._data,
                  r = e.words,
                  n = 8 * this._nDataBytes,
                  i = 8 * e.sigBytes;
                r[i >>> 5] |= 128 << (24 - (i % 32));
                var o = t.floor(n / 4294967296),
                  a = n;
                (r[15 + (((i + 64) >>> 9) << 4)] =
                  (16711935 & ((o << 8) | (o >>> 24))) |
                  (4278255360 & ((o << 24) | (o >>> 8)))),
                  (r[14 + (((i + 64) >>> 9) << 4)] =
                    (16711935 & ((a << 8) | (a >>> 24))) |
                    (4278255360 & ((a << 24) | (a >>> 8)))),
                  (e.sigBytes = 4 * (r.length + 1)),
                  this._process();
                for (var s = this._hash, f = s.words, u = 0; u < 4; u++) {
                  var c = f[u];
                  f[u] =
                    (16711935 & ((c << 8) | (c >>> 24))) |
                    (4278255360 & ((c << 24) | (c >>> 8)));
                }
                return s;
              },
              clone: function () {
                var t = o.clone.call(this);
                return (t._hash = this._hash.clone()), t;
              },
            }));
            function u(t, e, r, n, i, o, a) {
              var s = t + ((e & r) | (~e & n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function c(t, e, r, n, i, o, a) {
              var s = t + ((e & n) | (r & ~n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function h(t, e, r, n, i, o, a) {
              var s = t + (e ^ r ^ n) + i + a;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function d(t, e, r, n, i, o, a) {
              var s = t + (r ^ (e | ~n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            (e.MD5 = o._createHelper(f)), (e.HmacMD5 = o._createHmacHelper(f));
          })(Math),
          i.MD5);
      })();
    },
    1497: function (t, e, r) {
      "use strict";
      var n = r(1141),
        i = r(3522),
        o = r(4371),
        a = r(2337),
        s = /=/g,
        f = /\+/g,
        u = /\//g;
      function c(t) {
        if (!(this instanceof c)) return new c(t);
        var e = t || {},
          r = void 0 !== e.saltLength ? e.saltLength : 8;
        if ("number" !== typeof r || !isFinite(r) || r < 1)
          throw new TypeError("option saltLength must be finite number > 1");
        var n = void 0 !== e.secretLength ? e.secretLength : 18;
        if ("number" !== typeof n || !isFinite(n) || n < 1)
          throw new TypeError("option secretLength must be finite number > 1");
        (this.saltLength = r), (this.secretLength = n);
      }
      (t.exports = c),
        (c.prototype.create = function (t) {
          if (!t || "string" !== typeof t)
            throw new TypeError("argument secret is required");
          return this._tokenize(t, n(this.saltLength));
        }),
        (c.prototype.secret = function (t) {
          return i(this.secretLength, t);
        }),
        (c.prototype.secretSync = function () {
          return i.sync(this.secretLength);
        }),
        (c.prototype._tokenize = function (t, e) {
          return (
            e +
            "-" +
            ((r = e + "-" + t),
            a
              .createHash("sha1")
              .update(r, "ascii")
              .digest("base64")
              .replace(f, "-")
              .replace(u, "_")
              .replace(s, ""))
          );
          var r;
        }),
        (c.prototype.verify = function (t, e) {
          if (!t || "string" !== typeof t) return !1;
          if (!e || "string" !== typeof e) return !1;
          var r = e.indexOf("-");
          if (-1 === r) return !1;
          var n = e.substr(0, r),
            i = this._tokenize(t, n);
          return o(e, i);
        });
    },
    7392: function (t, e, r) {
      "use strict";
      var n = r(4733),
        i = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
        o = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        f =
          s &&
          (function () {
            var t = {};
            try {
              for (var e in (s(t, "x", { enumerable: !1, value: t }), t))
                return !1;
              return t.x === t;
            } catch (r) {
              return !1;
            }
          })(),
        u = function (t, e, r, n) {
          var i;
          (!(e in t) ||
            ("function" === typeof (i = n) &&
              "[object Function]" === o.call(i) &&
              n())) &&
            (f
              ? s(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  value: r,
                  writable: !0,
                })
              : (t[e] = r));
        },
        c = function (t, e) {
          var r = arguments.length > 2 ? arguments[2] : {},
            o = n(e);
          i && (o = a.call(o, Object.getOwnPropertySymbols(e)));
          for (var s = 0; s < o.length; s += 1) u(t, o[s], e[o[s]], r[o[s]]);
        };
      (c.supportsDescriptors = !!f), (t.exports = c);
    },
    7191: function (t, e, r) {
      "use strict";
      (e.utils = r(5516)),
        (e.Cipher = r(4923)),
        (e.DES = r(225)),
        (e.CBC = r(8701)),
        (e.EDE = r(6540));
    },
    8701: function (t, e, r) {
      "use strict";
      var n = r(7859),
        i = r(87),
        o = {};
      function a(t) {
        n.equal(t.length, 8, "Invalid IV length"), (this.iv = new Array(8));
        for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e];
      }
      (e.instantiate = function (t) {
        function e(e) {
          t.call(this, e), this._cbcInit();
        }
        i(e, t);
        for (var r = Object.keys(o), n = 0; n < r.length; n++) {
          var a = r[n];
          e.prototype[a] = o[a];
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      }),
        (o._cbcInit = function () {
          var t = new a(this.options.iv);
          this._cbcState = t;
        }),
        (o._update = function (t, e, r, n) {
          var i = this._cbcState,
            o = this.constructor.super_.prototype,
            a = i.iv;
          if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++) a[s] ^= t[e + s];
            o._update.call(this, a, 0, r, n);
            for (s = 0; s < this.blockSize; s++) a[s] = r[n + s];
          } else {
            o._update.call(this, t, e, r, n);
            for (s = 0; s < this.blockSize; s++) r[n + s] ^= a[s];
            for (s = 0; s < this.blockSize; s++) a[s] = t[e + s];
          }
        });
    },
    4923: function (t, e, r) {
      "use strict";
      var n = r(7859);
      function i(t) {
        (this.options = t),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0);
      }
      (t.exports = i),
        (i.prototype._init = function () {}),
        (i.prototype.update = function (t) {
          return 0 === t.length
            ? []
            : "decrypt" === this.type
            ? this._updateDecrypt(t)
            : this._updateEncrypt(t);
        }),
        (i.prototype._buffer = function (t, e) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, t.length - e),
              n = 0;
            n < r;
            n++
          )
            this.buffer[this.bufferOff + n] = t[e + n];
          return (this.bufferOff += r), r;
        }),
        (i.prototype._flushBuffer = function (t, e) {
          return (
            this._update(this.buffer, 0, t, e),
            (this.bufferOff = 0),
            this.blockSize
          );
        }),
        (i.prototype._updateEncrypt = function (t) {
          var e = 0,
            r = 0,
            n = ((this.bufferOff + t.length) / this.blockSize) | 0,
            i = new Array(n * this.blockSize);
          0 !== this.bufferOff &&
            ((e += this._buffer(t, e)),
            this.bufferOff === this.buffer.length &&
              (r += this._flushBuffer(i, r)));
          for (
            var o = t.length - ((t.length - e) % this.blockSize);
            e < o;
            e += this.blockSize
          )
            this._update(t, e, i, r), (r += this.blockSize);
          for (; e < t.length; e++, this.bufferOff++)
            this.buffer[this.bufferOff] = t[e];
          return i;
        }),
        (i.prototype._updateDecrypt = function (t) {
          for (
            var e = 0,
              r = 0,
              n = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1,
              i = new Array(n * this.blockSize);
            n > 0;
            n--
          )
            (e += this._buffer(t, e)), (r += this._flushBuffer(i, r));
          return (e += this._buffer(t, e)), i;
        }),
        (i.prototype.final = function (t) {
          var e, r;
          return (
            t && (e = this.update(t)),
            (r =
              "encrypt" === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            e ? e.concat(r) : r
          );
        }),
        (i.prototype._pad = function (t, e) {
          if (0 === e) return !1;
          for (; e < t.length; ) t[e++] = 0;
          return !0;
        }),
        (i.prototype._finalEncrypt = function () {
          if (!this._pad(this.buffer, this.bufferOff)) return [];
          var t = new Array(this.blockSize);
          return this._update(this.buffer, 0, t, 0), t;
        }),
        (i.prototype._unpad = function (t) {
          return t;
        }),
        (i.prototype._finalDecrypt = function () {
          n.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
          var t = new Array(this.blockSize);
          return this._flushBuffer(t, 0), this._unpad(t);
        });
    },
    225: function (t, e, r) {
      "use strict";
      var n = r(7859),
        i = r(87),
        o = r(5516),
        a = r(4923);
      function s() {
        (this.tmp = new Array(2)), (this.keys = null);
      }
      function f(t) {
        a.call(this, t);
        var e = new s();
        (this._desState = e), this.deriveKeys(e, t.key);
      }
      i(f, a),
        (t.exports = f),
        (f.create = function (t) {
          return new f(t);
        });
      var u = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
      (f.prototype.deriveKeys = function (t, e) {
        (t.keys = new Array(32)),
          n.equal(e.length, this.blockSize, "Invalid key length");
        var r = o.readUInt32BE(e, 0),
          i = o.readUInt32BE(e, 4);
        o.pc1(r, i, t.tmp, 0), (r = t.tmp[0]), (i = t.tmp[1]);
        for (var a = 0; a < t.keys.length; a += 2) {
          var s = u[a >>> 1];
          (r = o.r28shl(r, s)), (i = o.r28shl(i, s)), o.pc2(r, i, t.keys, a);
        }
      }),
        (f.prototype._update = function (t, e, r, n) {
          var i = this._desState,
            a = o.readUInt32BE(t, e),
            s = o.readUInt32BE(t, e + 4);
          o.ip(a, s, i.tmp, 0),
            (a = i.tmp[0]),
            (s = i.tmp[1]),
            "encrypt" === this.type
              ? this._encrypt(i, a, s, i.tmp, 0)
              : this._decrypt(i, a, s, i.tmp, 0),
            (a = i.tmp[0]),
            (s = i.tmp[1]),
            o.writeUInt32BE(r, a, n),
            o.writeUInt32BE(r, s, n + 4);
        }),
        (f.prototype._pad = function (t, e) {
          for (var r = t.length - e, n = e; n < t.length; n++) t[n] = r;
          return !0;
        }),
        (f.prototype._unpad = function (t) {
          for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++)
            n.equal(t[r], e);
          return t.slice(0, t.length - e);
        }),
        (f.prototype._encrypt = function (t, e, r, n, i) {
          for (var a = e, s = r, f = 0; f < t.keys.length; f += 2) {
            var u = t.keys[f],
              c = t.keys[f + 1];
            o.expand(s, t.tmp, 0), (u ^= t.tmp[0]), (c ^= t.tmp[1]);
            var h = o.substitute(u, c),
              d = s;
            (s = (a ^ o.permute(h)) >>> 0), (a = d);
          }
          o.rip(s, a, n, i);
        }),
        (f.prototype._decrypt = function (t, e, r, n, i) {
          for (var a = r, s = e, f = t.keys.length - 2; f >= 0; f -= 2) {
            var u = t.keys[f],
              c = t.keys[f + 1];
            o.expand(a, t.tmp, 0), (u ^= t.tmp[0]), (c ^= t.tmp[1]);
            var h = o.substitute(u, c),
              d = a;
            (a = (s ^ o.permute(h)) >>> 0), (s = d);
          }
          o.rip(a, s, n, i);
        });
    },
    6540: function (t, e, r) {
      "use strict";
      var n = r(7859),
        i = r(87),
        o = r(4923),
        a = r(225);
      function s(t, e) {
        n.equal(e.length, 24, "Invalid key length");
        var r = e.slice(0, 8),
          i = e.slice(8, 16),
          o = e.slice(16, 24);
        this.ciphers =
          "encrypt" === t
            ? [
                a.create({ type: "encrypt", key: r }),
                a.create({ type: "decrypt", key: i }),
                a.create({ type: "encrypt", key: o }),
              ]
            : [
                a.create({ type: "decrypt", key: o }),
                a.create({ type: "encrypt", key: i }),
                a.create({ type: "decrypt", key: r }),
              ];
      }
      function f(t) {
        o.call(this, t);
        var e = new s(this.type, this.options.key);
        this._edeState = e;
      }
      i(f, o),
        (t.exports = f),
        (f.create = function (t) {
          return new f(t);
        }),
        (f.prototype._update = function (t, e, r, n) {
          var i = this._edeState;
          i.ciphers[0]._update(t, e, r, n),
            i.ciphers[1]._update(r, n, r, n),
            i.ciphers[2]._update(r, n, r, n);
        }),
        (f.prototype._pad = a.prototype._pad),
        (f.prototype._unpad = a.prototype._unpad);
    },
    5516: function (t, e) {
      "use strict";
      (e.readUInt32BE = function (t, e) {
        return (
          ((t[0 + e] << 24) | (t[1 + e] << 16) | (t[2 + e] << 8) | t[3 + e]) >>>
          0
        );
      }),
        (e.writeUInt32BE = function (t, e, r) {
          (t[0 + r] = e >>> 24),
            (t[1 + r] = (e >>> 16) & 255),
            (t[2 + r] = (e >>> 8) & 255),
            (t[3 + r] = 255 & e);
        }),
        (e.ip = function (t, e, r, n) {
          for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var s = 0; s <= 24; s += 8)
              (i <<= 1), (i |= (e >>> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (t >>> (s + a)) & 1);
          }
          for (a = 6; a >= 0; a -= 2) {
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (e >>> (s + a)) & 1);
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (t >>> (s + a)) & 1);
          }
          (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
        }),
        (e.rip = function (t, e, r, n) {
          for (var i = 0, o = 0, a = 0; a < 4; a++)
            for (var s = 24; s >= 0; s -= 8)
              (i <<= 1),
                (i |= (e >>> (s + a)) & 1),
                (i <<= 1),
                (i |= (t >>> (s + a)) & 1);
          for (a = 4; a < 8; a++)
            for (s = 24; s >= 0; s -= 8)
              (o <<= 1),
                (o |= (e >>> (s + a)) & 1),
                (o <<= 1),
                (o |= (t >>> (s + a)) & 1);
          (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
        }),
        (e.pc1 = function (t, e, r, n) {
          for (var i = 0, o = 0, a = 7; a >= 5; a--) {
            for (var s = 0; s <= 24; s += 8)
              (i <<= 1), (i |= (e >> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (t >> (s + a)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (e >> (s + a)) & 1);
          for (a = 1; a <= 3; a++) {
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (e >> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (t >> (s + a)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (t >> (s + a)) & 1);
          (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
        }),
        (e.r28shl = function (t, e) {
          return ((t << e) & 268435455) | (t >>> (28 - e));
        });
      var r = [
        14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12,
        21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17,
        0, 22, 3, 10, 14, 6, 20, 27, 24,
      ];
      (e.pc2 = function (t, e, n, i) {
        for (var o = 0, a = 0, s = r.length >>> 1, f = 0; f < s; f++)
          (o <<= 1), (o |= (t >>> r[f]) & 1);
        for (f = s; f < r.length; f++) (a <<= 1), (a |= (e >>> r[f]) & 1);
        (n[i + 0] = o >>> 0), (n[i + 1] = a >>> 0);
      }),
        (e.expand = function (t, e, r) {
          var n = 0,
            i = 0;
          n = ((1 & t) << 5) | (t >>> 27);
          for (var o = 23; o >= 15; o -= 4) (n <<= 6), (n |= (t >>> o) & 63);
          for (o = 11; o >= 3; o -= 4) (i |= (t >>> o) & 63), (i <<= 6);
          (i |= ((31 & t) << 1) | (t >>> 31)),
            (e[r + 0] = n >>> 0),
            (e[r + 1] = i >>> 0);
        });
      var n = [
        14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6,
        12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6,
        9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13,
        15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1,
        13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4,
        15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9,
        10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5,
        7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15,
        9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12,
        7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2,
        5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10,
        11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4,
        14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0,
        3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10,
        1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5,
        14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13,
        1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12,
        2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11,
        8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14,
        12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13,
        8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9,
        3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12,
        9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7,
        9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5,
        6, 8, 11,
      ];
      e.substitute = function (t, e) {
        for (var r = 0, i = 0; i < 4; i++) {
          (r <<= 4), (r |= n[64 * i + ((t >>> (18 - 6 * i)) & 63)]);
        }
        for (i = 0; i < 4; i++) {
          (r <<= 4), (r |= n[256 + 64 * i + ((e >>> (18 - 6 * i)) & 63)]);
        }
        return r >>> 0;
      };
      var i = [
        16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8,
        18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
      ];
      (e.permute = function (t) {
        for (var e = 0, r = 0; r < i.length; r++)
          (e <<= 1), (e |= (t >>> i[r]) & 1);
        return e >>> 0;
      }),
        (e.padSplit = function (t, e, r) {
          for (var n = t.toString(2); n.length < e; ) n = "0" + n;
          for (var i = [], o = 0; o < e; o += r) i.push(n.slice(o, o + r));
          return i.join(" ");
        });
    },
    2834: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(5174),
        o = r(7064),
        a = r(1554);
      var s = { binary: !0, hex: !0, base64: !0 };
      (e.DiffieHellmanGroup =
        e.createDiffieHellmanGroup =
        e.getDiffieHellman =
          function (t) {
            var e = new n(o[t].prime, "hex"),
              r = new n(o[t].gen, "hex");
            return new a(e, r);
          }),
        (e.createDiffieHellman = e.DiffieHellman =
          function t(e, r, o, f) {
            return n.isBuffer(r) || void 0 === s[r]
              ? t(e, "binary", r, o)
              : ((r = r || "binary"),
                (f = f || "binary"),
                (o = o || new n([2])),
                n.isBuffer(o) || (o = new n(o, f)),
                "number" === typeof e
                  ? new a(i(e, o), o, !0)
                  : (n.isBuffer(e) || (e = new n(e, r)), new a(e, o, !0)));
          });
    },
    1554: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(3785),
        o = new (r(8773))(),
        a = new i(24),
        s = new i(11),
        f = new i(10),
        u = new i(3),
        c = new i(7),
        h = r(5174),
        d = r(2830);
      function l(t, e) {
        return (
          (e = e || "utf8"),
          n.isBuffer(t) || (t = new n(t, e)),
          (this._pub = new i(t)),
          this
        );
      }
      function p(t, e) {
        return (
          (e = e || "utf8"),
          n.isBuffer(t) || (t = new n(t, e)),
          (this._priv = new i(t)),
          this
        );
      }
      t.exports = m;
      var b = {};
      function m(t, e, r) {
        this.setGenerator(e),
          (this.__prime = new i(t)),
          (this._prime = i.mont(this.__prime)),
          (this._primeLen = t.length),
          (this._pub = void 0),
          (this._priv = void 0),
          (this._primeCode = void 0),
          r
            ? ((this.setPublicKey = l), (this.setPrivateKey = p))
            : (this._primeCode = 8);
      }
      function y(t, e) {
        var r = new n(t.toArray());
        return e ? r.toString(e) : r;
      }
      Object.defineProperty(m.prototype, "verifyError", {
        enumerable: !0,
        get: function () {
          return (
            "number" !== typeof this._primeCode &&
              (this._primeCode = (function (t, e) {
                var r = e.toString("hex"),
                  n = [r, t.toString(16)].join("_");
                if (n in b) return b[n];
                var i,
                  d = 0;
                if (
                  t.isEven() ||
                  !h.simpleSieve ||
                  !h.fermatTest(t) ||
                  !o.test(t)
                )
                  return (
                    (d += 1),
                    (d += "02" === r || "05" === r ? 8 : 4),
                    (b[n] = d),
                    d
                  );
                switch ((o.test(t.shrn(1)) || (d += 2), r)) {
                  case "02":
                    t.mod(a).cmp(s) && (d += 8);
                    break;
                  case "05":
                    (i = t.mod(f)).cmp(u) && i.cmp(c) && (d += 8);
                    break;
                  default:
                    d += 4;
                }
                return (b[n] = d), d;
              })(this.__prime, this.__gen)),
            this._primeCode
          );
        },
      }),
        (m.prototype.generateKeys = function () {
          return (
            this._priv || (this._priv = new i(d(this._primeLen))),
            (this._pub = this._gen
              .toRed(this._prime)
              .redPow(this._priv)
              .fromRed()),
            this.getPublicKey()
          );
        }),
        (m.prototype.computeSecret = function (t) {
          var e = (t = (t = new i(t)).toRed(this._prime))
              .redPow(this._priv)
              .fromRed(),
            r = new n(e.toArray()),
            o = this.getPrime();
          if (r.length < o.length) {
            var a = new n(o.length - r.length);
            a.fill(0), (r = n.concat([a, r]));
          }
          return r;
        }),
        (m.prototype.getPublicKey = function (t) {
          return y(this._pub, t);
        }),
        (m.prototype.getPrivateKey = function (t) {
          return y(this._priv, t);
        }),
        (m.prototype.getPrime = function (t) {
          return y(this.__prime, t);
        }),
        (m.prototype.getGenerator = function (t) {
          return y(this._gen, t);
        }),
        (m.prototype.setGenerator = function (t, e) {
          return (
            (e = e || "utf8"),
            n.isBuffer(t) || (t = new n(t, e)),
            (this.__gen = t),
            (this._gen = new i(t)),
            this
          );
        });
    },
    5174: function (t, e, r) {
      var n = r(2830);
      (t.exports = g), (g.simpleSieve = m), (g.fermatTest = y);
      var i = r(3785),
        o = new i(24),
        a = new (r(8773))(),
        s = new i(1),
        f = new i(2),
        u = new i(5),
        c = (new i(16), new i(8), new i(10)),
        h = new i(3),
        d = (new i(7), new i(11)),
        l = new i(4),
        p = (new i(12), null);
      function b() {
        if (null !== p) return p;
        var t = [];
        t[0] = 2;
        for (var e = 1, r = 3; r < 1048576; r += 2) {
          for (
            var n = Math.ceil(Math.sqrt(r)), i = 0;
            i < e && t[i] <= n && r % t[i] !== 0;
            i++
          );
          (e !== i && t[i] <= n) || (t[e++] = r);
        }
        return (p = t), t;
      }
      function m(t) {
        for (var e = b(), r = 0; r < e.length; r++)
          if (0 === t.modn(e[r])) return 0 === t.cmpn(e[r]);
        return !0;
      }
      function y(t) {
        var e = i.mont(t);
        return 0 === f.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1);
      }
      function g(t, e) {
        if (t < 16) return new i(2 === e || 5 === e ? [140, 123] : [140, 39]);
        var r, p;
        for (e = new i(e); ; ) {
          for (r = new i(n(Math.ceil(t / 8))); r.bitLength() > t; ) r.ishrn(1);
          if ((r.isEven() && r.iadd(s), r.testn(1) || r.iadd(f), e.cmp(f))) {
            if (!e.cmp(u)) for (; r.mod(c).cmp(h); ) r.iadd(l);
          } else for (; r.mod(o).cmp(d); ) r.iadd(l);
          if (
            m((p = r.shrn(1))) &&
            m(r) &&
            y(p) &&
            y(r) &&
            a.test(p) &&
            a.test(r)
          )
            return r;
        }
      }
    },
    9749: function (t, e, r) {
      "use strict";
      var n = e;
      (n.version = r(312).i8),
        (n.utils = r(3369)),
        (n.rand = r(9154)),
        (n.curve = r(1530)),
        (n.curves = r(1044)),
        (n.ec = r(2263)),
        (n.eddsa = r(1680));
    },
    8320: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(3369),
        o = i.getNAF,
        a = i.getJSF,
        s = i.assert;
      function f(t, e) {
        (this.type = t),
          (this.p = new n(e.p, 16)),
          (this.red = e.prime ? n.red(e.prime) : n.mont(this.p)),
          (this.zero = new n(0).toRed(this.red)),
          (this.one = new n(1).toRed(this.red)),
          (this.two = new n(2).toRed(this.red)),
          (this.n = e.n && new n(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function u(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (t.exports = f),
        (f.prototype.point = function () {
          throw new Error("Not implemented");
        }),
        (f.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (f.prototype._fixedNafMul = function (t, e) {
          s(t.precomputed);
          var r = t._getDoubles(),
            n = o(e, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          i /= 3;
          var a,
            f,
            u = [];
          for (a = 0; a < n.length; a += r.step) {
            f = 0;
            for (var c = a + r.step - 1; c >= a; c--) f = (f << 1) + n[c];
            u.push(f);
          }
          for (
            var h = this.jpoint(null, null, null),
              d = this.jpoint(null, null, null),
              l = i;
            l > 0;
            l--
          ) {
            for (a = 0; a < u.length; a++)
              (f = u[a]) === l
                ? (d = d.mixedAdd(r.points[a]))
                : f === -l && (d = d.mixedAdd(r.points[a].neg()));
            h = h.add(d);
          }
          return h.toP();
        }),
        (f.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              a = o(e, r, this._bitLength),
              f = this.jpoint(null, null, null),
              u = a.length - 1;
            u >= 0;
            u--
          ) {
            for (var c = 0; u >= 0 && 0 === a[u]; u--) c++;
            if ((u >= 0 && c++, (f = f.dblp(c)), u < 0)) break;
            var h = a[u];
            s(0 !== h),
              (f =
                "affine" === t.type
                  ? h > 0
                    ? f.mixedAdd(i[(h - 1) >> 1])
                    : f.mixedAdd(i[(-h - 1) >> 1].neg())
                  : h > 0
                  ? f.add(i[(h - 1) >> 1])
                  : f.add(i[(-h - 1) >> 1].neg()));
          }
          return "affine" === t.type ? f.toP() : f;
        }),
        (f.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var s,
            f,
            u,
            c = this._wnafT1,
            h = this._wnafT2,
            d = this._wnafT3,
            l = 0;
          for (s = 0; s < n; s++) {
            var p = (u = e[s])._getNAFPoints(t);
            (c[s] = p.wnd), (h[s] = p.points);
          }
          for (s = n - 1; s >= 1; s -= 2) {
            var b = s - 1,
              m = s;
            if (1 === c[b] && 1 === c[m]) {
              var y = [e[b], null, null, e[m]];
              0 === e[b].y.cmp(e[m].y)
                ? ((y[1] = e[b].add(e[m])),
                  (y[2] = e[b].toJ().mixedAdd(e[m].neg())))
                : 0 === e[b].y.cmp(e[m].y.redNeg())
                ? ((y[1] = e[b].toJ().mixedAdd(e[m])),
                  (y[2] = e[b].add(e[m].neg())))
                : ((y[1] = e[b].toJ().mixedAdd(e[m])),
                  (y[2] = e[b].toJ().mixedAdd(e[m].neg())));
              var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = a(r[b], r[m]);
              for (
                l = Math.max(v[0].length, l),
                  d[b] = new Array(l),
                  d[m] = new Array(l),
                  f = 0;
                f < l;
                f++
              ) {
                var w = 0 | v[0][f],
                  _ = 0 | v[1][f];
                (d[b][f] = g[3 * (w + 1) + (_ + 1)]), (d[m][f] = 0), (h[b] = y);
              }
            } else
              (d[b] = o(r[b], c[b], this._bitLength)),
                (d[m] = o(r[m], c[m], this._bitLength)),
                (l = Math.max(d[b].length, l)),
                (l = Math.max(d[m].length, l));
          }
          var M = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (s = l; s >= 0; s--) {
            for (var E = 0; s >= 0; ) {
              var k = !0;
              for (f = 0; f < n; f++)
                (S[f] = 0 | d[f][s]), 0 !== S[f] && (k = !1);
              if (!k) break;
              E++, s--;
            }
            if ((s >= 0 && E++, (M = M.dblp(E)), s < 0)) break;
            for (f = 0; f < n; f++) {
              var A = S[f];
              0 !== A &&
                (A > 0
                  ? (u = h[f][(A - 1) >> 1])
                  : A < 0 && (u = h[f][(-A - 1) >> 1].neg()),
                (M = "affine" === u.type ? M.mixedAdd(u) : M.add(u)));
            }
          }
          for (s = 0; s < n; s++) h[s] = null;
          return i ? M : M.toP();
        }),
        (f.BasePoint = u),
        (u.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (u.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (f.prototype.decodePoint = function (t, e) {
          t = i.toArray(t, e);
          var r = this.p.byteLength();
          if (
            (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
            t.length - 1 === 2 * r
          )
            return (
              6 === t[0]
                ? s(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && s(t[t.length - 1] % 2 === 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (u.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (u.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (u.prototype.encode = function (t, e) {
          return i.encode(this._encode(e), t);
        }),
        (u.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (u.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (u.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (u.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (u.prototype._getBeta = function () {
          return null;
        }),
        (u.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
    },
    4239: function (t, e, r) {
      "use strict";
      var n = r(3369),
        i = r(3785),
        o = r(87),
        a = r(8320),
        s = n.assert;
      function f(t) {
        (this.twisted = 1 !== (0 | t.a)),
          (this.mOneA = this.twisted && -1 === (0 | t.a)),
          (this.extended = this.mOneA),
          a.call(this, "edwards", t),
          (this.a = new i(t.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new i(t.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(t.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 === (0 | t.c));
      }
      function u(t, e, r, n, o) {
        a.BasePoint.call(this, t, "projective"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              (this.z = n ? new i(n, 16) : this.curve.one),
              (this.t = o && new i(o, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._mulA = function (t) {
          return this.mOneA ? t.redNeg() : this.a.redMul(t);
        }),
        (f.prototype._mulC = function (t) {
          return this.oneC ? t : this.c.redMul(t);
        }),
        (f.prototype.jpoint = function (t, e, r, n) {
          return this.point(t, e, r, n);
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = n.redMul(o.redInvm()),
            s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          var f = s.fromRed().isOdd();
          return ((e && !f) || (!e && f)) && (s = s.redNeg()), this.point(t, s);
        }),
        (f.prototype.pointFromY = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            n = r.redSub(this.c2),
            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = n.redMul(o.redInvm());
          if (0 === a.cmp(this.zero)) {
            if (e) throw new Error("invalid point");
            return this.point(this.zero, t);
          }
          var s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          return (
            s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t)
          );
        }),
        (f.prototype.validate = function (t) {
          if (t.isInfinity()) return !0;
          t.normalize();
          var e = t.x.redSqr(),
            r = t.y.redSqr(),
            n = e.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
          return 0 === n.cmp(i);
        }),
        o(u, a.BasePoint),
        (f.prototype.pointFromJSON = function (t) {
          return u.fromJSON(this, t);
        }),
        (f.prototype.point = function (t, e, r, n) {
          return new u(this, t, e, r, n);
        }),
        (u.fromJSON = function (t, e) {
          return new u(t, e[0], e[1], e[2]);
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (u.prototype._extDbl = function () {
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var n = this.curve._mulA(t),
            i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
            o = n.redAdd(e),
            a = o.redSub(r),
            s = n.redSub(e),
            f = i.redMul(a),
            u = o.redMul(s),
            c = i.redMul(s),
            h = a.redMul(o);
          return this.curve.point(f, u, h, c);
        }),
        (u.prototype._projDbl = function () {
          var t,
            e,
            r,
            n,
            i,
            o,
            a = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            f = this.y.redSqr();
          if (this.curve.twisted) {
            var u = (n = this.curve._mulA(s)).redAdd(f);
            this.zOne
              ? ((t = a.redSub(s).redSub(f).redMul(u.redSub(this.curve.two))),
                (e = u.redMul(n.redSub(f))),
                (r = u.redSqr().redSub(u).redSub(u)))
              : ((i = this.z.redSqr()),
                (o = u.redSub(i).redISub(i)),
                (t = a.redSub(s).redISub(f).redMul(o)),
                (e = u.redMul(n.redSub(f))),
                (r = u.redMul(o)));
          } else
            (n = s.redAdd(f)),
              (i = this.curve._mulC(this.z).redSqr()),
              (o = n.redSub(i).redSub(i)),
              (t = this.curve._mulC(a.redISub(n)).redMul(o)),
              (e = this.curve._mulC(n).redMul(s.redISub(f))),
              (r = n.redMul(o));
          return this.curve.point(t, e, r);
        }),
        (u.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (u.prototype._extAdd = function (t) {
          var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
            r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            n = this.t.redMul(this.curve.dd).redMul(t.t),
            i = this.z.redMul(t.z.redAdd(t.z)),
            o = r.redSub(e),
            a = i.redSub(n),
            s = i.redAdd(n),
            f = r.redAdd(e),
            u = o.redMul(a),
            c = s.redMul(f),
            h = o.redMul(f),
            d = a.redMul(s);
          return this.curve.point(u, c, d, h);
        }),
        (u.prototype._projAdd = function (t) {
          var e,
            r,
            n = this.z.redMul(t.z),
            i = n.redSqr(),
            o = this.x.redMul(t.x),
            a = this.y.redMul(t.y),
            s = this.curve.d.redMul(o).redMul(a),
            f = i.redSub(s),
            u = i.redAdd(s),
            c = this.x
              .redAdd(this.y)
              .redMul(t.x.redAdd(t.y))
              .redISub(o)
              .redISub(a),
            h = n.redMul(f).redMul(c);
          return (
            this.curve.twisted
              ? ((e = n.redMul(u).redMul(a.redSub(this.curve._mulA(o)))),
                (r = f.redMul(u)))
              : ((e = n.redMul(u).redMul(a.redSub(o))),
                (r = this.curve._mulC(f).redMul(u))),
            this.curve.point(h, e, r)
          );
        }),
        (u.prototype.add = function (t) {
          return this.isInfinity()
            ? t
            : t.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(t)
            : this._projAdd(t);
        }),
        (u.prototype.mul = function (t) {
          return this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve._wnafMul(this, t);
        }),
        (u.prototype.mulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1);
        }),
        (u.prototype.jmulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0);
        }),
        (u.prototype.normalize = function () {
          if (this.zOne) return this;
          var t = this.z.redInvm();
          return (
            (this.x = this.x.redMul(t)),
            (this.y = this.y.redMul(t)),
            this.t && (this.t = this.t.redMul(t)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (u.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (u.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (u.prototype.eq = function (t) {
          return (
            this === t ||
            (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()))
          );
        }),
        (u.prototype.eqXToP = function (t) {
          var e = t.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(e)) return !0;
          for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0;
          }
        }),
        (u.prototype.toP = u.prototype.normalize),
        (u.prototype.mixedAdd = u.prototype.add);
    },
    1530: function (t, e, r) {
      "use strict";
      var n = e;
      (n.base = r(8320)),
        (n.short = r(4560)),
        (n.mont = r(5974)),
        (n.edwards = r(4239));
    },
    5974: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(87),
        o = r(8320),
        a = r(3369);
      function s(t) {
        o.call(this, "mont", t),
          (this.a = new n(t.a, 16).toRed(this.red)),
          (this.b = new n(t.b, 16).toRed(this.red)),
          (this.i4 = new n(4).toRed(this.red).redInvm()),
          (this.two = new n(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function f(t, e, r) {
        o.BasePoint.call(this, t, "projective"),
          null === e && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new n(e, 16)),
              (this.z = new n(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      i(s, o),
        (t.exports = s),
        (s.prototype.validate = function (t) {
          var e = t.normalize().x,
            r = e.redSqr(),
            n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
          return 0 === n.redSqrt().redSqr().cmp(n);
        }),
        i(f, o.BasePoint),
        (s.prototype.decodePoint = function (t, e) {
          return this.point(a.toArray(t, e), 1);
        }),
        (s.prototype.point = function (t, e) {
          return new f(this, t, e);
        }),
        (s.prototype.pointFromJSON = function (t) {
          return f.fromJSON(this, t);
        }),
        (f.prototype.precompute = function () {}),
        (f.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (f.fromJSON = function (t, e) {
          return new f(t, e[0], e[1] || t.one);
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (f.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (f.prototype.dbl = function () {
          var t = this.x.redAdd(this.z).redSqr(),
            e = this.x.redSub(this.z).redSqr(),
            r = t.redSub(e),
            n = t.redMul(e),
            i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(n, i);
        }),
        (f.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.diffAdd = function (t, e) {
          var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = t.x.redAdd(t.z),
            o = t.x.redSub(t.z).redMul(r),
            a = i.redMul(n),
            s = e.z.redMul(o.redAdd(a).redSqr()),
            f = e.x.redMul(o.redISub(a).redSqr());
          return this.curve.point(s, f);
        }),
        (f.prototype.mul = function (t) {
          for (
            var e = t.clone(),
              r = this,
              n = this.curve.point(null, null),
              i = [];
            0 !== e.cmpn(0);
            e.iushrn(1)
          )
            i.push(e.andln(1));
          for (var o = i.length - 1; o >= 0; o--)
            0 === i[o]
              ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
              : ((n = r.diffAdd(n, this)), (r = r.dbl()));
          return n;
        }),
        (f.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.jumlAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.eq = function (t) {
          return 0 === this.getX().cmp(t.getX());
        }),
        (f.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (f.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    4560: function (t, e, r) {
      "use strict";
      var n = r(3369),
        i = r(3785),
        o = r(87),
        a = r(8320),
        s = n.assert;
      function f(t) {
        a.call(this, "short", t),
          (this.a = new i(t.a, 16).toRed(this.red)),
          (this.b = new i(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      function u(t, e, r, n) {
        a.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function c(t, e, r, n) {
        a.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r;
            if (t.beta) e = new i(t.beta, 16).toRed(this.red);
            else {
              var n = this._getEndoRoots(this.p);
              e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (t.lambda) r = new i(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                ? (r = o[0])
                : ((r = o[1]),
                  s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return {
              beta: e,
              lambda: r,
              basis: t.basis
                ? t.basis.map(function (t) {
                    return { a: new i(t.a, 16), b: new i(t.b, 16) };
                  })
                : this._getEndoBasis(r),
            };
          }
        }),
        (f.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : i.mont(t),
            r = new i(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (f.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              o,
              a,
              s,
              f,
              u,
              c,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              l = this.n.clone(),
              p = new i(1),
              b = new i(0),
              m = new i(0),
              y = new i(1),
              g = 0;
            0 !== d.cmpn(0);

          ) {
            var v = l.div(d);
            (u = l.sub(v.mul(d))), (c = m.sub(v.mul(p)));
            var w = y.sub(v.mul(b));
            if (!n && u.cmp(h) < 0)
              (e = f.neg()), (r = p), (n = u.neg()), (o = c);
            else if (n && 2 === ++g) break;
            (f = u), (l = d), (d = u), (m = p), (p = c), (y = b), (b = w);
          }
          (a = u.neg()), (s = c);
          var _ = n.sqr().add(o.sqr());
          return (
            a.sqr().add(s.sqr()).cmp(_) >= 0 && ((a = e), (s = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            a.negative && ((a = a.neg()), (s = s.neg())),
            [
              { a: n, b: o },
              { a: a, b: s },
            ]
          );
        }),
        (f.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            a = i.mul(r.a),
            s = o.mul(n.a),
            f = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: t.sub(a).sub(s), k2: f.add(u).neg() };
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n);
        }),
        (f.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (f.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var a = this._endoSplit(e[o]),
              s = t[o],
              f = s._getBeta();
            a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
              (n[2 * o] = s),
              (n[2 * o + 1] = f),
              (i[2 * o] = a.k1),
              (i[2 * o + 1] = a.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0;
            c < 2 * o;
            c++
          )
            (n[c] = null), (i[c] = null);
          return u;
        }),
        o(u, a.BasePoint),
        (f.prototype.point = function (t, e, r) {
          return new u(this, t, e, r);
        }),
        (f.prototype.pointFromJSON = function (t, e) {
          return u.fromJSON(this, t, e);
        }),
        (u.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                });
            }
            return e;
          }
        }),
        (u.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (u.fromJSON = function (t, e, r) {
          "string" === typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return this.inf;
        }),
        (u.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (u.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, a);
        }),
        (u.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (u.prototype.mul = function (t) {
          return (
            (t = new i(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (u.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (u.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (u.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (u.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return e;
        }),
        (u.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        o(c, a.BasePoint),
        (f.prototype.jpoint = function (t, e, r) {
          return new c(this, t, e, r);
        }),
        (c.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (c.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (c.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            a = t.y.redMul(r.redMul(this.z)),
            s = n.redSub(i),
            f = o.redSub(a);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = s.redSqr(),
            c = u.redMul(s),
            h = n.redMul(u),
            d = f.redSqr().redIAdd(c).redISub(h).redISub(h),
            l = f.redMul(h.redISub(d)).redISub(o.redMul(c)),
            p = this.z.redMul(t.z).redMul(s);
          return this.curve.jpoint(d, l, p);
        }),
        (c.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            a = r.redSub(n),
            s = i.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = a.redSqr(),
            u = f.redMul(a),
            c = r.redMul(f),
            h = s.redSqr().redIAdd(u).redISub(c).redISub(c),
            d = s.redMul(c.redISub(h)).redISub(i.redMul(u)),
            l = this.z.redMul(a);
          return this.curve.jpoint(h, d, l);
        }),
        (c.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          var e;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            f = s.redSqr().redSqr(),
            u = a.redAdd(a);
          for (e = 0; e < t; e++) {
            var c = o.redSqr(),
              h = u.redSqr(),
              d = h.redSqr(),
              l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),
              p = o.redMul(h),
              b = l.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(b),
              y = l.redMul(m);
            y = y.redIAdd(y).redISub(d);
            var g = u.redMul(s);
            e + 1 < t && (f = f.redMul(d)), (o = b), (s = g), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), s);
        }),
        (c.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (c.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n),
              f = s.redSqr().redISub(a).redISub(a),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = f),
              (e = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.x.redSqr(),
              h = this.y.redSqr(),
              d = h.redSqr(),
              l = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
            l = l.redIAdd(l);
            var p = c.redAdd(c).redIAdd(c),
              b = p.redSqr(),
              m = d.redIAdd(d);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (t = b.redISub(l).redISub(l)),
              (e = p.redMul(l.redISub(t)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (c.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = s.redSqr().redISub(a).redISub(a);
            t = f;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.z.redSqr(),
              h = this.y.redSqr(),
              d = this.x.redMul(h),
              l = this.x.redSub(c).redMul(this.x.redAdd(c));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d),
              b = (p = p.redIAdd(p)).redAdd(p);
            (t = l.redSqr().redISub(b)),
              (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c));
            var m = h.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (e = l.redMul(p.redISub(t)).redISub(m));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (c.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            a = r.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            f = e.redAdd(e),
            u = (f = f.redIAdd(f)).redMul(a),
            c = s.redSqr().redISub(u.redAdd(u)),
            h = u.redISub(c),
            d = a.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = s.redMul(h).redISub(d),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(c, l, p);
        }),
        (c.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            a = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              o
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var u = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
            c = e.redMul(u);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var h = this.x.redMul(s).redISub(c);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var d = this.y.redMul(u.redMul(f.redISub(u)).redISub(a.redMul(s)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
          return this.curve.jpoint(h, d, l);
        }),
        (c.prototype.mul = function (t, e) {
          return (t = new i(t, e)), this.curve._wnafMul(this, t);
        }),
        (c.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (c.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (c.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (c.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    1044: function (t, e, r) {
      "use strict";
      var n,
        i = e,
        o = r(5294),
        a = r(1530),
        s = r(3369).assert;
      function f(t) {
        "short" === t.type
          ? (this.curve = new a.short(t))
          : "edwards" === t.type
          ? (this.curve = new a.edwards(t))
          : (this.curve = new a.mont(t)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = t.hash),
          s(this.g.validate(), "Invalid curve"),
          s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function u(t, e) {
        Object.defineProperty(i, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new f(e);
            return (
              Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
              }),
              r
            );
          },
        });
      }
      (i.PresetCurve = f),
        u("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: o.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        u("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: o.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        u("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: o.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        u("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: o.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        u("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: o.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        u("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: ["9"],
        }),
        u("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        n = r(8719);
      } catch (c) {
        n = void 0;
      }
      u("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3",
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15",
          },
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          n,
        ],
      });
    },
    2263: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(6513),
        o = r(3369),
        a = r(1044),
        s = r(9154),
        f = o.assert,
        u = r(4093),
        c = r(9758);
      function h(t) {
        if (!(this instanceof h)) return new h(t);
        "string" === typeof t &&
          (f(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t),
          (t = a[t])),
          t instanceof a.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (t.exports = h),
        (h.prototype.keyPair = function (t) {
          return new u(this, t);
        }),
        (h.prototype.keyFromPrivate = function (t, e) {
          return u.fromPrivate(this, t, e);
        }),
        (h.prototype.keyFromPublic = function (t, e) {
          return u.fromPublic(this, t, e);
        }),
        (h.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new i({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || s(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              o = this.n.sub(new n(2));
            ;

          ) {
            var a = new n(e.generate(r));
            if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
          }
        }),
        (h.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (h.prototype.sign = function (t, e, r, o) {
          "object" === typeof r && ((o = r), (r = null)),
            o || (o = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new n(t, 16)));
          for (
            var a = this.n.byteLength(),
              s = e.getPrivate().toArray("be", a),
              f = t.toArray("be", a),
              u = new i({
                hash: this.hash,
                entropy: s,
                nonce: f,
                pers: o.pers,
                persEnc: o.persEnc || "utf8",
              }),
              h = this.n.sub(new n(1)),
              d = 0;
            ;
            d++
          ) {
            var l = o.k ? o.k(d) : new n(u.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)
            ) {
              var p = this.g.mul(l);
              if (!p.isInfinity()) {
                var b = p.getX(),
                  m = b.umod(this.n);
                if (0 !== m.cmpn(0)) {
                  var y = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                  if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                    var g =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                    return (
                      o.canonical &&
                        y.cmp(this.nh) > 0 &&
                        ((y = this.n.sub(y)), (g ^= 1)),
                      new c({ r: m, s: y, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (h.prototype.verify = function (t, e, r, i) {
          (t = this._truncateToN(new n(t, 16))), (r = this.keyFromPublic(r, i));
          var o = (e = new c(e, "hex")).r,
            a = e.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
          var s,
            f = a.invm(this.n),
            u = f.mul(t).umod(this.n),
            h = f.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() &&
                s.eqXToP(o)
            : !(s = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(o);
        }),
        (h.prototype.recoverPubKey = function (t, e, r, i) {
          f((3 & r) === r, "The recovery param is more than two bits"),
            (e = new c(e, i));
          var o = this.n,
            a = new n(t),
            s = e.r,
            u = e.s,
            h = 1 & r,
            d = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
            throw new Error("Unable to find sencond key candinate");
          s = d
            ? this.curve.pointFromX(s.add(this.curve.n), h)
            : this.curve.pointFromX(s, h);
          var l = e.r.invm(o),
            p = o.sub(a).mul(l).umod(o),
            b = u.mul(l).umod(o);
          return this.g.mulAdd(p, s, b);
        }),
        (h.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new c(e, n)).recoveryParam) return e.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(t, e, i);
            } catch (t) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        });
    },
    4093: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(3369).assert;
      function o(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (t.exports = o),
        (o.fromPublic = function (t, e, r) {
          return e instanceof o ? e : new o(t, { pub: e, pubEnc: r });
        }),
        (o.fromPrivate = function (t, e, r) {
          return e instanceof o ? e : new o(t, { priv: e, privEnc: r });
        }),
        (o.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (o.prototype.getPublic = function (t, e) {
          return (
            "string" === typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (o.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (o.prototype._importPrivate = function (t, e) {
          (this.priv = new n(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (o.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? i(t.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  i(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (o.prototype.derive = function (t) {
          return (
            t.validate() || i(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (o.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (o.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (o.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    9758: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(3369),
        o = i.assert;
      function a(t, e) {
        if (t instanceof a) return t;
        this._importDER(t, e) ||
          (o(t.r && t.s, "Signature without r or s"),
          (this.r = new n(t.r, 16)),
          (this.s = new n(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function f(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, a = e.place; o < n; o++, a++)
          (i <<= 8), (i |= t[a]), (i >>>= 0);
        return !(i <= 127) && ((e.place = a), i);
      }
      function u(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function c(t, e) {
        if (e < 128) t.push(e);
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
          t.push(e);
        }
      }
      (t.exports = a),
        (a.prototype._importDER = function (t, e) {
          t = i.toArray(t, e);
          var r = new s();
          if (48 !== t[r.place++]) return !1;
          var o = f(t, r);
          if (!1 === o) return !1;
          if (o + r.place !== t.length) return !1;
          if (2 !== t[r.place++]) return !1;
          var a = f(t, r);
          if (!1 === a) return !1;
          var u = t.slice(r.place, a + r.place);
          if (((r.place += a), 2 !== t[r.place++])) return !1;
          var c = f(t, r);
          if (!1 === c) return !1;
          if (t.length !== c + r.place) return !1;
          var h = t.slice(r.place, c + r.place);
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          if (0 === h[0]) {
            if (!(128 & h[1])) return !1;
            h = h.slice(1);
          }
          return (
            (this.r = new n(u)),
            (this.s = new n(h)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (a.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = u(e),
              r = u(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          c(n, e.length), (n = n.concat(e)).push(2), c(n, r.length);
          var o = n.concat(r),
            a = [48];
          return c(a, o.length), (a = a.concat(o)), i.encode(a, t);
        });
    },
    1680: function (t, e, r) {
      "use strict";
      var n = r(5294),
        i = r(1044),
        o = r(3369),
        a = o.assert,
        s = o.parseBytes,
        f = r(6699),
        u = r(4396);
      function c(t) {
        if (
          (a("ed25519" === t, "only tested with ed25519 so far"),
          !(this instanceof c))
        )
          return new c(t);
        (t = i[t].curve),
          (this.curve = t),
          (this.g = t.g),
          this.g.precompute(t.n.bitLength() + 1),
          (this.pointClass = t.point().constructor),
          (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
          (this.hash = n.sha512);
      }
      (t.exports = c),
        (c.prototype.sign = function (t, e) {
          t = s(t);
          var r = this.keyFromSecret(e),
            n = this.hashInt(r.messagePrefix(), t),
            i = this.g.mul(n),
            o = this.encodePoint(i),
            a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
            f = n.add(a).umod(this.curve.n);
          return this.makeSignature({ R: i, S: f, Rencoded: o });
        }),
        (c.prototype.verify = function (t, e, r) {
          (t = s(t)), (e = this.makeSignature(e));
          var n = this.keyFromPublic(r),
            i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
            o = this.g.mul(e.S());
          return e.R().add(n.pub().mul(i)).eq(o);
        }),
        (c.prototype.hashInt = function () {
          for (var t = this.hash(), e = 0; e < arguments.length; e++)
            t.update(arguments[e]);
          return o.intFromLE(t.digest()).umod(this.curve.n);
        }),
        (c.prototype.keyFromPublic = function (t) {
          return f.fromPublic(this, t);
        }),
        (c.prototype.keyFromSecret = function (t) {
          return f.fromSecret(this, t);
        }),
        (c.prototype.makeSignature = function (t) {
          return t instanceof u ? t : new u(this, t);
        }),
        (c.prototype.encodePoint = function (t) {
          var e = t.getY().toArray("le", this.encodingLength);
          return (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0), e;
        }),
        (c.prototype.decodePoint = function (t) {
          var e = (t = o.parseBytes(t)).length - 1,
            r = t.slice(0, e).concat(-129 & t[e]),
            n = 0 !== (128 & t[e]),
            i = o.intFromLE(r);
          return this.curve.pointFromY(i, n);
        }),
        (c.prototype.encodeInt = function (t) {
          return t.toArray("le", this.encodingLength);
        }),
        (c.prototype.decodeInt = function (t) {
          return o.intFromLE(t);
        }),
        (c.prototype.isPoint = function (t) {
          return t instanceof this.pointClass;
        });
    },
    6699: function (t, e, r) {
      "use strict";
      var n = r(3369),
        i = n.assert,
        o = n.parseBytes,
        a = n.cachedProperty;
      function s(t, e) {
        (this.eddsa = t),
          (this._secret = o(e.secret)),
          t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = o(e.pub));
      }
      (s.fromPublic = function (t, e) {
        return e instanceof s ? e : new s(t, { pub: e });
      }),
        (s.fromSecret = function (t, e) {
          return e instanceof s ? e : new s(t, { secret: e });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        a(s, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        a(s, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        a(s, "privBytes", function () {
          var t = this.eddsa,
            e = this.hash(),
            r = t.encodingLength - 1,
            n = e.slice(0, t.encodingLength);
          return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
        }),
        a(s, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        a(s, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        a(s, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (t) {
          return (
            i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
          );
        }),
        (s.prototype.verify = function (t, e) {
          return this.eddsa.verify(t, e, this);
        }),
        (s.prototype.getSecret = function (t) {
          return (
            i(this._secret, "KeyPair is public only"),
            n.encode(this.secret(), t)
          );
        }),
        (s.prototype.getPublic = function (t) {
          return n.encode(this.pubBytes(), t);
        }),
        (t.exports = s);
    },
    4396: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(3369),
        o = i.assert,
        a = i.cachedProperty,
        s = i.parseBytes;
      function f(t, e) {
        (this.eddsa = t),
          "object" !== typeof e && (e = s(e)),
          Array.isArray(e) &&
            (e = {
              R: e.slice(0, t.encodingLength),
              S: e.slice(t.encodingLength),
            }),
          o(e.R && e.S, "Signature without R or S"),
          t.isPoint(e.R) && (this._R = e.R),
          e.S instanceof n && (this._S = e.S),
          (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
          (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
      }
      a(f, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        a(f, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        a(f, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        a(f, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (f.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (f.prototype.toHex = function () {
          return i.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (t.exports = f);
    },
    8719: function (t) {
      t.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    3369: function (t, e, r) {
      "use strict";
      var n = e,
        i = r(3785),
        o = r(7859),
        a = r(2910);
      (n.assert = o),
        (n.toArray = a.toArray),
        (n.zero2 = a.zero2),
        (n.toHex = a.toHex),
        (n.encode = a.encode),
        (n.getNAF = function (t, e, r) {
          var n = new Array(Math.max(t.bitLength(), r) + 1);
          n.fill(0);
          for (var i = 1 << (e + 1), o = t.clone(), a = 0; a < n.length; a++) {
            var s,
              f = o.andln(i - 1);
            o.isOdd()
              ? ((s = f > (i >> 1) - 1 ? (i >> 1) - f : f), o.isubn(s))
              : (s = 0),
              (n[a] = s),
              o.iushrn(1);
          }
          return n;
        }),
        (n.getJSF = function (t, e) {
          var r = [[], []];
          (t = t.clone()), (e = e.clone());
          for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
            var a,
              s,
              f = (t.andln(3) + i) & 3,
              u = (e.andln(3) + o) & 3;
            3 === f && (f = -1),
              3 === u && (u = -1),
              (a =
                0 === (1 & f)
                  ? 0
                  : (3 !== (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== u
                  ? f
                  : -f),
              r[0].push(a),
              (s =
                0 === (1 & u)
                  ? 0
                  : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== f
                  ? u
                  : -u),
              r[1].push(s),
              2 * i === a + 1 && (i = 1 - i),
              2 * o === s + 1 && (o = 1 - o),
              t.iushrn(1),
              e.iushrn(1);
          }
          return r;
        }),
        (n.cachedProperty = function (t, e, r) {
          var n = "_" + e;
          t.prototype[e] = function () {
            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
          };
        }),
        (n.parseBytes = function (t) {
          return "string" === typeof t ? n.toArray(t, "hex") : t;
        }),
        (n.intFromLE = function (t) {
          return new i(t, "hex", "le");
        });
    },
    2098: function (t) {
      "use strict";
      function e(t, e) {
        if (void 0 === t || null === t)
          throw new TypeError("Cannot convert first argument to object");
        for (var r = Object(t), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (void 0 !== i && null !== i)
            for (
              var o = Object.keys(Object(i)), a = 0, s = o.length;
              a < s;
              a++
            ) {
              var f = o[a],
                u = Object.getOwnPropertyDescriptor(i, f);
              void 0 !== u && u.enumerable && (r[f] = i[f]);
            }
        }
        return r;
      }
      t.exports = {
        assign: e,
        polyfill: function () {
          Object.assign ||
            Object.defineProperty(Object, "assign", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: e,
            });
        },
      };
    },
    343: function (t) {
      "use strict";
      var e,
        r = "object" === typeof Reflect ? Reflect : null,
        n =
          r && "function" === typeof r.apply
            ? r.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      e =
        r && "function" === typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function o() {
        o.init.call(this);
      }
      (t.exports = o),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function i(r) {
              t.removeListener(e, o), n(r);
            }
            function o() {
              "function" === typeof t.removeListener &&
                t.removeListener("error", i),
                r([].slice.call(arguments));
            }
            b(t, e, o, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" === typeof t.on && b(t, "error", e, r);
                })(t, i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var a = 10;
      function s(t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function f(t) {
        return void 0 === t._maxListeners
          ? o.defaultMaxListeners
          : t._maxListeners;
      }
      function u(t, e, r, n) {
        var i, o, a, u;
        if (
          (s(r),
          void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (o = t._events)),
              (a = o[e])),
          void 0 === a)
        )
          (a = o[e] = r), ++t._eventsCount;
        else if (
          ("function" === typeof a
            ? (a = o[e] = n ? [r, a] : [a, r])
            : n
            ? a.unshift(r)
            : a.push(r),
          (i = f(t)) > 0 && a.length > i && !a.warned)
        ) {
          a.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = t),
            (c.type = e),
            (c.count = a.length),
            (u = c),
            console && console.warn && console.warn(u);
        }
        return t;
      }
      function c() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function h(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          i = c.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function d(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(i)
          : p(i, i.length);
      }
      function l(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function p(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function b(t, e, r, n) {
        if ("function" === typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t
            );
          t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          a = t;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return f(this);
        }),
        (o.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var a;
            if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
            var s = new Error(
              "Unhandled error." + (a ? " (" + a.message + ")" : "")
            );
            throw ((s.context = a), s);
          }
          var f = o[t];
          if (void 0 === f) return !1;
          if ("function" === typeof f) n(f, this, e);
          else {
            var u = f.length,
              c = p(f, u);
            for (r = 0; r < u; ++r) n(c[r], this, e);
          }
          return !0;
        }),
        (o.prototype.addListener = function (t, e) {
          return u(this, t, e, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (t, e) {
          return u(this, t, e, !0);
        }),
        (o.prototype.once = function (t, e) {
          return s(e), this.on(t, h(this, t, e)), this;
        }),
        (o.prototype.prependOnceListener = function (t, e) {
          return s(e), this.prependListener(t, h(this, t, e)), this;
        }),
        (o.prototype.removeListener = function (t, e) {
          var r, n, i, o, a;
          if ((s(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t],
                n.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" !== typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === e || r[o].listener === e) {
                (a = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, i),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", t, a || e);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (o.prototype.listeners = function (t) {
          return d(this, t, !0);
        }),
        (o.prototype.rawListeners = function (t) {
          return d(this, t, !1);
        }),
        (o.listenerCount = function (t, e) {
          return "function" === typeof t.listenerCount
            ? t.listenerCount(e)
            : l.call(t, e);
        }),
        (o.prototype.listenerCount = l),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    5883: function (t, e, r) {
      var n = r(7172).Buffer,
        i = r(9500);
      t.exports = function (t, e, r, o) {
        if (
          (n.isBuffer(t) || (t = n.from(t, "binary")),
          e && (n.isBuffer(e) || (e = n.from(e, "binary")), 8 !== e.length))
        )
          throw new RangeError("salt should be Buffer with 8 byte length");
        for (
          var a = r / 8, s = n.alloc(a), f = n.alloc(o || 0), u = n.alloc(0);
          a > 0 || o > 0;

        ) {
          var c = new i();
          c.update(u), c.update(t), e && c.update(e), (u = c.digest());
          var h = 0;
          if (a > 0) {
            var d = s.length - a;
            (h = Math.min(a, u.length)), u.copy(s, d, 0, h), (a -= h);
          }
          if (h < u.length && o > 0) {
            var l = f.length - o,
              p = Math.min(o, u.length - h);
            u.copy(f, l, h, h + p), (o -= p);
          }
        }
        return u.fill(0), { key: s, iv: f };
      };
    },
    8372: function (t) {
      var e = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString;
      t.exports = function (t, n, i) {
        if ("[object Function]" !== r.call(n))
          throw new TypeError("iterator must be a function");
        var o = t.length;
        if (o === +o) for (var a = 0; a < o; a++) n.call(i, t[a], a, t);
        else for (var s in t) e.call(t, s) && n.call(i, t[s], s, t);
      };
    },
    8458: function (t) {
      "use strict";
      var e = "Function.prototype.bind called on incompatible ",
        r = Array.prototype.slice,
        n = Object.prototype.toString,
        i = "[object Function]";
      t.exports = function (t) {
        var o = this;
        if ("function" !== typeof o || n.call(o) !== i)
          throw new TypeError(e + o);
        for (
          var a,
            s = r.call(arguments, 1),
            f = function () {
              if (this instanceof a) {
                var e = o.apply(this, s.concat(r.call(arguments)));
                return Object(e) === e ? e : this;
              }
              return o.apply(t, s.concat(r.call(arguments)));
            },
            u = Math.max(0, o.length - s.length),
            c = [],
            h = 0;
          h < u;
          h++
        )
          c.push("$" + h);
        if (
          ((a = Function(
            "binder",
            "return function (" +
              c.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(f)),
          o.prototype)
        ) {
          var d = function () {};
          (d.prototype = o.prototype),
            (a.prototype = new d()),
            (d.prototype = null);
        }
        return a;
      };
    },
    132: function (t, e, r) {
      "use strict";
      var n = r(8458);
      t.exports = Function.prototype.bind || n;
    },
    8750: function (t, e, r) {
      "use strict";
      var n,
        i = SyntaxError,
        o = Function,
        a = TypeError,
        s = function (t) {
          try {
            return o('"use strict"; return (' + t + ").constructor;")();
          } catch (e) {}
        },
        f = Object.getOwnPropertyDescriptor;
      if (f)
        try {
          f({}, "");
        } catch (I) {
          f = null;
        }
      var u = function () {
          throw new a();
        },
        c = f
          ? (function () {
              try {
                return u;
              } catch (t) {
                try {
                  return f(arguments, "callee").get;
                } catch (e) {
                  return u;
                }
              }
            })()
          : u,
        h = r(679)(),
        d =
          Object.getPrototypeOf ||
          function (t) {
            return t.__proto__;
          },
        l = {},
        p = "undefined" === typeof Uint8Array ? n : d(Uint8Array),
        b = {
          "%AggregateError%":
            "undefined" === typeof AggregateError ? n : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
          "%ArrayIteratorPrototype%": h ? d([][Symbol.iterator]()) : n,
          "%AsyncFromSyncIteratorPrototype%": n,
          "%AsyncFunction%": l,
          "%AsyncGenerator%": l,
          "%AsyncGeneratorFunction%": l,
          "%AsyncIteratorPrototype%": l,
          "%Atomics%": "undefined" === typeof Atomics ? n : Atomics,
          "%BigInt%": "undefined" === typeof BigInt ? n : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" === typeof DataView ? n : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" === typeof Float32Array ? n : Float32Array,
          "%Float64Array%":
            "undefined" === typeof Float64Array ? n : Float64Array,
          "%FinalizationRegistry%":
            "undefined" === typeof FinalizationRegistry
              ? n
              : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": l,
          "%Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
          "%Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
          "%Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": h ? d(d([][Symbol.iterator]())) : n,
          "%JSON%": "object" === typeof JSON ? JSON : n,
          "%Map%": "undefined" === typeof Map ? n : Map,
          "%MapIteratorPrototype%":
            "undefined" !== typeof Map && h
              ? d(new Map()[Symbol.iterator]())
              : n,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" === typeof Promise ? n : Promise,
          "%Proxy%": "undefined" === typeof Proxy ? n : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" === typeof Reflect ? n : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" === typeof Set ? n : Set,
          "%SetIteratorPrototype%":
            "undefined" !== typeof Set && h
              ? d(new Set()[Symbol.iterator]())
              : n,
          "%SharedArrayBuffer%":
            "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": h ? d(""[Symbol.iterator]()) : n,
          "%Symbol%": h ? Symbol : n,
          "%SyntaxError%": i,
          "%ThrowTypeError%": c,
          "%TypedArray%": p,
          "%TypeError%": a,
          "%Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          "%Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
          "%Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
          "%WeakRef%": "undefined" === typeof WeakRef ? n : WeakRef,
          "%WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet,
        },
        m = function t(e) {
          var r;
          if ("%AsyncFunction%" === e) r = s("async function () {}");
          else if ("%GeneratorFunction%" === e) r = s("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e)
            r = s("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var i = t("%AsyncGenerator%");
            i && (r = d(i.prototype));
          }
          return (b[e] = r), r;
        },
        y = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        g = r(132),
        v = r(7492),
        w = g.call(Function.call, Array.prototype.concat),
        _ = g.call(Function.apply, Array.prototype.splice),
        M = g.call(Function.call, String.prototype.replace),
        S = g.call(Function.call, String.prototype.slice),
        E =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        k = /\\(\\)?/g,
        A = function (t) {
          var e = S(t, 0, 1),
            r = S(t, -1);
          if ("%" === e && "%" !== r)
            throw new i("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r && "%" !== e)
            throw new i("invalid intrinsic syntax, expected opening `%`");
          var n = [];
          return (
            M(t, E, function (t, e, r, i) {
              n[n.length] = r ? M(i, k, "$1") : e || t;
            }),
            n
          );
        },
        x = function (t, e) {
          var r,
            n = t;
          if ((v(y, n) && (n = "%" + (r = y[n])[0] + "%"), v(b, n))) {
            var o = b[n];
            if ((o === l && (o = m(n)), "undefined" === typeof o && !e))
              throw new a(
                "intrinsic " +
                  t +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: r, name: n, value: o };
          }
          throw new i("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, e) {
        if ("string" !== typeof t || 0 === t.length)
          throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" !== typeof e)
          throw new a('"allowMissing" argument must be a boolean');
        var r = A(t),
          n = r.length > 0 ? r[0] : "",
          o = x("%" + n + "%", e),
          s = o.name,
          u = o.value,
          c = !1,
          h = o.alias;
        h && ((n = h[0]), _(r, w([0, 1], h)));
        for (var d = 1, l = !0; d < r.length; d += 1) {
          var p = r[d],
            m = S(p, 0, 1),
            y = S(p, -1);
          if (
            ('"' === m ||
              "'" === m ||
              "`" === m ||
              '"' === y ||
              "'" === y ||
              "`" === y) &&
            m !== y
          )
            throw new i("property names with quotes must have matching quotes");
          if (
            (("constructor" !== p && l) || (c = !0),
            v(b, (s = "%" + (n += "." + p) + "%")))
          )
            u = b[s];
          else if (null != u) {
            if (!(p in u)) {
              if (!e)
                throw new a(
                  "base intrinsic for " +
                    t +
                    " exists, but the property is not available."
                );
              return;
            }
            if (f && d + 1 >= r.length) {
              var g = f(u, p);
              u =
                (l = !!g) && "get" in g && !("originalValue" in g.get)
                  ? g.get
                  : u[p];
            } else (l = v(u, p)), (u = u[p]);
            l && !c && (b[s] = u);
          }
        }
        return u;
      };
    },
    679: function (t, e, r) {
      "use strict";
      var n = "undefined" !== typeof Symbol && Symbol,
        i = r(8186);
      t.exports = function () {
        return (
          "function" === typeof n &&
          "function" === typeof Symbol &&
          "symbol" === typeof n("foo") &&
          "symbol" === typeof Symbol("bar") &&
          i()
        );
      };
    },
    8186: function (t) {
      "use strict";
      t.exports = function () {
        if (
          "function" !== typeof Symbol ||
          "function" !== typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" === typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" === typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if ("function" === typeof Object.keys && 0 !== Object.keys(t).length)
          return !1;
        if (
          "function" === typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(t).length
        )
          return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" === typeof Object.getOwnPropertyDescriptor) {
          var i = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== i.value || !0 !== i.enumerable) return !1;
        }
        return !0;
      };
    },
    698: function (t, e, r) {
      "use strict";
      var n = r(8186);
      t.exports = function () {
        return n() && !!Symbol.toStringTag;
      };
    },
    7492: function (t, e, r) {
      "use strict";
      var n = r(132);
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    6883: function (t, e, r) {
      "use strict";
      var n = r(7172).Buffer,
        i = r(8310).Transform;
      function o(t) {
        i.call(this),
          (this._block = n.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(87)(o, i),
        (o.prototype._transform = function (t, e, r) {
          var n = null;
          try {
            this.update(t, e);
          } catch (i) {
            n = i;
          }
          r(n);
        }),
        (o.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (r) {
            e = r;
          }
          t(e);
        }),
        (o.prototype.update = function (t, e) {
          if (
            ((function (t, e) {
              if (!n.isBuffer(t) && "string" !== typeof t)
                throw new TypeError(e + " must be a string or a buffer");
            })(t, "Data"),
            this._finalized)
          )
            throw new Error("Digest already called");
          n.isBuffer(t) || (t = n.from(t, e));
          for (
            var r = this._block, i = 0;
            this._blockOffset + t.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = t[i++];
            this._update(), (this._blockOffset = 0);
          }
          for (; i < t.length; ) r[this._blockOffset++] = t[i++];
          for (var a = 0, s = 8 * t.length; s > 0; ++a)
            (this._length[a] += s),
              (s = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function () {
          throw new Error("_update is not implemented");
        }),
        (o.prototype.digest = function (t) {
          if (this._finalized) throw new Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return e;
        }),
        (o.prototype._digest = function () {
          throw new Error("_digest is not implemented");
        }),
        (t.exports = o);
    },
    5294: function (t, e, r) {
      var n = e;
      (n.utils = r(8626)),
        (n.common = r(8717)),
        (n.sha = r(2589)),
        (n.ripemd = r(8978)),
        (n.hmac = r(2750)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    8717: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(7859);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(t)
          );
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t);
          } else
            for (
              n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    2750: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(7859);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = o),
        (o.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
            t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (o.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    8978: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(8717),
        o = n.rotl32,
        a = n.sum32,
        s = n.sum32_3,
        f = n.sum32_4,
        u = i.BlockHash;
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function h(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      function d(t) {
        return t <= 15
          ? 0
          : t <= 31
          ? 1518500249
          : t <= 47
          ? 1859775393
          : t <= 63
          ? 2400959708
          : 2840853838;
      }
      function l(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
          ? 1548603684
          : t <= 47
          ? 1836072691
          : t <= 63
          ? 2053994217
          : 0;
      }
      n.inherits(c, u),
        (e.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              c = this.h[4],
              g = r,
              v = n,
              w = i,
              _ = u,
              M = c,
              S = 0;
            S < 80;
            S++
          ) {
            var E = a(o(f(r, h(S, n, i, u), t[p[S] + e], d(S)), m[S]), c);
            (r = c),
              (c = u),
              (u = o(i, 10)),
              (i = n),
              (n = E),
              (E = a(o(f(g, h(79 - S, v, w, _), t[b[S] + e], l(S)), y[S]), M)),
              (g = M),
              (M = _),
              (_ = o(w, 10)),
              (w = v),
              (v = E);
          }
          (E = s(this.h[1], i, _)),
            (this.h[1] = s(this.h[2], u, M)),
            (this.h[2] = s(this.h[3], c, g)),
            (this.h[3] = s(this.h[4], r, v)),
            (this.h[4] = s(this.h[0], n, w)),
            (this.h[0] = E);
        }),
        (c.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var p = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        b = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        m = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        y = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    2589: function (t, e, r) {
      "use strict";
      (e.sha1 = r(9330)),
        (e.sha224 = r(5168)),
        (e.sha256 = r(375)),
        (e.sha384 = r(8899)),
        (e.sha512 = r(790));
    },
    9330: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(8717),
        o = r(8156),
        a = n.rotl32,
        s = n.sum32,
        f = n.sum32_5,
        u = o.ft_1,
        c = i.BlockHash,
        h = [1518500249, 1859775393, 2400959708, 3395469782];
      function d() {
        if (!(this instanceof d)) return new d();
        c.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = new Array(80));
      }
      n.inherits(d, c),
        (t.exports = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 80),
        (d.padLength = 64),
        (d.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            c = this.h[2],
            d = this.h[3],
            l = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              b = f(a(i, 5), u(p, o, c, d), l, r[n], h[p]);
            (l = d), (d = c), (c = a(o, 30)), (o = i), (i = b);
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], c)),
            (this.h[3] = s(this.h[3], d)),
            (this.h[4] = s(this.h[4], l));
        }),
        (d.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    5168: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(375);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    375: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(8717),
        o = r(8156),
        a = r(7859),
        s = n.sum32,
        f = n.sum32_4,
        u = n.sum32_5,
        c = o.ch32,
        h = o.maj32,
        d = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        m = i.BlockHash,
        y = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function g() {
        if (!(this instanceof g)) return new g();
        m.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = y),
          (this.W = new Array(64));
      }
      n.inherits(g, m),
        (t.exports = g),
        (g.blockSize = 512),
        (g.outSize = 256),
        (g.hmacStrength = 192),
        (g.padLength = 64),
        (g.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            m = this.h[2],
            y = this.h[3],
            g = this.h[4],
            v = this.h[5],
            w = this.h[6],
            _ = this.h[7];
          for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var M = u(_, l(g), c(g, v, w), this.k[n], r[n]),
              S = s(d(i), h(i, o, m));
            (_ = w),
              (w = v),
              (v = g),
              (g = s(y, M)),
              (y = m),
              (m = o),
              (o = i),
              (i = s(M, S));
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], m)),
            (this.h[3] = s(this.h[3], y)),
            (this.h[4] = s(this.h[4], g)),
            (this.h[5] = s(this.h[5], v)),
            (this.h[6] = s(this.h[6], w)),
            (this.h[7] = s(this.h[7], _));
        }),
        (g.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    8899: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(790);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    790: function (t, e, r) {
      "use strict";
      var n = r(8626),
        i = r(8717),
        o = r(7859),
        a = n.rotr64_hi,
        s = n.rotr64_lo,
        f = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        h = n.sum64_hi,
        d = n.sum64_lo,
        l = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        m = n.sum64_5_lo,
        y = i.BlockHash,
        g = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        y.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = g),
          (this.W = new Array(160));
      }
      function w(t, e, r, n, i) {
        var o = (t & r) ^ (~t & i);
        return o < 0 && (o += 4294967296), o;
      }
      function _(t, e, r, n, i, o) {
        var a = (e & n) ^ (~e & o);
        return a < 0 && (a += 4294967296), a;
      }
      function M(t, e, r, n, i) {
        var o = (t & r) ^ (t & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function S(t, e, r, n, i, o) {
        var a = (e & n) ^ (e & o) ^ (n & o);
        return a < 0 && (a += 4294967296), a;
      }
      function E(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function k(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function A(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function x(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ f(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function O(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function R(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ f(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function B(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(v, y),
        (t.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var i = R(r[n - 4], r[n - 3]),
              o = B(r[n - 4], r[n - 3]),
              a = r[n - 14],
              s = r[n - 13],
              f = I(r[n - 30], r[n - 29]),
              u = O(r[n - 30], r[n - 29]),
              c = r[n - 32],
              h = r[n - 31];
            (r[n] = l(i, o, a, s, f, u, c, h)),
              (r[n + 1] = p(i, o, a, s, f, u, c, h));
          }
        }),
        (v.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            a = this.h[2],
            s = this.h[3],
            f = this.h[4],
            u = this.h[5],
            l = this.h[6],
            p = this.h[7],
            y = this.h[8],
            g = this.h[9],
            v = this.h[10],
            I = this.h[11],
            O = this.h[12],
            R = this.h[13],
            B = this.h[14],
            j = this.h[15];
          o(this.k.length === r.length);
          for (var P = 0; P < r.length; P += 2) {
            var T = B,
              C = j,
              N = A(y, g),
              L = x(y, g),
              D = w(y, g, v, I, O),
              q = _(y, g, v, I, O, R),
              U = this.k[P],
              z = this.k[P + 1],
              F = r[P],
              H = r[P + 1],
              K = b(T, C, N, L, D, q, U, z, F, H),
              W = m(T, C, N, L, D, q, U, z, F, H);
            (T = E(n, i)),
              (C = k(n, i)),
              (N = M(n, i, a, s, f)),
              (L = S(n, i, a, s, f, u));
            var V = h(T, C, N, L),
              G = d(T, C, N, L);
            (B = O),
              (j = R),
              (O = v),
              (R = I),
              (v = y),
              (I = g),
              (y = h(l, p, K, W)),
              (g = d(p, p, K, W)),
              (l = f),
              (p = u),
              (f = a),
              (u = s),
              (a = n),
              (s = i),
              (n = h(K, W, V, G)),
              (i = d(K, W, V, G));
          }
          c(this.h, 0, n, i),
            c(this.h, 2, a, s),
            c(this.h, 4, f, u),
            c(this.h, 6, l, p),
            c(this.h, 8, y, g),
            c(this.h, 10, v, I),
            c(this.h, 12, O, R),
            c(this.h, 14, B, j);
        }),
        (v.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    8156: function (t, e, r) {
      "use strict";
      var n = r(8626).rotr32;
      function i(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function a(t, e, r) {
        return t ^ e ^ r;
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t
          ? i(e, r, n)
          : 1 === t || 3 === t
          ? a(e, r, n)
          : 2 === t
          ? o(e, r, n)
          : void 0;
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = a),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    8626: function (t, e, r) {
      "use strict";
      var n = r(7859),
        i = r(87);
      function o(t, e) {
        return (
          55296 === (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function a(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function s(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function f(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = i),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" === typeof t)
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                    (t = "0" + t),
                    i = 0;
                  i < t.length;
                  i += 2
                )
                  r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128
                  ? (r[n++] = a)
                  : a < 2048
                  ? ((r[n++] = (a >> 6) | 192), (r[n++] = (63 & a) | 128))
                  : o(t, i)
                  ? ((a =
                      65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i))),
                    (r[n++] = (a >> 18) | 240),
                    (r[n++] = ((a >> 12) & 63) | 128),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128))
                  : ((r[n++] = (a >> 12) | 224),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128));
              }
          else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += s(t[r].toString(16));
          return e;
        }),
        (e.htonl = a),
        (e.toHex32 = function (t, e) {
          for (var r = "", n = 0; n < t.length; n++) {
            var i = t[n];
            "little" === e && (i = a(i)), (r += f(i.toString(16)));
          }
          return r;
        }),
        (e.zero2 = s),
        (e.zero8 = f),
        (e.join32 = function (t, e, r, i) {
          var o = r - e;
          n(o % 4 === 0);
          for (
            var a = new Array(o / 4), s = 0, f = e;
            s < a.length;
            s++, f += 4
          ) {
            var u;
            (u =
              "big" === i
                ? (t[f] << 24) | (t[f + 1] << 16) | (t[f + 2] << 8) | t[f + 3]
                : (t[f + 3] << 24) | (t[f + 2] << 16) | (t[f + 1] << 8) | t[f]),
              (a[s] = u >>> 0);
          }
          return a;
        }),
        (e.split32 = function (t, e) {
          for (
            var r = new Array(4 * t.length), n = 0, i = 0;
            n < t.length;
            n++, i += 4
          ) {
            var o = t[n];
            "big" === e
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0,
            a = (o < n ? 1 : 0) + r + i;
          (t[e] = a >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, i, o, a, s) {
          var f = 0,
            u = e;
          return (
            (f += (u = (u + n) >>> 0) < e ? 1 : 0),
            (f += (u = (u + o) >>> 0) < o ? 1 : 0),
            (t + r + i + a + (f += (u = (u + s) >>> 0) < s ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, i, o, a, s) {
          return (e + n + o + s) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, i, o, a, s, f, u) {
          var c = 0,
            h = e;
          return (
            (c += (h = (h + n) >>> 0) < e ? 1 : 0),
            (c += (h = (h + o) >>> 0) < o ? 1 : 0),
            (c += (h = (h + s) >>> 0) < s ? 1 : 0),
            (t + r + i + a + f + (c += (h = (h + u) >>> 0) < u ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, i, o, a, s, f, u) {
          return (e + n + o + s + u) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    6513: function (t, e, r) {
      "use strict";
      var n = r(5294),
        i = r(2910),
        o = r(7859);
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
          r = i.toArray(t.nonce, t.nonceEnc || "hex"),
          n = i.toArray(t.pers, t.persEnc || "hex");
        o(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, n);
      }
      (t.exports = a),
        (a.prototype._init = function (t, e, r) {
          var n = t.concat(e).concat(r);
          (this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8));
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1);
          this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (a.prototype._hmac = function () {
          return new n.hmac(this.hash, this.K);
        }),
        (a.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (a.prototype.reseed = function (t, e, r, n) {
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            (t = i.toArray(t, e)),
            (r = i.toArray(r, n)),
            o(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (a.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = i.toArray(r, n || "hex")), this._update(r));
          for (var o = []; o.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var a = o.slice(0, t);
          return this._update(r), this._reseed++, i.encode(a, e);
        });
    },
    8898: function (t, e) {
      (e.read = function (t, e, r, n, i) {
        var o,
          a,
          s = 8 * i - n - 1,
          f = (1 << s) - 1,
          u = f >> 1,
          c = -7,
          h = r ? i - 1 : 0,
          d = r ? -1 : 1,
          l = t[e + h];
        for (
          h += d, o = l & ((1 << -c) - 1), l >>= -c, c += s;
          c > 0;
          o = 256 * o + t[e + h], h += d, c -= 8
        );
        for (
          a = o & ((1 << -c) - 1), o >>= -c, c += n;
          c > 0;
          a = 256 * a + t[e + h], h += d, c -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === f) return a ? NaN : (1 / 0) * (l ? -1 : 1);
          (a += Math.pow(2, n)), (o -= u);
        }
        return (l ? -1 : 1) * a * Math.pow(2, o - n);
      }),
        (e.write = function (t, e, r, n, i, o) {
          var a,
            s,
            f,
            u = 8 * o - i - 1,
            c = (1 << u) - 1,
            h = c >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : o - 1,
            p = n ? 1 : -1,
            b = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((s = isNaN(e) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                  (e += a + h >= 1 ? d / f : d * Math.pow(2, 1 - h)) * f >= 2 &&
                    (a++, (f /= 2)),
                  a + h >= c
                    ? ((s = 0), (a = c))
                    : a + h >= 1
                    ? ((s = (e * f - 1) * Math.pow(2, i)), (a += h))
                    : ((s = e * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[r + l] = 255 & s, l += p, s /= 256, i -= 8
          );
          for (
            a = (a << i) | s, u += i;
            u > 0;
            t[r + l] = 255 & a, l += p, a /= 256, u -= 8
          );
          t[r + l - p] |= 128 * b;
        });
    },
    87: function (t) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
    },
    7740: function (t, e, r) {
      "use strict";
      var n = r(698)(),
        i = r(2737)("Object.prototype.toString"),
        o = function (t) {
          return (
            !(n && t && "object" === typeof t && Symbol.toStringTag in t) &&
            "[object Arguments]" === i(t)
          );
        },
        a = function (t) {
          return (
            !!o(t) ||
            (null !== t &&
              "object" === typeof t &&
              "number" === typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== i(t) &&
              "[object Function]" === i(t.callee))
          );
        },
        s = (function () {
          return o(arguments);
        })();
      (o.isLegacyArguments = a), (t.exports = s ? o : a);
    },
    8265: function (t, e, r) {
      "use strict";
      var n,
        i = Object.prototype.toString,
        o = Function.prototype.toString,
        a = /^\s*(?:function)?\*/,
        s = r(698)(),
        f = Object.getPrototypeOf;
      t.exports = function (t) {
        if ("function" !== typeof t) return !1;
        if (a.test(o.call(t))) return !0;
        if (!s) return "[object GeneratorFunction]" === i.call(t);
        if (!f) return !1;
        if ("undefined" === typeof n) {
          var e = (function () {
            if (!s) return !1;
            try {
              return Function("return function*() {}")();
            } catch (t) {}
          })();
          n = !!e && f(e);
        }
        return f(t) === n;
      };
    },
    4127: function (t) {
      "use strict";
      t.exports = function (t) {
        return t !== t;
      };
    },
    4866: function (t, e, r) {
      "use strict";
      var n = r(4573),
        i = r(7392),
        o = r(4127),
        a = r(850),
        s = r(8045),
        f = n(a(), Number);
      i(f, { getPolyfill: a, implementation: o, shim: s }), (t.exports = f);
    },
    850: function (t, e, r) {
      "use strict";
      var n = r(4127);
      t.exports = function () {
        return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")
          ? Number.isNaN
          : n;
      };
    },
    8045: function (t, e, r) {
      "use strict";
      var n = r(7392),
        i = r(850);
      t.exports = function () {
        var t = i();
        return (
          n(
            Number,
            { isNaN: t },
            {
              isNaN: function () {
                return Number.isNaN !== t;
              },
            }
          ),
          t
        );
      };
    },
    387: function (t, e, r) {
      "use strict";
      var n = r(8372),
        i = r(973),
        o = r(2737),
        a = o("Object.prototype.toString"),
        s = r(698)(),
        f = "undefined" === typeof globalThis ? r.g : globalThis,
        u = i(),
        c =
          o("Array.prototype.indexOf", !0) ||
          function (t, e) {
            for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
            return -1;
          },
        h = o("String.prototype.slice"),
        d = {},
        l = r(8828),
        p = Object.getPrototypeOf;
      s &&
        l &&
        p &&
        n(u, function (t) {
          var e = new f[t]();
          if (Symbol.toStringTag in e) {
            var r = p(e),
              n = l(r, Symbol.toStringTag);
            if (!n) {
              var i = p(r);
              n = l(i, Symbol.toStringTag);
            }
            d[t] = n.get;
          }
        });
      t.exports = function (t) {
        if (!t || "object" !== typeof t) return !1;
        if (!s || !(Symbol.toStringTag in t)) {
          var e = h(a(t), 8, -1);
          return c(u, e) > -1;
        }
        return (
          !!l &&
          (function (t) {
            var e = !1;
            return (
              n(d, function (r, n) {
                if (!e)
                  try {
                    e = r.call(t) === n;
                  } catch (i) {}
              }),
              e
            );
          })(t)
        );
      };
    },
    9500: function (t, e, r) {
      "use strict";
      var n = r(87),
        i = r(6883),
        o = r(7172).Buffer,
        a = new Array(16);
      function s() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function f(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function u(t, e, r, n, i, o, a) {
        return (f((t + ((e & r) | (~e & n)) + i + o) | 0, a) + e) | 0;
      }
      function c(t, e, r, n, i, o, a) {
        return (f((t + ((e & n) | (r & ~n)) + i + o) | 0, a) + e) | 0;
      }
      function h(t, e, r, n, i, o, a) {
        return (f((t + (e ^ r ^ n) + i + o) | 0, a) + e) | 0;
      }
      function d(t, e, r, n, i, o, a) {
        return (f((t + (r ^ (e | ~n)) + i + o) | 0, a) + e) | 0;
      }
      n(s, i),
        (s.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d;
          (r = u(r, n, i, o, t[0], 3614090360, 7)),
            (o = u(o, r, n, i, t[1], 3905402710, 12)),
            (i = u(i, o, r, n, t[2], 606105819, 17)),
            (n = u(n, i, o, r, t[3], 3250441966, 22)),
            (r = u(r, n, i, o, t[4], 4118548399, 7)),
            (o = u(o, r, n, i, t[5], 1200080426, 12)),
            (i = u(i, o, r, n, t[6], 2821735955, 17)),
            (n = u(n, i, o, r, t[7], 4249261313, 22)),
            (r = u(r, n, i, o, t[8], 1770035416, 7)),
            (o = u(o, r, n, i, t[9], 2336552879, 12)),
            (i = u(i, o, r, n, t[10], 4294925233, 17)),
            (n = u(n, i, o, r, t[11], 2304563134, 22)),
            (r = u(r, n, i, o, t[12], 1804603682, 7)),
            (o = u(o, r, n, i, t[13], 4254626195, 12)),
            (i = u(i, o, r, n, t[14], 2792965006, 17)),
            (r = c(
              r,
              (n = u(n, i, o, r, t[15], 1236535329, 22)),
              i,
              o,
              t[1],
              4129170786,
              5
            )),
            (o = c(o, r, n, i, t[6], 3225465664, 9)),
            (i = c(i, o, r, n, t[11], 643717713, 14)),
            (n = c(n, i, o, r, t[0], 3921069994, 20)),
            (r = c(r, n, i, o, t[5], 3593408605, 5)),
            (o = c(o, r, n, i, t[10], 38016083, 9)),
            (i = c(i, o, r, n, t[15], 3634488961, 14)),
            (n = c(n, i, o, r, t[4], 3889429448, 20)),
            (r = c(r, n, i, o, t[9], 568446438, 5)),
            (o = c(o, r, n, i, t[14], 3275163606, 9)),
            (i = c(i, o, r, n, t[3], 4107603335, 14)),
            (n = c(n, i, o, r, t[8], 1163531501, 20)),
            (r = c(r, n, i, o, t[13], 2850285829, 5)),
            (o = c(o, r, n, i, t[2], 4243563512, 9)),
            (i = c(i, o, r, n, t[7], 1735328473, 14)),
            (r = h(
              r,
              (n = c(n, i, o, r, t[12], 2368359562, 20)),
              i,
              o,
              t[5],
              4294588738,
              4
            )),
            (o = h(o, r, n, i, t[8], 2272392833, 11)),
            (i = h(i, o, r, n, t[11], 1839030562, 16)),
            (n = h(n, i, o, r, t[14], 4259657740, 23)),
            (r = h(r, n, i, o, t[1], 2763975236, 4)),
            (o = h(o, r, n, i, t[4], 1272893353, 11)),
            (i = h(i, o, r, n, t[7], 4139469664, 16)),
            (n = h(n, i, o, r, t[10], 3200236656, 23)),
            (r = h(r, n, i, o, t[13], 681279174, 4)),
            (o = h(o, r, n, i, t[0], 3936430074, 11)),
            (i = h(i, o, r, n, t[3], 3572445317, 16)),
            (n = h(n, i, o, r, t[6], 76029189, 23)),
            (r = h(r, n, i, o, t[9], 3654602809, 4)),
            (o = h(o, r, n, i, t[12], 3873151461, 11)),
            (i = h(i, o, r, n, t[15], 530742520, 16)),
            (r = d(
              r,
              (n = h(n, i, o, r, t[2], 3299628645, 23)),
              i,
              o,
              t[0],
              4096336452,
              6
            )),
            (o = d(o, r, n, i, t[7], 1126891415, 10)),
            (i = d(i, o, r, n, t[14], 2878612391, 15)),
            (n = d(n, i, o, r, t[5], 4237533241, 21)),
            (r = d(r, n, i, o, t[12], 1700485571, 6)),
            (o = d(o, r, n, i, t[3], 2399980690, 10)),
            (i = d(i, o, r, n, t[10], 4293915773, 15)),
            (n = d(n, i, o, r, t[1], 2240044497, 21)),
            (r = d(r, n, i, o, t[8], 1873313359, 6)),
            (o = d(o, r, n, i, t[15], 4264355552, 10)),
            (i = d(i, o, r, n, t[6], 2734768916, 15)),
            (n = d(n, i, o, r, t[13], 1309151649, 21)),
            (r = d(r, n, i, o, t[4], 4149444226, 6)),
            (o = d(o, r, n, i, t[11], 3174756917, 10)),
            (i = d(i, o, r, n, t[2], 718787259, 15)),
            (n = d(n, i, o, r, t[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + n) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = o.allocUnsafe(16);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
          );
        }),
        (t.exports = s);
    },
    8773: function (t, e, r) {
      var n = r(3785),
        i = r(9154);
      function o(t) {
        this.rand = t || new i.Rand();
      }
      (t.exports = o),
        (o.create = function (t) {
          return new o(t);
        }),
        (o.prototype._randbelow = function (t) {
          var e = t.bitLength(),
            r = Math.ceil(e / 8);
          do {
            var i = new n(this.rand.generate(r));
          } while (i.cmp(t) >= 0);
          return i;
        }),
        (o.prototype._randrange = function (t, e) {
          var r = e.sub(t);
          return t.add(this._randbelow(r));
        }),
        (o.prototype.test = function (t, e, r) {
          var i = t.bitLength(),
            o = n.mont(t),
            a = new n(1).toRed(o);
          e || (e = Math.max(1, (i / 48) | 0));
          for (var s = t.subn(1), f = 0; !s.testn(f); f++);
          for (var u = t.shrn(f), c = s.toRed(o); e > 0; e--) {
            var h = this._randrange(new n(2), s);
            r && r(h);
            var d = h.toRed(o).redPow(u);
            if (0 !== d.cmp(a) && 0 !== d.cmp(c)) {
              for (var l = 1; l < f; l++) {
                if (0 === (d = d.redSqr()).cmp(a)) return !1;
                if (0 === d.cmp(c)) break;
              }
              if (l === f) return !1;
            }
          }
          return !0;
        }),
        (o.prototype.getDivisor = function (t, e) {
          var r = t.bitLength(),
            i = n.mont(t),
            o = new n(1).toRed(i);
          e || (e = Math.max(1, (r / 48) | 0));
          for (var a = t.subn(1), s = 0; !a.testn(s); s++);
          for (var f = t.shrn(s), u = a.toRed(i); e > 0; e--) {
            var c = this._randrange(new n(2), a),
              h = t.gcd(c);
            if (0 !== h.cmpn(1)) return h;
            var d = c.toRed(i).redPow(f);
            if (0 !== d.cmp(o) && 0 !== d.cmp(u)) {
              for (var l = 1; l < s; l++) {
                if (0 === (d = d.redSqr()).cmp(o))
                  return d.fromRed().subn(1).gcd(t);
                if (0 === d.cmp(u)) break;
              }
              if (l === s) return (d = d.redSqr()).fromRed().subn(1).gcd(t);
            }
          }
          return !1;
        });
    },
    7859: function (t) {
      function e(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e)
            throw new Error(r || "Assertion failed: " + t + " != " + e);
        });
    },
    2910: function (t, e) {
      "use strict";
      var r = e;
      function n(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function i(t) {
        for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
        return e;
      }
      (r.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" !== typeof t) {
          for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
          return r;
        }
        if ("hex" === e) {
          (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t);
          for (n = 0; n < t.length; n += 2)
            r.push(parseInt(t[n] + t[n + 1], 16));
        } else
          for (n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n),
              o = i >> 8,
              a = 255 & i;
            o ? r.push(o, a) : r.push(a);
          }
        return r;
      }),
        (r.zero2 = n),
        (r.toHex = i),
        (r.encode = function (t, e) {
          return "hex" === e ? i(t) : t;
        });
    },
    6677: function (t, e, r) {
      t.exports = r(9826);
    },
    836: function (t) {
      "use strict";
      var e = function (t) {
        return t !== t;
      };
      t.exports = function (t, r) {
        return 0 === t && 0 === r
          ? 1 / t === 1 / r
          : t === r || !(!e(t) || !e(r));
      };
    },
    3822: function (t, e, r) {
      "use strict";
      var n = r(7392),
        i = r(4573),
        o = r(836),
        a = r(1800),
        s = r(7894),
        f = i(a(), Object);
      n(f, { getPolyfill: a, implementation: o, shim: s }), (t.exports = f);
    },
    1800: function (t, e, r) {
      "use strict";
      var n = r(836);
      t.exports = function () {
        return "function" === typeof Object.is ? Object.is : n;
      };
    },
    7894: function (t, e, r) {
      "use strict";
      var n = r(1800),
        i = r(7392);
      t.exports = function () {
        var t = n();
        return (
          i(
            Object,
            { is: t },
            {
              is: function () {
                return Object.is !== t;
              },
            }
          ),
          t
        );
      };
    },
    9538: function (t, e, r) {
      "use strict";
      var n;
      if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          a = r(1030),
          s = Object.prototype.propertyIsEnumerable,
          f = !s.call({ toString: null }, "toString"),
          u = s.call(function () {}, "prototype"),
          c = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          h = function (t) {
            var e = t.constructor;
            return e && e.prototype === t;
          },
          d = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          l = (function () {
            if ("undefined" === typeof window) return !1;
            for (var t in window)
              try {
                if (
                  !d["$" + t] &&
                  i.call(window, t) &&
                  null !== window[t] &&
                  "object" === typeof window[t]
                )
                  try {
                    h(window[t]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })();
        n = function (t) {
          var e = null !== t && "object" === typeof t,
            r = "[object Function]" === o.call(t),
            n = a(t),
            s = e && "[object String]" === o.call(t),
            d = [];
          if (!e && !r && !n)
            throw new TypeError("Object.keys called on a non-object");
          var p = u && r;
          if (s && t.length > 0 && !i.call(t, 0))
            for (var b = 0; b < t.length; ++b) d.push(String(b));
          if (n && t.length > 0)
            for (var m = 0; m < t.length; ++m) d.push(String(m));
          else
            for (var y in t)
              (p && "prototype" === y) || !i.call(t, y) || d.push(String(y));
          if (f)
            for (
              var g = (function (t) {
                  if ("undefined" === typeof window || !l) return h(t);
                  try {
                    return h(t);
                  } catch (e) {
                    return !1;
                  }
                })(t),
                v = 0;
              v < c.length;
              ++v
            )
              (g && "constructor" === c[v]) || !i.call(t, c[v]) || d.push(c[v]);
          return d;
        };
      }
      t.exports = n;
    },
    4733: function (t, e, r) {
      "use strict";
      var n = Array.prototype.slice,
        i = r(1030),
        o = Object.keys,
        a = o
          ? function (t) {
              return o(t);
            }
          : r(9538),
        s = Object.keys;
      (a.shim = function () {
        Object.keys
          ? (function () {
              var t = Object.keys(arguments);
              return t && t.length === arguments.length;
            })(1, 2) ||
            (Object.keys = function (t) {
              return i(t) ? s(n.call(t)) : s(t);
            })
          : (Object.keys = a);
        return Object.keys || a;
      }),
        (t.exports = a);
    },
    1030: function (t) {
      "use strict";
      var e = Object.prototype.toString;
      t.exports = function (t) {
        var r = e.call(t),
          n = "[object Arguments]" === r;
        return (
          n ||
            (n =
              "[object Array]" !== r &&
              null !== t &&
              "object" === typeof t &&
              "number" === typeof t.length &&
              t.length >= 0 &&
              "[object Function]" === e.call(t.callee)),
          n
        );
      };
    },
    8481: function (t, e, r) {
      "use strict";
      var n = r(9840);
      e.certificate = r(6939);
      var i = n.define("RSAPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("modulus").int(),
          this.key("publicExponent").int(),
          this.key("privateExponent").int(),
          this.key("prime1").int(),
          this.key("prime2").int(),
          this.key("exponent1").int(),
          this.key("exponent2").int(),
          this.key("coefficient").int()
        );
      });
      e.RSAPrivateKey = i;
      var o = n.define("RSAPublicKey", function () {
        this.seq().obj(
          this.key("modulus").int(),
          this.key("publicExponent").int()
        );
      });
      e.RSAPublicKey = o;
      var a = n.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(
          this.key("algorithm").use(s),
          this.key("subjectPublicKey").bitstr()
        );
      });
      e.PublicKey = a;
      var s = n.define("AlgorithmIdentifier", function () {
          this.seq().obj(
            this.key("algorithm").objid(),
            this.key("none").null_().optional(),
            this.key("curve").objid().optional(),
            this.key("params")
              .seq()
              .obj(
                this.key("p").int(),
                this.key("q").int(),
                this.key("g").int()
              )
              .optional()
          );
        }),
        f = n.define("PrivateKeyInfo", function () {
          this.seq().obj(
            this.key("version").int(),
            this.key("algorithm").use(s),
            this.key("subjectPrivateKey").octstr()
          );
        });
      e.PrivateKey = f;
      var u = n.define("EncryptedPrivateKeyInfo", function () {
        this.seq().obj(
          this.key("algorithm")
            .seq()
            .obj(
              this.key("id").objid(),
              this.key("decrypt")
                .seq()
                .obj(
                  this.key("kde")
                    .seq()
                    .obj(
                      this.key("id").objid(),
                      this.key("kdeparams")
                        .seq()
                        .obj(this.key("salt").octstr(), this.key("iters").int())
                    ),
                  this.key("cipher")
                    .seq()
                    .obj(this.key("algo").objid(), this.key("iv").octstr())
                )
            ),
          this.key("subjectPrivateKey").octstr()
        );
      });
      e.EncryptedPrivateKey = u;
      var c = n.define("DSAPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("p").int(),
          this.key("q").int(),
          this.key("g").int(),
          this.key("pub_key").int(),
          this.key("priv_key").int()
        );
      });
      (e.DSAPrivateKey = c),
        (e.DSAparam = n.define("DSAparam", function () {
          this.int();
        }));
      var h = n.define("ECPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("privateKey").octstr(),
          this.key("parameters").optional().explicit(0).use(d),
          this.key("publicKey").optional().explicit(1).bitstr()
        );
      });
      e.ECPrivateKey = h;
      var d = n.define("ECParameters", function () {
        this.choice({ namedCurve: this.objid() });
      });
      e.signature = n.define("signature", function () {
        this.seq().obj(this.key("r").int(), this.key("s").int());
      });
    },
    6939: function (t, e, r) {
      "use strict";
      var n = r(9840),
        i = n.define("Time", function () {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
        }),
        o = n.define("AttributeTypeValue", function () {
          this.seq().obj(this.key("type").objid(), this.key("value").any());
        }),
        a = n.define("AlgorithmIdentifier", function () {
          this.seq().obj(
            this.key("algorithm").objid(),
            this.key("parameters").optional(),
            this.key("curve").objid().optional()
          );
        }),
        s = n.define("SubjectPublicKeyInfo", function () {
          this.seq().obj(
            this.key("algorithm").use(a),
            this.key("subjectPublicKey").bitstr()
          );
        }),
        f = n.define("RelativeDistinguishedName", function () {
          this.setof(o);
        }),
        u = n.define("RDNSequence", function () {
          this.seqof(f);
        }),
        c = n.define("Name", function () {
          this.choice({ rdnSequence: this.use(u) });
        }),
        h = n.define("Validity", function () {
          this.seq().obj(
            this.key("notBefore").use(i),
            this.key("notAfter").use(i)
          );
        }),
        d = n.define("Extension", function () {
          this.seq().obj(
            this.key("extnID").objid(),
            this.key("critical").bool().def(!1),
            this.key("extnValue").octstr()
          );
        }),
        l = n.define("TBSCertificate", function () {
          this.seq().obj(
            this.key("version").explicit(0).int().optional(),
            this.key("serialNumber").int(),
            this.key("signature").use(a),
            this.key("issuer").use(c),
            this.key("validity").use(h),
            this.key("subject").use(c),
            this.key("subjectPublicKeyInfo").use(s),
            this.key("issuerUniqueID").implicit(1).bitstr().optional(),
            this.key("subjectUniqueID").implicit(2).bitstr().optional(),
            this.key("extensions").explicit(3).seqof(d).optional()
          );
        }),
        p = n.define("X509Certificate", function () {
          this.seq().obj(
            this.key("tbsCertificate").use(l),
            this.key("signatureAlgorithm").use(a),
            this.key("signatureValue").bitstr()
          );
        });
      t.exports = p;
    },
    1412: function (t, e, r) {
      var n =
          /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        o =
          /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        a = r(5883),
        s = r(8901),
        f = r(7172).Buffer;
      t.exports = function (t, e) {
        var r,
          u = t.toString(),
          c = u.match(n);
        if (c) {
          var h = "aes" + c[1],
            d = f.from(c[2], "hex"),
            l = f.from(c[3].replace(/[\r\n]/g, ""), "base64"),
            p = a(e, d.slice(0, 8), parseInt(c[1], 10)).key,
            b = [],
            m = s.createDecipheriv(h, p, d);
          b.push(m.update(l)), b.push(m.final()), (r = f.concat(b));
        } else {
          var y = u.match(o);
          r = f.from(y[2].replace(/[\r\n]/g, ""), "base64");
        }
        return { tag: u.match(i)[1], data: r };
      };
    },
    1463: function (t, e, r) {
      var n = r(8481),
        i = r(1095),
        o = r(1412),
        a = r(8901),
        s = r(41),
        f = r(7172).Buffer;
      function u(t) {
        var e;
        "object" !== typeof t ||
          f.isBuffer(t) ||
          ((e = t.passphrase), (t = t.key)),
          "string" === typeof t && (t = f.from(t));
        var r,
          u,
          c = o(t, e),
          h = c.tag,
          d = c.data;
        switch (h) {
          case "CERTIFICATE":
            u = n.certificate.decode(d, "der").tbsCertificate
              .subjectPublicKeyInfo;
          case "PUBLIC KEY":
            switch (
              (u || (u = n.PublicKey.decode(d, "der")),
              (r = u.algorithm.algorithm.join(".")))
            ) {
              case "1.2.840.113549.1.1.1":
                return n.RSAPublicKey.decode(u.subjectPublicKey.data, "der");
              case "1.2.840.10045.2.1":
                return (
                  (u.subjectPrivateKey = u.subjectPublicKey),
                  { type: "ec", data: u }
                );
              case "1.2.840.10040.4.1":
                return (
                  (u.algorithm.params.pub_key = n.DSAparam.decode(
                    u.subjectPublicKey.data,
                    "der"
                  )),
                  { type: "dsa", data: u.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + r);
            }
          case "ENCRYPTED PRIVATE KEY":
            d = (function (t, e) {
              var r = t.algorithm.decrypt.kde.kdeparams.salt,
                n = parseInt(
                  t.algorithm.decrypt.kde.kdeparams.iters.toString(),
                  10
                ),
                o = i[t.algorithm.decrypt.cipher.algo.join(".")],
                u = t.algorithm.decrypt.cipher.iv,
                c = t.subjectPrivateKey,
                h = parseInt(o.split("-")[1], 10) / 8,
                d = s.pbkdf2Sync(e, r, n, h, "sha1"),
                l = a.createDecipheriv(o, d, u),
                p = [];
              return p.push(l.update(c)), p.push(l.final()), f.concat(p);
            })((d = n.EncryptedPrivateKey.decode(d, "der")), e);
          case "PRIVATE KEY":
            switch (
              (r = (u = n.PrivateKey.decode(d, "der")).algorithm.algorithm.join(
                "."
              ))
            ) {
              case "1.2.840.113549.1.1.1":
                return n.RSAPrivateKey.decode(u.subjectPrivateKey, "der");
              case "1.2.840.10045.2.1":
                return {
                  curve: u.algorithm.curve,
                  privateKey: n.ECPrivateKey.decode(u.subjectPrivateKey, "der")
                    .privateKey,
                };
              case "1.2.840.10040.4.1":
                return (
                  (u.algorithm.params.priv_key = n.DSAparam.decode(
                    u.subjectPrivateKey,
                    "der"
                  )),
                  { type: "dsa", params: u.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + r);
            }
          case "RSA PUBLIC KEY":
            return n.RSAPublicKey.decode(d, "der");
          case "RSA PRIVATE KEY":
            return n.RSAPrivateKey.decode(d, "der");
          case "DSA PRIVATE KEY":
            return { type: "dsa", params: n.DSAPrivateKey.decode(d, "der") };
          case "EC PRIVATE KEY":
            return {
              curve: (d = n.ECPrivateKey.decode(d, "der")).parameters.value,
              privateKey: d.privateKey,
            };
          default:
            throw new Error("unknown key type " + h);
        }
      }
      (t.exports = u), (u.signature = n.signature);
    },
    41: function (t, e, r) {
      (e.pbkdf2 = r(6394)), (e.pbkdf2Sync = r(4355));
    },
    6394: function (t, e, r) {
      var n,
        i,
        o = r(7172).Buffer,
        a = r(2642),
        s = r(2703),
        f = r(4355),
        u = r(3819),
        c = r.g.crypto && r.g.crypto.subtle,
        h = {
          sha: "SHA-1",
          "sha-1": "SHA-1",
          sha1: "SHA-1",
          sha256: "SHA-256",
          "sha-256": "SHA-256",
          sha384: "SHA-384",
          "sha-384": "SHA-384",
          "sha-512": "SHA-512",
          sha512: "SHA-512",
        },
        d = [];
      function l() {
        return (
          i ||
          (i =
            r.g.process && r.g.process.nextTick
              ? r.g.process.nextTick
              : r.g.queueMicrotask
              ? r.g.queueMicrotask
              : r.g.setImmediate
              ? r.g.setImmediate
              : r.g.setTimeout)
        );
      }
      function p(t, e, r, n, i) {
        return c
          .importKey("raw", t, { name: "PBKDF2" }, !1, ["deriveBits"])
          .then(function (t) {
            return c.deriveBits(
              { name: "PBKDF2", salt: e, iterations: r, hash: { name: i } },
              t,
              n << 3
            );
          })
          .then(function (t) {
            return o.from(t);
          });
      }
      t.exports = function (t, e, i, b, m, y) {
        "function" === typeof m && ((y = m), (m = void 0));
        var g = h[(m = m || "sha1").toLowerCase()];
        if (g && "function" === typeof r.g.Promise) {
          if (
            (a(i, b),
            (t = u(t, s, "Password")),
            (e = u(e, s, "Salt")),
            "function" !== typeof y)
          )
            throw new Error("No callback provided to pbkdf2");
          !(function (t, e) {
            t.then(
              function (t) {
                l()(function () {
                  e(null, t);
                });
              },
              function (t) {
                l()(function () {
                  e(t);
                });
              }
            );
          })(
            (function (t) {
              if (r.g.process && !r.g.process.browser)
                return Promise.resolve(!1);
              if (!c || !c.importKey || !c.deriveBits)
                return Promise.resolve(!1);
              if (void 0 !== d[t]) return d[t];
              var e = p((n = n || o.alloc(8)), n, 10, 128, t)
                .then(function () {
                  return !0;
                })
                .catch(function () {
                  return !1;
                });
              return (d[t] = e), e;
            })(g).then(function (r) {
              return r ? p(t, e, i, b, g) : f(t, e, i, b, m);
            }),
            y
          );
        } else
          l()(function () {
            var r;
            try {
              r = f(t, e, i, b, m);
            } catch (n) {
              return y(n);
            }
            y(null, r);
          });
      };
    },
    2703: function (t, e, r) {
      var n,
        i = r(7061);
      if (r.g.process && r.g.process.browser) n = "utf-8";
      else if (r.g.process && r.g.process.version) {
        n =
          parseInt(i.version.split(".")[0].slice(1), 10) >= 6
            ? "utf-8"
            : "binary";
      } else n = "utf-8";
      t.exports = n;
    },
    2642: function (t) {
      var e = Math.pow(2, 30) - 1;
      t.exports = function (t, r) {
        if ("number" !== typeof t)
          throw new TypeError("Iterations not a number");
        if (t < 0) throw new TypeError("Bad iterations");
        if ("number" !== typeof r)
          throw new TypeError("Key length not a number");
        if (r < 0 || r > e || r !== r) throw new TypeError("Bad key length");
      };
    },
    4355: function (t, e, r) {
      var n = r(7401),
        i = r(6558),
        o = r(4458),
        a = r(7172).Buffer,
        s = r(2642),
        f = r(2703),
        u = r(3819),
        c = a.alloc(128),
        h = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20,
        };
      function d(t, e, r) {
        var s = (function (t) {
            function e(e) {
              return o(t).update(e).digest();
            }
            function r(t) {
              return new i().update(t).digest();
            }
            return "rmd160" === t || "ripemd160" === t
              ? r
              : "md5" === t
              ? n
              : e;
          })(t),
          f = "sha512" === t || "sha384" === t ? 128 : 64;
        e.length > f ? (e = s(e)) : e.length < f && (e = a.concat([e, c], f));
        for (
          var u = a.allocUnsafe(f + h[t]), d = a.allocUnsafe(f + h[t]), l = 0;
          l < f;
          l++
        )
          (u[l] = 54 ^ e[l]), (d[l] = 92 ^ e[l]);
        var p = a.allocUnsafe(f + r + 4);
        u.copy(p, 0, 0, f),
          (this.ipad1 = p),
          (this.ipad2 = u),
          (this.opad = d),
          (this.alg = t),
          (this.blocksize = f),
          (this.hash = s),
          (this.size = h[t]);
      }
      (d.prototype.run = function (t, e) {
        return (
          t.copy(e, this.blocksize),
          this.hash(e).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        );
      }),
        (t.exports = function (t, e, r, n, i) {
          s(r, n);
          var o = new d(
              (i = i || "sha1"),
              (t = u(t, f, "Password")),
              (e = u(e, f, "Salt")).length
            ),
            c = a.allocUnsafe(n),
            l = a.allocUnsafe(e.length + 4);
          e.copy(l, 0, 0, e.length);
          for (var p = 0, b = h[i], m = Math.ceil(n / b), y = 1; y <= m; y++) {
            l.writeUInt32BE(y, e.length);
            for (var g = o.run(l, o.ipad1), v = g, w = 1; w < r; w++) {
              v = o.run(v, o.ipad2);
              for (var _ = 0; _ < b; _++) g[_] ^= v[_];
            }
            g.copy(c, p), (p += b);
          }
          return c;
        });
    },
    3819: function (t, e, r) {
      var n = r(7172).Buffer;
      t.exports = function (t, e, r) {
        if (n.isBuffer(t)) return t;
        if ("string" === typeof t) return n.from(t, e);
        if (ArrayBuffer.isView(t)) return n.from(t.buffer);
        throw new TypeError(
          r + " must be a string, a Buffer, a typed array or a DataView"
        );
      };
    },
    7061: function (t) {
      var e,
        r,
        n = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (r) {
          try {
            return e.call(null, t, 0);
          } catch (r) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          r = o;
        }
      })();
      var s,
        f = [],
        u = !1,
        c = -1;
      function h() {
        u &&
          s &&
          ((u = !1), s.length ? (f = s.concat(f)) : (c = -1), f.length && d());
      }
      function d() {
        if (!u) {
          var t = a(h);
          u = !0;
          for (var e = f.length; e; ) {
            for (s = f, f = []; ++c < e; ) s && s[c].run();
            (c = -1), (e = f.length);
          }
          (s = null),
            (u = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function l(t, e) {
        (this.fun = t), (this.array = e);
      }
      function p() {}
      (n.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        f.push(new l(t, e)), 1 !== f.length || u || a(d);
      }),
        (l.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = p),
        (n.addListener = p),
        (n.once = p),
        (n.off = p),
        (n.removeListener = p),
        (n.removeAllListeners = p),
        (n.emit = p),
        (n.prependListener = p),
        (n.prependOnceListener = p),
        (n.listeners = function (t) {
          return [];
        }),
        (n.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    9639: function (t, e, r) {
      (e.publicEncrypt = r(9881)),
        (e.privateDecrypt = r(2619)),
        (e.privateEncrypt = function (t, r) {
          return e.publicEncrypt(t, r, !0);
        }),
        (e.publicDecrypt = function (t, r) {
          return e.privateDecrypt(t, r, !0);
        });
    },
    7267: function (t, e, r) {
      var n = r(7266),
        i = r(7172).Buffer;
      function o(t) {
        var e = i.allocUnsafe(4);
        return e.writeUInt32BE(t, 0), e;
      }
      t.exports = function (t, e) {
        for (var r, a = i.alloc(0), s = 0; a.length < e; )
          (r = o(s++)),
            (a = i.concat([a, n("sha1").update(t).update(r).digest()]));
        return a.slice(0, e);
      };
    },
    2619: function (t, e, r) {
      var n = r(1463),
        i = r(7267),
        o = r(6107),
        a = r(3785),
        s = r(7354),
        f = r(7266),
        u = r(4608),
        c = r(7172).Buffer;
      t.exports = function (t, e, r) {
        var h;
        h = t.padding ? t.padding : r ? 1 : 4;
        var d,
          l = n(t),
          p = l.modulus.byteLength();
        if (e.length > p || new a(e).cmp(l.modulus) >= 0)
          throw new Error("decryption error");
        d = r ? u(new a(e), l) : s(e, l);
        var b = c.alloc(p - d.length);
        if (((d = c.concat([b, d], p)), 4 === h))
          return (function (t, e) {
            var r = t.modulus.byteLength(),
              n = f("sha1").update(c.alloc(0)).digest(),
              a = n.length;
            if (0 !== e[0]) throw new Error("decryption error");
            var s = e.slice(1, a + 1),
              u = e.slice(a + 1),
              h = o(s, i(u, a)),
              d = o(u, i(h, r - a - 1));
            if (
              (function (t, e) {
                (t = c.from(t)), (e = c.from(e));
                var r = 0,
                  n = t.length;
                t.length !== e.length &&
                  (r++, (n = Math.min(t.length, e.length)));
                var i = -1;
                for (; ++i < n; ) r += t[i] ^ e[i];
                return r;
              })(n, d.slice(0, a))
            )
              throw new Error("decryption error");
            var l = a;
            for (; 0 === d[l]; ) l++;
            if (1 !== d[l++]) throw new Error("decryption error");
            return d.slice(l);
          })(l, d);
        if (1 === h)
          return (function (t, e, r) {
            var n = e.slice(0, 2),
              i = 2,
              o = 0;
            for (; 0 !== e[i++]; )
              if (i >= e.length) {
                o++;
                break;
              }
            var a = e.slice(2, i - 1);
            (("0002" !== n.toString("hex") && !r) ||
              ("0001" !== n.toString("hex") && r)) &&
              o++;
            a.length < 8 && o++;
            if (o) throw new Error("decryption error");
            return e.slice(i);
          })(0, d, r);
        if (3 === h) return d;
        throw new Error("unknown padding");
      };
    },
    9881: function (t, e, r) {
      var n = r(1463),
        i = r(2830),
        o = r(7266),
        a = r(7267),
        s = r(6107),
        f = r(3785),
        u = r(4608),
        c = r(7354),
        h = r(7172).Buffer;
      t.exports = function (t, e, r) {
        var d;
        d = t.padding ? t.padding : r ? 1 : 4;
        var l,
          p = n(t);
        if (4 === d)
          l = (function (t, e) {
            var r = t.modulus.byteLength(),
              n = e.length,
              u = o("sha1").update(h.alloc(0)).digest(),
              c = u.length,
              d = 2 * c;
            if (n > r - d - 2) throw new Error("message too long");
            var l = h.alloc(r - n - d - 2),
              p = r - c - 1,
              b = i(c),
              m = s(h.concat([u, l, h.alloc(1, 1), e], p), a(b, p)),
              y = s(b, a(m, c));
            return new f(h.concat([h.alloc(1), y, m], r));
          })(p, e);
        else if (1 === d)
          l = (function (t, e, r) {
            var n,
              o = e.length,
              a = t.modulus.byteLength();
            if (o > a - 11) throw new Error("message too long");
            n = r
              ? h.alloc(a - o - 3, 255)
              : (function (t) {
                  var e,
                    r = h.allocUnsafe(t),
                    n = 0,
                    o = i(2 * t),
                    a = 0;
                  for (; n < t; )
                    a === o.length && ((o = i(2 * t)), (a = 0)),
                      (e = o[a++]) && (r[n++] = e);
                  return r;
                })(a - o - 3);
            return new f(
              h.concat([h.from([0, r ? 1 : 2]), n, h.alloc(1), e], a)
            );
          })(p, e, r);
        else {
          if (3 !== d) throw new Error("unknown padding");
          if ((l = new f(e)).cmp(p.modulus) >= 0)
            throw new Error("data too long for modulus");
        }
        return r ? c(l, p) : u(l, p);
      };
    },
    4608: function (t, e, r) {
      var n = r(3785),
        i = r(7172).Buffer;
      t.exports = function (t, e) {
        return i.from(
          t
            .toRed(n.mont(e.modulus))
            .redPow(new n(e.publicExponent))
            .fromRed()
            .toArray()
        );
      };
    },
    6107: function (t) {
      t.exports = function (t, e) {
        for (var r = t.length, n = -1; ++n < r; ) t[n] ^= e[n];
        return t;
      };
    },
    5208: function (t, e, r) {
      "use strict";
      var n = r(2337),
        i = n.randomBytes === n.pseudoRandomBytes ? 1 : 3;
      function o(t, e, r) {
        n.randomBytes(t, function (n, i) {
          return n
            ? --e
              ? void setTimeout(o.bind(null, t, e, r), 10)
              : r(n)
            : r(null, i);
        });
      }
      (t.exports = function (t, e) {
        if (void 0 !== e && "function" !== typeof e)
          throw new TypeError("argument callback must be a function");
        if (!e && !r.g.Promise)
          throw new TypeError("argument callback is required");
        if (e) return o(t, i, e);
        return new Promise(function (e, r) {
          o(t, i, function (t, n) {
            if (t) return r(t);
            e(n);
          });
        });
      }),
        (t.exports.sync = function (t) {
          for (var e = null, r = 0; r < i; r++)
            try {
              return n.randomBytes(t);
            } catch (o) {
              e = o;
            }
          throw e;
        });
    },
    2830: function (t, e, r) {
      "use strict";
      var n = r(7061),
        i = 65536,
        o = 4294967295;
      var a = r(7172).Buffer,
        s = r.g.crypto || r.g.msCrypto;
      s && s.getRandomValues
        ? (t.exports = function (t, e) {
            if (t > o) throw new RangeError("requested too many random bytes");
            var r = a.allocUnsafe(t);
            if (t > 0)
              if (t > i)
                for (var f = 0; f < t; f += i)
                  s.getRandomValues(r.slice(f, f + i));
              else s.getRandomValues(r);
            if ("function" === typeof e)
              return n.nextTick(function () {
                e(null, r);
              });
            return r;
          })
        : (t.exports = function () {
            throw new Error(
              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
            );
          });
    },
    8519: function (t, e, r) {
      "use strict";
      var n = r(7061);
      function i() {
        throw new Error(
          "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11"
        );
      }
      var o = r(7172),
        a = (r(2830), o.Buffer),
        s = o.kMaxLength,
        f = r.g.crypto || r.g.msCrypto,
        u = Math.pow(2, 32) - 1;
      function c(t, e) {
        if ("number" !== typeof t || t !== t)
          throw new TypeError("offset must be a number");
        if (t > u || t < 0) throw new TypeError("offset must be a uint32");
        if (t > s || t > e) throw new RangeError("offset out of range");
      }
      function h(t, e, r) {
        if ("number" !== typeof t || t !== t)
          throw new TypeError("size must be a number");
        if (t > u || t < 0) throw new TypeError("size must be a uint32");
        if (t + e > r || t > s) throw new RangeError("buffer too small");
      }
      function d(t, e, r, i) {
        var o = t.buffer,
          a = new Uint8Array(o, e, r);
        return (
          f.getRandomValues(a),
          i
            ? void n.nextTick(function () {
                i(null, t);
              })
            : t
        );
      }
      f && f.getRandomValues
        ? ((e.randomFill = function (t, e, n, i) {
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            if ("function" === typeof e) (i = e), (e = 0), (n = t.length);
            else if ("function" === typeof n) (i = n), (n = t.length - e);
            else if ("function" !== typeof i)
              throw new TypeError('"cb" argument must be a function');
            return c(e, t.length), h(n, e, t.length), d(t, e, n, i);
          }),
          (e.randomFillSync = function (t, e, n) {
            "undefined" === typeof e && (e = 0);
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            c(e, t.length), void 0 === n && (n = t.length - e);
            return h(n, e, t.length), d(t, e, n);
          }))
        : ((e.randomFill = i), (e.randomFillSync = i));
    },
    6938: function (t) {
      "use strict";
      var e = {};
      function r(t, r, n) {
        n || (n = Error);
        var i = (function (t) {
          var e, n;
          function i(e, n, i) {
            return (
              t.call(
                this,
                (function (t, e, n) {
                  return "string" === typeof r ? r : r(t, e, n);
                })(e, n, i)
              ) || this
            );
          }
          return (
            (n = t),
            ((e = i).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n),
            i
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = t), (e[t] = i);
      }
      function n(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            var i, o, a, s;
            if (
              ("string" === typeof e &&
              ((o = "not "), e.substr(!a || a < 0 ? 0 : +a, o.length) === o)
                ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                : (i = "must be"),
              (function (t, e, r) {
                return (
                  (void 0 === r || r > t.length) && (r = t.length),
                  t.substring(r - e.length, r) === e
                );
              })(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(i, " ").concat(n(e, "type"));
            else {
              var f = (function (t, e, r) {
                return (
                  "number" !== typeof r && (r = 0),
                  !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                );
              })(t, ".")
                ? "property"
                : "argument";
              s = 'The "'
                .concat(t, '" ')
                .concat(f, " ")
                .concat(i, " ")
                .concat(n(e, "type"));
            }
            return (s += ". Received type ".concat(typeof r));
          },
          TypeError
        ),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.q = e);
    },
    4439: function (t, e, r) {
      "use strict";
      var n = r(7061),
        i =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = c;
      var o = r(5327),
        a = r(4567);
      r(87)(c, o);
      for (var s = i(a.prototype), f = 0; f < s.length; f++) {
        var u = s[f];
        c.prototype[u] || (c.prototype[u] = a.prototype[u]);
      }
      function c(t) {
        if (!(this instanceof c)) return new c(t);
        o.call(this, t),
          a.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", h)));
      }
      function h() {
        this._writableState.ended || n.nextTick(d, this);
      }
      function d(t) {
        t.end();
      }
      Object.defineProperty(c.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(c.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(c.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(c.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        });
    },
    3754: function (t, e, r) {
      "use strict";
      t.exports = i;
      var n = r(2175);
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        n.call(this, t);
      }
      r(87)(i, n),
        (i.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    },
    5327: function (t, e, r) {
      "use strict";
      var n,
        i = r(7061);
      (t.exports = k), (k.ReadableState = E);
      r(343).EventEmitter;
      var o = function (t, e) {
          return t.listeners(e).length;
        },
        a = r(6052),
        s = r(816).Buffer,
        f = r.g.Uint8Array || function () {};
      var u,
        c = r(1632);
      u = c && c.debuglog ? c.debuglog("stream") : function () {};
      var h,
        d,
        l,
        p = r(7712),
        b = r(7640),
        m = r(5985).getHighWaterMark,
        y = r(6938).q,
        g = y.ERR_INVALID_ARG_TYPE,
        v = y.ERR_STREAM_PUSH_AFTER_EOF,
        w = y.ERR_METHOD_NOT_IMPLEMENTED,
        _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(87)(k, a);
      var M = b.errorOrDestroy,
        S = ["error", "close", "destroy", "pause", "resume"];
      function E(t, e, i) {
        (n = n || r(4439)),
          (t = t || {}),
          "boolean" !== typeof i && (i = e instanceof n),
          (this.objectMode = !!t.objectMode),
          i && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = m(this, t, "readableHighWaterMark", i)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (h || (h = r(4361).s),
            (this.decoder = new h(t.encoding)),
            (this.encoding = t.encoding));
      }
      function k(t) {
        if (((n = n || r(4439)), !(this instanceof k))) return new k(t);
        var e = this instanceof n;
        (this._readableState = new E(t, this, e)),
          (this.readable = !0),
          t &&
            ("function" === typeof t.read && (this._read = t.read),
            "function" === typeof t.destroy && (this._destroy = t.destroy)),
          a.call(this);
      }
      function A(t, e, r, n, i) {
        u("readableAddChunk", e);
        var o,
          a = t._readableState;
        if (null === e)
          (a.reading = !1),
            (function (t, e) {
              if ((u("onEofChunk"), e.ended)) return;
              if (e.decoder) {
                var r = e.decoder.end();
                r &&
                  r.length &&
                  (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
              }
              (e.ended = !0),
                e.sync
                  ? R(t)
                  : ((e.needReadable = !1),
                    e.emittedReadable || ((e.emittedReadable = !0), B(t)));
            })(t, a);
        else if (
          (i ||
            (o = (function (t, e) {
              var r;
              (n = e),
                s.isBuffer(n) ||
                  n instanceof f ||
                  "string" === typeof e ||
                  void 0 === e ||
                  t.objectMode ||
                  (r = new g("chunk", ["string", "Buffer", "Uint8Array"], e));
              var n;
              return r;
            })(a, e)),
          o)
        )
          M(t, o);
        else if (a.objectMode || (e && e.length > 0))
          if (
            ("string" === typeof e ||
              a.objectMode ||
              Object.getPrototypeOf(e) === s.prototype ||
              (e = (function (t) {
                return s.from(t);
              })(e)),
            n)
          )
            a.endEmitted ? M(t, new _()) : x(t, a, e, !0);
          else if (a.ended) M(t, new v());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !r
                ? ((e = a.decoder.write(e)),
                  a.objectMode || 0 !== e.length ? x(t, a, e, !1) : j(t, a))
                : x(t, a, e, !1);
          }
        else n || ((a.reading = !1), j(t, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function x(t, e, r, n) {
        e.flowing && 0 === e.length && !e.sync
          ? ((e.awaitDrain = 0), t.emit("data", r))
          : ((e.length += e.objectMode ? 1 : r.length),
            n ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && R(t)),
          j(t, e);
      }
      Object.defineProperty(k.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        },
      }),
        (k.prototype.destroy = b.destroy),
        (k.prototype._undestroy = b.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        }),
        (k.prototype.push = function (t, e) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" === typeof t &&
                ((e = e || n.defaultEncoding) !== n.encoding &&
                  ((t = s.from(t, e)), (e = "")),
                (r = !0)),
            A(this, t, e, !1, r)
          );
        }),
        (k.prototype.unshift = function (t) {
          return A(this, t, null, !0, !1);
        }),
        (k.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (k.prototype.setEncoding = function (t) {
          h || (h = r(4361).s);
          var e = new h(t);
          (this._readableState.decoder = e),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var n = this._readableState.buffer.head, i = ""; null !== n; )
            (i += e.write(n.data)), (n = n.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        });
      var I = 1073741824;
      function O(t, e) {
        return t <= 0 || (0 === e.length && e.ended)
          ? 0
          : e.objectMode
          ? 1
          : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark &&
              (e.highWaterMark = (function (t) {
                return (
                  t >= I
                    ? (t = I)
                    : (t--,
                      (t |= t >>> 1),
                      (t |= t >>> 2),
                      (t |= t >>> 4),
                      (t |= t >>> 8),
                      (t |= t >>> 16),
                      t++),
                  t
                );
              })(t)),
            t <= e.length
              ? t
              : e.ended
              ? e.length
              : ((e.needReadable = !0), 0));
      }
      function R(t) {
        var e = t._readableState;
        u("emitReadable", e.needReadable, e.emittedReadable),
          (e.needReadable = !1),
          e.emittedReadable ||
            (u("emitReadable", e.flowing),
            (e.emittedReadable = !0),
            i.nextTick(B, t));
      }
      function B(t) {
        var e = t._readableState;
        u("emitReadable_", e.destroyed, e.length, e.ended),
          e.destroyed ||
            (!e.length && !e.ended) ||
            (t.emit("readable"), (e.emittedReadable = !1)),
          (e.needReadable =
            !e.flowing && !e.ended && e.length <= e.highWaterMark),
          L(t);
      }
      function j(t, e) {
        e.readingMore || ((e.readingMore = !0), i.nextTick(P, t, e));
      }
      function P(t, e) {
        for (
          ;
          !e.reading &&
          !e.ended &&
          (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

        ) {
          var r = e.length;
          if ((u("maybeReadMore read 0"), t.read(0), r === e.length)) break;
        }
        e.readingMore = !1;
      }
      function T(t) {
        var e = t._readableState;
        (e.readableListening = t.listenerCount("readable") > 0),
          e.resumeScheduled && !e.paused
            ? (e.flowing = !0)
            : t.listenerCount("data") > 0 && t.resume();
      }
      function C(t) {
        u("readable nexttick read 0"), t.read(0);
      }
      function N(t, e) {
        u("resume", e.reading),
          e.reading || t.read(0),
          (e.resumeScheduled = !1),
          t.emit("resume"),
          L(t),
          e.flowing && !e.reading && t.read(0);
      }
      function L(t) {
        var e = t._readableState;
        for (u("flow", e.flowing); e.flowing && null !== t.read(); );
      }
      function D(t, e) {
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder
                  ? e.buffer.join("")
                  : 1 === e.buffer.length
                  ? e.buffer.first()
                  : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = e.buffer.consume(t, e.decoder)),
            r);
        var r;
      }
      function q(t) {
        var e = t._readableState;
        u("endReadable", e.endEmitted),
          e.endEmitted || ((e.ended = !0), i.nextTick(U, e, t));
      }
      function U(t, e) {
        if (
          (u("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted &&
            0 === t.length &&
            ((t.endEmitted = !0),
            (e.readable = !1),
            e.emit("end"),
            t.autoDestroy))
        ) {
          var r = e._writableState;
          (!r || (r.autoDestroy && r.finished)) && e.destroy();
        }
      }
      function z(t, e) {
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
        return -1;
      }
      (k.prototype.read = function (t) {
        u("read", t), (t = parseInt(t, 10));
        var e = this._readableState,
          r = t;
        if (
          (0 !== t && (e.emittedReadable = !1),
          0 === t &&
            e.needReadable &&
            ((0 !== e.highWaterMark
              ? e.length >= e.highWaterMark
              : e.length > 0) ||
              e.ended))
        )
          return (
            u("read: emitReadable", e.length, e.ended),
            0 === e.length && e.ended ? q(this) : R(this),
            null
          );
        if (0 === (t = O(t, e)) && e.ended)
          return 0 === e.length && q(this), null;
        var n,
          i = e.needReadable;
        return (
          u("need readable", i),
          (0 === e.length || e.length - t < e.highWaterMark) &&
            u("length less than watermark", (i = !0)),
          e.ended || e.reading
            ? u("reading or ended", (i = !1))
            : i &&
              (u("do read"),
              (e.reading = !0),
              (e.sync = !0),
              0 === e.length && (e.needReadable = !0),
              this._read(e.highWaterMark),
              (e.sync = !1),
              e.reading || (t = O(r, e))),
          null === (n = t > 0 ? D(t, e) : null)
            ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
            : ((e.length -= t), (e.awaitDrain = 0)),
          0 === e.length &&
            (e.ended || (e.needReadable = !0), r !== t && e.ended && q(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (k.prototype._read = function (t) {
          M(this, new w("_read()"));
        }),
        (k.prototype.pipe = function (t, e) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = t;
              break;
            case 1:
              n.pipes = [n.pipes, t];
              break;
            default:
              n.pipes.push(t);
          }
          (n.pipesCount += 1), u("pipe count=%d opts=%j", n.pipesCount, e);
          var a =
            (!e || !1 !== e.end) && t !== i.stdout && t !== i.stderr ? f : m;
          function s(e, i) {
            u("onunpipe"),
              e === r &&
                i &&
                !1 === i.hasUnpiped &&
                ((i.hasUnpiped = !0),
                u("cleanup"),
                t.removeListener("close", p),
                t.removeListener("finish", b),
                t.removeListener("drain", c),
                t.removeListener("error", l),
                t.removeListener("unpipe", s),
                r.removeListener("end", f),
                r.removeListener("end", m),
                r.removeListener("data", d),
                (h = !0),
                !n.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  c());
          }
          function f() {
            u("onend"), t.end();
          }
          n.endEmitted ? i.nextTick(a) : r.once("end", a), t.on("unpipe", s);
          var c = (function (t) {
            return function () {
              var e = t._readableState;
              u("pipeOnDrain", e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain && o(t, "data") && ((e.flowing = !0), L(t));
            };
          })(r);
          t.on("drain", c);
          var h = !1;
          function d(e) {
            u("ondata");
            var i = t.write(e);
            u("dest.write", i),
              !1 === i &&
                (((1 === n.pipesCount && n.pipes === t) ||
                  (n.pipesCount > 1 && -1 !== z(n.pipes, t))) &&
                  !h &&
                  (u("false write response, pause", n.awaitDrain),
                  n.awaitDrain++),
                r.pause());
          }
          function l(e) {
            u("onerror", e),
              m(),
              t.removeListener("error", l),
              0 === o(t, "error") && M(t, e);
          }
          function p() {
            t.removeListener("finish", b), m();
          }
          function b() {
            u("onfinish"), t.removeListener("close", p), m();
          }
          function m() {
            u("unpipe"), r.unpipe(t);
          }
          return (
            r.on("data", d),
            (function (t, e, r) {
              if ("function" === typeof t.prependListener)
                return t.prependListener(e, r);
              t._events && t._events[e]
                ? Array.isArray(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r);
            })(t, "error", l),
            t.once("close", p),
            t.once("finish", b),
            t.emit("pipe", r),
            n.flowing || (u("pipe resume"), r.resume()),
            t
          );
        }),
        (k.prototype.unpipe = function (t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === e.pipesCount) return this;
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes),
                (e.pipes = null),
                (e.pipesCount = 0),
                (e.flowing = !1),
                t && t.emit("unpipe", this, r)),
              this
            );
          if (!t) {
            var n = e.pipes,
              i = e.pipesCount;
            (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
            for (var o = 0; o < i; o++)
              n[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = z(e.pipes, t);
          return (
            -1 === a ||
              (e.pipes.splice(a, 1),
              (e.pipesCount -= 1),
              1 === e.pipesCount && (e.pipes = e.pipes[0]),
              t.emit("unpipe", this, r)),
            this
          );
        }),
        (k.prototype.on = function (t, e) {
          var r = a.prototype.on.call(this, t, e),
            n = this._readableState;
          return (
            "data" === t
              ? ((n.readableListening = this.listenerCount("readable") > 0),
                !1 !== n.flowing && this.resume())
              : "readable" === t &&
                (n.endEmitted ||
                  n.readableListening ||
                  ((n.readableListening = n.needReadable = !0),
                  (n.flowing = !1),
                  (n.emittedReadable = !1),
                  u("on readable", n.length, n.reading),
                  n.length ? R(this) : n.reading || i.nextTick(C, this))),
            r
          );
        }),
        (k.prototype.addListener = k.prototype.on),
        (k.prototype.removeListener = function (t, e) {
          var r = a.prototype.removeListener.call(this, t, e);
          return "readable" === t && i.nextTick(T, this), r;
        }),
        (k.prototype.removeAllListeners = function (t) {
          var e = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== t && void 0 !== t) || i.nextTick(T, this), e;
        }),
        (k.prototype.resume = function () {
          var t = this._readableState;
          return (
            t.flowing ||
              (u("resume"),
              (t.flowing = !t.readableListening),
              (function (t, e) {
                e.resumeScheduled ||
                  ((e.resumeScheduled = !0), i.nextTick(N, t, e));
              })(this, t)),
            (t.paused = !1),
            this
          );
        }),
        (k.prototype.pause = function () {
          return (
            u("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (u("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (k.prototype.wrap = function (t) {
          var e = this,
            r = this._readableState,
            n = !1;
          for (var i in (t.on("end", function () {
            if ((u("wrapped end"), r.decoder && !r.ended)) {
              var t = r.decoder.end();
              t && t.length && e.push(t);
            }
            e.push(null);
          }),
          t.on("data", function (i) {
            (u("wrapped data"),
            r.decoder && (i = r.decoder.write(i)),
            !r.objectMode || (null !== i && void 0 !== i)) &&
              (r.objectMode || (i && i.length)) &&
              (e.push(i) || ((n = !0), t.pause()));
          }),
          t))
            void 0 === this[i] &&
              "function" === typeof t[i] &&
              (this[i] = (function (e) {
                return function () {
                  return t[e].apply(t, arguments);
                };
              })(i));
          for (var o = 0; o < S.length; o++)
            t.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (e) {
              u("wrapped _read", e), n && ((n = !1), t.resume());
            }),
            this
          );
        }),
        "function" === typeof Symbol &&
          (k.prototype[Symbol.asyncIterator] = function () {
            return void 0 === d && (d = r(4157)), d(this);
          }),
        Object.defineProperty(k.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(k.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(k.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          },
        }),
        (k._fromList = D),
        Object.defineProperty(k.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" === typeof Symbol &&
          (k.from = function (t, e) {
            return void 0 === l && (l = r(5800)), l(k, t, e);
          });
    },
    2175: function (t, e, r) {
      "use strict";
      t.exports = c;
      var n = r(6938).q,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(4439);
      function u(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          n(t);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function c(t) {
        if (!(this instanceof c)) return new c(t);
        f.call(this, t),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", h);
      }
      function h() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (e, r) {
              d(t, e, r);
            });
      }
      function d(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      r(87)(c, f),
        (c.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, t, e)
          );
        }),
        (c.prototype._transform = function (t, e, r) {
          r(new i("_transform()"));
        }),
        (c.prototype._write = function (t, e, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = t),
            (n.writeencoding = e),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (c.prototype._destroy = function (t, e) {
          f.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    4567: function (t, e, r) {
      "use strict";
      var n,
        i = r(7061);
      function o(t) {
        var e = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (t, e, r) {
              var n = t.entry;
              t.entry = null;
              for (; n; ) {
                var i = n.callback;
                e.pendingcb--, i(r), (n = n.next);
              }
              e.corkedRequestsFree.next = t;
            })(e, t);
          });
      }
      (t.exports = k), (k.WritableState = E);
      var a = { deprecate: r(7451) },
        s = r(6052),
        f = r(816).Buffer,
        u = r.g.Uint8Array || function () {};
      var c,
        h = r(7640),
        d = r(5985).getHighWaterMark,
        l = r(6938).q,
        p = l.ERR_INVALID_ARG_TYPE,
        b = l.ERR_METHOD_NOT_IMPLEMENTED,
        m = l.ERR_MULTIPLE_CALLBACK,
        y = l.ERR_STREAM_CANNOT_PIPE,
        g = l.ERR_STREAM_DESTROYED,
        v = l.ERR_STREAM_NULL_VALUES,
        w = l.ERR_STREAM_WRITE_AFTER_END,
        _ = l.ERR_UNKNOWN_ENCODING,
        M = h.errorOrDestroy;
      function S() {}
      function E(t, e, a) {
        (n = n || r(4439)),
          (t = t || {}),
          "boolean" !== typeof a && (a = e instanceof n),
          (this.objectMode = !!t.objectMode),
          a && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = d(this, t, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === t.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            !(function (t, e) {
              var r = t._writableState,
                n = r.sync,
                o = r.writecb;
              if ("function" !== typeof o) throw new m();
              if (
                ((function (t) {
                  (t.writing = !1),
                    (t.writecb = null),
                    (t.length -= t.writelen),
                    (t.writelen = 0);
                })(r),
                e)
              )
                !(function (t, e, r, n, o) {
                  --e.pendingcb,
                    r
                      ? (i.nextTick(o, n),
                        i.nextTick(B, t, e),
                        (t._writableState.errorEmitted = !0),
                        M(t, n))
                      : (o(n),
                        (t._writableState.errorEmitted = !0),
                        M(t, n),
                        B(t, e));
                })(t, r, n, e, o);
              else {
                var a = O(r) || t.destroyed;
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  I(t, r),
                  n ? i.nextTick(x, t, r, a, o) : x(t, r, a, o);
              }
            })(e, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this));
      }
      function k(t) {
        var e = this instanceof (n = n || r(4439));
        if (!e && !c.call(k, this)) return new k(t);
        (this._writableState = new E(t, this, e)),
          (this.writable = !0),
          t &&
            ("function" === typeof t.write && (this._write = t.write),
            "function" === typeof t.writev && (this._writev = t.writev),
            "function" === typeof t.destroy && (this._destroy = t.destroy),
            "function" === typeof t.final && (this._final = t.final)),
          s.call(this);
      }
      function A(t, e, r, n, i, o, a) {
        (e.writelen = n),
          (e.writecb = a),
          (e.writing = !0),
          (e.sync = !0),
          e.destroyed
            ? e.onwrite(new g("write"))
            : r
            ? t._writev(i, e.onwrite)
            : t._write(i, o, e.onwrite),
          (e.sync = !1);
      }
      function x(t, e, r, n) {
        r ||
          (function (t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit("drain"));
          })(t, e),
          e.pendingcb--,
          n(),
          B(t, e);
      }
      function I(t, e) {
        e.bufferProcessing = !0;
        var r = e.bufferedRequest;
        if (t._writev && r && r.next) {
          var n = e.bufferedRequestCount,
            i = new Array(n),
            a = e.corkedRequestsFree;
          a.entry = r;
          for (var s = 0, f = !0; r; )
            (i[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
          (i.allBuffers = f),
            A(t, e, !0, e.length, i, "", a.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            a.next
              ? ((e.corkedRequestsFree = a.next), (a.next = null))
              : (e.corkedRequestsFree = new o(e)),
            (e.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var u = r.chunk,
              c = r.encoding,
              h = r.callback;
            if (
              (A(t, e, !1, e.objectMode ? 1 : u.length, u, c, h),
              (r = r.next),
              e.bufferedRequestCount--,
              e.writing)
            )
              break;
          }
          null === r && (e.lastBufferedRequest = null);
        }
        (e.bufferedRequest = r), (e.bufferProcessing = !1);
      }
      function O(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        );
      }
      function R(t, e) {
        t._final(function (r) {
          e.pendingcb--,
            r && M(t, r),
            (e.prefinished = !0),
            t.emit("prefinish"),
            B(t, e);
        });
      }
      function B(t, e) {
        var r = O(e);
        if (
          r &&
          ((function (t, e) {
            e.prefinished ||
              e.finalCalled ||
              ("function" !== typeof t._final || e.destroyed
                ? ((e.prefinished = !0), t.emit("prefinish"))
                : (e.pendingcb++, (e.finalCalled = !0), i.nextTick(R, t, e)));
          })(t, e),
          0 === e.pendingcb &&
            ((e.finished = !0), t.emit("finish"), e.autoDestroy))
        ) {
          var n = t._readableState;
          (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
        }
        return r;
      }
      r(87)(k, s),
        (E.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, e = []; t; )
            e.push(t), (t = t.next);
          return e;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (t) {}
        })(),
        "function" === typeof Symbol &&
        Symbol.hasInstance &&
        "function" === typeof Function.prototype[Symbol.hasInstance]
          ? ((c = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(k, Symbol.hasInstance, {
              value: function (t) {
                return (
                  !!c.call(this, t) ||
                  (this === k && t && t._writableState instanceof E)
                );
              },
            }))
          : (c = function (t) {
              return t instanceof this;
            }),
        (k.prototype.pipe = function () {
          M(this, new y());
        }),
        (k.prototype.write = function (t, e, r) {
          var n,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((n = t), f.isBuffer(n) || n instanceof u);
          return (
            s &&
              !f.isBuffer(t) &&
              (t = (function (t) {
                return f.from(t);
              })(t)),
            "function" === typeof e && ((r = e), (e = null)),
            s ? (e = "buffer") : e || (e = o.defaultEncoding),
            "function" !== typeof r && (r = S),
            o.ending
              ? (function (t, e) {
                  var r = new w();
                  M(t, r), i.nextTick(e, r);
                })(this, r)
              : (s ||
                  (function (t, e, r, n) {
                    var o;
                    return (
                      null === r
                        ? (o = new v())
                        : "string" === typeof r ||
                          e.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], r)),
                      !o || (M(t, o), i.nextTick(n, o), !1)
                    );
                  })(this, o, t, r)) &&
                (o.pendingcb++,
                (a = (function (t, e, r, n, i, o) {
                  if (!r) {
                    var a = (function (t, e, r) {
                      t.objectMode ||
                        !1 === t.decodeStrings ||
                        "string" !== typeof e ||
                        (e = f.from(e, r));
                      return e;
                    })(e, n, i);
                    n !== a && ((r = !0), (i = "buffer"), (n = a));
                  }
                  var s = e.objectMode ? 1 : n.length;
                  e.length += s;
                  var u = e.length < e.highWaterMark;
                  u || (e.needDrain = !0);
                  if (e.writing || e.corked) {
                    var c = e.lastBufferedRequest;
                    (e.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      c
                        ? (c.next = e.lastBufferedRequest)
                        : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1);
                  } else A(t, e, !1, s, n, i, o);
                  return u;
                })(this, o, s, t, e, r))),
            a
          );
        }),
        (k.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (k.prototype.uncork = function () {
          var t = this._writableState;
          t.corked &&
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              I(this, t));
        }),
        (k.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" === typeof t && (t = t.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((t + "").toLowerCase()) > -1
            ))
          )
            throw new _(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(k.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(k.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (k.prototype._write = function (t, e, r) {
          r(new b("_write()"));
        }),
        (k.prototype._writev = null),
        (k.prototype.end = function (t, e, r) {
          var n = this._writableState;
          return (
            "function" === typeof t
              ? ((r = t), (t = null), (e = null))
              : "function" === typeof e && ((r = e), (e = null)),
            null !== t && void 0 !== t && this.write(t, e),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function (t, e, r) {
                (e.ending = !0),
                  B(t, e),
                  r && (e.finished ? i.nextTick(r) : t.once("finish", r));
                (e.ended = !0), (t.writable = !1);
              })(this, n, r),
            this
          );
        }),
        Object.defineProperty(k.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(k.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          },
        }),
        (k.prototype.destroy = h.destroy),
        (k.prototype._undestroy = h.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        });
    },
    4157: function (t, e, r) {
      "use strict";
      var n,
        i = r(7061);
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r(5027),
        s = Symbol("lastResolve"),
        f = Symbol("lastReject"),
        u = Symbol("error"),
        c = Symbol("ended"),
        h = Symbol("lastPromise"),
        d = Symbol("handlePromise"),
        l = Symbol("stream");
      function p(t, e) {
        return { value: t, done: e };
      }
      function b(t) {
        var e = t[s];
        if (null !== e) {
          var r = t[l].read();
          null !== r &&
            ((t[h] = null), (t[s] = null), (t[f] = null), e(p(r, !1)));
        }
      }
      function m(t) {
        i.nextTick(b, t);
      }
      var y = Object.getPrototypeOf(function () {}),
        g = Object.setPrototypeOf(
          (o(
            (n = {
              get stream() {
                return this[l];
              },
              next: function () {
                var t = this,
                  e = this[u];
                if (null !== e) return Promise.reject(e);
                if (this[c]) return Promise.resolve(p(void 0, !0));
                if (this[l].destroyed)
                  return new Promise(function (e, r) {
                    i.nextTick(function () {
                      t[u] ? r(t[u]) : e(p(void 0, !0));
                    });
                  });
                var r,
                  n = this[h];
                if (n)
                  r = new Promise(
                    (function (t, e) {
                      return function (r, n) {
                        t.then(function () {
                          e[c] ? r(p(void 0, !0)) : e[d](r, n);
                        }, n);
                      };
                    })(n, this)
                  );
                else {
                  var o = this[l].read();
                  if (null !== o) return Promise.resolve(p(o, !1));
                  r = new Promise(this[d]);
                }
                return (this[h] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(n, "return", function () {
            var t = this;
            return new Promise(function (e, r) {
              t[l].destroy(null, function (t) {
                t ? r(t) : e(p(void 0, !0));
              });
            });
          }),
          n),
          y
        );
      t.exports = function (t) {
        var e,
          r = Object.create(
            g,
            (o((e = {}), l, { value: t, writable: !0 }),
            o(e, s, { value: null, writable: !0 }),
            o(e, f, { value: null, writable: !0 }),
            o(e, u, { value: null, writable: !0 }),
            o(e, c, { value: t._readableState.endEmitted, writable: !0 }),
            o(e, d, {
              value: function (t, e) {
                var n = r[l].read();
                n
                  ? ((r[h] = null), (r[s] = null), (r[f] = null), t(p(n, !1)))
                  : ((r[s] = t), (r[f] = e));
              },
              writable: !0,
            }),
            e)
          );
        return (
          (r[h] = null),
          a(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var e = r[f];
              return (
                null !== e &&
                  ((r[h] = null), (r[s] = null), (r[f] = null), e(t)),
                void (r[u] = t)
              );
            }
            var n = r[s];
            null !== n &&
              ((r[h] = null), (r[s] = null), (r[f] = null), n(p(void 0, !0))),
              (r[c] = !0);
          }),
          t.on("readable", m.bind(null, r)),
          r
        );
      };
    },
    7712: function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var a = r(816).Buffer,
        s = r(471).inspect,
        f = (s && s.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, r, u;
        return (
          (e = t),
          (r = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, r = "" + e.data; (e = e.next); )
                  r += t + e.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return a.alloc(0);
                for (
                  var e, r, n, i = a.allocUnsafe(t >>> 0), o = this.head, s = 0;
                  o;

                )
                  (e = o.data),
                    (r = i),
                    (n = s),
                    a.prototype.copy.call(e, r, n),
                    (s += o.data.length),
                    (o = o.next);
                return i;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var r;
                return (
                  t < this.head.data.length
                    ? ((r = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (r =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  r = 1,
                  n = e.data;
                for (t -= n.length; (e = e.next); ) {
                  var i = e.data,
                    o = t > i.length ? i.length : t;
                  if (
                    (o === i.length ? (n += i) : (n += i.slice(0, t)),
                    0 === (t -= o))
                  ) {
                    o === i.length
                      ? (++r,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = a.allocUnsafe(t),
                  r = this.head,
                  n = 1;
                for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                  var i = r.data,
                    o = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, o), 0 === (t -= o))) {
                    o === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), e;
              },
            },
            {
              key: f,
              value: function (t, e) {
                return s(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? n(Object(r), !0).forEach(function (e) {
                            i(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : n(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })({}, e, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]) && o(e.prototype, r),
          u && o(e, u),
          t
        );
      })();
    },
    7640: function (t, e, r) {
      "use strict";
      var n = r(7061);
      function i(t, e) {
        a(t, e), o(t);
      }
      function o(t) {
        (t._writableState && !t._writableState.emitClose) ||
          (t._readableState && !t._readableState.emitClose) ||
          t.emit("close");
      }
      function a(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var r = this,
            s = this._readableState && this._readableState.destroyed,
            f = this._writableState && this._writableState.destroyed;
          return s || f
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(a, this, t))
                    : n.nextTick(a, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? n.nextTick(o, r)
                      : ((r._writableState.errorEmitted = !0),
                        n.nextTick(i, r, t))
                    : n.nextTick(i, r, t)
                  : e
                  ? (n.nextTick(o, r), e(t))
                  : n.nextTick(o, r);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (t, e) {
          var r = t._readableState,
            n = t._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy)
            ? t.destroy(e)
            : t.emit("error", e);
        },
      };
    },
    5027: function (t, e, r) {
      "use strict";
      var n = r(6938).q.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      t.exports = function t(e, r, o) {
        if ("function" === typeof r) return t(e, null, r);
        r || (r = {}),
          (o = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (
                  var r = arguments.length, n = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i];
                t.apply(this, n);
              }
            };
          })(o || i));
        var a = r.readable || (!1 !== r.readable && e.readable),
          s = r.writable || (!1 !== r.writable && e.writable),
          f = function () {
            e.writable || c();
          },
          u = e._writableState && e._writableState.finished,
          c = function () {
            (s = !1), (u = !0), a || o.call(e);
          },
          h = e._readableState && e._readableState.endEmitted,
          d = function () {
            (a = !1), (h = !0), s || o.call(e);
          },
          l = function (t) {
            o.call(e, t);
          },
          p = function () {
            var t;
            return a && !h
              ? ((e._readableState && e._readableState.ended) || (t = new n()),
                o.call(e, t))
              : s && !u
              ? ((e._writableState && e._writableState.ended) || (t = new n()),
                o.call(e, t))
              : void 0;
          },
          b = function () {
            e.req.on("finish", c);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" === typeof t.abort;
          })(e)
            ? s && !e._writableState && (e.on("end", f), e.on("close", f))
            : (e.on("complete", c),
              e.on("abort", p),
              e.req ? b() : e.on("request", b)),
          e.on("end", d),
          e.on("finish", c),
          !1 !== r.error && e.on("error", l),
          e.on("close", p),
          function () {
            e.removeListener("complete", c),
              e.removeListener("abort", p),
              e.removeListener("request", b),
              e.req && e.req.removeListener("finish", c),
              e.removeListener("end", f),
              e.removeListener("close", f),
              e.removeListener("finish", c),
              e.removeListener("end", d),
              e.removeListener("error", l),
              e.removeListener("close", p);
          }
        );
      };
    },
    5800: function (t) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    410: function (t, e, r) {
      "use strict";
      var n;
      var i = r(6938).q,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function f(t, e, i, o) {
        o = (function (t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        t.on("close", function () {
          s = !0;
        }),
          void 0 === n && (n = r(5027)),
          n(t, { readable: e, writable: i }, function (t) {
            if (t) return o(t);
            (s = !0), o();
          });
        var f = !1;
        return function (e) {
          if (!s && !f)
            return (
              (f = !0),
              (function (t) {
                return t.setHeader && "function" === typeof t.abort;
              })(t)
                ? t.abort()
                : "function" === typeof t.destroy
                ? t.destroy()
                : void o(e || new a("pipe"))
            );
        };
      }
      function u(t) {
        t();
      }
      function c(t, e) {
        return t.pipe(e);
      }
      function h(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? s
            : t.pop()
          : s;
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        var n,
          i = h(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o("streams");
        var a = e.map(function (t, r) {
          var o = r < e.length - 1;
          return f(t, o, r > 0, function (t) {
            n || (n = t), t && a.forEach(u), o || (a.forEach(u), i(n));
          });
        });
        return e.reduce(c);
      };
    },
    5985: function (t, e, r) {
      "use strict";
      var n = r(6938).q.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, r, i) {
          var o = (function (t, e, r) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null;
          })(e, i, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(i ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    6052: function (t, e, r) {
      t.exports = r(343).EventEmitter;
    },
    8310: function (t, e, r) {
      ((e = t.exports = r(5327)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(4567)),
        (e.Duplex = r(4439)),
        (e.Transform = r(2175)),
        (e.PassThrough = r(3754)),
        (e.finished = r(5027)),
        (e.pipeline = r(410));
    },
    6558: function (t, e, r) {
      "use strict";
      var n = r(816).Buffer,
        i = r(87),
        o = r(6883),
        a = new Array(16),
        s = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        f = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        u = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        c = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ],
        h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        d = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function l() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function p(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function b(t, e, r, n, i, o, a, s) {
        return (p((t + (e ^ r ^ n) + o + a) | 0, s) + i) | 0;
      }
      function m(t, e, r, n, i, o, a, s) {
        return (p((t + ((e & r) | (~e & n)) + o + a) | 0, s) + i) | 0;
      }
      function y(t, e, r, n, i, o, a, s) {
        return (p((t + ((e | ~r) ^ n) + o + a) | 0, s) + i) | 0;
      }
      function g(t, e, r, n, i, o, a, s) {
        return (p((t + ((e & n) | (r & ~n)) + o + a) | 0, s) + i) | 0;
      }
      function v(t, e, r, n, i, o, a, s) {
        return (p((t + (e ^ (r | ~n)) + o + a) | 0, s) + i) | 0;
      }
      i(l, o),
        (l.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          for (
            var r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              w = 0 | this._a,
              _ = 0 | this._b,
              M = 0 | this._c,
              S = 0 | this._d,
              E = 0 | this._e,
              k = 0;
            k < 80;
            k += 1
          ) {
            var A, x;
            k < 16
              ? ((A = b(r, n, i, o, l, t[s[k]], h[0], u[k])),
                (x = v(w, _, M, S, E, t[f[k]], d[0], c[k])))
              : k < 32
              ? ((A = m(r, n, i, o, l, t[s[k]], h[1], u[k])),
                (x = g(w, _, M, S, E, t[f[k]], d[1], c[k])))
              : k < 48
              ? ((A = y(r, n, i, o, l, t[s[k]], h[2], u[k])),
                (x = y(w, _, M, S, E, t[f[k]], d[2], c[k])))
              : k < 64
              ? ((A = g(r, n, i, o, l, t[s[k]], h[3], u[k])),
                (x = m(w, _, M, S, E, t[f[k]], d[3], c[k])))
              : ((A = v(r, n, i, o, l, t[s[k]], h[4], u[k])),
                (x = b(w, _, M, S, E, t[f[k]], d[4], c[k]))),
              (r = l),
              (l = o),
              (o = p(i, 10)),
              (i = n),
              (n = A),
              (w = E),
              (E = S),
              (S = p(M, 10)),
              (M = _),
              (_ = x);
          }
          var I = (this._b + i + S) | 0;
          (this._b = (this._c + o + E) | 0),
            (this._c = (this._d + l + w) | 0),
            (this._d = (this._e + r + _) | 0),
            (this._e = (this._a + n + M) | 0),
            (this._a = I);
        }),
        (l.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = n.alloc ? n.alloc(20) : new n(20);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
          );
        }),
        (t.exports = l);
    },
    1141: function (t, e, r) {
      var n = r(816).Buffer,
        i = r(9619);
      function o(t) {
        i("string" === typeof t, "the list of characters must be a string!");
        var e = n.byteLength(t);
        return function (r) {
          i(
            "number" === typeof (r = r || 10) && r >= 0,
            "the length of the random string must be a number!"
          );
          for (var n = "", o = 0; o < r; o++)
            n += t[Math.floor(e * Math.random())];
          return n;
        };
      }
      ((e = t.exports =
        o(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        )).base62 = e),
        (e.base36 = o("abcdefghijklmnopqrstuvwxyz0123456789")),
        (e.base10 = o("0123456789")),
        (e.create = o);
    },
    7172: function (t, e, r) {
      var n = r(816),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = a)),
        (a.prototype = Object.create(i.prototype)),
        o(i, a),
        (a.from = function (t, e, r) {
          if ("number" === typeof t)
            throw new TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" === typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return i(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    1788: function (t, e, r) {
      "use strict";
      var n,
        i = r(7061),
        o = r(816),
        a = o.Buffer,
        s = {};
      for (n in o)
        o.hasOwnProperty(n) &&
          "SlowBuffer" !== n &&
          "Buffer" !== n &&
          (s[n] = o[n]);
      var f = (s.Buffer = {});
      for (n in a)
        a.hasOwnProperty(n) &&
          "allocUnsafe" !== n &&
          "allocUnsafeSlow" !== n &&
          (f[n] = a[n]);
      if (
        ((s.Buffer.prototype = a.prototype),
        (f.from && f.from !== Uint8Array.from) ||
          (f.from = function (t, e, r) {
            if ("number" === typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type ' +
                  typeof t
              );
            if (t && "undefined" === typeof t.length)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            return a(t, e, r);
          }),
        f.alloc ||
          (f.alloc = function (t, e, r) {
            if ("number" !== typeof t)
              throw new TypeError(
                'The "size" argument must be of type number. Received type ' +
                  typeof t
              );
            if (t < 0 || t >= 2 * (1 << 30))
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            var n = a(t);
            return (
              e && 0 !== e.length
                ? "string" === typeof r
                  ? n.fill(e, r)
                  : n.fill(e)
                : n.fill(0),
              n
            );
          }),
        !s.kStringMaxLength)
      )
        try {
          s.kStringMaxLength = i.binding("buffer").kStringMaxLength;
        } catch (u) {}
      s.constants ||
        ((s.constants = { MAX_LENGTH: s.kMaxLength }),
        s.kStringMaxLength &&
          (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)),
        (t.exports = s);
    },
    8423: function (t, e, r) {
      var n = r(7172).Buffer;
      function i(t, e) {
        (this._block = n.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (i.prototype.update = function (t, e) {
        "string" === typeof t && ((e = e || "utf8"), (t = n.from(t, e)));
        for (
          var r = this._block,
            i = this._blockSize,
            o = t.length,
            a = this._len,
            s = 0;
          s < o;

        ) {
          for (var f = a % i, u = Math.min(o - s, i - f), c = 0; c < u; c++)
            r[f + c] = t[s + c];
          (s += u), (a += u) % i === 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0,
              i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return t ? o.toString(t) : o;
        }),
        (i.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (t.exports = i);
    },
    4458: function (t, e, r) {
      var n = (t.exports = function (t) {
        t = t.toLowerCase();
        var e = n[t];
        if (!e)
          throw new Error(t + " is not supported (we accept pull requests)");
        return new e();
      });
      (n.sha = r(3608)),
        (n.sha1 = r(6533)),
        (n.sha224 = r(8203)),
        (n.sha256 = r(9541)),
        (n.sha384 = r(1389)),
        (n.sha512 = r(6282));
    },
    3608: function (t, e, r) {
      var n = r(87),
        i = r(8423),
        o = r(7172).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(t) {
        return (t << 30) | (t >>> 2);
      }
      function c(t, e, r, n) {
        return 0 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e & r) | (e & n) | (r & n)
          : e ^ r ^ n;
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            r[h] = t.readInt32BE(4 * h);
          for (; h < 80; ++h)
            r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
          for (var d = 0; d < 80; ++d) {
            var l = ~~(d / 20),
              p =
                0 |
                ((((e = n) << 5) | (e >>> 27)) +
                  c(l, i, o, s) +
                  f +
                  r[d] +
                  a[l]);
            (f = s), (s = o), (o = u(i)), (i = n), (n = p);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    6533: function (t, e, r) {
      var n = r(87),
        i = r(8423),
        o = r(7172).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(t) {
        return (t << 5) | (t >>> 27);
      }
      function c(t) {
        return (t << 30) | (t >>> 2);
      }
      function h(t, e, r, n) {
        return 0 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e & r) | (e & n) | (r & n)
          : e ^ r ^ n;
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              d = 0;
            d < 16;
            ++d
          )
            r[d] = t.readInt32BE(4 * d);
          for (; d < 80; ++d)
            r[d] =
              ((e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1) |
              (e >>> 31);
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20),
              b = (u(n) + h(p, i, o, s) + f + r[l] + a[p]) | 0;
            (f = s), (s = o), (o = c(i)), (i = n), (n = b);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    8203: function (t, e, r) {
      var n = r(87),
        i = r(9541),
        o = r(8423),
        a = r(7172).Buffer,
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), o.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = f);
    },
    9541: function (t, e, r) {
      var n = r(87),
        i = r(8423),
        o = r(7172).Buffer,
        a = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(t, e, r) {
        return r ^ (t & (e ^ r));
      }
      function c(t, e, r) {
        return (t & e) | (r & (t | e));
      }
      function h(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        );
      }
      function d(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        );
      }
      function l(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              p = 0 | this._f,
              b = 0 | this._g,
              m = 0 | this._h,
              y = 0;
            y < 16;
            ++y
          )
            r[y] = t.readInt32BE(4 * y);
          for (; y < 64; ++y)
            r[y] =
              0 |
              (((((e = r[y - 2]) >>> 17) | (e << 15)) ^
                ((e >>> 19) | (e << 13)) ^
                (e >>> 10)) +
                r[y - 7] +
                l(r[y - 15]) +
                r[y - 16]);
          for (var g = 0; g < 64; ++g) {
            var v = (m + d(f) + u(f, p, b) + a[g] + r[g]) | 0,
              w = (h(n) + c(n, i, o)) | 0;
            (m = b),
              (b = p),
              (p = f),
              (f = (s + v) | 0),
              (s = o),
              (o = i),
              (i = n),
              (n = (v + w) | 0);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (m + this._h) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = f);
    },
    1389: function (t, e, r) {
      var n = r(87),
        i = r(6282),
        o = r(8423),
        a = r(7172).Buffer,
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), o.call(this, 128, 112);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(48);
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = f);
    },
    6282: function (t, e, r) {
      var n = r(87),
        i = r(8423),
        o = r(7172).Buffer,
        a = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), i.call(this, 128, 112);
      }
      function u(t, e, r) {
        return r ^ (t & (e ^ r));
      }
      function c(t, e, r) {
        return (t & e) | (r & (t | e));
      }
      function h(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function d(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function l(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function b(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
      }
      function m(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        );
      }
      function y(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              s = 0 | this._eh,
              f = 0 | this._fh,
              g = 0 | this._gh,
              v = 0 | this._hh,
              w = 0 | this._al,
              _ = 0 | this._bl,
              M = 0 | this._cl,
              S = 0 | this._dl,
              E = 0 | this._el,
              k = 0 | this._fl,
              A = 0 | this._gl,
              x = 0 | this._hl,
              I = 0;
            I < 32;
            I += 2
          )
            (e[I] = t.readInt32BE(4 * I)),
              (e[I + 1] = t.readInt32BE(4 * I + 4));
          for (; I < 160; I += 2) {
            var O = e[I - 30],
              R = e[I - 30 + 1],
              B = l(O, R),
              j = p(R, O),
              P = b((O = e[I - 4]), (R = e[I - 4 + 1])),
              T = m(R, O),
              C = e[I - 14],
              N = e[I - 14 + 1],
              L = e[I - 32],
              D = e[I - 32 + 1],
              q = (j + N) | 0,
              U = (B + C + y(q, j)) | 0;
            (U =
              ((U = (U + P + y((q = (q + T) | 0), T)) | 0) +
                L +
                y((q = (q + D) | 0), D)) |
              0),
              (e[I] = U),
              (e[I + 1] = q);
          }
          for (var z = 0; z < 160; z += 2) {
            (U = e[z]), (q = e[z + 1]);
            var F = c(r, n, i),
              H = c(w, _, M),
              K = h(r, w),
              W = h(w, r),
              V = d(s, E),
              G = d(E, s),
              Z = a[z],
              $ = a[z + 1],
              X = u(s, f, g),
              J = u(E, k, A),
              Y = (x + G) | 0,
              Q = (v + V + y(Y, x)) | 0;
            Q =
              ((Q =
                ((Q = (Q + X + y((Y = (Y + J) | 0), J)) | 0) +
                  Z +
                  y((Y = (Y + $) | 0), $)) |
                0) +
                U +
                y((Y = (Y + q) | 0), q)) |
              0;
            var tt = (W + H) | 0,
              et = (K + F + y(tt, W)) | 0;
            (v = g),
              (x = A),
              (g = f),
              (A = k),
              (f = s),
              (k = E),
              (s = (o + Q + y((E = (S + Y) | 0), S)) | 0),
              (o = i),
              (S = M),
              (i = n),
              (M = _),
              (n = r),
              (_ = w),
              (r = (Q + et + y((w = (Y + tt) | 0), Y)) | 0);
          }
          (this._al = (this._al + w) | 0),
            (this._bl = (this._bl + _) | 0),
            (this._cl = (this._cl + M) | 0),
            (this._dl = (this._dl + S) | 0),
            (this._el = (this._el + E) | 0),
            (this._fl = (this._fl + k) | 0),
            (this._gl = (this._gl + A) | 0),
            (this._hl = (this._hl + x) | 0),
            (this._ah = (this._ah + r + y(this._al, w)) | 0),
            (this._bh = (this._bh + n + y(this._bl, _)) | 0),
            (this._ch = (this._ch + i + y(this._cl, M)) | 0),
            (this._dh = (this._dh + o + y(this._dl, S)) | 0),
            (this._eh = (this._eh + s + y(this._el, E)) | 0),
            (this._fh = (this._fh + f + y(this._fl, k)) | 0),
            (this._gh = (this._gh + g + y(this._gl, A)) | 0),
            (this._hh = (this._hh + v + y(this._hl, x)) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(64);
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = f);
    },
    3424: function (t, e, r) {
      t.exports = i;
      var n = r(343).EventEmitter;
      function i() {
        n.call(this);
      }
      r(87)(i, n),
        (i.Readable = r(5327)),
        (i.Writable = r(4567)),
        (i.Duplex = r(4439)),
        (i.Transform = r(2175)),
        (i.PassThrough = r(3754)),
        (i.finished = r(5027)),
        (i.pipeline = r(410)),
        (i.Stream = i),
        (i.prototype.pipe = function (t, e) {
          var r = this;
          function i(e) {
            t.writable && !1 === t.write(e) && r.pause && r.pause();
          }
          function o() {
            r.readable && r.resume && r.resume();
          }
          r.on("data", i),
            t.on("drain", o),
            t._isStdio ||
              (e && !1 === e.end) ||
              (r.on("end", s), r.on("close", f));
          var a = !1;
          function s() {
            a || ((a = !0), t.end());
          }
          function f() {
            a || ((a = !0), "function" === typeof t.destroy && t.destroy());
          }
          function u(t) {
            if ((c(), 0 === n.listenerCount(this, "error"))) throw t;
          }
          function c() {
            r.removeListener("data", i),
              t.removeListener("drain", o),
              r.removeListener("end", s),
              r.removeListener("close", f),
              r.removeListener("error", u),
              t.removeListener("error", u),
              r.removeListener("end", c),
              r.removeListener("close", c),
              t.removeListener("close", c);
          }
          return (
            r.on("error", u),
            t.on("error", u),
            r.on("end", c),
            r.on("close", c),
            t.on("close", c),
            t.emit("pipe", r),
            t
          );
        });
    },
    4361: function (t, e, r) {
      "use strict";
      var n = r(7172).Buffer,
        i =
          n.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" !== typeof e && (n.isEncoding === i || !i(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = f), (this.end = u), (e = 4);
            break;
          case "utf8":
            (this.fillLast = s), (e = 4);
            break;
          case "base64":
            (this.text = c), (this.end = h), (e = 3);
            break;
          default:
            return (this.write = d), void (this.end = l);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e));
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function s(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e, r) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), "\ufffd";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), "\ufffd";
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), "\ufffd";
            }
          })(this, t);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function f(t, e) {
        if ((t.length - e) % 2 === 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function u(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function c(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function d(t) {
        return t.toString(this.encoding);
      }
      function l(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.s = o),
        (o.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, r;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || "";
        }),
        (o.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "\ufffd" : e;
        }),
        (o.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var i = a(e[n]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(e[n])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var n = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    4371: function (t, e, r) {
      "use strict";
      var n = r(2337);
      t.exports = function (t, e) {
        var r = String(t),
          i = String(e),
          o = n.pseudoRandomBytes(32);
        return (
          (function (t, e) {
            if (t.length !== e.length) return !1;
            if (n.timingSafeEqual) return n.timingSafeEqual(t, e);
            for (var r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
            return !0;
          })(
            n.createHmac("sha256", o).update(r).digest(),
            n.createHmac("sha256", o).update(i).digest()
          ) && t === e
        );
      };
    },
    3522: function (t, e, r) {
      "use strict";
      var n = r(5208),
        i = /=+$/,
        o = /\+/g,
        a = /\//g;
      function s(t, e) {
        n(t, function (t, r) {
          if (t) return e(t);
          e(null, f(r));
        });
      }
      function f(t) {
        return t
          .toString("base64")
          .replace(i, "")
          .replace(o, "-")
          .replace(a, "_");
      }
      (t.exports = function (t, e) {
        if (void 0 !== e && "function" !== typeof e)
          throw new TypeError("argument callback must be a function");
        if (!e && !r.g.Promise)
          throw new TypeError("argument callback is required");
        if (e) return s(t, e);
        return new Promise(function (e, r) {
          s(t, function (t, n) {
            if (t) return r(t);
            e(n);
          });
        });
      }),
        (t.exports.sync = function (t) {
          return f(n.sync(t));
        });
    },
    7451: function (t, e, r) {
      function n(t) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (n) {
          return !1;
        }
        var e = r.g.localStorage[t];
        return null != e && "true" === String(e).toLowerCase();
      }
      t.exports = function (t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e),
              (r = !0);
          }
          return t.apply(this, arguments);
        };
      };
    },
    6579: function (t) {
      t.exports = function (t) {
        return (
          t &&
          "object" === typeof t &&
          "function" === typeof t.copy &&
          "function" === typeof t.fill &&
          "function" === typeof t.readUInt8
        );
      };
    },
    7673: function (t, e, r) {
      "use strict";
      var n = r(7740),
        i = r(8265),
        o = r(2505),
        a = r(387);
      function s(t) {
        return t.call.bind(t);
      }
      var f = "undefined" !== typeof BigInt,
        u = "undefined" !== typeof Symbol,
        c = s(Object.prototype.toString),
        h = s(Number.prototype.valueOf),
        d = s(String.prototype.valueOf),
        l = s(Boolean.prototype.valueOf);
      if (f) var p = s(BigInt.prototype.valueOf);
      if (u) var b = s(Symbol.prototype.valueOf);
      function m(t, e) {
        if ("object" !== typeof t) return !1;
        try {
          return e(t), !0;
        } catch (r) {
          return !1;
        }
      }
      function y(t) {
        return "[object Map]" === c(t);
      }
      function g(t) {
        return "[object Set]" === c(t);
      }
      function v(t) {
        return "[object WeakMap]" === c(t);
      }
      function w(t) {
        return "[object WeakSet]" === c(t);
      }
      function _(t) {
        return "[object ArrayBuffer]" === c(t);
      }
      function M(t) {
        return (
          "undefined" !== typeof ArrayBuffer &&
          (_.working ? _(t) : t instanceof ArrayBuffer)
        );
      }
      function S(t) {
        return "[object DataView]" === c(t);
      }
      function E(t) {
        return (
          "undefined" !== typeof DataView &&
          (S.working ? S(t) : t instanceof DataView)
        );
      }
      (e.isArgumentsObject = n),
        (e.isGeneratorFunction = i),
        (e.isTypedArray = a),
        (e.isPromise = function (t) {
          return (
            ("undefined" !== typeof Promise && t instanceof Promise) ||
            (null !== t &&
              "object" === typeof t &&
              "function" === typeof t.then &&
              "function" === typeof t.catch)
          );
        }),
        (e.isArrayBufferView = function (t) {
          return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : a(t) || E(t);
        }),
        (e.isUint8Array = function (t) {
          return "Uint8Array" === o(t);
        }),
        (e.isUint8ClampedArray = function (t) {
          return "Uint8ClampedArray" === o(t);
        }),
        (e.isUint16Array = function (t) {
          return "Uint16Array" === o(t);
        }),
        (e.isUint32Array = function (t) {
          return "Uint32Array" === o(t);
        }),
        (e.isInt8Array = function (t) {
          return "Int8Array" === o(t);
        }),
        (e.isInt16Array = function (t) {
          return "Int16Array" === o(t);
        }),
        (e.isInt32Array = function (t) {
          return "Int32Array" === o(t);
        }),
        (e.isFloat32Array = function (t) {
          return "Float32Array" === o(t);
        }),
        (e.isFloat64Array = function (t) {
          return "Float64Array" === o(t);
        }),
        (e.isBigInt64Array = function (t) {
          return "BigInt64Array" === o(t);
        }),
        (e.isBigUint64Array = function (t) {
          return "BigUint64Array" === o(t);
        }),
        (y.working = "undefined" !== typeof Map && y(new Map())),
        (e.isMap = function (t) {
          return (
            "undefined" !== typeof Map && (y.working ? y(t) : t instanceof Map)
          );
        }),
        (g.working = "undefined" !== typeof Set && g(new Set())),
        (e.isSet = function (t) {
          return (
            "undefined" !== typeof Set && (g.working ? g(t) : t instanceof Set)
          );
        }),
        (v.working = "undefined" !== typeof WeakMap && v(new WeakMap())),
        (e.isWeakMap = function (t) {
          return (
            "undefined" !== typeof WeakMap &&
            (v.working ? v(t) : t instanceof WeakMap)
          );
        }),
        (w.working = "undefined" !== typeof WeakSet && w(new WeakSet())),
        (e.isWeakSet = function (t) {
          return w(t);
        }),
        (_.working =
          "undefined" !== typeof ArrayBuffer && _(new ArrayBuffer())),
        (e.isArrayBuffer = M),
        (S.working =
          "undefined" !== typeof ArrayBuffer &&
          "undefined" !== typeof DataView &&
          S(new DataView(new ArrayBuffer(1), 0, 1))),
        (e.isDataView = E);
      var k =
        "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function A(t) {
        return "[object SharedArrayBuffer]" === c(t);
      }
      function x(t) {
        return (
          "undefined" !== typeof k &&
          ("undefined" === typeof A.working && (A.working = A(new k())),
          A.working ? A(t) : t instanceof k)
        );
      }
      function I(t) {
        return m(t, h);
      }
      function O(t) {
        return m(t, d);
      }
      function R(t) {
        return m(t, l);
      }
      function B(t) {
        return f && m(t, p);
      }
      function j(t) {
        return u && m(t, b);
      }
      (e.isSharedArrayBuffer = x),
        (e.isAsyncFunction = function (t) {
          return "[object AsyncFunction]" === c(t);
        }),
        (e.isMapIterator = function (t) {
          return "[object Map Iterator]" === c(t);
        }),
        (e.isSetIterator = function (t) {
          return "[object Set Iterator]" === c(t);
        }),
        (e.isGeneratorObject = function (t) {
          return "[object Generator]" === c(t);
        }),
        (e.isWebAssemblyCompiledModule = function (t) {
          return "[object WebAssembly.Module]" === c(t);
        }),
        (e.isNumberObject = I),
        (e.isStringObject = O),
        (e.isBooleanObject = R),
        (e.isBigIntObject = B),
        (e.isSymbolObject = j),
        (e.isBoxedPrimitive = function (t) {
          return I(t) || O(t) || R(t) || B(t) || j(t);
        }),
        (e.isAnyArrayBuffer = function (t) {
          return "undefined" !== typeof Uint8Array && (M(t) || x(t));
        }),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
          t
        ) {
          Object.defineProperty(e, t, {
            enumerable: !1,
            value: function () {
              throw new Error(t + " is not supported in userland");
            },
          });
        });
    },
    1323: function (t, e, r) {
      var n = r(7061),
        i =
          Object.getOwnPropertyDescriptors ||
          function (t) {
            for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
              r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
            return r;
          },
        o = /%[sdj%]/g;
      (e.format = function (t) {
        if (!v(t)) {
          for (var e = [], r = 0; r < arguments.length; r++)
            e.push(u(arguments[r]));
          return e.join(" ");
        }
        r = 1;
        for (
          var n = arguments,
            i = n.length,
            a = String(t).replace(o, function (t) {
              if ("%%" === t) return "%";
              if (r >= i) return t;
              switch (t) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return t;
              }
            }),
            s = n[r];
          r < i;
          s = n[++r]
        )
          y(s) || !M(s) ? (a += " " + s) : (a += " " + u(s));
        return a;
      }),
        (e.deprecate = function (t, r) {
          if ("undefined" !== typeof n && !0 === n.noDeprecation) return t;
          if ("undefined" === typeof n)
            return function () {
              return e.deprecate(t, r).apply(this, arguments);
            };
          var i = !1;
          return function () {
            if (!i) {
              if (n.throwDeprecation) throw new Error(r);
              n.traceDeprecation ? console.trace(r) : console.error(r),
                (i = !0);
            }
            return t.apply(this, arguments);
          };
        });
      var a = {},
        s = /^$/;
      if (n.env.NODE_DEBUG) {
        var f = n.env.NODE_DEBUG;
        (f = f
          .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
          .replace(/\*/g, ".*")
          .replace(/,/g, "$|^")
          .toUpperCase()),
          (s = new RegExp("^" + f + "$", "i"));
      }
      function u(t, r) {
        var n = { seen: [], stylize: h };
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          m(r) ? (n.showHidden = r) : r && e._extend(n, r),
          w(n.showHidden) && (n.showHidden = !1),
          w(n.depth) && (n.depth = 2),
          w(n.colors) && (n.colors = !1),
          w(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = c),
          d(n, t, n.depth)
        );
      }
      function c(t, e) {
        var r = u.styles[e];
        return r
          ? "\x1b[" + u.colors[r][0] + "m" + t + "\x1b[" + u.colors[r][1] + "m"
          : t;
      }
      function h(t, e) {
        return t;
      }
      function d(t, r, n) {
        if (
          t.customInspect &&
          r &&
          k(r.inspect) &&
          r.inspect !== e.inspect &&
          (!r.constructor || r.constructor.prototype !== r)
        ) {
          var i = r.inspect(n, t);
          return v(i) || (i = d(t, i, n)), i;
        }
        var o = (function (t, e) {
          if (w(e)) return t.stylize("undefined", "undefined");
          if (v(e)) {
            var r =
              "'" +
              JSON.stringify(e)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return t.stylize(r, "string");
          }
          if (g(e)) return t.stylize("" + e, "number");
          if (m(e)) return t.stylize("" + e, "boolean");
          if (y(e)) return t.stylize("null", "null");
        })(t, r);
        if (o) return o;
        var a = Object.keys(r),
          s = (function (t) {
            var e = {};
            return (
              t.forEach(function (t, r) {
                e[t] = !0;
              }),
              e
            );
          })(a);
        if (
          (t.showHidden && (a = Object.getOwnPropertyNames(r)),
          E(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        )
          return l(r);
        if (0 === a.length) {
          if (k(r)) {
            var f = r.name ? ": " + r.name : "";
            return t.stylize("[Function" + f + "]", "special");
          }
          if (_(r))
            return t.stylize(RegExp.prototype.toString.call(r), "regexp");
          if (S(r)) return t.stylize(Date.prototype.toString.call(r), "date");
          if (E(r)) return l(r);
        }
        var u,
          c = "",
          h = !1,
          M = ["{", "}"];
        (b(r) && ((h = !0), (M = ["[", "]"])), k(r)) &&
          (c = " [Function" + (r.name ? ": " + r.name : "") + "]");
        return (
          _(r) && (c = " " + RegExp.prototype.toString.call(r)),
          S(r) && (c = " " + Date.prototype.toUTCString.call(r)),
          E(r) && (c = " " + l(r)),
          0 !== a.length || (h && 0 != r.length)
            ? n < 0
              ? _(r)
                ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                : t.stylize("[Object]", "special")
              : (t.seen.push(r),
                (u = h
                  ? (function (t, e, r, n, i) {
                      for (var o = [], a = 0, s = e.length; a < s; ++a)
                        R(e, String(a))
                          ? o.push(p(t, e, r, n, String(a), !0))
                          : o.push("");
                      return (
                        i.forEach(function (i) {
                          i.match(/^\d+$/) || o.push(p(t, e, r, n, i, !0));
                        }),
                        o
                      );
                    })(t, r, n, s, a)
                  : a.map(function (e) {
                      return p(t, r, n, s, e, h);
                    })),
                t.seen.pop(),
                (function (t, e, r) {
                  if (
                    t.reduce(function (t, e) {
                      return (
                        e.indexOf("\n") >= 0 && 0,
                        t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                  )
                    return (
                      r[0] +
                      ("" === e ? "" : e + "\n ") +
                      " " +
                      t.join(",\n  ") +
                      " " +
                      r[1]
                    );
                  return r[0] + e + " " + t.join(", ") + " " + r[1];
                })(u, c, M))
            : M[0] + c + M[1]
        );
      }
      function l(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }
      function p(t, e, r, n, i, o) {
        var a, s, f;
        if (
          ((f = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }).get
            ? (s = f.set
                ? t.stylize("[Getter/Setter]", "special")
                : t.stylize("[Getter]", "special"))
            : f.set && (s = t.stylize("[Setter]", "special")),
          R(n, i) || (a = "[" + i + "]"),
          s ||
            (t.seen.indexOf(f.value) < 0
              ? (s = y(r) ? d(t, f.value, null) : d(t, f.value, r - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function (t) {
                        return "  " + t;
                      })
                      .join("\n")
                      .substr(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (t) {
                        return "   " + t;
                      })
                      .join("\n"))
              : (s = t.stylize("[Circular]", "special"))),
          w(a))
        ) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.substr(1, a.length - 2)), (a = t.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = t.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function b(t) {
        return Array.isArray(t);
      }
      function m(t) {
        return "boolean" === typeof t;
      }
      function y(t) {
        return null === t;
      }
      function g(t) {
        return "number" === typeof t;
      }
      function v(t) {
        return "string" === typeof t;
      }
      function w(t) {
        return void 0 === t;
      }
      function _(t) {
        return M(t) && "[object RegExp]" === A(t);
      }
      function M(t) {
        return "object" === typeof t && null !== t;
      }
      function S(t) {
        return M(t) && "[object Date]" === A(t);
      }
      function E(t) {
        return M(t) && ("[object Error]" === A(t) || t instanceof Error);
      }
      function k(t) {
        return "function" === typeof t;
      }
      function A(t) {
        return Object.prototype.toString.call(t);
      }
      function x(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }
      (e.debuglog = function (t) {
        if (((t = t.toUpperCase()), !a[t]))
          if (s.test(t)) {
            var r = n.pid;
            a[t] = function () {
              var n = e.format.apply(e, arguments);
              console.error("%s %d: %s", t, r, n);
            };
          } else a[t] = function () {};
        return a[t];
      }),
        (e.inspect = u),
        (u.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (u.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (e.types = r(7673)),
        (e.isArray = b),
        (e.isBoolean = m),
        (e.isNull = y),
        (e.isNullOrUndefined = function (t) {
          return null == t;
        }),
        (e.isNumber = g),
        (e.isString = v),
        (e.isSymbol = function (t) {
          return "symbol" === typeof t;
        }),
        (e.isUndefined = w),
        (e.isRegExp = _),
        (e.types.isRegExp = _),
        (e.isObject = M),
        (e.isDate = S),
        (e.types.isDate = S),
        (e.isError = E),
        (e.types.isNativeError = E),
        (e.isFunction = k),
        (e.isPrimitive = function (t) {
          return (
            null === t ||
            "boolean" === typeof t ||
            "number" === typeof t ||
            "string" === typeof t ||
            "symbol" === typeof t ||
            "undefined" === typeof t
          );
        }),
        (e.isBuffer = r(6579));
      var I = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function O() {
        var t = new Date(),
          e = [x(t.getHours()), x(t.getMinutes()), x(t.getSeconds())].join(":");
        return [t.getDate(), I[t.getMonth()], e].join(" ");
      }
      function R(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.log = function () {
        console.log("%s - %s", O(), e.format.apply(e, arguments));
      }),
        (e.inherits = r(87)),
        (e._extend = function (t, e) {
          if (!e || !M(e)) return t;
          for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
          return t;
        });
      var B =
        "undefined" !== typeof Symbol
          ? Symbol("util.promisify.custom")
          : void 0;
      function j(t, e) {
        if (!t) {
          var r = new Error("Promise was rejected with a falsy value");
          (r.reason = t), (t = r);
        }
        return e(t);
      }
      (e.promisify = function (t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "original" argument must be of type Function'
          );
        if (B && t[B]) {
          var e;
          if ("function" !== typeof (e = t[B]))
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(e, B, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            e
          );
        }
        function e() {
          for (
            var e,
              r,
              n = new Promise(function (t, n) {
                (e = t), (r = n);
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o]);
          i.push(function (t, n) {
            t ? r(t) : e(n);
          });
          try {
            t.apply(this, i);
          } catch (a) {
            r(a);
          }
          return n;
        }
        return (
          Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
          B &&
            Object.defineProperty(e, B, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(e, i(t))
        );
      }),
        (e.promisify.custom = B),
        (e.callbackify = function (t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          function e() {
            for (var e = [], r = 0; r < arguments.length; r++)
              e.push(arguments[r]);
            var i = e.pop();
            if ("function" !== typeof i)
              throw new TypeError("The last argument must be of type Function");
            var o = this,
              a = function () {
                return i.apply(o, arguments);
              };
            t.apply(this, e).then(
              function (t) {
                n.nextTick(a.bind(null, null, t));
              },
              function (t) {
                n.nextTick(j.bind(null, t, a));
              }
            );
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Object.defineProperties(e, i(t)),
            e
          );
        });
    },
    2505: function (t, e, r) {
      "use strict";
      var n = r(8372),
        i = r(973),
        o = r(2737),
        a = o("Object.prototype.toString"),
        s = r(698)(),
        f = "undefined" === typeof globalThis ? r.g : globalThis,
        u = i(),
        c = o("String.prototype.slice"),
        h = {},
        d = r(8828),
        l = Object.getPrototypeOf;
      s &&
        d &&
        l &&
        n(u, function (t) {
          if ("function" === typeof f[t]) {
            var e = new f[t]();
            if (Symbol.toStringTag in e) {
              var r = l(e),
                n = d(r, Symbol.toStringTag);
              if (!n) {
                var i = l(r);
                n = d(i, Symbol.toStringTag);
              }
              h[t] = n.get;
            }
          }
        });
      var p = r(387);
      t.exports = function (t) {
        return (
          !!p(t) &&
          (s && Symbol.toStringTag in t
            ? (function (t) {
                var e = !1;
                return (
                  n(h, function (r, n) {
                    if (!e)
                      try {
                        var i = r.call(t);
                        i === n && (e = i);
                      } catch (o) {}
                  }),
                  e
                );
              })(t)
            : c(a(t), 8, -1))
        );
      };
    },
    973: function (t, e, r) {
      "use strict";
      var n = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        i = "undefined" === typeof globalThis ? r.g : globalThis;
      t.exports = function () {
        for (var t = [], e = 0; e < n.length; e++)
          "function" === typeof i[n[e]] && (t[t.length] = n[e]);
        return t;
      };
    },
    8828: function (t, e, r) {
      "use strict";
      var n = r(8750)("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (i) {
          n = null;
        }
      t.exports = n;
    },
    1469: function (t, e, r) {
      "use strict";
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    2414: function (t, e, r) {
      "use strict";
      function n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    6952: function (t, e, r) {
      "use strict";
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            f = s.value;
        } catch (u) {
          return void r(u);
        }
        s.done ? e(f) : Promise.resolve(f).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function s(t) {
              n(a, i, o, s, f, "next", t);
            }
            function f(t) {
              n(a, i, o, s, f, "throw", t);
            }
            s(void 0);
          });
        };
      }
      r.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    6772: function (t, e, r) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    6933: function (t, e, r) {
      "use strict";
      function n(t) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    5944: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(9178);
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && (0, n.Z)(t, e);
      }
    },
    7511: function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = r(2414);
      function o(t, e) {
        if (e && ("object" === n(e) || "function" === typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (0, i.Z)(t);
      }
    },
    9178: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (n =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    8566: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(4262);
      function i(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(t);
                  !(a = (n = r.next()).done) &&
                  (o.push(n.value), !e || o.length !== e);
                  a = !0
                );
              } catch (f) {
                (s = !0), (i = f);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return o;
            }
          })(t, e) ||
          (0, n.Z)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    4262: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(1469);
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return (0, n.Z)(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? (0, n.Z)(t, e)
              : void 0
          );
        }
      }
    },
    8264: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = r(6933),
        i = r(9178);
      function o() {
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
        } catch (t) {
          return !1;
        }
      }
      function a(t, e, r) {
        return (a = o()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var o = new (Function.bind.apply(t, n))();
              return r && (0, i.Z)(o, r.prototype), o;
            }).apply(null, arguments);
      }
      function s(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (s = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, o);
          }
          function o() {
            return a(t, arguments, (0, n.Z)(this).constructor);
          }
          return (
            (o.prototype = Object.create(t.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            (0, i.Z)(o, t)
          );
        })(t);
      }
    },
    4636: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
      );
    },
    7536: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
      );
    },
    7330: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
      );
    },
    7064: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
      );
    },
    312: function (t) {
      "use strict";
      t.exports = { i8: "6.5.4" };
    },
    1095: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
      );
    },
  },
]);