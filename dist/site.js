(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/lib/three.module.min.js
  var t = "160";
  var e = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  var n = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  var l = 1;
  var c = 2;
  var h = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var M = 100;
  var P = 204;
  var L = 205;
  var Z = 0;
  var J = 1;
  var K = 2;
  var $ = 0;
  var Q = 1;
  var tt = 2;
  var et = 3;
  var nt = 4;
  var it = 5;
  var rt = 6;
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
  var _t = 1004;
  var xt = 1005;
  var Mt = 1006;
  var St = 1007;
  var Et = 1008;
  var wt = 1009;
  var Ct = 1012;
  var Pt = 1013;
  var Lt = 1014;
  var It = 1015;
  var Ut = 1016;
  var Nt = 1017;
  var Dt = 1018;
  var Ot = 1020;
  var Bt = 1023;
  var Vt = 1026;
  var kt = 1027;
  var Wt = 1029;
  var jt = 1031;
  var qt = 1033;
  var Yt = 33776;
  var Zt = 33777;
  var Jt = 33778;
  var Kt = 33779;
  var $t = 35840;
  var Qt = 35841;
  var te = 35842;
  var ee = 35843;
  var ne = 36196;
  var ie = 37492;
  var re = 37496;
  var se = 37808;
  var ae = 37809;
  var oe = 37810;
  var le = 37811;
  var ce = 37812;
  var he = 37813;
  var ue = 37814;
  var de = 37815;
  var pe = 37816;
  var me = 37817;
  var fe = 37818;
  var ge = 37819;
  var _e = 37820;
  var ve = 37821;
  var xe = 36492;
  var ye = 36494;
  var Me = 36495;
  var be = 36284;
  var Ee = 36285;
  var Te = 36286;
  var Ce = 2300;
  var Pe = 2301;
  var Le = 2302;
  var Ie = 2400;
  var Ue = 2401;
  var Ne = 2402;
  var He = 3e3;
  var Ve = 3001;
  var je = "";
  var qe = "srgb";
  var Ye = "srgb-linear";
  var Ze = "display-p3";
  var Je = "display-p3-linear";
  var Ke = "linear";
  var $e = "srgb";
  var Qe = "rec709";
  var tn = "p3";
  var nn = 7680;
  var wn = 35044;
  var On = "300 es";
  var Fn = 1035;
  var Bn = 2e3;
  var zn = 2001;
  var Hn = class {
    addEventListener(t2, e2) {
      void 0 === this._listeners && (this._listeners = {});
      const n2 = this._listeners;
      void 0 === n2[t2] && (n2[t2] = []), -1 === n2[t2].indexOf(e2) && n2[t2].push(e2);
    }
    hasEventListener(t2, e2) {
      if (void 0 === this._listeners) return false;
      const n2 = this._listeners;
      return void 0 !== n2[t2] && -1 !== n2[t2].indexOf(e2);
    }
    removeEventListener(t2, e2) {
      if (void 0 === this._listeners) return;
      const n2 = this._listeners[t2];
      if (void 0 !== n2) {
        const t3 = n2.indexOf(e2);
        -1 !== t3 && n2.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      if (void 0 === this._listeners) return;
      const e2 = this._listeners[t2.type];
      if (void 0 !== e2) {
        t2.target = this;
        const n2 = e2.slice(0);
        for (let e3 = 0, i = n2.length; e3 < i; e3++) n2[e3].call(this, t2);
        t2.target = null;
      }
    }
  };
  var Vn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var kn = 1234567;
  var Gn = Math.PI / 180;
  var Wn = 180 / Math.PI;
  function Xn() {
    const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, n2 = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
    return (Vn[255 & t2] + Vn[t2 >> 8 & 255] + Vn[t2 >> 16 & 255] + Vn[t2 >> 24 & 255] + "-" + Vn[255 & e2] + Vn[e2 >> 8 & 255] + "-" + Vn[e2 >> 16 & 15 | 64] + Vn[e2 >> 24 & 255] + "-" + Vn[63 & n2 | 128] + Vn[n2 >> 8 & 255] + "-" + Vn[n2 >> 16 & 255] + Vn[n2 >> 24 & 255] + Vn[255 & i] + Vn[i >> 8 & 255] + Vn[i >> 16 & 255] + Vn[i >> 24 & 255]).toLowerCase();
  }
  function jn(t2, e2, n2) {
    return Math.max(e2, Math.min(n2, t2));
  }
  function qn(t2, e2) {
    return (t2 % e2 + e2) % e2;
  }
  function Yn(t2, e2, n2) {
    return (1 - n2) * t2 + n2 * e2;
  }
  function Zn(t2) {
    return 0 == (t2 & t2 - 1) && 0 !== t2;
  }
  function Jn(t2) {
    return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
  }
  function Kn(t2, e2) {
    switch (e2.constructor) {
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
  function $n(t2, e2) {
    switch (e2.constructor) {
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
  var Qn = { DEG2RAD: Gn, RAD2DEG: Wn, generateUUID: Xn, clamp: jn, euclideanModulo: qn, mapLinear: function(t2, e2, n2, i, r) {
    return i + (t2 - e2) * (r - i) / (n2 - e2);
  }, inverseLerp: function(t2, e2, n2) {
    return t2 !== e2 ? (n2 - t2) / (e2 - t2) : 0;
  }, lerp: Yn, damp: function(t2, e2, n2, i) {
    return Yn(t2, e2, 1 - Math.exp(-n2 * i));
  }, pingpong: function(t2, e2 = 1) {
    return e2 - Math.abs(qn(t2, 2 * e2) - e2);
  }, smoothstep: function(t2, e2, n2) {
    return t2 <= e2 ? 0 : t2 >= n2 ? 1 : (t2 = (t2 - e2) / (n2 - e2)) * t2 * (3 - 2 * t2);
  }, smootherstep: function(t2, e2, n2) {
    return t2 <= e2 ? 0 : t2 >= n2 ? 1 : (t2 = (t2 - e2) / (n2 - e2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, randInt: function(t2, e2) {
    return t2 + Math.floor(Math.random() * (e2 - t2 + 1));
  }, randFloat: function(t2, e2) {
    return t2 + Math.random() * (e2 - t2);
  }, randFloatSpread: function(t2) {
    return t2 * (0.5 - Math.random());
  }, seededRandom: function(t2) {
    void 0 !== t2 && (kn = t2);
    let e2 = kn += 1831565813;
    return e2 = Math.imul(e2 ^ e2 >>> 15, 1 | e2), e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
  }, degToRad: function(t2) {
    return t2 * Gn;
  }, radToDeg: function(t2) {
    return t2 * Wn;
  }, isPowerOfTwo: Zn, ceilPowerOfTwo: function(t2) {
    return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
  }, floorPowerOfTwo: Jn, setQuaternionFromProperEuler: function(t2, e2, n2, i, r) {
    const s = Math.cos, a = Math.sin, o = s(n2 / 2), l2 = a(n2 / 2), c6 = s((e2 + i) / 2), h2 = a((e2 + i) / 2), u2 = s((e2 - i) / 2), d2 = a((e2 - i) / 2), p2 = s((i - e2) / 2), m = a((i - e2) / 2);
    switch (r) {
      case "XYX":
        t2.set(o * h2, l2 * u2, l2 * d2, o * c6);
        break;
      case "YZY":
        t2.set(l2 * d2, o * h2, l2 * u2, o * c6);
        break;
      case "ZXZ":
        t2.set(l2 * u2, l2 * d2, o * h2, o * c6);
        break;
      case "XZX":
        t2.set(o * h2, l2 * m, l2 * p2, o * c6);
        break;
      case "YXY":
        t2.set(l2 * p2, o * h2, l2 * m, o * c6);
        break;
      case "ZYZ":
        t2.set(l2 * m, l2 * p2, o * h2, o * c6);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
    }
  }, normalize: $n, denormalize: Kn };
  var ti = class _ti {
    constructor(t2 = 0, e2 = 0) {
      _ti.prototype.isVector2 = true, this.x = t2, this.y = e2;
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
    set(t2, e2) {
      return this.x = t2, this.y = e2, this;
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
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
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
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
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
      const e2 = this.x, n2 = this.y, i = t2.elements;
      return this.x = i[0] * e2 + i[3] * n2 + i[6], this.y = i[1] * e2 + i[4] * n2 + i[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e2) {
      return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this;
    }
    clampScalar(t2, e2) {
      return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this;
    }
    clampLength(t2, e2) {
      const n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, n2)));
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
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const n2 = this.dot(t2) / e2;
      return Math.acos(jn(n2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, n2 = this.y - t2.y;
      return e2 * e2 + n2 * n2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
    }
    lerpVectors(t2, e2, n2) {
      return this.x = t2.x + (e2.x - t2.x) * n2, this.y = t2.y + (e2.y - t2.y) * n2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
    }
    rotateAround(t2, e2) {
      const n2 = Math.cos(e2), i = Math.sin(e2), r = this.x - t2.x, s = this.y - t2.y;
      return this.x = r * n2 - s * i + t2.x, this.y = r * i + s * n2 + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var ei = class _ei {
    constructor(t2, e2, n2, i, r, s, a, o, l2) {
      _ei.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, n2, i, r, s, a, o, l2);
    }
    set(t2, e2, n2, i, r, s, a, o, l2) {
      const c6 = this.elements;
      return c6[0] = t2, c6[1] = i, c6[2] = a, c6[3] = e2, c6[4] = r, c6[5] = o, c6[6] = n2, c6[7] = s, c6[8] = l2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e2 = this.elements, n2 = t2.elements;
      return e2[0] = n2[0], e2[1] = n2[1], e2[2] = n2[2], e2[3] = n2[3], e2[4] = n2[4], e2[5] = n2[5], e2[6] = n2[6], e2[7] = n2[7], e2[8] = n2[8], this;
    }
    extractBasis(t2, e2, n2) {
      return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), n2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const n2 = t2.elements, i = e2.elements, r = this.elements, s = n2[0], a = n2[3], o = n2[6], l2 = n2[1], c6 = n2[4], h2 = n2[7], u2 = n2[2], d2 = n2[5], p2 = n2[8], m = i[0], f = i[3], g = i[6], _ = i[1], v = i[4], x = i[7], y = i[2], M3 = i[5], S = i[8];
      return r[0] = s * m + a * _ + o * y, r[3] = s * f + a * v + o * M3, r[6] = s * g + a * x + o * S, r[1] = l2 * m + c6 * _ + h2 * y, r[4] = l2 * f + c6 * v + h2 * M3, r[7] = l2 * g + c6 * x + h2 * S, r[2] = u2 * m + d2 * _ + p2 * y, r[5] = u2 * f + d2 * v + p2 * M3, r[8] = u2 * g + d2 * x + p2 * S, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], n2 = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c6 = t2[8];
      return e2 * s * c6 - e2 * a * l2 - n2 * r * c6 + n2 * a * o + i * r * l2 - i * s * o;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], n2 = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c6 = t2[8], h2 = c6 * s - a * l2, u2 = a * o - c6 * r, d2 = l2 * r - s * o, p2 = e2 * h2 + n2 * u2 + i * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p2;
      return t2[0] = h2 * m, t2[1] = (i * l2 - c6 * n2) * m, t2[2] = (a * n2 - i * s) * m, t2[3] = u2 * m, t2[4] = (c6 * e2 - i * o) * m, t2[5] = (i * r - a * e2) * m, t2[6] = d2 * m, t2[7] = (n2 * o - l2 * e2) * m, t2[8] = (s * e2 - n2 * r) * m, this;
    }
    transpose() {
      let t2;
      const e2 = this.elements;
      return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e2 = this.elements;
      return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
    }
    setUvTransform(t2, e2, n2, i, r, s, a) {
      const o = Math.cos(r), l2 = Math.sin(r);
      return this.set(n2 * o, n2 * l2, -n2 * (o * s + l2 * a) + s + t2, -i * l2, i * o, -i * (-l2 * s + o * a) + a + e2, 0, 0, 1), this;
    }
    scale(t2, e2) {
      return this.premultiply(ni.makeScale(t2, e2)), this;
    }
    rotate(t2) {
      return this.premultiply(ni.makeRotation(-t2)), this;
    }
    translate(t2, e2) {
      return this.premultiply(ni.makeTranslation(t2, e2)), this;
    }
    makeTranslation(t2, e2) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e2 = Math.cos(t2), n2 = Math.sin(t2);
      return this.set(e2, -n2, 0, n2, e2, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2) {
      return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e2 = this.elements, n2 = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== n2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let n2 = 0; n2 < 9; n2++) this.elements[n2] = t2[n2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const n2 = this.elements;
      return t2[e2] = n2[0], t2[e2 + 1] = n2[1], t2[e2 + 2] = n2[2], t2[e2 + 3] = n2[3], t2[e2 + 4] = n2[4], t2[e2 + 5] = n2[5], t2[e2 + 6] = n2[6], t2[e2 + 7] = n2[7], t2[e2 + 8] = n2[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var ni = new ei();
  function ii(t2) {
    for (let e2 = t2.length - 1; e2 >= 0; --e2) if (t2[e2] >= 65535) return true;
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
  var di = { [Ye]: { transfer: Ke, primaries: Qe, toReference: (t2) => t2, fromReference: (t2) => t2 }, [qe]: { transfer: $e, primaries: Qe, toReference: (t2) => t2.convertSRGBToLinear(), fromReference: (t2) => t2.convertLinearToSRGB() }, [Je]: { transfer: Ke, primaries: tn, toReference: (t2) => t2.applyMatrix3(ui), fromReference: (t2) => t2.applyMatrix3(hi) }, [Ze]: { transfer: $e, primaries: tn, toReference: (t2) => t2.convertSRGBToLinear().applyMatrix3(ui), fromReference: (t2) => t2.applyMatrix3(hi).convertLinearToSRGB() } };
  var pi = /* @__PURE__ */ new Set([Ye, Je]);
  var mi = { enabled: true, _workingColorSpace: Ye, get workingColorSpace() {
    return this._workingColorSpace;
  }, set workingColorSpace(t2) {
    if (!pi.has(t2)) throw new Error(`Unsupported working color space, "${t2}".`);
    this._workingColorSpace = t2;
  }, convert: function(t2, e2, n2) {
    if (false === this.enabled || e2 === n2 || !e2 || !n2) return t2;
    const i = di[e2].toReference;
    return (0, di[n2].fromReference)(i(t2));
  }, fromWorkingColorSpace: function(t2, e2) {
    return this.convert(t2, this._workingColorSpace, e2);
  }, toWorkingColorSpace: function(t2, e2) {
    return this.convert(t2, e2, this._workingColorSpace);
  }, getPrimaries: function(t2) {
    return di[t2].primaries;
  }, getTransfer: function(t2) {
    return t2 === je ? Ke : di[t2].transfer;
  } };
  function fi(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function gi(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var _i;
  var vi = class {
    static getDataURL(t2) {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let e2;
      if (t2 instanceof HTMLCanvasElement) e2 = t2;
      else {
        void 0 === _i && (_i = ai("canvas")), _i.width = t2.width, _i.height = t2.height;
        const n2 = _i.getContext("2d");
        t2 instanceof ImageData ? n2.putImageData(t2, 0, 0) : n2.drawImage(t2, 0, 0, t2.width, t2.height), e2 = _i;
      }
      return e2.width > 2048 || e2.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t2), e2.toDataURL("image/jpeg", 0.6)) : e2.toDataURL("image/png");
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e2 = ai("canvas");
        e2.width = t2.width, e2.height = t2.height;
        const n2 = e2.getContext("2d");
        n2.drawImage(t2, 0, 0, t2.width, t2.height);
        const i = n2.getImageData(0, 0, t2.width, t2.height), r = i.data;
        for (let t3 = 0; t3 < r.length; t3++) r[t3] = 255 * fi(r[t3] / 255);
        return n2.putImageData(i, 0, 0), e2;
      }
      if (t2.data) {
        const e2 = t2.data.slice(0);
        for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * fi(e2[t3] / 255)) : e2[t3] = fi(e2[t3]);
        return { data: e2, width: t2.width, height: t2.height };
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var xi = 0;
  var yi = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: xi++ }), this.uuid = Xn(), this.data = t2, this.version = 0;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const n2 = { uuid: this.uuid, url: "" }, i = this.data;
      if (null !== i) {
        let t3;
        if (Array.isArray(i)) {
          t3 = [];
          for (let e3 = 0, n3 = i.length; e3 < n3; e3++) i[e3].isDataTexture ? t3.push(Mi(i[e3].image)) : t3.push(Mi(i[e3]));
        } else t3 = Mi(i);
        n2.url = t3;
      }
      return e2 || (t2.images[this.uuid] = n2), n2;
    }
  };
  function Mi(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? vi.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  var Si = 0;
  var bi = class _bi extends Hn {
    constructor(t2 = _bi.DEFAULT_IMAGE, e2 = _bi.DEFAULT_MAPPING, n2 = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l2 = _bi.DEFAULT_ANISOTROPY, c6 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Si++ }), this.uuid = Xn(), this.name = "", this.source = new yi(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = n2, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l2, this.format = a, this.internalFormat = null, this.type = o, this.offset = new ti(0, 0), this.repeat = new ti(1, 1), this.center = new ti(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ei(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, "string" == typeof c6 ? this.colorSpace = c6 : (ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = c6 === Ve ? qe : je), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
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
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const n2 = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n2.userData = this.userData), e2 || (t2.textures[this.uuid] = n2), n2;
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
    get encoding() {
      return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === qe ? Ve : He;
    }
    set encoding(t2) {
      ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t2 === Ve ? qe : je;
    }
  };
  bi.DEFAULT_IMAGE = null, bi.DEFAULT_MAPPING = ot, bi.DEFAULT_ANISOTROPY = 1;
  var Ei = class _Ei {
    constructor(t2 = 0, e2 = 0, n2 = 0, i = 1) {
      _Ei.prototype.isVector4 = true, this.x = t2, this.y = e2, this.z = n2, this.w = i;
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
    set(t2, e2, n2, i) {
      return this.x = t2, this.y = e2, this.z = n2, this.w = i, this;
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
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        case 3:
          this.w = e2;
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
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e2 = this.x, n2 = this.y, i = this.z, r = this.w, s = t2.elements;
      return this.x = s[0] * e2 + s[4] * n2 + s[8] * i + s[12] * r, this.y = s[1] * e2 + s[5] * n2 + s[9] * i + s[13] * r, this.z = s[2] * e2 + s[6] * n2 + s[10] * i + s[14] * r, this.w = s[3] * e2 + s[7] * n2 + s[11] * i + s[15] * r, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e2 = Math.sqrt(1 - t2.w * t2.w);
      return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e2, n2, i, r;
      const s = 0.01, a = 0.1, o = t2.elements, l2 = o[0], c6 = o[4], h2 = o[8], u2 = o[1], d2 = o[5], p2 = o[9], m = o[2], f = o[6], g = o[10];
      if (Math.abs(c6 - u2) < s && Math.abs(h2 - m) < s && Math.abs(p2 - f) < s) {
        if (Math.abs(c6 + u2) < a && Math.abs(h2 + m) < a && Math.abs(p2 + f) < a && Math.abs(l2 + d2 + g - 3) < a) return this.set(1, 0, 0, 0), this;
        e2 = Math.PI;
        const t3 = (l2 + 1) / 2, o2 = (d2 + 1) / 2, _2 = (g + 1) / 2, v = (c6 + u2) / 4, x = (h2 + m) / 4, y = (p2 + f) / 4;
        return t3 > o2 && t3 > _2 ? t3 < s ? (n2 = 0, i = 0.707106781, r = 0.707106781) : (n2 = Math.sqrt(t3), i = v / n2, r = x / n2) : o2 > _2 ? o2 < s ? (n2 = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(o2), n2 = v / i, r = y / i) : _2 < s ? (n2 = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(_2), n2 = x / r, i = y / r), this.set(n2, i, r, e2), this;
      }
      let _ = Math.sqrt((f - p2) * (f - p2) + (h2 - m) * (h2 - m) + (u2 - c6) * (u2 - c6));
      return Math.abs(_) < 1e-3 && (_ = 1), this.x = (f - p2) / _, this.y = (h2 - m) / _, this.z = (u2 - c6) / _, this.w = Math.acos((l2 + d2 + g - 1) / 2), this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e2) {
      return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this.z = Math.max(t2.z, Math.min(e2.z, this.z)), this.w = Math.max(t2.w, Math.min(e2.w, this.w)), this;
    }
    clampScalar(t2, e2) {
      return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this.z = Math.max(t2, Math.min(e2, this.z)), this.w = Math.max(t2, Math.min(e2, this.w)), this;
    }
    clampLength(t2, e2) {
      const n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, n2)));
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
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
    }
    lerpVectors(t2, e2, n2) {
      return this.x = t2.x + (e2.x - t2.x) * n2, this.y = t2.y + (e2.y - t2.y) * n2, this.z = t2.z + (e2.z - t2.z) * n2, this.w = t2.w + (e2.w - t2.w) * n2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Ti = class extends Hn {
    constructor(t2 = 1, e2 = 1, n2 = {}) {
      super(), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = 1, this.scissor = new Ei(0, 0, t2, e2), this.scissorTest = false, this.viewport = new Ei(0, 0, t2, e2);
      const i = { width: t2, height: e2, depth: 1 };
      void 0 !== n2.encoding && (ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n2.colorSpace = n2.encoding === Ve ? qe : je), n2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, depthTexture: null, samples: 0 }, n2), this.texture = new bi(i, n2.mapping, n2.wrapS, n2.wrapT, n2.magFilter, n2.minFilter, n2.format, n2.type, n2.anisotropy, n2.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n2.generateMipmaps, this.texture.internalFormat = n2.internalFormat, this.depthBuffer = n2.depthBuffer, this.stencilBuffer = n2.stencilBuffer, this.depthTexture = n2.depthTexture, this.samples = n2.samples;
    }
    setSize(t2, e2, n2 = 1) {
      this.width === t2 && this.height === e2 && this.depth === n2 || (this.width = t2, this.height = e2, this.depth = n2, this.texture.image.width = t2, this.texture.image.height = e2, this.texture.image.depth = n2, this.dispose()), this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.texture = t2.texture.clone(), this.texture.isRenderTargetTexture = true;
      const e2 = Object.assign({}, t2.texture.image);
      return this.texture.source = new yi(e2), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var wi = class extends Ti {
    constructor(t2 = 1, e2 = 1, n2 = {}) {
      super(t2, e2, n2), this.isWebGLRenderTarget = true;
    }
  };
  var Ai = class extends bi {
    constructor(t2 = null, e2 = 1, n2 = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: n2, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ci = class extends bi {
    constructor(t2 = null, e2 = 1, n2 = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: n2, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ii = class {
    constructor(t2 = 0, e2 = 0, n2 = 0, i = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e2, this._z = n2, this._w = i;
    }
    static slerpFlat(t2, e2, n2, i, r, s, a) {
      let o = n2[i + 0], l2 = n2[i + 1], c6 = n2[i + 2], h2 = n2[i + 3];
      const u2 = r[s + 0], d2 = r[s + 1], p2 = r[s + 2], m = r[s + 3];
      if (0 === a) return t2[e2 + 0] = o, t2[e2 + 1] = l2, t2[e2 + 2] = c6, void (t2[e2 + 3] = h2);
      if (1 === a) return t2[e2 + 0] = u2, t2[e2 + 1] = d2, t2[e2 + 2] = p2, void (t2[e2 + 3] = m);
      if (h2 !== m || o !== u2 || l2 !== d2 || c6 !== p2) {
        let t3 = 1 - a;
        const e3 = o * u2 + l2 * d2 + c6 * p2 + h2 * m, n3 = e3 >= 0 ? 1 : -1, i2 = 1 - e3 * e3;
        if (i2 > Number.EPSILON) {
          const r3 = Math.sqrt(i2), s2 = Math.atan2(r3, e3 * n3);
          t3 = Math.sin(t3 * s2) / r3, a = Math.sin(a * s2) / r3;
        }
        const r2 = a * n3;
        if (o = o * t3 + u2 * r2, l2 = l2 * t3 + d2 * r2, c6 = c6 * t3 + p2 * r2, h2 = h2 * t3 + m * r2, t3 === 1 - a) {
          const t4 = 1 / Math.sqrt(o * o + l2 * l2 + c6 * c6 + h2 * h2);
          o *= t4, l2 *= t4, c6 *= t4, h2 *= t4;
        }
      }
      t2[e2] = o, t2[e2 + 1] = l2, t2[e2 + 2] = c6, t2[e2 + 3] = h2;
    }
    static multiplyQuaternionsFlat(t2, e2, n2, i, r, s) {
      const a = n2[i], o = n2[i + 1], l2 = n2[i + 2], c6 = n2[i + 3], h2 = r[s], u2 = r[s + 1], d2 = r[s + 2], p2 = r[s + 3];
      return t2[e2] = a * p2 + c6 * h2 + o * d2 - l2 * u2, t2[e2 + 1] = o * p2 + c6 * u2 + l2 * h2 - a * d2, t2[e2 + 2] = l2 * p2 + c6 * d2 + a * u2 - o * h2, t2[e2 + 3] = c6 * p2 - a * h2 - o * u2 - l2 * d2, t2;
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
    set(t2, e2, n2, i) {
      return this._x = t2, this._y = e2, this._z = n2, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e2 = true) {
      const n2 = t2._x, i = t2._y, r = t2._z, s = t2._order, a = Math.cos, o = Math.sin, l2 = a(n2 / 2), c6 = a(i / 2), h2 = a(r / 2), u2 = o(n2 / 2), d2 = o(i / 2), p2 = o(r / 2);
      switch (s) {
        case "XYZ":
          this._x = u2 * c6 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c6 * p2, this._z = l2 * c6 * p2 + u2 * d2 * h2, this._w = l2 * c6 * h2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * c6 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c6 * p2, this._z = l2 * c6 * p2 - u2 * d2 * h2, this._w = l2 * c6 * h2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * c6 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c6 * p2, this._z = l2 * c6 * p2 + u2 * d2 * h2, this._w = l2 * c6 * h2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * c6 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c6 * p2, this._z = l2 * c6 * p2 - u2 * d2 * h2, this._w = l2 * c6 * h2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * c6 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c6 * p2, this._z = l2 * c6 * p2 - u2 * d2 * h2, this._w = l2 * c6 * h2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * c6 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c6 * p2, this._z = l2 * c6 * p2 + u2 * d2 * h2, this._w = l2 * c6 * h2 + u2 * d2 * p2;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
      }
      return true === e2 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e2) {
      const n2 = e2 / 2, i = Math.sin(n2);
      return this._x = t2.x * i, this._y = t2.y * i, this._z = t2.z * i, this._w = Math.cos(n2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e2 = t2.elements, n2 = e2[0], i = e2[4], r = e2[8], s = e2[1], a = e2[5], o = e2[9], l2 = e2[2], c6 = e2[6], h2 = e2[10], u2 = n2 + a + h2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (c6 - o) * t3, this._y = (r - l2) * t3, this._z = (s - i) * t3;
      } else if (n2 > a && n2 > h2) {
        const t3 = 2 * Math.sqrt(1 + n2 - a - h2);
        this._w = (c6 - o) / t3, this._x = 0.25 * t3, this._y = (i + s) / t3, this._z = (r + l2) / t3;
      } else if (a > h2) {
        const t3 = 2 * Math.sqrt(1 + a - n2 - h2);
        this._w = (r - l2) / t3, this._x = (i + s) / t3, this._y = 0.25 * t3, this._z = (o + c6) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + h2 - n2 - a);
        this._w = (s - i) / t3, this._x = (r + l2) / t3, this._y = (o + c6) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e2) {
      let n2 = t2.dot(e2) + 1;
      return n2 < Number.EPSILON ? (n2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = n2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = n2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = n2), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(jn(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e2) {
      const n2 = this.angleTo(t2);
      if (0 === n2) return this;
      const i = Math.min(1, e2 / n2);
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
    multiplyQuaternions(t2, e2) {
      const n2 = t2._x, i = t2._y, r = t2._z, s = t2._w, a = e2._x, o = e2._y, l2 = e2._z, c6 = e2._w;
      return this._x = n2 * c6 + s * a + i * l2 - r * o, this._y = i * c6 + s * o + r * a - n2 * l2, this._z = r * c6 + s * l2 + n2 * o - i * a, this._w = s * c6 - n2 * a - i * o - r * l2, this._onChangeCallback(), this;
    }
    slerp(t2, e2) {
      if (0 === e2) return this;
      if (1 === e2) return this.copy(t2);
      const n2 = this._x, i = this._y, r = this._z, s = this._w;
      let a = s * t2._w + n2 * t2._x + i * t2._y + r * t2._z;
      if (a < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a = -a) : this.copy(t2), a >= 1) return this._w = s, this._x = n2, this._y = i, this._z = r, this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t3 = 1 - e2;
        return this._w = t3 * s + e2 * this._w, this._x = t3 * n2 + e2 * this._x, this._y = t3 * i + e2 * this._y, this._z = t3 * r + e2 * this._z, this.normalize(), this;
      }
      const l2 = Math.sqrt(o), c6 = Math.atan2(l2, a), h2 = Math.sin((1 - e2) * c6) / l2, u2 = Math.sin(e2 * c6) / l2;
      return this._w = s * h2 + this._w * u2, this._x = n2 * h2 + this._x * u2, this._y = i * h2 + this._y * u2, this._z = r * h2 + this._z * u2, this._onChangeCallback(), this;
    }
    slerpQuaternions(t2, e2, n2) {
      return this.copy(t2).slerp(e2, n2);
    }
    random() {
      const t2 = Math.random(), e2 = Math.sqrt(1 - t2), n2 = Math.sqrt(t2), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
      return this.set(e2 * Math.cos(i), n2 * Math.sin(r), n2 * Math.cos(r), e2 * Math.sin(i));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e2 = 0) {
      return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
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
  var Ui = class _Ui {
    constructor(t2 = 0, e2 = 0, n2 = 0) {
      _Ui.prototype.isVector3 = true, this.x = t2, this.y = e2, this.z = n2;
    }
    set(t2, e2, n2) {
      return void 0 === n2 && (n2 = this.z), this.x = t2, this.y = e2, this.z = n2, this;
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
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
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
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e2) {
      return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Di.setFromEuler(t2));
    }
    applyAxisAngle(t2, e2) {
      return this.applyQuaternion(Di.setFromAxisAngle(t2, e2));
    }
    applyMatrix3(t2) {
      const e2 = this.x, n2 = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e2 + r[3] * n2 + r[6] * i, this.y = r[1] * e2 + r[4] * n2 + r[7] * i, this.z = r[2] * e2 + r[5] * n2 + r[8] * i, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e2 = this.x, n2 = this.y, i = this.z, r = t2.elements, s = 1 / (r[3] * e2 + r[7] * n2 + r[11] * i + r[15]);
      return this.x = (r[0] * e2 + r[4] * n2 + r[8] * i + r[12]) * s, this.y = (r[1] * e2 + r[5] * n2 + r[9] * i + r[13]) * s, this.z = (r[2] * e2 + r[6] * n2 + r[10] * i + r[14]) * s, this;
    }
    applyQuaternion(t2) {
      const e2 = this.x, n2 = this.y, i = this.z, r = t2.x, s = t2.y, a = t2.z, o = t2.w, l2 = 2 * (s * i - a * n2), c6 = 2 * (a * e2 - r * i), h2 = 2 * (r * n2 - s * e2);
      return this.x = e2 + o * l2 + s * h2 - a * c6, this.y = n2 + o * c6 + a * l2 - r * h2, this.z = i + o * h2 + r * c6 - s * l2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e2 = this.x, n2 = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e2 + r[4] * n2 + r[8] * i, this.y = r[1] * e2 + r[5] * n2 + r[9] * i, this.z = r[2] * e2 + r[6] * n2 + r[10] * i, this.normalize();
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
    clamp(t2, e2) {
      return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this.z = Math.max(t2.z, Math.min(e2.z, this.z)), this;
    }
    clampScalar(t2, e2) {
      return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this.z = Math.max(t2, Math.min(e2, this.z)), this;
    }
    clampLength(t2, e2) {
      const n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, n2)));
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
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
    }
    lerpVectors(t2, e2, n2) {
      return this.x = t2.x + (e2.x - t2.x) * n2, this.y = t2.y + (e2.y - t2.y) * n2, this.z = t2.z + (e2.z - t2.z) * n2, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e2) {
      const n2 = t2.x, i = t2.y, r = t2.z, s = e2.x, a = e2.y, o = e2.z;
      return this.x = i * o - r * a, this.y = r * s - n2 * o, this.z = n2 * a - i * s, this;
    }
    projectOnVector(t2) {
      const e2 = t2.lengthSq();
      if (0 === e2) return this.set(0, 0, 0);
      const n2 = t2.dot(this) / e2;
      return this.copy(t2).multiplyScalar(n2);
    }
    projectOnPlane(t2) {
      return Ni.copy(this).projectOnVector(t2), this.sub(Ni);
    }
    reflect(t2) {
      return this.sub(Ni.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const n2 = this.dot(t2) / e2;
      return Math.acos(jn(n2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, n2 = this.y - t2.y, i = this.z - t2.z;
      return e2 * e2 + n2 * n2 + i * i;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e2, n2) {
      const i = Math.sin(e2) * t2;
      return this.x = i * Math.sin(n2), this.y = Math.cos(e2) * t2, this.z = i * Math.cos(n2), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e2, n2) {
      return this.x = t2 * Math.sin(e2), this.y = n2, this.z = t2 * Math.cos(e2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
    }
    setFromMatrixScale(t2) {
      const e2 = this.setFromMatrixColumn(t2, 0).length(), n2 = this.setFromMatrixColumn(t2, 1).length(), i = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e2, this.y = n2, this.z = i, this;
    }
    setFromMatrixColumn(t2, e2) {
      return this.fromArray(t2.elements, 4 * e2);
    }
    setFromMatrix3Column(t2, e2) {
      return this.fromArray(t2.elements, 3 * e2);
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
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = 2 * (Math.random() - 0.5), e2 = Math.random() * Math.PI * 2, n2 = Math.sqrt(1 - t2 ** 2);
      return this.x = n2 * Math.cos(e2), this.y = n2 * Math.sin(e2), this.z = t2, this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var Ni = new Ui();
  var Di = new Ii();
  var Oi = class {
    constructor(t2 = new Ui(1 / 0, 1 / 0, 1 / 0), e2 = new Ui(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e2;
    }
    set(t2, e2) {
      return this.min.copy(t2), this.max.copy(e2), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e2 = 0, n2 = t2.length; e2 < n2; e2 += 3) this.expandByPoint(Bi.fromArray(t2, e2));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e2 = 0, n2 = t2.count; e2 < n2; e2++) this.expandByPoint(Bi.fromBufferAttribute(t2, e2));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e2 = 0, n2 = t2.length; e2 < n2; e2++) this.expandByPoint(t2[e2]);
      return this;
    }
    setFromCenterAndSize(t2, e2) {
      const n2 = Bi.copy(e2).multiplyScalar(0.5);
      return this.min.copy(t2).sub(n2), this.max.copy(t2).add(n2), this;
    }
    setFromObject(t2, e2 = false) {
      return this.makeEmpty(), this.expandByObject(t2, e2);
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
    expandByObject(t2, e2 = false) {
      t2.updateWorldMatrix(false, false);
      const n2 = t2.geometry;
      if (void 0 !== n2) {
        const i2 = n2.getAttribute("position");
        if (true === e2 && void 0 !== i2 && true !== t2.isInstancedMesh) for (let e3 = 0, n3 = i2.count; e3 < n3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, Bi) : Bi.fromBufferAttribute(i2, e3), Bi.applyMatrix4(t2.matrixWorld), this.expandByPoint(Bi);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), zi.copy(t2.boundingBox)) : (null === n2.boundingBox && n2.computeBoundingBox(), zi.copy(n2.boundingBox)), zi.applyMatrix4(t2.matrixWorld), this.union(zi);
      }
      const i = t2.children;
      for (let t3 = 0, n3 = i.length; t3 < n3; t3++) this.expandByObject(i[t3], e2);
      return this;
    }
    containsPoint(t2) {
      return !(t2.x < this.min.x || t2.x > this.max.x || t2.y < this.min.y || t2.y > this.max.y || t2.z < this.min.z || t2.z > this.max.z);
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e2) {
      return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return !(t2.max.x < this.min.x || t2.min.x > this.max.x || t2.max.y < this.min.y || t2.min.y > this.max.y || t2.max.z < this.min.z || t2.min.z > this.max.z);
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Bi), Bi.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e2, n2;
      return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, n2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, n2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, n2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, n2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, n2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, n2 += t2.normal.z * this.min.z), e2 <= -t2.constant && n2 >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(ji), qi.subVectors(this.max, ji), Hi.subVectors(t2.a, ji), Vi.subVectors(t2.b, ji), ki.subVectors(t2.c, ji), Gi.subVectors(Vi, Hi), Wi.subVectors(ki, Vi), Xi.subVectors(Hi, ki);
      let e2 = [0, -Gi.z, Gi.y, 0, -Wi.z, Wi.y, 0, -Xi.z, Xi.y, Gi.z, 0, -Gi.x, Wi.z, 0, -Wi.x, Xi.z, 0, -Xi.x, -Gi.y, Gi.x, 0, -Wi.y, Wi.x, 0, -Xi.y, Xi.x, 0];
      return !!Ji(e2, Hi, Vi, ki, qi) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Ji(e2, Hi, Vi, ki, qi) && (Yi.crossVectors(Gi, Wi), e2 = [Yi.x, Yi.y, Yi.z], Ji(e2, Hi, Vi, ki, qi)));
    }
    clampPoint(t2, e2) {
      return e2.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Bi).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Bi).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Fi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Fi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Fi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Fi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Fi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Fi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Fi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Fi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Fi)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
  };
  var Fi = [new Ui(), new Ui(), new Ui(), new Ui(), new Ui(), new Ui(), new Ui(), new Ui()];
  var Bi = new Ui();
  var zi = new Oi();
  var Hi = new Ui();
  var Vi = new Ui();
  var ki = new Ui();
  var Gi = new Ui();
  var Wi = new Ui();
  var Xi = new Ui();
  var ji = new Ui();
  var qi = new Ui();
  var Yi = new Ui();
  var Zi = new Ui();
  function Ji(t2, e2, n2, i, r) {
    for (let s = 0, a = t2.length - 3; s <= a; s += 3) {
      Zi.fromArray(t2, s);
      const a2 = r.x * Math.abs(Zi.x) + r.y * Math.abs(Zi.y) + r.z * Math.abs(Zi.z), o = e2.dot(Zi), l2 = n2.dot(Zi), c6 = i.dot(Zi);
      if (Math.max(-Math.max(o, l2, c6), Math.min(o, l2, c6)) > a2) return false;
    }
    return true;
  }
  var Ki = new Oi();
  var $i = new Ui();
  var Qi = new Ui();
  var tr = class {
    constructor(t2 = new Ui(), e2 = -1) {
      this.isSphere = true, this.center = t2, this.radius = e2;
    }
    set(t2, e2) {
      return this.center.copy(t2), this.radius = e2, this;
    }
    setFromPoints(t2, e2) {
      const n2 = this.center;
      void 0 !== e2 ? n2.copy(e2) : Ki.setFromPoints(t2).getCenter(n2);
      let i = 0;
      for (let e3 = 0, r = t2.length; e3 < r; e3++) i = Math.max(i, n2.distanceToSquared(t2[e3]));
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
      const e2 = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e2 * e2;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e2) {
      const n2 = this.center.distanceToSquared(t2);
      return e2.copy(t2), n2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
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
      $i.subVectors(t2, this.center);
      const e2 = $i.lengthSq();
      if (e2 > this.radius * this.radius) {
        const t3 = Math.sqrt(e2), n2 = 0.5 * (t3 - this.radius);
        this.center.addScaledVector($i, n2 / t3), this.radius += n2;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Qi.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint($i.copy(t2.center).add(Qi)), this.expandByPoint($i.copy(t2.center).sub(Qi))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var er = new Ui();
  var nr = new Ui();
  var ir = new Ui();
  var rr = new Ui();
  var sr = new Ui();
  var ar = new Ui();
  var or = new Ui();
  var lr = class {
    constructor(t2 = new Ui(), e2 = new Ui(0, 0, -1)) {
      this.origin = t2, this.direction = e2;
    }
    set(t2, e2) {
      return this.origin.copy(t2), this.direction.copy(e2), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e2) {
      return e2.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, er)), this;
    }
    closestPointToPoint(t2, e2) {
      e2.subVectors(t2, this.origin);
      const n2 = e2.dot(this.direction);
      return n2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, n2);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e2 = er.subVectors(t2, this.origin).dot(this.direction);
      return e2 < 0 ? this.origin.distanceToSquared(t2) : (er.copy(this.origin).addScaledVector(this.direction, e2), er.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e2, n2, i) {
      nr.copy(t2).add(e2).multiplyScalar(0.5), ir.copy(e2).sub(t2).normalize(), rr.copy(this.origin).sub(nr);
      const r = 0.5 * t2.distanceTo(e2), s = -this.direction.dot(ir), a = rr.dot(this.direction), o = -rr.dot(ir), l2 = rr.lengthSq(), c6 = Math.abs(1 - s * s);
      let h2, u2, d2, p2;
      if (c6 > 0) if (h2 = s * o - a, u2 = s * a - o, p2 = r * c6, h2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / c6;
        h2 *= t3, u2 *= t3, d2 = h2 * (h2 + s * u2 + 2 * a) + u2 * (s * h2 + u2 + 2 * o) + l2;
      } else u2 = r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 = -r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 <= -p2 ? (h2 = Math.max(0, -(-s * r + a)), u2 = h2 > 0 ? -r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2) : u2 <= p2 ? (h2 = 0, u2 = Math.min(Math.max(-r, -o), r), d2 = u2 * (u2 + 2 * o) + l2) : (h2 = Math.max(0, -(s * r + a)), u2 = h2 > 0 ? r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2);
      else u2 = s > 0 ? -r : r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      return n2 && n2.copy(this.origin).addScaledVector(this.direction, h2), i && i.copy(nr).addScaledVector(ir, u2), d2;
    }
    intersectSphere(t2, e2) {
      er.subVectors(t2.center, this.origin);
      const n2 = er.dot(this.direction), i = er.dot(er) - n2 * n2, r = t2.radius * t2.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i), a = n2 - s, o = n2 + s;
      return o < 0 ? null : a < 0 ? this.at(o, e2) : this.at(a, e2);
    }
    intersectsSphere(t2) {
      return this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e2 = t2.normal.dot(this.direction);
      if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const n2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
      return n2 >= 0 ? n2 : null;
    }
    intersectPlane(t2, e2) {
      const n2 = this.distanceToPlane(t2);
      return null === n2 ? null : this.at(n2, e2);
    }
    intersectsPlane(t2) {
      const e2 = t2.distanceToPoint(this.origin);
      if (0 === e2) return true;
      return t2.normal.dot(this.direction) * e2 < 0;
    }
    intersectBox(t2, e2) {
      let n2, i, r, s, a, o;
      const l2 = 1 / this.direction.x, c6 = 1 / this.direction.y, h2 = 1 / this.direction.z, u2 = this.origin;
      return l2 >= 0 ? (n2 = (t2.min.x - u2.x) * l2, i = (t2.max.x - u2.x) * l2) : (n2 = (t2.max.x - u2.x) * l2, i = (t2.min.x - u2.x) * l2), c6 >= 0 ? (r = (t2.min.y - u2.y) * c6, s = (t2.max.y - u2.y) * c6) : (r = (t2.max.y - u2.y) * c6, s = (t2.min.y - u2.y) * c6), n2 > s || r > i ? null : ((r > n2 || isNaN(n2)) && (n2 = r), (s < i || isNaN(i)) && (i = s), h2 >= 0 ? (a = (t2.min.z - u2.z) * h2, o = (t2.max.z - u2.z) * h2) : (a = (t2.max.z - u2.z) * h2, o = (t2.min.z - u2.z) * h2), n2 > o || a > i ? null : ((a > n2 || n2 != n2) && (n2 = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n2 >= 0 ? n2 : i, e2)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, er);
    }
    intersectTriangle(t2, e2, n2, i, r) {
      sr.subVectors(e2, t2), ar.subVectors(n2, t2), or.crossVectors(sr, ar);
      let s, a = this.direction.dot(or);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        s = -1, a = -a;
      }
      rr.subVectors(this.origin, t2);
      const o = s * this.direction.dot(ar.crossVectors(rr, ar));
      if (o < 0) return null;
      const l2 = s * this.direction.dot(sr.cross(rr));
      if (l2 < 0) return null;
      if (o + l2 > a) return null;
      const c6 = -s * rr.dot(or);
      return c6 < 0 ? null : this.at(c6 / a, r);
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
  var cr = class _cr {
    constructor(t2, e2, n2, i, r, s, a, o, l2, c6, h2, u2, d2, p2, m, f) {
      _cr.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, n2, i, r, s, a, o, l2, c6, h2, u2, d2, p2, m, f);
    }
    set(t2, e2, n2, i, r, s, a, o, l2, c6, h2, u2, d2, p2, m, f) {
      const g = this.elements;
      return g[0] = t2, g[4] = e2, g[8] = n2, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l2, g[6] = c6, g[10] = h2, g[14] = u2, g[3] = d2, g[7] = p2, g[11] = m, g[15] = f, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _cr().fromArray(this.elements);
    }
    copy(t2) {
      const e2 = this.elements, n2 = t2.elements;
      return e2[0] = n2[0], e2[1] = n2[1], e2[2] = n2[2], e2[3] = n2[3], e2[4] = n2[4], e2[5] = n2[5], e2[6] = n2[6], e2[7] = n2[7], e2[8] = n2[8], e2[9] = n2[9], e2[10] = n2[10], e2[11] = n2[11], e2[12] = n2[12], e2[13] = n2[13], e2[14] = n2[14], e2[15] = n2[15], this;
    }
    copyPosition(t2) {
      const e2 = this.elements, n2 = t2.elements;
      return e2[12] = n2[12], e2[13] = n2[13], e2[14] = n2[14], this;
    }
    setFromMatrix3(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e2, n2) {
      return t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), n2.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e2, n2) {
      return this.set(t2.x, e2.x, n2.x, 0, t2.y, e2.y, n2.y, 0, t2.z, e2.z, n2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e2 = this.elements, n2 = t2.elements, i = 1 / hr.setFromMatrixColumn(t2, 0).length(), r = 1 / hr.setFromMatrixColumn(t2, 1).length(), s = 1 / hr.setFromMatrixColumn(t2, 2).length();
      return e2[0] = n2[0] * i, e2[1] = n2[1] * i, e2[2] = n2[2] * i, e2[3] = 0, e2[4] = n2[4] * r, e2[5] = n2[5] * r, e2[6] = n2[6] * r, e2[7] = 0, e2[8] = n2[8] * s, e2[9] = n2[9] * s, e2[10] = n2[10] * s, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e2 = this.elements, n2 = t2.x, i = t2.y, r = t2.z, s = Math.cos(n2), a = Math.sin(n2), o = Math.cos(i), l2 = Math.sin(i), c6 = Math.cos(r), h2 = Math.sin(r);
      if ("XYZ" === t2.order) {
        const t3 = s * c6, n3 = s * h2, i2 = a * c6, r2 = a * h2;
        e2[0] = o * c6, e2[4] = -o * h2, e2[8] = l2, e2[1] = n3 + i2 * l2, e2[5] = t3 - r2 * l2, e2[9] = -a * o, e2[2] = r2 - t3 * l2, e2[6] = i2 + n3 * l2, e2[10] = s * o;
      } else if ("YXZ" === t2.order) {
        const t3 = o * c6, n3 = o * h2, i2 = l2 * c6, r2 = l2 * h2;
        e2[0] = t3 + r2 * a, e2[4] = i2 * a - n3, e2[8] = s * l2, e2[1] = s * h2, e2[5] = s * c6, e2[9] = -a, e2[2] = n3 * a - i2, e2[6] = r2 + t3 * a, e2[10] = s * o;
      } else if ("ZXY" === t2.order) {
        const t3 = o * c6, n3 = o * h2, i2 = l2 * c6, r2 = l2 * h2;
        e2[0] = t3 - r2 * a, e2[4] = -s * h2, e2[8] = i2 + n3 * a, e2[1] = n3 + i2 * a, e2[5] = s * c6, e2[9] = r2 - t3 * a, e2[2] = -s * l2, e2[6] = a, e2[10] = s * o;
      } else if ("ZYX" === t2.order) {
        const t3 = s * c6, n3 = s * h2, i2 = a * c6, r2 = a * h2;
        e2[0] = o * c6, e2[4] = i2 * l2 - n3, e2[8] = t3 * l2 + r2, e2[1] = o * h2, e2[5] = r2 * l2 + t3, e2[9] = n3 * l2 - i2, e2[2] = -l2, e2[6] = a * o, e2[10] = s * o;
      } else if ("YZX" === t2.order) {
        const t3 = s * o, n3 = s * l2, i2 = a * o, r2 = a * l2;
        e2[0] = o * c6, e2[4] = r2 - t3 * h2, e2[8] = i2 * h2 + n3, e2[1] = h2, e2[5] = s * c6, e2[9] = -a * c6, e2[2] = -l2 * c6, e2[6] = n3 * h2 + i2, e2[10] = t3 - r2 * h2;
      } else if ("XZY" === t2.order) {
        const t3 = s * o, n3 = s * l2, i2 = a * o, r2 = a * l2;
        e2[0] = o * c6, e2[4] = -h2, e2[8] = l2 * c6, e2[1] = t3 * h2 + r2, e2[5] = s * c6, e2[9] = n3 * h2 - i2, e2[2] = i2 * h2 - n3, e2[6] = a * c6, e2[10] = r2 * h2 + t3;
      }
      return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(dr, t2, pr);
    }
    lookAt(t2, e2, n2) {
      const i = this.elements;
      return gr.subVectors(t2, e2), 0 === gr.lengthSq() && (gr.z = 1), gr.normalize(), mr.crossVectors(n2, gr), 0 === mr.lengthSq() && (1 === Math.abs(n2.z) ? gr.x += 1e-4 : gr.z += 1e-4, gr.normalize(), mr.crossVectors(n2, gr)), mr.normalize(), fr.crossVectors(gr, mr), i[0] = mr.x, i[4] = fr.x, i[8] = gr.x, i[1] = mr.y, i[5] = fr.y, i[9] = gr.y, i[2] = mr.z, i[6] = fr.z, i[10] = gr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const n2 = t2.elements, i = e2.elements, r = this.elements, s = n2[0], a = n2[4], o = n2[8], l2 = n2[12], c6 = n2[1], h2 = n2[5], u2 = n2[9], d2 = n2[13], p2 = n2[2], m = n2[6], f = n2[10], g = n2[14], _ = n2[3], v = n2[7], x = n2[11], y = n2[15], M3 = i[0], S = i[4], b = i[8], E = i[12], T = i[1], w = i[5], A = i[9], R = i[13], C = i[2], P2 = i[6], L2 = i[10], I = i[14], U = i[3], N = i[7], D = i[11], O = i[15];
      return r[0] = s * M3 + a * T + o * C + l2 * U, r[4] = s * S + a * w + o * P2 + l2 * N, r[8] = s * b + a * A + o * L2 + l2 * D, r[12] = s * E + a * R + o * I + l2 * O, r[1] = c6 * M3 + h2 * T + u2 * C + d2 * U, r[5] = c6 * S + h2 * w + u2 * P2 + d2 * N, r[9] = c6 * b + h2 * A + u2 * L2 + d2 * D, r[13] = c6 * E + h2 * R + u2 * I + d2 * O, r[2] = p2 * M3 + m * T + f * C + g * U, r[6] = p2 * S + m * w + f * P2 + g * N, r[10] = p2 * b + m * A + f * L2 + g * D, r[14] = p2 * E + m * R + f * I + g * O, r[3] = _ * M3 + v * T + x * C + y * U, r[7] = _ * S + v * w + x * P2 + y * N, r[11] = _ * b + v * A + x * L2 + y * D, r[15] = _ * E + v * R + x * I + y * O, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], n2 = t2[4], i = t2[8], r = t2[12], s = t2[1], a = t2[5], o = t2[9], l2 = t2[13], c6 = t2[2], h2 = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r * o * h2 - i * l2 * h2 - r * a * u2 + n2 * l2 * u2 + i * a * d2 - n2 * o * d2) + t2[7] * (+e2 * o * d2 - e2 * l2 * u2 + r * s * u2 - i * s * d2 + i * l2 * c6 - r * o * c6) + t2[11] * (+e2 * l2 * h2 - e2 * a * d2 - r * s * h2 + n2 * s * d2 + r * a * c6 - n2 * l2 * c6) + t2[15] * (-i * a * c6 - e2 * o * h2 + e2 * a * u2 + i * s * h2 - n2 * s * u2 + n2 * o * c6);
    }
    transpose() {
      const t2 = this.elements;
      let e2;
      return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
    }
    setPosition(t2, e2, n2) {
      const i = this.elements;
      return t2.isVector3 ? (i[12] = t2.x, i[13] = t2.y, i[14] = t2.z) : (i[12] = t2, i[13] = e2, i[14] = n2), this;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], n2 = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c6 = t2[8], h2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m = t2[13], f = t2[14], g = t2[15], _ = h2 * f * l2 - m * u2 * l2 + m * o * d2 - a * f * d2 - h2 * o * g + a * u2 * g, v = p2 * u2 * l2 - c6 * f * l2 - p2 * o * d2 + s * f * d2 + c6 * o * g - s * u2 * g, x = c6 * m * l2 - p2 * h2 * l2 + p2 * a * d2 - s * m * d2 - c6 * a * g + s * h2 * g, y = p2 * h2 * o - c6 * m * o - p2 * a * u2 + s * m * u2 + c6 * a * f - s * h2 * f, M3 = e2 * _ + n2 * v + i * x + r * y;
      if (0 === M3) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / M3;
      return t2[0] = _ * S, t2[1] = (m * u2 * r - h2 * f * r - m * i * d2 + n2 * f * d2 + h2 * i * g - n2 * u2 * g) * S, t2[2] = (a * f * r - m * o * r + m * i * l2 - n2 * f * l2 - a * i * g + n2 * o * g) * S, t2[3] = (h2 * o * r - a * u2 * r - h2 * i * l2 + n2 * u2 * l2 + a * i * d2 - n2 * o * d2) * S, t2[4] = v * S, t2[5] = (c6 * f * r - p2 * u2 * r + p2 * i * d2 - e2 * f * d2 - c6 * i * g + e2 * u2 * g) * S, t2[6] = (p2 * o * r - s * f * r - p2 * i * l2 + e2 * f * l2 + s * i * g - e2 * o * g) * S, t2[7] = (s * u2 * r - c6 * o * r + c6 * i * l2 - e2 * u2 * l2 - s * i * d2 + e2 * o * d2) * S, t2[8] = x * S, t2[9] = (p2 * h2 * r - c6 * m * r - p2 * n2 * d2 + e2 * m * d2 + c6 * n2 * g - e2 * h2 * g) * S, t2[10] = (s * m * r - p2 * a * r + p2 * n2 * l2 - e2 * m * l2 - s * n2 * g + e2 * a * g) * S, t2[11] = (c6 * a * r - s * h2 * r - c6 * n2 * l2 + e2 * h2 * l2 + s * n2 * d2 - e2 * a * d2) * S, t2[12] = y * S, t2[13] = (c6 * m * i - p2 * h2 * i + p2 * n2 * u2 - e2 * m * u2 - c6 * n2 * f + e2 * h2 * f) * S, t2[14] = (p2 * a * i - s * m * i - p2 * n2 * o + e2 * m * o + s * n2 * f - e2 * a * f) * S, t2[15] = (s * h2 * i - c6 * a * i + c6 * n2 * o - e2 * h2 * o - s * n2 * u2 + e2 * a * u2) * S, this;
    }
    scale(t2) {
      const e2 = this.elements, n2 = t2.x, i = t2.y, r = t2.z;
      return e2[0] *= n2, e2[4] *= i, e2[8] *= r, e2[1] *= n2, e2[5] *= i, e2[9] *= r, e2[2] *= n2, e2[6] *= i, e2[10] *= r, e2[3] *= n2, e2[7] *= i, e2[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], n2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e2, n2, i));
    }
    makeTranslation(t2, e2, n2) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, n2, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e2 = Math.cos(t2), n2 = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e2, -n2, 0, 0, n2, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e2 = Math.cos(t2), n2 = Math.sin(t2);
      return this.set(e2, 0, n2, 0, 0, 1, 0, 0, -n2, 0, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e2 = Math.cos(t2), n2 = Math.sin(t2);
      return this.set(e2, -n2, 0, 0, n2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e2) {
      const n2 = Math.cos(e2), i = Math.sin(e2), r = 1 - n2, s = t2.x, a = t2.y, o = t2.z, l2 = r * s, c6 = r * a;
      return this.set(l2 * s + n2, l2 * a - i * o, l2 * o + i * a, 0, l2 * a + i * o, c6 * a + n2, c6 * o - i * s, 0, l2 * o - i * a, c6 * o + i * s, r * o * o + n2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2, n2) {
      return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, n2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e2, n2, i, r, s) {
      return this.set(1, n2, r, 0, t2, 1, s, 0, e2, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e2, n2) {
      const i = this.elements, r = e2._x, s = e2._y, a = e2._z, o = e2._w, l2 = r + r, c6 = s + s, h2 = a + a, u2 = r * l2, d2 = r * c6, p2 = r * h2, m = s * c6, f = s * h2, g = a * h2, _ = o * l2, v = o * c6, x = o * h2, y = n2.x, M3 = n2.y, S = n2.z;
      return i[0] = (1 - (m + g)) * y, i[1] = (d2 + x) * y, i[2] = (p2 - v) * y, i[3] = 0, i[4] = (d2 - x) * M3, i[5] = (1 - (u2 + g)) * M3, i[6] = (f + _) * M3, i[7] = 0, i[8] = (p2 + v) * S, i[9] = (f - _) * S, i[10] = (1 - (u2 + m)) * S, i[11] = 0, i[12] = t2.x, i[13] = t2.y, i[14] = t2.z, i[15] = 1, this;
    }
    decompose(t2, e2, n2) {
      const i = this.elements;
      let r = hr.set(i[0], i[1], i[2]).length();
      const s = hr.set(i[4], i[5], i[6]).length(), a = hr.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t2.x = i[12], t2.y = i[13], t2.z = i[14], ur.copy(this);
      const o = 1 / r, l2 = 1 / s, c6 = 1 / a;
      return ur.elements[0] *= o, ur.elements[1] *= o, ur.elements[2] *= o, ur.elements[4] *= l2, ur.elements[5] *= l2, ur.elements[6] *= l2, ur.elements[8] *= c6, ur.elements[9] *= c6, ur.elements[10] *= c6, e2.setFromRotationMatrix(ur), n2.x = r, n2.y = s, n2.z = a, this;
    }
    makePerspective(t2, e2, n2, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 2 * r / (e2 - t2), c6 = 2 * r / (n2 - i), h2 = (e2 + t2) / (e2 - t2), u2 = (n2 + i) / (n2 - i);
      let d2, p2;
      if (a === Bn) d2 = -(s + r) / (s - r), p2 = -2 * s * r / (s - r);
      else {
        if (a !== zn) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        d2 = -s / (s - r), p2 = -s * r / (s - r);
      }
      return o[0] = l2, o[4] = 0, o[8] = h2, o[12] = 0, o[1] = 0, o[5] = c6, o[9] = u2, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d2, o[14] = p2, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }
    makeOrthographic(t2, e2, n2, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 1 / (e2 - t2), c6 = 1 / (n2 - i), h2 = 1 / (s - r), u2 = (e2 + t2) * l2, d2 = (n2 + i) * c6;
      let p2, m;
      if (a === Bn) p2 = (s + r) * h2, m = -2 * h2;
      else {
        if (a !== zn) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        p2 = r * h2, m = -1 * h2;
      }
      return o[0] = 2 * l2, o[4] = 0, o[8] = 0, o[12] = -u2, o[1] = 0, o[5] = 2 * c6, o[9] = 0, o[13] = -d2, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -p2, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }
    equals(t2) {
      const e2 = this.elements, n2 = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== n2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let n2 = 0; n2 < 16; n2++) this.elements[n2] = t2[n2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const n2 = this.elements;
      return t2[e2] = n2[0], t2[e2 + 1] = n2[1], t2[e2 + 2] = n2[2], t2[e2 + 3] = n2[3], t2[e2 + 4] = n2[4], t2[e2 + 5] = n2[5], t2[e2 + 6] = n2[6], t2[e2 + 7] = n2[7], t2[e2 + 8] = n2[8], t2[e2 + 9] = n2[9], t2[e2 + 10] = n2[10], t2[e2 + 11] = n2[11], t2[e2 + 12] = n2[12], t2[e2 + 13] = n2[13], t2[e2 + 14] = n2[14], t2[e2 + 15] = n2[15], t2;
    }
  };
  var hr = new Ui();
  var ur = new cr();
  var dr = new Ui(0, 0, 0);
  var pr = new Ui(1, 1, 1);
  var mr = new Ui();
  var fr = new Ui();
  var gr = new Ui();
  var _r = new cr();
  var vr = new Ii();
  var xr = class _xr {
    constructor(t2 = 0, e2 = 0, n2 = 0, i = _xr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e2, this._z = n2, this._order = i;
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
    set(t2, e2, n2, i = this._order) {
      return this._x = t2, this._y = e2, this._z = n2, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e2 = this._order, n2 = true) {
      const i = t2.elements, r = i[0], s = i[4], a = i[8], o = i[1], l2 = i[5], c6 = i[9], h2 = i[2], u2 = i[6], d2 = i[10];
      switch (e2) {
        case "XYZ":
          this._y = Math.asin(jn(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-c6, d2), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u2, l2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-jn(c6, -1, 1)), Math.abs(c6) < 0.9999999 ? (this._y = Math.atan2(a, d2), this._z = Math.atan2(o, l2)) : (this._y = Math.atan2(-h2, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(jn(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-h2, d2), this._z = Math.atan2(-s, l2)) : (this._y = 0, this._z = Math.atan2(o, r));
          break;
        case "ZYX":
          this._y = Math.asin(-jn(h2, -1, 1)), Math.abs(h2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l2));
          break;
        case "YZX":
          this._z = Math.asin(jn(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-c6, l2), this._y = Math.atan2(-h2, r)) : (this._x = 0, this._y = Math.atan2(a, d2));
          break;
        case "XZY":
          this._z = Math.asin(-jn(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u2, l2), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c6, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
      }
      return this._order = e2, true === n2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e2, n2) {
      return _r.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(_r, e2, n2);
    }
    setFromVector3(t2, e2 = this._order) {
      return this.set(t2.x, t2.y, t2.z, e2);
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
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
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
  xr.DEFAULT_ORDER = "XYZ";
  var yr = class {
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
  var Mr = 0;
  var Sr = new Ui();
  var br = new Ii();
  var Er = new cr();
  var Tr = new Ui();
  var wr = new Ui();
  var Ar = new Ui();
  var Rr = new Ii();
  var Cr = new Ui(1, 0, 0);
  var Pr = new Ui(0, 1, 0);
  var Lr = new Ui(0, 0, 1);
  var Ir = { type: "added" };
  var Ur = { type: "removed" };
  var Nr = class _Nr extends Hn {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Mr++ }), this.uuid = Xn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Nr.DEFAULT_UP.clone();
      const t2 = new Ui(), e2 = new xr(), n2 = new Ii(), i = new Ui(1, 1, 1);
      e2._onChange(function() {
        n2.setFromEuler(e2, false);
      }), n2._onChange(function() {
        e2.setFromQuaternion(n2, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: n2 }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new cr() }, normalMatrix: { value: new ei() } }), this.matrix = new cr(), this.matrixWorld = new cr(), this.matrixAutoUpdate = _Nr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new yr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    setRotationFromAxisAngle(t2, e2) {
      this.quaternion.setFromAxisAngle(t2, e2);
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
    rotateOnAxis(t2, e2) {
      return br.setFromAxisAngle(t2, e2), this.quaternion.multiply(br), this;
    }
    rotateOnWorldAxis(t2, e2) {
      return br.setFromAxisAngle(t2, e2), this.quaternion.premultiply(br), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(Cr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(Pr, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Lr, t2);
    }
    translateOnAxis(t2, e2) {
      return Sr.copy(t2).applyQuaternion(this.quaternion), this.position.add(Sr.multiplyScalar(e2)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(Cr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(Pr, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Lr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(Er.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e2, n2) {
      t2.isVector3 ? Tr.copy(t2) : Tr.set(t2, e2, n2);
      const i = this.parent;
      this.updateWorldMatrix(true, false), wr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Er.lookAt(wr, Tr, this.up) : Er.lookAt(Tr, wr, this.up), this.quaternion.setFromRotationMatrix(Er), i && (Er.extractRotation(i.matrixWorld), br.setFromRotationMatrix(Er), this.quaternion.premultiply(br.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (null !== t2.parent && t2.parent.remove(t2), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Ir)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Ur)), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), Er.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), Er.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(Er), this.add(t2), t2.updateWorldMatrix(false, true), this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e2) {
      if (this[t2] === e2) return this;
      for (let n2 = 0, i = this.children.length; n2 < i; n2++) {
        const i2 = this.children[n2].getObjectByProperty(t2, e2);
        if (void 0 !== i2) return i2;
      }
    }
    getObjectsByProperty(t2, e2, n2 = []) {
      this[t2] === e2 && n2.push(this);
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) i[r].getObjectsByProperty(t2, e2, n2);
      return n2;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(wr, t2, Ar), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(wr, Rr, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e2 = this.matrixWorld.elements;
      return t2.set(e2[8], e2[9], e2[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e2 = this.children;
      for (let n2 = 0, i = e2.length; n2 < i; n2++) e2[n2].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e2 = this.children;
      for (let n2 = 0, i = e2.length; n2 < i; n2++) e2[n2].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e2 = this.parent;
      null !== e2 && (t2(e2), e2.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e2 = this.children;
      for (let n2 = 0, i = e2.length; n2 < i; n2++) {
        const i2 = e2[n2];
        true !== i2.matrixWorldAutoUpdate && true !== t2 || i2.updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e2) {
      const n2 = this.parent;
      if (true === t2 && null !== n2 && true === n2.matrixWorldAutoUpdate && n2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), true === e2) {
        const t3 = this.children;
        for (let e3 = 0, n3 = t3.length; e3 < n3; e3++) {
          const n4 = t3[e3];
          true === n4.matrixWorldAutoUpdate && n4.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2, n2 = {};
      e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n2.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
      const i = {};
      function r(e3, n3) {
        return void 0 === e3[n3.uuid] && (e3[n3.uuid] = n3.toJSON(t2)), n3.uuid;
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), true === this.castShadow && (i.castShadow = true), true === this.receiveShadow && (i.receiveShadow = true), false === this.visible && (i.visible = false), false === this.frustumCulled && (i.frustumCulled = false), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), false === this.matrixAutoUpdate && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((t3) => ({ boxInitialized: t3.boxInitialized, boxMin: t3.box.min.toArray(), boxMax: t3.box.max.toArray(), sphereInitialized: t3.sphereInitialized, sphereRadius: t3.sphere.radius, sphereCenter: t3.sphere.center.toArray() })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t2), null !== this.boundingSphere && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), null !== this.boundingBox && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t2.geometries, this.geometry);
        const e3 = this.geometry.parameters;
        if (void 0 !== e3 && void 0 !== e3.shapes) {
          const n3 = e3.shapes;
          if (Array.isArray(n3)) for (let e4 = 0, i2 = n3.length; e4 < i2; e4++) {
            const i3 = n3[e4];
            r(t2.shapes, i3);
          }
          else r(t2.shapes, n3);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t2.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e3 = [];
        for (let n3 = 0, i2 = this.material.length; n3 < i2; n3++) e3.push(r(t2.materials, this.material[n3]));
        i.material = e3;
      } else i.material = r(t2.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e3 = 0; e3 < this.children.length; e3++) i.children.push(this.children[e3].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e3 = 0; e3 < this.animations.length; e3++) {
          const n3 = this.animations[e3];
          i.animations.push(r(t2.animations, n3));
        }
      }
      if (e2) {
        const e3 = s(t2.geometries), i2 = s(t2.materials), r2 = s(t2.textures), a = s(t2.images), o = s(t2.shapes), l2 = s(t2.skeletons), c6 = s(t2.animations), h2 = s(t2.nodes);
        e3.length > 0 && (n2.geometries = e3), i2.length > 0 && (n2.materials = i2), r2.length > 0 && (n2.textures = r2), a.length > 0 && (n2.images = a), o.length > 0 && (n2.shapes = o), l2.length > 0 && (n2.skeletons = l2), c6.length > 0 && (n2.animations = c6), h2.length > 0 && (n2.nodes = h2);
      }
      return n2.object = i, n2;
      function s(t3) {
        const e3 = [];
        for (const n3 in t3) {
          const i2 = t3[n3];
          delete i2.metadata, e3.push(i2);
        }
        return e3;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e2 = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
        const n2 = t2.children[e3];
        this.add(n2.clone());
      }
      return this;
    }
  };
  Nr.DEFAULT_UP = new Ui(0, 1, 0), Nr.DEFAULT_MATRIX_AUTO_UPDATE = true, Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Dr = new Ui();
  var Or = new Ui();
  var Fr = new Ui();
  var Br = new Ui();
  var zr = new Ui();
  var Hr = new Ui();
  var Vr = new Ui();
  var kr = new Ui();
  var Gr = new Ui();
  var Wr = new Ui();
  var Xr = false;
  var jr = class _jr {
    constructor(t2 = new Ui(), e2 = new Ui(), n2 = new Ui()) {
      this.a = t2, this.b = e2, this.c = n2;
    }
    static getNormal(t2, e2, n2, i) {
      i.subVectors(n2, e2), Dr.subVectors(t2, e2), i.cross(Dr);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t2, e2, n2, i, r) {
      Dr.subVectors(i, e2), Or.subVectors(n2, e2), Fr.subVectors(t2, e2);
      const s = Dr.dot(Dr), a = Dr.dot(Or), o = Dr.dot(Fr), l2 = Or.dot(Or), c6 = Or.dot(Fr), h2 = s * l2 - a * a;
      if (0 === h2) return r.set(0, 0, 0), null;
      const u2 = 1 / h2, d2 = (l2 * o - a * c6) * u2, p2 = (s * c6 - a * o) * u2;
      return r.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e2, n2, i) {
      return null !== this.getBarycoord(t2, e2, n2, i, Br) && (Br.x >= 0 && Br.y >= 0 && Br.x + Br.y <= 1);
    }
    static getUV(t2, e2, n2, i, r, s, a, o) {
      return false === Xr && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xr = true), this.getInterpolation(t2, e2, n2, i, r, s, a, o);
    }
    static getInterpolation(t2, e2, n2, i, r, s, a, o) {
      return null === this.getBarycoord(t2, e2, n2, i, Br) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, Br.x), o.addScaledVector(s, Br.y), o.addScaledVector(a, Br.z), o);
    }
    static isFrontFacing(t2, e2, n2, i) {
      return Dr.subVectors(n2, e2), Or.subVectors(t2, e2), Dr.cross(Or).dot(i) < 0;
    }
    set(t2, e2, n2) {
      return this.a.copy(t2), this.b.copy(e2), this.c.copy(n2), this;
    }
    setFromPointsAndIndices(t2, e2, n2, i) {
      return this.a.copy(t2[e2]), this.b.copy(t2[n2]), this.c.copy(t2[i]), this;
    }
    setFromAttributeAndIndices(t2, e2, n2, i) {
      return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, n2), this.c.fromBufferAttribute(t2, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Dr.subVectors(this.c, this.b), Or.subVectors(this.a, this.b), 0.5 * Dr.cross(Or).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _jr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e2) {
      return _jr.getBarycoord(t2, this.a, this.b, this.c, e2);
    }
    getUV(t2, e2, n2, i, r) {
      return false === Xr && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xr = true), _jr.getInterpolation(t2, this.a, this.b, this.c, e2, n2, i, r);
    }
    getInterpolation(t2, e2, n2, i, r) {
      return _jr.getInterpolation(t2, this.a, this.b, this.c, e2, n2, i, r);
    }
    containsPoint(t2) {
      return _jr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _jr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e2) {
      const n2 = this.a, i = this.b, r = this.c;
      let s, a;
      zr.subVectors(i, n2), Hr.subVectors(r, n2), kr.subVectors(t2, n2);
      const o = zr.dot(kr), l2 = Hr.dot(kr);
      if (o <= 0 && l2 <= 0) return e2.copy(n2);
      Gr.subVectors(t2, i);
      const c6 = zr.dot(Gr), h2 = Hr.dot(Gr);
      if (c6 >= 0 && h2 <= c6) return e2.copy(i);
      const u2 = o * h2 - c6 * l2;
      if (u2 <= 0 && o >= 0 && c6 <= 0) return s = o / (o - c6), e2.copy(n2).addScaledVector(zr, s);
      Wr.subVectors(t2, r);
      const d2 = zr.dot(Wr), p2 = Hr.dot(Wr);
      if (p2 >= 0 && d2 <= p2) return e2.copy(r);
      const m = d2 * l2 - o * p2;
      if (m <= 0 && l2 >= 0 && p2 <= 0) return a = l2 / (l2 - p2), e2.copy(n2).addScaledVector(Hr, a);
      const f = c6 * p2 - d2 * h2;
      if (f <= 0 && h2 - c6 >= 0 && d2 - p2 >= 0) return Vr.subVectors(r, i), a = (h2 - c6) / (h2 - c6 + (d2 - p2)), e2.copy(i).addScaledVector(Vr, a);
      const g = 1 / (f + m + u2);
      return s = m * g, a = u2 * g, e2.copy(n2).addScaledVector(zr, s).addScaledVector(Hr, a);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var qr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Yr = { h: 0, s: 0, l: 0 };
  var Zr = { h: 0, s: 0, l: 0 };
  function Jr(t2, e2, n2) {
    return n2 < 0 && (n2 += 1), n2 > 1 && (n2 -= 1), n2 < 1 / 6 ? t2 + 6 * (e2 - t2) * n2 : n2 < 0.5 ? e2 : n2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - n2) : t2;
  }
  var Kr = class {
    constructor(t2, e2, n2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, n2);
    }
    set(t2, e2, n2) {
      if (void 0 === e2 && void 0 === n2) {
        const e3 = t2;
        e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
      } else this.setRGB(t2, e2, n2);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e2 = qe) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, mi.toWorkingColorSpace(this, e2), this;
    }
    setRGB(t2, e2, n2, i = mi.workingColorSpace) {
      return this.r = t2, this.g = e2, this.b = n2, mi.toWorkingColorSpace(this, i), this;
    }
    setHSL(t2, e2, n2, i = mi.workingColorSpace) {
      if (t2 = qn(t2, 1), e2 = jn(e2, 0, 1), n2 = jn(n2, 0, 1), 0 === e2) this.r = this.g = this.b = n2;
      else {
        const i2 = n2 <= 0.5 ? n2 * (1 + e2) : n2 + e2 - n2 * e2, r = 2 * n2 - i2;
        this.r = Jr(r, i2, t2 + 1 / 3), this.g = Jr(r, i2, t2), this.b = Jr(r, i2, t2 - 1 / 3);
      }
      return mi.toWorkingColorSpace(this, i), this;
    }
    setStyle(t2, e2 = qe) {
      function n2(e3) {
        void 0 !== e3 && parseFloat(e3) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r;
        const s = i[1], a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n2(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e2);
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n2(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e2);
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n2(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e2);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t2);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const n3 = i[1], r = n3.length;
        if (3 === r) return this.setRGB(parseInt(n3.charAt(0), 16) / 15, parseInt(n3.charAt(1), 16) / 15, parseInt(n3.charAt(2), 16) / 15, e2);
        if (6 === r) return this.setHex(parseInt(n3, 16), e2);
        console.warn("THREE.Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
      return this;
    }
    setColorName(t2, e2 = qe) {
      const n2 = qr[t2.toLowerCase()];
      return void 0 !== n2 ? this.setHex(n2, e2) : console.warn("THREE.Color: Unknown color " + t2), this;
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
    getHex(t2 = qe) {
      return mi.fromWorkingColorSpace($r.copy(this), t2), 65536 * Math.round(jn(255 * $r.r, 0, 255)) + 256 * Math.round(jn(255 * $r.g, 0, 255)) + Math.round(jn(255 * $r.b, 0, 255));
    }
    getHexString(t2 = qe) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e2 = mi.workingColorSpace) {
      mi.fromWorkingColorSpace($r.copy(this), e2);
      const n2 = $r.r, i = $r.g, r = $r.b, s = Math.max(n2, i, r), a = Math.min(n2, i, r);
      let o, l2;
      const c6 = (a + s) / 2;
      if (a === s) o = 0, l2 = 0;
      else {
        const t3 = s - a;
        switch (l2 = c6 <= 0.5 ? t3 / (s + a) : t3 / (2 - s - a), s) {
          case n2:
            o = (i - r) / t3 + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n2) / t3 + 2;
            break;
          case r:
            o = (n2 - i) / t3 + 4;
        }
        o /= 6;
      }
      return t2.h = o, t2.s = l2, t2.l = c6, t2;
    }
    getRGB(t2, e2 = mi.workingColorSpace) {
      return mi.fromWorkingColorSpace($r.copy(this), e2), t2.r = $r.r, t2.g = $r.g, t2.b = $r.b, t2;
    }
    getStyle(t2 = qe) {
      mi.fromWorkingColorSpace($r.copy(this), t2);
      const e2 = $r.r, n2 = $r.g, i = $r.b;
      return t2 !== qe ? `color(${t2} ${e2.toFixed(3)} ${n2.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * n2)},${Math.round(255 * i)})`;
    }
    offsetHSL(t2, e2, n2) {
      return this.getHSL(Yr), this.setHSL(Yr.h + t2, Yr.s + e2, Yr.l + n2);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e2) {
      return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
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
    lerp(t2, e2) {
      return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
    }
    lerpColors(t2, e2, n2) {
      return this.r = t2.r + (e2.r - t2.r) * n2, this.g = t2.g + (e2.g - t2.g) * n2, this.b = t2.b + (e2.b - t2.b) * n2, this;
    }
    lerpHSL(t2, e2) {
      this.getHSL(Yr), t2.getHSL(Zr);
      const n2 = Yn(Yr.h, Zr.h, e2), i = Yn(Yr.s, Zr.s, e2), r = Yn(Yr.l, Zr.l, e2);
      return this.setHSL(n2, i, r), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e2 = this.r, n2 = this.g, i = this.b, r = t2.elements;
      return this.r = r[0] * e2 + r[3] * n2 + r[6] * i, this.g = r[1] * e2 + r[4] * n2 + r[7] * i, this.b = r[2] * e2 + r[5] * n2 + r[8] * i, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e2 = 0) {
      return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var $r = new Kr();
  Kr.NAMES = qr;
  var Qr = 0;
  var ts = class extends Hn {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Qr++ }), this.uuid = Xn(), this.name = "", this.type = "Material", this.blending = 1, this.side = u, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = P, this.blendDst = L, this.blendEquation = M, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Kr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = nn, this.stencilZFail = nn, this.stencilZPass = nn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBuild() {
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e2 in t2) {
        const n2 = t2[e2];
        if (void 0 === n2) {
          console.warn(`THREE.Material: parameter '${e2}' has value of undefined.`);
          continue;
        }
        const i = this[e2];
        void 0 !== i ? i && i.isColor ? i.set(n2) : i && i.isVector3 && n2 && n2.isVector3 ? i.copy(n2) : this[e2] = n2 : console.warn(`THREE.Material: '${e2}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      e2 && (t2 = { textures: {}, images: {} });
      const n2 = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
      function i(t3) {
        const e3 = [];
        for (const n3 in t3) {
          const i2 = t3[n3];
          delete i2.metadata, e3.push(i2);
        }
        return e3;
      }
      if (n2.uuid = this.uuid, n2.type = this.type, "" !== this.name && (n2.name = this.name), this.color && this.color.isColor && (n2.color = this.color.getHex()), void 0 !== this.roughness && (n2.roughness = this.roughness), void 0 !== this.metalness && (n2.metalness = this.metalness), void 0 !== this.sheen && (n2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n2.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n2.shininess = this.shininess), void 0 !== this.clearcoat && (n2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, n2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (n2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (n2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (n2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (n2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (n2.lightMap = this.lightMap.toJSON(t2).uuid, n2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n2.aoMap = this.aoMap.toJSON(t2).uuid, n2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n2.bumpMap = this.bumpMap.toJSON(t2).uuid, n2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n2.normalMap = this.normalMap.toJSON(t2).uuid, n2.normalMapType = this.normalMapType, n2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n2.displacementMap = this.displacementMap.toJSON(t2).uuid, n2.displacementScale = this.displacementScale, n2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (n2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (n2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (n2.combine = this.combine)), void 0 !== this.envMapIntensity && (n2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (n2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (n2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n2.size = this.size), null !== this.shadowSide && (n2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n2.blending = this.blending), this.side !== u && (n2.side = this.side), true === this.vertexColors && (n2.vertexColors = true), this.opacity < 1 && (n2.opacity = this.opacity), true === this.transparent && (n2.transparent = true), this.blendSrc !== P && (n2.blendSrc = this.blendSrc), this.blendDst !== L && (n2.blendDst = this.blendDst), this.blendEquation !== M && (n2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (n2.depthFunc = this.depthFunc), false === this.depthTest && (n2.depthTest = this.depthTest), false === this.depthWrite && (n2.depthWrite = this.depthWrite), false === this.colorWrite && (n2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (n2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== nn && (n2.stencilFail = this.stencilFail), this.stencilZFail !== nn && (n2.stencilZFail = this.stencilZFail), this.stencilZPass !== nn && (n2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (n2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n2.rotation = this.rotation), true === this.polygonOffset && (n2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (n2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n2.linewidth = this.linewidth), void 0 !== this.dashSize && (n2.dashSize = this.dashSize), void 0 !== this.gapSize && (n2.gapSize = this.gapSize), void 0 !== this.scale && (n2.scale = this.scale), true === this.dithering && (n2.dithering = true), this.alphaTest > 0 && (n2.alphaTest = this.alphaTest), true === this.alphaHash && (n2.alphaHash = true), true === this.alphaToCoverage && (n2.alphaToCoverage = true), true === this.premultipliedAlpha && (n2.premultipliedAlpha = true), true === this.forceSinglePass && (n2.forceSinglePass = true), true === this.wireframe && (n2.wireframe = true), this.wireframeLinewidth > 1 && (n2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (n2.flatShading = true), false === this.visible && (n2.visible = false), false === this.toneMapped && (n2.toneMapped = false), false === this.fog && (n2.fog = false), Object.keys(this.userData).length > 0 && (n2.userData = this.userData), e2) {
        const e3 = i(t2.textures), r = i(t2.images);
        e3.length > 0 && (n2.textures = e3), r.length > 0 && (n2.images = r);
      }
      return n2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e2 = t2.clippingPlanes;
      let n2 = null;
      if (null !== e2) {
        const t3 = e2.length;
        n2 = new Array(t3);
        for (let i = 0; i !== t3; ++i) n2[i] = e2[i].clone();
      }
      return this.clippingPlanes = n2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var es = class extends ts {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Kr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Z, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var ns = is();
  function is() {
    const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), n2 = new Uint32Array(t2), i = new Uint32Array(512), r = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e3 = t3 - 127;
      e3 < -27 ? (i[t3] = 0, i[256 | t3] = 32768, r[t3] = 24, r[256 | t3] = 24) : e3 < -14 ? (i[t3] = 1024 >> -e3 - 14, i[256 | t3] = 1024 >> -e3 - 14 | 32768, r[t3] = -e3 - 1, r[256 | t3] = -e3 - 1) : e3 <= 15 ? (i[t3] = e3 + 15 << 10, i[256 | t3] = e3 + 15 << 10 | 32768, r[t3] = 13, r[256 | t3] = 13) : e3 < 128 ? (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 24, r[256 | t3] = 24) : (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 13, r[256 | t3] = 13);
    }
    const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e3 = t3 << 13, n3 = 0;
      for (; 0 == (8388608 & e3); ) e3 <<= 1, n3 -= 8388608;
      e3 &= -8388609, n3 += 947912704, s[t3] = e3 | n3;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) s[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a[t3] = t3 << 23;
    a[31] = 1199570944, a[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a[t3] = 2147483648 + (t3 - 32 << 23);
    a[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o[t3] = 1024);
    return { floatView: e2, uint32View: n2, baseTable: i, shiftTable: r, mantissaTable: s, exponentTable: a, offsetTable: o };
  }
  var os = new Ui();
  var ls = new ti();
  var cs = class {
    constructor(t2, e2, n2 = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = n2, this.usage = wn, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = It, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    get updateRange() {
      return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e2, n2) {
      t2 *= this.itemSize, n2 *= e2.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[t2 + i] = e2.array[n2 + i];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e2 = 0, n2 = this.count; e2 < n2; e2++) ls.fromBufferAttribute(this, e2), ls.applyMatrix3(t2), this.setXY(e2, ls.x, ls.y);
      else if (3 === this.itemSize) for (let e2 = 0, n2 = this.count; e2 < n2; e2++) os.fromBufferAttribute(this, e2), os.applyMatrix3(t2), this.setXYZ(e2, os.x, os.y, os.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, n2 = this.count; e2 < n2; e2++) os.fromBufferAttribute(this, e2), os.applyMatrix4(t2), this.setXYZ(e2, os.x, os.y, os.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, n2 = this.count; e2 < n2; e2++) os.fromBufferAttribute(this, e2), os.applyNormalMatrix(t2), this.setXYZ(e2, os.x, os.y, os.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, n2 = this.count; e2 < n2; e2++) os.fromBufferAttribute(this, e2), os.transformDirection(t2), this.setXYZ(e2, os.x, os.y, os.z);
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    getComponent(t2, e2) {
      let n2 = this.array[t2 * this.itemSize + e2];
      return this.normalized && (n2 = Kn(n2, this.array)), n2;
    }
    setComponent(t2, e2, n2) {
      return this.normalized && (n2 = $n(n2, this.array)), this.array[t2 * this.itemSize + e2] = n2, this;
    }
    getX(t2) {
      let e2 = this.array[t2 * this.itemSize];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
    }
    getY(t2) {
      let e2 = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
    }
    getZ(t2) {
      let e2 = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
    }
    getW(t2) {
      let e2 = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
    }
    setXY(t2, e2, n2) {
      return t2 *= this.itemSize, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = n2, this;
    }
    setXYZ(t2, e2, n2, i) {
      return t2 *= this.itemSize, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array), i = $n(i, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = n2, this.array[t2 + 2] = i, this;
    }
    setXYZW(t2, e2, n2, i, r) {
      return t2 *= this.itemSize, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array), i = $n(i, this.array), r = $n(r, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = n2, this.array[t2 + 2] = i, this.array[t2 + 3] = r, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== wn && (t2.usage = this.usage), t2;
    }
  };
  var ms = class extends cs {
    constructor(t2, e2, n2) {
      super(new Uint16Array(t2), e2, n2);
    }
  };
  var gs = class extends cs {
    constructor(t2, e2, n2) {
      super(new Uint32Array(t2), e2, n2);
    }
  };
  var vs = class extends cs {
    constructor(t2, e2, n2) {
      super(new Float32Array(t2), e2, n2);
    }
  };
  var ys = 0;
  var Ms = new cr();
  var Ss = new Nr();
  var bs = new Ui();
  var Es = new Oi();
  var Ts = new Oi();
  var ws = new Ui();
  var As = class _As extends Hn {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ys++ }), this.uuid = Xn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (ii(t2) ? gs : ms)(t2, 1) : this.index = t2, this;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e2) {
      return this.attributes[t2] = e2, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e2, n2 = 0) {
      this.groups.push({ start: t2, count: e2, materialIndex: n2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e2) {
      this.drawRange.start = t2, this.drawRange.count = e2;
    }
    applyMatrix4(t2) {
      const e2 = this.attributes.position;
      void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
      const n2 = this.attributes.normal;
      if (void 0 !== n2) {
        const e3 = new ei().getNormalMatrix(t2);
        n2.applyNormalMatrix(e3), n2.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t2), i.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return Ms.makeRotationFromQuaternion(t2), this.applyMatrix4(Ms), this;
    }
    rotateX(t2) {
      return Ms.makeRotationX(t2), this.applyMatrix4(Ms), this;
    }
    rotateY(t2) {
      return Ms.makeRotationY(t2), this.applyMatrix4(Ms), this;
    }
    rotateZ(t2) {
      return Ms.makeRotationZ(t2), this.applyMatrix4(Ms), this;
    }
    translate(t2, e2, n2) {
      return Ms.makeTranslation(t2, e2, n2), this.applyMatrix4(Ms), this;
    }
    scale(t2, e2, n2) {
      return Ms.makeScale(t2, e2, n2), this.applyMatrix4(Ms), this;
    }
    lookAt(t2) {
      return Ss.lookAt(t2), Ss.updateMatrix(), this.applyMatrix4(Ss.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(bs).negate(), this.translate(bs.x, bs.y, bs.z), this;
    }
    setFromPoints(t2) {
      const e2 = [];
      for (let n2 = 0, i = t2.length; n2 < i; n2++) {
        const i2 = t2[n2];
        e2.push(i2.x, i2.y, i2.z || 0);
      }
      return this.setAttribute("position", new vs(e2, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Oi());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Ui(-1 / 0, -1 / 0, -1 / 0), new Ui(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, n2 = e2.length; t3 < n2; t3++) {
          const n3 = e2[t3];
          Es.setFromBufferAttribute(n3), this.morphTargetsRelative ? (ws.addVectors(this.boundingBox.min, Es.min), this.boundingBox.expandByPoint(ws), ws.addVectors(this.boundingBox.max, Es.max), this.boundingBox.expandByPoint(ws)) : (this.boundingBox.expandByPoint(Es.min), this.boundingBox.expandByPoint(Es.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new tr());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Ui(), 1 / 0);
      if (t2) {
        const n2 = this.boundingSphere.center;
        if (Es.setFromBufferAttribute(t2), e2) for (let t3 = 0, n3 = e2.length; t3 < n3; t3++) {
          const n4 = e2[t3];
          Ts.setFromBufferAttribute(n4), this.morphTargetsRelative ? (ws.addVectors(Es.min, Ts.min), Es.expandByPoint(ws), ws.addVectors(Es.max, Ts.max), Es.expandByPoint(ws)) : (Es.expandByPoint(Ts.min), Es.expandByPoint(Ts.max));
        }
        Es.getCenter(n2);
        let i = 0;
        for (let e3 = 0, r = t2.count; e3 < r; e3++) ws.fromBufferAttribute(t2, e3), i = Math.max(i, n2.distanceToSquared(ws));
        if (e2) for (let r = 0, s = e2.length; r < s; r++) {
          const s2 = e2[r], a = this.morphTargetsRelative;
          for (let e3 = 0, r2 = s2.count; e3 < r2; e3++) ws.fromBufferAttribute(s2, e3), a && (bs.fromBufferAttribute(t2, e3), ws.add(bs)), i = Math.max(i, n2.distanceToSquared(ws));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e2 = this.attributes;
      if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n2 = t2.array, i = e2.position.array, r = e2.normal.array, s = e2.uv.array, a = i.length / 3;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new cs(new Float32Array(4 * a), 4));
      const o = this.getAttribute("tangent").array, l2 = [], c6 = [];
      for (let t3 = 0; t3 < a; t3++) l2[t3] = new Ui(), c6[t3] = new Ui();
      const h2 = new Ui(), u2 = new Ui(), d2 = new Ui(), p2 = new ti(), m = new ti(), f = new ti(), g = new Ui(), _ = new Ui();
      function v(t3, e3, n3) {
        h2.fromArray(i, 3 * t3), u2.fromArray(i, 3 * e3), d2.fromArray(i, 3 * n3), p2.fromArray(s, 2 * t3), m.fromArray(s, 2 * e3), f.fromArray(s, 2 * n3), u2.sub(h2), d2.sub(h2), m.sub(p2), f.sub(p2);
        const r2 = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r2) && (g.copy(u2).multiplyScalar(f.y).addScaledVector(d2, -m.y).multiplyScalar(r2), _.copy(d2).multiplyScalar(m.x).addScaledVector(u2, -f.x).multiplyScalar(r2), l2[t3].add(g), l2[e3].add(g), l2[n3].add(g), c6[t3].add(_), c6[e3].add(_), c6[n3].add(_));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n2.length }]);
      for (let t3 = 0, e3 = x.length; t3 < e3; ++t3) {
        const e4 = x[t3], i2 = e4.start;
        for (let t4 = i2, r2 = i2 + e4.count; t4 < r2; t4 += 3) v(n2[t4 + 0], n2[t4 + 1], n2[t4 + 2]);
      }
      const y = new Ui(), M3 = new Ui(), S = new Ui(), b = new Ui();
      function E(t3) {
        S.fromArray(r, 3 * t3), b.copy(S);
        const e3 = l2[t3];
        y.copy(e3), y.sub(S.multiplyScalar(S.dot(e3))).normalize(), M3.crossVectors(b, e3);
        const n3 = M3.dot(c6[t3]) < 0 ? -1 : 1;
        o[4 * t3] = y.x, o[4 * t3 + 1] = y.y, o[4 * t3 + 2] = y.z, o[4 * t3 + 3] = n3;
      }
      for (let t3 = 0, e3 = x.length; t3 < e3; ++t3) {
        const e4 = x[t3], i2 = e4.start;
        for (let t4 = i2, r2 = i2 + e4.count; t4 < r2; t4 += 3) E(n2[t4 + 0]), E(n2[t4 + 1]), E(n2[t4 + 2]);
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e2 = this.getAttribute("position");
      if (void 0 !== e2) {
        let n2 = this.getAttribute("normal");
        if (void 0 === n2) n2 = new cs(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", n2);
        else for (let t3 = 0, e3 = n2.count; t3 < e3; t3++) n2.setXYZ(t3, 0, 0, 0);
        const i = new Ui(), r = new Ui(), s = new Ui(), a = new Ui(), o = new Ui(), l2 = new Ui(), c6 = new Ui(), h2 = new Ui();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m = t2.getX(u2 + 2);
          i.fromBufferAttribute(e2, d3), r.fromBufferAttribute(e2, p2), s.fromBufferAttribute(e2, m), c6.subVectors(s, r), h2.subVectors(i, r), c6.cross(h2), a.fromBufferAttribute(n2, d3), o.fromBufferAttribute(n2, p2), l2.fromBufferAttribute(n2, m), a.add(c6), o.add(c6), l2.add(c6), n2.setXYZ(d3, a.x, a.y, a.z), n2.setXYZ(p2, o.x, o.y, o.z), n2.setXYZ(m, l2.x, l2.y, l2.z);
        }
        else for (let t3 = 0, a2 = e2.count; t3 < a2; t3 += 3) i.fromBufferAttribute(e2, t3 + 0), r.fromBufferAttribute(e2, t3 + 1), s.fromBufferAttribute(e2, t3 + 2), c6.subVectors(s, r), h2.subVectors(i, r), c6.cross(h2), n2.setXYZ(t3 + 0, c6.x, c6.y, c6.z), n2.setXYZ(t3 + 1, c6.x, c6.y, c6.z), n2.setXYZ(t3 + 2, c6.x, c6.y, c6.z);
        this.normalizeNormals(), n2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e2 = 0, n2 = t2.count; e2 < n2; e2++) ws.fromBufferAttribute(t2, e2), ws.normalize(), t2.setXYZ(e2, ws.x, ws.y, ws.z);
    }
    toNonIndexed() {
      function t2(t3, e3) {
        const n3 = t3.array, i2 = t3.itemSize, r2 = t3.normalized, s2 = new n3.constructor(e3.length * i2);
        let a = 0, o = 0;
        for (let r3 = 0, l2 = e3.length; r3 < l2; r3++) {
          a = t3.isInterleavedBufferAttribute ? e3[r3] * t3.data.stride + t3.offset : e3[r3] * i2;
          for (let t4 = 0; t4 < i2; t4++) s2[o++] = n3[a++];
        }
        return new cs(s2, i2, r2);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e2 = new _As(), n2 = this.index.array, i = this.attributes;
      for (const r2 in i) {
        const s2 = t2(i[r2], n2);
        e2.setAttribute(r2, s2);
      }
      const r = this.morphAttributes;
      for (const i2 in r) {
        const s2 = [], a = r[i2];
        for (let e3 = 0, i3 = a.length; e3 < i3; e3++) {
          const i4 = t2(a[e3], n2);
          s2.push(i4);
        }
        e2.morphAttributes[i2] = s2;
      }
      e2.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t3 = 0, n3 = s.length; t3 < n3; t3++) {
        const n4 = s[t3];
        e2.addGroup(n4.start, n4.count, n4.materialIndex);
      }
      return e2;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e3 = this.parameters;
        for (const n3 in e3) void 0 !== e3[n3] && (t2[n3] = e3[n3]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e2 = this.index;
      null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
      const n2 = this.attributes;
      for (const e3 in n2) {
        const i2 = n2[e3];
        t2.data.attributes[e3] = i2.toJSON(t2.data);
      }
      const i = {};
      let r = false;
      for (const e3 in this.morphAttributes) {
        const n3 = this.morphAttributes[e3], s2 = [];
        for (let e4 = 0, i2 = n3.length; e4 < i2; e4++) {
          const i3 = n3[e4];
          s2.push(i3.toJSON(t2.data));
        }
        s2.length > 0 && (i[e3] = s2, r = true);
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
      const e2 = {};
      this.name = t2.name;
      const n2 = t2.index;
      null !== n2 && this.setIndex(n2.clone(e2));
      const i = t2.attributes;
      for (const t3 in i) {
        const n3 = i[t3];
        this.setAttribute(t3, n3.clone(e2));
      }
      const r = t2.morphAttributes;
      for (const t3 in r) {
        const n3 = [], i2 = r[t3];
        for (let t4 = 0, r2 = i2.length; t4 < r2; t4++) n3.push(i2[t4].clone(e2));
        this.morphAttributes[t3] = n3;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const s = t2.groups;
      for (let t3 = 0, e3 = s.length; t3 < e3; t3++) {
        const e4 = s[t3];
        this.addGroup(e4.start, e4.count, e4.materialIndex);
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
  var Rs = new cr();
  var Cs = new lr();
  var Ps = new tr();
  var Ls = new Ui();
  var Is = new Ui();
  var Us = new Ui();
  var Ns = new Ui();
  var Ds = new Ui();
  var Os = new Ui();
  var Fs = new ti();
  var Bs = new ti();
  var zs = new ti();
  var Hs = new Ui();
  var Vs = new Ui();
  var ks = new Ui();
  var Gs = new Ui();
  var Ws = new Ui();
  var Xs = class extends Nr {
    constructor(t2 = new As(), e2 = new es()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const n2 = t2[e2[0]];
        if (void 0 !== n2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
            const e4 = n2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e2) {
      const n2 = this.geometry, i = n2.attributes.position, r = n2.morphAttributes.position, s = n2.morphTargetsRelative;
      e2.fromBufferAttribute(i, t2);
      const a = this.morphTargetInfluences;
      if (r && a) {
        Os.set(0, 0, 0);
        for (let n3 = 0, i2 = r.length; n3 < i2; n3++) {
          const i3 = a[n3], o = r[n3];
          0 !== i3 && (Ds.fromBufferAttribute(o, t2), s ? Os.addScaledVector(Ds, i3) : Os.addScaledVector(Ds.sub(e2), i3));
        }
        e2.add(Os);
      }
      return e2;
    }
    raycast(t2, e2) {
      const n2 = this.geometry, i = this.material, r = this.matrixWorld;
      if (void 0 !== i) {
        if (null === n2.boundingSphere && n2.computeBoundingSphere(), Ps.copy(n2.boundingSphere), Ps.applyMatrix4(r), Cs.copy(t2.ray).recast(t2.near), false === Ps.containsPoint(Cs.origin)) {
          if (null === Cs.intersectSphere(Ps, Ls)) return;
          if (Cs.origin.distanceToSquared(Ls) > (t2.far - t2.near) ** 2) return;
        }
        Rs.copy(r).invert(), Cs.copy(t2.ray).applyMatrix4(Rs), null !== n2.boundingBox && false === Cs.intersectsBox(n2.boundingBox) || this._computeIntersections(t2, e2, Cs);
      }
    }
    _computeIntersections(t2, e2, n2) {
      let i;
      const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l2 = r.attributes.uv, c6 = r.attributes.uv1, h2 = r.attributes.normal, u2 = r.groups, d2 = r.drawRange;
      if (null !== a) if (Array.isArray(s)) for (let r2 = 0, o2 = u2.length; r2 < o2; r2++) {
        const o3 = u2[r2], p2 = s[o3.materialIndex];
        for (let r3 = Math.max(o3.start, d2.start), s2 = Math.min(a.count, Math.min(o3.start + o3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = js(this, p2, t2, n2, l2, c6, h2, a.getX(r3), a.getX(r3 + 1), a.getX(r3 + 2)), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = o3.materialIndex, e2.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), o2 = Math.min(a.count, d2.start + d2.count); r2 < o2; r2 += 3) {
          i = js(this, s, t2, n2, l2, c6, h2, a.getX(r2), a.getX(r2 + 1), a.getX(r2 + 2)), i && (i.faceIndex = Math.floor(r2 / 3), e2.push(i));
        }
      }
      else if (void 0 !== o) if (Array.isArray(s)) for (let r2 = 0, a2 = u2.length; r2 < a2; r2++) {
        const a3 = u2[r2], p2 = s[a3.materialIndex];
        for (let r3 = Math.max(a3.start, d2.start), s2 = Math.min(o.count, Math.min(a3.start + a3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = js(this, p2, t2, n2, l2, c6, h2, r3, r3 + 1, r3 + 2), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = a3.materialIndex, e2.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), a2 = Math.min(o.count, d2.start + d2.count); r2 < a2; r2 += 3) {
          i = js(this, s, t2, n2, l2, c6, h2, r2, r2 + 1, r2 + 2), i && (i.faceIndex = Math.floor(r2 / 3), e2.push(i));
        }
      }
    }
  };
  function js(t2, e2, n2, i, r, s, a, o, l2, c6) {
    t2.getVertexPosition(o, Is), t2.getVertexPosition(l2, Us), t2.getVertexPosition(c6, Ns);
    const h2 = function(t3, e3, n3, i2, r2, s2, a2, o2) {
      let l3;
      if (l3 = e3.side === d ? i2.intersectTriangle(a2, s2, r2, true, o2) : i2.intersectTriangle(r2, s2, a2, e3.side === u, o2), null === l3) return null;
      Ws.copy(o2), Ws.applyMatrix4(t3.matrixWorld);
      const c7 = n3.ray.origin.distanceTo(Ws);
      return c7 < n3.near || c7 > n3.far ? null : { distance: c7, point: Ws.clone(), object: t3 };
    }(t2, e2, n2, i, Is, Us, Ns, Gs);
    if (h2) {
      r && (Fs.fromBufferAttribute(r, o), Bs.fromBufferAttribute(r, l2), zs.fromBufferAttribute(r, c6), h2.uv = jr.getInterpolation(Gs, Is, Us, Ns, Fs, Bs, zs, new ti())), s && (Fs.fromBufferAttribute(s, o), Bs.fromBufferAttribute(s, l2), zs.fromBufferAttribute(s, c6), h2.uv1 = jr.getInterpolation(Gs, Is, Us, Ns, Fs, Bs, zs, new ti()), h2.uv2 = h2.uv1), a && (Hs.fromBufferAttribute(a, o), Vs.fromBufferAttribute(a, l2), ks.fromBufferAttribute(a, c6), h2.normal = jr.getInterpolation(Gs, Is, Us, Ns, Hs, Vs, ks, new Ui()), h2.normal.dot(i.direction) > 0 && h2.normal.multiplyScalar(-1));
      const t3 = { a: o, b: l2, c: c6, normal: new Ui(), materialIndex: 0 };
      jr.getNormal(Is, Us, Ns, t3.normal), h2.face = t3;
    }
    return h2;
  }
  var qs = class _qs extends As {
    constructor(t2 = 1, e2 = 1, n2 = 1, i = 1, r = 1, s = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: n2, widthSegments: i, heightSegments: r, depthSegments: s };
      const a = this;
      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      const o = [], l2 = [], c6 = [], h2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e3, n3, i2, r2, s2, p3, m, f, g, _) {
        const v = s2 / f, x = p3 / g, y = s2 / 2, M3 = p3 / 2, S = m / 2, b = f + 1, E = g + 1;
        let T = 0, w = 0;
        const A = new Ui();
        for (let s3 = 0; s3 < E; s3++) {
          const a2 = s3 * x - M3;
          for (let o2 = 0; o2 < b; o2++) {
            const u3 = o2 * v - y;
            A[t3] = u3 * i2, A[e3] = a2 * r2, A[n3] = S, l2.push(A.x, A.y, A.z), A[t3] = 0, A[e3] = 0, A[n3] = m > 0 ? 1 : -1, c6.push(A.x, A.y, A.z), h2.push(o2 / f), h2.push(1 - s3 / g), T += 1;
          }
        }
        for (let t4 = 0; t4 < g; t4++) for (let e4 = 0; e4 < f; e4++) {
          const n4 = u2 + e4 + b * t4, i3 = u2 + e4 + b * (t4 + 1), r3 = u2 + (e4 + 1) + b * (t4 + 1), s3 = u2 + (e4 + 1) + b * t4;
          o.push(n4, i3, s3), o.push(i3, r3, s3), w += 6;
        }
        a.addGroup(d2, w, _), d2 += w, u2 += T;
      }
      p2("z", "y", "x", -1, -1, n2, e2, t2, s, r, 0), p2("z", "y", "x", 1, -1, n2, e2, -t2, s, r, 1), p2("x", "z", "y", 1, 1, t2, n2, e2, i, s, 2), p2("x", "z", "y", 1, -1, t2, n2, -e2, i, s, 3), p2("x", "y", "z", 1, -1, t2, e2, n2, i, r, 4), p2("x", "y", "z", -1, -1, t2, e2, -n2, i, r, 5), this.setIndex(o), this.setAttribute("position", new vs(l2, 3)), this.setAttribute("normal", new vs(c6, 3)), this.setAttribute("uv", new vs(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _qs(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function Ys(t2) {
    const e2 = {};
    for (const n2 in t2) {
      e2[n2] = {};
      for (const i in t2[n2]) {
        const r = t2[n2][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[n2][i] = null) : e2[n2][i] = r.clone() : Array.isArray(r) ? e2[n2][i] = r.slice() : e2[n2][i] = r;
      }
    }
    return e2;
  }
  function Zs(t2) {
    const e2 = {};
    for (let n2 = 0; n2 < t2.length; n2++) {
      const i = Ys(t2[n2]);
      for (const t3 in i) e2[t3] = i[t3];
    }
    return e2;
  }
  function Js(t2) {
    return null === t2.getRenderTarget() ? t2.outputColorSpace : mi.workingColorSpace;
  }
  var Ks = { clone: Ys, merge: Zs };
  var $s = class extends ts {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false, clipCullDistance: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Ys(t2.uniforms), this.uniformsGroups = function(t3) {
        const e2 = [];
        for (let n2 = 0; n2 < t3.length; n2++) e2.push(t3[n2].clone());
        return e2;
      }(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      e2.glslVersion = this.glslVersion, e2.uniforms = {};
      for (const n3 in this.uniforms) {
        const i = this.uniforms[n3].value;
        i && i.isTexture ? e2.uniforms[n3] = { type: "t", value: i.toJSON(t2).uuid } : i && i.isColor ? e2.uniforms[n3] = { type: "c", value: i.getHex() } : i && i.isVector2 ? e2.uniforms[n3] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? e2.uniforms[n3] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? e2.uniforms[n3] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? e2.uniforms[n3] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? e2.uniforms[n3] = { type: "m4", value: i.toArray() } : e2.uniforms[n3] = { value: i };
      }
      Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
      const n2 = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (n2[t3] = true);
      return Object.keys(n2).length > 0 && (e2.extensions = n2), e2;
    }
  };
  var Qs = class extends Nr {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new cr(), this.projectionMatrix = new cr(), this.projectionMatrixInverse = new cr(), this.coordinateSystem = Bn;
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e2) {
      super.updateWorldMatrix(t2, e2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ta = class extends Qs {
    constructor(t2 = 50, e2 = 1, n2 = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = n2, this.far = i, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e2 = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * Wn * Math.atan(e2), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * Gn * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * Wn * Math.atan(Math.tan(0.5 * Gn * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(t2, e2, n2, i, r, s) {
      this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = n2, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e2 = t2 * Math.tan(0.5 * Gn * this.fov) / this.zoom, n2 = 2 * e2, i = this.aspect * n2, r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = s.fullWidth, a2 = s.fullHeight;
        r += s.offsetX * i / t3, e2 -= s.offsetY * n2 / a2, i *= s.width / t3, n2 *= s.height / a2;
      }
      const a = this.filmOffset;
      0 !== a && (r += t2 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e2, e2 - n2, t2, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
    }
  };
  var ea = -90;
  var na = class extends Nr {
    constructor(t2, e2, n2) {
      super(), this.type = "CubeCamera", this.renderTarget = n2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new ta(ea, 1, t2, e2);
      i.layers = this.layers, this.add(i);
      const r = new ta(ea, 1, t2, e2);
      r.layers = this.layers, this.add(r);
      const s = new ta(ea, 1, t2, e2);
      s.layers = this.layers, this.add(s);
      const a = new ta(ea, 1, t2, e2);
      a.layers = this.layers, this.add(a);
      const o = new ta(ea, 1, t2, e2);
      o.layers = this.layers, this.add(o);
      const l2 = new ta(ea, 1, t2, e2);
      l2.layers = this.layers, this.add(l2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e2 = this.children.concat(), [n2, i, r, s, a, o] = e2;
      for (const t3 of e2) this.remove(t3);
      if (t2 === Bn) n2.up.set(0, 1, 0), n2.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
      else {
        if (t2 !== zn) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        n2.up.set(0, -1, 0), n2.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
      }
      for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e2) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n2, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r, s, a, o, l2, c6] = this.children, h2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m = n2.texture.generateMipmaps;
      n2.texture.generateMipmaps = false, t2.setRenderTarget(n2, 0, i), t2.render(e2, r), t2.setRenderTarget(n2, 1, i), t2.render(e2, s), t2.setRenderTarget(n2, 2, i), t2.render(e2, a), t2.setRenderTarget(n2, 3, i), t2.render(e2, o), t2.setRenderTarget(n2, 4, i), t2.render(e2, l2), n2.texture.generateMipmaps = m, t2.setRenderTarget(n2, 5, i), t2.render(e2, c6), t2.setRenderTarget(h2, u2, d2), t2.xr.enabled = p2, n2.texture.needsPMREMUpdate = true;
    }
  };
  var ia = class extends bi {
    constructor(t2, e2, n2, i, r, s, a, o, l2, c6) {
      super(t2 = void 0 !== t2 ? t2 : [], e2 = void 0 !== e2 ? e2 : lt, n2, i, r, s, a, o, l2, c6), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var ra = class extends wi {
    constructor(t2 = 1, e2 = {}) {
      super(t2, t2, e2), this.isWebGLCubeRenderTarget = true;
      const n2 = { width: t2, height: t2, depth: 1 }, i = [n2, n2, n2, n2, n2, n2];
      void 0 !== e2.encoding && (ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e2.colorSpace = e2.encoding === Ve ? qe : je), this.texture = new ia(i, e2.mapping, e2.wrapS, e2.wrapT, e2.magFilter, e2.minFilter, e2.format, e2.type, e2.anisotropy, e2.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== e2.generateMipmaps && e2.generateMipmaps, this.texture.minFilter = void 0 !== e2.minFilter ? e2.minFilter : Mt;
    }
    fromEquirectangularTexture(t2, e2) {
      this.texture.type = e2.type, this.texture.colorSpace = e2.colorSpace, this.texture.generateMipmaps = e2.generateMipmaps, this.texture.minFilter = e2.minFilter, this.texture.magFilter = e2.magFilter;
      const n2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i = new qs(5, 5, 5), r = new $s({ name: "CubemapFromEquirect", uniforms: Ys(n2.uniforms), vertexShader: n2.vertexShader, fragmentShader: n2.fragmentShader, side: d, blending: 0 });
      r.uniforms.tEquirect.value = e2;
      const s = new Xs(i, r), a = e2.minFilter;
      e2.minFilter === Et && (e2.minFilter = Mt);
      return new na(1, 10, this).update(t2, s), e2.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
    }
    clear(t2, e2, n2, i) {
      const r = t2.getRenderTarget();
      for (let r2 = 0; r2 < 6; r2++) t2.setRenderTarget(this, r2), t2.clear(e2, n2, i);
      t2.setRenderTarget(r);
    }
  };
  var sa = new Ui();
  var aa = new Ui();
  var oa = new ei();
  var la = class {
    constructor(t2 = new Ui(1, 0, 0), e2 = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e2;
    }
    set(t2, e2) {
      return this.normal.copy(t2), this.constant = e2, this;
    }
    setComponents(t2, e2, n2, i) {
      return this.normal.set(t2, e2, n2), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(t2, e2) {
      return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e2, n2) {
      const i = sa.subVectors(n2, e2).cross(aa.subVectors(t2, e2)).normalize();
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
    projectPoint(t2, e2) {
      return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e2) {
      const n2 = t2.delta(sa), i = this.normal.dot(n2);
      if (0 === i) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
      const r = -(t2.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e2.copy(t2.start).addScaledVector(n2, r);
    }
    intersectsLine(t2) {
      const e2 = this.distanceToPoint(t2.start), n2 = this.distanceToPoint(t2.end);
      return e2 < 0 && n2 > 0 || n2 < 0 && e2 > 0;
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
    applyMatrix4(t2, e2) {
      const n2 = e2 || oa.getNormalMatrix(t2), i = this.coplanarPoint(sa).applyMatrix4(t2), r = this.normal.applyMatrix3(n2).normalize();
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
  var ca = new tr();
  var ha = new Ui();
  var ua = class {
    constructor(t2 = new la(), e2 = new la(), n2 = new la(), i = new la(), r = new la(), s = new la()) {
      this.planes = [t2, e2, n2, i, r, s];
    }
    set(t2, e2, n2, i, r, s) {
      const a = this.planes;
      return a[0].copy(t2), a[1].copy(e2), a[2].copy(n2), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
    }
    copy(t2) {
      const e2 = this.planes;
      for (let n2 = 0; n2 < 6; n2++) e2[n2].copy(t2.planes[n2]);
      return this;
    }
    setFromProjectionMatrix(t2, e2 = 2e3) {
      const n2 = this.planes, i = t2.elements, r = i[0], s = i[1], a = i[2], o = i[3], l2 = i[4], c6 = i[5], h2 = i[6], u2 = i[7], d2 = i[8], p2 = i[9], m = i[10], f = i[11], g = i[12], _ = i[13], v = i[14], x = i[15];
      if (n2[0].setComponents(o - r, u2 - l2, f - d2, x - g).normalize(), n2[1].setComponents(o + r, u2 + l2, f + d2, x + g).normalize(), n2[2].setComponents(o + s, u2 + c6, f + p2, x + _).normalize(), n2[3].setComponents(o - s, u2 - c6, f - p2, x - _).normalize(), n2[4].setComponents(o - a, u2 - h2, f - m, x - v).normalize(), e2 === Bn) n2[5].setComponents(o + a, u2 + h2, f + m, x + v).normalize();
      else {
        if (e2 !== zn) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
        n2[5].setComponents(a, h2, m, v).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), ca.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e2 = t2.geometry;
        null === e2.boundingSphere && e2.computeBoundingSphere(), ca.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(ca);
    }
    intersectsSprite(t2) {
      return ca.center.set(0, 0, 0), ca.radius = 0.7071067811865476, ca.applyMatrix4(t2.matrixWorld), this.intersectsSphere(ca);
    }
    intersectsSphere(t2) {
      const e2 = this.planes, n2 = t2.center, i = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e2[t3].distanceToPoint(n2) < i) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e2 = this.planes;
      for (let n2 = 0; n2 < 6; n2++) {
        const i = e2[n2];
        if (ha.x = i.normal.x > 0 ? t2.max.x : t2.min.x, ha.y = i.normal.y > 0 ? t2.max.y : t2.min.y, ha.z = i.normal.z > 0 ? t2.max.z : t2.min.z, i.distanceToPoint(ha) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e2 = this.planes;
      for (let n2 = 0; n2 < 6; n2++) if (e2[n2].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  function da() {
    let t2 = null, e2 = false, n2 = null, i = null;
    function r(e3, s) {
      n2(e3, s), i = t2.requestAnimationFrame(r);
    }
    return { start: function() {
      true !== e2 && null !== n2 && (i = t2.requestAnimationFrame(r), e2 = true);
    }, stop: function() {
      t2.cancelAnimationFrame(i), e2 = false;
    }, setAnimationLoop: function(t3) {
      n2 = t3;
    }, setContext: function(e3) {
      t2 = e3;
    } };
  }
  function pa(t2, e2) {
    const n2 = e2.isWebGL2, i = /* @__PURE__ */ new WeakMap();
    return { get: function(t3) {
      return t3.isInterleavedBufferAttribute && (t3 = t3.data), i.get(t3);
    }, remove: function(e3) {
      e3.isInterleavedBufferAttribute && (e3 = e3.data);
      const n3 = i.get(e3);
      n3 && (t2.deleteBuffer(n3.buffer), i.delete(e3));
    }, update: function(e3, r) {
      if (e3.isGLBufferAttribute) {
        const t3 = i.get(e3);
        return void ((!t3 || t3.version < e3.version) && i.set(e3, { buffer: e3.buffer, type: e3.type, bytesPerElement: e3.elementSize, version: e3.version }));
      }
      e3.isInterleavedBufferAttribute && (e3 = e3.data);
      const s = i.get(e3);
      if (void 0 === s) i.set(e3, function(e4, i2) {
        const r2 = e4.array, s2 = e4.usage, a = r2.byteLength, o = t2.createBuffer();
        let l2;
        if (t2.bindBuffer(i2, o), t2.bufferData(i2, r2, s2), e4.onUploadCallback(), r2 instanceof Float32Array) l2 = t2.FLOAT;
        else if (r2 instanceof Uint16Array) if (e4.isFloat16BufferAttribute) {
          if (!n2) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
          l2 = t2.HALF_FLOAT;
        } else l2 = t2.UNSIGNED_SHORT;
        else if (r2 instanceof Int16Array) l2 = t2.SHORT;
        else if (r2 instanceof Uint32Array) l2 = t2.UNSIGNED_INT;
        else if (r2 instanceof Int32Array) l2 = t2.INT;
        else if (r2 instanceof Int8Array) l2 = t2.BYTE;
        else if (r2 instanceof Uint8Array) l2 = t2.UNSIGNED_BYTE;
        else {
          if (!(r2 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r2);
          l2 = t2.UNSIGNED_BYTE;
        }
        return { buffer: o, type: l2, bytesPerElement: r2.BYTES_PER_ELEMENT, version: e4.version, size: a };
      }(e3, r));
      else if (s.version < e3.version) {
        if (s.size !== e3.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !function(e4, i2, r2) {
          const s2 = i2.array, a = i2._updateRange, o = i2.updateRanges;
          if (t2.bindBuffer(r2, e4), -1 === a.count && 0 === o.length && t2.bufferSubData(r2, 0, s2), 0 !== o.length) {
            for (let e5 = 0, i3 = o.length; e5 < i3; e5++) {
              const i4 = o[e5];
              n2 ? t2.bufferSubData(r2, i4.start * s2.BYTES_PER_ELEMENT, s2, i4.start, i4.count) : t2.bufferSubData(r2, i4.start * s2.BYTES_PER_ELEMENT, s2.subarray(i4.start, i4.start + i4.count));
            }
            i2.clearUpdateRanges();
          }
          -1 !== a.count && (n2 ? t2.bufferSubData(r2, a.offset * s2.BYTES_PER_ELEMENT, s2, a.offset, a.count) : t2.bufferSubData(r2, a.offset * s2.BYTES_PER_ELEMENT, s2.subarray(a.offset, a.offset + a.count)), a.count = -1), i2.onUploadCallback();
        }(s.buffer, e3, r), s.version = e3.version;
      }
    } };
  }
  var ma = class _ma extends As {
    constructor(t2 = 1, e2 = 1, n2 = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: n2, heightSegments: i };
      const r = t2 / 2, s = e2 / 2, a = Math.floor(n2), o = Math.floor(i), l2 = a + 1, c6 = o + 1, h2 = t2 / a, u2 = e2 / o, d2 = [], p2 = [], m = [], f = [];
      for (let t3 = 0; t3 < c6; t3++) {
        const e3 = t3 * u2 - s;
        for (let n3 = 0; n3 < l2; n3++) {
          const i2 = n3 * h2 - r;
          p2.push(i2, -e3, 0), m.push(0, 0, 1), f.push(n3 / a), f.push(1 - t3 / o);
        }
      }
      for (let t3 = 0; t3 < o; t3++) for (let e3 = 0; e3 < a; e3++) {
        const n3 = e3 + l2 * t3, i2 = e3 + l2 * (t3 + 1), r2 = e3 + 1 + l2 * (t3 + 1), s2 = e3 + 1 + l2 * t3;
        d2.push(n3, i2, s2), d2.push(i2, r2, s2);
      }
      this.setIndex(d2), this.setAttribute("position", new vs(p2, 3)), this.setAttribute("normal", new vs(m, 3)), this.setAttribute("uv", new vs(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ma(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var fa = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	attribute float batchId;\n	uniform highp sampler2D batchingTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n	vec3( 0.8224621, 0.177538, 0.0 ),\n	vec3( 0.0331941, 0.9668058, 0.0 ),\n	vec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n	vec3( 1.2249401, - 0.2249404, 0.0 ),\n	vec3( - 0.0420569, 1.0420571, 0.0 ),\n	vec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return sRGBTransferOETF( value );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color *= toneMappingExposure;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	return color;\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var ga = { common: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new ei() }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ei() } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ei() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new ei() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new ei() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new ei() }, normalScale: { value: new ti(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new ei() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new ei() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new ei() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new ei() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Kr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 }, uvTransform: { value: new ei() } }, sprite: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, center: { value: new ti(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new ei() }, alphaMap: { value: null }, alphaMapTransform: { value: new ei() }, alphaTest: { value: 0 } } };
  var _a = { basic: { uniforms: Zs([ga.common, ga.specularmap, ga.envmap, ga.aomap, ga.lightmap, ga.fog]), vertexShader: fa.meshbasic_vert, fragmentShader: fa.meshbasic_frag }, lambert: { uniforms: Zs([ga.common, ga.specularmap, ga.envmap, ga.aomap, ga.lightmap, ga.emissivemap, ga.bumpmap, ga.normalmap, ga.displacementmap, ga.fog, ga.lights, { emissive: { value: new Kr(0) } }]), vertexShader: fa.meshlambert_vert, fragmentShader: fa.meshlambert_frag }, phong: { uniforms: Zs([ga.common, ga.specularmap, ga.envmap, ga.aomap, ga.lightmap, ga.emissivemap, ga.bumpmap, ga.normalmap, ga.displacementmap, ga.fog, ga.lights, { emissive: { value: new Kr(0) }, specular: { value: new Kr(1118481) }, shininess: { value: 30 } }]), vertexShader: fa.meshphong_vert, fragmentShader: fa.meshphong_frag }, standard: { uniforms: Zs([ga.common, ga.envmap, ga.aomap, ga.lightmap, ga.emissivemap, ga.bumpmap, ga.normalmap, ga.displacementmap, ga.roughnessmap, ga.metalnessmap, ga.fog, ga.lights, { emissive: { value: new Kr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: fa.meshphysical_vert, fragmentShader: fa.meshphysical_frag }, toon: { uniforms: Zs([ga.common, ga.aomap, ga.lightmap, ga.emissivemap, ga.bumpmap, ga.normalmap, ga.displacementmap, ga.gradientmap, ga.fog, ga.lights, { emissive: { value: new Kr(0) } }]), vertexShader: fa.meshtoon_vert, fragmentShader: fa.meshtoon_frag }, matcap: { uniforms: Zs([ga.common, ga.bumpmap, ga.normalmap, ga.displacementmap, ga.fog, { matcap: { value: null } }]), vertexShader: fa.meshmatcap_vert, fragmentShader: fa.meshmatcap_frag }, points: { uniforms: Zs([ga.points, ga.fog]), vertexShader: fa.points_vert, fragmentShader: fa.points_frag }, dashed: { uniforms: Zs([ga.common, ga.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: fa.linedashed_vert, fragmentShader: fa.linedashed_frag }, depth: { uniforms: Zs([ga.common, ga.displacementmap]), vertexShader: fa.depth_vert, fragmentShader: fa.depth_frag }, normal: { uniforms: Zs([ga.common, ga.bumpmap, ga.normalmap, ga.displacementmap, { opacity: { value: 1 } }]), vertexShader: fa.meshnormal_vert, fragmentShader: fa.meshnormal_frag }, sprite: { uniforms: Zs([ga.sprite, ga.fog]), vertexShader: fa.sprite_vert, fragmentShader: fa.sprite_frag }, background: { uniforms: { uvTransform: { value: new ei() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: fa.background_vert, fragmentShader: fa.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: fa.backgroundCube_vert, fragmentShader: fa.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: fa.cube_vert, fragmentShader: fa.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: fa.equirect_vert, fragmentShader: fa.equirect_frag }, distanceRGBA: { uniforms: Zs([ga.common, ga.displacementmap, { referencePosition: { value: new Ui() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: fa.distanceRGBA_vert, fragmentShader: fa.distanceRGBA_frag }, shadow: { uniforms: Zs([ga.lights, ga.fog, { color: { value: new Kr(0) }, opacity: { value: 1 } }]), vertexShader: fa.shadow_vert, fragmentShader: fa.shadow_frag } };
  _a.physical = { uniforms: Zs([_a.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new ei() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new ei() }, clearcoatNormalScale: { value: new ti(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new ei() }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new ei() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new ei() }, sheen: { value: 0 }, sheenColor: { value: new Kr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new ei() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new ei() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new ei() }, transmissionSamplerSize: { value: new ti() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new ei() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Kr(0) }, specularColor: { value: new Kr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new ei() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new ei() }, anisotropyVector: { value: new ti() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new ei() } }]), vertexShader: fa.meshphysical_vert, fragmentShader: fa.meshphysical_frag };
  var va = { r: 0, b: 0, g: 0 };
  function xa(t2, e2, n2, i, r, s, a) {
    const o = new Kr(0);
    let l2, c6, h2 = true === s ? 0 : 1, p2 = null, m = 0, f = null;
    function g(e3, n3) {
      e3.getRGB(va, Js(t2)), i.buffers.color.setClear(va.r, va.g, va.b, n3, a);
    }
    return { getClearColor: function() {
      return o;
    }, setClearColor: function(t3, e3 = 1) {
      o.set(t3), h2 = e3, g(o, h2);
    }, getClearAlpha: function() {
      return h2;
    }, setClearAlpha: function(t3) {
      h2 = t3, g(o, h2);
    }, render: function(s2, _) {
      let v = false, x = true === _.isScene ? _.background : null;
      if (x && x.isTexture) {
        x = (_.backgroundBlurriness > 0 ? n2 : e2).get(x);
      }
      null === x ? g(o, h2) : x && x.isColor && (g(x, 1), v = true);
      const y = t2.xr.getEnvironmentBlendMode();
      "additive" === y ? i.buffers.color.setClear(0, 0, 0, 1, a) : "alpha-blend" === y && i.buffers.color.setClear(0, 0, 0, 0, a), (t2.autoClear || v) && t2.clear(t2.autoClearColor, t2.autoClearDepth, t2.autoClearStencil), x && (x.isCubeTexture || x.mapping === dt) ? (void 0 === c6 && (c6 = new Xs(new qs(1, 1, 1), new $s({ name: "BackgroundCubeMaterial", uniforms: Ys(_a.backgroundCube.uniforms), vertexShader: _a.backgroundCube.vertexShader, fragmentShader: _a.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false })), c6.geometry.deleteAttribute("normal"), c6.geometry.deleteAttribute("uv"), c6.onBeforeRender = function(t3, e3, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(c6.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r.update(c6)), c6.material.uniforms.envMap.value = x, c6.material.uniforms.flipEnvMap.value = x.isCubeTexture && false === x.isRenderTargetTexture ? -1 : 1, c6.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, c6.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c6.material.toneMapped = mi.getTransfer(x.colorSpace) !== $e, p2 === x && m === x.version && f === t2.toneMapping || (c6.material.needsUpdate = true, p2 = x, m = x.version, f = t2.toneMapping), c6.layers.enableAll(), s2.unshift(c6, c6.geometry, c6.material, 0, 0, null)) : x && x.isTexture && (void 0 === l2 && (l2 = new Xs(new ma(2, 2), new $s({ name: "BackgroundMaterial", uniforms: Ys(_a.background.uniforms), vertexShader: _a.background.vertexShader, fragmentShader: _a.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false })), l2.geometry.deleteAttribute("normal"), Object.defineProperty(l2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r.update(l2)), l2.material.uniforms.t2D.value = x, l2.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l2.material.toneMapped = mi.getTransfer(x.colorSpace) !== $e, true === x.matrixAutoUpdate && x.updateMatrix(), l2.material.uniforms.uvTransform.value.copy(x.matrix), p2 === x && m === x.version && f === t2.toneMapping || (l2.material.needsUpdate = true, p2 = x, m = x.version, f = t2.toneMapping), l2.layers.enableAll(), s2.unshift(l2, l2.geometry, l2.material, 0, 0, null));
    } };
  }
  function ya(t2, e2, n2, i) {
    const r = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), s = i.isWebGL2 ? null : e2.get("OES_vertex_array_object"), a = i.isWebGL2 || null !== s, o = {}, l2 = p2(null);
    let c6 = l2, h2 = false;
    function u2(e3) {
      return i.isWebGL2 ? t2.bindVertexArray(e3) : s.bindVertexArrayOES(e3);
    }
    function d2(e3) {
      return i.isWebGL2 ? t2.deleteVertexArray(e3) : s.deleteVertexArrayOES(e3);
    }
    function p2(t3) {
      const e3 = [], n3 = [], i2 = [];
      for (let t4 = 0; t4 < r; t4++) e3[t4] = 0, n3[t4] = 0, i2[t4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: e3, enabledAttributes: n3, attributeDivisors: i2, object: t3, attributes: {}, index: null };
    }
    function m() {
      const t3 = c6.newAttributes;
      for (let e3 = 0, n3 = t3.length; e3 < n3; e3++) t3[e3] = 0;
    }
    function f(t3) {
      g(t3, 0);
    }
    function g(n3, r2) {
      const s2 = c6.newAttributes, a2 = c6.enabledAttributes, o2 = c6.attributeDivisors;
      if (s2[n3] = 1, 0 === a2[n3] && (t2.enableVertexAttribArray(n3), a2[n3] = 1), o2[n3] !== r2) {
        (i.isWebGL2 ? t2 : e2.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n3, r2), o2[n3] = r2;
      }
    }
    function _() {
      const e3 = c6.newAttributes, n3 = c6.enabledAttributes;
      for (let i2 = 0, r2 = n3.length; i2 < r2; i2++) n3[i2] !== e3[i2] && (t2.disableVertexAttribArray(i2), n3[i2] = 0);
    }
    function v(e3, n3, i2, r2, s2, a2, o2) {
      true === o2 ? t2.vertexAttribIPointer(e3, n3, i2, s2, a2) : t2.vertexAttribPointer(e3, n3, i2, r2, s2, a2);
    }
    function x() {
      y(), h2 = true, c6 !== l2 && (c6 = l2, u2(c6.object));
    }
    function y() {
      l2.geometry = null, l2.program = null, l2.wireframe = false;
    }
    return { setup: function(r2, l3, d3, x2, y2) {
      let M3 = false;
      if (a) {
        const e3 = function(e4, n3, r3) {
          const a2 = true === r3.wireframe;
          let l4 = o[e4.id];
          void 0 === l4 && (l4 = {}, o[e4.id] = l4);
          let c7 = l4[n3.id];
          void 0 === c7 && (c7 = {}, l4[n3.id] = c7);
          let h3 = c7[a2];
          void 0 === h3 && (h3 = p2(i.isWebGL2 ? t2.createVertexArray() : s.createVertexArrayOES()), c7[a2] = h3);
          return h3;
        }(x2, d3, l3);
        c6 !== e3 && (c6 = e3, u2(c6.object)), M3 = function(t3, e4, n3, i2) {
          const r3 = c6.attributes, s2 = e4.attributes;
          let a2 = 0;
          const o2 = n3.getAttributes();
          for (const e5 in o2) {
            if (o2[e5].location >= 0) {
              const n4 = r3[e5];
              let i3 = s2[e5];
              if (void 0 === i3 && ("instanceMatrix" === e5 && t3.instanceMatrix && (i3 = t3.instanceMatrix), "instanceColor" === e5 && t3.instanceColor && (i3 = t3.instanceColor)), void 0 === n4) return true;
              if (n4.attribute !== i3) return true;
              if (i3 && n4.data !== i3.data) return true;
              a2++;
            }
          }
          return c6.attributesNum !== a2 || c6.index !== i2;
        }(r2, x2, d3, y2), M3 && function(t3, e4, n3, i2) {
          const r3 = {}, s2 = e4.attributes;
          let a2 = 0;
          const o2 = n3.getAttributes();
          for (const e5 in o2) {
            if (o2[e5].location >= 0) {
              let n4 = s2[e5];
              void 0 === n4 && ("instanceMatrix" === e5 && t3.instanceMatrix && (n4 = t3.instanceMatrix), "instanceColor" === e5 && t3.instanceColor && (n4 = t3.instanceColor));
              const i3 = {};
              i3.attribute = n4, n4 && n4.data && (i3.data = n4.data), r3[e5] = i3, a2++;
            }
          }
          c6.attributes = r3, c6.attributesNum = a2, c6.index = i2;
        }(r2, x2, d3, y2);
      } else {
        const t3 = true === l3.wireframe;
        c6.geometry === x2.id && c6.program === d3.id && c6.wireframe === t3 || (c6.geometry = x2.id, c6.program = d3.id, c6.wireframe = t3, M3 = true);
      }
      null !== y2 && n2.update(y2, t2.ELEMENT_ARRAY_BUFFER), (M3 || h2) && (h2 = false, function(r3, s2, a2, o2) {
        if (false === i.isWebGL2 && (r3.isInstancedMesh || o2.isInstancedBufferGeometry) && null === e2.get("ANGLE_instanced_arrays")) return;
        m();
        const l4 = o2.attributes, c7 = a2.getAttributes(), h3 = s2.defaultAttributeValues;
        for (const e3 in c7) {
          const s3 = c7[e3];
          if (s3.location >= 0) {
            let a3 = l4[e3];
            if (void 0 === a3 && ("instanceMatrix" === e3 && r3.instanceMatrix && (a3 = r3.instanceMatrix), "instanceColor" === e3 && r3.instanceColor && (a3 = r3.instanceColor)), void 0 !== a3) {
              const e4 = a3.normalized, l5 = a3.itemSize, c8 = n2.get(a3);
              if (void 0 === c8) continue;
              const h4 = c8.buffer, u3 = c8.type, d4 = c8.bytesPerElement, p3 = true === i.isWebGL2 && (u3 === t2.INT || u3 === t2.UNSIGNED_INT || a3.gpuType === Pt);
              if (a3.isInterleavedBufferAttribute) {
                const n3 = a3.data, i2 = n3.stride, c9 = a3.offset;
                if (n3.isInstancedInterleavedBuffer) {
                  for (let t3 = 0; t3 < s3.locationSize; t3++) g(s3.location + t3, n3.meshPerAttribute);
                  true !== r3.isInstancedMesh && void 0 === o2._maxInstanceCount && (o2._maxInstanceCount = n3.meshPerAttribute * n3.count);
                } else for (let t3 = 0; t3 < s3.locationSize; t3++) f(s3.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, h4);
                for (let t3 = 0; t3 < s3.locationSize; t3++) v(s3.location + t3, l5 / s3.locationSize, u3, e4, i2 * d4, (c9 + l5 / s3.locationSize * t3) * d4, p3);
              } else {
                if (a3.isInstancedBufferAttribute) {
                  for (let t3 = 0; t3 < s3.locationSize; t3++) g(s3.location + t3, a3.meshPerAttribute);
                  true !== r3.isInstancedMesh && void 0 === o2._maxInstanceCount && (o2._maxInstanceCount = a3.meshPerAttribute * a3.count);
                } else for (let t3 = 0; t3 < s3.locationSize; t3++) f(s3.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, h4);
                for (let t3 = 0; t3 < s3.locationSize; t3++) v(s3.location + t3, l5 / s3.locationSize, u3, e4, l5 * d4, l5 / s3.locationSize * t3 * d4, p3);
              }
            } else if (void 0 !== h3) {
              const n3 = h3[e3];
              if (void 0 !== n3) switch (n3.length) {
                case 2:
                  t2.vertexAttrib2fv(s3.location, n3);
                  break;
                case 3:
                  t2.vertexAttrib3fv(s3.location, n3);
                  break;
                case 4:
                  t2.vertexAttrib4fv(s3.location, n3);
                  break;
                default:
                  t2.vertexAttrib1fv(s3.location, n3);
              }
            }
          }
        }
        _();
      }(r2, l3, d3, x2), null !== y2 && t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, n2.get(y2).buffer));
    }, reset: x, resetDefaultState: y, dispose: function() {
      x();
      for (const t3 in o) {
        const e3 = o[t3];
        for (const t4 in e3) {
          const n3 = e3[t4];
          for (const t5 in n3) d2(n3[t5].object), delete n3[t5];
          delete e3[t4];
        }
        delete o[t3];
      }
    }, releaseStatesOfGeometry: function(t3) {
      if (void 0 === o[t3.id]) return;
      const e3 = o[t3.id];
      for (const t4 in e3) {
        const n3 = e3[t4];
        for (const t5 in n3) d2(n3[t5].object), delete n3[t5];
        delete e3[t4];
      }
      delete o[t3.id];
    }, releaseStatesOfProgram: function(t3) {
      for (const e3 in o) {
        const n3 = o[e3];
        if (void 0 === n3[t3.id]) continue;
        const i2 = n3[t3.id];
        for (const t4 in i2) d2(i2[t4].object), delete i2[t4];
        delete n3[t3.id];
      }
    }, initAttributes: m, enableAttribute: f, disableUnusedAttributes: _ };
  }
  function Ma(t2, e2, n2, i) {
    const r = i.isWebGL2;
    let s;
    this.setMode = function(t3) {
      s = t3;
    }, this.render = function(e3, i2) {
      t2.drawArrays(s, e3, i2), n2.update(i2, s, 1);
    }, this.renderInstances = function(i2, a, o) {
      if (0 === o) return;
      let l2, c6;
      if (r) l2 = t2, c6 = "drawArraysInstanced";
      else if (l2 = e2.get("ANGLE_instanced_arrays"), c6 = "drawArraysInstancedANGLE", null === l2) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l2[c6](s, i2, a, o), n2.update(a, s, o);
    }, this.renderMultiDraw = function(t3, i2, r2) {
      if (0 === r2) return;
      const a = e2.get("WEBGL_multi_draw");
      if (null === a) for (let e3 = 0; e3 < r2; e3++) this.render(t3[e3], i2[e3]);
      else {
        a.multiDrawArraysWEBGL(s, t3, 0, i2, 0, r2);
        let e3 = 0;
        for (let t4 = 0; t4 < r2; t4++) e3 += i2[t4];
        n2.update(e3, s, 1);
      }
    };
  }
  function Sa(t2, e2, n2) {
    let i;
    function r(e3) {
      if ("highp" === e3) {
        if (t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.HIGH_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.HIGH_FLOAT).precision > 0) return "highp";
        e3 = "mediump";
      }
      return "mediump" === e3 && t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.MEDIUM_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    const s = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === t2.constructor.name;
    let a = void 0 !== n2.precision ? n2.precision : "highp";
    const o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    const l2 = s || e2.has("WEBGL_draw_buffers"), c6 = true === n2.logarithmicDepthBuffer, h2 = t2.getParameter(t2.MAX_TEXTURE_IMAGE_UNITS), u2 = t2.getParameter(t2.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d2 = t2.getParameter(t2.MAX_TEXTURE_SIZE), p2 = t2.getParameter(t2.MAX_CUBE_MAP_TEXTURE_SIZE), m = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), f = t2.getParameter(t2.MAX_VERTEX_UNIFORM_VECTORS), g = t2.getParameter(t2.MAX_VARYING_VECTORS), _ = t2.getParameter(t2.MAX_FRAGMENT_UNIFORM_VECTORS), v = u2 > 0, x = s || e2.has("OES_texture_float");
    return { isWebGL2: s, drawBuffers: l2, getMaxAnisotropy: function() {
      if (void 0 !== i) return i;
      if (true === e2.has("EXT_texture_filter_anisotropic")) {
        const n3 = e2.get("EXT_texture_filter_anisotropic");
        i = t2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i = 0;
      return i;
    }, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: c6, maxTextures: h2, maxVertexTextures: u2, maxTextureSize: d2, maxCubemapSize: p2, maxAttributes: m, maxVertexUniforms: f, maxVaryings: g, maxFragmentUniforms: _, vertexTextures: v, floatFragmentTextures: x, floatVertexTextures: v && x, maxSamples: s ? t2.getParameter(t2.MAX_SAMPLES) : 0 };
  }
  function ba(t2) {
    const e2 = this;
    let n2 = null, i = 0, r = false, s = false;
    const a = new la(), o = new ei(), l2 = { value: null, needsUpdate: false };
    function c6(t3, n3, i2, r2) {
      const s2 = null !== t3 ? t3.length : 0;
      let c7 = null;
      if (0 !== s2) {
        if (c7 = l2.value, true !== r2 || null === c7) {
          const e3 = i2 + 4 * s2, r3 = n3.matrixWorldInverse;
          o.getNormalMatrix(r3), (null === c7 || c7.length < e3) && (c7 = new Float32Array(e3));
          for (let e4 = 0, n4 = i2; e4 !== s2; ++e4, n4 += 4) a.copy(t3[e4]).applyMatrix4(r3, o), a.normal.toArray(c7, n4), c7[n4 + 3] = a.constant;
        }
        l2.value = c7, l2.needsUpdate = true;
      }
      return e2.numPlanes = s2, e2.numIntersection = 0, c7;
    }
    this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t3, e3) {
      const n3 = 0 !== t3.length || e3 || 0 !== i || r;
      return r = e3, i = t3.length, n3;
    }, this.beginShadows = function() {
      s = true, c6(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(t3, e3) {
      n2 = c6(t3, e3, 0);
    }, this.setState = function(a2, o2, h2) {
      const u2 = a2.clippingPlanes, d2 = a2.clipIntersection, p2 = a2.clipShadows, m = t2.get(a2);
      if (!r || null === u2 || 0 === u2.length || s && !p2) s ? c6(null) : function() {
        l2.value !== n2 && (l2.value = n2, l2.needsUpdate = i > 0);
        e2.numPlanes = i, e2.numIntersection = 0;
      }();
      else {
        const t3 = s ? 0 : i, e3 = 4 * t3;
        let r2 = m.clippingState || null;
        l2.value = r2, r2 = c6(u2, o2, e3, h2);
        for (let t4 = 0; t4 !== e3; ++t4) r2[t4] = n2[t4];
        m.clippingState = r2, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += t3;
      }
    };
  }
  function Ea(t2) {
    let e2 = /* @__PURE__ */ new WeakMap();
    function n2(t3, e3) {
      return e3 === ht ? t3.mapping = lt : e3 === ut && (t3.mapping = ct), t3;
    }
    function i(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", i);
      const r = e2.get(n3);
      void 0 !== r && (e2.delete(n3), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping;
        if (s === ht || s === ut) {
          if (e2.has(r)) {
            return n2(e2.get(r).texture, r.mapping);
          }
          {
            const s2 = r.image;
            if (s2 && s2.height > 0) {
              const a = new ra(s2.height / 2);
              return a.fromEquirectangularTexture(t2, r), e2.set(r, a), r.addEventListener("dispose", i), n2(a.texture, r.mapping);
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ta = class extends Qs {
    constructor(t2 = -1, e2 = 1, n2 = 1, i = -1, r = 0.1, s = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = n2, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e2, n2, i, r, s) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = n2, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), n2 = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n2 - t2, s = n2 + t2, a = i + e2, o = i - e2;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += t3 * this.view.offsetX, s = r + t3 * this.view.width, a -= e3 * this.view.offsetY, o = a - e3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
    }
  };
  var wa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Aa = 20;
  var Ra = new Ta();
  var Ca = new Kr();
  var Pa = null;
  var La = 0;
  var Ia = 0;
  var Ua = (1 + Math.sqrt(5)) / 2;
  var Na = 1 / Ua;
  var Da = [new Ui(1, 1, 1), new Ui(-1, 1, 1), new Ui(1, 1, -1), new Ui(-1, 1, -1), new Ui(0, Ua, Na), new Ui(0, Ua, -Na), new Ui(Na, 0, Ua), new Ui(-Na, 0, Ua), new Ui(Ua, Na, 0), new Ui(-Ua, Na, 0)];
  var Oa = class {
    constructor(t2) {
      this._renderer = t2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(t2, e2 = 0, n2 = 0.1, i = 100) {
      Pa = this._renderer.getRenderTarget(), La = this._renderer.getActiveCubeFace(), Ia = this._renderer.getActiveMipmapLevel(), this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(t2, n2, i, r), e2 > 0 && this._blur(r, 0, 0, e2), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(t2, e2 = null) {
      return this._fromTexture(t2, e2);
    }
    fromCubemap(t2, e2 = null) {
      return this._fromTexture(t2, e2);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = Ha(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = za(), this._compileMaterial(this._equirectMaterial));
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
      this._renderer.setRenderTarget(Pa, La, Ia), t2.scissorTest = false, Ba(t2, 0, 0, t2.width, t2.height);
    }
    _fromTexture(t2, e2) {
      t2.mapping === lt || t2.mapping === ct ? this._setSize(0 === t2.image.length ? 16 : t2.image[0].width || t2.image[0].image.width) : this._setSize(t2.image.width / 4), Pa = this._renderer.getRenderTarget(), La = this._renderer.getActiveCubeFace(), Ia = this._renderer.getActiveMipmapLevel();
      const n2 = e2 || this._allocateTargets();
      return this._textureToCubeUV(t2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      const t2 = 3 * Math.max(this._cubeSize, 112), e2 = 4 * this._cubeSize, n2 = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Ut, format: Bt, colorSpace: Ye, depthBuffer: false }, i = Fa(t2, e2, n2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t2 || this._pingPongRenderTarget.height !== e2) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Fa(t2, e2, n2);
        const { _lodMax: i2 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(t3) {
          const e3 = [], n3 = [], i3 = [];
          let r = t3;
          const s = t3 - 4 + 1 + wa.length;
          for (let a = 0; a < s; a++) {
            const s2 = Math.pow(2, r);
            n3.push(s2);
            let o = 1 / s2;
            a > t3 - 4 ? o = wa[a - t3 + 4 - 1] : 0 === a && (o = 0), i3.push(o);
            const l2 = 1 / (s2 - 2), c6 = -l2, h2 = 1 + l2, u2 = [c6, c6, h2, c6, h2, h2, c6, c6, h2, h2, c6, h2], d2 = 6, p2 = 6, m = 3, f = 2, g = 1, _ = new Float32Array(m * p2 * d2), v = new Float32Array(f * p2 * d2), x = new Float32Array(g * p2 * d2);
            for (let t4 = 0; t4 < d2; t4++) {
              const e4 = t4 % 3 * 2 / 3 - 1, n4 = t4 > 2 ? 0 : -1, i4 = [e4, n4, 0, e4 + 2 / 3, n4, 0, e4 + 2 / 3, n4 + 1, 0, e4, n4, 0, e4 + 2 / 3, n4 + 1, 0, e4, n4 + 1, 0];
              _.set(i4, m * p2 * t4), v.set(u2, f * p2 * t4);
              const r2 = [t4, t4, t4, t4, t4, t4];
              x.set(r2, g * p2 * t4);
            }
            const y = new As();
            y.setAttribute("position", new cs(_, m)), y.setAttribute("uv", new cs(v, f)), y.setAttribute("faceIndex", new cs(x, g)), e3.push(y), r > 4 && r--;
          }
          return { lodPlanes: e3, sizeLods: n3, sigmas: i3 };
        }(i2)), this._blurMaterial = function(t3, e3, n3) {
          const i3 = new Float32Array(Aa), r = new Ui(0, 1, 0), s = new $s({ name: "SphericalGaussianBlur", defines: { n: Aa, CUBEUV_TEXEL_WIDTH: 1 / e3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${t3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i3 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: Va(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
          return s;
        }(i2, t2, e2);
      }
      return i;
    }
    _compileMaterial(t2) {
      const e2 = new Xs(this._lodPlanes[0], t2);
      this._renderer.compile(e2, Ra);
    }
    _sceneToCubeUV(t2, e2, n2, i) {
      const r = new ta(90, 1, e2, n2), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer, l2 = o.autoClear, c6 = o.toneMapping;
      o.getClearColor(Ca), o.toneMapping = $, o.autoClear = false;
      const h2 = new es({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false }), u2 = new Xs(new qs(), h2);
      let p2 = false;
      const m = t2.background;
      m ? m.isColor && (h2.color.copy(m), t2.background = null, p2 = true) : (h2.color.copy(Ca), p2 = true);
      for (let e3 = 0; e3 < 6; e3++) {
        const n3 = e3 % 3;
        0 === n3 ? (r.up.set(0, s[e3], 0), r.lookAt(a[e3], 0, 0)) : 1 === n3 ? (r.up.set(0, 0, s[e3]), r.lookAt(0, a[e3], 0)) : (r.up.set(0, s[e3], 0), r.lookAt(0, 0, a[e3]));
        const l3 = this._cubeSize;
        Ba(i, n3 * l3, e3 > 2 ? l3 : 0, l3, l3), o.setRenderTarget(i), p2 && o.render(u2, r), o.render(t2, r);
      }
      u2.geometry.dispose(), u2.material.dispose(), o.toneMapping = c6, o.autoClear = l2, t2.background = m;
    }
    _textureToCubeUV(t2, e2) {
      const n2 = this._renderer, i = t2.mapping === lt || t2.mapping === ct;
      i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ha()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === t2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = za());
      const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new Xs(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t2;
      const a = this._cubeSize;
      Ba(e2, 0, 0, 3 * a, 2 * a), n2.setRenderTarget(e2), n2.render(s, Ra);
    }
    _applyPMREM(t2) {
      const e2 = this._renderer, n2 = e2.autoClear;
      e2.autoClear = false;
      for (let e3 = 1; e3 < this._lodPlanes.length; e3++) {
        const n3 = Math.sqrt(this._sigmas[e3] * this._sigmas[e3] - this._sigmas[e3 - 1] * this._sigmas[e3 - 1]), i = Da[(e3 - 1) % Da.length];
        this._blur(t2, e3 - 1, e3, n3, i);
      }
      e2.autoClear = n2;
    }
    _blur(t2, e2, n2, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(t2, s, e2, n2, i, "latitudinal", r), this._halfBlur(s, t2, n2, n2, i, "longitudinal", r);
    }
    _halfBlur(t2, e2, n2, i, r, s, a) {
      const o = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
      const c6 = new Xs(this._lodPlanes[i], l2), h2 = l2.uniforms, u2 = this._sizeLods[n2] - 1, d2 = isFinite(r) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r / d2, m = isFinite(r) ? 1 + Math.floor(3 * p2) : Aa;
      m > Aa && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
      const f = [];
      let g = 0;
      for (let t3 = 0; t3 < Aa; ++t3) {
        const e3 = t3 / p2, n3 = Math.exp(-e3 * e3 / 2);
        f.push(n3), 0 === t3 ? g += n3 : t3 < m && (g += 2 * n3);
      }
      for (let t3 = 0; t3 < f.length; t3++) f[t3] = f[t3] / g;
      h2.envMap.value = t2.texture, h2.samples.value = m, h2.weights.value = f, h2.latitudinal.value = "latitudinal" === s, a && (h2.poleAxis.value = a);
      const { _lodMax: _ } = this;
      h2.dTheta.value = d2, h2.mipInt.value = _ - n2;
      const v = this._sizeLods[i];
      Ba(e2, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e2), o.render(c6, Ra);
    }
  };
  function Fa(t2, e2, n2) {
    const i = new wi(t2, e2, n2);
    return i.texture.mapping = dt, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
  }
  function Ba(t2, e2, n2, i, r) {
    t2.viewport.set(e2, n2, i, r), t2.scissor.set(e2, n2, i, r);
  }
  function za() {
    return new $s({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Va(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function Ha() {
    return new $s({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Va(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function Va() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function ka(t2) {
    let e2 = /* @__PURE__ */ new WeakMap(), n2 = null;
    function i(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", i);
      const r = e2.get(n3);
      void 0 !== r && (e2.delete(n3), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping, a = s === ht || s === ut, o = s === lt || s === ct;
        if (a || o) {
          if (r.isRenderTargetTexture && true === r.needsPMREMUpdate) {
            r.needsPMREMUpdate = false;
            let i2 = e2.get(r);
            return null === n2 && (n2 = new Oa(t2)), i2 = a ? n2.fromEquirectangular(r, i2) : n2.fromCubemap(r, i2), e2.set(r, i2), i2.texture;
          }
          if (e2.has(r)) return e2.get(r).texture;
          {
            const s2 = r.image;
            if (a && s2 && s2.height > 0 || o && s2 && function(t3) {
              let e3 = 0;
              const n3 = 6;
              for (let i2 = 0; i2 < n3; i2++) void 0 !== t3[i2] && e3++;
              return e3 === n3;
            }(s2)) {
              null === n2 && (n2 = new Oa(t2));
              const s3 = a ? n2.fromEquirectangular(r) : n2.fromCubemap(r);
              return e2.set(r, s3), r.addEventListener("dispose", i), s3.texture;
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap(), null !== n2 && (n2.dispose(), n2 = null);
    } };
  }
  function Ga(t2) {
    const e2 = {};
    function n2(n3) {
      if (void 0 !== e2[n3]) return e2[n3];
      let i;
      switch (n3) {
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
          i = t2.getExtension(n3);
      }
      return e2[n3] = i, i;
    }
    return { has: function(t3) {
      return null !== n2(t3);
    }, init: function(t3) {
      t3.isWebGL2 ? (n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance")) : (n2("WEBGL_depth_texture"), n2("OES_texture_float"), n2("OES_texture_half_float"), n2("OES_texture_half_float_linear"), n2("OES_standard_derivatives"), n2("OES_element_index_uint"), n2("OES_vertex_array_object"), n2("ANGLE_instanced_arrays")), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture");
    }, get: function(t3) {
      const e3 = n2(t3);
      return null === e3 && console.warn("THREE.WebGLRenderer: " + t3 + " extension not supported."), e3;
    } };
  }
  function Wa(t2, e2, n2, i) {
    const r = {}, s = /* @__PURE__ */ new WeakMap();
    function a(t3) {
      const o2 = t3.target;
      null !== o2.index && e2.remove(o2.index);
      for (const t4 in o2.attributes) e2.remove(o2.attributes[t4]);
      for (const t4 in o2.morphAttributes) {
        const n3 = o2.morphAttributes[t4];
        for (let t5 = 0, i2 = n3.length; t5 < i2; t5++) e2.remove(n3[t5]);
      }
      o2.removeEventListener("dispose", a), delete r[o2.id];
      const l2 = s.get(o2);
      l2 && (e2.remove(l2), s.delete(o2)), i.releaseStatesOfGeometry(o2), true === o2.isInstancedBufferGeometry && delete o2._maxInstanceCount, n2.memory.geometries--;
    }
    function o(t3) {
      const n3 = [], i2 = t3.index, r2 = t3.attributes.position;
      let a2 = 0;
      if (null !== i2) {
        const t4 = i2.array;
        a2 = i2.version;
        for (let e3 = 0, i3 = t4.length; e3 < i3; e3 += 3) {
          const i4 = t4[e3 + 0], r3 = t4[e3 + 1], s2 = t4[e3 + 2];
          n3.push(i4, r3, r3, s2, s2, i4);
        }
      } else {
        if (void 0 === r2) return;
        {
          const t4 = r2.array;
          a2 = r2.version;
          for (let e3 = 0, i3 = t4.length / 3 - 1; e3 < i3; e3 += 3) {
            const t5 = e3 + 0, i4 = e3 + 1, r3 = e3 + 2;
            n3.push(t5, i4, i4, r3, r3, t5);
          }
        }
      }
      const o2 = new (ii(n3) ? gs : ms)(n3, 1);
      o2.version = a2;
      const l2 = s.get(t3);
      l2 && e2.remove(l2), s.set(t3, o2);
    }
    return { get: function(t3, e3) {
      return true === r[e3.id] || (e3.addEventListener("dispose", a), r[e3.id] = true, n2.memory.geometries++), e3;
    }, update: function(n3) {
      const i2 = n3.attributes;
      for (const n4 in i2) e2.update(i2[n4], t2.ARRAY_BUFFER);
      const r2 = n3.morphAttributes;
      for (const n4 in r2) {
        const i3 = r2[n4];
        for (let n5 = 0, r3 = i3.length; n5 < r3; n5++) e2.update(i3[n5], t2.ARRAY_BUFFER);
      }
    }, getWireframeAttribute: function(t3) {
      const e3 = s.get(t3);
      if (e3) {
        const n3 = t3.index;
        null !== n3 && e3.version < n3.version && o(t3);
      } else o(t3);
      return s.get(t3);
    } };
  }
  function Xa(t2, e2, n2, i) {
    const r = i.isWebGL2;
    let s, a, o;
    this.setMode = function(t3) {
      s = t3;
    }, this.setIndex = function(t3) {
      a = t3.type, o = t3.bytesPerElement;
    }, this.render = function(e3, i2) {
      t2.drawElements(s, i2, a, e3 * o), n2.update(i2, s, 1);
    }, this.renderInstances = function(i2, l2, c6) {
      if (0 === c6) return;
      let h2, u2;
      if (r) h2 = t2, u2 = "drawElementsInstanced";
      else if (h2 = e2.get("ANGLE_instanced_arrays"), u2 = "drawElementsInstancedANGLE", null === h2) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h2[u2](s, l2, a, i2 * o, c6), n2.update(l2, s, c6);
    }, this.renderMultiDraw = function(t3, i2, r2) {
      if (0 === r2) return;
      const l2 = e2.get("WEBGL_multi_draw");
      if (null === l2) for (let e3 = 0; e3 < r2; e3++) this.render(t3[e3] / o, i2[e3]);
      else {
        l2.multiDrawElementsWEBGL(s, i2, 0, a, t3, 0, r2);
        let e3 = 0;
        for (let t4 = 0; t4 < r2; t4++) e3 += i2[t4];
        n2.update(e3, s, 1);
      }
    };
  }
  function ja(t2) {
    const e2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: e2, programs: null, autoReset: true, reset: function() {
      e2.calls = 0, e2.triangles = 0, e2.points = 0, e2.lines = 0;
    }, update: function(n2, i, r) {
      switch (e2.calls++, i) {
        case t2.TRIANGLES:
          e2.triangles += r * (n2 / 3);
          break;
        case t2.LINES:
          e2.lines += r * (n2 / 2);
          break;
        case t2.LINE_STRIP:
          e2.lines += r * (n2 - 1);
          break;
        case t2.LINE_LOOP:
          e2.lines += r * n2;
          break;
        case t2.POINTS:
          e2.points += r * n2;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    } };
  }
  function qa(t2, e2) {
    return t2[0] - e2[0];
  }
  function Ya(t2, e2) {
    return Math.abs(e2[1]) - Math.abs(t2[1]);
  }
  function Za(t2, e2, n2) {
    const i = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ei(), o = [];
    for (let t3 = 0; t3 < 8; t3++) o[t3] = [t3, 0];
    return { update: function(l2, c6, h2) {
      const u2 = l2.morphTargetInfluences;
      if (true === e2.isWebGL2) {
        const d2 = c6.morphAttributes.position || c6.morphAttributes.normal || c6.morphAttributes.color, p2 = void 0 !== d2 ? d2.length : 0;
        let m = s.get(c6);
        if (void 0 === m || m.count !== p2) {
          let C = function() {
            A.dispose(), s.delete(c6), c6.removeEventListener("dispose", C);
          };
          void 0 !== m && m.texture.dispose();
          const _ = void 0 !== c6.morphAttributes.position, v = void 0 !== c6.morphAttributes.normal, x = void 0 !== c6.morphAttributes.color, y = c6.morphAttributes.position || [], M3 = c6.morphAttributes.normal || [], S = c6.morphAttributes.color || [];
          let b = 0;
          true === _ && (b = 1), true === v && (b = 2), true === x && (b = 3);
          let E = c6.attributes.position.count * b, T = 1;
          E > e2.maxTextureSize && (T = Math.ceil(E / e2.maxTextureSize), E = e2.maxTextureSize);
          const w = new Float32Array(E * T * 4 * p2), A = new Ai(w, E, T, p2);
          A.type = It, A.needsUpdate = true;
          const R = 4 * b;
          for (let P2 = 0; P2 < p2; P2++) {
            const L2 = y[P2], I = M3[P2], U = S[P2], N = E * T * 4 * P2;
            for (let D = 0; D < L2.count; D++) {
              const O = D * R;
              true === _ && (a.fromBufferAttribute(L2, D), w[N + O + 0] = a.x, w[N + O + 1] = a.y, w[N + O + 2] = a.z, w[N + O + 3] = 0), true === v && (a.fromBufferAttribute(I, D), w[N + O + 4] = a.x, w[N + O + 5] = a.y, w[N + O + 6] = a.z, w[N + O + 7] = 0), true === x && (a.fromBufferAttribute(U, D), w[N + O + 8] = a.x, w[N + O + 9] = a.y, w[N + O + 10] = a.z, w[N + O + 11] = 4 === U.itemSize ? a.w : 1);
            }
          }
          m = { count: p2, texture: A, size: new ti(E, T) }, s.set(c6, m), c6.addEventListener("dispose", C);
        }
        let f = 0;
        for (let F = 0; F < u2.length; F++) f += u2[F];
        const g = c6.morphTargetsRelative ? 1 : 1 - f;
        h2.getUniforms().setValue(t2, "morphTargetBaseInfluence", g), h2.getUniforms().setValue(t2, "morphTargetInfluences", u2), h2.getUniforms().setValue(t2, "morphTargetsTexture", m.texture, n2), h2.getUniforms().setValue(t2, "morphTargetsTextureSize", m.size);
      } else {
        const B = void 0 === u2 ? 0 : u2.length;
        let z = i[c6.id];
        if (void 0 === z || z.length !== B) {
          z = [];
          for (let W = 0; W < B; W++) z[W] = [W, 0];
          i[c6.id] = z;
        }
        for (let X = 0; X < B; X++) {
          const j = z[X];
          j[0] = X, j[1] = u2[X];
        }
        z.sort(Ya);
        for (let q = 0; q < 8; q++) q < B && z[q][1] ? (o[q][0] = z[q][0], o[q][1] = z[q][1]) : (o[q][0] = Number.MAX_SAFE_INTEGER, o[q][1] = 0);
        o.sort(qa);
        const H = c6.morphAttributes.position, V2 = c6.morphAttributes.normal;
        let k = 0;
        for (let Y = 0; Y < 8; Y++) {
          const Z2 = o[Y], J2 = Z2[0], K3 = Z2[1];
          J2 !== Number.MAX_SAFE_INTEGER && K3 ? (H && c6.getAttribute("morphTarget" + Y) !== H[J2] && c6.setAttribute("morphTarget" + Y, H[J2]), V2 && c6.getAttribute("morphNormal" + Y) !== V2[J2] && c6.setAttribute("morphNormal" + Y, V2[J2]), r[Y] = K3, k += K3) : (H && true === c6.hasAttribute("morphTarget" + Y) && c6.deleteAttribute("morphTarget" + Y), V2 && true === c6.hasAttribute("morphNormal" + Y) && c6.deleteAttribute("morphNormal" + Y), r[Y] = 0);
        }
        const G = c6.morphTargetsRelative ? 1 : 1 - k;
        h2.getUniforms().setValue(t2, "morphTargetBaseInfluence", G), h2.getUniforms().setValue(t2, "morphTargetInfluences", r);
      }
    } };
  }
  function Ja(t2, e2, n2, i) {
    let r = /* @__PURE__ */ new WeakMap();
    function s(t3) {
      const e3 = t3.target;
      e3.removeEventListener("dispose", s), n2.remove(e3.instanceMatrix), null !== e3.instanceColor && n2.remove(e3.instanceColor);
    }
    return { update: function(a) {
      const o = i.render.frame, l2 = a.geometry, c6 = e2.get(a, l2);
      if (r.get(c6) !== o && (e2.update(c6), r.set(c6, o)), a.isInstancedMesh && (false === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s), r.get(a) !== o && (n2.update(a.instanceMatrix, t2.ARRAY_BUFFER), null !== a.instanceColor && n2.update(a.instanceColor, t2.ARRAY_BUFFER), r.set(a, o))), a.isSkinnedMesh) {
        const t3 = a.skeleton;
        r.get(t3) !== o && (t3.update(), r.set(t3, o));
      }
      return c6;
    }, dispose: function() {
      r = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ka = class extends bi {
    constructor(t2, e2, n2, i, r, s, a, o, l2, c6) {
      if ((c6 = void 0 !== c6 ? c6 : Vt) !== Vt && c6 !== kt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n2 && c6 === Vt && (n2 = Lt), void 0 === n2 && c6 === kt && (n2 = Ot), super(null, i, r, s, a, o, c6, n2, l2), this.isDepthTexture = true, this.image = { width: t2, height: e2 }, this.magFilter = void 0 !== a ? a : gt, this.minFilter = void 0 !== o ? o : gt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
    }
  };
  var $a = new bi();
  var Qa = new Ka(1, 1);
  Qa.compareFunction = 515;
  var to = new Ai();
  var eo = new Ci();
  var no = new ia();
  var io = [];
  var ro = [];
  var so = new Float32Array(16);
  var ao = new Float32Array(9);
  var oo = new Float32Array(4);
  function lo(t2, e2, n2) {
    const i = t2[0];
    if (i <= 0 || i > 0) return t2;
    const r = e2 * n2;
    let s = io[r];
    if (void 0 === s && (s = new Float32Array(r), io[r] = s), 0 !== e2) {
      i.toArray(s, 0);
      for (let i2 = 1, r2 = 0; i2 !== e2; ++i2) r2 += n2, t2[i2].toArray(s, r2);
    }
    return s;
  }
  function co(t2, e2) {
    if (t2.length !== e2.length) return false;
    for (let n2 = 0, i = t2.length; n2 < i; n2++) if (t2[n2] !== e2[n2]) return false;
    return true;
  }
  function ho(t2, e2) {
    for (let n2 = 0, i = e2.length; n2 < i; n2++) t2[n2] = e2[n2];
  }
  function uo(t2, e2) {
    let n2 = ro[e2];
    void 0 === n2 && (n2 = new Int32Array(e2), ro[e2] = n2);
    for (let i = 0; i !== e2; ++i) n2[i] = t2.allocateTextureUnit();
    return n2;
  }
  function po(t2, e2) {
    const n2 = this.cache;
    n2[0] !== e2 && (t2.uniform1f(this.addr, e2), n2[0] = e2);
  }
  function mo(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y || (t2.uniform2f(this.addr, e2.x, e2.y), n2[0] = e2.x, n2[1] = e2.y);
    else {
      if (co(n2, e2)) return;
      t2.uniform2fv(this.addr, e2), ho(n2, e2);
    }
  }
  function fo(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z || (t2.uniform3f(this.addr, e2.x, e2.y, e2.z), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z);
    else if (void 0 !== e2.r) n2[0] === e2.r && n2[1] === e2.g && n2[2] === e2.b || (t2.uniform3f(this.addr, e2.r, e2.g, e2.b), n2[0] = e2.r, n2[1] = e2.g, n2[2] = e2.b);
    else {
      if (co(n2, e2)) return;
      t2.uniform3fv(this.addr, e2), ho(n2, e2);
    }
  }
  function go(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z && n2[3] === e2.w || (t2.uniform4f(this.addr, e2.x, e2.y, e2.z, e2.w), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z, n2[3] = e2.w);
    else {
      if (co(n2, e2)) return;
      t2.uniform4fv(this.addr, e2), ho(n2, e2);
    }
  }
  function _o(t2, e2) {
    const n2 = this.cache, i = e2.elements;
    if (void 0 === i) {
      if (co(n2, e2)) return;
      t2.uniformMatrix2fv(this.addr, false, e2), ho(n2, e2);
    } else {
      if (co(n2, i)) return;
      oo.set(i), t2.uniformMatrix2fv(this.addr, false, oo), ho(n2, i);
    }
  }
  function vo(t2, e2) {
    const n2 = this.cache, i = e2.elements;
    if (void 0 === i) {
      if (co(n2, e2)) return;
      t2.uniformMatrix3fv(this.addr, false, e2), ho(n2, e2);
    } else {
      if (co(n2, i)) return;
      ao.set(i), t2.uniformMatrix3fv(this.addr, false, ao), ho(n2, i);
    }
  }
  function xo(t2, e2) {
    const n2 = this.cache, i = e2.elements;
    if (void 0 === i) {
      if (co(n2, e2)) return;
      t2.uniformMatrix4fv(this.addr, false, e2), ho(n2, e2);
    } else {
      if (co(n2, i)) return;
      so.set(i), t2.uniformMatrix4fv(this.addr, false, so), ho(n2, i);
    }
  }
  function yo(t2, e2) {
    const n2 = this.cache;
    n2[0] !== e2 && (t2.uniform1i(this.addr, e2), n2[0] = e2);
  }
  function Mo(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y || (t2.uniform2i(this.addr, e2.x, e2.y), n2[0] = e2.x, n2[1] = e2.y);
    else {
      if (co(n2, e2)) return;
      t2.uniform2iv(this.addr, e2), ho(n2, e2);
    }
  }
  function So(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z || (t2.uniform3i(this.addr, e2.x, e2.y, e2.z), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z);
    else {
      if (co(n2, e2)) return;
      t2.uniform3iv(this.addr, e2), ho(n2, e2);
    }
  }
  function bo(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z && n2[3] === e2.w || (t2.uniform4i(this.addr, e2.x, e2.y, e2.z, e2.w), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z, n2[3] = e2.w);
    else {
      if (co(n2, e2)) return;
      t2.uniform4iv(this.addr, e2), ho(n2, e2);
    }
  }
  function Eo(t2, e2) {
    const n2 = this.cache;
    n2[0] !== e2 && (t2.uniform1ui(this.addr, e2), n2[0] = e2);
  }
  function To(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y || (t2.uniform2ui(this.addr, e2.x, e2.y), n2[0] = e2.x, n2[1] = e2.y);
    else {
      if (co(n2, e2)) return;
      t2.uniform2uiv(this.addr, e2), ho(n2, e2);
    }
  }
  function wo(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z || (t2.uniform3ui(this.addr, e2.x, e2.y, e2.z), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z);
    else {
      if (co(n2, e2)) return;
      t2.uniform3uiv(this.addr, e2), ho(n2, e2);
    }
  }
  function Ao(t2, e2) {
    const n2 = this.cache;
    if (void 0 !== e2.x) n2[0] === e2.x && n2[1] === e2.y && n2[2] === e2.z && n2[3] === e2.w || (t2.uniform4ui(this.addr, e2.x, e2.y, e2.z, e2.w), n2[0] = e2.x, n2[1] = e2.y, n2[2] = e2.z, n2[3] = e2.w);
    else {
      if (co(n2, e2)) return;
      t2.uniform4uiv(this.addr, e2), ho(n2, e2);
    }
  }
  function Ro(t2, e2, n2) {
    const i = this.cache, r = n2.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r);
    const s = this.type === t2.SAMPLER_2D_SHADOW ? Qa : $a;
    n2.setTexture2D(e2 || s, r);
  }
  function Co(t2, e2, n2) {
    const i = this.cache, r = n2.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n2.setTexture3D(e2 || eo, r);
  }
  function Po(t2, e2, n2) {
    const i = this.cache, r = n2.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n2.setTextureCube(e2 || no, r);
  }
  function Lo(t2, e2, n2) {
    const i = this.cache, r = n2.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n2.setTexture2DArray(e2 || to, r);
  }
  function Io(t2, e2) {
    t2.uniform1fv(this.addr, e2);
  }
  function Uo(t2, e2) {
    const n2 = lo(e2, this.size, 2);
    t2.uniform2fv(this.addr, n2);
  }
  function No(t2, e2) {
    const n2 = lo(e2, this.size, 3);
    t2.uniform3fv(this.addr, n2);
  }
  function Do(t2, e2) {
    const n2 = lo(e2, this.size, 4);
    t2.uniform4fv(this.addr, n2);
  }
  function Oo(t2, e2) {
    const n2 = lo(e2, this.size, 4);
    t2.uniformMatrix2fv(this.addr, false, n2);
  }
  function Fo(t2, e2) {
    const n2 = lo(e2, this.size, 9);
    t2.uniformMatrix3fv(this.addr, false, n2);
  }
  function Bo(t2, e2) {
    const n2 = lo(e2, this.size, 16);
    t2.uniformMatrix4fv(this.addr, false, n2);
  }
  function zo(t2, e2) {
    t2.uniform1iv(this.addr, e2);
  }
  function Ho(t2, e2) {
    t2.uniform2iv(this.addr, e2);
  }
  function Vo(t2, e2) {
    t2.uniform3iv(this.addr, e2);
  }
  function ko(t2, e2) {
    t2.uniform4iv(this.addr, e2);
  }
  function Go(t2, e2) {
    t2.uniform1uiv(this.addr, e2);
  }
  function Wo(t2, e2) {
    t2.uniform2uiv(this.addr, e2);
  }
  function Xo(t2, e2) {
    t2.uniform3uiv(this.addr, e2);
  }
  function jo(t2, e2) {
    t2.uniform4uiv(this.addr, e2);
  }
  function qo(t2, e2, n2) {
    const i = this.cache, r = e2.length, s = uo(n2, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n2.setTexture2D(e2[t3] || $a, s[t3]);
  }
  function Yo(t2, e2, n2) {
    const i = this.cache, r = e2.length, s = uo(n2, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n2.setTexture3D(e2[t3] || eo, s[t3]);
  }
  function Zo(t2, e2, n2) {
    const i = this.cache, r = e2.length, s = uo(n2, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n2.setTextureCube(e2[t3] || no, s[t3]);
  }
  function Jo(t2, e2, n2) {
    const i = this.cache, r = e2.length, s = uo(n2, r);
    co(i, s) || (t2.uniform1iv(this.addr, s), ho(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n2.setTexture2DArray(e2[t3] || to, s[t3]);
  }
  var Ko = class {
    constructor(t2, e2, n2) {
      this.id = t2, this.addr = n2, this.cache = [], this.type = e2.type, this.setValue = function(t3) {
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
            return _o;
          case 35675:
            return vo;
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
            return Eo;
          case 36294:
            return To;
          case 36295:
            return wo;
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
            return Lo;
        }
      }(e2.type);
    }
  };
  var $o = class {
    constructor(t2, e2, n2) {
      this.id = t2, this.addr = n2, this.cache = [], this.type = e2.type, this.size = e2.size, this.setValue = function(t3) {
        switch (t3) {
          case 5126:
            return Io;
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
            return Ho;
          case 35668:
          case 35672:
            return Vo;
          case 35669:
          case 35673:
            return ko;
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
      }(e2.type);
    }
  };
  var Qo = class {
    constructor(t2) {
      this.id = t2, this.seq = [], this.map = {};
    }
    setValue(t2, e2, n2) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s2 = i[r];
        s2.setValue(t2, e2[s2.id], n2);
      }
    }
  };
  var tl = /(\w+)(\])?(\[|\.)?/g;
  function el(t2, e2) {
    t2.seq.push(e2), t2.map[e2.id] = e2;
  }
  function nl(t2, e2, n2) {
    const i = t2.name, r = i.length;
    for (tl.lastIndex = 0; ; ) {
      const s = tl.exec(i), a = tl.lastIndex;
      let o = s[1];
      const l2 = "]" === s[2], c6 = s[3];
      if (l2 && (o |= 0), void 0 === c6 || "[" === c6 && a + 2 === r) {
        el(n2, void 0 === c6 ? new Ko(o, t2, e2) : new $o(o, t2, e2));
        break;
      }
      {
        let t3 = n2.map[o];
        void 0 === t3 && (t3 = new Qo(o), el(n2, t3)), n2 = t3;
      }
    }
  }
  var il = class {
    constructor(t2, e2) {
      this.seq = [], this.map = {};
      const n2 = t2.getProgramParameter(e2, t2.ACTIVE_UNIFORMS);
      for (let i = 0; i < n2; ++i) {
        const n3 = t2.getActiveUniform(e2, i);
        nl(n3, t2.getUniformLocation(e2, n3.name), this);
      }
    }
    setValue(t2, e2, n2, i) {
      const r = this.map[e2];
      void 0 !== r && r.setValue(t2, n2, i);
    }
    setOptional(t2, e2, n2) {
      const i = e2[n2];
      void 0 !== i && this.setValue(t2, n2, i);
    }
    static upload(t2, e2, n2, i) {
      for (let r = 0, s = e2.length; r !== s; ++r) {
        const s2 = e2[r], a = n2[s2.id];
        false !== a.needsUpdate && s2.setValue(t2, a.value, i);
      }
    }
    static seqWithValue(t2, e2) {
      const n2 = [];
      for (let i = 0, r = t2.length; i !== r; ++i) {
        const r2 = t2[i];
        r2.id in e2 && n2.push(r2);
      }
      return n2;
    }
  };
  function rl(t2, e2, n2) {
    const i = t2.createShader(e2);
    return t2.shaderSource(i, n2), t2.compileShader(i), i;
  }
  var sl = 37297;
  var al = 0;
  function ol(t2, e2, n2) {
    const i = t2.getShaderParameter(e2, t2.COMPILE_STATUS), r = t2.getShaderInfoLog(e2).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i2 = parseInt(s[1]);
      return n2.toUpperCase() + "\n\n" + r + "\n\n" + function(t3, e3) {
        const n3 = t3.split("\n"), i3 = [], r2 = Math.max(e3 - 6, 0), s2 = Math.min(e3 + 6, n3.length);
        for (let t4 = r2; t4 < s2; t4++) {
          const r3 = t4 + 1;
          i3.push(`${r3 === e3 ? ">" : " "} ${r3}: ${n3[t4]}`);
        }
        return i3.join("\n");
      }(t2.getShaderSource(e2), i2);
    }
    return r;
  }
  function ll(t2, e2) {
    const n2 = function(t3) {
      const e3 = mi.getPrimaries(mi.workingColorSpace), n3 = mi.getPrimaries(t3);
      let i;
      switch (e3 === n3 ? i = "" : e3 === tn && n3 === Qe ? i = "LinearDisplayP3ToLinearSRGB" : e3 === Qe && n3 === tn && (i = "LinearSRGBToLinearDisplayP3"), t3) {
        case Ye:
        case Je:
          return [i, "LinearTransferOETF"];
        case qe:
        case Ze:
          return [i, "sRGBTransferOETF"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported color space:", t3), [i, "LinearTransferOETF"];
      }
    }(e2);
    return `vec4 ${t2}( vec4 value ) { return ${n2[0]}( ${n2[1]}( value ) ); }`;
  }
  function cl(t2, e2) {
    let n2;
    switch (e2) {
      case Q:
        n2 = "Linear";
        break;
      case tt:
        n2 = "Reinhard";
        break;
      case et:
        n2 = "OptimizedCineon";
        break;
      case nt:
        n2 = "ACESFilmic";
        break;
      case rt:
        n2 = "AgX";
        break;
      case it:
        n2 = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e2), n2 = "Linear";
    }
    return "vec3 " + t2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
  }
  function hl(t2) {
    return "" !== t2;
  }
  function ul(t2, e2) {
    const n2 = e2.numSpotLightShadows + e2.numSpotLightMaps - e2.numSpotLightShadowsWithMaps;
    return t2.replace(/NUM_DIR_LIGHTS/g, e2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, e2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e2.numPointLightShadows);
  }
  function dl(t2, e2) {
    return t2.replace(/NUM_CLIPPING_PLANES/g, e2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e2.numClippingPlanes - e2.numClipIntersection);
  }
  var pl = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function ml(t2) {
    return t2.replace(pl, gl);
  }
  var fl = /* @__PURE__ */ new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]);
  function gl(t2, e2) {
    let n2 = fa[e2];
    if (void 0 === n2) {
      const t3 = fl.get(e2);
      if (void 0 === t3) throw new Error("Can not resolve #include <" + e2 + ">");
      n2 = fa[t3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e2, t3);
    }
    return ml(n2);
  }
  var _l = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function vl(t2) {
    return t2.replace(_l, xl);
  }
  function xl(t2, e2, n2, i) {
    let r = "";
    for (let t3 = parseInt(e2); t3 < parseInt(n2); t3++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t3);
    return r;
  }
  function yl(t2) {
    let e2 = "precision " + t2.precision + " float;\nprecision " + t2.precision + " int;";
    return "highp" === t2.precision ? e2 += "\n#define HIGH_PRECISION" : "mediump" === t2.precision ? e2 += "\n#define MEDIUM_PRECISION" : "lowp" === t2.precision && (e2 += "\n#define LOW_PRECISION"), e2;
  }
  function Ml(t2, e2, n2, i) {
    const r = t2.getContext(), s = n2.defines;
    let a = n2.vertexShader, o = n2.fragmentShader;
    const u2 = function(t3) {
      let e3 = "SHADOWMAP_TYPE_BASIC";
      return t3.shadowMapType === l ? e3 = "SHADOWMAP_TYPE_PCF" : t3.shadowMapType === c ? e3 = "SHADOWMAP_TYPE_PCF_SOFT" : t3.shadowMapType === h && (e3 = "SHADOWMAP_TYPE_VSM"), e3;
    }(n2), d2 = function(t3) {
      let e3 = "ENVMAP_TYPE_CUBE";
      if (t3.envMap) switch (t3.envMapMode) {
        case lt:
        case ct:
          e3 = "ENVMAP_TYPE_CUBE";
          break;
        case dt:
          e3 = "ENVMAP_TYPE_CUBE_UV";
      }
      return e3;
    }(n2), p2 = function(t3) {
      let e3 = "ENVMAP_MODE_REFLECTION";
      t3.envMap && t3.envMapMode === ct && (e3 = "ENVMAP_MODE_REFRACTION");
      return e3;
    }(n2), m = function(t3) {
      let e3 = "ENVMAP_BLENDING_NONE";
      if (t3.envMap) switch (t3.combine) {
        case Z:
          e3 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case J:
          e3 = "ENVMAP_BLENDING_MIX";
          break;
        case K:
          e3 = "ENVMAP_BLENDING_ADD";
      }
      return e3;
    }(n2), f = function(t3) {
      const e3 = t3.envMapCubeUVHeight;
      if (null === e3) return null;
      const n3 = Math.log2(e3) - 2, i2 = 1 / e3;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: i2, maxMip: n3 };
    }(n2), g = n2.isWebGL2 ? "" : function(t3) {
      return [t3.extensionDerivatives || t3.envMapCubeUVHeight || t3.bumpMap || t3.normalMapTangentSpace || t3.clearcoatNormalMap || t3.flatShading || "physical" === t3.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t3.extensionFragDepth || t3.logarithmicDepthBuffer) && t3.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t3.extensionDrawBuffers && t3.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t3.extensionShaderTextureLOD || t3.envMap || t3.transmission) && t3.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(hl).join("\n");
    }(n2), _ = function(t3) {
      return [t3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""].filter(hl).join("\n");
    }(n2), v = function(t3) {
      const e3 = [];
      for (const n3 in t3) {
        const i2 = t3[n3];
        false !== i2 && e3.push("#define " + n3 + " " + i2);
      }
      return e3.join("\n");
    }(s), x = r.createProgram();
    let y, M3, S = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
    n2.isRawShaderMaterial ? (y = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, v].filter(hl).join("\n"), y.length > 0 && (y += "\n"), M3 = [g, "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, v].filter(hl).join("\n"), M3.length > 0 && (M3 += "\n")) : (y = [yl(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, v, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + p2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors && n2.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 && n2.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n2.morphTargetsCount > 0 && n2.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 && n2.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + u2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n2.logarithmicDepthBuffer && n2.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(hl).join("\n"), M3 = [g, yl(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, v, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + p2 : "", n2.envMap ? "#define " + m : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + u2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n2.logarithmicDepthBuffer && n2.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== $ ? "#define TONE_MAPPING" : "", n2.toneMapping !== $ ? fa.tonemapping_pars_fragment : "", n2.toneMapping !== $ ? cl("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", fa.colorspace_pars_fragment, ll("linearToOutputTexel", n2.outputColorSpace), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(hl).join("\n")), a = ml(a), a = ul(a, n2), a = dl(a, n2), o = ml(o), o = ul(o, n2), o = dl(o, n2), a = vl(a), o = vl(o), n2.isWebGL2 && true !== n2.isRawShaderMaterial && (S = "#version 300 es\n", y = [_, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + y, M3 = ["precision mediump sampler2DArray;", "#define varying in", n2.glslVersion === On ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === On ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + M3);
    const b = S + y + a, E = S + M3 + o, T = rl(r, r.VERTEX_SHADER, b), w = rl(r, r.FRAGMENT_SHADER, E);
    function A(e3) {
      if (t2.debug.checkShaderErrors) {
        const n3 = r.getProgramInfoLog(x).trim(), i2 = r.getShaderInfoLog(T).trim(), s2 = r.getShaderInfoLog(w).trim();
        let a2 = true, o2 = true;
        if (false === r.getProgramParameter(x, r.LINK_STATUS)) if (a2 = false, "function" == typeof t2.debug.onShaderError) t2.debug.onShaderError(r, x, T, w);
        else {
          const t3 = ol(r, T, "vertex"), e4 = ol(r, w, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + "\n\nProgram Info Log: " + n3 + "\n" + t3 + "\n" + e4);
        }
        else "" !== n3 ? console.warn("THREE.WebGLProgram: Program Info Log:", n3) : "" !== i2 && "" !== s2 || (o2 = false);
        o2 && (e3.diagnostics = { runnable: a2, programLog: n3, vertexShader: { log: i2, prefix: y }, fragmentShader: { log: s2, prefix: M3 } });
      }
      r.deleteShader(T), r.deleteShader(w), R = new il(r, x), C = function(t3, e4) {
        const n3 = {}, i2 = t3.getProgramParameter(e4, t3.ACTIVE_ATTRIBUTES);
        for (let r2 = 0; r2 < i2; r2++) {
          const i3 = t3.getActiveAttrib(e4, r2), s2 = i3.name;
          let a2 = 1;
          i3.type === t3.FLOAT_MAT2 && (a2 = 2), i3.type === t3.FLOAT_MAT3 && (a2 = 3), i3.type === t3.FLOAT_MAT4 && (a2 = 4), n3[s2] = { type: i3.type, location: t3.getAttribLocation(e4, s2), locationSize: a2 };
        }
        return n3;
      }(r, x);
    }
    let R, C;
    r.attachShader(x, T), r.attachShader(x, w), void 0 !== n2.index0AttributeName ? r.bindAttribLocation(x, 0, n2.index0AttributeName) : true === n2.morphTargets && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), this.getUniforms = function() {
      return void 0 === R && A(this), R;
    }, this.getAttributes = function() {
      return void 0 === C && A(this), C;
    };
    let P2 = false === n2.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === P2 && (P2 = r.getProgramParameter(x, sl)), P2;
    }, this.destroy = function() {
      i.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
    }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = al++, this.cacheKey = e2, this.usedTimes = 1, this.program = x, this.vertexShader = T, this.fragmentShader = w, this;
  }
  var Sl = 0;
  var bl = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(t2) {
      const e2 = t2.vertexShader, n2 = t2.fragmentShader, i = this._getShaderStage(e2), r = this._getShaderStage(n2), s = this._getShaderCacheForMaterial(t2);
      return false === s.has(i) && (s.add(i), i.usedTimes++), false === s.has(r) && (s.add(r), r.usedTimes++), this;
    }
    remove(t2) {
      const e2 = this.materialCache.get(t2);
      for (const t3 of e2) t3.usedTimes--, 0 === t3.usedTimes && this.shaderCache.delete(t3.code);
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
      const e2 = this.materialCache;
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), e2.set(t2, n2)), n2;
    }
    _getShaderStage(t2) {
      const e2 = this.shaderCache;
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = new El(t2), e2.set(t2, n2)), n2;
    }
  };
  var El = class {
    constructor(t2) {
      this.id = Sl++, this.code = t2, this.usedTimes = 0;
    }
  };
  function Tl(t2, e2, n2, i, r, s, a) {
    const o = new yr(), l2 = new bl(), c6 = [], h2 = r.isWebGL2, u2 = r.logarithmicDepthBuffer, p2 = r.vertexTextures;
    let m = r.precision;
    const f = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function g(t3) {
      return 0 === t3 ? "uv" : `uv${t3}`;
    }
    return { getParameters: function(s2, o2, c7, _, v) {
      const x = _.fog, y = v.geometry, M3 = s2.isMeshStandardMaterial ? _.environment : null, S = (s2.isMeshStandardMaterial ? n2 : e2).get(s2.envMap || M3), b = S && S.mapping === dt ? S.image.height : null, E = f[s2.type];
      null !== s2.precision && (m = r.getMaxPrecision(s2.precision), m !== s2.precision && console.warn("THREE.WebGLProgram.getParameters:", s2.precision, "not supported, using", m, "instead."));
      const T = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, w = void 0 !== T ? T.length : 0;
      let A, R, C, P2, L2 = 0;
      if (void 0 !== y.morphAttributes.position && (L2 = 1), void 0 !== y.morphAttributes.normal && (L2 = 2), void 0 !== y.morphAttributes.color && (L2 = 3), E) {
        const t3 = _a[E];
        A = t3.vertexShader, R = t3.fragmentShader;
      } else A = s2.vertexShader, R = s2.fragmentShader, l2.update(s2), C = l2.getVertexShaderID(s2), P2 = l2.getFragmentShaderID(s2);
      const I = t2.getRenderTarget(), U = true === v.isInstancedMesh, N = true === v.isBatchedMesh, D = !!s2.map, O = !!s2.matcap, F = !!S, B = !!s2.aoMap, z = !!s2.lightMap, H = !!s2.bumpMap, V2 = !!s2.normalMap, k = !!s2.displacementMap, G = !!s2.emissiveMap, W = !!s2.metalnessMap, X = !!s2.roughnessMap, j = s2.anisotropy > 0, q = s2.clearcoat > 0, Y = s2.iridescence > 0, Z2 = s2.sheen > 0, J2 = s2.transmission > 0, K3 = j && !!s2.anisotropyMap, Q2 = q && !!s2.clearcoatMap, tt2 = q && !!s2.clearcoatNormalMap, et2 = q && !!s2.clearcoatRoughnessMap, nt2 = Y && !!s2.iridescenceMap, it2 = Y && !!s2.iridescenceThicknessMap, rt2 = Z2 && !!s2.sheenColorMap, st11 = Z2 && !!s2.sheenRoughnessMap, at = !!s2.specularMap, ot2 = !!s2.specularColorMap, lt2 = !!s2.specularIntensityMap, ct2 = J2 && !!s2.transmissionMap, ht2 = J2 && !!s2.thicknessMap, ut2 = !!s2.gradientMap, pt2 = !!s2.alphaMap, mt2 = s2.alphaTest > 0, ft2 = !!s2.alphaHash, gt2 = !!s2.extensions, _t2 = !!y.attributes.uv1, vt = !!y.attributes.uv2, xt2 = !!y.attributes.uv3;
      let yt = $;
      return s2.toneMapped && (null !== I && true !== I.isXRRenderTarget || (yt = t2.toneMapping)), { isWebGL2: h2, shaderID: E, shaderType: s2.type, shaderName: s2.name, vertexShader: A, fragmentShader: R, defines: s2.defines, customVertexShaderID: C, customFragmentShaderID: P2, isRawShaderMaterial: true === s2.isRawShaderMaterial, glslVersion: s2.glslVersion, precision: m, batching: N, instancing: U, instancingColor: U && null !== v.instanceColor, supportsVertexTextures: p2, outputColorSpace: null === I ? t2.outputColorSpace : true === I.isXRRenderTarget ? I.texture.colorSpace : Ye, map: D, matcap: O, envMap: F, envMapMode: F && S.mapping, envMapCubeUVHeight: b, aoMap: B, lightMap: z, bumpMap: H, normalMap: V2, displacementMap: p2 && k, emissiveMap: G, normalMapObjectSpace: V2 && 1 === s2.normalMapType, normalMapTangentSpace: V2 && 0 === s2.normalMapType, metalnessMap: W, roughnessMap: X, anisotropy: j, anisotropyMap: K3, clearcoat: q, clearcoatMap: Q2, clearcoatNormalMap: tt2, clearcoatRoughnessMap: et2, iridescence: Y, iridescenceMap: nt2, iridescenceThicknessMap: it2, sheen: Z2, sheenColorMap: rt2, sheenRoughnessMap: st11, specularMap: at, specularColorMap: ot2, specularIntensityMap: lt2, transmission: J2, transmissionMap: ct2, thicknessMap: ht2, gradientMap: ut2, opaque: false === s2.transparent && 1 === s2.blending, alphaMap: pt2, alphaTest: mt2, alphaHash: ft2, combine: s2.combine, mapUv: D && g(s2.map.channel), aoMapUv: B && g(s2.aoMap.channel), lightMapUv: z && g(s2.lightMap.channel), bumpMapUv: H && g(s2.bumpMap.channel), normalMapUv: V2 && g(s2.normalMap.channel), displacementMapUv: k && g(s2.displacementMap.channel), emissiveMapUv: G && g(s2.emissiveMap.channel), metalnessMapUv: W && g(s2.metalnessMap.channel), roughnessMapUv: X && g(s2.roughnessMap.channel), anisotropyMapUv: K3 && g(s2.anisotropyMap.channel), clearcoatMapUv: Q2 && g(s2.clearcoatMap.channel), clearcoatNormalMapUv: tt2 && g(s2.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: et2 && g(s2.clearcoatRoughnessMap.channel), iridescenceMapUv: nt2 && g(s2.iridescenceMap.channel), iridescenceThicknessMapUv: it2 && g(s2.iridescenceThicknessMap.channel), sheenColorMapUv: rt2 && g(s2.sheenColorMap.channel), sheenRoughnessMapUv: st11 && g(s2.sheenRoughnessMap.channel), specularMapUv: at && g(s2.specularMap.channel), specularColorMapUv: ot2 && g(s2.specularColorMap.channel), specularIntensityMapUv: lt2 && g(s2.specularIntensityMap.channel), transmissionMapUv: ct2 && g(s2.transmissionMap.channel), thicknessMapUv: ht2 && g(s2.thicknessMap.channel), alphaMapUv: pt2 && g(s2.alphaMap.channel), vertexTangents: !!y.attributes.tangent && (V2 || j), vertexColors: s2.vertexColors, vertexAlphas: true === s2.vertexColors && !!y.attributes.color && 4 === y.attributes.color.itemSize, vertexUv1s: _t2, vertexUv2s: vt, vertexUv3s: xt2, pointsUvs: true === v.isPoints && !!y.attributes.uv && (D || pt2), fog: !!x, useFog: true === s2.fog, fogExp2: x && x.isFogExp2, flatShading: true === s2.flatShading, sizeAttenuation: true === s2.sizeAttenuation, logarithmicDepthBuffer: u2, skinning: true === v.isSkinnedMesh, morphTargets: void 0 !== y.morphAttributes.position, morphNormals: void 0 !== y.morphAttributes.normal, morphColors: void 0 !== y.morphAttributes.color, morphTargetsCount: w, morphTextureStride: L2, numDirLights: o2.directional.length, numPointLights: o2.point.length, numSpotLights: o2.spot.length, numSpotLightMaps: o2.spotLightMap.length, numRectAreaLights: o2.rectArea.length, numHemiLights: o2.hemi.length, numDirLightShadows: o2.directionalShadowMap.length, numPointLightShadows: o2.pointShadowMap.length, numSpotLightShadows: o2.spotShadowMap.length, numSpotLightShadowsWithMaps: o2.numSpotLightShadowsWithMaps, numLightProbes: o2.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s2.dithering, shadowMapEnabled: t2.shadowMap.enabled && c7.length > 0, shadowMapType: t2.shadowMap.type, toneMapping: yt, useLegacyLights: t2._useLegacyLights, decodeVideoTexture: D && true === s2.map.isVideoTexture && mi.getTransfer(s2.map.colorSpace) === $e, premultipliedAlpha: s2.premultipliedAlpha, doubleSided: 2 === s2.side, flipSided: s2.side === d, useDepthPacking: s2.depthPacking >= 0, depthPacking: s2.depthPacking || 0, index0AttributeName: s2.index0AttributeName, extensionDerivatives: gt2 && true === s2.extensions.derivatives, extensionFragDepth: gt2 && true === s2.extensions.fragDepth, extensionDrawBuffers: gt2 && true === s2.extensions.drawBuffers, extensionShaderTextureLOD: gt2 && true === s2.extensions.shaderTextureLOD, extensionClipCullDistance: gt2 && s2.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"), rendererExtensionFragDepth: h2 || i.has("EXT_frag_depth"), rendererExtensionDrawBuffers: h2 || i.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: h2 || i.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: s2.customProgramCacheKey() };
    }, getProgramCacheKey: function(e3) {
      const n3 = [];
      if (e3.shaderID ? n3.push(e3.shaderID) : (n3.push(e3.customVertexShaderID), n3.push(e3.customFragmentShaderID)), void 0 !== e3.defines) for (const t3 in e3.defines) n3.push(t3), n3.push(e3.defines[t3]);
      return false === e3.isRawShaderMaterial && (!function(t3, e4) {
        t3.push(e4.precision), t3.push(e4.outputColorSpace), t3.push(e4.envMapMode), t3.push(e4.envMapCubeUVHeight), t3.push(e4.mapUv), t3.push(e4.alphaMapUv), t3.push(e4.lightMapUv), t3.push(e4.aoMapUv), t3.push(e4.bumpMapUv), t3.push(e4.normalMapUv), t3.push(e4.displacementMapUv), t3.push(e4.emissiveMapUv), t3.push(e4.metalnessMapUv), t3.push(e4.roughnessMapUv), t3.push(e4.anisotropyMapUv), t3.push(e4.clearcoatMapUv), t3.push(e4.clearcoatNormalMapUv), t3.push(e4.clearcoatRoughnessMapUv), t3.push(e4.iridescenceMapUv), t3.push(e4.iridescenceThicknessMapUv), t3.push(e4.sheenColorMapUv), t3.push(e4.sheenRoughnessMapUv), t3.push(e4.specularMapUv), t3.push(e4.specularColorMapUv), t3.push(e4.specularIntensityMapUv), t3.push(e4.transmissionMapUv), t3.push(e4.thicknessMapUv), t3.push(e4.combine), t3.push(e4.fogExp2), t3.push(e4.sizeAttenuation), t3.push(e4.morphTargetsCount), t3.push(e4.morphAttributeCount), t3.push(e4.numDirLights), t3.push(e4.numPointLights), t3.push(e4.numSpotLights), t3.push(e4.numSpotLightMaps), t3.push(e4.numHemiLights), t3.push(e4.numRectAreaLights), t3.push(e4.numDirLightShadows), t3.push(e4.numPointLightShadows), t3.push(e4.numSpotLightShadows), t3.push(e4.numSpotLightShadowsWithMaps), t3.push(e4.numLightProbes), t3.push(e4.shadowMapType), t3.push(e4.toneMapping), t3.push(e4.numClippingPlanes), t3.push(e4.numClipIntersection), t3.push(e4.depthPacking);
      }(n3, e3), function(t3, e4) {
        o.disableAll(), e4.isWebGL2 && o.enable(0);
        e4.supportsVertexTextures && o.enable(1);
        e4.instancing && o.enable(2);
        e4.instancingColor && o.enable(3);
        e4.matcap && o.enable(4);
        e4.envMap && o.enable(5);
        e4.normalMapObjectSpace && o.enable(6);
        e4.normalMapTangentSpace && o.enable(7);
        e4.clearcoat && o.enable(8);
        e4.iridescence && o.enable(9);
        e4.alphaTest && o.enable(10);
        e4.vertexColors && o.enable(11);
        e4.vertexAlphas && o.enable(12);
        e4.vertexUv1s && o.enable(13);
        e4.vertexUv2s && o.enable(14);
        e4.vertexUv3s && o.enable(15);
        e4.vertexTangents && o.enable(16);
        e4.anisotropy && o.enable(17);
        e4.alphaHash && o.enable(18);
        e4.batching && o.enable(19);
        t3.push(o.mask), o.disableAll(), e4.fog && o.enable(0);
        e4.useFog && o.enable(1);
        e4.flatShading && o.enable(2);
        e4.logarithmicDepthBuffer && o.enable(3);
        e4.skinning && o.enable(4);
        e4.morphTargets && o.enable(5);
        e4.morphNormals && o.enable(6);
        e4.morphColors && o.enable(7);
        e4.premultipliedAlpha && o.enable(8);
        e4.shadowMapEnabled && o.enable(9);
        e4.useLegacyLights && o.enable(10);
        e4.doubleSided && o.enable(11);
        e4.flipSided && o.enable(12);
        e4.useDepthPacking && o.enable(13);
        e4.dithering && o.enable(14);
        e4.transmission && o.enable(15);
        e4.sheen && o.enable(16);
        e4.opaque && o.enable(17);
        e4.pointsUvs && o.enable(18);
        e4.decodeVideoTexture && o.enable(19);
        t3.push(o.mask);
      }(n3, e3), n3.push(t2.outputColorSpace)), n3.push(e3.customProgramCacheKey), n3.join();
    }, getUniforms: function(t3) {
      const e3 = f[t3.type];
      let n3;
      if (e3) {
        const t4 = _a[e3];
        n3 = Ks.clone(t4.uniforms);
      } else n3 = t3.uniforms;
      return n3;
    }, acquireProgram: function(e3, n3) {
      let i2;
      for (let t3 = 0, e4 = c6.length; t3 < e4; t3++) {
        const e5 = c6[t3];
        if (e5.cacheKey === n3) {
          i2 = e5, ++i2.usedTimes;
          break;
        }
      }
      return void 0 === i2 && (i2 = new Ml(t2, n3, e3, s), c6.push(i2)), i2;
    }, releaseProgram: function(t3) {
      if (0 == --t3.usedTimes) {
        const e3 = c6.indexOf(t3);
        c6[e3] = c6[c6.length - 1], c6.pop(), t3.destroy();
      }
    }, releaseShaderCache: function(t3) {
      l2.remove(t3);
    }, programs: c6, dispose: function() {
      l2.dispose();
    } };
  }
  function wl() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e2) {
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = {}, t2.set(e2, n2)), n2;
    }, remove: function(e2) {
      t2.delete(e2);
    }, update: function(e2, n2, i) {
      t2.get(e2)[n2] = i;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Al(t2, e2) {
    return t2.groupOrder !== e2.groupOrder ? t2.groupOrder - e2.groupOrder : t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.material.id !== e2.material.id ? t2.material.id - e2.material.id : t2.z !== e2.z ? t2.z - e2.z : t2.id - e2.id;
  }
  function Rl(t2, e2) {
    return t2.groupOrder !== e2.groupOrder ? t2.groupOrder - e2.groupOrder : t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.z !== e2.z ? e2.z - t2.z : t2.id - e2.id;
  }
  function Cl() {
    const t2 = [];
    let e2 = 0;
    const n2 = [], i = [], r = [];
    function s(n3, i2, r2, s2, a, o) {
      let l2 = t2[e2];
      return void 0 === l2 ? (l2 = { id: n3.id, object: n3, geometry: i2, material: r2, groupOrder: s2, renderOrder: n3.renderOrder, z: a, group: o }, t2[e2] = l2) : (l2.id = n3.id, l2.object = n3, l2.geometry = i2, l2.material = r2, l2.groupOrder = s2, l2.renderOrder = n3.renderOrder, l2.z = a, l2.group = o), e2++, l2;
    }
    return { opaque: n2, transmissive: i, transparent: r, init: function() {
      e2 = 0, n2.length = 0, i.length = 0, r.length = 0;
    }, push: function(t3, e3, a, o, l2, c6) {
      const h2 = s(t3, e3, a, o, l2, c6);
      a.transmission > 0 ? i.push(h2) : true === a.transparent ? r.push(h2) : n2.push(h2);
    }, unshift: function(t3, e3, a, o, l2, c6) {
      const h2 = s(t3, e3, a, o, l2, c6);
      a.transmission > 0 ? i.unshift(h2) : true === a.transparent ? r.unshift(h2) : n2.unshift(h2);
    }, finish: function() {
      for (let n3 = e2, i2 = t2.length; n3 < i2; n3++) {
        const e3 = t2[n3];
        if (null === e3.id) break;
        e3.id = null, e3.object = null, e3.geometry = null, e3.material = null, e3.group = null;
      }
    }, sort: function(t3, e3) {
      n2.length > 1 && n2.sort(t3 || Al), i.length > 1 && i.sort(e3 || Rl), r.length > 1 && r.sort(e3 || Rl);
    } };
  }
  function Pl() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e2, n2) {
      const i = t2.get(e2);
      let r;
      return void 0 === i ? (r = new Cl(), t2.set(e2, [r])) : n2 >= i.length ? (r = new Cl(), i.push(r)) : r = i[n2], r;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Ll() {
    const t2 = {};
    return { get: function(e2) {
      if (void 0 !== t2[e2.id]) return t2[e2.id];
      let n2;
      switch (e2.type) {
        case "DirectionalLight":
          n2 = { direction: new Ui(), color: new Kr() };
          break;
        case "SpotLight":
          n2 = { position: new Ui(), direction: new Ui(), color: new Kr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          n2 = { position: new Ui(), color: new Kr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n2 = { direction: new Ui(), skyColor: new Kr(), groundColor: new Kr() };
          break;
        case "RectAreaLight":
          n2 = { color: new Kr(), position: new Ui(), halfWidth: new Ui(), halfHeight: new Ui() };
      }
      return t2[e2.id] = n2, n2;
    } };
  }
  var Il = 0;
  function Ul(t2, e2) {
    return (e2.castShadow ? 2 : 0) - (t2.castShadow ? 2 : 0) + (e2.map ? 1 : 0) - (t2.map ? 1 : 0);
  }
  function Nl(t2, e2) {
    const n2 = new Ll(), i = /* @__PURE__ */ function() {
      const t3 = {};
      return { get: function(e3) {
        if (void 0 !== t3[e3.id]) return t3[e3.id];
        let n3;
        switch (e3.type) {
          case "DirectionalLight":
          case "SpotLight":
            n3 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ti() };
            break;
          case "PointLight":
            n3 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ti(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return t3[e3.id] = n3, n3;
      } };
    }(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let t3 = 0; t3 < 9; t3++) r.probe.push(new Ui());
    const s = new Ui(), a = new cr(), o = new cr();
    return { setup: function(s2, a2) {
      let o2 = 0, l2 = 0, c6 = 0;
      for (let t3 = 0; t3 < 9; t3++) r.probe[t3].set(0, 0, 0);
      let h2 = 0, u2 = 0, d2 = 0, p2 = 0, m = 0, f = 0, g = 0, _ = 0, v = 0, x = 0, y = 0;
      s2.sort(Ul);
      const M3 = true === a2 ? Math.PI : 1;
      for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
        const e4 = s2[t3], a3 = e4.color, S2 = e4.intensity, b = e4.distance, E = e4.shadow && e4.shadow.map ? e4.shadow.map.texture : null;
        if (e4.isAmbientLight) o2 += a3.r * S2 * M3, l2 += a3.g * S2 * M3, c6 += a3.b * S2 * M3;
        else if (e4.isLightProbe) {
          for (let t4 = 0; t4 < 9; t4++) r.probe[t4].addScaledVector(e4.sh.coefficients[t4], S2);
          y++;
        } else if (e4.isDirectionalLight) {
          const t4 = n2.get(e4);
          if (t4.color.copy(e4.color).multiplyScalar(e4.intensity * M3), e4.castShadow) {
            const t5 = e4.shadow, n3 = i.get(e4);
            n3.shadowBias = t5.bias, n3.shadowNormalBias = t5.normalBias, n3.shadowRadius = t5.radius, n3.shadowMapSize = t5.mapSize, r.directionalShadow[h2] = n3, r.directionalShadowMap[h2] = E, r.directionalShadowMatrix[h2] = e4.shadow.matrix, f++;
          }
          r.directional[h2] = t4, h2++;
        } else if (e4.isSpotLight) {
          const t4 = n2.get(e4);
          t4.position.setFromMatrixPosition(e4.matrixWorld), t4.color.copy(a3).multiplyScalar(S2 * M3), t4.distance = b, t4.coneCos = Math.cos(e4.angle), t4.penumbraCos = Math.cos(e4.angle * (1 - e4.penumbra)), t4.decay = e4.decay, r.spot[d2] = t4;
          const s3 = e4.shadow;
          if (e4.map && (r.spotLightMap[v] = e4.map, v++, s3.updateMatrices(e4), e4.castShadow && x++), r.spotLightMatrix[d2] = s3.matrix, e4.castShadow) {
            const t5 = i.get(e4);
            t5.shadowBias = s3.bias, t5.shadowNormalBias = s3.normalBias, t5.shadowRadius = s3.radius, t5.shadowMapSize = s3.mapSize, r.spotShadow[d2] = t5, r.spotShadowMap[d2] = E, _++;
          }
          d2++;
        } else if (e4.isRectAreaLight) {
          const t4 = n2.get(e4);
          t4.color.copy(a3).multiplyScalar(S2), t4.halfWidth.set(0.5 * e4.width, 0, 0), t4.halfHeight.set(0, 0.5 * e4.height, 0), r.rectArea[p2] = t4, p2++;
        } else if (e4.isPointLight) {
          const t4 = n2.get(e4);
          if (t4.color.copy(e4.color).multiplyScalar(e4.intensity * M3), t4.distance = e4.distance, t4.decay = e4.decay, e4.castShadow) {
            const t5 = e4.shadow, n3 = i.get(e4);
            n3.shadowBias = t5.bias, n3.shadowNormalBias = t5.normalBias, n3.shadowRadius = t5.radius, n3.shadowMapSize = t5.mapSize, n3.shadowCameraNear = t5.camera.near, n3.shadowCameraFar = t5.camera.far, r.pointShadow[u2] = n3, r.pointShadowMap[u2] = E, r.pointShadowMatrix[u2] = e4.shadow.matrix, g++;
          }
          r.point[u2] = t4, u2++;
        } else if (e4.isHemisphereLight) {
          const t4 = n2.get(e4);
          t4.skyColor.copy(e4.color).multiplyScalar(S2 * M3), t4.groundColor.copy(e4.groundColor).multiplyScalar(S2 * M3), r.hemi[m] = t4, m++;
        }
      }
      p2 > 0 && (e2.isWebGL2 ? true === t2.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ga.LTC_FLOAT_1, r.rectAreaLTC2 = ga.LTC_FLOAT_2) : (r.rectAreaLTC1 = ga.LTC_HALF_1, r.rectAreaLTC2 = ga.LTC_HALF_2) : true === t2.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ga.LTC_FLOAT_1, r.rectAreaLTC2 = ga.LTC_FLOAT_2) : true === t2.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ga.LTC_HALF_1, r.rectAreaLTC2 = ga.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o2, r.ambient[1] = l2, r.ambient[2] = c6;
      const S = r.hash;
      S.directionalLength === h2 && S.pointLength === u2 && S.spotLength === d2 && S.rectAreaLength === p2 && S.hemiLength === m && S.numDirectionalShadows === f && S.numPointShadows === g && S.numSpotShadows === _ && S.numSpotMaps === v && S.numLightProbes === y || (r.directional.length = h2, r.spot.length = d2, r.rectArea.length = p2, r.point.length = u2, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, r.numLightProbes = y, S.directionalLength = h2, S.pointLength = u2, S.spotLength = d2, S.rectAreaLength = p2, S.hemiLength = m, S.numDirectionalShadows = f, S.numPointShadows = g, S.numSpotShadows = _, S.numSpotMaps = v, S.numLightProbes = y, r.version = Il++);
    }, setupView: function(t3, e3) {
      let n3 = 0, i2 = 0, l2 = 0, c6 = 0, h2 = 0;
      const u2 = e3.matrixWorldInverse;
      for (let e4 = 0, d2 = t3.length; e4 < d2; e4++) {
        const d3 = t3[e4];
        if (d3.isDirectionalLight) {
          const t4 = r.directional[n3];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), s.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s), t4.direction.transformDirection(u2), n3++;
        } else if (d3.isSpotLight) {
          const t4 = r.spot[l2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), t4.direction.setFromMatrixPosition(d3.matrixWorld), s.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s), t4.direction.transformDirection(u2), l2++;
        } else if (d3.isRectAreaLight) {
          const t4 = r.rectArea[c6];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), o.identity(), a.copy(d3.matrixWorld), a.premultiply(u2), o.extractRotation(a), t4.halfWidth.set(0.5 * d3.width, 0, 0), t4.halfHeight.set(0, 0.5 * d3.height, 0), t4.halfWidth.applyMatrix4(o), t4.halfHeight.applyMatrix4(o), c6++;
        } else if (d3.isPointLight) {
          const t4 = r.point[i2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), i2++;
        } else if (d3.isHemisphereLight) {
          const t4 = r.hemi[h2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), t4.direction.transformDirection(u2), h2++;
        }
      }
    }, state: r };
  }
  function Dl(t2, e2) {
    const n2 = new Nl(t2, e2), i = [], r = [];
    return { init: function() {
      i.length = 0, r.length = 0;
    }, state: { lightsArray: i, shadowsArray: r, lights: n2 }, setupLights: function(t3) {
      n2.setup(i, t3);
    }, setupLightsView: function(t3) {
      n2.setupView(i, t3);
    }, pushLight: function(t3) {
      i.push(t3);
    }, pushShadow: function(t3) {
      r.push(t3);
    } };
  }
  function Ol(t2, e2) {
    let n2 = /* @__PURE__ */ new WeakMap();
    return { get: function(i, r = 0) {
      const s = n2.get(i);
      let a;
      return void 0 === s ? (a = new Dl(t2, e2), n2.set(i, [a])) : r >= s.length ? (a = new Dl(t2, e2), s.push(a)) : a = s[r], a;
    }, dispose: function() {
      n2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Fl = class extends ts {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var Bl = class extends ts {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function zl(t2, e2, n2) {
    let i = new ua();
    const r = new ti(), s = new ti(), a = new Ei(), o = new Fl({ depthPacking: 3201 }), c6 = new Bl(), p2 = {}, m = n2.maxTextureSize, f = { [u]: d, [d]: u, 2: 2 }, g = new $s({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ti() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), _ = g.clone();
    _.defines.HORIZONTAL_PASS = 1;
    const v = new As();
    v.setAttribute("position", new cs(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const x = new Xs(v, g), y = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = l;
    let M3 = this.type;
    function S(n3, i2) {
      const s2 = e2.update(x);
      g.defines.VSM_SAMPLES !== n3.blurSamples && (g.defines.VSM_SAMPLES = n3.blurSamples, _.defines.VSM_SAMPLES = n3.blurSamples, g.needsUpdate = true, _.needsUpdate = true), null === n3.mapPass && (n3.mapPass = new wi(r.x, r.y)), g.uniforms.shadow_pass.value = n3.map.texture, g.uniforms.resolution.value = n3.mapSize, g.uniforms.radius.value = n3.radius, t2.setRenderTarget(n3.mapPass), t2.clear(), t2.renderBufferDirect(i2, null, s2, g, x, null), _.uniforms.shadow_pass.value = n3.mapPass.texture, _.uniforms.resolution.value = n3.mapSize, _.uniforms.radius.value = n3.radius, t2.setRenderTarget(n3.map), t2.clear(), t2.renderBufferDirect(i2, null, s2, _, x, null);
    }
    function b(e3, n3, i2, r2) {
      let s2 = null;
      const a2 = true === i2.isPointLight ? e3.customDistanceMaterial : e3.customDepthMaterial;
      if (void 0 !== a2) s2 = a2;
      else if (s2 = true === i2.isPointLight ? c6 : o, t2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0) {
        const t3 = s2.uuid, e4 = n3.uuid;
        let i3 = p2[t3];
        void 0 === i3 && (i3 = {}, p2[t3] = i3);
        let r3 = i3[e4];
        void 0 === r3 && (r3 = s2.clone(), i3[e4] = r3, n3.addEventListener("dispose", T)), s2 = r3;
      }
      if (s2.visible = n3.visible, s2.wireframe = n3.wireframe, s2.side = r2 === h ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : f[n3.side], s2.alphaMap = n3.alphaMap, s2.alphaTest = n3.alphaTest, s2.map = n3.map, s2.clipShadows = n3.clipShadows, s2.clippingPlanes = n3.clippingPlanes, s2.clipIntersection = n3.clipIntersection, s2.displacementMap = n3.displacementMap, s2.displacementScale = n3.displacementScale, s2.displacementBias = n3.displacementBias, s2.wireframeLinewidth = n3.wireframeLinewidth, s2.linewidth = n3.linewidth, true === i2.isPointLight && true === s2.isMeshDistanceMaterial) {
        t2.properties.get(s2).light = i2;
      }
      return s2;
    }
    function E(n3, r2, s2, a2, o2) {
      if (false === n3.visible) return;
      if (n3.layers.test(r2.layers) && (n3.isMesh || n3.isLine || n3.isPoints) && (n3.castShadow || n3.receiveShadow && o2 === h) && (!n3.frustumCulled || i.intersectsObject(n3))) {
        n3.modelViewMatrix.multiplyMatrices(s2.matrixWorldInverse, n3.matrixWorld);
        const i2 = e2.update(n3), l3 = n3.material;
        if (Array.isArray(l3)) {
          const e3 = i2.groups;
          for (let c7 = 0, h2 = e3.length; c7 < h2; c7++) {
            const h3 = e3[c7], u2 = l3[h3.materialIndex];
            if (u2 && u2.visible) {
              const e4 = b(n3, u2, a2, o2);
              n3.onBeforeShadow(t2, n3, r2, s2, i2, e4, h3), t2.renderBufferDirect(s2, null, i2, e4, n3, h3), n3.onAfterShadow(t2, n3, r2, s2, i2, e4, h3);
            }
          }
        } else if (l3.visible) {
          const e3 = b(n3, l3, a2, o2);
          n3.onBeforeShadow(t2, n3, r2, s2, i2, e3, null), t2.renderBufferDirect(s2, null, i2, e3, n3, null), n3.onAfterShadow(t2, n3, r2, s2, i2, e3, null);
        }
      }
      const l2 = n3.children;
      for (let t3 = 0, e3 = l2.length; t3 < e3; t3++) E(l2[t3], r2, s2, a2, o2);
    }
    function T(t3) {
      t3.target.removeEventListener("dispose", T);
      for (const e3 in p2) {
        const n3 = p2[e3], i2 = t3.target.uuid;
        if (i2 in n3) {
          n3[i2].dispose(), delete n3[i2];
        }
      }
    }
    this.render = function(e3, n3, o2) {
      if (false === y.enabled) return;
      if (false === y.autoUpdate && false === y.needsUpdate) return;
      if (0 === e3.length) return;
      const l2 = t2.getRenderTarget(), c7 = t2.getActiveCubeFace(), u2 = t2.getActiveMipmapLevel(), d2 = t2.state;
      d2.setBlending(0), d2.buffers.color.setClear(1, 1, 1, 1), d2.buffers.depth.setTest(true), d2.setScissorTest(false);
      const p3 = M3 !== h && this.type === h, f2 = M3 === h && this.type !== h;
      for (let l3 = 0, c8 = e3.length; l3 < c8; l3++) {
        const c9 = e3[l3], u3 = c9.shadow;
        if (void 0 === u3) {
          console.warn("THREE.WebGLShadowMap:", c9, "has no shadow.");
          continue;
        }
        if (false === u3.autoUpdate && false === u3.needsUpdate) continue;
        r.copy(u3.mapSize);
        const g2 = u3.getFrameExtents();
        if (r.multiply(g2), s.copy(u3.mapSize), (r.x > m || r.y > m) && (r.x > m && (s.x = Math.floor(m / g2.x), r.x = s.x * g2.x, u3.mapSize.x = s.x), r.y > m && (s.y = Math.floor(m / g2.y), r.y = s.y * g2.y, u3.mapSize.y = s.y)), null === u3.map || true === p3 || true === f2) {
          const t3 = this.type !== h ? { minFilter: gt, magFilter: gt } : {};
          null !== u3.map && u3.map.dispose(), u3.map = new wi(r.x, r.y, t3), u3.map.texture.name = c9.name + ".shadowMap", u3.camera.updateProjectionMatrix();
        }
        t2.setRenderTarget(u3.map), t2.clear();
        const _2 = u3.getViewportCount();
        for (let t3 = 0; t3 < _2; t3++) {
          const e4 = u3.getViewport(t3);
          a.set(s.x * e4.x, s.y * e4.y, s.x * e4.z, s.y * e4.w), d2.viewport(a), u3.updateMatrices(c9, t3), i = u3.getFrustum(), E(n3, o2, u3.camera, c9, this.type);
        }
        true !== u3.isPointLightShadow && this.type === h && S(u3, o2), u3.needsUpdate = false;
      }
      M3 = this.type, y.needsUpdate = false, t2.setRenderTarget(l2, c7, u2);
    };
  }
  function Hl(t2, e2, n2) {
    const i = n2.isWebGL2;
    const r = new function() {
      let e3 = false;
      const n3 = new Ei();
      let i2 = null;
      const r2 = new Ei(0, 0, 0, 0);
      return { setMask: function(n4) {
        i2 === n4 || e3 || (t2.colorMask(n4, n4, n4, n4), i2 = n4);
      }, setLocked: function(t3) {
        e3 = t3;
      }, setClear: function(e4, i3, s2, a2, o2) {
        true === o2 && (e4 *= a2, i3 *= a2, s2 *= a2), n3.set(e4, i3, s2, a2), false === r2.equals(n3) && (t2.clearColor(e4, i3, s2, a2), r2.copy(n3));
      }, reset: function() {
        e3 = false, i2 = null, r2.set(-1, 0, 0, 0);
      } };
    }(), s = new function() {
      let e3 = false, n3 = null, i2 = null, r2 = null;
      return { setTest: function(e4) {
        e4 ? j(t2.DEPTH_TEST) : q(t2.DEPTH_TEST);
      }, setMask: function(i3) {
        n3 === i3 || e3 || (t2.depthMask(i3), n3 = i3);
      }, setFunc: function(e4) {
        if (i2 !== e4) {
          switch (e4) {
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
          i2 = e4;
        }
      }, setLocked: function(t3) {
        e3 = t3;
      }, setClear: function(e4) {
        r2 !== e4 && (t2.clearDepth(e4), r2 = e4);
      }, reset: function() {
        e3 = false, n3 = null, i2 = null, r2 = null;
      } };
    }(), a = new function() {
      let e3 = false, n3 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c7 = null;
      return { setTest: function(n4) {
        e3 || (n4 ? j(t2.STENCIL_TEST) : q(t2.STENCIL_TEST));
      }, setMask: function(i3) {
        n3 === i3 || e3 || (t2.stencilMask(i3), n3 = i3);
      }, setFunc: function(e4, n4, a3) {
        i2 === e4 && r2 === n4 && s2 === a3 || (t2.stencilFunc(e4, n4, a3), i2 = e4, r2 = n4, s2 = a3);
      }, setOp: function(e4, n4, i3) {
        a2 === e4 && o2 === n4 && l3 === i3 || (t2.stencilOp(e4, n4, i3), a2 = e4, o2 = n4, l3 = i3);
      }, setLocked: function(t3) {
        e3 = t3;
      }, setClear: function(e4) {
        c7 !== e4 && (t2.clearStencil(e4), c7 = e4);
      }, reset: function() {
        e3 = false, n3 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c7 = null;
      } };
    }(), o = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap();
    let c6 = {}, h2 = {}, u2 = /* @__PURE__ */ new WeakMap(), p2 = [], m = null, f = false, g = null, _ = null, v = null, x = null, y = null, S = null, b = null, E = new Kr(0, 0, 0), T = 0, w = false, A = null, R = null, C = null, I = null, U = null;
    const N = t2.getParameter(t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let D = false, O = 0;
    const F = t2.getParameter(t2.VERSION);
    -1 !== F.indexOf("WebGL") ? (O = parseFloat(/^WebGL (\d)/.exec(F)[1]), D = O >= 1) : -1 !== F.indexOf("OpenGL ES") && (O = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), D = O >= 2);
    let B = null, z = {};
    const H = t2.getParameter(t2.SCISSOR_BOX), V2 = t2.getParameter(t2.VIEWPORT), k = new Ei().fromArray(H), G = new Ei().fromArray(V2);
    function W(e3, n3, r2, s2) {
      const a2 = new Uint8Array(4), o2 = t2.createTexture();
      t2.bindTexture(e3, o2), t2.texParameteri(e3, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(e3, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
      for (let o3 = 0; o3 < r2; o3++) !i || e3 !== t2.TEXTURE_3D && e3 !== t2.TEXTURE_2D_ARRAY ? t2.texImage2D(n3 + o3, 0, t2.RGBA, 1, 1, 0, t2.RGBA, t2.UNSIGNED_BYTE, a2) : t2.texImage3D(n3, 0, t2.RGBA, 1, 1, s2, 0, t2.RGBA, t2.UNSIGNED_BYTE, a2);
      return o2;
    }
    const X = {};
    function j(e3) {
      true !== c6[e3] && (t2.enable(e3), c6[e3] = true);
    }
    function q(e3) {
      false !== c6[e3] && (t2.disable(e3), c6[e3] = false);
    }
    X[t2.TEXTURE_2D] = W(t2.TEXTURE_2D, t2.TEXTURE_2D, 1), X[t2.TEXTURE_CUBE_MAP] = W(t2.TEXTURE_CUBE_MAP, t2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (X[t2.TEXTURE_2D_ARRAY] = W(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_2D_ARRAY, 1, 1), X[t2.TEXTURE_3D] = W(t2.TEXTURE_3D, t2.TEXTURE_3D, 1, 1)), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), j(t2.DEPTH_TEST), s.setFunc(3), K3(false), $2(1), j(t2.CULL_FACE), J2(0);
    const Y = { [M]: t2.FUNC_ADD, 101: t2.FUNC_SUBTRACT, 102: t2.FUNC_REVERSE_SUBTRACT };
    if (i) Y[103] = t2.MIN, Y[104] = t2.MAX;
    else {
      const t3 = e2.get("EXT_blend_minmax");
      null !== t3 && (Y[103] = t3.MIN_EXT, Y[104] = t3.MAX_EXT);
    }
    const Z2 = { 200: t2.ZERO, 201: t2.ONE, 202: t2.SRC_COLOR, [P]: t2.SRC_ALPHA, 210: t2.SRC_ALPHA_SATURATE, 208: t2.DST_COLOR, 206: t2.DST_ALPHA, 203: t2.ONE_MINUS_SRC_COLOR, [L]: t2.ONE_MINUS_SRC_ALPHA, 209: t2.ONE_MINUS_DST_COLOR, 207: t2.ONE_MINUS_DST_ALPHA, 211: t2.CONSTANT_COLOR, 212: t2.ONE_MINUS_CONSTANT_COLOR, 213: t2.CONSTANT_ALPHA, 214: t2.ONE_MINUS_CONSTANT_ALPHA };
    function J2(e3, n3, i2, r2, s2, a2, o2, l3, c7, h3) {
      if (0 !== e3) {
        if (false === f && (j(t2.BLEND), f = true), 5 === e3) s2 = s2 || n3, a2 = a2 || i2, o2 = o2 || r2, n3 === _ && s2 === y || (t2.blendEquationSeparate(Y[n3], Y[s2]), _ = n3, y = s2), i2 === v && r2 === x && a2 === S && o2 === b || (t2.blendFuncSeparate(Z2[i2], Z2[r2], Z2[a2], Z2[o2]), v = i2, x = r2, S = a2, b = o2), false !== l3.equals(E) && c7 === T || (t2.blendColor(l3.r, l3.g, l3.b, c7), E.copy(l3), T = c7), g = e3, w = false;
        else if (e3 !== g || h3 !== w) {
          if (_ === M && y === M || (t2.blendEquation(t2.FUNC_ADD), _ = M, y = M), h3) switch (e3) {
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
              console.error("THREE.WebGLState: Invalid blending: ", e3);
          }
          else switch (e3) {
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
              console.error("THREE.WebGLState: Invalid blending: ", e3);
          }
          v = null, x = null, S = null, b = null, E.set(0, 0, 0), T = 0, g = e3, w = h3;
        }
      } else true === f && (q(t2.BLEND), f = false);
    }
    function K3(e3) {
      A !== e3 && (e3 ? t2.frontFace(t2.CW) : t2.frontFace(t2.CCW), A = e3);
    }
    function $2(e3) {
      0 !== e3 ? (j(t2.CULL_FACE), e3 !== R && (1 === e3 ? t2.cullFace(t2.BACK) : 2 === e3 ? t2.cullFace(t2.FRONT) : t2.cullFace(t2.FRONT_AND_BACK))) : q(t2.CULL_FACE), R = e3;
    }
    function Q2(e3, n3, i2) {
      e3 ? (j(t2.POLYGON_OFFSET_FILL), I === n3 && U === i2 || (t2.polygonOffset(n3, i2), I = n3, U = i2)) : q(t2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: r, depth: s, stencil: a }, enable: j, disable: q, bindFramebuffer: function(e3, n3) {
      return h2[e3] !== n3 && (t2.bindFramebuffer(e3, n3), h2[e3] = n3, i && (e3 === t2.DRAW_FRAMEBUFFER && (h2[t2.FRAMEBUFFER] = n3), e3 === t2.FRAMEBUFFER && (h2[t2.DRAW_FRAMEBUFFER] = n3)), true);
    }, drawBuffers: function(i2, r2) {
      let s2 = p2, a2 = false;
      if (i2) if (s2 = u2.get(r2), void 0 === s2 && (s2 = [], u2.set(r2, s2)), i2.isWebGLMultipleRenderTargets) {
        const e3 = i2.texture;
        if (s2.length !== e3.length || s2[0] !== t2.COLOR_ATTACHMENT0) {
          for (let n3 = 0, i3 = e3.length; n3 < i3; n3++) s2[n3] = t2.COLOR_ATTACHMENT0 + n3;
          s2.length = e3.length, a2 = true;
        }
      } else s2[0] !== t2.COLOR_ATTACHMENT0 && (s2[0] = t2.COLOR_ATTACHMENT0, a2 = true);
      else s2[0] !== t2.BACK && (s2[0] = t2.BACK, a2 = true);
      a2 && (n2.isWebGL2 ? t2.drawBuffers(s2) : e2.get("WEBGL_draw_buffers").drawBuffersWEBGL(s2));
    }, useProgram: function(e3) {
      return m !== e3 && (t2.useProgram(e3), m = e3, true);
    }, setBlending: J2, setMaterial: function(e3, n3) {
      2 === e3.side ? q(t2.CULL_FACE) : j(t2.CULL_FACE);
      let i2 = e3.side === d;
      n3 && (i2 = !i2), K3(i2), 1 === e3.blending && false === e3.transparent ? J2(0) : J2(e3.blending, e3.blendEquation, e3.blendSrc, e3.blendDst, e3.blendEquationAlpha, e3.blendSrcAlpha, e3.blendDstAlpha, e3.blendColor, e3.blendAlpha, e3.premultipliedAlpha), s.setFunc(e3.depthFunc), s.setTest(e3.depthTest), s.setMask(e3.depthWrite), r.setMask(e3.colorWrite);
      const o2 = e3.stencilWrite;
      a.setTest(o2), o2 && (a.setMask(e3.stencilWriteMask), a.setFunc(e3.stencilFunc, e3.stencilRef, e3.stencilFuncMask), a.setOp(e3.stencilFail, e3.stencilZFail, e3.stencilZPass)), Q2(e3.polygonOffset, e3.polygonOffsetFactor, e3.polygonOffsetUnits), true === e3.alphaToCoverage ? j(t2.SAMPLE_ALPHA_TO_COVERAGE) : q(t2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: K3, setCullFace: $2, setLineWidth: function(e3) {
      e3 !== C && (D && t2.lineWidth(e3), C = e3);
    }, setPolygonOffset: Q2, setScissorTest: function(e3) {
      e3 ? j(t2.SCISSOR_TEST) : q(t2.SCISSOR_TEST);
    }, activeTexture: function(e3) {
      void 0 === e3 && (e3 = t2.TEXTURE0 + N - 1), B !== e3 && (t2.activeTexture(e3), B = e3);
    }, bindTexture: function(e3, n3, i2) {
      void 0 === i2 && (i2 = null === B ? t2.TEXTURE0 + N - 1 : B);
      let r2 = z[i2];
      void 0 === r2 && (r2 = { type: void 0, texture: void 0 }, z[i2] = r2), r2.type === e3 && r2.texture === n3 || (B !== i2 && (t2.activeTexture(i2), B = i2), t2.bindTexture(e3, n3 || X[e3]), r2.type = e3, r2.texture = n3);
    }, unbindTexture: function() {
      const e3 = z[B];
      void 0 !== e3 && void 0 !== e3.type && (t2.bindTexture(e3.type, null), e3.type = void 0, e3.texture = void 0);
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
    }, updateUBOMapping: function(e3, n3) {
      let i2 = l2.get(n3);
      void 0 === i2 && (i2 = /* @__PURE__ */ new WeakMap(), l2.set(n3, i2));
      let r2 = i2.get(e3);
      void 0 === r2 && (r2 = t2.getUniformBlockIndex(n3, e3.name), i2.set(e3, r2));
    }, uniformBlockBinding: function(e3, n3) {
      const i2 = l2.get(n3).get(e3);
      o.get(n3) !== i2 && (t2.uniformBlockBinding(n3, i2, e3.__bindingPointIndex), o.set(n3, i2));
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
    }, scissor: function(e3) {
      false === k.equals(e3) && (t2.scissor(e3.x, e3.y, e3.z, e3.w), k.copy(e3));
    }, viewport: function(e3) {
      false === G.equals(e3) && (t2.viewport(e3.x, e3.y, e3.z, e3.w), G.copy(e3));
    }, reset: function() {
      t2.disable(t2.BLEND), t2.disable(t2.CULL_FACE), t2.disable(t2.DEPTH_TEST), t2.disable(t2.POLYGON_OFFSET_FILL), t2.disable(t2.SCISSOR_TEST), t2.disable(t2.STENCIL_TEST), t2.disable(t2.SAMPLE_ALPHA_TO_COVERAGE), t2.blendEquation(t2.FUNC_ADD), t2.blendFunc(t2.ONE, t2.ZERO), t2.blendFuncSeparate(t2.ONE, t2.ZERO, t2.ONE, t2.ZERO), t2.blendColor(0, 0, 0, 0), t2.colorMask(true, true, true, true), t2.clearColor(0, 0, 0, 0), t2.depthMask(true), t2.depthFunc(t2.LESS), t2.clearDepth(1), t2.stencilMask(4294967295), t2.stencilFunc(t2.ALWAYS, 0, 4294967295), t2.stencilOp(t2.KEEP, t2.KEEP, t2.KEEP), t2.clearStencil(0), t2.cullFace(t2.BACK), t2.frontFace(t2.CCW), t2.polygonOffset(0, 0), t2.activeTexture(t2.TEXTURE0), t2.bindFramebuffer(t2.FRAMEBUFFER, null), true === i && (t2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), t2.bindFramebuffer(t2.READ_FRAMEBUFFER, null)), t2.useProgram(null), t2.lineWidth(1), t2.scissor(0, 0, t2.canvas.width, t2.canvas.height), t2.viewport(0, 0, t2.canvas.width, t2.canvas.height), c6 = {}, B = null, z = {}, h2 = {}, u2 = /* @__PURE__ */ new WeakMap(), p2 = [], m = null, f = false, g = null, _ = null, v = null, x = null, y = null, S = null, b = null, E = new Kr(0, 0, 0), T = 0, w = false, A = null, R = null, C = null, I = null, U = null, k.set(0, 0, t2.canvas.width, t2.canvas.height), G.set(0, 0, t2.canvas.width, t2.canvas.height), r.reset(), s.reset(), a.reset();
    } };
  }
  function Vl(t2, e2, n2, i, r, s, a) {
    const o = r.isWebGL2, l2 = e2.has("WEBGL_multisampled_render_to_texture") ? e2.get("WEBGL_multisampled_render_to_texture") : null, c6 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), h2 = /* @__PURE__ */ new WeakMap();
    let u2;
    const d2 = /* @__PURE__ */ new WeakMap();
    let p2 = false;
    try {
      p2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t3) {
    }
    function m(t3, e3) {
      return p2 ? new OffscreenCanvas(t3, e3) : ai("canvas");
    }
    function f(t3, e3, n3, i2) {
      let r2 = 1;
      if ((t3.width > i2 || t3.height > i2) && (r2 = i2 / Math.max(t3.width, t3.height)), r2 < 1 || true === e3) {
        if ("undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap) {
          const i3 = e3 ? Jn : Math.floor, s2 = i3(r2 * t3.width), a2 = i3(r2 * t3.height);
          void 0 === u2 && (u2 = m(s2, a2));
          const o2 = n3 ? m(s2, a2) : u2;
          o2.width = s2, o2.height = a2;
          return o2.getContext("2d").drawImage(t3, 0, 0, s2, a2), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t3.width + "x" + t3.height + ") to (" + s2 + "x" + a2 + ")."), o2;
        }
        return "data" in t3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t3.width + "x" + t3.height + ")."), t3;
      }
      return t3;
    }
    function g(t3) {
      return Zn(t3.width) && Zn(t3.height);
    }
    function _(t3, e3) {
      return t3.generateMipmaps && e3 && t3.minFilter !== gt && t3.minFilter !== Mt;
    }
    function v(e3) {
      t2.generateMipmap(e3);
    }
    function x(n3, i2, r2, s2, a2 = false) {
      if (false === o) return i2;
      if (null !== n3) {
        if (void 0 !== t2[n3]) return t2[n3];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n3 + "'");
      }
      let l3 = i2;
      if (i2 === t2.RED && (r2 === t2.FLOAT && (l3 = t2.R32F), r2 === t2.HALF_FLOAT && (l3 = t2.R16F), r2 === t2.UNSIGNED_BYTE && (l3 = t2.R8)), i2 === t2.RED_INTEGER && (r2 === t2.UNSIGNED_BYTE && (l3 = t2.R8UI), r2 === t2.UNSIGNED_SHORT && (l3 = t2.R16UI), r2 === t2.UNSIGNED_INT && (l3 = t2.R32UI), r2 === t2.BYTE && (l3 = t2.R8I), r2 === t2.SHORT && (l3 = t2.R16I), r2 === t2.INT && (l3 = t2.R32I)), i2 === t2.RG && (r2 === t2.FLOAT && (l3 = t2.RG32F), r2 === t2.HALF_FLOAT && (l3 = t2.RG16F), r2 === t2.UNSIGNED_BYTE && (l3 = t2.RG8)), i2 === t2.RGBA) {
        const e3 = a2 ? Ke : mi.getTransfer(s2);
        r2 === t2.FLOAT && (l3 = t2.RGBA32F), r2 === t2.HALF_FLOAT && (l3 = t2.RGBA16F), r2 === t2.UNSIGNED_BYTE && (l3 = e3 === $e ? t2.SRGB8_ALPHA8 : t2.RGBA8), r2 === t2.UNSIGNED_SHORT_4_4_4_4 && (l3 = t2.RGBA4), r2 === t2.UNSIGNED_SHORT_5_5_5_1 && (l3 = t2.RGB5_A1);
      }
      return l3 !== t2.R16F && l3 !== t2.R32F && l3 !== t2.RG16F && l3 !== t2.RG32F && l3 !== t2.RGBA16F && l3 !== t2.RGBA32F || e2.get("EXT_color_buffer_float"), l3;
    }
    function y(t3, e3, n3) {
      return true === _(t3, n3) || t3.isFramebufferTexture && t3.minFilter !== gt && t3.minFilter !== Mt ? Math.log2(Math.max(e3.width, e3.height)) + 1 : void 0 !== t3.mipmaps && t3.mipmaps.length > 0 ? t3.mipmaps.length : t3.isCompressedTexture && Array.isArray(t3.image) ? e3.mipmaps.length : 1;
    }
    function M3(e3) {
      return e3 === gt || e3 === _t || e3 === xt ? t2.NEAREST : t2.LINEAR;
    }
    function S(t3) {
      const e3 = t3.target;
      e3.removeEventListener("dispose", S), function(t4) {
        const e4 = i.get(t4);
        if (void 0 === e4.__webglInit) return;
        const n3 = t4.source, r2 = d2.get(n3);
        if (r2) {
          const i2 = r2[e4.__cacheKey];
          i2.usedTimes--, 0 === i2.usedTimes && E(t4), 0 === Object.keys(r2).length && d2.delete(n3);
        }
        i.remove(t4);
      }(e3), e3.isVideoTexture && h2.delete(e3);
    }
    function b(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", b), function(e4) {
        const n4 = e4.texture, r2 = i.get(e4), s2 = i.get(n4);
        void 0 !== s2.__webglTexture && (t2.deleteTexture(s2.__webglTexture), a.memory.textures--);
        e4.depthTexture && e4.depthTexture.dispose();
        if (e4.isWebGLCubeRenderTarget) for (let e5 = 0; e5 < 6; e5++) {
          if (Array.isArray(r2.__webglFramebuffer[e5])) for (let n5 = 0; n5 < r2.__webglFramebuffer[e5].length; n5++) t2.deleteFramebuffer(r2.__webglFramebuffer[e5][n5]);
          else t2.deleteFramebuffer(r2.__webglFramebuffer[e5]);
          r2.__webglDepthbuffer && t2.deleteRenderbuffer(r2.__webglDepthbuffer[e5]);
        }
        else {
          if (Array.isArray(r2.__webglFramebuffer)) for (let e5 = 0; e5 < r2.__webglFramebuffer.length; e5++) t2.deleteFramebuffer(r2.__webglFramebuffer[e5]);
          else t2.deleteFramebuffer(r2.__webglFramebuffer);
          if (r2.__webglDepthbuffer && t2.deleteRenderbuffer(r2.__webglDepthbuffer), r2.__webglMultisampledFramebuffer && t2.deleteFramebuffer(r2.__webglMultisampledFramebuffer), r2.__webglColorRenderbuffer) for (let e5 = 0; e5 < r2.__webglColorRenderbuffer.length; e5++) r2.__webglColorRenderbuffer[e5] && t2.deleteRenderbuffer(r2.__webglColorRenderbuffer[e5]);
          r2.__webglDepthRenderbuffer && t2.deleteRenderbuffer(r2.__webglDepthRenderbuffer);
        }
        if (e4.isWebGLMultipleRenderTargets) for (let e5 = 0, r3 = n4.length; e5 < r3; e5++) {
          const r4 = i.get(n4[e5]);
          r4.__webglTexture && (t2.deleteTexture(r4.__webglTexture), a.memory.textures--), i.remove(n4[e5]);
        }
        i.remove(n4), i.remove(e4);
      }(n3);
    }
    function E(e3) {
      const n3 = i.get(e3);
      t2.deleteTexture(n3.__webglTexture);
      const r2 = e3.source;
      delete d2.get(r2)[n3.__cacheKey], a.memory.textures--;
    }
    let T = 0;
    function w(e3, r2) {
      const s2 = i.get(e3);
      if (e3.isVideoTexture && function(t3) {
        const e4 = a.render.frame;
        h2.get(t3) !== e4 && (h2.set(t3, e4), t3.update());
      }(e3), false === e3.isRenderTargetTexture && e3.version > 0 && s2.__version !== e3.version) {
        const t3 = e3.image;
        if (null === t3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== t3.complete) return void I(s2, e3, r2);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }
      n2.bindTexture(t2.TEXTURE_2D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }
    const A = { [pt]: t2.REPEAT, [mt]: t2.CLAMP_TO_EDGE, [ft]: t2.MIRRORED_REPEAT }, R = { [gt]: t2.NEAREST, [_t]: t2.NEAREST_MIPMAP_NEAREST, [xt]: t2.NEAREST_MIPMAP_LINEAR, [Mt]: t2.LINEAR, [St]: t2.LINEAR_MIPMAP_NEAREST, [Et]: t2.LINEAR_MIPMAP_LINEAR }, C = { 512: t2.NEVER, 519: t2.ALWAYS, 513: t2.LESS, 515: t2.LEQUAL, 514: t2.EQUAL, 518: t2.GEQUAL, 516: t2.GREATER, 517: t2.NOTEQUAL };
    function P2(n3, s2, a2) {
      if (a2 ? (t2.texParameteri(n3, t2.TEXTURE_WRAP_S, A[s2.wrapS]), t2.texParameteri(n3, t2.TEXTURE_WRAP_T, A[s2.wrapT]), n3 !== t2.TEXTURE_3D && n3 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n3, t2.TEXTURE_WRAP_R, A[s2.wrapR]), t2.texParameteri(n3, t2.TEXTURE_MAG_FILTER, R[s2.magFilter]), t2.texParameteri(n3, t2.TEXTURE_MIN_FILTER, R[s2.minFilter])) : (t2.texParameteri(n3, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(n3, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), n3 !== t2.TEXTURE_3D && n3 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n3, t2.TEXTURE_WRAP_R, t2.CLAMP_TO_EDGE), s2.wrapS === mt && s2.wrapT === mt || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t2.texParameteri(n3, t2.TEXTURE_MAG_FILTER, M3(s2.magFilter)), t2.texParameteri(n3, t2.TEXTURE_MIN_FILTER, M3(s2.minFilter)), s2.minFilter !== gt && s2.minFilter !== Mt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), s2.compareFunction && (t2.texParameteri(n3, t2.TEXTURE_COMPARE_MODE, t2.COMPARE_REF_TO_TEXTURE), t2.texParameteri(n3, t2.TEXTURE_COMPARE_FUNC, C[s2.compareFunction])), true === e2.has("EXT_texture_filter_anisotropic")) {
        const a3 = e2.get("EXT_texture_filter_anisotropic");
        if (s2.magFilter === gt) return;
        if (s2.minFilter !== xt && s2.minFilter !== Et) return;
        if (s2.type === It && false === e2.has("OES_texture_float_linear")) return;
        if (false === o && s2.type === Ut && false === e2.has("OES_texture_half_float_linear")) return;
        (s2.anisotropy > 1 || i.get(s2).__currentAnisotropy) && (t2.texParameterf(n3, a3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s2.anisotropy, r.getMaxAnisotropy())), i.get(s2).__currentAnisotropy = s2.anisotropy);
      }
    }
    function L2(e3, n3) {
      let i2 = false;
      void 0 === e3.__webglInit && (e3.__webglInit = true, n3.addEventListener("dispose", S));
      const r2 = n3.source;
      let s2 = d2.get(r2);
      void 0 === s2 && (s2 = {}, d2.set(r2, s2));
      const o2 = function(t3) {
        const e4 = [];
        return e4.push(t3.wrapS), e4.push(t3.wrapT), e4.push(t3.wrapR || 0), e4.push(t3.magFilter), e4.push(t3.minFilter), e4.push(t3.anisotropy), e4.push(t3.internalFormat), e4.push(t3.format), e4.push(t3.type), e4.push(t3.generateMipmaps), e4.push(t3.premultiplyAlpha), e4.push(t3.flipY), e4.push(t3.unpackAlignment), e4.push(t3.colorSpace), e4.join();
      }(n3);
      if (o2 !== e3.__cacheKey) {
        void 0 === s2[o2] && (s2[o2] = { texture: t2.createTexture(), usedTimes: 0 }, a.memory.textures++, i2 = true), s2[o2].usedTimes++;
        const r3 = s2[e3.__cacheKey];
        void 0 !== r3 && (s2[e3.__cacheKey].usedTimes--, 0 === r3.usedTimes && E(n3)), e3.__cacheKey = o2, e3.__webglTexture = s2[o2].texture;
      }
      return i2;
    }
    function I(e3, a2, l3) {
      let c7 = t2.TEXTURE_2D;
      (a2.isDataArrayTexture || a2.isCompressedArrayTexture) && (c7 = t2.TEXTURE_2D_ARRAY), a2.isData3DTexture && (c7 = t2.TEXTURE_3D);
      const h3 = L2(e3, a2), u3 = a2.source;
      n2.bindTexture(c7, e3.__webglTexture, t2.TEXTURE0 + l3);
      const d3 = i.get(u3);
      if (u3.version !== d3.__version || true === h3) {
        n2.activeTexture(t2.TEXTURE0 + l3);
        const e4 = mi.getPrimaries(mi.workingColorSpace), i2 = a2.colorSpace === je ? null : mi.getPrimaries(a2.colorSpace), p3 = a2.colorSpace === je || e4 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
        t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a2.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a2.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a2.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, p3);
        const m2 = function(t3) {
          return !o && (t3.wrapS !== mt || t3.wrapT !== mt || t3.minFilter !== gt && t3.minFilter !== Mt);
        }(a2) && false === g(a2.image);
        let M4 = f(a2.image, m2, false, r.maxTextureSize);
        M4 = B(a2, M4);
        const S2 = g(M4) || o, b2 = s.convert(a2.format, a2.colorSpace);
        let E2, T2 = s.convert(a2.type), w2 = x(a2.internalFormat, b2, T2, a2.colorSpace, a2.isVideoTexture);
        P2(c7, a2, S2);
        const A2 = a2.mipmaps, R2 = o && true !== a2.isVideoTexture && w2 !== ne, C3 = void 0 === d3.__version || true === h3, L3 = y(a2, M4, S2);
        if (a2.isDepthTexture) w2 = t2.DEPTH_COMPONENT, o ? w2 = a2.type === It ? t2.DEPTH_COMPONENT32F : a2.type === Lt ? t2.DEPTH_COMPONENT24 : a2.type === Ot ? t2.DEPTH24_STENCIL8 : t2.DEPTH_COMPONENT16 : a2.type === It && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), a2.format === Vt && w2 === t2.DEPTH_COMPONENT && a2.type !== Ct && a2.type !== Lt && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), a2.type = Lt, T2 = s.convert(a2.type)), a2.format === kt && w2 === t2.DEPTH_COMPONENT && (w2 = t2.DEPTH_STENCIL, a2.type !== Ot && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), a2.type = Ot, T2 = s.convert(a2.type))), C3 && (R2 ? n2.texStorage2D(t2.TEXTURE_2D, 1, w2, M4.width, M4.height) : n2.texImage2D(t2.TEXTURE_2D, 0, w2, M4.width, M4.height, 0, b2, T2, null));
        else if (a2.isDataTexture) if (A2.length > 0 && S2) {
          R2 && C3 && n2.texStorage2D(t2.TEXTURE_2D, L3, w2, A2[0].width, A2[0].height);
          for (let e5 = 0, i3 = A2.length; e5 < i3; e5++) E2 = A2[e5], R2 ? n2.texSubImage2D(t2.TEXTURE_2D, e5, 0, 0, E2.width, E2.height, b2, T2, E2.data) : n2.texImage2D(t2.TEXTURE_2D, e5, w2, E2.width, E2.height, 0, b2, T2, E2.data);
          a2.generateMipmaps = false;
        } else R2 ? (C3 && n2.texStorage2D(t2.TEXTURE_2D, L3, w2, M4.width, M4.height), n2.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, M4.width, M4.height, b2, T2, M4.data)) : n2.texImage2D(t2.TEXTURE_2D, 0, w2, M4.width, M4.height, 0, b2, T2, M4.data);
        else if (a2.isCompressedTexture) if (a2.isCompressedArrayTexture) {
          R2 && C3 && n2.texStorage3D(t2.TEXTURE_2D_ARRAY, L3, w2, A2[0].width, A2[0].height, M4.depth);
          for (let e5 = 0, i3 = A2.length; e5 < i3; e5++) E2 = A2[e5], a2.format !== Bt ? null !== b2 ? R2 ? n2.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e5, 0, 0, 0, E2.width, E2.height, M4.depth, b2, E2.data, 0, 0) : n2.compressedTexImage3D(t2.TEXTURE_2D_ARRAY, e5, w2, E2.width, E2.height, M4.depth, 0, E2.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R2 ? n2.texSubImage3D(t2.TEXTURE_2D_ARRAY, e5, 0, 0, 0, E2.width, E2.height, M4.depth, b2, T2, E2.data) : n2.texImage3D(t2.TEXTURE_2D_ARRAY, e5, w2, E2.width, E2.height, M4.depth, 0, b2, T2, E2.data);
        } else {
          R2 && C3 && n2.texStorage2D(t2.TEXTURE_2D, L3, w2, A2[0].width, A2[0].height);
          for (let e5 = 0, i3 = A2.length; e5 < i3; e5++) E2 = A2[e5], a2.format !== Bt ? null !== b2 ? R2 ? n2.compressedTexSubImage2D(t2.TEXTURE_2D, e5, 0, 0, E2.width, E2.height, b2, E2.data) : n2.compressedTexImage2D(t2.TEXTURE_2D, e5, w2, E2.width, E2.height, 0, E2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R2 ? n2.texSubImage2D(t2.TEXTURE_2D, e5, 0, 0, E2.width, E2.height, b2, T2, E2.data) : n2.texImage2D(t2.TEXTURE_2D, e5, w2, E2.width, E2.height, 0, b2, T2, E2.data);
        }
        else if (a2.isDataArrayTexture) R2 ? (C3 && n2.texStorage3D(t2.TEXTURE_2D_ARRAY, L3, w2, M4.width, M4.height, M4.depth), n2.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, M4.width, M4.height, M4.depth, b2, T2, M4.data)) : n2.texImage3D(t2.TEXTURE_2D_ARRAY, 0, w2, M4.width, M4.height, M4.depth, 0, b2, T2, M4.data);
        else if (a2.isData3DTexture) R2 ? (C3 && n2.texStorage3D(t2.TEXTURE_3D, L3, w2, M4.width, M4.height, M4.depth), n2.texSubImage3D(t2.TEXTURE_3D, 0, 0, 0, 0, M4.width, M4.height, M4.depth, b2, T2, M4.data)) : n2.texImage3D(t2.TEXTURE_3D, 0, w2, M4.width, M4.height, M4.depth, 0, b2, T2, M4.data);
        else if (a2.isFramebufferTexture) {
          if (C3) if (R2) n2.texStorage2D(t2.TEXTURE_2D, L3, w2, M4.width, M4.height);
          else {
            let e5 = M4.width, i3 = M4.height;
            for (let r2 = 0; r2 < L3; r2++) n2.texImage2D(t2.TEXTURE_2D, r2, w2, e5, i3, 0, b2, T2, null), e5 >>= 1, i3 >>= 1;
          }
        } else if (A2.length > 0 && S2) {
          R2 && C3 && n2.texStorage2D(t2.TEXTURE_2D, L3, w2, A2[0].width, A2[0].height);
          for (let e5 = 0, i3 = A2.length; e5 < i3; e5++) E2 = A2[e5], R2 ? n2.texSubImage2D(t2.TEXTURE_2D, e5, 0, 0, b2, T2, E2) : n2.texImage2D(t2.TEXTURE_2D, e5, w2, b2, T2, E2);
          a2.generateMipmaps = false;
        } else R2 ? (C3 && n2.texStorage2D(t2.TEXTURE_2D, L3, w2, M4.width, M4.height), n2.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, b2, T2, M4)) : n2.texImage2D(t2.TEXTURE_2D, 0, w2, b2, T2, M4);
        _(a2, S2) && v(c7), d3.__version = u3.version, a2.onUpdate && a2.onUpdate(a2);
      }
      e3.__version = a2.version;
    }
    function U(e3, r2, a2, o2, c7, h3) {
      const u3 = s.convert(a2.format, a2.colorSpace), d3 = s.convert(a2.type), p3 = x(a2.internalFormat, u3, d3, a2.colorSpace);
      if (!i.get(r2).__hasExternalTextures) {
        const e4 = Math.max(1, r2.width >> h3), i2 = Math.max(1, r2.height >> h3);
        c7 === t2.TEXTURE_3D || c7 === t2.TEXTURE_2D_ARRAY ? n2.texImage3D(c7, h3, p3, e4, i2, r2.depth, 0, u3, d3, null) : n2.texImage2D(c7, h3, p3, e4, i2, 0, u3, d3, null);
      }
      n2.bindFramebuffer(t2.FRAMEBUFFER, e3), F(r2) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, o2, c7, i.get(a2).__webglTexture, 0, O(r2)) : (c7 === t2.TEXTURE_2D || c7 >= t2.TEXTURE_CUBE_MAP_POSITIVE_X && c7 <= t2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t2.framebufferTexture2D(t2.FRAMEBUFFER, o2, c7, i.get(a2).__webglTexture, h3), n2.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function N(e3, n3, i2) {
      if (t2.bindRenderbuffer(t2.RENDERBUFFER, e3), n3.depthBuffer && !n3.stencilBuffer) {
        let r2 = true === o ? t2.DEPTH_COMPONENT24 : t2.DEPTH_COMPONENT16;
        if (i2 || F(n3)) {
          const e4 = n3.depthTexture;
          e4 && e4.isDepthTexture && (e4.type === It ? r2 = t2.DEPTH_COMPONENT32F : e4.type === Lt && (r2 = t2.DEPTH_COMPONENT24));
          const i3 = O(n3);
          F(n3) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, i3, r2, n3.width, n3.height) : t2.renderbufferStorageMultisample(t2.RENDERBUFFER, i3, r2, n3.width, n3.height);
        } else t2.renderbufferStorage(t2.RENDERBUFFER, r2, n3.width, n3.height);
        t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.RENDERBUFFER, e3);
      } else if (n3.depthBuffer && n3.stencilBuffer) {
        const r2 = O(n3);
        i2 && false === F(n3) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, r2, t2.DEPTH24_STENCIL8, n3.width, n3.height) : F(n3) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, r2, t2.DEPTH24_STENCIL8, n3.width, n3.height) : t2.renderbufferStorage(t2.RENDERBUFFER, t2.DEPTH_STENCIL, n3.width, n3.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.RENDERBUFFER, e3);
      } else {
        const e4 = true === n3.isWebGLMultipleRenderTargets ? n3.texture : [n3.texture];
        for (let r2 = 0; r2 < e4.length; r2++) {
          const a2 = e4[r2], o2 = s.convert(a2.format, a2.colorSpace), c7 = s.convert(a2.type), h3 = x(a2.internalFormat, o2, c7, a2.colorSpace), u3 = O(n3);
          i2 && false === F(n3) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, u3, h3, n3.width, n3.height) : F(n3) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, u3, h3, n3.width, n3.height) : t2.renderbufferStorage(t2.RENDERBUFFER, h3, n3.width, n3.height);
        }
      }
      t2.bindRenderbuffer(t2.RENDERBUFFER, null);
    }
    function D(e3) {
      const r2 = i.get(e3), s2 = true === e3.isWebGLCubeRenderTarget;
      if (e3.depthTexture && !r2.__autoAllocateDepthBuffer) {
        if (s2) throw new Error("target.depthTexture not supported in Cube render targets");
        !function(e4, r3) {
          if (r3 && r3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n2.bindFramebuffer(t2.FRAMEBUFFER, e4), !r3.depthTexture || !r3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(r3.depthTexture).__webglTexture && r3.depthTexture.image.width === r3.width && r3.depthTexture.image.height === r3.height || (r3.depthTexture.image.width = r3.width, r3.depthTexture.image.height = r3.height, r3.depthTexture.needsUpdate = true), w(r3.depthTexture, 0);
          const s3 = i.get(r3.depthTexture).__webglTexture, a2 = O(r3);
          if (r3.depthTexture.format === Vt) F(r3) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          else {
            if (r3.depthTexture.format !== kt) throw new Error("Unknown depthTexture format");
            F(r3) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          }
        }(r2.__webglFramebuffer, e3);
      } else if (s2) {
        r2.__webglDepthbuffer = [];
        for (let i2 = 0; i2 < 6; i2++) n2.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer[i2]), r2.__webglDepthbuffer[i2] = t2.createRenderbuffer(), N(r2.__webglDepthbuffer[i2], e3, false);
      } else n2.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer), r2.__webglDepthbuffer = t2.createRenderbuffer(), N(r2.__webglDepthbuffer, e3, false);
      n2.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function O(t3) {
      return Math.min(r.maxSamples, t3.samples);
    }
    function F(t3) {
      const n3 = i.get(t3);
      return o && t3.samples > 0 && true === e2.has("WEBGL_multisampled_render_to_texture") && false !== n3.__useRenderToTexture;
    }
    function B(t3, n3) {
      const i2 = t3.colorSpace, r2 = t3.format, s2 = t3.type;
      return true === t3.isCompressedTexture || true === t3.isVideoTexture || t3.format === Fn || i2 !== Ye && i2 !== je && (mi.getTransfer(i2) === $e ? false === o ? true === e2.has("EXT_sRGB") && r2 === Bt ? (t3.format = Fn, t3.minFilter = Mt, t3.generateMipmaps = false) : n3 = vi.sRGBToLinear(n3) : r2 === Bt && s2 === wt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", i2)), n3;
    }
    this.allocateTextureUnit = function() {
      const t3 = T;
      return t3 >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t3 + " texture units while this GPU supports only " + r.maxTextures), T += 1, t3;
    }, this.resetTextureUnits = function() {
      T = 0;
    }, this.setTexture2D = w, this.setTexture2DArray = function(e3, r2) {
      const s2 = i.get(e3);
      e3.version > 0 && s2.__version !== e3.version ? I(s2, e3, r2) : n2.bindTexture(t2.TEXTURE_2D_ARRAY, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTexture3D = function(e3, r2) {
      const s2 = i.get(e3);
      e3.version > 0 && s2.__version !== e3.version ? I(s2, e3, r2) : n2.bindTexture(t2.TEXTURE_3D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTextureCube = function(e3, a2) {
      const l3 = i.get(e3);
      e3.version > 0 && l3.__version !== e3.version ? function(e4, a3, l4) {
        if (6 !== a3.image.length) return;
        const c7 = L2(e4, a3), h3 = a3.source;
        n2.bindTexture(t2.TEXTURE_CUBE_MAP, e4.__webglTexture, t2.TEXTURE0 + l4);
        const u3 = i.get(h3);
        if (h3.version !== u3.__version || true === c7) {
          n2.activeTexture(t2.TEXTURE0 + l4);
          const e5 = mi.getPrimaries(mi.workingColorSpace), i2 = a3.colorSpace === je ? null : mi.getPrimaries(a3.colorSpace), d3 = a3.colorSpace === je || e5 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
          t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a3.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a3.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a3.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, d3);
          const p3 = a3.isCompressedTexture || a3.image[0].isCompressedTexture, m2 = a3.image[0] && a3.image[0].isDataTexture, M4 = [];
          for (let t3 = 0; t3 < 6; t3++) M4[t3] = p3 || m2 ? m2 ? a3.image[t3].image : a3.image[t3] : f(a3.image[t3], false, true, r.maxCubemapSize), M4[t3] = B(a3, M4[t3]);
          const S2 = M4[0], b2 = g(S2) || o, E2 = s.convert(a3.format, a3.colorSpace), T2 = s.convert(a3.type), w2 = x(a3.internalFormat, E2, T2, a3.colorSpace), A2 = o && true !== a3.isVideoTexture, R2 = void 0 === u3.__version || true === c7;
          let C3, L3 = y(a3, S2, b2);
          if (P2(t2.TEXTURE_CUBE_MAP, a3, b2), p3) {
            A2 && R2 && n2.texStorage2D(t2.TEXTURE_CUBE_MAP, L3, w2, S2.width, S2.height);
            for (let e6 = 0; e6 < 6; e6++) {
              C3 = M4[e6].mipmaps;
              for (let i3 = 0; i3 < C3.length; i3++) {
                const r2 = C3[i3];
                a3.format !== Bt ? null !== E2 ? A2 ? n2.compressedTexSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3, 0, 0, r2.width, r2.height, E2, r2.data) : n2.compressedTexImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3, w2, r2.width, r2.height, 0, r2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : A2 ? n2.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3, 0, 0, r2.width, r2.height, E2, T2, r2.data) : n2.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3, w2, r2.width, r2.height, 0, E2, T2, r2.data);
              }
            }
          } else {
            C3 = a3.mipmaps, A2 && R2 && (C3.length > 0 && L3++, n2.texStorage2D(t2.TEXTURE_CUBE_MAP, L3, w2, M4[0].width, M4[0].height));
            for (let e6 = 0; e6 < 6; e6++) if (m2) {
              A2 ? n2.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, 0, 0, 0, M4[e6].width, M4[e6].height, E2, T2, M4[e6].data) : n2.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, 0, w2, M4[e6].width, M4[e6].height, 0, E2, T2, M4[e6].data);
              for (let i3 = 0; i3 < C3.length; i3++) {
                const r2 = C3[i3].image[e6].image;
                A2 ? n2.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3 + 1, 0, 0, r2.width, r2.height, E2, T2, r2.data) : n2.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3 + 1, w2, r2.width, r2.height, 0, E2, T2, r2.data);
              }
            } else {
              A2 ? n2.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, 0, 0, 0, E2, T2, M4[e6]) : n2.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, 0, w2, E2, T2, M4[e6]);
              for (let i3 = 0; i3 < C3.length; i3++) {
                const r2 = C3[i3];
                A2 ? n2.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3 + 1, 0, 0, E2, T2, r2.image[e6]) : n2.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e6, i3 + 1, w2, E2, T2, r2.image[e6]);
              }
            }
          }
          _(a3, b2) && v(t2.TEXTURE_CUBE_MAP), u3.__version = h3.version, a3.onUpdate && a3.onUpdate(a3);
        }
        e4.__version = a3.version;
      }(l3, e3, a2) : n2.bindTexture(t2.TEXTURE_CUBE_MAP, l3.__webglTexture, t2.TEXTURE0 + a2);
    }, this.rebindTextures = function(e3, n3, r2) {
      const s2 = i.get(e3);
      void 0 !== n3 && U(s2.__webglFramebuffer, e3, e3.texture, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, 0), void 0 !== r2 && D(e3);
    }, this.setupRenderTarget = function(e3) {
      const l3 = e3.texture, c7 = i.get(e3), h3 = i.get(l3);
      e3.addEventListener("dispose", b), true !== e3.isWebGLMultipleRenderTargets && (void 0 === h3.__webglTexture && (h3.__webglTexture = t2.createTexture()), h3.__version = l3.version, a.memory.textures++);
      const u3 = true === e3.isWebGLCubeRenderTarget, d3 = true === e3.isWebGLMultipleRenderTargets, p3 = g(e3) || o;
      if (u3) {
        c7.__webglFramebuffer = [];
        for (let e4 = 0; e4 < 6; e4++) if (o && l3.mipmaps && l3.mipmaps.length > 0) {
          c7.__webglFramebuffer[e4] = [];
          for (let n3 = 0; n3 < l3.mipmaps.length; n3++) c7.__webglFramebuffer[e4][n3] = t2.createFramebuffer();
        } else c7.__webglFramebuffer[e4] = t2.createFramebuffer();
      } else {
        if (o && l3.mipmaps && l3.mipmaps.length > 0) {
          c7.__webglFramebuffer = [];
          for (let e4 = 0; e4 < l3.mipmaps.length; e4++) c7.__webglFramebuffer[e4] = t2.createFramebuffer();
        } else c7.__webglFramebuffer = t2.createFramebuffer();
        if (d3) if (r.drawBuffers) {
          const n3 = e3.texture;
          for (let e4 = 0, r2 = n3.length; e4 < r2; e4++) {
            const r3 = i.get(n3[e4]);
            void 0 === r3.__webglTexture && (r3.__webglTexture = t2.createTexture(), a.memory.textures++);
          }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        if (o && e3.samples > 0 && false === F(e3)) {
          const i2 = d3 ? l3 : [l3];
          c7.__webglMultisampledFramebuffer = t2.createFramebuffer(), c7.__webglColorRenderbuffer = [], n2.bindFramebuffer(t2.FRAMEBUFFER, c7.__webglMultisampledFramebuffer);
          for (let n3 = 0; n3 < i2.length; n3++) {
            const r2 = i2[n3];
            c7.__webglColorRenderbuffer[n3] = t2.createRenderbuffer(), t2.bindRenderbuffer(t2.RENDERBUFFER, c7.__webglColorRenderbuffer[n3]);
            const a2 = s.convert(r2.format, r2.colorSpace), o2 = s.convert(r2.type), l4 = x(r2.internalFormat, a2, o2, r2.colorSpace, true === e3.isXRRenderTarget), h4 = O(e3);
            t2.renderbufferStorageMultisample(t2.RENDERBUFFER, h4, l4, e3.width, e3.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + n3, t2.RENDERBUFFER, c7.__webglColorRenderbuffer[n3]);
          }
          t2.bindRenderbuffer(t2.RENDERBUFFER, null), e3.depthBuffer && (c7.__webglDepthRenderbuffer = t2.createRenderbuffer(), N(c7.__webglDepthRenderbuffer, e3, true)), n2.bindFramebuffer(t2.FRAMEBUFFER, null);
        }
      }
      if (u3) {
        n2.bindTexture(t2.TEXTURE_CUBE_MAP, h3.__webglTexture), P2(t2.TEXTURE_CUBE_MAP, l3, p3);
        for (let n3 = 0; n3 < 6; n3++) if (o && l3.mipmaps && l3.mipmaps.length > 0) for (let i2 = 0; i2 < l3.mipmaps.length; i2++) U(c7.__webglFramebuffer[n3][i2], e3, l3, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n3, i2);
        else U(c7.__webglFramebuffer[n3], e3, l3, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n3, 0);
        _(l3, p3) && v(t2.TEXTURE_CUBE_MAP), n2.unbindTexture();
      } else if (d3) {
        const r2 = e3.texture;
        for (let s2 = 0, a2 = r2.length; s2 < a2; s2++) {
          const a3 = r2[s2], o2 = i.get(a3);
          n2.bindTexture(t2.TEXTURE_2D, o2.__webglTexture), P2(t2.TEXTURE_2D, a3, p3), U(c7.__webglFramebuffer, e3, a3, t2.COLOR_ATTACHMENT0 + s2, t2.TEXTURE_2D, 0), _(a3, p3) && v(t2.TEXTURE_2D);
        }
        n2.unbindTexture();
      } else {
        let i2 = t2.TEXTURE_2D;
        if ((e3.isWebGL3DRenderTarget || e3.isWebGLArrayRenderTarget) && (o ? i2 = e3.isWebGL3DRenderTarget ? t2.TEXTURE_3D : t2.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n2.bindTexture(i2, h3.__webglTexture), P2(i2, l3, p3), o && l3.mipmaps && l3.mipmaps.length > 0) for (let n3 = 0; n3 < l3.mipmaps.length; n3++) U(c7.__webglFramebuffer[n3], e3, l3, t2.COLOR_ATTACHMENT0, i2, n3);
        else U(c7.__webglFramebuffer, e3, l3, t2.COLOR_ATTACHMENT0, i2, 0);
        _(l3, p3) && v(i2), n2.unbindTexture();
      }
      e3.depthBuffer && D(e3);
    }, this.updateRenderTargetMipmap = function(e3) {
      const r2 = g(e3) || o, s2 = true === e3.isWebGLMultipleRenderTargets ? e3.texture : [e3.texture];
      for (let a2 = 0, o2 = s2.length; a2 < o2; a2++) {
        const o3 = s2[a2];
        if (_(o3, r2)) {
          const r3 = e3.isWebGLCubeRenderTarget ? t2.TEXTURE_CUBE_MAP : t2.TEXTURE_2D, s3 = i.get(o3).__webglTexture;
          n2.bindTexture(r3, s3), v(r3), n2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(e3) {
      if (o && e3.samples > 0 && false === F(e3)) {
        const r2 = e3.isWebGLMultipleRenderTargets ? e3.texture : [e3.texture], s2 = e3.width, a2 = e3.height;
        let o2 = t2.COLOR_BUFFER_BIT;
        const l3 = [], h3 = e3.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, u3 = i.get(e3), d3 = true === e3.isWebGLMultipleRenderTargets;
        if (d3) for (let e4 = 0; e4 < r2.length; e4++) n2.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e4, t2.RENDERBUFFER, null), n2.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e4, t2.TEXTURE_2D, null, 0);
        n2.bindFramebuffer(t2.READ_FRAMEBUFFER, u3.__webglMultisampledFramebuffer), n2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, u3.__webglFramebuffer);
        for (let n3 = 0; n3 < r2.length; n3++) {
          l3.push(t2.COLOR_ATTACHMENT0 + n3), e3.depthBuffer && l3.push(h3);
          const p3 = void 0 !== u3.__ignoreDepthValues && u3.__ignoreDepthValues;
          if (false === p3 && (e3.depthBuffer && (o2 |= t2.DEPTH_BUFFER_BIT), e3.stencilBuffer && (o2 |= t2.STENCIL_BUFFER_BIT)), d3 && t2.framebufferRenderbuffer(t2.READ_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.RENDERBUFFER, u3.__webglColorRenderbuffer[n3]), true === p3 && (t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, [h3]), t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, [h3])), d3) {
            const e4 = i.get(r2[n3]).__webglTexture;
            t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e4, 0);
          }
          t2.blitFramebuffer(0, 0, s2, a2, 0, 0, s2, a2, o2, t2.NEAREST), c6 && t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, l3);
        }
        if (n2.bindFramebuffer(t2.READ_FRAMEBUFFER, null), n2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), d3) for (let e4 = 0; e4 < r2.length; e4++) {
          n2.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e4, t2.RENDERBUFFER, u3.__webglColorRenderbuffer[e4]);
          const s3 = i.get(r2[e4]).__webglTexture;
          n2.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e4, t2.TEXTURE_2D, s3, 0);
        }
        n2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, u3.__webglMultisampledFramebuffer);
      }
    }, this.setupDepthRenderbuffer = D, this.setupFrameBufferTexture = U, this.useMultisampledRTT = F;
  }
  function kl(t2, e2, n2) {
    const i = n2.isWebGL2;
    return { convert: function(n3, r = "") {
      let s;
      const a = mi.getTransfer(r);
      if (n3 === wt) return t2.UNSIGNED_BYTE;
      if (n3 === Nt) return t2.UNSIGNED_SHORT_4_4_4_4;
      if (n3 === Dt) return t2.UNSIGNED_SHORT_5_5_5_1;
      if (1010 === n3) return t2.BYTE;
      if (1011 === n3) return t2.SHORT;
      if (n3 === Ct) return t2.UNSIGNED_SHORT;
      if (n3 === Pt) return t2.INT;
      if (n3 === Lt) return t2.UNSIGNED_INT;
      if (n3 === It) return t2.FLOAT;
      if (n3 === Ut) return i ? t2.HALF_FLOAT : (s = e2.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
      if (1021 === n3) return t2.ALPHA;
      if (n3 === Bt) return t2.RGBA;
      if (1024 === n3) return t2.LUMINANCE;
      if (1025 === n3) return t2.LUMINANCE_ALPHA;
      if (n3 === Vt) return t2.DEPTH_COMPONENT;
      if (n3 === kt) return t2.DEPTH_STENCIL;
      if (n3 === Fn) return s = e2.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
      if (1028 === n3) return t2.RED;
      if (n3 === Wt) return t2.RED_INTEGER;
      if (1030 === n3) return t2.RG;
      if (n3 === jt) return t2.RG_INTEGER;
      if (n3 === qt) return t2.RGBA_INTEGER;
      if (n3 === Yt || n3 === Zt || n3 === Jt || n3 === Kt) if (a === $e) {
        if (s = e2.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
        if (n3 === Yt) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n3 === Zt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n3 === Jt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n3 === Kt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (s = e2.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
        if (n3 === Yt) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n3 === Zt) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n3 === Jt) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n3 === Kt) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n3 === $t || n3 === Qt || n3 === te || n3 === ee) {
        if (s = e2.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
        if (n3 === $t) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n3 === Qt) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n3 === te) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n3 === ee) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n3 === ne) return s = e2.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
      if (n3 === ie || n3 === re) {
        if (s = e2.get("WEBGL_compressed_texture_etc"), null === s) return null;
        if (n3 === ie) return a === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n3 === re) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n3 === se || n3 === ae || n3 === oe || n3 === le || n3 === ce || n3 === he || n3 === ue || n3 === de || n3 === pe || n3 === me || n3 === fe || n3 === ge || n3 === _e || n3 === ve) {
        if (s = e2.get("WEBGL_compressed_texture_astc"), null === s) return null;
        if (n3 === se) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n3 === ae) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n3 === oe) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n3 === le) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n3 === ce) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n3 === he) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n3 === ue) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n3 === de) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n3 === pe) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n3 === me) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n3 === fe) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n3 === ge) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n3 === _e) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n3 === ve) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n3 === xe || n3 === ye || n3 === Me) {
        if (s = e2.get("EXT_texture_compression_bptc"), null === s) return null;
        if (n3 === xe) return a === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n3 === ye) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n3 === Me) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (36283 === n3 || n3 === be || n3 === Ee || n3 === Te) {
        if (s = e2.get("EXT_texture_compression_rgtc"), null === s) return null;
        if (n3 === xe) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n3 === be) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n3 === Ee) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n3 === Te) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n3 === Ot ? i ? t2.UNSIGNED_INT_24_8 : (s = e2.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t2[n3] ? t2[n3] : null;
    } };
  }
  var Gl = class extends ta {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.cameras = t2;
    }
  };
  var Wl = class extends Nr {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var Xl = { type: "move" };
  var jl = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new Wl(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new Wl(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ui(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ui()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new Wl(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ui(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ui()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e2 = this._hand;
        if (e2) for (const n2 of t2.hand.values()) this._getHandJoint(e2, n2);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e2, n2) {
      let i = null, r = null, s = null;
      const a = this._targetRay, o = this._grip, l2 = this._hand;
      if (t2 && "visible-blurred" !== e2.session.visibilityState) {
        if (l2 && t2.hand) {
          s = true;
          for (const i3 of t2.hand.values()) {
            const t3 = e2.getJointPose(i3, n2), r3 = this._getHandJoint(l2, i3);
            null !== t3 && (r3.matrix.fromArray(t3.transform.matrix), r3.matrix.decompose(r3.position, r3.rotation, r3.scale), r3.matrixWorldNeedsUpdate = true, r3.jointRadius = t3.radius), r3.visible = null !== t3;
          }
          const i2 = l2.joints["index-finger-tip"], r2 = l2.joints["thumb-tip"], a2 = i2.position.distanceTo(r2.position), o2 = 0.02, c6 = 5e-3;
          l2.inputState.pinching && a2 > o2 + c6 ? (l2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !l2.inputState.pinching && a2 <= o2 - c6 && (l2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o && t2.gripSpace && (r = e2.getPose(t2.gripSpace, n2), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false));
        null !== a && (i = e2.getPose(t2.targetRaySpace, n2), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Xl)));
      }
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l2 && (l2.visible = null !== s), this;
    }
    _getHandJoint(t2, e2) {
      if (void 0 === t2.joints[e2.jointName]) {
        const n2 = new Wl();
        n2.matrixAutoUpdate = false, n2.visible = false, t2.joints[e2.jointName] = n2, t2.add(n2);
      }
      return t2.joints[e2.jointName];
    }
  };
  var ql = class extends Hn {
    constructor(t2, e2) {
      super();
      const n2 = this;
      let i = null, r = 1, s = null, a = "local-floor", o = 1, l2 = null, c6 = null, h2 = null, u2 = null, d2 = null, p2 = null;
      const m = e2.getContextAttributes();
      let f = null, g = null;
      const _ = [], v = [], x = new ti();
      let y = null;
      const M3 = new ta();
      M3.layers.enable(1), M3.viewport = new Ei();
      const S = new ta();
      S.layers.enable(2), S.viewport = new Ei();
      const b = [M3, S], E = new Gl();
      E.layers.enable(1), E.layers.enable(2);
      let T = null, w = null;
      function A(t3) {
        const e3 = v.indexOf(t3.inputSource);
        if (-1 === e3) return;
        const n3 = _[e3];
        void 0 !== n3 && (n3.update(t3.inputSource, t3.frame, l2 || s), n3.dispatchEvent({ type: t3.type, data: t3.inputSource }));
      }
      function R() {
        i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", R), i.removeEventListener("inputsourceschange", C);
        for (let t3 = 0; t3 < _.length; t3++) {
          const e3 = v[t3];
          null !== e3 && (v[t3] = null, _[t3].disconnect(e3));
        }
        T = null, w = null, t2.setRenderTarget(f), d2 = null, u2 = null, h2 = null, i = null, g = null, N.stop(), n2.isPresenting = false, t2.setPixelRatio(y), t2.setSize(x.width, x.height, false), n2.dispatchEvent({ type: "sessionend" });
      }
      function C(t3) {
        for (let e3 = 0; e3 < t3.removed.length; e3++) {
          const n3 = t3.removed[e3], i2 = v.indexOf(n3);
          i2 >= 0 && (v[i2] = null, _[i2].disconnect(n3));
        }
        for (let e3 = 0; e3 < t3.added.length; e3++) {
          const n3 = t3.added[e3];
          let i2 = v.indexOf(n3);
          if (-1 === i2) {
            for (let t4 = 0; t4 < _.length; t4++) {
              if (t4 >= v.length) {
                v.push(n3), i2 = t4;
                break;
              }
              if (null === v[t4]) {
                v[t4] = n3, i2 = t4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r2 = _[i2];
          r2 && r2.connect(n3);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(t3) {
        let e3 = _[t3];
        return void 0 === e3 && (e3 = new jl(), _[t3] = e3), e3.getTargetRaySpace();
      }, this.getControllerGrip = function(t3) {
        let e3 = _[t3];
        return void 0 === e3 && (e3 = new jl(), _[t3] = e3), e3.getGripSpace();
      }, this.getHand = function(t3) {
        let e3 = _[t3];
        return void 0 === e3 && (e3 = new jl(), _[t3] = e3), e3.getHandSpace();
      }, this.setFramebufferScaleFactor = function(t3) {
        r = t3, true === n2.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(t3) {
        a = t3, true === n2.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
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
      }, this.setSession = async function(c7) {
        if (i = c7, null !== i) {
          if (f = t2.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", R), i.addEventListener("inputsourceschange", C), true !== m.xrCompatible && await e2.makeXRCompatible(), y = t2.getPixelRatio(), t2.getSize(x), void 0 === i.renderState.layers || false === t2.capabilities.isWebGL2) {
            const n3 = { antialias: void 0 !== i.renderState.layers || m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
            d2 = new XRWebGLLayer(i, e2, n3), i.updateRenderState({ baseLayer: d2 }), t2.setPixelRatio(1), t2.setSize(d2.framebufferWidth, d2.framebufferHeight, false), g = new wi(d2.framebufferWidth, d2.framebufferHeight, { format: Bt, type: wt, colorSpace: t2.outputColorSpace, stencilBuffer: m.stencil });
          } else {
            let n3 = null, s2 = null, a2 = null;
            m.depth && (a2 = m.stencil ? e2.DEPTH24_STENCIL8 : e2.DEPTH_COMPONENT24, n3 = m.stencil ? kt : Vt, s2 = m.stencil ? Ot : Lt);
            const o2 = { colorFormat: e2.RGBA8, depthFormat: a2, scaleFactor: r };
            h2 = new XRWebGLBinding(i, e2), u2 = h2.createProjectionLayer(o2), i.updateRenderState({ layers: [u2] }), t2.setPixelRatio(1), t2.setSize(u2.textureWidth, u2.textureHeight, false), g = new wi(u2.textureWidth, u2.textureHeight, { format: Bt, type: wt, depthTexture: new Ka(u2.textureWidth, u2.textureHeight, s2, void 0, void 0, void 0, void 0, void 0, void 0, n3), stencilBuffer: m.stencil, colorSpace: t2.outputColorSpace, samples: m.antialias ? 4 : 0 });
            t2.properties.get(g).__ignoreDepthValues = u2.ignoreDepthValues;
          }
          g.isXRRenderTarget = true, this.setFoveation(o), l2 = null, s = await i.requestReferenceSpace(a), N.setContext(i), N.start(), n2.isPresenting = true, n2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== i) return i.environmentBlendMode;
      };
      const P2 = new Ui(), L2 = new Ui();
      function I(t3, e3) {
        null === e3 ? t3.matrixWorld.copy(t3.matrix) : t3.matrixWorld.multiplyMatrices(e3.matrixWorld, t3.matrix), t3.matrixWorldInverse.copy(t3.matrixWorld).invert();
      }
      this.updateCamera = function(t3) {
        if (null === i) return;
        E.near = S.near = M3.near = t3.near, E.far = S.far = M3.far = t3.far, T === E.near && w === E.far || (i.updateRenderState({ depthNear: E.near, depthFar: E.far }), T = E.near, w = E.far);
        const e3 = t3.parent, n3 = E.cameras;
        I(E, e3);
        for (let t4 = 0; t4 < n3.length; t4++) I(n3[t4], e3);
        2 === n3.length ? function(t4, e4, n4) {
          P2.setFromMatrixPosition(e4.matrixWorld), L2.setFromMatrixPosition(n4.matrixWorld);
          const i2 = P2.distanceTo(L2), r2 = e4.projectionMatrix.elements, s2 = n4.projectionMatrix.elements, a2 = r2[14] / (r2[10] - 1), o2 = r2[14] / (r2[10] + 1), l3 = (r2[9] + 1) / r2[5], c7 = (r2[9] - 1) / r2[5], h3 = (r2[8] - 1) / r2[0], u3 = (s2[8] + 1) / s2[0], d3 = a2 * h3, p3 = a2 * u3, m2 = i2 / (-h3 + u3), f2 = m2 * -h3;
          e4.matrixWorld.decompose(t4.position, t4.quaternion, t4.scale), t4.translateX(f2), t4.translateZ(m2), t4.matrixWorld.compose(t4.position, t4.quaternion, t4.scale), t4.matrixWorldInverse.copy(t4.matrixWorld).invert();
          const g2 = a2 + m2, _2 = o2 + m2, v2 = d3 - f2, x2 = p3 + (i2 - f2), y2 = l3 * o2 / _2 * g2, M4 = c7 * o2 / _2 * g2;
          t4.projectionMatrix.makePerspective(v2, x2, y2, M4, g2, _2), t4.projectionMatrixInverse.copy(t4.projectionMatrix).invert();
        }(E, M3, S) : E.projectionMatrix.copy(M3.projectionMatrix), function(t4, e4, n4) {
          null === n4 ? t4.matrix.copy(e4.matrixWorld) : (t4.matrix.copy(n4.matrixWorld), t4.matrix.invert(), t4.matrix.multiply(e4.matrixWorld));
          t4.matrix.decompose(t4.position, t4.quaternion, t4.scale), t4.updateMatrixWorld(true), t4.projectionMatrix.copy(e4.projectionMatrix), t4.projectionMatrixInverse.copy(e4.projectionMatrixInverse), t4.isPerspectiveCamera && (t4.fov = 2 * Wn * Math.atan(1 / t4.projectionMatrix.elements[5]), t4.zoom = 1);
        }(t3, E, e3);
      }, this.getCamera = function() {
        return E;
      }, this.getFoveation = function() {
        if (null !== u2 || null !== d2) return o;
      }, this.setFoveation = function(t3) {
        o = t3, null !== u2 && (u2.fixedFoveation = t3), null !== d2 && void 0 !== d2.fixedFoveation && (d2.fixedFoveation = t3);
      };
      let U = null;
      const N = new da();
      N.setAnimationLoop(function(e3, i2) {
        if (c6 = i2.getViewerPose(l2 || s), p2 = i2, null !== c6) {
          const e4 = c6.views;
          null !== d2 && (t2.setRenderTargetFramebuffer(g, d2.framebuffer), t2.setRenderTarget(g));
          let n3 = false;
          e4.length !== E.cameras.length && (E.cameras.length = 0, n3 = true);
          for (let i3 = 0; i3 < e4.length; i3++) {
            const r2 = e4[i3];
            let s2 = null;
            if (null !== d2) s2 = d2.getViewport(r2);
            else {
              const e5 = h2.getViewSubImage(u2, r2);
              s2 = e5.viewport, 0 === i3 && (t2.setRenderTargetTextures(g, e5.colorTexture, u2.ignoreDepthValues ? void 0 : e5.depthStencilTexture), t2.setRenderTarget(g));
            }
            let a2 = b[i3];
            void 0 === a2 && (a2 = new ta(), a2.layers.enable(i3), a2.viewport = new Ei(), b[i3] = a2), a2.matrix.fromArray(r2.transform.matrix), a2.matrix.decompose(a2.position, a2.quaternion, a2.scale), a2.projectionMatrix.fromArray(r2.projectionMatrix), a2.projectionMatrixInverse.copy(a2.projectionMatrix).invert(), a2.viewport.set(s2.x, s2.y, s2.width, s2.height), 0 === i3 && (E.matrix.copy(a2.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), true === n3 && E.cameras.push(a2);
          }
        }
        for (let t3 = 0; t3 < _.length; t3++) {
          const e4 = v[t3], n3 = _[t3];
          null !== e4 && void 0 !== n3 && n3.update(e4, i2, l2 || s);
        }
        U && U(e3, i2), i2.detectedPlanes && n2.dispatchEvent({ type: "planesdetected", data: i2 }), p2 = null;
      }), this.setAnimationLoop = function(t3) {
        U = t3;
      }, this.dispose = function() {
      };
    }
  };
  function Yl(t2, e2) {
    function n2(t3, e3) {
      true === t3.matrixAutoUpdate && t3.updateMatrix(), e3.value.copy(t3.matrix);
    }
    function i(i2, r) {
      i2.opacity.value = r.opacity, r.color && i2.diffuse.value.copy(r.color), r.emissive && i2.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (i2.map.value = r.map, n2(r.map, i2.mapTransform)), r.alphaMap && (i2.alphaMap.value = r.alphaMap, n2(r.alphaMap, i2.alphaMapTransform)), r.bumpMap && (i2.bumpMap.value = r.bumpMap, n2(r.bumpMap, i2.bumpMapTransform), i2.bumpScale.value = r.bumpScale, r.side === d && (i2.bumpScale.value *= -1)), r.normalMap && (i2.normalMap.value = r.normalMap, n2(r.normalMap, i2.normalMapTransform), i2.normalScale.value.copy(r.normalScale), r.side === d && i2.normalScale.value.negate()), r.displacementMap && (i2.displacementMap.value = r.displacementMap, n2(r.displacementMap, i2.displacementMapTransform), i2.displacementScale.value = r.displacementScale, i2.displacementBias.value = r.displacementBias), r.emissiveMap && (i2.emissiveMap.value = r.emissiveMap, n2(r.emissiveMap, i2.emissiveMapTransform)), r.specularMap && (i2.specularMap.value = r.specularMap, n2(r.specularMap, i2.specularMapTransform)), r.alphaTest > 0 && (i2.alphaTest.value = r.alphaTest);
      const s = e2.get(r).envMap;
      if (s && (i2.envMap.value = s, i2.flipEnvMap.value = s.isCubeTexture && false === s.isRenderTargetTexture ? -1 : 1, i2.reflectivity.value = r.reflectivity, i2.ior.value = r.ior, i2.refractionRatio.value = r.refractionRatio), r.lightMap) {
        i2.lightMap.value = r.lightMap;
        const e3 = true === t2._useLegacyLights ? Math.PI : 1;
        i2.lightMapIntensity.value = r.lightMapIntensity * e3, n2(r.lightMap, i2.lightMapTransform);
      }
      r.aoMap && (i2.aoMap.value = r.aoMap, i2.aoMapIntensity.value = r.aoMapIntensity, n2(r.aoMap, i2.aoMapTransform));
    }
    return { refreshFogUniforms: function(e3, n3) {
      n3.color.getRGB(e3.fogColor.value, Js(t2)), n3.isFog ? (e3.fogNear.value = n3.near, e3.fogFar.value = n3.far) : n3.isFogExp2 && (e3.fogDensity.value = n3.density);
    }, refreshMaterialUniforms: function(t3, r, s, a, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t3, r) : r.isMeshToonMaterial ? (i(t3, r), function(t4, e3) {
        e3.gradientMap && (t4.gradientMap.value = e3.gradientMap);
      }(t3, r)) : r.isMeshPhongMaterial ? (i(t3, r), function(t4, e3) {
        t4.specular.value.copy(e3.specular), t4.shininess.value = Math.max(e3.shininess, 1e-4);
      }(t3, r)) : r.isMeshStandardMaterial ? (i(t3, r), function(t4, i2) {
        t4.metalness.value = i2.metalness, i2.metalnessMap && (t4.metalnessMap.value = i2.metalnessMap, n2(i2.metalnessMap, t4.metalnessMapTransform));
        t4.roughness.value = i2.roughness, i2.roughnessMap && (t4.roughnessMap.value = i2.roughnessMap, n2(i2.roughnessMap, t4.roughnessMapTransform));
        const r2 = e2.get(i2).envMap;
        r2 && (t4.envMapIntensity.value = i2.envMapIntensity);
      }(t3, r), r.isMeshPhysicalMaterial && function(t4, e3, i2) {
        t4.ior.value = e3.ior, e3.sheen > 0 && (t4.sheenColor.value.copy(e3.sheenColor).multiplyScalar(e3.sheen), t4.sheenRoughness.value = e3.sheenRoughness, e3.sheenColorMap && (t4.sheenColorMap.value = e3.sheenColorMap, n2(e3.sheenColorMap, t4.sheenColorMapTransform)), e3.sheenRoughnessMap && (t4.sheenRoughnessMap.value = e3.sheenRoughnessMap, n2(e3.sheenRoughnessMap, t4.sheenRoughnessMapTransform)));
        e3.clearcoat > 0 && (t4.clearcoat.value = e3.clearcoat, t4.clearcoatRoughness.value = e3.clearcoatRoughness, e3.clearcoatMap && (t4.clearcoatMap.value = e3.clearcoatMap, n2(e3.clearcoatMap, t4.clearcoatMapTransform)), e3.clearcoatRoughnessMap && (t4.clearcoatRoughnessMap.value = e3.clearcoatRoughnessMap, n2(e3.clearcoatRoughnessMap, t4.clearcoatRoughnessMapTransform)), e3.clearcoatNormalMap && (t4.clearcoatNormalMap.value = e3.clearcoatNormalMap, n2(e3.clearcoatNormalMap, t4.clearcoatNormalMapTransform), t4.clearcoatNormalScale.value.copy(e3.clearcoatNormalScale), e3.side === d && t4.clearcoatNormalScale.value.negate()));
        e3.iridescence > 0 && (t4.iridescence.value = e3.iridescence, t4.iridescenceIOR.value = e3.iridescenceIOR, t4.iridescenceThicknessMinimum.value = e3.iridescenceThicknessRange[0], t4.iridescenceThicknessMaximum.value = e3.iridescenceThicknessRange[1], e3.iridescenceMap && (t4.iridescenceMap.value = e3.iridescenceMap, n2(e3.iridescenceMap, t4.iridescenceMapTransform)), e3.iridescenceThicknessMap && (t4.iridescenceThicknessMap.value = e3.iridescenceThicknessMap, n2(e3.iridescenceThicknessMap, t4.iridescenceThicknessMapTransform)));
        e3.transmission > 0 && (t4.transmission.value = e3.transmission, t4.transmissionSamplerMap.value = i2.texture, t4.transmissionSamplerSize.value.set(i2.width, i2.height), e3.transmissionMap && (t4.transmissionMap.value = e3.transmissionMap, n2(e3.transmissionMap, t4.transmissionMapTransform)), t4.thickness.value = e3.thickness, e3.thicknessMap && (t4.thicknessMap.value = e3.thicknessMap, n2(e3.thicknessMap, t4.thicknessMapTransform)), t4.attenuationDistance.value = e3.attenuationDistance, t4.attenuationColor.value.copy(e3.attenuationColor));
        e3.anisotropy > 0 && (t4.anisotropyVector.value.set(e3.anisotropy * Math.cos(e3.anisotropyRotation), e3.anisotropy * Math.sin(e3.anisotropyRotation)), e3.anisotropyMap && (t4.anisotropyMap.value = e3.anisotropyMap, n2(e3.anisotropyMap, t4.anisotropyMapTransform)));
        t4.specularIntensity.value = e3.specularIntensity, t4.specularColor.value.copy(e3.specularColor), e3.specularColorMap && (t4.specularColorMap.value = e3.specularColorMap, n2(e3.specularColorMap, t4.specularColorMapTransform));
        e3.specularIntensityMap && (t4.specularIntensityMap.value = e3.specularIntensityMap, n2(e3.specularIntensityMap, t4.specularIntensityMapTransform));
      }(t3, r, o)) : r.isMeshMatcapMaterial ? (i(t3, r), function(t4, e3) {
        e3.matcap && (t4.matcap.value = e3.matcap);
      }(t3, r)) : r.isMeshDepthMaterial ? i(t3, r) : r.isMeshDistanceMaterial ? (i(t3, r), function(t4, n3) {
        const i2 = e2.get(n3).light;
        t4.referencePosition.value.setFromMatrixPosition(i2.matrixWorld), t4.nearDistance.value = i2.shadow.camera.near, t4.farDistance.value = i2.shadow.camera.far;
      }(t3, r)) : r.isMeshNormalMaterial ? i(t3, r) : r.isLineBasicMaterial ? (function(t4, e3) {
        t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity, e3.map && (t4.map.value = e3.map, n2(e3.map, t4.mapTransform));
      }(t3, r), r.isLineDashedMaterial && function(t4, e3) {
        t4.dashSize.value = e3.dashSize, t4.totalSize.value = e3.dashSize + e3.gapSize, t4.scale.value = e3.scale;
      }(t3, r)) : r.isPointsMaterial ? function(t4, e3, i2, r2) {
        t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity, t4.size.value = e3.size * i2, t4.scale.value = 0.5 * r2, e3.map && (t4.map.value = e3.map, n2(e3.map, t4.uvTransform));
        e3.alphaMap && (t4.alphaMap.value = e3.alphaMap, n2(e3.alphaMap, t4.alphaMapTransform));
        e3.alphaTest > 0 && (t4.alphaTest.value = e3.alphaTest);
      }(t3, r, s, a) : r.isSpriteMaterial ? function(t4, e3) {
        t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity, t4.rotation.value = e3.rotation, e3.map && (t4.map.value = e3.map, n2(e3.map, t4.mapTransform));
        e3.alphaMap && (t4.alphaMap.value = e3.alphaMap, n2(e3.alphaMap, t4.alphaMapTransform));
        e3.alphaTest > 0 && (t4.alphaTest.value = e3.alphaTest);
      }(t3, r) : r.isShadowMaterial ? (t3.color.value.copy(r.color), t3.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = false);
    } };
  }
  function Zl(t2, e2, n2, i) {
    let r = {}, s = {}, a = [];
    const o = n2.isWebGL2 ? t2.getParameter(t2.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l2(t3, e3, n3, i2) {
      const r2 = t3.value, s2 = e3 + "_" + n3;
      if (void 0 === i2[s2]) return i2[s2] = "number" == typeof r2 || "boolean" == typeof r2 ? r2 : r2.clone(), true;
      {
        const t4 = i2[s2];
        if ("number" == typeof r2 || "boolean" == typeof r2) {
          if (t4 !== r2) return i2[s2] = r2, true;
        } else if (false === t4.equals(r2)) return t4.copy(r2), true;
      }
      return false;
    }
    function c6(t3) {
      const e3 = { boundary: 0, storage: 0 };
      return "number" == typeof t3 || "boolean" == typeof t3 ? (e3.boundary = 4, e3.storage = 4) : t3.isVector2 ? (e3.boundary = 8, e3.storage = 8) : t3.isVector3 || t3.isColor ? (e3.boundary = 16, e3.storage = 12) : t3.isVector4 ? (e3.boundary = 16, e3.storage = 16) : t3.isMatrix3 ? (e3.boundary = 48, e3.storage = 48) : t3.isMatrix4 ? (e3.boundary = 64, e3.storage = 64) : t3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t3), e3;
    }
    function h2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", h2);
      const i2 = a.indexOf(n3.__bindingPointIndex);
      a.splice(i2, 1), t2.deleteBuffer(r[n3.id]), delete r[n3.id], delete s[n3.id];
    }
    return { bind: function(t3, e3) {
      const n3 = e3.program;
      i.uniformBlockBinding(t3, n3);
    }, update: function(n3, u2) {
      let d2 = r[n3.id];
      void 0 === d2 && (!function(t3) {
        const e3 = t3.uniforms;
        let n4 = 0;
        const i2 = 16;
        for (let t4 = 0, r3 = e3.length; t4 < r3; t4++) {
          const r4 = Array.isArray(e3[t4]) ? e3[t4] : [e3[t4]];
          for (let t5 = 0, e4 = r4.length; t5 < e4; t5++) {
            const e5 = r4[t5], s2 = Array.isArray(e5.value) ? e5.value : [e5.value];
            for (let t6 = 0, r5 = s2.length; t6 < r5; t6++) {
              const r6 = c6(s2[t6]), a2 = n4 % i2;
              0 !== a2 && i2 - a2 < r6.boundary && (n4 += i2 - a2), e5.__data = new Float32Array(r6.storage / Float32Array.BYTES_PER_ELEMENT), e5.__offset = n4, n4 += r6.storage;
            }
          }
        }
        const r2 = n4 % i2;
        r2 > 0 && (n4 += i2 - r2);
        t3.__size = n4, t3.__cache = {};
      }(n3), d2 = function(e3) {
        const n4 = function() {
          for (let t3 = 0; t3 < o; t3++) if (-1 === a.indexOf(t3)) return a.push(t3), t3;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }();
        e3.__bindingPointIndex = n4;
        const i2 = t2.createBuffer(), r2 = e3.__size, s2 = e3.usage;
        return t2.bindBuffer(t2.UNIFORM_BUFFER, i2), t2.bufferData(t2.UNIFORM_BUFFER, r2, s2), t2.bindBuffer(t2.UNIFORM_BUFFER, null), t2.bindBufferBase(t2.UNIFORM_BUFFER, n4, i2), i2;
      }(n3), r[n3.id] = d2, n3.addEventListener("dispose", h2));
      const p2 = u2.program;
      i.updateUBOMapping(n3, p2);
      const m = e2.render.frame;
      s[n3.id] !== m && (!function(e3) {
        const n4 = r[e3.id], i2 = e3.uniforms, s2 = e3.__cache;
        t2.bindBuffer(t2.UNIFORM_BUFFER, n4);
        for (let e4 = 0, n5 = i2.length; e4 < n5; e4++) {
          const n6 = Array.isArray(i2[e4]) ? i2[e4] : [i2[e4]];
          for (let i3 = 0, r2 = n6.length; i3 < r2; i3++) {
            const r3 = n6[i3];
            if (true === l2(r3, e4, i3, s2)) {
              const e5 = r3.__offset, n7 = Array.isArray(r3.value) ? r3.value : [r3.value];
              let i4 = 0;
              for (let s3 = 0; s3 < n7.length; s3++) {
                const a2 = n7[s3], o2 = c6(a2);
                "number" == typeof a2 || "boolean" == typeof a2 ? (r3.__data[0] = a2, t2.bufferSubData(t2.UNIFORM_BUFFER, e5 + i4, r3.__data)) : a2.isMatrix3 ? (r3.__data[0] = a2.elements[0], r3.__data[1] = a2.elements[1], r3.__data[2] = a2.elements[2], r3.__data[3] = 0, r3.__data[4] = a2.elements[3], r3.__data[5] = a2.elements[4], r3.__data[6] = a2.elements[5], r3.__data[7] = 0, r3.__data[8] = a2.elements[6], r3.__data[9] = a2.elements[7], r3.__data[10] = a2.elements[8], r3.__data[11] = 0) : (a2.toArray(r3.__data, i4), i4 += o2.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              t2.bufferSubData(t2.UNIFORM_BUFFER, e5, r3.__data);
            }
          }
        }
        t2.bindBuffer(t2.UNIFORM_BUFFER, null);
      }(n3), s[n3.id] = m);
    }, dispose: function() {
      for (const e3 in r) t2.deleteBuffer(r[e3]);
      a = [], r = {}, s = {};
    } };
  }
  var Jl = class {
    constructor(e2 = {}) {
      const { canvas: n2 = oi(), context: i = null, depth: r = true, stencil: s = true, alpha: a = false, antialias: o = false, premultipliedAlpha: l2 = true, preserveDrawingBuffer: c6 = false, powerPreference: h2 = "default", failIfMajorPerformanceCaveat: p2 = false } = e2;
      let m;
      this.isWebGLRenderer = true, m = null !== i ? i.getContextAttributes().alpha : a;
      const f = new Uint32Array(4), g = new Int32Array(4);
      let _ = null, v = null;
      const x = [], y = [];
      this.domElement = n2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = qe, this._useLegacyLights = false, this.toneMapping = $, this.toneMappingExposure = 1;
      const M3 = this;
      let S = false, b = 0, E = 0, T = null, w = -1, A = null;
      const R = new Ei(), C = new Ei();
      let P2 = null;
      const L2 = new Kr(0);
      let I = 0, U = n2.width, N = n2.height, D = 1, O = null, F = null;
      const B = new Ei(0, 0, U, N), z = new Ei(0, 0, U, N);
      let H = false;
      const V2 = new ua();
      let k = false, G = false, W = null;
      const X = new cr(), j = new ti(), q = new Ui(), Y = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      function Z2() {
        return null === T ? D : 1;
      }
      let J2, K3, Q2, tt2, et2, nt2, it2, rt2, st11, at, ot2, lt2, ct2, ht2, ut2, dt2, pt2, mt2, ft2, gt2, _t2, vt, xt2, yt, Mt2 = i;
      function St2(t2, e3) {
        for (let i2 = 0; i2 < t2.length; i2++) {
          const r2 = t2[i2], s2 = n2.getContext(r2, e3);
          if (null !== s2) return s2;
        }
        return null;
      }
      try {
        const e3 = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l2, preserveDrawingBuffer: c6, powerPreference: h2, failIfMajorPerformanceCaveat: p2 };
        if ("setAttribute" in n2 && n2.setAttribute("data-engine", `three.js r${t}`), n2.addEventListener("webglcontextlost", At, false), n2.addEventListener("webglcontextrestored", Rt, false), n2.addEventListener("webglcontextcreationerror", Pt2, false), null === Mt2) {
          const t2 = ["webgl2", "webgl", "experimental-webgl"];
          if (true === M3.isWebGL1Renderer && t2.shift(), Mt2 = St2(t2, e3), null === Mt2) throw St2(t2) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        "undefined" != typeof WebGLRenderingContext && Mt2 instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), void 0 === Mt2.getShaderPrecisionFormat && (Mt2.getShaderPrecisionFormat = function() {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
      } catch (t2) {
        throw console.error("THREE.WebGLRenderer: " + t2.message), t2;
      }
      function bt() {
        J2 = new Ga(Mt2), K3 = new Sa(Mt2, J2, e2), J2.init(K3), vt = new kl(Mt2, J2, K3), Q2 = new Hl(Mt2, J2, K3), tt2 = new ja(Mt2), et2 = new wl(), nt2 = new Vl(Mt2, J2, Q2, et2, K3, vt, tt2), it2 = new Ea(M3), rt2 = new ka(M3), st11 = new pa(Mt2, K3), xt2 = new ya(Mt2, J2, st11, K3), at = new Wa(Mt2, st11, tt2, xt2), ot2 = new Ja(Mt2, at, st11, tt2), ft2 = new Za(Mt2, K3, nt2), dt2 = new ba(et2), lt2 = new Tl(M3, it2, rt2, J2, K3, xt2, dt2), ct2 = new Yl(M3, et2), ht2 = new Pl(), ut2 = new Ol(J2, K3), mt2 = new xa(M3, it2, rt2, Q2, ot2, m, l2), pt2 = new zl(M3, ot2, K3), yt = new Zl(Mt2, tt2, K3, Q2), gt2 = new Ma(Mt2, J2, tt2, K3), _t2 = new Xa(Mt2, J2, tt2, K3), tt2.programs = lt2.programs, M3.capabilities = K3, M3.extensions = J2, M3.properties = et2, M3.renderLists = ht2, M3.shadowMap = pt2, M3.state = Q2, M3.info = tt2;
      }
      bt();
      const Tt = new ql(M3, Mt2);
      function At(t2) {
        t2.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = true;
      }
      function Rt() {
        console.log("THREE.WebGLRenderer: Context Restored."), S = false;
        const t2 = tt2.autoReset, e3 = pt2.enabled, n3 = pt2.autoUpdate, i2 = pt2.needsUpdate, r2 = pt2.type;
        bt(), tt2.autoReset = t2, pt2.enabled = e3, pt2.autoUpdate = n3, pt2.needsUpdate = i2, pt2.type = r2;
      }
      function Pt2(t2) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t2.statusMessage);
      }
      function Ft(t2) {
        const e3 = t2.target;
        e3.removeEventListener("dispose", Ft), function(t3) {
          (function(t4) {
            const e4 = et2.get(t4).programs;
            void 0 !== e4 && (e4.forEach(function(t5) {
              lt2.releaseProgram(t5);
            }), t4.isShaderMaterial && lt2.releaseShaderCache(t4));
          })(t3), et2.remove(t3);
        }(e3);
      }
      function zt(t2, e3, n3) {
        true === t2.transparent && 2 === t2.side && false === t2.forceSinglePass ? (t2.side = d, t2.needsUpdate = true, Kt2(t2, e3, n3), t2.side = u, t2.needsUpdate = true, Kt2(t2, e3, n3), t2.side = 2) : Kt2(t2, e3, n3);
      }
      this.xr = Tt, this.getContext = function() {
        return Mt2;
      }, this.getContextAttributes = function() {
        return Mt2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const t2 = J2.get("WEBGL_lose_context");
        t2 && t2.loseContext();
      }, this.forceContextRestore = function() {
        const t2 = J2.get("WEBGL_lose_context");
        t2 && t2.restoreContext();
      }, this.getPixelRatio = function() {
        return D;
      }, this.setPixelRatio = function(t2) {
        void 0 !== t2 && (D = t2, this.setSize(U, N, false));
      }, this.getSize = function(t2) {
        return t2.set(U, N);
      }, this.setSize = function(t2, e3, i2 = true) {
        Tt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (U = t2, N = e3, n2.width = Math.floor(t2 * D), n2.height = Math.floor(e3 * D), true === i2 && (n2.style.width = t2 + "px", n2.style.height = e3 + "px"), this.setViewport(0, 0, t2, e3));
      }, this.getDrawingBufferSize = function(t2) {
        return t2.set(U * D, N * D).floor();
      }, this.setDrawingBufferSize = function(t2, e3, i2) {
        U = t2, N = e3, D = i2, n2.width = Math.floor(t2 * i2), n2.height = Math.floor(e3 * i2), this.setViewport(0, 0, t2, e3);
      }, this.getCurrentViewport = function(t2) {
        return t2.copy(R);
      }, this.getViewport = function(t2) {
        return t2.copy(B);
      }, this.setViewport = function(t2, e3, n3, i2) {
        t2.isVector4 ? B.set(t2.x, t2.y, t2.z, t2.w) : B.set(t2, e3, n3, i2), Q2.viewport(R.copy(B).multiplyScalar(D).floor());
      }, this.getScissor = function(t2) {
        return t2.copy(z);
      }, this.setScissor = function(t2, e3, n3, i2) {
        t2.isVector4 ? z.set(t2.x, t2.y, t2.z, t2.w) : z.set(t2, e3, n3, i2), Q2.scissor(C.copy(z).multiplyScalar(D).floor());
      }, this.getScissorTest = function() {
        return H;
      }, this.setScissorTest = function(t2) {
        Q2.setScissorTest(H = t2);
      }, this.setOpaqueSort = function(t2) {
        O = t2;
      }, this.setTransparentSort = function(t2) {
        F = t2;
      }, this.getClearColor = function(t2) {
        return t2.copy(mt2.getClearColor());
      }, this.setClearColor = function() {
        mt2.setClearColor.apply(mt2, arguments);
      }, this.getClearAlpha = function() {
        return mt2.getClearAlpha();
      }, this.setClearAlpha = function() {
        mt2.setClearAlpha.apply(mt2, arguments);
      }, this.clear = function(t2 = true, e3 = true, n3 = true) {
        let i2 = 0;
        if (t2) {
          let t3 = false;
          if (null !== T) {
            const e4 = T.texture.format;
            t3 = e4 === qt || e4 === jt || e4 === Wt;
          }
          if (t3) {
            const t4 = T.texture.type, e4 = t4 === wt || t4 === Lt || t4 === Ct || t4 === Ot || t4 === Nt || t4 === Dt, n4 = mt2.getClearColor(), i3 = mt2.getClearAlpha(), r2 = n4.r, s2 = n4.g, a2 = n4.b;
            e4 ? (f[0] = r2, f[1] = s2, f[2] = a2, f[3] = i3, Mt2.clearBufferuiv(Mt2.COLOR, 0, f)) : (g[0] = r2, g[1] = s2, g[2] = a2, g[3] = i3, Mt2.clearBufferiv(Mt2.COLOR, 0, g));
          } else i2 |= Mt2.COLOR_BUFFER_BIT;
        }
        e3 && (i2 |= Mt2.DEPTH_BUFFER_BIT), n3 && (i2 |= Mt2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Mt2.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        n2.removeEventListener("webglcontextlost", At, false), n2.removeEventListener("webglcontextrestored", Rt, false), n2.removeEventListener("webglcontextcreationerror", Pt2, false), ht2.dispose(), ut2.dispose(), et2.dispose(), it2.dispose(), rt2.dispose(), ot2.dispose(), xt2.dispose(), yt.dispose(), lt2.dispose(), Tt.dispose(), Tt.removeEventListener("sessionstart", Vt2), Tt.removeEventListener("sessionend", kt2), W && (W.dispose(), W = null), Gt.stop();
      }, this.renderBufferDirect = function(t2, e3, n3, i2, r2, s2) {
        null === e3 && (e3 = Y);
        const a2 = r2.isMesh && r2.matrixWorld.determinant() < 0, o2 = function(t3, e4, n4, i3, r3) {
          true !== e4.isScene && (e4 = Y);
          nt2.resetTextureUnits();
          const s3 = e4.fog, a3 = i3.isMeshStandardMaterial ? e4.environment : null, o3 = null === T ? M3.outputColorSpace : true === T.isXRRenderTarget ? T.texture.colorSpace : Ye, l4 = (i3.isMeshStandardMaterial ? rt2 : it2).get(i3.envMap || a3), c8 = true === i3.vertexColors && !!n4.attributes.color && 4 === n4.attributes.color.itemSize, h4 = !!n4.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), u3 = !!n4.morphAttributes.position, d3 = !!n4.morphAttributes.normal, p4 = !!n4.morphAttributes.color;
          let m3 = $;
          i3.toneMapped && (null !== T && true !== T.isXRRenderTarget || (m3 = M3.toneMapping));
          const f3 = n4.morphAttributes.position || n4.morphAttributes.normal || n4.morphAttributes.color, g3 = void 0 !== f3 ? f3.length : 0, _2 = et2.get(i3), x2 = v.state.lights;
          if (true === k && (true === G || t3 !== A)) {
            const e5 = t3 === A && i3.id === w;
            dt2.setState(i3, t3, e5);
          }
          let y2 = false;
          i3.version === _2.__version ? _2.needsLights && _2.lightsStateVersion !== x2.state.version || _2.outputColorSpace !== o3 || r3.isBatchedMesh && false === _2.batching ? y2 = true : r3.isBatchedMesh || true !== _2.batching ? r3.isInstancedMesh && false === _2.instancing ? y2 = true : r3.isInstancedMesh || true !== _2.instancing ? r3.isSkinnedMesh && false === _2.skinning ? y2 = true : r3.isSkinnedMesh || true !== _2.skinning ? r3.isInstancedMesh && true === _2.instancingColor && null === r3.instanceColor || r3.isInstancedMesh && false === _2.instancingColor && null !== r3.instanceColor || _2.envMap !== l4 || true === i3.fog && _2.fog !== s3 ? y2 = true : void 0 === _2.numClippingPlanes || _2.numClippingPlanes === dt2.numPlanes && _2.numIntersection === dt2.numIntersection ? (_2.vertexAlphas !== c8 || _2.vertexTangents !== h4 || _2.morphTargets !== u3 || _2.morphNormals !== d3 || _2.morphColors !== p4 || _2.toneMapping !== m3 || true === K3.isWebGL2 && _2.morphTargetsCount !== g3) && (y2 = true) : y2 = true : y2 = true : y2 = true : y2 = true : (y2 = true, _2.__version = i3.version);
          let S2 = _2.currentProgram;
          true === y2 && (S2 = Kt2(i3, e4, r3));
          let b2 = false, E2 = false, R2 = false;
          const C3 = S2.getUniforms(), P3 = _2.uniforms;
          Q2.useProgram(S2.program) && (b2 = true, E2 = true, R2 = true);
          i3.id !== w && (w = i3.id, E2 = true);
          if (b2 || A !== t3) {
            C3.setValue(Mt2, "projectionMatrix", t3.projectionMatrix), C3.setValue(Mt2, "viewMatrix", t3.matrixWorldInverse);
            const e5 = C3.map.cameraPosition;
            void 0 !== e5 && e5.setValue(Mt2, q.setFromMatrixPosition(t3.matrixWorld)), K3.logarithmicDepthBuffer && C3.setValue(Mt2, "logDepthBufFC", 2 / (Math.log(t3.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C3.setValue(Mt2, "isOrthographic", true === t3.isOrthographicCamera), A !== t3 && (A = t3, E2 = true, R2 = true);
          }
          if (r3.isSkinnedMesh) {
            C3.setOptional(Mt2, r3, "bindMatrix"), C3.setOptional(Mt2, r3, "bindMatrixInverse");
            const t4 = r3.skeleton;
            t4 && (K3.floatVertexTextures ? (null === t4.boneTexture && t4.computeBoneTexture(), C3.setValue(Mt2, "boneTexture", t4.boneTexture, nt2)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
          }
          r3.isBatchedMesh && (C3.setOptional(Mt2, r3, "batchingTexture"), C3.setValue(Mt2, "batchingTexture", r3._matricesTexture, nt2));
          const L3 = n4.morphAttributes;
          (void 0 !== L3.position || void 0 !== L3.normal || void 0 !== L3.color && true === K3.isWebGL2) && ft2.update(r3, n4, S2);
          (E2 || _2.receiveShadow !== r3.receiveShadow) && (_2.receiveShadow = r3.receiveShadow, C3.setValue(Mt2, "receiveShadow", r3.receiveShadow));
          i3.isMeshGouraudMaterial && null !== i3.envMap && (P3.envMap.value = l4, P3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
          E2 && (C3.setValue(Mt2, "toneMappingExposure", M3.toneMappingExposure), _2.needsLights && (U2 = R2, (I2 = P3).ambientLightColor.needsUpdate = U2, I2.lightProbe.needsUpdate = U2, I2.directionalLights.needsUpdate = U2, I2.directionalLightShadows.needsUpdate = U2, I2.pointLights.needsUpdate = U2, I2.pointLightShadows.needsUpdate = U2, I2.spotLights.needsUpdate = U2, I2.spotLightShadows.needsUpdate = U2, I2.rectAreaLights.needsUpdate = U2, I2.hemisphereLights.needsUpdate = U2), s3 && true === i3.fog && ct2.refreshFogUniforms(P3, s3), ct2.refreshMaterialUniforms(P3, i3, D, N, W), il.upload(Mt2, $t2(_2), P3, nt2));
          var I2, U2;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (il.upload(Mt2, $t2(_2), P3, nt2), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C3.setValue(Mt2, "center", r3.center);
          if (C3.setValue(Mt2, "modelViewMatrix", r3.modelViewMatrix), C3.setValue(Mt2, "normalMatrix", r3.normalMatrix), C3.setValue(Mt2, "modelMatrix", r3.matrixWorld), i3.isShaderMaterial || i3.isRawShaderMaterial) {
            const t4 = i3.uniformsGroups;
            for (let e5 = 0, n5 = t4.length; e5 < n5; e5++) if (K3.isWebGL2) {
              const n6 = t4[e5];
              yt.update(n6, S2), yt.bind(n6, S2);
            } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
          }
          return S2;
        }(t2, e3, n3, i2, r2);
        Q2.setMaterial(i2, a2);
        let l3 = n3.index, c7 = 1;
        if (true === i2.wireframe) {
          if (l3 = at.getWireframeAttribute(n3), void 0 === l3) return;
          c7 = 2;
        }
        const h3 = n3.drawRange, u2 = n3.attributes.position;
        let d2 = h3.start * c7, p3 = (h3.start + h3.count) * c7;
        null !== s2 && (d2 = Math.max(d2, s2.start * c7), p3 = Math.min(p3, (s2.start + s2.count) * c7)), null !== l3 ? (d2 = Math.max(d2, 0), p3 = Math.min(p3, l3.count)) : null != u2 && (d2 = Math.max(d2, 0), p3 = Math.min(p3, u2.count));
        const m2 = p3 - d2;
        if (m2 < 0 || m2 === 1 / 0) return;
        let f2;
        xt2.setup(r2, i2, o2, n3, l3);
        let g2 = gt2;
        if (null !== l3 && (f2 = st11.get(l3), g2 = _t2, g2.setIndex(f2)), r2.isMesh) true === i2.wireframe ? (Q2.setLineWidth(i2.wireframeLinewidth * Z2()), g2.setMode(Mt2.LINES)) : g2.setMode(Mt2.TRIANGLES);
        else if (r2.isLine) {
          let t3 = i2.linewidth;
          void 0 === t3 && (t3 = 1), Q2.setLineWidth(t3 * Z2()), r2.isLineSegments ? g2.setMode(Mt2.LINES) : r2.isLineLoop ? g2.setMode(Mt2.LINE_LOOP) : g2.setMode(Mt2.LINE_STRIP);
        } else r2.isPoints ? g2.setMode(Mt2.POINTS) : r2.isSprite && g2.setMode(Mt2.TRIANGLES);
        if (r2.isBatchedMesh) g2.renderMultiDraw(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount);
        else if (r2.isInstancedMesh) g2.renderInstances(d2, m2, r2.count);
        else if (n3.isInstancedBufferGeometry) {
          const t3 = void 0 !== n3._maxInstanceCount ? n3._maxInstanceCount : 1 / 0, e4 = Math.min(n3.instanceCount, t3);
          g2.renderInstances(d2, m2, e4);
        } else g2.render(d2, m2);
      }, this.compile = function(t2, e3, n3 = null) {
        null === n3 && (n3 = t2), v = ut2.get(n3), v.init(), y.push(v), n3.traverseVisible(function(t3) {
          t3.isLight && t3.layers.test(e3.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        }), t2 !== n3 && t2.traverseVisible(function(t3) {
          t3.isLight && t3.layers.test(e3.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        }), v.setupLights(M3._useLegacyLights);
        const i2 = /* @__PURE__ */ new Set();
        return t2.traverse(function(t3) {
          const e4 = t3.material;
          if (e4) if (Array.isArray(e4)) for (let r2 = 0; r2 < e4.length; r2++) {
            const s2 = e4[r2];
            zt(s2, n3, t3), i2.add(s2);
          }
          else zt(e4, n3, t3), i2.add(e4);
        }), y.pop(), v = null, i2;
      }, this.compileAsync = function(t2, e3, n3 = null) {
        const i2 = this.compile(t2, e3, n3);
        return new Promise((e4) => {
          function n4() {
            i2.forEach(function(t3) {
              et2.get(t3).currentProgram.isReady() && i2.delete(t3);
            }), 0 !== i2.size ? setTimeout(n4, 10) : e4(t2);
          }
          null !== J2.get("KHR_parallel_shader_compile") ? n4() : setTimeout(n4, 10);
        });
      };
      let Ht = null;
      function Vt2() {
        Gt.stop();
      }
      function kt2() {
        Gt.start();
      }
      const Gt = new da();
      function Xt(t2, e3, n3, i2) {
        if (false === t2.visible) return;
        if (t2.layers.test(e3.layers)) {
          if (t2.isGroup) n3 = t2.renderOrder;
          else if (t2.isLOD) true === t2.autoUpdate && t2.update(e3);
          else if (t2.isLight) v.pushLight(t2), t2.castShadow && v.pushShadow(t2);
          else if (t2.isSprite) {
            if (!t2.frustumCulled || V2.intersectsSprite(t2)) {
              i2 && q.setFromMatrixPosition(t2.matrixWorld).applyMatrix4(X);
              const e4 = ot2.update(t2), r3 = t2.material;
              r3.visible && _.push(t2, e4, r3, n3, q.z, null);
            }
          } else if ((t2.isMesh || t2.isLine || t2.isPoints) && (!t2.frustumCulled || V2.intersectsObject(t2))) {
            const e4 = ot2.update(t2), r3 = t2.material;
            if (i2 && (void 0 !== t2.boundingSphere ? (null === t2.boundingSphere && t2.computeBoundingSphere(), q.copy(t2.boundingSphere.center)) : (null === e4.boundingSphere && e4.computeBoundingSphere(), q.copy(e4.boundingSphere.center)), q.applyMatrix4(t2.matrixWorld).applyMatrix4(X)), Array.isArray(r3)) {
              const i3 = e4.groups;
              for (let s2 = 0, a2 = i3.length; s2 < a2; s2++) {
                const a3 = i3[s2], o2 = r3[a3.materialIndex];
                o2 && o2.visible && _.push(t2, e4, o2, n3, q.z, a3);
              }
            } else r3.visible && _.push(t2, e4, r3, n3, q.z, null);
          }
        }
        const r2 = t2.children;
        for (let t3 = 0, s2 = r2.length; t3 < s2; t3++) Xt(r2[t3], e3, n3, i2);
      }
      function Yt2(t2, e3, n3, i2) {
        const r2 = t2.opaque, s2 = t2.transmissive, a2 = t2.transparent;
        v.setupLightsView(n3), true === k && dt2.setGlobalState(M3.clippingPlanes, n3), s2.length > 0 && function(t3, e4, n4, i3) {
          const r3 = true === n4.isScene ? n4.overrideMaterial : null;
          if (null !== r3) return;
          const s3 = K3.isWebGL2;
          null === W && (W = new wi(1, 1, { generateMipmaps: true, type: J2.has("EXT_color_buffer_half_float") ? Ut : wt, minFilter: Et, samples: s3 ? 4 : 0 }));
          M3.getDrawingBufferSize(j), s3 ? W.setSize(j.x, j.y) : W.setSize(Jn(j.x), Jn(j.y));
          const a3 = M3.getRenderTarget();
          M3.setRenderTarget(W), M3.getClearColor(L2), I = M3.getClearAlpha(), I < 1 && M3.setClearColor(16777215, 0.5);
          M3.clear();
          const o2 = M3.toneMapping;
          M3.toneMapping = $, Zt2(t3, n4, i3), nt2.updateMultisampleRenderTarget(W), nt2.updateRenderTargetMipmap(W);
          let l3 = false;
          for (let t4 = 0, r4 = e4.length; t4 < r4; t4++) {
            const r5 = e4[t4], s4 = r5.object, a4 = r5.geometry, o3 = r5.material, c7 = r5.group;
            if (2 === o3.side && s4.layers.test(i3.layers)) {
              const t5 = o3.side;
              o3.side = d, o3.needsUpdate = true, Jt2(s4, n4, i3, a4, o3, c7), o3.side = t5, o3.needsUpdate = true, l3 = true;
            }
          }
          true === l3 && (nt2.updateMultisampleRenderTarget(W), nt2.updateRenderTargetMipmap(W));
          M3.setRenderTarget(a3), M3.setClearColor(L2, I), M3.toneMapping = o2;
        }(r2, s2, e3, n3), i2 && Q2.viewport(R.copy(i2)), r2.length > 0 && Zt2(r2, e3, n3), s2.length > 0 && Zt2(s2, e3, n3), a2.length > 0 && Zt2(a2, e3, n3), Q2.buffers.depth.setTest(true), Q2.buffers.depth.setMask(true), Q2.buffers.color.setMask(true), Q2.setPolygonOffset(false);
      }
      function Zt2(t2, e3, n3) {
        const i2 = true === e3.isScene ? e3.overrideMaterial : null;
        for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
          const s3 = t2[r2], a2 = s3.object, o2 = s3.geometry, l3 = null === i2 ? s3.material : i2, c7 = s3.group;
          a2.layers.test(n3.layers) && Jt2(a2, e3, n3, o2, l3, c7);
        }
      }
      function Jt2(t2, e3, n3, i2, r2, s2) {
        t2.onBeforeRender(M3, e3, n3, i2, r2, s2), t2.modelViewMatrix.multiplyMatrices(n3.matrixWorldInverse, t2.matrixWorld), t2.normalMatrix.getNormalMatrix(t2.modelViewMatrix), r2.onBeforeRender(M3, e3, n3, i2, t2, s2), true === r2.transparent && 2 === r2.side && false === r2.forceSinglePass ? (r2.side = d, r2.needsUpdate = true, M3.renderBufferDirect(n3, e3, i2, r2, t2, s2), r2.side = u, r2.needsUpdate = true, M3.renderBufferDirect(n3, e3, i2, r2, t2, s2), r2.side = 2) : M3.renderBufferDirect(n3, e3, i2, r2, t2, s2), t2.onAfterRender(M3, e3, n3, i2, r2, s2);
      }
      function Kt2(t2, e3, n3) {
        true !== e3.isScene && (e3 = Y);
        const i2 = et2.get(t2), r2 = v.state.lights, s2 = v.state.shadowsArray, a2 = r2.state.version, o2 = lt2.getParameters(t2, r2.state, s2, e3, n3), l3 = lt2.getProgramCacheKey(o2);
        let c7 = i2.programs;
        i2.environment = t2.isMeshStandardMaterial ? e3.environment : null, i2.fog = e3.fog, i2.envMap = (t2.isMeshStandardMaterial ? rt2 : it2).get(t2.envMap || i2.environment), void 0 === c7 && (t2.addEventListener("dispose", Ft), c7 = /* @__PURE__ */ new Map(), i2.programs = c7);
        let h3 = c7.get(l3);
        if (void 0 !== h3) {
          if (i2.currentProgram === h3 && i2.lightsStateVersion === a2) return Qt2(t2, o2), h3;
        } else o2.uniforms = lt2.getUniforms(t2), t2.onBuild(n3, o2, M3), t2.onBeforeCompile(o2, M3), h3 = lt2.acquireProgram(o2, l3), c7.set(l3, h3), i2.uniforms = o2.uniforms;
        const u2 = i2.uniforms;
        return (t2.isShaderMaterial || t2.isRawShaderMaterial) && true !== t2.clipping || (u2.clippingPlanes = dt2.uniform), Qt2(t2, o2), i2.needsLights = function(t3) {
          return t3.isMeshLambertMaterial || t3.isMeshToonMaterial || t3.isMeshPhongMaterial || t3.isMeshStandardMaterial || t3.isShadowMaterial || t3.isShaderMaterial && true === t3.lights;
        }(t2), i2.lightsStateVersion = a2, i2.needsLights && (u2.ambientLightColor.value = r2.state.ambient, u2.lightProbe.value = r2.state.probe, u2.directionalLights.value = r2.state.directional, u2.directionalLightShadows.value = r2.state.directionalShadow, u2.spotLights.value = r2.state.spot, u2.spotLightShadows.value = r2.state.spotShadow, u2.rectAreaLights.value = r2.state.rectArea, u2.ltc_1.value = r2.state.rectAreaLTC1, u2.ltc_2.value = r2.state.rectAreaLTC2, u2.pointLights.value = r2.state.point, u2.pointLightShadows.value = r2.state.pointShadow, u2.hemisphereLights.value = r2.state.hemi, u2.directionalShadowMap.value = r2.state.directionalShadowMap, u2.directionalShadowMatrix.value = r2.state.directionalShadowMatrix, u2.spotShadowMap.value = r2.state.spotShadowMap, u2.spotLightMatrix.value = r2.state.spotLightMatrix, u2.spotLightMap.value = r2.state.spotLightMap, u2.pointShadowMap.value = r2.state.pointShadowMap, u2.pointShadowMatrix.value = r2.state.pointShadowMatrix), i2.currentProgram = h3, i2.uniformsList = null, h3;
      }
      function $t2(t2) {
        if (null === t2.uniformsList) {
          const e3 = t2.currentProgram.getUniforms();
          t2.uniformsList = il.seqWithValue(e3.seq, t2.uniforms);
        }
        return t2.uniformsList;
      }
      function Qt2(t2, e3) {
        const n3 = et2.get(t2);
        n3.outputColorSpace = e3.outputColorSpace, n3.batching = e3.batching, n3.instancing = e3.instancing, n3.instancingColor = e3.instancingColor, n3.skinning = e3.skinning, n3.morphTargets = e3.morphTargets, n3.morphNormals = e3.morphNormals, n3.morphColors = e3.morphColors, n3.morphTargetsCount = e3.morphTargetsCount, n3.numClippingPlanes = e3.numClippingPlanes, n3.numIntersection = e3.numClipIntersection, n3.vertexAlphas = e3.vertexAlphas, n3.vertexTangents = e3.vertexTangents, n3.toneMapping = e3.toneMapping;
      }
      Gt.setAnimationLoop(function(t2) {
        Ht && Ht(t2);
      }), "undefined" != typeof self && Gt.setContext(self), this.setAnimationLoop = function(t2) {
        Ht = t2, Tt.setAnimationLoop(t2), null === t2 ? Gt.stop() : Gt.start();
      }, Tt.addEventListener("sessionstart", Vt2), Tt.addEventListener("sessionend", kt2), this.render = function(t2, e3) {
        if (void 0 !== e3 && true !== e3.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === S) return;
        true === t2.matrixWorldAutoUpdate && t2.updateMatrixWorld(), null === e3.parent && true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), true === Tt.enabled && true === Tt.isPresenting && (true === Tt.cameraAutoUpdate && Tt.updateCamera(e3), e3 = Tt.getCamera()), true === t2.isScene && t2.onBeforeRender(M3, t2, e3, T), v = ut2.get(t2, y.length), v.init(), y.push(v), X.multiplyMatrices(e3.projectionMatrix, e3.matrixWorldInverse), V2.setFromProjectionMatrix(X), G = this.localClippingEnabled, k = dt2.init(this.clippingPlanes, G), _ = ht2.get(t2, x.length), _.init(), x.push(_), Xt(t2, e3, 0, M3.sortObjects), _.finish(), true === M3.sortObjects && _.sort(O, F), this.info.render.frame++, true === k && dt2.beginShadows();
        const n3 = v.state.shadowsArray;
        if (pt2.render(n3, t2, e3), true === k && dt2.endShadows(), true === this.info.autoReset && this.info.reset(), mt2.render(_, t2), v.setupLights(M3._useLegacyLights), e3.isArrayCamera) {
          const n4 = e3.cameras;
          for (let e4 = 0, i2 = n4.length; e4 < i2; e4++) {
            const i3 = n4[e4];
            Yt2(_, t2, i3, i3.viewport);
          }
        } else Yt2(_, t2, e3);
        null !== T && (nt2.updateMultisampleRenderTarget(T), nt2.updateRenderTargetMipmap(T)), true === t2.isScene && t2.onAfterRender(M3, t2, e3), xt2.resetDefaultState(), w = -1, A = null, y.pop(), v = y.length > 0 ? y[y.length - 1] : null, x.pop(), _ = x.length > 0 ? x[x.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return b;
      }, this.getActiveMipmapLevel = function() {
        return E;
      }, this.getRenderTarget = function() {
        return T;
      }, this.setRenderTargetTextures = function(t2, e3, n3) {
        et2.get(t2.texture).__webglTexture = e3, et2.get(t2.depthTexture).__webglTexture = n3;
        const i2 = et2.get(t2);
        i2.__hasExternalTextures = true, i2.__hasExternalTextures && (i2.__autoAllocateDepthBuffer = void 0 === n3, i2.__autoAllocateDepthBuffer || true === J2.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i2.__useRenderToTexture = false));
      }, this.setRenderTargetFramebuffer = function(t2, e3) {
        const n3 = et2.get(t2);
        n3.__webglFramebuffer = e3, n3.__useDefaultFramebuffer = void 0 === e3;
      }, this.setRenderTarget = function(t2, e3 = 0, n3 = 0) {
        T = t2, b = e3, E = n3;
        let i2 = true, r2 = null, s2 = false, a2 = false;
        if (t2) {
          const o2 = et2.get(t2);
          void 0 !== o2.__useDefaultFramebuffer ? (Q2.bindFramebuffer(Mt2.FRAMEBUFFER, null), i2 = false) : void 0 === o2.__webglFramebuffer ? nt2.setupRenderTarget(t2) : o2.__hasExternalTextures && nt2.rebindTextures(t2, et2.get(t2.texture).__webglTexture, et2.get(t2.depthTexture).__webglTexture);
          const l3 = t2.texture;
          (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (a2 = true);
          const c7 = et2.get(t2).__webglFramebuffer;
          t2.isWebGLCubeRenderTarget ? (r2 = Array.isArray(c7[e3]) ? c7[e3][n3] : c7[e3], s2 = true) : r2 = K3.isWebGL2 && t2.samples > 0 && false === nt2.useMultisampledRTT(t2) ? et2.get(t2).__webglMultisampledFramebuffer : Array.isArray(c7) ? c7[n3] : c7, R.copy(t2.viewport), C.copy(t2.scissor), P2 = t2.scissorTest;
        } else R.copy(B).multiplyScalar(D).floor(), C.copy(z).multiplyScalar(D).floor(), P2 = H;
        if (Q2.bindFramebuffer(Mt2.FRAMEBUFFER, r2) && K3.drawBuffers && i2 && Q2.drawBuffers(t2, r2), Q2.viewport(R), Q2.scissor(C), Q2.setScissorTest(P2), s2) {
          const i3 = et2.get(t2.texture);
          Mt2.framebufferTexture2D(Mt2.FRAMEBUFFER, Mt2.COLOR_ATTACHMENT0, Mt2.TEXTURE_CUBE_MAP_POSITIVE_X + e3, i3.__webglTexture, n3);
        } else if (a2) {
          const i3 = et2.get(t2.texture), r3 = e3 || 0;
          Mt2.framebufferTextureLayer(Mt2.FRAMEBUFFER, Mt2.COLOR_ATTACHMENT0, i3.__webglTexture, n3 || 0, r3);
        }
        w = -1;
      }, this.readRenderTargetPixels = function(t2, e3, n3, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = et2.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          Q2.bindFramebuffer(Mt2.FRAMEBUFFER, o2);
          try {
            const a3 = t2.texture, o3 = a3.format, l3 = a3.type;
            if (o3 !== Bt && vt.convert(o3) !== Mt2.getParameter(Mt2.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            const c7 = l3 === Ut && (J2.has("EXT_color_buffer_half_float") || K3.isWebGL2 && J2.has("EXT_color_buffer_float"));
            if (!(l3 === wt || vt.convert(l3) === Mt2.getParameter(Mt2.IMPLEMENTATION_COLOR_READ_TYPE) || l3 === It && (K3.isWebGL2 || J2.has("OES_texture_float") || J2.has("WEBGL_color_buffer_float")) || c7)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            e3 >= 0 && e3 <= t2.width - i2 && n3 >= 0 && n3 <= t2.height - r2 && Mt2.readPixels(e3, n3, i2, r2, vt.convert(o3), vt.convert(l3), s2);
          } finally {
            const t3 = null !== T ? et2.get(T).__webglFramebuffer : null;
            Q2.bindFramebuffer(Mt2.FRAMEBUFFER, t3);
          }
        }
      }, this.copyFramebufferToTexture = function(t2, e3, n3 = 0) {
        const i2 = Math.pow(2, -n3), r2 = Math.floor(e3.image.width * i2), s2 = Math.floor(e3.image.height * i2);
        nt2.setTexture2D(e3, 0), Mt2.copyTexSubImage2D(Mt2.TEXTURE_2D, n3, 0, 0, t2.x, t2.y, r2, s2), Q2.unbindTexture();
      }, this.copyTextureToTexture = function(t2, e3, n3, i2 = 0) {
        const r2 = e3.image.width, s2 = e3.image.height, a2 = vt.convert(n3.format), o2 = vt.convert(n3.type);
        nt2.setTexture2D(n3, 0), Mt2.pixelStorei(Mt2.UNPACK_FLIP_Y_WEBGL, n3.flipY), Mt2.pixelStorei(Mt2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), Mt2.pixelStorei(Mt2.UNPACK_ALIGNMENT, n3.unpackAlignment), e3.isDataTexture ? Mt2.texSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, r2, s2, a2, o2, e3.image.data) : e3.isCompressedTexture ? Mt2.compressedTexSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, e3.mipmaps[0].width, e3.mipmaps[0].height, a2, e3.mipmaps[0].data) : Mt2.texSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, a2, o2, e3.image), 0 === i2 && n3.generateMipmaps && Mt2.generateMipmap(Mt2.TEXTURE_2D), Q2.unbindTexture();
      }, this.copyTextureToTexture3D = function(t2, e3, n3, i2, r2 = 0) {
        if (M3.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const s2 = t2.max.x - t2.min.x + 1, a2 = t2.max.y - t2.min.y + 1, o2 = t2.max.z - t2.min.z + 1, l3 = vt.convert(i2.format), c7 = vt.convert(i2.type);
        let h3;
        if (i2.isData3DTexture) nt2.setTexture3D(i2, 0), h3 = Mt2.TEXTURE_3D;
        else {
          if (!i2.isDataArrayTexture && !i2.isCompressedArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
          nt2.setTexture2DArray(i2, 0), h3 = Mt2.TEXTURE_2D_ARRAY;
        }
        Mt2.pixelStorei(Mt2.UNPACK_FLIP_Y_WEBGL, i2.flipY), Mt2.pixelStorei(Mt2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i2.premultiplyAlpha), Mt2.pixelStorei(Mt2.UNPACK_ALIGNMENT, i2.unpackAlignment);
        const u2 = Mt2.getParameter(Mt2.UNPACK_ROW_LENGTH), d2 = Mt2.getParameter(Mt2.UNPACK_IMAGE_HEIGHT), p3 = Mt2.getParameter(Mt2.UNPACK_SKIP_PIXELS), m2 = Mt2.getParameter(Mt2.UNPACK_SKIP_ROWS), f2 = Mt2.getParameter(Mt2.UNPACK_SKIP_IMAGES), g2 = n3.isCompressedTexture ? n3.mipmaps[r2] : n3.image;
        Mt2.pixelStorei(Mt2.UNPACK_ROW_LENGTH, g2.width), Mt2.pixelStorei(Mt2.UNPACK_IMAGE_HEIGHT, g2.height), Mt2.pixelStorei(Mt2.UNPACK_SKIP_PIXELS, t2.min.x), Mt2.pixelStorei(Mt2.UNPACK_SKIP_ROWS, t2.min.y), Mt2.pixelStorei(Mt2.UNPACK_SKIP_IMAGES, t2.min.z), n3.isDataTexture || n3.isData3DTexture ? Mt2.texSubImage3D(h3, r2, e3.x, e3.y, e3.z, s2, a2, o2, l3, c7, g2.data) : n3.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Mt2.compressedTexSubImage3D(h3, r2, e3.x, e3.y, e3.z, s2, a2, o2, l3, g2.data)) : Mt2.texSubImage3D(h3, r2, e3.x, e3.y, e3.z, s2, a2, o2, l3, c7, g2), Mt2.pixelStorei(Mt2.UNPACK_ROW_LENGTH, u2), Mt2.pixelStorei(Mt2.UNPACK_IMAGE_HEIGHT, d2), Mt2.pixelStorei(Mt2.UNPACK_SKIP_PIXELS, p3), Mt2.pixelStorei(Mt2.UNPACK_SKIP_ROWS, m2), Mt2.pixelStorei(Mt2.UNPACK_SKIP_IMAGES, f2), 0 === r2 && i2.generateMipmaps && Mt2.generateMipmap(h3), Q2.unbindTexture();
      }, this.initTexture = function(t2) {
        t2.isCubeTexture ? nt2.setTextureCube(t2, 0) : t2.isData3DTexture ? nt2.setTexture3D(t2, 0) : t2.isDataArrayTexture || t2.isCompressedArrayTexture ? nt2.setTexture2DArray(t2, 0) : nt2.setTexture2D(t2, 0), Q2.unbindTexture();
      }, this.resetState = function() {
        b = 0, E = 0, T = null, Q2.reset(), xt2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Bn;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t2) {
      this._outputColorSpace = t2;
      const e2 = this.getContext();
      e2.drawingBufferColorSpace = t2 === Ze ? "display-p3" : "srgb", e2.unpackColorSpace = mi.workingColorSpace === Je ? "display-p3" : "srgb";
    }
    get outputEncoding() {
      return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === qe ? Ve : He;
    }
    set outputEncoding(t2) {
      console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t2 === Ve ? qe : Ye;
    }
    get useLegacyLights() {
      return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
    }
    set useLegacyLights(t2) {
      console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t2;
    }
  };
  var Kl = class extends Jl {
  };
  Kl.prototype.isWebGL1Renderer = true;
  var tc = class extends Nr {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e2) {
      return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2;
    }
  };
  var ec = class {
    constructor(t2, e2) {
      this.isInterleavedBuffer = true, this.array = t2, this.stride = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.usage = wn, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = Xn();
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    get updateRange() {
      return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.array = new t2.array.constructor(t2.array), this.count = t2.count, this.stride = t2.stride, this.usage = t2.usage, this;
    }
    copyAt(t2, e2, n2) {
      t2 *= this.stride, n2 *= e2.stride;
      for (let i = 0, r = this.stride; i < r; i++) this.array[t2 + i] = e2.array[n2 + i];
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    clone(t2) {
      void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Xn()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const e2 = new this.array.constructor(t2.arrayBuffers[this.array.buffer._uuid]), n2 = new this.constructor(e2, this.stride);
      return n2.setUsage(this.usage), n2;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    toJSON(t2) {
      return void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Xn()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
    }
  };
  var nc = new Ui();
  var ic = class _ic {
    constructor(t2, e2, n2, i = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = t2, this.itemSize = e2, this.offset = n2, this.normalized = i;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(t2) {
      this.data.needsUpdate = t2;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, n2 = this.data.count; e2 < n2; e2++) nc.fromBufferAttribute(this, e2), nc.applyMatrix4(t2), this.setXYZ(e2, nc.x, nc.y, nc.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, n2 = this.count; e2 < n2; e2++) nc.fromBufferAttribute(this, e2), nc.applyNormalMatrix(t2), this.setXYZ(e2, nc.x, nc.y, nc.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, n2 = this.count; e2 < n2; e2++) nc.fromBufferAttribute(this, e2), nc.transformDirection(t2), this.setXYZ(e2, nc.x, nc.y, nc.z);
      return this;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset] = e2, this;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 1] = e2, this;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 2] = e2, this;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = $n(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 3] = e2, this;
    }
    getX(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    getY(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 1];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    getZ(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 2];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    getW(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 3];
      return this.normalized && (e2 = Kn(e2, this.array)), e2;
    }
    setXY(t2, e2, n2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = n2, this;
    }
    setXYZ(t2, e2, n2, i) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array), i = $n(i, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = n2, this.data.array[t2 + 2] = i, this;
    }
    setXYZW(t2, e2, n2, i, r) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = $n(e2, this.array), n2 = $n(n2, this.array), i = $n(i, this.array), r = $n(r, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = n2, this.data.array[t2 + 2] = i, this.data.array[t2 + 3] = r, this;
    }
    clone(t2) {
      if (void 0 === t2) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const n2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[n2 + e3]);
        }
        return new cs(new this.array.constructor(t3), this.itemSize, this.normalized);
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new _ic(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(t2) {
      if (void 0 === t2) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const n2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[n2 + e3]);
        }
        return { itemSize: this.itemSize, type: this.array.constructor.name, array: t3, normalized: this.normalized };
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.toJSON(t2)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
    }
  };
  var rc = class extends ts {
    constructor(t2) {
      super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Kr(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.rotation = t2.rotation, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
    }
  };
  var sc;
  var ac = new Ui();
  var oc = new Ui();
  var lc = new Ui();
  var cc = new ti();
  var hc = new ti();
  var uc = new cr();
  var dc = new Ui();
  var pc = new Ui();
  var mc = new Ui();
  var fc = new ti();
  var gc = new ti();
  var _c = new ti();
  var vc = class extends Nr {
    constructor(t2 = new rc()) {
      if (super(), this.isSprite = true, this.type = "Sprite", void 0 === sc) {
        sc = new As();
        const t3 = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), e2 = new ec(t3, 5);
        sc.setIndex([0, 1, 2, 0, 2, 3]), sc.setAttribute("position", new ic(e2, 3, 0, false)), sc.setAttribute("uv", new ic(e2, 2, 3, false));
      }
      this.geometry = sc, this.material = t2, this.center = new ti(0.5, 0.5);
    }
    raycast(t2, e2) {
      null === t2.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), oc.setFromMatrixScale(this.matrixWorld), uc.copy(t2.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t2.camera.matrixWorldInverse, this.matrixWorld), lc.setFromMatrixPosition(this.modelViewMatrix), t2.camera.isPerspectiveCamera && false === this.material.sizeAttenuation && oc.multiplyScalar(-lc.z);
      const n2 = this.material.rotation;
      let i, r;
      0 !== n2 && (r = Math.cos(n2), i = Math.sin(n2));
      const s = this.center;
      xc(dc.set(-0.5, -0.5, 0), lc, s, oc, i, r), xc(pc.set(0.5, -0.5, 0), lc, s, oc, i, r), xc(mc.set(0.5, 0.5, 0), lc, s, oc, i, r), fc.set(0, 0), gc.set(1, 0), _c.set(1, 1);
      let a = t2.ray.intersectTriangle(dc, pc, mc, false, ac);
      if (null === a && (xc(pc.set(-0.5, 0.5, 0), lc, s, oc, i, r), gc.set(0, 1), a = t2.ray.intersectTriangle(dc, mc, pc, false, ac), null === a)) return;
      const o = t2.ray.origin.distanceTo(ac);
      o < t2.near || o > t2.far || e2.push({ distance: o, point: ac.clone(), uv: jr.getInterpolation(ac, dc, pc, mc, fc, gc, _c, new ti()), face: null, object: this });
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.center && this.center.copy(t2.center), this.material = t2.material, this;
    }
  };
  function xc(t2, e2, n2, i, r, s) {
    cc.subVectors(t2, n2).addScalar(0.5).multiply(i), void 0 !== r ? (hc.x = s * cc.x - r * cc.y, hc.y = r * cc.x + s * cc.y) : hc.copy(cc), t2.copy(e2), t2.x += hc.x, t2.y += hc.y, t2.applyMatrix4(uc);
  }
  var yc = new Ui();
  var Mc = new Ui();
  var bc = new Ui();
  var Ec = new Ei();
  var Tc = new Ei();
  var wc = new Ui();
  var Ac = new cr();
  var Rc = new Ui();
  var Cc = new tr();
  var Pc = new cr();
  var Lc = new lr();
  var Dc = new cr();
  var Oc = new cr();
  var zc = new cr();
  var Hc = new cr();
  var kc = new Oi();
  var Gc = new cr();
  var Wc = new Xs();
  var Xc = new tr();
  var Zc = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e2) {
      const n2 = this.pool, i = this.list;
      this.index >= n2.length && n2.push({ start: -1, count: -1, z: -1 });
      const r = n2[this.index];
      i.push(r), this.index++, r.start = t2.start, r.count = t2.count, r.z = e2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var Kc = new cr();
  var $c = new cr();
  var Qc = new cr();
  var th = new cr();
  var eh = new ua();
  var nh = new Oi();
  var ih = new tr();
  var rh = new Ui();
  var sh = new Zc();
  var ah = new Xs();
  var hh = class extends ts {
    constructor(t2) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Kr(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
    }
  };
  var uh = new Ui();
  var dh = new Ui();
  var ph = new cr();
  var mh = new lr();
  var fh = new tr();
  var gh = class extends Nr {
    constructor(t2 = new As(), e2 = new hh()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e2, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, n2 = [0];
        for (let t3 = 1, i = e2.count; t3 < i; t3++) uh.fromBufferAttribute(e2, t3 - 1), dh.fromBufferAttribute(e2, t3), n2[t3] = n2[t3 - 1], n2[t3] += uh.distanceTo(dh);
        t2.setAttribute("lineDistance", new vs(n2, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t2, e2) {
      const n2 = this.geometry, i = this.matrixWorld, r = t2.params.Line.threshold, s = n2.drawRange;
      if (null === n2.boundingSphere && n2.computeBoundingSphere(), fh.copy(n2.boundingSphere), fh.applyMatrix4(i), fh.radius += r, false === t2.ray.intersectsSphere(fh)) return;
      ph.copy(i).invert(), mh.copy(t2.ray).applyMatrix4(ph);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l2 = new Ui(), c6 = new Ui(), h2 = new Ui(), u2 = new Ui(), d2 = this.isLineSegments ? 2 : 1, p2 = n2.index, m = n2.attributes.position;
      if (null !== p2) {
        for (let n3 = Math.max(0, s.start), i2 = Math.min(p2.count, s.start + s.count) - 1; n3 < i2; n3 += d2) {
          const i3 = p2.getX(n3), r2 = p2.getX(n3 + 1);
          l2.fromBufferAttribute(m, i3), c6.fromBufferAttribute(m, r2);
          if (mh.distanceSqToSegment(l2, c6, u2, h2) > o) continue;
          u2.applyMatrix4(this.matrixWorld);
          const s2 = t2.ray.origin.distanceTo(u2);
          s2 < t2.near || s2 > t2.far || e2.push({ distance: s2, point: h2.clone().applyMatrix4(this.matrixWorld), index: n3, face: null, faceIndex: null, object: this });
        }
      } else {
        for (let n3 = Math.max(0, s.start), i2 = Math.min(m.count, s.start + s.count) - 1; n3 < i2; n3 += d2) {
          l2.fromBufferAttribute(m, n3), c6.fromBufferAttribute(m, n3 + 1);
          if (mh.distanceSqToSegment(l2, c6, u2, h2) > o) continue;
          u2.applyMatrix4(this.matrixWorld);
          const i3 = t2.ray.origin.distanceTo(u2);
          i3 < t2.near || i3 > t2.far || e2.push({ distance: i3, point: h2.clone().applyMatrix4(this.matrixWorld), index: n3, face: null, faceIndex: null, object: this });
        }
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const n2 = t2[e2[0]];
        if (void 0 !== n2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
            const e4 = n2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
  };
  var _h = new Ui();
  var vh = new Ui();
  var xh = class extends gh {
    constructor(t2, e2) {
      super(t2, e2), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, n2 = [];
        for (let t3 = 0, i = e2.count; t3 < i; t3 += 2) _h.fromBufferAttribute(e2, t3), vh.fromBufferAttribute(e2, t3 + 1), n2[t3] = 0 === t3 ? 0 : n2[t3 - 1], n2[t3 + 1] = n2[t3] + _h.distanceTo(vh);
        t2.setAttribute("lineDistance", new vs(n2, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  };
  var Sh = new cr();
  var bh = new lr();
  var Eh = new tr();
  var Th = new Ui();
  var Uh = class extends bi {
    constructor(t2, e2, n2, i, r, s, a, o, l2) {
      super(t2, e2, n2, i, r, s, a, o, l2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var Nh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(t2, e2) {
      const n2 = this.getUtoTmapping(t2);
      return this.getPoint(n2, e2);
    }
    getPoints(t2 = 5) {
      const e2 = [];
      for (let n2 = 0; n2 <= t2; n2++) e2.push(this.getPoint(n2 / t2));
      return e2;
    }
    getSpacedPoints(t2 = 5) {
      const e2 = [];
      for (let n2 = 0; n2 <= t2; n2++) e2.push(this.getPointAt(n2 / t2));
      return e2;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e2 = [];
      let n2, i = this.getPoint(0), r = 0;
      e2.push(0);
      for (let s = 1; s <= t2; s++) n2 = this.getPoint(s / t2), r += n2.distanceTo(i), e2.push(r), i = n2;
      return this.cacheArcLengths = e2, e2;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e2) {
      const n2 = this.getLengths();
      let i = 0;
      const r = n2.length;
      let s;
      s = e2 || t2 * n2[r - 1];
      let a, o = 0, l2 = r - 1;
      for (; o <= l2; ) if (i = Math.floor(o + (l2 - o) / 2), a = n2[i] - s, a < 0) o = i + 1;
      else {
        if (!(a > 0)) {
          l2 = i;
          break;
        }
        l2 = i - 1;
      }
      if (i = l2, n2[i] === s) return i / (r - 1);
      const c6 = n2[i];
      return (i + (s - c6) / (n2[i + 1] - c6)) / (r - 1);
    }
    getTangent(t2, e2) {
      const n2 = 1e-4;
      let i = t2 - n2, r = t2 + n2;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i), a = this.getPoint(r), o = e2 || (s.isVector2 ? new ti() : new Ui());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(t2, e2) {
      const n2 = this.getUtoTmapping(t2);
      return this.getTangent(n2, e2);
    }
    computeFrenetFrames(t2, e2) {
      const n2 = new Ui(), i = [], r = [], s = [], a = new Ui(), o = new cr();
      for (let e3 = 0; e3 <= t2; e3++) {
        const n3 = e3 / t2;
        i[e3] = this.getTangentAt(n3, new Ui());
      }
      r[0] = new Ui(), s[0] = new Ui();
      let l2 = Number.MAX_VALUE;
      const c6 = Math.abs(i[0].x), h2 = Math.abs(i[0].y), u2 = Math.abs(i[0].z);
      c6 <= l2 && (l2 = c6, n2.set(1, 0, 0)), h2 <= l2 && (l2 = h2, n2.set(0, 1, 0)), u2 <= l2 && n2.set(0, 0, 1), a.crossVectors(i[0], n2).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
      for (let e3 = 1; e3 <= t2; e3++) {
        if (r[e3] = r[e3 - 1].clone(), s[e3] = s[e3 - 1].clone(), a.crossVectors(i[e3 - 1], i[e3]), a.length() > Number.EPSILON) {
          a.normalize();
          const t3 = Math.acos(jn(i[e3 - 1].dot(i[e3]), -1, 1));
          r[e3].applyMatrix4(o.makeRotationAxis(a, t3));
        }
        s[e3].crossVectors(i[e3], r[e3]);
      }
      if (true === e2) {
        let e3 = Math.acos(jn(r[0].dot(r[t2]), -1, 1));
        e3 /= t2, i[0].dot(a.crossVectors(r[0], r[t2])) > 0 && (e3 = -e3);
        for (let n3 = 1; n3 <= t2; n3++) r[n3].applyMatrix4(o.makeRotationAxis(i[n3], e3 * n3)), s[n3].crossVectors(i[n3], r[n3]);
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
  var Dh = class extends Nh {
    constructor(t2 = 0, e2 = 0, n2 = 1, i = 1, r = 0, s = 2 * Math.PI, a = false, o = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = n2, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
    }
    getPoint(t2, e2) {
      const n2 = e2 || new ti(), i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), true !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const a = this.aStartAngle + t2 * r;
      let o = this.aX + this.xRadius * Math.cos(a), l2 = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), n3 = o - this.aX, i2 = l2 - this.aY;
        o = n3 * t3 - i2 * e3 + this.aX, l2 = n3 * e3 + i2 * t3 + this.aY;
      }
      return n2.set(o, l2);
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
  var Oh = class extends Dh {
    constructor(t2, e2, n2, i, r, s) {
      super(t2, e2, n2, n2, i, r, s), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Fh() {
    let t2 = 0, e2 = 0, n2 = 0, i = 0;
    function r(r2, s, a, o) {
      t2 = r2, e2 = a, n2 = -3 * r2 + 3 * s - 2 * a - o, i = 2 * r2 - 2 * s + a + o;
    }
    return { initCatmullRom: function(t3, e3, n3, i2, s) {
      r(e3, n3, s * (n3 - t3), s * (i2 - e3));
    }, initNonuniformCatmullRom: function(t3, e3, n3, i2, s, a, o) {
      let l2 = (e3 - t3) / s - (n3 - t3) / (s + a) + (n3 - e3) / a, c6 = (n3 - e3) / a - (i2 - e3) / (a + o) + (i2 - n3) / o;
      l2 *= a, c6 *= a, r(e3, n3, l2, c6);
    }, calc: function(r2) {
      const s = r2 * r2;
      return t2 + e2 * r2 + n2 * s + i * (s * r2);
    } };
  }
  var Bh = new Ui();
  var zh = new Fh();
  var Hh = new Fh();
  var Vh = new Fh();
  var kh = class extends Nh {
    constructor(t2 = [], e2 = false, n2 = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = n2, this.tension = i;
    }
    getPoint(t2, e2 = new Ui()) {
      const n2 = e2, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t2;
      let a, o, l2 = Math.floor(s), c6 = s - l2;
      this.closed ? l2 += l2 > 0 ? 0 : (Math.floor(Math.abs(l2) / r) + 1) * r : 0 === c6 && l2 === r - 1 && (l2 = r - 2, c6 = 1), this.closed || l2 > 0 ? a = i[(l2 - 1) % r] : (Bh.subVectors(i[0], i[1]).add(i[0]), a = Bh);
      const h2 = i[l2 % r], u2 = i[(l2 + 1) % r];
      if (this.closed || l2 + 2 < r ? o = i[(l2 + 2) % r] : (Bh.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Bh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e3 = Math.pow(a.distanceToSquared(h2), t3), n3 = Math.pow(h2.distanceToSquared(u2), t3), i2 = Math.pow(u2.distanceToSquared(o), t3);
        n3 < 1e-4 && (n3 = 1), e3 < 1e-4 && (e3 = n3), i2 < 1e-4 && (i2 = n3), zh.initNonuniformCatmullRom(a.x, h2.x, u2.x, o.x, e3, n3, i2), Hh.initNonuniformCatmullRom(a.y, h2.y, u2.y, o.y, e3, n3, i2), Vh.initNonuniformCatmullRom(a.z, h2.z, u2.z, o.z, e3, n3, i2);
      } else "catmullrom" === this.curveType && (zh.initCatmullRom(a.x, h2.x, u2.x, o.x, this.tension), Hh.initCatmullRom(a.y, h2.y, u2.y, o.y, this.tension), Vh.initCatmullRom(a.z, h2.z, u2.z, o.z, this.tension));
      return n2.set(zh.calc(c6), Hh.calc(c6), Vh.calc(c6)), n2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, n2 = t2.points.length; e2 < n2; e2++) {
        const n3 = t2.points[e2];
        this.points.push(n3.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, n2 = this.points.length; e2 < n2; e2++) {
        const n3 = this.points[e2];
        t2.points.push(n3.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, n2 = t2.points.length; e2 < n2; e2++) {
        const n3 = t2.points[e2];
        this.points.push(new Ui().fromArray(n3));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Gh(t2, e2, n2, i, r) {
    const s = 0.5 * (i - e2), a = 0.5 * (r - n2), o = t2 * t2;
    return (2 * n2 - 2 * i + s + a) * (t2 * o) + (-3 * n2 + 3 * i - 2 * s - a) * o + s * t2 + n2;
  }
  function Wh(t2, e2, n2, i) {
    return function(t3, e3) {
      const n3 = 1 - t3;
      return n3 * n3 * e3;
    }(t2, e2) + function(t3, e3) {
      return 2 * (1 - t3) * t3 * e3;
    }(t2, n2) + function(t3, e3) {
      return t3 * t3 * e3;
    }(t2, i);
  }
  function Xh(t2, e2, n2, i, r) {
    return function(t3, e3) {
      const n3 = 1 - t3;
      return n3 * n3 * n3 * e3;
    }(t2, e2) + function(t3, e3) {
      const n3 = 1 - t3;
      return 3 * n3 * n3 * t3 * e3;
    }(t2, n2) + function(t3, e3) {
      return 3 * (1 - t3) * t3 * t3 * e3;
    }(t2, i) + function(t3, e3) {
      return t3 * t3 * t3 * e3;
    }(t2, r);
  }
  var jh = class extends Nh {
    constructor(t2 = new ti(), e2 = new ti(), n2 = new ti(), i = new ti()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = n2, this.v3 = i;
    }
    getPoint(t2, e2 = new ti()) {
      const n2 = e2, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n2.set(Xh(t2, i.x, r.x, s.x, a.x), Xh(t2, i.y, r.y, s.y, a.y)), n2;
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
  var qh = class extends Nh {
    constructor(t2 = new Ui(), e2 = new Ui(), n2 = new Ui(), i = new Ui()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = n2, this.v3 = i;
    }
    getPoint(t2, e2 = new Ui()) {
      const n2 = e2, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n2.set(Xh(t2, i.x, r.x, s.x, a.x), Xh(t2, i.y, r.y, s.y, a.y), Xh(t2, i.z, r.z, s.z, a.z)), n2;
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
  var Yh = class extends Nh {
    constructor(t2 = new ti(), e2 = new ti()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new ti()) {
      const n2 = e2;
      return 1 === t2 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(t2).add(this.v1)), n2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new ti()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
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
  var Zh = class extends Nh {
    constructor(t2 = new Ui(), e2 = new Ui()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new Ui()) {
      const n2 = e2;
      return 1 === t2 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(t2).add(this.v1)), n2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new Ui()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
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
  var Jh = class extends Nh {
    constructor(t2 = new ti(), e2 = new ti(), n2 = new ti()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = n2;
    }
    getPoint(t2, e2 = new ti()) {
      const n2 = e2, i = this.v0, r = this.v1, s = this.v2;
      return n2.set(Wh(t2, i.x, r.x, s.x), Wh(t2, i.y, r.y, s.y)), n2;
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
  var Kh = class extends Nh {
    constructor(t2 = new Ui(), e2 = new Ui(), n2 = new Ui()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = n2;
    }
    getPoint(t2, e2 = new Ui()) {
      const n2 = e2, i = this.v0, r = this.v1, s = this.v2;
      return n2.set(Wh(t2, i.x, r.x, s.x), Wh(t2, i.y, r.y, s.y), Wh(t2, i.z, r.z, s.z)), n2;
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
  var $h = class extends Nh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e2 = new ti()) {
      const n2 = e2, i = this.points, r = (i.length - 1) * t2, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l2 = i[s], c6 = i[s > i.length - 2 ? i.length - 1 : s + 1], h2 = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n2.set(Gh(a, o.x, l2.x, c6.x, h2.x), Gh(a, o.y, l2.y, c6.y, h2.y)), n2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, n2 = t2.points.length; e2 < n2; e2++) {
        const n3 = t2.points[e2];
        this.points.push(n3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, n2 = this.points.length; e2 < n2; e2++) {
        const n3 = this.points[e2];
        t2.points.push(n3.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, n2 = t2.points.length; e2 < n2; e2++) {
        const n3 = t2.points[e2];
        this.points.push(new ti().fromArray(n3));
      }
      return this;
    }
  };
  var Qh = Object.freeze({ __proto__: null, ArcCurve: Oh, CatmullRomCurve3: kh, CubicBezierCurve: jh, CubicBezierCurve3: qh, EllipseCurve: Dh, LineCurve: Yh, LineCurve3: Zh, QuadraticBezierCurve: Jh, QuadraticBezierCurve3: Kh, SplineCurve: $h });
  var tu = class extends Nh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e2)) {
        const n2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Qh[n2](e2, t2));
      }
      return this;
    }
    getPoint(t2, e2) {
      const n2 = t2 * this.getLength(), i = this.getCurveLengths();
      let r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n2) {
          const t3 = i[r] - n2, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t3 / a;
          return s.getPointAt(o, e2);
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
      let e2 = 0;
      for (let n2 = 0, i = this.curves.length; n2 < i; n2++) e2 += this.curves[n2].getLength(), t2.push(e2);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e2 = [];
      for (let n2 = 0; n2 <= t2; n2++) e2.push(this.getPoint(n2 / t2));
      return this.autoClose && e2.push(e2[0]), e2;
    }
    getPoints(t2 = 12) {
      const e2 = [];
      let n2;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i], a = s.isEllipseCurve ? 2 * t2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t2 * s.points.length : t2, o = s.getPoints(a);
        for (let t3 = 0; t3 < o.length; t3++) {
          const i2 = o[t3];
          n2 && n2.equals(i2) || (e2.push(i2), n2 = i2);
        }
      }
      return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e2 = 0, n2 = t2.curves.length; e2 < n2; e2++) {
        const n3 = t2.curves[e2];
        this.curves.push(n3.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e2 = 0, n2 = this.curves.length; e2 < n2; e2++) {
        const n3 = this.curves[e2];
        t2.curves.push(n3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e2 = 0, n2 = t2.curves.length; e2 < n2; e2++) {
        const n3 = t2.curves[e2];
        this.curves.push(new Qh[n3.type]().fromJSON(n3));
      }
      return this;
    }
  };
  var eu = class extends tu {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new ti(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e2 = 1, n2 = t2.length; e2 < n2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
      return this;
    }
    moveTo(t2, e2) {
      return this.currentPoint.set(t2, e2), this;
    }
    lineTo(t2, e2) {
      const n2 = new Yh(this.currentPoint.clone(), new ti(t2, e2));
      return this.curves.push(n2), this.currentPoint.set(t2, e2), this;
    }
    quadraticCurveTo(t2, e2, n2, i) {
      const r = new Jh(this.currentPoint.clone(), new ti(t2, e2), new ti(n2, i));
      return this.curves.push(r), this.currentPoint.set(n2, i), this;
    }
    bezierCurveTo(t2, e2, n2, i, r, s) {
      const a = new jh(this.currentPoint.clone(), new ti(t2, e2), new ti(n2, i), new ti(r, s));
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(t2) {
      const e2 = [this.currentPoint.clone()].concat(t2), n2 = new $h(e2);
      return this.curves.push(n2), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e2, n2, i, r, s) {
      const a = this.currentPoint.x, o = this.currentPoint.y;
      return this.absarc(t2 + a, e2 + o, n2, i, r, s), this;
    }
    absarc(t2, e2, n2, i, r, s) {
      return this.absellipse(t2, e2, n2, n2, i, r, s), this;
    }
    ellipse(t2, e2, n2, i, r, s, a, o) {
      const l2 = this.currentPoint.x, c6 = this.currentPoint.y;
      return this.absellipse(t2 + l2, e2 + c6, n2, i, r, s, a, o), this;
    }
    absellipse(t2, e2, n2, i, r, s, a, o) {
      const l2 = new Dh(t2, e2, n2, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t3 = l2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(l2);
      const c6 = l2.getPoint(1);
      return this.currentPoint.copy(c6), this;
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
  var nu = class _nu extends As {
    constructor(t2 = [new ti(0, -0.5), new ti(0.5, 0), new ti(0, 0.5)], e2 = 12, n2 = 0, i = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: n2, phiLength: i }, e2 = Math.floor(e2), i = jn(i, 0, 2 * Math.PI);
      const r = [], s = [], a = [], o = [], l2 = [], c6 = 1 / e2, h2 = new Ui(), u2 = new ti(), d2 = new Ui(), p2 = new Ui(), m = new Ui();
      let f = 0, g = 0;
      for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
        case 0:
          f = t2[e3 + 1].x - t2[e3].x, g = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, m.copy(d2), d2.normalize(), o.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          f = t2[e3 + 1].x - t2[e3].x, g = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, p2.copy(d2), d2.x += m.x, d2.y += m.y, d2.z += m.z, d2.normalize(), o.push(d2.x, d2.y, d2.z), m.copy(p2);
      }
      for (let r2 = 0; r2 <= e2; r2++) {
        const d3 = n2 + r2 * c6 * i, p3 = Math.sin(d3), m2 = Math.cos(d3);
        for (let n3 = 0; n3 <= t2.length - 1; n3++) {
          h2.x = t2[n3].x * p3, h2.y = t2[n3].y, h2.z = t2[n3].x * m2, s.push(h2.x, h2.y, h2.z), u2.x = r2 / e2, u2.y = n3 / (t2.length - 1), a.push(u2.x, u2.y);
          const i2 = o[3 * n3 + 0] * p3, c7 = o[3 * n3 + 1], d4 = o[3 * n3 + 0] * m2;
          l2.push(i2, c7, d4);
        }
      }
      for (let n3 = 0; n3 < e2; n3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
        const i2 = e3 + n3 * t2.length, s2 = i2, a2 = i2 + t2.length, o2 = i2 + t2.length + 1, l3 = i2 + 1;
        r.push(s2, a2, l3), r.push(o2, l3, a2);
      }
      this.setIndex(r), this.setAttribute("position", new vs(s, 3)), this.setAttribute("uv", new vs(a, 2)), this.setAttribute("normal", new vs(l2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _nu(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var iu = class _iu extends nu {
    constructor(t2 = 1, e2 = 1, n2 = 4, i = 8) {
      const r = new eu();
      r.absarc(0, -e2 / 2, t2, 1.5 * Math.PI, 0), r.absarc(0, e2 / 2, t2, 0, 0.5 * Math.PI), super(r.getPoints(n2), i), this.type = "CapsuleGeometry", this.parameters = { radius: t2, length: e2, capSegments: n2, radialSegments: i };
    }
    static fromJSON(t2) {
      return new _iu(t2.radius, t2.length, t2.capSegments, t2.radialSegments);
    }
  };
  var ru = class _ru extends As {
    constructor(t2 = 1, e2 = 32, n2 = 0, i = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: n2, thetaLength: i }, e2 = Math.max(3, e2);
      const r = [], s = [], a = [], o = [], l2 = new Ui(), c6 = new ti();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
      for (let r2 = 0, h2 = 3; r2 <= e2; r2++, h2 += 3) {
        const u2 = n2 + r2 / e2 * i;
        l2.x = t2 * Math.cos(u2), l2.y = t2 * Math.sin(u2), s.push(l2.x, l2.y, l2.z), a.push(0, 0, 1), c6.x = (s[h2] / t2 + 1) / 2, c6.y = (s[h2 + 1] / t2 + 1) / 2, o.push(c6.x, c6.y);
      }
      for (let t3 = 1; t3 <= e2; t3++) r.push(t3, t3 + 1, 0);
      this.setIndex(r), this.setAttribute("position", new vs(s, 3)), this.setAttribute("normal", new vs(a, 3)), this.setAttribute("uv", new vs(o, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ru(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var su = class _su extends As {
    constructor(t2 = 1, e2 = 1, n2 = 1, i = 32, r = 1, s = false, a = 0, o = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: n2, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o };
      const l2 = this;
      i = Math.floor(i), r = Math.floor(r);
      const c6 = [], h2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m = [], f = n2 / 2;
      let g = 0;
      function _(n3) {
        const r2 = p2, s2 = new ti(), m2 = new Ui();
        let _2 = 0;
        const v = true === n3 ? t2 : e2, x = true === n3 ? 1 : -1;
        for (let t3 = 1; t3 <= i; t3++) h2.push(0, f * x, 0), u2.push(0, x, 0), d2.push(0.5, 0.5), p2++;
        const y = p2;
        for (let t3 = 0; t3 <= i; t3++) {
          const e3 = t3 / i * o + a, n4 = Math.cos(e3), r3 = Math.sin(e3);
          m2.x = v * r3, m2.y = f * x, m2.z = v * n4, h2.push(m2.x, m2.y, m2.z), u2.push(0, x, 0), s2.x = 0.5 * n4 + 0.5, s2.y = 0.5 * r3 * x + 0.5, d2.push(s2.x, s2.y), p2++;
        }
        for (let t3 = 0; t3 < i; t3++) {
          const e3 = r2 + t3, i2 = y + t3;
          true === n3 ? c6.push(i2, i2 + 1, e3) : c6.push(i2 + 1, i2, e3), _2 += 3;
        }
        l2.addGroup(g, _2, true === n3 ? 1 : 2), g += _2;
      }
      !function() {
        const s2 = new Ui(), _2 = new Ui();
        let v = 0;
        const x = (e2 - t2) / n2;
        for (let l3 = 0; l3 <= r; l3++) {
          const c7 = [], g2 = l3 / r, v2 = g2 * (e2 - t2) + t2;
          for (let t3 = 0; t3 <= i; t3++) {
            const e3 = t3 / i, r2 = e3 * o + a, l4 = Math.sin(r2), m2 = Math.cos(r2);
            _2.x = v2 * l4, _2.y = -g2 * n2 + f, _2.z = v2 * m2, h2.push(_2.x, _2.y, _2.z), s2.set(l4, x, m2).normalize(), u2.push(s2.x, s2.y, s2.z), d2.push(e3, 1 - g2), c7.push(p2++);
          }
          m.push(c7);
        }
        for (let t3 = 0; t3 < i; t3++) for (let e3 = 0; e3 < r; e3++) {
          const n3 = m[e3][t3], i2 = m[e3 + 1][t3], r2 = m[e3 + 1][t3 + 1], s3 = m[e3][t3 + 1];
          c6.push(n3, i2, s3), c6.push(i2, r2, s3), v += 6;
        }
        l2.addGroup(g, v, 0), g += v;
      }(), false === s && (t2 > 0 && _(true), e2 > 0 && _(false)), this.setIndex(c6), this.setAttribute("position", new vs(h2, 3)), this.setAttribute("normal", new vs(u2, 3)), this.setAttribute("uv", new vs(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _su(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var au = class _au extends su {
    constructor(t2 = 1, e2 = 1, n2 = 32, i = 1, r = false, s = 0, a = 2 * Math.PI) {
      super(0, t2, e2, n2, i, r, s, a), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: n2, heightSegments: i, openEnded: r, thetaStart: s, thetaLength: a };
    }
    static fromJSON(t2) {
      return new _au(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var ou = class _ou extends As {
    constructor(t2 = [], e2 = [], n2 = 1, i = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: n2, detail: i };
      const r = [], s = [];
      function a(t3, e3, n3, i2) {
        const r2 = i2 + 1, s2 = [];
        for (let i3 = 0; i3 <= r2; i3++) {
          s2[i3] = [];
          const a2 = t3.clone().lerp(n3, i3 / r2), o2 = e3.clone().lerp(n3, i3 / r2), l3 = r2 - i3;
          for (let t4 = 0; t4 <= l3; t4++) s2[i3][t4] = 0 === t4 && i3 === r2 ? a2 : a2.clone().lerp(o2, t4 / l3);
        }
        for (let t4 = 0; t4 < r2; t4++) for (let e4 = 0; e4 < 2 * (r2 - t4) - 1; e4++) {
          const n4 = Math.floor(e4 / 2);
          e4 % 2 == 0 ? (o(s2[t4][n4 + 1]), o(s2[t4 + 1][n4]), o(s2[t4][n4])) : (o(s2[t4][n4 + 1]), o(s2[t4 + 1][n4 + 1]), o(s2[t4 + 1][n4]));
        }
      }
      function o(t3) {
        r.push(t3.x, t3.y, t3.z);
      }
      function l2(e3, n3) {
        const i2 = 3 * e3;
        n3.x = t2[i2 + 0], n3.y = t2[i2 + 1], n3.z = t2[i2 + 2];
      }
      function c6(t3, e3, n3, i2) {
        i2 < 0 && 1 === t3.x && (s[e3] = t3.x - 1), 0 === n3.x && 0 === n3.z && (s[e3] = i2 / 2 / Math.PI + 0.5);
      }
      function h2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      !function(t3) {
        const n3 = new Ui(), i2 = new Ui(), r2 = new Ui();
        for (let s2 = 0; s2 < e2.length; s2 += 3) l2(e2[s2 + 0], n3), l2(e2[s2 + 1], i2), l2(e2[s2 + 2], r2), a(n3, i2, r2, t3);
      }(i), function(t3) {
        const e3 = new Ui();
        for (let n3 = 0; n3 < r.length; n3 += 3) e3.x = r[n3 + 0], e3.y = r[n3 + 1], e3.z = r[n3 + 2], e3.normalize().multiplyScalar(t3), r[n3 + 0] = e3.x, r[n3 + 1] = e3.y, r[n3 + 2] = e3.z;
      }(n2), function() {
        const t3 = new Ui();
        for (let n3 = 0; n3 < r.length; n3 += 3) {
          t3.x = r[n3 + 0], t3.y = r[n3 + 1], t3.z = r[n3 + 2];
          const i2 = h2(t3) / 2 / Math.PI + 0.5, a2 = (e3 = t3, Math.atan2(-e3.y, Math.sqrt(e3.x * e3.x + e3.z * e3.z)) / Math.PI + 0.5);
          s.push(i2, 1 - a2);
        }
        var e3;
        (function() {
          const t4 = new Ui(), e4 = new Ui(), n3 = new Ui(), i2 = new Ui(), a2 = new ti(), o2 = new ti(), l3 = new ti();
          for (let u2 = 0, d2 = 0; u2 < r.length; u2 += 9, d2 += 6) {
            t4.set(r[u2 + 0], r[u2 + 1], r[u2 + 2]), e4.set(r[u2 + 3], r[u2 + 4], r[u2 + 5]), n3.set(r[u2 + 6], r[u2 + 7], r[u2 + 8]), a2.set(s[d2 + 0], s[d2 + 1]), o2.set(s[d2 + 2], s[d2 + 3]), l3.set(s[d2 + 4], s[d2 + 5]), i2.copy(t4).add(e4).add(n3).divideScalar(3);
            const p2 = h2(i2);
            c6(a2, d2 + 0, t4, p2), c6(o2, d2 + 2, e4, p2), c6(l3, d2 + 4, n3, p2);
          }
        })(), function() {
          for (let t4 = 0; t4 < s.length; t4 += 6) {
            const e4 = s[t4 + 0], n3 = s[t4 + 2], i2 = s[t4 + 4], r2 = Math.max(e4, n3, i2), a2 = Math.min(e4, n3, i2);
            r2 > 0.9 && a2 < 0.1 && (e4 < 0.2 && (s[t4 + 0] += 1), n3 < 0.2 && (s[t4 + 2] += 1), i2 < 0.2 && (s[t4 + 4] += 1));
          }
        }();
      }(), this.setAttribute("position", new vs(r, 3)), this.setAttribute("normal", new vs(r.slice(), 3)), this.setAttribute("uv", new vs(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ou(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var lu = class _lu extends ou {
    constructor(t2 = 1, e2 = 0) {
      const n2 = (1 + Math.sqrt(5)) / 2, i = 1 / n2;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n2, 0, -i, n2, 0, i, -n2, 0, i, n2, -i, -n2, 0, -i, n2, 0, i, -n2, 0, i, n2, 0, -n2, 0, -i, n2, 0, -i, -n2, 0, i, n2, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _lu(t2.radius, t2.detail);
    }
  };
  var cu = new Ui();
  var hu = new Ui();
  var uu = new Ui();
  var du = new jr();
  var pu = class extends As {
    constructor(t2 = null, e2 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
        const n2 = 4, i = Math.pow(10, n2), r = Math.cos(Gn * e2), s = t2.getIndex(), a = t2.getAttribute("position"), o = s ? s.count : a.count, l2 = [0, 0, 0], c6 = ["a", "b", "c"], h2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o; t3 += 3) {
          s ? (l2[0] = s.getX(t3), l2[1] = s.getX(t3 + 1), l2[2] = s.getX(t3 + 2)) : (l2[0] = t3, l2[1] = t3 + 1, l2[2] = t3 + 2);
          const { a: e3, b: n3, c: o2 } = du;
          if (e3.fromBufferAttribute(a, l2[0]), n3.fromBufferAttribute(a, l2[1]), o2.fromBufferAttribute(a, l2[2]), du.getNormal(uu), h2[0] = `${Math.round(e3.x * i)},${Math.round(e3.y * i)},${Math.round(e3.z * i)}`, h2[1] = `${Math.round(n3.x * i)},${Math.round(n3.y * i)},${Math.round(n3.z * i)}`, h2[2] = `${Math.round(o2.x * i)},${Math.round(o2.y * i)},${Math.round(o2.z * i)}`, h2[0] !== h2[1] && h2[1] !== h2[2] && h2[2] !== h2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e4 = (t4 + 1) % 3, n4 = h2[t4], i2 = h2[e4], s2 = du[c6[t4]], a2 = du[c6[e4]], o3 = `${n4}_${i2}`, p2 = `${i2}_${n4}`;
            p2 in u2 && u2[p2] ? (uu.dot(u2[p2].normal) <= r && (d2.push(s2.x, s2.y, s2.z), d2.push(a2.x, a2.y, a2.z)), u2[p2] = null) : o3 in u2 || (u2[o3] = { index0: l2[t4], index1: l2[e4], normal: uu.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e3, index1: n3 } = u2[t3];
          cu.fromBufferAttribute(a, e3), hu.fromBufferAttribute(a, n3), d2.push(cu.x, cu.y, cu.z), d2.push(hu.x, hu.y, hu.z);
        }
        this.setAttribute("position", new vs(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var mu = class extends eu {
    constructor(t2) {
      super(t2), this.uuid = Xn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e2 = [];
      for (let n2 = 0, i = this.holes.length; n2 < i; n2++) e2[n2] = this.holes[n2].getPoints(t2);
      return e2;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e2 = 0, n2 = t2.holes.length; e2 < n2; e2++) {
        const n3 = t2.holes[e2];
        this.holes.push(n3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e2 = 0, n2 = this.holes.length; e2 < n2; e2++) {
        const n3 = this.holes[e2];
        t2.holes.push(n3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e2 = 0, n2 = t2.holes.length; e2 < n2; e2++) {
        const n3 = t2.holes[e2];
        this.holes.push(new eu().fromJSON(n3));
      }
      return this;
    }
  };
  var fu = function(t2, e2, n2 = 2) {
    const i = e2 && e2.length, r = i ? e2[0] * n2 : t2.length;
    let s = gu(t2, 0, r, n2, true);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l2, c6, h2, u2, d2, p2;
    if (i && (s = function(t3, e3, n3, i2) {
      const r2 = [];
      let s2, a2, o2, l3, c7;
      for (s2 = 0, a2 = e3.length; s2 < a2; s2++) o2 = e3[s2] * i2, l3 = s2 < a2 - 1 ? e3[s2 + 1] * i2 : t3.length, c7 = gu(t3, o2, l3, i2, false), c7 === c7.next && (c7.steiner = true), r2.push(Au(c7));
      for (r2.sort(bu), s2 = 0; s2 < r2.length; s2++) n3 = Eu(r2[s2], n3);
      return n3;
    }(t2, e2, s, n2)), t2.length > 80 * n2) {
      o = c6 = t2[0], l2 = h2 = t2[1];
      for (let e3 = n2; e3 < r; e3 += n2) u2 = t2[e3], d2 = t2[e3 + 1], u2 < o && (o = u2), d2 < l2 && (l2 = d2), u2 > c6 && (c6 = u2), d2 > h2 && (h2 = d2);
      p2 = Math.max(c6 - o, h2 - l2), p2 = 0 !== p2 ? 32767 / p2 : 0;
    }
    return vu(s, a, n2, o, l2, p2, 0), a;
  };
  function gu(t2, e2, n2, i, r) {
    let s, a;
    if (r === function(t3, e3, n3, i2) {
      let r2 = 0;
      for (let s2 = e3, a2 = n3 - i2; s2 < n3; s2 += i2) r2 += (t3[a2] - t3[s2]) * (t3[s2 + 1] + t3[a2 + 1]), a2 = s2;
      return r2;
    }(t2, e2, n2, i) > 0) for (s = e2; s < n2; s += i) a = Fu(s, t2[s], t2[s + 1], a);
    else for (s = n2 - i; s >= e2; s -= i) a = Fu(s, t2[s], t2[s + 1], a);
    return a && Lu(a, a.next) && (Bu(a), a = a.next), a;
  }
  function _u(t2, e2) {
    if (!t2) return t2;
    e2 || (e2 = t2);
    let n2, i = t2;
    do {
      if (n2 = false, i.steiner || !Lu(i, i.next) && 0 !== Pu(i.prev, i, i.next)) i = i.next;
      else {
        if (Bu(i), i = e2 = i.prev, i === i.next) break;
        n2 = true;
      }
    } while (n2 || i !== e2);
    return e2;
  }
  function vu(t2, e2, n2, i, r, s, a) {
    if (!t2) return;
    !a && s && function(t3, e3, n3, i2) {
      let r2 = t3;
      do {
        0 === r2.z && (r2.z = wu(r2.x, r2.y, e3, n3, i2)), r2.prevZ = r2.prev, r2.nextZ = r2.next, r2 = r2.next;
      } while (r2 !== t3);
      r2.prevZ.nextZ = null, r2.prevZ = null, function(t4) {
        let e4, n4, i3, r3, s2, a2, o2, l3, c7 = 1;
        do {
          for (n4 = t4, t4 = null, s2 = null, a2 = 0; n4; ) {
            for (a2++, i3 = n4, o2 = 0, e4 = 0; e4 < c7 && (o2++, i3 = i3.nextZ, i3); e4++) ;
            for (l3 = c7; o2 > 0 || l3 > 0 && i3; ) 0 !== o2 && (0 === l3 || !i3 || n4.z <= i3.z) ? (r3 = n4, n4 = n4.nextZ, o2--) : (r3 = i3, i3 = i3.nextZ, l3--), s2 ? s2.nextZ = r3 : t4 = r3, r3.prevZ = s2, s2 = r3;
            n4 = i3;
          }
          s2.nextZ = null, c7 *= 2;
        } while (a2 > 1);
      }(r2);
    }(t2, i, r, s);
    let o, l2, c6 = t2;
    for (; t2.prev !== t2.next; ) if (o = t2.prev, l2 = t2.next, s ? yu(t2, i, r, s) : xu(t2)) e2.push(o.i / n2 | 0), e2.push(t2.i / n2 | 0), e2.push(l2.i / n2 | 0), Bu(t2), t2 = l2.next, c6 = l2.next;
    else if ((t2 = l2) === c6) {
      a ? 1 === a ? vu(t2 = Mu(_u(t2), e2, n2), e2, n2, i, r, s, 2) : 2 === a && Su(t2, e2, n2, i, r, s) : vu(_u(t2), e2, n2, i, r, s, 1);
      break;
    }
  }
  function xu(t2) {
    const e2 = t2.prev, n2 = t2, i = t2.next;
    if (Pu(e2, n2, i) >= 0) return false;
    const r = e2.x, s = n2.x, a = i.x, o = e2.y, l2 = n2.y, c6 = i.y, h2 = r < s ? r < a ? r : a : s < a ? s : a, u2 = o < l2 ? o < c6 ? o : c6 : l2 < c6 ? l2 : c6, d2 = r > s ? r > a ? r : a : s > a ? s : a, p2 = o > l2 ? o > c6 ? o : c6 : l2 > c6 ? l2 : c6;
    let m = i.next;
    for (; m !== e2; ) {
      if (m.x >= h2 && m.x <= d2 && m.y >= u2 && m.y <= p2 && Ru(r, o, s, l2, a, c6, m.x, m.y) && Pu(m.prev, m, m.next) >= 0) return false;
      m = m.next;
    }
    return true;
  }
  function yu(t2, e2, n2, i) {
    const r = t2.prev, s = t2, a = t2.next;
    if (Pu(r, s, a) >= 0) return false;
    const o = r.x, l2 = s.x, c6 = a.x, h2 = r.y, u2 = s.y, d2 = a.y, p2 = o < l2 ? o < c6 ? o : c6 : l2 < c6 ? l2 : c6, m = h2 < u2 ? h2 < d2 ? h2 : d2 : u2 < d2 ? u2 : d2, f = o > l2 ? o > c6 ? o : c6 : l2 > c6 ? l2 : c6, g = h2 > u2 ? h2 > d2 ? h2 : d2 : u2 > d2 ? u2 : d2, _ = wu(p2, m, e2, n2, i), v = wu(f, g, e2, n2, i);
    let x = t2.prevZ, y = t2.nextZ;
    for (; x && x.z >= _ && y && y.z <= v; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Ru(o, h2, l2, u2, c6, d2, x.x, x.y) && Pu(x.prev, x, x.next) >= 0) return false;
      if (x = x.prevZ, y.x >= p2 && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && Ru(o, h2, l2, u2, c6, d2, y.x, y.y) && Pu(y.prev, y, y.next) >= 0) return false;
      y = y.nextZ;
    }
    for (; x && x.z >= _; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Ru(o, h2, l2, u2, c6, d2, x.x, x.y) && Pu(x.prev, x, x.next) >= 0) return false;
      x = x.prevZ;
    }
    for (; y && y.z <= v; ) {
      if (y.x >= p2 && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && Ru(o, h2, l2, u2, c6, d2, y.x, y.y) && Pu(y.prev, y, y.next) >= 0) return false;
      y = y.nextZ;
    }
    return true;
  }
  function Mu(t2, e2, n2) {
    let i = t2;
    do {
      const r = i.prev, s = i.next.next;
      !Lu(r, s) && Iu(r, i, i.next, s) && Du(r, s) && Du(s, r) && (e2.push(r.i / n2 | 0), e2.push(i.i / n2 | 0), e2.push(s.i / n2 | 0), Bu(i), Bu(i.next), i = t2 = s), i = i.next;
    } while (i !== t2);
    return _u(i);
  }
  function Su(t2, e2, n2, i, r, s) {
    let a = t2;
    do {
      let t3 = a.next.next;
      for (; t3 !== a.prev; ) {
        if (a.i !== t3.i && Cu(a, t3)) {
          let o = Ou(a, t3);
          return a = _u(a, a.next), o = _u(o, o.next), vu(a, e2, n2, i, r, s, 0), void vu(o, e2, n2, i, r, s, 0);
        }
        t3 = t3.next;
      }
      a = a.next;
    } while (a !== t2);
  }
  function bu(t2, e2) {
    return t2.x - e2.x;
  }
  function Eu(t2, e2) {
    const n2 = function(t3, e3) {
      let n3, i2 = e3, r = -1 / 0;
      const s = t3.x, a = t3.y;
      do {
        if (a <= i2.y && a >= i2.next.y && i2.next.y !== i2.y) {
          const t4 = i2.x + (a - i2.y) * (i2.next.x - i2.x) / (i2.next.y - i2.y);
          if (t4 <= s && t4 > r && (r = t4, n3 = i2.x < i2.next.x ? i2 : i2.next, t4 === s)) return n3;
        }
        i2 = i2.next;
      } while (i2 !== e3);
      if (!n3) return null;
      const o = n3, l2 = n3.x, c6 = n3.y;
      let h2, u2 = 1 / 0;
      i2 = n3;
      do {
        s >= i2.x && i2.x >= l2 && s !== i2.x && Ru(a < c6 ? s : r, a, l2, c6, a < c6 ? r : s, a, i2.x, i2.y) && (h2 = Math.abs(a - i2.y) / (s - i2.x), Du(i2, t3) && (h2 < u2 || h2 === u2 && (i2.x > n3.x || i2.x === n3.x && Tu(n3, i2))) && (n3 = i2, u2 = h2)), i2 = i2.next;
      } while (i2 !== o);
      return n3;
    }(t2, e2);
    if (!n2) return e2;
    const i = Ou(n2, t2);
    return _u(i, i.next), _u(n2, n2.next);
  }
  function Tu(t2, e2) {
    return Pu(t2.prev, t2, e2.prev) < 0 && Pu(e2.next, t2, t2.next) < 0;
  }
  function wu(t2, e2, n2, i, r) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - n2) * r | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - i) * r | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
  }
  function Au(t2) {
    let e2 = t2, n2 = t2;
    do {
      (e2.x < n2.x || e2.x === n2.x && e2.y < n2.y) && (n2 = e2), e2 = e2.next;
    } while (e2 !== t2);
    return n2;
  }
  function Ru(t2, e2, n2, i, r, s, a, o) {
    return (r - a) * (e2 - o) >= (t2 - a) * (s - o) && (t2 - a) * (i - o) >= (n2 - a) * (e2 - o) && (n2 - a) * (s - o) >= (r - a) * (i - o);
  }
  function Cu(t2, e2) {
    return t2.next.i !== e2.i && t2.prev.i !== e2.i && !function(t3, e3) {
      let n2 = t3;
      do {
        if (n2.i !== t3.i && n2.next.i !== t3.i && n2.i !== e3.i && n2.next.i !== e3.i && Iu(n2, n2.next, t3, e3)) return true;
        n2 = n2.next;
      } while (n2 !== t3);
      return false;
    }(t2, e2) && (Du(t2, e2) && Du(e2, t2) && function(t3, e3) {
      let n2 = t3, i = false;
      const r = (t3.x + e3.x) / 2, s = (t3.y + e3.y) / 2;
      do {
        n2.y > s != n2.next.y > s && n2.next.y !== n2.y && r < (n2.next.x - n2.x) * (s - n2.y) / (n2.next.y - n2.y) + n2.x && (i = !i), n2 = n2.next;
      } while (n2 !== t3);
      return i;
    }(t2, e2) && (Pu(t2.prev, t2, e2.prev) || Pu(t2, e2.prev, e2)) || Lu(t2, e2) && Pu(t2.prev, t2, t2.next) > 0 && Pu(e2.prev, e2, e2.next) > 0);
  }
  function Pu(t2, e2, n2) {
    return (e2.y - t2.y) * (n2.x - e2.x) - (e2.x - t2.x) * (n2.y - e2.y);
  }
  function Lu(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y;
  }
  function Iu(t2, e2, n2, i) {
    const r = Nu(Pu(t2, e2, n2)), s = Nu(Pu(t2, e2, i)), a = Nu(Pu(n2, i, t2)), o = Nu(Pu(n2, i, e2));
    return r !== s && a !== o || (!(0 !== r || !Uu(t2, n2, e2)) || (!(0 !== s || !Uu(t2, i, e2)) || (!(0 !== a || !Uu(n2, t2, i)) || !(0 !== o || !Uu(n2, e2, i)))));
  }
  function Uu(t2, e2, n2) {
    return e2.x <= Math.max(t2.x, n2.x) && e2.x >= Math.min(t2.x, n2.x) && e2.y <= Math.max(t2.y, n2.y) && e2.y >= Math.min(t2.y, n2.y);
  }
  function Nu(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function Du(t2, e2) {
    return Pu(t2.prev, t2, t2.next) < 0 ? Pu(t2, e2, t2.next) >= 0 && Pu(t2, t2.prev, e2) >= 0 : Pu(t2, e2, t2.prev) < 0 || Pu(t2, t2.next, e2) < 0;
  }
  function Ou(t2, e2) {
    const n2 = new zu(t2.i, t2.x, t2.y), i = new zu(e2.i, e2.x, e2.y), r = t2.next, s = e2.prev;
    return t2.next = e2, e2.prev = t2, n2.next = r, r.prev = n2, i.next = n2, n2.prev = i, s.next = i, i.prev = s, i;
  }
  function Fu(t2, e2, n2, i) {
    const r = new zu(t2, e2, n2);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }
  function Bu(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function zu(t2, e2, n2) {
    this.i = t2, this.x = e2, this.y = n2, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  var Hu = class _Hu {
    static area(t2) {
      const e2 = t2.length;
      let n2 = 0;
      for (let i = e2 - 1, r = 0; r < e2; i = r++) n2 += t2[i].x * t2[r].y - t2[r].x * t2[i].y;
      return 0.5 * n2;
    }
    static isClockWise(t2) {
      return _Hu.area(t2) < 0;
    }
    static triangulateShape(t2, e2) {
      const n2 = [], i = [], r = [];
      Vu(t2), ku(n2, t2);
      let s = t2.length;
      e2.forEach(Vu);
      for (let t3 = 0; t3 < e2.length; t3++) i.push(s), s += e2[t3].length, ku(n2, e2[t3]);
      const a = fu(n2, i);
      for (let t3 = 0; t3 < a.length; t3 += 3) r.push(a.slice(t3, t3 + 3));
      return r;
    }
  };
  function Vu(t2) {
    const e2 = t2.length;
    e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
  }
  function ku(t2, e2) {
    for (let n2 = 0; n2 < e2.length; n2++) t2.push(e2[n2].x), t2.push(e2[n2].y);
  }
  var Gu = class _Gu extends As {
    constructor(t2 = new mu([new ti(0.5, 0.5), new ti(-0.5, 0.5), new ti(-0.5, -0.5), new ti(0.5, -0.5)]), e2 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
      const n2 = this, i = [], r = [];
      for (let e3 = 0, n3 = t2.length; e3 < n3; e3++) {
        s(t2[e3]);
      }
      function s(t3) {
        const s2 = [], a = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o = void 0 !== e2.steps ? e2.steps : 1, l2 = void 0 !== e2.depth ? e2.depth : 1;
        let c6 = void 0 === e2.bevelEnabled || e2.bevelEnabled, h2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : h2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
        const m = e2.extrudePath, f = void 0 !== e2.UVGenerator ? e2.UVGenerator : Wu;
        let g, _, v, x, y, M3 = false;
        m && (g = m.getSpacedPoints(o), M3 = true, c6 = false, _ = m.computeFrenetFrames(o, false), v = new Ui(), x = new Ui(), y = new Ui()), c6 || (p2 = 0, h2 = 0, u2 = 0, d2 = 0);
        const S = t3.extractPoints(a);
        let b = S.shape;
        const E = S.holes;
        if (!Hu.isClockWise(b)) {
          b = b.reverse();
          for (let t4 = 0, e3 = E.length; t4 < e3; t4++) {
            const e4 = E[t4];
            Hu.isClockWise(e4) && (E[t4] = e4.reverse());
          }
        }
        const T = Hu.triangulateShape(b, E), w = b;
        for (let t4 = 0, e3 = E.length; t4 < e3; t4++) {
          const e4 = E[t4];
          b = b.concat(e4);
        }
        function A(t4, e3, n3) {
          return e3 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, n3);
        }
        const R = b.length, C = T.length;
        function P2(t4, e3, n3) {
          let i2, r2, s3;
          const a2 = t4.x - e3.x, o2 = t4.y - e3.y, l3 = n3.x - t4.x, c7 = n3.y - t4.y, h3 = a2 * a2 + o2 * o2, u3 = a2 * c7 - o2 * l3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(h3), d3 = Math.sqrt(l3 * l3 + c7 * c7), p3 = e3.x - o2 / u4, m2 = e3.y + a2 / u4, f2 = ((n3.x - c7 / d3 - p3) * c7 - (n3.y + l3 / d3 - m2) * l3) / (a2 * c7 - o2 * l3);
            i2 = p3 + a2 * f2 - t4.x, r2 = m2 + o2 * f2 - t4.y;
            const g2 = i2 * i2 + r2 * r2;
            if (g2 <= 2) return new ti(i2, r2);
            s3 = Math.sqrt(g2 / 2);
          } else {
            let t5 = false;
            a2 > Number.EPSILON ? l3 > Number.EPSILON && (t5 = true) : a2 < -Number.EPSILON ? l3 < -Number.EPSILON && (t5 = true) : Math.sign(o2) === Math.sign(c7) && (t5 = true), t5 ? (i2 = -o2, r2 = a2, s3 = Math.sqrt(h3)) : (i2 = a2, r2 = o2, s3 = Math.sqrt(h3 / 2));
          }
          return new ti(i2 / s3, r2 / s3);
        }
        const L2 = [];
        for (let t4 = 0, e3 = w.length, n3 = e3 - 1, i2 = t4 + 1; t4 < e3; t4++, n3++, i2++) n3 === e3 && (n3 = 0), i2 === e3 && (i2 = 0), L2[t4] = P2(w[t4], w[n3], w[i2]);
        const I = [];
        let U, N = L2.concat();
        for (let t4 = 0, e3 = E.length; t4 < e3; t4++) {
          const e4 = E[t4];
          U = [];
          for (let t5 = 0, n3 = e4.length, i2 = n3 - 1, r2 = t5 + 1; t5 < n3; t5++, i2++, r2++) i2 === n3 && (i2 = 0), r2 === n3 && (r2 = 0), U[t5] = P2(e4[t5], e4[i2], e4[r2]);
          I.push(U), N = N.concat(U);
        }
        for (let t4 = 0; t4 < p2; t4++) {
          const e3 = t4 / p2, n3 = h2 * Math.cos(e3 * Math.PI / 2), i2 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = w.length; t5 < e4; t5++) {
            const e5 = A(w[t5], L2[t5], i2);
            F(e5.x, e5.y, -n3);
          }
          for (let t5 = 0, e4 = E.length; t5 < e4; t5++) {
            const e5 = E[t5];
            U = I[t5];
            for (let t6 = 0, r2 = e5.length; t6 < r2; t6++) {
              const r3 = A(e5[t6], U[t6], i2);
              F(r3.x, r3.y, -n3);
            }
          }
        }
        const D = u2 + d2;
        for (let t4 = 0; t4 < R; t4++) {
          const e3 = c6 ? A(b[t4], N[t4], D) : b[t4];
          M3 ? (x.copy(_.normals[0]).multiplyScalar(e3.x), v.copy(_.binormals[0]).multiplyScalar(e3.y), y.copy(g[0]).add(x).add(v), F(y.x, y.y, y.z)) : F(e3.x, e3.y, 0);
        }
        for (let t4 = 1; t4 <= o; t4++) for (let e3 = 0; e3 < R; e3++) {
          const n3 = c6 ? A(b[e3], N[e3], D) : b[e3];
          M3 ? (x.copy(_.normals[t4]).multiplyScalar(n3.x), v.copy(_.binormals[t4]).multiplyScalar(n3.y), y.copy(g[t4]).add(x).add(v), F(y.x, y.y, y.z)) : F(n3.x, n3.y, l2 / o * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e3 = t4 / p2, n3 = h2 * Math.cos(e3 * Math.PI / 2), i2 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = w.length; t5 < e4; t5++) {
            const e5 = A(w[t5], L2[t5], i2);
            F(e5.x, e5.y, l2 + n3);
          }
          for (let t5 = 0, e4 = E.length; t5 < e4; t5++) {
            const e5 = E[t5];
            U = I[t5];
            for (let t6 = 0, r2 = e5.length; t6 < r2; t6++) {
              const r3 = A(e5[t6], U[t6], i2);
              M3 ? F(r3.x, r3.y + g[o - 1].y, g[o - 1].x + n3) : F(r3.x, r3.y, l2 + n3);
            }
          }
        }
        function O(t4, e3) {
          let n3 = t4.length;
          for (; --n3 >= 0; ) {
            const i2 = n3;
            let r2 = n3 - 1;
            r2 < 0 && (r2 = t4.length - 1);
            for (let t5 = 0, n4 = o + 2 * p2; t5 < n4; t5++) {
              const n5 = R * t5, s3 = R * (t5 + 1);
              z(e3 + i2 + n5, e3 + r2 + n5, e3 + r2 + s3, e3 + i2 + s3);
            }
          }
        }
        function F(t4, e3, n3) {
          s2.push(t4), s2.push(e3), s2.push(n3);
        }
        function B(t4, e3, r2) {
          H(t4), H(e3), H(r2);
          const s3 = i.length / 3, a2 = f.generateTopUV(n2, i, s3 - 3, s3 - 2, s3 - 1);
          V2(a2[0]), V2(a2[1]), V2(a2[2]);
        }
        function z(t4, e3, r2, s3) {
          H(t4), H(e3), H(s3), H(e3), H(r2), H(s3);
          const a2 = i.length / 3, o2 = f.generateSideWallUV(n2, i, a2 - 6, a2 - 3, a2 - 2, a2 - 1);
          V2(o2[0]), V2(o2[1]), V2(o2[3]), V2(o2[1]), V2(o2[2]), V2(o2[3]);
        }
        function H(t4) {
          i.push(s2[3 * t4 + 0]), i.push(s2[3 * t4 + 1]), i.push(s2[3 * t4 + 2]);
        }
        function V2(t4) {
          r.push(t4.x), r.push(t4.y);
        }
        !function() {
          const t4 = i.length / 3;
          if (c6) {
            let t5 = 0, e3 = R * t5;
            for (let t6 = 0; t6 < C; t6++) {
              const n3 = T[t6];
              B(n3[2] + e3, n3[1] + e3, n3[0] + e3);
            }
            t5 = o + 2 * p2, e3 = R * t5;
            for (let t6 = 0; t6 < C; t6++) {
              const n3 = T[t6];
              B(n3[0] + e3, n3[1] + e3, n3[2] + e3);
            }
          } else {
            for (let t5 = 0; t5 < C; t5++) {
              const e3 = T[t5];
              B(e3[2], e3[1], e3[0]);
            }
            for (let t5 = 0; t5 < C; t5++) {
              const e3 = T[t5];
              B(e3[0] + R * o, e3[1] + R * o, e3[2] + R * o);
            }
          }
          n2.addGroup(t4, i.length / 3 - t4, 0);
        }(), function() {
          const t4 = i.length / 3;
          let e3 = 0;
          O(w, e3), e3 += w.length;
          for (let t5 = 0, n3 = E.length; t5 < n3; t5++) {
            const n4 = E[t5];
            O(n4, e3), e3 += n4.length;
          }
          n2.addGroup(t4, i.length / 3 - t4, 1);
        }();
      }
      this.setAttribute("position", new vs(i, 3)), this.setAttribute("uv", new vs(r, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2, n2) {
        if (n2.shapes = [], Array.isArray(t3)) for (let e3 = 0, i = t3.length; e3 < i; e3++) {
          const i2 = t3[e3];
          n2.shapes.push(i2.uuid);
        }
        else n2.shapes.push(t3.uuid);
        n2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (n2.options.extrudePath = e2.extrudePath.toJSON());
        return n2;
      }(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e2) {
      const n2 = [];
      for (let i2 = 0, r = t2.shapes.length; i2 < r; i2++) {
        const r2 = e2[t2.shapes[i2]];
        n2.push(r2);
      }
      const i = t2.options.extrudePath;
      return void 0 !== i && (t2.options.extrudePath = new Qh[i.type]().fromJSON(i)), new _Gu(n2, t2.options);
    }
  };
  var Wu = { generateTopUV: function(t2, e2, n2, i, r) {
    const s = e2[3 * n2], a = e2[3 * n2 + 1], o = e2[3 * i], l2 = e2[3 * i + 1], c6 = e2[3 * r], h2 = e2[3 * r + 1];
    return [new ti(s, a), new ti(o, l2), new ti(c6, h2)];
  }, generateSideWallUV: function(t2, e2, n2, i, r, s) {
    const a = e2[3 * n2], o = e2[3 * n2 + 1], l2 = e2[3 * n2 + 2], c6 = e2[3 * i], h2 = e2[3 * i + 1], u2 = e2[3 * i + 2], d2 = e2[3 * r], p2 = e2[3 * r + 1], m = e2[3 * r + 2], f = e2[3 * s], g = e2[3 * s + 1], _ = e2[3 * s + 2];
    return Math.abs(o - h2) < Math.abs(a - c6) ? [new ti(a, 1 - l2), new ti(c6, 1 - u2), new ti(d2, 1 - m), new ti(f, 1 - _)] : [new ti(o, 1 - l2), new ti(h2, 1 - u2), new ti(p2, 1 - m), new ti(g, 1 - _)];
  } };
  var Xu = class _Xu extends ou {
    constructor(t2 = 1, e2 = 0) {
      const n2 = (1 + Math.sqrt(5)) / 2;
      super([-1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, 0, 0, -1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, n2, 0, -1, n2, 0, 1, -n2, 0, -1, -n2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Xu(t2.radius, t2.detail);
    }
  };
  var ju = class _ju extends ou {
    constructor(t2 = 1, e2 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _ju(t2.radius, t2.detail);
    }
  };
  var qu = class _qu extends As {
    constructor(t2 = 0.5, e2 = 1, n2 = 32, i = 1, r = 0, s = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: n2, phiSegments: i, thetaStart: r, thetaLength: s }, n2 = Math.max(3, n2);
      const a = [], o = [], l2 = [], c6 = [];
      let h2 = t2;
      const u2 = (e2 - t2) / (i = Math.max(1, i)), d2 = new Ui(), p2 = new ti();
      for (let t3 = 0; t3 <= i; t3++) {
        for (let t4 = 0; t4 <= n2; t4++) {
          const i2 = r + t4 / n2 * s;
          d2.x = h2 * Math.cos(i2), d2.y = h2 * Math.sin(i2), o.push(d2.x, d2.y, d2.z), l2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, c6.push(p2.x, p2.y);
        }
        h2 += u2;
      }
      for (let t3 = 0; t3 < i; t3++) {
        const e3 = t3 * (n2 + 1);
        for (let t4 = 0; t4 < n2; t4++) {
          const i2 = t4 + e3, r2 = i2, s2 = i2 + n2 + 1, o2 = i2 + n2 + 2, l3 = i2 + 1;
          a.push(r2, s2, l3), a.push(s2, o2, l3);
        }
      }
      this.setIndex(a), this.setAttribute("position", new vs(o, 3)), this.setAttribute("normal", new vs(l2, 3)), this.setAttribute("uv", new vs(c6, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _qu(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Yu = class _Yu extends As {
    constructor(t2 = new mu([new ti(0, 0.5), new ti(-0.5, -0.5), new ti(0.5, -0.5)]), e2 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
      const n2 = [], i = [], r = [], s = [];
      let a = 0, o = 0;
      if (false === Array.isArray(t2)) l2(t2);
      else for (let e3 = 0; e3 < t2.length; e3++) l2(t2[e3]), this.addGroup(a, o, e3), a += o, o = 0;
      function l2(t3) {
        const a2 = i.length / 3, l3 = t3.extractPoints(e2);
        let c6 = l3.shape;
        const h2 = l3.holes;
        false === Hu.isClockWise(c6) && (c6 = c6.reverse());
        for (let t4 = 0, e3 = h2.length; t4 < e3; t4++) {
          const e4 = h2[t4];
          true === Hu.isClockWise(e4) && (h2[t4] = e4.reverse());
        }
        const u2 = Hu.triangulateShape(c6, h2);
        for (let t4 = 0, e3 = h2.length; t4 < e3; t4++) {
          const e4 = h2[t4];
          c6 = c6.concat(e4);
        }
        for (let t4 = 0, e3 = c6.length; t4 < e3; t4++) {
          const e4 = c6[t4];
          i.push(e4.x, e4.y, 0), r.push(0, 0, 1), s.push(e4.x, e4.y);
        }
        for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
          const e4 = u2[t4], i2 = e4[0] + a2, r2 = e4[1] + a2, s2 = e4[2] + a2;
          n2.push(i2, r2, s2), o += 3;
        }
      }
      this.setIndex(n2), this.setAttribute("position", new vs(i, 3)), this.setAttribute("normal", new vs(r, 3)), this.setAttribute("uv", new vs(s, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2) {
        if (e2.shapes = [], Array.isArray(t3)) for (let n2 = 0, i = t3.length; n2 < i; n2++) {
          const i2 = t3[n2];
          e2.shapes.push(i2.uuid);
        }
        else e2.shapes.push(t3.uuid);
        return e2;
      }(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e2) {
      const n2 = [];
      for (let i = 0, r = t2.shapes.length; i < r; i++) {
        const r2 = e2[t2.shapes[i]];
        n2.push(r2);
      }
      return new _Yu(n2, t2.curveSegments);
    }
  };
  var Zu = class _Zu extends As {
    constructor(t2 = 1, e2 = 32, n2 = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: n2, phiStart: i, phiLength: r, thetaStart: s, thetaLength: a }, e2 = Math.max(3, Math.floor(e2)), n2 = Math.max(2, Math.floor(n2));
      const o = Math.min(s + a, Math.PI);
      let l2 = 0;
      const c6 = [], h2 = new Ui(), u2 = new Ui(), d2 = [], p2 = [], m = [], f = [];
      for (let d3 = 0; d3 <= n2; d3++) {
        const g = [], _ = d3 / n2;
        let v = 0;
        0 === d3 && 0 === s ? v = 0.5 / e2 : d3 === n2 && o === Math.PI && (v = -0.5 / e2);
        for (let n3 = 0; n3 <= e2; n3++) {
          const o2 = n3 / e2;
          h2.x = -t2 * Math.cos(i + o2 * r) * Math.sin(s + _ * a), h2.y = t2 * Math.cos(s + _ * a), h2.z = t2 * Math.sin(i + o2 * r) * Math.sin(s + _ * a), p2.push(h2.x, h2.y, h2.z), u2.copy(h2).normalize(), m.push(u2.x, u2.y, u2.z), f.push(o2 + v, 1 - _), g.push(l2++);
        }
        c6.push(g);
      }
      for (let t3 = 0; t3 < n2; t3++) for (let i2 = 0; i2 < e2; i2++) {
        const e3 = c6[t3][i2 + 1], r2 = c6[t3][i2], a2 = c6[t3 + 1][i2], l3 = c6[t3 + 1][i2 + 1];
        (0 !== t3 || s > 0) && d2.push(e3, r2, l3), (t3 !== n2 - 1 || o < Math.PI) && d2.push(r2, a2, l3);
      }
      this.setIndex(d2), this.setAttribute("position", new vs(p2, 3)), this.setAttribute("normal", new vs(m, 3)), this.setAttribute("uv", new vs(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Zu(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var Ju = class _Ju extends ou {
    constructor(t2 = 1, e2 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Ju(t2.radius, t2.detail);
    }
  };
  var Ku = class _Ku extends As {
    constructor(t2 = 1, e2 = 0.4, n2 = 12, i = 48, r = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: n2, tubularSegments: i, arc: r }, n2 = Math.floor(n2), i = Math.floor(i);
      const s = [], a = [], o = [], l2 = [], c6 = new Ui(), h2 = new Ui(), u2 = new Ui();
      for (let s2 = 0; s2 <= n2; s2++) for (let d2 = 0; d2 <= i; d2++) {
        const p2 = d2 / i * r, m = s2 / n2 * Math.PI * 2;
        h2.x = (t2 + e2 * Math.cos(m)) * Math.cos(p2), h2.y = (t2 + e2 * Math.cos(m)) * Math.sin(p2), h2.z = e2 * Math.sin(m), a.push(h2.x, h2.y, h2.z), c6.x = t2 * Math.cos(p2), c6.y = t2 * Math.sin(p2), u2.subVectors(h2, c6).normalize(), o.push(u2.x, u2.y, u2.z), l2.push(d2 / i), l2.push(s2 / n2);
      }
      for (let t3 = 1; t3 <= n2; t3++) for (let e3 = 1; e3 <= i; e3++) {
        const n3 = (i + 1) * t3 + e3 - 1, r2 = (i + 1) * (t3 - 1) + e3 - 1, a2 = (i + 1) * (t3 - 1) + e3, o2 = (i + 1) * t3 + e3;
        s.push(n3, r2, o2), s.push(r2, a2, o2);
      }
      this.setIndex(s), this.setAttribute("position", new vs(a, 3)), this.setAttribute("normal", new vs(o, 3)), this.setAttribute("uv", new vs(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ku(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var $u = class _$u extends As {
    constructor(t2 = 1, e2 = 0.4, n2 = 64, i = 8, r = 2, s = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: n2, radialSegments: i, p: r, q: s }, n2 = Math.floor(n2), i = Math.floor(i);
      const a = [], o = [], l2 = [], c6 = [], h2 = new Ui(), u2 = new Ui(), d2 = new Ui(), p2 = new Ui(), m = new Ui(), f = new Ui(), g = new Ui();
      for (let a2 = 0; a2 <= n2; ++a2) {
        const v = a2 / n2 * r * Math.PI * 2;
        _(v, r, s, t2, d2), _(v + 0.01, r, s, t2, p2), f.subVectors(p2, d2), g.addVectors(p2, d2), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
        for (let t3 = 0; t3 <= i; ++t3) {
          const r2 = t3 / i * Math.PI * 2, s2 = -e2 * Math.cos(r2), p3 = e2 * Math.sin(r2);
          h2.x = d2.x + (s2 * g.x + p3 * m.x), h2.y = d2.y + (s2 * g.y + p3 * m.y), h2.z = d2.z + (s2 * g.z + p3 * m.z), o.push(h2.x, h2.y, h2.z), u2.subVectors(h2, d2).normalize(), l2.push(u2.x, u2.y, u2.z), c6.push(a2 / n2), c6.push(t3 / i);
        }
      }
      for (let t3 = 1; t3 <= n2; t3++) for (let e3 = 1; e3 <= i; e3++) {
        const n3 = (i + 1) * (t3 - 1) + (e3 - 1), r2 = (i + 1) * t3 + (e3 - 1), s2 = (i + 1) * t3 + e3, o2 = (i + 1) * (t3 - 1) + e3;
        a.push(n3, r2, o2), a.push(r2, s2, o2);
      }
      function _(t3, e3, n3, i2, r2) {
        const s2 = Math.cos(t3), a2 = Math.sin(t3), o2 = n3 / e3 * t3, l3 = Math.cos(o2);
        r2.x = i2 * (2 + l3) * 0.5 * s2, r2.y = i2 * (2 + l3) * a2 * 0.5, r2.z = i2 * Math.sin(o2) * 0.5;
      }
      this.setIndex(a), this.setAttribute("position", new vs(o, 3)), this.setAttribute("normal", new vs(l2, 3)), this.setAttribute("uv", new vs(c6, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _$u(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var Qu = class _Qu extends As {
    constructor(t2 = new Kh(new Ui(-1, -1, 0), new Ui(-1, 1, 0), new Ui(1, 1, 0)), e2 = 64, n2 = 1, i = 8, r = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: n2, radialSegments: i, closed: r };
      const s = t2.computeFrenetFrames(e2, r);
      this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
      const a = new Ui(), o = new Ui(), l2 = new ti();
      let c6 = new Ui();
      const h2 = [], u2 = [], d2 = [], p2 = [];
      function m(r2) {
        c6 = t2.getPointAt(r2 / e2, c6);
        const l3 = s.normals[r2], d3 = s.binormals[r2];
        for (let t3 = 0; t3 <= i; t3++) {
          const e3 = t3 / i * Math.PI * 2, r3 = Math.sin(e3), s2 = -Math.cos(e3);
          o.x = s2 * l3.x + r3 * d3.x, o.y = s2 * l3.y + r3 * d3.y, o.z = s2 * l3.z + r3 * d3.z, o.normalize(), u2.push(o.x, o.y, o.z), a.x = c6.x + n2 * o.x, a.y = c6.y + n2 * o.y, a.z = c6.z + n2 * o.z, h2.push(a.x, a.y, a.z);
        }
      }
      !function() {
        for (let t3 = 0; t3 < e2; t3++) m(t3);
        m(false === r ? e2 : 0), function() {
          for (let t3 = 0; t3 <= e2; t3++) for (let n3 = 0; n3 <= i; n3++) l2.x = t3 / e2, l2.y = n3 / i, d2.push(l2.x, l2.y);
        }(), function() {
          for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= i; e3++) {
            const n3 = (i + 1) * (t3 - 1) + (e3 - 1), r2 = (i + 1) * t3 + (e3 - 1), s2 = (i + 1) * t3 + e3, a2 = (i + 1) * (t3 - 1) + e3;
            p2.push(n3, r2, a2), p2.push(r2, s2, a2);
          }
        }();
      }(), this.setIndex(p2), this.setAttribute("position", new vs(h2, 3)), this.setAttribute("normal", new vs(u2, 3)), this.setAttribute("uv", new vs(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _Qu(new Qh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var td = class extends As {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e2 = [], n2 = /* @__PURE__ */ new Set(), i = new Ui(), r = new Ui();
        if (null !== t2.index) {
          const s = t2.attributes.position, a = t2.index;
          let o = t2.groups;
          0 === o.length && (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
          for (let t3 = 0, l2 = o.length; t3 < l2; ++t3) {
            const l3 = o[t3], c6 = l3.start;
            for (let t4 = c6, o2 = c6 + l3.count; t4 < o2; t4 += 3) for (let o3 = 0; o3 < 3; o3++) {
              const l4 = a.getX(t4 + o3), c7 = a.getX(t4 + (o3 + 1) % 3);
              i.fromBufferAttribute(s, l4), r.fromBufferAttribute(s, c7), true === ed(i, r, n2) && (e2.push(i.x, i.y, i.z), e2.push(r.x, r.y, r.z));
            }
          }
        } else {
          const s = t2.attributes.position;
          for (let t3 = 0, a = s.count / 3; t3 < a; t3++) for (let a2 = 0; a2 < 3; a2++) {
            const o = 3 * t3 + a2, l2 = 3 * t3 + (a2 + 1) % 3;
            i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l2), true === ed(i, r, n2) && (e2.push(i.x, i.y, i.z), e2.push(r.x, r.y, r.z));
          }
        }
        this.setAttribute("position", new vs(e2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function ed(t2, e2, n2) {
    const i = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== n2.has(i) && true !== n2.has(r) && (n2.add(i), n2.add(r), true);
  }
  var nd = Object.freeze({ __proto__: null, BoxGeometry: qs, CapsuleGeometry: iu, CircleGeometry: ru, ConeGeometry: au, CylinderGeometry: su, DodecahedronGeometry: lu, EdgesGeometry: pu, ExtrudeGeometry: Gu, IcosahedronGeometry: Xu, LatheGeometry: nu, OctahedronGeometry: ju, PlaneGeometry: ma, PolyhedronGeometry: ou, RingGeometry: qu, ShapeGeometry: Yu, SphereGeometry: Zu, TetrahedronGeometry: Ju, TorusGeometry: Ku, TorusKnotGeometry: $u, TubeGeometry: Qu, WireframeGeometry: td });
  var sd = class extends ts {
    constructor(t2) {
      super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Kr(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Kr(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ti(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var dd = class extends hh {
    constructor(t2) {
      super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.scale = t2.scale, this.dashSize = t2.dashSize, this.gapSize = t2.gapSize, this;
    }
  };
  function pd(t2, e2, n2) {
    return !t2 || !n2 && t2.constructor === e2 ? t2 : "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2);
  }
  function md(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  var xd = class {
    constructor(t2, e2, n2, i) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e2.constructor(n2), this.sampleValues = e2, this.valueSize = n2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e2 = this.parameterPositions;
      let n2 = this._cachedIndex, i = e2[n2], r = e2[n2 - 1];
      t: {
        e: {
          let s;
          n: {
            i: if (!(t2 < i)) {
              for (let s2 = n2 + 2; ; ) {
                if (void 0 === i) {
                  if (t2 < r) break i;
                  return n2 = e2.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
                }
                if (n2 === s2) break;
                if (r = i, i = e2[++n2], t2 < i) break e;
              }
              s = e2.length;
              break n;
            }
            if (t2 >= r) break t;
            {
              const a = e2[1];
              t2 < a && (n2 = 2, r = a);
              for (let s2 = n2 - 2; ; ) {
                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n2 === s2) break;
                if (i = r, r = e2[--n2 - 1], t2 >= r) break e;
              }
              s = n2, n2 = 0;
            }
          }
          for (; n2 < s; ) {
            const i2 = n2 + s >>> 1;
            t2 < e2[i2] ? s = i2 : n2 = i2 + 1;
          }
          if (i = e2[n2], r = e2[n2 - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i) return n2 = e2.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
        }
        this._cachedIndex = n2, this.intervalChanged_(n2, r, i);
      }
      return this.interpolate_(n2, r, t2, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e2 = this.resultBuffer, n2 = this.sampleValues, i = this.valueSize, r = t2 * i;
      for (let t3 = 0; t3 !== i; ++t3) e2[t3] = n2[r + t3];
      return e2;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var yd = class extends xd {
    constructor(t2, e2, n2, i) {
      super(t2, e2, n2, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Ie, endingEnd: Ie };
    }
    intervalChanged_(t2, e2, n2) {
      const i = this.parameterPositions;
      let r = t2 - 2, s = t2 + 1, a = i[r], o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case Ue:
          r = t2, a = 2 * e2 - n2;
          break;
        case Ne:
          r = i.length - 2, a = e2 + i[r] - i[r + 1];
          break;
        default:
          r = t2, a = n2;
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case Ue:
          s = t2, o = 2 * n2 - e2;
          break;
        case Ne:
          s = 1, o = n2 + i[1] - i[0];
          break;
        default:
          s = t2 - 1, o = e2;
      }
      const l2 = 0.5 * (n2 - e2), c6 = this.valueSize;
      this._weightPrev = l2 / (e2 - a), this._weightNext = l2 / (o - n2), this._offsetPrev = r * c6, this._offsetNext = s * c6;
    }
    interpolate_(t2, e2, n2, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c6 = this._offsetPrev, h2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (n2 - e2) / (i - e2), m = p2 * p2, f = m * p2, g = -u2 * f + 2 * u2 * m - u2 * p2, _ = (1 + u2) * f + (-1.5 - 2 * u2) * m + (-0.5 + u2) * p2 + 1, v = (-1 - d2) * f + (1.5 + d2) * m + 0.5 * p2, x = d2 * f - d2 * m;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = g * s[c6 + t3] + _ * s[l2 + t3] + v * s[o + t3] + x * s[h2 + t3];
      return r;
    }
  };
  var Md = class extends xd {
    constructor(t2, e2, n2, i) {
      super(t2, e2, n2, i);
    }
    interpolate_(t2, e2, n2, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c6 = (n2 - e2) / (i - e2), h2 = 1 - c6;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = s[l2 + t3] * h2 + s[o + t3] * c6;
      return r;
    }
  };
  var Sd = class extends xd {
    constructor(t2, e2, n2, i) {
      super(t2, e2, n2, i);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var bd = class {
    constructor(t2, e2, n2, i) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = pd(e2, this.TimeBufferType), this.values = pd(n2, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e2 = t2.constructor;
      let n2;
      if (e2.toJSON !== this.toJSON) n2 = e2.toJSON(t2);
      else {
        n2 = { name: t2.name, times: pd(t2.times, Array), values: pd(t2.values, Array) };
        const e3 = t2.getInterpolation();
        e3 !== t2.DefaultInterpolation && (n2.interpolation = e3);
      }
      return n2.type = t2.ValueTypeName, n2;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new Sd(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new Md(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new yd(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e2;
      switch (t2) {
        case Ce:
          e2 = this.InterpolantFactoryMethodDiscrete;
          break;
        case Pe:
          e2 = this.InterpolantFactoryMethodLinear;
          break;
        case Le:
          e2 = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e2) {
        const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e3);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e3), this;
      }
      return this.createInterpolant = e2, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Ce;
        case this.InterpolantFactoryMethodLinear:
          return Pe;
        case this.InterpolantFactoryMethodSmooth:
          return Le;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e2 = this.times;
        for (let n2 = 0, i = e2.length; n2 !== i; ++n2) e2[n2] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e2 = this.times;
        for (let n2 = 0, i = e2.length; n2 !== i; ++n2) e2[n2] *= t2;
      }
      return this;
    }
    trim(t2, e2) {
      const n2 = this.times, i = n2.length;
      let r = 0, s = i - 1;
      for (; r !== i && n2[r] < t2; ) ++r;
      for (; -1 !== s && n2[s] > e2; ) --s;
      if (++s, 0 !== r || s !== i) {
        r >= s && (s = Math.max(s, 1), r = s - 1);
        const t3 = this.getValueSize();
        this.times = n2.slice(r, s), this.values = this.values.slice(r * t3, s * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e2 = this.getValueSize();
      e2 - Math.floor(e2) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const n2 = this.times, i = this.values, r = n2.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
      let s = null;
      for (let e3 = 0; e3 !== r; e3++) {
        const i2 = n2[e3];
        if ("number" == typeof i2 && isNaN(i2)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e3, i2), t2 = false;
          break;
        }
        if (null !== s && s > i2) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e3, i2, s), t2 = false;
          break;
        }
        s = i2;
      }
      if (void 0 !== i && md(i)) for (let e3 = 0, n3 = i.length; e3 !== n3; ++e3) {
        const n4 = i[e3];
        if (isNaN(n4)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e3, n4), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e2 = this.values.slice(), n2 = this.getValueSize(), i = this.getInterpolation() === Le, r = t2.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r2 = false;
        const o = t2[a];
        if (o !== t2[a + 1] && (1 !== a || o !== t2[0])) if (i) r2 = true;
        else {
          const t3 = a * n2, i2 = t3 - n2, s2 = t3 + n2;
          for (let a2 = 0; a2 !== n2; ++a2) {
            const n3 = e2[t3 + a2];
            if (n3 !== e2[i2 + a2] || n3 !== e2[s2 + a2]) {
              r2 = true;
              break;
            }
          }
        }
        if (r2) {
          if (a !== s) {
            t2[s] = t2[a];
            const i2 = a * n2, r3 = s * n2;
            for (let t3 = 0; t3 !== n2; ++t3) e2[r3 + t3] = e2[i2 + t3];
          }
          ++s;
        }
      }
      if (r > 0) {
        t2[s] = t2[r];
        for (let t3 = r * n2, i2 = s * n2, a = 0; a !== n2; ++a) e2[i2 + a] = e2[t3 + a];
        ++s;
      }
      return s !== t2.length ? (this.times = t2.slice(0, s), this.values = e2.slice(0, s * n2)) : (this.times = t2, this.values = e2), this;
    }
    clone() {
      const t2 = this.times.slice(), e2 = this.values.slice(), n2 = new (0, this.constructor)(this.name, t2, e2);
      return n2.createInterpolant = this.createInterpolant, n2;
    }
  };
  bd.prototype.TimeBufferType = Float32Array, bd.prototype.ValueBufferType = Float32Array, bd.prototype.DefaultInterpolation = Pe;
  var Ed = class extends bd {
  };
  Ed.prototype.ValueTypeName = "bool", Ed.prototype.ValueBufferType = Array, Ed.prototype.DefaultInterpolation = Ce, Ed.prototype.InterpolantFactoryMethodLinear = void 0, Ed.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Td = class extends bd {
  };
  Td.prototype.ValueTypeName = "color";
  var wd = class extends bd {
  };
  wd.prototype.ValueTypeName = "number";
  var Ad = class extends xd {
    constructor(t2, e2, n2, i) {
      super(t2, e2, n2, i);
    }
    interpolate_(t2, e2, n2, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n2 - e2) / (i - e2);
      let l2 = t2 * a;
      for (let t3 = l2 + a; l2 !== t3; l2 += 4) Ii.slerpFlat(r, 0, s, l2 - a, s, l2, o);
      return r;
    }
  };
  var Rd = class extends bd {
    InterpolantFactoryMethodLinear(t2) {
      return new Ad(this.times, this.values, this.getValueSize(), t2);
    }
  };
  Rd.prototype.ValueTypeName = "quaternion", Rd.prototype.DefaultInterpolation = Pe, Rd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Cd = class extends bd {
  };
  Cd.prototype.ValueTypeName = "string", Cd.prototype.ValueBufferType = Array, Cd.prototype.DefaultInterpolation = Ce, Cd.prototype.InterpolantFactoryMethodLinear = void 0, Cd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Pd = class extends bd {
  };
  Pd.prototype.ValueTypeName = "vector";
  var Nd = class {
    constructor(t2, e2, n2) {
      const i = this;
      let r, s = false, a = 0, o = 0;
      const l2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = n2, this.itemStart = function(t3) {
        o++, false === s && void 0 !== i.onStart && i.onStart(t3, a, o), s = true;
      }, this.itemEnd = function(t3) {
        a++, void 0 !== i.onProgress && i.onProgress(t3, a, o), a === o && (s = false, void 0 !== i.onLoad && i.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i.onError && i.onError(t3);
      }, this.resolveURL = function(t3) {
        return r ? r(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r = t3, this;
      }, this.addHandler = function(t3, e3) {
        return l2.push(t3, e3), this;
      }, this.removeHandler = function(t3) {
        const e3 = l2.indexOf(t3);
        return -1 !== e3 && l2.splice(e3, 2), this;
      }, this.getHandler = function(t3) {
        for (let e3 = 0, n3 = l2.length; e3 < n3; e3 += 2) {
          const n4 = l2[e3], i2 = l2[e3 + 1];
          if (n4.global && (n4.lastIndex = 0), n4.test(t3)) return i2;
        }
        return null;
      };
    }
  };
  var Dd = new Nd();
  var Od = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : Dd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e2) {
      const n2 = this;
      return new Promise(function(i, r) {
        n2.load(t2, i, e2, r);
      });
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
  Od.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var jd = class extends Nr {
    constructor(t2, e2 = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Kr(t2), this.intensity = e2;
    }
    dispose() {
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, void 0 !== this.groundColor && (e2.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e2.object.distance = this.distance), void 0 !== this.angle && (e2.object.angle = this.angle), void 0 !== this.decay && (e2.object.decay = this.decay), void 0 !== this.penumbra && (e2.object.penumbra = this.penumbra), void 0 !== this.shadow && (e2.object.shadow = this.shadow.toJSON()), e2;
    }
  };
  var Yd = new cr();
  var Zd = new Ui();
  var Jd = new Ui();
  var Kd = class {
    constructor(t2) {
      this.camera = t2, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ti(512, 512), this.map = null, this.mapPass = null, this.matrix = new cr(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new ua(), this._frameExtents = new ti(1, 1), this._viewportCount = 1, this._viewports = [new Ei(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e2 = this.camera, n2 = this.matrix;
      Zd.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(Zd), Jd.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(Jd), e2.updateMatrixWorld(), Yd.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Yd), n2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n2.multiply(Yd);
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
      return this.camera = t2.camera.clone(), this.bias = t2.bias, this.radius = t2.radius, this.mapSize.copy(t2.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var tp = new cr();
  var ep = new Ui();
  var np = new Ui();
  var sp = class extends Kd {
    constructor() {
      super(new Ta(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var ap = class extends jd {
    constructor(t2, e2) {
      super(t2, e2), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Nr.DEFAULT_UP), this.updateMatrix(), this.target = new Nr(), this.shadow = new sp();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var op = class extends jd {
    constructor(t2, e2) {
      super(t2, e2), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  };
  var bp = new cr();
  var Ep = new cr();
  var Tp = new cr();
  var Ap = class {
    constructor(t2 = true) {
      this.autoStart = t2, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = Rp(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
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
        const e2 = Rp();
        t2 = (e2 - this.oldTime) / 1e3, this.oldTime = e2, this.elapsedTime += t2;
      }
      return t2;
    }
  };
  function Rp() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }
  var Cp = new Ui();
  var Pp = new Ii();
  var Lp = new Ui();
  var Ip = new Ui();
  var Dp = new Ui();
  var Op = new Ii();
  var Fp = new Ui();
  var Bp = new Ui();
  var kp = "\\[\\]\\.:\\/";
  var Gp = new RegExp("[" + kp + "]", "g");
  var Wp = "[^" + kp + "]";
  var Xp = "[^" + kp.replace("\\.", "") + "]";
  var jp = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Wp) + /(WCOD+)?/.source.replace("WCOD", Xp) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Wp) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Wp) + "$");
  var qp = ["material", "materials", "bones", "map"];
  var Yp = class _Yp {
    constructor(t2, e2, n2) {
      this.path = e2, this.parsedPath = n2 || _Yp.parseTrackName(e2), this.node = _Yp.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e2, n2) {
      return t2 && t2.isAnimationObjectGroup ? new _Yp.Composite(t2, e2, n2) : new _Yp(t2, e2, n2);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Gp, "");
    }
    static parseTrackName(t2) {
      const e2 = jp.exec(t2);
      if (null === e2) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const n2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, i = n2.nodeName && n2.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t3 = n2.nodeName.substring(i + 1);
        -1 !== qp.indexOf(t3) && (n2.nodeName = n2.nodeName.substring(0, i), n2.objectName = t3);
      }
      if (null === n2.propertyName || 0 === n2.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return n2;
    }
    static findNode(t2, e2) {
      if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
      if (t2.skeleton) {
        const n2 = t2.skeleton.getBoneByName(e2);
        if (void 0 !== n2) return n2;
      }
      if (t2.children) {
        const n2 = function(t3) {
          for (let i2 = 0; i2 < t3.length; i2++) {
            const r = t3[i2];
            if (r.name === e2 || r.uuid === e2) return r;
            const s = n2(r.children);
            if (s) return s;
          }
          return null;
        }, i = n2(t2.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e2) {
      t2[e2] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e2) {
      const n2 = this.resolvedProperty;
      for (let i = 0, r = n2.length; i !== r; ++i) t2[e2++] = n2[i];
    }
    _getValue_arrayElement(t2, e2) {
      t2[e2] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e2) {
      this.resolvedProperty.toArray(t2, e2);
    }
    _setValue_direct(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2];
    }
    _setValue_direct_setNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e2) {
      const n2 = this.resolvedProperty;
      for (let i = 0, r = n2.length; i !== r; ++i) n2[i] = t2[e2++];
    }
    _setValue_array_setNeedsUpdate(t2, e2) {
      const n2 = this.resolvedProperty;
      for (let i = 0, r = n2.length; i !== r; ++i) n2[i] = t2[e2++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
      const n2 = this.resolvedProperty;
      for (let i = 0, r = n2.length; i !== r; ++i) n2[i] = t2[e2++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e2) {
      this.bind(), this.getValue(t2, e2);
    }
    _setValue_unbound(t2, e2) {
      this.bind(), this.setValue(t2, e2);
    }
    bind() {
      let t2 = this.node;
      const e2 = this.parsedPath, n2 = e2.objectName, i = e2.propertyName;
      let r = e2.propertyIndex;
      if (t2 || (t2 = _Yp.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (n2) {
        let i2 = e2.objectIndex;
        switch (n2) {
          case "materials":
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === i2) {
              i2 = e3;
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
            if (void 0 === t2[n2]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[n2];
        }
        if (void 0 !== i2) {
          if (void 0 === t2[i2]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i2];
        }
      }
      const s = t2[i];
      if (void 0 === s) {
        const n3 = e2.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n3 + "." + i + " but it wasn't found.", t2);
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
  Yp.Composite = class {
    constructor(t2, e2, n2) {
      const i = n2 || Yp.parseTrackName(e2);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e2, i);
    }
    getValue(t2, e2) {
      this.bind();
      const n2 = this._targetGroup.nCachedObjects_, i = this._bindings[n2];
      void 0 !== i && i.getValue(t2, e2);
    }
    setValue(t2, e2) {
      const n2 = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n2.length; i !== r; ++i) n2[i].setValue(t2, e2);
    }
    bind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, n2 = t2.length; e2 !== n2; ++e2) t2[e2].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, n2 = t2.length; e2 !== n2; ++e2) t2[e2].unbind();
    }
  }, Yp.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Yp.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Yp.prototype.GetterByBindingType = [Yp.prototype._getValue_direct, Yp.prototype._getValue_array, Yp.prototype._getValue_arrayElement, Yp.prototype._getValue_toArray], Yp.prototype.SetterByBindingTypeAndVersioning = [[Yp.prototype._setValue_direct, Yp.prototype._setValue_direct_setNeedsUpdate, Yp.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Yp.prototype._setValue_array, Yp.prototype._setValue_array_setNeedsUpdate, Yp.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Yp.prototype._setValue_arrayElement, Yp.prototype._setValue_arrayElement_setNeedsUpdate, Yp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Yp.prototype._setValue_fromArray, Yp.prototype._setValue_fromArray_setNeedsUpdate, Yp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var Kp = new Float32Array(1);
  var rm = class {
    constructor(t2, e2, n2 = 0, i = 1 / 0) {
      this.ray = new lr(t2, e2), this.near = n2, this.far = i, this.camera = null, this.layers = new yr(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
    }
    set(t2, e2) {
      this.ray.set(t2, e2);
    }
    setFromCamera(t2, e2) {
      e2.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e2.matrixWorld), this.ray.direction.set(t2.x, t2.y, 0.5).unproject(e2).sub(this.ray.origin).normalize(), this.camera = e2) : e2.isOrthographicCamera ? (this.ray.origin.set(t2.x, t2.y, (e2.near + e2.far) / (e2.near - e2.far)).unproject(e2), this.ray.direction.set(0, 0, -1).transformDirection(e2.matrixWorld), this.camera = e2) : console.error("THREE.Raycaster: Unsupported camera type: " + e2.type);
    }
    intersectObject(t2, e2 = true, n2 = []) {
      return am(t2, this, n2, e2), n2.sort(sm), n2;
    }
    intersectObjects(t2, e2 = true, n2 = []) {
      for (let i = 0, r = t2.length; i < r; i++) am(t2[i], this, n2, e2);
      return n2.sort(sm), n2;
    }
  };
  function sm(t2, e2) {
    return t2.distance - e2.distance;
  }
  function am(t2, e2, n2, i) {
    if (t2.layers.test(e2.layers) && t2.raycast(e2, n2), true === i) {
      const i2 = t2.children;
      for (let t3 = 0, r = i2.length; t3 < r; t3++) am(i2[t3], e2, n2, true);
    }
  }
  var om = class {
    constructor(t2 = 1, e2 = 0, n2 = 0) {
      return this.radius = t2, this.phi = e2, this.theta = n2, this;
    }
    set(t2, e2, n2) {
      return this.radius = t2, this.phi = e2, this.theta = n2, this;
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
    setFromCartesianCoords(t2, e2, n2) {
      return this.radius = Math.sqrt(t2 * t2 + e2 * e2 + n2 * n2), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t2, n2), this.phi = Math.acos(jn(e2 / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var cm = new ti();
  var um = new Ui();
  var dm = new Ui();
  var mm = new Ui();
  var gm = new Ui();
  var _m = new cr();
  var vm = new cr();
  var Sm = new Ui();
  var bm = new Kr();
  var Em = new Kr();
  var Rm = new Ui();
  var Cm = new Ui();
  var Pm = new Ui();
  var Im = new Ui();
  var Um = new Qs();
  var Om = new Oi();
  var Hm = new Ui();
  var Vm;
  var km;
  var Gm = class extends Nr {
    constructor(t2 = new Ui(0, 0, 1), e2 = new Ui(0, 0, 0), n2 = 1, i = 16776960, r = 0.2 * n2, s = 0.2 * r) {
      super(), this.type = "ArrowHelper", void 0 === Vm && (Vm = new As(), Vm.setAttribute("position", new vs([0, 0, 0, 0, 1, 0], 3)), km = new su(0, 0.5, 1, 5, 1), km.translate(0, -0.5, 0)), this.position.copy(e2), this.line = new gh(Vm, new hh({ color: i, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new Xs(km, new es({ color: i, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(t2), this.setLength(n2, r, s);
    }
    setDirection(t2) {
      if (t2.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
      else if (t2.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
      else {
        Hm.set(t2.z, 0, -t2.x).normalize();
        const e2 = Math.acos(t2.y);
        this.quaternion.setFromAxisAngle(Hm, e2);
      }
    }
    setLength(t2, e2 = 0.2 * t2, n2 = 0.2 * e2) {
      this.line.scale.set(1, Math.max(1e-4, t2 - e2), 1), this.line.updateMatrix(), this.cone.scale.set(n2, e2, n2), this.cone.position.y = t2, this.cone.updateMatrix();
    }
    setColor(t2) {
      this.line.material.color.set(t2), this.cone.material.color.set(t2);
    }
    copy(t2) {
      return super.copy(t2, false), this.line.copy(t2.line), this.cone.copy(t2.cone), this;
    }
    dispose() {
      this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
    }
  };
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // js/lib/OrbitControls.js
  var _changeEvent = { type: "change" };
  var _startEvent = { type: "start" };
  var _endEvent = { type: "end" };
  var _ray = new lr();
  var _plane = new la();
  var TILT_LIMIT = Math.cos(70 * Qn.DEG2RAD);
  var OrbitControls = class extends Hn {
    constructor(object, domElement) {
      super();
      this.object = object;
      this.domElement = domElement;
      this.domElement.style.touchAction = "none";
      this.enabled = true;
      this.target = new Ui();
      this.cursor = new Ui();
      this.minDistance = 0;
      this.maxDistance = Infinity;
      this.minZoom = 0;
      this.maxZoom = Infinity;
      this.minTargetRadius = 0;
      this.maxTargetRadius = Infinity;
      this.minPolarAngle = 0;
      this.maxPolarAngle = Math.PI;
      this.minAzimuthAngle = -Infinity;
      this.maxAzimuthAngle = Infinity;
      this.enableDamping = false;
      this.dampingFactor = 0.05;
      this.enableZoom = true;
      this.zoomSpeed = 1;
      this.enableRotate = true;
      this.rotateSpeed = 1;
      this.enablePan = true;
      this.panSpeed = 1;
      this.screenSpacePanning = true;
      this.keyPanSpeed = 7;
      this.zoomToCursor = false;
      this.autoRotate = false;
      this.autoRotateSpeed = 2;
      this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" };
      this.mouseButtons = { LEFT: e.ROTATE, MIDDLE: e.DOLLY, RIGHT: e.PAN };
      this.touches = { ONE: n.ROTATE, TWO: n.DOLLY_PAN };
      this.target0 = this.target.clone();
      this.position0 = this.object.position.clone();
      this.zoom0 = this.object.zoom;
      this._domElementKeyEvents = null;
      this.getPolarAngle = function() {
        return spherical.phi;
      };
      this.getAzimuthalAngle = function() {
        return spherical.theta;
      };
      this.getDistance = function() {
        return this.object.position.distanceTo(this.target);
      };
      this.listenToKeyEvents = function(domElement2) {
        domElement2.addEventListener("keydown", onKeyDown);
        this._domElementKeyEvents = domElement2;
      };
      this.stopListenToKeyEvents = function() {
        this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
        this._domElementKeyEvents = null;
      };
      this.saveState = function() {
        scope.target0.copy(scope.target);
        scope.position0.copy(scope.object.position);
        scope.zoom0 = scope.object.zoom;
      };
      this.reset = function() {
        scope.target.copy(scope.target0);
        scope.object.position.copy(scope.position0);
        scope.object.zoom = scope.zoom0;
        scope.object.updateProjectionMatrix();
        scope.dispatchEvent(_changeEvent);
        scope.update();
        state4 = STATE.NONE;
      };
      this.update = function() {
        const offset = new Ui();
        const quat = new Ii().setFromUnitVectors(object.up, new Ui(0, 1, 0));
        const quatInverse = quat.clone().invert();
        const lastPosition = new Ui();
        const lastQuaternion = new Ii();
        const lastTargetPosition = new Ui();
        const twoPI = 2 * Math.PI;
        return function update(deltaTime = null) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          offset.applyQuaternion(quat);
          spherical.setFromVector3(offset);
          if (scope.autoRotate && state4 === STATE.NONE) {
            rotateLeft(getAutoRotationAngle(deltaTime));
          }
          if (scope.enableDamping) {
            spherical.theta += sphericalDelta.theta * scope.dampingFactor;
            spherical.phi += sphericalDelta.phi * scope.dampingFactor;
          } else {
            spherical.theta += sphericalDelta.theta;
            spherical.phi += sphericalDelta.phi;
          }
          let min = scope.minAzimuthAngle;
          let max = scope.maxAzimuthAngle;
          if (isFinite(min) && isFinite(max)) {
            if (min < -Math.PI) min += twoPI;
            else if (min > Math.PI) min -= twoPI;
            if (max < -Math.PI) max += twoPI;
            else if (max > Math.PI) max -= twoPI;
            if (min <= max) {
              spherical.theta = Math.max(min, Math.min(max, spherical.theta));
            } else {
              spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
            }
          }
          spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
          spherical.makeSafe();
          if (scope.enableDamping === true) {
            scope.target.addScaledVector(panOffset, scope.dampingFactor);
          } else {
            scope.target.add(panOffset);
          }
          scope.target.sub(scope.cursor);
          scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
          scope.target.add(scope.cursor);
          if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
            spherical.radius = clampDistance(spherical.radius);
          } else {
            spherical.radius = clampDistance(spherical.radius * scale);
          }
          offset.setFromSpherical(spherical);
          offset.applyQuaternion(quatInverse);
          position.copy(scope.target).add(offset);
          scope.object.lookAt(scope.target);
          if (scope.enableDamping === true) {
            sphericalDelta.theta *= 1 - scope.dampingFactor;
            sphericalDelta.phi *= 1 - scope.dampingFactor;
            panOffset.multiplyScalar(1 - scope.dampingFactor);
          } else {
            sphericalDelta.set(0, 0, 0);
            panOffset.set(0, 0, 0);
          }
          let zoomChanged = false;
          if (scope.zoomToCursor && performCursorZoom) {
            let newRadius = null;
            if (scope.object.isPerspectiveCamera) {
              const prevRadius = offset.length();
              newRadius = clampDistance(prevRadius * scale);
              const radiusDelta = prevRadius - newRadius;
              scope.object.position.addScaledVector(dollyDirection, radiusDelta);
              scope.object.updateMatrixWorld();
            } else if (scope.object.isOrthographicCamera) {
              const mouseBefore = new Ui(mouse.x, mouse.y, 0);
              mouseBefore.unproject(scope.object);
              scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
              scope.object.updateProjectionMatrix();
              zoomChanged = true;
              const mouseAfter = new Ui(mouse.x, mouse.y, 0);
              mouseAfter.unproject(scope.object);
              scope.object.position.sub(mouseAfter).add(mouseBefore);
              scope.object.updateMatrixWorld();
              newRadius = offset.length();
            } else {
              console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
              scope.zoomToCursor = false;
            }
            if (newRadius !== null) {
              if (this.screenSpacePanning) {
                scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
              } else {
                _ray.origin.copy(scope.object.position);
                _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                  object.lookAt(scope.target);
                } else {
                  _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                  _ray.intersectPlane(_plane, scope.target);
                }
              }
            }
          } else if (scope.object.isOrthographicCamera) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
          }
          scale = 1;
          performCursorZoom = false;
          if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
            scope.dispatchEvent(_changeEvent);
            lastPosition.copy(scope.object.position);
            lastQuaternion.copy(scope.object.quaternion);
            lastTargetPosition.copy(scope.target);
            return true;
          }
          return false;
        };
      }();
      this.dispose = function() {
        scope.domElement.removeEventListener("contextmenu", onContextMenu);
        scope.domElement.removeEventListener("pointerdown", onPointerDown);
        scope.domElement.removeEventListener("pointercancel", onPointerUp);
        scope.domElement.removeEventListener("wheel", onMouseWheel);
        scope.domElement.removeEventListener("pointermove", onPointerMove);
        scope.domElement.removeEventListener("pointerup", onPointerUp);
        if (scope._domElementKeyEvents !== null) {
          scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
          scope._domElementKeyEvents = null;
        }
      };
      const scope = this;
      const STATE = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
      };
      let state4 = STATE.NONE;
      const EPS = 1e-6;
      const spherical = new om();
      const sphericalDelta = new om();
      let scale = 1;
      const panOffset = new Ui();
      const rotateStart = new ti();
      const rotateEnd = new ti();
      const rotateDelta = new ti();
      const panStart = new ti();
      const panEnd = new ti();
      const panDelta = new ti();
      const dollyStart = new ti();
      const dollyEnd = new ti();
      const dollyDelta = new ti();
      const dollyDirection = new Ui();
      const mouse = new ti();
      let performCursorZoom = false;
      const pointers = [];
      const pointerPositions = {};
      function getAutoRotationAngle(deltaTime) {
        if (deltaTime !== null) {
          return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
        } else {
          return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
        }
      }
      function getZoomScale(delta) {
        const normalized_delta = Math.abs(delta) / (100 * (window.devicePixelRatio | 0));
        return Math.pow(0.95, scope.zoomSpeed * normalized_delta);
      }
      function rotateLeft(angle) {
        sphericalDelta.theta -= angle;
      }
      function rotateUp(angle) {
        sphericalDelta.phi -= angle;
      }
      const panLeft = function() {
        const v = new Ui();
        return function panLeft2(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.multiplyScalar(-distance);
          panOffset.add(v);
        };
      }();
      const panUp = function() {
        const v = new Ui();
        return function panUp2(distance, objectMatrix) {
          if (scope.screenSpacePanning === true) {
            v.setFromMatrixColumn(objectMatrix, 1);
          } else {
            v.setFromMatrixColumn(objectMatrix, 0);
            v.crossVectors(scope.object.up, v);
          }
          v.multiplyScalar(distance);
          panOffset.add(v);
        };
      }();
      const pan = function() {
        const offset = new Ui();
        return function pan2(deltaX, deltaY) {
          const element = scope.domElement;
          if (scope.object.isPerspectiveCamera) {
            const position = scope.object.position;
            offset.copy(position).sub(scope.target);
            let targetDistance = offset.length();
            targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
            panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
            panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
          } else if (scope.object.isOrthographicCamera) {
            panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
            panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
            scope.enablePan = false;
          }
        };
      }();
      function dollyOut(dollyScale) {
        if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
          scale /= dollyScale;
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
          scope.enableZoom = false;
        }
      }
      function dollyIn(dollyScale) {
        if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
          scale *= dollyScale;
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
          scope.enableZoom = false;
        }
      }
      function updateZoomParameters(x, y) {
        if (!scope.zoomToCursor) {
          return;
        }
        performCursorZoom = true;
        const rect = scope.domElement.getBoundingClientRect();
        const dx = x - rect.left;
        const dy = y - rect.top;
        const w = rect.width;
        const h2 = rect.height;
        mouse.x = dx / w * 2 - 1;
        mouse.y = -(dy / h2) * 2 + 1;
        dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
      }
      function clampDistance(dist) {
        return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
      }
      function handleMouseDownRotate(event) {
        rotateStart.set(event.clientX, event.clientY);
      }
      function handleMouseDownDolly(event) {
        updateZoomParameters(event.clientX, event.clientX);
        dollyStart.set(event.clientX, event.clientY);
      }
      function handleMouseDownPan(event) {
        panStart.set(event.clientX, event.clientY);
      }
      function handleMouseMoveRotate(event) {
        rotateEnd.set(event.clientX, event.clientY);
        rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
        const element = scope.domElement;
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
        rotateStart.copy(rotateEnd);
        scope.update();
      }
      function handleMouseMoveDolly(event) {
        dollyEnd.set(event.clientX, event.clientY);
        dollyDelta.subVectors(dollyEnd, dollyStart);
        if (dollyDelta.y > 0) {
          dollyOut(getZoomScale(dollyDelta.y));
        } else if (dollyDelta.y < 0) {
          dollyIn(getZoomScale(dollyDelta.y));
        }
        dollyStart.copy(dollyEnd);
        scope.update();
      }
      function handleMouseMovePan(event) {
        panEnd.set(event.clientX, event.clientY);
        panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
        scope.update();
      }
      function handleMouseWheel(event) {
        updateZoomParameters(event.clientX, event.clientY);
        if (event.deltaY < 0) {
          dollyIn(getZoomScale(event.deltaY));
        } else if (event.deltaY > 0) {
          dollyOut(getZoomScale(event.deltaY));
        }
        scope.update();
      }
      function handleKeyDown(event) {
        let needsUpdate = false;
        switch (event.code) {
          case scope.keys.UP:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
            } else {
              pan(0, scope.keyPanSpeed);
            }
            needsUpdate = true;
            break;
          case scope.keys.BOTTOM:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
            } else {
              pan(0, -scope.keyPanSpeed);
            }
            needsUpdate = true;
            break;
          case scope.keys.LEFT:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
            } else {
              pan(scope.keyPanSpeed, 0);
            }
            needsUpdate = true;
            break;
          case scope.keys.RIGHT:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
            } else {
              pan(-scope.keyPanSpeed, 0);
            }
            needsUpdate = true;
            break;
        }
        if (needsUpdate) {
          event.preventDefault();
          scope.update();
        }
      }
      function handleTouchStartRotate(event) {
        if (pointers.length === 1) {
          rotateStart.set(event.pageX, event.pageY);
        } else {
          const position = getSecondPointerPosition(event);
          const x = 0.5 * (event.pageX + position.x);
          const y = 0.5 * (event.pageY + position.y);
          rotateStart.set(x, y);
        }
      }
      function handleTouchStartPan(event) {
        if (pointers.length === 1) {
          panStart.set(event.pageX, event.pageY);
        } else {
          const position = getSecondPointerPosition(event);
          const x = 0.5 * (event.pageX + position.x);
          const y = 0.5 * (event.pageY + position.y);
          panStart.set(x, y);
        }
      }
      function handleTouchStartDolly(event) {
        const position = getSecondPointerPosition(event);
        const dx = event.pageX - position.x;
        const dy = event.pageY - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        dollyStart.set(0, distance);
      }
      function handleTouchStartDollyPan(event) {
        if (scope.enableZoom) handleTouchStartDolly(event);
        if (scope.enablePan) handleTouchStartPan(event);
      }
      function handleTouchStartDollyRotate(event) {
        if (scope.enableZoom) handleTouchStartDolly(event);
        if (scope.enableRotate) handleTouchStartRotate(event);
      }
      function handleTouchMoveRotate(event) {
        if (pointers.length == 1) {
          rotateEnd.set(event.pageX, event.pageY);
        } else {
          const position = getSecondPointerPosition(event);
          const x = 0.5 * (event.pageX + position.x);
          const y = 0.5 * (event.pageY + position.y);
          rotateEnd.set(x, y);
        }
        rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
        const element = scope.domElement;
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
        rotateStart.copy(rotateEnd);
      }
      function handleTouchMovePan(event) {
        if (pointers.length === 1) {
          panEnd.set(event.pageX, event.pageY);
        } else {
          const position = getSecondPointerPosition(event);
          const x = 0.5 * (event.pageX + position.x);
          const y = 0.5 * (event.pageY + position.y);
          panEnd.set(x, y);
        }
        panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
      }
      function handleTouchMoveDolly(event) {
        const position = getSecondPointerPosition(event);
        const dx = event.pageX - position.x;
        const dy = event.pageY - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        dollyEnd.set(0, distance);
        dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
        dollyOut(dollyDelta.y);
        dollyStart.copy(dollyEnd);
        const centerX = (event.pageX + position.x) * 0.5;
        const centerY = (event.pageY + position.y) * 0.5;
        updateZoomParameters(centerX, centerY);
      }
      function handleTouchMoveDollyPan(event) {
        if (scope.enableZoom) handleTouchMoveDolly(event);
        if (scope.enablePan) handleTouchMovePan(event);
      }
      function handleTouchMoveDollyRotate(event) {
        if (scope.enableZoom) handleTouchMoveDolly(event);
        if (scope.enableRotate) handleTouchMoveRotate(event);
      }
      function onPointerDown(event) {
        if (scope.enabled === false) return;
        if (pointers.length === 0) {
          scope.domElement.setPointerCapture(event.pointerId);
          scope.domElement.addEventListener("pointermove", onPointerMove);
          scope.domElement.addEventListener("pointerup", onPointerUp);
        }
        addPointer(event);
        if (event.pointerType === "touch") {
          onTouchStart(event);
        } else {
          onMouseDown(event);
        }
      }
      function onPointerMove(event) {
        if (scope.enabled === false) return;
        if (event.pointerType === "touch") {
          onTouchMove(event);
        } else {
          onMouseMove(event);
        }
      }
      function onPointerUp(event) {
        removePointer(event);
        if (pointers.length === 0) {
          scope.domElement.releasePointerCapture(event.pointerId);
          scope.domElement.removeEventListener("pointermove", onPointerMove);
          scope.domElement.removeEventListener("pointerup", onPointerUp);
        }
        scope.dispatchEvent(_endEvent);
        state4 = STATE.NONE;
      }
      function onMouseDown(event) {
        let mouseAction;
        switch (event.button) {
          case 0:
            mouseAction = scope.mouseButtons.LEFT;
            break;
          case 1:
            mouseAction = scope.mouseButtons.MIDDLE;
            break;
          case 2:
            mouseAction = scope.mouseButtons.RIGHT;
            break;
          default:
            mouseAction = -1;
        }
        switch (mouseAction) {
          case e.DOLLY:
            if (scope.enableZoom === false) return;
            handleMouseDownDolly(event);
            state4 = STATE.DOLLY;
            break;
          case e.ROTATE:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              if (scope.enablePan === false) return;
              handleMouseDownPan(event);
              state4 = STATE.PAN;
            } else {
              if (scope.enableRotate === false) return;
              handleMouseDownRotate(event);
              state4 = STATE.ROTATE;
            }
            break;
          case e.PAN:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              if (scope.enableRotate === false) return;
              handleMouseDownRotate(event);
              state4 = STATE.ROTATE;
            } else {
              if (scope.enablePan === false) return;
              handleMouseDownPan(event);
              state4 = STATE.PAN;
            }
            break;
          default:
            state4 = STATE.NONE;
        }
        if (state4 !== STATE.NONE) {
          scope.dispatchEvent(_startEvent);
        }
      }
      function onMouseMove(event) {
        switch (state4) {
          case STATE.ROTATE:
            if (scope.enableRotate === false) return;
            handleMouseMoveRotate(event);
            break;
          case STATE.DOLLY:
            if (scope.enableZoom === false) return;
            handleMouseMoveDolly(event);
            break;
          case STATE.PAN:
            if (scope.enablePan === false) return;
            handleMouseMovePan(event);
            break;
        }
      }
      function onMouseWheel(event) {
        if (scope.enabled === false || scope.enableZoom === false || state4 !== STATE.NONE) return;
        event.preventDefault();
        scope.dispatchEvent(_startEvent);
        handleMouseWheel(event);
        scope.dispatchEvent(_endEvent);
      }
      function onKeyDown(event) {
        if (scope.enabled === false || scope.enablePan === false) return;
        handleKeyDown(event);
      }
      function onTouchStart(event) {
        trackPointer(event);
        switch (pointers.length) {
          case 1:
            switch (scope.touches.ONE) {
              case n.ROTATE:
                if (scope.enableRotate === false) return;
                handleTouchStartRotate(event);
                state4 = STATE.TOUCH_ROTATE;
                break;
              case n.PAN:
                if (scope.enablePan === false) return;
                handleTouchStartPan(event);
                state4 = STATE.TOUCH_PAN;
                break;
              default:
                state4 = STATE.NONE;
            }
            break;
          case 2:
            switch (scope.touches.TWO) {
              case n.DOLLY_PAN:
                if (scope.enableZoom === false && scope.enablePan === false) return;
                handleTouchStartDollyPan(event);
                state4 = STATE.TOUCH_DOLLY_PAN;
                break;
              case n.DOLLY_ROTATE:
                if (scope.enableZoom === false && scope.enableRotate === false) return;
                handleTouchStartDollyRotate(event);
                state4 = STATE.TOUCH_DOLLY_ROTATE;
                break;
              default:
                state4 = STATE.NONE;
            }
            break;
          default:
            state4 = STATE.NONE;
        }
        if (state4 !== STATE.NONE) {
          scope.dispatchEvent(_startEvent);
        }
      }
      function onTouchMove(event) {
        trackPointer(event);
        switch (state4) {
          case STATE.TOUCH_ROTATE:
            if (scope.enableRotate === false) return;
            handleTouchMoveRotate(event);
            scope.update();
            break;
          case STATE.TOUCH_PAN:
            if (scope.enablePan === false) return;
            handleTouchMovePan(event);
            scope.update();
            break;
          case STATE.TOUCH_DOLLY_PAN:
            if (scope.enableZoom === false && scope.enablePan === false) return;
            handleTouchMoveDollyPan(event);
            scope.update();
            break;
          case STATE.TOUCH_DOLLY_ROTATE:
            if (scope.enableZoom === false && scope.enableRotate === false) return;
            handleTouchMoveDollyRotate(event);
            scope.update();
            break;
          default:
            state4 = STATE.NONE;
        }
      }
      function onContextMenu(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
      }
      function addPointer(event) {
        pointers.push(event.pointerId);
      }
      function removePointer(event) {
        delete pointerPositions[event.pointerId];
        for (let i = 0; i < pointers.length; i++) {
          if (pointers[i] == event.pointerId) {
            pointers.splice(i, 1);
            return;
          }
        }
      }
      function trackPointer(event) {
        let position = pointerPositions[event.pointerId];
        if (position === void 0) {
          position = new ti();
          pointerPositions[event.pointerId] = position;
        }
        position.set(event.pageX, event.pageY);
      }
      function getSecondPointerPosition(event) {
        const pointerId = event.pointerId === pointers[0] ? pointers[1] : pointers[0];
        return pointerPositions[pointerId];
      }
      scope.domElement.addEventListener("contextmenu", onContextMenu);
      scope.domElement.addEventListener("pointerdown", onPointerDown);
      scope.domElement.addEventListener("pointercancel", onPointerUp);
      scope.domElement.addEventListener("wheel", onMouseWheel, { passive: false });
      this.update();
    }
  };

  // js/core/math3d.js
  var V = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    scale: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm: (a) => Math.hypot(a[0], a[1], a[2]),
    norm2: (a) => a[0] * a[0] + a[1] * a[1] + a[2] * a[2],
    normalize: (a) => {
      const n2 = Math.hypot(a[0], a[1], a[2]) || 1;
      return [a[0] / n2, a[1] / n2, a[2] / n2];
    }
  };
  var SURFACES = {
    sphere: {
      id: "sphere",
      zh: "\u7403\u9762 S\xB2",
      en: "Sphere",
      u0: 0,
      u1: Math.PI,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => [Math.sin(u2) * Math.cos(v), Math.sin(u2) * Math.sin(v), Math.cos(u2)]
    },
    torus: {
      id: "torus",
      zh: "\u73AF\u9762 T\xB2",
      en: "Torus",
      u0: 0,
      u1: 2 * Math.PI,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => {
        const R = 1.25, r = 0.5;
        const x = (R + r * Math.cos(u2)) * Math.cos(v);
        const y = (R + r * Math.cos(u2)) * Math.sin(v);
        const z = r * Math.sin(u2);
        return [x, y, z];
      }
    },
    paraboloid: {
      id: "paraboloid",
      zh: "\u65CB\u8F6C\u629B\u7269\u9762 z = r\xB2",
      en: "Paraboloid",
      u0: 1e-3,
      u1: 1.7,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => [u2 * Math.cos(v), u2 * Math.sin(v), u2 * u2]
    },
    saddle: {
      id: "saddle",
      zh: "\u978D\u9762 z = xy",
      en: "Hyperbolic paraboloid",
      u0: -1.6,
      u1: 1.6,
      v0: -1.6,
      v1: 1.6,
      vWrap: false,
      f: (u2, v) => [u2, v, u2 * v]
    },
    pseudosphere: {
      id: "pseudosphere",
      zh: "\u4F2A\u7403\u9762 K = \u22121",
      en: "Pseudosphere (tractricoid)",
      u0: 0.15,
      u1: 2.6,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => {
        const se2 = 1 / Math.cosh(u2);
        return [se2 * Math.cos(v), se2 * Math.sin(v), u2 - Math.tanh(u2)];
      }
    },
    cone: {
      id: "cone",
      zh: "\u5706\u9525\uFF08\u9664\u9876\u70B9\u5916\u5E73\u5766\uFF09",
      en: "Cone",
      u0: 0.25,
      u1: 2.3,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => {
        const a = 0.5;
        return [u2 * a * Math.cos(v), u2 * a * Math.sin(v), u2 * Math.sqrt(1 - a * a)];
      }
    }
  };
  function dFdu(spec, u2, v, h2) {
    return V.sub(spec.f(u2 + h2, v), spec.f(u2 - h2, v)).map((c6) => c6 / (2 * h2));
  }
  function dFdv(spec, u2, v, h2) {
    return V.sub(spec.f(u2, v + h2), spec.f(u2, v - h2)).map((c6) => c6 / (2 * h2));
  }
  function surfaceData(spec, u2, v) {
    const du2 = dFdu(spec, u2, v, 1e-4);
    const dv = dFdv(spec, u2, v, 1e-4);
    const E = V.dot(du2, du2), F = V.dot(du2, dv), G = V.dot(dv, dv);
    const n2 = V.normalize(V.cross(du2, dv));
    return { pos: spec.f(u2, v), du: du2, dv, n: n2, E, F, G };
  }
  function christoffel(spec, u2, v) {
    const h2 = 1e-4;
    const g = (a, b) => {
      const d2 = surfaceData(spec, a, b);
      return [d2.E, d2.F, d2.G];
    };
    const [E, F, G] = g(u2, v);
    const Eu2 = (g(u2 + h2, v)[0] - g(u2 - h2, v)[0]) / (2 * h2);
    const Ev = (g(u2, v + h2)[0] - g(u2, v - h2)[0]) / (2 * h2);
    const Fu2 = (g(u2 + h2, v)[1] - g(u2 - h2, v)[1]) / (2 * h2);
    const Fv = (g(u2, v + h2)[1] - g(u2, v - h2)[1]) / (2 * h2);
    const Gu2 = (g(u2 + h2, v)[2] - g(u2 - h2, v)[2]) / (2 * h2);
    const Gv = (g(u2, v + h2)[2] - g(u2, v - h2)[2]) / (2 * h2);
    const det = E * G - F * F;
    if (det < 1e-12) return null;
    const ginv = [[G / det, -F / det], [-F / det, E / det]];
    const dg = [
      [[Eu2, Fu2], [Fu2, Gu2]],
      // ∂_u g_ij
      [[Ev, Fv], [Fv, Gv]]
      // ∂_v g_ij
    ];
    const Gamma = [[[0, 0], [0, 0]], [[0, 0], [0, 0]]];
    for (let k = 0; k < 2; k++)
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++) {
          let s = 0;
          for (let l2 = 0; l2 < 2; l2++) {
            const a = dg[i][j][l2];
            const b = dg[j][i][l2];
            const c6 = dg[l2][i][j];
            s += ginv[k][l2] * (a + b - c6);
          }
          Gamma[k][i][j] = 0.5 * s;
        }
    return Gamma;
  }
  function integrateGeodesic(spec, u0, v0, du0, dv0, T = 30, dt2 = 0.02, maxSteps = 6e4) {
    const acc = (u3, v2, qu3, qv2) => {
      const G = christoffel(spec, u3, v2);
      if (!G) return [0, 0];
      let a0 = 0, a1 = 0;
      const q = [qu3, qv2];
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++) {
          a0 -= G[0][i][j] * q[i] * q[j];
          a1 -= G[1][i][j] * q[i] * q[j];
        }
      return [a0, a1];
    };
    const pts = [];
    let u2 = u0, v = v0, qu2 = du0, qv = dv0;
    const tMax = T;
    let t2 = 0;
    let guard = 0;
    while (t2 < tMax && guard < maxSteps) {
      pts.push({ t: t2, u: u2, v, p: spec.f(u2, v) });
      const k1 = acc(u2, v, qu2, qv);
      const u1 = u2 + 0.5 * dt2 * qu2, v1 = v + 0.5 * dt2 * qv;
      const qu1 = qu2 + 0.5 * dt2 * k1[0], qv1 = qv + 0.5 * dt2 * k1[1];
      const k2 = acc(u1, v1, qu1, qv1);
      const u22 = u2 + 0.5 * dt2 * qu1, v2 = v + 0.5 * dt2 * qv1;
      const qu22 = qu2 + 0.5 * dt2 * k2[0], qv2 = qv + 0.5 * dt2 * k2[1];
      const k3 = acc(u22, v2, qu22, qv2);
      const u3 = u2 + dt2 * qu22, v3 = v + dt2 * qv2;
      const qu3 = qu2 + dt2 * k3[0], qv3 = qv + dt2 * k3[1];
      const k4 = acc(u3, v3, qu3, qv3);
      u2 += dt2 / 6 * (qu2 + 2 * qu1 + 2 * qu22 + qu3);
      v += dt2 / 6 * (qv + 2 * qv1 + 2 * qv2 + qv3);
      qu2 += dt2 / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
      qv += dt2 / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
      if (u2 < spec.u0 - 0.01 || u2 > spec.u1 + 0.01) break;
      if (!spec.vWrap && (v < spec.v0 - 1 || v > spec.v1 + 1)) break;
      if (!isFinite(u2) || !isFinite(v) || Math.hypot(qu2, qv) > 1e4) break;
      t2 += dt2;
      guard++;
    }
    return pts;
  }
  function parallelTransport(spec, curve, v0) {
    const out = [];
    let v = v0.slice();
    for (let i = 0; i < curve.length; i++) {
      const { u: u2, v: vv } = curve[i];
      const d2 = surfaceData(spec, u2, vv);
      if (i > 0) {
        v = V.sub(v, V.scale(d2.n, V.dot(v, d2.n)));
      }
      out.push({ ...curve[i], vec: v.slice() });
    }
    return out;
  }
  function holonomyAngle(spec, transported, startIdx = 0) {
    const s = transported[startIdx];
    const e2 = transported[transported.length - 1];
    const d0 = surfaceData(spec, s.u, s.v);
    const e1 = V.normalize(d0.du);
    const e22 = V.normalize(V.cross(d0.n, d0.du));
    const a0 = Math.atan2(V.dot(s.vec, e22), V.dot(s.vec, e1));
    const a1 = Math.atan2(V.dot(e2.vec, e22), V.dot(e2.vec, e1));
    let d2 = a1 - a0;
    while (d2 > Math.PI) d2 -= 2 * Math.PI;
    while (d2 <= -Math.PI) d2 += 2 * Math.PI;
    return d2;
  }
  function gaussianCurvature(spec, u2, v) {
    const h2 = 1e-4;
    const pos = spec.f(u2, v);
    const du2 = dFdu(spec, u2, v, h2), dv = dFdv(spec, u2, v, h2);
    const E = V.dot(du2, du2), F = V.dot(du2, dv), G = V.dot(dv, dv);
    const n2 = V.normalize(V.cross(du2, dv));
    const suu = V.sub(spec.f(u2 + h2, v), V.sub(V.scale(spec.f(u2, v), 2), spec.f(u2 - h2, v))).map((c6) => c6 / (h2 * h2));
    const suv = V.sub(spec.f(u2 + h2, v + h2), V.sub(spec.f(u2 + h2, v - h2), V.sub(spec.f(u2 - h2, v + h2), spec.f(u2 - h2, v - h2)))).map((c6) => c6 / (4 * h2 * h2));
    const svv = V.sub(spec.f(u2, v + h2), V.sub(V.scale(spec.f(u2, v), 2), spec.f(u2, v - h2))).map((c6) => c6 / (h2 * h2));
    const L2 = V.dot(n2, suu), M3 = V.dot(n2, suv), N = V.dot(n2, svv);
    const det = E * G - F * F;
    if (det < 1e-14) return NaN;
    return (L2 * N - M3 * M3) / det;
  }
  var curl2D = (A, B, x, y, h2 = 1e-3) => {
    const dBdx = (B(x + h2, y) - B(x - h2, y)) / (2 * h2);
    const dAdy = (A(x, y + h2) - A(x, y - h2)) / (2 * h2);
    return dBdx - dAdy;
  };
  function lineIntegral2D(A, B, loop) {
    let s = 0;
    for (let i = 0; i < loop.length; i++) {
      const p2 = loop[i], q = loop[(i + 1) % loop.length];
      const mx = (p2.x + q.x) / 2, my = (p2.y + q.y) / 2;
      s += A(mx, my) * (q.x - p2.x) + B(mx, my) * (q.y - p2.y);
    }
    return s;
  }
  var dtheta = {
    P: (x, y) => {
      const r2 = x * x + y * y;
      return r2 < 1e-9 ? 0 : -y / r2;
    },
    Q: (x, y) => {
      const r2 = x * x + y * y;
      return r2 < 1e-9 ? 0 : x / r2;
    },
    zh: "d\u03B8 = (\u2212y dx + x dy)/(x\xB2+y\xB2)"
  };
  function flowPoint(F, p0, T, dt2 = 0.02) {
    let p2 = p0.slice();
    const sign = Math.sign(T) || 1;
    const steps = Math.max(1, Math.round(Math.abs(T) / dt2));
    const h2 = sign * dt2;
    for (let i = 0; i < steps; i++) {
      const k1 = F(p2);
      const k2 = F([p2[0] + h2 / 2 * k1[0], p2[1] + h2 / 2 * k1[1]]);
      const k3 = F([p2[0] + h2 / 2 * k2[0], p2[1] + h2 / 2 * k2[1]]);
      const k4 = F([p2[0] + h2 * k3[0], p2[1] + h2 * k3[1]]);
      p2 = [
        p2[0] + h2 / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]),
        p2[1] + h2 / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
      ];
    }
    return p2;
  }
  function photonOrbit(m, b, opts = {}) {
    const r0 = opts.r0 ?? 60, dphi = opts.dphi ?? 3e-3, maxSteps = opts.maxSteps ?? 4e4;
    const u0 = 1 / r0;
    const arg = 1 / (b * b) - u0 * u0 + 2 * m * u0 ** 3;
    if (arg < 0) return { pts: [], captured: true, m, b };
    let u2 = u0, w = Math.sqrt(arg), phi = 0;
    const pts = [{ phi: 0, u: u0, w }];
    let captured = false;
    for (let i = 0; i < maxSteps; i++) {
      const f = (uu2) => -uu2 + 3 * m * uu2 * uu2;
      const k1 = w, l1 = f(u2);
      const k2 = w + dphi / 2 * l1, l2 = f(u2 + dphi / 2 * k1);
      const k3 = w + dphi / 2 * l2, l3 = f(u2 + dphi / 2 * k2);
      const k4 = w + dphi * l3, l4 = f(u2 + dphi * k3);
      u2 += dphi / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
      w += dphi / 6 * (l1 + 2 * l2 + 2 * l3 + l4);
      phi += dphi;
      pts.push({ phi, u: u2, w });
      if (u2 > 1 / (2.01 * m)) {
        captured = true;
        break;
      }
      if (u2 < u0 * 0.9998 && phi > 0.3) break;
    }
    return { pts, captured, m, b };
  }
  function photonDeflection(m, b, opts = {}) {
    const o = photonOrbit(m, b, opts);
    if (o.captured || o.pts.length < 10) return null;
    const velAngle = (p2) => {
      const r = 1 / p2.u, rp = -p2.w / (p2.u * p2.u);
      const vx = rp * Math.cos(p2.phi) - r * Math.sin(p2.phi);
      const vy = rp * Math.sin(p2.phi) + r * Math.cos(p2.phi);
      return Math.atan2(vy, vx);
    };
    const a1 = velAngle(o.pts[0]);
    const a2 = velAngle(o.pts[o.pts.length - 1]);
    let d2 = a2 - a1;
    while (d2 < 0) d2 += 2 * Math.PI;
    while (d2 > 2 * Math.PI) d2 -= 2 * Math.PI;
    return d2;
  }
  function timelikeOrbit(m, a, e2, opts = {}) {
    const dphi = opts.dphi ?? 4e-3, nCycles = opts.nCycles ?? 4;
    const h2 = m * a * (1 - e2 * e2);
    const uP = 1 / (a * (1 - e2));
    let u2 = uP, w = 0, phi = 0;
    const pts = [{ phi: 0, u: u2 }];
    const periapses = [0];
    let prevW = 0;
    const total = 2 * Math.PI * nCycles + 0.5;
    for (let i = 0; i < Math.ceil(total / dphi); i++) {
      const f = (uu2) => m / h2 + 3 * m * uu2 * uu2 - uu2;
      const k1 = w, l1 = f(u2);
      const k2 = w + dphi / 2 * l1, l2 = f(u2 + dphi / 2 * k1);
      const k3 = w + dphi / 2 * l2, l3 = f(u2 + dphi / 2 * k2);
      const k4 = w + dphi * l3, l4 = f(u2 + dphi * k3);
      u2 += dphi / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
      w += dphi / 6 * (l1 + 2 * l2 + 2 * l3 + l4);
      phi += dphi;
      if (phi > total) break;
      pts.push({ phi, u: u2 });
      if (prevW >= 0 && w < 0 && phi > 0.3) periapses.push(phi);
      prevW = w;
    }
    const precessions = [];
    for (let i = 1; i < periapses.length; i++) precessions.push(periapses[i] - periapses[i - 1] - 2 * Math.PI);
    return { pts, periapses, precessions, m, a, e: e2, h2 };
  }
  var flammZ = (m, r) => 2 * Math.sqrt(Math.max(0, 2 * m * (r - 2 * m)));
  function properRadius(m, r) {
    if (r <= 2 * m) return 0;
    const a = Math.sqrt(r * (r - 2 * m));
    const b = 2 * m * Math.log((Math.sqrt(r) + Math.sqrt(r - 2 * m)) / Math.sqrt(2 * m));
    return a + b;
  }

  // js/core/core.js
  var K2 = (tex, display = false) => window.katex.renderToString(tex, { displayMode: display, throwOnError: false });
  var KD = (tex) => K2(tex, true);
  function renderInlineMath(text) {
    if (!window.katex) return text;
    return text.replace(/\$([^$\n]+)\$/g, (full, tex) => {
      try {
        return window.katex.renderToString(tex, { displayMode: false, throwOnError: false });
      } catch (e2) {
        return full;
      }
    });
  }
  function el2(html15) {
    const t2 = document.createElement("template");
    t2.innerHTML = html15.trim();
    return t2.content.firstElementChild;
  }
  function colormap(t2) {
    if (!isFinite(t2)) t2 = 0;
    t2 = Math.max(0, Math.min(1, t2));
    const stops = [[0.22, 0.45, 0.95], [0.25, 0.85, 0.95], [0.45, 0.9, 0.45], [0.98, 0.82, 0.25], [0.95, 0.3, 0.25]];
    const x = t2 * (stops.length - 1);
    const i = Math.min(Math.floor(x), stops.length - 2);
    const f = x - i;
    const a = stops[i], b = stops[i + 1];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  }
  var Viz = class {
    constructor(host, opts = {}) {
      this.host = host;
      const w = host.clientWidth || 700, h2 = host.clientHeight || 540;
      this.w = w;
      this.h = h2;
      this.scene = new tc();
      this.scene.background = new Kr(opts.background ?? 659234);
      this.camera = new ta(opts.fov ?? 50, w / h2, 0.01, 500);
      this.camera.position.set(...opts.cameraPos ?? [3.4, -2.6, 2.9]);
      this.camera.up.set(0, 0, 1);
      this.camera.lookAt(0, 0, 0);
      this.renderer = new Jl({ antialias: true });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(w, h2);
      host.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.target.set(...opts.target ?? [0, 0, 0]);
      if (opts.controls) Object.assign(this.controls, opts.controls);
      this.tick = opts.tick ?? (() => {
      });
      this.time = 0;
      this.clock = new Ap();
      this._raf = this.renderer.setAnimationLoop(() => {
        const dt2 = Math.min(this.clock.getDelta(), 0.05);
        this.time += dt2;
        try {
          this.tick(dt2, this.time);
        } catch (e2) {
          console.error("tick error", e2);
        }
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      });
      this._ro = new ResizeObserver(() => this.resize());
      this._ro.observe(host);
      addLights(this.scene);
    }
    resize() {
      const w = this.host.clientWidth || 1, h2 = this.host.clientHeight || 1;
      this.w = w;
      this.h = h2;
      this.camera.aspect = w / h2;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h2);
    }
    add(...o) {
      this.scene.add(...o);
    }
    remove(...o) {
      for (const x of o) this.scene.remove(x);
    }
    dispose() {
      this.renderer.setAnimationLoop(null);
      this._ro.disconnect();
      this.renderer.dispose();
      this.host.innerHTML = "";
    }
  };
  function addLights(scene) {
    scene.add(new op(8952268, 0.75));
    const d1 = new ap(16777215, 1.1);
    d1.position.set(4, -3, 6);
    scene.add(d1);
    const d2 = new ap(8961023, 0.45);
    d2.position.set(-5, 4, -2);
    scene.add(d2);
  }
  function meshOf(spec, opts = {}) {
    const nu2 = opts.nu ?? 72, nv = opts.nv ?? 96;
    const pos = [], nor = [], col = [];
    for (let i = 0; i <= nu2; i++) {
      const u2 = spec.u0 + (spec.u1 - spec.u0) * i / nu2;
      for (let j = 0; j <= nv; j++) {
        const v = spec.v0 + (spec.v1 - spec.v0) * j / nv;
        const d2 = surfaceData(spec, u2, v);
        pos.push(...d2.pos);
        nor.push(...d2.n);
        if (opts.colorFn) {
          const c6 = opts.colorFn(u2, v);
          col.push(c6[0], c6[1], c6[2]);
        }
      }
    }
    const idx = [];
    for (let i = 0; i < nu2; i++) for (let j = 0; j < nv; j++) {
      const a = i * (nv + 1) + j, b = a + nv + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const geo2 = new As();
    geo2.setIndex(idx);
    geo2.setAttribute("position", new vs(pos, 3));
    geo2.setAttribute("normal", new vs(nor, 3));
    if (opts.colorFn) geo2.setAttribute("color", new vs(col, 3));
    const mat = new sd({
      color: opts.color ?? 4157400,
      vertexColors: !!opts.colorFn,
      side: p,
      roughness: 0.6,
      metalness: 0.04,
      transparent: (opts.opacity ?? 1) < 1,
      opacity: opts.opacity ?? 1,
      wireframe: !!opts.wire
    });
    return new Xs(geo2, mat);
  }
  function gridLinesOn(spec, opts = {}) {
    const nu2 = opts.nu ?? 14, nv = opts.nv ?? 18;
    const polylines = [];
    for (let i = 0; i <= nu2; i++) {
      const u2 = spec.u0 + (spec.u1 - spec.u0) * i / nu2;
      const line = [];
      const N = spec.vWrap ? nv : 120;
      for (let j = 0; j <= N; j++) {
        const v = spec.v0 + (spec.v1 - spec.v0) * j / N;
        line.push(spec.f(u2, v));
      }
      polylines.push(line);
    }
    for (let j = 0; j <= nv; j++) {
      const v = spec.v0 + (spec.v1 - spec.v0) * j / nv;
      const line = [];
      const N = 90;
      for (let i = 0; i <= N; i++) {
        const u2 = spec.u0 + (spec.u1 - spec.u0) * i / N;
        line.push(spec.f(u2, v));
      }
      polylines.push(line);
    }
    return polylineSegments(polylines, opts.color ?? 2899822, opts.opacity ?? 0.9);
  }
  function polylineSegments(polylines, color = 16777215, opacity = 1) {
    const pos = [];
    for (const pl2 of polylines) {
      for (let i = 0; i < pl2.length - 1; i++) {
        pos.push(...pl2[i], ...pl2[i + 1]);
      }
    }
    const geo2 = new As();
    geo2.setAttribute("position", new vs(pos, 3));
    const mat = new hh({ color, transparent: opacity < 1, opacity });
    return new xh(geo2, mat);
  }
  function polyline(points, color = 16766814, width = 2) {
    const geo2 = new As();
    geo2.setAttribute("position", new vs(points.flat(), 3));
    const mat = new hh({ color, linewidth: width });
    return new gh(geo2, mat);
  }
  function updateLine(line, points) {
    line.geometry.setAttribute("position", new vs(points.flat(), 3));
    line.geometry.computeBoundingSphere();
  }
  function arrow(from, dir, color = 16739179, opts = {}) {
    const len = opts.len ?? (V.norm(dir) || 0.3);
    const d2 = V.normalize(dir);
    return new Gm(
      new Ui(...d2),
      new Ui(...from),
      len,
      color,
      opts.head ?? 0.14,
      opts.headW ?? 0.08
    );
  }
  function sphereMark(pos, color = 16766814, r = 0.055) {
    const m = new Xs(
      new Zu(r, 20, 14),
      new sd({ color, emissive: color, emissiveIntensity: 0.55 })
    );
    m.position.set(...pos);
    return m;
  }
  function tangentCoords(spec, u2, v, w) {
    const d2 = surfaceData(spec, u2, v);
    const a1 = V.dot(w, d2.du), a2 = V.dot(w, d2.dv);
    const det = d2.E * d2.G - d2.F * d2.F;
    if (det < 1e-14) return [0, 0];
    const cu2 = (a1 * d2.G - a2 * d2.F) / det;
    const cv = (d2.E * a2 - d2.F * a1) / det;
    return [cu2, cv];
  }
  function tangentToWorld(spec, u2, v, cu2, cv) {
    const d2 = surfaceData(spec, u2, v);
    return V.add(V.scale(d2.du, cu2), V.scale(d2.dv, cv));
  }
  function invertUV(spec, p2) {
    const [x, y, z] = p2;
    switch (spec.id) {
      case "sphere": {
        const r = V.norm(p2) || 1;
        return [Math.acos(Math.max(-1, Math.min(1, z / r))), Math.atan2(y, x)];
      }
      case "torus": {
        const R = 1.25, r = 0.5;
        const v = Math.atan2(y, x);
        const rhat = [Math.cos(v), Math.sin(v), 0];
        const q = V.sub(p2, V.scale(rhat, R));
        const u2 = Math.atan2(q[2], V.dot(q, rhat));
        return [u2, v];
      }
      case "paraboloid":
        return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
      case "saddle":
        return [x, y];
      case "pseudosphere": {
        let u2 = Math.max(0.05, Math.abs(z) + 0.5);
        for (let i = 0; i < 40; i++) {
          const f = u2 - Math.tanh(u2) - z;
          const fp = 1 - 1 / (Math.cosh(u2) * Math.cosh(u2));
          u2 -= f / (fp || 1e-9);
        }
        return [Math.max(0.05, u2), Math.atan2(y, x)];
      }
      case "cone": {
        const a = 0.5;
        const u2 = Math.sqrt(x * x + y * y) / a;
        return [u2, Math.atan2(y, x)];
      }
      case "flamm":
        return [Math.hypot(x, y), Math.atan2(y, x)];
      default: {
        let best = [0.5, 0.5], bd2 = Infinity;
        for (let i = 0; i <= 30; i++) for (let j = 0; j <= 40; j++) {
          const u2 = spec.u0 + (spec.u1 - spec.u0) * i / 30;
          const v = spec.v0 + (spec.v1 - spec.v0) * j / 40;
          const d2 = V.norm2(V.sub(spec.f(u2, v), p2));
          if (d2 < bd2) {
            bd2 = d2;
            best = [u2, v];
          }
        }
        return best;
      }
    }
  }
  function integrateField(spec, Fuv, u0, v0, T, dt2 = 0.02) {
    const pts = [];
    let u2 = u0, v = v0;
    const acc = (uu2, vv) => Fuv(uu2, vv);
    const steps = Math.round(T / dt2);
    for (let s = 0; s < steps; s++) {
      pts.push({ u: u2, v, p: spec.f(u2, v) });
      const k1 = acc(u2, v);
      const k2 = acc(u2 + dt2 / 2 * k1[0], v + dt2 / 2 * k1[1]);
      const k3 = acc(u2 + dt2 / 2 * k2[0], v + dt2 / 2 * k2[1]);
      const k4 = acc(u2 + dt2 * k3[0], v + dt2 * k3[1]);
      u2 += dt2 / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
      v += dt2 / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
      if (u2 < spec.u0 - 0.01 || u2 > spec.u1 + 0.01) break;
      if (!spec.vWrap && (v < spec.v0 - 1 || v > spec.v1 + 1)) break;
      if (!isFinite(u2) || !isFinite(v)) break;
    }
    return pts;
  }
  function shapeOperator(spec, u2, v) {
    const h2 = 1e-4;
    const d2 = surfaceData(spec, u2, v);
    const n2 = d2.n;
    const suu = V.sub(spec.f(u2 + h2, v), V.sub(V.scale(spec.f(u2, v), 2), spec.f(u2 - h2, v))).map((c6) => c6 / (h2 * h2));
    const svv = V.sub(spec.f(u2, v + h2), V.sub(V.scale(spec.f(u2, v), 2), spec.f(u2, v - h2))).map((c6) => c6 / (h2 * h2));
    const suv = V.sub(spec.f(u2 + h2, v + h2), V.sub(spec.f(u2 + h2, v - h2), V.sub(spec.f(u2 - h2, v + h2), spec.f(u2 - h2, v - h2)))).map((c6) => c6 / (4 * h2 * h2));
    const E = d2.E, F = d2.F, G = d2.G;
    const L2 = V.dot(n2, suu), M3 = V.dot(n2, suv), N = V.dot(n2, svv);
    const det = E * G - F * F;
    if (det < 1e-14) return null;
    const S = [
      [(L2 * G - M3 * F) / det, (M3 * G - N * F) / det],
      [(M3 * E - L2 * F) / det, (N * E - M3 * F) / det]
    ];
    const tr2 = S[0][0] + S[1][1], dd2 = S[0][0] * S[1][1] - S[0][1] * S[1][0];
    const disc = tr2 * tr2 / 4 - dd2;
    const sq = disc > 0 ? Math.sqrt(disc) : 0;
    const k1 = tr2 / 2 + sq, k2 = tr2 / 2 - sq;
    const eig = (k) => {
      const m00 = S[0][0] - k, m01 = S[0][1], m10 = S[1][0], m11 = S[1][1] - k;
      let a = m11, b = -m10;
      const n0 = Math.hypot(a, b);
      if (n0 < 1e-12) {
        a = -m01;
        b = m00;
      }
      return V.normalize(V.add(V.scale(d2.du, a), V.scale(d2.dv, b)));
    };
    return { k1, k2, e1: eig(k1), e2: eig(k2) };
  }
  function fieldZeroIndices(spec, fieldUV) {
    const zeros = [];
    const nu2 = 56, nv = 72;
    const uA = spec.id === "sphere" ? spec.u0 + 0.06 : spec.u0;
    const uB = spec.id === "sphere" ? spec.u1 - 0.06 : spec.u1;
    const du2 = (uB - uA) / nu2, dv = (spec.v1 - spec.v0) / nv;
    const wrap = (x, y) => {
      let q = y - x;
      while (q > Math.PI) q -= 2 * Math.PI;
      while (q <= -Math.PI) q += 2 * Math.PI;
      return q;
    };
    const wind = [];
    for (let i = 0; i < nu2; i++) {
      const u0c = uA + (i + 0.5) * du2;
      const u1c = u0c + du2;
      if (spec.id === "sphere" && u1c > uB + 1e-6) continue;
      for (let j = 0; j < nv; j++) {
        const v0c = spec.v0 + (j + 0.5) * dv;
        const v1c = v0c + dv;
        const um2 = (u0c + u1c) / 2, vm2 = (v0c + v1c) / 2;
        const d0 = surfaceData(spec, um2, vm2);
        const e1 = V.normalize(d0.du), e2 = V.normalize(V.cross(d0.n, d0.du));
        const ang = (u2, v) => {
          const [cu2, cv] = fieldUV(spec, u2, v);
          const w = tangentToWorld(spec, u2, v, cu2, cv);
          return Math.atan2(V.dot(w, e2), V.dot(w, e1));
        };
        const a0 = ang(u0c, v0c), a1 = ang(u1c, v0c), a2 = ang(u1c, v1c), a3 = ang(u0c, v1c);
        const wnd = (wrap(a0, a1) + wrap(a1, a2) + wrap(a2, a3) + wrap(a3, a0)) / (2 * Math.PI);
        const r = Math.round(wnd);
        if (Math.abs(r) >= 1) wind.push({ u: um2, v: vm2, index: r });
      }
    }
    const used = /* @__PURE__ */ new Set();
    for (let i = 0; i < wind.length; i++) {
      if (used.has(i)) continue;
      const cluster = [i];
      used.add(i);
      let changed = true;
      while (changed) {
        changed = false;
        for (let k = 0; k < wind.length; k++) {
          if (used.has(k)) continue;
          if (cluster.some((c6) => {
            const a = wind[c6], b = wind[k];
            return Math.hypot(a.u - b.u, a.v - b.v) < 2.2 * Math.max(du2, dv) && Math.sign(a.index) === Math.sign(b.index);
          })) {
            cluster.push(k);
            used.add(k);
            changed = true;
          }
        }
      }
      zeros.push({
        u: cluster.reduce((s, c6) => s + wind[c6].u, 0) / cluster.length,
        v: cluster.reduce((s, c6) => s + wind[c6].v, 0) / cluster.length,
        index: cluster.reduce((s, c6) => s + wind[c6].index, 0)
      });
    }
    if (spec.id === "sphere") {
      for (const north of [true, false]) {
        const eps = 0.06;
        let angle = 0, prev = null;
        const e1 = [1, 0, 0], e2 = [0, 1, 0];
        for (let i = 0; i <= 240; i++) {
          const t2 = i / 240 * 2 * Math.PI;
          const u2 = north ? Math.asin(eps) : Math.PI - Math.asin(eps);
          const [cu2, cv] = fieldUV(spec, u2, t2);
          const w = tangentToWorld(spec, u2, t2, cu2, cv);
          const a = Math.atan2(V.dot(w, e2), V.dot(w, e1));
          if (prev !== null) {
            let q = a - prev;
            while (q > Math.PI) q -= 2 * Math.PI;
            while (q <= -Math.PI) q += 2 * Math.PI;
            angle += q;
          }
          prev = a;
        }
        const idx = Math.round(angle / (2 * Math.PI));
        if (idx !== 0) zeros.push({ u: north ? 1e-3 : Math.PI - 1e-3, v: 0.3, index: idx });
      }
    }
    const merged = [];
    for (const z of zeros) {
      const f = merged.find((m) => Math.hypot(m.u - z.u, m.v - z.v) < 0.35);
      if (f) f.index += z.index;
      else merged.push(z);
    }
    return merged;
  }
  function enableDrag(viz9, mesh, spec, onUV) {
    const ray = new rm();
    const ndc = new ti();
    const dom = viz9.renderer.domElement;
    const rect = () => dom.getBoundingClientRect();
    const pick = (cx, cy) => {
      ndc.x = (cx - rect().left) / rect().width * 2 - 1;
      ndc.y = -((cy - rect().top) / rect().height) * 2 + 1;
      ray.setFromCamera(ndc, viz9.camera);
      const hits = ray.intersectObject(mesh, false);
      if (hits.length) {
        const p2 = hits[0].point;
        const uv = invertUV(spec, [p2.x, p2.y, p2.z]);
        onUV(uv[0], uv[1], p2);
        return true;
      }
      return false;
    };
    let dragging = false;
    const down = (e2) => {
      dragging = pick(e2.clientX, e2.clientY);
      if (dragging) dom.style.cursor = "grabbing";
    };
    const move = (e2) => {
      if (dragging) pick(e2.clientX, e2.clientY);
    };
    const up = () => {
      dragging = false;
      dom.style.cursor = "";
    };
    dom.addEventListener("pointerdown", down);
    dom.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      dom.removeEventListener("pointerdown", down);
      dom.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }
  var C2 = class {
    constructor(host, opts = {}) {
      this.host = host;
      this.canvas = document.createElement("canvas");
      this.canvas.className = "cv2d";
      host.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      this.xmin = opts.xmin ?? -2.4;
      this.xmax = opts.xmax ?? 2.4;
      this.ymin = opts.ymin ?? -2.4;
      this.ymax = opts.ymax ?? 2.4;
      this._ro = new ResizeObserver(() => this.resize());
      this._ro.observe(host);
      this.resize();
      this.onClick = null;
      this.onDrag = null;
      this._drag = null;
      this.canvas.addEventListener("pointerdown", (e2) => {
        const p2 = this.dataXY(e2);
        this._drag = true;
        this.onClick?.(p2, e2);
        this.canvas.setPointerCapture(e2.pointerId);
      });
      this.canvas.addEventListener("pointermove", (e2) => {
        const p2 = this.dataXY(e2);
        if (this._drag) this.onDrag?.(p2, e2);
        this.onMove?.(p2, e2);
      });
      const up = (e2) => {
        this._drag = false;
      };
      this.canvas.addEventListener("pointerup", up);
      this.canvas.addEventListener("pointercancel", up);
    }
    resize() {
      const w = this.host.clientWidth || 600, h2 = this.host.clientHeight || 460;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = w * dpr;
      this.canvas.height = h2 * dpr;
      this.canvas.style.width = w + "px";
      this.canvas.style.height = h2 + "px";
      this.w = w;
      this.h = h2;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.needDraw?.();
    }
    sx(x) {
      return (x - this.xmin) / (this.xmax - this.xmin) * this.w;
    }
    sy(y) {
      return (1 - (y - this.ymin) / (this.ymax - this.ymin)) * this.h;
    }
    dataXY(e2) {
      const r = this.canvas.getBoundingClientRect();
      const fx = (e2.clientX - r.left) / r.width, fy = (e2.clientY - r.top) / r.height;
      return { x: this.xmin + fx * (this.xmax - this.xmin), y: this.ymin + (1 - fy) * (this.ymax - this.ymin) };
    }
    clear(bg = "#0a0f22") {
      const c6 = this.ctx;
      c6.fillStyle = bg;
      c6.fillRect(0, 0, this.w, this.h);
    }
    axes(color = "#2a3a60") {
      const c6 = this.ctx;
      c6.strokeStyle = color;
      c6.lineWidth = 1;
      c6.beginPath();
      c6.moveTo(this.sx(this.xmin), this.sy(0));
      c6.lineTo(this.sx(this.xmax), this.sy(0));
      c6.moveTo(this.sx(0), this.sy(this.ymin));
      c6.lineTo(this.sx(0), this.sy(this.ymax));
      c6.stroke();
    }
    line(x1, y1, x2, y2, o = {}) {
      const c6 = this.ctx;
      c6.strokeStyle = o.color ?? "#ffffff";
      c6.lineWidth = o.width ?? 1.5;
      c6.setLineDash(o.dash ?? []);
      c6.beginPath();
      c6.moveTo(this.sx(x1), this.sy(y1));
      c6.lineTo(this.sx(x2), this.sy(y2));
      c6.stroke();
      c6.setLineDash([]);
    }
    poly(pts, o = {}) {
      const c6 = this.ctx;
      c6.beginPath();
      pts.forEach((p2, i) => i ? c6.lineTo(this.sx(p2[0]), this.sy(p2[1])) : c6.moveTo(this.sx(p2[0]), this.sy(p2[1])));
      if (o.fill) {
        c6.fillStyle = o.fill;
        c6.fill();
      }
      if (o.stroke) {
        c6.strokeStyle = o.stroke;
        c6.lineWidth = o.width ?? 1.5;
        c6.stroke();
      }
    }
    arrow(x1, y1, x2, y2, o = {}) {
      const c6 = this.ctx;
      c6.strokeStyle = o.color ?? "#ff6b6b";
      c6.lineWidth = o.width ?? 2;
      c6.beginPath();
      c6.moveTo(this.sx(x1), this.sy(y1));
      c6.lineTo(this.sx(x2), this.sy(y2));
      c6.stroke();
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const hs = o.head ?? 10;
      c6.beginPath();
      c6.moveTo(this.sx(x2), this.sy(y2));
      c6.lineTo(this.sx(x2 - hs * Math.cos(ang - 0.42)), this.sy(y2 - hs * Math.sin(ang - 0.42)));
      c6.moveTo(this.sx(x2), this.sy(y2));
      c6.lineTo(this.sx(x2 - hs * Math.cos(ang + 0.42)), this.sy(y2 - hs * Math.sin(ang + 0.42)));
      c6.stroke();
    }
    dot(x, y, o = {}) {
      const c6 = this.ctx;
      c6.fillStyle = o.color ?? "#ffd75e";
      c6.beginPath();
      c6.arc(this.sx(x), this.sy(y), o.r ?? 5, 0, Math.PI * 2);
      c6.fill();
      if (o.stroke) {
        c6.strokeStyle = o.stroke;
        c6.lineWidth = 1.5;
        c6.stroke();
      }
    }
    text(str, x, y, o = {}) {
      const c6 = this.ctx;
      c6.fillStyle = o.color ?? "#dbe4f5";
      c6.font = `${o.size ?? 13}px "PingFang SC","Microsoft YaHei",sans-serif`;
      c6.textAlign = o.align ?? "left";
      c6.textBaseline = o.base ?? "middle";
      c6.fillText(str, this.sx(x), this.sy(y));
    }
    clearHole(x, y, r) {
      const c6 = this.ctx;
      c6.save();
      c6.globalCompositeOperation = "destination-out";
      c6.beginPath();
      c6.arc(this.sx(x), this.sy(y), r * this.w / (this.xmax - this.xmin) || 12, 0, Math.PI * 2);
      c6.fill();
      c6.restore();
    }
    dispose() {
      this._ro.disconnect();
      this.host.innerHTML = "";
    }
  };
  function slider(panel, o) {
    const wrap = el2(`<label class="lbl">${o.label}<input type="range" step="${o.step ?? 0.01}" min="${o.min}" max="${o.max}" value="${o.value}"><span class="val"></span></label>`);
    const input = wrap.querySelector("input");
    const val = wrap.querySelector(".val");
    const fmt = o.fmt ?? ((x) => (+x).toFixed(2));
    const update = () => {
      val.textContent = fmt(+input.value);
    };
    input.addEventListener("input", () => {
      update();
      o.cb?.(+input.value);
    });
    update();
    panel.appendChild(wrap);
    return { el: wrap, set(v) {
      input.value = v;
      update();
    }, get: () => +input.value };
  }
  function btn(panel, o) {
    const b = el2(`<button class="btn${o.active ? " on" : ""}">${o.label}</button>`);
    b.addEventListener("click", () => o.cb?.());
    panel.appendChild(b);
    return { el: b, on: o.active ?? false };
  }
  function sel(panel, o) {
    const s = el2('<select class="sel"></select>');
    for (const [v, lbl] of Object.entries(o.options)) {
      const op2 = document.createElement("option");
      op2.value = v;
      op2.textContent = lbl;
      s.appendChild(op2);
    }
    s.value = o.value ?? Object.keys(o.options)[0];
    s.addEventListener("change", () => o.cb?.(s.value));
    panel.appendChild(s);
    return { el: s, set(v) {
      s.value = v;
      o.cb?.(v);
    } };
  }
  function readout(panel, label, value = "") {
    const d2 = el2(`<span class="lbl">${label}<span class="out"></span></span>`);
    const out = d2.querySelector(".out");
    out.textContent = value;
    panel.appendChild(d2);
    return { el: d2, set(v) {
      out.textContent = v;
    } };
  }

  // js/modules/m00-home.js
  var m00_home_exports = {};
  __export(m00_home_exports, {
    en: () => en,
    html: () => html,
    id: () => id,
    mount: () => mount,
    no: () => no2,
    teardown: () => teardown,
    zh: () => zh2
  });
  var id = "m00";
  var no2 = "\u{1F3E0}";
  var zh2 = "\u9996\u9875 \xB7 \u4F7F\u7528\u6307\u5357";
  var en = "Home & Guide";
  var MODS = [
    ["1", "\u6D41\u5F62\u4E0E\u5750\u6807\u5361", "Manifolds & Charts", "\u53C2\u6570\u5316 \u2194 \u5750\u6807\u5361\uFF1BS\xB2 \u7ACB\u4F53\u6295\u5F71\u56FE\u518C\u4E0E\u8F6C\u79FB\u51FD\u6570\uFF08\u53CD\u6F14\uFF09"],
    ["2", "\u5207\u7A7A\u95F4\u4E0E\u5207\u5411\u91CF", "Tangent Spaces", "\u5207\u5E73\u9762\u3001\u5750\u6807\u57FA\u3001\u5411\u91CF\u5206\u89E3\u3001\u5411\u91CF\u573A\u4E0E\u79EF\u5206\u66F2\u7EBF"],
    ["3", "\u5FAE\u5206\u5F62\u5F0F", "Differential Forms", "1-\u5F62\u5F0F=\u5E73\u884C\u5E73\u9762\u53E0\u3001df\u3001\u6954\u79EF\u4E0E 2-\u5F62\u5F0F"],
    ["4", "\u5916\u5FAE\u5206\u4E0E Stokes \u5B9A\u7406", "Exterior Derivative & Stokes", "Green \u6E10\u8FDB\u52A8\u753B\u3001d\u03B8 \u95ED\u800C\u4E0D\u6070\u5F53\u30013D \u65CB\u5EA6\u901A\u91CF"],
    ["5", "\u674E\u5BFC\u6570\u4E0E\u6D41", "Lie Derivatives & Flows", "\u6D41\u7684\u62D6\u62FD\u3001L_X Y\u3001\u674E\u62EC\u53F7 \u03B5-\u65B9\u5757"],
    ["6", "\u8054\u7EDC\u4E0E\u5E73\u884C\u79FB\u52A8", "Connections & Parallel Transport", "holonomy = \u222BK dA\u3001\u9525\u9762\u5C55\u5E73\u4E0E\u89D2\u4E8F\u635F"],
    ["7", "\u6D4B\u5730\u7EBF", "Geodesics", "\u7403\u9762\u5927\u5706\u3001\u73AF\u9762\u95ED/\u7A20\u5BC6\u3001\u6D4B\u5730\u504F\u79BB\uFF08Jacobi \u65B9\u7A0B\uFF09"],
    ["8", "\u66F2\u7387\u4E0E Gauss\u2013Bonnet", "Curvature & Gauss\u2013Bonnet", "K \u8272\u56FE\u3001\u4E3B\u66F2\u7387\u5706\u3001\u7403\u51A0\u79EF\u5206 \u2192 2\u03C0\u03C7\u3001\u591A\u9762\u4F53\u89D2\u4E8F\u635F"],
    ["9", "GR\uFF1A\u53F2\u74E6\u897F\u65F6\u7A7A", "Schwarzschild", "Flamm \u5D4C\u5165\u3001\u5149\u7EBF\u504F\u6298\uFF08\u5149\u5B50\u7403\uFF09\u3001\u8FD1\u65E5\u70B9\u8FDB\u52A8\u3001\u65F6\u95F4\u81A8\u80C0"],
    ["10", "\u6574\u4F53\u62D3\u6251\u4E0E de Rham \u4E0A\u540C\u8C03", "Topology & de Rham", "Poincar\xE9\u2013Hopf\uFF08\u6BDB\u7403\u5B9A\u7406\uFF09\u3001H\xB9(R\xB2\u2216{0}) \u5708\u914D\u5BF9"],
    ["11", "Hopf \u7EA4\u7EF4\u5316\uFF08\u5377\u2161\uFF09", "The Hopf Fibration", "S\xB3\u2192S\xB2 \u5706\u7EA4\u7EF4\u4E1B\u3001\u4E24\u4E24\u7F20\u7ED5\uFF08linking = 1\uFF09"],
    ["12", "Hodge \u661F\u7B97\u5B50\uFF08\u5377\u2161\uFF09", "The Hodge Star", "\u03B1\u2194\u22C6\u03B1 \u5E73\u9762\u65CB\u8F6C 90\xB0\u3001\u5411\u91CF\u2194\u9762\u5143\u3001Maxwell \u65B9\u7A0B"],
    ["13", "\u53CC\u66F2\u5E73\u9762 \xB7 Poincar\xE9 \u5706\u76D8", "Hyperbolic Plane", "\u6D4B\u5730\u7EBF=\u6B63\u4EA4\u5706\u5F27\u3001\u5E73\u884C\u516C\u8BBE\u5931\u6548\u3001\u5185\u89D2\u548C \u03C0\u2212\u9762\u79EF\u3001{p,q} \u9576\u5D4C"]
  ];
  function html() {
    const cards = MODS.map(([no16, zh16, en15, desc], i) => `
    <a class="home-card" href="#m0${i + 1}">
      <div class="home-no">${no16}</div>
      <div><div class="home-zh">${zh16}</div><div class="home-en">${en15}</div>
      <div class="home-desc">${desc}</div></div>
    </a>`).join("");
    return `
  <h1 class="mod-title">\u6574\u4F53\u5FAE\u5206\u51E0\u4F55 \xB7 \u4EA4\u4E92\u5F0F\u53EF\u89C6\u5316</h1>
  <div class="mod-sub">\u914D\u5408\u6881\u707F\u5F6C\u300A\u5FAE\u5206\u51E0\u4F55\u5165\u95E8\u4E0E\u5E7F\u4E49\u76F8\u5BF9\u8BBA\u300B</div>
  <div class="mod-intro">
    <p>\u672C\u7F51\u7AD9\u7528 3D \u573A\u666F\u4E0E\u6570\u503C\u52A8\u753B\u628A<b>\u5FAE\u5206\u51E0\u4F55\u7684\u6838\u5FC3\u6982\u5FF5</b>\u753B\u51FA\u6765\uFF1A\u4ECE"\u6D41\u5F62\u5230\u5E95\u662F\u4EC0\u4E48"\u5230"\u66F2\u7387\u4E3A\u4EC0\u4E48\u80FD\u8BA9\u5E73\u884C\u79FB\u52A8\u7684\u5411\u91CF\u8F6C\u4E00\u5708"\uFF0C\u518D\u5230\u53F2\u74E6\u897F\u65F6\u7A7A\u7684\u5149\u7EBF\u504F\u6298\u4E0E\u8FD1\u65E5\u70B9\u8FDB\u52A8\u3002\u6240\u6709\u6F14\u793A\u90FD\u57FA\u4E8E\u771F\u5B9E\u7684\u6570\u503C\u8BA1\u7B97\uFF08\u6D4B\u5730\u7EBF\u65B9\u7A0B\u3001\u5E73\u884C\u79FB\u52A8\u3001Gauss \u66F2\u7387\u3001Stokes \u79EF\u5206\u7B49\uFF09\uFF0C\u4E0D\u662F\u793A\u610F\u56FE\u3002</p>
  </div>
  <div class="home-grid">${cards}</div>

  <div class="fcard"><span class="fcard-label">\u5B66\u4E60\u8DEF\u7EBF\uFF08\u6982\u5FF5\u4F9D\u8D56\uFF09</span>
  <div class="roadmap">
    <div class="rm-col"><b>\u5FAE\u5206\u6D41\u5F62\u57FA\u7840</b><span>1 \u6D41\u5F62\u4E0E\u5750\u6807\u5361<br>2 \u5207\u7A7A\u95F4\u4E0E\u5411\u91CF\u573A</span></div>
    <div class="rm-col"><b>\u5FAE\u5206\u5F62\u5F0F</b><span>3 \u5FAE\u5206\u5F62\u5F0F<br>4 \u5916\u5FAE\u5206\u4E0E Stokes</span></div>
    <div class="rm-col"><b>\u6D41\u4E0E\u53D8\u6362</b><span>5 \u674E\u5BFC\u6570\u4E0E\u6D41</span></div>
    <div class="rm-col"><b>\u8054\u7EDC\u4E0E\u66F2\u7387</b><span>6 \u5E73\u884C\u79FB\u52A8<br>7 \u6D4B\u5730\u7EBF<br>8 \u66F2\u7387\u4E0E Gauss\u2013Bonnet</span></div>
    <div class="rm-col"><b>\u6574\u4F53\u4E0E\u5E94\u7528</b><span>10 \u4E0A\u540C\u8C03\u4E0E\u62D3\u6251<br>9 \u5E7F\u4E49\u76F8\u5BF9\u8BBA</span></div>
  </div>
  <p style="font-size:13px;color:#c9d6ee;margin-top:8px">\u4E3B\u7EBF\uFF1A\u5C40\u90E8\uFF08\u5750\u6807 \u2192 \u5F20\u91CF/\u5F62\u5F0F \u2192 \u5BFC\u6570\uFF09\u2192 \u6574\u4F53\uFF08holonomy\u3001Gauss\u2013Bonnet\u3001\u4E0A\u540C\u8C03\uFF09\u2192 \u7269\u7406\uFF08GR\uFF09\u3002\u6A21\u5757 9 \u7684\u6D4B\u5730\u7EBF\u65B9\u7A0B\u76F4\u63A5\u590D\u7528\u6A21\u5757 7 \u7684\u6570\u503C\u79EF\u5206\u5668\uFF1B\u6A21\u5757 10 \u7684\u89D2\u4E8F\u635F\u4E0E\u6A21\u5757 6 \u7684 holonomy \u662F\u540C\u4E00\u4EF6\u4E8B\u7684\u4E24\u79CD\u8BB2\u6CD5\u3002</p>
  </div>

  <div class="fcard"><span class="fcard-label">\u4F7F\u7528\u63D0\u793A</span>
  <ul style="font-size:13.5px;color:#c9d6ee;padding-left:18px;line-height:2">
    <li>3D \u573A\u666F\uFF1A<b>\u5DE6\u952E\u62D6\u62FD</b>\u65CB\u8F6C\u89C6\u89D2\uFF0C<b>\u6EDA\u8F6E</b>\u7F29\u653E\uFF0C<b>\u53F3\u952E</b>\u5E73\u79FB\uFF1B\u591A\u6570\u66F2\u9762\u4E0A\u53EF\u76F4\u63A5<b>\u62D6\u52A8\u6807\u8BB0\u70B9</b>\u3002</li>
    <li>2D \u753B\u5E03\uFF1A\u76F4\u63A5\u70B9\u51FB/\u62D6\u52A8\uFF1B\u6A21\u5757 10 \u7684\u591A\u8FB9\u5F62\u9876\u70B9\u53EF\u62D6\u52A8\u3002</li>
    <li>\u6240\u6709\u6ED1\u6746\u3001\u4E0B\u62C9\u3001\u6309\u94AE\u5373\u65F6\u751F\u6548\uFF1B\u5E26 \u25B6 \u7684\u6309\u94AE\u64AD\u653E\u52A8\u753B\u3002</li>
    <li>\u516C\u5F0F\u7531 KaTeX \u6E32\u67D3\uFF0C\u672F\u8BED\u91C7\u7528\u4E2D\u82F1\u5BF9\u7167\uFF08\u4E0E\u6559\u6750\u4E00\u81F4\uFF09\u3002</li>
    <li>\u6570\u5B66\u5185\u6838\uFF08\u66F2\u9762\u3001Christoffel \u7B26\u53F7\u3001\u6D4B\u5730\u7EBF\u3001\u5E73\u884C\u79FB\u52A8\uFF09\u5168\u90E8\u5728 <code>js/core/math3d.js</code> \u4E2D\uFF0C\u5E76\u6709 Node \u6570\u503C\u6D4B\u8BD5\uFF08<code>tests/</code>\uFF09\u3002</li>
  </ul>
  </div>
  `;
  }
  function mount() {
  }
  function teardown() {
  }

  // js/modules/m01-charts.js
  var m01_charts_exports = {};
  __export(m01_charts_exports, {
    en: () => en2,
    html: () => html2,
    id: () => id2,
    mount: () => mount2,
    no: () => no3,
    teardown: () => teardown2,
    zh: () => zh3
  });
  var id2 = "m01";
  var no3 = "1";
  var zh3 = "\u6D41\u5F62\u4E0E\u5750\u6807\u5361";
  var en2 = "Manifolds & Charts";
  var vizA = null;
  var vizB = null;
  var c2A = null;
  var c2B = null;
  var cleanA = [];
  var cleanB = [];
  var state = { surface: "sphere", u: 1.1, v: 0.8 };
  var sB = { theta: 1.1, phi: 0.9, chart: "both" };
  var animTimer = null;
  function html2() {
    return `
  <h1 class="mod-title">1. \u6D41\u5F62\u4E0E\u5750\u6807\u5361</h1>
  <div class="mod-sub">Manifolds &amp; Charts</div>
  <div class="mod-intro">
    <p><b>\u6D41\u5F62</b>\uFF08manifold\uFF09$M$ \u662F"\u5C40\u90E8\u4E0A\u540C\u80DA\u4E8E $\\mathbb{R}^n$"\u7684\u7A7A\u95F4\uFF1A\u6BCF\u4E00\u70B9 $p$ \u90FD\u6709\u4E00\u4E2A\u90BB\u57DF $U$ \u548C\u5750\u6807\u5361\uFF08chart\uFF09$\\varphi: U \\to \\mathbb{R}^n$\uFF0C\u5B83\u628A $p$ \u9644\u8FD1\u6620\u5230\u5750\u6807 $(u^1,\\dots,u^n)$\u3002\u6240\u6709\u5750\u6807\u5361\u7684\u5168\u4F53\u6784\u6210<b>\u56FE\u518C</b>\uFF08atlas\uFF09\uFF1B\u4E24\u5F20\u5750\u6807\u5361\u91CD\u53E0\u5904 $U_\\alpha \\cap U_\\beta$ \u4E0A\u6709\u5149\u6ED1\u7684<b>\u8F6C\u79FB\u51FD\u6570</b>\uFF08transition map\uFF09$\\tau = \\varphi_\\beta \\circ \\varphi_\\alpha^{-1}$\u3002\u66F2\u9762 $\\sigma(u,v) \\subset \\mathbb{R}^3$ \u7684\u53C2\u6570\u5316\u4E4B\u9006\u5C31\u662F\u5750\u6807\u5361\u2014\u2014\u8FD9\u662F\u7406\u89E3\u6D41\u5F62\u6700\u76F4\u89C2\u7684\u5165\u53E3\u3002</p>
  </div>
  <div class="panel-row first">
    <button class="btn on" data-tab="A">A \xB7 \u53C2\u6570\u5316\u4E0E\u5750\u6807\u5361</button>
    <button class="btn" data-tab="B">B \xB7 S\xB2 \u7ACB\u4F53\u6295\u5F71\u4E0E\u56FE\u518C</button>
  </div>
  <div id="tabA">
    <div class="split">
      <div><div class="stage" id="stageA"></div>
        <div class="panel"><div id="panelA"></div></div>
      </div>
      <div class="side2">
        <div class="stage" id="stageA2" style="height:320px"></div>
        <div class="fcard">${KD("\\sigma(u,v): \\; (u,v) \\mapsto (x,y,z) \\in \\mathbb{R}^3")}
        ${KD("\\varphi = \\sigma^{-1}: \\; p \\mapsto (u,v) \\in \\mathbb{R}^2 \\quad \\text{\uFF08\u5750\u6807\u5361\uFF09}")}</div>
      </div>
    </div>
  </div>
  <div id="tabB" style="display:none">
    <div class="mod-intro">
      <p>$S^2$ \u4E0D\u80FD\u53EA\u7528\u4E00\u5F20\u5750\u6807\u5361\u8986\u76D6\uFF08\u7D27\u81F4\uFF09\uFF0C\u4F46\u4E24\u5F20<b>\u7ACB\u4F53\u6295\u5F71</b>\uFF08stereographic projection\uFF09\u56FE\u5361\u5373\u53EF\uFF1A\u56FE\u5361 $\\varphi_1$ \u4ECE\u5317\u6781 $N$ \u6295\u5F71\uFF0C\u5B9A\u4E49\u5728 $U_1 = S^2 \\setminus\\{N\\}$\uFF1B\u56FE\u5361 $\\varphi_2$ \u4ECE\u5357\u6781 $S$ \u6295\u5F71\uFF0C\u5B9A\u4E49\u5728 $U_2 = S^2 \\setminus\\{S\\}$\u3002\u5728\u91CD\u53E0\u533A $U_1 \\cap U_2$ \u4E0A\u8F6C\u79FB\u51FD\u6570\u662F<b>\u53CD\u6F14</b>\uFF08inversion\uFF09\u2014\u2014\u5149\u6ED1\u4E14\u975E\u5E73\u51E1\uFF0C\u8FD9\u6B63\u8BF4\u660E $S^2$ \u662F\uFF08\u975E\u5E73\u51E1\u7684\uFF09\u5FAE\u5206\u6D41\u5F62\u3002</p>
    </div>
    <div class="split">
      <div><div class="stage" id="stageB"></div>
        <div class="panel"><div id="panelB"></div></div>
      </div>
      <div class="side2">
        <div class="stage" id="stageB2" style="height:340px"></div>
        <div class="fcard">${KD("\\varphi_1: \\; (x,y) = \\left(\\cot\\tfrac{\\theta}{2}\\cos\\varphi,\\; \\cot\\tfrac{\\theta}{2}\\sin\\varphi\\right)")}
        ${KD("\\varphi_2: \\; (x,y) = \\left(\\tan\\tfrac{\\theta}{2}\\cos\\varphi,\\; \\tan\\tfrac{\\theta}{2}\\sin\\varphi\\right)")}
        ${KD("\\tau = \\varphi_2 \\circ \\varphi_1^{-1}: \\; u \\mapsto \\frac{u}{|u|^2} \\quad (\\text{\u53CD\u6F14})")}</div>
      </div>
    </div>
  </div>
  `;
  }
  function mount2(host) {
    const tabA = host.querySelector("#tabA");
    const tabB = host.querySelector("#tabB");
    const tabs = host.querySelectorAll("[data-tab]");
    const switchTab = (t2) => {
      for (const b of tabs) b.classList.toggle("on", b.dataset.tab === t2);
      tabA.style.display = t2 === "A" ? "" : "none";
      tabB.style.display = t2 === "B" ? "" : "none";
      if (t2 === "A") {
        vizA?.resize();
        c2A?.resize();
      } else {
        vizB?.resize();
        c2B?.resize();
      }
    };
    for (const b of tabs) b.addEventListener("click", () => switchTab(b.dataset.tab));
    setupA(host);
    setupB(host);
  }
  function setupA(host) {
    const stage = host.querySelector("#stageA");
    const panel = host.querySelector("#panelA");
    vizA = new Viz(stage, { cameraPos: [3.6, -2.8, 2.6] });
    let mesh = null, grid = null, marker = null, dragOff6 = null;
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2", torus: "\u73AF\u9762 T\xB2", paraboloid: "\u65CB\u8F6C\u629B\u7269\u9762", saddle: "\u978D\u9762 z=xy" },
      cb: (sid) => {
        state.surface = sid;
        rebuild();
        clampUV();
        syncAll();
      }
    });
    const uSl = slider(panel, { label: "u", min: 0, max: Math.PI, step: 0.01, value: state.u, cb: (v) => {
      state.u = v;
      syncAll();
    } });
    const vSl = slider(panel, { label: "v", min: 0, max: 2 * Math.PI, step: 0.01, value: state.v, cb: (v) => {
      state.v = v;
      syncAll();
    } });
    const out = readout(panel, "\u03C3(u,v) = ");
    function rebuild() {
      vizA.remove(mesh, grid, marker);
      dragOff6?.();
      const spec = SURFACES[state.surface];
      mesh = meshOf(spec, { color: 4157400, opacity: 0.92 });
      grid = gridLinesOn(spec);
      marker = sphereMark([0, 0, 0], 16766814);
      vizA.add(mesh, grid, marker);
      uSl.el.querySelector("input").min = spec.u0;
      uSl.el.querySelector("input").max = spec.u1;
      vSl.el.querySelector("input").min = spec.v0;
      vSl.el.querySelector("input").max = spec.v1;
      dragOff6 = enableDrag(vizA, mesh, spec, (u2, v) => {
        state.u = u2;
        state.v = v;
        syncAll();
      });
    }
    function clampUV() {
      const spec = SURFACES[state.surface];
      state.u = Math.min(Math.max(state.u, spec.u0), spec.u1);
      state.v = Math.min(Math.max(state.v, spec.v0), spec.v1);
    }
    function syncAll() {
      clampUV();
      const spec = SURFACES[state.surface];
      uSl.set(state.u);
      vSl.set(state.v);
      const p2 = spec.f(state.u, state.v);
      marker.position.set(...p2);
      out.set(`(${p2.map((x) => x.toFixed(3)).join(", ")})`);
      c2A?.mark(state.u, state.v);
    }
    rebuild();
    clampUV();
    syncAll();
    cleanA.push(() => dragOff6?.());
    const host2 = host.querySelector("#stageA2");
    c2A = new C2(host2, { xmin: 0, xmax: 1, ymin: 0, ymax: 1 });
    c2A.needDraw = () => syncAll();
    c2A.mark = (u2, v) => {
      const spec = SURFACES[state.surface];
      const x = (u2 - spec.u0) / (spec.u1 - spec.u0);
      const y = (v - spec.v0) / (spec.v1 - spec.v0);
      c2A._mx = x;
      c2A._my = y;
      drawDomain();
    };
    c2A.onClick = (p2) => {
      const spec = SURFACES[state.surface];
      state.u = spec.u0 + p2.x * (spec.u1 - spec.u0);
      state.v = spec.v0 + p2.y * (spec.v1 - spec.v0);
      syncAll();
    };
    c2A.onDrag = c2A.onClick;
    function drawDomain() {
      const c6 = c2A, spec = SURFACES[state.surface];
      c6.clear();
      c6.ctx.strokeStyle = "#233356";
      c6.ctx.lineWidth = 1;
      for (let i = 0; i <= 8; i++) {
        const x = i / 8;
        c6.line(x, 0, x, 1, { color: "#1c2a4a" });
        c6.line(0, i / 8, 1, i / 8, { color: "#1c2a4a" });
      }
      c6.ctx.strokeStyle = "#4a6ab0";
      c6.ctx.lineWidth = 2;
      c6.ctx.strokeRect(c6.sx(0), c6.sy(1), c6.sx(1) - c6.sx(0), c6.sy(0) - c6.sy(1));
      c6.text(`u \u2208 [${spec.u0.toFixed(2)}, ${spec.u1.toFixed(2)}]`, 0.02, 0.04, { color: "#8fa2c8", size: 12 });
      c6.text(`v \u2208 [${spec.v0.toFixed(2)}, ${spec.v1.toFixed(2)}]`, 0.98, 0.5, { align: "right", color: "#8fa2c8", size: 12 });
      if (c6._mx !== void 0) {
        c6.dot(c6._mx, c6._my, { color: "#ffd75e", r: 6, stroke: "#fff" });
        c6.text("(u,v)", c6._mx + 0.02, c6._my + 0.05, { color: "#ffd75e", size: 13 });
      }
      c6.text("\u53C2\u6570\u57DF (u,v) \xB7 \u70B9\u51FB/\u62D6\u52A8 \u2192 \u66F2\u9762\u4E0A\u7684\u70B9", 0.5, 0.96, { align: "center", color: "#8fa2c8", size: 12 });
    }
    drawDomain();
    c2A.mark(state.u, state.v);
  }
  function setupB(host) {
    const stage = host.querySelector("#stageB");
    const panel = host.querySelector("#panelB");
    vizB = new Viz(stage, { cameraPos: [2.6, -2.2, 2.2] });
    const spec = SURFACES.sphere;
    const sMesh = meshOf(spec, { color: 4881112, opacity: 0.85 });
    const sGrid = gridLinesOn(spec, { color: 2899822, opacity: 0.5 });
    vizB.add(sMesh, sGrid);
    const plane = new Xs(
      new ru(2.6, 64),
      new es({ color: 1713224, transparent: true, opacity: 0.55, side: p })
    );
    plane.position.z = 0;
    vizB.add(plane);
    const planeRing = polyline(circle32(2.4), 3360638, 1);
    vizB.add(planeRing);
    const mN = sphereMark([0, 0, 1.02], 16732754, 0.07);
    const mS = sphereMark([0, 0, -1.02], 5227519, 0.07);
    vizB.add(mN, mS);
    const labelN = textSprite("N (\u5317\u6781, \u56FE1\u5207\u9664)", "#ff8a8a");
    labelN.position.set(0.28, 0, 1.18);
    vizB.add(labelN);
    const mP = sphereMark([0, 0, 0], 16766814, 0.06);
    const mU = sphereMark([0, 0, 0], 16752451, 0.055);
    vizB.add(mP, mU);
    const lineGeo = new As();
    const projLine = new gh(lineGeo, new hh({ color: 16752451, transparent: true, opacity: 0.85 }));
    vizB.add(projLine);
    const dashGeo = new As();
    const dashLine = new gh(dashGeo, new dd({ color: 16766814, dashSize: 0.05, gapSize: 0.05 }));
    vizB.add(dashLine);
    const uSl = slider(panel, { label: "\u03B8 (\u6781\u89D2)", min: 0.1, max: Math.PI - 0.1, step: 0.01, value: sB.theta, fmt: (v) => v.toFixed(2) + " rad", cb: (v) => {
      sB.theta = v;
      syncB();
    } });
    const phiSl = slider(panel, { label: "\u03C6 (\u65B9\u4F4D\u89D2)", min: 0, max: 2 * Math.PI, step: 0.01, value: sB.phi, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      sB.phi = v;
      syncB();
    } });
    const chSel = sel(panel, {
      value: "both",
      options: { both: "\u53CC\u56FE\u5361\u5BF9\u6BD4\uFF08\u91CD\u53E0\u533A\u8F6C\u79FB\u51FD\u6570\uFF09", c1: "\u4EC5\u56FE\u5361 \u03C6\u2081\uFF08\u53BB\u5317\u6781\uFF09", c2: "\u4EC5\u56FE\u5361 \u03C6\u2082\uFF08\u53BB\u5357\u6781\uFF09" },
      cb: (v) => {
        sB.chart = v;
        syncB();
      }
    });
    const outU = readout(panel, "\u56FE\u5361\u5750\u6807 u = ");
    const outT = readout(panel, "\u8F6C\u79FB\u51FD\u6570 v = u/|u|\xB2 = ");
    const playBtn = btn(panel, { label: "\u25B6 \u6CBF\u7EAC\u5708\u52A8\u753B\uFF08\u03B8 \u56FA\u5B9A\uFF09", cb: () => toggleAnim() });
    function circle32(r, n2 = 96) {
      const pts = [];
      for (let i = 0; i <= n2; i++) {
        const a = i / n2 * 2 * Math.PI;
        pts.push([r * Math.cos(a), r * Math.sin(a), 0]);
      }
      return pts;
    }
    function syncB() {
      const th2 = sB.theta, ph2 = sB.phi;
      const p2 = [Math.sin(th2) * Math.cos(ph2), Math.sin(th2) * Math.sin(ph2), Math.cos(th2)];
      mP.position.set(...p2);
      const t2 = 1 / (1 - p2[2]);
      const u2 = [p2[0] * t2, p2[1] * t2, 0];
      mU.position.set(...u2);
      updateLine(projLine, [[0, 0, 1], [u2[0], u2[1], 0]]);
      updateLine(dashLine, [[0, 0, 1], [p2[0], p2[1], p2[2]]]);
      dashLine.computeLineDistances();
      const c12 = [Math.cos(ph2) * Math.cos(th2 / 2) / Math.sin(th2 / 2), Math.sin(ph2) * Math.cos(th2 / 2) / Math.sin(th2 / 2)];
      const c2v = [Math.cos(ph2) * Math.sin(th2 / 2) / Math.cos(th2 / 2), Math.sin(ph2) * Math.sin(th2 / 2) / Math.cos(th2 / 2)];
      outU.set(`(${c12[0].toFixed(3)}, ${c12[1].toFixed(3)})`);
      outT.set(`(${c2v[0].toFixed(3)}, ${c2v[1].toFixed(3)})`);
      c2B?.draw(chSel.el.value === "c1" ? null : c12, chSel.el.value === "c2" ? null : c2v, th2, ph2);
    }
    cleanB.push(enableDrag(vizB, sMesh, spec, (u2, v) => {
      sB.theta = u2;
      sB.phi = v;
      syncB();
    }));
    const host2 = host.querySelector("#stageB2");
    c2B = new C2(host2, { xmin: -2.7, xmax: 2.7, ymin: -2.7, ymax: 2.7 });
    c2B.needDraw = () => syncB();
    c2B.draw = (uPt, vPt, th2, ph2) => {
      const c6 = c2B;
      c6.clear();
      c6.axes();
      for (let r = 0.5; r <= 2.5; r += 0.5) {
        const pts = [];
        for (let i = 0; i <= 72; i++) {
          const a = i / 72 * 2 * Math.PI;
          pts.push([r * Math.cos(a), r * Math.sin(a)]);
        }
        c6.poly(pts, { stroke: r === 1 ? "#33507f" : "#1d2b4e" });
      }
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * 2 * Math.PI;
        c6.line(0, 0, 2.55 * Math.cos(a), 2.55 * Math.sin(a), { color: "#1d2b4e" });
      }
      c6.text("|u| = 1\uFF08\u53CD\u6F14\u5355\u4F4D\u5706\uFF09", 1.05, 0.12, { color: "#33507f", size: 11 });
      if (uPt) {
        c6.dot(uPt[0], uPt[1], { color: "#ff9f43", r: 6, stroke: "#fff" });
        c6.text("u = \u03C6\u2081(p)", uPt[0], uPt[1] + 0.22, { color: "#ff9f43", size: 13 });
        const vv = [uPt[0] / (uPt[0] ** 2 + uPt[1] ** 2), uPt[1] / (uPt[0] ** 2 + uPt[1] ** 2)];
        if (vPt) {
          c6.dot(vv[0], vv[1], { color: "#7ee0a3", r: 6, stroke: "#fff" });
          c6.line(uPt[0], uPt[1], vv[0], vv[1], { color: "#7ee0a3", dash: [5, 4], width: 1.5 });
          c6.text("v = \u03C4(u) = u/|u|\xB2", vv[0], vv[1] + 0.24, { color: "#7ee0a3", size: 13 });
        }
      }
      if (vPt) {
        c6.dot(vPt[0], vPt[1], { color: "#4fc3ff", r: 5 });
        c6.text("\u03C6\u2082(p)", vPt[0], vPt[1] - 0.22, { color: "#4fc3ff", size: 12 });
      }
      c6.text("\u56FE\u5361\u5E73\u9762\uFF08\u7ACB\u4F53\u6295\u5F71\uFF09", 0, 2.58, { align: "center", color: "#8fa2c8", size: 12 });
    };
    function toggleAnim() {
      if (animTimer) {
        clearInterval(animTimer);
        animTimer = null;
        playBtn.el.classList.remove("on");
        playBtn.el.textContent = "\u25B6 \u6CBF\u7EAC\u5708\u52A8\u753B\uFF08\u03B8 \u56FA\u5B9A\uFF09";
      } else {
        playBtn.el.classList.add("on");
        playBtn.el.textContent = "\u23F8 \u6682\u505C\u52A8\u753B";
        animTimer = setInterval(() => {
          sB.phi = (sB.phi + 0.02) % (2 * Math.PI);
          syncB();
        }, 16);
      }
    }
    syncB();
  }
  function textSprite(text, color) {
    const cv = document.createElement("canvas");
    cv.width = 512;
    cv.height = 64;
    const c6 = cv.getContext("2d");
    c6.font = '40px "PingFang SC","Microsoft YaHei",sans-serif';
    c6.fillStyle = color;
    c6.textAlign = "center";
    c6.fillText(text, 256, 44);
    const tex = new Uh(cv);
    tex.colorSpace = qe;
    const sp2 = new vc(new rc({ map: tex, transparent: true, depthTest: false }));
    sp2.scale.set(1.6, 0.2, 1);
    return sp2;
  }
  function teardown2() {
    if (animTimer) {
      clearInterval(animTimer);
      animTimer = null;
    }
    for (const f of cleanA) f();
    for (const f of cleanB) f();
    cleanA = [];
    cleanB = [];
    vizA?.dispose();
    vizA = null;
    vizB?.dispose();
    vizB = null;
    c2A?.dispose();
    c2A = null;
    c2B?.dispose();
    c2B = null;
  }

  // js/modules/m02-tangent.js
  var m02_tangent_exports = {};
  __export(m02_tangent_exports, {
    en: () => en3,
    html: () => html3,
    id: () => id3,
    mount: () => mount3,
    no: () => no4,
    teardown: () => teardown3,
    zh: () => zh4
  });
  var id3 = "m02";
  var no4 = "2";
  var zh4 = "\u5207\u7A7A\u95F4\u4E0E\u5207\u5411\u91CF";
  var en3 = "Tangent Spaces & Vector Fields";
  var viz = null;
  var cClean = [];
  var state2 = { surface: "sphere", u: 1.15, v: 0.7, a: 0.85, b: 0.45, field: "rot", playing: false, t: 0 };
  var FIELDS = {
    rot: { label: "\u65CB\u8F6C\u573A V = \u1E91 \xD7 p", uv: (spec, u2, v) => {
      const p2 = spec.f(u2, v);
      return tangentCoords(spec, u2, v, [-p2[1], p2[0], 0]);
    } },
    du: { label: "\u5750\u6807\u57FA\u573A \u2202/\u2202u", uv: () => [1, 0] },
    dv: { label: "\u5750\u6807\u57FA\u573A \u2202/\u2202v", uv: () => [0, 1] },
    diag: { label: "\u5BF9\u89D2\u573A \u2202/\u2202u + 0.8 \u2202/\u2202v", uv: () => [1, 0.8] },
    gradz: { label: "\u9AD8\u5EA6\u68AF\u5EA6\u573A \u2207z\uFF08\u6295\u5F71\uFF09", uv: (spec, u2, v) => tangentCoords(spec, u2, v, [0, 0, 1]) },
    lox: { label: "\u659C\u9A76\u573A\uFF08\u7B49\u89D2\uFF09", uv: (spec, u2, v) => {
      return [1, 1.6 / Math.max(Math.sin(u2), 0.08)];
    } }
  };
  function html3() {
    return `
  <h1 class="mod-title">2. \u5207\u7A7A\u95F4\u4E0E\u5207\u5411\u91CF</h1>
  <div class="mod-sub">Tangent Spaces &amp; Vector Fields</div>
  <div class="mod-intro">
    <p>\u6D41\u5F62 $M$ \u5728\u70B9 $p$ \u5904\u7684<b>\u5207\u7A7A\u95F4</b> $T_p M$ \u662F\u6240\u6709\u8FC7 $p$ \u7684\u66F2\u7EBF\u5207\u5411\u91CF\u6784\u6210\u7684\u7EBF\u6027\u7A7A\u95F4\uFF08\u7EF4\u6570 = $\\dim M$\uFF09\u3002\u7ED9\u5B9A\u5750\u6807\u5361 $(u,v)$\uFF0C$\\partial_u = \\frac{\\partial\\sigma}{\\partial u}$\u3001$\\partial_v = \\frac{\\partial\\sigma}{\\partial v}$ \u6784\u6210 $T_p M$ \u7684<b>\u5750\u6807\u57FA</b>\uFF0C\u4EFB\u610F\u5207\u5411\u91CF\u53EF\u5206\u89E3\u4E3A $X = X^u\\,\\partial_u + X^v\\,\\partial_v$\u3002\u5207\u5411\u91CF\u4E5F\u5C31\u662F<b>\u65B9\u5411\u5BFC\u6570</b>\u7B97\u5B50 $X(f) = X^\\mu \\partial_\\mu f$\u3002\u628A\u573A $X$ \u7684\u79EF\u5206\u66F2\u7EBF\u89E3\u51FA $\\dot\\gamma(t) = X_{\\gamma(t)}$\uFF0C\u5C31\u5F97\u5230\u6D41\uFF08flow\uFF09\u2014\u2014\u4E0B\u9762\u7684\u5411\u91CF\u573A\u7BAD\u5934\u548C\u7C92\u5B50\u52A8\u753B\u5C55\u793A\u7684\u6B63\u662F\u8FD9\u4E00\u70B9\u3002</p>
  </div>
  <div class="split">
    <div>
      <div class="stage" id="stage"><span class="stage-tag">\u62D6\u62FD\u7403\u9762/\u73AF\u9762/\u629B\u7269\u9762\u4E0A\u7684\u70B9\u79FB\u52A8 p</span></div>
      <div class="panel"><div id="panel"></div></div>
    </div>
    <div class="side2">
      <div class="fcard">${KD("X = X^u\\, \\partial_u + X^v\\, \\partial_v")}
      ${KD("\\partial_\\mu = \\frac{\\partial \\sigma}{\\partial u^\\mu} \\;\\;\\text{\uFF08\u5750\u6807\u57FA\uFF09}")}
      ${KD("X(f) = X^\\mu \\frac{\\partial f}{\\partial u^\\mu} \\;\\;\\text{\uFF08\u65B9\u5411\u5BFC\u6570\uFF09}")}
      ${KD("\\dot\\gamma(t) = X_{\\gamma(t)} \\;\\;\\text{\uFF08\u79EF\u5206\u66F2\u7EBF\uFF09}")}</div>
      <div class="fcard"><span class="fcard-label">\u5411\u91CF\u573A\u4E0E\u79EF\u5206\u66F2\u7EBF</span>
      <p style="font-size:13px;color:#c9d6ee">\u9009\u62E9\u4E00\u4E2A\u5411\u91CF\u573A $X$\uFF0C\u4ECE\u5F53\u524D\u70B9 $p$ \u51FA\u53D1\u7684\u79EF\u5206\u66F2\u7EBF $\\gamma(t)$ \u6EE1\u8DB3 $\\dot\\gamma = X_{\\gamma(t)}$\u3002\u7C92\u5B50\u7684\u8FD0\u52A8\u65B9\u5411\u603B\u662F\u4E0E\u573A\u7BAD\u5934\u76F8\u5207\u3002</p></div>
    </div>
  </div>
  `;
  }
  function mount3(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    viz = new Viz(stage, { cameraPos: [3.6, -2.8, 2.6] });
    let mesh = null, grid = null, marker = null, tPlane = null, dragOff6 = null;
    let arrU = null, arrV = null, arrW = null, paraLines = null, fieldSegs = null, curve = null, particle = null;
    let curvePts = [];
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2", torus: "\u73AF\u9762 T\xB2", paraboloid: "\u65CB\u8F6C\u629B\u7269\u9762" },
      cb: () => {
        rebuild();
        clampUV();
        sync();
      }
    });
    const fldSel = sel(panel, {
      value: "rot",
      options: Object.fromEntries(Object.entries(FIELDS).map(([k, f]) => [k, f.label])),
      cb: () => {
        buildFieldArrows();
        recomputeCurve();
      }
    });
    const aSl = slider(panel, { label: "X^u\uFF08\u2202u \u5206\u91CF\uFF09", min: -1.5, max: 1.5, step: 0.01, value: state2.a, cb: (v) => {
      state2.a = v;
      sync();
    } });
    const bSl = slider(panel, { label: "X^v\uFF08\u2202v \u5206\u91CF\uFF09", min: -1.5, max: 1.5, step: 0.01, value: state2.b, cb: (v) => {
      state2.b = v;
      sync();
    } });
    const outV = readout(panel, "|X| = ");
    const outK = readout(panel, "\u65B9\u5411 \u27E8X,\u2202u\u27E9/|X| = ");
    const playBtn = btn(panel, { label: "\u25B6 \u6CBF\u79EF\u5206\u66F2\u7EBF\u6D41\u52A8", cb: () => togglePlay() });
    const resBtn = btn(panel, { label: "\u21BA \u590D\u4F4D\u89C6\u89D2", cb: () => {
      viz.camera.position.set(3.6, -2.8, 2.6);
      viz.controls.target.set(0, 0, 0);
    } });
    function rebuild() {
      viz.remove(mesh, grid, marker, tPlane, arrU, arrV, arrW, paraLines, fieldSegs, curve, particle);
      dragOff6?.();
      const spec = SURFACES[state2.surface];
      mesh = meshOf(spec, { color: 4157400, opacity: 0.9 });
      grid = gridLinesOn(spec, { opacity: 0.55 });
      marker = sphereMark([0, 0, 0], 16766814);
      tPlane = new Xs(
        new ru(0.52, 40),
        new es({ color: 5809919, transparent: true, opacity: 0.16, side: p, depthWrite: false })
      );
      arrU = arrow([0, 0, 0], [1, 0, 0], 16739179, { len: 0.4 });
      arrV = arrow([0, 0, 0], [0, 1, 0], 5809919, { len: 0.4 });
      arrW = arrow([0, 0, 0], [1, 0, 0], 16766814, { len: 0.6 });
      paraLines = new xh(new As(), new hh({ color: 16777215, transparent: true, opacity: 0.35 }));
      fieldSegs = new xh(new As(), new hh({ color: 8315043, transparent: true, opacity: 0.75 }));
      curve = polyline([], 16766814, 2);
      particle = sphereMark([0, 0, 0], 16769154, 0.07);
      viz.add(mesh, grid, marker, tPlane, arrU, arrV, arrW, paraLines, fieldSegs, curve, particle);
      dragOff6 = enableDrag(viz, mesh, spec, (u2, v) => {
        if (spec.id === "sphere") {
          u2 = Math.min(Math.max(u2, 0.12), Math.PI - 0.12);
        }
        state2.u = u2;
        state2.v = v;
        sync();
      });
      buildFieldArrows();
    }
    function buildFieldArrows() {
      const spec = SURFACES[state2.surface];
      const pts = [];
      const nu2 = 9, nv = 12;
      for (let i = 0; i <= nu2; i++) {
        const u2 = spec.u0 + (spec.u1 - spec.u0) * i / nu2;
        for (let j = 0; j <= nv; j++) {
          const v = spec.v0 + (spec.v1 - spec.v0) * j / nv;
          if (spec.id === "sphere" && (u2 < 0.15 || u2 > Math.PI - 0.15)) continue;
          if (spec.id === "paraboloid" && u2 < 0.05) continue;
          const f = FIELDS[state2.field].uv(spec, u2, v);
          const p2 = spec.f(u2, v);
          const w = tangentToWorld(spec, u2, v, f[0], f[1]);
          const n2 = V.norm(w);
          if (n2 < 1e-9) continue;
          const s = 0.22;
          const q = V.add(p2, V.scale(w, s / n2));
          pts.push(...p2, ...q);
        }
      }
      const geo2 = new As();
      geo2.setAttribute("position", new vs(pts, 3));
      fieldSegs.geometry.dispose();
      fieldSegs.geometry = geo2;
    }
    function clampUV() {
      const spec = SURFACES[state2.surface];
      state2.u = Math.min(Math.max(state2.u, spec.u0 + 0.02), spec.u1 - 0.02);
      if (spec.id === "sphere") state2.u = Math.min(Math.max(state2.u, 0.12), Math.PI - 0.12);
      state2.v = Math.min(Math.max(state2.v, spec.v0), spec.v1);
    }
    function recomputeCurve() {
      const spec = SURFACES[state2.surface];
      curvePts = integrateField(spec, (u2, v) => FIELDS[state2.field].uv(spec, u2, v), state2.u, state2.v, 26, 0.03);
      updateLine(curve, curvePts.map((q) => q.p));
      state2.t = 0;
    }
    function sync() {
      clampUV();
      const spec = SURFACES[state2.surface];
      aSl.set(state2.a);
      bSl.set(state2.b);
      const p2 = spec.f(state2.u, state2.v);
      marker.position.set(...p2);
      const d2 = surfaceData(spec, state2.u, state2.v);
      tPlane.position.set(...p2);
      tPlane.quaternion.setFromUnitVectors(new Ui(0, 0, 1), new Ui(...d2.n));
      const du2 = tangentToWorld(spec, state2.u, state2.v, 0.3, 0);
      const dv = tangentToWorld(spec, state2.u, state2.v, 0, 0.3);
      setArrow(arrU, p2, du2);
      setArrow(arrV, p2, dv);
      const w = tangentToWorld(spec, state2.u, state2.v, state2.a, state2.b);
      setArrow(arrW, p2, w);
      const nw = V.norm(w);
      outV.set(nw.toFixed(3));
      outK.set((nw > 1e-6 ? V.dot(w, du2) / nw / V.norm(du2) : 0).toFixed(3));
      const a = p2, bpt = V.add(p2, du2), cpt = V.add(p2, dv), dpt = V.add(p2, V.add(du2, dv));
      const q = [a, bpt, dpt, cpt, a];
      const qf = [];
      for (const x of q) qf.push(...x);
      paraLines.geometry.setAttribute("position", new vs(qf, 3));
      paraLines.geometry.computeBoundingSphere();
      recomputeCurve();
      updateParticle();
    }
    function setArrow(a, from, dir) {
      const len = V.norm(dir);
      a.position.set(...from);
      a.setDirection(new Ui(...len > 1e-6 ? V.scale(dir, 1 / len) : [1, 0, 0]));
      a.setLength(Math.max(len, 1e-3));
    }
    function updateParticle() {
      if (!curvePts.length) return;
      const idx = Math.floor(state2.t / 0.03) % curvePts.length;
      const q = curvePts[idx];
      particle.position.set(...q.p);
    }
    function togglePlay() {
      state2.playing = !state2.playing;
      playBtn.el.classList.toggle("on", state2.playing);
      playBtn.el.textContent = state2.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u6CBF\u79EF\u5206\u66F2\u7EBF\u6D41\u52A8";
    }
    viz.tick = (dt2) => {
      if (state2.playing) {
        state2.t += dt2 * 1.6;
        updateParticle();
      }
    };
    rebuild();
    clampUV();
    sync();
    cClean.push(() => dragOff6?.());
  }
  function teardown3() {
    for (const f of cClean) f();
    cClean = [];
    viz?.dispose();
    viz = null;
  }

  // js/modules/m03-forms.js
  var m03_forms_exports = {};
  __export(m03_forms_exports, {
    en: () => en4,
    html: () => html4,
    id: () => id4,
    mount: () => mount4,
    no: () => no5,
    teardown: () => teardown4,
    zh: () => zh5
  });
  var id4 = "m03";
  var no5 = "3";
  var zh5 = "\u5FAE\u5206\u5F62\u5F0F";
  var en4 = "Differential Forms";
  var state3 = {
    fname: "paraboloid",
    mode: "df",
    px: -0.4,
    py: 0.5,
    ang: 0.6,
    a: 1,
    b: 0.4,
    c: 0.2,
    d: 1.2,
    xAng: 0.9,
    yAng: 2.4
  };
  var cA = null;
  var cB = null;
  var FUNCS = {
    paraboloid: { label: "f = x\xB2 + y\xB2", f: (x, y) => x * x + y * y },
    linear: { label: "f = x\uFF08\u7EBF\u6027\u51FD\u6570\uFF09", f: (x, y) => x },
    saddle: { label: "f = y\xB2 \u2212 x\xB2", f: (x, y) => y * y - x * x },
    wave: { label: "f = sin x \xB7 cos y", f: (x, y) => Math.sin(x) * Math.cos(y) }
  };
  function contours(f, Ls2, x0, x1, y0, y1, N = 64) {
    const segs = [];
    const xs = [], ys2 = [];
    for (let i = 0; i <= N; i++) xs.push(x0 + (x1 - x0) * i / N);
    for (let j = 0; j <= N; j++) ys2.push(y0 + (y1 - y0) * j / N);
    for (const L2 of Ls2) {
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        const v00 = FUNCS[state3.fname].f(xs[i], ys2[j]);
        const v10 = FUNCS[state3.fname].f(xs[i + 1], ys2[j]);
        const v11 = FUNCS[state3.fname].f(xs[i + 1], ys2[j + 1]);
        const v01 = FUNCS[state3.fname].f(xs[i], ys2[j + 1]);
        const edge = [];
        const interp = (v1, v2, x12, y12, x2, y2) => {
          const t2 = (L2 - v1) / (v2 - v1 || 1e-12);
          return [x12 + t2 * (x2 - x12), y12 + t2 * (y2 - y12)];
        };
        if (v00 < L2 !== v10 < L2) edge.push(interp(v00, v10, xs[i], ys2[j], xs[i + 1], ys2[j]));
        if (v10 < L2 !== v11 < L2) edge.push(interp(v10, v11, xs[i + 1], ys2[j], xs[i + 1], ys2[j + 1]));
        if (v11 < L2 !== v01 < L2) edge.push(interp(v11, v01, xs[i + 1], ys2[j + 1], xs[i], ys2[j + 1]));
        if (v01 < L2 !== v00 < L2) edge.push(interp(v01, v00, xs[i], ys2[j + 1], xs[i], ys2[j]));
        if (edge.length >= 2) segs.push(edge);
      }
    }
    return segs;
  }
  function html4() {
    return `
  <h1 class="mod-title">3. \u5FAE\u5206\u5F62\u5F0F</h1>
  <div class="mod-sub">Differential Forms: 1-forms, wedge product, 2-forms</div>
  <div class="mod-intro">
    <p>$p$ \u70B9\u5904\u7684<b>\u4F59\u5207\u7A7A\u95F4</b> $T_p^*M$ \u662F\u5207\u7A7A\u95F4\u7684\u5BF9\u5076\uFF1A<b>1-\u5F62\u5F0F</b>\uFF08covector\uFF09$\\alpha$ \u662F\u7EBF\u6027\u51FD\u6570 $\\alpha: T_p M \\to \\mathbb{R}$\u3002\u6881\u707F\u5F6C\u4E66\u4E2D\u7684\u7ECF\u5178\u56FE\u50CF\uFF1A1-\u5F62\u5F0F\u5C31\u662F\u4E00\u53E0<b>\u5E73\u884C\u5E73\u9762</b>\uFF0C\u5176"\u5BC6\u5EA6"\u7ED9\u51FA\u5927\u5C0F\uFF1B\u6536\u7F29 $\\alpha(X)$ \u5C31\u662F\u5411\u91CF $X$ \u7A7F\u8FC7\u7684\u5E73\u9762\u6570\u3002\u51FD\u6570\u5FAE\u5206\u4E3A $df = \\partial_\\mu f\\, dx^\\mu$\uFF0C\u5176\u5E73\u9762\u53E0\u6070\u597D\u662F $f$ \u7684\u7B49\u9AD8\u7EBF\u65CF\u2014\u2014\u7B49\u9AD8\u7EBF\u8D8A\u5BC6\uFF0C$|df|$ \u8D8A\u5927\u3002\u7ED9\u5B9A\u5EA6\u91CF $g$\uFF08\u8FD9\u91CC\u662F\u6B27\u6C0F\u5EA6\u89C4\uFF09\uFF0C\u6709\u5BF9\u5076 $g^\\sharp\\alpha \\leftrightarrow X$\u3002</p>
  </div>
  <div class="stage" id="stageA" style="height:460px"></div>
  <div class="panel"><div id="panelA"></div></div>
  <div class="fcard">${KD("\\alpha = \\alpha_\\mu\\, dx^\\mu, \\qquad df = \\frac{\\partial f}{\\partial x^\\mu}\\, dx^\\mu")}
  ${KD("\\alpha(X) = \\alpha_\\mu X^\\mu \\quad \\text{\uFF08X \u7A7F\u8FC7\u7684\u5E73\u9762\u6570\uFF09}")}</div>
  <div class="stage" id="stageB" style="height:440px"></div>
  <div class="panel"><div id="panelB"></div></div>
  <div class="fcard">${KD("\\alpha \\wedge \\beta = (\\alpha_1 \\beta_2 - \\alpha_2 \\beta_1)\\, dx \\wedge dy")}
  ${KD("(\\alpha \\wedge \\beta)(X,Y) = \\alpha(X)\\beta(Y) - \\alpha(Y)\\beta(X) \\;=\\; \\det\\begin{pmatrix}\\alpha(X)&\\alpha(Y)\\\\ \\beta(X)&\\beta(Y)\\end{pmatrix}")}</div>
  `;
  }
  function mount4(host) {
    setupA2(host.querySelector("#stageA"), host.querySelector("#panelA"));
    setupB2(host.querySelector("#stageB"), host.querySelector("#panelB"));
  }
  function setupA2(stage, panel) {
    cA = new C2(stage, { xmin: -2.6, xmax: 2.6, ymin: -2.6, ymax: 2.6 });
    const fSel = sel(panel, {
      value: "paraboloid",
      options: Object.fromEntries(Object.entries(FUNCS).map(([k, v]) => [k, v.label])),
      cb: () => drawA()
    });
    const mSel = sel(panel, {
      value: "df",
      options: { df: "\u03B1 = df\uFF08\u68AF\u5EA6\u5F62\u5F0F\u7684 1-\u5F62\u5F0F\uFF09", ydx: "\u03B1 = y dx\uFF08\u975E\u68AF\u5EA6\u7684 1-\u5F62\u5F0F\uFF09" },
      cb: () => drawA()
    });
    const angSl = slider(panel, { label: "\u6D4B\u8BD5\u5411\u91CF X \u7684\u65B9\u5411 \u03B8", min: 0, max: 2 * Math.PI, step: 0.01, value: state3.ang, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      state3.ang = v;
      drawA();
    } });
    const outAX = readout(panel, "\u03B1(X) = ");
    const outAd = readout(panel, "|\u03B1| = ");
    cA.onClick = (p2) => {
      state3.px = p2.x;
      state3.py = p2.y;
      drawA();
    };
    cA.onDrag = cA.onClick;
    cA.needDraw = () => drawA();
    function alphaAt(x, y) {
      const f = FUNCS[state3.fname].f;
      const h2 = 1e-3;
      if (state3.mode === "df") {
        const fx = (f(x + h2, y) - f(x - h2, y)) / (2 * h2);
        const fy = (f(x, y + h2) - f(x, y - h2)) / (2 * h2);
        return [fx, fy];
      }
      return [y, 0];
    }
    function drawA() {
      const c6 = cA;
      c6.clear();
      c6.axes();
      const f = FUNCS[state3.fname].f;
      let mn = Infinity, mx = -Infinity;
      for (let i = 0; i <= 24; i++) for (let j = 0; j <= 24; j++) {
        const v = f(-2.6 + 5.2 * i / 24, -2.6 + 5.2 * j / 24);
        if (v < mn) mn = v;
        if (v > mx) mx = v;
      }
      const Ls2 = [];
      for (let k = 1; k <= 9; k++) Ls2.push(mn + (mx - mn) * k / 10);
      const segs = contours(f, Ls2, -2.6, 2.6, -2.6, 2.6);
      for (const [p1, p22] of segs) c6.line(p1[0], p1[1], p22[0], p22[1], { color: "#2e4a7a", width: 1.2 });
      const p2 = { x: state3.px, y: state3.py };
      const [A, B] = alphaAt(p2.x, p2.y);
      const mag = Math.hypot(A, B);
      outAd.set(mag.toFixed(3));
      if (mag > 1e-4) {
        const s = 1.1;
        const gx = A / mag * s, gy = B / mag * s;
        c6.arrow(p2.x, p2.y, p2.x + gx, p2.y + gy, { color: "#ff9f43", width: 2.5 });
        c6.text("g\u266F\u03B1", p2.x + gx * 1.12, p2.y + gy * 1.12 + 0.12, { color: "#ff9f43", size: 13 });
      }
      if (mag > 1e-4) {
        const nx = A / mag, ny = B / mag;
        const spacing = Math.min(Math.max(1.3 / mag, 0.13), 1.4);
        for (let k = -3; k <= 3; k++) {
          const ox = p2.x + k * spacing * nx, oy = p2.y + k * spacing * ny;
          const t0 = ox - 1.1 * ny, u0 = oy + 1.1 * nx;
          const t1 = ox + 1.1 * ny, u1 = oy - 1.1 * nx;
          c6.line(t0, u0, t1, u1, { color: "#7ee0a3", width: 1.6 });
        }
        c6.text("\u03B1 \u7684\u5E73\u9762\u53E0\uFF08\u95F4\u8DDD \u221D 1/|\u03B1|\uFF09", p2.x + 1.3, p2.y + 1.5, { color: "#7ee0a3", size: 11 });
      }
      const th2 = state3.ang;
      const X = [Math.cos(th2), Math.sin(th2)];
      c6.arrow(p2.x, p2.y, p2.x + X[0], p2.y + X[1], { color: "#ffffff", width: 2.5, head: 12 });
      c6.text("X", p2.x + X[0] * 1.15, p2.y + X[1] * 1.15, { color: "#fff", size: 14 });
      const aX = A * X[0] + B * X[1];
      outAX.set(aX.toFixed(3));
      c6.text(`\u03B1(X) = ${aX.toFixed(2)}\uFF08= X \u7A7F\u8FC7\u7684\u5E73\u9762\u6570\uFF09`, -2.5, 2.45, { color: "#ffd75e", size: 13 });
      c6.dot(p2.x, p2.y, { color: "#ffd75e", r: 6, stroke: "#fff" });
      c6.text("p\uFF08\u53EF\u62D6\u52A8\uFF09", p2.x, p2.y - 0.32, { color: "#ffd75e", size: 12 });
    }
    drawA();
  }
  function setupB2(stage, panel) {
    cB = new C2(stage, { xmin: -2.8, xmax: 2.8, ymin: -2.8, ymax: 2.8 });
    const mk = (lbl, key, def) => slider(panel, { label: lbl, min: -2, max: 2, step: 0.05, value: def, cb: (v) => {
      state3[key] = v;
      drawB();
    } });
    mk("\u03B1 = a dx + b dy\uFF1Aa", "a", 1);
    mk("b", "b", 0.4);
    mk("\u03B2 = c dx + d dy\uFF1Ac", "c", 0.2);
    mk("d", "d", 1.2);
    const xSl = slider(panel, { label: "X \u65B9\u5411", min: 0, max: Math.PI, step: 0.01, value: 0.9, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      state3.xAng = v;
      drawB();
    } });
    const ySl = slider(panel, { label: "Y \u65B9\u5411", min: 0, max: Math.PI, step: 0.01, value: 2.4, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      state3.yAng = v;
      drawB();
    } });
    const outDet = readout(panel, "\u03B1\u2227\u03B2(X,Y) = ");
    const outCell = readout(panel, "\u5E73\u9762\u53E0\u683C\u9762\u79EF = 1/|\u03B1\u2227\u03B2| = ");
    function covecPlanes(c6, A, B, color, o) {
      const mag = Math.hypot(A, B);
      if (mag < 1e-4) return;
      const nx = A / mag, ny = B / mag;
      const spacing = Math.min(Math.max(0.9 / mag, 0.1), 1.2);
      for (let k = -4; k <= 4; k++) {
        const ox = o.x + k * spacing * nx, oy = o.y + k * spacing * ny;
        c6.line(ox - 1.6 * ny, oy + 1.6 * nx, ox + 1.6 * ny, oy - 1.6 * nx, { color, width: 1.4, dash: o.dash ?? [] });
      }
    }
    function drawB() {
      const c6 = cB;
      c6.clear();
      c6.axes();
      const { a, b, c: cc2, d: d2 } = state3;
      const o = { x: 0, y: 0 };
      covecPlanes(c6, a, b, "#ff6b6b", o);
      covecPlanes(c6, cc2, d2, "#58a6ff", o);
      c6.text("\u03B1 \u7684\u5E73\u9762", 1.7, 1.9, { color: "#ff6b6b", size: 13 });
      c6.text("\u03B2 \u7684\u5E73\u9762", 1.7, 1.65, { color: "#58a6ff", size: 13 });
      const X = [Math.cos(state3.xAng), Math.sin(state3.xAng)];
      const Y = [Math.cos(state3.yAng), Math.sin(state3.yAng)];
      c6.arrow(o.x, o.y, o.x + X[0], o.y + X[1], { color: "#ffffff", width: 2.4, head: 12 });
      c6.arrow(o.x, o.y, o.x + Y[0], o.y + Y[1], { color: "#e0e0e0", width: 2.4, head: 12 });
      c6.text("X", X[0] * 1.18, X[1] * 1.18 + 0.1, { color: "#fff", size: 14 });
      c6.text("Y", Y[0] * 1.18, Y[1] * 1.18 + 0.1, { color: "#ddd", size: 14 });
      const det = a * d2 - b * cc2;
      const area = X[0] * Y[1] - X[1] * Y[0];
      c6.poly(
        [[0, 0], [X[0], X[1]], [X[0] + Y[0], X[1] + Y[1]], [Y[0], Y[1]]],
        { fill: "rgba(255,215,94,0.10)", stroke: "rgba(255,215,94,0.5)", width: 1.2 }
      );
      const aX = a * X[0] + b * X[1], bY = cc2 * Y[0] + d2 * Y[1];
      const aY = a * Y[0] + b * Y[1], bX = cc2 * X[0] + d2 * X[1];
      const val = aX * bY - aY * bX;
      outDet.set(val.toFixed(3));
      outCell.set(det === 0 ? "\u221E" : (1 / Math.abs(det)).toFixed(3));
      const ux = [d2 / det, -c6 / det], uy = [-b / det, a / det];
      for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) {
        const base = [i * ux[0] + j * uy[0], i * ux[1] + j * uy[1]];
        if (Math.abs(base[0]) < 2.6 && Math.abs(base[1]) < 2.6) {
          c6.dot(base[0], base[1], { color: "rgba(255,255,255,0.35)", r: 2.5 });
        }
      }
      c6.text(`\u03B1\u2227\u03B2(X,Y) = \u03B1(X)\u03B2(Y) \u2212 \u03B1(Y)\u03B2(X) = ${val.toFixed(2)}`, -2.7, 2.55, { color: "#ffd75e", size: 13 });
      c6.text(`\uFF08\u5E73\u884C\u56DB\u8FB9\u5F62\u7684\u6709\u5411\u9762\u79EF = X\xD7Y = ${area.toFixed(2)}\uFF09`, -2.7, 2.25, { color: "#8fa2c8", size: 12 });
    }
    drawB();
  }
  function teardown4() {
    cA?.dispose();
    cA = null;
    cB?.dispose();
    cB = null;
  }

  // js/modules/m04-stokes.js
  var m04_stokes_exports = {};
  __export(m04_stokes_exports, {
    en: () => en5,
    html: () => html5,
    id: () => id5,
    mount: () => mount5,
    no: () => no6,
    teardown: () => teardown5,
    zh: () => zh6
  });
  var id5 = "m04";
  var no6 = "4";
  var zh6 = "\u5916\u5FAE\u5206\u4E0E Stokes \u5B9A\u7406";
  var en5 = "Exterior Derivative & Stokes";
  var st = {
    tab: "1",
    field: "rot",
    R: 1.7,
    phi: 0,
    playing: false,
    loopR: 1.5,
    loopPhi: 0,
    loopPlaying: false,
    lcx: 0,
    lcy: 0
  };
  var c1 = null;
  var c2 = null;
  var viz2 = null;
  var raf = null;
  var tickT1 = () => {
  };
  var tickT2 = () => {
  };
  var cClean2 = [];
  var FIELDS2D = {
    rot: { label: "\u03C9 = \u2212y dx + x dy\uFF08\u65CB\u5EA6 2\uFF09", P: (x, y) => -y, Q: (x, y) => x, curl: (x, y) => 2 },
    shear: { label: "\u03C9 = x\xB2 dy\uFF08\u975E\u5747\u5300\u65CB\u5EA6 2x\uFF09", P: (x, y) => 0, Q: (x, y) => x * x, curl: (x, y) => 2 * x },
    radial: { label: "\u03C9 = x dx + y dy\uFF08\u65E0\u65CB\uFF09", P: (x, y) => x, Q: (x, y) => y, curl: (x, y) => 0 }
  };
  function html5() {
    return `
  <h1 class="mod-title">4. \u5916\u5FAE\u5206\u4E0E Stokes \u5B9A\u7406</h1>
  <div class="mod-sub">Exterior Derivative &amp; Stokes' Theorem</div>
  <div class="mod-intro">
    <p><b>\u5916\u5FAE\u5206\u7B97\u5B50</b> $d$ \u628A $k$-\u5F62\u5F0F\u6620\u4E3A $(k{+}1)$-\u5F62\u5F0F\uFF0C\u4E14 $d^2 = 0$\uFF08\u6070\u5F53\u5F62\u5F0F\u5FC5\u4E3A\u95ED\u5F62\u5F0F\uFF09\u3002<b>Stokes \u5B9A\u7406</b>\u628A\u533A\u57DF\u4E0A\u7684\u79EF\u5206\u4E0E\u8FB9\u754C\u4E0A\u7684\u79EF\u5206\u8054\u7CFB\u8D77\u6765\uFF1A$\\int_D d\\omega = \\oint_{\\partial D} \\omega$\u3002\u5728\u4E8C\u7EF4\u5E73\u9762\u4E0A\u8FD9\u5C31\u662F <b>Green \u5B9A\u7406</b>\uFF08\u65CB\u5EA6\u901A\u91CF = \u73AF\u91CF\uFF09\uFF1B\u4E09\u7EF4\u60C5\u5F62\u662F <b>Kelvin\u2013Stokes</b>\uFF08\u65CB\u5EA6\u901A\u91CF = \u73AF\u91CF\uFF09\u3002\u4E0B\u9762\u5DE6\u4FA7\u52A8\u753B\u4E2D\uFF0C\u7C92\u5B50\u6CBF\u8FB9\u754C\u8D70\u4E00\u5708\u7684\u540C\u65F6\uFF0C\u88AB\u626B\u8FC7\u7684\u6247\u5F62\u533A\u57DF\u540C\u6B65\u7740\u8272\u2014\u2014\u4E24\u6761\u79EF\u5206\u59CB\u7EC8\u76F8\u7B49\u3002\u53F3\u4FA7\u6F14\u793A\u8457\u540D\u7684 $d\\theta$\uFF1A\u5B83\u5904\u5904\u6EE1\u8DB3 $d(d\\theta)=0$\uFF0C\u5374\u4E0D\u5B58\u5728\u5168\u5C40\u51FD\u6570 $\\theta$\uFF0C\u7ED5\u6D1E\u4E00\u5708\u79EF\u5206\u4E3A $2\\pi n$\u3002</p>
  </div>
  <div class="panel-row first">
    <button class="btn on" data-t="1">\u2460 2D Green \u5B9A\u7406</button>
    <button class="btn" data-t="2">\u2461 \u95ED \u2260 \u6070\u5F53\uFF1Ad\u03B8</button>
    <button class="btn" data-t="3">\u2462 3D Kelvin\u2013Stokes</button>
  </div>
  <div id="tab1"><div class="stage" id="stage1" style="height:470px"></div>
    <div class="panel"><div id="panel1"></div></div></div>
  <div id="tab2" style="display:none"><div class="stage" id="stage2" style="height:470px"></div>
    <div class="panel"><div id="panel2"></div></div></div>
  <div id="tab3" style="display:none">
    <div class="stage" id="stage3" style="height:470px"></div>
    <div class="panel"><div id="panel3"></div></div></div>
  <div class="fcard">${KD("d^2 = 0: \\quad d(df) = 0 \\;\\;\\Rightarrow\\;\\; \\text{\u6070\u5F53} \\Rightarrow \\text{\u95ED}")}
  ${KD("\\int_D d\\omega = \\oint_{\\partial D} \\omega \\quad (\\text{Stokes \u4E00\u822C\u5F62\u5F0F})")}
  ${KD("\\oint_{\\partial S} F\\cdot dr = \\iint_S (\\nabla \\times F)\\cdot dS \\quad (3\\text{D})")}</div>
  `;
  }
  function mount5(host) {
    const tabs = host.querySelectorAll("[data-t]");
    const panels = { 1: host.querySelector("#tab1"), 2: host.querySelector("#tab2"), 3: host.querySelector("#tab3") };
    const sw = (t2) => {
      st.tab = t2;
      for (const b of tabs) b.classList.toggle("on", b.dataset.t === t2);
      for (const [k, p2] of Object.entries(panels)) p2.style.display = k === t2 ? "" : "none";
      if (t2 === "1") c1?.resize();
      if (t2 === "2") c2?.resize();
      if (t2 === "3") viz2?.resize();
    };
    for (const b of tabs) b.addEventListener("click", () => sw(b.dataset.t));
    setupT1(host.querySelector("#stage1"), host.querySelector("#panel1"));
    setupT2(host.querySelector("#stage2"), host.querySelector("#panel2"));
    setupT3(host.querySelector("#stage3"), host.querySelector("#panel3"));
    raf = requestAnimationFrame(function loop() {
      tick();
      raf = requestAnimationFrame(loop);
    });
  }
  function setupT1(stage, panel) {
    c1 = new C2(stage, { xmin: -2.8, xmax: 2.8, ymin: -2.8, ymax: 2.8 });
    const fSel = sel(panel, {
      value: "rot",
      options: Object.fromEntries(Object.entries(FIELDS2D).map(([k, v]) => [k, v.label])),
      cb: () => {
        precompute();
        draw1();
      }
    });
    const rSl = slider(panel, { label: "\u5706\u76D8\u534A\u5F84 R", min: 0.4, max: 2.5, step: 0.05, value: st.R, cb: () => {
      precompute();
      draw1();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u6CBF\u8FB9\u754C\u8D70\u4E00\u5708", cb: () => {
      st.playing = !st.playing;
      playBtn.el.classList.toggle("on", st.playing);
      playBtn.el.textContent = st.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u6CBF\u8FB9\u754C\u8D70\u4E00\u5708";
    } });
    const outL = readout(panel, "\u222E\u2202D \u03C9 = ");
    const outA = readout(panel, "\u222B\u222BD d\u03C9 = ");
    const outE = readout(panel, "\u8BEF\u5DEE = ");
    let arcInt = [];
    let spokeInt = 0;
    let sectorInt = [];
    function precompute() {
      const f = FIELDS2D[st.field], R = st.R;
      const N = 720;
      arcInt = new Array(N + 1).fill(0);
      sectorInt = new Array(N + 1).fill(0);
      for (let i = 1; i <= N; i++) {
        const th0 = (i - 1) / N * 2 * Math.PI, th1 = i / N * 2 * Math.PI;
        const tm = (th0 + th1) / 2;
        arcInt[i] = arcInt[i - 1] + (f.P(R * Math.cos(tm), R * Math.sin(tm)) * (-R * Math.sin(tm)) + f.Q(R * Math.cos(tm), R * Math.sin(tm)) * (R * Math.cos(tm))) * (th1 - th0);
        const dth = th1 - th0;
        let s = 0;
        const NR = 40;
        for (let k = 0; k < NR; k++) {
          const r = (k + 0.5) / NR * R;
          s += f.curl(r * Math.cos(tm), r * Math.sin(tm)) * r * (R / NR) * dth;
        }
        sectorInt[i] = sectorInt[i - 1] + s;
      }
      spokeInt = 0;
      const N2 = 200;
      for (let i = 1; i <= N2; i++) {
        const x0 = (i - 1) / N2 * R, x1 = i / N2 * R;
        const xm = (x0 + x1) / 2;
        spokeInt += f.P(xm, 0) * (x1 - x0);
      }
    }
    function draw1() {
      const c6 = c1;
      c6.clear();
      c6.axes();
      const f = FIELDS2D[st.field], R = st.R;
      for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
        const x = i * 0.8, y = j * 0.8;
        if (x * x + y * y > R * R - 0.3) continue;
        const s = 0.32;
        c6.arrow(x, y, x + f.P(x, y) * s, y + f.Q(x, y) * s, { color: "#5a6c9e", width: 1.3, head: 5 });
      }
      const phi = st.phi;
      const sect = [];
      const NS = 60;
      for (let k = 0; k <= NS; k++) {
        const th2 = phi * k / NS;
        sect.push([R * Math.cos(th2), R * Math.sin(th2)]);
      }
      sect.push([0, 0]);
      const cur = f.curl;
      const col = cur(0.5, 0) > 0 ? "rgba(255,140,80,0.28)" : "rgba(90,160,255,0.28)";
      c6.poly(sect, { fill: col });
      const bnd = [];
      for (let k = 0; k <= 180; k++) {
        const th2 = 2 * Math.PI * k / 180;
        bnd.push([R * Math.cos(th2), R * Math.sin(th2)]);
      }
      c6.poly(bnd, { stroke: "#7ee0a3", width: 2 });
      c6.dot(0, 0, { color: "#ffd75e", r: 4 });
      const ang = phi;
      const pp = [R * Math.cos(ang), R * Math.sin(ang)];
      c6.dot(pp[0], pp[1], { color: "#fff", r: 6, stroke: "#ffd75e" });
      const iArc = Math.round(phi / (2 * Math.PI) * 720);
      const lineI = spokeInt + arcInt[iArc] + partialSpokeBack(phi);
      const areaI = sectorInt[iArc];
      outL.set(lineI.toFixed(4));
      outA.set(areaI.toFixed(4));
      outE.set(Math.abs(lineI - areaI).toExponential(2));
      c6.text("\u222E\u2202D \u03C9 = " + lineI.toFixed(3), -2.7, 2.55, { color: "#7ee0a3", size: 13 });
      c6.text("\u222B\u222BD d\u03C9 = " + areaI.toFixed(3), -2.7, 2.3, { color: "#ff9f43", size: 13 });
      function partialSpokeBack(ph2) {
        let s = 0;
        const N3 = 100;
        const dx = -R * Math.cos(ph2) / N3, dy = -R * Math.sin(ph2) / N3;
        for (let i = 0; i < N3; i++) {
          const t2 = 1 - (i + 0.5) / N3;
          const x = t2 * R * Math.cos(ph2), y = t2 * R * Math.sin(ph2);
          s += f.P(x, y) * dx + f.Q(x, y) * dy;
        }
        return s;
      }
    }
    function tick2() {
      if (st.tab === "1" && st.playing) {
        st.phi = (st.phi + 0.02) % (2 * Math.PI);
        draw1();
      }
    }
    tickT1 = tick2;
    c1.needDraw = () => draw1();
    precompute();
    draw1();
  }
  function setupT2(stage, panel) {
    c2 = new C2(stage, { xmin: -2.9, xmax: 2.9, ymin: -2.9, ymax: 2.9 });
    const rSl = slider(panel, { label: "\u56DE\u8DEF\u534A\u5F84 R", min: 0.45, max: 2.5, step: 0.05, value: st.loopR, cb: () => draw2() });
    const cSl = slider(panel, { label: "\u5706\u5FC3 x \u504F\u79FB", min: -1.5, max: 1.5, step: 0.05, value: st.lcx, cb: () => draw2() });
    const cSl2 = slider(panel, { label: "\u5706\u5FC3 y \u504F\u79FB", min: -1.5, max: 1.5, step: 0.05, value: st.lcy, cb: () => draw2() });
    const playBtn = btn(panel, { label: "\u25B6 \u7ED5\u5708\u52A8\u753B", cb: () => {
      st.loopPlaying = !st.loopPlaying;
      playBtn.el.classList.toggle("on", st.loopPlaying);
      playBtn.el.textContent = st.loopPlaying ? "\u23F8 \u6682\u505C" : "\u25B6 \u7ED5\u5708\u52A8\u753B";
    } });
    const outW = readout(panel, "\u222E d\u03B8 = ");
    const outN = readout(panel, "\u5708\u6570 n = ");
    const outC = readout(panel, "\u95ED\u6027 \u2202yP\u2212\u2202xQ = ");
    function draw2() {
      const c6 = c2;
      c6.clear();
      c6.axes();
      const Rw = 2.55;
      for (let i = 0; i < 72; i++) {
        const a0 = i / 72 * 2 * Math.PI, a1 = (i + 1) / 72 * 2 * Math.PI;
        const hue = i / 72 * 360 % 360;
        c6.poly(
          [[0, 0], [Rw * Math.cos(a0), Rw * Math.sin(a0)], [Rw * Math.cos(a1), Rw * Math.sin(a1)]],
          { fill: `hsla(${hue}, 55%, 42%, 0.30)` }
        );
      }
      c6.text("\u03B8 \u7684\u8272\u8F6E\uFF1A\u03B8 \u662F\u591A\u503C\u51FD\u6570\uFF08\u6CBF\u8D1F x \u8F74\u5206\u652F\u5207\u5272\uFF09", 0, 2.72, { align: "center", color: "#8fa2c8", size: 12 });
      const N = 48;
      for (let i = 0; i < N; i++) {
        const a = i / N * 2 * Math.PI;
        c6.line(0, 0, 2.85 * Math.cos(a), 2.85 * Math.sin(a), { color: "rgba(126,224,163,0.55)", width: 1.1 });
      }
      c6.dot(0, 0, { color: "#0a0f22", r: 26, stroke: "#ff7b72" });
      c6.text("\u6D1E\uFF08\u539F\u70B9\uFF0CR\xB2\u2216{0}\uFF09", 0.38, 0.22, { color: "#ff7b72", size: 12 });
      const cx = st.lcx, cy = st.lcy, R = st.loopR;
      const loop = [];
      const NS = 200;
      for (let k = 0; k <= NS; k++) {
        const a = 2 * Math.PI * k / NS;
        loop.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) });
      }
      const pts = loop.map((p2) => [p2.x, p2.y]);
      c6.poly(pts, { stroke: "#ffd75e", width: 2 });
      const ang = st.loopPhi;
      const pp = [cx + R * Math.cos(ang), cy + R * Math.sin(ang)];
      c6.dot(pp[0], pp[1], { color: "#fff", r: 5.5, stroke: "#ffd75e" });
      const I = lineIntegral2D(dtheta.P, dtheta.Q, loop.slice(0, NS));
      const n2 = Math.round(I / (2 * Math.PI));
      outW.set(I.toFixed(3));
      outN.set(`${n2}\uFF08\u7ED5\u6D1E ${n2} \u5708\uFF09`);
      const chk = curl2D(dtheta.P, dtheta.Q, 1.2, 0.9, 1e-3);
      outC.set(chk.toExponential(2) + " \u2248 0 \u2713\uFF08\u95ED\uFF0C\u4F46\u975E\u6070\u5F53\uFF1A\u222E\u22600\uFF09");
      c6.text(`\u222E d\u03B8 = ${I.toFixed(2)} = 2\u03C0 \xD7 ${n2}`, -2.8, -2.6, { color: "#ffd75e", size: 13 });
    }
    function tick2() {
      if (st.tab === "2" && st.loopPlaying) {
        st.loopPhi = (st.loopPhi + 0.02) % (2 * Math.PI);
        draw2();
      }
    }
    tickT2 = tick2;
    c2.needDraw = () => draw2();
    draw2();
  }
  function setupT3(stage, panel) {
    viz2 = new Viz(stage, { cameraPos: [3.4, -2.4, 2.6] });
    const spec = SURFACES.sphere;
    const hemi = { ...spec, u0: 0, u1: Math.PI / 2 };
    const mesh = meshOf(hemi, { color: 4881112, opacity: 0.8, nu: 48, nv: 64 });
    viz2.add(mesh);
    const grid = gridLinesOn(hemi, { color: 2899822, opacity: 0.5 });
    viz2.add(grid);
    const R = 1;
    const circlePts = [];
    for (let i = 0; i <= 128; i++) {
      const a = i / 128 * 2 * Math.PI;
      circlePts.push([R * Math.cos(a), R * Math.sin(a), 0]);
    }
    const ring = polyline(circlePts, 8315043, 2);
    viz2.add(ring);
    const F = (p2) => [-p2[1], p2[0], 0];
    const Fsegs = [];
    for (let i = 0; i <= 6; i++) for (let j = 0; j <= 10; j++) {
      const u2 = Math.PI / 2 * i / 6;
      const v = 2 * Math.PI * j / 10;
      const p2 = hemi.f(u2, v);
      if (u2 < 0.1) continue;
      const fv = F(p2);
      const n2 = Math.hypot(...fv);
      if (n2 < 1e-6) continue;
      const q = [p2[0] + fv[0] / n2 * 0.28, p2[1] + fv[1] / n2 * 0.28, p2[2] + fv[2] / n2 * 0.28];
      Fsegs.push(...p2, ...q);
    }
    const fg = new As();
    fg.setAttribute("position", new vs(Fsegs, 3));
    const fl2 = new xh(fg, new hh({ color: 5809919, transparent: true, opacity: 0.8 }));
    viz2.add(fl2);
    const part = sphereMark([R, 0, 0], 16766814, 0.07);
    viz2.add(part);
    const playBtn = btn(panel, { label: "\u25B6 \u6CBF\u8FB9\u754C\u73AF\u6D41\u52A8", cb: () => {
      st.playing3 = !st.playing3;
      playBtn.el.classList.toggle("on", st.playing3);
      playBtn.el.textContent = st.playing3 ? "\u23F8 \u6682\u505C" : "\u25B6 \u6CBF\u8FB9\u754C\u73AF\u6D41\u52A8";
    } });
    const outL = readout(panel, "\u222E F\xB7dr = ");
    const outA = readout(panel, "\u222B\u222B (\u2207\xD7F)\xB7dS = ");
    function compute() {
      let L2 = 0;
      const N = 4e3;
      for (let i = 0; i < N; i++) {
        const a0 = i / N * 2 * Math.PI, a1 = (i + 1) / N * 2 * Math.PI;
        const am2 = (a0 + a1) / 2;
        const p2 = [R * Math.cos(am2), R * Math.sin(am2), 0];
        const dr2 = [R * (Math.cos(a1) - Math.cos(a0)), R * (Math.sin(a1) - Math.sin(a0)), 0];
        L2 += F(p2)[0] * dr2[0] + F(p2)[1] * dr2[1] + F(p2)[2] * dr2[2];
      }
      let A = 0;
      const NU = 60, NV = 90;
      for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
        const u2 = Math.PI / 2 * (i + 0.5) / NU;
        const v = 2 * Math.PI * (j + 0.5) / NV;
        const du2 = [Math.cos(u2) * Math.cos(v), Math.cos(u2) * Math.sin(v), -Math.sin(u2)];
        const dv = [-Math.sin(u2) * Math.sin(v), Math.sin(u2) * Math.cos(v), 0];
        const nrm = [du2[1] * dv[2] - du2[2] * dv[1], du2[2] * dv[0] - du2[0] * dv[2], du2[0] * dv[1] - du2[1] * dv[0]];
        const dA = Math.hypot(...nrm);
        const nn2 = nrm.map((c6) => c6 / dA);
        A += 2 * nn2[2] * dA * (Math.PI / 2 / NU) * (2 * Math.PI / NV);
      }
      outL.set(L2.toFixed(4));
      outA.set(A.toFixed(4));
    }
    viz2.tick = () => {
      if (st.tab === "3" && st.playing3) {
        st.phi3 = (st.phi3 ?? 0) + 0.02;
        const a = st.phi3;
        part.position.set(R * Math.cos(a), R * Math.sin(a), 0);
      }
    };
    compute();
  }
  function tick() {
    tickT1();
    tickT2();
  }
  function teardown5() {
    cancelAnimationFrame(raf);
    raf = null;
    tickT1 = () => {
    };
    tickT2 = () => {
    };
    for (const f of cClean2) f();
    cClean2 = [];
    c1?.dispose();
    c1 = null;
    c2?.dispose();
    c2 = null;
    viz2?.dispose();
    viz2 = null;
  }

  // js/modules/m05-lie.js
  var m05_lie_exports = {};
  __export(m05_lie_exports, {
    en: () => en6,
    html: () => html6,
    id: () => id6,
    mount: () => mount6,
    no: () => no7,
    teardown: () => teardown6,
    zh: () => zh7
  });
  var id6 = "m05";
  var no7 = "5";
  var zh7 = "\u674E\u5BFC\u6570\u4E0E\u6D41";
  var en6 = "Lie Derivatives & Flows";
  var st2 = { mode: "A", X: "rot", Y: "trans", px: -0.8, py: 0.5, t: 1.4, playing: false, eps: 0.45 };
  var FIELDS2 = {
    rot: { label: "\u65CB\u8F6C\u573A X = (\u2212y, x)", f: (p2) => [-p2[1], p2[0]] },
    trans: { label: "\u5E73\u52A8\u573A X = (1, 0)", f: () => [1, 0] },
    rad: { label: "\u5F84\u5411\u573A X = (x, y)", f: (p2) => [p2[0], p2[1]] },
    hyp: { label: "\u53CC\u66F2\u573A X = (x, \u2212y)", f: (p2) => [p2[0], -p2[1]] }
  };
  var c3 = null;
  function html6() {
    return `
  <h1 class="mod-title">5. \u674E\u5BFC\u6570\u4E0E\u6D41</h1>
  <div class="mod-sub">Lie Derivatives &amp; Flows</div>
  <div class="mod-intro">
    <p>\u5411\u91CF\u573A $X$ \u7684<b>\u6D41</b>\uFF08flow\uFF09\u662F\u5355\u53C2\u6570\u5FAE\u5206\u540C\u80DA\u7FA4 $\\varphi_t$\uFF0C\u6EE1\u8DB3 $\\frac{d}{dt}\\varphi_t(p) = X_{\\varphi_t(p)}$\u3002\u6A21\u5F0F A \u4E2D\uFF0C\u84DD\u8272\u5411\u91CF $Y$ \u88AB\u6D41"\u62D6\u62FD"\uFF08Lie dragging\uFF09\uFF1A$Y$ \u5C31\u50CF\u63D2\u5728\u6D41\u4F53\u8D28\u70B9\u4E0A\u7684\u5C0F\u6746\uFF0C\u968F\u6D41\u52A8\u800C\u8F6C\u52A8\u3001\u4F38\u7F29\u2014\u2014\u88AB\u62D6\u62FD\u7684 $Y$ \u4E0E\u539F\u6765\u7684 $Y$ \u4E4B\u5DEE\u9664\u4EE5\u65F6\u95F4\u5C31\u662F<b>\u674E\u5BFC\u6570</b> $\\mathcal{L}_X Y$\u3002\u674E\u5BFC\u6570 $\\mathcal{L}_X Y = [X,Y]$\uFF08\u674E\u62EC\u53F7\uFF09\uFF0C\u5B83\u5EA6\u91CF\u4E24\u4E2A\u6D41<b>\u4E0D\u4EA4\u6362</b>\u7684\u7A0B\u5EA6\uFF1A\u6A21\u5F0F B \u4E2D\u6CBF $X$\u3001$Y$\u3001$\u2212X$\u3001$\u2212Y$ \u5404\u8D70 $\\varepsilon$ \u540E\uFF0C\u95ED\u5408\u5DEE\u6B63\u6BD4\u4E8E $\\varepsilon^2[X,Y]$\u3002</p>
  </div>
  <div class="stage" id="stage" style="height:520px"></div>
  <div class="panel"><div id="panel"></div></div>
  <div class="fcard">${KD("\\frac{d}{dt}\\varphi_t(p) = X_{\\varphi_t(p)}, \\quad \\varphi_0 = \\mathrm{id}")}
  ${KD("(\\mathcal{L}_X Y)_p = \\lim_{t\\to 0}\\frac{Y_p - (\\varphi_{-t})_* Y_{\\varphi_t(p)}}{t} = [X,Y]")}
  ${KD("[X,Y]^\\mu = X^\\nu \\partial_\\nu Y^\\mu - Y^\\nu \\partial_\\nu X^\\mu")}
  ${KD("[X,Y] = 0 \\;\\Longleftrightarrow\\; \\varphi^X_s \\circ \\varphi^Y_t = \\varphi^Y_t \\circ \\varphi^X_s \\;\\;\\text{\uFF08\u6D41\u53EF\u4EA4\u6362\uFF09}")}</div>
  `;
  }
  function mount6(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    c3 = new C2(stage, { xmin: -3.2, xmax: 3.2, ymin: -3.2, ymax: 3.2 });
    const mSel = sel(panel, {
      value: "A",
      options: { A: "\u6A21\u5F0F A\uFF1A\u6D41\u4E0E\u674E\u5BFC\u6570\uFF08\u62D6\u62FD\uFF09", B: "\u6A21\u5F0F B\uFF1A\u674E\u62EC\u53F7 [X,Y]\uFF08\u03B5-\u65B9\u5757\uFF09" },
      cb: (v) => {
        st2.mode = v;
        draw();
      }
    });
    const xSel = sel(panel, {
      value: "rot",
      options: { rot: "X = \u65CB\u8F6C\u573A (\u2212y, x)", trans: "X = \u5E73\u52A8\u573A (1, 0)", rad: "X = \u5F84\u5411\u573A (x, y)", hyp: "X = \u53CC\u66F2\u573A (x, \u2212y)" },
      cb: (v) => {
        st2.X = v;
        draw();
      }
    });
    const ySel = sel(panel, {
      value: "trans",
      options: { trans: "Y = \u5E73\u52A8\u573A (1, 0)", rot: "Y = \u65CB\u8F6C\u573A (\u2212y, x)", rad: "Y = \u5F84\u5411\u573A (x, y)", hyp: "Y = \u53CC\u66F2\u573A (x, \u2212y)" },
      cb: (v) => {
        st2.Y = v;
        draw();
      }
    });
    const tSl = slider(panel, { label: "\u6D41\u52A8\u65F6\u95F4 t", min: -3, max: 3, step: 0.02, value: st2.t, cb: (v) => {
      st2.t = v;
      draw();
    } });
    const epsSl = slider(panel, { label: "\u03B5\uFF08\u674E\u62EC\u53F7\u6B65\u957F\uFF09", min: 0.05, max: 0.9, step: 0.01, value: st2.eps, cb: (v) => {
      st2.eps = v;
      draw();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u6D41\u52A8\u52A8\u753B", cb: () => {
      st2.playing = !st2.playing;
      playBtn.el.classList.toggle("on", st2.playing);
      playBtn.el.textContent = st2.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u6D41\u52A8\u52A8\u753B";
    } });
    const outL = readout(panel, "L_X Y \u2248 ");
    const outB = readout(panel, "[X,Y] \u2248 ");
    c3.onClick = (p2) => {
      st2.px = p2.x;
      st2.py = p2.y;
      draw();
    };
    c3.onDrag = c3.onClick;
    c3.needDraw = () => draw();
    function fieldArrows(F, color, alpha) {
      for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) {
        const p2 = [i * 0.9, j * 0.9];
        const v = F(p2);
        const n2 = Math.hypot(v[0], v[1]);
        if (n2 < 1e-6) continue;
        const s = 0.42;
        c3.arrow(p2[0], p2[1], p2[0] + v[0] / n2 * s, p2[1] + v[1] / n2 * s, { color, width: 1.3, head: 5 });
      }
    }
    function draw() {
      c3.clear();
      c3.axes();
      const X = FIELDS2[st2.X].f, Y = FIELDS2[st2.Y].f;
      fieldArrows(X, "rgba(88,166,255,0.55)", 0.5);
      fieldArrows(Y, "rgba(255,107,107,0.5)", 0.5);
      const p2 = [st2.px, st2.py];
      if (st2.mode === "A") {
        const q = flowPoint(X, p2, st2.t, 0.03);
        c3.dot(q[0], q[1], { color: "#58a6ff", r: 6, stroke: "#fff" });
        const Jt2 = flowJac(X, p2, st2.t);
        const pushed = [Jt2[0][0] * Y(p2)[0] + Jt2[0][1] * Y(p2)[1], Jt2[1][0] * Y(p2)[0] + Jt2[1][1] * Y(p2)[1]];
        const scl = 0.42;
        c3.arrow(q[0], q[1], q[0] + pushed[0] * scl, q[1] + pushed[1] * scl, { color: "#7ee0a3", width: 2.6 });
        c3.text("\u03C6_t(p)", q[0] + 0.15, q[1] + 0.28, { color: "#58a6ff", size: 13 });
        c3.text("(\u03C6_t)*Y\uFF08\u88AB\u62D6\u62FD\uFF09", q[0] + pushed[0] * scl * 0.5 + 0.3, q[1] + pushed[1] * scl * 0.5 + 0.25, { color: "#7ee0a3", size: 12 });
        c3.arrow(p2[0], p2[1], p2[0] + Y(p2)[0] * scl, p2[1] + Y(p2)[1] * scl, { color: "#ff6b6b", width: 2.2 });
        c3.text("Y_p", p2[0] + Y(p2)[0] * scl * 1.05, p2[1] + Y(p2)[1] * scl * 1.05 + 0.2, { color: "#ff6b6b", size: 13 });
        c3.dot(p2[0], p2[1], { color: "#ffd75e", r: 5, stroke: "#fff" });
        c3.text("p\uFF08\u53EF\u62D6\u52A8\uFF09", p2[0], p2[1] - 0.35, { color: "#ffd75e", size: 12 });
        const tl2 = Math.max(0.02, Math.min(Math.abs(st2.t), 0.6)) * Math.sign(st2.t || 1);
        const ql2 = flowPoint(X, p2, tl2, 0.01);
        const Jm = flowJac(X, ql2, -tl2);
        const pulled = [Jm[0][0] * Y(ql2)[0] + Jm[0][1] * Y(ql2)[1], Jm[1][0] * Y(ql2)[0] + Jm[1][1] * Y(ql2)[1]];
        const Lie = [(Y(p2)[0] - pulled[0]) / tl2, (Y(p2)[1] - pulled[1]) / tl2];
        const Ln = Math.hypot(Lie[0], Lie[1]);
        if (Ln > 1e-4) {
          const mag = 0.5;
          const lx = Lie[0] / Ln * mag, ly = Lie[1] / Ln * mag;
          c3.arrow(p2[0], p2[1], p2[0] + lx, p2[1] + ly, { color: "#ffd75e", width: 3, head: 12 });
          c3.text("L_X Y\uFF08\u653E\u5927\uFF09", p2[0] + lx * 1.1, p2[1] + ly * 1.1 + 0.25, { color: "#ffd75e", size: 13 });
        }
        outL.set(`(${Lie[0].toFixed(3)}, ${Lie[1].toFixed(3)})  t=${tl2.toFixed(2)}`);
      } else {
        const eps = st2.eps;
        const a = flowPoint(X, p2, eps, eps / 10);
        const b = flowPoint(Y, a, eps, eps / 10);
        const cc2 = flowPoint(X, b, -eps, eps / 10);
        const d2 = flowPoint(Y, cc2, -eps, eps / 10);
        const legs = [[p2, a, "#58a6ff"], [a, b, "#ff6b6b"], [b, cc2, "#4a6ab0"], [cc2, d2, "#c05252"]];
        for (const [s, e2, col] of legs) {
          c3.line(s[0], s[1], e2[0], e2[1], { color: col, width: 2.4 });
          c3.dot(e2[0], e2[1], { color: col, r: 3.5 });
        }
        const gap = [d2[0] - p2[0], d2[1] - p2[1]];
        c3.arrow(p2[0], p2[1], p2[0] + gap[0], p2[1] + gap[1], { color: "#c792ea", width: 2.5 });
        c3.text("\u95ED\u5408\u5DEE \u0394", p2[0] + gap[0] * 0.5, p2[1] + gap[1] * 0.5 - 0.2, { color: "#c792ea", size: 12 });
        const LX = gap[0] / (eps * eps), LY = gap[1] / (eps * eps);
        const Ln = Math.hypot(LX, LY);
        if (Ln > 1e-6) {
          const mag = 0.55;
          const mx = LX / Ln * mag, my = LY / Ln * mag;
          c3.arrow(p2[0], p2[1], p2[0] + mx, p2[1] + my, { color: "#7ee0a3", width: 3.2, head: 13 });
          c3.text("[X,Y] = \u0394/\u03B5\xB2\uFF08\u653E\u5927\uFF09", p2[0] + mx * 1.1, p2[1] + my * 1.1 + 0.25, { color: "#7ee0a3", size: 13 });
        }
        outB.set(`(${LX.toFixed(3)}, ${LY.toFixed(3)})`);
        c3.text("\u6CBF X\u2192Y\u2192\u2212X\u2192\u2212Y \u5404\u8D70 \u03B5", -3.1, 3, { color: "#8fa2c8", size: 12 });
      }
    }
    function flowJac(F, p2, t2) {
      const h2 = 1e-4;
      const e1 = [1, 0], e2 = [0, 1];
      const f1p = flowPoint(F, [p2[0] + h2, p2[1]], t2, 0.02);
      const f1m = flowPoint(F, [p2[0] - h2, p2[1]], t2, 0.02);
      const f2p = flowPoint(F, [p2[0], p2[1] + h2], t2, 0.02);
      const f2m = flowPoint(F, [p2[0], p2[1] - h2], t2, 0.02);
      return [
        [(f1p[0] - f1m[0]) / (2 * h2), (f2p[0] - f2m[0]) / (2 * h2)],
        [(f1p[1] - f1m[1]) / (2 * h2), (f2p[1] - f2m[1]) / (2 * h2)]
      ];
    }
    draw();
    c3._tick = () => {
      if (st2.playing && st2.mode === "A") {
        st2.t += 0.025;
        if (st2.t > 3) st2.t = -3;
        draw();
      }
    };
    const iv = setInterval(() => c3._tick(), 33);
    c3._iv = iv;
  }
  function teardown6() {
    clearInterval(c3?._iv);
    c3?.dispose();
    c3 = null;
  }

  // js/modules/m06-parallel.js
  var m06_parallel_exports = {};
  __export(m06_parallel_exports, {
    en: () => en7,
    html: () => html7,
    id: () => id7,
    mount: () => mount7,
    no: () => no8,
    teardown: () => teardown7,
    zh: () => zh8
  });
  var id7 = "m06";
  var no8 = "6";
  var zh8 = "\u8054\u7EDC\u4E0E\u5E73\u884C\u79FB\u52A8";
  var en7 = "Connections & Parallel Transport";
  var st3 = {
    surface: "sphere",
    curve: "lat",
    theta: 0.9,
    prog: 0,
    playing: false,
    coneR: 1.3,
    torusCurve: "vloop",
    showPlane: true,
    showRigid: true
  };
  var viz3 = null;
  var c22 = null;
  var dragOff = null;
  var transport = { curve: [], vecs: [], N: 0 };
  function html7() {
    return `
  <h1 class="mod-title">6. \u8054\u7EDC\u4E0E\u5E73\u884C\u79FB\u52A8</h1>
  <div class="mod-sub">Connections &amp; Parallel Transport</div>
  <div class="mod-intro">
    <p><b>\u534F\u53D8\u5BFC\u6570/\u8054\u7EDC</b> $\\nabla$ \u544A\u8BC9\u6211\u4EEC\u5982\u4F55"\u5E73\u884C\u5730"\u642C\u52A8\u5411\u91CF\uFF1A\u5411\u91CF\u6CBF\u66F2\u7EBF $\\gamma$ <b>\u5E73\u884C\u79FB\u52A8</b>\uFF08parallel transport\uFF09\u6EE1\u8DB3 $\\nabla_{\\dot\\gamma} v = 0$\u3002\u5728\u5D4C\u5165\u66F2\u9762\uFF08Levi-Civita \u8054\u7EDC\uFF09\u4E0A\uFF0C\u8FD9\u7B49\u4E8E"\u6CBF\u66F2\u7EBF\u79FB\u52A8\u65F6\u4FDD\u6301\u5411\u91CF\u4E0E\u66F2\u9762\u76F8\u5207\u3001\u4E14\u76F8\u5BF9\u5207\u7EBF\u65B9\u5411\u4E0D\u8F6C\u52A8"\u2014\u2014\u5B9E\u73B0\u4E3A\u6BCF\u6B65\u628A\u5411\u91CF\u521A\u6027\u642C\u8FD0\u540E\u6295\u5F71\u56DE\u5207\u5E73\u9762\u3002\u7ED5<b>\u95ED\u5408\u56DE\u8DEF</b>\u4E00\u5468\u540E\u5411\u91CF\u4E00\u822C<b>\u4E0D\u56DE\u5230\u539F\u65B9\u5411</b>\uFF0C\u8F6C\u89D2 $\\Delta\\theta$ \u79F0\u4E3A <b>holonomy</b>\uFF0C\u5B83\u7B49\u4E8E\u56DE\u8DEF\u6240\u56F4\u533A\u57DF\u7684\u66F2\u7387\u79EF\u5206\uFF1A$\\Delta\\theta = \\int_D K\\, dA \\pmod{2\\pi}$\uFF08Gauss\u2013Bonnet \u7684\u5C40\u90E8\u7248\u672C\uFF09\u3002\u5706\u9525\u9664\u9876\u70B9\u5916\u5904\u5904\u5E73\u5766\uFF08$K=0$\uFF09\uFF0C\u4F46\u7ED5\u9876\u70B9\u4E00\u5708 holonomy \u6070\u7B49\u4E8E<b>\u89D2\u4E8F\u635F</b>\u2014\u2014\u66F2\u7387"\u96C6\u4E2D"\u5728\u9876\u70B9\u3002</p>
  </div>
  <div class="split">
    <div>
      <div class="stage" id="stage"><span class="stage-tag">\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E</span></div>
      <div class="panel"><div id="panel"></div></div>
    </div>
    <div class="side2">
      <div class="stage" id="stage2" style="height:300px"></div>
      <div class="fcard">${KD("\\nabla_{\\dot\\gamma} v = 0 \\;\\;\\text{\uFF08\u5E73\u884C\u79FB\u52A8\u6761\u4EF6\uFF09}")}
      ${KD("\\Delta\\theta = \\oint_{\\partial D} \\omega = \\int_D K\\, dA \\pmod{2\\pi}")}
      ${KD("\\text{\u5706\u9525\u89D2\u4E8F\u635F} = 2\\pi(1 - \\sin\\alpha)")}</div>
    </div>
  </div>
  `;
  }
  function mount7(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    viz3 = new Viz(stage, { cameraPos: [3.2, -2.6, 2.4] });
    let mesh = null, grid = null, curveLine = null, vArrow = null, ghostArrow = null, rigidArrow = null, tPlane = null;
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2", torus: "\u73AF\u9762 T\xB2", cone: "\u5706\u9525\uFF08\u9876\u70B9\u66F2\u7387\uFF09" },
      cb: (v) => {
        st3.surface = v;
        rebuild();
        buildCurve();
        sync();
      }
    });
    const curvSel = sel(panel, {
      value: "lat",
      options: { lat: "\u7EAC\u5708\uFF08\u95ED\u5408\uFF09", great: "\u5927\u5706\u5F27\uFF08\u95ED\u5408\uFF09", spiral: "\u87BA\u65CB\uFF08\u5F00\uFF09" },
      cb: () => {
        buildCurve();
        sync();
      }
    });
    const thSl = slider(panel, { label: "\u7EAC\u5708\u6781\u89D2 \u03B8", min: 0.15, max: Math.PI - 0.15, step: 0.01, value: st3.theta, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      st3.theta = v;
      buildCurve();
      sync();
    } });
    const rSl = slider(panel, { label: "\u5706\u9525\u56DE\u8DEF\u534A\u5F84", min: 0.4, max: 2.1, step: 0.05, value: st3.coneR, cb: () => {
      buildCurve();
      sync();
    } });
    const progSl = slider(panel, { label: "\u79FB\u52A8\u8FDB\u5EA6", min: 0, max: 1, step: 1e-3, value: 0, cb: (v) => {
      st3.prog = v;
      sync();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u5E73\u884C\u79FB\u52A8\u52A8\u753B", cb: () => {
      st3.playing = !st3.playing;
      playBtn.el.classList.toggle("on", st3.playing);
      playBtn.el.textContent = st3.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u5E73\u884C\u79FB\u52A8\u52A8\u753B";
    } });
    const tpBtn = btn(panel, { label: "\u5207\u5E73\u9762 \u5F00", active: true, cb: () => {
      st3.showPlane = !st3.showPlane;
      tPlane.visible = st3.showPlane;
      tpBtn.el.classList.toggle("on", st3.showPlane);
      tpBtn.el.textContent = st3.showPlane ? "\u5207\u5E73\u9762 \u5F00" : "\u5207\u5E73\u9762 \u5173";
    } });
    const rgBtn = btn(panel, { label: "\u521A\u6027\u53C2\u8003\u5411\u91CF \u5F00", active: true, cb: () => {
      st3.showRigid = !st3.showRigid;
      rigidArrow.visible = st3.showRigid;
      rgBtn.el.classList.toggle("on", st3.showRigid);
      rgBtn.el.textContent = st3.showRigid ? "\u521A\u6027\u53C2\u8003\u5411\u91CF \u5F00" : "\u521A\u6027\u53C2\u8003\u5411\u91CF \u5173";
    } });
    const outH = readout(panel, "holonomy \u0394\u03B8 = ");
    const outK = readout(panel, "\u222BD K dA = ");
    function rebuild() {
      viz3.remove(mesh, grid, curveLine, vArrow, ghostArrow, rigidArrow, tPlane);
      dragOff?.();
      const spec = SURFACES[st3.surface];
      mesh = meshOf(spec, { color: st3.surface === "cone" ? 9076696 : 4157400, opacity: 0.88 });
      grid = gridLinesOn(spec, { opacity: 0.45 });
      viz3.add(mesh, grid);
      curveLine = polyline([], 8315043, 2);
      viz3.add(curveLine);
      vArrow = arrow([0, 0, 0], [1, 0, 0], 16766814, { len: 0.5 });
      ghostArrow = arrow([0, 0, 0], [1, 0, 0], 16766814, { len: 0.5, head: 0.1 });
      ghostArrow.material.transparent = true;
      ghostArrow.material.opacity = 0.25;
      rigidArrow = arrow([0, 0, 0], [1, 0, 0], 16777215, { len: 0.42 });
      rigidArrow.material.transparent = true;
      rigidArrow.material.opacity = 0.55;
      tPlane = new Xs(
        new ru(0.5, 36),
        new es({ color: 5809919, transparent: true, opacity: 0.14, side: p, depthWrite: false })
      );
      viz3.add(vArrow, ghostArrow, rigidArrow, tPlane);
      vArrow.visible = ghostArrow.visible = rigidArrow.visible = tPlane.visible = true;
      tPlane.visible = st3.showPlane;
      rigidArrow.visible = st3.showRigid;
      dragOff = enableDrag(viz3, mesh, spec, (u2, v) => {
        if (st3.surface === "sphere") {
          st3.theta = Math.min(Math.max(u2, 0.15), Math.PI - 0.15);
          buildCurve();
          sync();
        } else if (st3.surface === "cone") {
          st3.coneR = Math.min(Math.max(u2, 0.4), 2.1);
          buildCurve();
          sync();
        }
      });
      const opts = st3.surface === "sphere" ? { lat: "\u7EAC\u5708\uFF08\u95ED\u5408\uFF09", great: "\u5927\u5706\u5F27\uFF08\u95ED\u5408\uFF09", spiral: "\u87BA\u65CB\uFF08\u5F00\uFF09" } : st3.surface === "torus" ? { vloop: "\u7EAC\u5708 u=const\uFF08\u95ED\u5408\uFF09", uloop: "\u7ECF\u5708 v=const\uFF08\u95ED\u5408\uFF09", diag: "\u5BF9\u89D2 4:3\uFF08\u95ED\u5408\uFF09" } : { loop: "\u7ED5\u9876\u70B9\u4E00\u5708\uFF08\u95ED\u5408\uFF09" };
      curvSel.el.innerHTML = "";
      for (const [k, lbl] of Object.entries(opts)) {
        const op2 = document.createElement("option");
        op2.value = k;
        op2.textContent = lbl;
        curvSel.el.appendChild(op2);
      }
      st3.curve = st3.surface === "sphere" ? "lat" : st3.surface === "torus" ? "vloop" : "loop";
      curvSel.el.value = st3.curve;
      thSl.el.style.display = st3.surface === "sphere" ? "" : "none";
      rSl.el.style.display = st3.surface === "cone" ? "" : "none";
    }
    function buildCurve() {
      const spec = SURFACES[st3.surface];
      transport.curve = [];
      const N = 640;
      if (st3.surface === "sphere") {
        if (st3.curve === "lat") {
          for (let i = 0; i <= N; i++) {
            const v = i / N * 2 * Math.PI;
            transport.curve.push({ u: st3.theta, v, p: spec.f(st3.theta, v) });
          }
        } else if (st3.curve === "great") {
          const del = 0.42;
          const a = [1, 0, 0], b = [0, Math.cos(del), Math.sin(del)];
          for (let i = 0; i <= N; i++) {
            const s = i / N * 2 * Math.PI;
            const p2 = V.add(V.scale(a, Math.cos(s)), V.scale(b, Math.sin(s)));
            const u2 = Math.acos(Math.max(-1, Math.min(1, p2[2])));
            transport.curve.push({ u: u2, v: Math.atan2(p2[1], p2[0]), p: p2 });
          }
        } else {
          for (let i = 0; i <= N; i++) {
            const t2 = i / N * 2 * Math.PI * 2;
            const u2 = Math.PI / 2 + 0.4 * Math.sin(0.5 * t2);
            transport.curve.push({ u: u2, v: t2, p: spec.f(u2, t2) });
          }
        }
      } else if (st3.surface === "torus") {
        if (st3.curve === "vloop") {
          for (let i = 0; i <= N; i++) {
            const v = i / N * 2 * Math.PI;
            transport.curve.push({ u: 2.2, v, p: spec.f(2.2, v) });
          }
        } else if (st3.curve === "uloop") {
          for (let i = 0; i <= N; i++) {
            const u2 = i / N * 2 * Math.PI;
            transport.curve.push({ u: u2, v: 0.8, p: spec.f(u2, 0.8) });
          }
        } else {
          for (let i = 0; i <= N; i++) {
            const t2 = i / N * 4 * Math.PI * 3;
            const u2 = 2 * t2 % (2 * Math.PI);
            const v = 1.5 * t2;
            transport.curve.push({ u: u2, v, p: spec.f(u2, v) });
          }
        }
      } else {
        for (let i = 0; i <= N; i++) {
          const v = i / N * 2 * Math.PI;
          transport.curve.push({ u: st3.coneR, v, p: spec.f(st3.coneR, v) });
        }
      }
      transport.N = transport.curve.length;
      const s0 = transport.curve[0];
      const d0 = surfaceData(spec, s0.u, s0.v);
      let v0;
      if (st3.surface === "torus" && st3.curve === "vloop") {
        v0 = V.normalize(tangentToWorld(spec, s0.u, s0.v, 0, 1));
      } else {
        v0 = V.normalize(d0.du);
      }
      transport.vecs = parallelTransport(spec, transport.curve, v0).map((x) => x.vec);
      updateLine(curveLine, transport.curve.map((q) => q.p));
    }
    function sync() {
      const spec = SURFACES[st3.surface];
      if (!transport.N) return;
      const idx = Math.max(0, Math.min(Math.floor(st3.prog * (transport.N - 1)), transport.N - 1));
      const q = transport.curve[idx];
      const p2 = q.p;
      const d2 = surfaceData(spec, q.u, q.v);
      tPlane.position.set(...p2);
      tPlane.quaternion.setFromUnitVectors(new Ui(0, 0, 1), new Ui(...d2.n));
      const vec = V.normalize(transport.vecs[idx]);
      vArrow.position.set(...p2);
      vArrow.setDirection(new Ui(...vec));
      const v0 = V.normalize(transport.vecs[0]);
      ghostArrow.position.set(...p2);
      ghostArrow.setDirection(new Ui(...v0));
      rigidArrow.position.set(...p2);
      rigidArrow.setDirection(new Ui(...v0));
      if (st3.curve !== "spiral") {
        const ang = holonomyAngle(spec, transport.vecs.map((v, i) => ({ ...transport.curve[i], vec: v })));
        const deg = ang * 180 / Math.PI;
        outH.set(`${deg.toFixed(1)}\xB0\uFF08${ang.toFixed(3)} rad\uFF09`);
        let expect = NaN;
        if (st3.surface === "sphere") {
          expect = 2 * Math.PI * (1 - Math.cos(st3.theta));
        } else if (st3.surface === "cone") {
          expect = 2 * Math.PI * (1 - 0.5);
        } else if (st3.surface === "torus") {
          const region = st3.curve === "vloop" ? { u: [0, 2.2], v: [0, 2 * Math.PI] } : null;
          expect = NaN;
          if (region) {
            let s = 0;
            const NU = 40, NV = 60;
            for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
              const u2 = (i + 0.5) / NU * 2.2;
              const v = (j + 0.5) / NV * 2 * Math.PI;
              const dd2 = surfaceData(spec, u2, v);
              s += gaussianK(spec, u2, v) * Math.sqrt(Math.max(dd2.E * dd2.G - dd2.F * dd2.F, 0)) * (2.2 / NU) * (2 * Math.PI / NV);
            }
            expect = s;
          }
        }
        if (isFinite(expect)) outK.set(`${expect.toFixed(3)} rad\uFF08${(expect * 180 / Math.PI).toFixed(1)}\xB0\uFF09`);
        else outK.set("\u2014");
      } else {
        outH.set("\u5F00\u66F2\u7EBF\uFF08\u65E0 holonomy\uFF09");
        outK.set("\u2014");
      }
      drawSide(q.u, q.v, idx);
    }
    function gaussianK(spec, u2, v) {
      return gaussianCurvature(spec, u2, v);
    }
    viz3.tick = () => {
      if (st3.playing) {
        st3.prog = (st3.prog + 35e-4) % 1;
        progSl.set(st3.prog);
        sync();
      }
    };
    const stage2 = host.querySelector("#stage2");
    c22 = new C2(stage2, { xmin: -3, xmax: 3, ymin: -2.6, ymax: 2.6 });
    c22.needDraw = () => drawSide(transport.curve[Math.floor(st3.prog * (transport.N - 1))]?.u ?? st3.theta, 0, 0);
    rebuild();
    buildCurve();
    sync();
    function drawSide(u2, v, idx) {
      const c6 = c22;
      if (!c6) return;
      c6.clear();
      if (st3.surface === "sphere") {
        c6.axes("#2a3a60");
        const pts = [];
        for (let i = 0; i <= 100; i++) {
          const th2 = 0.05 + i / 100 * (Math.PI - 0.1);
          pts.push([th2 - Math.PI / 2, 2 * Math.PI * (1 - Math.cos(th2))]);
        }
        c6.poly(pts, { stroke: "#7ee0a3", width: 2 });
        const cur = 2 * Math.PI * (1 - Math.cos(st3.theta));
        c6.dot(st3.theta - Math.PI / 2, cur, { color: "#ffd75e", r: 5.5, stroke: "#fff" });
        c6.line(st3.theta - Math.PI / 2, 0, st3.theta - Math.PI / 2, cur, { color: "rgba(255,215,94,0.4)", dash: [4, 4] });
        c6.text("holonomy \u0394\u03B8 = 2\u03C0(1\u2212cos\u03B8) = \u222B \u7403\u51A0 K dA", 0, 2.4, { align: "center", color: "#8fa2c8", size: 12 });
        c6.text(`\u5F53\u524D \u03B8 = ${(st3.theta * 180 / Math.PI).toFixed(0)}\xB0 \u2192 \u0394\u03B8 = ${(cur * 180 / Math.PI).toFixed(1)}\xB0`, 0, 2.1, { align: "center", color: "#ffd75e", size: 12 });
      } else if (st3.surface === "torus") {
        c6.axes("#2a3a60");
        for (let i = 0; i <= 6; i++) {
          c6.line(0, i / 6 * 2 * Math.PI, 2 * Math.PI, i / 6 * 2 * Math.PI, { color: "#1c2a4a" });
        }
        for (let j = 0; j <= 6; j++) {
          c6.line(j / 6 * 2 * Math.PI, 0, j / 6 * 2 * Math.PI, 2 * Math.PI, { color: "#1c2a4a" });
        }
        const pts = transport.curve.map((q) => [q.u, q.v]);
        c6.poly(pts, { stroke: "#7ee0a3", width: 2 });
        c6.dot(pts[idx]?.[0] ?? 0, pts[idx]?.[1] ?? 0, { color: "#fff", r: 5, stroke: "#ffd75e" });
        c6.text("\u53C2\u6570\u57DF\u56DE\u8DEF\uFF1A(u,v) \u2208 [0,2\u03C0]\xB2", 0, 2.45, { align: "center", color: "#8fa2c8", size: 12 });
      } else {
        const sector = Math.PI * 0.5;
        const Rf = 2.2;
        const cx = 0, cy = -0.4;
        const seg = (a0, a1, r) => {
          const pts = [];
          for (let i = 0; i <= 60; i++) {
            const a2 = a0 + (a1 - a0) * i / 60;
            pts.push([cx + r * Math.cos(a2), cy + r * Math.sin(a2)]);
          }
          return pts;
        };
        c6.poly(seg(-sector, sector, Rf), { stroke: "#5a6c9e", width: 2 });
        c6.line(cx, cy, cx + Rf * Math.cos(-sector), cy + Rf * Math.sin(-sector), { color: "#5a6c9e", width: 2 });
        c6.line(cx, cy, cx + Rf * Math.cos(sector), cy + Rf * Math.sin(sector), { color: "#5a6c9e", width: 2 });
        c6.text("\u5C55\u5E73\u540E\u7684\u5706\u9525 = \u6247\u5F62\uFF08\u5F20\u89D2 2\u03C0 sin\u03B1 = \u03C0\uFF09", cx, cy + 0.55, { align: "center", color: "#8fa2c8", size: 12 });
        const r0 = st3.coneR / 2.3 * Rf;
        const arc = seg(-sector, sector, r0);
        c6.poly(arc, { stroke: "#7ee0a3", width: 2.4 });
        const fr2 = (v2) => -sector + v2 * sector / Math.PI;
        const a = fr2(st3.prog * 2 * Math.PI);
        const pp = [cx + r0 * Math.cos(a), cy + r0 * Math.sin(a)];
        c6.dot(pp[0], pp[1], { color: "#fff", r: 5, stroke: "#ffd75e" });
        const tang = [Math.cos(a - Math.PI / 2), Math.sin(a - Math.PI / 2)];
        c6.arrow(pp[0], pp[1], pp[0] + tang[0] * 0.5, pp[1] + tang[1] * 0.5, { color: "#ffd75e", width: 2.5 });
        c6.text("\u5C55\u5E73\u56FE\u4E2D\u5411\u91CF\u4E0D\u8F6C\uFF1B\u7C98\u56DE\u5706\u9525\u65F6\u4E24\u76F4\u8FB9\u4EE5\u89D2\u4E8F\u635F \u03C0 \u76F8\u7C98", cx, cy - 2.05, { align: "center", color: "#8fa2c8", size: 11.5 });
      }
    }
    drawSide(0, 0, 0);
  }
  function teardown7() {
    dragOff?.();
    viz3?.dispose();
    viz3 = null;
    c22?.dispose();
    c22 = null;
  }

  // js/modules/m07-geodesics.js
  var m07_geodesics_exports = {};
  __export(m07_geodesics_exports, {
    en: () => en8,
    html: () => html8,
    id: () => id8,
    mount: () => mount8,
    no: () => no9,
    teardown: () => teardown8,
    zh: () => zh9
  });
  var id8 = "m07";
  var no9 = "7";
  var zh9 = "\u6D4B\u5730\u7EBF";
  var en8 = "Geodesics";
  var st4 = {
    surface: "sphere",
    u0: Math.PI / 2,
    v0: 0,
    du0: 0,
    dv0: 1,
    prog: 0,
    playing: false,
    devMode: false
  };
  var viz4 = null;
  var c23 = null;
  var dragOff2 = null;
  var geo = [];
  var devGeo1 = [];
  var devGeo2 = [];
  function html8() {
    return `
  <h1 class="mod-title">7. \u6D4B\u5730\u7EBF</h1>
  <div class="mod-sub">Geodesics &amp; Geodesic Deviation</div>
  <div class="mod-intro">
    <p><b>\u6D4B\u5730\u7EBF</b>\u662F"\u81EA\u8EAB\u5207\u5411\u91CF\u6CBF\u66F2\u7EBF\u5E73\u884C"\u7684\u66F2\u7EBF $\\nabla_{\\dot\\gamma}\\dot\\gamma = 0$\uFF0C\u5373\u5C40\u90E8\u6700\u77ED\u8DEF\u5F84\u3002\u5728\u53C2\u6570\u5750\u6807\u4E0B\u5B83\u6EE1\u8DB3 $\\ddot{x}^\\mu + \\Gamma^\\mu_{\\nu\\lambda}\\dot{x}^\\nu \\dot{x}^\\lambda = 0$\u3002\u7403\u9762\u4E0A\u6D4B\u5730\u7EBF\u662F\u5927\u5706\uFF1B\u73AF\u9762\u4E0A\u6D4B\u5730\u7EBF\u7684"\u659C\u7387"\u4E3A\u6709\u7406\u6570\u65F6\u95ED\u5408\u3001\u4E3A\u65E0\u7406\u6570\u65F6\u7A20\u5BC6\u5730\u7F20\u7ED5\uFF1B\u629B\u7269\u9762\u4E0A\u6D4B\u5730\u7EBF\u7ED5\u9876\u70B9\u76D8\u65CB\u3002\u53F3\u4FA7\u4E0B\u65B9\u53EF\u4EE5\u89C2\u5BDF<b>\u6D4B\u5730\u504F\u79BB</b>\uFF1A\u4E24\u6761\u76F8\u90BB\u7684\u5E73\u884C\u6D4B\u5730\u7EBF\u7684\u95F4\u8DDD $s(t)$ \u6EE1\u8DB3 <b>Jacobi \u65B9\u7A0B</b> $\\nabla^2_{\\dot\\gamma} s + R(\\dot\\gamma, s)\\dot\\gamma = 0$\uFF0C\u5728 $K=1$ \u7684\u7403\u9762\u4E0A $s'' + s = 0$\uFF08\u805A\u7126\uFF09\uFF0C\u5728 $K<0$ \u5904\u5219\u6307\u6570\u53D1\u6563\u3002</p>
  </div>
  <div class="split">
    <div>
      <div class="stage" id="stage"><span class="stage-tag">\u62D6\u62FD\u8D77\u70B9 \xB7 \u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E</span></div>
      <div class="panel"><div id="panel"></div></div>
    </div>
    <div class="side2">
      <div class="stage" id="stage2" style="height:300px"></div>
      <div class="fcard">${KD("\\ddot{x}^\\mu + \\Gamma^\\mu_{\\nu\\lambda} \\dot{x}^\\nu \\dot{x}^\\lambda = 0")}
      ${KD("\\nabla_{\\dot\\gamma}\\dot\\gamma = 0 \\;\\;\\Leftrightarrow\\;\\; \\text{\u6D4B\u5730\u7EBF}")}
      ${KD("\\frac{d^2 s}{dt^2} + K\\, s = 0 \\;\\;\\text{\uFF082 \u7EF4 Jacobi \u65B9\u7A0B\uFF09}")}
      ${KD("\\text{\u7403\u9762 } K{=}1{:}\\; s = s_0\\cos t \\quad \\text{\u53CC\u66F2 } K{=}{-}1{:}\\; s = s_0\\cosh t")}</div>
    </div>
  </div>
  `;
  }
  function mount8(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    viz4 = new Viz(stage, { cameraPos: [3.6, -2.8, 2.6] });
    let mesh = null, grid = null, line = null, vArrow = null, particle = null, line2 = null;
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2", torus: "\u73AF\u9762 T\xB2", paraboloid: "\u65CB\u8F6C\u629B\u7269\u9762", pseudosphere: "\u4F2A\u7403\u9762\uFF08K=\u22121\uFF09" },
      cb: (v) => {
        st4.surface = v;
        rebuild();
        clamp();
        integrate();
        sync();
      }
    });
    const u0Sl = slider(panel, { label: "\u8D77\u70B9 u\u2080", min: 0.1, max: Math.PI, step: 0.01, value: st4.u0, cb: (v) => {
      st4.u0 = v;
      integrate();
      sync();
    } });
    const v0Sl = slider(panel, { label: "\u8D77\u70B9 v\u2080", min: 0, max: 2 * Math.PI, step: 0.01, value: st4.v0, cb: (v) => {
      st4.v0 = v;
      integrate();
      sync();
    } });
    const duSl = slider(panel, { label: "\u521D\u901F \xFC\u2080", min: -1.5, max: 1.5, step: 0.01, value: st4.du0, cb: (v) => {
      st4.du0 = v;
      integrate();
      sync();
    } });
    const dvSl = slider(panel, { label: "\u521D\u901F v\u0307\u2080", min: -1.5, max: 1.5, step: 0.01, value: st4.dv0, cb: (v) => {
      st4.dv0 = v;
      integrate();
      sync();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u6CBF\u6D4B\u5730\u7EBF\u8FD0\u52A8", cb: () => {
      st4.playing = !st4.playing;
      playBtn.el.classList.toggle("on", st4.playing);
      playBtn.el.textContent = st4.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u6CBF\u6D4B\u5730\u7EBF\u8FD0\u52A8";
    } });
    const devBtn = btn(panel, { label: "\u6D4B\u5730\u504F\u79BB\u6F14\u793A\uFF08\u7403\u9762\uFF09", cb: () => {
      st4.devMode = !st4.devMode;
      devBtn.el.classList.toggle("on", st4.devMode);
      integrate();
      sync();
    } });
    const resBtn = btn(panel, { label: "\u21BA \u590D\u4F4D\u89C6\u89D2", cb: () => {
      viz4.camera.position.set(3.6, -2.8, 2.6);
      viz4.controls.target.set(0, 0, 0);
    } });
    const outS = readout(panel, "\u901F\u5EA6 |\u03B3\u0307| = ");
    const outC = readout(panel, "\u95ED\u5408\u6027 = ");
    function rebuild() {
      viz4.remove(mesh, grid, line, line2, vArrow, particle);
      dragOff2?.();
      const spec = SURFACES[st4.surface];
      mesh = meshOf(spec, { color: 4157400, opacity: 0.85 });
      grid = gridLinesOn(spec, { opacity: 0.4 });
      viz4.add(mesh, grid);
      line = polyline([], 8315043, 2.2);
      line2 = polyline([], 16757844, 1.6);
      viz4.add(line, line2);
      vArrow = arrow([0, 0, 0], [1, 0, 0], 16766814, { len: 0.4 });
      particle = sphereMark([0, 0, 0], 16769154, 0.075);
      viz4.add(vArrow, particle);
      u0Sl.el.querySelector("input").min = spec.u0;
      u0Sl.el.querySelector("input").max = spec.u1;
      v0Sl.el.querySelector("input").min = spec.v0;
      v0Sl.el.querySelector("input").max = spec.v1;
      dragOff2 = enableDrag(viz4, mesh, spec, (u2, v) => {
        st4.u0 = u2;
        st4.v0 = v;
        integrate();
        sync();
      });
    }
    function clamp() {
      const s = SURFACES[st4.surface];
      st4.u0 = Math.min(Math.max(st4.u0, s.u0 + 0.02), s.u1 - 0.02);
      st4.v0 = Math.min(Math.max(st4.v0, s.v0), s.v1);
    }
    function integrate() {
      const spec = SURFACES[st4.surface];
      clamp();
      const T = st4.surface === "torus" ? 26 : st4.surface === "sphere" ? 22 : st4.surface === "paraboloid" ? 16 : 14;
      geo = integrateGeodesic(spec, st4.u0, st4.v0, st4.du0, st4.dv0, T, 0.02);
      updateLine(line, geo.map((q) => q.p));
      st4.prog = 0;
      if (st4.devMode && st4.surface === "sphere") {
        const del = 0.14;
        const spd = (u2, v) => {
          const d2 = surfaceData(spec, u2, v);
          return Math.sqrt(Math.abs(d2.E * st4.du0 ** 2 + 2 * d2.F * st4.du0 * st4.dv0 + d2.G * st4.dv0 ** 2));
        };
        const k = spd(st4.u0, st4.v0) / (spd(st4.u0 + del, st4.v0) || 1e-9);
        devGeo1 = integrateGeodesic(spec, st4.u0, st4.v0, st4.du0, st4.dv0, 10, 0.02);
        devGeo2 = integrateGeodesic(spec, st4.u0 + del, st4.v0, st4.du0 * k, st4.dv0 * k, 10, 0.02);
        line2.visible = true;
        updateLine(line2, devGeo2.map((q) => q.p));
        const s0 = V.norm(V.sub(devGeo1[0].p, devGeo2[0].p));
        plotDeviation(s0);
      } else {
        line2.visible = false;
        plotParam();
      }
    }
    function sync() {
      const spec = SURFACES[st4.surface];
      if (!geo.length) return;
      const idx = Math.max(0, Math.min(Math.floor(st4.prog * (geo.length - 1)), geo.length - 1));
      const q = geo[idx];
      particle.position.set(...q.p);
      const s0 = geo[0];
      const vw = tangentToWorld(spec, s0.u, s0.v, st4.du0, st4.dv0);
      vArrow.position.set(...s0.p);
      vArrow.setDirection(new Ui(...V.normalize(vw)));
      const d0 = surfaceData(spec, s0.u, s0.v);
      const sp0 = Math.sqrt(d0.E * st4.du0 ** 2 + 2 * d0.F * st4.du0 * st4.dv0 + d0.G * st4.dv0 ** 2);
      const dq = surfaceData(spec, q.u, q.v);
      const spq = Math.sqrt(dq.E * st4.du0 ** 2 + 2 * dq.F * st4.du0 * st4.dv0 + dq.G * st4.dv0 ** 2);
      outS.set(`${sp0.toFixed(3)}\uFF08\u6F02\u79FB ${(Math.abs(sp0 - spq) / (sp0 || 1) * 100).toFixed(2)}%\uFF09`);
      const start = geo[0].p;
      let minD = Infinity;
      for (let i = Math.floor(geo.length * 0.15); i < geo.length; i++) {
        const d2 = V.norm(V.sub(geo[i].p, start));
        if (d2 < minD) minD = d2;
      }
      if (st4.surface === "sphere" && Math.abs(st4.du0) < 1e-6 && Math.abs(st4.dv0) > 0.01) outC.set("\u95ED\u5408\uFF08\u5927\u5706\uFF09");
      else if (minD < 0.06) outC.set(`\u95ED\u5408\uFF08\u6700\u5C0F\u56DE\u8FD4\u8DDD\u79BB ${minD.toFixed(3)}\uFF09`);
      else if (st4.surface === "torus") outC.set(`\u53EF\u80FD\u7A20\u5BC6\u7F20\u7ED5\uFF08\u6700\u5C0F\u56DE\u8FD4\u8DDD\u79BB ${minD.toFixed(3)}\uFF09`);
      else outC.set(`\u5F00\u66F2\u7EBF\uFF08\u6700\u5C0F\u56DE\u8FD4\u8DDD\u79BB ${minD.toFixed(3)}\uFF09`);
    }
    viz4.tick = () => {
      if (st4.playing) {
        st4.prog = (st4.prog + 18e-4) % 1;
        sync();
      }
    };
    const stage2 = host.querySelector("#stage2");
    c23 = new C2(stage2, { xmin: 0, xmax: 10.5, ymin: -0.6, ymax: 1.5 });
    c23.needDraw = () => st4.devMode ? plotDeviation(2 * Math.sin(0.07)) : plotParam();
    function plotDeviation(s0) {
      const c6 = c23;
      c6.clear();
      c6.axes("#2a3a60");
      const N = Math.min(devGeo1.length, devGeo2.length, 500);
      const pts = [];
      for (let i = 0; i < N; i++) {
        const s = V.norm(V.sub(devGeo1[i].p, devGeo2[i].p));
        pts.push([devGeo1[i].t, s]);
      }
      c6.poly(pts, { stroke: "#ffb454", width: 2.2 });
      const theo = [];
      for (let i = 0; i <= 200; i++) {
        const t2 = i / 200 * 10;
        theo.push([t2, Math.abs(s0 * Math.cos(t2))]);
      }
      c6.poly(theo, { stroke: "#7ee0a3", dash: [6, 4], width: 1.8 });
      c6.text("\u2014\u2014 \u6570\u503C s(t)", 5.2, 1.28, { color: "#ffb454", size: 12 });
      c6.text("- - - \u7406\u8BBA s = s\u2080|cos t|\uFF08Jacobi: s\u2033 + Ks = 0\uFF09", 5.2, 1.05, { color: "#7ee0a3", size: 12 });
      c6.text("\u6D4B\u5730\u504F\u79BB\uFF1A\u4E24\u6761\u5E73\u884C\u6D4B\u5730\u7EBF\u5728\u7403\u9762\u4E0A\u805A\u7126\uFF08t=\u03C0/2 \u76F8\u4EA4\uFF09", 5.2, 0.8, { color: "#8fa2c8", size: 12 });
    }
    function plotParam() {
      const c6 = c23;
      c6.clear();
      c6.axes("#2a3a60");
      if (st4.surface === "torus") {
        const pts = geo.map((q) => [q.u % (2 * Math.PI), q.v % (2 * Math.PI)]);
        c6.poly(pts, { stroke: "#7ee0a3", width: 1.6 });
        c6.text("\u6D4B\u5730\u7EBF\u5728\u53C2\u6570\u73AF\u9762 (u,v) \u4E0A\u7684\u8F68\u8FF9\uFF08\u6A21 2\u03C0\uFF09", 5.2, 1.3, { align: "center", color: "#8fa2c8", size: 12 });
        c6.text("\u659C\u7387 = dv/du \u6709\u7406 \u2192 \u95ED\u5408\uFF1B\u65E0\u7406 \u2192 \u7A20\u5BC6", 5.2, 1.05, { align: "center", color: "#8fa2c8", size: 12 });
      } else {
        const spec = SURFACES[st4.surface];
        const pts = [];
        for (let i = 0; i < Math.min(geo.length, 400); i++) {
          const q = geo[i];
          const d2 = surfaceData(spec, q.u, q.v);
          const sp2 = Math.sqrt(Math.abs(d2.E * st4.du0 ** 2 + 2 * d2.F * st4.du0 * st4.dv0 + d2.G * st4.dv0 ** 2));
          pts.push([q.t, sp2]);
        }
        c6.poly(pts, { stroke: "#7ee0a3", width: 2 });
        c6.text("\u6D4B\u5730\u7EBF\u901F\u5EA6 |\u03B3\u0307| \u968F\u65F6\u95F4\uFF08\u5E94\u4FDD\u6301\u6052\u5B9A\uFF09", 5.2, 1.3, { align: "center", color: "#8fa2c8", size: 12 });
      }
    }
    rebuild();
    clamp();
    integrate();
    sync();
    plotParam();
  }
  function teardown8() {
    dragOff2?.();
    viz4?.dispose();
    viz4 = null;
    c23?.dispose();
    c23 = null;
  }

  // js/modules/m08-curvature.js
  var m08_curvature_exports = {};
  __export(m08_curvature_exports, {
    en: () => en9,
    html: () => html9,
    id: () => id9,
    mount: () => mount9,
    no: () => no10,
    teardown: () => teardown9,
    zh: () => zh10
  });
  var id9 = "m08";
  var no10 = "8";
  var zh10 = "\u66F2\u7387\u4E0E Gauss\u2013Bonnet";
  var en9 = "Curvature & Gauss\u2013Bonnet";
  var st5 = { surface: "sphere", u: 1, v: 0.8, theta: 1, poly: "tetra", showCirc: true };
  var viz5 = null;
  var c24 = null;
  var dragOff3 = null;
  var KMIN = -1.3;
  var KMAX = 1.3;
  var kColor = (K3) => colormap((Math.min(Math.max(isFinite(K3) ? K3 : 0, KMIN), KMAX) - KMIN) / (KMAX - KMIN));
  function html9() {
    return `
  <h1 class="mod-title">8. \u66F2\u7387\u4E0E Gauss\u2013Bonnet \u5B9A\u7406</h1>
  <div class="mod-sub">Gaussian Curvature &amp; Gauss\u2013Bonnet Theorem</div>
  <div class="mod-intro">
    <p><b>Gauss \u66F2\u7387</b> $K = \\kappa_1 \\kappa_2$ \u662F\u4E24\u4E2A\u4E3B\u66F2\u7387\u4E4B\u79EF\uFF08$\\kappa_i$ \u4E3A Weingarten \u5F62\u7B97\u5B50\u7684\u7279\u5F81\u503C\uFF09\uFF0C\u5B83\u662F\u5185\u8574\u91CF\uFF08Theorema Egregium\uFF0C\u7EDD\u5999\u5B9A\u7406\uFF09\u3002<b>Gauss\u2013Bonnet \u5B9A\u7406</b>\u628A\u5C40\u90E8\u66F2\u7387\u4E0E\u6574\u4F53\u62D3\u6251\u8054\u7CFB\u8D77\u6765\uFF1A\u5BF9\u95ED\u5408\u66F2\u9762 $\\int_M K\\, dA = 2\\pi\\chi(M)$\uFF0C\u5176\u4E2D $\\chi$ \u662F Euler \u793A\u6027\u6570\u2014\u2014\u7403\u9762 $\\chi{=}2$\u3001\u73AF\u9762 $\\chi{=}0$\u3001\u4E8F\u683C 2 \u66F2\u9762 $\\chi{=}{-}2$\u3002\u591A\u9762\u4F53\u7684\u66F2\u7387"\u96C6\u4E2D"\u5728\u9876\u70B9\uFF1A\u6BCF\u4E2A\u9876\u70B9\u7684<b>\u89D2\u4E8F\u635F</b> $\\delta_v = 2\\pi - \\sum$\uFF08\u9876\u70B9\u5904\u9762\u89D2\u4E4B\u548C\uFF09\uFF0C\u4E14 $\\sum_v \\delta_v = 2\\pi\\chi$\u3002\u8FD9\u540C\u65F6\u4E5F\u662F\u5E73\u884C\u79FB\u52A8 holonomy \u7684\u6765\u6E90\uFF08\u89C1\u6A21\u5757 6\uFF09\u3002</p>
  </div>
  <div class="panel-row first">
    <button class="btn on" data-t="1">\u2460 K \u8272\u56FE\u4E0E\u4E3B\u66F2\u7387</button>
    <button class="btn" data-t="2">\u2461 \u7403\u51A0\u79EF\u5206 \u2192 2\u03C0\u03C7</button>
    <button class="btn" data-t="3">\u2462 \u79BB\u6563 Gauss\u2013Bonnet\uFF08\u591A\u9762\u4F53\uFF09</button>
  </div>
  <div id="tab1">
    <div class="stage" id="stage1" style="height:480px"><span class="stage-tag">\u62D6\u62FD\u66F2\u9762\u4E0A\u7684\u70B9</span></div>
    <div class="panel"><div id="panel1"></div></div>
  </div>
  <div id="tab2" style="display:none">
    <div class="stage" id="stage2" style="height:440px"></div>
    <div class="panel"><div id="panel2"></div></div>
  </div>
  <div id="tab3" style="display:none">
    <div class="stage" id="stage3" style="height:480px"></div>
    <div class="panel"><div id="panel3"></div></div>
  </div>
  <div class="fcard">${KD("K = \\kappa_1 \\kappa_2, \\qquad H = \\tfrac{1}{2}(\\kappa_1 + \\kappa_2)")}
  ${KD("\\int_M K\\, dA = 2\\pi\\chi(M) \\quad (\\text{\u95ED\u5408\u66F2\u9762 Gauss\u2013Bonnet})")}
  ${KD("\\sum_v \\delta_v = 2\\pi\\chi, \\qquad \\delta_v = 2\\pi - \\sum_{\\text{\u9762\u89D2}} \\alpha_v \\;\\;\\text{\uFF08\u89D2\u4E8F\u635F\uFF09}")}</div>
  `;
  }
  function mount9(host) {
    const tabs = host.querySelectorAll("[data-t]");
    const panels = { 1: host.querySelector("#tab1"), 2: host.querySelector("#tab2"), 3: host.querySelector("#tab3") };
    const sw = (t2) => {
      for (const b of tabs) b.classList.toggle("on", b.dataset.t === t2);
      for (const [k, p2] of Object.entries(panels)) p2.style.display = k === t2 ? "" : "none";
      if (t2 === "1") viz5?.resize();
      if (t2 === "2") viz5?.resize();
      if (t2 === "3") viz5?.resize();
    };
    for (const b of tabs) b.addEventListener("click", () => sw(b.dataset.t));
    setup1(host.querySelector("#stage1"), host.querySelector("#panel1"));
    setup2(host.querySelector("#stage2"), host.querySelector("#panel2"));
    setup3(host.querySelector("#stage3"), host.querySelector("#panel3"));
  }
  function setup1(stage, panel) {
    viz5 = new Viz(stage, { cameraPos: [3.4, -2.6, 2.5] });
    let mesh = null, grid = null, marker = null;
    let circ1 = null, circ2 = null, tPlane = null;
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2 (K=1)", torus: "\u73AF\u9762 T\xB2 (K \u53D8\u53F7)", paraboloid: "\u629B\u7269\u9762 (K>0)", saddle: "\u978D\u9762 (K<0)", pseudosphere: "\u4F2A\u7403\u9762 (K=\u22121)" },
      cb: (v) => {
        st5.surface = v;
        rebuild();
        clampUV();
        sync();
      }
    });
    const outK = readout(panel, "K = ");
    const outH = readout(panel, "H = ");
    const outK1 = readout(panel, "\u03BA\u2081, \u03BA\u2082 = ");
    const circBtn = btn(panel, { label: "\u4E3B\u66F2\u7387\u5706 \u5F00", active: true, cb: () => {
      st5.showCirc = !st5.showCirc;
      circ1.visible = circ2.visible = st5.showCirc;
      circBtn.el.classList.toggle("on", st5.showCirc);
      circBtn.el.textContent = st5.showCirc ? "\u4E3B\u66F2\u7387\u5706 \u5F00" : "\u4E3B\u66F2\u7387\u5706 \u5173";
    } });
    const legend = el2(`<div style="margin-top:10px;display:flex;align-items:center;gap:10px">
    <span style="font-size:12px;color:#8fa2c8">K&nbsp;=&nbsp;</span>
    <div style="width:180px;height:10px;border-radius:5px;background:linear-gradient(90deg,#3973f2,#40d9f2,#73e673,#fad140,#f24d40)"></div>
    <span style="font-size:12px;color:#8fa2c8">${KMIN} \u2026 ${KMAX}</span></div>`);
    panel.appendChild(legend);
    function rebuild() {
      viz5.remove(mesh, grid, marker, circ1, circ2, tPlane);
      dragOff3?.();
      const spec = SURFACES[st5.surface];
      mesh = meshOf(spec, { colorFn: (u2, v) => kColor(gaussianCurvature(spec, u2, v)), opacity: 0.94, nu: 60, nv: 80 });
      grid = gridLinesOn(spec, { opacity: 0.35 });
      marker = sphereMark([0, 0, 0], 16766814);
      tPlane = new Xs(
        new ru(0.42, 32),
        new es({ color: 16777215, transparent: true, opacity: 0.08, side: p, depthWrite: false })
      );
      circ1 = polyline([], 8315043, 2);
      circ2 = polyline([], 16739179, 2);
      viz5.add(mesh, grid, marker, tPlane, circ1, circ2);
      circ1.visible = circ2.visible = st5.showCirc;
      dragOff3 = enableDrag(viz5, mesh, spec, (u2, v) => {
        st5.u = u2;
        st5.v = v;
        sync();
      });
    }
    function clampUV() {
      const spec = SURFACES[st5.surface];
      st5.u = Math.min(Math.max(st5.u, spec.u0 + 0.03), spec.u1 - 0.03);
      st5.v = Math.min(Math.max(st5.v, spec.v0), spec.v1);
    }
    function sync() {
      const spec = SURFACES[st5.surface];
      clampUV();
      const p2 = spec.f(st5.u, st5.v);
      marker.position.set(...p2);
      const d2 = surfaceData(spec, st5.u, st5.v);
      tPlane.position.set(...p2);
      tPlane.quaternion.setFromUnitVectors(new Ui(0, 0, 1), new Ui(...d2.n));
      const K3 = gaussianCurvature(spec, st5.u, st5.v);
      const so2 = shapeOperator(spec, st5.u, st5.v);
      outK.set(K3.toFixed(3));
      if (so2) {
        outH.set(((so2.k1 + so2.k2) / 2).toFixed(3));
        outK1.set(`${so2.k1.toFixed(3)}, ${so2.k2.toFixed(3)}`);
        drawCircle(circ1, p2, d2.n, so2.e1, so2.k1, 8315043);
        drawCircle(circ2, p2, d2.n, so2.e2, so2.k2, 16739179);
      }
    }
    function drawCircle(line, p2, n2, e2, kap, color) {
      if (!isFinite(kap) || Math.abs(kap) < 0.12) {
        updateLine(line, []);
        return;
      }
      const R = 1 / Math.abs(kap);
      const Rc2 = Math.min(R, 2.2);
      const c6 = V.add(p2, V.scale(n2, 1 / kap));
      const pts = [];
      for (let i = 0; i <= 64; i++) {
        const t2 = i / 64 * 2 * Math.PI;
        pts.push(V.add(c6, V.add(V.scale(n2, (Math.cos(t2) - 1) / kap), V.scale(e2, Math.sin(t2) / kap))));
      }
      updateLine(line, pts);
    }
    rebuild();
    clampUV();
    sync();
  }
  function setup2(stage, panel) {
    viz5 = new Viz(stage, { cameraPos: [3.4, -2.6, 2.5] });
    const spec = SURFACES.sphere;
    const mesh = meshOf(spec, { colorFn: (u2, v) => [0.3, 0.45, 0.85], opacity: 0.9, nu: 48, nv: 72 });
    viz5.add(mesh, gridLinesOn(spec, { opacity: 0.4 }));
    const thSl = slider(panel, { label: "\u7403\u51A0\u6781\u89D2 \u03B8", min: 0.15, max: Math.PI - 0.05, step: 0.01, value: st5.theta, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      st5.theta = v;
      update();
    } });
    const outI = readout(panel, "\u222B\u7403\u51A0 K dA = ");
    const outT = readout(panel, "2\u03C0\u03C7\uFF08\u7403\u9762 \u03C7=2\uFF09 = ");
    const outF = readout(panel, "\u5360\u6BD4 = ");
    const outH = readout(panel, "= holonomy\uFF08\u6A21 2\u03C0\uFF09 = ");
    function update() {
      const col = mesh.geometry.attributes.color;
      const pos = mesh.geometry.attributes.position;
      for (let i = 0; i < col.count; i++) {
        const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        const u2 = Math.acos(Math.max(-1, Math.min(1, z)));
        const t2 = u2 <= st5.theta ? [0.99, 0.55, 0.2] : [0.3, 0.45, 0.85];
        col.setXYZ(i, t2[0], t2[1], t2[2]);
      }
      col.needsUpdate = true;
      const I = 2 * Math.PI * (1 - Math.cos(st5.theta));
      outI.set(`${I.toFixed(3)} rad\uFF08${(I * 180 / Math.PI).toFixed(1)}\xB0\uFF09`);
      outT.set(`${(4 * Math.PI).toFixed(3)} rad\uFF08${720}\xB0\uFF09`);
      outF.set(`${(I / (4 * Math.PI) * 100).toFixed(1)}%`);
      outH.set(`${(I * 180 / Math.PI).toFixed(1)}\xB0\uFF08\u5E73\u884C\u79FB\u52A8\u7ED5\u8BE5\u7EAC\u5708\u4E00\u5468\uFF09`);
      drawPlot();
    }
    c24 = new C2(hostStage2(panel), { xmin: 0, xmax: Math.PI, ymin: 0, ymax: 13.6 });
    function hostStage2() {
      return document.querySelector("#tab2 .stage");
    }
    c24.needDraw = () => drawPlot();
    function drawPlot() {
      const c6 = c24;
      c6.clear();
      c6.axes("#2a3a60");
      const pts = [];
      for (let i = 0; i <= 100; i++) {
        const th2 = i / 100 * Math.PI;
        pts.push([th2, 2 * Math.PI * (1 - Math.cos(th2))]);
      }
      c6.poly(pts, { stroke: "#ffb454", width: 2.2 });
      c6.line(0, 4 * Math.PI, Math.PI, 4 * Math.PI, { color: "#7ee0a3", dash: [6, 5], width: 1.6 });
      c6.text("2\u03C0\u03C7 = 4\u03C0", 2.2, 12.85, { color: "#7ee0a3", size: 12 });
      const cur = 2 * Math.PI * (1 - Math.cos(st5.theta));
      c6.dot(st5.theta, cur, { color: "#fff", r: 5, stroke: "#ffd75e" });
      c6.text(`\u03B8 = ${(st5.theta * 180 / Math.PI).toFixed(0)}\xB0`, st5.theta + 0.12, cur + 0.35, { color: "#ffd75e", size: 12 });
      c6.text("\u222B\u7403\u51A0 K dA = 2\u03C0(1\u2212cos\u03B8)\uFF1A\u4ECE 0 \u957F\u5230 4\u03C0 = 2\u03C0\u03C7", Math.PI / 2, 13.15, { align: "center", color: "#8fa2c8", size: 12 });
    }
    update();
  }
  function setup3(stage, panel) {
    viz5 = new Viz(stage, { cameraPos: [3.2, -2.4, 2.4] });
    const selP = sel(panel, {
      value: "tetra",
      options: { tetra: "\u6B63\u56DB\u9762\u4F53\uFF08\u03C7=2\uFF09", cube: "\u7ACB\u65B9\u4F53\uFF08\u03C7=2\uFF09", octa: "\u6B63\u516B\u9762\u4F53\uFF08\u03C7=2\uFF09" },
      cb: (v) => {
        st5.poly = v;
        build();
      }
    });
    const outD = readout(panel, "\u5404\u9876\u70B9\u89D2\u4E8F\u635F = ");
    const outS = readout(panel, "\u03A3 \u03B4_v = ");
    let mesh = null;
    function polyData(kind) {
      if (kind === "tetra") {
        const s = 1.4;
        const vs3 = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((p2) => p2.map((c6) => c6 * s / Math.sqrt(3)));
        return { vs: vs3, faces: [[0, 1, 2], [0, 3, 1], [0, 2, 3], [1, 3, 2]] };
      }
      if (kind === "cube") {
        const vs3 = [];
        for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) vs3.push([x, y, z]);
        const faces2 = [];
        const quads = [[0, 1, 3, 2], [4, 6, 7, 5], [0, 4, 5, 1], [2, 3, 7, 6], [0, 2, 6, 4], [1, 5, 7, 3]];
        for (const [a, b, cc2, d2] of quads) faces2.push([a, b, cc2], [a, cc2, d2]);
        return { vs: vs3, faces: faces2 };
      }
      const vs2 = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
      const faces = [[0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4], [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5]];
      return { vs: vs2, faces };
    }
    function build() {
      viz5.remove(mesh);
      const { vs: vs2, faces } = polyData(st5.poly);
      const nv = vs2.length;
      const deficit = new Array(nv).fill(2 * Math.PI);
      for (const [a, b, cc2] of faces) {
        const ang = (v, w1, w2) => {
          const u1 = V.normalize(V.sub(w1, v)), u2 = V.normalize(V.sub(w2, v));
          return Math.acos(Math.max(-1, Math.min(1, V.dot(u1, u2))));
        };
        deficit[a] -= ang(vs2[a], vs2[b], vs2[cc2]);
        deficit[b] -= ang(vs2[b], vs2[a], vs2[cc2]);
        deficit[cc2] -= ang(vs2[cc2], vs2[a], vs2[b]);
      }
      const pos = [], nor = [], col = [];
      for (const [a, b, cc2] of faces) {
        const pa2 = vs2[a], pb = vs2[b], pc2 = vs2[cc2];
        const n2 = V.normalize(V.cross(V.sub(pb, pa2), V.sub(pc2, pa2)));
        const push = (p2, cidx) => {
          pos.push(...p2);
          nor.push(...n2);
          const cc3 = colormap(Math.min(Math.max(deficit[cidx], 0), Math.PI) / Math.PI * 0.85 + 0.1);
          col.push(...cc3);
        };
        push(pa2, a);
        push(pb, b);
        push(pc2, cc2);
      }
      const geo2 = new As();
      geo2.setAttribute("position", new vs(pos, 3));
      geo2.setAttribute("normal", new vs(nor, 3));
      geo2.setAttribute("color", new vs(col, 3));
      mesh = new Xs(geo2, new sd({ vertexColors: true, roughness: 0.5, metalness: 0.1, side: p }));
      viz5.add(mesh);
      viz5.add(new xh(
        new pu(geo2),
        new hh({ color: 659234 })
      ));
      const total = deficit.reduce((s, x) => s + x, 0);
      outD.set(deficit.map((d2) => (d2 * 180 / Math.PI).toFixed(1) + "\xB0").join(", "));
      outS.set(`${(total * 180 / Math.PI).toFixed(1)}\xB0 = ${total.toFixed(3)} rad \u2248 2\u03C0\u03C7\uFF08\u03C7 = ${(total / (2 * Math.PI)).toFixed(2)}\uFF09`);
    }
    build();
  }
  function teardown9() {
    dragOff3?.();
    viz5?.dispose();
    viz5 = null;
    c24?.dispose();
    c24 = null;
  }

  // js/modules/m09-schwarzschild.js
  var m09_schwarzschild_exports = {};
  __export(m09_schwarzschild_exports, {
    en: () => en10,
    html: () => html10,
    id: () => id10,
    mount: () => mount10,
    no: () => no11,
    teardown: () => teardown10,
    zh: () => zh11
  });
  var id10 = "m09";
  var no11 = "9";
  var zh11 = "\u5E7F\u4E49\u76F8\u5BF9\u8BBA\uFF1A\u53F2\u74E6\u897F\u65F6\u7A7A";
  var en10 = "GR: Schwarzschild Spacetime";
  var M2 = 1;
  var st6 = {
    tab: "1",
    r: 6,
    phi: 0.9,
    b: 8,
    multi: true,
    bAni: 0,
    playB: false,
    a: 90,
    e: 0.45,
    ani: 0,
    playT: false,
    rD: 6,
    clockT: 0,
    playC: false
  };
  var animIv = null;
  var c4 = null;
  function html10() {
    return `
  <h1 class="mod-title">9. \u5E7F\u4E49\u76F8\u5BF9\u8BBA\uFF1A\u53F2\u74E6\u897F\u65F6\u7A7A</h1>
  <div class="mod-sub">General Relativity: Schwarzschild Spacetime</div>
  <div class="mod-intro">
    <p>\u53F2\u74E6\u897F\u7EBF\u5143 $ds^2 = -(1-\\tfrac{2m}{r})dt^2 + (1-\\tfrac{2m}{r})^{-1}dr^2 + r^2 d\\Omega^2$ \u662F\u7403\u5BF9\u79F0\u771F\u7A7A\u5F15\u529B\u573A\uFF08\u5916\u89E3\uFF09\u3002\u4E09\u4E2A\u9009\u9879\u5361\u5206\u522B\u5C55\u793A\u5176\u6838\u5FC3\u51E0\u4F55\u4E0E\u6D4B\u5730\u7EBF\u6027\u8D28\uFF1A<b>\u2460 Flamm \u5D4C\u5165</b>\u628A\u8D64\u9053\u9762 $ds^2 = \\frac{dr^2}{1-2m/r} + r^2 d\\varphi^2$ \u7B49\u8DDD\u5D4C\u5165\u6B27\u6C0F\u4E09\u7EF4\u7A7A\u95F4\uFF08$z = 2\\sqrt{2m(r-2m)}$\uFF09\uFF0C\u53EF\u89C1\u5F84\u5411\u56FA\u6709\u8DDD\u79BB\u88AB"\u62C9\u957F"\uFF1B<b>\u2461 \u5149\u7EBF\u504F\u6298</b>\uFF1A\u96F6\u6D4B\u5730\u7EBF\u6EE1\u8DB3 $u'' + u = 3mu^2$\uFF08$u=1/r$\uFF09\uFF0C\u5F31\u573A\u504F\u6298\u89D2 $\\delta \\approx 4m/b$\uFF0C\u5149\u5B50\u7403\u5728 $r=3m$\uFF0C\u4E34\u754C\u78B0\u649E\u53C2\u6570 $b_c = 3\\sqrt{3}\\,m$\uFF1B<b>\u2462 \u8FD1\u65E5\u70B9\u8FDB\u52A8</b>\uFF1A\u7C7B\u65F6\u6D4B\u5730\u7EBF $u'' + u = m/h^2 + 3mu^2$ \u4EA7\u751F\u6BCF\u5708 $\\Delta\\varphi \\approx \\frac{6\\pi m}{a(1-e^2)}$ \u7684\u8FDB\u52A8\uFF08\u6C34\u661F 43\u2033/\u4E16\u7EAA\uFF09\u3002</p>
  </div>
  <div class="panel-row first">
    <button class="btn on" data-t="1">\u2460 Flamm \u5D4C\u5165\u56FE</button>
    <button class="btn" data-t="2">\u2461 \u5149\u7EBF\u504F\u6298</button>
    <button class="btn" data-t="3">\u2462 \u8FD1\u65E5\u70B9\u8FDB\u52A8</button>
    <button class="btn" data-t="4">\u2463 \u65F6\u95F4\u81A8\u80C0\u4E0E\u7EA2\u79FB</button>
  </div>
  <div id="tab1">
    <div class="split">
      <div><div class="stage" id="stage1"><span class="stage-tag">\u62D6\u62FD\u66F2\u9762\u4E0A\u7684\u70B9 \xB7 \u62D6\u62FD\u65CB\u8F6C</span></div>
        <div class="panel"><div id="panel1"></div></div></div>
      <div class="side2"><div class="stage" id="stage1b" style="height:300px"></div>
        <div class="fcard">${KD("\\text{\u5D4C\u5165: } z(r) = 2\\sqrt{2m(r-2m)} \\;\\; (r \\geq 2m)")}
        ${KD("\\rho(r) = \\int_{2m}^{r} \\frac{dr'}{\\sqrt{1-2m/r'}} = \\sqrt{r(r-2m)} + 2m\\ln\\frac{\\sqrt{r}+\\sqrt{r-2m}}{\\sqrt{2m}}")}</div>
      </div>
    </div>
  </div>
  <div id="tab2" style="display:none">
    <div class="stage" id="stage2" style="height:500px"></div>
    <div class="panel"><div id="panel2"></div></div>
    <div class="fcard">${KD("u'' + u = 3m u^2 \\;\\;\\text{\uFF08\u96F6\u6D4B\u5730\u7EBF\uFF0C\u6487 = } d/d\\varphi \\text{\uFF09}")}
    ${KD("\\delta \\approx \\frac{4m}{b} \\;\\;\\text{\uFF08\u5F31\u573A\u504F\u6298\u89D2\uFF09}, \\qquad b_c = 3\\sqrt{3}\\,m \\;\\;\\text{\uFF08\u4E34\u754C\u6355\u83B7\uFF09}")}</div>
  </div>
  <div id="tab3" style="display:none">
    <div class="stage" id="stage3" style="height:500px"></div>
    <div class="panel"><div id="panel3"></div></div>
    <div class="fcard">${KD("u'' + u = \\frac{m}{h^2} + 3m u^2 \\;\\;\\text{\uFF08\u7C7B\u65F6\u6D4B\u5730\u7EBF\uFF09}")}
    ${KD("\\Delta\\varphi_{\\text{\u6BCF\u5708}} \\approx \\frac{6\\pi m}{a(1-e^2)} \\quad \\text{\uFF08\u6C34\u661F } 43^{\\prime\\prime}\\text{/\u4E16\u7EAA\uFF09}")}</div>
  </div>
  <div id="tab4" style="display:none">
    <div class="stage" id="stage4" style="height:440px"></div>
    <div class="panel"><div id="panel4"></div></div>
    <div class="fcard">${KD("d\\tau = \\sqrt{1-\\tfrac{2m}{r}}\\, dt \\;\\;\\text{\uFF08\u9759\u6B62\u949F\u7684\u56FA\u6709\u65F6\uFF09}")}
    ${KD("z = \\frac{\\Delta\\lambda}{\\lambda} = \\frac{1}{\\sqrt{1-2m/r}} - 1 \\;\\;\\text{\uFF08\u5F15\u529B\u7EA2\u79FB\uFF09}")}
    ${KD("r \\to 2m: z \\to \\infty; \\qquad r_{\\text{ISCO}} = 6m \\;\\;\\text{\uFF08\u6700\u5185\u7A33\u5B9A\u5706\u8F68\u9053\uFF09}")}</div>
  </div>
  `;
  }
  function mount10(host) {
    const tabs = host.querySelectorAll("[data-t]");
    const panels = { 1: host.querySelector("#tab1"), 2: host.querySelector("#tab2"), 3: host.querySelector("#tab3"), 4: host.querySelector("#tab4") };
    const sw = (t2) => {
      st6.tab = t2;
      for (const b of tabs) b.classList.toggle("on", b.dataset.t === t2);
      for (const [k, p2] of Object.entries(panels)) p2.style.display = k === t2 ? "" : "none";
      if (t2 === "1") {
        viz1?.resize();
        c1b?.resize();
      }
      if (t2 === "2") c25?.resize();
      if (t2 === "3") c32?.resize();
      if (t2 === "4") c4?.resize();
    };
    for (const b of tabs) b.addEventListener("click", () => sw(b.dataset.t));
    setup12(host);
    setup22(host);
    setup32(host);
    setup4(host);
    animIv = setInterval(() => {
      c25?._tick2?.();
      c32?._tick3?.();
      c4?._tick4?.();
    }, 40);
  }
  var viz1 = null;
  var c1b = null;
  var dragOff1 = null;
  function setup12(host) {
    const stage = host.querySelector("#stage1");
    const panel = host.querySelector("#panel1");
    viz1 = new Viz(stage, { cameraPos: [5, -4.2, 3.6] });
    const makeSpec = (sign) => ({
      id: "flamm",
      u0: 2.01,
      u1: 9.5,
      v0: 0,
      v1: 2 * Math.PI,
      vWrap: true,
      f: (u2, v) => [u2 * Math.cos(v), u2 * Math.sin(v), sign * flammZ(M2, u2)]
    });
    const up = meshOf(makeSpec(1), { color: 4881112, opacity: 0.9, nu: 52, nv: 72 });
    const dn = meshOf(makeSpec(-1), { color: 3495068, opacity: 0.9, nu: 52, nv: 72 });
    viz1.add(up, dn, gridLinesOn(makeSpec(1), { opacity: 0.5 }), gridLinesOn(makeSpec(-1), { opacity: 0.35 }));
    const throat = polyline(circle3(2), 16766814, 2.5);
    viz1.add(throat);
    const marker = sphereMark([0, 0, 0], 16766814);
    viz1.add(marker);
    const rSl = slider(panel, { label: "\u534A\u5F84\u5750\u6807 r", min: 2.05, max: 9, step: 0.05, value: st6.r, cb: (v) => {
      st6.r = v;
      sync();
    } });
    const outR = readout(panel, "\u56FA\u6709\u534A\u5F84 \u03C1(r) = ");
    const outC = readout(panel, "\u5468\u957F 2\u03C0r = ");
    const outG = readout(panel, "g_rr = (1\u22122m/r)\u207B\xB9 = ");
    function sync() {
      const p2 = [st6.r * Math.cos(st6.phi), st6.r * Math.sin(st6.phi), flammZ(M2, st6.r)];
      marker.position.set(...p2);
      const rho = properRadius(M2, st6.r);
      outR.set(rho.toFixed(3));
      outC.set((2 * Math.PI * st6.r).toFixed(3));
      outG.set((1 / (1 - 2 * M2 / st6.r)).toFixed(3));
      c1b?.draw(st6.r, rho);
    }
    dragOff1 = enableDrag(viz1, up, makeSpec(1), (u2, v) => {
      st6.r = Math.min(Math.max(u2, 2.05), 9);
      st6.phi = v;
      sync();
    });
    const hostB = host.querySelector("#stage1b");
    c1b = new C2(hostB, { xmin: 1.5, xmax: 9.5, ymin: 0, ymax: 12 });
    c1b.needDraw = () => c1b.draw(st6.r, properRadius(M2, st6.r));
    c1b.draw = (rCur, rhoCur) => {
      const c6 = c1b;
      c6.clear();
      c6.axes("#2a3a60");
      const p1 = [], p2 = [];
      for (let i = 0; i <= 120; i++) {
        const r = 2.01 + i / 120 * 7.5;
        p1.push([r, properRadius(M2, r)]);
        p2.push([r, r - 2]);
      }
      c6.poly(p1, { stroke: "#ffb454", width: 2.2 });
      c6.poly(p2, { stroke: "#7ee0a3", dash: [6, 4], width: 1.8 });
      c6.dot(rCur, rhoCur, { color: "#fff", r: 5, stroke: "#ffd75e" });
      c6.text("\u2014\u2014 \u56FA\u6709\u8DDD\u79BB \u03C1(r)", 7.5, 11.2, { color: "#ffb454", size: 12 });
      c6.text("- - - \u5750\u6807\u8DDD\u79BB r \u2212 2m", 7.5, 10.7, { color: "#7ee0a3", size: 12 });
      c6.text('\u03C1 \u6BD4\u5750\u6807\u8DDD\u79BB\u589E\u957F\u66F4\u5FEB\uFF1A\u5F84\u5411\u5EA6\u89C4\u5206\u91CF\u88AB"\u62C9\u4F38"', 5.5, 10.1, { align: "center", color: "#8fa2c8", size: 11.5 });
    };
    sync();
  }
  function circle3(r, n2 = 100) {
    const pts = [];
    for (let i = 0; i <= n2; i++) {
      const a = i / n2 * 2 * Math.PI;
      pts.push([r * Math.cos(a), r * Math.sin(a), 0]);
    }
    return pts;
  }
  var c25 = null;
  function setup22(host) {
    const stage = host.querySelector("#stage2");
    const panel = host.querySelector("#panel2");
    c25 = new C2(stage, { xmin: -11, xmax: 11, ymin: -11, ymax: 11 });
    const bSl = slider(panel, { label: "\u78B0\u649E\u53C2\u6570 b\uFF08m \u4E3A\u5355\u4F4D\uFF09", min: 5.3, max: 22, step: 0.1, value: st6.b, cb: (v) => {
      st6.b = v;
      draw2();
    } });
    const multiBtn = btn(panel, { label: "\u591A b \u5BF9\u6BD4 \u5F00", active: true, cb: () => {
      st6.multi = !st6.multi;
      multiBtn.el.classList.toggle("on", st6.multi);
      multiBtn.el.textContent = st6.multi ? "\u591A b \u5BF9\u6BD4 \u5F00" : "\u591A b \u5BF9\u6BD4 \u5173";
      draw2();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u5149\u5B50\u52A8\u753B", cb: () => {
      st6.playB = !st6.playB;
      playBtn.el.classList.toggle("on", st6.playB);
      playBtn.el.textContent = st6.playB ? "\u23F8 \u6682\u505C" : "\u25B6 \u5149\u5B50\u52A8\u753B";
    } });
    const outD = readout(panel, "\u504F\u6298\u89D2 \u03B4 = ");
    const outW = readout(panel, "\u5F31\u573A\u516C\u5F0F 4m/b = ");
    const outS = readout(panel, "\u72B6\u6001 = ");
    function trajectory(b, color, width) {
      const o = photonOrbit(M2, b, { r0: 60, dphi: 4e-3 });
      if (o.captured) {
        const pts = o.pts.filter((p2) => 1 / p2.u < 11.2).map((p2) => [Math.cos(p2.phi) / p2.u, Math.sin(p2.phi) / p2.u]);
        c25.poly(pts, { stroke: color, width });
        return o;
      }
      let seg = [];
      for (let i = 0; i < o.pts.length; i++) {
        const p2 = o.pts[i];
        const r = 1 / p2.u;
        if (r < 11.2) seg.push([Math.cos(p2.phi) * r, Math.sin(p2.phi) * r]);
        else if (seg.length > 1) {
          break;
        }
      }
      c25.poly(seg, { stroke: color, width });
      return o;
    }
    function draw2() {
      const c6 = c25;
      c6.clear();
      c6.axes();
      c6.dot(0, 0, { color: "#ff9f43", r: 12, stroke: "#fff" });
      c6.text("\u661F\u4F53 r<2m\uFF08\u89C6\u754C\uFF09", 1, 1, { color: "#ff9f43", size: 12 });
      const ps = [];
      for (let i = 0; i <= 120; i++) {
        const a = i / 120 * 2 * Math.PI;
        ps.push([3 * Math.cos(a), 3 * Math.sin(a)]);
      }
      c6.poly(ps, { stroke: "#7ee0a3", dash: [5, 5], width: 1.5 });
      c6.text("\u5149\u5B50\u7403 r = 3m\uFF08\u4E0D\u7A33\u5B9A\u5706\u8F68\u9053\uFF09", 0.5, 3.3, { color: "#7ee0a3", size: 11.5 });
      const o = trajectory(st6.b, "#ffd75e", 2.6);
      if (o.captured) {
        outS.set("\u26A0 \u88AB\u4FD8\u83B7\uFF08b < 3\u221A3 m \u2248 5.196m\uFF09");
        outD.set("\u2014");
        outW.set("\u2014");
      } else {
        const d2 = photonDeflection(M2, st6.b, { r0: 60, dphi: 4e-3 });
        outD.set(`${(d2 * 180 / Math.PI).toFixed(2)}\xB0\uFF08${d2.toFixed(4)} rad\uFF09`);
        outW.set(`${(4 / st6.b * 180 / Math.PI).toFixed(2)}\xB0`);
        outS.set("\u9003\u9038\uFF08\u53CC\u66F2\u7EBF\u578B\u8F68\u9053\uFF09");
        const angIn = Math.atan2(Math.sin(0) * 0 + 0, 1) + Math.PI / 2;
      }
      if (st6.multi) {
        const presets = [[5.3, "#ff6b6b", 1.6], [6, "#ff9f43", 1.6], [8, "#58a6ff", 1.6], [12, "#7ee0a3", 1.4], [20, "#8fa2c8", 1.4]];
        for (const [b, col, w] of presets) trajectory(b, col, w);
        c6.text("b=5.3 6 8 12 20 m\uFF08\u8D8A\u9760\u8FD1\u5149\u5B50\u7403\u504F\u6298\u8D8A\u5927\uFF09", 0, -10.3, { align: "center", color: "#8fa2c8", size: 12 });
      }
      if (st6.playB) {
        const o2 = photonOrbit(M2, st6.b, { r0: 60, dphi: 4e-3 });
        const idx = Math.floor(st6.bAni * o2.pts.length) % Math.max(o2.pts.length, 1);
        const p2 = o2.pts[idx];
        const r = 1 / p2.u;
        if (r < 11.5) c6.dot(Math.cos(p2.phi) * r, Math.sin(p2.phi) * r, { color: "#fff", r: 5, stroke: "#ffd75e" });
      }
    }
    c25.needDraw = () => draw2();
    c25._tick2 = () => {
      if (st6.playB) {
        st6.bAni += 4e-3;
        draw2();
      }
    };
    draw2();
  }
  var c32 = null;
  function setup32(host) {
    const stage = host.querySelector("#stage3");
    const panel = host.querySelector("#panel3");
    c32 = new C2(stage, { xmin: -1, xmax: 1, ymin: -1, ymax: 1 });
    const aSl = slider(panel, { label: "\u534A\u957F\u8F74 a\uFF08m \u4E3A\u5355\u4F4D\uFF09", min: 40, max: 260, step: 5, value: st6.a, fmt: (v) => v + " m", cb: (v) => {
      st6.a = v;
      draw3();
    } });
    const eSl = slider(panel, { label: "\u504F\u5FC3\u7387 e", min: 0.05, max: 0.7, step: 0.01, value: st6.e, cb: (v) => {
      st6.e = v;
      draw3();
    } });
    const playBtn = btn(panel, { label: "\u25B6 \u8F68\u9053\u52A8\u753B", cb: () => {
      st6.playT = !st6.playT;
      playBtn.el.classList.toggle("on", st6.playT);
      playBtn.el.textContent = st6.playT ? "\u23F8 \u6682\u505C" : "\u25B6 \u8F68\u9053\u52A8\u753B";
    } });
    const outP = readout(panel, "\u6570\u503C\u8FDB\u52A8/\u5708 = ");
    const outT = readout(panel, "\u7406\u8BBA 6\u03C0m/[a(1\u2212e\xB2)] = ");
    function draw3() {
      const c6 = c32;
      c6.clear();
      c6.axes();
      const a = st6.a, e2 = st6.e;
      const o = timelikeOrbit(M2, a, e2, { nCycles: 4, dphi: 6e-3 });
      const scale = 1.18 / (a * (1 + e2) * 1.02);
      const X = (r, phi) => r * Math.cos(phi) * scale, Y = (r, phi) => r * Math.sin(phi) * scale;
      const np2 = [];
      for (let i = 0; i <= 240; i++) {
        const phi = i / 240 * 2 * Math.PI;
        const r = a * (1 - e2 * e2) / (1 + e2 * Math.cos(phi));
        np2.push([X(r, phi), Y(r, phi)]);
      }
      c6.poly(np2, { stroke: "#8fa2c8", dash: [4, 4], width: 1.6 });
      const rp = o.pts.map((p2) => [X(1 / p2.u, p2.phi), Y(1 / p2.u, p2.phi)]);
      c6.poly(rp, { stroke: "#ffb454", width: 2.4 });
      for (const ph2 of o.periapses) {
        const r = 1 / (1 / (a * (1 - e2)) * (1 + 0));
        const rp2 = o.pts.find((q) => Math.abs(q.phi - ph2) < 0.02);
        if (rp2) c6.dot(X(1 / rp2.u, ph2), Y(1 / rp2.u, ph2), { color: "#ff6b6b", r: 3.5 });
      }
      c6.dot(0, 0, { color: "#ff9f43", r: 7 });
      const avg = o.precessions.length ? o.precessions.slice(0, 3).reduce((s, x) => s + x, 0) / Math.min(3, o.precessions.length) : NaN;
      const theo = 6 * Math.PI * M2 / (a * (1 - e2 * e2));
      outP.set(isFinite(avg) ? `${(avg * 180 / Math.PI).toFixed(3)}\xB0/\u5708\uFF08${avg.toFixed(4)} rad\uFF09` : "\u2014");
      outT.set(`${(theo * 180 / Math.PI).toFixed(3)}\xB0`);
      c6.text("\u2014\u2014 \u76F8\u5BF9\u8BBA\u8F68\u9053\uFF08\u73AB\u7470\u7EBF\uFF0C\u8FD1\u65E5\u70B9\u8FDB\u52A8\uFF09", -0.95, 0.92, { color: "#ffb454", size: 12 });
      c6.text("- - - \u725B\u987F\u692D\u5706\uFF08\u95ED\u5408\uFF09", -0.95, 0.85, { color: "#8fa2c8", size: 12 });
      c6.text(`a = ${a}m, e = ${e2}\uFF1A\u76F8\u5BF9\u8BBA\u9879 3mu\xB2 \u4F7F\u8FD1\u65E5\u70B9\u6BCF\u5708\u8F6C\u52A8 ${isFinite(avg) ? (avg * 180 / Math.PI).toFixed(1) : "\u2014"}\xB0`, 0, -0.94, { align: "center", color: "#ffd75e", size: 12 });
      if (st6.playT) {
        const idx = Math.floor(st6.ani * o.pts.length) % o.pts.length;
        const p2 = o.pts[idx];
        c6.dot(X(1 / p2.u, p2.phi), Y(1 / p2.u, p2.phi), { color: "#fff", r: 4.5, stroke: "#ffd75e" });
      }
      c6._orbit = o;
    }
    c32.needDraw = () => draw3();
    c32._tick3 = () => {
      if (st6.playT) {
        st6.ani += 15e-4;
        draw3();
      }
    };
    draw3();
  }
  function setup4(host) {
    const stage = host.querySelector("#stage4");
    const panel = host.querySelector("#panel4");
    c4 = new C2(stage, { xmin: 1.9, xmax: 21, ymin: 0, ymax: 3.4 });
    const rSl = slider(panel, { label: "\u89C2\u6D4B\u8005\u534A\u5F84 r\uFF08m \u4E3A\u5355\u4F4D\uFF09", min: 2.05, max: 20, step: 0.05, value: st6.rD, cb: (v) => {
      st6.rD = v;
      draw4();
    } });
    const playBtn = btn(panel, { label: "\u23F1 \u53CC\u949F\u6F14\u793A", cb: () => {
      st6.playC = !st6.playC;
      playBtn.el.classList.toggle("on", st6.playC);
      playBtn.el.textContent = st6.playC ? "\u23F8 \u6682\u505C" : "\u23F1 \u53CC\u949F\u6F14\u793A";
    } });
    const resBtn = btn(panel, { label: "\u21BA \u91CD\u7F6E\u65F6\u949F", cb: () => {
      st6.clockT = 0;
      draw4();
    } });
    const outG = readout(panel, "\u65F6\u95F4\u81A8\u80C0\u56E0\u5B50 dt/d\u03C4 = ");
    const outZ = readout(panel, "\u5F15\u529B\u7EA2\u79FB z = ");
    const outC = readout(panel, "\u56FA\u6709\u65F6/\u5750\u6807\u65F6 = ");
    function draw4() {
      const c6 = c4;
      c6.clear();
      c6.axes("#2a3a60");
      const p1 = [], p2 = [];
      for (let i = 0; i <= 300; i++) {
        const r = 2.005 + i / 300 * 19;
        const f2 = 1 / Math.sqrt(1 - 2 * M2 / r);
        p1.push([r, f2]);
        p2.push([r, f2 - 1]);
      }
      c6.poly(p1, { stroke: "#ffb454", width: 2.2 });
      c6.poly(p2, { stroke: "#7ee0a3", dash: [6, 4], width: 1.8 });
      c6.line(2, 0, 2, 3.4, { color: "#ff7b72", dash: [4, 4], width: 1.4 });
      c6.text("r = 2m\uFF08\u89C6\u754C\uFF0Cz \u2192 \u221E\uFF09", 2.08, 3.2, { color: "#ff7b72", size: 11.5 });
      c6.text("\u2014\u2014 dt/d\u03C4 = 1/\u221A(1\u22122m/r)", 12, 2.9, { color: "#ffb454", size: 12 });
      c6.text("- - - \u7EA2\u79FB z = dt/d\u03C4 \u2212 1", 12, 2.65, { color: "#7ee0a3", size: 12 });
      const f = 1 / Math.sqrt(1 - 2 * M2 / st6.rD);
      c6.dot(st6.rD, f, { color: "#fff", r: 5, stroke: "#ffd75e" });
      c6.line(st6.rD, 0, st6.rD, f, { color: "rgba(255,215,94,0.4)", dash: [4, 4] });
      c6.text(`r = ${st6.rD.toFixed(1)}m`, st6.rD + 0.3, f + 0.12, { color: "#ffd75e", size: 12 });
      outG.set(`${f.toFixed(3)}`);
      outZ.set(`${(f - 1).toFixed(3)}`);
      outC.set(`${Math.sqrt(1 - 2 * M2 / st6.rD).toFixed(4)}`);
      const y1 = 0.55, y2 = 1.05;
      const drawBar = (y, frac, color, label) => {
        c6.ctx.fillStyle = "#1c2a4a";
        c6.ctx.fillRect(c6.sx(3), c6.sy(y), c6.sx(16) - c6.sx(3), 14);
        c6.ctx.fillStyle = color;
        c6.ctx.fillRect(c6.sx(3), c6.sy(y), (c6.sx(16) - c6.sx(3)) * Math.min(frac, 1), 14);
        c6.text(label, 3.1, y + 0.26, { color: "#c9d6ee", size: 12 });
      };
      const total = 6;
      const fracFar = st6.clockT % total / total;
      const tau = st6.clockT * Math.sqrt(1 - 2 * M2 / st6.rD);
      const fracNear = tau % total / total;
      drawBar(y1, fracFar, "#58a6ff", `\u8FDC\u5904\u949F\uFF1A\u5750\u6807\u65F6 t = ${(st6.clockT % total).toFixed(2)} / ${total}`);
      drawBar(y2, fracNear, "#ffb454", `r=${st6.rD.toFixed(1)}m \u5904\u949F\uFF1A\u56FA\u6709\u65F6 \u03C4 = ${(tau % total).toFixed(2)} / ${total}`);
      c6.text("\u540C\u4E00\u5750\u6807\u65F6 t \u5185\uFF0C\u6DF1\u5904\u949F\u7684\u56FA\u6709\u65F6\u8D70\u5F97\u66F4\u5C11\uFF08\u65F6\u95F4\u81A8\u80C0\uFF09", 9.5, 0.25, { align: "center", color: "#8fa2c8", size: 12 });
    }
    c4.needDraw = () => draw4();
    c4._tick4 = () => {
      if (st6.playC) {
        st6.clockT += 0.03;
        draw4();
      }
    };
    draw4();
  }
  function teardown10() {
    clearInterval(animIv);
    animIv = null;
    dragOff1?.();
    viz1?.dispose();
    viz1 = null;
    c1b?.dispose();
    c1b = null;
    c25?.dispose();
    c25 = null;
    c32?.dispose();
    c32 = null;
    c4?.dispose();
    c4 = null;
  }

  // js/modules/m10-topology.js
  var m10_topology_exports = {};
  __export(m10_topology_exports, {
    en: () => en11,
    html: () => html11,
    id: () => id11,
    mount: () => mount11,
    no: () => no12,
    teardown: () => teardown11,
    zh: () => zh12
  });
  var id11 = "m10";
  var no12 = "10";
  var zh12 = "\u6574\u4F53\u62D3\u6251\u4E0E de Rham \u4E0A\u540C\u8C03";
  var en11 = "Global Topology & de Rham Cohomology";
  var st7 = { tab: "1", surface: "sphere", field: "rot" };
  var viz6 = null;
  var c26 = null;
  var dragOff4 = null;
  var FIELDS3 = {
    // sphere
    rot: { label: "\u65CB\u8F6C\u573A V = \u1E91\xD7p", surf: "sphere", uv: (spec, u2, v) => {
      const p2 = spec.f(u2, v);
      return tangentCoords(spec, u2, v, [-p2[1], p2[0], 0]);
    } },
    gradz: { label: "\u9AD8\u5EA6\u68AF\u5EA6\u573A \u2207z\uFF08\u5728 N/S \u6781\u6709\u96F6\u70B9\uFF09", surf: "sphere", uv: (spec, u2, v) => tangentCoords(spec, u2, v, [0, 0, 1]) },
    dv: { label: "\u7EAC\u5411\u573A \u2202/\u2202v\uFF08\u4E24\u6781\u96F6\u70B9\uFF09", surf: "both", uv: () => [0, 1] },
    // torus
    tdu: { label: "\u73AF\u9762\u573A \u2202/\u2202u\uFF08\u65E0\u96F6\u70B9\uFF09", surf: "torus", uv: () => [1, 0] },
    tsaddle: { label: "\u73AF\u9762\u53CC\u978D\u573A sin u \u2202u + sin v \u2202v\uFF084 \u4E2A\u96F6\u70B9\uFF09", surf: "torus", uv: (spec, u2, v) => [Math.sin(u2), Math.sin(v)] }
  };
  function html11() {
    return `
  <h1 class="mod-title">10. \u6574\u4F53\u62D3\u6251\u4E0E de Rham \u4E0A\u540C\u8C03</h1>
  <div class="mod-sub">Global Topology &amp; de Rham Cohomology\uFF08\u5377\u2161\u521D\u63A2\uFF09</div>
  <div class="mod-intro">
    <p>\u5C40\u90E8\u5FAE\u5206\u51E0\u4F55\uFF08\u524D\u51E0\u7AE0\uFF09\u4E0E<b>\u6574\u4F53</b>\u6027\u8D28\u7684\u6865\u6881\uFF1A<b>Poincar\xE9\u2013Hopf \u5B9A\u7406</b>\u8BF4\uFF0C\u7D27\u81F4\u66F2\u9762\u4E0A\u4EFB\u4F55\u5411\u91CF\u573A\u7684\u96F6\u70B9\u6307\u6570\u4E4B\u548C\u7B49\u4E8E Euler \u793A\u6027\u6570 $\\sum_v \\mathrm{ind}_v = \\chi(M)$\u2014\u2014\u7403\u9762 $\\chi=2 \\ne 0$\uFF0C\u6545\u4EFB\u4F55\u8FDE\u7EED\u5207\u5411\u91CF\u573A\u5FC5\u6709\u96F6\u70B9\uFF08"\u65E0\u6CD5\u68B3\u5E73\u6BDB\u7403"\uFF09\uFF1B\u73AF\u9762 $\\chi=0$\uFF0C\u53EF\u4EE5\u5904\u5904\u975E\u96F6\u3002\u53F3\u4FA7\u6570\u503C\u6F14\u793A\u4F1A\u81EA\u52A8\u627E\u51FA\u573A\u7684\u96F6\u70B9\u5E76\u8BA1\u7B97\u5176\u6307\u6570\u3002<b>de Rham \u4E0A\u540C\u8C03</b> $H^k(M) = \\ker d / \\operatorname{im} d$\uFF08\u95ED\u5F62\u5F0F\u6A21\u6070\u5F53\u5F62\u5F0F\uFF09\u523B\u753B\u6574\u4F53\u7684"\u6D1E"\uFF1A$H^1(\\mathbb{R}^2\\setminus\\{0\\}) = \\mathbb{R}\\langle d\\theta \\rangle$\uFF0C\u4E0E\u540C\u8C03\u7FA4\u7684\u914D\u5BF9 $\\langle [\\omega], [\\gamma] \\rangle = \\oint_\\gamma \\omega$ \u7ED9\u51FA\u5708\u6570\uFF08winding number\uFF09\u3002</p>
  </div>
  <div class="panel-row first">
    <button class="btn on" data-t="1">\u2460 Poincar\xE9\u2013Hopf\uFF08\u6BDB\u7403\u5B9A\u7406\uFF09</button>
    <button class="btn" data-t="2">\u2461 H\xB9(R\xB2\u2216{0}) \u4E0E\u5708\u914D\u5BF9</button>
  </div>
  <div id="tab1">
    <div class="split">
      <div><div class="stage" id="stage1" style="height:480px"><span class="stage-tag">\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E</span></div>
        <div class="panel"><div id="panel1"></div></div></div>
      <div class="side2">
        <div class="fcard">${KD("\\sum_v \\operatorname{ind}_v(X) = \\chi(M) \\;\\;\\text{\uFF08Poincar\xE9\u2013Hopf\uFF09}")}
        ${KD("\\operatorname{ind}_v = \\frac{1}{2\\pi}\\oint \\!d\\arg V \\;\\;\\text{\uFF08\u73AF\u7ED5\u6570\uFF09}")}
        ${KD("\\chi(S^2) = 2, \\quad \\chi(T^2) = 0")}</div>
        <div class="fcard"><span class="fcard-label">\u6BDB\u7403\u5B9A\u7406</span>
        <p style="font-size:13px;color:#c9d6ee">\u7403\u9762\u4E0A\u7684"\u98CE"\uFF08\u5207\u5411\u91CF\u573A\uFF09\u4E0D\u53EF\u80FD\u5904\u5904\u5439\u2014\u2014\u81F3\u5C11\u6709\u4E00\u5904\u9759\u6B62\uFF08\u5370\u5EA6\u6D0B\u6709\u4E2A\u6C14\u65CB\u4E2D\u5FC3\uFF0C\u5317\u6781\u4E5F\u6709\u2026\u2026\uFF09\u3002</p></div>
      </div>
    </div>
  </div>
  <div id="tab2" style="display:none">
    <div class="stage" id="stage2" style="height:480px"></div>
    <div class="panel"><div id="panel2"></div></div>
    <div class="fcard">${KD("H^1(\\mathbb{R}^2\\setminus\\{0\\}) = \\ker d / \\operatorname{im} d \\cong \\mathbb{R}")}
    ${KD("\\langle [d\\theta], [\\gamma] \\rangle = \\oint_\\gamma d\\theta = 2\\pi n \\;\\;\\text{\uFF08n = \u5708\u6570\uFF09}")}
    ${KD("d\\theta \\text{ \u95ED\u800C } \\not\\!\\text{\u6070\u5F53} \\;\\Rightarrow\\; [d\\theta] \\ne 0 \\;\\text{ \u5728 } H^1 \\text{ \u4E2D}")}</div>
  </div>
  `;
  }
  function mount11(host) {
    const tabs = host.querySelectorAll("[data-t]");
    const panels = { 1: host.querySelector("#tab1"), 2: host.querySelector("#tab2") };
    const sw = (t2) => {
      st7.tab = t2;
      for (const b of tabs) b.classList.toggle("on", b.dataset.t === t2);
      for (const [k, p2] of Object.entries(panels)) p2.style.display = k === t2 ? "" : "none";
      if (t2 === "1") viz6?.resize();
      if (t2 === "2") c26?.resize();
    };
    for (const b of tabs) b.addEventListener("click", () => sw(b.dataset.t));
    setup13(host.querySelector("#stage1"), host.querySelector("#panel1"));
    setup23(host.querySelector("#stage2"), host.querySelector("#panel2"));
  }
  function setup13(stage, panel) {
    viz6 = new Viz(stage, { cameraPos: [3.4, -2.6, 2.5] });
    let mesh = null, grid = null, fieldSegs = null, zeroMarks = [];
    const surfSel = sel(panel, {
      value: "sphere",
      options: { sphere: "\u7403\u9762 S\xB2\uFF08\u03C7=2\uFF09", torus: "\u73AF\u9762 T\xB2\uFF08\u03C7=0\uFF09" },
      cb: (v) => {
        st7.surface = v;
        rebuild();
      }
    });
    const fldSel = sel(panel, {
      value: "rot",
      options: {},
      cb: (v) => {
        st7.field = v;
        draw();
      }
    });
    const outS = readout(panel, "\u03A3 ind_v = ");
    const outX = readout(panel, "\u03C7 = ");
    const outMsg = readout(panel, "\u7ED3\u8BBA = ");
    function fieldOptions() {
      const opts = {};
      for (const [k, f] of Object.entries(FIELDS3)) {
        if (f.surf === "both" || f.surf === st7.surface) opts[k] = f.label;
      }
      return opts;
    }
    function rebuild() {
      viz6.remove(mesh, grid, fieldSegs, ...zeroMarks);
      dragOff4?.();
      const opts = fieldOptions();
      fldSel.el.innerHTML = "";
      for (const [k, lbl] of Object.entries(opts)) {
        const op2 = document.createElement("option");
        op2.value = k;
        op2.textContent = lbl;
        fldSel.el.appendChild(op2);
      }
      if (!opts[st7.field]) st7.field = Object.keys(opts)[0];
      fldSel.el.value = st7.field;
      const spec = SURFACES[st7.surface];
      mesh = meshOf(spec, { color: 4157400, opacity: 0.82 });
      grid = gridLinesOn(spec, { opacity: 0.4 });
      fieldSegs = new xh(new As(), new hh({ color: 8315043, transparent: true, opacity: 0.85 }));
      viz6.add(mesh, grid, fieldSegs);
      draw();
    }
    function fieldUV(spec, u2, v) {
      const f = FIELDS3[st7.field];
      return f ? f.uv(spec, u2, v) : [0, 0];
    }
    function draw() {
      const spec = SURFACES[st7.surface];
      const pts = [];
      const nu2 = 10, nv = 14;
      for (let i = 0; i <= nu2; i++) {
        const u2 = spec.u0 + (spec.u1 - spec.u0) * i / nu2;
        for (let j = 0; j <= nv; j++) {
          const v = spec.v0 + (spec.v1 - spec.v0) * j / nv;
          if (spec.id === "sphere" && (u2 < 0.12 || u2 > Math.PI - 0.12)) continue;
          const [cu2, cv] = fieldUV(spec, u2, v);
          const w = tangentToWorld(spec, u2, v, cu2, cv);
          const n2 = V.norm(w);
          if (n2 < 1e-9) continue;
          const p2 = spec.f(u2, v);
          const s = 0.16;
          pts.push(...p2, ...V.add(p2, V.scale(w, s / n2)));
        }
      }
      const geo2 = new As();
      geo2.setAttribute("position", new vs(pts, 3));
      fieldSegs.geometry.dispose();
      fieldSegs.geometry = geo2;
      const zeros = fieldZeroIndices(spec, (u2, v) => fieldUV(spec, u2, v));
      for (const m of zeroMarks) viz6.remove(m);
      zeroMarks = [];
      let total = 0;
      for (const z of zeros) {
        const idx = z.index;
        total += idx;
        const col = idx > 0 ? 8315043 : 16739179;
        const mk = sphereMark(spec.f(z.u, z.v), col, 0.08);
        viz6.add(mk);
        zeroMarks.push(mk);
      }
      const chi = st7.surface === "sphere" ? 2 : 0;
      outS.set(`${total.toFixed(0)}\uFF08${zeros.length} \u4E2A\u96F6\u70B9\uFF09`);
      outX.set(`${chi}`);
      outMsg.set(chi === 0 ? '\u03A3 ind = 0 = \u03C7\uFF1A\u73AF\u9762"\u68B3\u5F97\u5E73"\uFF0C\u53EF\u4EE5\u5904\u5904\u975E\u96F6' : "\u03A3 ind = 2 = \u03C7 \u2260 0\uFF1A\u4EFB\u4F55\u8FDE\u7EED\u5207\u5411\u91CF\u573A\u5FC5\u6709\u96F6\u70B9\uFF08\u6BDB\u7403\u5B9A\u7406\uFF09");
      if (zeros.length === 0) outS.set("0\uFF08\u65E0\u96F6\u70B9\uFF09");
    }
    rebuild();
  }
  function setup23(stage, panel) {
    c26 = new C2(stage, { xmin: -3.4, xmax: 3.4, ymin: -3.4, ymax: 3.4 });
    const stB = { verts: [[1.6, -0.4], [2, 0.9], [0.8, 1.9], [-0.6, 1]], dragIdx: -1 };
    const rSl = slider(panel, { label: "\u5706\u56DE\u8DEF A \u534A\u5F84", min: 0.5, max: 2.6, step: 0.05, value: 1.6, cb: () => draw2() });
    const fSel = sel(panel, {
      value: "dtheta",
      options: { dtheta: "\u5F62\u5F0F d\u03B8\uFF08\u95ED\u800C\u975E\u6070\u5F53\uFF09", exact: "\u5F62\u5F0F x dx + y dy\uFF08\u6070\u5F53\uFF09" },
      cb: () => draw2()
    });
    const outA = readout(panel, "\u222E_A \u03C9 = ");
    const outB = readout(panel, "\u222E_B \u03C9 = ");
    const outW = readout(panel, "\u5708\u6570 n = ");
    c26.onClick = (p2) => {
      let best = -1, bd2 = 0.4;
      stB.verts.forEach((vp, i) => {
        const d2 = Math.hypot(vp[0] - p2.x, vp[1] - p2.y);
        if (d2 < bd2) {
          bd2 = d2;
          best = i;
        }
      });
      stB.dragIdx = best;
      draw2();
    };
    c26.onDrag = (p2) => {
      if (stB.dragIdx >= 0) {
        stB.verts[stB.dragIdx] = [Math.min(Math.max(p2.x, -3.3), 3.3), Math.min(Math.max(p2.y, -3.3), 3.3)];
        draw2();
      }
    };
    c26.needDraw = () => draw2();
    function loopPts(center, R) {
      const pts = [];
      for (let i = 0; i < 200; i++) {
        const a = i / 200 * 2 * Math.PI;
        pts.push({ x: center[0] + R * Math.cos(a), y: center[1] + R * Math.sin(a) });
      }
      return pts;
    }
    function draw2() {
      const c6 = c26;
      c6.clear();
      c6.axes();
      c6.dot(0, 0, { color: "#0a0f22", r: 17, stroke: "#ff7b72" });
      c6.text("\u6D1E\uFF08\u539F\u70B9\uFF09", 0.42, 0.3, { color: "#ff7b72", size: 12 });
      if (fSel.el.value === "dtheta") {
        for (let i = 0; i < 36; i++) {
          const a = i / 36 * 2 * Math.PI;
          c6.line(0, 0, 3.3 * Math.cos(a), 3.3 * Math.sin(a), { color: "rgba(126,224,163,0.30)", width: 1 });
        }
        c6.text("d\u03B8 \u7684\u5E73\u9762\u53E0\uFF08\u5F84\u5411\uFF09", -3.2, 3.15, { color: "#7ee0a3", size: 11.5 });
      }
      const RA = +rSl.get();
      const loopA = loopPts([0, 0], RA);
      c6.poly(loopA.map((p2) => [p2.x, p2.y]), { stroke: "#58a6ff", width: 2 });
      const loopB = stB.verts.map((vp) => ({ x: vp[0], y: vp[1] }));
      c6.poly(loopB.map((p2) => [p2.x, p2.y]), { stroke: "#ffd75e", width: 2 });
      for (const vp of stB.verts) {
        c6.dot(vp[0], vp[1], { color: "#ffd75e", r: 5, stroke: "#fff" });
      }
      c6.text("A\uFF1A\u5706\u56DE\u8DEF\uFF08\u56F4\u7ED5\u6D1E\uFF09", RA + 0.15, 0.3, { color: "#58a6ff", size: 12 });
      c6.text("B\uFF1A\u53EF\u62D6\u52A8\u9876\u70B9\u7684\u591A\u8FB9\u5F62\uFF08\u8BD5\u8BD5\u662F\u5426\u7ED5\u8FC7\u6D1E\uFF09", -3.3, -3.15, { color: "#ffd75e", size: 12 });
      const useDtheta = fSel.el.value === "dtheta";
      const P2 = useDtheta ? dtheta.P : (x, y) => x;
      const Q2 = useDtheta ? dtheta.Q : (x, y) => y;
      const IA = lineIntegral2D(P2, Q2, loopA);
      const IB = lineIntegral2D(P2, Q2, loopB);
      outA.set(`${IA.toFixed(3)}${useDtheta ? "" : " = 0\uFF08\u6070\u5F53\uFF0C\u6052\u4E3A\u96F6\uFF09"}`);
      outB.set(`${IB.toFixed(3)}${useDtheta ? "" : " = 0"}`);
      if (useDtheta) {
        const nB = Math.round(IB / (2 * Math.PI));
        outW.set(`${nB}\uFF08B \u7ED5\u6D1E ${nB} \u5708\uFF1BA \u6052\u4E3A 1\uFF09`);
        c6.text(`\u222E_A d\u03B8 = ${IA.toFixed(2)} = 2\u03C0,  \u222E_B d\u03B8 = ${IB.toFixed(2)} = 2\u03C0\xB7${Math.round(IB / (2 * Math.PI))}`, 0, 3.2, { align: "center", color: "#ffd75e", size: 12.5 });
        c6.text("\u540C\u4F26\u7684\u5708\uFF08\u5708\u6570\u76F8\u540C\uFF09\u7ED9\u51FA\u76F8\u540C\u79EF\u5206 \u2014\u2014 \u8FD9\u662F\u4E0A\u540C\u8C03\u7C7B [d\u03B8] \u4E0E\u5708 \u03B3 \u7684\u914D\u5BF9", 0, -3.35, { align: "center", color: "#8fa2c8", size: 11.5 });
      } else {
        outW.set("\u2014\uFF08\u6070\u5F53\u5F62\u5F0F\u5BF9\u6240\u6709\u5708\u79EF\u5206\u4E3A 0\uFF09");
        c6.text("\u6070\u5F53\u5F62\u5F0F d(x\xB2/2+y\xB2/2) = x dx + y dy\uFF1A\u5BF9\u4EFB\u4F55\u5708\u79EF\u5206\u6052\u4E3A 0", 0, 3.2, { align: "center", color: "#8fa2c8", size: 12.5 });
      }
    }
    draw2();
  }
  function teardown11() {
    dragOff4?.();
    viz6?.dispose();
    viz6 = null;
    c26?.dispose();
    c26 = null;
  }

  // js/modules/m11-hopf.js
  var m11_hopf_exports = {};
  __export(m11_hopf_exports, {
    en: () => en12,
    html: () => html12,
    id: () => id12,
    mount: () => mount12,
    no: () => no13,
    teardown: () => teardown12,
    zh: () => zh13
  });
  var id12 = "m11";
  var no13 = "11";
  var zh13 = "Hopf \u7EA4\u7EF4\u5316\uFF08\u5377\u2161\uFF09";
  var en12 = "The Hopf Fibration";
  var st8 = { density: "std", phase: 0, playing: false, base: [0.9, 1.2], link2: false, showBase: true };
  var viz7 = null;
  var dragOff5 = null;
  function fiberPts(theta, v, tau0, N = 110, R = 1) {
    const c6 = Math.cos(theta / 2), s = Math.sin(theta / 2);
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const t2 = i / N * 2 * Math.PI;
      const x1 = c6 * Math.cos(t2 + tau0), x2 = c6 * Math.sin(t2 + tau0);
      const x3 = s * Math.cos(v + t2 + tau0), x4 = s * Math.sin(v + t2 + tau0);
      const denom = 1 - x4;
      if (denom < 0.05) continue;
      const p2 = [x1 / denom, x2 / denom, x3 / denom];
      if (Math.abs(p2[0]) > 7 || Math.abs(p2[1]) > 7 || Math.abs(p2[2]) > 7) continue;
      pts.push(p2.map((x) => x * R));
    }
    return pts;
  }
  var DENSITY = {
    sparse: { label: "\u7A00\u758F 4\xD77", nu: 4, nv: 7 },
    std: { label: "\u6807\u51C6 7\xD712", nu: 7, nv: 12 },
    dense: { label: "\u7A20\u5BC6 10\xD716", nu: 10, nv: 16 }
  };
  function html12() {
    return `
  <h1 class="mod-title">11. Hopf \u7EA4\u7EF4\u5316</h1>
  <div class="mod-sub">The Hopf Fibration: S\xB3 \u2192 S\xB2\uFF08\u5377\u2161 \xB7 \u7EA4\u7EF4\u4E1B\uFF09</div>
  <div class="mod-intro">
    <p><b>Hopf \u7EA4\u7EF4\u5316</b>\u662F\u6700\u91CD\u8981\u3001\u6700\u5947\u5999\u7684\u7EA4\u7EF4\u4E1B\uFF1A$h: S^3 \\to S^2$\uFF0C$h(z_1,z_2) = (2\\operatorname{Re}(z_1\\bar z_2),\\, 2\\operatorname{Im}(z_1\\bar z_2),\\, |z_1|^2-|z_2|^2)$\u3002\u6BCF\u4E00\u70B9\u7684<b>\u7EA4\u7EF4</b> $h^{-1}(p)$ \u90FD\u662F $S^3$ \u4E2D\u7684\u4E00\u4E2A<b>\u5927\u5706</b> $S^1$\uFF0C\u6240\u6709\u7EA4\u7EF4\u50CF\u6BDB\u7EBF\u4E00\u6837\u628A $S^3$ \u7EC7\u6210 $S^2$\u3002\u628A $S^3$ \u4ECE\u5317\u6781\u7ACB\u4F53\u6295\u5F71\u5230 $\\mathbb{R}^3$\uFF0C\u6BCF\u6761\u7EA4\u7EF4\u53D8\u6210\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u4E00\u6761\u95ED\u5408\u66F2\u7EBF\u2014\u2014\u5B83\u4EEC<b>\u4E24\u4E24\u4E92\u76F8\u7F20\u7ED5\u4E00\u6B21</b>\uFF08linking number $=1$\uFF09\uFF0C\u8FD9\u662F $S^3$ \u4E0E $S^1\\times S^2$ \u672C\u8D28\u4E0D\u540C\uFF08\u7EA4\u7EF4\u4E1B\u975E\u5E73\u51E1\uFF09\u7684\u76F4\u89C2\u4F53\u73B0\u3002</p>
  </div>
  <div class="stage" id="stage" style="height:520px"><span class="stage-tag">\u5728\u4E2D\u5FC3\u5C0F\u7403\u9762\u4E0A\u62D6\u52A8 \u2192 \u9AD8\u4EAE\u5BF9\u5E94\u7EA4\u7EF4</span></div>
  <div class="panel"><div id="panel"></div></div>
  <div class="fcard">${KD("h(z_1,z_2) = (2\\operatorname{Re}(z_1\\bar z_2),\\, 2\\operatorname{Im}(z_1\\bar z_2),\\, |z_1|^2-|z_2|^2)")}
  ${KD("h^{-1}(p) \\cong S^1 \\;\\;\\text{\uFF08\u7EA4\u7EF4 = \u5927\u5706\uFF09}, \\qquad S^3 = \\bigsqcup_p h^{-1}(p)")}
  ${KD("\\text{\u4EFB\u610F\u4E24\u6761\u7EA4\u7EF4\uFF1Alinking number} = 1 \\;\\;\\text{\uFF08Hopf \u4E0D\u53D8\u91CF\uFF09}")}
  ${KD("\\text{\u7ACB\u4F53\u6295\u5F71: } (x_1,x_2,x_3,x_4) \\mapsto \\frac{(x_1,x_2,x_3)}{1-x_4}")}</div>
  `;
  }
  function mount12(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    viz7 = new Viz(stage, { cameraPos: [4.2, -3.2, 3.4] });
    const baseSpec = { ...SURFACES.sphere, id: "sphere" };
    const baseMesh = meshOf(baseSpec, { color: 4881112, opacity: 0.5, nu: 24, nv: 36 });
    baseMesh.scale.set(0.55, 0.55, 0.55);
    const baseGrid = gridLinesOn(baseSpec, { color: 2899822, opacity: 0.5 });
    baseGrid.scale.set(0.55, 0.55, 0.55);
    viz7.add(baseMesh, baseGrid);
    let fiberSegs = new xh(new As(), new hh({ color: 8315043, transparent: true, opacity: 0.55 }));
    let hiLine = polyline([], 16766814, 2.6);
    viz7.add(fiberSegs, hiLine);
    const bMark = sphereMark([0, 0, 0], 16766814, 0.05);
    const bMarkLine = polyline([], 16739179, 1.2);
    viz7.add(bMark, bMarkLine);
    const densSel = sel(panel, {
      value: "std",
      options: Object.fromEntries(Object.entries(DENSITY).map(([k, v]) => [k, v.label])),
      cb: (v) => {
        st8.density = v;
        rebuild();
      }
    });
    const playBtn = btn(panel, { label: "\u25B6 \u76F8\u4F4D\u65CB\u8F6C\uFF08\u7EA4\u7EF4\u6574\u4F53\u8F6C\u52A8\uFF09", cb: () => {
      st8.playing = !st8.playing;
      playBtn.el.classList.toggle("on", st8.playing);
      playBtn.el.textContent = st8.playing ? "\u23F8 \u6682\u505C" : "\u25B6 \u76F8\u4F4D\u65CB\u8F6C\uFF08\u7EA4\u7EF4\u6574\u4F53\u8F6C\u52A8\uFF09";
    } });
    const linkBtn = btn(panel, { label: "\u6F14\u793A\u4E24\u7EA4\u7EF4\u7F20\u7ED5\uFF08linking = 1\uFF09", cb: () => {
      st8.link2 = !st8.link2;
      linkBtn.el.classList.toggle("on", st8.link2);
      linkBtn.el.textContent = st8.link2 ? "\u56DE\u5230\u5B8C\u6574\u7EA4\u7EF4\u4E1B" : "\u6F14\u793A\u4E24\u7EA4\u7EF4\u7F20\u7ED5\uFF08linking = 1\uFF09";
      rebuild();
    } });
    const baseBtn = btn(panel, { label: "\u57FA\u5E95\u7403 \u5F00", active: true, cb: () => {
      st8.showBase = !st8.showBase;
      baseMesh.visible = baseGrid.visible = st8.showBase;
      baseBtn.el.classList.toggle("on", st8.showBase);
      baseBtn.el.textContent = st8.showBase ? "\u57FA\u5E95\u7403 \u5F00" : "\u57FA\u5E95\u7403 \u5173";
    } });
    const outB = readout(panel, "\u57FA\u5E95\u70B9 (\u03B8, \u03C6) = ");
    const outL = readout(panel, "linking number = ");
    function rebuild() {
      const polylines = [];
      if (st8.link2) {
        polylines.push(fiberPts(0.02, 0, st8.phase, 130));
        polylines.push(fiberPts(Math.PI - 0.02, 0, st8.phase, 130));
        outL.set("1\uFF08\u4E24\u6761\u7EA4\u7EF4\u4E92\u76F8\u7F20\u7ED5\u4E00\u6B21\uFF09");
        hiLine.visible = false;
        bMark.visible = false;
        bMarkLine.visible = false;
      } else {
        const d2 = DENSITY[st8.density];
        const u2 = (i) => 0.12 + (Math.PI - 0.24) * i / (d2.nu - 1 || 1);
        const v = (j) => 2 * Math.PI * j / d2.nv;
        for (let i = 0; i < d2.nu; i++) {
          for (let j = 0; j < d2.nv; j++) {
            const pts = fiberPts(u2(i), v(j), st8.phase, 100);
            if (pts.length > 4) polylines.push(pts);
          }
        }
        const hi2 = fiberPts(st8.base[0], st8.base[1], st8.phase, 130);
        updateLine(hiLine, hi2);
        hiLine.visible = true;
        const bv = baseSpec.f(st8.base[0], st8.base[1]).map((x) => x * 0.55);
        bMark.position.set(...bv);
        bMark.visible = true;
        bMarkLine.visible = true;
        updateLine(bMarkLine, [bv, [0, 0, 0]]);
        outB.set(`(${st8.base[0].toFixed(2)}, ${st8.base[1].toFixed(2)})`);
        outL.set("\u2014\uFF08\u5B8C\u6574\u7EA4\u7EF4\u4E1B\uFF0C\u4EFB\u610F\u4E24\u6761\u7EA4\u7EF4 linking = 1\uFF09");
      }
      const pos = [];
      for (const pl2 of polylines) {
        for (let i = 0; i < pl2.length - 1; i++) pos.push(...pl2[i], ...pl2[i + 1]);
      }
      const geo2 = new As();
      geo2.setAttribute("position", new vs(pos, 3));
      fiberSegs.geometry.dispose();
      fiberSegs.geometry = geo2;
    }
    dragOff5 = enableDrag(viz7, baseMesh, baseSpec, (u2, v) => {
      st8.base = [Math.min(Math.max(u2, 0.05), Math.PI - 0.05), v];
      if (!st8.link2) rebuild();
    });
    viz7.tick = (dt2) => {
      if (st8.playing) {
        st8.phase += dt2 * 0.9;
        rebuild();
      }
    };
    rebuild();
  }
  function teardown12() {
    dragOff5?.();
    viz7?.dispose();
    viz7 = null;
  }

  // js/modules/m12-hodge.js
  var m12_hodge_exports = {};
  __export(m12_hodge_exports, {
    en: () => en13,
    html: () => html13,
    id: () => id13,
    mount: () => mount13,
    no: () => no14,
    teardown: () => teardown13,
    zh: () => zh14
  });
  var id13 = "m12";
  var no14 = "12";
  var zh14 = "Hodge \u661F\u7B97\u5B50\uFF08\u5377\u2161\uFF09";
  var en13 = "The Hodge Star Operator";
  var st9 = { a: 1.1, b: 0.5, th: 0.9, ph: 1.1 };
  var cA2 = null;
  var viz8 = null;
  function html13() {
    return `
  <h1 class="mod-title">12. Hodge \u661F\u7B97\u5B50</h1>
  <div class="mod-sub">The Hodge Star Operator \u22C6\uFF08\u5377\u2161 \xB7 \u5FAE\u5206\u5F62\u5F0F\u8FDB\u9636\uFF09</div>
  <div class="mod-intro">
    <p>\u7ED9\u5B9A\u5EA6\u89C4\u4E0E\u5B9A\u5411\uFF0C<b>Hodge \u661F\u7B97\u5B50</b> $\\star$ \u628A $k$-\u5F62\u5F0F\u6620\u4E3A $(n{-}k)$-\u5F62\u5F0F\uFF1A\u5728\u4E8C\u7EF4\u6B27\u6C0F\u7A7A\u95F4 $\\star dx = dy,\\; \\star dy = -dx$\uFF081-\u5F62\u5F0F\u7684\u5E73\u9762\u53E0\u65CB\u8F6C $90\xB0$\uFF09\uFF0C$\\star 1 = dx \\wedge dy$\uFF1B\u5728\u4E09\u7EF4 $\\star dx = dy \\wedge dz$\uFF08\u5FAA\u73AF\uFF09\uFF0C\u5373<b>\u5411\u91CF \u2194 \u9762\u79EF\u5143</b>\u3002\u5B83\u5B9A\u4E49\u5185\u79EF $\\langle\\alpha,\\beta\\rangle = \\int \\alpha\\wedge\\star\\beta$\uFF0C\u56E0\u6B64 $\\alpha \\wedge \\star\\alpha = |\\alpha|^2 \\, dV$\u3002\u7269\u7406\u4E0A\uFF0CMaxwell \u65B9\u7A0B\u53EF\u5199\u6210 $dF = 0,\\; d\\star F = J$\u2014\u2014\u8FD9\u6B63\u662F\u6881\u4E66\u4E2D\u7528\u5F62\u5F0F\u8BED\u8A00\u5199\u7535\u78C1\u5B66/\u5F15\u529B\u7406\u8BBA\u7684\u6838\u5FC3\u5DE5\u5177\u3002</p>
  </div>
  <div class="split">
    <div>
      <div class="stage" id="stageA" style="height:420px"></div>
      <div class="panel"><div id="panelA"></div></div>
      <div class="fcard">${KD("\\star dx = dy, \\quad \\star dy = -dx \\;\\;\\text{\uFF082D \u6B27\u6C0F\uFF09}")}
      ${KD("\\star\\star\\alpha = -\\alpha \\;\\;\\text{\uFF082D 1-\u5F62\u5F0F\uFF09}, \\qquad \\star 1 = dx\\wedge dy, \\;\\; \\star(dx\\wedge dy) = 1")}
      ${KD("\\alpha \\wedge \\star\\alpha = (a^2+b^2)\\, dx\\wedge dy = |\\alpha|^2\\, dV")}</div>
    </div>
    <div class="side2">
      <div class="stage" id="stageB" style="height:420px"><span class="stage-tag">\u62D6\u62FD\u65CB\u8F6C\u89C6\u89D2</span></div>
      <div class="panel"><div id="panelB"></div></div>
      <div class="fcard">${KD("\\star dx = dy\\wedge dz, \\;\\; \\star dy = dz\\wedge dx, \\;\\; \\star dz = dx\\wedge dy \\;\\;\\text{\uFF083D\uFF0C\u5FAA\u73AF\uFF09}")}
      ${KD("dF = 0, \\qquad d\\star F = J \\;\\;\\text{\uFF08Maxwell \u65B9\u7A0B\u7684\u5F62\u5F0F\u8BED\u8A00\uFF09}")}</div>
    </div>
  </div>
  `;
  }
  function mount13(host) {
    setupA3(host.querySelector("#stageA"), host.querySelector("#panelA"));
    setupB3(host.querySelector("#stageB"), host.querySelector("#panelB"));
  }
  function setupA3(stage, panel) {
    cA2 = new C2(stage, { xmin: -3.2, xmax: 3.2, ymin: -3.2, ymax: 3.2 });
    const aSl = slider(panel, { label: "a\uFF08\u03B1 = a dx + b dy\uFF09", min: -2, max: 2, step: 0.05, value: st9.a, cb: (v) => {
      st9.a = v;
      draw();
    } });
    const bSl = slider(panel, { label: "b", min: -2, max: 2, step: 0.05, value: st9.b, cb: (v) => {
      st9.b = v;
      draw();
    } });
    const outW = readout(panel, "\u03B1\u2227\u22C6\u03B1 = ");
    const outS = readout(panel, "\u22C6\u22C6\u03B1 = ");
    cA2.needDraw = () => draw();
    function planes(A, B, color, o) {
      const mag = Math.hypot(A, B);
      if (mag < 1e-4) return;
      const nx = A / mag, ny = B / mag;
      const sp2 = Math.min(Math.max(1.4 / mag, 0.15), 1.6);
      for (let k = -3; k <= 3; k++) {
        const ox = o.x + k * sp2 * nx, oy = o.y + k * sp2 * ny;
        cA2.line(ox - 1.7 * ny, oy + 1.7 * nx, ox + 1.7 * ny, oy - 1.7 * nx, { color, width: 1.5, dash: o.dash ?? [] });
      }
    }
    function draw() {
      const c6 = cA2;
      c6.clear();
      c6.axes();
      const { a, b } = st9;
      const sa2 = -b, sb = a;
      planes(a, b, "#ff6b6b", { x: 0, y: 0 });
      planes(sa2, sb, "#58a6ff", { x: 0, y: 0 });
      c6.text("\u03B1 \u7684\u5E73\u9762\u53E0", 1.8, 2.6, { color: "#ff6b6b", size: 13 });
      c6.text("\u22C6\u03B1 \u7684\u5E73\u9762\u53E0\uFF08\u65CB\u8F6C 90\xB0\uFF09", 1.8, 2.35, { color: "#58a6ff", size: 13 });
      const g = (A, B, col, lbl) => {
        const mag = Math.hypot(A, B);
        if (mag < 1e-4) return;
        const s = 1.3 / mag;
        c6.arrow(0, 0, A * s, B * s, { color: col, width: 2.4 });
        c6.text(lbl, A * s * 1.15, B * s * 1.15 + 0.15, { color: col, size: 13 });
      };
      g(a, b, "#ffd75e", "g\u266F\u03B1");
      g(sa2, sb, "#7ee0a3", "g\u266F\u22C6\u03B1");
      const val = a * a + b * b;
      outW.set(`${val.toFixed(3)} \xB7 dx\u2227dy`);
      outS.set(`(${(-a).toFixed(2)}, ${(-b).toFixed(2)}) = \u2212\u03B1 \u2713`);
      for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
        const p2 = [i * a + j * -b, i * b + j * a];
        if (Math.abs(p2[0]) < 3 && Math.abs(p2[1]) < 3) c6.dot(p2[0], p2[1], { color: "rgba(255,215,94,0.4)", r: 2.5 });
      }
      c6.text(`\u03B1\u2227\u22C6\u03B1 = (a\xB2+b\xB2) dx\u2227dy = ${val.toFixed(2)} dx\u2227dy`, -3.1, -2.9, { color: "#ffd75e", size: 12.5 });
    }
    draw();
  }
  function setupB3(stage, panel) {
    viz8 = new Viz(stage, { cameraPos: [3.4, -2.6, 2.6] });
    const thSl = slider(panel, { label: "\u5411\u91CF v \u7684\u6781\u89D2", min: 0.1, max: Math.PI - 0.1, step: 0.01, value: st9.th, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      st9.th = v;
      sync();
    } });
    const phSl = slider(panel, { label: "v \u7684\u65B9\u4F4D\u89D2", min: 0, max: 2 * Math.PI, step: 0.01, value: st9.ph, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      st9.ph = v;
      sync();
    } });
    const outF = readout(panel, "\u22C6(v\xB7dx) \u5206\u91CF = ");
    const vArr = arrow([0, 0, 0], [1, 0, 0], 16766814, { len: 1.5, head: 0.22 });
    const disk = new Xs(
      new ru(0.62, 40),
      new es({ color: 5809919, transparent: true, opacity: 0.35, side: p, depthWrite: false })
    );
    const oriArrow = arrow([0, 0, 0], [1, 0, 0], 8315043, { len: 0.4, head: 0.1 });
    viz8.add(vArr, disk, oriArrow);
    function sync() {
      const v = [Math.sin(st9.th) * Math.cos(st9.ph), Math.sin(st9.th) * Math.sin(st9.ph), Math.cos(st9.th)];
      vArr.setDirection(new Ui(...v));
      disk.quaternion.setFromUnitVectors(new Ui(0, 0, 1), new Ui(...v));
      let e1 = V.cross(v, [0, 0, 1]);
      if (V.norm(e1) < 1e-6) e1 = [1, 0, 0];
      e1 = V.normalize(e1);
      oriArrow.setDirection(new Ui(...e1));
      const vx = v[0], vy = v[1], vz = v[2];
      outF.set(`(${vx.toFixed(2)} dy\u2227dz, ${vy.toFixed(2)} dz\u2227dx, ${vz.toFixed(2)} dx\u2227dy)`);
    }
    sync();
  }
  function teardown13() {
    cA2?.dispose();
    cA2 = null;
    viz8?.dispose();
    viz8 = null;
  }

  // js/modules/m13-hyperbolic.js
  var m13_hyperbolic_exports = {};
  __export(m13_hyperbolic_exports, {
    angleAt: () => angleAt,
    arcPoints: () => arcPoints,
    circleIntersect: () => circleIntersect,
    en: () => en14,
    geodesicCircle: () => geodesicCircle,
    html: () => html14,
    hyperbolicArea: () => hyperbolicArea,
    hyperbolicDistance: () => hyperbolicDistance,
    id: () => id14,
    inTriangle: () => inTriangle,
    makeTiling: () => makeTiling,
    mount: () => mount14,
    no: () => no15,
    teardown: () => teardown14,
    zh: () => zh15
  });
  var id14 = "m13";
  var no15 = "13";
  var zh15 = "\u53CC\u66F2\u5E73\u9762 \xB7 Poincar\xE9 \u5706\u76D8";
  var en14 = "Hyperbolic Plane (Poincar\xE9 Disk)";
  var st10 = {
    mode: "line",
    p: [0.25, 0.1],
    q: [-0.3, -0.35],
    L1: [-0.6, 0.3],
    L2: [0.55, -0.2],
    P: [-0.15, -0.45],
    eAng: 4,
    tri: [[-0.5, -0.25], [0.5, -0.3], [0.1, 0.5]]
  };
  var c5 = null;
  var dragIdx = -1;
  function geodesicCircle(p2, q) {
    const d2 = [q[0] - p2[0], q[1] - p2[1]];
    const b1 = (1 + p2[0] * p2[0] + p2[1] * p2[1]) / 2;
    const b2 = (q[0] * q[0] + q[1] * q[1] - p2[0] * p2[0] - p2[1] * p2[1]) / 2;
    const det = p2[0] * d2[1] - p2[1] * d2[0];
    if (Math.abs(det) < 1e-9) return null;
    const cx = (b1 * d2[1] - p2[1] * b2) / det;
    const cy = (p2[0] * b2 - b1 * d2[0]) / det;
    const r2 = cx * cx + cy * cy - 1;
    if (r2 < 1e-3) return null;
    return { c: [cx, cy], r: Math.sqrt(r2) };
  }
  function arcPoints(p2, q, N = 90) {
    const G = geodesicCircle(p2, q);
    if (!G) {
      const pts2 = [];
      for (let i = 0; i <= N; i++) pts2.push([p2[0] + (q[0] - p2[0]) * i / N, p2[1] + (q[1] - p2[1]) * i / N]);
      return pts2;
    }
    const { c: cc2, r } = G;
    const R = Math.hypot(...cc2);
    const gam = Math.atan2(cc2[1], cc2[0]);
    const v = Math.acos(Math.max(-1, Math.min(1, -r / R)));
    const e1 = gam + v, e2 = gam - v;
    const norm = (a) => {
      while (a < 0) a += 2 * Math.PI;
      while (a >= 2 * Math.PI) a -= 2 * Math.PI;
      return a;
    };
    const inD = (a) => {
      const x = cc2[0] + r * Math.cos(a), y = cc2[1] + r * Math.sin(a);
      return x * x + y * y <= 1.0001;
    };
    const d1 = norm(e2 - e1), d2 = 2 * Math.PI - d1;
    const A = inD(norm(e1 + d1 / 2)) ? e1 : e2;
    const D = inD(norm(e1 + d1 / 2)) ? d1 : d2;
    const ap2 = norm(Math.atan2(p2[1] - cc2[1], p2[0] - cc2[0]) - A);
    const aq = norm(Math.atan2(q[1] - cc2[1], q[0] - cc2[0]) - A);
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const a = A + ap2 + (aq - ap2) * i / N;
      pts.push([cc2[0] + r * Math.cos(a), cc2[1] + r * Math.sin(a)]);
    }
    return pts;
  }
  function circleIntersect(G1, G2) {
    if (!G1 || !G2) return true;
    const { c: c12, r: r1 } = G1, { c: c27, r: r2 } = G2;
    const d2 = Math.hypot(c27[0] - c12[0], c27[1] - c12[1]);
    if (d2 > r1 + r2 || d2 < Math.abs(r1 - r2) || d2 < 1e-9) return false;
    const a = (r1 * r1 - r2 * r2 + d2 * d2) / (2 * d2);
    const h2 = r1 * r1 - a * a;
    if (h2 < 0) return false;
    const px = c12[0] + a * (c27[0] - c12[0]) / d2, py = c12[1] + a * (c27[1] - c12[1]) / d2;
    const h3 = Math.sqrt(h2);
    const i1 = [px + h3 * (c27[1] - c12[1]) / d2, py - h3 * (c27[0] - c12[0]) / d2];
    const i2 = [px - h3 * (c27[1] - c12[1]) / d2, py + h3 * (c27[0] - c12[0]) / d2];
    const inD = (p2) => p2[0] * p2[0] + p2[1] * p2[1] < 0.999;
    return inD(i1) || inD(i2);
  }
  function angleAt(i, tri) {
    const j = (i + 1) % 3, k = (i + 2) % 3;
    const arcIJ = arcPoints(tri[i], tri[j], 60);
    const arcKI = arcPoints(tri[k], tri[i], 60);
    const ray1 = [arcIJ[1][0] - arcIJ[0][0], arcIJ[1][1] - arcIJ[0][1]];
    const ray2 = [arcKI[arcKI.length - 2][0] - arcKI[arcKI.length - 1][0], arcKI[arcKI.length - 2][1] - arcKI[arcKI.length - 1][1]];
    const n1 = Math.hypot(...ray1) || 1, n2 = Math.hypot(...ray2) || 1;
    const dot = Math.max(-1, Math.min(1, (ray1[0] * ray2[0] + ray1[1] * ray2[1]) / (n1 * n2)));
    return Math.acos(dot);
  }
  function inTriangle(P2, tri) {
    const verts = [0, 1, 2].map((i) => tri[i]);
    for (let i = 0; i < 3; i++) {
      const a = verts[i], b = verts[(i + 1) % 3], opp = verts[(i + 2) % 3];
      const G = geodesicCircle(a, b);
      if (!G) {
        const d2 = [b[0] - a[0], b[1] - a[1]];
        const s1 = d2[0] * (opp[1] - a[1]) - d2[1] * (opp[0] - a[0]);
        const s2 = d2[0] * (P2[1] - a[1]) - d2[1] * (P2[0] - a[0]);
        if (s1 * s2 < 0) return false;
      } else {
        const f = (pt2) => (pt2[0] - G.c[0]) ** 2 + (pt2[1] - G.c[1]) ** 2 - G.r * G.r;
        if (f(opp) * f(P2) < 0) return false;
      }
    }
    return true;
  }
  function hyperbolicArea(tri) {
    const xs = tri.map((v) => v[0]), ys2 = tri.map((v) => v[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys2), y1 = Math.max(...ys2);
    let sum = 0;
    const N = 160;
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x = x0 + (x1 - x0) * (i + 0.5) / N, y = y0 + (y1 - y0) * (j + 0.5) / N;
      if (x * x + y * y >= 1) continue;
      if (!inTriangle([x, y], tri)) continue;
      sum += 4 / (1 - x * x - y * y) ** 2 * ((x1 - x0) / N) * ((y1 - y0) / N);
    }
    return sum;
  }
  function hyperbolicDistance(p2, q) {
    const num = Math.hypot(p2[0] - q[0], p2[1] - q[1]);
    const den = Math.hypot(1 - p2[0] * q[0] - p2[1] * q[1], p2[0] * q[1] - p2[1] * q[0]);
    const t2 = Math.min(num / den, 0.999999);
    return 2 * Math.atanh(t2);
  }
  function makeTiling(p2, q, maxDepth = 4) {
    const interiorAngle = (r2) => {
      const v0 = [r2, 0];
      const v1 = [r2 * Math.cos(2 * Math.PI / p2), r2 * Math.sin(2 * Math.PI / p2)];
      const vp = [r2 * Math.cos(-2 * Math.PI / p2), r2 * Math.sin(-2 * Math.PI / p2)];
      const arc1 = arcPoints(vp, v0, 20);
      const arc2 = arcPoints(v0, v1, 20);
      const ray1 = [arc1[arc1.length - 2][0] - arc1[arc1.length - 1][0], arc1[arc1.length - 2][1] - arc1[arc1.length - 1][1]];
      const ray2 = [arc2[1][0] - arc2[0][0], arc2[1][1] - arc2[0][1]];
      const n1 = Math.hypot(...ray1) || 1, n2 = Math.hypot(...ray2) || 1;
      const dot = Math.max(-1, Math.min(1, (ray1[0] * ray2[0] + ray1[1] * ray2[1]) / (n1 * n2)));
      return Math.acos(dot);
    };
    let lo2 = 1e-3, hi2 = 0.999;
    const target = 2 * Math.PI / q;
    for (let it2 = 0; it2 < 80; it2++) {
      const mid = (lo2 + hi2) / 2;
      if (interiorAngle(mid) < target) hi2 = mid;
      else lo2 = mid;
    }
    const r = (lo2 + hi2) / 2;
    const centerVerts = [];
    for (let i = 0; i < p2; i++) {
      const a = 2 * Math.PI * i / p2;
      centerVerts.push([r * Math.cos(a), r * Math.sin(a)]);
    }
    const reflectAcross = (verts, a, b) => {
      const G = geodesicCircle(a, b);
      if (!G) {
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const L2 = dx * dx + dy * dy;
        return verts.map((v) => {
          const t2 = ((v[0] - a[0]) * dx + (v[1] - a[1]) * dy) / L2;
          return [2 * (a[0] + t2 * dx) - v[0], 2 * (a[1] + t2 * dy) - v[1]];
        });
      }
      const { c: c6, r: rr2 } = G;
      return verts.map((v) => {
        const dx = v[0] - c6[0], dy = v[1] - c6[1];
        const d2 = dx * dx + dy * dy;
        if (d2 < 1e-9) return v;
        const s = rr2 * rr2 / d2;
        return [c6[0] + s * dx, c6[1] + s * dy];
      });
    };
    const tiles = [];
    const seen = /* @__PURE__ */ new Set();
    const key = (verts) => verts.map((v) => v.map((x) => Math.round(x * 500) / 500).join(",")).join(";");
    const queue = [{ verts: centerVerts, depth: 0 }];
    seen.add(key(centerVerts));
    while (queue.length) {
      const cur = queue.shift();
      tiles.push(cur);
      if (cur.depth >= maxDepth) continue;
      for (let i = 0; i < p2; i++) {
        const a = cur.verts[i], b = cur.verts[(i + 1) % p2];
        const newVerts = reflectAcross(cur.verts, a, b);
        const k = key(newVerts);
        if (!seen.has(k)) {
          seen.add(k);
          queue.push({ verts: newVerts, depth: cur.depth + 1 });
        }
      }
    }
    return { tiles, p: p2, q, r };
  }
  function html14() {
    return `
  <h1 class="mod-title">13. \u53CC\u66F2\u5E73\u9762 \xB7 Poincar\xE9 \u5706\u76D8</h1>
  <div class="mod-sub">Hyperbolic Plane (Poincar\xE9 Disk), K = \u22121</div>
  <div class="mod-intro">
    <p><b>\u5E9E\u52A0\u83B1\u5706\u76D8</b>\u662F $K=-1$ \u7684\u5E38\u66F2\u7387\u7A7A\u95F4\u6A21\u578B\uFF1A\u5EA6\u91CF $ds^2 = \\frac{4(dx^2+dy^2)}{(1-x^2-y^2)^2}$\u3002<b>\u6D4B\u5730\u7EBF</b>\u662F\u4E0E\u5355\u4F4D\u5706\uFF08\u7406\u60F3\u8FB9\u754C $\\partial\\mathbb{D}$\uFF09<b>\u6B63\u4EA4</b>\u7684\u5706\u5F27\u6216\u76F4\u5F84\uFF1B\u5706\u7684\u534A\u5F84\u5728\u5EA6\u91CF\u4E0B\u6BD4\u770B\u8D77\u6765\u66F4\u957F\uFF08\u8D8A\u9760\u8FB9\u8D8A\u5927\uFF09\u3002\u4E09\u79CD\u6F14\u793A\uFF1A\u2460 \u62D6\u52A8\u4E24\u70B9\uFF0C\u552F\u4E00\u6D4B\u5730\u7EBF + \u53CC\u66F2\u8DDD\u79BB\uFF1B\u2461 <b>\u5E73\u884C\u516C\u8BBE\u5931\u6548</b>\u2014\u2014\u8FC7\u76F4\u7EBF\u5916\u4E00\u70B9\u53EF\u4F5C\u65E0\u6570\u6761\u4E0E\u5B83\u4E0D\u76F8\u4EA4\u7684"\u5E73\u884C\u7EBF"\uFF1B\u2462 \u62D6\u52A8\u9876\u70B9\uFF0C<b>\u53CC\u66F2\u4E09\u89D2\u5F62\u5185\u89D2\u548C &lt; \u03C0</b>\uFF0C\u4E14\u7531 Gauss\u2013Bonnet\uFF1A$\\alpha+\\beta+\\gamma = \\pi - \\text{\u9762\u79EF}$\uFF08$K=-1$ \u60C5\u5F62\uFF09\uFF0C\u53F3\u4FA7\u6570\u503C\u9762\u79EF\u4E0E $\\pi - \\sum\\alpha$ \u5B9E\u65F6\u5BF9\u7167\u3002</p>
  </div>
  <div class="stage" id="stage" style="height:500px"></div>
  <div class="panel"><div id="panel"></div></div>
  <div class="fcard">${KD("ds^2 = \\frac{4(dx^2+dy^2)}{(1-x^2-y^2)^2} \\;\\;\\text{\uFF08\u5E9E\u52A0\u83B1\u5EA6\u91CF\uFF0CK = -1\uFF09}")}
  ${KD("\\text{\u6D4B\u5730\u7EBF} \\perp \\partial\\mathbb{D} \\;\\;\\text{\uFF08\u6B63\u4EA4\u5706\u5F27\u6216\u76F4\u5F84\uFF09}")}
  ${KD("\\alpha+\\beta+\\gamma = \\pi - \\iint_\\Delta K\\, dA = \\pi - \\text{\u9762\u79EF} \\;\\;\\text{\uFF08Gauss\u2013Bonnet\uFF09}")}
  ${KD("d(p,q) = 2\\operatorname{artanh}\\left|\\frac{p-q}{1-p\\bar q}\\right|")}</div>
  `;
  }
  function mount14(host) {
    const stage = host.querySelector("#stage");
    const panel = host.querySelector("#panel");
    c5 = new C2(stage, { xmin: -1.12, xmax: 1.12, ymin: -1.12, ymax: 1.12 });
    const mSel = sel(panel, {
      value: "line",
      options: {
        line: "\u2460 \u4E24\u70B9\u786E\u5B9A\u552F\u4E00\u6D4B\u5730\u7EBF",
        parallel: "\u2461 \u5E73\u884C\u516C\u8BBE\uFF08\u8FC7\u7EBF\u5916\u4E00\u70B9\uFF09",
        triangle: "\u2462 \u53CC\u66F2\u4E09\u89D2\u5F62\u4E0E Gauss\u2013Bonnet",
        tile: "\u2463 \u53CC\u66F2\u9576\u5D4C {6,4}\uFF08\u516D\u8FB9\u5F62\u5BC6\u94FA\uFF09"
      },
      cb: (v) => {
        st10.mode = v;
        dragIdx = -1;
        draw();
      }
    });
    const depSl = slider(panel, { label: "\u9576\u5D4C\u6DF1\u5EA6", min: 1, max: 5, step: 1, value: 4, fmt: (v) => v + " \u5C42", cb: () => draw() });
    const eSl = slider(panel, { label: "\u8FB9\u754C\u7AEF\u70B9\u89D2\u5EA6\uFF08\u8FC7 P \u7684\u6D4B\u5730\u7EBF\uFF09", min: 0, max: 2 * Math.PI, step: 0.02, value: st10.eAng, fmt: (v) => (v * 180 / Math.PI).toFixed(0) + "\xB0", cb: (v) => {
      st10.eAng = v;
      draw();
    } });
    const outA = readout(panel, "\u8BFB\u6570 = ");
    c5.onClick = (p2) => {
      const pts = draggablePoints();
      let best = -1, bd2 = 0.18;
      pts.forEach((pt2, i) => {
        const d2 = Math.hypot(pt2[0] - p2.x, pt2[1] - p2.y);
        if (d2 < bd2) {
          bd2 = d2;
          best = i;
        }
      });
      dragIdx = best;
    };
    c5.onDrag = (p2) => {
      if (dragIdx < 0) return;
      const q = [Math.max(-0.98, Math.min(0.98, p2.x)), Math.max(-0.98, Math.min(0.98, p2.y))];
      setPoint(dragIdx, q);
      draw();
    };
    c5.needDraw = () => draw();
    function draggablePoints() {
      if (st10.mode === "line") return [st10.p, st10.q];
      if (st10.mode === "parallel") return [st10.L1, st10.L2, st10.P];
      if (st10.mode === "tile") return [];
      return st10.tri;
    }
    function setPoint(i, q) {
      if (st10.mode === "line") {
        if (i === 0) st10.p = q;
        else st10.q = q;
      } else if (st10.mode === "parallel") {
        if (i === 0) st10.L1 = q;
        else if (i === 1) st10.L2 = q;
        else st10.P = q;
      } else if (st10.mode === "tile") return;
      else st10.tri[i] = q;
    }
    function drawDisk() {
      c5.clear();
      c5.poly(circlePts(1, 96), { stroke: "#7ee0a3", width: 2 });
      for (let r = 0.25; r < 1; r += 0.25) c5.poly(circlePts(r, 72), { stroke: "rgba(126,224,163,0.18)", width: 1 });
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * 2 * Math.PI;
        c5.line(0, 0, Math.cos(a), Math.sin(a), { color: "rgba(126,224,163,0.12)", width: 1 });
      }
      c5.text("\u7406\u60F3\u8FB9\u754C \u2202D\uFF08\u65E0\u7A77\u8FDC\uFF09", 0.3, -1.05, { color: "#7ee0a3", size: 11.5 });
    }
    function circlePts(r, n2) {
      const pts = [];
      for (let i = 0; i <= n2; i++) {
        const a = i / n2 * 2 * Math.PI;
        pts.push([r * Math.cos(a), r * Math.sin(a)]);
      }
      return pts;
    }
    function drawArc(pts, color, width, dash) {
      if (pts.length > 1) c5.poly(pts, { stroke: color, width, dash: dash ?? [] });
    }
    function draw() {
      drawDisk();
      if (st10.mode === "line") {
        const arc = arcPoints(st10.p, st10.q);
        drawArc(arc, "#ffb454", 2.6);
        c5.dot(st10.p[0], st10.p[1], { color: "#ffd75e", r: 5, stroke: "#fff" });
        c5.dot(st10.q[0], st10.q[1], { color: "#58a6ff", r: 5, stroke: "#fff" });
        c5.text("p", st10.p[0] + 0.06, st10.p[1] + 0.08, { color: "#ffd75e", size: 13 });
        c5.text("q", st10.q[0] + 0.06, st10.q[1] + 0.08, { color: "#58a6ff", size: 13 });
        outA.set(`\u53CC\u66F2\u8DDD\u79BB d(p,q) = ${hyperbolicDistance(st10.p, st10.q).toFixed(3)}\uFF08\u6B27\u6C0F\u8DDD\u79BB ${Math.hypot(st10.p[0] - st10.q[0], st10.p[1] - st10.q[1]).toFixed(3)}\uFF09`);
        c5.text("\u8FC7 p\u3001q \u7684\u552F\u4E00\u6D4B\u5730\u7EBF\uFF1A\u4E0E \u2202D \u6B63\u4EA4\u7684\u5706\u5F27", 0, 1.02, { align: "center", color: "#8fa2c8", size: 12 });
      } else if (st10.mode === "parallel") {
        const L2 = arcPoints(st10.L1, st10.L2);
        drawArc(L2, "#58a6ff", 2.4);
        c5.text("\u76F4\u7EBF L", st10.L1[0] + 0.08, st10.L1[1] + 0.1, { color: "#58a6ff", size: 12 });
        const GP = geodesicCircle(st10.P, [Math.cos(st10.eAng), Math.sin(st10.eAng)]);
        const GL = geodesicCircle(st10.L1, st10.L2);
        const meets = circleIntersect(GP, GL);
        const arcP = arcPoints(st10.P, [Math.cos(st10.eAng), Math.sin(st10.eAng)]);
        drawArc(arcP, meets ? "#ff6b6b" : "#7ee0a3", 2.4);
        c5.dot(st10.P[0], st10.P[1], { color: "#ffd75e", r: 5, stroke: "#fff" });
        c5.text("P\uFF08\u7EBF\u5916\u4E00\u70B9\uFF09", st10.P[0] + 0.08, st10.P[1] + 0.1, { color: "#ffd75e", size: 12 });
        const eb = [Math.cos(st10.eAng), Math.sin(st10.eAng)];
        c5.dot(eb[0], eb[1], { color: meets ? "#ff6b6b" : "#7ee0a3", r: 4.5 });
        outA.set(meets ? "\u8BE5\u6D4B\u5730\u7EBF\u4E0E L \u76F8\u4EA4\uFF08\u7EA2\u8272\uFF09\u2014\u2014\u4F46\u65CB\u8F6C\u8FB9\u754C\u7AEF\u70B9\u53EF\u627E\u5230\u65E0\u6570\u6761\u4E0D\u4EA4\u7684" : '\u8BE5\u6D4B\u5730\u7EBF\u4E0E L \u4E0D\u76F8\u4EA4\uFF08\u7EFF\u8272\uFF09\u2014\u2014\u8FC7 P \u6709\u65E0\u7A77\u591A\u6761\u8FD9\u6837\u7684"\u5E73\u884C\u7EBF"');
        c5.text("\u62D6\u52A8 L \u4E24\u7AEF\u4E0E P\uFF1B\u65CB\u8F6C\u7EA2\u8272\u8FB9\u754C\u7AEF\u70B9\u6539\u53D8\u8FC7 P \u7684\u6D4B\u5730\u7EBF", 0, -1.08, { align: "center", color: "#8fa2c8", size: 11.5 });
      } else if (st10.mode === "triangle") {
        const tri = st10.tri;
        const arcs = [[0, 1], [1, 2], [2, 0]].map(([i, j]) => arcPoints(tri[i], tri[j], 60));
        for (const arc of arcs) drawArc(arc, "#ffb454", 2.4);
        c5.poly(tri.flatMap((v) => [[v[0], v[1]]]), { fill: "rgba(255,180,84,0.10)" });
        for (let i = 0; i < 3; i++) {
          c5.dot(tri[i][0], tri[i][1], { color: "#ffd75e", r: 5, stroke: "#fff" });
        }
        const a0 = angleAt(0, tri), a1 = angleAt(1, tri), a2 = angleAt(2, tri);
        const sum = a0 + a1 + a2;
        const areaNum = hyperbolicArea(tri);
        const areaGB = Math.PI - sum;
        outA.set(`\u5185\u89D2\u548C \u03B1+\u03B2+\u03B3 = ${(sum * 180 / Math.PI).toFixed(2)}\xB0\uFF08\u03C0 = 180\xB0\uFF09 | \u9762\u79EF = \u03C0 \u2212 \u03A3\u03B1 = ${areaGB.toFixed(3)}\uFF0C\u6570\u503C\u79EF\u5206 = ${areaNum.toFixed(3)}`);
        c5.text(`\u5185\u89D2\u548C = ${(sum * 180 / Math.PI).toFixed(1)}\xB0 < 180\xB0`, 0, -1.05, { align: "center", color: "#ffd75e", size: 12.5 });
        c5.text(`Gauss\u2013Bonnet\uFF1A\u9762\u79EF = \u03C0 \u2212 \u5185\u89D2\u548C \u2248 ${areaGB.toFixed(3)}\uFF08\u6570\u503C ${areaNum.toFixed(3)}\uFF09`, 0, 1.03, { align: "center", color: "#7ee0a3", size: 12 });
        c5.text("\u62D6\u52A8\u9876\u70B9\uFF1A\u4E09\u89D2\u5F62\u8D8A\u5927\uFF0C\u5185\u89D2\u548C\u8D8A\u5C0F", 0, -1.18, { align: "center", color: "#8fa2c8", size: 11.5 });
      } else {
        const depth = +depSl.get();
        const { tiles, p: p2 } = makeTiling(6, 4, depth);
        outA.set(`\u9576\u5D4C {6,4}\uFF1A${tiles.length} \u4E2A\u6B63\u516D\u8FB9\u5F62\uFF08\u6BCF\u9876\u70B9 4 \u4E2A\uFF0C\u5185\u89D2 90\xB0\uFF09`);
        for (const t2 of tiles) {
          const cols = t2.depth % 2 === 0 ? "rgba(88,166,255,0.20)" : "rgba(126,224,163,0.16)";
          const outline = [];
          for (let i = 0; i < p2; i++) {
            const arc = arcPoints(t2.verts[i], t2.verts[(i + 1) % p2], 12);
            for (const pt2 of arc) outline.push(pt2);
          }
          c5.poly(outline, { fill: cols, stroke: t2.depth === 0 ? "#ffd75e" : "rgba(220,230,255,0.55)", width: 1 });
        }
        c5.text(`{6,4} \u9576\u5D4C\uFF1A\u6BCF\u4E2A\u9876\u70B9\u6709 4 \u4E2A\u6B63\u516D\u8FB9\u5F62\uFF08\u5185\u89D2 90\xB0\uFF09\uFF0C\u5168\u90E8\u516D\u8FB9\u5F62\u5168\u7B49\uFF08\u53CC\u66F2\u610F\u4E49\u4E0B\uFF09`, 0, 1.05, { align: "center", color: "#8fa2c8", size: 11.5 });
        c5.text('\u6CBF\u8FB9\u754C\u65E0\u9650\u5BC6\u5316\uFF1A\u7406\u60F3\u8FB9\u754C\u5904\u6BCF\u4E2A\u516D\u8FB9\u5F62\u8D8B\u4E8E"\u65E0\u9650\u5C0F"', 0, -1.1, { align: "center", color: "#8fa2c8", size: 11.5 });
      }
    }
    draw();
  }
  function teardown14() {
    c5?.dispose();
    c5 = null;
  }

  // js/app.js
  var MODULES = [m00_home_exports, m01_charts_exports, m02_tangent_exports, m03_forms_exports, m04_stokes_exports, m05_lie_exports, m06_parallel_exports, m07_geodesics_exports, m08_curvature_exports, m09_schwarzschild_exports, m10_topology_exports, m11_hopf_exports, m12_hodge_exports, m13_hyperbolic_exports];
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");
  var SECTIONS = [
    { title: "\u5BFC\u89C8", ids: ["m00"] },
    { title: "\u2160 \u5FAE\u5206\u6D41\u5F62\u57FA\u7840", ids: ["m01", "m02"] },
    { title: "\u2161 \u5FAE\u5206\u5F62\u5F0F", ids: ["m03", "m04"] },
    { title: "\u2162 \u6D41\u3001\u674E\u5BFC\u6570", ids: ["m05"] },
    { title: "\u2163 \u8054\u7EDC\u4E0E\u66F2\u7387", ids: ["m06", "m07", "m08"] },
    { title: "\u2164 \u5E7F\u4E49\u76F8\u5BF9\u8BBA\u5E94\u7528", ids: ["m09"] },
    { title: "\u2165 \u6574\u4F53\u62D3\u6251\u4E0E\u4E0A\u540C\u8C03", ids: ["m10"] },
    { title: "\u2166 \u5377\u2161\uFF1A\u7EA4\u7EF4\u4E1B\u4E0E Hodge \u5BF9\u5076", ids: ["m11", "m12"] },
    { title: "\u2167 \u5E38\u66F2\u7387\u7A7A\u95F4", ids: ["m13"] }
  ];
  var current = null;
  function buildSidebar() {
    for (const sec of SECTIONS) {
      const h2 = document.createElement("div");
      h2.className = "side-sec";
      h2.textContent = sec.title;
      sidebar.appendChild(h2);
      for (const id15 of sec.ids) {
        const m = MODULES.find((x) => x.id === id15);
        if (!m) continue;
        const it2 = document.createElement("div");
        it2.className = "side-item";
        it2.dataset.id = m.id;
        it2.innerHTML = `
        <span class="side-num">${m.no}</span>
        <span><span class="side-zh">${m.zh}</span><br><span class="side-en">${m.en}</span></span>`;
        it2.addEventListener("click", () => show(m));
        sidebar.appendChild(it2);
      }
    }
  }
  function show(mod) {
    if (current && current !== mod) {
      try {
        current.teardown?.();
      } catch (e2) {
        console.error("teardown error", e2);
      }
    }
    current = mod;
    content.innerHTML = renderInlineMath(mod.html());
    try {
      mod.mount(content);
    } catch (e2) {
      console.error("mount error", e2);
      content.innerHTML += `<div class="fcard" style="color:#ff7b72">\u6A21\u5757\u52A0\u8F7D\u51FA\u9519\uFF1A${e2.message}</div>`;
    }
    for (const it2 of sidebar.querySelectorAll(".side-item")) {
      it2.classList.toggle("active", it2.dataset.id === mod.id);
    }
    content.scrollTop = 0;
    history.replaceState(null, "", "#" + mod.id);
  }
  window.addEventListener("hashchange", () => {
    const m = MODULES.find((x) => x.id === location.hash.slice(1));
    if (m && m !== current) show(m);
  });
  buildSidebar();
  var initial = MODULES.find((x) => x.id === location.hash.slice(1)) ?? MODULES[0];
  show(initial);
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
