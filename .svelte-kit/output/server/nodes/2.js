import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CHA-N3T7.js","_app/immutable/chunks/scheduler.mRS13lKS.js","_app/immutable/chunks/index.DJNCrarQ.js","_app/immutable/chunks/index.CMoXUnDu.js"];
export const stylesheets = ["_app/immutable/assets/2.C7X2bgY3.css"];
export const fonts = [];
