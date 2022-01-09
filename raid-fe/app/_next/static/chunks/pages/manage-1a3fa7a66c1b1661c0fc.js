(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [867],
  {
    1706: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return ar;
          },
        });
      var n = t(8566),
        a = t(2416),
        i = t(3928),
        o = t(7830),
        s = t(5774),
        c = t(1532),
        u = t(6677),
        l = t(7378),
        p = t(763),
        d = t(4128),
        f = t(5612),
        m = t(6952),
        h = t(9268),
        x = t(1717),
        g = t(8742),
        b = t.n(g),
        j = t(829),
        v = t(5623),
        y = t(3108),
        O = t(9957),
        w = t(8784),
        k = t.n(w),
        P = t(8617),
        C = t(9887),
        S = t(6187),
        D = t(535),
        z = t(4582),
        E = t(4357),
        _ = t(4518),
        Z = function (e, r, t) {
          var n = e.split("/upload");
          return ""
            .concat(n[0], "/upload/c_scale,h_")
            .concat(t, ",w_")
            .concat(r, "/")
            .concat(n[1]);
        },
        T = (function () {
          var e = (0, m.Z)(
            b().mark(function e(r, t, n) {
              var a, i, o, s, c, u, l, p;
              return b().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = []),
                        (i = new FormData()),
                        (o = Object.keys(r)),
                        (s = 0),
                        (c = o);
                    case 4:
                      if (!(s < c.length)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (u = c[s]),
                        i.append("file", r[Number(u)]),
                        i.append("upload_preset", n),
                        i.append("folder", "raid-ai"),
                        (e.next = 11),
                        fetch(
                          "https://api.cloudinary.com/v1_1/".concat(
                            t,
                            "/image/upload"
                          ),
                          { method: "post", body: i }
                        )
                      );
                    case 11:
                      return (l = e.sent), (e.next = 14), l.json();
                    case 14:
                      (p = e.sent), a.push(p.secure_url);
                    case 16:
                      s++, (e.next = 4);
                      break;
                    case 19:
                      return e.abrupt("return", a);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (r, t, n) {
            return e.apply(this, arguments);
          };
        })(),
        I = (function () {
          var e = (0, m.Z)(
            b().mark(function e(r) {
              return b().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e, t) {
                          var n = new FileReader();
                          n.readAsDataURL(r),
                            (n.onload = function () {
                              return e(n.result);
                            }),
                            (n.onerror = function (e) {
                              return t(e);
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
        A = t(825),
        L = t(9707),
        R = t(4246);
      function F(e, r) {
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
      function M(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? F(Object(t), !0).forEach(function (r) {
                (0, x.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var N = function (e) {
        var r = e.setFiles,
          t = (0, l.useCallback)(function (e) {
            r(e);
          }, []),
          n = (0, L.uI)({ onDrop: t }),
          a = n.getRootProps,
          i = n.getInputProps,
          c = n.isDragActive;
        return (0, R.jsx)(
          o.xu,
          M(
            M({}, a()),
            {},
            {
              cursor: "default",
              height: { base: "10rem", md: "10rem", lg: "15rem" },
              width: "100%",
              bg: "brand.jet",
              p: "1rem",
              children: (0, R.jsxs)(s.M, {
                border: "1px",
                height: "100%",
                borderStyle: "dashed",
                children: [
                  (0, R.jsx)("input", M({}, i())),
                  c
                    ? (0, R.jsx)("p", { children: "Drop the files here ..." })
                    : (0, R.jsx)("p", {
                        children:
                          "Drag 'n' drop some files here, or click to select files",
                      }),
                ],
              }),
            }
          )
        );
      };
      function G(e, r) {
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
      function W(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? G(Object(t), !0).forEach(function (r) {
                (0, x.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var B = (0, P.default)(
          function () {
            return t.e(507).then(t.t.bind(t, 7507, 23));
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
        U = function (e) {
          var r = e.setActivePage,
            t = (0, z.LI)(),
            n = (0, E.UJ)(),
            a = (0, p.VO)().data,
            s = {
              files: [],
              base64: [],
              isLoading: !1,
              description: "",
              id: (0, C.Z)(),
              activeImage: "",
              error: "",
            },
            c = (0, l.useReducer)(function (e, r) {
              return W(W({}, e), r);
            }, s),
            u = c[0],
            d = c[1],
            f = (0, j.q)(),
            g = f.isOpen,
            w = f.onOpen,
            P = f.onClose,
            Z = (function () {
              var e = (0, m.Z)(
                b().mark(function e() {
                  var i, o, s, c, l;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (d({ isLoading: !0 }),
                              d({ error: "" }),
                              (e.prev = 2),
                              u.files.length)
                            ) {
                              e.next = 5;
                              break;
                            }
                            throw new Error("Please upload at least one image");
                          case 5:
                            if (u.description) {
                              e.next = 7;
                              break;
                            }
                            throw new Error("Please enter a description");
                          case 7:
                            return (e.next = 9), T(u.files, S.Zm, S.d3);
                          case 9:
                            return (
                              (i = e.sent),
                              (o = {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(
                                  null === a || void 0 === a ? void 0 : a.token
                                ),
                              }),
                              (s = JSON.stringify({
                                description: u.description,
                                images: i,
                                uuid: u.id,
                              })),
                              (e.next = 14),
                              fetch("".concat(S.yp, "/uploads/"), {
                                body: s,
                                method: "POST",
                                headers: o,
                              })
                            );
                          case 14:
                            if (401 !== (c = e.sent).status) {
                              e.next = 18;
                              break;
                            }
                            return (
                              t({
                                content: {
                                  summary: "Please login again to continue",
                                  title: "Session expired",
                                  type: _.k.error,
                                },
                              }),
                              e.abrupt("return", n())
                            );
                          case 18:
                            if (
                              (console.log({ response: c }),
                              ![400, 500].includes(c.status))
                            ) {
                              e.next = 26;
                              break;
                            }
                            return (e.t0 = D.o), (e.next = 23), c.text();
                          case 23:
                            throw (
                              ((e.t1 = e.sent),
                              (e.t2 = c.status),
                              new e.t0(e.t1, e.t2))
                            );
                          case 26:
                            return (e.next = 28), c.json();
                          case 28:
                            t({
                              content: {
                                title:
                                  "Successfully uploaded images \ud83d\ude80",
                                summary:
                                  "Images successfully uploaded for analysis",
                                type: _.k.success,
                              },
                            }),
                              d({ isLoading: !1 }),
                              r("results"),
                              (e.next = 39);
                            break;
                          case 33:
                            (e.prev = 33),
                              (e.t3 = e.catch(2)),
                              (l = e.t3.message).includes(
                                'description":["This field may not be blank.'
                              ) && (l = "Please enter a description"),
                              l.includes('"images":["empty values ') &&
                                (l = "Please upload at least one image"),
                              t({
                                content: {
                                  title: "Validation Error \ud83d\ude22",
                                  summary: l,
                                  type: _.k.error,
                                },
                              });
                          case 39:
                            return (
                              (e.prev = 39), d({ isLoading: !1 }), e.finish(39)
                            );
                          case 42:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 33, 39, 42]]
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
                var e = (0, m.Z)(
                  b().mark(function e() {
                    var r;
                    return b().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.all(
                                u.files.map(function (e) {
                                  return I(e);
                                })
                              )
                            );
                          case 2:
                            (r = e.sent), d({ base64: r });
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
            [u.files]
          );
          var L;
          return (0, R.jsxs)(o.xu, {
            fontSize: { lg: "1.5rem" },
            px: { xl: "2.5rem" },
            children: [
              u.error &&
                (0, R.jsx)(v.x, {
                  color: "red.500",
                  fontSize: "sm",
                  maxW: "460px",
                  children: u.error,
                }),
              (0, R.jsxs)(i.r, {
                my: "1rem",
                templateColumns: { base: "1fr 4fr" },
                children: [
                  (0, R.jsx)(v.x, { fontWeight: "bold", children: "ID:" }),
                  (0, R.jsx)(v.x, { children: u.id }),
                ],
              }),
              (0, R.jsxs)(i.r, {
                my: "1rem",
                templateColumns: {
                  sm: "1fr 4fr",
                  md: "1fr 4fr",
                  lg: "1fr 4fr",
                },
                children: [
                  (0, R.jsx)(v.x, {
                    fontWeight: "bold",
                    children: "Description:",
                  }),
                  (0, R.jsx)(y.g, {
                    onChange:
                      ((L = "description"),
                      function (e) {
                        d((0, x.Z)({}, L, e.target.value));
                      }),
                    placeholder:
                      "Enter any information you want to associate with the radiograph(s)",
                  }),
                ],
              }),
              (0, R.jsxs)(i.r, {
                my: "1rem",
                templateColumns: {
                  sm: "1fr 4fr",
                  md: "1fr 4fr",
                  lg: "1fr 4fr",
                },
                children: [
                  (0, R.jsx)(v.x, {
                    fontWeight: "bold",
                    children: "Radiograph(s):",
                  }),
                  (0, R.jsx)(N, {
                    setFiles: function (e) {
                      return d({
                        files: k().uniqBy(
                          [].concat((0, h.Z)(e), (0, h.Z)(u.files)),
                          "name"
                        ),
                      });
                    },
                  }),
                ],
              }),
              u.base64.length > 0 &&
                (0, R.jsxs)(i.r, {
                  my: "1rem",
                  templateColumns: {
                    sm: "1fr 4fr",
                    md: "1fr 4fr",
                    lg: "1fr 4fr",
                  },
                  children: [
                    (0, R.jsx)(v.x, {
                      fontWeight: "bold",
                      children: "Preview(s):",
                    }),
                    (0, R.jsx)(i.r, {
                      templateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "8px",
                      children: u.base64.map(function (e) {
                        return (0, R.jsx)(
                          O.E,
                          {
                            cursor: "pointer",
                            src: e,
                            w: "250px",
                            h: "300px",
                            _hover: { opacity: 0.5 },
                            onClick: function () {
                              return d({ activeImage: e }), void w();
                            },
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
              (0, R.jsxs)(i.r, {
                my: "2rem",
                templateColumns: { md: "1fr 4fr", lg: "1fr 4fr" },
                children: [
                  (0, R.jsx)(v.x, {}),
                  (0, R.jsx)(A.Z, {
                    onClick: Z,
                    label: "SUBMIT",
                    props: { w: { lg: "20rem" } },
                    isLoading: u.isLoading,
                  }),
                ],
              }),
              (0, R.jsx)(B, {
                visible: g,
                onClose: P,
                images: u.base64.map(function (e) {
                  return { src: e, alt: "" };
                }),
              }),
            ],
          });
        },
        H = t(8539),
        Y = t(866),
        V = t(4566),
        q = t(2429);
      function J() {
        var e = (0, l.useState)({ width: 0, height: 0 }),
          r = e[0],
          t = e[1];
        return (
          (0, l.useEffect)(function () {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
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
      function X(e) {
        var r = e.label,
          t = e.active,
          n = e.icon,
          a = e.onClick,
          i = J().width < 640 && !t;
        return (0, R.jsxs)(q.k, {
          justifyContent: { base: "center", lg: "start" },
          flexGrow: 1,
          h: "2.5rem",
          bg: t ? "brand.jet" : "none",
          pl: { lg: "2rem" },
          align: "center",
          cursor: "pointer",
          fontSize: "0.875rem",
          lineHeight: "1.375rem",
          _hover: { bg: "brand.jet" },
          color: t ? "white" : "brand.indepedence",
          onClick: a,
          children: [n, !i && (0, R.jsx)(v.x, { pl: "3px", children: r })],
        });
      }
      function $(e) {
        var r = e.activePage,
          t = e.setActivePage;
        return (0, R.jsx)(o.xu, {
          borderTopWidth: "3px",
          borderColor: "brand.charcoal",
          width: "100%",
          children: (0, R.jsxs)(i.r, {
            alignItems: "stretch",
            display: ["flex", "grid"],
            templateColumns: { sm: "repeat(3, 1fr)", xl: "1fr" },
            children: [
              (0, R.jsx)(X, {
                label: "Analyze",
                active: "analyze" === r,
                icon: (0, R.jsx)(H.UPo, { size: 20 }),
                onClick: function () {
                  return t("analyze");
                },
              }),
              (0, R.jsx)(X, {
                label: "My Results",
                active: "results" === r,
                icon: (0, R.jsx)(Y.Ukz, { size: 20 }),
                onClick: function () {
                  return t("results");
                },
              }),
              (0, R.jsx)(X, {
                label: "Account",
                active: "account" === r,
                icon: (0, R.jsx)(V.sdR, { size: 20 }),
                onClick: function () {
                  return t("account");
                },
              }),
            ],
          }),
        });
      }
      var K = t(6894),
        Q = t(5182),
        ee = t(6321),
        re = t.n(ee),
        te = {
          level: S.hw,
          formatters: {
            level: function (e) {
              return { level: e };
            },
          },
        },
        ne = re()(te);
      function ae() {
        return (function (e) {
          return (0, l.useCallback)(
            function (r) {
              var t = "".concat(r.message || r.toString()),
                n = r.message.toLowerCase();
              return n.includes("magic")
                ? ne.error(t)
                : "undefined" === n
                ? ne.warn(t)
                : (ne.error(t),
                  void e({
                    content: {
                      summary: r.message || r.toString(),
                      title: "Error",
                      type: _.k.error,
                    },
                  }));
            },
            [e]
          );
        })((0, z.LI)());
      }
      var ie = (function () {
        var e = (0, m.Z)(
          b().mark(function e(r, t, n) {
            var a, i;
            return b().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch("/api/users/".concat(r, "/"), {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer ".concat(t),
                        },
                        body: JSON.stringify(n),
                      })
                    );
                  case 2:
                    return (a = e.sent), (e.next = 5), a.json();
                  case 5:
                    return (i = e.sent), e.abrupt("return", i);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (r, t, n) {
          return e.apply(this, arguments);
        };
      })();
      function oe(e) {
        for (var r in e)
          (null !== e[r] && void 0 !== e[r] && "" !== e[r]) || delete e[r];
        return e;
      }
      var se = t(5951),
        ce = t(6336),
        ue = t(3049);
      function le(e) {
        var r = e.isOpen,
          t = e.onClose,
          n = e.children,
          a = e.isLoading,
          i = e.handleSubmit;
        return (0, R.jsxs)(ce.u_, {
          isOpen: r,
          onClose: t,
          isCentered: !0,
          size: "lg",
          variant: "wide",
          children: [
            (0, R.jsx)(ce.ZA, {}),
            (0, R.jsxs)(ce.hz, {
              bg: "brand.raisinBlack.1",
              borderWidth: "3px",
              borderColor: "brand.jet",
              borderRadius: "1.25rem",
              color: "white",
              children: [
                (0, R.jsx)(ce.xB, { children: "Edit User Info" }),
                (0, R.jsx)(ce.ol, {}),
                (0, R.jsx)(ce.fe, { children: n }),
                (0, R.jsx)(ce.mz, {
                  children: (0, R.jsx)(ue.z, {
                    colorScheme: "blue",
                    mr: 3,
                    variant: "buttonGradient",
                    isLoading: a,
                    onClick: i,
                    children: "Submit",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function pe(e, r) {
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
      function de(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? pe(Object(t), !0).forEach(function (r) {
                (0, x.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : pe(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function fe(e) {
        var r = e.isOpen,
          t = e.onClose,
          n = e.user,
          a = e.token,
          i = (0, l.useRef)(),
          o = (0, l.useState)(n),
          s = o[0],
          c = o[1],
          u = (0, l.useState)([]),
          p = (u[0], u[1]),
          f = (0, l.useState)(!1),
          h = f[0],
          g = f[1],
          j = ae(),
          y = (0, d.UY)(),
          O = function (e) {
            return function (r) {
              c(de(de({}, s), {}, (0, x.Z)({}, e, r.target.value)));
            };
          },
          w = (function () {
            var e = (0, m.Z)(
              b().mark(function e() {
                var r, n, o, c, u;
                return b().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            null !== (r = i.current) &&
                              void 0 !== r &&
                              r.checkValidity())
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            null === (n = i.current) || void 0 === n
                              ? void 0
                              : n.reportValidity()
                          );
                        case 3:
                          return (
                            g(!0), (o = oe(s)), (e.next = 7), ie(s.id, a, o)
                          );
                        case 7:
                          (c = e.sent), (u = c.data), y(u), t(), (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), j(e.t0);
                        case 16:
                          return (e.prev = 16), g(!1), e.finish(16);
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
        return (0, R.jsx)(le, {
          isOpen: r,
          onClose: t,
          isLoading: h,
          handleSubmit: w,
          children: (0, R.jsxs)("form", {
            ref: i,
            children: [
              (0, R.jsx)(se.Z, {
                label: "First name",
                placeholder: "Eg. John",
                type: "text",
                value: s.first_name,
                onChange: O("first_name"),
                invalidText: "First name should be greater than 3 characters",
              }),
              (0, R.jsx)(se.Z, {
                label: "Last name",
                placeholder: "Eg. Doe",
                type: "text",
                value: s.last_name,
                onChange: O("last_name"),
                invalidText: "Last name should be greater than 3 characters",
              }),
              (0, R.jsx)(se.Z, {
                label: "Email address",
                placeholder: "e.g name@user.com",
                type: "email",
                value: s.email,
                onChange: O("email"),
                invalidText: "Enter valid email address",
              }),
              (0, R.jsx)(v.x, { mb: "0.5rem", children: "Avatar" }),
              (0, R.jsx)(N, { setFiles: p }),
            ],
          }),
        });
      }
      function me(e, r) {
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
      function he(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? me(Object(t), !0).forEach(function (r) {
                (0, x.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : me(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function xe(e) {
        var r = e.left,
          t = e.right,
          n = e.props,
          a = e.leftProps;
        return (0, R.jsxs)(
          q.k,
          he(
            he(
              {
                justify: "space-between",
                maxW: "37.5rem",
                fontWeight: "400",
                fontSize: "0.875rem",
                lineHeight: "1.375rem",
                mb: "1.75rem",
              },
              n
            ),
            {},
            {
              children: [
                (0, R.jsx)(
                  o.xu,
                  he(
                    he({ textColor: "brand.battleshipGray" }, a),
                    {},
                    { children: r }
                  )
                ),
                (0, R.jsx)(o.xu, { textAlign: "right", children: t }),
              ],
            }
          )
        );
      }
      function ge(e) {
        var r = e.user,
          t = e.token,
          n = r.first_name,
          a = r.last_name,
          i = r.email,
          s = r.avatar,
          c = (0, j.q)(),
          u = c.isOpen,
          l = c.onOpen,
          p = c.onClose;
        return (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsxs)(o.xu, {
              w: "100%",
              p: { base: "1.2rem", sm: "2rem" },
              children: [
                (0, R.jsx)(q.k, {
                  justify: "flex-end",
                  align: "center",
                  mb: "1.875rem",
                  children: (0, R.jsx)(v.x, {
                    onClick: l,
                    _hover: { textDecor: "underline" },
                    cursor: "pointer",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    lineHeight: "1.375rem",
                    textColor: "brand.azure",
                    children: "Edit",
                  }),
                }),
                (0, R.jsx)(K.qE, {
                  size: "2xl",
                  name: "Segun Adebayo",
                  src: s || (0, Q.$)(i),
                  mb: "2rem",
                  children: (0, R.jsx)(K.MX, {
                    boxSize: "1.25em",
                    bg: "green.500",
                  }),
                }),
                (0, R.jsx)(xe, { left: "First name", right: n }),
                (0, R.jsx)(xe, { left: "Last name", right: a }),
                (0, R.jsx)(xe, { left: "Email", right: i }),
              ],
            }),
            (0, R.jsx)(fe, { onClose: p, isOpen: u, user: r, token: t }),
          ],
        });
      }
      var be = function (e) {
          var r = e.user,
            t = e.token,
            n = (0, z.LI)(),
            a = (0, E.UJ)();
          return (0, R.jsxs)(o.xu, {
            height: "100%",
            p: { base: "1.2rem", sm: "2rem" },
            children: [
              (0, R.jsx)(v.x, { fontSize: "1.5rem", children: "User Info" }),
              (0, R.jsx)(ge, { user: r, token: t }),
              (0, R.jsx)(o.xu, {
                p: { base: "1.2rem", sm: "2rem" },
                children: (0, R.jsx)(A.Z, {
                  label: "Sign Out",
                  onClick: function () {
                    n({
                      content: {
                        type: _.k.info,
                        title: "Logged out!",
                        summary: "Come back soon \ud83d\ude22",
                      },
                    }),
                      a();
                  },
                }),
              }),
            ],
          });
        },
        je = t(7693),
        ve = t.n(je);
      var ye = t(9580),
        Oe = t.n(ye),
        we = t(8266),
        ke = t.n(we),
        Pe = t(6487),
        Ce = t.n(Pe);
      ve().extend(Oe()), ve().extend(ke()), ve().extend(Ce());
      ve()().weekday(-7);
      var Se = ve()().startOf("week"),
        De = ve()().endOf("week"),
        ze =
          (ve()().weekday(7),
          ve()().startOf("month"),
          ve()().endOf("month"),
          ve()().startOf("year")),
        Ee = ve()().endOf("year"),
        _e = ve()().startOf("quarter"),
        Ze = ve()().endOf("quarter"),
        Te = [Se, _e, ze],
        Ie = [De, Ze, Ee],
        Ae = function (e) {
          return e[Math.floor(Math.random() * e.length)];
        },
        Le = [
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
            description: Ae(Le),
            date:
              ((r = Ae(Te).toDate()),
              (t = Ae(Ie).toDate()),
              new Date(
                r.getTime() + Math.random() * (t.getTime() - r.getTime())
              )),
          };
          var r, t;
        }),
        Fe = t(629);
      function Me(e, r) {
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
      function Ne(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Me(Object(t), !0).forEach(function (r) {
                (0, x.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Me(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var Ge = (0, P.default)(
          function () {
            return t.e(507).then(t.t.bind(t, 7507, 23));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [7507];
              },
              modules: [
                "../components/Manage/Results/Details.tsx -> react-viewer",
              ],
            },
          }
        ),
        We = function (e) {
          var r = e.id,
            t = e.setActiveResult,
            n = (0, l.useState)(),
            a = n[0],
            u = n[1],
            d = (0, p.VO)().data,
            f = (0, l.useState)(),
            h = f[0],
            x = f[1],
            g = (0, z.LI)(),
            y = (0, E.UJ)(),
            w = (0, j.q)(),
            k = w.isOpen,
            P = w.onOpen,
            C = w.onClose,
            D = function (e) {
              x(e), P();
            };
          (0, l.useEffect)(
            function () {
              var e,
                t = (function () {
                  var e = (0, m.Z)(
                    b().mark(function e() {
                      var t, n, a, i;
                      return b().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = {
                                  "Content-Type": "application/json",
                                  Authorization: "Bearer ".concat(
                                    null === d || void 0 === d
                                      ? void 0
                                      : d.token
                                  ),
                                }),
                                (e.next = 3),
                                fetch(
                                  ""
                                    .concat(S.yp, "/uploads/")
                                    .concat(r, "/results"),
                                  { method: "GET", headers: t }
                                )
                              );
                            case 3:
                              if (401 !== (n = e.sent).status) {
                                e.next = 7;
                                break;
                              }
                              return (
                                g({
                                  content: {
                                    summary: "Please login again to continue",
                                    title: "Session expired",
                                    type: _.k.error,
                                  },
                                }),
                                e.abrupt("return", y())
                              );
                            case 7:
                              return (e.next = 9), n.json();
                            case 9:
                              (a = e.sent),
                                (i = a.results.map(function (e) {
                                  return Ne(
                                    Ne({}, e),
                                    {},
                                    { results: JSON.parse(e.results) }
                                  );
                                })),
                                u(i);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              return (
                t(),
                a &&
                  0 === a.length &&
                  (e = setTimeout(function () {
                    t();
                  }, 6e4)),
                function () {
                  return clearTimeout(e);
                }
              );
            },
            [JSON.stringify(a), r]
          );
          var T = { fontWeight: "bold", color: "brand.maximumBlue" };
          return (
            console.log({ details: a }),
            (0, R.jsxs)(o.xu, {
              p: { lg: "2rem" },
              children: [
                (0, R.jsxs)(q.k, {
                  cursor: "pointer",
                  align: "center",
                  color: "brand.maximumBlue",
                  _hover: { color: "brand.darkTurquoise" },
                  onClick: function () {
                    return t(null);
                  },
                  mb: 3,
                  children: [
                    (0, R.jsx)(H.YiX, { size: 24 }),
                    (0, R.jsx)(v.x, {
                      fontSize: "xl",
                      children: "Go Back to Results",
                    }),
                  ],
                }),
                (0, R.jsx)(xe, {
                  left: "ID",
                  right: "".concat(r),
                  leftProps: T,
                }),
                0 === (null === a || void 0 === a ? void 0 : a.length) &&
                  (0, R.jsxs)(s.M, {
                    minH: "20rem",
                    flexDir: "column",
                    children: [
                      (0, R.jsx)(v.x, {
                        children: "Results still processing, please wait...",
                      }),
                      (0, R.jsx)(c.$, {
                        thickness: "4px",
                        speed: "0.65s",
                        emptyColor: "gray.200",
                        color: "blue.500",
                        size: "xl",
                      }),
                    ],
                  }),
                null === a || void 0 === a
                  ? void 0
                  : a.map(function (e, r) {
                      return (0, R.jsxs)(
                        o.xu,
                        {
                          children: [
                            (0, R.jsx)(xe, {
                              left: "Created",
                              right: ve()(e.created_at).format(
                                "ddd Do MMM YYYY"
                              ),
                              leftProps: T,
                            }),
                            (0, R.jsx)(v.x, {
                              fontSize: "2xl",
                              children: "Results",
                            }),
                            e.results.map(function (e, r) {
                              return (0,
                              R.jsxs)(o.xu, { maxW: "20rem", mb: "1rem", children: [(0, R.jsx)(xe, { left: "Name", right: e.name, props: { mb: "0.5rem" }, leftProps: T }), (0, R.jsx)(xe, { left: "Class", right: "".concat(e.class), props: { mb: "0.5rem" }, leftProps: T }), (0, R.jsx)(xe, { left: "Confidence", right: "".concat(e.confidence), props: { mb: "0.5rem" }, leftProps: T }), (0, R.jsx)(Fe.i, {})] });
                            }),
                            (0, R.jsx)(v.x, {
                              fontSize: "2xl",
                              children: "Analyzed",
                            }),
                            (0, R.jsx)(i.r, {
                              templateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                              gap: "8px",
                              mb: "1rem",
                              children: [e.result_image].map(function (e) {
                                return (0, R.jsx)(
                                  O.E,
                                  {
                                    cursor: "pointer",
                                    src: Z(e, 250, 300),
                                    w: "250px",
                                    h: "300px",
                                    _hover: { opacity: 0.5 },
                                    onClick: function () {
                                      return D(e);
                                    },
                                  },
                                  e
                                );
                              }),
                            }),
                            (0, R.jsx)(v.x, {
                              fontSize: "2xl",
                              children: "Original Images",
                            }),
                            (0, R.jsx)(i.r, {
                              templateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                              gap: "8px",
                              mb: "1rem",
                              children: [e.image].map(function (e) {
                                return (0, R.jsx)(
                                  O.E,
                                  {
                                    cursor: "pointer",
                                    src: Z(e, 250, 300),
                                    w: "250px",
                                    h: "300px",
                                    _hover: { opacity: 0.5 },
                                    onClick: function () {
                                      return D(e);
                                    },
                                  },
                                  e
                                );
                              }),
                            }),
                            (0, R.jsx)(Fe.i, {}),
                          ],
                        },
                        r
                      );
                    }),
                (0, R.jsx)(Ge, {
                  visible: k,
                  onClose: C,
                  images: [h].map(function (e) {
                    return { src: e, alt: "" };
                  }),
                }),
              ],
            })
          );
        },
        Be = t(9670),
        Ue = t(378),
        He = t(407);
      function Ye(e, r, t) {
        return (0, He.Lu)(e, t, {
          keys: [
            function (e) {
              return e.values[r];
            },
          ],
        });
      }
      Ye.autoRemove = function (e) {
        return !e;
      };
      var Ve = t(3675),
        qe = t(5984),
        Je = t(4368),
        Xe = t(7228);
      function $e(e) {
        var r = e.preGlobalFilteredRows,
          t = e.globalFilter,
          n = e.setGlobalFilter,
          a = r.length,
          i = (0, l.useState)(t),
          o = i[0],
          s = i[1],
          c = (0, Ue.useAsyncDebounce)(function (e) {
            n(e || void 0);
          }, 200);
        return (0, R.jsxs)(q.k, {
          alignItems: "center",
          mt: { base: "1rem", lg: 0 },
          children: [
            (0, R.jsxs)(v.x, {
              fontSize: { lg: "1.3rem" },
              mr: "1rem",
              children: ["Search:", " "],
            }),
            (0, R.jsxs)(Ve.B, {
              maxW: "20rem",
              children: [
                (0, R.jsx)(qe.I, {
                  value: o || "",
                  onChange: function (e) {
                    s(e.target.value), c(e.target.value);
                  },
                  placeholder: "".concat(a, " records..."),
                  fontSize: "1.1rem",
                }),
                (0, R.jsx)(Je.xW, {
                  bg: "brand.raisinBlack.1",
                  cursor: "pointer",
                  children: (0, R.jsx)(Xe.U41, { size: 20 }),
                }),
              ],
            }),
          ],
        });
      }
      var Ke = t(8379),
        Qe = function (e) {
          var r = e.canNextPage,
            t = e.canPreviousPage,
            n = e.gotoPage,
            a = e.previousPage,
            i = e.nextPage,
            c = e.pageCount,
            u = e.pageOptions,
            l = e.pageIndex,
            p = e.pageSize,
            d = e.setPageSize;
          return (0, R.jsxs)(s.M, {
            flexDir: { base: "column", md: "row" },
            children: [
              (0, R.jsxs)(q.k, {
                children: [
                  (0, R.jsx)(A.Z, {
                    label: "<<",
                    onClick: function () {
                      return n(0);
                    },
                    isDisabled: !t,
                    props: { mr: "1rem" },
                  }),
                  (0, R.jsx)(A.Z, {
                    label: "<",
                    onClick: a,
                    isDisabled: !t,
                    props: { mr: "1rem" },
                  }),
                  (0, R.jsx)(A.Z, {
                    label: ">",
                    onClick: i,
                    isDisabled: !r,
                    props: { mr: "1rem" },
                  }),
                  (0, R.jsx)(A.Z, {
                    label: ">>",
                    onClick: function () {
                      return n(c - 1);
                    },
                    isDisabled: !r,
                    props: { mr: "1rem" },
                  }),
                ],
              }),
              (0, R.jsxs)(o.xu, {
                mr: "1rem",
                my: { base: "1rem", md: 0 },
                children: ["Page ", l + 1, " of ", u.length],
              }),
              (0, R.jsxs)(o.xu, {
                children: [
                  "| Go to page:",
                  " ",
                  (0, R.jsx)(qe.I, {
                    type: "number",
                    defaultValue: l + 1,
                    onChange: function (e) {
                      var r = e.target.value ? Number(e.target.value) - 1 : 0;
                      n(r);
                    },
                    width: { base: "50px", md: "60px" },
                    mr: "1rem",
                  }),
                ],
              }),
              (0, R.jsx)(o.xu, {
                my: "1.5rem",
                children: (0, R.jsx)(Ke.Ph, {
                  value: p,
                  onChange: function (e) {
                    return d(Number(e.target.value));
                  },
                  bg: "brand.raisinBlack.1",
                  children: [10, 20, 30, 40, 50].map(function (e) {
                    return (0,
                    R.jsxs)("option", { value: e, style: { background: "#33333E" }, children: ["Show ", e] }, e);
                  }),
                }),
              }),
            ],
          });
        },
        er = function (e) {
          var r = e.columns,
            t = e.data,
            n = e.fetchData,
            a = e.pageCount,
            i = (e.loading, e.setActiveResult),
            s = (0, l.useMemo)(function () {
              return { fuzzyText: Ye };
            }, []),
            c = (0, Ue.useTable)(
              {
                columns: r,
                data: t,
                initialState: { pageIndex: 0 },
                manualPagination: !0,
                pageCount: a,
                filterTypes: s,
              },
              Ue.useGlobalFilter,
              Ue.usePagination
            ),
            u = J().width,
            p = c.headerGroups,
            d = c.rows,
            f = c.prepareRow,
            m = c.canPreviousPage,
            h = c.canNextPage,
            x = c.pageOptions,
            g = c.pageCount,
            b = c.gotoPage,
            j = c.nextPage,
            v = c.previousPage,
            y = c.setPageSize,
            O = c.preGlobalFilteredRows,
            w = c.setGlobalFilter,
            k = c.state,
            P = k.pageIndex,
            C = k.pageSize,
            S = k.globalFilter;
          (0, l.useEffect)(
            function () {
              n({ pageSize: C, pageIndex: P });
            },
            [n, P, C]
          );
          var D = u < 768,
            z = (0, l.useCallback)(
              function (e) {
                return D
                  ? e.filter(function (e) {
                      return "date" !== e.id;
                    })
                  : e;
              },
              [D]
            ),
            E = (0, l.useCallback)(
              function (e) {
                return D
                  ? e.filter(function (e) {
                      return "date" !== e.column.id;
                    })
                  : e;
              },
              [D]
            );
          return (0, R.jsxs)(o.xu, {
            p: { lg: "2rem" },
            children: [
              (0, R.jsx)($e, {
                preGlobalFilteredRows: O,
                globalFilter: S,
                setGlobalFilter: w,
              }),
              (0, R.jsxs)(Be.iA, {
                variant: "striped",
                colorScheme: "whiteAlpha",
                children: [
                  (0, R.jsx)(Be.Rn, {
                    children: "ALL THE RESULTS YOU'VE ANALYZED SO FAR",
                  }),
                  (0, R.jsx)(Be.hr, {
                    children: p.map(function (e, r) {
                      return (0, R.jsx)(
                        Be.Tr,
                        {
                          children: z(e.headers).map(function (e) {
                            return (0,
                            R.jsx)(Be.Th, { children: e.render("Header") }, e.getHeaderProps().key);
                          }),
                        },
                        r
                      );
                    }),
                  }),
                  (0, R.jsx)(Be.p3, {
                    children: d.map(function (e, r) {
                      return (
                        f(e),
                        (0, R.jsx)(
                          Be.Tr,
                          {
                            cursor: "pointer",
                            _hover: {
                              bg:
                                r % 2 === 0
                                  ? "brand.davysGrey"
                                  : "brand.raisinBlack.2",
                            },
                            onClick: function () {
                              return i(e.original.id);
                            },
                            children: E(e.cells).map(function (e) {
                              return (0,
                              R.jsx)(Be.Td, { children: e.render("Cell") }, e.getCellProps().key);
                            }),
                          },
                          e.getRowProps().key
                        )
                      );
                    }),
                  }),
                ],
              }),
              (0, R.jsx)(Qe, {
                canPreviousPage: m,
                canNextPage: h,
                gotoPage: b,
                previousPage: v,
                nextPage: j,
                pageCount: g,
                pageIndex: P,
                pageOptions: x,
                pageSize: C,
                setPageSize: y,
              }),
            ],
          });
        },
        rr = function () {
          var e = (0, l.useState)(0),
            r = e[0],
            t = e[1],
            i = (0, l.useState)([]),
            o = i[0],
            s = i[1],
            c = (0, l.useState)(),
            u = c[0],
            d = c[1],
            f = (0, a.k)(!1),
            h = (0, n.Z)(f, 2),
            x = h[0],
            g = h[1],
            j = (0, l.useRef)(0),
            v = J().width,
            y =
              ((0, l.useCallback)(
                function () {
                  return v < 480;
                },
                [v]
              ),
              (0, p.VO)().data),
            O = (0, z.LI)(),
            w = (0, E.UJ)(),
            k = (0, l.useMemo)(function () {
              return [
                {
                  Header: "ID",
                  accessor: "uuid",
                  Cell: function (e) {
                    return e.value.slice(0, 8);
                  },
                },
                {
                  Header: "Description",
                  accessor: "description",
                  Cell: function (e) {
                    var r,
                      t,
                      n = e.value;
                    return (
                      (t = 45), (r = n).length <= t ? r : r.slice(0, t) + "..."
                    );
                  },
                },
                {
                  Header: "Date",
                  accessor: "date",
                  Cell: function (e) {
                    var r = e.value;
                    return ve()(r).format("ddd Do MMM YYYY");
                  },
                },
              ];
            }, []),
            P = (0, l.useCallback)(
              (function () {
                var e = (0, m.Z)(
                  b().mark(function e(r) {
                    var n, a, i, o, c, u, l, p, d;
                    return b().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = r.pageSize),
                              (a = r.pageIndex),
                              (i = ++j.current),
                              g.on(),
                              (c = (o = n * a) + n),
                              (u = {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(
                                  null === y || void 0 === y ? void 0 : y.token
                                ),
                              }),
                              i !== j.current)
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (
                              (e.next = 9),
                              fetch("".concat(S.yp, "/uploads/"), {
                                method: "GET",
                                headers: u,
                              })
                            );
                          case 9:
                            if (401 !== (l = e.sent).status) {
                              e.next = 13;
                              break;
                            }
                            return (
                              O({
                                content: {
                                  summary: "Please login again to continue",
                                  title: "Session expired",
                                  type: _.k.error,
                                },
                              }),
                              e.abrupt("return", w())
                            );
                          case 13:
                            return (e.next = 15), l.json();
                          case 15:
                            (p = e.sent).uploads &&
                              ((d = p.uploads.map(function (e) {
                                return {
                                  id: e.id,
                                  uuid: e.uuid,
                                  description: e.description,
                                  date: new Date(e.created_at),
                                };
                              })),
                              s(((f = o), (m = c), d.slice(f, m))),
                              t(Math.ceil(Re.length / n))),
                              g.off();
                          case 18:
                          case "end":
                            return e.stop();
                        }
                      var f, m;
                    }, e);
                  })
                );
                return function (r) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            );
          return u
            ? (0, R.jsx)(We, { id: u, setActiveResult: d })
            : (0, R.jsx)(er, {
                columns: k,
                data: o,
                fetchData: P,
                pageCount: r,
                loading: x,
                setActiveResult: d,
              });
        };
      function tr() {
        console.log("I am in the manage content ci page");
        var e = (0, l.useState)("analyze"),
          r = e[0],
          t = e[1],
          m = (0, a.k)(),
          h = (0, n.Z)(m, 2),
          x = h[0],
          g = (h[1], (0, u.useRouter)().query),
          b = (0, d.Ve)(),
          j = (0, p.VO)();
        return (
          console.log({ user: b, session: j }),
          (0, l.useEffect)(
            function () {
              if (
                ["account", "analyze", "results"].includes(
                  null === g || void 0 === g ? void 0 : g.section
                )
              )
                return t(null === g || void 0 === g ? void 0 : g.section);
            },
            [null === g || void 0 === g ? void 0 : g.section]
          ),
          (0, R.jsx)(f.Z, {
            children: (0, R.jsxs)(i.r, {
              templateColumns: { xl: "1fr 4.48fr" },
              px: { base: "1rem", md: "2rem", lg: "4rem", xl: "7.5rem" },
              fontFamily: "Nunito",
              children: [
                (0, R.jsx)($, { activePage: r, setActivePage: t }),
                (0, R.jsxs)(o.xu, {
                  borderLeftWidth: { xl: "3px" },
                  borderTopWidth: "3px",
                  borderColor: "brand.charcoal",
                  minH: "83vh",
                  children: [
                    x &&
                      (0, R.jsx)(s.M, {
                        paddingTop: "2rem",
                        children: (0, R.jsx)(c.$, {}),
                      }),
                    "analyze" === r && (0, R.jsx)(U, { setActivePage: t }),
                    "results" === r && (0, R.jsx)(rr, {}),
                    "account" === r &&
                      (0, R.jsx)(be, { user: b, token: j.data.token }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var nr = function (e) {
        var r = e.children;
        console.log("I am in the auth wrapper");
        var t = (0, E.NH)(),
          n = (0, u.useRouter)();
        return (
          console.log({ auth: t, router: n }),
          (0, l.useEffect)(
            function () {
              !t.isLoggedIn && n && n.push("/");
            },
            [n, t.isLoggedIn]
          ),
          (0, R.jsx)(R.Fragment, { children: r })
        );
      };
      function ar() {
        return (
          console.log("I am in the manage page"),
          (0, R.jsx)(nr, { children: (0, R.jsx)(tr, {}) })
        );
      }
    },
    5021: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/manage",
        function () {
          return t(1706);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [774, 794, 997, 969, 88, 33, 552, 940, 393, 293, 888, 179],
      function () {
        return (r = 5021), e((e.s = r));
        var r;
      }
    );
    var r = e.O();
    _N_E = r;
  },
]);
