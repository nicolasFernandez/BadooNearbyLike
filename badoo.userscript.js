// ==UserScript==
// @name Badoo-Autolike
// @author nemanjan00
// @include https://badoo.com/*
// @include https://*.badoo.com/*
// @include http://badoo.com/*
// @include http://*.badoo.com/*
// @downloadURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @namespace https://github.com/nemanjan00/Badoo-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @version 6
// ==/UserScript==

code = atob("d2luZG93LmJvdCA9IHsKCWdldFVzZXI6IGZ1bmN0aW9uKGlkKXsKCQl2YXIgdXJsID0gIi9hcGkucGh0bWw/U0VSVkVSX0dFVF9VU0VSIjsKCgkJdmFyIGJvZHkgPSB7IiRncGIiOiJiYWRvby5ibWEuQmFkb29NZXNzYWdlIiwidmVyc2lvbiI6MSwibWVzc2FnZV90eXBlIjo0MDMsIm1lc3NhZ2VfaWQiOjYsImJvZHkiOlt7IiRncGIiOiJiYWRvby5ibWEuTWVzc2FnZUJvZHkiLCJtZXNzYWdlX3R5cGUiOjQwMywic2VydmVyX2dldF91c2VyIjp7IiRncGIiOiJiYWRvby5ibWEuU2VydmVyR2V0VXNlciIsInVzZXJfaWQiOmlkLCJjbGllbnRfc291cmNlIjoyLCJ1c2VyX2ZpZWxkX2ZpbHRlciI6eyIkZ3BiIjoiYmFkb28uYm1hLlVzZXJGaWVsZEZpbHRlciIsInByb2plY3Rpb24iOls4MDAsMzcwLDIwMCwyMzAsMjEwLDMwLDM2MCw5MywzMDEsMzAyLDY4MCwzMDMsMzA0LDI1MCw2MDAsMjkwLDI5MSw2MTAsMzEwLDY5MCw2OTEsNjkyLDY5Myw0NDAsMzExLDQ5MCw2NjAsNjUwLDQ2MCw3NTAsNzMxLDczMCwxMDAsMzQwLDU4MCw1NzAsNDEwLDQyMCw0ODAsOTAsNDcwLDc0Miw3NDEsNzQwLDU1MCw2ODEsNjcwLDg3MCwzMzAsMzMxLDI2MCw1MzAsNTQwXSwicmVxdWVzdF9hbGJ1bXMiOlt7IiRncGIiOiJiYWRvby5ibWEuU2VydmVyR2V0QWxidW0iLCJwcmV2aWV3X3NpemUiOnsiJGdwYiI6ImJhZG9vLmJtYS5QaG90b1NpemUiLCJoZWlnaHQiOjE4MCwid2lkdGgiOjE4MH0sImFsYnVtX3R5cGUiOjJ9LHsiJGdwYiI6ImJhZG9vLmJtYS5TZXJ2ZXJHZXRBbGJ1bSIsInByZXZpZXdfc2l6ZSI6eyIkZ3BiIjoiYmFkb28uYm1hLlBob3RvU2l6ZSIsImhlaWdodCI6MTgwLCJ3aWR0aCI6MTgwfSwiYWxidW1fdHlwZSI6NH1dLCJ1bml0ZWRfZnJpZW5kc19maWx0ZXIiOlt7IiRncGIiOiJiYWRvby5ibWEuVW5pdGVkRnJpZW5kc0ZpbHRlciIsImNvdW50Ijo1LCJzZWN0aW9uX3R5cGUiOjN9LHsiJGdwYiI6ImJhZG9vLmJtYS5Vbml0ZWRGcmllbmRzRmlsdGVyIiwiY291bnQiOjUsInNlY3Rpb25fdHlwZSI6MX0seyIkZ3BiIjoiYmFkb28uYm1hLlVuaXRlZEZyaWVuZHNGaWx0ZXIiLCJjb3VudCI6NSwic2VjdGlvbl90eXBlIjoyfV0sInJlcXVlc3RfaW50ZXJlc3RzIjp7IiRncGIiOiJiYWRvby5ibWEuU2VydmVySW50ZXJlc3RzR2V0IiwidXNlcl9pZCI6aWQsImxpbWl0Ijo1MDB9fSwidmlzaXRpbmdfc291cmNlIjp7IiRncGIiOiJiYWRvby5ibWEuUHJvZmlsZVZpc2l0aW5nU291cmNlIiwicGVyc29uX2lkIjppZCwic291cmNlX2ZvbGRlciI6MjUsInZpc2l0aW5nX3NvdXJjZSI6Mn19fV19OwoKCQl2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgewoJCQlib3QuX3NlbmRSZXF1ZXN0KHVybCwgYm9keSkudGhlbihmdW5jdGlvbih1c2VyKXsKCQkJCXVzZXIgPSB1c2VyLmJvZHlbMF0udXNlcjsKCgkJCQlyZXNvbHZlKHVzZXIpOwoJCQl9KTsKCQl9KTsKCQlyZXR1cm4gcHJvbWlzZTsKCX0sCgoJZ2V0VXNlcnM6IGZ1bmN0aW9uKHBhZ2UgPSAwKXsKCQl2YXIgdXJsID0gIi9hcGkucGh0bWw/U0VSVkVSX0dFVF9VU0VSX0xJU1RfV0lUSF9TRVRUSU5HUyI7CgoJCWJvZHkgPSB7IiRncGIiOiJiYWRvby5ibWEuQmFkb29NZXNzYWdlIiwidmVyc2lvbiI6MSwibWVzc2FnZV90eXBlIjo0MTYsIm1lc3NhZ2VfaWQiOjE4LCJib2R5IjpbeyIkZ3BiIjoiYmFkb28uYm1hLk1lc3NhZ2VCb2R5IiwibWVzc2FnZV90eXBlIjoxMzcsInNlYXJjaF9zZXR0aW5nc19jb250ZXh0Ijp7IiRncGIiOiJiYWRvby5ibWEuU2VhcmNoU2V0dGluZ3NDb250ZXh0Iiwic2VhcmNoX3Jlc3BvbnNlX2NvbnRleHQiOjJ9fSx7IiRncGIiOiJiYWRvby5ibWEuTWVzc2FnZUJvZHkiLCJtZXNzYWdlX3R5cGUiOjI0NSwic2VydmVyX2dldF91c2VyX2xpc3QiOnsiJGdwYiI6ImJhZG9vLmJtYS5TZXJ2ZXJHZXRVc2VyTGlzdCIsImZvbGRlcl9pZCI6MjUsInVzZXJfZmllbGRfZmlsdGVyIjp7IiRncGIiOiJiYWRvby5ibWEuVXNlckZpZWxkRmlsdGVyIiwicHJvamVjdGlvbiI6WzI1MCwyMDAsMjEwLDIzMCwzMTAsMzMwLDUzMCw1NDAsMzQwLDMzMSw2ODAsMjkwLDI5MSwzMDEsMzAzLDMwNCwzMDIsMjYwXSwicHJvZmlsZV9waG90b19zaXplIjp7IiRncGIiOiJiYWRvby5ibWEuUGhvdG9TaXplU3BlYyIsInNxdWFyZV9mYWNlX3Bob3RvX3NpemUiOnsiJGdwYiI6ImJhZG9vLmJtYS5QaG90b1NpemUiLCJ3aWR0aCI6MTgwLCJoZWlnaHQiOjE4MH19fSwib2Zmc2V0IjpwYWdlICogMTAwLCJwcmVmZXJyZWRfY291bnQiOjEwMCwicHJvbW9fYmxvY2tfcmVxdWVzdF9wYXJhbXMiOlt7IiRncGIiOiJiYWRvby5ibWEuUHJvbW9CbG9ja1JlcXVlc3RQYXJhbXMiLCJjb3VudCI6MSwicG9zaXRpb24iOjJ9LHsiJGdwYiI6ImJhZG9vLmJtYS5Qcm9tb0Jsb2NrUmVxdWVzdFBhcmFtcyIsImNvdW50IjoxLCJwb3NpdGlvbiI6MX1dfX1dfTsKCgkJdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsKCQkJYm90Ll9zZW5kUmVxdWVzdCh1cmwsIGJvZHkpLnRoZW4oZnVuY3Rpb24odXNlcnMpewoJCQkJdmFyIHBhZ2VfY291bnQgPSB1c2Vycy5ib2R5WzFdLmNsaWVudF91c2VyX2xpc3QudG90YWxfY291bnQgLyAxMDA7CgkJCQl1c2VycyA9IHVzZXJzLmJvZHlbMV0uY2xpZW50X3VzZXJfbGlzdC5zZWN0aW9uWzBdLnVzZXJzOwoKCQkJCWlmKHBhZ2UgPT0gMCl7CgkJCQkJcHJvbWlzZXMgPSBbXTsKCgkJCQkJZm9yKGkgPSAxOyBpIDwgcGFnZV9jb3VudDsgaSsrKXsKCQkJCQkJcHJvbWlzZXMucHVzaChib3QuZ2V0VXNlcnMoaSkpOwoJCQkJCX0KCgkJCQkJUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24obW9yZV91c2Vycyl7CgkJCQkJCW1vcmVfdXNlcnMuZm9yRWFjaChmdW5jdGlvbihtb3JlX3VzZXJzX3VuaXQpewoJCQkJCQkJdXNlcnMgPSB1c2Vycy5jb25jYXQobW9yZV91c2Vyc191bml0KTsKCQkJCQkJfSk7CgoJCQkJCQlyZXNvbHZlKHVzZXJzKTsKCQkJCQl9KTsKCQkJCX0KCQkJCWVsc2UKCQkJCXsKCQkJCQlyZXNvbHZlKHVzZXJzKTsKCQkJCX0KCQkJfSk7CgkJfSk7CgoJCXJldHVybiBwcm9taXNlOwoJfSwKCgl2b3RlOiBmdW5jdGlvbihpZCl7CgkJdmFyIHVybCA9ICIvYXBpLnBodG1sP1NFUlZFUl9FTkNPVU5URVJTX1ZPVEUiOwoKCQl2YXIgYm9keSA9IHsiJGdwYiI6ImJhZG9vLmJtYS5CYWRvb01lc3NhZ2UiLCJ2ZXJzaW9uIjoxLCJtZXNzYWdlX3R5cGUiOjgwLCJtZXNzYWdlX2lkIjo1NiwiYm9keSI6W3siJGdwYiI6ImJhZG9vLmJtYS5NZXNzYWdlQm9keSIsIm1lc3NhZ2VfdHlwZSI6ODAsInNlcnZlcl9lbmNvdW50ZXJzX3ZvdGUiOnsiJGdwYiI6ImJhZG9vLmJtYS5TZXJ2ZXJFbmNvdW50ZXJzVm90ZSIsInBlcnNvbl9pZCI6aWQsInZvdGUiOjIsInZvdGVfc291cmNlIjo2NX19XX07CgoJCXJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGJvZHkpOwoJfSwKCglfc2VuZFJlcXVlc3QodXJsLCBib2R5KXsKCQl2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgewoJCQl2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CgkJCXhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTsKCQkJeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdqc29uJyk7CgoJCQl4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1TZXNzaW9uLWlkJywgQi5TZXNzaW9uLmdldFNlc3Npb25JZCgpKTsKCQkJeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtVXNlci1pZCcsIEIuU2Vzc2lvbi5nZXRVc2VySWQoKSk7CgoJCQl4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKCkgewoJCQkJaWYgKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHsKCQkJCQlyZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpOwoJCQkJfQoJCQl9KTsKCgkJCXhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTsKCQl9KTsKCgkJcmV0dXJuIHByb21pc2U7Cgl9LAoKCWFkZFRvTWVudSgpewoJCXZhciBodG1sID0gJ1wKCQk8c3BhbiBvbmNsaWNrPSJ3aW5kb3cuYm90Lm1hc3NMaWtlKCk7IiBjbGFzcz0ic2lkZWJhci1tZW51X19pdGVtLWxuayI+XAoJCQk8aSBjbGFzcz0iaWNvbi1zdmcgaWNvbi1zdmctLXhzbSI+XAoJCQkJPHN2ZyBjbGFzcz0iaWNvbi1zdmdfIj5cCgkJCQkJPHVzZSB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeGxpbms6aHJlZj0iI2ljb24taGVhcnQiPlwKCQkJCQk8L3VzZT5cCgkJCQk8L3N2Zz5cCgkJCTwvaT5cCgkJCTxiIGNsYXNzPSJzaWRlYmFyX19lbC1oaWRkZW4iPk1hc3MgbGlrZTwvYj5cCgkJPC9zcGFuPic7CgoJCXZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgic2lkZWJhci1tZW51IilbMF07CgoJCXZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsKCQllbGVtZW50LmNsYXNzTmFtZSA9ICJzaWRlYmFyLW1lbnVfX2l0ZW0gc2VhcmNoXyI7CgoJCWVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsKCgkJbWVudS5hcHBlbmRDaGlsZChlbGVtZW50KQoJfSwKCgltYXNzTGlrZTogZnVuY3Rpb24oKXsKCQlib3QuZ2V0VXNlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpewoJCQl1c2VycyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uKHVzZXIpe3JldHVybiB1c2VyLm9ubGluZV9zdGF0dXMgPCAzfSk7CgoJCQl1c2VycyA9IHVzZXJzLm1hcChmdW5jdGlvbih1c2VyKXtyZXR1cm4gdXNlci51c2VyX2lkfSk7CgoJCQl1c2VycyA9IHVzZXJzLmZpbHRlcihmdW5jdGlvbih1c2VyKXsKCQkJCWlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJ1c2VyLSIrdXNlcikgIT0gdW5kZWZpbmVkKXsKCQkJCQlyZXR1cm4gZmFsc2U7CgkJCQl9CgoJCQkJcmV0dXJuIHRydWU7CgkJCX0pOwoKCQkJdmFyIHVzZXJEZXRhaWxzUHJvbWlzZXMgPSB1c2Vycy5tYXAoZnVuY3Rpb24odXNlcl9pZCl7CgkJCQlyZXR1cm4gYm90LmdldFVzZXIodXNlcl9pZCk7CgkJCX0pOwoKCQkJUHJvbWlzZS5hbGwodXNlckRldGFpbHNQcm9taXNlcykudGhlbihmdW5jdGlvbih1c2Vycyl7CgkJCQl1c2VycyA9IHVzZXJzLmZpbHRlcihmdW5jdGlvbih1c2VyKXsKCQkJCQlpZih1c2VyLm15X3ZvdGUgPT0gMSl7CgkJCQkJCXJldHVybiB0cnVlOwoJCQkJCX0KCQkJCQllbHNlCgkJCQkJewoJCQkJCQlsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgidXNlci0iICsgdXNlci51c2VyX2lkLCB0cnVlKTsKCgkJCQkJCXJldHVybiBmYWxzZTsKCQkJCQl9CgkJCQl9KTsKCgkJCQljb25zb2xlLmxvZyh1c2Vycy5sZW5ndGggKyAiIHVzZXJzIHRvIGxpa2UhICIpOwoKCQkJCWxpa2VfcHJvbWlzZXMgPSB1c2Vycy5tYXAoZnVuY3Rpb24odXNlcil7cmV0dXJuIGJvdC52b3RlKHVzZXIudXNlcl9pZCl9KTsKCgkJCQlQcm9taXNlLmFsbChsaWtlX3Byb21pc2VzKS50aGVuKGZ1bmN0aW9uKGRhdGEpewoJCQkJCXZhciBsaWtlc19jb3VudCA9IDA7CgoJCQkJCWRhdGEuZm9yRWFjaChmdW5jdGlvbihsaWtlLCBrZXkpewoJCQkJCQlpZihsaWtlLmJvZHlbMF0ubWVzc2FnZV90eXBlICE9IDEpewoJCQkJCQkJbG9jYWxTdG9yYWdlLnNldEl0ZW0oInVzZXItIiArIHVzZXJzW2tleV0udXNlcl9pZCwgdHJ1ZSk7CgoJCQkJCQkJbGlrZXNfY291bnQrKzsKCQkJCQkJfQoJCQkJCX0pOwoKCQkJCQlhbGVydCgiTGlrZWQgIiArIGxpa2VzX2NvdW50ICsgIiB1c2VycyEgIik7CgkJCQl9KTsKCQkJfSk7CgkJfSk7Cgl9Cn07Cgp2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpewoJaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgic2lkZWJhci1tZW51IilbMF0gIT09IHVuZGVmaW5lZCl7CgkJY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7CgkJYm90LmFkZFRvTWVudSgpOwoJfQp9LCAxMDAwKTsKCg==");

location.href="javascript:(function(){" + code + "})()"
