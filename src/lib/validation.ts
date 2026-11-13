import { z } from "zod";

export const briefFormSchema = z.object({
  brandName: z
    .string()
    .min(2, "Marka veya şirket adı en az 2 karakter olmalıdır.")
    .max(100, "Marka adı çok uzun."),
  contactName: z
    .string()
    .min(2, "Yetkili kişi adı en az 2 karakter olmalıdır.")
    .max(100, "İsim çok uzun."),
  email: z
    .string()
    .email("Geçerli bir kurumsal e-posta adresi giriniz."),
  phone: z
    .string()
    .max(25, "Telefon numarası çok uzun.")
    .optional(),
  selectedPackage: z
    .string()
    .min(1, "Lütfen bir paket seçiniz."),
  selectedAddons: z
    .array(z.string())
    .default([]),
  selectedPlatform: z
    .array(z.string())
    .min(1, "En az bir platform seçmelisiniz."),
  campaignGoal: z
    .string()
    .min(5, "Lütfen kampanya hedefinizi kısaca belirtiniz.")
    .max(1000, "Açıklama çok uzun."),
  budgetRange: z
    .string()
    .default("Hesaplanan Toplam Yatırım"),
  targetDate: z
    .string()
    .optional(),
  notes: z
    .string()
    .max(2000, "Notlar 2000 karakterden az olmalıdır.")
    .optional(),
  calculatedTotal: z
    .number()
    .nullable()
    .optional(),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "İş birliği sürecini başlatmak için bilgilendirmeyi onaylamalısınız.",
    }),
});

export type BriefFormValues = z.infer<typeof briefFormSchema>;
