import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-HU9PklQ3.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlAVaT3F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImg = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2000&auto=format&fit=crop";
var services = [
	{
		name: "Incall Booking",
		desc: "Service at our location. Remaining Amount pay at meeting place.",
		duration: "Confirm now",
		price: "₹299",
		img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
	},
	{
		name: "Outcall Booking",
		desc: "Service at your location or Home. Remaining Amount pay at meeting place.",
		duration: "Confirm now",
		price: "₹599",
		img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop"
	},
	{
		name: "100% Refund Policy",
		desc: "If you don't like massager girls then 💯% refund your money back 🔹",
		duration: "Guarantee",
		price: "Refund",
		img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
	}
];
var rituals = [
	{
		time: "1",
		unit: "hour",
		label: "Full body massage",
		price: "₹2000"
	},
	{
		time: "2",
		unit: "hour",
		label: "Full body massage",
		price: "₹3500"
	},
	{
		time: "3",
		unit: "hour",
		label: "Full body massage",
		price: "₹4500"
	},
	{
		time: "4",
		unit: "hour",
		label: "Full body massage",
		price: "₹5500"
	},
	{
		time: "1",
		unit: "day",
		label: "Full Day massage",
		price: "₹6000"
	},
	{
		time: "1",
		unit: "night",
		label: "Full night massage",
		price: "₹7000"
	}
];
function Landing() {
	const [whatsappLink, setWhatsappLink] = (0, import_react.useState)("https://wa.me/917414838654");
	(0, import_react.useEffect)(() => {
		const savedWhatsapp = localStorage.getItem("whatsappLink");
		if (savedWhatsapp) setWhatsappLink(savedWhatsapp);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "font-display text-2xl tracking-wide text-gold-gradient",
							children: "Jaipur Relax Spa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex gap-10 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services",
									className: "hover:text-primary transition",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#sanctuary",
									className: "hover:text-primary transition",
									children: "Sanctuary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#rituals",
									className: "hover:text-primary transition",
									children: "Rituals"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-primary transition",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappLink,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]",
								"aria-label": "WhatsApp Contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "rounded-full border border-primary/40 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition",
								children: "Book"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative flex min-h-screen items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImg,
							alt: "Premium spa services in Jaipur - candlelit treatment room",
							width: 1920,
							height: 1200,
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-6 text-xs uppercase tracking-[0.4em] text-primary",
									children: "𝗪𝗘𝗟𝗟𝗖𝗢𝗠𝗘 • 𝗬𝗲𝘀 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝘀𝗶𝗿"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]",
									children: [
										"Premium Spa Services ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-gold-gradient",
											children: "in Jaipur"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Full Body Massage & Relaxation."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed",
									children: "Booking options available: Paytm, Gpay, Phonepe. Booking confirm now (₹299) ✅"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book",
										className: "rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]",
										children: "Reserve Your Ritual"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#services",
										className: "rounded-full border border-border px-8 py-3.5 text-sm text-foreground hover:border-primary transition",
										children: "Explore Services"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: "Scroll"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "services",
					className: "py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-16 flex items-end justify-between flex-wrap gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-primary mb-4",
								children: "Signature Treatments"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-light",
								children: "Jaipur Spa Services"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-muted-foreground",
								children: "Each treatment is a slow, intentional passage — designed by our senior therapists."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 md:grid-cols-3",
							children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative overflow-hidden rounded-lg bg-card border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/5] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.img,
										alt: `${s.name} - Spa Services in Jaipur`,
										loading: "lazy",
										width: 800,
										height: 1e3,
										className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-primary",
												children: s.duration
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground leading-relaxed mb-6",
											children: s.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-t border-border pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-xl text-gold-gradient",
												children: s.price
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/book",
												className: "text-xs uppercase tracking-widest text-primary hover:text-gold transition",
												children: "Reserve →"
											})]
										})
									]
								})]
							}, s.name))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "sanctuary",
					className: "py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: heroImg,
								alt: "Spa sanctuary",
								loading: "lazy",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-primary mb-4",
								children: "Our Agency"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-light leading-tight mb-6",
								children: "Genuine profiles. Authentic services."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed mb-8",
								children: "As a trusted spa agency in Jaipur, Jaipur Relax Spa guarantees 100% genuine services. We pride ourselves on authentic traditional therapies, complete privacy, and verified therapists to ensure your ultimate relaxation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-6 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-gold-gradient mb-1",
										children: "100%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Genuine Profiles"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-gold-gradient mb-1",
										children: "50+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Verified Therapists"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-gold-gradient mb-1",
										children: "Premium"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Traditional Oils"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-gold-gradient mb-1",
										children: "24/7"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Customer Support"
									})] })
								]
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "rituals",
					className: "py-24 border-y border-border bg-card/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center mb-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-primary mb-4",
								children: "The Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-light",
								children: "Choose Your Passage of Time"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: rituals.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-6 py-6 border-b border-border/60 hover:border-primary/50 transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-3xl md:text-4xl text-gold-gradient w-20 md:w-28 shrink-0",
										children: [r.time, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground ml-1",
											children: r.unit
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 text-base md:text-xl truncate",
										children: r.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl md:text-3xl text-primary shrink-0",
										children: r.price
									})
								]
							}, i))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative py-32 bg-radial-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-primary mb-6",
								children: "Authentic Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-light leading-tight",
								children: "Experience genuine wellness therapies in Jaipur with trusted, verified professionals."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "book",
					className: "relative py-32 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-primary mb-6",
								children: "Booking Options"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-6xl font-light leading-tight mb-6",
								children: "Paytm • Gpay • Phonepe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-10",
								children: "Booking confirm now (₹299) ✅. Remaining Amount pay at meeting place."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappLink,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-block rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_60px_-10px_var(--gold)]",
									children: "Contact us on WhatsApp"
								})
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition mb-6 shadow-[0_0_20px_-5px_#25D366]",
						"aria-label": "WhatsApp Contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-7 h-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-gold-gradient mb-2",
						children: "Jaipur Relax Spa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Jaipur Relax Spa · All bookings by appointment"
					] })
				]
			})
		]
	});
}
//#endregion
export { Landing as component };
