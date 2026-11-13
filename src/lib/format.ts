/**
 * Formats a numeric price into Turkish Lira currency string.
 */
export function formatCurrency(amount: number | null, currency = "TRY"): string {
  if (amount === null || isNaN(amount)) {
    return "Teklif İste";
  }
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats standard numbers in Turkish locale.
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

/**
 * Formats percentage numbers in Turkish locale.
 */
export function formatPercent(value: number): string {
  return `%${value.toLocaleString("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
}
