// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	
	// Node.js global types
	namespace NodeJS {
		interface Process {
			cwd(): string;
			env: Record<string, string | undefined>;
		}
	}
	
	var process: NodeJS.Process;
}

export {};
