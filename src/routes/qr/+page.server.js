import { redirect } from "@sveltejs/kit";

export const ssr = false;

export async function load() {
    throw redirect(308, "/");
};