(window.webpackJsonp = window.webpackJsonp || []).push([
    [35],
    {
      "4q6P": function (l, n, u) {
        "use strict";
        u.d(n, "a", function () {
          return e;
        });
        class e {
          constructor(l) {
            (this.elementRef = l), (this.el = this.elementRef.nativeElement);
          }
          onInput(l) {
            this.el.value = this.el.value.replace(/[^0-9]/g, "");
          }
        }
      },
      Aer0: function (l, n, u) {
        "use strict";
        u.d(n, "a", function () {
          return t;
        }),
          u.d(n, "b", function () {
            return s;
          });
        var e = u("8Y7J"),
          t =
            (u("eACs"),
            u("SVse"),
            u("s7LF"),
            e.pb({ encapsulation: 2, styles: [], data: {} }));
        function s(l) {
          return e.Nb(
            2,
            [
              e.Jb(402653184, 1, { selector: 0 }),
              (l()(),
              e.rb(
                1,
                0,
                [
                  [1, 0],
                  ["selector", 1],
                ],
                null,
                1,
                "select",
                [],
                null,
                null,
                null,
                null,
                null
              )),
              e.Cb(null, 0),
            ],
            null,
            null
          );
        }
      },
      R7If: function (l, n, u) {
        "use strict";
        u.d(n, "a", function () {
          return e;
        });
        class e {
          onKeydown(l) {
            -1 !==
              [
                "Delete",
                "Backspace",
                "Tab",
                "Escape",
                "Enter",
                "NumLock",
                "ArrowLeft",
                "ArrowRight",
                "End",
                "Home",
                ".",
              ].indexOf(l.key) ||
              ("a" === l.key && (l.ctrlKey || l.metaKey)) ||
              ("c" === l.key && (l.ctrlKey || l.metaKey)) ||
              ("v" === l.key && (l.ctrlKey || l.metaKey)) ||
              ("x" === l.key && (l.ctrlKey || l.metaKey)) ||
              ((l.shiftKey ||
                -1 ===
                  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(
                    l.key
                  )) &&
                l.preventDefault());
          }
          blockPaste(l) {
            l.preventDefault();
          }
          blockCopy(l) {
            l.preventDefault();
          }
          blockCut(l) {
            l.preventDefault();
          }
        }
      },
      "f+ep": function (l, n, u) {
        "use strict";
        u.r(n);
        var e = u("8Y7J"),
          t = u("j9H2");
        function s(l) {
          return new t.a(l, [
            { prefix: "./assets/i18n/app/", suffix: ".json" },
            { prefix: "./assets/i18n/login/", suffix: ".json" },
          ]);
        }
        class r {}
        var i = u("pMnS"),
          a = u("t68o"),
          o = u("TSSN"),
          b = u("SVse"),
          c = u("s7LF"),
          g = u("4q6P"),
          d = u("w+Hj"),
          h = u("lcJK"),
          m = u("47AC"),
          p = u("R7If"),
          f = u("o9tF"),
          v = u("KD2G"),
          C = u("iInd"),
          D = u("mrSG"),
          k = u("kLqA"),
          y = u("HDdC"),
          _ = u("D0XW"),
          I = u("Y7HM");
        function q(l) {
          const { subscriber: n, counter: u, period: e } = l;
          n.next(u),
            this.schedule({ subscriber: n, counter: u + 1, period: e }, e);
        }
        var w = u("SxV6"),
          N = u("VXAP"),
          S = u("yeVU"),
          x = u("tRjT"),
          P = u("oyXx");
        class F extends N.a {
          constructor(l, n, u, e, t, s, r, i, a) {
            super(l, n),
              (this.storeService = l),
              (this.translate = n),
              (this.formBuilder = u),
              (this.route = e),
              (this.router = t),
              (this.authenticationService = s),
              (this.modalService = r),
              (this.apiService = i),
              (this.dialog = a),
              (this.isDataAvailable = !1),
              (this.sessionTime = 0),
              (this.loginPage = "1"),
              (this.error2Code = ""),
              (this.error2 = ""),
              (this.error3Code = ""),
              (this.error3 = ""),
              (this.error4Code = ""),
              (this.error4 = ""),
              (this.error41Code = ""),
              (this.error41 = ""),
              (this.error5Code = ""),
              (this.error5 = ""),
              (this.error51Code = ""),
              (this.error51 = ""),
              (this.userNames = new Map()),
              (this.userName = {}),
              (this.accountNos = new Map()),
              (this.accountNo = {}),
              (this.error6Code = ""),
              (this.error6 = ""),
              console.log("LoginComponent", location.origin),
              (this.loadingStatus = "ready");
          }
          ngOnInit() {
            return D.a(this, void 0, void 0, function* () {
              (this.loginForm5Data = { listMobileNo: [], listAccountNo: [] }),
                (this.loginForm4Data = {}),
                (this.loginForm3Data = {}),
                (this.loginForm2Data = {}),
                (this.loginForm = this.formBuilder.group({
                  username: ["", c.x.required],
                  password: ["", c.x.required],
                  captcha: ["", c.x.required],
                  HidePass: [!0],
                })),
                (this.loginForm2 = this.formBuilder.group({ CMND: [""] })),
                (this.loginForm3 = this.formBuilder.group({ OTP: [""] })),
                (this.loginForm4 = this.formBuilder.group({
                  DefaultPass: [""],
                  NewPass: [""],
                  NewPassConfirm: [""],
                  HideDefaultPass: [!0],
                  HideNewPass: [!0],
                  HideNewPassConfirm: [!0],
                })),
                (this.loginForm41 = this.formBuilder.group({ OTP: [""] })),
                (this.loginForm5 = this.formBuilder.group({
                  User: [""],
                  AccountNo: [""],
                  Pass: [""],
                  PassConfirm: [""],
                  Email: [""],
                  Confirm: [""],
                  HidePass: [!0],
                  HidePassConfirm: [!0],
                })),
                (this.loginForm51 = this.formBuilder.group({ OTP: [""] })),
                (this.loginForm6 = this.formBuilder.group({
                  DefaultPass: [""],
                  NewPass: [""],
                  NewPassConfirm: [""],
                  HideDefaultPass: [!0],
                  HideNewPass: [!0],
                  HideNewPassConfirm: [!0],
                })),
                (this.returnUrl =
                  this.route.snapshot.queryParams.returnUrl || "/login"),
                (this.guid = k.Guid.create().toString()),
                (this.srcCaptcha =
                  this.authenticationService.apiUrl +
                  "/get-captcha/" +
                  this.guid),
                yield this.loadLanguages();
              const l = new Date();
              l.getHours() >= 5 && l.getHours() < 14 && (this.sessionTime = 1),
                l.getHours() >= 14 && l.getHours() < 18 && (this.sessionTime = 2),
                (l.getHours() >= 18 || l.getHours() < 5) &&
                  (this.sessionTime = 3),
                (this.loginError = ""),
                (this.loginErrorCode = ""),
                "changePass" ===
                  this.storeService.getFromSession(x.a.StoreKey.LOGIN_STATE) &&
                  this.storeService.remove(x.a.StoreKey.USER_INFO),
                "done" ===
                this.storeService.getFromSession(x.a.StoreKey.LOGIN_STATE)
                  ? this.router.navigate(["/"])
                  : "waiting" ===
                    this.storeService.getFromSession(x.a.StoreKey.LOGIN_STATE)
                  ? this.storeService.storeInSession(
                      x.a.StoreKey.LOGIN_STATE,
                      "ready"
                    )
                  : "expired" ===
                    this.storeService.getFromSession(x.a.StoreKey.LOGIN_STATE)
                  ? (this.storeService.storeInSession(
                      x.a.StoreKey.LOGIN_STATE,
                      "ready"
                    ),
                    this.dialog.open(S.a, {
                      width: "auto",
                      disableClose: !0,
                      data: {
                        message1: this.translator
                          ? this.translator.session_expire1
                          : "Phi\xean \u0111\u0103ng nh\u1eadp \u0111\xe3 h\u1ebft hi\u1ec7u l\u1ef1c!",
                        message2: this.translator
                          ? this.translator.session_expire2
                          : "C\u1ea3m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 ng\xe2n h\xe0ng s\u1ed1 VCB Digibank",
                        btnConfirm: this.translator
                          ? this.translator.login_again
                          : "Ti\u1ebfp t\u1ee5c",
                        btnCancel: "",
                      },
                    }))
                  : "kickout" ===
                      this.storeService.getFromSession(
                        x.a.StoreKey.LOGIN_STATE
                      ) &&
                    (this.storeService.storeInSession(
                      x.a.StoreKey.LOGIN_STATE,
                      "ready"
                    ),
                    this.dialog.open(S.a, {
                      width: "auto",
                      disableClose: !0,
                      data: {
                        message1: this.translator
                          ? this.translator.session_expire3
                          : "T\xe0i kho\u1ea3n \u0111\xe3 \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t tr\xean thi\u1ebft b\u1ecb kh\xe1c. C\u1ea3m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 ng\xe2n h\xe0ng s\u1ed1 VCB Digibank",
                        btnConfirm: this.translator
                          ? this.translator.login_again
                          : "Ti\u1ebfp t\u1ee5c",
                        btnCancel: "",
                      },
                    }));
            });
          }
          get f() {
            return this.loginForm.controls;
          }
          get f2() {
            return this.loginForm2.controls;
          }
          get f3() {
            return this.loginForm3.controls;
          }
          get f4() {
            return this.loginForm4.controls;
          }
          get f41() {
            return this.loginForm41.controls;
          }
          get f5() {
            return this.loginForm5.controls;
          }
          get f51() {
            return this.loginForm51.controls;
          }
          get f6() {
            return this.loginForm6.controls;
          }
          ngAfterViewChecked() {
            (this.formValidator1 = jQuery(".formValidator1").parsley()),
              (this.formValidator2 = jQuery(".formValidator2").parsley()),
              (this.formValidator3 = jQuery(".formValidator3").parsley()),
              (this.formValidator4 = jQuery(".formValidator4").parsley()),
              (this.formValidator5 = jQuery(".formValidator5").parsley()),
              (this.formValidator6 = jQuery(".formValidator6").parsley());
          }
          onSubmit() {
            const l = this.guid;
            if (
              ((this.loginError = ""),
              (this.loginErrorCode = ""),
              "" === this.f.username.value
                ? (this.loginErrorCode = "user_name_require")
                : "" === this.f.password.value
                ? (this.loginErrorCode = "password_require")
                : "" === this.f.captcha.value &&
                  (this.loginErrorCode = "captcha_require"),
              this.isSubmitted || this.loginForm.invalid)
            )
              return;
            this.isSubmitted = !0;
            const n = {
              captcha_id: this.guid,
              captcha_text: this.f.captcha.value,
            };
            this.loginForm.patchValue({ captcha: "" }),
              this.authenticationService
                .validCaptcha2(n)
                .then((n) => {
                  if ("01" === n.code)
                    this.loginErrorCode = "app_error_not_defined";
                  else if ("02" === n.code)
                    this.refreshCaptcha(),
                      (this.loginErrorCode = "captcha_wrong");
                  else if ("03" === n.code)
                    this.refreshCaptcha(),
                      (this.loginErrorCode = "captcha_expire");
                  else {
                    this.loadingStatus = "loading";
                    const n = JSON.parse(
                      this.storeService.getFromSession(x.a.StoreKey.USER_INFO)
                    );
                    if (n && n.user_name === this.f.username.value)
                      return (
                        this.storeService.getFromSession(
                          x.a.StoreKey.LOGIN_STATE
                        ),
                        void location.reload()
                      );
                    {
                      let n = "";
                      Promise.resolve(!0)
                        .then(
                          () => (
                            this.authenticationService.connectSocket(),
                            new Promise((l, u) => {
                              this.authenticationService.mySocket.on(
                                "connect",
                                function () {
                                  (n = this.id),
                                    console.log("socketID:", n),
                                    l(n);
                                }
                              );
                            })
                          )
                        )
                        .then(() => {
                          this.authenticationService
                            .login(
                              this.f.username.value,
                              this.f.password.value,
                              n,
                              l
                            )
                            .then((l) => {
                              if ((console.log("data", l), "00" === l.code))
                                (this.loadingStatus = "done"),
                                  this.storeService.storeInSession(
                                    x.a.StoreKey.LOGIN_STATE,
                                    "done"
                                  ),
                                  (this.checksum = encodeURIComponent(
                                    this.authenticationService.checksum(
                                      l.user_info.user_name +
                                        l.user_info.lastLogin
                                    )
                                  )),
                                  this.router.navigate([
                                    "/info/" + this.checksum,
                                  ]);
                              else if ("67" === l.code)
                                this.storeService.storeInSession(
                                  x.a.StoreKey.LOGIN_STATE,
                                  "changePass"
                                ),
                                  this.modalService
                                    .error(
                                      l.des,
                                      {
                                        disableClose: !1,
                                        btnConfirm: this.translate.instant(
                                          "app_btn_next"
                                        ),
                                        btnCancel: "",
                                      },
                                      "0"
                                    )
                                    .afterClosed()
                                    .subscribe(() => {
                                      this.changePage("6");
                                    });
                              else if ("16" === l.code)
                                this.refreshCaptcha(),
                                  this.loginForm.patchValue({
                                    username: "",
                                    password: "",
                                    captcha: "",
                                  }),
                                  (this.loginErrorCode = "other"),
                                  (this.loginError = l.des),
                                  this.authenticationService.mySocket.close(),
                                  (this.loadingStatus = "ready"),
                                  this.storeService.storeInSession(
                                    x.a.StoreKey.LOGIN_STATE,
                                    "ready"
                                  );
                              else if ("0126" === l.code) {
                                (this.loadingStatus = "waiting"),
                                  (this.loginErrorCode = "other"),
                                  (this.loginError = l.des),
                                  this.storeService.storeInSession(
                                    x.a.StoreKey.LOGIN_STATE,
                                    "waiting"
                                  ),
                                  this.changePage("crosslogin");
                                let n = l.durationWaiting;
                                document.getElementById(
                                  "countdown"
                                ).innerHTML = n;
                                const u = (function (l = 0, n = _.a) {
                                  return (
                                    (!Object(I.a)(l) || l < 0) && (l = 0),
                                    (n && "function" == typeof n.schedule) ||
                                      (n = _.a),
                                    new y.a(
                                      (u) => (
                                        u.add(
                                          n.schedule(q, l, {
                                            subscriber: u,
                                            counter: 0,
                                            period: l,
                                          })
                                        ),
                                        u
                                      )
                                    )
                                  );
                                })(1e3);
                                (this.downloadTimer = u.subscribe((u) => {
                                  n -= 1;
                                  const e = this.storeService.getFromSession(
                                    x.a.StoreKey.LOGIN_STATE
                                  );
                                  n <= 0 && "waiting" === e
                                    ? (this.authenticationService.logout(
                                        this.f.username.value
                                      ),
                                      (this.loginErrorCode =
                                        "cross_login_timeout"),
                                      (this.loadingStatus = "ready"),
                                      this.refreshCaptcha(),
                                      this.changePage("1"),
                                      this.storeService.storeInSession(
                                        x.a.StoreKey.LOGIN_STATE,
                                        "ready"
                                      ),
                                      this.downloadTimer &&
                                        this.downloadTimer.unsubscribe())
                                    : ((document.getElementById(
                                        "countdown"
                                      ).innerHTML = n),
                                      n % 3 == 0 && this.pingCrossLogin(l.E));
                                })),
                                  this.authenticationService.mySocket.on(
                                    "user_wait_login",
                                    (l) => {
                                      const n = this.storeService.getFromSession(
                                        x.a.StoreKey.LOGIN_STATE
                                      );
                                      console.log(
                                        "user just only wait login: ",
                                        l,
                                        " this.f.username.value: ",
                                        this.f.username.value
                                      ),
                                        l === this.f.username.value
                                          ? "waiting" === n
                                            ? (console.log("logout ..."),
                                              this.authenticationService.logout(
                                                l
                                              ),
                                              this.router.url.startsWith("/login")
                                                ? location.reload()
                                                : this.router.navigate([
                                                    "/login",
                                                  ]),
                                              this.storeService.storeInSession(
                                                x.a.StoreKey.LOGIN_STATE,
                                                "kickout"
                                              ))
                                            : this.authenticationService.mySocket.emit(
                                                "client_to_server",
                                                l + ",0"
                                              )
                                          : location.reload();
                                    }
                                  );
                              } else
                                "0127" === l.code
                                  ? ((this.loginForm2Data = l),
                                    this.loginForm2.patchValue({ CMND: "" }),
                                    this.authenticationService.mySocket.close(),
                                    (this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    this.changePage("2"),
                                    (this.error2Code = ""),
                                    (this.error2 = ""))
                                  : "0128" === l.code
                                  ? ((this.loginForm3Data = l),
                                    this.loginForm3.patchValue({ OTP: "" }),
                                    this.authenticationService.mySocket.close(),
                                    (this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    this.changePage("3"),
                                    (this.error3 = ""),
                                    (this.error3Code = ""),
                                    (this.isOTPCreated = !1),
                                    this.createOTP(this.f.username.value, 3, l.E))
                                  : "06" === l.code || "10" === l.code
                                  ? ((this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    this.changePage("7"),
                                    (this.error4 = ""),
                                    (this.error4Code = ""))
                                  : "116" === l.code
                                  ? ((this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    0 === l.listAccountNo.length
                                      ? (this.loginForm.patchValue({
                                          username: "",
                                          password: "",
                                          captcha: "",
                                        }),
                                        this.loginForm2.patchValue({ CMND: "" }),
                                        this.loginForm3.patchValue({ OTP: "" }),
                                        (this.loginError = "get_ib_data_failed"))
                                      : (this.changePage("8"),
                                        (this.error5 = ""),
                                        (this.error5Code = ""),
                                        (this.loginForm5Data = l),
                                        l.listMobileNo.length > 0 &&
                                          ((this.userNames = new Map()),
                                          l.listMobileNo.forEach((l) => {
                                            this.userNames.set(l, {
                                              code: l,
                                              name: l,
                                            });
                                          }),
                                          (this.userName = this.userNames
                                            .values()
                                            .next().value),
                                          this.loginForm5.patchValue({
                                            User: this.loginForm5Data
                                              .listMobileNo[0],
                                          })),
                                        l.listAccountNo.length > 0 &&
                                          ((this.accountNos = new Map()),
                                          l.listAccountNo.forEach((l) => {
                                            this.accountNos.set(l, {
                                              code: l,
                                              name:
                                                l.substring(0, 3) +
                                                "*******" +
                                                l.substring(l.length - 3),
                                            });
                                          }),
                                          (this.accountNo = this.accountNos
                                            .values()
                                            .next().value),
                                          this.loginForm5.patchValue({
                                            AccountNo: this.loginForm5Data
                                              .listAccountNo[0],
                                          })),
                                        (this.email5 = this.loginForm5Data
                                          .cusEmail
                                          ? this.loginForm5Data.cusEmail
                                          : ""),
                                        "" !== this.email5 &&
                                          this.loginForm5.patchValue({
                                            Email:
                                              this.email5.substring(
                                                0,
                                                this.email5.indexOf("@") - 1
                                              ) +
                                              "*" +
                                              this.email5.substring(
                                                this.email5.indexOf("@")
                                              ),
                                          })))
                                  : (this.refreshCaptcha(),
                                    this.loginForm.patchValue({
                                      username: "",
                                      password: "",
                                      captcha: "",
                                    }),
                                    this.loginForm2.patchValue({ CMND: "" }),
                                    this.loginForm3.patchValue({ OTP: "" }),
                                    (this.loginErrorCode = "other"),
                                    (this.loginError = l.des),
                                    this.authenticationService.mySocket.close(),
                                    (this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ));
                            })
                            .catch((l) => {
                              this.refreshCaptcha(),
                                this.loginForm.patchValue({
                                  username: "",
                                  password: "",
                                  captcha: "",
                                }),
                                this.loginForm2.patchValue({ CMND: "" }),
                                this.loginForm3.patchValue({ OTP: "" }),
                                (this.loginErrorCode = "other"),
                                (this.loginError = l),
                                this.authenticationService.mySocket.close(),
                                (this.loadingStatus = "ready"),
                                this.storeService.storeInSession(
                                  x.a.StoreKey.LOGIN_STATE,
                                  "ready"
                                );
                            });
                        });
                    }
                  }
                })
                .catch((l) => {
                  console.log("Ki\u1ec3m tra captcha l\u1ed7i:", l),
                    this.refreshCaptcha(),
                    this.modalService.error(
                      this.translator.app_error_not_defined,
                      {
                        disableClose: !0,
                        btnConfirm: this.translate.instant("app_close"),
                        btnCancel: "",
                      },
                      "0"
                    );
                })
                .finally(() => {
                  this.isSubmitted = !1;
                });
          }
          confirm2() {
            if (((this.error2Code = ""), !this.isSubmitted)) {
              if (((this.isSubmitted = !0), "" === this.f2.CMND.value))
                return (
                  (this.error2Code = "issue_no_require"),
                  void (this.isSubmitted = !1)
                );
              this.authenticationService
                .validCMND(this.f.username.value, this.f2.CMND.value)
                .pipe(Object(w.a)())
                .subscribe(
                  (l) => {
                    this.loginForm2.patchValue({ CMND: "" }),
                      "00" === l.code
                        ? (this.refreshCaptcha(),
                          this.changePage("1"),
                          this.loginForm.patchValue({
                            username: "",
                            password: "",
                            captcha: "",
                          }))
                        : "0129" === l.code
                        ? ((this.loginErrorCode = "other"),
                          (this.loginError = l.des),
                          this.refreshCaptcha(),
                          this.changePage("1"),
                          this.loginForm.patchValue({
                            username: "",
                            password: "",
                            captcha: "",
                          }))
                        : ((this.error2Code = "other"), (this.error2 = l.des)),
                      (this.isSubmitted = !1);
                  },
                  (l) => {
                    (this.error2Code = "other"),
                      (this.error2 = l),
                      (this.isSubmitted = !1);
                  }
                );
            }
          }
          createOTP(l, n, u) {
            this.authenticationService
              .createOTP(l, u)
              .pipe(Object(w.a)())
              .subscribe(
                (l) => {
                  "00" === l.code
                    ? (this.isOTPCreated = !0)
                    : (3 === n && ((this.error3 = l.des), (this.error3Code = "")),
                      4 === n && ((this.error4 = l.des), (this.error4Code = "")),
                      5 === n && ((this.error5 = l.des), (this.error5Code = "")));
                },
                (l) => {
                  3 === n && ((this.error3 = l), (this.error3Code = "")),
                    4 === n && ((this.error4 = l), (this.error4Code = "")),
                    5 === n && ((this.error5 = l), (this.error5Code = ""));
                }
              );
          }
          forgotPassword() {
            this.router.navigate(["/resetpassword"]);
          }
          resendOTP(l) {
            this.modalService
              .error(
                this.translate.instant("resend_otp"),
                {
                  disableClose: !1,
                  btnConfirm: this.translate.instant("app_accept"),
                  btnCancel: this.translate.instant("app_cancel"),
                },
                "0"
              )
              .afterClosed()
              .subscribe((n) => {
                "Confirm" === n &&
                  this.authenticationService
                    .reCreateOTP(l)
                    .pipe(Object(w.a)())
                    .subscribe(
                      (l) => {
                        "00" === l.code
                          ? ((this.isOTPCreated = !0),
                            this.modalService.success(
                              this.translate.instant("otp_sended")
                            ))
                          : this.modalService.error(
                              l.des
                                ? l.des
                                : this.translator.app_error_not_defined,
                              {
                                disableClose: !0,
                                btnConfirm: this.translate.instant("app_close"),
                                btnCancel: "",
                              },
                              "0"
                            );
                      },
                      (l) => {
                        this.modalService.error(
                          this.translator.app_error_not_defined,
                          {
                            disableClose: !0,
                            btnConfirm: this.translate.instant("app_close"),
                            btnCancel: "",
                          },
                          "0"
                        );
                      }
                    );
              });
          }
          confirm3() {
            if (((this.error3Code = ""), !this.isSubmitted))
              return (
                (this.isSubmitted = !0),
                "" === this.f3.OTP.value
                  ? ((this.error3Code = "otp_require"),
                    void (this.isSubmitted = !1))
                  : this.f3.OTP.value.length < 6
                  ? ((this.error3Code = "otp_short"),
                    void (this.isSubmitted = !1))
                  : void this.authenticationService
                      .validOTP(this.f.username.value, this.f3.OTP.value)
                      .pipe(Object(w.a)())
                      .subscribe(
                        (l) => {
                          this.loginForm3.patchValue({ OTP: "" }),
                            "00" === l.code
                              ? (this.refreshCaptcha(),
                                this.changePage("1"),
                                this.loginForm.patchValue({
                                  username: "",
                                  password: "",
                                  captcha: "",
                                }))
                              : "0129" === l.code
                              ? ((this.loginErrorCode = "other"),
                                (this.loginError = l.des),
                                this.refreshCaptcha(),
                                this.changePage("1"),
                                this.loginForm.patchValue({
                                  username: "",
                                  password: "",
                                  captcha: "",
                                }))
                              : ((this.error3Code = "other"),
                                (this.error3 = l.des)),
                            (this.isSubmitted = !1);
                        },
                        (l) => {
                          (this.error3Code = "other"),
                            (this.error3 = l),
                            (this.isSubmitted = !1);
                        }
                      )
              );
          }
          refreshCaptcha() {
            (this.guid = k.Guid.create().toString()),
              (this.srcCaptcha =
                this.authenticationService.apiUrl + "/get-captcha/" + this.guid);
          }
          ngOnDestroy() {
            super.ngOnDestroy(),
              this.downloadTimer && this.downloadTimer.unsubscribe();
          }
          confirm4() {
            if (!this.isSubmitted && this.formValidator4.isValid())
              return (
                (this.isSubmitted = !0),
                (this.error4Code = ""),
                "" === this.f4.DefaultPass.value
                  ? ((this.error4Code = "default_pass_require"),
                    void (this.isSubmitted = !1))
                  : "" === this.f4.NewPass.value
                  ? ((this.error4Code = "new_pass_require"),
                    void (this.isSubmitted = !1))
                  : "" === this.f4.NewPassConfirm.value
                  ? ((this.error4Code = "confirm_pass_require"),
                    void (this.isSubmitted = !1))
                  : this.f4.NewPass.value !== this.f4.NewPassConfirm.value
                  ? ((this.isSubmitted = !1),
                    void (this.error4Code = "confirm_pass_wrong"))
                  : void this.authenticationService
                      .checkPassActiveORReactive(
                        this.f.username.value,
                        this.f4.DefaultPass.value,
                        this.f4.NewPass.value
                      )
                      .then((l) => {
                        console.log(l),
                          "00" === l.code
                            ? (this.changePage("4.1"),
                              (this.error41 = ""),
                              (this.error41Code = ""),
                              (this.loginForm4Data = l),
                              (this.loginForm4Data.otpPhoneNumber =
                                this.f.username.value.substring(0, 3) +
                                "****" +
                                this.f.username.value.substring(
                                  this.f.username.value.length - 3
                                )))
                            : ((this.error4Code = "other"),
                              (this.error4 = l.des));
                      })
                      .catch((l) => {
                        (this.error4Code = "other"), (this.error4 = l);
                      })
                      .finally(() => {
                        this.isSubmitted = !1;
                      })
              );
          }
          confirm41() {
            if (((this.error41Code = ""), !this.isSubmitted))
              return (
                (this.isSubmitted = !0),
                "" === this.f41.OTP.value
                  ? ((this.error41Code = "otp_require"),
                    void (this.isSubmitted = !1))
                  : this.f41.OTP.value.length < 6
                  ? ((this.error41Code = "otp_short"),
                    void (this.isSubmitted = !1))
                  : void this.authenticationService
                      .checkOTPActiveORReactive(
                        this.f.username.value,
                        this.loginForm4Data.sessionId,
                        this.f41.OTP.value
                      )
                      .then((l) => {
                        console.log("confirm41", l),
                          console.log(this.currentUser),
                          "00" === l.code
                            ? (console.log("Login success"),
                              (this.loadingStatus = "done"),
                              this.storeService.storeInSession(
                                x.a.StoreKey.LOGIN_STATE,
                                "done"
                              ),
                              this.router.navigate(["/"]))
                            : "48" === l.code
                            ? this.modalService
                                .error(
                                  l.des,
                                  {
                                    disableClose: !1,
                                    btnConfirm: this.translate.instant(
                                      "login_again"
                                    ),
                                    btnCancel: "",
                                  },
                                  "0"
                                )
                                .afterClosed()
                                .subscribe(() => {
                                  this.refreshCaptcha(),
                                    (this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    this.changePage("1");
                                })
                            : ((this.error41Code = "other"),
                              (this.error41 = l.des));
                      })
                      .catch((l) => {
                        (this.error41Code = "other"), (this.error41 = l);
                      })
                      .finally(() => {
                        this.isSubmitted = !1;
                      })
              );
          }
          confirm5() {
            if (!this.isSubmitted && this.formValidator5.isValid())
              return (
                (this.isSubmitted = !0),
                (this.error5Code = ""),
                this.loginForm5Data.listMobileNo.length > 1 &&
                  this.loginForm5.patchValue({
                    User: this.userName ? this.userName.code : "",
                  }),
                "" === this.f5.User.value
                  ? ((this.error5Code = "new_user_name_require"),
                    void (this.isSubmitted = !1))
                  : this.accountNo.code && "" !== this.accountNo.code
                  ? this.f5.Pass.value !== this.f5.PassConfirm.value
                    ? ((this.error5Code = "confirm_pass_wrong"),
                      void (this.isSubmitted = !1))
                    : "" === this.f5.Confirm.value || !1 === this.f5.Confirm.value
                    ? ((this.error5Code = "policy_require"),
                      void (this.isSubmitted = !1))
                    : void this.authenticationService
                        .initRegisMB(
                          this.f5.User.value,
                          this.f5.Pass.value,
                          this.accountNo.code,
                          this.email5,
                          this.loginForm5Data.E
                        )
                        .then((l) => {
                          console.log(l),
                            "00" === l.code
                              ? (this.changePage("5.1"),
                                (this.error5 = ""),
                                (this.error51Code = ""),
                                (this.loginForm5Data.otpPhoneNumber =
                                  this.f5.User.value.substring(0, 3) +
                                  "****" +
                                  this.f5.User.value.substring(
                                    this.f5.User.value.length - 3
                                  )))
                              : ((this.error5Code = "other"),
                                (this.error5 = l.des));
                        })
                        .catch((l) => {
                          (this.error5Code = "other"), (this.error5 = l);
                        })
                        .finally(() => {
                          this.isSubmitted = !1;
                        })
                  : ((this.error5Code = "new_account_require"),
                    void (this.isSubmitted = !1))
              );
          }
          confirm51() {
            if (((this.error51Code = ""), !this.isSubmitted))
              return (
                (this.isSubmitted = !0),
                "" === this.f51.OTP.value
                  ? ((this.error51Code = "otp_require"),
                    void (this.isSubmitted = !1))
                  : this.f51.OTP.value.length < 6
                  ? ((this.error51Code = "otp_short"),
                    void (this.isSubmitted = !1))
                  : void this.authenticationService
                      .verifyRegisMB(
                        this.f5.User.value,
                        this.f51.OTP.value,
                        this.f5.Pass.value,
                        this.loginForm5Data.E
                      )
                      .then((l) => {
                        console.log(l),
                          "00" === l.code
                            ? (console.log("Login success"),
                              (this.loadingStatus = "done"),
                              this.storeService.storeInSession(
                                x.a.StoreKey.LOGIN_STATE,
                                "done"
                              ),
                              this.router.navigate(["/"]))
                            : "48" === l.code
                            ? this.modalService
                                .error(
                                  l.des,
                                  {
                                    disableClose: !1,
                                    btnConfirm: this.translate.instant(
                                      "login_again"
                                    ),
                                    btnCancel: "",
                                  },
                                  "0"
                                )
                                .afterClosed()
                                .subscribe(() => {
                                  this.refreshCaptcha(),
                                    (this.loadingStatus = "ready"),
                                    this.storeService.storeInSession(
                                      x.a.StoreKey.LOGIN_STATE,
                                      "ready"
                                    ),
                                    this.changePage("1");
                                })
                            : ((this.error51Code = "other"),
                              (this.error51 = l.des));
                      })
                      .catch((l) => {
                        (this.error51Code = "other"), (this.error51 = l);
                      })
                      .finally(() => {
                        this.isSubmitted = !1;
                      })
              );
          }
          confirm6() {
            if (!this.isSubmitted && this.formValidator6.isValid())
              return (
                (this.isSubmitted = !0),
                (this.error6Code = ""),
                this.f6.DefaultPass.value === this.f6.NewPass.value
                  ? ((this.error6Code = "new_pass_wrong"),
                    void (this.isSubmitted = !1))
                  : this.f6.NewPass.value !== this.f6.NewPassConfirm.value
                  ? ((this.error6Code = "confirm_pass_wrong"),
                    void (this.isSubmitted = !1))
                  : void this.apiService
                      .changePassword(
                        this.f6.DefaultPass.value,
                        this.f6.NewPass.value
                      )
                      .then((l) => {
                        const n = l;
                        "00" === n.code
                          ? ((this.loadingStatus = "done"),
                            this.storeService.storeInSession(
                              x.a.StoreKey.LOGIN_STATE,
                              "done"
                            ),
                            this.modalService
                              .error(
                                this.translator.lblNotify61,
                                {
                                  disableClose: !1,
                                  btnConfirm: this.translate.instant(
                                    "app_btn_next"
                                  ),
                                  btnCancel: "",
                                },
                                "0"
                              )
                              .afterClosed()
                              .subscribe(() => {
                                this.router.navigate(["/"]);
                              }))
                          : ((this.error6Code = "other"), (this.error6 = n.des));
                      })
                      .catch((l) => {
                        (this.error6Code = "other"), (this.error6 = l.des);
                      })
                      .finally(() => {
                        this.isSubmitted = !1;
                      })
              );
          }
          onAccountNoChanged(l) {
            l && (this.accountNo = l);
          }
          onUserNameChanged(l) {
            l && (this.userName = l);
          }
          onEmailKeyIn(l) {
            (this.email5 = P.a.convertVietnameseCharacters(l).replace(/ /g, "")),
              this.loginForm5.patchValue({
                Email: P.a.convertVietnameseCharacters(l).replace(/ /g, ""),
              });
          }
          onUsernameKeyIn(l) {
            this.loginForm.patchValue({
              username: P.a.convertVietnameseCharacters(l),
            });
          }
          onPasswordKeyIn(l, n) {
            switch (n) {
              case "1":
                break;
              case "4.1":
                this.loginForm4.patchValue({
                  DefaultPass: P.a.convertVietnameseCharacters(l),
                });
                break;
              case "4.2":
                this.loginForm4.patchValue({
                  NewPass: P.a.convertVietnameseCharacters(l).replace(/ /g, ""),
                });
                break;
              case "4.3":
                this.loginForm4.patchValue({
                  NewPassConfirm: P.a
                    .convertVietnameseCharacters(l)
                    .replace(/ /g, ""),
                });
                break;
              case "5.1":
                this.loginForm5.patchValue({
                  Pass: P.a.convertVietnameseCharacters(l).replace(/ /g, ""),
                });
                break;
              case "5.2":
                this.loginForm5.patchValue({
                  PassConfirm: P.a
                    .convertVietnameseCharacters(l)
                    .replace(/ /g, ""),
                });
                break;
              case "6.1":
                this.loginForm6.patchValue({
                  DefaultPass: P.a
                    .convertVietnameseCharacters(l)
                    .replace(/ /g, ""),
                });
                break;
              case "6.2":
                this.loginForm6.patchValue({
                  NewPass: P.a.convertVietnameseCharacters(l).replace(/ /g, ""),
                });
                break;
              case "6.3":
                this.loginForm6.patchValue({
                  NewPassConfirm: P.a
                    .convertVietnameseCharacters(l)
                    .replace(/ /g, ""),
                });
            }
          }
          onCaptchaKeyIn(l) {
            this.loginForm.patchValue({
              captcha: ChanKyTuDacBiet(P.a.convertVietnameseCharacters(l), []),
            });
          }
          changePage(l) {
            "7" === l || "8" === l
              ? document
                  .getElementById("theme")
                  .setAttribute("href", "assets/css/welcome/thuong.css")
              : document.getElementById("theme").setAttribute("href", ""),
              jQuery(document).ready(() => {
                const l = jQuery("select.accountNo");
                l.parents(".input-group-material")
                  .find(">label")
                  .detach()
                  .insertAfter(l);
                const n = jQuery("select.userName");
                n.parents(".input-group-material")
                  .find(">label")
                  .detach()
                  .insertAfter(n);
              }),
              (this.loginPage = l),
              this.loginForm4.patchValue({
                DefaultPass: "",
                NewPass: "",
                NewPassConfirm: "",
                HideDefaultPass: !0,
                HideNewPass: !0,
                HideNewPassConfirm: !0,
              }),
              ("4" !== l && "6" !== l) ||
                $(document).ready(function () {
                  $('[data-toggle="popover"]').popover({
                    trigger: "focus",
                    html: !0,
                  });
                });
          }
          pingCrossLogin(l) {
            this.authenticationService
              .pingCrossLogin(this.f.username.value, l)
              .then((l) => {
                console.log("pingCrossLogin", l),
                  "00" === l.code
                    ? ((this.loadingStatus = "done"),
                      this.storeService.storeInSession(
                        x.a.StoreKey.LOGIN_STATE,
                        "done"
                      ),
                      this.downloadTimer && this.downloadTimer.unsubscribe(),
                      this.authenticationService.saveUserInfo(l),
                      this.router.navigate(["/"]))
                    : "0102" === l.code
                    ? (this.authenticationService.logout(this.f.username.value),
                      (this.loginErrorCode = "cross_login_reject"),
                      (this.loadingStatus = "ready"),
                      this.refreshCaptcha(),
                      this.changePage("1"),
                      this.storeService.storeInSession(
                        x.a.StoreKey.LOGIN_STATE,
                        "ready"
                      ),
                      this.downloadTimer && this.downloadTimer.unsubscribe())
                    : "0103" === l.code &&
                      (this.authenticationService.logout(this.f.username.value),
                      (this.loginErrorCode = "cross_login_timeout"),
                      (this.loadingStatus = "ready"),
                      this.refreshCaptcha(),
                      this.changePage("1"),
                      this.storeService.storeInSession(
                        x.a.StoreKey.LOGIN_STATE,
                        "ready"
                      ),
                      this.downloadTimer && this.downloadTimer.unsubscribe());
              })
              .catch((l) => {});
          }
        }
        var T = u("pW6c"),
          j = u("NJ5i"),
          L = u("RJTb"),
          M = u("s6ns"),
          E = e.pb({ encapsulation: 2, styles: [], data: {} });
        function V(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                0,
                "div",
                [["class", "bg--login bg--login-morning"]],
                null,
                null,
                null,
                null,
                null
              )),
            ],
            null,
            null
          );
        }
        function K(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                0,
                "div",
                [["class", "bg--login bg--login-noon"]],
                null,
                null,
                null,
                null,
                null
              )),
            ],
            null,
            null
          );
        }
        function O(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                0,
                "div",
                [["class", "bg--login bg--login-night"]],
                null,
                null,
                null,
                null,
                null
              )),
            ],
            null,
            null
          );
        }
        function A(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                10,
                "div",
                [["class", "login-alert login-info login-alert-has-toggle"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                2,
                "div",
                [["class", "login-alert-inner"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                2,
                0,
                null,
                null,
                1,
                "p",
                [],
                [[8, "innerHTML", 1]],
                null,
                null,
                null,
                null
              )),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                4,
                0,
                null,
                null,
                6,
                "label",
                [
                  ["class", "login-alert-toggle show-xs color-primary"],
                  ["for", "login-alert-1"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                5,
                0,
                null,
                null,
                2,
                "span",
                [["class", "toggle-hide"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(6, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                8,
                0,
                null,
                null,
                2,
                "span",
                [["class", "toggle-show"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(9, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, e.Mb(n, 2, 0, e.Db(n, 3).transform("lblNotify1"))),
                l(n, 6, 0, e.Mb(n, 6, 0, e.Db(n, 7).transform("lblNotify_hide"))),
                l(
                  n,
                  9,
                  0,
                  e.Mb(n, 9, 0, e.Db(n, 10).transform("lblNotify_show"))
                );
            }
          );
        }
        function B(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, n.component.loginForm2Data.des);
            }
          );
        }
        function U(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, n.component.loginForm3Data.des);
            }
          );
        }
        function G(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, n.component.loginForm5Data.des);
            }
          );
        }
        function H(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                3,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 2, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, e.Mb(n, 2, 0, e.Db(n, 3).transform("lblNotify4")));
            }
          );
        }
        function R(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                3,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 2, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", " ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              var u = n.component;
              l(
                n,
                2,
                0,
                e.Mb(n, 2, 0, e.Db(n, 3).transform("lblNotify41")),
                u.loginForm4Data.otpPhoneNumber
              );
            }
          );
        }
        function Q(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                3,
                "div",
                [["class", "login-alert login-info"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(1, 0, null, null, 2, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(2, null, ["", " ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              var u = n.component;
              l(
                n,
                2,
                0,
                e.Mb(n, 2, 0, e.Db(n, 3).transform("lblNotify41")),
                u.loginForm5Data.otpPhoneNumber
              );
            }
          );
        }
        function z(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("user_name_require"))
              );
            }
          );
        }
        function J(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("password_require")));
            }
          );
        }
        function Y(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("captcha_require")));
            }
          );
        }
        function W(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("app_error_not_defined"))
              );
            }
          );
        }
        function X(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("captcha_wrong")));
            }
          );
        }
        function Z(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("captcha_expire")));
            }
          );
        }
        function ll(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("cross_login_timeout"))
              );
            }
          );
        }
        function nl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("cross_login_reject"))
              );
            }
          );
        }
        function ul(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("get_ib_data_failed"))
              );
            }
          );
        }
        function el(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.loginError);
            }
          );
        }
        function tl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("issue_no_require")));
            }
          );
        }
        function sl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error2);
            }
          );
        }
        function rl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_require")));
            }
          );
        }
        function il(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_short")));
            }
          );
        }
        function al(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error3);
            }
          );
        }
        function ol(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("confirm_pass_wrong"))
              );
            }
          );
        }
        function bl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error4);
            }
          );
        }
        function cl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_require")));
            }
          );
        }
        function gl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_short")));
            }
          );
        }
        function dl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error41);
            }
          );
        }
        function hl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("new_user_name_require"))
              );
            }
          );
        }
        function ml(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("new_account_require"))
              );
            }
          );
        }
        function pl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("confirm_pass_wrong"))
              );
            }
          );
        }
        function fl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("policy_require")));
            }
          );
        }
        function vl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error5);
            }
          );
        }
        function Cl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_require")));
            }
          );
        }
        function Dl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("otp_short")));
            }
          );
        }
        function kl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error51);
            }
          );
        }
        function yl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, e.Mb(n, 1, 0, e.Db(n, 2).transform("new_pass_wrong")));
            }
          );
        }
        function _l(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("confirm_pass_wrong"))
              );
            }
          );
        }
        function Il(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "p",
                [["class", "login-alert login-error"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
            ],
            null,
            function (l, n) {
              l(n, 1, 0, n.component.error6);
            }
          );
        }
        function ql(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                16,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["appNumberOnly", ""],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "User"],
                  ["maxlength", "10"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 5)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 5).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 5)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 5)._compositionEnd(u.target.value) && t),
                    "input" === n && (t = !1 !== e.Db(l, 12).onInput(u) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                3,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(4, { "input-hadval": 0 }),
              e.qb(5, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                6,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                9,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(11, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.qb(12, 16384, null, 0, g.a, [e.k], null, null),
              (l()(),
              e.rb(
                13,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                14,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(15, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            function (l, n) {
              var u = l(n, 4, 0, "" != n.component.loginForm5.value.User);
              l(n, 3, 0, "input input-xs input-material", u),
                l(n, 6, 0, "10"),
                l(n, 9, 0, "User");
            },
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Db(n, 6).maxlength ? e.Db(n, 6).maxlength : null,
                e.Db(n, 11).ngClassUntouched,
                e.Db(n, 11).ngClassTouched,
                e.Db(n, 11).ngClassPristine,
                e.Db(n, 11).ngClassDirty,
                e.Db(n, 11).ngClassValid,
                e.Db(n, 11).ngClassInvalid,
                e.Db(n, 11).ngClassPending
              ),
                l(
                  n,
                  15,
                  0,
                  e.Mb(n, 15, 0, e.Db(n, 16).transform("user_name_label"))
                );
            }
          );
        }
        function wl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                13,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                8,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "User"],
                  ["placeholder", ""],
                  ["readonly", ""],
                  ["type", "text"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 5)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 5).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 5)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 5)._compositionEnd(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                3,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(4, { "input-hadval": 0 }),
              e.qb(5, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                7,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(9, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                10,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                11,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(12, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            function (l, n) {
              var u = l(n, 4, 0, "" != n.component.loginForm5.value.User);
              l(n, 3, 0, "input input-xs input-material", u), l(n, 7, 0, "User");
            },
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Db(n, 9).ngClassUntouched,
                e.Db(n, 9).ngClassTouched,
                e.Db(n, 9).ngClassPristine,
                e.Db(n, 9).ngClassDirty,
                e.Db(n, 9).ngClassValid,
                e.Db(n, 9).ngClassInvalid,
                e.Db(n, 9).ngClassPending
              ),
                l(
                  n,
                  12,
                  0,
                  e.Mb(n, 12, 0, e.Db(n, 13).transform("user_name_label"))
                );
            }
          );
        }
        function Nl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                5,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(2, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                4,
                0,
                null,
                null,
                1,
                "app-select2-common",
                [["placeholder", ""]],
                null,
                [[null, "valueChange"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "valueChange" === n &&
                      (e = !1 !== l.component.onUserNameChanged(u) && e),
                    e
                  );
                },
                d.b,
                d.a
              )),
              e.qb(
                5,
                13352960,
                null,
                0,
                h.a,
                [e.k, e.h, m.a, o.k],
                {
                  class: [0, "class"],
                  placeholder: [1, "placeholder"],
                  searchBox: [2, "searchBox"],
                  data: [3, "data"],
                  value: [4, "value"],
                },
                { valueChange: "valueChange" }
              ),
            ],
            function (l, n) {
              var u = n.component;
              l(
                n,
                5,
                0,
                "select-2 userName input input-ic-sm input-xs input-material input-hadval select2-hidden-accessible",
                "",
                !1,
                u.userNames,
                u.userName
              );
            },
            function (l, n) {
              l(n, 2, 0, e.Mb(n, 2, 0, e.Db(n, 3).transform("user_name_label")));
            }
          );
        }
        function Sl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["data-parsley-type", "email"],
                  ["formControlName", "Email"],
                  ["maxlength", "100"],
                  ["placeholder", ""],
                  ["readonly", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-type-message", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 4)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 4).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 4)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 4)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onEmailKeyIn(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                2,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(3, { "input-hadval": 0 }),
              e.qb(4, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                5,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                8,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(10, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            function (l, n) {
              var u = l(n, 3, 0, "" != n.component.loginForm5.value.Email);
              l(n, 2, 0, "input input-xs input-material", u),
                l(n, 5, 0, "100"),
                l(n, 8, 0, "Email");
            },
            function (l, n) {
              l(
                n,
                0,
                0,
                e.Mb(n, 0, 0, e.Db(n, 11).transform("email_invalid")),
                e.Db(n, 5).maxlength ? e.Db(n, 5).maxlength : null,
                e.Db(n, 10).ngClassUntouched,
                e.Db(n, 10).ngClassTouched,
                e.Db(n, 10).ngClassPristine,
                e.Db(n, 10).ngClassDirty,
                e.Db(n, 10).ngClassValid,
                e.Db(n, 10).ngClassInvalid,
                e.Db(n, 10).ngClassPending
              );
            }
          );
        }
        function xl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["data-parsley-type", "email"],
                  ["formControlName", "Email"],
                  ["maxlength", "100"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-type-message", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 4)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 4).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 4)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 4)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onEmailKeyIn(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                2,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(3, { "input-hadval": 0 }),
              e.qb(4, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                5,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                8,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(10, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            function (l, n) {
              var u = l(n, 3, 0, "" != n.component.loginForm5.value.Email);
              l(n, 2, 0, "input input-xs input-material", u),
                l(n, 5, 0, "100"),
                l(n, 8, 0, "Email");
            },
            function (l, n) {
              l(
                n,
                0,
                0,
                e.Mb(n, 0, 0, e.Db(n, 11).transform("email_invalid")),
                e.Db(n, 5).maxlength ? e.Db(n, 5).maxlength : null,
                e.Db(n, 10).ngClassUntouched,
                e.Db(n, 10).ngClassTouched,
                e.Db(n, 10).ngClassPristine,
                e.Db(n, 10).ngClassDirty,
                e.Db(n, 10).ngClassValid,
                e.Db(n, 10).ngClassInvalid,
                e.Db(n, 10).ngClassPending
              );
            }
          );
        }
        function Pl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "span",
                [["class", "color-white"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.changeLang("vi") && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("app.lang.vi_title"))
              );
            }
          );
        }
        function Fl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "span",
                [["class", "color-white"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.changeLang("en") && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(), e.Lb(1, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(
                n,
                1,
                0,
                e.Mb(n, 1, 0, e.Db(n, 2).transform("app.lang.en_title"))
              );
            }
          );
        }
        function Tl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                5,
                "a",
                [["href", "javascript:void(0)"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                2,
                0,
                null,
                null,
                4,
                "div",
                [
                  [
                    "class",
                    "footer-item footer-item-icon footer-item-globe color-white-3 hover-line hover-c",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, Pl)),
              e.qb(
                4,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Fl)),
              e.qb(
                6,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
            ],
            function (l, n) {
              var u = n.component;
              l(n, 4, 0, "en" === u.lang), l(n, 6, 0, "vi" === u.lang);
            },
            null
          );
        }
        function jl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                781,
                "div",
                [],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                780,
                "div",
                [["class", "height-100"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, V)),
              e.qb(
                3,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, K)),
              e.qb(
                5,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, O)),
              e.qb(
                7,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(),
              e.rb(
                8,
                0,
                null,
                null,
                1,
                "div",
                [["class", "logo-top"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                9,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["src", "assets/images/logo-white.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                10,
                0,
                null,
                null,
                712,
                "div",
                [["class", "table login-wrap"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                11,
                0,
                null,
                null,
                711,
                "div",
                [["class", "td"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                12,
                0,
                null,
                null,
                710,
                "div",
                [["class", "login"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                13,
                0,
                null,
                null,
                709,
                "div",
                [["class", "login-main"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                14,
                0,
                null,
                null,
                708,
                "div",
                [["class", "login-form-main"]],
                null,
                null,
                null,
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                16,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(17, { "login-form-main--big": 0 }),
              (l()(),
              e.rb(
                18,
                0,
                null,
                null,
                704,
                "div",
                [["class", "login-form-main-wrap"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                19,
                0,
                null,
                null,
                1,
                "div",
                [["class", "login-logo mb15 text-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                20,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["src", "assets/images/logo-digibank.svg"],
                  ["width", "208"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                21,
                0,
                null,
                null,
                2,
                "div",
                [["class", "login-welcome color-black text-center pb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(22, null, ["", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                24,
                0,
                null,
                null,
                0,
                "input",
                [
                  ["class", "hidden"],
                  ["id", "login-alert-1"],
                  ["type", "checkbox"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, A)),
              e.qb(
                26,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, B)),
              e.qb(
                28,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, U)),
              e.qb(
                30,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, G)),
              e.qb(
                32,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, H)),
              e.qb(
                34,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, R)),
              e.qb(
                36,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Q)),
              e.qb(
                38,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, z)),
              e.qb(
                40,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, J)),
              e.qb(
                42,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Y)),
              e.qb(
                44,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, W)),
              e.qb(
                46,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, X)),
              e.qb(
                48,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Z)),
              e.qb(
                50,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, ll)),
              e.qb(
                52,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, nl)),
              e.qb(
                54,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, ul)),
              e.qb(
                56,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, el)),
              e.qb(
                58,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, tl)),
              e.qb(
                60,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, sl)),
              e.qb(
                62,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, rl)),
              e.qb(
                64,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, il)),
              e.qb(
                66,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, al)),
              e.qb(
                68,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, ol)),
              e.qb(
                70,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, bl)),
              e.qb(
                72,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, cl)),
              e.qb(
                74,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, gl)),
              e.qb(
                76,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, dl)),
              e.qb(
                78,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, hl)),
              e.qb(
                80,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, ml)),
              e.qb(
                82,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, pl)),
              e.qb(
                84,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, fl)),
              e.qb(
                86,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, vl)),
              e.qb(
                88,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Cl)),
              e.qb(
                90,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Dl)),
              e.qb(
                92,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, kl)),
              e.qb(
                94,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, yl)),
              e.qb(
                96,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, _l)),
              e.qb(
                98,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Il)),
              e.qb(
                100,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(),
              e.rb(
                101,
                0,
                null,
                null,
                621,
                "div",
                [["class", "login-form list-mb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                102,
                0,
                null,
                null,
                94,
                "form",
                [
                  ["class", "form-vertical no-m"],
                  ["name", "loginForm"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "ngSubmit"],
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 107).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 107).onReset() && t),
                    "ngSubmit" === n && (t = !1 !== s.onSubmit() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                104,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(105, { hidden: 0 }),
              e.qb(106, 16384, null, 0, c.C, [], null, null),
              e.qb(
                107,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                { ngSubmit: "ngSubmit" }
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(109, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                110,
                0,
                null,
                null,
                86,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                111,
                0,
                null,
                null,
                16,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                112,
                0,
                null,
                null,
                15,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                113,
                0,
                null,
                null,
                10,
                "input",
                [
                  ["autocomplete", "off"],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "username"],
                  ["id", "username"],
                  ["maxlength", "100"],
                  ["name", "username"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 117)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 117).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 117)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 117)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onUsernameKeyIn(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                115,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(116, { "input-hadval": 0 }),
              e.qb(117, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                118,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                121,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(123, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                124,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                125,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(126, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                128,
                0,
                null,
                null,
                27,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                129,
                0,
                null,
                null,
                26,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                130,
                0,
                null,
                null,
                15,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                131,
                0,
                null,
                null,
                10,
                "input",
                [
                  ["autocomplete", "off"],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "password"],
                  ["maxlength", "20"],
                  ["name", "pass"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 135)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 135).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 135)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 135)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "1") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                133,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(134, { "input-hadval": 0, inputkey: 1 }),
              e.qb(135, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                136,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                139,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(141, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                142,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                143,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(144, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                146,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                147,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                148,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                149,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HidePass"],
                  ["name", "hidepass1"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 150).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 150).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(150, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                152,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(154, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                155,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                156,
                0,
                null,
                null,
                24,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                157,
                0,
                null,
                null,
                23,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                158,
                0,
                null,
                null,
                15,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                159,
                0,
                null,
                null,
                10,
                "input",
                [
                  ["autocomplete", "off"],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "captcha"],
                  ["maxlength", "5"],
                  ["name", "captcha"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 163)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 163).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 163)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 163)._compositionEnd(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                161,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(162, { "input-hadval": 0 }),
              e.qb(163, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                164,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                167,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(169, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                170,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                171,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(172, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                174,
                0,
                null,
                null,
                2,
                "div",
                [["class", "input-group-slot no-border captcha"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                175,
                0,
                null,
                null,
                1,
                "div",
                [["class", "input-group-slot-inner"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                176,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["width", "100"],
                ],
                [[8, "src", 4]],
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                177,
                0,
                null,
                null,
                3,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                178,
                0,
                null,
                null,
                2,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                179,
                0,
                null,
                null,
                1,
                "a",
                [
                  ["class", "ubtn ubg-secondary ubtn-sm ripple no-m"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.refreshCaptcha() && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                180,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["src", "assets/images/web/icons/dark/ic_reload.svg"],
                  ["width", "24"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                181,
                0,
                null,
                null,
                15,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                182,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                183,
                0,
                null,
                null,
                3,
                "button",
                [
                  ["class", "no-m ubtn ubg-primary ubtn-md ripple"],
                  ["id", "btnLogin"],
                  ["type", "submit"],
                ],
                [[8, "disabled", 0]],
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                184,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(185, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                187,
                0,
                null,
                null,
                9,
                "div",
                [["class", "text-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                188,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "link hover-line"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.forgotPassword() && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(), e.Lb(189, null, ["", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                191,
                0,
                null,
                null,
                5,
                "a",
                [
                  [
                    "class",
                    "d-flex justify-content-center mt10 align-items-center",
                  ],
                  ["target", "_blank"],
                ],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(192, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                194,
                0,
                null,
                null,
                2,
                "span",
                [["class", "link"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(195, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                197,
                0,
                null,
                null,
                10,
                "div",
                [
                  ["class", "form-vertical no-m"],
                  ["name", "crosslogin"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                199,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(200, { hidden: 0 }),
              (l()(),
              e.rb(
                201,
                0,
                null,
                null,
                6,
                "div",
                [["class", "mb-5"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                202,
                0,
                null,
                null,
                5,
                "span",
                [],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(203, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                205,
                0,
                null,
                null,
                0,
                "span",
                [["id", "countdown"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(206, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                208,
                0,
                null,
                null,
                34,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m"],
                  ["name", "loginForm2"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 213).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 213).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                210,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(211, { hidden: 0 }),
              e.qb(212, 16384, null, 0, c.C, [], null, null),
              e.qb(
                213,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(215, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                216,
                0,
                null,
                null,
                26,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                217,
                0,
                null,
                null,
                19,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                218,
                0,
                null,
                null,
                15,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                219,
                0,
                null,
                null,
                10,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "CMND"],
                  ["maxlength", "40"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 223)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 223).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 223)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 223)._compositionEnd(u.target.value) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                221,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(222, { "input-hadval": 0 }),
              e.qb(223, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                224,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                227,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(229, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                230,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                231,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(232, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                234,
                0,
                null,
                null,
                2,
                "p",
                [["class", "mt20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(235, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                237,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                238,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                239,
                0,
                null,
                null,
                3,
                "button",
                [["class", "no-m ubtn ubg-primary ubtn-md ripple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm2() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                240,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(241, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                243,
                0,
                null,
                null,
                37,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m"],
                  ["name", "loginForm3"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 248).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 248).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                245,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(246, { hidden: 0 }),
              e.qb(247, 16384, null, 0, c.C, [], null, null),
              e.qb(
                248,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(250, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                251,
                0,
                null,
                null,
                29,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                252,
                0,
                null,
                null,
                22,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                253,
                0,
                null,
                null,
                20,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                254,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["appNumber", ""],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "OTP"],
                  ["maxlength", "6"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                  [null, "keydown"],
                  [null, "paste"],
                  [null, "copy"],
                  [null, "cut"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 258)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 258).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 258)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 258)._compositionEnd(u.target.value) && t),
                    "keydown" === n &&
                      (t = !1 !== e.Db(l, 265).onKeydown(u) && t),
                    "paste" === n && (t = !1 !== e.Db(l, 265).blockPaste(u) && t),
                    "copy" === n && (t = !1 !== e.Db(l, 265).blockCopy(u) && t),
                    "cut" === n && (t = !1 !== e.Db(l, 265).blockCut(u) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                256,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(257, { "input-hadval": 0 }),
              e.qb(258, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                259,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                262,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(264, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.qb(265, 16384, null, 0, p.a, [], null, null),
              (l()(),
              e.rb(
                266,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                267,
                0,
                null,
                null,
                6,
                "div",
                [["class", "mt10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(268, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                270,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "color-primary hover-line link"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0,
                    t = l.component;
                  return (
                    "click" === n &&
                      (e = !1 !== t.resendOTP(t.loginForm.value.username) && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(), e.Lb(271, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(), e.Lb(-1, null, [". "])),
              (l()(),
              e.rb(
                274,
                0,
                null,
                null,
                0,
                "p",
                [
                  ["class", "text-warning mt20"],
                  ["id", "countdown"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                275,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                276,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                277,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "no-m ubtn ubg-primary ubtn-md ripple"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm3() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                278,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(279, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                281,
                0,
                null,
                null,
                118,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m formValidator4"],
                  ["data-parsley-validate", ""],
                  ["name", "loginForm4"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 286).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 286).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                283,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(284, { hidden: 0 }),
              e.qb(285, 16384, null, 0, c.C, [], null, null),
              e.qb(
                286,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(288, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                289,
                0,
                null,
                null,
                110,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                290,
                0,
                null,
                null,
                32,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                291,
                0,
                null,
                null,
                31,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                292,
                0,
                null,
                null,
                20,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                293,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-ic-xs input-xs input-material"],
                  ["formControlName", "DefaultPass"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 297)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 297).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 297)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 297)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "4.1") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                295,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(296, { "input-hadval": 0, inputkey: 1 }),
              e.qb(297, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                298,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                299,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                302,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(304, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                306,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                307,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(308, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                310,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "input-ic clickable pointer text-center"],
                  ["data-toggle", "popover"],
                  ["role", "button"],
                  ["tabindex", "0"],
                ],
                [[1, "data-content", 0]],
                null,
                null,
                null,
                null
              )),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                312,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["class", "ic-sm"],
                  ["src", "assets/images/web/icons/dark/ic_info.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                313,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                314,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                315,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                316,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideDefaultPass"],
                  ["name", "hidepass41"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 317).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 317).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(317, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                319,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(321, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                322,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                323,
                0,
                null,
                null,
                32,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                324,
                0,
                null,
                null,
                31,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                325,
                0,
                null,
                null,
                20,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                326,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-ic-xs input-xs input-material"],
                  ["formControlName", "NewPass"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 330)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 330).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 330)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 330)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "4.2") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                328,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(329, { "input-hadval": 0, inputkey: 1 }),
              e.qb(330, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                331,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                332,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                335,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(337, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                339,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                340,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(341, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                343,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "input-ic clickable pointer text-center"],
                  ["data-toggle", "popover"],
                  ["role", "button"],
                  ["tabindex", "0"],
                ],
                [[1, "data-content", 0]],
                null,
                null,
                null,
                null
              )),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                345,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["class", "ic-sm"],
                  ["src", "assets/images/web/icons/dark/ic_info.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                346,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                347,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                348,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                349,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideNewPass"],
                  ["name", "hidepass42"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 350).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 350).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(350, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                352,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(354, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                355,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                356,
                0,
                null,
                null,
                29,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                357,
                0,
                null,
                null,
                28,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                358,
                0,
                null,
                null,
                17,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                359,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "NewPassConfirm"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 363)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 363).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 363)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 363)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "4.3") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                361,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(362, { "input-hadval": 0, inputkey: 1 }),
              e.qb(363, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                364,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                365,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                368,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(370, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                372,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                373,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(374, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                376,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                377,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                378,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                379,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideNewPassConfirm"],
                  ["name", "hidepass43"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 380).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 380).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(380, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                382,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(384, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                385,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                386,
                0,
                null,
                null,
                13,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                387,
                0,
                null,
                null,
                12,
                "div",
                [["class", "row"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                388,
                0,
                null,
                null,
                5,
                "div",
                [["class", "col-6 col-sm-6"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                389,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                390,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "ubtn ubg-secondary ubtn-md ripple legitRipple"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.changePage("1") && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                391,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(392, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                394,
                0,
                null,
                null,
                5,
                "div",
                [["class", "col-6 col-sm-"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                395,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                396,
                0,
                null,
                null,
                3,
                "button",
                [["class", "ubtn ubg-primary ubtn-md ripple legitRipple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm4() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                397,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(398, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                400,
                0,
                null,
                null,
                45,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m"],
                  ["name", "loginForm41"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 405).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 405).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                402,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(403, { hidden: 0 }),
              e.qb(404, 16384, null, 0, c.C, [], null, null),
              e.qb(
                405,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(407, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                408,
                0,
                null,
                null,
                37,
                "div",
                [["class", "row justify-content-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                409,
                0,
                null,
                null,
                28,
                "div",
                [["class", "col-sm-12"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                410,
                0,
                null,
                null,
                27,
                "div",
                [["class", "list-pb20 mb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                411,
                0,
                null,
                null,
                26,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                412,
                0,
                null,
                null,
                16,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                413,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["appNumber", ""],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "OTP"],
                  ["maxlength", "6"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                  [null, "keydown"],
                  [null, "paste"],
                  [null, "copy"],
                  [null, "cut"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 417)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 417).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 417)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 417)._compositionEnd(u.target.value) && t),
                    "keydown" === n &&
                      (t = !1 !== e.Db(l, 424).onKeydown(u) && t),
                    "paste" === n && (t = !1 !== e.Db(l, 424).blockPaste(u) && t),
                    "copy" === n && (t = !1 !== e.Db(l, 424).blockCopy(u) && t),
                    "cut" === n && (t = !1 !== e.Db(l, 424).blockCut(u) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                415,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(416, { "input-hadval": 0 }),
              e.qb(417, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                418,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                421,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(423, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.qb(424, 16384, null, 0, p.a, [], null, null),
              (l()(),
              e.rb(
                425,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                426,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(427, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                429,
                0,
                null,
                null,
                7,
                "div",
                [["class", "mt10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(430, null, ["", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                432,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "color-primary link"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0,
                    t = l.component;
                  return (
                    "click" === n &&
                      (e = !1 !== t.resendOTP(t.loginForm.value.username) && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                433,
                0,
                null,
                null,
                2,
                "span",
                [["class", "u"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(434, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(), e.Lb(-1, null, [". "])),
              (l()(),
              e.rb(
                437,
                0,
                null,
                null,
                0,
                "p",
                [
                  ["class", "text-warning mt20"],
                  ["id", "countdown"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                438,
                0,
                null,
                null,
                7,
                "div",
                [["class", "col-sm-12"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                439,
                0,
                null,
                null,
                6,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                440,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                441,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                442,
                0,
                null,
                null,
                3,
                "button",
                [["class", "no-m ubtn ubg-primary ubtn-md ripple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm41() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                443,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(444, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                446,
                0,
                null,
                null,
                119,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m formValidator5"],
                  ["data-parsley-validate", ""],
                  ["name", "loginForm5"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 451).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 451).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                448,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(449, { hidden: 0 }),
              e.qb(450, 16384, null, 0, c.C, [], null, null),
              e.qb(
                451,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(453, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                454,
                0,
                null,
                null,
                111,
                "div",
                [["class", "row"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                455,
                0,
                null,
                null,
                25,
                "div",
                [["class", "col-sm-6"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                456,
                0,
                null,
                null,
                24,
                "div",
                [["class", "list-pb20 mb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                457,
                0,
                null,
                null,
                6,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, ql)),
              e.qb(
                459,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, wl)),
              e.qb(
                461,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Nl)),
              e.qb(
                463,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(),
              e.rb(
                464,
                0,
                null,
                null,
                6,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                465,
                0,
                null,
                null,
                5,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                466,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(467, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                469,
                0,
                null,
                null,
                1,
                "app-select2-common",
                [["placeholder", ""]],
                null,
                [[null, "valueChange"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "valueChange" === n &&
                      (e = !1 !== l.component.onAccountNoChanged(u) && e),
                    e
                  );
                },
                d.b,
                d.a
              )),
              e.qb(
                470,
                13352960,
                null,
                0,
                h.a,
                [e.k, e.h, m.a, o.k],
                {
                  class: [0, "class"],
                  placeholder: [1, "placeholder"],
                  searchBox: [2, "searchBox"],
                  data: [3, "data"],
                  value: [4, "value"],
                },
                { valueChange: "valueChange" }
              ),
              (l()(),
              e.rb(
                471,
                0,
                null,
                null,
                9,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                472,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, Sl)),
              e.qb(
                474,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, xl)),
              e.qb(
                476,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(),
              e.rb(
                477,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                478,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(479, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                481,
                0,
                null,
                null,
                61,
                "div",
                [["class", "col-sm-6"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                482,
                0,
                null,
                null,
                60,
                "div",
                [["class", "list-pb20 mb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                483,
                0,
                null,
                null,
                29,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                484,
                0,
                null,
                null,
                28,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                485,
                0,
                null,
                null,
                17,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                486,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "Pass"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 490)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 490).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 490)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 490)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "5.1") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                488,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(489, { "input-hadval": 0, inputkey: 1 }),
              e.qb(490, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                491,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                492,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                495,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(497, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                499,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                500,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(501, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                503,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                504,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                505,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                506,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HidePass"],
                  ["name", "hidepass51"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 507).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 507).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(507, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                509,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(511, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                512,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                513,
                0,
                null,
                null,
                29,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                514,
                0,
                null,
                null,
                28,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                515,
                0,
                null,
                null,
                17,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                516,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "PassConfirm"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 520)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 520).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 520)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 520)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "5.2") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                518,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(519, { "input-hadval": 0, inputkey: 1 }),
              e.qb(520, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                521,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                522,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                525,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(527, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                529,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                530,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(531, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                533,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                534,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                535,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                536,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HidePassConfirm"],
                  ["name", "hidepass52"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 537).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 537).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(537, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                539,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(541, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                542,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                543,
                0,
                null,
                null,
                22,
                "div",
                [["class", "col-sm-12"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                544,
                0,
                null,
                null,
                21,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                545,
                0,
                null,
                null,
                14,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                546,
                0,
                null,
                null,
                13,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                547,
                0,
                null,
                null,
                12,
                "label",
                [["class", "checkbox"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                548,
                0,
                null,
                null,
                8,
                "input",
                [
                  ["class", "hidden"],
                  ["formControlName", "Confirm"],
                  ["name", "checkbox2"],
                  ["required", ""],
                  ["type", "checkbox"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 549).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 549).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(549, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.qb(
                550,
                16384,
                null,
                0,
                c.c,
                [],
                { required: [0, "required"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.c]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                553,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(555, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                557,
                0,
                null,
                null,
                0,
                "span",
                [["class", "checkbox-ic checkbox-sm checkbox-style-2"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(558, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                560,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                561,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                562,
                0,
                null,
                null,
                3,
                "button",
                [["class", "no-m ubtn ubg-primary ubtn-md ripple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm5() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                563,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(564, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                566,
                0,
                null,
                null,
                45,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m"],
                  ["name", "loginForm51"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 571).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 571).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                568,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(569, { hidden: 0 }),
              e.qb(570, 16384, null, 0, c.C, [], null, null),
              e.qb(
                571,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(573, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                574,
                0,
                null,
                null,
                37,
                "div",
                [["class", "row justify-content-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                575,
                0,
                null,
                null,
                28,
                "div",
                [["class", "col-sm-12"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                576,
                0,
                null,
                null,
                27,
                "div",
                [["class", "list-pb20 mb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                577,
                0,
                null,
                null,
                26,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                578,
                0,
                null,
                null,
                16,
                "div",
                [["class", "input-group input-group-material"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                579,
                0,
                null,
                null,
                11,
                "input",
                [
                  ["appNumber", ""],
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "OTP"],
                  ["maxlength", "6"],
                  ["placeholder", ""],
                  ["type", "text"],
                ],
                [
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                  [null, "keydown"],
                  [null, "paste"],
                  [null, "copy"],
                  [null, "cut"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 583)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 583).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 583)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 583)._compositionEnd(u.target.value) && t),
                    "keydown" === n &&
                      (t = !1 !== e.Db(l, 590).onKeydown(u) && t),
                    "paste" === n && (t = !1 !== e.Db(l, 590).blockPaste(u) && t),
                    "copy" === n && (t = !1 !== e.Db(l, 590).blockCopy(u) && t),
                    "cut" === n && (t = !1 !== e.Db(l, 590).blockCut(u) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                581,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(582, { "input-hadval": 0 }),
              e.qb(583, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                584,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l) {
                  return [l];
                },
                [c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                587,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(589, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.qb(590, 16384, null, 0, p.a, [], null, null),
              (l()(),
              e.rb(
                591,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                592,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(593, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                595,
                0,
                null,
                null,
                7,
                "div",
                [["class", "mt10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(596, null, ["", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                598,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "color-primary link"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0,
                    t = l.component;
                  return (
                    "click" === n &&
                      (e = !1 !== t.resendOTP(t.loginForm5.value.username) && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                599,
                0,
                null,
                null,
                2,
                "span",
                [["class", "u"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(600, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(), e.Lb(-1, null, [". "])),
              (l()(),
              e.rb(
                603,
                0,
                null,
                null,
                0,
                "p",
                [
                  ["class", "text-warning mt20"],
                  ["id", "countdown"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                604,
                0,
                null,
                null,
                7,
                "div",
                [["class", "col-sm-12"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                605,
                0,
                null,
                null,
                6,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                606,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                607,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                608,
                0,
                null,
                null,
                3,
                "button",
                [["class", "no-m ubtn ubg-primary ubtn-md ripple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm51() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                609,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(610, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                612,
                0,
                null,
                null,
                110,
                "form",
                [
                  ["autocomplete", "off"],
                  ["class", "form-vertical no-m formValidator6"],
                  ["data-parsley-validate", ""],
                  ["name", "loginForm6"],
                  ["novalidate", ""],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "submit"],
                  [null, "reset"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "submit" === n && (t = !1 !== e.Db(l, 617).onSubmit(u) && t),
                    "reset" === n && (t = !1 !== e.Db(l, 617).onReset() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                614,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(615, { hidden: 0 }),
              e.qb(616, 16384, null, 0, c.C, [], null, null),
              e.qb(
                617,
                540672,
                null,
                0,
                c.h,
                [
                  [8, null],
                  [8, null],
                ],
                { form: [0, "form"] },
                null
              ),
              e.Ib(2048, null, c.d, null, [c.h]),
              e.qb(619, 16384, null, 0, c.p, [[4, c.d]], null, null),
              (l()(),
              e.rb(
                620,
                0,
                null,
                null,
                2,
                "p",
                [["class", "text-warning2"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(621, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                623,
                0,
                null,
                null,
                99,
                "div",
                [["class", "list-pb20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                624,
                0,
                null,
                null,
                29,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                625,
                0,
                null,
                null,
                28,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                626,
                0,
                null,
                null,
                17,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                627,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-ic-xs input-xs input-material"],
                  ["formControlName", "DefaultPass"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 631)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 631).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 631)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 631)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "6.1") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                629,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(630, { "input-hadval": 0, inputkey: 1 }),
              e.qb(631, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                632,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                633,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                636,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(638, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                640,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                641,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(642, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                644,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                645,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                646,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                647,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideDefaultPass"],
                  ["name", "hidepass61"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 648).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 648).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(648, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                650,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(652, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                653,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                654,
                0,
                null,
                null,
                32,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                655,
                0,
                null,
                null,
                31,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                656,
                0,
                null,
                null,
                20,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                657,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-ic-xs input-xs input-material"],
                  ["formControlName", "NewPass"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 661)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 661).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 661)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 661)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "6.2") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                659,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(660, { "input-hadval": 0, inputkey: 1 }),
              e.qb(661, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                662,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                663,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                666,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(668, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                670,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                671,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(672, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                674,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "input-ic clickable pointer"],
                  ["data-toggle", "popover"],
                  ["role", "button"],
                  ["tabindex", "0"],
                ],
                [[1, "data-content", 0]],
                null,
                null,
                null,
                null
              )),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                676,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["class", "ic-sm"],
                  ["src", "assets/images/web/icons/dark/ic_info.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                677,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                678,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                679,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                680,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideNewPass"],
                  ["name", "hidepass62"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 681).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 681).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(681, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                683,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(685, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                686,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                687,
                0,
                null,
                null,
                29,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                688,
                0,
                null,
                null,
                28,
                "div",
                [
                  [
                    "class",
                    "input-group-flex input-group-material input-group-slot-line",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                689,
                0,
                null,
                null,
                17,
                "div",
                [["class", "input-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                690,
                0,
                null,
                null,
                12,
                "input",
                [
                  ["autocorrect", "off"],
                  ["class", "input input-xs input-material"],
                  ["formControlName", "NewPassConfirm"],
                  ["maxlength", "20"],
                  ["placeholder", ""],
                  ["required", ""],
                  ["type", "text"],
                ],
                [
                  [1, "data-parsley-required-message", 0],
                  [1, "required", 0],
                  [1, "maxlength", 0],
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "input"],
                  [null, "cut"],
                  [null, "copy"],
                  [null, "blur"],
                  [null, "compositionstart"],
                  [null, "compositionend"],
                ],
                function (l, n, u) {
                  var t = !0,
                    s = l.component;
                  return (
                    "input" === n &&
                      (t = !1 !== e.Db(l, 694)._handleInput(u.target.value) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 694).onTouched() && t),
                    "compositionstart" === n &&
                      (t = !1 !== e.Db(l, 694)._compositionStart() && t),
                    "compositionend" === n &&
                      (t =
                        !1 !== e.Db(l, 694)._compositionEnd(u.target.value) && t),
                    "input" === n &&
                      (t = !1 !== s.onPasswordKeyIn(u.target.value, "6.3") && t),
                    "cut" === n && (t = !1 !== u.preventDefault() && t),
                    "copy" === n && (t = !1 !== u.preventDefault() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.Ib(512, null, b.v, b.w, [e.q, e.r, e.k, e.C]),
              e.qb(
                692,
                278528,
                null,
                0,
                b.l,
                [b.v],
                { klass: [0, "klass"], ngClass: [1, "ngClass"] },
                null
              ),
              e.Gb(693, { "input-hadval": 0, inputkey: 1 }),
              e.qb(694, 16384, null, 0, c.e, [e.C, e.k, [2, c.a]], null, null),
              e.qb(
                695,
                16384,
                null,
                0,
                c.v,
                [],
                { required: [0, "required"] },
                null
              ),
              e.qb(
                696,
                540672,
                null,
                0,
                c.j,
                [],
                { maxlength: [0, "maxlength"] },
                null
              ),
              e.Ib(
                1024,
                null,
                c.l,
                function (l, n) {
                  return [l, n];
                },
                [c.v, c.j]
              ),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.e]
              ),
              e.qb(
                699,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [6, c.l],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(701, 16384, null, 0, c.o, [[4, c.n]], null, null),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                703,
                0,
                null,
                null,
                0,
                "div",
                [["class", "input-line-bar"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                704,
                0,
                null,
                null,
                2,
                "label",
                [["class", "input-label"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(705, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                707,
                0,
                null,
                null,
                9,
                "div",
                [["class", "input-group-slot no-border"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                708,
                0,
                null,
                null,
                8,
                "div",
                [["class", "input-group-slot-inner no-mr"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                709,
                0,
                null,
                null,
                7,
                "label",
                [
                  ["class", "ubtn ubg-secondary login-eye"],
                  ["data-tooltip", "tooltip"],
                  ["title", ""],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                710,
                0,
                null,
                null,
                5,
                "input",
                [
                  ["checked", ""],
                  ["class", "hidden"],
                  ["formControlName", "HideNewPassConfirm"],
                  ["name", "hidepass63"],
                  ["type", "checkbox"],
                ],
                [
                  [2, "ng-untouched", null],
                  [2, "ng-touched", null],
                  [2, "ng-pristine", null],
                  [2, "ng-dirty", null],
                  [2, "ng-valid", null],
                  [2, "ng-invalid", null],
                  [2, "ng-pending", null],
                ],
                [
                  [null, "change"],
                  [null, "blur"],
                ],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "change" === n &&
                      (t = !1 !== e.Db(l, 711).onChange(u.target.checked) && t),
                    "blur" === n && (t = !1 !== e.Db(l, 711).onTouched() && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(711, 16384, null, 0, c.b, [e.C, e.k], null, null),
              e.Ib(
                1024,
                null,
                c.m,
                function (l) {
                  return [l];
                },
                [c.b]
              ),
              e.qb(
                713,
                671744,
                null,
                0,
                c.g,
                [
                  [3, c.d],
                  [8, null],
                  [8, null],
                  [6, c.m],
                  [2, c.A],
                ],
                { name: [0, "name"] },
                null
              ),
              e.Ib(2048, null, c.n, null, [c.g]),
              e.qb(715, 16384, null, 0, c.o, [[4, c.n]], null, null),
              (l()(),
              e.rb(
                716,
                0,
                null,
                null,
                0,
                "div",
                [["class", "login-eye-slash"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                717,
                0,
                null,
                null,
                5,
                "div",
                [["class", "form-group"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                718,
                0,
                null,
                null,
                4,
                "div",
                [["class", "ubtn-wrap-width-full mb15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                719,
                0,
                null,
                null,
                3,
                "button",
                [["class", "no-m ubtn ubg-primary ubtn-md ripple"]],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n && (e = !1 !== l.component.confirm6() && e), e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                720,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(721, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                723,
                0,
                null,
                null,
                58,
                "footer",
                [["class", "login-footer"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                724,
                0,
                null,
                null,
                57,
                "div",
                [["class", "row row-10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                725,
                0,
                null,
                null,
                44,
                "div",
                [["class", "col"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                726,
                0,
                null,
                null,
                43,
                "div",
                [
                  [
                    "class",
                    "row row-10 justify-content-md-start justify-content-center",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                727,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                728,
                0,
                null,
                null,
                5,
                "a",
                [["target", "_blank"]],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(729, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                731,
                0,
                null,
                null,
                2,
                "div",
                [["class", "footer-item color-white-3 hover-line hover-c"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(732, null, [" ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                734,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, [" | "])),
              (l()(),
              e.rb(
                736,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                737,
                0,
                null,
                null,
                5,
                "a",
                [["target", "_blank"]],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(738, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                740,
                0,
                null,
                null,
                2,
                "div",
                [["class", "footer-item color-white-3 hover-line hover-c"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(741, null, [" ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                743,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, [" | "])),
              (l()(),
              e.rb(
                745,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                746,
                0,
                null,
                null,
                5,
                "a",
                [["target", "_blank"]],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(747, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                749,
                0,
                null,
                null,
                2,
                "div",
                [["class", "footer-item color-white-3 hover-line hover-c"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(750, null, [" ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                752,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, [" | "])),
              (l()(),
              e.rb(
                754,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                755,
                0,
                null,
                null,
                5,
                "a",
                [["target", "_blank"]],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(756, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                758,
                0,
                null,
                null,
                2,
                "div",
                [["class", "footer-item color-white-3 hover-line hover-c"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(759, null, [" ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                761,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, [" | "])),
              (l()(),
              e.rb(
                763,
                0,
                null,
                null,
                6,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                764,
                0,
                null,
                null,
                5,
                "a",
                [["target", "_blank"]],
                [[8, "href", 4]],
                null,
                null,
                null,
                null
              )),
              e.Gb(765, { domain: 0 }),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                767,
                0,
                null,
                null,
                2,
                "div",
                [["class", "footer-item color-white-3 hover-line hover-c"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(768, null, [" ", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                770,
                0,
                null,
                null,
                11,
                "div",
                [["class", "col-md-auto ml-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                771,
                0,
                null,
                null,
                10,
                "div",
                [["class", "row justify-content-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                772,
                0,
                null,
                null,
                7,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                773,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "hidden-xs"],
                  ["data-target", "#modalLh"],
                  ["data-toggle", "modal"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                774,
                0,
                null,
                null,
                2,
                "div",
                [
                  [
                    "class",
                    "footer-item footer-item-icon footer-item-lh color-white-3 hover-line hover-c",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(775, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                777,
                0,
                null,
                null,
                2,
                "a",
                [
                  ["class", "show-xs"],
                  ["data-target", "#modalLh"],
                  ["data-toggle", "modal"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                778,
                0,
                null,
                null,
                1,
                "div",
                [
                  [
                    "class",
                    "footer-item footer-item-icon footer-item-phone color-white-3 hover-line hover-c",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, [" 1900 54 54 13 "])),
              (l()(), e.gb(16777216, null, null, 1, null, Tl)),
              e.qb(
                781,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
            ],
            function (l, n) {
              var u = n.component;
              l(n, 3, 0, 1 == u.sessionTime),
                l(n, 5, 0, 2 == u.sessionTime),
                l(n, 7, 0, 3 == u.sessionTime);
              var e = l(n, 17, 0, "5" == u.loginPage);
              l(n, 16, 0, "login-form-main", e),
                l(n, 26, 0, "1" == u.loginPage),
                l(n, 28, 0, "2" == u.loginPage),
                l(n, 30, 0, "3" == u.loginPage),
                l(n, 32, 0, "5" == u.loginPage),
                l(n, 34, 0, "4" == u.loginPage),
                l(n, 36, 0, "4.1" == u.loginPage),
                l(n, 38, 0, "5.1" == u.loginPage),
                l(n, 40, 0, "user_name_require" == u.loginErrorCode),
                l(n, 42, 0, "password_require" == u.loginErrorCode),
                l(n, 44, 0, "captcha_require" == u.loginErrorCode),
                l(n, 46, 0, "app_error_not_defined" == u.loginErrorCode),
                l(n, 48, 0, "captcha_wrong" == u.loginErrorCode),
                l(n, 50, 0, "captcha_expire" == u.loginErrorCode),
                l(n, 52, 0, "cross_login_timeout" == u.loginErrorCode),
                l(n, 54, 0, "cross_login_reject" == u.loginErrorCode),
                l(n, 56, 0, "get_ib_data_failed" == u.loginErrorCode),
                l(n, 58, 0, "other" == u.loginErrorCode),
                l(n, 60, 0, "issue_no_require" == u.error2Code),
                l(n, 62, 0, "other" == u.error2Code),
                l(n, 64, 0, "otp_require" == u.error3Code),
                l(n, 66, 0, "otp_short" == u.error3Code),
                l(n, 68, 0, "other" == u.error3Code),
                l(n, 70, 0, "confirm_pass_wrong" == u.error4Code),
                l(n, 72, 0, "other" == u.error4Code),
                l(n, 74, 0, "otp_require" == u.error41Code),
                l(n, 76, 0, "otp_short" == u.error41Code),
                l(n, 78, 0, "other" == u.error41Code),
                l(n, 80, 0, "new_user_name_require" == u.error5Code),
                l(n, 82, 0, "new_account_require" == u.error5Code),
                l(n, 84, 0, "confirm_pass_wrong" == u.error5Code),
                l(n, 86, 0, "policy_require" == u.error5Code),
                l(n, 88, 0, "other" == u.error5Code),
                l(n, 90, 0, "otp_require" == u.error51Code),
                l(n, 92, 0, "otp_short" == u.error51Code),
                l(n, 94, 0, "other" == u.error51Code),
                l(n, 96, 0, "new_pass_wrong" == u.error6Code),
                l(n, 98, 0, "confirm_pass_wrong" == u.error6Code),
                l(n, 100, 0, "other" == u.error6Code);
              var t = l(n, 105, 0, "1" != u.loginPage);
              l(n, 104, 0, "form-vertical no-m", t), l(n, 107, 0, u.loginForm);
              var s = l(
                n,
                116,
                0,
                u.loginForm && "" != u.loginForm.value.username
              );
              l(n, 115, 0, "input input-xs input-material", s),
                l(n, 118, 0, "100"),
                l(n, 121, 0, "username");
              var r = l(
                n,
                134,
                0,
                u.loginForm && "" != u.loginForm.value.password,
                u.loginForm && u.loginForm.value.HidePass
              );
              l(n, 133, 0, "input input-xs input-material", r),
                l(n, 136, 0, "20"),
                l(n, 139, 0, "password"),
                l(n, 152, 0, "HidePass");
              var i = l(
                n,
                162,
                0,
                u.loginForm && "" != u.loginForm.value.captcha
              );
              l(n, 161, 0, "input input-xs input-material", i),
                l(n, 164, 0, "5"),
                l(n, 167, 0, "captcha");
              var a = l(n, 200, 0, "crosslogin" != u.loginPage);
              l(n, 199, 0, "form-vertical no-m", a);
              var o = l(n, 211, 0, "2" != u.loginPage);
              l(n, 210, 0, "form-vertical no-m", o), l(n, 213, 0, u.loginForm2);
              var b = l(n, 222, 0, "" != u.loginForm2.value.CMND);
              l(n, 221, 0, "input input-xs input-material", b),
                l(n, 224, 0, "40"),
                l(n, 227, 0, "CMND");
              var c = l(n, 246, 0, "3" != u.loginPage);
              l(n, 245, 0, "form-vertical no-m", c), l(n, 248, 0, u.loginForm3);
              var g = l(n, 257, 0, "" != u.loginForm3.value.OTP);
              l(n, 256, 0, "input input-xs input-material", g),
                l(n, 259, 0, "6"),
                l(n, 262, 0, "OTP");
              var d = l(n, 284, 0, "4" != u.loginPage);
              l(n, 283, 0, "form-vertical no-m formValidator4", d),
                l(n, 286, 0, u.loginForm4);
              var h = l(
                n,
                296,
                0,
                "" != u.loginForm4.value.DefaultPass,
                u.loginForm4.value.HideDefaultPass
              );
              l(n, 295, 0, "input input-ic-xs input-xs input-material", h),
                l(n, 298, 0, ""),
                l(n, 299, 0, "20"),
                l(n, 302, 0, "DefaultPass"),
                l(n, 319, 0, "HideDefaultPass");
              var m = l(
                n,
                329,
                0,
                "" != u.loginForm4.value.NewPass,
                u.loginForm4.value.HideNewPass
              );
              l(n, 328, 0, "input input-ic-xs input-xs input-material", m),
                l(n, 331, 0, ""),
                l(n, 332, 0, "20"),
                l(n, 335, 0, "NewPass"),
                l(n, 352, 0, "HideNewPass");
              var p = l(
                n,
                362,
                0,
                "" != u.loginForm4.value.NewPassConfirm,
                u.loginForm4.value.HideNewPassConfirm
              );
              l(n, 361, 0, "input input-xs input-material", p),
                l(n, 364, 0, ""),
                l(n, 365, 0, "20"),
                l(n, 368, 0, "NewPassConfirm"),
                l(n, 382, 0, "HideNewPassConfirm");
              var f = l(n, 403, 0, "4.1" != u.loginPage);
              l(n, 402, 0, "form-vertical no-m", f), l(n, 405, 0, u.loginForm41);
              var v = l(n, 416, 0, "" != u.loginForm41.value.OTP);
              l(n, 415, 0, "input input-xs input-material", v),
                l(n, 418, 0, "6"),
                l(n, 421, 0, "OTP");
              var C = l(n, 449, 0, "5" != u.loginPage);
              l(n, 448, 0, "form-vertical no-m formValidator5", C),
                l(n, 451, 0, u.loginForm5),
                l(n, 459, 0, 0 === u.loginForm5Data.listMobileNo.length),
                l(n, 461, 0, 1 === u.loginForm5Data.listMobileNo.length),
                l(n, 463, 0, u.loginForm5Data.listMobileNo.length > 1),
                l(
                  n,
                  470,
                  0,
                  "select-2 accountNo input input-ic-sm input-xs input-material input-hadval select2-hidden-accessible",
                  "",
                  !1,
                  u.accountNos,
                  u.accountNo
                ),
                l(n, 474, 0, 0 === u.loginForm5Data.listMobileNo.length),
                l(n, 476, 0, 0 !== u.loginForm5Data.listMobileNo.length);
              var D = l(
                n,
                489,
                0,
                "" != u.loginForm5.value.Pass,
                u.loginForm5.value.HidePass
              );
              l(n, 488, 0, "input input-xs input-material", D),
                l(n, 491, 0, ""),
                l(n, 492, 0, "20"),
                l(n, 495, 0, "Pass"),
                l(n, 509, 0, "HidePass");
              var k = l(
                n,
                519,
                0,
                "" != u.loginForm5.value.PassConfirm,
                u.loginForm5.value.HidePassConfirm
              );
              l(n, 518, 0, "input input-xs input-material", k),
                l(n, 521, 0, ""),
                l(n, 522, 0, "20"),
                l(n, 525, 0, "PassConfirm"),
                l(n, 539, 0, "HidePassConfirm"),
                l(n, 550, 0, ""),
                l(n, 553, 0, "Confirm");
              var y = l(n, 569, 0, "5.1" != u.loginPage);
              l(n, 568, 0, "form-vertical no-m", y), l(n, 571, 0, u.loginForm51);
              var _ = l(n, 582, 0, "" != u.loginForm51.value.OTP);
              l(n, 581, 0, "input input-xs input-material", _),
                l(n, 584, 0, "6"),
                l(n, 587, 0, "OTP");
              var I = l(n, 615, 0, "6" != u.loginPage);
              l(n, 614, 0, "form-vertical no-m formValidator6", I),
                l(n, 617, 0, u.loginForm6);
              var q = l(
                n,
                630,
                0,
                "" != u.loginForm6.value.DefaultPass,
                u.loginForm6.value.HideDefaultPass
              );
              l(n, 629, 0, "input input-ic-xs input-xs input-material", q),
                l(n, 632, 0, ""),
                l(n, 633, 0, "20"),
                l(n, 636, 0, "DefaultPass"),
                l(n, 650, 0, "HideDefaultPass");
              var w = l(
                n,
                660,
                0,
                "" != u.loginForm6.value.NewPass,
                u.loginForm6.value.HideNewPass
              );
              l(n, 659, 0, "input input-ic-xs input-xs input-material", w),
                l(n, 662, 0, ""),
                l(n, 663, 0, "20"),
                l(n, 666, 0, "NewPass"),
                l(n, 683, 0, "HideNewPass");
              var N = l(
                n,
                693,
                0,
                "" != u.loginForm6.value.NewPassConfirm,
                u.loginForm6.value.HideNewPassConfirm
              );
              l(n, 692, 0, "input input-xs input-material", N),
                l(n, 695, 0, ""),
                l(n, 696, 0, "20"),
                l(n, 699, 0, "NewPassConfirm"),
                l(n, 713, 0, "HideNewPassConfirm"),
                l(n, 781, 0, "1" === u.loginPage);
            },
            function (l, n) {
              var u = n.component;
              l(n, 22, 0, e.Mb(n, 22, 0, e.Db(n, 23).transform("wellcome"))),
                l(
                  n,
                  102,
                  0,
                  e.Db(n, 109).ngClassUntouched,
                  e.Db(n, 109).ngClassTouched,
                  e.Db(n, 109).ngClassPristine,
                  e.Db(n, 109).ngClassDirty,
                  e.Db(n, 109).ngClassValid,
                  e.Db(n, 109).ngClassInvalid,
                  e.Db(n, 109).ngClassPending
                ),
                l(
                  n,
                  113,
                  0,
                  e.Db(n, 118).maxlength ? e.Db(n, 118).maxlength : null,
                  e.Db(n, 123).ngClassUntouched,
                  e.Db(n, 123).ngClassTouched,
                  e.Db(n, 123).ngClassPristine,
                  e.Db(n, 123).ngClassDirty,
                  e.Db(n, 123).ngClassValid,
                  e.Db(n, 123).ngClassInvalid,
                  e.Db(n, 123).ngClassPending
                ),
                l(
                  n,
                  126,
                  0,
                  e.Mb(n, 126, 0, e.Db(n, 127).transform("user_name_label"))
                ),
                l(
                  n,
                  131,
                  0,
                  e.Db(n, 136).maxlength ? e.Db(n, 136).maxlength : null,
                  e.Db(n, 141).ngClassUntouched,
                  e.Db(n, 141).ngClassTouched,
                  e.Db(n, 141).ngClassPristine,
                  e.Db(n, 141).ngClassDirty,
                  e.Db(n, 141).ngClassValid,
                  e.Db(n, 141).ngClassInvalid,
                  e.Db(n, 141).ngClassPending
                ),
                l(
                  n,
                  144,
                  0,
                  e.Mb(n, 144, 0, e.Db(n, 145).transform("password_label"))
                ),
                l(
                  n,
                  149,
                  0,
                  e.Db(n, 154).ngClassUntouched,
                  e.Db(n, 154).ngClassTouched,
                  e.Db(n, 154).ngClassPristine,
                  e.Db(n, 154).ngClassDirty,
                  e.Db(n, 154).ngClassValid,
                  e.Db(n, 154).ngClassInvalid,
                  e.Db(n, 154).ngClassPending
                ),
                l(
                  n,
                  159,
                  0,
                  e.Db(n, 164).maxlength ? e.Db(n, 164).maxlength : null,
                  e.Db(n, 169).ngClassUntouched,
                  e.Db(n, 169).ngClassTouched,
                  e.Db(n, 169).ngClassPristine,
                  e.Db(n, 169).ngClassDirty,
                  e.Db(n, 169).ngClassValid,
                  e.Db(n, 169).ngClassInvalid,
                  e.Db(n, 169).ngClassPending
                ),
                l(
                  n,
                  172,
                  0,
                  e.Mb(n, 172, 0, e.Db(n, 173).transform("captcha_label"))
                ),
                l(n, 176, 0, e.vb(1, "", u.srcCaptcha, "")),
                l(n, 183, 0, "ready" != u.loadingStatus),
                l(n, 185, 0, e.Mb(n, 185, 0, e.Db(n, 186).transform("login"))),
                l(
                  n,
                  189,
                  0,
                  e.Mb(n, 189, 0, e.Db(n, 190).transform("forgot_password"))
                );
              var t = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  191,
                  0,
                  e
                    .Db(n, 193)
                    .transform(
                      "app.links.convert",
                      l(n, 192, 0, u.env.mediaBaseUrl)
                    )
                ),
                ""
              );
              l(n, 191, 0, t),
                l(
                  n,
                  195,
                  0,
                  e.Mb(
                    n,
                    195,
                    0,
                    e.Db(n, 196).transform("app.links.convert_label")
                  )
                ),
                l(
                  n,
                  203,
                  0,
                  e.Mb(n, 203, 0, e.Db(n, 204).transform("cross_login_waitting1"))
                ),
                l(
                  n,
                  206,
                  0,
                  e.Mb(n, 206, 0, e.Db(n, 207).transform("cross_login_waitting2"))
                ),
                l(
                  n,
                  208,
                  0,
                  e.Db(n, 215).ngClassUntouched,
                  e.Db(n, 215).ngClassTouched,
                  e.Db(n, 215).ngClassPristine,
                  e.Db(n, 215).ngClassDirty,
                  e.Db(n, 215).ngClassValid,
                  e.Db(n, 215).ngClassInvalid,
                  e.Db(n, 215).ngClassPending
                ),
                l(
                  n,
                  219,
                  0,
                  e.Db(n, 224).maxlength ? e.Db(n, 224).maxlength : null,
                  e.Db(n, 229).ngClassUntouched,
                  e.Db(n, 229).ngClassTouched,
                  e.Db(n, 229).ngClassPristine,
                  e.Db(n, 229).ngClassDirty,
                  e.Db(n, 229).ngClassValid,
                  e.Db(n, 229).ngClassInvalid,
                  e.Db(n, 229).ngClassPending
                ),
                l(
                  n,
                  232,
                  0,
                  e.Mb(n, 232, 0, e.Db(n, 233).transform("lblIdNoPassportNo"))
                ),
                l(
                  n,
                  235,
                  0,
                  e.Mb(n, 235, 0, e.Db(n, 236).transform("lblNotify2"))
                ),
                l(
                  n,
                  241,
                  0,
                  e.Mb(n, 241, 0, e.Db(n, 242).transform("app_btn_next"))
                ),
                l(
                  n,
                  243,
                  0,
                  e.Db(n, 250).ngClassUntouched,
                  e.Db(n, 250).ngClassTouched,
                  e.Db(n, 250).ngClassPristine,
                  e.Db(n, 250).ngClassDirty,
                  e.Db(n, 250).ngClassValid,
                  e.Db(n, 250).ngClassInvalid,
                  e.Db(n, 250).ngClassPending
                ),
                l(
                  n,
                  254,
                  0,
                  e.Db(n, 259).maxlength ? e.Db(n, 259).maxlength : null,
                  e.Db(n, 264).ngClassUntouched,
                  e.Db(n, 264).ngClassTouched,
                  e.Db(n, 264).ngClassPristine,
                  e.Db(n, 264).ngClassDirty,
                  e.Db(n, 264).ngClassValid,
                  e.Db(n, 264).ngClassInvalid,
                  e.Db(n, 264).ngClassPending
                ),
                l(
                  n,
                  268,
                  0,
                  e.Mb(n, 268, 0, e.Db(n, 269).transform("otp_not_receive"))
                ),
                l(
                  n,
                  271,
                  0,
                  e.Mb(n, 271, 0, e.Db(n, 272).transform("otp_resend"))
                ),
                l(
                  n,
                  279,
                  0,
                  e.Mb(n, 279, 0, e.Db(n, 280).transform("app_btn_next"))
                ),
                l(
                  n,
                  281,
                  0,
                  e.Db(n, 288).ngClassUntouched,
                  e.Db(n, 288).ngClassTouched,
                  e.Db(n, 288).ngClassPristine,
                  e.Db(n, 288).ngClassDirty,
                  e.Db(n, 288).ngClassValid,
                  e.Db(n, 288).ngClassInvalid,
                  e.Db(n, 288).ngClassPending
                ),
                l(
                  n,
                  293,
                  0,
                  e.Mb(n, 293, 0, e.Db(n, 305).transform("default_pass_require")),
                  e.Db(n, 298).required ? "" : null,
                  e.Db(n, 299).maxlength ? e.Db(n, 299).maxlength : null,
                  e.Db(n, 304).ngClassUntouched,
                  e.Db(n, 304).ngClassTouched,
                  e.Db(n, 304).ngClassPristine,
                  e.Db(n, 304).ngClassDirty,
                  e.Db(n, 304).ngClassValid,
                  e.Db(n, 304).ngClassInvalid,
                  e.Db(n, 304).ngClassPending
                ),
                l(
                  n,
                  308,
                  0,
                  e.Mb(n, 308, 0, e.Db(n, 309).transform("default_pass_label"))
                ),
                l(n, 310, 0, e.Mb(n, 310, 0, e.Db(n, 311).transform("tooltip1"))),
                l(
                  n,
                  316,
                  0,
                  e.Db(n, 321).ngClassUntouched,
                  e.Db(n, 321).ngClassTouched,
                  e.Db(n, 321).ngClassPristine,
                  e.Db(n, 321).ngClassDirty,
                  e.Db(n, 321).ngClassValid,
                  e.Db(n, 321).ngClassInvalid,
                  e.Db(n, 321).ngClassPending
                ),
                l(
                  n,
                  326,
                  0,
                  e.Mb(n, 326, 0, e.Db(n, 338).transform("new_pass_require")),
                  e.Db(n, 331).required ? "" : null,
                  e.Db(n, 332).maxlength ? e.Db(n, 332).maxlength : null,
                  e.Db(n, 337).ngClassUntouched,
                  e.Db(n, 337).ngClassTouched,
                  e.Db(n, 337).ngClassPristine,
                  e.Db(n, 337).ngClassDirty,
                  e.Db(n, 337).ngClassValid,
                  e.Db(n, 337).ngClassInvalid,
                  e.Db(n, 337).ngClassPending
                ),
                l(
                  n,
                  341,
                  0,
                  e.Mb(n, 341, 0, e.Db(n, 342).transform("new_pass_label"))
                ),
                l(n, 343, 0, e.Mb(n, 343, 0, e.Db(n, 344).transform("tooltip2"))),
                l(
                  n,
                  349,
                  0,
                  e.Db(n, 354).ngClassUntouched,
                  e.Db(n, 354).ngClassTouched,
                  e.Db(n, 354).ngClassPristine,
                  e.Db(n, 354).ngClassDirty,
                  e.Db(n, 354).ngClassValid,
                  e.Db(n, 354).ngClassInvalid,
                  e.Db(n, 354).ngClassPending
                ),
                l(
                  n,
                  359,
                  0,
                  e.Mb(n, 359, 0, e.Db(n, 371).transform("confirm_pass_require")),
                  e.Db(n, 364).required ? "" : null,
                  e.Db(n, 365).maxlength ? e.Db(n, 365).maxlength : null,
                  e.Db(n, 370).ngClassUntouched,
                  e.Db(n, 370).ngClassTouched,
                  e.Db(n, 370).ngClassPristine,
                  e.Db(n, 370).ngClassDirty,
                  e.Db(n, 370).ngClassValid,
                  e.Db(n, 370).ngClassInvalid,
                  e.Db(n, 370).ngClassPending
                ),
                l(
                  n,
                  374,
                  0,
                  e.Mb(n, 374, 0, e.Db(n, 375).transform("confirm_pass_label"))
                ),
                l(
                  n,
                  379,
                  0,
                  e.Db(n, 384).ngClassUntouched,
                  e.Db(n, 384).ngClassTouched,
                  e.Db(n, 384).ngClassPristine,
                  e.Db(n, 384).ngClassDirty,
                  e.Db(n, 384).ngClassValid,
                  e.Db(n, 384).ngClassInvalid,
                  e.Db(n, 384).ngClassPending
                ),
                l(
                  n,
                  392,
                  0,
                  e.Mb(n, 392, 0, e.Db(n, 393).transform("app_btn_back"))
                ),
                l(
                  n,
                  398,
                  0,
                  e.Mb(n, 398, 0, e.Db(n, 399).transform("app_btn_next"))
                ),
                l(
                  n,
                  400,
                  0,
                  e.Db(n, 407).ngClassUntouched,
                  e.Db(n, 407).ngClassTouched,
                  e.Db(n, 407).ngClassPristine,
                  e.Db(n, 407).ngClassDirty,
                  e.Db(n, 407).ngClassValid,
                  e.Db(n, 407).ngClassInvalid,
                  e.Db(n, 407).ngClassPending
                ),
                l(
                  n,
                  413,
                  0,
                  e.Db(n, 418).maxlength ? e.Db(n, 418).maxlength : null,
                  e.Db(n, 423).ngClassUntouched,
                  e.Db(n, 423).ngClassTouched,
                  e.Db(n, 423).ngClassPristine,
                  e.Db(n, 423).ngClassDirty,
                  e.Db(n, 423).ngClassValid,
                  e.Db(n, 423).ngClassInvalid,
                  e.Db(n, 423).ngClassPending
                ),
                l(
                  n,
                  427,
                  0,
                  e.Mb(n, 427, 0, e.Db(n, 428).transform("otp_label"))
                ),
                l(
                  n,
                  430,
                  0,
                  e.Mb(n, 430, 0, e.Db(n, 431).transform("otp_not_receive"))
                ),
                l(
                  n,
                  434,
                  0,
                  e.Mb(n, 434, 0, e.Db(n, 435).transform("otp_resend"))
                ),
                l(
                  n,
                  444,
                  0,
                  e.Mb(n, 444, 0, e.Db(n, 445).transform("app_btn_next"))
                ),
                l(
                  n,
                  446,
                  0,
                  e.Db(n, 453).ngClassUntouched,
                  e.Db(n, 453).ngClassTouched,
                  e.Db(n, 453).ngClassPristine,
                  e.Db(n, 453).ngClassDirty,
                  e.Db(n, 453).ngClassValid,
                  e.Db(n, 453).ngClassInvalid,
                  e.Db(n, 453).ngClassPending
                ),
                l(
                  n,
                  467,
                  0,
                  e.Mb(n, 467, 0, e.Db(n, 468).transform("lblSoTKMacDinh"))
                ),
                l(
                  n,
                  479,
                  0,
                  e.Mb(n, 479, 0, e.Db(n, 480).transform("lblOtpionRequireEmail"))
                ),
                l(
                  n,
                  486,
                  0,
                  e.Mb(n, 486, 0, e.Db(n, 498).transform("new_pass_require")),
                  e.Db(n, 491).required ? "" : null,
                  e.Db(n, 492).maxlength ? e.Db(n, 492).maxlength : null,
                  e.Db(n, 497).ngClassUntouched,
                  e.Db(n, 497).ngClassTouched,
                  e.Db(n, 497).ngClassPristine,
                  e.Db(n, 497).ngClassDirty,
                  e.Db(n, 497).ngClassValid,
                  e.Db(n, 497).ngClassInvalid,
                  e.Db(n, 497).ngClassPending
                ),
                l(
                  n,
                  501,
                  0,
                  e.Mb(n, 501, 0, e.Db(n, 502).transform("new_pass_label"))
                ),
                l(
                  n,
                  506,
                  0,
                  e.Db(n, 511).ngClassUntouched,
                  e.Db(n, 511).ngClassTouched,
                  e.Db(n, 511).ngClassPristine,
                  e.Db(n, 511).ngClassDirty,
                  e.Db(n, 511).ngClassValid,
                  e.Db(n, 511).ngClassInvalid,
                  e.Db(n, 511).ngClassPending
                ),
                l(
                  n,
                  516,
                  0,
                  e.Mb(n, 516, 0, e.Db(n, 528).transform("new_pass_require")),
                  e.Db(n, 521).required ? "" : null,
                  e.Db(n, 522).maxlength ? e.Db(n, 522).maxlength : null,
                  e.Db(n, 527).ngClassUntouched,
                  e.Db(n, 527).ngClassTouched,
                  e.Db(n, 527).ngClassPristine,
                  e.Db(n, 527).ngClassDirty,
                  e.Db(n, 527).ngClassValid,
                  e.Db(n, 527).ngClassInvalid,
                  e.Db(n, 527).ngClassPending
                ),
                l(
                  n,
                  531,
                  0,
                  e.Mb(n, 531, 0, e.Db(n, 532).transform("confirm_pass_label"))
                ),
                l(
                  n,
                  536,
                  0,
                  e.Db(n, 541).ngClassUntouched,
                  e.Db(n, 541).ngClassTouched,
                  e.Db(n, 541).ngClassPristine,
                  e.Db(n, 541).ngClassDirty,
                  e.Db(n, 541).ngClassValid,
                  e.Db(n, 541).ngClassInvalid,
                  e.Db(n, 541).ngClassPending
                ),
                l(
                  n,
                  548,
                  0,
                  e.Mb(n, 548, 0, e.Db(n, 556).transform("app_policy_require")),
                  e.Db(n, 550).required ? "" : null,
                  e.Db(n, 555).ngClassUntouched,
                  e.Db(n, 555).ngClassTouched,
                  e.Db(n, 555).ngClassPristine,
                  e.Db(n, 555).ngClassDirty,
                  e.Db(n, 555).ngClassValid,
                  e.Db(n, 555).ngClassInvalid,
                  e.Db(n, 555).ngClassPending
                ),
                l(
                  n,
                  558,
                  0,
                  e.Mb(n, 558, 0, e.Db(n, 559).transform("lblNotify52"))
                ),
                l(
                  n,
                  564,
                  0,
                  e.Mb(n, 564, 0, e.Db(n, 565).transform("app_btn_next"))
                ),
                l(
                  n,
                  566,
                  0,
                  e.Db(n, 573).ngClassUntouched,
                  e.Db(n, 573).ngClassTouched,
                  e.Db(n, 573).ngClassPristine,
                  e.Db(n, 573).ngClassDirty,
                  e.Db(n, 573).ngClassValid,
                  e.Db(n, 573).ngClassInvalid,
                  e.Db(n, 573).ngClassPending
                ),
                l(
                  n,
                  579,
                  0,
                  e.Db(n, 584).maxlength ? e.Db(n, 584).maxlength : null,
                  e.Db(n, 589).ngClassUntouched,
                  e.Db(n, 589).ngClassTouched,
                  e.Db(n, 589).ngClassPristine,
                  e.Db(n, 589).ngClassDirty,
                  e.Db(n, 589).ngClassValid,
                  e.Db(n, 589).ngClassInvalid,
                  e.Db(n, 589).ngClassPending
                ),
                l(
                  n,
                  593,
                  0,
                  e.Mb(n, 593, 0, e.Db(n, 594).transform("otp_label"))
                ),
                l(
                  n,
                  596,
                  0,
                  e.Mb(n, 596, 0, e.Db(n, 597).transform("otp_not_receive"))
                ),
                l(
                  n,
                  600,
                  0,
                  e.Mb(n, 600, 0, e.Db(n, 601).transform("otp_resend"))
                ),
                l(
                  n,
                  610,
                  0,
                  e.Mb(n, 610, 0, e.Db(n, 611).transform("app_btn_next"))
                ),
                l(
                  n,
                  612,
                  0,
                  e.Db(n, 619).ngClassUntouched,
                  e.Db(n, 619).ngClassTouched,
                  e.Db(n, 619).ngClassPristine,
                  e.Db(n, 619).ngClassDirty,
                  e.Db(n, 619).ngClassValid,
                  e.Db(n, 619).ngClassInvalid,
                  e.Db(n, 619).ngClassPending
                ),
                l(
                  n,
                  621,
                  0,
                  e.Mb(n, 621, 0, e.Db(n, 622).transform("lblNotify6"))
                ),
                l(
                  n,
                  627,
                  0,
                  e.Mb(n, 627, 0, e.Db(n, 639).transform("default_pass_require")),
                  e.Db(n, 632).required ? "" : null,
                  e.Db(n, 633).maxlength ? e.Db(n, 633).maxlength : null,
                  e.Db(n, 638).ngClassUntouched,
                  e.Db(n, 638).ngClassTouched,
                  e.Db(n, 638).ngClassPristine,
                  e.Db(n, 638).ngClassDirty,
                  e.Db(n, 638).ngClassValid,
                  e.Db(n, 638).ngClassInvalid,
                  e.Db(n, 638).ngClassPending
                ),
                l(
                  n,
                  642,
                  0,
                  e.Mb(n, 642, 0, e.Db(n, 643).transform("old_password"))
                ),
                l(
                  n,
                  647,
                  0,
                  e.Db(n, 652).ngClassUntouched,
                  e.Db(n, 652).ngClassTouched,
                  e.Db(n, 652).ngClassPristine,
                  e.Db(n, 652).ngClassDirty,
                  e.Db(n, 652).ngClassValid,
                  e.Db(n, 652).ngClassInvalid,
                  e.Db(n, 652).ngClassPending
                ),
                l(
                  n,
                  657,
                  0,
                  e.Mb(n, 657, 0, e.Db(n, 669).transform("new_pass_require")),
                  e.Db(n, 662).required ? "" : null,
                  e.Db(n, 663).maxlength ? e.Db(n, 663).maxlength : null,
                  e.Db(n, 668).ngClassUntouched,
                  e.Db(n, 668).ngClassTouched,
                  e.Db(n, 668).ngClassPristine,
                  e.Db(n, 668).ngClassDirty,
                  e.Db(n, 668).ngClassValid,
                  e.Db(n, 668).ngClassInvalid,
                  e.Db(n, 668).ngClassPending
                ),
                l(
                  n,
                  672,
                  0,
                  e.Mb(n, 672, 0, e.Db(n, 673).transform("new_pass_label"))
                ),
                l(n, 674, 0, e.Mb(n, 674, 0, e.Db(n, 675).transform("tooltip2"))),
                l(
                  n,
                  680,
                  0,
                  e.Db(n, 685).ngClassUntouched,
                  e.Db(n, 685).ngClassTouched,
                  e.Db(n, 685).ngClassPristine,
                  e.Db(n, 685).ngClassDirty,
                  e.Db(n, 685).ngClassValid,
                  e.Db(n, 685).ngClassInvalid,
                  e.Db(n, 685).ngClassPending
                ),
                l(
                  n,
                  690,
                  0,
                  e.Mb(n, 690, 0, e.Db(n, 702).transform("confirm_pass_require")),
                  e.Db(n, 695).required ? "" : null,
                  e.Db(n, 696).maxlength ? e.Db(n, 696).maxlength : null,
                  e.Db(n, 701).ngClassUntouched,
                  e.Db(n, 701).ngClassTouched,
                  e.Db(n, 701).ngClassPristine,
                  e.Db(n, 701).ngClassDirty,
                  e.Db(n, 701).ngClassValid,
                  e.Db(n, 701).ngClassInvalid,
                  e.Db(n, 701).ngClassPending
                ),
                l(
                  n,
                  705,
                  0,
                  e.Mb(n, 705, 0, e.Db(n, 706).transform("confirm_pass_label"))
                ),
                l(
                  n,
                  710,
                  0,
                  e.Db(n, 715).ngClassUntouched,
                  e.Db(n, 715).ngClassTouched,
                  e.Db(n, 715).ngClassPristine,
                  e.Db(n, 715).ngClassDirty,
                  e.Db(n, 715).ngClassValid,
                  e.Db(n, 715).ngClassInvalid,
                  e.Db(n, 715).ngClassPending
                ),
                l(
                  n,
                  721,
                  0,
                  e.Mb(n, 721, 0, e.Db(n, 722).transform("app_btn_next"))
                );
              var s = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  728,
                  0,
                  e
                    .Db(n, 730)
                    .transform(
                      "app.links.terms_and_conditions",
                      l(n, 729, 0, u.env.mediaBaseUrl)
                    )
                ),
                ""
              );
              l(n, 728, 0, s),
                l(
                  n,
                  732,
                  0,
                  e.Mb(
                    n,
                    732,
                    0,
                    e.Db(n, 733).transform("app.links.terms_and_conditions_label")
                  )
                );
              var r = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  737,
                  0,
                  e
                    .Db(n, 739)
                    .transform(
                      "app.links.fees_and_charges",
                      l(n, 738, 0, u.env.mediaBaseUrl)
                    )
                ),
                ""
              );
              l(n, 737, 0, r),
                l(
                  n,
                  741,
                  0,
                  e.Mb(
                    n,
                    741,
                    0,
                    e.Db(n, 742).transform("app.links.fees_and_charges_label")
                  )
                );
              var i = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  746,
                  0,
                  e
                    .Db(n, 748)
                    .transform(
                      "app.links.user_guide",
                      l(n, 747, 0, u.env.mediaBaseUrl)
                    )
                ),
                ""
              );
              l(n, 746, 0, i),
                l(
                  n,
                  750,
                  0,
                  e.Mb(
                    n,
                    750,
                    0,
                    e.Db(n, 751).transform("app.links.user_guide_label")
                  )
                );
              var a = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  755,
                  0,
                  e
                    .Db(n, 757)
                    .transform(
                      "app.links.safe_guide",
                      l(n, 756, 0, u.env.mediaBaseUrl)
                    )
                ),
                ""
              );
              l(n, 755, 0, a),
                l(
                  n,
                  759,
                  0,
                  e.Mb(
                    n,
                    759,
                    0,
                    e.Db(n, 760).transform("app.links.safe_guide_label")
                  )
                );
              var o = e.vb(
                1,
                "",
                e.Mb(
                  n,
                  764,
                  0,
                  e
                    .Db(n, 766)
                    .transform("app.links.faq", l(n, 765, 0, u.env.mediaBaseUrl))
                ),
                ""
              );
              l(n, 764, 0, o),
                l(
                  n,
                  768,
                  0,
                  e.Mb(n, 768, 0, e.Db(n, 769).transform("app.links.faq_label"))
                ),
                l(n, 775, 0, e.Mb(n, 775, 0, e.Db(n, 776).transform("contact")));
            }
          );
        }
        function Ll(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "ubtn ubg-primary ubtn-md ripple"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.changePage("4") && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(2, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, e.Mb(n, 2, 0, e.Db(n, 3).transform("wellcome_button")));
            }
          );
        }
        function Ml(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                3,
                "a",
                [
                  ["class", "ubtn ubg-primary ubtn-md ripple"],
                  ["href", "javascript:void(0)"],
                ],
                null,
                [[null, "click"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "click" === n &&
                      (e = !1 !== l.component.changePage("5") && e),
                    e
                  );
                },
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                2,
                "span",
                [["class", "ubtn-text"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(2, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
            ],
            null,
            function (l, n) {
              l(n, 2, 0, e.Mb(n, 2, 0, e.Db(n, 3).transform("wellcome_button")));
            }
          );
        }
        function El(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                29,
                "div",
                [],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                0,
                "div",
                [["class", "bg-welcome"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                2,
                0,
                null,
                null,
                27,
                "div",
                [["class", "wel-wrap"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                3,
                0,
                null,
                null,
                26,
                "div",
                [["class", "container"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                4,
                0,
                null,
                null,
                25,
                "div",
                [["class", "row align-items-center text-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                5,
                0,
                null,
                null,
                2,
                "div",
                [["class", "col-lg order-2 order-lg-1"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                6,
                0,
                null,
                null,
                1,
                "div",
                [["class", "wel-img animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                7,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["src", "assets/images/web/img/welcome/screen.png"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                8,
                0,
                null,
                null,
                21,
                "div",
                [["class", "col-lg wel-content-col order-1 order-lg-2"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                9,
                0,
                null,
                null,
                20,
                "div",
                [["class", "wel-content"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                10,
                0,
                null,
                null,
                1,
                "div",
                [["class", "wel-logo animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                11,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["height", "55"],
                  ["src", "assets/images/logo-color.png"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                12,
                0,
                null,
                null,
                2,
                "div",
                [["class", "wel-txt animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(13, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                15,
                0,
                null,
                null,
                3,
                "div",
                [["class", "wel-logo-digi animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(16, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                18,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["height", "30"],
                  ["src", "assets/images/logo-digibank.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                19,
                0,
                null,
                null,
                2,
                "div",
                [["class", "wel-txt-2 animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(20, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                22,
                0,
                null,
                null,
                2,
                "div",
                [["class", "wel-txt-3 animate__animated animate__fadeInUp"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(23, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                25,
                0,
                null,
                null,
                4,
                "div",
                [
                  [
                    "class",
                    "ubtn-wrap-width-md animate__animated animate__fadeInUp",
                  ],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, Ll)),
              e.qb(
                27,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, Ml)),
              e.qb(
                29,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
            ],
            function (l, n) {
              var u = n.component;
              l(n, 27, 0, "7" == u.loginPage), l(n, 29, 0, "8" == u.loginPage);
            },
            function (l, n) {
              l(n, 13, 0, e.Mb(n, 13, 0, e.Db(n, 14).transform("wellcome_1"))),
                l(n, 16, 0, e.Mb(n, 16, 0, e.Db(n, 17).transform("wellcome_2"))),
                l(n, 20, 0, e.Mb(n, 20, 0, e.Db(n, 21).transform("wellcome_3"))),
                l(n, 23, 0, e.Mb(n, 23, 0, e.Db(n, 24).transform("wellcome_4")));
            }
          );
        }
        function Vl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "head",
                [],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                1,
                0,
                null,
                null,
                0,
                "link",
                [
                  ["href", ""],
                  ["id", "theme"],
                  ["rel", "stylesheet"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.gb(16777216, null, null, 1, null, jl)),
              e.qb(
                3,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(), e.gb(16777216, null, null, 1, null, El)),
              e.qb(
                5,
                16384,
                null,
                0,
                b.n,
                [e.N, e.K],
                { ngIf: [0, "ngIf"] },
                null
              ),
              (l()(),
              e.rb(
                6,
                0,
                null,
                null,
                39,
                "div",
                [
                  ["aria-hidden", "true"],
                  ["aria-labelledby", "exampleModalLabel"],
                  ["class", "modal fade modal-hotline"],
                  ["id", "modalLh"],
                  ["role", "dialog"],
                  ["tabindex", "-1"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                7,
                0,
                null,
                null,
                38,
                "div",
                [
                  [
                    "class",
                    "modal-dialog modal-dialog-centered modal-xss modal-dialog-scrollable",
                  ],
                  ["role", "document"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                8,
                0,
                null,
                null,
                37,
                "div",
                [["class", "modal-content"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                9,
                0,
                null,
                null,
                5,
                "div",
                [["class", "modal-header"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                10,
                0,
                null,
                null,
                2,
                "h2",
                [["class", "modal-title"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(11, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                13,
                0,
                null,
                null,
                1,
                "button",
                [
                  [
                    "class",
                    "ubtn ubg-blank ubtn-circle-md modal-close ripple-100 legitRipple",
                  ],
                  ["data-dismiss", "modal"],
                  ["type", "button"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                14,
                0,
                null,
                null,
                0,
                "img",
                [
                  ["alt", ""],
                  ["src", "assets/images/base/icons/close/square/base.svg"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                15,
                0,
                null,
                null,
                30,
                "div",
                [["class", "modal-body isolated-scroll"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                16,
                0,
                null,
                null,
                13,
                "div",
                [["class", "modal-hotline-hotline mb40 mt20"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                17,
                0,
                null,
                null,
                12,
                "div",
                [["class", "row row-15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                18,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                19,
                0,
                null,
                null,
                0,
                "div",
                [["class", "circle circle-lg ubg-green ic_hotline"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                20,
                0,
                null,
                null,
                9,
                "div",
                [["class", "col"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                21,
                0,
                null,
                null,
                2,
                "div",
                [["class", "h4 mb10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(22, 0, null, null, 1, "b", [], null, null, null, null, null)),
              (l()(), e.Lb(-1, null, ["Hotline 24/7"])),
              (l()(),
              e.rb(
                24,
                0,
                null,
                null,
                2,
                "div",
                [["class", "block"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                25,
                0,
                null,
                null,
                1,
                "a",
                [
                  ["class", "link hover-line"],
                  ["href", "tel:1900545413"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, ["1900 54 54 13"])),
              (l()(),
              e.rb(
                27,
                0,
                null,
                null,
                2,
                "div",
                [["class", "block"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                28,
                0,
                null,
                null,
                1,
                "a",
                [
                  ["class", "link hover-line"],
                  ["href", "https://www.vietcombank.com.vn"],
                  ["target", "_blank"],
                ],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, ["www.vietcombank.com.vn"])),
              (l()(),
              e.rb(
                30,
                0,
                null,
                null,
                15,
                "div",
                [["class", "modal-hotline-hotline mb40"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                31,
                0,
                null,
                null,
                14,
                "div",
                [["class", "row row-15"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                32,
                0,
                null,
                null,
                1,
                "div",
                [["class", "col-auto"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                33,
                0,
                null,
                null,
                0,
                "div",
                [["class", "circle circle-lg ubg-green ic_pin"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                34,
                0,
                null,
                null,
                11,
                "div",
                [["class", "col"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                35,
                0,
                null,
                null,
                3,
                "div",
                [["class", "h4 mb10"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(36, 0, null, null, 2, "b", [], null, null, null, null, null)),
              (l()(), e.Lb(37, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(39, 0, null, null, 6, "p", [], null, null, null, null, null)),
              (l()(),
              e.rb(40, 0, null, null, 2, "b", [], null, null, null, null, null)),
              (l()(), e.Lb(41, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(43, 0, null, null, 0, "br", [], null, null, null, null, null)),
              (l()(), e.Lb(44, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                46,
                0,
                null,
                null,
                29,
                "app-modal-html",
                [],
                null,
                null,
                null,
                f.b,
                f.a
              )),
              e.qb(
                47,
                245760,
                null,
                0,
                v.a,
                [],
                {
                  id: [0, "id"],
                  size: [1, "size"],
                  class: [2, "class"],
                  isShowClose: [3, "isShowClose"],
                },
                null
              ),
              (l()(),
              e.rb(
                48,
                0,
                null,
                0,
                4,
                "div",
                [["class", "header"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                49,
                0,
                null,
                null,
                3,
                "h2",
                [["class", "modal-title b"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, ["VCB "])),
              (l()(),
              e.rb(
                51,
                0,
                null,
                null,
                1,
                "span",
                [["class", "b color-primary"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(-1, null, ["Booking"])),
              (l()(),
              e.rb(
                53,
                0,
                null,
                1,
                21,
                "div",
                [["class", "modal-body"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                54,
                0,
                null,
                null,
                20,
                "div",
                [["class", "isolated-scroll"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(55, 0, null, null, 2, "p", [], null, null, null, null, null)),
              (l()(), e.Lb(56, null, ["", ""])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                58,
                0,
                null,
                null,
                16,
                "div",
                [["class", "list-link list-link-sm list-link-no-ml"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                59,
                0,
                null,
                null,
                7,
                "a",
                [
                  ["class", "list-link-item has-link-arrow"],
                  ["routerLink", "/booking"],
                ],
                [
                  [1, "target", 0],
                  [8, "href", 4],
                ],
                [[null, "click"]],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "click" === n &&
                      (t =
                        !1 !==
                          e
                            .Db(l, 60)
                            .onClick(
                              u.button,
                              u.ctrlKey,
                              u.metaKey,
                              u.shiftKey
                            ) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(
                60,
                671744,
                null,
                0,
                C.p,
                [C.m, C.a, b.j],
                { routerLink: [0, "routerLink"] },
                null
              ),
              (l()(),
              e.rb(
                61,
                0,
                null,
                null,
                4,
                "div",
                [["class", "row row-10 align-items-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                62,
                0,
                null,
                null,
                3,
                "div",
                [["class", "col"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                63,
                0,
                null,
                null,
                2,
                "div",
                [["class", "txt color-black"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(64, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                66,
                0,
                null,
                null,
                0,
                "div",
                [["class", "item-link-arrow"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                67,
                0,
                null,
                null,
                7,
                "a",
                [
                  ["class", "list-link-item has-link-arrow"],
                  ["routerLink", "/booking/change"],
                ],
                [
                  [1, "target", 0],
                  [8, "href", 4],
                ],
                [[null, "click"]],
                function (l, n, u) {
                  var t = !0;
                  return (
                    "click" === n &&
                      (t =
                        !1 !==
                          e
                            .Db(l, 68)
                            .onClick(
                              u.button,
                              u.ctrlKey,
                              u.metaKey,
                              u.shiftKey
                            ) && t),
                    t
                  );
                },
                null,
                null
              )),
              e.qb(
                68,
                671744,
                null,
                0,
                C.p,
                [C.m, C.a, b.j],
                { routerLink: [0, "routerLink"] },
                null
              ),
              (l()(),
              e.rb(
                69,
                0,
                null,
                null,
                4,
                "div",
                [["class", "row row-10 align-items-center"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                70,
                0,
                null,
                null,
                3,
                "div",
                [["class", "col"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                71,
                0,
                null,
                null,
                2,
                "div",
                [["class", "txt color-black"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(), e.Lb(72, null, [" ", " "])),
              e.Fb(131072, o.j, [o.k, e.h]),
              (l()(),
              e.rb(
                74,
                0,
                null,
                null,
                0,
                "div",
                [["class", "item-link-arrow"]],
                null,
                null,
                null,
                null,
                null
              )),
              (l()(),
              e.rb(
                75,
                0,
                null,
                2,
                0,
                "div",
                [["class", "modal-footer"]],
                null,
                null,
                null,
                null,
                null
              )),
            ],
            function (l, n) {
              var u = n.component;
              l(
                n,
                3,
                0,
                "7" != u.loginPage &&
                  "8" != u.loginPage &&
                  "7VIP" != u.loginPage &&
                  "8VIP" != u.loginPage
              ),
                l(n, 5, 0, "7" == u.loginPage || "8" == u.loginPage),
                l(
                  n,
                  47,
                  0,
                  "vcb-booking-menu",
                  "sm",
                  "modal-dialog-scrollable",
                  !0
                ),
                l(n, 60, 0, "/booking"),
                l(n, 68, 0, "/booking/change");
            },
            function (l, n) {
              l(n, 11, 0, e.Mb(n, 11, 0, e.Db(n, 12).transform("contact_info"))),
                l(n, 37, 0, e.Mb(n, 37, 0, e.Db(n, 38).transform("head_office"))),
                l(n, 41, 0, e.Mb(n, 41, 0, e.Db(n, 42).transform("address2"))),
                l(n, 44, 0, e.Mb(n, 44, 0, e.Db(n, 45).transform("address1"))),
                l(
                  n,
                  56,
                  0,
                  e.Mb(n, 56, 0, e.Db(n, 57).transform("app.message.booking"))
                ),
                l(n, 59, 0, e.Db(n, 60).target, e.Db(n, 60).href),
                l(
                  n,
                  64,
                  0,
                  e.Mb(n, 64, 0, e.Db(n, 65).transform("app.menu.make_booking"))
                ),
                l(n, 67, 0, e.Db(n, 68).target, e.Db(n, 68).href),
                l(
                  n,
                  72,
                  0,
                  e.Mb(n, 72, 0, e.Db(n, 73).transform("app.menu.change_booking"))
                );
            }
          );
        }
        function Kl(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                1,
                "ng-component",
                [],
                null,
                null,
                null,
                Vl,
                E
              )),
              e.qb(
                1,
                8634368,
                null,
                0,
                F,
                [m.a, o.k, c.f, C.a, C.m, T.a, j.a, L.a, M.e],
                null,
                null
              ),
            ],
            function (l, n) {
              l(n, 1, 0);
            },
            null
          );
        }
        var Ol = e.nb("ng-component", F, Kl, {}, {}, []),
          Al = u("QQfA"),
          Bl = u("IP0z"),
          Ul = u("IheW"),
          Gl = u("zMNK"),
          $l = u("/HVE"),
          Hl = u("hOhj"),
          Rl = u("Xd0L"),
          Ql = u("cUpR"),
          zl = u("eACs"),
          Jl = u("5N8a"),
          Yl = u("UIky"),
          Wl = u("d2mR");
        class Xl {}
        u.d(n, "LoginModuleNgFactory", function () {
          return Zl;
        });
        var Zl = e.ob(r, [], function (l) {
          return e.Ab([
            e.Bb(512, e.j, e.Z, [[8, [i.a, a.a, Ol]], [3, e.j], e.v]),
            e.Bb(4608, b.p, b.o, [e.s, [2, b.y]]),
            e.Bb(4608, c.z, c.z, []),
            e.Bb(4608, c.f, c.f, []),
            e.Bb(4608, Al.a, Al.a, [
              Al.g,
              Al.c,
              e.j,
              Al.f,
              Al.d,
              e.p,
              e.x,
              b.d,
              Bl.b,
              [2, b.i],
            ]),
            e.Bb(5120, Al.h, Al.i, [Al.a]),
            e.Bb(5120, M.c, M.d, [Al.a]),
            e.Bb(135680, M.e, M.e, [
              Al.a,
              e.p,
              [2, b.i],
              [2, M.b],
              M.c,
              [3, M.e],
              Al.c,
            ]),
            e.Bb(5120, o.g, s, [Ul.c]),
            e.Bb(4608, o.d, o.f, []),
            e.Bb(4608, o.i, o.e, []),
            e.Bb(4608, o.c, o.b, []),
            e.Bb(4608, o.l, o.l, []),
            e.Bb(4608, o.k, o.k, [o.l, o.g, o.d, o.i, o.c, o.m, o.o, o.n, o.a]),
            e.Bb(4608, b.c, b.c, [e.s]),
            e.Bb(1073742336, b.b, b.b, []),
            e.Bb(1073742336, C.q, C.q, [
              [2, C.v],
              [2, C.m],
            ]),
            e.Bb(1073742336, c.y, c.y, []),
            e.Bb(1073742336, c.i, c.i, []),
            e.Bb(1073742336, c.u, c.u, []),
            e.Bb(1073742336, Bl.a, Bl.a, []),
            e.Bb(1073742336, Gl.f, Gl.f, []),
            e.Bb(1073742336, $l.b, $l.b, []),
            e.Bb(1073742336, Hl.b, Hl.b, []),
            e.Bb(1073742336, Al.e, Al.e, []),
            e.Bb(1073742336, Rl.b, Rl.b, [
              [2, Rl.a],
              [2, Ql.f],
            ]),
            e.Bb(1073742336, M.h, M.h, []),
            e.Bb(1073742336, zl.b, zl.b, []),
            e.Bb(1073742336, Jl.a, Jl.a, []),
            e.Bb(1073742336, o.h, o.h, []),
            e.Bb(1073742336, Yl.a, Yl.a, []),
            e.Bb(1073742336, Wl.a, Wl.a, []),
            e.Bb(1073742336, Xl, Xl, []),
            e.Bb(1073742336, r, r, []),
            e.Bb(256, o.o, !0, []),
            e.Bb(256, o.m, void 0, []),
            e.Bb(256, o.n, !0, []),
            e.Bb(256, o.a, void 0, []),
            e.Bb(
              1024,
              C.k,
              function () {
                return [[{ path: "", component: F }]];
              },
              []
            ),
          ]);
        });
      },
      kLqA: function (l, n, u) {
        "use strict";
        n.__esModule = !0;
        var e = (function () {
          function l(n) {
            if (!n)
              throw new TypeError("Invalid argument; `value` has no value.");
            (this.value = l.EMPTY), n && l.isGuid(n) && (this.value = n);
          }
          return (
            (l.isGuid = function (n) {
              var u = n.toString();
              return n && (n instanceof l || l.validator.test(u));
            }),
            (l.create = function () {
              return new l(
                [l.gen(2), l.gen(1), l.gen(1), l.gen(1), l.gen(3)].join("-")
              );
            }),
            (l.createEmpty = function () {
              return new l("emptyguid");
            }),
            (l.parse = function (n) {
              return new l(n);
            }),
            (l.raw = function () {
              return [l.gen(2), l.gen(1), l.gen(1), l.gen(1), l.gen(3)].join("-");
            }),
            (l.gen = function (l) {
              for (var n = "", u = 0; u < l; u++)
                n += ((65536 * (1 + Math.random())) | 0)
                  .toString(16)
                  .substring(1);
              return n;
            }),
            (l.prototype.equals = function (n) {
              return l.isGuid(n) && this.value === n.toString();
            }),
            (l.prototype.isEmpty = function () {
              return this.value === l.EMPTY;
            }),
            (l.prototype.toString = function () {
              return this.value;
            }),
            (l.prototype.toJSON = function () {
              return { value: this.value };
            }),
            (l.validator = new RegExp(
              "^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$",
              "i"
            )),
            (l.EMPTY = "00000000-0000-0000-0000-000000000000"),
            l
          );
        })();
        n.Guid = e;
      },
      lcJK: function (l, n, u) {
        "use strict";
        u.d(n, "a", function () {
          return s;
        });
        var e = u("8Y7J"),
          t = u("VXAP");
        class s extends t.a {
          constructor(l, n, u, t) {
            super(u, t),
              (this.element = l),
              (this.cdRef = n),
              (this.storeService = u),
              (this.translate = t),
              (this.select2Data = new Array()),
              (this.select2Value = ""),
              (this.id = ""),
              (this.class = ""),
              (this.placeholder = ""),
              (this.searchBox = !0),
              (this.dataType = ""),
              (this.template = ""),
              (this.required = ""),
              (this.disabled = !1),
              (this.data = new Map()),
              (this.valueChange = new e.m()),
              (this.onClearValue = (l = null) => {
                this.valueChange.emit(Object.assign({ code: null, name: "" }, l)),
                  (this.select2Value = "");
              }),
              (this.templateInfo = (l) =>
                l.id
                  ? null === l.element.attributes.getNamedItem("datainfo")
                    ? jQuery(
                        '<div class="select-txt-main">' +
                          l.text +
                          '</div><div class="select-txt-sub h6">------</div>'
                      )
                    : jQuery(
                        '<div class="select-txt-main">' +
                          l.text +
                          '</div><div class="select-txt-sub h6">' +
                          l.element.attributes.getNamedItem("datainfo")
                            .nodeValue +
                          "</div>"
                      )
                  : l.text),
              (this.templateImage = (l) => {
                if (!l.id) return l.text;
                if (null === l.element.attributes.getNamedItem("dataimg")) {
                  const n = this.data.get(l.id)
                    ? this.data.get(l.id).dataimg
                    : "";
                  return jQuery(
                    '<div class="select-tpl-img-wrap"><div class="select-tpl-img" style="background-image: url(' +
                      n +
                      ')"></div><div class="sselect-tpl-txt">' +
                      l.text +
                      "</div></div>"
                  );
                }
                return jQuery(
                  '<div class="select-tpl-img-wrap"><div class="select-tpl-img" style="background-image: url(' +
                    l.element.attributes.getNamedItem("dataimg").nodeValue +
                    ')"></div><div class="sselect-tpl-txt">' +
                    l.text +
                    "</div></div>"
                );
              }),
              (this.noResults = (l) => this.translator.app.select2.no_results),
              (this.hostEl = this.element.nativeElement),
              this.translate.onLangChange.subscribe((l) => {
                const n = new Array();
                if (this.data && this.data.size > 0) {
                  this.required &&
                    "" !== this.required &&
                    n.push({ id: "", text: "" });
                  for (const [u, e] of this.data)
                    n.push({
                      id: u,
                      text:
                        "en" === l.lang
                          ? e.nameEN
                            ? e.nameEN
                            : e.name
                          : e.nameVi
                          ? e.nameEN
                          : e.name,
                      disabled: e.isDisable,
                    });
                }
                this.select2Data = n;
              });
          }
          ngOnChanges(l) {
            const n = new Array();
            if (this.data && this.data.size > 0) {
              this.required &&
                "" !== this.required &&
                n.push({ id: "", text: "" });
              for (const [l, u] of this.data) {
                n.push({
                  id: l,
                  text: "en" === this.lang && u.nameEN ? u.nameEN : u.name,
                  disabled: u.isDisable,
                });
                const e = this.setLocalizedName(u);
                this.data.set(l, e);
              }
              if (
                l &&
                l.value &&
                null != l.value.currentValue &&
                l.value.currentValue !== {} &&
                "{}" !== JSON.stringify(l.value.currentValue) &&
                l.value.currentValue !== l.value.previousValue
              ) {
                const n = this.data.get(l.value.currentValue.code);
                n && n.code && ((this.value = n), (this.select2Value = n.code));
              }
              l &&
                l.value &&
                (null == l.value.currentValue || l.value.currentValue === {}) &&
                ((this.select2Value = ""), (this.value = {}));
            }
            (this.select2Data = n),
              this.required &&
                "" !== this.required &&
                ((this.selectEl = this.hostEl
                  .getElementsByTagName("select")
                  .item(0)),
                this.selectEl.setAttribute("required", ""),
                this.selectEl.setAttribute(
                  "data-parsley-required-message",
                  this.required
                ));
          }
          setLocalizedName(l) {
            switch (this.lang) {
              case "vi":
                l.localizedName = l.name;
                break;
              case "en":
                l.localizedName = l.nameEN;
            }
            return l;
          }
          ngOnInit() {
            this.selectEl = this.hostEl.getElementsByTagName("select").item(0);
            let l = !0;
            if (
              (jQuery(this.selectEl).attr("multiple") && (l = !1),
              (this.options = Object.assign(
                {},
                {
                  width: "100%",
                  closeOnSelect: l,
                  minimumResultsForSearch: this.searchBox ? 1 : -1,
                  language: { noResults: this.noResults },
                },
                this.options
              )),
              this.template)
            )
              switch (this.template) {
                case "info":
                  break;
                case "image":
                  (this.options.templateResult = this.templateImage),
                    (this.options.templateSelection = this.templateImage);
              }
            this.initSelect2();
          }
          initSelect2() {
            $(document).ready(() => {
              let l;
              $(document).on("focus", ".select2.select2-container", (l) => {
                l.originalEvent &&
                  $(this).find(".select2-selection--single").length > 0 &&
                  $(this).siblings("select:enabled").select2("open");
              }),
                $(window).width() <= 767 &&
                  $("body .select-2").hasClass("select-2") &&
                  $("body").append('<div class="select-2-backdrop"></div>'),
                $(".select-2-backdrop").on("click", () => {
                  $(".select-2").select2("close");
                }),
                $(this.selectEl).attr("multiple")
                  ? $(this.selectEl)
                      .on("select2:opening", () => {
                        $(window).width() <= 767 && (BNS.off(), clearTimeout(l));
                      })
                      .on("select2:open", () => {
                        if (
                          ($(
                            ".select2-search--dropdown .select2-search__field"
                          ).attr(
                            "placeholder",
                            this.translator.app.select2.search_box
                          ),
                          $(window).width() < 789 &&
                            $(".select2-search input").blur(),
                          $(window).width() <= 767)
                        ) {
                          clearTimeout(l),
                            BNS.on(),
                            $(".close-select").remove(),
                            $(".unselect-all").remove(),
                            $(".select2-search-container").remove();
                          const n = $(this).eq(0).attr("header-text");
                          n &&
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).prepend(
                              `\n\t\t\t\t\t\t\t\t\t<div class="close-select">\n\t\t\t\t\t\t\t\t\t\t<div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()">\u0110\xf3ng</div> ${n}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class="no-pb select2-search select2-search-container select2-search--dropdown">\n\t\t\t\t\t\t\t\t\t\t<input placeholder="` +
                                this.translator.app.select2.search_box +
                                '" id="select-2-search-multiple" class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">\n\t\t\t\t\t\t\t\t\t<div class="unselect-all" onclick="deselectAll()">B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3</div>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t'
                            ),
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).addClass("top-0"),
                            $(".select-2-backdrop").addClass("show"),
                            $("#select-2-search-multiple").keyup(() => {
                              !(function (l) {
                                const n =
                                  $(".select2-container--open")
                                    .siblings(".select-2[multiple]")
                                    .data("select2").dropdown.$search ||
                                  $(".select2-container--open")
                                    .siblings(".select-2[multiple]")
                                    .data("select2").selection.$search;
                                n.val(l), n.trigger("keyup");
                              })($("#select-2-search-multiple").val());
                            });
                        }
                      })
                      .on("select2:closing", () => {
                        $(".select-2-backdrop").removeClass("show"),
                          $(window).width() <= 767 &&
                            (BNS.off(),
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).removeClass("top-0"));
                      })
                  : $(this.selectEl)
                      .on("select2:opening", () => {
                        $(window).width() <= 767 && (BNS.off(), clearTimeout(l));
                      })
                      .on("select2:open", () => {
                        if (
                          ($(
                            ".select2-search--dropdown .select2-search__field"
                          ).attr(
                            "placeholder",
                            this.translator.app.select2.search_box
                          ),
                          $(window).width() >= 789 &&
                            (-1 !== navigator.userAgent.indexOf("MSIE") ||
                              navigator.appVersion.indexOf("Trident/") > -1) &&
                            $(".select2-search input").blur(),
                          $(window).width() < 789 &&
                            $(".select2-search input").blur(),
                          $(window).width() <= 767)
                        ) {
                          clearTimeout(l), BNS.on(), $(".close-select").remove();
                          const n = $(this).eq(0).attr("header-text");
                          n &&
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).prepend(
                              '\n\t\t\t\t\t\t\t\t\t<div class="close-select"><div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()">' +
                                this.translator.app_close +
                                `</div>${n}</div>\n\t\t\t\t\t\t\t\t`
                            ),
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).addClass("top-0"),
                            $(".select-2-backdrop").addClass("show");
                        }
                      })
                      .on("select2:closing", () => {
                        $(".select-2-backdrop").removeClass("show"),
                          $(window).width() <= 767 &&
                            (BNS.off(),
                            $(
                              "body > .select2-container .select2-dropdown"
                            ).removeClass("top-0"));
                      })
                      .on("select2:select", () => {
                        $(window).width() <= 767 &&
                          ($(".select-2-backdrop").removeClass("show"),
                          $(
                            "body > .select2-container .select2-dropdown"
                          ).removeClass("top-0"),
                          (l = setTimeout(() => {
                            $(".select-2").select2("close");
                          }, 320)));
                      });
            });
          }
          ngAfterViewInit() {
            const l = document.createElement("div");
            l.setAttribute("class", "input-ic");
            const n = document.createElement("div");
            n.setAttribute("class", "arrow-down-fill-ic"),
              l.append(n),
              this.hostEl
                .getElementsByClassName("select2")
                .item(0)
                .parentNode.append(l);
            const u = this.selectEl.getAttribute("class");
            this.selectEl.setAttribute("class", u + " " + this.class),
              jQuery(this.hostEl).on("select2:open", () => {
                jQuery(".select2-search__field").attr(
                  "placeholder",
                  this.translator.app.select2.search_box
                );
              });
          }
          ngAfterViewChecked() {
            const l = this.hostEl
              .getElementsByClassName("parsley-errors-list")
              .item(0);
            l &&
              (this.selectEl.parentNode.removeChild(l),
              this.selectEl.parentNode.appendChild(l));
          }
          ngOnDestroy() {
            try {
              (this.selectEl = null),
                (this.select2Data = new Array()),
                (this.select2Value = ""),
                (this.options = null),
                jQuery(this.selectEl).remove(),
                $(".select-2") && $(".select-2").select2("close"),
                document.getElementsByClassName("select2-dropdown").length > 0 &&
                  document
                    .getElementsByClassName("select2-dropdown")
                    .item(0)
                    .remove();
            } catch (l) {
              console.log("select2_common_ngOnDestroy err:", l);
            }
          }
          onValueChanged(l) {
            this.data &&
              ((this.value && this.value.code !== l) || (!this.value && l)) &&
              (void 0 === l || "" === l
                ? (this.value = {})
                : ((this.value = this.data.get(l)),
                  this.valueChange.emit(
                    this.value
                      ? this.value
                      : {
                          code: Math.random().toString(36),
                          name: l,
                          nameEN: l,
                          nameVi: l,
                        }
                  )));
          }
        }
      },
      "w+Hj": function (l, n, u) {
        "use strict";
        var e = u("8Y7J"),
          t = u("Aer0"),
          s = u("s7LF"),
          r = u("eACs");
        u("lcJK"),
          u("47AC"),
          u("TSSN"),
          u.d(n, "a", function () {
            return i;
          }),
          u.d(n, "b", function () {
            return a;
          });
        var i = e.pb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;left:0;width:100%;height:100%}[_nghost-%COMP%]   ng-select2[_ngcontent-%COMP%]{display:block;left:0;width:100%;height:100%}[_nghost-%COMP%]   ng-select2[_ngcontent-%COMP%]   .select2[_ngcontent-%COMP%]{width:resolve}[_nghost-%COMP%]   ng-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]{width:100%!important}",
            ],
          ],
          data: {},
        });
        function a(l) {
          return e.Nb(
            0,
            [
              (l()(),
              e.rb(
                0,
                0,
                null,
                null,
                2,
                "ng-select2",
                [],
                [[1, "id", 0]],
                [[null, "valueChanged"]],
                function (l, n, u) {
                  var e = !0;
                  return (
                    "valueChanged" === n &&
                      (e = !1 !== l.component.onValueChanged(u) && e),
                    e
                  );
                },
                t.b,
                t.a
              )),
              e.Ib(
                5120,
                null,
                s.m,
                function (l) {
                  return [l];
                },
                [r.a]
              ),
              e.qb(
                2,
                5226496,
                null,
                0,
                r.a,
                [e.C, e.x, e.k],
                {
                  data: [0, "data"],
                  placeholder: [1, "placeholder"],
                  value: [2, "value"],
                  disabled: [3, "disabled"],
                  options: [4, "options"],
                },
                { valueChanged: "valueChanged" }
              ),
            ],
            function (l, n) {
              var u = n.component;
              l(
                n,
                2,
                0,
                u.select2Data,
                u.placeholder,
                u.select2Value,
                u.disabled,
                u.options
              );
            },
            function (l, n) {
              l(n, 0, 0, n.component.id);
            }
          );
        }
      },
    },
  ]);
  