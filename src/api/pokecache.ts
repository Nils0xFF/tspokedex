export type CacheEntry<T> = {
  createdAt: number;
  value: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, value: T) {
    this.#cache.set(key, { createdAt: Date.now(), value });
  }

  get<T>(key: string): T | undefined {
    return this.#cache.get(key)?.value;
  }

  #reap() {
    const now = Date.now();
    this.#cache.forEach((entry, key) => {
      if (now - this.#interval > entry.createdAt) {
        this.#cache.delete(key);
      }
    });
  }

  #startReapLoop() {
    if (!this.#reapIntervalId) {
      this.#reapIntervalId = setInterval(() => {
        this.#reap();
      }, this.#interval);
    }
  }

  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }
}
