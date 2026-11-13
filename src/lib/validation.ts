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
    .email("Geçerli bir e-posta adresi giriniz."),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz (örn: 05xx xxx xx xx).")
    .max(20, "Telefon numarası çok uzun."),
  selectedPackage: z
    .string()
    .min(1, "Lütfen ilgilendiğiniz bir paket seçiniz."),
  selectedPlatform: z
    .array(z.string())
    .min(1, "En az bir platform seçmelisiniz."),
  campaignGoal: z
    .string()
    .min(5, "Lütfen içerik veya kampanya amacınızı kısaca belirtiniz.")
    .max(1000, "Hedef açıklaması çok uzun."),
  budgetRange: z
    .string()
    .default("Belirtilmedi"),
  targetDate: z
    .string()
    .optional(),
  notes: z
    .string()
    .max(2000, "Notlar 2000 karakterden az olmalıdır.")
    .optional(),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "İş birliği sürecini başlatmak için bilgilendirmeyi onaylamalısınız.",
    }),
});

export type BriefFormValues = z.infer<typeof briefFormSchema>;
