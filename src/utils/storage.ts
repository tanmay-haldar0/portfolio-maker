export const saveToLocal = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocal = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const generateId = () => crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9);


export const loadAllPortfolios = () => {
  const items = [];

  for (const key in localStorage) {
    if (key.startsWith("portfolio_")) {
      // Ignore the 'portfolio_id' key — it's not actual data
      if (key === "portfolio_id") continue;

      const raw = localStorage.getItem(key);
      try {
        const parsed = JSON.parse(raw!);
        items.push({ id: key.replace("portfolio_", ""), ...parsed });
      } catch (err) {
        console.warn(`Skipping invalid portfolio entry in localStorage: ${key}`, err);
      }
    }
  }

  return items;
};



