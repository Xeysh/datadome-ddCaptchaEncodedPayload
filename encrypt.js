function a(t, n) {
      var e = ~n;
      var i = ~(t & n);
      return Math[["round"]]((5 * (t & n) + 4 * (t | n) + 5 * ~n - (t | e) - ~t - (~t | n) - i + 1) / 6);
    }

function r(t, n) {
      var e = t | n;
      var i = ~n;
      var a = ~(t & n);
      return Math[["round"]]((6 * e - (~t & n) + 6 * ~e - i - ~t - 2 * (~t | n) - a + 1) / 3);
    }

function o(t, n) {
      var e = ~t;
      return Math[["round"]]((-2 * n + 5 * (t | n) - (t ^ n) + ~(t | n) - (t & ~n) - (~t & n) - e) / 3);
    }

function u(t, n) {
      var e = -n;
      var i = t ^ n;
      return Math[["round"]]((e + 4 * (t | n) - 2 * i + ~n - ~t) / 3);
    }

function c(t, n) {
      var e = 2 * (t | n);
      var i = 2 * (t & ~n);
      var a = t ^ n;
      var r = ~t;
      return Math[["round"]]((e + i + 2 * ~a - (r | n) - ~(t & n)) / 3);
    }

function M(t, n) {
      var e = ~(t ^ n);
      var i = ~n;
      return Math[["round"]]((5 * (t | n) + (t & ~n) - 2 * (~t & n) - 2 * (t ^ n) + 4 * ~(t | n) - e - i - (t | ~n) - (~t | n)) / 2);
    }

function s(t, n) {
      var e = t & n;
      var i = -e;
      var a = 3 * (t | n);
      var r = ~n;
      var o = t ^ n;
      return Math[["round"]]((i + a - (t & r) - o + 2 * r - ~t - ~e) / 2);
    }

function d(t, n) {
      var e = ~t;
      var i = 3 * ~(t ^ n);
      return Math[["round"]]((5 * (t & ~n) + 3 * (e & n) - (t ^ n) + i - ~n - e + 1) / 2);
    }

function g(t, n) {
      var e = ~n;
      var i = ~t;
      return Math[["round"]]((3 * (t | n) - 2 * (~t & n) + e + (i | n) + 2) / 2);
    }

function l(t, n) {
      var e = t ^ n;
      var i = ~t;
      return Math[["round"]]((-(t | n) - (~t & n) + 5 * e + 4 * ~e - ~n - i - (~t | n) - ~(t & n)) / 2);
    }

function haxor(t, n) {
      var e = t | n;
      var i = ~t;
      return 4 * e - 3 * (i & n) + 6 * ~e - 2 * ~(t ^ n) - ~n - (t | ~n) - i + 1;
    }

function x(t, n) {
      var e = t | n;
      return 3 * e - 2 * (~t & n) + 4 * ~e - ~(t ^ n) - (t | ~n) - (~t | n) - ~(t & n);
    }

function p(t, n) {
      var e = ~n;
      return 3 * (t & e) - (t ^ n) + ~(t ^ n) - (t | e);
    }

function T(t, n) {
      var e = ~t;
      return 6 * (t | n) - 2 * (t & ~n) - (e & n) + 6 * ~(t | n) - ~(t ^ n) - (t | ~n) - e - (e | n) - ~(t & n) + 1;
    }

function b(t, n) {
      var e = t ^ n;
      return p(7, 4) * (t & n) + 4 * e + 5 * ~(t | n) - ~n - ~t - (~t | n) - ~(t & n) + 1;
    }

function k(t, n) {
      var e = ~n;
      var i = ~(t & n);
      return Math[["round"]]((5 * (t & n) + 4 * (t | n) + T(2, 3) * ~n - (t | e) - ~t - (~t | n) - i + 1) / 6);
    }

function _(t, n) {
      var e = t | n;
      var i = ~n;
      var a = ~(t & n);
      return Math[["round"]]((haxor(16, 10) * e - (~t & n) + o(6, 2) * ~e - i - ~t - T(1, 1) * (~t | n) - a + l(1, 10)) / g(3, 9));
    }

function Q(t, n) {
      var e = ~t;
      return Math[["round"]]((-2 * n + 5 * (t | n) - (t ^ n) + ~(t | n) - (t & ~n) - (~t & n) - e) / 3);
    }

function Y(t, n) {
      var e = -n;
      var i = t ^ n;
      return Math[["round"]]((e + T(1, 3) * (t | n) - c(2, 5) * i + ~n - ~t) / c(3, 8));
    }

function U(t, n) {
      var e = t | n;
      var i = 2 * e;
      var a = t & ~n;
      var r = x(4, 2) * a;
      var o = t ^ n;
      var u = ~t;
      return Math[["round"]]((i + r + 2 * ~o - (u | n) - ~(t & n)) / 3);
    }

function Z(t, n) {
      var e = ~(t ^ n);
      var i = ~n;
      return Math[["round"]]((5 * (t | n) + (t & ~n) - 2 * (~t & n) - d(2, 7) * (t ^ n) + l(4, 14) * ~(t | n) - e - i - (t | ~n) - (~t | n)) / g(2, 4));
    }

function H(t, n) {
      var e = t & n;
      var i = -e;
      var a = t | n;
      var r = 3 * a;
      var o = ~n;
      var u = t ^ n;
      return Math[["round"]]((i + r - (t & o) - u + x(5, 3) * o - ~t - ~e) / 2);
    }

function B(t, n) {
      var e = ~t;
      var i = ~(t ^ n);
      var a = 3 * i;
      return Math[["round"]]((5 * (t & ~n) + 3 * (e & n) - (t ^ n) + a - ~n - e + 1) / 2);
    }

function P(t, n) {
      var e = ~n;
      var i = ~t;
      var a = -l(1, 9);
      return Math[["round"]]((3 * (t | n) - 2 * (~t & n) + e + (i | n) - u(2, 7) * a) / u(2, 9));
    }

function G(t, n) {
      var e = t ^ n;
      var a = ~t;
      return Math[["round"]]((-(t | n) - (~t & n) + 5 * e + 4 * ~e - ~n - a - (~t | n) - ~(t & n)) / 2);
    }

function R(t, n) {
      var e = t | n;
      var i = ~t;
      var a = ~n;
      return 4 * e - 3 * (i & n) + 6 * ~e - u(2, 8) * ~(t ^ n) - a - (t | ~n) - i + 1;
    }

function F(t, n) {
      var e = ~t & n;
      return T(0, 2) * (t | n) - 3 * e + l(3, 13) * ~t - a(2, 10) * (~t | n) - ~(t & n);
    }

function W(t, n) {
      var e = ~n;
      return c(2, 7) * (t & e) - (~t & n) + ~(t | n) - ~n;
    }

function X(t, n) {
      var e = t | n;
      return 3 * e - 2 * (~t & n) + 4 * ~e - ~(t ^ n) - (t | ~n) - (~t | n) - ~(t & n);
    }

function K(t, n) {
      var e = ~n;
      return 3 * (t & e) - (t ^ n) + ~(t ^ n) - (t | e);
    }

function q(t, n) {
      var e = t | ~n;
      return 2 * (t | n) - (~t & n) + 3 * ~(t | n) - e - ~t - (~t | n);
    }

function $(t, n) {
      var e = t | n;
      var i = ~t | n;
      return 5 * e - 2 * (t & ~n) - s(2, 16) * (~t & n) + 5 * ~(t | n) - ~(t ^ n) - ~n - (t | ~n) - ~t - i;
    }

function tt(t, n) {
      var e = t | n;
      var i = ~t;
      var a = ~(t & n);
      return 4 * e - (t & ~n) + p(9, 5) * ~(t | n) - (t | ~n) - ~t - (i | n) - a;
    }

function et(t, n) {
      var e = t | n;
      var i = ~t | n;
      return s(5, 15) * e - haxor(5, 3) * (t & ~n) - 2 * (~t & n) + 3 * ~(t | n) - (t | ~n) - i + 1;
    }

function it(t, n) {
      var e = ~n;
      var i = ~t;
      var a = i & n;
      var r = t & n;
      return 6 * (t | n) - 2 * (t & e) - a + 6 * ~(t | n) - ~(t ^ n) - (t | ~n) - i - (i | n) - ~r + 1;
    }

function at(t, n) {
      var e = t | n;
      return 4 * e - 2 * (t & ~n) + r(3, 4) * ~(t | n) - ~t - (~t | n) + 1;
    }

function ot(t, n) {
      var e = ~n;
      var i = ~(t | n);
      var a = 3 * i;
      var r = ~t;
      return 4 * (t | n) - g(2, 11) * (t & e) - (t ^ n) + a - ~(t ^ n) - ~t - (r | n);
    }

var gt = [String[["fromCharCode"]](84) + String[["fromCharCode"]](M(112, 8)) + String[["fromCharCode"]](2 * (1 | o(64, 7)) - 2 * (1 & ~o(64, 7)) + (1 | ~o(64, 7)) - (-2 | o(64, 7))) + String[["fromCharCode"]](haxor(7, 4) * (g(3, 14) | 115) - (~g(3, 14) & 115) + 2 * ~(g(3, 14) | 115) - (g(3, 14) | -116) - ~(g(3, 14) & 115)) + String[["fromCharCode"]](ot(34, 73)) + String[["fromCharCode"]](b(110, 3)) + String[["fromCharCode"]](Y(102, 4)) + String[["fromCharCode"]](109) + String[["fromCharCode"]](r(102, 13)) + String[["fromCharCode"]](o(76, 2)) + String[["fromCharCode"]](haxor(7, 4) * 93 - 64 + -188 + 65 + 10) + String[["fromCharCode"]]((d(109, 4) | 58) - 2 * (~d(109, 4) & 58) + -59 - (d(109, 4) | -59)) + String[["fromCharCode"]](102) + String[["fromCharCode"]](s(79, 13)) + String[["fromCharCode"]](Y(122, 12)) + String[["fromCharCode"]](M(68, 14)) + String[["fromCharCode"]](X(106, 63)) + String[["fromCharCode"]](73) + String[["fromCharCode"]](Z(122, M(11, 16))) + String[["fromCharCode"]](90) + String[["fromCharCode"]](102) + String[["fromCharCode"]](71) + String[["fromCharCode"]]($(23, 46)) + String[["fromCharCode"]](101) + String[["fromCharCode"]](100) + String[["fromCharCode"]](P(x(185, 112), 11)) + String[["fromCharCode"]]($(14, 38)) + String[["fromCharCode"]](83) + String[["fromCharCode"]](Z(113, 10)) + String[["fromCharCode"]](ot(M(34, 14), 39)) + String[["fromCharCode"]](R(139, 83)) + String[["fromCharCode"]](109) + String[["fromCharCode"]](75) + String[["fromCharCode"]](et(16, 63)) + String[["fromCharCode"]](47) + String[["fromCharCode"]](u(116, 7)) + String[["fromCharCode"]](121) + String[["fromCharCode"]](98) + String[["fromCharCode"]](U(47, 14)) + String[["fromCharCode"]](B(120, 13)) + String[["fromCharCode"]](43) + String[["fromCharCode"]](W(198, 118)) + String[["fromCharCode"]](H(69, 15)) + String[["fromCharCode"]](x(216, 133) + (l(35, 15) & ~x(216, 133)) + (l(35, 15) & x(216, 133))) + String[["fromCharCode"]](it(haxor(9, 5), 39)) + String[["fromCharCode"]](B(73, a(15, 8))) + String[["fromCharCode"]](47) + String[["fromCharCode"]](F(192, s(126, 7))) + String[["fromCharCode"]](107) + String[["fromCharCode"]](73) + String[["fromCharCode"]](Y(87, 10)) + String[["fromCharCode"]](p(209, 120)), at(831552989, 957984816), 2 * (0 | x(659, 404)) - 2 * (0 & ~x(659, 404)) + (0 | ~x(659, 404)) - (-1 | x(659, 404)), 1000, (0 | s(0, 14)) - 2 * (-1 & s(0, 14)) + ~s(0, 14) - (0 | ~s(0, 14)), $(s(1, 4), r(4, 7)), G(M(37, 2), 9), l(59, 7), 11, 53, F(3, 2), 46, Y(50, 9), 45, 2 * (s(30, 14) | 17) + 3 * ~(s(30, 14) | 17) - 2 * (~s(30, 14) | 17) - ~(s(30, 14) & 17), P(p(38, 21), 7), F(d(8, 6), 5), R(17, s(9, 14)), k(2, c(4, 3)), 16, 3074654, X(l(307, 14), 179), M(1787, 12) + (261 & ~M(1787, 12)) + (261 & M(1787, 12)), B(6, g(13, 16)), 192, F(l(176, 4), 113), (x(417254, 248312) | s(104430, 2)) - 2 * (~x(417254, 248312) & s(104430, 2)) + ~s(104430, 2) - (x(417254, 248312) | ~s(104430, 2)), b(r(55296, 8), 12), $(g(8237, 12), 48083), q(144610, 79074), 1023, X(22, 12), ot(6, 12), W(640, 400), H(M(12, 16), T(3, 8)), K(s(466, 10), 242), '', String[["fromCharCode"]](M(75, 3)) + String[["fromCharCode"]](Y(110, 12)) + String[["fromCharCode"]](K(199, 115)) + String[["fromCharCode"]](B(118, 16)) + String[["fromCharCode"]](X(326, 205)) + String[["fromCharCode"]](r(73, 3)) + String[["fromCharCode"]](P(115, c(6, 9))) + String[["fromCharCode"]](d(120, 13)), String[["fromCharCode"]](K(285, 178)) + String[["fromCharCode"]](Z(haxor(252, 132), g(2, 11))) + String[["fromCharCode"]](G(108, d(3, 5))) + String[["fromCharCode"]](R(235, 153)) + String[["fromCharCode"]](B(113, d(9, 9))) + String[["fromCharCode"]](78) + String[["fromCharCode"]](o(108, 4)) + String[["fromCharCode"]](118), String[["fromCharCode"]](x(255, 142)) + String[["fromCharCode"]](r(78, 4)) + String[["fromCharCode"]](G(99, d(14, 11))) + String[["fromCharCode"]](83) + String[["fromCharCode"]](107) + String[["fromCharCode"]](79) + String[["fromCharCode"]](108) + String[["fromCharCode"]](ot(13, g(88, 10))) + String[["fromCharCode"]](H(107, 11)) + String[["fromCharCode"]](H(109, 16)) + String[["fromCharCode"]](at(5, 84)) + String[["fromCharCode"]](k(89, 10)), B(120, 11), U(116, 11), H(a(49, 9), s(5, 8)), 123, o(44, 9), Z(T(12, 46), a(16, 2)), it(24, g(90, 6)), Z(51, 8), K(g(260, 11), 150), String[["fromCharCode"]](q(191, c(105, 14))) + String[["fromCharCode"]](2 * (182 | d(106, 4)) + 3 * ~(182 | d(106, 4)) - 2 * (-183 | d(106, 4)) - ~(182 & d(106, 4))) + String[["fromCharCode"]](86) + String[["fromCharCode"]](89), at(13, 112), String[["fromCharCode"]](43) + String[["fromCharCode"]](U(l(112, 7), 14)) + String[["fromCharCode"]](M(101, 16)) + String[["fromCharCode"]](97) + String[["fromCharCode"]]((274 | l(167, 4)) - 2 * (-275 & l(167, 4)) + ~l(167, 4) - (274 | ~l(167, 4))) + String[["fromCharCode"]](tt(p(118, 64), r(56, 15))) + String[["fromCharCode"]](tt(30, 35)) + String[["fromCharCode"]](81) + String[["fromCharCode"]](ot(1, g(74, 12))) + String[["fromCharCode"]](97) + String[["fromCharCode"]](tt(19, 70)) + String[["fromCharCode"]](89), String[["fromCharCode"]](U(107, r(4, 3))) + String[["fromCharCode"]](c(78, 9)) + String[["fromCharCode"]](G(haxor(254, 155), 4)) + String[["fromCharCode"]](110), String[["fromCharCode"]](ot(1, 42)) + String[["fromCharCode"]](78) + String[["fromCharCode"]](b(p(147, 95), 15)) + String[["fromCharCode"]]((203 | p(285, 165)) - 2 * (-204 & p(285, 165)) + ~p(285, 165) - (203 | ~p(285, 165))) + String[["fromCharCode"]](107) + String[["fromCharCode"]](x(298, 188)) + String[["fromCharCode"]](G(l(102, 12), 6)) + String[["fromCharCode"]](haxor(7, 4) * 89 - 80 + -180 + 81 + 1), String[["fromCharCode"]]((210 | g(135, 16)) - 2 * (-211 & g(135, 16)) + ~g(135, 16) - (210 | ~g(135, 16))) + String[["fromCharCode"]](78) + String[["fromCharCode"]](at(p(19, 12), 40)) + String[["fromCharCode"]](p(114, 64)) + String[["fromCharCode"]](43) + String[["fromCharCode"]](79) + String[["fromCharCode"]](99) + String[["fromCharCode"]](82), String[["fromCharCode"]]((c(20, 3) | s(87, 9)) + (~c(20, 3) | s(87, 9)) - ~c(20, 3)) + String[["fromCharCode"]](ot(6, 73)) + String[["fromCharCode"]](l(108, 8)) + String[["fromCharCode"]]((0 | T(5, 45)) + (-1 | T(5, 45)) + 1) + String[["fromCharCode"]](43) + String[["fromCharCode"]](73 + (a(37, 6) & -74) + (a(37, 6) & 73)) + String[["fromCharCode"]](84) + String[["fromCharCode"]](B(68, 11)), String[["fromCharCode"]](U(d(113, 2), 6)) + String[["fromCharCode"]](98) + String[["fromCharCode"]](101) + String[["fromCharCode"]](X(x(675, 424), 150)) + String[["fromCharCode"]](75) + String[["fromCharCode"]](g(66, 4)) + String[["fromCharCode"]](F(359, c(237, 15))) + String[["fromCharCode"]](Y(83, 10)) + String[["fromCharCode"]](K(d(96, 3), g(53, 9))) + String[["fromCharCode"]](haxor(7, 4) * (l(19, 10) | 60) - (~l(19, 10) & 60) + 2 * ~(l(19, 10) | 60) - (l(19, 10) | -61) - ~(l(19, 10) & 60)) + String[["fromCharCode"]](it(25, 83)) + String[["fromCharCode"]](Q(c(69, 13), c(12, 12))) + String[["fromCharCode"]]((g(40, 15) ^ 71) + 142 - 2 * (~g(40, 15) & 71)) + String[["fromCharCode"]](_(48, g(8, 16))) + String[["fromCharCode"]](U(u(89, 8), 15)) + String[["fromCharCode"]](X(a(243, 12), l(154, 4))), String[["fromCharCode"]](b(43, g(8, 9))) + String[["fromCharCode"]](U(l(98, 7), l(11, 4))) + String[["fromCharCode"]](p(283, 175)) + String[["fromCharCode"]](81) + String[["fromCharCode"]](at(23, 33)) + String[["fromCharCode"]](P(120, x(17, 11))) + String[["fromCharCode"]](K(150, p(247, 152))) + String[["fromCharCode"]]((187 | s(106, 8)) - 2 * (-188 & s(106, 8)) + ~s(106, 8) - (187 | ~s(106, 8))) + String[["fromCharCode"]](43) + String[["fromCharCode"]](G(56, x(22, 14))) + String[["fromCharCode"]](G(c(89, 16), g(16, 13))) + String[["fromCharCode"]](ot(39, 50)), null, String[["fromCharCode"]](x(361, 240)) + String[["fromCharCode"]]((23 | o(86, 11)) + o(86, 11) - (-24 & o(86, 11))) + String[["fromCharCode"]](a(89, 8)) + String[["fromCharCode"]](2 * (g(186, 12) | 97) + 3 * ~(g(186, 12) | 97) - 2 * (~g(186, 12) | 97) - ~(g(186, 12) & 97)), String[["fromCharCode"]](P(75, 6)) + String[["fromCharCode"]](q(o(248, 10), M(138, 14))) + String[["fromCharCode"]](84) + String[["fromCharCode"]](et(22, 96)) + String[["fromCharCode"]](Y(121, 7)) + String[["fromCharCode"]](c(73, 6)) + String[["fromCharCode"]](l(115, 11)) + String[["fromCharCode"]](Z(120, 9)) + String[["fromCharCode"]](ot(0, 121)) + String[["fromCharCode"]](haxor(7, 4) * (27 | r(46, 3)) - (-28 & r(46, 3)) + 2 * ~(27 | r(46, 3)) - (27 | ~r(46, 3)) - ~(27 & r(46, 3))) + String[["fromCharCode"]](43) + String[["fromCharCode"]](115), String[["fromCharCode"]](haxor(7, 4) * (4 | l(71, 14)) - (-5 & l(71, 14)) + 2 * ~(4 | l(71, 14)) - (4 | ~l(71, 14)) - ~(4 & l(71, 14))) + String[["fromCharCode"]](B(71, 14)) + String[["fromCharCode"]](G(108, s(9, 10))) + String[["fromCharCode"]](it(o(12, 8), 64)) + String[["fromCharCode"]](M(121, 5)) + String[["fromCharCode"]](R(r(106, 2), haxor(124, 66))) + String[["fromCharCode"]](89) + String[["fromCharCode"]](l(89, 5)), String[["fromCharCode"]](ot(17, 26)) + String[["fromCharCode"]](P(120, p(19, 12))) + String[["fromCharCode"]](P(65, 12)) + String[["fromCharCode"]]((21 ^ M(62, 8)) + 2 * M(62, 8) - 2 * (-22 & M(62, 8))) + String[["fromCharCode"]](P(107, 11)) + String[["fromCharCode"]](a(87, 3)) + String[["fromCharCode"]](122) + String[["fromCharCode"]](H(68, M(11, 12))) + String[["fromCharCode"]](2 * (s(38, 3) | T(6, 69)) - 2 * (s(38, 3) & ~T(6, 69)) + (s(38, 3) | ~T(6, 69)) - (~s(38, 3) | T(6, 69))) + String[["fromCharCode"]](W(333, 221)) + String[["fromCharCode"]](tt(9, 56)) + String[["fromCharCode"]](74) + String[["fromCharCode"]](107) + String[["fromCharCode"]](K(a(220, 5), 122)) + String[["fromCharCode"]](K(o(206, 13), 122)) + String[["fromCharCode"]](r(55, 13)), String[["fromCharCode"]](ot(40, 81)) + String[["fromCharCode"]](78) + String[["fromCharCode"]](it(15, 84)) + String[["fromCharCode"]](Q(70, M(3, 12))) + String[["fromCharCode"]](107) + String[["fromCharCode"]](r(64, 11) + (45 & ~r(64, 11)) + (45 & r(64, 11))) + String[["fromCharCode"]](X(haxor(733, 474), u(170, 12))) + String[["fromCharCode"]](89), String[["fromCharCode"]](tt(c(30, 5), c(83, 10))) + String[["fromCharCode"]](73) + String[["fromCharCode"]](k(84, a(3, 9))) + String[["fromCharCode"]](b(66, 5)) + String[["fromCharCode"]](P(u(87, 10), 9)) + String[["fromCharCode"]](et(l(6, 8), 92)) + String[["fromCharCode"]](it(2, 53)) + String[["fromCharCode"]](B(120, T(2, 4))) + String[["fromCharCode"]](at(6, 101)) + String[["fromCharCode"]](W(s(222, 4), 144)) + String[["fromCharCode"]](47) + String[["fromCharCode"]](G(M(51, 13), 4)), String[["fromCharCode"]](121) + String[["fromCharCode"]](g(73, 11)) + String[["fromCharCode"]](d(115, 12)) + String[["fromCharCode"]](ot(13, 53)) + String[["fromCharCode"]](P(43, 9)) + String[["fromCharCode"]](B(112, T(5, 10))) + String[["fromCharCode"]](101) + String[["fromCharCode"]](it(32, u(45, 5))) + String[["fromCharCode"]](B(g(43, 7), 10)) + String[["fromCharCode"]](X(314, 205)) + String[["fromCharCode"]](it(14, 75)) + String[["fromCharCode"]](89), String[["fromCharCode"]](tt(54, 59)) + String[["fromCharCode"]](q(171, 98)) + String[["fromCharCode"]](tt(0, d(52, 8))) + String[["fromCharCode"]](G(118, 12)) + String[["fromCharCode"]](K(104, u(61, 5))) + String[["fromCharCode"]](73) + String[["fromCharCode"]](haxor(137, 90)) + String[["fromCharCode"]](66) + String[["fromCharCode"]](d(100, 10)) + String[["fromCharCode"]](87) + String[["fromCharCode"]](47) + String[["fromCharCode"]](et(20, 46)) + String[["fromCharCode"]]((c(1, 11) | 42) + 42 - (~c(1, 11) & 42)) + String[["fromCharCode"]](ot(27, 52)) + String[["fromCharCode"]](b(108, o(2, 14))) + String[["fromCharCode"]](66), String[["fromCharCode"]]((c(283, 15) | 170) - 2 * (~c(283, 15) & 170) + -171 - (c(283, 15) | -171)) + String[["fromCharCode"]](R(x(538, 346), 119)) + String[["fromCharCode"]](F(209, 125)) + String[["fromCharCode"]](66) + String[["fromCharCode"]](W(r(230, 11), 143)) + String[["fromCharCode"]]((T(4, 21) | s(73, 2)) + (~T(4, 21) | s(73, 2)) - ~T(4, 21)) + String[["fromCharCode"]](haxor(7, 4) * 31 - 6 + -64 + 7 + 25) + String[["fromCharCode"]](120) + String[["fromCharCode"]](107) + String[["fromCharCode"]](B(u(78, 13), g(11, 14))) + String[["fromCharCode"]](H(47, 12)) + String[["fromCharCode"]](haxor(61, 33) + (23 & ~haxor(61, 33)) + (23 & haxor(61, 33))) + String[["fromCharCode"]](85) + String[["fromCharCode"]](Z(M(98, 11), 15)) + String[["fromCharCode"]](b(115, 7)) + String[["fromCharCode"]](Z(116, 16)) + String[["fromCharCode"]](43) + String[["fromCharCode"]](q(148, 92)) + String[["fromCharCode"]](X(185, 96)) + String[["fromCharCode"]](x(182, 93)), String[["fromCharCode"]](K(a(342, 13), 221)) + String[["fromCharCode"]](q(s(195, 3), u(116, 10))) + String[["fromCharCode"]]((2 | u(45, 11)) + u(45, 11) - (-3 & u(45, 11))) + String[["fromCharCode"]](U(76, 15)), String[["fromCharCode"]](g(113, 12)) + String[["fromCharCode"]](haxor(7, 4) * (26 | M(47, 4)) - (-27 & M(47, 4)) + 2 * ~(26 | M(47, 4)) - (26 | ~M(47, 4)) - ~(26 & M(47, 4))) + String[["fromCharCode"]](84) + String[["fromCharCode"]](2 * (g(132, 8) | 66) + 3 * ~(g(132, 8) | 66) - 2 * (~g(132, 8) | 66) - ~(g(132, 8) & 66)), String[["fromCharCode"]](k(113, p(42, 27))) + String[["fromCharCode"]](120) + String[["fromCharCode"]](B(108, 11)) + String[["fromCharCode"]](P(70, 10)) + String[["fromCharCode"]](l(107, 14)) + String[["fromCharCode"]](ot(s(1, 16), 78)) + String[["fromCharCode"]](G(haxor(173, 89), 6)) + String[["fromCharCode"]](56) + String[["fromCharCode"]](Y(113, g(14, 5))) + String[["fromCharCode"]](Q(112, 11)) + String[["fromCharCode"]](haxor(7, 4) * (4 | x(115, 64)) - (-5 & x(115, 64)) + 2 * ~(4 | x(115, 64)) - (4 | ~x(115, 64)) - ~(4 & x(115, 64))) + String[["fromCharCode"]](51) + String[["fromCharCode"]](U(M(107, 13), 15)) + String[["fromCharCode"]](98) + String[["fromCharCode"]](47) + String[["fromCharCode"]](Q(66, 16)), String[["fromCharCode"]](H(x(322, 210), 6)) + String[["fromCharCode"]](110) + String[["fromCharCode"]](X(189, 120)) + String[["fromCharCode"]](s(51, 14)), String[["fromCharCode"]](U(c(113, 7), haxor(36, 21))) + String[["fromCharCode"]](at(18, T(45, 49))) + String[["fromCharCode"]](x(195, 126)) + String[["fromCharCode"]](97) + String[["fromCharCode"]](b(107, 5)) + String[["fromCharCode"]](p(148, 77)) + String[["fromCharCode"]]((142 | T(15, 61)) - 2 * (-143 & T(15, 61)) + ~T(15, 61) - (142 | ~T(15, 61))) + String[["fromCharCode"]](B(89, M(8, 2))), String[["fromCharCode"]](Y(75, M(12, 13))) + String[["fromCharCode"]]((33 | p(96, 58)) + (-34 | p(96, 58)) + 34) + String[["fromCharCode"]](P(haxor(156, 91), 14)) + String[["fromCharCode"]](83) + String[["fromCharCode"]](P(d(111, 11), haxor(43, 28))) + String[["fromCharCode"]](79) + String[["fromCharCode"]](M(99, 12)) + String[["fromCharCode"]](haxor(137, 80) + (24 & ~haxor(137, 80)) + (24 & haxor(137, 80))) + String[["fromCharCode"]](100) + String[["fromCharCode"]](ot(35, u(77, 15))) + String[["fromCharCode"]](69) + String[["fromCharCode"]](W(130, 75)), String[["fromCharCode"]](121) + String[["fromCharCode"]](haxor(7, 4) * (21 | o(35, 8)) - (-22 & o(35, 8)) + 2 * ~(21 | o(35, 8)) - (21 | ~o(35, 8)) - ~(21 & o(35, 8))) + String[["fromCharCode"]](c(89, 14)) + String[["fromCharCode"]](W(x(517, 308), 120)), String[["fromCharCode"]](tt(19, 93)) + String[["fromCharCode"]](98) + String[["fromCharCode"]](2 * (284 | r(183, 14)) + 3 * ~(284 | r(183, 14)) - 2 * (-285 | r(183, 14)) - ~(284 & r(183, 14))) + String[["fromCharCode"]](it(8, x(179, 111))) + String[["fromCharCode"]](o(111, 5)) + String[["fromCharCode"]](109) + String[["fromCharCode"]](it(33, c(56, 13))) + String[["fromCharCode"]](b(89, g(15, 3))), String[["fromCharCode"]](Q(113, 12)) + String[["fromCharCode"]](Y(98, 2)) + String[["fromCharCode"]](K(284, 185)) + String[["fromCharCode"]](G(l(50, 5), 2)) + String[["fromCharCode"]](it(M(30, 13), 83)) + String[["fromCharCode"]]((265 | x(405, 238)) - 2 * (-266 & x(405, 238)) + ~x(405, 238) - (265 | ~x(405, 238))) + String[["fromCharCode"]](F(p(342, 211), 84)) + String[["fromCharCode"]](ot(s(21, 10), 60)), String[["fromCharCode"]](Q(75, c(4, 12))) + String[["fromCharCode"]]($(x(62, 35), 71)) + String[["fromCharCode"]](_(108, 13)) + String[["fromCharCode"]](U(81, r(13, 5))), String[["fromCharCode"]](75) + String[["fromCharCode"]](W(M(284, 2), 186)) + String[["fromCharCode"]](108) + String[["fromCharCode"]](T(31, 50)) + String[["fromCharCode"]](_(86, 15)) + String[["fromCharCode"]](56) + String[["fromCharCode"]]((p(29, 17) ^ 77) + 154 - 2 * (~p(29, 17) & 77)) + String[["fromCharCode"]](H(89, 16)), String[["fromCharCode"]](113) + String[["fromCharCode"]]((d(41, 9) | s(79, 4)) + s(79, 4) - (~d(41, 9) & s(79, 4))) + String[["fromCharCode"]](d(48, 6)) + String[["fromCharCode"]](r(89, 10))];

function lt(t) {
      var e = gt[t];
      return typeof e === String[["fromCharCode"]](o(115, 14)) + String[["fromCharCode"]](Q(116, 8)) + String[["fromCharCode"]](B(l(114, 5), 6)) + String[["fromCharCode"]](at(35, r(70, 8))) + String[["fromCharCode"]](et(4, 106)) + String[["fromCharCode"]](R(haxor(725, 422), a(200, 8))) ? function (t) {
        var n;
        var e;
        var o;
        var d;
        var g;
        var _;
        var H = String[["fromCharCode"]](48) + String[["fromCharCode"]](69) + String[["fromCharCode"]](67) + String[["fromCharCode"]](Y(74, 11)) + String[["fromCharCode"]](54) + String[["fromCharCode"]](G(47, 9)) + String[["fromCharCode"]](Q(79, p(20, 12))) + String[["fromCharCode"]](Q(a(71, 16), 15)) + String[["fromCharCode"]](F(279, 177)) + String[["fromCharCode"]](65) + String[["fromCharCode"]](s(114, 15)) + String[["fromCharCode"]](105) + String[["fromCharCode"]](F(242, 156)) + String[["fromCharCode"]](R(332, s(210, 12))) + String[["fromCharCode"]](P(49, 15)) + String[["fromCharCode"]](77) + String[["fromCharCode"]](56) + String[["fromCharCode"]](q(M(183, 8), 99)) + String[["fromCharCode"]](80) + String[["fromCharCode"]](85) + String[["fromCharCode"]](Z(87, 16)) + String[["fromCharCode"]]($(3, p(240, 135))) + String[["fromCharCode"]](73) + String[["fromCharCode"]](Y(112, p(17, 11))) + String[["fromCharCode"]](Q(113, c(15, 12))) + String[["fromCharCode"]](43) + String[["fromCharCode"]](121) + String[["fromCharCode"]](k(l(107, 2), 14)) + String[["fromCharCode"]](75) + String[["fromCharCode"]](111) + String[["fromCharCode"]](x(263, 163)) + String[["fromCharCode"]](57) + String[["fromCharCode"]](U(109, 16)) + String[["fromCharCode"]](Y(101, 7)) + String[["fromCharCode"]](104) + String[["fromCharCode"]](W(288, 172)) + String[["fromCharCode"]](66) + String[["fromCharCode"]](ot(p(53, 33), T(1, 34))) + String[["fromCharCode"]](M(78, 6)) + String[["fromCharCode"]](120) + String[["fromCharCode"]](68) + String[["fromCharCode"]](haxor(7, 4) * 59 - 32 + -120 + 33 + 12) + String[["fromCharCode"]](72) + String[["fromCharCode"]](K(259, 169)) + String[["fromCharCode"]](B(51, 12)) + String[["fromCharCode"]](Q(82, l(14, 3))) + String[["fromCharCode"]](haxor(7, 4) * 46 - 32 + -94 + 33 + 5) + String[["fromCharCode"]](B(83, 3)) + String[["fromCharCode"]](97) + String[["fromCharCode"]]((r(23, 12) ^ 29) + 58 - 2 * (~r(23, 12) & 29)) + String[["fromCharCode"]](118) + String[["fromCharCode"]](76) + String[["fromCharCode"]](Z(81, 13)) + String[["fromCharCode"]](Y(117, 12)) + String[["fromCharCode"]](it(24, r(74, 11))) + String[["fromCharCode"]](b(110, 10)) + String[["fromCharCode"]](haxor(7, 4) * 103 - 97 + -208 + 98 + 1) + String[["fromCharCode"]](F(332, T(49, 168))) + String[["fromCharCode"]](haxor(7, 4) * 79 - 64 + -160 + 65 + 10) + String[["fromCharCode"]](at(2, 59)) + String[["fromCharCode"]](106) + String[["fromCharCode"]](G(99, T(4, 11))) + String[["fromCharCode"]]($(8, 111)) + String[["fromCharCode"]](53) + String[["fromCharCode"]](89);
        var X = '';
        var tt = 0;
        for (t = t[["replace"]](/[^A-Za-z0-9\+\/\=]/g, ''); tt < t[["length"]];) {
          d = H[["indexOf"]](t[["charAt"]](tt++));
          g = H[["indexOf"]](t[["charAt"]](tt++));
          h = H[["indexOf"]](t[["charAt"]](tt++));
          _ = H[["indexOf"]](t[["charAt"]](tt++));
          n = d << R(6, 4) | g >> 4;
          e = (g & u(15, 16)) << U(4, 15) | h >> 2;
          o = (h & at(0, 3)) << b(6, 2) | _;
          X += String[["fromCharCode"]](n);
          if (64 != h) {
            X += String[["fromCharCode"]](e);
          }
          if (64 != _) {
            X += String[["fromCharCode"]](o);
          }
        }
        return X;
      }(e) : e;
    }

let ht = Date[lt(K(x(272, 147), 73))]() & lt(X(l(4, 5), s(2, 8))) || 16;

function encrypt(t) {
            var n = 0;
            for (var e = []; n < t[["length"]];) {
              var i = (t[n++] ^ ht) << 16 | (t[n++] ^ ht) << 8 | t[n++] ^ ht;
              e[["push"]](String[["fromCharCode"]]((i >> 18 & 63) > 37 ? 59 + (i >> 18 & 63) : (i >> 18 & 63) > 11 ? 53 + (i >> 18 & 63) : (i >> 18 & 63) > 1 ? 46 + (i >> 18 & 63) : 50 * (i >> 18 & 63) + 45), String[["fromCharCode"]]((i >> 12 & 63) > 37 ? 59 + (i >> 12 & 63) : (i >> 12 & 63) > 11 ? 53 + (i >> 12 & 63) : (i >> 12 & 63) > 1 ? 46 + (i >> 12 & 63) : 50 * (i >> 12 & 63) + 45), String[["fromCharCode"]]((i >> 6 & 63) > 37 ? 59 + (i >> 6 & 63) : (i >> 6 & 63) > 11 ? 53 + (i >> 6 & 63) : (i >> 6 & 63) > 1 ? 46 + (i >> 6 & 63) : 50 * (i >> 6 & 63) + 45), String[["fromCharCode"]]((63 & i) > 37 ? 59 + (63 & i) : (63 & i) > 11 ? 53 + (63 & i) : (63 & i) > 1 ? 46 + (63 & i) : 50 * (63 & i) + 45));
            }
            var a = t[["length"]] % 3;
            if (a) {
              e[["length"]] -= 3 - a;
            }
            return e[["join"]]('');
          }  // ddCaptchaEncodedPayload

let long_array = process.argv[2];

console.log(encrypt(long_array));
