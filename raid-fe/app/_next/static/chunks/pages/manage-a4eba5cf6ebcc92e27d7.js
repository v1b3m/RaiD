(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [867],
  {
    825: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return c;
        },
      });
      var t = n(1717),
        i = n(3049),
        o = n(4246);
      function a(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function c(e) {
        var r = e.props,
          n = e.label,
          t = e.onClick,
          a = e.isDisabled,
          c = e.isLoading;
        return (0, o.jsx)(
          i.z,
          s(
            s(
              {
                isDisabled: a,
                onClick: t,
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
            { children: n }
          )
        );
      }
    },
    5612: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return b;
        },
      });
      var t = n(2429),
        i = n(5774),
        o = n(5623),
        a = n(4246);
      function s() {
        return (0, a.jsx)(i.M, {
          bg: "brand.teaGreen",
          py: "1rem",
          children: (0, a.jsx)(o.x, {
            fontFamily: "Nunito",
            fontWeight: "500",
            textColor: "brand.sonicSilver",
            textAlign: "center",
            children: "Copyright \xa9 2021 RaiD",
          }),
        });
      }
      var c = n(1717),
        u = n(7830),
        l = n(5075),
        d = n(9894),
        f = n(8539);
      function p(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(n), !0).forEach(function (r) {
                (0, c.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function m(e) {
        var r = e.text,
          n = e.props,
          t = e.uri;
        return (0, a.jsx)(d.default, {
          href: t,
          passHref: !0,
          children: (0, a.jsx)("a", {
            children: (0, a.jsx)(
              o.x,
              h(
                h(
                  {
                    mx: "2rem",
                    cursor: "pointer",
                    _hover: { textColor: "brand.maximumBlue" },
                  },
                  n
                ),
                {},
                { children: r }
              )
            ),
          }),
        });
      }
      function x(e) {
        var r = e.props;
        return (0, a.jsx)(
          u.xu,
          h(
            h({}, r),
            {},
            {
              children: (0, a.jsx)(l.UQ, {
                allowToggle: !0,
                children: (0, a.jsxs)(l.Qd, {
                  borderBottom: "0",
                  borderTopColor: "brand.raisinBlack",
                  children: [
                    (0, a.jsxs)(t.k, {
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
                        (0, a.jsx)(o.x, {
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
                        (0, a.jsxs)(t.k, {
                          align: "center",
                          fontWeight: "400",
                          fontSize: "1.1rem",
                          display: { base: "none", md: "flex" },
                          children: [
                            (0, a.jsx)(m, { text: "Help", uri: "/help" }),
                            (0, a.jsx)(m, {
                              text: "Contact Us",
                              uri: "mailto:vibenjamin6@gmail.com",
                            }),
                          ],
                        }),
                        (0, a.jsx)(u.xu, {
                          transition: "background-color 500ms linear",
                          bg: "brand.jet",
                          borderRadius: "10",
                          _hover: { bg: "none" },
                          cursor: "pointer",
                          display: { base: "block", md: "none" },
                          children: (0, a.jsx)(l.KF, {
                            p: "1",
                            children: (0, a.jsx)(f.fdF, { size: "40" }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(l.Hk, {
                      pb: 4,
                      display: { base: "block", md: "none" },
                      children: [
                        (0, a.jsx)(m, {
                          text: "Help",
                          uri: "/help",
                          props: { my: "0.5rem" },
                        }),
                        (0, a.jsx)(m, {
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
      function b(e) {
        var r = e.children,
          n = e.headerProps;
        return (0, a.jsxs)(t.k, {
          bg: "brand.raisinBlack",
          height: "100%",
          minH: "100vh",
          textColor: "brand.cultured",
          fontFamily: "Nunito",
          flexDir: "column",
          children: [(0, a.jsx)(x, { props: n }), r, (0, a.jsx)(s, {})],
        });
      }
    },
    5951: function (e, r, n) {
      "use strict";
      var t = n(1717),
        i = n(8566),
        o = n(2416),
        a = n(7830),
        s = n(5623),
        c = n(3675),
        u = n(4368),
        l = n(5984),
        d = n(4566),
        f = n(4246);
      function p(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
        var r = e.label,
          n = e.LeftIcon,
          t = e.isPassword,
          p = e.type,
          m = e.onChange,
          x = e.isInvalid,
          b = e.invalidText,
          g = (e.placeholder, e.value),
          j = (0, o.k)(),
          v = (0, i.Z)(j, 2),
          y = v[0],
          O = v[1];
        return (0, f.jsxs)(a.xu, {
          mb: { lg: "0.5rem", xl: "1rem" },
          children: [
            (0, f.jsx)(s.x, { mb: "0.5rem", children: r }),
            (0, f.jsxs)(c.B, {
              children: [
                n &&
                  (0, f.jsx)(u.Ui, {
                    bg: "brand.spaceCadet",
                    children: (0, f.jsx)(n, { size: 24 }),
                  }),
                (0, f.jsx)(
                  l.I,
                  h(
                    h({}, g && { value: g }),
                    {},
                    {
                      type: t && !y ? "password" : p,
                      onChange: m,
                      isInvalid: x,
                    }
                  )
                ),
                t &&
                  (0, f.jsxs)(u.xW, {
                    bg: "brand.spaceCadet",
                    children: [
                      y &&
                        (0, f.jsx)(a.xu, {
                          onClick: O.off,
                          children: (0, f.jsx)(d.t2l, { size: 24 }),
                        }),
                      !y &&
                        (0, f.jsx)(a.xu, {
                          onClick: O.on,
                          children: (0, f.jsx)(d.wqE, { size: 24 }),
                        }),
                    ],
                  }),
              ],
            }),
            x &&
              (0, f.jsx)(s.x, {
                color: "red.500",
                fontSize: "sm",
                isTruncated: !0,
                maxW: "460px",
                children: b,
              }),
          ],
        });
      };
    },
    6187: function (e, r, n) {
      "use strict";
      n.d(r, {
        hw: function () {
          return i;
        },
        Zm: function () {
          return o;
        },
        d3: function () {
          return a;
        },
        yp: function () {
          return s;
        },
      });
      var t = n(1497),
        i = "debug",
        o = "v1b3m",
        a = "dvbo6bvu",
        s = (new (n.n(t)())().secretSync(), "http://127.0.0.1:8000");
    },
    535: function (e, r, n) {
      "use strict";
      n.d(r, {
        o: function () {
          return d;
        },
      });
      var t = n(6772),
        i = n(2414),
        o = n(5944),
        a = n(7511),
        s = n(6933),
        c = n(8264),
        u = n(1717);
      function l(e) {
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
          var n,
            t = (0, s.Z)(e);
          if (r) {
            var i = (0, s.Z)(this).constructor;
            n = Reflect.construct(t, arguments, i);
          } else n = t.apply(this, arguments);
          return (0, a.Z)(this, n);
        };
      }
      var d = (function (e) {
        (0, o.Z)(n, e);
        var r = l(n);
        function n(e) {
          var o,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return (
            (0, t.Z)(this, n),
            (o = r.call(this)),
            (0, u.Z)((0, i.Z)(o), "status", void 0),
            (0, u.Z)((0, i.Z)(o), "statusText", ""),
            (0, u.Z)((0, i.Z)(o), "message", void 0),
            (o.name = "HTTP Error"),
            (o.status = a),
            (o.statusText = s),
            (o.message = e),
            Object.setPrototypeOf((0, i.Z)(o), n.prototype),
            o
          );
        }
        return n;
      })((0, c.Z)(Error));
    },
    5814: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return Xe;
          },
        });
      var t = n(8566),
        i = n(2416),
        o = n(3928),
        a = n(7830),
        s = n(5774),
        c = n(1532),
        u = n(6677),
        l = n(7378),
        d = n(763),
        f = n(4128),
        p = n(5612),
        h = n(6952),
        m = n(9268),
        x = n(1717),
        b = n(8742),
        g = n.n(b),
        j = n(829),
        v = n(5623),
        y = n(3108),
        O = n(9957),
        w = n(8784),
        k = n.n(w),
        P = n(8617),
        C = n(9887),
        S = n(6187),
        D = n(535),
        Z = n(4582),
        z = n(4518),
        E = (function () {
          var e = (0, h.Z)(
            g().mark(function e(r, n, t) {
              var i, o, a, s, c, u, l, d;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (i = []),
                        (o = new FormData()),
                        (a = Object.keys(r)),
                        (s = 0),
                        (c = a);
                    case 4:
                      if (!(s < c.length)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (u = c[s]),
                        o.append("file", r[Number(u)]),
                        o.append("upload_preset", t),
                        o.append("folder", "raid-ai"),
                        (e.next = 11),
                        fetch(
                          "https://api.cloudinary.com/v1_1/".concat(
                            n,
                            "/image/upload"
                          ),
                          { method: "post", body: o }
                        )
                      );
                    case 11:
                      return (l = e.sent), (e.next = 14), l.json();
                    case 14:
                      (d = e.sent), i.push(d.secure_url);
                    case 16:
                      s++, (e.next = 4);
                      break;
                    case 19:
                      return e.abrupt("return", i);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (r, n, t) {
            return e.apply(this, arguments);
          };
        })(),
        I = (function () {
          var e = (0, h.Z)(
            g().mark(function e(r) {
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e, n) {
                          var t = new FileReader();
                          t.readAsDataURL(r),
                            (t.onload = function () {
                              return e(t.result);
                            }),
                            (t.onerror = function (e) {
                              return n(e);
                            });
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        T = n(825),
        R = n(9707),
        L = n(4246);
      function _(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function F(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? _(Object(n), !0).forEach(function (r) {
                (0, x.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      var A = function (e) {
        var r = e.setFiles,
          n = (0, l.useCallback)(function (e) {
            r(e);
          }, []),
          t = (0, R.uI)({ onDrop: n }),
          i = t.getRootProps,
          o = t.getInputProps,
          c = t.isDragActive;
        return (0, L.jsx)(
          a.xu,
          F(
            F({}, i()),
            {},
            {
              cursor: "default",
              height: { base: "10rem", md: "10rem", lg: "15rem" },
              width: "100%",
              bg: "brand.jet",
              p: "1rem",
              children: (0, L.jsxs)(s.M, {
                border: "1px",
                height: "100%",
                borderStyle: "dashed",
                children: [
                  (0, L.jsx)("input", F({}, o())),
                  c
                    ? (0, L.jsx)("p", { children: "Drop the files here ..." })
                    : (0, L.jsx)("p", {
                        children:
                          "Drag 'n' drop some files here, or click to select files",
                      }),
                ],
              }),
            }
          )
        );
      };
      function H(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function N(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? H(Object(n), !0).forEach(function (r) {
                (0, x.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      var W = (0, P.default)(
          function () {
            return n.e(507).then(n.t.bind(n, 7507, 23));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [7507];
              },
              modules: [
                "../components/Manage/Analyze/index.tsx -> react-viewer",
              ],
            },
          }
        ),
        B = function (e) {
          var r = e.setActivePage,
            n = (0, Z.LI)(),
            t = (0, d.VO)().data,
            i = {
              files: [],
              base64: [],
              isLoading: !1,
              description: "",
              id: (0, C.Z)(),
              activeImage: "",
              error: "",
            },
            s = (0, l.useReducer)(function (e, r) {
              return N(N({}, e), r);
            }, i),
            c = s[0],
            u = s[1],
            f = (0, j.q)(),
            p = f.isOpen,
            b = f.onOpen,
            w = f.onClose,
            P = (function () {
              var e = (0, h.Z)(
                g().mark(function e() {
                  var i, o, a, s, l;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (u({ isLoading: !0 }),
                              u({ error: "" }),
                              (e.prev = 2),
                              c.files.length)
                            ) {
                              e.next = 5;
                              break;
                            }
                            throw new Error("Please upload at least one image");
                          case 5:
                            if (c.description) {
                              e.next = 7;
                              break;
                            }
                            throw new Error("Please enter a description");
                          case 7:
                            return (e.next = 9), E(c.files, S.Zm, S.d3);
                          case 9:
                            return (
                              (i = e.sent),
                              (o = {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(
                                  null === t || void 0 === t ? void 0 : t.token
                                ),
                              }),
                              (a = JSON.stringify({
                                description: c.description,
                                images: i,
                                uuid: c.id,
                              })),
                              (e.next = 14),
                              fetch("".concat(S.yp, "/uploads/"), {
                                body: a,
                                method: "POST",
                                headers: o,
                              })
                            );
                          case 14:
                            if (
                              ((s = e.sent), ![400, 500].includes(s.status))
                            ) {
                              e.next = 22;
                              break;
                            }
                            return (e.t0 = D.o), (e.next = 19), s.text();
                          case 19:
                            throw (
                              ((e.t1 = e.sent),
                              (e.t2 = s.status),
                              new e.t0(e.t1, e.t2))
                            );
                          case 22:
                            return (e.next = 24), s.json();
                          case 24:
                            n({
                              content: {
                                title:
                                  "Successfully uploaded images \ud83d\ude80",
                                summary:
                                  "Images successfully uploaded for analysis",
                                type: z.k.success,
                              },
                            }),
                              u({ isLoading: !1 }),
                              r("results"),
                              (e.next = 35);
                            break;
                          case 29:
                            (e.prev = 29),
                              (e.t3 = e.catch(2)),
                              (l = e.t3.message).includes(
                                'description":["This field may not be blank.'
                              ) && (l = "Please enter a description"),
                              l.includes('"images":["empty values ') &&
                                (l = "Please upload at least one image"),
                              n({
                                content: {
                                  title: "Validation Error \ud83d\ude22",
                                  summary: l,
                                  type: z.k.error,
                                },
                              });
                          case 35:
                            return (
                              (e.prev = 35), u({ isLoading: !1 }), e.finish(35)
                            );
                          case 38:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 29, 35, 38]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, l.useEffect)(
            function () {
              (function () {
                var e = (0, h.Z)(
                  g().mark(function e() {
                    var r;
                    return g().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.all(
                                c.files.map(function (e) {
                                  return I(e);
                                })
                              )
                            );
                          case 2:
                            (r = e.sent), u({ base64: r });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [c.files]
          );
          var R;
          return (0, L.jsxs)(a.xu, {
            fontSize: { lg: "1.5rem" },
            px: { xl: "2.5rem" },
            children: [
              c.error &&
                (0, L.jsx)(v.x, {
                  color: "red.500",
                  fontSize: "sm",
                  maxW: "460px",
                  children: c.error,
                }),
              (0, L.jsxs)(o.r, {
                my: "1rem",
                templateColumns: { base: "1fr 4fr" },
                children: [
                  (0, L.jsx)(v.x, { fontWeight: "bold", children: "ID:" }),
                  (0, L.jsx)(v.x, { children: c.id }),
                ],
              }),
              (0, L.jsxs)(o.r, {
                my: "1rem",
                templateColumns: {
                  sm: "1fr 4fr",
                  md: "1fr 4fr",
                  lg: "1fr 4fr",
                },
                children: [
                  (0, L.jsx)(v.x, {
                    fontWeight: "bold",
                    children: "Description:",
                  }),
                  (0, L.jsx)(y.g, {
                    onChange:
                      ((R = "description"),
                      function (e) {
                        u((0, x.Z)({}, R, e.target.value));
                      }),
                    placeholder:
                      "Enter any information you want to associate with the radiograph(s)",
                  }),
                ],
              }),
              (0, L.jsxs)(o.r, {
                my: "1rem",
                templateColumns: {
                  sm: "1fr 4fr",
                  md: "1fr 4fr",
                  lg: "1fr 4fr",
                },
                children: [
                  (0, L.jsx)(v.x, {
                    fontWeight: "bold",
                    children: "Radiograph(s):",
                  }),
                  (0, L.jsx)(A, {
                    setFiles: function (e) {
                      return u({
                        files: k().uniqBy(
                          [].concat((0, m.Z)(e), (0, m.Z)(c.files)),
                          "name"
                        ),
                      });
                    },
                  }),
                ],
              }),
              c.base64.length > 0 &&
                (0, L.jsxs)(o.r, {
                  my: "1rem",
                  templateColumns: {
                    sm: "1fr 4fr",
                    md: "1fr 4fr",
                    lg: "1fr 4fr",
                  },
                  children: [
                    (0, L.jsx)(v.x, {
                      fontWeight: "bold",
                      children: "Preview(s):",
                    }),
                    (0, L.jsx)(o.r, {
                      templateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "8px",
                      children: c.base64.map(function (e) {
                        return (0, L.jsx)(
                          O.E,
                          {
                            cursor: "pointer",
                            src: e,
                            w: "250px",
                            h: "300px",
                            _hover: { opacity: 0.5 },
                            onClick: function () {
                              return u({ activeImage: e }), void b();
                            },
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
              (0, L.jsxs)(o.r, {
                my: "2rem",
                templateColumns: { md: "1fr 4fr", lg: "1fr 4fr" },
                children: [
                  (0, L.jsx)(v.x, {}),
                  (0, L.jsx)(T.Z, {
                    onClick: P,
                    label: "SUBMIT",
                    props: { w: { lg: "20rem" } },
                    isLoading: c.isLoading,
                  }),
                ],
              }),
              (0, L.jsx)(W, {
                visible: p,
                onClose: w,
                images: c.base64.map(function (e) {
                  return { src: e, alt: "" };
                }),
              }),
            ],
          });
        },
        U = n(8539),
        M = n(866),
        G = n(4566),
        V = n(2429);
      function Y() {
        var e = (0, l.useState)({ width: 0, height: 0 }),
          r = e[0],
          n = e[1];
        return (
          (0, l.useEffect)(function () {
            function e() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          r
        );
      }
      function q(e) {
        var r = e.label,
          n = e.active,
          t = e.icon,
          i = e.onClick,
          o = Y().width < 640 && !n;
        return (0, L.jsxs)(V.k, {
          justifyContent: { base: "center", lg: "start" },
          flexGrow: 1,
          h: "2.5rem",
          bg: n ? "brand.jet" : "none",
          pl: { lg: "2rem" },
          align: "center",
          cursor: "pointer",
          fontSize: "0.875rem",
          lineHeight: "1.375rem",
          _hover: { bg: "brand.jet" },
          color: n ? "white" : "brand.indepedence",
          onClick: i,
          children: [t, !o && (0, L.jsx)(v.x, { pl: "3px", children: r })],
        });
      }
      function J(e) {
        var r = e.activePage,
          n = e.setActivePage;
        return (0, L.jsx)(a.xu, {
          borderTopWidth: "3px",
          borderColor: "brand.charcoal",
          width: "100%",
          children: (0, L.jsxs)(o.r, {
            alignItems: "stretch",
            display: ["flex", "grid"],
            templateColumns: { sm: "repeat(3, 1fr)", xl: "1fr" },
            children: [
              (0, L.jsx)(q, {
                label: "Analyze",
                active: "analyze" === r,
                icon: (0, L.jsx)(U.UPo, { size: 20 }),
                onClick: function () {
                  return n("analyze");
                },
              }),
              (0, L.jsx)(q, {
                label: "My Results",
                active: "results" === r,
                icon: (0, L.jsx)(M.Ukz, { size: 20 }),
                onClick: function () {
                  return n("results");
                },
              }),
              (0, L.jsx)(q, {
                label: "Account",
                active: "account" === r,
                icon: (0, L.jsx)(G.sdR, { size: 20 }),
                onClick: function () {
                  return n("account");
                },
              }),
            ],
          }),
        });
      }
      var X = n(4357),
        K = n(6894),
        Q = n(6321),
        $ = n.n(Q),
        ee = {
          level: S.hw,
          formatters: {
            level: function (e) {
              return { level: e };
            },
          },
        },
        re = $()(ee);
      function ne() {
        return (function (e) {
          return (0, l.useCallback)(
            function (r) {
              var n = "".concat(r.message || r.toString()),
                t = r.message.toLowerCase();
              return t.includes("magic")
                ? re.error(n)
                : "undefined" === t
                ? re.warn(n)
                : (re.error(n),
                  void e({
                    content: {
                      summary: r.message || r.toString(),
                      title: "Error",
                      type: z.k.error,
                    },
                  }));
            },
            [e]
          );
        })((0, Z.LI)());
      }
      var te = (function () {
        var e = (0, h.Z)(
          g().mark(function e(r, n, t) {
            var i, o;
            return g().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch("/api/users/".concat(r, "/"), {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer ".concat(n),
                        },
                        body: JSON.stringify(t),
                      })
                    );
                  case 2:
                    return (i = e.sent), (e.next = 5), i.json();
                  case 5:
                    return (o = e.sent), e.abrupt("return", o);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (r, n, t) {
          return e.apply(this, arguments);
        };
      })();
      function ie(e) {
        for (var r in e)
          (null !== e[r] && void 0 !== e[r] && "" !== e[r]) || delete e[r];
        return e;
      }
      var oe = n(5951),
        ae = n(6336),
        se = n(3049);
      function ce(e) {
        var r = e.isOpen,
          n = e.onClose,
          t = e.children,
          i = e.isLoading,
          o = e.handleSubmit;
        return (0, L.jsxs)(ae.u_, {
          isOpen: r,
          onClose: n,
          isCentered: !0,
          size: "lg",
          variant: "wide",
          children: [
            (0, L.jsx)(ae.ZA, {}),
            (0, L.jsxs)(ae.hz, {
              bg: "brand.raisinBlack",
              borderWidth: "3px",
              borderColor: "brand.jet",
              borderRadius: "1.25rem",
              color: "white",
              children: [
                (0, L.jsx)(ae.xB, { children: "Edit User Info" }),
                (0, L.jsx)(ae.ol, {}),
                (0, L.jsx)(ae.fe, { children: t }),
                (0, L.jsx)(ae.mz, {
                  children: (0, L.jsx)(se.z, {
                    colorScheme: "blue",
                    mr: 3,
                    variant: "buttonGradient",
                    isLoading: i,
                    onClick: o,
                    children: "Submit",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function ue(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function le(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ue(Object(n), !0).forEach(function (r) {
                (0, x.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function de(e) {
        var r = e.isOpen,
          n = e.onClose,
          t = e.user,
          i = e.token,
          o = (0, l.useRef)(),
          a = (0, l.useState)(t),
          s = a[0],
          c = a[1],
          u = (0, l.useState)([]),
          d = (u[0], u[1]),
          p = (0, l.useState)(!1),
          m = p[0],
          b = p[1],
          j = ne(),
          y = (0, f.UY)(),
          O = function (e) {
            return function (r) {
              c(le(le({}, s), {}, (0, x.Z)({}, e, r.target.value)));
            };
          },
          w = (function () {
            var e = (0, h.Z)(
              g().mark(function e() {
                var r, t, a, c, u;
                return g().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            null !== (r = o.current) &&
                              void 0 !== r &&
                              r.checkValidity())
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            null === (t = o.current) || void 0 === t
                              ? void 0
                              : t.reportValidity()
                          );
                        case 3:
                          return (
                            b(!0), (a = ie(s)), (e.next = 7), te(s.id, i, a)
                          );
                        case 7:
                          (c = e.sent), (u = c.data), y(u), n(), (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), j(e.t0);
                        case 16:
                          return (e.prev = 16), b(!1), e.finish(16);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13, 16, 19]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, L.jsx)(ce, {
          isOpen: r,
          onClose: n,
          isLoading: m,
          handleSubmit: w,
          children: (0, L.jsxs)("form", {
            ref: o,
            children: [
              (0, L.jsx)(oe.Z, {
                label: "First name",
                placeholder: "Eg. John",
                type: "text",
                value: s.first_name,
                onChange: O("first_name"),
                invalidText: "First name should be greater than 3 characters",
              }),
              (0, L.jsx)(oe.Z, {
                label: "Last name",
                placeholder: "Eg. Doe",
                type: "text",
                value: s.last_name,
                onChange: O("last_name"),
                invalidText: "Last name should be greater than 3 characters",
              }),
              (0, L.jsx)(oe.Z, {
                label: "Email address",
                placeholder: "e.g name@user.com",
                type: "email",
                value: s.email,
                onChange: O("email"),
                invalidText: "Enter valid email address",
              }),
              (0, L.jsx)(v.x, { mb: "0.5rem", children: "Avatar" }),
              (0, L.jsx)(A, { setFiles: d }),
            ],
          }),
        });
      }
      function fe(e) {
        var r = e.left,
          n = e.right;
        return (0, L.jsxs)(V.k, {
          justify: "space-between",
          maxW: "37.5rem",
          fontWeight: "400",
          fontSize: "0.875rem",
          lineHeight: "1.375rem",
          mb: "1.75rem",
          children: [
            (0, L.jsx)(a.xu, {
              textColor: "brand.battleshipGray",
              children: r,
            }),
            (0, L.jsx)(a.xu, { textAlign: "right", children: n }),
          ],
        });
      }
      function pe(e) {
        var r = e.user,
          n = e.token,
          t = r.first_name,
          i = r.last_name,
          o = (r.id, r.email),
          s = (0, j.q)(),
          c = s.isOpen,
          u = s.onOpen,
          l = s.onClose;
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsxs)(a.xu, {
              w: "100%",
              p: { base: "1.2rem", sm: "2rem" },
              children: [
                (0, L.jsx)(V.k, {
                  justify: "flex-end",
                  align: "center",
                  mb: "1.875rem",
                  children: (0, L.jsx)(v.x, {
                    onClick: u,
                    _hover: { textDecor: "underline" },
                    cursor: "pointer",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    lineHeight: "1.375rem",
                    textColor: "brand.azure",
                    children: "Edit",
                  }),
                }),
                (0, L.jsx)(K.qE, {
                  size: "2xl",
                  name: "Segun Adebayo",
                  src: "https://bit.ly/sage-adebayo",
                  mb: "2rem",
                  children: (0, L.jsx)(K.MX, {
                    boxSize: "1.25em",
                    bg: "green.500",
                  }),
                }),
                (0, L.jsx)(fe, { left: "First name", right: t }),
                (0, L.jsx)(fe, { left: "Last name", right: i }),
                (0, L.jsx)(fe, { left: "Email", right: o }),
              ],
            }),
            (0, L.jsx)(de, { onClose: l, isOpen: c, user: r, token: n }),
          ],
        });
      }
      var he = function (e) {
          var r = e.user,
            n = e.token,
            t = (0, Z.LI)(),
            i = (0, X.UJ)();
          return (0, L.jsxs)(a.xu, {
            height: "100%",
            p: { base: "1.2rem", sm: "2rem" },
            children: [
              (0, L.jsx)(v.x, { fontSize: "1.5rem", children: "User Info" }),
              (0, L.jsx)(pe, { user: r, token: n }),
              (0, L.jsx)(a.xu, {
                p: { base: "1.2rem", sm: "2rem" },
                children: (0, L.jsx)(T.Z, {
                  label: "Sign Out",
                  onClick: function () {
                    t({
                      content: {
                        type: z.k.info,
                        title: "Logged out!",
                        summary: "Come back soon \ud83d\ude22",
                      },
                    }),
                      i();
                  },
                }),
              }),
            ],
          });
        },
        me = n(7693),
        xe = n.n(me);
      function be(e, r, n) {
        return e.slice(r, n);
      }
      var ge = n(9580),
        je = n.n(ge),
        ve = n(8266),
        ye = n.n(ve),
        Oe = n(6487),
        we = n.n(Oe);
      xe().extend(je()), xe().extend(ye()), xe().extend(we());
      xe()().weekday(-7);
      var ke = xe()().startOf("week"),
        Pe = xe()().endOf("week"),
        Ce =
          (xe()().weekday(7),
          xe()().startOf("month"),
          xe()().endOf("month"),
          xe()().startOf("year")),
        Se = xe()().endOf("year"),
        De = xe()().startOf("quarter"),
        Ze = xe()().endOf("quarter"),
        ze = [ke, De, Ce],
        Ee = [Pe, Ze, Se],
        Ie = function (e) {
          return e[Math.floor(Math.random() * e.length)];
        },
        Te = [
          "obdormition",
          "paresthesia",
          "Sphenopalatine ganglioneuralgia",
          "fasciculation",
          "heloma molle",
          "heloma durum",
          "transient lingual papillitis",
          "onychocryptosis",
          "unguis incarnatus",
          "Aphthous stomatitis",
          "morsicatio buccarum",
          "transient diaphragmatic spasm",
          "synchronous diaphragmatic flutter",
          "sternutate",
          "muscae volitantes",
          "nocturnal enuresis",
          "diurnal enuresis",
          "vasovagal syncope",
          "orthostatic hypotension",
          "horripilation",
          "gustatory rhinitis",
          "crepitus",
          "medial tibial stress syndrome",
          "veisalgia",
        ],
        Re = new Array(20).fill(null).map(function (e) {
          return {
            id: (0, C.Z)(),
            description: Ie(Te),
            date:
              ((r = Ie(ze).toDate()),
              (n = Ie(Ee).toDate()),
              new Date(
                r.getTime() + Math.random() * (n.getTime() - r.getTime())
              )),
          };
          var r, n;
        }),
        Le = n(9670),
        _e = n(378),
        Fe = n(407);
      function Ae(e, r, n) {
        return (0, Fe.Lu)(e, n, {
          keys: [
            function (e) {
              return e.values[r];
            },
          ],
        });
      }
      Ae.autoRemove = function (e) {
        return !e;
      };
      var He = n(3675),
        Ne = n(5984),
        We = n(4368),
        Be = n(7228);
      function Ue(e) {
        var r = e.preGlobalFilteredRows,
          n = e.globalFilter,
          t = e.setGlobalFilter,
          i = r.length,
          o = (0, l.useState)(n),
          a = o[0],
          s = o[1],
          c = (0, _e.useAsyncDebounce)(function (e) {
            t(e || void 0);
          }, 200);
        return (0, L.jsxs)(V.k, {
          alignItems: "center",
          mt: { base: "1rem", lg: 0 },
          children: [
            (0, L.jsxs)(v.x, {
              fontSize: { lg: "1.3rem" },
              mr: "1rem",
              children: ["Search:", " "],
            }),
            (0, L.jsxs)(He.B, {
              maxW: "20rem",
              children: [
                (0, L.jsx)(Ne.I, {
                  value: a || "",
                  onChange: function (e) {
                    s(e.target.value), c(e.target.value);
                  },
                  placeholder: "".concat(i, " records..."),
                  fontSize: "1.1rem",
                }),
                (0, L.jsx)(We.xW, {
                  bg: "brand.raisinBlack",
                  cursor: "pointer",
                  children: (0, L.jsx)(Be.U41, { size: 20 }),
                }),
              ],
            }),
          ],
        });
      }
      var Me = n(8379),
        Ge = function (e) {
          var r = e.canNextPage,
            n = e.canPreviousPage,
            t = e.gotoPage,
            i = e.previousPage,
            o = e.nextPage,
            c = e.pageCount,
            u = e.pageOptions,
            l = e.pageIndex,
            d = e.pageSize,
            f = e.setPageSize;
          return (0, L.jsxs)(s.M, {
            flexDir: { base: "column", md: "row" },
            children: [
              (0, L.jsxs)(V.k, {
                children: [
                  (0, L.jsx)(T.Z, {
                    label: "<<",
                    onClick: function () {
                      return t(0);
                    },
                    isDisabled: !n,
                    props: { mr: "1rem" },
                  }),
                  (0, L.jsx)(T.Z, {
                    label: "<",
                    onClick: i,
                    isDisabled: !n,
                    props: { mr: "1rem" },
                  }),
                  (0, L.jsx)(T.Z, {
                    label: ">",
                    onClick: o,
                    isDisabled: !r,
                    props: { mr: "1rem" },
                  }),
                  (0, L.jsx)(T.Z, {
                    label: ">>",
                    onClick: function () {
                      return t(c - 1);
                    },
                    isDisabled: !r,
                    props: { mr: "1rem" },
                  }),
                ],
              }),
              (0, L.jsxs)(a.xu, {
                mr: "1rem",
                my: { base: "1rem", md: 0 },
                children: ["Page ", l + 1, " of ", u.length],
              }),
              (0, L.jsxs)(a.xu, {
                children: [
                  "| Go to page:",
                  " ",
                  (0, L.jsx)(Ne.I, {
                    type: "number",
                    defaultValue: l + 1,
                    onChange: function (e) {
                      var r = e.target.value ? Number(e.target.value) - 1 : 0;
                      t(r);
                    },
                    width: { base: "50px", md: "60px" },
                    mr: "1rem",
                  }),
                ],
              }),
              (0, L.jsx)(a.xu, {
                my: "1.5rem",
                children: (0, L.jsx)(Me.Ph, {
                  value: d,
                  onChange: function (e) {
                    return f(Number(e.target.value));
                  },
                  bg: "brand.raisinBlack",
                  children: [10, 20, 30, 40, 50].map(function (e) {
                    return (0,
                    L.jsxs)("option", { value: e, style: { background: "#33333E" }, children: ["Show ", e] }, e);
                  }),
                }),
              }),
            ],
          });
        },
        Ve = function (e) {
          var r = e.columns,
            n = e.data,
            t = e.fetchData,
            i = e.pageCount,
            o =
              (e.loading,
              (0, l.useMemo)(function () {
                return { fuzzyText: Ae };
              }, [])),
            s = (0, _e.useTable)(
              {
                columns: r,
                data: n,
                initialState: { pageIndex: 0 },
                manualPagination: !0,
                pageCount: i,
                filterTypes: o,
              },
              _e.useGlobalFilter,
              _e.usePagination
            ),
            c = Y().width,
            u = s.headerGroups,
            d = s.rows,
            f = s.prepareRow,
            p = s.canPreviousPage,
            h = s.canNextPage,
            m = s.pageOptions,
            x = s.pageCount,
            b = s.gotoPage,
            g = s.nextPage,
            j = s.previousPage,
            v = s.setPageSize,
            y = s.preGlobalFilteredRows,
            O = s.setGlobalFilter,
            w = s.state,
            k = w.pageIndex,
            P = w.pageSize,
            C = w.globalFilter;
          (0, l.useEffect)(
            function () {
              t({ pageSize: P, pageIndex: k });
            },
            [t, k, P]
          );
          var S = c < 768,
            D = (0, l.useCallback)(
              function (e) {
                return S
                  ? e.filter(function (e) {
                      return "date" !== e.id;
                    })
                  : e;
              },
              [S]
            ),
            Z = (0, l.useCallback)(
              function (e) {
                return S
                  ? e.filter(function (e) {
                      return "date" !== e.column.id;
                    })
                  : e;
              },
              [S]
            );
          return (0, L.jsxs)(a.xu, {
            p: { lg: "2rem" },
            children: [
              (0, L.jsx)(Ue, {
                preGlobalFilteredRows: y,
                globalFilter: C,
                setGlobalFilter: O,
              }),
              (0, L.jsxs)(Le.iA, {
                variant: "striped",
                colorScheme: "whiteAlpha",
                children: [
                  (0, L.jsx)(Le.Rn, {
                    children: "ALL THE RESULTS YOU'VE ANALYZED SO FAR",
                  }),
                  (0, L.jsx)(Le.hr, {
                    children: u.map(function (e, r) {
                      return (0, L.jsx)(
                        Le.Tr,
                        {
                          children: D(e.headers).map(function (e) {
                            return (0,
                            L.jsx)(Le.Th, { children: e.render("Header") }, e.getHeaderProps().key);
                          }),
                        },
                        r
                      );
                    }),
                  }),
                  (0, L.jsx)(Le.p3, {
                    children: d.map(function (e) {
                      return (
                        f(e),
                        (0, L.jsx)(
                          Le.Tr,
                          {
                            children: Z(e.cells).map(function (e) {
                              return (0,
                              L.jsx)(Le.Td, { children: e.render("Cell") }, e.getCellProps().key);
                            }),
                          },
                          e.getRowProps().key
                        )
                      );
                    }),
                  }),
                ],
              }),
              (0, L.jsx)(Ge, {
                canPreviousPage: p,
                canNextPage: h,
                gotoPage: b,
                previousPage: j,
                nextPage: g,
                pageCount: x,
                pageIndex: k,
                pageOptions: m,
                pageSize: P,
                setPageSize: v,
              }),
            ],
          });
        },
        Ye = function () {
          var e = (0, l.useState)(0),
            r = e[0],
            n = e[1],
            o = (0, l.useState)(be(Re, r, r + 10)),
            a = o[0],
            s = o[1],
            c = (0, i.k)(!1),
            u = (0, t.Z)(c, 2),
            d = u[0],
            f = u[1],
            p = (0, l.useRef)(0),
            h = Y().width,
            m =
              ((0, l.useCallback)(
                function () {
                  return h < 480;
                },
                [h]
              ),
              (0, l.useMemo)(function () {
                return [
                  {
                    Header: "ID",
                    accessor: "id",
                    Cell: function (e) {
                      return e.value.slice(0, 8);
                    },
                  },
                  { Header: "Description", accessor: "description" },
                  {
                    Header: "Date",
                    accessor: "date",
                    Cell: function (e) {
                      var r = e.value;
                      return xe()(r).format("ddd Do MMM YYYY");
                    },
                  },
                ];
              }, [])),
            x = (0, l.useCallback)(function (e) {
              var r = e.pageSize,
                t = e.pageIndex,
                i = ++p.current;
              f.on(),
                setTimeout(function () {
                  if (i === p.current) {
                    var e = r * t;
                    s(be(Re, e, e + r)), n(Math.ceil(Re.length / r)), f.off();
                  }
                }, 1e3);
            }, []);
          return (0, L.jsx)(Ve, {
            columns: m,
            data: a,
            fetchData: x,
            pageCount: r,
            loading: d,
          });
        };
      function qe() {
        var e = (0, l.useState)("analyze"),
          r = e[0],
          n = e[1],
          h = (0, i.k)(),
          m = (0, t.Z)(h, 2),
          x = m[0],
          b = (m[1], (0, u.useRouter)().query),
          g = (0, f.Ve)(),
          j = (0, d.VO)();
        return (
          (0, l.useEffect)(
            function () {
              if (
                ["account", "analyze", "results"].includes(
                  null === b || void 0 === b ? void 0 : b.section
                )
              )
                return n(null === b || void 0 === b ? void 0 : b.section);
            },
            [null === b || void 0 === b ? void 0 : b.section]
          ),
          (0, L.jsx)(p.Z, {
            children: (0, L.jsxs)(o.r, {
              templateColumns: { xl: "1fr 4.48fr" },
              px: { base: "1rem", md: "2rem", lg: "4rem", xl: "7.5rem" },
              fontFamily: "Nunito",
              children: [
                (0, L.jsx)(J, { activePage: r, setActivePage: n }),
                (0, L.jsxs)(a.xu, {
                  borderLeftWidth: { xl: "3px" },
                  borderTopWidth: "3px",
                  borderColor: "brand.charcoal",
                  minH: "83vh",
                  children: [
                    x &&
                      (0, L.jsx)(s.M, {
                        paddingTop: "2rem",
                        children: (0, L.jsx)(c.$, {}),
                      }),
                    "analyze" === r && (0, L.jsx)(B, { setActivePage: n }),
                    "results" === r && (0, L.jsx)(Ye, {}),
                    "account" === r &&
                      (0, L.jsx)(he, { user: g, token: j.data.token }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var Je = function (e) {
        var r = e.children,
          n = (0, X.NH)(),
          t = (0, u.useRouter)();
        return (
          (0, l.useEffect)(
            function () {
              !n.isLoggedIn && t && t.push("/");
            },
            [t, n.isLoggedIn]
          ),
          (0, L.jsx)(L.Fragment, { children: r })
        );
      };
      function Xe() {
        return (0, L.jsx)(Je, { children: (0, L.jsx)(qe, {}) });
      }
    },
    4357: function (e, r, n) {
      "use strict";
      n.d(r, {
        NH: function () {
          return a;
        },
        cd: function () {
          return s;
        },
        UJ: function () {
          return c;
        },
      });
      var t = n(7378),
        i = n(9086),
        o = n(1327);
      function a() {
        return (0, i.v9)(function (e) {
          return e.auth;
        });
      }
      function s() {
        var e = (0, i.I0)();
        return (0, t.useCallback)(
          function () {
            e((0, o.Ib)());
          },
          [e]
        );
      }
      function c() {
        var e = (0, i.I0)();
        return (0, t.useCallback)(
          function () {
            e((0, o.ni)());
          },
          [e]
        );
      }
    },
    763: function (e, r, n) {
      "use strict";
      n.d(r, {
        _g: function () {
          return a;
        },
        VO: function () {
          return s;
        },
      });
      var t = n(7378),
        i = n(9086),
        o = n(4242);
      function a() {
        var e = (0, i.I0)();
        return (0, t.useCallback)(
          function (r) {
            e((0, o.KY)(r));
          },
          [e]
        );
      }
      function s() {
        return (0, i.v9)(function (e) {
          return e.session;
        });
      }
    },
    4128: function (e, r, n) {
      "use strict";
      n.d(r, {
        xh: function () {
          return a;
        },
        UY: function () {
          return s;
        },
        Ve: function () {
          return c;
        },
      });
      var t = n(7378),
        i = n(9086),
        o = n(6026);
      function a() {
        var e = (0, i.I0)();
        return (0, t.useCallback)(
          function (r) {
            e((0, o.RG)(r));
          },
          [e]
        );
      }
      function s() {
        var e = (0, i.I0)();
        return (0, t.useCallback)(
          function (r) {
            e((0, o.ck)(r));
          },
          [e]
        );
      }
      function c() {
        return (0, i.v9)(function (e) {
          return e.user.profile;
        });
      }
    },
    4518: function (e, r, n) {
      "use strict";
      var t;
      n.d(r, {
        k: function () {
          return t;
        },
      }),
        (function (e) {
          (e.error = "error"),
            (e.warning = "warning"),
            (e.success = "success"),
            (e.info = "info");
        })(t || (t = {}));
    },
    5021: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/manage",
        function () {
          return n(5814);
        },
      ]);
    },
    5545: function () {},
    6047: function () {},
    8028: function () {},
    695: function () {},
    471: function () {},
    1632: function () {},
  },
  function (e) {
    e.O(0, [774, 794, 997, 969, 88, 33, 552, 577, 291, 888, 179], function () {
      return (r = 5021), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
