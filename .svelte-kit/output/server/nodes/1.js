

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Szt5tZHi.js","_app/immutable/chunks/scheduler.mRS13lKS.js","_app/immutable/chunks/index.DJNCrarQ.js","_app/immutable/chunks/entry.DZy8YdS7.js"];
export const stylesheets = [];
export const fonts = [];
