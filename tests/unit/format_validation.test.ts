import { describe, it, expect } from "vitest";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import { briefFormSchema } from "@/lib/validation";

describe("Formatting Utilities", () => {
  it("formats currency correctly in Turkish Lira", () => {
    expect(formatCurrency(null)).toBe("Teklif İste");
    expect(formatCurrency(350)).toContain("350");
    expect(formatCurrency(650)).toContain("650");
    expect(formatCurrency(900)).toContain("900");
  });

  it("formats standard numbers with separators", () => {
    expect(formatNumber(1000)).toBe("1.000");
    expect(formatNumber(2400000)).toBe("2.400.000");
  });

  it("formats percentages accurately", () => {
    expect(formatPercent(80.1)).toBe("%80,1");
    expect(formatPercent(37.9)).toBe("%37,9");
  });
});

describe("Brief Form Validation", () => {
  it("validates valid form submissions", () => {
    const validData = {
      brandName: "Capitis Partner",
      contactName: "Ali Veli",
      email: "ali@partner.com",
      phone: "05321234567",
      selectedPackage: "starter",
      selectedPlatform: ["TikTok"],
      campaignGoal: "Markamızı genç kitleyle buluşturmak istiyoruz.",
      budgetRange: "₺650",
      termsAccepted: true,
    };

    const result = briefFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails when terms are not accepted", () => {
    const invalidData = {
      brandName: "Capitis Partner",
      contactName: "Ali Veli",
      email: "ali@partner.com",
      phone: "05321234567",
      selectedPackage: "starter",
      selectedPlatform: ["TikTok"],
      campaignGoal: "Kısa hedef açıklaması.",
      termsAccepted: false,
    };

    const result = briefFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
