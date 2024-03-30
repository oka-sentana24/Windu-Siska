import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.n3HjTR_3.js","_app/immutable/chunks/scheduler.mRS13lKS.js","_app/immutable/chunks/index.DJNCrarQ.js","_app/immutable/chunks/entry.DZy8YdS7.js"];
export const stylesheets = ["_app/immutable/assets/4.DOkkq0IA.css"];
export const fonts = [];
