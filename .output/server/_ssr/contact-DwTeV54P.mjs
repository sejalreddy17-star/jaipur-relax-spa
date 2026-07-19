import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-HU9PklQ3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DwTeV54P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
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
					className: "max-w-xl w-full bg-card border border-border rounded-xl p-10 text-center shadow-2xl relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl md:text-5xl font-light mb-4",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-10 text-lg",
							children: "We are here to assist you. The fastest way to reach our spa concierge is via WhatsApp. Send us a message to inquire about our services, therapists, or to schedule an appointment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-medium text-white hover:bg-[#25D366]/90 transition shadow-[0_0_40px_-10px_#25D366]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-6 h-6" }), "Chat with us on WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid grid-cols-2 gap-6 text-sm text-left border-t border-border/50 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary uppercase tracking-widest text-xs mb-1",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"Jaipur, Rajasthan",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"India"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary uppercase tracking-widest text-xs mb-1",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"Open 24/7",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"By Appointment Only"
								]
							})] })]
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
export { Contact as component };
