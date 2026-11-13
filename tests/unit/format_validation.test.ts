import { describe, it, expect } from "vitest";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import { briefFormSchema } from "@/lib/validation";
import { collaborationPackages, collaborationAddons } from "@/config/packages";

describe("Formatting Utilities", () => {
  it("formats currency correctly in Turkish Lira", () => {
    expect(formatCurrency(null)).toBe("Teklif İste");
    expect(formatCurrency(350)).toContain("350");
    expect(formatCurrency(650)).toContain("650");
    expect(formatCurrency(900)).toContain("900");
    expect(formatCurrency(1650)).toContain("1.650");
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

describe("Collaboration Packages & Addons Config", () => {
  it("contains 5 structured packages including VIP and Enterprise", () => {
    expect(collaborationPackages.length).toBe(5);
    expect(collaborationPackages.map((p) => p.id)).toEqual([
      "mini",
      "starter",
      "advantage",
      "vip_growth",
      "enterprise_custom",
    ]);
  });

  it("contains all modular addons with pricing", () => {
    expect(collaborationAddons.length).toBeGreaterThanOrEqual(5);
    const sparkAds = collaborationAddons.find((a) => a.id === "spark_ads");
    expect(sparkAds).toBeDefined();
    expect(sparkAds?.price).toBe(400);
  });
});

describe("Brief Form Validation", () => {
  it("validates valid form submissions with addons and custom total", () => {
    const validData = {
      brandName: "Capitis Partner",
      contactName: "Ali Veli",
      email: "ali@partner.com",
      phone: "05321234567",
      selectedPackage: "vip_growth",
      selectedAddons: ["spark_ads", "fast_delivery"],
      selectedPlatform: ["TikTok", "Instagram Reels"],
      campaignGoal: "Markamızı genç ve vizyoner kitleyle buluşturmak istiyoruz.",
      budgetRange: "₺2.300",
      calculatedTotal: 2300,
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
      selectedAddons: [],
      selectedPlatform: ["TikTok"],
      campaignGoal: "Kısa hedef açıklaması.",
      termsAccepted: false,
    };

    const result = briefFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
