export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","asset/.DS_Store","asset/CHE01244.jpg","asset/CHE01271.jpg","asset/CHE01277.jpg","asset/CHE01295.jpg","asset/CHE01320.jpg","asset/CHE01405.jpg","asset/CHE01430.jpg","asset/CHE01431.jpg","asset/gallery/.DS_Store","asset/gallery/CHE01185_gallery1.jpeg","asset/gallery/CHE01195_gallery2.jpeg","asset/gallery/CHE01200_gallery3.jpeg","asset/gallery/CHE01220_gallery4.jpeg","asset/gallery/CHE01243_gallery5.jpeg","asset/gallery/CHE01284_gallery6.jpeg","asset/gallery/CHE01305_gallery8.jpeg","asset/gallery/CHE01324_gallery7.jpeg","asset/gallery/CHE01419_gallery9.jpeg","favicon.png","robots.txt","svelte-welcome.png"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.P5o1WkXm.js","app":"_app/immutable/entry/app.DtPe05gO.js","imports":["_app/immutable/entry/start.P5o1WkXm.js","_app/immutable/chunks/entry.D3umswmq.js","_app/immutable/chunks/scheduler.C0FFGZse.js","_app/immutable/chunks/index.BcTZRQbh.js","_app/immutable/entry/app.DtPe05gO.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.C0FFGZse.js","_app/immutable/chunks/index.CKuX_8to.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
