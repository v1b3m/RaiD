(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    5612: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return b;
        },
      });
      var n = t(2429),
        i = t(5774),
        o = t(5623),
        a = t(4246);
      function l() {
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
      var s = t(1717),
        c = t(7830),
        u = t(5075),
        d = t(9894),
        m = t(8539);
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
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                (0, s.Z)(e, r, t[r]);
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
      function x(e) {
        var r = e.text,
          t = e.props,
          n = e.uri;
        return (0, a.jsx)(d.default, {
          href: n,
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
                  t
                ),
                {},
                { children: r }
              )
            ),
          }),
        });
      }
      function f(e) {
        var r = e.props;
        return (0, a.jsx)(
          c.xu,
          h(
            h({}, r),
            {},
            {
              children: (0, a.jsx)(u.UQ, {
                allowToggle: !0,
                children: (0, a.jsxs)(u.Qd, {
                  borderBottom: "0",
                  borderTopColor: "brand.raisinBlack",
                  children: [
                    (0, a.jsxs)(n.k, {
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
                        (0, a.jsxs)(n.k, {
                          align: "center",
                          fontWeight: "400",
                          fontSize: "1.1rem",
                          display: { base: "none", md: "flex" },
                          children: [
                            (0, a.jsx)(x, { text: "Help", uri: "/help" }),
                            (0, a.jsx)(x, {
                              text: "Contact Us",
                              uri: "mailto:vibenjamin6@gmail.com",
                            }),
                          ],
                        }),
                        (0, a.jsx)(c.xu, {
                          transition: "background-color 500ms linear",
                          bg: "brand.jet",
                          borderRadius: "10",
                          _hover: { bg: "none" },
                          cursor: "pointer",
                          display: { base: "block", md: "none" },
                          children: (0, a.jsx)(u.KF, {
                            p: "1",
                            children: (0, a.jsx)(m.fdF, { size: "40" }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(u.Hk, {
                      pb: 4,
                      display: { base: "block", md: "none" },
                      children: [
                        (0, a.jsx)(x, {
                          text: "Help",
                          uri: "/help",
                          props: { my: "0.5rem" },
                        }),
                        (0, a.jsx)(x, {
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
          t = e.headerProps;
        return (0, a.jsxs)(n.k, {
          bg: "brand.raisinBlack",
          height: "100%",
          minH: "100vh",
          textColor: "brand.cultured",
          fontFamily: "Nunito",
          flexDir: "column",
          children: [(0, a.jsx)(f, { props: t }), r, (0, a.jsx)(l, {})],
        });
      }
    },
    3274: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return w;
          },
        });
      var n = t(3928),
        i = t(7830),
        o = t(5623),
        a = t(5075),
        l = [
          "How Do I Get Started?",
          "How do I digitise my radiographs?",
          "Can I access previous results?",
          "What is your policy on data and privacy?",
        ],
        s = new Array(4).fill(null).map(function (e, r) {
          return {
            title: l[r],
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat.",
          };
        }),
        c = t(4246),
        u = function () {
          return (0, c.jsxs)(i.xu, {
            children: [
              (0, c.jsx)(o.x, {
                fontSize: { md: "1.5rem", lg: "2rem" },
                children: "FAQs",
              }),
              (0, c.jsx)(a.UQ, {
                defaultIndex: [0],
                allowMultiple: !0,
                children: s.map(function (e) {
                  var r = e.title,
                    t = e.content;
                  return (0,
                  c.jsxs)(a.Qd, { children: [(0, c.jsx)("h2", { children: (0, c.jsxs)(a.KF, { children: [(0, c.jsx)(i.xu, { flex: "1", textAlign: "left", fontSize: { lg: "1.3rem" }, children: r }), (0, c.jsx)(a.XE, {})] }) }), (0, c.jsx)(a.Hk, { pb: 4, children: t })] });
                }),
              }),
            ],
          });
        },
        d = t(5612),
        m = t(3768),
        p = t(6563),
        h = t(1330),
        x = t(6541),
        f = t(1697),
        b = t(7378);
      function j() {
        return (j =
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
      var g = (0, m.G)((e, r) => {
        var { ratio: t = 4 / 3, children: n, className: i } = e,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (t = o[n]), r.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, ["ratio", "children", "className"]),
          a = b.Children.only(n),
          l = (0, h.cx)("chakra-aspect-ratio", i);
        return b.createElement(
          p.m$.div,
          j(
            {
              ref: r,
              position: "relative",
              className: l,
              _before: {
                height: 0,
                content: '""',
                display: "block",
                paddingBottom: (0, x.XQ)(t, (e) => (1 / e) * 100 + "%"),
              },
              __css: {
                "& > *:not(style)": {
                  overflow: "hidden",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                },
                "& > img, & > video": { objectFit: "cover" },
              },
            },
            o
          ),
          a
        );
      });
      f.Ts && (g.displayName = "AspectRatio");
      var y = function () {
          return (0, c.jsxs)(i.xu, {
            children: [
              (0, c.jsx)(o.x, {
                fontSize: { md: "1.5rem", lg: "2rem" },
                children: "Watch the intro video",
              }),
              (0, c.jsx)(g, {
                ratio: 16 / 9,
                children: (0, c.jsx)("iframe", {
                  width: "100%",
                  height: "100%",
                  src: "https://www.youtube.com/embed/a_HNLijdyFM",
                  title: "YouTube video player",
                  frameBorder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
                }),
              }),
            ],
          });
        },
        v = function () {
          return (0, c.jsx)(d.Z, {
            children: (0, c.jsxs)(n.r, {
              px: { base: "1rem", md: "2rem", lg: "4rem", xl: "7.5rem" },
              fontFamily: "Nunito",
              templateColumns: { lg: "2fr 1.3fr" },
              gap: "1.5rem",
              children: [(0, c.jsx)(u, {}), (0, c.jsx)(y, {})],
            }),
          });
        },
        w = function () {
          return (0, c.jsx)(v, {});
        };
    },
    1486: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/help",
        function () {
          return t(3274);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [794, 552, 774, 888, 179], function () {
      return (r = 1486), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
