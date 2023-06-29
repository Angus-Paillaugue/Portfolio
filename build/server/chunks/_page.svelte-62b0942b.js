import { c as create_ssr_component, f as each, v as validate_component, e as escape, d as add_attribute, h as compute_rest_props, i as spread, j as escape_object, k as escape_attribute_value, g as getContext, l as compute_slots } from './ssr-c35b495b.js';
import { l as languages, T as Tooltip, i as is_void } from './Tooltip-aa396bc0.js';
import { p as projects } from './index2-f0bc490d.js';
import { L as Link } from './Link-3b0975ea.js';
import { twMerge } from 'tailwind-merge';
import '@popperjs/core';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, X = [];
          if (seed2 === (seed2 | 0)) {
            X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            X[7] = -1;
          else
            X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+new Date(), global2, plugins, global2.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      typeof self !== "undefined" ? self : exports,
      [],
      Math
    );
  }
});

// node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// src/internal/styling/classesGeneration.ts
__toESM(require_seedrandom2(), 1);
Promise.resolve();

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["colorType", "classes"]);
  let { colorType = "default" } = $$props;
  let { classes = colorType == "gray" ? "button-border-gray hover:gap-4 w-fit" : colorType == "red" ? "button-red hover:gap-4 w-fit" : "button-primary hover:gap-4 w-fit" } = $$props;
  if ($$props.colorType === void 0 && $$bindings.colorType && colorType !== void 0)
    $$bindings.colorType(colorType);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `${$$restProps.href ? `<a${spread(
    [
      escape_object($$restProps),
      {
        href: escape_attribute_value($$restProps.href)
      },
      {
        class: escape_attribute_value(twMerge(classes, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classes, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer ? "rounded-b-lg" : "", $$slots.header ? "rounded-t-lg" : "");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const theme = "light";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let message;
  let sendEmailButtonContent = "Submit";
  const techStack = ["HTML", "Javascript", "TailwindCSS", "Svelte", "MongoDB"];
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/angus-paillaugue-573aa91a5/"
    },
    {
      name: "Github",
      link: "https://github.com/mere-patrie"
    },
    {
      name: "CodeWars",
      link: "https://www.codewars.com/users/mere-patrie"
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="p-4 lg:p-10 sm:p-6 min-h-screen flex flex-col md:justify-center items-center relative"><div class="absolute top-0 left-0 w-full h-full duration-[10s]" style="z-index: -20; background: url(https://astro.build/assets/noise.webp) repeat,linear-gradient(0deg,#FFBCAD 0%,#EF562F 100%); background-blend-mode: overlay;-webkit-mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);"></div> <div class="flex flex-col w-full max-w-4xl mx-auto md:gap-20 gap-5 max-h-full md:max-h-3/4"> <div class="flex flex-col-reverse mx-auto md:gap-20 gap-5 md:flex-row justify-center items-start md:w-full max-w-sm md:max-w-none" data-svelte-h="svelte-kagxqn"><div class="block md:w-3/5 w-full text-start h-full"><h1 class="font-bold text-7xl text-center md:text-start">Full stack web dev</h1> <p class="mt-4 font-normal text-lg text-center md:text-start">Hi 👋, I&#39;m Angus. A passionate full-stack web developer based in Toulouse, France</p></div> <div class="block md:w-2/5 w-full max-w-xs mx-auto"><div class="w-full aspect-square bg-no-repeat bg-cover bg-center border-2 border-primary-600 transition-all duration-1000 ease-in-out shadow-2xl" style="border-radius: 28% 72% 22% 78% / 39% 23% 77% 61%; transform: rotate(0deg); animation: morph 8s ease-in-out infinite; background-image: url('angus.jpg');"></div></div>  <style>@keyframes morph {
                    0% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                    50% {
                        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
                    }
                    100% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                }</style></div>  <div class="flex md:flex-row flex-col mx-auto gap-5 md:justify-start justify-center items-center md:w-full max-w-sm md:max-w-none flex-wrap"><p class="text-lg font-bold md:pr-5 md:border-r-2 md:border-b-0 border-b-2 border-text-main md:mr-4" data-svelte-h="svelte-ovfq3">Tech Stack</p> <div class="flex flex-row gap-5 flex-wrap md:justify-start justify-center">${each(techStack, (language) => {
      return `<div><img src="${"/icons/" + escape(languages.filter((lang) => lang.name == language)[0].icons[theme], true)}" class="md:h-20 h-14 cursor-pointer drop-shadow-xl"${add_attribute("alt", language, 0)}> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(language)}`;
        }
      })} </div>`;
    })}</div></div></div></section> <div class="relative">   <div class="absolute top-0 left-0 w-full h-full bg-top" style="z-index: -20;background-image: url(/bg.svg);image-rendering: pixelated;"></div> <div class="absolute top-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"></div> <div class="absolute bottom-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"></div> <section id="about" class="p-4 lg:p-10 sm:p-6 flex flex-col lg:justify-center items-center"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><div class="grid lg:grid-cols-2 grid-cols-1 items-center md:gap-10 gap-0 w-full max-w-5xl mx-auto rounded-lg lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300"><div class="h-full relative lg:-mt-0 -mt-20 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9" data-svelte-h="svelte-k4vdo9"><div class="absolute top-0 left-0 h-full w-full z-10 opacity-70 rounded-2xl" style="background: url(https://astro.build/assets/noise.webp) repeat;background-blend-mode: overlay;"></div> <img src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="Web developer" class="rounded-2xl w-full h-full"></div> <div class="w-full flex flex-col gap-3"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-xs3dk8">ABOUT ME</h4> <h4 class="font-bold" data-svelte-h="svelte-f4a6yh">A dedicated Full-stack Developer based in Toulouse, France 📍</h4> <p class="leading-6" data-svelte-h="svelte-l2alcg">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p> ${validate_component(Button, "Button").$$render($$result, { href: "myCv.pdf", target: "_blank" }, {}, {
      default: () => {
        return `My CV`;
      }
    })} <div class="flex flex-row flex-wrap gap-5">${each(socials, (social) => {
      return `<a${add_attribute("href", social.link, 0)} target="_blank"><img src="${"/icons/" + escape(languages.filter((lang) => lang.name == social.name)[0].icons[theme], true)}" class="md:h-14 h-10 cursor-pointer drop-shadow-md"${add_attribute("alt", social.name, 0)}> </a>`;
    })}</div></div></div></div></section> <section id="work" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-1z1ozd">MY PROJECTS</h4> ${each(projects, (project, index) => {
      return `<div class="${"flex md:flex-" + escape(index % 2 == 0 ? "row" : "row-reverse", true) + " flex-col md:gap-20 gap-5 rounded-2xl md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 project"}"><div class="${"rounded-2xl border border-gray-300 " + escape(
        index % 2 == 0 ? "lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9" : "lg:-mt-0 -mt-9 lg:-ml-0 -ml-9 lg:-mr-20 -mr-9",
        true
      )}"><img src="${"/" + escape(project.imgSrc, true)}" alt="${escape(project.title, true) + " img"}" class="rounded-2xl w-full h-full"></div> <div class="flex flex-col w-full gap-4">${validate_component(Link, "Link").$$render(
        $$result,
        {
          href: "/project/" + project.title,
          class: "w-fit"
        },
        {},
        {
          default: () => {
            return `<h4 class="font-bold">${escape(project.title)}</h4>`;
          }
        }
      )} ${validate_component(Link, "Link").$$render(
        $$result,
        {
          href: project.link,
          target: "_blank",
          class: "w-fit"
        },
        {},
        {
          default: () => {
            return `${escape(project.link)}<i class="bi bi-box-arrow-up-right ml-2"></i>`;
          }
        }
      )} <p class="text-ellipsis line-clamp-4"><!-- HTML_TAG_START -->${project.description}<!-- HTML_TAG_END --> ${validate_component(Link, "Link").$$render($$result, { href: "/project/" + project.title }, {}, {
        default: () => {
          return `More info`;
        }
      })}</p> <div class="flex flex-row gap-2 flex-wrap">${each(project.languages, (language) => {
        return `<img src="${"/icons/" + escape(languages.filter((lang) => lang.name == language)[0].icons[theme], true)}" class="md:h-14 h-10 cursor-pointer drop-shadow-md"${add_attribute("alt", language, 0)}> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(language)}`;
          }
        })}`;
      })} </div></div> </div>`;
    })}</div></section> <section id="experience" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-12axh2e">MY EXPERIENCES</h4> <div class="rounded-lg md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300" data-svelte-h="svelte-ginyvp"><ol class="relative border-l border-gray-300 dark:border-gray-700 "><li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li> <li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li> <li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li></ol></div></div></section> <section id="contact" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><form class="rounded-lg md:p-10 p-6 items-start bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 flex flex-col gap-5 w-full"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-87kmi7">CONTACT ME</h4> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
      default: () => {
        return `E-mail`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Your e-mail",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "message", class: "mb-2" }, {}, {
      default: () => {
        return `Message`;
      }
    })} ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "message",
        placeholder: "Your message",
        rows: "8",
        name: "message",
        value: message
      },
      {
        value: ($$value) => {
          message = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${sendEmailButtonContent}<!-- HTML_TAG_END -->`;
      }
    })}</form></div></section></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-62b0942b.js.map
