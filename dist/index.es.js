import './index.css';var Kc = Object.defineProperty;
var qc = (e, t, n) => t in e ? Kc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ut = (e, t, n) => qc(e, typeof t != "symbol" ? t + "" : t, n);
import * as m from "react";
import qe, { forwardRef as _e, createElement as de, useState as he, useRef as jt, useCallback as $r, createContext as ft, useContext as mt, useEffect as on, useLayoutEffect as Pa } from "react";
import * as An from "react-dom";
import Xc from "react-dom";
var wr = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function Zc() {
  if (Fo) return Kt;
  Fo = 1;
  var e = qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var d, f = {}, h = null, v = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c) r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (i && i.defaultProps) for (d in c = i.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: i, key: h, ref: v, props: f, _owner: o.current };
  }
  return Kt.Fragment = n, Kt.jsx = s, Kt.jsxs = s, Kt;
}
var qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Jc() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function y(x) {
      if (x === null || typeof x != "object")
        return null;
      var M = g && x[g] || x[p];
      return typeof M == "function" ? M : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var M = arguments.length, O = new Array(M > 1 ? M - 1 : 0), W = 1; W < M; W++)
          O[W - 1] = arguments[W];
        C("error", x, O);
      }
    }
    function C(x, M, O) {
      {
        var W = w.ReactDebugCurrentFrame, te = W.getStackAddendum();
        te !== "" && (M += "%s", O = O.concat([te]));
        var oe = O.map(function(U) {
          return String(U);
        });
        oe.unshift("Warning: " + M), Function.prototype.apply.call(console[x], console, oe);
      }
    }
    var S = !1, E = !1, N = !1, _ = !1, k = !1, Y;
    Y = Symbol.for("react.module.reference");
    function $(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === a || k || x === o || x === l || x === d || _ || x === v || S || E || N || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === f || x.$$typeof === s || x.$$typeof === i || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Y || x.getModuleId !== void 0));
    }
    function B(x, M, O) {
      var W = x.displayName;
      if (W)
        return W;
      var te = M.displayName || M.name || "";
      return te !== "" ? O + "(" + te + ")" : O;
    }
    function D(x) {
      return x.displayName || "Context";
    }
    function I(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case i:
            var M = x;
            return D(M) + ".Consumer";
          case s:
            var O = x;
            return D(O._context) + ".Provider";
          case c:
            return B(x, x.render, "ForwardRef");
          case f:
            var W = x.displayName || null;
            return W !== null ? W : I(x.type) || "Memo";
          case h: {
            var te = x, oe = te._payload, U = te._init;
            try {
              return I(U(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, H = 0, j, R, P, T, X, ae, et;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function Fe() {
      {
        if (H === 0) {
          j = console.log, R = console.info, P = console.warn, T = console.error, X = console.group, ae = console.groupCollapsed, et = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        H++;
      }
    }
    function nt() {
      {
        if (H--, H === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, x, {
              value: j
            }),
            info: A({}, x, {
              value: R
            }),
            warn: A({}, x, {
              value: P
            }),
            error: A({}, x, {
              value: T
            }),
            group: A({}, x, {
              value: X
            }),
            groupCollapsed: A({}, x, {
              value: ae
            }),
            groupEnd: A({}, x, {
              value: et
            })
          });
        }
        H < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = w.ReactCurrentDispatcher, F;
    function Q(x, M, O) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (te) {
            var W = te.stack.trim().match(/\n( *(at )?)/);
            F = W && W[1] || "";
          }
        return `
` + F + x;
      }
    }
    var fe = !1, Z;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new ee();
    }
    function J(x, M) {
      if (!x || fe)
        return "";
      {
        var O = Z.get(x);
        if (O !== void 0)
          return O;
      }
      var W;
      fe = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = Oe.current, Oe.current = null, Fe();
      try {
        if (M) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (xe) {
              W = xe;
            }
            Reflect.construct(x, [], U);
          } else {
            try {
              U.call();
            } catch (xe) {
              W = xe;
            }
            x.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            W = xe;
          }
          x();
        }
      } catch (xe) {
        if (xe && W && typeof xe.stack == "string") {
          for (var G = xe.stack.split(`
`), ve = W.stack.split(`
`), ue = G.length - 1, me = ve.length - 1; ue >= 1 && me >= 0 && G[ue] !== ve[me]; )
            me--;
          for (; ue >= 1 && me >= 0; ue--, me--)
            if (G[ue] !== ve[me]) {
              if (ue !== 1 || me !== 1)
                do
                  if (ue--, me--, me < 0 || G[ue] !== ve[me]) {
                    var Ne = `
` + G[ue].replace(" at new ", " at ");
                    return x.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", x.displayName)), typeof x == "function" && Z.set(x, Ne), Ne;
                  }
                while (ue >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        fe = !1, Oe.current = oe, nt(), Error.prepareStackTrace = te;
      }
      var Nt = x ? x.displayName || x.name : "", xt = Nt ? Q(Nt) : "";
      return typeof x == "function" && Z.set(x, xt), xt;
    }
    function pe(x, M, O) {
      return J(x, !1);
    }
    function Me(x) {
      var M = x.prototype;
      return !!(M && M.isReactComponent);
    }
    function Le(x, M, O) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return J(x, Me(x));
      if (typeof x == "string")
        return Q(x);
      switch (x) {
        case l:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return pe(x.render);
          case f:
            return Le(x.type, M, O);
          case h: {
            var W = x, te = W._payload, oe = W._init;
            try {
              return Le(oe(te), M, O);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, rt = {}, pn = w.ReactDebugCurrentFrame;
    function ze(x) {
      if (x) {
        var M = x._owner, O = Le(x.type, x._source, M ? M.type : null);
        pn.setExtraStackFrame(O);
      } else
        pn.setExtraStackFrame(null);
    }
    function Rc(x, M, O, W, te) {
      {
        var oe = Function.call.bind(ke);
        for (var U in x)
          if (oe(x, U)) {
            var G = void 0;
            try {
              if (typeof x[U] != "function") {
                var ve = Error((W || "React class") + ": " + O + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              G = x[U](M, U, W, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              G = ue;
            }
            G && !(G instanceof Error) && (ze(te), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", O, U, typeof G), ze(null)), G instanceof Error && !(G.message in rt) && (rt[G.message] = !0, ze(te), b("Failed %s type: %s", O, G.message), ze(null));
          }
      }
    }
    var Mc = Array.isArray;
    function Kn(x) {
      return Mc(x);
    }
    function Nc(x) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, O = M && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return O;
      }
    }
    function _c(x) {
      try {
        return Ro(x), !1;
      } catch {
        return !0;
      }
    }
    function Ro(x) {
      return "" + x;
    }
    function Mo(x) {
      if (_c(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nc(x)), Ro(x);
    }
    var Gt = w.ReactCurrentOwner, Oc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, No, _o, qn;
    qn = {};
    function kc(x) {
      if (ke.call(x, "ref")) {
        var M = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Dc(x) {
      if (ke.call(x, "key")) {
        var M = Object.getOwnPropertyDescriptor(x, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function jc(x, M) {
      if (typeof x.ref == "string" && Gt.current && M && Gt.current.stateNode !== M) {
        var O = I(Gt.current.type);
        qn[O] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Gt.current.type), x.ref), qn[O] = !0);
      }
    }
    function Tc(x, M) {
      {
        var O = function() {
          No || (No = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        O.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Ac(x, M) {
      {
        var O = function() {
          _o || (_o = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        O.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ic = function(x, M, O, W, te, oe, U) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: M,
        ref: O,
        props: U,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Fc(x, M, O, W, te) {
      {
        var oe, U = {}, G = null, ve = null;
        O !== void 0 && (Mo(O), G = "" + O), Dc(M) && (Mo(M.key), G = "" + M.key), kc(M) && (ve = M.ref, jc(M, te));
        for (oe in M)
          ke.call(M, oe) && !Oc.hasOwnProperty(oe) && (U[oe] = M[oe]);
        if (x && x.defaultProps) {
          var ue = x.defaultProps;
          for (oe in ue)
            U[oe] === void 0 && (U[oe] = ue[oe]);
        }
        if (G || ve) {
          var me = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          G && Tc(U, me), ve && Ac(U, me);
        }
        return Ic(x, G, ve, te, W, Gt.current, U);
      }
    }
    var Xn = w.ReactCurrentOwner, Oo = w.ReactDebugCurrentFrame;
    function Mt(x) {
      if (x) {
        var M = x._owner, O = Le(x.type, x._source, M ? M.type : null);
        Oo.setExtraStackFrame(O);
      } else
        Oo.setExtraStackFrame(null);
    }
    var Zn;
    Zn = !1;
    function Jn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function ko() {
      {
        if (Xn.current) {
          var x = I(Xn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Lc(x) {
      return "";
    }
    var Do = {};
    function Wc(x) {
      {
        var M = ko();
        if (!M) {
          var O = typeof x == "string" ? x : x.displayName || x.name;
          O && (M = `

Check the top-level render call using <` + O + ">.");
        }
        return M;
      }
    }
    function jo(x, M) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var O = Wc(M);
        if (Do[O])
          return;
        Do[O] = !0;
        var W = "";
        x && x._owner && x._owner !== Xn.current && (W = " It was passed a child from " + I(x._owner.type) + "."), Mt(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, W), Mt(null);
      }
    }
    function To(x, M) {
      {
        if (typeof x != "object")
          return;
        if (Kn(x))
          for (var O = 0; O < x.length; O++) {
            var W = x[O];
            Jn(W) && jo(W, M);
          }
        else if (Jn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var te = y(x);
          if (typeof te == "function" && te !== x.entries)
            for (var oe = te.call(x), U; !(U = oe.next()).done; )
              Jn(U.value) && jo(U.value, M);
        }
      }
    }
    function $c(x) {
      {
        var M = x.type;
        if (M == null || typeof M == "string")
          return;
        var O;
        if (typeof M == "function")
          O = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === f))
          O = M.propTypes;
        else
          return;
        if (O) {
          var W = I(M);
          Rc(O, x.props, "prop", W, x);
        } else if (M.PropTypes !== void 0 && !Zn) {
          Zn = !0;
          var te = I(M);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yc(x) {
      {
        for (var M = Object.keys(x.props), O = 0; O < M.length; O++) {
          var W = M[O];
          if (W !== "children" && W !== "key") {
            Mt(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), Mt(null);
            break;
          }
        }
        x.ref !== null && (Mt(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    var Ao = {};
    function Io(x, M, O, W, te, oe) {
      {
        var U = $(x);
        if (!U) {
          var G = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Lc();
          ve ? G += ve : G += ko();
          var ue;
          x === null ? ue = "null" : Kn(x) ? ue = "array" : x !== void 0 && x.$$typeof === t ? (ue = "<" + (I(x.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, G);
        }
        var me = Fc(x, M, O, te, oe);
        if (me == null)
          return me;
        if (U) {
          var Ne = M.children;
          if (Ne !== void 0)
            if (W)
              if (Kn(Ne)) {
                for (var Nt = 0; Nt < Ne.length; Nt++)
                  To(Ne[Nt], x);
                Object.freeze && Object.freeze(Ne);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              To(Ne, x);
        }
        if (ke.call(M, "key")) {
          var xt = I(x), xe = Object.keys(M).filter(function(Uc) {
            return Uc !== "key";
          }), Qn = xe.length > 0 ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ao[xt + Qn]) {
            var Gc = xe.length > 0 ? "{" + xe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qn, xt, Gc, xt), Ao[xt + Qn] = !0;
          }
        }
        return x === r ? Yc(me) : $c(me), me;
      }
    }
    function Vc(x, M, O) {
      return Io(x, M, O, !0);
    }
    function Bc(x, M, O) {
      return Io(x, M, O, !1);
    }
    var Hc = Bc, zc = Vc;
    qt.Fragment = r, qt.jsx = Hc, qt.jsxs = zc;
  }()), qt;
}
process.env.NODE_ENV === "production" ? wr.exports = Zc() : wr.exports = Jc();
var u = wr.exports;
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ea = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var el = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = _e(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => de(
    "svg",
    {
      ref: c,
      ...el,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ea("lucide", o),
      ...i
    },
    [
      ...s.map(([l, d]) => de(l, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = (e, t) => {
  const n = _e(
    ({ className: r, ...o }, a) => de(tl, {
      ref: a,
      iconNode: t,
      className: Ea(`lucide-${Qc(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = Yr("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = Yr("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = Yr("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
function ol(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ra(...e) {
  return (t) => e.forEach((n) => ol(n, t));
}
function le(...e) {
  return m.useCallback(Ra(...e), e);
}
var Ct = m.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.Children.toArray(n), a = o.find(sl);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? m.Children.count(s) > 1 ? m.Children.only(null) : m.isValidElement(s) ? s.props.children : null : c);
    return /* @__PURE__ */ u.jsx(Cr, { ...r, ref: t, children: m.isValidElement(s) ? m.cloneElement(s, void 0, i) : null });
  }
  return /* @__PURE__ */ u.jsx(Cr, { ...r, ref: t, children: n });
});
Ct.displayName = "Slot";
var Cr = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (m.isValidElement(n)) {
    const o = cl(n);
    return m.cloneElement(n, {
      ...il(r, n.props),
      // @ts-ignore
      ref: t ? Ra(t, o) : o
    });
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
Cr.displayName = "SlotClone";
var al = ({ children: e }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e });
function sl(e) {
  return m.isValidElement(e) && e.type === al;
}
function il(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function cl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ma(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ma(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ll() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Ma(e)) && (r && (r += " "), r += t);
  return r;
}
const Wo = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, $o = ll, Na = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return $o(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (d === null) return null;
    const h = Wo(d) || Wo(f);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, d) => {
    let [f, h] = d;
    return h === void 0 || (l[f] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: f, className: h, ...v } = d;
    return Object.entries(v).every((g) => {
      let [p, y] = g;
      return Array.isArray(y) ? y.includes({
        ...a,
        ...i
      }[p]) : {
        ...a,
        ...i
      }[p] === y;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return $o(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function _a(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = _a(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ul() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _a(e)) && (r && (r += " "), r += t);
  return r;
}
const Vr = "-", dl = (e) => {
  const t = ml(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Vr);
      return i[0] === "" && i.length !== 1 && i.shift(), Oa(i, t) || fl(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const c = n[s] || [];
      return i && r[s] ? [...c, ...r[s]] : c;
    }
  };
}, Oa = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Oa(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Vr);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Yo = /^\[(.+)\]$/, fl = (e) => {
  if (Yo.test(e)) {
    const t = Yo.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ml = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return pl(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Sr(s, r, a, t);
  }), r;
}, Sr = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Vo(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (hl(o)) {
        Sr(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Sr(s, Vo(t, a), n, r);
    });
  });
}, Vo = (e, t) => {
  let n = e;
  return t.split(Vr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, hl = (e) => e.isThemeGetter, pl = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [n, o];
}) : e, vl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}, ka = "!", gl = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, s = (i) => {
    const c = [];
    let l = 0, d = 0, f;
    for (let y = 0; y < i.length; y++) {
      let w = i[y];
      if (l === 0) {
        if (w === o && (r || i.slice(y, y + a) === t)) {
          c.push(i.slice(d, y)), d = y + a;
          continue;
        }
        if (w === "/") {
          f = y;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" && l--;
    }
    const h = c.length === 0 ? i : i.substring(d), v = h.startsWith(ka), g = v ? h.substring(1) : h, p = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: p
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, yl = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, bl = (e) => ({
  cache: vl(e.cacheSize),
  parseClassName: gl(e),
  ...dl(e)
}), xl = /\s+/, wl = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(xl);
  let i = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const l = s[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = n(l);
    let g = !!v, p = r(g ? h.substring(0, v) : h);
    if (!p) {
      if (!g) {
        i = l + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (p = r(h), !p) {
        i = l + (i.length > 0 ? " " + i : i);
        continue;
      }
      g = !1;
    }
    const y = yl(d).join(":"), w = f ? y + ka : y, b = w + p;
    if (a.includes(b))
      continue;
    a.push(b);
    const C = o(p, g);
    for (let S = 0; S < C.length; ++S) {
      const E = C[S];
      a.push(w + E);
    }
    i = l + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Cl() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Da(t)) && (r && (r += " "), r += n);
  return r;
}
const Da = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Da(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Sl(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const l = t.reduce((d, f) => f(d), e());
    return n = bl(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const d = wl(c, n);
    return o(c, d), d;
  }
  return function() {
    return a(Cl.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ja = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pl = /^\d+\/\d+$/, El = /* @__PURE__ */ new Set(["px", "full", "screen"]), Rl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ml = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, _l = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ol = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ge = (e) => Tt(e) || El.has(e) || Pl.test(e), ot = (e) => Yt(e, "length", Ll), Tt = (e) => !!e && !Number.isNaN(Number(e)), er = (e) => Yt(e, "number", Tt), Xt = (e) => !!e && Number.isInteger(Number(e)), kl = (e) => e.endsWith("%") && Tt(e.slice(0, -1)), V = (e) => ja.test(e), at = (e) => Rl.test(e), Dl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), jl = (e) => Yt(e, Dl, Ta), Tl = (e) => Yt(e, "position", Ta), Al = /* @__PURE__ */ new Set(["image", "url"]), Il = (e) => Yt(e, Al, $l), Fl = (e) => Yt(e, "", Wl), Zt = () => !0, Yt = (e, t, n) => {
  const r = ja.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ll = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ml.test(e) && !Nl.test(e)
), Ta = () => !1, Wl = (e) => _l.test(e), $l = (e) => Ol.test(e), Yl = () => {
  const e = ie("colors"), t = ie("spacing"), n = ie("blur"), r = ie("brightness"), o = ie("borderColor"), a = ie("borderRadius"), s = ie("borderSpacing"), i = ie("borderWidth"), c = ie("contrast"), l = ie("grayscale"), d = ie("hueRotate"), f = ie("invert"), h = ie("gap"), v = ie("gradientColorStops"), g = ie("gradientColorStopPositions"), p = ie("inset"), y = ie("margin"), w = ie("opacity"), b = ie("padding"), C = ie("saturate"), S = ie("scale"), E = ie("sepia"), N = ie("skew"), _ = ie("space"), k = ie("translate"), Y = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", V, t], D = () => [V, t], I = () => ["", Ge, ot], A = () => ["auto", Tt, V], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", V], X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ae = () => [Tt, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Zt],
      spacing: [Ge, ot],
      blur: ["none", "", at, V],
      brightness: ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", at, V],
      borderSpacing: D(),
      borderWidth: I(),
      contrast: ae(),
      grayscale: T(),
      hueRotate: ae(),
      invert: T(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kl, ot],
      inset: B(),
      margin: B(),
      opacity: ae(),
      padding: D(),
      saturate: ae(),
      scale: ae(),
      sepia: T(),
      skew: ae(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", V]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [at]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": X()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": X()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), V]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Xt, V]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Xt, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Zt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xt, V]
        }, V]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Zt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xt, V]
        }, V]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...P()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...P(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [V, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [at]
        }, at]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [V, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", at, ot]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", er]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Zt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Tt, er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ge, V]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", V]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ge, ot]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ge, V]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", V]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Tl]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", jl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Il]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ge, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ge, ot]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ge, ot]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", at, Fl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Zt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...R(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": R()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", at, V]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", V]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Xt, V]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", V]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ge, ot, er]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Vl = /* @__PURE__ */ Sl(Yl);
function ce(...e) {
  return Vl(ul(e));
}
const Pr = Na(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-7 w-7 rounded-[50%]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ye = m.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const s = r ? Ct : "button";
    return /* @__PURE__ */ u.jsx(
      s,
      {
        className: ce(Pr({ variant: t, size: n, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
ye.displayName = "Button";
const Br = 300, re = "inline", tr = "global-individual", Xe = "global", Bl = "individual", Bo = "[]";
function Qe(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Hl = ["color"], zl = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, Hl);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Gl = ["color"], Ul = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, Gl);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Kl = ["color"], Aa = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, Kl);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), ql = ["color"], Xl = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, ql);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Zl = ["color"], Jl = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, Zl);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ql = ["color"], eu = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, Ql);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), tu = ["color"], nu = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, tu);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), ru = ["color"], ou = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, ru);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), au = ["color"], su = /* @__PURE__ */ _e(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Qe(e, au);
  return de("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), de("path", {
    d: "M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const pt = ({ path: e }) => {
  const {
    editingMode: t,
    selectedFieldsForEditing: n,
    setSelectedFieldsForEditing: r,
    handleFieldReset: o
  } = Se();
  if (t !== re)
    return null;
  const a = () => {
    n && r && (r((s) => ({
      ...s,
      [e]: !1
    })), o(e));
  };
  return /* @__PURE__ */ u.jsx(
    ye,
    {
      variant: "outline",
      size: "icon",
      title: "Cancel",
      onClick: a,
      children: /* @__PURE__ */ u.jsx(ou, { width: 14, height: 14 })
    }
  );
};
function iu({
  value: e,
  readModeValue: t,
  path: n
}) {
  const [r, o] = he(e), [a, s] = he((e == null ? void 0 : e.filename) || ""), i = jt(null), {
    handleOnChange: c,
    handleOnSubmit: l,
    editingMode: d,
    setSelectedFieldsForEditing: f,
    selectedFieldsForEditing: h
  } = Se(), v = (b) => {
    var E;
    const C = (E = b.target.files) == null ? void 0 : E[0];
    if (!C) {
      const N = {
        type: "file",
        format: null,
        filename: null,
        base64: null
      };
      o(N), s(""), c(N, n);
      return;
    }
    const S = new FileReader();
    S.onload = () => {
      const N = S.result.split(",")[1], _ = {
        type: "file",
        format: C.type,
        filename: C.name,
        base64: N
      };
      o(_), s(C.name), c(_, n);
    }, S.readAsDataURL(C);
  }, g = () => {
    l(r, n), d === re && f((b) => ({
      ...b,
      [n]: !1
    }));
  }, p = () => {
    const b = {
      type: "file",
      format: null,
      filename: null,
      base64: null
    };
    o(b), s(""), c(b, n), i.current && (i.current.value = "");
  }, y = JSON.stringify(t) === JSON.stringify(r), w = h[n];
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: w ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "inline-flex h-9 items-center justify-center rounded-md bg-white text-sm font-medium", children: [
      /* @__PURE__ */ u.jsxs("label", { className: "relative px-2 py-1.5 h-full flex items-center bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer rounded-l-md border-r text-xs whitespace-nowrap", children: [
        "Choose File",
        /* @__PURE__ */ u.jsx(
          "input",
          {
            ref: i,
            type: "file",
            onChange: v,
            className: "hidden"
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("span", { className: "px-2 text-sm text-slate-600 border rounded-r-md border-l-0 h-full flex items-center", children: [
        /* @__PURE__ */ u.jsx("span", { className: "truncate max-w-[150px]", children: a || "No file chosen" }),
        a && /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: p,
            className: "ml-2 text-blue-500 hover:text-blue-700 shrink-0",
            children: "(Clear)"
          }
        )
      ] })
    ] }),
    !y && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        size: "icon",
        className: `${y && "hidden"}`,
        title: "Submit",
        onClick: g,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    /* @__PURE__ */ u.jsx(pt, { path: n })
  ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ u.jsx("span", { className: "text-sm text-slate-600", children: a || "No file chosen" }),
    /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => f((b) => ({
          ...b,
          [n]: !0
        })),
        children: /* @__PURE__ */ u.jsx(rl, { size: 14 })
      }
    )
  ] }) });
}
function cu({
  obj: e,
  path: t,
  renderJson: n,
  isRootLevelKey: r,
  searchText: o
}) {
  return /* @__PURE__ */ u.jsx(
    "ul",
    {
      className: r ? "mt-1.5 collapsible-identifier" : "hidden collapsible-identifier mt-1.5 show",
      children: Object.entries(e).map(([a, s], i) => /* @__PURE__ */ u.jsx(
        lu,
        {
          keyName: a,
          val: s,
          searchText: o,
          children: n(s, t ? `${t}.${a}` : a, !1)
        },
        i
      ))
    }
  );
}
function lu({ keyName: e, val: t, children: n }) {
  const { isExpanded: r } = Se(), o = (a) => {
    a.getAttribute("data-collapse") === "true" ? (a.setAttribute("data-collapse", "false"), a.setAttribute("title", "Collapse")) : (a.setAttribute("data-collapse", "true"), a.setAttribute("title", "Expand"));
  };
  return typeof t == "object" && t !== null ? t.type === "file" ? /* @__PURE__ */ u.jsxs("li", { className: "mb-3 flex items-center gap-2", children: [
    /* @__PURE__ */ u.jsxs("strong", { children: [
      e,
      ":"
    ] }),
    /* @__PURE__ */ u.jsx(
      iu,
      {
        value: t,
        readModeValue: t,
        path: e,
        format: t.format
      }
    )
  ] }) : /* @__PURE__ */ u.jsxs("li", { "aria-hidden": "true", className: "add-collapsible-icon mb-1.5", children: [
    /* @__PURE__ */ u.jsx(
      "span",
      {
        "data-collapse": !r,
        title: "Expand",
        tabIndex: 0,
        onKeyDown: (a) => {
          a.key === "Enter" && o(a.target);
        },
        className: "cursor-pointer inline-block w-5 h-5 leading-5 text-center mr-1.5 bg-gray-200 rounded-full transition-transform duration-300 collapsible-icon",
        onClick: (a) => {
          o(a.target);
        }
      }
    ),
    /* @__PURE__ */ u.jsxs("strong", { children: [
      e,
      ":",
      Array.isArray(t) ? " [ " : " { ",
      /* @__PURE__ */ u.jsx("span", { className: "json-editor-props-count", children: Object.keys(t).length + " props " })
    ] }),
    n,
    /* @__PURE__ */ u.jsx("strong", { children: Array.isArray(t) ? "]" : "}" })
  ] }) : /* @__PURE__ */ u.jsxs("li", { className: "mb-3 flex items-center gap-2", children: [
    /* @__PURE__ */ u.jsxs("strong", { children: [
      e,
      ":"
    ] }),
    n
  ] });
}
function uu({
  arr: e,
  path: t,
  isRootLevelKey: n,
  renderJson: r
}) {
  const { isExpanded: o } = Se(), a = (s) => {
    s.getAttribute("data-collapse") === "true" ? (s.setAttribute("data-collapse", "false"), s.setAttribute("title", "Collapse")) : (s.setAttribute("data-collapse", "true"), s.setAttribute("title", "Expand"));
  };
  return /* @__PURE__ */ u.jsx(
    "ul",
    {
      className: n ? "pl-5 mt-1.5" : "collapsible-identifier hidden pl-5 mt-1.5",
      children: e.map((s, i) => /* @__PURE__ */ u.jsxs(du, { val: s, children: [
        /* @__PURE__ */ u.jsxs(
          "span",
          {
            "data-collapse": !o,
            title: "Expand",
            onClick: (c) => {
              a(c.target);
            },
            tabIndex: 0,
            onKeyDown: (c) => {
              c.key === "Enter" && a(c.target);
            },
            className: "cursor-pointer float-left min-w-2.5 px-2 rounded-sm mr-2 text-[0.9em] text-center bg-gray-200",
            children: [
              i,
              ":"
            ]
          }
        ),
        " ",
        /* @__PURE__ */ u.jsx("span", { className: "float-left mr-1", children: ":" }),
        " ",
        r(s, `${t}.${i}`, !0)
      ] }, i))
    }
  );
}
function du({ val: e, children: t }) {
  return typeof e == "object" && e !== null ? /* @__PURE__ */ u.jsxs("li", { className: "mb-1.5", children: [
    /* @__PURE__ */ u.jsxs("strong", { children: [
      Array.isArray(e) ? "[" : "{",
      /* @__PURE__ */ u.jsx("span", { className: "json-editor-props-count", children: Object.keys(e).length + " props " })
    ] }),
    t,
    /* @__PURE__ */ u.jsx("strong", { children: Array.isArray(e) ? "]," : "}," })
  ] }) : /* @__PURE__ */ u.jsx("li", { className: "mb-3 flex items-center gap-1", children: t });
}
const Hr = m.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: t,
      className: ce(
        "h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Hr.displayName = "Input";
function fu(e) {
  return typeof e.minValue == "number" || typeof e.maxValue == "number";
}
const Cn = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object") return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o of n)
    if (!r.includes(o) || !Cn(e[o], t[o]))
      return !1;
  return !0;
}, Ue = (e) => JSON.parse(JSON.stringify(e)), mu = (e, t) => {
  const r = {
    "DD/MM/YYYY": /^(\d{2})\/(\d{2})\/(\d{4})$/,
    "YYYY/MM/DD": /^(\d{4})\/(\d{2})\/(\d{2})$/,
    "MM/DD/YYYY": /^(\d{2})\/(\d{2})\/(\d{4})$/,
    "DD-MM-YYYY": /^(\d{2})-(\d{2})-(\d{4})$/,
    "YYYY-MM-DD": /^(\d{4})-(\d{2})-(\d{2})$/,
    "MM-DD-YYYY": /^(\d{2})-(\d{2})-(\d{4})$/
  }[t];
  if (!r)
    return console.warn("Unsupported format. Returning null."), null;
  const o = e.match(r);
  if (!o)
    return console.warn("Invalid date string for the provided format. Returning null."), null;
  const [, a, s, i] = o;
  let c, l, d;
  switch (t) {
    case "DD/MM/YYYY":
    case "DD-MM-YYYY":
      d = parseInt(a, 10), l = parseInt(s, 10) - 1, c = parseInt(i, 10);
      break;
    case "YYYY/MM/DD":
    case "YYYY-MM-DD":
      c = parseInt(a, 10), l = parseInt(s, 10) - 1, d = parseInt(i, 10);
      break;
    case "MM/DD/YYYY":
    case "MM-DD-YYYY":
      l = parseInt(a, 10) - 1, d = parseInt(s, 10), c = parseInt(i, 10);
      break;
    default:
      return console.warn("Unsupported format. Returning null."), null;
  }
  return new Date(c, l, d);
}, hu = (e, t) => {
  const n = (s) => s.toString().padStart(2, "0"), r = n(e.getDate()), o = n(e.getMonth() + 1), a = e.getFullYear();
  switch (t) {
    case "DD/MM/YYYY":
      return `${r}/${o}/${a}`;
    case "YYYY/MM/DD":
      return `${a}/${o}/${r}`;
    case "MM/DD/YYYY":
      return `${o}/${r}/${a}`;
    case "DD-MM-YYYY":
      return `${r}-${o}-${a}`;
    case "YYYY-MM-DD":
      return `${a}-${o}-${r}`;
    case "MM-DD-YYYY":
      return `${o}-${r}-${a}`;
    default:
      return console.warn("Unsupported format. Returning null"), null;
  }
}, nr = (e, t, n) => {
  const r = t.split(".");
  let o = e;
  for (let a = 0; a < r.length - 1; a++) {
    let s = r[a];
    if (Array.isArray(o) && !isNaN(Number(s)) && (s = parseInt(s, 10)), o[s] === void 0)
      return;
    o = o[s];
  }
  o && (o[r[r.length - 1]] = n);
}, Ia = (e, t) => {
  const n = t.split(".");
  let r = e;
  for (let o of n)
    if (Array.isArray(r) && !isNaN(Number(o)) ? r = r[parseInt(o, 10)] : r = r[o], r === void 0)
      return;
  return r;
}, Sn = (e, t, n = "", r = {}) => {
  const o = Object.keys(e), a = Object.keys(t);
  return Array.from(/* @__PURE__ */ new Set([...o, ...a])).forEach((i) => {
    const c = n ? `${n}.${i}` : i;
    e[i] && typeof e[i] == "object" && t[i] && typeof t[i] == "object" ? Sn(e[i], t[i], c, r) : e[i] !== t[i] && (r[c] = { initial: e[i], updated: t[i] });
  }), r;
}, zr = (e, t) => {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => {
      e(...r);
    }, t);
  };
}, Gr = (e, t) => {
  if (t.minLength && e.length < t.minLength)
    return t.validationMessage || `Value must be at least ${t.minLength} characters long.`;
  if (t.maxLength && e.length > t.maxLength)
    return t.validationMessage || `Value must be no more than ${t.maxLength} characters long.`;
  if (fu(t)) {
    if (t.maxValue && Number(e) > t.maxValue)
      return t.validationMessage || `Value must be less than ${t.maxValue}.`;
    if (t.minValue && Number(e) < t.minValue)
      return t.validationMessage || `Value must be greater than ${t.minValue}.`;
  }
  return t.regex && !new RegExp(t.regex).test(e) ? t.regexValidationMessage || "Value does not match the required pattern." : null;
}, Ho = (e) => {
  const t = e.replace(/\[\]/g, "\\d+").replace(/\./g, "\\.").replace(/\*/g, ".*");
  return new RegExp(`^${t}$`);
}, pu = (e, t) => {
  const { regexPatterns: n, paths: r } = e.findMatchingRegex(t);
  for (let o = 0; o < n.length; o++)
    if (n[o].test(t))
      return r[o];
  return null;
}, vu = (e) => e.split(".").some((n) => !isNaN(Number(n))), Rt = ({ path: e, callBack: t }) => {
  const {
    editingMode: n,
    handleFieldReset: r
  } = Se();
  if (n === re)
    return null;
  const o = () => {
    r(e), t && t();
  };
  return /* @__PURE__ */ u.jsx(
    ye,
    {
      variant: "outline",
      size: "icon",
      title: "Reset",
      onClick: o,
      children: /* @__PURE__ */ u.jsx(su, { width: 14, height: 14 })
    }
  );
};
function rr({
  value: e,
  readModeValue: t,
  path: n,
  fieldValidations: r
}) {
  const [o, a] = he(e), [s, i] = he(""), {
    handleOnChange: c,
    handleOnSubmit: l,
    editingMode: d,
    setSelectedFieldsForEditing: f,
    validations: h,
    setValidations: v,
    debouncing: g
  } = Se(), p = (S) => {
    const E = S.target.value;
    let N = null;
    r && (N = Gr(E, r), i(N || "")), a(E), y(E, N || "");
  }, y = $r(
    zr((S, E) => {
      const N = {
        ...h,
        [n]: E
      };
      c(S, n, N), r && v((_) => ({
        ..._,
        [n]: E
      }));
    }, g ? Br : 0),
    [c]
  ), w = () => {
    l(o, n), d === re && f((S) => ({
      ...S,
      [n]: !1
    }));
  }, b = t === o, C = s || h[n];
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(Hr, { value: o, onChange: p }),
    d !== Xe && !C && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: b,
        size: "icon",
        className: `${b && "hidden"}`,
        title: "Submit",
        onClick: w,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    d === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    d !== re && !b && /* @__PURE__ */ u.jsx(Rt, { path: n, callBack: () => {
      a(t || ""), i("");
    } }),
    /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: C })
  ] });
}
function zo({
  value: e,
  readModeValue: t,
  path: n,
  fieldValidations: r
}) {
  const [o, a] = he(e), [s, i] = he(""), {
    handleOnChange: c,
    handleOnSubmit: l,
    editingMode: d,
    setSelectedFieldsForEditing: f,
    validations: h,
    setValidations: v,
    debouncing: g
  } = Se(), p = (S) => {
    const E = S.target.value;
    let N = null;
    r && (N = Gr(E, r), i(N || "")), a(E), y(E, N || "");
  }, y = $r(
    zr((S, E) => {
      const N = {
        ...h,
        [n]: E
      };
      c(Number(S), n, N), r && v((_) => ({
        ..._,
        [n]: E
      }));
    }, g ? Br : 0),
    [c]
  ), w = () => {
    l(Number(o), n), d === re && f((S) => ({
      ...S,
      [n]: !1
    }));
  }, b = t === Number(o), C = s || h[n];
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      Hr,
      {
        type: "number",
        value: o,
        onChange: p
      }
    ),
    d !== Xe && !C && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: b,
        size: "icon",
        className: `${b && "hidden"}`,
        title: "Submit",
        onClick: w,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    d === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    d !== re && !b && /* @__PURE__ */ u.jsx(Rt, { path: n, callBack: () => {
      a(t), i("");
    } }),
    /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: C })
  ] });
}
function K(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Re(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  const n = K(e);
  return isNaN(t) ? Re(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function je(e, t) {
  const n = K(e);
  if (isNaN(t)) return Re(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Re(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Ur = 6048e5, gu = 864e5;
let yu = {};
function an() {
  return yu;
}
function Ye(e, t) {
  var i, c, l, d;
  const n = an(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = K(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function St(e) {
  return Ye(e, { weekStartsOn: 1 });
}
function Fa(e) {
  const t = K(e), n = t.getFullYear(), r = Re(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = St(r), a = Re(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = St(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ft(e) {
  const t = K(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Nn(e) {
  const t = K(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function $e(e, t) {
  const n = Ft(e), r = Ft(t), o = +n - Nn(n), a = +r - Nn(r);
  return Math.round((o - a) / gu);
}
function bu(e) {
  const t = Fa(e), n = Re(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), St(n);
}
function Er(e, t) {
  const n = t * 7;
  return ge(e, n);
}
function xu(e, t) {
  return je(e, t * 12);
}
function wu(e) {
  let t;
  return e.forEach(function(n) {
    const r = K(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Cu(e) {
  let t;
  return e.forEach((n) => {
    const r = K(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function we(e, t) {
  const n = Ft(e), r = Ft(t);
  return +n == +r;
}
function Kr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Su(e) {
  if (!Kr(e) && typeof e != "number")
    return !1;
  const t = K(e);
  return !isNaN(Number(t));
}
function tn(e, t) {
  const n = K(e), r = K(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function Pu(e, t, n) {
  const r = Ye(e, n), o = Ye(t, n), a = +r - Nn(r), s = +o - Nn(o);
  return Math.round((a - s) / Ur);
}
function qr(e) {
  const t = K(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ce(e) {
  const t = K(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function La(e) {
  const t = K(e), n = Re(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Xr(e, t) {
  var i, c, l, d;
  const n = an(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = K(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Wa(e) {
  return Xr(e, { weekStartsOn: 1 });
}
const Eu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ru = (e, t, n) => {
  let r;
  const o = Eu[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function or(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Mu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Nu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _u = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ou = {
  date: or({
    formats: Mu,
    defaultWidth: "full"
  }),
  time: or({
    formats: Nu,
    defaultWidth: "full"
  }),
  dateTime: or({
    formats: _u,
    defaultWidth: "full"
  })
}, ku = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Du = (e, t, n, r) => ku[e];
function Jt(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const ju = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Tu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Au = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
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
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Iu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Fu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Lu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Wu = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, $u = {
  ordinalNumber: Wu,
  era: Jt({
    values: ju,
    defaultWidth: "wide"
  }),
  quarter: Jt({
    values: Tu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Jt({
    values: Au,
    defaultWidth: "wide"
  }),
  day: Jt({
    values: Iu,
    defaultWidth: "wide"
  }),
  dayPeriod: Jt({
    values: Fu,
    defaultWidth: "wide",
    formattingValues: Lu,
    defaultFormattingWidth: "wide"
  })
};
function Qt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Vu(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Yu(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(l)
    ) : l;
    const d = t.slice(s.length);
    return { value: l, rest: d };
  };
}
function Yu(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Vu(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Bu(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const Hu = /^(\d+)(th|st|nd|rd)?/i, zu = /\d+/i, Gu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Uu = {
  any: [/^b/i, /^(a|c)/i]
}, Ku = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zu = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ju = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Qu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ed = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, td = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, nd = {
  ordinalNumber: Bu({
    matchPattern: Hu,
    parsePattern: zu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Qt({
    matchPatterns: Gu,
    defaultMatchWidth: "wide",
    parsePatterns: Uu,
    defaultParseWidth: "any"
  }),
  quarter: Qt({
    matchPatterns: Ku,
    defaultMatchWidth: "wide",
    parsePatterns: qu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Qt({
    matchPatterns: Xu,
    defaultMatchWidth: "wide",
    parsePatterns: Zu,
    defaultParseWidth: "any"
  }),
  day: Qt({
    matchPatterns: Ju,
    defaultMatchWidth: "wide",
    parsePatterns: Qu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Qt({
    matchPatterns: ed,
    defaultMatchWidth: "any",
    parsePatterns: td,
    defaultParseWidth: "any"
  })
}, $a = {
  code: "en-US",
  formatDistance: Ru,
  formatLong: Ou,
  formatRelative: Du,
  localize: $u,
  match: nd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function rd(e) {
  const t = K(e);
  return $e(t, La(t)) + 1;
}
function Ya(e) {
  const t = K(e), n = +St(t) - +bu(t);
  return Math.round(n / Ur) + 1;
}
function Va(e, t) {
  var d, f, h, v;
  const n = K(e), r = n.getFullYear(), o = an(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Re(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Ye(s, t), c = Re(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = Ye(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function od(e, t) {
  var i, c, l, d;
  const n = an(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Va(e, t), a = Re(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Ye(a, t);
}
function Ba(e, t) {
  const n = K(e), r = +Ye(n, t) - +od(n, t);
  return Math.round(r / Ur) + 1;
}
function ne(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const st = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ne(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ne(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ne(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ne(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ne(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ne(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ne(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ne(o, t.length);
  }
}, _t = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Go = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return st.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Va(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return ne(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ne(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Fa(e);
    return ne(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ne(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ne(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ne(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return st.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ne(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Ba(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ne(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ya(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ne(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : st.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = rd(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ne(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return ne(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return ne(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ne(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = _t.noon : r === 0 ? o = _t.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = _t.evening : r >= 12 ? o = _t.afternoon : r >= 4 ? o = _t.morning : o = _t.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return st.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : st.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ne(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ne(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : st.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : st.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return st.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ko(r);
      case "XXXX":
      case "XX":
        return wt(r);
      case "XXXXX":
      case "XXX":
      default:
        return wt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ko(r);
      case "xxxx":
      case "xx":
        return wt(r);
      case "xxxxx":
      case "xxx":
      default:
        return wt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Uo(r, ":");
      case "OOOO":
      default:
        return "GMT" + wt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Uo(r, ":");
      case "zzzz":
      default:
        return "GMT" + wt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ne(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ne(r, t.length);
  }
};
function Uo(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ne(a, 2);
}
function Ko(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ne(Math.abs(e) / 60, 2) : wt(e, t);
}
function wt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ne(Math.trunc(r / 60), 2), a = ne(r % 60, 2);
  return n + o + t + a;
}
const qo = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Ha = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, ad = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return qo(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", qo(r, t)).replace("{{time}}", Ha(o, t));
}, sd = {
  p: Ha,
  P: ad
}, id = /^D+$/, cd = /^Y+$/, ld = ["D", "DD", "YY", "YYYY"];
function ud(e) {
  return id.test(e);
}
function dd(e) {
  return cd.test(e);
}
function fd(e, t, n) {
  const r = md(e, t, n);
  if (console.warn(r), ld.includes(e)) throw new RangeError(r);
}
function md(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const hd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vd = /^'([^]*?)'?$/, gd = /''/g, yd = /[a-zA-Z]/;
function vt(e, t, n) {
  var d, f, h, v, g, p, y, w;
  const r = an(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? $a, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((w = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = K(e);
  if (!Su(i))
    throw new RangeError("Invalid time value");
  let c = t.match(pd).map((b) => {
    const C = b[0];
    if (C === "p" || C === "P") {
      const S = sd[C];
      return S(b, o.formatLong);
    }
    return b;
  }).join("").match(hd).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const C = b[0];
    if (C === "'")
      return { isToken: !1, value: bd(b) };
    if (Go[C])
      return { isToken: !0, value: b };
    if (C.match(yd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const C = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && dd(C) || !(n != null && n.useAdditionalDayOfYearTokens) && ud(C)) && fd(C, t, String(e));
    const S = Go[C[0]];
    return S(i, C, o.localize, l);
  }).join("");
}
function bd(e) {
  const t = e.match(vd);
  return t ? t[1].replace(gd, "'") : e;
}
function xd(e) {
  const t = K(e), n = t.getFullYear(), r = t.getMonth(), o = Re(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function wd(e) {
  return Math.trunc(+K(e) / 1e3);
}
function Cd(e) {
  const t = K(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Sd(e, t) {
  return Pu(
    Cd(e),
    Ce(e),
    t
  ) + 1;
}
function Rr(e, t) {
  const n = K(e), r = K(t);
  return n.getTime() > r.getTime();
}
function za(e, t) {
  const n = K(e), r = K(t);
  return +n < +r;
}
function Zr(e, t) {
  const n = K(e), r = K(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Pd(e, t) {
  const n = K(e), r = K(t);
  return n.getFullYear() === r.getFullYear();
}
function ar(e, t) {
  return ge(e, -t);
}
function sr(e, t) {
  const n = K(e), r = n.getFullYear(), o = n.getDate(), a = Re(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = xd(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Xo(e, t) {
  const n = K(e);
  return isNaN(+n) ? Re(e, NaN) : (n.setFullYear(t), n);
}
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, L.apply(this, arguments);
};
function Ed(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ga(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function sn(e) {
  return e.mode === "multiple";
}
function cn(e) {
  return e.mode === "range";
}
function In(e) {
  return e.mode === "single";
}
var Rd = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function Md(e, t) {
  return vt(e, "LLLL y", t);
}
function Nd(e, t) {
  return vt(e, "d", t);
}
function _d(e, t) {
  return vt(e, "LLLL", t);
}
function Od(e) {
  return "".concat(e);
}
function kd(e, t) {
  return vt(e, "cccccc", t);
}
function Dd(e, t) {
  return vt(e, "yyyy", t);
}
var jd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Md,
  formatDay: Nd,
  formatMonthCaption: _d,
  formatWeekNumber: Od,
  formatWeekdayName: kd,
  formatYearCaption: Dd
}), Td = function(e, t, n) {
  return vt(e, "do MMMM (EEEE)", n);
}, Ad = function() {
  return "Month: ";
}, Id = function() {
  return "Go to next month";
}, Fd = function() {
  return "Go to previous month";
}, Ld = function(e, t) {
  return vt(e, "cccc", t);
}, Wd = function(e) {
  return "Week n. ".concat(e);
}, $d = function() {
  return "Year: ";
}, Yd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Td,
  labelMonthDropdown: Ad,
  labelNext: Id,
  labelPrevious: Fd,
  labelWeekNumber: Wd,
  labelWeekday: Ld,
  labelYearDropdown: $d
});
function Vd() {
  var e = "buttons", t = Rd, n = $a, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: jd,
    labels: Yd,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Bd(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ce(r) : t && (a = new Date(t, 0, 1)), o ? s = qr(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Ft(a) : void 0,
    toDate: s ? Ft(s) : void 0
  };
}
var Ua = ft(void 0);
function Hd(e) {
  var t, n = e.initialProps, r = Vd(), o = Bd(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (In(n) || sn(n) || cn(n)) && (c = n.onSelect);
  var l = L(L(L({}, r), n), { captionLayout: i, classNames: L(L({}, r.classNames), n.classNames), components: L({}, n.components), formatters: L(L({}, r.formatters), n.formatters), fromDate: a, labels: L(L({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: L(L({}, r.modifiers), n.modifiers), modifiersClassNames: L(L({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: L(L({}, r.styles), n.styles), toDate: s });
  return u.jsx(Ua.Provider, { value: l, children: e.children });
}
function se() {
  var e = mt(Ua);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Ka(e) {
  var t = se(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function zd(e) {
  return u.jsx("svg", L({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function qa(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = se(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : zd;
  return u.jsxs("div", { className: i, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [s, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function Gd(e) {
  var t, n = se(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var f = [];
  if (Pd(r, o))
    for (var h = Ce(r), v = r.getMonth(); v <= o.getMonth(); v++)
      f.push(sr(h, v));
  else
    for (var h = Ce(/* @__PURE__ */ new Date()), v = 0; v <= 11; v++)
      f.push(sr(h, v));
  var g = function(y) {
    var w = Number(y.target.value), b = sr(Ce(e.displayMonth), w);
    e.onChange(b);
  }, p = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : qa;
  return u.jsx(p, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: g, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(y) {
    return u.jsx("option", { value: y.getMonth(), children: i(y, { locale: s }) }, y.getMonth());
  }) });
}
function Ud(e) {
  var t, n = e.displayMonth, r = se(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, h = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var v = o.getFullYear(), g = a.getFullYear(), p = v; p <= g; p++)
    h.push(Xo(La(/* @__PURE__ */ new Date()), p));
  var y = function(b) {
    var C = Xo(Ce(n), Number(b.target.value));
    e.onChange(C);
  }, w = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : qa;
  return u.jsx(w, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: y, value: n.getFullYear(), caption: d(n, { locale: s }), children: h.map(function(b) {
    return u.jsx("option", { value: b.getFullYear(), children: d(b, { locale: s }) }, b.getFullYear());
  }) });
}
function Kd(e, t) {
  var n = he(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function qd(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && tn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = je(a, l);
  }
  return s && tn(o, s) < 0 && (o = s), Ce(o);
}
function Xd() {
  var e = se(), t = qd(e), n = Kd(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Ce(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Zd(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ce(e), a = Ce(je(o, r)), s = tn(a, o), i = [], c = 0; c < s; c++) {
    var l = je(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function Jd(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ce(e);
    if (!n)
      return je(i, s);
    var c = tn(n, e);
    if (!(c < a))
      return je(i, s);
  }
}
function Qd(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ce(e);
    if (!n)
      return je(i, -s);
    var c = tn(i, n);
    if (!(c <= 0))
      return je(i, -s);
  }
}
var Xa = ft(void 0);
function ef(e) {
  var t = se(), n = Xd(), r = n[0], o = n[1], a = Zd(r, t), s = Jd(r, t), i = Qd(r, t), c = function(f) {
    return a.some(function(h) {
      return Zr(f, h);
    });
  }, l = function(f, h) {
    c(f) || (h && za(f, h) ? o(je(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return u.jsx(Xa.Provider, { value: d, children: e.children });
}
function ln() {
  var e = mt(Xa);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Zo(e) {
  var t, n = se(), r = n.classNames, o = n.styles, a = n.components, s = ln().goToMonth, i = function(d) {
    s(je(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Ka, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: r.vhidden, children: l }), u.jsx(Gd, { onChange: i, displayMonth: e.displayMonth }), u.jsx(Ud, { onChange: i, displayMonth: e.displayMonth })] });
}
function tf(e) {
  return u.jsx("svg", L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function nf(e) {
  return u.jsx("svg", L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var _n = _e(function(e, t) {
  var n = se(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = L(L({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), u.jsx("button", L({}, e, { ref: t, type: "button", className: s, style: i }));
});
function rf(e) {
  var t, n, r = se(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var h = l(e.previousMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), g = d(e.nextMonth, { locale: a }), p = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), y = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : nf, w = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : tf;
  return u.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && u.jsx(_n, { name: "previous-month", "aria-label": h, className: v, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(y, { className: s.nav_icon, style: i.nav_icon }) : u.jsx(w, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && u.jsx(_n, { name: "next-month", "aria-label": g, className: p, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(w, { className: s.nav_icon, style: i.nav_icon }) : u.jsx(y, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Jo(e) {
  var t = se().numberOfMonths, n = ln(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(g) {
    return Zr(e.displayMonth, g);
  }), c = i === 0, l = i === s.length - 1, d = t > 1 && (c || !l), f = t > 1 && (l || !c), h = function() {
    r && a(r);
  }, v = function() {
    o && a(o);
  };
  return u.jsx(rf, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: h, onNextClick: v });
}
function of(e) {
  var t, n = se(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Ka, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = u.jsx(Zo, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(Zo, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(Jo, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Jo, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: r.caption, style: a.caption, children: l });
}
function af(e) {
  var t = se(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? u.jsx("tfoot", { className: o, style: r.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: n }) }) }) : u.jsx(u.Fragment, {});
}
function sf(e, t, n) {
  for (var r = n ? St(/* @__PURE__ */ new Date()) : Ye(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = ge(r, a);
    o.push(s);
  }
  return o;
}
function cf() {
  var e = se(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = sf(o, a, s);
  return u.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && u.jsx("td", { style: n.head_cell, className: t.head_cell }), l.map(function(d, f) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: i(d, { locale: o }) }, f);
  })] });
}
function lf() {
  var e, t = se(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : cf;
  return u.jsx("thead", { style: r.head, className: n.head, children: u.jsx(a, {}) });
}
function uf(e) {
  var t = se(), n = t.locale, r = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: r(e.date, { locale: n }) });
}
var Jr = ft(void 0);
function df(e) {
  if (!sn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(Jr.Provider, { value: t, children: e.children });
  }
  return u.jsx(ff, { initialProps: e.initialProps, children: e.children });
}
function ff(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, d, f) {
    var h, v;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, l, d, f);
    var g = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!g) {
      var p = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!p) {
        var y = r ? Ga([], r) : [];
        if (d.selected) {
          var w = y.findIndex(function(b) {
            return we(l, b);
          });
          y.splice(w, 1);
        } else
          y.push(l);
        (v = t.onSelect) === null || v === void 0 || v.call(t, y, l, d, f);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var d = a && r.length > a - 1, f = r.some(function(h) {
      return we(h, l);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return u.jsx(Jr.Provider, { value: c, children: n });
}
function Qr() {
  var e = mt(Jr);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function mf(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? we(o, e) && we(r, e) ? void 0 : we(o, e) ? { from: o, to: void 0 } : we(r, e) ? void 0 : Rr(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Rr(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? za(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var eo = ft(void 0);
function hf(e) {
  if (!cn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(eo.Provider, { value: t, children: e.children });
  }
  return u.jsx(pf, { initialProps: e.initialProps, children: e.children });
}
function pf(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(v, g, p) {
    var y, w;
    (y = t.onDayClick) === null || y === void 0 || y.call(t, v, g, p);
    var b = mf(v, r);
    (w = t.onSelect) === null || w === void 0 || w.call(t, b, v, g, p);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], s ? (d.range_end = [s], we(a, s) || (d.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : d.range_end = [a]) : s && (d.range_start = [s], d.range_end = [s]), i && (a && !s && d.disabled.push({
    after: ar(a, i - 1),
    before: ge(a, i - 1)
  }), a && s && d.disabled.push({
    after: a,
    before: ge(a, i - 1)
  }), !a && s && d.disabled.push({
    after: ar(s, i - 1),
    before: ge(s, i - 1)
  })), c) {
    if (a && !s && (d.disabled.push({
      before: ge(a, -c + 1)
    }), d.disabled.push({
      after: ge(a, c - 1)
    })), a && s) {
      var f = $e(s, a) + 1, h = c - f;
      d.disabled.push({
        before: ar(a, h)
      }), d.disabled.push({
        after: ge(s, h)
      });
    }
    !a && s && (d.disabled.push({
      before: ge(s, -c + 1)
    }), d.disabled.push({
      after: ge(s, c - 1)
    }));
  }
  return u.jsx(eo.Provider, { value: { selected: r, onDayClick: l, modifiers: d }, children: n });
}
function to() {
  var e = mt(eo);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Pn(e) {
  return Array.isArray(e) ? Ga([], e) : e !== void 0 ? [e] : [];
}
function vf(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Pn(o);
  }), t;
}
var Te;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Te || (Te = {}));
var gf = Te.Selected, Ke = Te.Disabled, yf = Te.Hidden, bf = Te.Today, ir = Te.RangeEnd, cr = Te.RangeMiddle, lr = Te.RangeStart, xf = Te.Outside;
function wf(e, t, n) {
  var r, o = (r = {}, r[gf] = Pn(e.selected), r[Ke] = Pn(e.disabled), r[yf] = Pn(e.hidden), r[bf] = [e.today], r[ir] = [], r[cr] = [], r[lr] = [], r[xf] = [], r);
  return e.fromDate && o[Ke].push({ before: e.fromDate }), e.toDate && o[Ke].push({ after: e.toDate }), sn(e) ? o[Ke] = o[Ke].concat(t.modifiers[Ke]) : cn(e) && (o[Ke] = o[Ke].concat(n.modifiers[Ke]), o[lr] = n.modifiers[lr], o[cr] = n.modifiers[cr], o[ir] = n.modifiers[ir]), o;
}
var Za = ft(void 0);
function Cf(e) {
  var t = se(), n = Qr(), r = to(), o = wf(t, n, r), a = vf(t.modifiers), s = L(L({}, o), a);
  return u.jsx(Za.Provider, { value: s, children: e.children });
}
function Ja() {
  var e = mt(Za);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Sf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Pf(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ef(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Rf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Mf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Nf(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = $e(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = $e(e, r) >= 0 && $e(o, e) >= 0;
    return s;
  }
  return o ? we(o, e) : r ? we(r, e) : !1;
}
function _f(e) {
  return Kr(e);
}
function Of(e) {
  return Array.isArray(e) && e.every(Kr);
}
function kf(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (_f(n))
      return we(e, n);
    if (Of(n))
      return n.includes(e);
    if (Pf(n))
      return Nf(e, n);
    if (Mf(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Sf(n)) {
      var r = $e(n.before, e), o = $e(n.after, e), a = r > 0, s = o < 0, i = Rr(n.before, n.after);
      return i ? s && a : a || s;
    }
    return Ef(n) ? $e(e, n.after) > 0 : Rf(n) ? $e(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function no(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return kf(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Zr(e, n) && (o.outside = !0), o;
}
function Df(e, t) {
  for (var n = Ce(e[0]), r = qr(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = no(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = ge(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = ge(s, 1);
  }
  return a || o;
}
var jf = 365;
function Qa(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, f = o.locale, h = {
    day: ge,
    week: Er,
    month: je,
    year: xu,
    startOfWeek: function(y) {
      return o.ISOWeek ? St(y) : Ye(y, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(y) {
      return o.ISOWeek ? Wa(y) : Xr(y, { locale: f, weekStartsOn: c });
    }
  }, v = h[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? v = wu([l, v]) : r === "after" && d && (v = Cu([d, v]));
  var g = !0;
  if (a) {
    var p = no(v, a);
    g = !p.disabled && !p.hidden;
  }
  return g ? v : i.count > jf ? i.lastFocused : Qa(v, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: L(L({}, i), { count: i.count + 1 })
  });
}
var es = ft(void 0);
function Tf(e) {
  var t = ln(), n = Ja(), r = he(), o = r[0], a = r[1], s = he(), i = s[0], c = s[1], l = Df(t.displayMonths, n), d = o ?? (i && t.isDateDisplayed(i)) ? i : l, f = function() {
    c(o), a(void 0);
  }, h = function(y) {
    a(y);
  }, v = se(), g = function(y, w) {
    if (o) {
      var b = Qa(o, {
        moveBy: y,
        direction: w,
        context: v,
        modifiers: n
      });
      we(o, b) || (t.goToDate(b, o), h(b));
    }
  }, p = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: h,
    focusDayAfter: function() {
      return g("day", "after");
    },
    focusDayBefore: function() {
      return g("day", "before");
    },
    focusWeekAfter: function() {
      return g("week", "after");
    },
    focusWeekBefore: function() {
      return g("week", "before");
    },
    focusMonthBefore: function() {
      return g("month", "before");
    },
    focusMonthAfter: function() {
      return g("month", "after");
    },
    focusYearBefore: function() {
      return g("year", "before");
    },
    focusYearAfter: function() {
      return g("year", "after");
    },
    focusStartOfWeek: function() {
      return g("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return g("endOfWeek", "after");
    }
  };
  return u.jsx(es.Provider, { value: p, children: e.children });
}
function ro() {
  var e = mt(es);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Af(e, t) {
  var n = Ja(), r = no(e, n, t);
  return r;
}
var oo = ft(void 0);
function If(e) {
  if (!In(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(oo.Provider, { value: t, children: e.children });
  }
  return u.jsx(Ff, { initialProps: e.initialProps, children: e.children });
}
function Ff(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return u.jsx(oo.Provider, { value: o, children: n });
}
function ts() {
  var e = mt(oo);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Lf(e, t) {
  var n = se(), r = ts(), o = Qr(), a = to(), s = ro(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, d = s.focusWeekBefore, f = s.blur, h = s.focus, v = s.focusMonthBefore, g = s.focusMonthAfter, p = s.focusYearBefore, y = s.focusYearAfter, w = s.focusStartOfWeek, b = s.focusEndOfWeek, C = function(R) {
    var P, T, X, ae;
    In(n) ? (P = r.onDayClick) === null || P === void 0 || P.call(r, e, t, R) : sn(n) ? (T = o.onDayClick) === null || T === void 0 || T.call(o, e, t, R) : cn(n) ? (X = a.onDayClick) === null || X === void 0 || X.call(a, e, t, R) : (ae = n.onDayClick) === null || ae === void 0 || ae.call(n, e, t, R);
  }, S = function(R) {
    var P;
    h(e), (P = n.onDayFocus) === null || P === void 0 || P.call(n, e, t, R);
  }, E = function(R) {
    var P;
    f(), (P = n.onDayBlur) === null || P === void 0 || P.call(n, e, t, R);
  }, N = function(R) {
    var P;
    (P = n.onDayMouseEnter) === null || P === void 0 || P.call(n, e, t, R);
  }, _ = function(R) {
    var P;
    (P = n.onDayMouseLeave) === null || P === void 0 || P.call(n, e, t, R);
  }, k = function(R) {
    var P;
    (P = n.onDayPointerEnter) === null || P === void 0 || P.call(n, e, t, R);
  }, Y = function(R) {
    var P;
    (P = n.onDayPointerLeave) === null || P === void 0 || P.call(n, e, t, R);
  }, $ = function(R) {
    var P;
    (P = n.onDayTouchCancel) === null || P === void 0 || P.call(n, e, t, R);
  }, B = function(R) {
    var P;
    (P = n.onDayTouchEnd) === null || P === void 0 || P.call(n, e, t, R);
  }, D = function(R) {
    var P;
    (P = n.onDayTouchMove) === null || P === void 0 || P.call(n, e, t, R);
  }, I = function(R) {
    var P;
    (P = n.onDayTouchStart) === null || P === void 0 || P.call(n, e, t, R);
  }, A = function(R) {
    var P;
    (P = n.onDayKeyUp) === null || P === void 0 || P.call(n, e, t, R);
  }, H = function(R) {
    var P;
    switch (R.key) {
      case "ArrowLeft":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        R.preventDefault(), R.stopPropagation(), l();
        break;
      case "ArrowUp":
        R.preventDefault(), R.stopPropagation(), d();
        break;
      case "PageUp":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? p() : v();
        break;
      case "PageDown":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? y() : g();
        break;
      case "Home":
        R.preventDefault(), R.stopPropagation(), w();
        break;
      case "End":
        R.preventDefault(), R.stopPropagation(), b();
        break;
    }
    (P = n.onDayKeyDown) === null || P === void 0 || P.call(n, e, t, R);
  }, j = {
    onClick: C,
    onFocus: S,
    onBlur: E,
    onKeyDown: H,
    onKeyUp: A,
    onMouseEnter: N,
    onMouseLeave: _,
    onPointerEnter: k,
    onPointerLeave: Y,
    onTouchCancel: $,
    onTouchEnd: B,
    onTouchMove: D,
    onTouchStart: I
  };
  return j;
}
function Wf() {
  var e = se(), t = ts(), n = Qr(), r = to(), o = In(e) ? t.selected : sn(e) ? n.selected : cn(e) ? r.selected : void 0;
  return o;
}
function $f(e) {
  return Object.values(Te).includes(e);
}
function Yf(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if ($f(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Vf(e, t) {
  var n = L({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = L(L({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Bf(e, t, n) {
  var r, o, a, s = se(), i = ro(), c = Af(e, t), l = Lf(e, c), d = Wf(), f = !!(s.onDayClick || s.mode !== "default");
  on(function() {
    var N;
    c.outside || i.focusedDay && f && we(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var h = Yf(s, c).join(" "), v = Vf(s, c), g = !!(c.outside && !s.showOutsideDays || c.hidden), p = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : uf, y = u.jsx(p, { date: e, displayMonth: t, activeModifiers: c }), w = {
    style: v,
    className: h,
    children: y,
    role: "gridcell"
  }, b = i.focusTarget && we(i.focusTarget, e) && !c.outside, C = i.focusedDay && we(i.focusedDay, e), S = L(L(L({}, w), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = C || b ? 0 : -1, r)), l), E = {
    isButton: f,
    isHidden: g,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: S,
    divProps: w
  };
  return E;
}
function Hf(e) {
  var t = jt(null), n = Bf(e.date, e.displayMonth, t);
  return n.isHidden ? u.jsx("div", { role: "gridcell" }) : n.isButton ? u.jsx(_n, L({ name: "day", ref: t }, n.buttonProps)) : u.jsx("div", L({}, n.divProps));
}
function zf(e) {
  var t = e.number, n = e.dates, r = se(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: i });
  if (!o)
    return u.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: d });
  var f = c(Number(t), { locale: i }), h = function(v) {
    o(t, n, v);
  };
  return u.jsx(_n, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: h, children: d });
}
function Gf(e) {
  var t, n, r = se(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : Hf, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : zf, d;
  return s && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(f) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: f }) }, wd(f));
  })] });
}
function Qo(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Wa(t) : Xr(t, n), o = n != null && n.ISOWeek ? St(e) : Ye(e, n), a = $e(r, o), s = [], i = 0; i <= a; i++)
    s.push(ge(o, i));
  var c = s.reduce(function(l, d) {
    var f = n != null && n.ISOWeek ? Ya(d) : Ba(d, n), h = l.find(function(v) {
      return v.weekNumber === f;
    });
    return h ? (h.dates.push(d), l) : (l.push({
      weekNumber: f,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function Uf(e, t) {
  var n = Qo(Ce(e), qr(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Sd(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Er(a, 6 - r), i = Qo(Er(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Kf(e) {
  var t, n, r, o = se(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, f = o.weekStartsOn, h = o.firstWeekContainsDate, v = o.ISOWeek, g = Uf(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: v,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: h
  }), p = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : lf, y = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : Gf, w = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : af;
  return u.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(p, {}), u.jsx("tbody", { className: s.tbody, style: i.tbody, children: g.map(function(b) {
    return u.jsx(y, { displayMonth: e.displayMonth, dates: b.dates, weekNumber: b.weekNumber }, b.weekNumber);
  }) }), u.jsx(w, { displayMonth: e.displayMonth })] });
}
function qf() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Xf = qf() ? Pa : on, ur = !1, Zf = 0;
function ea() {
  return "react-day-picker-".concat(++Zf);
}
function Jf(e) {
  var t, n = e ?? (ur ? ea() : null), r = he(n), o = r[0], a = r[1];
  return Xf(function() {
    o === null && a(ea());
  }, []), on(function() {
    ur === !1 && (ur = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Qf(e) {
  var t, n, r = se(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = ln().displayMonths, l = Jf(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], h = s.month, v = e.displayIndex === 0, g = e.displayIndex === c.length - 1, p = !v && !g;
  o === "rtl" && (t = [v, g], g = t[0], v = t[1]), v && (f.push(a.caption_start), h = L(L({}, h), s.caption_start)), g && (f.push(a.caption_end), h = L(L({}, h), s.caption_end)), p && (f.push(a.caption_between), h = L(L({}, h), s.caption_between));
  var y = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : of;
  return u.jsxs("div", { className: f.join(" "), style: h, children: [u.jsx(y, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Kf, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function em(e) {
  var t = se(), n = t.classNames, r = t.styles;
  return u.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function tm(e) {
  var t, n, r = e.initialProps, o = se(), a = ro(), s = ln(), i = he(!1), c = i[0], l = i[1];
  on(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var f = L(L({}, o.styles.root), o.style), h = Object.keys(r).filter(function(g) {
    return g.startsWith("data-");
  }).reduce(function(g, p) {
    var y;
    return L(L({}, g), (y = {}, y[p] = r[p], y));
  }, {}), v = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : em;
  return u.jsx("div", L({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, h, { children: u.jsx(v, { children: s.displayMonths.map(function(g, p) {
    return u.jsx(Qf, { displayIndex: p, displayMonth: g }, p);
  }) }) }));
}
function nm(e) {
  var t = e.children, n = Ed(e, ["children"]);
  return u.jsx(Hd, { initialProps: n, children: u.jsx(ef, { children: u.jsx(If, { initialProps: n, children: u.jsx(df, { initialProps: n, children: u.jsx(hf, { initialProps: n, children: u.jsx(Cf, { children: u.jsx(Tf, { children: t }) }) }) }) }) }) });
}
function rm(e) {
  return u.jsx(nm, L({}, e, { children: u.jsx(tm, { initialProps: e }) }));
}
function ns({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    rm,
    {
      showOutsideDays: n,
      className: ce("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: ce(
          Pr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: ce(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: ce(
          Pr({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ u.jsx(Jl, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ u.jsx(eu, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
ns.displayName = "Calendar";
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function un(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), c = n.length;
    n = [...n, s];
    const l = (f) => {
      var w;
      const { scope: h, children: v, ...g } = f, p = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[c]) || i, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(p.Provider, { value: y, children: v });
    };
    l.displayName = a + "Provider";
    function d(f, h) {
      var p;
      const v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[c]) || i, g = m.useContext(v);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const o = () => {
    const a = n.map((s) => m.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, om(o, ...t)];
}
function om(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var am = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], q = am.reduce((e, t) => {
  const n = m.forwardRef((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Ct : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(i, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function sm(e, t) {
  e && An.flushSync(() => e.dispatchEvent(t));
}
function Ve(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function im(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var cm = "DismissableLayer", Mr = "dismissableLayer.update", lm = "dismissableLayer.pointerDownOutside", um = "dismissableLayer.focusOutside", ta, rs = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ao = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...c
    } = e, l = m.useContext(rs), [d, f] = m.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), g = le(t, (_) => f(_)), p = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = p.indexOf(y), b = d ? p.indexOf(d) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, E = mm((_) => {
      const k = _.target, Y = [...l.branches].some(($) => $.contains(k));
      !S || Y || (o == null || o(_), s == null || s(_), _.defaultPrevented || i == null || i());
    }, h), N = hm((_) => {
      const k = _.target;
      [...l.branches].some(($) => $.contains(k)) || (a == null || a(_), s == null || s(_), _.defaultPrevented || i == null || i());
    }, h);
    return im((_) => {
      b === l.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && i && (_.preventDefault(), i()));
    }, h), m.useEffect(() => {
      if (d)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ta = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), na(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ta);
        };
    }, [d, h, n, l]), m.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), na());
    }, [d, l]), m.useEffect(() => {
      const _ = () => v({});
      return document.addEventListener(Mr, _), () => document.removeEventListener(Mr, _);
    }, []), /* @__PURE__ */ u.jsx(
      q.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
ao.displayName = cm;
var dm = "DismissableLayerBranch", fm = m.forwardRef((e, t) => {
  const n = m.useContext(rs), r = m.useRef(null), o = le(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(q.div, { ...e, ref: o });
});
fm.displayName = dm;
function mm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          os(
            lm,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function hm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && os(um, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function na() {
  const e = new CustomEvent(Mr);
  document.dispatchEvent(e);
}
function os(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sm(o, a) : o.dispatchEvent(a);
}
var dr = 0;
function as() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ra()), document.body.insertAdjacentElement("beforeend", e[1] ?? ra()), dr++, () => {
      dr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), dr--;
    };
  }, []);
}
function ra() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var fr = "focusScope.autoFocusOnMount", mr = "focusScope.autoFocusOnUnmount", oa = { bubbles: !1, cancelable: !0 }, pm = "FocusScope", so = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = m.useState(null), l = Ve(o), d = Ve(a), f = m.useRef(null), h = le(t, (p) => c(p)), v = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let p = function(C) {
        if (v.paused || !i) return;
        const S = C.target;
        i.contains(S) ? f.current = S : it(f.current, { select: !0 });
      }, y = function(C) {
        if (v.paused || !i) return;
        const S = C.relatedTarget;
        S !== null && (i.contains(S) || it(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && it(i);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, i, v.paused]), m.useEffect(() => {
    if (i) {
      sa.add(v);
      const p = document.activeElement;
      if (!i.contains(p)) {
        const w = new CustomEvent(fr, oa);
        i.addEventListener(fr, l), i.dispatchEvent(w), w.defaultPrevented || (vm(wm(ss(i)), { select: !0 }), document.activeElement === p && it(i));
      }
      return () => {
        i.removeEventListener(fr, l), setTimeout(() => {
          const w = new CustomEvent(mr, oa);
          i.addEventListener(mr, d), i.dispatchEvent(w), w.defaultPrevented || it(p ?? document.body, { select: !0 }), i.removeEventListener(mr, d), sa.remove(v);
        }, 0);
      };
    }
  }, [i, l, d, v]);
  const g = m.useCallback(
    (p) => {
      if (!n && !r || v.paused) return;
      const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, w = document.activeElement;
      if (y && w) {
        const b = p.currentTarget, [C, S] = gm(b);
        C && S ? !p.shiftKey && w === S ? (p.preventDefault(), n && it(C, { select: !0 })) : p.shiftKey && w === C && (p.preventDefault(), n && it(S, { select: !0 })) : w === b && p.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ u.jsx(q.div, { tabIndex: -1, ...s, ref: h, onKeyDown: g });
});
so.displayName = pm;
function vm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (it(r, { select: t }), document.activeElement !== n) return;
}
function gm(e) {
  const t = ss(e), n = aa(t, e), r = aa(t.reverse(), e);
  return [n, r];
}
function ss(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function aa(e, t) {
  for (const n of e)
    if (!ym(n, { upTo: t })) return n;
}
function ym(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function bm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && bm(e) && t && e.select();
  }
}
var sa = xm();
function xm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ia(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ia(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ia(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wm(e) {
  return e.filter((t) => t.tagName !== "A");
}
var be = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Cm = m.useId || (() => {
}), Sm = 0;
function Vt(e) {
  const [t, n] = m.useState(Cm());
  return be(() => {
    n((r) => r ?? String(Sm++));
  }, [e]), t ? `radix-${t}` : "";
}
const Pm = ["top", "right", "bottom", "left"], ct = Math.min, Pe = Math.max, On = Math.round, vn = Math.floor, lt = (e) => ({
  x: e,
  y: e
}), Em = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rm = {
  start: "end",
  end: "start"
};
function Nr(e, t, n) {
  return Pe(e, ct(t, n));
}
function Ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Je(e) {
  return e.split("-")[0];
}
function Bt(e) {
  return e.split("-")[1];
}
function io(e) {
  return e === "x" ? "y" : "x";
}
function co(e) {
  return e === "y" ? "height" : "width";
}
function ut(e) {
  return ["top", "bottom"].includes(Je(e)) ? "y" : "x";
}
function lo(e) {
  return io(ut(e));
}
function Mm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Bt(e), o = lo(e), a = co(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = kn(s)), [s, kn(s)];
}
function Nm(e) {
  const t = kn(e);
  return [_r(e), t, _r(t)];
}
function _r(e) {
  return e.replace(/start|end/g, (t) => Rm[t]);
}
function _m(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Om(e, t, n, r) {
  const o = Bt(e);
  let a = _m(Je(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(_r)))), a;
}
function kn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Em[t]);
}
function km(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function is(e) {
  return typeof e != "number" ? km(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function ca(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ut(t), s = lo(t), i = co(s), c = Je(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Bt(t)) {
    case "start":
      v[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      v[s] += h * (n && l ? -1 : 1);
      break;
  }
  return v;
}
const Dm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = ca(l, r, c), h = r, v = {}, g = 0;
  for (let p = 0; p < i.length; p++) {
    const {
      name: y,
      fn: w
    } = i[p], {
      x: b,
      y: C,
      data: S,
      reset: E
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = C ?? f, v = {
      ...v,
      [y]: {
        ...v[y],
        ...S
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (l = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = ca(l, h, c)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: v
  };
};
async function nn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = Ze(t, e), g = is(v), y = i[h ? f === "floating" ? "reference" : "floating" : f], w = Dn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), b = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), S = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Dn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: C,
    strategy: c
  }) : b);
  return {
    top: (w.top - E.top + g.top) / S.y,
    bottom: (E.bottom - w.bottom + g.bottom) / S.y,
    left: (w.left - E.left + g.left) / S.x,
    right: (E.right - w.right + g.right) / S.x
  };
}
const jm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: d = 0
    } = Ze(e, t) || {};
    if (l == null)
      return {};
    const f = is(d), h = {
      x: n,
      y: r
    }, v = lo(o), g = co(v), p = await s.getDimensions(l), y = v === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", C = y ? "clientHeight" : "clientWidth", S = a.reference[g] + a.reference[v] - h[v] - a.floating[g], E = h[v] - a.reference[v], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let _ = N ? N[C] : 0;
    (!_ || !await (s.isElement == null ? void 0 : s.isElement(N))) && (_ = i.floating[C] || a.floating[g]);
    const k = S / 2 - E / 2, Y = _ / 2 - p[g] / 2 - 1, $ = ct(f[w], Y), B = ct(f[b], Y), D = $, I = _ - p[g] - B, A = _ / 2 - p[g] / 2 + k, H = Nr(D, A, I), j = !c.arrow && Bt(o) != null && A !== H && a.reference[g] / 2 - (A < D ? $ : B) - p[g] / 2 < 0, R = j ? A < D ? A - D : A - I : 0;
    return {
      [v]: h[v] + R,
      data: {
        [v]: H,
        centerOffset: A - H - R,
        ...j && {
          alignmentOffset: R
        }
      },
      reset: j
    };
  }
}), Tm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...y
      } = Ze(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = Je(o), b = ut(i), C = Je(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = h || (C || !p ? [kn(i)] : Nm(i)), N = g !== "none";
      !h && N && E.push(...Om(i, p, g, S));
      const _ = [i, ...E], k = await nn(t, y), Y = [];
      let $ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && Y.push(k[w]), f) {
        const A = Mm(o, s, S);
        Y.push(k[A[0]], k[A[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: Y
      }], !Y.every((A) => A <= 0)) {
        var B, D;
        const A = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, H = _[A];
        if (H)
          return {
            data: {
              index: A,
              overflows: $
            },
            reset: {
              placement: H
            }
          };
        let j = (D = $.filter((R) => R.overflows[0] <= 0).sort((R, P) => R.overflows[1] - P.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!j)
          switch (v) {
            case "bestFit": {
              var I;
              const R = (I = $.filter((P) => {
                if (N) {
                  const T = ut(P.placement);
                  return T === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((T) => T > 0).reduce((T, X) => T + X, 0)]).sort((P, T) => P[1] - T[1])[0]) == null ? void 0 : I[0];
              R && (j = R);
              break;
            }
            case "initialPlacement":
              j = i;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function la(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ua(e) {
  return Pm.some((t) => e[t] >= 0);
}
const Am = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ze(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await nn(t, {
            ...o,
            elementContext: "reference"
          }), s = la(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ua(s)
            }
          };
        }
        case "escaped": {
          const a = await nn(t, {
            ...o,
            altBoundary: !0
          }), s = la(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ua(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Im(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Je(n), i = Bt(n), c = ut(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && c ? -1 : 1, f = Ze(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof g == "number" && (v = i === "end" ? g * -1 : g), c ? {
    x: v * d,
    y: h * l
  } : {
    x: h * l,
    y: v * d
  };
}
const Fm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await Im(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Lm = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (y) => {
            let {
              x: w,
              y: b
            } = y;
            return {
              x: w,
              y: b
            };
          }
        },
        ...c
      } = Ze(e, t), l = {
        x: n,
        y: r
      }, d = await nn(t, c), f = ut(Je(o)), h = io(f);
      let v = l[h], g = l[f];
      if (a) {
        const y = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", b = v + d[y], C = v - d[w];
        v = Nr(b, v, C);
      }
      if (s) {
        const y = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = g + d[y], C = g - d[w];
        g = Nr(b, g, C);
      }
      const p = i.fn({
        ...t,
        [h]: v,
        [f]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: a,
            [f]: s
          }
        }
      };
    }
  };
}, Wm = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Ze(e, t), d = {
        x: n,
        y: r
      }, f = ut(o), h = io(f);
      let v = d[h], g = d[f];
      const p = Ze(i, t), y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const C = h === "y" ? "height" : "width", S = a.reference[h] - a.floating[C] + y.mainAxis, E = a.reference[h] + a.reference[C] - y.mainAxis;
        v < S ? v = S : v > E && (v = E);
      }
      if (l) {
        var w, b;
        const C = h === "y" ? "width" : "height", S = ["top", "left"].includes(Je(o)), E = a.reference[f] - a.floating[C] + (S && ((w = s.offset) == null ? void 0 : w[f]) || 0) + (S ? 0 : y.crossAxis), N = a.reference[f] + a.reference[C] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) - (S ? y.crossAxis : 0);
        g < E ? g = E : g > N && (g = N);
      }
      return {
        [h]: v,
        [f]: g
      };
    }
  };
}, $m = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Ze(e, t), d = await nn(t, l), f = Je(o), h = Bt(o), v = ut(o) === "y", {
        width: g,
        height: p
      } = a.floating;
      let y, w;
      f === "top" || f === "bottom" ? (y = f, w = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, y = h === "end" ? "top" : "bottom");
      const b = p - d.top - d.bottom, C = g - d.left - d.right, S = ct(p - d[y], b), E = ct(g - d[w], C), N = !t.middlewareData.shift;
      let _ = S, k = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = C), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = b), N && !h) {
        const $ = Pe(d.left, 0), B = Pe(d.right, 0), D = Pe(d.top, 0), I = Pe(d.bottom, 0);
        v ? k = g - 2 * ($ !== 0 || B !== 0 ? $ + B : Pe(d.left, d.right)) : _ = p - 2 * (D !== 0 || I !== 0 ? D + I : Pe(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: k,
        availableHeight: _
      });
      const Y = await s.getDimensions(i.floating);
      return g !== Y.width || p !== Y.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Fn() {
  return typeof window < "u";
}
function Ht(e) {
  return cs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (cs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cs(e) {
  return Fn() ? e instanceof Node || e instanceof Ee(e).Node : !1;
}
function Ae(e) {
  return Fn() ? e instanceof Element || e instanceof Ee(e).Element : !1;
}
function Be(e) {
  return Fn() ? e instanceof HTMLElement || e instanceof Ee(e).HTMLElement : !1;
}
function da(e) {
  return !Fn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ee(e).ShadowRoot;
}
function dn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ym(e) {
  return ["table", "td", "th"].includes(Ht(e));
}
function Ln(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function uo(e) {
  const t = fo(), n = Ae(e) ? Ie(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Vm(e) {
  let t = dt(e);
  for (; Be(t) && !Lt(t); ) {
    if (uo(t))
      return t;
    if (Ln(t))
      return null;
    t = dt(t);
  }
  return null;
}
function fo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lt(e) {
  return ["html", "body", "#document"].includes(Ht(e));
}
function Ie(e) {
  return Ee(e).getComputedStyle(e);
}
function Wn(e) {
  return Ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dt(e) {
  if (Ht(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    da(e) && e.host || // Fallback.
    He(e)
  );
  return da(t) ? t.host : t;
}
function ls(e) {
  const t = dt(e);
  return Lt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Be(t) && dn(t) ? t : ls(t);
}
function rn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ls(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ee(o);
  if (a) {
    const i = Or(s);
    return t.concat(s, s.visualViewport || [], dn(o) ? o : [], i && n ? rn(i) : []);
  }
  return t.concat(o, rn(o, [], n));
}
function Or(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function us(e) {
  const t = Ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Be(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = On(n) !== a || On(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function mo(e) {
  return Ae(e) ? e : e.contextElement;
}
function At(e) {
  const t = mo(e);
  if (!Be(t))
    return lt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = us(t);
  let s = (a ? On(n.width) : n.width) / r, i = (a ? On(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Bm = /* @__PURE__ */ lt(0);
function ds(e) {
  const t = Ee(e);
  return !fo() || !t.visualViewport ? Bm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ee(e) ? !1 : t;
}
function Pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = mo(e);
  let s = lt(1);
  t && (r ? Ae(r) && (s = At(r)) : s = At(e));
  const i = Hm(a, n, r) ? ds(a) : lt(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (a) {
    const h = Ee(a), v = r && Ae(r) ? Ee(r) : r;
    let g = h, p = Or(g);
    for (; p && r && v !== g; ) {
      const y = At(p), w = p.getBoundingClientRect(), b = Ie(p), C = w.left + (p.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = w.top + (p.clientTop + parseFloat(b.paddingTop)) * y.y;
      c *= y.x, l *= y.y, d *= y.x, f *= y.y, c += C, l += S, g = Ee(p), p = Or(g);
    }
  }
  return Dn({
    width: d,
    height: f,
    x: c,
    y: l
  });
}
function zm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = He(r), i = t ? Ln(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = lt(1);
  const d = lt(0), f = Be(r);
  if ((f || !f && !a) && ((Ht(r) !== "body" || dn(s)) && (c = Wn(r)), Be(r))) {
    const h = Pt(r);
    l = At(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y
  };
}
function Gm(e) {
  return Array.from(e.getClientRects());
}
function kr(e, t) {
  const n = Wn(e).scrollLeft;
  return t ? t.left + n : Pt(He(e)).left + n;
}
function Um(e) {
  const t = He(e), n = Wn(e), r = e.ownerDocument.body, o = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + kr(e);
  const i = -n.scrollTop;
  return Ie(r).direction === "rtl" && (s += Pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function Km(e, t) {
  const n = Ee(e), r = He(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = fo();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function qm(e, t) {
  const n = Pt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Be(e) ? At(e) : lt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function fa(e, t, n) {
  let r;
  if (t === "viewport")
    r = Km(e, n);
  else if (t === "document")
    r = Um(He(e));
  else if (Ae(t))
    r = qm(t, n);
  else {
    const o = ds(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Dn(r);
}
function fs(e, t) {
  const n = dt(e);
  return n === t || !Ae(n) || Lt(n) ? !1 : Ie(n).position === "fixed" || fs(n, t);
}
function Xm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = rn(e, [], !1).filter((i) => Ae(i) && Ht(i) !== "body"), o = null;
  const a = Ie(e).position === "fixed";
  let s = a ? dt(e) : e;
  for (; Ae(s) && !Lt(s); ) {
    const i = Ie(s), c = uo(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || dn(s) && !c && fs(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = dt(s);
  }
  return t.set(e, r), r;
}
function Zm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ln(t) ? [] : Xm(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, d) => {
    const f = fa(t, d, o);
    return l.top = Pe(f.top, l.top), l.right = ct(f.right, l.right), l.bottom = ct(f.bottom, l.bottom), l.left = Pe(f.left, l.left), l;
  }, fa(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Jm(e) {
  const {
    width: t,
    height: n
  } = us(e);
  return {
    width: t,
    height: n
  };
}
function Qm(e, t, n) {
  const r = Be(t), o = He(t), a = n === "fixed", s = Pt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = lt(0);
  if (r || !r && !a)
    if ((Ht(t) !== "body" || dn(o)) && (i = Wn(t)), r) {
      const v = Pt(t, !0, a, t);
      c.x = v.x + t.clientLeft, c.y = v.y + t.clientTop;
    } else o && (c.x = kr(o));
  let l = 0, d = 0;
  if (o && !r && !a) {
    const v = o.getBoundingClientRect();
    d = v.top + i.scrollTop, l = v.left + i.scrollLeft - // RTL <body> scrollbar.
    kr(o, v);
  }
  const f = s.left + i.scrollLeft - c.x - l, h = s.top + i.scrollTop - c.y - d;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function hr(e) {
  return Ie(e).position === "static";
}
function ma(e, t) {
  if (!Be(e) || Ie(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return He(e) === n && (n = n.ownerDocument.body), n;
}
function ms(e, t) {
  const n = Ee(e);
  if (Ln(e))
    return n;
  if (!Be(e)) {
    let o = dt(e);
    for (; o && !Lt(o); ) {
      if (Ae(o) && !hr(o))
        return o;
      o = dt(o);
    }
    return n;
  }
  let r = ma(e, t);
  for (; r && Ym(r) && hr(r); )
    r = ma(r, t);
  return r && Lt(r) && hr(r) && !uo(r) ? n : r || Vm(e) || n;
}
const eh = async function(e) {
  const t = this.getOffsetParent || ms, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Qm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function th(e) {
  return Ie(e).direction === "rtl";
}
const nh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zm,
  getDocumentElement: He,
  getClippingRect: Zm,
  getOffsetParent: ms,
  getElementRects: eh,
  getClientRects: Gm,
  getDimensions: Jm,
  getScale: At,
  isElement: Ae,
  isRTL: th
};
function rh(e, t) {
  let n = null, r;
  const o = He(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: d,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !f || !h)
      return;
    const v = vn(d), g = vn(o.clientWidth - (l + f)), p = vn(o.clientHeight - (d + h)), y = vn(l), b = {
      rootMargin: -v + "px " + -g + "px " + -p + "px " + -y + "px",
      threshold: Pe(0, ct(1, c)) || 1
    };
    let C = !0;
    function S(E) {
      const N = E[0].intersectionRatio;
      if (N !== c) {
        if (!C)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function oh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = mo(e), d = o || a ? [...l ? rn(l) : [], ...rn(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = l && i ? rh(l, n) : null;
  let h = -1, v = null;
  s && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = v) == null || C.observe(t);
    })), n();
  }), l && !c && v.observe(l), v.observe(t));
  let g, p = c ? Pt(e) : null;
  c && y();
  function y() {
    const w = Pt(e);
    p && (w.x !== p.x || w.y !== p.y || w.width !== p.width || w.height !== p.height) && n(), p = w, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f == null || f(), (w = v) == null || w.disconnect(), v = null, c && cancelAnimationFrame(g);
  };
}
const ah = Fm, sh = Lm, ih = Tm, ch = $m, lh = Am, ha = jm, uh = Wm, dh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: nh,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Dm(e, t, {
    ...o,
    platform: a
  });
};
var En = typeof document < "u" ? Pa : on;
function jn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!jn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !jn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function pa(e, t) {
  const n = hs(e);
  return Math.round(t * n) / n;
}
function pr(e) {
  const t = m.useRef(e);
  return En(() => {
    t.current = e;
  }), t;
}
function fh(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [d, f] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, v] = m.useState(r);
  jn(h, r) || v(r);
  const [g, p] = m.useState(null), [y, w] = m.useState(null), b = m.useCallback((P) => {
    P !== N.current && (N.current = P, p(P));
  }, []), C = m.useCallback((P) => {
    P !== _.current && (_.current = P, w(P));
  }, []), S = a || g, E = s || y, N = m.useRef(null), _ = m.useRef(null), k = m.useRef(d), Y = c != null, $ = pr(c), B = pr(o), D = pr(l), I = m.useCallback(() => {
    if (!N.current || !_.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: h
    };
    B.current && (P.platform = B.current), dh(N.current, _.current, P).then((T) => {
      const X = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      A.current && !jn(k.current, X) && (k.current = X, An.flushSync(() => {
        f(X);
      }));
    });
  }, [h, t, n, B, D]);
  En(() => {
    l === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [l]);
  const A = m.useRef(!1);
  En(() => (A.current = !0, () => {
    A.current = !1;
  }), []), En(() => {
    if (S && (N.current = S), E && (_.current = E), S && E) {
      if ($.current)
        return $.current(S, E, I);
      I();
    }
  }, [S, E, I, $, Y]);
  const H = m.useMemo(() => ({
    reference: N,
    floating: _,
    setReference: b,
    setFloating: C
  }), [b, C]), j = m.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), R = m.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return P;
    const T = pa(j.floating, d.x), X = pa(j.floating, d.y);
    return i ? {
      ...P,
      transform: "translate(" + T + "px, " + X + "px)",
      ...hs(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: X
    };
  }, [n, i, j.floating, d.x, d.y]);
  return m.useMemo(() => ({
    ...d,
    update: I,
    refs: H,
    elements: j,
    floatingStyles: R
  }), [d, I, H, j, R]);
}
const mh = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ha({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ha({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, hh = (e, t) => ({
  ...ah(e),
  options: [e, t]
}), ph = (e, t) => ({
  ...sh(e),
  options: [e, t]
}), vh = (e, t) => ({
  ...uh(e),
  options: [e, t]
}), gh = (e, t) => ({
  ...ih(e),
  options: [e, t]
}), yh = (e, t) => ({
  ...ch(e),
  options: [e, t]
}), bh = (e, t) => ({
  ...lh(e),
  options: [e, t]
}), xh = (e, t) => ({
  ...mh(e),
  options: [e, t]
});
var wh = "Arrow", ps = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ u.jsx(
    q.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ps.displayName = wh;
var Ch = ps;
function Sh(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), c = n.length;
    n = [...n, s];
    function l(f) {
      const { scope: h, children: v, ...g } = f, p = (h == null ? void 0 : h[e][c]) || i, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(p.Provider, { value: y, children: v });
    }
    function d(f, h) {
      const v = (h == null ? void 0 : h[e][c]) || i, g = m.useContext(v);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [l, d];
  }
  const o = () => {
    const a = n.map((s) => m.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Ph(o, ...t)];
}
function Ph(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function vs(e) {
  const [t, n] = m.useState(void 0);
  return be(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ho = "Popper", [gs, $n] = Sh(ho), [Eh, ys] = gs(ho), bs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ u.jsx(Eh, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
bs.displayName = ho;
var xs = "PopperAnchor", ws = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = ys(xs, n), s = m.useRef(null), i = le(t, s);
    return m.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ u.jsx(q.div, { ...o, ref: i });
  }
);
ws.displayName = xs;
var po = "PopperContent", [Rh, Mh] = gs(po), Cs = m.forwardRef(
  (e, t) => {
    var F, Q, fe, Z, ee, J;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: g,
      ...p
    } = e, y = ys(po, n), [w, b] = m.useState(null), C = le(t, (pe) => b(pe)), [S, E] = m.useState(null), N = vs(S), _ = (N == null ? void 0 : N.width) ?? 0, k = (N == null ? void 0 : N.height) ?? 0, Y = r + (a !== "center" ? "-" + a : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(l) ? l : [l], D = B.length > 0, I = {
      padding: $,
      boundary: B.filter(_h),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: A, floatingStyles: H, placement: j, isPositioned: R, middlewareData: P } = fh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: Y,
      whileElementsMounted: (...pe) => oh(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        hh({ mainAxis: o + k, alignmentAxis: s }),
        c && ph({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? vh() : void 0,
          ...I
        }),
        c && gh({ ...I }),
        yh({
          ...I,
          apply: ({ elements: pe, rects: Me, availableWidth: Le, availableHeight: ke }) => {
            const { width: rt, height: pn } = Me.reference, ze = pe.floating.style;
            ze.setProperty("--radix-popper-available-width", `${Le}px`), ze.setProperty("--radix-popper-available-height", `${ke}px`), ze.setProperty("--radix-popper-anchor-width", `${rt}px`), ze.setProperty("--radix-popper-anchor-height", `${pn}px`);
          }
        }),
        S && xh({ element: S, padding: i }),
        Oh({ arrowWidth: _, arrowHeight: k }),
        h && bh({ strategy: "referenceHidden", ...I })
      ]
    }), [T, X] = Es(j), ae = Ve(g);
    be(() => {
      R && (ae == null || ae());
    }, [R, ae]);
    const et = (F = P.arrow) == null ? void 0 : F.x, tt = (Q = P.arrow) == null ? void 0 : Q.y, Fe = ((fe = P.arrow) == null ? void 0 : fe.centerOffset) !== 0, [nt, Oe] = m.useState();
    return be(() => {
      w && Oe(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: R ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: nt,
          "--radix-popper-transform-origin": [
            (Z = P.transformOrigin) == null ? void 0 : Z.x,
            (ee = P.transformOrigin) == null ? void 0 : ee.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = P.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          Rh,
          {
            scope: n,
            placedSide: T,
            onArrowChange: E,
            arrowX: et,
            arrowY: tt,
            shouldHideArrow: Fe,
            children: /* @__PURE__ */ u.jsx(
              q.div,
              {
                "data-side": T,
                "data-align": X,
                ...p,
                ref: C,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: R ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Cs.displayName = po;
var Ss = "PopperArrow", Nh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ps = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Mh(Ss, r), s = Nh[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          Ch,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ps.displayName = Ss;
function _h(e) {
  return e !== null;
}
var Oh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = Es(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let g = "", p = "";
    return l === "bottom" ? (g = s ? f : `${h}px`, p = `${-c}px`) : l === "top" ? (g = s ? f : `${h}px`, p = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, p = s ? f : `${v}px`) : l === "left" && (g = `${r.floating.width + c}px`, p = s ? f : `${v}px`), { data: { x: g, y: p } };
  }
});
function Es(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Rs = bs, vo = ws, Ms = Cs, Ns = Ps, kh = "Portal", go = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  be(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Xc.createPortal(/* @__PURE__ */ u.jsx(q.div, { ...r, ref: t }), s) : null;
});
go.displayName = kh;
function Dh(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var fn = (e) => {
  const { present: t, children: n } = e, r = jh(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = le(r.ref, Th(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
fn.displayName = "Presence";
function jh(e) {
  const [t, n] = m.useState(), r = m.useRef({}), o = m.useRef(e), a = m.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = Dh(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const l = gn(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), be(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const h = a.current, v = gn(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), be(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, f = (v) => {
        const p = gn(r.current).includes(v.animationName);
        if (v.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (v) => {
        v.target === t && (a.current = gn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: m.useCallback((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function gn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Th(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Wt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Ah({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Ve(n), c = m.useCallback(
    (l) => {
      if (a) {
        const f = typeof l == "function" ? l(e) : l;
        f !== e && i(f);
      } else
        o(l);
    },
    [a, e, o, i]
  );
  return [s, c];
}
function Ah({
  defaultProp: e,
  onChange: t
}) {
  const n = m.useState(e), [r] = n, o = m.useRef(r), a = Ve(t);
  return m.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var Ih = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ot = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), bn = {}, vr = 0, _s = function(e) {
  return e && (e.host || _s(e.parentNode));
}, Fh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = _s(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Lh = function(e, t, n, r) {
  var o = Fh(t, Array.isArray(e) ? e : [e]);
  bn[n] || (bn[n] = /* @__PURE__ */ new WeakMap());
  var a = bn[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var v = h.getAttribute(r), g = v !== null && v !== "false", p = (Ot.get(h) || 0) + 1, y = (a.get(h) || 0) + 1;
          Ot.set(h, p), a.set(h, y), s.push(h), p === 1 && g && yn.set(h, !0), y === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), i.clear(), vr++, function() {
    s.forEach(function(f) {
      var h = Ot.get(f) - 1, v = a.get(f) - 1;
      Ot.set(f, h), a.set(f, v), h || (yn.has(f) || f.removeAttribute(r), yn.delete(f)), v || f.removeAttribute(n);
    }), vr--, vr || (Ot = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), bn = {});
  };
}, Os = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ih(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Lh(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, We = function() {
  return We = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, We.apply(this, arguments);
};
function ks(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Wh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Rn = "right-scroll-bar-position", Mn = "width-before-scroll-bar", $h = "with-scroll-bars-hidden", Yh = "--removed-body-scroll-bar-size";
function gr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vh(e, t) {
  var n = he(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Bh = typeof window < "u" ? m.useLayoutEffect : m.useEffect, va = /* @__PURE__ */ new WeakMap();
function Hh(e, t) {
  var n = Vh(null, function(r) {
    return e.forEach(function(o) {
      return gr(o, r);
    });
  });
  return Bh(function() {
    var r = va.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || gr(i, null);
      }), a.forEach(function(i) {
        o.has(i) || gr(i, s);
      });
    }
    va.set(n, e);
  }, [e]), n;
}
function zh(e) {
  return e;
}
function Gh(e, t) {
  t === void 0 && (t = zh);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var d = s;
        s = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Uh(e) {
  e === void 0 && (e = {});
  var t = Gh(null);
  return t.options = We({ async: !0, ssr: !1 }, e), t;
}
var Ds = function(e) {
  var t = e.sideCar, n = ks(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, We({}, n));
};
Ds.isSideCarExport = !0;
function Kh(e, t) {
  return e.useMedium(t), Ds;
}
var js = Uh(), yr = function() {
}, Yn = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: yr,
    onWheelCapture: yr,
    onTouchMoveCapture: yr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, v = e.noIsolation, g = e.inert, p = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, b = e.gapMode, C = ks(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = h, E = Hh([n, t]), N = We(We({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(S, { sideCar: js, removeScrollBar: l, shards: f, noIsolation: v, inert: g, setCallbacks: a, allowPinchZoom: !!p, lockRef: n, gapMode: b }),
    s ? m.cloneElement(m.Children.only(i), We(We({}, N), { ref: E })) : m.createElement(w, We({}, N, { className: c, ref: E }), i)
  );
});
Yn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yn.classNames = {
  fullWidth: Mn,
  zeroRight: Rn
};
var qh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qh();
  return t && e.setAttribute("nonce", t), e;
}
function Zh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Jh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Qh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xh()) && (Zh(t, n), Jh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ep = function() {
  var e = Qh();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ts = function() {
  var e = ep(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, tp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, br = function(e) {
  return parseInt(e || "", 10) || 0;
}, np = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [br(n), br(r), br(o)];
}, rp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tp;
  var t = np(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, op = Ts(), It = "data-scroll-locked", ap = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($h, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(It, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Rn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Mn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Rn, " .").concat(Rn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mn, " .").concat(Mn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(It, `] {
    `).concat(Yh, ": ").concat(i, `px;
  }
`);
}, ga = function() {
  var e = parseInt(document.body.getAttribute(It) || "0", 10);
  return isFinite(e) ? e : 0;
}, sp = function() {
  m.useEffect(function() {
    return document.body.setAttribute(It, (ga() + 1).toString()), function() {
      var e = ga() - 1;
      e <= 0 ? document.body.removeAttribute(It) : document.body.setAttribute(It, e.toString());
    };
  }, []);
}, ip = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  sp();
  var a = m.useMemo(function() {
    return rp(o);
  }, [o]);
  return m.createElement(op, { styles: ap(a, !t, o, n ? "" : "!important") });
}, Dr = !1;
if (typeof window < "u")
  try {
    var xn = Object.defineProperty({}, "passive", {
      get: function() {
        return Dr = !0, !0;
      }
    });
    window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
  } catch {
    Dr = !1;
  }
var kt = Dr ? { passive: !1 } : !1, cp = function(e) {
  return e.tagName === "TEXTAREA";
}, As = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !cp(e) && n[t] === "visible")
  );
}, lp = function(e) {
  return As(e, "overflowY");
}, up = function(e) {
  return As(e, "overflowX");
}, ya = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Is(e, r);
    if (o) {
      var a = Fs(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, dp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, fp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Is = function(e, t) {
  return e === "v" ? lp(t) : up(t);
}, Fs = function(e, t) {
  return e === "v" ? dp(t) : fp(t);
}, mp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, hp = function(e, t, n, r, o) {
  var a = mp(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, f = 0, h = 0;
  do {
    var v = Fs(e, i), g = v[0], p = v[1], y = v[2], w = p - y - a * g;
    (g || w) && Is(e, i) && (f += w, h += g), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (l = !0), l;
}, wn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ba = function(e) {
  return [e.deltaX, e.deltaY];
}, xa = function(e) {
  return e && "current" in e ? e.current : e;
}, pp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, gp = 0, Dt = [];
function yp(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(gp++)[0], a = m.useState(Ts)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Wh([e.lockRef.current], (e.shards || []).map(xa), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = m.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = wn(p), b = n.current, C = "deltaX" in p ? p.deltaX : b[0] - w[0], S = "deltaY" in p ? p.deltaY : b[1] - w[1], E, N = p.target, _ = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in p && _ === "h" && N.type === "range")
      return !1;
    var k = ya(_, N);
    if (!k)
      return !0;
    if (k ? E = _ : (E = _ === "v" ? "h" : "v", k = ya(_, N)), !k)
      return !1;
    if (!r.current && "changedTouches" in p && (C || S) && (r.current = E), !E)
      return !0;
    var Y = r.current || E;
    return hp(Y, y, p, Y === "h" ? C : S, !0);
  }, []), c = m.useCallback(function(p) {
    var y = p;
    if (!(!Dt.length || Dt[Dt.length - 1] !== a)) {
      var w = "deltaY" in y ? ba(y) : wn(y), b = t.current.filter(function(E) {
        return E.name === y.type && (E.target === y.target || y.target === E.shadowParent) && pp(E.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var C = (s.current.shards || []).map(xa).filter(Boolean).filter(function(E) {
          return E.contains(y.target);
        }), S = C.length > 0 ? i(y, C[0]) : !s.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = m.useCallback(function(p, y, w, b) {
    var C = { name: p, delta: y, target: w, should: b, shadowParent: bp(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), d = m.useCallback(function(p) {
    n.current = wn(p), r.current = void 0;
  }, []), f = m.useCallback(function(p) {
    l(p.type, ba(p), p.target, i(p, e.lockRef.current));
  }, []), h = m.useCallback(function(p) {
    l(p.type, wn(p), p.target, i(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Dt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, kt), document.addEventListener("touchmove", c, kt), document.addEventListener("touchstart", d, kt), function() {
      Dt = Dt.filter(function(p) {
        return p !== a;
      }), document.removeEventListener("wheel", c, kt), document.removeEventListener("touchmove", c, kt), document.removeEventListener("touchstart", d, kt);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(a, { styles: vp(o) }) : null,
    v ? m.createElement(ip, { gapMode: e.gapMode }) : null
  );
}
function bp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const xp = Kh(js, yp);
var yo = m.forwardRef(function(e, t) {
  return m.createElement(Yn, We({}, e, { ref: t, sideCar: xp }));
});
yo.classNames = Yn.classNames;
var bo = "Popover", [Ls, ng] = un(bo, [
  $n
]), mn = $n(), [wp, gt] = Ls(bo), Ws = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = mn(t), c = m.useRef(null), [l, d] = m.useState(!1), [f = !1, h] = Wt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(Rs, { ...i, children: /* @__PURE__ */ u.jsx(
    wp,
    {
      scope: t,
      contentId: Vt(),
      triggerRef: c,
      open: f,
      onOpenChange: h,
      onOpenToggle: m.useCallback(() => h((v) => !v), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: m.useCallback(() => d(!0), []),
      onCustomAnchorRemove: m.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Ws.displayName = bo;
var $s = "PopoverAnchor", Cp = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt($s, n), a = mn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ u.jsx(vo, { ...a, ...r, ref: t });
  }
);
Cp.displayName = $s;
var Ys = "PopoverTrigger", Vs = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt(Ys, n), a = mn(n), s = le(t, o.triggerRef), i = /* @__PURE__ */ u.jsx(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Us(o.open),
        ...r,
        ref: s,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ u.jsx(vo, { asChild: !0, ...a, children: i });
  }
);
Vs.displayName = Ys;
var xo = "PopoverPortal", [Sp, Pp] = Ls(xo, {
  forceMount: void 0
}), Bs = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = gt(xo, t);
  return /* @__PURE__ */ u.jsx(Sp, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(fn, { present: n || a.open, children: /* @__PURE__ */ u.jsx(go, { asChild: !0, container: o, children: r }) }) });
};
Bs.displayName = xo;
var $t = "PopoverContent", Hs = m.forwardRef(
  (e, t) => {
    const n = Pp($t, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = gt($t, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(fn, { present: r || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(Ep, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Rp, { ...o, ref: t }) });
  }
);
Hs.displayName = $t;
var Ep = m.forwardRef(
  (e, t) => {
    const n = gt($t, e.__scopePopover), r = m.useRef(null), o = le(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Os(s);
    }, []), /* @__PURE__ */ u.jsx(yo, { as: Ct, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      zs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: z(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: z(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Rp = m.forwardRef(
  (e, t) => {
    const n = gt($t, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      zs,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), zs = m.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: d,
      ...f
    } = e, h = gt($t, n), v = mn(n);
    return as(), /* @__PURE__ */ u.jsx(
      so,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          ao,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              Ms,
              {
                "data-state": Us(h.open),
                role: "dialog",
                id: h.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Gs = "PopoverClose", Mp = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt(Gs, n);
    return /* @__PURE__ */ u.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Mp.displayName = Gs;
var Np = "PopoverArrow", _p = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mn(n);
    return /* @__PURE__ */ u.jsx(Ns, { ...o, ...r, ref: t });
  }
);
_p.displayName = Np;
function Us(e) {
  return e ? "open" : "closed";
}
var Op = Ws, kp = Vs, Dp = Bs, Ks = Hs;
const jp = Op, Tp = kp, qs = m.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(Dp, { children: /* @__PURE__ */ u.jsx(
  Ks,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: ce(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
qs.displayName = Ks.displayName;
function Ap({ dateValue: e, onChange: t }) {
  const [n, r] = m.useState(e);
  e !== n && r(e);
  const o = (a) => {
    t(a), r(a);
  };
  return /* @__PURE__ */ u.jsxs(jp, { children: [
    /* @__PURE__ */ u.jsx(Tp, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      ye,
      {
        variant: "outline",
        className: ce(
          "w-[240px] justify-start text-left font-normal",
          !n && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(zl, { className: "mr-2 h-4 w-4" }),
          n ? vt(n, "PPP") : /* @__PURE__ */ u.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(qs, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ u.jsx(
      ns,
      {
        mode: "single",
        selected: n,
        onSelect: o,
        initialFocus: !0
      }
    ) })
  ] });
}
function Ip({ value: e, readModeValue: t, path: n, format: r }) {
  const {
    handleOnChange: o,
    handleOnSubmit: a,
    editingMode: s,
    setSelectedFieldsForEditing: i
  } = Se(), c = mu(e, r);
  if (!c)
    return "Invalid Date";
  const l = (h) => {
    const v = hu(h, r);
    v && o(v, n);
  }, d = () => {
    a(e, n), s === re && i((h) => ({
      ...h,
      [n]: !1
    }));
  };
  let f = t === e;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(Ap, { dateValue: c, onChange: l }),
    s !== Xe && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: f,
        size: "icon",
        className: `${f && "hidden"}`,
        title: "Submit",
        onClick: d,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    s === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    s !== re && !f && /* @__PURE__ */ u.jsx(Rt, { path: n })
  ] });
}
function wa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fp(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), c = n.length;
    n = [...n, s];
    function l(f) {
      const { scope: h, children: v, ...g } = f, p = (h == null ? void 0 : h[e][c]) || i, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(p.Provider, { value: y, children: v });
    }
    function d(f, h) {
      const v = (h == null ? void 0 : h[e][c]) || i, g = m.useContext(v);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [l, d];
  }
  const o = () => {
    const a = n.map((s) => m.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Lp(o, ...t)];
}
function Lp(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Xs(e) {
  const t = e + "CollectionProvider", [n, r] = Fp(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: p } = v, y = qe.useRef(null), w = qe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: g, itemMap: w, collectionRef: y, children: p });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = qe.forwardRef(
    (v, g) => {
      const { scope: p, children: y } = v, w = a(i, p), b = le(g, w.collectionRef);
      return /* @__PURE__ */ u.jsx(Ct, { ref: b, children: y });
    }
  );
  c.displayName = i;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", f = qe.forwardRef(
    (v, g) => {
      const { scope: p, children: y, ...w } = v, b = qe.useRef(null), C = le(g, b), S = a(l, p);
      return qe.useEffect(() => (S.itemMap.set(b, { ref: b, ...w }), () => void S.itemMap.delete(b))), /* @__PURE__ */ u.jsx(Ct, { [d]: "", ref: C, children: y });
    }
  );
  f.displayName = l;
  function h(v) {
    const g = a(e + "CollectionConsumer", v);
    return qe.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (S, E) => w.indexOf(S.ref.current) - w.indexOf(E.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: f },
    h,
    r
  ];
}
var Wp = m.createContext(void 0);
function Vn(e) {
  const t = m.useContext(Wp);
  return e || t || "ltr";
}
function Zs(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var $p = "VisuallyHidden", Js = m.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    q.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Js.displayName = $p;
var Yp = [" ", "Enter", "ArrowUp", "ArrowDown"], Vp = [" ", "Enter"], hn = "Select", [Bn, Hn, Bp] = Xs(hn), [zt, rg] = un(hn, [
  Bp,
  $n
]), zn = $n(), [Hp, yt] = zt(hn), [zp, Gp] = zt(hn), Qs = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: d,
    autoComplete: f,
    disabled: h,
    required: v,
    form: g
  } = e, p = zn(t), [y, w] = m.useState(null), [b, C] = m.useState(null), [S, E] = m.useState(!1), N = Vn(l), [_ = !1, k] = Wt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [Y, $] = Wt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), B = m.useRef(null), D = y ? g || !!y.closest("form") : !0, [I, A] = m.useState(/* @__PURE__ */ new Set()), H = Array.from(I).map((j) => j.props.value).join(";");
  return /* @__PURE__ */ u.jsx(Rs, { ...p, children: /* @__PURE__ */ u.jsxs(
    Hp,
    {
      required: v,
      scope: t,
      trigger: y,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: Vt(),
      value: Y,
      onValueChange: $,
      open: _,
      onOpenChange: k,
      dir: N,
      triggerPointerDownPosRef: B,
      disabled: h,
      children: [
        /* @__PURE__ */ u.jsx(Bn.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          zp,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((j) => {
              A((R) => new Set(R).add(j));
            }, []),
            onNativeOptionRemove: m.useCallback((j) => {
              A((R) => {
                const P = new Set(R);
                return P.delete(j), P;
              });
            }, []),
            children: n
          }
        ) }),
        D ? /* @__PURE__ */ u.jsxs(
          Pi,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: Y,
            onChange: (j) => $(j.target.value),
            disabled: h,
            form: g,
            children: [
              Y === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(I)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Qs.displayName = hn;
var ei = "SelectTrigger", ti = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = zn(n), s = yt(ei, n), i = s.disabled || r, c = le(t, s.onTriggerChange), l = Hn(n), d = m.useRef("touch"), [f, h, v] = Ei((p) => {
      const y = l().filter((C) => !C.disabled), w = y.find((C) => C.value === s.value), b = Ri(y, p, w);
      b !== void 0 && s.onValueChange(b.value);
    }), g = (p) => {
      i || (s.onOpenChange(!0), v()), p && (s.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(vo, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Si(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: z(o.onClick, (p) => {
          p.currentTarget.focus(), d.current !== "mouse" && g(p);
        }),
        onPointerDown: z(o.onPointerDown, (p) => {
          d.current = p.pointerType;
          const y = p.target;
          y.hasPointerCapture(p.pointerId) && y.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (g(p), p.preventDefault());
        }),
        onKeyDown: z(o.onKeyDown, (p) => {
          const y = f.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(y && p.key === " ") && Yp.includes(p.key) && (g(), p.preventDefault());
        })
      }
    ) });
  }
);
ti.displayName = ei;
var ni = "SelectValue", ri = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = yt(ni, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, f = le(t, c.onValueNodeChange);
    return be(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ u.jsx(
      q.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Si(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: s }) : a
      }
    );
  }
);
ri.displayName = ni;
var Up = "SelectIcon", oi = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
oi.displayName = Up;
var Kp = "SelectPortal", ai = (e) => /* @__PURE__ */ u.jsx(go, { asChild: !0, ...e });
ai.displayName = Kp;
var Et = "SelectContent", si = m.forwardRef(
  (e, t) => {
    const n = yt(Et, e.__scopeSelect), [r, o] = m.useState();
    if (be(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? An.createPortal(
        /* @__PURE__ */ u.jsx(ii, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(Bn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(ci, { ...e, ref: t });
  }
);
si.displayName = Et;
var De = 10, [ii, bt] = zt(Et), qp = "SelectContentImpl", ci = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: y,
      //
      ...w
    } = e, b = yt(Et, n), [C, S] = m.useState(null), [E, N] = m.useState(null), _ = le(t, (F) => S(F)), [k, Y] = m.useState(null), [$, B] = m.useState(
      null
    ), D = Hn(n), [I, A] = m.useState(!1), H = m.useRef(!1);
    m.useEffect(() => {
      if (C) return Os(C);
    }, [C]), as();
    const j = m.useCallback(
      (F) => {
        const [Q, ...fe] = D().map((J) => J.ref.current), [Z] = fe.slice(-1), ee = document.activeElement;
        for (const J of F)
          if (J === ee || (J == null || J.scrollIntoView({ block: "nearest" }), J === Q && E && (E.scrollTop = 0), J === Z && E && (E.scrollTop = E.scrollHeight), J == null || J.focus(), document.activeElement !== ee)) return;
      },
      [D, E]
    ), R = m.useCallback(
      () => j([k, C]),
      [j, k, C]
    );
    m.useEffect(() => {
      I && R();
    }, [I, R]);
    const { onOpenChange: P, triggerPointerDownPosRef: T } = b;
    m.useEffect(() => {
      if (C) {
        let F = { x: 0, y: 0 };
        const Q = (Z) => {
          var ee, J;
          F = {
            x: Math.abs(Math.round(Z.pageX) - (((ee = T.current) == null ? void 0 : ee.x) ?? 0)),
            y: Math.abs(Math.round(Z.pageY) - (((J = T.current) == null ? void 0 : J.y) ?? 0))
          };
        }, fe = (Z) => {
          F.x <= 10 && F.y <= 10 ? Z.preventDefault() : C.contains(Z.target) || P(!1), document.removeEventListener("pointermove", Q), T.current = null;
        };
        return T.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", fe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", fe, { capture: !0 });
        };
      }
    }, [C, P, T]), m.useEffect(() => {
      const F = () => P(!1);
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [P]);
    const [X, ae] = Ei((F) => {
      const Q = D().filter((ee) => !ee.disabled), fe = Q.find((ee) => ee.ref.current === document.activeElement), Z = Ri(Q, F, fe);
      Z && setTimeout(() => Z.ref.current.focus());
    }), et = m.useCallback(
      (F, Q, fe) => {
        const Z = !H.current && !fe;
        (b.value !== void 0 && b.value === Q || Z) && (Y(F), Z && (H.current = !0));
      },
      [b.value]
    ), tt = m.useCallback(() => C == null ? void 0 : C.focus(), [C]), Fe = m.useCallback(
      (F, Q, fe) => {
        const Z = !H.current && !fe;
        (b.value !== void 0 && b.value === Q || Z) && B(F);
      },
      [b.value]
    ), nt = r === "popper" ? jr : li, Oe = nt === jr ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ u.jsx(
      ii,
      {
        scope: n,
        content: C,
        viewport: E,
        onViewportChange: N,
        itemRefCallback: et,
        selectedItem: k,
        onItemLeave: tt,
        itemTextRefCallback: Fe,
        focusSelectedItem: R,
        selectedItemText: $,
        position: r,
        isPositioned: I,
        searchRef: X,
        children: /* @__PURE__ */ u.jsx(yo, { as: Ct, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          so,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: z(o, (F) => {
              var Q;
              (Q = b.trigger) == null || Q.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              ao,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  nt,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...w,
                    ...Oe,
                    onPlaced: () => A(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: z(w.onKeyDown, (F) => {
                      const Q = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !Q && F.key.length === 1 && ae(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let Z = D().filter((ee) => !ee.disabled).map((ee) => ee.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (Z = Z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const ee = F.target, J = Z.indexOf(ee);
                          Z = Z.slice(J + 1);
                        }
                        setTimeout(() => j(Z)), F.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ci.displayName = qp;
var Xp = "SelectItemAlignedPosition", li = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = yt(Et, n), s = bt(Et, n), [i, c] = m.useState(null), [l, d] = m.useState(null), f = le(t, (_) => d(_)), h = Hn(n), v = m.useRef(!1), g = m.useRef(!0), { viewport: p, selectedItem: y, selectedItemText: w, focusSelectedItem: b } = s, C = m.useCallback(() => {
    if (a.trigger && a.valueNode && i && l && p && y && w) {
      const _ = a.trigger.getBoundingClientRect(), k = l.getBoundingClientRect(), Y = a.valueNode.getBoundingClientRect(), $ = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ee = $.left - k.left, J = Y.left - ee, pe = _.left - J, Me = _.width + pe, Le = Math.max(Me, k.width), ke = window.innerWidth - De, rt = wa(J, [
          De,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(De, ke - Le)
        ]);
        i.style.minWidth = Me + "px", i.style.left = rt + "px";
      } else {
        const ee = k.right - $.right, J = window.innerWidth - Y.right - ee, pe = window.innerWidth - _.right - J, Me = _.width + pe, Le = Math.max(Me, k.width), ke = window.innerWidth - De, rt = wa(J, [
          De,
          Math.max(De, ke - Le)
        ]);
        i.style.minWidth = Me + "px", i.style.right = rt + "px";
      }
      const B = h(), D = window.innerHeight - De * 2, I = p.scrollHeight, A = window.getComputedStyle(l), H = parseInt(A.borderTopWidth, 10), j = parseInt(A.paddingTop, 10), R = parseInt(A.borderBottomWidth, 10), P = parseInt(A.paddingBottom, 10), T = H + j + I + P + R, X = Math.min(y.offsetHeight * 5, T), ae = window.getComputedStyle(p), et = parseInt(ae.paddingTop, 10), tt = parseInt(ae.paddingBottom, 10), Fe = _.top + _.height / 2 - De, nt = D - Fe, Oe = y.offsetHeight / 2, F = y.offsetTop + Oe, Q = H + j + F, fe = T - Q;
      if (Q <= Fe) {
        const ee = B.length > 0 && y === B[B.length - 1].ref.current;
        i.style.bottom = "0px";
        const J = l.clientHeight - p.offsetTop - p.offsetHeight, pe = Math.max(
          nt,
          Oe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ee ? tt : 0) + J + R
        ), Me = Q + pe;
        i.style.height = Me + "px";
      } else {
        const ee = B.length > 0 && y === B[0].ref.current;
        i.style.top = "0px";
        const pe = Math.max(
          Fe,
          H + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ee ? et : 0) + Oe
        ) + fe;
        i.style.height = pe + "px", p.scrollTop = Q - Fe + p.offsetTop;
      }
      i.style.margin = `${De}px 0`, i.style.minHeight = X + "px", i.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    h,
    a.trigger,
    a.valueNode,
    i,
    l,
    p,
    y,
    w,
    a.dir,
    r
  ]);
  be(() => C(), [C]);
  const [S, E] = m.useState();
  be(() => {
    l && E(window.getComputedStyle(l).zIndex);
  }, [l]);
  const N = m.useCallback(
    (_) => {
      _ && g.current === !0 && (C(), b == null || b(), g.current = !1);
    },
    [C, b]
  );
  return /* @__PURE__ */ u.jsx(
    Jp,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ u.jsx(
            q.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
li.displayName = Xp;
var Zp = "SelectPopperPosition", jr = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = De,
    ...a
  } = e, s = zn(n);
  return /* @__PURE__ */ u.jsx(
    Ms,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
jr.displayName = Zp;
var [Jp, wo] = zt(Et, {}), Tr = "SelectViewport", ui = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = bt(Tr, n), s = wo(Tr, n), i = le(t, a.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(Bn.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: z(o.onScroll, (l) => {
            const d = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && f) {
              const v = Math.abs(c.current - d.scrollTop);
              if (v > 0) {
                const g = window.innerHeight - De * 2, p = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), w = Math.max(p, y);
                if (w < g) {
                  const b = w + v, C = Math.min(g, b), S = b - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ui.displayName = Tr;
var di = "SelectGroup", [Qp, ev] = zt(di), tv = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Vt();
    return /* @__PURE__ */ u.jsx(Qp, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
tv.displayName = di;
var fi = "SelectLabel", mi = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ev(fi, n);
    return /* @__PURE__ */ u.jsx(q.div, { id: o.id, ...r, ref: t });
  }
);
mi.displayName = fi;
var Tn = "SelectItem", [nv, hi] = zt(Tn), pi = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = yt(Tn, n), c = bt(Tn, n), l = i.value === r, [d, f] = m.useState(a ?? ""), [h, v] = m.useState(!1), g = le(
      t,
      (b) => {
        var C;
        return (C = c.itemRefCallback) == null ? void 0 : C.call(c, b, r, o);
      }
    ), p = Vt(), y = m.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      nv,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: l,
        onItemTextChange: m.useCallback((b) => {
          f((C) => C || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          Bn.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ u.jsx(
              q.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: g,
                onFocus: z(s.onFocus, () => v(!0)),
                onBlur: z(s.onBlur, () => v(!1)),
                onClick: z(s.onClick, () => {
                  y.current !== "mouse" && w();
                }),
                onPointerUp: z(s.onPointerUp, () => {
                  y.current === "mouse" && w();
                }),
                onPointerDown: z(s.onPointerDown, (b) => {
                  y.current = b.pointerType;
                }),
                onPointerMove: z(s.onPointerMove, (b) => {
                  var C;
                  y.current = b.pointerType, o ? (C = c.onItemLeave) == null || C.call(c) : y.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: z(s.onPointerLeave, (b) => {
                  var C;
                  b.currentTarget === document.activeElement && ((C = c.onItemLeave) == null || C.call(c));
                }),
                onKeyDown: z(s.onKeyDown, (b) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (Vp.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
pi.displayName = Tn;
var en = "SelectItemText", vi = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = yt(en, n), i = bt(en, n), c = hi(en, n), l = Gp(en, n), [d, f] = m.useState(null), h = le(
      t,
      (w) => f(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, w, c.value, c.disabled);
      }
    ), v = d == null ? void 0 : d.textContent, g = m.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: y } = l;
    return be(() => (p(g), () => y(g)), [p, y, g]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(q.span, { id: c.textId, ...a, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? An.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
vi.displayName = en;
var gi = "SelectItemIndicator", yi = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return hi(gi, n).isSelected ? /* @__PURE__ */ u.jsx(q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
yi.displayName = gi;
var Ar = "SelectScrollUpButton", bi = m.forwardRef((e, t) => {
  const n = bt(Ar, e.__scopeSelect), r = wo(Ar, e.__scopeSelect), [o, a] = m.useState(!1), s = le(t, r.onScrollButtonChange);
  return be(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    wi,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
bi.displayName = Ar;
var Ir = "SelectScrollDownButton", xi = m.forwardRef((e, t) => {
  const n = bt(Ir, e.__scopeSelect), r = wo(Ir, e.__scopeSelect), [o, a] = m.useState(!1), s = le(t, r.onScrollButtonChange);
  return be(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < l;
        a(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    wi,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
xi.displayName = Ir;
var wi = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = bt("SelectScrollButton", n), s = m.useRef(null), i = Hn(n), c = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), be(() => {
    var d;
    const l = i().find((f) => f.ref.current === document.activeElement);
    (d = l == null ? void 0 : l.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u.jsx(
    q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: z(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: z(o.onPointerMove, () => {
        var l;
        (l = a.onItemLeave) == null || l.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: z(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), rv = "SelectSeparator", Ci = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ci.displayName = rv;
var Fr = "SelectArrow", ov = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = zn(n), a = yt(Fr, n), s = bt(Fr, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ u.jsx(Ns, { ...o, ...r, ref: t }) : null;
  }
);
ov.displayName = Fr;
function Si(e) {
  return e === "" || e === void 0;
}
var Pi = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = m.useRef(null), a = le(t, o), s = Zs(n);
    return m.useEffect(() => {
      const i = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(i, n), i.dispatchEvent(f);
      }
    }, [s, n]), /* @__PURE__ */ u.jsx(Js, { asChild: !0, children: /* @__PURE__ */ u.jsx("select", { ...r, ref: a, defaultValue: n }) });
  }
);
Pi.displayName = "BubbleSelect";
function Ei(e) {
  const t = Ve(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(i);
    },
    [t]
  ), a = m.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Ri(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = av(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function av(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sv = Qs, Mi = ti, iv = ri, cv = oi, lv = ai, Ni = si, uv = ui, _i = mi, Oi = pi, dv = vi, fv = yi, ki = bi, Di = xi, ji = Ci;
const mv = sv, hv = iv, Ti = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Mi,
  {
    ref: r,
    className: ce(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(cv, { asChild: !0, children: /* @__PURE__ */ u.jsx(Ul, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ti.displayName = Mi.displayName;
const Ai = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ki,
  {
    ref: n,
    className: ce(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(nu, {})
  }
));
Ai.displayName = ki.displayName;
const Ii = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Di,
  {
    ref: n,
    className: ce(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Xl, {})
  }
));
Ii.displayName = Di.displayName;
const Fi = m.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ u.jsx(lv, { children: /* @__PURE__ */ u.jsxs(
  Ni,
  {
    ref: o,
    className: ce(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(Ai, {}),
      /* @__PURE__ */ u.jsx(
        uv,
        {
          className: ce(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(Ii, {})
    ]
  }
) }));
Fi.displayName = Ni.displayName;
const pv = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  _i,
  {
    ref: n,
    className: ce("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
pv.displayName = _i.displayName;
const Li = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Oi,
  {
    ref: r,
    className: ce(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(fv, { children: /* @__PURE__ */ u.jsx(Aa, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(dv, { children: t })
    ]
  }
));
Li.displayName = Oi.displayName;
const vv = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ji,
  {
    ref: n,
    className: ce("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
vv.displayName = ji.displayName;
function gv({
  value: e,
  readModeValue: t,
  path: n,
  options: r
}) {
  const {
    handleOnChange: o,
    handleOnSubmit: a,
    editingMode: s,
    setSelectedFieldsForEditing: i
  } = Se(), c = (f) => {
    o(f, n);
  }, l = () => {
    a(e, n), s === re && i((f) => ({
      ...f,
      [n]: !1
    }));
  };
  let d = t === e;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(mv, { value: e, onValueChange: c, children: [
      /* @__PURE__ */ u.jsx(Ti, { className: "w-[240px]", children: /* @__PURE__ */ u.jsx(hv, { placeholder: "Select" }) }),
      /* @__PURE__ */ u.jsx(Fi, { children: r == null ? void 0 : r.map((f, h) => /* @__PURE__ */ u.jsx(Li, { value: f.key, children: f.value }, h + f.key)) })
    ] }),
    s !== Xe && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: d,
        size: "icon",
        className: `${d && "hidden"}`,
        title: "Submit",
        onClick: l,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    s === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    s !== re && !d && /* @__PURE__ */ u.jsx(Rt, { path: n })
  ] });
}
function yv(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), c = n.length;
    n = [...n, s];
    function l(f) {
      const { scope: h, children: v, ...g } = f, p = (h == null ? void 0 : h[e][c]) || i, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(p.Provider, { value: y, children: v });
    }
    function d(f, h) {
      const v = (h == null ? void 0 : h[e][c]) || i, g = m.useContext(v);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [l, d];
  }
  const o = () => {
    const a = n.map((s) => m.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, bv(o, ...t)];
}
function bv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var xr = "rovingFocusGroup.onEntryFocus", xv = { bubbles: !1, cancelable: !0 }, Gn = "RovingFocusGroup", [Lr, Wi, wv] = Xs(Gn), [Cv, Un] = yv(
  Gn,
  [wv]
), [Sv, Pv] = Cv(Gn), $i = m.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Lr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Lr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Ev, { ...e, ref: t }) }) })
);
$i.displayName = Gn;
var Ev = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = m.useRef(null), v = le(t, h), g = Vn(a), [p = null, y] = Wt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [w, b] = m.useState(!1), C = Ve(l), S = Wi(n), E = m.useRef(!1), [N, _] = m.useState(0);
  return m.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(xr, C), () => k.removeEventListener(xr, C);
  }, [C]), /* @__PURE__ */ u.jsx(
    Sv,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: p,
      onItemFocus: m.useCallback(
        (k) => y(k),
        [y]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => _((k) => k + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => _((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        q.div,
        {
          tabIndex: w || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: z(e.onFocus, (k) => {
            const Y = !E.current;
            if (k.target === k.currentTarget && Y && !w) {
              const $ = new CustomEvent(xr, xv);
              if (k.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                const B = S().filter((j) => j.focusable), D = B.find((j) => j.active), I = B.find((j) => j.id === p), H = [D, I, ...B].filter(
                  Boolean
                ).map((j) => j.ref.current);
                Bi(H, d);
              }
            }
            E.current = !1;
          }),
          onBlur: z(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Yi = "RovingFocusGroupItem", Vi = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      ...s
    } = e, i = Vt(), c = a || i, l = Pv(Yi, n), d = l.currentTabStopId === c, f = Wi(n), { onFocusableItemAdd: h, onFocusableItemRemove: v } = l;
    return m.useEffect(() => {
      if (r)
        return h(), () => v();
    }, [r, h, v]), /* @__PURE__ */ u.jsx(
      Lr.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": l.orientation,
            ...s,
            ref: t,
            onMouseDown: z(e.onMouseDown, (g) => {
              r ? l.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: z(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: z(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const p = Nv(g, l.orientation, l.dir);
              if (p !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (p === "last") w.reverse();
                else if (p === "prev" || p === "next") {
                  p === "prev" && w.reverse();
                  const b = w.indexOf(g.currentTarget);
                  w = l.loop ? _v(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => Bi(w));
              }
            })
          }
        )
      }
    );
  }
);
Vi.displayName = Yi;
var Rv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Mv(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Nv(e, t, n) {
  const r = Mv(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Rv[r];
}
function Bi(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function _v(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Hi = $i, zi = Vi, Co = "Radio", [Ov, Gi] = un(Co), [kv, Dv] = Ov(Co), Ui = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: s,
      value: i = "on",
      onCheck: c,
      form: l,
      ...d
    } = e, [f, h] = m.useState(null), v = le(t, (y) => h(y)), g = m.useRef(!1), p = f ? l || !!f.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(kv, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Xi(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...d,
          ref: v,
          onClick: z(e.onClick, (y) => {
            o || c == null || c(), p && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
          })
        }
      ),
      p && /* @__PURE__ */ u.jsx(
        jv,
        {
          control: f,
          bubbles: !g.current,
          name: r,
          value: i,
          checked: o,
          required: a,
          disabled: s,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ui.displayName = Co;
var Ki = "RadioIndicator", qi = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = Dv(Ki, n);
    return /* @__PURE__ */ u.jsx(fn, { present: r || a.checked, children: /* @__PURE__ */ u.jsx(
      q.span,
      {
        "data-state": Xi(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
qi.displayName = Ki;
var jv = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = m.useRef(null), s = Zs(n), i = vs(t);
  return m.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const h = new Event("click", { bubbles: r });
      f.call(c, n), c.dispatchEvent(h);
    }
  }, [s, n, r]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Xi(e) {
  return e ? "checked" : "unchecked";
}
var Tv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], So = "RadioGroup", [Av, og] = un(So, [
  Un,
  Gi
]), Zi = Un(), Ji = Gi(), [Iv, Fv] = Av(So), Qi = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: c,
      dir: l,
      loop: d = !0,
      onValueChange: f,
      ...h
    } = e, v = Zi(n), g = Vn(l), [p, y] = Wt({
      prop: a,
      defaultProp: o,
      onChange: f
    });
    return /* @__PURE__ */ u.jsx(
      Iv,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: p,
        onValueChange: y,
        children: /* @__PURE__ */ u.jsx(
          Hi,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: g,
            loop: d,
            children: /* @__PURE__ */ u.jsx(
              q.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: g,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Qi.displayName = So;
var ec = "RadioGroupItem", tc = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Fv(ec, n), s = a.disabled || r, i = Zi(n), c = Ji(n), l = m.useRef(null), d = le(t, l), f = a.value === o.value, h = m.useRef(!1);
    return m.useEffect(() => {
      const v = (p) => {
        Tv.includes(p.key) && (h.current = !0);
      }, g = () => h.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ u.jsx(
      zi,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ u.jsx(
          Ui,
          {
            disabled: s,
            required: a.required,
            checked: f,
            ...c,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: z((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: z(o.onFocus, () => {
              var v;
              h.current && ((v = l.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
tc.displayName = ec;
var Lv = "RadioGroupIndicator", nc = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ji(n);
    return /* @__PURE__ */ u.jsx(qi, { ...o, ...r, ref: t });
  }
);
nc.displayName = Lv;
var rc = Qi, oc = tc, Wv = nc;
const ac = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  rc,
  {
    className: ce("flex items-center gap-4", e),
    ...t,
    ref: n
  }
));
ac.displayName = rc.displayName;
const sc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  oc,
  {
    ref: n,
    className: ce(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Wv, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(Aa, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
sc.displayName = oc.displayName;
var $v = "Label", ic = m.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  q.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ic.displayName = $v;
var cc = ic;
const Yv = Na(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), lc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  cc,
  {
    ref: n,
    className: ce(Yv(), e),
    ...t
  }
));
lc.displayName = cc.displayName;
function Vv({
  value: e,
  readModeValue: t,
  path: n,
  options: r
}) {
  const {
    handleOnChange: o,
    handleOnSubmit: a,
    editingMode: s,
    setSelectedFieldsForEditing: i
  } = Se(), c = (f) => {
    o(f, n);
  }, l = () => {
    a(e, n), s === re && i((f) => ({
      ...f,
      [n]: !1
    }));
  };
  let d = t === e;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      ac,
      {
        value: e,
        onValueChange: c,
        defaultValue: e,
        children: r.map((f) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ u.jsx(sc, { value: f.value, id: f.key }),
          /* @__PURE__ */ u.jsx(lc, { htmlFor: f.key, children: f.value })
        ] }, f.key))
      }
    ),
    s !== Xe && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: d,
        size: "icon",
        className: `${d && "hidden"}`,
        title: "Submit",
        onClick: l,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    s === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    s !== re && !d && /* @__PURE__ */ u.jsx(Rt, { path: n })
  ] });
}
const uc = m.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
    "textarea",
    {
      className: ce(
        "rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
uc.displayName = "Textarea";
function Bv({
  value: e,
  readModeValue: t,
  path: n,
  fieldValidations: r
}) {
  const [o, a] = he(e), [s, i] = he(""), {
    handleOnChange: c,
    handleOnSubmit: l,
    editingMode: d,
    setSelectedFieldsForEditing: f,
    validations: h,
    setValidations: v,
    debouncing: g
  } = Se(), p = (S) => {
    const E = S.target.value;
    let N = null;
    r && (N = Gr(E, r), i(N || "")), a(E), y(E, N || "");
  }, y = $r(
    zr((S, E) => {
      const N = {
        ...h,
        [n]: E
      };
      c(S, n, N), r && v((_) => ({
        ..._,
        [n]: E
      }));
    }, g ? Br : 0),
    [c]
  ), w = () => {
    l(o, n), d === re && f((S) => ({
      ...S,
      [n]: !1
    }));
  }, b = t === o, C = s || h[n];
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      uc,
      {
        value: o,
        onChange: p
      }
    ),
    d !== Xe && !C && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: b,
        size: "icon",
        className: `${b && "hidden"}`,
        title: "Submit",
        onClick: w,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    d === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    d !== re && !b && /* @__PURE__ */ u.jsx(Rt, { path: n, callBack: () => {
      a(t || ""), i("");
    } }),
    /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: C })
  ] });
}
var Po = "Tabs", [Hv, ag] = un(Po, [
  Un
]), dc = Un(), [zv, Eo] = Hv(Po), fc = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...l
    } = e, d = Vn(i), [f, h] = Wt({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ u.jsx(
      zv,
      {
        scope: n,
        baseId: Vt(),
        value: f,
        onValueChange: h,
        orientation: s,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          q.div,
          {
            dir: d,
            "data-orientation": s,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
fc.displayName = Po;
var mc = "TabsList", hc = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Eo(mc, n), s = dc(n);
    return /* @__PURE__ */ u.jsx(
      Hi,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          q.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
hc.displayName = mc;
var pc = "TabsTrigger", vc = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Eo(pc, n), i = dc(n), c = bc(s.baseId, r), l = xc(s.baseId, r), d = r === s.value;
    return /* @__PURE__ */ u.jsx(
      zi,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          q.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": l,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: z(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: z(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !d && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
vc.displayName = pc;
var gc = "TabsContent", yc = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Eo(gc, n), c = bc(i.baseId, r), l = xc(i.baseId, r), d = r === i.value, f = m.useRef(d);
    return m.useEffect(() => {
      const h = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(fn, { present: o || d, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      q.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: l,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: h && a
      }
    ) });
  }
);
yc.displayName = gc;
function bc(e, t) {
  return `${e}-trigger-${t}`;
}
function xc(e, t) {
  return `${e}-content-${t}`;
}
var Gv = fc, wc = hc, Cc = vc, Sc = yc;
const Uv = Gv, Pc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  wc,
  {
    ref: n,
    className: ce(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Pc.displayName = wc.displayName;
const Wr = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Cc,
  {
    ref: n,
    className: ce(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
Wr.displayName = Cc.displayName;
const Kv = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Sc,
  {
    ref: n,
    className: ce(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Kv.displayName = Sc.displayName;
function Ca({ value: e, readModeValue: t, path: n }) {
  const {
    editingMode: r,
    handleOnChange: o,
    handleOnSubmit: a,
    setSelectedFieldsForEditing: s
  } = Se(), i = e === !0 ? "true" : e === !1 ? "false" : "", c = (f) => {
    o(f === "true", n);
  }, l = () => {
    a(e, n), r === re && s((f) => ({
      ...f,
      [n]: !1
    }));
  }, d = t === e;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      Uv,
      {
        value: i,
        onValueChange: c,
        children: /* @__PURE__ */ u.jsxs(Pc, { children: [
          /* @__PURE__ */ u.jsx(Wr, { value: "true", children: "True" }),
          /* @__PURE__ */ u.jsx(Wr, { value: "false", children: "False" })
        ] })
      }
    ),
    r !== Xe && /* @__PURE__ */ u.jsx(
      ye,
      {
        variant: "outline",
        disabled: d,
        size: "icon",
        className: `${d && "hidden"}`,
        title: "Submit",
        onClick: l,
        children: /* @__PURE__ */ u.jsx(ht, { size: 14 })
      }
    ),
    r === re && /* @__PURE__ */ u.jsx(pt, { path: n }),
    r !== re && !d && /* @__PURE__ */ u.jsx(Rt, { path: n })
  ] });
}
const qv = ({ path: e }) => {
  const { selectedFieldsForEditing: t, setSelectedFieldsForEditing: n } = Se(), r = () => {
    t && n && n((o) => ({
      ...o,
      [e]: !0
    }));
  };
  return /* @__PURE__ */ u.jsx(
    ye,
    {
      variant: "outline",
      size: "icon",
      title: "Edit",
      onClick: r,
      children: /* @__PURE__ */ u.jsx(nl, { size: 14 })
    }
  );
};
function Xv({ value: e, path: t, canEditInline: n }) {
  const r = () => e === void 0 ? { text: "Undefined", style: "text-gray-500" } : e === null ? { text: "Null", style: "text-rose-500" } : e === !0 ? { text: "True", style: "text-emerald-500" } : e === !1 ? { text: "False", style: "text-amber-500" } : e === "" ? { text: "Empty", style: "text-indigo-500" } : { text: e, style: "" }, { text: o, style: a } = r();
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx("span", { className: `${a}`, children: o }),
    n && /* @__PURE__ */ u.jsx(qv, { path: t })
  ] });
}
function Zv({
  value: e,
  path: t
}) {
  const {
    isEditing: n,
    editingMode: r,
    editJsonState: o,
    editableFields: a,
    nonEditableFields: s,
    allFieldsEditable: i,
    selectedFieldsForEditing: c,
    regexPatternsTrie: l,
    enableTypeBasedRendering: d
  } = Se();
  let f = null;
  vu(t) && !a[t] && (f = pu(l.current, t)), f || (f = t);
  const h = a && a.hasOwnProperty(f), v = s && s.hasOwnProperty(f), g = n && (i || h) && !v && r !== re, p = r === re && c[t] && !v;
  if (g || p) {
    let w = Ia(o, t);
    if (w == null && (w = ""), (e === null || e == null) && (e = ""), h && a[f] !== !0) {
      const b = a[f];
      switch (b.type) {
        case "string": {
          const C = b == null ? void 0 : b.validations;
          return /* @__PURE__ */ u.jsx(
            rr,
            {
              path: t,
              value: w,
              readModeValue: e,
              fieldValidations: C
            }
          );
        }
        case "number": {
          const C = b == null ? void 0 : b.validations;
          return /* @__PURE__ */ u.jsx(
            zo,
            {
              path: t,
              value: w,
              readModeValue: e,
              fieldValidations: C
            }
          );
        }
        case "select":
          return /* @__PURE__ */ u.jsx(
            gv,
            {
              path: t,
              value: w,
              readModeValue: e,
              options: b.options
            }
          );
        case "date":
          return /* @__PURE__ */ u.jsx(
            Ip,
            {
              value: w,
              readModeValue: e,
              path: t,
              format: b.format
            }
          );
        case "radio":
          return /* @__PURE__ */ u.jsx(
            Vv,
            {
              path: t,
              value: w,
              readModeValue: e,
              options: b.options
            }
          );
        case "textArea": {
          const C = b == null ? void 0 : b.validations;
          return /* @__PURE__ */ u.jsx(
            Bv,
            {
              path: t,
              value: w,
              readModeValue: e,
              fieldValidations: C
            }
          );
        }
        case "boolean":
          return /* @__PURE__ */ u.jsx(
            Ca,
            {
              path: t,
              value: w,
              readModeValue: e
            }
          );
        default:
          return /* @__PURE__ */ u.jsx(
            rr,
            {
              path: t,
              value: w,
              readModeValue: e
            }
          );
      }
    } else {
      if (d) {
        if (typeof e == "number")
          return /* @__PURE__ */ u.jsx(
            zo,
            {
              path: t,
              value: w,
              readModeValue: e
            }
          );
        if (typeof e == "boolean")
          return /* @__PURE__ */ u.jsx(
            Ca,
            {
              path: t,
              value: w,
              readModeValue: e
            }
          );
      }
      return /* @__PURE__ */ u.jsx(
        rr,
        {
          path: t,
          value: w,
          readModeValue: e
        }
      );
    }
  }
  const y = r === re && (i || h) && !v;
  return /* @__PURE__ */ u.jsx(
    Xv,
    {
      value: e,
      path: t,
      canEditInline: y
    }
  );
}
class Sa {
  constructor() {
    Ut(this, "children");
    Ut(this, "regexPatterns");
    Ut(this, "paths");
    this.children = {}, this.regexPatterns = [], this.paths = [];
  }
}
class Jv {
  constructor() {
    Ut(this, "root");
    this.root = new Sa();
  }
  // Insert paths into the trie with regex patterns
  insert(t, n) {
    let r = this.root;
    const o = t.split(".");
    for (const a of o)
      r.children[a] || (r.children[a] = new Sa()), r = r.children[a];
    r.regexPatterns.push(n), r.paths.push(t);
  }
  // Function to traverse trie and gather potential regex patterns for matching
  findMatchingRegex(t) {
    const n = [[this.root, 0]], r = t.split("."), o = {
      regexPatterns: [],
      paths: []
    };
    for (; n.length > 0; ) {
      const [a, s] = n.shift();
      if (s === r.length) {
        o.regexPatterns.push(...a.regexPatterns), o.paths.push(...a.paths);
        continue;
      }
      const i = r[s];
      for (const c in a.children)
        (c === "[]" || c === i) && n.push([a.children[c], s + 1]);
    }
    return o;
  }
}
const Ec = ft(
  {}
), Se = () => mt(Ec);
function sg({
  json: e,
  className: t = "",
  isExpanded: n = !1,
  onSubmit: r,
  onChange: o,
  editingConfig: a = {},
  globalSubmitButtonConfigs: s = {},
  styles: i = {}
}) {
  const [c, l] = he(e), [d, f] = he(e), h = jt(e), [v, g] = he({}), [p, y] = he({}), {
    editingMode: w = re,
    allFieldsEditable: b = !0,
    editableFields: C = {},
    nonEditableFields: S = {},
    debouncing: E = !1,
    enableTypeBasedRendering: N = !0
  } = a, _ = jt(new Jv()), k = jt({}), Y = jt({});
  if (Cn(e, h.current) || (l(e), f(e), h.current = e), !Cn(k.current, C) || !Cn(Y.current, S)) {
    for (let R in C)
      if (R.includes(Bo)) {
        const P = Ho(R);
        _.current.insert(R, P);
      }
    for (let R in S)
      if (R.includes(Bo)) {
        const P = Ho(R);
        _.current.insert(R, P);
      }
    k.current = Ue(C), Y.current = Ue(S);
  }
  let $ = !1;
  "isEditing" in a && ($ = a.isEditing || !1);
  const B = (R, P, T = p) => {
    const X = Ue(d);
    nr(X, P, R), o && c && o({
      // callback function exposed to lib consumer
      initialJson: Ue(d),
      updatedJson: X,
      updatedKeys: Sn(c, X),
      editorMode: w,
      validations: T
    }), f(X);
  }, D = (R, P) => {
    const T = Ue(c);
    nr(T, P, R), r && c && r({
      // callback function exposed to lib consumer
      initialJson: Ue(c),
      updatedJson: T,
      updatedKeys: Sn(c, T),
      editorMode: w,
      submitType: w === tr ? Bl : w
    }), l(T);
  }, I = () => {
    const R = Ue(d);
    r && c && r({
      // callback function exposed to lib consumer
      initialJson: Ue(d),
      updatedJson: R,
      updatedKeys: Sn(c, R),
      editorMode: w,
      submitType: w === tr ? Xe : w
    }), l(R);
  }, A = (R) => {
    if (c) {
      const P = Ia(c, R), T = Ue(d);
      nr(T, R, P), f(T), y((X) => ({
        ...X,
        [R]: ""
      }));
    }
  }, H = (R, P = "", T = !0) => typeof R == "object" && R !== null ? Array.isArray(R) ? /* @__PURE__ */ u.jsx(
    uu,
    {
      arr: R,
      path: P,
      isRootLevelKey: T,
      renderJson: H
    }
  ) : /* @__PURE__ */ u.jsx(
    cu,
    {
      obj: R,
      isRootLevelKey: T,
      path: P,
      renderJson: H
    }
  ) : /* @__PURE__ */ u.jsx(Zv, { value: R, path: P }), j = Object.values(p).reduce(
    (R, P) => P !== "" ? R + 1 : R,
    0
  );
  return /* @__PURE__ */ u.jsx(
    Ec.Provider,
    {
      value: {
        editingMode: w,
        jsonState: c,
        editJsonState: d,
        isEditing: $,
        allFieldsEditable: b,
        isExpanded: n,
        editableFields: C,
        nonEditableFields: S,
        handleOnChange: B,
        handleOnSubmit: D,
        selectedFieldsForEditing: v,
        setSelectedFieldsForEditing: g,
        validations: p,
        setValidations: y,
        debouncing: E,
        regexPatternsTrie: _,
        handleFieldReset: A,
        enableTypeBasedRendering: N
      },
      children: /* @__PURE__ */ u.jsxs("div", { style: i, className: ce("w-full h-auto", t), children: [
        H(c),
        [Xe, tr].includes(
          w
        ) && $ && j === 0 && /* @__PURE__ */ u.jsxs(
          ye,
          {
            variant: (s == null ? void 0 : s.variant) || "secondary",
            className: ce("ml-5 mt-2", s == null ? void 0 : s.className),
            onClick: I,
            children: [
              (s == null ? void 0 : s.buttonText) || "Submit",
              s == null ? void 0 : s.children
            ]
          }
        )
      ] })
    }
  );
}
export {
  sg as JsonEditor
};
