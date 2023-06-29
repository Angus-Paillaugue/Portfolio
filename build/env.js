/* global "BUILD_" */

const expected = new Set([
	'SOCKET_PATH',
	'HOST',
	'PORT',
	'ORIGIN',
	'XFF_DEPTH',
	'ADDRESS_HEADER',
	'PROTOCOL_HEADER',
	'HOST_HEADER',
	'BODY_SIZE_LIMIT'
]);

if ("BUILD_") {
	for (const name in process.env) {
		if (name.startsWith("BUILD_")) {
			const unprefixed = name.slice("BUILD_".length);
			if (!expected.has(unprefixed)) {
				throw new Error(
					`You should change envPrefix (${"BUILD_"}) to avoid conflicts with existing environment variables — unexpectedly saw ${name}`
				);
			}
		}
	}
}

/**
 * @param {string} name
 * @param {any} fallback
 */
function env(name, fallback) {
	const prefixed = "BUILD_" + name;
	return prefixed in process.env ? process.env[prefixed] : fallback;
}

export { env };
