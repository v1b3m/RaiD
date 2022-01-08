(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6560: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return a;
          },
        });
      var t = r(6677),
        u = r(7378),
        i = r(2429),
        s = r(5612),
        o = r(5182),
        c = r(4246),
        f = function () {
          return (0, c.jsx)(s.Z, {
            children: (0, c.jsx)(i.k, {
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
              children: (0, c.jsx)(o.Z, {}),
            }),
          });
        },
        m = r(4357),
        a = function () {
          var n = (0, t.useRouter)(),
            e = (0, m.NH)();
          return (
            (0, u.useEffect)(
              function () {
                e.isLoggedIn && n && n.push("/manage");
              },
              [n, e.isLoggedIn]
            ),
            (0, c.jsx)(f, {})
          );
        };
    },
    4423: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6560);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [794, 997, 969, 552, 940, 293, 774, 888, 179], function () {
      return (e = 4423), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
