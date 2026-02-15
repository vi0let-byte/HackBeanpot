// jsonConverter: Helper class to convert between Supabase balloons JSON and Balloon objects (from app/balloon.ts)
// and vice versa. No reference to Balloon.tsx.

import Balloon from "../app/balloon.ts";

/**
 * Converts the Supabase balloons JSON (array) to a list of Balloon objects.
 * @param {any[]} balloonsJson - The JSON from Supabase (should be an array of balloon objects)
 * @returns {Balloon[]} List of Balloon objects
 */
export function jsonToBalloons(balloonsJson) {
	if (!Array.isArray(balloonsJson)) return [];
	return balloonsJson.map((b) => {
		const balloon = new Balloon(b.taskName, new Date(b.timeDue));
		balloon.taskId = b.taskId;
		balloon.timeCreated = new Date(b.timeCreated);
		balloon.bundleId = b.bundleId ?? null;
		return balloon;
	});
}

/**
 * Converts a list of Balloon objects to JSON suitable for Supabase storage.
 * @param {Balloon[]} balloons - List of Balloon objects
 * @returns {any[]} JSON array for Supabase
 */
export function balloonsToJson(balloons) {
	if (!Array.isArray(balloons)) return [];
	return balloons.map((b) => ({
		taskId: b.taskId,
		taskName: b.taskName,
		timeCreated: b.timeCreated instanceof Date ? b.timeCreated.toISOString() : b.timeCreated,
		timeDue: b.timeDue instanceof Date ? b.timeDue.toISOString() : b.timeDue,
		bundleId: b.bundleId ?? null,
	}));
}
