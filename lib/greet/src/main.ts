export function greet(name?: string): string {
  return `Hello, ${name ? name : "stranger"}!`;
}
