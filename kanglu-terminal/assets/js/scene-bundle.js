(() => {
  // 康鹭记忆-终版/assets/vendor/three.module.min.js
  /**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  var t = "169";
  var l = 1;
  var c = 2;
  var h = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var y = 100;
  var C = 204;
  var P = 205;
  var Y = 0;
  var Z = 1;
  var J = 2;
  var K = 0;
  var $ = 1;
  var Q = 2;
  var tt = 3;
  var et = 4;
  var nt = 5;
  var it = 6;
  var rt = 7;
  var ot = 300;
  var lt = 301;
  var ct = 302;
  var ht = 303;
  var ut = 304;
  var dt = 306;
  var pt = 1e3;
  var mt = 1001;
  var ft = 1002;
  var gt = 1003;
  var vt = 1004;
  var xt = 1005;
  var Mt = 1006;
  var St = 1007;
  var wt = 1008;
  var Et = 1009;
  var At = 1010;
  var Rt = 1011;
  var Ct = 1012;
  var Pt = 1013;
  var It = 1014;
  var Lt = 1015;
  var Ut = 1016;
  var Nt = 1017;
  var Dt = 1018;
  var Ot = 1020;
  var Ft = 35902;
  var Bt = 1021;
  var zt = 1022;
  var kt = 1023;
  var Vt = 1024;
  var Ht = 1025;
  var Gt = 1026;
  var Wt = 1027;
  var Xt = 1028;
  var jt = 1029;
  var qt = 1030;
  var Yt = 1031;
  var Jt = 1033;
  var Kt = 33776;
  var $t = 33777;
  var Qt = 33778;
  var te = 33779;
  var ee = 35840;
  var ne = 35841;
  var ie = 35842;
  var re = 35843;
  var se = 36196;
  var ae = 37492;
  var oe = 37496;
  var le = 37808;
  var ce = 37809;
  var he = 37810;
  var ue = 37811;
  var de = 37812;
  var pe = 37813;
  var me = 37814;
  var fe = 37815;
  var ge = 37816;
  var ve = 37817;
  var _e = 37818;
  var xe = 37819;
  var ye = 37820;
  var Me = 37821;
  var Se = 36492;
  var be = 36494;
  var we = 36495;
  var Te = 36283;
  var Ee = 36284;
  var Ae = 36285;
  var Re = 36286;
  var Le = 2300;
  var Ue = 2301;
  var Ne = 2302;
  var De = 2400;
  var Oe = 2401;
  var Fe = 2402;
  var Ze = "";
  var Je = "srgb";
  var Ke = "srgb-linear";
  var $e = "display-p3";
  var Qe = "display-p3-linear";
  var tn = "linear";
  var en = "srgb";
  var nn = "rec709";
  var rn = "p3";
  var an = 7680;
  var wn = 515;
  var Cn = 35044;
  var zn = "300 es";
  var kn = 2e3;
  var Vn = 2001;
  var Hn = class {
    addEventListener(t2, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t2] && (n[t2] = []), -1 === n[t2].indexOf(e) && n[t2].push(e);
    }
    hasEventListener(t2, e) {
      if (void 0 === this._listeners) return false;
      const n = this._listeners;
      return void 0 !== n[t2] && -1 !== n[t2].indexOf(e);
    }
    removeEventListener(t2, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t2];
      if (void 0 !== n) {
        const t3 = n.indexOf(e);
        -1 !== t3 && n.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t2.type];
      if (void 0 !== e) {
        t2.target = this;
        const n = e.slice(0);
        for (let e2 = 0, i = n.length; e2 < i; e2++) n[e2].call(this, t2);
        t2.target = null;
      }
    }
  };
  var Gn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var Wn = 1234567;
  var Xn = Math.PI / 180;
  var jn = 180 / Math.PI;
  function qn() {
    const t2 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
    return (Gn[255 & t2] + Gn[t2 >> 8 & 255] + Gn[t2 >> 16 & 255] + Gn[t2 >> 24 & 255] + "-" + Gn[255 & e] + Gn[e >> 8 & 255] + "-" + Gn[e >> 16 & 15 | 64] + Gn[e >> 24 & 255] + "-" + Gn[63 & n | 128] + Gn[n >> 8 & 255] + "-" + Gn[n >> 16 & 255] + Gn[n >> 24 & 255] + Gn[255 & i] + Gn[i >> 8 & 255] + Gn[i >> 16 & 255] + Gn[i >> 24 & 255]).toLowerCase();
  }
  function Yn(t2, e, n) {
    return Math.max(e, Math.min(n, t2));
  }
  function Zn(t2, e) {
    return (t2 % e + e) % e;
  }
  function Jn(t2, e, n) {
    return (1 - n) * t2 + n * e;
  }
  function Kn(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function $n(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var Qn = { DEG2RAD: Xn, RAD2DEG: jn, generateUUID: qn, clamp: Yn, euclideanModulo: Zn, mapLinear: function(t2, e, n, i, r) {
    return i + (t2 - e) * (r - i) / (n - e);
  }, inverseLerp: function(t2, e, n) {
    return t2 !== e ? (n - t2) / (e - t2) : 0;
  }, lerp: Jn, damp: function(t2, e, n, i) {
    return Jn(t2, e, 1 - Math.exp(-n * i));
  }, pingpong: function(t2, e = 1) {
    return e - Math.abs(Zn(t2, 2 * e) - e);
  }, smoothstep: function(t2, e, n) {
    return t2 <= e ? 0 : t2 >= n ? 1 : (t2 = (t2 - e) / (n - e)) * t2 * (3 - 2 * t2);
  }, smootherstep: function(t2, e, n) {
    return t2 <= e ? 0 : t2 >= n ? 1 : (t2 = (t2 - e) / (n - e)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, randInt: function(t2, e) {
    return t2 + Math.floor(Math.random() * (e - t2 + 1));
  }, randFloat: function(t2, e) {
    return t2 + Math.random() * (e - t2);
  }, randFloatSpread: function(t2) {
    return t2 * (0.5 - Math.random());
  }, seededRandom: function(t2) {
    void 0 !== t2 && (Wn = t2);
    let e = Wn += 1831565813;
    return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }, degToRad: function(t2) {
    return t2 * Xn;
  }, radToDeg: function(t2) {
    return t2 * jn;
  }, isPowerOfTwo: function(t2) {
    return 0 == (t2 & t2 - 1) && 0 !== t2;
  }, ceilPowerOfTwo: function(t2) {
    return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
  }, floorPowerOfTwo: function(t2) {
    return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
  }, setQuaternionFromProperEuler: function(t2, e, n, i, r) {
    const s = Math.cos, a = Math.sin, o = s(n / 2), l2 = a(n / 2), c2 = s((e + i) / 2), h2 = a((e + i) / 2), u2 = s((e - i) / 2), d2 = a((e - i) / 2), p2 = s((i - e) / 2), m = a((i - e) / 2);
    switch (r) {
      case "XYX":
        t2.set(o * h2, l2 * u2, l2 * d2, o * c2);
        break;
      case "YZY":
        t2.set(l2 * d2, o * h2, l2 * u2, o * c2);
        break;
      case "ZXZ":
        t2.set(l2 * u2, l2 * d2, o * h2, o * c2);
        break;
      case "XZX":
        t2.set(o * h2, l2 * m, l2 * p2, o * c2);
        break;
      case "YXY":
        t2.set(l2 * p2, o * h2, l2 * m, o * c2);
        break;
      case "ZYZ":
        t2.set(l2 * m, l2 * p2, o * h2, o * c2);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
    }
  }, normalize: $n, denormalize: Kn };
  var ti = class _ti {
    constructor(t2 = 0, e = 0) {
      _ti.prototype.isVector2 = true, this.x = t2, this.y = e;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e) {
      return this.x = t2, this.y = e, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = t2.elements;
      return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Yn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this;
    }
    rotateAround(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = this.x - t2.x, s = this.y - t2.y;
      return this.x = r * n - s * i + t2.x, this.y = r * i + s * n + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var ei = class _ei {
    constructor(t2, e, n, i, r, s, a, o, l2) {
      _ei.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l2);
    }
    set(t2, e, n, i, r, s, a, o, l2) {
      const c2 = this.elements;
      return c2[0] = t2, c2[1] = i, c2[2] = a, c2[3] = e, c2[4] = r, c2[5] = o, c2[6] = n, c2[7] = s, c2[8] = l2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e = t2.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l2 = n[1], c2 = n[4], h2 = n[7], u2 = n[2], d2 = n[5], p2 = n[8], m = i[0], f = i[3], g = i[6], v = i[1], _ = i[4], x = i[7], y2 = i[2], M = i[5], S = i[8];
      return r[0] = s * m + a * v + o * y2, r[3] = s * f + a * _ + o * M, r[6] = s * g + a * x + o * S, r[1] = l2 * m + c2 * v + h2 * y2, r[4] = l2 * f + c2 * _ + h2 * M, r[7] = l2 * g + c2 * x + h2 * S, r[2] = u2 * m + d2 * v + p2 * y2, r[5] = u2 * f + d2 * _ + p2 * M, r[8] = u2 * g + d2 * x + p2 * S, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[3] *= t2, e[6] *= t2, e[1] *= t2, e[4] *= t2, e[7] *= t2, e[2] *= t2, e[5] *= t2, e[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8];
      return e * s * c2 - e * a * l2 - n * r * c2 + n * a * o + i * r * l2 - i * s * o;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8], h2 = c2 * s - a * l2, u2 = a * o - c2 * r, d2 = l2 * r - s * o, p2 = e * h2 + n * u2 + i * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p2;
      return t2[0] = h2 * m, t2[1] = (i * l2 - c2 * n) * m, t2[2] = (a * n - i * s) * m, t2[3] = u2 * m, t2[4] = (c2 * e - i * o) * m, t2[5] = (i * r - a * e) * m, t2[6] = d2 * m, t2[7] = (n * o - l2 * e) * m, t2[8] = (s * e - n * r) * m, this;
    }
    transpose() {
      let t2;
      const e = this.elements;
      return t2 = e[1], e[1] = e[3], e[3] = t2, t2 = e[2], e[2] = e[6], e[6] = t2, t2 = e[5], e[5] = e[7], e[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e = this.elements;
      return t2[0] = e[0], t2[1] = e[3], t2[2] = e[6], t2[3] = e[1], t2[4] = e[4], t2[5] = e[7], t2[6] = e[2], t2[7] = e[5], t2[8] = e[8], this;
    }
    setUvTransform(t2, e, n, i, r, s, a) {
      const o = Math.cos(r), l2 = Math.sin(r);
      return this.set(n * o, n * l2, -n * (o * s + l2 * a) + s + t2, -i * l2, i * o, -i * (-l2 * s + o * a) + a + e, 0, 0, 1), this;
    }
    scale(t2, e) {
      return this.premultiply(ni.makeScale(t2, e)), this;
    }
    rotate(t2) {
      return this.premultiply(ni.makeRotation(-t2)), this;
    }
    translate(t2, e) {
      return this.premultiply(ni.makeTranslation(t2, e)), this;
    }
    makeTranslation(t2, e) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t2, e) {
      return this.set(t2, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var ni = new ei();
  function ii(t2) {
    for (let e = t2.length - 1; e >= 0; --e) if (t2[e] >= 65535) return true;
    return false;
  }
  function ai(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function oi() {
    const t2 = ai("canvas");
    return t2.style.display = "block", t2;
  }
  var li = {};
  function ci(t2) {
    t2 in li || (li[t2] = true, console.warn(t2));
  }
  var hi = new ei().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199);
  var ui = new ei().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735);
  var di = { [Ke]: { transfer: tn, primaries: nn, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (t2) => t2, fromReference: (t2) => t2 }, [Je]: { transfer: en, primaries: nn, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (t2) => t2.convertSRGBToLinear(), fromReference: (t2) => t2.convertLinearToSRGB() }, [Qe]: { transfer: tn, primaries: rn, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (t2) => t2.applyMatrix3(ui), fromReference: (t2) => t2.applyMatrix3(hi) }, [$e]: { transfer: en, primaries: rn, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (t2) => t2.convertSRGBToLinear().applyMatrix3(ui), fromReference: (t2) => t2.applyMatrix3(hi).convertLinearToSRGB() } };
  var pi = /* @__PURE__ */ new Set([Ke, Qe]);
  var mi = { enabled: true, _workingColorSpace: Ke, get workingColorSpace() {
    return this._workingColorSpace;
  }, set workingColorSpace(t2) {
    if (!pi.has(t2)) throw new Error(`Unsupported working color space, "${t2}".`);
    this._workingColorSpace = t2;
  }, convert: function(t2, e, n) {
    if (false === this.enabled || e === n || !e || !n) return t2;
    const i = di[e].toReference;
    return (0, di[n].fromReference)(i(t2));
  }, fromWorkingColorSpace: function(t2, e) {
    return this.convert(t2, this._workingColorSpace, e);
  }, toWorkingColorSpace: function(t2, e) {
    return this.convert(t2, e, this._workingColorSpace);
  }, getPrimaries: function(t2) {
    return di[t2].primaries;
  }, getTransfer: function(t2) {
    return t2 === Ze ? tn : di[t2].transfer;
  }, getLuminanceCoefficients: function(t2, e = this._workingColorSpace) {
    return t2.fromArray(di[e].luminanceCoefficients);
  } };
  function fi(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function gi(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var vi;
  var _i = class {
    static getDataURL(t2) {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let e;
      if (t2 instanceof HTMLCanvasElement) e = t2;
      else {
        void 0 === vi && (vi = ai("canvas")), vi.width = t2.width, vi.height = t2.height;
        const n = vi.getContext("2d");
        t2 instanceof ImageData ? n.putImageData(t2, 0, 0) : n.drawImage(t2, 0, 0, t2.width, t2.height), e = vi;
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t2), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e = ai("canvas");
        e.width = t2.width, e.height = t2.height;
        const n = e.getContext("2d");
        n.drawImage(t2, 0, 0, t2.width, t2.height);
        const i = n.getImageData(0, 0, t2.width, t2.height), r = i.data;
        for (let t3 = 0; t3 < r.length; t3++) r[t3] = 255 * fi(r[t3] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t2.data) {
        const e = t2.data.slice(0);
        for (let t3 = 0; t3 < e.length; t3++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t3] = Math.floor(255 * fi(e[t3] / 255)) : e[t3] = fi(e[t3]);
        return { data: e, width: t2.width, height: t2.height };
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var xi = 0;
  var yi = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: xi++ }), this.uuid = qn(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const n = { uuid: this.uuid, url: "" }, i = this.data;
      if (null !== i) {
        let t3;
        if (Array.isArray(i)) {
          t3 = [];
          for (let e2 = 0, n2 = i.length; e2 < n2; e2++) i[e2].isDataTexture ? t3.push(Mi(i[e2].image)) : t3.push(Mi(i[e2]));
        } else t3 = Mi(i);
        n.url = t3;
      }
      return e || (t2.images[this.uuid] = n), n;
    }
  };
  function Mi(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? _i.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  var Si = 0;
  var bi = class _bi extends Hn {
    constructor(t2 = _bi.DEFAULT_IMAGE, e = _bi.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = kt, o = Et, l2 = _bi.DEFAULT_ANISOTROPY, c2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Si++ }), this.uuid = qn(), this.name = "", this.source = new yi(t2), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l2, this.format = a, this.internalFormat = null, this.type = o, this.offset = new ti(0, 0), this.repeat = new ti(1, 1), this.center = new ti(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ei(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = c2, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(t2 = null) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t2.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ot) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case pt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case mt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case pt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case mt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  bi.DEFAULT_IMAGE = null, bi.DEFAULT_MAPPING = ot, bi.DEFAULT_ANISOTROPY = 1;
  var wi = class _wi {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      _wi.prototype.isVector4 = true, this.x = t2, this.y = e, this.z = n, this.w = i;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e, n, i) {
      return this.x = t2, this.y = e, this.z = n, this.w = i, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this.w = t2.w + e.w, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this.w += t2.w * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this.w = t2.w - e.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = this.w, s = t2.elements;
      return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e = Math.sqrt(1 - t2.w * t2.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e, this.y = t2.y / e, this.z = t2.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e, n, i, r;
      const s = 0.01, a = 0.1, o = t2.elements, l2 = o[0], c2 = o[4], h2 = o[8], u2 = o[1], d2 = o[5], p2 = o[9], m = o[2], f = o[6], g = o[10];
      if (Math.abs(c2 - u2) < s && Math.abs(h2 - m) < s && Math.abs(p2 - f) < s) {
        if (Math.abs(c2 + u2) < a && Math.abs(h2 + m) < a && Math.abs(p2 + f) < a && Math.abs(l2 + d2 + g - 3) < a) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t3 = (l2 + 1) / 2, o2 = (d2 + 1) / 2, v2 = (g + 1) / 2, _ = (c2 + u2) / 4, x = (h2 + m) / 4, y2 = (p2 + f) / 4;
        return t3 > o2 && t3 > v2 ? t3 < s ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(t3), i = _ / n, r = x / n) : o2 > v2 ? o2 < s ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(o2), n = _ / i, r = y2 / i) : v2 < s ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(v2), n = x / r, i = y2 / r), this.set(n, i, r, e), this;
      }
      let v = Math.sqrt((f - p2) * (f - p2) + (h2 - m) * (h2 - m) + (u2 - c2) * (u2 - c2));
      return Math.abs(v) < 1e-3 && (v = 1), this.x = (f - p2) / v, this.y = (h2 - m) / v, this.z = (u2 - c2) / v, this.w = Math.acos((l2 + d2 + g - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e = t2.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this.w = Math.max(t2.w, Math.min(e.w, this.w)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this.w = Math.max(t2, Math.min(e, this.w)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this.w += (t2.w - this.w) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this.w = t2.w + (e.w - t2.w) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this.w = t2[e + 3], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2[e + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this.w = t2.getW(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Ti = class extends Hn {
    constructor(t2 = 1, e = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = t2, this.height = e, this.depth = 1, this.scissor = new wi(0, 0, t2, e), this.scissorTest = false, this.viewport = new wi(0, 0, t2, e);
      const i = { width: t2, height: e, depth: 1 };
      n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
      const r = new bi(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
      r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
      const s = n.count;
      for (let t3 = 0; t3 < s; t3++) this.textures[t3] = r.clone(), this.textures[t3].isRenderTargetTexture = true;
      this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    setSize(t2, e, n = 1) {
      if (this.width !== t2 || this.height !== e || this.depth !== n) {
        this.width = t2, this.height = e, this.depth = n;
        for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = t2, this.textures[i].image.height = e, this.textures[i].image.depth = n;
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e), this.scissor.set(0, 0, t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, n = t2.textures.length; e2 < n; e2++) this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true;
      const e = Object.assign({}, t2.texture.image);
      return this.texture.source = new yi(e), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ei = class extends Ti {
    constructor(t2 = 1, e = 1, n = {}) {
      super(t2, e, n), this.isWebGLRenderTarget = true;
    }
  };
  var Ai = class extends bi {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Ci = class extends bi {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ii = class {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e, this._z = n, this._w = i;
    }
    static slerpFlat(t2, e, n, i, r, s, a) {
      let o = n[i + 0], l2 = n[i + 1], c2 = n[i + 2], h2 = n[i + 3];
      const u2 = r[s + 0], d2 = r[s + 1], p2 = r[s + 2], m = r[s + 3];
      if (0 === a) return t2[e + 0] = o, t2[e + 1] = l2, t2[e + 2] = c2, void (t2[e + 3] = h2);
      if (1 === a) return t2[e + 0] = u2, t2[e + 1] = d2, t2[e + 2] = p2, void (t2[e + 3] = m);
      if (h2 !== m || o !== u2 || l2 !== d2 || c2 !== p2) {
        let t3 = 1 - a;
        const e2 = o * u2 + l2 * d2 + c2 * p2 + h2 * m, n2 = e2 >= 0 ? 1 : -1, i2 = 1 - e2 * e2;
        if (i2 > Number.EPSILON) {
          const r3 = Math.sqrt(i2), s2 = Math.atan2(r3, e2 * n2);
          t3 = Math.sin(t3 * s2) / r3, a = Math.sin(a * s2) / r3;
        }
        const r2 = a * n2;
        if (o = o * t3 + u2 * r2, l2 = l2 * t3 + d2 * r2, c2 = c2 * t3 + p2 * r2, h2 = h2 * t3 + m * r2, t3 === 1 - a) {
          const t4 = 1 / Math.sqrt(o * o + l2 * l2 + c2 * c2 + h2 * h2);
          o *= t4, l2 *= t4, c2 *= t4, h2 *= t4;
        }
      }
      t2[e] = o, t2[e + 1] = l2, t2[e + 2] = c2, t2[e + 3] = h2;
    }
    static multiplyQuaternionsFlat(t2, e, n, i, r, s) {
      const a = n[i], o = n[i + 1], l2 = n[i + 2], c2 = n[i + 3], h2 = r[s], u2 = r[s + 1], d2 = r[s + 2], p2 = r[s + 3];
      return t2[e] = a * p2 + c2 * h2 + o * d2 - l2 * u2, t2[e + 1] = o * p2 + c2 * u2 + l2 * h2 - a * d2, t2[e + 2] = l2 * p2 + c2 * d2 + a * u2 - o * h2, t2[e + 3] = c2 * p2 - a * h2 - o * u2 - l2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e, n, i) {
      return this._x = t2, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e = true) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._order, a = Math.cos, o = Math.sin, l2 = a(n / 2), c2 = a(i / 2), h2 = a(r / 2), u2 = o(n / 2), d2 = o(i / 2), p2 = o(r / 2);
      switch (s) {
        case "XYZ":
          this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
      }
      return true === e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e) {
      const n = e / 2, i = Math.sin(n);
      return this._x = t2.x * i, this._y = t2.y * i, this._z = t2.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e = t2.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l2 = e[2], c2 = e[6], h2 = e[10], u2 = n + a + h2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (c2 - o) * t3, this._y = (r - l2) * t3, this._z = (s - i) * t3;
      } else if (n > a && n > h2) {
        const t3 = 2 * Math.sqrt(1 + n - a - h2);
        this._w = (c2 - o) / t3, this._x = 0.25 * t3, this._y = (i + s) / t3, this._z = (r + l2) / t3;
      } else if (a > h2) {
        const t3 = 2 * Math.sqrt(1 + a - n - h2);
        this._w = (r - l2) / t3, this._x = (i + s) / t3, this._y = 0.25 * t3, this._z = (o + c2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + h2 - n - a);
        this._w = (s - i) / t3, this._x = (r + l2) / t3, this._y = (o + c2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e) {
      let n = t2.dot(e) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = n)) : (this._x = t2.y * e.z - t2.z * e.y, this._y = t2.z * e.x - t2.x * e.z, this._z = t2.x * e.y - t2.y * e.x, this._w = n), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(Yn(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e) {
      const n = this.angleTo(t2);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t2, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._w, a = e._x, o = e._y, l2 = e._z, c2 = e._w;
      return this._x = n * c2 + s * a + i * l2 - r * o, this._y = i * c2 + s * o + r * a - n * l2, this._z = r * c2 + s * l2 + n * o - i * a, this._w = s * c2 - n * a - i * o - r * l2, this._onChangeCallback(), this;
    }
    slerp(t2, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t2);
      const n = this._x, i = this._y, r = this._z, s = this._w;
      let a = s * t2._w + n * t2._x + i * t2._y + r * t2._z;
      if (a < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a = -a) : this.copy(t2), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t3 = 1 - e;
        return this._w = t3 * s + e * this._w, this._x = t3 * n + e * this._x, this._y = t3 * i + e * this._y, this._z = t3 * r + e * this._z, this.normalize(), this;
      }
      const l2 = Math.sqrt(o), c2 = Math.atan2(l2, a), h2 = Math.sin((1 - e) * c2) / l2, u2 = Math.sin(e * c2) / l2;
      return this._w = s * h2 + this._w * u2, this._x = n * h2 + this._x * u2, this._y = i * h2 + this._y * u2, this._z = r * h2 + this._z * u2, this._onChangeCallback(), this;
    }
    slerpQuaternions(t2, e, n) {
      return this.copy(t2).slerp(e, n);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
      return this.set(i * Math.sin(t2), i * Math.cos(t2), r * Math.sin(e), r * Math.cos(e));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e = 0) {
      return this._x = t2[e], this._y = t2[e + 1], this._z = t2[e + 2], this._w = t2[e + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this._x = t2.getX(e), this._y = t2.getY(e), this._z = t2.getZ(e), this._w = t2.getW(e), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var Li = class _Li {
    constructor(t2 = 0, e = 0, n = 0) {
      _Li.prototype.isVector3 = true, this.x = t2, this.y = e, this.z = n;
    }
    set(t2, e, n) {
      return void 0 === n && (n = this.z), this.x = t2, this.y = e, this.z = n, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e) {
      return this.x = t2.x * e.x, this.y = t2.y * e.y, this.z = t2.z * e.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Ni.setFromEuler(t2));
    }
    applyAxisAngle(t2, e) {
      return this.applyQuaternion(Ni.setFromAxisAngle(t2, e));
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
    }
    applyQuaternion(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.x, s = t2.y, a = t2.z, o = t2.w, l2 = 2 * (s * i - a * n), c2 = 2 * (a * e - r * i), h2 = 2 * (r * n - s * e);
      return this.x = e + o * l2 + s * h2 - a * c2, this.y = n + o * c2 + a * l2 - r * h2, this.z = i + o * h2 + r * c2 - s * l2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e) {
      const n = t2.x, i = t2.y, r = t2.z, s = e.x, a = e.y, o = e.z;
      return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
    }
    projectOnVector(t2) {
      const e = t2.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t2.dot(this) / e;
      return this.copy(t2).multiplyScalar(n);
    }
    projectOnPlane(t2) {
      return Ui.copy(this).projectOnVector(t2), this.sub(Ui);
    }
    reflect(t2) {
      return this.sub(Ui.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Yn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y, i = this.z - t2.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e, n) {
      const i = Math.sin(e) * t2;
      return this.x = i * Math.sin(n), this.y = Math.cos(e) * t2, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e, n) {
      return this.x = t2 * Math.sin(e), this.y = n, this.z = t2 * Math.cos(e), this;
    }
    setFromMatrixPosition(t2) {
      const e = t2.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t2) {
      const e = this.setFromMatrixColumn(t2, 0).length(), n = this.setFromMatrixColumn(t2, 1).length(), i = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(t2, e) {
      return this.fromArray(t2.elements, 4 * e);
    }
    setFromMatrix3Column(t2, e) {
      return this.fromArray(t2.elements, 3 * e);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1, n = Math.sqrt(1 - e * e);
      return this.x = n * Math.cos(t2), this.y = e, this.z = n * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var Ui = new Li();
  var Ni = new Ii();
  var Di = class {
    constructor(t2 = new Li(1 / 0, 1 / 0, 1 / 0), e = new Li(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e;
    }
    set(t2, e) {
      return this.min.copy(t2), this.max.copy(e), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e += 3) this.expandByPoint(Fi.fromArray(t2, e));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.count; e < n; e++) this.expandByPoint(Fi.fromBufferAttribute(t2, e));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e++) this.expandByPoint(t2[e]);
      return this;
    }
    setFromCenterAndSize(t2, e) {
      const n = Fi.copy(e).multiplyScalar(0.5);
      return this.min.copy(t2).sub(n), this.max.copy(t2).add(n), this;
    }
    setFromObject(t2, e = false) {
      return this.makeEmpty(), this.expandByObject(t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e = false) {
      t2.updateWorldMatrix(false, false);
      const n = t2.geometry;
      if (void 0 !== n) {
        const i2 = n.getAttribute("position");
        if (true === e && void 0 !== i2 && true !== t2.isInstancedMesh) for (let e2 = 0, n2 = i2.count; e2 < n2; e2++) true === t2.isMesh ? t2.getVertexPosition(e2, Fi) : Fi.fromBufferAttribute(i2, e2), Fi.applyMatrix4(t2.matrixWorld), this.expandByPoint(Fi);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Bi.copy(t2.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(t2.matrixWorld), this.union(Bi);
      }
      const i = t2.children;
      for (let t3 = 0, n2 = i.length; t3 < n2; t3++) this.expandByObject(i[t3], e);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e) {
      return e.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Fi), Fi.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e, n;
      return t2.normal.x > 0 ? (e = t2.normal.x * this.min.x, n = t2.normal.x * this.max.x) : (e = t2.normal.x * this.max.x, n = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e += t2.normal.y * this.min.y, n += t2.normal.y * this.max.y) : (e += t2.normal.y * this.max.y, n += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e += t2.normal.z * this.min.z, n += t2.normal.z * this.max.z) : (e += t2.normal.z * this.max.z, n += t2.normal.z * this.min.z), e <= -t2.constant && n >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(Xi), ji.subVectors(this.max, Xi), zi.subVectors(t2.a, Xi), ki.subVectors(t2.b, Xi), Vi.subVectors(t2.c, Xi), Hi.subVectors(ki, zi), Gi.subVectors(Vi, ki), Wi.subVectors(zi, Vi);
      let e = [0, -Hi.z, Hi.y, 0, -Gi.z, Gi.y, 0, -Wi.z, Wi.y, Hi.z, 0, -Hi.x, Gi.z, 0, -Gi.x, Wi.z, 0, -Wi.x, -Hi.y, Hi.x, 0, -Gi.y, Gi.x, 0, -Wi.y, Wi.x, 0];
      return !!Zi(e, zi, ki, Vi, ji) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Zi(e, zi, ki, Vi, ji) && (qi.crossVectors(Hi, Gi), e = [qi.x, qi.y, qi.z], Zi(e, zi, ki, Vi, ji)));
    }
    clampPoint(t2, e) {
      return e.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Fi).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Fi).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Oi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Oi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Oi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Oi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Oi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Oi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Oi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Oi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Oi)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
  };
  var Oi = [new Li(), new Li(), new Li(), new Li(), new Li(), new Li(), new Li(), new Li()];
  var Fi = new Li();
  var Bi = new Di();
  var zi = new Li();
  var ki = new Li();
  var Vi = new Li();
  var Hi = new Li();
  var Gi = new Li();
  var Wi = new Li();
  var Xi = new Li();
  var ji = new Li();
  var qi = new Li();
  var Yi = new Li();
  function Zi(t2, e, n, i, r) {
    for (let s = 0, a = t2.length - 3; s <= a; s += 3) {
      Yi.fromArray(t2, s);
      const a2 = r.x * Math.abs(Yi.x) + r.y * Math.abs(Yi.y) + r.z * Math.abs(Yi.z), o = e.dot(Yi), l2 = n.dot(Yi), c2 = i.dot(Yi);
      if (Math.max(-Math.max(o, l2, c2), Math.min(o, l2, c2)) > a2) return false;
    }
    return true;
  }
  var Ji = new Di();
  var Ki = new Li();
  var $i = new Li();
  var Qi = class {
    constructor(t2 = new Li(), e = -1) {
      this.isSphere = true, this.center = t2, this.radius = e;
    }
    set(t2, e) {
      return this.center.copy(t2), this.radius = e, this;
    }
    setFromPoints(t2, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : Ji.setFromPoints(t2).getCenter(n);
      let i = 0;
      for (let e2 = 0, r = t2.length; e2 < r; e2++) i = Math.max(i, n.distanceToSquared(t2[e2]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e) {
      const n = this.center.distanceToSquared(t2);
      return e.copy(t2), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Ki.subVectors(t2, this.center);
      const e = Ki.lengthSq();
      if (e > this.radius * this.radius) {
        const t3 = Math.sqrt(e), n = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Ki, n / t3), this.radius += n;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : ($i.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Ki.copy(t2.center).add($i)), this.expandByPoint(Ki.copy(t2.center).sub($i))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var tr = new Li();
  var er = new Li();
  var nr = new Li();
  var ir = new Li();
  var rr = new Li();
  var sr = new Li();
  var ar = new Li();
  var or = class {
    constructor(t2 = new Li(), e = new Li(0, 0, -1)) {
      this.origin = t2, this.direction = e;
    }
    set(t2, e) {
      return this.origin.copy(t2), this.direction.copy(e), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, tr)), this;
    }
    closestPointToPoint(t2, e) {
      e.subVectors(t2, this.origin);
      const n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e = tr.subVectors(t2, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t2) : (tr.copy(this.origin).addScaledVector(this.direction, e), tr.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e, n, i) {
      er.copy(t2).add(e).multiplyScalar(0.5), nr.copy(e).sub(t2).normalize(), ir.copy(this.origin).sub(er);
      const r = 0.5 * t2.distanceTo(e), s = -this.direction.dot(nr), a = ir.dot(this.direction), o = -ir.dot(nr), l2 = ir.lengthSq(), c2 = Math.abs(1 - s * s);
      let h2, u2, d2, p2;
      if (c2 > 0) if (h2 = s * o - a, u2 = s * a - o, p2 = r * c2, h2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / c2;
        h2 *= t3, u2 *= t3, d2 = h2 * (h2 + s * u2 + 2 * a) + u2 * (s * h2 + u2 + 2 * o) + l2;
      } else u2 = r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 = -r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 <= -p2 ? (h2 = Math.max(0, -(-s * r + a)), u2 = h2 > 0 ? -r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2) : u2 <= p2 ? (h2 = 0, u2 = Math.min(Math.max(-r, -o), r), d2 = u2 * (u2 + 2 * o) + l2) : (h2 = Math.max(0, -(s * r + a)), u2 = h2 > 0 ? r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2);
      else u2 = s > 0 ? -r : r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      return n && n.copy(this.origin).addScaledVector(this.direction, h2), i && i.copy(er).addScaledVector(nr, u2), d2;
    }
    intersectSphere(t2, e) {
      tr.subVectors(t2.center, this.origin);
      const n = tr.dot(this.direction), i = tr.dot(tr) - n * n, r = t2.radius * t2.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i), a = n - s, o = n + s;
      return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
    }
    intersectsSphere(t2) {
      return this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e = t2.normal.dot(this.direction);
      if (0 === e) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t2.normal) + t2.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t2, e) {
      const n = this.distanceToPlane(t2);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t2) {
      const e = t2.distanceToPoint(this.origin);
      if (0 === e) return true;
      return t2.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t2, e) {
      let n, i, r, s, a, o;
      const l2 = 1 / this.direction.x, c2 = 1 / this.direction.y, h2 = 1 / this.direction.z, u2 = this.origin;
      return l2 >= 0 ? (n = (t2.min.x - u2.x) * l2, i = (t2.max.x - u2.x) * l2) : (n = (t2.max.x - u2.x) * l2, i = (t2.min.x - u2.x) * l2), c2 >= 0 ? (r = (t2.min.y - u2.y) * c2, s = (t2.max.y - u2.y) * c2) : (r = (t2.max.y - u2.y) * c2, s = (t2.min.y - u2.y) * c2), n > s || r > i ? null : ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h2 >= 0 ? (a = (t2.min.z - u2.z) * h2, o = (t2.max.z - u2.z) * h2) : (a = (t2.max.z - u2.z) * h2, o = (t2.min.z - u2.z) * h2), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, tr);
    }
    intersectTriangle(t2, e, n, i, r) {
      rr.subVectors(e, t2), sr.subVectors(n, t2), ar.crossVectors(rr, sr);
      let s, a = this.direction.dot(ar);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        s = -1, a = -a;
      }
      ir.subVectors(this.origin, t2);
      const o = s * this.direction.dot(sr.crossVectors(ir, sr));
      if (o < 0) return null;
      const l2 = s * this.direction.dot(rr.cross(ir));
      if (l2 < 0) return null;
      if (o + l2 > a) return null;
      const c2 = -s * ir.dot(ar);
      return c2 < 0 ? null : this.at(c2 / a, r);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var lr = class _lr {
    constructor(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p2, m, f) {
      _lr.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p2, m, f);
    }
    set(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p2, m, f) {
      const g = this.elements;
      return g[0] = t2, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l2, g[6] = c2, g[10] = h2, g[14] = u2, g[3] = d2, g[7] = p2, g[11] = m, g[15] = f, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _lr().fromArray(this.elements);
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    }
    copyPosition(t2) {
      const e = this.elements, n = t2.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    }
    setFromMatrix3(t2) {
      const e = t2.elements;
      return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e, n) {
      return this.set(t2.x, e.x, n.x, 0, t2.y, e.y, n.y, 0, t2.z, e.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e = this.elements, n = t2.elements, i = 1 / cr.setFromMatrixColumn(t2, 0).length(), r = 1 / cr.setFromMatrixColumn(t2, 1).length(), s = 1 / cr.setFromMatrixColumn(t2, 2).length();
      return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l2 = Math.sin(i), c2 = Math.cos(r), h2 = Math.sin(r);
      if ("XYZ" === t2.order) {
        const t3 = s * c2, n2 = s * h2, i2 = a * c2, r2 = a * h2;
        e[0] = o * c2, e[4] = -o * h2, e[8] = l2, e[1] = n2 + i2 * l2, e[5] = t3 - r2 * l2, e[9] = -a * o, e[2] = r2 - t3 * l2, e[6] = i2 + n2 * l2, e[10] = s * o;
      } else if ("YXZ" === t2.order) {
        const t3 = o * c2, n2 = o * h2, i2 = l2 * c2, r2 = l2 * h2;
        e[0] = t3 + r2 * a, e[4] = i2 * a - n2, e[8] = s * l2, e[1] = s * h2, e[5] = s * c2, e[9] = -a, e[2] = n2 * a - i2, e[6] = r2 + t3 * a, e[10] = s * o;
      } else if ("ZXY" === t2.order) {
        const t3 = o * c2, n2 = o * h2, i2 = l2 * c2, r2 = l2 * h2;
        e[0] = t3 - r2 * a, e[4] = -s * h2, e[8] = i2 + n2 * a, e[1] = n2 + i2 * a, e[5] = s * c2, e[9] = r2 - t3 * a, e[2] = -s * l2, e[6] = a, e[10] = s * o;
      } else if ("ZYX" === t2.order) {
        const t3 = s * c2, n2 = s * h2, i2 = a * c2, r2 = a * h2;
        e[0] = o * c2, e[4] = i2 * l2 - n2, e[8] = t3 * l2 + r2, e[1] = o * h2, e[5] = r2 * l2 + t3, e[9] = n2 * l2 - i2, e[2] = -l2, e[6] = a * o, e[10] = s * o;
      } else if ("YZX" === t2.order) {
        const t3 = s * o, n2 = s * l2, i2 = a * o, r2 = a * l2;
        e[0] = o * c2, e[4] = r2 - t3 * h2, e[8] = i2 * h2 + n2, e[1] = h2, e[5] = s * c2, e[9] = -a * c2, e[2] = -l2 * c2, e[6] = n2 * h2 + i2, e[10] = t3 - r2 * h2;
      } else if ("XZY" === t2.order) {
        const t3 = s * o, n2 = s * l2, i2 = a * o, r2 = a * l2;
        e[0] = o * c2, e[4] = -h2, e[8] = l2 * c2, e[1] = t3 * h2 + r2, e[5] = s * c2, e[9] = n2 * h2 - i2, e[2] = i2 * h2 - n2, e[6] = a * c2, e[10] = r2 * h2 + t3;
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(ur, t2, dr);
    }
    lookAt(t2, e, n) {
      const i = this.elements;
      return fr.subVectors(t2, e), 0 === fr.lengthSq() && (fr.z = 1), fr.normalize(), pr.crossVectors(n, fr), 0 === pr.lengthSq() && (1 === Math.abs(n.z) ? fr.x += 1e-4 : fr.z += 1e-4, fr.normalize(), pr.crossVectors(n, fr)), pr.normalize(), mr.crossVectors(fr, pr), i[0] = pr.x, i[4] = mr.x, i[8] = fr.x, i[1] = pr.y, i[5] = mr.y, i[9] = fr.y, i[2] = pr.z, i[6] = mr.z, i[10] = fr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l2 = n[12], c2 = n[1], h2 = n[5], u2 = n[9], d2 = n[13], p2 = n[2], m = n[6], f = n[10], g = n[14], v = n[3], _ = n[7], x = n[11], y2 = n[15], M = i[0], S = i[4], b = i[8], w = i[12], T = i[1], E = i[5], A = i[9], R = i[13], C3 = i[2], P2 = i[6], I = i[10], L = i[14], U = i[3], N = i[7], D = i[11], O = i[15];
      return r[0] = s * M + a * T + o * C3 + l2 * U, r[4] = s * S + a * E + o * P2 + l2 * N, r[8] = s * b + a * A + o * I + l2 * D, r[12] = s * w + a * R + o * L + l2 * O, r[1] = c2 * M + h2 * T + u2 * C3 + d2 * U, r[5] = c2 * S + h2 * E + u2 * P2 + d2 * N, r[9] = c2 * b + h2 * A + u2 * I + d2 * D, r[13] = c2 * w + h2 * R + u2 * L + d2 * O, r[2] = p2 * M + m * T + f * C3 + g * U, r[6] = p2 * S + m * E + f * P2 + g * N, r[10] = p2 * b + m * A + f * I + g * D, r[14] = p2 * w + m * R + f * L + g * O, r[3] = v * M + _ * T + x * C3 + y2 * U, r[7] = v * S + _ * E + x * P2 + y2 * N, r[11] = v * b + _ * A + x * I + y2 * D, r[15] = v * w + _ * R + x * L + y2 * O, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[4] *= t2, e[8] *= t2, e[12] *= t2, e[1] *= t2, e[5] *= t2, e[9] *= t2, e[13] *= t2, e[2] *= t2, e[6] *= t2, e[10] *= t2, e[14] *= t2, e[3] *= t2, e[7] *= t2, e[11] *= t2, e[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[4], i = t2[8], r = t2[12], s = t2[1], a = t2[5], o = t2[9], l2 = t2[13], c2 = t2[2], h2 = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r * o * h2 - i * l2 * h2 - r * a * u2 + n * l2 * u2 + i * a * d2 - n * o * d2) + t2[7] * (+e * o * d2 - e * l2 * u2 + r * s * u2 - i * s * d2 + i * l2 * c2 - r * o * c2) + t2[11] * (+e * l2 * h2 - e * a * d2 - r * s * h2 + n * s * d2 + r * a * c2 - n * l2 * c2) + t2[15] * (-i * a * c2 - e * o * h2 + e * a * u2 + i * s * h2 - n * s * u2 + n * o * c2);
    }
    transpose() {
      const t2 = this.elements;
      let e;
      return e = t2[1], t2[1] = t2[4], t2[4] = e, e = t2[2], t2[2] = t2[8], t2[8] = e, e = t2[6], t2[6] = t2[9], t2[9] = e, e = t2[3], t2[3] = t2[12], t2[12] = e, e = t2[7], t2[7] = t2[13], t2[13] = e, e = t2[11], t2[11] = t2[14], t2[14] = e, this;
    }
    setPosition(t2, e, n) {
      const i = this.elements;
      return t2.isVector3 ? (i[12] = t2.x, i[13] = t2.y, i[14] = t2.z) : (i[12] = t2, i[13] = e, i[14] = n), this;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8], h2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m = t2[13], f = t2[14], g = t2[15], v = h2 * f * l2 - m * u2 * l2 + m * o * d2 - a * f * d2 - h2 * o * g + a * u2 * g, _ = p2 * u2 * l2 - c2 * f * l2 - p2 * o * d2 + s * f * d2 + c2 * o * g - s * u2 * g, x = c2 * m * l2 - p2 * h2 * l2 + p2 * a * d2 - s * m * d2 - c2 * a * g + s * h2 * g, y2 = p2 * h2 * o - c2 * m * o - p2 * a * u2 + s * m * u2 + c2 * a * f - s * h2 * f, M = e * v + n * _ + i * x + r * y2;
      if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / M;
      return t2[0] = v * S, t2[1] = (m * u2 * r - h2 * f * r - m * i * d2 + n * f * d2 + h2 * i * g - n * u2 * g) * S, t2[2] = (a * f * r - m * o * r + m * i * l2 - n * f * l2 - a * i * g + n * o * g) * S, t2[3] = (h2 * o * r - a * u2 * r - h2 * i * l2 + n * u2 * l2 + a * i * d2 - n * o * d2) * S, t2[4] = _ * S, t2[5] = (c2 * f * r - p2 * u2 * r + p2 * i * d2 - e * f * d2 - c2 * i * g + e * u2 * g) * S, t2[6] = (p2 * o * r - s * f * r - p2 * i * l2 + e * f * l2 + s * i * g - e * o * g) * S, t2[7] = (s * u2 * r - c2 * o * r + c2 * i * l2 - e * u2 * l2 - s * i * d2 + e * o * d2) * S, t2[8] = x * S, t2[9] = (p2 * h2 * r - c2 * m * r - p2 * n * d2 + e * m * d2 + c2 * n * g - e * h2 * g) * S, t2[10] = (s * m * r - p2 * a * r + p2 * n * l2 - e * m * l2 - s * n * g + e * a * g) * S, t2[11] = (c2 * a * r - s * h2 * r - c2 * n * l2 + e * h2 * l2 + s * n * d2 - e * a * d2) * S, t2[12] = y2 * S, t2[13] = (c2 * m * i - p2 * h2 * i + p2 * n * u2 - e * m * u2 - c2 * n * f + e * h2 * f) * S, t2[14] = (p2 * a * i - s * m * i - p2 * n * o + e * m * o + s * n * f - e * a * f) * S, t2[15] = (s * h2 * i - c2 * a * i + c2 * n * o - e * h2 * o - s * n * u2 + e * a * u2) * S, this;
    }
    scale(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z;
      return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], n = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t2, e, n) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t2.x, a = t2.y, o = t2.z, l2 = r * s, c2 = r * a;
      return this.set(l2 * s + n, l2 * a - i * o, l2 * o + i * a, 0, l2 * a + i * o, c2 * a + n, c2 * o - i * s, 0, l2 * o - i * a, c2 * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e, n) {
      return this.set(t2, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e, n, i, r, s) {
      return this.set(1, n, r, 0, t2, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e, n) {
      const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l2 = r + r, c2 = s + s, h2 = a + a, u2 = r * l2, d2 = r * c2, p2 = r * h2, m = s * c2, f = s * h2, g = a * h2, v = o * l2, _ = o * c2, x = o * h2, y2 = n.x, M = n.y, S = n.z;
      return i[0] = (1 - (m + g)) * y2, i[1] = (d2 + x) * y2, i[2] = (p2 - _) * y2, i[3] = 0, i[4] = (d2 - x) * M, i[5] = (1 - (u2 + g)) * M, i[6] = (f + v) * M, i[7] = 0, i[8] = (p2 + _) * S, i[9] = (f - v) * S, i[10] = (1 - (u2 + m)) * S, i[11] = 0, i[12] = t2.x, i[13] = t2.y, i[14] = t2.z, i[15] = 1, this;
    }
    decompose(t2, e, n) {
      const i = this.elements;
      let r = cr.set(i[0], i[1], i[2]).length();
      const s = cr.set(i[4], i[5], i[6]).length(), a = cr.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t2.x = i[12], t2.y = i[13], t2.z = i[14], hr.copy(this);
      const o = 1 / r, l2 = 1 / s, c2 = 1 / a;
      return hr.elements[0] *= o, hr.elements[1] *= o, hr.elements[2] *= o, hr.elements[4] *= l2, hr.elements[5] *= l2, hr.elements[6] *= l2, hr.elements[8] *= c2, hr.elements[9] *= c2, hr.elements[10] *= c2, e.setFromRotationMatrix(hr), n.x = r, n.y = s, n.z = a, this;
    }
    makePerspective(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 2 * r / (e - t2), c2 = 2 * r / (n - i), h2 = (e + t2) / (e - t2), u2 = (n + i) / (n - i);
      let d2, p2;
      if (a === kn) d2 = -(s + r) / (s - r), p2 = -2 * s * r / (s - r);
      else {
        if (a !== Vn) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        d2 = -s / (s - r), p2 = -s * r / (s - r);
      }
      return o[0] = l2, o[4] = 0, o[8] = h2, o[12] = 0, o[1] = 0, o[5] = c2, o[9] = u2, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d2, o[14] = p2, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }
    makeOrthographic(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 1 / (e - t2), c2 = 1 / (n - i), h2 = 1 / (s - r), u2 = (e + t2) * l2, d2 = (n + i) * c2;
      let p2, m;
      if (a === kn) p2 = (s + r) * h2, m = -2 * h2;
      else {
        if (a !== Vn) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        p2 = r * h2, m = -1 * h2;
      }
      return o[0] = 2 * l2, o[4] = 0, o[8] = 0, o[12] = -u2, o[1] = 0, o[5] = 2 * c2, o[9] = 0, o[13] = -d2, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -p2, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2[e + 9] = n[9], t2[e + 10] = n[10], t2[e + 11] = n[11], t2[e + 12] = n[12], t2[e + 13] = n[13], t2[e + 14] = n[14], t2[e + 15] = n[15], t2;
    }
  };
  var cr = new Li();
  var hr = new lr();
  var ur = new Li(0, 0, 0);
  var dr = new Li(1, 1, 1);
  var pr = new Li();
  var mr = new Li();
  var fr = new Li();
  var gr = new lr();
  var vr = new Ii();
  var _r = class __r {
    constructor(t2 = 0, e = 0, n = 0, i = __r.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e, n, i = this._order) {
      return this._x = t2, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e = this._order, n = true) {
      const i = t2.elements, r = i[0], s = i[4], a = i[8], o = i[1], l2 = i[5], c2 = i[9], h2 = i[2], u2 = i[6], d2 = i[10];
      switch (e) {
        case "XYZ":
          this._y = Math.asin(Yn(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-c2, d2), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u2, l2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Yn(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._y = Math.atan2(a, d2), this._z = Math.atan2(o, l2)) : (this._y = Math.atan2(-h2, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Yn(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-h2, d2), this._z = Math.atan2(-s, l2)) : (this._y = 0, this._z = Math.atan2(o, r));
          break;
        case "ZYX":
          this._y = Math.asin(-Yn(h2, -1, 1)), Math.abs(h2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l2));
          break;
        case "YZX":
          this._z = Math.asin(Yn(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-c2, l2), this._y = Math.atan2(-h2, r)) : (this._x = 0, this._y = Math.atan2(a, d2));
          break;
        case "XZY":
          this._z = Math.asin(-Yn(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u2, l2), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c2, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      return this._order = e, true === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e, n) {
      return gr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(gr, e, n);
    }
    setFromVector3(t2, e = this._order) {
      return this.set(t2.x, t2.y, t2.z, e);
    }
    reorder(t2) {
      return vr.setFromEuler(this), this.setFromQuaternion(vr, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  _r.DEFAULT_ORDER = "XYZ";
  var xr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = (1 << t2 | 0) >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2 | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2 | 0;
    }
    disable(t2) {
      this.mask &= ~(1 << t2 | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 != (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return 0 != (this.mask & (1 << t2 | 0));
    }
  };
  var yr = 0;
  var Mr = new Li();
  var Sr = new Ii();
  var br = new lr();
  var wr = new Li();
  var Tr = new Li();
  var Er = new Li();
  var Ar = new Ii();
  var Rr = new Li(1, 0, 0);
  var Cr = new Li(0, 1, 0);
  var Pr = new Li(0, 0, 1);
  var Ir = { type: "added" };
  var Lr = { type: "removed" };
  var Ur = { type: "childadded", child: null };
  var Nr = { type: "childremoved", child: null };
  var Dr = class _Dr extends Hn {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: yr++ }), this.uuid = qn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Dr.DEFAULT_UP.clone();
      const t2 = new Li(), e = new _r(), n = new Ii(), i = new Li(1, 1, 1);
      e._onChange((function() {
        n.setFromEuler(e, false);
      })), n._onChange((function() {
        e.setFromQuaternion(n, void 0, false);
      })), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new lr() }, normalMatrix: { value: new ei() } }), this.matrix = new lr(), this.matrixWorld = new lr(), this.matrixAutoUpdate = _Dr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new xr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e) {
      this.quaternion.setFromAxisAngle(t2, e);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e) {
      return Sr.setFromAxisAngle(t2, e), this.quaternion.multiply(Sr), this;
    }
    rotateOnWorldAxis(t2, e) {
      return Sr.setFromAxisAngle(t2, e), this.quaternion.premultiply(Sr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(Rr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(Cr, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Pr, t2);
    }
    translateOnAxis(t2, e) {
      return Mr.copy(t2).applyQuaternion(this.quaternion), this.position.add(Mr.multiplyScalar(e)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(Rr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(Cr, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Pr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(br.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e, n) {
      t2.isVector3 ? wr.copy(t2) : wr.set(t2, e, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), Tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? br.lookAt(Tr, wr, this.up) : br.lookAt(wr, Tr, this.up), this.quaternion.setFromRotationMatrix(br), i && (br.extractRotation(i.matrixWorld), Sr.setFromRotationMatrix(br), this.quaternion.premultiply(Sr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Ir), Ur.child = t2, this.dispatchEvent(Ur), Ur.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e = this.children.indexOf(t2);
      return -1 !== e && (t2.parent = null, this.children.splice(e, 1), t2.dispatchEvent(Lr), Nr.child = t2, this.dispatchEvent(Nr), Nr.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), br.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), br.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(br), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(Ir), Ur.child = t2, this.dispatchEvent(Ur), Ur.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e) {
      if (this[t2] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i2 = this.children[n].getObjectByProperty(t2, e);
        if (void 0 !== i2) return i2;
      }
    }
    getObjectsByProperty(t2, e, n = []) {
      this[t2] === e && n.push(this);
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) i[r].getObjectsByProperty(t2, e, n);
      return n;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Tr, t2, Er), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Tr, Ar, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return t2.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e = this.parent;
      null !== e && (t2(e), e.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        e[n].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e) {
      const n = this.parent;
      if (true === t2 && null !== n && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e) {
        const t3 = this.children;
        for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) {
          t3[e2].updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2, n = {};
      e && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
      const i = {};
      function r(e2, n2) {
        return void 0 === e2[n2.uuid] && (e2[n2.uuid] = n2.toJSON(t2)), n2.uuid;
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), true === this.castShadow && (i.castShadow = true), true === this.receiveShadow && (i.receiveShadow = true), false === this.visible && (i.visible = false), false === this.frustumCulled && (i.frustumCulled = false), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), false === this.matrixAutoUpdate && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(((t3) => ({ boxInitialized: t3.boxInitialized, boxMin: t3.box.min.toArray(), boxMax: t3.box.max.toArray(), sphereInitialized: t3.sphereInitialized, sphereRadius: t3.sphere.radius, sphereCenter: t3.sphere.center.toArray() }))), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t2), null !== this._colorsTexture && (i.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), null !== this.boundingBox && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t2.geometries, this.geometry);
        const e2 = this.geometry.parameters;
        if (void 0 !== e2 && void 0 !== e2.shapes) {
          const n2 = e2.shapes;
          if (Array.isArray(n2)) for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
            const i3 = n2[e3];
            r(t2.shapes, i3);
          }
          else r(t2.shapes, n2);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t2.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e2 = [];
        for (let n2 = 0, i2 = this.material.length; n2 < i2; n2++) e2.push(r(t2.materials, this.material[n2]));
        i.material = e2;
      } else i.material = r(t2.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e2 = 0; e2 < this.children.length; e2++) i.children.push(this.children[e2].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e2 = 0; e2 < this.animations.length; e2++) {
          const n2 = this.animations[e2];
          i.animations.push(r(t2.animations, n2));
        }
      }
      if (e) {
        const e2 = s(t2.geometries), i2 = s(t2.materials), r2 = s(t2.textures), a = s(t2.images), o = s(t2.shapes), l2 = s(t2.skeletons), c2 = s(t2.animations), h2 = s(t2.nodes);
        e2.length > 0 && (n.geometries = e2), i2.length > 0 && (n.materials = i2), r2.length > 0 && (n.textures = r2), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l2.length > 0 && (n.skeletons = l2), c2.length > 0 && (n.animations = c2), h2.length > 0 && (n.nodes = h2);
      }
      return n.object = i, n;
      function s(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e) for (let e2 = 0; e2 < t2.children.length; e2++) {
        const n = t2.children[e2];
        this.add(n.clone());
      }
      return this;
    }
  };
  Dr.DEFAULT_UP = new Li(0, 1, 0), Dr.DEFAULT_MATRIX_AUTO_UPDATE = true, Dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Or = new Li();
  var Fr = new Li();
  var Br = new Li();
  var zr = new Li();
  var kr = new Li();
  var Vr = new Li();
  var Hr = new Li();
  var Gr = new Li();
  var Wr = new Li();
  var Xr = new Li();
  var jr = new wi();
  var qr = new wi();
  var Yr = new wi();
  var Zr = class _Zr {
    constructor(t2 = new Li(), e = new Li(), n = new Li()) {
      this.a = t2, this.b = e, this.c = n;
    }
    static getNormal(t2, e, n, i) {
      i.subVectors(n, e), Or.subVectors(t2, e), i.cross(Or);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t2, e, n, i, r) {
      Or.subVectors(i, e), Fr.subVectors(n, e), Br.subVectors(t2, e);
      const s = Or.dot(Or), a = Or.dot(Fr), o = Or.dot(Br), l2 = Fr.dot(Fr), c2 = Fr.dot(Br), h2 = s * l2 - a * a;
      if (0 === h2) return r.set(0, 0, 0), null;
      const u2 = 1 / h2, d2 = (l2 * o - a * c2) * u2, p2 = (s * c2 - a * o) * u2;
      return r.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e, n, i) {
      return null !== this.getBarycoord(t2, e, n, i, zr) && (zr.x >= 0 && zr.y >= 0 && zr.x + zr.y <= 1);
    }
    static getInterpolation(t2, e, n, i, r, s, a, o) {
      return null === this.getBarycoord(t2, e, n, i, zr) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, zr.x), o.addScaledVector(s, zr.y), o.addScaledVector(a, zr.z), o);
    }
    static getInterpolatedAttribute(t2, e, n, i, r, s) {
      return jr.setScalar(0), qr.setScalar(0), Yr.setScalar(0), jr.fromBufferAttribute(t2, e), qr.fromBufferAttribute(t2, n), Yr.fromBufferAttribute(t2, i), s.setScalar(0), s.addScaledVector(jr, r.x), s.addScaledVector(qr, r.y), s.addScaledVector(Yr, r.z), s;
    }
    static isFrontFacing(t2, e, n, i) {
      return Or.subVectors(n, e), Fr.subVectors(t2, e), Or.cross(Fr).dot(i) < 0;
    }
    set(t2, e, n) {
      return this.a.copy(t2), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t2, e, n, i) {
      return this.a.copy(t2[e]), this.b.copy(t2[n]), this.c.copy(t2[i]), this;
    }
    setFromAttributeAndIndices(t2, e, n, i) {
      return this.a.fromBufferAttribute(t2, e), this.b.fromBufferAttribute(t2, n), this.c.fromBufferAttribute(t2, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Or.subVectors(this.c, this.b), Fr.subVectors(this.a, this.b), 0.5 * Or.cross(Fr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _Zr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e) {
      return _Zr.getBarycoord(t2, this.a, this.b, this.c, e);
    }
    getInterpolation(t2, e, n, i, r) {
      return _Zr.getInterpolation(t2, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t2) {
      return _Zr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _Zr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e) {
      const n = this.a, i = this.b, r = this.c;
      let s, a;
      kr.subVectors(i, n), Vr.subVectors(r, n), Gr.subVectors(t2, n);
      const o = kr.dot(Gr), l2 = Vr.dot(Gr);
      if (o <= 0 && l2 <= 0) return e.copy(n);
      Wr.subVectors(t2, i);
      const c2 = kr.dot(Wr), h2 = Vr.dot(Wr);
      if (c2 >= 0 && h2 <= c2) return e.copy(i);
      const u2 = o * h2 - c2 * l2;
      if (u2 <= 0 && o >= 0 && c2 <= 0) return s = o / (o - c2), e.copy(n).addScaledVector(kr, s);
      Xr.subVectors(t2, r);
      const d2 = kr.dot(Xr), p2 = Vr.dot(Xr);
      if (p2 >= 0 && d2 <= p2) return e.copy(r);
      const m = d2 * l2 - o * p2;
      if (m <= 0 && l2 >= 0 && p2 <= 0) return a = l2 / (l2 - p2), e.copy(n).addScaledVector(Vr, a);
      const f = c2 * p2 - d2 * h2;
      if (f <= 0 && h2 - c2 >= 0 && d2 - p2 >= 0) return Hr.subVectors(r, i), a = (h2 - c2) / (h2 - c2 + (d2 - p2)), e.copy(i).addScaledVector(Hr, a);
      const g = 1 / (f + m + u2);
      return s = m * g, a = u2 * g, e.copy(n).addScaledVector(kr, s).addScaledVector(Vr, a);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var Jr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Kr = { h: 0, s: 0, l: 0 };
  var $r = { h: 0, s: 0, l: 0 };
  function Qr(t2, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t2 + 6 * (e - t2) * n : n < 0.5 ? e : n < 2 / 3 ? t2 + 6 * (e - t2) * (2 / 3 - n) : t2;
  }
  var ts = class {
    constructor(t2, e, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e, n);
    }
    set(t2, e, n) {
      if (void 0 === e && void 0 === n) {
        const e2 = t2;
        e2 && e2.isColor ? this.copy(e2) : "number" == typeof e2 ? this.setHex(e2) : "string" == typeof e2 && this.setStyle(e2);
      } else this.setRGB(t2, e, n);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e = Je) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, mi.toWorkingColorSpace(this, e), this;
    }
    setRGB(t2, e, n, i = mi.workingColorSpace) {
      return this.r = t2, this.g = e, this.b = n, mi.toWorkingColorSpace(this, i), this;
    }
    setHSL(t2, e, n, i = mi.workingColorSpace) {
      if (t2 = Zn(t2, 1), e = Yn(e, 0, 1), n = Yn(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
      else {
        const i2 = n <= 0.5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i2;
        this.r = Qr(r, i2, t2 + 1 / 3), this.g = Qr(r, i2, t2), this.b = Qr(r, i2, t2 - 1 / 3);
      }
      return mi.toWorkingColorSpace(this, i), this;
    }
    setStyle(t2, e = Je) {
      function n(e2) {
        void 0 !== e2 && parseFloat(e2) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r;
        const s = i[1], a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t2);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const n2 = i[1], r = n2.length;
        if (3 === r) return this.setRGB(parseInt(n2.charAt(0), 16) / 15, parseInt(n2.charAt(1), 16) / 15, parseInt(n2.charAt(2), 16) / 15, e);
        if (6 === r) return this.setHex(parseInt(n2, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e);
      return this;
    }
    setColorName(t2, e = Je) {
      const n = Jr[t2.toLowerCase()];
      return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = fi(t2.r), this.g = fi(t2.g), this.b = fi(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = gi(t2.r), this.g = gi(t2.g), this.b = gi(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = Je) {
      return mi.fromWorkingColorSpace(es.copy(this), t2), 65536 * Math.round(Yn(255 * es.r, 0, 255)) + 256 * Math.round(Yn(255 * es.g, 0, 255)) + Math.round(Yn(255 * es.b, 0, 255));
    }
    getHexString(t2 = Je) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e = mi.workingColorSpace) {
      mi.fromWorkingColorSpace(es.copy(this), e);
      const n = es.r, i = es.g, r = es.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
      let o, l2;
      const c2 = (a + s) / 2;
      if (a === s) o = 0, l2 = 0;
      else {
        const t3 = s - a;
        switch (l2 = c2 <= 0.5 ? t3 / (s + a) : t3 / (2 - s - a), s) {
          case n:
            o = (i - r) / t3 + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t3 + 2;
            break;
          case r:
            o = (n - i) / t3 + 4;
        }
        o /= 6;
      }
      return t2.h = o, t2.s = l2, t2.l = c2, t2;
    }
    getRGB(t2, e = mi.workingColorSpace) {
      return mi.fromWorkingColorSpace(es.copy(this), e), t2.r = es.r, t2.g = es.g, t2.b = es.b, t2;
    }
    getStyle(t2 = Je) {
      mi.fromWorkingColorSpace(es.copy(this), t2);
      const e = es.r, n = es.g, i = es.b;
      return t2 !== Je ? `color(${t2} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(255 * i)})`;
    }
    offsetHSL(t2, e, n) {
      return this.getHSL(Kr), this.setHSL(Kr.h + t2, Kr.s + e, Kr.l + n);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e) {
      return this.r = t2.r + e.r, this.g = t2.g + e.g, this.b = t2.b + e.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e) {
      return this.r += (t2.r - this.r) * e, this.g += (t2.g - this.g) * e, this.b += (t2.b - this.b) * e, this;
    }
    lerpColors(t2, e, n) {
      return this.r = t2.r + (e.r - t2.r) * n, this.g = t2.g + (e.g - t2.g) * n, this.b = t2.b + (e.b - t2.b) * n, this;
    }
    lerpHSL(t2, e) {
      this.getHSL(Kr), t2.getHSL($r);
      const n = Jn(Kr.h, $r.h, e), i = Jn(Kr.s, $r.s, e), r = Jn(Kr.l, $r.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e = this.r, n = this.g, i = this.b, r = t2.elements;
      return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e = 0) {
      return this.r = t2[e], this.g = t2[e + 1], this.b = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.r, t2[e + 1] = this.g, t2[e + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.r = t2.getX(e), this.g = t2.getY(e), this.b = t2.getZ(e), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var es = new ts();
  ts.NAMES = Jr;
  var ns = 0;
  var is = class extends Hn {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: ns++ }), this.uuid = qn(), this.name = "", this.type = "Material", this.blending = 1, this.side = u, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = C, this.blendDst = P, this.blendEquation = y, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ts(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = an, this.stencilZFail = an, this.stencilZPass = an, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e in t2) {
        const n = t2[e];
        if (void 0 === n) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      e && (t2 = { textures: {}, images: {} });
      const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
      function i(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.dispersion && (n.dispersion = this.dispersion), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t2).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t2).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t2).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t2).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t2).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapRotation && (n.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), this.side !== u && (n.side = this.side), true === this.vertexColors && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), true === this.transparent && (n.transparent = true), this.blendSrc !== C && (n.blendSrc = this.blendSrc), this.blendDst !== P && (n.blendDst = this.blendDst), this.blendEquation !== y && (n.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (n.depthFunc = this.depthFunc), false === this.depthTest && (n.depthTest = this.depthTest), false === this.depthWrite && (n.depthWrite = this.depthWrite), false === this.colorWrite && (n.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== an && (n.stencilFail = this.stencilFail), this.stencilZFail !== an && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== an && (n.stencilZPass = this.stencilZPass), true === this.stencilWrite && (n.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), true === this.polygonOffset && (n.polygonOffset = true), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), true === this.dithering && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), true === this.alphaHash && (n.alphaHash = true), true === this.alphaToCoverage && (n.alphaToCoverage = true), true === this.premultipliedAlpha && (n.premultipliedAlpha = true), true === this.forceSinglePass && (n.forceSinglePass = true), true === this.wireframe && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (n.flatShading = true), false === this.visible && (n.visible = false), false === this.toneMapped && (n.toneMapped = false), false === this.fog && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
        const e2 = i(t2.textures), r = i(t2.images);
        e2.length > 0 && (n.textures = e2), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e = t2.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t3 = e.length;
        n = new Array(t3);
        for (let i = 0; i !== t3; ++i) n[i] = e[i].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
  };
  var rs = class extends is {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new ts(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new _r(), this.combine = Y, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var ss = as();
  function as() {
    const t2 = new ArrayBuffer(4), e = new Float32Array(t2), n = new Uint32Array(t2), i = new Uint32Array(512), r = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e2 = t3 - 127;
      e2 < -27 ? (i[t3] = 0, i[256 | t3] = 32768, r[t3] = 24, r[256 | t3] = 24) : e2 < -14 ? (i[t3] = 1024 >> -e2 - 14, i[256 | t3] = 1024 >> -e2 - 14 | 32768, r[t3] = -e2 - 1, r[256 | t3] = -e2 - 1) : e2 <= 15 ? (i[t3] = e2 + 15 << 10, i[256 | t3] = e2 + 15 << 10 | 32768, r[t3] = 13, r[256 | t3] = 13) : e2 < 128 ? (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 24, r[256 | t3] = 24) : (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 13, r[256 | t3] = 13);
    }
    const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e2 = t3 << 13, n2 = 0;
      for (; 0 == (8388608 & e2); ) e2 <<= 1, n2 -= 8388608;
      e2 &= -8388609, n2 += 947912704, s[t3] = e2 | n2;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) s[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a[t3] = t3 << 23;
    a[31] = 1199570944, a[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a[t3] = 2147483648 + (t3 - 32 << 23);
    a[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o[t3] = 1024);
    return { floatView: e, uint32View: n, baseTable: i, shiftTable: r, mantissaTable: s, exponentTable: a, offsetTable: o };
  }
  var hs = new Li();
  var us = new ti();
  var ds = class {
    constructor(t2, e, n = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = t2, this.itemSize = e, this.count = void 0 !== t2 ? t2.length / e : 0, this.normalized = n, this.usage = Cn, this.updateRanges = [], this.gpuType = Lt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e) {
      this.updateRanges.push({ start: t2, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e, n) {
      t2 *= this.itemSize, n *= e.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[t2 + i] = e.array[n + i];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) us.fromBufferAttribute(this, e), us.applyMatrix3(t2), this.setXY(e, us.x, us.y);
      else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) hs.fromBufferAttribute(this, e), hs.applyMatrix3(t2), this.setXYZ(e, hs.x, hs.y, hs.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e = 0, n = this.count; e < n; e++) hs.fromBufferAttribute(this, e), hs.applyMatrix4(t2), this.setXYZ(e, hs.x, hs.y, hs.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e = 0, n = this.count; e < n; e++) hs.fromBufferAttribute(this, e), hs.applyNormalMatrix(t2), this.setXYZ(e, hs.x, hs.y, hs.z);
      return this;
    }
    transformDirection(t2) {
      for (let e = 0, n = this.count; e < n; e++) hs.fromBufferAttribute(this, e), hs.transformDirection(t2), this.setXYZ(e, hs.x, hs.y, hs.z);
      return this;
    }
    set(t2, e = 0) {
      return this.array.set(t2, e), this;
    }
    getComponent(t2, e) {
      let n = this.array[t2 * this.itemSize + e];
      return this.normalized && (n = Kn(n, this.array)), n;
    }
    setComponent(t2, e, n) {
      return this.normalized && (n = $n(n, this.array)), this.array[t2 * this.itemSize + e] = n, this;
    }
    getX(t2) {
      let e = this.array[t2 * this.itemSize];
      return this.normalized && (e = Kn(e, this.array)), e;
    }
    setX(t2, e) {
      return this.normalized && (e = $n(e, this.array)), this.array[t2 * this.itemSize] = e, this;
    }
    getY(t2) {
      let e = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e = Kn(e, this.array)), e;
    }
    setY(t2, e) {
      return this.normalized && (e = $n(e, this.array)), this.array[t2 * this.itemSize + 1] = e, this;
    }
    getZ(t2) {
      let e = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e = Kn(e, this.array)), e;
    }
    setZ(t2, e) {
      return this.normalized && (e = $n(e, this.array)), this.array[t2 * this.itemSize + 2] = e, this;
    }
    getW(t2) {
      let e = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e = Kn(e, this.array)), e;
    }
    setW(t2, e) {
      return this.normalized && (e = $n(e, this.array)), this.array[t2 * this.itemSize + 3] = e, this;
    }
    setXY(t2, e, n) {
      return t2 *= this.itemSize, this.normalized && (e = $n(e, this.array), n = $n(n, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this;
    }
    setXYZ(t2, e, n, i) {
      return t2 *= this.itemSize, this.normalized && (e = $n(e, this.array), n = $n(n, this.array), i = $n(i, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this;
    }
    setXYZW(t2, e, n, i, r) {
      return t2 *= this.itemSize, this.normalized && (e = $n(e, this.array), n = $n(n, this.array), i = $n(i, this.array), r = $n(r, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this.array[t2 + 3] = r, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Cn && (t2.usage = this.usage), t2;
    }
  };
  var vs = class extends ds {
    constructor(t2, e, n) {
      super(new Uint16Array(t2), e, n);
    }
  };
  var xs = class extends ds {
    constructor(t2, e, n) {
      super(new Uint32Array(t2), e, n);
    }
  };
  var Ms = class extends ds {
    constructor(t2, e, n) {
      super(new Float32Array(t2), e, n);
    }
  };
  var Ss = 0;
  var bs = new lr();
  var ws = new Dr();
  var Ts = new Li();
  var Es = new Di();
  var As = new Di();
  var Rs = new Li();
  var Cs = class _Cs extends Hn {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Ss++ }), this.uuid = qn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (ii(t2) ? xs : vs)(t2, 1) : this.index = t2, this;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e) {
      return this.attributes[t2] = e, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e, n = 0) {
      this.groups.push({ start: t2, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e) {
      this.drawRange.start = t2, this.drawRange.count = e;
    }
    applyMatrix4(t2) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t2), e.needsUpdate = true);
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e2 = new ei().getNormalMatrix(t2);
        n.applyNormalMatrix(e2), n.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t2), i.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return bs.makeRotationFromQuaternion(t2), this.applyMatrix4(bs), this;
    }
    rotateX(t2) {
      return bs.makeRotationX(t2), this.applyMatrix4(bs), this;
    }
    rotateY(t2) {
      return bs.makeRotationY(t2), this.applyMatrix4(bs), this;
    }
    rotateZ(t2) {
      return bs.makeRotationZ(t2), this.applyMatrix4(bs), this;
    }
    translate(t2, e, n) {
      return bs.makeTranslation(t2, e, n), this.applyMatrix4(bs), this;
    }
    scale(t2, e, n) {
      return bs.makeScale(t2, e, n), this.applyMatrix4(bs), this;
    }
    lookAt(t2) {
      return ws.lookAt(t2), ws.updateMatrix(), this.applyMatrix4(ws.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Ts).negate(), this.translate(Ts.x, Ts.y, Ts.z), this;
    }
    setFromPoints(t2) {
      const e = [];
      for (let n = 0, i = t2.length; n < i; n++) {
        const i2 = t2[n];
        e.push(i2.x, i2.y, i2.z || 0);
      }
      return this.setAttribute("position", new Ms(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Di());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Li(-1 / 0, -1 / 0, -1 / 0), new Li(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e) for (let t3 = 0, n = e.length; t3 < n; t3++) {
          const n2 = e[t3];
          Es.setFromBufferAttribute(n2), this.morphTargetsRelative ? (Rs.addVectors(this.boundingBox.min, Es.min), this.boundingBox.expandByPoint(Rs), Rs.addVectors(this.boundingBox.max, Es.max), this.boundingBox.expandByPoint(Rs)) : (this.boundingBox.expandByPoint(Es.min), this.boundingBox.expandByPoint(Es.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Qi());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Li(), 1 / 0);
      if (t2) {
        const n = this.boundingSphere.center;
        if (Es.setFromBufferAttribute(t2), e) for (let t3 = 0, n2 = e.length; t3 < n2; t3++) {
          const n3 = e[t3];
          As.setFromBufferAttribute(n3), this.morphTargetsRelative ? (Rs.addVectors(Es.min, As.min), Es.expandByPoint(Rs), Rs.addVectors(Es.max, As.max), Es.expandByPoint(Rs)) : (Es.expandByPoint(As.min), Es.expandByPoint(As.max));
        }
        Es.getCenter(n);
        let i = 0;
        for (let e2 = 0, r = t2.count; e2 < r; e2++) Rs.fromBufferAttribute(t2, e2), i = Math.max(i, n.distanceToSquared(Rs));
        if (e) for (let r = 0, s = e.length; r < s; r++) {
          const s2 = e[r], a = this.morphTargetsRelative;
          for (let e2 = 0, r2 = s2.count; e2 < r2; e2++) Rs.fromBufferAttribute(s2, e2), a && (Ts.fromBufferAttribute(t2, e2), Rs.add(Ts)), i = Math.max(i, n.distanceToSquared(Rs));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e = this.attributes;
      if (null === t2 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n = e.position, i = e.normal, r = e.uv;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new ds(new Float32Array(4 * n.count), 4));
      const s = this.getAttribute("tangent"), a = [], o = [];
      for (let t3 = 0; t3 < n.count; t3++) a[t3] = new Li(), o[t3] = new Li();
      const l2 = new Li(), c2 = new Li(), h2 = new Li(), u2 = new ti(), d2 = new ti(), p2 = new ti(), m = new Li(), f = new Li();
      function g(t3, e2, i2) {
        l2.fromBufferAttribute(n, t3), c2.fromBufferAttribute(n, e2), h2.fromBufferAttribute(n, i2), u2.fromBufferAttribute(r, t3), d2.fromBufferAttribute(r, e2), p2.fromBufferAttribute(r, i2), c2.sub(l2), h2.sub(l2), d2.sub(u2), p2.sub(u2);
        const s2 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(s2) && (m.copy(c2).multiplyScalar(p2.y).addScaledVector(h2, -d2.y).multiplyScalar(s2), f.copy(h2).multiplyScalar(d2.x).addScaledVector(c2, -p2.x).multiplyScalar(s2), a[t3].add(m), a[e2].add(m), a[i2].add(m), o[t3].add(f), o[e2].add(f), o[i2].add(f));
      }
      let v = this.groups;
      0 === v.length && (v = [{ start: 0, count: t2.count }]);
      for (let e2 = 0, n2 = v.length; e2 < n2; ++e2) {
        const n3 = v[e2], i2 = n3.start;
        for (let e3 = i2, r2 = i2 + n3.count; e3 < r2; e3 += 3) g(t2.getX(e3 + 0), t2.getX(e3 + 1), t2.getX(e3 + 2));
      }
      const _ = new Li(), x = new Li(), y2 = new Li(), M = new Li();
      function S(t3) {
        y2.fromBufferAttribute(i, t3), M.copy(y2);
        const e2 = a[t3];
        _.copy(e2), _.sub(y2.multiplyScalar(y2.dot(e2))).normalize(), x.crossVectors(M, e2);
        const n2 = x.dot(o[t3]) < 0 ? -1 : 1;
        s.setXYZW(t3, _.x, _.y, _.z, n2);
      }
      for (let e2 = 0, n2 = v.length; e2 < n2; ++e2) {
        const n3 = v[e2], i2 = n3.start;
        for (let e3 = i2, r2 = i2 + n3.count; e3 < r2; e3 += 3) S(t2.getX(e3 + 0)), S(t2.getX(e3 + 1)), S(t2.getX(e3 + 2));
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n) n = new ds(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
        else for (let t3 = 0, e2 = n.count; t3 < e2; t3++) n.setXYZ(t3, 0, 0, 0);
        const i = new Li(), r = new Li(), s = new Li(), a = new Li(), o = new Li(), l2 = new Li(), c2 = new Li(), h2 = new Li();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m = t2.getX(u2 + 2);
          i.fromBufferAttribute(e, d3), r.fromBufferAttribute(e, p2), s.fromBufferAttribute(e, m), c2.subVectors(s, r), h2.subVectors(i, r), c2.cross(h2), a.fromBufferAttribute(n, d3), o.fromBufferAttribute(n, p2), l2.fromBufferAttribute(n, m), a.add(c2), o.add(c2), l2.add(c2), n.setXYZ(d3, a.x, a.y, a.z), n.setXYZ(p2, o.x, o.y, o.z), n.setXYZ(m, l2.x, l2.y, l2.z);
        }
        else for (let t3 = 0, a2 = e.count; t3 < a2; t3 += 3) i.fromBufferAttribute(e, t3 + 0), r.fromBufferAttribute(e, t3 + 1), s.fromBufferAttribute(e, t3 + 2), c2.subVectors(s, r), h2.subVectors(i, r), c2.cross(h2), n.setXYZ(t3 + 0, c2.x, c2.y, c2.z), n.setXYZ(t3 + 1, c2.x, c2.y, c2.z), n.setXYZ(t3 + 2, c2.x, c2.y, c2.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e = 0, n = t2.count; e < n; e++) Rs.fromBufferAttribute(t2, e), Rs.normalize(), t2.setXYZ(e, Rs.x, Rs.y, Rs.z);
    }
    toNonIndexed() {
      function t2(t3, e2) {
        const n2 = t3.array, i2 = t3.itemSize, r2 = t3.normalized, s2 = new n2.constructor(e2.length * i2);
        let a = 0, o = 0;
        for (let r3 = 0, l2 = e2.length; r3 < l2; r3++) {
          a = t3.isInterleavedBufferAttribute ? e2[r3] * t3.data.stride + t3.offset : e2[r3] * i2;
          for (let t4 = 0; t4 < i2; t4++) s2[o++] = n2[a++];
        }
        return new ds(s2, i2, r2);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e = new _Cs(), n = this.index.array, i = this.attributes;
      for (const r2 in i) {
        const s2 = t2(i[r2], n);
        e.setAttribute(r2, s2);
      }
      const r = this.morphAttributes;
      for (const i2 in r) {
        const s2 = [], a = r[i2];
        for (let e2 = 0, i3 = a.length; e2 < i3; e2++) {
          const i4 = t2(a[e2], n);
          s2.push(i4);
        }
        e.morphAttributes[i2] = s2;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t3 = 0, n2 = s.length; t3 < n2; t3++) {
        const n3 = s[t3];
        e.addGroup(n3.start, n3.count, n3.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e2 = this.parameters;
        for (const n2 in e2) void 0 !== e2[n2] && (t2[n2] = e2[n2]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e = this.index;
      null !== e && (t2.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
      const n = this.attributes;
      for (const e2 in n) {
        const i2 = n[e2];
        t2.data.attributes[e2] = i2.toJSON(t2.data);
      }
      const i = {};
      let r = false;
      for (const e2 in this.morphAttributes) {
        const n2 = this.morphAttributes[e2], s2 = [];
        for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
          const i3 = n2[e3];
          s2.push(i3.toJSON(t2.data));
        }
        s2.length > 0 && (i[e2] = s2, r = true);
      }
      r && (t2.data.morphAttributes = i, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const s = this.groups;
      s.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return null !== a && (t2.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e = {};
      this.name = t2.name;
      const n = t2.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t2.attributes;
      for (const t3 in i) {
        const n2 = i[t3];
        this.setAttribute(t3, n2.clone(e));
      }
      const r = t2.morphAttributes;
      for (const t3 in r) {
        const n2 = [], i2 = r[t3];
        for (let t4 = 0, r2 = i2.length; t4 < r2; t4++) n2.push(i2[t4].clone(e));
        this.morphAttributes[t3] = n2;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const s = t2.groups;
      for (let t3 = 0, e2 = s.length; t3 < e2; t3++) {
        const e3 = s[t3];
        this.addGroup(e3.start, e3.count, e3.materialIndex);
      }
      const a = t2.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = t2.boundingSphere;
      return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ps = new lr();
  var Is = new or();
  var Ls = new Qi();
  var Us = new Li();
  var Ns = new Li();
  var Ds = new Li();
  var Os = new Li();
  var Fs = new Li();
  var Bs = new Li();
  var zs = new Li();
  var ks = new Li();
  var Vs = class extends Dr {
    constructor(t2 = new Cs(), e = new rs()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e, this.updateMorphTargets();
    }
    copy(t2, e) {
      return super.copy(t2, e), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e = Object.keys(t2);
      if (e.length > 0) {
        const n = t2[e[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e2 = n.length; t3 < e2; t3++) {
            const e3 = n[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e3] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e) {
      const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t2);
      const a = this.morphTargetInfluences;
      if (r && a) {
        Bs.set(0, 0, 0);
        for (let n2 = 0, i2 = r.length; n2 < i2; n2++) {
          const i3 = a[n2], o = r[n2];
          0 !== i3 && (Fs.fromBufferAttribute(o, t2), s ? Bs.addScaledVector(Fs, i3) : Bs.addScaledVector(Fs.sub(e), i3));
        }
        e.add(Bs);
      }
      return e;
    }
    raycast(t2, e) {
      const n = this.geometry, i = this.material, r = this.matrixWorld;
      if (void 0 !== i) {
        if (null === n.boundingSphere && n.computeBoundingSphere(), Ls.copy(n.boundingSphere), Ls.applyMatrix4(r), Is.copy(t2.ray).recast(t2.near), false === Ls.containsPoint(Is.origin)) {
          if (null === Is.intersectSphere(Ls, Us)) return;
          if (Is.origin.distanceToSquared(Us) > (t2.far - t2.near) ** 2) return;
        }
        Ps.copy(r).invert(), Is.copy(t2.ray).applyMatrix4(Ps), null !== n.boundingBox && false === Is.intersectsBox(n.boundingBox) || this._computeIntersections(t2, e, Is);
      }
    }
    _computeIntersections(t2, e, n) {
      let i;
      const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l2 = r.attributes.uv, c2 = r.attributes.uv1, h2 = r.attributes.normal, u2 = r.groups, d2 = r.drawRange;
      if (null !== a) if (Array.isArray(s)) for (let r2 = 0, o2 = u2.length; r2 < o2; r2++) {
        const o3 = u2[r2], p2 = s[o3.materialIndex];
        for (let r3 = Math.max(o3.start, d2.start), s2 = Math.min(a.count, Math.min(o3.start + o3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = Hs(this, p2, t2, n, l2, c2, h2, a.getX(r3), a.getX(r3 + 1), a.getX(r3 + 2)), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = o3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), o2 = Math.min(a.count, d2.start + d2.count); r2 < o2; r2 += 3) {
          i = Hs(this, s, t2, n, l2, c2, h2, a.getX(r2), a.getX(r2 + 1), a.getX(r2 + 2)), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
      else if (void 0 !== o) if (Array.isArray(s)) for (let r2 = 0, a2 = u2.length; r2 < a2; r2++) {
        const a3 = u2[r2], p2 = s[a3.materialIndex];
        for (let r3 = Math.max(a3.start, d2.start), s2 = Math.min(o.count, Math.min(a3.start + a3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = Hs(this, p2, t2, n, l2, c2, h2, r3, r3 + 1, r3 + 2), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = a3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), a2 = Math.min(o.count, d2.start + d2.count); r2 < a2; r2 += 3) {
          i = Hs(this, s, t2, n, l2, c2, h2, r2, r2 + 1, r2 + 2), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
    }
  };
  function Hs(t2, e, n, i, r, s, a, o, l2, c2) {
    t2.getVertexPosition(o, Ns), t2.getVertexPosition(l2, Ds), t2.getVertexPosition(c2, Os);
    const h2 = (function(t3, e2, n2, i2, r2, s2, a2, o2) {
      let l3;
      if (l3 = e2.side === d ? i2.intersectTriangle(a2, s2, r2, true, o2) : i2.intersectTriangle(r2, s2, a2, e2.side === u, o2), null === l3) return null;
      ks.copy(o2), ks.applyMatrix4(t3.matrixWorld);
      const c3 = n2.ray.origin.distanceTo(ks);
      return c3 < n2.near || c3 > n2.far ? null : { distance: c3, point: ks.clone(), object: t3 };
    })(t2, e, n, i, Ns, Ds, Os, zs);
    if (h2) {
      const t3 = new Li();
      Zr.getBarycoord(zs, Ns, Ds, Os, t3), r && (h2.uv = Zr.getInterpolatedAttribute(r, o, l2, c2, t3, new ti())), s && (h2.uv1 = Zr.getInterpolatedAttribute(s, o, l2, c2, t3, new ti())), a && (h2.normal = Zr.getInterpolatedAttribute(a, o, l2, c2, t3, new Li()), h2.normal.dot(i.direction) > 0 && h2.normal.multiplyScalar(-1));
      const e2 = { a: o, b: l2, c: c2, normal: new Li(), materialIndex: 0 };
      Zr.getNormal(Ns, Ds, Os, e2.normal), h2.face = e2, h2.barycoord = t3;
    }
    return h2;
  }
  var Gs = class _Gs extends Cs {
    constructor(t2 = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s };
      const a = this;
      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      const o = [], l2 = [], c2 = [], h2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e2, n2, i2, r2, s2, p3, m, f, g, v) {
        const _ = s2 / f, x = p3 / g, y2 = s2 / 2, M = p3 / 2, S = m / 2, b = f + 1, w = g + 1;
        let T = 0, E = 0;
        const A = new Li();
        for (let s3 = 0; s3 < w; s3++) {
          const a2 = s3 * x - M;
          for (let o2 = 0; o2 < b; o2++) {
            const u3 = o2 * _ - y2;
            A[t3] = u3 * i2, A[e2] = a2 * r2, A[n2] = S, l2.push(A.x, A.y, A.z), A[t3] = 0, A[e2] = 0, A[n2] = m > 0 ? 1 : -1, c2.push(A.x, A.y, A.z), h2.push(o2 / f), h2.push(1 - s3 / g), T += 1;
          }
        }
        for (let t4 = 0; t4 < g; t4++) for (let e3 = 0; e3 < f; e3++) {
          const n3 = u2 + e3 + b * t4, i3 = u2 + e3 + b * (t4 + 1), r3 = u2 + (e3 + 1) + b * (t4 + 1), s3 = u2 + (e3 + 1) + b * t4;
          o.push(n3, i3, s3), o.push(i3, r3, s3), E += 6;
        }
        a.addGroup(d2, E, v), d2 += E, u2 += T;
      }
      p2("z", "y", "x", -1, -1, n, e, t2, s, r, 0), p2("z", "y", "x", 1, -1, n, e, -t2, s, r, 1), p2("x", "z", "y", 1, 1, t2, n, e, i, s, 2), p2("x", "z", "y", 1, -1, t2, n, -e, i, s, 3), p2("x", "y", "z", 1, -1, t2, e, n, i, r, 4), p2("x", "y", "z", -1, -1, t2, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Ms(l2, 3)), this.setAttribute("normal", new Ms(c2, 3)), this.setAttribute("uv", new Ms(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Gs(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function Ws(t2) {
    const e = {};
    for (const n in t2) {
      e[n] = {};
      for (const i in t2[n]) {
        const r = t2[n][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
      }
    }
    return e;
  }
  function Xs(t2) {
    const e = {};
    for (let n = 0; n < t2.length; n++) {
      const i = Ws(t2[n]);
      for (const t3 in i) e[t3] = i[t3];
    }
    return e;
  }
  function js(t2) {
    const e = t2.getRenderTarget();
    return null === e ? t2.outputColorSpace : true === e.isXRRenderTarget ? e.texture.colorSpace : mi.workingColorSpace;
  }
  var qs = { clone: Ws, merge: Xs };
  var Ys = class extends is {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Ws(t2.uniforms), this.uniformsGroups = (function(t3) {
        const e = [];
        for (let n = 0; n < t3.length; n++) e.push(t3[n].clone());
        return e;
      })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (const n2 in this.uniforms) {
        const i = this.uniforms[n2].value;
        i && i.isTexture ? e.uniforms[n2] = { type: "t", value: i.toJSON(t2).uuid } : i && i.isColor ? e.uniforms[n2] = { type: "c", value: i.getHex() } : i && i.isVector2 ? e.uniforms[n2] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? e.uniforms[n2] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? e.uniforms[n2] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? e.uniforms[n2] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? e.uniforms[n2] = { type: "m4", value: i.toArray() } : e.uniforms[n2] = { value: i };
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
      const n = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (n[t3] = true);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  };
  var Zs = class extends Dr {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new lr(), this.projectionMatrix = new lr(), this.projectionMatrixInverse = new lr(), this.coordinateSystem = kn;
    }
    copy(t2, e) {
      return super.copy(t2, e), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e) {
      super.updateWorldMatrix(t2, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Js = new Li();
  var Ks = new ti();
  var $s = new ti();
  var Qs = class extends Zs {
    constructor(t2 = 50, e = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * jn * Math.atan(e), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * Xn * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * jn * Math.atan(Math.tan(0.5 * Xn * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e, n) {
      Js.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Js.x, Js.y).multiplyScalar(-t2 / Js.z), Js.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Js.x, Js.y).multiplyScalar(-t2 / Js.z);
    }
    getViewSize(t2, e) {
      return this.getViewBounds(t2, Ks, $s), e.subVectors($s, Ks);
    }
    setViewOffset(t2, e, n, i, r, s) {
      this.aspect = t2 / e, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e = t2 * Math.tan(0.5 * Xn * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = s.fullWidth, a2 = s.fullHeight;
        r += s.offsetX * i / t3, e -= s.offsetY * n / a2, i *= s.width / t3, n *= s.height / a2;
      }
      const a = this.filmOffset;
      0 !== a && (r += t2 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t2, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  };
  var ta = -90;
  var ea = class extends Dr {
    constructor(t2, e, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new Qs(ta, 1, t2, e);
      i.layers = this.layers, this.add(i);
      const r = new Qs(ta, 1, t2, e);
      r.layers = this.layers, this.add(r);
      const s = new Qs(ta, 1, t2, e);
      s.layers = this.layers, this.add(s);
      const a = new Qs(ta, 1, t2, e);
      a.layers = this.layers, this.add(a);
      const o = new Qs(ta, 1, t2, e);
      o.layers = this.layers, this.add(o);
      const l2 = new Qs(ta, 1, t2, e);
      l2.layers = this.layers, this.add(l2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e = this.children.concat(), [n, i, r, s, a, o] = e;
      for (const t3 of e) this.remove(t3);
      if (t2 === kn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
      else {
        if (t2 !== Vn) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
      }
      for (const t3 of e) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r, s, a, o, l2, c2] = this.children, h2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, t2.setRenderTarget(n, 0, i), t2.render(e, r), t2.setRenderTarget(n, 1, i), t2.render(e, s), t2.setRenderTarget(n, 2, i), t2.render(e, a), t2.setRenderTarget(n, 3, i), t2.render(e, o), t2.setRenderTarget(n, 4, i), t2.render(e, l2), n.texture.generateMipmaps = m, t2.setRenderTarget(n, 5, i), t2.render(e, c2), t2.setRenderTarget(h2, u2, d2), t2.xr.enabled = p2, n.texture.needsPMREMUpdate = true;
    }
  };
  var na = class extends bi {
    constructor(t2, e, n, i, r, s, a, o, l2, c2) {
      super(t2 = void 0 !== t2 ? t2 : [], e = void 0 !== e ? e : lt, n, i, r, s, a, o, l2, c2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var ia = class extends Ei {
    constructor(t2 = 1, e = {}) {
      super(t2, t2, e), this.isWebGLCubeRenderTarget = true;
      const n = { width: t2, height: t2, depth: 1 }, i = [n, n, n, n, n, n];
      this.texture = new na(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Mt;
    }
    fromEquirectangularTexture(t2, e) {
      this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      const n = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i = new Gs(5, 5, 5), r = new Ys({ name: "CubemapFromEquirect", uniforms: Ws(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: d, blending: 0 });
      r.uniforms.tEquirect.value = e;
      const s = new Vs(i, r), a = e.minFilter;
      e.minFilter === wt && (e.minFilter = Mt);
      return new ea(1, 10, this).update(t2, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
    }
    clear(t2, e, n, i) {
      const r = t2.getRenderTarget();
      for (let r2 = 0; r2 < 6; r2++) t2.setRenderTarget(this, r2), t2.clear(e, n, i);
      t2.setRenderTarget(r);
    }
  };
  var ra = new Li();
  var sa = new Li();
  var aa = new ei();
  var oa = class {
    constructor(t2 = new Li(1, 0, 0), e = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e;
    }
    set(t2, e) {
      return this.normal.copy(t2), this.constant = e, this;
    }
    setComponents(t2, e, n, i) {
      return this.normal.set(t2, e, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(t2, e) {
      return this.normal.copy(t2), this.constant = -e.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e, n) {
      const i = ra.subVectors(n, e).cross(sa.subVectors(t2, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e) {
      return e.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e) {
      const n = t2.delta(ra), i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(t2.start) ? e.copy(t2.start) : null;
      const r = -(t2.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t2.start).addScaledVector(n, r);
    }
    intersectsLine(t2) {
      const e = this.distanceToPoint(t2.start), n = this.distanceToPoint(t2.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e) {
      const n = e || aa.getNormalMatrix(t2), i = this.coplanarPoint(ra).applyMatrix4(t2), r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var la = new Qi();
  var ca = new Li();
  var ha = class {
    constructor(t2 = new oa(), e = new oa(), n = new oa(), i = new oa(), r = new oa(), s = new oa()) {
      this.planes = [t2, e, n, i, r, s];
    }
    set(t2, e, n, i, r, s) {
      const a = this.planes;
      return a[0].copy(t2), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
    }
    copy(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t2.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t2, e = 2e3) {
      const n = this.planes, i = t2.elements, r = i[0], s = i[1], a = i[2], o = i[3], l2 = i[4], c2 = i[5], h2 = i[6], u2 = i[7], d2 = i[8], p2 = i[9], m = i[10], f = i[11], g = i[12], v = i[13], _ = i[14], x = i[15];
      if (n[0].setComponents(o - r, u2 - l2, f - d2, x - g).normalize(), n[1].setComponents(o + r, u2 + l2, f + d2, x + g).normalize(), n[2].setComponents(o + s, u2 + c2, f + p2, x + v).normalize(), n[3].setComponents(o - s, u2 - c2, f - p2, x - v).normalize(), n[4].setComponents(o - a, u2 - h2, f - m, x - _).normalize(), e === kn) n[5].setComponents(o + a, u2 + h2, f + m, x + _).normalize();
      else {
        if (e !== Vn) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        n[5].setComponents(a, h2, m, _).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), la.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e = t2.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(), la.copy(e.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(la);
    }
    intersectsSprite(t2) {
      return la.center.set(0, 0, 0), la.radius = 0.7071067811865476, la.applyMatrix4(t2.matrixWorld), this.intersectsSphere(la);
    }
    intersectsSphere(t2) {
      const e = this.planes, n = t2.center, i = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e[t3].distanceToPoint(n) < i) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (ca.x = i.normal.x > 0 ? t2.max.x : t2.min.x, ca.y = i.normal.y > 0 ? t2.max.y : t2.min.y, ca.z = i.normal.z > 0 ? t2.max.z : t2.min.z, i.distanceToPoint(ca) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  function ua() {
    let t2 = null, e = false, n = null, i = null;
    function r(e2, s) {
      n(e2, s), i = t2.requestAnimationFrame(r);
    }
    return { start: function() {
      true !== e && null !== n && (i = t2.requestAnimationFrame(r), e = true);
    }, stop: function() {
      t2.cancelAnimationFrame(i), e = false;
    }, setAnimationLoop: function(t3) {
      n = t3;
    }, setContext: function(e2) {
      t2 = e2;
    } };
  }
  function da(t2) {
    const e = /* @__PURE__ */ new WeakMap();
    return { get: function(t3) {
      return t3.isInterleavedBufferAttribute && (t3 = t3.data), e.get(t3);
    }, remove: function(n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = e.get(n);
      i && (t2.deleteBuffer(i.buffer), e.delete(n));
    }, update: function(n, i) {
      if (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute) {
        const t3 = e.get(n);
        return void ((!t3 || t3.version < n.version) && e.set(n, { buffer: n.buffer, type: n.type, bytesPerElement: n.elementSize, version: n.version }));
      }
      const r = e.get(n);
      if (void 0 === r) e.set(n, (function(e2, n2) {
        const i2 = e2.array, r2 = e2.usage, s = i2.byteLength, a = t2.createBuffer();
        let o;
        if (t2.bindBuffer(n2, a), t2.bufferData(n2, i2, r2), e2.onUploadCallback(), i2 instanceof Float32Array) o = t2.FLOAT;
        else if (i2 instanceof Uint16Array) o = e2.isFloat16BufferAttribute ? t2.HALF_FLOAT : t2.UNSIGNED_SHORT;
        else if (i2 instanceof Int16Array) o = t2.SHORT;
        else if (i2 instanceof Uint32Array) o = t2.UNSIGNED_INT;
        else if (i2 instanceof Int32Array) o = t2.INT;
        else if (i2 instanceof Int8Array) o = t2.BYTE;
        else if (i2 instanceof Uint8Array) o = t2.UNSIGNED_BYTE;
        else {
          if (!(i2 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i2);
          o = t2.UNSIGNED_BYTE;
        }
        return { buffer: a, type: o, bytesPerElement: i2.BYTES_PER_ELEMENT, version: e2.version, size: s };
      })(n, i));
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !(function(e2, n2, i2) {
          const r2 = n2.array, s = n2.updateRanges;
          if (t2.bindBuffer(i2, e2), 0 === s.length) t2.bufferSubData(i2, 0, r2);
          else {
            s.sort(((t3, e4) => t3.start - e4.start));
            let e3 = 0;
            for (let t3 = 1; t3 < s.length; t3++) {
              const n3 = s[e3], i3 = s[t3];
              i3.start <= n3.start + n3.count + 1 ? n3.count = Math.max(n3.count, i3.start + i3.count - n3.start) : (++e3, s[e3] = i3);
            }
            s.length = e3 + 1;
            for (let e4 = 0, n3 = s.length; e4 < n3; e4++) {
              const n4 = s[e4];
              t2.bufferSubData(i2, n4.start * r2.BYTES_PER_ELEMENT, r2, n4.start, n4.count);
            }
            n2.clearUpdateRanges();
          }
          n2.onUploadCallback();
        })(r.buffer, n, i), r.version = n.version;
      }
    } };
  }
  var pa = class _pa extends Cs {
    constructor(t2 = 1, e = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e, widthSegments: n, heightSegments: i };
      const r = t2 / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l2 = a + 1, c2 = o + 1, h2 = t2 / a, u2 = e / o, d2 = [], p2 = [], m = [], f = [];
      for (let t3 = 0; t3 < c2; t3++) {
        const e2 = t3 * u2 - s;
        for (let n2 = 0; n2 < l2; n2++) {
          const i2 = n2 * h2 - r;
          p2.push(i2, -e2, 0), m.push(0, 0, 1), f.push(n2 / a), f.push(1 - t3 / o);
        }
      }
      for (let t3 = 0; t3 < o; t3++) for (let e2 = 0; e2 < a; e2++) {
        const n2 = e2 + l2 * t3, i2 = e2 + l2 * (t3 + 1), r2 = e2 + 1 + l2 * (t3 + 1), s2 = e2 + 1 + l2 * t3;
        d2.push(n2, i2, s2), d2.push(i2, r2, s2);
      }
      this.setIndex(d2), this.setAttribute("position", new Ms(p2, 3)), this.setAttribute("normal", new Ms(m, 3)), this.setAttribute("uv", new Ms(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _pa(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var ma = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n	vec3( 0.8224621, 0.177538, 0.0 ),\n	vec3( 0.0331941, 0.9668058, 0.0 ),\n	vec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n	vec3( 1.2249401, - 0.2249404, 0.0 ),\n	vec3( - 0.0420569, 1.0420571, 0.0 ),\n	vec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var fa = { common: { diffuse: { value: new ts(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new ei() }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ei() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new ei() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ei() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new ei() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new ei() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new ei() }, normalScale: { value: new ti(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new ei() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new ei() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new ei() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new ei() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ts(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ts(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 }, uvTransform: { value: new ei() } }, sprite: { diffuse: { value: new ts(16777215) }, opacity: { value: 1 }, center: { value: new ti(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new ei() }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 } } };
  var ga = { basic: { uniforms: Xs([fa.common, fa.specularmap, fa.envmap, fa.aomap, fa.lightmap, fa.fog]), vertexShader: ma.meshbasic_vert, fragmentShader: ma.meshbasic_frag }, lambert: { uniforms: Xs([fa.common, fa.specularmap, fa.envmap, fa.aomap, fa.lightmap, fa.emissivemap, fa.bumpmap, fa.normalmap, fa.displacementmap, fa.fog, fa.lights, { emissive: { value: new ts(0) } }]), vertexShader: ma.meshlambert_vert, fragmentShader: ma.meshlambert_frag }, phong: { uniforms: Xs([fa.common, fa.specularmap, fa.envmap, fa.aomap, fa.lightmap, fa.emissivemap, fa.bumpmap, fa.normalmap, fa.displacementmap, fa.fog, fa.lights, { emissive: { value: new ts(0) }, specular: { value: new ts(1118481) }, shininess: { value: 30 } }]), vertexShader: ma.meshphong_vert, fragmentShader: ma.meshphong_frag }, standard: { uniforms: Xs([fa.common, fa.envmap, fa.aomap, fa.lightmap, fa.emissivemap, fa.bumpmap, fa.normalmap, fa.displacementmap, fa.roughnessmap, fa.metalnessmap, fa.fog, fa.lights, { emissive: { value: new ts(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ma.meshphysical_vert, fragmentShader: ma.meshphysical_frag }, toon: { uniforms: Xs([fa.common, fa.aomap, fa.lightmap, fa.emissivemap, fa.bumpmap, fa.normalmap, fa.displacementmap, fa.gradientmap, fa.fog, fa.lights, { emissive: { value: new ts(0) } }]), vertexShader: ma.meshtoon_vert, fragmentShader: ma.meshtoon_frag }, matcap: { uniforms: Xs([fa.common, fa.bumpmap, fa.normalmap, fa.displacementmap, fa.fog, { matcap: { value: null } }]), vertexShader: ma.meshmatcap_vert, fragmentShader: ma.meshmatcap_frag }, points: { uniforms: Xs([fa.points, fa.fog]), vertexShader: ma.points_vert, fragmentShader: ma.points_frag }, dashed: { uniforms: Xs([fa.common, fa.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ma.linedashed_vert, fragmentShader: ma.linedashed_frag }, depth: { uniforms: Xs([fa.common, fa.displacementmap]), vertexShader: ma.depth_vert, fragmentShader: ma.depth_frag }, normal: { uniforms: Xs([fa.common, fa.bumpmap, fa.normalmap, fa.displacementmap, { opacity: { value: 1 } }]), vertexShader: ma.meshnormal_vert, fragmentShader: ma.meshnormal_frag }, sprite: { uniforms: Xs([fa.sprite, fa.fog]), vertexShader: ma.sprite_vert, fragmentShader: ma.sprite_frag }, background: { uniforms: { uvTransform: { value: new ei() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ma.background_vert, fragmentShader: ma.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new ei() } }, vertexShader: ma.backgroundCube_vert, fragmentShader: ma.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ma.cube_vert, fragmentShader: ma.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ma.equirect_vert, fragmentShader: ma.equirect_frag }, distanceRGBA: { uniforms: Xs([fa.common, fa.displacementmap, { referencePosition: { value: new Li() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ma.distanceRGBA_vert, fragmentShader: ma.distanceRGBA_frag }, shadow: { uniforms: Xs([fa.lights, fa.fog, { color: { value: new ts(0) }, opacity: { value: 1 } }]), vertexShader: ma.shadow_vert, fragmentShader: ma.shadow_frag } };
  ga.physical = { uniforms: Xs([ga.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new ei() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new ei() }, clearcoatNormalScale: { value: new ti(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new ei() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new ei() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new ei() }, sheen: { value: 0 }, sheenColor: { value: new ts(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new ei() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new ei() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new ei() }, transmissionSamplerSize: { value: new ti() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new ei() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ts(0) }, specularColor: { value: new ts(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new ei() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new ei() }, anisotropyVector: { value: new ti() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new ei() } }]), vertexShader: ma.meshphysical_vert, fragmentShader: ma.meshphysical_frag };
  var va = { r: 0, b: 0, g: 0 };
  var _a = new _r();
  var xa = new lr();
  function ya(t2, e, n, i, r, s, a) {
    const o = new ts(0);
    let l2, c2, h2 = true === s ? 0 : 1, p2 = null, m = 0, f = null;
    function g(t3) {
      let i2 = true === t3.isScene ? t3.background : null;
      if (i2 && i2.isTexture) {
        i2 = (t3.backgroundBlurriness > 0 ? n : e).get(i2);
      }
      return i2;
    }
    function v(e2, n2) {
      e2.getRGB(va, js(t2)), i.buffers.color.setClear(va.r, va.g, va.b, n2, a);
    }
    return { getClearColor: function() {
      return o;
    }, setClearColor: function(t3, e2 = 1) {
      o.set(t3), h2 = e2, v(o, h2);
    }, getClearAlpha: function() {
      return h2;
    }, setClearAlpha: function(t3) {
      h2 = t3, v(o, h2);
    }, render: function(e2) {
      let n2 = false;
      const r2 = g(e2);
      null === r2 ? v(o, h2) : r2 && r2.isColor && (v(r2, 1), n2 = true);
      const s2 = t2.xr.getEnvironmentBlendMode();
      "additive" === s2 ? i.buffers.color.setClear(0, 0, 0, 1, a) : "alpha-blend" === s2 && i.buffers.color.setClear(0, 0, 0, 0, a), (t2.autoClear || n2) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), t2.clear(t2.autoClearColor, t2.autoClearDepth, t2.autoClearStencil));
    }, addToRenderList: function(e2, n2) {
      const i2 = g(n2);
      i2 && (i2.isCubeTexture || i2.mapping === dt) ? (void 0 === c2 && (c2 = new Vs(new Gs(1, 1, 1), new Ys({ name: "BackgroundCubeMaterial", uniforms: Ws(ga.backgroundCube.uniforms), vertexShader: ga.backgroundCube.vertexShader, fragmentShader: ga.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false })), c2.geometry.deleteAttribute("normal"), c2.geometry.deleteAttribute("uv"), c2.onBeforeRender = function(t3, e3, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(c2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r.update(c2)), _a.copy(n2.backgroundRotation), _a.x *= -1, _a.y *= -1, _a.z *= -1, i2.isCubeTexture && false === i2.isRenderTargetTexture && (_a.y *= -1, _a.z *= -1), c2.material.uniforms.envMap.value = i2, c2.material.uniforms.flipEnvMap.value = i2.isCubeTexture && false === i2.isRenderTargetTexture ? -1 : 1, c2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, c2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, c2.material.uniforms.backgroundRotation.value.setFromMatrix4(xa.makeRotationFromEuler(_a)), c2.material.toneMapped = mi.getTransfer(i2.colorSpace) !== en, p2 === i2 && m === i2.version && f === t2.toneMapping || (c2.material.needsUpdate = true, p2 = i2, m = i2.version, f = t2.toneMapping), c2.layers.enableAll(), e2.unshift(c2, c2.geometry, c2.material, 0, 0, null)) : i2 && i2.isTexture && (void 0 === l2 && (l2 = new Vs(new pa(2, 2), new Ys({ name: "BackgroundMaterial", uniforms: Ws(ga.background.uniforms), vertexShader: ga.background.vertexShader, fragmentShader: ga.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false })), l2.geometry.deleteAttribute("normal"), Object.defineProperty(l2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r.update(l2)), l2.material.uniforms.t2D.value = i2, l2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, l2.material.toneMapped = mi.getTransfer(i2.colorSpace) !== en, true === i2.matrixAutoUpdate && i2.updateMatrix(), l2.material.uniforms.uvTransform.value.copy(i2.matrix), p2 === i2 && m === i2.version && f === t2.toneMapping || (l2.material.needsUpdate = true, p2 = i2, m = i2.version, f = t2.toneMapping), l2.layers.enableAll(), e2.unshift(l2, l2.geometry, l2.material, 0, 0, null));
    } };
  }
  function Ma(t2, e) {
    const n = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), i = {}, r = c2(null);
    let s = r, a = false;
    function o(e2) {
      return t2.bindVertexArray(e2);
    }
    function l2(e2) {
      return t2.deleteVertexArray(e2);
    }
    function c2(t3) {
      const e2 = [], i2 = [], r2 = [];
      for (let t4 = 0; t4 < n; t4++) e2[t4] = 0, i2[t4] = 0, r2[t4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: e2, enabledAttributes: i2, attributeDivisors: r2, object: t3, attributes: {}, index: null };
    }
    function h2() {
      const t3 = s.newAttributes;
      for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) t3[e2] = 0;
    }
    function u2(t3) {
      d2(t3, 0);
    }
    function d2(e2, n2) {
      const i2 = s.newAttributes, r2 = s.enabledAttributes, a2 = s.attributeDivisors;
      i2[e2] = 1, 0 === r2[e2] && (t2.enableVertexAttribArray(e2), r2[e2] = 1), a2[e2] !== n2 && (t2.vertexAttribDivisor(e2, n2), a2[e2] = n2);
    }
    function p2() {
      const e2 = s.newAttributes, n2 = s.enabledAttributes;
      for (let i2 = 0, r2 = n2.length; i2 < r2; i2++) n2[i2] !== e2[i2] && (t2.disableVertexAttribArray(i2), n2[i2] = 0);
    }
    function m(e2, n2, i2, r2, s2, a2, o2) {
      true === o2 ? t2.vertexAttribIPointer(e2, n2, i2, s2, a2) : t2.vertexAttribPointer(e2, n2, i2, r2, s2, a2);
    }
    function f() {
      g(), a = true, s !== r && (s = r, o(s.object));
    }
    function g() {
      r.geometry = null, r.program = null, r.wireframe = false;
    }
    return { setup: function(n2, r2, l3, f2, g2) {
      let v = false;
      const _ = (function(e2, n3, r3) {
        const s2 = true === r3.wireframe;
        let a2 = i[e2.id];
        void 0 === a2 && (a2 = {}, i[e2.id] = a2);
        let o2 = a2[n3.id];
        void 0 === o2 && (o2 = {}, a2[n3.id] = o2);
        let l4 = o2[s2];
        void 0 === l4 && (l4 = c2(t2.createVertexArray()), o2[s2] = l4);
        return l4;
      })(f2, l3, r2);
      s !== _ && (s = _, o(s.object)), v = (function(t3, e2, n3, i2) {
        const r3 = s.attributes, a2 = e2.attributes;
        let o2 = 0;
        const l4 = n3.getAttributes();
        for (const e3 in l4) {
          if (l4[e3].location >= 0) {
            const n4 = r3[e3];
            let i3 = a2[e3];
            if (void 0 === i3 && ("instanceMatrix" === e3 && t3.instanceMatrix && (i3 = t3.instanceMatrix), "instanceColor" === e3 && t3.instanceColor && (i3 = t3.instanceColor)), void 0 === n4) return true;
            if (n4.attribute !== i3) return true;
            if (i3 && n4.data !== i3.data) return true;
            o2++;
          }
        }
        return s.attributesNum !== o2 || s.index !== i2;
      })(n2, f2, l3, g2), v && (function(t3, e2, n3, i2) {
        const r3 = {}, a2 = e2.attributes;
        let o2 = 0;
        const l4 = n3.getAttributes();
        for (const e3 in l4) {
          if (l4[e3].location >= 0) {
            let n4 = a2[e3];
            void 0 === n4 && ("instanceMatrix" === e3 && t3.instanceMatrix && (n4 = t3.instanceMatrix), "instanceColor" === e3 && t3.instanceColor && (n4 = t3.instanceColor));
            const i3 = {};
            i3.attribute = n4, n4 && n4.data && (i3.data = n4.data), r3[e3] = i3, o2++;
          }
        }
        s.attributes = r3, s.attributesNum = o2, s.index = i2;
      })(n2, f2, l3, g2), null !== g2 && e.update(g2, t2.ELEMENT_ARRAY_BUFFER), (v || a) && (a = false, (function(n3, i2, r3, s2) {
        h2();
        const a2 = s2.attributes, o2 = r3.getAttributes(), l4 = i2.defaultAttributeValues;
        for (const i3 in o2) {
          const r4 = o2[i3];
          if (r4.location >= 0) {
            let o3 = a2[i3];
            if (void 0 === o3 && ("instanceMatrix" === i3 && n3.instanceMatrix && (o3 = n3.instanceMatrix), "instanceColor" === i3 && n3.instanceColor && (o3 = n3.instanceColor)), void 0 !== o3) {
              const i4 = o3.normalized, a3 = o3.itemSize, l5 = e.get(o3);
              if (void 0 === l5) continue;
              const c3 = l5.buffer, h3 = l5.type, p3 = l5.bytesPerElement, f3 = h3 === t2.INT || h3 === t2.UNSIGNED_INT || o3.gpuType === Pt;
              if (o3.isInterleavedBufferAttribute) {
                const e2 = o3.data, l6 = e2.stride, g3 = o3.offset;
                if (e2.isInstancedInterleavedBuffer) {
                  for (let t3 = 0; t3 < r4.locationSize; t3++) d2(r4.location + t3, e2.meshPerAttribute);
                  true !== n3.isInstancedMesh && void 0 === s2._maxInstanceCount && (s2._maxInstanceCount = e2.meshPerAttribute * e2.count);
                } else for (let t3 = 0; t3 < r4.locationSize; t3++) u2(r4.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, c3);
                for (let t3 = 0; t3 < r4.locationSize; t3++) m(r4.location + t3, a3 / r4.locationSize, h3, i4, l6 * p3, (g3 + a3 / r4.locationSize * t3) * p3, f3);
              } else {
                if (o3.isInstancedBufferAttribute) {
                  for (let t3 = 0; t3 < r4.locationSize; t3++) d2(r4.location + t3, o3.meshPerAttribute);
                  true !== n3.isInstancedMesh && void 0 === s2._maxInstanceCount && (s2._maxInstanceCount = o3.meshPerAttribute * o3.count);
                } else for (let t3 = 0; t3 < r4.locationSize; t3++) u2(r4.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, c3);
                for (let t3 = 0; t3 < r4.locationSize; t3++) m(r4.location + t3, a3 / r4.locationSize, h3, i4, a3 * p3, a3 / r4.locationSize * t3 * p3, f3);
              }
            } else if (void 0 !== l4) {
              const e2 = l4[i3];
              if (void 0 !== e2) switch (e2.length) {
                case 2:
                  t2.vertexAttrib2fv(r4.location, e2);
                  break;
                case 3:
                  t2.vertexAttrib3fv(r4.location, e2);
                  break;
                case 4:
                  t2.vertexAttrib4fv(r4.location, e2);
                  break;
                default:
                  t2.vertexAttrib1fv(r4.location, e2);
              }
            }
          }
        }
        p2();
      })(n2, r2, l3, f2), null !== g2 && t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, e.get(g2).buffer));
    }, reset: f, resetDefaultState: g, dispose: function() {
      f();
      for (const t3 in i) {
        const e2 = i[t3];
        for (const t4 in e2) {
          const n2 = e2[t4];
          for (const t5 in n2) l2(n2[t5].object), delete n2[t5];
          delete e2[t4];
        }
        delete i[t3];
      }
    }, releaseStatesOfGeometry: function(t3) {
      if (void 0 === i[t3.id]) return;
      const e2 = i[t3.id];
      for (const t4 in e2) {
        const n2 = e2[t4];
        for (const t5 in n2) l2(n2[t5].object), delete n2[t5];
        delete e2[t4];
      }
      delete i[t3.id];
    }, releaseStatesOfProgram: function(t3) {
      for (const e2 in i) {
        const n2 = i[e2];
        if (void 0 === n2[t3.id]) continue;
        const r2 = n2[t3.id];
        for (const t4 in r2) l2(r2[t4].object), delete r2[t4];
        delete n2[t3.id];
      }
    }, initAttributes: h2, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function Sa(t2, e, n) {
    let i;
    function r(e2, r2, s) {
      0 !== s && (t2.drawArraysInstanced(i, e2, r2, s), n.update(r2, i, s));
    }
    this.setMode = function(t3) {
      i = t3;
    }, this.render = function(e2, r2) {
      t2.drawArrays(i, e2, r2), n.update(r2, i, 1);
    }, this.renderInstances = r, this.renderMultiDraw = function(t3, r2, s) {
      if (0 === s) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t3, 0, r2, 0, s);
      let a = 0;
      for (let t4 = 0; t4 < s; t4++) a += r2[t4];
      n.update(a, i, 1);
    }, this.renderMultiDrawInstances = function(t3, s, a, o) {
      if (0 === a) return;
      const l2 = e.get("WEBGL_multi_draw");
      if (null === l2) for (let e2 = 0; e2 < t3.length; e2++) r(t3[e2], s[e2], o[e2]);
      else {
        l2.multiDrawArraysInstancedWEBGL(i, t3, 0, s, 0, o, 0, a);
        let e2 = 0;
        for (let t4 = 0; t4 < a; t4++) e2 += s[t4];
        for (let t4 = 0; t4 < o.length; t4++) n.update(e2, i, o[t4]);
      }
    };
  }
  function ba(t2, e, n, i) {
    let r;
    function s(e2) {
      if ("highp" === e2) {
        if (t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.HIGH_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.HIGH_FLOAT).precision > 0) return "highp";
        e2 = "mediump";
      }
      return "mediump" === e2 && t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.MEDIUM_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = s(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    const l2 = true === n.logarithmicDepthBuffer, c2 = true === n.reverseDepthBuffer && e.has("EXT_clip_control");
    if (true === c2) {
      const t3 = e.get("EXT_clip_control");
      t3.clipControlEXT(t3.LOWER_LEFT_EXT, t3.ZERO_TO_ONE_EXT);
    }
    const h2 = t2.getParameter(t2.MAX_TEXTURE_IMAGE_UNITS), u2 = t2.getParameter(t2.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== r) return r;
      if (true === e.has("EXT_texture_filter_anisotropic")) {
        const n2 = e.get("EXT_texture_filter_anisotropic");
        r = t2.getParameter(n2.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    }, getMaxPrecision: s, textureFormatReadable: function(e2) {
      return e2 === kt || i.convert(e2) === t2.getParameter(t2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n2) {
      const r2 = n2 === Ut && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
      return !(n2 !== Et && i.convert(n2) !== t2.getParameter(t2.IMPLEMENTATION_COLOR_READ_TYPE) && n2 !== Lt && !r2);
    }, precision: a, logarithmicDepthBuffer: l2, reverseDepthBuffer: c2, maxTextures: h2, maxVertexTextures: u2, maxTextureSize: t2.getParameter(t2.MAX_TEXTURE_SIZE), maxCubemapSize: t2.getParameter(t2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: t2.getParameter(t2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: t2.getParameter(t2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: t2.getParameter(t2.MAX_VARYING_VECTORS), maxFragmentUniforms: t2.getParameter(t2.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: u2 > 0, maxSamples: t2.getParameter(t2.MAX_SAMPLES) };
  }
  function wa(t2) {
    const e = this;
    let n = null, i = 0, r = false, s = false;
    const a = new oa(), o = new ei(), l2 = { value: null, needsUpdate: false };
    function c2(t3, n2, i2, r2) {
      const s2 = null !== t3 ? t3.length : 0;
      let c3 = null;
      if (0 !== s2) {
        if (c3 = l2.value, true !== r2 || null === c3) {
          const e2 = i2 + 4 * s2, r3 = n2.matrixWorldInverse;
          o.getNormalMatrix(r3), (null === c3 || c3.length < e2) && (c3 = new Float32Array(e2));
          for (let e3 = 0, n3 = i2; e3 !== s2; ++e3, n3 += 4) a.copy(t3[e3]).applyMatrix4(r3, o), a.normal.toArray(c3, n3), c3[n3 + 3] = a.constant;
        }
        l2.value = c3, l2.needsUpdate = true;
      }
      return e.numPlanes = s2, e.numIntersection = 0, c3;
    }
    this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t3, e2) {
      const n2 = 0 !== t3.length || e2 || 0 !== i || r;
      return r = e2, i = t3.length, n2;
    }, this.beginShadows = function() {
      s = true, c2(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(t3, e2) {
      n = c2(t3, e2, 0);
    }, this.setState = function(a2, o2, h2) {
      const u2 = a2.clippingPlanes, d2 = a2.clipIntersection, p2 = a2.clipShadows, m = t2.get(a2);
      if (!r || null === u2 || 0 === u2.length || s && !p2) s ? c2(null) : (function() {
        l2.value !== n && (l2.value = n, l2.needsUpdate = i > 0);
        e.numPlanes = i, e.numIntersection = 0;
      })();
      else {
        const t3 = s ? 0 : i, e2 = 4 * t3;
        let r2 = m.clippingState || null;
        l2.value = r2, r2 = c2(u2, o2, e2, h2);
        for (let t4 = 0; t4 !== e2; ++t4) r2[t4] = n[t4];
        m.clippingState = r2, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += t3;
      }
    };
  }
  function Ta(t2) {
    let e = /* @__PURE__ */ new WeakMap();
    function n(t3, e2) {
      return e2 === ht ? t3.mapping = lt : e2 === ut && (t3.mapping = ct), t3;
    }
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping;
        if (s === ht || s === ut) {
          if (e.has(r)) {
            return n(e.get(r).texture, r.mapping);
          }
          {
            const s2 = r.image;
            if (s2 && s2.height > 0) {
              const a = new ia(s2.height);
              return a.fromEquirectangularTexture(t2, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping);
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ea = class extends Zs {
    constructor(t2 = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e, n, i, r, s) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n - t2, s = n + t2, a = i + e, o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e2 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += t3 * this.view.offsetX, s = r + t3 * this.view.width, a -= e2 * this.view.offsetY, o = a - e2 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
    }
  };
  var Aa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Ra = 20;
  var Ca = new Ea();
  var Pa = new ts();
  var Ia = null;
  var La = 0;
  var Ua = 0;
  var Na = false;
  var Da = (1 + Math.sqrt(5)) / 2;
  var Oa = 1 / Da;
  var Fa = [new Li(-Da, Oa, 0), new Li(Da, Oa, 0), new Li(-Oa, 0, Da), new Li(Oa, 0, Da), new Li(0, Da, -Oa), new Li(0, Da, Oa), new Li(-1, 1, -1), new Li(1, 1, -1), new Li(-1, 1, 1), new Li(1, 1, 1)];
  var Ba = class {
    constructor(t2) {
      this._renderer = t2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(t2, e = 0, n = 0.1, i = 100) {
      Ia = this._renderer.getRenderTarget(), La = this._renderer.getActiveCubeFace(), Ua = this._renderer.getActiveMipmapLevel(), Na = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(t2, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    fromCubemap(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = Ha(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = Va(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t2) {
      this._lodMax = Math.floor(Math.log2(t2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let t2 = 0; t2 < this._lodPlanes.length; t2++) this._lodPlanes[t2].dispose();
    }
    _cleanup(t2) {
      this._renderer.setRenderTarget(Ia, La, Ua), this._renderer.xr.enabled = Na, t2.scissorTest = false, ka(t2, 0, 0, t2.width, t2.height);
    }
    _fromTexture(t2, e) {
      t2.mapping === lt || t2.mapping === ct ? this._setSize(0 === t2.image.length ? 16 : t2.image[0].width || t2.image[0].image.width) : this._setSize(t2.image.width / 4), Ia = this._renderer.getRenderTarget(), La = this._renderer.getActiveCubeFace(), Ua = this._renderer.getActiveMipmapLevel(), Na = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n = e || this._allocateTargets();
      return this._textureToCubeUV(t2, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const t2 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Ut, format: kt, colorSpace: Ke, depthBuffer: false }, i = za(t2, e, n);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t2 || this._pingPongRenderTarget.height !== e) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = za(t2, e, n);
        const { _lodMax: i2 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = (function(t3) {
          const e2 = [], n2 = [], i3 = [];
          let r = t3;
          const s = t3 - 4 + 1 + Aa.length;
          for (let a = 0; a < s; a++) {
            const s2 = Math.pow(2, r);
            n2.push(s2);
            let o = 1 / s2;
            a > t3 - 4 ? o = Aa[a - t3 + 4 - 1] : 0 === a && (o = 0), i3.push(o);
            const l2 = 1 / (s2 - 2), c2 = -l2, h2 = 1 + l2, u2 = [c2, c2, h2, c2, h2, h2, c2, c2, h2, h2, c2, h2], d2 = 6, p2 = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p2 * d2), _ = new Float32Array(f * p2 * d2), x = new Float32Array(g * p2 * d2);
            for (let t4 = 0; t4 < d2; t4++) {
              const e3 = t4 % 3 * 2 / 3 - 1, n3 = t4 > 2 ? 0 : -1, i4 = [e3, n3, 0, e3 + 2 / 3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3 + 1, 0];
              v.set(i4, m * p2 * t4), _.set(u2, f * p2 * t4);
              const r2 = [t4, t4, t4, t4, t4, t4];
              x.set(r2, g * p2 * t4);
            }
            const y2 = new Cs();
            y2.setAttribute("position", new ds(v, m)), y2.setAttribute("uv", new ds(_, f)), y2.setAttribute("faceIndex", new ds(x, g)), e2.push(y2), r > 4 && r--;
          }
          return { lodPlanes: e2, sizeLods: n2, sigmas: i3 };
        })(i2)), this._blurMaterial = (function(t3, e2, n2) {
          const i3 = new Float32Array(Ra), r = new Li(0, 1, 0), s = new Ys({ name: "SphericalGaussianBlur", defines: { n: Ra, CUBEUV_TEXEL_WIDTH: 1 / e2, CUBEUV_TEXEL_HEIGHT: 1 / n2, CUBEUV_MAX_MIP: `${t3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i3 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: Ga(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
          return s;
        })(i2, t2, e);
      }
      return i;
    }
    _compileMaterial(t2) {
      const e = new Vs(this._lodPlanes[0], t2);
      this._renderer.compile(e, Ca);
    }
    _sceneToCubeUV(t2, e, n, i) {
      const r = new Qs(90, 1, e, n), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer, l2 = o.autoClear, c2 = o.toneMapping;
      o.getClearColor(Pa), o.toneMapping = K, o.autoClear = false;
      const h2 = new rs({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false }), u2 = new Vs(new Gs(), h2);
      let p2 = false;
      const m = t2.background;
      m ? m.isColor && (h2.color.copy(m), t2.background = null, p2 = true) : (h2.color.copy(Pa), p2 = true);
      for (let e2 = 0; e2 < 6; e2++) {
        const n2 = e2 % 3;
        0 === n2 ? (r.up.set(0, s[e2], 0), r.lookAt(a[e2], 0, 0)) : 1 === n2 ? (r.up.set(0, 0, s[e2]), r.lookAt(0, a[e2], 0)) : (r.up.set(0, s[e2], 0), r.lookAt(0, 0, a[e2]));
        const l3 = this._cubeSize;
        ka(i, n2 * l3, e2 > 2 ? l3 : 0, l3, l3), o.setRenderTarget(i), p2 && o.render(u2, r), o.render(t2, r);
      }
      u2.geometry.dispose(), u2.material.dispose(), o.toneMapping = c2, o.autoClear = l2, t2.background = m;
    }
    _textureToCubeUV(t2, e) {
      const n = this._renderer, i = t2.mapping === lt || t2.mapping === ct;
      i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ha()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === t2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Va());
      const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new Vs(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t2;
      const a = this._cubeSize;
      ka(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Ca);
    }
    _applyPMREM(t2) {
      const e = this._renderer, n = e.autoClear;
      e.autoClear = false;
      const i = this._lodPlanes.length;
      for (let e2 = 1; e2 < i; e2++) {
        const n2 = Math.sqrt(this._sigmas[e2] * this._sigmas[e2] - this._sigmas[e2 - 1] * this._sigmas[e2 - 1]), r = Fa[(i - e2 - 1) % Fa.length];
        this._blur(t2, e2 - 1, e2, n2, r);
      }
      e.autoClear = n;
    }
    _blur(t2, e, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(t2, s, e, n, i, "latitudinal", r), this._halfBlur(s, t2, n, n, i, "longitudinal", r);
    }
    _halfBlur(t2, e, n, i, r, s, a) {
      const o = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
      const c2 = new Vs(this._lodPlanes[i], l2), h2 = l2.uniforms, u2 = this._sizeLods[n] - 1, d2 = isFinite(r) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r / d2, m = isFinite(r) ? 1 + Math.floor(3 * p2) : Ra;
      m > Ra && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
      const f = [];
      let g = 0;
      for (let t3 = 0; t3 < Ra; ++t3) {
        const e2 = t3 / p2, n2 = Math.exp(-e2 * e2 / 2);
        f.push(n2), 0 === t3 ? g += n2 : t3 < m && (g += 2 * n2);
      }
      for (let t3 = 0; t3 < f.length; t3++) f[t3] = f[t3] / g;
      h2.envMap.value = t2.texture, h2.samples.value = m, h2.weights.value = f, h2.latitudinal.value = "latitudinal" === s, a && (h2.poleAxis.value = a);
      const { _lodMax: v } = this;
      h2.dTheta.value = d2, h2.mipInt.value = v - n;
      const _ = this._sizeLods[i];
      ka(e, 3 * _ * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), o.setRenderTarget(e), o.render(c2, Ca);
    }
  };
  function za(t2, e, n) {
    const i = new Ei(t2, e, n);
    return i.texture.mapping = dt, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
  }
  function ka(t2, e, n, i, r) {
    t2.viewport.set(e, n, i, r), t2.scissor.set(e, n, i, r);
  }
  function Va() {
    return new Ys({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ga(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function Ha() {
    return new Ys({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ga(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function Ga() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function Wa(t2) {
    let e = /* @__PURE__ */ new WeakMap(), n = null;
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping, a = s === ht || s === ut, o = s === lt || s === ct;
        if (a || o) {
          let s2 = e.get(r);
          const l2 = void 0 !== s2 ? s2.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l2) return null === n && (n = new Ba(t2)), s2 = a ? n.fromEquirectangular(r, s2) : n.fromCubemap(r, s2), s2.texture.pmremVersion = r.pmremVersion, e.set(r, s2), s2.texture;
          if (void 0 !== s2) return s2.texture;
          {
            const l3 = r.image;
            return a && l3 && l3.height > 0 || o && l3 && (function(t3) {
              let e2 = 0;
              const n2 = 6;
              for (let i2 = 0; i2 < n2; i2++) void 0 !== t3[i2] && e2++;
              return e2 === n2;
            })(l3) ? (null === n && (n = new Ba(t2)), s2 = a ? n.fromEquirectangular(r) : n.fromCubemap(r), s2.texture.pmremVersion = r.pmremVersion, e.set(r, s2), r.addEventListener("dispose", i), s2.texture) : null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap(), null !== n && (n.dispose(), n = null);
    } };
  }
  function Xa(t2) {
    const e = {};
    function n(n2) {
      if (void 0 !== e[n2]) return e[n2];
      let i;
      switch (n2) {
        case "WEBGL_depth_texture":
          i = t2.getExtension("WEBGL_depth_texture") || t2.getExtension("MOZ_WEBGL_depth_texture") || t2.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = t2.getExtension("WEBGL_compressed_texture_s3tc") || t2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = t2.getExtension("WEBGL_compressed_texture_pvrtc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t2.getExtension(n2);
      }
      return e[n2] = i, i;
    }
    return { has: function(t3) {
      return null !== n(t3);
    }, init: function() {
      n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
    }, get: function(t3) {
      const e2 = n(t3);
      return null === e2 && ci("THREE.WebGLRenderer: " + t3 + " extension not supported."), e2;
    } };
  }
  function ja(t2, e, n, i) {
    const r = {}, s = /* @__PURE__ */ new WeakMap();
    function a(t3) {
      const o2 = t3.target;
      null !== o2.index && e.remove(o2.index);
      for (const t4 in o2.attributes) e.remove(o2.attributes[t4]);
      for (const t4 in o2.morphAttributes) {
        const n2 = o2.morphAttributes[t4];
        for (let t5 = 0, i2 = n2.length; t5 < i2; t5++) e.remove(n2[t5]);
      }
      o2.removeEventListener("dispose", a), delete r[o2.id];
      const l2 = s.get(o2);
      l2 && (e.remove(l2), s.delete(o2)), i.releaseStatesOfGeometry(o2), true === o2.isInstancedBufferGeometry && delete o2._maxInstanceCount, n.memory.geometries--;
    }
    function o(t3) {
      const n2 = [], i2 = t3.index, r2 = t3.attributes.position;
      let a2 = 0;
      if (null !== i2) {
        const t4 = i2.array;
        a2 = i2.version;
        for (let e2 = 0, i3 = t4.length; e2 < i3; e2 += 3) {
          const i4 = t4[e2 + 0], r3 = t4[e2 + 1], s2 = t4[e2 + 2];
          n2.push(i4, r3, r3, s2, s2, i4);
        }
      } else {
        if (void 0 === r2) return;
        {
          const t4 = r2.array;
          a2 = r2.version;
          for (let e2 = 0, i3 = t4.length / 3 - 1; e2 < i3; e2 += 3) {
            const t5 = e2 + 0, i4 = e2 + 1, r3 = e2 + 2;
            n2.push(t5, i4, i4, r3, r3, t5);
          }
        }
      }
      const o2 = new (ii(n2) ? xs : vs)(n2, 1);
      o2.version = a2;
      const l2 = s.get(t3);
      l2 && e.remove(l2), s.set(t3, o2);
    }
    return { get: function(t3, e2) {
      return true === r[e2.id] || (e2.addEventListener("dispose", a), r[e2.id] = true, n.memory.geometries++), e2;
    }, update: function(n2) {
      const i2 = n2.attributes;
      for (const n3 in i2) e.update(i2[n3], t2.ARRAY_BUFFER);
      const r2 = n2.morphAttributes;
      for (const n3 in r2) {
        const i3 = r2[n3];
        for (let n4 = 0, r3 = i3.length; n4 < r3; n4++) e.update(i3[n4], t2.ARRAY_BUFFER);
      }
    }, getWireframeAttribute: function(t3) {
      const e2 = s.get(t3);
      if (e2) {
        const n2 = t3.index;
        null !== n2 && e2.version < n2.version && o(t3);
      } else o(t3);
      return s.get(t3);
    } };
  }
  function qa(t2, e, n) {
    let i, r, s;
    function a(e2, a2, o) {
      0 !== o && (t2.drawElementsInstanced(i, a2, r, e2 * s, o), n.update(a2, i, o));
    }
    this.setMode = function(t3) {
      i = t3;
    }, this.setIndex = function(t3) {
      r = t3.type, s = t3.bytesPerElement;
    }, this.render = function(e2, a2) {
      t2.drawElements(i, a2, r, e2 * s), n.update(a2, i, 1);
    }, this.renderInstances = a, this.renderMultiDraw = function(t3, s2, a2) {
      if (0 === a2) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, s2, 0, r, t3, 0, a2);
      let o = 0;
      for (let t4 = 0; t4 < a2; t4++) o += s2[t4];
      n.update(o, i, 1);
    }, this.renderMultiDrawInstances = function(t3, o, l2, c2) {
      if (0 === l2) return;
      const h2 = e.get("WEBGL_multi_draw");
      if (null === h2) for (let e2 = 0; e2 < t3.length; e2++) a(t3[e2] / s, o[e2], c2[e2]);
      else {
        h2.multiDrawElementsInstancedWEBGL(i, o, 0, r, t3, 0, c2, 0, l2);
        let e2 = 0;
        for (let t4 = 0; t4 < l2; t4++) e2 += o[t4];
        for (let t4 = 0; t4 < c2.length; t4++) n.update(e2, i, c2[t4]);
      }
    };
  }
  function Ya(t2) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: true, reset: function() {
      e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
    }, update: function(n, i, r) {
      switch (e.calls++, i) {
        case t2.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t2.LINES:
          e.lines += r * (n / 2);
          break;
        case t2.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t2.LINE_LOOP:
          e.lines += r * n;
          break;
        case t2.POINTS:
          e.points += r * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    } };
  }
  function Za(t2, e, n) {
    const i = /* @__PURE__ */ new WeakMap(), r = new wi();
    return { update: function(s, a, o) {
      const l2 = s.morphTargetInfluences, c2 = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h2 = void 0 !== c2 ? c2.length : 0;
      let u2 = i.get(a);
      if (void 0 === u2 || u2.count !== h2) {
        let w = function() {
          S.dispose(), i.delete(a), a.removeEventListener("dispose", w);
        };
        void 0 !== u2 && u2.texture.dispose();
        const d2 = void 0 !== a.morphAttributes.position, p2 = void 0 !== a.morphAttributes.normal, m = void 0 !== a.morphAttributes.color, f = a.morphAttributes.position || [], g = a.morphAttributes.normal || [], v = a.morphAttributes.color || [];
        let _ = 0;
        true === d2 && (_ = 1), true === p2 && (_ = 2), true === m && (_ = 3);
        let x = a.attributes.position.count * _, y2 = 1;
        x > e.maxTextureSize && (y2 = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const M = new Float32Array(x * y2 * 4 * h2), S = new Ai(M, x, y2, h2);
        S.type = Lt, S.needsUpdate = true;
        const b = 4 * _;
        for (let T = 0; T < h2; T++) {
          const E = f[T], A = g[T], R = v[T], C3 = x * y2 * 4 * T;
          for (let P2 = 0; P2 < E.count; P2++) {
            const I = P2 * b;
            true === d2 && (r.fromBufferAttribute(E, P2), M[C3 + I + 0] = r.x, M[C3 + I + 1] = r.y, M[C3 + I + 2] = r.z, M[C3 + I + 3] = 0), true === p2 && (r.fromBufferAttribute(A, P2), M[C3 + I + 4] = r.x, M[C3 + I + 5] = r.y, M[C3 + I + 6] = r.z, M[C3 + I + 7] = 0), true === m && (r.fromBufferAttribute(R, P2), M[C3 + I + 8] = r.x, M[C3 + I + 9] = r.y, M[C3 + I + 10] = r.z, M[C3 + I + 11] = 4 === R.itemSize ? r.w : 1);
          }
        }
        u2 = { count: h2, texture: S, size: new ti(x, y2) }, i.set(a, u2), a.addEventListener("dispose", w);
      }
      if (true === s.isInstancedMesh && null !== s.morphTexture) o.getUniforms().setValue(t2, "morphTexture", s.morphTexture, n);
      else {
        let L = 0;
        for (let N = 0; N < l2.length; N++) L += l2[N];
        const U = a.morphTargetsRelative ? 1 : 1 - L;
        o.getUniforms().setValue(t2, "morphTargetBaseInfluence", U), o.getUniforms().setValue(t2, "morphTargetInfluences", l2);
      }
      o.getUniforms().setValue(t2, "morphTargetsTexture", u2.texture, n), o.getUniforms().setValue(t2, "morphTargetsTextureSize", u2.size);
    } };
  }
  function Ja(t2, e, n, i) {
    let r = /* @__PURE__ */ new WeakMap();
    function s(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", s), n.remove(e2.instanceMatrix), null !== e2.instanceColor && n.remove(e2.instanceColor);
    }
    return { update: function(a) {
      const o = i.render.frame, l2 = a.geometry, c2 = e.get(a, l2);
      if (r.get(c2) !== o && (e.update(c2), r.set(c2, o)), a.isInstancedMesh && (false === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s), r.get(a) !== o && (n.update(a.instanceMatrix, t2.ARRAY_BUFFER), null !== a.instanceColor && n.update(a.instanceColor, t2.ARRAY_BUFFER), r.set(a, o))), a.isSkinnedMesh) {
        const t3 = a.skeleton;
        r.get(t3) !== o && (t3.update(), r.set(t3, o));
      }
      return c2;
    }, dispose: function() {
      r = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ka = class extends bi {
    constructor(t2, e, n, i, r, s, a, o, l2, c2 = 1026) {
      if (c2 !== Gt && c2 !== Wt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c2 === Gt && (n = It), void 0 === n && c2 === Wt && (n = Ot), super(null, i, r, s, a, o, c2, n, l2), this.isDepthTexture = true, this.image = { width: t2, height: e }, this.magFilter = void 0 !== a ? a : gt, this.minFilter = void 0 !== o ? o : gt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.compareFunction && (e.compareFunction = this.compareFunction), e;
    }
  };
  var $a = new bi();
  var Qa = new Ka(1, 1);
  var to = new Ai();
  var eo = new Ci();
  var no = new na();
  var io = [];
  var ro = [];
  var so = new Float32Array(16);
  var ao = new Float32Array(9);
  var oo = new Float32Array(4);
  function lo(t2, e, n) {
    const i = t2[0];
    if (i <= 0 || i > 0) return t2;
    const r = e * n;
    let s = io[r];
    if (void 0 === s && (s = new Float32Array(r), io[r] = s), 0 !== e) {
      i.toArray(s, 0);
      for (let i2 = 1, r2 = 0; i2 !== e; ++i2) r2 += n, t2[i2].toArray(s, r2);
    }
    return s;
  }
  function co(t2, e) {
    if (t2.length !== e.length) return false;
    for (let n = 0, i = t2.length; n < i; n++) if (t2[n] !== e[n]) return false;
    return true;
  }
  function ho(t2, e) {
    for (let n = 0, i = e.length; n < i; n++) t2[n] = e[n];
  }
  function uo(t2, e) {
    let n = ro[e];
    void 0 === n && (n = new Int32Array(e), ro[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t2.allocateTextureUnit();
    return n;
  }
  function po(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1f(this.addr, e), n[0] = e);
  }
  function mo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (co(n, e)) return;
      t2.uniform2fv(this.addr, e), ho(n, e);
    }
  }
  function fo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t2.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else {
      if (co(n, e)) return;
      t2.uniform3fv(this.addr, e), ho(n, e);
    }
  }
  function go(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (co(n, e)) return;
      t2.uniform4fv(this.addr, e), ho(n, e);
    }
  }
  function vo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (co(n, e)) return;
      t2.uniformMatrix2fv(this.addr, false, e), ho(n, e);
    } else {
      if (co(n, i)) return;
      oo.set(i), t2.uniformMatrix2fv(this.addr, false, oo), ho(n, i);
    }
  }
  function _o(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (co(n, e)) return;
      t2.uniformMatrix3fv(this.addr, false, e), ho(n, e);
    } else {
      if (co(n, i)) return;
      ao.set(i), t2.uniformMatrix3fv(this.addr, false, ao), ho(n, i);
    }
  }
  function xo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (co(n, e)) return;
      t2.uniformMatrix4fv(this.addr, false, e), ho(n, e);
    } else {
      if (co(n, i)) return;
      so.set(i), t2.uniformMatrix4fv(this.addr, false, so), ho(n, i);
    }
  }
  function yo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1i(this.addr, e), n[0] = e);
  }
  function Mo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (co(n, e)) return;
      t2.uniform2iv(this.addr, e), ho(n, e);
    }
  }
  function So(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (co(n, e)) return;
      t2.uniform3iv(this.addr, e), ho(n, e);
    }
  }
  function bo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (co(n, e)) return;
      t2.uniform4iv(this.addr, e), ho(n, e);
    }
  }
  function wo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1ui(this.addr, e), n[0] = e);
  }
  function To(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (co(n, e)) return;
      t2.uniform2uiv(this.addr, e), ho(n, e);
    }
  }
  function Eo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (co(n, e)) return;
      t2.uniform3uiv(this.addr, e), ho(n, e);
    }
  }
  function Ao(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (co(n, e)) return;
      t2.uniform4uiv(this.addr, e), ho(n, e);
    }
  }
  function Ro(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    let s;
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), this.type === t2.SAMPLER_2D_SHADOW ? (Qa.compareFunction = wn, s = Qa) : s = $a, n.setTexture2D(e || s, r);
  }
  function Co(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || eo, r);
  }
  function Po(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || no, r);
  }
  function Io(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || to, r);
  }
  function Lo(t2, e) {
    t2.uniform1fv(this.addr, e);
  }
  function Uo(t2, e) {
    const n = lo(e, this.size, 2);
    t2.uniform2fv(this.addr, n);
  }
  function No(t2, e) {
    const n = lo(e, this.size, 3);
    t2.uniform3fv(this.addr, n);
  }
  function Do(t2, e) {
    const n = lo(e, this.size, 4);
    t2.uniform4fv(this.addr, n);
  }
  function Oo(t2, e) {
    const n = lo(e, this.size, 4);
    t2.uniformMatrix2fv(this.addr, false, n);
  }
  function Fo(t2, e) {
    const n = lo(e, this.size, 9);
    t2.uniformMatrix3fv(this.addr, false, n);
  }
  function Bo(t2, e) {
    const n = lo(e, this.size, 16);
    t2.uniformMatrix4fv(this.addr, false, n);
  }
  function zo(t2, e) {
    t2.uniform1iv(this.addr, e);
  }
  function ko(t2, e) {
    t2.uniform2iv(this.addr, e);
  }
  function Vo(t2, e) {
    t2.uniform3iv(this.addr, e);
  }
  function Ho(t2, e) {
    t2.uniform4iv(this.addr, e);
  }
  function Go(t2, e) {
    t2.uniform1uiv(this.addr, e);
  }
  function Wo(t2, e) {
    t2.uniform2uiv(this.addr, e);
  }
  function Xo(t2, e) {
    t2.uniform3uiv(this.addr, e);
  }
  function jo(t2, e) {
    t2.uniform4uiv(this.addr, e);
  }
  function qo(t2, e, n) {
    const i = this.cache, r = e.length, s = uo(n, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2D(e[t3] || $a, s[t3]);
  }
  function Yo(t2, e, n) {
    const i = this.cache, r = e.length, s = uo(n, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture3D(e[t3] || eo, s[t3]);
  }
  function Zo(t2, e, n) {
    const i = this.cache, r = e.length, s = uo(n, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTextureCube(e[t3] || no, s[t3]);
  }
  function Jo(t2, e, n) {
    const i = this.cache, r = e.length, s = uo(n, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2DArray(e[t3] || to, s[t3]);
  }
  var Ko = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return po;
          case 35664:
            return mo;
          case 35665:
            return fo;
          case 35666:
            return go;
          case 35674:
            return vo;
          case 35675:
            return _o;
          case 35676:
            return xo;
          case 5124:
          case 35670:
            return yo;
          case 35667:
          case 35671:
            return Mo;
          case 35668:
          case 35672:
            return So;
          case 35669:
          case 35673:
            return bo;
          case 5125:
            return wo;
          case 36294:
            return To;
          case 36295:
            return Eo;
          case 36296:
            return Ao;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Ro;
          case 35679:
          case 36299:
          case 36307:
            return Co;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Po;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Io;
        }
      })(e.type);
    }
  };
  var $o = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return Lo;
          case 35664:
            return Uo;
          case 35665:
            return No;
          case 35666:
            return Do;
          case 35674:
            return Oo;
          case 35675:
            return Fo;
          case 35676:
            return Bo;
          case 5124:
          case 35670:
            return zo;
          case 35667:
          case 35671:
            return ko;
          case 35668:
          case 35672:
            return Vo;
          case 35669:
          case 35673:
            return Ho;
          case 5125:
            return Go;
          case 36294:
            return Wo;
          case 36295:
            return Xo;
          case 36296:
            return jo;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return qo;
          case 35679:
          case 36299:
          case 36307:
            return Yo;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Zo;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Jo;
        }
      })(e.type);
    }
  };
  var Qo = class {
    constructor(t2) {
      this.id = t2, this.seq = [], this.map = {};
    }
    setValue(t2, e, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s2 = i[r];
        s2.setValue(t2, e[s2.id], n);
      }
    }
  };
  var tl = /(\w+)(\])?(\[|\.)?/g;
  function el(t2, e) {
    t2.seq.push(e), t2.map[e.id] = e;
  }
  function nl(t2, e, n) {
    const i = t2.name, r = i.length;
    for (tl.lastIndex = 0; ; ) {
      const s = tl.exec(i), a = tl.lastIndex;
      let o = s[1];
      const l2 = "]" === s[2], c2 = s[3];
      if (l2 && (o |= 0), void 0 === c2 || "[" === c2 && a + 2 === r) {
        el(n, void 0 === c2 ? new Ko(o, t2, e) : new $o(o, t2, e));
        break;
      }
      {
        let t3 = n.map[o];
        void 0 === t3 && (t3 = new Qo(o), el(n, t3)), n = t3;
      }
    }
  }
  var il = class {
    constructor(t2, e) {
      this.seq = [], this.map = {};
      const n = t2.getProgramParameter(e, t2.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n2 = t2.getActiveUniform(e, i);
        nl(n2, t2.getUniformLocation(e, n2.name), this);
      }
    }
    setValue(t2, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t2, n, i);
    }
    setOptional(t2, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t2, n, i);
    }
    static upload(t2, e, n, i) {
      for (let r = 0, s = e.length; r !== s; ++r) {
        const s2 = e[r], a = n[s2.id];
        false !== a.needsUpdate && s2.setValue(t2, a.value, i);
      }
    }
    static seqWithValue(t2, e) {
      const n = [];
      for (let i = 0, r = t2.length; i !== r; ++i) {
        const r2 = t2[i];
        r2.id in e && n.push(r2);
      }
      return n;
    }
  };
  function rl(t2, e, n) {
    const i = t2.createShader(e);
    return t2.shaderSource(i, n), t2.compileShader(i), i;
  }
  var sl = 37297;
  var al = 0;
  function ol(t2, e, n) {
    const i = t2.getShaderParameter(e, t2.COMPILE_STATUS), r = t2.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i2 = parseInt(s[1]);
      return n.toUpperCase() + "\n\n" + r + "\n\n" + (function(t3, e2) {
        const n2 = t3.split("\n"), i3 = [], r2 = Math.max(e2 - 6, 0), s2 = Math.min(e2 + 6, n2.length);
        for (let t4 = r2; t4 < s2; t4++) {
          const r3 = t4 + 1;
          i3.push(`${r3 === e2 ? ">" : " "} ${r3}: ${n2[t4]}`);
        }
        return i3.join("\n");
      })(t2.getShaderSource(e), i2);
    }
    return r;
  }
  function ll(t2, e) {
    const n = (function(t3) {
      const e2 = mi.getPrimaries(mi.workingColorSpace), n2 = mi.getPrimaries(t3);
      let i;
      switch (e2 === n2 ? i = "" : e2 === rn && n2 === nn ? i = "LinearDisplayP3ToLinearSRGB" : e2 === nn && n2 === rn && (i = "LinearSRGBToLinearDisplayP3"), t3) {
        case Ke:
        case Qe:
          return [i, "LinearTransferOETF"];
        case Je:
        case $e:
          return [i, "sRGBTransferOETF"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported color space:", t3), [i, "LinearTransferOETF"];
      }
    })(e);
    return `vec4 ${t2}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
  }
  function cl(t2, e) {
    let n;
    switch (e) {
      case $:
        n = "Linear";
        break;
      case Q:
        n = "Reinhard";
        break;
      case tt:
        n = "Cineon";
        break;
      case et:
        n = "ACESFilmic";
        break;
      case it:
        n = "AgX";
        break;
      case rt:
        n = "Neutral";
        break;
      case nt:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }
    return "vec3 " + t2 + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }
  var hl = new Li();
  function ul() {
    mi.getLuminanceCoefficients(hl);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${hl.x.toFixed(4)}, ${hl.y.toFixed(4)}, ${hl.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function dl(t2) {
    return "" !== t2;
  }
  function pl(t2, e) {
    const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return t2.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function ml(t2, e) {
    return t2.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  var fl = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function gl(t2) {
    return t2.replace(fl, _l);
  }
  var vl = /* @__PURE__ */ new Map();
  function _l(t2, e) {
    let n = ma[e];
    if (void 0 === n) {
      const t3 = vl.get(e);
      if (void 0 === t3) throw new Error("Can not resolve #include <" + e + ">");
      n = ma[t3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, t3);
    }
    return gl(n);
  }
  var xl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function yl(t2) {
    return t2.replace(xl, Ml);
  }
  function Ml(t2, e, n, i) {
    let r = "";
    for (let t3 = parseInt(e); t3 < parseInt(n); t3++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t3);
    return r;
  }
  function Sl(t2) {
    let e = `precision ${t2.precision} float;
	precision ${t2.precision} int;
	precision ${t2.precision} sampler2D;
	precision ${t2.precision} samplerCube;
	precision ${t2.precision} sampler3D;
	precision ${t2.precision} sampler2DArray;
	precision ${t2.precision} sampler2DShadow;
	precision ${t2.precision} samplerCubeShadow;
	precision ${t2.precision} sampler2DArrayShadow;
	precision ${t2.precision} isampler2D;
	precision ${t2.precision} isampler3D;
	precision ${t2.precision} isamplerCube;
	precision ${t2.precision} isampler2DArray;
	precision ${t2.precision} usampler2D;
	precision ${t2.precision} usampler3D;
	precision ${t2.precision} usamplerCube;
	precision ${t2.precision} usampler2DArray;
	`;
    return "highp" === t2.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t2.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t2.precision && (e += "\n#define LOW_PRECISION"), e;
  }
  function bl(t2, e, n, i) {
    const r = t2.getContext(), s = n.defines;
    let a = n.vertexShader, o = n.fragmentShader;
    const u2 = (function(t3) {
      let e2 = "SHADOWMAP_TYPE_BASIC";
      return t3.shadowMapType === l ? e2 = "SHADOWMAP_TYPE_PCF" : t3.shadowMapType === c ? e2 = "SHADOWMAP_TYPE_PCF_SOFT" : t3.shadowMapType === h && (e2 = "SHADOWMAP_TYPE_VSM"), e2;
    })(n), d2 = (function(t3) {
      let e2 = "ENVMAP_TYPE_CUBE";
      if (t3.envMap) switch (t3.envMapMode) {
        case lt:
        case ct:
          e2 = "ENVMAP_TYPE_CUBE";
          break;
        case dt:
          e2 = "ENVMAP_TYPE_CUBE_UV";
      }
      return e2;
    })(n), p2 = (function(t3) {
      let e2 = "ENVMAP_MODE_REFLECTION";
      t3.envMap && t3.envMapMode === ct && (e2 = "ENVMAP_MODE_REFRACTION");
      return e2;
    })(n), m = (function(t3) {
      let e2 = "ENVMAP_BLENDING_NONE";
      if (t3.envMap) switch (t3.combine) {
        case Y:
          e2 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case Z:
          e2 = "ENVMAP_BLENDING_MIX";
          break;
        case J:
          e2 = "ENVMAP_BLENDING_ADD";
      }
      return e2;
    })(n), f = (function(t3) {
      const e2 = t3.envMapCubeUVHeight;
      if (null === e2) return null;
      const n2 = Math.log2(e2) - 2, i2 = 1 / e2;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n2), 112)), texelHeight: i2, maxMip: n2 };
    })(n), g = (function(t3) {
      return [t3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", t3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(dl).join("\n");
    })(n), v = (function(t3) {
      const e2 = [];
      for (const n2 in t3) {
        const i2 = t3[n2];
        false !== i2 && e2.push("#define " + n2 + " " + i2);
      }
      return e2.join("\n");
    })(s), _ = r.createProgram();
    let x, y2, M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (x = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v].filter(dl).join("\n"), x.length > 0 && (x += "\n"), y2 = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v].filter(dl).join("\n"), y2.length > 0 && (y2 += "\n")) : (x = [Sl(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p2 : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && false === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u2 : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(dl).join("\n"), y2 = [Sl(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d2 : "", n.envMap ? "#define " + p2 : "", n.envMap ? "#define " + m : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u2 : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== K ? "#define TONE_MAPPING" : "", n.toneMapping !== K ? ma.tonemapping_pars_fragment : "", n.toneMapping !== K ? cl("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", ma.colorspace_pars_fragment, ll("linearToOutputTexel", n.outputColorSpace), ul(), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(dl).join("\n")), a = gl(a), a = pl(a, n), a = ml(a, n), o = gl(o), o = pl(o, n), o = ml(o, n), a = yl(a), o = yl(o), true !== n.isRawShaderMaterial && (M = "#version 300 es\n", x = [g, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, y2 = ["#define varying in", n.glslVersion === zn ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === zn ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y2);
    const S = M + x + a, b = M + y2 + o, w = rl(r, r.VERTEX_SHADER, S), T = rl(r, r.FRAGMENT_SHADER, b);
    function E(e2) {
      if (t2.debug.checkShaderErrors) {
        const n2 = r.getProgramInfoLog(_).trim(), i2 = r.getShaderInfoLog(w).trim(), s2 = r.getShaderInfoLog(T).trim();
        let a2 = true, o2 = true;
        if (false === r.getProgramParameter(_, r.LINK_STATUS)) if (a2 = false, "function" == typeof t2.debug.onShaderError) t2.debug.onShaderError(r, _, w, T);
        else {
          const t3 = ol(r, w, "vertex"), i3 = ol(r, T, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(_, r.VALIDATE_STATUS) + "\n\nMaterial Name: " + e2.name + "\nMaterial Type: " + e2.type + "\n\nProgram Info Log: " + n2 + "\n" + t3 + "\n" + i3);
        }
        else "" !== n2 ? console.warn("THREE.WebGLProgram: Program Info Log:", n2) : "" !== i2 && "" !== s2 || (o2 = false);
        o2 && (e2.diagnostics = { runnable: a2, programLog: n2, vertexShader: { log: i2, prefix: x }, fragmentShader: { log: s2, prefix: y2 } });
      }
      r.deleteShader(w), r.deleteShader(T), A = new il(r, _), R = (function(t3, e3) {
        const n2 = {}, i2 = t3.getProgramParameter(e3, t3.ACTIVE_ATTRIBUTES);
        for (let r2 = 0; r2 < i2; r2++) {
          const i3 = t3.getActiveAttrib(e3, r2), s2 = i3.name;
          let a2 = 1;
          i3.type === t3.FLOAT_MAT2 && (a2 = 2), i3.type === t3.FLOAT_MAT3 && (a2 = 3), i3.type === t3.FLOAT_MAT4 && (a2 = 4), n2[s2] = { type: i3.type, location: t3.getAttribLocation(e3, s2), locationSize: a2 };
        }
        return n2;
      })(r, _);
    }
    let A, R;
    r.attachShader(_, w), r.attachShader(_, T), void 0 !== n.index0AttributeName ? r.bindAttribLocation(_, 0, n.index0AttributeName) : true === n.morphTargets && r.bindAttribLocation(_, 0, "position"), r.linkProgram(_), this.getUniforms = function() {
      return void 0 === A && E(this), A;
    }, this.getAttributes = function() {
      return void 0 === R && E(this), R;
    };
    let C3 = false === n.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === C3 && (C3 = r.getProgramParameter(_, sl)), C3;
    }, this.destroy = function() {
      i.releaseStatesOfProgram(this), r.deleteProgram(_), this.program = void 0;
    }, this.type = n.shaderType, this.name = n.shaderName, this.id = al++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = w, this.fragmentShader = T, this;
  }
  var wl = 0;
  var Tl = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(t2) {
      const e = t2.vertexShader, n = t2.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t2);
      return false === s.has(i) && (s.add(i), i.usedTimes++), false === s.has(r) && (s.add(r), r.usedTimes++), this;
    }
    remove(t2) {
      const e = this.materialCache.get(t2);
      for (const t3 of e) t3.usedTimes--, 0 === t3.usedTimes && this.shaderCache.delete(t3.code);
      return this.materialCache.delete(t2), this;
    }
    getVertexShaderID(t2) {
      return this._getShaderStage(t2.vertexShader).id;
    }
    getFragmentShaderID(t2) {
      return this._getShaderStage(t2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t2) {
      const e = this.materialCache;
      let n = e.get(t2);
      return void 0 === n && (n = /* @__PURE__ */ new Set(), e.set(t2, n)), n;
    }
    _getShaderStage(t2) {
      const e = this.shaderCache;
      let n = e.get(t2);
      return void 0 === n && (n = new El(t2), e.set(t2, n)), n;
    }
  };
  var El = class {
    constructor(t2) {
      this.id = wl++, this.code = t2, this.usedTimes = 0;
    }
  };
  function Al(t2, e, n, i, r, s, a) {
    const o = new xr(), l2 = new Tl(), c2 = /* @__PURE__ */ new Set(), h2 = [], u2 = r.logarithmicDepthBuffer, p2 = r.reverseDepthBuffer, m = r.vertexTextures;
    let f = r.precision;
    const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function v(t3) {
      return c2.add(t3), 0 === t3 ? "uv" : `uv${t3}`;
    }
    return { getParameters: function(s2, o2, h3, _, x) {
      const y2 = _.fog, M = x.geometry, S = s2.isMeshStandardMaterial ? _.environment : null, b = (s2.isMeshStandardMaterial ? n : e).get(s2.envMap || S), w = b && b.mapping === dt ? b.image.height : null, T = g[s2.type];
      null !== s2.precision && (f = r.getMaxPrecision(s2.precision), f !== s2.precision && console.warn("THREE.WebGLProgram.getParameters:", s2.precision, "not supported, using", f, "instead."));
      const E = M.morphAttributes.position || M.morphAttributes.normal || M.morphAttributes.color, A = void 0 !== E ? E.length : 0;
      let R, C3, P2, I, L = 0;
      if (void 0 !== M.morphAttributes.position && (L = 1), void 0 !== M.morphAttributes.normal && (L = 2), void 0 !== M.morphAttributes.color && (L = 3), T) {
        const t3 = ga[T];
        R = t3.vertexShader, C3 = t3.fragmentShader;
      } else R = s2.vertexShader, C3 = s2.fragmentShader, l2.update(s2), P2 = l2.getVertexShaderID(s2), I = l2.getFragmentShaderID(s2);
      const U = t2.getRenderTarget(), N = true === x.isInstancedMesh, D = true === x.isBatchedMesh, O = !!s2.map, F = !!s2.matcap, B = !!b, z = !!s2.aoMap, k = !!s2.lightMap, V = !!s2.bumpMap, H = !!s2.normalMap, G = !!s2.displacementMap, W = !!s2.emissiveMap, X = !!s2.metalnessMap, j = !!s2.roughnessMap, q = s2.anisotropy > 0, Y2 = s2.clearcoat > 0, Z2 = s2.dispersion > 0, J2 = s2.iridescence > 0, $2 = s2.sheen > 0, Q2 = s2.transmission > 0, tt2 = q && !!s2.anisotropyMap, et2 = Y2 && !!s2.clearcoatMap, nt2 = Y2 && !!s2.clearcoatNormalMap, it2 = Y2 && !!s2.clearcoatRoughnessMap, rt2 = J2 && !!s2.iridescenceMap, st = J2 && !!s2.iridescenceThicknessMap, at = $2 && !!s2.sheenColorMap, ot2 = $2 && !!s2.sheenRoughnessMap, lt2 = !!s2.specularMap, ct2 = !!s2.specularColorMap, ht2 = !!s2.specularIntensityMap, ut2 = Q2 && !!s2.transmissionMap, pt2 = Q2 && !!s2.thicknessMap, mt2 = !!s2.gradientMap, ft2 = !!s2.alphaMap, gt2 = s2.alphaTest > 0, vt2 = !!s2.alphaHash, _t = !!s2.extensions;
      let xt2 = K;
      s2.toneMapped && (null !== U && true !== U.isXRRenderTarget || (xt2 = t2.toneMapping));
      const yt = { shaderID: T, shaderType: s2.type, shaderName: s2.name, vertexShader: R, fragmentShader: C3, defines: s2.defines, customVertexShaderID: P2, customFragmentShaderID: I, isRawShaderMaterial: true === s2.isRawShaderMaterial, glslVersion: s2.glslVersion, precision: f, batching: D, batchingColor: D && null !== x._colorsTexture, instancing: N, instancingColor: N && null !== x.instanceColor, instancingMorph: N && null !== x.morphTexture, supportsVertexTextures: m, outputColorSpace: null === U ? t2.outputColorSpace : true === U.isXRRenderTarget ? U.texture.colorSpace : Ke, alphaToCoverage: !!s2.alphaToCoverage, map: O, matcap: F, envMap: B, envMapMode: B && b.mapping, envMapCubeUVHeight: w, aoMap: z, lightMap: k, bumpMap: V, normalMap: H, displacementMap: m && G, emissiveMap: W, normalMapObjectSpace: H && 1 === s2.normalMapType, normalMapTangentSpace: H && 0 === s2.normalMapType, metalnessMap: X, roughnessMap: j, anisotropy: q, anisotropyMap: tt2, clearcoat: Y2, clearcoatMap: et2, clearcoatNormalMap: nt2, clearcoatRoughnessMap: it2, dispersion: Z2, iridescence: J2, iridescenceMap: rt2, iridescenceThicknessMap: st, sheen: $2, sheenColorMap: at, sheenRoughnessMap: ot2, specularMap: lt2, specularColorMap: ct2, specularIntensityMap: ht2, transmission: Q2, transmissionMap: ut2, thicknessMap: pt2, gradientMap: mt2, opaque: false === s2.transparent && 1 === s2.blending && false === s2.alphaToCoverage, alphaMap: ft2, alphaTest: gt2, alphaHash: vt2, combine: s2.combine, mapUv: O && v(s2.map.channel), aoMapUv: z && v(s2.aoMap.channel), lightMapUv: k && v(s2.lightMap.channel), bumpMapUv: V && v(s2.bumpMap.channel), normalMapUv: H && v(s2.normalMap.channel), displacementMapUv: G && v(s2.displacementMap.channel), emissiveMapUv: W && v(s2.emissiveMap.channel), metalnessMapUv: X && v(s2.metalnessMap.channel), roughnessMapUv: j && v(s2.roughnessMap.channel), anisotropyMapUv: tt2 && v(s2.anisotropyMap.channel), clearcoatMapUv: et2 && v(s2.clearcoatMap.channel), clearcoatNormalMapUv: nt2 && v(s2.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: it2 && v(s2.clearcoatRoughnessMap.channel), iridescenceMapUv: rt2 && v(s2.iridescenceMap.channel), iridescenceThicknessMapUv: st && v(s2.iridescenceThicknessMap.channel), sheenColorMapUv: at && v(s2.sheenColorMap.channel), sheenRoughnessMapUv: ot2 && v(s2.sheenRoughnessMap.channel), specularMapUv: lt2 && v(s2.specularMap.channel), specularColorMapUv: ct2 && v(s2.specularColorMap.channel), specularIntensityMapUv: ht2 && v(s2.specularIntensityMap.channel), transmissionMapUv: ut2 && v(s2.transmissionMap.channel), thicknessMapUv: pt2 && v(s2.thicknessMap.channel), alphaMapUv: ft2 && v(s2.alphaMap.channel), vertexTangents: !!M.attributes.tangent && (H || q), vertexColors: s2.vertexColors, vertexAlphas: true === s2.vertexColors && !!M.attributes.color && 4 === M.attributes.color.itemSize, pointsUvs: true === x.isPoints && !!M.attributes.uv && (O || ft2), fog: !!y2, useFog: true === s2.fog, fogExp2: !!y2 && y2.isFogExp2, flatShading: true === s2.flatShading, sizeAttenuation: true === s2.sizeAttenuation, logarithmicDepthBuffer: u2, reverseDepthBuffer: p2, skinning: true === x.isSkinnedMesh, morphTargets: void 0 !== M.morphAttributes.position, morphNormals: void 0 !== M.morphAttributes.normal, morphColors: void 0 !== M.morphAttributes.color, morphTargetsCount: A, morphTextureStride: L, numDirLights: o2.directional.length, numPointLights: o2.point.length, numSpotLights: o2.spot.length, numSpotLightMaps: o2.spotLightMap.length, numRectAreaLights: o2.rectArea.length, numHemiLights: o2.hemi.length, numDirLightShadows: o2.directionalShadowMap.length, numPointLightShadows: o2.pointShadowMap.length, numSpotLightShadows: o2.spotShadowMap.length, numSpotLightShadowsWithMaps: o2.numSpotLightShadowsWithMaps, numLightProbes: o2.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s2.dithering, shadowMapEnabled: t2.shadowMap.enabled && h3.length > 0, shadowMapType: t2.shadowMap.type, toneMapping: xt2, decodeVideoTexture: O && true === s2.map.isVideoTexture && mi.getTransfer(s2.map.colorSpace) === en, premultipliedAlpha: s2.premultipliedAlpha, doubleSided: 2 === s2.side, flipSided: s2.side === d, useDepthPacking: s2.depthPacking >= 0, depthPacking: s2.depthPacking || 0, index0AttributeName: s2.index0AttributeName, extensionClipCullDistance: _t && true === s2.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (_t && true === s2.extensions.multiDraw || D) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: s2.customProgramCacheKey() };
      return yt.vertexUv1s = c2.has(1), yt.vertexUv2s = c2.has(2), yt.vertexUv3s = c2.has(3), c2.clear(), yt;
    }, getProgramCacheKey: function(e2) {
      const n2 = [];
      if (e2.shaderID ? n2.push(e2.shaderID) : (n2.push(e2.customVertexShaderID), n2.push(e2.customFragmentShaderID)), void 0 !== e2.defines) for (const t3 in e2.defines) n2.push(t3), n2.push(e2.defines[t3]);
      return false === e2.isRawShaderMaterial && (!(function(t3, e3) {
        t3.push(e3.precision), t3.push(e3.outputColorSpace), t3.push(e3.envMapMode), t3.push(e3.envMapCubeUVHeight), t3.push(e3.mapUv), t3.push(e3.alphaMapUv), t3.push(e3.lightMapUv), t3.push(e3.aoMapUv), t3.push(e3.bumpMapUv), t3.push(e3.normalMapUv), t3.push(e3.displacementMapUv), t3.push(e3.emissiveMapUv), t3.push(e3.metalnessMapUv), t3.push(e3.roughnessMapUv), t3.push(e3.anisotropyMapUv), t3.push(e3.clearcoatMapUv), t3.push(e3.clearcoatNormalMapUv), t3.push(e3.clearcoatRoughnessMapUv), t3.push(e3.iridescenceMapUv), t3.push(e3.iridescenceThicknessMapUv), t3.push(e3.sheenColorMapUv), t3.push(e3.sheenRoughnessMapUv), t3.push(e3.specularMapUv), t3.push(e3.specularColorMapUv), t3.push(e3.specularIntensityMapUv), t3.push(e3.transmissionMapUv), t3.push(e3.thicknessMapUv), t3.push(e3.combine), t3.push(e3.fogExp2), t3.push(e3.sizeAttenuation), t3.push(e3.morphTargetsCount), t3.push(e3.morphAttributeCount), t3.push(e3.numDirLights), t3.push(e3.numPointLights), t3.push(e3.numSpotLights), t3.push(e3.numSpotLightMaps), t3.push(e3.numHemiLights), t3.push(e3.numRectAreaLights), t3.push(e3.numDirLightShadows), t3.push(e3.numPointLightShadows), t3.push(e3.numSpotLightShadows), t3.push(e3.numSpotLightShadowsWithMaps), t3.push(e3.numLightProbes), t3.push(e3.shadowMapType), t3.push(e3.toneMapping), t3.push(e3.numClippingPlanes), t3.push(e3.numClipIntersection), t3.push(e3.depthPacking);
      })(n2, e2), (function(t3, e3) {
        o.disableAll(), e3.supportsVertexTextures && o.enable(0);
        e3.instancing && o.enable(1);
        e3.instancingColor && o.enable(2);
        e3.instancingMorph && o.enable(3);
        e3.matcap && o.enable(4);
        e3.envMap && o.enable(5);
        e3.normalMapObjectSpace && o.enable(6);
        e3.normalMapTangentSpace && o.enable(7);
        e3.clearcoat && o.enable(8);
        e3.iridescence && o.enable(9);
        e3.alphaTest && o.enable(10);
        e3.vertexColors && o.enable(11);
        e3.vertexAlphas && o.enable(12);
        e3.vertexUv1s && o.enable(13);
        e3.vertexUv2s && o.enable(14);
        e3.vertexUv3s && o.enable(15);
        e3.vertexTangents && o.enable(16);
        e3.anisotropy && o.enable(17);
        e3.alphaHash && o.enable(18);
        e3.batching && o.enable(19);
        e3.dispersion && o.enable(20);
        e3.batchingColor && o.enable(21);
        t3.push(o.mask), o.disableAll(), e3.fog && o.enable(0);
        e3.useFog && o.enable(1);
        e3.flatShading && o.enable(2);
        e3.logarithmicDepthBuffer && o.enable(3);
        e3.reverseDepthBuffer && o.enable(4);
        e3.skinning && o.enable(5);
        e3.morphTargets && o.enable(6);
        e3.morphNormals && o.enable(7);
        e3.morphColors && o.enable(8);
        e3.premultipliedAlpha && o.enable(9);
        e3.shadowMapEnabled && o.enable(10);
        e3.doubleSided && o.enable(11);
        e3.flipSided && o.enable(12);
        e3.useDepthPacking && o.enable(13);
        e3.dithering && o.enable(14);
        e3.transmission && o.enable(15);
        e3.sheen && o.enable(16);
        e3.opaque && o.enable(17);
        e3.pointsUvs && o.enable(18);
        e3.decodeVideoTexture && o.enable(19);
        e3.alphaToCoverage && o.enable(20);
        t3.push(o.mask);
      })(n2, e2), n2.push(t2.outputColorSpace)), n2.push(e2.customProgramCacheKey), n2.join();
    }, getUniforms: function(t3) {
      const e2 = g[t3.type];
      let n2;
      if (e2) {
        const t4 = ga[e2];
        n2 = qs.clone(t4.uniforms);
      } else n2 = t3.uniforms;
      return n2;
    }, acquireProgram: function(e2, n2) {
      let i2;
      for (let t3 = 0, e3 = h2.length; t3 < e3; t3++) {
        const e4 = h2[t3];
        if (e4.cacheKey === n2) {
          i2 = e4, ++i2.usedTimes;
          break;
        }
      }
      return void 0 === i2 && (i2 = new bl(t2, n2, e2, s), h2.push(i2)), i2;
    }, releaseProgram: function(t3) {
      if (0 == --t3.usedTimes) {
        const e2 = h2.indexOf(t3);
        h2[e2] = h2[h2.length - 1], h2.pop(), t3.destroy();
      }
    }, releaseShaderCache: function(t3) {
      l2.remove(t3);
    }, programs: h2, dispose: function() {
      l2.dispose();
    } };
  }
  function Rl() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { has: function(e) {
      return t2.has(e);
    }, get: function(e) {
      let n = t2.get(e);
      return void 0 === n && (n = {}, t2.set(e, n)), n;
    }, remove: function(e) {
      t2.delete(e);
    }, update: function(e, n, i) {
      t2.get(e)[n] = i;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Cl(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.material.id !== e.material.id ? t2.material.id - e.material.id : t2.z !== e.z ? t2.z - e.z : t2.id - e.id;
  }
  function Pl(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.z !== e.z ? e.z - t2.z : t2.id - e.id;
  }
  function Il() {
    const t2 = [];
    let e = 0;
    const n = [], i = [], r = [];
    function s(n2, i2, r2, s2, a, o) {
      let l2 = t2[e];
      return void 0 === l2 ? (l2 = { id: n2.id, object: n2, geometry: i2, material: r2, groupOrder: s2, renderOrder: n2.renderOrder, z: a, group: o }, t2[e] = l2) : (l2.id = n2.id, l2.object = n2, l2.geometry = i2, l2.material = r2, l2.groupOrder = s2, l2.renderOrder = n2.renderOrder, l2.z = a, l2.group = o), e++, l2;
    }
    return { opaque: n, transmissive: i, transparent: r, init: function() {
      e = 0, n.length = 0, i.length = 0, r.length = 0;
    }, push: function(t3, e2, a, o, l2, c2) {
      const h2 = s(t3, e2, a, o, l2, c2);
      a.transmission > 0 ? i.push(h2) : true === a.transparent ? r.push(h2) : n.push(h2);
    }, unshift: function(t3, e2, a, o, l2, c2) {
      const h2 = s(t3, e2, a, o, l2, c2);
      a.transmission > 0 ? i.unshift(h2) : true === a.transparent ? r.unshift(h2) : n.unshift(h2);
    }, finish: function() {
      for (let n2 = e, i2 = t2.length; n2 < i2; n2++) {
        const e2 = t2[n2];
        if (null === e2.id) break;
        e2.id = null, e2.object = null, e2.geometry = null, e2.material = null, e2.group = null;
      }
    }, sort: function(t3, e2) {
      n.length > 1 && n.sort(t3 || Cl), i.length > 1 && i.sort(e2 || Pl), r.length > 1 && r.sort(e2 || Pl);
    } };
  }
  function Ll() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e, n) {
      const i = t2.get(e);
      let r;
      return void 0 === i ? (r = new Il(), t2.set(e, [r])) : n >= i.length ? (r = new Il(), i.push(r)) : r = i[n], r;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Ul() {
    const t2 = {};
    return { get: function(e) {
      if (void 0 !== t2[e.id]) return t2[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = { direction: new Li(), color: new ts() };
          break;
        case "SpotLight":
          n = { position: new Li(), direction: new Li(), color: new ts(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          n = { position: new Li(), color: new ts(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new Li(), skyColor: new ts(), groundColor: new ts() };
          break;
        case "RectAreaLight":
          n = { color: new ts(), position: new Li(), halfWidth: new Li(), halfHeight: new Li() };
      }
      return t2[e.id] = n, n;
    } };
  }
  var Nl = 0;
  function Dl(t2, e) {
    return (e.castShadow ? 2 : 0) - (t2.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t2.map ? 1 : 0);
  }
  function Ol(t2) {
    const e = new Ul(), n = /* @__PURE__ */ (function() {
      const t3 = {};
      return { get: function(e2) {
        if (void 0 !== t3[e2.id]) return t3[e2.id];
        let n2;
        switch (e2.type) {
          case "DirectionalLight":
          case "SpotLight":
            n2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ti() };
            break;
          case "PointLight":
            n2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ti(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return t3[e2.id] = n2, n2;
      } };
    })(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let t3 = 0; t3 < 9; t3++) i.probe.push(new Li());
    const r = new Li(), s = new lr(), a = new lr();
    return { setup: function(r2) {
      let s2 = 0, a2 = 0, o = 0;
      for (let t3 = 0; t3 < 9; t3++) i.probe[t3].set(0, 0, 0);
      let l2 = 0, c2 = 0, h2 = 0, u2 = 0, d2 = 0, p2 = 0, m = 0, f = 0, g = 0, v = 0, _ = 0;
      r2.sort(Dl);
      for (let t3 = 0, x2 = r2.length; t3 < x2; t3++) {
        const x3 = r2[t3], y2 = x3.color, M = x3.intensity, S = x3.distance, b = x3.shadow && x3.shadow.map ? x3.shadow.map.texture : null;
        if (x3.isAmbientLight) s2 += y2.r * M, a2 += y2.g * M, o += y2.b * M;
        else if (x3.isLightProbe) {
          for (let t4 = 0; t4 < 9; t4++) i.probe[t4].addScaledVector(x3.sh.coefficients[t4], M);
          _++;
        } else if (x3.isDirectionalLight) {
          const t4 = e.get(x3);
          if (t4.color.copy(x3.color).multiplyScalar(x3.intensity), x3.castShadow) {
            const t5 = x3.shadow, e2 = n.get(x3);
            e2.shadowIntensity = t5.intensity, e2.shadowBias = t5.bias, e2.shadowNormalBias = t5.normalBias, e2.shadowRadius = t5.radius, e2.shadowMapSize = t5.mapSize, i.directionalShadow[l2] = e2, i.directionalShadowMap[l2] = b, i.directionalShadowMatrix[l2] = x3.shadow.matrix, p2++;
          }
          i.directional[l2] = t4, l2++;
        } else if (x3.isSpotLight) {
          const t4 = e.get(x3);
          t4.position.setFromMatrixPosition(x3.matrixWorld), t4.color.copy(y2).multiplyScalar(M), t4.distance = S, t4.coneCos = Math.cos(x3.angle), t4.penumbraCos = Math.cos(x3.angle * (1 - x3.penumbra)), t4.decay = x3.decay, i.spot[h2] = t4;
          const r3 = x3.shadow;
          if (x3.map && (i.spotLightMap[g] = x3.map, g++, r3.updateMatrices(x3), x3.castShadow && v++), i.spotLightMatrix[h2] = r3.matrix, x3.castShadow) {
            const t5 = n.get(x3);
            t5.shadowIntensity = r3.intensity, t5.shadowBias = r3.bias, t5.shadowNormalBias = r3.normalBias, t5.shadowRadius = r3.radius, t5.shadowMapSize = r3.mapSize, i.spotShadow[h2] = t5, i.spotShadowMap[h2] = b, f++;
          }
          h2++;
        } else if (x3.isRectAreaLight) {
          const t4 = e.get(x3);
          t4.color.copy(y2).multiplyScalar(M), t4.halfWidth.set(0.5 * x3.width, 0, 0), t4.halfHeight.set(0, 0.5 * x3.height, 0), i.rectArea[u2] = t4, u2++;
        } else if (x3.isPointLight) {
          const t4 = e.get(x3);
          if (t4.color.copy(x3.color).multiplyScalar(x3.intensity), t4.distance = x3.distance, t4.decay = x3.decay, x3.castShadow) {
            const t5 = x3.shadow, e2 = n.get(x3);
            e2.shadowIntensity = t5.intensity, e2.shadowBias = t5.bias, e2.shadowNormalBias = t5.normalBias, e2.shadowRadius = t5.radius, e2.shadowMapSize = t5.mapSize, e2.shadowCameraNear = t5.camera.near, e2.shadowCameraFar = t5.camera.far, i.pointShadow[c2] = e2, i.pointShadowMap[c2] = b, i.pointShadowMatrix[c2] = x3.shadow.matrix, m++;
          }
          i.point[c2] = t4, c2++;
        } else if (x3.isHemisphereLight) {
          const t4 = e.get(x3);
          t4.skyColor.copy(x3.color).multiplyScalar(M), t4.groundColor.copy(x3.groundColor).multiplyScalar(M), i.hemi[d2] = t4, d2++;
        }
      }
      u2 > 0 && (true === t2.has("OES_texture_float_linear") ? (i.rectAreaLTC1 = fa.LTC_FLOAT_1, i.rectAreaLTC2 = fa.LTC_FLOAT_2) : (i.rectAreaLTC1 = fa.LTC_HALF_1, i.rectAreaLTC2 = fa.LTC_HALF_2)), i.ambient[0] = s2, i.ambient[1] = a2, i.ambient[2] = o;
      const x = i.hash;
      x.directionalLength === l2 && x.pointLength === c2 && x.spotLength === h2 && x.rectAreaLength === u2 && x.hemiLength === d2 && x.numDirectionalShadows === p2 && x.numPointShadows === m && x.numSpotShadows === f && x.numSpotMaps === g && x.numLightProbes === _ || (i.directional.length = l2, i.spot.length = h2, i.rectArea.length = u2, i.point.length = c2, i.hemi.length = d2, i.directionalShadow.length = p2, i.directionalShadowMap.length = p2, i.pointShadow.length = m, i.pointShadowMap.length = m, i.spotShadow.length = f, i.spotShadowMap.length = f, i.directionalShadowMatrix.length = p2, i.pointShadowMatrix.length = m, i.spotLightMatrix.length = f + g - v, i.spotLightMap.length = g, i.numSpotLightShadowsWithMaps = v, i.numLightProbes = _, x.directionalLength = l2, x.pointLength = c2, x.spotLength = h2, x.rectAreaLength = u2, x.hemiLength = d2, x.numDirectionalShadows = p2, x.numPointShadows = m, x.numSpotShadows = f, x.numSpotMaps = g, x.numLightProbes = _, i.version = Nl++);
    }, setupView: function(t3, e2) {
      let n2 = 0, o = 0, l2 = 0, c2 = 0, h2 = 0;
      const u2 = e2.matrixWorldInverse;
      for (let e3 = 0, d2 = t3.length; e3 < d2; e3++) {
        const d3 = t3[e3];
        if (d3.isDirectionalLight) {
          const t4 = i.directional[n2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), r.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(r), t4.direction.transformDirection(u2), n2++;
        } else if (d3.isSpotLight) {
          const t4 = i.spot[l2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), t4.direction.setFromMatrixPosition(d3.matrixWorld), r.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(r), t4.direction.transformDirection(u2), l2++;
        } else if (d3.isRectAreaLight) {
          const t4 = i.rectArea[c2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), a.identity(), s.copy(d3.matrixWorld), s.premultiply(u2), a.extractRotation(s), t4.halfWidth.set(0.5 * d3.width, 0, 0), t4.halfHeight.set(0, 0.5 * d3.height, 0), t4.halfWidth.applyMatrix4(a), t4.halfHeight.applyMatrix4(a), c2++;
        } else if (d3.isPointLight) {
          const t4 = i.point[o];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), o++;
        } else if (d3.isHemisphereLight) {
          const t4 = i.hemi[h2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), t4.direction.transformDirection(u2), h2++;
        }
      }
    }, state: i };
  }
  function Fl(t2) {
    const e = new Ol(t2), n = [], i = [];
    const r = { lightsArray: n, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
    return { init: function(t3) {
      r.camera = t3, n.length = 0, i.length = 0;
    }, state: r, setupLights: function() {
      e.setup(n);
    }, setupLightsView: function(t3) {
      e.setupView(n, t3);
    }, pushLight: function(t3) {
      n.push(t3);
    }, pushShadow: function(t3) {
      i.push(t3);
    } };
  }
  function Bl(t2) {
    let e = /* @__PURE__ */ new WeakMap();
    return { get: function(n, i = 0) {
      const r = e.get(n);
      let s;
      return void 0 === r ? (s = new Fl(t2), e.set(n, [s])) : i >= r.length ? (s = new Fl(t2), r.push(s)) : s = r[i], s;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap();
    } };
  }
  var zl = class extends is {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var kl = class extends is {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function Vl(t2, e, n) {
    let i = new ha();
    const r = new ti(), s = new ti(), a = new wi(), o = new zl({ depthPacking: 3201 }), c2 = new kl(), p2 = {}, m = n.maxTextureSize, f = { [u]: d, [d]: u, 2: 2 }, g = new Ys({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ti() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), v = g.clone();
    v.defines.HORIZONTAL_PASS = 1;
    const _ = new Cs();
    _.setAttribute("position", new ds(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const x = new Vs(_, g), y2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = l;
    let M = this.type;
    function S(n2, i2) {
      const s2 = e.update(x);
      g.defines.VSM_SAMPLES !== n2.blurSamples && (g.defines.VSM_SAMPLES = n2.blurSamples, v.defines.VSM_SAMPLES = n2.blurSamples, g.needsUpdate = true, v.needsUpdate = true), null === n2.mapPass && (n2.mapPass = new Ei(r.x, r.y)), g.uniforms.shadow_pass.value = n2.map.texture, g.uniforms.resolution.value = n2.mapSize, g.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.mapPass), t2.clear(), t2.renderBufferDirect(i2, null, s2, g, x, null), v.uniforms.shadow_pass.value = n2.mapPass.texture, v.uniforms.resolution.value = n2.mapSize, v.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.map), t2.clear(), t2.renderBufferDirect(i2, null, s2, v, x, null);
    }
    function b(e2, n2, i2, r2) {
      let s2 = null;
      const a2 = true === i2.isPointLight ? e2.customDistanceMaterial : e2.customDepthMaterial;
      if (void 0 !== a2) s2 = a2;
      else if (s2 = true === i2.isPointLight ? c2 : o, t2.localClippingEnabled && true === n2.clipShadows && Array.isArray(n2.clippingPlanes) && 0 !== n2.clippingPlanes.length || n2.displacementMap && 0 !== n2.displacementScale || n2.alphaMap && n2.alphaTest > 0 || n2.map && n2.alphaTest > 0) {
        const t3 = s2.uuid, e3 = n2.uuid;
        let i3 = p2[t3];
        void 0 === i3 && (i3 = {}, p2[t3] = i3);
        let r3 = i3[e3];
        void 0 === r3 && (r3 = s2.clone(), i3[e3] = r3, n2.addEventListener("dispose", T)), s2 = r3;
      }
      if (s2.visible = n2.visible, s2.wireframe = n2.wireframe, s2.side = r2 === h ? null !== n2.shadowSide ? n2.shadowSide : n2.side : null !== n2.shadowSide ? n2.shadowSide : f[n2.side], s2.alphaMap = n2.alphaMap, s2.alphaTest = n2.alphaTest, s2.map = n2.map, s2.clipShadows = n2.clipShadows, s2.clippingPlanes = n2.clippingPlanes, s2.clipIntersection = n2.clipIntersection, s2.displacementMap = n2.displacementMap, s2.displacementScale = n2.displacementScale, s2.displacementBias = n2.displacementBias, s2.wireframeLinewidth = n2.wireframeLinewidth, s2.linewidth = n2.linewidth, true === i2.isPointLight && true === s2.isMeshDistanceMaterial) {
        t2.properties.get(s2).light = i2;
      }
      return s2;
    }
    function w(n2, r2, s2, a2, o2) {
      if (false === n2.visible) return;
      if (n2.layers.test(r2.layers) && (n2.isMesh || n2.isLine || n2.isPoints) && (n2.castShadow || n2.receiveShadow && o2 === h) && (!n2.frustumCulled || i.intersectsObject(n2))) {
        n2.modelViewMatrix.multiplyMatrices(s2.matrixWorldInverse, n2.matrixWorld);
        const i2 = e.update(n2), l3 = n2.material;
        if (Array.isArray(l3)) {
          const e2 = i2.groups;
          for (let c3 = 0, h2 = e2.length; c3 < h2; c3++) {
            const h3 = e2[c3], u2 = l3[h3.materialIndex];
            if (u2 && u2.visible) {
              const e3 = b(n2, u2, a2, o2);
              n2.onBeforeShadow(t2, n2, r2, s2, i2, e3, h3), t2.renderBufferDirect(s2, null, i2, e3, n2, h3), n2.onAfterShadow(t2, n2, r2, s2, i2, e3, h3);
            }
          }
        } else if (l3.visible) {
          const e2 = b(n2, l3, a2, o2);
          n2.onBeforeShadow(t2, n2, r2, s2, i2, e2, null), t2.renderBufferDirect(s2, null, i2, e2, n2, null), n2.onAfterShadow(t2, n2, r2, s2, i2, e2, null);
        }
      }
      const l2 = n2.children;
      for (let t3 = 0, e2 = l2.length; t3 < e2; t3++) w(l2[t3], r2, s2, a2, o2);
    }
    function T(t3) {
      t3.target.removeEventListener("dispose", T);
      for (const e2 in p2) {
        const n2 = p2[e2], i2 = t3.target.uuid;
        if (i2 in n2) {
          n2[i2].dispose(), delete n2[i2];
        }
      }
    }
    this.render = function(e2, n2, o2) {
      if (false === y2.enabled) return;
      if (false === y2.autoUpdate && false === y2.needsUpdate) return;
      if (0 === e2.length) return;
      const l2 = t2.getRenderTarget(), c3 = t2.getActiveCubeFace(), u2 = t2.getActiveMipmapLevel(), d2 = t2.state;
      d2.setBlending(0), d2.buffers.color.setClear(1, 1, 1, 1), d2.buffers.depth.setTest(true), d2.setScissorTest(false);
      const p3 = M !== h && this.type === h, f2 = M === h && this.type !== h;
      for (let l3 = 0, c4 = e2.length; l3 < c4; l3++) {
        const c5 = e2[l3], u3 = c5.shadow;
        if (void 0 === u3) {
          console.warn("THREE.WebGLShadowMap:", c5, "has no shadow.");
          continue;
        }
        if (false === u3.autoUpdate && false === u3.needsUpdate) continue;
        r.copy(u3.mapSize);
        const g2 = u3.getFrameExtents();
        if (r.multiply(g2), s.copy(u3.mapSize), (r.x > m || r.y > m) && (r.x > m && (s.x = Math.floor(m / g2.x), r.x = s.x * g2.x, u3.mapSize.x = s.x), r.y > m && (s.y = Math.floor(m / g2.y), r.y = s.y * g2.y, u3.mapSize.y = s.y)), null === u3.map || true === p3 || true === f2) {
          const t3 = this.type !== h ? { minFilter: gt, magFilter: gt } : {};
          null !== u3.map && u3.map.dispose(), u3.map = new Ei(r.x, r.y, t3), u3.map.texture.name = c5.name + ".shadowMap", u3.camera.updateProjectionMatrix();
        }
        t2.setRenderTarget(u3.map), t2.clear();
        const v2 = u3.getViewportCount();
        for (let t3 = 0; t3 < v2; t3++) {
          const e3 = u3.getViewport(t3);
          a.set(s.x * e3.x, s.y * e3.y, s.x * e3.z, s.y * e3.w), d2.viewport(a), u3.updateMatrices(c5, t3), i = u3.getFrustum(), w(n2, o2, u3.camera, c5, this.type);
        }
        true !== u3.isPointLightShadow && this.type === h && S(u3, o2), u3.needsUpdate = false;
      }
      M = this.type, y2.needsUpdate = false, t2.setRenderTarget(l2, c3, u2);
    };
  }
  var Hl = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
  function Gl(t2) {
    const e = new function() {
      let e2 = false;
      const n2 = new wi();
      let i2 = null;
      const r2 = new wi(0, 0, 0, 0);
      return { setMask: function(n3) {
        i2 === n3 || e2 || (t2.colorMask(n3, n3, n3, n3), i2 = n3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3, i3, s2, a2, o2) {
        true === o2 && (e3 *= a2, i3 *= a2, s2 *= a2), n2.set(e3, i3, s2, a2), false === r2.equals(n2) && (t2.clearColor(e3, i3, s2, a2), r2.copy(n2));
      }, reset: function() {
        e2 = false, i2 = null, r2.set(-1, 0, 0, 0);
      } };
    }(), n = new function() {
      let e2 = false, n2 = false, i2 = null, r2 = null, s2 = null;
      return { setReversed: function(t3) {
        n2 = t3;
      }, setTest: function(e3) {
        e3 ? G(t2.DEPTH_TEST) : W(t2.DEPTH_TEST);
      }, setMask: function(n3) {
        i2 === n3 || e2 || (t2.depthMask(n3), i2 = n3);
      }, setFunc: function(e3) {
        if (n2 && (e3 = Hl[e3]), r2 !== e3) {
          switch (e3) {
            case 0:
              t2.depthFunc(t2.NEVER);
              break;
            case 1:
              t2.depthFunc(t2.ALWAYS);
              break;
            case 2:
              t2.depthFunc(t2.LESS);
              break;
            case 3:
            default:
              t2.depthFunc(t2.LEQUAL);
              break;
            case 4:
              t2.depthFunc(t2.EQUAL);
              break;
            case 5:
              t2.depthFunc(t2.GEQUAL);
              break;
            case 6:
              t2.depthFunc(t2.GREATER);
              break;
            case 7:
              t2.depthFunc(t2.NOTEQUAL);
          }
          r2 = e3;
        }
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3) {
        s2 !== e3 && (t2.clearDepth(e3), s2 = e3);
      }, reset: function() {
        e2 = false, i2 = null, r2 = null, s2 = null;
      } };
    }(), i = new function() {
      let e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c3 = null;
      return { setTest: function(n3) {
        e2 || (n3 ? G(t2.STENCIL_TEST) : W(t2.STENCIL_TEST));
      }, setMask: function(i3) {
        n2 === i3 || e2 || (t2.stencilMask(i3), n2 = i3);
      }, setFunc: function(e3, n3, a3) {
        i2 === e3 && r2 === n3 && s2 === a3 || (t2.stencilFunc(e3, n3, a3), i2 = e3, r2 = n3, s2 = a3);
      }, setOp: function(e3, n3, i3) {
        a2 === e3 && o2 === n3 && l3 === i3 || (t2.stencilOp(e3, n3, i3), a2 = e3, o2 = n3, l3 = i3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3) {
        c3 !== e3 && (t2.clearStencil(e3), c3 = e3);
      }, reset: function() {
        e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c3 = null;
      } };
    }(), r = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
    let a = {}, o = {}, l2 = /* @__PURE__ */ new WeakMap(), c2 = [], h2 = null, u2 = false, p2 = null, m = null, f = null, g = null, v = null, _ = null, x = null, M = new ts(0, 0, 0), S = 0, b = false, w = null, T = null, E = null, A = null, R = null;
    const I = t2.getParameter(t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let L = false, U = 0;
    const N = t2.getParameter(t2.VERSION);
    -1 !== N.indexOf("WebGL") ? (U = parseFloat(/^WebGL (\d)/.exec(N)[1]), L = U >= 1) : -1 !== N.indexOf("OpenGL ES") && (U = parseFloat(/^OpenGL ES (\d)/.exec(N)[1]), L = U >= 2);
    let D = null, O = {};
    const F = t2.getParameter(t2.SCISSOR_BOX), B = t2.getParameter(t2.VIEWPORT), z = new wi().fromArray(F), k = new wi().fromArray(B);
    function V(e2, n2, i2, r2) {
      const s2 = new Uint8Array(4), a2 = t2.createTexture();
      t2.bindTexture(e2, a2), t2.texParameteri(e2, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(e2, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
      for (let a3 = 0; a3 < i2; a3++) e2 === t2.TEXTURE_3D || e2 === t2.TEXTURE_2D_ARRAY ? t2.texImage3D(n2, 0, t2.RGBA, 1, 1, r2, 0, t2.RGBA, t2.UNSIGNED_BYTE, s2) : t2.texImage2D(n2 + a3, 0, t2.RGBA, 1, 1, 0, t2.RGBA, t2.UNSIGNED_BYTE, s2);
      return a2;
    }
    const H = {};
    function G(e2) {
      true !== a[e2] && (t2.enable(e2), a[e2] = true);
    }
    function W(e2) {
      false !== a[e2] && (t2.disable(e2), a[e2] = false);
    }
    H[t2.TEXTURE_2D] = V(t2.TEXTURE_2D, t2.TEXTURE_2D, 1), H[t2.TEXTURE_CUBE_MAP] = V(t2.TEXTURE_CUBE_MAP, t2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), H[t2.TEXTURE_2D_ARRAY] = V(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_2D_ARRAY, 1, 1), H[t2.TEXTURE_3D] = V(t2.TEXTURE_3D, t2.TEXTURE_3D, 1, 1), e.setClear(0, 0, 0, 1), n.setClear(1), i.setClear(0), G(t2.DEPTH_TEST), n.setFunc(3), Y2(false), Z2(1), G(t2.CULL_FACE), q(0);
    const X = { [y]: t2.FUNC_ADD, 101: t2.FUNC_SUBTRACT, 102: t2.FUNC_REVERSE_SUBTRACT };
    X[103] = t2.MIN, X[104] = t2.MAX;
    const j = { 200: t2.ZERO, 201: t2.ONE, 202: t2.SRC_COLOR, [C]: t2.SRC_ALPHA, 210: t2.SRC_ALPHA_SATURATE, 208: t2.DST_COLOR, 206: t2.DST_ALPHA, 203: t2.ONE_MINUS_SRC_COLOR, [P]: t2.ONE_MINUS_SRC_ALPHA, 209: t2.ONE_MINUS_DST_COLOR, 207: t2.ONE_MINUS_DST_ALPHA, 211: t2.CONSTANT_COLOR, 212: t2.ONE_MINUS_CONSTANT_COLOR, 213: t2.CONSTANT_ALPHA, 214: t2.ONE_MINUS_CONSTANT_ALPHA };
    function q(e2, n2, i2, r2, s2, a2, o2, l3, c3, h3) {
      if (0 !== e2) {
        if (false === u2 && (G(t2.BLEND), u2 = true), 5 === e2) s2 = s2 || n2, a2 = a2 || i2, o2 = o2 || r2, n2 === m && s2 === v || (t2.blendEquationSeparate(X[n2], X[s2]), m = n2, v = s2), i2 === f && r2 === g && a2 === _ && o2 === x || (t2.blendFuncSeparate(j[i2], j[r2], j[a2], j[o2]), f = i2, g = r2, _ = a2, x = o2), false !== l3.equals(M) && c3 === S || (t2.blendColor(l3.r, l3.g, l3.b, c3), M.copy(l3), S = c3), p2 = e2, b = false;
        else if (e2 !== p2 || h3 !== b) {
          if (m === y && v === y || (t2.blendEquation(t2.FUNC_ADD), m = y, v = y), h3) switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.ONE, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.ONE, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFuncSeparate(t2.ZERO, t2.SRC_COLOR, t2.ZERO, t2.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          else switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.SRC_ALPHA, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.SRC_ALPHA, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFunc(t2.ZERO, t2.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          f = null, g = null, _ = null, x = null, M.set(0, 0, 0), S = 0, p2 = e2, b = h3;
        }
      } else true === u2 && (W(t2.BLEND), u2 = false);
    }
    function Y2(e2) {
      w !== e2 && (e2 ? t2.frontFace(t2.CW) : t2.frontFace(t2.CCW), w = e2);
    }
    function Z2(e2) {
      0 !== e2 ? (G(t2.CULL_FACE), e2 !== T && (1 === e2 ? t2.cullFace(t2.BACK) : 2 === e2 ? t2.cullFace(t2.FRONT) : t2.cullFace(t2.FRONT_AND_BACK))) : W(t2.CULL_FACE), T = e2;
    }
    function J2(e2, n2, i2) {
      e2 ? (G(t2.POLYGON_OFFSET_FILL), A === n2 && R === i2 || (t2.polygonOffset(n2, i2), A = n2, R = i2)) : W(t2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: e, depth: n, stencil: i }, enable: G, disable: W, bindFramebuffer: function(e2, n2) {
      return o[e2] !== n2 && (t2.bindFramebuffer(e2, n2), o[e2] = n2, e2 === t2.DRAW_FRAMEBUFFER && (o[t2.FRAMEBUFFER] = n2), e2 === t2.FRAMEBUFFER && (o[t2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(e2, n2) {
      let i2 = c2, r2 = false;
      if (e2) {
        i2 = l2.get(n2), void 0 === i2 && (i2 = [], l2.set(n2, i2));
        const s2 = e2.textures;
        if (i2.length !== s2.length || i2[0] !== t2.COLOR_ATTACHMENT0) {
          for (let e3 = 0, n3 = s2.length; e3 < n3; e3++) i2[e3] = t2.COLOR_ATTACHMENT0 + e3;
          i2.length = s2.length, r2 = true;
        }
      } else i2[0] !== t2.BACK && (i2[0] = t2.BACK, r2 = true);
      r2 && t2.drawBuffers(i2);
    }, useProgram: function(e2) {
      return h2 !== e2 && (t2.useProgram(e2), h2 = e2, true);
    }, setBlending: q, setMaterial: function(r2, s2) {
      2 === r2.side ? W(t2.CULL_FACE) : G(t2.CULL_FACE);
      let a2 = r2.side === d;
      s2 && (a2 = !a2), Y2(a2), 1 === r2.blending && false === r2.transparent ? q(0) : q(r2.blending, r2.blendEquation, r2.blendSrc, r2.blendDst, r2.blendEquationAlpha, r2.blendSrcAlpha, r2.blendDstAlpha, r2.blendColor, r2.blendAlpha, r2.premultipliedAlpha), n.setFunc(r2.depthFunc), n.setTest(r2.depthTest), n.setMask(r2.depthWrite), e.setMask(r2.colorWrite);
      const o2 = r2.stencilWrite;
      i.setTest(o2), o2 && (i.setMask(r2.stencilWriteMask), i.setFunc(r2.stencilFunc, r2.stencilRef, r2.stencilFuncMask), i.setOp(r2.stencilFail, r2.stencilZFail, r2.stencilZPass)), J2(r2.polygonOffset, r2.polygonOffsetFactor, r2.polygonOffsetUnits), true === r2.alphaToCoverage ? G(t2.SAMPLE_ALPHA_TO_COVERAGE) : W(t2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: Y2, setCullFace: Z2, setLineWidth: function(e2) {
      e2 !== E && (L && t2.lineWidth(e2), E = e2);
    }, setPolygonOffset: J2, setScissorTest: function(e2) {
      e2 ? G(t2.SCISSOR_TEST) : W(t2.SCISSOR_TEST);
    }, activeTexture: function(e2) {
      void 0 === e2 && (e2 = t2.TEXTURE0 + I - 1), D !== e2 && (t2.activeTexture(e2), D = e2);
    }, bindTexture: function(e2, n2, i2) {
      void 0 === i2 && (i2 = null === D ? t2.TEXTURE0 + I - 1 : D);
      let r2 = O[i2];
      void 0 === r2 && (r2 = { type: void 0, texture: void 0 }, O[i2] = r2), r2.type === e2 && r2.texture === n2 || (D !== i2 && (t2.activeTexture(i2), D = i2), t2.bindTexture(e2, n2 || H[e2]), r2.type = e2, r2.texture = n2);
    }, unbindTexture: function() {
      const e2 = O[D];
      void 0 !== e2 && void 0 !== e2.type && (t2.bindTexture(e2.type, null), e2.type = void 0, e2.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        t2.compressedTexImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexImage3D: function() {
      try {
        t2.compressedTexImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage2D: function() {
      try {
        t2.texImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage3D: function() {
      try {
        t2.texImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, updateUBOMapping: function(e2, n2) {
      let i2 = s.get(n2);
      void 0 === i2 && (i2 = /* @__PURE__ */ new WeakMap(), s.set(n2, i2));
      let r2 = i2.get(e2);
      void 0 === r2 && (r2 = t2.getUniformBlockIndex(n2, e2.name), i2.set(e2, r2));
    }, uniformBlockBinding: function(e2, n2) {
      const i2 = s.get(n2).get(e2);
      r.get(n2) !== i2 && (t2.uniformBlockBinding(n2, i2, e2.__bindingPointIndex), r.set(n2, i2));
    }, texStorage2D: function() {
      try {
        t2.texStorage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texStorage3D: function() {
      try {
        t2.texStorage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage2D: function() {
      try {
        t2.texSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage3D: function() {
      try {
        t2.texSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        t2.compressedTexSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        t2.compressedTexSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, scissor: function(e2) {
      false === z.equals(e2) && (t2.scissor(e2.x, e2.y, e2.z, e2.w), z.copy(e2));
    }, viewport: function(e2) {
      false === k.equals(e2) && (t2.viewport(e2.x, e2.y, e2.z, e2.w), k.copy(e2));
    }, reset: function() {
      t2.disable(t2.BLEND), t2.disable(t2.CULL_FACE), t2.disable(t2.DEPTH_TEST), t2.disable(t2.POLYGON_OFFSET_FILL), t2.disable(t2.SCISSOR_TEST), t2.disable(t2.STENCIL_TEST), t2.disable(t2.SAMPLE_ALPHA_TO_COVERAGE), t2.blendEquation(t2.FUNC_ADD), t2.blendFunc(t2.ONE, t2.ZERO), t2.blendFuncSeparate(t2.ONE, t2.ZERO, t2.ONE, t2.ZERO), t2.blendColor(0, 0, 0, 0), t2.colorMask(true, true, true, true), t2.clearColor(0, 0, 0, 0), t2.depthMask(true), t2.depthFunc(t2.LESS), t2.clearDepth(1), t2.stencilMask(4294967295), t2.stencilFunc(t2.ALWAYS, 0, 4294967295), t2.stencilOp(t2.KEEP, t2.KEEP, t2.KEEP), t2.clearStencil(0), t2.cullFace(t2.BACK), t2.frontFace(t2.CCW), t2.polygonOffset(0, 0), t2.activeTexture(t2.TEXTURE0), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), t2.bindFramebuffer(t2.READ_FRAMEBUFFER, null), t2.useProgram(null), t2.lineWidth(1), t2.scissor(0, 0, t2.canvas.width, t2.canvas.height), t2.viewport(0, 0, t2.canvas.width, t2.canvas.height), a = {}, D = null, O = {}, o = {}, l2 = /* @__PURE__ */ new WeakMap(), c2 = [], h2 = null, u2 = false, p2 = null, m = null, f = null, g = null, v = null, _ = null, x = null, M = new ts(0, 0, 0), S = 0, b = false, w = null, T = null, E = null, A = null, R = null, z.set(0, 0, t2.canvas.width, t2.canvas.height), k.set(0, 0, t2.canvas.width, t2.canvas.height), e.reset(), n.reset(), i.reset();
    } };
  }
  function Wl(t2, e, n, i) {
    const r = (function(t3) {
      switch (t3) {
        case Et:
        case At:
          return { byteLength: 1, components: 1 };
        case Ct:
        case Rt:
        case Ut:
          return { byteLength: 2, components: 1 };
        case Nt:
        case Dt:
          return { byteLength: 2, components: 4 };
        case It:
        case Pt:
        case Lt:
          return { byteLength: 4, components: 1 };
        case Ft:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t3}.`);
    })(i);
    switch (n) {
      case Bt:
      case Vt:
        return t2 * e;
      case Ht:
        return t2 * e * 2;
      case Xt:
      case jt:
        return t2 * e / r.components * r.byteLength;
      case qt:
      case Yt:
        return t2 * e * 2 / r.components * r.byteLength;
      case zt:
        return t2 * e * 3 / r.components * r.byteLength;
      case kt:
      case Jt:
        return t2 * e * 4 / r.components * r.byteLength;
      case Kt:
      case $t:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Qt:
      case te:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case ne:
      case re:
        return Math.max(t2, 16) * Math.max(e, 8) / 4;
      case ee:
      case ie:
        return Math.max(t2, 8) * Math.max(e, 8) / 2;
      case se:
      case ae:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case oe:
      case le:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case ce:
        return Math.floor((t2 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case he:
        return Math.floor((t2 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case ue:
        return Math.floor((t2 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case de:
        return Math.floor((t2 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case pe:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case me:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case fe:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case ge:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case ve:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case _e:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case xe:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case ye:
        return Math.floor((t2 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case Me:
        return Math.floor((t2 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case Se:
      case be:
      case we:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 16;
      case Te:
      case Ee:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 8;
      case Ae:
      case Re:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${n} format.`);
  }
  function jl(t2, e, n, i, r, s, a) {
    const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), c2 = new ti(), h2 = /* @__PURE__ */ new WeakMap();
    let u2;
    const d2 = /* @__PURE__ */ new WeakMap();
    let p2 = false;
    try {
      p2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t3) {
    }
    function m(t3, e2) {
      return p2 ? new OffscreenCanvas(t3, e2) : ai("canvas");
    }
    function f(t3, e2, n2) {
      let i2 = 1;
      const r2 = k(t3);
      if ((r2.width > n2 || r2.height > n2) && (i2 = n2 / Math.max(r2.width, r2.height)), i2 < 1) {
        if ("undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && t3 instanceof VideoFrame) {
          const n3 = Math.floor(i2 * r2.width), s2 = Math.floor(i2 * r2.height);
          void 0 === u2 && (u2 = m(n3, s2));
          const a2 = e2 ? m(n3, s2) : u2;
          a2.width = n3, a2.height = s2;
          return a2.getContext("2d").drawImage(t3, 0, 0, n3, s2), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + r2.width + "x" + r2.height + ") to (" + n3 + "x" + s2 + ")."), a2;
        }
        return "data" in t3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + r2.width + "x" + r2.height + ")."), t3;
      }
      return t3;
    }
    function g(t3) {
      return t3.generateMipmaps && t3.minFilter !== gt && t3.minFilter !== Mt;
    }
    function v(e2) {
      t2.generateMipmap(e2);
    }
    function _(n2, i2, r2, s2, a2 = false) {
      if (null !== n2) {
        if (void 0 !== t2[n2]) return t2[n2];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n2 + "'");
      }
      let o2 = i2;
      if (i2 === t2.RED && (r2 === t2.FLOAT && (o2 = t2.R32F), r2 === t2.HALF_FLOAT && (o2 = t2.R16F), r2 === t2.UNSIGNED_BYTE && (o2 = t2.R8)), i2 === t2.RED_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.R8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.R16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.R32UI), r2 === t2.BYTE && (o2 = t2.R8I), r2 === t2.SHORT && (o2 = t2.R16I), r2 === t2.INT && (o2 = t2.R32I)), i2 === t2.RG && (r2 === t2.FLOAT && (o2 = t2.RG32F), r2 === t2.HALF_FLOAT && (o2 = t2.RG16F), r2 === t2.UNSIGNED_BYTE && (o2 = t2.RG8)), i2 === t2.RG_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RG8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RG16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RG32UI), r2 === t2.BYTE && (o2 = t2.RG8I), r2 === t2.SHORT && (o2 = t2.RG16I), r2 === t2.INT && (o2 = t2.RG32I)), i2 === t2.RGB_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RGB8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RGB16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RGB32UI), r2 === t2.BYTE && (o2 = t2.RGB8I), r2 === t2.SHORT && (o2 = t2.RGB16I), r2 === t2.INT && (o2 = t2.RGB32I)), i2 === t2.RGBA_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RGBA8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RGBA16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RGBA32UI), r2 === t2.BYTE && (o2 = t2.RGBA8I), r2 === t2.SHORT && (o2 = t2.RGBA16I), r2 === t2.INT && (o2 = t2.RGBA32I)), i2 === t2.RGB && r2 === t2.UNSIGNED_INT_5_9_9_9_REV && (o2 = t2.RGB9_E5), i2 === t2.RGBA) {
        const e2 = a2 ? tn : mi.getTransfer(s2);
        r2 === t2.FLOAT && (o2 = t2.RGBA32F), r2 === t2.HALF_FLOAT && (o2 = t2.RGBA16F), r2 === t2.UNSIGNED_BYTE && (o2 = e2 === en ? t2.SRGB8_ALPHA8 : t2.RGBA8), r2 === t2.UNSIGNED_SHORT_4_4_4_4 && (o2 = t2.RGBA4), r2 === t2.UNSIGNED_SHORT_5_5_5_1 && (o2 = t2.RGB5_A1);
      }
      return o2 !== t2.R16F && o2 !== t2.R32F && o2 !== t2.RG16F && o2 !== t2.RG32F && o2 !== t2.RGBA16F && o2 !== t2.RGBA32F || e.get("EXT_color_buffer_float"), o2;
    }
    function x(e2, n2) {
      let i2;
      return e2 ? null === n2 || n2 === It || n2 === Ot ? i2 = t2.DEPTH24_STENCIL8 : n2 === Lt ? i2 = t2.DEPTH32F_STENCIL8 : n2 === Ct && (i2 = t2.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n2 || n2 === It || n2 === Ot ? i2 = t2.DEPTH_COMPONENT24 : n2 === Lt ? i2 = t2.DEPTH_COMPONENT32F : n2 === Ct && (i2 = t2.DEPTH_COMPONENT16), i2;
    }
    function y2(t3, e2) {
      return true === g(t3) || t3.isFramebufferTexture && t3.minFilter !== gt && t3.minFilter !== Mt ? Math.log2(Math.max(e2.width, e2.height)) + 1 : void 0 !== t3.mipmaps && t3.mipmaps.length > 0 ? t3.mipmaps.length : t3.isCompressedTexture && Array.isArray(t3.image) ? e2.mipmaps.length : 1;
    }
    function M(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", M), (function(t4) {
        const e3 = i.get(t4);
        if (void 0 === e3.__webglInit) return;
        const n2 = t4.source, r2 = d2.get(n2);
        if (r2) {
          const i2 = r2[e3.__cacheKey];
          i2.usedTimes--, 0 === i2.usedTimes && b(t4), 0 === Object.keys(r2).length && d2.delete(n2);
        }
        i.remove(t4);
      })(e2), e2.isVideoTexture && h2.delete(e2);
    }
    function S(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", S), (function(e3) {
        const n3 = i.get(e3);
        e3.depthTexture && e3.depthTexture.dispose();
        if (e3.isWebGLCubeRenderTarget) for (let e4 = 0; e4 < 6; e4++) {
          if (Array.isArray(n3.__webglFramebuffer[e4])) for (let i2 = 0; i2 < n3.__webglFramebuffer[e4].length; i2++) t2.deleteFramebuffer(n3.__webglFramebuffer[e4][i2]);
          else t2.deleteFramebuffer(n3.__webglFramebuffer[e4]);
          n3.__webglDepthbuffer && t2.deleteRenderbuffer(n3.__webglDepthbuffer[e4]);
        }
        else {
          if (Array.isArray(n3.__webglFramebuffer)) for (let e4 = 0; e4 < n3.__webglFramebuffer.length; e4++) t2.deleteFramebuffer(n3.__webglFramebuffer[e4]);
          else t2.deleteFramebuffer(n3.__webglFramebuffer);
          if (n3.__webglDepthbuffer && t2.deleteRenderbuffer(n3.__webglDepthbuffer), n3.__webglMultisampledFramebuffer && t2.deleteFramebuffer(n3.__webglMultisampledFramebuffer), n3.__webglColorRenderbuffer) for (let e4 = 0; e4 < n3.__webglColorRenderbuffer.length; e4++) n3.__webglColorRenderbuffer[e4] && t2.deleteRenderbuffer(n3.__webglColorRenderbuffer[e4]);
          n3.__webglDepthRenderbuffer && t2.deleteRenderbuffer(n3.__webglDepthRenderbuffer);
        }
        const r2 = e3.textures;
        for (let e4 = 0, n4 = r2.length; e4 < n4; e4++) {
          const n5 = i.get(r2[e4]);
          n5.__webglTexture && (t2.deleteTexture(n5.__webglTexture), a.memory.textures--), i.remove(r2[e4]);
        }
        i.remove(e3);
      })(n2);
    }
    function b(e2) {
      const n2 = i.get(e2);
      t2.deleteTexture(n2.__webglTexture);
      const r2 = e2.source;
      delete d2.get(r2)[n2.__cacheKey], a.memory.textures--;
    }
    let w = 0;
    function T(e2, r2) {
      const s2 = i.get(e2);
      if (e2.isVideoTexture && (function(t3) {
        const e3 = a.render.frame;
        h2.get(t3) !== e3 && (h2.set(t3, e3), t3.update());
      })(e2), false === e2.isRenderTargetTexture && e2.version > 0 && s2.__version !== e2.version) {
        const t3 = e2.image;
        if (null === t3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== t3.complete) return void I(s2, e2, r2);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }
      n.bindTexture(t2.TEXTURE_2D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }
    const E = { [pt]: t2.REPEAT, [mt]: t2.CLAMP_TO_EDGE, [ft]: t2.MIRRORED_REPEAT }, A = { [gt]: t2.NEAREST, [vt]: t2.NEAREST_MIPMAP_NEAREST, [xt]: t2.NEAREST_MIPMAP_LINEAR, [Mt]: t2.LINEAR, [St]: t2.LINEAR_MIPMAP_NEAREST, [wt]: t2.LINEAR_MIPMAP_LINEAR }, R = { 512: t2.NEVER, 519: t2.ALWAYS, 513: t2.LESS, [wn]: t2.LEQUAL, 514: t2.EQUAL, 518: t2.GEQUAL, 516: t2.GREATER, 517: t2.NOTEQUAL };
    function C3(n2, s2) {
      if (s2.type !== Lt || false !== e.has("OES_texture_float_linear") || s2.magFilter !== Mt && s2.magFilter !== St && s2.magFilter !== xt && s2.magFilter !== wt && s2.minFilter !== Mt && s2.minFilter !== St && s2.minFilter !== xt && s2.minFilter !== wt || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), t2.texParameteri(n2, t2.TEXTURE_WRAP_S, E[s2.wrapS]), t2.texParameteri(n2, t2.TEXTURE_WRAP_T, E[s2.wrapT]), n2 !== t2.TEXTURE_3D && n2 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n2, t2.TEXTURE_WRAP_R, E[s2.wrapR]), t2.texParameteri(n2, t2.TEXTURE_MAG_FILTER, A[s2.magFilter]), t2.texParameteri(n2, t2.TEXTURE_MIN_FILTER, A[s2.minFilter]), s2.compareFunction && (t2.texParameteri(n2, t2.TEXTURE_COMPARE_MODE, t2.COMPARE_REF_TO_TEXTURE), t2.texParameteri(n2, t2.TEXTURE_COMPARE_FUNC, R[s2.compareFunction])), true === e.has("EXT_texture_filter_anisotropic")) {
        if (s2.magFilter === gt) return;
        if (s2.minFilter !== xt && s2.minFilter !== wt) return;
        if (s2.type === Lt && false === e.has("OES_texture_float_linear")) return;
        if (s2.anisotropy > 1 || i.get(s2).__currentAnisotropy) {
          const a2 = e.get("EXT_texture_filter_anisotropic");
          t2.texParameterf(n2, a2.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s2.anisotropy, r.getMaxAnisotropy())), i.get(s2).__currentAnisotropy = s2.anisotropy;
        }
      }
    }
    function P2(e2, n2) {
      let i2 = false;
      void 0 === e2.__webglInit && (e2.__webglInit = true, n2.addEventListener("dispose", M));
      const r2 = n2.source;
      let s2 = d2.get(r2);
      void 0 === s2 && (s2 = {}, d2.set(r2, s2));
      const o2 = (function(t3) {
        const e3 = [];
        return e3.push(t3.wrapS), e3.push(t3.wrapT), e3.push(t3.wrapR || 0), e3.push(t3.magFilter), e3.push(t3.minFilter), e3.push(t3.anisotropy), e3.push(t3.internalFormat), e3.push(t3.format), e3.push(t3.type), e3.push(t3.generateMipmaps), e3.push(t3.premultiplyAlpha), e3.push(t3.flipY), e3.push(t3.unpackAlignment), e3.push(t3.colorSpace), e3.join();
      })(n2);
      if (o2 !== e2.__cacheKey) {
        void 0 === s2[o2] && (s2[o2] = { texture: t2.createTexture(), usedTimes: 0 }, a.memory.textures++, i2 = true), s2[o2].usedTimes++;
        const r3 = s2[e2.__cacheKey];
        void 0 !== r3 && (s2[e2.__cacheKey].usedTimes--, 0 === r3.usedTimes && b(n2)), e2.__cacheKey = o2, e2.__webglTexture = s2[o2].texture;
      }
      return i2;
    }
    function I(e2, a2, o2) {
      let l3 = t2.TEXTURE_2D;
      (a2.isDataArrayTexture || a2.isCompressedArrayTexture) && (l3 = t2.TEXTURE_2D_ARRAY), a2.isData3DTexture && (l3 = t2.TEXTURE_3D);
      const c3 = P2(e2, a2), h3 = a2.source;
      n.bindTexture(l3, e2.__webglTexture, t2.TEXTURE0 + o2);
      const u3 = i.get(h3);
      if (h3.version !== u3.__version || true === c3) {
        n.activeTexture(t2.TEXTURE0 + o2);
        const e3 = mi.getPrimaries(mi.workingColorSpace), i2 = a2.colorSpace === Ze ? null : mi.getPrimaries(a2.colorSpace), d3 = a2.colorSpace === Ze || e3 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
        t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a2.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a2.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a2.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, d3);
        let p3 = f(a2.image, false, r.maxTextureSize);
        p3 = z(a2, p3);
        const m2 = s.convert(a2.format, a2.colorSpace), M2 = s.convert(a2.type);
        let S2, b2 = _(a2.internalFormat, m2, M2, a2.colorSpace, a2.isVideoTexture);
        C3(l3, a2);
        const w2 = a2.mipmaps, T2 = true !== a2.isVideoTexture, E2 = void 0 === u3.__version || true === c3, A2 = h3.dataReady, R2 = y2(a2, p3);
        if (a2.isDepthTexture) b2 = x(a2.format === Wt, a2.type), E2 && (T2 ? n.texStorage2D(t2.TEXTURE_2D, 1, b2, p3.width, p3.height) : n.texImage2D(t2.TEXTURE_2D, 0, b2, p3.width, p3.height, 0, m2, M2, null));
        else if (a2.isDataTexture) if (w2.length > 0) {
          T2 && E2 && n.texStorage2D(t2.TEXTURE_2D, R2, b2, w2[0].width, w2[0].height);
          for (let e4 = 0, i3 = w2.length; e4 < i3; e4++) S2 = w2[e4], T2 ? A2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S2.width, S2.height, m2, M2, S2.data) : n.texImage2D(t2.TEXTURE_2D, e4, b2, S2.width, S2.height, 0, m2, M2, S2.data);
          a2.generateMipmaps = false;
        } else T2 ? (E2 && n.texStorage2D(t2.TEXTURE_2D, R2, b2, p3.width, p3.height), A2 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, p3.width, p3.height, m2, M2, p3.data)) : n.texImage2D(t2.TEXTURE_2D, 0, b2, p3.width, p3.height, 0, m2, M2, p3.data);
        else if (a2.isCompressedTexture) if (a2.isCompressedArrayTexture) {
          T2 && E2 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, R2, b2, w2[0].width, w2[0].height, p3.depth);
          for (let e4 = 0, i3 = w2.length; e4 < i3; e4++) if (S2 = w2[e4], a2.format !== kt) if (null !== m2) if (T2) {
            if (A2) if (a2.layerUpdates.size > 0) {
              const i4 = Wl(S2.width, S2.height, a2.format, a2.type);
              for (const r2 of a2.layerUpdates) {
                const s2 = S2.data.subarray(r2 * i4 / S2.data.BYTES_PER_ELEMENT, (r2 + 1) * i4 / S2.data.BYTES_PER_ELEMENT);
                n.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, r2, S2.width, S2.height, 1, m2, s2, 0, 0);
              }
              a2.clearLayerUpdates();
            } else n.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, S2.width, S2.height, p3.depth, m2, S2.data, 0, 0);
          } else n.compressedTexImage3D(t2.TEXTURE_2D_ARRAY, e4, b2, S2.width, S2.height, p3.depth, 0, S2.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else T2 ? A2 && n.texSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, S2.width, S2.height, p3.depth, m2, M2, S2.data) : n.texImage3D(t2.TEXTURE_2D_ARRAY, e4, b2, S2.width, S2.height, p3.depth, 0, m2, M2, S2.data);
        } else {
          T2 && E2 && n.texStorage2D(t2.TEXTURE_2D, R2, b2, w2[0].width, w2[0].height);
          for (let e4 = 0, i3 = w2.length; e4 < i3; e4++) S2 = w2[e4], a2.format !== kt ? null !== m2 ? T2 ? A2 && n.compressedTexSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S2.width, S2.height, m2, S2.data) : n.compressedTexImage2D(t2.TEXTURE_2D, e4, b2, S2.width, S2.height, 0, S2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T2 ? A2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S2.width, S2.height, m2, M2, S2.data) : n.texImage2D(t2.TEXTURE_2D, e4, b2, S2.width, S2.height, 0, m2, M2, S2.data);
        }
        else if (a2.isDataArrayTexture) if (T2) {
          if (E2 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, R2, b2, p3.width, p3.height, p3.depth), A2) if (a2.layerUpdates.size > 0) {
            const e4 = Wl(p3.width, p3.height, a2.format, a2.type);
            for (const i3 of a2.layerUpdates) {
              const r2 = p3.data.subarray(i3 * e4 / p3.data.BYTES_PER_ELEMENT, (i3 + 1) * e4 / p3.data.BYTES_PER_ELEMENT);
              n.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, i3, p3.width, p3.height, 1, m2, M2, r2);
            }
            a2.clearLayerUpdates();
          } else n.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p3.width, p3.height, p3.depth, m2, M2, p3.data);
        } else n.texImage3D(t2.TEXTURE_2D_ARRAY, 0, b2, p3.width, p3.height, p3.depth, 0, m2, M2, p3.data);
        else if (a2.isData3DTexture) T2 ? (E2 && n.texStorage3D(t2.TEXTURE_3D, R2, b2, p3.width, p3.height, p3.depth), A2 && n.texSubImage3D(t2.TEXTURE_3D, 0, 0, 0, 0, p3.width, p3.height, p3.depth, m2, M2, p3.data)) : n.texImage3D(t2.TEXTURE_3D, 0, b2, p3.width, p3.height, p3.depth, 0, m2, M2, p3.data);
        else if (a2.isFramebufferTexture) {
          if (E2) if (T2) n.texStorage2D(t2.TEXTURE_2D, R2, b2, p3.width, p3.height);
          else {
            let e4 = p3.width, i3 = p3.height;
            for (let r2 = 0; r2 < R2; r2++) n.texImage2D(t2.TEXTURE_2D, r2, b2, e4, i3, 0, m2, M2, null), e4 >>= 1, i3 >>= 1;
          }
        } else if (w2.length > 0) {
          if (T2 && E2) {
            const e4 = k(w2[0]);
            n.texStorage2D(t2.TEXTURE_2D, R2, b2, e4.width, e4.height);
          }
          for (let e4 = 0, i3 = w2.length; e4 < i3; e4++) S2 = w2[e4], T2 ? A2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, m2, M2, S2) : n.texImage2D(t2.TEXTURE_2D, e4, b2, m2, M2, S2);
          a2.generateMipmaps = false;
        } else if (T2) {
          if (E2) {
            const e4 = k(p3);
            n.texStorage2D(t2.TEXTURE_2D, R2, b2, e4.width, e4.height);
          }
          A2 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, m2, M2, p3);
        } else n.texImage2D(t2.TEXTURE_2D, 0, b2, m2, M2, p3);
        g(a2) && v(l3), u3.__version = h3.version, a2.onUpdate && a2.onUpdate(a2);
      }
      e2.__version = a2.version;
    }
    function L(e2, r2, a2, l3, c3, h3) {
      const u3 = s.convert(a2.format, a2.colorSpace), d3 = s.convert(a2.type), p3 = _(a2.internalFormat, u3, d3, a2.colorSpace);
      if (!i.get(r2).__hasExternalTextures) {
        const e3 = Math.max(1, r2.width >> h3), i2 = Math.max(1, r2.height >> h3);
        c3 === t2.TEXTURE_3D || c3 === t2.TEXTURE_2D_ARRAY ? n.texImage3D(c3, h3, p3, e3, i2, r2.depth, 0, u3, d3, null) : n.texImage2D(c3, h3, p3, e3, i2, 0, u3, d3, null);
      }
      n.bindFramebuffer(t2.FRAMEBUFFER, e2), B(r2) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, l3, c3, i.get(a2).__webglTexture, 0, F(r2)) : (c3 === t2.TEXTURE_2D || c3 >= t2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= t2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t2.framebufferTexture2D(t2.FRAMEBUFFER, l3, c3, i.get(a2).__webglTexture, h3), n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function U(e2, n2, i2) {
      if (t2.bindRenderbuffer(t2.RENDERBUFFER, e2), n2.depthBuffer) {
        const r2 = n2.depthTexture, s2 = r2 && r2.isDepthTexture ? r2.type : null, a2 = x(n2.stencilBuffer, s2), l3 = n2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, c3 = F(n2);
        B(n2) ? o.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, c3, a2, n2.width, n2.height) : i2 ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, c3, a2, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, a2, n2.width, n2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, l3, t2.RENDERBUFFER, e2);
      } else {
        const e3 = n2.textures;
        for (let r2 = 0; r2 < e3.length; r2++) {
          const a2 = e3[r2], l3 = s.convert(a2.format, a2.colorSpace), c3 = s.convert(a2.type), h3 = _(a2.internalFormat, l3, c3, a2.colorSpace), u3 = F(n2);
          i2 && false === B(n2) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, u3, h3, n2.width, n2.height) : B(n2) ? o.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, u3, h3, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, h3, n2.width, n2.height);
        }
      }
      t2.bindRenderbuffer(t2.RENDERBUFFER, null);
    }
    function N(e2) {
      const r2 = i.get(e2), s2 = true === e2.isWebGLCubeRenderTarget;
      if (r2.__boundDepthTexture !== e2.depthTexture) {
        const t3 = e2.depthTexture;
        if (r2.__depthDisposeCallback && r2.__depthDisposeCallback(), t3) {
          const e3 = () => {
            delete r2.__boundDepthTexture, delete r2.__depthDisposeCallback, t3.removeEventListener("dispose", e3);
          };
          t3.addEventListener("dispose", e3), r2.__depthDisposeCallback = e3;
        }
        r2.__boundDepthTexture = t3;
      }
      if (e2.depthTexture && !r2.__autoAllocateDepthBuffer) {
        if (s2) throw new Error("target.depthTexture not supported in Cube render targets");
        !(function(e3, r3) {
          if (r3 && r3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(t2.FRAMEBUFFER, e3), !r3.depthTexture || !r3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(r3.depthTexture).__webglTexture && r3.depthTexture.image.width === r3.width && r3.depthTexture.image.height === r3.height || (r3.depthTexture.image.width = r3.width, r3.depthTexture.image.height = r3.height, r3.depthTexture.needsUpdate = true), T(r3.depthTexture, 0);
          const s3 = i.get(r3.depthTexture).__webglTexture, a2 = F(r3);
          if (r3.depthTexture.format === Gt) B(r3) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          else {
            if (r3.depthTexture.format !== Wt) throw new Error("Unknown depthTexture format");
            B(r3) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          }
        })(r2.__webglFramebuffer, e2);
      } else if (s2) {
        r2.__webglDepthbuffer = [];
        for (let i2 = 0; i2 < 6; i2++) if (n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer[i2]), void 0 === r2.__webglDepthbuffer[i2]) r2.__webglDepthbuffer[i2] = t2.createRenderbuffer(), U(r2.__webglDepthbuffer[i2], e2, false);
        else {
          const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, s3 = r2.__webglDepthbuffer[i2];
          t2.bindRenderbuffer(t2.RENDERBUFFER, s3), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, n2, t2.RENDERBUFFER, s3);
        }
      } else if (n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer), void 0 === r2.__webglDepthbuffer) r2.__webglDepthbuffer = t2.createRenderbuffer(), U(r2.__webglDepthbuffer, e2, false);
      else {
        const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, i2 = r2.__webglDepthbuffer;
        t2.bindRenderbuffer(t2.RENDERBUFFER, i2), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, n2, t2.RENDERBUFFER, i2);
      }
      n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    const D = [], O = [];
    function F(t3) {
      return Math.min(r.maxSamples, t3.samples);
    }
    function B(t3) {
      const n2 = i.get(t3);
      return t3.samples > 0 && true === e.has("WEBGL_multisampled_render_to_texture") && false !== n2.__useRenderToTexture;
    }
    function z(t3, e2) {
      const n2 = t3.colorSpace, i2 = t3.format, r2 = t3.type;
      return true === t3.isCompressedTexture || true === t3.isVideoTexture || n2 !== Ke && n2 !== Ze && (mi.getTransfer(n2) === en ? i2 === kt && r2 === Et || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n2)), e2;
    }
    function k(t3) {
      return "undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement ? (c2.width = t3.naturalWidth || t3.width, c2.height = t3.naturalHeight || t3.height) : "undefined" != typeof VideoFrame && t3 instanceof VideoFrame ? (c2.width = t3.displayWidth, c2.height = t3.displayHeight) : (c2.width = t3.width, c2.height = t3.height), c2;
    }
    this.allocateTextureUnit = function() {
      const t3 = w;
      return t3 >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t3 + " texture units while this GPU supports only " + r.maxTextures), w += 1, t3;
    }, this.resetTextureUnits = function() {
      w = 0;
    }, this.setTexture2D = T, this.setTexture2DArray = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? I(s2, e2, r2) : n.bindTexture(t2.TEXTURE_2D_ARRAY, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTexture3D = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? I(s2, e2, r2) : n.bindTexture(t2.TEXTURE_3D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTextureCube = function(e2, a2) {
      const o2 = i.get(e2);
      e2.version > 0 && o2.__version !== e2.version ? (function(e3, a3, o3) {
        if (6 !== a3.image.length) return;
        const l3 = P2(e3, a3), c3 = a3.source;
        n.bindTexture(t2.TEXTURE_CUBE_MAP, e3.__webglTexture, t2.TEXTURE0 + o3);
        const h3 = i.get(c3);
        if (c3.version !== h3.__version || true === l3) {
          n.activeTexture(t2.TEXTURE0 + o3);
          const e4 = mi.getPrimaries(mi.workingColorSpace), i2 = a3.colorSpace === Ze ? null : mi.getPrimaries(a3.colorSpace), u3 = a3.colorSpace === Ze || e4 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
          t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a3.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a3.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a3.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const d3 = a3.isCompressedTexture || a3.image[0].isCompressedTexture, p3 = a3.image[0] && a3.image[0].isDataTexture, m2 = [];
          for (let t3 = 0; t3 < 6; t3++) m2[t3] = d3 || p3 ? p3 ? a3.image[t3].image : a3.image[t3] : f(a3.image[t3], true, r.maxCubemapSize), m2[t3] = z(a3, m2[t3]);
          const x2 = m2[0], M2 = s.convert(a3.format, a3.colorSpace), S2 = s.convert(a3.type), b2 = _(a3.internalFormat, M2, S2, a3.colorSpace), w2 = true !== a3.isVideoTexture, T2 = void 0 === h3.__version || true === l3, E2 = c3.dataReady;
          let A2, R2 = y2(a3, x2);
          if (C3(t2.TEXTURE_CUBE_MAP, a3), d3) {
            w2 && T2 && n.texStorage2D(t2.TEXTURE_CUBE_MAP, R2, b2, x2.width, x2.height);
            for (let e5 = 0; e5 < 6; e5++) {
              A2 = m2[e5].mipmaps;
              for (let i3 = 0; i3 < A2.length; i3++) {
                const r2 = A2[i3];
                a3.format !== kt ? null !== M2 ? w2 ? E2 && n.compressedTexSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, M2, r2.data) : n.compressedTexImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, b2, r2.width, r2.height, 0, r2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w2 ? E2 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, M2, S2, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, b2, r2.width, r2.height, 0, M2, S2, r2.data);
              }
            }
          } else {
            if (A2 = a3.mipmaps, w2 && T2) {
              A2.length > 0 && R2++;
              const e5 = k(m2[0]);
              n.texStorage2D(t2.TEXTURE_CUBE_MAP, R2, b2, e5.width, e5.height);
            }
            for (let e5 = 0; e5 < 6; e5++) if (p3) {
              w2 ? E2 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, m2[e5].width, m2[e5].height, M2, S2, m2[e5].data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, b2, m2[e5].width, m2[e5].height, 0, M2, S2, m2[e5].data);
              for (let i3 = 0; i3 < A2.length; i3++) {
                const r2 = A2[i3].image[e5].image;
                w2 ? E2 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, r2.width, r2.height, M2, S2, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, b2, r2.width, r2.height, 0, M2, S2, r2.data);
              }
            } else {
              w2 ? E2 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, M2, S2, m2[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, b2, M2, S2, m2[e5]);
              for (let i3 = 0; i3 < A2.length; i3++) {
                const r2 = A2[i3];
                w2 ? E2 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, M2, S2, r2.image[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, b2, M2, S2, r2.image[e5]);
              }
            }
          }
          g(a3) && v(t2.TEXTURE_CUBE_MAP), h3.__version = c3.version, a3.onUpdate && a3.onUpdate(a3);
        }
        e3.__version = a3.version;
      })(o2, e2, a2) : n.bindTexture(t2.TEXTURE_CUBE_MAP, o2.__webglTexture, t2.TEXTURE0 + a2);
    }, this.rebindTextures = function(e2, n2, r2) {
      const s2 = i.get(e2);
      void 0 !== n2 && L(s2.__webglFramebuffer, e2, e2.texture, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, 0), void 0 !== r2 && N(e2);
    }, this.setupRenderTarget = function(e2) {
      const r2 = e2.texture, o2 = i.get(e2), l3 = i.get(r2);
      e2.addEventListener("dispose", S);
      const c3 = e2.textures, h3 = true === e2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
      if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = t2.createTexture()), l3.__version = r2.version, a.memory.textures++), h3) {
        o2.__webglFramebuffer = [];
        for (let e3 = 0; e3 < 6; e3++) if (r2.mipmaps && r2.mipmaps.length > 0) {
          o2.__webglFramebuffer[e3] = [];
          for (let n2 = 0; n2 < r2.mipmaps.length; n2++) o2.__webglFramebuffer[e3][n2] = t2.createFramebuffer();
        } else o2.__webglFramebuffer[e3] = t2.createFramebuffer();
      } else {
        if (r2.mipmaps && r2.mipmaps.length > 0) {
          o2.__webglFramebuffer = [];
          for (let e3 = 0; e3 < r2.mipmaps.length; e3++) o2.__webglFramebuffer[e3] = t2.createFramebuffer();
        } else o2.__webglFramebuffer = t2.createFramebuffer();
        if (u3) for (let e3 = 0, n2 = c3.length; e3 < n2; e3++) {
          const n3 = i.get(c3[e3]);
          void 0 === n3.__webglTexture && (n3.__webglTexture = t2.createTexture(), a.memory.textures++);
        }
        if (e2.samples > 0 && false === B(e2)) {
          o2.__webglMultisampledFramebuffer = t2.createFramebuffer(), o2.__webglColorRenderbuffer = [], n.bindFramebuffer(t2.FRAMEBUFFER, o2.__webglMultisampledFramebuffer);
          for (let n2 = 0; n2 < c3.length; n2++) {
            const i2 = c3[n2];
            o2.__webglColorRenderbuffer[n2] = t2.createRenderbuffer(), t2.bindRenderbuffer(t2.RENDERBUFFER, o2.__webglColorRenderbuffer[n2]);
            const r3 = s.convert(i2.format, i2.colorSpace), a2 = s.convert(i2.type), l4 = _(i2.internalFormat, r3, a2, i2.colorSpace, true === e2.isXRRenderTarget), h4 = F(e2);
            t2.renderbufferStorageMultisample(t2.RENDERBUFFER, h4, l4, e2.width, e2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + n2, t2.RENDERBUFFER, o2.__webglColorRenderbuffer[n2]);
          }
          t2.bindRenderbuffer(t2.RENDERBUFFER, null), e2.depthBuffer && (o2.__webglDepthRenderbuffer = t2.createRenderbuffer(), U(o2.__webglDepthRenderbuffer, e2, true)), n.bindFramebuffer(t2.FRAMEBUFFER, null);
        }
      }
      if (h3) {
        n.bindTexture(t2.TEXTURE_CUBE_MAP, l3.__webglTexture), C3(t2.TEXTURE_CUBE_MAP, r2);
        for (let n2 = 0; n2 < 6; n2++) if (r2.mipmaps && r2.mipmaps.length > 0) for (let i2 = 0; i2 < r2.mipmaps.length; i2++) L(o2.__webglFramebuffer[n2][i2], e2, r2, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, i2);
        else L(o2.__webglFramebuffer[n2], e2, r2, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, 0);
        g(r2) && v(t2.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u3) {
        for (let r3 = 0, s2 = c3.length; r3 < s2; r3++) {
          const s3 = c3[r3], a2 = i.get(s3);
          n.bindTexture(t2.TEXTURE_2D, a2.__webglTexture), C3(t2.TEXTURE_2D, s3), L(o2.__webglFramebuffer, e2, s3, t2.COLOR_ATTACHMENT0 + r3, t2.TEXTURE_2D, 0), g(s3) && v(t2.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i2 = t2.TEXTURE_2D;
        if ((e2.isWebGL3DRenderTarget || e2.isWebGLArrayRenderTarget) && (i2 = e2.isWebGL3DRenderTarget ? t2.TEXTURE_3D : t2.TEXTURE_2D_ARRAY), n.bindTexture(i2, l3.__webglTexture), C3(i2, r2), r2.mipmaps && r2.mipmaps.length > 0) for (let n2 = 0; n2 < r2.mipmaps.length; n2++) L(o2.__webglFramebuffer[n2], e2, r2, t2.COLOR_ATTACHMENT0, i2, n2);
        else L(o2.__webglFramebuffer, e2, r2, t2.COLOR_ATTACHMENT0, i2, 0);
        g(r2) && v(i2), n.unbindTexture();
      }
      e2.depthBuffer && N(e2);
    }, this.updateRenderTargetMipmap = function(e2) {
      const r2 = e2.textures;
      for (let s2 = 0, a2 = r2.length; s2 < a2; s2++) {
        const a3 = r2[s2];
        if (g(a3)) {
          const r3 = e2.isWebGLCubeRenderTarget ? t2.TEXTURE_CUBE_MAP : t2.TEXTURE_2D, s3 = i.get(a3).__webglTexture;
          n.bindTexture(r3, s3), v(r3), n.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(e2) {
      if (e2.samples > 0) {
        if (false === B(e2)) {
          const r2 = e2.textures, s2 = e2.width, a2 = e2.height;
          let o2 = t2.COLOR_BUFFER_BIT;
          const c3 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, h3 = i.get(e2), u3 = r2.length > 1;
          if (u3) for (let e3 = 0; e3 < r2.length; e3++) n.bindFramebuffer(t2.FRAMEBUFFER, h3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, null), n.bindFramebuffer(t2.FRAMEBUFFER, h3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, null, 0);
          n.bindFramebuffer(t2.READ_FRAMEBUFFER, h3.__webglMultisampledFramebuffer), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, h3.__webglFramebuffer);
          for (let n2 = 0; n2 < r2.length; n2++) {
            if (e2.resolveDepthBuffer && (e2.depthBuffer && (o2 |= t2.DEPTH_BUFFER_BIT), e2.stencilBuffer && e2.resolveStencilBuffer && (o2 |= t2.STENCIL_BUFFER_BIT)), u3) {
              t2.framebufferRenderbuffer(t2.READ_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.RENDERBUFFER, h3.__webglColorRenderbuffer[n2]);
              const e3 = i.get(r2[n2]).__webglTexture;
              t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e3, 0);
            }
            t2.blitFramebuffer(0, 0, s2, a2, 0, 0, s2, a2, o2, t2.NEAREST), true === l2 && (D.length = 0, O.length = 0, D.push(t2.COLOR_ATTACHMENT0 + n2), e2.depthBuffer && false === e2.resolveDepthBuffer && (D.push(c3), O.push(c3), t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, O)), t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, D));
          }
          if (n.bindFramebuffer(t2.READ_FRAMEBUFFER, null), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), u3) for (let e3 = 0; e3 < r2.length; e3++) {
            n.bindFramebuffer(t2.FRAMEBUFFER, h3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, h3.__webglColorRenderbuffer[e3]);
            const s3 = i.get(r2[e3]).__webglTexture;
            n.bindFramebuffer(t2.FRAMEBUFFER, h3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, s3, 0);
          }
          n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, h3.__webglMultisampledFramebuffer);
        } else if (e2.depthBuffer && false === e2.resolveDepthBuffer && l2) {
          const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT;
          t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, [n2]);
        }
      }
    }, this.setupDepthRenderbuffer = N, this.setupFrameBufferTexture = L, this.useMultisampledRTT = B;
  }
  function ql(t2, e) {
    return { convert: function(n, i = "") {
      let r;
      const s = mi.getTransfer(i);
      if (n === Et) return t2.UNSIGNED_BYTE;
      if (n === Nt) return t2.UNSIGNED_SHORT_4_4_4_4;
      if (n === Dt) return t2.UNSIGNED_SHORT_5_5_5_1;
      if (n === Ft) return t2.UNSIGNED_INT_5_9_9_9_REV;
      if (n === At) return t2.BYTE;
      if (n === Rt) return t2.SHORT;
      if (n === Ct) return t2.UNSIGNED_SHORT;
      if (n === Pt) return t2.INT;
      if (n === It) return t2.UNSIGNED_INT;
      if (n === Lt) return t2.FLOAT;
      if (n === Ut) return t2.HALF_FLOAT;
      if (n === Bt) return t2.ALPHA;
      if (n === zt) return t2.RGB;
      if (n === kt) return t2.RGBA;
      if (n === Vt) return t2.LUMINANCE;
      if (n === Ht) return t2.LUMINANCE_ALPHA;
      if (n === Gt) return t2.DEPTH_COMPONENT;
      if (n === Wt) return t2.DEPTH_STENCIL;
      if (n === Xt) return t2.RED;
      if (n === jt) return t2.RED_INTEGER;
      if (n === qt) return t2.RG;
      if (n === Yt) return t2.RG_INTEGER;
      if (n === Jt) return t2.RGBA_INTEGER;
      if (n === Kt || n === $t || n === Qt || n === te) if (s === en) {
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
        if (n === Kt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === $t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === Qt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === te) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
        if (n === Kt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === $t) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Qt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === te) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n === ee || n === ne || n === ie || n === re) {
        if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
        if (n === ee) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ne) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ie) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === re) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === se || n === ae || n === oe) {
        if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
        if (n === se || n === ae) return s === en ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === oe) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n === le || n === ce || n === he || n === ue || n === de || n === pe || n === me || n === fe || n === ge || n === ve || n === _e || n === xe || n === ye || n === Me) {
        if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
        if (n === le) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ce) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === he) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ue) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === de) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === pe) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === me) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === fe) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ge) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ve) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === _e) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === xe) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === ye) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Me) return s === en ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === Se || n === be || n === we) {
        if (r = e.get("EXT_texture_compression_bptc"), null === r) return null;
        if (n === Se) return s === en ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === be) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === we) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n === Te || n === Ee || n === Ae || n === Re) {
        if (r = e.get("EXT_texture_compression_rgtc"), null === r) return null;
        if (n === Se) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ee) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ae) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Re) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === Ot ? t2.UNSIGNED_INT_24_8 : void 0 !== t2[n] ? t2[n] : null;
    } };
  }
  var Yl = class extends Qs {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.cameras = t2;
    }
  };
  var Zl = class extends Dr {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var Jl = { type: "move" };
  var Kl = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new Zl(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new Zl(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Li(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Li()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new Zl(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Li(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Li()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e = this._hand;
        if (e) for (const n of t2.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e, n) {
      let i = null, r = null, s = null;
      const a = this._targetRay, o = this._grip, l2 = this._hand;
      if (t2 && "visible-blurred" !== e.session.visibilityState) {
        if (l2 && t2.hand) {
          s = true;
          for (const i3 of t2.hand.values()) {
            const t3 = e.getJointPose(i3, n), r3 = this._getHandJoint(l2, i3);
            null !== t3 && (r3.matrix.fromArray(t3.transform.matrix), r3.matrix.decompose(r3.position, r3.rotation, r3.scale), r3.matrixWorldNeedsUpdate = true, r3.jointRadius = t3.radius), r3.visible = null !== t3;
          }
          const i2 = l2.joints["index-finger-tip"], r2 = l2.joints["thumb-tip"], a2 = i2.position.distanceTo(r2.position), o2 = 0.02, c2 = 5e-3;
          l2.inputState.pinching && a2 > o2 + c2 ? (l2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !l2.inputState.pinching && a2 <= o2 - c2 && (l2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o && t2.gripSpace && (r = e.getPose(t2.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false));
        null !== a && (i = e.getPose(t2.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Jl)));
      }
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l2 && (l2.visible = null !== s), this;
    }
    _getHandJoint(t2, e) {
      if (void 0 === t2.joints[e.jointName]) {
        const n = new Zl();
        n.matrixAutoUpdate = false, n.visible = false, t2.joints[e.jointName] = n, t2.add(n);
      }
      return t2.joints[e.jointName];
    }
  };
  var $l = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(t2, e, n) {
      if (null === this.texture) {
        const i = new bi();
        t2.properties.get(i).__webglTexture = e.texture, e.depthNear == n.depthNear && e.depthFar == n.depthFar || (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
      }
    }
    getMesh(t2) {
      if (null !== this.texture && null === this.mesh) {
        const e = t2.cameras[0].viewport, n = new Ys({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
        this.mesh = new Vs(new pa(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var Ql = class extends Hn {
    constructor(t2, e) {
      super();
      const n = this;
      let i = null, r = 1, s = null, a = "local-floor", o = 1, l2 = null, c2 = null, h2 = null, u2 = null, d2 = null, p2 = null;
      const m = new $l(), f = e.getContextAttributes();
      let g = null, v = null;
      const _ = [], x = [], y2 = new ti();
      let M = null;
      const S = new Qs();
      S.layers.enable(1), S.viewport = new wi();
      const b = new Qs();
      b.layers.enable(2), b.viewport = new wi();
      const w = [S, b], T = new Yl();
      T.layers.enable(1), T.layers.enable(2);
      let E = null, A = null;
      function R(t3) {
        const e2 = x.indexOf(t3.inputSource);
        if (-1 === e2) return;
        const n2 = _[e2];
        void 0 !== n2 && (n2.update(t3.inputSource, t3.frame, l2 || s), n2.dispatchEvent({ type: t3.type, data: t3.inputSource }));
      }
      function C3() {
        i.removeEventListener("select", R), i.removeEventListener("selectstart", R), i.removeEventListener("selectend", R), i.removeEventListener("squeeze", R), i.removeEventListener("squeezestart", R), i.removeEventListener("squeezeend", R), i.removeEventListener("end", C3), i.removeEventListener("inputsourceschange", P2);
        for (let t3 = 0; t3 < _.length; t3++) {
          const e2 = x[t3];
          null !== e2 && (x[t3] = null, _[t3].disconnect(e2));
        }
        E = null, A = null, m.reset(), t2.setRenderTarget(g), d2 = null, u2 = null, h2 = null, i = null, v = null, D.stop(), n.isPresenting = false, t2.setPixelRatio(M), t2.setSize(y2.width, y2.height, false), n.dispatchEvent({ type: "sessionend" });
      }
      function P2(t3) {
        for (let e2 = 0; e2 < t3.removed.length; e2++) {
          const n2 = t3.removed[e2], i2 = x.indexOf(n2);
          i2 >= 0 && (x[i2] = null, _[i2].disconnect(n2));
        }
        for (let e2 = 0; e2 < t3.added.length; e2++) {
          const n2 = t3.added[e2];
          let i2 = x.indexOf(n2);
          if (-1 === i2) {
            for (let t4 = 0; t4 < _.length; t4++) {
              if (t4 >= x.length) {
                x.push(n2), i2 = t4;
                break;
              }
              if (null === x[t4]) {
                x[t4] = n2, i2 = t4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r2 = _[i2];
          r2 && r2.connect(n2);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Kl(), _[t3] = e2), e2.getTargetRaySpace();
      }, this.getControllerGrip = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Kl(), _[t3] = e2), e2.getGripSpace();
      }, this.getHand = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Kl(), _[t3] = e2), e2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(t3) {
        r = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(t3) {
        a = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return l2 || s;
      }, this.setReferenceSpace = function(t3) {
        l2 = t3;
      }, this.getBaseLayer = function() {
        return null !== u2 ? u2 : d2;
      }, this.getBinding = function() {
        return h2;
      }, this.getFrame = function() {
        return p2;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(c3) {
        if (i = c3, null !== i) {
          if (g = t2.getRenderTarget(), i.addEventListener("select", R), i.addEventListener("selectstart", R), i.addEventListener("selectend", R), i.addEventListener("squeeze", R), i.addEventListener("squeezestart", R), i.addEventListener("squeezeend", R), i.addEventListener("end", C3), i.addEventListener("inputsourceschange", P2), true !== f.xrCompatible && await e.makeXRCompatible(), M = t2.getPixelRatio(), t2.getSize(y2), void 0 === i.renderState.layers) {
            const n2 = { antialias: f.antialias, alpha: true, depth: f.depth, stencil: f.stencil, framebufferScaleFactor: r };
            d2 = new XRWebGLLayer(i, e, n2), i.updateRenderState({ baseLayer: d2 }), t2.setPixelRatio(1), t2.setSize(d2.framebufferWidth, d2.framebufferHeight, false), v = new Ei(d2.framebufferWidth, d2.framebufferHeight, { format: kt, type: Et, colorSpace: t2.outputColorSpace, stencilBuffer: f.stencil });
          } else {
            let n2 = null, s2 = null, a2 = null;
            f.depth && (a2 = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n2 = f.stencil ? Wt : Gt, s2 = f.stencil ? Ot : It);
            const o2 = { colorFormat: e.RGBA8, depthFormat: a2, scaleFactor: r };
            h2 = new XRWebGLBinding(i, e), u2 = h2.createProjectionLayer(o2), i.updateRenderState({ layers: [u2] }), t2.setPixelRatio(1), t2.setSize(u2.textureWidth, u2.textureHeight, false), v = new Ei(u2.textureWidth, u2.textureHeight, { format: kt, type: Et, depthTexture: new Ka(u2.textureWidth, u2.textureHeight, s2, void 0, void 0, void 0, void 0, void 0, void 0, n2), stencilBuffer: f.stencil, colorSpace: t2.outputColorSpace, samples: f.antialias ? 4 : 0, resolveDepthBuffer: false === u2.ignoreDepthValues });
          }
          v.isXRRenderTarget = true, this.setFoveation(o), l2 = null, s = await i.requestReferenceSpace(a), D.setContext(i), D.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== i) return i.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return m.getDepthTexture();
      };
      const I = new Li(), L = new Li();
      function U(t3, e2) {
        null === e2 ? t3.matrixWorld.copy(t3.matrix) : t3.matrixWorld.multiplyMatrices(e2.matrixWorld, t3.matrix), t3.matrixWorldInverse.copy(t3.matrixWorld).invert();
      }
      this.updateCamera = function(t3) {
        if (null === i) return;
        let e2 = t3.near, n2 = t3.far;
        null !== m.texture && (m.depthNear > 0 && (e2 = m.depthNear), m.depthFar > 0 && (n2 = m.depthFar)), T.near = b.near = S.near = e2, T.far = b.far = S.far = n2, E === T.near && A === T.far || (i.updateRenderState({ depthNear: T.near, depthFar: T.far }), E = T.near, A = T.far);
        const r2 = t3.parent, s2 = T.cameras;
        U(T, r2);
        for (let t4 = 0; t4 < s2.length; t4++) U(s2[t4], r2);
        2 === s2.length ? (function(t4, e3, n3) {
          I.setFromMatrixPosition(e3.matrixWorld), L.setFromMatrixPosition(n3.matrixWorld);
          const i2 = I.distanceTo(L), r3 = e3.projectionMatrix.elements, s3 = n3.projectionMatrix.elements, a2 = r3[14] / (r3[10] - 1), o2 = r3[14] / (r3[10] + 1), l3 = (r3[9] + 1) / r3[5], c3 = (r3[9] - 1) / r3[5], h3 = (r3[8] - 1) / r3[0], u3 = (s3[8] + 1) / s3[0], d3 = a2 * h3, p3 = a2 * u3, m2 = i2 / (-h3 + u3), f2 = m2 * -h3;
          if (e3.matrixWorld.decompose(t4.position, t4.quaternion, t4.scale), t4.translateX(f2), t4.translateZ(m2), t4.matrixWorld.compose(t4.position, t4.quaternion, t4.scale), t4.matrixWorldInverse.copy(t4.matrixWorld).invert(), -1 === r3[10]) t4.projectionMatrix.copy(e3.projectionMatrix), t4.projectionMatrixInverse.copy(e3.projectionMatrixInverse);
          else {
            const e4 = a2 + m2, n4 = o2 + m2, r4 = d3 - f2, s4 = p3 + (i2 - f2), h4 = l3 * o2 / n4 * e4, u4 = c3 * o2 / n4 * e4;
            t4.projectionMatrix.makePerspective(r4, s4, h4, u4, e4, n4), t4.projectionMatrixInverse.copy(t4.projectionMatrix).invert();
          }
        })(T, S, b) : T.projectionMatrix.copy(S.projectionMatrix), (function(t4, e3, n3) {
          null === n3 ? t4.matrix.copy(e3.matrixWorld) : (t4.matrix.copy(n3.matrixWorld), t4.matrix.invert(), t4.matrix.multiply(e3.matrixWorld));
          t4.matrix.decompose(t4.position, t4.quaternion, t4.scale), t4.updateMatrixWorld(true), t4.projectionMatrix.copy(e3.projectionMatrix), t4.projectionMatrixInverse.copy(e3.projectionMatrixInverse), t4.isPerspectiveCamera && (t4.fov = 2 * jn * Math.atan(1 / t4.projectionMatrix.elements[5]), t4.zoom = 1);
        })(t3, T, r2);
      }, this.getCamera = function() {
        return T;
      }, this.getFoveation = function() {
        if (null !== u2 || null !== d2) return o;
      }, this.setFoveation = function(t3) {
        o = t3, null !== u2 && (u2.fixedFoveation = t3), null !== d2 && void 0 !== d2.fixedFoveation && (d2.fixedFoveation = t3);
      }, this.hasDepthSensing = function() {
        return null !== m.texture;
      }, this.getDepthSensingMesh = function() {
        return m.getMesh(T);
      };
      let N = null;
      const D = new ua();
      D.setAnimationLoop((function(e2, r2) {
        if (c2 = r2.getViewerPose(l2 || s), p2 = r2, null !== c2) {
          const e3 = c2.views;
          null !== d2 && (t2.setRenderTargetFramebuffer(v, d2.framebuffer), t2.setRenderTarget(v));
          let n2 = false;
          e3.length !== T.cameras.length && (T.cameras.length = 0, n2 = true);
          for (let i2 = 0; i2 < e3.length; i2++) {
            const r4 = e3[i2];
            let s2 = null;
            if (null !== d2) s2 = d2.getViewport(r4);
            else {
              const e4 = h2.getViewSubImage(u2, r4);
              s2 = e4.viewport, 0 === i2 && (t2.setRenderTargetTextures(v, e4.colorTexture, u2.ignoreDepthValues ? void 0 : e4.depthStencilTexture), t2.setRenderTarget(v));
            }
            let a2 = w[i2];
            void 0 === a2 && (a2 = new Qs(), a2.layers.enable(i2), a2.viewport = new wi(), w[i2] = a2), a2.matrix.fromArray(r4.transform.matrix), a2.matrix.decompose(a2.position, a2.quaternion, a2.scale), a2.projectionMatrix.fromArray(r4.projectionMatrix), a2.projectionMatrixInverse.copy(a2.projectionMatrix).invert(), a2.viewport.set(s2.x, s2.y, s2.width, s2.height), 0 === i2 && (T.matrix.copy(a2.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), true === n2 && T.cameras.push(a2);
          }
          const r3 = i.enabledFeatures;
          if (r3 && r3.includes("depth-sensing")) {
            const n3 = h2.getDepthInformation(e3[0]);
            n3 && n3.isValid && n3.texture && m.init(t2, n3, i.renderState);
          }
        }
        for (let t3 = 0; t3 < _.length; t3++) {
          const e3 = x[t3], n2 = _[t3];
          null !== e3 && void 0 !== n2 && n2.update(e3, r2, l2 || s);
        }
        N && N(e2, r2), r2.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: r2 }), p2 = null;
      })), this.setAnimationLoop = function(t3) {
        N = t3;
      }, this.dispose = function() {
      };
    }
  };
  var tc = new _r();
  var ec = new lr();
  function nc(t2, e) {
    function n(t3, e2) {
      true === t3.matrixAutoUpdate && t3.updateMatrix(), e2.value.copy(t3.matrix);
    }
    function i(t3, i2) {
      t3.opacity.value = i2.opacity, i2.color && t3.diffuse.value.copy(i2.color), i2.emissive && t3.emissive.value.copy(i2.emissive).multiplyScalar(i2.emissiveIntensity), i2.map && (t3.map.value = i2.map, n(i2.map, t3.mapTransform)), i2.alphaMap && (t3.alphaMap.value = i2.alphaMap, n(i2.alphaMap, t3.alphaMapTransform)), i2.bumpMap && (t3.bumpMap.value = i2.bumpMap, n(i2.bumpMap, t3.bumpMapTransform), t3.bumpScale.value = i2.bumpScale, i2.side === d && (t3.bumpScale.value *= -1)), i2.normalMap && (t3.normalMap.value = i2.normalMap, n(i2.normalMap, t3.normalMapTransform), t3.normalScale.value.copy(i2.normalScale), i2.side === d && t3.normalScale.value.negate()), i2.displacementMap && (t3.displacementMap.value = i2.displacementMap, n(i2.displacementMap, t3.displacementMapTransform), t3.displacementScale.value = i2.displacementScale, t3.displacementBias.value = i2.displacementBias), i2.emissiveMap && (t3.emissiveMap.value = i2.emissiveMap, n(i2.emissiveMap, t3.emissiveMapTransform)), i2.specularMap && (t3.specularMap.value = i2.specularMap, n(i2.specularMap, t3.specularMapTransform)), i2.alphaTest > 0 && (t3.alphaTest.value = i2.alphaTest);
      const r = e.get(i2), s = r.envMap, a = r.envMapRotation;
      s && (t3.envMap.value = s, tc.copy(a), tc.x *= -1, tc.y *= -1, tc.z *= -1, s.isCubeTexture && false === s.isRenderTargetTexture && (tc.y *= -1, tc.z *= -1), t3.envMapRotation.value.setFromMatrix4(ec.makeRotationFromEuler(tc)), t3.flipEnvMap.value = s.isCubeTexture && false === s.isRenderTargetTexture ? -1 : 1, t3.reflectivity.value = i2.reflectivity, t3.ior.value = i2.ior, t3.refractionRatio.value = i2.refractionRatio), i2.lightMap && (t3.lightMap.value = i2.lightMap, t3.lightMapIntensity.value = i2.lightMapIntensity, n(i2.lightMap, t3.lightMapTransform)), i2.aoMap && (t3.aoMap.value = i2.aoMap, t3.aoMapIntensity.value = i2.aoMapIntensity, n(i2.aoMap, t3.aoMapTransform));
    }
    return { refreshFogUniforms: function(e2, n2) {
      n2.color.getRGB(e2.fogColor.value, js(t2)), n2.isFog ? (e2.fogNear.value = n2.near, e2.fogFar.value = n2.far) : n2.isFogExp2 && (e2.fogDensity.value = n2.density);
    }, refreshMaterialUniforms: function(t3, r, s, a, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t3, r) : r.isMeshToonMaterial ? (i(t3, r), (function(t4, e2) {
        e2.gradientMap && (t4.gradientMap.value = e2.gradientMap);
      })(t3, r)) : r.isMeshPhongMaterial ? (i(t3, r), (function(t4, e2) {
        t4.specular.value.copy(e2.specular), t4.shininess.value = Math.max(e2.shininess, 1e-4);
      })(t3, r)) : r.isMeshStandardMaterial ? (i(t3, r), (function(t4, e2) {
        t4.metalness.value = e2.metalness, e2.metalnessMap && (t4.metalnessMap.value = e2.metalnessMap, n(e2.metalnessMap, t4.metalnessMapTransform));
        t4.roughness.value = e2.roughness, e2.roughnessMap && (t4.roughnessMap.value = e2.roughnessMap, n(e2.roughnessMap, t4.roughnessMapTransform));
        e2.envMap && (t4.envMapIntensity.value = e2.envMapIntensity);
      })(t3, r), r.isMeshPhysicalMaterial && (function(t4, e2, i2) {
        t4.ior.value = e2.ior, e2.sheen > 0 && (t4.sheenColor.value.copy(e2.sheenColor).multiplyScalar(e2.sheen), t4.sheenRoughness.value = e2.sheenRoughness, e2.sheenColorMap && (t4.sheenColorMap.value = e2.sheenColorMap, n(e2.sheenColorMap, t4.sheenColorMapTransform)), e2.sheenRoughnessMap && (t4.sheenRoughnessMap.value = e2.sheenRoughnessMap, n(e2.sheenRoughnessMap, t4.sheenRoughnessMapTransform)));
        e2.clearcoat > 0 && (t4.clearcoat.value = e2.clearcoat, t4.clearcoatRoughness.value = e2.clearcoatRoughness, e2.clearcoatMap && (t4.clearcoatMap.value = e2.clearcoatMap, n(e2.clearcoatMap, t4.clearcoatMapTransform)), e2.clearcoatRoughnessMap && (t4.clearcoatRoughnessMap.value = e2.clearcoatRoughnessMap, n(e2.clearcoatRoughnessMap, t4.clearcoatRoughnessMapTransform)), e2.clearcoatNormalMap && (t4.clearcoatNormalMap.value = e2.clearcoatNormalMap, n(e2.clearcoatNormalMap, t4.clearcoatNormalMapTransform), t4.clearcoatNormalScale.value.copy(e2.clearcoatNormalScale), e2.side === d && t4.clearcoatNormalScale.value.negate()));
        e2.dispersion > 0 && (t4.dispersion.value = e2.dispersion);
        e2.iridescence > 0 && (t4.iridescence.value = e2.iridescence, t4.iridescenceIOR.value = e2.iridescenceIOR, t4.iridescenceThicknessMinimum.value = e2.iridescenceThicknessRange[0], t4.iridescenceThicknessMaximum.value = e2.iridescenceThicknessRange[1], e2.iridescenceMap && (t4.iridescenceMap.value = e2.iridescenceMap, n(e2.iridescenceMap, t4.iridescenceMapTransform)), e2.iridescenceThicknessMap && (t4.iridescenceThicknessMap.value = e2.iridescenceThicknessMap, n(e2.iridescenceThicknessMap, t4.iridescenceThicknessMapTransform)));
        e2.transmission > 0 && (t4.transmission.value = e2.transmission, t4.transmissionSamplerMap.value = i2.texture, t4.transmissionSamplerSize.value.set(i2.width, i2.height), e2.transmissionMap && (t4.transmissionMap.value = e2.transmissionMap, n(e2.transmissionMap, t4.transmissionMapTransform)), t4.thickness.value = e2.thickness, e2.thicknessMap && (t4.thicknessMap.value = e2.thicknessMap, n(e2.thicknessMap, t4.thicknessMapTransform)), t4.attenuationDistance.value = e2.attenuationDistance, t4.attenuationColor.value.copy(e2.attenuationColor));
        e2.anisotropy > 0 && (t4.anisotropyVector.value.set(e2.anisotropy * Math.cos(e2.anisotropyRotation), e2.anisotropy * Math.sin(e2.anisotropyRotation)), e2.anisotropyMap && (t4.anisotropyMap.value = e2.anisotropyMap, n(e2.anisotropyMap, t4.anisotropyMapTransform)));
        t4.specularIntensity.value = e2.specularIntensity, t4.specularColor.value.copy(e2.specularColor), e2.specularColorMap && (t4.specularColorMap.value = e2.specularColorMap, n(e2.specularColorMap, t4.specularColorMapTransform));
        e2.specularIntensityMap && (t4.specularIntensityMap.value = e2.specularIntensityMap, n(e2.specularIntensityMap, t4.specularIntensityMapTransform));
      })(t3, r, o)) : r.isMeshMatcapMaterial ? (i(t3, r), (function(t4, e2) {
        e2.matcap && (t4.matcap.value = e2.matcap);
      })(t3, r)) : r.isMeshDepthMaterial ? i(t3, r) : r.isMeshDistanceMaterial ? (i(t3, r), (function(t4, n2) {
        const i2 = e.get(n2).light;
        t4.referencePosition.value.setFromMatrixPosition(i2.matrixWorld), t4.nearDistance.value = i2.shadow.camera.near, t4.farDistance.value = i2.shadow.camera.far;
      })(t3, r)) : r.isMeshNormalMaterial ? i(t3, r) : r.isLineBasicMaterial ? ((function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
      })(t3, r), r.isLineDashedMaterial && (function(t4, e2) {
        t4.dashSize.value = e2.dashSize, t4.totalSize.value = e2.dashSize + e2.gapSize, t4.scale.value = e2.scale;
      })(t3, r)) : r.isPointsMaterial ? (function(t4, e2, i2, r2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.size.value = e2.size * i2, t4.scale.value = 0.5 * r2, e2.map && (t4.map.value = e2.map, n(e2.map, t4.uvTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r, s, a) : r.isSpriteMaterial ? (function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.rotation.value = e2.rotation, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r) : r.isShadowMaterial ? (t3.color.value.copy(r.color), t3.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = false);
    } };
  }
  function ic(t2, e, n, i) {
    let r = {}, s = {}, a = [];
    const o = t2.getParameter(t2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(t3, e2, n2, i2) {
      const r2 = t3.value, s2 = e2 + "_" + n2;
      if (void 0 === i2[s2]) return i2[s2] = "number" == typeof r2 || "boolean" == typeof r2 ? r2 : r2.clone(), true;
      {
        const t4 = i2[s2];
        if ("number" == typeof r2 || "boolean" == typeof r2) {
          if (t4 !== r2) return i2[s2] = r2, true;
        } else if (false === t4.equals(r2)) return t4.copy(r2), true;
      }
      return false;
    }
    function c2(t3) {
      const e2 = { boundary: 0, storage: 0 };
      return "number" == typeof t3 || "boolean" == typeof t3 ? (e2.boundary = 4, e2.storage = 4) : t3.isVector2 ? (e2.boundary = 8, e2.storage = 8) : t3.isVector3 || t3.isColor ? (e2.boundary = 16, e2.storage = 12) : t3.isVector4 ? (e2.boundary = 16, e2.storage = 16) : t3.isMatrix3 ? (e2.boundary = 48, e2.storage = 48) : t3.isMatrix4 ? (e2.boundary = 64, e2.storage = 64) : t3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t3), e2;
    }
    function h2(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", h2);
      const i2 = a.indexOf(n2.__bindingPointIndex);
      a.splice(i2, 1), t2.deleteBuffer(r[n2.id]), delete r[n2.id], delete s[n2.id];
    }
    return { bind: function(t3, e2) {
      const n2 = e2.program;
      i.uniformBlockBinding(t3, n2);
    }, update: function(n2, u2) {
      let d2 = r[n2.id];
      void 0 === d2 && (!(function(t3) {
        const e2 = t3.uniforms;
        let n3 = 0;
        const i2 = 16;
        for (let t4 = 0, r3 = e2.length; t4 < r3; t4++) {
          const r4 = Array.isArray(e2[t4]) ? e2[t4] : [e2[t4]];
          for (let t5 = 0, e3 = r4.length; t5 < e3; t5++) {
            const e4 = r4[t5], s2 = Array.isArray(e4.value) ? e4.value : [e4.value];
            for (let t6 = 0, r5 = s2.length; t6 < r5; t6++) {
              const r6 = c2(s2[t6]), a2 = n3 % i2, o2 = a2 % r6.boundary, l3 = a2 + o2;
              n3 += o2, 0 !== l3 && i2 - l3 < r6.storage && (n3 += i2 - l3), e4.__data = new Float32Array(r6.storage / Float32Array.BYTES_PER_ELEMENT), e4.__offset = n3, n3 += r6.storage;
            }
          }
        }
        const r2 = n3 % i2;
        r2 > 0 && (n3 += i2 - r2);
        t3.__size = n3, t3.__cache = {};
      })(n2), d2 = (function(e2) {
        const n3 = (function() {
          for (let t3 = 0; t3 < o; t3++) if (-1 === a.indexOf(t3)) return a.push(t3), t3;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        })();
        e2.__bindingPointIndex = n3;
        const i2 = t2.createBuffer(), r2 = e2.__size, s2 = e2.usage;
        return t2.bindBuffer(t2.UNIFORM_BUFFER, i2), t2.bufferData(t2.UNIFORM_BUFFER, r2, s2), t2.bindBuffer(t2.UNIFORM_BUFFER, null), t2.bindBufferBase(t2.UNIFORM_BUFFER, n3, i2), i2;
      })(n2), r[n2.id] = d2, n2.addEventListener("dispose", h2));
      const p2 = u2.program;
      i.updateUBOMapping(n2, p2);
      const m = e.render.frame;
      s[n2.id] !== m && (!(function(e2) {
        const n3 = r[e2.id], i2 = e2.uniforms, s2 = e2.__cache;
        t2.bindBuffer(t2.UNIFORM_BUFFER, n3);
        for (let e3 = 0, n4 = i2.length; e3 < n4; e3++) {
          const n5 = Array.isArray(i2[e3]) ? i2[e3] : [i2[e3]];
          for (let i3 = 0, r2 = n5.length; i3 < r2; i3++) {
            const r3 = n5[i3];
            if (true === l2(r3, e3, i3, s2)) {
              const e4 = r3.__offset, n6 = Array.isArray(r3.value) ? r3.value : [r3.value];
              let i4 = 0;
              for (let s3 = 0; s3 < n6.length; s3++) {
                const a2 = n6[s3], o2 = c2(a2);
                "number" == typeof a2 || "boolean" == typeof a2 ? (r3.__data[0] = a2, t2.bufferSubData(t2.UNIFORM_BUFFER, e4 + i4, r3.__data)) : a2.isMatrix3 ? (r3.__data[0] = a2.elements[0], r3.__data[1] = a2.elements[1], r3.__data[2] = a2.elements[2], r3.__data[3] = 0, r3.__data[4] = a2.elements[3], r3.__data[5] = a2.elements[4], r3.__data[6] = a2.elements[5], r3.__data[7] = 0, r3.__data[8] = a2.elements[6], r3.__data[9] = a2.elements[7], r3.__data[10] = a2.elements[8], r3.__data[11] = 0) : (a2.toArray(r3.__data, i4), i4 += o2.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              t2.bufferSubData(t2.UNIFORM_BUFFER, e4, r3.__data);
            }
          }
        }
        t2.bindBuffer(t2.UNIFORM_BUFFER, null);
      })(n2), s[n2.id] = m);
    }, dispose: function() {
      for (const e2 in r) t2.deleteBuffer(r[e2]);
      a = [], r = {}, s = {};
    } };
  }
  var rc = class {
    constructor(e = {}) {
      const { canvas: n = oi(), context: i = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l2 = true, preserveDrawingBuffer: c2 = false, powerPreference: h2 = "default", failIfMajorPerformanceCaveat: p2 = false } = e;
      let m;
      if (this.isWebGLRenderer = true, null !== i) {
        if ("undefined" != typeof WebGLRenderingContext && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        m = i.getContextAttributes().alpha;
      } else m = a;
      const f = new Uint32Array(4), g = new Int32Array(4);
      let v = null, _ = null;
      const x = [], y2 = [];
      this.domElement = n, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Je, this.toneMapping = K, this.toneMappingExposure = 1;
      const M = this;
      let S = false, b = 0, w = 0, T = null, E = -1, A = null;
      const R = new wi(), C3 = new wi();
      let P2 = null;
      const I = new ts(0);
      let L = 0, U = n.width, N = n.height, D = 1, O = null, F = null;
      const B = new wi(0, 0, U, N), z = new wi(0, 0, U, N);
      let k = false;
      const V = new ha();
      let H = false, G = false;
      const W = new lr(), X = new lr(), j = new Li(), q = new wi(), Y2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let Z2 = false;
      function J2() {
        return null === T ? D : 1;
      }
      let $2, Q2, tt2, et2, nt2, it2, rt2, st, at, ot2, lt2, ct2, ht2, ut2, dt2, pt2, mt2, ft2, gt2, vt2, _t, xt2, yt, Mt2, St2 = i;
      function bt(t2, e2) {
        return n.getContext(t2, e2);
      }
      try {
        const e2 = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l2, preserveDrawingBuffer: c2, powerPreference: h2, failIfMajorPerformanceCaveat: p2 };
        if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`), n.addEventListener("webglcontextlost", Rt2, false), n.addEventListener("webglcontextrestored", Pt2, false), n.addEventListener("webglcontextcreationerror", Lt2, false), null === St2) {
          const t2 = "webgl2";
          if (St2 = bt(t2, e2), null === St2) throw bt(t2) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (t2) {
        throw console.error("THREE.WebGLRenderer: " + t2.message), t2;
      }
      function Tt() {
        $2 = new Xa(St2), $2.init(), xt2 = new ql(St2, $2), Q2 = new ba(St2, $2, e, xt2), tt2 = new Gl(St2), Q2.reverseDepthBuffer && tt2.buffers.depth.setReversed(true), et2 = new Ya(St2), nt2 = new Rl(), it2 = new jl(St2, $2, tt2, nt2, Q2, xt2, et2), rt2 = new Ta(M), st = new Wa(M), at = new da(St2), yt = new Ma(St2, at), ot2 = new ja(St2, at, et2, yt), lt2 = new Ja(St2, ot2, at, et2), gt2 = new Za(St2, Q2, it2), pt2 = new wa(nt2), ct2 = new Al(M, rt2, st, $2, Q2, yt, pt2), ht2 = new nc(M, nt2), ut2 = new Ll(), dt2 = new Bl($2), ft2 = new ya(M, rt2, st, tt2, lt2, m, l2), mt2 = new Vl(M, lt2, Q2), Mt2 = new ic(St2, et2, Q2, tt2), vt2 = new Sa(St2, $2, et2), _t = new qa(St2, $2, et2), et2.programs = ct2.programs, M.capabilities = Q2, M.extensions = $2, M.properties = nt2, M.renderLists = ut2, M.shadowMap = mt2, M.state = tt2, M.info = et2;
      }
      Tt();
      const At2 = new Ql(M, St2);
      function Rt2(t2) {
        t2.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = true;
      }
      function Pt2() {
        console.log("THREE.WebGLRenderer: Context Restored."), S = false;
        const t2 = et2.autoReset, e2 = mt2.enabled, n2 = mt2.autoUpdate, i2 = mt2.needsUpdate, r2 = mt2.type;
        Tt(), et2.autoReset = t2, mt2.enabled = e2, mt2.autoUpdate = n2, mt2.needsUpdate = i2, mt2.type = r2;
      }
      function Lt2(t2) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t2.statusMessage);
      }
      function Ft2(t2) {
        const e2 = t2.target;
        e2.removeEventListener("dispose", Ft2), (function(t3) {
          (function(t4) {
            const e3 = nt2.get(t4).programs;
            void 0 !== e3 && (e3.forEach((function(t5) {
              ct2.releaseProgram(t5);
            })), t4.isShaderMaterial && ct2.releaseShaderCache(t4));
          })(t3), nt2.remove(t3);
        })(e2);
      }
      function Bt2(t2, e2, n2) {
        true === t2.transparent && 2 === t2.side && false === t2.forceSinglePass ? (t2.side = d, t2.needsUpdate = true, Kt2(t2, e2, n2), t2.side = u, t2.needsUpdate = true, Kt2(t2, e2, n2), t2.side = 2) : Kt2(t2, e2, n2);
      }
      this.xr = At2, this.getContext = function() {
        return St2;
      }, this.getContextAttributes = function() {
        return St2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const t2 = $2.get("WEBGL_lose_context");
        t2 && t2.loseContext();
      }, this.forceContextRestore = function() {
        const t2 = $2.get("WEBGL_lose_context");
        t2 && t2.restoreContext();
      }, this.getPixelRatio = function() {
        return D;
      }, this.setPixelRatio = function(t2) {
        void 0 !== t2 && (D = t2, this.setSize(U, N, false));
      }, this.getSize = function(t2) {
        return t2.set(U, N);
      }, this.setSize = function(t2, e2, i2 = true) {
        At2.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (U = t2, N = e2, n.width = Math.floor(t2 * D), n.height = Math.floor(e2 * D), true === i2 && (n.style.width = t2 + "px", n.style.height = e2 + "px"), this.setViewport(0, 0, t2, e2));
      }, this.getDrawingBufferSize = function(t2) {
        return t2.set(U * D, N * D).floor();
      }, this.setDrawingBufferSize = function(t2, e2, i2) {
        U = t2, N = e2, D = i2, n.width = Math.floor(t2 * i2), n.height = Math.floor(e2 * i2), this.setViewport(0, 0, t2, e2);
      }, this.getCurrentViewport = function(t2) {
        return t2.copy(R);
      }, this.getViewport = function(t2) {
        return t2.copy(B);
      }, this.setViewport = function(t2, e2, n2, i2) {
        t2.isVector4 ? B.set(t2.x, t2.y, t2.z, t2.w) : B.set(t2, e2, n2, i2), tt2.viewport(R.copy(B).multiplyScalar(D).round());
      }, this.getScissor = function(t2) {
        return t2.copy(z);
      }, this.setScissor = function(t2, e2, n2, i2) {
        t2.isVector4 ? z.set(t2.x, t2.y, t2.z, t2.w) : z.set(t2, e2, n2, i2), tt2.scissor(C3.copy(z).multiplyScalar(D).round());
      }, this.getScissorTest = function() {
        return k;
      }, this.setScissorTest = function(t2) {
        tt2.setScissorTest(k = t2);
      }, this.setOpaqueSort = function(t2) {
        O = t2;
      }, this.setTransparentSort = function(t2) {
        F = t2;
      }, this.getClearColor = function(t2) {
        return t2.copy(ft2.getClearColor());
      }, this.setClearColor = function() {
        ft2.setClearColor.apply(ft2, arguments);
      }, this.getClearAlpha = function() {
        return ft2.getClearAlpha();
      }, this.setClearAlpha = function() {
        ft2.setClearAlpha.apply(ft2, arguments);
      }, this.clear = function(t2 = true, e2 = true, n2 = true) {
        let i2 = 0;
        if (t2) {
          let t3 = false;
          if (null !== T) {
            const e3 = T.texture.format;
            t3 = e3 === Jt || e3 === Yt || e3 === jt;
          }
          if (t3) {
            const t4 = T.texture.type, e3 = t4 === Et || t4 === It || t4 === Ct || t4 === Ot || t4 === Nt || t4 === Dt, n3 = ft2.getClearColor(), i3 = ft2.getClearAlpha(), r2 = n3.r, s2 = n3.g, a2 = n3.b;
            e3 ? (f[0] = r2, f[1] = s2, f[2] = a2, f[3] = i3, St2.clearBufferuiv(St2.COLOR, 0, f)) : (g[0] = r2, g[1] = s2, g[2] = a2, g[3] = i3, St2.clearBufferiv(St2.COLOR, 0, g));
          } else i2 |= St2.COLOR_BUFFER_BIT;
        }
        e2 && (i2 |= St2.DEPTH_BUFFER_BIT, St2.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), n2 && (i2 |= St2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), St2.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        n.removeEventListener("webglcontextlost", Rt2, false), n.removeEventListener("webglcontextrestored", Pt2, false), n.removeEventListener("webglcontextcreationerror", Lt2, false), ut2.dispose(), dt2.dispose(), nt2.dispose(), rt2.dispose(), st.dispose(), lt2.dispose(), yt.dispose(), Mt2.dispose(), ct2.dispose(), At2.dispose(), At2.removeEventListener("sessionstart", kt2), At2.removeEventListener("sessionend", Vt2), Ht2.stop();
      }, this.renderBufferDirect = function(t2, e2, n2, i2, r2, s2) {
        null === e2 && (e2 = Y2);
        const a2 = r2.isMesh && r2.matrixWorld.determinant() < 0, o2 = (function(t3, e3, n3, i3, r3) {
          true !== e3.isScene && (e3 = Y2);
          it2.resetTextureUnits();
          const s3 = e3.fog, a3 = i3.isMeshStandardMaterial ? e3.environment : null, o3 = null === T ? M.outputColorSpace : true === T.isXRRenderTarget ? T.texture.colorSpace : Ke, l4 = (i3.isMeshStandardMaterial ? st : rt2).get(i3.envMap || a3), c4 = true === i3.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, h4 = !!n3.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), u3 = !!n3.morphAttributes.position, d3 = !!n3.morphAttributes.normal, p4 = !!n3.morphAttributes.color;
          let m3 = K;
          i3.toneMapped && (null !== T && true !== T.isXRRenderTarget || (m3 = M.toneMapping));
          const f3 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, g3 = void 0 !== f3 ? f3.length : 0, v2 = nt2.get(i3), x2 = _.state.lights;
          if (true === H && (true === G || t3 !== A)) {
            const e4 = t3 === A && i3.id === E;
            pt2.setState(i3, t3, e4);
          }
          let y3 = false;
          i3.version === v2.__version ? v2.needsLights && v2.lightsStateVersion !== x2.state.version || v2.outputColorSpace !== o3 || r3.isBatchedMesh && false === v2.batching ? y3 = true : r3.isBatchedMesh || true !== v2.batching ? r3.isBatchedMesh && true === v2.batchingColor && null === r3.colorTexture || r3.isBatchedMesh && false === v2.batchingColor && null !== r3.colorTexture || r3.isInstancedMesh && false === v2.instancing ? y3 = true : r3.isInstancedMesh || true !== v2.instancing ? r3.isSkinnedMesh && false === v2.skinning ? y3 = true : r3.isSkinnedMesh || true !== v2.skinning ? r3.isInstancedMesh && true === v2.instancingColor && null === r3.instanceColor || r3.isInstancedMesh && false === v2.instancingColor && null !== r3.instanceColor || r3.isInstancedMesh && true === v2.instancingMorph && null === r3.morphTexture || r3.isInstancedMesh && false === v2.instancingMorph && null !== r3.morphTexture || v2.envMap !== l4 || true === i3.fog && v2.fog !== s3 ? y3 = true : void 0 === v2.numClippingPlanes || v2.numClippingPlanes === pt2.numPlanes && v2.numIntersection === pt2.numIntersection ? (v2.vertexAlphas !== c4 || v2.vertexTangents !== h4 || v2.morphTargets !== u3 || v2.morphNormals !== d3 || v2.morphColors !== p4 || v2.toneMapping !== m3 || v2.morphTargetsCount !== g3) && (y3 = true) : y3 = true : y3 = true : y3 = true : y3 = true : (y3 = true, v2.__version = i3.version);
          let S2 = v2.currentProgram;
          true === y3 && (S2 = Kt2(i3, e3, r3));
          let b2 = false, w2 = false, R2 = false;
          const C4 = S2.getUniforms(), P3 = v2.uniforms;
          tt2.useProgram(S2.program) && (b2 = true, w2 = true, R2 = true);
          i3.id !== E && (E = i3.id, w2 = true);
          if (b2 || A !== t3) {
            Q2.reverseDepthBuffer ? (W.copy(t3.projectionMatrix), (function(t4) {
              const e5 = t4.elements;
              e5[2] = 0.5 * e5[2] + 0.5 * e5[3], e5[6] = 0.5 * e5[6] + 0.5 * e5[7], e5[10] = 0.5 * e5[10] + 0.5 * e5[11], e5[14] = 0.5 * e5[14] + 0.5 * e5[15];
            })(W), (function(t4) {
              const e5 = t4.elements;
              -1 === e5[11] ? (e5[10] = -e5[10] - 1, e5[14] = -e5[14]) : (e5[10] = -e5[10], e5[14] = 1 - e5[14]);
            })(W), C4.setValue(St2, "projectionMatrix", W)) : C4.setValue(St2, "projectionMatrix", t3.projectionMatrix), C4.setValue(St2, "viewMatrix", t3.matrixWorldInverse);
            const e4 = C4.map.cameraPosition;
            void 0 !== e4 && e4.setValue(St2, j.setFromMatrixPosition(t3.matrixWorld)), Q2.logarithmicDepthBuffer && C4.setValue(St2, "logDepthBufFC", 2 / (Math.log(t3.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C4.setValue(St2, "isOrthographic", true === t3.isOrthographicCamera), A !== t3 && (A = t3, w2 = true, R2 = true);
          }
          if (r3.isSkinnedMesh) {
            C4.setOptional(St2, r3, "bindMatrix"), C4.setOptional(St2, r3, "bindMatrixInverse");
            const t4 = r3.skeleton;
            t4 && (null === t4.boneTexture && t4.computeBoneTexture(), C4.setValue(St2, "boneTexture", t4.boneTexture, it2));
          }
          r3.isBatchedMesh && (C4.setOptional(St2, r3, "batchingTexture"), C4.setValue(St2, "batchingTexture", r3._matricesTexture, it2), C4.setOptional(St2, r3, "batchingIdTexture"), C4.setValue(St2, "batchingIdTexture", r3._indirectTexture, it2), C4.setOptional(St2, r3, "batchingColorTexture"), null !== r3._colorsTexture && C4.setValue(St2, "batchingColorTexture", r3._colorsTexture, it2));
          const I2 = n3.morphAttributes;
          void 0 === I2.position && void 0 === I2.normal && void 0 === I2.color || gt2.update(r3, n3, S2);
          (w2 || v2.receiveShadow !== r3.receiveShadow) && (v2.receiveShadow = r3.receiveShadow, C4.setValue(St2, "receiveShadow", r3.receiveShadow));
          i3.isMeshGouraudMaterial && null !== i3.envMap && (P3.envMap.value = l4, P3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
          i3.isMeshStandardMaterial && null === i3.envMap && null !== e3.environment && (P3.envMapIntensity.value = e3.environmentIntensity);
          w2 && (C4.setValue(St2, "toneMappingExposure", M.toneMappingExposure), v2.needsLights && (U2 = R2, (L2 = P3).ambientLightColor.needsUpdate = U2, L2.lightProbe.needsUpdate = U2, L2.directionalLights.needsUpdate = U2, L2.directionalLightShadows.needsUpdate = U2, L2.pointLights.needsUpdate = U2, L2.pointLightShadows.needsUpdate = U2, L2.spotLights.needsUpdate = U2, L2.spotLightShadows.needsUpdate = U2, L2.rectAreaLights.needsUpdate = U2, L2.hemisphereLights.needsUpdate = U2), s3 && true === i3.fog && ht2.refreshFogUniforms(P3, s3), ht2.refreshMaterialUniforms(P3, i3, D, N, _.state.transmissionRenderTarget[t3.id]), il.upload(St2, $t2(v2), P3, it2));
          var L2, U2;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (il.upload(St2, $t2(v2), P3, it2), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C4.setValue(St2, "center", r3.center);
          if (C4.setValue(St2, "modelViewMatrix", r3.modelViewMatrix), C4.setValue(St2, "normalMatrix", r3.normalMatrix), C4.setValue(St2, "modelMatrix", r3.matrixWorld), i3.isShaderMaterial || i3.isRawShaderMaterial) {
            const t4 = i3.uniformsGroups;
            for (let e4 = 0, n4 = t4.length; e4 < n4; e4++) {
              const n5 = t4[e4];
              Mt2.update(n5, S2), Mt2.bind(n5, S2);
            }
          }
          return S2;
        })(t2, e2, n2, i2, r2);
        tt2.setMaterial(i2, a2);
        let l3 = n2.index, c3 = 1;
        if (true === i2.wireframe) {
          if (l3 = ot2.getWireframeAttribute(n2), void 0 === l3) return;
          c3 = 2;
        }
        const h3 = n2.drawRange, u2 = n2.attributes.position;
        let d2 = h3.start * c3, p3 = (h3.start + h3.count) * c3;
        null !== s2 && (d2 = Math.max(d2, s2.start * c3), p3 = Math.min(p3, (s2.start + s2.count) * c3)), null !== l3 ? (d2 = Math.max(d2, 0), p3 = Math.min(p3, l3.count)) : null != u2 && (d2 = Math.max(d2, 0), p3 = Math.min(p3, u2.count));
        const m2 = p3 - d2;
        if (m2 < 0 || m2 === 1 / 0) return;
        let f2;
        yt.setup(r2, i2, o2, n2, l3);
        let g2 = vt2;
        if (null !== l3 && (f2 = at.get(l3), g2 = _t, g2.setIndex(f2)), r2.isMesh) true === i2.wireframe ? (tt2.setLineWidth(i2.wireframeLinewidth * J2()), g2.setMode(St2.LINES)) : g2.setMode(St2.TRIANGLES);
        else if (r2.isLine) {
          let t3 = i2.linewidth;
          void 0 === t3 && (t3 = 1), tt2.setLineWidth(t3 * J2()), r2.isLineSegments ? g2.setMode(St2.LINES) : r2.isLineLoop ? g2.setMode(St2.LINE_LOOP) : g2.setMode(St2.LINE_STRIP);
        } else r2.isPoints ? g2.setMode(St2.POINTS) : r2.isSprite && g2.setMode(St2.TRIANGLES);
        if (r2.isBatchedMesh) if (null !== r2._multiDrawInstances) g2.renderMultiDrawInstances(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount, r2._multiDrawInstances);
        else if ($2.get("WEBGL_multi_draw")) g2.renderMultiDraw(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount);
        else {
          const t3 = r2._multiDrawStarts, e3 = r2._multiDrawCounts, n3 = r2._multiDrawCount, s3 = l3 ? at.get(l3).bytesPerElement : 1, a3 = nt2.get(i2).currentProgram.getUniforms();
          for (let i3 = 0; i3 < n3; i3++) a3.setValue(St2, "_gl_DrawID", i3), g2.render(t3[i3] / s3, e3[i3]);
        }
        else if (r2.isInstancedMesh) g2.renderInstances(d2, m2, r2.count);
        else if (n2.isInstancedBufferGeometry) {
          const t3 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, e3 = Math.min(n2.instanceCount, t3);
          g2.renderInstances(d2, m2, e3);
        } else g2.render(d2, m2);
      }, this.compile = function(t2, e2, n2 = null) {
        null === n2 && (n2 = t2), _ = dt2.get(n2), _.init(e2), y2.push(_), n2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (_.pushLight(t3), t3.castShadow && _.pushShadow(t3));
        })), t2 !== n2 && t2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (_.pushLight(t3), t3.castShadow && _.pushShadow(t3));
        })), _.setupLights();
        const i2 = /* @__PURE__ */ new Set();
        return t2.traverse((function(t3) {
          if (!(t3.isMesh || t3.isPoints || t3.isLine || t3.isSprite)) return;
          const e3 = t3.material;
          if (e3) if (Array.isArray(e3)) for (let r2 = 0; r2 < e3.length; r2++) {
            const s2 = e3[r2];
            Bt2(s2, n2, t3), i2.add(s2);
          }
          else Bt2(e3, n2, t3), i2.add(e3);
        })), y2.pop(), _ = null, i2;
      }, this.compileAsync = function(t2, e2, n2 = null) {
        const i2 = this.compile(t2, e2, n2);
        return new Promise(((e3) => {
          function n3() {
            i2.forEach((function(t3) {
              nt2.get(t3).currentProgram.isReady() && i2.delete(t3);
            })), 0 !== i2.size ? setTimeout(n3, 10) : e3(t2);
          }
          null !== $2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        }));
      };
      let zt2 = null;
      function kt2() {
        Ht2.stop();
      }
      function Vt2() {
        Ht2.start();
      }
      const Ht2 = new ua();
      function Gt2(t2, e2, n2, i2) {
        if (false === t2.visible) return;
        if (t2.layers.test(e2.layers)) {
          if (t2.isGroup) n2 = t2.renderOrder;
          else if (t2.isLOD) true === t2.autoUpdate && t2.update(e2);
          else if (t2.isLight) _.pushLight(t2), t2.castShadow && _.pushShadow(t2);
          else if (t2.isSprite) {
            if (!t2.frustumCulled || V.intersectsSprite(t2)) {
              i2 && q.setFromMatrixPosition(t2.matrixWorld).applyMatrix4(X);
              const e3 = lt2.update(t2), r3 = t2.material;
              r3.visible && v.push(t2, e3, r3, n2, q.z, null);
            }
          } else if ((t2.isMesh || t2.isLine || t2.isPoints) && (!t2.frustumCulled || V.intersectsObject(t2))) {
            const e3 = lt2.update(t2), r3 = t2.material;
            if (i2 && (void 0 !== t2.boundingSphere ? (null === t2.boundingSphere && t2.computeBoundingSphere(), q.copy(t2.boundingSphere.center)) : (null === e3.boundingSphere && e3.computeBoundingSphere(), q.copy(e3.boundingSphere.center)), q.applyMatrix4(t2.matrixWorld).applyMatrix4(X)), Array.isArray(r3)) {
              const i3 = e3.groups;
              for (let s2 = 0, a2 = i3.length; s2 < a2; s2++) {
                const a3 = i3[s2], o2 = r3[a3.materialIndex];
                o2 && o2.visible && v.push(t2, e3, o2, n2, q.z, a3);
              }
            } else r3.visible && v.push(t2, e3, r3, n2, q.z, null);
          }
        }
        const r2 = t2.children;
        for (let t3 = 0, s2 = r2.length; t3 < s2; t3++) Gt2(r2[t3], e2, n2, i2);
      }
      function Wt2(t2, e2, n2, i2) {
        const r2 = t2.opaque, s2 = t2.transmissive, a2 = t2.transparent;
        _.setupLightsView(n2), true === H && pt2.setGlobalState(M.clippingPlanes, n2), i2 && tt2.viewport(R.copy(i2)), r2.length > 0 && qt2(r2, e2, n2), s2.length > 0 && qt2(s2, e2, n2), a2.length > 0 && qt2(a2, e2, n2), tt2.buffers.depth.setTest(true), tt2.buffers.depth.setMask(true), tt2.buffers.color.setMask(true), tt2.setPolygonOffset(false);
      }
      function Xt2(t2, e2, n2, i2) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        void 0 === _.state.transmissionRenderTarget[i2.id] && (_.state.transmissionRenderTarget[i2.id] = new Ei(1, 1, { generateMipmaps: true, type: $2.has("EXT_color_buffer_half_float") || $2.has("EXT_color_buffer_float") ? Ut : Et, minFilter: wt, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: mi.workingColorSpace }));
        const r2 = _.state.transmissionRenderTarget[i2.id], a2 = i2.viewport || R;
        r2.setSize(a2.z, a2.w);
        const o2 = M.getRenderTarget();
        M.setRenderTarget(r2), M.getClearColor(I), L = M.getClearAlpha(), L < 1 && M.setClearColor(16777215, 0.5), M.clear(), Z2 && ft2.render(n2);
        const l3 = M.toneMapping;
        M.toneMapping = K;
        const c3 = i2.viewport;
        if (void 0 !== i2.viewport && (i2.viewport = void 0), _.setupLightsView(i2), true === H && pt2.setGlobalState(M.clippingPlanes, i2), qt2(t2, n2, i2), it2.updateMultisampleRenderTarget(r2), it2.updateRenderTargetMipmap(r2), false === $2.has("WEBGL_multisampled_render_to_texture")) {
          let t3 = false;
          for (let r3 = 0, s2 = e2.length; r3 < s2; r3++) {
            const s3 = e2[r3], a3 = s3.object, o3 = s3.geometry, l4 = s3.material, c4 = s3.group;
            if (2 === l4.side && a3.layers.test(i2.layers)) {
              const e3 = l4.side;
              l4.side = d, l4.needsUpdate = true, Zt(a3, n2, i2, o3, l4, c4), l4.side = e3, l4.needsUpdate = true, t3 = true;
            }
          }
          true === t3 && (it2.updateMultisampleRenderTarget(r2), it2.updateRenderTargetMipmap(r2));
        }
        M.setRenderTarget(o2), M.setClearColor(I, L), void 0 !== c3 && (i2.viewport = c3), M.toneMapping = l3;
      }
      function qt2(t2, e2, n2) {
        const i2 = true === e2.isScene ? e2.overrideMaterial : null;
        for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
          const s3 = t2[r2], a2 = s3.object, o2 = s3.geometry, l3 = null === i2 ? s3.material : i2, c3 = s3.group;
          a2.layers.test(n2.layers) && Zt(a2, e2, n2, o2, l3, c3);
        }
      }
      function Zt(t2, e2, n2, i2, r2, s2) {
        t2.onBeforeRender(M, e2, n2, i2, r2, s2), t2.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, t2.matrixWorld), t2.normalMatrix.getNormalMatrix(t2.modelViewMatrix), r2.onBeforeRender(M, e2, n2, i2, t2, s2), true === r2.transparent && 2 === r2.side && false === r2.forceSinglePass ? (r2.side = d, r2.needsUpdate = true, M.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = u, r2.needsUpdate = true, M.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = 2) : M.renderBufferDirect(n2, e2, i2, r2, t2, s2), t2.onAfterRender(M, e2, n2, i2, r2, s2);
      }
      function Kt2(t2, e2, n2) {
        true !== e2.isScene && (e2 = Y2);
        const i2 = nt2.get(t2), r2 = _.state.lights, s2 = _.state.shadowsArray, a2 = r2.state.version, o2 = ct2.getParameters(t2, r2.state, s2, e2, n2), l3 = ct2.getProgramCacheKey(o2);
        let c3 = i2.programs;
        i2.environment = t2.isMeshStandardMaterial ? e2.environment : null, i2.fog = e2.fog, i2.envMap = (t2.isMeshStandardMaterial ? st : rt2).get(t2.envMap || i2.environment), i2.envMapRotation = null !== i2.environment && null === t2.envMap ? e2.environmentRotation : t2.envMapRotation, void 0 === c3 && (t2.addEventListener("dispose", Ft2), c3 = /* @__PURE__ */ new Map(), i2.programs = c3);
        let h3 = c3.get(l3);
        if (void 0 !== h3) {
          if (i2.currentProgram === h3 && i2.lightsStateVersion === a2) return Qt2(t2, o2), h3;
        } else o2.uniforms = ct2.getUniforms(t2), t2.onBeforeCompile(o2, M), h3 = ct2.acquireProgram(o2, l3), c3.set(l3, h3), i2.uniforms = o2.uniforms;
        const u2 = i2.uniforms;
        return (t2.isShaderMaterial || t2.isRawShaderMaterial) && true !== t2.clipping || (u2.clippingPlanes = pt2.uniform), Qt2(t2, o2), i2.needsLights = (function(t3) {
          return t3.isMeshLambertMaterial || t3.isMeshToonMaterial || t3.isMeshPhongMaterial || t3.isMeshStandardMaterial || t3.isShadowMaterial || t3.isShaderMaterial && true === t3.lights;
        })(t2), i2.lightsStateVersion = a2, i2.needsLights && (u2.ambientLightColor.value = r2.state.ambient, u2.lightProbe.value = r2.state.probe, u2.directionalLights.value = r2.state.directional, u2.directionalLightShadows.value = r2.state.directionalShadow, u2.spotLights.value = r2.state.spot, u2.spotLightShadows.value = r2.state.spotShadow, u2.rectAreaLights.value = r2.state.rectArea, u2.ltc_1.value = r2.state.rectAreaLTC1, u2.ltc_2.value = r2.state.rectAreaLTC2, u2.pointLights.value = r2.state.point, u2.pointLightShadows.value = r2.state.pointShadow, u2.hemisphereLights.value = r2.state.hemi, u2.directionalShadowMap.value = r2.state.directionalShadowMap, u2.directionalShadowMatrix.value = r2.state.directionalShadowMatrix, u2.spotShadowMap.value = r2.state.spotShadowMap, u2.spotLightMatrix.value = r2.state.spotLightMatrix, u2.spotLightMap.value = r2.state.spotLightMap, u2.pointShadowMap.value = r2.state.pointShadowMap, u2.pointShadowMatrix.value = r2.state.pointShadowMatrix), i2.currentProgram = h3, i2.uniformsList = null, h3;
      }
      function $t2(t2) {
        if (null === t2.uniformsList) {
          const e2 = t2.currentProgram.getUniforms();
          t2.uniformsList = il.seqWithValue(e2.seq, t2.uniforms);
        }
        return t2.uniformsList;
      }
      function Qt2(t2, e2) {
        const n2 = nt2.get(t2);
        n2.outputColorSpace = e2.outputColorSpace, n2.batching = e2.batching, n2.batchingColor = e2.batchingColor, n2.instancing = e2.instancing, n2.instancingColor = e2.instancingColor, n2.instancingMorph = e2.instancingMorph, n2.skinning = e2.skinning, n2.morphTargets = e2.morphTargets, n2.morphNormals = e2.morphNormals, n2.morphColors = e2.morphColors, n2.morphTargetsCount = e2.morphTargetsCount, n2.numClippingPlanes = e2.numClippingPlanes, n2.numIntersection = e2.numClipIntersection, n2.vertexAlphas = e2.vertexAlphas, n2.vertexTangents = e2.vertexTangents, n2.toneMapping = e2.toneMapping;
      }
      Ht2.setAnimationLoop((function(t2) {
        zt2 && zt2(t2);
      })), "undefined" != typeof self && Ht2.setContext(self), this.setAnimationLoop = function(t2) {
        zt2 = t2, At2.setAnimationLoop(t2), null === t2 ? Ht2.stop() : Ht2.start();
      }, At2.addEventListener("sessionstart", kt2), At2.addEventListener("sessionend", Vt2), this.render = function(t2, e2) {
        if (void 0 !== e2 && true !== e2.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === S) return;
        if (true === t2.matrixWorldAutoUpdate && t2.updateMatrixWorld(), null === e2.parent && true === e2.matrixWorldAutoUpdate && e2.updateMatrixWorld(), true === At2.enabled && true === At2.isPresenting && (true === At2.cameraAutoUpdate && At2.updateCamera(e2), e2 = At2.getCamera()), true === t2.isScene && t2.onBeforeRender(M, t2, e2, T), _ = dt2.get(t2, y2.length), _.init(e2), y2.push(_), X.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), V.setFromProjectionMatrix(X), G = this.localClippingEnabled, H = pt2.init(this.clippingPlanes, G), v = ut2.get(t2, x.length), v.init(), x.push(v), true === At2.enabled && true === At2.isPresenting) {
          const t3 = M.xr.getDepthSensingMesh();
          null !== t3 && Gt2(t3, e2, -1 / 0, M.sortObjects);
        }
        Gt2(t2, e2, 0, M.sortObjects), v.finish(), true === M.sortObjects && v.sort(O, F), Z2 = false === At2.enabled || false === At2.isPresenting || false === At2.hasDepthSensing(), Z2 && ft2.addToRenderList(v, t2), this.info.render.frame++, true === H && pt2.beginShadows();
        const n2 = _.state.shadowsArray;
        mt2.render(n2, t2, e2), true === H && pt2.endShadows(), true === this.info.autoReset && this.info.reset();
        const i2 = v.opaque, r2 = v.transmissive;
        if (_.setupLights(), e2.isArrayCamera) {
          const n3 = e2.cameras;
          if (r2.length > 0) for (let e3 = 0, s2 = n3.length; e3 < s2; e3++) {
            Xt2(i2, r2, t2, n3[e3]);
          }
          Z2 && ft2.render(t2);
          for (let e3 = 0, i3 = n3.length; e3 < i3; e3++) {
            const i4 = n3[e3];
            Wt2(v, t2, i4, i4.viewport);
          }
        } else r2.length > 0 && Xt2(i2, r2, t2, e2), Z2 && ft2.render(t2), Wt2(v, t2, e2);
        null !== T && (it2.updateMultisampleRenderTarget(T), it2.updateRenderTargetMipmap(T)), true === t2.isScene && t2.onAfterRender(M, t2, e2), yt.resetDefaultState(), E = -1, A = null, y2.pop(), y2.length > 0 ? (_ = y2[y2.length - 1], true === H && pt2.setGlobalState(M.clippingPlanes, _.state.camera)) : _ = null, x.pop(), v = x.length > 0 ? x[x.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return b;
      }, this.getActiveMipmapLevel = function() {
        return w;
      }, this.getRenderTarget = function() {
        return T;
      }, this.setRenderTargetTextures = function(t2, e2, n2) {
        nt2.get(t2.texture).__webglTexture = e2, nt2.get(t2.depthTexture).__webglTexture = n2;
        const i2 = nt2.get(t2);
        i2.__hasExternalTextures = true, i2.__autoAllocateDepthBuffer = void 0 === n2, i2.__autoAllocateDepthBuffer || true === $2.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i2.__useRenderToTexture = false);
      }, this.setRenderTargetFramebuffer = function(t2, e2) {
        const n2 = nt2.get(t2);
        n2.__webglFramebuffer = e2, n2.__useDefaultFramebuffer = void 0 === e2;
      }, this.setRenderTarget = function(t2, e2 = 0, n2 = 0) {
        T = t2, b = e2, w = n2;
        let i2 = true, r2 = null, s2 = false, a2 = false;
        if (t2) {
          const o2 = nt2.get(t2);
          if (void 0 !== o2.__useDefaultFramebuffer) tt2.bindFramebuffer(St2.FRAMEBUFFER, null), i2 = false;
          else if (void 0 === o2.__webglFramebuffer) it2.setupRenderTarget(t2);
          else if (o2.__hasExternalTextures) it2.rebindTextures(t2, nt2.get(t2.texture).__webglTexture, nt2.get(t2.depthTexture).__webglTexture);
          else if (t2.depthBuffer) {
            const e3 = t2.depthTexture;
            if (o2.__boundDepthTexture !== e3) {
              if (null !== e3 && nt2.has(e3) && (t2.width !== e3.image.width || t2.height !== e3.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              it2.setupDepthRenderbuffer(t2);
            }
          }
          const l3 = t2.texture;
          (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (a2 = true);
          const c3 = nt2.get(t2).__webglFramebuffer;
          t2.isWebGLCubeRenderTarget ? (r2 = Array.isArray(c3[e2]) ? c3[e2][n2] : c3[e2], s2 = true) : r2 = t2.samples > 0 && false === it2.useMultisampledRTT(t2) ? nt2.get(t2).__webglMultisampledFramebuffer : Array.isArray(c3) ? c3[n2] : c3, R.copy(t2.viewport), C3.copy(t2.scissor), P2 = t2.scissorTest;
        } else R.copy(B).multiplyScalar(D).floor(), C3.copy(z).multiplyScalar(D).floor(), P2 = k;
        if (tt2.bindFramebuffer(St2.FRAMEBUFFER, r2) && i2 && tt2.drawBuffers(t2, r2), tt2.viewport(R), tt2.scissor(C3), tt2.setScissorTest(P2), s2) {
          const i3 = nt2.get(t2.texture);
          St2.framebufferTexture2D(St2.FRAMEBUFFER, St2.COLOR_ATTACHMENT0, St2.TEXTURE_CUBE_MAP_POSITIVE_X + e2, i3.__webglTexture, n2);
        } else if (a2) {
          const i3 = nt2.get(t2.texture), r3 = e2 || 0;
          St2.framebufferTextureLayer(St2.FRAMEBUFFER, St2.COLOR_ATTACHMENT0, i3.__webglTexture, n2 || 0, r3);
        }
        E = -1;
      }, this.readRenderTargetPixels = function(t2, e2, n2, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = nt2.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          tt2.bindFramebuffer(St2.FRAMEBUFFER, o2);
          try {
            const a3 = t2.texture, o3 = a3.format, l3 = a3.type;
            if (!Q2.textureFormatReadable(o3)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!Q2.textureTypeReadable(l3)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            e2 >= 0 && e2 <= t2.width - i2 && n2 >= 0 && n2 <= t2.height - r2 && St2.readPixels(e2, n2, i2, r2, xt2.convert(o3), xt2.convert(l3), s2);
          } finally {
            const t3 = null !== T ? nt2.get(T).__webglFramebuffer : null;
            tt2.bindFramebuffer(St2.FRAMEBUFFER, t3);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(t2, e2, n2, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = nt2.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          const a3 = t2.texture, l3 = a3.format, c3 = a3.type;
          if (!Q2.textureFormatReadable(l3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Q2.textureTypeReadable(c3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (e2 >= 0 && e2 <= t2.width - i2 && n2 >= 0 && n2 <= t2.height - r2) {
            tt2.bindFramebuffer(St2.FRAMEBUFFER, o2);
            const t3 = St2.createBuffer();
            St2.bindBuffer(St2.PIXEL_PACK_BUFFER, t3), St2.bufferData(St2.PIXEL_PACK_BUFFER, s2.byteLength, St2.STREAM_READ), St2.readPixels(e2, n2, i2, r2, xt2.convert(l3), xt2.convert(c3), 0);
            const a4 = null !== T ? nt2.get(T).__webglFramebuffer : null;
            tt2.bindFramebuffer(St2.FRAMEBUFFER, a4);
            const h3 = St2.fenceSync(St2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return St2.flush(), await (function(t4, e3, n3) {
              return new Promise((function(i3, r3) {
                setTimeout((function s3() {
                  switch (t4.clientWaitSync(e3, t4.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                    case t4.WAIT_FAILED:
                      r3();
                      break;
                    case t4.TIMEOUT_EXPIRED:
                      setTimeout(s3, n3);
                      break;
                    default:
                      i3();
                  }
                }), n3);
              }));
            })(St2, h3, 4), St2.bindBuffer(St2.PIXEL_PACK_BUFFER, t3), St2.getBufferSubData(St2.PIXEL_PACK_BUFFER, 0, s2), St2.deleteBuffer(t3), St2.deleteSync(h3), s2;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(t2, e2 = null, n2 = 0) {
        true !== t2.isTexture && (ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."), e2 = arguments[0] || null, t2 = arguments[1]);
        const i2 = Math.pow(2, -n2), r2 = Math.floor(t2.image.width * i2), s2 = Math.floor(t2.image.height * i2), a2 = null !== e2 ? e2.x : 0, o2 = null !== e2 ? e2.y : 0;
        it2.setTexture2D(t2, 0), St2.copyTexSubImage2D(St2.TEXTURE_2D, n2, 0, 0, a2, o2, r2, s2), tt2.unbindTexture();
      }, this.copyTextureToTexture = function(t2, e2, n2 = null, i2 = null, r2 = 0) {
        let s2, a2, o2, l3, c3, h3;
        true !== t2.isTexture && (ci("WebGLRenderer: copyTextureToTexture function signature has changed."), i2 = arguments[0] || null, t2 = arguments[1], e2 = arguments[2], r2 = arguments[3] || 0, n2 = null), null !== n2 ? (s2 = n2.max.x - n2.min.x, a2 = n2.max.y - n2.min.y, o2 = n2.min.x, l3 = n2.min.y) : (s2 = t2.image.width, a2 = t2.image.height, o2 = 0, l3 = 0), null !== i2 ? (c3 = i2.x, h3 = i2.y) : (c3 = 0, h3 = 0);
        const u2 = xt2.convert(e2.format), d2 = xt2.convert(e2.type);
        it2.setTexture2D(e2, 0), St2.pixelStorei(St2.UNPACK_FLIP_Y_WEBGL, e2.flipY), St2.pixelStorei(St2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e2.premultiplyAlpha), St2.pixelStorei(St2.UNPACK_ALIGNMENT, e2.unpackAlignment);
        const p3 = St2.getParameter(St2.UNPACK_ROW_LENGTH), m2 = St2.getParameter(St2.UNPACK_IMAGE_HEIGHT), f2 = St2.getParameter(St2.UNPACK_SKIP_PIXELS), g2 = St2.getParameter(St2.UNPACK_SKIP_ROWS), v2 = St2.getParameter(St2.UNPACK_SKIP_IMAGES), _2 = t2.isCompressedTexture ? t2.mipmaps[r2] : t2.image;
        St2.pixelStorei(St2.UNPACK_ROW_LENGTH, _2.width), St2.pixelStorei(St2.UNPACK_IMAGE_HEIGHT, _2.height), St2.pixelStorei(St2.UNPACK_SKIP_PIXELS, o2), St2.pixelStorei(St2.UNPACK_SKIP_ROWS, l3), t2.isDataTexture ? St2.texSubImage2D(St2.TEXTURE_2D, r2, c3, h3, s2, a2, u2, d2, _2.data) : t2.isCompressedTexture ? St2.compressedTexSubImage2D(St2.TEXTURE_2D, r2, c3, h3, _2.width, _2.height, u2, _2.data) : St2.texSubImage2D(St2.TEXTURE_2D, r2, c3, h3, s2, a2, u2, d2, _2), St2.pixelStorei(St2.UNPACK_ROW_LENGTH, p3), St2.pixelStorei(St2.UNPACK_IMAGE_HEIGHT, m2), St2.pixelStorei(St2.UNPACK_SKIP_PIXELS, f2), St2.pixelStorei(St2.UNPACK_SKIP_ROWS, g2), St2.pixelStorei(St2.UNPACK_SKIP_IMAGES, v2), 0 === r2 && e2.generateMipmaps && St2.generateMipmap(St2.TEXTURE_2D), tt2.unbindTexture();
      }, this.copyTextureToTexture3D = function(t2, e2, n2 = null, i2 = null, r2 = 0) {
        let s2, a2, o2, l3, c3, h3, u2, d2, p3;
        true !== t2.isTexture && (ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."), n2 = arguments[0] || null, i2 = arguments[1] || null, t2 = arguments[2], e2 = arguments[3], r2 = arguments[4] || 0);
        const m2 = t2.isCompressedTexture ? t2.mipmaps[r2] : t2.image;
        null !== n2 ? (s2 = n2.max.x - n2.min.x, a2 = n2.max.y - n2.min.y, o2 = n2.max.z - n2.min.z, l3 = n2.min.x, c3 = n2.min.y, h3 = n2.min.z) : (s2 = m2.width, a2 = m2.height, o2 = m2.depth, l3 = 0, c3 = 0, h3 = 0), null !== i2 ? (u2 = i2.x, d2 = i2.y, p3 = i2.z) : (u2 = 0, d2 = 0, p3 = 0);
        const f2 = xt2.convert(e2.format), g2 = xt2.convert(e2.type);
        let v2;
        if (e2.isData3DTexture) it2.setTexture3D(e2, 0), v2 = St2.TEXTURE_3D;
        else {
          if (!e2.isDataArrayTexture && !e2.isCompressedArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
          it2.setTexture2DArray(e2, 0), v2 = St2.TEXTURE_2D_ARRAY;
        }
        St2.pixelStorei(St2.UNPACK_FLIP_Y_WEBGL, e2.flipY), St2.pixelStorei(St2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e2.premultiplyAlpha), St2.pixelStorei(St2.UNPACK_ALIGNMENT, e2.unpackAlignment);
        const _2 = St2.getParameter(St2.UNPACK_ROW_LENGTH), x2 = St2.getParameter(St2.UNPACK_IMAGE_HEIGHT), y3 = St2.getParameter(St2.UNPACK_SKIP_PIXELS), M2 = St2.getParameter(St2.UNPACK_SKIP_ROWS), S2 = St2.getParameter(St2.UNPACK_SKIP_IMAGES);
        St2.pixelStorei(St2.UNPACK_ROW_LENGTH, m2.width), St2.pixelStorei(St2.UNPACK_IMAGE_HEIGHT, m2.height), St2.pixelStorei(St2.UNPACK_SKIP_PIXELS, l3), St2.pixelStorei(St2.UNPACK_SKIP_ROWS, c3), St2.pixelStorei(St2.UNPACK_SKIP_IMAGES, h3), t2.isDataTexture || t2.isData3DTexture ? St2.texSubImage3D(v2, r2, u2, d2, p3, s2, a2, o2, f2, g2, m2.data) : e2.isCompressedArrayTexture ? St2.compressedTexSubImage3D(v2, r2, u2, d2, p3, s2, a2, o2, f2, m2.data) : St2.texSubImage3D(v2, r2, u2, d2, p3, s2, a2, o2, f2, g2, m2), St2.pixelStorei(St2.UNPACK_ROW_LENGTH, _2), St2.pixelStorei(St2.UNPACK_IMAGE_HEIGHT, x2), St2.pixelStorei(St2.UNPACK_SKIP_PIXELS, y3), St2.pixelStorei(St2.UNPACK_SKIP_ROWS, M2), St2.pixelStorei(St2.UNPACK_SKIP_IMAGES, S2), 0 === r2 && e2.generateMipmaps && St2.generateMipmap(v2), tt2.unbindTexture();
      }, this.initRenderTarget = function(t2) {
        void 0 === nt2.get(t2).__webglFramebuffer && it2.setupRenderTarget(t2);
      }, this.initTexture = function(t2) {
        t2.isCubeTexture ? it2.setTextureCube(t2, 0) : t2.isData3DTexture ? it2.setTexture3D(t2, 0) : t2.isDataArrayTexture || t2.isCompressedArrayTexture ? it2.setTexture2DArray(t2, 0) : it2.setTexture2D(t2, 0), tt2.unbindTexture();
      }, this.resetState = function() {
        b = 0, w = 0, T = null, tt2.reset(), yt.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return kn;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t2) {
      this._outputColorSpace = t2;
      const e = this.getContext();
      e.drawingBufferColorSpace = t2 === $e ? "display-p3" : "srgb", e.unpackColorSpace = mi.workingColorSpace === Qe ? "display-p3" : "srgb";
    }
  };
  var ac = class _ac {
    constructor(t2, e = 1, n = 1e3) {
      this.isFog = true, this.name = "", this.color = new ts(t2), this.near = e, this.far = n;
    }
    clone() {
      return new _ac(this.color, this.near, this.far);
    }
    toJSON() {
      return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
    }
  };
  var oc = class extends Dr {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new _r(), this.environmentIntensity = 1, this.environmentRotation = new _r(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e) {
      return super.copy(t2, e), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
    }
  };
  var cc = new Li();
  var pc = new Li();
  var mc = new Li();
  var fc = new Li();
  var gc = new ti();
  var vc = new ti();
  var _c = new lr();
  var xc = new Li();
  var yc = new Li();
  var Mc = new Li();
  var Sc = new ti();
  var bc = new ti();
  var wc = new ti();
  var Ac = new Li();
  var Rc = new Li();
  var Pc = new Li();
  var Ic = new wi();
  var Lc = new wi();
  var Uc = new Li();
  var Nc = new lr();
  var Dc = new Li();
  var Oc = new Qi();
  var Fc = new lr();
  var Bc = new or();
  var Vc = class extends bi {
    constructor(t2 = null, e = 1, n = 1, i, r, s, a, o, l2 = 1003, c2 = 1003, h2, u2) {
      super(null, s, a, o, l2, c2, i, r, h2, u2), this.isDataTexture = true, this.image = { data: t2, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Hc = new lr();
  var Gc = new lr();
  var Xc = class extends ds {
    constructor(t2, e, n, i = 1) {
      super(t2, e, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
    }
    copy(t2) {
      return super.copy(t2), this.meshPerAttribute = t2.meshPerAttribute, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.meshPerAttribute = this.meshPerAttribute, t2.isInstancedBufferAttribute = true, t2;
    }
  };
  var jc = new lr();
  var qc = new lr();
  var Yc = [];
  var Zc = new Di();
  var Jc = new lr();
  var Kc = new Vs();
  var $c = new Qi();
  var Qc = class extends Vs {
    constructor(t2, e, n) {
      super(t2, e), this.isInstancedMesh = true, this.instanceMatrix = new Xc(new Float32Array(16 * n), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
      for (let t3 = 0; t3 < n; t3++) this.setMatrixAt(t3, Jc);
    }
    computeBoundingBox() {
      const t2 = this.geometry, e = this.count;
      null === this.boundingBox && (this.boundingBox = new Di()), null === t2.boundingBox && t2.computeBoundingBox(), this.boundingBox.makeEmpty();
      for (let n = 0; n < e; n++) this.getMatrixAt(n, jc), Zc.copy(t2.boundingBox).applyMatrix4(jc), this.boundingBox.union(Zc);
    }
    computeBoundingSphere() {
      const t2 = this.geometry, e = this.count;
      null === this.boundingSphere && (this.boundingSphere = new Qi()), null === t2.boundingSphere && t2.computeBoundingSphere(), this.boundingSphere.makeEmpty();
      for (let n = 0; n < e; n++) this.getMatrixAt(n, jc), $c.copy(t2.boundingSphere).applyMatrix4(jc), this.boundingSphere.union($c);
    }
    copy(t2, e) {
      return super.copy(t2, e), this.instanceMatrix.copy(t2.instanceMatrix), null !== t2.morphTexture && (this.morphTexture = t2.morphTexture.clone()), null !== t2.instanceColor && (this.instanceColor = t2.instanceColor.clone()), this.count = t2.count, null !== t2.boundingBox && (this.boundingBox = t2.boundingBox.clone()), null !== t2.boundingSphere && (this.boundingSphere = t2.boundingSphere.clone()), this;
    }
    getColorAt(t2, e) {
      e.fromArray(this.instanceColor.array, 3 * t2);
    }
    getMatrixAt(t2, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t2);
    }
    getMorphAt(t2, e) {
      const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, r = t2 * (n.length + 1) + 1;
      for (let t3 = 0; t3 < n.length; t3++) n[t3] = i[r + t3];
    }
    raycast(t2, e) {
      const n = this.matrixWorld, i = this.count;
      if (Kc.geometry = this.geometry, Kc.material = this.material, void 0 !== Kc.material && (null === this.boundingSphere && this.computeBoundingSphere(), $c.copy(this.boundingSphere), $c.applyMatrix4(n), false !== t2.ray.intersectsSphere($c))) for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, jc), qc.multiplyMatrices(n, jc), Kc.matrixWorld = qc, Kc.raycast(t2, Yc);
        for (let t3 = 0, n2 = Yc.length; t3 < n2; t3++) {
          const n3 = Yc[t3];
          n3.instanceId = r, n3.object = this, e.push(n3);
        }
        Yc.length = 0;
      }
    }
    setColorAt(t2, e) {
      null === this.instanceColor && (this.instanceColor = new Xc(new Float32Array(3 * this.instanceMatrix.count).fill(1), 3)), e.toArray(this.instanceColor.array, 3 * t2);
    }
    setMatrixAt(t2, e) {
      e.toArray(this.instanceMatrix.array, 16 * t2);
    }
    setMorphAt(t2, e) {
      const n = e.morphTargetInfluences, i = n.length + 1;
      null === this.morphTexture && (this.morphTexture = new Vc(new Float32Array(i * this.count), i, this.count, Xt, Lt));
      const r = this.morphTexture.source.data.data;
      let s = 0;
      for (let t3 = 0; t3 < n.length; t3++) s += n[t3];
      const a = this.geometry.morphTargetsRelative ? 1 : 1 - s, o = i * t2;
      r[o] = a, r.set(n, o + 1);
    }
    updateMorphTargets() {
    }
    dispose() {
      return this.dispatchEvent({ type: "dispose" }), null !== this.morphTexture && (this.morphTexture.dispose(), this.morphTexture = null), this;
    }
  };
  var nh = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e, n) {
      const i = this.pool, r = this.list;
      this.index >= i.length && i.push({ start: -1, count: -1, z: -1, index: -1 });
      const s = i[this.index];
      r.push(s), this.index++, s.start = t2.start, s.count = t2.count, s.z = e, s.index = n;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var ih = new lr();
  var rh = new lr();
  var sh = new lr();
  var ah = new ts(1, 1, 1);
  var oh = new lr();
  var lh = new ha();
  var ch = new Di();
  var hh = new Qi();
  var uh = new Li();
  var dh = new Li();
  var ph = new Li();
  var mh = new nh();
  var fh = new Vs();
  var xh = class extends is {
    constructor(t2) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new ts(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
    }
  };
  var yh = new Li();
  var Mh = new Li();
  var Sh = new lr();
  var bh = new or();
  var wh = new Qi();
  var Th = new Li();
  var Eh = new Li();
  var Ah = class extends Dr {
    constructor(t2 = new Cs(), e = new xh()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e, this.updateMorphTargets();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e = t2.attributes.position, n = [0];
        for (let t3 = 1, i = e.count; t3 < i; t3++) yh.fromBufferAttribute(e, t3 - 1), Mh.fromBufferAttribute(e, t3), n[t3] = n[t3 - 1], n[t3] += yh.distanceTo(Mh);
        t2.setAttribute("lineDistance", new Ms(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t2, e) {
      const n = this.geometry, i = this.matrixWorld, r = t2.params.Line.threshold, s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), wh.copy(n.boundingSphere), wh.applyMatrix4(i), wh.radius += r, false === t2.ray.intersectsSphere(wh)) return;
      Sh.copy(i).invert(), bh.copy(t2.ray).applyMatrix4(Sh);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l2 = this.isLineSegments ? 2 : 1, c2 = n.index, h2 = n.attributes.position;
      if (null !== c2) {
        const n2 = Math.max(0, s.start), i2 = Math.min(c2.count, s.start + s.count);
        for (let r2 = n2, s2 = i2 - 1; r2 < s2; r2 += l2) {
          const n3 = c2.getX(r2), i3 = c2.getX(r2 + 1), s3 = Rh(this, t2, bh, o, n3, i3);
          s3 && e.push(s3);
        }
        if (this.isLineLoop) {
          const r2 = c2.getX(i2 - 1), s2 = c2.getX(n2), a2 = Rh(this, t2, bh, o, r2, s2);
          a2 && e.push(a2);
        }
      } else {
        const n2 = Math.max(0, s.start), i2 = Math.min(h2.count, s.start + s.count);
        for (let r2 = n2, s2 = i2 - 1; r2 < s2; r2 += l2) {
          const n3 = Rh(this, t2, bh, o, r2, r2 + 1);
          n3 && e.push(n3);
        }
        if (this.isLineLoop) {
          const r2 = Rh(this, t2, bh, o, i2 - 1, n2);
          r2 && e.push(r2);
        }
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e = Object.keys(t2);
      if (e.length > 0) {
        const n = t2[e[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e2 = n.length; t3 < e2; t3++) {
            const e3 = n[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e3] = t3;
          }
        }
      }
    }
  };
  function Rh(t2, e, n, i, r, s) {
    const a = t2.geometry.attributes.position;
    yh.fromBufferAttribute(a, r), Mh.fromBufferAttribute(a, s);
    if (n.distanceSqToSegment(yh, Mh, Th, Eh) > i) return;
    Th.applyMatrix4(t2.matrixWorld);
    const o = e.ray.origin.distanceTo(Th);
    return o < e.near || o > e.far ? void 0 : { distance: o, point: Eh.clone().applyMatrix4(t2.matrixWorld), index: r, face: null, faceIndex: null, barycoord: null, object: t2 };
  }
  var Ch = new Li();
  var Ph = new Li();
  var Ih = class extends Ah {
    constructor(t2, e) {
      super(t2, e), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e = t2.attributes.position, n = [];
        for (let t3 = 0, i = e.count; t3 < i; t3 += 2) Ch.fromBufferAttribute(e, t3), Ph.fromBufferAttribute(e, t3 + 1), n[t3] = 0 === t3 ? 0 : n[t3 - 1], n[t3 + 1] = n[t3] + Ch.distanceTo(Ph);
        t2.setAttribute("lineDistance", new Ms(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  };
  var Nh = new lr();
  var Dh = new or();
  var Oh = new Qi();
  var Fh = new Li();
  var Xh = class extends bi {
    constructor(t2, e, n, i, r, s, a, o, l2) {
      super(t2, e, n, i, r, s, a, o, l2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var jh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getPoint(n, e);
    }
    getPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return e;
    }
    getSpacedPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPointAt(n / t2));
      return e;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e = [];
      let n, i = this.getPoint(0), r = 0;
      e.push(0);
      for (let s = 1; s <= t2; s++) n = this.getPoint(s / t2), r += n.distanceTo(i), e.push(r), i = n;
      return this.cacheArcLengths = e, e;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = e || t2 * n[r - 1];
      let a, o = 0, l2 = r - 1;
      for (; o <= l2; ) if (i = Math.floor(o + (l2 - o) / 2), a = n[i] - s, a < 0) o = i + 1;
      else {
        if (!(a > 0)) {
          l2 = i;
          break;
        }
        l2 = i - 1;
      }
      if (i = l2, n[i] === s) return i / (r - 1);
      const c2 = n[i];
      return (i + (s - c2) / (n[i + 1] - c2)) / (r - 1);
    }
    getTangent(t2, e) {
      const n = 1e-4;
      let i = t2 - n, r = t2 + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new ti() : new Li());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t2, e) {
      const n = new Li(), i = [], r = [], s = [], a = new Li(), o = new lr();
      for (let e2 = 0; e2 <= t2; e2++) {
        const n2 = e2 / t2;
        i[e2] = this.getTangentAt(n2, new Li());
      }
      r[0] = new Li(), s[0] = new Li();
      let l2 = Number.MAX_VALUE;
      const c2 = Math.abs(i[0].x), h2 = Math.abs(i[0].y), u2 = Math.abs(i[0].z);
      c2 <= l2 && (l2 = c2, n.set(1, 0, 0)), h2 <= l2 && (l2 = h2, n.set(0, 1, 0)), u2 <= l2 && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
      for (let e2 = 1; e2 <= t2; e2++) {
        if (r[e2] = r[e2 - 1].clone(), s[e2] = s[e2 - 1].clone(), a.crossVectors(i[e2 - 1], i[e2]), a.length() > Number.EPSILON) {
          a.normalize();
          const t3 = Math.acos(Yn(i[e2 - 1].dot(i[e2]), -1, 1));
          r[e2].applyMatrix4(o.makeRotationAxis(a, t3));
        }
        s[e2].crossVectors(i[e2], r[e2]);
      }
      if (true === e) {
        let e2 = Math.acos(Yn(r[0].dot(r[t2]), -1, 1));
        e2 /= t2, i[0].dot(a.crossVectors(r[0], r[t2])) > 0 && (e2 = -e2);
        for (let n2 = 1; n2 <= t2; n2++) r[n2].applyMatrix4(o.makeRotationAxis(i[n2], e2 * n2)), s[n2].crossVectors(i[n2], r[n2]);
      }
      return { tangents: i, normals: r, binormals: s };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var qh = class extends jh {
    constructor(t2 = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = false, o = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
    }
    getPoint(t2, e = new ti()) {
      const n = e, i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), true !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const a = this.aStartAngle + t2 * r;
      let o = this.aX + this.xRadius * Math.cos(a), l2 = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e2 = Math.sin(this.aRotation), n2 = o - this.aX, i2 = l2 - this.aY;
        o = n2 * t3 - i2 * e2 + this.aX, l2 = n2 * e2 + i2 * t3 + this.aY;
      }
      return n.set(o, l2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Yh = class extends qh {
    constructor(t2, e, n, i, r, s) {
      super(t2, e, n, n, i, r, s), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Zh() {
    let t2 = 0, e = 0, n = 0, i = 0;
    function r(r2, s, a, o) {
      t2 = r2, e = a, n = -3 * r2 + 3 * s - 2 * a - o, i = 2 * r2 - 2 * s + a + o;
    }
    return { initCatmullRom: function(t3, e2, n2, i2, s) {
      r(e2, n2, s * (n2 - t3), s * (i2 - e2));
    }, initNonuniformCatmullRom: function(t3, e2, n2, i2, s, a, o) {
      let l2 = (e2 - t3) / s - (n2 - t3) / (s + a) + (n2 - e2) / a, c2 = (n2 - e2) / a - (i2 - e2) / (a + o) + (i2 - n2) / o;
      l2 *= a, c2 *= a, r(e2, n2, l2, c2);
    }, calc: function(r2) {
      const s = r2 * r2;
      return t2 + e * r2 + n * s + i * (s * r2);
    } };
  }
  var Jh = new Li();
  var Kh = new Zh();
  var $h = new Zh();
  var Qh = new Zh();
  var tu = class extends jh {
    constructor(t2 = [], e = false, n = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e, this.curveType = n, this.tension = i;
    }
    getPoint(t2, e = new Li()) {
      const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t2;
      let a, o, l2 = Math.floor(s), c2 = s - l2;
      this.closed ? l2 += l2 > 0 ? 0 : (Math.floor(Math.abs(l2) / r) + 1) * r : 0 === c2 && l2 === r - 1 && (l2 = r - 2, c2 = 1), this.closed || l2 > 0 ? a = i[(l2 - 1) % r] : (Jh.subVectors(i[0], i[1]).add(i[0]), a = Jh);
      const h2 = i[l2 % r], u2 = i[(l2 + 1) % r];
      if (this.closed || l2 + 2 < r ? o = i[(l2 + 2) % r] : (Jh.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Jh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e2 = Math.pow(a.distanceToSquared(h2), t3), n2 = Math.pow(h2.distanceToSquared(u2), t3), i2 = Math.pow(u2.distanceToSquared(o), t3);
        n2 < 1e-4 && (n2 = 1), e2 < 1e-4 && (e2 = n2), i2 < 1e-4 && (i2 = n2), Kh.initNonuniformCatmullRom(a.x, h2.x, u2.x, o.x, e2, n2, i2), $h.initNonuniformCatmullRom(a.y, h2.y, u2.y, o.y, e2, n2, i2), Qh.initNonuniformCatmullRom(a.z, h2.z, u2.z, o.z, e2, n2, i2);
      } else "catmullrom" === this.curveType && (Kh.initCatmullRom(a.x, h2.x, u2.x, o.x, this.tension), $h.initCatmullRom(a.y, h2.y, u2.y, o.y, this.tension), Qh.initCatmullRom(a.z, h2.z, u2.z, o.z, this.tension));
      return n.set(Kh.calc(c2), $h.calc(c2), Qh.calc(c2)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new Li().fromArray(n2));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function eu(t2, e, n, i, r) {
    const s = 0.5 * (i - e), a = 0.5 * (r - n), o = t2 * t2;
    return (2 * n - 2 * i + s + a) * (t2 * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t2 + n;
  }
  function nu(t2, e, n, i) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      return 2 * (1 - t3) * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return t3 * t3 * e2;
    })(t2, i);
  }
  function iu(t2, e, n, i, r) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      const n2 = 1 - t3;
      return 3 * n2 * n2 * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return 3 * (1 - t3) * t3 * t3 * e2;
    })(t2, i) + (function(t3, e2) {
      return t3 * t3 * t3 * e2;
    })(t2, r);
  }
  var ru = class extends jh {
    constructor(t2 = new ti(), e = new ti(), n = new ti(), i = new ti()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new ti()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(iu(t2, i.x, r.x, s.x, a.x), iu(t2, i.y, r.y, s.y, a.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var su = class extends jh {
    constructor(t2 = new Li(), e = new Li(), n = new Li(), i = new Li()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new Li()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(iu(t2, i.x, r.x, s.x, a.x), iu(t2, i.y, r.y, s.y, a.y), iu(t2, i.z, r.z, s.z, a.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var au = class extends jh {
    constructor(t2 = new ti(), e = new ti()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new ti()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new ti()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var ou = class extends jh {
    constructor(t2 = new Li(), e = new Li()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new Li()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new Li()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var lu = class extends jh {
    constructor(t2 = new ti(), e = new ti(), n = new ti()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new ti()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(nu(t2, i.x, r.x, s.x), nu(t2, i.y, r.y, s.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var cu = class extends jh {
    constructor(t2 = new Li(), e = new Li(), n = new Li()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new Li()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(nu(t2, i.x, r.x, s.x), nu(t2, i.y, r.y, s.y), nu(t2, i.z, r.z, s.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var hu = class extends jh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e = new ti()) {
      const n = e, i = this.points, r = (i.length - 1) * t2, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l2 = i[s], c2 = i[s > i.length - 2 ? i.length - 1 : s + 1], h2 = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(eu(a, o.x, l2.x, c2.x, h2.x), eu(a, o.y, l2.y, c2.y, h2.y)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new ti().fromArray(n2));
      }
      return this;
    }
  };
  var uu = Object.freeze({ __proto__: null, ArcCurve: Yh, CatmullRomCurve3: tu, CubicBezierCurve: ru, CubicBezierCurve3: su, EllipseCurve: qh, LineCurve: au, LineCurve3: ou, QuadraticBezierCurve: lu, QuadraticBezierCurve3: cu, SplineCurve: hu });
  var du = class extends jh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e)) {
        const n = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new uu[n](e, t2));
      }
      return this;
    }
    getPoint(t2, e) {
      const n = t2 * this.getLength(), i = this.getCurveLengths();
      let r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n) {
          const t3 = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t3 / a;
          return s.getPointAt(o, e);
        }
        r++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t2.push(e);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t2 = 12) {
      const e = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i], a = s.isEllipseCurve ? 2 * t2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t2 * s.points.length : t2, o = s.getPoints(a);
        for (let t3 = 0; t3 < o.length; t3++) {
          const i2 = o[t3];
          n && n.equals(i2) || (e.push(i2), n = i2);
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(n2.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e = 0, n = this.curves.length; e < n; e++) {
        const n2 = this.curves[e];
        t2.curves.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(new uu[n2.type]().fromJSON(n2));
      }
      return this;
    }
  };
  var pu = class extends du {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new ti(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e = 1, n = t2.length; e < n; e++) this.lineTo(t2[e].x, t2[e].y);
      return this;
    }
    moveTo(t2, e) {
      return this.currentPoint.set(t2, e), this;
    }
    lineTo(t2, e) {
      const n = new au(this.currentPoint.clone(), new ti(t2, e));
      return this.curves.push(n), this.currentPoint.set(t2, e), this;
    }
    quadraticCurveTo(t2, e, n, i) {
      const r = new lu(this.currentPoint.clone(), new ti(t2, e), new ti(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(t2, e, n, i, r, s) {
      const a = new ru(this.currentPoint.clone(), new ti(t2, e), new ti(n, i), new ti(r, s));
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(t2) {
      const e = [this.currentPoint.clone()].concat(t2), n = new hu(e);
      return this.curves.push(n), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e, n, i, r, s) {
      const a = this.currentPoint.x, o = this.currentPoint.y;
      return this.absarc(t2 + a, e + o, n, i, r, s), this;
    }
    absarc(t2, e, n, i, r, s) {
      return this.absellipse(t2, e, n, n, i, r, s), this;
    }
    ellipse(t2, e, n, i, r, s, a, o) {
      const l2 = this.currentPoint.x, c2 = this.currentPoint.y;
      return this.absellipse(t2 + l2, e + c2, n, i, r, s, a, o), this;
    }
    absellipse(t2, e, n, i, r, s, a, o) {
      const l2 = new qh(t2, e, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t3 = l2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(l2);
      const c2 = l2.getPoint(1);
      return this.currentPoint.copy(c2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var mu = class _mu extends Cs {
    constructor(t2 = [new ti(0, -0.5), new ti(0.5, 0), new ti(0, 0.5)], e = 12, n = 0, i = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e, phiStart: n, phiLength: i }, e = Math.floor(e), i = Yn(i, 0, 2 * Math.PI);
      const r = [], s = [], a = [], o = [], l2 = [], c2 = 1 / e, h2 = new Li(), u2 = new ti(), d2 = new Li(), p2 = new Li(), m = new Li();
      let f = 0, g = 0;
      for (let e2 = 0; e2 <= t2.length - 1; e2++) switch (e2) {
        case 0:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, m.copy(d2), d2.normalize(), o.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, p2.copy(d2), d2.x += m.x, d2.y += m.y, d2.z += m.z, d2.normalize(), o.push(d2.x, d2.y, d2.z), m.copy(p2);
      }
      for (let r2 = 0; r2 <= e; r2++) {
        const d3 = n + r2 * c2 * i, p3 = Math.sin(d3), m2 = Math.cos(d3);
        for (let n2 = 0; n2 <= t2.length - 1; n2++) {
          h2.x = t2[n2].x * p3, h2.y = t2[n2].y, h2.z = t2[n2].x * m2, s.push(h2.x, h2.y, h2.z), u2.x = r2 / e, u2.y = n2 / (t2.length - 1), a.push(u2.x, u2.y);
          const i2 = o[3 * n2 + 0] * p3, c3 = o[3 * n2 + 1], d4 = o[3 * n2 + 0] * m2;
          l2.push(i2, c3, d4);
        }
      }
      for (let n2 = 0; n2 < e; n2++) for (let e2 = 0; e2 < t2.length - 1; e2++) {
        const i2 = e2 + n2 * t2.length, s2 = i2, a2 = i2 + t2.length, o2 = i2 + t2.length + 1, l3 = i2 + 1;
        r.push(s2, a2, l3), r.push(o2, l3, a2);
      }
      this.setIndex(r), this.setAttribute("position", new Ms(s, 3)), this.setAttribute("uv", new Ms(a, 2)), this.setAttribute("normal", new Ms(l2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _mu(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var fu = class _fu extends mu {
    constructor(t2 = 1, e = 1, n = 4, i = 8) {
      const r = new pu();
      r.absarc(0, -e / 2, t2, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t2, 0, 0.5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = { radius: t2, length: e, capSegments: n, radialSegments: i };
    }
    static fromJSON(t2) {
      return new _fu(t2.radius, t2.length, t2.capSegments, t2.radialSegments);
    }
  };
  var gu = class _gu extends Cs {
    constructor(t2 = 1, e = 32, n = 0, i = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e);
      const r = [], s = [], a = [], o = [], l2 = new Li(), c2 = new ti();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
      for (let r2 = 0, h2 = 3; r2 <= e; r2++, h2 += 3) {
        const u2 = n + r2 / e * i;
        l2.x = t2 * Math.cos(u2), l2.y = t2 * Math.sin(u2), s.push(l2.x, l2.y, l2.z), a.push(0, 0, 1), c2.x = (s[h2] / t2 + 1) / 2, c2.y = (s[h2 + 1] / t2 + 1) / 2, o.push(c2.x, c2.y);
      }
      for (let t3 = 1; t3 <= e; t3++) r.push(t3, t3 + 1, 0);
      this.setIndex(r), this.setAttribute("position", new Ms(s, 3)), this.setAttribute("normal", new Ms(a, 3)), this.setAttribute("uv", new Ms(o, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _gu(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var vu = class _vu extends Cs {
    constructor(t2 = 1, e = 1, n = 1, i = 32, r = 1, s = false, a = 0, o = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o };
      const l2 = this;
      i = Math.floor(i), r = Math.floor(r);
      const c2 = [], h2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m = [], f = n / 2;
      let g = 0;
      function v(n2) {
        const r2 = p2, s2 = new ti(), m2 = new Li();
        let v2 = 0;
        const _ = true === n2 ? t2 : e, x = true === n2 ? 1 : -1;
        for (let t3 = 1; t3 <= i; t3++) h2.push(0, f * x, 0), u2.push(0, x, 0), d2.push(0.5, 0.5), p2++;
        const y2 = p2;
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * o + a, n3 = Math.cos(e2), r3 = Math.sin(e2);
          m2.x = _ * r3, m2.y = f * x, m2.z = _ * n3, h2.push(m2.x, m2.y, m2.z), u2.push(0, x, 0), s2.x = 0.5 * n3 + 0.5, s2.y = 0.5 * r3 * x + 0.5, d2.push(s2.x, s2.y), p2++;
        }
        for (let t3 = 0; t3 < i; t3++) {
          const e2 = r2 + t3, i2 = y2 + t3;
          true === n2 ? c2.push(i2, i2 + 1, e2) : c2.push(i2 + 1, i2, e2), v2 += 3;
        }
        l2.addGroup(g, v2, true === n2 ? 1 : 2), g += v2;
      }
      !(function() {
        const s2 = new Li(), v2 = new Li();
        let _ = 0;
        const x = (e - t2) / n;
        for (let l3 = 0; l3 <= r; l3++) {
          const c3 = [], g2 = l3 / r, _2 = g2 * (e - t2) + t2;
          for (let t3 = 0; t3 <= i; t3++) {
            const e2 = t3 / i, r2 = e2 * o + a, l4 = Math.sin(r2), m2 = Math.cos(r2);
            v2.x = _2 * l4, v2.y = -g2 * n + f, v2.z = _2 * m2, h2.push(v2.x, v2.y, v2.z), s2.set(l4, x, m2).normalize(), u2.push(s2.x, s2.y, s2.z), d2.push(e2, 1 - g2), c3.push(p2++);
          }
          m.push(c3);
        }
        for (let n2 = 0; n2 < i; n2++) for (let i2 = 0; i2 < r; i2++) {
          const r2 = m[i2][n2], s3 = m[i2 + 1][n2], a2 = m[i2 + 1][n2 + 1], o2 = m[i2][n2 + 1];
          t2 > 0 && (c2.push(r2, s3, o2), _ += 3), e > 0 && (c2.push(s3, a2, o2), _ += 3);
        }
        l2.addGroup(g, _, 0), g += _;
      })(), false === s && (t2 > 0 && v(true), e > 0 && v(false)), this.setIndex(c2), this.setAttribute("position", new Ms(h2, 3)), this.setAttribute("normal", new Ms(u2, 3)), this.setAttribute("uv", new Ms(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _vu(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var _u = class __u extends vu {
    constructor(t2 = 1, e = 1, n = 32, i = 1, r = false, s = 0, a = 2 * Math.PI) {
      super(0, t2, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: s, thetaLength: a };
    }
    static fromJSON(t2) {
      return new __u(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var xu = class _xu extends Cs {
    constructor(t2 = [], e = [], n = 1, i = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e, radius: n, detail: i };
      const r = [], s = [];
      function a(t3, e2, n2, i2) {
        const r2 = i2 + 1, s2 = [];
        for (let i3 = 0; i3 <= r2; i3++) {
          s2[i3] = [];
          const a2 = t3.clone().lerp(n2, i3 / r2), o2 = e2.clone().lerp(n2, i3 / r2), l3 = r2 - i3;
          for (let t4 = 0; t4 <= l3; t4++) s2[i3][t4] = 0 === t4 && i3 === r2 ? a2 : a2.clone().lerp(o2, t4 / l3);
        }
        for (let t4 = 0; t4 < r2; t4++) for (let e3 = 0; e3 < 2 * (r2 - t4) - 1; e3++) {
          const n3 = Math.floor(e3 / 2);
          e3 % 2 == 0 ? (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3]), o(s2[t4][n3])) : (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3 + 1]), o(s2[t4 + 1][n3]));
        }
      }
      function o(t3) {
        r.push(t3.x, t3.y, t3.z);
      }
      function l2(e2, n2) {
        const i2 = 3 * e2;
        n2.x = t2[i2 + 0], n2.y = t2[i2 + 1], n2.z = t2[i2 + 2];
      }
      function c2(t3, e2, n2, i2) {
        i2 < 0 && 1 === t3.x && (s[e2] = t3.x - 1), 0 === n2.x && 0 === n2.z && (s[e2] = i2 / 2 / Math.PI + 0.5);
      }
      function h2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      !(function(t3) {
        const n2 = new Li(), i2 = new Li(), r2 = new Li();
        for (let s2 = 0; s2 < e.length; s2 += 3) l2(e[s2 + 0], n2), l2(e[s2 + 1], i2), l2(e[s2 + 2], r2), a(n2, i2, r2, t3);
      })(i), (function(t3) {
        const e2 = new Li();
        for (let n2 = 0; n2 < r.length; n2 += 3) e2.x = r[n2 + 0], e2.y = r[n2 + 1], e2.z = r[n2 + 2], e2.normalize().multiplyScalar(t3), r[n2 + 0] = e2.x, r[n2 + 1] = e2.y, r[n2 + 2] = e2.z;
      })(n), (function() {
        const t3 = new Li();
        for (let n2 = 0; n2 < r.length; n2 += 3) {
          t3.x = r[n2 + 0], t3.y = r[n2 + 1], t3.z = r[n2 + 2];
          const i2 = h2(t3) / 2 / Math.PI + 0.5, a2 = (e2 = t3, Math.atan2(-e2.y, Math.sqrt(e2.x * e2.x + e2.z * e2.z)) / Math.PI + 0.5);
          s.push(i2, 1 - a2);
        }
        var e2;
        (function() {
          const t4 = new Li(), e3 = new Li(), n2 = new Li(), i2 = new Li(), a2 = new ti(), o2 = new ti(), l3 = new ti();
          for (let u2 = 0, d2 = 0; u2 < r.length; u2 += 9, d2 += 6) {
            t4.set(r[u2 + 0], r[u2 + 1], r[u2 + 2]), e3.set(r[u2 + 3], r[u2 + 4], r[u2 + 5]), n2.set(r[u2 + 6], r[u2 + 7], r[u2 + 8]), a2.set(s[d2 + 0], s[d2 + 1]), o2.set(s[d2 + 2], s[d2 + 3]), l3.set(s[d2 + 4], s[d2 + 5]), i2.copy(t4).add(e3).add(n2).divideScalar(3);
            const p2 = h2(i2);
            c2(a2, d2 + 0, t4, p2), c2(o2, d2 + 2, e3, p2), c2(l3, d2 + 4, n2, p2);
          }
        })(), (function() {
          for (let t4 = 0; t4 < s.length; t4 += 6) {
            const e3 = s[t4 + 0], n2 = s[t4 + 2], i2 = s[t4 + 4], r2 = Math.max(e3, n2, i2), a2 = Math.min(e3, n2, i2);
            r2 > 0.9 && a2 < 0.1 && (e3 < 0.2 && (s[t4 + 0] += 1), n2 < 0.2 && (s[t4 + 2] += 1), i2 < 0.2 && (s[t4 + 4] += 1));
          }
        })();
      })(), this.setAttribute("position", new Ms(r, 3)), this.setAttribute("normal", new Ms(r.slice(), 3)), this.setAttribute("uv", new Ms(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _xu(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var yu = class _yu extends xu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _yu(t2.radius, t2.detail);
    }
  };
  var Mu = new Li();
  var Su = new Li();
  var bu = new Li();
  var wu = new Zr();
  var Tu = class extends Cs {
    constructor(t2 = null, e = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e }, null !== t2) {
        const n = 4, i = Math.pow(10, n), r = Math.cos(Xn * e), s = t2.getIndex(), a = t2.getAttribute("position"), o = s ? s.count : a.count, l2 = [0, 0, 0], c2 = ["a", "b", "c"], h2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o; t3 += 3) {
          s ? (l2[0] = s.getX(t3), l2[1] = s.getX(t3 + 1), l2[2] = s.getX(t3 + 2)) : (l2[0] = t3, l2[1] = t3 + 1, l2[2] = t3 + 2);
          const { a: e2, b: n2, c: o2 } = wu;
          if (e2.fromBufferAttribute(a, l2[0]), n2.fromBufferAttribute(a, l2[1]), o2.fromBufferAttribute(a, l2[2]), wu.getNormal(bu), h2[0] = `${Math.round(e2.x * i)},${Math.round(e2.y * i)},${Math.round(e2.z * i)}`, h2[1] = `${Math.round(n2.x * i)},${Math.round(n2.y * i)},${Math.round(n2.z * i)}`, h2[2] = `${Math.round(o2.x * i)},${Math.round(o2.y * i)},${Math.round(o2.z * i)}`, h2[0] !== h2[1] && h2[1] !== h2[2] && h2[2] !== h2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e3 = (t4 + 1) % 3, n3 = h2[t4], i2 = h2[e3], s2 = wu[c2[t4]], a2 = wu[c2[e3]], o3 = `${n3}_${i2}`, p2 = `${i2}_${n3}`;
            p2 in u2 && u2[p2] ? (bu.dot(u2[p2].normal) <= r && (d2.push(s2.x, s2.y, s2.z), d2.push(a2.x, a2.y, a2.z)), u2[p2] = null) : o3 in u2 || (u2[o3] = { index0: l2[t4], index1: l2[e3], normal: bu.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e2, index1: n2 } = u2[t3];
          Mu.fromBufferAttribute(a, e2), Su.fromBufferAttribute(a, n2), d2.push(Mu.x, Mu.y, Mu.z), d2.push(Su.x, Su.y, Su.z);
        }
        this.setAttribute("position", new Ms(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var Eu = class extends pu {
    constructor(t2) {
      super(t2), this.uuid = qn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e = [];
      for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t2);
      return e;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e = 0, n = this.holes.length; e < n; e++) {
        const n2 = this.holes[e];
        t2.holes.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(new pu().fromJSON(n2));
      }
      return this;
    }
  };
  var Au = function(t2, e, n = 2) {
    const i = e && e.length, r = i ? e[0] * n : t2.length;
    let s = Ru(t2, 0, r, n, true);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l2, c2, h2, u2, d2, p2;
    if (i && (s = (function(t3, e2, n2, i2) {
      const r2 = [];
      let s2, a2, o2, l3, c3;
      for (s2 = 0, a2 = e2.length; s2 < a2; s2++) o2 = e2[s2] * i2, l3 = s2 < a2 - 1 ? e2[s2 + 1] * i2 : t3.length, c3 = Ru(t3, o2, l3, i2, false), c3 === c3.next && (c3.steiner = true), r2.push(zu(c3));
      for (r2.sort(Du), s2 = 0; s2 < r2.length; s2++) n2 = Ou(r2[s2], n2);
      return n2;
    })(t2, e, s, n)), t2.length > 80 * n) {
      o = c2 = t2[0], l2 = h2 = t2[1];
      for (let e2 = n; e2 < r; e2 += n) u2 = t2[e2], d2 = t2[e2 + 1], u2 < o && (o = u2), d2 < l2 && (l2 = d2), u2 > c2 && (c2 = u2), d2 > h2 && (h2 = d2);
      p2 = Math.max(c2 - o, h2 - l2), p2 = 0 !== p2 ? 32767 / p2 : 0;
    }
    return Pu(s, a, n, o, l2, p2, 0), a;
  };
  function Ru(t2, e, n, i, r) {
    let s, a;
    if (r === (function(t3, e2, n2, i2) {
      let r2 = 0;
      for (let s2 = e2, a2 = n2 - i2; s2 < n2; s2 += i2) r2 += (t3[a2] - t3[s2]) * (t3[s2 + 1] + t3[a2 + 1]), a2 = s2;
      return r2;
    })(t2, e, n, i) > 0) for (s = e; s < n; s += i) a = Zu(s, t2[s], t2[s + 1], a);
    else for (s = n - i; s >= e; s -= i) a = Zu(s, t2[s], t2[s + 1], a);
    return a && Gu(a, a.next) && (Ju(a), a = a.next), a;
  }
  function Cu(t2, e) {
    if (!t2) return t2;
    e || (e = t2);
    let n, i = t2;
    do {
      if (n = false, i.steiner || !Gu(i, i.next) && 0 !== Hu(i.prev, i, i.next)) i = i.next;
      else {
        if (Ju(i), i = e = i.prev, i === i.next) break;
        n = true;
      }
    } while (n || i !== e);
    return e;
  }
  function Pu(t2, e, n, i, r, s, a) {
    if (!t2) return;
    !a && s && (function(t3, e2, n2, i2) {
      let r2 = t3;
      do {
        0 === r2.z && (r2.z = Bu(r2.x, r2.y, e2, n2, i2)), r2.prevZ = r2.prev, r2.nextZ = r2.next, r2 = r2.next;
      } while (r2 !== t3);
      r2.prevZ.nextZ = null, r2.prevZ = null, (function(t4) {
        let e3, n3, i3, r3, s2, a2, o2, l3, c3 = 1;
        do {
          for (n3 = t4, t4 = null, s2 = null, a2 = 0; n3; ) {
            for (a2++, i3 = n3, o2 = 0, e3 = 0; e3 < c3 && (o2++, i3 = i3.nextZ, i3); e3++) ;
            for (l3 = c3; o2 > 0 || l3 > 0 && i3; ) 0 !== o2 && (0 === l3 || !i3 || n3.z <= i3.z) ? (r3 = n3, n3 = n3.nextZ, o2--) : (r3 = i3, i3 = i3.nextZ, l3--), s2 ? s2.nextZ = r3 : t4 = r3, r3.prevZ = s2, s2 = r3;
            n3 = i3;
          }
          s2.nextZ = null, c3 *= 2;
        } while (a2 > 1);
      })(r2);
    })(t2, i, r, s);
    let o, l2, c2 = t2;
    for (; t2.prev !== t2.next; ) if (o = t2.prev, l2 = t2.next, s ? Lu(t2, i, r, s) : Iu(t2)) e.push(o.i / n | 0), e.push(t2.i / n | 0), e.push(l2.i / n | 0), Ju(t2), t2 = l2.next, c2 = l2.next;
    else if ((t2 = l2) === c2) {
      a ? 1 === a ? Pu(t2 = Uu(Cu(t2), e, n), e, n, i, r, s, 2) : 2 === a && Nu(t2, e, n, i, r, s) : Pu(Cu(t2), e, n, i, r, s, 1);
      break;
    }
  }
  function Iu(t2) {
    const e = t2.prev, n = t2, i = t2.next;
    if (Hu(e, n, i) >= 0) return false;
    const r = e.x, s = n.x, a = i.x, o = e.y, l2 = n.y, c2 = i.y, h2 = r < s ? r < a ? r : a : s < a ? s : a, u2 = o < l2 ? o < c2 ? o : c2 : l2 < c2 ? l2 : c2, d2 = r > s ? r > a ? r : a : s > a ? s : a, p2 = o > l2 ? o > c2 ? o : c2 : l2 > c2 ? l2 : c2;
    let m = i.next;
    for (; m !== e; ) {
      if (m.x >= h2 && m.x <= d2 && m.y >= u2 && m.y <= p2 && ku(r, o, s, l2, a, c2, m.x, m.y) && Hu(m.prev, m, m.next) >= 0) return false;
      m = m.next;
    }
    return true;
  }
  function Lu(t2, e, n, i) {
    const r = t2.prev, s = t2, a = t2.next;
    if (Hu(r, s, a) >= 0) return false;
    const o = r.x, l2 = s.x, c2 = a.x, h2 = r.y, u2 = s.y, d2 = a.y, p2 = o < l2 ? o < c2 ? o : c2 : l2 < c2 ? l2 : c2, m = h2 < u2 ? h2 < d2 ? h2 : d2 : u2 < d2 ? u2 : d2, f = o > l2 ? o > c2 ? o : c2 : l2 > c2 ? l2 : c2, g = h2 > u2 ? h2 > d2 ? h2 : d2 : u2 > d2 ? u2 : d2, v = Bu(p2, m, e, n, i), _ = Bu(f, g, e, n, i);
    let x = t2.prevZ, y2 = t2.nextZ;
    for (; x && x.z >= v && y2 && y2.z <= _; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && ku(o, h2, l2, u2, c2, d2, x.x, x.y) && Hu(x.prev, x, x.next) >= 0) return false;
      if (x = x.prevZ, y2.x >= p2 && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && ku(o, h2, l2, u2, c2, d2, y2.x, y2.y) && Hu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    for (; x && x.z >= v; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && ku(o, h2, l2, u2, c2, d2, x.x, x.y) && Hu(x.prev, x, x.next) >= 0) return false;
      x = x.prevZ;
    }
    for (; y2 && y2.z <= _; ) {
      if (y2.x >= p2 && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && ku(o, h2, l2, u2, c2, d2, y2.x, y2.y) && Hu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    return true;
  }
  function Uu(t2, e, n) {
    let i = t2;
    do {
      const r = i.prev, s = i.next.next;
      !Gu(r, s) && Wu(r, i, i.next, s) && qu(r, s) && qu(s, r) && (e.push(r.i / n | 0), e.push(i.i / n | 0), e.push(s.i / n | 0), Ju(i), Ju(i.next), i = t2 = s), i = i.next;
    } while (i !== t2);
    return Cu(i);
  }
  function Nu(t2, e, n, i, r, s) {
    let a = t2;
    do {
      let t3 = a.next.next;
      for (; t3 !== a.prev; ) {
        if (a.i !== t3.i && Vu(a, t3)) {
          let o = Yu(a, t3);
          return a = Cu(a, a.next), o = Cu(o, o.next), Pu(a, e, n, i, r, s, 0), void Pu(o, e, n, i, r, s, 0);
        }
        t3 = t3.next;
      }
      a = a.next;
    } while (a !== t2);
  }
  function Du(t2, e) {
    return t2.x - e.x;
  }
  function Ou(t2, e) {
    const n = (function(t3, e2) {
      let n2, i2 = e2, r = -1 / 0;
      const s = t3.x, a = t3.y;
      do {
        if (a <= i2.y && a >= i2.next.y && i2.next.y !== i2.y) {
          const t4 = i2.x + (a - i2.y) * (i2.next.x - i2.x) / (i2.next.y - i2.y);
          if (t4 <= s && t4 > r && (r = t4, n2 = i2.x < i2.next.x ? i2 : i2.next, t4 === s)) return n2;
        }
        i2 = i2.next;
      } while (i2 !== e2);
      if (!n2) return null;
      const o = n2, l2 = n2.x, c2 = n2.y;
      let h2, u2 = 1 / 0;
      i2 = n2;
      do {
        s >= i2.x && i2.x >= l2 && s !== i2.x && ku(a < c2 ? s : r, a, l2, c2, a < c2 ? r : s, a, i2.x, i2.y) && (h2 = Math.abs(a - i2.y) / (s - i2.x), qu(i2, t3) && (h2 < u2 || h2 === u2 && (i2.x > n2.x || i2.x === n2.x && Fu(n2, i2))) && (n2 = i2, u2 = h2)), i2 = i2.next;
      } while (i2 !== o);
      return n2;
    })(t2, e);
    if (!n) return e;
    const i = Yu(n, t2);
    return Cu(i, i.next), Cu(n, n.next);
  }
  function Fu(t2, e) {
    return Hu(t2.prev, t2, e.prev) < 0 && Hu(e.next, t2, t2.next) < 0;
  }
  function Bu(t2, e, n, i, r) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - n) * r | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }
  function zu(t2) {
    let e = t2, n = t2;
    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t2);
    return n;
  }
  function ku(t2, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) >= (t2 - a) * (s - o) && (t2 - a) * (i - o) >= (n - a) * (e - o) && (n - a) * (s - o) >= (r - a) * (i - o);
  }
  function Vu(t2, e) {
    return t2.next.i !== e.i && t2.prev.i !== e.i && !(function(t3, e2) {
      let n = t3;
      do {
        if (n.i !== t3.i && n.next.i !== t3.i && n.i !== e2.i && n.next.i !== e2.i && Wu(n, n.next, t3, e2)) return true;
        n = n.next;
      } while (n !== t3);
      return false;
    })(t2, e) && (qu(t2, e) && qu(e, t2) && (function(t3, e2) {
      let n = t3, i = false;
      const r = (t3.x + e2.x) / 2, s = (t3.y + e2.y) / 2;
      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
      } while (n !== t3);
      return i;
    })(t2, e) && (Hu(t2.prev, t2, e.prev) || Hu(t2, e.prev, e)) || Gu(t2, e) && Hu(t2.prev, t2, t2.next) > 0 && Hu(e.prev, e, e.next) > 0);
  }
  function Hu(t2, e, n) {
    return (e.y - t2.y) * (n.x - e.x) - (e.x - t2.x) * (n.y - e.y);
  }
  function Gu(t2, e) {
    return t2.x === e.x && t2.y === e.y;
  }
  function Wu(t2, e, n, i) {
    const r = ju(Hu(t2, e, n)), s = ju(Hu(t2, e, i)), a = ju(Hu(n, i, t2)), o = ju(Hu(n, i, e));
    return r !== s && a !== o || (!(0 !== r || !Xu(t2, n, e)) || (!(0 !== s || !Xu(t2, i, e)) || (!(0 !== a || !Xu(n, t2, i)) || !(0 !== o || !Xu(n, e, i)))));
  }
  function Xu(t2, e, n) {
    return e.x <= Math.max(t2.x, n.x) && e.x >= Math.min(t2.x, n.x) && e.y <= Math.max(t2.y, n.y) && e.y >= Math.min(t2.y, n.y);
  }
  function ju(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function qu(t2, e) {
    return Hu(t2.prev, t2, t2.next) < 0 ? Hu(t2, e, t2.next) >= 0 && Hu(t2, t2.prev, e) >= 0 : Hu(t2, e, t2.prev) < 0 || Hu(t2, t2.next, e) < 0;
  }
  function Yu(t2, e) {
    const n = new Ku(t2.i, t2.x, t2.y), i = new Ku(e.i, e.x, e.y), r = t2.next, s = e.prev;
    return t2.next = e, e.prev = t2, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
  }
  function Zu(t2, e, n, i) {
    const r = new Ku(t2, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }
  function Ju(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function Ku(t2, e, n) {
    this.i = t2, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  var $u = class _$u {
    static area(t2) {
      const e = t2.length;
      let n = 0;
      for (let i = e - 1, r = 0; r < e; i = r++) n += t2[i].x * t2[r].y - t2[r].x * t2[i].y;
      return 0.5 * n;
    }
    static isClockWise(t2) {
      return _$u.area(t2) < 0;
    }
    static triangulateShape(t2, e) {
      const n = [], i = [], r = [];
      Qu(t2), td(n, t2);
      let s = t2.length;
      e.forEach(Qu);
      for (let t3 = 0; t3 < e.length; t3++) i.push(s), s += e[t3].length, td(n, e[t3]);
      const a = Au(n, i);
      for (let t3 = 0; t3 < a.length; t3 += 3) r.push(a.slice(t3, t3 + 3));
      return r;
    }
  };
  function Qu(t2) {
    const e = t2.length;
    e > 2 && t2[e - 1].equals(t2[0]) && t2.pop();
  }
  function td(t2, e) {
    for (let n = 0; n < e.length; n++) t2.push(e[n].x), t2.push(e[n].y);
  }
  var ed = class _ed extends Cs {
    constructor(t2 = new Eu([new ti(0.5, 0.5), new ti(-0.5, 0.5), new ti(-0.5, -0.5), new ti(0.5, -0.5)]), e = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e }, t2 = Array.isArray(t2) ? t2 : [t2];
      const n = this, i = [], r = [];
      for (let e2 = 0, n2 = t2.length; e2 < n2; e2++) {
        s(t2[e2]);
      }
      function s(t3) {
        const s2 = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l2 = void 0 !== e.depth ? e.depth : 1;
        let c2 = void 0 === e.bevelEnabled || e.bevelEnabled, h2 = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2, u2 = void 0 !== e.bevelSize ? e.bevelSize : h2 - 0.1, d2 = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p2 = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : nd;
        let g, v, _, x, y2, M = false;
        m && (g = m.getSpacedPoints(o), M = true, c2 = false, v = m.computeFrenetFrames(o, false), _ = new Li(), x = new Li(), y2 = new Li()), c2 || (p2 = 0, h2 = 0, u2 = 0, d2 = 0);
        const S = t3.extractPoints(a);
        let b = S.shape;
        const w = S.holes;
        if (!$u.isClockWise(b)) {
          b = b.reverse();
          for (let t4 = 0, e2 = w.length; t4 < e2; t4++) {
            const e3 = w[t4];
            $u.isClockWise(e3) && (w[t4] = e3.reverse());
          }
        }
        const T = $u.triangulateShape(b, w), E = b;
        for (let t4 = 0, e2 = w.length; t4 < e2; t4++) {
          const e3 = w[t4];
          b = b.concat(e3);
        }
        function A(t4, e2, n2) {
          return e2 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e2, n2);
        }
        const R = b.length, C3 = T.length;
        function P2(t4, e2, n2) {
          let i2, r2, s3;
          const a2 = t4.x - e2.x, o2 = t4.y - e2.y, l3 = n2.x - t4.x, c3 = n2.y - t4.y, h3 = a2 * a2 + o2 * o2, u3 = a2 * c3 - o2 * l3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(h3), d3 = Math.sqrt(l3 * l3 + c3 * c3), p3 = e2.x - o2 / u4, m2 = e2.y + a2 / u4, f2 = ((n2.x - c3 / d3 - p3) * c3 - (n2.y + l3 / d3 - m2) * l3) / (a2 * c3 - o2 * l3);
            i2 = p3 + a2 * f2 - t4.x, r2 = m2 + o2 * f2 - t4.y;
            const g2 = i2 * i2 + r2 * r2;
            if (g2 <= 2) return new ti(i2, r2);
            s3 = Math.sqrt(g2 / 2);
          } else {
            let t5 = false;
            a2 > Number.EPSILON ? l3 > Number.EPSILON && (t5 = true) : a2 < -Number.EPSILON ? l3 < -Number.EPSILON && (t5 = true) : Math.sign(o2) === Math.sign(c3) && (t5 = true), t5 ? (i2 = -o2, r2 = a2, s3 = Math.sqrt(h3)) : (i2 = a2, r2 = o2, s3 = Math.sqrt(h3 / 2));
          }
          return new ti(i2 / s3, r2 / s3);
        }
        const I = [];
        for (let t4 = 0, e2 = E.length, n2 = e2 - 1, i2 = t4 + 1; t4 < e2; t4++, n2++, i2++) n2 === e2 && (n2 = 0), i2 === e2 && (i2 = 0), I[t4] = P2(E[t4], E[n2], E[i2]);
        const L = [];
        let U, N = I.concat();
        for (let t4 = 0, e2 = w.length; t4 < e2; t4++) {
          const e3 = w[t4];
          U = [];
          for (let t5 = 0, n2 = e3.length, i2 = n2 - 1, r2 = t5 + 1; t5 < n2; t5++, i2++, r2++) i2 === n2 && (i2 = 0), r2 === n2 && (r2 = 0), U[t5] = P2(e3[t5], e3[i2], e3[r2]);
          L.push(U), N = N.concat(U);
        }
        for (let t4 = 0; t4 < p2; t4++) {
          const e2 = t4 / p2, n2 = h2 * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = E.length; t5 < e3; t5++) {
            const e4 = A(E[t5], I[t5], i2);
            F(e4.x, e4.y, -n2);
          }
          for (let t5 = 0, e3 = w.length; t5 < e3; t5++) {
            const e4 = w[t5];
            U = L[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A(e4[t6], U[t6], i2);
              F(r3.x, r3.y, -n2);
            }
          }
        }
        const D = u2 + d2;
        for (let t4 = 0; t4 < R; t4++) {
          const e2 = c2 ? A(b[t4], N[t4], D) : b[t4];
          M ? (x.copy(v.normals[0]).multiplyScalar(e2.x), _.copy(v.binormals[0]).multiplyScalar(e2.y), y2.copy(g[0]).add(x).add(_), F(y2.x, y2.y, y2.z)) : F(e2.x, e2.y, 0);
        }
        for (let t4 = 1; t4 <= o; t4++) for (let e2 = 0; e2 < R; e2++) {
          const n2 = c2 ? A(b[e2], N[e2], D) : b[e2];
          M ? (x.copy(v.normals[t4]).multiplyScalar(n2.x), _.copy(v.binormals[t4]).multiplyScalar(n2.y), y2.copy(g[t4]).add(x).add(_), F(y2.x, y2.y, y2.z)) : F(n2.x, n2.y, l2 / o * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e2 = t4 / p2, n2 = h2 * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = E.length; t5 < e3; t5++) {
            const e4 = A(E[t5], I[t5], i2);
            F(e4.x, e4.y, l2 + n2);
          }
          for (let t5 = 0, e3 = w.length; t5 < e3; t5++) {
            const e4 = w[t5];
            U = L[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A(e4[t6], U[t6], i2);
              M ? F(r3.x, r3.y + g[o - 1].y, g[o - 1].x + n2) : F(r3.x, r3.y, l2 + n2);
            }
          }
        }
        function O(t4, e2) {
          let n2 = t4.length;
          for (; --n2 >= 0; ) {
            const i2 = n2;
            let r2 = n2 - 1;
            r2 < 0 && (r2 = t4.length - 1);
            for (let t5 = 0, n3 = o + 2 * p2; t5 < n3; t5++) {
              const n4 = R * t5, s3 = R * (t5 + 1);
              z(e2 + i2 + n4, e2 + r2 + n4, e2 + r2 + s3, e2 + i2 + s3);
            }
          }
        }
        function F(t4, e2, n2) {
          s2.push(t4), s2.push(e2), s2.push(n2);
        }
        function B(t4, e2, r2) {
          k(t4), k(e2), k(r2);
          const s3 = i.length / 3, a2 = f.generateTopUV(n, i, s3 - 3, s3 - 2, s3 - 1);
          V(a2[0]), V(a2[1]), V(a2[2]);
        }
        function z(t4, e2, r2, s3) {
          k(t4), k(e2), k(s3), k(e2), k(r2), k(s3);
          const a2 = i.length / 3, o2 = f.generateSideWallUV(n, i, a2 - 6, a2 - 3, a2 - 2, a2 - 1);
          V(o2[0]), V(o2[1]), V(o2[3]), V(o2[1]), V(o2[2]), V(o2[3]);
        }
        function k(t4) {
          i.push(s2[3 * t4 + 0]), i.push(s2[3 * t4 + 1]), i.push(s2[3 * t4 + 2]);
        }
        function V(t4) {
          r.push(t4.x), r.push(t4.y);
        }
        !(function() {
          const t4 = i.length / 3;
          if (c2) {
            let t5 = 0, e2 = R * t5;
            for (let t6 = 0; t6 < C3; t6++) {
              const n2 = T[t6];
              B(n2[2] + e2, n2[1] + e2, n2[0] + e2);
            }
            t5 = o + 2 * p2, e2 = R * t5;
            for (let t6 = 0; t6 < C3; t6++) {
              const n2 = T[t6];
              B(n2[0] + e2, n2[1] + e2, n2[2] + e2);
            }
          } else {
            for (let t5 = 0; t5 < C3; t5++) {
              const e2 = T[t5];
              B(e2[2], e2[1], e2[0]);
            }
            for (let t5 = 0; t5 < C3; t5++) {
              const e2 = T[t5];
              B(e2[0] + R * o, e2[1] + R * o, e2[2] + R * o);
            }
          }
          n.addGroup(t4, i.length / 3 - t4, 0);
        })(), (function() {
          const t4 = i.length / 3;
          let e2 = 0;
          O(E, e2), e2 += E.length;
          for (let t5 = 0, n2 = w.length; t5 < n2; t5++) {
            const n3 = w[t5];
            O(n3, e2), e2 += n3.length;
          }
          n.addGroup(t4, i.length / 3 - t4, 1);
        })();
      }
      this.setAttribute("position", new Ms(i, 3)), this.setAttribute("uv", new Ms(r, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e, n) {
        if (n.shapes = [], Array.isArray(t3)) for (let e2 = 0, i = t3.length; e2 < i; e2++) {
          const i2 = t3[e2];
          n.shapes.push(i2.uuid);
        }
        else n.shapes.push(t3.uuid);
        n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      })(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i2 = 0, r = t2.shapes.length; i2 < r; i2++) {
        const r2 = e[t2.shapes[i2]];
        n.push(r2);
      }
      const i = t2.options.extrudePath;
      return void 0 !== i && (t2.options.extrudePath = new uu[i.type]().fromJSON(i)), new _ed(n, t2.options);
    }
  };
  var nd = { generateTopUV: function(t2, e, n, i, r) {
    const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l2 = e[3 * i + 1], c2 = e[3 * r], h2 = e[3 * r + 1];
    return [new ti(s, a), new ti(o, l2), new ti(c2, h2)];
  }, generateSideWallUV: function(t2, e, n, i, r, s) {
    const a = e[3 * n], o = e[3 * n + 1], l2 = e[3 * n + 2], c2 = e[3 * i], h2 = e[3 * i + 1], u2 = e[3 * i + 2], d2 = e[3 * r], p2 = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
    return Math.abs(o - h2) < Math.abs(a - c2) ? [new ti(a, 1 - l2), new ti(c2, 1 - u2), new ti(d2, 1 - m), new ti(f, 1 - v)] : [new ti(o, 1 - l2), new ti(h2, 1 - u2), new ti(p2, 1 - m), new ti(g, 1 - v)];
  } };
  var id = class _id extends xu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2;
      super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _id(t2.radius, t2.detail);
    }
  };
  var rd = class _rd extends xu {
    constructor(t2 = 1, e = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _rd(t2.radius, t2.detail);
    }
  };
  var sd = class _sd extends Cs {
    constructor(t2 = 0.5, e = 1, n = 32, i = 1, r = 0, s = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: s }, n = Math.max(3, n);
      const a = [], o = [], l2 = [], c2 = [];
      let h2 = t2;
      const u2 = (e - t2) / (i = Math.max(1, i)), d2 = new Li(), p2 = new ti();
      for (let t3 = 0; t3 <= i; t3++) {
        for (let t4 = 0; t4 <= n; t4++) {
          const i2 = r + t4 / n * s;
          d2.x = h2 * Math.cos(i2), d2.y = h2 * Math.sin(i2), o.push(d2.x, d2.y, d2.z), l2.push(0, 0, 1), p2.x = (d2.x / e + 1) / 2, p2.y = (d2.y / e + 1) / 2, c2.push(p2.x, p2.y);
        }
        h2 += u2;
      }
      for (let t3 = 0; t3 < i; t3++) {
        const e2 = t3 * (n + 1);
        for (let t4 = 0; t4 < n; t4++) {
          const i2 = t4 + e2, r2 = i2, s2 = i2 + n + 1, o2 = i2 + n + 2, l3 = i2 + 1;
          a.push(r2, s2, l3), a.push(s2, o2, l3);
        }
      }
      this.setIndex(a), this.setAttribute("position", new Ms(o, 3)), this.setAttribute("normal", new Ms(l2, 3)), this.setAttribute("uv", new Ms(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _sd(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var ad = class _ad extends Cs {
    constructor(t2 = new Eu([new ti(0, 0.5), new ti(-0.5, -0.5), new ti(0.5, -0.5)]), e = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e };
      const n = [], i = [], r = [], s = [];
      let a = 0, o = 0;
      if (false === Array.isArray(t2)) l2(t2);
      else for (let e2 = 0; e2 < t2.length; e2++) l2(t2[e2]), this.addGroup(a, o, e2), a += o, o = 0;
      function l2(t3) {
        const a2 = i.length / 3, l3 = t3.extractPoints(e);
        let c2 = l3.shape;
        const h2 = l3.holes;
        false === $u.isClockWise(c2) && (c2 = c2.reverse());
        for (let t4 = 0, e2 = h2.length; t4 < e2; t4++) {
          const e3 = h2[t4];
          true === $u.isClockWise(e3) && (h2[t4] = e3.reverse());
        }
        const u2 = $u.triangulateShape(c2, h2);
        for (let t4 = 0, e2 = h2.length; t4 < e2; t4++) {
          const e3 = h2[t4];
          c2 = c2.concat(e3);
        }
        for (let t4 = 0, e2 = c2.length; t4 < e2; t4++) {
          const e3 = c2[t4];
          i.push(e3.x, e3.y, 0), r.push(0, 0, 1), s.push(e3.x, e3.y);
        }
        for (let t4 = 0, e2 = u2.length; t4 < e2; t4++) {
          const e3 = u2[t4], i2 = e3[0] + a2, r2 = e3[1] + a2, s2 = e3[2] + a2;
          n.push(i2, r2, s2), o += 3;
        }
      }
      this.setIndex(n), this.setAttribute("position", new Ms(i, 3)), this.setAttribute("normal", new Ms(r, 3)), this.setAttribute("uv", new Ms(s, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e) {
        if (e.shapes = [], Array.isArray(t3)) for (let n = 0, i = t3.length; n < i; n++) {
          const i2 = t3[n];
          e.shapes.push(i2.uuid);
        }
        else e.shapes.push(t3.uuid);
        return e;
      })(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i = 0, r = t2.shapes.length; i < r; i++) {
        const r2 = e[t2.shapes[i]];
        n.push(r2);
      }
      return new _ad(n, t2.curveSegments);
    }
  };
  var od = class _od extends Cs {
    constructor(t2 = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: s, thetaLength: a }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      const o = Math.min(s + a, Math.PI);
      let l2 = 0;
      const c2 = [], h2 = new Li(), u2 = new Li(), d2 = [], p2 = [], m = [], f = [];
      for (let d3 = 0; d3 <= n; d3++) {
        const g = [], v = d3 / n;
        let _ = 0;
        0 === d3 && 0 === s ? _ = 0.5 / e : d3 === n && o === Math.PI && (_ = -0.5 / e);
        for (let n2 = 0; n2 <= e; n2++) {
          const o2 = n2 / e;
          h2.x = -t2 * Math.cos(i + o2 * r) * Math.sin(s + v * a), h2.y = t2 * Math.cos(s + v * a), h2.z = t2 * Math.sin(i + o2 * r) * Math.sin(s + v * a), p2.push(h2.x, h2.y, h2.z), u2.copy(h2).normalize(), m.push(u2.x, u2.y, u2.z), f.push(o2 + _, 1 - v), g.push(l2++);
        }
        c2.push(g);
      }
      for (let t3 = 0; t3 < n; t3++) for (let i2 = 0; i2 < e; i2++) {
        const e2 = c2[t3][i2 + 1], r2 = c2[t3][i2], a2 = c2[t3 + 1][i2], l3 = c2[t3 + 1][i2 + 1];
        (0 !== t3 || s > 0) && d2.push(e2, r2, l3), (t3 !== n - 1 || o < Math.PI) && d2.push(r2, a2, l3);
      }
      this.setIndex(d2), this.setAttribute("position", new Ms(p2, 3)), this.setAttribute("normal", new Ms(m, 3)), this.setAttribute("uv", new Ms(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _od(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var ld = class _ld extends xu {
    constructor(t2 = 1, e = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _ld(t2.radius, t2.detail);
    }
  };
  var cd = class _cd extends Cs {
    constructor(t2 = 1, e = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
      const s = [], a = [], o = [], l2 = [], c2 = new Li(), h2 = new Li(), u2 = new Li();
      for (let s2 = 0; s2 <= n; s2++) for (let d2 = 0; d2 <= i; d2++) {
        const p2 = d2 / i * r, m = s2 / n * Math.PI * 2;
        h2.x = (t2 + e * Math.cos(m)) * Math.cos(p2), h2.y = (t2 + e * Math.cos(m)) * Math.sin(p2), h2.z = e * Math.sin(m), a.push(h2.x, h2.y, h2.z), c2.x = t2 * Math.cos(p2), c2.y = t2 * Math.sin(p2), u2.subVectors(h2, c2).normalize(), o.push(u2.x, u2.y, u2.z), l2.push(d2 / i), l2.push(s2 / n);
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * t3 + e2 - 1, r2 = (i + 1) * (t3 - 1) + e2 - 1, a2 = (i + 1) * (t3 - 1) + e2, o2 = (i + 1) * t3 + e2;
        s.push(n2, r2, o2), s.push(r2, a2, o2);
      }
      this.setIndex(s), this.setAttribute("position", new Ms(a, 3)), this.setAttribute("normal", new Ms(o, 3)), this.setAttribute("uv", new Ms(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _cd(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var hd = class _hd extends Cs {
    constructor(t2 = 1, e = 0.4, n = 64, i = 8, r = 2, s = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e, tubularSegments: n, radialSegments: i, p: r, q: s }, n = Math.floor(n), i = Math.floor(i);
      const a = [], o = [], l2 = [], c2 = [], h2 = new Li(), u2 = new Li(), d2 = new Li(), p2 = new Li(), m = new Li(), f = new Li(), g = new Li();
      for (let a2 = 0; a2 <= n; ++a2) {
        const _ = a2 / n * r * Math.PI * 2;
        v(_, r, s, t2, d2), v(_ + 0.01, r, s, t2, p2), f.subVectors(p2, d2), g.addVectors(p2, d2), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
        for (let t3 = 0; t3 <= i; ++t3) {
          const r2 = t3 / i * Math.PI * 2, s2 = -e * Math.cos(r2), p3 = e * Math.sin(r2);
          h2.x = d2.x + (s2 * g.x + p3 * m.x), h2.y = d2.y + (s2 * g.y + p3 * m.y), h2.z = d2.z + (s2 * g.z + p3 * m.z), o.push(h2.x, h2.y, h2.z), u2.subVectors(h2, d2).normalize(), l2.push(u2.x, u2.y, u2.z), c2.push(a2 / n), c2.push(t3 / i);
        }
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, o2 = (i + 1) * (t3 - 1) + e2;
        a.push(n2, r2, o2), a.push(r2, s2, o2);
      }
      function v(t3, e2, n2, i2, r2) {
        const s2 = Math.cos(t3), a2 = Math.sin(t3), o2 = n2 / e2 * t3, l3 = Math.cos(o2);
        r2.x = i2 * (2 + l3) * 0.5 * s2, r2.y = i2 * (2 + l3) * a2 * 0.5, r2.z = i2 * Math.sin(o2) * 0.5;
      }
      this.setIndex(a), this.setAttribute("position", new Ms(o, 3)), this.setAttribute("normal", new Ms(l2, 3)), this.setAttribute("uv", new Ms(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _hd(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var ud = class _ud extends Cs {
    constructor(t2 = new cu(new Li(-1, -1, 0), new Li(-1, 1, 0), new Li(1, 1, 0)), e = 64, n = 1, i = 8, r = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e, radius: n, radialSegments: i, closed: r };
      const s = t2.computeFrenetFrames(e, r);
      this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
      const a = new Li(), o = new Li(), l2 = new ti();
      let c2 = new Li();
      const h2 = [], u2 = [], d2 = [], p2 = [];
      function m(r2) {
        c2 = t2.getPointAt(r2 / e, c2);
        const l3 = s.normals[r2], d3 = s.binormals[r2];
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * Math.PI * 2, r3 = Math.sin(e2), s2 = -Math.cos(e2);
          o.x = s2 * l3.x + r3 * d3.x, o.y = s2 * l3.y + r3 * d3.y, o.z = s2 * l3.z + r3 * d3.z, o.normalize(), u2.push(o.x, o.y, o.z), a.x = c2.x + n * o.x, a.y = c2.y + n * o.y, a.z = c2.z + n * o.z, h2.push(a.x, a.y, a.z);
        }
      }
      !(function() {
        for (let t3 = 0; t3 < e; t3++) m(t3);
        m(false === r ? e : 0), (function() {
          for (let t3 = 0; t3 <= e; t3++) for (let n2 = 0; n2 <= i; n2++) l2.x = t3 / e, l2.y = n2 / i, d2.push(l2.x, l2.y);
        })(), (function() {
          for (let t3 = 1; t3 <= e; t3++) for (let e2 = 1; e2 <= i; e2++) {
            const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, a2 = (i + 1) * (t3 - 1) + e2;
            p2.push(n2, r2, a2), p2.push(r2, s2, a2);
          }
        })();
      })(), this.setIndex(p2), this.setAttribute("position", new Ms(h2, 3)), this.setAttribute("normal", new Ms(u2, 3)), this.setAttribute("uv", new Ms(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _ud(new uu[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var dd = class extends Cs {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e = [], n = /* @__PURE__ */ new Set(), i = new Li(), r = new Li();
        if (null !== t2.index) {
          const s = t2.attributes.position, a = t2.index;
          let o = t2.groups;
          0 === o.length && (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
          for (let t3 = 0, l2 = o.length; t3 < l2; ++t3) {
            const l3 = o[t3], c2 = l3.start;
            for (let t4 = c2, o2 = c2 + l3.count; t4 < o2; t4 += 3) for (let o3 = 0; o3 < 3; o3++) {
              const l4 = a.getX(t4 + o3), c3 = a.getX(t4 + (o3 + 1) % 3);
              i.fromBufferAttribute(s, l4), r.fromBufferAttribute(s, c3), true === pd(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
          }
        } else {
          const s = t2.attributes.position;
          for (let t3 = 0, a = s.count / 3; t3 < a; t3++) for (let a2 = 0; a2 < 3; a2++) {
            const o = 3 * t3 + a2, l2 = 3 * t3 + (a2 + 1) % 3;
            i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l2), true === pd(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
        }
        this.setAttribute("position", new Ms(e, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function pd(t2, e, n) {
    const i = `${t2.x},${t2.y},${t2.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== n.has(i) && true !== n.has(r) && (n.add(i), n.add(r), true);
  }
  var md = Object.freeze({ __proto__: null, BoxGeometry: Gs, CapsuleGeometry: fu, CircleGeometry: gu, ConeGeometry: _u, CylinderGeometry: vu, DodecahedronGeometry: yu, EdgesGeometry: Tu, ExtrudeGeometry: ed, IcosahedronGeometry: id, LatheGeometry: mu, OctahedronGeometry: rd, PlaneGeometry: pa, PolyhedronGeometry: xu, RingGeometry: sd, ShapeGeometry: ad, SphereGeometry: od, TetrahedronGeometry: ld, TorusGeometry: cd, TorusKnotGeometry: hd, TubeGeometry: ud, WireframeGeometry: dd });
  var Sd = class extends is {
    constructor(t2) {
      super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new ts(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ts(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ti(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new _r(), this.combine = Y, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var wd = class extends xh {
    constructor(t2) {
      super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.scale = t2.scale, this.dashSize = t2.dashSize, this.gapSize = t2.gapSize, this;
    }
  };
  function Td(t2, e, n) {
    return !t2 || !n && t2.constructor === e ? t2 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t2) : Array.prototype.slice.call(t2);
  }
  function Ed(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  var Id = class {
    constructor(t2, e, n, i) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e = this.parameterPositions;
      let n = this._cachedIndex, i = e[n], r = e[n - 1];
      t: {
        e: {
          let s;
          n: {
            i: if (!(t2 < i)) {
              for (let s2 = n + 2; ; ) {
                if (void 0 === i) {
                  if (t2 < r) break i;
                  return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === s2) break;
                if (r = i, i = e[++n], t2 < i) break e;
              }
              s = e.length;
              break n;
            }
            if (t2 >= r) break t;
            {
              const a = e[1];
              t2 < a && (n = 2, r = a);
              for (let s2 = n - 2; ; ) {
                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === s2) break;
                if (i = r, r = e[--n - 1], t2 >= r) break e;
              }
              s = n, n = 0;
            }
          }
          for (; n < s; ) {
            const i2 = n + s >>> 1;
            t2 < e[i2] ? s = i2 : n = i2 + 1;
          }
          if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t2, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t2 * i;
      for (let t3 = 0; t3 !== i; ++t3) e[t3] = n[r + t3];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var Ld = class extends Id {
    constructor(t2, e, n, i) {
      super(t2, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: De, endingEnd: De };
    }
    intervalChanged_(t2, e, n) {
      const i = this.parameterPositions;
      let r = t2 - 2, s = t2 + 1, a = i[r], o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case Oe:
          r = t2, a = 2 * e - n;
          break;
        case Fe:
          r = i.length - 2, a = e + i[r] - i[r + 1];
          break;
        default:
          r = t2, a = n;
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case Oe:
          s = t2, o = 2 * n - e;
          break;
        case Fe:
          s = 1, o = n + i[1] - i[0];
          break;
        default:
          s = t2 - 1, o = e;
      }
      const l2 = 0.5 * (n - e), c2 = this.valueSize;
      this._weightPrev = l2 / (e - a), this._weightNext = l2 / (o - n), this._offsetPrev = r * c2, this._offsetNext = s * c2;
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c2 = this._offsetPrev, h2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (n - e) / (i - e), m = p2 * p2, f = m * p2, g = -u2 * f + 2 * u2 * m - u2 * p2, v = (1 + u2) * f + (-1.5 - 2 * u2) * m + (-0.5 + u2) * p2 + 1, _ = (-1 - d2) * f + (1.5 + d2) * m + 0.5 * p2, x = d2 * f - d2 * m;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = g * s[c2 + t3] + v * s[l2 + t3] + _ * s[o + t3] + x * s[h2 + t3];
      return r;
    }
  };
  var Ud = class extends Id {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c2 = (n - e) / (i - e), h2 = 1 - c2;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = s[l2 + t3] * h2 + s[o + t3] * c2;
      return r;
    }
  };
  var Nd = class extends Id {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var Dd = class {
    constructor(t2, e, n, i) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = Td(e, this.TimeBufferType), this.values = Td(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e = t2.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t2);
      else {
        n = { name: t2.name, times: Td(t2.times, Array), values: Td(t2.values, Array) };
        const e2 = t2.getInterpolation();
        e2 !== t2.DefaultInterpolation && (n.interpolation = e2);
      }
      return n.type = t2.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new Nd(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new Ud(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new Ld(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e;
      switch (t2) {
        case Le:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ue:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case Ne:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e2 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e2);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e2), this;
      }
      return this.createInterpolant = e, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Le;
        case this.InterpolantFactoryMethodLinear:
          return Ue;
        case this.InterpolantFactoryMethodSmooth:
          return Ne;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t2;
      }
      return this;
    }
    trim(t2, e) {
      const n = this.times, i = n.length;
      let r = 0, s = i - 1;
      for (; r !== i && n[r] < t2; ) ++r;
      for (; -1 !== s && n[s] > e; ) --s;
      if (++s, 0 !== r || s !== i) {
        r >= s && (s = Math.max(s, 1), r = s - 1);
        const t3 = this.getValueSize();
        this.times = n.slice(r, s), this.values = this.values.slice(r * t3, s * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const n = this.times, i = this.values, r = n.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
      let s = null;
      for (let e2 = 0; e2 !== r; e2++) {
        const i2 = n[e2];
        if ("number" == typeof i2 && isNaN(i2)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e2, i2), t2 = false;
          break;
        }
        if (null !== s && s > i2) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e2, i2, s), t2 = false;
          break;
        }
        s = i2;
      }
      if (void 0 !== i && Ed(i)) for (let e2 = 0, n2 = i.length; e2 !== n2; ++e2) {
        const n3 = i[e2];
        if (isNaN(n3)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e2, n3), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ne, r = t2.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r2 = false;
        const o = t2[a];
        if (o !== t2[a + 1] && (1 !== a || o !== t2[0])) if (i) r2 = true;
        else {
          const t3 = a * n, i2 = t3 - n, s2 = t3 + n;
          for (let a2 = 0; a2 !== n; ++a2) {
            const n2 = e[t3 + a2];
            if (n2 !== e[i2 + a2] || n2 !== e[s2 + a2]) {
              r2 = true;
              break;
            }
          }
        }
        if (r2) {
          if (a !== s) {
            t2[s] = t2[a];
            const i2 = a * n, r3 = s * n;
            for (let t3 = 0; t3 !== n; ++t3) e[r3 + t3] = e[i2 + t3];
          }
          ++s;
        }
      }
      if (r > 0) {
        t2[s] = t2[r];
        for (let t3 = r * n, i2 = s * n, a = 0; a !== n; ++a) e[i2 + a] = e[t3 + a];
        ++s;
      }
      return s !== t2.length ? (this.times = t2.slice(0, s), this.values = e.slice(0, s * n)) : (this.times = t2, this.values = e), this;
    }
    clone() {
      const t2 = this.times.slice(), e = this.values.slice(), n = new (0, this.constructor)(this.name, t2, e);
      return n.createInterpolant = this.createInterpolant, n;
    }
  };
  Dd.prototype.TimeBufferType = Float32Array, Dd.prototype.ValueBufferType = Float32Array, Dd.prototype.DefaultInterpolation = Ue;
  var Od = class extends Dd {
    constructor(t2, e, n) {
      super(t2, e, n);
    }
  };
  Od.prototype.ValueTypeName = "bool", Od.prototype.ValueBufferType = Array, Od.prototype.DefaultInterpolation = Le, Od.prototype.InterpolantFactoryMethodLinear = void 0, Od.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Fd = class extends Dd {
  };
  Fd.prototype.ValueTypeName = "color";
  var Bd = class extends Dd {
  };
  Bd.prototype.ValueTypeName = "number";
  var zd = class extends Id {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
      let l2 = t2 * a;
      for (let t3 = l2 + a; l2 !== t3; l2 += 4) Ii.slerpFlat(r, 0, s, l2 - a, s, l2, o);
      return r;
    }
  };
  var kd = class extends Dd {
    InterpolantFactoryMethodLinear(t2) {
      return new zd(this.times, this.values, this.getValueSize(), t2);
    }
  };
  kd.prototype.ValueTypeName = "quaternion", kd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Vd = class extends Dd {
    constructor(t2, e, n) {
      super(t2, e, n);
    }
  };
  Vd.prototype.ValueTypeName = "string", Vd.prototype.ValueBufferType = Array, Vd.prototype.DefaultInterpolation = Le, Vd.prototype.InterpolantFactoryMethodLinear = void 0, Vd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Hd = class extends Dd {
  };
  Hd.prototype.ValueTypeName = "vector";
  var jd = class {
    constructor(t2, e, n) {
      const i = this;
      let r, s = false, a = 0, o = 0;
      const l2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e, this.onError = n, this.itemStart = function(t3) {
        o++, false === s && void 0 !== i.onStart && i.onStart(t3, a, o), s = true;
      }, this.itemEnd = function(t3) {
        a++, void 0 !== i.onProgress && i.onProgress(t3, a, o), a === o && (s = false, void 0 !== i.onLoad && i.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i.onError && i.onError(t3);
      }, this.resolveURL = function(t3) {
        return r ? r(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r = t3, this;
      }, this.addHandler = function(t3, e2) {
        return l2.push(t3, e2), this;
      }, this.removeHandler = function(t3) {
        const e2 = l2.indexOf(t3);
        return -1 !== e2 && l2.splice(e2, 2), this;
      }, this.getHandler = function(t3) {
        for (let e2 = 0, n2 = l2.length; e2 < n2; e2 += 2) {
          const n3 = l2[e2], i2 = l2[e2 + 1];
          if (n3.global && (n3.lastIndex = 0), n3.test(t3)) return i2;
        }
        return null;
      };
    }
  };
  var qd = new jd();
  var Yd = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : qd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e) {
      const n = this;
      return new Promise((function(i, r) {
        n.load(t2, i, e, r);
      }));
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
  };
  Yd.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var rp = class extends Dr {
    constructor(t2, e = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new ts(t2), this.intensity = e;
    }
    dispose() {
    }
    copy(t2, e) {
      return super.copy(t2, e), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), void 0 !== this.target && (e.object.target = this.target.uuid), e;
    }
  };
  var sp = class extends rp {
    constructor(t2, e, n) {
      super(t2, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Dr.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ts(e);
    }
    copy(t2, e) {
      return super.copy(t2, e), this.groundColor.copy(t2.groundColor), this;
    }
  };
  var ap = new lr();
  var op = new Li();
  var lp = new Li();
  var cp = class {
    constructor(t2) {
      this.camera = t2, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ti(512, 512), this.map = null, this.mapPass = null, this.matrix = new lr(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new ha(), this._frameExtents = new ti(1, 1), this._viewportCount = 1, this._viewports = [new wi(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e = this.camera, n = this.matrix;
      op.setFromMatrixPosition(t2.matrixWorld), e.position.copy(op), lp.setFromMatrixPosition(t2.target.matrixWorld), e.lookAt(lp), e.updateMatrixWorld(), ap.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ap), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(ap);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.intensity = t2.intensity, this.bias = t2.bias, this.radius = t2.radius, this.mapSize.copy(t2.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 1 !== this.intensity && (t2.intensity = this.intensity), 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var dp = new lr();
  var pp = new Li();
  var mp = new Li();
  var vp = class extends cp {
    constructor() {
      super(new Ea(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var _p = class extends rp {
    constructor(t2, e) {
      super(t2, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Dr.DEFAULT_UP), this.updateMatrix(), this.target = new Dr(), this.shadow = new vp();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var xp = class extends rp {
    constructor(t2, e) {
      super(t2, e), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  };
  var Dp = new lr();
  var Op = new lr();
  var Fp = new lr();
  var zp = class {
    constructor(t2 = true) {
      this.autoStart = t2, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = kp(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let t2 = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const e = kp();
        t2 = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t2;
      }
      return t2;
    }
  };
  function kp() {
    return performance.now();
  }
  var Vp = new Li();
  var Hp = new Ii();
  var Gp = new Li();
  var Wp = new Li();
  var qp = new Li();
  var Yp = new Ii();
  var Zp = new Li();
  var Jp = new Li();
  var tm = "\\[\\]\\.:\\/";
  var em = new RegExp("[" + tm + "]", "g");
  var nm = "[^" + tm + "]";
  var im = "[^" + tm.replace("\\.", "") + "]";
  var rm = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", nm) + /(WCOD+)?/.source.replace("WCOD", im) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", nm) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", nm) + "$");
  var sm = ["material", "materials", "bones", "map"];
  var am = class _am {
    constructor(t2, e, n) {
      this.path = e, this.parsedPath = n || _am.parseTrackName(e), this.node = _am.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e, n) {
      return t2 && t2.isAnimationObjectGroup ? new _am.Composite(t2, e, n) : new _am(t2, e, n);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(em, "");
    }
    static parseTrackName(t2) {
      const e = rm.exec(t2);
      if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t3 = n.nodeName.substring(i + 1);
        -1 !== sm.indexOf(t3) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t3);
      }
      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return n;
    }
    static findNode(t2, e) {
      if (void 0 === e || "" === e || "." === e || -1 === e || e === t2.name || e === t2.uuid) return t2;
      if (t2.skeleton) {
        const n = t2.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t2.children) {
        const n = function(t3) {
          for (let i2 = 0; i2 < t3.length; i2++) {
            const r = t3[i2];
            if (r.name === e || r.uuid === e) return r;
            const s = n(r.children);
            if (s) return s;
          }
          return null;
        }, i = n(t2.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e) {
      t2[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t2[e++] = n[i];
    }
    _getValue_arrayElement(t2, e) {
      t2[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e) {
      this.resolvedProperty.toArray(t2, e);
    }
    _setValue_direct(t2, e) {
      this.targetObject[this.propertyName] = t2[e];
    }
    _setValue_direct_setNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
    }
    _setValue_array_setNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e) {
      this.resolvedProperty.fromArray(t2, e);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e) {
      this.bind(), this.getValue(t2, e);
    }
    _setValue_unbound(t2, e) {
      this.bind(), this.setValue(t2, e);
    }
    bind() {
      let t2 = this.node;
      const e = this.parsedPath, n = e.objectName, i = e.propertyName;
      let r = e.propertyIndex;
      if (t2 || (t2 = _am.findNode(this.rootNode, e.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (n) {
        let i2 = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].name === i2) {
              i2 = e2;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[n];
        }
        if (void 0 !== i2) {
          if (void 0 === t2[i2]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i2];
        }
      }
      const s = t2[i];
      if (void 0 === s) {
        const n2 = e.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n2 + "." + i + " but it wasn't found.", t2);
      }
      let a = this.Versioning.None;
      this.targetObject = t2, void 0 !== t2.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t2.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t2.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r] && (r = t2.morphTargetDictionary[r]);
        }
        o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
      } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  am.Composite = class {
    constructor(t2, e, n) {
      const i = n || am.parseTrackName(e);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e, i);
    }
    getValue(t2, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      void 0 !== i && i.getValue(t2, e);
    }
    setValue(t2, e) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t2, e);
    }
    bind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].unbind();
    }
  }, am.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, am.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, am.prototype.GetterByBindingType = [am.prototype._getValue_direct, am.prototype._getValue_array, am.prototype._getValue_arrayElement, am.prototype._getValue_toArray], am.prototype.SetterByBindingTypeAndVersioning = [[am.prototype._setValue_direct, am.prototype._setValue_direct_setNeedsUpdate, am.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [am.prototype._setValue_array, am.prototype._setValue_array_setNeedsUpdate, am.prototype._setValue_array_setMatrixWorldNeedsUpdate], [am.prototype._setValue_arrayElement, am.prototype._setValue_arrayElement_setNeedsUpdate, am.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [am.prototype._setValue_fromArray, am.prototype._setValue_fromArray_setNeedsUpdate, am.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var cm = new Float32Array(1);
  var gm = new lr();
  var vm = class {
    constructor(t2, e, n = 0, i = 1 / 0) {
      this.ray = new or(t2, e), this.near = n, this.far = i, this.camera = null, this.layers = new xr(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
    }
    set(t2, e) {
      this.ray.set(t2, e);
    }
    setFromCamera(t2, e) {
      e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t2.x, t2.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t2.x, t2.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
    }
    setFromXRController(t2) {
      return gm.identity().extractRotation(t2.matrixWorld), this.ray.origin.setFromMatrixPosition(t2.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(gm), this;
    }
    intersectObject(t2, e = true, n = []) {
      return xm(t2, this, n, e), n.sort(_m), n;
    }
    intersectObjects(t2, e = true, n = []) {
      for (let i = 0, r = t2.length; i < r; i++) xm(t2[i], this, n, e);
      return n.sort(_m), n;
    }
  };
  function _m(t2, e) {
    return t2.distance - e.distance;
  }
  function xm(t2, e, n, i) {
    let r = true;
    if (t2.layers.test(e.layers)) {
      false === t2.raycast(e, n) && (r = false);
    }
    if (true === r && true === i) {
      const i2 = t2.children;
      for (let t3 = 0, r2 = i2.length; t3 < r2; t3++) xm(i2[t3], e, n, true);
    }
  }
  var ym = class {
    constructor(t2 = 1, e = 0, n = 0) {
      return this.radius = t2, this.phi = e, this.theta = n, this;
    }
    set(t2, e, n) {
      return this.radius = t2, this.phi = e, this.theta = n, this;
    }
    copy(t2) {
      return this.radius = t2.radius, this.phi = t2.phi, this.theta = t2.theta, this;
    }
    makeSafe() {
      const t2 = 1e-6;
      return this.phi = Math.max(t2, Math.min(Math.PI - t2, this.phi)), this;
    }
    setFromVector3(t2) {
      return this.setFromCartesianCoords(t2.x, t2.y, t2.z);
    }
    setFromCartesianCoords(t2, e, n) {
      return this.radius = Math.sqrt(t2 * t2 + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t2, n), this.phi = Math.acos(Yn(e / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var bm = new ti();
  var Tm = new Li();
  var Em = new Li();
  var Rm = new Li();
  var Pm = new Li();
  var Im = new lr();
  var Lm = new lr();
  var Om = new Li();
  var Fm = new ts();
  var Bm = new ts();
  var Hm = new Li();
  var Gm = new Li();
  var Wm = new Li();
  var jm = new Li();
  var qm = new Zs();
  var Jm = new Di();
  var tf = new Li();
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // 康鹭记忆-终版/assets/js/scene3d.js
  var VERSION = "1.0.0";
  var DISTRICT = {
    west: -128,
    // 瑞康路
    east: 138,
    // 广州大道南
    north: -107,
    // 新港西路（水平，片区内最北）
    // 南界逸景路是斜的：z = SOUTH_BASE + SOUTH_SLOPE * x（-9.3°，从上到下向右下走）
    southBase: 78,
    southSlope: -0.164,
    roadHalf: 8.6,
    // 四至道路的车行道半宽
    margin: 3.2
    // 建筑退让
  };
  var GROUND = { x0: -172, x1: 182, z0: -152, z1: 132 };
  var GROUND_TEX = 2048;
  var GROUND_PPU = GROUND_TEX / (GROUND.x1 - GROUND.x0);
  var LANE = {
    deg: 14,
    spacing: 21.5,
    // 巷道间距（垂直巷道方向）
    widthMin: 2.4,
    // 巷道净宽：2–5 单位 ≈ 2–4.5 米，握手楼尺度
    widthMax: 5.2,
    depthMin: 6,
    // 楼进深范围（窄而深，城中村自建房的常见比例）
    depthMax: 8.8,
    /* 一条巷道两侧各"两进"：贴巷一进 + 背靠背一进。
       每进的相对偏移（相对巷道中线）：
         贴巷排 中心 = laneW/2 + 1.3 + depth/2
         背排   中心 = laneW/2 + 1.3 + depth + 1.7 + depth/2
       spacing 必须大于两进总深（≈18.8）才不会让相邻巷道的楼穿插。 */
    frontGap: 1.3,
    // 贴巷排与巷壁之间的退让（人行/排水明沟）
    backGap: 1.7,
    // 背排之间的一线天缝隙
    uMin: -84,
    uMax: 70,
    // 沿巷道方向的生成范围（超出片区的部分会被裁掉）
    vMin: -96,
    vMax: 62
    // 垂直巷道方向的生成范围
  };
  var PLACES = {
    "kangle-arch": { x: -64, z: -57, rot: -0.28, dist: 42, label: { name: "康乐牌坊", sub: "康乐东约 · 片区西北入口" } },
    "lujiang-arch": { x: 92, z: -48, rot: 0.24, dist: 46, label: { name: "鹭江牌坊", sub: "鹭江春晓 · 片区东北入口" } },
    "hiring-plaza": { x: 2, z: 44, dist: 62, label: { name: "招工广场", sub: "原鹭江球场 · 零工市场" } },
    /* ---- 8 处次级地点 ---- */
    "kangle-village": { x: -52, z: -12, rot: 0.1, dist: 52, label: { name: "康乐村", sub: "康乐片区 · 制衣作坊集中区" } },
    "lujiang-village": { x: 56, z: -6, rot: -0.16, dist: 52, label: { name: "鹭江村", sub: "鹭江片区 · 早期加工厂落脚地" } },
    "fabric-market": { x: -104, z: -26, rot: 0, dist: 58, label: { name: "中大布匹市场", sub: "瑞康路西侧 · 布料供应来源" } },
    "hiring-street": { x: 74, z: 14, rot: 0.05, dist: 50, label: { name: "鹭江南约大街", sub: "招工街 · 沿街招工与招租" } },
    "kangle-south-st": { x: -38, z: 26, rot: -0.06, dist: 50, label: { name: "康乐东约南大街", sub: "康乐主街 · 作坊与出租屋" } },
    "kangle-canal": { x: -20, z: -22, rot: 0, dist: 48, label: { name: "康乐中约南新街涌边一巷", sub: "涌边巷 · 握手楼最密处" } },
    "lujiang-yard": { x: 78, z: 28, rot: 0.12, dist: 50, label: { name: "鹭江东约新街 88 号大院", sub: "出租大院 · 一户一厂的典型" } },
    "fengyang-office": { x: 30, z: 62, rot: -0.06, dist: 54, label: { name: "凤阳街道办事处", sub: "治理节点 · 旧改与整治的实施方" } }
  };
  var LANDMARK_IDS = Object.keys(PLACES);
  var PRIMARY_IDS = ["kangle-arch", "lujiang-arch", "hiring-plaza"];
  var SUB_PLACE_IDS = LANDMARK_IDS.filter((id2) => PRIMARY_IDS.indexOf(id2) < 0);
  var BADGE_ORDER = PRIMARY_IDS.concat(
    SUB_PLACE_IDS.slice().sort((a, b) => PLACES[a].z - PLACES[b].z || PLACES[a].x - PLACES[b].x)
  );
  var EXCLUDE = {
    "kangle-arch": [-84, -76, -42, -30],
    "lujiang-arch": [72, -72, 116, -24],
    "hiring-plaza": [-30, 14, 42, 80],
    "yizhen": [-22, -30, 10, -4],
    // 卫生站，允许被压，仅避免完全遮挡
    /* ---- 8 处次级地点的避让区（比各自形体大一圈） ---- */
    "kangle-village": [-70, -26, -34, 2],
    "lujiang-village": [40, -20, 72, 8],
    "fabric-market": [-120, -52, -90, 0],
    "hiring-street": [56, 4, 92, 26],
    "kangle-south-st": [-48, 8, -28, 44],
    "kangle-canal": [-30, -38, -12, -6],
    "lujiang-yard": [64, 16, 92, 40],
    "fengyang-office": [22, 44, 56, 68]
  };
  var C2 = {
    paper: 15854557,
    ink: 3157288,
    brick: 12077626,
    blue: 5466486,
    yellow: 12755556,
    green: 7240803,
    ground: 11906204,
    asphalt: 5854284,
    roof: 13091252
  };
  var CAM = {
    fov: 45,
    defPos: new Li(116, 148, 176),
    // 方位角 ≈ 33.4°，俯仰 ≈ 35.3°
    defTarget: new Li(6, 6, 8),
    minPitch: 25 * Math.PI / 180,
    // 低于 25° 会看到近似地平线，失去微缩模型感
    maxPitch: 70 * Math.PI / 180,
    // 高于 70° 变成平面图，看不出楼高
    minDist: 60,
    // 保证相机不会钻进楼群里
    /* 上限是这么定的：窄容器（390px 宽）的水平视角只有约 ±21°，
       而三地标在"垂直于视线"方向上的展开约 213 世界单位
       （康乐牌坊在最西、鹭江牌坊在最东），要同时收进画面需要退到约 420。
       所以 260（最初凭感觉设的值）在手机上是不够的，放宽到 440。 */
    maxDist: 440,
    easeMs: 750,
    // focusLandmark 缓动时长（要求 0.6–0.9s）
    pauseMs: 520
    // 用户操作后暂停"自动跟随"的时长
  };
  var DRAG_THRESHOLD_PX = 4;
  var IS_COARSE = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
  var IS_SMALL = typeof matchMedia === "function" && matchMedia("(max-width: 820px)").matches;
  var LOW_POWER = IS_COARSE && IS_SMALL || typeof navigator !== "undefined" && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  function mergeColors(extra) {
    if (!extra || typeof extra !== "object") return C2;
    const out = Object.assign({}, C2);
    for (const k of Object.keys(extra)) {
      const v = extra[k];
      if (typeof v === "number") out[k] = v;
      else if (typeof v === "string") {
        const s = v.trim().replace("#", "");
        const n = parseInt(s.length === 3 ? s.replace(/(.)/g, "$1$1") : s, 16);
        if (!Number.isNaN(n)) out[k] = n;
      }
    }
    return out;
  }
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function() {
      a |= 0;
      a = a + 1831565813 | 0;
      let t2 = Math.imul(a ^ a >>> 15, 1 | a);
      t2 = t2 + Math.imul(t2 ^ t2 >>> 7, 61 | t2) ^ t2;
      return ((t2 ^ t2 >>> 14) >>> 0) / 4294967296;
    };
  }
  function makeRng(seed) {
    const r = mulberry32(seed);
    const api = () => r();
    api.range = (a, b) => a + (b - a) * r();
    api.int = (a, b) => Math.floor(a + (b - a + 1) * r());
    api.pick = (arr) => arr[Math.min(arr.length - 1, Math.floor(r() * arr.length))];
    api.chance = (p2) => r() < p2;
    api.sign = () => r() < 0.5 ? -1 : 1;
    return api;
  }
  var clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  var easeInOutCubic = (t2) => t2 < 0.5 ? 4 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 3) / 2;
  var southRoadZ = (x) => DISTRICT.southBase + DISTRICT.southSlope * x;
  var innerNorthZ = () => DISTRICT.north + DISTRICT.roadHalf + DISTRICT.margin;
  var innerSouthZ = (x) => southRoadZ(x) - DISTRICT.roadHalf - DISTRICT.margin;
  var innerWestX = () => DISTRICT.west + DISTRICT.roadHalf + DISTRICT.margin;
  var innerEastX = () => DISTRICT.east - DISTRICT.roadHalf - DISTRICT.margin;
  function insideDistrict(x, z, pad) {
    pad = pad || 0;
    if (x < innerWestX() - pad || x > innerEastX() + pad) return false;
    if (z < innerNorthZ() - pad) return false;
    if (z > innerSouthZ(x) + pad) return false;
    return true;
  }
  function inExclusion(x, z) {
    for (const k in EXCLUDE) {
      const e = EXCLUDE[k];
      if (x > e[0] && x < e[2] && z > e[1] && z < e[3]) return true;
    }
    return false;
  }
  var TILE_U = 18.75;
  var TILE_V = 9;
  var ATLAS_ROWS = 3;
  var FLOOR_H = [2.7, 3, 3.35];
  function drawFacadeTile(ctx, x0, y0, w, h2, variant, rng) {
    const rows = ATLAS_ROWS;
    const rowH = h2 / rows;
    const cols = 4;
    const colW = w / cols;
    const openRatio = [0.6, 0.5, 0.68][variant];
    const openW = colW * openRatio;
    const openH = rowH * 0.52;
    const sillY = rowH * 0.63;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x0, y0, w, h2);
    for (let i = 0; i < 46; i++) {
      const gx = x0 + rng() * w;
      const gw = rng.range ? rng.range(1, 3.5) : rng() * 3 + 1;
      ctx.fillStyle = "rgba(120,113,102," + (0.03 + rng() * 0.06).toFixed(3) + ")";
      ctx.fillRect(gx, y0, gw, h2);
    }
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = "rgba(120,113,102," + (0.02 + rng() * 0.05).toFixed(3) + ")";
      ctx.fillRect(x0, y0 + rng() * h2, w, 1 + rng() * 4);
    }
    for (let r = 0; r < rows; r++) {
      const ty = y0 + r * rowH;
      ctx.fillStyle = "rgba(140,132,120,.30)";
      ctx.fillRect(x0, ty + rowH - 4, w, 2);
      if (r === rows - 1) {
        ctx.fillStyle = "rgba(96,90,80,.20)";
        ctx.fillRect(x0, ty + rowH - rowH * 0.16, w, rowH * 0.16);
      }
      ctx.fillStyle = "rgba(150,142,130,.14)";
      ctx.fillRect(x0 + w / 2 - 1, ty, 2, rowH);
      for (let c2 = 0; c2 < cols; c2++) {
        const cx = x0 + c2 * colW + (colW - openW) / 2;
        const cy = ty + sillY - openH;
        ctx.fillStyle = "rgba(46,42,38,.86)";
        ctx.fillRect(cx, cy, openW, openH);
        if (rng() < 0.38) {
          ctx.fillStyle = "rgba(255,255,255,.20)";
          ctx.fillRect(cx + 1, cy + 1, openW * 0.45, openH * 0.5);
        } else if (rng() < 0.16) {
          ctx.fillStyle = "rgba(255,231,178,.55)";
          ctx.fillRect(cx + 1, cy + 1, openW - 2, openH - 2);
        }
        ctx.strokeStyle = "rgba(232,226,214,.75)";
        ctx.lineWidth = 1.4;
        ctx.strokeRect(cx + 0.5, cy + 0.5, openW - 1, openH - 1);
        ctx.strokeStyle = "rgba(232,226,214,.45)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + openW / 2, cy + 1);
        ctx.lineTo(cx + openW / 2, cy + openH - 1);
        ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,.55)";
        ctx.fillRect(cx - 2, cy + openH, openW + 4, 2.2);
        if (rng() < 0.3) {
          const aw = openW * 0.4, ah2 = openH * 0.34;
          const ax = cx + (openW - aw) * 0.5, ay = cy + openH + 4;
          ctx.fillStyle = "rgba(206,200,190,.92)";
          ctx.fillRect(ax, ay, aw, ah2);
          ctx.strokeStyle = "rgba(110,104,96,.5)";
          ctx.lineWidth = 1;
          ctx.strokeRect(ax + 0.5, ay + 0.5, aw - 1, ah2 - 1);
          ctx.beginPath();
          ctx.arc(ax + aw * 0.5, ay + ah2 * 0.5, Math.min(aw, ah2) * 0.3, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (rng() < 0.26) {
          ctx.strokeStyle = "rgba(226,220,208,.55)";
          ctx.lineWidth = 0.8;
          for (let g = 1; g <= 4; g++) {
            const gy = cy + openH / 5 * g;
            ctx.beginPath();
            ctx.moveTo(cx - 1, gy);
            ctx.lineTo(cx + openW + 1, gy);
            ctx.stroke();
          }
        }
      }
    }
    const grd = ctx.createLinearGradient(0, y0, 0, y0 + h2);
    grd.addColorStop(0, "rgba(255,255,255,0)");
    grd.addColorStop(1, "rgba(88,80,70,.10)");
    ctx.fillStyle = grd;
    ctx.fillRect(x0, y0, w, h2);
  }
  function makeFacadeTextures() {
    const W = 512, H = 128, rows = ATLAS_ROWS;
    const out = [];
    const variants = [
      { seed: 1201, brickBase: false },
      { seed: 2207, brickBase: true },
      { seed: 3313, brickBase: false }
    ];
    for (let vi2 = 0; vi2 < 3; vi2++) {
      const cv = document.createElement("canvas");
      cv.width = W;
      cv.height = H * rows;
      const ctx = cv.getContext("2d");
      const rng = makeRng(variants[vi2].seed);
      drawFacadeTile(ctx, 0, 0, W, H * rows, vi2, rng);
      if (variants[vi2].brickBase) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = "#5a5248";
        ctx.lineWidth = 1;
        for (let y2 = 0; y2 < H * rows; y2 += 9) {
          ctx.beginPath();
          ctx.moveTo(0, y2 + 0.5);
          ctx.lineTo(W, y2 + 0.5);
          ctx.stroke();
          const off = y2 / 9 % 2 * 11;
          for (let x = off; x < W; x += 22) {
            ctx.beginPath();
            ctx.moveTo(x + 0.5, y2);
            ctx.lineTo(x + 0.5, y2 + 9);
            ctx.stroke();
          }
        }
        ctx.restore();
      }
      const tex = new Xh(cv);
      tex.colorSpace = Je;
      tex.wrapS = pt;
      tex.wrapT = pt;
      tex.anisotropy = 4;
      tex.needsUpdate = true;
      out.push(tex);
    }
    return out;
  }
  function makeRoofTexture() {
    const W = 256, H = 256;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    const rng = makeRng(9091);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(126,119,108,.30)";
    ctx.lineWidth = 2;
    for (let i = 1; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(i * W / 3, 0);
      ctx.lineTo(i * W / 3, H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * H / 3);
      ctx.lineTo(W, i * H / 3);
      ctx.stroke();
    }
    for (let i = 0; i < 90; i++) {
      const r = rng.range(3, 16);
      ctx.save();
      ctx.translate(rng() * W, rng() * H);
      const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      gg.addColorStop(0, "rgba(108,101,90," + (0.05 + rng() * 0.1).toFixed(3) + ")");
      gg.addColorStop(1, "rgba(108,101,90,0)");
      ctx.fillStyle = gg;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.wrapS = pt;
    tex.wrapT = pt;
    tex.anisotropy = 4;
    return tex;
  }
  function makeTileTexture() {
    const W = 128, H = 128;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    for (let y2 = 0; y2 < H; y2 += 8) {
      ctx.fillStyle = "rgba(104,96,86,.34)";
      ctx.fillRect(0, y2, W, 1.6);
      ctx.fillStyle = "rgba(255,255,255,.30)";
      ctx.fillRect(0, y2 + 3, W, 1.4);
    }
    const rng = makeRng(4242);
    for (let i = 0; i < 26; i++) {
      ctx.fillStyle = "rgba(104,96,86," + (0.03 + rng() * 0.07).toFixed(3) + ")";
      ctx.fillRect(rng() * W, rng() * H, rng.range(6, 30), rng.range(3, 12));
    }
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.wrapS = pt;
    tex.wrapT = pt;
    return tex;
  }
  function makeSkyTexture() {
    const cv = document.createElement("canvas");
    cv.width = 16;
    cv.height = 256;
    const ctx = cv.getContext("2d");
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, "#C6D2DA");
    g.addColorStop(0.38, "#DCE1E2");
    g.addColorStop(0.6, "#EDE7DA");
    g.addColorStop(0.78, "#E2D9C6");
    g.addColorStop(1, "#D6CBB4");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 16, 256);
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.mapping = ht;
    tex.wrapS = mt;
    tex.wrapT = mt;
    return tex;
  }
  function worldToTex(x, z) {
    return {
      px: (x - GROUND.x0) * GROUND_PPU,
      py: (GROUND.z1 - z) * GROUND_PPU
      // 画布 y 向下，世界 z 向南为正 → 翻转
    };
  }
  function texScale(v) {
    return v * GROUND_PPU;
  }
  function drawGroundTexture() {
    const S = GROUND_TEX;
    const cv = document.createElement("canvas");
    cv.width = S;
    cv.height = S;
    const ctx = cv.getContext("2d");
    const rng = makeRng(777001);
    ctx.fillStyle = "#efe8db";
    ctx.fillRect(0, 0, S, S);
    ctx.save();
    for (let i = 0; i < 260; i++) {
      const x = rng.range(GROUND.x0, GROUND.x1);
      const z = rng.range(GROUND.z0, GROUND.z1);
      if (x > DISTRICT.west - 24 && x < DISTRICT.east + 24 && z > DISTRICT.north - 24 && z < southRoadZ(x) + 24) continue;
      const p2 = worldToTex(x, z);
      const w = texScale(rng.range(8, 26)), h2 = texScale(rng.range(8, 26));
      ctx.fillStyle = "rgba(199,191,177," + (0.3 + rng() * 0.35).toFixed(3) + ")";
      ctx.fillRect(p2.px, p2.py, w, h2);
    }
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const c0 = worldToTex(DISTRICT.west, DISTRICT.north);
    const c1 = worldToTex(DISTRICT.east, southRoadZ(DISTRICT.east));
    const c2 = worldToTex(DISTRICT.west, southRoadZ(DISTRICT.west));
    ctx.moveTo(c0.px, c0.py);
    ctx.lineTo(c1.px, c1.py);
    ctx.lineTo(c2.px, c2.py);
    ctx.closePath();
    ctx.fillStyle = "#c3bbab";
    ctx.fill();
    ctx.restore();
    const th = LANE.deg * Math.PI / 180;
    const n = { x: Math.sin(th), z: Math.cos(th) };
    const d2 = { x: Math.cos(th), z: -Math.sin(th) };
    const nu2 = { x: -n.z, z: n.x };
    const laneCount = Math.ceil((LANE.vMax - LANE.vMin) / LANE.spacing);
    const lanes = [];
    for (let i = 0; i <= laneCount; i++) {
      const v = LANE.vMin + i * LANE.spacing;
      const w = rng.range(LANE.widthMin, LANE.widthMax);
      const cx = nu2.x * v, cz = nu2.z * v;
      const half = 90;
      lanes.push({ v, w, cx, cz });
      const A = worldToTex(cx - d2.x * half, cz - d2.z * half);
      const B = worldToTex(cx + d2.x * half, cz + d2.z * half);
      ctx.strokeStyle = "#d8d1c3";
      ctx.lineWidth = Math.max(2, texScale(w));
      ctx.lineCap = "butt";
      ctx.beginPath();
      ctx.moveTo(A.px, A.py);
      ctx.lineTo(B.px, B.py);
      ctx.stroke();
      ctx.strokeStyle = "rgba(70,63,55,.30)";
      ctx.lineWidth = Math.max(1, texScale(0.5));
      for (const s of [-1, 1]) {
        const ox = n.x * (w / 2 + 0.35) * s, oz = n.z * (w / 2 + 0.35) * s;
        const A2 = worldToTex(cx + ox - d2.x * half, cz + oz - d2.z * half);
        const B2 = worldToTex(cx + ox + d2.x * half, cz + oz + d2.z * half);
        ctx.beginPath();
        ctx.moveTo(A2.px, A2.py);
        ctx.lineTo(B2.px, B2.py);
        ctx.stroke();
      }
    }
    for (let i = 0; i < 5; i++) {
      const u2 = -78 + i * 46;
      const w = rng.range(1.8, 3.4);
      const Ax = nu2.x * LANE.vMin + d2.x * u2, Az = nu2.z * LANE.vMin + d2.z * u2;
      const Bx = nu2.x * LANE.vMax + d2.x * u2, Bz = nu2.z * LANE.vMax + d2.z * u2;
      const A = worldToTex(Ax, Az), B = worldToTex(Bx, Bz);
      ctx.strokeStyle = "#d8d1c3";
      ctx.lineWidth = Math.max(2, texScale(w));
      ctx.beginPath();
      ctx.moveTo(A.px, A.py);
      ctx.lineTo(B.px, B.py);
      ctx.stroke();
    }
    function road(x0, z0, x1, z1, half, opt) {
      opt = opt || {};
      const p0 = worldToTex(x0, z0), p1 = worldToTex(x1, z1);
      ctx.strokeStyle = "#8d8577";
      ctx.lineWidth = Math.max(2, texScale(1.1));
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();
      ctx.strokeStyle = opt.color || "#59544c";
      ctx.lineWidth = texScale(half * 2);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();
      if (opt.center) {
        ctx.save();
        ctx.setLineDash([texScale(2.6), texScale(3.4)]);
        ctx.strokeStyle = opt.center;
        ctx.lineWidth = Math.max(1.5, texScale(0.45));
        ctx.beginPath();
        ctx.moveTo(p0.px, p0.py);
        ctx.lineTo(p1.px, p1.py);
        ctx.stroke();
        ctx.restore();
      }
    }
    const R = DISTRICT.roadHalf;
    road(DISTRICT.west, DISTRICT.north, DISTRICT.west, southRoadZ(DISTRICT.west) + 6, R);
    road(DISTRICT.east, DISTRICT.north - 6, DISTRICT.east, southRoadZ(DISTRICT.east) + 10, R);
    road(DISTRICT.west - 26, DISTRICT.north, DISTRICT.east + 26, DISTRICT.north, R + 1.4, { center: "rgba(226,214,176,.55)" });
    road(DISTRICT.west - 26, southRoadZ(DISTRICT.west - 26), DISTRICT.east + 26, southRoadZ(DISTRICT.east + 26), R + 1, { center: "rgba(226,214,176,.45)" });
    {
      const p0 = worldToTex(DISTRICT.west - 26, DISTRICT.north - R - 3.4);
      const p1 = worldToTex(DISTRICT.east + 26, DISTRICT.north - R - 3.4);
      ctx.strokeStyle = "rgba(110,124,99,.55)";
      ctx.lineWidth = texScale(5.2);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();
      for (let x = DISTRICT.west - 24; x < DISTRICT.east + 24; x += 9) {
        const p2 = worldToTex(x, DISTRICT.north - R - 3.4);
        const r = texScale(rng.range(2.2, 3.6));
        const g = ctx.createRadialGradient(p2.px, p2.py, 0, p2.px, p2.py, r);
        g.addColorStop(0, "rgba(96,112,86,.85)");
        g.addColorStop(1, "rgba(96,112,86,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p2.px, p2.py, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    {
      const p0 = worldToTex(DISTRICT.east + 2.2, DISTRICT.north - 10);
      const p1 = worldToTex(DISTRICT.east + 2.2, southRoadZ(DISTRICT.east) + 14);
      ctx.strokeStyle = "rgba(40,36,32,.22)";
      ctx.lineWidth = texScale(7);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();
    }
    {
      const P2 = PLACES["hiring-plaza"];
      const p0 = worldToTex(P2.x - 30, P2.z - 22);
      ctx.fillStyle = "#b9b3a6";
      ctx.fillRect(p0.px, p0.py, texScale(60), texScale(48));
      ctx.strokeStyle = "rgba(196,168,96,.85)";
      ctx.lineWidth = Math.max(2, texScale(0.6));
      for (let i = -2; i <= 2; i++) {
        const A = worldToTex(P2.x - 30, P2.z + i * 5.4);
        const B = worldToTex(P2.x + 30, P2.z + i * 5.4);
        ctx.beginPath();
        ctx.moveTo(A.px, A.py);
        ctx.lineTo(B.px, B.py);
        ctx.stroke();
      }
    }
    {
      const NS = 512;
      const ncv = document.createElement("canvas");
      ncv.width = NS;
      ncv.height = NS;
      const nctx = ncv.getContext("2d");
      const nimg = nctx.createImageData(NS, NS);
      const nd2 = nimg.data;
      for (let i = 0; i < nd2.length; i += 4) {
        const v = 128 + (rng() - 0.5) * 255;
        nd2[i] = v;
        nd2[i + 1] = v;
        nd2[i + 2] = v;
        nd2[i + 3] = 255;
      }
      nctx.putImageData(nimg, 0, 0);
      ctx.save();
      ctx.globalAlpha = 0.055;
      ctx.globalCompositeOperation = "overlay";
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(ncv, 0, 0, S, S);
      ctx.restore();
    }
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.anisotropy = LOW_POWER ? 2 : 8;
    tex.wrapS = tex.wrapT = mt;
    return tex;
  }
  function makeSignTexture(text, opt) {
    opt = opt || {};
    const W = opt.w || 1024, H = opt.h || 256;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = opt.bg || "#f3ece0";
    ctx.fillRect(0, 0, W, H);
    if (opt.border) {
      ctx.strokeStyle = opt.borderColor || "#8d7a52";
      ctx.lineWidth = Math.max(3, H * 0.055);
      ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, W - ctx.lineWidth, H - ctx.lineWidth);
    }
    const chars = Array.from(text);
    const size = opt.size || Math.floor(H * (opt.sizeRatio || 0.62));
    ctx.fillStyle = opt.fg || "#2b2621";
    ctx.font = (opt.weight || "700") + " " + size + "px " + (opt.font || '"Songti SC","STSong","SimSun","Noto Serif SC",serif');
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (opt.vertical && chars.length > 1) {
      const step = Math.min(H / chars.length, size * 1.12);
      const startY = H / 2 - (chars.length - 1) * step / 2;
      chars.forEach((ch2, i) => ctx.fillText(ch2, W / 2, startY + i * step));
    } else {
      const step = W / chars.length;
      chars.forEach((ch2, i) => {
        const cx = opt.ltr ? step * (i + 0.5) : W - step * (i + 0.5);
        ctx.fillText(ch2, cx, H / 2 + H * 0.02);
      });
    }
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.anisotropy = 4;
    return tex;
  }
  function makeLedTexture() {
    const W = 1024, H = 640;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#f2f4f8";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#2f5fa8";
    ctx.fillRect(0, 0, W, 96);
    ctx.fillStyle = "#ffffff";
    ctx.font = '700 46px "Songti SC","STSong","SimSun",serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("海珠区纺织零工市场—招工信息发布", W / 2, 50);
    ctx.textAlign = "left";
    ctx.font = '24px "Microsoft YaHei","PingFang SC",sans-serif';
    ctx.fillStyle = "#40474f";
    ctx.fillText("发布时间：2026.8.28", 26, 130);
    const cols = [24, 200, 380, 560, 720, 900];
    const heads = ["所招工种", "薪资待遇", "企业名称", "联系人", "联系电话", "招聘人数"];
    ctx.fillStyle = "#e8ecf3";
    ctx.fillRect(16, 160, W - 32, 44);
    ctx.fillStyle = "#2b3138";
    ctx.font = '700 22px "Microsoft YaHei",sans-serif';
    heads.forEach((h2, i) => ctx.fillText(h2, cols[i], 183));
    const rows = [
      ["整件车位", "7000—10000", "莉翔制衣", "王师傅", "17512960980", "4"],
      ["装拉链", "7000—10000", "莉翔制衣", "管师傅", "13580961078", "1"],
      ["前后袋", "7000—10000", "莉翔制衣", "邹师傅", "18970653591", "4"],
      ["车脚边", "7000—10000", "莉翔制衣", "王厂", "13570398446", "2"],
      ["上腰", "7000—10000", "利玥服装", "刘师傅", "13600000000", "1"],
      ["尾部杂工", "7000—10000", "利玥服装", "/", "13700000000", "1"]
    ];
    ctx.font = '21px "Microsoft YaHei",sans-serif';
    rows.forEach((r, ri) => {
      const y2 = 204 + ri * 62;
      ctx.fillStyle = ri % 2 ? "#ffffff" : "#f7f9fc";
      ctx.fillRect(16, y2, W - 32, 62);
      ctx.strokeStyle = "#dfe4ec";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(16, y2 + 62.5);
      ctx.lineTo(W - 16, y2 + 62.5);
      ctx.stroke();
      r.forEach((cell, ci2) => {
        ctx.fillStyle = ci2 === 0 ? "#B84A3A" : "#39414a";
        ctx.font = (ci2 === 0 ? "700 " : "") + '21px "Microsoft YaHei",sans-serif';
        ctx.fillText(cell, cols[ci2], y2 + 36);
      });
    });
    ctx.fillStyle = "#5a6470";
    ctx.font = '18px "Microsoft YaHei",sans-serif';
    ctx.fillText("添加招工广场微信免费发布招工信息，微信号：18026423804", 24, H - 24);
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    tex.anisotropy = 4;
    return tex;
  }
  function makeIconTexture(kind) {
    const S = 128;
    const cv = document.createElement("canvas");
    cv.width = S;
    cv.height = S;
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, S, S);
    const hex = (v) => "#" + v.toString(16).padStart(6, "0");
    if (kind === "factory") {
      ctx.fillStyle = hex(C2.green);
      ctx.beginPath();
      ctx.moveTo(14, 100);
      ctx.lineTo(14, 58);
      ctx.lineTo(44, 76);
      ctx.lineTo(44, 58);
      ctx.lineTo(74, 76);
      ctx.lineTo(74, 46);
      ctx.lineTo(96, 46);
      ctx.lineTo(96, 100);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = hex(C2.brick);
      ctx.fillRect(78, 18, 14, 32);
      ctx.fillStyle = hex(C2.paper);
      for (let i = 0; i < 3; i++) ctx.fillRect(24 + i * 20, 82, 10, 12);
    } else {
      ctx.fillStyle = hex(C2.brick);
      ctx.beginPath();
      ctx.moveTo(18, 46);
      ctx.lineTo(74, 46);
      ctx.lineTo(74, 26);
      ctx.lineTo(112, 64);
      ctx.lineTo(74, 102);
      ctx.lineTo(74, 82);
      ctx.lineTo(18, 82);
      ctx.closePath();
      ctx.fill();
    }
    const tex = new Xh(cv);
    tex.colorSpace = Je;
    return tex;
  }
  function remapBoxUV(geo, w, h2, d2, vOffset) {
    const uv = geo.attributes.uv;
    const su2 = 1 / TILE_U, sv = 1 / TILE_V;
    const offsets = [
      [d2 * su2, h2 * sv],
      [d2 * su2, h2 * sv],
      [w * su2, d2 * su2],
      [w * su2, d2 * su2],
      [w * su2, h2 * sv],
      [w * su2, h2 * sv]
    ];
    const raw = uv.array.slice();
    for (let f = 0; f < 6; f++) {
      const [ou2, ov] = offsets[f];
      for (let i = 0; i < 4; i++) {
        const k = f * 8 + i * 2;
        uv.array[k] = raw[k] * ou2;
        uv.array[k + 1] = raw[k + 1] * ov + (vOffset || 0);
      }
    }
    uv.needsUpdate = true;
  }
  function tintGeometry(geo, color, topBoost, bottomMul) {
    const pos = geo.attributes.position;
    const n = pos.count;
    const arr = new Float32Array(n * 3);
    const c2 = new ts(color);
    const boost = topBoost === void 0 ? 1 : topBoost;
    const bmul = bottomMul === void 0 ? 1 : bottomMul;
    for (let i = 0; i < n; i++) {
      const y2 = pos.getY(i);
      let f = 1;
      f = bmul + (boost - bmul) * clamp(y2 / 30, 0, 1);
      arr[i * 3] = c2.r * f;
      arr[i * 3 + 1] = c2.g * f;
      arr[i * 3 + 2] = c2.b * f;
    }
    geo.setAttribute("color", new Ms(arr, 3));
  }
  function mergeGeometries(list) {
    return mergeManual(list);
  }
  function mergeManual(list) {
    const keys = ["position", "normal", "uv", "color"];
    const present = keys.filter((k) => list.every((g) => g.attributes[k]));
    const out = new Cs();
    for (const k of present) {
      const itemSize = list[0].attributes[k].itemSize;
      let total = 0;
      for (const g of list) total += g.attributes[k].count;
      const arr = new Float32Array(total * itemSize);
      let off = 0;
      for (const g of list) {
        arr.set(g.attributes[k].array, off);
        off += g.attributes[k].count * itemSize;
      }
      out.setAttribute(k, new Ms(arr, itemSize));
    }
    const idx = [];
    let base = 0;
    let indexed = true;
    for (const g of list) {
      if (!g.index) {
        indexed = false;
        break;
      }
    }
    if (indexed) {
      let total = 0;
      for (const g of list) total += g.index.count;
      const ia2 = total > 65535 ? new Uint32Array(total) : new Uint16Array(total);
      let o = 0;
      for (const g of list) {
        const gi2 = g.index.array;
        for (let i = 0; i < gi2.length; i++) ia2[o + i] = gi2[i] + base;
        o += gi2.length;
        base += g.attributes.position.count;
      }
      out.setIndex(new ds(ia2, 1));
    }
    return out;
  }
  function curvedEaveGeometry(halfW, halfD, eaveH, lift, segments, e) {
    segments = Math.max(4, segments || 14);
    e = e || 2.4;
    const thick = 0.2;
    const curve = (t2) => Math.pow(Math.abs(t2), e) * lift;
    const RIDGE_SHRINK = 0.96;
    const pos = [], uv = [];
    const V = (x, y2, z) => new Li(x, y2, z);
    const ridge = (i) => {
      const t2 = -1 + 2 * i / segments;
      return V(t2 * halfW * RIDGE_SHRINK, curve(t2) + eaveH, 0);
    };
    const eave = (i, zs2) => {
      const t2 = -1 + 2 * i / segments;
      return V(t2 * halfW, curve(t2), zs2 * halfD);
    };
    const corner = (xs2, zs2) => V(xs2 * halfW, curve(xs2), zs2 * halfD);
    const ridgeEnd = (xs2) => V(xs2 * halfW * RIDGE_SHRINK, curve(xs2) + eaveH, 0);
    const push = (v, dy) => {
      pos.push(v.x, v.y + (dy || 0), v.z);
      uv.push(v.x * 0.5, v.z * 0.5);
    };
    const tri = (a, b, c2, dy) => {
      push(a, dy);
      push(b, dy);
      push(c2, dy);
    };
    const quad = (a, b, c2, d2, dy) => {
      tri(a, b, c2, dy);
      tri(a, c2, d2, dy);
    };
    for (let i = 0; i < segments; i++) {
      const r0 = ridge(i), r1 = ridge(i + 1);
      for (const zs2 of [1, -1]) {
        const e0 = eave(i, zs2), e1 = eave(i + 1, zs2);
        if (zs2 > 0) quad(r0, r1, e1, e0, 0);
        else quad(r1, r0, e0, e1, 0);
        if (zs2 > 0) quad(r0, e0, e1, r1, -thick);
        else quad(r1, e1, e0, r0, -thick);
      }
    }
    for (const xs2 of [-1, 1]) {
      const r = ridgeEnd(xs2);
      const cF = corner(xs2, 1), cB = corner(xs2, -1);
      if (xs2 > 0) {
        tri(r, cF, cB, 0);
        tri(r, cB, cF, -thick);
      } else {
        tri(r, cB, cF, 0);
        tri(r, cF, cB, -thick);
      }
      const iEnd = xs2 > 0 ? segments : 0;
      const eF = eave(iEnd, 1), eB = eave(iEnd, -1);
      quad(eF, cF, cB, eB, -thick);
    }
    const seam = (p0, p1) => {
      const t0 = p0.clone(), t1 = p1.clone();
      const b0 = p0.clone();
      b0.y -= thick;
      const b1 = p1.clone();
      b1.y -= thick;
      quad(t0, t1, b1, b0, 0);
      quad(b0, b1, t1, t0, 0);
    };
    for (let i = 0; i < segments; i++) {
      seam(eave(i, 1), eave(i + 1, 1));
      seam(eave(i, -1), eave(i + 1, -1));
    }
    for (const xs2 of [-1, 1]) {
      const iEnd = xs2 > 0 ? segments : 0;
      seam(eave(iEnd, -1), eave(iEnd, 1));
    }
    const geo = new Cs();
    geo.setAttribute("position", new Ms(pos, 3));
    geo.setAttribute("uv", new Ms(uv, 2));
    geo.computeVertexNormals();
    return geo;
  }
  function createMaterials() {
    const facadeTextures = makeFacadeTextures();
    const roofTex = makeRoofTexture();
    const tileTex = makeTileTexture();
    const facadeDefs = [
      { name: "plaster-warm", color: 14471870 },
      // 米白（微暖）
      { name: "cement-cool", color: 13617854 },
      // 浅灰
      { name: "cement-sand", color: 13023644 },
      // 砂黄
      { name: "brick-red", color: 11434595 }
      // 砖红
    ];
    const facades = facadeDefs.map((def, i) => {
      const m = new Sd({
        map: facadeTextures[i % facadeTextures.length],
        vertexColors: true
      });
      m.name = def.name;
      return { material: m, base: def.color, geos: [] };
    });
    const roofMat = new Sd({
      map: roofTex,
      vertexColors: true,
      polygonOffset: true,
      polygonOffsetFactor: -1
    });
    roofMat.name = "roof";
    const roofGeos = [];
    const metalMat = new Sd({
      color: 16777215,
      map: tileTex,
      vertexColors: true
    });
    metalMat.name = "metal";
    const metalGeos = [];
    const detailMat = new Sd({ vertexColors: true });
    detailMat.name = "detail";
    const detailGeos = [];
    const paintMat = new Sd({ vertexColors: true });
    paintMat.name = "paint";
    const paintGeos = [];
    return {
      facadeTextures,
      roofTex,
      tileTex,
      facades,
      roofMat,
      roofGeos,
      metalMat,
      metalGeos,
      detailMat,
      detailGeos,
      paintMat,
      paintGeos,
      /** 按权重挑外立面档位：多数纸白/浅灰/米色，少量砖色 */
      pickFacade(rng) {
        const r = rng();
        if (r < 0.36) return 0;
        if (r < 0.66) return 1;
        if (r < 0.88) return 2;
        return 3;
      },
      dispose() {
        facadeTextures.forEach((t2) => t2.dispose());
        roofTex.dispose();
        tileTex.dispose();
        facades.forEach((f) => f.material.dispose());
        roofMat.dispose();
        metalMat.dispose();
        detailMat.dispose();
        paintMat.dispose();
      }
    };
  }
  function makeSimpleMaterials(reg) {
    const mk = (color, opt) => {
      const m = new Sd(Object.assign({ color }, opt || {}));
      reg.push(m);
      return m;
    };
    return {
      brick: mk(C2.brick),
      ink: mk(C2.ink),
      paper: mk(C2.paper),
      blue: mk(C2.blue),
      yellow: mk(C2.yellow),
      green: mk(6191701),
      stone: mk(14078406),
      white: mk(15591904),
      darkGlass: mk(3816248, { emissive: 1118481 }),
      steel: mk(12172470),
      canvasTop: mk(15722972, { side: p }),
      tarp: mk(9211782),
      filmByColor: {}
    };
  }
  function cloneMats(simple, reg, tileTex) {
    const cache = {};
    const byColor = (hex) => {
      const k = hex >>> 0;
      if (!cache[k]) {
        const m = new Sd({ color: k });
        cache[k] = m;
        reg.push(m);
      }
      return cache[k];
    };
    const clone = (src) => {
      const m = src.clone();
      reg.push(m);
      return m;
    };
    return {
      byColor,
      clone,
      /** 常用材质的本地副本 */
      stone: clone(simple.stone),
      white: clone(simple.white),
      steel: clone(simple.steel),
      brick: clone(simple.brick),
      paper: clone(simple.paper),
      /** 瓦顶：砖红向墨灰压一点，才是岭南灰瓦偏赭的观感 */
      tile() {
        const m = new Sd({
          color: new ts(C2.brick).lerp(new ts(7234137), 0.18),
          map: tileTex,
          side: p
        });
        reg.push(m);
        return m;
      }
    };
  }
  var bracketGeoCache = {};
  function makeColumn(simple, reg, h2, w, color) {
    const g = new Zl();
    const shaftGeo = new Gs(w, h2, w);
    const baseGeo = new Gs(w * 1.36, 0.7, w * 1.36);
    const capGeo = new Gs(w * 1.2, 0.36, w * 1.2);
    reg.push(shaftGeo, baseGeo, capGeo);
    const shaft = new Vs(shaftGeo, simple.byColor(color));
    shaft.position.y = h2 / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    g.add(shaft);
    const base = new Vs(baseGeo, simple.stone);
    base.position.y = 0.35;
    base.castShadow = true;
    g.add(base);
    const cap = new Vs(capGeo, simple.stone);
    cap.position.y = h2 - 0.2;
    g.add(cap);
    g.userData.height = h2;
    return g;
  }
  function makeBracket(simple, reg, size, color) {
    const key = size.toFixed(3);
    if (!bracketGeoCache[key]) {
      const shape = new Eu();
      shape.moveTo(0, 0);
      shape.lineTo(size, 0);
      shape.lineTo(size, size * 0.18);
      shape.quadraticCurveTo(size * 0.3, size * 0.2, 0, size);
      shape.lineTo(0, 0);
      const geo = new ed(shape, { depth: size * 0.32, bevelEnabled: false });
      geo.rotateY(Math.PI / 2);
      bracketGeoCache[key] = geo;
    }
    const m = new Vs(bracketGeoCache[key], simple.byColor(color));
    m.castShadow = true;
    return m;
  }
  var BUILDING_COLORS = [
    // 纸白 / 米 / 浅灰（10）
    14735042,
    14208699,
    14998472,
    13814202,
    14472388,
    14011838,
    14801094,
    13551545,
    14340801,
    13222838,
    // 砂 / 赭（2）
    12824721,
    12100997,
    // 灰绿（2，环境色）
    10134933,
    9411724,
    // 工作服蓝（2）
    8427686,
    7309211,
    // 招牌黄（2）
    12822895,
    12164706,
    // 砖红（2）
    11039329,
    10250840
  ];
  function pickBuildingColor(rng) {
    const r = rng();
    if (r < 0.48) return BUILDING_COLORS[Math.floor(rng() * 10)];
    if (r < 0.66) return BUILDING_COLORS[10 + Math.floor(rng() * 2)];
    if (r < 0.78) return BUILDING_COLORS[12 + Math.floor(rng() * 2)];
    if (r < 0.89) return BUILDING_COLORS[14 + Math.floor(rng() * 2)];
    if (r < 0.95) return BUILDING_COLORS[16 + Math.floor(rng() * 2)];
    return BUILDING_COLORS[18 + Math.floor(rng() * 2)];
  }
  var ROOF_COLORS = [
    10393739,
    9735809,
    11051669,
    9209465,
    11314841,
    8161930,
    7504524,
    // 蓝灰铁皮
    10258265,
    // 黄铁皮
    8805454
    // 砖红铁皮
  ];
  function pickRoofColor(rng) {
    const r = rng();
    if (r < 0.66) return ROOF_COLORS[Math.floor(rng() * 5)];
    if (r < 0.85) return ROOF_COLORS[5 + Math.floor(rng() * 2)];
    if (r < 0.93) return ROOF_COLORS[7];
    return ROOF_COLORS[8];
  }
  function addBuilding(mats, rng, cx, cz, w, d2, h2, rotY, ctx3d) {
    const matIdx = mats.pickFacade(rng);
    const wallColor = pickBuildingColor(rng);
    const roofColor = pickRoofColor(rng);
    const vOffset = rng.range(0, ATLAS_ROWS);
    const jitter = rng.range(-0.028, 0.028);
    const m4 = new lr();
    const q = new Ii().setFromEuler(new _r(0, rotY + jitter, 0));
    const one = new Li(1, 1, 1);
    const pos = new Li(cx, 0, cz);
    const body = new Gs(w, h2, d2);
    body.translate(0, h2 / 2, 0);
    remapBoxUV(body, w, h2, d2, vOffset);
    tintGeometry(body, wallColor, 1.06, 0.9);
    m4.compose(pos, q, one);
    body.applyMatrix4(m4);
    mats.facades[matIdx].geos.push(body);
    const roof = new Gs(w - 0.05, 0.34, d2 - 0.05);
    roof.translate(0, h2 + 0.17, 0);
    remapBoxUV(roof, w - 0.05, 0.34, d2 - 0.05, 0);
    tintGeometry(roof, roofColor, 1.12, 0.88);
    m4.compose(pos, q, one);
    roof.applyMatrix4(m4);
    mats.roofGeos.push(roof);
    const shedP = rng();
    if (shedP < (ctx3d.lowPower ? 0.32 : 0.52)) {
      const sx = w * rng.range(0.34, 0.62);
      const sz = d2 * rng.range(0.32, 0.55);
      const sh2 = rng.range(1.9, 2.9);
      const ox = rng.range(-1, 1) * (w - sx) * 0.3;
      const oz = rng.range(-1, 1) * (d2 - sz) * 0.3;
      const shed = new Gs(sx, sh2, sz);
      shed.translate(0, sh2 / 2, 0);
      remapBoxUV(shed, sx, sh2, sz, rng.range(0, ATLAS_ROWS));
      tintGeometry(shed, rng.chance(0.6) ? 11117206 : roofColor, 1.1, 0.9);
      const lp2 = new Li(cx + ox, h2 + 0.34, cz + oz);
      m4.compose(lp2, q, one);
      shed.applyMatrix4(m4);
      mats.metalGeos.push(shed);
      const cap = new Gs(sx + 0.7, 0.16, sz + 0.7);
      cap.translate(0, 0, 0);
      remapBoxUV(cap, sx + 0.7, 0.16, sz + 0.7, 0);
      tintGeometry(cap, rng.chance(0.5) ? 11840928 : 10463398, 1.15, 0.9);
      const capp = new Li(cx + ox, h2 + 0.34 + sh2 + 0.5, cz + oz);
      m4.compose(capp, q, one);
      cap.applyMatrix4(m4);
      mats.metalGeos.push(cap);
    }
    if (rng.chance(0.45)) {
      const ph2 = rng.range(0.6, 1);
      const pw = 0.28;
      const segs = [
        [w, pw, 0, (d2 - pw) / 2],
        [w, pw, 0, -(d2 - pw) / 2],
        [pw, d2, (w - pw) / 2, 0],
        [pw, d2, -(w - pw) / 2, 0]
      ];
      for (const [sw, sd2, ox, oz] of segs) {
        const g = new Gs(sw, ph2, sd2);
        g.translate(0, ph2 / 2, 0);
        remapBoxUV(g, sw, ph2, sd2, 0);
        tintGeometry(g, 13617338, 1, 0.9);
        const pp2 = new Li(cx + ox, h2 + 0.34, cz + oz);
        m4.compose(pp2, q, one);
        g.applyMatrix4(m4);
        mats.roofGeos.push(g);
      }
    }
    if (rng.chance(ctx3d.lowPower ? 0.18 : 0.34)) {
      const aw = w * rng.range(0.5, 0.9);
      const ad2 = rng.range(1.1, 1.9);
      const ay = rng.range(2.4, 3.2);
      const dz = (d2 / 2 + ad2 / 2) * (rng.chance(0.5) ? 1 : -1);
      const g = new Gs(aw, 0.12, ad2);
      g.translate(0, 0, 0);
      remapBoxUV(g, aw, 0.12, ad2, 0);
      const col = rng.pick([5466486, 12755556, 12077626, 7240803, 9211782]);
      tintGeometry(g, col, 1, 0.8);
      const p2 = new Li(cx + 0, ay, cz + dz);
      const qq = new Ii().setFromEuler(new _r(rng.range(-0.14, -0.04), rotY + jitter, 0));
      m4.compose(p2, qq, one);
      g.applyMatrix4(m4);
      mats.paintGeos.push(g);
    }
    return { cx, cz, w, d: d2, h: h2 };
  }
  function buildEnvDetails(root, rng, buildings, textures, ctx3d) {
    const dummy = new Dr();
    const color = new ts();
    const groups = {
      ac: [],
      tank: [],
      pole: [],
      laundry: [],
      sign: [],
      wire: []
    };
    for (const b of buildings) {
      if (rng.chance(ctx3d.lowPower ? 0.25 : 0.5)) {
        groups.ac.push({
          x: b.cx + rng.range(-0.3, 0.3) * b.w,
          y: Math.max(3.4, b.h * rng.range(0.35, 0.75)),
          z: b.cz + (b.d / 2 + 0.45) * rng.sign(),
          ry: 0
        });
      }
      if (rng.chance(0.22)) {
        groups.tank.push({ x: b.cx + rng.range(-0.25, 0.25) * b.w, y: b.h + 0.5, z: b.cz + rng.range(-0.25, 0.25) * b.d, ry: rng.range(0, 3.14) });
      }
      if (rng.chance(0.3)) {
        groups.pole.push({ x: b.cx + rng.range(-0.3, 0.3) * b.w, y: b.h + 0.6, z: b.cz + (b.d / 2 + 0.5), ry: rng.range(0, 3.14) });
      }
      if (rng.chance(0.34)) {
        groups.laundry.push({
          x: b.cx,
          y: Math.max(3, b.h * rng.range(0.4, 0.8)),
          z: b.cz + (b.d / 2 + 0.75) * rng.sign(),
          ry: rng.range(-0.2, 0.2)
        });
      }
      if (rng.chance(0.28)) {
        groups.sign.push({
          x: b.cx,
          y: rng.range(2.6, 4.4),
          z: b.cz + (b.d / 2 + 0.18) * rng.sign(),
          ry: 0
        });
      }
    }
    if (groups.ac.length) {
      const geo = new Gs(0.95, 0.62, 0.42);
      const mat = new Sd({ color: 14275784 });
      ctx3d.track(mat);
      const mesh = new Qc(geo, mat, groups.ac.length);
      mesh.name = "ac-units";
      groups.ac.forEach((it2, i) => {
        dummy.position.set(it2.x, it2.y, it2.z);
        dummy.rotation.set(0, it2.ry, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = false;
      root.add(mesh);
      ctx3d.track(geo);
    }
    if (groups.tank.length) {
      const geo = new vu(0.72, 0.72, 1.5, 12);
      const mat = new Sd({ color: 12106934 });
      ctx3d.track(mat);
      const mesh = new Qc(geo, mat, groups.tank.length);
      mesh.name = "water-tanks";
      groups.tank.forEach((it2, i) => {
        dummy.position.set(it2.x, it2.y + 0.75, it2.z);
        dummy.rotation.set(0, it2.ry, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      root.add(mesh);
      ctx3d.track(geo);
    }
    if (groups.laundry.length) {
      const barGeo = new vu(0.05, 0.05, 4.6, 5);
      barGeo.rotateZ(Math.PI / 2);
      const barMat = new Sd({ color: 9341568 });
      ctx3d.track(barMat);
      ctx3d.track(barGeo);
      const bar = new Qc(barGeo, barMat, groups.laundry.length);
      const clothGeo = new Gs(0.55, 1.05, 0.06);
      const clothMat = new Sd({ color: 16777215 });
      ctx3d.track(clothMat);
      ctx3d.track(clothGeo);
      const PER = 5;
      const cloth = new Qc(clothGeo, clothMat, groups.laundry.length * PER);
      cloth.instanceColor = new Xc(new Float32Array(groups.laundry.length * PER * 3), 3);
      const CLOTH_COLORS = [15854557, 14998734, 9413549, 12755556, 5466486, 12077626, 14209734];
      let ci2 = 0;
      groups.laundry.forEach((it2, i) => {
        dummy.position.set(it2.x, it2.y, it2.z);
        dummy.rotation.set(0, it2.ry, 0);
        dummy.updateMatrix();
        bar.setMatrixAt(i, dummy.matrix);
        for (let k = 0; k < PER; k++) {
          dummy.position.set(it2.x + (k - (PER - 1) / 2) * 0.82, it2.y - 0.62, it2.z + 0.02);
          dummy.rotation.set(0, it2.ry, 0);
          dummy.updateMatrix();
          cloth.setMatrixAt(ci2, dummy.matrix);
          color.setHex(CLOTH_COLORS[Math.floor(rng() * CLOTH_COLORS.length)]);
          cloth.setColorAt(ci2, color);
          ci2++;
        }
      });
      bar.instanceMatrix.needsUpdate = true;
      cloth.instanceMatrix.needsUpdate = true;
      if (cloth.instanceColor) cloth.instanceColor.needsUpdate = true;
      root.add(bar);
      root.add(cloth);
    }
    if (groups.sign.length) {
      const geo = new Gs(2.6, 0.75, 0.12);
      const mat = new Sd({ color: 16777215 });
      ctx3d.track(mat);
      ctx3d.track(geo);
      const mesh = new Qc(geo, mat, groups.sign.length);
      mesh.instanceColor = new Xc(new Float32Array(groups.sign.length * 3), 3);
      const SIGN_COLORS = [12755556, 12077626, 5466486, 15130317, 3157288, 9413549, 12559471];
      groups.sign.forEach((it2, i) => {
        dummy.position.set(it2.x, it2.y, it2.z);
        dummy.rotation.set(0, it2.ry, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        color.setHex(SIGN_COLORS[Math.floor(rng() * SIGN_COLORS.length)]);
        mesh.setColorAt(i, color);
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      root.add(mesh);
    }
    const wirePts = [];
    const wireCount = ctx3d.lowPower ? 10 : 22;
    const th = LANE.deg * Math.PI / 180;
    for (let i = 0; i < wireCount; i++) {
      const v = LANE.vMin + rng.range(0, LANE.vMax - LANE.vMin);
      const u0 = rng.range(-60, 20);
      const len = rng.range(26, 60);
      const y2 = rng.range(13, 26);
      const a = new Li(
        Math.cos(th) * u0 + Math.sin(th) * v,
        y2,
        -Math.sin(th) * u0 + Math.cos(th) * v
      );
      const b = new Li(
        Math.cos(th) * (u0 + len) + Math.sin(th) * v,
        y2 + rng.range(-1.6, 1.6),
        -Math.sin(th) * (u0 + len) + Math.cos(th) * v
      );
      if (!insideDistrict(a.x, a.z, -2) || !insideDistrict(b.x, b.z, -2)) continue;
      const mid = a.clone().lerp(b, 0.5);
      mid.y -= rng.range(0.5, 1.4);
      const curve = new cu(a, mid, b);
      const pts = curve.getPoints(8);
      for (let k = 0; k < pts.length - 1; k++) {
        wirePts.push(pts[k].x, pts[k].y, pts[k].z, pts[k + 1].x, pts[k + 1].y, pts[k + 1].z);
      }
    }
    if (wirePts.length) {
      const g = new Cs();
      g.setAttribute("position", new Ms(wirePts, 3));
      const m = new xh({ color: 4867389, transparent: true, opacity: 0.42 });
      ctx3d.track(m);
      ctx3d.track(g);
      const lines = new Ih(g, m);
      lines.name = "power-lines";
      root.add(lines);
    }
    if (groups.pole.length) {
      const geo = new vu(0.06, 0.06, 1.2, 5);
      geo.translate(0, 0.6, 0);
      const mat = new Sd({ color: 9341568 });
      ctx3d.track(mat);
      ctx3d.track(geo);
      const mesh = new Qc(geo, mat, groups.pole.length);
      groups.pole.forEach((it2, i) => {
        dummy.position.set(it2.x, it2.y, it2.z);
        dummy.rotation.set(0, it2.ry, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      root.add(mesh);
    }
  }
  function buildTrees(root, rng, ctx3d) {
    const trunkGeo = new vu(0.16, 0.24, 2.6, 6);
    trunkGeo.translate(0, 1.3, 0);
    const trunkMat = new Sd({ color: 7036750 });
    const crownGeo = new id(1.9, 1);
    const crownMat = new Sd({ color: 7240803, flatShading: true });
    ctx3d.track(trunkGeo);
    ctx3d.track(trunkMat);
    ctx3d.track(crownGeo);
    ctx3d.track(crownMat);
    const pts = [];
    for (let x = DISTRICT.west - 12; x < DISTRICT.east + 12; x += rng.range(9, 14)) {
      pts.push({ x, z: DISTRICT.north - DISTRICT.roadHalf - 3.2, s: rng.range(0.85, 1.25) });
    }
    const P2 = PLACES["hiring-plaza"];
    for (let i = 0; i < 10; i++) {
      const a = rng.range(0, Math.PI * 2);
      const r = rng.range(22, 30);
      pts.push({ x: P2.x + Math.cos(a) * r, z: P2.z + Math.sin(a) * r * 0.8, s: rng.range(0.7, 1.1) });
    }
    const dummy = new Dr();
    const trunks = new Qc(trunkGeo, trunkMat, pts.length);
    const crowns = new Qc(crownGeo, crownMat, pts.length);
    crowns.instanceColor = new Xc(new Float32Array(pts.length * 3), 3);
    const col = new ts();
    pts.forEach((p2, i) => {
      dummy.position.set(p2.x, 0, p2.z);
      dummy.scale.setScalar(p2.s);
      dummy.rotation.set(0, rng.range(0, 3.14), 0);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      dummy.position.set(p2.x + rng.range(-0.3, 0.3), 2.7 * p2.s, p2.z + rng.range(-0.3, 0.3));
      dummy.scale.setScalar(p2.s * rng.range(0.85, 1.15));
      dummy.updateMatrix();
      crowns.setMatrixAt(i, dummy.matrix);
      col.setHex(rng.chance(0.5) ? 7240803 : 6517594);
      crowns.setColorAt(i, col);
    });
    trunks.instanceMatrix.needsUpdate = true;
    crowns.instanceMatrix.needsUpdate = true;
    if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
    trunks.castShadow = false;
    crowns.castShadow = false;
    root.add(trunks);
    root.add(crowns);
  }
  function buildElevatedRoad(root, mats, ctx3d) {
    const z0 = DISTRICT.north - 8, z1 = southRoadZ(DISTRICT.east) + 12;
    const x = DISTRICT.east + 2.4;
    const deck = new Vs(new Gs(9.6, 1.1, z1 - z0), mats.steel);
    deck.position.set(x, 9.2, (z0 + z1) / 2);
    deck.castShadow = true;
    deck.receiveShadow = true;
    root.add(deck);
    const railGeo = new Gs(0.24, 1, z1 - z0);
    for (const s of [-1, 1]) {
      const r = new Vs(railGeo, mats.stone);
      r.position.set(x + s * 4.6, 10.1, (z0 + z1) / 2);
      root.add(r);
    }
    const pierGeo = new vu(0.9, 1, 8.4, 10);
    const pierMat = new Sd({ color: 12762546 });
    ctx3d.track(pierGeo);
    ctx3d.track(pierMat);
    const n = Math.floor((z1 - z0) / 18);
    const piers = new Qc(pierGeo, pierMat, n);
    const dummy = new Dr();
    for (let i = 0; i < n; i++) {
      dummy.position.set(x, 4.2, z0 + 9 + i * 18);
      dummy.updateMatrix();
      piers.setMatrixAt(i, dummy.matrix);
    }
    piers.instanceMatrix.needsUpdate = true;
    root.add(piers);
    ctx3d.track(deck.geometry);
  }
  function buildSurroundings(root, rng, ctx3d) {
    const list = [];
    for (let i = 0; i < 42; i++) {
      const x = rng.range(GROUND.x0 + 16, GROUND.x1 - 16);
      const z = rng.range(DISTRICT.north - 60, DISTRICT.north - 20);
      list.push({ x, z, w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(7, 22) });
    }
    for (let i = 0; i < 16; i++) {
      list.push({ x: rng.range(GROUND.x0 + 14, DISTRICT.west - 26), z: rng.range(-95, 70), w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(6, 20) });
      list.push({ x: rng.range(DISTRICT.east + 26, GROUND.x1 - 14), z: rng.range(-95, 70), w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(6, 20) });
    }
    for (let i = 0; i < 22; i++) {
      const x = rng.range(GROUND.x0 + 16, GROUND.x1 - 16);
      const z = rng.range(southRoadZ(x) + 26, GROUND.z1 - 14);
      list.push({ x, z, w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(7, 21) });
    }
    const base = new Gs(1, 1, 1);
    ctx3d.track(base);
    const merged = [];
    for (const b of list) {
      const g = base.clone();
      g.applyMatrix4(new lr().compose(
        new Li(b.x, b.h / 2, b.z),
        new Ii(),
        new Li(b.w, b.h, b.d)
      ));
      const c2 = new ts(rng.chance(0.7) ? 15196370 : 14406854);
      tintGeometry(g, c2.getHex(), 1.05, 0.95);
      merged.push(g);
    }
    const geo = mergeGeometries(merged);
    ctx3d.track(geo);
    merged.forEach((g) => g.dispose());
    const mat = new Sd({ vertexColors: true });
    ctx3d.track(mat);
    const mesh = new Vs(geo, mat);
    mesh.name = "surroundings";
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    root.add(mesh);
  }
  function buildKangleArch(simple, ctx3d, reg) {
    const g = new Zl();
    const span = 13.2, colW = 1.25, colH = 11.2;
    const wallCol = 15591386;
    for (const s of [-1, 1]) {
      const col = makeColumn(simple, reg, colH, colW, wallCol);
      col.position.set(s * span / 2, 0, 0);
      g.add(col);
      for (const ss2 of [-1, 1]) {
        const br2 = makeBracket(simple, reg, 1.05, 14867147);
        br2.position.set(s * (span / 2 - colW / 2 * ss2), colH - 1.5, -0.42);
        g.add(br2);
      }
      const cgeo = new pa(0.5, 3);
      const cmat = new Sd({
        map: makeSignTexture(
          s < 0 ? "康樂東約" : "鳳和康樂",
          { w: 128, h: 768, vertical: true, bg: "#e9e2d3", fg: "#8a3a2c", sizeRatio: 0.58, border: false }
        ),
        side: p
      });
      reg.push(cgeo, cmat);
      const couplet = new Vs(cgeo, cmat);
      couplet.position.set(s * (span / 2 + 0.02), 3.1, colW / 2 + 0.01);
      g.add(couplet);
    }
    const beamGeo = new Gs(span + colW * 1.4, 0.66, 0.9);
    reg.push(beamGeo);
    const beam = new Vs(beamGeo, simple.byColor(15130576));
    beam.position.y = colH + 0.1;
    beam.castShadow = true;
    g.add(beam);
    const beam2Geo = new Gs(span + colW * 0.8, 0.3, 0.7);
    reg.push(beam2Geo);
    const beam2Mat = simple.byColor(12077626);
    const beam2 = new Vs(beam2Geo, beam2Mat);
    beam2.position.y = colH + 0.58;
    g.add(beam2);
    const plaqueW = 4.5, plaqueH = 1.35;
    const plaqueGeo = new Gs(plaqueW, plaqueH, 0.24);
    reg.push(plaqueGeo);
    const plaque = new Vs(plaqueGeo, simple.byColor(16117988));
    plaque.position.set(0, colH + 1.35, 0);
    plaque.castShadow = true;
    g.add(plaque);
    const signMat = new Sd({
      map: makeSignTexture(
        "康樂東約",
        { w: 1024, h: 300, bg: "#f3ece0", fg: "#2b2621", border: true, borderColor: "#8d7a52", sizeRatio: 0.66 }
      ),
      side: p
    });
    const faceGeo = new pa(plaqueW - 0.3, plaqueH - 0.28);
    reg.push(faceGeo, signMat);
    const face = new Vs(faceGeo, signMat);
    face.position.set(0, colH + 1.35, 0.135);
    g.add(face);
    const faceBack = new Vs(faceGeo, signMat);
    faceBack.position.z = -0.135;
    faceBack.rotation.y = Math.PI;
    g.add(faceBack);
    const eaveGeo = curvedEaveGeometry(5.9, 1.85, 0.62, 1.05, 16, 2.5);
    const tileMat = simple.tile();
    reg.push(eaveGeo);
    const eave = new Vs(eaveGeo, tileMat);
    eave.position.y = colH + 2.15;
    eave.castShadow = true;
    eave.receiveShadow = true;
    g.add(eave);
    const ridgeGeo = new Gs(5.9 * 2 * 0.98, 0.24, 0.5);
    reg.push(ridgeGeo);
    const ridgeMat = simple.byColor(7234137);
    const ridge = new Vs(ridgeGeo, ridgeMat);
    ridge.position.y = colH + 2.15 + 0.62 + 0.12;
    g.add(ridge);
    const dougongGeo = new Gs(0.26, 0.34, 0.26);
    reg.push(dougongGeo);
    const dougongMat = simple.byColor(15130576);
    for (let i = -4; i <= 4; i++) {
      for (const zz of [-1, 1]) {
        const d2 = new Vs(dougongGeo, dougongMat);
        d2.position.set(i * 1.2, colH + 1.82, zz * 0.52);
        g.add(d2);
      }
    }
    const stepGeo = new Gs(span + 2.4, 0.3, 2.6);
    reg.push(stepGeo);
    const step = new Vs(stepGeo, simple.stone);
    step.position.set(0, 0.15, 0.4);
    step.receiveShadow = true;
    g.add(step);
    g.userData.emissiveMats = [signMat, beam2Mat, ridgeMat];
    g.userData.focus = { dist: 30, fitH: 15, height: 3.2 };
    return g;
  }
  function buildLujiangArch(simple, ctx3d, reg) {
    const g = new Zl();
    const stoneCol = 14275526;
    const mainH = 12.4, sideH = 8.6;
    const midSpan = 13, sideSpan = 4;
    const colXs = [-(midSpan / 2 + sideSpan / 2), -midSpan / 2, midSpan / 2, midSpan / 2 + sideSpan / 2];
    const colHs = [sideH, mainH, mainH, sideH];
    colXs.forEach((x, i) => {
      const col = makeColumn(simple, reg, colHs[i], 1.05, stoneCol);
      col.position.set(x, 0, 0);
      g.add(col);
      if (i === 1 || i === 2) {
        const tgeo = new pa(0.46, 3.6);
        const tmat = new Sd({
          map: makeSignTexture(
            i === 1 ? "鷺江春曉" : "鳳陽鷺江",
            { w: 128, h: 900, vertical: true, bg: "#d9d3c6", fg: "#8d7a52", sizeRatio: 0.5, border: false }
          ),
          side: p
        });
        reg.push(tgeo, tmat);
        const t2 = new Vs(tgeo, tmat);
        t2.position.set(x, 3.4, 0.54);
        g.add(t2);
      }
      const drumGeo = new vu(0.62, 0.62, 0.5, 14);
      reg.push(drumGeo);
      const drum = new Vs(drumGeo, simple.stone);
      drum.rotation.z = Math.PI / 2;
      drum.position.set(x + (x < 0 ? -0.75 : 0.75), 0.66, 0);
      g.add(drum);
    });
    const beamGeo = new Gs(midSpan + 1.4, 0.78, 1);
    reg.push(beamGeo);
    const beam = new Vs(beamGeo, simple.byColor(14736077));
    beam.position.y = mainH + 0.1;
    beam.castShadow = true;
    g.add(beam);
    const carveGeo = new Gs(midSpan + 0.9, 0.34, 0.7);
    reg.push(carveGeo);
    const carve = new Vs(carveGeo, simple.byColor(10129542));
    carve.position.y = mainH - 0.42;
    g.add(carve);
    const plaqueW = 5.6, plaqueH = 1.6;
    const plaqueGeo = new Gs(plaqueW, plaqueH, 0.3);
    reg.push(plaqueGeo);
    const plaque = new Vs(plaqueGeo, simple.byColor(15262420));
    plaque.position.set(0, mainH + 1.55, 0);
    plaque.castShadow = true;
    g.add(plaque);
    const signMat = new Sd({
      map: makeSignTexture(
        "鷺江春曉",
        { w: 1200, h: 320, bg: "#f0eade", fg: "#a8863f", border: true, borderColor: "#a8863f", sizeRatio: 0.68 }
      ),
      side: p
    });
    const faceGeo = new pa(plaqueW - 0.34, plaqueH - 0.3);
    reg.push(faceGeo, signMat);
    const face = new Vs(faceGeo, signMat);
    face.position.set(0, mainH + 1.55, 0.16);
    g.add(face);
    const faceBack = new Vs(faceGeo, signMat);
    faceBack.position.z = -0.16;
    faceBack.rotation.y = Math.PI;
    g.add(faceBack);
    const tileMat = simple.tile();
    const upperGeo = curvedEaveGeometry(6.6, 2, 0.7, 1.25, 18, 2.5);
    const lowerGeo = curvedEaveGeometry(6.2, 2.5, 0.62, 1.1, 18, 2.5);
    reg.push(upperGeo, lowerGeo);
    const upper = new Vs(upperGeo, tileMat);
    upper.position.y = mainH + 2.5;
    upper.castShadow = true;
    upper.receiveShadow = true;
    g.add(upper);
    const lower = new Vs(lowerGeo, tileMat);
    lower.position.y = mainH + 1.9;
    g.add(lower);
    const ridgeGeo = new Gs(6.6 * 2 * 0.97, 0.3, 0.6);
    reg.push(ridgeGeo);
    const ridgeMat = simple.byColor(7234137);
    const ridge = new Vs(ridgeGeo, ridgeMat);
    ridge.position.y = mainH + 2.5 + 0.7 + 0.15;
    g.add(ridge);
    const beastMat = simple.byColor(6248013);
    const bodyGeo = new _u(0.34, 1.5, 6);
    const headGeo = new od(0.3, 8, 6);
    reg.push(bodyGeo, headGeo);
    for (const s of [-1, 1]) {
      const beast = new Zl();
      const body = new Vs(bodyGeo, beastMat);
      body.rotation.z = s * 0.9;
      body.position.set(0, 0.6, 0);
      beast.add(body);
      const head = new Vs(headGeo, beastMat);
      head.position.set(s * 0.62, 1.15, 0);
      beast.add(head);
      beast.position.set(s * 5.2, mainH + 3.35, 0);
      g.add(beast);
    }
    const sideGeo = curvedEaveGeometry(sideSpan * 1.55, 1.7, 0.5, 0.75, 12, 2.4);
    const capGeo = new Gs(sideSpan * 2.6, 0.5, 0.9);
    reg.push(sideGeo, capGeo);
    for (const s of [-1, 1]) {
      const side = new Vs(sideGeo, tileMat);
      side.position.set(s * (midSpan / 2 + sideSpan / 2), sideH + 1.5, 0);
      side.castShadow = true;
      g.add(side);
      const cap = new Vs(capGeo, simple.byColor(14736077));
      cap.position.set(s * (midSpan / 2 + sideSpan / 2), sideH + 0.3, 0);
      g.add(cap);
    }
    const stepGeo = new Gs(midSpan + sideSpan * 2 + 2.4, 0.34, 3);
    reg.push(stepGeo);
    const step = new Vs(stepGeo, simple.stone);
    step.position.set(0, 0.17, 0.5);
    step.receiveShadow = true;
    g.add(step);
    g.userData.emissiveMats = [signMat, ridgeMat, beastMat];
    g.userData.focus = { dist: 40, fitH: 20, height: 4.4 };
    return g;
  }
  function makePersonGeometry() {
    const parts = [];
    const torso = new fu(0.21, 0.52, 4, 8);
    torso.translate(0, 1.06, 0);
    parts.push(torso);
    const head = new od(0.145, 10, 8);
    head.translate(0, 1.58, 0);
    parts.push(head);
    const legGeo = new Gs(0.15, 0.72, 0.17);
    legGeo.translate(0, 0.36, 0);
    for (const s of [-1, 1]) {
      const l2 = legGeo.clone();
      l2.translate(s * 0.11, 0, 0);
      parts.push(l2);
    }
    legGeo.dispose();
    const g = mergeGeometries(parts);
    parts.forEach((p2) => p2.dispose());
    const pos = g.attributes.position;
    const arr = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const y2 = pos.getY(i);
      let v = 1;
      if (y2 < 0.36) v = 0.34;
      else if (y2 < 0.8) v = 0.86;
      else if (y2 > 1.45) v = 1.25;
      arr[i * 3] = v;
      arr[i * 3 + 1] = v;
      arr[i * 3 + 2] = v;
    }
    g.setAttribute("color", new Ms(arr, 3));
    return g;
  }
  function buildHiringPlaza(simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "hiring-plaza-group";
    const W = 46, D = 30;
    const roofY = 7.2;
    const rng = makeRng(778811);
    const floorGeo = new Gs(W + 8, 0.22, D + 8);
    const floorMat = new Sd({ color: 12959666 });
    reg.push(floorGeo, floorMat);
    const floor = new Vs(floorGeo, floorMat);
    floor.position.y = 0.11;
    floor.receiveShadow = true;
    g.add(floor);
    const memMat = new Sd({
      color: 15920609,
      side: p
    });
    reg.push(memMat);
    const memMats = [16052196, 15722972, 15459541].map((c2) => {
      const m = new Sd({ color: c2, side: p });
      reg.push(m);
      return m;
    });
    const ribMat = simple.byColor(11774613);
    const seamMat = simple.byColor(10985096);
    const cols = 5, rows = 3;
    const pw = W / cols, pd2 = D / rows;
    const memGeo = new Gs(pw * 0.99, 0.16, pd2 * 0.99);
    const ridgeGeo = new Gs(0.1, 0.16, pd2 * 0.99);
    reg.push(memGeo, ridgeGeo);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const m = new Vs(memGeo, memMats[(i + j) % 3]);
        m.position.set(-W / 2 + pw * (i + 0.5), roofY + 0.28, -D / 2 + pd2 * (j + 0.5));
        m.rotation.z = (i % 2 ? -1 : 1) * 0.012;
        m.receiveShadow = true;
        g.add(m);
        const ridge = new Vs(ridgeGeo, memMat);
        ridge.position.set(-W / 2 + pw * (i + 0.5), roofY + 0.42, -D / 2 + pd2 * (j + 0.5));
        g.add(ridge);
        if (i < cols - 1) {
          const seamGeo = new Gs(0.2, 0.14, D * 0.99);
          reg.push(seamGeo);
          const seam = new Vs(seamGeo, seamMat);
          seam.position.set(-W / 2 + pw * (i + 1), roofY + 0.3, 0);
          g.add(seam);
        }
      }
    }
    const ribGeo = new Gs(W, 0.2, 0.42);
    reg.push(ribGeo);
    for (let j = 0; j <= rows; j++) {
      const rib = new Vs(ribGeo, ribMat);
      rib.position.set(0, roofY + 0.3, -D / 2 + pd2 * j);
      g.add(rib);
    }
    const frameMat = simple.byColor(15262938);
    for (const [w, d2, x, z] of [[W, 0.22, 0, -D / 2], [W, 0.22, 0, D / 2], [0.22, D, -W / 2, 0], [0.22, D, W / 2, 0]]) {
      const fg = new Gs(w, 0.3, d2);
      reg.push(fg);
      const f = new Vs(fg, frameMat);
      f.position.set(x, roofY + 0.16, z);
      g.add(f);
    }
    const colGeo = new vu(0.13, 0.13, roofY, 8);
    colGeo.translate(0, roofY / 2, 0);
    reg.push(colGeo);
    const colMat = simple.byColor(14999766);
    const colXs = [-W / 2, -W / 4, 0, W / 4, W / 2];
    const colZs = [-D / 2, 0, D / 2];
    const strutGeo = new vu(0.055, 0.055, 0.75, 6);
    reg.push(strutGeo);
    for (const x of colXs) {
      for (const z of colZs) {
        if (Math.abs(x) === W / 2 && z !== 0) continue;
        const c2 = new Vs(colGeo, colMat);
        c2.position.set(x, 0, z);
        c2.castShadow = true;
        g.add(c2);
        if (z !== -D / 2 && z !== D / 2) {
          const strut = new Vs(strutGeo, colMat);
          strut.position.set(x, roofY + 0.02, z);
          g.add(strut);
        }
      }
    }
    const cableMat = new xh({ color: 9340535, transparent: true, opacity: 0.62 });
    reg.push(cableMat);
    const cablePts = [];
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        cablePts.push(sx * W / 2, roofY - 0.1, sz * D / 2);
        cablePts.push(sx * (W / 2 + 3), 0.2, sz * (D / 2 - 2));
      }
    }
    const cableGeo = new Cs();
    cableGeo.setAttribute("position", new Ms(cablePts, 3));
    reg.push(cableGeo);
    g.add(new Ih(cableGeo, cableMat));
    const shadeGeo = new _u(0.46, 0.34, 14, 1, true);
    const shadeMat = new Sd({ color: 2828323, side: p });
    const bulbGeo = new od(0.14, 8, 6);
    const bulbMat = simple.byColor(15786688);
    const wireMat = new xh({ color: 2828323, transparent: true, opacity: 0.75 });
    reg.push(shadeGeo, bulbGeo, shadeMat, wireMat);
    const lampPts = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        const x = -W / 2 + pw * (i + 1), z = -D / 2 + pd2 * (j + 0.5);
        const y2 = roofY - 1.5;
        const shade = new Vs(shadeGeo, shadeMat);
        shade.position.set(x, y2, z);
        g.add(shade);
        const bulb = new Vs(bulbGeo, bulbMat);
        bulb.position.set(x, y2 - 0.12, z);
        g.add(bulb);
        lampPts.push(x, roofY, z, x, y2 + 0.1, z);
      }
    }
    if (lampPts.length) {
      const lg = new Cs();
      lg.setAttribute("position", new Ms(lampPts, 3));
      reg.push(lg);
      g.add(new Ih(lg, wireMat));
    }
    const boardW = 8.6, boardH = 5.4, boardY = 3.4;
    const ledFrameGeo = new Gs(boardW + 0.5, boardH + 0.5, 0.42);
    const ledFrameMat = simple.byColor(4867647);
    reg.push(ledFrameGeo);
    const ledFrame = new Vs(ledFrameGeo, ledFrameMat);
    ledFrame.position.set(-W / 2 + 2, boardY, -D / 2 - 1.2);
    ledFrame.castShadow = true;
    g.add(ledFrame);
    const ledScreenMat = new Sd({
      map: makeLedTexture(),
      emissive: 1712691,
      emissiveIntensity: 0.5
    });
    const ledGeo = new pa(boardW, boardH);
    reg.push(ledScreenMat, ledGeo);
    const led = new Vs(ledGeo, ledScreenMat);
    led.position.set(ledFrame.position.x, boardY, ledFrame.position.z + 0.23);
    led.name = "hiring-led";
    g.add(led);
    const legGeo = new Gs(0.26, boardY - boardH / 2, 0.26);
    reg.push(legGeo);
    for (const s of [-1, 1]) {
      const leg = new Vs(legGeo, simple.steel);
      leg.position.set(ledFrame.position.x + s * (boardW / 2 - 0.4), (boardY - boardH / 2) / 2, ledFrame.position.z);
      g.add(leg);
    }
    const miniFrameGeo = new Gs(3, 1.9, 0.3);
    const miniGeo = new pa(2.8, 1.7);
    reg.push(miniFrameGeo, miniGeo);
    const miniFrame = new Vs(miniFrameGeo, ledFrameMat);
    miniFrame.position.set(W / 2 - 2.4, 2.3, -D / 2 - 0.6);
    g.add(miniFrame);
    const mini = new Vs(miniGeo, ledScreenMat);
    mini.position.set(miniFrame.position.x, miniFrame.position.y, miniFrame.position.z + 0.17);
    g.add(mini);
    const fenceMat = simple.byColor(5204810);
    const fenceGeoCache = {};
    const addFence = (sx, sz, x, z) => {
      const key = sx.toFixed(2) + "x" + sz.toFixed(2);
      if (!fenceGeoCache[key]) {
        fenceGeoCache[key] = new Gs(sx, 1.5, sz);
        reg.push(fenceGeoCache[key]);
      }
      const f = new Vs(fenceGeoCache[key], fenceMat);
      f.position.set(x, 0.75, z);
      f.castShadow = false;
      g.add(f);
    };
    const fW = W + 8, fD = D + 8;
    addFence(fW, 0.6, 0, -fD / 2);
    addFence(0.6, fD, -fW / 2, 0);
    addFence(0.6, fD, fW / 2, 0);
    addFence(22, 0.6, -fW / 2 + 11, fD / 2);
    addFence(14, 0.6, fW / 2 - 7, fD / 2);
    const personGeo = makePersonGeometry();
    reg.push(personGeo);
    personGeo.computeBoundingSphere();
    const personMat = new Sd({ vertexColors: true });
    reg.push(personMat);
    const COUNT = ctx3d.lowPower ? 70 : 150;
    const crowd = new Qc(personGeo, personMat, COUNT);
    crowd.instanceColor = new Xc(new Float32Array(COUNT * 3), 3);
    crowd.name = "crowd";
    const dummy = new Dr();
    const col = new ts();
    const SHIRT = [15854557, 14998734, 5466486, 4150628, 3157288, 9413549, 12755556, 12077626, 14209734, 7240803];
    const crowdData = [];
    let placed = 0, guard = 0;
    while (placed < COUNT && guard < COUNT * 14) {
      guard++;
      const x = -W / 2 + 3 + rng() * (W - 6);
      const z = -D / 2 + 2 + rng() * (D - 4);
      let bad = false;
      for (const cxv of colXs) for (const czv of colZs) {
        if (Math.abs(x - cxv) < 0.85 && Math.abs(z - czv) < 0.85) bad = true;
      }
      if (bad) continue;
      const s = 0.92 + rng() * 0.22;
      const ph2 = rng() * Math.PI * 2;
      dummy.position.set(x, 0, z);
      dummy.rotation.set(0, ph2, 0);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      crowd.setMatrixAt(placed, dummy.matrix);
      col.setHex(SHIRT[Math.floor(rng() * SHIRT.length)]);
      crowd.setColorAt(placed, col);
      crowdData.push({ x, z, ph: ph2, s });
      placed++;
    }
    crowd.count = placed;
    crowd.instanceMatrix.needsUpdate = true;
    if (crowd.instanceColor) crowd.instanceColor.needsUpdate = true;
    crowd.castShadow = false;
    g.add(crowd);
    const signMat = simple.byColor(12077626);
    const signGeo = new Gs(1.5, 2.1, 0.1);
    reg.push(signGeo);
    for (let i = 0; i < 5; i++) {
      const s = new Vs(signGeo, signMat);
      s.position.set(-W / 2 + 6 + i * 7.5, 1.1, D / 2 - 1.5);
      s.rotation.y = 0.1 * (i % 2 ? 1 : -1);
      g.add(s);
    }
    g.userData.focus = { dist: 62, fitH: 34, height: 2 };
    g.userData.crowd = { mesh: crowd, data: crowdData, dummy: new Dr() };
    g.userData.emissiveMats = [ledScreenMat];
    return g;
  }
  function animateCrowd(plaza, t2) {
    const cd2 = plaza.userData.crowd;
    if (!cd2) return;
    const { mesh, data, dummy } = cd2;
    for (let i = 0; i < data.length; i++) {
      const d2 = data[i];
      const bob = Math.sin(t2 * 1.6 + d2.ph) * 0.045;
      const sway = Math.sin(t2 * 0.9 + d2.ph * 1.7) * 0.05;
      dummy.position.set(d2.x + sway * 0.5, bob, d2.z + sway);
      dummy.rotation.set(0, d2.ph + sway * 0.4, 0);
      dummy.scale.setScalar(d2.s * (1 + bob * 0.12));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }
  function buildClinic(simple, ctx3d, reg) {
    const g = new Zl();
    const bodyGeo = new Gs(14, 9.5, 11);
    const baseGeo = new Gs(14.6, 1.1, 11.6);
    const signGeo = new Gs(7.2, 1.15, 0.2);
    const crossGeo = new pa(0.9, 0.9);
    reg.push(bodyGeo, baseGeo, signGeo, crossGeo);
    const body = new Vs(bodyGeo, simple.byColor(15591386));
    body.position.y = 4.75;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);
    const base = new Vs(baseGeo, simple.byColor(5466486));
    base.position.y = 0.55;
    g.add(base);
    const sign = new Vs(signGeo, simple.byColor(12077626));
    sign.position.set(0, 2.6, 5.6);
    g.add(sign);
    const cross = new Vs(crossGeo, simple.white);
    cross.position.set(0, 2.6, 5.72);
    g.add(cross);
    g.userData.focus = { dist: 40, height: 3 };
    return g;
  }
  function makeHouseBatch(mats, reg, facadeIdx) {
    const bodies = [];
    const roofs = [];
    const m4 = new lr();
    const q = new Ii();
    const one = new Li(1, 1, 1);
    const p2 = new Li();
    function add(cx, cz, w, d2, h2, rotY, wallColor, roofColor, vOffset, baseY) {
      const y0 = baseY || 0;
      q.setFromEuler(new _r(0, rotY || 0, 0));
      p2.set(cx, y0, cz);
      const body = new Gs(w, h2, d2);
      body.translate(0, h2 / 2, 0);
      remapBoxUV(body, w, h2, d2, vOffset || 0);
      tintGeometry(body, wallColor, 1.06, 0.9);
      m4.compose(p2, q, one);
      body.applyMatrix4(m4);
      bodies.push(body);
      const roof = new Gs(w - 0.05, 0.34, d2 - 0.05);
      roof.translate(0, h2 + 0.17, 0);
      remapBoxUV(roof, w - 0.05, 0.34, d2 - 0.05, 0);
      tintGeometry(roof, roofColor, 1.12, 0.88);
      roof.applyMatrix4(m4);
      roofs.push(roof);
    }
    function flush(group) {
      if (bodies.length) {
        const geo = mergeGeometries(bodies);
        bodies.forEach((g) => g.dispose());
        const mat = new Sd({
          map: mats.facadeTextures[(facadeIdx || 0) % mats.facadeTextures.length],
          vertexColors: true
        });
        reg.push(geo, mat);
        const m = new Vs(geo, mat);
        m.name = "sub-houses";
        m.castShadow = true;
        m.receiveShadow = true;
        group.add(m);
      }
      if (roofs.length) {
        const geo = mergeGeometries(roofs);
        roofs.forEach((g) => g.dispose());
        const mat = new Sd({ map: mats.roofTex, vertexColors: true });
        reg.push(geo, mat);
        const m = new Vs(geo, mat);
        m.name = "sub-roofs";
        m.castShadow = true;
        m.receiveShadow = true;
        group.add(m);
      }
    }
    return { add, flush };
  }
  function mergeToMesh(geos, mat, reg, group, name) {
    if (!geos.length) return null;
    const geo = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    reg.push(geo, mat);
    const m = new Vs(geo, mat);
    m.name = name || "merged";
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  }
  function poseGeo(geo, x, y2, z, rotY) {
    if (rotY) geo.rotateY(rotY);
    geo.translate(x, y2, z);
    return geo;
  }
  function flatMat(color, reg) {
    const m = new Sd({ color, vertexColors: true });
    reg.push(m);
    return m;
  }
  function makeSignBoard(text, w, h2, x, y2, z, rotY, reg, opt) {
    opt = opt || {};
    const boardGeo = new Gs(w, h2, 0.18);
    const faceGeo = new pa(w - 0.12, h2 - 0.12);
    const boardMat = new Sd({ color: opt.boardColor === void 0 ? 15130576 : opt.boardColor });
    const mat = new Sd({
      map: makeSignTexture(text, opt.tex || {
        w: 1024,
        h: Math.round(1024 * h2 / w),
        bg: opt.bg || "#f3ece0",
        fg: opt.fg || "#2b2621",
        border: true,
        borderColor: "#8d7a52",
        sizeRatio: 0.62
      }),
      side: p
    });
    reg.push(boardGeo, faceGeo, boardMat, mat);
    const g = new Zl();
    const board = new Vs(boardGeo, boardMat);
    board.castShadow = true;
    g.add(board);
    const f1 = new Vs(faceGeo, mat);
    f1.position.z = 0.1;
    g.add(f1);
    const f2 = new Vs(faceGeo, mat);
    f2.position.z = -0.1;
    f2.rotation.y = Math.PI;
    g.add(f2);
    g.position.set(x, y2, z);
    if (rotY) g.rotation.y = rotY;
    return { group: g, mat, boardMat };
  }
  function shutterRow(geos, x0, z, y2, w, d2, n, gap, color) {
    const total = n * w + (n - 1) * gap;
    for (let i = 0; i < n; i++) {
      const g = new Gs(w, d2, 0.16);
      g.translate(x0 - total / 2 + w / 2 + i * (w + gap), y2, z);
      tintGeometry(g, color, 1, 0.86);
      geos.push(g);
    }
  }
  function buildKangleVillage(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "kangle-village-group";
    const rng = makeRng(510701);
    const batch = makeHouseBatch(mats, reg, 0);
    const LANE_HALF = 0.7;
    const DEPTH = 6.6;
    const ROW_END = 8;
    for (const side of [-1, 1]) {
      const cx = side * (LANE_HALF + DEPTH / 2);
      let zz = -11.5;
      let guard = 0;
      while (zz < 7 && guard++ < 40) {
        let span = rng.range(4.6, 7.2);
        if (zz + span > ROW_END) span = ROW_END - zz;
        if (span < 2.6) break;
        const floors = rng.int(4, 7);
        batch.add(
          cx,
          zz + span / 2,
          DEPTH,
          span,
          floors * rng.pick(FLOOR_H),
          rng.range(-0.05, 0.05),
          pickBuildingColor(rng),
          pickRoofColor(rng),
          rng.range(0, ATLAS_ROWS)
        );
        zz += span + rng.range(0.06, 0.5);
      }
    }
    batch.flush(g);
    const gateZ = 9.2;
    const pierGeo = new Gs(0.95, 7, 0.95);
    pierGeo.translate(0, 3.5, 0);
    const lintelGeo = new Gs(4, 0.85, 1.15);
    lintelGeo.translate(0, 7.42, 0);
    const plaqueGeo = new Gs(2.9, 1.05, 0.24);
    plaqueGeo.translate(0, 8.37, 0);
    reg.push(pierGeo, lintelGeo, plaqueGeo);
    const pierMat = simple.byColor(15130576);
    for (const side of [-1, 1]) {
      const pier = new Vs(pierGeo, pierMat);
      pier.position.set(side * 1.45, 0, gateZ);
      pier.castShadow = true;
      g.add(pier);
    }
    const lintelMat = new Sd({ color: C2.brick });
    reg.push(lintelMat);
    const lintel = new Vs(lintelGeo, lintelMat);
    lintel.position.z = gateZ;
    lintel.castShadow = true;
    g.add(lintel);
    const plaqueMat = simple.byColor(16117988);
    const plaque = new Vs(plaqueGeo, plaqueMat);
    plaque.position.z = gateZ;
    g.add(plaque);
    const sign = makeSignBoard(
      "康樂村",
      2.5,
      0.8,
      0,
      8.37,
      gateZ + 0.16,
      0,
      reg,
      { tex: { w: 640, h: 210, bg: "#f3ece0", fg: "#2b2621", border: true, borderColor: "#8d7a52", sizeRatio: 0.62 } }
    );
    g.add(sign.group);
    const laneGeo = new Gs(2.4, 0.16, 22.4);
    laneGeo.translate(0, 0.08, -0.4);
    reg.push(laneGeo);
    const lane = new Vs(laneGeo, simple.stone);
    lane.receiveShadow = true;
    g.add(lane);
    g.userData.emissiveMats = [sign.mat, lintelMat];
    g.userData.focus = { dist: 44, fitH: 20, height: 6, pitch: 26 };
    return g;
  }
  function buildLujiangVillage(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "lujiang-village-group";
    const rng = makeRng(620311);
    const batch = makeHouseBatch(mats, reg, 1);
    const rows = [
      { z: -10.5, hFloors: [5, 8] },
      { z: -2.6, hFloors: [4, 6] }
    ];
    for (const row of rows) {
      let xx = -12.5;
      let guard = 0;
      while (xx < 11 && guard++ < 40) {
        let span = rng.range(4.8, 7);
        if (xx + span > 12.8) span = 12.8 - xx;
        if (span < 2.6) break;
        const floors = rng.int(row.hFloors[0], row.hFloors[1]);
        batch.add(
          xx + span / 2,
          row.z,
          span,
          6.6,
          floors * rng.pick(FLOOR_H),
          rng.range(-0.05, 0.05),
          pickBuildingColor(rng),
          pickRoofColor(rng),
          rng.range(0, ATLAS_ROWS)
        );
        xx += span + rng.range(0.06, 0.5);
      }
    }
    const FRONT_Z = 3.4;
    const FRONT_D = 6.6;
    batch.add(0, FRONT_Z, 25.6, FRONT_D, 5.4, 0, 14208699, 10393739, 0.4);
    batch.flush(g);
    const shGeo = [];
    shutterRow(shGeo, 0, FRONT_Z + FRONT_D / 2 + 0.09, 1.75, 3.2, 3.5, 4, 1.35, 9211782);
    const shMat = flatMat(16777215, reg);
    mergeToMesh(shGeo, shMat, reg, g, "lujiang-shutters");
    const awGeo = [];
    for (let i = 0; i < 4; i++) {
      const a = new Gs(6, 0.14, 2.3);
      tintGeometry(a, i % 2 ? 5466486 : 12755556, 1, 0.84);
      a.rotateX(-0.13);
      a.translate(-9.2 + i * 6.1, 3.75, FRONT_Z + FRONT_D / 2 + 1.05);
      awGeo.push(a);
    }
    mergeToMesh(awGeo, flatMat(16777215, reg), reg, g, "lujiang-awnings");
    const sign = makeSignBoard(
      "鷺江製衣作坊",
      7.6,
      1.2,
      0,
      4.9,
      FRONT_Z + FRONT_D / 2 + 0.2,
      0,
      reg,
      { tex: { w: 1200, h: 190, bg: "#e9e2d3", fg: "#8a3a2c", sizeRatio: 0.6 }, boardColor: C2.brick }
    );
    g.add(sign.group);
    const lampGeo = new od(0.26, 8, 6);
    reg.push(lampGeo);
    const lampMat = new Sd({ color: 15854557, emissive: 7033648 });
    reg.push(lampMat);
    for (const s of [-1, 1]) {
      const l2 = new Vs(lampGeo, lampMat);
      l2.position.set(s * 4.2, 3.9, FRONT_Z + FRONT_D / 2 + 0.5);
      g.add(l2);
    }
    g.userData.emissiveMats = [sign.mat, lampMat];
    g.userData.focus = { dist: 48, fitH: 24, height: 5, pitch: 30 };
    return g;
  }
  function buildFabricMarket(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "fabric-market-group";
    const rng = makeRng(730917);
    const OX = -4;
    const LZ = 46;
    const WX = 14;
    const H = 5.4;
    const floorGeo = new Gs(WX + 4, 0.2, LZ + 4);
    floorGeo.translate(OX, 0.1, 0);
    tintGeometry(floorGeo, 12959666, 1.05, 0.95);
    mergeToMesh([floorGeo], flatMat(16777215, reg), reg, g, "market-floor").castShadow = false;
    const posts = [];
    for (let i = 0; i < 7; i++) {
      const z = -LZ / 2 + 3 + i * (LZ - 6) / 6;
      for (const s of [-1, 1]) {
        const cg = new vu(0.2, 0.24, H, 8);
        cg.translate(0, H / 2, 0);
        tintGeometry(cg, 14209991, 1.05, 0.9);
        poseGeo(cg, OX + s * (WX / 2 - 0.8), 0, z, 0);
        posts.push(cg);
      }
    }
    mergeToMesh(posts, flatMat(16777215, reg), reg, g, "market-posts");
    const roofGeos = [];
    for (const s of [-1, 1]) {
      const slab = new Gs(WX / 2 + 0.9, 0.3, LZ + 1.6);
      slab.rotateZ(s * 0.145);
      tintGeometry(slab, 11117206, 1.14, 0.86);
      slab.translate(OX + s * (WX / 4), H + 0.85, 0);
      roofGeos.push(slab);
    }
    const ridge = new Gs(0.5, 0.34, LZ + 1.8);
    ridge.translate(OX, H + 1.6, 0);
    tintGeometry(ridge, 9209465, 1.1, 0.9);
    roofGeos.push(ridge);
    for (const s of [-1, 1]) {
      const cap = new Gs(WX + 1.9, 0.34, 0.5);
      cap.translate(OX, H + 1.35, s * (LZ / 2 + 0.8));
      tintGeometry(cap, 10393739, 1.1, 0.9);
      roofGeos.push(cap);
    }
    mergeToMesh(roofGeos, flatMat(16777215, reg), reg, g, "market-roof");
    const shelfGeos = [];
    const baleGeos = [];
    const baleColors = [C2.brick, C2.yellow, C2.blue, C2.green, C2.paper];
    for (let i = 0; i < 4; i++) {
      const x = OX - 4.5 + i * 3;
      const sg = new Gs(2, 1, LZ - 8);
      tintGeometry(sg, 8024938, 1, 0.86);
      sg.translate(x, 0.6, 0);
      shelfGeos.push(sg);
      const bg = new Gs(2.1, 0.95, LZ - 8.4);
      tintGeometry(bg, baleColors[i % baleColors.length], 1.12, 0.9);
      bg.translate(x, 1.6, 0);
      baleGeos.push(bg);
      for (let k = 0; k < 6; k++) {
        const dg = new Gs(2.2, 1.5, 0.16);
        tintGeometry(dg, 7235422, 1, 0.9);
        dg.translate(x, 0.75, -LZ / 2 + 4.5 + k * 6.4);
        shelfGeos.push(dg);
      }
    }
    mergeToMesh(shelfGeos, flatMat(16777215, reg), reg, g, "market-shelves").castShadow = false;
    mergeToMesh(baleGeos, flatMat(16777215, reg), reg, g, "market-bales").castShadow = false;
    const signMat = new Sd({
      map: makeSignTexture("中大布匹市場", { w: 1400, h: 260, bg: "#f0eade", fg: "#8a3a2c", border: true, borderColor: "#8d7a52", sizeRatio: 0.66 }),
      side: p
    });
    const signGeo = new pa(15, 2.8);
    reg.push(signGeo, signMat);
    const sg2 = new Vs(signGeo, signMat);
    sg2.position.set(OX + WX / 2 + 0.4, H + 3.1, 0);
    sg2.rotation.y = Math.PI / 2;
    g.add(sg2);
    const backGeo = new Gs(0.36, 3.1, 15.4);
    backGeo.translate(OX + WX / 2 + 0.18, H + 3.1, 0);
    tintGeometry(backGeo, 15130576, 1.05, 0.9);
    mergeToMesh([backGeo], flatMat(16777215, reg), reg, g, "market-sign-frame").castShadow = false;
    g.userData.emissiveMats = [signMat];
    g.userData.focus = { dist: 58, fitH: 30, height: 6, pitch: 26 };
    return g;
  }
  function buildHiringStreet(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "hiring-street-group";
    const rng = makeRng(840523);
    const batch = makeHouseBatch(mats, reg, 0);
    const L = 30;
    const UPPER_Z = -1.6;
    const UPPER_D = 6.4;
    batch.add(0, UPPER_Z, L, UPPER_D, 5.4, 0, 14471870, 10393739, 0.2, 3.9);
    batch.add(0, -3.4, L - 3, 3.6, 3.9, 0, 13814202, 9209465, 1.6);
    batch.flush(g);
    const colGeos = [];
    for (let i = 0; i < 6; i++) {
      const cg = new Gs(0.6, 3.9, 0.6);
      cg.translate(-L / 2 + 2.5 + i * (L - 5) / 5, 1.95, 1.2);
      tintGeometry(cg, 15130576, 1.05, 0.9);
      colGeos.push(cg);
    }
    mergeToMesh(colGeos, flatMat(16777215, reg), reg, g, "street-arcade");
    const shGeo = [];
    shutterRow(shGeo, 0, -1.6 + 3.6 / 2 + 0.09, 1.7, 3.4, 3.3, 5, 1, 9211782);
    mergeToMesh(shGeo, flatMat(16777215, reg), reg, g, "street-shutters").castShadow = false;
    const awGeo = [];
    for (let i = 0; i < 5; i++) {
      const a = new Gs(5, 0.12, 1.9);
      tintGeometry(a, i % 2 ? 12077626 : 5466486, 1, 0.84);
      a.rotateX(-0.12);
      a.translate(-L / 2 + 3 + i * (L - 6) / 4, 3.62, 2.6);
      awGeo.push(a);
    }
    mergeToMesh(awGeo, flatMat(16777215, reg), reg, g, "street-awnings").castShadow = false;
    const sign = makeSignBoard(
      "鷺江南約大街",
      8.6,
      1.2,
      -6.5,
      4.55,
      1.5,
      0,
      reg,
      { tex: { w: 1400, h: 200, bg: "#e9e2d3", fg: "#2b2621", sizeRatio: 0.62 }, boardColor: C2.brick }
    );
    g.add(sign.group);
    const jobs = [
      { t: "招平車", x: -10.5, ry: 0.08 },
      { t: "招四線", x: -3.2, ry: -0.05 },
      { t: "招及骨", x: 4, ry: 0.06 },
      { t: "招雜工", x: 11, ry: -0.09 }
    ];
    const stickMat = simple.byColor(9209465);
    const boardMats = [];
    jobs.forEach((j) => {
      const b = makeSignBoard(
        j.t,
        1.35,
        2.9,
        j.x,
        2.85,
        3.05,
        j.ry,
        reg,
        {
          tex: { w: 256, h: 560, vertical: true, bg: "#efe7d6", fg: "#8a3a2c", sizeRatio: 0.56, border: true, borderColor: "#8d7a52" },
          boardColor: 15130576
        }
      );
      g.add(b.group);
      boardMats.push(b.mat);
      const leg = new Gs(0.16, 1.4, 0.16);
      leg.translate(j.x, 0.7, 3.05);
      const m = new Vs(leg, stickMat);
      g.add(m);
    });
    g.userData.emissiveMats = [sign.mat].concat(boardMats);
    g.userData.focus = { dist: 50, fitH: 24, height: 5, pitch: 28 };
    return g;
  }
  function buildKangleSouthStreet(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "kangle-south-st-group";
    const rng = makeRng(950214);
    const batch = makeHouseBatch(mats, reg, 2);
    const HALF_W = 2.6;
    const DEPTH = 6.8;
    for (const side of [-1, 1]) {
      const cx = side * (HALF_W + DEPTH / 2);
      let zz = -17;
      let guard = 0;
      while (zz < 16 && guard++ < 40) {
        let span = rng.range(5, 7.4);
        if (zz + span > 18) span = 18 - zz;
        if (span < 2.6) break;
        const floors = rng.int(3, 6);
        batch.add(
          cx,
          zz + span / 2,
          DEPTH,
          span,
          floors * rng.pick(FLOOR_H),
          rng.range(-0.05, 0.05),
          pickBuildingColor(rng),
          pickRoofColor(rng),
          rng.range(0, ATLAS_ROWS)
        );
        zz += span + rng.range(0.1, 0.7);
      }
    }
    batch.flush(g);
    const roadGeo = new Gs(HALF_W * 2, 0.16, 37);
    roadGeo.translate(0, 0.08, 0);
    tintGeometry(roadGeo, C2.asphalt, 1.05, 0.95);
    mergeToMesh([roadGeo], flatMat(16777215, reg), reg, g, "south-st-road").castShadow = false;
    const shopGeos = [];
    const shutGeos = [];
    for (const side of [-1, 1]) {
      const z0 = -15.5;
      for (let i = 0; i < 5; i++) {
        const len = 6;
        const cz = z0 + i * 6.9;
        const sg = new Gs(1.2, 3.2, len - 0.3);
        tintGeometry(sg, [14471870, 13023644, 13814202][i % 3], 1.06, 0.9);
        sg.translate(side * (HALF_W - 0.6), 1.6, cz);
        shopGeos.push(sg);
        const dg = new Gs(0.14, 2.4, len - 0.9);
        tintGeometry(dg, 9211782, 1, 0.86);
        dg.translate(side * (HALF_W - 1.24), 1.2, cz);
        shutGeos.push(dg);
      }
    }
    mergeToMesh(shopGeos, flatMat(16777215, reg), reg, g, "south-st-shops");
    mergeToMesh(shutGeos, flatMat(16777215, reg), reg, g, "south-st-shutters").castShadow = false;
    const boards = [];
    const shopSigns = [
      { t: "製衣", x: -1.3, y: 3.85, z: -9, ry: Math.PI / 2 },
      { t: "招租", x: 1.3, y: 3.85, z: 2, ry: -Math.PI / 2 },
      { t: "布料", x: 1.3, y: 3.85, z: 12, ry: -Math.PI / 2 }
    ];
    shopSigns.forEach((s) => {
      const b = makeSignBoard(
        s.t,
        3.4,
        0.95,
        s.x,
        s.y,
        s.z,
        s.ry,
        reg,
        { tex: { w: 640, h: 180, bg: "#efe7d6", fg: "#2b2621", sizeRatio: 0.6 }, boardColor: C2.blue }
      );
      g.add(b.group);
      boards.push(b.mat);
    });
    g.userData.emissiveMats = boards;
    g.userData.focus = { dist: 50, fitH: 26, height: 6, pitch: 30 };
    return g;
  }
  function buildKangleCanal(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "kangle-canal-group";
    const rng = makeRng(160827);
    const batch = makeHouseBatch(mats, reg, 1);
    const OX = -3.4;
    const LANE_HALF = 0.6;
    const DEPTH = 6;
    for (const side of [-1, 1]) {
      const cx = OX + side * (LANE_HALF + DEPTH / 2);
      let zz = -13.5;
      let guard = 0;
      while (zz < 12.5 && guard++ < 40) {
        let span = rng.range(4.4, 6.2);
        if (zz + span > 14.5) span = 14.5 - zz;
        if (span < 2.4) break;
        const floors = rng.int(6, 8);
        batch.add(
          cx,
          zz + span / 2,
          DEPTH,
          span,
          floors * rng.pick(FLOOR_H),
          rng.range(-0.03, 0.03),
          pickBuildingColor(rng),
          pickRoofColor(rng),
          rng.range(0, ATLAS_ROWS)
        );
        zz += span + rng.range(0.04, 0.3);
      }
    }
    batch.flush(g);
    const waterGeo = new Gs(1.7, 0.3, 29);
    waterGeo.translate(OX, 0.05, 0);
    tintGeometry(waterGeo, C2.asphalt, 0.95, 0.9);
    mergeToMesh([waterGeo], flatMat(16777215, reg), reg, g, "canal-water").castShadow = false;
    const kerbGeos = [];
    for (const s of [-1, 1]) {
      const kg = new Gs(0.22, 0.55, 29);
      kg.translate(OX + s * 0.49, 0.27, 0);
      tintGeometry(kg, 11906204, 1.05, 0.9);
      kerbGeos.push(kg);
    }
    mergeToMesh(kerbGeos, flatMat(16777215, reg), reg, g, "canal-kerbs");
    const crossGeos = [];
    const boardMats = [];
    [{ t: "製衣", z: -6.5 }, { t: "招車位", z: 5.5 }].forEach((c2) => {
      const bg = new Gs(3.6, 0.9, 0.2);
      bg.translate(OX, 4.6, c2.z);
      tintGeometry(bg, 15130576, 1.05, 0.9);
      crossGeos.push(bg);
      const b = makeSignBoard(
        c2.t,
        3.2,
        0.72,
        OX,
        4.6,
        c2.z + 0.14,
        0,
        reg,
        { tex: { w: 640, h: 150, bg: "#efe7d6", fg: "#8a3a2c", sizeRatio: 0.62 }, boardColor: 15130576 }
      );
      g.add(b.group);
      boardMats.push(b.mat);
    });
    mergeToMesh(crossGeos, flatMat(16777215, reg), reg, g, "canal-cross-signs").castShadow = false;
    const poleMat = simple.byColor(9209465);
    const clothGeos = [];
    const clothColors = [15591904, 8427686, 12077626];
    for (let i = 0; i < 3; i++) {
      const pg = new vu(0.06, 0.06, 1.9, 6);
      pg.rotateZ(Math.PI / 2);
      pg.translate(OX, 6.4 + i * 0.1, -9 + i * 7.5);
      const p2 = new Vs(pg, poleMat);
      g.add(p2);
      const cg = new Gs(0.1, 1.5, 0.9);
      tintGeometry(cg, clothColors[i], 1.06, 0.94);
      cg.translate(OX, 5.6, -9 + i * 7.5);
      clothGeos.push(cg);
    }
    mergeToMesh(clothGeos, flatMat(16777215, reg), reg, g, "canal-cloths").castShadow = false;
    g.userData.emissiveMats = boardMats;
    g.userData.focus = { dist: 42, fitH: 20, height: 5, pitch: 52 };
    return g;
  }
  function buildLujiangYard(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "lujiang-yard-group";
    const rng = makeRng(271188);
    const batch = makeHouseBatch(mats, reg, 2);
    batch.add(-8, -2, 6.4, 22, 4 * 3.1, 0, 14471870, 10393739, 0.5);
    batch.add(8, -2, 6.4, 22, 5 * 3, 0, 13814202, 9209465, 1.2);
    batch.add(0, -9.4, 21, 7, 4 * 3.1, 0, 14208699, 11051669, 2);
    batch.add(0, -1, 8.4, 8.4, 3 * 3.2, 0, 14801094, 10393739, 0.9);
    batch.flush(g);
    const yardGeo = new Gs(20, 0.16, 20);
    yardGeo.translate(0, 0.08, 0);
    tintGeometry(yardGeo, 12959666, 1.05, 0.95);
    mergeToMesh([yardGeo], flatMat(16777215, reg), reg, g, "yard-floor").castShadow = false;
    const wallGeos = [];
    for (const s of [-1, 1]) {
      const wg = new Gs(6.6, 2.6, 0.5);
      tintGeometry(wg, 14011838, 1.06, 0.9);
      wg.translate(s * 6.9, 1.3, 8.6);
      wallGeos.push(wg);
    }
    for (const s of [-1, 1]) {
      const pg = new Gs(1, 3.6, 1);
      tintGeometry(pg, 15130576, 1.05, 0.9);
      pg.translate(s * 3, 1.8, 8.6);
      wallGeos.push(pg);
    }
    const lint = new Gs(7.6, 0.7, 1.1);
    tintGeometry(lint, 12077626, 1.06, 0.9);
    lint.translate(0, 3.95, 8.6);
    wallGeos.push(lint);
    mergeToMesh(wallGeos, flatMat(16777215, reg), reg, g, "yard-walls");
    const sign = makeSignBoard(
      "88",
      2,
      0.9,
      0,
      3.95,
      8.6 + 0.62,
      0,
      reg,
      { tex: { w: 512, h: 230, bg: "#e9e2d3", fg: "#8a3a2c", border: true, borderColor: "#8d7a52", sizeRatio: 0.66 }, boardColor: C2.brick }
    );
    g.add(sign.group);
    const boxGeos = [];
    const rngC = [C2.blue, C2.yellow, C2.green];
    for (let i = 0; i < 3; i++) {
      const bg = new Gs(2.4, 1.6, 2);
      tintGeometry(bg, rngC[i], 1.08, 0.9);
      bg.translate(-4.5 + i * 2.7, 0.8, 6.2);
      boxGeos.push(bg);
    }
    mergeToMesh(boxGeos, flatMat(16777215, reg), reg, g, "yard-cargo");
    const tankGeo = new vu(1.1, 1.1, 1.8, 10);
    tankGeo.translate(8, 15 * 1 + 0.9, -8);
    tintGeometry(tankGeo, 12172470, 1.08, 0.9);
    mergeToMesh([tankGeo], flatMat(16777215, reg), reg, g, "yard-tank");
    g.userData.emissiveMats = [sign.mat];
    g.userData.focus = { dist: 50, fitH: 26, height: 6, pitch: 32 };
    return g;
  }
  function buildFengyangOffice(mats, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "fengyang-office-group";
    const CX = 5, CZ = -5;
    const W = 12, D = 9, H = 16.5;
    const bodyGeo = new Gs(W, H, D);
    bodyGeo.translate(0, H / 2, 0);
    remapBoxUV(bodyGeo, W, H, D, 0.25);
    tintGeometry(bodyGeo, 14998472, 1.06, 0.92);
    const bodyMat = new Sd({ map: mats.facadeTextures[0], vertexColors: true });
    const body = new Vs(bodyGeo, bodyMat);
    body.position.set(CX, 0, CZ);
    body.castShadow = true;
    body.receiveShadow = true;
    reg.push(bodyGeo, bodyMat);
    g.add(body);
    const capGeos = [];
    const pH = 0.9, pW = 0.34;
    const segs = [
      [W, pW, 0, (D - pW) / 2],
      [W, pW, 0, -(D - pW) / 2],
      [pW, D, (W - pW) / 2, 0],
      [pW, D, -(W - pW) / 2, 0]
    ];
    for (const [sw, sd2, ox, oz] of segs) {
      const cg = new Gs(sw, pH, sd2);
      cg.translate(CX + ox, H + pH / 2, CZ + oz);
      tintGeometry(cg, 13617338, 1.1, 0.9);
      capGeos.push(cg);
    }
    const faceX = CX + W / 2;
    for (const by of [5.2, 12.2]) {
      const bandGeo = new Gs(0.24, 1.4, D - 1.2);
      bandGeo.translate(faceX + 0.04, by, CZ);
      tintGeometry(bandGeo, 3816248, 1, 0.95);
      capGeos.push(bandGeo);
    }
    const plinth = new Gs(W + 0.7, 1.1, D + 0.7);
    plinth.translate(CX, 0.55, CZ);
    tintGeometry(plinth, 10129542, 1.05, 0.92);
    capGeos.push(plinth);
    mergeToMesh(capGeos, flatMat(16777215, reg), reg, g, "office-details");
    const colGeos = [];
    for (let i = 0; i < 4; i++) {
      const cg = new vu(0.32, 0.34, 4.6, 10);
      cg.translate(0, 2.3, 0);
      tintGeometry(cg, 15591386, 1.06, 0.92);
      poseGeo(cg, faceX + 2, 1.1, CZ - 2.4 + i * 1.6, 0);
      colGeos.push(cg);
    }
    const canopy = new Gs(3.2, 0.5, 7.6);
    canopy.translate(faceX + 1.5, 5.9, CZ);
    tintGeometry(canopy, 14471870, 1.1, 0.9);
    colGeos.push(canopy);
    for (let i = 0; i < 3; i++) {
      const st = new Gs(1, 0.34, 8.6 - i * 0.5);
      st.translate(faceX + 1.6 + i * 0.5, 0.17 + i * 0.34, CZ);
      tintGeometry(st, 14078406, 1.06, 0.94);
      colGeos.push(st);
    }
    mergeToMesh(colGeos, flatMat(16777215, reg), reg, g, "office-porch");
    const signMat = new Sd({
      map: makeSignTexture("鳳陽街道辦事處", { w: 1500, h: 220, bg: "#f1ebdd", fg: "#2b2621", border: true, borderColor: "#8d7a52", sizeRatio: 0.6 }),
      side: p
    });
    const signGeo = new pa(7.2, 1.06);
    const backGeo = new Gs(0.22, 1.4, 7.6);
    backGeo.translate(faceX + 0.36, 7.1, CZ);
    tintGeometry(backGeo, 5466486, 1.06, 0.9);
    reg.push(signGeo, signMat);
    mergeToMesh([backGeo], flatMat(16777215, reg), reg, g, "office-sign-frame");
    const signMesh = new Vs(signGeo, signMat);
    signMesh.position.set(faceX + 0.5, 7.1, CZ);
    signMesh.rotation.y = Math.PI / 2;
    g.add(signMesh);
    const poleGeo = new vu(0.12, 0.14, 11, 8);
    poleGeo.translate(faceX + 4.5, 5.5, CZ - 4.5);
    tintGeometry(poleGeo, 14209991, 1.1, 0.9);
    const flagGeo = new pa(2.4, 1.5);
    flagGeo.rotateY(Math.PI / 2);
    flagGeo.translate(faceX + 5.7, 9.6, CZ - 4.5);
    tintGeometry(flagGeo, C2.brick, 1.08, 0.95);
    mergeToMesh([poleGeo, flagGeo], flatMat(16777215, reg), reg, g, "office-flag");
    const plazaGeo = new Gs(11, 0.18, 9);
    plazaGeo.translate(faceX + 4.5, 0.09, CZ - 1);
    tintGeometry(plazaGeo, 12959666, 1.05, 0.95);
    mergeToMesh([plazaGeo], flatMat(16777215, reg), reg, g, "office-plaza").castShadow = false;
    g.userData.emissiveMats = [signMat];
    g.userData.focus = { dist: 54, fitH: 30, height: 8, pitch: 26 };
    return g;
  }
  function buildStreetProps(root, simple, ctx3d, reg) {
    const rng = makeRng(968211);
    function box(list, w, h2, d2, color, x, y2, z, rotY, rotX) {
      const g = new Gs(w, h2, d2);
      if (rotX) g.rotateX(rotX);
      tintGeometry(g, color, 1.05, 0.9);
      list.push(poseGeo(g, x, y2, z, rotY || 0));
    }
    function cyl(list, r, h2, color, x, y2, z, axis) {
      const g = new vu(r, r, h2, 8);
      if (axis === "x") g.rotateZ(Math.PI / 2);
      if (axis === "z") g.rotateX(Math.PI / 2);
      tintGeometry(g, color, 1.05, 0.9);
      list.push(poseGeo(g, x, y2, z, 0));
    }
    const steel = [];
    const goods = [];
    const greens = [];
    const stones = [];
    const plaza = new Zl();
    plaza.name = "plaza-props";
    plaza.position.set(2, 0, 44);
    plaza.rotation.y = -0.06;
    root.add(plaza);
    [[-30.6, -10], [-30.6, -2], [-30.6, 6], [-16.5, 21], [17.5, 21]].forEach(function(p2) {
      const x = p2[0], z = p2[1];
      box(steel, 0.09, 2.3, 0.09, 12172470, x, 1.15, z - 0.55);
      box(steel, 0.09, 2.3, 0.09, 12172470, x, 1.15, z + 0.55);
      box(steel, 0.07, 0.07, 1.3, 12172470, x, 1.95, z);
      box(steel, 0.08, 2.6, 1.5, 10134933, x - 0.28, 1.35, z, 0, 0.34);
      cyl(goods, 0.3, 1.7, 9211782, x + 0.6, 0.32, z + 0.2, "x");
    });
    [[-24, 21.5], [-21.4, 21.8], [12.5, -21.4]].forEach(function(p2) {
      const x = p2[0], z = p2[1];
      box(goods, 0.95, 0.7, 0.75, C2.yellow, x, 0.35, z, rng.range(-0.3, 0.3));
      box(goods, 0.9, 0.66, 0.7, C2.blue, x + 0.2, 1.03, z + 0.12, rng.range(-0.3, 0.3));
      cyl(goods, 0.34, 1.6, C2.brick, x + 1.35, 0.34, z - 0.1, "x");
    });
    [[-9.5, 22.2, 0.12], [-30, 2, -0.55]].forEach(function(p2) {
      const x = p2[0], z = p2[1], ry = p2[2];
      box(steel, 1.9, 0.12, 0.95, 11117206, x, 0.62, z, ry);
      box(steel, 1.9, 0.06, 0.06, 9209465, x, 0.72, z - 0.45, ry);
      box(steel, 0.06, 0.06, 0.9, 9209465, x, 0.72, z, ry);
      for (const s of [-1, 1]) {
        cyl(steel, 0.16, 0.1, 7235422, x + s * 0.62, 0.16, z - 0.42, "x");
        cyl(steel, 0.16, 0.1, 7235422, x + s * 0.62, 0.16, z + 0.42, "x");
      }
      box(steel, 0.06, 1, 0.06, 12172470, x + 0.85, 1.1, z - 0.45, ry);
      box(steel, 0.06, 1, 0.06, 12172470, x + 0.85, 1.1, z + 0.45, ry);
      box(steel, 0.06, 0.06, 0.95, 12172470, x + 0.85, 1.58, z, ry);
    });
    for (let i = 0; i < 6; i++) {
      const x = 29.6, z = -8.5 + i * 2.6;
      cyl(steel, 0.32, 0.09, 4867647, x - 0.62, 0.32, z, "x");
      cyl(steel, 0.32, 0.09, 4867647, x + 0.62, 0.32, z, "x");
      box(steel, 1.35, 0.24, 0.28, 5466486, x, 0.6, z, 0);
      box(steel, 0.6, 0.1, 0.34, 9209465, x + 0.1, 0.82, z, 0);
      box(steel, 0.06, 0.62, 0.06, 12172470, x + 0.6, 0.95, z, 0);
      box(steel, 0.06, 0.06, 0.56, 12172470, x + 0.6, 1.24, z, 0);
    }
    [[-26.5, 12.4], [-25.9, 13.6], [-27.2, 13.2]].forEach(function(p2) {
      box(steel, 0.42, 0.46, 0.42, C2.brick, p2[0], 0.23, p2[1], rng.range(-0.4, 0.4));
    });
    box(steel, 0.86, 0.06, 1.7, 14208699, -26.4, 0.72, 16.6);
    for (const s of [-1, 1]) {
      box(steel, 0.07, 0.7, 0.07, 9209465, -26.4 + s * 0.36, 0.35, 16.6 - 0.75);
      box(steel, 0.07, 0.7, 0.07, 9209465, -26.4 + s * 0.36, 0.35, 16.6 + 0.75);
    }
    for (let i = 0; i < 6; i++) box(steel, 0.09, 0.03, 3.4, 15591904, 27.4 + i % 2 * 1.4, 0.02, -10.5 + i * 4.2);
    for (let i = 0; i < 5; i++) box(steel, 3.4, 0.03, 0.09, 15591904, -16 + i * 7, 0.02, 21);
    box(steel, 0.09, 0.03, 5, 15591904, -4.5, 0.02, 22.6);
    box(steel, 0.09, 0.03, 5, 15591904, 12.5, 0.02, 22.6);
    const board = makeSignBoard(
      "招工",
      1.9,
      1.35,
      8.6,
      1.55,
      21.6,
      -0.16,
      reg,
      {
        tex: { w: 640, h: 460, bg: "#efe7d6", fg: "#8a3a2c", border: true, borderColor: "#8d7a52", sizeRatio: 0.62 },
        boardColor: 15130576
      }
    );
    plaza.add(board.group);
    box(steel, 0.09, 1, 0.09, 9209465, 8, 0.5, 21.75);
    box(steel, 0.09, 1, 0.09, 9209465, 9.2, 0.5, 21.75);
    const arch = new Zl();
    arch.name = "arch-props";
    arch.position.set(-64, 0, -57);
    arch.rotation.y = -0.28;
    root.add(arch);
    box(stones, 26, 0.1, 13, 14078406, 0, 0.05, 7);
    for (let i = -3; i <= 3; i++) box(stones, 0.07, 0.06, 13, 12433064, i * 3.6, 0.11, 7);
    for (let j = 0; j < 4; j++) box(stones, 26, 0.06, 0.07, 12433064, 0, 0.11, 1.8 + j * 3.4);
    for (const s of [-1, 1]) {
      box(stones, 3, 0.5, 1.3, 13617338, s * 8.6, 0.25, 5.4, 0.06 * s);
      box(greens, 2.8, 0.55, 1.1, 7240803, s * 8.6, 0.75, 5.4, 0.06 * s);
      box(greens, 2.4, 0.2, 0.9, 6191701, s * 8.6, 1.06, 5.4, 0.06 * s);
    }
    cyl(goods, 0.34, 1.7, C2.brick, -9.6, 0.34, 2.6, "x");
    cyl(goods, 0.32, 1.5, C2.blue, -9.4, 0.32, 4.4, "x");
    box(goods, 0.9, 0.7, 0.75, C2.yellow, 9.8, 0.35, 8.6, 0.18);
    box(goods, 0.86, 0.64, 0.7, 13023644, 9.6, 1.02, 8.8, -0.1);
    const signA = makeSignBoard(
      "製衣",
      2,
      1,
      8.9,
      2,
      3,
      -0.22,
      reg,
      { tex: { w: 640, h: 320, bg: "#e9e2d3", fg: "#8a3a2c", border: true, borderColor: "#8d7a52", sizeRatio: 0.6 }, boardColor: C2.brick }
    );
    arch.add(signA.group);
    box(steel, 0.08, 1.5, 0.08, 9209465, 8.4, 0.75, 3);
    box(steel, 0.08, 1.5, 0.08, 9209465, 9.4, 0.75, 3);
    const signB = makeSignBoard(
      "印花",
      1.7,
      0.9,
      -9.4,
      1.85,
      9.4,
      0.24,
      reg,
      { tex: { w: 640, h: 340, bg: "#efe7d6", fg: "#2b2621", border: true, borderColor: "#8d7a52", sizeRatio: 0.6 }, boardColor: C2.blue }
    );
    arch.add(signB.group);
    box(steel, 0.08, 1.4, 0.08, 9209465, -9.4, 0.7, 9.4);
    [[11.6, -1], [-11.8, 6.6]].forEach(function(p2) {
      const x = p2[0], z = p2[1];
      cyl(steel, 0.06, 2.6, 9209465, x, 4.6, z, "x");
      box(goods, 0.12, 1.6, 1.1, 15591904, x - 0.7, 3.7, z);
      box(goods, 0.12, 1.3, 1, 8427686, x + 0.75, 3.85, z);
    });
    mergeToMesh(steel, flatMat(16777215, reg), reg, plaza, "plaza-props-steel");
    mergeToMesh(goods, flatMat(16777215, reg), reg, plaza, "plaza-props-goods");
    mergeToMesh(stones, flatMat(16777215, reg), reg, arch, "arch-props-paving");
    mergeToMesh(greens, flatMat(16777215, reg), reg, arch, "arch-props-greens");
    return { plaza, arch };
  }
  function buildQingyuanMarker(root, simple, ctx3d, reg) {
    const g = new Zl();
    g.name = "qingyuan-external";
    const X = 172, Z2 = -132;
    g.position.set(X, 0, Z2);
    const cardW = 16, cardH = 7;
    const cardMat = new Sd({ color: 5466486, side: p });
    const cardGeo = new Gs(cardW, cardH, 0.6);
    reg.push(cardMat, cardGeo);
    const card = new Vs(cardGeo, cardMat);
    card.position.y = 9.4;
    card.castShadow = true;
    g.add(card);
    const iconMat = new rs({ map: makeIconTexture("factory"), transparent: true });
    const iconGeo = new pa(4.4, 4.4);
    reg.push(iconMat, iconGeo);
    const icon = new Vs(iconGeo, iconMat);
    icon.position.set(-cardW / 2 + 3.4, 9.9, 0.34);
    g.add(icon);
    const arrowMat = new rs({ map: makeIconTexture("arrow"), transparent: true });
    const arrowGeo = new pa(3, 3);
    reg.push(arrowMat, arrowGeo);
    const arrow = new Vs(arrowGeo, arrowMat);
    arrow.position.set(cardW / 2 - 2.6, 9.9, 0.34);
    arrow.rotation.z = Math.PI;
    g.add(arrow);
    const txtGeo = new pa(cardW - 0.6, 2.6);
    const txtMat = new rs({
      map: makeSignTexture("清遠產業園 · 約 80km", { w: 1400, h: 220, bg: "#536976", fg: "#F1EBDD", sizeRatio: 0.6, font: '"Source Han Sans SC","Microsoft YaHei",sans-serif', weight: "500" }),
      transparent: true
    });
    reg.push(txtGeo, txtMat);
    const txt = new Vs(txtGeo, txtMat);
    txt.position.set(0, 6.4, 0.34);
    g.add(txt);
    const poleMat = simple.byColor(12755556);
    const poleGeo = new vu(0.34, 0.4, 6.4, 10);
    const ringGeo = new cd(2.6, 0.22, 8, 32);
    reg.push(poleGeo, ringGeo);
    const pole = new Vs(poleGeo, poleMat);
    pole.position.y = 3.2;
    g.add(pole);
    const ring = new Vs(ringGeo, poleMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.22;
    g.add(ring);
    const dashMat = new wd({ color: 12077626, dashSize: 2.6, gapSize: 2, transparent: true, opacity: 0.85 });
    reg.push(dashMat);
    const start = new Li(DISTRICT.west - 6, 1.4, DISTRICT.north + 6);
    const a = start.clone().sub(g.position);
    const b = new Li(0, 1.4, 0);
    const lg = new Cs().setFromPoints([a, b]);
    reg.push(lg);
    const line = new Ah(lg, dashMat);
    line.computeLineDistances();
    g.add(line);
    root.add(g);
    return { group: g, x: X, z: Z2, cardW, cardH };
  }
  function createLabelLayer(container, places, options) {
    const layer = document.createElement("div");
    layer.className = "k3d-labels";
    const hint = document.createElement("div");
    hint.className = "k3d-hint";
    hint.textContent = "拖动旋转 · 滚轮缩放 · 点击地标查看";
    const external = document.createElement("div");
    external.className = "k3d-external";
    external.innerHTML = '<span class="k3d-external-icon" aria-hidden="true"></span><span class="k3d-external-body"><b>清远产业园</b><i>约 80km · 产业转移承接地</i></span><span class="k3d-external-arrow" aria-hidden="true"></span>';
    external.setAttribute("role", "note");
    external.style.top = "16px";
    external.style.left = "16px";
    layer.appendChild(hint);
    layer.appendChild(external);
    container.appendChild(layer);
    const items = /* @__PURE__ */ new Map();
    const primaryIds = PRIMARY_IDS.slice();
    const allIds = LANDMARK_IDS.concat(["yizhen"]);
    const defs = {};
    LANDMARK_IDS.forEach((id2) => {
      defs[id2] = Object.assign({}, places[id2].label);
    });
    defs["yizhen"] = { name: "凤阳街社区卫生服务站", sub: "生活服务节点" };
    (options.labels || []).forEach((l2) => {
      if (l2 && l2.id && defs[l2.id]) {
        if (l2.name) defs[l2.id].name = l2.name;
        if (l2.sub !== void 0) defs[l2.id].sub = l2.sub;
      }
    });
    allIds.forEach((id2) => {
      const d2 = defs[id2];
      if (!d2) return;
      const el2 = document.createElement("button");
      el2.type = "button";
      el2.className = "k3d-label" + (primaryIds.indexOf(id2) >= 0 ? " is-primary" : "");
      el2.setAttribute("data-id", id2);
      const idx = BADGE_ORDER.indexOf(id2);
      const badge = idx >= 0 ? String(idx + 1).padStart(2, "0") : id2 === "yizhen" ? "医" : "·";
      el2.innerHTML = '<svg class="k3d-pin" viewBox="0 0 22 36" aria-hidden="true" focusable="false"><path class="k3d-pin-body" d="M11 36 C 11 36, 2.4 19.4, 2.4 10.2 A 8.6 8.6 0 1 1 19.6 10.2 C 19.6 19.4, 11 36, 11 36 Z"/><text class="k3d-pin-num" x="11" y="14.2" text-anchor="middle">' + badge + "</text></svg>";
      el2.setAttribute("data-num", badge);
      el2.setAttribute("aria-label", d2.name + "：" + d2.sub);
      layer.appendChild(el2);
      items.set(id2, {
        el: el2,
        id: id2,
        w: 0,
        h: 0,
        visible: false,
        allowed: false,
        okStreak: 0,
        hitStreak: 0,
        everPlaced: false,
        animReady: false
      });
    });
    return {
      layer,
      items,
      external,
      defs,
      setMode(mode) {
        const showAll = mode === "all";
        items.forEach((it2, id2) => {
          it2.allowed = id2 !== "yizhen" || showAll;
          if (!it2.allowed) {
            it2.el.style.display = "none";
            it2.el.style.opacity = "0";
            it2.el.style.pointerEvents = "none";
            it2.el.classList.remove("is-on");
            it2.visible = false;
          } else {
            it2.el.style.display = "";
          }
        });
      },
      dispose() {
        layer.remove();
      }
    };
  }
  var LABEL_MOVE_HOLD_MS = 150;
  var LABEL_HIDE_STREAK = 3;
  var LABEL_SHOW_STREAK = 2;
  function updateLabels(labelApi, ctx3d, selectedId) {
    if (!labelApi || !labelApi.items) return false;
    const cam = ctx3d.camera;
    const v = ctx3d._v3 || (ctx3d._v3 = new Li());
    const w = ctx3d.size.w, h2 = ctx3d.size.h;
    const placed = [];
    const list = [];
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    const cp2 = cam.position, cq = cam.quaternion;
    let sig = ctx3d._camSig;
    if (!sig) {
      sig = [0, 0, 0, 0, 0, 0, 0];
      ctx3d._camSig = sig;
    }
    const camMoved = Math.abs(sig[0] - cp2.x) > 1e-4 || Math.abs(sig[1] - cp2.y) > 1e-4 || Math.abs(sig[2] - cp2.z) > 1e-4 || Math.abs(sig[3] - cq.x) > 1e-5 || Math.abs(sig[4] - cq.y) > 1e-5 || Math.abs(sig[5] - cq.z) > 1e-5 || Math.abs(sig[6] - cq.w) > 1e-5;
    if (camMoved) ctx3d._camMovedAt = now;
    sig[0] = cp2.x;
    sig[1] = cp2.y;
    sig[2] = cp2.z;
    sig[3] = cq.x;
    sig[4] = cq.y;
    sig[5] = cq.z;
    sig[6] = cq.w;
    const coldStart = !ctx3d._labelsStarted;
    const interacting = !!(ctx3d.controls && (ctx3d.controls.isInteracting || ctx3d.controls.isTweening));
    const moving = !coldStart && (interacting || now - (ctx3d._camMovedAt || 0) < LABEL_MOVE_HOLD_MS);
    ctx3d.labelMoving = moving;
    ctx3d._labelsStarted = true;
    let settling = moving;
    labelApi.items.forEach((it2) => {
      if (!it2.allowed) return;
      const p2 = ctx3d.labelAnchors[it2.id];
      if (!p2) return;
      v.copy(p2).project(cam);
      const dist = cam.position.distanceTo(p2);
      const fadeIn = clamp((dist - 34) / 26, 0, 1);
      const fadeOut = clamp((520 - dist) / 160, 0, 1);
      let op2 = fadeIn * fadeOut;
      if (v.z > 1) op2 = 0;
      const x = (v.x * 0.5 + 0.5) * w;
      const y2 = (-v.y * 0.5 + 0.5) * h2;
      const off = ctx3d.size.edge;
      if (x < -off || x > w + off || y2 < -off || y2 > h2 + off) op2 = 0;
      list.push({ it: it2, x, y: y2, op: op2, dist, prio: it2.el.classList.contains("is-primary") ? 0 : 1 });
    });
    list.sort((a, b) => a.prio - b.prio || a.dist - b.dist);
    if (ctx3d._labelPadFor !== h2) {
      let pad = 8;
      const host = ctx3d.container;
      const tips = host ? host.querySelectorAll(".k3d-tip, .k3d-hint") : [];
      const cr2 = host ? host.getBoundingClientRect() : { top: 0 };
      for (const t2 of tips) {
        if (!t2.getClientRects || !t2.getClientRects().length) continue;
        const r = t2.getBoundingClientRect();
        const band = h2 - (r.top - cr2.top);
        if (band > pad) pad = Math.min(64, band);
      }
      ctx3d._labelPadFor = h2;
      ctx3d._labelPadBottom = pad;
    }
    const padBottom = ctx3d._labelPadBottom || 8;
    list.forEach((item) => {
      const it2 = item.it;
      if (!it2.w || !it2.h) {
        const r = it2.el.getBoundingClientRect();
        it2.w = r.width || 120;
        it2.h = r.height || 40;
      }
    });
    for (const item of list) {
      const it2 = item.it;
      const halfW = it2.w / 2 + 5;
      const halfH = it2.h / 2 + 3;
      const mx = 8, my = 8;
      const halfW2 = it2.w / 2, halfH2 = it2.h / 2;
      const boxOff = halfH2;
      const minX = halfW2 + mx, maxX = Math.max(minX, w - halfW2 - mx);
      const minY = it2.h + my, maxY = Math.max(minY, h2 - my - padBottom);
      const baseX = clamp(item.x, minX, maxX);
      const baseY = clamp(item.y, minY, maxY);
      const step = it2.h + 8;
      const cand = item.prio === 0 ? [0, 1, 2] : [0, 1, -1, 2, -2, 3, -3];
      const culled = item.op <= 0.04;
      let x = baseX;
      let y2 = baseY;
      let hasRoom = false;
      if (!culled) {
        for (const k of cand) {
          const ty = clamp(baseY + k * step, minY, maxY);
          const boxY = ty - boxOff;
          let hit = false;
          for (const p2 of placed) {
            if (Math.abs(p2.x - x) < p2.halfW + halfW && Math.abs(p2.y - boxY) < p2.halfH + halfH) {
              hit = true;
              break;
            }
          }
          if (!hit) {
            y2 = ty;
            hasRoom = true;
            break;
          }
        }
      }
      let show;
      if (culled) {
        show = false;
        it2.okStreak = 0;
        it2.hitStreak = LABEL_HIDE_STREAK;
      } else if (moving) {
        show = !!it2.visible;
      } else {
        if (hasRoom) {
          it2.okStreak = (it2.okStreak || 0) + 1;
          it2.hitStreak = 0;
        } else {
          it2.hitStreak = (it2.hitStreak || 0) + 1;
          it2.okStreak = 0;
        }
        if (coldStart) {
          it2.okStreak = hasRoom ? LABEL_SHOW_STREAK : 0;
          it2.hitStreak = hasRoom ? 0 : LABEL_HIDE_STREAK;
        }
        show = it2.visible ? it2.hitStreak < LABEL_HIDE_STREAK : it2.okStreak >= LABEL_SHOW_STREAK;
        if (it2.hitStreak > 0 && it2.hitStreak < LABEL_HIDE_STREAK) settling = true;
        if (!show && it2.okStreak > 0 && it2.okStreak < LABEL_SHOW_STREAK) settling = true;
      }
      if (show) {
        if (!hasRoom) {
          x = baseX;
          y2 = baseY;
        }
        placed.push({ x, y: y2 - boxOff, halfW, halfH });
        it2.el.style.transform = "translate3d(" + (x - halfW2).toFixed(1) + "px," + (y2 - it2.h).toFixed(1) + "px,0)";
        it2.el.style.opacity = item.op.toFixed(3);
        it2.el.style.pointerEvents = item.op > 0.35 ? "auto" : "none";
        if (!it2.animReady) {
          if (it2.everPlaced) {
            it2.el.classList.add("is-placed");
            it2.animReady = true;
          } else it2.everPlaced = true;
        }
        if (!it2.visible) {
          it2.el.classList.add("is-on");
          it2.visible = true;
          if (culled) ctx3d.labelFlips.cullShow++;
          else ctx3d.labelFlips.placeShow++;
        }
        it2.el.classList.toggle("is-selected", selectedId === it2.id);
      } else {
        if (it2.visible) {
          it2.el.classList.remove("is-on");
          it2.visible = false;
          if (culled) ctx3d.labelFlips.cullHide++;
          else ctx3d.labelFlips.placeHide++;
        }
        it2.el.style.opacity = "0";
        it2.el.style.pointerEvents = "none";
      }
    }
    const ext = labelApi.external;
    const q = ctx3d.qingyuan;
    if (q && ext) {
      const camDir = ctx3d.controls ? ctx3d.controls.spherical.theta : 0;
      const dx = clamp(Math.cos(camDir) * 10, -8, 8);
      const dy = clamp(Math.sin(camDir) * 7, -5, 5);
      ext.style.transform = "translate3d(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px,0)";
    }
    return settling;
  }
  function createControls(dom, ctx3d) {
    const cam = ctx3d.camera;
    const spherical = new ym();
    const offset = new Li();
    const target = ctx3d.target.clone();
    let interacting = false;
    function syncFromCamera() {
      offset.copy(cam.position).sub(target);
      spherical.setFromVector3(offset);
    }
    syncFromCamera();
    const tween = {
      active: false,
      start: 0,
      dur: CAM.easeMs,
      onDone: null,
      fromPos: new Li(),
      toPos: new Li(),
      fromTarget: new Li(),
      toTarget: new Li()
    };
    function startTween(toPos, toTarget, dur, onDone, reason) {
      tween.fromPos.copy(cam.position);
      tween.fromTarget.copy(target);
      tween.toPos.copy(toPos);
      tween.toTarget.copy(toTarget);
      tween.onDone = onDone || null;
      tween.start = typeof performance !== "undefined" ? performance.now() : Date.now();
      tween.reason = reason || "tween";
      tween.dur = ctx3d.reducedMotion ? 0 : dur || CAM.easeMs;
      tween.active = true;
      ctx3d.tweenTrace = ctx3d.tweenTrace || [];
      ctx3d.tweenTrace.push({ ev: "start", r: tween.reason, at: Math.round(tween.start) });
      if (ctx3d.tweenTrace.length > 12) ctx3d.tweenTrace.shift();
      if (tween.dur <= 0) {
        cam.position.copy(toPos);
        target.copy(toTarget);
        cam.lookAt(target);
        tween.active = false;
        syncFromCamera();
        if (tween.onDone) {
          const f = tween.onDone;
          tween.onDone = null;
          f();
        }
      }
      ctx3d.invalidate();
    }
    function interrupt() {
      if (tween.active) {
        tween.active = false;
        tween.onDone = null;
        ctx3d.tweenTrace = ctx3d.tweenTrace || [];
        ctx3d.tweenTrace.push({ ev: "interrupt", r: tween.reason, at: Math.round(performance.now()) });
        syncFromCamera();
        ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
      }
    }
    const pointers = /* @__PURE__ */ new Map();
    let dragInfo = null;
    let pinch = null;
    function localPos(e) {
      const r = dom.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function onPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try {
        dom.setPointerCapture(e.pointerId);
      } catch (_) {
      }
      if (pointers.size === 1) {
        dragInfo = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0, isDrag: false };
      } else if (pointers.size === 2) {
        const arr = Array.from(pointers.values());
        pinch = { d0: Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y), dist0: cam.position.distanceTo(target) };
        if (dragInfo) dragInfo.isDrag = true;
      }
      interrupt();
      dom.classList.add("is-grabbing");
    }
    function onPointerMove(e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && pointers.size >= 2) {
        const arr = Array.from(pointers.values());
        const d2 = Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
        if (pinch.d0 > 8) {
          setDistance(clamp(pinch.dist0 * (pinch.d0 / Math.max(1, d2)), CAM.minDist, CAM.maxDist));
        }
        return;
      }
      if (!dragInfo || e.pointerId !== dragInfo.id) return;
      const dx = e.clientX - dragInfo.x;
      const dy = e.clientY - dragInfo.y;
      dragInfo.moved += Math.hypot(dx, dy);
      dragInfo.x = e.clientX;
      dragInfo.y = e.clientY;
      if (dragInfo.moved > DRAG_THRESHOLD_PX) dragInfo.isDrag = true;
      if (!dragInfo.isDrag) return;
      const k = 52e-4;
      spherical.theta -= dx * k;
      spherical.phi -= dy * k;
      spherical.phi = clamp(spherical.phi, Math.PI / 2 - CAM.maxPitch, Math.PI / 2 - CAM.minPitch);
      applySpherical();
      ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
      ctx3d.invalidate();
    }
    function onPointerUp(e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      try {
        dom.releasePointerCapture(e.pointerId);
      } catch (_) {
      }
      if (pointers.size < 2) pinch = null;
      if (dragInfo && e.pointerId === dragInfo.id) {
        const wasClick = !dragInfo.isDrag && dragInfo.moved <= DRAG_THRESHOLD_PX;
        ctx3d.lastGesture = { moved: +dragInfo.moved.toFixed(2), isDrag: dragInfo.isDrag, wasClick };
        dragInfo = null;
        if (wasClick) ctx3d.onCanvasClick(e);
      }
      if (pointers.size === 0) dom.classList.remove("is-grabbing");
    }
    function onPointerCancel(e) {
      pointers.delete(e.pointerId);
      if (dragInfo && e.pointerId === dragInfo.id) dragInfo = null;
      if (pointers.size < 2) pinch = null;
      if (pointers.size === 0) dom.classList.remove("is-grabbing");
    }
    function onWheel(e) {
      e.preventDefault();
      interrupt();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1;
      const d2 = e.deltaY * unit;
      const dist = cam.position.distanceTo(target) * Math.exp(clamp(d2, -260, 260) * 11e-4);
      setDistance(dist);
      ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
    }
    function setDistance(dist) {
      spherical.radius = clamp(dist, CAM.minDist, CAM.maxDist);
      applySpherical();
      ctx3d.invalidate();
    }
    function applySpherical() {
      spherical.makeSafe();
      offset.setFromSpherical(spherical);
      cam.position.copy(target).add(offset);
      cam.lookAt(target);
    }
    function update() {
      if (!tween.active) return;
      const now = typeof performance !== "undefined" ? performance.now() : Date.now();
      const t2 = clamp((now - tween.start) / tween.dur, 0, 1);
      const e = easeInOutCubic(t2);
      cam.position.lerpVectors(tween.fromPos, tween.toPos, e);
      target.lerpVectors(tween.fromTarget, tween.toTarget, e);
      cam.lookAt(target);
      ctx3d.invalidate();
      if (t2 >= 1) {
        tween.active = false;
        ctx3d.lastTweenMs = Math.round(now - tween.start);
        ctx3d.tweenTrace = ctx3d.tweenTrace || [];
        ctx3d.tweenTrace.push({ ev: "done", r: tween.reason, ms: ctx3d.lastTweenMs, t: +t2.toFixed(3) });
        syncFromCamera();
        const f = tween.onDone;
        tween.onDone = null;
        if (f) f();
      }
    }
    dom.addEventListener("pointerdown", onPointerDown);
    dom.addEventListener("pointermove", onPointerMove);
    dom.addEventListener("pointerup", onPointerUp);
    dom.addEventListener("pointercancel", onPointerCancel);
    dom.addEventListener("lostpointercapture", onPointerCancel);
    dom.addEventListener("wheel", onWheel, { passive: false });
    dom.addEventListener("contextmenu", (e) => e.preventDefault());
    dom.addEventListener("dblclick", (e) => e.preventDefault());
    syncFromCamera();
    return {
      target,
      spherical,
      interrupt,
      update,
      setDistance,
      applySpherical,
      startTween,
      setTargetTo(v) {
        target.copy(v);
        applySpherical();
      },
      get isTweening() {
        return tween.active;
      },
      /** 用户是否正在直接操作相机（按住指针拖动 / 双指缩放）。标签层用它判断"相机在动" */
      get isInteracting() {
        return !!dragInfo || pointers.size > 0;
      },
      dispose() {
        dom.removeEventListener("pointerdown", onPointerDown);
        dom.removeEventListener("pointermove", onPointerMove);
        dom.removeEventListener("pointerup", onPointerUp);
        dom.removeEventListener("pointercancel", onPointerCancel);
        dom.removeEventListener("lostpointercapture", onPointerCancel);
        dom.removeEventListener("wheel", onWheel);
      }
    };
  }
  function initScene(container, options) {
    options = options || {};
    const COLORS = mergeColors(options.colors);
    const ctx3d = {
      container: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      labelApi: null,
      qingyuan: null,
      groups: {},
      disposables: { geos: [], mats: [], textures: [], others: [] },
      track(x) {
        if (!x) return x;
        if (x.isBufferGeometry) this.disposables.geos.push(x);
        else if (x.isMaterial) this.disposables.mats.push(x);
        else if (x.isTexture) this.disposables.textures.push(x);
        else this.disposables.others.push(x);
        return x;
      },
      size: { w: 1, h: 1, dpr: 1, edge: 0 },
      sized: false,
      labelAnchors: {},
      reducedMotion: options.reducedMotion !== void 0 ? !!options.reducedMotion : typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches,
      lowPower: LOW_POWER,
      pausedUntil: 0,
      /* 标记"需要重绘"并唤醒渲染循环。
         暂停策略见 frame()：页面不可见或容器离开视口时循环会自行停下，
         所以任何会改变画面的操作都要经这里把循环叫醒。 */
      invalidate() {
        this.dirty = true;
        if (typeof ensureLoop === "function") ensureLoop();
      },
      dirty: true,
      running: false,
      visible: true,
      inView: true,
      selected: null,
      onCanvasClick: null
    };
    let supported = true;
    let disposed = false;
    function webglAvailable() {
      try {
        const cv = document.createElement("canvas");
        const gl2 = cv.getContext("webgl2") || cv.getContext("webgl") || cv.getContext("experimental-webgl");
        if (!gl2) return false;
        const lose = gl2.getExtension && gl2.getExtension("WEBGL_lose_context");
        if (lose) lose.loseContext();
        return true;
      } catch (e) {
        return false;
      }
    }
    const api = {
      focusLandmark(id2) {
        return focusLandmark(id2);
      },
      resetView() {
        return resetView();
      },
      setLabelMode(mode) {
        if (ctx3d.labelApi) ctx3d.labelApi.setMode(mode === "all" ? "all" : "minimal");
        ctx3d.invalidate();
      },
      getSelected() {
        return ctx3d.selected;
      },
      highlight(idOrNull) {
        return applyHighlight(idOrNull);
      },
      dispose() {
        doDispose();
      },
      isSupported() {
        return supported;
      },
      /* 便于外部做自适应（也用于自测） */
      getCameraState() {
        return getCameraState();
      },
      getVersion() {
        return VERSION;
      },
      /* 地标清单（含标号与文案）：页面侧用它生成场景下方的图例。
         顺序与场内圆标完全一致（都来自 BADGE_ORDER），不要再各排一套。 */
      getPlaces() {
        const defs = ctx3d.labelApi && ctx3d.labelApi.defs || {};
        return BADGE_ORDER.map((id2, i) => {
          const d2 = defs[id2] || PLACES[id2].label;
          return {
            id: id2,
            num: String(i + 1).padStart(2, "0"),
            name: d2.name,
            sub: d2.sub,
            primary: PRIMARY_IDS.indexOf(id2) >= 0,
            x: PLACES[id2].x,
            z: PLACES[id2].z
          };
        });
      }
    };
    if (!webglAvailable()) {
      supported = false;
      container.classList.add("k3d-unsupported");
      return api;
    }
    let renderer;
    try {
      renderer = new rc({
        antialias: !LOW_POWER,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true
        // 允许外部截图（paused 后仍能取到画面）
      });
    } catch (e) {
      supported = false;
      container.classList.add("k3d-unsupported");
      return api;
    }
    const scene = new oc();
    const skyTex = makeSkyTexture();
    ctx3d.track(skyTex);
    scene.background = skyTex;
    scene.fog = new ac(14933197, 300, 720);
    const camera = new Qs(CAM.fov, 1, 1, 1600);
    camera.position.copy(CAM.defPos);
    camera.lookAt(CAM.defTarget);
    ctx3d.scene = scene;
    ctx3d.camera = camera;
    ctx3d.renderer = renderer;
    ctx3d.container = container;
    ctx3d.target = CAM.defTarget.clone();
    renderer.setClearColor(15196370, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = LOW_POWER ? l : c;
    renderer.outputColorSpace = Je;
    renderer.toneMapping = et;
    renderer.toneMappingExposure = 0.98;
    const dprCap = LOW_POWER ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
    const canvas = renderer.domElement;
    canvas.className = "k3d-canvas";
    canvas.style.touchAction = "none";
    container.classList.add("k3d-host");
    container.appendChild(canvas);
    const hemi = new sp(15985885, 9340534, 1.55);
    scene.add(hemi);
    const sun = new _p(16774112, 2.05);
    sun.position.set(150, 210, 120);
    sun.castShadow = true;
    const sc = LOW_POWER ? 1024 : 2048;
    sun.shadow.mapSize.set(sc, sc);
    sun.shadow.camera.near = 40;
    sun.shadow.camera.far = 700;
    const sh2 = 200;
    sun.shadow.camera.left = -sh2;
    sun.shadow.camera.right = sh2;
    sun.shadow.camera.top = sh2;
    sun.shadow.camera.bottom = -sh2;
    sun.shadow.bias = -9e-4;
    sun.shadow.normalBias = 0.6;
    scene.add(sun);
    scene.add(sun.target);
    sun.target.position.set(0, 0, 0);
    const fill = new _p(13621470, 0.55);
    fill.position.set(-140, 90, -120);
    scene.add(fill);
    const bounce = new xp(15854557, 0.28);
    scene.add(bounce);
    const groundTex = drawGroundTexture();
    ctx3d.track(groundTex);
    const groundGeo = new pa(GROUND.x1 - GROUND.x0, GROUND.z1 - GROUND.z0);
    ctx3d.track(groundGeo);
    const groundMat = new Sd({ map: groundTex });
    ctx3d.track(groundMat);
    const ground = new Vs(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set((GROUND.x0 + GROUND.x1) / 2, 0, (GROUND.z0 + GROUND.z1) / 2);
    ground.receiveShadow = true;
    ground.name = "ground";
    scene.add(ground);
    ctx3d.groups.ground = ground;
    const mats = createMaterials();
    const simpleReg = [];
    const simple = makeSimpleMaterials(simpleReg);
    const landmarkReg = [];
    const lmat = cloneMats(simple, landmarkReg, mats.tileTex);
    const cityGroup = new Zl();
    cityGroup.name = "kanglu-district";
    scene.add(cityGroup);
    ctx3d.groups.city = cityGroup;
    const rng = makeRng(20260828);
    const buildingLog = [];
    const stats = buildBuildingsRecord(mats, rng, ctx3d, buildingLog);
    mats.facades.forEach((f) => {
      if (!f.geos.length) return;
      const geo = mergeGeometries(f.geos);
      geo.setAttribute("color", geo.attributes.color);
      ctx3d.track(geo);
      const mesh = new Vs(geo, f.material);
      mesh.name = "buildings-" + f.material.name;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      cityGroup.add(mesh);
      f.geos.forEach((g) => g.dispose());
      f.geos.length = 0;
    });
    if (mats.roofGeos.length) {
      const geo = mergeGeometries(mats.roofGeos);
      ctx3d.track(geo);
      const mesh = new Vs(geo, mats.roofMat);
      mesh.name = "roofs";
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      cityGroup.add(mesh);
      mats.roofGeos.forEach((g) => g.dispose());
      mats.roofGeos.length = 0;
    }
    if (mats.metalGeos.length) {
      const geo = mergeGeometries(mats.metalGeos);
      ctx3d.track(geo);
      const mesh = new Vs(geo, mats.metalMat);
      mesh.name = "metal-sheds";
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      cityGroup.add(mesh);
      mats.metalGeos.forEach((g) => g.dispose());
      mats.metalGeos.length = 0;
    }
    if (mats.paintGeos.length) {
      const geo = mergeGeometries(mats.paintGeos);
      ctx3d.track(geo);
      const mesh = new Vs(geo, mats.paintMat);
      mesh.name = "awnings";
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      cityGroup.add(mesh);
      mats.paintGeos.forEach((g) => g.dispose());
      mats.paintGeos.length = 0;
    }
    ctx3d.stats = stats;
    buildEnvDetails(cityGroup, rng, buildingLog, mats, ctx3d);
    buildTrees(cityGroup, rng, ctx3d);
    buildElevatedRoad(cityGroup, lmat, ctx3d);
    buildSurroundings(cityGroup, rng, ctx3d);
    const landmarks = {};
    const kangle = buildKangleArch(lmat, ctx3d, landmarkReg);
    const P1 = PLACES["kangle-arch"];
    kangle.position.set(P1.x, 0, P1.z);
    kangle.rotation.y = P1.rot;
    kangle.name = "landmark-kangle-arch";
    kangle.userData.id = "kangle-arch";
    cityGroup.add(kangle);
    landmarks["kangle-arch"] = kangle;
    const lujiang = buildLujiangArch(lmat, ctx3d, landmarkReg);
    const P2 = PLACES["lujiang-arch"];
    lujiang.position.set(P2.x, 0, P2.z);
    lujiang.rotation.y = P2.rot;
    lujiang.name = "landmark-lujiang-arch";
    lujiang.userData.id = "lujiang-arch";
    cityGroup.add(lujiang);
    landmarks["lujiang-arch"] = lujiang;
    const plaza = buildHiringPlaza(lmat, ctx3d, landmarkReg);
    const P3 = PLACES["hiring-plaza"];
    plaza.position.set(P3.x, 0, P3.z);
    plaza.rotation.y = -0.06;
    plaza.userData.id = "hiring-plaza";
    cityGroup.add(plaza);
    landmarks["hiring-plaza"] = plaza;
    const clinic = buildClinic(lmat, ctx3d, landmarkReg);
    clinic.position.set(-6, 0, -17);
    clinic.rotation.y = 0.2;
    clinic.userData.id = "yizhen";
    cityGroup.add(clinic);
    landmarks["yizhen"] = clinic;
    const subBuilders = {
      "kangle-village": buildKangleVillage,
      "lujiang-village": buildLujiangVillage,
      "fabric-market": buildFabricMarket,
      "hiring-street": buildHiringStreet,
      "kangle-south-st": buildKangleSouthStreet,
      "kangle-canal": buildKangleCanal,
      "lujiang-yard": buildLujiangYard,
      "fengyang-office": buildFengyangOffice
    };
    SUB_PLACE_IDS.forEach((id2) => {
      const fn = subBuilders[id2];
      if (typeof fn !== "function") return;
      const P4 = PLACES[id2];
      const grp = fn(mats, lmat, ctx3d, landmarkReg);
      grp.position.set(P4.x, 0, P4.z);
      grp.rotation.y = P4.rot || 0;
      grp.name = "landmark-" + id2;
      grp.userData.id = id2;
      cityGroup.add(grp);
      landmarks[id2] = grp;
    });
    buildStreetProps(cityGroup, lmat, ctx3d, landmarkReg);
    landmarkReg.forEach((x) => ctx3d.track(x));
    simpleReg.forEach((x) => ctx3d.track(x));
    ctx3d.landmarks = landmarks;
    ctx3d.pickables = LANDMARK_IDS.concat(["yizhen"]).map((id2) => landmarks[id2]).filter(Boolean);
    ctx3d.labelAnchors = {
      "kangle-arch": new Li(P1.x, 8.6, P1.z + 2),
      "lujiang-arch": new Li(P2.x, 11.8, P2.z + 2),
      "hiring-plaza": new Li(P3.x, 9, P3.z),
      "yizhen": new Li(-6, 12, -17)
    };
    const SUB_ANCHORS = {
      "kangle-village": [0, 14.5, 0],
      "lujiang-village": [0, 13.5, 0],
      "fabric-market": [-4, 7.5, 0],
      "hiring-street": [0, 11.5, 0],
      "kangle-south-st": [0, 13, 0],
      "kangle-canal": [-3.4, 19, 0],
      "lujiang-yard": [0, 13, 0],
      "fengyang-office": [5, 15, -5]
    };
    SUB_PLACE_IDS.forEach((id2) => {
      const P4 = PLACES[id2];
      const a = SUB_ANCHORS[id2] || [0, 12, 0];
      ctx3d.labelAnchors[id2] = new Li(P4.x + a[0], a[1], P4.z + a[2]);
    });
    const qy = buildQingyuanMarker(scene, lmat, ctx3d, landmarkReg);
    ctx3d.qingyuan = qy;
    const raycaster = new vm();
    const ndc = new ti();
    ctx3d.onCanvasClick = function(e) {
      const rect = canvas.getBoundingClientRect();
      ndc.x = (e.clientX - rect.left) / rect.width * 2 - 1;
      ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      raycaster.params.Line = { threshold: 1 };
      const hits = raycaster.intersectObjects(ctx3d.pickables, true);
      ctx3d.lastPick = {
        ndc: [+ndc.x.toFixed(4), +ndc.y.toFixed(4)],
        client: [Math.round(e.clientX), Math.round(e.clientY)],
        hitCount: hits.length,
        first: hits.length ? (function() {
          let o2 = hits[0].object;
          while (o2 && !o2.userData.id) o2 = o2.parent;
          return { id: o2 ? o2.userData.id : null, name: hits[0].object.name || hits[0].object.type, dist: +hits[0].distance.toFixed(2) };
        })() : null
      };
      if (!hits.length) {
        if (ctx3d.selected) {
          applyHighlight(null);
          if (typeof selectCb === "function") selectCb(null);
        }
        return;
      }
      let o = hits[0].object;
      while (o && !o.userData.id) o = o.parent;
      const id2 = o && o.userData.id;
      if (!id2) return;
      applyHighlight(id2);
      if (typeof selectCb === "function") selectCb(id2);
    };
    let selectCb = typeof options.onSelect === "function" ? options.onSelect : null;
    ctx3d.controls = createControls(canvas, ctx3d);
    ctx3d.labelApi = createLabelLayer(container, PLACES, options);
    ctx3d.labelApi.setMode(options.labelMode === "all" ? "all" : "minimal");
    ctx3d.labelApi.items.forEach((it2) => {
      it2.el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        if (!it2.allowed) return;
        applyHighlight(it2.id);
        if (typeof selectCb === "function") selectCb(it2.id);
      });
      it2.el.style.touchAction = "manipulation";
      it2.el.addEventListener("pointerdown", (e) => e.stopPropagation());
    });
    const highlightState = { id: null, materials: [] };
    function applyHighlight(idOrNull) {
      highlightState.materials.forEach((m) => {
        if (m.userData.__origEmissive !== void 0) {
          m.emissive.setHex(m.userData.__origEmissive);
          m.emissiveIntensity = m.userData.__origIntensity;
        }
      });
      highlightState.materials = [];
      if (highlightState.id && ctx3d.landmarks[highlightState.id]) {
        ctx3d.landmarks[highlightState.id].position.y = 0;
      }
      highlightState.id = null;
      ctx3d.selected = null;
      if (!idOrNull || !ctx3d.landmarks[idOrNull]) {
        ctx3d.invalidate();
        return;
      }
      const g = ctx3d.landmarks[idOrNull];
      const list = Array.isArray(g.userData.emissiveMats) ? g.userData.emissiveMats : [];
      list.forEach((m) => {
        if (m.userData.__origEmissive === void 0) {
          m.userData.__origEmissive = m.emissive.getHex();
          m.userData.__origIntensity = m.emissiveIntensity === void 0 ? 1 : m.emissiveIntensity;
        }
        m.emissive.setHex(9189932);
        m.emissiveIntensity = 0.55;
      });
      highlightState.id = idOrNull;
      highlightState.materials = list;
      ctx3d.selected = idOrNull;
      if (ctx3d.labelApi && ctx3d.labelApi.items) {
        ctx3d.labelApi.items.forEach((it2, id2) => it2.el.classList.toggle("is-selected", id2 === idOrNull));
      }
      ctx3d.invalidate();
    }
    function updateHighlight(t2) {
      if (!highlightState.id) return;
      const g = ctx3d.landmarks[highlightState.id];
      if (!g) return;
      if (ctx3d.reducedMotion) {
        g.position.y = 0.9;
        return;
      }
      const k = Math.sin(t2 * 2.4) * 0.5 + 0.5;
      g.position.y = 0.55 + k * 0.85;
    }
    const baseOffset = CAM.defPos.clone().sub(CAM.defTarget);
    const baseSpherical = new ym().setFromVector3(baseOffset);
    const baseDir = baseOffset.clone().normalize();
    const centerXZ = (function() {
      let sx = 0, sz = 0;
      for (const id2 of PRIMARY_IDS) {
        sx += PLACES[id2].x;
        sz += PLACES[id2].z;
      }
      return { x: sx / PRIMARY_IDS.length, z: sz / PRIMARY_IDS.length };
    })();
    const viewDirXZ = { x: baseDir.x, z: baseDir.z };
    (function norm() {
      const l2 = Math.hypot(viewDirXZ.x, viewDirXZ.z) || 1;
      viewDirXZ.x /= l2;
      viewDirXZ.z /= l2;
    })();
    const rightXZ = { x: -viewDirXZ.z, z: viewDirXZ.x };
    const perpOf = (p2) => p2.x * rightXZ.x + p2.z * rightXZ.z;
    const SPREAD_XZ = (function() {
      let min = Infinity, max = -Infinity;
      for (const id2 of PRIMARY_IDS) {
        const v = perpOf(PLACES[id2]);
        if (v < min) min = v;
        if (v > max) max = v;
      }
      return max - min;
    })();
    const VERT_H = 150;
    const HORIZ_MIN = SPREAD_XZ + 46;
    function defaultDistFor(aspect) {
      const vFov = CAM.fov * Math.PI / 180;
      const dV = VERT_H / 2 / Math.tan(vFov / 2) * 1.16;
      const dH = HORIZ_MIN / 2 / (Math.tan(vFov / 2) * Math.max(0.05, aspect)) * 1.1;
      return clamp(Math.max(dV, dH), CAM.minDist, CAM.maxDist);
    }
    function defaultTarget() {
      return new Li(centerXZ.x, CAM.defTarget.y, centerXZ.z);
    }
    function computeDefaultView() {
      const w = Math.max(1, container.clientWidth || 800);
      const h2 = Math.max(1, container.clientHeight || 600);
      const dist = defaultDistFor(w / h2);
      const tgt = defaultTarget();
      return {
        dist,
        target: tgt,
        pos: tgt.clone().add(baseDir.clone().multiplyScalar(dist)),
        spherical: new ym(dist, baseSpherical.phi, baseSpherical.theta),
        spread: SPREAD_XZ,
        horizMin: HORIZ_MIN
      };
    }
    ctx3d.computeDefaultView = computeDefaultView;
    function resetView() {
      if (!ctx3d.controls) return false;
      const def = computeDefaultView();
      ctx3d.controls.startTween(def.pos, def.target, CAM.easeMs, () => {
        ctx3d.controls.spherical.radius = def.spherical.radius;
        ctx3d.controls.spherical.theta = def.spherical.theta;
        ctx3d.controls.spherical.phi = def.spherical.phi;
        ctx3d.controls.setTargetTo(def.target);
      }, "reset");
      ctx3d.pausedUntil = performance.now() + CAM.easeMs + 120;
      return true;
    }
    function focusLandmark(id2) {
      if (!ctx3d.controls) return false;
      const g = ctx3d.landmarks[id2];
      if (!g) return false;
      const focusCfg = g.userData.focus || { dist: 48, fitH: 24, height: 3 };
      const worldPos = new Li();
      g.getWorldPosition(worldPos);
      const toTarget = new Li(worldPos.x, focusCfg.height, worldPos.z);
      const vFov = CAM.fov * Math.PI / 180;
      const fitH = focusCfg.fitH || focusCfg.height * 2.4;
      const fitDist = fitH / 2 / Math.tan(vFov / 2) / 0.66;
      const d2 = clamp(Math.max(focusCfg.dist || 0, fitDist), 22, CAM.maxDist);
      const dir = new Li().subVectors(camera.position, ctx3d.controls.target);
      dir.y = 0;
      if (dir.lengthSq() < 1e-4) dir.set(1, 0, 1);
      dir.normalize();
      const pitch = (focusCfg.pitch === void 0 ? 20 : focusCfg.pitch) * Math.PI / 180;
      const toPos = new Li(
        toTarget.x + dir.x * Math.cos(pitch) * d2,
        toTarget.y + Math.sin(pitch) * d2,
        toTarget.z + dir.z * Math.cos(pitch) * d2
      );
      ctx3d.controls.startTween(toPos, toTarget, CAM.easeMs, null, "focus:" + id2);
      ctx3d.pausedUntil = performance.now() + CAM.easeMs + 120;
      return true;
    }
    function getCameraState() {
      const tgt = ctx3d.controls ? ctx3d.controls.target : CAM.defTarget;
      const off = new Li().subVectors(camera.position, tgt);
      const s = new ym().setFromVector3(off);
      return {
        position: [+camera.position.x.toFixed(3), +camera.position.y.toFixed(3), +camera.position.z.toFixed(3)],
        target: [+tgt.x.toFixed(3), +tgt.y.toFixed(3), +tgt.z.toFixed(3)],
        distance: +s.radius.toFixed(3),
        azimuthDeg: +Qn.radToDeg(s.theta).toFixed(3),
        pitchDeg: +(90 - Qn.radToDeg(s.phi)).toFixed(3),
        selected: ctx3d.selected,
        tweening: ctx3d.controls ? ctx3d.controls.isTweening : false,
        buildings: stats.count,
        quality: LOW_POWER ? "low" : "high",
        reducedMotion: ctx3d.reducedMotion,
        supported,
        running: ctx3d.running,
        /* 上一次指针手势的判定结果：自测用来确认 4px 阈值的实际取值 */
        lastGesture: ctx3d.lastGesture || null,
        /* 最近一次缓动的实际耗时（毫秒），用于确认 0.6–0.9s 的承诺 */
        lastTweenMs: ctx3d.lastTweenMs === void 0 ? null : ctx3d.lastTweenMs,
        lastPick: ctx3d.lastPick || null,
        tweenTrace: ctx3d.tweenTrace || []
      };
    }
    ctx3d.clock = new zp();
    ctx3d.rafId = 0;
    ctx3d.labelTick = 0;
    ctx3d.labelFlips = { placeShow: 0, placeHide: 0, cullShow: 0, cullHide: 0 };
    ctx3d.disposed = false;
    function frame() {
      ctx3d.rafId = 0;
      if (ctx3d.disposed) return;
      const t2 = ctx3d.clock.getElapsedTime();
      if (!ctx3d.visible || !ctx3d.inView) {
        ctx3d.running = false;
        return;
      }
      ctx3d.controls.update();
      updateHighlight(t2);
      if (!ctx3d.reducedMotion && t2 - (ctx3d.lastCrowd || 0) > 0.055) {
        ctx3d.lastCrowd = t2;
        animateCrowd(landmarks["hiring-plaza"], t2);
      }
      renderer.render(scene, camera);
      ctx3d.labelTick++;
      const labelSettling = updateLabels(ctx3d.labelApi, ctx3d, ctx3d.selected);
      const needs = ctx3d.controls.isTweening || !!highlightState.id || !ctx3d.reducedMotion || labelSettling;
      if (needs || ctx3d.dirty) {
        ctx3d.dirty = false;
        schedule();
      } else {
        ctx3d.running = false;
      }
    }
    function schedule() {
      if (ctx3d.rafId || ctx3d.disposed) return;
      ctx3d.rafId = requestAnimationFrame(frame);
    }
    function ensureLoop() {
      if (ctx3d.disposed || ctx3d.running) return;
      ctx3d.running = true;
      ctx3d.clock.getDelta();
      schedule();
    }
    let resizeRaf = 0;
    const onResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        resize();
      });
    };
    function resize() {
      const w = Math.max(1, container.clientWidth || container.offsetWidth || 800);
      const h2 = Math.max(1, container.clientHeight || container.offsetHeight || 600);
      const prevW = ctx3d.size.w, prevH = ctx3d.size.h;
      const first = !ctx3d.sized;
      ctx3d.size.w = w;
      ctx3d.size.h = h2;
      ctx3d.size.edge = Math.max(w, h2) * 0.2;
      camera.aspect = w / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h2, false);
      ctx3d.sized = true;
      if (ctx3d.controls) {
        const prevAspect = prevW / prevH;
        const asp = w / h2;
        if (first) {
          const def = computeDefaultView();
          ctx3d.controls.target.copy(def.target);
          ctx3d.controls.spherical.radius = def.spherical.radius;
          ctx3d.controls.spherical.theta = def.spherical.theta;
          ctx3d.controls.spherical.phi = def.spherical.phi;
          ctx3d.controls.applySpherical();
        } else if (Math.abs(asp - prevAspect) > 1e-3) {
          const prevD = defaultDistFor(prevAspect);
          const nextD = defaultDistFor(asp);
          if (prevD > 0) ctx3d.controls.setDistance(ctx3d.controls.spherical.radius * (nextD / prevD));
        }
      }
      ctx3d.invalidate();
    }
    resize();
    window.addEventListener("resize", onResize);
    let ro2 = null;
    if (typeof ResizeObserver !== "undefined") {
      ro2 = new ResizeObserver(onResize);
      ro2.observe(container);
    }
    const onVisibility = () => {
      ctx3d.visible = !document.hidden;
      if (ctx3d.visible) ctx3d.invalidate();
    };
    document.addEventListener("visibilitychange", onVisibility);
    let io2 = null;
    if (typeof IntersectionObserver !== "undefined") {
      io2 = new IntersectionObserver((entries) => {
        for (const en2 of entries) ctx3d.inView = en2.isIntersecting;
        if (ctx3d.inView) ctx3d.invalidate();
      }, { threshold: 0.02 });
      io2.observe(container);
    }
    let mqReduce = null;
    const onReduceChange = (e) => {
      ctx3d.reducedMotion = e.matches;
    };
    if (typeof matchMedia === "function") {
      mqReduce = matchMedia("(prefers-reduced-motion: reduce)");
      if (mqReduce.addEventListener) mqReduce.addEventListener("change", onReduceChange);
      else if (mqReduce.addListener) mqReduce.addListener(onReduceChange);
    }
    ensureLoop();
    if (typeof options.onReady === "function") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!ctx3d.disposed) {
            try {
              options.onReady();
            } catch (e) {
            }
          }
        });
      });
    }
    function doDispose() {
      if (ctx3d.disposed) return;
      ctx3d.disposed = true;
      ctx3d.running = false;
      if (ctx3d.rafId) cancelAnimationFrame(ctx3d.rafId);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (ro2) {
        ro2.disconnect();
        ro2 = null;
      }
      if (io2) {
        io2.disconnect();
        io2 = null;
      }
      if (mqReduce) {
        if (mqReduce.removeEventListener) mqReduce.removeEventListener("change", onReduceChange);
        else if (mqReduce.removeListener) mqReduce.removeListener(onReduceChange);
      }
      if (ctx3d.controls) ctx3d.controls.dispose();
      if (ctx3d.labelApi) ctx3d.labelApi.dispose();
      const seenGeo = /* @__PURE__ */ new Set(), seenMat = /* @__PURE__ */ new Set(), seenTex = /* @__PURE__ */ new Set();
      scene.traverse((o) => {
        if (o.geometry) {
          if (!seenGeo.has(o.geometry)) {
            seenGeo.add(o.geometry);
            o.geometry.dispose();
          }
        }
        const ms = o.material ? Array.isArray(o.material) ? o.material : [o.material] : [];
        for (const m of ms) {
          if (!m || seenMat.has(m)) continue;
          seenMat.add(m);
          for (const k of ["map", "emissiveMap", "normalMap", "roughnessMap", "alphaMap"]) {
            if (m[k] && !seenTex.has(m[k])) {
              seenTex.add(m[k]);
              m[k].dispose();
            }
          }
          m.dispose();
        }
      });
      ctx3d.disposables.geos.forEach((g) => {
        try {
          g.dispose();
        } catch (e) {
          void e;
        }
      });
      ctx3d.disposables.mats.forEach((m) => {
        try {
          m.dispose();
        } catch (e) {
          void e;
        }
      });
      ctx3d.disposables.textures.forEach((t2) => {
        try {
          t2.dispose();
        } catch (e) {
          void e;
        }
      });
      mats.dispose();
      scene.clear();
      renderer.dispose();
      if (renderer.forceContextLoss) {
        try {
          renderer.forceContextLoss();
        } catch (e) {
          void e;
        }
      }
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
      container.classList.remove("k3d-host");
      ctx3d.scene = null;
      ctx3d.camera = null;
      ctx3d.renderer = null;
    }
    ctx3d.getCameraState = getCameraState;
    api._debug = {
      state: getCameraState,
      select(id2) {
        applyHighlight(id2);
        if (typeof selectCb === "function") selectCb(id2);
      },
      labels() {
        const out = [];
        const v = new Li();
        const cam = ctx3d.camera;
        ctx3d.labelApi.items.forEach((it2, id2) => {
          const p2 = ctx3d.labelAnchors[id2];
          let raw = null;
          if (p2) {
            v.copy(p2).project(cam);
            const w = ctx3d.size.w, h2 = ctx3d.size.h;
            raw = {
              dist: +cam.position.distanceTo(p2).toFixed(2),
              ndc: [+v.x.toFixed(3), +v.y.toFixed(3), +v.z.toFixed(3)],
              screen: [Math.round((v.x * 0.5 + 0.5) * w), Math.round((-v.y * 0.5 + 0.5) * h2)],
              viewport: [w, h2]
            };
          }
          out.push({
            id: id2,
            allowed: !!it2.allowed,
            visible: !!it2.visible,
            // 缓存下来的标签尺寸（防堆叠判定用的就是它，量错了会叠在一起）
            w: Math.round(it2.w || 0),
            h: Math.round(it2.h || 0),
            opacity: it2.el.style.opacity,
            display: getComputedStyle(it2.el).display,
            visibility: getComputedStyle(it2.el).visibility,
            transform: it2.el.style.transform,
            rect: (function() {
              const r = it2.el.getBoundingClientRect();
              return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
            })(),
            raw,
            text: it2.el.textContent
          });
        });
        return out;
      },
      /* 立刻跑一次标签布局（自测专用）。
         无头环境里 --virtual-time-budget 会把 rAF 饿死（实测 rAF 回调一次都不跑），
         没法自然制造"相机每动一帧、标签跟着重排一次"的过程。这个钩子把
         "改相机 → 重排标签"从 rAF 里解耦出来，于是可以确定性地跑 300 次
         "移动 + 重排"，用来定量测"转动时标签闪几次"（见 labelStats 的计数）。 */
      updateLabelsNow() {
        updateLabels(ctx3d.labelApi, ctx3d, ctx3d.selected);
        return true;
      },
      /* 标签显隐计数：placeShow/placeHide 是"因防重叠而显/隐"的次数（闪现指标），
         cull* 是锚点出画/太远导致的正常显隐。自测用，不参与业务。 */
      labelStats() {
        const f = ctx3d.labelFlips;
        const items = [];
        if (ctx3d.labelApi) {
          ctx3d.labelApi.items.forEach((it2, id2) => {
            items.push({ id: id2, visible: !!it2.visible, okStreak: it2.okStreak || 0, hitStreak: it2.hitStreak || 0 });
          });
        }
        return {
          placeShow: f.placeShow,
          placeHide: f.placeHide,
          cullShow: f.cullShow,
          cullHide: f.cullHide,
          flips: f.placeShow + f.placeHide,
          visibleNow: items.filter((x) => x.visible).length,
          labelFrames: ctx3d.labelTick,
          moving: !!ctx3d.labelMoving,
          items
        };
      },
      resetLabelStats() {
        ctx3d.labelFlips = { placeShow: 0, placeHide: 0, cullShow: 0, cullHide: 0 };
        return true;
      },
      /* 返回清远外联入口的位置与"是否在片区轮廓之外"，供自测断言 */
      external() {
        if (!qy) return null;
        const p2 = qy.group.position;
        return {
          name: "清远产业园",
          x: p2.x,
          y: p2.y,
          z: p2.z,
          insideDistrict: insideDistrict(p2.x, p2.z, 20),
          eastOfDistrict: p2.x > DISTRICT.east,
          northOfDistrict: p2.z < DISTRICT.north,
          isPickable: ctx3d.pickables.indexOf(qy.group) >= 0,
          labelTransform: ctx3d.labelApi.external.style.transform
        };
      },
      landmarkPositions() {
        const o = {};
        Object.keys(landmarks).forEach((k) => {
          const p2 = new Li();
          landmarks[k].getWorldPosition(p2);
          o[k] = [+p2.x.toFixed(2), +p2.y.toFixed(2), +p2.z.toFixed(2)];
        });
        return o;
      },
      counts() {
        let meshes = 0, instanced = 0, lines = 0;
        scene.traverse((o) => {
          if (o.isInstancedMesh) instanced++;
          else if (o.isMesh) meshes++;
          else if (o.isLine || o.isLineSegments) lines++;
        });
        return { meshes, instanced, lines, buildings: stats.count, drawCalls: renderer.info.render.calls };
      }
    };
    ctx3d.api = api;
    if (typeof window !== "undefined") {
      window.__KANGLU_SCENE__ = ctx3d;
      window.__KANGLU_API__ = api;
    }
    return { api };
  }
  function buildBuildingsRecord(mats, rng, ctx3d, log) {
    const th = LANE.deg * Math.PI / 180;
    const du2 = { x: Math.cos(th), z: -Math.sin(th) };
    const nu2 = { x: -du2.z, z: du2.x };
    const stats = { count: 0, floors: [], laneCount: 0, skipped: 0 };
    const laneCount = Math.ceil((LANE.vMax - LANE.vMin) / LANE.spacing);
    stats.laneCount = laneCount + 1;
    const depthRowDepth = (LANE.depthMin + LANE.depthMax) / 2;
    for (let i = 0; i <= laneCount; i++) {
      const v = LANE.vMin + i * LANE.spacing;
      const laneW = rng.range(LANE.widthMin, LANE.widthMax);
      const rows = ctx3d.lowPower ? 1 : 2;
      for (let side = -1; side <= 1; side += 2) {
        for (let depthIdx = 0; depthIdx < rows; depthIdx++) {
          const frontInner = laneW / 2 + LANE.frontGap;
          const offset = side * (frontInner + (depthIdx === 0 ? 0 : depthRowDepth + LANE.backGap));
          let u2 = LANE.uMin + rng.range(0, 4);
          let guard = 0;
          while (u2 < LANE.uMax && guard++ < 240) {
            const w = rng.range(5.5, 13.5);
            const depth = rng.range(LANE.depthMin, LANE.depthMax);
            const cu2 = u2 + w / 2;
            const cvv = v + offset + depth / 2;
            const cx = du2.x * cu2 + nu2.x * cvv;
            const cz = du2.z * cu2 + nu2.z * cvv;
            let ok = true;
            for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
              const px = cx + du2.x * (a * w / 2) + nu2.x * (b * depth / 2);
              const pz = cz + du2.z * (a * w / 2) + nu2.z * (b * depth / 2);
              if (!insideDistrict(px, pz, -0.4)) {
                ok = false;
                break;
              }
              if (inExclusion(px, pz)) {
                ok = false;
                break;
              }
            }
            if (ok && !inExclusion(cx, cz)) {
              const floors = ctx3d.lowPower ? rng.int(3, 7) : rng.int(3, 8);
              const fh2 = rng.pick(FLOOR_H);
              const h2 = floors * fh2;
              const rec = addBuilding(mats, rng, cx, cz, w, depth, h2, -th, ctx3d);
              log.push(rec);
              stats.count++;
              stats.floors.push(floors);
            } else {
              stats.skipped++;
            }
            u2 += w + rng.range(0.15, 1.1);
          }
        }
      }
    }
    stats.avgFloors = stats.floors.length ? +(stats.floors.reduce((a, b) => a + b, 0) / stats.floors.length).toFixed(2) : 0;
    return stats;
  }
  function disposeScene() {
    if (typeof window !== "undefined" && window.__KANGLU_API__ && window.__KANGLU_API__.dispose) {
      try {
        window.__KANGLU_API__.dispose();
      } catch (e) {
        void e;
      }
    }
    if (typeof window !== "undefined") {
      delete window.__KANGLU_SCENE__;
      delete window.__KANGLU_API__;
    }
  }

  // 康鹭记忆-终版/assets/js/scene-entry.js
  window.KangluScene = { initScene, disposeScene };
})();
