import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-HU9PklQ3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-BP5P2uVA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Book() {
	const [whatsappLink, setWhatsappLink] = (0, import_react.useState)("https://wa.me/917414838654");
	(0, import_react.useEffect)(() => {
		const savedWhatsapp = localStorage.getItem("whatsappLink");
		if (savedWhatsapp) setWhatsappLink(savedWhatsapp);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "w-full backdrop-blur-md bg-background/60 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "font-display text-2xl tracking-wide text-gold-gradient",
						children: "Jaipur Relax Spa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden md:flex gap-10 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#services",
								className: "hover:text-primary transition",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#sanctuary",
								className: "hover:text-primary transition",
								children: "Sanctuary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#rituals",
								className: "hover:text-primary transition",
								children: "Rituals"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-grow flex items-center justify-center py-20 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl w-full bg-card border border-border rounded-xl p-10 text-center shadow-2xl relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-primary mb-4",
							children: "Secure your ritual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl md:text-5xl font-light mb-8",
							children: "Book an Appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 text-muted-foreground text-lg mb-10 max-w-lg mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"To confirm your booking, a small advance payment of ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold-gradient font-display text-2xl",
										children: "₹299"
									}),
									" is required."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The remaining balance will be paid in person at the meeting place." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-background border border-border rounded-lg mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-foreground mb-2",
										children: "Accepted Payment Methods for Advance:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-center gap-4 text-primary font-display text-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paytm" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gpay" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phonepe" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm italic mt-4 text-primary/80",
									children: "100% Refund Policy: If you don't like the therapist upon meeting, your advance is refunded."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-6 h-6" }), "Message us on WhatsApp to Book"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border py-10 text-center text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-gold-gradient mb-2",
					children: "Jaipur Relax Spa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Jaipur Relax Spa · All bookings by appointment"
				] })]
			})
		]
	});
}
//#endregion
export { Book as component };
