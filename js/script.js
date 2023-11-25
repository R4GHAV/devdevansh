gsap.registerPlugin(ScrollTrigger),
  ScrollTrigger.normalizeScroll(!0),
  ScrollTrigger.defaults({ markers: !1 }),
  $(".nav-text-link").find(".currenttext").addClass("hide"),
  $(".nav-text-link").find(".normaltext").addClass("show"),
  $(".nav-text-link").find(".activedot").addClass("hide"),
  $(".nav-text-link.w--current").find(".currenttext").addClass("show"),
  $(".nav-text-link.w--current").find(".normaltext").addClass("hide"),
  $(".nav-text-link.w--current").find(".activedot").addClass("show"),
  setTimeout(() => {
    let e;
    new SplitType("[text-split]", { types: "chars", tagName: "span" });
    function t() {
      (e = new SplitType(".split-lines", {
        types: "lines, words",
        tagName: "span",
      })),
        $(".split-lines").find(".line").append("<div class='line-mask'></div>"),
        $(".line").each(function (e) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: $(this),
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .to($(this).find(".line-mask"), { width: "0%", duration: 1 });
        });
    }
    $("[letter-fade]").each(function (e) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            end: "top 80%",
            toggleActions: "none play none reverse",
          },
        })
        .from($(this).find(".char"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
          stagger: { each: 0.08, from: "start" },
        });
    }),
      t();
    let r = $(window).innerWidth();
    window.addEventListener("resize", function () {
      r !== $(window).innerWidth() &&
        ((r = $(window).innerWidth()), e.revert(), t());
    });
    let i = $(".top-black-overlay"),
      a = $(".p-line-1"),
      n = $(".p-line-2_black"),
      o = $(".p-line-3_black"),
      s = $(".p-line-4_black"),
      l = $(".p-line-1_black"),
      d = $(".p-line-2").eq(0),
      p = $(".p-line-2").eq(1),
      c = $(".p-line-2").eq(2),
      g = $(".p-line-3_outer"),
      h = $(".p-line-4"),
      m = $(".background-waves-wrapper"),
      f = $(".preloader-page-wrapper"),
      u = $(".pl-name-wrapper"),
      y = $(".preloader-name").eq(0),
      w = $(".preloader-name").eq(1),
      x =
        (new SplitType(".preloader-name", {
          types: "words, chars",
          tagName: "span",
        }),
        $(".page-wrapper")),
      b = $(".crystal-head-container");
    var v = window.innerHeight;
    let T = $(".bg-waves-wrapper"),
      k = $(".navbar-wrapper");
    gsap
      .timeline({
        defaults: {
          duration: 0.8,
          ease: "Expo.easeInOut",
          onComplete: function () {
            x.removeClass("no-click");
          },
        },
      })
      .to(i, { opacity: 0, duration: "0.1" })
      .from(a, { width: 0, stagger: { each: 0.1 } })
      .from(n, { width: "250%", stagger: { each: 0.1 } }, "<")
      .from(o, { width: "250%", stagger: { each: 0.1 } }, "<")
      .from(s, { width: "250%", stagger: { each: 0.1 } }, "<")
      .to(l, { width: "100%", stagger: { each: 0.1 }, delay: 0.6 }, "<")
      .to(g, { height: "8rem", stagger: { each: 0.1 } }, "<")
      .to(h, { width: "7rem", stagger: { each: 0.1 } }, "<")
      .to(d, { width: "9.1rem" }, "<")
      .to(p, { width: "8.05rem", delay: "0.1" }, "<")
      .to(c, { width: "7rem", delay: "0.1" }, "<")
      .from(m, { height: "0%", duration: 1.5, delay: "0.5" }, ">")
      .from(f, { yPercent: 100, duration: 1.9 }, "<")
      .from(
        y.find(".char"),
        {
          yPercent: 25,
          delay: "1",
          opacity: 0,
          stagger: { each: 0.051 },
          duration: 0.3,
          ease: "power1.out",
        },
        "<"
      )
      .from(
        w.find(".char"),
        {
          yPercent: 25,
          delay: "0.25",
          opacity: 0,
          stagger: { each: 0.051 },
          duration: 0.3,
          ease: "power1.out",
        },
        "<"
      )
      .fromTo(
        u,
        { height: "33.1em" },
        { height: v, duration: 1.5, delay: "1.25" },
        "<"
      )
      .from(x, { opacity: 0, delay: "0.75" }, "<")
      .from(b, { opacity: 0, stagger: { each: 0.2 } }, "<")
      .from(k, { opacity: 0, y: -30, duration: 1.5, ease: "Expo.easeOut" }, "<")
      .to(f, { opacity: 0, duration: "0.01" }, ">")
      .from(T, { opacity: 0, duration: "2" }, "<");
    gsap.utils.toArray(".crystal-scroll").forEach((e) => {
      gsap.to(e, {
        yPercent: -15,
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
    let C = gsap.matchMedia();
    C.add("(min-width: 992px)", () => {
      gsap.to(".crystal-head", {
        opacity: "0",
        scale: "0.5",
        stagger: { each: 0.3, from: "start" },
        scrollTrigger: {
          start: "top top+=16",
          end: "10% top",
          trigger: ".sc-header.c-header",
          scrub: 1,
        },
      });
    }),
      C.add("(max-width: 991px)", () => {
        gsap.to(".crystal-head", {
          opacity: "0",
          scale: "0.5",
          stagger: { each: 0.3, from: "start" },
          scrollTrigger: {
            start: "top top+=16",
            end: "10% top",
            trigger: ".sc-header.tab-header",
            scrub: 1,
          },
        });
      });
    new SplitType("[hoverstagger='text']", { types: "chars", tagName: "span" });
    function _(e) {
      if (e.matches) {
        new SplitType("[linefade='text']", { types: "lines", tagName: "span" }),
          new SplitType("[linefade='heading']", {
            types: "chars",
            tagName: "span",
          });
        $("[linefade='link']").each(function (e) {
          let t = $(this).find("[linefade='heading']").eq(0),
            r = $(this).find("[linefade='heading']").eq(1);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: t,
                start: "top bottom",
                end: "top 90%",
                toggleActions: "none play none reverse",
              },
            })
            .from(t.find(".char"), {
              opacity: 0,
              ease: "power2.out",
              stagger: { each: 0.1, from: "start" },
            });
          let i = gsap.timeline({
            paused: !0,
            defaults: { duration: 0.5, ease: "power2.out" },
          });
          i.to(t.find(".char"), {
            yPercent: -110,
            duration: 0.3,
            stagger: { amount: 0.2 },
          }),
            i.from(
              r.find(".char"),
              { yPercent: 100, duration: 0.3, stagger: { amount: 0.2 } },
              0
            ),
            $(this).on("mouseenter", function () {
              i.play();
            }),
            $(this).on("mouseleave", function () {
              i.reverse();
            });
        }),
          $("[linefade='link']").each(function (e) {
            let t = $(this).find("[linefade='text']"),
              r = gsap.timeline({ paused: !0 });
            r.from(t.find(".line"), {
              yPercent: 100,
              opacity: "0",
              duration: 0.3,
              stagger: { amount: 0.15 },
            }),
              $(this).on("mouseenter", function () {
                r.play(), $(this).find(".fill").addClass("expand");
              }),
              $(this).on("mouseleave", function () {
                r.reverse(), $(this).find(".fill").removeClass("expand");
              }),
              $(".point-top").on("mouseleave", function () {
                $(this)
                  .siblings(".sc-container")
                  .find(".fill")
                  .removeClass("bottom"),
                  $(this)
                    .siblings(".sc-container")
                    .find(".noise-img")
                    .removeClass("bottom"),
                  $(this)
                    .siblings(".sc-container")
                    .find(".sc-highlightwrapper")
                    .removeClass("bottom");
              }),
              $(".point-bottom").on("mouseleave", function () {
                $(this)
                  .siblings(".sc-container")
                  .find(".fill")
                  .addClass("bottom"),
                  $(this)
                    .siblings(".sc-container")
                    .find(".noise-img")
                    .addClass("bottom"),
                  $(this)
                    .siblings(".sc-container")
                    .find(".sc-highlightwrapper")
                    .addClass("bottom");
              });
          }),
          $(".sc-header.c-header").each(function (e) {
            let t = $(this),
              r = $(".profile_pic-wrapper"),
              i = $(".video-embed-wrapper"),
              a = $(".showreel-text-wrapper");
            $(".crystal-1"), $(".crystal-2"), $(".crystal-3");
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "24% top",
                  end: "25% top",
                  toggleActions: "none play none reverse",
                },
              })
              .to(i, { opacity: 1 }),
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: t,
                    start: "24% top",
                    end: "25% top",
                    toggleActions: "none play none reverse",
                  },
                })
                .to(a, { opacity: 1 }),
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: t,
                    start: "17% top",
                    end: "bottom bottom",
                    scrub: 2,
                  },
                })
                .fromTo(
                  r,
                  {
                    width: "11.5em",
                    height: "7em",
                    x: "0em",
                    y: "0em",
                    borderRadius: "6em",
                    duration: 1,
                  },
                  {
                    width: "100%",
                    height: "80vh",
                    x: "-33em",
                    y: "14em",
                    borderRadius: "0em",
                    duration: 1,
                  }
                );
          }),
          $(".sc-header.c-header").each(function (e) {
            let t = $(this),
              r =
                (new SplitType($(this).find(".text-style-h1"), {
                  types: "words, chars",
                  tagName: "span",
                }),
                $(".text-style-h1"));
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "3% top",
                  end: "13% top",
                  scrub: 1.5,
                },
              })
              .to(r.find(".char"), { y: "-120%", duration: 1 });
          }),
          $(".sc-header.c-header").each(function (e) {
            let t = $(this),
              r =
                (new SplitType($(this).find(".text-style-h1-alt"), {
                  types: "words, chars",
                  tagName: "span",
                }),
                $(".text-style-h1-alt"));
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "9% top",
                  end: "19% top",
                  scrub: 1.5,
                },
              })
              .to(r.find(".char"), { y: "-120%", duration: 1 });
          }),
          $(".sc-header.c-header").each(function (e) {
            let t = $(this),
              r = $(".marquee-wrapper");
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top top",
                  end: "8% top",
                  scrub: 1,
                },
              })
              .to(r, { opacity: "0", duration: 1 });
          }),
          $(".footer-button-wrapper").on("mouseenter", function () {
            $(this).find(".circ-purple").addClass("expand");
          }),
          $(".footer-button-wrapper").on("mouseleave", function () {
            $(this).find(".circ-purple").removeClass("expand");
          }),
          $(".text_link-block").on("mouseenter", function () {
            $(this).find(".text_link-line").addClass("opac-100"),
              $(this).find(".text_link-line-wrapper").addClass("opac-100"),
              setTimeout(() => {
                $(this).find(".text_link-line-wrapper").addClass("expand");
              }, 20);
          }),
          $(".text_link-block").on("mouseleave", function () {
            $(this).find(".text_link-line").addClass("collapse"),
              setTimeout(() => {
                $(this).find(".text_link-line").removeClass("opac-100"),
                  $(this)
                    .find(".text_link-line-wrapper")
                    .removeClass("opac-100"),
                  $(this).find(".text_link-line-wrapper").removeClass("expand"),
                  $(this).find(".text_link-line").removeClass("collapse");
              }, 500);
          });
        let e = document.querySelector(".sc-header"),
          t =
            (document.querySelector(".main-wrapper"),
            document.querySelector(".footer-wrapper"));
        gsap.timeline({
          scrollTrigger: {
            trigger: t,
            start: "50% 80%",
            end: "50% 50%",
            scrub: 1,
          },
        }),
          gsap.timeline({
            scrollTrigger: {
              trigger: e,
              start: "top top",
              end: "1% top",
              scrub: !0,
            },
          });
        $(".project-container").each(function (e) {
          $(this);
          let t = $(this).find(".project_image"),
            r = $(this).find(".project-images"),
            i = gsap.timeline({ paused: !0 });
          i.to(t, {
            y: "0vh",
            x: "0vw",
            ease: "power1.out",
            duration: 0.7,
            stagger: { each: 0.17, from: "start" },
          }),
            $(this).on("mouseenter", function () {
              i.timeScale(1), i.restart();
            }),
            $(this).on("mouseleave", function () {
              i.timeScale(2), i.reverse();
            }),
            gsap.set(r, { xPercent: -50, yPercent: -50 });
          const a = $(this).find(".project-images"),
            n = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            o = { x: n.x, y: n.y },
            s = gsap.quickSetter(a, "x", "px"),
            l = gsap.quickSetter(a, "y", "px");
          window.addEventListener("mousemove", (e) => {
            (o.x = e.x), (o.y = e.y);
          }),
            gsap.ticker.add(() => {
              const e = 1 - Math.pow(0.95, gsap.ticker.deltaRatio());
              (n.x += (o.x - n.x) * e),
                (n.y += (o.y - n.y) * e),
                s(n.x),
                l(n.y);
            });
        }),
          $(".pr-image").each(function (e) {
            let t = $(this),
              r = gsap.timeline({ paused: !0 });
            r.to(t, { scale: 1.1, ease: Power1.easeOut, duration: 0.1 }),
              $(this).on("mouseenter", function () {
                r.restart();
              }),
              $(this).on("mouseleave", function () {
                r.reverse();
              });
          }),
          $(".pr-image").each(function (e) {
            let t = $(this);
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top bottom",
                  end: "bottom top",
                  ease: "power3.Out",
                  scrub: 0.6,
                },
              })
              .from(t, { yPercent: -10 });
          });
      } else {
        new SplitType("[linefade='text']", { types: "lines", tagName: "span" }),
          new SplitType("[linefade='heading']", {
            types: "chars",
            tagName: "span",
          });
        $(".sc-header.tab-header").each(function (e) {
          new SplitType($(this).find(".text-style-h1"), {
            types: "words, chars",
            tagName: "span",
          }),
            new SplitType($(this).find(".text-style-h1-alt"), {
              types: "words, chars",
              tagName: "span",
            });
        }),
          $("[linefade='link']").each(function (e) {
            let t = $(this).find("[linefade='heading']").eq(0),
              r = $(this).find("[linefade='heading']").eq(1);
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top bottom",
                  end: "top 90%",
                  toggleActions: "none play none reverse",
                },
              })
              .from(t.find(".char"), {
                opacity: 0,
                ease: "power2.out",
                stagger: { each: 0.1, from: "start" },
              });
            let i = gsap.timeline({
              scrollTrigger: {
                trigger: $(this),
                duration: 0.5,
                ease: "power2.out",
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
              },
            });
            i.to(t.find(".char"), {
              yPercent: -110,
              duration: 0.3,
              stagger: { amount: 0.2 },
            }),
              i.from(
                r.find(".char"),
                { yPercent: 100, duration: 0.3, stagger: { amount: 0.2 } },
                0
              );
          }),
          $("[linefade='link']").each(function (e) {
            let t = $(this).find("[linefade='text']"),
              r = $(this).find(".fill");
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: $(this),
                  duration: 0.5,
                  ease: "power2.out",
                  start: "top center",
                  end: "bottom center",
                  toggleActions: "play reverse play reverse",
                  toggleClass: { targets: r, className: "expand" },
                },
              })
              .from(t.find(".line"), {
                yPercent: 100,
                opacity: "0",
                duration: 0.3,
                stagger: { amount: 0.15 },
              });
          });
      }
    }
    $("[hoverstagger='link']").each(function (e) {
      let t = $(this).find("[hoverstagger='text']").eq(0),
        r = $(this).find("[hoverstagger='text']").eq(1);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: t,
            start: "top bottom",
            end: "top 90%",
            toggleActions: "none play none reverse",
          },
        })
        .from(t.find(".char"), {
          opacity: 0,
          ease: "power2.out",
          stagger: { each: 0.1, from: "start" },
        });
      let i = gsap.timeline({
        paused: !0,
        defaults: { duration: 0.5, ease: "power2.out" },
      });
      i.to(t.find(".char"), {
        yPercent: -110,
        duration: 0.3,
        stagger: { amount: 0.2 },
      }),
        i.from(
          r.find(".char"),
          { yPercent: 100, duration: 0.3, stagger: { amount: 0.2 } },
          0
        ),
        $(this).on("mouseenter", function () {
          i.play();
        }),
        $(this).on("mouseleave", function () {
          i.reverse();
        });
    });
    const S = window.matchMedia("(min-width: 992px)");
    function q(e) {
      e.matches &&
        $(".sc-header.tab-header").each(function (e) {
          let t = $(this),
            r = $(".profile_pic-wrapper_fromtab"),
            i = $(".video-embed-wrapper_fromtab"),
            a = $(".showreel-text-wrapper-fromtab");
          var n = window.innerHeight / 2 - 210.3122 - 38.5,
            o = window.innerWidth / 2,
            s = document.getElementById("hola-wrapper_tab").offsetWidth,
            l =
              0 -
              o +
              document.getElementById("profile-pic-wrapper_tab").offsetWidth /
                2 +
              60 +
              s +
              24;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: t,
                start: "14% top",
                end: "15% top",
                toggleActions: "none play none reverse",
              },
            })
            .to(i, { opacity: 1 }),
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "14% top",
                  end: "15% top",
                  toggleActions: "none play none reverse",
                },
              })
              .to(a, { opacity: 1 }),
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top top+=13",
                  end: "45% top",
                  scrub: 1,
                },
              })
              .fromTo(
                r,
                {
                  width: "11.5em",
                  height: "7em",
                  x: l,
                  y: n,
                  borderRadius: "6em",
                  duration: 1,
                },
                {
                  width: "90%",
                  height: "40vw",
                  x: "0px",
                  y: "0px",
                  borderRadius: "0em",
                  duration: 1,
                }
              );
        });
    }
    _(S), S.addListener(_);
    const P = window.matchMedia("(min-width: 768px)");
    function A(e) {
      e.matches &&
        $(".sc-header.tab-header").each(function (e) {
          let t = $(this),
            r = $(".profile_pic-wrapper_fromtab"),
            i = $(".video-embed-wrapper_fromtab"),
            a = $(".showreel-text-wrapper-fromtab");
          var n = window.innerHeight / 2 - 110.11 - 24.77 - 72,
            o = window.innerWidth / 2,
            s = document.getElementById("hola-wrapper_tab").offsetWidth,
            l =
              0 -
              o +
              document.getElementById("profile-pic-wrapper_tab").offsetWidth /
                2 +
              20 +
              s +
              24;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: t,
                start: "14% top",
                end: "15% top",
                toggleActions: "none play none reverse",
              },
            })
            .to(i, { opacity: 1 }),
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "14% top",
                  end: "15% top",
                  toggleActions: "none play none reverse",
                },
              })
              .to(a, { opacity: 1 }),
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top top+=13",
                  end: "35% top",
                  scrub: 1,
                },
              })
              .fromTo(
                r,
                {
                  width: "7em",
                  height: "4.5em",
                  x: l,
                  y: n,
                  borderRadius: "6em",
                  duration: 1,
                },
                {
                  width: "90%",
                  height: "40vw",
                  x: "0px",
                  y: "0px",
                  borderRadius: "0em",
                  duration: 1,
                }
              );
        });
    }
    q(P), P.addListener(q);
    const N = window.matchMedia("(max-width: 767px)");
    function E() {
      var e = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: !0,
        hour: "numeric",
        minute: "numeric",
      });
      document.getElementById("clock").textContent = e;
    }
    A(N), N.addListener(A), E(), setInterval(E, 15e3);
  }, 1e3);
